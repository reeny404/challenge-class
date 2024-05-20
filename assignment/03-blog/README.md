
## react router
- https://reactrouter.com/en/main/start/tutorial
- 필수 값 : element 
- path를 넣으면 route로, 없으면 layout 으로 인식한다.
  - layout일 때, props.children 대신 <Outlet /> 을 사용한다. 
### loader
- https://reactrouter.com/en/main/start/concepts
- 페이지가 로딩되기 전에 할 작업 (작업이므로 함수로 작성해야함)

## react 는 Link로 쓴다.
- html a 태그는 get 방식으로 요청을 한다. 
- Link 태그는 a태그로 렌더링된다.

## Hook
### useEffect 
: 컴포넌트의 생애주기와 의존성 배열에 담긴 값의 변화에 따라 함수를 실행해주는 훅

## layout을 사용하는 이유
- 공통 UI
- 공통 비즈니스 로직  (ex. 로그인 여부 체크)


## 메모
1. jsconfig.json 을 추가하면 자동 import 가 된다.
2. API 구현대신, https://jsonplaceholder.typicode.com/ json을 제공하는 페이지가 있다.
3. 