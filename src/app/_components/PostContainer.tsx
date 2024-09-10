import PostList from "~/app/_components/PostList";
import PostForm from "~/app/_components/PostForm";
import { CreatePostAction } from "~/app/actions/CreatePostAction";
import React, { Suspense } from "react";

export const PostContainer = () => {
  return (
    <div className="mx-auto my-0 w-full p-4">
      <Suspense fallback={<p>Loading...</p>}>
        <PostList />
        <PostForm createPost={CreatePostAction} />
      </Suspense>
    </div>
  );
};
