import{b as P,b5 as H,U as C,cX as D,h1 as E,h2 as G,h3 as Q,fQ as W,h4 as X,cT as I,y as a,z as u,ci as J,b0 as K,h5 as L,b1 as R,eA as h,h6 as V,ed as Y,gh as Z,A as _}from"./index-C5fQgfn7.js";import{c as tt,u as rt,i as st}from"./infoFor3D-DsOdlPuA.js";import{e as N}from"./mat4f64-CSKppSlJ.js";import{v as O,I as y,x as et}from"./quat-D8id9oJW.js";import{e as A}from"./quatf64-Bdb9ZJJK.js";class S{constructor(r,s,e){this.assetName=r,this.assetMimeType=s,this.parts=e}equals(r){return this===r||this.assetName===r.assetName&&this.assetMimeType===r.assetMimeType&&P(this.parts,r.parts,(s,e)=>s.equals(e))}isOnService(r){return this.parts.every(s=>s.isOnService(r))}makeHash(){let r="";for(const s of this.parts)r+=s.partHash;return r}async toBlob(r){const{parts:s}=this;if(s.length===1)return s[0].toBlob(r);const e=await Promise.all(s.map(c=>c.toBlob(r)));return H(r),new Blob(e)}}class pt{constructor(r,s){this.partUrl=r,this.partHash=s}equals(r){return this===r||this.partUrl===r.partUrl&&this.partHash===r.partHash}isOnService(r){return this.partUrl.startsWith(`${r.path}/assets/`)}async toBlob(r){const{data:s}=await C(this.partUrl,{responseType:"blob"});return H(r),s}}function ft(t){return nt(t==null?void 0:t.source)}function v(t){return Array.isArray(t)?t.every(r=>r instanceof S):!1}const x=/^(model\/gltf\+json)|(model\/gltf-binary)$/,M=/\.(gltf|glb)/i;function nt(t){return t?Array.isArray(t)?t.some(d):d(t):!1}function d(t){if(t instanceof File){const{type:r,name:s}=t;return x.test(r)||M.test(s)}return x.test(t.assetMimeType)||M.test(t.assetName)}function yt(t,r){if(!t)return!1;const{source:s}=t;return at(s,r)}function mt(t,r){if(t===r)return!0;const{source:s}=t,{source:e}=r;if(s===e)return!0;if(v(s)&&v(e)){if(s.length!==e.length)return!1;const c=(i,g)=>i.assetName<g.assetName?-1:i.assetName>g.assetName?1:0,b=[...s].sort(c),F=[...e].sort(c);for(let i=0;i<b.length;++i)if(!b[i].equals(F[i]))return!1;return!0}return!1}function at(t,r){if(Array.isArray(t)){const s=t;return s.length>0&&s.every(e=>w(e,r))}return w(t,r)}function w(t,r){return t instanceof S&&t.isOnService(r)}function $t(t,r){return t instanceof File?tt(t,r):rt(t.assetMimeType,r)??st(t.assetName,r)}function At(t){return Array.isArray(t)?t:[t]}function bt(t){return!!t.original}function o(t=z){return[t[0],t[1],t[2],t[3]]}function f(t,r,s=o()){return D(s,t),s[3]=r,s}function gt(t,r=o()){const s=X(l,t);return k(r,I(O(r,s))),r}function T(t,r,s=o()){return y(l,t,m(t)),y(U,r,m(r)),et(l,U,l),k(s,I(O(s,l)))}function Nt(t,r,s,e=o()){return f(E,t,p),f(G,r,B),f(Q,s,j),T(p,B,p),T(p,j,e),e}function vt(t){return t}function ot(t){return t[3]}function m(t){return W(t[3])}function k(t,r){return t[3]=r,t}const z=[0,0,1,0],l=A(),U=A();o();const p=o(),B=o(),j=o();var $;let n=$=class extends J{constructor(t){super(t),this.translation=K(),this.rotationAxis=L(z),this.rotationAngle=0,this.scale=R(1,1,1)}get rotation(){return f(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=h(t),this.rotationAngle=ot(t)}get localMatrix(){const t=N();return y(q,this.rotation,m(this.rotation)),V(t,q,this.translation,this.scale),t}get localMatrixInverse(){return Y(N(),this.localMatrix)}equals(t){return this===t||t!=null&&Z(this.localMatrix,t.localMatrix)}clone(){const t={translation:h(this.translation),rotationAxis:h(this.rotationAxis),rotationAngle:this.rotationAngle,scale:h(this.scale)};return new $(t)}};a([u({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"translation",void 0),a([u({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAxis",void 0),a([u({type:Number,nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAngle",void 0),a([u({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"scale",void 0),a([u()],n.prototype,"rotation",null),a([u()],n.prototype,"localMatrix",null),a([u()],n.prototype,"localMatrixInverse",null),n=$=a([_("esri.geometry.support.MeshTransform")],n);const q=A(),xt=n;export{At as A,xt as N,$t as a,o as b,m as c,vt as d,yt as h,S as i,gt as k,pt as o,ft as u,bt as v,Nt as w,mt as y};
