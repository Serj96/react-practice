import { LangSwitch } from 'components/LangSwitch/LangSwitch';
import { NavWrapper, NavLinkItem, Header } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <LangSwitch />
      <NavWrapper>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/posts">Posts</NavLinkItem>
        <NavLinkItem to="/users">Users</NavLinkItem>
        <NavLinkItem to="/sign-up">Sign up</NavLinkItem>
      </NavWrapper>
    </Header>
  );
};
