import{c2 as j,c3 as z,c4 as G,c5 as A,c6 as B,a6 as C,c7 as D,c8 as E,aa as L,c9 as k}from"./index-ClTjQjsy.js";import{r as q}from"./vec3f32-nZdmKIgz.js";import{n as F,h as H}from"./WGLContainer-7YY2kJYs.js";import{E as J}from"./Container-BC_D_xaX.js";class V extends F{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=j()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const s of this.children)s.beforeRender(e)}prepareRenderPasses(e){const s=e.registerRenderPass({name:"overlay",brushes:[H.overlay],target:()=>this.children,drawPhase:J.MAP});return[...super.prepareRenderPasses(e),s]}_updateMatrices(e){const{state:s}=e,{id:a,size:d,pixelRatio:r,resolution:c,rotation:l,viewpoint:u,displayMat3:_}=s;if(this._viewStateId===a)return;const p=Math.PI/180*l,i=r*d[0],n=r*d[1];this._localOrigin=u.targetGeometry.clone();const{x:h,y:v}=this._localOrigin,M=z(h,s.spatialReference);this._localOrigin.x=M,this._localOrigin.y=v;const m=c*i,g=c*n,t=G(this._dvsMat3);A(t,t,_),B(t,t,C(i/2,n/2)),D(t,t,q(i/m,-n/g,1)),E(t,t,-p),this._viewStateId=a}_updateOverlays(e,s){const{state:a}=e,{rotation:d,spatialReference:r,worldScreenWidth:c,size:l,viewpoint:u}=a,_=this._localOrigin;let p,i=0;const n=L(r);if(n&&r.isWrappable){const h=l[0],v=l[1],M=180/Math.PI*d,m=Math.abs(Math.cos(M)),g=Math.abs(Math.sin(M)),t=Math.round(h*m+v*g),[x,b]=n.valid,o=k(r),{x:O,y:I}=u.targetGeometry,S=[O,I],w=[0,0];a.toScreen(w,S);const f=[0,0];let y;y=t>c?.5*c:.5*t;const P=Math.floor((O+.5*o)/o),$=x+P*o,W=b+P*o,R=[w[0]+y,0];a.toMap(f,R),f[0]>W&&(i=o),R[0]=w[0]-y,a.toMap(f,R),f[0]<$&&(i=-o),p={worldWidth:o,xBounds:[x,b]}}for(const h of s)h.updateDrawCoords(_,i,r,p)}}export{V as f};