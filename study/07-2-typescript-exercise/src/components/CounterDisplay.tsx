function CounterDisplay({ value }: CounterDisplayProps) {
  return <div>{value}</div>;
}

type CounterDisplayProps = {
  value: number;
};

export default CounterDisplay;
