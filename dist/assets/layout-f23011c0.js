import{importShared as ee}from"./__federation_fn_import.js";import{p as N,l as te,s as U,F as oe,d as R,am as ne}from"./display-68a954ca.js";const{computed:s,inject:C,onActivated:ae,onBeforeUnmount:se,onDeactivated:ue,onMounted:le,provide:Z,reactive:$,ref:ie,shallowRef:k}=await ee("vue"),M=Symbol.for("vuetify:layout"),D=Symbol.for("vuetify:layout-item"),K=1e3,ye=N({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),fe=N({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function pe(){const u=C(M);if(!u)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:u.getLayoutItem,mainRect:u.mainRect,mainStyles:u.mainStyles}}function me(u){const l=C(M);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=u.id??`layout-item-${te()}`,r=U("useLayoutItem");Z(D,{id:d});const n=k(!1);ue(()=>n.value=!0),ae(()=>n.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:v}=l.register(r,{...u,active:s(()=>n.value?!1:u.active.value),id:d});return se(()=>l.unregister(d)),{layoutItemStyles:c,layoutRect:l.layoutRect,layoutItemScrimStyles:v}}const re=(u,l,d,r)=>{let n={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...n}}];for(const v of u){const f=l.get(v),m=d.get(v),z=r.get(v);if(!f||!m||!z)continue;const h={...n,[f.value]:parseInt(n[f.value],10)+(z.value?parseInt(m.value,10):0)};c.push({id:v,layer:h}),n=h}return c};function ge(u){const l=C(M,null),d=s(()=>l?l.rootZIndex.value-100:K),r=ie([]),n=$(new Map),c=$(new Map),v=$(new Map),f=$(new Map),m=$(new Map),{resizeRef:z,contentRect:h}=oe(),F=s(()=>{const t=new Map,i=u.overlaps??[];for(const e of i.filter(a=>a.includes(":"))){const[a,o]=e.split(":");if(!r.value.includes(a)||!r.value.includes(o))continue;const g=n.get(a),p=n.get(o),S=c.get(a),w=c.get(o);!g||!p||!S||!w||(t.set(o,{position:g.value,amount:parseInt(S.value,10)}),t.set(a,{position:p.value,amount:-parseInt(w.value,10)}))}return t}),I=s(()=>{const t=[...new Set([...v.values()].map(e=>e.value))].sort((e,a)=>e-a),i=[];for(const e of t){const a=r.value.filter(o=>v.get(o)?.value===e);i.push(...a)}return re(i,n,c,f)}),P=s(()=>!Array.from(m.values()).some(t=>t.value)),b=s(()=>I.value[I.value.length-1].layer),X=s(()=>({"--v-layout-left":R(b.value.left),"--v-layout-right":R(b.value.right),"--v-layout-top":R(b.value.top),"--v-layout-bottom":R(b.value.bottom),...P.value?void 0:{transition:"none"}})),x=s(()=>I.value.slice(1).map((t,i)=>{let{id:e}=t;const{layer:a}=I.value[i],o=c.get(e),g=n.get(e);return{id:e,...a,size:Number(o.value),position:g.value}})),E=t=>x.value.find(i=>i.id===t),q=U("createLayout"),H=k(!1);le(()=>{H.value=!0}),Z(M,{register:(t,i)=>{let{id:e,order:a,position:o,layoutSize:g,elementSize:p,active:S,disableTransitions:w,absolute:_}=i;v.set(e,a),n.set(e,o),c.set(e,g),f.set(e,S),w&&m.set(e,w);const T=ne(D,q?.vnode).indexOf(t);T>-1?r.value.splice(T,0,e):r.value.push(e);const j=s(()=>x.value.findIndex(L=>L.id===e)),O=s(()=>d.value+I.value.length*2-j.value*2),G=s(()=>{const L=o.value==="left"||o.value==="right",V=o.value==="right",Q=o.value==="bottom",B={[o.value]:0,zIndex:O.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-110)*(V||Q?-1:1)}%)`,position:_.value||d.value!==K?"absolute":"fixed",...P.value?void 0:{transition:"none"}};if(!H.value)return B;const y=x.value[j.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const A=F.value.get(e);return A&&(y[A.position]+=A.amount),{...B,height:L?`calc(100% - ${y.top}px - ${y.bottom}px)`:p.value?`${p.value}px`:void 0,left:V?void 0:`${y.left}px`,right:V?`${y.right}px`:void 0,top:o.value!=="bottom"?`${y.top}px`:void 0,bottom:o.value!=="top"?`${y.bottom}px`:void 0,width:L?p.value?`${p.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),J=s(()=>({zIndex:O.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:J,zIndex:O}},unregister:t=>{v.delete(t),n.delete(t),c.delete(t),f.delete(t),m.delete(t),r.value=r.value.filter(i=>i!==t)},mainRect:b,mainStyles:X,getLayoutItem:E,items:x,layoutRect:h,rootZIndex:d});const W=s(()=>["v-layout",{"v-layout--full-height":u.fullHeight}]),Y=s(()=>({zIndex:l?d.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:W,layoutStyles:Y,getLayoutItem:E,items:x,layoutRect:h,layoutRef:z}}export{fe as a,pe as b,ge as c,ye as m,me as u};
