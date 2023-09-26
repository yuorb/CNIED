import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: ["1","2","3","4","readme"],
    },
    // "slides",
  ],
});
