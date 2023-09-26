import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/CNIED/",

  lang: "en-US",
  title: "Collaborative New Ithkuil Examples Document",
  description: "Collaborative New Ithkuil Examples Document",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
