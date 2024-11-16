import{aY as v,hx as a,iq as z,hB as D,ey as q,b0 as l,cV as F,cS as h,cT as M,eA as g,hu as C,aX as L,aN as S,ir as Z,aM as G,is as E,aZ as A,it as H,cU as I,ez as J,iu as _,a$ as K,iv as R,fx as O,iw as Q,ix as W,hy as tt}from"./index-Cey3Bnmd.js";import{c as f,f as nt}from"./plane-Ck7uReXx.js";function it(t,i){const n=v(t,i)/(a(t)*a(i));return-z(n)}class et{constructor(i){this._allocator=i,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&D(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const i=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*T);this._items.length=Math.min(i,this._items.length),this._itemsPtr=0}_grow(){for(let i=0;i<Math.max(8,Math.min(this._items.length,T));i++)this._items.push(this._allocator())}}const T=1024;function N(t){return t?j(q(t.origin),q(t.direction)):j(l(),l())}function j(t,i){return{origin:t,direction:i}}function Tt(t,i){const n=ot.get();return n.origin=t,n.direction=i,n}function st(t,i,n=N()){return F(n.origin,t),h(n.direction,i,t),n}function rt(t,i,n){const e=v(t.direction,h(n,i,t.origin));return M(n,t.origin,g(n,t.direction,e)),n}const ot=new et(()=>N()),ct=y();function y(){return C()}const ut=L,at=L;function V(t,i){return S(i,t)}function ft(t,i){return Z(t[0],t[1],t[2],i)}function ht(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function gt(t,i){return t[0]=t[1]=t[2]=0,t[3]=i,t}function $(t){return t[3]}function mt(t){return t}function _t(t,i,n,e){return Z(t,i,n,e)}function dt(t,i,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+i,n}function Mt(t,i,n){return t!==n&&V(t,n),n}function p(t,i,n){if(i==null||!X(t,i,d))return!1;let{t0:e,t1:s}=d;if((e<0||s<e&&s>0)&&(e=s),e<0)return!1;if(n){const{origin:r,direction:o}=i;n[0]=r[0]+o[0]*e,n[1]=r[1]+o[1]*e,n[2]=r[2]+o[2]*e}return!0}function $t(t,i,n){const e=st(i,n);if(!X(t,e,d))return[];const{origin:s,direction:r}=e,{t0:o,t1:c}=d,u=m=>{const P=l();return tt(P,s,r,m),b(t,P,P)};return Math.abs(o-c)<G()?[u(o)]:[u(o),u(c)]}const d={t0:0,t1:0};function X(t,i,n){const{origin:e,direction:s}=i,r=pt;r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2];const o=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(o===0)return!1;const c=2*(s[0]*r[0]+s[1]*r[1]+s[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const m=Math.sqrt(u);return n.t0=(-c-m)/(2*o),n.t1=(-c+m)/(2*o),!0}const pt=l();function Pt(t,i){return p(t,i,null)}function xt(t,i,n){if(p(t,i,n))return n;const e=Y(t,i,f.get());return M(n,i.origin,g(f.get(),i.direction,E(i.origin,e)/a(i.direction))),n}function Y(t,i,n){const e=f.get(),s=nt.get();A(e,i.origin,i.direction);const r=$(t);A(n,e,i.origin),g(n,n,1/a(n)*r);const o=k(t,i.origin),c=it(i.origin,n);return H(s,c+o,e),I(n,n,s),n}function St(t,i,n){return p(t,i,n)?n:(rt(i,t,n),b(t,n,n))}function b(t,i,n){const e=h(f.get(),i,t),s=g(f.get(),e,t[3]/a(e));return M(n,s,t)}function wt(t,i){const n=h(f.get(),i,t),e=J(n),s=t[3]*t[3];return Math.sqrt(Math.abs(e-s))}function k(t,i){const n=h(f.get(),i,t),e=a(n),s=$(t),r=s+Math.abs(s-e);return z(s/r)}const x=l();function B(t,i,n,e){const s=h(x,i,t);switch(n){case _.X:{const r=R(s,x)[2];return O(e,-Math.sin(r),Math.cos(r),0)}case _.Y:{const r=R(s,x),o=r[1],c=r[2],u=Math.sin(o);return O(e,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case _.Z:return K(e,s);default:return}}function U(t,i){const n=h(w,i,t);return a(n)-t[3]}function yt(t,i,n,e){const s=U(t,i),r=B(t,i,_.Z,w),o=g(w,r,n-s);return M(e,i,o)}function bt(t,i){const n=Q(t,i),e=$(t);return n<=e*e}function qt(t,i,n=C()){const e=E(t,i),s=t[3],r=i[3];return e+r<s?(S(n,t),n):e+s<r?(S(n,i),n):(W(n,t,i,(e+r-s)/(2*e)),n[3]=(e+s+r)/2,n)}const w=l(),At=y();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ct,altitudeAt:U,angleToSilhouette:k,axisAt:B,clear:lt,closestPoint:St,closestPointOnSilhouette:Y,containsPoint:bt,copy:V,create:y,distanceToSilhouette:wt,elevate:dt,equals:at,exactEquals:ut,fromCenterAndRadius:ft,fromRadius:gt,fromValues:_t,getCenter:mt,getRadius:$,intersectLine:$t,intersectRay:p,intersectRayClosestSilhouette:xt,intersectsRay:Pt,projectPoint:b,setAltitudeAt:yt,setExtent:Mt,tmpSphere:At,union:qt,wrap:ht},Symbol.toStringTag,{value:"Module"}));export{Pt as H,$ as N,V as T,mt as V,y as _,bt as a,Tt as l,N as m,et as s};