import{r as d}from"./index.94c7be44.js";import{B as x}from"./Box.1e56e608.js";import{B as D,o as k,A as O,_ as M,a as p,c as P,b as v,M as q}from"./inheritsLoose.73aa5944.js";import{k as E}from"./index.cf5ec451.js";import{j as t}from"./jsx-runtime.2cd341a3.js";import{u as U,a as V,P as f}from"./Parallax.3d6024fa.js";import{M as B,i as y,a as z,f as b,b as T,u as W,m as $}from"./motion.5c9a3bdc.js";import{u as H}from"./react-intersection-observer.modern.0834a4db.js";import{F as K}from"./formik.esm.458d0a3d.js";import"./index.f6dc44d1.js";function X(n,r={}){const{isStatic:s}=d.useContext(B),a=d.useRef(null),e=U(y(n)?n.get():n),i=()=>{a.current&&a.current.stop()};return d.useInsertionEffect(()=>e.attach((o,c)=>{if(s)return c(o);if(i(),a.current=z({keyframes:[e.get(),o],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:c}),!b.isProcessing){const l=performance.now()-b.timestamp;l<30&&(a.current.time=T(l))}return e.get()},i),[JSON.stringify(r)]),W(()=>{if(y(n))return n.on("change",o=>e.set(parseFloat(o)))},[e]),e}function Y(){const{scrollYProgress:n}=V(),r=X(n,{stiffness:100,damping:30,restDelta:.001});return t.jsx($.div,{className:"top-0 left-0 bg-[#FF6000] z-[200] fixed h-1 w-full origin-left",style:{scaleX:r}})}function G({data:n}){return t.jsxs("div",{className:"w-[400px] select-none relative",children:[t.jsx("p",{className:"text-gray-200 font-mono tracking-widest text-lg mb-1 font-semibold",children:n.attributes.category}),t.jsxs("div",{className:"w-52 h-96",children:[t.jsx("div",{className:"w-1/2 h-12 border-t-[2px] border-r-[2px] border-gray-200"}),t.jsx("ul",{className:"absolute space-y-3 flex flex-col justify-center left-[25%]",children:n.attributes.skills&&n.attributes.skills.data.map((r,s)=>t.jsxs("li",{className:"flex items-center -translate-x-1",children:[t.jsx(D,{className:"text-gray-200",size:15})," ",t.jsx("span",{className:"ml-3 text-[#DD5909] bg-black/30 px-4 py-3  rounded-xl shadow-lg select-text shadow-black/20",children:r.attributes.text})]},s))})]})]})}function J(){const[n,r]=d.useState(null),s=async()=>{const a=await E.get("http://localhost:1337/api/Skill-categories?populate=*").json();a&&r(a.data)};return d.useEffect(()=>{s()},[]),t.jsx("div",{className:"flex flex-col xl:flex-row space-y-4 xl:space-x-8",children:n&&n.map((a,e)=>d.createElement(G,{data:a,key:e}))})}function w({type:n=void 0}){const[r,s]=d.useState(!1);return t.jsx(k,{tiltMaxAngleX:5,tiltMaxAngleY:5,children:t.jsxs("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),className:"w-[440px] h-[250px] experience-card cursor-pointer",children:[n==="work"&&t.jsx(Q,{isActive:r}),n==="school"&&t.jsx(Z,{isActive:r})]})})}const Q=({isActive:n})=>t.jsxs("div",{className:"w-full h-full flex flex-col px-6 space-y-2",children:[t.jsx("h1",{className:"font-bold text-lg tracking-wider text-white/70 py-2",children:"Work Experience"}),t.jsxs("div",{className:"flex items-center ",children:[t.jsx("div",{className:`${n?"opacity-80":"opacity-50"} transition-all duration-300 ease-in-out rounded-lg overflow-hidden border-[3px] p-2 bg-white shadow-md border-black/10`,children:t.jsx("img",{className:"h-10 w-10",src:"/work-logo.jpg"})}),t.jsxs("div",{className:"pl-4",children:[t.jsx("h1",{className:"text-lg font-bold text-white/70 font-mono",children:"Anchor Systems"}),t.jsx("p",{className:"text-white/70 font-mono text-sm italic",children:"Software Engineer"}),t.jsx("p",{className:"text-white/40 font-mono text-xs italic self-end",children:"Feb 2022 - Mar 2023 (1 yr)"})]})]})]}),Z=({isActive:n})=>t.jsxs("div",{className:"w-full h-full flex flex-col px-6 space-y-2",children:[t.jsx("h1",{className:"font-bold text-lg tracking-wider text-white/70 py-2",children:"Education"}),t.jsxs("div",{className:"flex items-center flex-row",children:[t.jsx("div",{className:`${n?"opacity-80":"opacity-50"} bg-white transition-all duration-300 ease-in-out rounded-lg overflow-hidden border-[3px] p-2 shadow-md border-black/10`,children:t.jsx("img",{className:"h-10 w-10",src:"/education-logo.jpg"})}),t.jsxs("div",{className:"pl-4",children:[t.jsx("h1",{className:"text-lg font-bold text-white/70 font-mono",children:"Lake Superior State Unviersity"}),t.jsx("p",{className:"text-white/70 font-mono text-sm italic",children:"BS, Computer Science"}),t.jsx("p",{className:"text-white/40 font-mono text-xs italic self-end",children:"Aug 2018 - May 2022 (4 yrs)"})]})]})]});function ee({data:n}){const[r,s]=d.useState(!1),a=d.useRef(void 0),{ref:e,inView:i}=H({});return d.useEffect(()=>{if(window.innerWidth<=800&&s(!!i),i){const o=a.current,c=o.getAttribute("load-src");o.src=c}},[i]),t.jsxs("div",{ref:e,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),className:"w-[340px] h-[400px] experience-card text-white flex flex-col overflow-hidden",children:[t.jsx("h1",{className:"text-2xl font-mono font-semibold  px-4 py-3 z-40 ",children:n.attributes.title}),t.jsxs("div",{className:"h-42 relative space-y-2 overflow-hidden",children:[t.jsx("div",{className:"bg-filter",children:t.jsx("img",{ref:a,"load-src":"http://localhost:1337"+n.attributes.banner_image.data.attributes.url,className:`${r?"opacity-20 scale-100":"scale-105 opacity-10 grayscale"} transition duration-[1200ms] origin-center ease-in-out object-fit `})}),t.jsx("div",{className:"w-full absolute bottom-0 left-0 h-8 bg-gradient-to-t from-black/30"})]}),t.jsx("div",{className:"w-full h-24 py-4 px-4 ",children:t.jsx("p",{children:n.attributes.description})}),t.jsx("div",{className:"flex-grow"}),t.jsx("a",{className:"button-style duration-[600ms] self-end hover:scale-105 w-24 mb-4 mx-4",target:"_blank",rel:"noopener noreferrer",href:n.attributes.github_link,children:t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(O,{}),t.jsx("p",{children:"Github"})]})})]})}function te(n){return Object.entries(n).filter(function(r){r[0];var s=r[1];return s||s===!1}).map(function(r){var s=r[0],a=r[1];return encodeURIComponent(s)+"="+encodeURIComponent(a)}).join("&")}function j(n){var r=n&&n.ownerDocument||document,s=r.defaultView||r.parentWindow||window;return{document:r,window:s}}function g(n){return n||document.head}var N="hcaptcha-api-script-id",C="hcaptchaOnLoad",R=[],ae=function(r){r===void 0&&(r={});var s=g(r.scriptLocation);delete r.scriptLocation;var a=j(s),e=R.find(function(o){var c=o.scope;return c===a.window});if(a.document.getElementById(N)&&e)return e.promise;var i=new Promise(function(o,c){a.window[C]=o;var l=r.apihost||"https://js.hcaptcha.com";delete r.apihost;var h=a.document.createElement("script");h.id=N,h.src=l+"/1/api.js?render=explicit&onload="+C,h.async=r.loadAsync!==void 0?r.loadAsync:!0,delete r.loadAsync,h.onerror=function(u){return c("script-error")};var m=te(r);h.src+=m!==""?"&"+m:"",s.appendChild(h)});return R.push({promise:i,scope:a.window}),i},se=function(n){M(r,n);function r(a){var e;return e=n.call(this,a)||this,e._hcaptcha=void 0,e.renderCaptcha=e.renderCaptcha.bind(p(e)),e.resetCaptcha=e.resetCaptcha.bind(p(e)),e.removeCaptcha=e.removeCaptcha.bind(p(e)),e.isReady=e.isReady.bind(p(e)),e.loadCaptcha=e.loadCaptcha.bind(p(e)),e.handleOnLoad=e.handleOnLoad.bind(p(e)),e.handleSubmit=e.handleSubmit.bind(p(e)),e.handleExpire=e.handleExpire.bind(p(e)),e.handleError=e.handleError.bind(p(e)),e.handleOpen=e.handleOpen.bind(p(e)),e.handleClose=e.handleClose.bind(p(e)),e.handleChallengeExpired=e.handleChallengeExpired.bind(p(e)),e.ref=d.createRef(),e.apiScriptRequested=!1,e.state={isApiReady:!1,isRemoved:!1,elementId:a.id,captchaId:""},e}var s=r.prototype;return s.componentDidMount=function(){var e=this,i=g(this.props.scriptLocation),o=j(i);this._hcaptcha=o.window.hcaptcha||void 0;var c=typeof this._hcaptcha<"u";if(c){this.setState({isApiReady:!0},function(){e.renderCaptcha()});return}this.loadCaptcha()},s.componentWillUnmount=function(){var e=this.state.captchaId,i=this._hcaptcha;this.isReady()&&(i.reset(e),i.remove(e))},s.shouldComponentUpdate=function(e,i){return!(this.state.isApiReady!==i.isApiReady||this.state.isRemoved!==i.isRemoved)},s.componentDidUpdate=function(e){var i=this,o=["sitekey","size","theme","tabindex","languageOverride","endpoint"],c=o.every(function(l){return e[l]===i.props[l]});c||this.removeCaptcha(function(){i.renderCaptcha()})},s.loadCaptcha=function(){if(!this.apiScriptRequested){var e=this.props,i=e.apihost,o=e.assethost,c=e.endpoint,l=e.host,h=e.imghost,m=e.languageOverride,u=e.reCaptchaCompat,S=e.reportapi,A=e.sentry,I=e.custom,_=e.loadAsync,F=e.scriptLocation,L={apihost:i,assethost:o,endpoint:c,hl:m,host:l,imghost:h,recaptchacompat:u===!1?"off":null,reportapi:S,sentry:A,custom:I,loadAsync:_,scriptLocation:F};ae(L).then(this.handleOnLoad).catch(this.handleError),this.apiScriptRequested=!0}},s.renderCaptcha=function(e){var i=this.state.isApiReady;if(i){var o=Object.assign({"open-callback":this.handleOpen,"close-callback":this.handleClose,"error-callback":this.handleError,"chalexpired-callback":this.handleChallengeExpired,"expired-callback":this.handleExpire,callback:this.handleSubmit},this.props,{hl:this.props.hl||this.props.languageOverride,languageOverride:void 0}),c=this._hcaptcha,l=c.render(this.ref.current,o);this.setState({isRemoved:!1,captchaId:l},function(){e&&e()})}},s.resetCaptcha=function(){var e=this.state.captchaId,i=this._hcaptcha;this.isReady()&&i.reset(e)},s.removeCaptcha=function(e){var i=this.state.captchaId,o=this._hcaptcha;this.isReady()&&this.setState({isRemoved:!0},function(){o.remove(i),e&&e()})},s.handleOnLoad=function(){var e=this;this.setState({isApiReady:!0},function(){var i=g(e.props.scriptLocation),o=j(i);e._hcaptcha=o.window.hcaptcha,e.renderCaptcha(function(){var c=e.props.onLoad;c&&c()})})},s.handleSubmit=function(e){var i=this.props.onVerify,o=this.state,c=o.isRemoved,l=o.captchaId,h=this._hcaptcha;if(!(typeof h>"u"||c)){var m=h.getResponse(l),u=h.getRespKey(l);i&&i(m,u)}},s.handleExpire=function(){var e=this.props.onExpire,i=this.state.captchaId,o=this._hcaptcha;this.isReady()&&(o.reset(i),e&&e())},s.handleError=function(e){var i=this.props.onError,o=this.state.captchaId,c=this._hcaptcha;this.isReady()&&c.reset(o),i&&i(e)},s.isReady=function(){var e=this.state,i=e.isApiReady,o=e.isRemoved;return i&&!o},s.handleOpen=function(){!this.isReady()||!this.props.onOpen||this.props.onOpen()},s.handleClose=function(){!this.isReady()||!this.props.onClose||this.props.onClose()},s.handleChallengeExpired=function(){!this.isReady()||!this.props.onChalExpired||this.props.onChalExpired()},s.execute=function(e){e===void 0&&(e=null);var i=this.state.captchaId,o=this._hcaptcha;if(this.isReady())return e&&typeof e!="object"&&(e=null),o.execute(i,e)},s.setData=function(e){var i=this.state.captchaId,o=this._hcaptcha;this.isReady()&&(e&&typeof e!="object"&&(e=null),o.setData(i,e))},s.getResponse=function(){var e=this._hcaptcha;return e.getResponse(this.state.captchaId)},s.getRespKey=function(){var e=this._hcaptcha;return e.getRespKey(this.state.captchaId)},s.render=function(){var e=this.state.elementId;return d.createElement("div",{ref:this.ref,id:e})},r}(d.Component);const ie=P({firstName:v().min(2,"First name too short").max(50,"First name too long").required("First name required"),lastName:v().min(2,"Last name too short").max(50,"Last name too long").required("Last name required"),email:v().email("Not a valid email").required("Email required"),description:v().min(20,"Description too short").max(500,"Description too long").required("Description required")});function ne(){const n=d.useRef(null),r=()=>{n.current.execute()};return t.jsx(K,{initialValues:{firstName:"",lastName:"",email:"",description:""},validationSchema:ie,onSubmit:(s,{setSubmitting:a})=>{setTimeout(()=>{alert(JSON.stringify(s,null,2)),a(!1)},400)},children:({values:s,errors:a,touched:e,handleChange:i,handleBlur:o,handleSubmit:c,isSubmitting:l,isValid:h,initialStatus:m})=>t.jsxs("form",{onSubmit:c,className:"w-96 lg:w-[600px] space-y-6 -translate-y-6",children:[t.jsx("p",{className:"h-12 flex items-end text-red-500 w-full",children:a&&a.firstName||a.lastName||a.email||a.description}),t.jsxs("div",{className:"w-full flex space-x-4",children:[t.jsx("input",{onChange:i,onBlur:o,className:"input-field w-full",name:"firstName",id:"firstName",placeholder:"First Name",value:s.firstName}),t.jsx("input",{onChange:i,onBlur:o,className:"input-field w-full",name:"lastName",id:"lastName",placeholder:"Last Name",value:s.lastName})]}),t.jsx("input",{onChange:i,onBlur:o,className:"input-field w-full",name:"email",type:"email",id:"email",placeholder:"Email",value:s.email}),t.jsx("textarea",{onChange:i,onBlur:o,className:"input-field w-full py-2 h-48",name:"description",id:"description",value:s.description,placeholder:"Enter text here...."}),t.jsxs("div",{className:"h-24 flex",children:[t.jsx("div",{className:"w-1/2 flex items-end",children:e.description&&h&&t.jsx(se,{sitekey:"asdfsa",onLoad:r,theme:"dark",ref:n})}),t.jsx("div",{className:"w-1/2 flex items-end justify-end",children:t.jsx("button",{type:"submit",disabled:l,className:"button-style w-32 h-12",children:"Submit"})})]})]})})}function xe(){const[n,r]=d.useState(void 0),s=async()=>{const a=await E.get("http://localhost:1337/api/projects?populate=*").json();a&&r(a.data)};return d.useEffect(()=>{s()},[]),t.jsxs(t.Fragment,{children:[t.jsx(Y,{}),t.jsx(x,{children:t.jsxs("div",{className:"min-h-screen relative flex items-center justify-center  overflow-hidden",children:[t.jsx(f,{offset:300,children:t.jsxs("div",{className:"min-h-screen flex flex-col justify-center items-center relative space-y-24 ",children:[t.jsxs("div",{className:"h-32 w-1/3 grid place-items-center",children:[t.jsx("h1",{className:"text-6xl text-white/50 drop-shadow-md font-serif tracking-widest select-none ",children:"Experience"}),t.jsxs("div",{className:"flex font-mono space-x-12 my-10 ",children:[t.jsx("a",{href:"#projects",className:"text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline",children:"Projects"}),t.jsx("a",{href:"#skills",className:"text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline",children:"Skills"}),t.jsx("a",{href:"#contact",className:"text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline",children:"Contact"})]})]}),t.jsxs("div",{className:"flex justify-center items-center space-x-32 w-full",children:[t.jsx(w,{type:"work"}),t.jsx(w,{type:"school"})]})]})}),t.jsx("div",{className:"absolute bottom-0",children:t.jsx(f,{offset:-80,children:t.jsx("a",{href:"#projects",children:t.jsx("button",{className:"text-[#FFE6C7] z-[99] bottom-8 p-2 text-xs font-mono border-2 hover:animate-none   border-black/20 font-bold rounded-full animate-bounce shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center",children:t.jsx(q,{size:25})})})})})]})}),t.jsxs("div",{className:"main-container overflow-hidden",children:[t.jsx("div",{className:"h-12"}),t.jsx("div",{id:"projects"}),t.jsx(x,{children:t.jsx(f,{offset:300,children:t.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center  mx-8 lg:mx-16",children:[t.jsx("p",{className:"self-start lg:translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200 ",children:"Projects"}),t.jsx("p",{className:"self-start lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20",children:"Some things I've worked on"}),t.jsx("div",{className:"flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-16",children:n&&n.map((a,e)=>t.jsx(k,{tiltMaxAngleX:5,tiltMaxAngleY:5,children:t.jsx(ee,{data:a})},e))})]})})}),t.jsx(x,{id:"skills",children:t.jsx(f,{offset:300,children:t.jsxs("div",{className:"min-h-screen flex flex-col justify-center items-center mx-8 lg:mx-16",children:[t.jsx("p",{className:"self-start lg:translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200",children:"Skills"}),t.jsx("p",{className:"self-start lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20",children:"What I've worked with professionally and personally"}),t.jsx("div",{className:"flex space-x-8",children:t.jsx(J,{})})]})})}),t.jsx(x,{id:"contact",children:t.jsx(f,{offset:300,children:t.jsxs("div",{className:"min-h-screen flex flex-col items-center  mx-8 lg:mx-16",children:[t.jsx("p",{className:"self-start lg:translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200",children:"Contact"}),t.jsx("p",{className:"self-start lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20",children:"Feel free to reach out"}),t.jsx(ne,{})]})})})]})]})}export{xe as default};
