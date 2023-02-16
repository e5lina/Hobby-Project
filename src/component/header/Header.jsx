import styled from 'styled-components';

const HeaderMain = styled.header`
  max-width: 100%;
  height: 60px;
  background-color: var(--backColor);
  margin: 0;
  padding: 0;
`;
const HeaderCont = styled.main`
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Logo = styled.h3`
  font-weight: 600;
  font-size: 23px;
  margin: 17px 40px;
  font-family: 'Chewy';
`;

const HeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  font-weight: bold;
  & li {
    margin: 20px 40px;
  }
`;
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
