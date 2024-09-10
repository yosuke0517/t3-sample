import { queryOptions } from "@tanstack/react-query";
import { fetchPosts } from "~/app/_hooks/infra/fetchPosts";

export const POST_QUERY_KEYS = {
  FETCH_POSTS: ["posts"],
};

export const getPostsOption = queryOptions({
  queryKey: POST_QUERY_KEYS.FETCH_POSTS,
  queryFn: fetchPosts,
});
