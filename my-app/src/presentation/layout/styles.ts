import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle`
    ${normalize()}
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        background-color: white;
        max-width: 100%;
    }
    body, html {
        max-width: 100vw;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    button {
        padding: 0;
        border: none;
        background-color: transparent;
        font: inherit;
        line-height: inherit;
        appearance: none;
    }
    input::-ms-clear {
        display: none;
    }
`;