import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import User from '../../image/user.png';

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
    top: 20%;
    > b {
      margin-bottom: 20px;
    }
    .password {
      text-decoration: none;
      color: black;
    }
    .now {
      color: var(--checkbutton);
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 630px;
    height: 500px;
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
      margin-bottom: 30px;
    }
    .name {
      color: var(--grayColor);
    }
    > input {
      margin-bottom: 30px;
      width: 540px;
      padding: 10px 10px 90px 10px;
      outline: none;
    }
    > button {
      background-color: var(--checkbutton);
      width: 540px;
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

const myprofil = () => {
  return (
    <>
      <Header />
      <Myprofilbox>
        <div className="box">
          <h2>Your profile</h2>
          <img src={User} alt="유저 프로필" />
          <div>
            <b className="name">UserName</b>
          </div>
          <input placeholder="자기소개 해주세요." />
          <button type="button">등록하기</button>
        </div>
        <div className="nav">
          <b className="now">프로필 수정</b>
          <Link to="/repassword" className="password">
            비밀번호 수정
          </Link>
        </div>
      </Myprofilbox>
      <Footer />
    </>
  );
};

export default myprofil;
