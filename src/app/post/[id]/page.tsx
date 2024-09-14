import { UsePostsQuery } from "~/app/_hooks/useQueryPost";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchPostById } from "~/app/_hooks/infra/fetchPosts";
import { POST_QUERY_KEYS } from "~/app/_hooks/config";
import PostDetailContainer from "~/app/_components/PostDetail";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const queryClient = await UsePostsQuery(
    POST_QUERY_KEYS.FETCH_POST_BY_ID,
    () => fetchPostById(id),
  );

  // NOTE: HydrationBoundaryでラップしていることで、子のclient componentでもデータが参照可能
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailContainer id={id} />
    </HydrationBoundary>
  );
}
