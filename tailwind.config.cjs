/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#FFF",
      primary: "#FF7021",
      secundary: {
        100: "#148CFF",
        200: "#005385",
      },
      gray: {
        800: "#1f2937",
      },
    },
  },
};
