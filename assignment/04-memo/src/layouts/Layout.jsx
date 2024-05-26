import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { borderGray, fontGray } from "../assets/color.style";
import DateUtil from "../utils/DateUtil";
import LocalStorage, { KEY } from "../utils/LocalStorage";

const DEFAULT_CONTENT = "새로운 메모";
const initialData = JSON.parse(LocalStorage.get(KEY.MEMO_LIST) ?? []);

export function Layout() {
  const [memoList, setMemoList] = useState(initialData);
  const navigate = useNavigate();

  useEffect(() => {
    LocalStorage.set(KEY.MEMO_LIST, JSON.stringify(memoList));
  }, [memoList]);

  const memoId = useParams().memoId;
  if (!memoId) {
    navigate(`/${memoList.at(0).id}`);
  }

  const handleAddMemo = () => {
    const newMemo = { id: uuidv4(), created: new Date() };
    setMemoList([...memoList, newMemo]);
    navigate(`/${newMemo.id}`);
  };

  const handleDeleteMemo = (id) => {
    const newList = [...memoList.filter((memo) => memo.id !== id)];
    if (newList.length === 0) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
      return;
    }

    setMemoList(newList);
    navigate(`/${newList.at(0).id}`);
  };

  const handleUpdateMemo = (newMemo) => {
    const exceptList = memoList.filter((memo) => memo.id !== newMemo.id);
    setMemoList([...exceptList, newMemo]);
  };

  return (
    <Main>
      <Asider>
        <header>
          <button onClick={handleAddMemo}>새 메모 작성하기</button>
          <button onClick={() => handleDeleteMemo(memoId)}>삭제</button>
        </header>
        <StyledMemoList>
          {memoList
            .sort((a, b) => new Date(b.created) - new Date(a.created))
            .map((memo, i) => (
              <Link key={i} to={`/${memo.id}`}>
                <StyledMemoItem key={i} selected={memoId === memo.id}>
                  <h6>{memo.content || DEFAULT_CONTENT}</h6>
                  <time>
                    {DateUtil.isToday(memo.created)
                      ? DateUtil.getTimeString(memo.created)
                      : DateUtil.getDateString(memo.created, ".")}
                  </time>
                </StyledMemoItem>
              </Link>
            ))}
        </StyledMemoList>
      </Asider>
      <Acticle>
        <Outlet context={{ memoList, handleUpdateMemo }} />
      </Acticle>
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid ${borderGray};
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
const Asider = styled.aside`
  border-right: 1px solid ${borderGray};
  overflow-y: auto;

  > header {
    position: sticky;
    top: 0px;
    background-color: white;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid ${borderGray};

    button {
      border: 0;
      background-color: inherit;
      padding: 4px 8px;
      color: ${fontGray};
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

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledMemoItem = styled.li`
  ${(props) =>
    !props.selected ? "" : "background-color : rgb(255, 224, 127);"}
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
