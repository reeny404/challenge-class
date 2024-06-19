import Link from "next/link";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      이것이 홈페이지
      <Link href="/posts">포스트 페이지로 가기 (Link태그는 csr) </Link>
      <a href="/posts">포스트 페이지로 가기 2 (a태그는 ssr) </a>
    </main>
  );
}
