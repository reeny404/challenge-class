import { useState } from "react";
import "./App.css";
import useToast from "./components/useToast";

function App() {
  const [title, setTitle] = useState("Scheduled: Catch up");
  const [desc, setDesc] = useState("Friday, February 10, 2023 at 5:57 PM");
  const [time, setTime] = useState(2000);

  const [addToast] = useToast();

  return (
    <div className="h-full flex items-center justify-center flex-col w-80 mx-auto gap-3">
      <div className="text-2xl font-bold mb-3">토스트 컨트롤러</div>
      <div className="w-full">
        <div className="text-left text-sm mb-1.5">제목 (필수)</div>
        <input
          className="border border-gray-300 py-2 px-3 rounded w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full">
        <div className="text-left text-sm mb-1.5">내용 (필수)</div>
        <input
          className="border border-gray-300 py-2 px-3 rounded w-full"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="w-full">
        <div className="text-left text-sm mb-1.5">노출시간(ms) (선택)</div>
        <input
          className="border border-gray-300 py-2 px-3 rounded w-full"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button
        onClick={() => addToast(title, desc, time)}
        className="bg-black text-white w-full rounded py-2 mt-2.5"
      >
        토스트 띄우기
      </button>
    </div>
  );
}

export default App;
