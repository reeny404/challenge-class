## 폴더
- 이름 : 정적 url
- [이름] : 동적 url

## 파일
### pages.tsx
- 해당 url로 접근했을 때 뜨는 페이지

### layouts.tsx
- 자기 자신 + 자기 자신 보다 하위에 있는 모든 페이지에 layout으로 작동한다.
- ui 공통으로 쓸 수 있다.
- 공통 비즈니스 로직을 정리할 수 있다.

## Next.js에서 딱 하나 기억 해야한다면?
1. app 디렉터리 아래에서의 폴더 구조가 그대로 url경로가 된다.
   1. **폴더명** 
   2. **[폴더명]** : 동적 라우팅
2. 예외 사항 = app 디렉터리 아래에 폴더로 존재함에도 불구하고 url 경로가 되지 않는 경우
   1. **(폴더명)** : url 경로에서 해당 폴더가 제외되지만, 라우팅 시스템 내부에 여전히 포함된다.
   2. **_폴더명**  : url 경로에서 해당 폴더가 제외되며,   라우팅 시스템 내부에서 완전히 제외된다.

## 라우팅 시스템?

## (폴더명) vs. _폴더명
```
ㄴ app
  ㄴ _components
    ㄴ button.tsx
    ㄴ input.tsx
  ㄴ (provider)
    ㄴ queryclient.tsx    
    ㄴ page.tsx           (url : /)
  ㄴ page.tsx             (url : /)
  ㄴ layout.tsx
  ㄴ posts
    ㄴ page.tsx           (url : /posts)
```
- /app/hello/page.tsx   
  - url : /hello
- /app/(provider)/page.tsx 
  - /
- /app/_compoenent/page.tsx
  - / 

## "use client"; 언제 사용하나요?
1. 브라우저 환경이 필요할 때
   1. hook 사용
```
"use client";
import { useEffect, useState } from "react";

function PostListPage() {
  const [posts, setPosts] = useState([]);
  async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
  }

  // 브라우저 마운트가 되고, 첫번째 렌더링이 된 이후에 실행할 코드들
  useEffect(() => {
    // next는 ssr이 기본이기에 상단에 use client 를 적어줘야 할 수 있다.
    getPost().then((posts) => setPosts(posts));
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

export default PostListPage;

```

## ssr을 하려면?
: 컴포넌트 앞에 async를 붙인다.
```
async function PostListPage() {
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
  }
  const posts = await getPosts();
  console.log(posts); // next server terminal에 console이 찍힌다

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
```

## 정적 페이지 생성 (static side generation) 
: 기본적으로 build 시 생성한다.
```
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config


/**
 * 요청이 있을 때마다 재렌더링한다.
 */
export const dynamicParams = "force-dynamic";

/**
 * n초마다 정적페이지를 다시 만든다.
 */
export const revalidate = 5;
// export const dynamic = "auto";
// export const fetchCache = "auto";
// export const runtime = "nodejs";
// export const preferredRegion = "auto";
// export const maxDuration = 5;
```

## router.ts
: API 구현할 수 있다.
```
import { NextResponse } from "next/server";

export async function GET(request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return NextResponse.json(posts);
}

export async function POST(request) {
  return new Response{}
}
```