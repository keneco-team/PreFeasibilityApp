import{eA as e,b0 as c,cX as g,cU as a,aY as p,eB as b,eC as A,a5 as h,cV as w}from"./index-C5fQgfn7.js";import{s as x}from"./sphere-B5Z2DZos.js";import{c as B}from"./plane-BJK76SZo.js";function s(r){return r?{origin:e(r.origin),vector:e(r.vector)}:{origin:c(),vector:c()}}function V(r,n,o=s()){return g(o.origin,r),a(o.vector,n,r),o}function X(r,n,o){return C(r,n,0,1,o)}function C(r,n,o,u,i){const{vector:t,origin:v}=r,f=a(B.get(),n,v),m=p(t,f)/b(t);return A(i,t,h(m,o,u)),w(i,i,r.origin)}new x(()=>s());export{X as M,V as h,s as v};