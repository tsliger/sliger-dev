/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, _ as __astro_tag_component__, e as renderSlot, f as renderHead, m as maybeRenderHead } from '../astro.e45a0d31.mjs';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RiArrowDropDownLine } from 'react-icons/ri/index.js';
import ky from 'ky';
import { RxDoubleArrowRight } from 'react-icons/rx/index.js';
import { BlurhashCanvas } from 'react-blurhash';
import { useInView } from 'react-intersection-observer';
import { jsxs, jsx } from 'react/jsx-runtime';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai/index.js';

const $$Astro$9 = createAstro("https://sliger.dev");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$8 = createAstro("https://sliger.dev");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$7 = createAstro("https://sliger.dev");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$6 = createAstro("https://sliger.dev");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$5 = createAstro("https://sliger.dev");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$4 = createAstro("https://sliger.dev");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$3 = createAstro("https://sliger.dev");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro");

const $$Astro$2 = createAstro("https://sliger.dev");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}
${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/tsliger/projects/sliger-blog/node_modules/astro-seo/src/SEO.astro");

function BlogDropdownArticle({
  post = void 0,
  i,
  postsLoading
}) {
  const [isHovering, setHover] = useState(false);
  const [imageLoaded, setLoad] = useState(false);
  const {
    ref,
    inView,
    entry
  } = useInView({});
  useEffect(() => {
    if (inView) {
      const target = entry.target;
      const source = entry.target.getAttribute("load-src");
      target.src = source;
      setLoad(true);
    }
  }, [inView]);
  if (postsLoading || post === void 0) {
    return /* @__PURE__ */ jsxs("div", {
      className: "relative h-1/2 px-4 py-2 z-50",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-sm bg-black/20 h-5 rounded-md hover:text-[#FF6000] animate-pulse transition-all duration-150"
        }), /* @__PURE__ */ jsx("div", {
          className: "text-sm bg-black/20 h-5 w-1/3 mt-2 rounded-md hover:text-[#FF6000] animate-pulse transition-all duration-150"
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 grayscale z-[-1]",
        children: imageLoaded === false && /* @__PURE__ */ jsx(BlurhashCanvas, {
          hash: post.attributes.featured_image.data.attributes.blurhash,
          className: "w-full"
        })
      })]
    }, post.attributes.slug + i);
  }
  return /* @__PURE__ */ jsx("a", {
    href: "/blog/" + post.attributes.slug,
    children: /* @__PURE__ */ jsxs("div", {
      className: "hover:text-[#FF6000] bg-filter hover:underline underline-offset-4 cursor-pointer relative h-1/2 px-4 py-2 z-50",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex",
        children: [isHovering && /* @__PURE__ */ jsx("div", {
          className: "text-sm p-1 pr-1",
          children: /* @__PURE__ */ jsx(RxDoubleArrowRight, {})
        }), /* @__PURE__ */ jsx("h6", {
          className: "text-sm transition-all duration-150 z-[60]",
          children: post.attributes.title
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: `${imageLoaded ? "opacity-20" : "opacity-0"} transition-all duration-300 ease-in  absolute top-0 left-0 w-full h-full overflow-hidden  flex flex-col justify-center  z-[-1] `,
        children: post.attributes.featured_image.data.attributes.formats.thumbnail && /* @__PURE__ */ jsx("img", {
          ref,
          className: `${isHovering ? "scale-105" : "grayscale"} delay-75 transition-all duration-[1000ms]`,
          "load-src": post.attributes.featured_image.data.attributes.url
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute top-0 grayscale left-0 w-full h-full overflow-hidden opacity-20 flex flex-col justify-center  z-[-1] ",
        children: imageLoaded === false && /* @__PURE__ */ jsx(BlurhashCanvas, {
          hash: post.attributes.featured_image.data.attributes.blurhash,
          className: "w-full"
        })
      })]
    }, post.attributes.slug)
  });
}
__astro_tag_component__(BlogDropdownArticle, "@astrojs/react");

function BlogDropdown({
  setBlogOpen,
  blogOpen
}) {
  const [posts, setPosts] = useState(void 0);
  const [postsLoading, setLoading] = useState(true);
  const dropRef = useRef(void 0);
  useEffect(() => {
    if (blogOpen === true && posts === void 0) {
      fetchData();
    }
  }, [blogOpen]);
  const url = "https://sliger-backend-production.up.railway.app";
  useEffect(() => {
    async function click(event) {
      if (dropRef.current.contains(event.target)) {
        setBlogOpen(true);
      } else {
        setBlogOpen(false);
      }
    }
    if (blogOpen) {
      setTimeout(() => {
        document.body.addEventListener("click", click);
      }, 1);
    } else {
      setTimeout(() => {
        document.body.removeEventListener("click", click);
      }, 1);
    }
    return () => {
      setTimeout(() => {
        document.body.removeEventListener("click", click);
      }, 1);
    };
  }, [dropRef, blogOpen, setBlogOpen]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await ky.get(`${url}/api/posts?pagination[page]=1&pagination[pageSize]=2&populate=*`).json();
      setPosts(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (error) {
      if (error.name === "HTTPError") {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    }
  };
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.35
      }
    },
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  };
  return /* @__PURE__ */ jsx("div", {
    ref: dropRef,
    className: "absolute w-80 h-72 origin-top top-0 right-0 translate-y-[5.5rem] z-50 rounded-xl ",
    children: /* @__PURE__ */ jsxs(motion.div, {
      variants,
      initial: "hidden",
      animate: blogOpen ? "visible" : "hidden",
      transition: {
        delay: 0.15,
        ease: "easeInOut",
        duration: 0.25
      },
      className: "shadow-xl bg-[#403d39] border-[1.5px] border-black/20 h-full absolute w-full rounded-xl flex flex-col overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "border-b-[1.5px]  border-black/20 w-full h-12 flex items-center pl-4 font-bold",
        draggable: false,
        children: "Recent Posts"
      }), /* @__PURE__ */ jsx("div", {
        className: "border-b-[1.5px] border-black/20 flex-grow",
        children: posts && posts.map((post, i) => /* @__PURE__ */ jsx(BlogDropdownArticle, {
          post,
          i,
          postsLoading
        }, i))
      }), /* @__PURE__ */ jsx("a", {
        href: "/blog",
        className: "w-full h-16 hover:underline underline-offset-4 hover:text-[#FF6000] transition-all text-xs duration-150 flex items-center px-4",
        draggable: false,
        children: "View all posts..."
      })]
    })
  });
}
__astro_tag_component__(BlogDropdown, "@astrojs/react");

function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);
  const [currentTab, setTab] = useState("");
  useEffect(() => {
    var parser = document.createElement("a");
    parser.href = window.location.href;
    const regex = new RegExp(/[A-Za-z]+/);
    const match = parser.pathname.match(regex);
    if (match && match[0]) {
      setTab(match[0]);
    } else {
      setTab(null);
    }
  }, []);
  return /* @__PURE__ */ jsxs("nav", {
    className: `${!blogOpen ? "overflow-hidden" : ""} bg-[#403D39] select-none h-20 z-[300] snap-start absolute flex items-center  px-8 lg:px-0 w-full lg:w-[800px] xl:w-[1200px] self-center text-white  shadow-sm shadow-[#403D39]`,
    children: [/* @__PURE__ */ jsx("div", {
      className: "h-12 lg:h-16 aspect-square duration-[1000ms]",
      children: /* @__PURE__ */ jsx("a", {
        draggable: false,
        className: "h-full w-full grid place-items-center color-change-image",
        href: "/",
        "aria-label": "Home",
        children: /* @__PURE__ */ jsx("img", {
          draggable: false,
          className: "invert select-none drop-shadow-xl ",
          src: "/sliger-warped-logo.svg",
          alt: ""
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full"
    }), /* @__PURE__ */ jsxs("div", {
      className: "hidden lg:flex h-full text-sm md:text-base font-mono translate-x-8",
      children: [/* @__PURE__ */ jsx("a", {
        draggable: false,
        href: "/",
        className: "nav-button",
        children: /* @__PURE__ */ jsx("div", {
          className: `${currentTab === null ? "nav-child-active" : ""} nav-child-button`,
          children: "Home"
        })
      }), /* @__PURE__ */ jsx("a", {
        draggable: false,
        href: "/experience",
        className: "nav-button",
        children: /* @__PURE__ */ jsx("div", {
          className: `${currentTab === "experience" ? "nav-child-active" : ""} nav-child-button`,
          children: "Experience"
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "nav-button",
        onClick: () => setBlogOpen(!blogOpen),
        children: [/* @__PURE__ */ jsxs("div", {
          className: `${blogOpen || currentTab === "blog" ? "nav-child-active" : ""} nav-child-button`,
          children: [/* @__PURE__ */ jsx("p", {
            children: "Blog"
          }), /* @__PURE__ */ jsx(motion.div, {
            animate: {
              rotateZ: blogOpen ? -180 : 0
            },
            transition: {
              duration: 0.25,
              ease: "easeOut"
            },
            className: "grid place-items-center h-full ml-2",
            children: /* @__PURE__ */ jsx(RiArrowDropDownLine, {
              size: 17
            })
          })]
        }), /* @__PURE__ */ jsx(BlogDropdown, {
          setBlogOpen,
          blogOpen
        })]
      })]
    })]
  });
}
__astro_tag_component__(Navbar, "@astrojs/react");

function Footer() {
  return /* @__PURE__ */ jsxs("footer", {
    className: "snap-end select-none h-60 w-full bg-[#33312e] text-white relative",
    children: [/* @__PURE__ */ jsx("div", {
      className: "absolute bottom-[-12px] bg-[#33312e] h-8 w-full"
    }), /* @__PURE__ */ jsxs("div", {
      className: "absolute top-0 left-0 h-full w-full flex flex-col justify-center",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "w-96 mx-auto flex justify-center pb-12 space-x-20",
        children: [/* @__PURE__ */ jsx("div", {
          className: "active:border-transparent shadow-black/20  border-transparent border-[1.5px]  hover:border-black/[5%] hover:text-[#FF6000] active:scale-95 active:shadow-none w-14 h-14 shadow-xl hover:shadow-md cursor-pointer transition-all duration-300 rounded-full",
          children: /* @__PURE__ */ jsx("a", {
            className: "w-full h-full grid place-items-center",
            target: "_blank",
            href: "https://www.linkedin.com/in/tom-sliger",
            "aria-label": "Linkedin",
            children: /* @__PURE__ */ jsx(AiFillLinkedin, {
              size: 25
            })
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "shadow-black/20 active:border-transparent border-transparent border-[1.5px]  hover:border-black/[5%]  hover:text-[#FF6000] active:scale-95 active:shadow-none w-14 h-14 shadow-xl hover:shadow-md cursor-pointer transition-all duration-300 rounded-full grid place-items-center",
          children: /* @__PURE__ */ jsx("a", {
            className: "w-full h-full grid place-items-center",
            target: "_blank",
            href: "https://www.github.com/tsliger",
            "aria-label": "Github",
            children: /* @__PURE__ */ jsx(AiFillGithub, {
              size: 25
            })
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-10 mt-4 mx-auto ",
        children: /* @__PURE__ */ jsx("a", {
          draggable: false,
          href: "/",
          "aria-label": "Home",
          children: /* @__PURE__ */ jsx("img", {
            draggable: false,
            className: "select-none invert color-change-image active:invert",
            src: "/sliger-warped-logo.svg",
            alt: ""
          })
        })
      })]
    }), /* @__PURE__ */ jsx("svg", {
      className: "absolute left-0 top-0 h-16 w-full -translate-y-[100%]",
      fill: "#33312e",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      children: /* @__PURE__ */ jsx("path", {
        d: "M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z",
        className: "shape-fill"
      })
    })]
  });
}
__astro_tag_component__(Footer, "@astrojs/react");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://sliger.dev");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const placeholder_img = "https://i.imgur.com/4za3Zha.png";
  const { title, description, imageURL, type = "page" } = Astro2.props;
  let imgURL = imageURL ? imageURL : placeholder_img;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		', '\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/favicon.ico">\n		<meta name="generator"', `>
		<!-- Google tag (gtag.js) -->
		<script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-WFYXNHQCJ7"><\/script>
		<script type="text/partytown">
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-WFYXNHQCJ7');
		<\/script>
	`, '</head>\n	<body>\n		<div class="min-h-screen flex flex-col">\n			', "\n			", "\n			", "\n			", "\n		</div>\n	</body></html>"])), renderComponent($$result, "SEO", $$SEO, { "title": title, "charset": "UTF-8", "description": description, "openGraph": {
    basic: {
      title,
      type,
      image: imgURL
    }
  }, "extend": {
    // extending the default link tags
    link: [{ rel: "icon", href: "/favicon.ico" }],
    // extending the default meta tags
    meta: [
      {
        name: "twitter:image",
        content: imgURL
      },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ]
  } }), addAttribute(Astro2.generator, "content"), renderHead($$result), renderComponent($$result, "DrawerButton", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/buttons/DrawerButton", "client:component-export": "default" }), renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/Navbar", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, {}));
}, "/home/tsliger/projects/sliger-blog/src/layouts/Layout.astro");

const $$Astro = createAstro("https://sliger.dev");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | sliger.dev" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="min-h-screen grid place-items-center text-white">
        <div class="flex flex-col space-y-16 items-center">
            <h1 class="text-8xl font-bold font-mono">404</h1>
            <p class="-translate-y-16">Page not found</p>
            <button class="button-style px-12 py-4" onclick="history.back()">Go Back</button>
        </div>
    </div>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/404.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
