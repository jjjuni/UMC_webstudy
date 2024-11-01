import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @IsString()
  @ApiProperty({
    description: 'ToDo의 제목을 입력해주세요.',
    example: '고구마 아이스크림 구매하기!',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Todo의 내용 입력해주세요.',
    example: '근데 어디서 팔까요?',
  })
  content: string;

  @IsOptional()
  @ApiProperty({
    description: 'Todo를 했는지, 안했는지 여부를 작성해주세요.',
    example: true,
  })
  @IsBoolean()
  checked: boolean;
}
