import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CursorPaginationDto } from 'src/common/dto/cursor-pagination.dto';

export class GetPostsDto extends CursorPaginationDto {
  @ApiProperty({
    required: false,
    example: '고구마는 맛있는 게시글 제목입니다.',
  })
  @IsString()
  @IsOptional()
  title: string;
}
