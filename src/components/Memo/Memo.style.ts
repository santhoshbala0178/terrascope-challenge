import styled from 'styled-components';

export const DeleteContainer = styled.div`
  opacity: 0;
`;

export const MemoContainer = styled.div`
  height: 300px;
  width: 300px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover ${DeleteContainer} {
    opacity: 1;
  }
`;

export const TitleContainer = styled.div`
  flex-grow: 1;
  margin-right: 2px;
`;

export const Body = styled.div`
  flex-grow: 1;
`;

export const BodyContainer = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
