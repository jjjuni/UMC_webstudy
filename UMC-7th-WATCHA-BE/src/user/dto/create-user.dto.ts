import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  passwordCheck: string;

  @IsString()
  username: string;
}
