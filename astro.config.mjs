import {defineConfig} from 'astro/config';

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import nodejs from "@astrojs/node";

import 'dotenv/config'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    output: "server",
    adapter: nodejs({
        mode: "standalone"
    }),
    server: ({ command }) => ({
        port: command === 'dev' ? 4321: process.env.port,
        host: '0.0.0.0'
    })
});