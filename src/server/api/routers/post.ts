import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import {
  createPostSchema,
  deletePostSchema,
  getSinglePostSchema,
  updatePostSchema,
} from "~/schema/post";

export const postRouter = createTRPCRouter({
  // publicProcedure は認証なしでアクセス可能
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // protectedProcedure は認証済みのユーザーのみアクセス可能
  create: protectedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          status: "DRAFT", // 一旦 DRAFT で作成
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getPosts: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      where: { createdBy: { id: ctx.session?.user.id } },
      orderBy: { createdAt: "desc" },
    });
  }),

  getPostById: protectedProcedure
    .input(getSinglePostSchema)
    .query(async ({ input, ctx }) => {
      return ctx.db.post.findUnique({
        where: { id: input.id, createdBy: { id: ctx.session.user.id } },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  updatePost: protectedProcedure
    .input(updatePostSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.db.post.update({
        where: { id: input.id },
        data: { name: input.name },
      });
    }),

  deletePost: protectedProcedure
    .input(deletePostSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.db.post.delete({
        where: { id: input.id },
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
