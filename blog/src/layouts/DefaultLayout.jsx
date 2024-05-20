import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export function DefaultLayout() {
  useEffect(() => {
    console.log("mount >> HomePage");

    return () => {
      console.log("unmount >> HomePage");
    };
  }, []);
  return (
    <div>
      <Link to="/">홈페이지</Link>
      <br />
      <Link to="/posts">Post 목록 페이지</Link>
      <br />
      <Link to="/posts/1">Post 상세 페이지</Link>
      <Outlet />
    </div>
  );
}
