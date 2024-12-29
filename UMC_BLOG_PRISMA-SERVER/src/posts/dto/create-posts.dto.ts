import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePostsDto {
  @ApiProperty({
    required: true,
    example: '고구마는 맛있는 게시글 제목입니다.',
  })
  @IsString()
  title: string;

  @ApiProperty({ required: true, example: '리액트 넥스트, 네스트, 노드 야호!' })
  @IsString()
  content: string;

  @ApiProperty({
    required: false,
    example:
      '이미지는 필수가 아니며, 반드시, preupload image api를 통해, 받은 imageUrl을 넘겨주셔야 합니다.',
  })
  @IsString()
  @IsOptional()
  imageUrl: string;
}
