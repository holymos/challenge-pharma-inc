import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62,5%;
  }

  body {
    background-color: #f7f9fa;
    font-family: "Open Sans", sans-serif;
  }
`;
