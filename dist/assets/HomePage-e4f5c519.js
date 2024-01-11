import{importShared as m}from"./__federation_fn_import.js";import{_ as p}from"./preload-helper-cf010ec4.js";import{_ as h}from"./__federation_expose_App-bd1c78c1.js";import{V as g,a as w,b as V}from"./index-668013ce.js";const b={chatwidget:{url:"http://localhost:8084/dist/assets/remoteEntry.js",format:"esm",from:"vite"}},x=async(t,e)=>{const n=typeof t=="function"?await t():t,a=document.createElement("script");a.type="text/javascript",a.onload=e,a.src=n,document.getElementsByTagName("head")[0].appendChild(a)};function i(t,e){return y(t).then(n=>()=>e==="webpack"&&Object.prototype.toString.call(n).indexOf("Module")>-1&&n.default?n.default:n)}const _=t=>({vue:{undefined:{get:()=>i(new URL("__federation_shared_vue-eab7105b.js",import.meta.url).href,t),loaded:1}},axios:{undefined:{get:()=>i(new URL("__federation_shared_axios-dbb8467a.js",import.meta.url).href,t),loaded:1}},"material-design-icons-iconfont/dist/material-design-icons.css":{undefined:{get:()=>i(new URL("__federation_shared_material-design-icons-iconfont/dist/material-design-icons.css-e8e32fb1.js",import.meta.url).href,t),loaded:1}},"socket.io-client":{undefined:{get:()=>i(new URL("__federation_shared_socket.io-client-1ae494f4.js",import.meta.url).href,t),loaded:1}},"vue-webrtc-v1":{undefined:{get:()=>i(new URL("__federation_shared_vue-webrtc-v1-9cc974eb.js",import.meta.url).href,t),loaded:1}},vuetify:{undefined:{get:()=>i(new URL("__federation_shared_vuetify-81bf4c51.js",import.meta.url).href,t),loaded:1}},"@mdi/font/css/materialdesignicons.css":{undefined:{get:()=>i(new URL("__federation_shared_@mdi/font/css/materialdesignicons.css-d72bf947.js",import.meta.url).href,t),loaded:1}}});async function y(t){return p(()=>import(t),[])}async function E(t){const e=b[t];if(e.inited)return e.lib;if(e.format==="var")return new Promise(n=>{const a=()=>{e.inited||(e.lib=window[t],e.lib.init(_(e.from)),e.inited=!0),n(e.lib)};return x(e.url,a)});if(["esm","systemjs"].includes(e.format))return new Promise((n,a)=>{(typeof e.url=="function"?e.url:()=>Promise.resolve(e.url))().then(l=>{p(()=>import(l),[]).then(d=>{if(!e.inited){const c=_(e.from);d.init(c),e.lib=d,e.lib.init(c),e.inited=!0}n(e.lib)}).catch(a)})})}function $(t){return t?.__esModule||t?.[Symbol.toStringTag]==="Module"?t.default:t}function C(t,e){return E(t).then(n=>n.get(e).then(a=>a()))}const k={data(){return{}}},{createElementVNode:o,createTextVNode:N,resolveComponent:te,withCtx:j,createVNode:B,createStaticVNode:U,openBlock:R,createElementBlock:L}=await m("vue"),S=U('<div class="nav-logo">Vere-ai</div><a class="mob-nav"><span class="ham-line"></span><span class="ham-line"></span><span class="ham-line"></span></a>',2),P={class:"nav"},T=o("li",null,[o("a",{href:"#"},"About")],-1),A=o("li",null,[o("a",{href:"#"},"Features")],-1),H=o("li",null,[o("a",{href:"#"},"Benefits")],-1),M=o("li",null,[o("a",{href:"#"},"Pricing")],-1);function D(t,e,n,a,s,l){return R(),L("header",null,[S,o("nav",P,[T,A,H,M,o("li",null,[B(g,{block:"",rounded:"xl",class:"text-uppercase"},{default:j(()=>[N("Create a free bot")]),_:1})])])])}const O=h(k,[["render",D]]),W=await C("chatwidget","./App");let I=$(W);const z={data(){return{dialog:!1}},components:{ChatWidget:I,Header:O}},{resolveComponent:u,createVNode:r,withCtx:f,createElementVNode:J,Fragment:q,openBlock:G,createElementBlock:K}=await m("vue"),Q={class:"ma-4"};function X(t,e,n,a,s,l){const d=u("Header"),c=u("ChatWidget");return G(),K(q,null,[r(d),r(w,null,{default:f(()=>[r(c,{widgetId:"c415d07f-ca1b-4684-acc0-e79c0f0b6252"}),J("div",Q,[r(g,{icon:"mdi-plus",size:"large",color:"primary",elevation:"8"},{default:f(()=>[r(V,{modelValue:s.dialog,"onUpdate:modelValue":e[0]||(e[0]=v=>s.dialog=v),activator:"parent",width:"auto"},null,8,["modelValue"])]),_:1})])]),_:1})],64)}const ne=h(z,[["render",X]]);export{ne as default};
