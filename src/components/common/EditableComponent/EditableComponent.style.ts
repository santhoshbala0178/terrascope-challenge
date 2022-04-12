import styled from 'styled-components';

export const EditableComponentContainer = styled.div`
  height: 100%;
`;

export const TextContainer = styled.div`
  padding: 5px;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.grey};
  }
`;

export const Holder = styled.div`
  height: 100%;
  border-radius: 2px;
`;
