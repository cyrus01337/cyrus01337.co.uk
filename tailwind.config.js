import daisyUI from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    daisyui: {
        themes: ["light"],
    },
    theme: {
        extend: {
            brightness: {
                30: "0.30",
            },
            fontFamily: {
                sans: ["Inter Tight Variable", ...defaultTheme.fontFamily.sans],
            },
            transitionDuration: {
                600: "600ms",
            },
            transitionProperty: {
                filter: "filter",
                "flex-basis": "flex-basis",
            },
        },
    },
    plugins: [daisyUI],
};
