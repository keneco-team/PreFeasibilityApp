import{am as P,an as h,ao as x,k as N,s as m,j as S}from"./index-C5fQgfn7.js";import{i as d}from"./originUtils-D69mHv66.js";import{o as b}from"./jsonContext-CpJtZshU.js";import{i as g}from"./saveAPIKeyUtils-BvgpBVGb.js";function O(e,a,r){const t=r(e);if(!t.isValid)throw new m(`${a}:invalid-parameters`,t.errorMessage,{layer:e})}async function y(e){const{layer:a,errorNamePrefix:r,validateLayer:t}=e;await a.load(),O(a,r,t)}function u(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function w(e){const{item:a,errorNamePrefix:r,layer:t,validateItem:i}=e;if(g(a),J(e),i){const s=i(a);if(!s.isValid)throw new m(`${r}:invalid-parameters`,s.errorMessage,{layer:t})}}function J(e){const{item:a,itemType:r,additionalItemType:t,errorNamePrefix:i,layer:s}=e,n=[r];if(t&&n.push(t),!n.includes(a.type)){const p=n.map(o=>`'${o}'`).join(", ");throw new m(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${p}"`,{item:a,layer:s})}}function C(e){const{layer:a,errorNamePrefix:r}=e,{portalItem:t}=a;if(!t)throw new m(`${r}:portal-item-not-set`,u(a,"requires the portalItem property to be set"));if(!t.loaded)throw new m(`${r}:portal-item-not-loaded`,u(a,"cannot be saved to a portal item that does not exist or is inaccessible"));w({...e,item:t})}function E(e){const{newItem:a,itemType:r}=e;let t=P.from(a);return t.id&&(t=t.clone(),t.id=null),t.type??(t.type=r),t.portal??(t.portal=h.getDefault()),w({...e,item:t}),t}function I(e){return b(e,"portal-item")}async function $(e,a,r){var i;"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const t=e.write({},a);return await Promise.all(((i=a.resources)==null?void 0:i.pendingOperations)??[]),x(a,{errorName:"layer-write:unsupported"},r),t}function v(e){N(e,S.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,r,t)=>t.indexOf(a)===r))}async function U(e,a,r){var i;const t=e.portal;await t.signIn(),await((i=t.user)==null?void 0:i.addItem({item:e,data:a,folder:r==null?void 0:r.folder}))}async function L(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:s,saveResources:n,supplementalUnsupportedErrors:p}=e;await y(e),C(e);const o=r.portalItem,l=i?i(o):I(o),c=await $(r,l,{...a,supplementalUnsupportedErrors:p}),f=await t({layer:r,layerJSON:c},o);return await(s==null?void 0:s(r,o)),v(o),await o.update({data:f}),d(l),await(n==null?void 0:n(o,l)),o}async function M(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:s,saveResources:n,supplementalUnsupportedErrors:p}=e;await y(e);const o=E(e),l=i?i(o):I(o),c=await $(r,l,{...a,supplementalUnsupportedErrors:p}),f=await t({layer:r,layerJSON:c},o);return await s(r,o),v(o),await U(o,f,a),r.portalItem=o,d(l),await(n==null?void 0:n(o,l)),o}export{L as $,$ as I,U as P,u as c,C as d,M as j,O as l,v,I as w,E as y};