"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPostsOption } from "~/app/_hooks/config";

const PostList = () => {
  const { data, isFetching } = useSuspenseQuery(getPostsOption);

  if (isFetching) return <p>ローディング中...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">Post 一覧</h2>
      <ul>
        {data?.posts.map((post) => (
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
