import styled from 'styled-components';

const FooterMain = styled.footer``;
const FooterBody = styled.div`
  margin: 0 auto;
  max-width: 70%;
  height: 200px;
`;

function Footer() {
  return (
    <FooterMain>
      <FooterBody />
    </FooterMain>
  );
}

export default Footer;
