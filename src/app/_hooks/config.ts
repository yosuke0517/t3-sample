import { queryOptions } from "@tanstack/react-query";
import { fetchPostById, fetchPosts } from "~/app/_hooks/infra/fetchPosts";

export const POST_QUERY_KEYS = {
  FETCH_POSTS: ["posts"],
  FETCH_POST_BY_ID: ["post"],
};

export const getPostsOption = queryOptions({
  queryKey: POST_QUERY_KEYS.FETCH_POSTS,
  queryFn: fetchPosts,
});

export const getPostByIdOption = (id: string) =>
  queryOptions({
    queryKey: [...POST_QUERY_KEYS.FETCH_POST_BY_ID, id], // クエリキーにIDを追加
    queryFn: () => fetchPostById(id), // IDを渡してデータを取得
  });
