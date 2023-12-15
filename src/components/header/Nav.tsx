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
  gap: 16px;
  padding: 16px;
  flex-wrap: wrap;
  border-radius: 24px;
`;

const ThemeToggle = styled("button")`
  padding: 6px 16px;
  text-transform: uppercase;
`;

const LogoContainer = styled("div")`
  margin-right: auto;
`;

const SearchInput = styled(TextInput)`
  width: 230px;
  padding: 4px 8px;
`;

const NavLink = styled(A)`
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${(props: any) => props?.theme?.fonts.heading};
`;

export const Nav = ({ onThemeChange, theme }: NavProps) => {
  return (
    <Container>
      <LogoContainer>
        <A href="/">
          <LogoDavinci />
        </A>
      </LogoContainer>
      <NavLink href="/works">WORKS</NavLink>
      <NavLink href="/blog">Blog</NavLink>
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
