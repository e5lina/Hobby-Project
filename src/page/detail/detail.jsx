import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import DetailMenu from '../../component/detail/DetailMenu';
import Footer from '../../component/footer/Footer';
import Design1 from '../../image/design1.png';
import Design2 from '../../image/design2.png';
import Design3 from '../../image/design3.png';
import Travel1 from '../../image/travel1.png';
import Travel2 from '../../image/travel2.png';
import Travel3 from '../../image/travel3.png';
import Game1 from '../../image/game1.png';
import Game2 from '../../image/game2.png';
import Game3 from '../../image/game3.png';
import DesignIcon from '../../image/designIcon.png';
import TravelIcon from '../../image/TravelIcon.png';
import GameIcon from '../../image/GameIcon.png';

const List = styled.div``;

const DesignList = styled.div`
  > div {
    display: flex;
    > img {
      width: 38px;
      height: 28px;
      margin-right: 10px;
    }
    > h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
  max-width: 1130px;
  height: auto;
  margin: 60px auto;
  > ul {
    display: flex;
    > a {
      text-decoration-line: none;
      > li {
        list-style: none;
      }
    }
  }
`;

const TravelList = styled.div`
  > div {
    display: flex;
    > img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    > h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
  max-width: 1130px;
  height: auto;
  margin: 60px auto;
  > ul {
    display: flex;
    > a {
      text-decoration-line: none;
      > li {
        list-style: none;
      }
    }
  }
`;

const GameList = styled.div`
  > div {
    display: flex;
    > img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    > h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
  max-width: 1130px;
  height: auto;
  margin: 60px auto;
  > ul {
    display: flex;
    > a {
      text-decoration-line: none;
      > li {
        list-style: none;
        > img {
          width: 372px;
          height: 300px;
          background-size: cover;
        }
      }
    }
  }
`;

function detail() {
  return (
    <>
      <Header />
      <DetailMenu />
      <List>
        <DesignList>
          <div>
            <img src={DesignIcon} alt="designIcon" />
            <h1>Design</h1>
          </div>
          <ul>
            <a href="/detail">
              <li className="design">
                <img src={Design1} alt="designImg1" />
              </li>
            </a>
            <a href="/detail">
              <li className="design2">
                <img src={Design2} alt="designImg2" />
              </li>
            </a>
            <a href="/writePage">
              <li className="design3">
                <img src={Design3} alt="designImg3" />
              </li>
            </a>
          </ul>
        </DesignList>
        <TravelList>
          <div>
            <img src={TravelIcon} alt="designIcon" />
            <h1>Travel</h1>
          </div>
          <ul>
            <a href="/detail">
              <li className="travel">
                <img src={Travel1} alt="travelImg1" />
              </li>
            </a>
            <a href="/detail">
              <li className="travel2">
                <img src={Travel2} alt="travelImg2" />
              </li>
            </a>
            <a href="/detail">
              <li className="travel3">
                <img src={Travel3} alt="travelImg3" />
              </li>
            </a>
          </ul>
        </TravelList>
        <GameList>
          <div>
            <img src={GameIcon} alt="designIcon" />
            <h1>Game</h1>
          </div>
          <ul>
            <a href="/detail">
              <li className="game">
                <img src={Game1} alt="gameImg1" />
              </li>
            </a>
            <a href="/detail">
              <li className="game2">
                <img src={Game2} alt="gameImg2" />
              </li>
            </a>
            <a href="/detail">
              <li className="game3">
                <img src={Game3} alt="gameImg3" />
              </li>
            </a>
          </ul>
        </GameList>
      </List>
      <Footer />
    </>
  );
}

export default detail;
