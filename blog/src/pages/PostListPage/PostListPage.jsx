import { Link, useLoaderData } from "react-router-dom";

export function PostListPage() {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Post 목록 페이지</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`./${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
