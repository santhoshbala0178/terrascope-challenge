import React from 'react';
import { MemoType } from '../../constants/memoTypes';
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

const Memo = ({ id, title, body }: MemoType) => {
  return (
    <MemoContainer>
      <Header>
        <TitleContainer>
          <EditableComponent type="input" id={id} value={title}>
            <EditTitle title={title} />
          </EditableComponent>
        </TitleContainer>
        <DeleteContainer>
          <DeleteMemo id={id} />
        </DeleteContainer>
      </Header>
      <Body>
        <BodyContainer>
          <EditableComponent type="textarea" id={id} value={body}>
            <EditBody body={body} />
          </EditableComponent>
        </BodyContainer>
      </Body>
    </MemoContainer>
  );
};

export default Memo;
