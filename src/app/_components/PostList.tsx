import { fetchPosts } from "~/app/_hooks/infra/fetchPosts";
import PostItem from "~/app/_components/PostItem";

const PostList = async () => {
  const data = await fetchPosts();

  return (
    <>
      <ul>
        {data.posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
