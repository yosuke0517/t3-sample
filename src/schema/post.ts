import { z } from "zod";

export const createPostSchema = z.object({
  name: z.string().min(1),
  status: z.enum(["", "DRAFT", "PUBLISHED"]),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;

export const updatePostSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

export type UpdatePostInput = z.infer<typeof updatePostSchema>;

export const getSinglePostSchema = z.object({
  id: z.number(),
});

export const deletePostSchema = z.object({
  id: z.number(),
});
