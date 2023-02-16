import styled from 'styled-components';

const FooterMain = styled.footer`
  width: 100%;
  background-color: var(--backColor);
  height: 200px;
`;
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
