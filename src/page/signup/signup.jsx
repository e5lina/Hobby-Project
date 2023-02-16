import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';

function signup() {
  return (
    <>
      <Header />
      <div className="signbox">
        <input placeholder="이메일" />
      </div>
      <Footer />
    </>
  );
}

export default signup;
