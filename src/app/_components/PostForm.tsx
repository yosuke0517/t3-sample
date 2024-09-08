"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema, type CreatePostInput } from "~/schema/post";
import { type Post } from "@prisma/client";
import { useRouter } from "next/navigation";

type PostFormProps = {
  // createPostはserver actionのため props で受け取る
  createPost: (data: CreatePostInput) => Promise<Post>;
};

const PostForm: React.FC<PostFormProps> = ({ createPost }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostInput>({
    resolver: zodResolver(createPostSchema),
  });

  const onSubmit = async (data: CreatePostInput) => {
    try {
      await createPost(data);
      // TODO tanstack query に変更
      router.refresh();

      console.log("Post created");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Post Name</label>
        <input
          className="rounded border border-gray-300"
          id="name"
          type="text"
          {...register("name")}
          placeholder="Enter post name"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <button
        className="rounded bg-green-600 px-4 py-2 text-white"
        type="submit"
      >
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
