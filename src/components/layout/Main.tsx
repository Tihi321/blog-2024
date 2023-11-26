import { styled } from "solid-styled-components";

const Container = styled("main")`
  display: flex;
  justify-content: center;
`;

const Content = styled("div")`
  max-width: 1024px;
  width: 100%;
`;

type MainProps = {
  children: any;
};

export const Main = ({ children }: MainProps) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
