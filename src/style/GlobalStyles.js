import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --backColor : #7749F8;
    --logofontsize : 23px;
    --16font : 16px;
    --fontsize : 20px;
    --Chewy : 'Chewy', cursive;
    --IBMPlexSans: 'IBM Plex Sans KR', sans-serif;
    --Gajraj : 'Gajraj One', cursive;
    --checkbutton : #FFC44C;
    --grayColor : #c2c2c2;
  }
`;

export default GlobalStyle;
