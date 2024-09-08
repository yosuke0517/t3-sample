import { api } from "~/trpc/server";

export const getPosts = async () => {
  return await api.post.getPosts();
};
