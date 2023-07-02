/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.e45a0d31.mjs';
import { $ as $$Layout } from './404.astro.6cd01ccf.mjs';
import { useState, useRef, useEffect, createElement } from 'react';
import { useScroll, useTransform, motion, useAnimation, useInView } from 'framer-motion';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { MdArrowDropDown } from 'react-icons/md/index.js';
import Tilt from 'react-parallax-tilt';
import useSWR from 'swr';
import { AiFillGithub } from 'react-icons/ai/index.js';
import { useInView as useInView$1 } from 'react-intersection-observer';
import { BlurhashCanvas } from 'react-blurhash';
import { Formik } from 'formik';
import { object, string } from 'yup';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ky from 'ky';

const Parallax = ({
  children,
  offset = 50
}) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);
  const {
    scrollY
  } = useScroll();
  const initial = elementTop - clientHeight;
  const final = elementTop + offset;
  const y = useTransform(scrollY, [initial, final], [offset, -offset]);
  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
      setClientHeight(window.innerHeight);
    };
    onResize();
  }, [ref]);
  return /* @__PURE__ */ jsx(motion.div, {
    ref,
    style: {
      y
    },
    children
  });
};
__astro_tag_component__(Parallax, "@astrojs/react");

const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.5
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.25
    }
  }
};
function Box({
  children,
  className = "",
  id = void 0
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return /* @__PURE__ */ jsx(motion.div, {
    id,
    animate: controls,
    initial: "hidden",
    variants: squareVariants,
    ref,
    className,
    children
  });
}
__astro_tag_component__(Box, "@astrojs/react");

function SkillTree({
  data
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "w-[300px] select-none relative  mx-4 lg:mx-32 py-12",
    children: [/* @__PURE__ */ jsx("p", {
      className: "text-gray-200 font-mono tracking-widest text-base lg:text-2xl  font-semibold  mb-8",
      children: data.attributes.category
    }), /* @__PURE__ */ jsx("div", {
      className: "w-52 translate-x-[25%]",
      children: /* @__PURE__ */ jsx("ul", {
        className: " space-y-3 flex flex-col justify-center ",
        children: data.attributes.skills && data.attributes.skills.data.map((data2, i) => {
          return /* @__PURE__ */ jsx("li", {
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("span", {
              className: "ml-3 text-[#DD5909] bg-black/30 px-4 py-3 text-sm lg:text-base  rounded-xl shadow-lg select-text shadow-black/20",
              children: data2.attributes.text
            })
          }, i);
        })
      })
    })]
  });
}
__astro_tag_component__(SkillTree, "@astrojs/react");

const fetcher$1 = (url) => fetch(url).then((res) => res.json());
function SkillTreeProvider() {
  const url = "https://sliger-backend-production.up.railway.app";
  const {
    data,
    error,
    isLoading
  } = useSWR(`${url}/api/Skill-categories?populate=*`, fetcher$1);
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-wrap justify-center",
    children: data && data.data && data.data.map((data2, i) => {
      return /* @__PURE__ */ createElement(SkillTree, {
        data: data2,
        key: i
      });
    })
  });
}
__astro_tag_component__(SkillTreeProvider, "@astrojs/react");

function ExperienceCard({
  type = void 0
}) {
  const [isActive, setActive] = useState(false);
  return /* @__PURE__ */ jsx(Tilt, {
    tiltMaxAngleX: 5,
    tiltMaxAngleY: 5,
    children: /* @__PURE__ */ jsxs("div", {
      onMouseEnter: () => setActive(true),
      onMouseLeave: () => setActive(false),
      className: "w-[325px] lg:w-[440px] h-[170px] lg:h-[250px] experience-card cursor-pointer",
      children: [type === "work" && /* @__PURE__ */ jsx(Work, {
        isActive
      }), type === "school" && /* @__PURE__ */ jsx(School, {
        isActive
      })]
    })
  });
}
const Work = ({
  isActive
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "w-full h-full flex flex-col px-6 space-y-2",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "font-bold text-lg tracking-wider text-white/70 py-2",
      children: "Work Experience"
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex items-start flex-row",
      children: [/* @__PURE__ */ jsx("div", {
        className: `${isActive ? "opacity-80" : "opacity-50"} bg-white transition-all aspect-square duration-300 ease-in-out rounded-lg overflow-hidden border-[3px] p-2 shadow-md border-black/10`,
        children: /* @__PURE__ */ jsx("img", {
          alt: "Anchor Systems logo",
          className: "h-10 w-10 aspect-square",
          src: "/work-logo.webp"
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "pl-4 -translate-y-1",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "lg:text-lg font-bold text-white/70 font-mono",
          children: "Anchor Systems"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-white/70 font-mono text-sm italic",
          children: "Software Engineer"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-white/40 font-mono text-xs italic self-end",
          children: "Feb 2022 - Mar 2023 (1 yr)"
        })]
      })]
    })]
  });
};
const School = ({
  isActive
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "w-full h-full flex flex-col px-6 space-y-2",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "font-bold text-lg tracking-wider text-white/70 py-2",
      children: "Education"
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex items-start flex-row",
      children: [/* @__PURE__ */ jsx("div", {
        className: `${isActive ? "opacity-80" : "opacity-50"} bg-white transition-all aspect-square duration-300 ease-in-out rounded-lg overflow-hidden border-[3px] p-2 shadow-md border-black/10`,
        children: /* @__PURE__ */ jsx("img", {
          alt: "LSSU logo",
          className: "w-12 aspect-square",
          src: "/education-logo.webp"
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "pl-4 -translate-y-1",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "lg:text-lg font-bold text-white/70 font-mono",
          children: "Lake Superior State University"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-white/70 font-mono  italic text-xs lg:text-sm",
          children: "BS, Computer Science"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-white/40 font-mono text-xs lg:text-sm italic self-end",
          children: "Aug 2018 - May 2022 (4 yrs)"
        })]
      })]
    })]
  });
};
__astro_tag_component__(ExperienceCard, "@astrojs/react");

function ProjectCard({
  data
}) {
  const [isActive, setActive] = useState(false);
  const [imageLoaded, setLoad] = useState(false);
  const imageRef = useRef(void 0);
  const {
    ref,
    inView
  } = useInView$1({});
  useEffect(() => {
    if (window.innerWidth <= 800) {
      if (inView) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    if (inView) {
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
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    className: "w-[340px] h-[350px] lg:h-[400px] cursor-pointer experience-card text-white flex flex-col overflow-hidden",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "lg:text-xl font-mono font-semibold h-20  px-4 py-3 z-40 ",
      children: data.attributes.title
    }), /* @__PURE__ */ jsxs("div", {
      className: "h-36 lg:h-42 relative space-y-2 overflow-hidden",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "bg-filter",
        children: [/* @__PURE__ */ jsx("div", {
          className: `${imageLoaded ? "opacity-100" : "opacity-0"}`,
          children: /* @__PURE__ */ jsx("img", {
            alt: "",
            ref: imageRef,
            "load-src": data.attributes.banner_image.data[0].attributes.url,
            onLoad: changeLoad,
            className: `${isActive ? "scale-100 opacity-30" : "scale-[1.02] opacity-10 grayscale"} transition duration-[1200ms] origin-center ease-in-out object-fit `
          })
        }), data.attributes.banner_image.data[0].attributes.blurhash && /* @__PURE__ */ jsx("div", {
          className: "absolute grayscale -z-10 duration-300 transition top-0 left-0 w-full h-full overflow-hidden opacity-10 animate-pulse flex items-center",
          children: imageLoaded === false && /* @__PURE__ */ jsx(BlurhashCanvas, {
            hash: data.attributes.banner_image.data[0].attributes.blurhash,
            className: "w-full opacity-30"
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-full absolute bottom-0 left-0 h-8 bg-gradient-to-t from-black/30"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "text-sm lg:text-base w-full h-24 py-4 px-4 ",
      children: /* @__PURE__ */ jsx("p", {
        children: data.attributes.description
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex-grow"
    }), /* @__PURE__ */ jsx("a", {
      className: "button-style duration-[600ms] self-end active:scale-[0.95] w-24 mb-4 mx-4",
      target: "_blank",
      rel: "noopener noreferrer",
      href: data.attributes.github_link,
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex items-center space-x-2",
        children: [/* @__PURE__ */ jsx(AiFillGithub, {}), /* @__PURE__ */ jsx("p", {
          children: "Github"
        })]
      })
    })]
  });
}
__astro_tag_component__(ProjectCard, "@astrojs/react");

const contactFormSchema = object({
  first_name: string().min(2, "First name too short").max(50, "First name too long").required("First name required"),
  last_name: string().min(2, "Last name too short").max(50, "Last name too long").required("Last name required"),
  email: string().email("Not a valid email").required("Email required"),
  description: string().min(20, "Description too short").max(500, "Description too long").required("Description required"),
  captcha: string().min(1).required("Captcha not complete")
});
function ContactForm() {
  const captchaRef = useRef(null);
  const onLoad = () => {
    captchaRef.current.execute();
  };
  const url = "https://sliger-backend-production.up.railway.app";
  const postData = async (values) => {
    ky.post(`${url}/api/contacts`, {
      json: {
        data: values
      }
    });
  };
  return /* @__PURE__ */ jsx(Formik, {
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      description: "",
      captcha: ""
    },
    validationSchema: contactFormSchema,
    onSubmit: (values, {
      setSubmitting,
      resetForm
    }) => {
      setTimeout(() => {
        postData(values);
        setSubmitting(false);
        resetForm();
      }, 400);
    },
    children: ({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      isValid,
      initialStatus,
      setFieldValue
    }) => /* @__PURE__ */ jsxs("form", {
      onSubmit: handleSubmit,
      className: "w-full md:w-96 lg:w-[600px] space-y-6 -translate-y-6",
      children: [/* @__PURE__ */ jsx("p", {
        className: "h-12 flex items-end text-red-500 w-full",
        children: errors && errors.first_name || errors.last_name || errors.email || errors.description
      }), /* @__PURE__ */ jsxs("div", {
        className: "w-full flex space-x-4",
        children: [/* @__PURE__ */ jsx("input", {
          onChange: handleChange,
          onBlur: handleBlur,
          className: "input-field w-full",
          name: "first_name",
          id: "first_name",
          placeholder: "First Name",
          value: values.first_name
        }), /* @__PURE__ */ jsx("input", {
          onChange: handleChange,
          onBlur: handleBlur,
          className: "input-field w-full",
          name: "last_name",
          id: "last_name",
          placeholder: "Last Name",
          value: values.last_name
        })]
      }), /* @__PURE__ */ jsx("input", {
        onChange: handleChange,
        onBlur: handleBlur,
        className: "input-field w-full",
        name: "email",
        type: "email",
        id: "email",
        placeholder: "Email",
        value: values.email
      }), /* @__PURE__ */ jsx("textarea", {
        onChange: handleChange,
        onBlur: handleBlur,
        className: "input-field w-full py-2 min-h-[300px]",
        name: "description",
        id: "description",
        value: values.description,
        placeholder: "Enter text here...."
      }), /* @__PURE__ */ jsxs("div", {
        className: "h-24 flex",
        children: [/* @__PURE__ */ jsx("div", {
          className: "w-1/2 flex items-end",
          children: touched.description && !errors.description && /* @__PURE__ */ jsx(HCaptcha, {
            sitekey: "3ad9d04e-58ae-4645-a4f3-d223aa0a746c",
            onLoad,
            onVerify: (token, ekey) => setFieldValue("captcha", token),
            theme: "dark",
            ref: captchaRef
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "w-1/2 flex items-end justify-end",
          children: /* @__PURE__ */ jsx("button", {
            type: "submit",
            disabled: isSubmitting,
            className: "button-style w-32 h-12",
            children: "Submit"
          })
        })]
      })]
    })
  });
}
__astro_tag_component__(ContactForm, "@astrojs/react");

const fetcher = (url) => fetch(url).then((res) => res.json());
function Experience() {
  const url = "https://sliger-backend-production.up.railway.app";
  const {
    data,
    error,
    isLoading
  } = useSWR(`${url}/api/projects?populate=*`, fetcher);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Box, {
      className: "",
      children: /* @__PURE__ */ jsxs("div", {
        className: "min-h-screen relative flex items-center justify-center overflow-hidden",
        children: [/* @__PURE__ */ jsx(Parallax, {
          offset: 200,
          children: /* @__PURE__ */ jsxs("div", {
            className: "min-h-screen flex flex-col pt-40 lg:pt-0 lg:justify-center items-center relative space-y-8 lg:space-y-24 ",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "h-32 w-full grid place-items-center",
              children: [/* @__PURE__ */ jsx("h1", {
                className: "text-5xl lg:text-6xl text-white/50 drop-shadow-md font-serif tracking-widest select-none ",
                children: "Experience"
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex font-mono space-x-12 my-10 text-sm lg:text-base ",
                children: [/* @__PURE__ */ jsx("a", {
                  href: "#projects",
                  className: "text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline",
                  children: "Projects"
                }), /* @__PURE__ */ jsx("a", {
                  href: "#skills",
                  className: "text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline",
                  children: "Skills"
                }), /* @__PURE__ */ jsx("a", {
                  href: "#contact",
                  className: "text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline",
                  children: "Contact"
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-32 w-full",
              children: [/* @__PURE__ */ jsx(ExperienceCard, {
                type: "work"
              }), /* @__PURE__ */ jsx(ExperienceCard, {
                type: "school"
              })]
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "absolute -bottom-12 invisible md:visible",
          children: /* @__PURE__ */ jsx(Parallax, {
            offset: -80,
            children: /* @__PURE__ */ jsx("a", {
              "aria-label": "Scroll Down",
              href: "#projects",
              children: /* @__PURE__ */ jsx("div", {
                className: "text-[#FFE6C7] z-[99] bottom-8 p-2 text-xs font-mono border-2 hover:animate-none   border-black/20 font-bold rounded-full animate-bounce shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center",
                children: /* @__PURE__ */ jsx(MdArrowDropDown, {
                  size: 22
                })
              })
            })
          })
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "main-container overflow-hidden space-y-8",
      children: [/* @__PURE__ */ jsx("div", {
        className: "h-12"
      }), /* @__PURE__ */ jsx("div", {
        id: "projects"
      }), /* @__PURE__ */ jsx(Box, {
        className: "h-[700px]",
        children: /* @__PURE__ */ jsx(Parallax, {
          offset: 200,
          children: /* @__PURE__ */ jsxs("div", {
            className: "min-h-screen flex flex-col items-center justify-center  mx-8 lg:mx-16",
            children: [/* @__PURE__ */ jsx("p", {
              className: "self-start lg:translate-x-32 text-2xl lg:text-5xl  font-semibold tracking-widest font-serif text-gray-200 ",
              children: "Projects"
            }), /* @__PURE__ */ jsx("p", {
              className: "self-start text-sm lg:text-base lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20",
              children: "Some things I've worked on"
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-32",
              children: data && data.data && data.data.map((data2, i) => {
                return /* @__PURE__ */ jsx(Tilt, {
                  tiltMaxAngleX: 5,
                  tiltMaxAngleY: 5,
                  children: /* @__PURE__ */ jsx(ProjectCard, {
                    data: data2
                  })
                }, i);
              })
            })]
          })
        })
      }), /* @__PURE__ */ jsx(Box, {
        id: "skills",
        children: /* @__PURE__ */ jsx(Parallax, {
          offset: 200,
          children: /* @__PURE__ */ jsxs("div", {
            className: "min-h-screen flex flex-col justify-center items-center mx-8 lg:mx-16",
            children: [/* @__PURE__ */ jsx("p", {
              className: "self-start lg:translate-x-32 text-2xl lg:text-5xl  font-semibold tracking-widest font-serif text-gray-200",
              children: "Skills"
            }), /* @__PURE__ */ jsx("p", {
              className: "self-start text-sm lg:text-base lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20",
              children: "What I've worked with professionally and personally"
            }), /* @__PURE__ */ jsx("div", {
              className: "flex space-x-8",
              children: /* @__PURE__ */ jsx(SkillTreeProvider, {})
            })]
          })
        })
      }), /* @__PURE__ */ jsx(Box, {
        id: "contact",
        className: "h-[700px]",
        children: /* @__PURE__ */ jsx(Parallax, {
          offset: 200,
          children: /* @__PURE__ */ jsxs("div", {
            className: "min-h-screen flex flex-col items-center  mx-8 lg:mx-16",
            children: [/* @__PURE__ */ jsx("p", {
              className: "self-start lg:translate-x-32 text-2xl lg:text-5xl  font-semibold tracking-widest font-serif text-gray-200",
              children: "Contact"
            }), /* @__PURE__ */ jsx("p", {
              className: "self-start text-sm lg:text-base lg:translate-x-32 pb-12 lg:pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20",
              children: "Feel free to reach out"
            }), /* @__PURE__ */ jsx(ContactForm, {})]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "h-64"
      })]
    })]
  });
}
__astro_tag_component__(Experience, "@astrojs/react");

const $$Astro = createAstro("https://sliger.dev");
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  let desc = "Feel free to explore my current and past projects, where you can witness my ongoing work as well as my accomplished endeavors. Additionally, I have provided comprehensive details about my relevant professional experience and the diverse range of skills and technologies I have proficiently worked with.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Experience | sliger.dev", "description": desc, "type": "page" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "ExperienceComponent", Experience, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/experience/ExperienceComponent", "client:component-export": "default" })}
    ${renderComponent($$result2, "ScrollBar", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/ScrollBar", "client:component-export": "default" })}
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/experience.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/experience.astro";
const $$url = "/experience";

const experience = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Experience,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Box as B, Parallax as P, experience as e };
