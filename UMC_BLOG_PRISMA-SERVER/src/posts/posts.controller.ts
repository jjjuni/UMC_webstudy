import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { GetPostsDto } from './dto/get-posts.dto';
import {
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePostsDto } from './dto/create-posts.dto';
import { Post as EPost } from './entity/post.entity';
import { GetPostsResponseDto } from './dto/get-posts-response.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  @ApiOperation({
    summary: '게시글 작성',
    description: '게시글 작성을 합니다.',
  })
  @ApiCreatedResponse({ type: EPost })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard)
  async createPost(
    @Body()
    request: CreatePostsDto,
    @CurrentUser() user: User,
  ) {
    return this.postService.create(request, user?.id);
  }

  @Get()
  @ApiOperation({
    summary: '게시글 목록 조회',
    description: '게시글 목록을 가져옵니다. (비로그인도 사용가능)',
  })
  @ApiOkResponse({ type: GetPostsResponseDto })
  getPosts(@Query() dto: GetPostsDto, @CurrentUser() user: User) {
    return this.postService.findAll(dto, user?.id);
  }

  @Get(':id')
  @ApiOperation({
    summary: '게시글 단일 조회',
    description: '게시글 한건을 가져옵니다. (비로그인도 사용가능)',
  })
  @ApiOkResponse({ type: EPost })
  async getPost(@Param('id', ParseIntPipe) id: number) {
    return await this.postService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '게시글 수정',
    description: '게시글을 수정합니다.',
  })
  @ApiCreatedResponse({ type: EPost })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard)
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: User,
    @Body()
    request: CreatePostsDto,
  ) {
    return this.postService.update(id, request, user.id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '게시글 삭제',
    description: '게시글을 삭제합니다.',
  })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard)
  async deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }

  @Post(':id/like')
  @ApiOperation({
    summary: '게시글 좋아요 수 증가',
    description:
      '게시글의 likeCount를 1 증가시킵니다. 좋아요 성공시, true응답, 이미 좋아요 했을 시 null 응답',
  })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard)
  createMovieLike(
    @Param('id', ParseIntPipe) postId: number,
    @CurrentUser() user: User,
  ) {
    console.log(user);
    return this.postService.togglePostLike(postId, user.id, true);
  }

  @Post(':id/dislike')
  @ApiOperation({
    summary: '게시글 싫어요 수 증가',
    description:
      '게시글의 dislikeCount를 1 증가시킵니다. 싫어요 성공시, false응답, 이미 싫어요 했을 시 null 응답',
  })
  @ApiCookieAuth()
  @UseGuards(JwtAuthGuard)
  createMovieDislike(
    @Param('id', ParseIntPipe) postId: number,
    @CurrentUser() user: User,
  ) {
    return this.postService.togglePostLike(postId, user.id, false);
  }
}
