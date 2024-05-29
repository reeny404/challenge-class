import { useAuth } from "../contexts/auth.context";

function Button() {
  const { logIn, logOut } = useAuth();

  console.log("버튼 리렌더링");

  return (
    <>
      <button onClick={logIn}>login</button>
      <button onClick={logOut}>logout</button>
    </>
  );
}
export default Button;
