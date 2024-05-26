import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import DateUtil from "./utils/DateUtil";

const initialList = [
  {
    id: Math.random(),
    created: "2024-05-27 2:38",
  },
  {
    id: Math.random(),
    created: "2024-05-24 23:23",
    content: "안뇽",
  },
  {
    id: Math.random(),
    created: "2024-05-21 15:23",
    content: "오늘은 놀이동산 가는 날 룰류 랄랴",
  },
  {
    id: Math.random(),
    created: "2024-03-24 09:23",
    content: "1번 메모 손들어! 2번 메모 손들어 으악!",
  },
];

const DEFAULT_CONTENT = "새로운 메모";

function App() {
  const [memoList, setMemoList] = useState(initialList);
  const [selectedMemo, setSelectedMemo] = useState(memoList.at(0));
  const refTextarea = useRef(null);

  const handleAddMemo = () => {
    const newMemo = { id: Math.random(), created: new Date() };
    setMemoList([...memoList, newMemo]);
    setSelectedMemo(newMemo);
  };

  const handleDeleteMemo = (id) => {
    const newList = [...memoList.filter((memo) => memo.id !== id)];
    if (newList.length === 0) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
      return;
    }

    setSelectedMemo(newList.at(0));
    setMemoList(newList);
  };

  const handleSelectMemo = (id) => {
    const memo = memoList.find((memo) => memo.id === id);
    setSelectedMemo(memo);
  };

  useEffect(() => {
    refTextarea.current.focus();
  }, [selectedMemo]);

  return (
    <Main>
      <Asider>
        <header>
          <button onClick={handleAddMemo}>새 메모 작성하기</button>
          <button onClick={() => handleDeleteMemo(selectedMemo.id)}>
            삭제
          </button>
        </header>
        <StyledMemoList>
          {memoList
            .sort((a, b) => new Date(b.created) - new Date(a.created))
            .map((memo, i) => (
              <StyledMemoItem
                key={i}
                onClick={() => handleSelectMemo(memo.id)}
                selected={selectedMemo.id === memo.id}
              >
                <h6>{memo.content || DEFAULT_CONTENT}</h6>
                <time>
                  {DateUtil.isToday(memo.created)
                    ? DateUtil.getTimeString(memo.created)
                    : DateUtil.getDateString(memo.created, ".")}
                </time>
              </StyledMemoItem>
            ))}
        </StyledMemoList>
      </Asider>
      <Acticle>
        <MemoCreatedTime>
          {DateUtil.getDateString(selectedMemo.created) +
            " " +
            DateUtil.getTimeString(selectedMemo.created)}
        </MemoCreatedTime>
        <MemoEditor
          autoFocus
          ref={refTextarea}
          value={selectedMemo.content ?? ""}
          onChange={(e) => {
            const text = e.target.value;
            const newMemo = { ...selectedMemo, content: text };
            setSelectedMemo(newMemo);
            setMemoList([
              ...memoList.map((memo) =>
                memo.id === selectedMemo.id ? newMemo : memo
              ),
            ]);
          }}
        />
      </Acticle>
    </Main>
  );
}

const grayBorder = "rgb(230, 230, 230)";
const grayFont = "rgb(128, 128, 128)";

const Main = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid ${grayBorder};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;

  * {
    box-sizing: border-box;
  }
`;

const Acticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const MemoCreatedTime = styled.div`
  text-align: center;
  font-size: 0.6rem;
  color: ${grayFont};
  padding-bottom: 24px;
`;

const MemoEditor = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
  resize: none;
`;

const Asider = styled.aside`
  border-right: 1px solid ${grayBorder};
  overflow-y: auto;

  > header {
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid ${grayBorder};

    button {
      border: 0;
      background-color: inherit;
      padding: 4px 8px;
      color: ${grayFont};
      cursor: pointer;
      font-weight: 500;

      &:hover {
        color: black;
        font-weight: bold;
      }
    }
  }
`;

const StyledMemoList = styled.ul`
  margin: 0px;
  list-style: none;
  padding: 20px 12px;
`;

const StyledMemoItem = styled.li`
  ${(props) =>
    props.selected == true ? "background-color : rgb(255, 224, 127);" : ""}
  border-radius: 5px;
  padding: 12px 24px;
  cursor: pointer;
  height: 56px;

  > time {
    font-size: 0.7rem;
  }

  > h6 {
    font-size: 0.75rem;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
  }
`;

export default App;
