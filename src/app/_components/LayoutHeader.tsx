"use client";
import { SignOutButton } from "~/app/_components/SignOutButton";
import { useSession } from "next-auth/react";

export const LayoutHeader = () => {
  const { data: session } = useSession();
  return (
    <div className="flex w-full justify-between bg-blue-700 px-3 py-1 text-white">
      <p>Hello!! {session?.user?.name}</p>
      <SignOutButton />
    </div>
  );
};
