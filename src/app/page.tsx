import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import { AuthWrap } from "~/app/_components/AuthWrap";
import { LayoutHeader } from "~/app/_components/LayoutHeader";
import { PostContainer } from "~/app/_components/PostContainer";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center">
        {session ? (
          <div className="w-full">
            <LayoutHeader />
            <PostContainer />
          </div>
        ) : (
          <AuthWrap />
        )}
      </main>
    </HydrateClient>
  );
}
