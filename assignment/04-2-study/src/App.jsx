import { useDispatch } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import { Display } from "./components/Display";
import { decrement, increment } from "./redux/slices/counter.slice";

function App() {
  const dispatch = useDispatch();

  const increatementByFive = () => {
    const action = increment(5);
    dispatch(action);
  };

  const decreatmentByFive = () => {
    const action = decrement(5);
    dispatch(action);
  };

  return (
    <>
      <Display value={"헬로"} />
      <Button label="빼기 5" onClick={increatementByFive}></Button>
      <Button label="더하기 5" onClick={decreatmentByFive}></Button>
    </>
  );
}

export default App;
