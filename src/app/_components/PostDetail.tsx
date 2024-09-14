"use client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getPostByIdOption } from "~/app/_hooks/config";
import { Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  id: string;
};

const PostDetailContainer: React.FC<Props> = ({ id }) => {
  const { data, isFetching } = useSuspenseQuery(getPostByIdOption(id));
  console.log("data", data);

  return (
    <div>
      <Typography variant="h3">Post 一覧</Typography>
      {isFetching && <p>ローディング</p>}
      {data && (
        <div>
          <p>{data.post.name}</p>
        </div>
      )}
      <Link href="/post">一覧に戻る</Link>
    </div>
  );
};

export default PostDetailContainer;
