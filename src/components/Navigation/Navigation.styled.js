import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const NavLinkItem = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  background-color: grey;
  padding: 8px;
  color: white;

  &.active {
    background-color: blue;
  }
`;

export const NavWrapper = styled.nav`
  margin-left: 15px;
`;
