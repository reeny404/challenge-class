import { useState } from "react";
import CounterButton from "./components/CounterButton";
import CounterDisplay from "./components/CounterDisplay";

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
      <CounterDisplay value={count} />
      <input
        value={unit}
        onChange={handleChangeUnit}
        type="number"
        placeholder="이곳에 숫자를 넣어"
      />
      <div className="flex">
        <CounterButton onClick={increament}>[-]</CounterButton>
        <CounterButton onClick={dencreament}>[+]</CounterButton>
      </div>
    </>
  );
}

export default App;
