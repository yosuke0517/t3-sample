"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPostsOption } from "~/app/_hooks/config";
import { Typography } from "@mui/material";

const PostList = () => {
  const { data, isFetching } = useSuspenseQuery(getPostsOption);

  return (
    <div>
      <Typography variant="h3">Post 一覧</Typography>
      <ul>
        {isFetching && <p>ローディング中...</p>}
        {!isFetching &&
          data?.posts.map((post) => (
            <li key={post.id} className="flex">
              <Link href={`/post/${post.id}`} className="w-60 text-blue-700">
                <p>{post.name}</p>
              </Link>
              <p>ステータス: {post.status}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostList;
