import{Q as d,bV as I,bW as w,M as k,U as x,bX as G,bY as S,bZ as g,b_ as b,b$ as E,bS as v,ax as F,bF as M,bE as O}from"./index-C5fQgfn7.js";const $={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function L(s){var u;const r=s.folders||[],e=r.slice(),o=new Map,i=new Map,f=new Map,a=new Map,c=new Map,l={esriGeometryPoint:i,esriGeometryPolyline:f,esriGeometryPolygon:a};(((u=s.featureCollection)==null?void 0:u.layers)||[]).forEach(t=>{const m=d(t);m.featureSet.features=[];const y=t.featureSet.geometryType;o.set(y,m);const p=t.layerDefinition.objectIdField;y==="esriGeometryPoint"?h(i,p,t.featureSet.features):y==="esriGeometryPolyline"?h(f,p,t.featureSet.features):y==="esriGeometryPolygon"&&h(a,p,t.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(t=>{c.set(t.id,t)}),r.forEach(t=>{t.networkLinkIds.forEach(m=>{const y=C(m,t.id,s.networkLinks);y&&e.push(y)})}),e.forEach(t=>{var m;if(t.featureInfos){t.points=d(o.get("esriGeometryPoint")),t.polylines=d(o.get("esriGeometryPolyline")),t.polygons=d(o.get("esriGeometryPolygon")),t.mapImages=[];for(const y of t.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const p=l[y.type].get(y.id);p&&((m=t[$[y.type]])==null||m.featureSet.features.push(p));break}case"GroundOverlay":{const p=c.get(y.id);p&&t.mapImages.push(p);break}}t.fullExtent=P([t])}});const n=P(e);return{folders:r,sublayers:e,extent:n}}function N(s,r,e,o){var a;const i=(a=I)==null?void 0:a.findCredential(s);s=w(s,{token:i==null?void 0:i.token});const f=k.kmlServiceUrl;return x(f,{query:{url:s,model:"simple",folders:"",refresh:e!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})}function T(s,r,e=null,o=[]){const i=[],f={},a=r.sublayers,c=new Set(r.folders.map(l=>l.id));return a.forEach(l=>{var u;const n=new s;if(e?n.read(l,e):n.read(l),o.length&&c.has(n.id)&&(n.visible=o.includes(n.id)),f[l.id]=n,l.parentFolderId!=null&&l.parentFolderId!==-1){const t=f[l.parentFolderId];t.sublayers||(t.sublayers=[]),(u=t.sublayers)==null||u.unshift(n)}else i.unshift(n)}),i}function h(s,r,e){e.forEach(o=>{s.set(o.attributes[r],o)})}function j(s,r){let e;return r.some(o=>o.id===s&&(e=o,!0)),e}function C(s,r,e){const o=j(s,e);return o&&(o.parentFolderId=r,o.networkLink=o),o}async function z(s){const r=F.fromJSON(s.featureSet).features,e=s.layerDefinition,o=M(e.drawingInfo.renderer),i=O.fromJSON(s.popupInfo),f=[];for(const a of r){const c=await o.getSymbolAsync(a);a.symbol=c,a.popupTemplate=i,a.visible=!0,f.push(a)}return f}function P(s){var o,i,f,a,c,l;const r=G(S),e=G(S);for(const n of s){if((i=(o=n.polygons)==null?void 0:o.featureSet)!=null&&i.features)for(const u of n.polygons.featureSet.features)g(r,u.geometry),b(e,r);if((a=(f=n.polylines)==null?void 0:f.featureSet)!=null&&a.features)for(const u of n.polylines.featureSet.features)g(r,u.geometry),b(e,r);if((l=(c=n.points)==null?void 0:c.featureSet)!=null&&l.features)for(const u of n.points.featureSet.features)g(r,u.geometry),b(e,r);if(n.mapImages)for(const u of n.mapImages)g(r,u.extent),b(e,r)}return E(e,S)?void 0:{xmin:e[0],ymin:e[1],zmin:e[2],xmax:e[3],ymax:e[4],zmax:e[5],spatialReference:v.WGS84}}export{T as S,z as b,L as d,N as g,P as j};
