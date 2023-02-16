import { HeaderMain, HeaderCont, Logo, HeaderMenu } from './HeaderStyle';

function Header() {
  return (
    <HeaderMain>
      <HeaderCont>
        <Logo>Free Hobby</Logo>
        <HeaderMenu>
          <li>Sign up</li>
          <li>Login</li>
        </HeaderMenu>
      </HeaderCont>
    </HeaderMain>
  );
}

export default Header;
