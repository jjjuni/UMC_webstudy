import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsStrongPassword,
  IsOptional,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export enum UserRole {
  User = 'user',
  Admin = 'admin',
}

export class CreateUserRequest {
  @ApiProperty({ required: true, example: 'dydals3440@gmail.com' })
  @IsEmail({}, {message: '이메일을 확인해주세요'})
  email: string;

  @ApiProperty({ required: true, example: 'Smu123!!' })
  @IsStrongPassword({}, {message: '비밀번호를 확인해주세요'})
  password: string;

  @ApiProperty({ required: true, example: '주니' })
  @IsString()
  @MinLength(2, { message: '이름을 확인해주세요' })
  username: string;

  @ApiProperty({
    required: false,
    example: 'user',
    description: 'user 또는 admin만 가능합니다.',
  })
  @IsString()
  @IsOptional()
  role?: string | null;
}
