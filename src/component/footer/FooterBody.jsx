import styled from 'styled-components';

export const FooterMain = styled.footer`
  width: 100%;
  background-color: var(--backColor);
  height: 200px;
`;
export const FooterBody = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  max-width: 70%;
  height: 200px;
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
    color: white;
    > img {
      margin: 10px;
    }
  }
  .Logo {
    padding: 10px 0;
    font-size: var(--logofontsize);
    float: left;
    font-family: var(--Chewy);
  }
  .teamname {
    font-size: var(--16font);
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    margin-bottom: 40px;
  }
  .Logos > img {
    float: right;
  }
`;
