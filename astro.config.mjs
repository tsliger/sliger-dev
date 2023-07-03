import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: "https://sliger.dev",
  integrations: [
    react(), 
    tailwind(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
  vite: {
    build: {
      commonjsOptions: {
        include: [/react-syntax-highlighter/, /node_modules/],
        include: [/lib-cjs/, /node_modules/],
      }
    }
  }
});