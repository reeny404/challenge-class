
// 요청에 대한 응답
// http METHODS, path

import { NextResponse } from "next/server";

export async function GET(request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return NextResponse.json(posts);
}

export async function POST(request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return NextResponse.redirect("https://www.naver.com/");
}

export async function DELETE(request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return NextResponse.json(posts);
}
