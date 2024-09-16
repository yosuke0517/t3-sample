"use client"; // クライアントコンポーネントとして定義

import Link from "next/link";
import { type Post } from "@prisma/client";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <li className="flex">
      タイトル：
      <Link href={`/post/${post.id}`} className="w-60 text-blue-700">
        <p>{post.name}</p>
      </Link>
      <p>ステータス: {post.status || "blank"}</p>
    </li>
  );
};

export default PostItem;
