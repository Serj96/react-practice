import { LangSwitch } from 'components/LangSwitch/LangSwitch';
import { NavWrapper, NavLinkItem, Header } from './Navigation.styled';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserNavigation from 'components/UserNavigation/UserNavigation';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/authSelector';

export const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Header>
      <LangSwitch />
      <NavWrapper>
        <NavLinkItem to="/">Home</NavLinkItem>
        {/* <NavLinkItem to="/posts">Posts</NavLinkItem> */}

        {isLogin ? (
          <>
            <NavLinkItem to="/users">Users</NavLinkItem> <UserNavigation />
          </>
        ) : (
          <AuthNavigation />
        )}

        {/* <NavLinkItem to="/sign-up">Sign up</NavLinkItem> */}
      </NavWrapper>
    </Header>
  );
};
