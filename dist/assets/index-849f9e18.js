import{importShared as d}from"./__federation_fn_import.js";import $,{C as g,I as E,R as O}from"./__federation_expose_App-916cbfd5.js";import{k as f}from"./display-a475b516.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();const X=t=>{const{touchstartX:e,touchendX:o,touchstartY:n,touchendY:s}=t,c=.5,u=16;t.offsetX=o-e,t.offsetY=s-n,Math.abs(t.offsetY)<c*Math.abs(t.offsetX)&&(t.left&&o<e-u&&t.left(t),t.right&&o>e+u&&t.right(t)),Math.abs(t.offsetX)<c*Math.abs(t.offsetY)&&(t.up&&s<n-u&&t.up(t),t.down&&s>n+u&&t.down(t))};function Y(t,e){const o=t.changedTouches[0];e.touchstartX=o.clientX,e.touchstartY=o.clientY,e.start?.({originalEvent:t,...e})}function L(t,e){const o=t.changedTouches[0];e.touchendX=o.clientX,e.touchendY=o.clientY,e.end?.({originalEvent:t,...e}),X(e)}function S(t,e){const o=t.changedTouches[0];e.touchmoveX=o.clientX,e.touchmoveY=o.clientY,e.move?.({originalEvent:t,...e})}function z(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:o=>Y(o,e),touchend:o=>L(o,e),touchmove:o=>S(o,e)}}function R(t,e){const o=e.value,n=o?.parent?t.parentElement:t,s=o?.options??{passive:!0},c=e.instance?.$.uid;if(!n||!c)return;const u=z(e.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[c]=u,f(u).forEach(i=>{n.addEventListener(i,u[i],s)})}function j(t,e){const o=e.value?.parent?t.parentElement:t,n=e.instance?.$.uid;if(!o?._touchHandlers||!n)return;const s=o._touchHandlers[n];f(s).forEach(c=>{o.removeEventListener(c,s[c])}),delete o._touchHandlers[n]}const M={mounted:R,unmounted:j};function H(t,e){const o=e.modifiers||{},n=e.value,{once:s,immediate:c,...u}=o,i=!Object.keys(u).length,{handler:a,options:v}=typeof n=="object"?n:{handler:n,options:{attributes:u?.attr??i,characterData:u?.char??i,childList:u?.child??i,subtree:u?.sub??i}},r=new MutationObserver(function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],y=arguments.length>1?arguments[1]:void 0;a?.(_,y),s&&l(t,e)});c&&a?.([],r),t._mutate=Object(t._mutate),t._mutate[e.instance.$.uid]={observer:r},r.observe(t,v)}function l(t,e){t._mutate?.[e.instance.$.uid]&&(t._mutate[e.instance.$.uid].observer.disconnect(),delete t._mutate[e.instance.$.uid])}const P={mounted:H,unmounted:l};function T(t,e){const o=e.value,n={passive:!e.modifiers?.active};window.addEventListener("resize",o,n),t._onResize=Object(t._onResize),t._onResize[e.instance.$.uid]={handler:o,options:n},e.modifiers?.quiet||o()}function b(t,e){if(!t._onResize?.[e.instance.$.uid])return;const{handler:o,options:n}=t._onResize[e.instance.$.uid];window.removeEventListener("resize",o,n),delete t._onResize[e.instance.$.uid]}const q={mounted:T,unmounted:b};function h(t,e){const{self:o=!1}=e.modifiers??{},n=e.value,s=typeof n=="object"&&n.options||{passive:!0},c=typeof n=="function"||"handleEvent"in n?n:n.handler,u=o?t:e.arg?document.querySelector(e.arg):window;u&&(u.addEventListener("scroll",c,s),t._onScroll=Object(t._onScroll),t._onScroll[e.instance.$.uid]={handler:c,options:s,target:o?void 0:u})}function m(t,e){if(!t._onScroll?.[e.instance.$.uid])return;const{handler:o,options:n,target:s=t}=t._onScroll[e.instance.$.uid];s.removeEventListener("scroll",o,n),delete t._onScroll[e.instance.$.uid]}function A(t,e){e.value!==e.oldValue&&(m(t,e),h(t,e))}const I={mounted:h,unmounted:m,updated:A},V=Object.freeze(Object.defineProperty({__proto__:null,ClickOutside:g,Intersect:E,Mutate:P,Resize:q,Ripple:O,Scroll:I,Touch:M},Symbol.toStringTag,{value:"Module"})),{createApp:C}=await d("vue"),{createVuetify:D}=await d("vuetify"),K=D({directives:V});C($).use(K).mount("#app");