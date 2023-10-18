import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 1rem;
        vertical-align: baseline;
        font-weight: lighter;
    }
    body {
        line-height: 1.8rem;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: black;
        color: white;
    }
    ol, ul, li {
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    p {
        font-size: 0.9rem;
    }
    h1 {
        font-size: 1.5rem;
    }
`;
 
export default GlobalStyles;