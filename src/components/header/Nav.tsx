import { A } from "solid-start";
import { styled } from "solid-styled-components";

type NavProps = {
  onThemeChange: () => void;
  theme: () => string;
};

const Container = styled("nav")`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px;
`;

const ThemeToggle = styled("button")`
  padding: 4px 8px;
`;

export const Nav = ({ onThemeChange, theme }: NavProps) => {
  return (
    <Container>
      <A href="/">HOME</A>
      <A href="/about">ABOUT</A>
      <A href="/blog">Blog</A>
      <ThemeToggle onClick={onThemeChange}>{theme()}</ThemeToggle>
    </Container>
  );
};
