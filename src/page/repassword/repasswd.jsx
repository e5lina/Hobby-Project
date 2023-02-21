import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import password from '../../image/password.png';

const Myprofilbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 764px;
  .nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10%;
    top: 30%;
    > b {
      margin-bottom: 20px;
    }
    .password {
      text-decoration: none;
      color: black;
      margin-bottom: 20px;
    }
    .now {
      color: var(--checkbutton);
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 300px;
    border: 1px solid black;
    > h2 {
      color: var(--checkbutton);
      font-size: var(--fontsize);
      margin: 30px 0px;
    }
    > img {
      width: 70px;
      margin-bottom: 30px;
    }
    > div {
      margin-bottom: 20px;
    }
    .name {
      color: var(--grayColor);
    }
    .passinput {
      display: flex;
      align-items: center;
      border: 1px solid #9b9b9b;
      border-radius: 5px;
      padding: 5px;
      width: 330px;
      input {
        width: 100%;
        margin-left: 10px;
        border: none;
        outline: none;
      }
    }
    > button {
      background-color: var(--checkbutton);
      width: 330px;
      border-radius: 5px;
      border: none;
      height: 40px;
      color: #fff;
      cursor: pointer;
      font-size: var(--fontsize);
      font-weight: 600;
    }
  }
`;
const repassword = () => {
  return (
    <>
      <Header />
      <Myprofilbox>
        <div className="box">
          <h2>비밀번호 수정</h2>
          <div>
            <b className="name">UserEmail@naver.com</b>
          </div>
          <div className="passinput">
            <img src={password} alt="password 이미지" />
            <input placeholder="특수문자, 숫자, 영문포함 8자로 적어주세요." />
          </div>
          <div className="passinput">
            <img src={password} alt="password 이미지" />
            <input placeholder="특수문자, 숫자, 영문포함 8자로 적어주세요." />
          </div>
          <button type="button">등록하기</button>
        </div>
        <div className="nav">
          <Link to="/myprofil" className="password">
            프로필 수정
          </Link>
          <b className="now">비밀번호 수정</b>
        </div>
      </Myprofilbox>
      <Footer />
    </>
  );
};

export default repassword;
