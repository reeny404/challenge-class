import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function SignUpPage() {
  const navigate = useNavigate();
  // mutationFn (필수)
  const { mutateAsync: signUp } = useMutation({
    mutationFn: (data) => api.auth.signUp(data),
  });

  const emilInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickSignUp = async () => {
    const email = emilInputRef.current.value;
    const password = passwordInputRef.current.value;

    const data = { email, password };
    await signUp(data);
    alert("회원가입 완료");
    navigate("/");
  };

  return (
    <div>
      <input ref={emilInputRef} placeholder="이메일" type="email" />
      <input ref={passwordInputRef} placeholder="비밀번호" type="password" />
      <button onClick={handleClickSignUp}>회원가입하기</button>
    </div>
  );
}

export default SignUpPage;
