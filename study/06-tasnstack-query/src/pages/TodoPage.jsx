import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const [value, setValue] = useState("");

  // mutationFn 을 받는다. 핵심은 응답의 mutate 와 mutateAsync임
  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (variables) => axios.post(ENDPOINT, { value: variables }),
    onSuccess: (result) => { // mutate 두번째 인자 안에 
      console.log(result);
      alert("성공");
    },
    onError: () => {
      alert("실패");
    },
  });

  const handleClickButton = async (e) => {
    try {
      mutate(e.target.value, { onSuccess: () => alert("성공했다규!") });
    } catch (e) {
      // 에러 발생했다고 알려주기
    }
  };

  return (
    <div>
      <input
        type="text"
        className="border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isPending}
      />
      <button
        className="bg-black text-white"
        onClick={handleClickButton}
        disabled={isPending}
      >
        눌러주세요
      </button>
    </div>
  );
}

export default TodoPage;
