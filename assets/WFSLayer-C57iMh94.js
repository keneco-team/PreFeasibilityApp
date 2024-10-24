import{y as t,z as i,A as C,f2 as U,f3 as J,ax as k,bc as T,s as W,ep as h,b6 as Y,eK as X,P as D,x as H,bl as L,fS as Q,cR as G,fT as V,fU as z,cB as A,dt as B,cC as Z,cF as M,cD as K,cE as ee,cG as te,bS as P,fV as I,fW as re,dC as j,dJ as ie,ap as se,fX as oe,az as c,dA as ae,d0 as ne,dg as le,fY as pe,fZ as de,f_ as ue,cI as ye,dB as f,gS as ce,g0 as me,bE as fe,g1 as he,g2 as ge,g3 as we,cJ as ve,g5 as Fe,cP as xe}from"./index-C5fQgfn7.js";import{l as be,o as Oe}from"./clientSideDefaults-fv-M_Z7L.js";import{v as Se,W as Ie,z as Re,Y as Ce,S as Te}from"./wfsUtils-erCa1cuX.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./geojson-B_roPC_n.js";import"./date-M6n_RqpC.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./xmlUtils-CtUoQO7q.js";let d=class extends U{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=be(!1,!1),this.type="wfs",this.refresh=J(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const o=await this.queryFeaturesJSON(e,r);return k.fromJSON(o)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const o=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:o.count,extent:T.fromJSON(o.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async _createLoadOptions(e){var O,S;const{url:r,customParameters:o,name:n,namespaceUri:l,fields:a,geometryType:u,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,m=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new W("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await Se(r,{customParameters:o,...e}));const $=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),p=$?await Ie(this.wfsCapabilities,n,l,{spatialReference:m,customParameters:o,signal:e==null?void 0:e.signal}):{...Re(a??[]),geometryType:u,name:n,namespaceUri:l,spatialReference:m,swapXY:v},q=Ce(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),_=h.toJSON(p.geometryType),{operations:b}=this.wfsCapabilities,E=b.GetFeature.url,N=b.GetFeature.outputFormat;return{customParameters:o,featureType:q,fields:((O=p.fields)==null?void 0:O.map(F=>F.toJSON()))??[],geometryField:p.geometryField,geometryType:_,getFeatureUrl:E,getFeatureOutputFormat:N,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,objectIdField:p.objectIdField,spatialReference:(S=p.spatialReference)==null?void 0:S.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[r,o]=await Y([this._createLoadOptions(e),X("WFSSourceWorker",{...e,strategy:D("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=r.value;this._connection=o.value,this._workerHandler=this._connection.createInvokeProxy();const u=await this._workerHandler.load(a,e);for(const y of u.warnings)H.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:L},extent:u.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:Oe(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],d.prototype,"capabilities",void 0),t([i({constructOnly:!0})],d.prototype,"layer",void 0),t([i()],d.prototype,"sourceJSON",void 0),t([i()],d.prototype,"type",void 0),t([i()],d.prototype,"wfsCapabilities",void 0),d=t([C("esri.layers.graphics.sources.WFSSource")],d);var x;const R=Fe();let s=x=class extends Q(G(V(z(A(B(Z(M(K(ee(te(xe))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:m}=e;return new x({customParameters:r,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:m})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=P.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),I(this.renderer,this.fieldsIndex),re(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,o){const n=e.filter(l=>l.name!==Te);this.geometryField&&n.unshift(new j({name:this.geometryField,alias:this.geometryField,type:"geometry"})),ie(o,n.map(l=>l.toJSON()),r)}get parsedUrl(){return se(this.url)}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return oe(this,e)}createQuery(){const e=new c({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:r,timeExtent:o}=this;return e.timeExtent=r!=null&&o!=null?o.offset(-r.value,r.unit):o||null,e}getFieldDomain(e,r){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){var r;return(r=this.fieldsIndex)==null?void 0:r.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),r)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],s.prototype,"capabilities",null),t([i({type:String})],s.prototype,"copyright",void 0),t([i({readOnly:!0})],s.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],s.prototype,"customParameters",void 0),t([i(ae("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([i({type:String})],s.prototype,"displayField",void 0),t([i(ne)],s.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),t([i({type:[j],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),t([le("fields")],s.prototype,"writeFields",null),t([i(R.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([i({type:T,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),t([i()],s.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],s.prototype,"geometryType",void 0),t([i({type:String})],s.prototype,"id",void 0),t([i(pe)],s.prototype,"labelsVisible",void 0),t([i({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}})],s.prototype,"labelingInfo",void 0),t([i(ye)],s.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],s.prototype,"listMode",void 0),t([i({type:String})],s.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),t([i({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxRecordCount",void 0),t([i({type:f})],s.prototype,"maxPageCount",void 0),t([i({type:f})],s.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),t([i(ce)],s.prototype,"opacity",void 0),t([i(R.outFields)],s.prototype,"outFields",void 0),t([i({readOnly:!0})],s.prototype,"parsedUrl",null),t([i(me)],s.prototype,"popupEnabled",void 0),t([i({type:fe,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([i({types:he,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ge,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),t([i(we)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],s.prototype,"source",void 0),t([i({type:P,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([i(ve)],s.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),t([i()],s.prototype,"wfsCapabilities",null),s=x=t([C("esri.layers.WFSLayer")],s);const ke=s;export{ke as default};
