import styled from 'styled-components';

export const Menu = styled.article`
  max-width: 1130px;
  height: auto;
  margin: 60px auto;
  > h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;
export const Detail = styled.ul`
  display: flex;
  > a {
    text-decoration-line: none;
    > li {
      list-style: none;
      margin-right: 30px;
    }
    > li {
      text-align: center;
      > img {
        width: 110px;
        height: 95px;
      }
      > h3 {
        margin-top: 10px;
        border: 1px solid #6610f2;
        width: 110px;
        height: 37px;
        line-height: 35px;
        border-radius: 40px;
        font-size: 16px;
        color: #6610f2;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        font-family: var(--IBMPlexSans);
      }
    }
  }
`;
