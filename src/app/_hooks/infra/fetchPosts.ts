import type { Post } from "@prisma/client";

export const fetchPosts = async (): Promise<{ posts: Post[] }> => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3秒待つ
  console.log("3秒待ちます");
  // ここでfetch APIを使ってタグを付与
  const response = await fetch("http://localhost:3000/api/posts", {
    // cache: "no-cache", // キャッシュを無効化
    // ↑ app routerにする意味がほとんどなくなるので基本しない
    next: { tags: ["posts"] }, // "posts"タグを使ってキャッシュ制御
  });
  return response.json();
};

export const fetchPostById = async (id: string): Promise<{ post: Post }> => {
  // ここでfetch APIを使ってタグを付与
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    next: { tags: ["post"] }, // "posts"タグを使ってキャッシュ制御
  });
  return response.json();
};
