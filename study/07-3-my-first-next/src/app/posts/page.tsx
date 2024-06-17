import Link from "next/link";

function PostPage() {
  return (
    <div>
      <h1 className="text-4xl">포스트 목록 페이지</h1>
      <ol>
        {Array(5000)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <Link href={`/posts/${i}`}>{i}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default PostPage;
