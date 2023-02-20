import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import MainImg1 from '../../image/mainImg1.png';
import MainImg2 from '../../image/mainImg2.png';
import MainImg3 from '../../image/mainImg3.png';
import Heart from '../../image/heart.png';
import Cat from '../../image/cat.png';
import Bell from '../../image/bell.png';
import Talkball from '../../image/talkball.png';
import Smile from '../../image/smile.png';

const MainBody = styled.main`
  width: 100%;
  height: 100px;
`;

const MainCont1 = styled.article`
  max-width: 1200px;
  height: 400px;
  margin: 200px auto;
  display: flex;
  justify-content: space-between;
  > span {
    font-weight: 700;
    font-size: 24px;
    width: 600px;
    text-align: center;
    padding-top: 90px;
    position: relative;
    > img {
      width: 30px;
      height: 30px;
      position: absolute;
      left: 50px;
      top: 50px;
    }
    > h4 {
      width: 56%;
      text-align: center;
      font-weight: 300;
      font-size: 20px;
      margin: 40px auto;
      line-height: 30px;
    }
    > .link {
      > button {
        width: 200px;
        height: 56px;
        border-radius: 10px;
        border: none;
        background-color: var(--checkbutton);
        color: white;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

const MainCont2 = styled.article`
  max-width: 654px;
  height: 550px;
  margin: 200px auto;
  display: block;
  text-align: center;
  > span {
    > h4 {
      line-height: 38px;
      font-weight: 300;
      font-size: 20px;
      > img {
        width: 30px;
        height: 30px;
        margin: 0px 5px;
      }
      > h4 {
        font-weight: 700;
        > img {
          width: 30px;
          height: 30px;
          margin: 0px 5px;
        }
      }
      > b {
        font-weight: 900;
      }
    }
  }
`;

const MainCont3 = styled.article`
  max-width: 1200px;
  height: 400px;
  margin: 200px auto;
  display: flex;
  justify-content: space-between;
  > span {
    width: 50%;
    text-align: center;
    position: relative;
    > img {
      position: absolute;
      top: 66px;
      left: 90px;
      width: 30px;
      height: 30px;
    }
    > h3 {
      font-size: 24px;
      font-weight: 700;
      margin: 70px auto;
      text-align: center;
    }
    > h4 {
      width: 100%;
      margin: 0 auto;
      font-size: 20px;
      font-weight: 300;
      line-height: 35px;
      > h4 {
        > b {
          font-weight: 700;
        }
      }
      > img {
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 170px;
        right: 100px;
      }
    }
  }
`;

function Main() {
  return (
    <MainBody>
      <Header />
      <MainCont1>
        <img src={MainImg1} alt="mainimg1" />
        <span className="MainTxt1">
          <img src={Talkball} alt="talkball" />
          <h3>Free Hobby를 찾아주셔서 감사합니다.</h3>
          <h4>
            <b>Free Hobby</b>는 취미를 공유하며 서로가 <b>멘토멘티</b>가 되는
            사이트이면서 서로가 <b>친구</b>가 되는 사이트입니다.
          </h4>
          <Link to="/detail" className="link">
            <button type="button">사이트 둘러보기</button>
          </Link>
        </span>
      </MainCont1>
      <MainCont2>
        <span className="MainTxt2">
          <h4>
            요즘 같은 <b>바쁜시대</b>에서{' '}
            <h4>
              <img src={Smile} alt="smile" />
              잠시나마 취미를 즐기며
              <b>
                힐링을 하기 위해
                <img src={Heart} alt="heart" />
              </b>
            </h4>
            만들어진 사이트입니다.
          </h4>
        </span>
        <img src={MainImg3} alt="mainimg2" />
      </MainCont2>
      <MainCont3>
        <span className="MainTxt3">
          <img src={Bell} alt="bell" />
          <h3>지금부터 Free Hobby를 즐겨주세요.</h3>
          <h4>
            <h4>
              <b>Free Hobby</b> 에서 취미를 자랑하세요!
            </h4>
            모르겠을땐 주위의 사람들이 알려줄 거에요!
            <img src={Cat} alt="cat" />
          </h4>
        </span>
        <img src={MainImg2} alt="mainimg3" />
      </MainCont3>
      <Footer />
    </MainBody>
  );
}

export default Main;
