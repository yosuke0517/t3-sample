import { getServerAuthSession } from "~/server/auth";
import { AuthWrap } from "~/app/_components/AuthWrap";
import { LayoutHeader } from "~/app/_components/LayoutHeader";
import { PostContainer } from "~/app/_components/PostContainer";
import { UsePostsQuery } from "~/app/_hooks/useQueryPost";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchPosts } from "~/app/_hooks/infra/fetchPosts";
import { POST_QUERY_KEYS } from "~/app/_hooks/config";

export default async function Home() {
  const session = await getServerAuthSession();
  const queryClient = await UsePostsQuery(
    POST_QUERY_KEYS.FETCH_POSTS,
    fetchPosts,
  );

  // NOTE: HydrationBoundaryでラップしていることで、子のclient componentでもデータが参照可能
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen flex-col items-center">
        {session ? <PostContainer /> : <AuthWrap />}
      </main>
    </HydrationBoundary>
  );
}
