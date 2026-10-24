var pl=Object.defineProperty;var ml=(i,t,e)=>t in i?pl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Xi=(i,t,e)=>ml(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="164",qn={ROTATE:0,DOLLY:1,PAN:2},vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gl=0,Vs=1,_l=2,Mo=1,vl=2,en=3,on=0,Se=1,Ge=2,yn=0,fi=1,Gs=2,Ws=3,Xs=4,xl=5,Bn=100,Ml=101,Sl=102,El=103,yl=104,Tl=200,bl=201,Al=202,wl=203,_s=204,vs=205,Rl=206,Cl=207,Pl=208,Ll=209,Dl=210,Il=211,Ul=212,Nl=213,Fl=214,Ol=0,Bl=1,zl=2,Mr=3,Hl=4,kl=5,Vl=6,Gl=7,Cs=0,Wl=1,Xl=2,Tn=0,ql=1,Yl=2,jl=3,Kl=4,Zl=5,$l=6,Jl=7,So=300,gi=301,_i=302,xs=303,Ms=304,Ar=306,Ss=1e3,Hn=1001,Es=1002,Me=1003,Ql=1004,qi=1005,Be=1006,Ur=1007,kn=1008,bn=1009,tc=1010,ec=1011,Eo=1012,yo=1013,vi=1014,Sn=1015,wr=1016,To=1017,bo=1018,Bi=1020,nc=35902,ic=1021,rc=1022,Xe=1023,sc=1024,ac=1025,pi=1026,Fi=1027,oc=1028,Ao=1029,lc=1030,wo=1031,Ro=1033,Nr=33776,Fr=33777,Or=33778,Br=33779,qs=35840,Ys=35841,js=35842,Ks=35843,Zs=36196,$s=37492,Js=37496,Qs=37808,ta=37809,ea=37810,na=37811,ia=37812,ra=37813,sa=37814,aa=37815,oa=37816,la=37817,ca=37818,ua=37819,ha=37820,da=37821,zr=36492,fa=36494,pa=36495,cc=36283,ma=36284,ga=36285,_a=36286,uc=3200,hc=3201,Co=0,dc=1,Mn="",Oe="srgb",wn="srgb-linear",Ps="display-p3",Rr="display-p3-linear",Sr="linear",Kt="srgb",Er="rec709",yr="p3",Yn=7680,va=519,fc=512,pc=513,mc=514,Po=515,gc=516,_c=517,vc=518,xc=519,xa=35044,Ma="300 es",sn=2e3,Tr=2001;class Xn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,ys=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Mc(i,t){return(i%t+t)%t}function Hr(i,t,e){return(1-e)*i+e*t}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sc={DEG2RAD:_r};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,r,s,o,a,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],x=r[0],p=r[3],f=r[6],T=r[1],E=r[4],A=r[7],L=r[2],b=r[5],R=r[8];return s[0]=o*x+a*T+l*L,s[3]=o*p+a*E+l*b,s[6]=o*f+a*A+l*R,s[1]=c*x+h*T+u*L,s[4]=c*p+h*E+u*b,s[7]=c*f+h*A+u*R,s[2]=d*x+m*T+v*L,s[5]=d*p+m*E+v*b,s[8]=d*f+m*A+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,m=c*s-o*l,v=e*u+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(r*c-h*n)*x,t[2]=(a*n-r*o)*x,t[3]=d*x,t[4]=(h*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Nt;function Lo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ec(){const i=Oi("canvas");return i.style.display="block",i}const Sa={};function yc(i){i in Sa||(Sa[i]=!0,console.warn(i))}const Ea=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ya=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yi={[wn]:{transfer:Sr,primaries:Er,toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:Kt,primaries:Er,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rr]:{transfer:Sr,primaries:yr,toReference:i=>i.applyMatrix3(ya),fromReference:i=>i.applyMatrix3(Ea)},[Ps]:{transfer:Kt,primaries:yr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ya),fromReference:i=>i.applyMatrix3(Ea).convertLinearToSRGB()}},Tc=new Set([wn,Rr]),Yt={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Tc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Yi[t].toReference,r=Yi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Yi[i].primaries},getTransfer:function(i){return i===Mn?Sr:Yi[i].transfer}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class bc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=Oi("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ac=0;class Do{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gr(r[o].image)):s.push(Gr(r[o]))}else s=Gr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wc=0;class ve extends Xn{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Hn,r=Hn,s=Be,o=kn,a=Xe,l=bn,c=ve.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=zi(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==So)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Es:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Es:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=So;ve.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,r=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,A=(m+1)/2,L=(f+1)/2,b=(h+d)/4,R=(u+x)/4,C=(v+p)/4;return E>A&&E>L?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=b/n,s=R/n):A>L?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=b/r,s=C/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=R/s,r=C/s),this.set(n,r,s,e),this}let T=Math.sqrt((p-v)*(p-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-v)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends Xn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ve(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Do(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Io extends ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=x;return}if(u!==x||l!==d||c!==m||h!==v){let p=1-a;const f=l*d+c*m+h*v+u*x,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const L=Math.sqrt(E),b=Math.atan2(L,f*T);p=Math.sin(p*b)/L,a=Math.sin(a*b)/L}const A=a*T;if(l=l*p+d*A,c=c*p+m*A,h=h*p+v*A,u=u*p+x*A,p===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+h*u+l*m-c*d,t[e+1]=l*v+h*d+c*u-a*m,t[e+2]=c*v+h*m+a*d-l*u,t[e+3]=h*v-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"YZX":this._x=d*h*u+c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u-d*m*v;break;case"XZY":this._x=d*h*u-c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new F,Ta=new Wn;class Hi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ie.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ie.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ie.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ie):Ie.fromBufferAttribute(s,o),Ie.applyMatrix4(t.matrixWorld),this.expandByPoint(Ie);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ie),Ie.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Ki.subVectors(this.max,wi),Kn.subVectors(t.a,wi),Zn.subVectors(t.b,wi),$n.subVectors(t.c,wi),hn.subVectors(Zn,Kn),dn.subVectors($n,Zn),Pn.subVectors(Kn,$n);let e=[0,-hn.z,hn.y,0,-dn.z,dn.y,0,-Pn.z,Pn.y,hn.z,0,-hn.x,dn.z,0,-dn.x,Pn.z,0,-Pn.x,-hn.y,hn.x,0,-dn.y,dn.x,0,-Pn.y,Pn.x,0];return!Xr(e,Kn,Zn,$n,Ki)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,Kn,Zn,$n,Ki))?!1:(Zi.crossVectors(hn,dn),e=[Zi.x,Zi.y,Zi.z],Xr(e,Kn,Zn,$n,Ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ie).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ie).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new F,new F,new F,new F,new F,new F,new F,new F],Ie=new F,ji=new Hi,Kn=new F,Zn=new F,$n=new F,hn=new F,dn=new F,Pn=new F,wi=new F,Ki=new F,Zi=new F,Ln=new F;function Xr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ln.fromArray(i,s);const a=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pc=new Hi,Ri=new F,qr=new F;class Ls{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ri,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(qr)),this.expandByPoint(Ri.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new F,Yr=new F,$i=new F,fn=new F,jr=new F,Ji=new F,Kr=new F;class Uo{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Yr.copy(t).add(e).multiplyScalar(.5),$i.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Yr);const s=t.distanceTo(e)*.5,o=-this.direction.dot($i),a=fn.dot(this.direction),l=-fn.dot($i),c=fn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,v;if(h>0)if(u=o*l-a,d=o*a-l,v=s*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Yr).addScaledVector($i,d),m}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),r=$e.dot($e)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,r,s){jr.subVectors(e,t),Ji.subVectors(n,t),Kr.crossVectors(jr,Ji);let o=this.direction.dot(Kr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const l=a*this.direction.dot(Ji.crossVectors(fn,Ji));if(l<0)return null;const c=a*this.direction.dot(jr.cross(fn));if(c<0||l+c>o)return null;const h=-a*fn.dot(Kr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,r,s,o,a,l,c,h,u,d,m,v,x,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,d,m,v,x,p)}set(t,e,n,r,s,o,a,l,c,h,u,d,m,v,x,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=v,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Jn.setFromMatrixColumn(t,0).length(),s=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*u,v=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+v*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,v=c*h,x=c*u;e[0]=d+x*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-v,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,v=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,v=a*h,x=a*u;e[0]=l*h,e[4]=v*c-m,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,v=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=v*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+v,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,m=o*c,v=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lc,t,Dc)}lookAt(t,e,n){const r=this.elements;return ye.subVectors(t,e),ye.lengthSq()===0&&(ye.z=1),ye.normalize(),pn.crossVectors(n,ye),pn.lengthSq()===0&&(Math.abs(n.z)===1?ye.x+=1e-4:ye.z+=1e-4,ye.normalize(),pn.crossVectors(n,ye)),pn.normalize(),Qi.crossVectors(ye,pn),r[0]=pn.x,r[4]=Qi.x,r[8]=ye.x,r[1]=pn.y,r[5]=Qi.y,r[9]=ye.y,r[2]=pn.z,r[6]=Qi.z,r[10]=ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],x=n[6],p=n[10],f=n[14],T=n[3],E=n[7],A=n[11],L=n[15],b=r[0],R=r[4],C=r[8],M=r[12],_=r[1],D=r[5],q=r[9],P=r[13],Y=r[2],W=r[6],X=r[10],j=r[14],B=r[3],Z=r[7],K=r[11],st=r[15];return s[0]=o*b+a*_+l*Y+c*B,s[4]=o*R+a*D+l*W+c*Z,s[8]=o*C+a*q+l*X+c*K,s[12]=o*M+a*P+l*j+c*st,s[1]=h*b+u*_+d*Y+m*B,s[5]=h*R+u*D+d*W+m*Z,s[9]=h*C+u*q+d*X+m*K,s[13]=h*M+u*P+d*j+m*st,s[2]=v*b+x*_+p*Y+f*B,s[6]=v*R+x*D+p*W+f*Z,s[10]=v*C+x*q+p*X+f*K,s[14]=v*M+x*P+p*j+f*st,s[3]=T*b+E*_+A*Y+L*B,s[7]=T*R+E*D+A*W+L*Z,s[11]=T*C+E*q+A*X+L*K,s[15]=T*M+E*P+A*j+L*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],v=t[3],x=t[7],p=t[11],f=t[15];return v*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*m-n*l*m)+x*(+e*l*m-e*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+p*(+e*c*u-e*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+f*(-r*a*h-e*l*u+e*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],v=t[12],x=t[13],p=t[14],f=t[15],T=u*p*c-x*d*c+x*l*m-a*p*m-u*l*f+a*d*f,E=v*d*c-h*p*c-v*l*m+o*p*m+h*l*f-o*d*f,A=h*x*c-v*u*c+v*a*m-o*x*m-h*a*f+o*u*f,L=v*u*l-h*x*l-v*a*d+o*x*d+h*a*p-o*u*p,b=e*T+n*E+r*A+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=T*R,t[1]=(x*d*s-u*p*s-x*r*m+n*p*m+u*r*f-n*d*f)*R,t[2]=(a*p*s-x*l*s+x*r*c-n*p*c-a*r*f+n*l*f)*R,t[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*m-n*l*m)*R,t[4]=E*R,t[5]=(h*p*s-v*d*s+v*r*m-e*p*m-h*r*f+e*d*f)*R,t[6]=(v*l*s-o*p*s-v*r*c+e*p*c+o*r*f-e*l*f)*R,t[7]=(o*d*s-h*l*s+h*r*c-e*d*c-o*r*m+e*l*m)*R,t[8]=A*R,t[9]=(v*u*s-h*x*s-v*n*m+e*x*m+h*n*f-e*u*f)*R,t[10]=(o*x*s-v*a*s+v*n*c-e*x*c-o*n*f+e*a*f)*R,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*m-e*a*m)*R,t[12]=L*R,t[13]=(h*x*r-v*u*r+v*n*d-e*x*d-h*n*p+e*u*p)*R,t[14]=(v*a*r-o*x*r-v*n*l+e*x*l+o*n*p-e*a*p)*R,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,m=s*h,v=s*u,x=o*h,p=o*u,f=a*u,T=l*c,E=l*h,A=l*u,L=n.x,b=n.y,R=n.z;return r[0]=(1-(x+f))*L,r[1]=(m+A)*L,r[2]=(v-E)*L,r[3]=0,r[4]=(m-A)*b,r[5]=(1-(d+f))*b,r[6]=(p+T)*b,r[7]=0,r[8]=(v+E)*R,r[9]=(p-T)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Jn.set(r[0],r[1],r[2]).length();const o=Jn.set(r[4],r[5],r[6]).length(),a=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ue.copy(this);const c=1/s,h=1/o,u=1/a;return Ue.elements[0]*=c,Ue.elements[1]*=c,Ue.elements[2]*=c,Ue.elements[4]*=h,Ue.elements[5]*=h,Ue.elements[6]*=h,Ue.elements[8]*=u,Ue.elements[9]*=u,Ue.elements[10]*=u,e.setFromRotationMatrix(Ue),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=sn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let m,v;if(a===sn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Tr)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=sn){const l=this.elements,c=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*c,m=(n+r)*h;let v,x;if(a===sn)v=(o+s)*u,x=-2*u;else if(a===Tr)v=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new F,Ue=new te,Lc=new F(0,0,0),Dc=new F(1,1,1),pn=new F,Qi=new F,ye=new F,ba=new te,Aa=new Wn;class Ye{constructor(t=0,e=0,n=0,r=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Aa.setFromEuler(this),this.setFromQuaternion(Aa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ic=0;const wa=new F,Qn=new Wn,Je=new te,tr=new F,Ci=new F,Uc=new F,Nc=new Wn,Ra=new F(1,0,0),Ca=new F(0,1,0),Pa=new F(0,0,1),La={type:"added"},Fc={type:"removed"},ti={type:"childadded",child:null},Zr={type:"childremoved",child:null};class he extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new F,e=new Ye,n=new Wn,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new te},normalMatrix:{value:new Nt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(Ra,t)}rotateY(t){return this.rotateOnAxis(Ca,t)}rotateZ(t){return this.rotateOnAxis(Pa,t)}translateOnAxis(t,e){return wa.copy(t).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ra,t)}translateY(t){return this.translateOnAxis(Ca,t)}translateZ(t){return this.translateOnAxis(Pa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(Ci,tr,this.up):Je.lookAt(tr,Ci,this.up),this.quaternion.setFromRotationMatrix(Je),r&&(Je.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix(Je),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(La),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fc),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(La),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Uc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}he.DEFAULT_UP=new F(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new F,Qe=new F,$r=new F,tn=new F,ei=new F,ni=new F,Da=new F,Jr=new F,Qr=new F,ts=new F;class We{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ne.subVectors(t,e),r.cross(Ne);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ne.subVectors(r,e),Qe.subVectors(n,e),$r.subVectors(t,e);const o=Ne.dot(Ne),a=Ne.dot(Qe),l=Ne.dot($r),c=Qe.dot(Qe),h=Qe.dot($r),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static isFrontFacing(t,e,n,r){return Ne.subVectors(n,e),Qe.subVectors(t,e),Ne.cross(Qe).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ne.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),Ne.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return We.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;ei.subVectors(r,n),ni.subVectors(s,n),Jr.subVectors(t,n);const l=ei.dot(Jr),c=ni.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Qr.subVectors(t,r);const h=ei.dot(Qr),u=ni.dot(Qr);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ei,o);ts.subVectors(t,s);const m=ei.dot(ts),v=ni.dot(ts);if(v>=0&&m<=v)return e.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(ni,a);const p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return Da.subVectors(s,r),a=(u-h)/(u-h+(m-v)),e.copy(r).addScaledVector(Da,a);const f=1/(p+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(ei,o).addScaledVector(ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},er={h:0,s:0,l:0};function es(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=Mc(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=es(o,s,t+1/3),this.g=es(o,s,t),this.b=es(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Fo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Yt.fromWorkingColorSpace(me.copy(this),t),Math.round(_e(me.r*255,0,255))*65536+Math.round(_e(me.g*255,0,255))*256+Math.round(_e(me.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,r=me.g,s=me.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Oe){Yt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,r=me.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(er);const n=Hr(mn.h,er.h,e),r=Hr(mn.s,er.s,e),s=Hr(mn.l,er.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new Vt;Vt.NAMES=Fo;let Oc=0;class ki extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=fi,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=vs,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_s&&(n.blendSrc=this.blendSrc),this.blendDst!==vs&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Oo extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ie=new F,nr=new Tt;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return yc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class Bo extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zo extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ze extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bc=0;const Pe=new te,ns=new he,ii=new F,Te=new Hi,Pi=new Hi,ce=new F;class Rn extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lo(t)?zo:Bo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return ns.lookAt(t),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Te.setFromBufferAttribute(s),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(ce.addVectors(Te.min,Pi.min),Te.expandByPoint(ce),ce.addVectors(Te.max,Pi.max),Te.expandByPoint(ce)):(Te.expandByPoint(Pi.min),Te.expandByPoint(Pi.max))}Te.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ce.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ce));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ce.fromBufferAttribute(a,c),l&&(ii.fromBufferAttribute(t,c),ce.add(ii)),r=Math.max(r,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new F,l[C]=new F;const c=new F,h=new F,u=new F,d=new Tt,m=new Tt,v=new Tt,x=new F,p=new F;function f(C,M,_){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,_),h.sub(c),u.sub(c),m.sub(d),v.sub(d);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(D),a[C].add(x),a[M].add(x),a[_].add(x),l[C].add(p),l[M].add(p),l[_].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,M=T.length;C<M;++C){const _=T[C],D=_.start,q=_.count;for(let P=D,Y=D+q;P<Y;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const E=new F,A=new F,L=new F,b=new F;function R(C){L.fromBufferAttribute(r,C),b.copy(L);const M=a[C];E.copy(M),E.sub(L.multiplyScalar(L.dot(M))).normalize(),A.crossVectors(b,M);const D=A.dot(l[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,D)}for(let C=0,M=T.length;C<M;++C){const _=T[C],D=_.start,q=_.count;for(let P=D,Y=D+q;P<Y;P+=3)R(t.getX(P+0)),R(t.getX(P+1)),R(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let f=0;f<h;f++)d[v++]=c[m++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Rn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new te,Dn=new Uo,ir=new Ls,Ua=new F,ri=new F,si=new F,ai=new F,is=new F,rr=new F,sr=new Tt,ar=new Tt,or=new Tt,Na=new F,Fa=new F,Oa=new F,lr=new F,cr=new F;class He extends he{constructor(t=new Rn,e=new Oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(is.fromBufferAttribute(u,t),o?rr.addScaledVector(is,h):rr.addScaledVector(is.sub(e),h))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),Dn.copy(t.ray).recast(t.near),!(ir.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(ir,Ua)===null||Dn.origin.distanceToSquared(Ua)>(t.far-t.near)**2))&&(Ia.copy(s).invert(),Dn.copy(t.ray).applyMatrix4(Ia),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],f=o[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=T,L=E;A<L;A+=3){const b=a.getX(A),R=a.getX(A+1),C=a.getX(A+2);r=ur(this,f,t,n,c,h,u,b,R,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const T=a.getX(p),E=a.getX(p+1),A=a.getX(p+2);r=ur(this,o,t,n,c,h,u,T,E,A),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],f=o[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=T,L=E;A<L;A+=3){const b=A,R=A+1,C=A+2;r=ur(this,f,t,n,c,h,u,b,R,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const T=p,E=p+1,A=p+2;r=ur(this,o,t,n,c,h,u,T,E,A),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function zc(i,t,e,n,r,s,o,a){let l;if(t.side===Se?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===on,a),l===null)return null;cr.copy(a),cr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:i}}function ur(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ri),i.getVertexPosition(l,si),i.getVertexPosition(c,ai);const h=zc(i,t,e,n,ri,si,ai,lr);if(h){r&&(sr.fromBufferAttribute(r,a),ar.fromBufferAttribute(r,l),or.fromBufferAttribute(r,c),h.uv=We.getInterpolation(lr,ri,si,ai,sr,ar,or,new Tt)),s&&(sr.fromBufferAttribute(s,a),ar.fromBufferAttribute(s,l),or.fromBufferAttribute(s,c),h.uv1=We.getInterpolation(lr,ri,si,ai,sr,ar,or,new Tt)),o&&(Na.fromBufferAttribute(o,a),Fa.fromBufferAttribute(o,l),Oa.fromBufferAttribute(o,c),h.normal=We.getInterpolation(lr,ri,si,ai,Na,Fa,Oa,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};We.getNormal(ri,si,ai,u.normal),h.face=u}return h}class Vi extends Rn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function v(x,p,f,T,E,A,L,b,R,C,M){const _=A/R,D=L/C,q=A/2,P=L/2,Y=b/2,W=R+1,X=C+1;let j=0,B=0;const Z=new F;for(let K=0;K<X;K++){const st=K*D-P;for(let ft=0;ft<W;ft++){const _t=ft*_-q;Z[x]=_t*T,Z[p]=st*E,Z[f]=Y,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[f]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ft/R),u.push(1-K/C),j+=1}}for(let K=0;K<C;K++)for(let st=0;st<R;st++){const ft=d+st+W*K,_t=d+st+W*(K+1),k=d+(st+1)+W*(K+1),J=d+(st+1)+W*K;l.push(ft,_t,J),l.push(_t,k,J),B+=6}a.addGroup(m,B,M),m+=B,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ge(i){const t={};for(let e=0;e<i.length;e++){const n=xi(i[e]);for(const r in n)t[r]=n[r]}return t}function Hc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ho(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const kc={clone:xi,merge:ge};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=Hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ko extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new F,Ba=new Tt,za=new Tt;class Le extends ko{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,Ba,za),e.subVectors(za,Ba)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oi=-90,li=1;class Wc extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(oi,li,t,e);r.layers=this.layers,this.add(r);const s=new Le(oi,li,t,e);s.layers=this.layers,this.add(s);const o=new Le(oi,li,t,e);o.layers=this.layers,this.add(o);const a=new Le(oi,li,t,e);a.layers=this.layers,this.add(a);const l=new Le(oi,li,t,e);l.layers=this.layers,this.add(l);const c=new Le(oi,li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Vo extends ve{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xc extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Vo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vi(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:yn});s.uniforms.tEquirect.value=e;const o=new He(r,s),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=Be),new Wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const rs=new F,qc=new F,Yc=new Nt;class rn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=rs.subVectors(n,e).cross(qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yc.getNormalMatrix(t),r=this.coplanarPoint(rs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ls,hr=new F;class Ds{constructor(t=new rn,e=new rn,n=new rn,r=new rn,s=new rn,o=new rn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],v=r[9],x=r[10],p=r[11],f=r[12],T=r[13],E=r[14],A=r[15];if(n[0].setComponents(l-s,d-c,p-m,A-f).normalize(),n[1].setComponents(l+s,d+c,p+m,A+f).normalize(),n[2].setComponents(l+o,d+h,p+v,A+T).normalize(),n[3].setComponents(l-o,d-h,p-v,A-T).normalize(),n[4].setComponents(l-a,d-u,p-x,A-E).normalize(),e===sn)n[5].setComponents(l+a,d+u,p+x,A+E).normalize();else if(e===Tr)n[5].setComponents(a,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(hr.x=r.normal.x>0?t.max.x:t.min.x,hr.y=r.normal.y>0?t.max.y:t.min.y,hr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Go(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function jc(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let m=0,v=d.length;m<v;m++){const x=d[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Cr extends Rn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,d=e/l,m=[],v=[],x=[],p=[];for(let f=0;f<h;f++){const T=f*d-o;for(let E=0;E<c;E++){const A=E*u-s;v.push(A,-T,0),x.push(0,0,1),p.push(E/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const E=T+c*f,A=T+c*(f+1),L=T+1+c*(f+1),b=T+1+c*f;m.push(E,A,b),m.push(A,L,b)}this.setIndex(m),this.setAttribute("position",new ze(v,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$c=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ju=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ah=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ch=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_h=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ch=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ih=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ed=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,md=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Td=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ad=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Kc,alphahash_pars_fragment:Zc,alphamap_fragment:$c,alphamap_pars_fragment:Jc,alphatest_fragment:Qc,alphatest_pars_fragment:tu,aomap_fragment:eu,aomap_pars_fragment:nu,batching_pars_vertex:iu,batching_vertex:ru,begin_vertex:su,beginnormal_vertex:au,bsdfs:ou,iridescence_fragment:lu,bumpmap_pars_fragment:cu,clipping_planes_fragment:uu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:du,clipping_planes_vertex:fu,color_fragment:pu,color_pars_fragment:mu,color_pars_vertex:gu,color_vertex:_u,common:vu,cube_uv_reflection_fragment:xu,defaultnormal_vertex:Mu,displacementmap_pars_vertex:Su,displacementmap_vertex:Eu,emissivemap_fragment:yu,emissivemap_pars_fragment:Tu,colorspace_fragment:bu,colorspace_pars_fragment:Au,envmap_fragment:wu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Cu,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:ku,envmap_vertex:Lu,fog_vertex:Du,fog_pars_vertex:Iu,fog_fragment:Uu,fog_pars_fragment:Nu,gradientmap_pars_fragment:Fu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:zu,lights_pars_begin:Hu,lights_toon_fragment:Vu,lights_toon_pars_fragment:Gu,lights_phong_fragment:Wu,lights_phong_pars_fragment:Xu,lights_physical_fragment:qu,lights_physical_pars_fragment:Yu,lights_fragment_begin:ju,lights_fragment_maps:Ku,lights_fragment_end:Zu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:Qu,logdepthbuf_vertex:th,map_fragment:eh,map_pars_fragment:nh,map_particle_fragment:ih,map_particle_pars_fragment:rh,metalnessmap_fragment:sh,metalnessmap_pars_fragment:ah,morphinstance_vertex:oh,morphcolor_vertex:lh,morphnormal_vertex:ch,morphtarget_pars_vertex:uh,morphtarget_vertex:hh,normal_fragment_begin:dh,normal_fragment_maps:fh,normal_pars_fragment:ph,normal_pars_vertex:mh,normal_vertex:gh,normalmap_pars_fragment:_h,clearcoat_normal_fragment_begin:vh,clearcoat_normal_fragment_maps:xh,clearcoat_pars_fragment:Mh,iridescence_pars_fragment:Sh,opaque_fragment:Eh,packing:yh,premultiplied_alpha_fragment:Th,project_vertex:bh,dithering_fragment:Ah,dithering_pars_fragment:wh,roughnessmap_fragment:Rh,roughnessmap_pars_fragment:Ch,shadowmap_pars_fragment:Ph,shadowmap_pars_vertex:Lh,shadowmap_vertex:Dh,shadowmask_pars_fragment:Ih,skinbase_vertex:Uh,skinning_pars_vertex:Nh,skinning_vertex:Fh,skinnormal_vertex:Oh,specularmap_fragment:Bh,specularmap_pars_fragment:zh,tonemapping_fragment:Hh,tonemapping_pars_fragment:kh,transmission_fragment:Vh,transmission_pars_fragment:Gh,uv_pars_fragment:Wh,uv_pars_vertex:Xh,uv_vertex:qh,worldpos_vertex:Yh,background_vert:jh,background_frag:Kh,backgroundCube_vert:Zh,backgroundCube_frag:$h,cube_vert:Jh,cube_frag:Qh,depth_vert:td,depth_frag:ed,distanceRGBA_vert:nd,distanceRGBA_frag:id,equirect_vert:rd,equirect_frag:sd,linedashed_vert:ad,linedashed_frag:od,meshbasic_vert:ld,meshbasic_frag:cd,meshlambert_vert:ud,meshlambert_frag:hd,meshmatcap_vert:dd,meshmatcap_frag:fd,meshnormal_vert:pd,meshnormal_frag:md,meshphong_vert:gd,meshphong_frag:_d,meshphysical_vert:vd,meshphysical_frag:xd,meshtoon_vert:Md,meshtoon_frag:Sd,points_vert:Ed,points_frag:yd,shadow_vert:Td,shadow_frag:bd,sprite_vert:Ad,sprite_frag:wd},ot={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ve={basic:{uniforms:ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ge([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ge([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ge([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ge([ot.points,ot.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ge([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ge([ot.common,ot.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ge([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ge([ot.sprite,ot.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:ge([ot.common,ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:ge([ot.lights,ot.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ve.physical={uniforms:ge([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const dr={r:0,b:0,g:0},Un=new Ye,Rd=new te;function Cd(i,t,e,n,r,s,o){const a=new Vt(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function x(T){let E=!1;const A=v(T);A===null?f(a,l):A&&A.isColor&&(f(A,1),E=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function p(T,E){const A=v(E);A&&(A.isCubeTexture||A.mapping===Ar)?(h===void 0&&(h=new He(new Vi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:xi(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Un.copy(E.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rd.makeRotationFromEuler(Un)),h.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Kt,(u!==A||d!==A.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new He(new Cr(2,2),new An({name:"BackgroundMaterial",uniforms:xi(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Kt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,E){T.getRGB(dr,Ho(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:x,addToRenderList:p}}function Pd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(_,D,q,P,Y){let W=!1;const X=u(P,q,D);s!==X&&(s=X,c(s.object)),W=m(_,P,q,Y),W&&v(_,P,q,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,A(_,D,q,P),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,D,q){const P=q.wireframe===!0;let Y=n[_.id];Y===void 0&&(Y={},n[_.id]=Y);let W=Y[D.id];W===void 0&&(W={},Y[D.id]=W);let X=W[P];return X===void 0&&(X=d(l()),W[P]=X),X}function d(_){const D=[],q=[],P=[];for(let Y=0;Y<e;Y++)D[Y]=0,q[Y]=0,P[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:q,attributeDivisors:P,object:_,attributes:{},index:null}}function m(_,D,q,P){const Y=s.attributes,W=D.attributes;let X=0;const j=q.getAttributes();for(const B in j)if(j[B].location>=0){const K=Y[B];let st=W[B];if(st===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),K===void 0||K.attribute!==st||st&&K.data!==st.data)return!0;X++}return s.attributesNum!==X||s.index!==P}function v(_,D,q,P){const Y={},W=D.attributes;let X=0;const j=q.getAttributes();for(const B in j)if(j[B].location>=0){let K=W[B];K===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(K=_.instanceColor));const st={};st.attribute=K,K&&K.data&&(st.data=K.data),Y[B]=st,X++}s.attributes=Y,s.attributesNum=X,s.index=P}function x(){const _=s.newAttributes;for(let D=0,q=_.length;D<q;D++)_[D]=0}function p(_){f(_,0)}function f(_,D){const q=s.newAttributes,P=s.enabledAttributes,Y=s.attributeDivisors;q[_]=1,P[_]===0&&(i.enableVertexAttribArray(_),P[_]=1),Y[_]!==D&&(i.vertexAttribDivisor(_,D),Y[_]=D)}function T(){const _=s.newAttributes,D=s.enabledAttributes;for(let q=0,P=D.length;q<P;q++)D[q]!==_[q]&&(i.disableVertexAttribArray(q),D[q]=0)}function E(_,D,q,P,Y,W,X){X===!0?i.vertexAttribIPointer(_,D,q,Y,W):i.vertexAttribPointer(_,D,q,P,Y,W)}function A(_,D,q,P){x();const Y=P.attributes,W=q.getAttributes(),X=D.defaultAttributeValues;for(const j in W){const B=W[j];if(B.location>=0){let Z=Y[j];if(Z===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const K=Z.normalized,st=Z.itemSize,ft=t.get(Z);if(ft===void 0)continue;const _t=ft.buffer,k=ft.type,J=ft.bytesPerElement,at=k===i.INT||k===i.UNSIGNED_INT||Z.gpuType===yo;if(Z.isInterleavedBufferAttribute){const nt=Z.data,bt=nt.stride,Et=Z.offset;if(nt.isInstancedInterleavedBuffer){for(let N=0;N<B.locationSize;N++)f(B.location+N,nt.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let N=0;N<B.locationSize;N++)p(B.location+N);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let N=0;N<B.locationSize;N++)E(B.location+N,st/B.locationSize,k,K,bt*J,(Et+st/B.locationSize*N)*J,at)}else{if(Z.isInstancedBufferAttribute){for(let nt=0;nt<B.locationSize;nt++)f(B.location+nt,Z.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<B.locationSize;nt++)p(B.location+nt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let nt=0;nt<B.locationSize;nt++)E(B.location+nt,st/B.locationSize,k,K,st*J,st/B.locationSize*nt*J,at)}}else if(X!==void 0){const K=X[j];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(B.location,K);break;case 3:i.vertexAttrib3fv(B.location,K);break;case 4:i.vertexAttrib4fv(B.location,K);break;default:i.vertexAttrib1fv(B.location,K)}}}}T()}function L(){C();for(const _ in n){const D=n[_];for(const q in D){const P=D[q];for(const Y in P)h(P[Y].object),delete P[Y];delete D[q]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;const D=n[_.id];for(const q in D){const P=D[q];for(const Y in P)h(P[Y].object),delete P[Y];delete D[q]}delete n[_.id]}function R(_){for(const D in n){const q=n[D];if(q[_.id]===void 0)continue;const P=q[_.id];for(const Y in P)h(P[Y].object),delete P[Y];delete q[_.id]}}function C(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function Ld(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u;m++)this.render(c[m],h[m]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];e.update(m,n,1)}}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x];for(let x=0;x<d.length;x++)e.update(v,n,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Xe&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==bn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Sn&&!R)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:A,maxSamples:L}}function Id(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new rn,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const T=s?0:n,E=T*4;let A=f.clippingState||null;l.value=A,A=h(v,d,E,m);for(let L=0;L!==E;++L)A[L]=e[L];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,v){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const f=m+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,A=m;E!==x;++E,A+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Ud(i){let t=new WeakMap;function e(o,a){return a===xs?o.mapping=gi:a===Ms&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xs||a===Ms)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Wo extends ko{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ui=4,Ha=[.125,.215,.35,.446,.526,.582],zn=20,ss=new Wo,ka=new Vt;let as=null,os=0,ls=0,cs=!1;const On=(1+Math.sqrt(5))/2,ci=1/On,Va=[new F(-On,ci,0),new F(On,ci,0),new F(-ci,0,On),new F(ci,0,On),new F(0,On,-ci),new F(0,On,ci),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(as,os,ls),this._renderer.xr.enabled=cs,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:wr,format:Xe,colorSpace:wn,depthBuffer:!1},r=Wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(s)),this._blurMaterial=Fd(s,t,e)}return r}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,ss)}_sceneToCubeUV(t,e,n,r){const a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ka),h.toneMapping=Tn,h.autoClear=!1;const m=new Oo({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),v=new He(new Vi,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(ka),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const E=this._cubeSize;fr(r,T*E,f>2?E:0,E,E),h.setRenderTarget(r),x&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===gi||t.mapping===_i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Va[(r-s-1)%Va.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new He(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zn-1),x=s/v,p=isFinite(s)?1+Math.floor(h*x):zn;p>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const f=[];let T=0;for(let R=0;R<zn;++R){const C=R/x,M=Math.exp(-C*C/2);f.push(M),R===0?T+=M:R<p&&(T+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-n;const A=this._sizeLods[r],L=3*A*(r>E-ui?r-E+ui:0),b=4*(this._cubeSize-A);fr(e,L,b,3*A,2*A),l.setRenderTarget(e),l.render(u,ss)}}function Nd(i){const t=[],e=[],n=[];let r=i;const s=i-ui+1+Ha.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ui?l=Ha[o-i+ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,x=3,p=2,f=1,T=new Float32Array(x*v*m),E=new Float32Array(p*v*m),A=new Float32Array(f*v*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,C=b>2?0:-1,M=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];T.set(M,x*v*b),E.set(d,p*v*b);const _=[b,b,b,b,b,b];A.set(_,f*v*b)}const L=new Rn;L.setAttribute("position",new qe(T,x)),L.setAttribute("uv",new qe(E,p)),L.setAttribute("faceIndex",new qe(A,f)),t.push(L),r>ui&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wa(i,t,e){const n=new Gn(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Fd(i,t,e){const n=new Float32Array(zn),r=new F(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Xa(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function qa(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Is(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Od(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xs||l===Ms,h=l===gi||l===_i;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ga(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Ga(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function zd(i,t,e,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,f=x.length;p<f;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const x=m[v];for(let p=0,f=x.length;p<f;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,v=u.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let E=0,A=T.length;E<A;E+=3){const L=T[E+0],b=T[E+1],R=T[E+2];d.push(L,b,b,R,R,L)}}else if(v!==void 0){const T=v.array;x=v.version;for(let E=0,A=T.length/3-1;E<A;E+=3){const L=E+0,b=E+1,R=E+2;d.push(L,b,b,R,R,L)}}else return;const p=new(Lo(d)?zo:Bo)(d,1);p.version=x;const f=s.get(u);f&&t.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hd(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,d*o,v),e.update(m,n,v))}function h(d,m,v){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<v;p++)this.render(d[p]/o,m[p]);else{x.multiDrawElementsWEBGL(n,m,0,s,d,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];e.update(p,n,1)}}function u(d,m,v,x){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,x,0,v);let f=0;for(let T=0;T<v;T++)f+=m[T];for(let T=0;T<x.length;T++)e.update(f,n,x[T])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Vd(i,t,e){const n=new WeakMap,r=new ue;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let _=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var m=_;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let A=0;v===!0&&(A=1),x===!0&&(A=2),p===!0&&(A=3);let L=a.attributes.position.count*A,b=1;L>t.maxTextureSize&&(b=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*b*4*u),C=new Io(R,L,b,u);C.type=Sn,C.needsUpdate=!0;const M=A*4;for(let D=0;D<u;D++){const q=f[D],P=T[D],Y=E[D],W=L*b*4*D;for(let X=0;X<q.count;X++){const j=X*M;v===!0&&(r.fromBufferAttribute(q,X),R[W+j+0]=r.x,R[W+j+1]=r.y,R[W+j+2]=r.z,R[W+j+3]=0),x===!0&&(r.fromBufferAttribute(P,X),R[W+j+4]=r.x,R[W+j+5]=r.y,R[W+j+6]=r.z,R[W+j+7]=0),p===!0&&(r.fromBufferAttribute(Y,X),R[W+j+8]=r.x,R[W+j+9]=r.y,R[W+j+10]=r.z,R[W+j+11]=Y.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new Tt(L,b)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Gd(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Xo extends ve{constructor(t,e,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:pi,h!==pi&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=vi),n===void 0&&h===Fi&&(n=Bi),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qo=new ve,Yo=new Xo(1,1);Yo.compareFunction=Po;const jo=new Io,Ko=new Cc,Zo=new Vo,Ya=[],ja=[],Ka=new Float32Array(16),Za=new Float32Array(9),$a=new Float32Array(4);function Ei(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ya[r];if(s===void 0&&(s=new Float32Array(r),Ya[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pr(i,t){let e=ja[t];e===void 0&&(e=new Int32Array(t),ja[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;$a.set(n),i.uniformMatrix2fv(this.addr,!1,$a),oe(e,n)}}function Kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Za.set(n),i.uniformMatrix3fv(this.addr,!1,Za),oe(e,n)}}function Zd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Ka.set(n),i.uniformMatrix4fv(this.addr,!1,Ka),oe(e,n)}}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function af(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Yo:qo;e.setTexture2D(t||s,r)}function of(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ko,r)}function lf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Zo,r)}function cf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||jo,r)}function uf(i){switch(i){case 5126:return Wd;case 35664:return Xd;case 35665:return qd;case 35666:return Yd;case 35674:return jd;case 35675:return Kd;case 35676:return Zd;case 5124:case 35670:return $d;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return tf;case 5125:return ef;case 36294:return nf;case 36295:return rf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}function hf(i,t){i.uniform1fv(this.addr,t)}function df(i,t){const e=Ei(t,this.size,2);i.uniform2fv(this.addr,e)}function ff(i,t){const e=Ei(t,this.size,3);i.uniform3fv(this.addr,e)}function pf(i,t){const e=Ei(t,this.size,4);i.uniform4fv(this.addr,e)}function mf(i,t){const e=Ei(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gf(i,t){const e=Ei(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _f(i,t){const e=Ei(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vf(i,t){i.uniform1iv(this.addr,t)}function xf(i,t){i.uniform2iv(this.addr,t)}function Mf(i,t){i.uniform3iv(this.addr,t)}function Sf(i,t){i.uniform4iv(this.addr,t)}function Ef(i,t){i.uniform1uiv(this.addr,t)}function yf(i,t){i.uniform2uiv(this.addr,t)}function Tf(i,t){i.uniform3uiv(this.addr,t)}function bf(i,t){i.uniform4uiv(this.addr,t)}function Af(i,t,e){const n=this.cache,r=t.length,s=Pr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||qo,s[o])}function wf(i,t,e){const n=this.cache,r=t.length,s=Pr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ko,s[o])}function Rf(i,t,e){const n=this.cache,r=t.length,s=Pr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Zo,s[o])}function Cf(i,t,e){const n=this.cache,r=t.length,s=Pr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||jo,s[o])}function Pf(i){switch(i){case 5126:return hf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return Ef;case 36294:return yf;case 36295:return Tf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Cf}}class Lf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uf(e.type)}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pf(e.type)}}class If{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const us=/(\w+)(\])?(\[|\.)?/g;function Ja(i,t){i.seq.push(t),i.map[t.id]=t}function Uf(i,t,e){const n=i.name,r=n.length;for(us.lastIndex=0;;){const s=us.exec(n),o=us.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ja(e,c===void 0?new Lf(a,i,t):new Df(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new If(a),Ja(e,u)),e=u}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Uf(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Qa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Nf=37297;let Ff=0;function Of(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Bf(i){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(i);let n;switch(t===e?n="":t===yr&&e===Er?n="LinearDisplayP3ToLinearSRGB":t===Er&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),i){case wn:case Rr:return[n,"LinearTransferOETF"];case Oe:case Ps:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function to(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Of(i.getShaderSource(t),o)}else return r}function zf(i,t){const e=Bf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hf(i,t){let e;switch(t){case ql:e="Linear";break;case Yl:e="Reinhard";break;case jl:e="OptimizedCineon";break;case Kl:e="ACESFilmic";break;case $l:e="AgX";break;case Jl:e="Neutral";break;case Zl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function Vf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Li(i){return i!==""}function eo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function no(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ts(i){return i.replace(Wf,qf)}const Xf=new Map;function qf(i,t){let e=Ut[t];if(e===void 0){const n=Xf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ts(e)}const Yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function io(i){return i.replace(Yf,jf)}function jf(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ro(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function Zf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $f(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Jf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cs:t="ENVMAP_BLENDING_MULTIPLY";break;case Wl:t="ENVMAP_BLENDING_MIX";break;case Xl:t="ENVMAP_BLENDING_ADD";break}return t}function Qf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Kf(e),c=Zf(e),h=$f(e),u=Jf(e),d=Qf(e),m=kf(e),v=Vf(s),x=r.createProgram();let p,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Li).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(p=[ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Hf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,zf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),o=Ts(o),o=eo(o,e),o=no(o,e),a=Ts(a),a=eo(a,e),a=no(a,e),o=io(o),a=io(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=T+p+o,A=T+f+a,L=Qa(r,r.VERTEX_SHADER,E),b=Qa(r,r.FRAGMENT_SHADER,A);r.attachShader(x,L),r.attachShader(x,b),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(D){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(x).trim(),P=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(b).trim();let W=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,L,b);else{const j=to(r,L,"vertex"),B=to(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+j+`
`+B)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||Y==="")&&(X=!1);X&&(D.diagnostics={runnable:W,programLog:q,vertexShader:{log:P,prefix:p},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(L),r.deleteShader(b),C=new vr(r,x),M=Gf(r,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Nf)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=b,this}let ep=0;class np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ip(t),e.set(t,n)),n}}class ip{constructor(t){this.id=ep++,this.code=t,this.usedTimes=0}}function rp(i,t,e,n,r,s,o){const a=new No,l=new np,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,_,D,q,P){const Y=q.fog,W=P.geometry,X=M.isMeshStandardMaterial?q.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),B=j&&j.mapping===Ar?j.image.height:null,Z=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=K!==void 0?K.length:0;let ft=0;W.morphAttributes.position!==void 0&&(ft=1),W.morphAttributes.normal!==void 0&&(ft=2),W.morphAttributes.color!==void 0&&(ft=3);let _t,k,J,at;if(Z){const Wt=Ve[Z];_t=Wt.vertexShader,k=Wt.fragmentShader}else _t=M.vertexShader,k=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),at=l.getFragmentShaderID(M);const nt=i.getRenderTarget(),bt=P.isInstancedMesh===!0,Et=P.isBatchedMesh===!0,N=!!M.map,Gt=!!M.matcap,mt=!!j,yt=!!M.aoMap,dt=!!M.lightMap,zt=!!M.bumpMap,Ct=!!M.normalMap,Ht=!!M.displacementMap,$t=!!M.emissiveMap,w=!!M.metalnessMap,S=!!M.roughnessMap,G=M.anisotropy>0,$=M.clearcoat>0,tt=M.dispersion>0,et=M.iridescence>0,xt=M.sheen>0,ct=M.transmission>0,lt=G&&!!M.anisotropyMap,At=$&&!!M.clearcoatMap,rt=$&&!!M.clearcoatNormalMap,vt=$&&!!M.clearcoatRoughnessMap,kt=et&&!!M.iridescenceMap,Mt=et&&!!M.iridescenceThicknessMap,ht=xt&&!!M.sheenColorMap,Pt=xt&&!!M.sheenRoughnessMap,Ft=!!M.specularMap,qt=!!M.specularColorMap,Dt=!!M.specularIntensityMap,g=ct&&!!M.transmissionMap,I=ct&&!!M.thicknessMap,O=!!M.gradientMap,Q=!!M.alphaMap,it=M.alphaTest>0,Lt=!!M.alphaHash,Ot=!!M.extensions;let Qt=Tn;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Qt=i.toneMapping);const le={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:k,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Et,instancing:bt,instancingColor:bt&&P.instanceColor!==null,instancingMorph:bt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:wn,alphaToCoverage:!!M.alphaToCoverage,map:N,matcap:Gt,envMap:mt,envMapMode:mt&&j.mapping,envMapCubeUVHeight:B,aoMap:yt,lightMap:dt,bumpMap:zt,normalMap:Ct,displacementMap:d&&Ht,emissiveMap:$t,normalMapObjectSpace:Ct&&M.normalMapType===dc,normalMapTangentSpace:Ct&&M.normalMapType===Co,metalnessMap:w,roughnessMap:S,anisotropy:G,anisotropyMap:lt,clearcoat:$,clearcoatMap:At,clearcoatNormalMap:rt,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:Mt,sheen:xt,sheenColorMap:ht,sheenRoughnessMap:Pt,specularMap:Ft,specularColorMap:qt,specularIntensityMap:Dt,transmission:ct,transmissionMap:g,thicknessMap:I,gradientMap:O,opaque:M.transparent===!1&&M.blending===fi&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:it,alphaHash:Lt,combine:M.combine,mapUv:N&&x(M.map.channel),aoMapUv:yt&&x(M.aoMap.channel),lightMapUv:dt&&x(M.lightMap.channel),bumpMapUv:zt&&x(M.bumpMap.channel),normalMapUv:Ct&&x(M.normalMap.channel),displacementMapUv:Ht&&x(M.displacementMap.channel),emissiveMapUv:$t&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:lt&&x(M.anisotropyMap.channel),clearcoatMapUv:At&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(M.sheenRoughnessMap.channel),specularMapUv:Ft&&x(M.specularMap.channel),specularColorMapUv:qt&&x(M.specularColorMap.channel),specularIntensityMapUv:Dt&&x(M.specularIntensityMap.channel),transmissionMapUv:g&&x(M.transmissionMap.channel),thicknessMapUv:I&&x(M.thicknessMap.channel),alphaMapUv:Q&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ct||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&(N||Q),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:N&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===Kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ge,flipSided:M.side===Se,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ot&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)_.push(D),_.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(T(_,M),E(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function T(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function E(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),M.push(a.mask)}function A(M){const _=v[M.type];let D;if(_){const q=Ve[_];D=kc.clone(q.uniforms)}else D=M.uniforms;return D}function L(M,_){let D;for(let q=0,P=h.length;q<P;q++){const Y=h[q];if(Y.cacheKey===_){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new tp(i,_,M,s),h.push(D)),D}function b(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:L,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:C}}function sp(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function so(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ao(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,v,x,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:x,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=x,f.group=p),t++,f}function a(u,d,m,v,x,p){const f=o(u,d,m,v,x,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(u,d,m,v,x,p){const f=o(u,d,m,v,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||ap),n.length>1&&n.sort(d||so),r.length>1&&r.sort(d||so)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function op(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new ao,i.set(n,[o])):r>=s.length?(o=new ao,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Vt};break;case"SpotLight":e={position:new F,direction:new F,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function cp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let up=0;function hp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dp(i){const t=new lp,e=cp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const r=new F,s=new te,o=new te;function a(c,h){let u=0,d=0,m=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let v=0,x=0,p=0,f=0,T=0,E=0,A=0,L=0,b=0,R=0,C=0;c.sort(hp);const M=h===!0?Math.PI:1;for(let D=0,q=c.length;D<q;D++){const P=c[D],Y=P.color,W=P.intensity,X=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=Y.r*W*M,d+=Y.g*W*M,m+=Y.b*W*M;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],W);C++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const Z=P.shadow,K=e.get(P);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.directionalShadow[v]=K,n.directionalShadowMap[v]=j,n.directionalShadowMatrix[v]=P.shadow.matrix,E++}n.directional[v]=B,v++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(Y).multiplyScalar(W*M),B.distance=X,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[p]=B;const Z=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Z.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[p]=Z.matrix,P.castShadow){const K=e.get(P);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.spotShadow[p]=K,n.spotShadowMap[p]=j,L++}p++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(Y).multiplyScalar(W),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=B,f++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*M),B.distance=P.distance,B.decay=P.decay,P.castShadow){const Z=P.shadow,K=e.get(P);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=j,n.pointShadowMatrix[x]=P.shadow.matrix,A++}n.point[x]=B,x++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(W*M),B.groundColor.copy(P.groundColor).multiplyScalar(W*M),n.hemi[T]=B,T++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=m;const _=n.hash;(_.directionalLength!==v||_.pointLength!==x||_.spotLength!==p||_.rectAreaLength!==f||_.hemiLength!==T||_.numDirectionalShadows!==E||_.numPointShadows!==A||_.numSpotShadows!==L||_.numSpotMaps!==b||_.numLightProbes!==C)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=f,n.point.length=x,n.hemi.length=T,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=L+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,_.directionalLength=v,_.pointLength=x,_.spotLength=p,_.rectAreaLength=f,_.hemiLength=T,_.numDirectionalShadows=E,_.numPointShadows=A,_.numSpotShadows=L,_.numSpotMaps=b,_.numLightProbes=C,n.version=up++)}function l(c,h){let u=0,d=0,m=0,v=0,x=0;const p=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const E=c[f];if(E.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),u++}else if(E.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function oo(i){const t=new dp(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(h){t.setup(e,h)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fp(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new oo(i),t.set(r,[a])):s>=o.length?(a=new oo(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class pp extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mp extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_p=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vp(i,t,e){let n=new Ds;const r=new Tt,s=new Tt,o=new ue,a=new pp({depthPacking:hc}),l=new mp,c={},h=e.maxTextureSize,u={[on]:Se,[Se]:on,[Ge]:Ge},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:gp,fragmentShader:_p}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new He(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let f=this.type;this.render=function(b,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),q=i.state;q.setBlending(yn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const P=f!==en&&this.type===en,Y=f===en&&this.type!==en;for(let W=0,X=b.length;W<X;W++){const j=b[W],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||P===!0||Y===!0){const st=this.type!==en?{minFilter:Me,magFilter:Me}:{};B.map!==null&&B.map.dispose(),B.map=new Gn(r.x,r.y,st),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const K=B.getViewportCount();for(let st=0;st<K;st++){const ft=B.getViewport(st);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),q.viewport(o),B.updateMatrices(j,st),n=B.getFrustum(),A(R,C,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===en&&T(B,C),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,_,D)};function T(b,R){const C=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gn(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,C,m,x,null)}function E(b,R,C,M){let _=null;const D=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)_=D;else if(_=C.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=_.uuid,P=R.uuid;let Y=c[q];Y===void 0&&(Y={},c[q]=Y);let W=Y[P];W===void 0&&(W=_.clone(),Y[P]=W,R.addEventListener("dispose",L)),_=W}if(_.visible=R.visible,_.wireframe=R.wireframe,M===en?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const q=i.properties.get(_);q.light=C}return _}function A(b,R,C,M,_){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===en)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const P=t.update(b),Y=b.material;if(Array.isArray(Y)){const W=P.groups;for(let X=0,j=W.length;X<j;X++){const B=W[X],Z=Y[B.materialIndex];if(Z&&Z.visible){const K=E(b,Z,M,_);b.onBeforeShadow(i,b,R,C,P,K,B),i.renderBufferDirect(C,null,P,K,b,B),b.onAfterShadow(i,b,R,C,P,K,B)}}}else if(Y.visible){const W=E(b,Y,M,_);b.onBeforeShadow(i,b,R,C,P,W,null),i.renderBufferDirect(C,null,P,W,b,null),b.onAfterShadow(i,b,R,C,P,W,null)}}const q=b.children;for(let P=0,Y=q.length;P<Y;P++)A(q[P],R,C,M,_)}function L(b){b.target.removeEventListener("dispose",L);for(const C in c){const M=c[C],_=b.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}function xp(i){function t(){let g=!1;const I=new ue;let O=null;const Q=new ue(0,0,0,0);return{setMask:function(it){O!==it&&!g&&(i.colorMask(it,it,it,it),O=it)},setLocked:function(it){g=it},setClear:function(it,Lt,Ot,Qt,le){le===!0&&(it*=Qt,Lt*=Qt,Ot*=Qt),I.set(it,Lt,Ot,Qt),Q.equals(I)===!1&&(i.clearColor(it,Lt,Ot,Qt),Q.copy(I))},reset:function(){g=!1,O=null,Q.set(-1,0,0,0)}}}function e(){let g=!1,I=null,O=null,Q=null;return{setTest:function(it){it?at(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(it){I!==it&&!g&&(i.depthMask(it),I=it)},setFunc:function(it){if(O!==it){switch(it){case Ol:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Hl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=it}},setLocked:function(it){g=it},setClear:function(it){Q!==it&&(i.clearDepth(it),Q=it)},reset:function(){g=!1,I=null,O=null,Q=null}}}function n(){let g=!1,I=null,O=null,Q=null,it=null,Lt=null,Ot=null,Qt=null,le=null;return{setTest:function(Wt){g||(Wt?at(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(Wt){I!==Wt&&!g&&(i.stencilMask(Wt),I=Wt)},setFunc:function(Wt,ee,jt){(O!==Wt||Q!==ee||it!==jt)&&(i.stencilFunc(Wt,ee,jt),O=Wt,Q=ee,it=jt)},setOp:function(Wt,ee,jt){(Lt!==Wt||Ot!==ee||Qt!==jt)&&(i.stencilOp(Wt,ee,jt),Lt=Wt,Ot=ee,Qt=jt)},setLocked:function(Wt){g=Wt},setClear:function(Wt){le!==Wt&&(i.clearStencil(Wt),le=Wt)},reset:function(){g=!1,I=null,O=null,Q=null,it=null,Lt=null,Ot=null,Qt=null,le=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,v=!1,x=null,p=null,f=null,T=null,E=null,A=null,L=null,b=new Vt(0,0,0),R=0,C=!1,M=null,_=null,D=null,q=null,P=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=X>=2);let B=null,Z={};const K=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),ft=new ue().fromArray(K),_t=new ue().fromArray(st);function k(g,I,O,Q){const it=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(g,Lt),i.texParameteri(g,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(g,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<O;Ot++)g===i.TEXTURE_3D||g===i.TEXTURE_2D_ARRAY?i.texImage3D(I,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(I+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Lt}const J={};J[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),at(i.DEPTH_TEST),s.setFunc(Mr),zt(!1),Ct(Vs),at(i.CULL_FACE),yt(yn);function at(g){c[g]!==!0&&(i.enable(g),c[g]=!0)}function nt(g){c[g]!==!1&&(i.disable(g),c[g]=!1)}function bt(g,I){return h[g]!==I?(i.bindFramebuffer(g,I),h[g]=I,g===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=I),g===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=I),!0):!1}function Et(g,I){let O=d,Q=!1;if(g){O=u.get(I),O===void 0&&(O=[],u.set(I,O));const it=g.textures;if(O.length!==it.length||O[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,Ot=it.length;Lt<Ot;Lt++)O[Lt]=i.COLOR_ATTACHMENT0+Lt;O.length=it.length,Q=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,Q=!0);Q&&i.drawBuffers(O)}function N(g){return m!==g?(i.useProgram(g),m=g,!0):!1}const Gt={[Bn]:i.FUNC_ADD,[Ml]:i.FUNC_SUBTRACT,[Sl]:i.FUNC_REVERSE_SUBTRACT};Gt[El]=i.MIN,Gt[yl]=i.MAX;const mt={[Tl]:i.ZERO,[bl]:i.ONE,[Al]:i.SRC_COLOR,[_s]:i.SRC_ALPHA,[Dl]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[Rl]:i.DST_ALPHA,[wl]:i.ONE_MINUS_SRC_COLOR,[vs]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Ul]:i.ONE_MINUS_CONSTANT_COLOR,[Nl]:i.CONSTANT_ALPHA,[Fl]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(g,I,O,Q,it,Lt,Ot,Qt,le,Wt){if(g===yn){v===!0&&(nt(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),g!==xl){if(g!==x||Wt!==C){if((p!==Bn||E!==Bn)&&(i.blendEquation(i.FUNC_ADD),p=Bn,E=Bn),Wt)switch(g){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gs:i.blendFunc(i.ONE,i.ONE);break;case Ws:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ws:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}f=null,T=null,A=null,L=null,b.set(0,0,0),R=0,x=g,C=Wt}return}it=it||I,Lt=Lt||O,Ot=Ot||Q,(I!==p||it!==E)&&(i.blendEquationSeparate(Gt[I],Gt[it]),p=I,E=it),(O!==f||Q!==T||Lt!==A||Ot!==L)&&(i.blendFuncSeparate(mt[O],mt[Q],mt[Lt],mt[Ot]),f=O,T=Q,A=Lt,L=Ot),(Qt.equals(b)===!1||le!==R)&&(i.blendColor(Qt.r,Qt.g,Qt.b,le),b.copy(Qt),R=le),x=g,C=!1}function dt(g,I){g.side===Ge?nt(i.CULL_FACE):at(i.CULL_FACE);let O=g.side===Se;I&&(O=!O),zt(O),g.blending===fi&&g.transparent===!1?yt(yn):yt(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),s.setFunc(g.depthFunc),s.setTest(g.depthTest),s.setMask(g.depthWrite),r.setMask(g.colorWrite);const Q=g.stencilWrite;o.setTest(Q),Q&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),$t(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(g){M!==g&&(g?i.frontFace(i.CW):i.frontFace(i.CCW),M=g)}function Ct(g){g!==gl?(at(i.CULL_FACE),g!==_&&(g===Vs?i.cullFace(i.BACK):g===_l?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),_=g}function Ht(g){g!==D&&(W&&i.lineWidth(g),D=g)}function $t(g,I,O){g?(at(i.POLYGON_OFFSET_FILL),(q!==I||P!==O)&&(i.polygonOffset(I,O),q=I,P=O)):nt(i.POLYGON_OFFSET_FILL)}function w(g){g?at(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function S(g){g===void 0&&(g=i.TEXTURE0+Y-1),B!==g&&(i.activeTexture(g),B=g)}function G(g,I,O){O===void 0&&(B===null?O=i.TEXTURE0+Y-1:O=B);let Q=Z[O];Q===void 0&&(Q={type:void 0,texture:void 0},Z[O]=Q),(Q.type!==g||Q.texture!==I)&&(B!==O&&(i.activeTexture(O),B=O),i.bindTexture(g,I||J[g]),Q.type=g,Q.texture=I)}function $(){const g=Z[B];g!==void 0&&g.type!==void 0&&(i.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function xt(){try{i.texSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ct(){try{i.texSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ht(g){ft.equals(g)===!1&&(i.scissor(g.x,g.y,g.z,g.w),ft.copy(g))}function Pt(g){_t.equals(g)===!1&&(i.viewport(g.x,g.y,g.z,g.w),_t.copy(g))}function Ft(g,I){let O=l.get(I);O===void 0&&(O=new WeakMap,l.set(I,O));let Q=O.get(g);Q===void 0&&(Q=i.getUniformBlockIndex(I,g.name),O.set(g,Q))}function qt(g,I){const Q=l.get(I).get(g);a.get(I)!==Q&&(i.uniformBlockBinding(I,Q,g.__bindingPointIndex),a.set(I,Q))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},B=null,Z={},h={},u=new WeakMap,d=[],m=null,v=!1,x=null,p=null,f=null,T=null,E=null,A=null,L=null,b=new Vt(0,0,0),R=0,C=!1,M=null,_=null,D=null,q=null,P=null,ft.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:at,disable:nt,bindFramebuffer:bt,drawBuffers:Et,useProgram:N,setBlending:yt,setMaterial:dt,setFlipSided:zt,setCullFace:Ct,setLineWidth:Ht,setPolygonOffset:$t,setScissorTest:w,activeTexture:S,bindTexture:G,unbindTexture:$,compressedTexImage2D:tt,compressedTexImage3D:et,texImage2D:kt,texImage3D:Mt,updateUBOMapping:Ft,uniformBlockBinding:qt,texStorage2D:rt,texStorage3D:vt,texSubImage2D:xt,texSubImage3D:ct,compressedTexSubImage2D:lt,compressedTexSubImage3D:At,scissor:ht,viewport:Pt,reset:Dt}}function Mp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,S){return m?new OffscreenCanvas(w,S):Oi("canvas")}function x(w,S,G){let $=1;const tt=$t(w);if((tt.width>G||tt.height>G)&&($=G/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const et=Math.floor($*tt.width),xt=Math.floor($*tt.height);u===void 0&&(u=v(et,xt));const ct=S?v(et,xt):u;return ct.width=et,ct.height=xt,ct.getContext("2d").drawImage(w,0,0,et,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+et+"x"+xt+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==Me&&w.minFilter!==Be}function f(w){i.generateMipmap(w)}function T(w,S,G,$,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let et=S;if(S===i.RED&&(G===i.FLOAT&&(et=i.R32F),G===i.HALF_FLOAT&&(et=i.R16F),G===i.UNSIGNED_BYTE&&(et=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.R8UI),G===i.UNSIGNED_SHORT&&(et=i.R16UI),G===i.UNSIGNED_INT&&(et=i.R32UI),G===i.BYTE&&(et=i.R8I),G===i.SHORT&&(et=i.R16I),G===i.INT&&(et=i.R32I)),S===i.RG&&(G===i.FLOAT&&(et=i.RG32F),G===i.HALF_FLOAT&&(et=i.RG16F),G===i.UNSIGNED_BYTE&&(et=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RG8UI),G===i.UNSIGNED_SHORT&&(et=i.RG16UI),G===i.UNSIGNED_INT&&(et=i.RG32UI),G===i.BYTE&&(et=i.RG8I),G===i.SHORT&&(et=i.RG16I),G===i.INT&&(et=i.RG32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),S===i.RGBA){const xt=tt?Sr:Yt.getTransfer($);G===i.FLOAT&&(et=i.RGBA32F),G===i.HALF_FLOAT&&(et=i.RGBA16F),G===i.UNSIGNED_BYTE&&(et=xt===Kt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function E(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Me&&w.minFilter!==Be?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&h.delete(S)}function L(w){const S=w.target;S.removeEventListener("dispose",L),C(S)}function b(w){const S=n.get(w);if(S.__webglInit===void 0)return;const G=w.source,$=d.get(G);if($){const tt=$[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(w),Object.keys($).length===0&&d.delete(G)}n.remove(w)}function R(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const G=w.source,$=d.get(G);delete $[S.__cacheKey],o.memory.textures--}function C(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let tt=0;tt<S.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let $=0,tt=G.length;$<tt;$++){const et=n.get(G[$]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(w)}let M=0;function _(){M=0}function D(){const w=M;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),M+=1,w}function q(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function P(w,S){const G=n.get(w);if(w.isVideoTexture&&Ct(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(G,w,S);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function Y(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){ft(G,w,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function W(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){ft(G,w,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function X(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){_t(G,w,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const j={[Ss]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Es]:i.MIRRORED_REPEAT},B={[Me]:i.NEAREST,[Ql]:i.NEAREST_MIPMAP_NEAREST,[qi]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Z={[fc]:i.NEVER,[xc]:i.ALWAYS,[pc]:i.LESS,[Po]:i.LEQUAL,[mc]:i.EQUAL,[vc]:i.GEQUAL,[gc]:i.GREATER,[_c]:i.NOTEQUAL};function K(w,S){if(S.type===Sn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Be||S.magFilter===Ur||S.magFilter===qi||S.magFilter===kn||S.minFilter===Be||S.minFilter===Ur||S.minFilter===qi||S.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,B[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,B[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Me||S.minFilter!==qi&&S.minFilter!==kn||S.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function st(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const $=S.source;let tt=d.get($);tt===void 0&&(tt={},d.set($,tt));const et=q(S);if(et!==w.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[et].usedTimes++;const xt=tt[w.__cacheKey];xt!==void 0&&(tt[w.__cacheKey].usedTimes--,xt.usedTimes===0&&R(S)),w.__cacheKey=et,w.__webglTexture=tt[et].texture}return G}function ft(w,S,G){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const tt=st(w,S),et=S.source;e.bindTexture($,w.__webglTexture,i.TEXTURE0+G);const xt=n.get(et);if(et.version!==xt.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const ct=Yt.getPrimaries(Yt.workingColorSpace),lt=S.colorSpace===Mn?null:Yt.getPrimaries(S.colorSpace),At=S.colorSpace===Mn||ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let rt=x(S.image,!1,r.maxTextureSize);rt=Ht(S,rt);const vt=s.convert(S.format,S.colorSpace),kt=s.convert(S.type);let Mt=T(S.internalFormat,vt,kt,S.colorSpace,S.isVideoTexture);K($,S);let ht;const Pt=S.mipmaps,Ft=S.isVideoTexture!==!0,qt=xt.__version===void 0||tt===!0,Dt=et.dataReady,g=E(S,rt);if(S.isDepthTexture)Mt=i.DEPTH_COMPONENT16,S.type===Sn?Mt=i.DEPTH_COMPONENT32F:S.type===vi?Mt=i.DEPTH_COMPONENT24:S.type===Bi&&(Mt=i.DEPTH24_STENCIL8),qt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Mt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,rt.width,rt.height,0,vt,kt,null));else if(S.isDataTexture)if(Pt.length>0){Ft&&qt&&e.texStorage2D(i.TEXTURE_2D,g,Mt,Pt[0].width,Pt[0].height);for(let I=0,O=Pt.length;I<O;I++)ht=Pt[I],Ft?Dt&&e.texSubImage2D(i.TEXTURE_2D,I,0,0,ht.width,ht.height,vt,kt,ht.data):e.texImage2D(i.TEXTURE_2D,I,Mt,ht.width,ht.height,0,vt,kt,ht.data);S.generateMipmaps=!1}else Ft?(qt&&e.texStorage2D(i.TEXTURE_2D,g,Mt,rt.width,rt.height),Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,vt,kt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,rt.width,rt.height,0,vt,kt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,g,Mt,Pt[0].width,Pt[0].height,rt.depth);for(let I=0,O=Pt.length;I<O;I++)ht=Pt[I],S.format!==Xe?vt!==null?Ft?Dt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,I,0,0,0,ht.width,ht.height,rt.depth,vt,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,I,Mt,ht.width,ht.height,rt.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,I,0,0,0,ht.width,ht.height,rt.depth,vt,kt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,I,Mt,ht.width,ht.height,rt.depth,0,vt,kt,ht.data)}else{Ft&&qt&&e.texStorage2D(i.TEXTURE_2D,g,Mt,Pt[0].width,Pt[0].height);for(let I=0,O=Pt.length;I<O;I++)ht=Pt[I],S.format!==Xe?vt!==null?Ft?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,I,0,0,ht.width,ht.height,vt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,I,Mt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?Dt&&e.texSubImage2D(i.TEXTURE_2D,I,0,0,ht.width,ht.height,vt,kt,ht.data):e.texImage2D(i.TEXTURE_2D,I,Mt,ht.width,ht.height,0,vt,kt,ht.data)}else if(S.isDataArrayTexture)Ft?(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,g,Mt,rt.width,rt.height,rt.depth),Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,kt,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,rt.width,rt.height,rt.depth,0,vt,kt,rt.data);else if(S.isData3DTexture)Ft?(qt&&e.texStorage3D(i.TEXTURE_3D,g,Mt,rt.width,rt.height,rt.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,kt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,rt.width,rt.height,rt.depth,0,vt,kt,rt.data);else if(S.isFramebufferTexture){if(qt)if(Ft)e.texStorage2D(i.TEXTURE_2D,g,Mt,rt.width,rt.height);else{let I=rt.width,O=rt.height;for(let Q=0;Q<g;Q++)e.texImage2D(i.TEXTURE_2D,Q,Mt,I,O,0,vt,kt,null),I>>=1,O>>=1}}else if(Pt.length>0){if(Ft&&qt){const I=$t(Pt[0]);e.texStorage2D(i.TEXTURE_2D,g,Mt,I.width,I.height)}for(let I=0,O=Pt.length;I<O;I++)ht=Pt[I],Ft?Dt&&e.texSubImage2D(i.TEXTURE_2D,I,0,0,vt,kt,ht):e.texImage2D(i.TEXTURE_2D,I,Mt,vt,kt,ht);S.generateMipmaps=!1}else if(Ft){if(qt){const I=$t(rt);e.texStorage2D(i.TEXTURE_2D,g,Mt,I.width,I.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,kt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,vt,kt,rt);p(S)&&f($),xt.__version=et.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function _t(w,S,G){if(S.image.length!==6)return;const $=st(w,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);const et=n.get(tt);if(tt.version!==et.__version||$===!0){e.activeTexture(i.TEXTURE0+G);const xt=Yt.getPrimaries(Yt.workingColorSpace),ct=S.colorSpace===Mn?null:Yt.getPrimaries(S.colorSpace),lt=S.colorSpace===Mn||xt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const At=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let O=0;O<6;O++)!At&&!rt?vt[O]=x(S.image[O],!0,r.maxCubemapSize):vt[O]=rt?S.image[O].image:S.image[O],vt[O]=Ht(S,vt[O]);const kt=vt[0],Mt=s.convert(S.format,S.colorSpace),ht=s.convert(S.type),Pt=T(S.internalFormat,Mt,ht,S.colorSpace),Ft=S.isVideoTexture!==!0,qt=et.__version===void 0||$===!0,Dt=tt.dataReady;let g=E(S,kt);K(i.TEXTURE_CUBE_MAP,S);let I;if(At){Ft&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,g,Pt,kt.width,kt.height);for(let O=0;O<6;O++){I=vt[O].mipmaps;for(let Q=0;Q<I.length;Q++){const it=I[Q];S.format!==Xe?Mt!==null?Ft?Dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,0,0,it.width,it.height,Mt,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,Pt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?Dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,0,0,it.width,it.height,Mt,ht,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,Pt,it.width,it.height,0,Mt,ht,it.data)}}}else{if(I=S.mipmaps,Ft&&qt){I.length>0&&g++;const O=$t(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,g,Pt,O.width,O.height)}for(let O=0;O<6;O++)if(rt){Ft?Dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,vt[O].width,vt[O].height,Mt,ht,vt[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Pt,vt[O].width,vt[O].height,0,Mt,ht,vt[O].data);for(let Q=0;Q<I.length;Q++){const Lt=I[Q].image[O].image;Ft?Dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,0,0,Lt.width,Lt.height,Mt,ht,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,Pt,Lt.width,Lt.height,0,Mt,ht,Lt.data)}}else{Ft?Dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Mt,ht,vt[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Pt,Mt,ht,vt[O]);for(let Q=0;Q<I.length;Q++){const it=I[Q];Ft?Dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,0,0,Mt,ht,it.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,Pt,Mt,ht,it.image[O])}}}p(S)&&f(i.TEXTURE_CUBE_MAP),et.__version=tt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function k(w,S,G,$,tt,et){const xt=s.convert(G.format,G.colorSpace),ct=s.convert(G.type),lt=T(G.internalFormat,xt,ct,G.colorSpace);if(!n.get(S).__hasExternalTextures){const rt=Math.max(1,S.width>>et),vt=Math.max(1,S.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,lt,rt,vt,S.depth,0,xt,ct,null):e.texImage2D(tt,et,lt,rt,vt,0,xt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,n.get(G).__webglTexture,0,dt(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,n.get(G).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(w,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let $=i.DEPTH_COMPONENT24;if(G||zt(S)){const tt=S.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Sn?$=i.DEPTH_COMPONENT32F:tt.type===vi&&($=i.DEPTH_COMPONENT24));const et=dt(S);zt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,$,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,$,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const $=dt(S);G&&zt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,S.width,S.height):zt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const $=S.textures;for(let tt=0;tt<$.length;tt++){const et=$[tt],xt=s.convert(et.format,et.colorSpace),ct=s.convert(et.type),lt=T(et.internalFormat,xt,ct,et.colorSpace),At=dt(S);G&&zt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,lt,S.width,S.height):zt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,lt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,tt=dt(S);if(S.depthTexture.format===pi)zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(S.depthTexture.format===Fi)zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function nt(w){const S=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,w)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=i.createRenderbuffer(),J(S.__webglDepthbuffer[$],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),J(S.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(w,S,G){const $=n.get(w);S!==void 0&&k($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&nt(w)}function Et(w){const S=w.texture,G=n.get(w),$=n.get(S);w.addEventListener("dispose",L);const tt=w.textures,et=w.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),et){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let lt=0;lt<S.mipmaps.length;lt++)G.__webglFramebuffer[ct][lt]=i.createFramebuffer()}else G.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)G.__webglFramebuffer[ct]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ct=0,lt=tt.length;ct<lt;ct++){const At=n.get(tt[ct]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&zt(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const lt=tt[ct];G.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ct]);const At=s.convert(lt.format,lt.colorSpace),rt=s.convert(lt.type),vt=T(lt.internalFormat,At,rt,lt.colorSpace,w.isXRRenderTarget===!0),kt=dt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,G.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),J(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),K(i.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)k(G.__webglFramebuffer[ct][lt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,lt);else k(G.__webglFramebuffer[ct],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,lt=tt.length;ct<lt;ct++){const At=tt[ct],rt=n.get(At);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),K(i.TEXTURE_2D,At),k(G.__webglFramebuffer,w,At,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),p(At)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),K(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)k(G.__webglFramebuffer[lt],w,S,i.COLOR_ATTACHMENT0,ct,lt);else k(G.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ct,0);p(S)&&f(ct),e.unbindTexture()}w.depthBuffer&&nt(w)}function N(w){const S=w.textures;for(let G=0,$=S.length;G<$;G++){const tt=S[G];if(p(tt)){const et=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(tt).__webglTexture;e.bindTexture(et,xt),f(et),e.unbindTexture()}}}const Gt=[],mt=[];function yt(w){if(w.samples>0){if(zt(w)===!1){const S=w.textures,G=w.width,$=w.height;let tt=i.COLOR_BUFFER_BIT;const et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(w),ct=S.length>1;if(ct)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[lt]);const At=n.get(S[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,tt,i.NEAREST),l===!0&&(Gt.length=0,mt.length=0,Gt.push(i.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Gt.push(et),mt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[lt]);const At=n.get(S[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function dt(w){return Math.min(r.maxSamples,w.samples)}function zt(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Ht(w,S){const G=w.colorSpace,$=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==wn&&G!==Mn&&(Yt.getTransfer(G)===Kt?($!==Xe||tt!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function $t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=_,this.setTexture2D=P,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=bt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=zt}function Sp(i,t){function e(n,r=Mn){let s;const o=Yt.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===Eo)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===wr)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===rc)return i.RGB;if(n===Xe)return i.RGBA;if(n===sc)return i.LUMINANCE;if(n===ac)return i.LUMINANCE_ALPHA;if(n===pi)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===Ao)return i.RED_INTEGER;if(n===lc)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Or||n===Br)if(o===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qs||n===Ys||n===js||n===Ks)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===js)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zs||n===$s||n===Js)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zs||n===$s)return o===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Js)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qs||n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===ua||n===ha||n===da)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qs)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zr||n===fa||n===pa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===zr)return o===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===ma||n===ga||n===_a)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===zr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ep extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pr extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ap{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ve,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new An({vertexShader:Tp,fragmentShader:bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new He(new Cr(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class wp extends Xn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,v=null;const x=new Ap,p=e.getContextAttributes();let f=null,T=null;const E=[],A=[],L=new Tt;let b=null;const R=new Le;R.layers.enable(1),R.viewport=new ue;const C=new Le;C.layers.enable(2),C.viewport=new ue;const M=[R,C],_=new Ep;_.layers.enable(1),_.layers.enable(2);let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=E[k];return J===void 0&&(J=new hs,E[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=E[k];return J===void 0&&(J=new hs,E[k]=J),J.getGripSpace()},this.getHand=function(k){let J=E[k];return J===void 0&&(J=new hs,E[k]=J),J.getHandSpace()};function P(k){const J=A.indexOf(k.inputSource);if(J===-1)return;const at=E[J];at!==void 0&&(at.update(k.inputSource,k.frame,c||o),at.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",W);for(let k=0;k<E.length;k++){const J=A[k];J!==null&&(A[k]=null,E[k].disconnect(J))}D=null,q=null,x.reset(),t.setRenderTarget(f),m=null,d=null,u=null,r=null,T=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Gn(m.framebufferWidth,m.framebufferHeight,{format:Xe,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,at=null,nt=null;p.depth&&(nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?Fi:pi,at=p.stencil?Bi:vi);const bt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(bt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Gn(d.textureWidth,d.textureHeight,{format:Xe,type:bn,depthTexture:new Xo(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(k){for(let J=0;J<k.removed.length;J++){const at=k.removed[J],nt=A.indexOf(at);nt>=0&&(A[nt]=null,E[nt].disconnect(at))}for(let J=0;J<k.added.length;J++){const at=k.added[J];let nt=A.indexOf(at);if(nt===-1){for(let Et=0;Et<E.length;Et++)if(Et>=A.length){A.push(at),nt=Et;break}else if(A[Et]===null){A[Et]=at,nt=Et;break}if(nt===-1)break}const bt=E[nt];bt&&bt.connect(at)}}const X=new F,j=new F;function B(k,J,at){X.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(at.matrixWorld);const nt=X.distanceTo(j),bt=J.projectionMatrix.elements,Et=at.projectionMatrix.elements,N=bt[14]/(bt[10]-1),Gt=bt[14]/(bt[10]+1),mt=(bt[9]+1)/bt[5],yt=(bt[9]-1)/bt[5],dt=(bt[8]-1)/bt[0],zt=(Et[8]+1)/Et[0],Ct=N*dt,Ht=N*zt,$t=nt/(-dt+zt),w=$t*-dt;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(w),k.translateZ($t),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const S=N+$t,G=Gt+$t,$=Ct-w,tt=Ht+(nt-w),et=mt*Gt/G*S,xt=yt*Gt/G*S;k.projectionMatrix.makePerspective($,tt,et,xt,S,G),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Z(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;x.texture!==null&&(k.near=x.depthNear,k.far=x.depthFar),_.near=C.near=R.near=k.near,_.far=C.far=R.far=k.far,(D!==_.near||q!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),D=_.near,q=_.far,R.near=D,R.far=q,C.near=D,C.far=q,R.updateProjectionMatrix(),C.updateProjectionMatrix(),k.updateProjectionMatrix());const J=k.parent,at=_.cameras;Z(_,J);for(let nt=0;nt<at.length;nt++)Z(at[nt],J);at.length===2?B(_,R,C):_.projectionMatrix.copy(R.projectionMatrix),K(k,_,J)};function K(k,J,at){at===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ys*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null};let st=null;function ft(k,J){if(h=J.getViewerPose(c||o),v=J,h!==null){const at=h.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let nt=!1;at.length!==_.cameras.length&&(_.cameras.length=0,nt=!0);for(let Et=0;Et<at.length;Et++){const N=at[Et];let Gt=null;if(m!==null)Gt=m.getViewport(N);else{const yt=u.getViewSubImage(d,N);Gt=yt.viewport,Et===0&&(t.setRenderTargetTextures(T,yt.colorTexture,d.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(T))}let mt=M[Et];mt===void 0&&(mt=new Le,mt.layers.enable(Et),mt.viewport=new ue,M[Et]=mt),mt.matrix.fromArray(N.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(N.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Et===0&&(_.matrix.copy(mt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),nt===!0&&_.cameras.push(mt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Et=u.getDepthInformation(at[0]);Et&&Et.isValid&&Et.texture&&x.init(t,Et,r.renderState)}}for(let at=0;at<E.length;at++){const nt=A[at],bt=E[at];nt!==null&&bt!==void 0&&bt.update(nt,J,c||o)}x.render(t,_),st&&st(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const _t=new Go;_t.setAnimationLoop(ft),this.setAnimationLoop=function(k){st=k},this.dispose=function(){}}}const Nn=new Ye,Rp=new te;function Cp(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ho(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,T,E,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,T,E):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Se&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Se&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=t.get(f),E=T.envMap,A=T.envMapRotation;if(E&&(p.envMap.value=E,Nn.copy(A),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),p.envMapRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(Nn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const L=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*L,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=E*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Se&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const T=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Pp(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const A=E.program;n.uniformBlockBinding(T,A)}function c(T,E){let A=r[T.id];A===void 0&&(v(T),A=h(T),r[T.id]=A,T.addEventListener("dispose",p));const L=E.program;n.updateUBOMapping(T,L);const b=t.render.frame;s[T.id]!==b&&(d(T),s[T.id]=b)}function h(T){const E=u();T.__bindingPointIndex=E;const A=i.createBuffer(),L=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],A=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let b=0,R=A.length;b<R;b++){const C=Array.isArray(A[b])?A[b]:[A[b]];for(let M=0,_=C.length;M<_;M++){const D=C[M];if(m(D,b,M,L)===!0){const q=D.__offset,P=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let W=0;W<P.length;W++){const X=P[W],j=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,q+Y,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,E,A,L){const b=T.value,R=E+"_"+A;if(L[R]===void 0)return typeof b=="number"||typeof b=="boolean"?L[R]=b:L[R]=b.clone(),!0;{const C=L[R];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return L[R]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function v(T){const E=T.uniforms;let A=0;const L=16;for(let R=0,C=E.length;R<C;R++){const M=Array.isArray(E[R])?E[R]:[E[R]];for(let _=0,D=M.length;_<D;_++){const q=M[_],P=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,W=P.length;Y<W;Y++){const X=P[Y],j=x(X),B=A%L;B!==0&&L-B<j.boundary&&(A+=L-B),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=j.storage}}}const b=A%L;return b>0&&(A+=L-b),T.__size=A,T.__cache={},this}function x(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Lp{constructor(t={}){const{canvas:e=Ec(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const f=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const E=this;let A=!1,L=0,b=0,R=null,C=-1,M=null;const _=new ue,D=new ue;let q=null;const P=new Vt(0);let Y=0,W=e.width,X=e.height,j=1,B=null,Z=null;const K=new ue(0,0,W,X),st=new ue(0,0,W,X);let ft=!1;const _t=new Ds;let k=!1,J=!1;const at=new te,nt=new F,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return R===null?j:1}let N=n;function Gt(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rs}`),e.addEventListener("webglcontextlost",g,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",O,!1),N===null){const U="webgl2";if(N=Gt(U,y),N===null)throw Gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let mt,yt,dt,zt,Ct,Ht,$t,w,S,G,$,tt,et,xt,ct,lt,At,rt,vt,kt,Mt,ht,Pt,Ft;function qt(){mt=new Bd(N),mt.init(),ht=new Sp(N,mt),yt=new Dd(N,mt,t,ht),dt=new xp(N),zt=new kd(N),Ct=new sp,Ht=new Mp(N,mt,dt,Ct,yt,ht,zt),$t=new Ud(E),w=new Od(E),S=new jc(N),Pt=new Pd(N,S),G=new zd(N,S,zt,Pt),$=new Gd(N,G,S,zt),vt=new Vd(N,yt,Ht),lt=new Id(Ct),tt=new rp(E,$t,w,mt,yt,Pt,lt),et=new Cp(E,Ct),xt=new op,ct=new fp(mt),rt=new Cd(E,$t,w,dt,$,d,l),At=new vp(E,$,yt),Ft=new Pp(N,zt,yt,dt),kt=new Ld(N,mt,zt),Mt=new Hd(N,mt,zt),zt.programs=tt.programs,E.capabilities=yt,E.extensions=mt,E.properties=Ct,E.renderLists=xt,E.shadowMap=At,E.state=dt,E.info=zt}qt();const Dt=new wp(E,N);this.xr=Dt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=mt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=mt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(W,X,!1))},this.getSize=function(y){return y.set(W,X)},this.setSize=function(y,U,V=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,X=U,e.width=Math.floor(y*j),e.height=Math.floor(U*j),V===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*j,X*j).floor()},this.setDrawingBufferSize=function(y,U,V){W=y,X=U,j=V,e.width=Math.floor(y*V),e.height=Math.floor(U*V),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,U,V,z){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,U,V,z),dt.viewport(_.copy(K).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(st)},this.setScissor=function(y,U,V,z){y.isVector4?st.set(y.x,y.y,y.z,y.w):st.set(y,U,V,z),dt.scissor(D.copy(st).multiplyScalar(j).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(y){dt.setScissorTest(ft=y)},this.setOpaqueSort=function(y){B=y},this.setTransparentSort=function(y){Z=y},this.getClearColor=function(y){return y.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(y=!0,U=!0,V=!0){let z=0;if(y){let H=!1;if(R!==null){const ut=R.texture.format;H=ut===Ro||ut===wo||ut===Ao}if(H){const ut=R.texture.type,pt=ut===bn||ut===vi||ut===Eo||ut===Bi||ut===To||ut===bo,gt=rt.getClearColor(),St=rt.getClearAlpha(),wt=gt.r,It=gt.g,Bt=gt.b;pt?(m[0]=wt,m[1]=It,m[2]=Bt,m[3]=St,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=wt,v[1]=It,v[2]=Bt,v[3]=St,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT),V&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",g,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",O,!1),xt.dispose(),ct.dispose(),Ct.dispose(),$t.dispose(),w.dispose(),$.dispose(),Pt.dispose(),Ft.dispose(),tt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Wt),Dt.removeEventListener("sessionend",ee),jt.stop()};function g(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=zt.autoReset,U=At.enabled,V=At.autoUpdate,z=At.needsUpdate,H=At.type;qt(),zt.autoReset=y,At.enabled=U,At.autoUpdate=V,At.needsUpdate=z,At.type=H}function O(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){const U=y.target;U.removeEventListener("dispose",Q),it(U)}function it(y){Lt(y),Ct.remove(y)}function Lt(y){const U=Ct.get(y).programs;U!==void 0&&(U.forEach(function(V){tt.releaseProgram(V)}),y.isShaderMaterial&&tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,V,z,H,ut){U===null&&(U=bt);const pt=H.isMesh&&H.matrixWorld.determinant()<0,gt=ul(y,U,V,z,H);dt.setMaterial(z,pt);let St=V.index,wt=1;if(z.wireframe===!0){if(St=G.getWireframeAttribute(V),St===void 0)return;wt=2}const It=V.drawRange,Bt=V.attributes.position;let ne=It.start*wt,de=(It.start+It.count)*wt;ut!==null&&(ne=Math.max(ne,ut.start*wt),de=Math.min(de,(ut.start+ut.count)*wt)),St!==null?(ne=Math.max(ne,0),de=Math.min(de,St.count)):Bt!=null&&(ne=Math.max(ne,0),de=Math.min(de,Bt.count));const Ee=de-ne;if(Ee<0||Ee===1/0)return;Pt.setup(H,z,gt,V,St);let Ke,Xt=kt;if(St!==null&&(Ke=S.get(St),Xt=Mt,Xt.setIndex(Ke)),H.isMesh)z.wireframe===!0?(dt.setLineWidth(z.wireframeLinewidth*Et()),Xt.setMode(N.LINES)):Xt.setMode(N.TRIANGLES);else if(H.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),dt.setLineWidth(Rt*Et()),H.isLineSegments?Xt.setMode(N.LINES):H.isLineLoop?Xt.setMode(N.LINE_LOOP):Xt.setMode(N.LINE_STRIP)}else H.isPoints?Xt.setMode(N.POINTS):H.isSprite&&Xt.setMode(N.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?Xt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):Xt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Xt.renderInstances(ne,Ee,H.count);else if(V.isInstancedBufferGeometry){const Rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ti=Math.min(V.instanceCount,Rt);Xt.renderInstances(ne,Ee,Ti)}else Xt.render(ne,Ee)};function Ot(y,U,V){y.transparent===!0&&y.side===Ge&&y.forceSinglePass===!1?(y.side=Se,y.needsUpdate=!0,Wi(y,U,V),y.side=on,y.needsUpdate=!0,Wi(y,U,V),y.side=Ge):Wi(y,U,V)}this.compile=function(y,U,V=null){V===null&&(V=y),p=ct.get(V),p.init(U),T.push(p),V.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),y!==V&&y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(E._useLegacyLights);const z=new Set;return y.traverse(function(H){const ut=H.material;if(ut)if(Array.isArray(ut))for(let pt=0;pt<ut.length;pt++){const gt=ut[pt];Ot(gt,V,H),z.add(gt)}else Ot(ut,V,H),z.add(ut)}),T.pop(),p=null,z},this.compileAsync=function(y,U,V=null){const z=this.compile(y,U,V);return new Promise(H=>{function ut(){if(z.forEach(function(pt){Ct.get(pt).currentProgram.isReady()&&z.delete(pt)}),z.size===0){H(y);return}setTimeout(ut,10)}mt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Qt=null;function le(y){Qt&&Qt(y)}function Wt(){jt.stop()}function ee(){jt.start()}const jt=new Go;jt.setAnimationLoop(le),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(y){Qt=y,Dt.setAnimationLoop(y),y===null?jt.stop():jt.start()},Dt.addEventListener("sessionstart",Wt),Dt.addEventListener("sessionend",ee),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(U),U=Dt.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,R),p=ct.get(y,T.length),p.init(U),T.push(p),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),_t.setFromProjectionMatrix(at),J=this.localClippingEnabled,k=lt.init(this.clippingPlanes,J),x=xt.get(y,f.length),x.init(),f.push(x),ln(y,U,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(B,Z);const V=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1;V&&rt.addToRenderList(x,y),this.info.render.frame++,k===!0&&lt.beginShadows();const z=p.state.shadowsArray;At.render(z,y,U),k===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,ut=x.transmissive;if(p.setupLights(E._useLegacyLights),U.isArrayCamera){const pt=U.cameras;if(ut.length>0)for(let gt=0,St=pt.length;gt<St;gt++){const wt=pt[gt];cn(H,ut,y,wt)}V&&rt.render(y);for(let gt=0,St=pt.length;gt<St;gt++){const wt=pt[gt];Re(x,y,wt,wt.viewport)}}else ut.length>0&&cn(H,ut,y,U),V&&rt.render(y),Re(x,y,U);R!==null&&(Ht.updateMultisampleRenderTarget(R),Ht.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(E,y,U),Pt.resetDefaultState(),C=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],k===!0&&lt.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ln(y,U,V,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||_t.intersectsSprite(y)){z&&nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(at);const pt=$.update(y),gt=y.material;gt.visible&&x.push(y,pt,gt,V,nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||_t.intersectsObject(y))){const pt=$.update(y),gt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),nt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),nt.copy(pt.boundingSphere.center)),nt.applyMatrix4(y.matrixWorld).applyMatrix4(at)),Array.isArray(gt)){const St=pt.groups;for(let wt=0,It=St.length;wt<It;wt++){const Bt=St[wt],ne=gt[Bt.materialIndex];ne&&ne.visible&&x.push(y,pt,ne,V,nt.z,Bt)}}else gt.visible&&x.push(y,pt,gt,V,nt.z,null)}}const ut=y.children;for(let pt=0,gt=ut.length;pt<gt;pt++)ln(ut[pt],U,V,z)}function Re(y,U,V,z){const H=y.opaque,ut=y.transmissive,pt=y.transparent;p.setupLightsView(V),k===!0&&lt.setGlobalState(E.clippingPlanes,V),z&&dt.viewport(_.copy(z)),H.length>0&&je(H,U,V),ut.length>0&&je(ut,U,V),pt.length>0&&je(pt,U,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function cn(y,U,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Gn(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?wr:bn,minFilter:kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ut=p.state.transmissionRenderTarget[z.id],pt=z.viewport||_;ut.setSize(pt.z,pt.w);const gt=E.getRenderTarget();E.setRenderTarget(ut),E.getClearColor(P),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear();const St=E.toneMapping;E.toneMapping=Tn;const wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),k===!0&&lt.setGlobalState(E.clippingPlanes,z),je(y,V,z),Ht.updateMultisampleRenderTarget(ut),Ht.updateRenderTargetMipmap(ut),mt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Bt=0,ne=U.length;Bt<ne;Bt++){const de=U[Bt],Ee=de.object,Ke=de.geometry,Xt=de.material,Rt=de.group;if(Xt.side===Ge&&Ee.layers.test(z.layers)){const Ti=Xt.side;Xt.side=Se,Xt.needsUpdate=!0,yi(Ee,V,z,Ke,Xt,Rt),Xt.side=Ti,Xt.needsUpdate=!0,It=!0}}It===!0&&(Ht.updateMultisampleRenderTarget(ut),Ht.updateRenderTargetMipmap(ut))}E.setRenderTarget(gt),E.setClearColor(P,Y),wt!==void 0&&(z.viewport=wt),E.toneMapping=St}function je(y,U,V){const z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ut=y.length;H<ut;H++){const pt=y[H],gt=pt.object,St=pt.geometry,wt=z===null?pt.material:z,It=pt.group;gt.layers.test(V.layers)&&yi(gt,U,V,St,wt,It)}}function yi(y,U,V,z,H,ut){y.onBeforeRender(E,U,V,z,H,ut),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(E,U,V,z,y,ut),H.transparent===!0&&H.side===Ge&&H.forceSinglePass===!1?(H.side=Se,H.needsUpdate=!0,E.renderBufferDirect(V,U,z,H,y,ut),H.side=on,H.needsUpdate=!0,E.renderBufferDirect(V,U,z,H,y,ut),H.side=Ge):E.renderBufferDirect(V,U,z,H,y,ut),y.onAfterRender(E,U,V,z,H,ut)}function Wi(y,U,V){U.isScene!==!0&&(U=bt);const z=Ct.get(y),H=p.state.lights,ut=p.state.shadowsArray,pt=H.state.version,gt=tt.getParameters(y,H.state,ut,U,V),St=tt.getProgramCacheKey(gt);let wt=z.programs;z.environment=y.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(y.isMeshStandardMaterial?w:$t).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",Q),wt=new Map,z.programs=wt);let It=wt.get(St);if(It!==void 0){if(z.currentProgram===It&&z.lightsStateVersion===pt)return zs(y,gt),It}else gt.uniforms=tt.getUniforms(y),y.onBuild(V,gt,E),y.onBeforeCompile(gt,E),It=tt.acquireProgram(gt,St),wt.set(St,It),z.uniforms=gt.uniforms;const Bt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Bt.clippingPlanes=lt.uniform),zs(y,gt),z.needsLights=dl(y),z.lightsStateVersion=pt,z.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.currentProgram=It,z.uniformsList=null,It}function Bs(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=vr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function zs(y,U){const V=Ct.get(y);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function ul(y,U,V,z,H){U.isScene!==!0&&(U=bt),Ht.resetTextureUnits();const ut=U.fog,pt=z.isMeshStandardMaterial?U.environment:null,gt=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wn,St=(z.isMeshStandardMaterial?w:$t).get(z.envMap||pt),wt=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,It=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Bt=!!V.morphAttributes.position,ne=!!V.morphAttributes.normal,de=!!V.morphAttributes.color;let Ee=Tn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=E.toneMapping);const Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xt=Ke!==void 0?Ke.length:0,Rt=Ct.get(z),Ti=p.state.lights;if(k===!0&&(J===!0||y!==M)){const Ce=y===M&&z.id===C;lt.setState(z,y,Ce)}let Jt=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ti.state.version||Rt.outputColorSpace!==gt||H.isBatchedMesh&&Rt.batching===!1||!H.isBatchedMesh&&Rt.batching===!0||H.isInstancedMesh&&Rt.instancing===!1||!H.isInstancedMesh&&Rt.instancing===!0||H.isSkinnedMesh&&Rt.skinning===!1||!H.isSkinnedMesh&&Rt.skinning===!0||H.isInstancedMesh&&Rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Rt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Rt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Rt.instancingMorph===!1&&H.morphTexture!==null||Rt.envMap!==St||z.fog===!0&&Rt.fog!==ut||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==lt.numPlanes||Rt.numIntersection!==lt.numIntersection)||Rt.vertexAlphas!==wt||Rt.vertexTangents!==It||Rt.morphTargets!==Bt||Rt.morphNormals!==ne||Rt.morphColors!==de||Rt.toneMapping!==Ee||Rt.morphTargetsCount!==Xt)&&(Jt=!0):(Jt=!0,Rt.__version=z.version);let Cn=Rt.currentProgram;Jt===!0&&(Cn=Wi(z,U,H));let Hs=!1,bi=!1,Lr=!1;const fe=Cn.getUniforms(),un=Rt.uniforms;if(dt.useProgram(Cn.program)&&(Hs=!0,bi=!0,Lr=!0),z.id!==C&&(C=z.id,bi=!0),Hs||M!==y){fe.setValue(N,"projectionMatrix",y.projectionMatrix),fe.setValue(N,"viewMatrix",y.matrixWorldInverse);const Ce=fe.map.cameraPosition;Ce!==void 0&&Ce.setValue(N,nt.setFromMatrixPosition(y.matrixWorld)),yt.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&fe.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,bi=!0,Lr=!0)}if(H.isSkinnedMesh){fe.setOptional(N,H,"bindMatrix"),fe.setOptional(N,H,"bindMatrixInverse");const Ce=H.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),fe.setValue(N,"boneTexture",Ce.boneTexture,Ht))}H.isBatchedMesh&&(fe.setOptional(N,H,"batchingTexture"),fe.setValue(N,"batchingTexture",H._matricesTexture,Ht));const Dr=V.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&vt.update(H,V,Cn),(bi||Rt.receiveShadow!==H.receiveShadow)&&(Rt.receiveShadow=H.receiveShadow,fe.setValue(N,"receiveShadow",H.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(un.envMap.value=St,un.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),bi&&(fe.setValue(N,"toneMappingExposure",E.toneMappingExposure),Rt.needsLights&&hl(un,Lr),ut&&z.fog===!0&&et.refreshFogUniforms(un,ut),et.refreshMaterialUniforms(un,z,j,X,p.state.transmissionRenderTarget[y.id]),vr.upload(N,Bs(Rt),un,Ht)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vr.upload(N,Bs(Rt),un,Ht),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&fe.setValue(N,"center",H.center),fe.setValue(N,"modelViewMatrix",H.modelViewMatrix),fe.setValue(N,"normalMatrix",H.normalMatrix),fe.setValue(N,"modelMatrix",H.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ce=z.uniformsGroups;for(let Ir=0,fl=Ce.length;Ir<fl;Ir++){const ks=Ce[Ir];Ft.update(ks,Cn),Ft.bind(ks,Cn)}}return Cn}function hl(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function dl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,U,V){Ct.get(y.texture).__webglTexture=U,Ct.get(y.depthTexture).__webglTexture=V;const z=Ct.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const V=Ct.get(y);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,V=0){R=y,L=U,b=V;let z=!0,H=null,ut=!1,pt=!1;if(y){const St=Ct.get(y);St.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):St.__webglFramebuffer===void 0?Ht.setupRenderTarget(y):St.__hasExternalTextures&&Ht.rebindTextures(y,Ct.get(y.texture).__webglTexture,Ct.get(y.depthTexture).__webglTexture);const wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(pt=!0);const It=Ct.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(It[U])?H=It[U][V]:H=It[U],ut=!0):y.samples>0&&Ht.useMultisampledRTT(y)===!1?H=Ct.get(y).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[V]:H=It,_.copy(y.viewport),D.copy(y.scissor),q=y.scissorTest}else _.copy(K).multiplyScalar(j).floor(),D.copy(st).multiplyScalar(j).floor(),q=ft;if(dt.bindFramebuffer(N.FRAMEBUFFER,H)&&z&&dt.drawBuffers(y,H),dt.viewport(_),dt.scissor(D),dt.setScissorTest(q),ut){const St=Ct.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,V)}else if(pt){const St=Ct.get(y.texture),wt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,V||0,wt)}C=-1},this.readRenderTargetPixels=function(y,U,V,z,H,ut,pt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt){dt.bindFramebuffer(N.FRAMEBUFFER,gt);try{const St=y.texture,wt=St.format,It=St.type;if(!yt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&V>=0&&V<=y.height-H&&N.readPixels(U,V,z,H,ht.convert(wt),ht.convert(It),ut)}finally{const St=R!==null?Ct.get(R).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,St)}}},this.copyFramebufferToTexture=function(y,U,V=0){const z=Math.pow(2,-V),H=Math.floor(U.image.width*z),ut=Math.floor(U.image.height*z);Ht.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,y.x,y.y,H,ut),dt.unbindTexture()},this.copyTextureToTexture=function(y,U,V,z=0){const H=U.image.width,ut=U.image.height,pt=ht.convert(V.format),gt=ht.convert(V.type);Ht.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,y.x,y.y,H,ut,pt,gt,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,pt,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,y.x,y.y,pt,gt,U.image),z===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,V,z,H=0){const ut=y.max.x-y.min.x,pt=y.max.y-y.min.y,gt=y.max.z-y.min.z,St=ht.convert(z.format),wt=ht.convert(z.type);let It;if(z.isData3DTexture)Ht.setTexture3D(z,0),It=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Ht.setTexture2DArray(z,0),It=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Bt=N.getParameter(N.UNPACK_ROW_LENGTH),ne=N.getParameter(N.UNPACK_IMAGE_HEIGHT),de=N.getParameter(N.UNPACK_SKIP_PIXELS),Ee=N.getParameter(N.UNPACK_SKIP_ROWS),Ke=N.getParameter(N.UNPACK_SKIP_IMAGES),Xt=V.isCompressedTexture?V.mipmaps[H]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(It,H,U.x,U.y,U.z,ut,pt,gt,St,wt,Xt.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(It,H,U.x,U.y,U.z,ut,pt,gt,St,Xt.data):N.texSubImage3D(It,H,U.x,U.y,U.z,ut,pt,gt,St,wt,Xt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne),N.pixelStorei(N.UNPACK_SKIP_PIXELS,de),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke),H===0&&z.generateMipmaps&&N.generateMipmap(It),dt.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Ht.setTextureCube(y,0):y.isData3DTexture?Ht.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ht.setTexture2DArray(y,0):Ht.setTexture2D(y,0),dt.unbindTexture()},this.resetState=function(){L=0,b=0,R=null,dt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ps?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===Rr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Dp extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class lo extends ki{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const co={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ip{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const Up=new Ip;class Us{constructor(t){this.manager=t!==void 0?t:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";class Np extends Us{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=co.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Oi("img");function l(){h(),co.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Fp extends Us{constructor(t){super(t)}load(t,e,n,r){const s=new ve,o=new Np(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class $o extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Op extends $o{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ds=new te,uo=new F,ho=new F;class Bp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uo.setFromMatrixPosition(t.matrixWorld),e.position.copy(uo),ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ho),e.updateMatrixWorld(),ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zp extends Bp{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends $o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new zp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);const po={type:"change"},fs={type:"start"},mo={type:"end"},mr=new Uo,go=new rn,kp=Math.cos(70*Sc.DEG2RAD);class Vp extends Xn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qn.ROTATE,MIDDLE:qn.DOLLY,RIGHT:qn.PAN},this.touches={ONE:vn.ROTATE,TWO:vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",At),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",At),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(po),n.update(),s=r.NONE},this.update=function(){const g=new F,I=new Wn().setFromUnitVectors(t.up,new F(0,1,0)),O=I.clone().invert(),Q=new F,it=new Wn,Lt=new F,Ot=2*Math.PI;return function(le=null){const Wt=n.object.position;g.copy(Wt).sub(n.target),g.applyQuaternion(I),a.setFromVector3(g),n.autoRotate&&s===r.NONE&&q(_(le)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ee=n.minAzimuthAngle,jt=n.maxAzimuthAngle;isFinite(ee)&&isFinite(jt)&&(ee<-Math.PI?ee+=Ot:ee>Math.PI&&(ee-=Ot),jt<-Math.PI?jt+=Ot:jt>Math.PI&&(jt-=Ot),ee<=jt?a.theta=Math.max(ee,Math.min(jt,a.theta)):a.theta=a.theta>(ee+jt)/2?Math.max(ee,a.theta):Math.min(jt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ln=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=K(a.radius);else{const Re=a.radius;a.radius=K(a.radius*c),ln=Re!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion(O),Wt.copy(n.target).add(g),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&b){let Re=null;if(n.object.isPerspectiveCamera){const cn=g.length();Re=K(cn*c);const je=cn-Re;n.object.position.addScaledVector(A,je),n.object.updateMatrixWorld(),ln=!!je}else if(n.object.isOrthographicCamera){const cn=new F(L.x,L.y,0);cn.unproject(n.object);const je=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ln=je!==n.object.zoom;const yi=new F(L.x,L.y,0);yi.unproject(n.object),n.object.position.sub(yi).add(cn),n.object.updateMatrixWorld(),Re=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Re!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Re).add(n.object.position):(mr.origin.copy(n.object.position),mr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(mr.direction))<kp?t.lookAt(n.target):(go.setFromNormalAndCoplanarPoint(n.object.up,n.target),mr.intersectPlane(go,n.target))))}else if(n.object.isOrthographicCamera){const Re=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Re!==n.object.zoom&&(n.object.updateProjectionMatrix(),ln=!0)}return c=1,b=!1,ln||Q.distanceToSquared(n.object.position)>o||8*(1-it.dot(n.object.quaternion))>o||Lt.distanceToSquared(n.target)>o?(n.dispatchEvent(po),Q.copy(n.object.position),it.copy(n.object.quaternion),Lt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",kt),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",G),n.domElement.getRootNode().removeEventListener("keydown",ct,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",At),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new fo,l=new fo;let c=1;const h=new F,u=new Tt,d=new Tt,m=new Tt,v=new Tt,x=new Tt,p=new Tt,f=new Tt,T=new Tt,E=new Tt,A=new F,L=new Tt;let b=!1;const R=[],C={};let M=!1;function _(g){return g!==null?2*Math.PI/60*n.autoRotateSpeed*g:2*Math.PI/60/60*n.autoRotateSpeed}function D(g){const I=Math.abs(g*.01);return Math.pow(.95,n.zoomSpeed*I)}function q(g){l.theta-=g}function P(g){l.phi-=g}const Y=function(){const g=new F;return function(O,Q){g.setFromMatrixColumn(Q,0),g.multiplyScalar(-O),h.add(g)}}(),W=function(){const g=new F;return function(O,Q){n.screenSpacePanning===!0?g.setFromMatrixColumn(Q,1):(g.setFromMatrixColumn(Q,0),g.crossVectors(n.object.up,g)),g.multiplyScalar(O),h.add(g)}}(),X=function(){const g=new F;return function(O,Q){const it=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;g.copy(Lt).sub(n.target);let Ot=g.length();Ot*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*O*Ot/it.clientHeight,n.object.matrix),W(2*Q*Ot/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(O*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),W(Q*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(g,I){if(!n.zoomToCursor)return;b=!0;const O=n.domElement.getBoundingClientRect(),Q=g-O.left,it=I-O.top,Lt=O.width,Ot=O.height;L.x=Q/Lt*2-1,L.y=-(it/Ot)*2+1,A.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(g){return Math.max(n.minDistance,Math.min(n.maxDistance,g))}function st(g){u.set(g.clientX,g.clientY)}function ft(g){Z(g.clientX,g.clientX),f.set(g.clientX,g.clientY)}function _t(g){v.set(g.clientX,g.clientY)}function k(g){d.set(g.clientX,g.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const I=n.domElement;q(2*Math.PI*m.x/I.clientHeight),P(2*Math.PI*m.y/I.clientHeight),u.copy(d),n.update()}function J(g){T.set(g.clientX,g.clientY),E.subVectors(T,f),E.y>0?j(D(E.y)):E.y<0&&B(D(E.y)),f.copy(T),n.update()}function at(g){x.set(g.clientX,g.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),X(p.x,p.y),v.copy(x),n.update()}function nt(g){Z(g.clientX,g.clientY),g.deltaY<0?B(D(g.deltaY)):g.deltaY>0&&j(D(g.deltaY)),n.update()}function bt(g){let I=!1;switch(g.code){case n.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),I=!0;break}I&&(g.preventDefault(),n.update())}function Et(g){if(R.length===1)u.set(g.pageX,g.pageY);else{const I=qt(g),O=.5*(g.pageX+I.x),Q=.5*(g.pageY+I.y);u.set(O,Q)}}function N(g){if(R.length===1)v.set(g.pageX,g.pageY);else{const I=qt(g),O=.5*(g.pageX+I.x),Q=.5*(g.pageY+I.y);v.set(O,Q)}}function Gt(g){const I=qt(g),O=g.pageX-I.x,Q=g.pageY-I.y,it=Math.sqrt(O*O+Q*Q);f.set(0,it)}function mt(g){n.enableZoom&&Gt(g),n.enablePan&&N(g)}function yt(g){n.enableZoom&&Gt(g),n.enableRotate&&Et(g)}function dt(g){if(R.length==1)d.set(g.pageX,g.pageY);else{const O=qt(g),Q=.5*(g.pageX+O.x),it=.5*(g.pageY+O.y);d.set(Q,it)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const I=n.domElement;q(2*Math.PI*m.x/I.clientHeight),P(2*Math.PI*m.y/I.clientHeight),u.copy(d)}function zt(g){if(R.length===1)x.set(g.pageX,g.pageY);else{const I=qt(g),O=.5*(g.pageX+I.x),Q=.5*(g.pageY+I.y);x.set(O,Q)}p.subVectors(x,v).multiplyScalar(n.panSpeed),X(p.x,p.y),v.copy(x)}function Ct(g){const I=qt(g),O=g.pageX-I.x,Q=g.pageY-I.y,it=Math.sqrt(O*O+Q*Q);T.set(0,it),E.set(0,Math.pow(T.y/f.y,n.zoomSpeed)),j(E.y),f.copy(T);const Lt=(g.pageX+I.x)*.5,Ot=(g.pageY+I.y)*.5;Z(Lt,Ot)}function Ht(g){n.enableZoom&&Ct(g),n.enablePan&&zt(g)}function $t(g){n.enableZoom&&Ct(g),n.enableRotate&&dt(g)}function w(g){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(g.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",G)),!Pt(g)&&(Mt(g),g.pointerType==="touch"?rt(g):$(g)))}function S(g){n.enabled!==!1&&(g.pointerType==="touch"?vt(g):tt(g))}function G(g){switch(ht(g),R.length){case 0:n.domElement.releasePointerCapture(g.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",G),n.dispatchEvent(mo),s=r.NONE;break;case 1:const I=R[0],O=C[I];rt({pointerId:I,pageX:O.x,pageY:O.y});break}}function $(g){let I;switch(g.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case qn.DOLLY:if(n.enableZoom===!1)return;ft(g),s=r.DOLLY;break;case qn.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enablePan===!1)return;_t(g),s=r.PAN}else{if(n.enableRotate===!1)return;st(g),s=r.ROTATE}break;case qn.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enableRotate===!1)return;st(g),s=r.ROTATE}else{if(n.enablePan===!1)return;_t(g),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(fs)}function tt(g){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(g);break;case r.DOLLY:if(n.enableZoom===!1)return;J(g);break;case r.PAN:if(n.enablePan===!1)return;at(g);break}}function et(g){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(g.preventDefault(),n.dispatchEvent(fs),nt(xt(g)),n.dispatchEvent(mo))}function xt(g){const I=g.deltaMode,O={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(I){case 1:O.deltaY*=16;break;case 2:O.deltaY*=100;break}return g.ctrlKey&&!M&&(O.deltaY*=10),O}function ct(g){g.key==="Control"&&(M=!0,n.domElement.getRootNode().addEventListener("keyup",lt,{passive:!0,capture:!0}))}function lt(g){g.key==="Control"&&(M=!1,n.domElement.getRootNode().removeEventListener("keyup",lt,{passive:!0,capture:!0}))}function At(g){n.enabled===!1||n.enablePan===!1||bt(g)}function rt(g){switch(Ft(g),R.length){case 1:switch(n.touches.ONE){case vn.ROTATE:if(n.enableRotate===!1)return;Et(g),s=r.TOUCH_ROTATE;break;case vn.PAN:if(n.enablePan===!1)return;N(g),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;mt(g),s=r.TOUCH_DOLLY_PAN;break;case vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;yt(g),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(fs)}function vt(g){switch(Ft(g),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;dt(g),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;zt(g),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ht(g),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$t(g),n.update();break;default:s=r.NONE}}function kt(g){n.enabled!==!1&&g.preventDefault()}function Mt(g){R.push(g.pointerId)}function ht(g){delete C[g.pointerId];for(let I=0;I<R.length;I++)if(R[I]==g.pointerId){R.splice(I,1);return}}function Pt(g){for(let I=0;I<R.length;I++)if(R[I]==g.pointerId)return!0;return!1}function Ft(g){let I=C[g.pointerId];I===void 0&&(I=new Tt,C[g.pointerId]=I),I.set(g.pageX,g.pageY)}function qt(g){const I=g.pointerId===R[0]?R[1]:R[0];return C[I]}n.domElement.addEventListener("contextmenu",kt),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",et,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}var Ae=Uint8Array,hi=Uint16Array,Gp=Int32Array,Jo=new Ae([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qo=new Ae([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Wp=new Ae([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tl=function(i,t){for(var e=new hi(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new Gp(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},el=tl(Jo,2),nl=el.b,Xp=el.r;nl[28]=258,Xp[258]=28;var qp=tl(Qo,0),Yp=qp.b,bs=new hi(32768);for(var Zt=0;Zt<32768;++Zt){var _n=(Zt&43690)>>1|(Zt&21845)<<1;_n=(_n&52428)>>2|(_n&13107)<<2,_n=(_n&61680)>>4|(_n&3855)<<4,bs[Zt]=((_n&65280)>>8|(_n&255)<<8)>>1}var Di=function(i,t,e){for(var n=i.length,r=0,s=new hi(t);r<n;++r)i[r]&&++s[i[r]-1];var o=new hi(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(e){a=new hi(1<<t);var l=15-t;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],h=t-i[r],u=o[i[r]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[bs[u]>>l]=c}else for(a=new hi(n),r=0;r<n;++r)i[r]&&(a[r]=bs[o[i[r]-1]++]>>15-i[r]);return a},Gi=new Ae(288);for(var Zt=0;Zt<144;++Zt)Gi[Zt]=8;for(var Zt=144;Zt<256;++Zt)Gi[Zt]=9;for(var Zt=256;Zt<280;++Zt)Gi[Zt]=7;for(var Zt=280;Zt<288;++Zt)Gi[Zt]=8;var il=new Ae(32);for(var Zt=0;Zt<32;++Zt)il[Zt]=5;var jp=Di(Gi,9,1),Kp=Di(il,5,1),ps=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},Fe=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},ms=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},Zp=function(i){return(i+7)/8|0},$p=function(i,t,e){return(e==null||e>i.length)&&(e=i.length),new Ae(i.subarray(t,e))},Jp=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],be=function(i,t,e){var n=new Error(t||Jp[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,be),!e)throw n;return n},Ns=function(i,t,e,n){var r=i.length,s=0;if(!r||t.f&&!t.l)return e||new Ae(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new Ae(r*3));var c=function(Gt){var mt=e.length;if(Gt>mt){var yt=new Ae(Math.max(mt*2,Gt));yt.set(e),e=yt}},h=t.f||0,u=t.p||0,d=t.b||0,m=t.l,v=t.d,x=t.m,p=t.n,f=r*8;do{if(!m){h=Fe(i,u,1);var T=Fe(i,u+1,3);if(u+=3,T)if(T==1)m=jp,v=Kp,x=9,p=5;else if(T==2){var b=Fe(i,u,31)+257,R=Fe(i,u+10,15)+4,C=b+Fe(i,u+5,31)+1;u+=14;for(var M=new Ae(C),_=new Ae(19),D=0;D<R;++D)_[Wp[D]]=Fe(i,u+D*3,7);u+=R*3;for(var q=ps(_),P=(1<<q)-1,Y=Di(_,q,1),D=0;D<C;){var W=Y[Fe(i,u,P)];u+=W&15;var E=W>>4;if(E<16)M[D++]=E;else{var X=0,j=0;for(E==16?(j=3+Fe(i,u,3),u+=2,X=M[D-1]):E==17?(j=3+Fe(i,u,7),u+=3):E==18&&(j=11+Fe(i,u,127),u+=7);j--;)M[D++]=X}}var B=M.subarray(0,b),Z=M.subarray(b);x=ps(B),p=ps(Z),m=Di(B,x,1),v=Di(Z,p,1)}else be(1);else{var E=Zp(u)+4,A=i[E-4]|i[E-3]<<8,L=E+A;if(L>r){l&&be(0);break}a&&c(d+A),e.set(i.subarray(E,L),d),t.b=d+=A,t.p=u=L*8,t.f=h;continue}if(u>f){l&&be(0);break}}a&&c(d+131072);for(var K=(1<<x)-1,st=(1<<p)-1,ft=u;;ft=u){var X=m[ms(i,u)&K],_t=X>>4;if(u+=X&15,u>f){l&&be(0);break}if(X||be(2),_t<256)e[d++]=_t;else if(_t==256){ft=u,m=null;break}else{var k=_t-254;if(_t>264){var D=_t-257,J=Jo[D];k=Fe(i,u,(1<<J)-1)+nl[D],u+=J}var at=v[ms(i,u)&st],nt=at>>4;at||be(3),u+=at&15;var Z=Yp[nt];if(nt>3){var J=Qo[nt];Z+=ms(i,u)&(1<<J)-1,u+=J}if(u>f){l&&be(0);break}a&&c(d+131072);var bt=d+k;if(d<Z){var Et=s-Z,N=Math.min(Z,bt);for(Et+d<0&&be(3);d<N;++d)e[d]=n[Et+d]}for(;d<bt;++d)e[d]=e[d-Z]}}t.l=m,t.p=ft,t.b=d,t.f=h,m&&(h=1,t.m=x,t.d=v,t.n=p)}while(!h);return d!=e.length&&o?$p(e,0,d):e.subarray(0,d)},Qp=new Ae(0),tm=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&be(6,"invalid gzip data");var t=i[3],e=10;t&4&&(e+=(i[10]|i[11]<<8)+2);for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!i[e++]);return e+(t&2)},em=function(i){var t=i.length;return(i[t-4]|i[t-3]<<8|i[t-2]<<16|i[t-1]<<24)>>>0},nm=function(i,t){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&be(6,"invalid zlib data"),(i[1]>>5&1)==1&&be(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function im(i,t){return Ns(i,{i:2},t,t)}function rl(i,t){var e=tm(i);return e+8>i.length&&be(6,"invalid gzip data"),Ns(i.subarray(e,-8),{i:2},new Ae(em(i)),t)}function rm(i,t){return Ns(i.subarray(nm(i),-4),{i:2},t,t)}function sm(i,t){return i[0]==31&&i[1]==139&&i[2]==8?rl(i,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?im(i,t):rm(i,t)}var am=typeof TextDecoder<"u"&&new TextDecoder,om=0;try{am.decode(Qp,{stream:!0}),om=1}catch{}function lm(i,t,e){const n=(1n<<BigInt(t))-1n,r=Math.floor(64/t),s=new Uint32Array(e);if(!i||i.length===0)return s;let o=0;const a=i.length;for(let l=0;l<a&&o<e;l++){const c=i[l],h=typeof c=="bigint"?c:BigInt(c??0);for(let u=0;u<r&&o<e;u++){const d=BigInt(u*t);s[o++]=Number(h>>d&n)}}return s}function cm(i,t){const e=new Uint32Array(t);let n=0,r=0;for(;n<i.length&&r<t;){let s=0,o=0,a=0;do if(a=i[n++],s|=(a&127)<<o,o+=7,o>=35)throw new Error("Varint stream corruption");while(a&128);e[r++]=s}return e}function um(i){const t=i.size||[0,0,0],e=i.palette||[],n=i.blocks||[];return{size:t,palette:e,blocks:n}}function hm(i){var s,o,a,l;const t=i.format_version||1,e=i.size||[0,0,0],n=((s=i.structure)==null?void 0:s.block_indices)||[[],[]],r=((l=(a=(o=i.structure)==null?void 0:o.palette)==null?void 0:a.default)==null?void 0:l.block_palette)||[];return{formatVersion:t,size:e,palette:r,layer0Indices:new Int32Array(n[0]||[]),layer1Indices:new Int32Array(n[1]||[])}}const re=class re{static isFaceOpaque(t,e){if(!t||t==="minecraft:air"||t==="air")return!1;const n=t.startsWith("minecraft:")?t.substring(10):t;return e.has(n)||e.has("minecraft:"+n)}static matchWhenCondition(t,e){if(!t)return!0;if(!e)return!1;if(t.OR&&Array.isArray(t.OR))return t.OR.some(n=>re.matchWhenCondition(n,e));if(t.AND&&Array.isArray(t.AND))return t.AND.every(n=>re.matchWhenCondition(n,e));for(const n of Object.keys(t)){if(n==="OR"||n==="AND")continue;const r=String(t[n]),s=e[n];if(s===void 0)return!1;if(r.includes("|")){if(!r.split("|").includes(s))return!1}else if(r!==s)return!1}return!0}static getRotatedCullDirection(t,e=0,n=0,r=0){if(!t)return null;let s=[0,0,0];switch(t){case"up":s=[0,1,0];break;case"down":s=[0,-1,0];break;case"south":s=[0,0,1];break;case"north":s=[0,0,-1];break;case"east":s=[1,0,0];break;case"west":s=[-1,0,0];break;default:return null}return e!==0&&(s=re.rotatePoint(s,[0,0,0],"x",e)),n!==0&&(s=re.rotatePoint(s,[0,0,0],"y",n)),r!==0&&(s=re.rotatePoint(s,[0,0,0],"z",r)),[Math.round(s[0]),Math.round(s[1]),Math.round(s[2])]}static isElementFaceOnBoundary(t,e){if(t.rotation&&t.rotation.angle%360!==0)return!1;switch(e){case"up":return t.to[1]===16;case"down":return t.from[1]===0;case"south":return t.to[2]===16;case"north":return t.from[2]===0;case"east":return t.to[0]===16;case"west":return t.from[0]===0;default:return!1}}static resolveBlockModel(t,e,n){if(!t.blockstates||!t.models)return null;let r=e.startsWith("minecraft:")?e.substring(10):e,s=t.blockstates[r];if(!s)if(t.blockstates["minecraft:"+r])s=t.blockstates["minecraft:"+r];else return null;if(s.multipart&&Array.isArray(s.multipart)){const m=[];for(const v of s.multipart)if(re.matchWhenCondition(v.when,n)){const x=Array.isArray(v.apply)?v.apply:[v.apply];for(const p of x){if(!p)continue;let f=p.model||"";f.startsWith("minecraft:")&&(f=f.substring(10));const T=re.resolveModelElements(t,f);if(T&&T.elements){const E=p.x||0,A=p.y||0,L=p.z||0;for(const b of T.elements)m.push({...b,variantRotX:E,variantRotY:A,variantRotZ:L})}}}if(m.length>0)return{elements:m,rotX:0,rotY:0,rotZ:0}}let o=null;if(s.variants){if(n&&Object.keys(n).length>0){const v=Object.keys(n).sort().map(x=>`${x}=${n[x]}`).join(",");if(s.variants[v])o=s.variants[v];else{let x=-1;for(const p of Object.keys(s.variants)){const f=p.split(",");let T=!0,E=0;for(const A of f){const[L,b]=A.split("=");if(L&&b){const R=n[L];if(R!==void 0)if(R===b)E++;else{T=!1;break}}}T&&E>x&&(x=E,o=s.variants[p])}}}if(!o)if(s.variants[""])o=s.variants[""];else if(s.variants.normal)o=s.variants.normal;else{const m=Object.keys(s.variants)[0];o=s.variants[m]}}if(Array.isArray(o)&&(o=o[0]),!o)return null;let a=o.model||"";a.startsWith("minecraft:")&&(a=a.substring(10));const l=o.x||0,c=o.y||0,h=o.z||0,u=!!o.uvlock,d=re.resolveModelElements(t,a);return!d||!d.elements?null:{elements:d.elements,rotX:l,rotY:c,rotZ:h,uvlock:u}}static resolveModelElements(t,e){if(!t.models)return null;let r=e.startsWith("minecraft:")?e.substring(10):e,s={},o=null,a=new Set;for(;r&&!a.has(r);){a.add(r);const u=t.models[r];if(!u)break;u.textures&&(s={...u.textures,...s}),!o&&u.elements&&(o=u.elements),u.parent?r=u.parent.startsWith("minecraft:")?u.parent.substring(10):u.parent:r=null}if(!o)return null;function l(u){let d=u,m=0;for(;d&&d.startsWith("#")&&m<10;){const v=d.substring(1);if(s[v])d=s[v];else break;m++}return d&&d.startsWith("minecraft:")&&(d=d.substring(10)),d||""}const c={};for(const u in s)c[u]=l(s[u]);return{elements:o.map(u=>{const d={};for(const m in u.faces){const v=u.faces[m];d[m]={...v,texture:l(v.texture)}}return{...u,faces:d}}),textures:c}}static buildChunkMesh(t,e,n,r,s,o){const a=new Rn;return a.setAttribute("position",new ze(t,3)),a.setAttribute("normal",new ze(e,3)),a.setAttribute("uv",new ze(n,2)),o&&o.length>0&&a.setAttribute("color",new ze(o,3)),a.setIndex(r),new He(a,s)}static rotatePoint(t,e,n,r){if(r===0)return[...t];const s=r*Math.PI/180,o=Math.cos(s),a=Math.sin(s);let l=t[0]-e[0],c=t[1]-e[1],h=t[2]-e[2],u=l,d=c,m=h;return n==="x"?(d=c*o-h*a,m=c*a+h*o):n==="y"?(u=l*o-h*a,m=l*a+h*o):n==="z"&&(u=l*o-c*a,d=l*a+c*o),[u+e[0],d+e[1],m+e[2]]}static getTransformedElementFace(t,e,n,r,s,o,a,l=0,c=0,h=0){const u=s.from[0]/16,d=s.from[1]/16,m=s.from[2]/16,v=s.to[0]/16,x=s.to[1]/16,p=s.to[2]/16;let f=[],T=[0,0,0];switch(o){case"up":f=[[u,x,p],[v,x,p],[v,x,m],[u,x,m]],T=[0,1,0];break;case"down":f=[[u,d,m],[v,d,m],[v,d,p],[u,d,p]],T=[0,-1,0];break;case"south":f=[[u,d,p],[v,d,p],[v,x,p],[u,x,p]],T=[0,0,1];break;case"north":f=[[v,d,m],[u,d,m],[u,x,m],[v,x,m]],T=[0,0,-1];break;case"east":f=[[v,d,p],[v,d,m],[v,x,m],[v,x,p]],T=[1,0,0];break;case"west":f=[[u,d,m],[u,d,p],[u,x,p],[u,x,m]],T=[-1,0,0];break}if(s.rotation){const X=[s.rotation.origin[0]/16,s.rotation.origin[1]/16,s.rotation.origin[2]/16];if(s.rotation.rescale&&s.rotation.angle!==0){const j=Math.abs(s.rotation.angle)*Math.PI/180,B=1/Math.cos(j),Z=s.rotation.axis;f=f.map(K=>{const st=Z==="x"?K[0]:X[0]+(K[0]-X[0])*B,ft=Z==="y"?K[1]:X[1]+(K[1]-X[1])*B,_t=Z==="z"?K[2]:X[2]+(K[2]-X[2])*B;return[st,ft,_t]})}f=f.map(j=>re.rotatePoint(j,X,s.rotation.axis,s.rotation.angle)),T=re.rotatePoint(T,[0,0,0],s.rotation.axis,s.rotation.angle)}const E=[.5,.5,.5],A=s.variantRotX!==void 0?s.variantRotX:l,L=s.variantRotY!==void 0?s.variantRotY:c,b=s.variantRotZ!==void 0?s.variantRotZ:h;A!==0&&(f=f.map(X=>re.rotatePoint(X,E,"x",A)),T=re.rotatePoint(T,[0,0,0],"x",A)),L!==0&&(f=f.map(X=>re.rotatePoint(X,E,"y",L)),T=re.rotatePoint(T,[0,0,0],"y",L)),b!==0&&(f=f.map(X=>re.rotatePoint(X,E,"z",b)),T=re.rotatePoint(T,[0,0,0],"z",b));const R=[];for(const X of f)R.push(X[0]+e,X[1]+n,X[2]+r);const C=[];for(let X=0;X<4;X++)C.push(T[0],T[1],T[2]);let M;if(a.uv)M=a.uv;else switch(o){case"up":case"down":M=[s.from[0],s.from[2],s.to[0],s.to[2]];break;case"south":case"north":M=[s.from[0],16-s.to[1],s.to[0],16-s.from[1]];break;case"east":case"west":M=[s.from[2],16-s.to[1],s.to[2],16-s.from[1]];break;default:M=[0,0,16,16]}const{u0:_,v0:D,u1:q,v1:P}=re.getTextureUV(t,a.texture,M);let Y;if(o==="up"||o==="down"?Y=[[_,P],[q,P],[q,D],[_,D]]:Y=[[_,D],[q,D],[q,P],[_,P]],a.rotation){const X=Math.floor(a.rotation/90)%4;for(let j=0;j<X;j++)Y.push(Y.shift())}const W=[];for(const X of Y)W.push(X[0],X[1]);return{positions:R,normals:C,uvs:W}}static getFaceVertices(t,e,n,r){const s=t,o=t+1,a=e,l=e+1,c=n,h=n+1;switch(r){case"up":return[s,l,h,o,l,h,o,l,c,s,l,c];case"down":return[s,a,c,o,a,c,o,a,h,s,a,h];case"south":return[s,a,h,o,a,h,o,l,h,s,l,h];case"north":return[o,a,c,s,a,c,s,l,c,o,l,c];case"east":return[o,a,h,o,a,c,o,l,c,o,l,h];case"west":return[s,a,c,s,a,h,s,l,h,s,l,c];default:return[]}}static getTextureUV(t,e,n){let r=e.startsWith("minecraft:")?e.substring(10):e;!r.startsWith("block/")&&!r.startsWith("item/")&&(r="block/"+r);let s=t.textures[r];s||(s=t.textures["block/stone"]||[0,0,16,16]);let o=s[0],a=s[1],l=s[2],c=s[3];if(n){const p=n[0]/16,f=n[1]/16,T=n[2]/16,E=n[3]/16;o=s[0]+p*s[2],a=s[1]+f*s[3],l=(T-p)*s[2],c=(E-f)*s[3]}const h=t.atlasWidth||2048,u=t.atlasHeight||2048,d=(o+.5)/h,m=1-(a+c-.5)/u,v=(o+l-.5)/h,x=1-(a+.5)/u;return{u0:d,v0:m,u1:v,v1:x}}};re.CHUNK_SIZE=16;let se=re;class dm{constructor(t){this.currentLayer=0,this.currentAxis="Y",this.clippingPlane=new rn(new F(0,-1,0),1e3),t.clippingPlanes=[this.clippingPlane],t.localClippingEnabled=!0}getClippingPlane(){return this.clippingPlane}setAxis(t){switch(this.currentAxis=t,t){case"X":this.clippingPlane.normal.set(-1,0,0);break;case"Y":this.clippingPlane.normal.set(0,-1,0);break;case"Z":this.clippingPlane.normal.set(0,0,-1);break}this.updateConstant()}setLayer(t){this.currentLayer=t,this.updateConstant()}updateConstant(){this.clippingPlane.constant=this.currentLayer+.5}}class fm{constructor(t){this.mode="ORBIT",this.camera=t}setMode(t){this.mode=t}getMode(){return this.mode}frameBoundingBox(t,e,n){const r=new F().addVectors(t,e).multiplyScalar(.5),s=new F().subVectors(e,t),o=Math.max(s.x,s.y,s.z,1),a=this.camera.fov*Math.PI/180,l=Math.abs(o/(2*Math.tan(a/2)))*1.5;this.camera.position.set(r.x+l,r.y+l*.8,r.z+l),this.camera.lookAt(r),n&&n.copy(r)}recenterTarget(t,e){const n=new F().subVectors(t,e);this.camera.position.add(n),e.copy(t)}}class _o{constructor(t,e=!1){Xi(this,"view");Xi(this,"offset",0);Xi(this,"littleEndian");t instanceof Uint8Array?this.view=new DataView(t.buffer,t.byteOffset,t.byteLength):this.view=new DataView(t),this.littleEndian=e}getOffset(){return this.offset}readByte(){const t=this.view.getInt8(this.offset);return this.offset+=1,t}readUByte(){const t=this.view.getUint8(this.offset);return this.offset+=1,t}readShort(){const t=this.view.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readInt(){const t=this.view.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readLongBigInt(){if(this.littleEndian){const t=BigInt(this.view.getUint32(this.offset,!0)),e=BigInt(this.view.getInt32(this.offset+4,!0));return this.offset+=8,e<<32n|t}else{const t=BigInt(this.view.getInt32(this.offset,!1)),e=BigInt(this.view.getUint32(this.offset+4,!1));return this.offset+=8,t<<32n|e}}readFloat(){const t=this.view.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readDouble(){const t=this.view.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readString(){const t=this.littleEndian?this.view.getUint16(this.offset,!0):this.view.getUint16(this.offset,!1);this.offset+=2;const e=new Uint8Array(this.view.buffer,this.view.byteOffset+this.offset,t);return this.offset+=t,new TextDecoder("utf-8").decode(e)}readByteArray(){const t=this.readInt(),e=new Int8Array(this.view.buffer,this.view.byteOffset+this.offset,t);return this.offset+=t,e}readIntArray(){const t=this.readInt(),e=new Int32Array(t);for(let n=0;n<t;n++)e[n]=this.readInt();return e}readLongArray(){const t=this.readInt(),e=new BigInt64Array(t);for(let n=0;n<t;n++)e[n]=this.readLongBigInt();return e}readTagValue(t){switch(t){case 1:return this.readByte();case 2:return this.readShort();case 3:return this.readInt();case 4:return this.readLongBigInt();case 5:return this.readFloat();case 6:return this.readDouble();case 7:return this.readByteArray();case 8:return this.readString();case 9:{const e=this.readByte(),n=this.readInt(),r=[];for(let s=0;s<n;s++)r.push(this.readTagValue(e));return r}case 10:{const e={};for(;;){const n=this.readByte();if(n===0)break;const r=this.readString();e[r]=this.readTagValue(n)}return e}case 11:return this.readIntArray();case 12:return this.readLongArray();default:throw new Error(`Unknown NBT Tag Type: ${t} at offset ${this.offset}`)}}parseRoot(){const t=this.readByte();if(t===0)return{name:"",value:null};const e=this.readString(),n=this.readTagValue(t);return{name:e,value:n}}}let De,Vn,xn,an,Fs,Mi,di=null,xr=null,As=null,ws=null,ke=new Set,vo=new Set,br=[],we=null,Si="Main",Ii=null,gs=!1,En=!0,Ui,xo;async function pm(){const i=document.getElementById("webgl-canvas-container");if(i){De=new Dp,De.background=new Vt(8900331),Vn=new Le(60,window.innerWidth/window.innerHeight,.1,1e3),Vn.position.set(30,30,30),xn=new Lp({antialias:!0,alpha:!1,powerPreference:"high-performance"}),xn.setPixelRatio(Math.min(window.devicePixelRatio,2)),xn.setSize(window.innerWidth,window.innerHeight),i.appendChild(xn.domElement),Fs=new fm(Vn),Mi=new dm(xn),an=new Vp(Vn,xn.domElement),an.enableDamping=!0,an.dampingFactor=.05,an.touches={ONE:vn.ROTATE,TWO:vn.DOLLY_PAN},Ui=new Hp(16777215,1.2),Ui.position.set(50,100,50),De.add(Ui),xo=new Op(16777215,4473924,.8),De.add(xo),window.addEventListener("resize",gm);try{Ni("加载纹理图集与材质规则...",20),await mm("default-pack/"),Ni("Shulkr 引擎已就绪",100),setTimeout(()=>{var t;(t=document.getElementById("loading-overlay"))==null||t.classList.add("hidden")},500),window.AndroidHost?window.AndroidHost.onLoadingProgress("READY"):cl().catch(()=>{})}catch(t){console.error("Failed to init Shulkr:",t),Ni("初始化失败: "+(t==null?void 0:t.message)),window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(t==null?void 0:t.message))}bm(),sl()}}async function mm(i){di=await(await fetch(`${i}assets.json`)).json(),(await(await fetch(`${i}block-flags/opaque.txt`)).text()).split(`
`).map(s=>s.trim()).filter(Boolean).forEach(s=>{let o=s.startsWith("minecraft:")?s.substring(10):s;ke.add(o),ke.add("minecraft:"+o)}),(await(await fetch(`${i}block-flags/transparent.txt`)).text()).split(`
`).map(s=>s.trim()).filter(Boolean).forEach(s=>{let o=s.startsWith("minecraft:")?s.substring(10):s;vo.add(o),vo.add("minecraft:"+o)});const r=new Fp;xr=await new Promise((s,o)=>{r.load(`${i}atlas.png`,a=>{a.magFilter=Me,a.minFilter=Me,a.colorSpace=Oe,s(a)},void 0,o)}),As=new lo({map:xr,side:on,vertexColors:!0,clippingPlanes:[Mi.getClippingPlane()]}),ws=new lo({map:xr,transparent:!0,opacity:.8,depthWrite:!1,side:Ge,vertexColors:!0,clippingPlanes:[Mi.getClippingPlane()]})}function Ni(i,t){const e=document.getElementById("loading-text");e&&(e.textContent=i)}function sl(){if(Ii!==null)return;const i=()=>{Ii=requestAnimationFrame(i),an.update(),xn.render(De,Vn)};i()}function al(){Ii!==null&&(cancelAnimationFrame(Ii),Ii=null)}function gm(){Vn.aspect=window.innerWidth/window.innerHeight,Vn.updateProjectionMatrix(),xn.setSize(window.innerWidth,window.innerHeight)}function ol(){for(const i of br)De.remove(i),i instanceof He&&i.geometry.dispose();br=[]}async function _m(i){if(ol(),!di||!xr)return;const{size:t}=i,e=se.CHUNK_SIZE,n=Math.ceil(t.x/e),r=Math.ceil(t.y/e),s=Math.ceil(t.z/e);let o=0;const a=n*r*s;for(let l=0;l<n;l++)for(let c=0;c<r;c++)for(let h=0;h<s;h++)if(xm(i,l,c,h,e),o++,o%10===0){const u=Math.floor(o/a*100);window.AndroidHost&&window.AndroidHost.onLoadingProgress(`RENDERING_${u}%`),await new Promise(d=>setTimeout(d,0))}}function nn(i,t,e,n){var l;if(t<0||e<0||n<0||t>=i.size.x||e>=i.size.y||n>=i.size.z)return null;const r=(e*i.size.z+n)*i.size.x+t,s=i.blocksData[r];if(!s)return null;const o=i.palette[s];if(!o)return null;const a=o.name.startsWith("minecraft:")?o.name.substring(10):o.name;if(a==="water"||a==="lava"||a==="flowing_water"||a==="flowing_lava"){const c=(l=o.properties)!=null&&l.level?parseInt(o.properties.level,10):0;return{isFluid:!0,isWater:a.includes("water"),level:c}}return null}function vm(i,t,e,n){const r=nn(i,t,e,n);if(!r||!r.isFluid)return 0;const s=nn(i,t,e+1,n);return s&&s.isFluid||r.level>=8?1:Math.max(.125,(15-r.level*1.8)/16)}function gr(i,t,e,n,r,s){const o=r===0?[0,-1]:[0,1],a=s===0?[0,-1]:[0,1];let l=0,c=0;for(const h of o)for(const u of a){const d=vm(i,t+h,e,n+u);d>0&&(l+=d,c++)}return c>0?l/c:1}function xm(i,t,e,n,r){const s=t*r,o=Math.min((t+1)*r,i.size.x),a=e*r,l=Math.min((e+1)*r,i.size.y),c=n*r,h=Math.min((n+1)*r,i.size.z),u=[],d=[],m=[],v=[],x=[],p=[],f=[],T=[],E=[],A=[];let L=0,b=0;const R=[{name:"up",dir:[0,1,0],norm:[0,1,0]},{name:"down",dir:[0,-1,0],norm:[0,-1,0]},{name:"south",dir:[0,0,1],norm:[0,0,1]},{name:"north",dir:[0,0,-1],norm:[0,0,-1]},{name:"east",dir:[1,0,0],norm:[1,0,0]},{name:"west",dir:[-1,0,0],norm:[-1,0,0]}];for(let C=s;C<o;C++)for(let M=a;M<l;M++)for(let _=c;_<h;_++){const D=(M*i.size.z+_)*i.size.x+C,q=i.blocksData[D];if(!q)continue;const P=i.palette[q];if(!P)continue;P.name.startsWith("minecraft:")?P.name.substring(10):P.name;const Y=nn(i,C,M,_);if(Y&&Y.isFluid){const j=gr(i,C,M,_,0,0),B=gr(i,C,M,_,1,0),Z=gr(i,C,M,_,1,1),K=gr(i,C,M,_,0,1),st=Y.isWater?"block/water_still":"block/lava_still",{u0:ft,v0:_t,u1:k,v1:J}=se.getTextureUV(di,st),at=Y.isWater?[.25,.46,.89]:[1,1,1],nt=nn(i,C,M+1,_);if(!nt||!nt.isFluid){p.push(C,M+K,_+1,C+1,M+Z,_+1,C+1,M+B,_,C,M+j,_);for(let yt=0;yt<4;yt++)f.push(0,1,0),E.push(...at);T.push(ft,J,k,J,k,_t,ft,_t),A.push(b,b+1,b+2,b,b+2,b+3),b+=4}const bt=nn(i,C,M-1,_);if(!bt||!bt.isFluid){const yt=Fn(i,C,M-1,_);if(!se.isFaceOpaque(yt,ke)){p.push(C,M,_,C+1,M,_,C+1,M,_+1,C,M,_+1);for(let dt=0;dt<4;dt++)f.push(0,-1,0),E.push(...at);T.push(ft,_t,k,_t,k,J,ft,J),A.push(b,b+1,b+2,b,b+2,b+3),b+=4}}const Et=nn(i,C,M,_+1);if(!Et||!Et.isFluid){const yt=Fn(i,C,M,_+1);if(!se.isFaceOpaque(yt,ke)){p.push(C,M,_+1,C+1,M,_+1,C+1,M+Z,_+1,C,M+K,_+1);for(let dt=0;dt<4;dt++)f.push(0,0,1),E.push(...at);T.push(ft,_t,k,_t,k,J,ft,J),A.push(b,b+1,b+2,b,b+2,b+3),b+=4}}const N=nn(i,C,M,_-1);if(!N||!N.isFluid){const yt=Fn(i,C,M,_-1);if(!se.isFaceOpaque(yt,ke)){p.push(C+1,M,_,C,M,_,C,M+j,_,C+1,M+B,_);for(let dt=0;dt<4;dt++)f.push(0,0,-1),E.push(...at);T.push(ft,_t,k,_t,k,J,ft,J),A.push(b,b+1,b+2,b,b+2,b+3),b+=4}}const Gt=nn(i,C+1,M,_);if(!Gt||!Gt.isFluid){const yt=Fn(i,C+1,M,_);if(!se.isFaceOpaque(yt,ke)){p.push(C+1,M,_+1,C+1,M,_,C+1,M+B,_,C+1,M+Z,_+1);for(let dt=0;dt<4;dt++)f.push(1,0,0),E.push(...at);T.push(ft,_t,k,_t,k,J,ft,J),A.push(b,b+1,b+2,b,b+2,b+3),b+=4}}const mt=nn(i,C-1,M,_);if(!mt||!mt.isFluid){const yt=Fn(i,C-1,M,_);if(!se.isFaceOpaque(yt,ke)){p.push(C,M,_,C,M,_+1,C,M+K,_+1,C,M+j,_);for(let dt=0;dt<4;dt++)f.push(-1,0,0),E.push(...at);T.push(ft,_t,k,_t,k,J,ft,J),A.push(b,b+1,b+2,b,b+2,b+3),b+=4}}continue}const W=se.resolveBlockModel(di,P.name,P.properties),X=se.isFaceOpaque(P.name,ke);if(W&&W.elements.length>0)for(const j of W.elements)for(const B in j.faces){const Z=j.faces[B];if(Z.cullface){const st=se.getRotatedCullDirection(Z.cullface,W.rotX,W.rotY,W.rotZ);if(st&&se.isElementFaceOnBoundary(j,B)){const ft=Fn(i,C+st[0],M+st[1],_+st[2]);if(se.isFaceOpaque(ft,ke))continue}}const K=se.getTransformedElementFace(di,C,M,_,j,B,Z,W.rotX,W.rotY,W.rotZ);if(X){u.push(...K.positions),d.push(...K.normals),m.push(...K.uvs);for(let st=0;st<4;st++)v.push(1,1,1);x.push(L,L+1,L+2,L,L+2,L+3),L+=4}else{p.push(...K.positions),f.push(...K.normals),T.push(...K.uvs);for(let st=0;st<4;st++)E.push(1,1,1);A.push(b,b+1,b+2,b,b+2,b+3),b+=4}}else for(const j of R){const B=C+j.dir[0],Z=M+j.dir[1],K=_+j.dir[2];if(X&&se.isFaceOpaque(Fn(i,B,Z,K),ke))continue;const st=se.getFaceVertices(C,M,_,j.name),{u0:ft,v0:_t,u1:k,v1:J}=se.getTextureUV(di,P.name,j.name),at=[ft,J,ft,_t,k,_t,k,J];if(X){u.push(...st);for(let nt=0;nt<4;nt++)d.push(...j.norm),v.push(1,1,1);m.push(...at),x.push(L,L+1,L+2,L,L+2,L+3),L+=4}else{p.push(...st);for(let nt=0;nt<4;nt++)f.push(...j.norm),E.push(1,1,1);T.push(...at),A.push(b,b+1,b+2,b,b+2,b+3),b+=4}}}if(u.length>0&&As){const C=se.buildChunkMesh(u,d,m,x,As,v);De.add(C),br.push(C)}if(p.length>0&&ws){const C=se.buildChunkMesh(p,f,T,A,ws,E);De.add(C),br.push(C)}}function Fn(i,t,e,n){var o;if(t<0||e<0||n<0||t>=i.size.x||e>=i.size.y||n>=i.size.z)return"minecraft:air";const r=(e*i.size.z+n)*i.size.x+t,s=i.blocksData[r];return s&&((o=i.palette[s])==null?void 0:o.name)||"minecraft:air"}function ll(){if(!we)return;const i=we.regions[Si];if(!i)return;const t=new F(0,0,0),e=new F(i.size.x,i.size.y,i.size.z),n=new F().addVectors(t,e).multiplyScalar(.5);Fs.recenterTarget(n,an.target),an.update()}async function Mm(i){const t=i instanceof Uint8Array?i:new Uint8Array(i);let e=t;try{t[0]===31&&t[1]===139?e=rl(t):e=sm(t)}catch(r){console.warn("Decompression skipped/failed:",r)}let n=null;try{n=new _o(e,!1).parseRoot().value}catch{n=new _o(e,!0).parseRoot().value}if(n.Regions||n.Version)return Sm(n);if(n.Sponge||n.Palette||n.BlockData)return Em(n);if(n.size&&n.palette&&n.blocks)return ym(n);if(n.format_version||n.structure)return Tm(n);throw new Error("Unsupported schematic format")}function Sm(i){var s,o,a,l,c,h,u,d,m,v,x,p;const t={},e={};let n=0;const r=i.Regions||{};for(const f of Object.keys(r)){const T=r[f],E={x:Math.abs(Number(((s=T.Size)==null?void 0:s.x)??((o=T.Size)==null?void 0:o.X)??0)),y:Math.abs(Number(((a=T.Size)==null?void 0:a.y)??((l=T.Size)==null?void 0:l.Y)??0)),z:Math.abs(Number(((c=T.Size)==null?void 0:c.z)??((h=T.Size)==null?void 0:h.Z)??0))},A={x:Number(((u=T.Position)==null?void 0:u.x)??((d=T.Position)==null?void 0:d.X)??0),y:Number(((m=T.Position)==null?void 0:m.y)??((v=T.Position)==null?void 0:v.Y)??0),z:Number(((x=T.Position)==null?void 0:x.z)??((p=T.Position)==null?void 0:p.Z)??0)},b=(T.BlockStatePalette||[]).map(M=>({name:String(M.Name||"minecraft:air"),properties:M.Properties?Object.fromEntries(Object.entries(M.Properties).map(([_,D])=>[_,String(D)])):void 0})),R=E.x*E.y*E.z,C=new Uint16Array(R);if(T.BlockStates&&b.length>0){const M=Math.max(2,Math.ceil(Math.log2(b.length))),_=lm(T.BlockStates,M,R);for(let D=0;D<E.y;D++)for(let q=0;q<E.z;q++)for(let P=0;P<E.x;P++){const Y=(D*E.z+q)*E.x+P,W=_[Y];if(W>0&&W<b.length){const X=b[W];X&&X.name!=="minecraft:air"&&X.name!=="air"&&(C[Y]=W,n++,e[X.name]=(e[X.name]||0)+1)}}}t[f]={name:f,size:E,position:A,palette:b,blocksData:C}}return{format:"litematic",regions:t,totalBlocks:n,blockStats:e}}function Em(i){const t=i.Sponge||i,e=Number(t.Width||i.Width||0),n=Number(t.Height||i.Height||0),r=Number(t.Length||i.Length||0),s=t.Palette||i.Palette||{},o=[],a=new Map;for(const[x,p]of Object.entries(s)){const f=Number(p),T=x.split("[")[0];let E;if(x.includes("[")){const b=x.substring(x.indexOf("[")+1,x.indexOf("]"));E={};for(const R of b.split(",")){const[C,M]=R.split("=");C&&M&&(E[C]=M)}}const A={name:T,properties:E};let L=o.length;o.push(A),a.set(f,L)}const l=t.BlockData||i.BlockData||new Uint8Array(0),c=e*n*r,h=cm(l,c),u=new Uint16Array(c),d={};let m=0;for(let x=0;x<n;x++)for(let p=0;p<r;p++)for(let f=0;f<e;f++){const T=(x*r+p)*e+f,E=h[T],A=a.get(E)??0,L=o[A];L&&L.name!=="minecraft:air"&&L.name!=="air"&&(u[T]=A,m++,d[L.name]=(d[L.name]||0)+1)}return{format:"schem",regions:{Main:{name:"Main",size:{x:e,y:n,z:r},position:{x:0,y:0,z:0},palette:o,blocksData:u}},totalBlocks:m,blockStats:d}}function ym(i){const t=um(i),e={x:t.size[0],y:t.size[1],z:t.size[2]},n=t.palette.map(c=>({name:String(c.Name||"minecraft:air"),properties:c.Properties?Object.fromEntries(Object.entries(c.Properties).map(([h,u])=>[h,String(u)])):void 0})),r=e.x*e.y*e.z,s=new Uint16Array(r),o={};let a=0;for(const c of t.blocks){const h=c.state,u=n[h];if(u&&u.name!=="minecraft:air"&&u.name!=="air"){const d=(c.pos[1]*e.z+c.pos[2])*e.x+c.pos[0];d>=0&&d<r&&(s[d]=h,a++,o[u.name]=(o[u.name]||0)+1)}}return{format:"nbt",regions:{Main:{name:"Main",size:e,position:{x:0,y:0,z:0},palette:n,blocksData:s}},totalBlocks:a,blockStats:o}}function Tm(i){const t=hm(i),e={x:t.size[0],y:t.size[1],z:t.size[2]},n=t.palette.map(c=>({name:String(c.name||"minecraft:air"),properties:c.states?Object.fromEntries(Object.entries(c.states).map(([h,u])=>[h,String(u)])):void 0})),r=e.x*e.y*e.z,s=new Uint16Array(r),o={};let a=0;for(let c=0;c<e.x;c++)for(let h=0;h<e.y;h++)for(let u=0;u<e.z;u++){const d=(c*e.y+h)*e.z+u,m=t.layer0Indices[d];if(m>=0&&m<n.length){const v=n[m];if(v&&v.name!=="minecraft:air"&&v.name!=="air"){const x=(h*e.z+u)*e.x+c;s[x]=m,a++,o[v.name]=(o[v.name]||0)+1}}}return{format:"mcstructure",regions:{Main:{name:"Main",size:e,position:{x:0,y:0,z:0},palette:n,blocksData:s}},totalBlocks:a,blockStats:o}}async function cl(i){var t,e;window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),(t=document.getElementById("loading-overlay"))==null||t.classList.remove("hidden"),Ni("正在解压并解析投影文件...");try{let n;if(i&&i.length>0){const a=atob(i);n=new Uint8Array(a.length);for(let l=0;l<a.length;l++)n[l]=a.charCodeAt(l)}else{let a=await fetch("model.litematic");a.ok||(a=await fetch("sample.litematic"));const l=await a.arrayBuffer();n=new Uint8Array(l)}we=await Mm(n);const r=document.getElementById("format-badge");r&&(r.textContent=we.format.toUpperCase());const s=Object.keys(we.regions),o=document.getElementById("region-select");o&&(o.innerHTML="",s.forEach(a=>{const l=document.createElement("option");l.value=a,l.textContent=a,o.appendChild(l)}),s.length>1?o.classList.remove("hidden"):o.classList.add("hidden")),window.AndroidHost&&window.AndroidHost.onRegionsParsed(JSON.stringify(s)),Si=s[0]||"Main",await Os(Si),(e=document.getElementById("loading-overlay"))==null||e.classList.add("hidden"),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS")}catch(n){console.error("Failed to parse schematic:",n),Ni("解析失败: "+(n==null?void 0:n.message)),window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(n==null?void 0:n.message))}}async function Os(i){if(!we)return;const t=we.regions[i];if(!t)return;Si=i,window.AndroidHost&&window.AndroidHost.onLoadingProgress("RENDERING_0%"),await _m(t);const e=document.getElementById("slicer-slider"),n=document.getElementById("layer-value");e&&(e.min="0",e.max=String(t.size.y),e.value=String(t.size.y)),n&&(n.textContent=`${t.size.y} / ${t.size.y}`),Mi.setLayer(t.size.y);const r=new F(0,0,0),s=new F(t.size.x,t.size.y,t.size.z);Fs.frameBoundingBox(r,s,an.target),an.update(),window.AndroidHost&&(window.AndroidHost.onLoadingProgress("RENDERING_100%"),window.AndroidHost.onStatisticsUpdated(we.totalBlocks,JSON.stringify(we.blockStats)))}function bm(){var s,o;(s=document.getElementById("btn-reset-cam"))==null||s.addEventListener("click",ll),(o=document.getElementById("btn-toggle-day"))==null||o.addEventListener("click",()=>{En=!En,De.background=new Vt(En?8900331:0),Ui.intensity=En?1.2:.2});const i=document.getElementById("btn-toggle-slicer"),t=document.getElementById("slicer-card");i==null||i.addEventListener("click",()=>{if(gs=!gs,gs)i.classList.add("active"),t==null||t.classList.remove("hidden");else if(i.classList.remove("active"),t==null||t.classList.add("hidden"),we){const a=we.regions[Si];a&&Mi.setLayer(a.size.y)}});const e=document.getElementById("slicer-slider"),n=document.getElementById("layer-value");e==null||e.addEventListener("input",()=>{var l;const a=parseInt(e.value,10);if(n&&we){const c=((l=we.regions[Si])==null?void 0:l.size.y)||100;n.textContent=`${a} / ${c}`}Mi.setLayer(a)});const r=document.getElementById("region-select");r==null||r.addEventListener("change",()=>{Os(r.value)})}window.loadLitematic=cl;window.switchRegion=Os;window.resetCamera=ll;window.toggleCameraView=()=>{};window.toggleDayNight=()=>{En=!En,De.background=new Vt(En?8900331:0),Ui.intensity=En?1.2:.2};window.setBackgroundColor=i=>{De&&(De.background=new Vt(i))};window.startRenderLoop=sl;window.stopRenderLoop=al;window.destroyRenderer=()=>{al(),ol()};window.addEventListener("DOMContentLoaded",()=>{pm()});
