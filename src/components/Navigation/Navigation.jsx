import { LangSwitch } from 'components/LangSwitch/LangSwitch';
import { NavWrapper, NavLinkItem, Header } from './Navigation.styled';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserNavigation from 'components/UserNavigation/UserNavigation';

export const Navigation = () => {
  return (
    <Header>
      <LangSwitch />
      <NavWrapper>
        <NavLinkItem to="/">Home</NavLinkItem>
        {/* <NavLinkItem to="/posts">Posts</NavLinkItem> */}
        <NavLinkItem to="/users">Users</NavLinkItem>
        <AuthNavigation />
        <UserNavigation />
        {/* <NavLinkItem to="/sign-up">Sign up</NavLinkItem> */}
      </NavWrapper>
    </Header>
  );
};
