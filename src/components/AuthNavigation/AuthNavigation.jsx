import { NavLinkItem } from 'components/Navigation/Navigation.styled';
export default function AuthNavigation() {
  return (
    <>
      <NavLinkItem to="/sign-up">Sign up</NavLinkItem>
      <NavLinkItem to="/login">Login</NavLinkItem>
    </>
  );
}
