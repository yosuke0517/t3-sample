import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // 開発環境と本番環境で異なるクッキー名を確認
  const sessionCookie =
    req.cookies.get("next-auth.session-token") ||
    req.cookies.get("__Secure-next-auth.session-token");

  // トークンが存在しない場合、ログインページにリダイレクト
  if (!sessionCookie && req.nextUrl.pathname.startsWith("/post")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ルート ("/") にアクセスしたときに /post にリダイレクト
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/post", req.url));
  }

  return NextResponse.next();
}

// ミドルウェアを適用するパス
export const config = {
  matcher: ["/", "/post"], // ルートと /post にミドルウェアを適用
};
