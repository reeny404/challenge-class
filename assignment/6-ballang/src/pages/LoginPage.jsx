import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function LoginPage() {
  const navigate = useNavigate();
  // mutationFn (필수)
  const { mutateAsync: logIn } = useMutation({
    mutationFn: (data) => api.auth.login(data),
  });

  const emilInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickLogin = async () => {
    const email = emilInputRef.current.value;
    const password = passwordInputRef.current.value;

    const data = { email, password };
    await logIn(data);
    alert("로그인 완료");
    navigate("/");
  };

  return (
    <div>
      <input ref={emilInputRef} placeholder="이메일" type="email" />
      <input ref={passwordInputRef} placeholder="비밀번호" type="password" />
      <button onClick={handleClickLogin}>로그인하기</button>
    </div>
  );
}

export default LoginPage;
