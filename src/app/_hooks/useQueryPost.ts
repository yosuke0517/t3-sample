import { type Post } from "@prisma/client";

export const fetchPosts = async (): Promise<{ posts: Post[] }> => {
  // ここでfetch APIを使ってタグを付与
  const response = await fetch("http://localhost:3000/api/posts", {
    next: { tags: ["posts"] }, // "posts"タグを使ってキャッシュ制御
  });
  return response.json();
};
