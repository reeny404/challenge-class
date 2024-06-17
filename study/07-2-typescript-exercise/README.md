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


# react query 사용하기
1. 설치하기 : npm i -D @tanstack/eslint-plugin-query
2. queryClient + provider

# 프레임워크
1. 제어역전 
  : 설계권이 개발자가 아니라 소프트웨어에게 있다.
2. robust하게 개발을 이어나갈 수 있다.
  : 누가 짜도 비슷한 코드가 나온다. 생산성 향상. 초기 러닝커브가 높다.

# Next.js 특징
1. ssr
2. ssg
3. 파일 기반 라우팅과 App Router
4. API 라우트 지원

# 왜 NextJs인가?
: NextJs 가 ssr가 된다!

