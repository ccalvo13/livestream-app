import{_ as i}from"./preload-helper-cf010ec4.js";const c=new Set(["Module","__esModule","default","_export_sfc"]);let l={"./App":()=>(d(["App-8b88d931.css"]),h("./__federation_expose_App-d51c7e31.js").then(e=>Object.keys(e).every(t=>c.has(t))?()=>e.default:()=>e))};const a={},d=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const r=t.substring(0,t.lastIndexOf("livestreamApp.js"));e.forEach(n=>{const s=r+n;if(s in a)return;a[s]=!0;const o=document.head.appendChild(document.createElement("link"));o.href=s,o.rel="stylesheet"})};async function h(e){return i(()=>import(e),[])}const p=e=>l[e](),u=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,r])=>{const n=Object.keys(r)[0],s=Object.values(r)[0],o=s.scope||"default";globalThis.__federation_shared__[o]=globalThis.__federation_shared__[o]||{};const _=globalThis.__federation_shared__[o];(_[t]=_[t]||{})[n]=s})};export{d as dynamicLoadingCss,p as get,u as init};
