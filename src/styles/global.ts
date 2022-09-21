import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    border: 0;
    margin: 0px;
    box-sizing: border-box;
    font-family: monospace;
  }

  body, html, #root {
    min-height: 100vh;
    background-color: ${e => e.theme["blue-100"]};
  }
`;
