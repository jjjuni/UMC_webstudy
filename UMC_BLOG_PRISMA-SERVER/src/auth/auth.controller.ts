import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from 'src/users/entity/user.entity';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiBody, ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from './dto/user-login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: UserLoginDto })
  @ApiOperation({
    summary: '로그인',
    description:
      '로그인 성공시, accessToken, refreshToken 키값으로, 쿠키가 생성됩니다.',
  })
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.login(user, response);
  }

  @ApiCookieAuth()
  @ApiOperation({
    summary: '토큰 재발급',
    description:
      '토큰 재발급 성공시, accessToken, refreshToken 키값으로, 쿠키가 재발급됩니다. 이 요청에는 refreshToken cookie를 활용합니다.',
  })
  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  async refreshToken(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('리프레시가 동작하면 이게 실행됩니다');
    return await this.authService.login(user, response);
  }

  @ApiCookieAuth()
  @ApiOperation({
    summary: '로그아웃',
    description:
      '모든 쿠키 정보를 삭제하여 로그아웃합니다. 이 요청에는 accessToken이 필요합니다.',
  })
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.authService.logout(user, response);
  }
}
