import{r as c}from"./Program-GYUfFrHm.js";import{c as _,E as g,s as y}from"./Program-GYUfFrHm.js";import{fn as F}from"./index-C5fQgfn7.js";import{t as p}from"./NestedMap-DgiGbX8E.js";import{a as C,o as E,e as O}from"./ProgramTemplate-BDgXMyPi.js";import{c as w}from"./Texture-Ru4uY3uI.js";import"./enums-BlUEVwJR.js";class d{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,s){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const n=new c(this._rctx,e,t,o,s);return n.ref(),this._store.set(e,t,n),n}get test(){}}function u(f){const{options:e,value:t}=f;return typeof e[t]=="number"}function x(f){let e="";for(const t in f){const o=f[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(u(o)){const{value:s,options:r,namespace:n}=o,i=n?`${n}_`:"";for(const a in r)e+=`#define ${i}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${i}${s}
`}else{const s=o.options;let r=0;for(const n in s)e+=`#define ${s[n]} ${(r++).toFixed()}
`;e+=`#define ${t} ${s[o.value]}
`}}return e}export{_ as BufferObject,g as FramebufferObject,c as Program,d as ProgramCache,y as Renderbuffer,C as ShaderCompiler,w as Texture,E as VertexArrayObject,F as createContext,O as createProgram,x as glslifyDefineMap};
