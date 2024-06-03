import axios from "axios";
import { useState } from "react";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const [value, setValue] = useState("");

  const handleClickButton = async () => {
    try {
      const response = await axios.post(ENDPOINT, { value });
      const data = response.data;
      console.log(data);
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
      />
      <button className="bg-black text-white" onClick={handleClickButton}>
        눌러주세요
      </button>
    </div>
  );
}

export default TodoPage;
