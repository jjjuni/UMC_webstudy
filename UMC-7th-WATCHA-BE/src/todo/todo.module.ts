import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '@src/todo/entity/todo.entity';
import { TodoController } from '@src/todo/todo.controller';
import { TodoService } from '@src/todo/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
