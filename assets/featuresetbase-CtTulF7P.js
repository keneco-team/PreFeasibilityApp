import{m as Ie}from"./TimeOnly-Cx0Hk6B_.js";import{a as b,v as De,w as X,B as x,N as v,b as c,r as m,G as P,m as N,y as Te,A as ue,X as de,W as ce,P as L,F as k,U as A,H as j,I as Ee,Q as M,_ as be,g as O,D as Ne,K as Ae,S as _,T as Y,V as xe,$ as q}from"./arcadeUtils-pkZEsjDp.js";import{q as Se,G as me,d as Le,c as B,e as Ce,a as ve,b as Pe,T as ee,E as Ze,N as $e,O as Re,B as U,f as Ue,k as K,L as C,I as ne}from"./featureSetUtils-Dg0SxQAM.js";import{t as Me}from"./ImmutableArray-BPVd6ESQ.js";import{l as ke}from"./portalUtils-CH6pNQff.js";import{u as Oe,D as ye}from"./SpatialFilter-rxA91ymM.js";import{an as pe,eT as ze,dE as te,dC as G}from"./index-C5fQgfn7.js";import{O as E}from"./WhereClause-BG2_RbNI.js";import"./number-D2qc8PbM.js";import"./featureConversionUtils-DMSUDuty.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./infoFor3D-DsOdlPuA.js";import"./executeQueryJSON-CpUYfdzi.js";import"./query-DAeonPZT.js";import"./pbfQueryUtils-nxzyQAvA.js";import"./pbf-PWvDY9gU.js";import"./executeQueryPBF-yjc4Uh5W.js";import"./AttachmentInfo-bkwQSRQZ.js";import"./executeForIds-xLT5ukpG.js";import"./geometryEngineAsync-CyBWdsYL.js";function He(a){if(a.length===1){if(A(a[0]))return q("distinct",a[0],-1);if(M(a[0]))return q("distinct",a[0].toArray(),-1)}return q("distinct",a,-1)}async function ae(a,n,i){const p=a.getVariables();if(p.length>0){const I=[];for(let t=0;t<p.length;t++){const s={name:p[t]};I.push(await n.evaluateIdentifier(i,s))}const e={};for(let t=0;t<p.length;t++)e[p[t]]=I[t];return a.parameters=e,a}return a}function d(a,n,i=null){for(const p in a)if(p.toLowerCase()===n.toLowerCase())return a[p];return i}function we(a){if(a===null)return null;const n={type:d(a,"type",""),name:d(a,"name","")};if(n.type==="range")n.range=d(a,"range",[]);else{n.codedValues=[];for(const i of d(a,"codedValues",[]))n.codedValues.push({name:d(i,"name",""),code:d(i,"code",null)})}return n}function ie(a){if(a===null)return null;const n={},i=d(a,"wkt");i!==null&&(n.wkt=i);const p=d(a,"wkid");return p!==null&&(n.wkid=p),n}function he(a){if(a===null)return null;const n={hasZ:d(a,"hasz",!1),hasM:d(a,"hasm",!1)},i=d(a,"spatialreference");i!=null&&(n.spatialReference=ie(i));const p=d(a,"x",null);if(p!==null)return n.x=p,n.y=d(a,"y",null),n.hasZ&&(n.z=d(a,"z",null)),n.hasM&&(n.m=d(a,"m",null)),n;const I=d(a,"rings",null);if(I!==null)return n.rings=I,n;const e=d(a,"paths",null);if(e!==null)return n.paths=e,n;const t=d(a,"points",null);if(t!==null)return n.points=t,n;for(const s of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const f=d(a,s,null);f!==null&&(n[s]=f)}return n}function We(a,n){for(const i of n)if(i===a)return!0;return!1}function Ge(a){return!!a.layerDefinition&&!!a.featureSet&&We(a.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&A(a.layerDefinition.fields)!==!1&&A(a.featureSet.features)!==!1}function z(a){return(a==null?void 0:a.toLowerCase())==="utc"?"UTC":(a==null?void 0:a.toLowerCase())==="unknown"?"Unknown":a}function mn(a){a.mode==="async"&&(a.functions.timezone=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{var f,y;if(b(e,1,2,n,i),De(e[0])||X(e[0]))return"Unknown";if(x(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof v)||e[1].hasField("type")===!1)throw new c(n,m.InvalidParameter,i);const o=e[1].field("type");if(P(o)===!1)throw new c(n,m.InvalidParameter,i);switch(N(o).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(((f=e[0].editFieldsInfo)==null?void 0:f.timeZone)??null);case"timeinfo":return z(((y=e[0].timeInfo)==null?void 0:y.timeZone)??null);case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return z(e[0].fieldTimeZone(N(e[1].field("fieldname"))))}throw new c(n,m.InvalidParameter,i)}const t=Te(e[0],ue(n));if(t===null)return null;const s=t.timeZone;return s==="system"?Ie.systemTimeZoneCanonicalName:s.toLowerCase()==="utc"?"UTC":s.toLowerCase()==="unknown"?"Unknown":s})},a.functions.sqltimestamp=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{b(e,1,3,n,i);const t=e[0];if(de(t)){if(e.length===1)return t.toSQLWithKeyword();if(e.length===2)return t.changeTimeZone(N(e[1])).toSQLWithKeyword();throw new c(n,m.InvalidParameter,i)}if(X(t))return t.toSQLWithKeyword();if(x(t)){if(e.length!==3)throw new c(n,m.InvalidParameter,i);await t.load();const s=N(e[1]);if(X(e[2]))return e[2].toSQLWithKeyword();if(de(e[2])===!1)throw new c(n,m.InvalidParameter,i);const f=t.fieldTimeZone(s);return f===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(f).toSQLWithKeyword()}throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"sqltimestamp",min:2,max:4}),a.functions.featuresetbyid=function(n,i){return a.standardFunctionAsync(n,i,(p,I,e)=>{if(b(e,2,4,n,i),ce(e[0])){const t=N(e[1]);let s=L(e[2],null);const f=k(L(e[3],!0));if(s===null&&(s=["*"]),A(s)===!1)throw new c(n,m.InvalidParameter,i);return e[0].featureSetById(t,f,s)}throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"featuresetbyid",min:2,max:4}),a.functions.getfeatureset=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,1,2,n,i),j(e[0])){let t=L(e[1],"datasource");return t===null&&(t="datasource"),t=N(t).toLowerCase(),Se(e[0].fullSchema(),t,n.lrucache,n.interceptor,n.spatialReference??null)}throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"getfeatureset",min:1,max:2}),a.functions.featuresetbyportalitem=function(n,i){return a.standardFunctionAsync(n,i,(p,I,e)=>{var o,r;if(b(e,2,5,n,i),e[0]===null)throw new c(n,m.PortalRequired,i);if(e[0]instanceof Ee){const l=N(e[1]),u=N(e[2]);let w=L(e[3],null);const D=k(L(e[4],!0));if(w===null&&(w=["*"]),A(w)===!1)throw new c(n,m.InvalidParameter,i);let h;return h=(o=n.services)!=null&&o.portal?n.services.portal:pe.getDefault(),h=ke(e[0],h),me(l,u,n.spatialReference??null,w,D,h,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new c(n,m.PortalRequired,i);const t=N(e[0]),s=N(e[1]);let f=L(e[2],null);const y=k(L(e[3],!0));if(f===null&&(f=["*"]),A(f)===!1)throw new c(n,m.InvalidParameter,i);return me(t,s,n.spatialReference??null,f,y,((r=n.services)==null?void 0:r.portal)??pe.getDefault(),n.lrucache,n.interceptor)})},a.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),a.functions.featuresetbyname=function(n,i){return a.standardFunctionAsync(n,i,(p,I,e)=>{if(b(e,2,4,n,i),ce(e[0])){const t=N(e[1]);let s=L(e[2],null);const f=k(L(e[3],!0));if(s===null&&(s=["*"]),A(s)===!1)throw new c(n,m.InvalidParameter,i);return e[0].featureSetByName(t,f,s)}throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"featuresetbyname",min:2,max:4}),a.functions.featureset=function(n,i){return a.standardFunction(n,i,(p,I,e)=>{b(e,1,1,n,i);const t={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if(P(e[0])){const s=JSON.parse(e[0]);s.layerDefinition!==void 0?(t.layerDefinition=s.layerDefinition,t.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(t.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(t.featureSet.features=s.features,t.featureSet.geometryType=s.geometryType,t.layerDefinition.geometryType=t.featureSet.geometryType,t.layerDefinition.objectIdField=s.objectIdFieldName??"",t.layerDefinition.typeIdField=s.typeIdFieldName,t.layerDefinition.globalIdField=s.globalIdFieldName,t.layerDefinition.fields=s.fields,s.spatialReference&&(t.layerDefinition.spatialReference=s.spatialReference))}else{if(!(e[0]instanceof v))throw new c(n,m.InvalidParameter,i);{const s=JSON.parse(e[0].castToText(!0)),f=d(s,"layerdefinition");if(f!==null){t.layerDefinition.geometryType=d(f,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.globalIdField=d(f,"globalidfield",""),t.layerDefinition.objectIdField=d(f,"objectidfield",""),t.layerDefinition.typeIdField=d(f,"typeidfield",""),t.layerDefinition.hasZ=d(f,"hasz",!1)===!0,t.layerDefinition.hasM=d(f,"hasm",!1)===!0;const y=d(f,"spatialreference");y&&(t.layerDefinition.spatialReference=ie(y));const o=[];for(const l of d(f,"fields",[])){const u={name:d(l,"name",""),alias:d(l,"alias",""),type:d(l,"type",""),nullable:d(l,"nullable",!0),editable:d(l,"editable",!0),length:d(l,"length",null),domain:we(d(l,"domain"))};o.push(u)}t.layerDefinition.fields=o;const r=d(s,"featureset");if(r){const l={};for(const u of o)l[u.name.toLowerCase()]=u.name;for(const u of d(r,"features",[])){const w={},D=d(u,"attributes",{});for(const h in D)w[l[h.toLowerCase()]]=D[h];t.featureSet.features.push({attributes:w,geometry:he(d(u,"geometry"))})}}}else{t.layerDefinition.hasZ=d(s,"hasz",!1)===!0,t.layerDefinition.hasM=d(s,"hasm",!1)===!0,t.layerDefinition.geometryType=d(s,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.objectIdField=d(s,"objectidfieldname",""),t.layerDefinition.typeIdField=d(s,"typeidfieldname","");const y=d(s,"spatialreference");y&&(t.layerDefinition.spatialReference=ie(y));const o=[],r=d(s,"fields",null);if(!A(r))throw new c(n,m.InvalidParameter,i);for(const w of r){const D={name:d(w,"name",""),alias:d(w,"alias",""),type:d(w,"type",""),nullable:d(w,"nullable",!0),editable:d(w,"editable",!0),length:d(w,"length",null),domain:we(d(w,"domain"))};o.push(D)}t.layerDefinition.fields=o;const l={};for(const w of o)l[w.name.toLowerCase()]=w.name;let u=d(s,"features",null);if(A(u))for(const w of u){const D={},h=d(w,"attributes",{});for(const T in h)D[l[T.toLowerCase()]]=h[T];t.featureSet.features.push({attributes:D,geometry:he(d(w,"geometry",null))})}else u=null,t.featureSet.features=u}}}if(Ge(t)===!1)throw new c(n,m.InvalidParameter,i);return t.layerDefinition.geometryType||(t.layerDefinition.geometryType="esriGeometryNull"),Le.create(t,n.spatialReference)})},a.signatures.push({name:"featureset",min:1,max:1}),a.functions.filter=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,2,2,n,i),A(e[0])||M(e[0])){const t=[];let s,f=e[0];if(f instanceof Me&&(f=f.toArray()),!be(e[1]))throw new c(n,m.InvalidParameter,i);s=e[1].createFunction(n);for(const y of f){const o=s(y);ze(o)?await o===!0&&t.push(y):o===!0&&t.push(y)}return t}if(x(e[0])){const t=await e[0].load(),s=E.create(e[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),f=s.getVariables();if(f.length>0){const y=[];for(let r=0;r<f.length;r++){const l={name:f[r]};y.push(await a.evaluateIdentifier(n,l))}const o={};for(let r=0;r<f.length;r++)o[f[r]]=y[r];return s.parameters=o,new B({parentfeatureset:e[0],whereclause:s})}return new B({parentfeatureset:e[0],whereclause:s})}throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"filter",min:2,max:2}),a.functions.orderby=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,2,2,n,i),x(e[0])){const t=new Ce(e[1]);return new ve({parentfeatureset:e[0],orderbyclause:t})}throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"orderby",min:2,max:2}),a.functions.top=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,2,2,n,i),x(e[0]))return new Pe({parentfeatureset:e[0],topnum:e[1]});if(A(e[0]))return O(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,O(e[1]));if(M(e[0]))return O(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,O(e[1]));throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"top",min:2,max:2}),a.functions.first=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,1,1,n,i),x(e[0])){const t=await e[0].first(p.abortSignal);if(t!==null){const s=Ne.createFromGraphicLikeObject(t.geometry,t.attributes,e[0],n.timeZone);return s._underlyingGraphic=t,s}return t}return A(e[0])?e[0].length===0?null:e[0][0]:M(e[0])?e[0].length()===0?null:e[0].get(0):null})},a.signatures.push({name:"first",min:1,max:1}),a.functions.attachments=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{b(e,1,2,n,i);const t={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof v){if(e[1].hasField("minsize")&&(t.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(t.returnMetadata=k(e[1].field("metadata"))),e[1].hasField("maxsize")&&(t.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const s=Ae(e[1].field("types"),!1);s.length>0&&(t.types=s)}}else if(e[1]!==null)throw new c(n,m.InvalidParameter,i)}if(j(e[0])){let s=e[0]._layer;return s instanceof te&&(s=ee(s,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),s===null?[]:x(s)===!1?[]:(await s.load(),s.queryAttachments(e[0].field(s.objectIdField),t.minsize,t.maxsize,t.types,t.returnMetadata))}if(e[0]===null)return[];throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"attachments",min:1,max:2}),a.functions.featuresetbyrelationshipname=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{b(e,2,4,n,i);const t=e[0],s=N(e[1]);let f=L(e[2],null);const y=k(L(e[3],!0));if(f===null&&(f=["*"]),A(f)===!1)throw new c(n,m.InvalidParameter,i);if(e[0]===null)return null;if(!j(e[0]))throw new c(n,m.InvalidParameter,i);let o=t._layer;if(o instanceof te&&(o=ee(o,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),o===null||x(o)===!1)return null;o=await o.load();const r=o.relationshipMetaData().filter(h=>h.name===s);if(r.length===0)return null;if(r[0].relationshipTableId!==void 0&&r[0].relationshipTableId!==null&&r[0].relationshipTableId>-1)return Ze(o,r[0],t.field(o.objectIdField),o.spatialReference,f,y,n.lrucache,n.interceptor);let l=o.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+r[0].relatedTableId.toString():l+"/"+r[0].relatedTableId.toString();const u=await $e(l,o.spatialReference,f,y,n.lrucache,n.interceptor);await u.load();let w=u.relationshipMetaData();if(w=w.filter(h=>h.id===r[0].id),t.hasField(r[0].keyField)===!1||t.field(r[0].keyField)===null){const h=await o.getFeatureByObjectId(t.field(o.objectIdField),[r[0].keyField]);if(h){const T=E.create(w[0].keyField+"= @id",u.getFieldsIndex(),u.dateFieldsTimeZoneDefaultUTC);return T.parameters={id:h.attributes[r[0].keyField]},u.filter(T)}return new Oe({parentfeatureset:u})}const D=E.create(w[0].keyField+"= @id",u.getFieldsIndex(),u.dateFieldsTimeZoneDefaultUTC);return D.parameters={id:t.field(r[0].keyField)},u.filter(D)})},a.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),a.functions.featuresetbyassociation=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{b(e,2,3,n,i);const t=e[0],s=N(L(e[1],"")).toLowerCase(),f=P(e[2])?N(e[2]):null;if(e[0]===null)return null;if(!j(e[0]))throw new c(n,m.InvalidParameter,i);let y=t._layer;if(y instanceof te&&(y=ee(y,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),y===null||x(y)===!1)return null;await y.load();const o=y.serviceUrl(),r=await Re(o,n.spatialReference);let l=null,u=null,w=!1;if(f!==null&&f!==""&&f!==void 0){for(const F of r.terminals)F.terminalName===f&&(u=F.terminalId);u===null&&(w=!0)}const D=r.associations.getFieldsIndex(),h=D.get("TOGLOBALID").name,T=D.get("FROMGLOBALID").name,V=D.get("TOTERMINALID").name,Q=D.get("FROMTERMINALID").name,H=D.get("FROMNETWORKSOURCEID").name,W=D.get("TONETWORKSOURCEID").name,R=D.get("ASSOCIATIONTYPE").name,ge=D.get("ISCONTENTVISIBLE").name,Fe=D.get("OBJECTID").name;for(const F of y.fields)if(F.type==="global-id"){l=t.field(F.name);break}let Z=null,re=new U(new G({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC)),se=new U(new G({name:"side",alias:"side",type:"string"}),E.create("''",r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC));const S="globalid",le="globalId",oe={};for(const F in r.lkp)oe[F]=r.lkp[F].sourceId;const $=new Ue(new G({name:"classname",alias:"classname",type:"string"}),null,oe);let g="";switch(s){case"midspan":{g=`((${h}='${l}') OR ( ${T}='${l}')) AND (${R} IN (5))`,$.codefield=E.create(`CASE WHEN (${h}='${l}') THEN ${H} ELSE ${W} END`,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC);const F=Y(C.findField(r.associations.fields,T));F.name=S,F.alias=S,Z=new U(F,E.create(`CASE WHEN (${T}='${l}') THEN ${h} ELSE ${T} END`,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC)),re=r.unVersion>=4?new ne(C.findField(r.associations.fields,D.get("PERCENTALONG").name)):new U(new G({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{g=`((${h}='${l}') OR ( ${T}='${l}')) AND (${R} IN (4,6))`,$.codefield=E.create(`CASE WHEN (${h}='${l}') THEN ${H} ELSE ${W} END`,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC);const F=Y(C.findField(r.associations.fields,T));F.name=S,F.alias=S,Z=new U(F,E.create(`CASE WHEN (${T}='${l}') THEN ${h} ELSE ${T} END`,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC)),se=new U(new G({name:"side",alias:"side",type:"string"}),E.create(`CASE WHEN (${R}=4) THEN 'from' ELSE 'to' END`,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let F=`${h}='@T'`,fe=`${T}='@T'`;u!==null&&(F+=` AND ${V}=@A`,fe+=` AND ${Q}=@A`),g="(("+F+") OR ("+fe+"))",g=_(g,"@T",l??""),F=_(F,"@T",l??""),u!==null&&(F=_(F,"@A",u.toString()),g=_(g,"@A",u.toString())),$.codefield=E.create("CASE WHEN "+F+` THEN ${H} ELSE ${W} END`,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC);const J=Y(C.findField(r.associations.fields,T));J.name=S,J.alias=S,Z=new U(J,E.create("CASE WHEN "+F+` THEN ${T} ELSE ${h} END`,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":g=`${h}='${l}' AND ${R} = 2`,u!==null&&(g+=` AND ${V} = `+u.toString()),$.codefield=H,g="( "+g+" )",Z=new K(C.findField(r.associations.fields,T),S,S);break;case"content":g=`(${T}='${l}' AND ${R} = 2)`,u!==null&&(g+=` AND ${Q} = `+u.toString()),$.codefield=W,g="( "+g+" )",Z=new K(C.findField(r.associations.fields,h),S,S);break;case"structure":g=`(${h}='${l}' AND ${R} = 3)`,u!==null&&(g+=` AND ${V} = `+u.toString()),$.codefield=H,g="( "+g+" )",Z=new K(C.findField(r.associations.fields,T),S,le);break;case"attached":g=`(${T}='${l}' AND ${R} = 3)`,u!==null&&(g+=` AND ${Q} = `+u.toString()),$.codefield=W,g="( "+g+" )",Z=new K(C.findField(r.associations.fields,h),S,le);break;default:throw new c(n,m.InvalidParameter,i)}return w&&(g="1 <> 1"),new C({parentfeatureset:r.associations,adaptedFields:[new ne(C.findField(r.associations.fields,Fe)),new ne(C.findField(r.associations.fields,ge)),Z,se,$,re],extraFilter:g?E.create(g,r.associations.getFieldsIndex(),r.associations.dateFieldsTimeZoneDefaultUTC):null})})},a.signatures.push({name:"featuresetbyassociation",min:2,max:6}),a.functions.groupby=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,3,3,n,i),!x(e[0]))throw new c(n,m.InvalidParameter,i);const t=await e[0].load(),s=[],f=[];let y=!1,o=[];if(P(e[1]))o.push(e[1]);else if(e[1]instanceof v)o.push(e[1]);else if(A(e[1]))o=e[1];else{if(!M(e[1]))throw new c(n,m.InvalidParameter,i);o=e[1].toArray()}for(const r of o)if(P(r)){const l=E.create(N(r),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),u=ye(l)===!0?N(r):"%%%%FIELDNAME";s.push({name:u,expression:l}),u==="%%%%FIELDNAME"&&(y=!0)}else{if(!(r instanceof v))throw new c(n,m.InvalidParameter,i);{const l=r.hasField("name")?r.field("name"):"%%%%FIELDNAME",u=r.hasField("expression")?r.field("expression"):"";if(l==="%%%%FIELDNAME"&&(y=!0),!l)throw new c(n,m.InvalidParameter,i);s.push({name:l,expression:E.create(u||l,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(o=[],P(e[2]))o.push(e[2]);else if(A(e[2]))o=e[2];else if(M(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof v))throw new c(n,m.InvalidParameter,i);o.push(e[2])}for(const r of o){if(!(r instanceof v))throw new c(n,m.InvalidParameter,i);{const l=r.hasField("name")?r.field("name"):"",u=r.hasField("statistic")?r.field("statistic"):"",w=r.hasField("expression")?r.field("expression"):"";if(!l||!u||!w)throw new c(n,m.InvalidParameter,i);f.push({name:l,statistic:u.toLowerCase(),expression:E.create(w,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(y){const r={};for(const u of t.fields)r[u.name.toLowerCase()]=1;for(const u of s)u.name!=="%%%%FIELDNAME"&&(r[u.name.toLowerCase()]=1);for(const u of f)u.name!=="%%%%FIELDNAME"&&(r[u.name.toLowerCase()]=1);let l=0;for(const u of s)if(u.name==="%%%%FIELDNAME"){for(;r["field_"+l.toString()]===1;)l++;r["field_"+l.toString()]=1,u.name="FIELD_"+l.toString()}}for(const r of s)await ae(r.expression,a,n);for(const r of f)await ae(r.expression,a,n);return e[0].groupby(s,f)})},a.signatures.push({name:"groupby",min:3,max:3}),a.functions.distinct=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(x(e[0])){b(e,2,2,n,i);const t=await e[0].load(),s=[];let f=[];if(P(e[1]))f.push(e[1]);else if(e[1]instanceof v)f.push(e[1]);else if(A(e[1]))f=e[1];else{if(!M(e[1]))throw new c(n,m.InvalidParameter,i);f=e[1].toArray()}let y=!1;for(const o of f)if(P(o)){const r=E.create(N(o),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),l=ye(r)===!0?N(o):"%%%%FIELDNAME";s.push({name:l,expression:r}),l==="%%%%FIELDNAME"&&(y=!0)}else{if(!(o instanceof v))throw new c(n,m.InvalidParameter,i);{const r=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",l=o.hasField("expression")?o.field("expression"):"";if(r==="%%%%FIELDNAME"&&(y=!0),!r)throw new c(n,m.InvalidParameter,i);s.push({name:r,expression:E.create(l||r,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(y){const o={};for(const l of t.fields)o[l.name.toLowerCase()]=1;for(const l of s)l.name!=="%%%%FIELDNAME"&&(o[l.name.toLowerCase()]=1);let r=0;for(const l of s)if(l.name==="%%%%FIELDNAME"){for(;o["field_"+r.toString()]===1;)r++;o["field_"+r.toString()]=1,l.name="FIELD_"+r.toString()}}for(const o of s)await ae(o.expression,a,n);return e[0].groupby(s,[])}return He(e)})},a.functions.getfeaturesetinfo=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,1,1,n,i),!x(e[0]))return null;const t=await e[0].getFeatureSetInfo();return t?v.convertObjectToArcadeDictionary({layerId:t.layerId,layerName:t.layerName,itemId:t.itemId,serviceLayerUrl:t.serviceLayerUrl,webMapLayerId:t.webMapLayerId??null,webMapLayerTitle:t.webMapLayerTitle??null,className:null,objectClassId:null},ue(n),!1,!1):null})},a.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),a.functions.filterbysubtypecode=function(n,i){return a.standardFunctionAsync(n,i,async(p,I,e)=>{if(b(e,2,2,n,i),x(e[0])){const t=await e[0].load(),s=e[1];if(!xe(s))throw new c(n,m.InvalidParameter,i);if(t.subtypeField){const y=E.create(`${t.subtypeField}= ${e[1]}`,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC);return new B({parentfeatureset:e[0],whereclause:y})}if(t.typeIdField===null||t.typeIdField==="")throw new c(n,m.FeatureSetDoesNotHaveSubtypes,i);const f=E.create(`${t.typeIdField}= ${e[1]}`,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC);return new B({parentfeatureset:e[0],whereclause:f})}throw new c(n,m.InvalidParameter,i)})},a.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}export{mn as registerFunctions};
