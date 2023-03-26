import { createGlobalStyle } from "styled-components";
import {NextTheme} from "./theme";

export default createGlobalStyle<{activeTheme:string; theme: NextTheme}>`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;
