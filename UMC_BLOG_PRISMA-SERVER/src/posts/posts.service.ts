import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { GetPostsDto } from './dto/get-posts.dto';
import { Prisma } from '@prisma/client';
import { join } from 'path';
import { rename } from 'fs/promises';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(dto: GetPostsDto, userId?: number) {
    const { title, cursor, take = 2, order = ['id_ASC'] } = dto;

    // `orderBy` 변환: 필드와 방향 분리 후 소문자로 변환
    const orderBy = order.map((field) => {
      const [column, direction] = field.split('_');
      return { [column]: direction.toLowerCase() };
    });

    // 유효한 커서 검증
    const validCursor = cursor
      ? await this.prisma.post.findFirst({
          where: { id: parseInt(cursor) },
          select: { id: true },
        })
      : null;

    // Prisma 쿼리
    const posts = await this.prisma.post.findMany({
      where: {
        AND: [
          title ? { title: { contains: title } } : {},
          validCursor ? { id: { gte: parseInt(cursor) } } : {},
        ],
      },
      take: Number(take) + 1, // 한 개 더 가져오기
      skip: validCursor ? 1 : 0, // 커서가 유효하면 첫 항목 스킵
      orderBy,
      include: {
        likedUsers: {
          select: {
            user: {
              select: {
                id: true,
                email: true,
                role: true,
              },
            },
          },
        },
      },
    });

    // 다음 페이지 여부 판단
    const hasNextPage = posts.length > take;

    // 마지막 항목 제거하여 페이지네이션 구현
    if (hasNextPage) posts.pop();

    // 다음 커서 계산
    const nextCursor = hasNextPage
      ? posts[posts.length - 1]?.id.toString()
      : null;

    // 유저가 있을 경우, 좋아요 정보 추가
    if (userId) {
      const postIds = posts.map((post) => post.id);

      // 좋아요 상태 조회
      const likedPosts = postIds.length
        ? await this.prisma.postUserLike.findMany({
            where: {
              postId: { in: postIds },
              userId,
            },
            select: {
              postId: true,
              isLike: true,
            },
          })
        : [];

      const likedPostsMap = likedPosts.reduce(
        (acc, { postId, isLike }) => {
          acc[postId] = isLike;
          return acc;
        },
        {} as Record<number, boolean>,
      );

      return {
        data: posts.map((post) => ({
          ...post,
          likeStatus: likedPostsMap[post.id] ?? null, // 좋아요 상태 추가
        })),
        nextCursor,
        hasNextPage,
      };
    }

    // 기본 응답 반환
    return {
      data: posts,
      nextCursor,
      hasNextPage,
    };
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!post) {
      throw new NotFoundException('존재하지 않는 ID의 게시글입니다.');
    }

    return post;
  }

  async remove(id: number) {
    const post = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      throw new NotFoundException('존재하지 않는 ID의 게시글입니다.');
    }

    await this.prisma.post.delete({
      where: { id },
    });

    return id;
  }

  async togglePostLike(postId: number, userId: number, isLike: boolean) {
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new NotFoundException('존재하지 않는 ID의 게시글입니다.');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('존재하지 않는 ID의 유저입니다.');
    }

    const likeRecord = await this.prisma.postUserLike.findUnique({
      where: {
        postId_userId: { postId, userId },
      },
    });

    if (likeRecord) {
      if (isLike === likeRecord.isLike) {
        await this.prisma.postUserLike.delete({
          where: {
            postId_userId: { postId, userId },
          },
        });

        if (isLike) {
          await this.prisma.post.update({
            where: { id: postId },
            data: { likeCount: { decrement: 1 } },
          });
        } else {
          await this.prisma.post.update({
            where: { id: postId },
            data: { dislikeCount: { decrement: 1 } },
          });
        }
      } else {
        await this.prisma.postUserLike.update({
          where: {
            postId_userId: { postId, userId },
          },
          data: {
            isLike,
          },
        });

        if (isLike) {
          await this.prisma.post.update({
            where: { id: postId },
            data: {
              likeCount: { increment: 1 },
              dislikeCount: { decrement: 1 },
            },
          });
        } else {
          await this.prisma.post.update({
            where: { id: postId },
            data: {
              likeCount: { decrement: 1 },
              dislikeCount: { increment: 1 },
            },
          });
        }
      }
    } else {
      await this.prisma.postUserLike.create({
        data: {
          post: { connect: { id: postId } },
          user: { connect: { id: userId } },
          isLike,
        },
      });

      if (isLike) {
        await this.prisma.post.update({
          where: { id: postId },
          data: { likeCount: { increment: 1 } },
        });
      } else {
        await this.prisma.post.update({
          where: { id: postId },
          data: { dislikeCount: { increment: 1 } },
        });
      }
    }

    const result = await this.prisma.postUserLike.findUnique({
      where: {
        postId_userId: { postId, userId },
      },
    });

    return {
      isLike: result && result.isLike,
    };
  }

  async create(
    request: Pick<Prisma.PostCreateInput, 'title' | 'content' | 'imageUrl'>,
    userId: number,
  ) {
    // TODO: image 추가
    return this.prisma.$transaction(async (prisma) => {
      const imageFolder = join('public', 'image');
      const tempFolder = join('public', 'temp');

      const post = await prisma.post.create({
        data: {
          title: request.title,
          imageUrl: request.imageUrl
            ? join(imageFolder, request.imageUrl)
            : null,
          content: request.content,
          author: { connect: { id: userId } },
        },
      });

      if (request.imageUrl) {
        await rename(
          join(process.cwd(), tempFolder, request.imageUrl),
          join(process.cwd(), imageFolder, request.imageUrl),
        );
      }

      return post;
    });
  }

  async update(
    id: number,
    request: Pick<Prisma.PostUpdateInput, 'imageUrl' | 'content' | 'title'>,
    userId: number,
  ) {
    return this.prisma.$transaction(async (prisma) => {
      const imageFolder = join('public', 'image');
      const tempFolder = join('public', 'temp');

      const post = await prisma.post.findUnique({
        where: { id },
      });

      if (!post) {
        throw new NotFoundException('존재하지 않는 ID의 게시글입니다.');
      }

      if (post.authorId !== userId) {
        throw new NotFoundException('게시글 작성자만 수정할 수 있습니다.');
      }

      await prisma.post.update({
        where: { id },
        data: {
          title: request.title,
          imageUrl: request.imageUrl
            ? join(imageFolder, request.imageUrl as string)
            : null,
          content: request.content,
          version: {
            increment: 1,
          },
        },
      });

      if (request.imageUrl) {
        await rename(
          join(process.cwd(), tempFolder, request.imageUrl as string),
          join(process.cwd(), imageFolder, request.imageUrl as string),
        );
      }

      return prisma.post.findUnique({
        where: { id },
        include: {
          author: {
            select: {
              id: true,
              email: true,
              role: true,
            },
          },
        },
      });
    });
  }
}
