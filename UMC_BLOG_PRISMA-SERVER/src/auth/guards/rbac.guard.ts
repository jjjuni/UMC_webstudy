import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RBAC, Role } from '../decorators/rbac.decorator';

@Injectable()
export class RBACGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get<Role>(RBAC, context.getHandler());
    console.log(Object.values(Role));
    // admin:0, user:1
    if (!Object.values(Role).includes(role)) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const userRole =
      typeof user.role === 'string'
        ? Role[user.role as keyof typeof Role]
        : user.role;

    if (!user) {
      return false;
    }

    if (userRole > role) {
      throw new UnauthorizedException('Admin 유저만 사용 가능한 API입니다.');
    }

    return userRole <= role;
  }
}
