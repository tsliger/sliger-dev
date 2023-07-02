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
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const url = "https://sliger-backend-production.up.railway.app";
  const data = await fetch(`${url}/api/category/${category}?populate=*`).then(
    (response) => response.json()
  );
  if (!data.data)
    return Astro2.redirect("/404");
  const attributes = data.data.attributes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${attributes.name} Posts | sliger.dev` }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="w-[700px] mx-auto min-h-screen">
    <h1 class="mt-24 w-full grid place-items-center text-3xl font-semibold tracking-wider py-16 font-sans text-white">${attributes.name} Posts</h1>
    ${renderComponent($$result2, "CategoryPosts", null, { "posts": attributes.posts.data, "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/blog/CategoryPosts", "client:component-export": "default" })}
  </div>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/blog/category/[category].astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/blog/category/[category].astro";
const $$url = "/blog/category/[category]";

export { $$category as default, $$file as file, $$url as url };
