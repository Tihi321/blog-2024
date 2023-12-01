import { styled } from "solid-styled-components";

const Container = styled("main")`
  padding: 48px 8px;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

type CenterProps = {
  children: any;
};

export const Center = ({ children }: CenterProps) => {
  return <Container>{children}</Container>;
};
