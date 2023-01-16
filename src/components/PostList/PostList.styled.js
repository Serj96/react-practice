import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Item = styled.li`
  background-color: #dae3f2;
  border: 1px solid black;
  flex-basis: calc((100% - 80px) / 5);
  padding: 10px;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
