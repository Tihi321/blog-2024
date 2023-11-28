// @refresh reload
import { Suspense, createSignal } from "solid-js";
import { ThemeProvider } from "solid-styled-components";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { Nav } from "~/components/header/Nav";
import { GlobalStyles } from "~/styles/global";
import { Main } from "~/components/layout/Main";
import { ThemeName, darkTheme, lightTheme } from "./styles/theme";

export const getInitialTheme = (): ThemeName => {
  const savedTheme = localStorage.getItem("theme") as ThemeName | null;
  return savedTheme ?? "light";
};

export default function Root() {
  const [themeName, setThemeName] = createSignal<ThemeName>(getInitialTheme());

  const toggleTheme = () => {
    const newTheme = themeName() === "light" ? "dark" : "light";
    setThemeName(newTheme);
    localStorage.setItem("theme", newTheme);
    location.reload();
  };

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With MDX</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ThemeProvider theme={themeName() === "light" ? darkTheme : lightTheme}>
          <GlobalStyles />
          <ErrorBoundary>
            <Suspense>
              <Main>
                <Nav onThemeChange={toggleTheme} theme={themeName} />
                <Routes>
                  <FileRoutes />
                </Routes>
              </Main>
            </Suspense>
          </ErrorBoundary>
          <Scripts />
        </ThemeProvider>
      </Body>
    </Html>
  );
}
