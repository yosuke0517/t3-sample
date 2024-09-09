import PostList from "~/app/_components/PostList";
import PostForm from "~/app/_components/PostForm";
import { CreatePostAction } from "~/app/actions/CreatePostAction";

export const PostContainer = () => {
  return (
    <div className="mx-auto my-0 w-full p-4">
      <PostList />
      <PostForm createPost={CreatePostAction} />
    </div>
  );
};
