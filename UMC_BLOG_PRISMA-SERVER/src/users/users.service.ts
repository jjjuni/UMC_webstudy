import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Prisma, User } from '@prisma/client'; // Prisma 타입 가져오기

import { hash } from 'bcryptjs';
import { PrismaService } from 'src/common/prisma.service';
import { CreateUserRequest } from './dto/create-user.request';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserRequest) {
    if (data.role !== 'user' && data.role !== 'admin') {
      throw new ConflictException('role은 user 또는 admin만 가능합니다.');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new ConflictException('이미 가입된 이메일입니다!');
    }

    await this.prisma.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
  }

  async getUser(query: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findUnique({
      where: query,
    });

    if (!user) {
      throw new NotFoundException('유저 찾을 수 없음');
    }
    return user;
  }

  async getUsers() {
    // Prisma의 findMany를 이용해 모든 사용자 조회
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
      },
    });
  }

  async updateUser(
    query: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    // 유저 조회
    const user = await this.prisma.user.findUnique({
      where: {
        id: query.id,
      },
    });
    // 유저가 존재하지 않는 경우 예외 발생
    if (!user) {
      throw new NotFoundException('유저 찾을 수 없음');
    }

    // 새로운 데이터로 유저 정보 업데이트
    const updatedUser = Object.assign(user, data);

    // 업데이트된 유저 정보 저장 및 반환
    return this.prisma.user.update({
      where: {
        id: query.id,
      },
      data: updatedUser,
    });
  }

  async getMe(query: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findUnique({
      where: query,
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
      },
    });

    if (!user) {
      throw new NotFoundException('유저 찾을 수 없음');
    }
    return user;
  }
}
