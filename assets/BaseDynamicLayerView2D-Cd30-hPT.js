import{v as s,x as p,y as r,z as a,A as m}from"./index-CZMOWvs5.js";import{a as n}from"./BitmapContainer-C11g4PIn.js";import{f as h,y as d}from"./LayerView-3bDxIRhk.js";import{_ as y}from"./ExportStrategy-B1nssqri.js";import{i as c}from"./RefreshableLayerView-B-lpRSFA.js";import"./WGLContainer-CynuD454.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-BkfJajTJ.js";import"./enums-BRXbslMp.js";import"./Texture-BNqYbkZC.js";import"./enums-BlUEVwJR.js";import"./Program-Dci1WHRn.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-La1dlKbX.js";import"./ProgramTemplate-Bv8YUfJC.js";import"./vec3f32-nZdmKIgz.js";import"./Container-kuV5opsD.js";import"./EffectView-D_G_5s5s.js";import"./highlightReasons-6HfXfqS3.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-DsX5Kk6p.js";import"./featureConversionUtils-COHlYDiR.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Bitmap-Dl7xxPwA.js";let t=class extends c(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const H=t;export{H as default};
