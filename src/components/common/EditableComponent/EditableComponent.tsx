import React, { useState } from 'react';
import {
  EditableComponentContainer,
  Holder,
  TextContainer,
} from './EditableComponent.style';

const EditableComponent = ({ type, children }: any) => {
  const [editing, setEditing] = useState(false);

  const handleOnKeyDown = (e: any) => {
    const keys = ['Escape', 'Tab'];
    const enterKey = ['Enter'];
    const allKeys = [...keys, ...enterKey];

    if (
      (type === 'textarea' && keys.includes(e.key)) ||
      (type === 'input' && allKeys.includes(e.key))
    ) {
      setEditing(false);
    }
  };

  return (
    <EditableComponentContainer>
      {editing ? (
        <Holder
          onBlur={() => setEditing(false)}
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
          <TextContainer>{'Edit Val'}</TextContainer>
        </Holder>
      )}
    </EditableComponentContainer>
  );
};

export default EditableComponent;
