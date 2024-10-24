import{bC as l,bD as h,ax as g,aH as w,bE as f,bF as d,bG as n,y as u,A as b}from"./index-C5fQgfn7.js";import{f as V,y as S}from"./LayerView-pTrgC3xg.js";import{t as _}from"./GraphicContainer-wJzCNR_E.js";import{V as T}from"./GraphicsView2D-BkVrRBO8.js";import"./Container-IZuU79Jc.js";import"./EffectView-BUvCEInV.js";import"./highlightReasons-C0YeEq8N.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-Ru4uY3uI.js";import"./AGraphicContainer-80F5SiEy.js";import"./TechniqueInstance-BHuWh3Pw.js";import"./UpdateTracking2D-BFf2_89l.js";import"./BindType-BmZEZMMh.js";import"./Util-CUHztPaE.js";import"./Program-GYUfFrHm.js";import"./LabelMetric-BZpdRkX0.js";import"./enums-BRXbslMp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-bta1_PV-.js";import"./TileContainer-CNxkrexi.js";import"./WGLContainer-B6wjANgj.js";import"./ProgramTemplate-BDgXMyPi.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-CW9JELxr.js";import"./featureConversionUtils-DMSUDuty.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-BMiEN7i4.js";import"./CIMSymbolHelper-CXnoiIzd.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-B4O2t5jv.js";import"./GeometryUtils-DvPWCH-9.js";import"./Rect-CUzevAry.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-G5eazm_G.js";import"./TimeOnly-Cx0Hk6B_.js";import"./timeSupport-Pu7nGICi.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-Bg5aWv_7.js";let y=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),s=i.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),s=new w(t.features),p=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ce=y;export{ce as default};
