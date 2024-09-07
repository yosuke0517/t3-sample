"use client";
import { SignOutButton } from "~/app/_components/SignOutButton";
import { useSession } from "next-auth/react";

export const LayoutHeader = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p>client component {session?.user?.name}</p>
      <SignOutButton />
    </div>
  );
};
