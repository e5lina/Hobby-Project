import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Signbox from './signStyle';
import birth from '../../image/birth.png';
import email from '../../image/email.png';
import password from '../../image/password.png';

function signup() {
  return (
    <Signbox>
      <Header />
      <div className="signbox">
        <div className="box">
          <span>회원가입</span>
          <div>
            <img src={email} alt="이메일 로고" className="email" />
            <input placeholder="이메일 형식으로 작성해주세요." />
          </div>
          <div>
            <img src={birth} alt="이메일 로고" />
            <input placeholder="생년월일 8자로 적어주세요." />
          </div>
          <div>
            <img src={password} alt="이메일 로고" />
            <input placeholder="특수문자, 숫자, 영문포함 8자로 적어주세요." />
          </div>
          <div>
            <img src={password} alt="이메일 로고" />
            <input placeholder="특수문자, 숫자, 영문포함 8자로 적어주세요." />
          </div>
          <a href="/signup" className="signupbtn">
            가입하기
          </a>
        </div>
      </div>
      <Footer />
    </Signbox>
  );
}

export default signup;
