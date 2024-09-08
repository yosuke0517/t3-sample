import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import { AuthWrap } from "~/app/_components/AuthWrap";
import { LayoutHeader } from "~/app/_components/LayoutHeader";
import PostList from "~/app/_components/PostList";
import { PostFromContainer } from "~/app/_components/PostFromContainer";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {session ? (
          <div>
            <p>server component user: {session.user.name}</p>
            <LayoutHeader />
            <PostList />
            <PostFromContainer />
          </div>
        ) : (
          <AuthWrap />
        )}
      </main>
    </HydrateClient>
  );
}
