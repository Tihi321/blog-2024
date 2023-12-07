import { createGlobalStyles } from "solid-styled-components";

export const GlobalStyles = createGlobalStyles`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.6;
    letter-spacing: 0.5px;
    font-family: ${(props: any) => props?.theme?.fonts.body};
    background-color: ${(props: any) => props?.theme?.colors.background};
    color: ${(props: any) => props?.theme?.colors.text};
    min-height: 100vh;

    @media (max-width: 768px) {
      padding: 15px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    letter-spacing: 0.1em;
    font-family: ${(props: any) => props?.theme?.fonts.heading};
  }

  p {
    padding-bottom: 16px;
  }

  a {
    text-decoration: none;
    color: ${(props: any) => props?.theme?.colors.altText};
    filter: brightness(1);
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.5);
    }
  }

  button, .button {
    background-color: ${(props: any) => props?.theme?.colors.ui1};
    color: ${(props: any) => props?.theme?.colors.text};
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    filter: sepia(0);
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: sepia(1);
    }
  }

  img {
      border: 1px solid ${(props: any) => props?.theme?.colors.ui3};
      display: block;
  }

  pre, code {
    background-color: ${(props: any) => props?.theme?.colors.ui6};
    font-family: 'Courier New', monospace;
    padding: 10px;
    border-radius: 5px;
}


  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5em;
  }
`;
