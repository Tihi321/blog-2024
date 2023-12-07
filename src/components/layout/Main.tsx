import { styled } from "solid-styled-components";

const Container = styled("main")`
  display: flex;
  justify-content: center;
  padding: 24px;
  min-height: 100vh;
`;

const Content = styled("div")`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
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
