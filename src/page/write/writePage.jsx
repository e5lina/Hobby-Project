import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import DetailMenu from '../../component/detail/DetailMenu';
import Footer from '../../component/footer/Footer';
import Trash from '../../image/trash.png';
import Pen from '../../image/pen.png';
import Design3 from '../../image/design3.png';
import User from '../../image/user.png';

const Write = styled.article`
  width: 950px;
  height: auto;
  margin: 50px auto;
  > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    margin: 40px 0px 40px 0;
    width: 1000px;
    > .writebut {
      margin-right: 60px;
      > img {
        margin-left: 30px;
        cursor: pointer;
      }
    }
  }
  > .main-img {
    display: block;
    > img {
      width: 960px;
    }
    > h3 {
      margin: 30px 0;
      font-size: 16px;
      font-weight: 400;
    }
  }
  > .userProfile {
    width: 950px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c7c6c6;
    margin: 40px 0;
    > :nth-child(1) {
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 2px;
      line-height: 50px;
    }
    > img {
      margin-left: 80px;
      margin-bottom: 10px;
    }
    > :nth-child(3) {
      margin-right: 270px;
      line-height: 50px;
    }
  }
  > h4 {
    margin: 40px;
  }
  > .comment {
    list-style: none;
    display: flex;
    line-height: 50px;
    margin-top: 20px;
    margin-left: 40px;
    > li {
      margin-right: 20px;
      letter-spacing: 1px;
      > img {
        margin-right: 30px;
        cursor: pointer;
      }
    }
  }
`;

function writePage() {
  return (
    <>
      <Header />
      <DetailMenu />
      <Write>
        <div>
          <h1>오늘 만들어봤습니다 평가해주세요~!</h1>
          <div className="writebut">
            <img src={Pen} alt="pen" />
            <img src={Trash} alt="trash" />
          </div>
        </div>
        <div className="main-img">
          <img src={Design3} alt="design3" />
          <h3>
            현재 Figma로 작업했어요!! 디자인 수정하고 싶은데 어딜 건드려야 할지
            모르겠어요!
          </h3>
        </div>
        <ul className="userProfile">
          <li>#디자인#웹디자인#초급#알려주세요#고수님들</li>
          <img src={User} alt="user" />
          <li>UserName like : unlike : 댓글 N개</li>
        </ul>
        <h4>댓글</h4>
        <ul className="comment">
          <li>
            <img src={User} alt="user" />
          </li>
          <li>UserName</li>
          <li>너무 잘 만드셨는데요? 딱히 터치할 곳이 없어요!! Good</li>
          <li>
            <img src={Pen} alt="pen" />
            <img src={Trash} alt="trash" />
          </li>
        </ul>
        <ul className="comment">
          <li>
            <img src={User} alt="user" />
          </li>
          <li>UserName</li>
          <li>너무 잘 만드셨는데요? 딱히 터치할 곳이 없어요!! Good</li>
          <li>
            <img src={Pen} alt="pen" />
            <img src={Trash} alt="trash" />
          </li>
        </ul>
        <ul className="comment">
          <li>
            <img src={User} alt="user" />
          </li>
          <li>UserName</li>
          <li>너무 잘 만드셨는데요? 딱히 터치할 곳이 없어요!! Good</li>
          <li>
            <img src={Pen} alt="pen" />
            <img src={Trash} alt="trash" />
          </li>
        </ul>
        <ul className="comment">
          <li>
            <img src={User} alt="user" />
          </li>
          <li>UserName</li>
          <li>너무 잘 만드셨는데요? 딱히 터치할 곳이 없어요!! Good</li>
          <li>
            <img src={Pen} alt="pen" />
            <img src={Trash} alt="trash" />
          </li>
        </ul>
        <article />
      </Write>
      <Footer />
    </>
  );
}

export default writePage;
