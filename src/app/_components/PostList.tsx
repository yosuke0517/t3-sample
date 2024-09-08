import Link from "next/link";
import { getPosts } from "~/app/_hooks/useQueryPost";

const PostList = async () => {
  const posts = await getPosts();

  if (!posts) {
    return <p>Failed to load posts</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post${post.id}`}>
              <p>Title: {post.name}</p>
            </Link>
            <p>Completed: {post.status ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
