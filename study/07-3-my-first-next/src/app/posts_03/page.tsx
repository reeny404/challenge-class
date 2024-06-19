async function PostListPage() {
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
  }
  const posts: Post[] = await getPosts();
  // console.log(posts); // next server terminal에 console이 찍힌다

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
