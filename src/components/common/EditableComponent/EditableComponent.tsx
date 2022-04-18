import axios from 'axios';
import React, { useState } from 'react';
import { useAPI } from '../../../apiContext';
import { GET_MEMOS, UPDATE_MEMO } from '../../../constants/apiUtils';
import {
  EditableComponentContainer,
  Holder,
  TextContainer,
} from './EditableComponent.style';

const EditableComponent = ({ id, type, value, children }: any) => {
  const [editing, setEditing] = useState(false);
  const { setMemos } = useAPI();

  const updateMemo = async (val: string) => {
    let params = {};
    // Modify Body or Title of the memo
    if (type === 'input') {
      params = {
        id,
        title: val,
      };
    } else {
      params = {
        id,
        body: val,
      };
    }

    const response = await axios.post(UPDATE_MEMO, params);

    const { data } = await axios.get(GET_MEMOS);
    if (setMemos) setMemos(data);
  };

  const handleOnBlur = async (e: any) => {
    await updateMemo(e.target.value);
    setEditing(false);
  };

  const handleOnKeyDown = async (e: any) => {
    const keys = ['Escape', 'Tab'];
    const enterKey = ['Enter'];
    const allKeys = [...keys, ...enterKey];

    if (
      (type === 'textarea' && keys.includes(e.key)) ||
      (type === 'input' && allKeys.includes(e.key))
    ) {
      await updateMemo(e.target.value);
      setEditing(false);
    }
  };

  return (
    <EditableComponentContainer>
      {editing ? (
        <Holder
          onBlur={(e) => handleOnBlur(e)}
          onKeyDown={(e) => handleOnKeyDown(e)}
        >
          {children}
        </Holder>
      ) : (
        <Holder
          onClick={() => {
            setEditing(true);
          }}
        >
          <TextContainer>
            {value
              ? value
              : type === 'input'
              ? 'Title of the memo'
              : 'Write your memo..'}
          </TextContainer>
        </Holder>
      )}
    </EditableComponentContainer>
  );
};

export default EditableComponent;
