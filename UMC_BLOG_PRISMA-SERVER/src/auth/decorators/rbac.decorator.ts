import { Reflector } from '@nestjs/core';

export enum Role {
  admin,
  user,
}

export const RBAC = Reflector.createDecorator<Role>();
