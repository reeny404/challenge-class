import { PropsWithChildren } from "react";

function CounterButton({
  children,
  onClick: handleClick,
}: PropsWithChildren<CounterButtonProps>) {
  return <button onClick={handleClick}>{children}</button>;
}
interface CounterButtonProps {
  onClick: () => void;
}

// 방법 1)
// type VerUsefulType<T> = T & { chileren: React.ReactNode };
// function CounterButton({
//   children,
//   onClick: handleClick,
// }: VerUsefulType<CounterButtonProps>) {}

// 방법 2)
// function CounterButton({
//   children,
//   onClick: handleClick,
// }: PropsWithChildren<CounterButtonProps>) {}
//
// interface CounterButtonProps {
//   onClick: () => void;
// }

// 방법 3_
// function CounterButton({ children }: PropsWithChildren) {}

export default CounterButton;
