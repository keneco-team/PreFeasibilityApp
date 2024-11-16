import{y as a,z as h,A as $,fE as M,bD as F,s as f,b5 as S,v as C,x as R,by as q,bG as U}from"./index-Cey3Bnmd.js";import{a as E}from"./BitmapContainer-B3Ur9plA.js";import{f as V,y as L}from"./LayerView-DLJPKkoH.js";import{_ as W}from"./ExportStrategy-DqxCYyvh.js";import{i as A}from"./RefreshableLayerView-pSkEMWWL.js";import{i as z}from"./timeSupport-CuHrLXxh.js";import"./WGLContainer-BJgxKAID.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-duxjJHfo.js";import"./enums-BRXbslMp.js";import"./Texture-B_FmNQEr.js";import"./enums-BlUEVwJR.js";import"./Program-pIe0E4De.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-B6zFskBI.js";import"./ProgramTemplate-0qOZVFUC.js";import"./vec3f32-nZdmKIgz.js";import"./Container-srHo4pWG.js";import"./EffectView-DSI5TCAr.js";import"./highlightReasons-B72a4sSl.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-COO0m_G4.js";import"./featureConversionUtils-BUCZO6nC.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Bitmap-J9LN5CoH.js";const H=r=>{let t=class extends r{initialize(){this.exportImageParameters=new M({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return z(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,o){const{layer:s}=this;if(!e)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return S(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h({readOnly:!0})],t.prototype,"timeExtent",null),t=a([$("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(A(V(L))){constructor(){super(...arguments),this.bitmapContainer=new E}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{C(t)||R.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new E,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:o,y:s}=r,{spatialReference:d}=t;let i,p=0,n=0;if(e.children.some(g=>{const{width:w,height:v,resolution:b,x:l,y:x}=g,I=l+b*w,P=x-b*v;return o>=l&&o<=I&&s<=x&&s>=P&&(i=new U({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,o){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([$("esri.views.2d.layers.WMSLayerView2D")],u);const ct=u;export{ct as default};