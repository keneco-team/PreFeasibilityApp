import{n as w,o as y,q as I,r as V,t as H,G as v,v as o,w as u,x as T,y as n,z as g,A as q}from"./index-Cey3Bnmd.js";import"./GeometryUtils-D8l1hDpv.js";import"./CIMSymbolHelper-B00eMC9R.js";import"./enums-BRXbslMp.js";import"./definitions-Y_v3njP4.js";import"./floatRGBA-6nTAP7cf.js";import"./EffectView-DSI5TCAr.js";import"./Container-srHo4pWG.js";import"./WGLContainer-BJgxKAID.js";import"./Texture-B_FmNQEr.js";import"./enums-BlUEVwJR.js";import"./Program-pIe0E4De.js";import"./LabelMetric-duxjJHfo.js";import"./StyleDefinition-BK3ROBTO.js";import"./enums-BRzLM11V.js";import"./MagnifierPrograms-D7uP0zlC.js";import"./pbf-DrRYbWWJ.js";import"./FeatureCommandQueue-0fSd1yOy.js";import"./UpdateTracking2D-AC7DNRvm.js";import"./PieChartMeshWriter-B03Wvall.js";import"./renderState-C37QfRey.js";import"./interfaces-B8ge7Jg9.js";import"./testSVGPremultipliedAlpha-CPTG8DiL.js";import{V as U}from"./GraphicsView2D--tCcK7qP.js";import"./earcut-COO0m_G4.js";import"./vec3f32-nZdmKIgz.js";import{r as b,o as f,n as d}from"./imageUtils-BADNjuZy.js";import{f as C,y as Q}from"./LayerView-DLJPKkoH.js";import{h as S}from"./HighlightGraphicContainer-CQ8ldC6N.js";import{i as $}from"./RefreshableLayerView-pSkEMWWL.js";import{U as P,_ as L,r as k}from"./drapedUtils-D2u2zDo2.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-DMzvrLF-.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./Rect-CUzevAry.js";import"./BoundingBox-B6zFskBI.js";import"./highlightReasons-B72a4sSl.js";import"./ProgramTemplate-0qOZVFUC.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-BUCZO6nC.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-CKOFQc0j.js";import"./TimeOnly-CbIYcHw4.js";import"./timeSupport-HCejBam2.js";import"./json-Wa8cmqdu.js";import"./constants-D5zmR9t2.js";import"./BindType-BmZEZMMh.js";import"./Util-CK4q9L4u.js";import"./TurboLine-lhgjW5l-.js";import"./basicInterfaces-DngWxyLO.js";import"./normalizeUtilsSync-BV8BxWjf.js";import"./Bitmap-J9LN5CoH.js";import"./TileContainer-DeetQs3D.js";import"./AGraphicContainer-DFotX0XI.js";import"./TechniqueInstance-LYPq5oPI.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BDV1gcIg.js";import"./popupUtils-DEP6abHw.js";const F=[0,0];let a=class extends $(b(C(Q))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),P(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new S(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new L({createFetchPopupFeaturesQueryGeometry:(r,h)=>k(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):H()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return v((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(F,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!o(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const c=new u(m),_=await this.fetchTile(c,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw s}const l=new u(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:r}),l.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(s){if(o(s))throw s;p=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Mt=a;export{Mt as default};