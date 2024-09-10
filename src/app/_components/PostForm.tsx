"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema, type CreatePostInput } from "~/schema/post";
import { type Post } from "@prisma/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPostsOption } from "~/app/_hooks/config";

type PostFormProps = {
  // createPostはserver actionのため props で受け取る
  createPost: (data: CreatePostInput) => Promise<Post>;
};

const PostForm: React.FC<PostFormProps> = ({ createPost }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostInput>({
    resolver: zodResolver(createPostSchema),
  });

  const { refetch, isFetching } = useSuspenseQuery(getPostsOption);

  const onSubmit = async (data: CreatePostInput) => {
    try {
      const createdPost = await createPost(data);
      if (createdPost) reset();
      await refetch();
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="flex items-center gap-4">
        <label htmlFor="name">Post 投稿しましょう</label>
        <input
          className="rounded border border-gray-300"
          id="name"
          type="text"
          {...register("name")}
          placeholder="Enter post name"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <button
          disabled={isFetching}
          className="rounded bg-green-600 px-4 py-2 text-white"
          type="submit"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
