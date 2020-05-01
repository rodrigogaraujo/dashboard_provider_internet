import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background: #01402E;
        color: #D5E2F2;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    button{
        cursor: pointer;
    }

    h1, h2, h3, strong{
        font-weight: 500;
    }
`;
