import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid #2a6cdb;
`;
export const Data = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-right: 12px;
`;

export const Button = styled.button`
  background-color: red;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  width: 80px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
