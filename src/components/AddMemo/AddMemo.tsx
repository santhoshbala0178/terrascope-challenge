import axios from 'axios';
import React from 'react';
import { useAPI } from '../../apiContext';
import { ADD_MEMO, GET_MEMOS } from '../../constants/apiUtils';
import { AddMemoButton } from './AddMemo.style';

const AddMemo = () => {
  const { setMemos } = useAPI();

  const addNewMemo = async () => {
    const response = await axios.get(ADD_MEMO);

    const { data } = await axios.get(GET_MEMOS);
    if (setMemos) setMemos(data);
  };
  return <AddMemoButton onClick={addNewMemo}>{'Add Memo'}</AddMemoButton>;
};

export default AddMemo;
