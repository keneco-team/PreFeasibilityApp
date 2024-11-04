import{b5 as p,s,Q as i}from"./index-dy8m9cik.js";import{l as n}from"./MeshVertexAttributes-CXXtOrzD.js";import{M as c}from"./vertexSpaceConversion-Di-Cdr6C.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-Dbc3SxoP.js";import"./computeTranslationToOriginAndRotation-q2zGhC26.js";import"./meshVertexSpaceUtils-BjYN4MPE.js";import"./MeshLocalVertexSpace-B7MMmtQb.js";import"./vec3-BWLTcRF7.js";import"./projection-DE7DLm52.js";import"./DoubleArray-_tD_qBOU.js";import"./BufferView-BCiH206q.js";import"./vec4-DFWWd5yy.js";async function S(t,r,m){await Promise.resolve(),p(m);const o=c(t,r);if(!o)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=t.cloneAndModifyVertexAttributes(new n({...o,uv:i(t.vertexAttributes.uv),color:i(t.vertexAttributes.color)}),r);return e.transform=null,e}export{S as convertMeshVertexSpace};