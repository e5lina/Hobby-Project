import { createGlobalStyle } from 'styled-components';
import Chewy from './Chewy-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: "Chewy";
        src: local("Chewy"),
        url(${Chewy}) format('ttf');
        font-weight: 500;
        font-style: normal;
    }
`;
