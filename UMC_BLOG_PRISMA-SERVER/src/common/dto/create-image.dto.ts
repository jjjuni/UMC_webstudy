import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'PNG 파일 이미지 1장만 업로드가 가능합니다.',
  })
  @IsNotEmpty()
  image: Express.Multer.File;
}
