"use client";

import { PropsWithChildren, useEffect } from "react";

function PostsLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    alert("hello word");
  }, []);
  return (
    <div>
      <h1>포스트 레이아웃</h1>
      {children}
    </div>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
// export const dynamic = "auto";

/**
 * 요청이 있을 때마다 재렌더링한다.
 */
export const dynamicParams = "force-dynamic";

/**
 * n초마다 정적페이지를 다시 만든다.
 */
export const revalidate = 5;
// export const fetchCache = "auto";
// export const runtime = "nodejs";
// export const preferredRegion = "auto";
// export const maxDuration = 5;

export default PostsLayout;
