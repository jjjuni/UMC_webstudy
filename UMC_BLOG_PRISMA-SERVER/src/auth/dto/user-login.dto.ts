import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class UserLoginDto {
  @ApiProperty({ required: true, example: 'dydals3440@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: 'Smu123!!' })
  @IsStrongPassword()
  password: string;
}
