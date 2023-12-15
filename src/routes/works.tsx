import { Center } from "~/components/layout/Center";
import { styled } from "solid-styled-components";

const Image = styled("img")`
  width: 100%;
  margin-bottom: 32px;
`;

const Title = styled("h1")`
  text-align: center;
`;

export default function Works() {
  return (
    <Center>
      <Image src="/assets/homer-writing.png" />
      <Title>Works</Title>
    </Center>
  );
}
