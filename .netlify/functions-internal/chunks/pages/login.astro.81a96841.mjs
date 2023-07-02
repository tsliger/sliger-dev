/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.e45a0d31.mjs';
import { $ as $$Layout } from './404.astro.6cd01ccf.mjs';
import { useState, useRef } from 'react';
import ky from 'ky';
import { useJwt } from 'react-jwt';
import { useStore } from '@nanostores/react';
import { j as jwtToken, a as LoadingCircle } from './dashboard.astro.f55b6498.mjs';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
import 'framer-motion';
import 'react-icons/ri/index.js';
import 'react-icons/rx/index.js';
import 'react-blurhash';
import 'react-intersection-observer';
import 'react-icons/ai/index.js';
import '@nanostores/persistent';

const loginFormSchema = object({
  identifier: string().email("Not a valid email").required("Email required"),
  password: string().required("Password required"),
  captcha: string().min(1).required("Captcha not complete")
});
function LoginComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const $jwtToken = useStore(jwtToken);
  const {
    isExpired
  } = useJwt($jwtToken);
  const captchaRef = useRef(null);
  const onLoad = () => {
    captchaRef.current.execute();
  };
  if ($jwtToken && !isExpired) {
    setTimeout(() => {
      return window.location.href = "/dashboard";
    }, 100);
  }
  const url = "https://sliger-backend-production.up.railway.app";
  const LoginUser = async (values) => {
    setLoading(true);
    try {
      const data = await ky.post(`${url}/api/logins`, {
        json: {
          "data": {
            ...values
          }
        }
      }).json();
      const token = data.data.attributes.access_token;
      jwtToken.set(token);
      setTimeout(() => {
        setLoading(false);
      }, 1e3);
    } catch (error2) {
      if (error2.name === "HTTPError") {
        await error2.response.json();
        setError("Could not validate credentials");
        setTimeout(() => {
          setLoading(false);
        }, 1e3);
      }
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "bg-gradient-to-bl grid place-items-center shadow-xl hover:shadow-lg duration-300 transition from-[#FFFFFF]/20 from-10%  to-black/20 rounded-lg w-96 py-8 relative",
    children: /* @__PURE__ */ jsx(Formik, {
      initialValues: {
        identifier: "",
        password: "",
        captcha: ""
      },
      validationSchema: loginFormSchema,
      onSubmit: (values, {
        setSubmitting,
        resetForm
      }) => {
        setTimeout(() => {
          LoginUser(values);
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
        className: "space-y-8 flex items-center flex-col",
        children: [/* @__PURE__ */ jsx("img", {
          draggable: false,
          className: "select-none invert w-32 absolute top-8",
          src: "/sliger-warped-logo.svg",
          alt: ""
        }), /* @__PURE__ */ jsx("span", {
          className: "text-red-500 text-sm h-2 translate-y-8",
          children: error
        }), /* @__PURE__ */ jsx("div", {
          className: "h-1"
        }), /* @__PURE__ */ jsx("input", {
          type: "email",
          onChange: handleChange,
          onBlur: handleBlur,
          className: "input-field",
          name: "identifier",
          placeholder: "Email"
        }), /* @__PURE__ */ jsx("input", {
          onChange: handleChange,
          onBlur: handleBlur,
          className: "input-field",
          name: "password",
          placeholder: "Password",
          type: "password"
        }), touched.password && /* @__PURE__ */ jsx(HCaptcha, {
          sitekey: "3ad9d04e-58ae-4645-a4f3-d223aa0a746c",
          onLoad,
          onVerify: (token, ekey) => setFieldValue("captcha", token),
          theme: "dark",
          ref: captchaRef,
          size: "compact"
        }), /* @__PURE__ */ jsxs("button", {
          onClick: LoginUser,
          className: "text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center",
          children: [loading && /* @__PURE__ */ jsx(LoadingCircle, {}), !loading && /* @__PURE__ */ jsx("p", {
            children: "Log in"
          })]
        })]
      })
    })
  });
}
__astro_tag_component__(LoginComponent, "@astrojs/react");

const $$Astro = createAstro("https://sliger.dev");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login | sliger.dev" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="min-h-screen flex justify-center  items-center ">
        ${renderComponent($$result2, "LoginComponent", LoginComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/auth/LoginComponent", "client:component-export": "default" })}
    </div>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/login.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
