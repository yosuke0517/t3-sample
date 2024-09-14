import type {
  QueryFunction,
  QueryKey,
  FetchQueryOptions,
} from "@tanstack/react-query";
import { getQueryClient } from "~/trpc/query-client";

/**
 * サーバコンポーネントで使用可能なusePrefetchQuery
 * @param queryKey クエリーkey
 * @param queryFn クエリー関数
 * @param options クエリーオプション
 */
export const usePrefetchQuery = async <QueryFnData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<QueryFnData, QueryKey>,
  options?: Omit<
    FetchQueryOptions<QueryFnData, unknown, QueryFnData, QueryKey>,
    "queryKey" | "queryFn"
  >,
) => {
  const queryClient = getQueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey,
      queryFn,
      // 最新がフェッチできない問題のお試し
      // staleTime: 30 * 1000, // NOTE: キャッシュの有効期限 デフォルトは0
      retry: false, // NOTE: エラー時のリトライ回数 デフォルトは3回
      ...options, // オプションを展開して追加
    });
    return queryClient;
  } catch (error) {
    // TODO エラーハンドリング清書
    console.error("Prefetch error:", error);
    throw error;
  }
};
