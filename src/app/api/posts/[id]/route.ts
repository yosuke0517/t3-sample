import { api } from "~/trpc/server";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  // Number型に変換したIDを取得
  const postId = Number(params.id);
  console.log("postId", postId);

  try {
    const post = await api.post.getPostById({ id: postId }); // tRPCでデータを取得
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch posts detail:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
