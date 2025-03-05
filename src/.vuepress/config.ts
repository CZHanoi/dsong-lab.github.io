import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import theme from "./theme.js";
import { getDirname, path } from 'vuepress/utils'

const __dirname = import.meta.dirname || getDirname(import.meta.url)
export default defineUserConfig({
  base: "/dsong-lab.github.io/",

  lang: "en-US",
  title: "DSong Lab",
  description: "DSong Lab's HomePage",

  theme,
  plugins: [
    registerComponentsPlugin({
      components: {
        HomePage: path.resolve(__dirname, './components/HomePage.vue'),
      },
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
