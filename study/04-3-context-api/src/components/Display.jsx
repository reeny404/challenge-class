import { useAuth } from "../contexts/auth.context";

function Display() {
  const { isLoggedIn } = useAuth();

  console.log("디스플레이 리렌더링");

  return <div>로그인하기 ({isLoggedIn ? "true" : "false"})</div>;
}
export default Display;
