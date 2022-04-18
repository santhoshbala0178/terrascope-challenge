import React from 'react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeleteMemoIcon } from './DeleteMemo.style';
import { DeleteMemoType } from './DeleteMemo.type';
import { useAPI } from '../../apiContext';
import axios from 'axios';
import { DELETE_MEMO, GET_MEMOS } from '../../constants/apiUtils';

const DeleteMemo = ({ id }: DeleteMemoType) => {
  const { setMemos } = useAPI();

  const deleteMemo = async () => {
    const response = await axios.post(DELETE_MEMO, {
      id,
    });

    if (response.status === 200) {
      const { data } = await axios.get(GET_MEMOS);
      if (setMemos) setMemos(data);
    }
  };

  return (
    <DeleteMemoIcon type="button" onClick={deleteMemo}>
      <FontAwesomeIcon icon={faTrashCan} />
    </DeleteMemoIcon>
  );
};

export default DeleteMemo;
