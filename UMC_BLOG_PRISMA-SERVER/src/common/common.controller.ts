import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiFile } from './decorators/api-file.decorator';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('common')
@Controller('common')
export class CommonController {
  @Post('image')
  @ApiOperation({
    summary: '사전 이미지 업로드',
    description:
      '이미지를 미리 업로드하여, URL을 반환 받습니다. 1개의 이미지만 가능하며 png 파일만 가능합니다, 반환 받은 URL을 통해, 추후 게시글 작성시 imageUrl에 넘겨주시면 됩니다. public temp 폴더에 임시 저장했다가, 추후 게시글 업로드에 해당 imageUrl을 사용시, image 폴더로 이동합니다. (image 폴더로 이미지가 이동해야, 실제 화면에 보임)',
  })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard)
  @ApiFile('image', {
    limits: {
      fileSize: 20000000,
    },
    fileFilter(req, file, callback) {
      if (file.mimetype !== 'image/png') {
        return callback(
          new BadRequestException('PNG 타입의 파일만 업로드 가능합니다.'),
          false,
        );
      }

      return callback(null, true);
    },
  })
  createImage(@UploadedFile() image: Express.Multer.File) {
    return {
      imageUrl: image.filename,
    };
  }
}
