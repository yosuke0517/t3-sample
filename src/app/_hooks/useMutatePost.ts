import { api } from "~/trpc/server";
import {
  type CreatePostInput,
  createPostSchema,
  type UpdatePostInput,
  updatePostSchema,
} from "~/schema/post";
import { type Post } from "@prisma/client";

export const createPostMutation = async (
  input: CreatePostInput,
): Promise<Post> => {
  // Zodスキーマで引数をバリデート
  const validatedInput = createPostSchema.parse(input);

  // tRPC APIを呼び出す
  return await api.post.create({
    name: validatedInput.name,
    status: validatedInput.status,
  });
};

export const updatePostMutation = async (
  input: UpdatePostInput,
): Promise<Post> => {
  // Zodスキーマで引数をバリデート
  const validatedInput = updatePostSchema.parse(input);

  // tRPC APIを呼び出す
  return await api.post.updatePost({
    id: validatedInput.id,
    name: validatedInput.name,
    status: validatedInput.status,
  });
};

export const deletePostMutation = async (
  input: UpdatePostInput,
): Promise<Post> => {
  // Zodスキーマで引数をバリデート
  const validatedInput = updatePostSchema.parse(input);

  // tRPC APIを呼び出す
  return await api.post.deletePost({
    id: validatedInput.id,
  });
};
