import { type CreatePostInput } from "~/schema/post";
import { createPostMutation } from "~/app/_hooks/useMutatePost";

export const CreatePostAction = async (data: CreatePostInput) => {
  "use server"; // Server Actionの宣言 （これはサーバサイドでのみ実行される）
  try {
    return await createPostMutation(data);
  } catch (error) {
    console.error("Failed to create post:", error);
    throw new Error("Post creation failed");
  }
};
