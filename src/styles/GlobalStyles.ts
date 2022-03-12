import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
const GlobalStyles = createGlobalStyle`
    *, 
    *::before,
    *::after {
        padding: 0;
        margin: 0;
    }
    html{
      height: 100%;
      font-family: 'Open Sans', sans-serif;
    }
    body{
      box-sizing: border-box;
    background-color: ${theme.backgroundColor};
    }
`;

export default GlobalStyles;
