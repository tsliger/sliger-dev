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
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Auth;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Experience | sliger.dev" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="h-20"></div>
    ${renderComponent($$result2, "GithubAuthenitcator", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/GithubAuthenticator", "client:component-export": "default" })}
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/auth.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/auth.astro";
const $$url = "/auth";

export { $$Auth as default, $$file as file, $$url as url };
