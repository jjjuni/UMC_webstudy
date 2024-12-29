import { ApiProperty } from '@nestjs/swagger';
import { User as PUser } from '@prisma/client';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements PUser {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column({ nullable: true })
  refreshToken: string;

  @ApiProperty()
  @Column()
  role: string;
}
