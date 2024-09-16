import PostList from "~/app/_components/PostList";
import PostForm from "~/app/_components/PostForm";
import { CreatePostAction } from "~/app/actions/CreatePostAction";
import React, { Suspense } from "react";
import { Typography } from "@mui/material";

export default async function PostPage() {
  return (
    <div className="mx-auto my-0 w-full p-4">
      <Typography variant="h3">Post 一覧</Typography>
      <Suspense fallback={<p>Loading...</p>}>
        <PostList />
      </Suspense>
      <PostForm createPost={CreatePostAction} />
    </div>
  );
}
