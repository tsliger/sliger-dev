/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.e45a0d31.mjs';
import { $ as $$Layout } from './404.astro.6cd01ccf.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
import 'react';
import 'framer-motion';
import 'react-icons/ri/index.js';
import 'ky';
import 'react-icons/rx/index.js';
import 'react-blurhash';
import 'react-intersection-observer';
import 'react/jsx-runtime';
import 'react-icons/ai/index.js';

const $$Astro = createAstro("https://sliger.dev");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "New Post | sliger.dev" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="min-h-screen">
    ${renderComponent($$result2, "AuthWrapper", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/auth/AuthWrapper", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`
        ${renderComponent($$result3, "PostCreator", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/blog/PostCreator", "client:component-export": "default" })}
    ` })}
    </div>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/new/blog.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/new/blog.astro";
const $$url = "/new/blog";

export { $$Blog as default, $$file as file, $$url as url };
