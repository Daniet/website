import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    vue(),
    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),
    sitemap({
      customPages: ["https://localhost"],
    }),
  ],
});
