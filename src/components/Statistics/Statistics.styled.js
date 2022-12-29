import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";
export const Container = styled.div`
  width: ${({ theme }) => theme.sizes[3]}px;
  padding: 20px;
  background-color: ${(props) => (props.title ? "#cecece" : "#fff")};
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled(List).attrs({ as: "li" })`
  flex-wrap: wrap;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  background-color:${props => props.active && "red"};
`;
export const Icon = styled(AiOutlineLike)`
  color: blue;
`;
