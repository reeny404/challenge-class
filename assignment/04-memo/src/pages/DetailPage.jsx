import { useEffect, useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import { fontGray } from "../assets/color.style";
import DateUtil from "../utils/DateUtil";

export function DetailPage() {
  const { memoList, handleUpdateMemo } = useOutletContext();
  const memoId = useParams().memoId;
  const memo = memoList.find((memo) => memo.id == memoId);
  const refTextarea = useRef(null);

  useEffect(() => {
    refTextarea.current.focus();
  }, [memo]);

  return (
    <>
      <MemoCreatedTime>
        {DateUtil.getDateString(memo.created) +
          " " +
          DateUtil.getTimeString(memo.created)}
      </MemoCreatedTime>
      <MemoEditor
        autoFocus
        ref={refTextarea}
        value={memo.content ?? ""}
        onChange={(e) => handleUpdateMemo({ ...memo, content: e.target.value })}
      />
    </>
  );
}

const MemoCreatedTime = styled.div`
  text-align: center;
  font-size: 0.6rem;
  color: ${fontGray};
  padding-bottom: 24px;
`;

const MemoEditor = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
  resize: none;
`;
