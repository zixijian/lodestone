var Id=Object.defineProperty;var Ud=(n,e,t)=>e in n?Id(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var L=(n,e,t)=>Ud(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tc="164",xr={ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nd=0,Sc=1,kd=2,Qh=1,Fd=2,ii=3,gn=0,tn=1,zn=2,Pi=0,$r=1,wc=2,Mc=3,bc=4,Od=5,Qi=100,Bd=101,zd=102,Hd=103,Gd=104,Vd=200,Wd=201,Xd=202,qd=203,Rl=204,Pl=205,$d=206,Yd=207,jd=208,Zd=209,Kd=210,Jd=211,Qd=212,ep=213,tp=214,np=0,ip=1,rp=2,Ga=3,sp=4,ap=5,op=6,lp=7,ef=0,cp=1,up=2,Li=0,hp=1,fp=2,dp=3,tf=4,pp=5,mp=6,gp=7,nf=300,Jr=301,Qr=302,Ll=303,Dl=304,fo=306,Il=1e3,Rn=1001,Ul=1002,xt=1003,_p=1004,Ss=1005,Yt=1006,Ao=1007,ir=1008,zi=1009,vp=1010,xp=1011,rf=1012,sf=1013,Hi=1014,Pn=1015,es=1016,af=1017,of=1018,Vs=1020,yp=35902,Sp=1021,wp=1022,Wt=1023,Mp=1024,bp=1025,Di=1026,Ps=1027,Ep=1028,lf=1029,Tp=1030,cf=1031,uf=1033,Co=33776,Ro=33777,Po=33778,Lo=33779,Ec=35840,Tc=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Lc=37496,Dc=37808,Ic=37809,Uc=37810,Nc=37811,kc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,Hc=37817,Gc=37818,Vc=37819,Wc=37820,Xc=37821,Do=36492,qc=36494,$c=36495,Ap=36283,Yc=36284,jc=36285,Zc=36286,Cp=3200,Rp=3201,Pp=0,Lp=1,Ei="",kn="srgb",Vi="srgb-linear",nc="display-p3",po="display-p3-linear",Va="linear",mt="srgb",Wa="rec709",Xa="p3",Sr=7680,Kc=519,Dp=512,Ip=513,Up=514,hf=515,Np=516,kp=517,Fp=518,Op=519,Jc=35044,Qc="300 es",oi=2e3,qa=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,Nl=180/Math.PI;function Ws(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function Bp(n,e){return(n%e+e)%e}function Io(n,e,t){return(1-t)*n+t*e}function fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const zp={DEG2RAD:Fa};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],v=r[4],y=r[7],P=r[2],C=r[5],T=r[8];return s[0]=a*_+o*M+c*P,s[3]=a*m+o*v+c*C,s[6]=a*p+o*y+c*T,s[1]=l*_+u*M+f*P,s[4]=l*m+u*v+f*C,s[7]=l*p+u*y+f*T,s[2]=d*_+h*M+g*P,s[5]=d*m+h*v+g*C,s[8]=d*p+h*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new Ye;function ff(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hp(){const n=$a("canvas");return n.style.display="block",n}const eu={};function Gp(n){n in eu||(eu[n]=!0,console.warn(n))}const tu=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[Vi]:{transfer:Va,primaries:Wa,toReference:n=>n,fromReference:n=>n},[kn]:{transfer:mt,primaries:Wa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[po]:{transfer:Va,primaries:Xa,toReference:n=>n.applyMatrix3(nu),fromReference:n=>n.applyMatrix3(tu)},[nc]:{transfer:mt,primaries:Xa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nu),fromReference:n=>n.applyMatrix3(tu).convertLinearToSRGB()}},Vp=new Set([Vi,po]),ht={enabled:!0,_workingColorSpace:Vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Vp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ta[e].toReference,r=ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ta[n].primaries},getTransfer:function(n){return n===Ei?Va:ta[n].transfer}};function Yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function No(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wr;class Wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=$a("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yr(t[i]/255)*255):t[i]=Yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ko(r[a].image)):s.push(ko(r[a]))}else s=ko(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;class Kt extends _r{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Rn,r=Rn,s=Yt,a=ir,o=Wt,c=zi,l=Kt.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ws(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=nf;Kt.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(h+1)/2,P=(p+1)/2,C=(u+d)/4,T=(f+_)/4,U=(g+m)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=U/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $p extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends $p{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pf extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yp extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=1-o;const p=c*d+l*h+u*g+f*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,p*M);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const y=o*M;if(c=c*m+d*y,l=l*m+h*y,u=u*m+g*y,f=f*m+_*y,m===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=P,l*=P,u*=P,f*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-o*h,e[t+2]=l*g+u*h+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new W,iu=new hr;class Xs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),ia.subVectors(this.max,ds),Mr.subVectors(e.a,ds),br.subVectors(e.b,ds),Er.subVectors(e.c,ds),di.subVectors(br,Mr),pi.subVectors(Er,br),Xi.subVectors(Mr,Er);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Xi.z,Xi.y,di.z,0,-di.x,pi.z,0,-pi.x,Xi.z,0,-Xi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Xi.y,Xi.x,0];return!Oo(t,Mr,br,Er,ia)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Mr,br,Er,ia))?!1:(ra.crossVectors(di,pi),t=[ra.x,ra.y,ra.z],Oo(t,Mr,br,Er,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new W,new W,new W,new W,new W,new W,new W,new W],xn=new W,na=new Xs,Mr=new W,br=new W,Er=new W,di=new W,pi=new W,Xi=new W,ds=new W,ia=new W,ra=new W,qi=new W;function Oo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){qi.fromArray(n,s);const o=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const jp=new Xs,ps=new W,Bo=new W;class mo{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Bo)),this.expandByPoint(ps.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new W,zo=new W,sa=new W,mi=new W,Ho=new W,aa=new W,Go=new W;class ic{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zo.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(zo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=mi.dot(this.direction),c=-mi.dot(sa),l=mi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zo).addScaledVector(sa,d),h}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){Ho.subVectors(t,e),aa.subVectors(i,e),Go.crossVectors(Ho,aa);let a=this.direction.dot(Go),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const c=o*this.direction.dot(aa.crossVectors(mi,aa));if(c<0)return null;const l=o*this.direction.dot(Ho.cross(mi));if(l<0||c+l>a)return null;const u=-o*mi.dot(Go);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zp,e,Kp)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),gi.crossVectors(i,sn),gi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),gi.crossVectors(i,sn)),gi.normalize(),oa.crossVectors(sn,gi),r[0]=gi.x,r[4]=oa.x,r[8]=sn.x,r[1]=gi.y,r[5]=oa.y,r[9]=sn.y,r[2]=gi.z,r[6]=oa.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],v=i[7],y=i[11],P=i[15],C=r[0],T=r[4],U=r[8],b=r[12],x=r[1],E=r[5],k=r[9],I=r[13],B=r[2],D=r[6],H=r[10],j=r[14],O=r[3],X=r[7],Z=r[11],te=r[15];return s[0]=a*C+o*x+c*B+l*O,s[4]=a*T+o*E+c*D+l*X,s[8]=a*U+o*k+c*H+l*Z,s[12]=a*b+o*I+c*j+l*te,s[1]=u*C+f*x+d*B+h*O,s[5]=u*T+f*E+d*D+h*X,s[9]=u*U+f*k+d*H+h*Z,s[13]=u*b+f*I+d*j+h*te,s[2]=g*C+_*x+m*B+p*O,s[6]=g*T+_*E+m*D+p*X,s[10]=g*U+_*k+m*H+p*Z,s[14]=g*b+_*I+m*j+p*te,s[3]=M*C+v*x+y*B+P*O,s[7]=M*T+v*E+y*D+P*X,s[11]=M*U+v*k+y*H+P*Z,s[15]=M*b+v*I+y*j+P*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*h-i*c*h)+_*(+t*c*h-t*l*d+s*a*d-r*a*h+r*l*u-s*c*u)+m*(+t*l*f-t*o*h-s*a*f+i*a*h+s*o*u-i*l*u)+p*(-r*o*u-t*c*f+t*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*l-_*d*l+_*c*h-o*m*h-f*c*p+o*d*p,v=g*d*l-u*m*l-g*c*h+a*m*h+u*c*p-a*d*p,y=u*_*l-g*f*l+g*o*h-a*_*h-u*o*p+a*f*p,P=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,C=t*M+i*v+r*y+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=M*T,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*T,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*T,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*h-i*c*h)*T,e[4]=v*T,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*T,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*T,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*h+t*c*h)*T,e[8]=y*T,e[9]=(g*f*s-u*_*s-g*i*h+t*_*h+u*i*p-t*f*p)*T,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*T,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*h-t*o*h)*T,e[12]=P*T,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*T,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*T,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,M=c*l,v=c*u,y=c*f,P=i.x,C=i.y,T=i.z;return r[0]=(1-(_+p))*P,r[1]=(h+y)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(h-y)*C,r[5]=(1-(d+p))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(g+v)*T,r[9]=(m-M)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const a=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const l=1/s,u=1/a,f=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=oi){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,g;if(o===oi)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===qa)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=oi){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*l,h=(i+r)*u;let g,_;if(o===oi)g=(a+s)*f,_=-2*f;else if(o===qa)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tr=new W,yn=new ct,Zp=new W(0,0,0),Kp=new W(1,1,1),gi=new W,oa=new W,sn=new W,ru=new ct,su=new hr;class ci{constructor(e=0,t=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jp=0;const au=new W,Ar=new hr,Qn=new ct,la=new W,ms=new W,Qp=new W,em=new hr,ou=new W(1,0,0),lu=new W(0,1,0),cu=new W(0,0,1),uu={type:"added"},tm={type:"removed"},Cr={type:"childadded",child:null},Vo={type:"childremoved",child:null};class nn extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new W,t=new ci,i=new hr,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ye}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ms,la,this.up):Qn.lookAt(la,ms,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tm),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new W(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new W,ei=new W,Wo=new W,ti=new W,Rr=new W,Pr=new W,hu=new W,Xo=new W,qo=new W,$o=new W;class Hn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),ei.subVectors(i,t),Wo.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(ei),c=Sn.dot(Wo),l=ei.dot(ei),u=ei.dot(Wo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),ei.subVectors(e,t),Sn.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Sn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Rr.subVectors(r,i),Pr.subVectors(s,i),Xo.subVectors(e,i);const c=Rr.dot(Xo),l=Pr.dot(Xo);if(c<=0&&l<=0)return t.copy(i);qo.subVectors(e,r);const u=Rr.dot(qo),f=Pr.dot(qo);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Rr,a);$o.subVectors(e,s);const h=Rr.dot($o),g=Pr.dot($o);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Pr,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return hu.subVectors(s,r),o=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(hu,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Rr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Yo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=Bp(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Yo(a,s,e+1/3),this.g=Yo(a,s,e),this.b=Yo(a,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return ht.fromWorkingColorSpace(Ht.copy(this),e),Math.round(qt(Ht.r*255,0,255))*65536+Math.round(qt(Ht.g*255,0,255))*256+Math.round(qt(Ht.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=kn){ht.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,r=Ht.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(ca);const i=Io(_i.h,ca.h,t),r=Io(_i.s,ca.s,t),s=Io(_i.l,ca.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ht=new Qe;Qe.NAMES=gf;let nm=0;class qs extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=$r,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _f extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new W,ua=new Ue;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class vf extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xf extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let im=0;const fn=new ct,jo=new nn,Lr=new W,an=new Xs,gs=new Xs,Dt=new W;class Yn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?xf:vf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(an.min,gs.min),an.expandByPoint(Dt),Dt.addVectors(an.max,gs.max),an.expandByPoint(Dt)):(an.expandByPoint(gs.min),an.expandByPoint(gs.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),Dt.add(Lr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new W,c[U]=new W;const l=new W,u=new W,f=new W,d=new Ue,h=new Ue,g=new Ue,_=new W,m=new W;function p(U,b,x){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,U),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const E=1/(h.x*g.y-g.x*h.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(E),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(E),o[U].add(_),o[b].add(_),o[x].add(_),c[U].add(m),c[b].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,b=M.length;U<b;++U){const x=M[U],E=x.start,k=x.count;for(let I=E,B=E+k;I<B;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new W,y=new W,P=new W,C=new W;function T(U){P.fromBufferAttribute(r,U),C.copy(P);const b=o[U];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),y.crossVectors(C,b);const E=y.dot(c[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,E)}for(let U=0,b=M.length;U<b;++U){const x=M[U],E=x.start,k=x.count;for(let I=E,B=E+k;I<B;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,l=new W,u=new W,f=new W;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new In(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new ct,$i=new ic,ha=new mo,du=new W,Dr=new W,Ir=new W,Ur=new W,Zo=new W,fa=new W,da=new Ue,pa=new Ue,ma=new Ue,pu=new W,mu=new W,gu=new W,ga=new W,_a=new W;let Qt=class extends nn{constructor(e=new Yn,t=new _f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Zo.fromBufferAttribute(f,e),a?fa.addScaledVector(Zo,u):fa.addScaledVector(Zo.sub(t),u))}t.add(fa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(ha.containsPoint($i.origin)===!1&&($i.intersectSphere(ha,du)===null||$i.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(fu.copy(s).invert(),$i.copy(e.ray).applyMatrix4(fu),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,P=v;y<P;y+=3){const C=o.getX(y),T=o.getX(y+1),U=o.getX(y+2);r=va(this,p,e,i,l,u,f,C,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);r=va(this,a,e,i,l,u,f,M,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),v=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,P=v;y<P;y+=3){const C=y,T=y+1,U=y+2;r=va(this,p,e,i,l,u,f,C,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,y=m+2;r=va(this,a,e,i,l,u,f,M,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function rm(n,e,t,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gn,o),c===null)return null;_a.copy(o),_a.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:n}}function va(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Dr),n.getVertexPosition(c,Ir),n.getVertexPosition(l,Ur);const u=rm(n,e,t,i,Dr,Ir,Ur,ga);if(u){r&&(da.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,c),ma.fromBufferAttribute(r,l),u.uv=Hn.getInterpolation(ga,Dr,Ir,Ur,da,pa,ma,new Ue)),s&&(da.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,c),ma.fromBufferAttribute(s,l),u.uv1=Hn.getInterpolation(ga,Dr,Ir,Ur,da,pa,ma,new Ue)),a&&(pu.fromBufferAttribute(a,o),mu.fromBufferAttribute(a,c),gu.fromBufferAttribute(a,l),u.normal=Hn.getInterpolation(ga,Dr,Ir,Ur,pu,mu,gu,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new W,materialIndex:0};Hn.getNormal(Dr,Ir,Ur,f.normal),u.face=f}return u}class $s extends Yn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function g(_,m,p,M,v,y,P,C,T,U,b){const x=y/T,E=P/U,k=y/2,I=P/2,B=C/2,D=T+1,H=U+1;let j=0,O=0;const X=new W;for(let Z=0;Z<H;Z++){const te=Z*E-I;for(let ve=0;ve<D;ve++){const pe=ve*x-k;X[_]=pe*M,X[m]=te*v,X[p]=B,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=C>0?1:-1,u.push(X.x,X.y,X.z),f.push(ve/T),f.push(1-Z/U),j+=1}}for(let Z=0;Z<U;Z++)for(let te=0;te<T;te++){const ve=d+te+D*Z,pe=d+te+D*(Z+1),z=d+(te+1)+D*(Z+1),re=d+(te+1)+D*Z;c.push(ve,pe,re),c.push(pe,z,re),O+=6}o.addGroup(h,O,b),h+=O,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=ts(n[t]);for(const r in i)e[r]=i[r]}return e}function sm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const am={clone:ts,merge:Xt};var om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sf extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new W,_u=new Ue,vu=new Ue;class ln extends Sf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,_u,vu),t.subVectors(vu,_u)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,kr=1;class cm extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Nr,kr,e,t);r.layers=this.layers,this.add(r);const s=new ln(Nr,kr,e,t);s.layers=this.layers,this.add(s);const a=new ln(Nr,kr,e,t);a.layers=this.layers,this.add(a);const o=new ln(Nr,kr,e,t);o.layers=this.layers,this.add(o);const c=new ln(Nr,kr,e,t);c.layers=this.layers,this.add(c);const l=new ln(Nr,kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wf extends Kt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class um extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $s(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Pi});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===ir&&(t.minFilter=Yt),new cm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ko=new W,hm=new W,fm=new Ye;class yi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ko.subVectors(i,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ko),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fm.getNormalMatrix(e),r=this.coplanarPoint(Ko).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new mo,xa=new W;class Mf{constructor(e=new yi,t=new yi,i=new yi,r=new yi,s=new yi,a=new yi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,m-h,y-p).normalize(),i[1].setComponents(c+s,d+l,m+h,y+p).normalize(),i[2].setComponents(c+a,d+u,m+g,y+M).normalize(),i[3].setComponents(c-a,d-u,m-g,y-M).normalize(),i[4].setComponents(c-o,d-f,m-_,y-v).normalize(),t===oi)i[5].setComponents(c+o,d+f,m+_,y+v).normalize();else if(t===qa)i[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dm(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,o),f.count===-1&&d.length===0&&n.bufferSubData(l,0,u),d.length!==0){for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class or extends Yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let v=0;v<l;v++){const y=v*f-s;g.push(y,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const v=M+l*p,y=M+l*(p+1),P=M+1+l*(p+1),C=M+1+l*p;h.push(v,y,C),h.push(y,P,C)}this.setIndex(h),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
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
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`
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
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,fg=`struct PhysicalMaterial {
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
}`,dg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,y0=`#if DEPTH_PACKING == 3200
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
}`,S0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,C0=`uniform vec3 diffuse;
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
}`,R0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,I0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,F0=`#define STANDARD
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
}`,O0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,z0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:vm,alphatest_pars_fragment:xm,aomap_fragment:ym,aomap_pars_fragment:Sm,batching_pars_vertex:wm,batching_vertex:Mm,begin_vertex:bm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Dm,color_fragment:Im,color_pars_fragment:Um,color_pars_vertex:Nm,color_vertex:km,common:Fm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Vm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Ym,envmap_pars_vertex:jm,envmap_physical_pars_fragment:ag,envmap_vertex:Zm,fog_vertex:Km,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:rg,lights_pars_begin:sg,lights_toon_fragment:og,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:ug,lights_physical_fragment:hg,lights_physical_pars_fragment:fg,lights_fragment_begin:dg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:xg,map_fragment:yg,map_pars_fragment:Sg,map_particle_fragment:wg,map_particle_pars_fragment:Mg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Cg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ig,normal_pars_vertex:Ug,normal_vertex:Ng,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Kg,shadowmask_pars_fragment:Jg,skinbase_vertex:Qg,skinning_pars_vertex:e0,skinning_vertex:t0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:r0,tonemapping_fragment:s0,tonemapping_pars_fragment:a0,transmission_fragment:o0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:u0,uv_vertex:h0,worldpos_vertex:f0,background_vert:d0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:_0,cube_frag:v0,depth_vert:x0,depth_frag:y0,distanceRGBA_vert:S0,distanceRGBA_frag:w0,equirect_vert:M0,equirect_frag:b0,linedashed_vert:E0,linedashed_frag:T0,meshbasic_vert:A0,meshbasic_frag:C0,meshlambert_vert:R0,meshlambert_frag:P0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:I0,meshnormal_frag:U0,meshphong_vert:N0,meshphong_frag:k0,meshphysical_vert:F0,meshphysical_frag:O0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:H0,points_frag:G0,shadow_vert:V0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},On={basic:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Xt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Xt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Xt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Xt([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Xt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Xt([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Xt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Xt([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Xt([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Xt([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};On.physical={uniforms:Xt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ya={r:0,b:0,g:0},ji=new ci,$0=new ct;function Y0(n,e,t,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const y=g(M);y===null?p(o,c):y&&y.isColor&&(p(y,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(M,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===fo)?(u===void 0&&(u=new Qt(new $s(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:ts(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ji.copy(v.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(ji)),u.material.toneMapped=ht.getTransfer(y.colorSpace)!==mt,(f!==y||d!==y.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qt(new or(2,2),new Vt({name:"BackgroundMaterial",uniforms:ts(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(ya,yf(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function j0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,E,k,I,B){let D=!1;const H=f(I,k,E);s!==H&&(s=H,l(s.object)),D=h(x,I,k,B),D&&g(x,I,k,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,y(x,E,k,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,E,k){const I=k.wireframe===!0;let B=i[x.id];B===void 0&&(B={},i[x.id]=B);let D=B[E.id];D===void 0&&(D={},B[E.id]=D);let H=D[I];return H===void 0&&(H=d(c()),D[I]=H),H}function d(x){const E=[],k=[],I=[];for(let B=0;B<t;B++)E[B]=0,k[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:I,object:x,attributes:{},index:null}}function h(x,E,k,I){const B=s.attributes,D=E.attributes;let H=0;const j=k.getAttributes();for(const O in j)if(j[O].location>=0){const Z=B[O];let te=D[O];if(te===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),Z===void 0||Z.attribute!==te||te&&Z.data!==te.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function g(x,E,k,I){const B={},D=E.attributes;let H=0;const j=k.getAttributes();for(const O in j)if(j[O].location>=0){let Z=D[O];Z===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const te={};te.attribute=Z,Z&&Z.data&&(te.data=Z.data),B[O]=te,H++}s.attributes=B,s.attributesNum=H,s.index=I}function _(){const x=s.newAttributes;for(let E=0,k=x.length;E<k;E++)x[E]=0}function m(x){p(x,0)}function p(x,E){const k=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;k[x]=1,I[x]===0&&(n.enableVertexAttribArray(x),I[x]=1),B[x]!==E&&(n.vertexAttribDivisor(x,E),B[x]=E)}function M(){const x=s.newAttributes,E=s.enabledAttributes;for(let k=0,I=E.length;k<I;k++)E[k]!==x[k]&&(n.disableVertexAttribArray(k),E[k]=0)}function v(x,E,k,I,B,D,H){H===!0?n.vertexAttribIPointer(x,E,k,B,D):n.vertexAttribPointer(x,E,k,I,B,D)}function y(x,E,k,I){_();const B=I.attributes,D=k.getAttributes(),H=E.defaultAttributeValues;for(const j in D){const O=D[j];if(O.location>=0){let X=B[j];if(X===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){const Z=X.normalized,te=X.itemSize,ve=e.get(X);if(ve===void 0)continue;const pe=ve.buffer,z=ve.type,re=ve.bytesPerElement,de=z===n.INT||z===n.UNSIGNED_INT||X.gpuType===sf;if(X.isInterleavedBufferAttribute){const oe=X.data,Te=oe.stride,he=X.offset;if(oe.isInstancedInterleavedBuffer){for(let N=0;N<O.locationSize;N++)p(O.location+N,oe.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let N=0;N<O.locationSize;N++)m(O.location+N);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let N=0;N<O.locationSize;N++)v(O.location+N,te/O.locationSize,z,Z,Te*re,(he+te/O.locationSize*N)*re,de)}else{if(X.isInstancedBufferAttribute){for(let oe=0;oe<O.locationSize;oe++)p(O.location+oe,X.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let oe=0;oe<O.locationSize;oe++)m(O.location+oe);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let oe=0;oe<O.locationSize;oe++)v(O.location+oe,te/O.locationSize,z,Z,te*re,te/O.locationSize*oe*re,de)}}else if(H!==void 0){const Z=H[j];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(O.location,Z);break;case 3:n.vertexAttrib3fv(O.location,Z);break;case 4:n.vertexAttrib4fv(O.location,Z);break;default:n.vertexAttrib1fv(O.location,Z)}}}}M()}function P(){U();for(const x in i){const E=i[x];for(const k in E){const I=E[k];for(const B in I)u(I[B].object),delete I[B];delete E[k]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const k in E){const I=E[k];for(const B in I)u(I[B].object),delete I[B];delete E[k]}delete i[x.id]}function T(x){for(const E in i){const k=i[E];if(k[x.id]===void 0)continue;const I=k[x.id];for(const B in I)u(I[B].object),delete I[B];delete k[x.id]}}function U(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Z0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(l[h],u[h]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function K0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Wt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const T=C===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pn&&!T)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:y,maxSamples:P}}function J0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new yi,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,v=M*4;let y=p.clippingState||null;c.value=y,y=u(g,d,v,h);for(let P=0;P!==v;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=h;v!==_;++v,y+=4)a.copy(f[v]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Q0(n){let e=new WeakMap;function t(a,o){return o===Ll?a.mapping=Jr:o===Dl&&(a.mapping=Qr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ll||o===Dl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new um(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ya extends Sf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,xu=[.125,.215,.35,.446,.526,.582],er=20,Jo=new Ya,yu=new Qe;let Qo=null,el=0,tl=0,nl=!1;const Ji=(1+Math.sqrt(5))/2,Fr=1/Ji,Su=[new W(-Ji,Fr,0),new W(Ji,Fr,0),new W(-Fr,0,Ji),new W(Fr,0,Ji),new W(0,Ji,-Fr),new W(0,Ji,Fr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:es,format:Wt,colorSpace:Vi,depthBuffer:!1},r=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e_(s)),this._blurMaterial=t_(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,i,r){const o=new ln(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(yu),u.toneMapping=Li,u.autoClear=!1;const h=new _f({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Qt(new $s,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(yu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Sa(r,M*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Sa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Su[(r-s-1)%Su.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*er-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):er;m>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let M=0;for(let T=0;T<er;++T){const U=T/_,b=Math.exp(-U*U/2);p.push(b),T===0?M+=b:T<m&&(M+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-Wr?r-v+Wr:0),C=4*(this._cubeSize-y);Sa(t,P,C,3*y,2*y),c.setRenderTarget(t),c.render(f,Jo)}}function e_(n){const e=[],t=[],i=[];let r=n;const s=n-Wr+1+xu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Wr?c=xu[a-n+Wr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),v=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let C=0;C<h;C++){const T=C%3*2/3-1,U=C>2?0:-1,b=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];M.set(b,_*g*C),v.set(d,m*g*C);const x=[C,C,C,C,C,C];y.set(x,p*g*C)}const P=new Yn;P.setAttribute("position",new In(M,_)),P.setAttribute("uv",new In(v,m)),P.setAttribute("faceIndex",new In(y,p)),e.push(P),r>Wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mu(n,e,t){const i=new Ln(n,e,t);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function t_(n,e,t){const i=new Float32Array(er),r=new W(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function bu(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Eu(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function n_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ll||c===Dl,u=c===Jr||c===Qr;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new wu(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new wu(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function i_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r_(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let v=0,y=M.length;v<y;v+=3){const P=M[v+0],C=M[v+1],T=M[v+2];d.push(P,C,C,T,T,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const P=v+0,C=v+1,T=v+2;d.push(P,C,C,T,T,P)}}else return;const m=new(ff(d)?xf:vf)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function s_(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function l(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*a,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,h[m]);else{_.multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M];for(let M=0;M<_.length;M++)t.update(p,i,_[M])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function a_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function o_(n,e,t){const i=new WeakMap,r=new Ft;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let b=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;h===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*P*4*f),T=new pf(C,y,P,f);T.type=Pn,T.needsUpdate=!0;const U=v*4;for(let x=0;x<f;x++){const E=m[x],k=p[x],I=M[x],B=y*P*4*x;for(let D=0;D<E.count;D++){const H=D*U;h===!0&&(r.fromBufferAttribute(E,D),C[B+H+0]=r.x,C[B+H+1]=r.y,C[B+H+2]=r.z,C[B+H+3]=0),g===!0&&(r.fromBufferAttribute(k,D),C[B+H+4]=r.x,C[B+H+5]=r.y,C[B+H+6]=r.z,C[B+H+7]=0),_===!0&&(r.fromBufferAttribute(I,D),C[B+H+8]=r.x,C[B+H+9]=r.y,C[B+H+10]=r.z,C[B+H+11]=I.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new Ue(y,P)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function l_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class ja extends Kt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Di,u!==Di&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Di&&(i=Hi),i===void 0&&u===Ps&&(i=Vs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=c!==void 0?c:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ef=new Kt,Tf=new ja(1,1);Tf.compareFunction=hf;const Af=new pf,Cf=new Yp,Rf=new wf,Tu=[],Au=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);function ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tu[r];if(s===void 0&&(s=new Float32Array(r),Tu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function d_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Pu.set(i),n.uniformMatrix2fv(this.addr,!1,Pu),Pt(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),Pt(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),Pt(t,i)}}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function b_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Tf:Ef;t.setTexture2D(e||s,r)}function E_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cf,r)}function T_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rf,r)}function A_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Af,r)}function C_(n){switch(n){case 5126:return c_;case 35664:return u_;case 35665:return h_;case 35666:return f_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return y_;case 36294:return S_;case 36295:return w_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}function R_(n,e){n.uniform1fv(this.addr,e)}function P_(n,e){const t=ss(e,this.size,2);n.uniform2fv(this.addr,t)}function L_(n,e){const t=ss(e,this.size,3);n.uniform3fv(this.addr,t)}function D_(n,e){const t=ss(e,this.size,4);n.uniform4fv(this.addr,t)}function I_(n,e){const t=ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U_(n,e){const t=ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N_(n,e){const t=ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k_(n,e){n.uniform1iv(this.addr,e)}function F_(n,e){n.uniform2iv(this.addr,e)}function O_(n,e){n.uniform3iv(this.addr,e)}function B_(n,e){n.uniform4iv(this.addr,e)}function z_(n,e){n.uniform1uiv(this.addr,e)}function H_(n,e){n.uniform2uiv(this.addr,e)}function G_(n,e){n.uniform3uiv(this.addr,e)}function V_(n,e){n.uniform4uiv(this.addr,e)}function W_(n,e,t){const i=this.cache,r=e.length,s=go(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ef,s[a])}function X_(n,e,t){const i=this.cache,r=e.length,s=go(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cf,s[a])}function q_(n,e,t){const i=this.cache,r=e.length,s=go(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rf,s[a])}function $_(n,e,t){const i=this.cache,r=e.length,s=go(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Af,s[a])}function Y_(n){switch(n){case 5126:return R_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return I_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return k_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return $_}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class Z_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class K_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Lu(n,e){n.seq.push(e),n.map[e.id]=e}function J_(n,e,t){const i=n.name,r=i.length;for(il.lastIndex=0;;){const s=il.exec(i),a=il.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Lu(t,l===void 0?new j_(o,n,e):new Z_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new K_(o),Lu(t,f)),t=f}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);J_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q_=37297;let ev=0;function tv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function nv(n){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n);let i;switch(e===t?i="":e===Xa&&t===Wa?i="LinearDisplayP3ToLinearSRGB":e===Wa&&t===Xa&&(i="LinearSRGBToLinearDisplayP3"),n){case Vi:case po:return[i,"LinearTransferOETF"];case kn:case nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Iu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(e),a)}else return r}function iv(n,e){const t=nv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rv(n,e){let t;switch(e){case hp:t="Linear";break;case fp:t="Reinhard";break;case dp:t="OptimizedCineon";break;case tf:t="ACESFilmic";break;case mp:t="AgX";break;case gp:t="Neutral";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function av(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ov(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ws(n){return n!==""}function Uu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(lv,uv)}const cv=new Map;function uv(n,e){let t=$e[e];if(t===void 0){const i=cv.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(n){return n.replace(hv,fv)}function fv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function pv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function gv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ef:e="ENVMAP_BLENDING_MULTIPLY";break;case cp:e="ENVMAP_BLENDING_MIX";break;case up:e="ENVMAP_BLENDING_ADD";break}return e}function _v(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=dv(t),l=pv(t),u=mv(t),f=gv(t),d=_v(t),h=sv(t),g=av(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?$e.tonemapping_pars_fragment:"",t.toneMapping!==Li?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),a=kl(a),a=Uu(a,t),a=Nu(a,t),o=kl(o),o=Uu(o,t),o=Nu(o,t),a=ku(a),o=ku(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+a,y=M+p+o,P=Du(r,r.VERTEX_SHADER,v),C=Du(r,r.FRAGMENT_SHADER,y);r.attachShader(_,P),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(E){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(P).trim(),B=r.getShaderInfoLog(C).trim();let D=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,C);else{const j=Iu(r,P,"vertex"),O=Iu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+j+`
`+O)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||B==="")&&(H=!1);H&&(E.diagnostics={runnable:D,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(P),r.deleteShader(C),U=new Oa(r,_),b=ov(r,_)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,Q_)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let xv=0;class yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sv(e),t.set(e,i)),i}}class Sv{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}}function wv(n,e,t,i,r,s,a){const o=new mf,c=new yv,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,E,k,I){const B=k.fog,D=I.geometry,H=b.isMeshStandardMaterial?k.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),O=j&&j.mapping===fo?j.image.height:null,X=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=Z!==void 0?Z.length:0;let ve=0;D.morphAttributes.position!==void 0&&(ve=1),D.morphAttributes.normal!==void 0&&(ve=2),D.morphAttributes.color!==void 0&&(ve=3);let pe,z,re,de;if(X){const et=On[X];pe=et.vertexShader,z=et.fragmentShader}else pe=b.vertexShader,z=b.fragmentShader,c.update(b),re=c.getVertexShaderID(b),de=c.getFragmentShaderID(b);const oe=n.getRenderTarget(),Te=I.isInstancedMesh===!0,he=I.isBatchedMesh===!0,N=!!b.map,ce=!!b.matcap,q=!!j,Ee=!!b.aoMap,Me=!!b.lightMap,De=!!b.bumpMap,be=!!b.normalMap,ze=!!b.displacementMap,st=!!b.emissiveMap,R=!!b.metalnessMap,w=!!b.roughnessMap,F=b.anisotropy>0,Y=b.clearcoat>0,ee=b.dispersion>0,ne=b.iridescence>0,Se=b.sheen>0,me=b.transmission>0,fe=F&&!!b.anisotropyMap,Ie=Y&&!!b.clearcoatMap,ue=Y&&!!b.clearcoatNormalMap,Ae=Y&&!!b.clearcoatRoughnessMap,ke=ne&&!!b.iridescenceMap,Ce=ne&&!!b.iridescenceThicknessMap,ye=Se&&!!b.sheenColorMap,ae=Se&&!!b.sheenRoughnessMap,He=!!b.specularMap,nt=!!b.specularColorMap,Oe=!!b.specularIntensityMap,S=me&&!!b.transmissionMap,G=me&&!!b.thicknessMap,$=!!b.gradientMap,le=!!b.alphaMap,ge=b.alphaTest>0,Xe=!!b.alphaHash,Ke=!!b.extensions;let vt=Li;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Lt={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:pe,fragmentShader:z,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:de,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:he,instancing:Te,instancingColor:Te&&I.instanceColor!==null,instancingMorph:Te&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Vi,alphaToCoverage:!!b.alphaToCoverage,map:N,matcap:ce,envMap:q,envMapMode:q&&j.mapping,envMapCubeUVHeight:O,aoMap:Ee,lightMap:Me,bumpMap:De,normalMap:be,displacementMap:d&&ze,emissiveMap:st,normalMapObjectSpace:be&&b.normalMapType===Lp,normalMapTangentSpace:be&&b.normalMapType===Pp,metalnessMap:R,roughnessMap:w,anisotropy:F,anisotropyMap:fe,clearcoat:Y,clearcoatMap:Ie,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:ee,iridescence:ne,iridescenceMap:ke,iridescenceThicknessMap:Ce,sheen:Se,sheenColorMap:ye,sheenRoughnessMap:ae,specularMap:He,specularColorMap:nt,specularIntensityMap:Oe,transmission:me,transmissionMap:S,thicknessMap:G,gradientMap:$,opaque:b.transparent===!1&&b.blending===$r&&b.alphaToCoverage===!1,alphaMap:le,alphaTest:ge,alphaHash:Xe,combine:b.combine,mapUv:N&&_(b.map.channel),aoMapUv:Ee&&_(b.aoMap.channel),lightMapUv:Me&&_(b.lightMap.channel),bumpMapUv:De&&_(b.bumpMap.channel),normalMapUv:be&&_(b.normalMap.channel),displacementMapUv:ze&&_(b.displacementMap.channel),emissiveMapUv:st&&_(b.emissiveMap.channel),metalnessMapUv:R&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:fe&&_(b.anisotropyMap.channel),clearcoatMapUv:Ie&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ae&&_(b.sheenRoughnessMap.channel),specularMapUv:He&&_(b.specularMap.channel),specularColorMapUv:nt&&_(b.specularColorMap.channel),specularIntensityMapUv:Oe&&_(b.specularIntensityMap.channel),transmissionMapUv:S&&_(b.transmissionMap.channel),thicknessMapUv:G&&_(b.thicknessMap.channel),alphaMapUv:le&&_(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(be||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(N||le),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ve,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:N&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const E in b.defines)x.push(E),x.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(M(x,b),v(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function M(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function v(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),b.push(o.mask)}function y(b){const x=g[b.type];let E;if(x){const k=On[x];E=am.clone(k.uniforms)}else E=b.uniforms;return E}function P(b,x){let E;for(let k=0,I=u.length;k<I;k++){const B=u[k];if(B.cacheKey===x){E=B,++E.usedTimes;break}}return E===void 0&&(E=new vv(n,x,b,s),u.push(E)),E}function C(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:U}}function Mv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||bv),i.length>1&&i.sort(d||Ou),r.length>1&&r.sort(d||Ou)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Ev(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Bu,n.set(i,[a])):r>=s.length?(a=new Bu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Qe};break;case"SpotLight":t={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cv=0;function Rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pv(n){const e=new Tv,t=Av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const r=new W,s=new ct,a=new ct;function o(l,u){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,_=0,m=0,p=0,M=0,v=0,y=0,P=0,C=0,T=0,U=0;l.sort(Rv);const b=u===!0?Math.PI:1;for(let E=0,k=l.length;E<k;E++){const I=l[E],B=I.color,D=I.intensity,H=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=B.r*D*b,d+=B.g*D*b,h+=B.b*D*b;else if(I.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],D);U++}else if(I.isDirectionalLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const X=I.shadow,Z=t.get(I);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=I.shadow.matrix,v++}i.directional[g]=O,g++}else if(I.isSpotLight){const O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(B).multiplyScalar(D*b),O.distance=H,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,i.spot[m]=O;const X=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,X.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[m]=X.matrix,I.castShadow){const Z=t.get(I);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.spotShadow[m]=Z,i.spotShadowMap[m]=j,P++}m++}else if(I.isRectAreaLight){const O=e.get(I);O.color.copy(B).multiplyScalar(D),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=O,p++}else if(I.isPointLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*b),O.distance=I.distance,O.decay=I.decay,I.castShadow){const X=I.shadow,Z=t.get(I);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=I.shadow.matrix,y++}i.point[_]=O,_++}else if(I.isHemisphereLight){const O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(D*b),O.groundColor.copy(I.groundColor).multiplyScalar(D*b),i.hemi[M]=O,M++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==M||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==P||x.numSpotMaps!==C||x.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=P+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=U,x.directionalLength=g,x.pointLength=_,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=M,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=P,x.numSpotMaps=C,x.numLightProbes=U,i.version=Cv++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const v=l[p];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function zu(n){const e=new Pv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Lv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new zu(n),e.set(r,[o])):s>=a.length?(o=new zu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Dv extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
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
}`;function kv(n,e,t){let i=new Mf;const r=new Ue,s=new Ue,a=new Ft,o=new Dv({depthPacking:Rp}),c=new Iv,l={},u=t.maxTextureSize,f={[gn]:tn,[tn]:gn,[zn]:zn},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Uv,fragmentShader:Nv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Yn;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(C,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Pi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=p!==ii&&this.type===ii,B=p===ii&&this.type!==ii;for(let D=0,H=C.length;D<H;D++){const j=C[D],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const X=O.getFrameExtents();if(r.multiply(X),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,O.mapSize.y=s.y)),O.map===null||I===!0||B===!0){const te=this.type!==ii?{minFilter:xt,magFilter:xt}:{};O.map!==null&&O.map.dispose(),O.map=new Ln(r.x,r.y,te),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const Z=O.getViewportCount();for(let te=0;te<Z;te++){const ve=O.getViewport(te);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),k.viewport(a),O.updateMatrices(j,te),i=O.getFrustum(),y(T,U,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===ii&&M(O,U),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,E)};function M(C,T){const U=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ln(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,U,d,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,U,h,_,null)}function v(C,T,U,b){let x=null;const E=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=U.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=x.uuid,I=T.uuid;let B=l[k];B===void 0&&(B={},l[k]=B);let D=B[I];D===void 0&&(D=x.clone(),B[I]=D,T.addEventListener("dispose",P)),x=D}if(x.visible=T.visible,x.wireframe=T.wireframe,b===ii?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=n.properties.get(x);k.light=U}return x}function y(C,T,U,b,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const I=e.update(C),B=C.material;if(Array.isArray(B)){const D=I.groups;for(let H=0,j=D.length;H<j;H++){const O=D[H],X=B[O.materialIndex];if(X&&X.visible){const Z=v(C,X,b,x);C.onBeforeShadow(n,C,T,U,I,Z,O),n.renderBufferDirect(U,null,I,Z,C,O),C.onAfterShadow(n,C,T,U,I,Z,O)}}}else if(B.visible){const D=v(C,B,b,x);C.onBeforeShadow(n,C,T,U,I,D,null),n.renderBufferDirect(U,null,I,D,C,null),C.onAfterShadow(n,C,T,U,I,D,null)}}const k=C.children;for(let I=0,B=k.length;I<B;I++)y(k[I],T,U,b,x)}function P(C){C.target.removeEventListener("dispose",P);for(const U in l){const b=l[U],x=C.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function Fv(n){function e(){let S=!1;const G=new Ft;let $=null;const le=new Ft(0,0,0,0);return{setMask:function(ge){$!==ge&&!S&&(n.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){S=ge},setClear:function(ge,Xe,Ke,vt,Lt){Lt===!0&&(ge*=vt,Xe*=vt,Ke*=vt),G.set(ge,Xe,Ke,vt),le.equals(G)===!1&&(n.clearColor(ge,Xe,Ke,vt),le.copy(G))},reset:function(){S=!1,$=null,le.set(-1,0,0,0)}}}function t(){let S=!1,G=null,$=null,le=null;return{setTest:function(ge){ge?de(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ge){G!==ge&&!S&&(n.depthMask(ge),G=ge)},setFunc:function(ge){if($!==ge){switch(ge){case np:n.depthFunc(n.NEVER);break;case ip:n.depthFunc(n.ALWAYS);break;case rp:n.depthFunc(n.LESS);break;case Ga:n.depthFunc(n.LEQUAL);break;case sp:n.depthFunc(n.EQUAL);break;case ap:n.depthFunc(n.GEQUAL);break;case op:n.depthFunc(n.GREATER);break;case lp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ge}},setLocked:function(ge){S=ge},setClear:function(ge){le!==ge&&(n.clearDepth(ge),le=ge)},reset:function(){S=!1,G=null,$=null,le=null}}}function i(){let S=!1,G=null,$=null,le=null,ge=null,Xe=null,Ke=null,vt=null,Lt=null;return{setTest:function(et){S||(et?de(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(et){G!==et&&!S&&(n.stencilMask(et),G=et)},setFunc:function(et,Mt,pt){($!==et||le!==Mt||ge!==pt)&&(n.stencilFunc(et,Mt,pt),$=et,le=Mt,ge=pt)},setOp:function(et,Mt,pt){(Xe!==et||Ke!==Mt||vt!==pt)&&(n.stencilOp(et,Mt,pt),Xe=et,Ke=Mt,vt=pt)},setLocked:function(et){S=et},setClear:function(et){Lt!==et&&(n.clearStencil(et),Lt=et)},reset:function(){S=!1,G=null,$=null,le=null,ge=null,Xe=null,Ke=null,vt=null,Lt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,M=null,v=null,y=null,P=null,C=new Qe(0,0,0),T=0,U=!1,b=null,x=null,E=null,k=null,I=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,H=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=H>=2);let O=null,X={};const Z=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ve=new Ft().fromArray(Z),pe=new Ft().fromArray(te);function z(S,G,$,le){const ge=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(S,Xe),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<$;Ke++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(G,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(G+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return Xe}const re={};re[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(n.DEPTH_TEST),s.setFunc(Ga),De(!1),be(Sc),de(n.CULL_FACE),Ee(Pi);function de(S){l[S]!==!0&&(n.enable(S),l[S]=!0)}function oe(S){l[S]!==!1&&(n.disable(S),l[S]=!1)}function Te(S,G){return u[S]!==G?(n.bindFramebuffer(S,G),u[S]=G,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=G),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=G),!0):!1}function he(S,G){let $=d,le=!1;if(S){$=f.get(G),$===void 0&&($=[],f.set(G,$));const ge=S.textures;if($.length!==ge.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,Ke=ge.length;Xe<Ke;Xe++)$[Xe]=n.COLOR_ATTACHMENT0+Xe;$.length=ge.length,le=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,le=!0);le&&n.drawBuffers($)}function N(S){return h!==S?(n.useProgram(S),h=S,!0):!1}const ce={[Qi]:n.FUNC_ADD,[Bd]:n.FUNC_SUBTRACT,[zd]:n.FUNC_REVERSE_SUBTRACT};ce[Hd]=n.MIN,ce[Gd]=n.MAX;const q={[Vd]:n.ZERO,[Wd]:n.ONE,[Xd]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[jd]:n.DST_COLOR,[$d]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[Zd]:n.ONE_MINUS_DST_COLOR,[Yd]:n.ONE_MINUS_DST_ALPHA,[Jd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[ep]:n.CONSTANT_ALPHA,[tp]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(S,G,$,le,ge,Xe,Ke,vt,Lt,et){if(S===Pi){g===!0&&(oe(n.BLEND),g=!1);return}if(g===!1&&(de(n.BLEND),g=!0),S!==Od){if(S!==_||et!==U){if((m!==Qi||v!==Qi)&&(n.blendEquation(n.FUNC_ADD),m=Qi,v=Qi),et)switch(S){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}p=null,M=null,y=null,P=null,C.set(0,0,0),T=0,_=S,U=et}return}ge=ge||G,Xe=Xe||$,Ke=Ke||le,(G!==m||ge!==v)&&(n.blendEquationSeparate(ce[G],ce[ge]),m=G,v=ge),($!==p||le!==M||Xe!==y||Ke!==P)&&(n.blendFuncSeparate(q[$],q[le],q[Xe],q[Ke]),p=$,M=le,y=Xe,P=Ke),(vt.equals(C)===!1||Lt!==T)&&(n.blendColor(vt.r,vt.g,vt.b,Lt),C.copy(vt),T=Lt),_=S,U=!1}function Me(S,G){S.side===zn?oe(n.CULL_FACE):de(n.CULL_FACE);let $=S.side===tn;G&&($=!$),De($),S.blending===$r&&S.transparent===!1?Ee(Pi):Ee(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const le=S.stencilWrite;a.setTest(le),le&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),st(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(S){b!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),b=S)}function be(S){S!==Nd?(de(n.CULL_FACE),S!==x&&(S===Sc?n.cullFace(n.BACK):S===kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),x=S}function ze(S){S!==E&&(D&&n.lineWidth(S),E=S)}function st(S,G,$){S?(de(n.POLYGON_OFFSET_FILL),(k!==G||I!==$)&&(n.polygonOffset(G,$),k=G,I=$)):oe(n.POLYGON_OFFSET_FILL)}function R(S){S?de(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function w(S){S===void 0&&(S=n.TEXTURE0+B-1),O!==S&&(n.activeTexture(S),O=S)}function F(S,G,$){$===void 0&&(O===null?$=n.TEXTURE0+B-1:$=O);let le=X[$];le===void 0&&(le={type:void 0,texture:void 0},X[$]=le),(le.type!==S||le.texture!==G)&&(O!==$&&(n.activeTexture($),O=$),n.bindTexture(S,G||re[S]),le.type=S,le.texture=G)}function Y(){const S=X[O];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ye(S){ve.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),ve.copy(S))}function ae(S){pe.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),pe.copy(S))}function He(S,G){let $=c.get(G);$===void 0&&($=new WeakMap,c.set(G,$));let le=$.get(S);le===void 0&&(le=n.getUniformBlockIndex(G,S.name),$.set(S,le))}function nt(S,G){const le=c.get(G).get(S);o.get(G)!==le&&(n.uniformBlockBinding(G,le,S.__bindingPointIndex),o.set(G,le))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},O=null,X={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,M=null,v=null,y=null,P=null,C=new Qe(0,0,0),T=0,U=!1,b=null,x=null,E=null,k=null,I=null,ve.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:de,disable:oe,bindFramebuffer:Te,drawBuffers:he,useProgram:N,setBlending:Ee,setMaterial:Me,setFlipSided:De,setCullFace:be,setLineWidth:ze,setPolygonOffset:st,setScissorTest:R,activeTexture:w,bindTexture:F,unbindTexture:Y,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:ke,texImage3D:Ce,updateUBOMapping:He,uniformBlockBinding:nt,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:Se,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ie,scissor:ye,viewport:ae,reset:Oe}}function Ov(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return h?new OffscreenCanvas(R,w):$a("canvas")}function _(R,w,F){let Y=1;const ee=st(R);if((ee.width>F||ee.height>F)&&(Y=F/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ne=Math.floor(Y*ee.width),Se=Math.floor(Y*ee.height);f===void 0&&(f=g(ne,Se));const me=w?g(ne,Se):f;return me.width=ne,me.height=Se,me.getContext("2d").drawImage(R,0,0,ne,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ne+"x"+Se+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==xt&&R.minFilter!==Yt}function p(R){n.generateMipmap(R)}function M(R,w,F,Y,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=w;if(w===n.RED&&(F===n.FLOAT&&(ne=n.R32F),F===n.HALF_FLOAT&&(ne=n.R16F),F===n.UNSIGNED_BYTE&&(ne=n.R8)),w===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ne=n.R8UI),F===n.UNSIGNED_SHORT&&(ne=n.R16UI),F===n.UNSIGNED_INT&&(ne=n.R32UI),F===n.BYTE&&(ne=n.R8I),F===n.SHORT&&(ne=n.R16I),F===n.INT&&(ne=n.R32I)),w===n.RG&&(F===n.FLOAT&&(ne=n.RG32F),F===n.HALF_FLOAT&&(ne=n.RG16F),F===n.UNSIGNED_BYTE&&(ne=n.RG8)),w===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(ne=n.RG8UI),F===n.UNSIGNED_SHORT&&(ne=n.RG16UI),F===n.UNSIGNED_INT&&(ne=n.RG32UI),F===n.BYTE&&(ne=n.RG8I),F===n.SHORT&&(ne=n.RG16I),F===n.INT&&(ne=n.RG32I)),w===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),w===n.RGBA){const Se=ee?Va:ht.getTransfer(Y);F===n.FLOAT&&(ne=n.RGBA32F),F===n.HALF_FLOAT&&(ne=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ne=Se===mt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==xt&&R.minFilter!==Yt?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function y(R){const w=R.target;w.removeEventListener("dispose",y),C(w),w.isVideoTexture&&u.delete(w)}function P(R){const w=R.target;w.removeEventListener("dispose",P),U(w)}function C(R){const w=i.get(R);if(w.__webglInit===void 0)return;const F=R.source,Y=d.get(F);if(Y){const ee=Y[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(R),Object.keys(Y).length===0&&d.delete(F)}i.remove(R)}function T(R){const w=i.get(R);n.deleteTexture(w.__webglTexture);const F=R.source,Y=d.get(F);delete Y[w.__cacheKey],a.memory.textures--}function U(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let ee=0;ee<w.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)n.deleteFramebuffer(w.__webglFramebuffer[Y]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const F=R.textures;for(let Y=0,ee=F.length;Y<ee;Y++){const ne=i.get(F[Y]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(F[Y])}i.remove(R)}let b=0;function x(){b=0}function E(){const R=b;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),b+=1,R}function k(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function I(R,w){const F=i.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(F,R,w);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+w)}function B(R,w){const F=i.get(R);if(R.version>0&&F.__version!==R.version){ve(F,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+w)}function D(R,w){const F=i.get(R);if(R.version>0&&F.__version!==R.version){ve(F,R,w);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+w)}function H(R,w){const F=i.get(R);if(R.version>0&&F.__version!==R.version){pe(F,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+w)}const j={[Il]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[Ul]:n.MIRRORED_REPEAT},O={[xt]:n.NEAREST,[_p]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Ao]:n.LINEAR_MIPMAP_NEAREST,[ir]:n.LINEAR_MIPMAP_LINEAR},X={[Dp]:n.NEVER,[Op]:n.ALWAYS,[Ip]:n.LESS,[hf]:n.LEQUAL,[Up]:n.EQUAL,[Fp]:n.GEQUAL,[Np]:n.GREATER,[kp]:n.NOTEQUAL};function Z(R,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Yt||w.magFilter===Ao||w.magFilter===Ss||w.magFilter===ir||w.minFilter===Yt||w.minFilter===Ao||w.minFilter===Ss||w.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,j[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,j[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,j[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,O[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,X[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xt||w.minFilter!==Ss&&w.minFilter!==ir||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(R,w){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",y));const Y=w.source;let ee=d.get(Y);ee===void 0&&(ee={},d.set(Y,ee));const ne=k(w);if(ne!==R.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[ne].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&T(w)),R.__cacheKey=ne,R.__webglTexture=ee[ne].texture}return F}function ve(R,w,F){let Y=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=n.TEXTURE_3D);const ee=te(R,w),ne=w.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+F);const Se=i.get(ne);if(ne.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const me=ht.getPrimaries(ht.workingColorSpace),fe=w.colorSpace===Ei?null:ht.getPrimaries(w.colorSpace),Ie=w.colorSpace===Ei||me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ue=_(w.image,!1,r.maxTextureSize);ue=ze(w,ue);const Ae=s.convert(w.format,w.colorSpace),ke=s.convert(w.type);let Ce=M(w.internalFormat,Ae,ke,w.colorSpace,w.isVideoTexture);Z(Y,w);let ye;const ae=w.mipmaps,He=w.isVideoTexture!==!0,nt=Se.__version===void 0||ee===!0,Oe=ne.dataReady,S=v(w,ue);if(w.isDepthTexture)Ce=n.DEPTH_COMPONENT16,w.type===Pn?Ce=n.DEPTH_COMPONENT32F:w.type===Hi?Ce=n.DEPTH_COMPONENT24:w.type===Vs&&(Ce=n.DEPTH24_STENCIL8),nt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ce,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Ae,ke,null));else if(w.isDataTexture)if(ae.length>0){He&&nt&&t.texStorage2D(n.TEXTURE_2D,S,Ce,ae[0].width,ae[0].height);for(let G=0,$=ae.length;G<$;G++)ye=ae[G],He?Oe&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ye.width,ye.height,Ae,ke,ye.data):t.texImage2D(n.TEXTURE_2D,G,Ce,ye.width,ye.height,0,Ae,ke,ye.data);w.generateMipmaps=!1}else He?(nt&&t.texStorage2D(n.TEXTURE_2D,S,Ce,ue.width,ue.height),Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Ae,ke,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Ae,ke,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,Ce,ae[0].width,ae[0].height,ue.depth);for(let G=0,$=ae.length;G<$;G++)ye=ae[G],w.format!==Wt?Ae!==null?He?Oe&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ue.depth,Ae,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Ce,ye.width,ye.height,ue.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ue.depth,Ae,ke,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Ce,ye.width,ye.height,ue.depth,0,Ae,ke,ye.data)}else{He&&nt&&t.texStorage2D(n.TEXTURE_2D,S,Ce,ae[0].width,ae[0].height);for(let G=0,$=ae.length;G<$;G++)ye=ae[G],w.format!==Wt?Ae!==null?He?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Oe&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ye.width,ye.height,Ae,ke,ye.data):t.texImage2D(n.TEXTURE_2D,G,Ce,ye.width,ye.height,0,Ae,ke,ye.data)}else if(w.isDataArrayTexture)He?(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,Ce,ue.width,ue.height,ue.depth),Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,ke,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ue.width,ue.height,ue.depth,0,Ae,ke,ue.data);else if(w.isData3DTexture)He?(nt&&t.texStorage3D(n.TEXTURE_3D,S,Ce,ue.width,ue.height,ue.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,ke,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ue.width,ue.height,ue.depth,0,Ae,ke,ue.data);else if(w.isFramebufferTexture){if(nt)if(He)t.texStorage2D(n.TEXTURE_2D,S,Ce,ue.width,ue.height);else{let G=ue.width,$=ue.height;for(let le=0;le<S;le++)t.texImage2D(n.TEXTURE_2D,le,Ce,G,$,0,Ae,ke,null),G>>=1,$>>=1}}else if(ae.length>0){if(He&&nt){const G=st(ae[0]);t.texStorage2D(n.TEXTURE_2D,S,Ce,G.width,G.height)}for(let G=0,$=ae.length;G<$;G++)ye=ae[G],He?Oe&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,Ae,ke,ye):t.texImage2D(n.TEXTURE_2D,G,Ce,Ae,ke,ye);w.generateMipmaps=!1}else if(He){if(nt){const G=st(ue);t.texStorage2D(n.TEXTURE_2D,S,Ce,G.width,G.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,ke,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Ae,ke,ue);m(w)&&p(Y),Se.__version=ne.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function pe(R,w,F){if(w.image.length!==6)return;const Y=te(R,w),ee=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const ne=i.get(ee);if(ee.version!==ne.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const Se=ht.getPrimaries(ht.workingColorSpace),me=w.colorSpace===Ei?null:ht.getPrimaries(w.colorSpace),fe=w.colorSpace===Ei||Se===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let $=0;$<6;$++)!Ie&&!ue?Ae[$]=_(w.image[$],!0,r.maxCubemapSize):Ae[$]=ue?w.image[$].image:w.image[$],Ae[$]=ze(w,Ae[$]);const ke=Ae[0],Ce=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),ae=M(w.internalFormat,Ce,ye,w.colorSpace),He=w.isVideoTexture!==!0,nt=ne.__version===void 0||Y===!0,Oe=ee.dataReady;let S=v(w,ke);Z(n.TEXTURE_CUBE_MAP,w);let G;if(Ie){He&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,S,ae,ke.width,ke.height);for(let $=0;$<6;$++){G=Ae[$].mipmaps;for(let le=0;le<G.length;le++){const ge=G[le];w.format!==Wt?Ce!==null?He?Oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,ge.width,ge.height,Ce,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,ae,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,ge.width,ge.height,Ce,ye,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,ae,ge.width,ge.height,0,Ce,ye,ge.data)}}}else{if(G=w.mipmaps,He&&nt){G.length>0&&S++;const $=st(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,S,ae,$.width,$.height)}for(let $=0;$<6;$++)if(ue){He?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae[$].width,Ae[$].height,Ce,ye,Ae[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ae,Ae[$].width,Ae[$].height,0,Ce,ye,Ae[$].data);for(let le=0;le<G.length;le++){const Xe=G[le].image[$].image;He?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Xe.width,Xe.height,Ce,ye,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,ae,Xe.width,Xe.height,0,Ce,ye,Xe.data)}}else{He?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,ye,Ae[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ae,Ce,ye,Ae[$]);for(let le=0;le<G.length;le++){const ge=G[le];He?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Ce,ye,ge.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,ae,Ce,ye,ge.image[$])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function z(R,w,F,Y,ee,ne){const Se=s.convert(F.format,F.colorSpace),me=s.convert(F.type),fe=M(F.internalFormat,Se,me,F.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>ne),Ae=Math.max(1,w.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,fe,ue,Ae,w.depth,0,Se,me,null):t.texImage2D(ee,ne,fe,ue,Ae,0,Se,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),De(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,i.get(F).__webglTexture,0,Me(w)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,i.get(F).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(R,w,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let Y=n.DEPTH_COMPONENT24;if(F||De(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pn?Y=n.DEPTH_COMPONENT32F:ee.type===Hi&&(Y=n.DEPTH_COMPONENT24));const ne=Me(w);De(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,Y,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,Y,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const Y=Me(w);F&&De(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,w.width,w.height):De(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const Y=w.textures;for(let ee=0;ee<Y.length;ee++){const ne=Y[ee],Se=s.convert(ne.format,ne.colorSpace),me=s.convert(ne.type),fe=M(ne.internalFormat,Se,me,ne.colorSpace),Ie=Me(w);F&&De(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,fe,w.width,w.height):De(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const Y=i.get(w.depthTexture).__webglTexture,ee=Me(w);if(w.depthTexture.format===Di)De(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(w.depthTexture.format===Ps)De(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function oe(R){const w=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,R)}else if(F){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]=n.createRenderbuffer(),re(w.__webglDepthbuffer[Y],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),re(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(R,w,F){const Y=i.get(R);w!==void 0&&z(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&oe(R)}function he(R){const w=R.texture,F=i.get(R),Y=i.get(w);R.addEventListener("dispose",P);const ee=R.textures,ne=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=w.version,a.memory.textures++),ne){F.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[me]=[];for(let fe=0;fe<w.mipmaps.length;fe++)F.__webglFramebuffer[me][fe]=n.createFramebuffer()}else F.__webglFramebuffer[me]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)F.__webglFramebuffer[me]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Se)for(let me=0,fe=ee.length;me<fe;me++){const Ie=i.get(ee[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&De(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let me=0;me<ee.length;me++){const fe=ee[me];F.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[me]);const Ie=s.convert(fe.format,fe.colorSpace),ue=s.convert(fe.type),Ae=M(fe.internalFormat,Ie,ue,fe.colorSpace,R.isXRRenderTarget===!0),ke=Me(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,F.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),re(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Z(n.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)z(F.__webglFramebuffer[me][fe],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,fe);else z(F.__webglFramebuffer[me],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let me=0,fe=ee.length;me<fe;me++){const Ie=ee[me],ue=i.get(Ie);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Z(n.TEXTURE_2D,Ie),z(F.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(Ie)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Y.__webglTexture),Z(me,w),w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)z(F.__webglFramebuffer[fe],R,w,n.COLOR_ATTACHMENT0,me,fe);else z(F.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,me,0);m(w)&&p(me),t.unbindTexture()}R.depthBuffer&&oe(R)}function N(R){const w=R.textures;for(let F=0,Y=w.length;F<Y;F++){const ee=w[F];if(m(ee)){const ne=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(ee).__webglTexture;t.bindTexture(ne,Se),p(ne),t.unbindTexture()}}}const ce=[],q=[];function Ee(R){if(R.samples>0){if(De(R)===!1){const w=R.textures,F=R.width,Y=R.height;let ee=n.COLOR_BUFFER_BIT;const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(R),me=w.length>1;if(me)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Ie=i.get(w[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,ee,n.NEAREST),c===!0&&(ce.length=0,q.length=0,ce.push(n.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ce.push(ne),q.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Ie=i.get(w[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Me(R){return Math.min(r.maxSamples,R.samples)}function De(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(R){const w=a.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function ze(R,w){const F=R.colorSpace,Y=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Vi&&F!==Ei&&(ht.getTransfer(F)===mt?(Y!==Wt||ee!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=E,this.resetTextureUnits=x,this.setTexture2D=I,this.setTexture2DArray=B,this.setTexture3D=D,this.setTextureCube=H,this.rebindTextures=Te,this.setupRenderTarget=he,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=z,this.useMultisampledRTT=De}function Bv(n,e){function t(i,r=Ei){let s;const a=ht.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===af)return n.UNSIGNED_SHORT_4_4_4_4;if(i===of)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vp)return n.BYTE;if(i===xp)return n.SHORT;if(i===rf)return n.UNSIGNED_SHORT;if(i===sf)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===Sp)return n.ALPHA;if(i===wp)return n.RGB;if(i===Wt)return n.RGBA;if(i===Mp)return n.LUMINANCE;if(i===bp)return n.LUMINANCE_ALPHA;if(i===Di)return n.DEPTH_COMPONENT;if(i===Ps)return n.DEPTH_STENCIL;if(i===Ep)return n.RED;if(i===lf)return n.RED_INTEGER;if(i===Tp)return n.RG;if(i===cf)return n.RG_INTEGER;if(i===uf)return n.RGBA_INTEGER;if(i===Co||i===Ro||i===Po||i===Lo)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===Tc||i===Ac||i===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Pc||i===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Pc)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Ic||i===Uc||i===Nc||i===kc||i===Fc||i===Oc||i===Bc||i===zc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===qc||i===$c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Do)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ap||i===Yc||i===jc||i===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Do)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class zv extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wa extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hv={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vv=`
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

}`;class Wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Vt({vertexShader:Gv,fragmentShader:Vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qt(new or(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Xv extends _r{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=new Wv,m=t.getContextAttributes();let p=null,M=null;const v=[],y=[],P=new Ue;let C=null;const T=new ln;T.layers.enable(1),T.viewport=new Ft;const U=new ln;U.layers.enable(2),U.viewport=new Ft;const b=[T,U],x=new zv;x.layers.enable(1),x.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let re=v[z];return re===void 0&&(re=new rl,v[z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(z){let re=v[z];return re===void 0&&(re=new rl,v[z]=re),re.getGripSpace()},this.getHand=function(z){let re=v[z];return re===void 0&&(re=new rl,v[z]=re),re.getHandSpace()};function I(z){const re=y.indexOf(z.inputSource);if(re===-1)return;const de=v[re];de!==void 0&&(de.update(z.inputSource,z.frame,l||a),de.dispatchEvent({type:z.type,data:z.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",D);for(let z=0;z<v.length;z++){const re=y[z];re!==null&&(y[z]=null,v[z].disconnect(re))}E=null,k=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Ln(h.framebufferWidth,h.framebufferHeight,{format:Wt,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,de=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Ps:Di,de=m.stencil?Vs:Hi);const Te={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ln(d.textureWidth,d.textureHeight,{format:Wt,type:zi,depthTexture:new ja(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(z){for(let re=0;re<z.removed.length;re++){const de=z.removed[re],oe=y.indexOf(de);oe>=0&&(y[oe]=null,v[oe].disconnect(de))}for(let re=0;re<z.added.length;re++){const de=z.added[re];let oe=y.indexOf(de);if(oe===-1){for(let he=0;he<v.length;he++)if(he>=y.length){y.push(de),oe=he;break}else if(y[he]===null){y[he]=de,oe=he;break}if(oe===-1)break}const Te=v[oe];Te&&Te.connect(de)}}const H=new W,j=new W;function O(z,re,de){H.setFromMatrixPosition(re.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const oe=H.distanceTo(j),Te=re.projectionMatrix.elements,he=de.projectionMatrix.elements,N=Te[14]/(Te[10]-1),ce=Te[14]/(Te[10]+1),q=(Te[9]+1)/Te[5],Ee=(Te[9]-1)/Te[5],Me=(Te[8]-1)/Te[0],De=(he[8]+1)/he[0],be=N*Me,ze=N*De,st=oe/(-Me+De),R=st*-Me;re.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(R),z.translateZ(st),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const w=N+st,F=ce+st,Y=be-R,ee=ze+(oe-R),ne=q*ce/F*w,Se=Ee*ce/F*w;z.projectionMatrix.makePerspective(Y,ee,ne,Se,w,F),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,re){re===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(re.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;_.texture!==null&&(z.near=_.depthNear,z.far=_.depthFar),x.near=U.near=T.near=z.near,x.far=U.far=T.far=z.far,(E!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,k=x.far,T.near=E,T.far=k,U.near=E,U.far=k,T.updateProjectionMatrix(),U.updateProjectionMatrix(),z.updateProjectionMatrix());const re=z.parent,de=x.cameras;X(x,re);for(let oe=0;oe<de.length;oe++)X(de[oe],re);de.length===2?O(x,T,U):x.projectionMatrix.copy(T.projectionMatrix),Z(z,x,re)};function Z(z,re,de){de===null?z.matrix.copy(re.matrixWorld):(z.matrix.copy(de.matrixWorld),z.matrix.invert(),z.matrix.multiply(re.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(re.projectionMatrix),z.projectionMatrixInverse.copy(re.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Nl*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null};let te=null;function ve(z,re){if(u=re.getViewerPose(l||a),g=re,u!==null){const de=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let oe=!1;de.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let he=0;he<de.length;he++){const N=de[he];let ce=null;if(h!==null)ce=h.getViewport(N);else{const Ee=f.getViewSubImage(d,N);ce=Ee.viewport,he===0&&(e.setRenderTargetTextures(M,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(M))}let q=b[he];q===void 0&&(q=new ln,q.layers.enable(he),q.viewport=new Ft,b[he]=q),q.matrix.fromArray(N.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(N.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ce.x,ce.y,ce.width,ce.height),he===0&&(x.matrix.copy(q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(q)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const he=f.getDepthInformation(de[0]);he&&he.isValid&&he.texture&&_.init(e,he,r.renderState)}}for(let de=0;de<v.length;de++){const oe=y[de],Te=v[de];oe!==null&&Te!==void 0&&Te.update(oe,re,l||a)}_.render(e,x),te&&te(z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const pe=new bf;pe.setAnimationLoop(ve),this.setAnimationLoop=function(z){te=z},this.dispose=function(){}}}const Zi=new ci,qv=new ct;function $v(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,yf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),v=M.envMap,y=M.envMapRotation;if(v&&(m.envMap.value=v,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(Zi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*P,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const y=v.program;i.uniformBlockBinding(M,y)}function l(M,v){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(M,P);const C=e.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){const v=f();M.__bindingPointIndex=v;const y=n.createBuffer(),P=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=r[M.id],y=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,T=y.length;C<T;C++){const U=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,x=U.length;b<x;b++){const E=U[b];if(h(E,C,b,P)===!0){const k=E.__offset,I=Array.isArray(E.value)?E.value:[E.value];let B=0;for(let D=0;D<I.length;D++){const H=I[D],j=_(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,k+B,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,v,y,P){const C=M.value,T=v+"_"+y;if(P[T]===void 0)return typeof C=="number"||typeof C=="boolean"?P[T]=C:P[T]=C.clone(),!0;{const U=P[T];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return P[T]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(M){const v=M.uniforms;let y=0;const P=16;for(let T=0,U=v.length;T<U;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,E=b.length;x<E;x++){const k=b[x],I=Array.isArray(k.value)?k.value:[k.value];for(let B=0,D=I.length;B<D;B++){const H=I[B],j=_(H),O=y%P;O!==0&&P-O<j.boundary&&(y+=P-O),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=j.storage}}}const C=y%P;return C>0&&(y+=P-C),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class jv{constructor(e={}){const{canvas:t=Hp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const v=this;let y=!1,P=0,C=0,T=null,U=-1,b=null;const x=new Ft,E=new Ft;let k=null;const I=new Qe(0);let B=0,D=t.width,H=t.height,j=1,O=null,X=null;const Z=new Ft(0,0,D,H),te=new Ft(0,0,D,H);let ve=!1;const pe=new Mf;let z=!1,re=!1;const de=new ct,oe=new W,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return T===null?j:1}let N=i;function ce(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tc}`),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",$,!1),N===null){const V="webgl2";if(N=ce(V,A),N===null)throw ce(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let q,Ee,Me,De,be,ze,st,R,w,F,Y,ee,ne,Se,me,fe,Ie,ue,Ae,ke,Ce,ye,ae,He;function nt(){q=new i_(N),q.init(),ye=new Bv(N,q),Ee=new K0(N,q,e,ye),Me=new Fv(N),De=new a_(N),be=new Mv,ze=new Ov(N,q,Me,be,Ee,ye,De),st=new Q0(v),R=new n_(v),w=new dm(N),ae=new j0(N,w),F=new r_(N,w,De,ae),Y=new l_(N,F,w,De),Ae=new o_(N,Ee,ze),fe=new J0(be),ee=new wv(v,st,R,q,Ee,ae,fe),ne=new $v(v,be),Se=new Ev,me=new Lv(q),ue=new Y0(v,st,R,Me,Y,d,c),Ie=new kv(v,Y,Ee),He=new Yv(N,De,Ee,Me),ke=new Z0(N,q,De),Ce=new s_(N,q,De),De.programs=ee.programs,v.capabilities=Ee,v.extensions=q,v.properties=be,v.renderLists=Se,v.shadowMap=Ie,v.state=Me,v.info=De}nt();const Oe=new Xv(v,N);this.xr=Oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(D,H,!1))},this.getSize=function(A){return A.set(D,H)},this.setSize=function(A,V,Q=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,H=V,t.width=Math.floor(A*j),t.height=Math.floor(V*j),Q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(D*j,H*j).floor()},this.setDrawingBufferSize=function(A,V,Q){D=A,H=V,j=Q,t.width=Math.floor(A*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,V,Q,K){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,V,Q,K),Me.viewport(x.copy(Z).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,V,Q,K){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,V,Q,K),Me.scissor(E.copy(te).multiplyScalar(j).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){Me.setScissorTest(ve=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,V=!0,Q=!0){let K=0;if(A){let J=!1;if(T!==null){const we=T.texture.format;J=we===uf||we===cf||we===lf}if(J){const we=T.texture.type,Re=we===zi||we===Hi||we===rf||we===Vs||we===af||we===of,Pe=ue.getClearColor(),Fe=ue.getClearAlpha(),Ge=Pe.r,qe=Pe.g,Je=Pe.b;Re?(h[0]=Ge,h[1]=qe,h[2]=Je,h[3]=Fe,N.clearBufferuiv(N.COLOR,0,h)):(g[0]=Ge,g[1]=qe,g[2]=Je,g[3]=Fe,N.clearBufferiv(N.COLOR,0,g))}else K|=N.COLOR_BUFFER_BIT}V&&(K|=N.DEPTH_BUFFER_BIT),Q&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Se.dispose(),me.dispose(),be.dispose(),st.dispose(),R.dispose(),Y.dispose(),ae.dispose(),He.dispose(),ee.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",et),Oe.removeEventListener("sessionend",Mt),pt.stop()};function S(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=De.autoReset,V=Ie.enabled,Q=Ie.autoUpdate,K=Ie.needsUpdate,J=Ie.type;nt(),De.autoReset=A,Ie.enabled=V,Ie.autoUpdate=Q,Ie.needsUpdate=K,Ie.type=J}function $(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const V=A.target;V.removeEventListener("dispose",le),ge(V)}function ge(A){Xe(A),be.remove(A)}function Xe(A){const V=be.get(A).programs;V!==void 0&&(V.forEach(function(Q){ee.releaseProgram(Q)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Q,K,J,we){V===null&&(V=Te);const Re=J.isMesh&&J.matrixWorld.determinant()<0,Pe=Rd(A,V,Q,K,J);Me.setMaterial(K,Re);let Fe=Q.index,Ge=1;if(K.wireframe===!0){if(Fe=F.getWireframeAttribute(Q),Fe===void 0)return;Ge=2}const qe=Q.drawRange,Je=Q.attributes.position;let bt=qe.start*Ge,Ot=(qe.start+qe.count)*Ge;we!==null&&(bt=Math.max(bt,we.start*Ge),Ot=Math.min(Ot,(we.start+we.count)*Ge)),Fe!==null?(bt=Math.max(bt,0),Ot=Math.min(Ot,Fe.count)):Je!=null&&(bt=Math.max(bt,0),Ot=Math.min(Ot,Je.count));const rn=Ot-bt;if(rn<0||rn===1/0)return;ae.setup(J,K,Pe,Q,Fe);let Zn,at=ke;if(Fe!==null&&(Zn=w.get(Fe),at=Ce,at.setIndex(Zn)),J.isMesh)K.wireframe===!0?(Me.setLineWidth(K.wireframeLinewidth*he()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(J.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),Me.setLineWidth(Ve*he()),J.isLineSegments?at.setMode(N.LINES):J.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else J.isPoints?at.setMode(N.POINTS):J.isSprite&&at.setMode(N.TRIANGLES);if(J.isBatchedMesh)J._multiDrawInstances!==null?at.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances):at.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)at.renderInstances(bt,rn,J.count);else if(Q.isInstancedBufferGeometry){const Ve=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,us=Math.min(Q.instanceCount,Ve);at.renderInstances(bt,rn,us)}else at.render(bt,rn)};function Ke(A,V,Q){A.transparent===!0&&A.side===zn&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,ea(A,V,Q),A.side=gn,A.needsUpdate=!0,ea(A,V,Q),A.side=zn):ea(A,V,Q)}this.compile=function(A,V,Q=null){Q===null&&(Q=A),m=me.get(Q),m.init(V),M.push(m),Q.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),A!==Q&&A.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(v._useLegacyLights);const K=new Set;return A.traverse(function(J){const we=J.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){const Pe=we[Re];Ke(Pe,Q,J),K.add(Pe)}else Ke(we,Q,J),K.add(we)}),M.pop(),m=null,K},this.compileAsync=function(A,V,Q=null){const K=this.compile(A,V,Q);return new Promise(J=>{function we(){if(K.forEach(function(Re){be.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){J(A);return}setTimeout(we,10)}q.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let vt=null;function Lt(A){vt&&vt(A)}function et(){pt.stop()}function Mt(){pt.start()}const pt=new bf;pt.setAnimationLoop(Lt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(A){vt=A,Oe.setAnimationLoop(A),A===null?pt.stop():pt.start()},Oe.addEventListener("sessionstart",et),Oe.addEventListener("sessionend",Mt),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(V),V=Oe.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,T),m=me.get(A,M.length),m.init(V),M.push(m),de.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pe.setFromProjectionMatrix(de),re=this.localClippingEnabled,z=fe.init(this.clippingPlanes,re),_=Se.get(A,p.length),_.init(),p.push(_),ui(A,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(O,X);const Q=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1;Q&&ue.addToRenderList(_,A),this.info.render.frame++,z===!0&&fe.beginShadows();const K=m.state.shadowsArray;Ie.render(K,A,V),z===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=_.opaque,we=_.transmissive;if(m.setupLights(v._useLegacyLights),V.isArrayCamera){const Re=V.cameras;if(we.length>0)for(let Pe=0,Fe=Re.length;Pe<Fe;Pe++){const Ge=Re[Pe];hi(J,we,A,Ge)}Q&&ue.render(A);for(let Pe=0,Fe=Re.length;Pe<Fe;Pe++){const Ge=Re[Pe];un(_,A,Ge,Ge.viewport)}}else we.length>0&&hi(J,we,A,V),Q&&ue.render(A),un(_,A,V);T!==null&&(ze.updateMultisampleRenderTarget(T),ze.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,V),ae.resetDefaultState(),U=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],z===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ui(A,V,Q,K){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pe.intersectsSprite(A)){K&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Re=Y.update(A),Pe=A.material;Pe.visible&&_.push(A,Re,Pe,Q,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pe.intersectsObject(A))){const Re=Y.update(A),Pe=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),oe.copy(Re.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Pe)){const Fe=Re.groups;for(let Ge=0,qe=Fe.length;Ge<qe;Ge++){const Je=Fe[Ge],bt=Pe[Je.materialIndex];bt&&bt.visible&&_.push(A,Re,bt,Q,oe.z,Je)}}else Pe.visible&&_.push(A,Re,Pe,Q,oe.z,null)}}const we=A.children;for(let Re=0,Pe=we.length;Re<Pe;Re++)ui(we[Re],V,Q,K)}function un(A,V,Q,K){const J=A.opaque,we=A.transmissive,Re=A.transparent;m.setupLightsView(Q),z===!0&&fe.setGlobalState(v.clippingPlanes,Q),K&&Me.viewport(x.copy(K)),J.length>0&&jn(J,V,Q),we.length>0&&jn(we,V,Q),Re.length>0&&jn(Re,V,Q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function hi(A,V,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Ln(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?es:zi,minFilter:ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const we=m.state.transmissionRenderTarget[K.id],Re=K.viewport||x;we.setSize(Re.z,Re.w);const Pe=v.getRenderTarget();v.setRenderTarget(we),v.getClearColor(I),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();const Fe=v.toneMapping;v.toneMapping=Li;const Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),z===!0&&fe.setGlobalState(v.clippingPlanes,K),jn(A,Q,K),ze.updateMultisampleRenderTarget(we),ze.updateRenderTargetMipmap(we),q.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Je=0,bt=V.length;Je<bt;Je++){const Ot=V[Je],rn=Ot.object,Zn=Ot.geometry,at=Ot.material,Ve=Ot.group;if(at.side===zn&&rn.layers.test(K.layers)){const us=at.side;at.side=tn,at.needsUpdate=!0,cs(rn,Q,K,Zn,at,Ve),at.side=us,at.needsUpdate=!0,qe=!0}}qe===!0&&(ze.updateMultisampleRenderTarget(we),ze.updateRenderTargetMipmap(we))}v.setRenderTarget(Pe),v.setClearColor(I,B),Ge!==void 0&&(K.viewport=Ge),v.toneMapping=Fe}function jn(A,V,Q){const K=V.isScene===!0?V.overrideMaterial:null;for(let J=0,we=A.length;J<we;J++){const Re=A[J],Pe=Re.object,Fe=Re.geometry,Ge=K===null?Re.material:K,qe=Re.group;Pe.layers.test(Q.layers)&&cs(Pe,V,Q,Fe,Ge,qe)}}function cs(A,V,Q,K,J,we){A.onBeforeRender(v,V,Q,K,J,we),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(v,V,Q,K,A,we),J.transparent===!0&&J.side===zn&&J.forceSinglePass===!1?(J.side=tn,J.needsUpdate=!0,v.renderBufferDirect(Q,V,K,J,A,we),J.side=gn,J.needsUpdate=!0,v.renderBufferDirect(Q,V,K,J,A,we),J.side=zn):v.renderBufferDirect(Q,V,K,J,A,we),A.onAfterRender(v,V,Q,K,J,we)}function ea(A,V,Q){V.isScene!==!0&&(V=Te);const K=be.get(A),J=m.state.lights,we=m.state.shadowsArray,Re=J.state.version,Pe=ee.getParameters(A,J.state,we,V,Q),Fe=ee.getProgramCacheKey(Pe);let Ge=K.programs;K.environment=A.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(A.isMeshStandardMaterial?R:st).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",le),Ge=new Map,K.programs=Ge);let qe=Ge.get(Fe);if(qe!==void 0){if(K.currentProgram===qe&&K.lightsStateVersion===Re)return vc(A,Pe),qe}else Pe.uniforms=ee.getUniforms(A),A.onBuild(Q,Pe,v),A.onBeforeCompile(Pe,v),qe=ee.acquireProgram(Pe,Fe),Ge.set(Fe,qe),K.uniforms=Pe.uniforms;const Je=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=fe.uniform),vc(A,Pe),K.needsLights=Ld(A),K.lightsStateVersion=Re,K.needsLights&&(Je.ambientLightColor.value=J.state.ambient,Je.lightProbe.value=J.state.probe,Je.directionalLights.value=J.state.directional,Je.directionalLightShadows.value=J.state.directionalShadow,Je.spotLights.value=J.state.spot,Je.spotLightShadows.value=J.state.spotShadow,Je.rectAreaLights.value=J.state.rectArea,Je.ltc_1.value=J.state.rectAreaLTC1,Je.ltc_2.value=J.state.rectAreaLTC2,Je.pointLights.value=J.state.point,Je.pointLightShadows.value=J.state.pointShadow,Je.hemisphereLights.value=J.state.hemi,Je.directionalShadowMap.value=J.state.directionalShadowMap,Je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Je.spotShadowMap.value=J.state.spotShadowMap,Je.spotLightMatrix.value=J.state.spotLightMatrix,Je.spotLightMap.value=J.state.spotLightMap,Je.pointShadowMap.value=J.state.pointShadowMap,Je.pointShadowMatrix.value=J.state.pointShadowMatrix),K.currentProgram=qe,K.uniformsList=null,qe}function _c(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Oa.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function vc(A,V){const Q=be.get(A);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Rd(A,V,Q,K,J){V.isScene!==!0&&(V=Te),ze.resetTextureUnits();const we=V.fog,Re=K.isMeshStandardMaterial?V.environment:null,Pe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Vi,Fe=(K.isMeshStandardMaterial?R:st).get(K.envMap||Re),Ge=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,qe=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Je=!!Q.morphAttributes.position,bt=!!Q.morphAttributes.normal,Ot=!!Q.morphAttributes.color;let rn=Li;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(rn=v.toneMapping);const Zn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,at=Zn!==void 0?Zn.length:0,Ve=be.get(K),us=m.state.lights;if(z===!0&&(re===!0||A!==b)){const hn=A===b&&K.id===U;fe.setState(K,A,hn)}let gt=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==us.state.version||Ve.outputColorSpace!==Pe||J.isBatchedMesh&&Ve.batching===!1||!J.isBatchedMesh&&Ve.batching===!0||J.isInstancedMesh&&Ve.instancing===!1||!J.isInstancedMesh&&Ve.instancing===!0||J.isSkinnedMesh&&Ve.skinning===!1||!J.isSkinnedMesh&&Ve.skinning===!0||J.isInstancedMesh&&Ve.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ve.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ve.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ve.instancingMorph===!1&&J.morphTexture!==null||Ve.envMap!==Fe||K.fog===!0&&Ve.fog!==we||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==qe||Ve.morphTargets!==Je||Ve.morphNormals!==bt||Ve.morphColors!==Ot||Ve.toneMapping!==rn||Ve.morphTargetsCount!==at)&&(gt=!0):(gt=!0,Ve.__version=K.version);let Wi=Ve.currentProgram;gt===!0&&(Wi=ea(K,V,J));let xc=!1,hs=!1,bo=!1;const Bt=Wi.getUniforms(),fi=Ve.uniforms;if(Me.useProgram(Wi.program)&&(xc=!0,hs=!0,bo=!0),K.id!==U&&(U=K.id,hs=!0),xc||b!==A){Bt.setValue(N,"projectionMatrix",A.projectionMatrix),Bt.setValue(N,"viewMatrix",A.matrixWorldInverse);const hn=Bt.map.cameraPosition;hn!==void 0&&hn.setValue(N,oe.setFromMatrixPosition(A.matrixWorld)),Ee.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,hs=!0,bo=!0)}if(J.isSkinnedMesh){Bt.setOptional(N,J,"bindMatrix"),Bt.setOptional(N,J,"bindMatrixInverse");const hn=J.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Bt.setValue(N,"boneTexture",hn.boneTexture,ze))}J.isBatchedMesh&&(Bt.setOptional(N,J,"batchingTexture"),Bt.setValue(N,"batchingTexture",J._matricesTexture,ze));const Eo=Q.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0)&&Ae.update(J,Q,Wi),(hs||Ve.receiveShadow!==J.receiveShadow)&&(Ve.receiveShadow=J.receiveShadow,Bt.setValue(N,"receiveShadow",J.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fi.envMap.value=Fe,fi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(fi.envMapIntensity.value=V.environmentIntensity),hs&&(Bt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Pd(fi,bo),we&&K.fog===!0&&ne.refreshFogUniforms(fi,we),ne.refreshMaterialUniforms(fi,K,j,H,m.state.transmissionRenderTarget[A.id]),Oa.upload(N,_c(Ve),fi,ze)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Oa.upload(N,_c(Ve),fi,ze),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Bt.setValue(N,"center",J.center),Bt.setValue(N,"modelViewMatrix",J.modelViewMatrix),Bt.setValue(N,"normalMatrix",J.normalMatrix),Bt.setValue(N,"modelMatrix",J.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const hn=K.uniformsGroups;for(let To=0,Dd=hn.length;To<Dd;To++){const yc=hn[To];He.update(yc,Wi),He.bind(yc,Wi)}}return Wi}function Pd(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Ld(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,V,Q){be.get(A.texture).__webglTexture=V,be.get(A.depthTexture).__webglTexture=Q;const K=be.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Q===void 0,K.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const Q=be.get(A);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Q=0){T=A,P=V,C=Q;let K=!0,J=null,we=!1,Re=!1;if(A){const Fe=be.get(A);Fe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(N.FRAMEBUFFER,null),K=!1):Fe.__webglFramebuffer===void 0?ze.setupRenderTarget(A):Fe.__hasExternalTextures&&ze.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const qe=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[V])?J=qe[V][Q]:J=qe[V],we=!0):A.samples>0&&ze.useMultisampledRTT(A)===!1?J=be.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?J=qe[Q]:J=qe,x.copy(A.viewport),E.copy(A.scissor),k=A.scissorTest}else x.copy(Z).multiplyScalar(j).floor(),E.copy(te).multiplyScalar(j).floor(),k=ve;if(Me.bindFramebuffer(N.FRAMEBUFFER,J)&&K&&Me.drawBuffers(A,J),Me.viewport(x),Me.scissor(E),Me.setScissorTest(k),we){const Fe=be.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,Q)}else if(Re){const Fe=be.get(A.texture),Ge=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fe.__webglTexture,Q||0,Ge)}U=-1},this.readRenderTargetPixels=function(A,V,Q,K,J,we,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){Me.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const Fe=A.texture,Ge=Fe.format,qe=Fe.type;if(!Ee.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-K&&Q>=0&&Q<=A.height-J&&N.readPixels(V,Q,K,J,ye.convert(Ge),ye.convert(qe),we)}finally{const Fe=T!==null?be.get(T).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(A,V,Q=0){const K=Math.pow(2,-Q),J=Math.floor(V.image.width*K),we=Math.floor(V.image.height*K);ze.setTexture2D(V,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,A.x,A.y,J,we),Me.unbindTexture()},this.copyTextureToTexture=function(A,V,Q,K=0){const J=V.image.width,we=V.image.height,Re=ye.convert(Q.format),Pe=ye.convert(Q.type);ze.setTexture2D(Q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Q.unpackAlignment),V.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,A.x,A.y,J,we,Re,Pe,V.image.data):V.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Re,V.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,K,A.x,A.y,Re,Pe,V.image),K===0&&Q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Q,K,J=0){const we=A.max.x-A.min.x,Re=A.max.y-A.min.y,Pe=A.max.z-A.min.z,Fe=ye.convert(K.format),Ge=ye.convert(K.type);let qe;if(K.isData3DTexture)ze.setTexture3D(K,0),qe=N.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)ze.setTexture2DArray(K,0),qe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);const Je=N.getParameter(N.UNPACK_ROW_LENGTH),bt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ot=N.getParameter(N.UNPACK_SKIP_PIXELS),rn=N.getParameter(N.UNPACK_SKIP_ROWS),Zn=N.getParameter(N.UNPACK_SKIP_IMAGES),at=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?N.texSubImage3D(qe,J,V.x,V.y,V.z,we,Re,Pe,Fe,Ge,at.data):K.isCompressedArrayTexture?N.compressedTexSubImage3D(qe,J,V.x,V.y,V.z,we,Re,Pe,Fe,at.data):N.texSubImage3D(qe,J,V.x,V.y,V.z,we,Re,Pe,Fe,Ge,at),N.pixelStorei(N.UNPACK_ROW_LENGTH,Je),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,rn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zn),J===0&&K.generateMipmaps&&N.generateMipmap(qe),Me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ze.setTextureCube(A,0):A.isData3DTexture?ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ze.setTexture2DArray(A,0):ze.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){P=0,C=0,T=null,Me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===po?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sl extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pf extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=xt,u=xt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lf extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new W,Ka=new W,Hu=new ct,_s=new ic,Ma=new mo,al=new W,Gu=new W;let Zv=class extends nn{constructor(e=new Yn,t=new Lf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Za.fromBufferAttribute(t,r-1),Ka.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Za.distanceTo(Ka);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;Hu.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Hu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),v=ba(this,e,_s,c,p,M);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=ba(this,e,_s,c,_,m);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=ba(this,e,_s,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ba(this,e,_s,c,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ba(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Za.fromBufferAttribute(a,r),Ka.fromBufferAttribute(a,s),t.distanceSqToSegment(Za,Ka,al,Gu)>i)return;al.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(al);if(!(c<e.near||c>e.far))return{distance:c,point:Gu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Vu=new W,Wu=new W;class ol extends Zv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vu.fromBufferAttribute(t,r),Wu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vu.distanceTo(Wu);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tc);const qu={type:"change"},cl={type:"start"},$u={type:"end"},Ea=new ic,Yu=new yi,Kv=Math.cos(70*zp.DEG2RAD);class Df extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Ie),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qu),i.update(),s=r.NONE},this.update=function(){const S=new W,G=new hr().setFromUnitVectors(e.up,new W(0,1,0)),$=G.clone().invert(),le=new W,ge=new hr,Xe=new W,Ke=2*Math.PI;return function(Lt=null){const et=i.object.position;S.copy(et).sub(i.target),S.applyQuaternion(G),o.setFromVector3(S),i.autoRotate&&s===r.NONE&&k(x(Lt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Mt=i.minAzimuthAngle,pt=i.maxAzimuthAngle;isFinite(Mt)&&isFinite(pt)&&(Mt<-Math.PI?Mt+=Ke:Mt>Math.PI&&(Mt-=Ke),pt<-Math.PI?pt+=Ke:pt>Math.PI&&(pt-=Ke),Mt<=pt?o.theta=Math.max(Mt,Math.min(pt,o.theta)):o.theta=o.theta>(Mt+pt)/2?Math.max(Mt,o.theta):Math.min(pt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ui=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)o.radius=Z(o.radius);else{const un=o.radius;o.radius=Z(o.radius*l),ui=un!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion($),et.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&C){let un=null;if(i.object.isPerspectiveCamera){const hi=S.length();un=Z(hi*l);const jn=hi-un;i.object.position.addScaledVector(y,jn),i.object.updateMatrixWorld(),ui=!!jn}else if(i.object.isOrthographicCamera){const hi=new W(P.x,P.y,0);hi.unproject(i.object);const jn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),ui=jn!==i.object.zoom;const cs=new W(P.x,P.y,0);cs.unproject(i.object),i.object.position.sub(cs).add(hi),i.object.updateMatrixWorld(),un=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;un!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(un).add(i.object.position):(Ea.origin.copy(i.object.position),Ea.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ea.direction))<Kv?e.lookAt(i.target):(Yu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ea.intersectPlane(Yu,i.target))))}else if(i.object.isOrthographicCamera){const un=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),un!==i.object.zoom&&(i.object.updateProjectionMatrix(),ui=!0)}return l=1,C=!1,ui||le.distanceToSquared(i.object.position)>a||8*(1-ge.dot(i.object.quaternion))>a||Xe.distanceToSquared(i.target)>a?(i.dispatchEvent(qu),le.copy(i.object.position),ge.copy(i.object.quaternion),Xe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ke),i.domElement.removeEventListener("pointerdown",R),i.domElement.removeEventListener("pointercancel",F),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",F),i.domElement.getRootNode().removeEventListener("keydown",me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ie),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Xu,c=new Xu;let l=1;const u=new W,f=new Ue,d=new Ue,h=new Ue,g=new Ue,_=new Ue,m=new Ue,p=new Ue,M=new Ue,v=new Ue,y=new W,P=new Ue;let C=!1;const T=[],U={};let b=!1;function x(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function E(S){const G=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*G)}function k(S){c.theta-=S}function I(S){c.phi-=S}const B=function(){const S=new W;return function($,le){S.setFromMatrixColumn(le,0),S.multiplyScalar(-$),u.add(S)}}(),D=function(){const S=new W;return function($,le){i.screenSpacePanning===!0?S.setFromMatrixColumn(le,1):(S.setFromMatrixColumn(le,0),S.crossVectors(i.object.up,S)),S.multiplyScalar($),u.add(S)}}(),H=function(){const S=new W;return function($,le){const ge=i.domElement;if(i.object.isPerspectiveCamera){const Xe=i.object.position;S.copy(Xe).sub(i.target);let Ke=S.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),B(2*$*Ke/ge.clientHeight,i.object.matrix),D(2*le*Ke/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B($*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),D(le*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(S,G){if(!i.zoomToCursor)return;C=!0;const $=i.domElement.getBoundingClientRect(),le=S-$.left,ge=G-$.top,Xe=$.width,Ke=$.height;P.x=le/Xe*2-1,P.y=-(ge/Ke)*2+1,y.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function te(S){f.set(S.clientX,S.clientY)}function ve(S){X(S.clientX,S.clientX),p.set(S.clientX,S.clientY)}function pe(S){g.set(S.clientX,S.clientY)}function z(S){d.set(S.clientX,S.clientY),h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const G=i.domElement;k(2*Math.PI*h.x/G.clientHeight),I(2*Math.PI*h.y/G.clientHeight),f.copy(d),i.update()}function re(S){M.set(S.clientX,S.clientY),v.subVectors(M,p),v.y>0?j(E(v.y)):v.y<0&&O(E(v.y)),p.copy(M),i.update()}function de(S){_.set(S.clientX,S.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_),i.update()}function oe(S){X(S.clientX,S.clientY),S.deltaY<0?O(E(S.deltaY)):S.deltaY>0&&j(E(S.deltaY)),i.update()}function Te(S){let G=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),G=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),G=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),G=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),G=!0;break}G&&(S.preventDefault(),i.update())}function he(S){if(T.length===1)f.set(S.pageX,S.pageY);else{const G=nt(S),$=.5*(S.pageX+G.x),le=.5*(S.pageY+G.y);f.set($,le)}}function N(S){if(T.length===1)g.set(S.pageX,S.pageY);else{const G=nt(S),$=.5*(S.pageX+G.x),le=.5*(S.pageY+G.y);g.set($,le)}}function ce(S){const G=nt(S),$=S.pageX-G.x,le=S.pageY-G.y,ge=Math.sqrt($*$+le*le);p.set(0,ge)}function q(S){i.enableZoom&&ce(S),i.enablePan&&N(S)}function Ee(S){i.enableZoom&&ce(S),i.enableRotate&&he(S)}function Me(S){if(T.length==1)d.set(S.pageX,S.pageY);else{const $=nt(S),le=.5*(S.pageX+$.x),ge=.5*(S.pageY+$.y);d.set(le,ge)}h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const G=i.domElement;k(2*Math.PI*h.x/G.clientHeight),I(2*Math.PI*h.y/G.clientHeight),f.copy(d)}function De(S){if(T.length===1)_.set(S.pageX,S.pageY);else{const G=nt(S),$=.5*(S.pageX+G.x),le=.5*(S.pageY+G.y);_.set($,le)}m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_)}function be(S){const G=nt(S),$=S.pageX-G.x,le=S.pageY-G.y,ge=Math.sqrt($*$+le*le);M.set(0,ge),v.set(0,Math.pow(M.y/p.y,i.zoomSpeed)),j(v.y),p.copy(M);const Xe=(S.pageX+G.x)*.5,Ke=(S.pageY+G.y)*.5;X(Xe,Ke)}function ze(S){i.enableZoom&&be(S),i.enablePan&&De(S)}function st(S){i.enableZoom&&be(S),i.enableRotate&&Me(S)}function R(S){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",F)),!ae(S)&&(Ce(S),S.pointerType==="touch"?ue(S):Y(S)))}function w(S){i.enabled!==!1&&(S.pointerType==="touch"?Ae(S):ee(S))}function F(S){switch(ye(S),T.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",F),i.dispatchEvent($u),s=r.NONE;break;case 1:const G=T[0],$=U[G];ue({pointerId:G,pageX:$.x,pageY:$.y});break}}function Y(S){let G;switch(S.button){case 0:G=i.mouseButtons.LEFT;break;case 1:G=i.mouseButtons.MIDDLE;break;case 2:G=i.mouseButtons.RIGHT;break;default:G=-1}switch(G){case xr.DOLLY:if(i.enableZoom===!1)return;ve(S),s=r.DOLLY;break;case xr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;pe(S),s=r.PAN}else{if(i.enableRotate===!1)return;te(S),s=r.ROTATE}break;case xr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;te(S),s=r.ROTATE}else{if(i.enablePan===!1)return;pe(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(cl)}function ee(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;z(S);break;case r.DOLLY:if(i.enableZoom===!1)return;re(S);break;case r.PAN:if(i.enablePan===!1)return;de(S);break}}function ne(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(cl),oe(Se(S)),i.dispatchEvent($u))}function Se(S){const G=S.deltaMode,$={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(G){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return S.ctrlKey&&!b&&($.deltaY*=10),$}function me(S){S.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(S){S.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function Ie(S){i.enabled===!1||i.enablePan===!1||Te(S)}function ue(S){switch(He(S),T.length){case 1:switch(i.touches.ONE){case yr.ROTATE:if(i.enableRotate===!1)return;he(S),s=r.TOUCH_ROTATE;break;case yr.PAN:if(i.enablePan===!1)return;N(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;q(S),s=r.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ee(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(cl)}function Ae(S){switch(He(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;De(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;st(S),i.update();break;default:s=r.NONE}}function ke(S){i.enabled!==!1&&S.preventDefault()}function Ce(S){T.push(S.pointerId)}function ye(S){delete U[S.pointerId];for(let G=0;G<T.length;G++)if(T[G]==S.pointerId){T.splice(G,1);return}}function ae(S){for(let G=0;G<T.length;G++)if(T[G]==S.pointerId)return!0;return!1}function He(S){let G=U[S.pointerId];G===void 0&&(G=new Ue,U[S.pointerId]=G),G.set(S.pageX,S.pageY)}function nt(S){const G=S.pointerId===T[0]?T[1]:T[0];return U[G]}i.domElement.addEventListener("contextmenu",ke),i.domElement.addEventListener("pointerdown",R),i.domElement.addEventListener("pointercancel",F),i.domElement.addEventListener("wheel",ne,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}}function Jv(n){return n.length>=2&&n[0]===31&&n[1]===139}function Qv(n){return n.length>=2&&n[0]===120&&(n[1]===1||n[1]===94||n[1]===156||n[1]===218)}function ex(n){const e=n.slice(0,8),t=new DataView(e.buffer,e.byteOffset),i=t.getUint32(0,!0),r=t.getUint32(4,!0);if(e.length===8&&i>0&&i<100&&r===n.byteLength-8)return i}const tx=new TextEncoder,nx=new TextDecoder;function ix(n){return tx.encode(n)}function rx(n){return nx.decode(n instanceof Uint8Array?n:Uint8Array.from(n))}class If{constructor(e,t){L(this,"littleEndian");L(this,"offset");L(this,"array");L(this,"view");L(this,"readByte",this.readNumber.bind(this,"getInt8",1));L(this,"readShort",this.readNumber.bind(this,"getInt16",2));L(this,"readInt",this.readNumber.bind(this,"getInt32",4));L(this,"readFloat",this.readNumber.bind(this,"getFloat32",4));L(this,"readDouble",this.readNumber.bind(this,"getFloat64",8));this.littleEndian=(t==null?void 0:t.littleEndian)??!1,this.offset=(t==null?void 0:t.offset)??0,this.array=e instanceof Uint8Array?e:new Uint8Array(e),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}readNumber(e,t){this.requireAvailable(t);const i=this.view[e](this.offset,this.littleEndian);return this.offset+=t,i}requireAvailable(e){if(e<0)throw new Error(`Cannot read negative byte length ${e}`);if(this.offset+e>this.array.byteLength)throw new Error(`Cannot read ${e} bytes at offset ${this.offset}; input length is ${this.array.byteLength}`)}readBytes(e){this.requireAvailable(e);const t=this.array.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){this.requireAvailable(2);const e=this.view.getUint16(this.offset,this.littleEndian);this.offset+=2;const t=this.readBytes(e);return rx(t)}}class Uf{constructor(e){L(this,"littleEndian");L(this,"offset");L(this,"buffer");L(this,"array");L(this,"view");L(this,"writeByte",this.writeNumber.bind(this,"setInt8",1));L(this,"writeShort",this.writeNumber.bind(this,"setInt16",2));L(this,"writeInt",this.writeNumber.bind(this,"setInt32",4));L(this,"writeFloat",this.writeNumber.bind(this,"setFloat32",4));L(this,"writeDouble",this.writeNumber.bind(this,"setFloat64",8));this.littleEndian=(e==null?void 0:e.littleEndian)??!1,this.offset=(e==null?void 0:e.offset)??0,this.buffer=new ArrayBuffer((e==null?void 0:e.initialSize)??1024),this.array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer)}accommodate(e){const t=this.offset+e;if(this.buffer.byteLength>=t)return;let i=this.buffer.byteLength;for(;i<t;)i*=2;const r=new ArrayBuffer(i),s=new Uint8Array(r);s.set(this.array),this.offset>this.buffer.byteLength&&s.fill(0,this.buffer.byteLength,this.offset),this.buffer=r,this.view=new DataView(r),this.array=s}writeNumber(e,t,i){this.accommodate(t),this.view[e](this.offset,i,this.littleEndian),this.offset+=t}writeBytes(e){this.accommodate(e.length),this.array.set(e,this.offset),this.offset+=e.length}writeString(e){const t=ix(e);if(t.length>65535)throw new Error(`NBT strings cannot exceed 65535 bytes; got ${t.length}`);this.accommodate(2),this.view.setUint16(this.offset,t.length,this.littleEndian),this.offset+=2,this.writeBytes(t)}getData(){return this.accommodate(0),this.array.slice(0,this.offset)}}var se;(function(n){function e(f){return typeof f=="number"?f:void 0}n.readNumber=e;function t(f){return typeof f=="number"?Math.floor(f):void 0}n.readInt=t;function i(f){return typeof f=="string"?f:void 0}n.readString=i;function r(f){return typeof f=="boolean"?f:void 0}n.readBoolean=r;function s(f){return typeof f=="object"&&f!==null&&!Array.isArray(f)?f:void 0}n.readObject=s;function a(f,d){if(Array.isArray(f))return d?f.map(h=>d(h)):f}n.readArray=a;function o(f,d){if(Array.isArray(f))return[0,1].map(h=>d(f[h]))}n.readPair=o;function c(f,d){const h=s(f)??{};return Object.fromEntries(Object.entries(h).map(([g,_])=>[g,d(_)]))}n.readMap=c;function l(f,d,h){const g=d(f);return g?h(g):void 0}n.compose=l;function u(f,d){return typeof f!="string"?d[0]:d.includes(f)?f:d[0]}n.readEnum=u})(se||(se={}));var Ze;(function(n){function e(r){const s=se.readNumber(r);if(s)return i(s);const a=se.readArray(r,o=>se.readNumber(o)??0);if(!(a===void 0||a.length!==3))return a}n.fromJson=e;function t(r){if(r.isNumber())return i(r.getAsNumber());if(!r.isListOrArray())return;const s=r.getItems();if(!(s.length<3))return s.map(a=>a.getAsNumber())}n.fromNbt=t;function i(r){const s=r>>16&255,a=r>>8&255,o=r&255;return[s/255,a/255,o/255]}n.intToRgb=i})(Ze||(Ze={}));class $t{constructor(e){L(this,"source");L(this,"cursor");this.source=e,this.cursor=0}get remainingLength(){return this.source.length-this.cursor}get totalLength(){return this.source.length}getRead(e=0){return this.source.substring(e,this.cursor)}getRemaining(){return this.source.substring(this.cursor)}canRead(e=1){return this.cursor+e<=this.source.length}peek(e=0){return this.source.charAt(this.cursor+e)}read(){return this.source.charAt(this.cursor++)}skip(){this.cursor+=1}skipWhitespace(){for(;this.canRead()&&$t.isWhitespace(this.peek());)this.skip()}expect(e,t=!1){if(t&&this.skipWhitespace(),!this.canRead()||this.peek()!==e)throw this.createError(`Expected '${e}'`);this.skip()}readInt(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected integer");try{const i=Number(t);if(isNaN(i)||!Number.isInteger(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid integer '${t}'`)}}readFloat(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected float");try{const i=Number(t);if(isNaN(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid float '${t}'`)}}readUnquotedString(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInUnquotedString(this.peek());)this.skip();return this.getRead(e)}readQuotedString(){if(!this.canRead())return"";const e=this.peek();if(!$t.isQuotedStringStart(e))throw this.createError("Expected quote to start a string");return this.skip(),this.readStringUntil(e)}readString(){if(!this.canRead())return"";const e=this.peek();return $t.isQuotedStringStart(e)?(this.skip(),this.readStringUntil(e)):this.readUnquotedString()}readStringUntil(e){const t=[];let i=!1;for(;this.canRead();){const r=this.read();if(i)if(r===e||r==="\\")t.push(r),i=!1;else throw this.cursor-=1,this.createError(`Invalid escape sequence '${r}' in quoted string`);else if(r==="\\")i=!0;else{if(r===e)return t.join("");t.push(r)}}throw this.createError("Unclosed quoted string")}readBoolean(){const e=this.cursor,t=this.readUnquotedString();if(t.length===0)throw this.createError("Expected bool");if(t==="true")return!0;if(t==="false")return!1;throw this.cursor=e,this.createError(`Invalid bool, expected true or false but found '${t}'`)}static isAllowedInNumber(e){return e>="0"&&e<="9"||e==="."||e==="-"}static isAllowedInUnquotedString(e){return e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z"||e==="_"||e==="-"||e==="."||e==="+"}static isQuotedStringStart(e){return e==="'"||e==='"'}static isWhitespace(e){return e===" "||e==="	"||e===`
`||e==="\r"}createError(e){const t=Math.min(this.source.length,this.cursor),i=(t>10?"...":"")+this.source.substring(Math.max(0,t-10),t);return new Error(`${e} at position ${this.cursor}: ${i}<--[HERE]`)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const sx=4,ju=0,Zu=1,ax=2;function as(n){let e=n.length;for(;--e>=0;)n[e]=0}const ox=0,Nf=1,lx=2,cx=3,ux=258,sc=29,Ys=256,Ls=Ys+1+sc,jr=30,ac=19,kf=2*Ls+1,rr=15,ul=16,hx=7,oc=256,Ff=16,Of=17,Bf=18,Fl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Ba=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),fx=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),zf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dx=512,si=new Array((Ls+2)*2);as(si);const Es=new Array(jr*2);as(Es);const Ds=new Array(dx);as(Ds);const Is=new Array(ux-cx+1);as(Is);const lc=new Array(sc);as(lc);const Ja=new Array(jr);as(Ja);function hl(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Hf,Gf,Vf;function fl(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Wf=n=>n<256?Ds[n]:Ds[256+(n>>>7)],Us=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},en=(n,e,t)=>{n.bi_valid>ul-t?(n.bi_buf|=e<<n.bi_valid&65535,Us(n,n.bi_buf),n.bi_buf=e>>ul-n.bi_valid,n.bi_valid+=t-ul):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Gn=(n,e,t)=>{en(n,t[e*2],t[e*2+1])},Xf=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},px=n=>{n.bi_valid===16?(Us(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},mx=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,f,d,h,g,_=0;for(d=0;d<=rr;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<kf;l++)u=n.heap[l],d=t[t[u*2+1]*2+1]+1,d>c&&(d=c,_++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,h=0,u>=o&&(h=a[u-o]),g=t[u*2],n.opt_len+=g*(d+h),s&&(n.static_len+=g*(r[u*2+1]+h)));if(_!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(u=n.bl_count[d];u!==0;)f=n.heap[--l],!(f>i)&&(t[f*2+1]!==d&&(n.opt_len+=(d-t[f*2+1])*t[f*2],t[f*2+1]=d),u--)}},qf=(n,e,t)=>{const i=new Array(rr+1);let r=0,s,a;for(s=1;s<=rr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Xf(i[o]++,o))}},gx=()=>{let n,e,t,i,r;const s=new Array(rr+1);for(t=0,i=0;i<sc-1;i++)for(lc[i]=t,n=0;n<1<<Fl[i];n++)Is[t++]=i;for(Is[t-1]=i,r=0,i=0;i<16;i++)for(Ja[i]=r,n=0;n<1<<Ba[i];n++)Ds[r++]=i;for(r>>=7;i<jr;i++)for(Ja[i]=r<<7,n=0;n<1<<Ba[i]-7;n++)Ds[256+r++]=i;for(e=0;e<=rr;e++)s[e]=0;for(n=0;n<=143;)si[n*2+1]=8,n++,s[8]++;for(;n<=255;)si[n*2+1]=9,n++,s[9]++;for(;n<=279;)si[n*2+1]=7,n++,s[7]++;for(;n<=287;)si[n*2+1]=8,n++,s[8]++;for(qf(si,Ls+1,s),n=0;n<jr;n++)Es[n*2+1]=5,Es[n*2]=Xf(n,5);Hf=new hl(si,Fl,Ys+1,Ls,rr),Gf=new hl(Es,Ba,0,jr,rr),Vf=new hl(new Array(0),fx,0,ac,hx)},$f=n=>{let e;for(e=0;e<Ls;e++)n.dyn_ltree[e*2]=0;for(e=0;e<jr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<ac;e++)n.bl_tree[e*2]=0;n.dyn_ltree[oc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Yf=n=>{n.bi_valid>8?Us(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Ku=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},dl=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Ku(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Ku(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Ju=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Gn(n,r,e):(a=Is[r],Gn(n,a+Ys+1,e),o=Fl[a],o!==0&&(r-=lc[a],en(n,r,o)),i--,a=Wf(i),Gn(n,a,t),o=Ba[a],o!==0&&(i-=Ja[a],en(n,i,o)));while(s<n.sym_next);Gn(n,oc,e)},Ol=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=kf,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)dl(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],dl(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,dl(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],mx(n,e),qf(t,c,n.bl_count)},Qu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Ff*2]++):o<=10?n.bl_tree[Of*2]++:n.bl_tree[Bf*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},eh=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do Gn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Gn(n,s,n.bl_tree),o--),Gn(n,Ff,n.bl_tree),en(n,o-3,2)):o<=10?(Gn(n,Of,n.bl_tree),en(n,o-3,3)):(Gn(n,Bf,n.bl_tree),en(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},_x=n=>{let e;for(Qu(n,n.dyn_ltree,n.l_desc.max_code),Qu(n,n.dyn_dtree,n.d_desc.max_code),Ol(n,n.bl_desc),e=ac-1;e>=3&&n.bl_tree[zf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},vx=(n,e,t,i)=>{let r;for(en(n,e-257,5),en(n,t-1,5),en(n,i-4,4),r=0;r<i;r++)en(n,n.bl_tree[zf[r]*2+1],3);eh(n,n.dyn_ltree,e-1),eh(n,n.dyn_dtree,t-1)},xx=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return ju;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Zu;for(t=32;t<Ys;t++)if(n.dyn_ltree[t*2]!==0)return Zu;return ju};let th=!1;const yx=n=>{th||(gx(),th=!0),n.l_desc=new fl(n.dyn_ltree,Hf),n.d_desc=new fl(n.dyn_dtree,Gf),n.bl_desc=new fl(n.bl_tree,Vf),n.bi_buf=0,n.bi_valid=0,$f(n)},jf=(n,e,t,i)=>{en(n,(ox<<1)+(i?1:0),3),Yf(n),Us(n,t),Us(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},Sx=n=>{en(n,Nf<<1,3),Gn(n,oc,si),px(n)},wx=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===ax&&(n.strm.data_type=xx(n)),Ol(n,n.l_desc),Ol(n,n.d_desc),a=_x(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?jf(n,e,t,i):n.strategy===sx||s===r?(en(n,(Nf<<1)+(i?1:0),3),Ju(n,si,Es)):(en(n,(lx<<1)+(i?1:0),3),vx(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Ju(n,n.dyn_ltree,n.dyn_dtree)),$f(n),i&&Yf(n)},Mx=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Is[t]+Ys+1)*2]++,n.dyn_dtree[Wf(e)*2]++),n.sym_next===n.sym_end);var bx=yx,Ex=jf,Tx=wx,Ax=Mx,Cx=Sx,Rx={_tr_init:bx,_tr_stored_block:Ex,_tr_flush_block:Tx,_tr_tally:Ax,_tr_align:Cx};const Px=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Ns=Px;const Lx=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},Dx=new Uint32Array(Lx()),Ix=(n,e,t,i)=>{const r=Dx,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var It=Ix,fr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},js={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Ux,_tr_stored_block:Bl,_tr_flush_block:Nx,_tr_tally:Ii,_tr_align:kx}=Rx,{Z_NO_FLUSH:Ui,Z_PARTIAL_FLUSH:Fx,Z_FULL_FLUSH:Ox,Z_FINISH:pn,Z_BLOCK:nh,Z_OK:kt,Z_STREAM_END:ih,Z_STREAM_ERROR:Wn,Z_DATA_ERROR:Bx,Z_BUF_ERROR:pl,Z_DEFAULT_COMPRESSION:zx,Z_FILTERED:Hx,Z_HUFFMAN_ONLY:Ta,Z_RLE:Gx,Z_FIXED:Vx,Z_DEFAULT_STRATEGY:Wx,Z_UNKNOWN:Xx,Z_DEFLATED:_o}=js,qx=9,$x=15,Yx=8,jx=29,Zx=256,zl=Zx+1+jx,Kx=30,Jx=19,Qx=2*zl+1,e1=15,tt=3,Ci=258,Xn=Ci+tt+1,t1=32,ns=42,cc=57,Hl=69,Gl=73,Vl=91,Wl=103,sr=113,Ms=666,Zt=1,os=2,dr=3,ls=4,n1=3,ar=(n,e)=>(n.msg=fr[e],e),rh=n=>n*2-(n>4?9:0),Ti=n=>{let e=n.length;for(;--e>=0;)n[e]=0},i1=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let uc=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask;const pr=(n,e)=>{let t;if(n.legacy_hash)t=n.ins_h=uc(n,n.ins_h,n.window[e+tt-1]);else{const r=n.window,s=r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;t=n.ins_h=Math.imul(s,66521)+66521>>>16&n.hash_mask}const i=n.prev[e&n.w_mask]=n.head[t];return n.head[t]=e,i},on=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},cn=(n,e)=>{Nx(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,on(n.strm)},it=(n,e)=>{n.pending_buf[n.pending++]=e},vs=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Xl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Ns(n.adler,e,r,t):n.state.wrap===2&&(n.adler=It(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},Zf=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Xn?n.strstart-(n.w_size-Xn):0,l=n.window,u=n.w_mask,f=n.prev,d=n.strstart+Ci;let h=l[i+a-1],g=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==h||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<d);if(s=Ci-(d-i),i=d-Ci,s>a){if(n.match_start=e,a=s,s>=o)break;h=l[i+a-1],g=l[i+a]}}while((e=f[e&u])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},is=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Xn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),i1(n),i+=e),n.strm.avail_in===0)break;if(t=Xl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.legacy_hash){if(n.lookahead+n.insert>=tt)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=uc(n,n.ins_h,n.window[r+1]);n.insert&&(pr(n,r),r++,n.insert--,!(n.lookahead+n.insert<tt)););}else if(n.lookahead+n.insert>tt)for(r=n.strstart-n.insert;n.insert&&(pr(n,r),r++,n.insert--,!(n.lookahead+n.insert<=tt)););}while(n.lookahead<Xn&&n.strm.avail_in!==0)},Kf=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==pn||e===Ui||i!==r+n.strm.avail_in)))break;a=e===pn&&i===r+n.strm.avail_in?1:0,Bl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,on(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Xl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?ls:e!==Ui&&e!==pn&&n.strm.avail_in===0&&n.strstart===n.block_start?os:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Xl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===pn)&&e!==Ui&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===pn&&n.strm.avail_in===0&&i===r?1:0,Bl(n,n.block_start,i,a),n.block_start+=i,on(n.strm)),a?dr:Zt)},ml=(n,e)=>{let t,i;for(;;){if(n.lookahead<Xn){if(is(n),n.lookahead<Xn&&e===Ui)return Zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=tt&&(t=pr(n,n.strstart)),t!==0&&n.strstart-t<=n.w_size-Xn&&(n.match_length=Zf(n,t)),n.match_length>=tt)if(i=Ii(n,n.strstart-n.match_start,n.match_length-tt),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=tt){n.match_length--;do n.strstart++,t=pr(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=uc(n,n.ins_h,n.window[n.strstart+1]));else i=Ii(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=n.strstart<tt-1?n.strstart:tt-1,e===pn?(cn(n,!0),n.strm.avail_out===0?dr:ls):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:os},Or=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Xn){if(is(n),n.lookahead<Xn&&e===Ui)return Zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=tt&&(t=pr(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=tt-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Xn&&(n.match_length=Zf(n,t),n.match_length<=5&&(n.strategy===Hx||n.match_length===tt&&n.strstart-n.match_start>4096)&&(n.match_length=tt-1)),n.prev_length>=tt&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-tt,i=Ii(n,n.strstart-1-n.prev_match,n.prev_length-tt),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(t=pr(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=tt-1,n.strstart++,i&&(cn(n,!1),n.strm.avail_out===0))return Zt}else if(n.match_available){if(i=Ii(n,0,n.window[n.strstart-1]),i&&cn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Zt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Ii(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<tt-1?n.strstart:tt-1,e===pn?(cn(n,!0),n.strm.avail_out===0?dr:ls):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:os},r1=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=Ci){if(is(n),n.lookahead<=Ci&&e===Ui)return Zt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=tt&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+Ci;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=Ci-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=tt?(t=Ii(n,1,n.match_length-tt),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Ii(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=0,e===pn?(cn(n,!0),n.strm.avail_out===0?dr:ls):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:os},s1=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(is(n),n.lookahead===0)){if(e===Ui)return Zt;break}if(n.match_length=0,t=Ii(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=0,e===pn?(cn(n,!0),n.strm.avail_out===0?dr:ls):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:os};function Un(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const bs=[new Un(0,0,0,0,Kf),new Un(4,4,8,4,ml),new Un(4,5,16,8,ml),new Un(4,6,32,32,ml),new Un(4,4,16,16,Or),new Un(8,16,32,32,Or),new Un(8,16,128,128,Or),new Un(8,32,128,256,Or),new Un(32,128,258,1024,Or),new Un(32,258,258,4096,Or)],a1=n=>{n.window_size=2*n.w_size,Ti(n.head),n.max_lazy_match=bs[n.level].max_lazy,n.good_match=bs[n.level].good_length,n.nice_match=bs[n.level].nice_length,n.max_chain_length=bs[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=tt-1,n.match_available=0,n.ins_h=0};function o1(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_o,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(Qx*2),this.dyn_dtree=new Uint16Array((2*Kx+1)*2),this.bl_tree=new Uint16Array((2*Jx+1)*2),Ti(this.dyn_ltree),Ti(this.dyn_dtree),Ti(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(e1+1),this.heap=new Uint16Array(2*zl+1),Ti(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*zl+1),Ti(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Zs=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==ns&&e.status!==cc&&e.status!==Hl&&e.status!==Gl&&e.status!==Vl&&e.status!==Wl&&e.status!==sr&&e.status!==Ms?1:0},Jf=n=>{if(Zs(n))return ar(n,Wn);n.total_in=n.total_out=0,n.data_type=Xx;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?cc:e.wrap?ns:sr,n.adler=e.wrap===2?0:1,e.last_flush=-2,Ux(e),kt},Qf=n=>{const e=Jf(n);return e===kt&&a1(n.state),e},l1=(n,e)=>Zs(n)||n.state.wrap!==2?Wn:(n.state.gzhead=e,kt),ed=(n,e,t,i,r,s,a)=>{if(!n)return Wn;let o=1;if(e===zx&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>qx||t!==_o||i<8||i>15||e<0||e>9||s<0||s>Vx||i===8&&o!==1)return ar(n,Wn);i===8&&(i=9);const c=new o1;return n.state=c,c.strm=n,c.status=ns,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=a?1:0,c.hash_bits=r+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+tt-1)/tt),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<r+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=e,c.strategy=s,c.method=t,Qf(n)},c1=(n,e)=>ed(n,e,_o,$x,Yx,Wx),u1=(n,e)=>{if(Zs(n)||e>nh||e<0)return n?ar(n,Wn):Wn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===Ms&&e!==pn)return ar(n,n.avail_out===0?pl:Wn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(on(n),n.avail_out===0)return t.last_flush=-1,kt}else if(n.avail_in===0&&rh(e)<=rh(i)&&e!==pn)return ar(n,pl);if(t.status===Ms&&n.avail_in!==0)return ar(n,pl);if(t.status===ns&&t.wrap===0&&(t.status=sr),t.status===ns){let r=_o+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Ta||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=t1),r+=31-r%31,vs(t,r),t.strstart!==0&&(vs(t,n.adler>>>16),vs(t,n.adler&65535)),n.adler=1,t.status=sr,on(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===cc){if(n.adler=0,it(t,31),it(t,139),it(t,8),t.gzhead)it(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),it(t,t.gzhead.time&255),it(t,t.gzhead.time>>8&255),it(t,t.gzhead.time>>16&255),it(t,t.gzhead.time>>24&255),it(t,t.level===9?2:t.strategy>=Ta||t.level<2?4:0),it(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(it(t,t.gzhead.extra.length&255),it(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=It(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Hl;else if(it(t,0),it(t,0),it(t,0),it(t,0),it(t,0),it(t,t.level===9?2:t.strategy>=Ta||t.level<2?4:0),it(t,n1),t.status=sr,on(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===Hl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,on(n),t.pending!==0)return t.last_flush=-1,kt;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Gl}if(t.status===Gl){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,kt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,it(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Vl}if(t.status===Vl){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,kt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,it(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r))}t.status=Wl}if(t.status===Wl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(on(n),t.pending!==0))return t.last_flush=-1,kt;it(t,n.adler&255),it(t,n.adler>>8&255),n.adler=0}if(t.status=sr,on(n),t.pending!==0)return t.last_flush=-1,kt}if(n.avail_in!==0||t.lookahead!==0||e!==Ui&&t.status!==Ms){let r=t.level===0?Kf(t,e):t.strategy===Ta?s1(t,e):t.strategy===Gx?r1(t,e):bs[t.level].func(t,e);if((r===dr||r===ls)&&(t.status=Ms),r===Zt||r===dr)return n.avail_out===0&&(t.last_flush=-1),kt;if(r===os&&(e===Fx?kx(t):e!==nh&&(Bl(t,0,0,!1),e===Ox&&(Ti(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),on(n),n.avail_out===0))return t.last_flush=-1,kt}return e!==pn?kt:t.wrap<=0?ih:(t.wrap===2?(it(t,n.adler&255),it(t,n.adler>>8&255),it(t,n.adler>>16&255),it(t,n.adler>>24&255),it(t,n.total_in&255),it(t,n.total_in>>8&255),it(t,n.total_in>>16&255),it(t,n.total_in>>24&255)):(vs(t,n.adler>>>16),vs(t,n.adler&65535)),on(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?kt:ih)},h1=n=>{if(Zs(n))return Wn;const e=n.state.status;return n.state=null,e===sr?ar(n,Bx):kt},f1=(n,e)=>{let t=e.length;if(Zs(n))return Wn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==ns||i.lookahead)return Wn;if(r===1&&(n.adler=Ns(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Ti(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,is(i);i.lookahead>=tt;){let c=i.strstart,l=i.lookahead-(tt-1);do pr(i,c),c++;while(--l);i.strstart=c,i.lookahead=tt-1,is(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=tt-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,kt};var d1=c1,p1=ed,m1=Qf,g1=Jf,_1=l1,v1=u1,x1=h1,y1=f1,S1="pako deflate (from Nodeca project)",Ts={deflateInit:d1,deflateInit2:p1,deflateReset:m1,deflateResetKeep:g1,deflateSetHeader:_1,deflate:v1,deflateEnd:x1,deflateSetDictionary:y1,deflateInfo:S1};const w1=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var M1=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)w1(t,i)&&(n[i]=t[i])}}return n},b1=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},vo={assign:M1,flattenChunks:b1};let td=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{td=!1}const ks=new Uint8Array(256);for(let n=0;n<256;n++)ks[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;ks[254]=ks[255]=1;var E1=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const T1=(n,e)=>{if(e<65534&&n.subarray&&td)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var A1=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=ks[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return T1(s,r)},C1=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+ks[n[t]]>e?t:e},Fs={string2buf:E1,buf2string:A1,utf8border:C1};function R1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var nd=R1;const id=Object.prototype.toString,{Z_NO_FLUSH:P1,Z_SYNC_FLUSH:L1,Z_FULL_FLUSH:D1,Z_FINISH:I1,Z_OK:Qa,Z_STREAM_END:U1,Z_DEFAULT_COMPRESSION:N1,Z_DEFAULT_STRATEGY:k1,Z_DEFLATED:F1}=js,O1={level:N1,method:F1,chunkSize:16384,windowBits:15,memLevel:8,strategy:k1,legacyHash:!0};function Ks(n){this.options=vo.assign({},O1,n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new nd,this.strm.avail_out=0;let t=Ts.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy,e.legacyHash);if(t!==Qa)throw new Error(fr[t]);if(e.header&&Ts.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Fs.string2buf(e.dictionary):id.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Ts.deflateSetDictionary(this.strm,i),t!==Qa)throw new Error(fr[t]);this._dict_set=!0}}Ks.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?I1:P1,typeof n=="string"?t.input=Fs.string2buf(n):id.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===L1||s===D1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Ts.deflate(t,s),r===U1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Ts.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Qa;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Ks.prototype.onData=function(n){this.chunks.push(n)};Ks.prototype.onEnd=function(n){n===Qa&&(this.result=vo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function hc(n,e){const t=new Ks(e);if(t.push(n,!0),t.err)throw t.msg||fr[t.err];return t.result}function B1(n,e){return e=e||{},e.raw=!0,hc(n,e)}function z1(n,e){return e=e||{},e.gzip=!0,hc(n,e)}var H1=Ks,G1=hc,V1=B1,W1=z1,X1={Deflate:H1,deflate:G1,deflateRaw:V1,gzip:W1};const Aa=16209,q1=16191;var $1=function(e,t){let i,r,s,a,o,c,l,u,f,d,h,g,_,m,p,M,v,y,P,C,T,U,b,x;const E=e.state;i=e.next_in,b=e.input,r=i+(e.avail_in-5),s=e.next_out,x=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=E.dmax,l=E.wsize,u=E.whave,f=E.wnext,d=E.window,h=E.hold,g=E.bits,_=E.lencode,m=E.distcode,p=(1<<E.lenbits)-1,M=(1<<E.distbits)-1;e:do{g<15&&(h+=b[i++]<<g,g+=8,h+=b[i++]<<g,g+=8),v=_[h&p];t:for(;;){if(y=v>>>24,h>>>=y,g-=y,y=v>>>16&255,y===0)x[s++]=v&65535;else if(y&16){P=v&65535,y&=15,y&&(g<y&&(h+=b[i++]<<g,g+=8),P+=h&(1<<y)-1,h>>>=y,g-=y),g<15&&(h+=b[i++]<<g,g+=8,h+=b[i++]<<g,g+=8),v=m[h&M];n:for(;;){if(y=v>>>24,h>>>=y,g-=y,y=v>>>16&255,y&16){if(C=v&65535,y&=15,g<y&&(h+=b[i++]<<g,g+=8,g<y&&(h+=b[i++]<<g,g+=8)),C+=h&(1<<y)-1,C>c){e.msg="invalid distance too far back",E.mode=Aa;break e}if(h>>>=y,g-=y,y=s-a,C>y){if(y=C-y,y>u&&E.sane){e.msg="invalid distance too far back",E.mode=Aa;break e}if(T=0,U=d,f===0){if(T+=l-y,y<P){P-=y;do x[s++]=d[T++];while(--y);T=s-C,U=x}}else if(f<y){if(T+=l+f-y,y-=f,y<P){P-=y;do x[s++]=d[T++];while(--y);if(T=0,f<P){y=f,P-=y;do x[s++]=d[T++];while(--y);T=s-C,U=x}}}else if(T+=f-y,y<P){P-=y;do x[s++]=d[T++];while(--y);T=s-C,U=x}for(;P>2;)x[s++]=U[T++],x[s++]=U[T++],x[s++]=U[T++],P-=3;P&&(x[s++]=U[T++],P>1&&(x[s++]=U[T++]))}else{T=s-C;do x[s++]=x[T++],x[s++]=x[T++],x[s++]=x[T++],P-=3;while(P>2);P&&(x[s++]=x[T++],P>1&&(x[s++]=x[T++]))}}else if(y&64){e.msg="invalid distance code",E.mode=Aa;break e}else{v=m[(v&65535)+(h&(1<<y)-1)];continue n}break}}else if(y&64)if(y&32){E.mode=q1;break e}else{e.msg="invalid literal/length code",E.mode=Aa;break e}else{v=_[(v&65535)+(h&(1<<y)-1)];continue t}break}}while(i<r&&s<o);P=g>>3,i-=P,g-=P<<3,h&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),E.hold=h,E.bits=g};const Br=15,sh=852,ah=592,oh=0,gl=1,lh=2,Y1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),j1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),Z1=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),K1=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),J1=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,u=0,f=0,d=0,h=0,g=0,_=0,m=0,p=0,M=0,v,y,P,C,T,U=null,b;const x=new Uint16Array(Br+1),E=new Uint16Array(Br+1);let k=null,I,B,D;for(l=0;l<=Br;l++)x[l]=0;for(u=0;u<i;u++)x[e[t+u]]++;for(h=c,d=Br;d>=1&&x[d]===0;d--);if(h>d&&(h=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(f=1;f<d&&x[f]===0;f++);for(h<f&&(h=f),m=1,l=1;l<=Br;l++)if(m<<=1,m-=x[l],m<0)return-1;if(m>0&&(n===oh||d!==1))return-1;for(E[1]=0,l=1;l<Br;l++)E[l+1]=E[l]+x[l];for(u=0;u<i;u++)e[t+u]!==0&&(a[E[e[t+u]]++]=u);if(n===oh?(U=k=a,b=20):n===gl?(U=Y1,k=j1,b=257):(U=Z1,k=K1,b=0),M=0,u=0,l=f,T=s,g=h,_=0,P=-1,p=1<<h,C=p-1,n===gl&&p>sh||n===lh&&p>ah)return 1;for(;;){I=l-_,a[u]+1<b?(B=0,D=a[u]):a[u]>=b?(B=k[a[u]-b],D=U[a[u]-b]):(B=96,D=0),v=1<<l-_,y=1<<g,f=y;do y-=v,r[T+(M>>_)+y]=I<<24|B<<16|D|0;while(y!==0);for(v=1<<l-1;M&v;)v>>=1;if(v!==0?(M&=v-1,M+=v):M=0,u++,--x[l]===0){if(l===d)break;l=e[t+a[u]]}if(l>h&&(M&C)!==P){for(_===0&&(_=h),T+=f,g=l-_,m=1<<g;g+_<d&&(m-=x[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===gl&&p>sh||n===lh&&p>ah)return 1;P=M&C,r[P]=h<<24|g<<16|T-s|0}}return M!==0&&(r[T+M]=l-_<<24|64<<16|0),o.bits=h,0};var As=J1;const Q1=0,rd=1,sd=2,{Z_FINISH:ch,Z_BLOCK:ey,Z_TREES:Ca,Z_OK:mr,Z_STREAM_END:ty,Z_NEED_DICT:ny,Z_STREAM_ERROR:vn,Z_DATA_ERROR:ad,Z_MEM_ERROR:od,Z_BUF_ERROR:iy,Z_DEFLATED:uh}=js,xo=16180,hh=16181,fh=16182,dh=16183,ph=16184,mh=16185,gh=16186,_h=16187,vh=16188,xh=16189,eo=16190,ni=16191,_l=16192,yh=16193,vl=16194,Sh=16195,wh=16196,Mh=16197,bh=16198,Ra=16199,Pa=16200,Eh=16201,Th=16202,Ah=16203,Ch=16204,Rh=16205,xl=16206,Ph=16207,Lh=16208,_t=16209,ld=16210,cd=16211,ry=852,sy=592,ay=15,oy=ay,Dh=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function ly(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const vr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<xo||e.mode>cd?1:0},ud=n=>{if(vr(n))return vn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=xo,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(ry),e.distcode=e.distdyn=new Int32Array(sy),e.sane=1,e.back=-1,mr},hd=n=>{if(vr(n))return vn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,ud(n)},fd=(n,e)=>{let t;if(vr(n))return vn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?vn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,hd(n))},dd=(n,e)=>{if(!n)return vn;const t=new ly;n.state=t,t.strm=n,t.window=null,t.mode=xo;const i=fd(n,e);return i!==mr&&(n.state=null),i},cy=n=>dd(n,oy);let Ih=!0,yl,Sl;const uy=n=>{if(Ih){yl=new Int32Array(512),Sl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(As(rd,n.lens,0,288,yl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;As(sd,n.lens,0,32,Sl,0,n.work,{bits:5}),Ih=!1}n.lencode=yl,n.lenbits=9,n.distcode=Sl,n.distbits=5},pd=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.window=new Uint8Array(1<<s.wbits)),s.wsize===0&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},hy=(n,e)=>{let t,i,r,s,a,o,c,l,u,f,d,h,g,_,m=0,p,M,v,y,P,C,T,U;const b=new Uint8Array(4);let x,E;const k=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(vr(n)||!n.output||!n.input&&n.avail_in!==0)return vn;t=n.state,t.mode===ni&&(t.mode=_l),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,f=o,d=c,U=mr;e:for(;;)switch(t.mode){case xo:if(t.wrap===0){t.mode=_l;break}for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,b[0]=l&255,b[1]=l>>>8&255,t.check=It(t.check,b,2,0),l=0,u=0,t.mode=hh;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=_t;break}if((l&15)!==uh){n.msg="unknown compression method",t.mode=_t;break}if(l>>>=4,u-=4,T=(l&15)+8,t.wbits===0&&(t.wbits=T),T>15||T>t.wbits){n.msg="invalid window size",t.mode=_t;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?xh:ni,l=0,u=0;break;case hh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==uh){n.msg="unknown compression method",t.mode=_t;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=_t;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=It(t.check,b,2,0)),l=0,u=0,t.mode=fh;case fh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,b[2]=l>>>16&255,b[3]=l>>>24&255,t.check=It(t.check,b,4,0)),l=0,u=0,t.mode=dh;case dh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=It(t.check,b,2,0)),l=0,u=0,t.mode=ph;case ph:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=It(t.check,b,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=mh;case mh:if(t.flags&1024&&(h=t.length,h>o&&(h=o),h&&(t.head&&(T=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+h),T)),t.flags&512&&t.wrap&4&&(t.check=It(t.check,i,h,s)),o-=h,s+=h,t.length-=h),t.length))break e;t.length=0,t.mode=gh;case gh:if(t.flags&2048){if(o===0)break e;h=0;do T=i[s+h++],t.head&&T&&t.length<65536&&(t.head.name+=String.fromCharCode(T));while(T&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=It(t.check,i,h,s)),o-=h,s+=h,T)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=_h;case _h:if(t.flags&4096){if(o===0)break e;h=0;do T=i[s+h++],t.head&&T&&t.length<65536&&(t.head.comment+=String.fromCharCode(T));while(T&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=It(t.check,i,h,s)),o-=h,s+=h,T)break e}else t.head&&(t.head.comment=null);t.mode=vh;case vh:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=_t;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ni;break;case xh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}n.adler=t.check=Dh(l),l=0,u=0,t.mode=eo;case eo:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,ny;n.adler=t.check=1,t.mode=ni;case ni:if(e===ey||e===Ca)break e;case _l:if(t.last){l>>>=u&7,u-=u&7,t.mode=xl;break}for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=yh;break;case 1:if(uy(t),t.mode=Ra,e===Ca){l>>>=2,u-=2;break e}break;case 2:t.mode=wh;break;case 3:n.msg="invalid block type",t.mode=_t}l>>>=2,u-=2;break;case yh:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=_t;break}if(t.length=l&65535,l=0,u=0,t.mode=vl,e===Ca)break e;case vl:t.mode=Sh;case Sh:if(h=t.length,h){if(h>o&&(h=o),h>c&&(h=c),h===0)break e;r.set(i.subarray(s,s+h),a),o-=h,s+=h,c-=h,a+=h,t.length-=h;break}t.mode=ni;break;case wh:for(;u<14;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=_t;break}t.have=0,t.mode=Mh;case Mh:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.lens[k[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[k[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,x={bits:t.lenbits},U=As(Q1,t.lens,0,19,t.lencode,0,t.work,x),t.lenbits=x.bits,U){n.msg="invalid code lengths set",t.mode=_t;break}t.have=0,t.mode=bh;case bh:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,M=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(v<16)l>>>=p,u-=p,t.lens[t.have++]=v;else{if(v===16){for(E=p+2;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=_t;break}T=t.lens[t.have-1],h=3+(l&3),l>>>=2,u-=2}else if(v===17){for(E=p+3;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,T=0,h=3+(l&7),l>>>=3,u-=3}else{for(E=p+7;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,T=0,h=11+(l&127),l>>>=7,u-=7}if(t.have+h>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=_t;break}for(;h--;)t.lens[t.have++]=T}}if(t.mode===_t)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=_t;break}if(t.lenbits=9,x={bits:t.lenbits},U=As(rd,t.lens,0,t.nlen,t.lencode,0,t.work,x),t.lenbits=x.bits,U){n.msg="invalid literal/lengths set",t.mode=_t;break}if(t.distbits=6,t.distcode=t.distdyn,x={bits:t.distbits},U=As(sd,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,x),t.distbits=x.bits,U){n.msg="invalid distances set",t.mode=_t;break}if(t.mode=Ra,e===Ca)break e;case Ra:t.mode=Pa;case Pa:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,$1(n,d),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===ni&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,M=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(M&&!(M&240)){for(y=p,P=M,C=v;m=t.lencode[C+((l&(1<<y+P)-1)>>y)],p=m>>>24,M=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,t.length=v,M===0){t.mode=Rh;break}if(M&32){t.back=-1,t.mode=ni;break}if(M&64){n.msg="invalid literal/length code",t.mode=_t;break}t.extra=M&15,t.mode=Eh;case Eh:if(t.extra){for(E=t.extra;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Th;case Th:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,M=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(!(M&240)){for(y=p,P=M,C=v;m=t.distcode[C+((l&(1<<y+P)-1)>>y)],p=m>>>24,M=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,M&64){n.msg="invalid distance code",t.mode=_t;break}t.offset=v,t.extra=M&15,t.mode=Ah;case Ah:if(t.extra){for(E=t.extra;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=_t;break}t.mode=Ch;case Ch:if(c===0)break e;if(h=d-c,t.offset>h){if(h=t.offset-h,h>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=_t;break}h>t.wnext?(h-=t.wnext,g=t.wsize-h):g=t.wnext-h,h>t.length&&(h=t.length),_=t.window}else _=r,g=a-t.offset,h=t.length;h>c&&(h=c),c-=h,t.length-=h;do r[a++]=_[g++];while(--h);t.length===0&&(t.mode=Pa);break;case Rh:if(c===0)break e;r[a++]=t.length,c--,t.mode=Pa;break;case xl:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[s++]<<u,u+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?It(t.check,r,d,a-d):Ns(t.check,r,d,a-d)),d=c,t.wrap&4&&(t.flags?l:Dh(l))!==t.check){n.msg="incorrect data check",t.mode=_t;break}l=0,u=0}t.mode=Ph;case Ph:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=_t;break}l=0,u=0}t.mode=Lh;case Lh:U=ty;break e;case _t:U=ad;break e;case ld:return od;case cd:default:return vn}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<_t&&(t.mode<xl||e!==ch))&&pd(n,n.output,n.next_out,d-n.avail_out),f-=n.avail_in,d-=n.avail_out,n.total_in+=f,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?It(t.check,r,d,n.next_out-d):Ns(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ni?128:0)+(t.mode===Ra||t.mode===vl?256:0),(f===0&&d===0||e===ch)&&U===mr&&(U=iy),U},fy=n=>{if(vr(n))return vn;let e=n.state;return e.window&&(e.window=null),n.state=null,mr},dy=(n,e)=>{if(vr(n))return vn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,mr):vn},py=(n,e)=>{const t=e.length;let i,r,s;return vr(n)||(i=n.state,i.wrap!==0&&i.mode!==eo)?vn:i.mode===eo&&(r=1,r=Ns(r,e,t,0),r!==i.check)?ad:(s=pd(n,e,t,t),s?(i.mode=ld,od):(i.havedict=1,mr))};var my=hd,gy=fd,_y=ud,vy=cy,xy=dd,yy=hy,Sy=fy,wy=dy,My=py,by="pako inflate (from Nodeca project)",Fn={inflateReset:my,inflateReset2:gy,inflateResetKeep:_y,inflateInit:vy,inflateInit2:xy,inflate:yy,inflateEnd:Sy,inflateGetHeader:wy,inflateSetDictionary:My,inflateInfo:by};function Ey(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Ty=Ey;const md=Object.prototype.toString,{Z_NO_FLUSH:Ay,Z_FINISH:Uh,Z_OK:Zr,Z_STREAM_END:wl,Z_NEED_DICT:Ml,Z_STREAM_ERROR:Cy,Z_DATA_ERROR:Nh,Z_MEM_ERROR:Ry,Z_BUF_ERROR:kh}=js,Py={chunkSize:1024*64,windowBits:15,to:""};function Js(n){this.options=vo.assign({},Py,n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new nd,this.strm.avail_out=0;let t=Fn.inflateInit2(this.strm,e.windowBits);if(t!==Zr)throw new Error(fr[t]);if(this.header=new Ty,Fn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Fs.string2buf(e.dictionary):md.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=Fn.inflateSetDictionary(this.strm,e.dictionary),t!==Zr)))throw new Error(fr[t])}Js.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Uh:Ay,md.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=Fn.inflate(t,a),s===Ml&&r&&(s=Fn.inflateSetDictionary(t,r),s===Zr?s=Fn.inflate(t,a):s===Nh&&(s=Ml));t.avail_in>0&&s===wl&&t.state.wrap&2&&t.state.flags!==0&&t.input[t.next_in]!==0;)Fn.inflateReset(t),s=Fn.inflate(t,a);switch(s){case Cy:case Nh:case Ml:case Ry:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===wl||a>0))if(this.options.to==="string"){let c=Fs.utf8border(t.output,t.next_out),l=t.next_out-c,u=Fs.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out)),t.avail_out=0,t.next_out=0;if(!((s===Zr||s===kh)&&o===0)){if(s===wl)return s=Fn.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0){if(a===Uh)return s=Fn.inflateEnd(this.strm),this.onEnd(s===Zr?kh:s),this.ended=!0,!1;break}}}return!0};Js.prototype.onData=function(n){this.chunks.push(n)};Js.prototype.onEnd=function(n){n===Zr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=vo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function fc(n,e){const t=new Js(e);if(t.push(n,!0),t.err)throw t.msg||fr[t.err];return t.result}function Ly(n,e){return e=e||{},e.raw=!0,fc(n,e)}var Dy=Js,Iy=fc,Uy=Ly,Ny=fc,ky={Inflate:Dy,inflate:Iy,inflateRaw:Uy,ungzip:Ny};const{Deflate:Fy,deflate:Oy,deflateRaw:By,gzip:zy}=X1,{Inflate:Hy,inflate:Gy,inflateRaw:Vy,ungzip:Wy}=ky;var Xy=Fy,qy=Oy,$y=By,Yy=zy,jy=Hy,Zy=Gy,Ky=Vy,Jy=Wy,Qy=js,bl={Deflate:Xy,deflate:qy,deflateRaw:$y,gzip:Yy,Inflate:jy,inflate:Zy,inflateRaw:Ky,ungzip:Jy,constants:Qy},_e;(function(n){n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.ByteArray=7]="ByteArray",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.IntArray=11]="IntArray",n[n.LongArray=12]="LongArray"})(_e||(_e={}));const Rs=class Rs{static register(e,t){const i=t.create().getId();if(i!==e)throw new Error(`Registered factory ${_e[i]} does not match type ${_e[e]}`);Rs.FACTORIES.set(e,t)}isEnd(){return this.getId()===_e.End}isByte(){return this.getId()===_e.Byte}isShort(){return this.getId()===_e.Short}isInt(){return this.getId()===_e.Int}isLong(){return this.getId()===_e.Long}isFloat(){return this.getId()===_e.Float}isDouble(){return this.getId()===_e.Double}isByteArray(){return this.getId()===_e.ByteArray}isString(){return this.getId()===_e.String}isList(){return this.getId()===_e.List}isCompound(){return this.getId()===_e.Compound}isIntArray(){return this.getId()===_e.IntArray}isLongArray(){return this.getId()===_e.LongArray}isNumber(){return this.isByte()||this.isShort()||this.isInt()||this.isLong()||this.isFloat()||this.isDouble()}isArray(){return this.isByteArray()||this.isIntArray()||this.isLongArray()}isListOrArray(){return this.isList()||this.isArray()}getAsNumber(){return 0}getAsString(){return""}toJsonWithId(){return{type:this.getId(),value:this.toJson()}}static getFactory(e){const t=this.FACTORIES.get(e);if(!t)throw new Error(`Invalid tag id ${e}`);return t}static create(e){return this.getFactory(e).create()}static fromString(e){const t=typeof e=="string"?new $t(e):e;return this.getFactory(_e.Compound).fromString(t)}static fromJson(e,t=_e.Compound){return this.getFactory(t).fromJson(e)}static fromJsonWithId(e){const t=se.readObject(e)??{},i=se.readInt(t.type)??0;return Rs.fromJson(t.value??{},i)}static fromBytes(e,t=_e.Compound){return this.getFactory(t).fromBytes(e)}};L(Rs,"FACTORIES",new Map);let ot=Rs;const ri=class ri extends ot{constructor(t){super();L(this,"value");this.value=typeof t=="number"?t:t?1:0}getId(){return _e.Byte}equals(t){return t.isByte()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"b"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeByte(this.value)}static create(){return ri.ZERO}static fromJson(t){return new ri(se.readInt(t)??0)}static fromBytes(t){const i=t.readByte();return new ri(i)}};L(ri,"ZERO",new ri(0)),L(ri,"ONE",new ri(1));let Ni=ri;ot.register(_e.Byte,Ni);class Qs extends ot{constructor(t){super();L(this,"items");this.items=t}getItems(){return this.items.slice(0)}getAsTuple(t,i){return[...Array(t)].map((r,s)=>i(this.items[s]))}get(t){if(t=Math.floor(t),!(t<0||t>=this.items.length))return this.items[t]}get length(){return this.items.length}map(t){return this.items.map(t)}filter(t){return this.items.filter(t)}forEach(t){this.items.forEach(t)}set(t,i){this.items[t]=i}add(t){this.items.push(t)}insert(t,i){this.items.splice(t,0,i)}delete(t){this.items.splice(t,1)}clear(){this.items=[]}}class ki extends Qs{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new Ni(t):t))}getId(){return _e.ByteArray}equals(e){return e.isByteArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return _e.Byte}toString(){return"[B;"+this.items.map(t=>t.getAsNumber().toFixed()+"B").join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length),e.writeBytes(this.items.map(t=>t.getAsNumber()))}static create(){return new ki([])}static fromJson(e){const t=se.readArray(e,i=>se.readNumber(i)??0)??[];return new ki(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative ByteArray length ${t}`);const i=e.readBytes(t);return new ki(i)}}ot.register(_e.ByteArray,ki);class lr extends ot{constructor(t){super();L(this,"value");this.value=t}getId(){return _e.Float}equals(t){return t.isFloat()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toString()+"f"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeFloat(this.value)}static create(){return new lr(0)}static fromJson(t){return new lr(se.readNumber(t)??0)}static fromBytes(t){const i=t.readFloat();return new lr(i)}}ot.register(_e.Float,lr);class _n extends ot{constructor(t){super();L(this,"value");this.value=t}getId(){return _e.Int}equals(t){return t.isInt()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeInt(this.value)}static create(){return new _n(0)}static fromJson(t){return new _n(se.readInt(t)??0)}static fromBytes(t){const i=t.readInt();return new _n(i)}}ot.register(_e.Int,_n);class Fi extends Qs{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new _n(t):t))}getId(){return _e.IntArray}equals(e){return e.isIntArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return _e.Int}get length(){return this.items.length}toString(){return"[I;"+this.items.map(t=>t.getAsNumber().toFixed()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items)e.writeInt(t.getAsNumber())}static create(){return new Fi}static fromJson(e){const t=se.readArray(e,i=>se.readNumber(i)??0)??[];return new Fi(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative IntArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push(e.readInt());return new Fi(i)}}ot.register(_e.IntArray,Fi);class jt extends Qs{constructor(t,i){super(t??[]);L(this,"type");this.type=this.items.length===0?_e.End:i??this.items[0].getId()}static make(t,i){return new jt(i.map(r=>new t(r)))}getId(){return _e.List}equals(t){return t.isList()&&this.type===t.type&&this.length===t.length&&this.items.every((i,r)=>i.equals(t.items[r]))}getType(){return this.type}getNumber(t){const i=this.get(t);return i!=null&&i.isNumber()?i.getAsNumber():0}getString(t){const i=this.get(t);return i!=null&&i.isString()?i.getAsString():""}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&r.getType()===i?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:At.create()}set(t,i){this.updateType(i),super.set(t,i)}add(t){this.updateType(t),super.add(t)}insert(t,i){this.updateType(i),super.insert(t,i)}updateType(t){if(t.getId()!==_e.End){if(this.type===_e.End)this.type=t.getId();else if(this.type!==t.getId())throw new Error(`Trying to add tag of type ${_e[t.getId()]} to list of ${_e[this.type]}`)}}clear(){super.clear(),this.type=_e.End}toString(){return"["+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(t="  ",i=0){if(this.length===0)return"[]";const r=t.repeat(i),s=t.repeat(i+1);return`[
`+this.map(a=>s+a.toPrettyString(t,i+1)).join(`,
`)+`
`+r+"]"}toSimplifiedJson(){return this.map(t=>t.toSimplifiedJson())}toJson(){return{type:this.type,items:this.items.map(t=>t.toJson())}}toBytes(t){this.items.length===0?this.type=_e.End:this.type=this.items[0].getId(),t.writeByte(this.type),t.writeInt(this.items.length);for(const i of this.items)i.toBytes(t)}static create(){return new jt}static fromJson(t){const i=se.readObject(t)??{},r=se.readNumber(i.type)??_e.Compound,s=(se.readArray(i.items)??[]).flatMap(a=>a!==void 0?[ot.fromJson(a,r)]:[]);return new jt(s,r)}static fromBytes(t){const i=t.readByte(),r=t.readInt();if(r<0)throw new Error(`Negative List length ${r}`);if(i===_e.End&&r>0)throw new Error(`Missing type on ListTag but length is ${r}`);const s=[];for(let a=0;a<r;a+=1)s.push(ot.fromBytes(t,i));return new jt(s,i)}}ot.register(_e.List,jt);const Tt=class Tt extends ot{constructor(t){super();L(this,"value");this.value=Tt.toPair(t)}static toPair(t){return Array.isArray(t)?t:Tt.bigintToPair(t)}static bigintToPair(t){return Tt.dataview.setBigInt64(0,t),[Tt.dataview.getInt32(0),Tt.dataview.getInt32(4)]}static pairToBigint(t){return Tt.dataview.setInt32(0,Number(t[0])),Tt.dataview.setInt32(4,Number(t[1])),Tt.dataview.getBigInt64(0)}static pairToString(t){return Tt.pairToBigint(t).toString()}static pairToNumber(t){return Number(Tt.pairToBigint(t))}getId(){return _e.Long}equals(t){return t.isLong()&&this.value[0]===t.value[0]&&this.value[1]===t.value[1]}getAsNumber(){return Tt.pairToNumber(this.value)}getAsPair(){return this.value}toBigInt(){return Tt.pairToBigint(this.value)}toString(){return Tt.pairToString(this.value)+"L"}toPrettyString(){return this.toString()}toSimplifiedJson(){return Tt.pairToNumber(this.value)}toJson(){return this.value}toBytes(t){t.writeInt(this.value[0]),t.writeInt(this.value[1])}static create(){return new Tt([0,0])}static fromJson(t){return new Tt(Array.isArray(t)&&t.length===2?t.map(i=>typeof i=="number"?i:0):[0,0])}static fromBytes(t){const i=t.readInt(),r=t.readInt();return new Tt([i,r])}};L(Tt,"dataview",new DataView(new Uint8Array(8).buffer));let rs=Tt;ot.register(_e.Long,rs);class Oi extends Qs{constructor(e){super(Array.from(e??[],t=>typeof t=="bigint"||Array.isArray(t)?new rs(t):t))}getId(){return _e.LongArray}equals(e){return e.isLongArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return _e.Long}get length(){return this.items.length}toString(){return"[L;"+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsPair())}toJson(){return this.items.map(e=>e.getAsPair())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items){const[i,r]=t.getAsPair();e.writeInt(i),e.writeInt(r)}}static create(){return new Oi}static fromJson(e){const t=se.readArray(e,i=>se.readPair(i,r=>se.readNumber(r)??0)??[0,0])??[];return new Oi(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative LongArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push([e.readInt(),e.readInt()]);return new Oi(i)}}ot.register(_e.LongArray,Oi);class cr extends ot{constructor(t){super();L(this,"value");this.value=t}getId(){return _e.Short}equals(t){return t.isShort()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"s"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeShort(this.value)}static create(){return new cr(0)}static fromJson(t){return new cr(typeof t=="number"?Math.floor(t):0)}static fromBytes(t){const i=t.readShort();return new cr(i)}}ot.register(_e.Short,cr);const tr=class tr extends ot{constructor(t){super();L(this,"value");this.value=t}getId(){return _e.String}equals(t){return t.isString()&&this.value===t.value}getAsString(){return this.value}toString(){return'"'+this.value.replace(/(\\|")/g,"\\$1")+'"'}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeString(this.value)}static create(){return tr.EMPTY}static fromJson(t){return new tr(typeof t=="string"?t:"")}static fromBytes(t){const i=t.readString();return new tr(i)}};L(tr,"EMPTY",new tr(""));let qn=tr;ot.register(_e.String,qn);var to;(function(n){const e=new RegExp("^[-+]?(?:[0-9]+[.]|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?$","i"),t=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?d$","i"),i=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?f$","i"),r=new RegExp("^[-+]?(?:0|[1-9][0-9]*)b$","i"),s=new RegExp("^[-+]?(?:0|[1-9][0-9]*)l$","i"),a=new RegExp("^[-+]?(?:0|[1-9][0-9]*)s$","i"),o=new RegExp("^[-+]?(?:0|[1-9][0-9]*)$","i");function c(h){if(h.skipWhitespace(),!h.canRead())throw h.createError("Expected value");const g=h.peek();if(g==="{")return l(h);if(g==="[")if(h.canRead(3)&&!$t.isQuotedStringStart(h.peek(1))&&h.peek(2)===";"){h.expect("[",!0);const _=h.cursor,m=h.read();if(h.skip(),h.skipWhitespace(),h.canRead()){if(m==="B")return f(h,ki,_e.ByteArray,_e.Byte);if(m==="L")return f(h,Oi,_e.LongArray,_e.Long);if(m==="I")return f(h,Fi,_e.IntArray,_e.Int);throw h.cursor=_,h.createError(`Invalid array type '${m}'`)}else throw h.createError("Expected value")}else return u(h);else{h.skipWhitespace();const _=h.cursor;if($t.isQuotedStringStart(h.peek()))return new qn(h.readQuotedString());{const m=h.readUnquotedString();if(m.length===0)throw h.cursor=_,h.createError("Expected value");try{if(i.test(m)){const p=Number(m.substring(0,m.length-1));return new lr(p)}else if(r.test(m)){const p=Number(m.substring(0,m.length-1));return new Ni(Math.floor(p))}else if(s.test(m)){const p=BigInt(m.substring(0,m.length-1));return new rs(p)}else if(a.test(m)){const p=Number(m.substring(0,m.length-1));return new cr(Math.floor(p))}else if(o.test(m)){const p=Number(m);return new _n(Math.floor(p))}else if(t.test(m)){const p=Number(m.substring(0,m.length-1));return new Bi(p)}else if(e.test(m)){const p=Number(m);return new Bi(p)}else{if(m.toLowerCase()==="true")return Ni.ONE;if(m.toLowerCase()==="false")return Ni.ZERO}}catch{}return m.length===0?qn.EMPTY:new qn(m)}}}n.readTag=c;function l(h){h.expect("{",!0);const g=new Map;for(h.skipWhitespace();h.canRead()&&h.peek()!=="}";){const _=h.cursor;if(h.skipWhitespace(),!h.canRead())throw h.createError("Expected key");const m=h.readString();if(m.length===0)throw h.cursor=_,h.createError("Expected key");h.expect(":",!0);const p=c(h);if(g.set(m,p),!d(h))break;if(!h.canRead())throw h.createError("Expected key")}return h.expect("}",!0),new At(g)}function u(h){if(h.expect("[",!0),h.skipWhitespace(),!h.canRead())throw h.createError("Expected value");const g=[];let _=_e.End;for(;h.peek()!=="]";){const m=h.cursor,p=c(h),M=p.getId();if(_===_e.End)_=M;else if(M!==_)throw h.cursor=m,h.createError(`Can't insert ${_e[M]} into list of ${_e[_]}`);if(g.push(p),!d(h))break;if(!h.canRead())throw h.createError("Expected value")}return h.expect("]",!0),new jt(g,_)}function f(h,g,_,m){const p=[];for(;h.peek()!=="]";){const M=c(h);if(M.getId()!==m)throw h.createError(`Can't insert ${_e[M.getId()]} into ${_e[_]}`);if(p.push(M.isLong()?M.getAsPair():M.getAsNumber()),!d(h))break;if(!h.canRead())throw h.createError("Expected value")}return h.expect("]"),new g(p)}function d(h){return h.skipWhitespace(),h.canRead()&&h.peek()===","?(h.skip(),h.skipWhitespace(),!0):!1}})(to||(to={}));class At extends ot{constructor(t){super();L(this,"properties");this.properties=t??new Map}getId(){return _e.Compound}equals(t){return t.isCompound()&&this.size===t.size&&[...this.properties.entries()].every(([i,r])=>{const s=t.properties.get(i);return s!==void 0&&r.equals(s)})}has(t){return this.properties.has(t)}hasNumber(t){var i;return((i=this.get(t))==null?void 0:i.isNumber())??!1}hasString(t){var i;return((i=this.get(t))==null?void 0:i.isString())??!1}hasList(t,i,r){const s=this.get(t);return((s==null?void 0:s.isList())&&(i===void 0||s.getType()===i)&&(r===void 0||s.length===r))??!1}hasCompound(t){var i;return((i=this.get(t))==null?void 0:i.isCompound())??!1}get(t){return this.properties.get(t)}getString(t){var i;return((i=this.get(t))==null?void 0:i.getAsString())??""}getNumber(t){var i;return((i=this.get(t))==null?void 0:i.getAsNumber())??0}getBoolean(t){return this.getNumber(t)!==0}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&(i===void 0||r.getType()===i)?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:At.create()}getByteArray(t){const i=this.get(t);return i!=null&&i.isByteArray()?i:ki.create()}getIntArray(t){const i=this.get(t);return i!=null&&i.isIntArray()?i:Fi.create()}getLongArray(t){const i=this.get(t);return i!=null&&i.isLongArray()?i:Oi.create()}keys(){return this.properties.keys()}get size(){return this.properties.size}map(t){return Object.fromEntries([...this.properties.entries()].map(([i,r])=>t(i,r,this)))}forEach(t){[...this.properties.entries()].forEach(([i,r])=>t(i,r,this))}set(t,i){return this.properties.set(t,i),this}delete(t){return this.properties.delete(t)}clear(){return this.properties.clear(),this}toString(){const t=[];for(const[i,r]of this.properties.entries()){const s=i.split("").some(a=>!$t.isAllowedInUnquotedString(a));t.push((s?JSON.stringify(i):i)+":"+r.toString())}return"{"+t.join(",")+"}"}toPrettyString(t="  ",i=0){if(this.size===0)return"{}";const r=t.repeat(i),s=t.repeat(i+1),a=[];for(const[o,c]of this.properties.entries()){const l=o.split("").some(u=>!$t.isAllowedInUnquotedString(u));a.push((l?JSON.stringify(o):o)+": "+c.toPrettyString(t,i+1))}return`{
`+a.map(o=>s+o).join(`,
`)+`
`+r+"}"}toSimplifiedJson(){return this.map((t,i)=>[t,i.toSimplifiedJson()])}toJson(){return this.map((t,i)=>[t,{type:i.getId(),value:i.toJson()}])}toBytes(t){for(const[i,r]of this.properties.entries()){const s=r.getId();t.writeByte(s),t.writeString(i),r.toBytes(t)}t.writeByte(_e.End)}static create(){return new At}static fromString(t){return to.readTag(t)}static fromJson(t){const i=se.readMap(t,r=>{const{type:s,value:a}=se.readObject(r)??{},o=se.readNumber(s);return ot.fromJson(a??{},o)});return new At(new Map(Object.entries(i)))}static fromBytes(t){const i=new Map;for(;;){const r=t.readByte();if(r===_e.End)break;const s=t.readString(),a=ot.fromBytes(t,r);i.set(s,a)}return new At(i)}}ot.register(_e.Compound,At);const Nn=class Nn{constructor(e,t,i,r,s){L(this,"name");L(this,"root");L(this,"compression");L(this,"littleEndian");L(this,"bedrockHeader");this.name=e,this.root=t,this.compression=i,this.littleEndian=r,this.bedrockHeader=s}writeNamedTag(e){e.writeByte(_e.Compound),e.writeString(this.name),this.root.toBytes(e)}write(){const e=this.littleEndian===!0||this.bedrockHeader!==void 0,t=new Uf({littleEndian:e,offset:this.bedrockHeader!==void 0?8:0});if(this.writeNamedTag(t),this.bedrockHeader!==void 0){const r=t.offset;t.offset=0,t.writeInt(this.bedrockHeader),t.writeInt(r-8),t.offset=r}const i=t.getData();return this.compression==="gzip"?bl.gzip(i):this.compression==="zlib"?bl.deflate(i):i}static readNamedTag(e){if(e.readByte()!==_e.Compound)throw new Error("Top tag should be a compound");return{name:e.readString(),root:At.fromBytes(e)}}static create(e={}){const t=e.name??Nn.DEFAULT_NAME,i=At.create(),r=e.compression??"none",s=e.bedrockHeader===!0?Nn.DEFAULT_BEDROCK_HEADER:typeof e.bedrockHeader=="number"?e.bedrockHeader:void 0,a=e.littleEndian??s!==void 0;return new Nn(t,i,r,a,s)}static read(e,t={}){const i=typeof t.bedrockHeader=="number"?t.bedrockHeader:t.bedrockHeader?ex(e):void 0,r=t.compression==="gzip"||!i&&t.compression===void 0&&Jv(e),s=t.compression==="zlib"||!i&&t.compression===void 0&&Qv(e),a=s||r?bl.inflate(e):e,o=t.littleEndian||i!==void 0,c=r?"gzip":s?"zlib":"none",l=new If(a,{littleEndian:o,offset:i!==void 0?8:0}),{name:u,root:f}=Nn.readNamedTag(l);return new Nn(t.name??u,f,c,o,i)}toJson(){return{name:this.name,root:this.root.toJson(),compression:this.compression,littleEndian:this.littleEndian,bedrockHeader:this.bedrockHeader??null}}static fromJson(e){const t=se.readObject(e)??{},i=se.readString(t.name)??"",r=At.fromJson(t.root??{}),s=se.readString(t.compression)??"none",a=se.readBoolean(t.littleEndian)??!1,o=se.readNumber(t.bedrockHeader);return new Nn(i,r,s,a,o)}};L(Nn,"DEFAULT_NAME",""),L(Nn,"DEFAULT_BEDROCK_HEADER",4);let $n=Nn;class li{constructor(e,t,i,r,s){L(this,"x");L(this,"z");L(this,"compression");L(this,"timestamp");L(this,"raw");L(this,"file");L(this,"dirty");this.x=e,this.z=t,this.compression=i,this.timestamp=r,this.raw=s,this.dirty=!1}getCompression(){switch(this.compression){case 1:return"gzip";case 2:return"zlib";case 3:return"none";default:throw new Error(`Invalid compression mode ${this.compression}`)}}setCompression(e){switch(e){case"gzip":this.compression=1;break;case"zlib":this.compression=2;break;case"none":this.compression=3;break;default:throw new Error(`Invalid compression mode ${e}`)}}getFile(){return this.file===void 0&&(this.file=$n.read(this.raw,{compression:this.getCompression()})),this.file}getRoot(){return this.getFile().root}setRoot(e){this.file===void 0&&(this.file=$n.create({compression:this.getCompression()})),this.file.root=e,this.markDirty()}markDirty(){this.dirty=!0}getRaw(){if(this.file===void 0||this.dirty===!1)return this.raw;this.file.compression=this.getCompression();const e=this.file.write();return this.raw=e,this.dirty=!1,e}toJson(){return{x:this.x,z:this.z,compression:this.compression,timestamp:this.timestamp,size:this.raw.byteLength}}toRef(e){return new li.Ref(this.x,this.z,this.compression,this.timestamp,this.raw.byteLength,e)}static create(e,t,i,r){const s=new li(e,t,0,r??0,i.write());return s.setCompression(i.compression),s}static fromJson(e,t){const i=se.readObject(e)??{},r=se.readInt(i.x)??0,s=se.readInt(i.z)??0,a=se.readNumber(i.compression)??2,o=se.readInt(i.timestamp)??0,c=se.readInt(i.size)??0;return new li.Ref(r,s,a,o,c,t)}}(function(n){class e{constructor(i,r,s,a,o,c){L(this,"x");L(this,"z");L(this,"compression");L(this,"timestamp");L(this,"size");L(this,"resolver");L(this,"file");this.x=i,this.z=r,this.compression=s,this.timestamp=a,this.size=o,this.resolver=c}getFile(){if(this.file instanceof $n)return this.file}getRoot(){if(this.file instanceof $n)return this.file.root}async getFileAsync(){return this.file?this.file:(this.file=(async()=>{const i=await this.resolver(this.x,this.z);return this.file=i,i})(),this.file)}async getRootAsync(){return(await this.getFileAsync()).root}isResolved(){return this.file instanceof $n}}n.Ref=e})(li||(li={}));class gd{constructor(e){L(this,"chunks");this.chunks=Array(32*32).fill(void 0);for(const t of e){const i=Gi.getIndex(t.x,t.z);this.chunks[i]=t}}getChunkPositions(){return this.chunks.flatMap(e=>e?[[e.x,e.z]]:[])}getChunk(e){if(!(e<0||e>=32*32))return this.chunks[e]}findChunk(e,t){return this.getChunk(Gi.getIndex(e,t))}getFirstChunk(){return this.chunks.filter(e=>e!==void 0)[0]}filter(e){return this.chunks.filter(t=>t!==void 0&&e(t))}map(e){return this.chunks.flatMap(t=>t!==void 0?[e(t)]:[])}}class Gi extends gd{constructor(e){super(e)}write(){let e=0;for(const s of this.chunks)s!==void 0&&(e+=Math.ceil(s.getRaw().length/4096));const t=new Uint8Array(8192+e*4096),i=new DataView(t.buffer);let r=2;for(const s of this.chunks){if(s===void 0)continue;const a=s.getRaw(),o=4*((s.x&31)+(s.z&31)*32),c=Math.ceil(a.length/4096);i.setInt8(o,r>>16),i.setInt16(o+1,r&65535),i.setInt8(o+3,c),i.setInt32(o+4096,s.timestamp);const l=r*4096;i.setInt32(l,a.length+1),i.setInt8(l+4,s.compression),t.set(a,l+5),r+=c}return t}static read(e){const t=[];for(let i=0;i<32;i+=1)for(let r=0;r<32;r+=1){const s=4*((i&31)+(r&31)*32);if(e[s+3]===0)continue;const o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],c=(e[s+4096]<<24)+(e[s+4097]<<16)+(e[s+4098]<<8)+e[s+4099],l=o*4096,u=(e[l]<<24)+(e[l+1]<<16)+(e[l+2]<<8)+e[l+3],f=e[l+4],d=e.slice(l+5,l+4+u);t.push(new li(i,r,f,c,d))}return new Gi(t)}static getIndex(e,t){return(e&31)+(t&31)*32}toJson(){return{chunks:this.map(e=>e.toJson())}}static fromJson(e,t){const i=se.readObject(e)??{},s=(se.readArray(i.chunks)??[]).flatMap(a=>a!==void 0?[li.fromJson(a,t)]:[]);return new Gi.Ref(s)}}(function(n){class e extends gd{}n.Ref=e})(Gi||(Gi={}));class Bi extends ot{constructor(t){super();L(this,"value");this.value=t}getId(){return _e.Double}equals(t){return t.isDouble()&&this.value===t.value}getAsNumber(){return this.value}toString(){return Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeDouble(this.value)}static create(){return new Bi(0)}static fromJson(t){return new Bi(se.readNumber(t)??0)}static fromBytes(t){const i=t.readDouble();return new Bi(i)}}ot.register(_e.Double,Bi);const nr=class nr extends ot{constructor(){super()}getId(){return _e.End}equals(e){return e.isEnd()}toString(){return"END"}toPrettyString(){return this.toString()}toSimplifiedJson(){return null}toJson(){return null}toBytes(){}static create(){return nr.INSTANCE}static fromJson(){return nr.INSTANCE}static fromBytes(){return nr.INSTANCE}};L(nr,"INSTANCE",new nr);let no=nr;ot.register(_e.End,no);var Be;(function(n){n.UP="up",n.DOWN="down",n.NORTH="north",n.EAST="east",n.SOUTH="south",n.WEST="west"})(Be||(Be={}));const eS={[Be.UP]:[0,1,0],[Be.DOWN]:[0,-1,0],[Be.NORTH]:[0,0,-1],[Be.EAST]:[1,0,0],[Be.SOUTH]:[0,0,1],[Be.WEST]:[-1,0,0]};(function(n){n.ALL=[n.UP,n.DOWN,n.NORTH,n.EAST,n.SOUTH,n.WEST];function e(t){return eS[t]}n.normal=e})(Be||(Be={}));var Ct;(function(n){function e(f,d,h){return[f,d,h]}n.create=e,n.ZERO=n.create(0,0,0);function t(f,d,h,g){return[f[0]+d,f[1]+h,f[2]+g]}n.offset=t;function i(f,d){return[f[0]-d[0],f[1]-d[1],f[2]-d[2]]}n.subtract=i;function r(f,d){return[f[0]+d[0],f[1]+d[1],f[2]+d[2]]}n.add=r;function s(f,d){return n.offset(f,...Be.normal(d))}n.towards=s;function a(f,d){return f===d?!0:f[0]===d[0]&&f[1]===d[1]&&f[2]===d[2]}n.equals=a;function o(f){return f[0]*f[0]+f[1]*f[1]+f[2]*f[2]}n.magnitude=o;function c(f){return new jt(f.map(d=>new _n(d)))}n.toNbt=c;function l(f){return f.getAsTuple(3,d=>d!=null&&d.isInt()?d.getAsNumber():0)}n.fromNbt=l;function u(f){const d=se.readArray(f,h=>se.readInt(h)??0)??[0,0,0];return e(d[0],d[1],d[2])}n.fromJson=u})(Ct||(Ct={}));const bn=class bn{constructor(e,t){L(this,"namespace");L(this,"path");this.namespace=e,this.path=t}is(e){return this.equals(bn.parse(e))}equals(e){return this===e?!0:e instanceof bn?this.namespace===e.namespace&&this.path===e.path:!1}toString(){return this.namespace+bn.SEPARATOR+this.path}withPrefix(e){return new bn(this.namespace,e+this.path)}static create(e){return new bn(this.DEFAULT_NAMESPACE,e)}static parse(e){const t=e.indexOf(this.SEPARATOR);if(t>=0){const i=t>=1?e.substring(0,t):this.DEFAULT_NAMESPACE,r=e.substring(t+1);return new bn(i,r)}return new bn(this.DEFAULT_NAMESPACE,e)}};L(bn,"DEFAULT_NAMESPACE","minecraft"),L(bn,"SEPARATOR",":");let ie=bn;var yt;let Ri=(yt=class{constructor(e,t={}){L(this,"properties");L(this,"name");this.properties=t,this.name=typeof e=="string"?ie.parse(e):e}getName(){return this.name}getProperties(){return this.properties}getProperty(e){return this.properties[e]}isFluid(){return this.is(yt.WATER)||this.is(yt.LAVA)}isWaterlogged(){return this.is(yt.WATER)||this.is(yt.LAVA)||this.is("bubble_column")||this.is("kelp")||this.is("kelp_plant")||this.is("seagrass")||this.is("tall_seagrass")||this.properties.waterlogged==="true"}equals(e){if(!this.name.equals(e.name))return!1;const t=Object.keys(this.properties);return t.length!==Object.keys(e.properties).length?!1:t.every(i=>e.properties[i]===this.properties[i])}is(e){return typeof e=="string"?this.name.equals(ie.parse(e)):e instanceof ie?this.name.equals(e):this.name.equals(e.name)}toString(){return Object.keys(this.properties).length===0?this.name.toString():`${this.name.toString()}[${Object.entries(this.properties).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>e+"="+t).join(",")}]`}toNbt(){const e=new At().set("Name",new qn(this.name.toString())),t=Object.entries(this.properties).sort(([i],[r])=>i.localeCompare(r));return t.length>0&&e.set("Properties",new At(new Map(t.map(([i,r])=>[i,new qn(r)])))),e}static parse(e){const t=e.indexOf("[");if(t===-1)return new yt(e);{const i=e.substring(0,t),r=e.substring(t+1,e.length-1).split(","),s=Object.fromEntries(r.map(a=>a.split("=")));return new yt(i,s)}}static fromNbt(e){const t=ie.parse(e.getString("Name")),i=e.getCompound("Properties").map((r,s)=>[r,s.getAsString()]);return new yt(t,i)}static fromJson(e){const t=se.readObject(e)??{},i=ie.parse(se.readString(t.Name)??yt.STONE.name.toString()),r=se.readMap(t.Properties,s=>se.readString(s)??"");return new yt(i,r)}},L(yt,"AIR",new yt(ie.create("air"))),L(yt,"STONE",new yt(ie.create("stone"))),L(yt,"WATER",new yt(ie.create("water"),{level:"0"})),L(yt,"LAVA",new yt(ie.create("lava"),{level:"0"})),yt);const ho=class ho{constructor(e,t){L(this,"size");L(this,"defaultValue");L(this,"storage");L(this,"palette");this.size=e,this.defaultValue=t,this.storage=Array(e).fill(0),this.palette=[t]}index(e,t,i){if(!this.isLocalCoordinate(e)||!this.isLocalCoordinate(t)||!this.isLocalCoordinate(i))throw new Error(`Coordinates ${e},${t},${i} are outside paletted container bounds 0..15`);return(e<<8)+(t<<4)+i}isLocalCoordinate(e){return Number.isInteger(e)&&e>=0&&e<ho.WIDTH}get(e,t,i){const r=this.storage[this.index(e,t,i)];return this.palette[r]}set(e,t,i,r){let s=this.palette.findIndex(a=>a.equals(r));s===-1&&(s=this.palette.length,this.palette.push(r)),this.storage[this.index(e,t,i)]=s}};L(ho,"WIDTH",16);let io=ho;const wi=class wi{constructor(e){L(this,"minY");L(this,"states");this.minY=e,this.states=new io(wi.SIZE,Ri.AIR)}get minBlockY(){return this.minY<<4}getBlockState(e,t,i){return this.states.get(e,t,i)}setBlockState(e,t,i,r){this.states.set(e,t,i,r)}};L(wi,"WIDTH",16),L(wi,"SIZE",wi.WIDTH*wi.WIDTH*wi.WIDTH);let ql=wi;var $l;(function(n){function e(u,f){return[u,f]}n.create=e;function t(u){return[u[0]>>4,u[2]>>4]}n.fromBlockPos=t;function i(u){return[Number(u)&4294967295,Number(u>>BigInt(32))]}n.fromLong=i;function r(u){return s(u[0],u[1])}n.toLong=r;function s(u,f){return BigInt(u&4294967295)|BigInt(f&4294967295)<<BigInt(32)}n.asLong=s;function a(u){return u[0]<<4}n.minBlockX=a;function o(u){return u[1]<<4}n.minBlockZ=o;function c(u){return(u[0]<<4)+15}n.maxBlockX=c;function l(u){return(u[1]<<4)+15}n.maxBlockZ=l})($l||($l={}));const _d=new Map([["minecraft:speed",3402751],["minecraft:slowness",9154528],["minecraft:haste",14270531],["minecraft:mining_fatigue",4866583],["minecraft:strength",16762624],["minecraft:instant_health",16262179],["minecraft:instant_damage",11101546],["minecraft:jump_boost",16646020],["minecraft:nausea",5578058],["minecraft:regeneration",13458603],["minecraft:resistance",9520880],["minecraft:fire_resistance",16750848],["minecraft:water_breathing",10017472],["minecraft:invisibility",16185078],["minecraft:blindness",2039587],["minecraft:night_vision",12779366],["minecraft:hunger",5797459],["minecraft:weakness",4738376],["minecraft:poison",8889187],["minecraft:wither",7561558],["minecraft:health_boost",16284963],["minecraft:absorption",2445989],["minecraft:saturation",16262179],["minecraft:glowing",9740385],["minecraft:levitation",13565951],["minecraft:luck",5882118],["minecraft:unluck",12624973],["minecraft:slow_falling",15978425],["minecraft:conduit_power",1950417],["minecraft:dolphins_grace",8954814],["minecraft:bad_omen",745784],["minecraft:hero_of_the_village",4521796],["minecraft:darkness",2696993],["minecraft:trial_omen",1484454],["minecraft:raid_omen",14565464],["minecraft:wind_charged",12438015],["minecraft:weaving",7891290],["minecraft:oozing",10092451],["minecraft:infested",9214860]]);var ro;(function(n){function e(t){return{effect:ie.parse(t.getString("id")),duration:t.getNumber("duration"),amplifier:t.getNumber("amplifier")}}n.fromNbt=e})(ro||(ro={}));const vd=new Map([["minecraft:empty",[]],["minecraft:water",[]],["minecraft:mundane",[]],["minecraft:thick",[]],["minecraft:awkward",[]],["minecraft:night_vision",[{effect:ie.create("night_vision"),duration:3600,amplifier:0}]],["minecraft:long_night_vision",[{effect:ie.create("night_vision"),duration:9600,amplifier:0}]],["minecraft:invisibility",[{effect:ie.create("invisibility"),duration:3600,amplifier:0}]],["minecraft:long_invisibility",[{effect:ie.create("invisibility"),duration:9600,amplifier:0}]],["minecraft:leaping",[{effect:ie.create("jump_boost"),duration:3600,amplifier:0}]],["minecraft:long_leaping",[{effect:ie.create("jump_boost"),duration:9600,amplifier:0}]],["minecraft:strong_leaping",[{effect:ie.create("jump_boost"),duration:1800,amplifier:1}]],["minecraft:fire_resistance",[{effect:ie.create("fire_resistance"),duration:3600,amplifier:0}]],["minecraft:long_fire_resistance",[{effect:ie.create("fire_resistance"),duration:9600,amplifier:0}]],["minecraft:swiftness",[{effect:ie.create("speed"),duration:3600,amplifier:0}]],["minecraft:long_swiftness",[{effect:ie.create("speed"),duration:9600,amplifier:0}]],["minecraft:strong_swiftness",[{effect:ie.create("speed"),duration:1800,amplifier:1}]],["minecraft:slowness",[{effect:ie.create("slowness"),duration:1800,amplifier:0}]],["minecraft:long_slowness",[{effect:ie.create("slowness"),duration:4800,amplifier:0}]],["minecraft:strong_slowness",[{effect:ie.create("slowness"),duration:400,amplifier:3}]],["minecraft:turtle_master",[{effect:ie.create("slowness"),duration:400,amplifier:3},{effect:ie.create("resistance"),duration:400,amplifier:2}]],["minecraft:long_turtle_master",[{effect:ie.create("slowness"),duration:800,amplifier:3},{effect:ie.create("resistance"),duration:800,amplifier:2}]],["minecraft:strong_turtle_master",[{effect:ie.create("slowness"),duration:400,amplifier:5},{effect:ie.create("resistance"),duration:400,amplifier:3}]],["minecraft:water_breathing",[{effect:ie.create("water_breathing"),duration:3600,amplifier:0}]],["minecraft:long_water_breathing",[{effect:ie.create("water_breathing"),duration:9600,amplifier:0}]],["minecraft:healing",[{effect:ie.create("instant_health"),duration:1,amplifier:0}]],["minecraft:strong_healing",[{effect:ie.create("instant_health"),duration:1,amplifier:1}]],["minecraft:harming",[{effect:ie.create("instant_damage"),duration:1,amplifier:0}]],["minecraft:strong_harming",[{effect:ie.create("instant_damage"),duration:1,amplifier:1}]],["minecraft:poison",[{effect:ie.create("poison"),duration:900,amplifier:0}]],["minecraft:long_poison",[{effect:ie.create("poison"),duration:1800,amplifier:0}]],["minecraft:strong_poison",[{effect:ie.create("poison"),duration:432,amplifier:1}]],["minecraft:regeneration",[{effect:ie.create("regeneration"),duration:900,amplifier:0}]],["minecraft:long_regeneration",[{effect:ie.create("regeneration"),duration:1800,amplifier:0}]],["minecraft:strong_regeneration",[{effect:ie.create("regeneration"),duration:450,amplifier:1}]],["minecraft:strength",[{effect:ie.create("strength"),duration:3600,amplifier:0}]],["minecraft:long_strength",[{effect:ie.create("strength"),duration:9600,amplifier:0}]],["minecraft:strong_strength",[{effect:ie.create("strength"),duration:1800,amplifier:1}]],["minecraft:weakness",[{effect:ie.create("weakness"),duration:1800,amplifier:0}]],["minecraft:long_weakness",[{effect:ie.create("weakness"),duration:4800,amplifier:0}]],["minecraft:luck",[{effect:ie.create("luck"),duration:6e3,amplifier:0}]],["minecraft:slow_falling",[{effect:ie.create("slow_falling"),duration:1800,amplifier:0}]],["minecraft:long_slow_falling",[{effect:ie.create("slow_falling"),duration:4800,amplifier:0}]],["minecraft:wind_charged",[{effect:ie.create("wind_charged"),duration:3600,amplifier:0}]],["minecraft:weaving",[{effect:ie.create("weaving"),duration:3600,amplifier:0}]],["minecraft:oozing",[{effect:ie.create("oozing"),duration:3600,amplifier:0}]],["minecraft:infested",[{effect:ie.create("infested"),duration:3600,amplifier:0}]]]);var Os;(function(n){function e(s){const a={};return s.isString()?a.potion=ie.parse(s.getAsString()):s.isCompound()&&(s.hasString("potion")&&(a.potion=ie.parse(s.getString("potion"))),s.hasNumber("custom_color")&&(a.customColor=s.getNumber("custom_color")),s.hasList("custom_effects")&&(a.customEffects=s.getList("custom_effects",_e.Compound).map(ro.fromNbt))),a}n.fromNbt=e;function t(s){if(s.customColor)return Ze.intToRgb(s.customColor);const a=i(s);return r(a)}n.getColor=t;function i(s){const a=[];return s.potion&&a.push(...vd.get(s.potion.toString())??[]),s.customEffects&&a.push(...s.customEffects),a}n.getAllEffects=i;function r(s){let[a,o,c]=[0,0,0],l=0;for(const u of s){const f=_d.get(u.effect.toString());if(f===void 0)continue;const d=Ze.intToRgb(f),h=u.amplifier+1;a+=h*d[0],o+=h*d[1],c+=h*d[2],l+=h}return l===0?Ze.intToRgb(-13083194):(a=a/l,o=o/l,c=c/l,[a,o,c])}})(Os||(Os={}));var so;(function(n){function e(r,s){return a=>typeof a=="string"?i(r,ie.parse(a)):t(s(a))}n.parser=e;function t(r,s){return{value:()=>r,key:()=>s}}n.direct=t;function i(r,s,a=!0){return a?{value:()=>r.getOrThrow(s),key:()=>s}:{value:()=>r.get(s),key:()=>s}}n.reference=i})(so||(so={}));class ai{constructor(e,t,i=new Map){L(this,"id");L(this,"count");L(this,"components");this.id=e,this.count=t,this.components=i}getComponent(e,t){var r;if(typeof e=="string"&&(e=ie.parse(e)),this.components.has("!"+e.toString()))return;const i=this.components.get(e.toString());if(i)return i;if(t)return(r=t.getItemComponents(this.id))==null?void 0:r.get(e.toString())}hasComponent(e,t){var i;return typeof e=="string"&&(e=ie.parse(e)),this.components.has("!"+e.toString())?!1:this.components.has(e.toString())?!0:t?(i=t.getItemComponents(this.id))==null?void 0:i.has(e.toString()):!1}clone(){const e=new Map(this.components);return new ai(this.id,this.count,e)}is(e){return typeof e=="string"?this.id.equals(ie.parse(e)):e instanceof ie?this.id.equals(e):this.id.equals(e.id)}equals(e){return this===e?!0:e instanceof ai?this.count===e.count&&this.isSameItemSameComponents(e):!1}isSameItemSameComponents(e){if(!this.id.equals(e.id)||this.components.size!==e.components.size)return!1;for(const[t,i]of this.components){const r=e.components.get(t);if(i.toString()!==(r==null?void 0:r.toString()))return!1}return!0}toString(){let e=this.id.toString();return this.components.size>0&&(e+=`[${[...this.components.entries()].map(([t,i])=>t.startsWith("!")?t:`${t}=${i.toString()}`).join(",")}]`),this.count>1&&(e+=` ${this.count}`),e}static fromString(e){const t=new $t(e);t.skipWhitespace();const i=t.cursor;for(;t.canRead()&&t.peek()!=="["&&!$t.isWhitespace(t.peek());)t.skip();const r=ie.parse(t.getRead(i)),s=new Map;t.skipWhitespace(),t.canRead()&&t.peek()==="["&&ai.readComponents(t,s),t.skipWhitespace();const a=t.canRead()?t.readInt():1;if(t.skipWhitespace(),t.canRead())throw t.createError("Unexpected trailing data");return new ai(r,a,s)}static readComponents(e,t){if(e.expect("["),e.skipWhitespace(),e.canRead()&&e.peek()==="]"){e.skip();return}do{if(e.peek()==="!"){e.skip(),e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="]"&&e.peek()!==",";)e.skip();t.set("!"+ie.parse(e.getRead(i).trim()).toString(),new At)}else{e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="=";)e.skip();const r=ie.parse(e.getRead(i).trim()).toString();if(!e.canRead())break;e.skip(),e.skipWhitespace();const s=to.readTag(e);t.set(r,s)}if(e.skipWhitespace(),!e.canRead())break;if(e.peek()==="]"){e.skip();return}if(e.peek()!==",")throw new Error("Expected , or ]");e.skip()}while(e.canRead());throw new Error("Missing closing ]")}toNbt(){const e=new At().set("id",new qn(this.id.toString()));return this.count>1&&e.set("count",new _n(this.count)),this.components.size>0&&e.set("components",new At(this.components)),e}static fromNbt(e){const t=ie.parse(e.getString("id")),i=e.hasNumber("count")?e.getNumber("count"):1,r=new Map(Object.entries(e.getCompound("components").map((s,a)=>s.startsWith("!")?["!"+ie.parse(s).toString(),new At]:[ie.parse(s).toString(),a])));return new ai(t,i,r)}}const Mi=class Mi{constructor(e,t){L(this,"key");L(this,"parser");L(this,"storage",new Map);L(this,"builtin",new Map);L(this,"tags");this.key=e,this.parser=t}static createAndRegister(e,t){const i=new Mi(ie.create(e),t);return Mi.REGISTRY.register(i.key,i),i}register(e,t,i){return this.storage.set(e.toString(),t),i&&this.builtin.set(e.toString(),t),so.reference(this,e)}delete(e){const t=this.storage.delete(e.toString());return this.builtin.delete(e.toString()),t}keys(){return[...this.storage.keys()].map(e=>ie.parse(e))}has(e){return this.storage.has(e.toString())}get(e){var t=this.storage.get(e.toString());return t instanceof Function&&(t=t(),this.storage.set(e.toString(),t)),t}getOrThrow(e){const t=this.get(e);if(t===void 0)throw new Error(`Missing key in ${this.key.toString()}: ${e.toString()}`);return t}parse(e){if(!this.parser)throw new Error(`No parser exists for ${this.key.toString()}`);return this.parser(e)}clear(){this.storage.clear();for(const[e,t]of this.builtin.entries())this.storage.set(e,t);return this.tags&&this.tags.clear(),this}assign(e){if(!this.key.equals(e.key))throw new Error(`Cannot assign registry of type ${e.key.toString()} to registry of type ${this.key.toString()}`);for(const t of e.keys())this.storage.set(t.toString(),e.getOrThrow(t));return this}cloneEmpty(){return new Mi(this.key,this.parser)}forEach(e){for(const[t,i]of this.storage.entries())e(ie.parse(t),i instanceof Function?i():i,this)}map(e){return[...this.storage.entries()].map(([t,i])=>e(ie.parse(t),i instanceof Function?i():i,this))}getTagRegistry(){return this.tags===void 0&&(this.tags=new Mi(new ie(this.key.namespace,`tags/${this.key.path}`))),this.tags}};L(Mi,"REGISTRY",new Mi(ie.create("root")));let ao=Mi;var Kr;(function(n){n.NONE="none",n.CLOCKWISE_90="clockwise_90",n.CLOCKWISE_180="180",n.COUNTERCLOCKWISE_90="counterclockwise_90"})(Kr||(Kr={}));const tS=[{key:"north",offset:[0,0,-1]},{key:"east",offset:[1,0,0]},{key:"south",offset:[0,0,1]},{key:"west",offset:[-1,0,0]}],xd=new Set(["minecraft:air","minecraft:cave_air","minecraft:void_air","minecraft:water","minecraft:lava"]),nS=[/_banner$/,/_button$/,/_carpet$/,/_coral$/,/_coral_fan$/,/_door$/,/_fence$/,/_fence_gate$/,/_flower$/,/_glass_pane$/,/_hanging_sign$/,/_leaves$/,/_pressure_plate$/,/_rail$/,/_sapling$/,/_sign$/,/_slab$/,/_stairs$/,/_torch$/,/_trapdoor$/,/_wall$/,/_wall_banner$/,/_wall_hanging_sign$/,/_wall_sign$/,/_wall_torch$/,/_wool_carpet$/,/^attached_/,/^potted_/,/amethyst_cluster$/,/azalea$/,/bamboo$/,/bell$/,/big_dripleaf$/,/brewing_stand$/,/cake$/,/chain$/,/chest$/,/cocoa$/,/comparator$/,/conduit$/,/dead_bush$/,/decorated_pot$/,/end_rod$/,/fern$/,/grass$/,/grindstone$/,/kelp$/,/ladder$/,/lantern$/,/lever$/,/lightning_rod$/,/mangrove_roots$/,/mushroom$/,/pane$/,/repeater$/,/scaffolding$/,/seagrass$/,/skull$/,/soul_lantern$/,/sugar_cane$/,/turtle_egg$/,/twisting_vines$/,/vine$/,/weeping_vines$/];function dc(n){return n.includes(":")?n.split(":")[1]:n}function Yl(n){const e=dc(n);return e==="iron_bars"||e.endsWith("glass_pane")}function jl(n){const e=dc(n);return e==="nether_brick_fence"||e.endsWith("_fence")&&!e.endsWith("_fence_gate")}function iS(n){return Yl(n)||jl(n)}function Fh(n){if(!n||xd.has(n))return!1;const e=dc(n);return!nS.some(t=>t.test(e))}function rS(n,e){return!e||xd.has(e)?!1:Yl(n)?Yl(e)||Fh(e):jl(n)?jl(e)||Fh(e):!1}var Vn;let sS=(Vn=class{constructor(e,t=[],i=[]){L(this,"size");L(this,"palette");L(this,"blocks");L(this,"blocksMap",[]);L(this,"xStride");L(this,"yStride");L(this,"placedBlocksCache",null);L(this,"placedBlocksMapCache",null);L(this,"paletteIndex",new Map);this.size=e,this.palette=t,this.blocks=i,this.xStride=e[1]*e[2],this.yStride=e[2],this.palette.forEach((r,s)=>{this.paletteIndex.set(r.toString(),s)}),i.forEach(r=>{if(!this.isInside(r.pos))throw new Error(`Found block at ${r.pos} which is outside the structure bounds ${this.size}`);this.blocksMap[this.getIndex(r.pos)]=r})}getSize(){return this.size}addBlock(e,t,i,r){if(!this.isInside(e))throw new Error(`Cannot add block at ${e} outside the structure bounds ${this.size}`);const s=new Ri(t,i),a=s.toString();let o=this.paletteIndex.get(a);o===void 0&&(o=this.palette.length,this.palette.push(s),this.paletteIndex.set(a,o));const c=this.getIndex(e),l=this.blocksMap[c];if(l)l.state=o,l.nbt=r;else{const u={pos:Ct.create(e[0],e[1],e[2]),state:o,nbt:r};this.blocks.push(u),this.blocksMap[c]=u}return this.clearPlacedCaches(),this}getBlocks(){return this.ensurePlacedCaches(),this.placedBlocksCache??[]}getBlock(e){var i;return this.isInside(e)?(this.ensurePlacedCaches(),((i=this.placedBlocksMapCache)==null?void 0:i[this.getIndex(e)])??null):null}clone(){return new Vn(Ct.create(this.size[0],this.size[1],this.size[2]),this.palette.map(e=>new Ri(e.getName(),{...e.getProperties()})),this.blocks.map(e=>({pos:Ct.create(e.pos[0],e.pos[1],e.pos[2]),state:e.state,nbt:e.nbt})))}updateBlockStates(){const e=[];for(const t of this.getBlocks()){const i=t.state.getName().toString();if(!iS(i))continue;const r={...t.state.getProperties()};for(const s of tS){const a=this.getBlock(Ct.add(t.pos,s.offset)),o=(a==null?void 0:a.state.getName().toString())??"";r[s.key]=rS(i,o)?"true":"false"}r.waterlogged===void 0&&(r.waterlogged="false"),!new Ri(i,r).equals(t.state)&&e.push({pos:t.pos,name:i,properties:r,nbt:t.nbt})}for(const t of e)this.addBlock(t.pos,t.name,t.properties,t.nbt);return{updatedBlocks:e.length}}toPlacedBlock(e){const t=this.palette[e.state];if(!t)throw new Error(`Block at ${e.pos.join(" ")} in structure references invalid palette index ${e.state}`);return{pos:e.pos,state:t,nbt:e.nbt}}isInside(e){return e[0]>=0&&e[0]<this.size[0]&&e[1]>=0&&e[1]<this.size[1]&&e[2]>=0&&e[2]<this.size[2]}getIndex(e){return e[0]*this.xStride+e[1]*this.yStride+e[2]}ensurePlacedCaches(){if(!(this.placedBlocksCache&&this.placedBlocksMapCache)){this.placedBlocksCache=[],this.placedBlocksMapCache=[];for(const e of this.blocks){const t=this.toPlacedBlock(e);this.placedBlocksCache.push(t),this.placedBlocksMapCache[this.getIndex(e.pos)]=t}}}clearPlacedCaches(){this.placedBlocksCache=null,this.placedBlocksMapCache=null}toNbt(e={}){const t=e.updateBlockStates?this.clone():this;e.updateBlockStates&&t.updateBlockStates();const i=[],r=new Map,s=t.blocks.map(o=>{const c=t.toPlacedBlock(o),l=c.state.toString();let u=r.get(l);u===void 0&&(u=i.length,i.push(c.state),r.set(l,u));const f=new At().set("pos",Ct.toNbt(c.pos)).set("state",new _n(u));return c.nbt&&c.nbt.size>0&&f.set("nbt",c.nbt),f}),a=new At().set("size",Ct.toNbt(this.size)).set("palette",new jt(i.map(o=>o.toNbt()))).set("blocks",new jt(s)).set("entities",new jt);return e.dataVersion!==void 0&&a.set("DataVersion",new _n(e.dataVersion)),a}writeNbt(e={}){return new $n(e.name??"",this.toNbt(e),e.compression??"gzip",!1,void 0).write()}static fromNbt(e){const t=Ct.fromNbt(e.getList("size")),i=e.getList("palette",_e.Compound).map(s=>Ri.fromNbt(s)),r=e.getList("blocks",_e.Compound).map(s=>{const a=Ct.fromNbt(s.getList("pos")),o=s.getNumber("state"),c=s.getCompound("nbt");return{pos:a,state:o,nbt:c.size>0?c:void 0}});return new Vn(t,i,r)}static transform(e,t,i){switch(t){case Kr.COUNTERCLOCKWISE_90:return Ct.create(i[0]-i[2]+e[2],e[1],i[0]+i[2]-e[0]);case Kr.CLOCKWISE_90:return Ct.create(i[0]+i[2]-e[2],e[1],i[2]-i[0]+e[0]);case Kr.CLOCKWISE_180:return Ct.create(i[0]+i[0]-e[0],e[1],i[2]+i[2]-e[2]);default:return e}}},L(Vn,"REGISTRY",ao.createAndRegister("structures")),L(Vn,"EMPTY",new Vn(Ct.ZERO)),Vn);class We{constructor(e,t,i){L(this,"x");L(this,"y");L(this,"z");this.x=e,this.y=t,this.z=i}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}distance(e){return this.sub(e).length()}distanceSquared(e){return this.sub(e).lengthSquared()}abs(){return new We(Math.abs(this.x),Math.abs(this.y),Math.abs(this.z))}add(e){return new We(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new We(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new We(this.x*e.x,this.y*e.y,this.z*e.z)}div(e){return new We(this.x/e.x,this.y/e.y,this.z/e.z)}scale(e){return new We(this.x*e,this.y*e,this.z*e)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,r=this.x*e.y-this.y*e.x;return new We(t,i,r)}normalize(){if(this.x==0&&this.y==0&&this.z==0)return this;const e=1/this.length();return new We(this.x*e,this.y*e,this.z*e)}components(){return[this.x,this.y,this.z]}toString(){return`[${this.x} ${this.y} ${this.z}]`}}function Ai(n,e,t){return Math.max(e,Math.min(t,n))}function Zl(n){return(n&n-1)===0}function pc(n){return n-=1,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>18,n|=n>>32,n+1}var za=1e-6,gr=typeof Float32Array<"u"?Float32Array:Array,aS=Math.PI/180;function Kl(n){return n*aS}function ut(){var n=new gr(16);return gr!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function oS(n){var e=new gr(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function lS(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function cS(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function uS(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-i*a,v=t*c-r*a,y=t*l-s*a,P=i*c-r*o,C=i*l-s*o,T=r*l-s*c,U=u*_-f*g,b=u*m-d*g,x=u*p-h*g,E=f*m-d*_,k=f*p-h*_,I=d*p-h*m,B=M*I-v*k+y*E+P*x-C*b+T*U;return B?(B=1/B,n[0]=(o*I-c*k+l*E)*B,n[1]=(r*k-i*I-s*E)*B,n[2]=(_*T-m*C+p*P)*B,n[3]=(d*C-f*T-h*P)*B,n[4]=(c*x-a*I-l*b)*B,n[5]=(t*I-r*x+s*b)*B,n[6]=(m*y-g*T-p*v)*B,n[7]=(u*T-d*y+h*v)*B,n[8]=(a*k-o*x+l*U)*B,n[9]=(i*x-t*k-s*U)*B,n[10]=(g*C-_*y+p*M)*B,n[11]=(f*y-u*C-h*M)*B,n[12]=(o*b-a*E-c*U)*B,n[13]=(t*E-i*b+r*U)*B,n[14]=(_*v-g*P-m*M)*B,n[15]=(u*P-f*v+d*M)*B,n):null}function je(n,e,t){var i=t[0],r=t[1],s=t[2],a,o,c,l,u,f,d,h,g,_,m,p;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],c=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=e[9],m=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=c,n[3]=l,n[4]=u,n[5]=f,n[6]=d,n[7]=h,n[8]=g,n[9]=_,n[10]=m,n[11]=p,n[12]=a*i+u*r+g*s+e[12],n[13]=o*i+f*r+_*s+e[13],n[14]=c*i+d*r+m*s+e[14],n[15]=l*i+h*r+p*s+e[15]),n}function En(n,e,t){var i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function hS(n,e,t,i){var r=i[0],s=i[1],a=i[2],o=Math.sqrt(r*r+s*s+a*a),c,l,u,f,d,h,g,_,m,p,M,v,y,P,C,T,U,b,x,E,k,I,B,D;return o<za?null:(o=1/o,r*=o,s*=o,a*=o,c=Math.sin(t),l=Math.cos(t),u=1-l,f=e[0],d=e[1],h=e[2],g=e[3],_=e[4],m=e[5],p=e[6],M=e[7],v=e[8],y=e[9],P=e[10],C=e[11],T=r*r*u+l,U=s*r*u+a*c,b=a*r*u-s*c,x=r*s*u-a*c,E=s*s*u+l,k=a*s*u+r*c,I=r*a*u+s*c,B=s*a*u-r*c,D=a*a*u+l,n[0]=f*T+_*U+v*b,n[1]=d*T+m*U+y*b,n[2]=h*T+p*U+P*b,n[3]=g*T+M*U+C*b,n[4]=f*x+_*E+v*k,n[5]=d*x+m*E+y*k,n[6]=h*x+p*E+P*k,n[7]=g*x+M*E+C*k,n[8]=f*I+_*B+v*D,n[9]=d*I+m*B+y*D,n[10]=h*I+p*B+P*D,n[11]=g*I+M*B+C*D,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function Bs(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],f=e[10],d=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+l*i,n[5]=a*r+u*i,n[6]=o*r+f*i,n[7]=c*r+d*i,n[8]=l*r-s*i,n[9]=u*r-a*i,n[10]=f*r-o*i,n[11]=d*r-c*i,n}function Gt(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[8],u=e[9],f=e[10],d=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-l*i,n[1]=a*r-u*i,n[2]=o*r-f*i,n[3]=c*r-d*i,n[8]=s*i+l*r,n[9]=a*i+u*r,n[10]=o*i+f*r,n[11]=c*i+d*r,n}function yd(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],d=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+l*i,n[1]=a*r+u*i,n[2]=o*r+f*i,n[3]=c*r+d*i,n[4]=l*r-s*i,n[5]=u*r-a*i,n[6]=f*r-o*i,n[7]=d*r-c*i,n}function fS(n,e,t,i,r){var s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0){var a=1/(i-r);n[10]=(r+i)*a,n[14]=2*r*i*a}else n[10]=-1,n[14]=-2*i;return n}var dS=fS;function pS(n,e,t,i,r,s,a){var o=1/(e-t),c=1/(i-r),l=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*l,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*c,n[14]=(a+s)*l,n[15]=1,n}var mS=pS;function gS(n,e,t,i){var r,s,a,o,c,l,u,f,d,h,g=e[0],_=e[1],m=e[2],p=i[0],M=i[1],v=i[2],y=t[0],P=t[1],C=t[2];return Math.abs(g-y)<za&&Math.abs(_-P)<za&&Math.abs(m-C)<za?cS(n):(u=g-y,f=_-P,d=m-C,h=1/Math.sqrt(u*u+f*f+d*d),u*=h,f*=h,d*=h,r=M*d-v*f,s=v*u-p*d,a=p*f-M*u,h=Math.sqrt(r*r+s*s+a*a),h?(h=1/h,r*=h,s*=h,a*=h):(r=0,s=0,a=0),o=f*a-d*s,c=d*r-u*a,l=u*s-f*r,h=Math.sqrt(o*o+c*c+l*l),h?(h=1/h,o*=h,c*=h,l*=h):(o=0,c=0,l=0),n[0]=r,n[1]=o,n[2]=u,n[3]=0,n[4]=s,n[5]=c,n[6]=f,n[7]=0,n[8]=a,n[9]=l,n[10]=d,n[11]=0,n[12]=-(r*g+s*_+a*m),n[13]=-(o*g+c*_+l*m),n[14]=-(u*g+f*_+d*m),n[15]=1,n)}function oo(){var n=new gr(3);return gr!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function xi(n){var e=new gr(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function _S(n){var e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function Mn(n,e,t){var i=new gr(3);return i[0]=n,i[1]=e,i[2]=t,i}function La(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function vS(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function xS(n,e,t,i){return n[0]=e[0]+t[0]*i,n[1]=e[1]+t[1]*i,n[2]=e[2]+t[2]*i,n}function yS(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function Sd(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function SS(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}(function(){var n=oo();return function(e,t,i,r,s,a){var o,c;for(t||(t=3),i||(i=0),r?c=Math.min(r*t+i,e.length):c=e.length,o=i;o<c;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();const wn=[124/255,189/255,107/255],wS=Ze.intToRgb(6396257),MS=Ze.intToRgb(8431445),zr=Ze.intToRgb(4764952),Da=Ze.intToRgb(4159204),bS=Ze.intToRgb(2129968),ES=n=>{const e=n/15,t=e*.6+(e>0?.4:.3),i=Ai(e*e*.7-.5,0,1),r=Ai(e*e*.6-.7,0,1);return[t,i,r]},Ia=n=>[n/8,1-n/32,n/64],mn={large_fern:()=>wn,tall_grass:()=>wn,grass_block:()=>wn,fern:()=>wn,grass:()=>wn,short_grass:()=>wn,potted_fern:()=>wn,pink_petals:()=>wn,wildflowers:()=>wn,bush:()=>wn,spruce_leaves:()=>wS,birch_leaves:()=>MS,oak_leaves:()=>zr,jungle_leaves:()=>zr,acacia_leaves:()=>zr,dark_oak_leaves:()=>zr,vine:()=>zr,mangrove_leaves:()=>zr,water:()=>Da,bubble_column:()=>Da,cauldron:()=>Da,water_cauldron:()=>Da,redstone_wire:n=>ES(parseInt(n.power??"0")),sugar_cane:()=>wn,attached_melon_stem:()=>Ia(7),attached_pumpkin_stem:()=>Ia(7),melon_stem:n=>Ia(parseInt(n.age??"0")),pumpkin_stem:n=>Ia(parseInt(n.age??"0")),lily_pad:()=>bS};var St;(function(n){function e(i,r,s){let{up:a,down:o,north:c,east:l,south:u,west:f}=i;switch(s){case 90:[c,l,u,f]=[l,u,f,c];break;case 180:[c,l,u,f]=[u,f,c,l];break;case 270:[c,l,u,f]=[f,c,l,u]}switch(r){case 90:[a,c,o,u]=[c,o,u,a];break;case 180:[a,c,o,u]=[o,u,a,c];break;case 270:[a,c,o,u]=[u,a,c,o]}return{up:a,down:o,north:c,east:l,south:u,west:f}}n.rotate=e;function t(){return Object.create(null)}n.none=t})(St||(St={}));const dn=class dn{constructor(e,t,i,r,s,a,o=0){L(this,"pos");L(this,"color");L(this,"texture");L(this,"textureLimit");L(this,"normal");L(this,"blockPos");L(this,"emissive");this.pos=e,this.color=t,this.texture=i,this.textureLimit=r,this.normal=s,this.blockPos=a,this.emissive=o}transform(e){return dn.VEC[0]=this.pos.x,dn.VEC[1]=this.pos.y,dn.VEC[2]=this.pos.z,SS(dn.VEC,dn.VEC,e),this.pos=new We(dn.VEC[0],dn.VEC[1],dn.VEC[2]),this}static fromPos(e){return new dn(e,[0,0,0],[0,0],[0,0,0,0],void 0,void 0,0)}};L(dn,"VEC",oo());let Dn=dn;class zs{constructor(e,t){L(this,"v1");L(this,"v2");this.v1=e,this.v2=t}vertices(){return[this.v1,this.v2]}forEach(e){return e(this.v1),e(this.v2),this}transform(e){return this.forEach(t=>t.transform(e)),this}setColor(e){return this.forEach(t=>t.color=e),this}toString(){return`Line(${this.v1.pos.toString()}, ${this.v2.pos.toString()})`}static fromPoints(e,t){return new zs(Dn.fromPos(e),Dn.fromPos(t))}}class lt{constructor(e=[],t=[]){L(this,"quads");L(this,"lines");L(this,"posBuffer");L(this,"colorBuffer");L(this,"textureBuffer");L(this,"textureLimitBuffer");L(this,"normalBuffer");L(this,"blockPosBuffer");L(this,"indexBuffer");L(this,"indexType");L(this,"linePosBuffer");L(this,"lineColorBuffer");this.quads=e,this.lines=t}clear(){return this.quads=[],this.lines=[],this}isEmpty(){return this.quads.length===0&&this.lines.length===0}quadVertices(){return this.quads.length*4}quadIndices(){return this.quads.length*6}lineVertices(){return this.lines.length*2}merge(e){for(const t of e.quads)this.quads.push(t);for(const t of e.lines)this.lines.push(t);return this}addLine(e,t,i,r,s,a,o){const c=new zs(Dn.fromPos(new We(e,t,i)),Dn.fromPos(new We(r,s,a))).setColor(o);return this.lines.push(c),this}addLineCube(e,t,i,r,s,a,o){return this.addLine(e,t,i,e,t,a,o),this.addLine(r,t,i,r,t,a,o),this.addLine(e,t,i,r,t,i,o),this.addLine(e,t,a,r,t,a,o),this.addLine(e,t,i,e,s,i,o),this.addLine(r,t,i,r,s,i,o),this.addLine(e,t,a,e,s,a,o),this.addLine(r,t,a,r,s,a,o),this.addLine(e,s,i,e,s,a,o),this.addLine(r,s,i,r,s,a,o),this.addLine(e,s,i,r,s,i,o),this.addLine(e,s,a,r,s,a,o),this}transform(e){for(const t of this.quads)t.transform(e);return this}computeNormals(){for(const e of this.quads){const t=e.normal();e.forEach(i=>i.normal=t)}}rebuild(e,t){const i=t.usage??e.DYNAMIC_DRAW,r=(a,o,c)=>{if(a||(a=e.createBuffer()??void 0),!a)throw new Error("Cannot create new buffer");return e.bindBuffer(o,a),e.bufferData(o,c,i),a},s=(a,o,c,l)=>{if(a.length===0){o&&e.deleteBuffer(o);return}const u=a[0]instanceof zs?2:4,f=new Float32Array(a.length*u*c);let d=0;for(const h of a)for(const g of h.vertices()){const _=l(g);if(!_)throw new Error("Missing vertex component");for(let m=0;m<c;m+=1)f[d++]=_[m]??0}return r(o,e.ARRAY_BUFFER,f)};if(t.pos&&(this.posBuffer=s(this.quads,this.posBuffer,3,a=>a.pos.components()),this.linePosBuffer=s(this.lines,this.linePosBuffer,3,a=>a.pos.components())),t.color&&(this.colorBuffer=s(this.quads,this.colorBuffer,3,a=>a.color),this.lineColorBuffer=s(this.lines,this.lineColorBuffer,3,a=>a.color)),t.texture&&(this.textureBuffer=s(this.quads,this.textureBuffer,2,a=>a.texture),this.textureLimitBuffer=s(this.quads,this.textureLimitBuffer,4,a=>a.textureLimit)),t.normal&&(this.normalBuffer=s(this.quads,this.normalBuffer,3,a=>{var o;return(o=a.normal)==null?void 0:o.components()})),t.blockPos&&(this.blockPosBuffer=s(this.quads,this.blockPosBuffer,3,a=>{var o;return(o=a.blockPos)==null?void 0:o.components()})),this.quads.length===0)this.indexBuffer&&e.deleteBuffer(this.indexBuffer),this.indexBuffer=void 0,this.indexType=void 0;else{const a=this.quadVertices()>65536;if(a&&!(typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext)&&!e.getExtension("OES_element_index_uint"))throw new Error("Mesh requires 32-bit indices, but OES_element_index_uint is not available");this.indexType=a?e.UNSIGNED_INT:e.UNSIGNED_SHORT;const o=a?new Uint32Array(this.quadIndices()):new Uint16Array(this.quadIndices());let c=0;for(let l=0;l<this.quads.length;l+=1){const u=l*4;o[c++]=u,o[c++]=u+1,o[c++]=u+2,o[c++]=u,o[c++]=u+2,o[c++]=u+3}this.indexBuffer=r(this.indexBuffer,e.ELEMENT_ARRAY_BUFFER,o)}return this}}function Oh(n){const e=se.readObject(n)??{},i={model:se.readString(e.model)??""},r=se.readNumber(e.x);r!==void 0&&(i.x=r);const s=se.readNumber(e.y);s!==void 0&&(i.y=s);const a=se.readBoolean(e.uvlock);a!==void 0&&(i.uvlock=a);const o=se.readNumber(e.weight);return o!==void 0&&(i.weight=o),i}function wd(n){const e=se.readArray(n,Oh);return e||Oh(n)}function Md(n){const e=se.readObject(n);if(!e)return;const t=se.readArray(e.OR,Md);if(t){const i=t.flatMap(r=>r?[r]:[]);if(i.length>0)return{OR:i}}return Object.fromEntries(Object.entries(e).map(([i,r])=>[i,se.readString(r)??""]))}function TS(n){const e=se.readObject(n)??{},t=wd(e.apply),i=Md(e.when);return i?{when:i,apply:t}:{apply:t}}class yo{constructor(e,t){L(this,"variants");L(this,"multipart");this.variants=e,this.multipart=t}getModelVariants(e){if(this.variants){const t=Object.keys(this.variants).filter(r=>this.matchesVariant(r,e));if(t.length===0)return[];const i=this.variants[t[0]];return[Array.isArray(i)?i[0]:i]}else if(this.multipart)return this.multipart.filter(i=>i.when?this.matchesCase(i.when,e):!0).map(i=>Array.isArray(i.apply)?i.apply[0]:i.apply);return[]}getMesh(e,t,i,r,s){var l;const a=this.getModelVariants(t),o=new lt;for(const u of a){const f=St.rotate(s,u.x??0,u.y??0),d=r.getBlockModel(ie.parse(u.model));if(!d)throw new Error(`Cannot find block model ${u.model}`);const h=e?(l=mn[e.path])==null?void 0:l.call(mn,t):void 0,g=d.getMesh(i,f,h);if(u.x||u.y){const _=ut();je(_,_,[8,8,8]),Gt(_,_,-Kl(u.y??0)),Bs(_,_,-Kl(u.x??0)),je(_,_,[-8,-8,-8]),g.transform(_)}o.merge(g)}const c=ut();return En(c,c,[.0625,.0625,.0625]),o.transform(c)}matchesVariant(e,t){return e.split(",").every(i=>{const[r,s]=i.split("=");return t[r]===s})}matchesCase(e,t){if(Array.isArray(e.OR))return e.OR.some(r=>this.matchesCase(r,t));const i=e;return Object.keys(i).every(r=>i[r].split("|").includes(t[r]))}static fromJson(e){const t=se.readObject(e)??{},i=se.readObject(t.variants),r=i?Object.fromEntries(Object.entries(i).map(([a,o])=>[a,wd(o)])):void 0,s=se.readArray(t.multipart,TS);return new yo(r,s)}}class Bn{constructor(e,t,i,r){L(this,"v1");L(this,"v2");L(this,"v3");L(this,"v4");this.v1=e,this.v2=t,this.v3=i,this.v4=r}vertices(){return[this.v1,this.v2,this.v3,this.v4]}forEach(e){return e(this.v1),e(this.v2),e(this.v3),e(this.v4),this}transform(e){return this.forEach(t=>t.transform(e)),this}normal(){const e=this.v2.pos.sub(this.v1.pos),t=this.v3.pos.sub(this.v1.pos);return e.cross(t).normalize()}reverse(){return[this.v1,this.v2,this.v3,this.v4]=[this.v4,this.v3,this.v2,this.v1],this}setColor(e){return this.forEach(t=>t.color=e),this}setTexture(e,t){return this.v1.textureLimit=t,this.v2.textureLimit=t,this.v3.textureLimit=t,this.v4.textureLimit=t,this.v1.texture=[e[0],e[1]],this.v2.texture=[e[2],e[3]],this.v3.texture=[e[4],e[5]],this.v4.texture=[e[6],e[7]],this}toString(){return`Quad(${this.v1.pos.toString()}, ${this.v2.pos.toString()}, ${this.v3.pos.toString()}, ${this.v4.pos.toString()})`}static fromPoints(e,t,i,r){return new Bn(Dn.fromPos(e),Dn.fromPos(t),Dn.fromPos(i),Dn.fromPos(r))}}const AS={0:[0,3,2,3,2,1,0,1],90:[2,3,2,1,0,1,0,3],180:[2,1,0,1,0,3,2,3],270:[0,1,0,3,2,3,2,1]},CS={x:[1,0,0],y:[0,1,0],z:[0,0,1]},Hr=1.41421356237,RS={x:[1,Hr,Hr],y:[Hr,1,Hr],z:[Hr,Hr,1]},bi=class bi{constructor(e,t,i,r,s){L(this,"parent");L(this,"textures");L(this,"elements");L(this,"display");L(this,"guiLight");L(this,"generationMarker",!1);this.parent=e,this.textures=t,this.elements=i,this.display=r,this.guiLight=s}getDisplayTransform(e){var r;const t=(r=this.display)==null?void 0:r[e],i=ut();return je(i,i,[8,8,8]),t!=null&&t.translation&&je(i,i,t.translation),t!=null&&t.rotation&&(Bs(i,i,t.rotation[0]*Math.PI/180),Gt(i,i,t.rotation[1]*Math.PI/180),yd(i,i,-t.rotation[2]*Math.PI/180)),t!=null&&t.scale&&En(i,i,t.scale),je(i,i,[-8,-8,-8]),i}getMesh(e,t,i){const r=new lt,s=a=>i===void 0?[1,1,1]:a===void 0||a<0?[1,1,1]:typeof i=="function"?i(a):i;for(const a of this.elements??[])r.merge(this.getElementMesh(a,e,t,s));return r}getElementMesh(e,t,i,r){var g,_,m,p,M,v,y,P,C,T,U,b;const s=new lt,[a,o,c]=e.from,[l,u,f]=e.to,d=(x,E,k)=>{var ve,pe,z,re;const I=Bn.fromPoints(new We(k[0],k[1],k[2]),new We(k[3],k[4],k[5]),new We(k[6],k[7],k[8]),new We(k[9],k[10],k[11])),B=r(x.tintindex);I.setColor(B);const[D,H,j,O]=t.getTextureUV(this.getTexture(x.texture)),X=(j-D)/16,Z=(O-H)/16;E[0]=(((ve=x.uv)==null?void 0:ve[0])??E[0])*X,E[1]=(((pe=x.uv)==null?void 0:pe[1])??E[1])*Z,E[2]=(((z=x.uv)==null?void 0:z[2])??E[2])*X,E[3]=(((re=x.uv)==null?void 0:re[3])??E[3])*Z;const te=AS[x.rotation??0];I.setTexture([D+E[te[0]],H+E[te[1]],D+E[te[2]],H+E[te[3]],D+E[te[4]],H+E[te[5]],D+E[te[6]],H+E[te[7]]],[D+Math.min(E[0],E[2]),H+Math.min(E[1],E[3]),D+Math.max(E[0],E[2]),H+Math.max(E[1],E[3])]),s.quads.push(I)};(_=(g=e.faces)==null?void 0:g.up)!=null&&_.texture&&(!e.faces.up.cullface||!i[e.faces.up.cullface])&&d(e.faces.up,[a,16-f,l,16-c],[a,u,f,l,u,f,l,u,c,a,u,c]),(p=(m=e.faces)==null?void 0:m.down)!=null&&p.texture&&(!e.faces.down.cullface||!i[e.faces.down.cullface])&&d(e.faces.down,[16-f,16-l,16-c,16-a],[a,o,c,l,o,c,l,o,f,a,o,f]),(v=(M=e.faces)==null?void 0:M.south)!=null&&v.texture&&(!e.faces.south.cullface||!i[e.faces.south.cullface])&&d(e.faces.south,[a,16-u,l,16-o],[a,o,f,l,o,f,l,u,f,a,u,f]),(P=(y=e.faces)==null?void 0:y.north)!=null&&P.texture&&(!e.faces.north.cullface||!i[e.faces.north.cullface])&&d(e.faces.north,[16-l,16-u,16-a,16-o],[l,o,c,a,o,c,a,u,c,l,u,c]),(T=(C=e.faces)==null?void 0:C.east)!=null&&T.texture&&(!e.faces.east.cullface||!i[e.faces.east.cullface])&&d(e.faces.east,[16-f,16-u,16-c,16-o],[l,o,f,l,o,c,l,u,c,l,u,f]),(b=(U=e.faces)==null?void 0:U.west)!=null&&b.texture&&(!e.faces.west.cullface||!i[e.faces.west.cullface])&&d(e.faces.west,[c,16-u,f,16-o],[a,o,c,a,o,f,a,u,f,a,u,c]);const h=ut();if(e.rotation){const x=Mn(...e.rotation.origin);je(h,h,x),hS(h,h,Kl(e.rotation.angle),CS[e.rotation.axis]),e.rotation.rescale&&En(h,h,RS[e.rotation.axis]),yS(x,x),je(h,h,x)}return s.transform(h)}getTexture(e){var t;for(;e.startsWith("#");)e=((t=this.textures)==null?void 0:t[e.slice(1)])??"";return ie.parse(e)}flatten(e){var o;if(!this.parent)return;if(this.parent.equals(bi.BUILTIN_GENERATED)){this.generationMarker=!0;return}const t=this.getParent(e);if(!t){console.warn(`parent ${this.parent} does not exist!`),this.parent=void 0;return}t.flatten(e),this.elements||(this.elements=t.elements),this.textures||(this.textures={});const i=this.textures,r=t.textures;r&&Object.keys(r).forEach(c=>{i[c]||(i[c]=r[c])}),this.display||(this.display={});const s=this.display,a=t.display;if(a&&Object.keys(a).forEach(c=>{const l=c;if(!s[l])s[l]=a[l];else{const u=a[l];u&&Object.keys(u).forEach(f=>{const d=f,h=s[l];h&&!h[d]&&u[d]&&(h[d]=u[d])})}}),this.guiLight||(this.guiLight=t.guiLight),t.generationMarker&&(this.generationMarker=!0),this.generationMarker&&(((o=this.elements)==null?void 0:o.length)??0)===0)for(let c=0;c<bi.GENERATED_LAYERS.length;c+=1){const l=bi.GENERATED_LAYERS[c];if(!Object.hasOwn(this.textures,l))break;this.elements||(this.elements=[]),this.elements.push({from:[0,0,0],to:[16,16,0],faces:{south:{texture:`#${l}`,tintindex:c}}})}this.parent=void 0}getParent(e){return this.parent?e.getBlockModel(this.parent):null}static fromJson(e){var u;const t=se.readObject(e)??{},i=se.readString(t.parent),r=i?ie.parse(i):void 0,s=se.readObject(t.textures),a=s?se.readMap(s,f=>se.readString(f)??""):void 0,o=(u=se.readArray(t.elements,f=>se.readObject(f)??{}))==null?void 0:u.map(f=>f),c=se.readObject(t.display),l=se.readString(t.gui_light);return new bi(r,a,o,c,l)}};L(bi,"BUILTIN_GENERATED",ie.create("builtin/generated")),L(bi,"GENERATED_LAYERS",["layer0","layer1","layer2","layer3","layer4"]);let dt=bi;class Cn{constructor(e,t){L(this,"img");L(this,"idMap");L(this,"part");if(this.img=e,this.idMap=t,!Zl(e.width)||!Zl(e.height))throw new Error(`Expected texture atlas dimensions to be powers of two, got ${e.width}x${e.height}.`);this.part=16/e.width}getTextureAtlas(){return this.img}getTextureUV(e){return this.idMap[e.toString()]??[0,0,this.part,this.part]}getPixelSize(){return this.part/16}static async fromBlobs(e){const t=Math.sqrt(Object.keys(e).length+1),i=pc(t),r=i*16,s=1/i,a=document.createElement("canvas");a.width=r,a.height=r;const o=a.getContext("2d");if(!o)throw new Error("Failed to get 2D rendering context");this.drawInvalidTexture(o);const c={};let l=1;return await Promise.all(Object.keys(e).map(async u=>{const f=l%i,d=Math.floor(l/i);l+=1,c[u]=[s*f,s*d,s*f+s,s*d+s];const h=await createImageBitmap(e[u]);o.drawImage(h,0,0,16,16,16*f,16*d,16,16)})),new Cn(o.getImageData(0,0,r,r),c)}static empty(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");if(!t)throw new Error("Failed to get 2D rendering context");return Cn.drawInvalidTexture(t),new Cn(t.getImageData(0,0,16,16),{})}static drawInvalidTexture(e){e.fillStyle="black",e.fillRect(0,0,16,16),e.fillStyle="magenta",e.fillRect(0,0,8,8),e.fillRect(8,8,8,8)}}function Ua(n){if(!n)return"";if(typeof n=="string")return n;const e=n;return typeof e.toString=="function"?e.toString():String(n)}function bd(){const n=new URL("../../assets/default-pack/",import.meta.url).toString();return mc(n)}function mc(n){const e=(typeof n=="string"?n:n.toString()).replace(/\/?$/,"/");return{baseUrl:e,assetsJson:new URL("assets.json",e).toString(),atlasPng:new URL("atlas.png",e).toString(),blockFlags:{opaqueTxt:new URL("block-flags/opaque.txt",e).toString(),transparentTxt:new URL("block-flags/transparent.txt",e).toString(),nonSelfCullingTxt:new URL("block-flags/non_self_culling.txt",e).toString(),emissiveJson:new URL("block-flags/emissive.json",e).toString()}}}function El(n){const e=new Set;return(n.match(/minecraft:[a-z0-9_]+/g)??[]).forEach(i=>e.add(i)),n.split(/\s+/).map(i=>i.trim()).filter(Boolean).forEach(i=>{const r=i.startsWith("minecraft:")?i:`minecraft:${i}`;e.add(r)}),e}async function PS(n){const e=typeof createImageBitmap=="function"?await createImageBitmap(n):null,t=(e==null?void 0:e.width)??0,i=(e==null?void 0:e.height)??0;if(!e||t<=0||i<=0)throw new Error("[lodestone] Unable to decode atlas.png: createImageBitmap unavailable or failed.");const r=pc(Math.max(t,i)),a=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(r,r):typeof document<"u"?Object.assign(document.createElement("canvas"),{width:r,height:r}):(()=>{throw new Error("[lodestone] No canvas implementation available to decode atlas.png")})()).getContext("2d");if(!a)throw new Error("[lodestone] Unable to create 2D canvas context to decode atlas.png");return a.drawImage(e,0,0),{imageData:a.getImageData(0,0,r,r),atlasSize:r}}function Ed(n){const{assets:e,atlas:t,flags:i}=n,r={};Object.keys(e.blockstates??{}).forEach(h=>{r[`minecraft:${h}`]=yo.fromJson(e.blockstates[h])});const s={};Object.keys(e.models??{}).forEach(h=>{s[`minecraft:${h}`]=dt.fromJson(e.models[h])});const a={getBlockModel(h){return s[Ua(h)]??null}};Object.values(s).forEach(h=>h.flatten(a));const o={};Object.keys(e.textures??{}).forEach(h=>{const[g,_,m,p]=e.textures[h],M=m!==p&&h.startsWith("block/")?m:p;o[`minecraft:${h}`]=[g/t.atlasSize,_/t.atlasSize,(g+m)/t.atlasSize,(_+M)/t.atlasSize]});const c=new Cn(t.imageData,o),l=(i==null?void 0:i.opaque)??new Set,u=(i==null?void 0:i.transparent)??new Set,f=(i==null?void 0:i.nonSelfCulling)??new Set,d=(i==null?void 0:i.emissive)??{};return{getBlockDefinition(h){return r[Ua(h)]??null},getBlockModel(h){return s[Ua(h)]??null},getTextureUV(h){return c.getTextureUV(h)},getTextureAtlas(){return c.getTextureAtlas()},getPixelSize(){return c.getPixelSize()},getBlockFlags(h){const g=Ua(h),_=u.has(g),m=l.has(g),p=!_&&(m||l.size===0),M=f.has(g),v=d[g];return{opaque:p,semi_transparent:_,self_culling:!M,emissive:!!v,emissiveIntensity:(v==null?void 0:v.intensity)??1,emissiveConditional:v==null?void 0:v.conditional}},getBlockProperties(){return null},getDefaultBlockProperties(){return null}}}async function LS(n){const e=(n==null?void 0:n.fetch)??globalThis.fetch;if(!e)throw new Error("[lodestone] fetch is not available; pass options.fetch");const t=n!=null&&n.baseUrl?mc(n.baseUrl):bd(),[i,r,s,a,o,c]=await Promise.all([e(t.assetsJson),e(t.atlasPng),e(t.blockFlags.opaqueTxt),e(t.blockFlags.transparentTxt),e(t.blockFlags.nonSelfCullingTxt),e(t.blockFlags.emissiveJson)]);if(!i.ok)throw new Error(`[lodestone] Failed to fetch assets.json: ${i.status} ${i.statusText}`);if(!r.ok)throw new Error(`[lodestone] Failed to fetch atlas.png: ${r.status} ${r.statusText}`);if(!s.ok)throw new Error(`[lodestone] Failed to fetch opaque.txt: ${s.status} ${s.statusText}`);if(!a.ok)throw new Error(`[lodestone] Failed to fetch transparent.txt: ${a.status} ${a.statusText}`);if(!o.ok)throw new Error(`[lodestone] Failed to fetch non_self_culling.txt: ${o.status} ${o.statusText}`);if(!c.ok)throw new Error(`[lodestone] Failed to fetch emissive.json: ${c.status} ${c.statusText}`);const l=await i.json(),u=await r.blob(),f=await PS(u),d={opaque:El(await s.text()),transparent:El(await a.text()),nonSelfCulling:El(await o.text()),emissive:await c.json()},h=Ed({assets:l,atlas:f,flags:d});return{urls:t,assets:l,atlas:f,resources:h}}function Bh(n,e,t,i,r){var a;const s=i.up?16:[14.2,12.5,10.5,9,7,5.3,3.7,1.9,16,16,16,16,16,16,16,16][e];return new dt(void 0,{still:`block/${n}_still`,flow:`block/${n}_flow`},[{from:[0,0,0],to:[16,s,16],faces:{up:{texture:"#still",tintindex:r,cullface:Be.UP},down:{texture:"#still",tintindex:r,cullface:Be.DOWN},north:{texture:"#flow",tintindex:r,cullface:Be.NORTH},east:{texture:"#flow",tintindex:r,cullface:Be.EAST},south:{texture:"#flow",tintindex:r,cullface:Be.SOUTH},west:{texture:"#flow",tintindex:r,cullface:Be.WEST}}}]).getMesh(t,i,(a=mn[n])==null?void 0:a.call(mn,{}))}const xs={white:Ze.intToRgb(16383998),orange:Ze.intToRgb(16351261),magenta:Ze.intToRgb(13061821),light_blue:Ze.intToRgb(3847130),yellow:Ze.intToRgb(16701501),lime:Ze.intToRgb(8439583),pink:Ze.intToRgb(15961002),gray:Ze.intToRgb(4673362),light_gray:Ze.intToRgb(10329495),cyan:Ze.intToRgb(1481884),purple:Ze.intToRgb(8991416),blue:Ze.intToRgb(3949738),brown:Ze.intToRgb(8606770),green:Ze.intToRgb(6192150),red:Ze.intToRgb(11546150),black:Ze.intToRgb(1908001)};var rt;(function(n){function e(D){return H=>new dt(void 0,{0:D.withPrefix("entity/chest/").toString()},[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],rotation:180,texture:"#0"},down:{uv:[.75,0,1.25,.25],rotation:180,texture:"#0"}}}]).getMesh(H,St.none())}n.chestRenderer=e;function t(D){return new dt(void 0,{0:"entity/decorated_pot/decorated_pot_side",1:"entity/decorated_pot/decorated_pot_base"},[{from:[1,0,1],to:[15,16,15],faces:{north:{uv:[1,0,15,16],texture:"#0"},east:{uv:[1,0,15,16],texture:"#0"},south:{uv:[1,0,15,16],texture:"#0"},west:{uv:[1,0,15,16],texture:"#0"},up:{uv:[0,6.5,7,13.5],texture:"#1"},down:{uv:[7,6.5,14,13.5],texture:"#1"}}},{from:[5,16,5],to:[11,17,11],faces:{north:{uv:[0,5.5,3,6],texture:"#1"},east:{uv:[3,5.5,6,6],texture:"#1"},south:{uv:[6,5.5,9,6],texture:"#1"},west:{uv:[9,5.5,12,6],texture:"#1"}}},{from:[4,17,4],to:[12,20,12],faces:{north:{uv:[0,4,4,5.5],texture:"#1"},east:{uv:[4,4,8,5.5],texture:"#1"},south:{uv:[8,4,12,5.5],texture:"#1"},west:{uv:[12,4,16,5.5],texture:"#1"},up:{uv:[4,0,8,4],texture:"#1"},down:{uv:[8,0,12,4],texture:"#1"}}}]).getMesh(D,St.none())}n.decoratedPotRenderer=t;function i(D){return new dt(void 0,{0:"entity/shield_base_nopattern"},[{from:[-6,-11,-2],to:[6,11,-1],faces:{north:{uv:[3.5,.25,6.5,5.75],texture:"#0"},east:{uv:[3.25,.25,3.5,5.75],texture:"#0"},south:{uv:[.25,.25,3.25,5.75],texture:"#0"},west:{uv:[0,.25,.25,5.75],texture:"#0"},up:{uv:[.25,0,3.25,.25],texture:"#0"},down:{uv:[3.25,0,6.25,.25],texture:"#0"}}}]).getMesh(D,St.none())}n.shieldRenderer=i;function r(D,H){return j=>new dt(void 0,{0:D.withPrefix("entity/").toString()},[{from:[4,0,4],to:[12,8,12],faces:{north:{uv:[6,2*H,8,4*H],texture:"#0"},east:{uv:[2,2*H,0,4*H],texture:"#0"},south:{uv:[2,2*H,4,4*H],texture:"#0"},west:{uv:[6,2*H,4,4*H],texture:"#0"},up:{uv:[2,0*H,4,2*H],texture:"#0"},down:{uv:[4,0*H,6,2*H],texture:"#0"}}}]).getMesh(j,St.none())}n.headRenderer=r;function s(D=ie.create("enderdragon/dragon")){return H=>{const j=ut();return je(j,j,[8,8,8]),En(j,j,[.75,.75,.75]),Gt(j,j,Math.PI),je(j,j,[-8,-11.2,-8]),new dt(void 0,{0:D.withPrefix("entity/").toString()},[{from:[2,4,-16],to:[14,9,0],faces:{north:{uv:[12,3.75,12.75,4.0625],texture:"#0"},east:{uv:[11,3.75,12,4.0625],texture:"#0"},south:{uv:[13.75,3.75,14.5,4.0625],texture:"#0"},west:{uv:[12.75,3.75,13.75,4.0625],texture:"#0"},up:{uv:[12.75,3.75,12,2.75],texture:"#0"},down:{uv:[13.5,2.75,12.75,3.75],texture:"#0"}}},{from:[0,0,-2],to:[16,16,14],faces:{north:{uv:[8,2.875,9,3.875],texture:"#0"},east:{uv:[7,2.875,8,3.875],texture:"#0"},south:{uv:[10,2.875,11,3.875],texture:"#0"},west:{uv:[9,2.875,10,3.875],texture:"#0"},up:{uv:[9,2.875,8,1.875],texture:"#0"},down:{uv:[10,1.875,9,2.875],texture:"#0"}}},{from:[2,0,-16],to:[14,4,0],rotation:{angle:-.2*180/Math.PI,axis:"x",origin:[8,4,-2]},faces:{north:{uv:[12,5.0625,12.75,5.3125],texture:"#0"},east:{uv:[11,5.0625,12,5.3125],texture:"#0"},south:{uv:[13.75,5.0625,14.5,5.3125],texture:"#0"},west:{uv:[12.75,5.0625,13.75,5.3125],texture:"#0"},up:{uv:[12.75,5.0625,12,4.0625],texture:"#0"},down:{uv:[13.5,4.0625,12.75,5.0625],texture:"#0"}}},{from:[3,16,4],to:[5,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[11,16,4],to:[13,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[3,9,-14],to:[5,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}},{from:[11,9,-14],to:[13,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}}]).getMesh(H,St.none()).transform(j)}}n.dragonHeadRenderer=s;function a(D=ie.create("piglin/piglin")){return H=>new dt(void 0,{0:D.withPrefix("entity/").toString()},[{from:[3,0,4],to:[13,8,12],faces:{north:{uv:[6.5,2,9,4],texture:"#0"},east:{uv:[2,2,0,4],texture:"#0"},south:{uv:[2,2,4.5,4],texture:"#0"},west:{uv:[6.5,2,4.5,4],texture:"#0"},up:{uv:[2,0,4.5,2],texture:"#0"},down:{uv:[4.5,0,7,2],texture:"#0"}}},{from:[6,0,12],to:[10,4,13],faces:{north:{uv:[9.25,.5,10.25,1.5],texture:"#0"},east:{uv:[7.75,.5,8,1.5],texture:"#0"},south:{uv:[8,.5,9,1.5],texture:"#0"},west:{uv:[9,.5,9.25,1.5],texture:"#0"},up:{uv:[8,.25,9,.5],texture:"#0"},down:{uv:[9,.25,10,.5],texture:"#0"}}},{from:[5,0,12],to:[6,2,13],faces:{north:{uv:[1.25,.25,1.5,.75],texture:"#0"},east:{uv:[.5,.25,.75,.75],texture:"#0"},south:{uv:[.75,.25,1,.75],texture:"#0"},west:{uv:[1,.25,1.25,.75],texture:"#0"},up:{uv:[.75,0,1,.25],texture:"#0"},down:{uv:[1,0,1.25,.25],texture:"#0"}}},{from:[10,0,12],to:[11,2,13],faces:{north:{uv:[1.25,1.25,1.5,1.75],texture:"#0"},east:{uv:[.5,1.25,.75,1.75],texture:"#0"},south:{uv:[.75,1.25,1,1.75],texture:"#0"},west:{uv:[1,1.25,1.25,1.75],texture:"#0"},up:{uv:[.75,1,1,1.25],texture:"#0"},down:{uv:[1,1,1.25,1.25],texture:"#0"}}},{from:[2.5,1.5,6],to:[3.5,6.5,10],rotation:{angle:-30,axis:"z",origin:[3,7,8]},faces:{north:{uv:[12,2.5,12.25,3.75],texture:"#0"},east:{uv:[9.75,2.5,10.75,3.75],texture:"#0"},south:{uv:[10.75,2.5,11,3.75],texture:"#0"},west:{uv:[11,2.5,12,3.75],texture:"#0"},up:{uv:[10.75,1.5,11,2.5],texture:"#0"},down:{uv:[11,1.5,11.25,2.5],texture:"#0"}}},{from:[12.5,1.5,6],to:[13.5,6.5,10],rotation:{angle:30,axis:"z",origin:[13,7,8]},faces:{north:{uv:[15.25,2.5,15,3.75],texture:"#0"},east:{uv:[15,2.5,14,3.75],texture:"#0"},south:{uv:[14,2.5,13.75,3.75],texture:"#0"},west:{uv:[13.75,2.5,12.75,3.75],texture:"#0"},up:{uv:[14,1.5,13.75,2.5],texture:"#0"},down:{uv:[14.25,1.5,14,2.5],texture:"#0"}}}]).getMesh(H,St.none())}n.piglinHeadRenderer=a;function o(D){return H=>new dt(void 0,{0:D.withPrefix("entity/signs/").toString()},[{from:[-4,8,7],to:[20,20,9],faces:{north:{uv:[0,0,12,6],texture:"#0"},east:{uv:[12,1,13,7],texture:"#0"},south:{uv:[0,8,12,14],texture:"#0"},west:{uv:[12,1,13,7],texture:"#0"},up:{uv:[0,0,12,.5],texture:"#0"},down:{uv:[0,5.5,12,6],texture:"#0"}}},{from:[7,-6,7],to:[9,8,9],faces:{north:{uv:[14,8,15,15],texture:"#0"},east:{uv:[15,8,16,15],texture:"#0"},south:{uv:[14,8,15,15],texture:"#0"},west:{uv:[15,8,16,15],texture:"#0"},up:{uv:[14,7.5,15,8],texture:"#0"},down:{uv:[15,7.5,16,8],texture:"#0"}}}]).getMesh(H,St.none())}n.signRenderer=o;function c(D){return H=>new dt(void 0,{0:D.withPrefix("entity/signs/").toString()},[{from:[-4,4,17],to:[20,16,19],faces:{north:{uv:[0,0,12,6],texture:"#0"},east:{uv:[12,1,13,7],texture:"#0"},south:{uv:[0,8,12,14],texture:"#0"},west:{uv:[12,1,13,7],texture:"#0"},up:{uv:[0,0,12,.5],texture:"#0"},down:{uv:[0,5.5,12,6],texture:"#0"}}}]).getMesh(H,St.none())}n.wallSignRenderer=c;function l(D){return(H,j)=>{const O=[14,4,16,6];return new dt(void 0,{0:D.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{south:{uv:[1,8,8,13],texture:"#0"},west:{uv:[0,8,1,13],texture:"#0"},north:{uv:[9,8,16,13],texture:"#0"},east:{uv:[8,8,9,13],texture:"#0"},up:{uv:[1,7,8,8],texture:"#0"},down:{uv:[1,7,8,8],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,12,8],rotation:{angle:-45,axis:"y",origin:[3,11,8]},faces:{north:{uv:O,texture:"#0"},south:{uv:O,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,11,8],to:[4.5,15,8],rotation:{angle:45,axis:"y",origin:[3,13,8]},faces:{north:{uv:O,texture:"#0"},south:{uv:O,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,14,8],to:[4.5,16,8],rotation:{angle:-45,axis:"y",origin:[3,15,8]},faces:{north:{uv:O,texture:"#0"},south:{uv:O,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,12,8],rotation:{angle:-45,axis:"y",origin:[13,11,8]},faces:{north:{uv:O,texture:"#0"},south:{uv:O,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,11,8],to:[14.5,15,8],rotation:{angle:45,axis:"y",origin:[13,13,8]},faces:{north:{uv:O,texture:"#0"},south:{uv:O,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,14,8],to:[14.5,16,8],rotation:{angle:-45,axis:"y",origin:[13,15,8]},faces:{north:{uv:O,texture:"#0"},south:{uv:O,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}}]).getMesh(j,St.none())}}n.hangingSignRenderer=l;function u(D){return H=>{const j=[14,4,16,6];return new dt(void 0,{0:`entity/signs/hanging/${D}`},[{from:[1,0,7],to:[15,10,9],faces:{south:{uv:[1,8,8,13],texture:"#0"},west:{uv:[0,8,1,13],texture:"#0"},north:{uv:[9,8,16,13],texture:"#0"},east:{uv:[8,8,9,13],texture:"#0"},up:{uv:[1,7,8,8],texture:"#0"},down:{uv:[1,7,8,8],texture:"#0"}}},{from:[0,14,6],to:[16,16,10],faces:{north:{uv:[0,2,8,3],texture:"#0"},east:{uv:[8,2,10,3],texture:"#0"},south:{uv:[0,2,8,3],texture:"#0"},west:{uv:[8,2,10,3],texture:"#0"},up:{uv:[0,0,8,1],texture:"#0"},down:{uv:[0,1,8,2],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,12,8],rotation:{angle:45,axis:"y",origin:[3,11,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,11,8],to:[4.5,14,8],rotation:{angle:-45,axis:"y",origin:[3,12.5,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,12,8],rotation:{angle:45,axis:"y",origin:[13,11,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,11,8],to:[14.5,14,8],rotation:{angle:-45,axis:"y",origin:[13,12.5,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}}]).getMesh(H,St.none())}}n.wallHangingSignRenderer=u;function f(D){return new dt(void 0,{0:"entity/conduit/base"},[{from:[5,5,5],to:[11,11,11],faces:{north:{uv:[3,6,6,12],texture:"#0"},east:{uv:[0,6,3,12],texture:"#0"},south:{uv:[9,6,12,12],texture:"#0"},west:{uv:[6,6,9,12],texture:"#0"},up:{uv:[6,6,3,0],texture:"#0"},down:{uv:[9,0,6,6],texture:"#0"}}}]).getMesh(D,St.none())}n.conduitRenderer=f;function d(D){return H=>new dt(void 0,{0:D.withPrefix("entity/shulker/").toString()},[{from:[0,0,0],to:[16,8,16],faces:{north:{uv:[4,11,8,13],texture:"#0"},east:{uv:[0,11,4,13],texture:"#0"},south:{uv:[12,11,16,13],texture:"#0"},west:{uv:[8,11,12,13],texture:"#0"},up:{uv:[8,11,4,7],texture:"#0"},down:{uv:[12,7,8,11],texture:"#0"}}},{from:[0,4,0],to:[16,16,16],faces:{north:{uv:[4,4,8,7],texture:"#0"},east:{uv:[0,4,4,7],texture:"#0"},south:{uv:[12,4,16,7],texture:"#0"},west:{uv:[8,4,12,7],texture:"#0"},up:{uv:[8,4,4,0],texture:"#0"},down:{uv:[12,0,8,4],texture:"#0"}}}]).getMesh(H,St.none())}n.shulkerBoxRenderer=d;const h=D=>({north:{uv:[.25,.25,5.25,10.25],texture:`#${D}`,tintindex:D},east:{uv:[0,.25,.25,10.25],texture:`#${D}`,tintindex:D},south:{uv:[5.5,.25,10.5,10.25],texture:`#${D}`,tintindex:D},west:{uv:[5.25,.25,5.5,10.25],texture:`#${D}`,tintindex:D},up:{uv:[5.25,.25,.25,0],texture:`#${D}`,tintindex:D},down:{uv:[10.25,0,5.25,.25],texture:`#${D}`,tintindex:D}});function g(D,H){return(j,O)=>{const X={0:"entity/banner_base"},Z=[...H.base],te=[D];return O==null||O.forEach((ve,pe)=>{const z=ie.parse(ve.getString("pattern")).path,re=ve.getString("color");pe++,X[pe]=`entity/banner/${z}`,Z.push(H.pattern(pe)),te.push(re)}),new dt(void 0,X,Z).getMesh(j,St.none(),ve=>xs[te[ve]])}}n.bannerRenderer=D=>g(D,{base:[{from:[-2,-8,6],to:[18,32,7],faces:h(0)},{from:[7,-12,7],to:[9,30,9],faces:{north:{uv:[11.5,.5,12,11],texture:"#0"},east:{uv:[11,.5,11.5,11],texture:"#0"},south:{uv:[12.5,.5,13,11],texture:"#0"},west:{uv:[12,.5,12.5,11],texture:"#0"},up:{uv:[12,.5,11.5,0],texture:"#0"},down:{uv:[12.5,0,12,.5],texture:"#0"}}},{from:[-2,30,7],to:[18,32,9],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:H=>({from:[-2,-8,6],to:[18,32,7],faces:h(H)})}),n.wallBannerRenderer=D=>g(D,{base:[{from:[-2,-8,-1.5],to:[18,32,-.5],faces:h(0)},{from:[-2,30,-3.5],to:[18,32,-1.5],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:H=>({from:[-2,-8,-1.5],to:[18,32,-.5],faces:h(H)})});function _(D){return new dt(void 0,{0:"entity/bell/bell_body"},[{from:[5,3,5],to:[11,10,11],faces:{north:{uv:[3,3,6,6.5],texture:"#0"},east:{uv:[0,3,3,6.5],texture:"#0"},south:{uv:[9,3,12,6.5],texture:"#0"},west:{uv:[6,3,9,6.5],texture:"#0"},up:{uv:[6,3,3,0],texture:"#0"},down:{uv:[9,0,6,3],texture:"#0"}}},{from:[4,10,4],to:[12,12,12],faces:{north:{uv:[4,10.5,8,11.5],texture:"#0"},east:{uv:[0,10.5,4,11.5],texture:"#0"},south:{uv:[12,10.5,16,11.5],texture:"#0"},west:{uv:[8,10.5,12,11.5],texture:"#0"},up:{uv:[8,10.5,4,6.5],texture:"#0"},down:{uv:[12,6.5,8,10.5],texture:"#0"}}}]).getMesh(D,St.none())}n.bellRenderer=_;function m(D){return(H,j)=>H==="foot"?new dt(void 0,{0:D.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{north:{uv:[5.5,5.5,9.5,7],rotation:180,texture:"#0"},east:{uv:[0,7,1.5,11],rotation:270,texture:"#0"},west:{uv:[5.5,7,7,11],rotation:90,texture:"#0"},up:{uv:[5.5,11,1.5,7],texture:"#0"},down:{uv:[11,7,7,11],texture:"#0"}}},{from:[0,0,0],to:[3,3,3],faces:{north:{uv:[12.5,5.25,13.25,6],texture:"#0"},east:{uv:[14.75,5.25,15.5,6],texture:"#0"},south:{uv:[14,5.25,14.75,6],texture:"#0"},west:{uv:[13.25,5.25,14,6],texture:"#0"},up:{uv:[13.25,4.5,14,5.25],texture:"#0"},down:{uv:[14,4.5,14.75,5.25],texture:"#0"}}},{from:[13,0,0],to:[16,3,3],faces:{north:{uv:[13.25,3.75,14,4.5],texture:"#0"},east:{uv:[12.5,3.75,13.25,4.5],texture:"#0"},south:{uv:[14.75,3.75,15.5,4.5],texture:"#0"},west:{uv:[14,3.75,14.75,4.5],texture:"#0"},up:{uv:[13.25,3,14,3.75],texture:"#0"},down:{uv:[14,3,14.75,3.75],texture:"#0"}}}]).getMesh(j,St.none()):new dt(void 0,{0:D.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{east:{uv:[0,1.5,1.5,5.5],rotation:270,texture:"#0"},south:{uv:[1.5,0,5.5,1.5],rotation:180,texture:"#0"},west:{uv:[5.5,1.5,7,5.5],rotation:90,texture:"#0"},up:{uv:[5.5,5.5,1.5,1.5],texture:"#0"},down:{uv:[11,1.5,7,5.5],texture:"#0"}}},{from:[0,0,13],to:[3,3,16],faces:{north:{uv:[14.75,.75,15.5,1.5],texture:"#0"},east:{uv:[14,.75,14.75,1.5],texture:"#0"},south:{uv:[13.25,.75,14,1.5],texture:"#0"},west:{uv:[12.5,.75,13.25,1.5],texture:"#0"},up:{uv:[13.25,0,14,.75],texture:"#0"},down:{uv:[14,0,14.75,.75],texture:"#0"}}},{from:[13,0,13],to:[16,3,16],faces:{north:{uv:[14,2.25,14.75,3],texture:"#0"},east:{uv:[13.25,2.25,14,3],texture:"#0"},south:{uv:[12.5,2.25,13.25,3],texture:"#0"},west:{uv:[14.75,2.25,15.5,3],texture:"#0"},up:{uv:[13.25,1.5,14,2.25],texture:"#0"},down:{uv:[14,1.5,14.75,2.25],texture:"#0"}}}]).getMesh(j,St.none())}n.bedRenderer=m;function p(D,H,j=""){return D.getProperty(H)??j}function M(D,H,j="0"){return parseInt(D.getProperty(H)??j)}const v=new Map(Object.entries({"minecraft:chest":n.chestRenderer(ie.create("normal")),"minecraft:ender_chest":n.chestRenderer(ie.create("ender")),"minecraft:trapped_chest":n.chestRenderer(ie.create("trapped"))})),y=new Map(Object.entries({"minecraft:skeleton_skull":n.headRenderer(ie.create("skeleton/skeleton"),2),"minecraft:wither_skeleton_skull":n.headRenderer(ie.create("skeleton/wither_skeleton"),2),"minecraft:zombie_head":n.headRenderer(ie.create("zombie/zombie"),1),"minecraft:creeper_head":n.headRenderer(ie.create("creeper/creeper"),2),"minecraft:dragon_head":n.dragonHeadRenderer(),"minecraft:piglin_head":n.piglinHeadRenderer(),"minecraft:player_head":n.headRenderer(ie.create("player/wide/steve"),1)})),P=["oak","spruce","birch","jungle","acacia","dark_oak","crimson","warped","mangrove","bamboo","cherry","pale_oak","poplar"],C=new Map(P.map(D=>[`minecraft:${D}_sign`,n.signRenderer(ie.create(D))])),T=new Map(P.map(D=>[`minecraft:${D}_wall_sign`,n.wallSignRenderer(ie.create(D))])),U=new Map(P.map(D=>[`minecraft:${D}_hanging_sign`,n.hangingSignRenderer(ie.create(D))])),b=new Map(P.map(D=>[`minecraft:${D}_wall_hanging_sign`,n.wallHangingSignRenderer(D)])),x=new Map(Object.keys(xs).map(D=>[`minecraft:${D}_shulker_box`,n.shulkerBoxRenderer(ie.create(`shulker_${D}`))])),E=new Map(Object.keys(xs).map(D=>[`minecraft:${D}_bed`,n.bedRenderer(ie.create(D))])),k=new Map(Object.keys(xs).map(D=>[`minecraft:${D}_banner`,n.bannerRenderer(D)])),I=new Map(Object.keys(xs).map(D=>[`minecraft:${D}_wall_banner`,n.wallBannerRenderer(D)]));function B(D,H,j,O){const X=new lt;D.is("water")&&X.merge(Bh("water",M(D,"level"),j,O,0)),D.is("lava")&&X.merge(Bh("lava",M(D,"level"),j,O));const Z=v.get(D.getName().toString());if(Z!==void 0){const ce=p(D,"facing","south"),q=ut();je(q,q,[8,8,8]),Gt(q,q,ce==="west"?Math.PI/2:ce==="south"?Math.PI:ce==="east"?Math.PI*3/2:0),je(q,q,[-8,-8,-8]),X.merge(Z(j).transform(q))}D.is("decorated_pot")&&X.merge(t(j));const te=y.get(D.getName().toString());if(te!==void 0){const ce=M(D,"rotation")/16*Math.PI*2,q=ut();je(q,q,[8,8,8]),Gt(q,q,ce),je(q,q,[-8,-8,-8]),X.merge(te(j).transform(q))}const ve=C.get(D.getName().toString());if(ve!==void 0){const ce=M(D,"rotation")/16*Math.PI*2,q=ut();je(q,q,[8,8,8]),Gt(q,q,ce),En(q,q,[2/3,2/3,2/3]),je(q,q,[-8,-8,-8]),X.merge(ve(j).transform(q))}const pe=T.get(D.getName().toString());if(pe!==void 0){const ce=p(D,"facing","south"),q=ut();je(q,q,[8,8,8]),Gt(q,q,ce==="west"?Math.PI/2:ce==="south"?Math.PI:ce==="east"?Math.PI*3/2:0),En(q,q,[2/3,2/3,2/3]),je(q,q,[-8,-8,-8]),X.merge(pe(j).transform(q))}const z=U.get(D.getName().toString());if(z!==void 0){const ce=p(D,"attached","false")==="true",q=M(D,"rotation")/16*Math.PI*2,Ee=ut();je(Ee,Ee,[8,8,8]),Gt(Ee,Ee,q),je(Ee,Ee,[-8,-8,-8]),X.merge(z(ce,j).transform(Ee))}const re=b.get(D.getName().toString());if(re!==void 0){const ce=p(D,"facing","south"),q=ut();je(q,q,[8,8,8]),Gt(q,q,ce==="west"?Math.PI/2:ce==="south"?Math.PI:ce==="east"?Math.PI*3/2:0),je(q,q,[-8,-8,-8]),X.merge(re(j).transform(q))}D.is("conduit")&&X.merge(f(j));const de=x.get(D.getName().toString());if(de!==void 0){const ce=p(D,"facing","up"),q=ut();je(q,q,[8,8,8]),ce==="down"?Bs(q,q,Math.PI):ce!=="up"&&(Gt(q,q,ce==="east"?Math.PI/2:ce==="north"?Math.PI:ce==="west"?Math.PI*3/2:0),Bs(q,q,Math.PI/2)),je(q,q,[-8,-8,-8]),X.merge(de(j).transform(q))}if(D.is("bell")){const ce=ut();je(ce,ce,[8,8,8]),En(ce,ce,[1,-1,-1]),je(ce,ce,[-8,-8,-8]),X.merge(_(j).transform(ce))}const oe=E.get(D.getName().toString());if(oe!==void 0){const ce=p(D,"part","head"),q=p(D,"facing","south"),Ee=ut();je(Ee,Ee,[8,8,8]),Gt(Ee,Ee,q==="east"?Math.PI/2:q==="north"?Math.PI:q==="west"?Math.PI*3/2:0),je(Ee,Ee,[-8,-8,-8]),X.merge(oe(ce,j).transform(Ee))}const Te=k.get(D.getName().toString());if(Te!==void 0){const ce=M(D,"rotation")/16*Math.PI*2,q=ut();je(q,q,[8,24,8]),Gt(q,q,ce),En(q,q,[2/3,2/3,2/3]),je(q,q,[-8,-24,-8]),X.merge(Te(j,H==null?void 0:H.getList("patterns",_e.Compound)).transform(q))}const he=I.get(D.getName().toString());if(he!==void 0){const ce=p(D,"facing","south"),q=ut();je(q,q,[8,8,8]),Gt(q,q,ce==="east"?Math.PI/2:ce==="north"?Math.PI:ce==="west"?Math.PI*3/2:0),En(q,q,[2/3,2/3,2/3]),je(q,q,[-8,-23.2,-8]),X.merge(he(j,H==null?void 0:H.getList("patterns",_e.Compound)).transform(q))}const N=ut();return En(N,N,[.0625,.0625,.0625]),X.transform(N)}C.clear(),T.clear(),U.clear(),b.clear(),P.forEach(D=>{C.set(`minecraft:${D}_sign`,n.signRenderer(ie.create(D))),T.set(`minecraft:${D}_wall_sign`,n.wallSignRenderer(ie.create(D))),U.set(`minecraft:${D}_hanging_sign`,n.hangingSignRenderer(ie.create(D))),b.set(`minecraft:${D}_wall_hanging_sign`,n.wallHangingSignRenderer(D))}),n.getBlockMesh=B})(rt||(rt={}));class Xr{constructor(e,t,i,r=16,s=!0){L(this,"gl");L(this,"structure");L(this,"resources");L(this,"chunks",[]);L(this,"chunkSize");L(this,"meshesDirty",!0);L(this,"meshCache",[]);L(this,"emissiveLights",[]);L(this,"emissiveLightsByChunk",new Map);L(this,"emissiveDirty",!0);L(this,"blockPropsCache",new WeakMap);L(this,"buildToken",0);this.gl=e,this.structure=t,this.resources=i,this.chunkSize=typeof r=="number"?[r,r,r]:r,s&&this.updateStructureBuffers()}setStructure(e,t){this.structure=e,(t==null?void 0:t.rebuild)!==!1&&this.updateStructureBuffers()}updateStructureBuffers(e){if(!this.structure)return;this.buildToken+=1;const t=this.buildChunkFilter(e);this.markDirty(),this.prepareRebuild(e);for(const i of this.structure.getBlocks())this.processBlock(i,t);this.finalizeRebuild(e)}async updateStructureBuffersAsync(e){var c,l;if(!this.structure)return;const t=++this.buildToken,i=this.buildChunkFilter(e==null?void 0:e.chunkPositions);this.markDirty(),this.prepareRebuild(e==null?void 0:e.chunkPositions);const r=this.structure.getBlocks(),s=r.length,a=(e==null?void 0:e.timeSliceMs)??8;let o=this.now();for(let u=0;u<r.length;u++){if(t!==this.buildToken)return;this.processBlock(r[u],i),!(u&1023)&&this.now()-o>=a&&((c=e==null?void 0:e.onProgress)==null||c.call(e,u+1,s),await this.yieldControl(),o=this.now())}t===this.buildToken&&(await this.finalizeRebuildAsync(e==null?void 0:e.chunkPositions,a),(l=e==null?void 0:e.onProgress)==null||l.call(e,s,s))}getMeshes(){return this.getMeshEntries().map(e=>e.mesh)}cancelPendingBuilds(){this.buildToken+=1}getMeshesInRange(e,t){return this.getMeshEntriesInRange(e,t).map(i=>i.mesh)}getMeshEntries(){return(this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),this.meshCache}getMeshEntriesInRange(e,t){if((this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),t===void 0)return this.meshCache;const i=t*t;return this.meshCache.filter(s=>{const a=[s.origin[0]+this.chunkSize[0]*.5,s.origin[1]+this.chunkSize[1]*.5,s.origin[2]+this.chunkSize[2]*.5],o=a[0]-e[0],c=a[1]-e[1],l=a[2]-e[2];return o*o+c*c+l*l<=i})}needsCull(e,t){var s;const i=(s=this.structure.getBlock(Ct.towards(e.pos,t)))==null?void 0:s.state;if(!i)return!1;const r=this.resources.getBlockFlags(i.getName());return e.state.getName().equals(i.getName())&&(r!=null&&r.self_culling)?!0:r!=null&&r.opaque?!(t===Be.UP&&e.state.isWaterlogged()):e.state.isWaterlogged()&&i.isWaterlogged()}isFullyOccluded(e){var i;const t=[Be.UP,Be.DOWN,Be.NORTH,Be.SOUTH,Be.EAST,Be.WEST];for(const r of t){const s=(i=this.structure.getBlock(Ct.towards(e.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=this.resources.getBlockFlags(s.getName());if(!(a!=null&&a.opaque))return!1}return!0}finishChunkMesh(e,t,i,r,s){const a=ut();je(a,a,t),e.transform(a);const o=this.resources.getBlockFlags(i);let c=0;if(o!=null&&o.emissive){const l=o.emissiveConditional;if(l){const u=r[l];(u===void 0||u==="true")&&(c=o.emissiveIntensity??1)}else c=o.emissiveIntensity??1}if(c>0){const l=this.emissiveLightsByChunk.get(s)??[];l.push({position:[t[0]+.5,t[1]+.5,t[2]+.5],intensity:c,color:[1,.85,.6]}),this.emissiveLightsByChunk.set(s,l),this.emissiveDirty=!0}for(const l of e.quads){const u=l.normal();l.forEach(f=>{f.normal=u,f.blockPos=new We(t[0],t[1],t[2]),f.emissive=c})}}getEmissiveLights(){if(this.emissiveDirty){const e=[];this.emissiveLightsByChunk.forEach(t=>e.push(...t)),this.emissiveLights=e,this.emissiveDirty=!1}return this.emissiveLights}clearEmissiveLights(e){const t=this.chunkKey(e);this.emissiveLightsByChunk.has(t)&&(this.emissiveLightsByChunk.delete(t),this.emissiveDirty=!0)}prepareRebuild(e){if(!e){this.emissiveLightsByChunk.clear(),this.emissiveLights=[],this.emissiveDirty=!0,this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.clear(),r.transparentMesh.clear())})));return}e.forEach(t=>this.clearEmissiveLights(t)),e.forEach(t=>{const i=this.getChunk(t);i.mesh.clear(),i.transparentMesh.clear()})}finalizeRebuild(e){if(!e){this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),r.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}))})));return}e.forEach(t=>{const i=this.getChunk(t);i.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),i.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW})})}async finalizeRebuildAsync(e,t=8){let i=this.now();const r=async()=>{this.now()-i>=t&&(await this.yieldControl(),i=this.now())};if(!e){for(const s of this.chunks)if(s){for(const a of s)if(a)for(const o of a)o&&(o.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),o.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r())}return}for(const s of e){const a=this.getChunk(s);a.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),a.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r()}}processBlock(e,t){var c;const i=e.state.getName(),r=this.getBlockProps(e.state);if(this.isFullyOccluded(e))return;const s=[Math.floor(e.pos[0]/this.chunkSize[0]),Math.floor(e.pos[1]/this.chunkSize[1]),Math.floor(e.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(t&&!t.has(a))return;const o=this.getChunk(s);try{const l=this.resources.getBlockDefinition(i),u={up:this.needsCull(e,Be.UP),down:this.needsCull(e,Be.DOWN),west:this.needsCull(e,Be.WEST),east:this.needsCull(e,Be.EAST),north:this.needsCull(e,Be.NORTH),south:this.needsCull(e,Be.SOUTH)},f=new lt;l&&f.merge(l.getMesh(i,r,this.resources,this.resources,u));const d=rt.getBlockMesh(e.state,e.nbt,this.resources,u);d.isEmpty()||f.merge(d),f.isEmpty()||(this.finishChunkMesh(f,e.pos,i,r,a),(c=this.resources.getBlockFlags(e.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(f):o.mesh.merge(f))}catch(l){console.error(`Error rendering block ${i}`,l)}}getBlockProps(e){const t=this.blockPropsCache.get(e);if(t)return t;const i={...e.getProperties()},r=this.resources.getDefaultBlockProperties(e.getName())??{};return Object.entries(r).forEach(([s,a])=>{i[s]===void 0&&(i[s]=a)}),this.blockPropsCache.set(e,i),i}buildChunkFilter(e){if(!e)return null;const t=new Set;return e.forEach(i=>{t.add(this.chunkKey(i))}),t}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}chunkKey(e){return`${e[0]},${e[1]},${e[2]}`}getChunk(e){const t=Math.abs(e[0])*2+(e[0]<0?1:0),i=Math.abs(e[1])*2+(e[1]<0?1:0),r=Math.abs(e[2])*2+(e[2]<0?1:0);if(this.chunks[t]||(this.chunks[t]=[]),this.chunks[t][i]||(this.chunks[t][i]=[]),!this.chunks[t][i][r]){const s=[e[0]*this.chunkSize[0],e[1]*this.chunkSize[1],e[2]*this.chunkSize[2]];this.chunks[t][i][r]={mesh:new lt,transparentMesh:new lt,origin:s}}return this.chunks[t][i][r]}rebuildMeshCache(){const e=[],t=[];this.chunks.forEach(i=>i.forEach(r=>r.forEach(s=>{s&&(s.mesh.isEmpty()||e.push({mesh:s.mesh,origin:s.origin,transparent:!1}),s.transparentMesh.isEmpty()||t.push({mesh:s.transparentMesh,origin:s.origin,transparent:!0}))}))),this.meshCache=e.concat(t),this.meshesDirty=!1}markDirty(){this.meshesDirty=!0,this.meshCache=[]}}class Td{constructor(e,t,i){L(this,"gl");L(this,"program");this.gl=e,this.program=this.initShaderProgram(t,i)}getProgram(){return this.program}initShaderProgram(e,t){const i=this.loadShader(this.gl.VERTEX_SHADER,e);if(!i)throw new Error("Failed to create vertex shader");const r=this.loadShader(this.gl.FRAGMENT_SHADER,t);if(!r)throw new Error("Failed to create fragment shader");const s=this.gl.createProgram();if(!s)throw new Error("Failed to create shader program");if(this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS))throw new Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(s)}`);return s}loadShader(e,t){const i=this.gl.createShader(e);if(!i)throw new Error("Failed to create shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)){const r=new Error(`Compiling ${e===this.gl.VERTEX_SHADER?"vertex":"fragment"} shader: ${this.gl.getShaderInfoLog(i)}`);throw this.gl.deleteShader(i),r}return i}}const DS=`
  attribute vec4 vertPos;
  attribute vec2 texCoord;
  attribute vec4 texLimit;
  attribute vec3 vertColor;
  attribute vec3 normal;

  uniform mat4 mView;
  uniform mat4 mProj;

  varying highp vec2 vTexCoord;
  varying highp vec4 vTexLimit;
  varying highp vec3 vTintColor;
  varying highp float vLighting;

  void main(void) {
    gl_Position = mProj * mView * vertPos;
    vTexCoord = texCoord;
	vTexLimit = texLimit;
    vTintColor = vertColor;
    vLighting = normal.y * 0.2 + abs(normal.z) * 0.1 + 0.8;
  }
`,IS=`
  precision highp float;
  varying highp vec2 vTexCoord;
  varying highp vec4 vTexLimit;
  varying highp vec3 vTintColor;
  varying highp float vLighting;

  uniform sampler2D sampler;
  uniform highp float pixelSize;

  void main(void) {
		vec4 texColor = texture2D(sampler, clamp(vTexCoord,
			vTexLimit.xy + vec2(0.5, 0.5) * pixelSize,
			vTexLimit.zw - vec2(0.5, 0.5) * pixelSize
		));
		if(texColor.a < 0.01) discard;
		gl_FragColor = vec4(texColor.xyz * vTintColor * vLighting, texColor.a);
  }
`;class Ad{constructor(e){L(this,"gl");L(this,"shaderProgram");L(this,"projMatrix");L(this,"activeShader");L(this,"pixelSize",0);this.gl=e,this.shaderProgram=new Td(e,DS,IS).getProgram(),this.activeShader=this.shaderProgram,this.projMatrix=this.getPerspective(),this.initialize()}setViewport(e,t,i,r){this.gl.viewport(e,t,i,r),this.projMatrix=this.getPerspective()}getPerspective(){const e=70*Math.PI/180,t=this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,i=ut();return dS(i,e,t,.1,500),i}initialize(){this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK)}setShader(e){this.gl.useProgram(e),this.activeShader=e}setVertexAttr(e,t,i){if(i===void 0)throw new Error(`Expected buffer for ${e}`);const r=this.gl.getAttribLocation(this.activeShader,e);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.vertexAttribPointer(r,t,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(r)}setUniform(e,t){const i=this.gl.getUniformLocation(this.activeShader,e);this.gl.uniformMatrix4fv(i,!1,t)}setTexture(e,t){this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.pixelSize=t??0}createAtlasTexture(e){const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture");return this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),t}prepareDraw(e){this.setUniform("mView",e),this.setUniform("mProj",this.projMatrix);const t=this.gl.getUniformLocation(this.activeShader,"pixelSize");this.gl.uniform1f(t,this.pixelSize)}drawMesh(e,t){if(e.quadVertices()>0){if(t.pos&&this.setVertexAttr("vertPos",3,e.posBuffer),t.color&&this.setVertexAttr("vertColor",3,e.colorBuffer),t.texture&&(this.setVertexAttr("texCoord",2,e.textureBuffer),this.setVertexAttr("texLimit",4,e.textureLimitBuffer)),t.normal&&this.setVertexAttr("normal",3,e.normalBuffer),t.blockPos&&this.setVertexAttr("blockPos",3,e.blockPosBuffer),!e.indexBuffer)throw new Error("Expected index buffer");this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,e.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,e.quadIndices(),e.indexType??this.gl.UNSIGNED_SHORT,0)}e.lineVertices()>0&&(t.pos&&this.setVertexAttr("vertPos",3,e.linePosBuffer),t.color&&this.setVertexAttr("vertColor",3,e.lineColorBuffer),this.gl.drawArrays(this.gl.LINES,0,e.lineVertices()))}}class So extends Ad{constructor(t,i,r,s={}){super(t);L(this,"item");L(this,"resources");L(this,"mesh");L(this,"atlasTexture");this.item=i,this.resources=r,this.updateMesh(s),this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas())}setItem(t,i={}){this.item=t,this.updateMesh(i)}updateMesh(t={}){this.mesh=So.getItemMesh(this.item,this.resources,t),this.mesh.computeNormals(),this.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0})}static getItemMesh(t,i,r){var c;const s=(c=t.getComponent("item_model",i))==null?void 0:c.getAsString();if(s===void 0)return new lt;const a=i.getItemModel(ie.parse(s));if(!a)throw new Error(`Item model ${s} does not exist (defined by item ${t.toString()})`);return a.getMesh(t,i,r)}getPerspective(){const t=ut();return mS(t,0,16,0,16,.1,500),t}drawItem(){var i,r;const t=ut();je(t,t,[0,0,-32]),this.setShader(this.shaderProgram),this.setTexture(this.atlasTexture,(r=(i=this.resources).getPixelSize)==null?void 0:r.call(i)),this.prepareDraw(t),this.drawMesh(this.mesh,{pos:!0,color:!0,texture:!0,normal:!0})}}const Ki=[0,0,0];var lo;(function(n){function e(u){var h;const f=se.readObject(u)??{},d=(h=se.readString(f.type))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"constant":return new t(Ze.fromJson(f.value)??Ki);case"dye":return new i(Ze.fromJson(f.default)??Ki);case"grass":return new r(se.readNumber(f.temperature)??0,se.readNumber(f.downfall)??0);case"firework":return new s(Ze.fromJson(f.default)??Ki);case"potion":return new a(Ze.fromJson(f.default)??Ki);case"map_color":return new o(Ze.fromJson(f.default)??Ki);case"custom_model_data":return new c(se.readInt(f.index)??0,Ze.fromJson(f.default)??Ki);case"team":return new l(Ze.fromJson(f.default)??Ki);default:throw new Error(`Invalid item tint type ${d}`)}}n.fromJson=e;class t{constructor(f){L(this,"value");this.value=f}getTint(f){return this.value}}n.Constant=t;class i{constructor(f){L(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("dyed_color",d);return h?h.isCompound()?Ze.intToRgb(h.getNumber("rgb")):Ze.intToRgb(h.getAsNumber()):this.default_color}}n.Dye=i;class r{constructor(f,d){L(this,"temperature");L(this,"downfall");this.temperature=f,this.downfall=d}getTint(f){return[124/255,189/255,107/255]}}n.Grass=r;class s{constructor(f){L(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("firework_explosion",d);if(!(h!=null&&h.isCompound()))return this.default_color;const g=h.get("colors");return!g||!g.isListOrArray()?this.default_color:(()=>{if(g.length===1){const v=g.get(0);return v?Ze.intToRgb(v.getAsNumber()):this.default_color}let[m,p,M]=[0,0,0];for(const v of g.getItems())m+=(v.getAsNumber()&16711680)>>16,p+=(v.getAsNumber()&65280)>>8,M+=(v.getAsNumber()&255)>>0;return m/=g.length,p/=g.length,M/=g.length,[m/255,p/255,M/255]})()}}n.Firework=s;class a{constructor(f){L(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("potion_contents",d);if(!h)return this.default_color;const g=Os.fromNbt(h);return Os.getColor(g)}}n.Potion=a;class o{constructor(f){L(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("map_color",d);return h?Ze.intToRgb(h.getAsNumber()):this.default_color}}n.MapColor=o;class c{constructor(f,d){L(this,"index");L(this,"default_color");this.index=f,this.default_color=d}getTint(f,d){const h=f.getComponent("custom_model_data",d);if(!(h!=null&&h.isCompound()))return this.default_color;const g=h.getList("colors").get(this.index);return g?Ze.fromNbt(g)??this.default_color:this.default_color}}n.CustomModelData=c;class l{constructor(f){L(this,"default_color");this.default_color=f}getTint(f,d,h){return h.context_entity_team_color??this.default_color}}n.Team=l})(lo||(lo={}));var Jl;(function(n){function e(h){var m;const g=se.readObject(h)??{},_=(m=se.readString(g.type))==null?void 0:m.replace(/^minecraft:/,"");switch(_){case"bed":return new t(ie.parse(se.readString(g.texture)??""));case"banner":return new i(se.readString(g.color)??"");case"conduit":return new r;case"chest":return new s(ie.parse(se.readString(g.texture)??""),se.readNumber(g.openness)??0);case"head":return new a(se.readString(g.kind)??"",typeof g.texture=="string"?ie.parse(g.texture):void 0,se.readNumber(g.animation)??0);case"player_head":return new a("player",void 0,0);case"shulker_box":return new o(ie.parse(se.readString(g.texture)??""),se.readNumber(g.openness)??0,se.readString(g.orientation)??"up");case"shield":return new c;case"trident":return new l;case"decorated_pot":return new u;case"standing_sign":return new f(se.readString(g.wood_type)??"",typeof g.texture=="string"?ie.parse(g.texture):void 0);case"hanging_sign":return new d(se.readString(g.wood_type)??"",typeof g.texture=="string"?ie.parse(g.texture):void 0);default:return console.warn(`[lodestone]: Unknown special model ${_}`),{getMesh:()=>new lt}}}n.fromJson=e;class t{constructor(g){L(this,"renderer");this.renderer=rt.bedRenderer(g)}getMesh(g,_){const m=this.renderer("head",_),p=this.renderer("foot",_),M=ut();return je(M,M,[0,0,-16]),m.merge(p.transform(M))}}class i{constructor(g){L(this,"renderer");this.renderer=rt.bannerRenderer(g)}getMesh(g,_){const m=g.getComponent("banner_patterns",void 0),p=ut();return je(p,p,[8,24,8]),Gt(p,p,Math.PI),En(p,p,[2/3,2/3,2/3]),je(p,p,[-8,-24,-8]),this.renderer(_,m instanceof jt?m:void 0).transform(p)}}class r{getMesh(g,_){return rt.conduitRenderer(_)}}class s{constructor(g,_){L(this,"renderer");this.renderer=rt.chestRenderer(g)}getMesh(g,_){const m=ut();return je(m,m,[8,8,8]),Gt(m,m,Math.PI),je(m,m,[-8,-8,-8]),this.renderer(_).transform(m)}}class a{constructor(g,_,m){L(this,"renderer");this.renderer=({skeleton:()=>rt.headRenderer(_??ie.create("skeleton/skeleton"),2),wither_skeleton:()=>rt.headRenderer(_??ie.create("skeleton/wither_skeleton"),2),zombie:()=>rt.headRenderer(_??ie.create("zombie/zombie"),1),creeper:()=>rt.headRenderer(_??ie.create("creeper/creeper"),2),dragon:()=>rt.dragonHeadRenderer(_),piglin:()=>rt.piglinHeadRenderer(_),player:()=>rt.headRenderer(_??ie.create("player/wide/steve"),1)}[g]??(()=>()=>new lt))()}getMesh(g,_){return this.renderer(_)}}class o{constructor(g,_,m){L(this,"renderer");this.renderer=rt.shulkerBoxRenderer(g)}getMesh(g,_){return this.renderer(_)}}class c{getMesh(g,_){const m=rt.shieldRenderer(_),p=ut();return je(p,p,[-3,1,0]),Bs(p,p,-10*Math.PI/180),Gt(p,p,-10*Math.PI/180),yd(p,p,-5*Math.PI/180),m.transform(p)}}class l{getMesh(g,_){return new lt}}class u{getMesh(g,_){return rt.decoratedPotRenderer(_)}}class f{constructor(g,_){L(this,"renderer");this.renderer=rt.signRenderer(_??ie.create(g))}getMesh(g,_){return this.renderer(_)}}class d{constructor(g,_){L(this,"renderer");this.renderer=rt.hangingSignRenderer(_??ie.create(g))}getMesh(g,_){return this.renderer(!1,_)}}})(Jl||(Jl={}));const zh=new lt;var Ql;(function(n){function e(u){var h,g;const f=se.readObject(u)??{},d=(h=se.readString(f.type))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"empty":return new t;case"model":return new i(ie.parse(se.readString(f.model)??""),se.readArray(f.tints,lo.fromJson)??[]);case"composite":return new r(se.readArray(f.models,n.fromJson)??[]);case"condition":return new s(s.propertyFromJson(f),n.fromJson(f.on_true),n.fromJson(f.on_false));case"select":return new a(a.propertyFromJson(f),new Map((g=se.readArray(f.cases,_=>se.readObject(_)??{}))==null?void 0:g.flatMap(_=>{const m=n.fromJson(_.model);return Array.isArray(_.when)?_.when.map(p=>[se.readString(p)??"",m]):[[se.readString(_.when)??"",m]]})),f.fallback?n.fromJson(f.fallback):void 0);case"range_dispatch":return new o(o.propertyFromJson(f),se.readNumber(f.scale)??1,se.readArray(f.entries,_=>{const m=se.readObject(_)??{};return{threshold:se.readNumber(m.threshold)??0,model:n.fromJson(m.model)}})??[],f.fallback?n.fromJson(f.fallback):void 0);case"special":return new c(Jl.fromJson(f.model),ie.parse(se.readString(f.base)??""));case"bundle/selected_item":return new l;default:return console.warn(`[lodestone]: Unknown item model type '${d}'`),{getMesh:()=>new lt}}}n.fromJson=e;class t{getMesh(f,d,h){return new lt}}n.Empty=t;class i{constructor(f,d){L(this,"modelId");L(this,"tints");this.modelId=f,this.tints=d}getMesh(f,d,h){const g=d.getBlockModel(this.modelId);if(!g)return console.warn(`[lodestone]: Model '${this.modelId}' does not exist`),new lt;const _=p=>p<this.tints.length?this.tints[p].getTint(f,d,h):[1,1,1],m=g.getMesh(d,St.none(),_);return m.transform(g.getDisplayTransform(h.display_context??"gui")),m}}n.Model=i;class r{constructor(f){L(this,"models");this.models=f}getMesh(f,d,h){const g=new lt;return this.models.forEach(_=>g.merge(_.getMesh(f,d,h))),g}}n.Composite=r;class s{constructor(f,d,h){L(this,"property");L(this,"onTrue");L(this,"onFalse");this.property=f,this.onTrue=d,this.onFalse=h}getMesh(f,d,h){return(this.property(f,d,h)?this.onTrue:this.onFalse).getMesh(f,d,h)}static propertyFromJson(f){var h;const d=(h=se.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"fishing_rod/cast":case"selected":case"carried":case"extended_view":return(M,v,y)=>y[d]??!1;case"view_entity":return(M,v,y)=>y.context_entity_is_view_entity??!1;case"using_item":return(M,v,y)=>(y.use_duration??-1)>=0;case"bundle/has_selected_item":return(M,v,y)=>(y["bundle/selected_item"]??-1)>=0;case"broken":return(M,v,y)=>{var T,U;const P=(T=M.getComponent("damage",v))==null?void 0:T.getAsNumber(),C=(U=M.getComponent("max_damage",v))==null?void 0:U.getAsNumber();return P!==void 0&&C!==void 0&&P>=C-1};case"damaged":return(M,v,y)=>{var T,U;const P=(T=M.getComponent("damage",v))==null?void 0:T.getAsNumber(),C=(U=M.getComponent("max_damage",v))==null?void 0:U.getAsNumber();return P!==void 0&&C!==void 0&&P>=1};case"has_component":const g=ie.parse(se.readString(f.component)??""),_=se.readBoolean(f.ignore_default)??!1;return(M,v,y)=>M.hasComponent(g,_?void 0:v);case"keybind_down":const m=se.readString(f.keybind)??"";return(M,v,y)=>{var P;return((P=y.keybind_down)==null?void 0:P.includes(m))??!1};case"custom_model_data":const p=se.readInt(f.index)??0;return(M,v,y)=>{const P=M.getComponent("custom_model_data",v);if(!(P!=null&&P.isCompound()))return!1;const C=P.getList("flags").getNumber(p);return C!==void 0&&C!==0};default:return console.warn(`[lodestone]: Unknown condition property '${d}'`),()=>!1}}}n.Condition=s;class a{constructor(f,d,h){L(this,"property");L(this,"cases");L(this,"fallback");this.property=f,this.cases=d,this.fallback=h}getMesh(f,d,h){var _;const g=this.property(f,d,h);return((_=(g!==null?this.cases.get(g):void 0)??this.fallback)==null?void 0:_.getMesh(f,d,h))??zh}static propertyFromJson(f){var h;const d=(h=se.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"main_hand":return(p,M,v)=>v.main_hand??"right";case"display_context":return(p,M,v)=>v.display_context??"gui";case"context_dimension":return(p,M,v)=>{var y;return((y=v.context_dimension)==null?void 0:y.toString())??null};case"charge_type":const g=ie.create("firework_rocket");return(p,M,v)=>{const y=p.getComponent("charged_projectiles",M);return!(y!=null&&y.isList())||y.length===0?"none":y.filter(P=>P.isCompound()?ie.parse(P.getString("id")).equals(g):!1).length>0?"rocket":"arrow"};case"trim_material":return(p,M,v)=>{const y=p.getComponent("trim",M);return y!=null&&y.isCompound()?ie.parse(y.getString("material")).toString():null};case"block_state":const _=se.readString(f.block_state_property)??"";return(p,M,v)=>{const y=p.getComponent("block_state",M);return y!=null&&y.isCompound()?y.getString(_):null};case"local_time":return(p,M,v)=>"NOT IMPLEMENTED";case"context_entity_type":return(p,M,v)=>{var y;return((y=v.context_entity_type)==null?void 0:y.toString())??null};case"custom_model_data":const m=se.readInt(f.index)??0;return(p,M,v)=>{const y=p.getComponent("custom_model_data",M);if(!(y!=null&&y.isCompound()))return null;const P=y.getList("strings");return P.length<=m?null:P.getString(m)};default:return console.warn(`[lodestone]: Unknown select property '${d}'`),()=>null}}}n.Select=a;class o{constructor(f,d,h,g){L(this,"property");L(this,"scale");L(this,"fallback");L(this,"entries");this.property=f,this.scale=d,this.fallback=g,this.entries=h.sort((_,m)=>_.threshold-m.threshold)}getMesh(f,d,h){const g=this.property(f,d,h)*this.scale;let _=this.fallback;for(const m of this.entries)if(m.threshold<=g)_=m.model;else break;return(_==null?void 0:_.getMesh(f,d,h))??zh}static propertyFromJson(f){var h;const d=(h=se.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"bundle/fullness":let g=function(v,y){const P=v.getComponent("bundle_contents",y);return P!=null&&P.isListOrArray()?P.map(T=>T.isCompound()?ai.fromNbt(T):void 0).reduce((T,U)=>{var E;if(U===void 0)return T;if(U.hasComponent("bundle_contents",y))return T+g(U,y)+1/16;const b=U.getComponent("bees",y);if(b!=null&&b.isListOrArray()&&b.length>0)return T+1;const x=((E=U.getComponent("max_stack_size",y))==null?void 0:E.getAsNumber())??1;return T+U.count/x},0):0};return(v,y,P)=>g(v,y);case"damage":{const v=se.readBoolean(f.normalize)??!0;return(y,P,C)=>{var b,x;const T=((b=y.getComponent("max_damage",P))==null?void 0:b.getAsNumber())??0,U=Ai(((x=y.getComponent("damage",P))==null?void 0:x.getAsNumber())??0,0,T);return v?T>0?Ai(U/T,0,1):0:Ai(U,0,T)}}case"count":{const v=se.readBoolean(f.normalize)??!0;return(y,P,C)=>{var U;const T=((U=y.getComponent("max_stack_size",P))==null?void 0:U.getAsNumber())??1;return v?Ai(y.count/T,0,1):Ai(y.count,0,T)}}case"cooldown":return(v,y,P)=>{var b;const C=v.getComponent("use_cooldown",y),T=C!=null&&C.isCompound()?C.getString("cooldown_group"):"",U=C!=null&&C.isCompound()&&T?ie.parse(T):v.id;return((b=P.cooldown_percentage)==null?void 0:b[U.toString()])??0};case"time":switch(se.readString(f.source)??"daytime"){case"moon_phase":return(v,y,P)=>(P.game_time??0)/24e3%8/8;case"random":return(v,y,P)=>Math.random();default:return(v,y,P)=>{const T=(P.game_time??0)/24e3%1-.25,U=.5-Math.cos(T*Math.PI)/2;return(T*2+U)/3}}case"compass":return(v,y,P)=>P.compass_angle??0;case"crossbow/pull":return(v,y,P)=>P["crossbow/pull"]??0;case"use_duration":const m=se.readBoolean(f.remaining)??!0;return(v,y,P)=>P.use_duration===void 0||P.use_duration<0?0:m?Math.max((P.max_use_duration??0)-P.use_duration,0):P.use_duration;case"use_cycle":const p=se.readNumber(f.period)??1;return(v,y,P)=>P.use_duration===void 0||P.use_duration<0||p<=0?0:Math.max((P.max_use_duration??0)-(P.use_duration??0),0)%p;case"custom_model_data":const M=se.readInt(f.index)??0;return(v,y,P)=>{const C=v.getComponent("custom_model_data",y);return C!=null&&C.isCompound()?C.getList("floats").getNumber(M):0};default:return console.warn(`[lodestone]: Unknown range dispatch property '${d}'`),()=>0}}}n.RangeDispatch=o;class c{constructor(f,d){L(this,"specialModel");L(this,"base");this.specialModel=f,this.base=d}getMesh(f,d,h){const g=this.specialModel.getMesh(f,d),_=d.getBlockModel(this.base);return _?(g.transform(_.getDisplayTransform(h.display_context??"gui")),g):(console.warn(`[lodestone]: Special model base '${this.base}' does not exist`),new lt)}}n.Special=c;class l{getMesh(f,d,h){const g=h["bundle/selected_item"];if(g===void 0||g<0)return new lt;const _=f.getComponent("bundle_contents",d);if(!(_!=null&&_.isListOrArray()))return new lt;const m=_.get(g);if(m===void 0||!m.isCompound())return new lt;const p=ai.fromNbt(m);return So.getItemMesh(p,d,{...h,"bundle/selected_item":-1,selected:!1,carried:!1,use_duration:-1})}}n.BundleSelectedItem=l})(Ql||(Ql={}));const Tl=256,Hh=2,US=Hh*Hh,Na=(n,e,t=1)=>{const i=new Pf(n,Math.max(1,e),Math.max(1,t),Wt,Pn);return i.needsUpdate=!0,i.magFilter=xt,i.minFilter=xt,i.wrapS=Rn,i.wrapT=Rn,i.flipY=!1,i},Le={direction:[-.5,.25,.5],color:[1,.75,.45],ambientColor:[.25,.4,.6],fillColor:[.35,.28,.5],rimColor:[1,.55,.25],intensity:1.35,ambientIntensity:.55,fillIntensity:.3,rimIntensity:.55,horizonFalloff:.7,exposure:1.15,sky:{zenithColor:[.12,.28,.56],horizonColor:[1,.55,.25],groundColor:[.25,.2,.25],sunGlowColor:[1,.45,.15],sunGlowIntensity:.6,sunGlowExponent:6,stars:{enabled:!1,density:.003,brightness:.6}},disc:{size:35,distance:180,coreColor:[1,.98,.9],glowColor:[1,.55,.15],coreIntensity:2.8,glowIntensity:3.5,softness:.25},fog:{color:[.85,.6,.4],density:2e-4,heightFalloff:.001},shadow:{enabled:!0,mapSize:2048,bias:5e-4,normalBias:.02,intensity:.5,softness:3,frustumSize:100},postProcess:{enabled:!1,ao:{enabled:!0,intensity:.5,radius:.5,samples:16},bloom:{enabled:!1,threshold:.8,intensity:.4,radius:.6},godRays:{enabled:!1,intensity:.4,decay:.95,density:.8,samples:60}},emissive:{range:16,intensity:3.5,tint:[1,.85,.6]}};function Gh(n){var t,i,r,s,a,o,c,l,u,f,d,h,g,_,m,p,M,v,y,P,C,T,U,b,x,E,k,I,B,D,H,j,O,X,Z,te,ve,pe,z,re,de,oe,Te,he,N,ce,q,Ee,Me,De,be,ze,st,R,w,F,Y,ee,ne;const e=xi((n==null?void 0:n.direction)??Mn(...Le.direction));return _S(e)<1e-5&&vS(e,0,1,0),Sd(e,e),{direction:e,color:(n==null?void 0:n.color)??Le.color,ambientColor:(n==null?void 0:n.ambientColor)??Le.ambientColor,fillColor:(n==null?void 0:n.fillColor)??Le.fillColor,rimColor:(n==null?void 0:n.rimColor)??Le.rimColor,intensity:(n==null?void 0:n.intensity)??Le.intensity,ambientIntensity:(n==null?void 0:n.ambientIntensity)??Le.ambientIntensity,fillIntensity:(n==null?void 0:n.fillIntensity)??Le.fillIntensity,rimIntensity:(n==null?void 0:n.rimIntensity)??Le.rimIntensity,horizonFalloff:(n==null?void 0:n.horizonFalloff)??Le.horizonFalloff,exposure:(n==null?void 0:n.exposure)??Le.exposure,sky:{zenithColor:((t=n==null?void 0:n.sky)==null?void 0:t.zenithColor)??Le.sky.zenithColor,horizonColor:((i=n==null?void 0:n.sky)==null?void 0:i.horizonColor)??Le.sky.horizonColor,groundColor:((r=n==null?void 0:n.sky)==null?void 0:r.groundColor)??Le.sky.groundColor,sunGlowColor:((s=n==null?void 0:n.sky)==null?void 0:s.sunGlowColor)??Le.sky.sunGlowColor,sunGlowIntensity:((a=n==null?void 0:n.sky)==null?void 0:a.sunGlowIntensity)??Le.sky.sunGlowIntensity,sunGlowExponent:((o=n==null?void 0:n.sky)==null?void 0:o.sunGlowExponent)??Le.sky.sunGlowExponent,stars:{enabled:((l=(c=n==null?void 0:n.sky)==null?void 0:c.stars)==null?void 0:l.enabled)??Le.sky.stars.enabled,density:((f=(u=n==null?void 0:n.sky)==null?void 0:u.stars)==null?void 0:f.density)??Le.sky.stars.density,brightness:((h=(d=n==null?void 0:n.sky)==null?void 0:d.stars)==null?void 0:h.brightness)??Le.sky.stars.brightness}},disc:{size:((g=n==null?void 0:n.disc)==null?void 0:g.size)??Le.disc.size,distance:((_=n==null?void 0:n.disc)==null?void 0:_.distance)??Le.disc.distance,coreColor:((m=n==null?void 0:n.disc)==null?void 0:m.coreColor)??Le.disc.coreColor,glowColor:((p=n==null?void 0:n.disc)==null?void 0:p.glowColor)??Le.disc.glowColor,coreIntensity:((M=n==null?void 0:n.disc)==null?void 0:M.coreIntensity)??Le.disc.coreIntensity,glowIntensity:((v=n==null?void 0:n.disc)==null?void 0:v.glowIntensity)??Le.disc.glowIntensity,softness:((y=n==null?void 0:n.disc)==null?void 0:y.softness)??Le.disc.softness},fog:{color:((P=n==null?void 0:n.fog)==null?void 0:P.color)??Le.fog.color,density:((C=n==null?void 0:n.fog)==null?void 0:C.density)??Le.fog.density,heightFalloff:((T=n==null?void 0:n.fog)==null?void 0:T.heightFalloff)??Le.fog.heightFalloff},shadow:{enabled:((U=n==null?void 0:n.shadow)==null?void 0:U.enabled)??Le.shadow.enabled,mapSize:((b=n==null?void 0:n.shadow)==null?void 0:b.mapSize)??Le.shadow.mapSize,bias:((x=n==null?void 0:n.shadow)==null?void 0:x.bias)??Le.shadow.bias,normalBias:((E=n==null?void 0:n.shadow)==null?void 0:E.normalBias)??Le.shadow.normalBias,intensity:((k=n==null?void 0:n.shadow)==null?void 0:k.intensity)??Le.shadow.intensity,softness:((I=n==null?void 0:n.shadow)==null?void 0:I.softness)??Le.shadow.softness,frustumSize:((B=n==null?void 0:n.shadow)==null?void 0:B.frustumSize)??Le.shadow.frustumSize},postProcess:{enabled:((D=n==null?void 0:n.postProcess)==null?void 0:D.enabled)??Le.postProcess.enabled,ao:{enabled:((j=(H=n==null?void 0:n.postProcess)==null?void 0:H.ao)==null?void 0:j.enabled)??Le.postProcess.ao.enabled,intensity:((X=(O=n==null?void 0:n.postProcess)==null?void 0:O.ao)==null?void 0:X.intensity)??Le.postProcess.ao.intensity,radius:((te=(Z=n==null?void 0:n.postProcess)==null?void 0:Z.ao)==null?void 0:te.radius)??Le.postProcess.ao.radius,samples:((pe=(ve=n==null?void 0:n.postProcess)==null?void 0:ve.ao)==null?void 0:pe.samples)??Le.postProcess.ao.samples},bloom:{enabled:((re=(z=n==null?void 0:n.postProcess)==null?void 0:z.bloom)==null?void 0:re.enabled)??Le.postProcess.bloom.enabled,threshold:((oe=(de=n==null?void 0:n.postProcess)==null?void 0:de.bloom)==null?void 0:oe.threshold)??Le.postProcess.bloom.threshold,intensity:((he=(Te=n==null?void 0:n.postProcess)==null?void 0:Te.bloom)==null?void 0:he.intensity)??Le.postProcess.bloom.intensity,radius:((ce=(N=n==null?void 0:n.postProcess)==null?void 0:N.bloom)==null?void 0:ce.radius)??Le.postProcess.bloom.radius},godRays:{enabled:((Ee=(q=n==null?void 0:n.postProcess)==null?void 0:q.godRays)==null?void 0:Ee.enabled)??Le.postProcess.godRays.enabled,intensity:((De=(Me=n==null?void 0:n.postProcess)==null?void 0:Me.godRays)==null?void 0:De.intensity)??Le.postProcess.godRays.intensity,decay:((ze=(be=n==null?void 0:n.postProcess)==null?void 0:be.godRays)==null?void 0:ze.decay)??Le.postProcess.godRays.decay,density:((R=(st=n==null?void 0:n.postProcess)==null?void 0:st.godRays)==null?void 0:R.density)??Le.postProcess.godRays.density,samples:((F=(w=n==null?void 0:n.postProcess)==null?void 0:w.godRays)==null?void 0:F.samples)??Le.postProcess.godRays.samples}},emissive:{range:((Y=n==null?void 0:n.emissive)==null?void 0:Y.range)??Le.emissive.range,intensity:((ee=n==null?void 0:n.emissive)==null?void 0:ee.intensity)??Le.emissive.intensity,tint:((ne=n==null?void 0:n.emissive)==null?void 0:ne.tint)??Le.emissive.tint}}}function Vh(n){var d,h;const e=new Yn;if(n.quads.length===0)return e;const t=[],i=[],r=[],s=[],a=[],o=[],c=[],l=[];let u=0;for(const g of n.quads){const _=g.vertices();for(const m of _){t.push(m.pos.x,m.pos.y,m.pos.z);const p=m.normal??g.normal();i.push(p.x,p.y,p.z),r.push(((d=m.texture)==null?void 0:d[0])??0,((h=m.texture)==null?void 0:h[1])??0),m.textureLimit?a.push(m.textureLimit[0],m.textureLimit[1],m.textureLimit[2],m.textureLimit[3]):a.push(0,0,0,0);const M=m.color??[1,1,1];s.push(M[0],M[1],M[2]);const v=m.blockPos??m.pos;o.push(v.x,v.y,v.z),c.push(m.emissive??0)}l.push(u,u+1,u+2,u,u+2,u+3),u+=4}e.setAttribute("position",new Nt(t,3)),e.setAttribute("normal",new Nt(i,3)),e.setAttribute("uv",new Nt(r,2)),e.setAttribute("texLimit",new Nt(a,4)),e.setAttribute("color",new Nt(s,3)),e.setAttribute("blockPos",new Nt(o,3)),e.setAttribute("emissive",new Nt(c,1));const f=t.length/3>65536?new Uint32Array(l):new Uint16Array(l);return e.setIndex(new In(f,1)),e.computeBoundingSphere(),e}function Al(n){const e=new Yn;if(n.lines.length===0)return e;const t=[],i=[];for(const r of n.lines)r.vertices().forEach(s=>{t.push(s.pos.x,s.pos.y,s.pos.z);const a=s.color??[1,1,1];i.push(a[0],a[1],a[2])});return e.setAttribute("position",new Nt(t,3)),e.setAttribute("color",new Nt(i,3)),e.computeBoundingSphere(),e}let NS=class{constructor(e,t,i,r){L(this,"structure");L(this,"resources");L(this,"renderer");L(this,"structureScene");L(this,"skyScene");L(this,"overlayScene");L(this,"camera");L(this,"skyCamera");L(this,"atlasTexture");L(this,"opaqueMaterial");L(this,"transparentMaterial");L(this,"coloredMaterial");L(this,"lineMaterial");L(this,"skyMaterial");L(this,"shadowDepthMaterial");L(this,"shadowMap",null);L(this,"emissiveLightDataTex",null);L(this,"emissiveLightColorTex",null);L(this,"shadowCamera");L(this,"sunlight");L(this,"skyMesh");L(this,"sunDisc");L(this,"shadowDirty",!0);L(this,"emissiveSelectionDirty",!0);L(this,"lastEmissiveCameraPos",null);L(this,"lastEmissiveLightCount",0);L(this,"sceneTarget",null);L(this,"depthTarget",null);L(this,"bloomBrightTarget",null);L(this,"bloomBlurTarget1",null);L(this,"bloomBlurTarget2",null);L(this,"godRaysTarget",null);L(this,"aoTarget",null);L(this,"postProcessQuad",null);L(this,"ssaoMaterial",null);L(this,"bloomBrightMaterial",null);L(this,"bloomBlurMaterial",null);L(this,"godRaysMaterial",null);L(this,"compositeMaterial",null);L(this,"chunkBuilder");L(this,"asyncBuild");L(this,"asyncChunkBuildTimeMs");L(this,"buildPromise",null);L(this,"buildToken",0);L(this,"chunkMeshes",[]);L(this,"grid");L(this,"invisibleBlocks");L(this,"outline");L(this,"chunkSize");L(this,"targetCenter");L(this,"cameraPosition");L(this,"cameraTarget");L(this,"cameraUp");L(this,"cameraViewMatrix");L(this,"useInvisibleBlocks");L(this,"drawDistance");L(this,"pixelSize");L(this,"maxEmissiveTextureSize");L(this,"debug");var o,c;this.structure=t,this.resources=i,this.renderer=new jv({canvas:e,alpha:!1,antialias:(r==null?void 0:r.antialias)??!0,preserveDrawingBuffer:(r==null?void 0:r.preserveDrawingBuffer)??!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.maxEmissiveTextureSize=this.renderer.capabilities.maxTextureSize??8192,this.structureScene=new sl,this.skyScene=new sl,this.overlayScene=new sl,this.camera=new ln(70,(e.clientWidth||1)/(e.clientHeight||1),.1,2e3),this.skyCamera=new Ya(-1,1,1,-1,0,1),this.shadowCamera=new Ya(-50,50,50,-50,.1,200);const s=this.renderer.getContext(),a=(r==null?void 0:r.chunkSize)??16;if(this.chunkSize=typeof a=="number"?[a,a,a]:a,this.targetCenter=Mn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.cameraPosition=oo(),this.cameraTarget=xi(this.targetCenter),this.cameraUp=Mn(0,1,0),this.cameraViewMatrix=ut(),this.resetCamera(),this.asyncBuild=(r==null?void 0:r.asyncBuild)??!1,this.asyncChunkBuildTimeMs=(r==null?void 0:r.asyncChunkBuildTimeMs)??8,this.chunkBuilder=new Xr(s,t,i,a,!this.asyncBuild),this.useInvisibleBlocks=(r==null?void 0:r.useInvisibleBlockBuffer)??!1,this.drawDistance=r==null?void 0:r.drawDistance,this.sunlight=Gh(r==null?void 0:r.sunlight),this.debug=(r==null?void 0:r.debug)??!1,this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas()),this.pixelSize=((c=(o=this.resources).getPixelSize)==null?void 0:c.call(o))??0,this.emissiveLightDataTex=Na(new Float32Array([0,0,0,0]),1),this.emissiveLightColorTex=Na(new Float32Array([0,0,0,0]),1),this.shadowDepthMaterial=this.createShadowDepthMaterial(),this.initShadowMap(),this.opaqueMaterial=this.createStructureMaterial(!1),this.transparentMaterial=this.createStructureMaterial(!0),this.coloredMaterial=this.createColoredMaterial(),this.lineMaterial=new Lf({vertexColors:!0,transparent:!0,depthTest:!0}),this.skyMaterial=this.createSkyMaterial(),this.debug){const l=this.resources.getTextureAtlas(),f=Array.from(l.data.slice(3,3+400*4)).filter((d,h)=>h%4===0).filter(d=>d!==0).length;console.log("[lodestone] atlas info",{width:l.width,height:l.height,alphaSampleNonZero:f})}this.asyncBuild?this.rebuildChunksAsync():this.rebuildChunkObjects(),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc),this.skyMesh=this.createSkyMesh(),this.skyMesh&&this.skyScene.add(this.skyMesh),this.initPostProcessing(e.width||800,e.height||600)}setViewport(e,t,i,r,s=1){this.renderer.setPixelRatio(s),this.renderer.setSize(i,r,!1),this.renderer.setScissorTest(!1),this.renderer.setViewport(e,t,i,r),this.camera.aspect=i/Math.max(r,1),this.camera.updateProjectionMatrix();const a=this.renderer.getDrawingBufferSize(new Ue);this.resizePostProcessTargets(Math.max(1,Math.floor(a.x)),Math.max(1,Math.floor(a.y)))}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}setCamera(e){return e.position&&La(this.cameraPosition,e.position),e.target&&La(this.cameraTarget,e.target),e.up&&La(this.cameraUp,e.up),e.fov!==void 0&&this.setFOV(e.fov),this.updateStoredViewMatrix(),this}getCamera(){return{position:xi(this.cameraPosition),target:xi(this.cameraTarget),up:xi(this.cameraUp),fov:this.camera.fov}}getViewMatrix(){return oS(this.cameraViewMatrix)}lookAt(e,t,i){return this.setCamera({position:e,target:t,up:i})}setCameraPosition(e){return this.setCamera({position:e})}setCameraTarget(e){return this.setCamera({target:e})}resetCamera(){const e=this.structure.getSize(),t=Math.max(8,Math.max(e[0],e[1],e[2])*1.8);return this.setCamera({position:Mn(this.targetCenter[0],this.targetCenter[1]+t*.35,this.targetCenter[2]+t),target:this.targetCenter,up:Mn(0,1,0)})}setStructure(e){this.structure=e,this.targetCenter=Mn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.setCameraTarget(this.targetCenter),this.asyncBuild?(this.chunkBuilder.setStructure(e,{rebuild:!1}),this.rebuildOverlay(),this.rebuildChunksAsync()):(this.chunkBuilder.setStructure(e),this.rebuildChunkObjects(),this.rebuildOverlay()),this.shadowDirty=!0}updateStructureBuffers(e){if(this.asyncBuild){this.updateStructureBuffersAsync(e);return}this.chunkBuilder.updateStructureBuffers(e),this.rebuildChunkObjects(),this.rebuildOverlay(),this.shadowDirty=!0}async updateStructureBuffersAsync(e){this.rebuildOverlay(),await this.rebuildChunksAsync(e)}whenReady(){return this.buildPromise??Promise.resolve()}drawStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.updateSkyUniforms(e),this.renderShadowPass(),!this.renderPostProcessing(e)&&(this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.structureScene.overrideMaterial=null,this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera))}drawColoredStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.renderer.clear(),this.structureScene.overrideMaterial=this.coloredMaterial,this.renderer.render(this.structureScene,this.camera),this.structureScene.overrideMaterial=null}drawGrid(e=this.cameraViewMatrix){this.grid&&(this.prepareCamera(e),this.positionSunDisc(e),this.setOverlayVisibility({grid:!0,invisible:!1,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawInvisibleBlocks(e=this.cameraViewMatrix){!this.useInvisibleBlocks||!this.invisibleBlocks||(this.prepareCamera(e),this.setOverlayVisibility({grid:!1,invisible:!0,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawOutline(e,t){const i=t?e:this.cameraViewMatrix,r=t??e;this.outline||(this.outline=this.createOutline(),this.overlayScene.add(this.outline)),this.outline.position.set(r[0],r[1],r[2]),this.prepareCamera(i),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!0}),this.renderer.render(this.overlayScene,this.camera)}dispose(){var e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m;this.buildToken+=1,this.chunkBuilder.cancelPendingBuilds(),this.chunkMeshes.forEach(p=>{this.structureScene.remove(p),p.geometry.dispose()}),this.chunkMeshes=[],this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose(),this.grid=void 0),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose(),this.invisibleBlocks=void 0),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.skyMesh&&(this.structureScene.remove(this.skyMesh),this.skyMesh.geometry.dispose(),this.skyMesh=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),(e=this.sunDisc.material)==null||e.dispose(),this.sunDisc=void 0),this.postProcessQuad&&(this.postProcessQuad.geometry.dispose(),this.postProcessQuad=null),this.structureScene.clear(),this.overlayScene.clear(),this.atlasTexture.dispose(),this.opaqueMaterial.dispose(),this.transparentMaterial.dispose(),this.coloredMaterial.dispose(),this.lineMaterial.dispose(),this.skyMaterial.dispose(),this.shadowDepthMaterial.dispose(),(t=this.shadowMap)==null||t.dispose(),(i=this.sceneTarget)==null||i.dispose(),(r=this.depthTarget)==null||r.dispose(),(s=this.bloomBrightTarget)==null||s.dispose(),(a=this.bloomBlurTarget1)==null||a.dispose(),(o=this.bloomBlurTarget2)==null||o.dispose(),(c=this.godRaysTarget)==null||c.dispose(),(l=this.aoTarget)==null||l.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(f=this.bloomBrightMaterial)==null||f.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(h=this.godRaysMaterial)==null||h.dispose(),(g=this.compositeMaterial)==null||g.dispose(),(_=this.emissiveLightDataTex)==null||_.dispose(),(m=this.emissiveLightColorTex)==null||m.dispose(),this.renderer.dispose()}prepareCamera(e){const t=new ct().fromArray(e),i=new ct().copy(t).invert();this.camera.position.setFromMatrixPosition(i),this.camera.quaternion.setFromRotationMatrix(i),this.camera.updateMatrixWorld(!0);const r=this.getCameraPosition(e)??Mn(0,0,10);La(this.cameraPosition,r),this.camera.updateMatrixWorld(!0),this.drawDistance?this.applyDrawDistance(r,this.drawDistance):this.chunkMeshes.forEach(s=>s.visible=!0),this.updateEmissiveLightsForCamera(r)}rebuildChunkObjects(){this.chunkMeshes.forEach(i=>{this.structureScene.remove(i),i.geometry.dispose()}),this.chunkMeshes=[],this.chunkBuilder.getMeshEntries().forEach((i,r)=>{var c,l;if(i.mesh.isEmpty())return;const s=Vh(i.mesh),a=i.transparent?this.transparentMaterial:this.opaqueMaterial,o=new Qt(s,a);o.renderOrder=i.transparent?1:0,o.userData.origin=i.origin,this.structureScene.add(o),this.chunkMeshes.push(o),this.debug&&r===0&&console.log("[lodestone] chunk geometry sample",{vertices:((c=s.getAttribute("position"))==null?void 0:c.count)??0,indices:((l=s.getIndex())==null?void 0:l.count)??0,transparent:i.transparent})});const t=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(t),this.emissiveSelectionDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks",{count:this.chunkMeshes.length})}async rebuildChunksAsync(e){const t=++this.buildToken,i=(async()=>{await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:e,timeSliceMs:this.asyncChunkBuildTimeMs}),t===this.buildToken&&await this.rebuildChunkObjectsAsync(t)})();return this.buildPromise=i,i}async rebuildChunkObjectsAsync(e){var s,a;this.chunkMeshes.forEach(o=>{this.structureScene.remove(o),o.geometry.dispose()}),this.chunkMeshes=[];const t=this.chunkBuilder.getMeshEntries();let i=this.now();for(let o=0;o<t.length;o++){if(e!==this.buildToken)return;const c=t[o];if(c.mesh.isEmpty())continue;const l=Vh(c.mesh),u=c.transparent?this.transparentMaterial:this.opaqueMaterial,f=new Qt(l,u);f.renderOrder=c.transparent?1:0,f.userData.origin=c.origin,this.structureScene.add(f),this.chunkMeshes.push(f),this.debug&&o===0&&console.log("[lodestone] chunk geometry sample",{vertices:((s=l.getAttribute("position"))==null?void 0:s.count)??0,indices:((a=l.getIndex())==null?void 0:a.count)??0,transparent:c.transparent}),!(o&31)&&this.now()-i>=this.asyncChunkBuildTimeMs&&(await this.yieldControl(),i=this.now())}if(e!==this.buildToken)return;const r=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(r),this.emissiveSelectionDirty=!0,this.shadowDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks (async)",{count:this.chunkMeshes.length})}updateEmissiveLightUniforms(e){var f,d;const t=Math.min(e.length,Tl),i=this.maxEmissiveTextureSize||8192,r=Math.min(i,Math.max(1,Math.ceil(Math.sqrt(Math.max(1,t))))),s=Math.min(i,Math.max(1,Math.ceil(t/r))),a=r*s,o=Math.min(t,a),c=new Float32Array(r*s*4),l=new Float32Array(r*s*4);for(let h=0;h<o;h++){const g=e[h];c[h*4+0]=g.position[0],c[h*4+1]=g.position[1],c[h*4+2]=g.position[2],c[h*4+3]=g.intensity,l[h*4+0]=g.color[0],l[h*4+1]=g.color[1],l[h*4+2]=g.color[2],l[h*4+3]=1}(f=this.emissiveLightDataTex)==null||f.dispose(),(d=this.emissiveLightColorTex)==null||d.dispose(),this.emissiveLightDataTex=Na(c,r,s),this.emissiveLightColorTex=Na(l,r,s);const u=h=>{const g=h.uniforms;g&&(g.emissiveLightData&&(g.emissiveLightData.value=this.emissiveLightDataTex),g.emissiveLightColors&&(g.emissiveLightColors.value=this.emissiveLightColorTex),g.emissiveLightCount&&(g.emissiveLightCount.value=o),g.emissiveLightTexSize&&g.emissiveLightTexSize.value instanceof Ue&&g.emissiveLightTexSize.value.set(r,s))};u(this.opaqueMaterial),u(this.transparentMaterial),this.debug&&o>0&&console.log("[lodestone] emissive lights",{count:o})}updateEmissiveLightsForCamera(e){const t=this.chunkBuilder.getEmissiveLights();if(t.length===0){(this.emissiveSelectionDirty||this.lastEmissiveLightCount!==0)&&(this.updateEmissiveLightUniforms([]),this.lastEmissiveLightCount=0,this.emissiveSelectionDirty=!1),this.lastEmissiveCameraPos=xi(e);return}const i=!this.lastEmissiveCameraPos||this.cameraMovedEnough(e,this.lastEmissiveCameraPos);if(!this.emissiveSelectionDirty&&!i)return;const r=this.drawDistance?Math.pow(this.drawDistance+this.sunlight.emissive.range,2):void 0,s=this.pickNearestEmissiveLights(t,e,Tl,r);this.updateEmissiveLightUniforms(s),this.lastEmissiveLightCount=s.length,this.emissiveSelectionDirty=!1,this.lastEmissiveCameraPos=xi(e)}cameraMovedEnough(e,t){const i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return i*i+r*r+s*s>=US}pickNearestEmissiveLights(e,t,i,r){if(e.length<=i&&r===void 0)return e;const s=[];let a=-1,o=-1;for(const c of e){const l=c.position[0]-t[0],u=c.position[1]-t[1],f=c.position[2]-t[2],d=l*l+u*u+f*f;if(!(r!==void 0&&d>r)){if(s.length<i){s.push({light:c,distSq:d}),d>o&&(o=d,a=s.length-1);continue}if(!(d>=o)){s[a]={light:c,distSq:d},o=s[0].distSq,a=0;for(let h=1;h<s.length;h++)s[h].distSq>o&&(o=s[h].distSq,a=h)}}}return s.sort((c,l)=>c.distSq-l.distSq),s.map(c=>c.light)}rebuildOverlay(){this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose()),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose()),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),this.sunDisc.material.dispose()),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc)}createStructureMaterial(e){return new ll({name:e?"lodestone-structure-transparent":"lodestone-structure-opaque",vertexShader:`
				precision highp float;
				uniform mat4 projectionMatrix;
				uniform mat4 modelViewMatrix;
				uniform mat4 modelMatrix;
				uniform mat3 normalMatrix;
				uniform mat4 shadowMatrix;
				attribute vec3 position;
				attribute vec2 uv;
				attribute vec4 texLimit;
				attribute vec3 color;
				attribute vec3 normal;
				attribute float emissive;

				varying highp vec2 vTexCoord;
				varying highp vec4 vTexLimit;
				varying highp vec3 vTintColor;
				varying highp vec3 vNormal;
				varying highp vec4 vShadowCoord;
				varying highp vec3 vWorldPos;
				varying highp float vEmissive;

				void main(void) {
					vTexCoord = uv;
					vTexLimit = texLimit;
					vTintColor = color;
					vNormal = normalize(normalMatrix * normal);
					vEmissive = emissive;

					vec4 worldPos = modelMatrix * vec4(position, 1.0);
					vWorldPos = worldPos.xyz;
					vShadowCoord = shadowMatrix * worldPos;

					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,fragmentShader:`
				precision highp float;
				varying highp vec2 vTexCoord;
				varying highp vec4 vTexLimit;
				varying highp vec3 vTintColor;
				varying highp vec3 vNormal;
				varying highp vec4 vShadowCoord;
				varying highp vec3 vWorldPos;
				varying highp float vEmissive;

				uniform sampler2D atlas;
				uniform sampler2D shadowMap;
				uniform highp float pixelSize;
				uniform highp vec3 sunDirection;
				uniform highp vec3 sunColor;
				uniform highp vec3 ambientColor;
				uniform highp vec3 fillColor;
				uniform highp vec3 rimColor;
				uniform highp float sunIntensity;
				uniform highp float ambientIntensity;
				uniform highp float fillIntensity;
				uniform highp float rimIntensity;
				uniform highp float horizonFalloff;
				uniform highp float exposure;
				uniform highp vec3 fogColor;
				uniform highp float fogDensity;
				uniform highp float fogHeightFalloff;
				uniform highp float shadowBias;
				uniform highp float shadowNormalBias;
				uniform highp float shadowIntensity;
				uniform highp float shadowSoftness;
				uniform highp vec2 shadowMapSize;
				uniform bool shadowEnabled;

				// Emissive point lights
				#define MAX_EMISSIVE_LIGHTS ${Tl}
				uniform sampler2D emissiveLightData;   // xyz = position, w = intensity
				uniform sampler2D emissiveLightColors; // rgb = color
				uniform int emissiveLightCount;
				uniform vec2 emissiveLightTexSize;
				uniform float emissiveRange;
				uniform float emissiveGlobalIntensity;
				uniform vec3 emissiveTint;

				float sampleShadow(vec2 uv, float compare) {
					float depth = texture2D(shadowMap, uv).r;
					return step(compare, depth);
				}

				float calcShadow(vec4 shadowCoord, vec3 normal) {
					if (!shadowEnabled) return 1.0;

					vec3 projCoords = shadowCoord.xyz / shadowCoord.w;
					projCoords = projCoords * 0.5 + 0.5;

					// Out of shadow frustum
					if (projCoords.x < 0.0 || projCoords.x > 1.0 ||
						projCoords.y < 0.0 || projCoords.y > 1.0 ||
						projCoords.z > 1.0) {
						return 1.0;
					}

					// Apply normal bias
					float cosTheta = max(dot(normal, normalize(sunDirection)), 0.0);
					float bias = shadowBias + shadowNormalBias * (1.0 - cosTheta);
					float currentDepth = projCoords.z - bias;

					// PCF soft shadows
					float shadow = 0.0;
					vec2 texelSize = shadowSoftness / shadowMapSize;

					for (float x = -1.5; x <= 1.5; x += 1.0) {
						for (float y = -1.5; y <= 1.5; y += 1.0) {
							shadow += sampleShadow(projCoords.xy + vec2(x, y) * texelSize, currentDepth);
						}
					}
					shadow /= 16.0;

					// Blend shadow with intensity
					return mix(1.0 - shadowIntensity, 1.0, shadow);
				}

				vec3 calcEmissiveLighting(vec3 worldPos, vec3 normal) {
					// Minecraft-style behavior: multiple nearby light sources shouldn't linearly "stack" to infinity.
					// We approximate this by taking the brightest emissive contribution per-fragment instead of summing,
					// which prevents clustered emissive blocks from blowing out the scene.
					if (emissiveLightCount <= 0) return vec3(0.0);

					vec3 bestLight = vec3(0.0);
					float bestLum = 0.0;

					// Sample emissive lights from textures; loop is capped by MAX_EMISSIVE_LIGHTS to satisfy GLSL unrolling rules
					for (int i = 0; i < MAX_EMISSIVE_LIGHTS; i++) {
						if (i >= emissiveLightCount) break;

						float fx = mod(float(i), emissiveLightTexSize.x);
						float fy = floor(float(i) / emissiveLightTexSize.x);
						vec2 uv = vec2(
							(fx + 0.5) / emissiveLightTexSize.x,
							(fy + 0.5) / emissiveLightTexSize.y
						);
						vec4 posInt = texture2D(emissiveLightData, uv);
						vec3 lightPos = posInt.xyz;
						float intensity = posInt.w;
						vec3 lightColor = texture2D(emissiveLightColors, uv).rgb;

						vec3 lightDir = lightPos - worldPos;
						float dist = length(lightDir);
						lightDir = normalize(lightDir);

						// Use configurable range for light falloff
						float attenuation = max(0.0, 1.0 - dist / emissiveRange);
						attenuation = attenuation * attenuation; // Quadratic falloff for softer edges

						// Diffuse contribution (prevent backface "bleed-through" on opaque blocks)
						float dotNL = dot(normal, lightDir);
						float ndl = max(dotNL, 0.0);
						// Add some ambient to simulate light bouncing around corners, but only on the lit side
						float facing = smoothstep(0.0, 0.1, dotNL);
						float wrappedNdl = (ndl * 0.6 + 0.4) * facing;

						// Apply tint and global intensity
						vec3 tintedColor = lightColor * emissiveTint;
						vec3 contrib = tintedColor * intensity * attenuation * wrappedNdl * emissiveGlobalIntensity;
						float lum = dot(contrib, vec3(0.2126, 0.7152, 0.0722));
						if (lum > bestLum) {
							bestLum = lum;
							bestLight = contrib;
						}
					}

					return bestLight;
				}

				void main(void) {
					vec2 clampedUv = clamp(vTexCoord,
						vTexLimit.xy + vec2(0.5, 0.5) * pixelSize,
						vTexLimit.zw - vec2(0.5, 0.5) * pixelSize
					);
					vec4 texColor = texture2D(atlas, clampedUv);
					if(texColor.a < 0.01) discard;

					vec3 normal = normalize(vNormal);
					vec3 lightDir = normalize(sunDirection);

					// Shadow calculation
					float shadow = calcShadow(vShadowCoord, normal);

					float ndl = max(dot(normal, lightDir), 0.0);
					float wrapped = clamp((ndl + 0.35) / 1.35, 0.0, 1.0);
					float sunTerm = pow(wrapped, 1.35) * sunIntensity * shadow;

					float backFill = pow(1.0 - wrapped, 2.2) * fillIntensity;
					float skyMix = smoothstep(0.0, max(horizonFalloff, 0.0001), normal.y * 0.5 + 0.5);
					vec3 ambient = mix(fillColor, ambientColor, skyMix) * ambientIntensity;

					float rim = pow(1.0 - max(dot(normal, lightDir), 0.0), 3.0) * rimIntensity * shadow;

					vec3 lighting = ambient + sunColor * sunTerm + fillColor * backFill + rimColor * rim;

					// Add emissive point light contribution
					vec3 emissivePointLight = calcEmissiveLighting(vWorldPos, normal);
					lighting += emissivePointLight;

					vec3 baseColor = texColor.xyz * vTintColor;
					vec3 finalColor = baseColor * lighting * exposure;

					// Add emissive contribution for self-illumination (warm, muted glow like Minecraft)
					vec3 warmTint = vec3(1.0, 0.85, 0.6); // Warm orange-yellow tint
					vec3 emissiveContrib = baseColor * warmTint * vEmissive * 0.35;
					finalColor = finalColor + emissiveContrib;

					// Height + distance fog approximated in view space
					float depth = gl_FragCoord.z / gl_FragCoord.w;
					float fog = 1.0 - exp(-depth * fogDensity - max(0.0, vTexCoord.y) * fogHeightFalloff);
					fog = clamp(fog, 0.0, 1.0);
					// Slightly reduce fog on emissive blocks and areas lit by emissive
					float emissiveFogReduce = max(vEmissive, length(emissivePointLight) * 0.3);
					vec3 fogged = mix(finalColor, fogColor, fog * (1.0 - emissiveFogReduce * 0.3));

					gl_FragColor = vec4(fogged, texColor.a);
				}
			`,uniforms:this.createStructureUniforms(),transparent:e,depthWrite:!e,depthTest:!0,alphaTest:.01,side:gn})}createStructureUniforms(){var i;const e=r=>new Qe(r[0],r[1],r[2]),t=new W(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]);return t.lengthSq()===0&&t.set(0,1,0),t.normalize(),{atlas:{value:this.atlasTexture},pixelSize:{value:this.pixelSize},sunDirection:{value:t},sunColor:{value:e(this.sunlight.color)},ambientColor:{value:e(this.sunlight.ambientColor)},fillColor:{value:e(this.sunlight.fillColor)},rimColor:{value:e(this.sunlight.rimColor)},sunIntensity:{value:this.sunlight.intensity},ambientIntensity:{value:this.sunlight.ambientIntensity},fillIntensity:{value:this.sunlight.fillIntensity},rimIntensity:{value:this.sunlight.rimIntensity},horizonFalloff:{value:this.sunlight.horizonFalloff},exposure:{value:this.sunlight.exposure},fogColor:{value:e(this.sunlight.fog.color)},fogDensity:{value:this.sunlight.fog.density},fogHeightFalloff:{value:this.sunlight.fog.heightFalloff},shadowMap:{value:((i=this.shadowMap)==null?void 0:i.texture)??null},shadowMatrix:{value:new ct},shadowBias:{value:this.sunlight.shadow.bias},shadowNormalBias:{value:this.sunlight.shadow.normalBias},shadowIntensity:{value:this.sunlight.shadow.intensity},shadowSoftness:{value:this.sunlight.shadow.softness},shadowMapSize:{value:new Ue(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize)},shadowEnabled:{value:this.sunlight.shadow.enabled},emissiveLightData:{value:this.emissiveLightDataTex},emissiveLightColors:{value:this.emissiveLightColorTex},emissiveLightCount:{value:0},emissiveLightTexSize:{value:new Ue(1,1)},emissiveRange:{value:this.sunlight.emissive.range},emissiveGlobalIntensity:{value:this.sunlight.emissive.intensity},emissiveTint:{value:e(this.sunlight.emissive.tint)}}}setSunlight(e){this.sunlight=Gh(e),this.syncShadowResources(),this.syncPostProcessingResources(),this.applySunlightUniforms(this.opaqueMaterial),this.applySunlightUniforms(this.transparentMaterial),this.applySkyUniforms(),this.applySunDiscUniforms(),this.applyPostProcessUniforms(),this.shadowDirty=!0,this.emissiveSelectionDirty=!0}syncShadowResources(){var e,t;if(this.sunlight.shadow.enabled){const i=this.sunlight.shadow.mapSize;(!this.shadowMap||this.shadowMap.width!==i||this.shadowMap.height!==i)&&((e=this.shadowMap)==null||e.dispose(),this.shadowMap=null,this.initShadowMap(),this.shadowDirty=!0);return}(t=this.shadowMap)==null||t.dispose(),this.shadowMap=null,this.shadowDirty=!0}syncPostProcessingResources(){var t,i,r,s,a,o,c,l,u,f,d,h,g;if(!this.sunlight.postProcess.enabled||this.sceneTarget&&this.postProcessQuad&&this.ssaoMaterial&&this.bloomBrightMaterial&&this.bloomBlurMaterial&&this.godRaysMaterial&&this.compositeMaterial)return;(t=this.sceneTarget)==null||t.dispose(),(i=this.depthTarget)==null||i.dispose(),(r=this.bloomBrightTarget)==null||r.dispose(),(s=this.bloomBlurTarget1)==null||s.dispose(),(a=this.bloomBlurTarget2)==null||a.dispose(),(o=this.godRaysTarget)==null||o.dispose(),(c=this.aoTarget)==null||c.dispose(),(l=this.postProcessQuad)==null||l.geometry.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(f=this.bloomBrightMaterial)==null||f.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(h=this.godRaysMaterial)==null||h.dispose(),(g=this.compositeMaterial)==null||g.dispose(),this.sceneTarget=null,this.depthTarget=null,this.bloomBrightTarget=null,this.bloomBlurTarget1=null,this.bloomBlurTarget2=null,this.godRaysTarget=null,this.aoTarget=null,this.postProcessQuad=null,this.ssaoMaterial=null,this.bloomBrightMaterial=null,this.bloomBlurMaterial=null,this.godRaysMaterial=null,this.compositeMaterial=null;const e=this.renderer.getSize(new Ue);this.initPostProcessing(Math.max(1,e.x),Math.max(1,e.y))}applyPostProcessUniforms(){var a,o,c,l;const e=this.sunlight.postProcess,t=(a=this.ssaoMaterial)==null?void 0:a.uniforms;t!=null&&t.aoRadius&&(t.aoRadius.value=e.ao.radius),t!=null&&t.aoIntensity&&(t.aoIntensity.value=e.ao.intensity);const i=(o=this.bloomBrightMaterial)==null?void 0:o.uniforms;i!=null&&i.threshold&&(i.threshold.value=e.bloom.threshold);const r=(c=this.compositeMaterial)==null?void 0:c.uniforms;r!=null&&r.bloomIntensity&&(r.bloomIntensity.value=e.bloom.intensity);const s=(l=this.godRaysMaterial)==null?void 0:l.uniforms;s!=null&&s.intensity&&(s.intensity.value=e.godRays.intensity),s!=null&&s.decay&&(s.decay.value=e.godRays.decay),s!=null&&s.density&&(s.density.value=e.godRays.density),s!=null&&s.numSamples&&(s.numSamples.value=e.godRays.samples)}applySunDiscUniforms(){if(!this.sunDisc)return;const t=this.sunDisc.material.uniforms;t&&(t.coreColor.value.setRGB(this.sunlight.disc.coreColor[0],this.sunlight.disc.coreColor[1],this.sunlight.disc.coreColor[2]),t.glowColor.value.setRGB(this.sunlight.disc.glowColor[0],this.sunlight.disc.glowColor[1],this.sunlight.disc.glowColor[2]),t.coreIntensity.value=this.sunlight.disc.coreIntensity,t.glowIntensity.value=this.sunlight.disc.glowIntensity,t.softness.value=this.sunlight.disc.softness)}applySkyUniforms(){var r;const e=this.skyMaterial.uniforms;if(!e)return;const t=(s,a)=>{const o=e[s];(o==null?void 0:o.value)instanceof Qe&&o.value.setRGB(a[0],a[1],a[2])},i=(r=e.sunDirection)==null?void 0:r.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),t("zenithColor",this.sunlight.sky.zenithColor),t("horizonColor",this.sunlight.sky.horizonColor),t("groundColor",this.sunlight.sky.groundColor),t("sunGlowColor",this.sunlight.sky.sunGlowColor),e.sunGlowIntensity&&(e.sunGlowIntensity.value=this.sunlight.sky.sunGlowIntensity),e.sunGlowExponent&&(e.sunGlowExponent.value=this.sunlight.sky.sunGlowExponent),e.starsEnabled&&(e.starsEnabled.value=this.sunlight.sky.stars.enabled),e.starsDensity&&(e.starsDensity.value=this.sunlight.sky.stars.density),e.starsBrightness&&(e.starsBrightness.value=this.sunlight.sky.stars.brightness)}applySunlightUniforms(e){var s,a,o;const t=e.uniforms;if(!t)return;const i=(c,l)=>{const u=t[c];(u==null?void 0:u.value)instanceof Qe&&u.value.setRGB(l[0],l[1],l[2])},r=(s=t.sunDirection)==null?void 0:s.value;r&&r.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i("sunColor",this.sunlight.color),i("ambientColor",this.sunlight.ambientColor),i("fillColor",this.sunlight.fillColor),i("rimColor",this.sunlight.rimColor),i("fogColor",this.sunlight.fog.color),t.sunIntensity&&(t.sunIntensity.value=this.sunlight.intensity),t.ambientIntensity&&(t.ambientIntensity.value=this.sunlight.ambientIntensity),t.fillIntensity&&(t.fillIntensity.value=this.sunlight.fillIntensity),t.rimIntensity&&(t.rimIntensity.value=this.sunlight.rimIntensity),t.horizonFalloff&&(t.horizonFalloff.value=this.sunlight.horizonFalloff),t.exposure&&(t.exposure.value=this.sunlight.exposure),t.fogDensity&&(t.fogDensity.value=this.sunlight.fog.density),t.fogHeightFalloff&&(t.fogHeightFalloff.value=this.sunlight.fog.heightFalloff),t.shadowEnabled&&(t.shadowEnabled.value=this.sunlight.shadow.enabled),t.shadowBias&&(t.shadowBias.value=this.sunlight.shadow.bias),t.shadowNormalBias&&(t.shadowNormalBias.value=this.sunlight.shadow.normalBias),t.shadowIntensity&&(t.shadowIntensity.value=this.sunlight.shadow.intensity),t.shadowSoftness&&(t.shadowSoftness.value=this.sunlight.shadow.softness),((a=t.shadowMapSize)==null?void 0:a.value)instanceof Ue&&t.shadowMapSize.value.set(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize),t.shadowMap&&(t.shadowMap.value=((o=this.shadowMap)==null?void 0:o.texture)??null),t.emissiveRange&&(t.emissiveRange.value=this.sunlight.emissive.range),t.emissiveGlobalIntensity&&(t.emissiveGlobalIntensity.value=this.sunlight.emissive.intensity),i("emissiveTint",this.sunlight.emissive.tint)}createColoredMaterial(){return new ll({name:"lodestone-structure-colored",vertexShader:`
				precision highp float;
				uniform mat4 projectionMatrix;
				uniform mat4 modelViewMatrix;
				attribute vec3 position;
				attribute vec3 blockPos;

				varying highp vec3 vColor;

				void main(void) {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					vColor = blockPos / 256.0;
				}
			`,fragmentShader:`
				precision highp float;

				varying highp vec3 vColor;

				void main(void) {
					gl_FragColor = vec4(vColor, 1.0);
				}
			`,transparent:!1,depthWrite:!0,depthTest:!0,side:gn})}createGrid(){const[e,t,i]=this.structure.getSize(),r=new lt;r.addLine(0,0,0,e,0,0,[1,0,0]),r.addLine(0,0,0,0,0,i,[0,0,1]);const s=[.8,.8,.8];r.addLine(0,0,0,0,t,0,s),r.addLine(e,0,0,e,t,0,s),r.addLine(0,0,i,0,t,i,s),r.addLine(e,0,i,e,t,i,s),r.addLine(0,t,0,0,t,i,s),r.addLine(e,t,0,e,t,i,s),r.addLine(0,t,0,e,t,0,s),r.addLine(0,t,i,e,t,i,s);const a=128,o=Math.max(1,Math.ceil(e/a)),c=Math.max(1,Math.ceil(i/a));for(let u=o;u<=e;u+=o)r.addLine(u,0,0,u,0,i,s);for(let u=c;u<=i;u+=c)r.addLine(0,0,u,e,0,u,s);const l=Al(r);return l.attributes.position?new ol(l,this.lineMaterial):void 0}createOutline(){const e=new lt;e.addLineCube(0,0,0,1,1,1,[1,1,1]);const t=Al(e);return new ol(t,this.lineMaterial)}createInvisibleBlocks(){const e=new lt;if(!this.useInvisibleBlocks)return;const t=this.structure.getSize(),i=t[0]*t[1]*t[2];if(i>2e5){this.debug&&console.warn("[lodestone] Skipping invisible blocks buffer for large structure",{volume:i});return}for(let s=0;s<t[0];s+=1)for(let a=0;a<t[1];a+=1)for(let o=0;o<t[2];o+=1){const c=this.structure.getBlock([s,a,o]);c!==void 0&&(c===null?e.addLineCube(s+.4375,a+.4375,o+.4375,s+.5625,a+.5625,o+.5625,[1,.25,.25]):c.state.is(Ri.AIR)?e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,.5,1]):c.state.is(new Ri("cave_air"))&&e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,1,.5]))}const r=Al(e);return r.attributes.position?new ol(r,this.lineMaterial):void 0}setOverlayVisibility(e){this.grid&&(this.grid.visible=e.grid),this.invisibleBlocks&&(this.invisibleBlocks.visible=e.invisible),this.outline&&(this.outline.visible=e.outline),this.sunDisc&&(this.sunDisc.visible=e.sunDisc??!1)}createAtlasTexture(e){const t=new Pf(e.data,e.width,e.height,Wt);return t.magFilter=xt,t.minFilter=xt,t.wrapS=Rn,t.wrapT=Rn,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}getCameraPosition(e){const t=ut();return uS(t,e)?Mn(t[12],t[13],t[14]):null}updateStoredViewMatrix(){gS(this.cameraViewMatrix,this.cameraPosition,this.cameraTarget,this.cameraUp)}applyDrawDistance(e,t){const i=t*t;let r=!1;for(const s of this.chunkMeshes){const a=s.userData.origin;if(!a){s.visible||(s.visible=!0,r=!0);continue}const o=[a[0]+this.chunkSize[0]*.5,a[1]+this.chunkSize[1]*.5,a[2]+this.chunkSize[2]*.5],c=o[0]-e[0],l=o[1]-e[1],u=o[2]-e[2],f=c*c+l*l+u*u<=i;s.visible!==f&&(s.visible=f,r=!0)}r&&(this.shadowDirty=!0)}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}positionSunDisc(e){if(!this.sunDisc)return;const t=this.getCameraPosition(e)??Mn(0,0,10),i=xi(this.sunlight.direction);Sd(i,i);const r=this.sunlight.disc.distance,s=oo();xS(s,t,i,r),this.sunDisc.position.set(s[0],s[1],s[2]),this.sunDisc.scale.setScalar(this.sunlight.disc.size),this.sunDisc.lookAt(t[0],t[1],t[2])}createSunDisc(){const e=new or(1,1,1,1),t=new Vt({name:"lodestone-sun-disc",transparent:!0,depthWrite:!1,depthTest:!0,side:zn,uniforms:{coreColor:{value:new Qe(...this.sunlight.disc.coreColor)},glowColor:{value:new Qe(...this.sunlight.disc.glowColor)},coreIntensity:{value:this.sunlight.disc.coreIntensity},glowIntensity:{value:this.sunlight.disc.glowIntensity},softness:{value:this.sunlight.disc.softness}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv * 2.0 - 1.0;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,fragmentShader:`
				precision highp float;
				varying vec2 vUv;
				uniform vec3 coreColor;
				uniform vec3 glowColor;
				uniform float coreIntensity;
				uniform float glowIntensity;
				uniform float softness;

				void main() {
					// Square distance (Chebyshev/chessboard distance)
					float sqDist = max(abs(vUv.x), abs(vUv.y));

					// Sharp square core
					float core = 1.0 - smoothstep(0.25, 0.3, sqDist);

					// Very diffuse glow - exponential falloff for natural light scatter
					float r = length(vUv);
					float glow = exp(-r * r * 0.8) * 0.6;

					vec3 color = coreColor * core * coreIntensity + glowColor * glow * glowIntensity;
					float alpha = clamp(core + glow * 0.3, 0.0, 1.0);
					gl_FragColor = vec4(color, alpha);
				}
			`}),i=new Qt(e,t);return i.renderOrder=10,i}createSkyMaterial(){return new Vt({name:"lodestone-sky",transparent:!1,depthWrite:!1,depthTest:!1,side:gn,uniforms:{sunDirection:{value:new W(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize()},zenithColor:{value:new Qe(...this.sunlight.sky.zenithColor)},horizonColor:{value:new Qe(...this.sunlight.sky.horizonColor)},groundColor:{value:new Qe(...this.sunlight.sky.groundColor)},sunGlowColor:{value:new Qe(...this.sunlight.sky.sunGlowColor)},sunGlowIntensity:{value:this.sunlight.sky.sunGlowIntensity},sunGlowExponent:{value:this.sunlight.sky.sunGlowExponent},invViewMatrix:{value:new ct},invProjectionMatrix:{value:new ct},starsEnabled:{value:this.sunlight.sky.stars.enabled},starsDensity:{value:this.sunlight.sky.stars.density},starsBrightness:{value:this.sunlight.sky.stars.brightness}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4(position.xy, 0.9999, 1.0);
				}
			`,fragmentShader:`
				precision highp float;
				varying vec2 vUv;

				uniform vec3 sunDirection;
				uniform vec3 zenithColor;
				uniform vec3 horizonColor;
				uniform vec3 groundColor;
				uniform vec3 sunGlowColor;
				uniform float sunGlowIntensity;
				uniform float sunGlowExponent;
				uniform mat4 invViewMatrix;
				uniform mat4 invProjectionMatrix;

				// Star uniforms
				uniform bool starsEnabled;
				uniform float starsDensity;
				uniform float starsBrightness;

				// Hash function for procedural star generation
				float hash(vec3 p) {
					p = fract(p * vec3(443.8975, 397.2973, 491.1871));
					p += dot(p.xyz, p.yxz + 19.19);
					return fract(p.x * p.y * p.z);
				}

				// Generate stars based on ray direction
				float stars(vec3 rayDir) {
					if (!starsEnabled) return 0.0;

					// Only show stars above horizon
					if (rayDir.y < 0.0) return 0.0;

					vec3 dir = normalize(rayDir);
					float starField = 0.0;

					// Large bright stars (sparse)
					{
						vec3 gridPos = dir * 70.0;
						vec3 cellId = floor(gridPos);
						vec3 cellUv = fract(gridPos);

						float h = hash(cellId);
						if (h < starsDensity * 0.25) {
							vec3 starPos = vec3(hash(cellId + 1.0), hash(cellId + 2.0), hash(cellId + 3.0));
							float dist = length(cellUv - starPos);
							float star = smoothstep(0.15, 0.0, dist);
							starField += star * 0.9;
						}
					}

					// Medium stars
					{
						vec3 gridPos = dir * 130.0;
						vec3 cellId = floor(gridPos);
						vec3 cellUv = fract(gridPos);

						float h = hash(cellId + 50.0);
						if (h < starsDensity * 0.5) {
							vec3 starPos = vec3(hash(cellId + 51.0), hash(cellId + 52.0), hash(cellId + 53.0));
							float dist = length(cellUv - starPos);
							float star = smoothstep(0.10, 0.0, dist);
							starField += star * 0.6;
						}
					}

					// Small stars (dense)
					{
						vec3 gridPos = dir * 250.0;
						vec3 cellId = floor(gridPos);
						vec3 cellUv = fract(gridPos);

						float h = hash(cellId + 100.0);
						if (h < starsDensity * 1.0) {
							vec3 starPos = vec3(hash(cellId + 101.0), hash(cellId + 102.0), hash(cellId + 103.0));
							float dist = length(cellUv - starPos);
							float star = smoothstep(0.065, 0.0, dist);
							starField += star * 0.4;
						}
					}

					// Tiny stars (very dense)
					{
						vec3 gridPos = dir * 450.0;
						vec3 cellId = floor(gridPos);
						vec3 cellUv = fract(gridPos);

						float h = hash(cellId + 200.0);
						if (h < starsDensity * 1.8) {
							vec3 starPos = vec3(hash(cellId + 201.0), hash(cellId + 202.0), hash(cellId + 203.0));
							float dist = length(cellUv - starPos);
							float star = smoothstep(0.04, 0.0, dist);
							starField += star * 0.2;
						}
					}

					// Fade out near horizon
					float horizonFade = smoothstep(0.0, 0.15, rayDir.y);

					return starField * starsBrightness * horizonFade;
				}

				void main() {
					// Convert UV to clip space coordinates
					vec2 ndc = vUv * 2.0 - 1.0;

					// Reconstruct view ray in clip space
					vec4 clipPos = vec4(ndc, 1.0, 1.0);
					vec4 viewPos = invProjectionMatrix * clipPos;
					viewPos /= viewPos.w;

					// Transform to world space direction
					vec4 worldPos = invViewMatrix * vec4(viewPos.xyz, 0.0);
					vec3 rayDir = normalize(worldPos.xyz);

					// Vertical gradient: zenith (up) to horizon to ground
					float elevation = rayDir.y;

					// Sky gradient above horizon
					float horizonBlend = 1.0 - pow(max(elevation, 0.0), 0.45);
					vec3 skyGradient = mix(zenithColor, horizonColor, horizonBlend);

					// Ground gradient below horizon
					float groundBlend = pow(max(-elevation, 0.0), 0.6);
					vec3 finalColor = mix(skyGradient, groundColor, groundBlend);

					// Sun glow effect
					float sunDot = max(dot(rayDir, sunDirection), 0.0);
					float sunGlow = pow(sunDot, sunGlowExponent) * sunGlowIntensity;

					// Add sun atmospheric glow (more spread out)
					float atmosphericGlow = pow(sunDot, 2.5) * 0.25;

					// Horizon haze - more glow near horizon and below
					float horizonHaze = (1.0 - max(elevation, 0.0)) * pow(sunDot, 3.0) * 0.3;

					finalColor += sunGlowColor * (sunGlow + atmosphericGlow + horizonHaze);

					// Add stars
					float starLight = stars(rayDir);
					// Stars are white/slightly blue-white
					vec3 starColor = vec3(0.85, 0.9, 1.0);
					finalColor += starColor * starLight;

					// Slight exposure adjustment
					finalColor = 1.0 - exp(-finalColor * 1.2);

					gl_FragColor = vec4(finalColor, 1.0);
				}
			`})}createSkyMesh(){const e=new or(2,2,1,1),t=new Qt(e,this.skyMaterial);return t.frustumCulled=!1,t.renderOrder=-1e3,t}updateSkyUniforms(e){var a,o,c;const t=this.skyMaterial.uniforms,i=(a=t.sunDirection)==null?void 0:a.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize();const r=(o=t.invViewMatrix)==null?void 0:o.value,s=(c=t.invProjectionMatrix)==null?void 0:c.value;if(r){const l=new ct;l.fromArray(e),r.copy(l).invert()}s&&s.copy(this.camera.projectionMatrix).invert()}createShadowDepthMaterial(){return new ll({name:"lodestone-shadow-depth",vertexShader:`
				precision highp float;
				uniform mat4 projectionMatrix;
				uniform mat4 modelViewMatrix;
				attribute vec3 position;

				void main(void) {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,fragmentShader:`
				precision highp float;

				void main(void) {
					gl_FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
				}
			`,side:gn,depthTest:!0,depthWrite:!0})}initShadowMap(){if(!this.sunlight.shadow.enabled)return;const e=this.sunlight.shadow.mapSize;this.shadowMap=new Ln(e,e,{minFilter:xt,magFilter:xt,format:Wt,type:Pn})}updateShadowCamera(){const e=this.sunlight.shadow.frustumSize,t=e/2,i=new W(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),r=new W(this.targetCenter[0],this.targetCenter[1],this.targetCenter[2]),s=r.clone().add(i.clone().multiplyScalar(e));this.shadowCamera.left=-t,this.shadowCamera.right=t,this.shadowCamera.top=t,this.shadowCamera.bottom=-t,this.shadowCamera.near=.1,this.shadowCamera.far=e*2,this.shadowCamera.position.copy(s),this.shadowCamera.lookAt(r),this.shadowCamera.updateMatrixWorld(!0),this.shadowCamera.updateProjectionMatrix()}renderShadowPass(){if(!this.sunlight.shadow.enabled||!this.shadowMap||!this.shadowDirty)return;this.updateShadowCamera();const e=new ct;e.multiplyMatrices(this.shadowCamera.projectionMatrix,this.shadowCamera.matrixWorldInverse);const t=r=>{var a;const s=r.uniforms;s.shadowMatrix&&s.shadowMatrix.value.copy(e),s.shadowMap&&(s.shadowMap.value=((a=this.shadowMap)==null?void 0:a.texture)??null)};t(this.opaqueMaterial),t(this.transparentMaterial);const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.shadowMap),this.renderer.setClearColor(16777215,1),this.renderer.clear(),this.structureScene.overrideMaterial=this.shadowDepthMaterial,this.renderer.render(this.structureScene,this.shadowCamera),this.structureScene.overrideMaterial=null,this.renderer.setRenderTarget(i),this.renderer.setClearColor(0,1),this.shadowDirty=!1}initPostProcessing(e,t){if(!this.sunlight.postProcess.enabled)return;const i=(s,a,o=!1)=>new Ln(s,a,{minFilter:Yt,magFilter:Yt,format:Wt,type:es,depthBuffer:o});this.sceneTarget=new Ln(e,t,{minFilter:Yt,magFilter:Yt,format:Wt,type:es,depthBuffer:!0}),this.sceneTarget.depthTexture=new ja(e,t),this.sceneTarget.depthTexture.format=Di,this.sceneTarget.depthTexture.type=Hi,this.depthTarget=new Ln(e,t,{minFilter:xt,magFilter:xt,format:Wt,type:Pn,depthBuffer:!0}),this.aoTarget=i(e,t),this.bloomBrightTarget=i(e/2,t/2),this.bloomBlurTarget1=i(e/2,t/2),this.bloomBlurTarget2=i(e/2,t/2),this.godRaysTarget=i(e/2,t/2);const r=new or(2,2);this.postProcessQuad=new Qt(r),this.postProcessQuad.frustumCulled=!1,this.ssaoMaterial=this.createSSAOMaterial(),this.bloomBrightMaterial=this.createBloomBrightMaterial(),this.bloomBlurMaterial=this.createBloomBlurMaterial(),this.godRaysMaterial=this.createGodRaysMaterial(),this.compositeMaterial=this.createCompositeMaterial()}resizePostProcessTargets(e,t){var i,r,s,a,o,c,l,u;this.sunlight.postProcess.enabled&&(e<=0||t<=0||((i=this.sceneTarget)==null||i.setSize(e,t),this.sceneTarget&&((r=this.sceneTarget.depthTexture)==null||r.dispose(),this.sceneTarget.depthTexture=new ja(e,t),this.sceneTarget.depthTexture.format=Di,this.sceneTarget.depthTexture.type=Hi),(s=this.depthTarget)==null||s.setSize(e,t),(a=this.aoTarget)==null||a.setSize(e,t),(o=this.bloomBrightTarget)==null||o.setSize(Math.max(1,e/2),Math.max(1,t/2)),(c=this.bloomBlurTarget1)==null||c.setSize(Math.max(1,e/2),Math.max(1,t/2)),(l=this.bloomBlurTarget2)==null||l.setSize(Math.max(1,e/2),Math.max(1,t/2)),(u=this.godRaysTarget)==null||u.setSize(Math.max(1,e/2),Math.max(1,t/2))))}createSSAOMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ue},cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},aoRadius:{value:this.sunlight.postProcess.ao.radius},aoIntensity:{value:this.sunlight.postProcess.ao.intensity}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4(position.xy, 0.0, 1.0);
				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform vec2 resolution;
				uniform float cameraNear;
				uniform float cameraFar;
				uniform float aoRadius;
				uniform float aoIntensity;
				varying vec2 vUv;

				float getDepth(vec2 uv) {
					return texture2D(tDepth, uv).r;
				}

				float getLinearDepth(vec2 uv) {
					float depth = getDepth(uv);
					return cameraNear * cameraFar / (cameraFar - depth * (cameraFar - cameraNear));
				}

				void main() {
					vec4 color = texture2D(tDiffuse, vUv);
					float depth = getLinearDepth(vUv);

					// Simple SSAO - sample in a small radius
					float ao = 0.0;
					float radius = aoRadius / depth;
					vec2 texelSize = 1.0 / resolution;

					const int SAMPLES = 8;
					float angleStep = 6.28318 / float(SAMPLES);

					for (int i = 0; i < SAMPLES; i++) {
						float angle = float(i) * angleStep;
						vec2 offset = vec2(cos(angle), sin(angle)) * radius * texelSize * 20.0;
						float sampleDepth = getLinearDepth(vUv + offset);
						float diff = depth - sampleDepth;
						ao += smoothstep(0.0, 0.3, diff) * smoothstep(1.0, 0.0, diff);
					}
					ao = 1.0 - (ao / float(SAMPLES)) * aoIntensity;

					gl_FragColor = vec4(color.rgb * ao, color.a);
				}
			`})}createBloomBrightMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},threshold:{value:this.sunlight.postProcess.bloom.threshold}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4(position.xy, 0.0, 1.0);
				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform float threshold;
				varying vec2 vUv;

				void main() {
					vec4 color = texture2D(tDiffuse, vUv);
					float brightness = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
					float contribution = smoothstep(threshold, threshold + 0.3, brightness);
					gl_FragColor = vec4(color.rgb * contribution, 1.0);
				}
			`})}createBloomBlurMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},direction:{value:new Ue(1,0)},resolution:{value:new Ue}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4(position.xy, 0.0, 1.0);
				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform vec2 direction;
				uniform vec2 resolution;
				varying vec2 vUv;

				void main() {
					vec2 texelSize = 1.0 / resolution;
					vec4 result = vec4(0.0);

					// 9-tap Gaussian blur
					float weights[5];
					weights[0] = 0.227027;
					weights[1] = 0.1945946;
					weights[2] = 0.1216216;
					weights[3] = 0.054054;
					weights[4] = 0.016216;

					result += texture2D(tDiffuse, vUv) * weights[0];
					for (int i = 1; i < 5; i++) {
						vec2 offset = direction * texelSize * float(i) * 2.0;
						result += texture2D(tDiffuse, vUv + offset) * weights[i];
						result += texture2D(tDiffuse, vUv - offset) * weights[i];
					}

					gl_FragColor = result;
				}
			`})}createGodRaysMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},tScene:{value:null},sunPosition:{value:new Ue(.5,.5)},intensity:{value:this.sunlight.postProcess.godRays.intensity},decay:{value:this.sunlight.postProcess.godRays.decay},density:{value:this.sunlight.postProcess.godRays.density},numSamples:{value:this.sunlight.postProcess.godRays.samples}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4(position.xy, 0.0, 1.0);
				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tScene;
				uniform vec2 sunPosition;
				uniform float intensity;
				uniform float decay;
				uniform float density;
				uniform int numSamples;
				varying vec2 vUv;

				void main() {
					vec2 deltaUv = (vUv - sunPosition) * density / float(numSamples);
					vec2 uv = vUv;
					vec4 color = texture2D(tDiffuse, uv);
					float illuminationDecay = 1.0;

					for (int i = 0; i < 100; i++) {
						if (i >= numSamples) break;
						uv -= deltaUv;
						vec4 sampleColor = texture2D(tDiffuse, uv);
						sampleColor *= illuminationDecay;
						color += sampleColor;
						illuminationDecay *= decay;
					}

					color *= intensity / float(numSamples);

					// Add to original scene
					vec4 sceneColor = texture2D(tScene, vUv);
					gl_FragColor = sceneColor + color;
				}
			`})}createCompositeMaterial(){return new Vt({uniforms:{tScene:{value:null},tBloom:{value:null},bloomIntensity:{value:this.sunlight.postProcess.bloom.intensity}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4(position.xy, 0.0, 1.0);
				}
			`,fragmentShader:`
				uniform sampler2D tScene;
				uniform sampler2D tBloom;
				uniform float bloomIntensity;
				varying vec2 vUv;

				void main() {
					vec4 sceneColor = texture2D(tScene, vUv);
					vec4 bloomColor = texture2D(tBloom, vUv);

					// Add bloom with soft knee to prevent harsh clipping
					vec3 bloom = bloomColor.rgb * bloomIntensity;
					vec3 color = sceneColor.rgb + bloom;

					// Soft highlight compression (only affects values > 1.0)
					// This prevents harsh clipping while preserving SDR colors
					vec3 overflow = max(color - 1.0, 0.0);
					color = min(color, 1.0) + overflow / (1.0 + overflow);

					gl_FragColor = vec4(color, sceneColor.a);
				}
			`})}getSunScreenPosition(e){const t=new W(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i=this.getCameraPosition(e)??Mn(0,0,10),r=new W(i[0],i[1],i[2]).add(t.multiplyScalar(100));return r.project(this.camera),new Ue((r.x+1)*.5,(r.y+1)*.5)}renderPostProcessing(e){var o;if(!this.sunlight.postProcess.enabled||!this.sceneTarget||!this.postProcessQuad)return!1;const t=this.sunlight.postProcess;if(!(t.ao.enabled||t.bloom.enabled||t.godRays.enabled))return!1;const r=this.sceneTarget.width,s=this.sceneTarget.height;this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera);let a=this.sceneTarget.texture;if(t.ao.enabled&&this.ssaoMaterial&&this.aoTarget&&(this.ssaoMaterial.uniforms.tDiffuse.value=a,this.ssaoMaterial.uniforms.tDepth.value=this.sceneTarget.depthTexture,this.ssaoMaterial.uniforms.resolution.value.set(r,s),this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.postProcessQuad.material=this.ssaoMaterial,this.renderer.setRenderTarget(this.aoTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.aoTarget.texture),t.bloom.enabled&&this.bloomBrightMaterial&&this.bloomBrightTarget&&this.bloomBlurTarget1&&this.bloomBlurTarget2&&this.bloomBlurMaterial&&(this.bloomBrightMaterial.uniforms.tDiffuse.value=a,this.postProcessQuad.material=this.bloomBrightMaterial,this.renderer.setRenderTarget(this.bloomBrightTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.bloomBlurMaterial.uniforms.direction.value.set(1,0),this.bloomBlurMaterial.uniforms.resolution.value.set(r/2,s/2),this.postProcessQuad.material=this.bloomBlurMaterial,this.renderer.setRenderTarget(this.bloomBlurTarget1),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBlurTarget1.texture,this.bloomBlurMaterial.uniforms.direction.value.set(0,1),this.renderer.setRenderTarget(this.bloomBlurTarget2),this.renderer.render(this.postProcessQuad,this.skyCamera)),t.godRays.enabled&&this.godRaysMaterial&&this.godRaysTarget&&this.bloomBrightTarget){const c=this.getSunScreenPosition(e);this.godRaysMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.godRaysMaterial.uniforms.tScene.value=a,this.godRaysMaterial.uniforms.sunPosition.value.copy(c),this.postProcessQuad.material=this.godRaysMaterial,this.renderer.setRenderTarget(this.godRaysTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.godRaysTarget.texture}return this.compositeMaterial&&(this.compositeMaterial.uniforms.tScene.value=a,this.compositeMaterial.uniforms.tBloom.value=((o=this.bloomBlurTarget2)==null?void 0:o.texture)??null,this.postProcessQuad.material=this.compositeMaterial,this.renderer.setRenderTarget(null),this.renderer.render(this.postProcessQuad,this.skyCamera)),!0}};const kS=Object.freeze(Object.defineProperty({__proto__:null,BlockColors:mn,BlockDefinition:yo,BlockModel:dt,get BlockPos(){return Ct},BlockState:Ri,ChunkBuilder:Xr,get ChunkPos(){return $l},ChunkSection:ql,get Color(){return Ze},get Cull(){return St},get Direction(){return Be},EFFECT_COLORS:_d,get Holder(){return so},Identifier:ie,get ItemModel(){return Ql},ItemRenderer:So,ItemStack:ai,get ItemTint(){return lo},get Json(){return se},Line:zs,Mesh:lt,get MobEffectInstance(){return ro},NbtAbstractList:Qs,NbtByte:Ni,NbtByteArray:ki,get NbtChunk(){return li},NbtCompound:At,NbtDouble:Bi,NbtEnd:no,NbtFile:$n,NbtFloat:lr,NbtInt:_n,NbtIntArray:Fi,NbtList:jt,NbtLong:rs,NbtLongArray:Oi,get NbtRegion(){return Gi},NbtShort:cr,NbtString:qn,NbtTag:ot,get NbtType(){return _e},POTION_EFFECTS:vd,PalettedContainer:io,get PotionContents(){return Os},Quad:Bn,RawDataInput:If,RawDataOutput:Uf,Registry:ao,Renderer:Ad,get Rotation(){return Kr},ShaderProgram:Td,get SpecialRenderers(){return rt},StringReader:$t,Structure:sS,TextureAtlas:Cn,ThreeStructureRenderer:NS,Vector:We,Vertex:Dn,clamp:Ai,createResourcesFromPack:Ed,getBundledDefaultPackUrls:bd,getDefaultPackUrls:mc,isPowerOfTwo:Zl,loadDefaultPackResources:LS,upperPowerOfTwo:pc},Symbol.toStringTag,{value:"Module"})),{Structure:wo,ThreeStructureRenderer:Mo,loadDefaultPackResources:FS,createResourcesFromPack:OS,BlockState:Wh}=kS;var Kh;if((Kh=Cn==null?void 0:Cn.prototype)!=null&&Kh.getTextureUV){const n=Cn.prototype.getTextureUV;Cn.prototype.getTextureUV=function(e){if(!e)return[0,0,this.part,this.part];const t=e.toString();if(this.idMap[t])return this.idMap[t];if(t.startsWith("minecraft:")){const i=t.substring(10);if(this.idMap[i])return this.idMap[i]}else{const i="minecraft:"+t;if(this.idMap[i])return this.idMap[i]}return n.call(this,e)}}let Hs,wt,Tn,Ut,ft,Ne,co=null,ur=null,uo="",qr=null,Si,Gs=null,An=[0,0,0],ec=10,Cs=null;wo.prototype.ensurePlacedCaches=function(){if(this.placedBlocksGrid)return;const n=this.size[0],e=this.size[1],t=this.size[2],i=n*e*t,r=new Uint16Array(i);r.fill(65535);const s=e*t;this.placedBlockObjectMap=new Map,this.placedBlockIndexMap=new Map;for(let a=0;a<this.blocks.length;a++){const o=this.blocks[a],c=o.pos[0]*s+o.pos[1]*t+o.pos[2];r[c]=o.state,this.placedBlockIndexMap.set(c,a)}this.placedBlocksGrid=r};wo.prototype.getBlock=function(n){if(!this.isInside(n))return null;this.ensurePlacedCaches(),this.size[0];const e=this.size[1],t=this.size[2],i=n[0]*(e*t)+n[1]*t+n[2],r=this.placedBlocksGrid[i];if(r===65535)return null;let s=this.placedBlockObjectMap.get(i);if(!s){const a=this.placedBlockIndexMap.get(i),o=a!==void 0?this.blocks[a]:null;s={pos:[n[0],n[1],n[2]],state:this.palette[r],nbt:o==null?void 0:o.nbt},this.placedBlockObjectMap.set(i,s)}return s};wo.prototype.getBlocks=function(){if(this.ensurePlacedCaches(),this.placedBlocksCache&&this.placedBlocksCache.length>0)return this.placedBlocksCache;this.placedBlocksCache=[];for(let n=0;n<this.blocks.length;n++){const e=this.blocks[n];this.placedBlocksCache.push({pos:[e.pos[0],e.pos[1],e.pos[2]],state:this.palette[e.state],nbt:e.nbt})}return this.placedBlocksCache};function ka(n,e,t,i,r=0,s=null,a=null){var be,ze,st;const o=new lt,c=((be=mn==null?void 0:mn[n])==null?void 0:be.call(mn,{}))??[.247,.462,.894],l=[14.2,12.5,10.5,9,7,5.3,3.7,1.9],u=(R,w,F)=>{var ne;if(!s)return!1;const Y=(ne=s.getBlock([R,w,F]))==null?void 0:ne.state;if(!Y)return!1;const ee=Y.getName().toString();return!!(ee==="minecraft:water"||ee==="minecraft:lava"||Y.isWaterlogged&&Y.isWaterlogged())},[f,d,h]=a||[0,0,0],g=i.up||(s&&a?u(f,d+1,h):!1),_=i.down||(s&&a?u(f,d-1,h):!1),m=i.north||(s&&a?u(f,d,h-1):!1),p=i.south||(s&&a?u(f,d,h+1):!1),M=i.west||(s&&a?u(f-1,d,h):!1),v=i.east||(s&&a?u(f+1,d,h):!1);let y=!1,P="north",C="bottom",T="straight",U=!1,b="bottom",x=!1,E="bottom",k="false",I="north";if(s&&a){const R=(ze=s.getBlock(a))==null?void 0:ze.state;if(R){const w=R.getName().toString(),F=Y=>{var ee;return typeof R.getProperty=="function"?R.getProperty(Y):(ee=R.properties)==null?void 0:ee[Y]};w.includes("stair")?(y=!0,P=F("facing")||"north",C=F("half")||"bottom",T=F("shape")||"straight"):w.includes("slab")&&!w.includes("double")?(U=!0,b=F("type")||"bottom"):w.includes("trapdoor")&&(x=!0,E=F("half")||"bottom",k=F("open")||"false",I=F("facing")||"north")}}const B=s&&a?(st=s.getBlock([a[0],a[1]+1,a[2]]))==null?void 0:st.state:null,D=B&&(B.getName().toString()==="minecraft:water"||B.getName().toString()==="minecraft:lava");let H=14.2;if(D)H=16;else{const R=e&7;H=l[R]??14.2}let j=H,O=H,X=H,Z=H;if(g||D)j=O=X=Z=16;else if(y||U||x)j=O=X=Z=H;else if(s&&a){const R=(F,Y,ee)=>{var Ie,ue,Ae;const ne=(Ie=s.getBlock([F,Y,ee]))==null?void 0:Ie.state;if(!ne)return-1;const Se=ne.getName().toString();if(!(Se==="minecraft:water"||Se==="minecraft:lava"||ne.isWaterlogged&&ne.isWaterlogged()))return-1;const fe=(ue=s.getBlock([F,Y+1,ee]))==null?void 0:ue.state;if(fe){const ke=fe.getName().toString();if(ke==="minecraft:water"||ke==="minecraft:lava")return 16}if(Se==="minecraft:water"||Se==="minecraft:lava"){const ke=typeof ne.getProperty=="function"?ne.getProperty("level"):((Ae=ne.properties)==null?void 0:Ae.level)??"0",ye=parseInt(ke||"0",10)&7;return l[ye]??14.2}return 14.2},w=(F,Y)=>{let ee=0,ne=0,Se=-1;for(const[fe,Ie]of F){const ue=R(fe,d,Ie);ue>=0&&(ee+=ue,ne++,ue>Se&&(Se=ue))}if(ne===0)return Y;const me=ee/ne;return Math.min(me,Se>=0?Se:Y)};j=w([[f-1,h-1],[f-1,h],[f,h-1],[f,h]],H),O=w([[f,h-1],[f+1,h-1],[f,h],[f+1,h]],H),X=w([[f,h],[f+1,h],[f,h+1],[f+1,h+1]],H),Z=w([[f-1,h],[f,h],[f-1,h+1],[f,h+1]],H)}const te=`block/${n}_still`,ve=`block/${n}_flow`,[pe,z,re,de]=t.getTextureUV(te),oe=(re-pe)/16,Te=(de-z)/16,[he,N,ce,q]=t.getTextureUV(ve),Ee=(ce-he)/16,Me=(q-N)/16,De=(R,w,F,Y,ee,ne,Se,me,fe,Ie,ue,Ae,ke,Ce,ye)=>{if(Ie){const ae=Bn.fromPoints(new We(R,fe,ee),new We(Y,me,ee),new We(Y,Se,F),new We(R,ne,F));ae.setColor(c),ae.v1.texture=[pe+R*oe,z+ee*Te],ae.v2.texture=[pe+Y*oe,z+ee*Te],ae.v3.texture=[pe+Y*oe,z+F*Te],ae.v4.texture=[pe+R*oe,z+F*Te],ae.v1.textureLimit=[pe,z,re,de],ae.v2.textureLimit=[pe,z,re,de],ae.v3.textureLimit=[pe,z,re,de],ae.v4.textureLimit=[pe,z,re,de],o.quads.push(ae)}if(ue){const ae=Bn.fromPoints(new We(R,w,F),new We(Y,w,F),new We(Y,w,ee),new We(R,w,ee));ae.setColor(c),ae.v1.texture=[pe+R*oe,z+F*Te],ae.v2.texture=[pe+Y*oe,z+F*Te],ae.v3.texture=[pe+Y*oe,z+ee*Te],ae.v4.texture=[pe+R*oe,z+ee*Te],ae.v1.textureLimit=[pe,z,re,de],ae.v2.textureLimit=[pe,z,re,de],ae.v3.textureLimit=[pe,z,re,de],ae.v4.textureLimit=[pe,z,re,de],o.quads.push(ae)}if(Ae){const ae=Bn.fromPoints(new We(Y,w,F),new We(R,w,F),new We(R,ne,F),new We(Y,Se,F));ae.setColor(c),ae.v1.texture=[he+Y*Ee,N+(16-w)*Me],ae.v2.texture=[he+R*Ee,N+(16-w)*Me],ae.v3.texture=[he+R*Ee,N+(16-ne)*Me],ae.v4.texture=[he+Y*Ee,N+(16-Se)*Me],ae.v1.textureLimit=[he,N,ce,q],ae.v2.textureLimit=[he,N,ce,q],ae.v3.textureLimit=[he,N,ce,q],ae.v4.textureLimit=[he,N,ce,q],o.quads.push(ae)}if(ke){const ae=Bn.fromPoints(new We(R,w,ee),new We(Y,w,ee),new We(Y,me,ee),new We(R,fe,ee));ae.setColor(c),ae.v1.texture=[he+R*Ee,N+(16-w)*Me],ae.v2.texture=[he+Y*Ee,N+(16-w)*Me],ae.v3.texture=[he+Y*Ee,N+(16-me)*Me],ae.v4.texture=[he+R*Ee,N+(16-fe)*Me],ae.v1.textureLimit=[he,N,ce,q],ae.v2.textureLimit=[he,N,ce,q],ae.v3.textureLimit=[he,N,ce,q],ae.v4.textureLimit=[he,N,ce,q],o.quads.push(ae)}if(Ce){const ae=Bn.fromPoints(new We(R,w,F),new We(R,w,ee),new We(R,fe,ee),new We(R,ne,F));ae.setColor(c),ae.v1.texture=[he+F*Ee,N+(16-w)*Me],ae.v2.texture=[he+ee*Ee,N+(16-w)*Me],ae.v3.texture=[he+ee*Ee,N+(16-fe)*Me],ae.v4.texture=[he+F*Ee,N+(16-ne)*Me],ae.v1.textureLimit=[he,N,ce,q],ae.v2.textureLimit=[he,N,ce,q],ae.v3.textureLimit=[he,N,ce,q],ae.v4.textureLimit=[he,N,ce,q],o.quads.push(ae)}if(ye){const ae=Bn.fromPoints(new We(Y,w,ee),new We(Y,w,F),new We(Y,Se,F),new We(Y,me,ee));ae.setColor(c),ae.v1.texture=[he+(16-ee)*Ee,N+(16-w)*Me],ae.v2.texture=[he+(16-F)*Ee,N+(16-w)*Me],ae.v3.texture=[he+(16-F)*Ee,N+(16-Se)*Me],ae.v4.texture=[he+(16-ee)*Ee,N+(16-me)*Me],ae.v1.textureLimit=[he,N,ce,q],ae.v2.textureLimit=[he,N,ce,q],ae.v3.textureLimit=[he,N,ce,q],ae.v4.textureLimit=[he,N,ce,q],o.quads.push(ae)}};if(y){const R={north:[2,3],south:[0,1],east:[0,3],west:[1,2]},w={north:[0,2,3],south:[0,1,2],east:[0,1,3],west:[1,2,3]},F={north:[1,2,3],south:[0,1,3],east:[0,2,3],west:[0,1,2]},Y={north:[2],south:[0],east:[3],west:[1]},ee={north:[3],south:[1],east:[0],west:[2]};let ne=[];T==="straight"?ne=R[P]||R.north:T==="outer_left"?ne=w[P]||w.north:T==="outer_right"?ne=F[P]||F.north:T==="inner_left"?ne=Y[P]||Y.north:T==="inner_right"?ne=ee[P]||ee.north:ne=R[P]||R.north;const Se=C==="top",me=Se?0:8,fe=(j+O)/2,Ie=(j+Z)/2,ue=(O+X)/2,Ae=(Z+X)/2,ke=(j+O+X+Z)/4,Ce=ae=>ne.includes(ae),ye=(ae,He,nt,Oe,S,G,$,le)=>{De(ae,me,He,nt,Oe,S,G,$,le,!g&&!Se,!_&&He===0&&Se,!m&&He===0,!p&&Oe===16,!M&&ae===0,!v&&nt===16)};return Ce(0)&&ye(0,0,8,8,j,fe,ke,Ie),Ce(1)&&ye(8,0,16,8,fe,O,ue,ke),Ce(2)&&ye(8,8,16,16,ke,ue,X,Ae),Ce(3)&&ye(0,8,8,16,Ie,ke,Ae,Z),o}return U?(b==="bottom"?De(0,8,0,16,16,j,O,X,Z,!g,!1,!m,!p,!M,!v):De(0,0,0,16,16,8,8,8,8,!1,!_,!m,!p,!M,!v),o):x?(k==="true"?I==="north"?De(0,0,3,16,16,j,O,X,Z,!g,!_,!1,!p,!M,!v):I==="south"?De(0,0,0,16,13,j,O,X,Z,!g,!_,!m,!1,!M,!v):I==="west"?De(3,0,0,16,16,j,O,X,Z,!g,!_,!m,!p,!1,!v):De(0,0,0,13,16,j,O,X,Z,!g,!_,!m,!p,!M,!1):E==="bottom"?De(0,3,0,16,16,j,O,X,Z,!g,!1,!m,!p,!M,!v):De(0,0,0,16,16,13,13,13,13,!1,!_,!m,!p,!M,!v),o):(De(0,0,0,16,16,j,O,X,Z,!g,!_,!m,!p,!M,!v),o)}rt&&(rt.liquidRenderer=function(){return new lt});if(rt!=null&&rt.getBlockMesh){const n=rt.getBlockMesh;rt.getBlockMesh=function(e,t,i,r,s,a){var u;const o=e.getName().toString(),c=new Float32Array([.0625,0,0,0,0,.0625,0,0,0,0,.0625,0,0,0,0,1]);if(o==="minecraft:water"||o==="minecraft:lava"){const f=o.replace("minecraft:",""),d=typeof e.getProperty=="function"?e.getProperty("level"):((u=e.properties)==null?void 0:u.level)??"0",h=parseInt(d||"0",10);return ka(f,h,i,r,0,s,a).transform(c)}if(o==="minecraft:chest"||o==="minecraft:trapped_chest"){let f="single";if(typeof e.getProperties=="function"){const d=e.getProperties();d&&d.type&&(f=d.type)}else e.properties&&(f=e.properties.type||"single");if(f==="left"||f==="right"){const d=new lt;if(e.isWaterlogged&&e.isWaterlogged()){const h=ka("water",0,i,r,0,s,a);h&&d.merge(h.transform(c))}return d}}else if(o.includes("copper_chest")){const f=new lt;if(e.isWaterlogged&&e.isWaterlogged()){const d=ka("water",0,i,r,0,s,a);d&&f.merge(d.transform(c))}return f}const l=n.call(this,e,t,i,r);if(e.isWaterlogged&&e.isWaterlogged()){const f=ka("water",0,i,r,0,s,a);f&&!f.isEmpty()&&l.merge(f.transform(c))}return l}}var Jh;if((Jh=dt==null?void 0:dt.prototype)!=null&&Jh.flatten){const n=dt.prototype.flatten;dt.prototype.flatten=function(e){if(this.parent){const t=this.parent.toString();if(t==="builtin/entity"||t==="minecraft:builtin/entity"||t==="builtin/generated"||t==="minecraft:builtin/generated"){this.parent=void 0;return}}return n.call(this,e)}}const BS=["chest","sign","frame","stair","slab","glass","door","trapdoor","fence","wall","gate","lantern","torch","chain","ladder","bars","pane","carpet","flower","tulip","rose","orchid","dandelion","poppy","bluet","lily","sunflower","lilac","peony","bush","sapling","mushroom","fungus","roots","sprout","vine","lichen","rail","lever","button","pressure_plate","tripwire","redstone","repeater","comparator","campfire","candle","amethyst","dripstone","coral","pickle","egg","bell","conduit","beacon","brewing","cauldron","hopper","composter","lectern","grindstone","stonecutter","anvil","enchanting","portal","dragon_egg","cake","bed","piston","head","skull","banner","bamboo","sugar_cane","cactus","kelp","seagrass"],Ha=n=>{if(!n)return!1;const e=n.toLowerCase();return BS.some(t=>e.includes(t))},Xh=n=>{if(!n)return!1;const e=n.toLowerCase();return e.includes("redstone_torch")||e.includes("redstone_wall_torch")||e.includes("repeater")||e.includes("comparator")},Cl=n=>{if(!n)return!1;const e=n.toLowerCase();return e.includes("glass")&&!e.includes("pane")},qh=n=>n?n.toLowerCase().includes("pane"):!1,$h=n=>{if(!n)return!1;const e=n.toLowerCase();return!(!e.includes("leaves")||e.includes("azalea"))},Yh=n=>n?n.toLowerCase().includes("observer"):!1;Xr&&(Xr.prototype.needsCull=function(n,e){var o;const t=n.state.getName().toString();if(Xh(t))return!1;const i=(o=this.structure.getBlock(Ct.towards(n.pos,e)))==null?void 0:o.state;if(!i)return!1;const r=i.getName().toString();if(Cl(t))return Cl(r);if(qh(t))return!1;if($h(t))return $h(r);if(Yh(t))return Yh(r);if(t==="minecraft:water"||t==="minecraft:lava"){if(r==="minecraft:water"||r==="minecraft:lava"||i.isWaterlogged&&i.isWaterlogged())return!0;if(Cl(r)||qh(r)||Ha(r))return!1;const l=this.resources.getBlockFlags(i.getName());return!(l!=null&&l.transparent||!(l!=null&&l.opaque))}const a=this.resources.getBlockFlags(i.getName());return!(!(a!=null&&a.opaque)||Ha(r))},Xr.prototype.isFullyOccluded=function(n){var i;const e=n.state.getName().toString();if(Xh(e)||e.includes("chest")||e.includes("sign")||e.includes("frame")||e.includes("torch"))return!1;const t=[Be.UP,Be.DOWN,Be.NORTH,Be.SOUTH,Be.EAST,Be.WEST];for(const r of t){const s=(i=this.structure.getBlock(Ct.towards(n.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=s.getName().toString();if(Ha(a))return!1;const o=this.resources.getBlockFlags(s.getName());if(!(o!=null&&o.opaque))return!1}return!0},Xr.prototype.processBlock=function(n,e){var c;const t=n.state.getName(),i=t.toString(),r=this.getBlockProps(n.state);if(this.isFullyOccluded(n))return;const s=[Math.floor(n.pos[0]/this.chunkSize[0]),Math.floor(n.pos[1]/this.chunkSize[1]),Math.floor(n.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(e&&!e.has(a))return;const o=this.getChunk(s);try{const l={up:this.needsCull(n,Be.UP),down:this.needsCull(n,Be.DOWN),west:this.needsCull(n,Be.WEST),east:this.needsCull(n,Be.EAST),north:this.needsCull(n,Be.NORTH),south:this.needsCull(n,Be.SOUTH)},u=new lt;if(!i.includes("sign")){const d=this.resources.getBlockDefinition(t);if(d)try{u.merge(d.getMesh(t,r,this.resources,this.resources,l))}catch{}}if(rt!=null&&rt.getBlockMesh)try{const d=rt.getBlockMesh(n.state,n.nbt,this.resources,l,this.structure,n.pos);d&&!d.isEmpty()&&u.merge(d)}catch{}u.isEmpty()||(this.finishChunkMesh(u,n.pos,t,r,a),(c=this.resources.getBlockFlags(n.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(u):o.mesh.merge(u))}catch(l){console.error(`Error rendering block ${i}`,l)}});Mo.prototype.applyDrawDistance=function(){if(this.chunkMeshes)for(let n=0;n<this.chunkMeshes.length;n++){const e=this.chunkMeshes[n];e.visible=!0,e.frustumCulled=!1}};const jh=new ct,Gr=new ct,ys=[0,0,0];Mo.prototype.prepareCamera=function(n){if(jh.fromArray(n),Gr.copy(jh).invert(),this.camera.position.setFromMatrixPosition(Gr),this.camera.quaternion.setFromRotationMatrix(Gr),this.camera.updateMatrixWorld(!0),ys[0]=Gr.elements[12],ys[1]=Gr.elements[13],ys[2]=Gr.elements[14],this.drawDistance)this.applyDrawDistance(ys,this.drawDistance);else if(this.chunkMeshes)for(let e=0;e<this.chunkMeshes.length;e++)this.chunkMeshes[e].visible=!0;typeof this.updateEmissiveLightsForCamera=="function"&&this.updateEmissiveLightsForCamera(ys)};Mo.prototype.rebuildChunksAsync=async function(n){const e=++this.buildToken;if(window.AndroidHost&&window.AndroidHost.onLoadingProgress("RENDERING_0%"),await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:n,timeSliceMs:this.asyncChunkBuildTimeMs||12,onProgress:(r,s)=>{if(window.AndroidHost){const a=Math.floor(r/Math.max(1,s)*50);window.AndroidHost.onLoadingProgress(`RENDERING_${a}%`)}}}),e!==this.buildToken)return;const i=this.rebuildChunkObjectsAsync.call(this,e).then(()=>{if(this.chunkMeshes)for(let r=0;r<this.chunkMeshes.length;r++){const s=this.chunkMeshes[r];s.visible=!0,s.frustumCulled=!1}window.AndroidHost&&e===this.buildToken&&window.AndroidHost.onLoadingProgress("RENDERING_100%")});return this.buildPromise=i,i};async function zS(){Hs=document.getElementById("renderer-container");const n=window.innerWidth/window.innerHeight;Tn=new ln(60,n,.5,1e5),Ut=new Ya(-10*n,10*n,10,-10,.5,1e5),wt=Tn,wt.position.set(10,15,20);try{const e=Date.now(),t=window.location.href.split("?")[0].replace("index.html","")+"default-pack/",i=E=>{const k=new Set;return E&&E.split(/\r?\n/).forEach(I=>{const B=I.trim();B&&!B.startsWith("#")&&k.add(B.startsWith("minecraft:")?B:"minecraft:"+B)}),k},[r,s,a,o,c]=await Promise.all([FS({baseUrl:t+`?cb=${e}`}),fetch(t+`block-flags/opaque.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/transparent.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/non_self_culling.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/emissive.json?cb=${e}`).catch(()=>null)]),l=["acacia","bamboo","birch","cherry","crimson","dark_oak","jungle","mangrove","oak","pale_oak","poplar","spruce","warped"];l.forEach(E=>{delete r.assets.blockstates[`${E}_sign`],delete r.assets.models[`${E}_sign`],delete r.assets.blockstates[`${E}_wall_sign`],delete r.assets.models[`${E}_wall_sign`],delete r.assets.blockstates[`${E}_hanging_sign`],delete r.assets.models[`${E}_hanging_sign`],delete r.assets.blockstates[`${E}_wall_hanging_sign`],delete r.assets.models[`${E}_wall_hanging_sign`]});const u=(E,k,I)=>({variants:{"type=left,facing=north":{model:k,y:0},"type=left,facing=south":{model:k,y:180},"type=left,facing=west":{model:k,y:270},"type=left,facing=east":{model:k,y:90},"type=right,facing=north":{model:I,y:0},"type=right,facing=south":{model:I,y:180},"type=right,facing=west":{model:I,y:270},"type=right,facing=east":{model:I,y:90},"type=single,facing=north":{model:E,y:0},"type=single,facing=south":{model:E,y:180},"type=single,facing=west":{model:E,y:270},"type=single,facing=east":{model:E,y:90},"facing=north":{model:E,y:0},"facing=south":{model:E,y:180},"facing=west":{model:E,y:270},"facing=east":{model:E,y:90}}});r.assets.blockstates.chest=u("block/chest","block/chest_left","block/chest_right"),r.assets.blockstates.trapped_chest=u("block/chest","block/trapped_chest_left","block/trapped_chest_right");const f=(E,k)=>{const I=E?[1,0,1]:[0,0,1],B=E?[16,10,15]:[15,10,15],D=E?[1,10,1]:[0,10,1],H=E?[16,14,15]:[15,14,15],j=E?[15,7,0]:[0,7,0],O=E?[16,11,2]:[1,11,2],X={north:{uv:[10.75,8.25,14.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7.25,10.75],rotation:180,texture:"#0"},up:{uv:[11,8.25,7.25,4.75],texture:"#0"},down:{uv:[7.25,8.25,3.5,4.75],texture:"#0"}},Z={north:{uv:[10.75,3.75,14.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7.25,4.75],rotation:180,texture:"#0"},up:{uv:[11,3.5,7.25,0],texture:"#0"},down:{uv:[7.25,3.5,3.5,0],texture:"#0"}},te={north:{uv:[.25,.25,.5,1.25],rotation:180,texture:"#0"},south:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.5,0,.75,.25],texture:"#0"},down:{uv:[.25,0,.5,.25],texture:"#0"}};return E?(X.west={uv:[7.25,8.25,10.75,10.75],rotation:180,texture:"#0"},Z.west={uv:[7.25,3.75,10.75,4.75],rotation:180,texture:"#0"},te.west={uv:[.5,.25,.75,1.25],rotation:180,texture:"#0"}):(X.east={uv:[3.5,8.25,0,10.75],rotation:180,texture:"#0"},Z.east={uv:[3.5,3.75,0,4.75],rotation:180,texture:"#0"},te.east={uv:[.25,.25,0,1.25],rotation:180,texture:"#0"}),{textures:{0:k},elements:[{from:I,to:B,faces:X},{from:D,to:H,faces:Z},{from:j,to:O,faces:te}]}};r.assets.models["block/chest_left"]=f(!0,"entity/chest/normal_left"),r.assets.models["block/chest_right"]=f(!1,"entity/chest/normal_right"),r.assets.models["block/trapped_chest_left"]=f(!0,"entity/chest/trapped_left"),r.assets.models["block/trapped_chest_right"]=f(!1,"entity/chest/trapped_right"),r.assets.models["block/copper_torch"]={parent:"minecraft:block/template_torch",textures:{torch:"minecraft:block/copper_torch"}},r.assets.models["block/copper_wall_torch"]={parent:"minecraft:block/template_torch_wall",textures:{torch:"minecraft:block/copper_torch"}};const d=["copper_torch","exposed_copper_torch","weathered_copper_torch","oxidized_copper_torch","waxed_copper_torch","waxed_exposed_copper_torch","waxed_weathered_copper_torch","waxed_oxidized_copper_torch"],h={variants:{"":{model:"minecraft:block/copper_torch"}}},g={variants:{"facing=east":{model:"minecraft:block/copper_wall_torch"},"facing=north":{model:"minecraft:block/copper_wall_torch",y:270},"facing=south":{model:"minecraft:block/copper_wall_torch",y:90},"facing=west":{model:"minecraft:block/copper_wall_torch",y:180}}};d.forEach(E=>{r.assets.blockstates[E]=h,r.assets.blockstates[E.replace("_torch","_wall_torch")]=g});const _=E=>({textures:{0:E},elements:[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],texture:"#0"},down:{uv:[.75,0,1.25,.25],texture:"#0"}}}]});[{name:"copper_chest",tex:"entity/chest/copper"},{name:"exposed_copper_chest",tex:"entity/chest/copper_exposed"},{name:"weathered_copper_chest",tex:"entity/chest/copper_weathered"},{name:"oxidized_copper_chest",tex:"entity/chest/copper_oxidized"}].forEach(E=>{const k=`block/${E.name}`,I=`block/${E.name}_left`,B=`block/${E.name}_right`;r.assets.models[k]=_(E.tex),r.assets.models[I]=f(!0,`${E.tex}_left`),r.assets.models[B]=f(!1,`${E.tex}_right`);const D=u(k,I,B);r.assets.blockstates[E.name]=D,r.assets.blockstates[`waxed_${E.name}`]=D});const p=E=>({variants:{"facing=south":{model:E},"facing=north":{model:E,y:180},"facing=east":{model:E,y:90},"facing=west":{model:E,y:270},"facing=up":{model:E,x:270},"facing=down":{model:E,x:90},"facing=south,fixed=false":{model:E},"facing=north,fixed=false":{model:E,y:180},"facing=east,fixed=false":{model:E,y:90},"facing=west,fixed=false":{model:E,y:270},"facing=up,fixed=false":{model:E,x:270},"facing=down,fixed=false":{model:E,x:90},"facing=south,fixed=true":{model:E},"facing=north,fixed=true":{model:E,y:180},"facing=east,fixed=true":{model:E,y:90},"facing=west,fixed=true":{model:E,y:270},"facing=up,fixed=true":{model:E,x:270},"facing=down,fixed=true":{model:E,x:90},"facing=south,map=false":{model:E},"facing=north,map=false":{model:E,y:180},"facing=east,map=false":{model:E,y:90},"facing=west,map=false":{model:E,y:270},"facing=up,map=false":{model:E,x:270},"facing=down,map=false":{model:E,x:90},"facing=south,map=true":{model:E},"facing=north,map=true":{model:E,y:180},"facing=east,map=true":{model:E,y:90},"facing=west,map=true":{model:E,y:270},"facing=up,map=true":{model:E,x:270},"facing=down,map=true":{model:E,x:90},"":{model:E}}});r.assets.blockstates.item_frame=p("block/item_frame"),r.assets.blockstates.glow_item_frame=p("block/glow_item_frame");const M=()=>({textures:{wood:"block/birch_planks"},elements:[{from:[3,3,0],to:[13,13,.5],faces:{north:{uv:[3,3,13,13],texture:"#wood"},south:{uv:[3,3,13,13],texture:"#wood"}}},{from:[2,2,0],to:[14,3,1],faces:{north:{uv:[2,13,14,14],texture:"#wood"},south:{uv:[2,13,14,14],texture:"#wood"},up:{uv:[2,15,14,16],texture:"#wood"},down:{uv:[2,0,14,1],texture:"#wood"},east:{uv:[0,13,1,14],texture:"#wood"},west:{uv:[15,13,16,14],texture:"#wood"}}},{from:[2,13,0],to:[14,14,1],faces:{north:{uv:[2,2,14,3],texture:"#wood"},south:{uv:[2,2,14,3],texture:"#wood"},up:{uv:[2,0,14,1],texture:"#wood"},down:{uv:[2,15,14,16],texture:"#wood"},east:{uv:[0,2,1,3],texture:"#wood"},west:{uv:[15,2,16,3],texture:"#wood"}}},{from:[2,3,0],to:[3,13,1],faces:{north:{uv:[13,3,14,13],texture:"#wood"},south:{uv:[2,3,3,13],texture:"#wood"},east:{uv:[0,3,1,13],texture:"#wood"},west:{uv:[15,3,16,13],texture:"#wood"}}},{from:[13,3,0],to:[14,13,1],faces:{north:{uv:[2,3,3,13],texture:"#wood"},south:{uv:[13,3,14,13],texture:"#wood"},east:{uv:[0,3,1,13],texture:"#wood"},west:{uv:[15,3,16,13],texture:"#wood"}}}]});r.assets.models["block/item_frame"]=M(),r.assets.models["block/glow_item_frame"]=M();const v=s&&s.ok?await s.text():"",y=a&&a.ok?await a.text():"",P=o&&o.ok?await o.text():"",C=c&&c.ok?await c.json():{},T=i(v),U=i(y),b=new Set;T.forEach(E=>{Ha(E)?U.add(E):b.add(E)});const x={opaque:b,transparent:U,nonSelfCulling:i(P),emissive:C};if(qr=OS({assets:r.assets,atlas:r.atlas,flags:x}),qr&&qr.textures){const E=qr.textures;Object.keys(E).forEach(k=>{k.startsWith("minecraft:")?E[k.replace("minecraft:","")]=E[k]:E["minecraft:"+k]=E[k]}),l.forEach(k=>{E[`entity/signs/${k}`]&&(E[`minecraft:entity/signs/${k}`]=E[`entity/signs/${k}`]),E[`entity/signs/hanging/${k}`]&&(E[`minecraft:entity/signs/hanging/${k}`]=E[`entity/signs/hanging/${k}`])})}window.AndroidHost&&window.AndroidHost.onLoadingProgress("READY")}catch(e){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: Failed to load default resource pack. "+(e==null?void 0:e.message))}}const Zh=ut();function gc(){Cs=requestAnimationFrame(gc),ft&&ft.update(),Ne&&wt&&(wt.updateMatrixWorld(!0),lS(Zh,wt.matrixWorldInverse.elements),Ne.drawStructure(Zh))}window.startRenderLoop=function(){Cs===null&&gc()};window.stopRenderLoop=function(){Cs!==null&&(cancelAnimationFrame(Cs),Cs=null)};window.destroyRenderer=function(){var n,e;if(window.stopRenderLoop(),ft&&ft.dispose(),Ne)try{if(Ne.chunkMeshes){for(const t of Ne.chunkMeshes)t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{var r;return(r=i.dispose)==null?void 0:r.call(i)}):(e=(n=t.material).dispose)==null||e.call(n));Ne.chunkMeshes=[]}Ne.renderer&&(Ne.renderer.dispose(),Ne.renderer.forceContextLoss())}catch(t){console.error("Error destroying renderer: ",t)}ur=null,co=null,Gs=null,Hs&&(Hs.innerHTML="")};async function HS(n,e){const t=n.getCompound("Size"),i=[t.getNumber("x")??0,t.getNumber("y")??0,t.getNumber("z")??0],r=[Math.abs(i[0]),Math.abs(i[1]),Math.abs(i[2])],s=n.getList("BlockStatePalette"),a=[];s.forEach(X=>{if(!X.isCompound())return;const Z=X.getString("Name")??"minecraft:air",te={};if(X.has("Properties")){const ve=X.get("Properties");ve&&ve.isCompound()&&ve.forEach((pe,z)=>{pe&&(z&&z.value!==void 0?typeof z.value=="object"&&Array.isArray(z.value)?te[pe]=String(z.value[1]??z.value[0]):te[pe]=String(z.value):z&&typeof z.getAsString=="function"?te[pe]=z.getAsString():z!=null&&(te[pe]=String(z)))})}a.push(new Wh(Z,te))});const o=a.map(X=>X.is("minecraft:air")),c=n.has("BlockStates")?n.getLongArray("BlockStates"):null;let l=0,u=new BigUint64Array(0);if(c){if(typeof c.getItems=="function"){const X=c.getItems();l=X.length,u=new BigUint64Array(l);for(let Z=0;Z<l;Z++){const te=X[Z];if(te&&typeof te.getAsPair=="function"){const ve=te.getAsPair(),pe=BigInt(ve[0]>>>0),z=BigInt(ve[1]>>>0);u[Z]=pe<<32n|z}else if(te&&typeof te.value=="bigint")u[Z]=BigInt(te.value);else if(Array.isArray(te)){const ve=BigInt((te[0]??0)>>>0),pe=BigInt((te[1]??0)>>>0);u[Z]=ve<<32n|pe}}}else if(Array.isArray(c.value)){const X=c.value;l=X.length,u=new BigUint64Array(l);for(let Z=0;Z<l;Z++)u[Z]=BigInt(X[Z])}}const f=Math.max(2,Math.ceil(Math.log2(Math.max(2,a.length)))),d=(1n<<BigInt(f))-1n,h=r[0],g=r[1],_=r[2],m=h*g*_,p=[];let M=h,v=g,y=_,P=0,C=0,T=0,U=!1,b=performance.now();for(let X=0;X<m;X++){let Z=0;if(l>0){const te=BigInt(X*f),ve=Number(te>>6n),pe=te&63n,z=BigInt((X+1)*f-1),re=Number(z>>6n);if(ve<l){if(ve===re)Z=Number(u[ve]>>pe&d);else if(re<l){const de=64n-pe;Z=Number((u[ve]>>pe|u[re]<<de)&d)}}}if(Z>=0&&Z<a.length&&!o[Z]){const te=X%h,ve=Math.floor(X/(h*_)),pe=Math.floor(X/h)%_;p.push({pos:[te,ve,pe],state:Z}),te<M&&(M=te),ve<v&&(v=ve),pe<y&&(y=pe),te>P&&(P=te),ve>C&&(C=ve),pe>T&&(T=pe),U=!0}X&255||performance.now()-b>=12&&(e&&e(Math.floor(X/m*100)),await new Promise(ve=>requestAnimationFrame(ve)),b=performance.now())}if(U){An=[(M+P)/2,(v+C)/2,(y+T)/2];const X=P-M+1,Z=C-v+1,te=T-y+1;ec=Math.max(1,.5*Math.sqrt(X*X+Z*Z+te*te))}else An=[h/2,g/2,_/2],ec=Math.max(1,Math.max(h,g,_)/2);const x=["Entities","PendingBlockEntities","TileEntities","BlockEntities"],E=n.has("Position")?n.getCompound("Position"):null,k=E?E.getNumber("x")??0:0,I=E?E.getNumber("y")??0:0,B=E?E.getNumber("z")??0:0,D=i[0]<0?k+i[0]+1:k,H=i[1]<0?I+i[1]+1:I,j=i[2]<0?B+i[2]+1:B,O=new Set;return p.forEach(X=>O.add(X.pos[0]+","+X.pos[1]+","+X.pos[2])),x.forEach(X=>{if(!n.has(X))return;const Z=n.getList(X);Z&&Z.forEach(te=>{if(!te||!te.isCompound())return;const pe=(te.getString("id")??te.getString("Id")??te.getString("Name")??"").toLowerCase().replace("minecraft:","");if(pe!=="item_frame"&&pe!=="glow_item_frame")return;let z=0,re=0,de=0;if(te.has("Pos")){const be=te.getList("Pos");be&&be.length>=3&&(z=be.getNumber(0)??0,re=be.getNumber(1)??0,de=be.getNumber(2)??0)}else te.has("TileX")?(z=te.getNumber("TileX")??0,re=te.getNumber("TileY")??0,de=te.getNumber("TileZ")??0):te.has("x")&&(z=te.getNumber("x")??0,re=te.getNumber("y")??0,de=te.getNumber("z")??0);let oe=Math.floor(z-D),Te=Math.floor(re-H),he=Math.floor(de-j);if((oe<0||oe>=h||Te<0||Te>=g||he<0||he>=_)&&(oe=Math.floor(z),Te=Math.floor(re),he=Math.floor(de)),oe<0||oe>=h||Te<0||Te>=g||he<0||he>=_)return;let N="south",ce=-1;if(te.has("Facing")){const be=te.get("Facing");typeof be=="number"?ce=be:be&&typeof be.getAsNumber=="function"?ce=be.getAsNumber():be&&be.value!==void 0?ce=Number(be.value):typeof be=="string"&&(N=be.toLowerCase())}else te.has("FacingDirection")?ce=te.getNumber("FacingDirection")??-1:te.has("Direction")&&(ce=te.getNumber("Direction")??-1);if(ce!==-1){const be={0:"down",1:"up",2:"north",3:"south",4:"west",5:"east"};be[ce]&&(N=be[ce])}const q=oe+","+Te+","+he;O.has(q)&&(N==="south"&&he+1<_?he+=1:N==="north"&&he-1>=0?he-=1:N==="east"&&oe+1<h?oe+=1:N==="west"&&oe-1>=0?oe-=1:N==="up"&&Te+1<g?Te+=1:N==="down"&&Te-1>=0&&(Te-=1));const Ee=pe==="glow_item_frame"?"minecraft:glow_item_frame":"minecraft:item_frame",Me=new Wh(Ee,{facing:N,fixed:"false",invisible:"false",map:"false"});a.push(Me);const De=a.length-1;p.push({pos:[oe,Te,he],state:De}),O.add(oe+","+Te+","+he)})}),e&&e(100),new wo(r,a,p)}window.loadLitematic=async function(){try{co=await(await fetch("./model.litematic")).arrayBuffer(),Gs=$n.read(new Uint8Array(co)).root;const t=Gs.getCompound("Regions");let i=[];t&&typeof t.keys=="function"?i=Array.from(t.keys()):t&&(i=Object.keys(t)),i=i.filter(r=>typeof r=="string"&&r!=="properties"&&r!=="constructor"&&r!=="__proto__"),i.length===0&&(i=["Region1"]),uo=i[0],window.AndroidHost&&window.AndroidHost.onRegionsParsed(JSON.stringify(i)),await Cd(uo),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS")}catch(n){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(n==null?void 0:n.message))}};async function Cd(n){var u,f;if(!co||!qr||!Gs)return;if(window.stopRenderLoop(),ft&&ft.dispose(),Ne)try{if(Ne.chunkMeshes){for(const d of Ne.chunkMeshes)d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material.forEach(h=>{var g;return(g=h.dispose)==null?void 0:g.call(h)}):(f=(u=d.material).dispose)==null||f.call(u));Ne.chunkMeshes=[]}Ne.dispose()}catch(d){console.error("Error disposing renderer: ",d)}Hs.innerHTML="",Si=document.createElement("canvas"),Si.style.width="100%",Si.style.height="100%",Hs.appendChild(Si);const t=Gs.getCompound("Regions").getCompound(n);ur=await HS(t,d=>{window.AndroidHost&&window.AndroidHost.onLoadingProgress(`DECODING_${d}%`)}),await GS();const i=ur.getSize(),r=i[0]*i[1]*i[2],s=Math.max(i[0],i[1],i[2]),a=r>1e6||s>128?32:16,o={asyncBuild:!0,asyncChunkBuildTimeMs:12,chunkSize:[a,a,a]};if(Ne=new Mo(Si,ur,qr,o),Ne.drawDistance=1e5,Ne.atlasTexture){const d=Ne.atlasTexture;d.minFilter=Ss,d.magFilter=xt,Ne.renderer&&(d.anisotropy=Ne.renderer.capabilities.getMaxAnisotropy()),d.needsUpdate=!0}Ne.sunlight&&Ne.sunlight.fog&&(Ne.sunlight.fog.density=0,Ne.sunlight.fog.heightFalloff=0),Ne.setViewport(0,0,window.innerWidth,window.innerHeight),Ne.camera=wt,Ne.skyScene&&Ne.skyScene.clear(),Ne.renderer&&(Ne.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ne.renderer.toneMapping=tf,Ne.renderer.toneMappingExposure=.7),Vr=!0,window.toggleDayNight();const c=window.innerWidth/window.innerHeight;Tn.far=1e5,Tn.aspect=c,Tn.updateProjectionMatrix(),Ut.far=1e5,Ut.updateProjectionMatrix(),ft&&ft.dispose(),ft=new Df(wt,Si),ft.enableDamping=!0,ft.dampingFactor=.05,ft.target.set(An[0],An[1],An[2]);const l=Math.max(ec*2.2,10);wt.position.set(An[0]+l,An[1]+l*.8,An[2]+l),ft.update(),window.addEventListener("resize",()=>{const d=window.innerWidth,h=window.innerHeight,g=d/h;if(Ne.setViewport(0,0,d,h),Tn.aspect=g,Tn.updateProjectionMatrix(),wt===Ut){const m=wt.position.distanceTo(ft.target)*Math.tan(Tn.fov*Math.PI/360)*2,p=m*g;Ut.left=-p/2,Ut.right=p/2,Ut.top=m/2,Ut.bottom=-m/2,Ut.far=1e5,Ut.updateProjectionMatrix()}}),gc(),await Ne.whenReady()}async function GS(){if(ur)try{const n=ur,e=n.blocks||[],t=n.palette||[],i={};let r=0;const s=e.length;let a=0,o=performance.now();for(;a<s;){const c=Math.min(a+5e4,s);for(;a<c;a++){const l=e[a];if(l){const u=l.state,f=t[u];if(f){const d=f.getName().toString();i[d]=(i[d]||0)+1,r++}}}a<s&&performance.now()-o>=12&&(await new Promise(l=>requestAnimationFrame(l)),o=performance.now())}window.AndroidHost&&window.AndroidHost.onStatisticsUpdated(r,JSON.stringify(i))}catch(n){console.error("Error collecting block statistics: ",n)}}window.toggleCameraView=function(){if(!ft||!Si)return;const n=ft.target.clone(),e=wt.position.clone(),t=new W().subVectors(e,n),i=Math.max(t.length(),5);if(wt===Tn){const r=window.innerWidth/window.innerHeight,s=i*Math.tan(Tn.fov*Math.PI/360)*2,a=s*r;Ut.left=-a/2,Ut.right=a/2,Ut.top=s/2,Ut.bottom=-s/2,Ut.far=1e5,Ut.updateProjectionMatrix(),wt=Ut}else wt=Tn;wt.position.copy(e),Ne&&(Ne.camera=wt,Ne.sunlight&&Ne.sunlight.postProcess&&(wt===Ut?Ne.sunlight.postProcess.enabled=!1:Ne.sunlight.postProcess.enabled=!0)),ft.dispose(),ft=new Df(wt,Si),ft.enableDamping=!0,ft.dampingFactor=.05,ft.target.copy(n),ft.update()};let Vr=!1;window.toggleDayNight=function(){if(Vr=!Vr,Ne){if(Ne.renderer&&Ne.renderer.setClearColor(Vr?264208:11062,1),Ne.sunlight){const n=Ne.sunlight;Vr?(n.intensity=.08,n.ambientIntensity=.12,n.emissive&&(n.emissive.intensity=.25),n.direction=[-.2,-.9,-.3],n.light&&(n.light.intensity=.08),n.ambient&&(n.ambient.intensity=.12)):(n.intensity=.5,n.ambientIntensity=.65,n.emissive&&(n.emissive.intensity=.1),n.direction=[.6,1,.8],n.light&&(n.light.intensity=.5),n.ambient&&(n.ambient.intensity=.65))}Ne.opaqueMaterial&&Ne.applySunlightUniforms(Ne.opaqueMaterial),Ne.transparentMaterial&&Ne.applySunlightUniforms(Ne.transparentMaterial)}return Vr};window.resetCamera=function(){if(!ur||!ft||!wt)return;const n=new W().subVectors(wt.position,ft.target);ft.target.set(An[0],An[1],An[2]),wt.position.addVectors(ft.target,n),ft.update()};window.switchRegion=async function(n){n!==uo&&(window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),uo=n,await Cd(n),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS"))};zS();
