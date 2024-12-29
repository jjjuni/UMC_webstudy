import { ApiProperty } from '@nestjs/swagger';
import { Post as PPost } from '@prisma/client';
import { Entity } from 'typeorm';

@Entity()
export class Post implements PPost {
  @ApiProperty()
  id: number;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  likeCount: number;

  @ApiProperty()
  dislikeCount: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  version: number;
}
