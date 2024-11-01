import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userReposiotry: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    // await 있어도 없어도 됨.
    return this.userReposiotry.save(createUserDto);
  }

  findAll() {
    return this.userReposiotry.find();
  }

  findOne(id: number) {
    const user = this.userReposiotry.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('존재하지 않는 사용자입니다!');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userReposiotry.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('존재하지 않는 사용자입니다!');
    }

    await this.userReposiotry.update({ id }, updateUserDto);

    return this.userReposiotry.findOne({
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.userReposiotry.delete(id);
  }
}
