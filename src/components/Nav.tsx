import { A } from "solid-start";
import { styled } from "solid-styled-components";

const Container = styled("nav")`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  a {
    font-size: 1.3em;
    margin: 0 1em;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    color: #000;
  }
`;

function Nav() {
  return (
    <Container>
      <A href="/">HOME</A>
      <A href="/about">ABOUT</A>
    </Container>
  );
}

export default Nav;
