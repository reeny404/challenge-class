# props.children 의 타입을 명시 방법

### 1. gerneric 이용하기
```
type VerUsefulType<T> = T & { chileren: React.ReactNode };
function CounterButton({
  children,
  onClick: handleClick,
}: VerUsefulType<CounterButtonProps>) {}

interface CounterButtonProps {
  onClick: () => void;
}
```

### 2. PropsWithChildren\<SomeType> 
```
function CounterButton({
  children,
  onClick: handleClick,
}: PropsWithChildren<CounterButtonProps>) {}

interface CounterButtonProps {
  onClick: () => void;
}
```

### 3. PropsWithChildren 사용하기
```
function CounterButton({ children }: PropsWithChildren) {}
```


