import typography from "@tailwindcss/typography";
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
            animation: {
                "display-numbers": "display-numbers 6s ease-in-out infinite",
            },
            brightness: {
                30: "0.30",
            },
            fontFamily: {
                sans: ["Inter Tight Variable", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                "display-numbers": {
                    "0%, 80%, 100%": {
                        "flex-basis": 0,
                        color: "oklch(var(--bc))",
                    },
                    "20%, 60%": {
                        "flex-basis": "50%",
                        color: "oklch(var(--p))",
                    },
                },
            },
            transitionDelay: {
                1500: "1500ms",
            },
            transitionProperty: {
                filter: "filter",
                "flex-basis": "flex-basis",
                size: "height, width",
            },
        },
    },
    plugins: [typography, daisyUI],
};
