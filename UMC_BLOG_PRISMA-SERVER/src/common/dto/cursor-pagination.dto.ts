import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CursorPaginationDto {
  @IsString()
  @IsOptional()
  // id_52, likeCount_20
  @ApiProperty({
    type: 'string',
    description:
      '커서 페이지네이션의 커서를 전달해주면 됩니다. nextCursor를 전달해주면 됩니다.',
    example: 1,
    required: false,
  })
  cursor?: string;

  @ApiProperty({
    type: [String],
    name: 'order[]',
    description:
      '정렬 순서를 지정합니다. 배열 형식으로 전달하세요. 예: ?order[]=id_DESC&order[]=likeCount_DESC (id_ASC, id_DESC, likeCount_ASC, likeCount_DESC)',
    example: ['id_DESC', 'likeCount_DESC'],
    required: false,
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  order: string[] = ['id_ASC'];

  @ApiProperty({
    type: 'number',
    description: '몇개의 게시글을 가져올지 정합니다. 기본값은 2입니다.',
    example: 2,
    required: false,
  })
  @IsInt()
  @Transform(({ value }) => {
    // value가 문자열일 때만 parseInt로 변환
    const parsedValue = parseInt(value, 10);
    console.log(parsedValue);
    return isNaN(parsedValue) ? 2 : parsedValue; // 값이 유효한 숫자가 아니면 기본값 2
  })
  @IsOptional()
  take: number = 2;
}
