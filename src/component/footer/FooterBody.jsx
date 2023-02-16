import styled from 'styled-components';

export const FooterMain = styled.footer`
  width: 100%;
  background-color: var(--backColor);
  height: 200px;
`;
export const FooterBody = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  max-width: 1200px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  > div {
    color: white;
    > img {
      margin: 10px;
    }
  }
  .box1 {
    display: flex;
    margin-left: 40px;
    flex-direction: column;
  }
  .Logos {
    margin-top: 100px;
    margin-right: 40px;
  }
  .Logo {
    margin: 15px 0;
    font-size: var(--logofontsize);
    font-family: var(--Chewy);
  }
  .teamname {
    font-size: var(--16font);
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
    margin-bottom: 40px;
  }
`;
