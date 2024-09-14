"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPostsOption } from "~/app/_hooks/config";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const PostList = () => {
  const { data, isFetching } = useSuspenseQuery(getPostsOption);
  const router = useRouter();

  return (
    <div>
      <Typography variant="h3">Post 一覧</Typography>
      <ul>
        {isFetching && <p>ローディング中...</p>}
        {!isFetching &&
          data?.posts.map((post) => (
            <li key={post.id} className="flex">
              タイトル：
              <Link href={`/post/${post.id}`} className="w-60 text-blue-700">
                <p>{post.name}</p>
              </Link>
              <p>ステータス: {post.status || "blank"}</p>
            </li>
          ))}
      </ul>
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => router.refresh()}
        >
          リロードする
        </Button>
      </Box>
    </div>
  );
};

export default PostList;
