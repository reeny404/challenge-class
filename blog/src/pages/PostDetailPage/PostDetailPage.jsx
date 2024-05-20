import { useLoaderData } from "react-router-dom";

export function PostDetailPage() {
  const post = useLoaderData();

  return (
    <div>
      <h1>Post detail 페이지</h1>
      <h2>
        {post.id} {post.title}
      </h2>
      <div>{post.body}</div>
    </div>
  );
}
