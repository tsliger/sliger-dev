import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercelEdge from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  site: "https://sliger.dev",
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercelEdge(),
});