import { api } from "~/trpc/server";
import { NextResponse } from "next/server";

// GETリクエストを処理
export async function GET() {
  try {
    const posts = await api.post.getPosts(); // tRPCでデータを取得
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
