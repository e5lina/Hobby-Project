import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Loginbox from './loginStyle';
import OuathGoogle from '../../image/loginOuathGoogle.png';
import OuathKakao from '../../image/loginOuathKakao.png';

const login = () => {
  return (
    <Loginbox>
      <Header />
      <div className="loginbox">
        <div className="inputbox">
          <span>로그인</span>
          <a href="/login" className="kakao">
            <img
              src={OuathKakao}
              alt="Ouath카카오로그인"
              className="kakaoimg"
            />
            <p>Sign in with KaKao</p>
          </a>
          <a href="/login" className="google">
            <img
              src={OuathGoogle}
              alt="Ouath구글로그인"
              className="googleimg"
            />
            <p>Sign in with Google</p>
          </a>
          <input
            placeholder="이메일 형식으로 작성해주세요."
            className="emailinput"
          />
          <input placeholder="특수문자, 숫자, 영문포함 8글자로 적어주세요." />
          <a href="/login" className="login">
            로그인
          </a>
        </div>
      </div>
      <Footer />
    </Loginbox>
  );
};

export default login;
