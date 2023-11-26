// @refresh reload
import { Suspense } from "solid-js";
import { ThemeProvider } from "solid-styled-components";
import {
  A,
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
import Nav from "./components/Nav";
import { light } from "./styles/theme";
import { GlobalStyles } from "./styles/global";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With MDX</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <ErrorBoundary>
            <Nav />
            <Suspense>
              <main>
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
            </Suspense>
          </ErrorBoundary>
          <Scripts />
        </ThemeProvider>
      </Body>
    </Html>
  );
}
