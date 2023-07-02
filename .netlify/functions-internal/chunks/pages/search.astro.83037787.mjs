/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.e45a0d31.mjs';
import { $ as $$Layout } from './404.astro.6cd01ccf.mjs';
import { useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
import 'framer-motion';
import 'react-icons/ri/index.js';
import 'ky';
import 'react-icons/rx/index.js';
import 'react-blurhash';
import 'react-intersection-observer';
import 'react-icons/ai/index.js';

function PostSearch() {
  useEffect(() => {
    if ("URLSearchParams" in window) {
      const urlParams = new URLSearchParams(window.location.search);
      const searchString = urlParams.get("q");
      console.log(searchString);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", {
    className: "mt-24 mx-16",
    children: "PostSearch"
  });
}
__astro_tag_component__(PostSearch, "@astrojs/react");

const $$Astro = createAstro("https://sliger.dev");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | sliger.dev" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "PostSearch", PostSearch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/blog/PostSearch", "client:component-export": "default" })}
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/blog/search.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/blog/search.astro";
const $$url = "/blog/search";

export { $$Search as default, $$file as file, $$url as url };
