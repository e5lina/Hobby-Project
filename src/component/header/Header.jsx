import { Link } from 'react-router-dom';
import { HeaderMain, HeaderCont, HeaderMenu } from './HeaderStyle';

function Header() {
  return (
    <HeaderMain>
      <HeaderCont>
        <Link to="/" className="Logo">
          Free Hobby
        </Link>
        <HeaderMenu>
          <Link to="/signup" className="nav">
            Sign up
          </Link>
          <Link to="/login" className="nav">
            Login
          </Link>
        </HeaderMenu>
      </HeaderCont>
    </HeaderMain>
  );
}

export default Header;
