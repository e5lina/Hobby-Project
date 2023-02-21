import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import User from '../../image/user.png';
import search from '../../image/search.png';

const MypageBody = styled.div`
  height: 800px;
`;
const Mypagebox = styled.div`
  width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    img,
    b {
      margin-right: 20px;
    }
    .search {
      cursor: pointer;
    }
    > a {
      text-decoration: none;
      color: black;
      font-size: 16px;
      margin-right: 20px;
      cursor: pointer;
    }
    > button {
      border: none;
      background-color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const Dbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  padding: 30px 0px;
`;

const mypage = () => {
  return (
    <>
      <Header />
      <MypageBody>
        <Mypagebox>
          <div>
            <img src={User} alt="유저 프로필 목업사진" />
            <b>User Name</b>
            <b>게시물 : N개</b>
          </div>
          <div>
            <img src={search} alt="검색 이미지" className="search" />
            <Link to="/myprofil">프로필 수정</Link>
            <button type="button">회원 탈퇴</button>
          </div>
        </Mypagebox>
        <Dbox>안녕하세요 저는 디자인에 관심많은 OOO입니다. 잘부탁드려요~!</Dbox>
      </MypageBody>
      <Footer />
    </>
  );
};

export default mypage;
