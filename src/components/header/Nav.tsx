import { get } from "lodash";
import { A } from "solid-start";
import { styled } from "solid-styled-components";
import { TextInput } from "~/components/inputs/TextInput";
import { LogoDavinci } from "~/components/assets/LogoDavinci";
import { setSearch } from "~/store/search";

type NavProps = {
  onThemeChange: () => void;
  theme: () => string;
};

const Container = styled("nav")`
  background-color: ${(props) => props?.theme?.colors.ui2};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 24px;
`;

const ThemeToggle = styled("button")`
  padding: 6px 16px;
`;

const LogoContainer = styled("div")`
  margin-right: auto;
`;

const SearchInput = styled(TextInput)`
  width: 230px;
  padding: 4px 8px;
`;

export const Nav = ({ onThemeChange, theme }: NavProps) => {
  return (
    <Container>
      <LogoContainer>
        <A href="/">
          <LogoDavinci />
        </A>
      </LogoContainer>
      <A href="/works">WORKS</A>
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
