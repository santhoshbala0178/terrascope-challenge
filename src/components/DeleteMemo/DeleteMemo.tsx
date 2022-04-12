import React from 'react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeleteMemoIcon } from './DeleteMemo.style';

const DeleteMemo = () => {
  return (
    <DeleteMemoIcon type="button">
      <FontAwesomeIcon icon={faTrashCan} />
    </DeleteMemoIcon>
  );
};

export default DeleteMemo;
