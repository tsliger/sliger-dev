/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.e45a0d31.mjs';
import { $ as $$Layout } from './404.astro.6cd01ccf.mjs';
import { useState, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { persistentAtom } from '@nanostores/persistent';
import ky from 'ky';
import { useStore } from '@nanostores/react';

function LoadingCircle() {
  return /* @__PURE__ */ jsxs("svg", {
    "aria-hidden": "true",
    className: "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
      fill: "#FFFFFF0F"
    }), /* @__PURE__ */ jsx("path", {
      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
      fill: "#FFE6C7"
    })]
  });
}
function Loading() {
  return /* @__PURE__ */ jsx("div", {
    className: "absolute top-0 left-0 w-full h-[500px] grid place-items-center",
    children: /* @__PURE__ */ jsx(LoadingCircle, {})
  });
}
__astro_tag_component__(LoadingCircle, "@astrojs/react");
__astro_tag_component__(Loading, "@astrojs/react");

const jwtToken = persistentAtom(undefined);

function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const LogoutUser = () => {
    setLoading(true);
    jwtToken.set(void 0);
    setInterval(() => {
      setLoading(false);
      window.location.href = "/login";
    }, 200);
  };
  return /* @__PURE__ */ jsxs("button", {
    onClick: LogoutUser,
    className: "text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center",
    children: [loading && /* @__PURE__ */ jsx(LoadingCircle, {}), !loading && /* @__PURE__ */ jsx("p", {
      children: "Log out"
    })]
  });
}
__astro_tag_component__(LogoutButton, "@astrojs/react");

function UserInformation() {
  const $token = useStore(jwtToken);
  const [data, setData] = useState(void 0);
  const fetchData = async () => {
    console.log($token);
    const url = "https://sliger-backend-production.up.railway.app";
    const data2 = await ky.get(`${url}/api/users/me`, {
      headers: {
        "Authorization": `Bearer ${$token}`
      }
    }).json();
    setData(data2);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (data) {
    return /* @__PURE__ */ jsxs("div", {
      className: "py-8 text-white",
      children: [/* @__PURE__ */ jsx("p", {
        children: data.username
      }), /* @__PURE__ */ jsx("p", {
        children: data.email
      })]
    });
  }
}
__astro_tag_component__(UserInformation, "@astrojs/react");

const $$Astro = createAstro("https://sliger.dev");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard | sliger.dev" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="w-[1200px] mx-auto min-h-screen pt-20">
        ${renderComponent($$result2, "AuthWrapper", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/auth/AuthWrapper", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`
            ${renderComponent($$result3, "UserInformation", UserInformation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/dashboard/UserInformation", "client:component-export": "default" })}
            ${renderComponent($$result3, "LogoutButton", LogoutButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/buttons/LogoutButton", "client:component-export": "default" })}
        ` })}
    </div>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/dashboard.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Loading as L, LoadingCircle as a, dashboard as d, jwtToken as j };
