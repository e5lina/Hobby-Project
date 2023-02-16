import styled from 'styled-components';

export const HeaderMain = styled.header`
  max-width: 100%;
  height: 60px;
  background-color: var(--backColor);
  margin: 0;
  padding: 0;
`;

export const HeaderCont = styled.main`
  max-width: 1200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const Logo = styled.h3`
  font-weight: 600;
  font-size: 23px;
  margin: 17px 40px;
  font-family: var(--Chewy);
`;

export const HeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  font-weight: bold;
  & li {
    margin: 20px 40px;
  }
`;
