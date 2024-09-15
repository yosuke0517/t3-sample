import { type CreatePostInput } from "~/schema/post";
import { createPostMutation } from "~/app/_hooks/useMutatePost";
import { revalidateTag } from "next/cache";

export const CreatePostAction = async (data: CreatePostInput) => {
  "use server"; // Server Actionの宣言 （これはサーバサイドでのみ実行される）
  try {
    const result = await createPostMutation(data);
    revalidateTag("posts");
    return result;
  } catch (error) {
    console.error("Failed to create post:", error);
    throw new Error("Post creation failed");
  }
};
