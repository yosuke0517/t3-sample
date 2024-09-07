import { signIn } from "next-auth/react";

export const Auth = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={() => signIn("github")}>github auth</button>
    </div>
  );
};
