import { signIn } from "next-auth/react";

export const Auth = () => {
  return (
    <div>
      <button
        className="rounded bg-amber-600 px-4 py-2 text-white"
        onClick={() => signIn("github")}
      >
        github auth
      </button>
    </div>
  );
};
