import React from 'react';
import EditableComponent from '../common/EditableComponent';
import DeleteMemo from '../DeleteMemo';
import EditBody from '../EditBody';
import EditTitle from '../EditTitle';
import {
  Body,
  BodyContainer,
  DeleteContainer,
  Header,
  MemoContainer,
  TitleContainer,
} from './Memo.style';

const Memo = () => {
  return (
    <MemoContainer>
      <Header>
        <TitleContainer>
          <EditableComponent type="input">
            <EditTitle />
          </EditableComponent>
        </TitleContainer>
        <DeleteContainer>
          <DeleteMemo />
        </DeleteContainer>
      </Header>
      <Body>
        <BodyContainer>
          <EditableComponent type="textarea">
            <EditBody />
          </EditableComponent>
        </BodyContainer>
      </Body>
    </MemoContainer>
  );
};

export default Memo;
