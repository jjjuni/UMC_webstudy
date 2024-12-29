import { ApiProperty } from '@nestjs/swagger';
import { Post } from '../entity/post.entity';

export class GetPostsResponseDto {
  @ApiProperty({ type: [Post] }) // Post 엔터티를 배열로 정의
  data: Post[];

  @ApiProperty({
    type: String,
    nullable: true,
    description: '다음 페이지를 위한 커서',
  })
  nextCursor: string | null;

  @ApiProperty({ type: Boolean, description: '다음 페이지 존재 여부' })
  hasNextPage: boolean;
}
