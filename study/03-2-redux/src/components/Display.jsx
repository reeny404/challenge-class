import { useSelector } from "react-redux";

export function Display() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const status = isLoggedIn ? "로그인" : "로그아웃";

  return (
    <div style={{ borderBottom: "1px solid black" }}>
      현재 {status} 상태입니다.
    </div>
  );
}

// 언제 컴포넌트로 분리하는가?
//   1. 반복될 때,
//   2. 너무 많이 관리할 때,
//   3. 불필요한 리렌더링을 방지하기 위해
