import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: "https://sliger.dev",
  integrations: [react(), tailwind(), partytown()],
  output: "server",
  adapter: netlify()
});