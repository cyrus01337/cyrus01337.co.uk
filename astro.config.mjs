import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    server: {
        port: 3000,
        host: true,
    },
    site: "https://cyrus01337.co.uk",
});
