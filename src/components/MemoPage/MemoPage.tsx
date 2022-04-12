import React from 'react';
import AddMemo from '../AddMemo';
import Memo from '../Memo';
import { AddNewMemo, MemoBoard, MemoPageContainer } from './MemoPage.style';

const MemoPage = () => {
  return (
    <MemoPageContainer>
      <AddNewMemo>
        <AddMemo />
      </AddNewMemo>
      <MemoBoard>
        <Memo />
        <Memo />
        <Memo />
        <Memo />
        <Memo />
      </MemoBoard>
    </MemoPageContainer>
  );
};

export default MemoPage;
