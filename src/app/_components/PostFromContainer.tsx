import PostForm from "~/app/_components/PostForm";
import { CreatePostAction } from "~/app/actions/CreatePostAction";

export const PostFromContainer = () => {
  return <PostForm createPost={CreatePostAction} />;
};
