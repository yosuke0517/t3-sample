import { fetchPosts } from "~/app/_hooks/useQueryPost";
import Link from "next/link";

const PostList = async () => {
  const result = await fetchPosts(); // 非同期関数を await する

  if (!result.posts || result.posts.length === 0) {
    return <p>Failed to load posts</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Post 一覧</h2>
      <ul>
        {result.posts.map((post) => (
          <li key={post.id} className="flex">
            <Link href={`/post/${post.id}`} className="w-60 text-blue-700">
              <p>{post.name}</p>
            </Link>
            <p>ステータス: {post.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
