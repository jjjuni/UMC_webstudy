import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CommonService } from './common.service';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';
import { CommonController } from './common.controller';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(process.cwd(), 'public', 'temp'),
        filename: (req, file, cb) => {
          const split = file.originalname.split('.');

          let extension = 'png';

          if (split.length > 1) {
            extension = split[split.length - 1];
          }

          cb(null, `${v4()}_${Date.now()}.${extension}`);
        },
      }),
    }),
  ],
  providers: [PrismaService, CommonService],
  exports: [PrismaService],
  controllers: [CommonController],
})
export class CommonModule {}
