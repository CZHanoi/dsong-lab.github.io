// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/research",
  "/publications",
  "/Team/",
  // {
  //   text: "Guide",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //   ],
  // },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/"
  }
]);

// src/.vuepress/theme.ts
var theme_default = hopeTheme(
  {
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
    author: {
      name: "Dongyuan Song",
      url: "https://mister-hope.com"
    },
    logo: "/favicon.ico",
    repo: "vuepress-theme-hope/vuepress-theme-hope",
    docsDir: "src",
    // navbar
    navbar: navbar_default,
    // sidebar
    // sidebar,
    sidebar: false,
    displayFooter: false,
    copyright: false,
    breadcrumb: false,
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Search", "Outlook"]
      // ,"Outlook"
    },
    editLink: false,
    // metaLocales: {
    //   editLink: "Edit this page on GitHub",
    // },
    // These features are enabled for demo, only preserve features you need here
    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true
      // uncomment these if you need TeX support
      // math: {
      //   // install katex before enabling it
      //   type: "katex",
      //   // or install mathjax-full before enabling it
      //   type: "mathjax",
      // },
      // install chart.js before enabling it
      // chartjs: true,
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
      // install @vuepress/plugin-revealjs and uncomment these if you need slides
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    },
    plugins: {
      // Note: This is for testing ONLY!
      // You MUST generate and use your own comment service in production.
      // comment: {
      //   provider: "Giscus",
      //   repo: "vuepress-theme-hope/giscus-discussions",
      //   repoId: "R_kgDOG_Pt2A",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDOG_Pt2M4COD69",
      // },
      components: {
        components: ["Badge", "VPCard"]
      },
      icon: {
        prefix: "fa6-solid:"
      }
      // install @vuepress/plugin-pwa and uncomment these if you want a PWA
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    }
  },
  {
    custom: true
  }
);

// src/.vuepress/config.ts
import { getDirname, path } from "vuepress/utils";
import pkg from "@vuepress/plugin-register-components";
var __vite_injected_original_dirname = "F:/dsong/dsong-lab.github.io/src/.vuepress";
var __vite_injected_original_import_meta_url = "file:///F:/dsong/dsong-lab.github.io/src/.vuepress/config.ts";
var { registerComponentsPlugin } = pkg;
var __dirname = __vite_injected_original_dirname || getDirname(__vite_injected_original_import_meta_url);
var config_default = defineUserConfig({
  base: "/dsong-lab.github.io/",
  lang: "en-US",
  title: "DSong Lab",
  description: "DSong Lab's HomePage",
  theme: theme_default,
  plugins: [
    registerComponentsPlugin({
      components: {
        HomePage: path.resolve(__dirname, "./components/HomePage.vue")
      }
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L2Rzb25nL2Rzb25nLWxhYi5naXRodWIuaW8vc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcZHNvbmdcXFxcZHNvbmctbGFiLmdpdGh1Yi5pb1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovZHNvbmcvZHNvbmctbGFiLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbi8vIGltcG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuaW1wb3J0IHsgZ2V0RGlybmFtZSwgcGF0aCB9IGZyb20gJ3Z1ZXByZXNzL3V0aWxzJ1xuaW1wb3J0IHBrZyBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHMnO1xuY29uc3QgeyByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gfSA9IHBrZztcblxuY29uc3QgX19kaXJuYW1lID0gaW1wb3J0Lm1ldGEuZGlybmFtZSB8fCBnZXREaXJuYW1lKGltcG9ydC5tZXRhLnVybClcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiBcIi9kc29uZy1sYWIuZ2l0aHViLmlvL1wiLFxuXG4gIGxhbmc6IFwiZW4tVVNcIixcbiAgdGl0bGU6IFwiRFNvbmcgTGFiXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkRTb25nIExhYidzIEhvbWVQYWdlXCIsXG5cbiAgdGhlbWUsXG4gIHBsdWdpbnM6IFtcbiAgICByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4oe1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBIb21lUGFnZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cy9Ib21lUGFnZS52dWUnKSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIC8vIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9kc29uZy9kc29uZy1sYWIuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXGRzb25nXFxcXGRzb25nLWxhYi5naXRodWIuaW9cXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovZHNvbmcvZHNvbmctbGFiLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbi8vIGltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLWRvY3MtZGVtby5uZXRsaWZ5LmFwcFwiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiRG9uZ3l1YW4gU29uZ1wiLFxuICAgIHVybDogXCJodHRwczovL21pc3Rlci1ob3BlLmNvbVwiLFxuICB9LFxuXG4gIGxvZ286IFwiL2Zhdmljb24uaWNvXCIsXG5cbiAgcmVwbzogXCJ2dWVwcmVzcy10aGVtZS1ob3BlL3Z1ZXByZXNzLXRoZW1lLWhvcGVcIixcblxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIC8vIG5hdmJhclxuICBuYXZiYXIsXG5cbiAgLy8gc2lkZWJhclxuICAvLyBzaWRlYmFyLFxuICBzaWRlYmFyOiBmYWxzZSxcbiAgZGlzcGxheUZvb3RlcjogZmFsc2UsXG4gIGNvcHlyaWdodDogZmFsc2UsXG4gIGJyZWFkY3J1bWI6IGZhbHNlLFxuICBuYXZiYXJMYXlvdXQ6IHtcbiAgICBzdGFydDogW1wiQnJhbmRcIl0sXG4gICAgY2VudGVyOiBbXCJMaW5rc1wiXSxcbiAgICBlbmQ6IFtcIlNlYXJjaFwiLCBcIk91dGxvb2tcIl0sICAvLyAsXCJPdXRsb29rXCJcbiAgfSxcbiAgZWRpdExpbms6IGZhbHNlLFxuXG5cbiAgLy8gbWV0YUxvY2FsZXM6IHtcbiAgLy8gICBlZGl0TGluazogXCJFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWJcIixcbiAgLy8gfSxcblxuICAvLyBUaGVzZSBmZWF0dXJlcyBhcmUgZW5hYmxlZCBmb3IgZGVtbywgb25seSBwcmVzZXJ2ZSBmZWF0dXJlcyB5b3UgbmVlZCBoZXJlXG4gIG1hcmtkb3duOiB7XG4gICAgYWxpZ246IHRydWUsXG4gICAgYXR0cnM6IHRydWUsXG4gICAgY29kZVRhYnM6IHRydWUsXG4gICAgY29tcG9uZW50OiB0cnVlLFxuICAgIGRlbW86IHRydWUsXG4gICAgZmlndXJlOiB0cnVlLFxuICAgIGdmbTogdHJ1ZSxcbiAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICBpbWdTaXplOiB0cnVlLFxuICAgIGluY2x1ZGU6IHRydWUsXG4gICAgbWFyazogdHJ1ZSxcbiAgICBwbGFudHVtbDogdHJ1ZSxcbiAgICBzcG9pbGVyOiB0cnVlLFxuICAgIHN0eWxpemU6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHN1YjogdHJ1ZSxcbiAgICBzdXA6IHRydWUsXG4gICAgdGFiczogdHJ1ZSxcbiAgICB0YXNrbGlzdDogdHJ1ZSxcbiAgICB2UHJlOiB0cnVlLFxuXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSBuZWVkIFRlWCBzdXBwb3J0XG4gICAgLy8gbWF0aDoge1xuICAgIC8vICAgLy8gaW5zdGFsbCBrYXRleCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAvLyAgIHR5cGU6IFwia2F0ZXhcIixcbiAgICAvLyAgIC8vIG9yIGluc3RhbGwgbWF0aGpheC1mdWxsIGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vICAgdHlwZTogXCJtYXRoamF4XCIsXG4gICAgLy8gfSxcblxuICAgIC8vIGluc3RhbGwgY2hhcnQuanMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgLy8gY2hhcnRqczogdHJ1ZSxcblxuICAgIC8vIGluc3RhbGwgZWNoYXJ0cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAvLyBlY2hhcnRzOiB0cnVlLFxuXG4gICAgLy8gaW5zdGFsbCBmbG93Y2hhcnQudHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgLy8gZmxvd2NoYXJ0OiB0cnVlLFxuXG4gICAgLy8gaW5zdGFsbCBtZXJtYWlkIGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIG1lcm1haWQ6IHRydWUsXG5cbiAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgLy8gICBwcmVzZXRzOiBbXCJ0c1wiLCBcInZ1ZVwiXSxcbiAgICAvLyB9LFxuXG4gICAgLy8gaW5zdGFsbCBAdnVlL3JlcGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgLy8gdnVlUGxheWdyb3VuZDogdHJ1ZSxcblxuICAgIC8vIGluc3RhbGwgc2FuZHBhY2stdnVlMyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAvLyBzYW5kcGFjazogdHJ1ZSxcblxuICAgIC8vIGluc3RhbGwgQHZ1ZXByZXNzL3BsdWdpbi1yZXZlYWxqcyBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSBuZWVkIHNsaWRlc1xuICAgIC8vIHJldmVhbGpzOiB7XG4gICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgIC8vIH0sXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIC8vIE5vdGU6IFRoaXMgaXMgZm9yIHRlc3RpbmcgT05MWSFcbiAgICAvLyBZb3UgTVVTVCBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbW1lbnQgc2VydmljZSBpbiBwcm9kdWN0aW9uLlxuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxuICAgIC8vICAgcmVwbzogXCJ2dWVwcmVzcy10aGVtZS1ob3BlL2dpc2N1cy1kaXNjdXNzaW9uc1wiLFxuICAgIC8vICAgcmVwb0lkOiBcIlJfa2dET0dfUHQyQVwiLFxuICAgIC8vICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgIC8vICAgY2F0ZWdvcnlJZDogXCJESUNfa3dET0dfUHQyTTRDT0Q2OVwiLFxuICAgIC8vIH0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBjb21wb25lbnRzOiBbXCJCYWRnZVwiLCBcIlZQQ2FyZFwiXSxcbiAgICB9LFxuXG4gICAgaWNvbjoge1xuICAgICAgcHJlZml4OiBcImZhNi1zb2xpZDpcIixcbiAgICB9LFxuXG4gICAgLy8gaW5zdGFsbCBAdnVlcHJlc3MvcGx1Z2luLXB3YSBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVJbWFnZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSxcbntcbiAgY3VzdG9tOiB0cnVlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L2Rzb25nL2Rzb25nLWxhYi5naXRodWIuaW8vc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcZHNvbmdcXFxcZHNvbmctbGFiLmdpdGh1Yi5pb1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovZHNvbmcvZHNvbmctbGFiLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFwiL3Jlc2VhcmNoXCIsXG4gIFwiL3B1YmxpY2F0aW9uc1wiLFxuICBcIi9UZWFtL1wiLFxuICAvLyB7XG4gIC8vICAgdGV4dDogXCJHdWlkZVwiLFxuICAvLyAgIGljb246IFwibGlnaHRidWxiXCIsXG4gIC8vICAgcHJlZml4OiBcIi9ndWlkZS9cIixcbiAgLy8gICBjaGlsZHJlbjogW1xuICAvLyAgICAge1xuICAvLyAgICAgICB0ZXh0OiBcIkJhclwiLFxuICAvLyAgICAgICBpY29uOiBcImxpZ2h0YnVsYlwiLFxuICAvLyAgICAgICBwcmVmaXg6IFwiYmFyL1wiLFxuICAvLyAgICAgICBjaGlsZHJlbjogW1wiYmF6XCIsIHsgdGV4dDogXCIuLi5cIiwgaWNvbjogXCJlbGxpcHNpc1wiLCBsaW5rOiBcIiNcIiB9XSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHRleHQ6IFwiRm9vXCIsXG4gIC8vICAgICAgIGljb246IFwibGlnaHRidWxiXCIsXG4gIC8vICAgICAgIHByZWZpeDogXCJmb28vXCIsXG4gIC8vICAgICAgIGNoaWxkcmVuOiBbXCJyYXlcIiwgeyB0ZXh0OiBcIi4uLlwiLCBpY29uOiBcImVsbGlwc2lzXCIsIGxpbms6IFwiI1wiIH1dLFxuICAvLyAgICAgfSxcbiAgLy8gICBdLFxuICAvLyB9LFxuICB7XG4gICAgdGV4dDogXCJWMiBEb2NzXCIsXG4gICAgaWNvbjogXCJib29rXCIsXG4gICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvXCIsXG4gIH0sXG5dKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFMsU0FBUyx3QkFBd0I7OztBQ0FuQyxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUVuVSxJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW9CQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOzs7QUR6QkQsSUFBTyxnQkFBUTtBQUFBLEVBQVU7QUFBQSxJQUN2QixVQUFVO0FBQUEsSUFFVixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBRUEsTUFBTTtBQUFBLElBRU4sTUFBTTtBQUFBLElBRU4sU0FBUztBQUFBO0FBQUEsSUFHVDtBQUFBO0FBQUE7QUFBQSxJQUlBLFNBQVM7QUFBQSxJQUNULGVBQWU7QUFBQSxJQUNmLFdBQVc7QUFBQSxJQUNYLFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxNQUNaLE9BQU8sQ0FBQyxPQUFPO0FBQUEsTUFDZixRQUFRLENBQUMsT0FBTztBQUFBLE1BQ2hCLEtBQUssQ0FBQyxVQUFVLFNBQVM7QUFBQTtBQUFBLElBQzNCO0FBQUEsSUFDQSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFWLFVBQVU7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU07QUFDckIsZ0JBQUksUUFBUTtBQUNWLHFCQUFPO0FBQUEsZ0JBQ0wsS0FBSztBQUFBLGdCQUNMLE9BQU8sRUFBRSxNQUFNLE1BQU07QUFBQSxnQkFDckIsU0FBUztBQUFBLGNBQ1g7QUFBQSxVQUNKO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFvQ1I7QUFBQSxJQUVBLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdQLFlBQVk7QUFBQSxRQUNWLFlBQVksQ0FBQyxTQUFTLFFBQVE7QUFBQSxNQUNoQztBQUFBLE1BRUEsTUFBTTtBQUFBLFFBQ0osUUFBUTtBQUFBLE1BQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEwREY7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsUUFBUTtBQUFBLEVBQ1Y7QUFBQzs7O0FEMUxELFNBQVMsWUFBWSxZQUFZO0FBQ2pDLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQUFtSixJQUFNLDJDQUEyQztBQUs3TyxJQUFNLEVBQUUseUJBQXlCLElBQUk7QUFFckMsSUFBTSxZQUFZLG9DQUF1QixXQUFXLHdDQUFlO0FBQ25FLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBRWI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLHlCQUF5QjtBQUFBLE1BQ3ZCLFlBQVk7QUFBQSxRQUNWLFVBQVUsS0FBSyxRQUFRLFdBQVcsMkJBQTJCO0FBQUEsTUFDL0Q7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUlGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
