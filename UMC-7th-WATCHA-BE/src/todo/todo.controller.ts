import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
} from '@nestjs/common';

import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { TodoService } from '@src/todo/todo.service';
import { CreateTodoDto } from '@src/todo/dto/create-todo.dto';
import { UpdateTodoDto } from '@src/todo/dto/update-todo.dto';

@ApiTags('todo')
@Controller('todo')
@UseInterceptors(ClassSerializerInterceptor)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({
    description:
      '[Todo]를 조회하는 API, query-parameter를 넘길 경우, 해당 title에 대응하는, todo 목록을 줍니다. ',
  })
  @ApiOkResponse()
  @ApiQuery({ name: 'title', required: false, description: 'Todo 제목 입력' })
  findAll(@Query('title') title?: string) {
    return this.todoService.findAll(title);
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
