import { createGlobalStyles } from "solid-styled-components";

export const GlobalStyles = createGlobalStyles`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props: any) => props?.theme.fonts.body};
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: ${(props: any) => props?.theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: ${(props: any) => props?.theme.fonts.heading};
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: #337ab7;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5em;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fafafa;
  }

  main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #333;
    color: white;
    z-index: 100;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #333;
    color: white;
    z-index: 100;
  }
`;
