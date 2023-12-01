import { get } from "lodash";
import { A } from "solid-start";
import { styled } from "solid-styled-components";
import { TextInput } from "~/components/inputs/TextInput";
import { setSearch } from "~/store/search";

type NavProps = {
  onThemeChange: () => void;
  theme: () => string;
};

const Container = styled("nav")`
  background-color: ${(props) => props?.theme?.colors.ui6};
  position: fixed;
  height: 48px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const ThemeToggle = styled("button")`
  padding: 6px 16px;
`;

const SearchInput = styled(TextInput)`
  width: 230px;
  padding: 4px 8px;
`;

export const Nav = ({ onThemeChange, theme }: NavProps) => {
  return (
    <Container>
      <A href="/">HOME</A>
      <A href="/about">ABOUT</A>
      <A href="/blog">Blog</A>
      <ThemeToggle onClick={onThemeChange}>{theme()}</ThemeToggle>
      <SearchInput
        onSubmit={(value) => {
          window.location.href = `/search?${value}`;
        }}
        onInput={(value) => {
          setSearch(value);
        }}
        value={get(location, ["search"]).replaceAll("?", "")}
        placeholder="Search"
      />
    </Container>
  );
};
