import {
  type FetchQueryOptions,
  type QueryFunction,
  type QueryKey,
} from "@tanstack/react-query";
import { usePrefetchQuery } from "~/app/_hooks/common/usePrefetchQuery";

export const UsePostsQuery = async <QueryFnData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<QueryFnData, QueryKey>,
  options?: Omit<
    FetchQueryOptions<QueryFnData, unknown, QueryFnData, QueryKey>,
    "queryKey" | "queryFn"
  >,
) => {
  // usePrefetchQueryを使ってクエリをプリフェッチ
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return await usePrefetchQuery(queryKey, queryFn, options);
};
