"use client";
import { useEffect, useState } from "react";

function PostListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
  }

  // 브라우저 마운트가 되고, 첫번째 렌더링이 된 이후에 실행할 코드들
  useEffect(() => {
    // next는 ssr이 기본이기에 상단에 use client 를 적어줘야 할 수 있다.
    getPosts().then((posts: Post[]) => setPosts(posts));
  }, []);

  return (
    <div>
      PostListPage
      <ol>
        {posts.map((post, i) => (
          <li key={i}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

type Post = {
  title: string;
};

export default PostListPage;
