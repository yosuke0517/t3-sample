"use client";

import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <button onClick={() => signOut()} className="hover:opacity-50">
      Sign out
    </button>
  );
};
