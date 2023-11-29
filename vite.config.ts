import solid from "solid-start/vite";
import { defineConfig } from "vite";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solid({ ssr: false, extensions: [".mdx", ".md"] }),
  ],
});
