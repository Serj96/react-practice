import styled from 'styled-components';
export const Label = styled.label`
  display: block;
  color: #2a6cdb;
  font-size: 16px;
  margin-right: 180px;
  margin-bottom: 8px;
`;
export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 250px;
  height: 30px;
  border-radius: 4px;
  border-color: #2a6cdb;

  &:focus {
    outline: transparent;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  border: none;
  background-color: #2a6cdb;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
