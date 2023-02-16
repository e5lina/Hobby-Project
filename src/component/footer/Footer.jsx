import facebook from '../../image/facebook.png';
import kakao from '../../image/kakao.png';
import instagram from '../../image/instagram.png';
import { FooterBody, FooterMain } from './FooterBody';

function Footer() {
  return (
    <FooterMain>
      <FooterBody>
        <div className="Logo">Free Hobby</div>
        <div className="teamname">팀 : 한승진, 고정훈</div>
        <div className="Logos">
          <img src={facebook} alt="facebooklogo" />
          <img src={instagram} alt="instagramlogo" />
          <img src={kakao} alt="kakaologo" />
        </div>
      </FooterBody>
    </FooterMain>
  );
}

export default Footer;
