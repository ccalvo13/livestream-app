import{importShared as p}from"./__federation_fn_import-cac4f5fc.js";function _(e,t){return n=>Object.keys(e).reduce((r,s)=>{const a=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?r[s]={...a,default:n[s]}:r[s]=a,t&&!r[s].source&&(r[s].source=t),r},{})}const v=typeof window<"u",zn=v&&"IntersectionObserver"in window,tt=v&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),Yn=v&&"EyeDropper"in window;function oe(e,t,n){nt(e,t),t.set(e,n)}function nt(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function rt(e,t,n){var r=Me(e,t,"set");return st(e,r,n),n}function st(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function F(e,t){var n=Me(e,t,"get");return ot(e,n)}function Me(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function ot(e,t){return t.get?t.get.call(e):t.value}const{camelize:Kn,capitalize:at,Comment:it,computed:ct,Fragment:je,isVNode:ut,reactive:lt,toRefs:ft,unref:dt,watchEffect:mt}=await p("vue");function Be(e,t,n){const r=t.length-1;if(r<0)return e===void 0?n:e;for(let s=0;s<r;s++){if(e==null)return n;e=e[t[s]]}return e==null||e[t[r]]===void 0?n:e[t[r]]}function gt(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>gt(e[r],t[r]))}function q(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),Be(e,t.split("."),n))}function Xn(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const s=t(e,n);return typeof s>"u"?n:s}if(typeof t=="string")return q(e,t,n);if(Array.isArray(t))return Be(e,t,n);if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}function ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,r)=>t+r)}function Zn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function ae(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ie(e){if(e&&"$el"in e){const t=e.$el;return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const qn=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Jn=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Qn(e){return Object.keys(e)}function z(e,t){return t.every(n=>e.hasOwnProperty(n))}function pt(e,t){const n={},r=new Set(Object.keys(e));for(const s of t)r.has(s)&&(n[s]=e[s]);return n}function ce(e,t,n){const r=Object.create(null),s=Object.create(null);for(const o in e)t.some(a=>a instanceof RegExp?a.test(o):a===o)&&!n?.some(a=>a===o)?r[o]=e[o]:s[o]=e[o];return[r,s]}function vt(e,t){const n={...e};return t.forEach(r=>delete n[r]),n}function er(e,t){const n={};return t.forEach(r=>n[r]=e[r]),n}const Ve=/^on[^a-z]/,tr=e=>Ve.test(e),yt=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],bt=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function nr(e){return e.isComposing&&bt.includes(e.key)}function rr(e){const[t,n]=ce(e,[Ve]),r=vt(t,yt),[s,o]=ce(n,["class","style","id",/^data-/]);return Object.assign(s,t),Object.assign(o,r),[s,o]}function sr(e){return e==null?[]:Array.isArray(e)?e:[e]}function or(e,t){let n=0;const r=function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];clearTimeout(n),n=setTimeout(()=>e(...o),dt(t))};return r.clear=()=>{clearTimeout(n)},r.immediate=e,r}function wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function ar(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function ue(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function ir(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<e.length;)n.push(e.substr(r,t)),r+=t;return n}function cr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;for(;Math.abs(e)>=t&&r<n.length-1;)e/=t,++r;return`${e.toFixed(1)} ${n[r]}B`}function y(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in t){const o=e[s],a=t[s];if(ae(o)&&ae(a)){r[s]=y(o,a,n);continue}if(Array.isArray(o)&&Array.isArray(a)&&n){r[s]=n(o,a);continue}r[s]=a}return r}function Ct(e){return e.map(t=>t.type===je?Ct(t.children):t).flat()}function S(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(S.cache.has(e))return S.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return S.cache.set(e,t),t}S.cache=new Map;function Y(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>Y(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>Y(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return Y(e,t.component.subTree).flat(1)}return[]}var D=new WeakMap,P=new WeakMap;class ur{constructor(t){oe(this,D,{writable:!0,value:[]}),oe(this,P,{writable:!0,value:0}),this.size=t}push(t){F(this,D)[F(this,P)]=t,rt(this,P,(F(this,P)+1)%this.size)}values(){return F(this,D).slice(F(this,P)).concat(F(this,D).slice(0,F(this,P)))}}function lr(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function fr(e){const t=lt({}),n=ct(e);return mt(()=>{for(const r in n.value)t[r]=n.value[r]},{flush:"sync"}),ft(t)}function dr(e,t){return e.includes(t)}function mr(e){return e[2].toLowerCase()+e.slice(3)}const gr=()=>[Function,Array];function hr(e,t){return t="on"+at(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function pr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const s of e)s(...n);else typeof e=="function"&&e(...n)}function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function xt(e,t,n){let r,s=e.indexOf(document.activeElement);const o=t==="next"?1:-1;do s+=o,r=e[s];while((!r||r.offsetParent==null||!(n?.(r)??!0))&&s<e.length&&s>=0);return r}function St(e,t){const n=Ft(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&n[0]?.focus();else if(t==="first")n[0]?.focus();else if(t==="last")n.at(-1)?.focus();else if(typeof t=="number")n[t]?.focus();else{const r=xt(n,t);r?r.focus():St(e,t==="next"?"first":"last")}}function vr(e){return e==null||typeof e=="string"&&e.trim()===""}function yr(){}function br(e,t){if(!(v&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function At(e){return e.some(t=>ut(t)?t.type===it?!1:t.type!==je||At(t.children):!0)?e:null}function wr(e,t){if(!v||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}const E=2.4,le=.2126729,fe=.7151522,de=.072175,kt=.55,Pt=.58,Et=.57,Tt=.62,R=.03,me=1.45,Ot=5e-4,Dt=1.25,Rt=1.25,ge=.078,he=12.82051282051282,I=.06,pe=.001;function ve(e,t){const n=(e.r/255)**E,r=(e.g/255)**E,s=(e.b/255)**E,o=(t.r/255)**E,a=(t.g/255)**E,c=(t.b/255)**E;let f=n*le+r*fe+s*de,u=o*le+a*fe+c*de;if(f<=R&&(f+=(R-f)**me),u<=R&&(u+=(R-u)**me),Math.abs(u-f)<Ot)return 0;let l;if(u>f){const i=(u**kt-f**Pt)*Dt;l=i<pe?0:i<ge?i-i*he*I:i-I}else{const i=(u**Tt-f**Et)*Rt;l=i>-pe?0:i>-ge?i-i*he*I:i+I}return l*100}const{warn:te}=await p("vue");function T(e){te(`Vuetify: ${e}`)}function ye(e){te(`Vuetify error: ${e}`)}function $r(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`,te(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`)}const V=.20689655172413793,It=e=>e>V**3?Math.cbrt(e):e/(3*V**2)+4/29,Mt=e=>e>V?e**3:3*V**2*(e-4/29);function Le(e){const t=It,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function Ne(e){const t=Mt,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const jt=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Bt=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Vt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Lt=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function He(e){const t=Array(3),n=Bt,r=jt;for(let s=0;s<3;++s)t[s]=Math.round(wt(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function ne(e){let{r:t,g:n,b:r}=e;const s=[0,0,0],o=Lt,a=Vt;t=o(t/255),n=o(n/255),r=o(r/255);for(let c=0;c<3;++c)s[c]=a[c][0]*t+a[c][1]*n+a[c][2]*r;return s}function Nt(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function Cr(e){return Nt(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const be=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Ht={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>we({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>we({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>A({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>A({h:e,s:t,v:n,a:r})};function w(e){if(typeof e=="number")return(isNaN(e)||e<0||e>16777215)&&T(`'${e}' is not a valid hex color`),{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&be.test(e)){const{groups:t}=e.match(be),{fn:n,values:r}=t,s=r.split(/,\s*/).map(o=>o.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(o)/100:parseFloat(o));return Ht[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map(r=>r+r).join(""):[6,8].includes(t.length)||T(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&T(`'${e}' is not a valid hex(a) color`),We(t)}else if(typeof e=="object"){if(z(e,["r","g","b"]))return e;if(z(e,["h","s","l"]))return A(_e(e));if(z(e,["h","s","v"]))return A(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function A(e){const{h:t,s:n,v:r,a:s}=e,o=c=>{const f=(c+t/60)%6;return r-r*n*Math.max(Math.min(f,4-f,1),0)},a=[o(5),o(3),o(1)].map(c=>Math.round(c*255));return{r:a[0],g:a[1],b:a[2],a:s}}function we(e){return A(_e(e))}function _t(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,r=e.b/255,s=Math.max(t,n,r),o=Math.min(t,n,r);let a=0;s!==o&&(s===t?a=60*(0+(n-r)/(s-o)):s===n?a=60*(2+(r-t)/(s-o)):s===r&&(a=60*(4+(t-n)/(s-o)))),a<0&&(a=a+360);const c=s===0?0:(s-o)/s,f=[a,c,s];return{h:f[0],s:f[1],v:f[2],a:e.a}}function Fr(e){const{h:t,s:n,v:r,a:s}=e,o=r-r*n/2,a=o===1||o===0?0:(r-o)/Math.min(o,1-o);return{h:t,s:a,l:o,a:s}}function _e(e){const{h:t,s:n,l:r,a:s}=e,o=r+n*Math.min(r,1-r),a=o===0?0:2-2*r/o;return{h:t,s:a,v:o,a:s}}function Gt(e){let{r:t,g:n,b:r,a:s}=e;return s===void 0?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${s})`}function xr(e){return Gt(A(e))}function M(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function Ge(e){let{r:t,g:n,b:r,a:s}=e;return`#${[M(t),M(n),M(r),s!==void 0?M(Math.round(s*255)):""].join("")}`}function We(e){e=Wt(e);let[t,n,r,s]=$t(e,2).map(o=>parseInt(o,16));return s=s===void 0?s:s/255,{r:t,g:n,b:r,a:s}}function Sr(e){const t=We(e);return _t(t)}function Ar(e){return Ge(A(e))}function Wt(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=ue(ue(e,6),8,"F")),e}function Ut(e,t){const n=Le(ne(e));return n[0]=n[0]+t*10,He(Ne(n))}function zt(e,t){const n=Le(ne(e));return n[0]=n[0]-t*10,He(Ne(n))}function J(e){const t=w(e);return ne(t)[1]}function kr(e,t){const n=J(e),r=J(t),s=Math.max(n,r),o=Math.min(n,r);return(s+.05)/(o+.05)}function Yt(e){const t=Math.abs(ve(w(0),w(e)));return Math.abs(ve(w(16777215),w(e)))>Math.min(t,50)?"#fff":"#000"}const{defineComponent:Kt}=await p("vue");function G(e){if(e._setup=e._setup??e.setup,!e.name)return T("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=_(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(r){return pt(r,t)},e.props._as=String,e.setup=function(r,s){const o=re();if(!o.value)return e._setup(r,s);const{props:a,provideSubDefaults:c}=Ke(r,r._as??e.name,o),f=e._setup(a,s);return c(),f}}return e}function Xt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?G:Kt)(t)}function Pr(e,t){return t.props=e,t}const{getCurrentInstance:Zt}=await p("vue");function k(e,t){const n=Zt();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function qt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=k(e).type;return S(t?.aliasName||t?.name)}let Ue=0,B=new WeakMap;function Jt(){const e=k("getUid");if(B.has(e))return B.get(e);{const t=Ue++;return B.set(e,t),t}}Jt.reset=()=>{Ue=0,B=new WeakMap};function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const{computed:Q,inject:en,provide:ze,ref:Ye,shallowRef:tn,unref:j,watchEffect:nn}=await p("vue"),L=Symbol.for("vuetify:defaults");function Er(e){return Ye(e)}function re(){const e=en(L);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Tr(e,t){const n=re(),r=Ye(e),s=Q(()=>{if(j(t?.disabled))return n.value;const a=j(t?.scoped),c=j(t?.reset),f=j(t?.root);if(r.value==null&&!(a||c||f))return n.value;let u=y(r.value,{prev:n.value});if(a)return u;if(c||f){const l=Number(c||1/0);for(let i=0;i<=l&&!(!u||!("prev"in u));i++)u=u.prev;return u&&typeof f=="string"&&f in u&&(u=y(y(u,{prev:u}),u[f])),u}return u.prev?y(u.prev,u):u});return ze(L,s),s}function rn(e,t){return typeof e.props?.[t]<"u"||typeof e.props?.[S(t)]<"u"}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:re();const r=k("useDefaults");if(t=t??r.type.name??r.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const s=Q(()=>n.value?.[e._as??t]),o=new Proxy(e,{get(f,u){const l=Reflect.get(f,u);return u==="class"||u==="style"?[s.value?.[u],l].filter(i=>i!=null):typeof u=="string"&&!rn(r.vnode,u)?s.value?.[u]??n.value?.global?.[u]??l:l}}),a=tn();nn(()=>{if(s.value){const f=Object.entries(s.value).filter(u=>{let[l]=u;return l.startsWith(l[0].toUpperCase())});a.value=f.length?Object.fromEntries(f):void 0}else a.value=void 0});function c(){const f=Qt(L,r);ze(L,Q(()=>a.value?y(f?.value??{},a.value):f?.value))}return{props:o,provideSubDefaults:c}}function Or(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const{props:n,provideSubDefaults:r}=Ke(e,t);return r(),n}const{h:sn}=await p("vue"),on={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},an={component:e=>sn(Ze,{...e,class:"mdi"})},{mergeProps:cn,createVNode:b}=await p("vue"),{computed:un,inject:ln,unref:fn}=await p("vue"),dn=[String,Function,Object,Array],mn=Symbol.for("vuetify:icons"),W=_({icon:{type:dn},tag:{type:String,required:!0}},"icon"),$e=Xt()({name:"VComponentIcon",props:W(),setup(e,t){let{slots:n}=t;return()=>{const r=e.icon;return b(e.tag,null,{default:()=>[e.icon?b(r,null,null):n.default?.()]})}}}),Xe=G({name:"VSvgIcon",inheritAttrs:!1,props:W(),setup(e,t){let{attrs:n}=t;return()=>b(e.tag,cn(n,{style:null}),{default:()=>[b("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(r=>Array.isArray(r)?b("path",{d:r[0],"fill-opacity":r[1]},null):b("path",{d:r},null)):b("path",{d:e.icon},null)])]})}}),Dr=G({name:"VLigatureIcon",props:W(),setup(e){return()=>b(e.tag,null,{default:()=>[e.icon]})}}),Ze=G({name:"VClassIcon",props:W(),setup(e){return()=>b(e.tag,{class:e.icon},null)}}),gn={svg:{component:Xe},class:{component:Ze}};function Rr(e){return y({defaultSet:"mdi",sets:{...gn,mdi:an},aliases:{...on,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},e)}const Ir=e=>{const t=ln(mn);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:un(()=>{const r=fn(e);if(!r)return{component:$e};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=t.aliases?.[s.slice(1)])),!s)throw new Error(`Could not find aliased icon "${r}"`);if(Array.isArray(s))return{component:Xe,icon:s};if(typeof s!="string")return{component:$e,icon:s};const o=Object.keys(t.sets).find(f=>typeof s=="string"&&s.startsWith(`${f}:`)),a=o?s.slice(o.length+1):s;return{component:t.sets[o??t.defaultSet].component,icon:a}})}},{computed:$,inject:qe,provide:hn,ref:Ce,watch:Fe,watchEffect:pn}=await p("vue"),ee=Symbol.for("vuetify:theme"),Mr=_({theme:String},"theme");function xe(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function vn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xe();const t=xe();if(!e)return{...t,isDisabled:!0};const n={};for(const[r,s]of Object.entries(e.themes??{})){const o=s.dark||r==="dark"?t.themes?.dark:t.themes?.light;n[r]=y(o,s)}return y(t,{...e,themes:n})}function jr(e){const t=vn(e),n=Ce(t.defaultTheme),r=Ce(t.themes),s=$(()=>{const l={};for(const[i,m]of Object.entries(r.value)){const g=l[i]={...m,colors:{...m.colors}};if(t.variations)for(const d of t.variations.colors){const h=g.colors[d];if(h)for(const C of["lighten","darken"]){const U=C==="lighten"?Ut:zt;for(const O of ht(t.variations[C],1))g.colors[`${d}-${C}-${O}`]=Ge(U(w(h),O))}}for(const d of Object.keys(g.colors)){if(/^on-[a-z]/.test(d)||g.colors[`on-${d}`])continue;const h=`on-${d}`,C=w(g.colors[d]);g.colors[h]=Yt(C)}}return l}),o=$(()=>s.value[n.value]),a=$(()=>{const l=[];o.value.dark&&x(l,":root",["color-scheme: dark"]),x(l,":root",Se(o.value));for(const[d,h]of Object.entries(s.value))x(l,`.v-theme--${d}`,[`color-scheme: ${h.dark?"dark":"normal"}`,...Se(h)]);const i=[],m=[],g=new Set(Object.values(s.value).flatMap(d=>Object.keys(d.colors)));for(const d of g)/^on-[a-z]/.test(d)?x(m,`.${d}`,[`color: rgb(var(--v-theme-${d})) !important`]):(x(i,`.bg-${d}`,[`--v-theme-overlay-multiplier: var(--v-theme-${d}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${d})) !important`,`color: rgb(var(--v-theme-on-${d})) !important`]),x(m,`.text-${d}`,[`color: rgb(var(--v-theme-${d})) !important`]),x(m,`.border-${d}`,[`--v-border-color: var(--v-theme-${d})`]));return l.push(...i,...m),l.map((d,h)=>h===0?d:`    ${d}`).join("")});function c(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function f(l){if(t.isDisabled)return;const i=l._context.provides.usehead;if(i)if(i.push){const m=i.push(c);v&&Fe(a,()=>{m.patch(c)})}else v?(i.addHeadObjs($(c)),pn(()=>i.updateDOM())):i.addHeadObjs(c());else{let g=function(){if(typeof document<"u"&&!m){const d=document.createElement("style");d.type="text/css",d.id="vuetify-theme-stylesheet",t.cspNonce&&d.setAttribute("nonce",t.cspNonce),m=d,document.head.appendChild(m)}m&&(m.innerHTML=a.value)},m=v?document.getElementById("vuetify-theme-stylesheet"):null;v?Fe(a,g,{immediate:!0}):g()}}const u=$(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:f,isDisabled:t.isDisabled,name:n,themes:r,current:o,computedThemes:s,themeClasses:u,styles:a,globalThis:{name:n,current:o}}}function Br(e){k("provideTheme");const t=qe(ee,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=$(()=>e.theme??t.name.value),r=$(()=>t.themes.value[n.value]),s=$(()=>t.isDisabled?void 0:`v-theme--${n.value}`),o={...t,name:n,current:r,themeClasses:s};return hn(ee,o),o}function Vr(){k("useTheme");const e=qe(ee,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function x(e,t,n){e.push(`${t} {
`,...n.map(r=>`  ${r};
`),`}
`)}function Se(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[s,o]of Object.entries(e.colors)){const a=w(o);r.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${J(o)>.18?t:n}`)}for(const[s,o]of Object.entries(e.variables)){const a=typeof o=="string"&&o.startsWith("#")?w(o):void 0,c=a?`${a.r}, ${a.g}, ${a.b}`:void 0;r.push(`--v-${s}: ${c??o}`)}return r}const yn={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},bn={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},{effectScope:wn,onScopeDispose:$n,watch:Cn}=await p("vue");function Fn(e,t){let n;function r(){n=wn(),n.run(()=>t.length?t(()=>{n?.stop(),r()}):t())}Cn(e,s=>{s&&!n?r():s||(n?.stop(),n=void 0)},{immediate:!0}),$n(()=>{n?.stop()})}const{computed:K,ref:xn,toRaw:Sn,watch:An}=await p("vue");function kn(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i=>i,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:i=>i;const o=k("useProxiedModel"),a=xn(e[t]!==void 0?e[t]:n),c=S(t),u=K(c!==t?()=>(e[t],!!((o.vnode.props?.hasOwnProperty(t)||o.vnode.props?.hasOwnProperty(c))&&(o.vnode.props?.hasOwnProperty(`onUpdate:${t}`)||o.vnode.props?.hasOwnProperty(`onUpdate:${c}`)))):()=>(e[t],!!(o.vnode.props?.hasOwnProperty(t)&&o.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));Fn(()=>!u.value,()=>{An(()=>e[t],i=>{a.value=i})});const l=K({get(){const i=e[t];return r(u.value?i:a.value)},set(i){const m=s(i),g=Sn(u.value?e[t]:a.value);g===m||r(g)===i||(a.value=m,o?.emit(`update:${t}`,m))}});return Object.defineProperty(l,"externalValue",{get:()=>u.value?e[t]:a.value}),l}const{ref:Pn,shallowRef:Ae,watch:En}=await p("vue"),ke="$vuetify.",Pe=(e,t)=>e.replace(/\{(\d+)\}/g,(n,r)=>String(t[+r])),Je=(e,t,n)=>function(r){for(var s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];if(!r.startsWith(ke))return Pe(r,o);const c=r.replace(ke,""),f=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let l=q(f,c,null);return l||(T(`Translation key "${r}" not found in "${e.value}", trying fallback locale`),l=q(u,c,null)),l||(ye(`Translation key "${r}" not found in fallback`),l=r),typeof l!="string"&&(ye(`Translation key "${r}" has a non-string value`),l=r),Pe(l,o)};function Qe(e,t){return(n,r)=>new Intl.NumberFormat([e.value,t.value],r).format(n)}function X(e,t,n){const r=kn(e,t,e[t]??n.value);return r.value=e[t]??n.value,En(n,s=>{e[t]==null&&(r.value=n.value)}),r}function et(e){return t=>{const n=X(t,"locale",e.current),r=X(t,"fallback",e.fallback),s=X(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:Je(n,r,s),n:Qe(n,r),provide:et({current:n,fallback:r,messages:s})}}}function Tn(e){const t=Ae(e?.locale??"en"),n=Ae(e?.fallback??"en"),r=Pn({en:yn,...e?.messages});return{name:"vuetify",current:t,fallback:n,messages:r,t:Je(t,n,r),n:Qe(t,n),provide:et({current:t,fallback:n,messages:r})}}const{computed:N,inject:se,provide:On,ref:Dn}=await p("vue"),H=Symbol.for("vuetify:locale");function Rn(e){return e.name!=null}function Lr(e){const t=e?.adapter&&Rn(e?.adapter)?e?.adapter:Tn(e),n=In(t,e);return{...t,...n}}function Nr(){const e=se(H);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function Hr(e){const t=se(H);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),r=Mn(n,t.rtl,e),s={...n,...r};return On(H,s),s}function In(e,t){const n=Dn(t?.rtl??bn),r=N(()=>n.value[e.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:N(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function Mn(e,t,n){const r=N(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:r,rtl:t,rtlClasses:N(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function _r(){const e=se(H);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const{onBeforeUnmount:jn,readonly:Bn,ref:Ee,watch:Vn}=await p("vue");function Gr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Ee(),r=Ee();if(v){const s=new ResizeObserver(o=>{e?.(o,s),o.length&&(t==="content"?r.value=o[0].contentRect:r.value=o[0].target.getBoundingClientRect())});jn(()=>{s.disconnect()}),Vn(n,(o,a)=>{a&&(s.unobserve(ie(a)),r.value=void 0),o&&s.observe(ie(o))},{flush:"post"})}return{resizeRef:n,contentRect:Bn(r)}}const{computed:Te,inject:Ln,reactive:Nn,shallowRef:Z,toRefs:Hn,watchEffect:_n}=await p("vue"),Wr=["sm","md","lg","xl","xxl"],Gn=Symbol.for("vuetify:display"),Oe={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Wn=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Oe;return y(Oe,e)};function De(e){return v&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function Re(e){return v&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function Ie(e){const t=v&&!e?window.navigator.userAgent:"ssr";function n(d){return!!t.match(d)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),o=n(/cordova/i),a=n(/electron/i),c=n(/chrome/i),f=n(/edge/i),u=n(/firefox/i),l=n(/opera/i),i=n(/win/i),m=n(/mac/i),g=n(/linux/i);return{android:r,ios:s,cordova:o,electron:a,chrome:c,edge:f,firefox:u,opera:l,win:i,mac:m,linux:g,touch:tt,ssr:t==="ssr"}}function Ur(e,t){const{thresholds:n,mobileBreakpoint:r}=Wn(e),s=Z(Re(t)),o=Z(Ie(t)),a=Nn({}),c=Z(De(t));function f(){s.value=Re(),c.value=De()}function u(){f(),o.value=Ie()}return _n(()=>{const l=c.value<n.sm,i=c.value<n.md&&!l,m=c.value<n.lg&&!(i||l),g=c.value<n.xl&&!(m||i||l),d=c.value<n.xxl&&!(g||m||i||l),h=c.value>=n.xxl,C=l?"xs":i?"sm":m?"md":g?"lg":d?"xl":"xxl",U=typeof r=="number"?r:n[r],O=c.value<U;a.xs=l,a.sm=i,a.md=m,a.lg=g,a.xl=d,a.xxl=h,a.smAndUp=!l,a.mdAndUp=!(l||i),a.lgAndUp=!(l||i||m),a.xlAndUp=!(l||i||m||g),a.smAndDown=!(m||g||d||h),a.mdAndDown=!(g||d||h),a.lgAndDown=!(d||h),a.xlAndDown=!h,a.name=C,a.height=s.value,a.width=c.value,a.mobile=O,a.mobileBreakpoint=r,a.platform=o.value,a.thresholds=n}),v&&window.addEventListener("resize",f,{passive:!0}),{...Hn(a),update:u,ssr:!!t}}const zr=_({mobileBreakpoint:[Number,String]},"display");function Yr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qt();const n=Ln(Gn);if(!n)throw new Error("Could not find Vuetify display injection");const r=Te(()=>{if(!e.mobileBreakpoint)return n.mobile.value;const o=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<o}),s=Te(()=>t?{[`${t}--mobile`]:r.value}:{});return{...n,displayClasses:s,mobile:r}}export{kr as $,Gr as A,Yr as B,or as C,v as D,gr as E,At as F,yr as G,Vr as H,dn as I,ce as J,zr as K,Qn as L,lr as M,A as N,Fr as O,_e as P,Ar as Q,_t as R,Sr as S,z as T,ar as U,ht as V,Jn as W,Yn as X,xr as Y,w as Z,Gt as _,Br as a,nr as a0,q as a1,vr as a2,Pr as a3,ye as a4,cr as a5,pr as a6,Hr as a7,ur as a8,er as a9,Ir as aA,Ct as aB,zn as aC,hr as aD,qn as aE,pt as aF,wr as aG,ie as aH,Wr as aI,ae as aa,Ze as ab,$e as ac,Dr as ad,Xe as ae,y as af,Er as ag,Ur as ah,jr as ai,Rr as aj,Lr as ak,L as al,Gn as am,ee as an,mn as ao,H as ap,Or as aq,Y as ar,ir as as,dr as at,mr as au,fr as av,Nt as aw,Cr as ax,Yt as ay,qt as az,Tr as b,Zn as c,wt as d,T as e,kn as f,Xt as g,Fn as h,tr as i,Nr as j,gt as k,Jt as l,Mr as m,rr as n,br as o,_ as p,vt as q,k as r,G as s,$r as t,_r as u,Xn as v,sr as w,St as x,Ft as y,xt as z};
