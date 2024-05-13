# React 주요개념

### 가상 DOM

: 실제 DOM을 흉내내어 만든 것으로, **실제 DOM의 재조정**을 위하여 사용한다.
가상 DOM을 이용할 경우 실제 DOM을 이용하는 것보다 빠르게 비교할 수 있다. <br>

### JSX

: Javascript를 확장한 문법으로 UI 구조를 표현하기 위해 사용한다. html과 유사하게 생겼으나 전혀 다른 문법이며 브라우저는 JSX를 해석할 수 없기에 트랜스파일러를 이용해서 변환

### React Component vs React Element

- Component : 함수
- Element : 컴포넌트의 인스턴스

### State

: 데이터

### props

: 부모로부터 받은 데이터, 일반적으로 readonly로 여긴다.

### 리렌더링의 조건

1. state를 변경했을 때, 본인을 리렌더링한다.
2. 부모가 건네준 props가 변경되었을 때, 자식을 리렌더링한다.
3. 부모를 리렌더링할 때, 자식도 리렌더링된다.

### React Component의 생애주기

1. mount : React Element를 DOM 노트에 추가할 때, 한번만 실행된다.
2. update : props, state가 변경되어 React Element를 업데이트할 때마다 실행된다.
3. unmount : React Element를 DOM에서 제거할 때 발생하며, 한번만 실행된다. 이벤트 리스너 제거등이 포함되어 있다.
