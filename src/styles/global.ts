import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.roboto}
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    isolation: isolate;
  }

  @media(max-width: 960px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media(max-width: 600px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a,
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
