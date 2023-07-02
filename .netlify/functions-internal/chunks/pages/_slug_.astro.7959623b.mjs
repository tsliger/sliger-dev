/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.e45a0d31.mjs';
import { $ as $$Layout } from './404.astro.6cd01ccf.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BlurhashCanvas } from 'react-blurhash';
import { RiLoader5Line } from 'react-icons/ri/index.esm.js';
import ReactMarkdown from 'react-markdown';
import { PrismLight } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx.js';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript.js';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss.js';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash.js';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown.js';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json.js';
import rangeParser from 'parse-numeric-range';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';
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
import 'react-icons/ai/index.js';

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
function PublishedDate({
  date,
  text = void 0
}) {
  const d = new Date(date);
  return /* @__PURE__ */ jsxs("div", {
    className: "font-mono text-white/20 text-xs py-2 flex justify-end",
    children: [text, text && ":", " ", d.toLocaleDateString(void 0, options)]
  });
}
__astro_tag_component__(PublishedDate, "@astrojs/react");

PrismLight.registerLanguage("tsx", tsx);
PrismLight.registerLanguage("typescript", typescript);
PrismLight.registerLanguage("scss", scss);
PrismLight.registerLanguage("bash", bash);
PrismLight.registerLanguage("markdown", markdown);
PrismLight.registerLanguage("json", json);
const Markdown = ({
  markdown: markdown2
}) => {
  const syntaxTheme = materialDark;
  const MarkdownComponents = {
    code({
      node,
      inline,
      className,
      ...props
    }) {
      const hasLang = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;
      const applyHighlights = (applyHighlights2) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : "0";
          const highlightLines = rangeParser(strlineNumbers);
          const highlight = highlightLines;
          const data = highlight.includes(applyHighlights2) ? "highlight" : null;
          return {
            data
          };
        } else {
          return {};
        }
      };
      return hasLang ? /* @__PURE__ */ jsx(PrismLight, {
        style: syntaxTheme,
        language: hasLang[1],
        PreTag: "div",
        className: "codeStyle rounded-xl",
        showLineNumbers: true,
        wrapLines: hasMeta,
        useInlineStyles: true,
        lineProps: applyHighlights,
        children: props.children
      }) : /* @__PURE__ */ jsx("code", {
        className,
        ...props
      });
    }
  };
  return /* @__PURE__ */ jsx(ReactMarkdown, {
    components: MarkdownComponents,
    className: "markdown break-all",
    children: markdown2
  });
};
__astro_tag_component__(Markdown, "@astrojs/react");

const TextContent = ({
  text
}) => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(Markdown, {
      markdown: text
    })
  });
};
const HeaderContent = ({
  text
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "relative py-4 rounded-lg overflow-hidden",
    children: /* @__PURE__ */ jsx("h1", {
      className: "font-sans text-2xl lg:text-4xl font-bold relative",
      children: text
    })
  });
};
const ImageContent = ({
  image
}) => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.5
  });
  const imageRef = useRef(void 0);
  const [isLoaded, setLoad] = useState(false);
  const url = image.data.attributes.url;
  const blurHash = image.data.attributes.blurhash;
  useEffect(() => {
    if (inView === true) {
      const target = imageRef.current;
      const source = target.getAttribute("load-src");
      target.src = source;
    }
  }, [inView]);
  const changeLoad = () => {
    setTimeout(() => {
      setLoad(true);
    }, 300);
  };
  return /* @__PURE__ */ jsxs("div", {
    ref,
    className: "my-4 lg:my-12 overflow-hiddden flex items-center justify-center ",
    children: [/* @__PURE__ */ jsxs("div", {
      className: `${isLoaded ? "hidden" : "visible"} rounded-lg relative overflow-hidden w-full animate-pulse max-w-full`,
      style: {
        aspectRatio: image.data.attributes.width / image.data.attributes.height,
        width: image.data.attributes.width
      },
      children: [/* @__PURE__ */ jsx(BlurhashCanvas, {
        className: "w-full shadow-lg shadow-black/20 h-full  opacity-30 border-[3px] border-black/20",
        hash: blurHash
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute w-full h-full grid place-items-center left-0 top-0",
        children: /* @__PURE__ */ jsx("div", {
          className: "animate-spin text-white/20",
          children: /* @__PURE__ */ jsx(RiLoader5Line, {
            size: 50
          })
        })
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: `${!isLoaded ? "hidden" : "visible"}`,
      children: /* @__PURE__ */ jsx("img", {
        ref: imageRef,
        width: image.data.attributes.width,
        height: image.data.attributes.height,
        onLoad: changeLoad,
        "load-src": url,
        draggable: false,
        className: "rounded-lg hover:shadow-md transition-all duration-300 ease-out shadow-lg shadow-black/20 border-[3px] border-black/20"
      })
    })]
  });
};
function ContentProvider({
  contents
}) {
  return /* @__PURE__ */ jsx("div", {
    children: contents && contents.map((data, i) => {
      return /* @__PURE__ */ jsxs("div", {
        children: [data && data.attributes && data.attributes.type === "text" && /* @__PURE__ */ jsx(TextContent, {
          text: data.attributes.content
        }), data && data.attributes && data.attributes.type === "header" && /* @__PURE__ */ jsx(HeaderContent, {
          text: data.attributes.header
        }), data && data.attributes && data.attributes.type === "image" && /* @__PURE__ */ jsx(ImageContent, {
          image: data.attributes.image
        })]
      }, data.id);
    })
  });
}
__astro_tag_component__(ContentProvider, "@astrojs/react");

const $$Astro = createAstro("https://sliger.dev");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const url = "https://sliger-backend-production.up.railway.app";
  const data = await fetch(`${url}/api/post/${slug}?populate=deep`).then(
    (response) => response.json()
  );
  if (!data.data)
    return Astro2.redirect("/404");
  const post = data.data;
  const imgUrl = post.attributes.featured_image ? post.attributes.featured_image.data.attributes.url : null;
  const content_data = post.attributes.contents.data;
  var contents = content_data.sort(function(a, b) {
    return a.attributes.order - b.attributes.order;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.attributes.title} | sliger.dev`, "description": post.attributes.excerpt, "imageURL": imgUrl, "type": "article" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ScrollBar", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/ScrollBar", "client:component-export": "default" })}
  ${maybeRenderHead($$result2)}<div class="h-20"></div>
  <article class="relative">
    <div class="w-full h-52 lg:h-96 relative overflow-hidden">
      <div class="bg-filter absolute w-full h-full flex items-center">
        <img${addAttribute(false, "draggable")} class="select-none w-full opacity-30 z-[-1]"${addAttribute(
    imgUrl,
    "src"
  )}>
      </div>
      

      <div class="absolute bottom-10 w-full">
        <div class="text-white mx-8 z-50 lg:mx-auto  w-full lg:w-[800px] xl:w-[1000px]  drop-shadow-md">
          <h1 class="font-bold text-3xl lg:text-5xl pb-1 lg:pb-4">
            ${post.attributes.title}
          </h1>
          <h3 class="mb-1 underline  underline-offset-3 text-[#FF6000] font-thin text-sm lg:text-lg font-mono select-none cursor-pointer">
            <a${addAttribute("/blog/category/" + post.attributes.categories.data[0].attributes.slug, "href")}>${post.attributes.categories.data[0].attributes.name}</a>
          </h3>
          <div class="flex items-center justify-between">
            <h2 class="font-thin lg:text-lg font-mono cursor-pointer">
              ${post.attributes.author.data.attributes.name}
            </h2>
            <!-- <ReadingTime content={post} /> -->
          </div>
        </div>
      </div>
    </div>
    <main class="text-white  z-50 w-full lg:w-[800px] xl:w-[1000px] px-6 mx-auto pt-8">
      ${renderComponent($$result2, "PublishedDate", PublishedDate, { "date": post.attributes.publishedAt, "text": "Published" })}
      <div class="mb-48 mt-8 leading-10 font-serif">
        ${renderComponent($$result2, "ContentProvider", ContentProvider, { ...{ contents }, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/ContentProvider", "client:component-export": "default" })}
      </div>
    </main>
  </article>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/blog/[slug].astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, $$url as url };
