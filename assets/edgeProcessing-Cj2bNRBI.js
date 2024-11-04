import{e as Ot}from"./deduplicate-BVAkNWPQ.js";import{H as F}from"./InterleavedLayout-B0iwHeDY.js";import{e as l}from"./VertexAttribute-BlT9lbVY.js";import{C as V}from"./enums-BlUEVwJR.js";import{t as St}from"./VertexElementDescriptor-BOD-G50G.js";import{b0 as T,cb as tt,is as Et,fx as H,cV as rt,aY as K,iq as At,jU as Tt,aZ as dt,cS as it,a$ as ht,fO as Nt,a5 as wt,cT as $t,iJ as yt}from"./index-ClTjQjsy.js";function et(t,e=0){const s=t.stride;return Array.from(t.fields.keys()).map(o=>{var a;const r=t.fields.get(o),c=r.constructor.ElementCount,d=Mt(r.constructor.ElementType),h=r.offset,g=((a=r.optional)==null?void 0:a.glNormalized)??!1;return new St(o,c,d,h,s,g,e)})}function Mt(t){const e=vt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const vt={u8:V.UNSIGNED_BYTE,u16:V.UNSIGNED_SHORT,u32:V.UNSIGNED_INT,i8:V.BYTE,i16:V.SHORT,i32:V.INT,f32:V.FLOAT},Rt=F().vec3f(l.POSITION).u16(l.COMPONENTINDEX).freeze(),Pt=F().vec2u8(l.SIDENESS).freeze();et(Pt);const Y=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze(),j=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).vec2i16(l.NORMAL2COMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze();l.POSITION0,l.POSITION1,l.COMPONENTINDEX,l.VARIANTOFFSET,l.VARIANTSTROKE,l.VARIANTEXTENSION,l.NORMALCOMPRESSED,l.NORMAL2COMPRESSED,l.SIDENESS;let Vt=class{constructor(){this.position0=T(),this.position1=T(),this.faceNormal0=T(),this.faceNormal1=T(),this.componentIndex=0,this.cosAngle=0}};const k=-1;function xt(t,e,s){const o=t.vertices.position,r=t.vertices.componentIndex,c=O.position0,d=O.position1,h=O.faceNormal0,g=O.faceNormal1,{edges:a,normals:p}=Ct(t),m=a.length/4,E=e.allocate(m);let P=0;const B=m,w=s==null?void 0:s.allocate(B);let _=0,n=0,i=0;z.length=0;for(let N=0;N<m;++N){const y=4*N;o.getVec(a.data[y],c),o.getVec(a.data[y+1],d);const D=z.pushNew();D.index=4*N,D.length=Et(c,d)}z.sort((N,y)=>y.length-N.length);const f=new Array,u=new Array;z.forAll(({length:N,index:y})=>{const D=a.data[y],It=a.data[y+1],nt=a.data[y+2],st=a.data[y+3],ot=st===k;if(o.getVec(D,c),o.getVec(It,d),ot){const A=3*nt;H(h,p.data[A],p.data[A+1],p.data[A+2]),rt(g,h),O.componentIndex=r.get(D),O.cosAngle=K(h,g)}else{let A=3*nt;if(H(h,p.data[A],p.data[A+1],p.data[A+2]),A=3*st,H(g,p.data[A],p.data[A+1],p.data[A+2]),O.componentIndex=r.get(D),O.cosAngle=K(h,g),bt(O,_t))return;O.cosAngle<-.9999&&rt(g,h)}n+=N,i++,ot||Dt(O,Ut)?(e.write(E,P++,O),f.push(N)):Lt(O,gt)&&(w&&s&&s.write(w,_++,O),u.push(N))});const S=new Float32Array(f.reverse()),$=new Float32Array(u.reverse()),M=w&&s?{instancesData:w.slice(0,_),lodInfo:{lengths:$}}:void 0;return{regular:{instancesData:E.slice(0,P),lodInfo:{lengths:S}},silhouette:M,averageEdgeLength:n/i}}function Dt(t,e){return t.cosAngle<e}function bt(t,e){return t.cosAngle>e}function Lt(t,e){const s=At(t.cosAngle);return Tt(at,t.position1,t.position0),s*(K(dt(Bt,t.faceNormal0,t.faceNormal1),at)>0?-1:1)>e}function Ct(t){const e=t.faces.length/3,s=t.faces,o=t.neighbors,r=t.vertices.position;I.length=q.length=0;for(let c=0;c<e;c++){const d=3*c,h=o[d],g=o[d+1],a=o[d+2],p=s[d],m=s[d+1],E=s[d+2];r.getVec(p,x),r.getVec(m,U),r.getVec(E,X),it(U,U,x),it(X,X,x),dt(x,U,X),ht(x,x),q.pushArray(x),(h===k||p<m)&&(I.push(p),I.push(m),I.push(c),I.push(h)),(g===k||m<E)&&(I.push(m),I.push(E),I.push(c),I.push(g)),(a===k||E<p)&&(I.push(E),I.push(p),I.push(c),I.push(a))}return{edges:I,normals:q}}class Ft{constructor(){this.index=0,this.length=0}}const z=new tt({allocator:t=>t||new Ft,deallocator:null}),I=new tt({deallocator:null}),q=new tt({deallocator:null}),O=new Vt,Bt=T(),at=T(),x=T(),U=T(),X=T(),gt=Nt(4),_t=Math.cos(gt),zt=Nt(35),Ut=Math.cos(zt);function ct(t,e,s){const o=e/3,r=new Uint32Array(s+1),c=new Uint32Array(s+1),d=(n,i)=>{n<i?r[n+1]++:c[i+1]++};for(let n=0;n<o;n++){const i=t[3*n],f=t[3*n+1],u=t[3*n+2];d(i,f),d(f,u),d(u,i)}let h=0,g=0;for(let n=0;n<s;n++){const i=r[n+1],f=c[n+1];r[n+1]=h,c[n+1]=g,h+=i,g+=f}const a=new Uint32Array(6*o),p=r[s],m=(n,i,f)=>{if(n<i){const u=r[n+1]++;a[2*u]=i,a[2*u+1]=f}else{const u=c[i+1]++;a[2*p+2*u]=n,a[2*p+2*u+1]=f}};for(let n=0;n<o;n++){const i=t[3*n],f=t[3*n+1],u=t[3*n+2];m(i,f,n),m(f,u,n),m(u,i,n)}const E=(n,i)=>{const f=2*n,u=i-n;for(let S=1;S<u;S++){const $=a[f+2*S],M=a[f+2*S+1];let N=S-1;for(;N>=0&&a[f+2*N]>$;N--)a[f+2*N+2]=a[f+2*N],a[f+2*N+3]=a[f+2*N+1];a[f+2*N+2]=$,a[f+2*N+3]=M}};for(let n=0;n<s;n++)E(r[n],r[n+1]),E(p+c[n],p+c[n+1]);const P=new Int32Array(3*o),B=(n,i)=>n===t[3*i]?0:n===t[3*i+1]?1:n===t[3*i+2]?2:-1,w=(n,i)=>{const f=B(n,i);P[3*i+f]=-1},_=(n,i,f,u)=>{const S=B(n,i);P[3*i+S]=u;const $=B(f,u);P[3*u+$]=i};for(let n=0;n<s;n++){let i=r[n];const f=r[n+1];let u=c[n];const S=c[n+1];for(;i<f&&u<S;){const $=a[2*i],M=a[2*p+2*u];$===M?(_(n,a[2*i+1],M,a[2*p+2*u+1]),i++,u++):$<M?(w(n,a[2*i+1]),i++):(w(M,a[2*p+2*u+1]),u++)}for(;i<f;)w(n,a[2*i+1]),i++;for(;u<S;)w(a[2*p+2*u],a[2*p+2*u+1]),u++}return P}function J(t,e,s,o,r,c=2){const d=1/(Math.abs(s)+Math.abs(o)+Math.abs(r)),h=s*d,g=o*d,a=r<=0?(h>=0?1:-1)*(1-Math.abs(g)):h,p=r<=0?(g>=0?1:-1)*(1-Math.abs(h)):g,m=e*c;t[m]=lt(a),t[m+1]=lt(p)}function lt(t){return wt(Math.round(32767*t),-32767,32767)}const G=.7;let mt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?Wt:Xt}write(e,s,o){W.seed=this._edgeHashFunction(o);const r=W.getIntRange(0,255),c=W.getIntRange(0,this.settings.variants-1),d=W.getFloat(),h=255*(.5*kt(-(1-Math.min(d/G,1))+Math.max(0,d-G)/(1-G),1.2)+.5);e.position0.setVec(s,o.position0),e.position1.setVec(s,o.position1),e.componentIndex.set(s,o.componentIndex),e.variantOffset.set(s,r),e.variantStroke.set(s,c),e.variantExtension.set(s,h)}};const v=new Float32Array(6),R=new Uint32Array(v.buffer),C=new Uint32Array(1);function Xt(t){return v[0]=t.position0[0],v[1]=t.position0[1],v[2]=t.position0[2],v[3]=t.position1[0],v[4]=t.position1[1],v[5]=t.position1[2],C[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],C[0]}function Wt(t){const e=v;e[0]=b(t.position0[0]),e[1]=b(t.position0[1]),e[2]=b(t.position0[2]),e[3]=b(t.position1[0]),e[4]=b(t.position1[1]),e[5]=b(t.position1[2]),C[0]=5381;for(let s=0;s<R.length;s++)C[0]=31*C[0]+R[s];return C[0]}const ut=1e4;function b(t){return Math.round(t*ut)/ut}function kt(t,e){return Math.abs(t)**e*Math.sign(t)}class Z{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return Y.createBuffer(e)}write(e,s,o){this._commonWriter.write(e,s,o),$t(L,o.faceNormal0,o.faceNormal1),ht(L,L);const{typedBuffer:r,typedBufferStride:c}=e.normalCompressed;J(r,s,L[0],L[1],L[2],c)}}Z.Layout=Y,Z.glLayout=et(Y,1);class Q{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return j.createBuffer(e)}write(e,s,o){this._commonWriter.write(e,s,o);{const{typedBuffer:r,typedBufferStride:c}=e.normalCompressed;J(r,s,o.faceNormal0[0],o.faceNormal0[1],o.faceNormal0[2],c)}{const{typedBuffer:r,typedBufferStride:c}=e.normal2Compressed;J(r,s,o.faceNormal1[0],o.faceNormal1[1],o.faceNormal1[2],c)}}}Q.Layout=j,Q.glLayout=et(j,1);const L=T(),W=new yt;function ee(t){const e=Ht(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ft.updateSettings(t.writerSettings),pt.updateSettings(t.writerSettings),xt(e,ft,pt)}function Ht(t,e,s,o){if(e){const d=ct(s,o,t.count);return new qt(s,o,d,t)}const r=Ot(t.buffer,t.stride/4,{originalIndices:s,originalIndicesLength:o}),c=ct(r.indices,o,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:Rt.createView(r.buffer)}}class qt{constructor(e,s,o,r){this.faces=e,this.facesLength=s,this.neighbors=o,this.vertices=r}}const ft=new Z,pt=new Q,ne=F().vec3f(l.POSITION0).vec3f(l.POSITION1),se=F().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);export{Rt as E,ne as d,ee as f,se as m,xt as p,Ht as u};