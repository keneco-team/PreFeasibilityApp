const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i3s-DT1WN1Lt.js","./index-EUprzwra.js","./index-D5mPmoJv.css","./projection-BNX1muBe.js","./mat3f64-q3fE-ZOt.js","./mat4f64-CSKppSlJ.js","./spatialReferenceEllipsoidUtils-FYjsTT_G.js","./computeTranslationToOriginAndRotation-BLhdi9Yh.js","./DoubleArray-Bk93ZM9I.js","./BufferView-3j-GG2tB.js","./vec3-ClYo54Mm.js","./vec4-IaBqZgc_.js"])))=>i.map(i=>d[i]);
import{_ as S,eX as X,bQ as C,e1 as q}from"./index-EUprzwra.js";import{y as K}from"./DoubleArray-Bk93ZM9I.js";import{i as W,a as Z}from"./MeshLocalVertexSpace-DlGHzjba.js";import{f as ee,l as te}from"./vec3-ClYo54Mm.js";import"./sphere-fw3-Zkjp.js";import"./I3SUtil-tKURtESC.js";import"./plane-Cklvma8q.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-Bdb9ZJJK.js";import"./spatialReferenceEllipsoidUtils-FYjsTT_G.js";import"./I3SBinaryReader-JBTDZ7oS.js";import"./VertexAttribute-BlT9lbVY.js";import"./floatRGBA-Cp_eBvVG.js";import"./NormalAttribute.glsl-uaOO9Qog.js";import"./interfaces-B8ge7Jg9.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-C8mREV4H.js";import"./quat-54ZSNGEL.js";import"./computeTranslationToOriginAndRotation-BLhdi9Yh.js";var N,j;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(N||(N={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(j||(j={}));function oe(){return O||(O=new Promise(e=>S(()=>import("./i3s-DT1WN1Lt.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.i).then(({default:t})=>{const o=t({locateFile:re,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),O}function re(e){return X(`esri/libs/i3s/${e}`)}let O;var $,b,B,k,H;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})($||($={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(b||(b={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(B||(B={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(k||(k={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(H||(H={}));async function Pe(e){n=await g();const t=[e.geometryBuffer];return{result:V(n,e,t),transferList:t}}async function Se(e){var m;n=await g();const t=[e.geometryBuffer],{geometryBuffer:o}=e,f=o.byteLength,i=n._malloc(f),u=new Uint8Array(n.HEAPU8.buffer,i,f);u.set(new Uint8Array(o));const c=n.dracoDecompressPointCloudData(i,u.byteLength);if(n._free(i),c.error.length>0)throw new Error(`i3s.wasm: ${c.error}`);const l=((m=c.featureIds)==null?void 0:m.length)>0?c.featureIds.slice():null,s=c.positions.slice();return l&&t.push(l.buffer),t.push(s.buffer),{result:{positions:s,featureIds:l},transferList:t}}async function Ne(e){await g(),ie(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Ue(e){await g(),ne(e)}async function Me(e){n=await g(),n.setLegacySchema(e.context,e.jsonSchema)}async function Fe(e){const{localMatrix:t,origin:o,positions:f,vertexSpace:i,localMode:u}=e,c=C.fromJSON(e.inSpatialReference),l=C.fromJSON(e.outSpatialReference);let s;const[{projectBuffer:m},{initializeProjection:U}]=await Promise.all([S(()=>import("./index-EUprzwra.js").then(a=>a.nQ),__vite__mapDeps([1,2]),import.meta.url),S(()=>import("./index-EUprzwra.js").then(a=>a.nR),__vite__mapDeps([1,2]),import.meta.url)]);await U(c,l);const w=[0,0,0];if(!m(o,c,0,w,l,0,1))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(s=new Float64Array(f.length),!m(f,c,0,s,l,0,s.length/3))throw new Error("Failed to project")}else{const a=i.type==="georeferenced"?W.fromJSON(i):Z.fromJSON(i),{project:p}=await S(async()=>{const{project:L}=await import("./projection-BNX1muBe.js");return{project:L}},__vite__mapDeps([3,1,2,4,5,6,7,8,9,10,11]),import.meta.url),d=p({positions:f,transform:t?{localMatrix:t}:void 0,vertexSpace:a,inSpatialReference:c,outSpatialReference:l,localMode:u});if(!d)throw new Error("Failed to project");s=K(d)}const _=s.length,[I,E,A]=w;for(let a=0;a<_;a+=3)s[a]-=I,s[a+1]-=E,s[a+2]-=A;return{result:{projected:s,original:f,projectedOrigin:w},transferList:[s.buffer,f.buffer]}}async function Oe({normalMatrix:e,normals:t}){const o=new Float32Array(t.length);return ee(o,t,e),q(e)&&te(o,o),{result:{transformed:o,original:t},transferList:[o.buffer,t.buffer]}}function ve(e){Y(e)}let R,n;function ne(e){if(!n)return;const t=e.modifications,o=n._malloc(8*t.length),f=new Float64Array(n.HEAPU8.buffer,o,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];n.setModifications(e.context,o,t.length,e.isGeodetic),n._free(o)}function V(e,t,o){const{context:f,globalTrafo:i,mbs:u,obbData:c,elevationOffset:l,geometryBuffer:s,geometryDescriptor:m,indexToVertexProjector:U,vertexToRenderProjector:w}=t,_=e._malloc(s.byteLength),I=33,E=e._malloc(I*Float64Array.BYTES_PER_ELEMENT),A=new Uint8Array(e.HEAPU8.buffer,_,s.byteLength);A.set(new Uint8Array(s));const a=new Float64Array(e.HEAPU8.buffer,E,I);P(a,[NaN,NaN,NaN]);let p=a.byteOffset+3*a.BYTES_PER_ELEMENT,d=new Float64Array(a.buffer,p);P(d,i),p+=16*a.BYTES_PER_ELEMENT,d=new Float64Array(a.buffer,p),P(d,u),p+=4*a.BYTES_PER_ELEMENT,c&&(d=new Float64Array(a.buffer,p),P(d,c));const L=m,J={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(y=>y.name==="uvRegion")),featureIndex:L.featureIndex},r=e.process(f,!!t.obbData,_,A.byteLength,L,J,E,l,U,w,t.normalReferenceFrame);if(e._free(E),e._free(_),r.error.length>0)throw new Error(`i3s.wasm: ${r.error}`);if(r.discarded)return null;const M=r.componentOffsets.length>0?r.componentOffsets.slice():null,F=r.featureIds.length>0?r.featureIds.slice():null,z=r.anchorIds.length>0?Array.from(r.anchorIds):null,G=r.anchors.length>0?Array.from(r.anchors):null,v=r.interleavedVertedData.slice().buffer,T=r.indicesType===N.Int16?new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2).slice():new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4).slice(),x=r.positions.slice(),D=r.positionIndicesType===N.Int16?new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2).slice():new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4).slice(),Q={layout:t.layouts[0],interleavedVertexData:v,indices:T,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:x,indices:D}};return F&&o.push(F.buffer),M&&o.push(M.buffer),o.push(v),o.push(T.buffer),o.push(x.buffer),o.push(D.buffer),{componentOffsets:M,featureIds:F,anchorIds:z,anchors:G,transformedGeometry:Q,obb:r.obb,globalTrafo:i}}function Te(e){return e===0?b.Unmodified:e===1?b.PotentiallyModified:e===2?b.Culled:b.Unknown}function ie(e){if(!n)return;const{context:t,buffer:o}=e,f=n._malloc(o.byteLength),i=o.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(n.HEAPU8.buffer,f,i),c=new Float64Array(o);u.set(c),n.filterOBBs(t,f,i),c.set(u),n._free(f)}function Y(e){n&&n.destroy(e)===0&&(n=null)}function P(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}async function xe(){n||await g()}function g(){return n?Promise.resolve(n):(R||(R=oe().then(e=>(n=e,R=null,n))),R)}const De={transform:(e,t)=>n&&V(n,e,t),destroy:Y};export{ve as destroyContext,Se as dracoDecompressPointCloudData,Ne as filterObbsForModifications,ie as filterObbsForModificationsSync,xe as initialize,Te as interpretObbModificationResults,Pe as process,Fe as project,Me as setLegacySchema,Ue as setModifications,ne as setModificationsSync,De as test,Oe as transformNormals};