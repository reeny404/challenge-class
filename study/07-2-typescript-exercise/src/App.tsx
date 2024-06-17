import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import CounterButton from "./components/Counter/CounterButton";
import CounterDisplay from "./components/Counter/CounterDisplay";
import ModalControls from "./components/Modal/ModalControls";
import PostForm from "./components/posts/PostForm";
import Posts from "./components/posts/Posts";
import queryClient from "./react-query/queryClient";

function App() {
  const [count, setCount] = useState<number>(5);
  const [unit, setUnit] = useState<number>(1);

  const increament = () => setCount(count + 1);
  const dencreament = () => setCount(count - 1);
  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUnit(Number(e.target.value));
  };

  return (
    <>
      <h2 className="text-lg font-bold">1. Counter 만들기</h2>
      <CounterDisplay value={count} />
      <input
        className="border-b-2 indent-2"
        value={unit}
        onChange={handleChangeUnit}
        type="number"
        placeholder="이곳에 숫자를 넣어"
      />
      <div className="flex">
        <CounterButton onClick={increament}>[-]</CounterButton>
        <CounterButton onClick={dencreament}>[+]</CounterButton>
      </div>

      <hr />
      <h2 className="text-lg font-bold">2. 모달 만들기</h2>
      <ModalControls />

      <hr />
      <h2 className="text-lg font-bold">3. Posts</h2>
      <QueryClientProvider client={queryClient}>
        <PostForm />
        <Posts />
      </QueryClientProvider>
    </>
  );
}

export default App;
