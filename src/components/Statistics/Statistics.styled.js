import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
// export const Container = styled.div`
//   width: ${({ theme }) => theme.sizes[3]}px;
//   padding: 20px;
//   background-color: ${(props) => (props.title ? "#cecece" : "#fff")};
// `;
export const Container = styled.div`
  padding: 40px;
  padding-bottom: 80px;
  border: 4px solid black;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
`;
export const Item = styled(List).attrs({ as: 'li' })`
  display: block;
  flex-wrap: wrap;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active && 'red'};
`;
export const Icon = styled(AiOutlineLike)`
  color: blue;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const Button = styled.button`
  width: 140px;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: #a8c2ed;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
