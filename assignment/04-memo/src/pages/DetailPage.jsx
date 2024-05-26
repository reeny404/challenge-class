import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import { fontGray } from "../assets/color.style";
import { Textarea } from "../components/Textarea";
import DateUtil from "../utils/DateUtil";

export function DetailPage() {
  const { memoList, handleUpdateMemo } = useOutletContext();
  const memoId = useParams().memoId;
  const memo = memoList.find((memo) => memo.id == memoId);

  return (
    <>
      <MemoCreatedTime>
        {DateUtil.getDateString(memo.created) +
          " " +
          DateUtil.getTimeString(memo.created)}
      </MemoCreatedTime>
      <Textarea
        autoFocus
        value={memo.content}
        handleChange={(content) => handleUpdateMemo({ ...memo, content })}
      />
    </>
  );
}

const MemoCreatedTime = styled.div`
  text-align: center;
  font-size: 0.6rem;
  color: ${fontGray};
  padding-bottom: 24px;

  & + textarea {
    all: unset;
    flex-grow: 1;
    font-size: 15px;
    line-height: 1.66;
    resize: none;
  }
`;
