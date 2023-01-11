import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px;
  padding-bottom: 80px;
  border: 4px solid black;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  width: 140px;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: #548ff0;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
export const Item = styled.li``;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
