import React from 'react';
import { useAPI } from '../../apiContext';
import AddMemo from '../AddMemo';
import Memo from '../Memo';
import { AddNewMemo, MemoBoard, MemoPageContainer } from './MemoPage.style';

const MemoPage = () => {
  const { memos } = useAPI();

  return (
    <MemoPageContainer>
      <AddNewMemo>
        <AddMemo />
      </AddNewMemo>
      <MemoBoard>
        {memos.map((memo, idx) => {
          return (
            <Memo
              id={memo.id}
              title={memo.title}
              body={memo.body}
              key={`memo-${idx}`}
            />
          );
        })}
      </MemoBoard>
    </MemoPageContainer>
  );
};

export default MemoPage;
