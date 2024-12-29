import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { Response } from 'express';
import { User } from 'src/users/entity/user.entity';

import { UsersService } from 'src/users/users.service';
import { TokenPayload } from './interface/token-payload.interface';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async login(user: User, response: Response) {
    const expiresAccessToken = new Date();
    expiresAccessToken.setMilliseconds(
      expiresAccessToken.getTime() +
        parseInt(
          this.configService.getOrThrow<string>(
            'JWT_ACCESS_TOKEN_EXPIRATION_MS',
          ),
        ),
    );

    const expiresRefreshToken = new Date();
    expiresRefreshToken.setMilliseconds(
      expiresRefreshToken.getTime() +
        parseInt(
          this.configService.getOrThrow<string>(
            'JWT_REFRESH_TOKEN_EXPIRATION_MS',
          ),
        ),
    );

    const tokenPayload: TokenPayload = {
      userId: user.id.toString(),
    };

    const accessToken = this.jwtService.sign(tokenPayload, {
      secret: this.configService.getOrThrow<string>('JWT_ACCESS_TOKEN_SECRET'),
      expiresIn: `${this.configService.getOrThrow<string>('JWT_ACCESS_TOKEN_EXPIRATION_MS')}ms`,
    });

    const refreshToken = this.jwtService.sign(tokenPayload, {
      secret: this.configService.getOrThrow<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: `${this.configService.getOrThrow<string>('JWT_REFRESH_TOKEN_EXPIRATION_MS')}ms`,
    });

    // layer (rotate refresh token) -> 유저가 갖고있음.
    await this.usersService.updateUser(
      {
        id: user.id,
      },
      {
        refreshToken: await hash(refreshToken, 10),
      },
    );
    response.cookie('refreshToken', refreshToken, {
      httpOnly: false,
      // production 환경에서만 secure 속성을 true로 설정합니다.
      secure: this.configService.get('NODE_ENV') === 'production',
      expires: expiresRefreshToken,
    });

    response.cookie('accessToken', accessToken, {
      httpOnly: false,
      // production 환경에서만 secure 속성을 true로 설정합니다.
      secure: this.configService.get('NODE_ENV') === 'production',
      expires: expiresAccessToken,
    });
  }

  async verifyUser(email: string, password: string) {
    try {
      const user = await this.usersService.getUser({ email });

      const authenticated = await compare(password, user.password);

      if (!authenticated) {
        throw new UnauthorizedException();
      }

      return user;
    } catch {
      throw new UnauthorizedException('Credentials Are Not Valid');
    }
  }

  async verifyUserRefreshToken(refreshToken: string, userId: string) {
    try {
      const user = await this.usersService.getUser({ id: Number(userId) });
      const authenticated = await compare(refreshToken, user.refreshToken);
      if (!authenticated) {
        throw new UnauthorizedException();
      }
      return user;
    } catch {
      throw new UnauthorizedException('RefreshToken Is Not Valid');
    }
  }

  async logout(user: User, response: Response) {
    const loginUser = await this.prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!loginUser) {
      throw new UnauthorizedException('로그인한 유저 정보를 찾을 수 없습니다.');
    }

    // 데이터베이스에서 Refresh Token 제거
    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: null },
    });

    // 쿠키 삭제 - 생성 시 사용한 옵션과 동일하게 설정
    response.clearCookie('refreshToken', {
      httpOnly: false,
      secure: this.configService.get('NODE_ENV') === 'production',
      sameSite: 'strict', // 생성 시의 sameSite 옵션과 동일
      path: '/', // 쿠키 생성 시 설정된 path
    });

    response.clearCookie('accessToken', {
      httpOnly: false,
      secure: this.configService.get('NODE_ENV') === 'production',
      sameSite: 'strict',
      path: '/',
    });

    // 로그아웃 완료 응답
    return;
  }
}
