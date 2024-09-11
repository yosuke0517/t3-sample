import { PostContainer } from "~/app/_components/PostContainer";
import { UsePostsQuery } from "~/app/_hooks/useQueryPost";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchPosts } from "~/app/_hooks/infra/fetchPosts";
import { POST_QUERY_KEYS } from "~/app/_hooks/config";

export default async function PostPage() {
  const queryClient = await UsePostsQuery(
    POST_QUERY_KEYS.FETCH_POSTS,
    fetchPosts,
  );

  // NOTE: HydrationBoundaryでラップしていることで、子のclient componentでもデータが参照可能
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostContainer />
    </HydrationBoundary>
  );
}
