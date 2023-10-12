import {defineConfig} from 'astro/config';

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    output: "server",
    adapter: nodejs({
        mode: "standalone"
    }),
    server: {
        host: "0.0.0.0",
        port: process.env.PORT
    }
});