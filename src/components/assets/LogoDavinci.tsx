import { styled } from "solid-styled-components";

const Container = styled("img")`
  width: 20px;
  border: none;
  filter: drop-shadow(2px 1px 1px black);
`;

export const LogoDavinci = () => {
  return <Container src="/assets/logo-davinci-in.png" />;
};
