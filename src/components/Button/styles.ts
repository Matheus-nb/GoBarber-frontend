import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  font-weight: 500;

  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;

  margin-top: 16px;

  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
