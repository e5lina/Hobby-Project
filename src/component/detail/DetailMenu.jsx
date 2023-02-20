import Design from '../../image/design.png';
import Game from '../../image/game.png';
import Develop from '../../image/develop.png';
import Language from '../../image/language.png';
import Music from '../../image/music.png';
import Talk from '../../image/talk.png';
import Travel from '../../image/travel.png';
import Video from '../../image/video.png';
import { Menu, Detail } from './DetailMenuStyle';

function DetailMenu() {
  return (
    <Menu>
      <h1>Hobbies</h1>
      <Detail>
        <a href="/detail">
          <li className="design">
            <img src={Design} alt="DesignImg" />
            <h3>디자인</h3>
          </li>
        </a>
        <a href="/detail">
          <li className="travel">
            <img src={Travel} alt="TravelImg" />
            <h3>여 행</h3>
          </li>
        </a>
        <a href="/detail">
          <li className="game">
            <img src={Game} alt="GameImg" />
            <h3>게 임</h3>
          </li>
        </a>
        <a href="/detail">
          <li className="develop">
            <img src={Develop} alt="DevelopImg" />
            <h3>개 발</h3>
          </li>
        </a>
        <a href="/detail">
          <li className="music">
            <img src={Music} alt="MusicImg" />
            <h3>음 악</h3>
          </li>
        </a>
        <a href="/detail">
          <li className="video">
            <img src={Video} alt="VideoImg" />
            <h3>영상</h3>
          </li>
        </a>
        <a href="/detail">
          <li className="lang">
            <img src={Language} alt="LanguageImg" />
            <h3>외국어</h3>
          </li>
        </a>
        <a href="/detail">
          <li className="talk">
            <img src={Talk} alt="TalkImg" />
            <h3>상담</h3>
          </li>
        </a>
      </Detail>
    </Menu>
  );
}

export default DetailMenu;
