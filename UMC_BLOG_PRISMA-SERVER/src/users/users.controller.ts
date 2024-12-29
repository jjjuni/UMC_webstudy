import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '@prisma/client'; // Prisma 타입 가져오기
import { RBAC, Role } from 'src/auth/decorators/rbac.decorator';
import { RBACGuard } from 'src/auth/guards/rbac.guard';
import {
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserRequest } from './dto/create-user.request';
import { User as UserEntity } from './entity/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: '회원가입',
    description: '회원가입을 합니다, role은 user | admin만 가능합니다.',
  })
  @ApiCreatedResponse({ type: UserEntity })
  async createUser(
    @Body()
    request: CreateUserRequest,
  ) {
    await this.userService.create(request);
  }

  @Get()
  @ApiOperation({
    summary: '유저 전체 목록 조회. (Admin)',
    description: '가입한 유저의 모든 정보를 조회합니다. (Admin)',
  })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard, RBACGuard)
  @RBAC(Role.admin)
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async getUsers(@CurrentUser() user: User) {
    console.log(user);
    return await this.userService.getUsers();
  }

  @Get('me')
  @ApiOperation({
    summary: '내 정보 조회',
    description: '나의 정보를 조회합니다.',
  })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async getMe(@CurrentUser() user: User) {
    return await this.userService.getMe({ id: user?.id });
  }
}
