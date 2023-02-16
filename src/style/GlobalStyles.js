import { createGlobalStyle } from 'styled-components';
import Chewy from './font/Chewy-Regular.ttf';

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
  }
  font-face {
    font-family: "Chewy";
        src: local("Chewy"),
        url(${Chewy}) format('ttf');
        font-weight: 500;
        font-style: normal;
  }
`;

export default GlobalStyle;
