// vite.config.ts
import solid from "solid-start/vite";
import { defineConfig } from "vite";
var vite_config_default = defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      }),
      enforce: "pre"
    },
    solid({ ssr: false, extensions: [".mdx", ".md"] })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBzb2xpZCBmcm9tIFwic29saWQtc3RhcnQvdml0ZVwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHtcbiAgICAgIC4uLihhd2FpdCBpbXBvcnQoXCJAbWR4LWpzL3JvbGx1cFwiKSkuZGVmYXVsdCh7XG4gICAgICAgIGpzeDogdHJ1ZSxcbiAgICAgICAganN4SW1wb3J0U291cmNlOiBcInNvbGlkLWpzXCIsXG4gICAgICAgIHByb3ZpZGVySW1wb3J0U291cmNlOiBcInNvbGlkLW1keFwiLFxuICAgICAgfSksXG4gICAgICBlbmZvcmNlOiBcInByZVwiLFxuICAgIH0sXG4gICAgc29saWQoeyBzc3I6IGZhbHNlLCBleHRlbnNpb25zOiBbXCIubWR4XCIsIFwiLm1kXCJdIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxJQUFJLE1BQU0sT0FBTyxtQkFBbUIsUUFBUTtBQUFBLFFBQzFDLEtBQUs7QUFBQSxRQUNMLGlCQUFpQjtBQUFBLFFBQ2pCLHNCQUFzQjtBQUFBLE1BQ3hCLENBQUM7QUFBQSxNQUNELFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxNQUFNLEVBQUUsS0FBSyxPQUFPLFlBQVksQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDbkQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
