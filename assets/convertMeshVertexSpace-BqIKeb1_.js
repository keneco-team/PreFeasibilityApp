import{b5 as p,s,Q as i}from"./index-DKCD7OzT.js";import{l as n}from"./MeshVertexAttributes-ChEfgstT.js";import{M as c}from"./vertexSpaceConversion-BeIrOAoZ.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-D1Xs7Q1M.js";import"./computeTranslationToOriginAndRotation-BAo7K_Ve.js";import"./meshVertexSpaceUtils-Cm9cGGvm.js";import"./MeshLocalVertexSpace-BRUimSIg.js";import"./vec3-D5SYWak0.js";import"./projection-0x21E5DX.js";import"./DoubleArray-4Pt3chy-.js";import"./BufferView-mA3lf_Sp.js";import"./vec4-B9ZxT-PF.js";async function S(t,r,m){await Promise.resolve(),p(m);const o=c(t,r);if(!o)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=t.cloneAndModifyVertexAttributes(new n({...o,uv:i(t.vertexAttributes.uv),color:i(t.vertexAttributes.color)}),r);return e.transform=null,e}export{S as convertMeshVertexSpace};
