# 메모앱 만들기

## 01. 과제 샘플
- https://www.notion.so/teamsparta/03-5965145e055b4912b4dd3bb6611a1363
- [링크: https://memo-app-ashen.vercel.app]
  
## 02. 요구사항

### 01. 기술

- React
- Redux
- styled-components

### 02. 기능

- 메모에 대한 CRUD를 구현해 주세요.
- 페이지는 하나로 구현합니다.
- 가능한 완전히 똑같이 구현해 주세요. (UI와 기능 모두)

## 03. 추가로 도전해 볼 만한 내용

- React Router v6의 nested router를 사용해서 각 메모의 상세를 라우트로 구현해 보기
- localStorage API를 사용하여 웹사이트를 껐다 다시 켜도 데이터가 남아 있도록 해 보기
- 사용자 입력을 debounce 처리해 보기


## (메모) 계획
1. 영역은 2 * 2 사이즈의 grid
   1. 좌상 : (btnContainer) 메모 추가, 현재 선택된 메모 삭제
   2. 좌하 : (memoList) 메모 list, 선택 시 우상단에 해당 메모 생성시간 + 우하단의 메모 에디터에 내용 열기
   3. 우상 : (createdAt) 현재 선택된 메모의 생성 시간 (yyyy년 m월 dd일, 오후 hh:mm)
   4. 우하 : (memoEditor) 메모 내용 에디터
2. memoList --[특정 memo]--> createdAt, memoEditor
3. btnContainer --[list 변경]--> memoList