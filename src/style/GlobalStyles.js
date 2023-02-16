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
  }
`;

export default GlobalStyle;
