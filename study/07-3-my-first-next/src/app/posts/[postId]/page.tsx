function PostDetailPage(props: {
  params: { postId: string };
  searchParams: {};
}) {
  console.log("props", props);
  return <div>포트스 상세 페이지 {props.params.postId}</div>;
}

export default PostDetailPage;
