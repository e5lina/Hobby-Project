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
    font-family: 'Chewy';
    src: local('Chewy'), local('Chewy-Regular');
    font-style: normal;
    src: url(${Chewy}) format('truetype');
  }
`;

export default GlobalStyle;
