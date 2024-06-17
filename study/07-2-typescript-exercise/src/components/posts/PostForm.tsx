import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endpoint: string = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
  const refTitle = useRef<HTMLInputElement>(null);
  const refBody = useRef<HTMLInputElement>(null);

  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endpoint, data),
  });

  const handleClick = async () => {
    const title = refTitle.current?.value;
    const body = refBody.current?.value;
    if (!title || !body) return alert("데이터를 잘 준비해주세요");
    await createPost({ title, body });
    console.log(title, body);
  };

  return (
    <div className="flex flex-col flex-1 w-60 justify-center items-start ">
      <input
        ref={refTitle}
        className="border border-black w-full"
        placeholder="제목"
      />
      <textarea
        ref={refBody}
        className="border border-black w-full"
        placeholder="내용"
      />
      <button
        onClick={handleClick}
        className="border border-black bg-gray-200 rounded"
      >
        포스트 생성하기
      </button>
    </div>
  );
}

export default PostForm;
