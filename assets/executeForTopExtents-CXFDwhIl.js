import{ay as r,eF as e,bG as s}from"./index-ClTjQjsy.js";import{d as p}from"./queryTopFeatures-Bj8HrpJb.js";import"./query-Rj949iD_.js";import"./pbfQueryUtils-DLUXv6J6.js";import"./pbf-CgPO8fRF.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";async function w(o,i,m){const n=r(o),a=await p(n,e.from(i),{...m}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:s.fromJSON(t)}}export{w as executeForTopExtents};