var Ad=Object.defineProperty;var Cd=(n,e,t)=>e in n?Ad(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var P=(n,e,t)=>Cd(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="164",vr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,yc=1,Pd=2,$h=1,Ld=2,ti=3,mn=0,tn=1,On=2,Ci=0,qr=1,Sc=2,wc=3,Mc=4,Dd=5,Ki=100,Id=101,Ud=102,Nd=103,kd=104,Fd=200,Od=201,Bd=202,zd=203,Al=204,Cl=205,Hd=206,Gd=207,Vd=208,Wd=209,Xd=210,qd=211,$d=212,Yd=213,jd=214,Zd=0,Kd=1,Jd=2,Ba=3,Qd=4,ep=5,tp=6,np=7,Yh=0,ip=1,rp=2,Ri=0,sp=1,ap=2,op=3,jh=4,lp=5,cp=6,up=7,Zh=300,Kr=301,Jr=302,Rl=303,Pl=304,co=306,Ll=1e3,Cn=1001,Dl=1002,vt=1003,hp=1004,ys=1005,Yt=1006,Eo=1007,tr=1008,Oi=1009,fp=1010,dp=1011,Kh=1012,Jh=1013,Bi=1014,Rn=1015,Qr=1016,Qh=1017,ef=1018,Gs=1020,pp=35902,mp=1021,gp=1022,Wt=1023,_p=1024,vp=1025,Pi=1026,Rs=1027,xp=1028,tf=1029,yp=1030,nf=1031,rf=1033,To=33776,Ao=33777,Co=33778,Ro=33779,bc=35840,Ec=35841,Tc=35842,Ac=35843,Cc=36196,Rc=37492,Pc=37496,Lc=37808,Dc=37809,Ic=37810,Uc=37811,Nc=37812,kc=37813,Fc=37814,Oc=37815,Bc=37816,zc=37817,Hc=37818,Gc=37819,Vc=37820,Wc=37821,Po=36492,Xc=36494,qc=36495,Sp=36283,$c=36284,Yc=36285,jc=36286,wp=3200,Mp=3201,bp=0,Ep=1,Mi="",Nn="srgb",Hi="srgb-linear",tc="display-p3",uo="display-p3-linear",za="linear",pt="srgb",Ha="rec709",Ga="p3",yr=7680,Zc=519,Tp=512,Ap=513,Cp=514,sf=515,Rp=516,Pp=517,Lp=518,Dp=519,Kc=35044,Jc="300 es",si=2e3,Va=2001;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=Math.PI/180,Il=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function Ip(n,e){return(n%e+e)%e}function Lo(n,e,t){return(1-t)*n+t*e}function hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Up={DEG2RAD:Na};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],x=r[4],y=r[7],R=r[2],C=r[5],E=r[8];return s[0]=a*_+o*M+c*R,s[3]=a*m+o*x+c*C,s[6]=a*p+o*y+c*E,s[1]=l*_+u*M+f*R,s[4]=l*m+u*x+f*C,s[7]=l*p+u*y+f*E,s[2]=d*_+h*M+g*R,s[5]=d*m+h*x+g*C,s[8]=d*p+h*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new We;function af(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Np(){const n=Wa("canvas");return n.style.display="block",n}const Qc={};function kp(n){n in Qc||(Qc[n]=!0,console.warn(n))}const eu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[Hi]:{transfer:za,primaries:Ha,toReference:n=>n,fromReference:n=>n},[Nn]:{transfer:pt,primaries:Ha,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[uo]:{transfer:za,primaries:Ga,toReference:n=>n.applyMatrix3(tu),fromReference:n=>n.applyMatrix3(eu)},[tc]:{transfer:pt,primaries:Ga,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tu),fromReference:n=>n.applyMatrix3(eu).convertLinearToSRGB()}},Fp=new Set([Hi,uo]),lt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ea[e].toReference,r=ea[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ea[n].primaries},getTransfer:function(n){return n===Mi?za:ea[n].transfer}};function $r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Sr;class Op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Wa("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$r(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($r(t[i]/255)*255):t[i]=$r(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bp=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uo(r[a].image)):s.push(Uo(r[a]))}else s=Uo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Op.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zp=0;class Kt extends gr{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Cn,r=Cn,s=Yt,a=tr,o=Wt,c=Oi,l=Kt.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Vs(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Zh;Kt.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(h+1)/2,R=(p+1)/2,C=(u+d)/4,E=(f+_)/4,T=(g+m)/4;return x>y&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=E/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=T/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=E/s,r=T/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hp extends gr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Hp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lf extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gp extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=1-o;const p=c*d+l*h+u*g+f*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),C=Math.atan2(R,p*M);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const y=o*M;if(c=c*m+d*y,l=l*m+h*y,u=u*m+g*y,f=f*m+_*y,m===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=R,l*=R,u*=R,f*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-o*h,e[t+2]=l*g+u*h+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new H,nu=new ur;class Ws{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),na.subVectors(this.max,fs),wr.subVectors(e.a,fs),Mr.subVectors(e.b,fs),br.subVectors(e.c,fs),hi.subVectors(Mr,wr),fi.subVectors(br,Mr),Vi.subVectors(wr,br);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Vi.z,Vi.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Vi.z,0,-Vi.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Vi.y,Vi.x,0];return!ko(t,wr,Mr,br,na)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,wr,Mr,br,na))?!1:(ia.crossVectors(hi,fi),t=[ia.x,ia.y,ia.z],ko(t,wr,Mr,br,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new H,new H,new H,new H,new H,new H,new H,new H],vn=new H,ta=new Ws,wr=new H,Mr=new H,br=new H,hi=new H,fi=new H,Vi=new H,fs=new H,na=new H,ia=new H,Wi=new H;function ko(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wi.fromArray(n,s);const o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Vp=new Ws,ds=new H,Fo=new H;class ho{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Fo)),this.expandByPoint(ds.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new H,Oo=new H,ra=new H,di=new H,Bo=new H,sa=new H,zo=new H;class nc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Oo.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Oo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=di.dot(this.direction),c=-di.dot(ra),l=di.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oo).addScaledVector(ra,d),h}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,r,s){Bo.subVectors(t,e),sa.subVectors(i,e),zo.crossVectors(Bo,sa);let a=this.direction.dot(zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const c=o*this.direction.dot(sa.crossVectors(di,sa));if(c<0)return null;const l=o*this.direction.dot(Bo.cross(di));if(l<0||c+l>a)return null;const u=-o*di.dot(zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,Xp)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),pi.crossVectors(i,sn),pi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),pi.crossVectors(i,sn)),pi.normalize(),aa.crossVectors(sn,pi),r[0]=pi.x,r[4]=aa.x,r[8]=sn.x,r[1]=pi.y,r[5]=aa.y,r[9]=sn.y,r[2]=pi.z,r[6]=aa.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],x=i[7],y=i[11],R=i[15],C=r[0],E=r[4],T=r[8],w=r[12],v=r[1],D=r[5],O=r[9],U=r[13],k=r[2],L=r[6],F=r[10],j=r[14],G=r[3],W=r[7],J=r[11],Q=r[15];return s[0]=a*C+o*v+c*k+l*G,s[4]=a*E+o*D+c*L+l*W,s[8]=a*T+o*O+c*F+l*J,s[12]=a*w+o*U+c*j+l*Q,s[1]=u*C+f*v+d*k+h*G,s[5]=u*E+f*D+d*L+h*W,s[9]=u*T+f*O+d*F+h*J,s[13]=u*w+f*U+d*j+h*Q,s[2]=g*C+_*v+m*k+p*G,s[6]=g*E+_*D+m*L+p*W,s[10]=g*T+_*O+m*F+p*J,s[14]=g*w+_*U+m*j+p*Q,s[3]=M*C+x*v+y*k+R*G,s[7]=M*E+x*D+y*L+R*W,s[11]=M*T+x*O+y*F+R*J,s[15]=M*w+x*U+y*j+R*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*h-i*c*h)+_*(+t*c*h-t*l*d+s*a*d-r*a*h+r*l*u-s*c*u)+m*(+t*l*f-t*o*h-s*a*f+i*a*h+s*o*u-i*l*u)+p*(-r*o*u-t*c*f+t*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*l-_*d*l+_*c*h-o*m*h-f*c*p+o*d*p,x=g*d*l-u*m*l-g*c*h+a*m*h+u*c*p-a*d*p,y=u*_*l-g*f*l+g*o*h-a*_*h-u*o*p+a*f*p,R=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,C=t*M+i*x+r*y+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=M*E,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*E,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*E,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*h-i*c*h)*E,e[4]=x*E,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*E,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*E,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*h+t*c*h)*E,e[8]=y*E,e[9]=(g*f*s-u*_*s-g*i*h+t*_*h+u*i*p-t*f*p)*E,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*E,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*h-t*o*h)*E,e[12]=R*E,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*E,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*E,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,M=c*l,x=c*u,y=c*f,R=i.x,C=i.y,E=i.z;return r[0]=(1-(_+p))*R,r[1]=(h+y)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(h-y)*C,r[5]=(1-(d+p))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(g+x)*E,r[9]=(m-M)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const a=Er.set(r[4],r[5],r[6]).length(),o=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const l=1/s,u=1/a,f=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=si){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,g;if(o===si)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Va)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=si){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*l,h=(i+r)*u;let g,_;if(o===si)g=(a+s)*f,_=-2*f;else if(o===Va)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Er=new H,xn=new st,Wp=new H(0,0,0),Xp=new H(1,1,1),pi=new H,aa=new H,sn=new H,iu=new st,ru=new ur;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qp=0;const su=new H,Tr=new ur,Kn=new st,oa=new H,ps=new H,$p=new H,Yp=new ur,au=new H(1,0,0),ou=new H(0,1,0),lu=new H(0,0,1),cu={type:"added"},jp={type:"removed"},Ar={type:"childadded",child:null},Ho={type:"childremoved",child:null};class nn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new H,t=new oi,i=new ur,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new We}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(ps,oa,this.up):Kn.lookAt(oa,ps,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(Kn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jp),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new H(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new H,Jn=new H,Go=new H,Qn=new H,Cr=new H,Rr=new H,uu=new H,Vo=new H,Wo=new H,Xo=new H;class Bn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Jn.subVectors(i,t),Go.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Jn),c=yn.dot(Go),l=Jn.dot(Jn),u=Jn.dot(Go),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Jn.subVectors(e,t),yn.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),yn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Cr.subVectors(r,i),Rr.subVectors(s,i),Vo.subVectors(e,i);const c=Cr.dot(Vo),l=Rr.dot(Vo);if(c<=0&&l<=0)return t.copy(i);Wo.subVectors(e,r);const u=Cr.dot(Wo),f=Rr.dot(Wo);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Cr,a);Xo.subVectors(e,s);const h=Cr.dot(Xo),g=Rr.dot(Xo);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Rr,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return uu.subVectors(s,r),o=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(uu,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Cr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},la={h:0,s:0,l:0};function qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=Ip(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qo(a,s,e+1/3),this.g=qo(a,s,e),this.b=qo(a,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const i=uf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return lt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(qt(Ht.r*255,0,255))*65536+Math.round(qt(Ht.g*255,0,255))*256+Math.round(qt(Ht.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Nn){lt.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,r=Ht.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(la);const i=Lo(mi.h,la.h,t),r=Lo(mi.s,la.s,t),s=Lo(mi.l,la.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ht=new Ke;Ke.NAMES=uf;let Zp=0;class Xs extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=qr,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Cl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==mn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hf extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new H,ca=new Re;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return kp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class ff extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class df extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kp=0;const fn=new st,$o=new nn,Pr=new H,an=new Ws,ms=new Ws,Lt=new H;class qn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?df:ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(an.min,ms.min),an.expandByPoint(Lt),Lt.addVectors(an.max,ms.max),an.expandByPoint(Lt)):(an.expandByPoint(ms.min),an.expandByPoint(ms.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Lt.fromBufferAttribute(o,l),c&&(Pr.fromBufferAttribute(e,l),Lt.add(Pr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let T=0;T<i.count;T++)o[T]=new H,c[T]=new H;const l=new H,u=new H,f=new H,d=new Re,h=new Re,g=new Re,_=new H,m=new H;function p(T,w,v){l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,v),d.fromBufferAttribute(s,T),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,v),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),o[T].add(_),o[w].add(_),o[v].add(_),c[T].add(m),c[w].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,w=M.length;T<w;++T){const v=M[T],D=v.start,O=v.count;for(let U=D,k=D+O;U<k;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new H,y=new H,R=new H,C=new H;function E(T){R.fromBufferAttribute(r,T),C.copy(R);const w=o[T];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(C,w);const D=y.dot(c[T])<0?-1:1;a.setXYZW(T,x.x,x.y,x.z,D)}for(let T=0,w=M.length;T<w;++T){const v=M[T],D=v.start,O=v.count;for(let U=D,k=D+O;U<k;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,f=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new Dn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new st,Xi=new nc,ua=new ho,fu=new H,Lr=new H,Dr=new H,Ir=new H,Yo=new H,ha=new H,fa=new Re,da=new Re,pa=new Re,du=new H,pu=new H,mu=new H,ma=new H,ga=new H;let Qt=class extends nn{constructor(e=new qn,t=new hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ha.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Yo.fromBufferAttribute(f,e),a?ha.addScaledVector(Yo,u):ha.addScaledVector(Yo.sub(t),u))}t.add(ha)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(ua.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ua,fu)===null||Xi.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(hu.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(hu),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,R=x;y<R;y+=3){const C=o.getX(y),E=o.getX(y+1),T=o.getX(y+2);r=_a(this,p,e,i,l,u,f,C,E,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);r=_a(this,a,e,i,l,u,f,M,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,R=x;y<R;y+=3){const C=y,E=y+1,T=y+2;r=_a(this,p,e,i,l,u,f,C,E,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,y=m+2;r=_a(this,a,e,i,l,u,f,M,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Jp(n,e,t,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===mn,o),c===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:n}}function _a(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Lr),n.getVertexPosition(c,Dr),n.getVertexPosition(l,Ir);const u=Jp(n,e,t,i,Lr,Dr,Ir,ma);if(u){r&&(fa.fromBufferAttribute(r,o),da.fromBufferAttribute(r,c),pa.fromBufferAttribute(r,l),u.uv=Bn.getInterpolation(ma,Lr,Dr,Ir,fa,da,pa,new Re)),s&&(fa.fromBufferAttribute(s,o),da.fromBufferAttribute(s,c),pa.fromBufferAttribute(s,l),u.uv1=Bn.getInterpolation(ma,Lr,Dr,Ir,fa,da,pa,new Re)),a&&(du.fromBufferAttribute(a,o),pu.fromBufferAttribute(a,c),mu.fromBufferAttribute(a,l),u.normal=Bn.getInterpolation(ma,Lr,Dr,Ir,du,pu,mu,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};Bn.getNormal(Lr,Dr,Ir,f.normal),u.face=f}return u}class qs extends qn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function g(_,m,p,M,x,y,R,C,E,T,w){const v=y/E,D=R/T,O=y/2,U=R/2,k=C/2,L=E+1,F=T+1;let j=0,G=0;const W=new H;for(let J=0;J<F;J++){const Q=J*D-U;for(let de=0;de<L;de++){const ve=de*v-O;W[_]=ve*M,W[m]=Q*x,W[p]=k,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=C>0?1:-1,u.push(W.x,W.y,W.z),f.push(de/E),f.push(1-J/T),j+=1}}for(let J=0;J<T;J++)for(let Q=0;Q<E;Q++){const de=d+Q+L*J,ve=d+Q+L*(J+1),V=d+(Q+1)+L*(J+1),ie=d+(Q+1)+L*J;c.push(de,ve,ie),c.push(ve,V,ie),G+=6}o.addGroup(h,G,w),h+=G,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=es(n[t]);for(const r in i)e[r]=i[r]}return e}function Qp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const em={clone:es,merge:Xt};var tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mf extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new H,gu=new Re,_u=new Re;class ln extends mf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,gu,_u),t.subVectors(_u,gu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Nr=1;class im extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Ur,Nr,e,t);r.layers=this.layers,this.add(r);const s=new ln(Ur,Nr,e,t);s.layers=this.layers,this.add(s);const a=new ln(Ur,Nr,e,t);a.layers=this.layers,this.add(a);const o=new ln(Ur,Nr,e,t);o.layers=this.layers,this.add(o);const c=new ln(Ur,Nr,e,t);c.layers=this.layers,this.add(c);const l=new ln(Ur,Nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gf extends Kt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Kr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rm extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qs(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ci});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===tr&&(t.minFilter=Yt),new im(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const jo=new H,sm=new H,am=new We;class vi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=jo.subVectors(i,t).cross(sm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||am.getNormalMatrix(e),r=this.coplanarPoint(jo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new ho,va=new H;class _f{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],x=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,m-h,y-p).normalize(),i[1].setComponents(c+s,d+l,m+h,y+p).normalize(),i[2].setComponents(c+a,d+u,m+g,y+M).normalize(),i[3].setComponents(c-a,d-u,m-g,y-M).normalize(),i[4].setComponents(c-o,d-f,m-_,y-x).normalize(),t===si)i[5].setComponents(c+o,d+f,m+_,y+x).normalize();else if(t===Va)i[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function om(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,o),f.count===-1&&d.length===0&&n.bufferSubData(l,0,u),d.length!==0){for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class sr extends qn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let x=0;x<l;x++){const y=x*f-s;g.push(y,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const x=M+l*p,y=M+l*(p+1),R=M+1+l*(p+1),C=M+1+l*p;h.push(x,y,C),h.push(y,R,C)}this.setIndex(h),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,wm=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lm=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Im=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`
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
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
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
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,ag=`struct PhysicalMaterial {
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
}`,og=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,y0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,w0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,U0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:um,alphamap_pars_fragment:hm,alphatest_fragment:fm,alphatest_pars_fragment:dm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:_m,begin_vertex:vm,beginnormal_vertex:xm,bsdfs:ym,iridescence_fragment:Sm,bumpmap_pars_fragment:wm,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:Tm,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Rm,color_vertex:Pm,common:Lm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Im,displacementmap_pars_vertex:Um,displacementmap_vertex:Nm,emissivemap_fragment:km,emissivemap_pars_fragment:Fm,colorspace_fragment:Om,colorspace_pars_fragment:Bm,envmap_fragment:zm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Gm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:$m,fog_pars_fragment:Ym,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Zm,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Jm,lights_pars_begin:Qm,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:rg,lights_physical_fragment:sg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:_g,metalnessmap_fragment:vg,metalnessmap_pars_fragment:xg,morphinstance_vertex:yg,morphcolor_vertex:Sg,morphnormal_vertex:wg,morphtarget_pars_vertex:Mg,morphtarget_vertex:bg,normal_fragment_begin:Eg,normal_fragment_maps:Tg,normal_pars_fragment:Ag,normal_pars_vertex:Cg,normal_vertex:Rg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Ug,opaque_fragment:Ng,packing:kg,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:$g,skinning_pars_vertex:Yg,skinning_vertex:jg,skinnormal_vertex:Zg,specularmap_fragment:Kg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:r0,uv_vertex:s0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:h0,cube_frag:f0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:_0,equirect_frag:v0,linedashed_vert:x0,linedashed_frag:y0,meshbasic_vert:S0,meshbasic_frag:w0,meshlambert_vert:M0,meshlambert_frag:b0,meshmatcap_vert:E0,meshmatcap_frag:T0,meshnormal_vert:A0,meshnormal_frag:C0,meshphong_vert:R0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:I0,meshtoon_frag:U0,points_vert:N0,points_frag:k0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:z0},pe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fn={basic:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Xt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Xt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Xt([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Xt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Xt([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Xt([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Xt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Xt([pe.lights,pe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Fn.physical={uniforms:Xt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const xa={r:0,b:0,g:0},$i=new oi,H0=new st;function G0(n,e,t,i,r,s,a){const o=new Ke(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const y=g(M);y===null?p(o,c):y&&y.isColor&&(p(y,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(M,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===co)?(u===void 0&&(u=new Qt(new qs(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:es(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler($i)),u.material.toneMapped=lt.getTransfer(y.colorSpace)!==pt,(f!==y||d!==y.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qt(new sr(2,2),new Vt({name:"BackgroundMaterial",uniforms:es(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(xa,pf(n)),i.buffers.color.setClear(xa.r,xa.g,xa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function V0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,D,O,U,k){let L=!1;const F=f(U,O,D);s!==F&&(s=F,l(s.object)),L=h(v,U,O,k),L&&g(v,U,O,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,y(v,D,O,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function f(v,D,O){const U=O.wireframe===!0;let k=i[v.id];k===void 0&&(k={},i[v.id]=k);let L=k[D.id];L===void 0&&(L={},k[D.id]=L);let F=L[U];return F===void 0&&(F=d(c()),L[U]=F),F}function d(v){const D=[],O=[],U=[];for(let k=0;k<t;k++)D[k]=0,O[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:U,object:v,attributes:{},index:null}}function h(v,D,O,U){const k=s.attributes,L=D.attributes;let F=0;const j=O.getAttributes();for(const G in j)if(j[G].location>=0){const J=k[G];let Q=L[G];if(Q===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),J===void 0||J.attribute!==Q||Q&&J.data!==Q.data)return!0;F++}return s.attributesNum!==F||s.index!==U}function g(v,D,O,U){const k={},L=D.attributes;let F=0;const j=O.getAttributes();for(const G in j)if(j[G].location>=0){let J=L[G];J===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const Q={};Q.attribute=J,J&&J.data&&(Q.data=J.data),k[G]=Q,F++}s.attributes=k,s.attributesNum=F,s.index=U}function _(){const v=s.newAttributes;for(let D=0,O=v.length;D<O;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const O=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;O[v]=1,U[v]===0&&(n.enableVertexAttribArray(v),U[v]=1),k[v]!==D&&(n.vertexAttribDivisor(v,D),k[v]=D)}function M(){const v=s.newAttributes,D=s.enabledAttributes;for(let O=0,U=D.length;O<U;O++)D[O]!==v[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function x(v,D,O,U,k,L,F){F===!0?n.vertexAttribIPointer(v,D,O,k,L):n.vertexAttribPointer(v,D,O,U,k,L)}function y(v,D,O,U){_();const k=U.attributes,L=O.getAttributes(),F=D.defaultAttributeValues;for(const j in L){const G=L[j];if(G.location>=0){let W=k[j];if(W===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),W!==void 0){const J=W.normalized,Q=W.itemSize,de=e.get(W);if(de===void 0)continue;const ve=de.buffer,V=de.type,ie=de.bytesPerElement,ue=V===n.INT||V===n.UNSIGNED_INT||W.gpuType===Jh;if(W.isInterleavedBufferAttribute){const oe=W.data,we=oe.stride,Se=W.offset;if(oe.isInstancedInterleavedBuffer){for(let N=0;N<G.locationSize;N++)p(G.location+N,oe.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let N=0;N<G.locationSize;N++)m(G.location+N);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let N=0;N<G.locationSize;N++)x(G.location+N,Q/G.locationSize,V,J,we*ie,(Se+Q/G.locationSize*N)*ie,ue)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,W.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let oe=0;oe<G.locationSize;oe++)x(G.location+oe,Q/G.locationSize,V,J,Q*ie,Q/G.locationSize*oe*ie,ue)}}else if(F!==void 0){const J=F[j];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(G.location,J);break;case 3:n.vertexAttrib3fv(G.location,J);break;case 4:n.vertexAttrib4fv(G.location,J);break;default:n.vertexAttrib1fv(G.location,J)}}}}M()}function R(){T();for(const v in i){const D=i[v];for(const O in D){const U=D[O];for(const k in U)u(U[k].object),delete U[k];delete D[O]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const D=i[v.id];for(const O in D){const U=D[O];for(const k in U)u(U[k].object),delete U[k];delete D[O]}delete i[v.id]}function E(v){for(const D in i){const O=i[D];if(O[v.id]===void 0)continue;const U=O[v.id];for(const k in U)u(U[k].object),delete U[k];delete O[v.id]}}function T(){w(),a=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function W0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(l[h],u[h]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function X0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Wt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const E=C===Qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Oi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!E)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:R}}function q0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new vi,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,x=M*4;let y=p.clippingState||null;c.value=y,y=u(g,d,x,h);for(let R=0;R!==x;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=h;x!==_;++x,y+=4)a.copy(f[x]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $0(n){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=Kr:o===Pl&&(a.mapping=Jr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Pl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rm(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Xa extends mf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vr=4,vu=[.125,.215,.35,.446,.526,.582],Ji=20,Zo=new Xa,xu=new Ke;let Ko=null,Jo=0,Qo=0,el=!1;const Zi=(1+Math.sqrt(5))/2,kr=1/Zi,yu=[new H(-Zi,kr,0),new H(Zi,kr,0),new H(-kr,0,Zi),new H(kr,0,Zi),new H(0,Zi,-kr),new H(0,Zi,kr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Jo,Qo),this._renderer.xr.enabled=el,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Qr,format:Wt,colorSpace:Hi,depthBuffer:!1},r=wu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(s)),this._blurMaterial=j0(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,r){const o=new ln(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(xu),u.toneMapping=Ri,u.autoClear=!1;const h=new hf({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Qt(new qs,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(xu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;ya(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Kr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ya(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yu[(r-s-1)%yu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ji-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let M=0;for(let E=0;E<Ji;++E){const T=E/_,w=Math.exp(-T*T/2);p.push(w),E===0?M+=w:E<m&&(M+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[r],R=3*y*(r>x-Vr?r-x+Vr:0),C=4*(this._cubeSize-y);ya(t,R,C,3*y,2*y),c.setRenderTarget(t),c.render(f,Zo)}}function Y0(n){const e=[],t=[],i=[];let r=n;const s=n-Vr+1+vu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Vr?c=vu[a-n+Vr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),x=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let C=0;C<h;C++){const E=C%3*2/3-1,T=C>2?0:-1,w=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];M.set(w,_*g*C),x.set(d,m*g*C);const v=[C,C,C,C,C,C];y.set(v,p*g*C)}const R=new qn;R.setAttribute("position",new Dn(M,_)),R.setAttribute("uv",new Dn(x,m)),R.setAttribute("faceIndex",new Dn(y,p)),e.push(R),r>Vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wu(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function j0(n,e,t){const i=new Float32Array(Ji),r=new H(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Mu(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function bu(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function Z0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Rl||c===Pl,u=c===Kr||c===Jr;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Su(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Su(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function K0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function J0(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let x=0,y=M.length;x<y;x+=3){const R=M[x+0],C=M[x+1],E=M[x+2];d.push(R,C,C,E,E,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const R=x+0,C=x+1,E=x+2;d.push(R,C,C,E,E,R)}}else return;const m=new(af(d)?df:ff)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Q0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function l(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*a,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,h[m]);else{_.multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M];for(let M=0;M<_.length;M++)t.update(p,i,_[M])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function e_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function t_(n,e,t){const i=new WeakMap,r=new Ft;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let w=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;h===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*R*4*f),E=new lf(C,y,R,f);E.type=Rn,E.needsUpdate=!0;const T=x*4;for(let v=0;v<f;v++){const D=m[v],O=p[v],U=M[v],k=y*R*4*v;for(let L=0;L<D.count;L++){const F=L*T;h===!0&&(r.fromBufferAttribute(D,L),C[k+F+0]=r.x,C[k+F+1]=r.y,C[k+F+2]=r.z,C[k+F+3]=0),g===!0&&(r.fromBufferAttribute(O,L),C[k+F+4]=r.x,C[k+F+5]=r.y,C[k+F+6]=r.z,C[k+F+7]=0),_===!0&&(r.fromBufferAttribute(U,L),C[k+F+8]=r.x,C[k+F+9]=r.y,C[k+F+10]=r.z,C[k+F+11]=U.itemSize===4?r.w:1)}}d={count:f,texture:E,size:new Re(y,R)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function n_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class qa extends Kt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Pi,u!==Pi&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pi&&(i=Bi),i===void 0&&u===Rs&&(i=Gs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xf=new Kt,yf=new qa(1,1);yf.compareFunction=sf;const Sf=new lf,wf=new Gp,Mf=new gf,Eu=[],Tu=[],Au=new Float32Array(16),Cu=new Float32Array(9),Ru=new Float32Array(4);function rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Eu[r];if(s===void 0&&(s=new Float32Array(r),Eu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fo(n,e){let t=Tu[e];t===void 0&&(t=new Int32Array(e),Tu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function i_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function o_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),Rt(t,i)}}function l_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Cu.set(i),n.uniformMatrix3fv(this.addr,!1,Cu),Rt(t,i)}}function c_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Au.set(i),n.uniformMatrix4fv(this.addr,!1,Au),Rt(t,i)}}function u_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function p_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function v_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?yf:xf;t.setTexture2D(e||s,r)}function x_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wf,r)}function y_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mf,r)}function S_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sf,r)}function w_(n){switch(n){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return u_;case 35667:case 35671:return h_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return S_}}function M_(n,e){n.uniform1fv(this.addr,e)}function b_(n,e){const t=rs(e,this.size,2);n.uniform2fv(this.addr,t)}function E_(n,e){const t=rs(e,this.size,3);n.uniform3fv(this.addr,t)}function T_(n,e){const t=rs(e,this.size,4);n.uniform4fv(this.addr,t)}function A_(n,e){const t=rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C_(n,e){const t=rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R_(n,e){const t=rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P_(n,e){n.uniform1iv(this.addr,e)}function L_(n,e){n.uniform2iv(this.addr,e)}function D_(n,e){n.uniform3iv(this.addr,e)}function I_(n,e){n.uniform4iv(this.addr,e)}function U_(n,e){n.uniform1uiv(this.addr,e)}function N_(n,e){n.uniform2uiv(this.addr,e)}function k_(n,e){n.uniform3uiv(this.addr,e)}function F_(n,e){n.uniform4uiv(this.addr,e)}function O_(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xf,s[a])}function B_(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wf,s[a])}function z_(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mf,s[a])}function H_(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Sf,s[a])}function G_(n){switch(n){case 5126:return M_;case 35664:return b_;case 35665:return E_;case 35666:return T_;case 35674:return A_;case 35675:return C_;case 35676:return R_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return I_;case 5125:return U_;case 36294:return N_;case 36295:return k_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return H_}}class V_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}}class W_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G_(t.type)}}class X_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function q_(n,e,t){const i=n.name,r=i.length;for(tl.lastIndex=0;;){const s=tl.exec(i),a=tl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Pu(t,l===void 0?new V_(o,n,e):new W_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new X_(o),Pu(t,f)),t=f}}}class ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);q_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $_=37297;let Y_=0;function j_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Z_(n){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n);let i;switch(e===t?i="":e===Ga&&t===Ha?i="LinearDisplayP3ToLinearSRGB":e===Ha&&t===Ga&&(i="LinearSRGBToLinearDisplayP3"),n){case Hi:case uo:return[i,"LinearTransferOETF"];case Nn:case tc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Du(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+j_(n.getShaderSource(e),a)}else return r}function K_(n,e){const t=Z_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function J_(n,e){let t;switch(e){case sp:t="Linear";break;case ap:t="Reinhard";break;case op:t="OptimizedCineon";break;case jh:t="ACESFilmic";break;case cp:t="AgX";break;case up:t="Neutral";break;case lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function ev(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ss(n){return n!==""}function Iu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(nv,rv)}const iv=new Map;function rv(n,e){let t=Ve[e];if(t===void 0){const i=iv.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(sv,av)}function av(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ku(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ov(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function lv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Kr:case Jr:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function uv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case ip:e="ENVMAP_BLENDING_MIX";break;case rp:e="ENVMAP_BLENDING_ADD";break}return e}function hv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ov(t),l=lv(t),u=cv(t),f=uv(t),d=hv(t),h=Q_(t),g=ev(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ri?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Ul(a),a=Iu(a,t),a=Uu(a,t),o=Ul(o),o=Iu(o,t),o=Uu(o,t),a=Nu(a),o=Nu(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,y=M+p+o,R=Lu(r,r.VERTEX_SHADER,x),C=Lu(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(C).trim();let L=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const j=Du(r,R,"vertex"),G=Du(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+j+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||k==="")&&(F=!1);F&&(D.diagnostics={runnable:L,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(R),r.deleteShader(C),T=new ka(r,_),w=tv(r,_)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,$_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let dv=0;class pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mv(e),t.set(e,i)),i}}class mv{constructor(e){this.id=dv++,this.code=e,this.usedTimes=0}}function gv(n,e,t,i,r,s,a){const o=new cf,c=new pv,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,D,O,U){const k=O.fog,L=U.geometry,F=w.isMeshStandardMaterial?O.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||F),G=j&&j.mapping===co?j.image.height:null,W=g[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=J!==void 0?J.length:0;let de=0;L.morphAttributes.position!==void 0&&(de=1),L.morphAttributes.normal!==void 0&&(de=2),L.morphAttributes.color!==void 0&&(de=3);let ve,V,ie,ue;if(W){const Qe=Fn[W];ve=Qe.vertexShader,V=Qe.fragmentShader}else ve=w.vertexShader,V=w.fragmentShader,c.update(w),ie=c.getVertexShaderID(w),ue=c.getFragmentShaderID(w);const oe=n.getRenderTarget(),we=U.isInstancedMesh===!0,Se=U.isBatchedMesh===!0,N=!!w.map,he=!!w.matcap,Z=!!j,De=!!w.aoMap,Ee=!!w.lightMap,ke=!!w.bumpMap,ye=!!w.normalMap,Xe=!!w.displacementMap,ct=!!w.emissiveMap,I=!!w.metalnessMap,b=!!w.roughnessMap,Y=w.anisotropy>0,ne=w.clearcoat>0,re=w.dispersion>0,ae=w.iridescence>0,Ce=w.sheen>0,ge=w.transmission>0,me=Y&&!!w.anisotropyMap,Ue=ne&&!!w.clearcoatMap,ce=ne&&!!w.clearcoatNormalMap,Te=ne&&!!w.clearcoatRoughnessMap,Je=ae&&!!w.iridescenceMap,Le=ae&&!!w.iridescenceThicknessMap,xe=Ce&&!!w.sheenColorMap,Be=Ce&&!!w.sheenRoughnessMap,Ye=!!w.specularMap,at=!!w.specularColorMap,He=!!w.specularIntensityMap,S=ge&&!!w.transmissionMap,B=ge&&!!w.thicknessMap,X=!!w.gradientMap,se=!!w.alphaMap,le=w.alphaTest>0,ze=!!w.alphaHash,je=!!w.extensions;let _t=Ri;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Pt={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:ve,fragmentShader:V,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Se,instancing:we,instancingColor:we&&U.instanceColor!==null,instancingMorph:we&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Hi,alphaToCoverage:!!w.alphaToCoverage,map:N,matcap:he,envMap:Z,envMapMode:Z&&j.mapping,envMapCubeUVHeight:G,aoMap:De,lightMap:Ee,bumpMap:ke,normalMap:ye,displacementMap:d&&Xe,emissiveMap:ct,normalMapObjectSpace:ye&&w.normalMapType===Ep,normalMapTangentSpace:ye&&w.normalMapType===bp,metalnessMap:I,roughnessMap:b,anisotropy:Y,anisotropyMap:me,clearcoat:ne,clearcoatMap:Ue,clearcoatNormalMap:ce,clearcoatRoughnessMap:Te,dispersion:re,iridescence:ae,iridescenceMap:Je,iridescenceThicknessMap:Le,sheen:Ce,sheenColorMap:xe,sheenRoughnessMap:Be,specularMap:Ye,specularColorMap:at,specularIntensityMap:He,transmission:ge,transmissionMap:S,thicknessMap:B,gradientMap:X,opaque:w.transparent===!1&&w.blending===qr&&w.alphaToCoverage===!1,alphaMap:se,alphaTest:le,alphaHash:ze,combine:w.combine,mapUv:N&&_(w.map.channel),aoMapUv:De&&_(w.aoMap.channel),lightMapUv:Ee&&_(w.lightMap.channel),bumpMapUv:ke&&_(w.bumpMap.channel),normalMapUv:ye&&_(w.normalMap.channel),displacementMapUv:Xe&&_(w.displacementMap.channel),emissiveMapUv:ct&&_(w.emissiveMap.channel),metalnessMapUv:I&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:me&&_(w.anisotropyMap.channel),clearcoatMapUv:Ue&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(w.sheenRoughnessMap.channel),specularMapUv:Ye&&_(w.specularMap.channel),specularColorMapUv:at&&_(w.specularColorMap.channel),specularIntensityMapUv:He&&_(w.specularIntensityMap.channel),transmissionMapUv:S&&_(w.transmissionMap.channel),thicknessMapUv:B&&_(w.thicknessMap.channel),alphaMapUv:se&&_(w.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ye||Y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(N||se),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:de,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,useLegacyLights:n._useLegacyLights,decodeVideoTexture:N&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===On,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:je&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function p(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)v.push(D),v.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(M(v,w),x(v,w),v.push(n.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function M(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function x(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),w.push(o.mask)}function y(w){const v=g[w.type];let D;if(v){const O=Fn[v];D=em.clone(O.uniforms)}else D=w.uniforms;return D}function R(w,v){let D;for(let O=0,U=u.length;O<U;O++){const k=u[O];if(k.cacheKey===v){D=k,++D.usedTimes;break}}return D===void 0&&(D=new fv(n,v,w,s),u.push(D)),D}function C(w){if(--w.usedTimes===0){const v=u.indexOf(w);u[v]=u[u.length-1],u.pop(),w.destroy()}}function E(w){c.remove(w)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:E,programs:u,dispose:T}}function _v(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function vv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ou(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||vv),i.length>1&&i.sort(d||Fu),r.length>1&&r.sort(d||Fu)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function xv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ou,n.set(i,[a])):r>=s.length?(a=new Ou,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function yv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ke};break;case"SpotLight":t={position:new H,direction:new H,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Sv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wv=0;function Mv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bv(n){const e=new yv,t=Sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new st,a=new st;function o(l,u){let f=0,d=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,_=0,m=0,p=0,M=0,x=0,y=0,R=0,C=0,E=0,T=0;l.sort(Mv);const w=u===!0?Math.PI:1;for(let D=0,O=l.length;D<O;D++){const U=l[D],k=U.color,L=U.intensity,F=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=k.r*L*w,d+=k.g*L*w,h+=k.b*L*w;else if(U.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],L);T++}else if(U.isDirectionalLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const W=U.shadow,J=t.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=U.shadow.matrix,x++}i.directional[g]=G,g++}else if(U.isSpotLight){const G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(k).multiplyScalar(L*w),G.distance=F,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[m]=G;const W=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,W.updateMatrices(U),U.castShadow&&E++),i.spotLightMatrix[m]=W.matrix,U.castShadow){const J=t.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=j,R++}m++}else if(U.isRectAreaLight){const G=e.get(U);G.color.copy(k).multiplyScalar(L),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=G,p++}else if(U.isPointLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*w),G.distance=U.distance,G.decay=U.decay,U.castShadow){const W=U.shadow,J=t.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,i.pointShadow[_]=J,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=U.shadow.matrix,y++}i.point[_]=G,_++}else if(U.isHemisphereLight){const G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(L*w),G.groundColor.copy(U.groundColor).multiplyScalar(L*w),i.hemi[M]=G,M++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==m||v.rectAreaLength!==p||v.hemiLength!==M||v.numDirectionalShadows!==x||v.numPointShadows!==y||v.numSpotShadows!==R||v.numSpotMaps!==C||v.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=R+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,v.directionalLength=g,v.pointLength=_,v.spotLength=m,v.rectAreaLength=p,v.hemiLength=M,v.numDirectionalShadows=x,v.numPointShadows=y,v.numSpotShadows=R,v.numSpotMaps=C,v.numLightProbes=T,i.version=wv++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Bu(n){const e=new bv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ev(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bu(n),e.set(r,[o])):s>=a.length?(o=new Bu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Tv extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Av extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
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
}`;function Pv(n,e,t){let i=new _f;const r=new Re,s=new Re,a=new Ft,o=new Tv({depthPacking:Mp}),c=new Av,l={},u=t.maxTextureSize,f={[mn]:tn,[tn]:mn,[On]:On},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Cv,fragmentShader:Rv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new qn;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let p=this.type;this.render=function(C,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),v=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ci),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==ti&&this.type===ti,k=p===ti&&this.type!==ti;for(let L=0,F=C.length;L<F;L++){const j=C[L],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const W=G.getFrameExtents();if(r.multiply(W),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,G.mapSize.y=s.y)),G.map===null||U===!0||k===!0){const Q=this.type!==ti?{minFilter:vt,magFilter:vt}:{};G.map!==null&&G.map.dispose(),G.map=new Pn(r.x,r.y,Q),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const J=G.getViewportCount();for(let Q=0;Q<J;Q++){const de=G.getViewport(Q);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),O.viewport(a),G.updateMatrices(j,Q),i=G.getFrustum(),y(E,T,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===ti&&M(G,T),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,v,D)};function M(C,E){const T=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(E,null,T,d,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(E,null,T,h,_,null)}function x(C,E,T,w){let v=null;const D=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)v=D;else if(v=T.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=v.uuid,U=E.uuid;let k=l[O];k===void 0&&(k={},l[O]=k);let L=k[U];L===void 0&&(L=v.clone(),k[U]=L,E.addEventListener("dispose",R)),v=L}if(v.visible=E.visible,v.wireframe=E.wireframe,w===ti?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=n.properties.get(v);O.light=T}return v}function y(C,E,T,w,v){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const U=e.update(C),k=C.material;if(Array.isArray(k)){const L=U.groups;for(let F=0,j=L.length;F<j;F++){const G=L[F],W=k[G.materialIndex];if(W&&W.visible){const J=x(C,W,w,v);C.onBeforeShadow(n,C,E,T,U,J,G),n.renderBufferDirect(T,null,U,J,C,G),C.onAfterShadow(n,C,E,T,U,J,G)}}}else if(k.visible){const L=x(C,k,w,v);C.onBeforeShadow(n,C,E,T,U,L,null),n.renderBufferDirect(T,null,U,L,C,null),C.onAfterShadow(n,C,E,T,U,L,null)}}const O=C.children;for(let U=0,k=O.length;U<k;U++)y(O[U],E,T,w,v)}function R(C){C.target.removeEventListener("dispose",R);for(const T in l){const w=l[T],v=C.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}function Lv(n){function e(){let S=!1;const B=new Ft;let X=null;const se=new Ft(0,0,0,0);return{setMask:function(le){X!==le&&!S&&(n.colorMask(le,le,le,le),X=le)},setLocked:function(le){S=le},setClear:function(le,ze,je,_t,Pt){Pt===!0&&(le*=_t,ze*=_t,je*=_t),B.set(le,ze,je,_t),se.equals(B)===!1&&(n.clearColor(le,ze,je,_t),se.copy(B))},reset:function(){S=!1,X=null,se.set(-1,0,0,0)}}}function t(){let S=!1,B=null,X=null,se=null;return{setTest:function(le){le?ue(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(le){B!==le&&!S&&(n.depthMask(le),B=le)},setFunc:function(le){if(X!==le){switch(le){case Zd:n.depthFunc(n.NEVER);break;case Kd:n.depthFunc(n.ALWAYS);break;case Jd:n.depthFunc(n.LESS);break;case Ba:n.depthFunc(n.LEQUAL);break;case Qd:n.depthFunc(n.EQUAL);break;case ep:n.depthFunc(n.GEQUAL);break;case tp:n.depthFunc(n.GREATER);break;case np:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=le}},setLocked:function(le){S=le},setClear:function(le){se!==le&&(n.clearDepth(le),se=le)},reset:function(){S=!1,B=null,X=null,se=null}}}function i(){let S=!1,B=null,X=null,se=null,le=null,ze=null,je=null,_t=null,Pt=null;return{setTest:function(Qe){S||(Qe?ue(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Qe){B!==Qe&&!S&&(n.stencilMask(Qe),B=Qe)},setFunc:function(Qe,wt,dt){(X!==Qe||se!==wt||le!==dt)&&(n.stencilFunc(Qe,wt,dt),X=Qe,se=wt,le=dt)},setOp:function(Qe,wt,dt){(ze!==Qe||je!==wt||_t!==dt)&&(n.stencilOp(Qe,wt,dt),ze=Qe,je=wt,_t=dt)},setLocked:function(Qe){S=Qe},setClear:function(Qe){Pt!==Qe&&(n.clearStencil(Qe),Pt=Qe)},reset:function(){S=!1,B=null,X=null,se=null,le=null,ze=null,je=null,_t=null,Pt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,M=null,x=null,y=null,R=null,C=new Ke(0,0,0),E=0,T=!1,w=null,v=null,D=null,O=null,U=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),L=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),L=F>=2);let G=null,W={};const J=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),de=new Ft().fromArray(J),ve=new Ft().fromArray(Q);function V(S,B,X,se){const le=new Uint8Array(4),ze=n.createTexture();n.bindTexture(S,ze),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<X;je++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(B,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(B+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ze}const ie={};ie[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),s.setFunc(Ba),ke(!1),ye(yc),ue(n.CULL_FACE),De(Ci);function ue(S){l[S]!==!0&&(n.enable(S),l[S]=!0)}function oe(S){l[S]!==!1&&(n.disable(S),l[S]=!1)}function we(S,B){return u[S]!==B?(n.bindFramebuffer(S,B),u[S]=B,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=B),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=B),!0):!1}function Se(S,B){let X=d,se=!1;if(S){X=f.get(B),X===void 0&&(X=[],f.set(B,X));const le=S.textures;if(X.length!==le.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ze=0,je=le.length;ze<je;ze++)X[ze]=n.COLOR_ATTACHMENT0+ze;X.length=le.length,se=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,se=!0);se&&n.drawBuffers(X)}function N(S){return h!==S?(n.useProgram(S),h=S,!0):!1}const he={[Ki]:n.FUNC_ADD,[Id]:n.FUNC_SUBTRACT,[Ud]:n.FUNC_REVERSE_SUBTRACT};he[Nd]=n.MIN,he[kd]=n.MAX;const Z={[Fd]:n.ZERO,[Od]:n.ONE,[Bd]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[Xd]:n.SRC_ALPHA_SATURATE,[Vd]:n.DST_COLOR,[Hd]:n.DST_ALPHA,[zd]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[Wd]:n.ONE_MINUS_DST_COLOR,[Gd]:n.ONE_MINUS_DST_ALPHA,[qd]:n.CONSTANT_COLOR,[$d]:n.ONE_MINUS_CONSTANT_COLOR,[Yd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function De(S,B,X,se,le,ze,je,_t,Pt,Qe){if(S===Ci){g===!0&&(oe(n.BLEND),g=!1);return}if(g===!1&&(ue(n.BLEND),g=!0),S!==Dd){if(S!==_||Qe!==T){if((m!==Ki||x!==Ki)&&(n.blendEquation(n.FUNC_ADD),m=Ki,x=Ki),Qe)switch(S){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.ONE,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}p=null,M=null,y=null,R=null,C.set(0,0,0),E=0,_=S,T=Qe}return}le=le||B,ze=ze||X,je=je||se,(B!==m||le!==x)&&(n.blendEquationSeparate(he[B],he[le]),m=B,x=le),(X!==p||se!==M||ze!==y||je!==R)&&(n.blendFuncSeparate(Z[X],Z[se],Z[ze],Z[je]),p=X,M=se,y=ze,R=je),(_t.equals(C)===!1||Pt!==E)&&(n.blendColor(_t.r,_t.g,_t.b,Pt),C.copy(_t),E=Pt),_=S,T=!1}function Ee(S,B){S.side===On?oe(n.CULL_FACE):ue(n.CULL_FACE);let X=S.side===tn;B&&(X=!X),ke(X),S.blending===qr&&S.transparent===!1?De(Ci):De(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const se=S.stencilWrite;a.setTest(se),se&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ct(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(S){w!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),w=S)}function ye(S){S!==Rd?(ue(n.CULL_FACE),S!==v&&(S===yc?n.cullFace(n.BACK):S===Pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),v=S}function Xe(S){S!==D&&(L&&n.lineWidth(S),D=S)}function ct(S,B,X){S?(ue(n.POLYGON_OFFSET_FILL),(O!==B||U!==X)&&(n.polygonOffset(B,X),O=B,U=X)):oe(n.POLYGON_OFFSET_FILL)}function I(S){S?ue(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function b(S){S===void 0&&(S=n.TEXTURE0+k-1),G!==S&&(n.activeTexture(S),G=S)}function Y(S,B,X){X===void 0&&(G===null?X=n.TEXTURE0+k-1:X=G);let se=W[X];se===void 0&&(se={type:void 0,texture:void 0},W[X]=se),(se.type!==S||se.texture!==B)&&(G!==X&&(n.activeTexture(X),G=X),n.bindTexture(S,B||ie[S]),se.type=S,se.texture=B)}function ne(){const S=W[G];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Je(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function xe(S){de.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),de.copy(S))}function Be(S){ve.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),ve.copy(S))}function Ye(S,B){let X=c.get(B);X===void 0&&(X=new WeakMap,c.set(B,X));let se=X.get(S);se===void 0&&(se=n.getUniformBlockIndex(B,S.name),X.set(S,se))}function at(S,B){const se=c.get(B).get(S);o.get(B)!==se&&(n.uniformBlockBinding(B,se,S.__bindingPointIndex),o.set(B,se))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},G=null,W={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,M=null,x=null,y=null,R=null,C=new Ke(0,0,0),E=0,T=!1,w=null,v=null,D=null,O=null,U=null,de.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ue,disable:oe,bindFramebuffer:we,drawBuffers:Se,useProgram:N,setBlending:De,setMaterial:Ee,setFlipSided:ke,setCullFace:ye,setLineWidth:Xe,setPolygonOffset:ct,setScissorTest:I,activeTexture:b,bindTexture:Y,unbindTexture:ne,compressedTexImage2D:re,compressedTexImage3D:ae,texImage2D:Je,texImage3D:Le,updateUBOMapping:Ye,uniformBlockBinding:at,texStorage2D:ce,texStorage3D:Te,texSubImage2D:Ce,texSubImage3D:ge,compressedTexSubImage2D:me,compressedTexSubImage3D:Ue,scissor:xe,viewport:Be,reset:He}}function Dv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return h?new OffscreenCanvas(I,b):Wa("canvas")}function _(I,b,Y){let ne=1;const re=ct(I);if((re.width>Y||re.height>Y)&&(ne=Y/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ae=Math.floor(ne*re.width),Ce=Math.floor(ne*re.height);f===void 0&&(f=g(ae,Ce));const ge=b?g(ae,Ce):f;return ge.width=ae,ge.height=Ce,ge.getContext("2d").drawImage(I,0,0,ae,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ae+"x"+Ce+")."),ge}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==vt&&I.minFilter!==Yt}function p(I){n.generateMipmap(I)}function M(I,b,Y,ne,re=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=b;if(b===n.RED&&(Y===n.FLOAT&&(ae=n.R32F),Y===n.HALF_FLOAT&&(ae=n.R16F),Y===n.UNSIGNED_BYTE&&(ae=n.R8)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ae=n.R8UI),Y===n.UNSIGNED_SHORT&&(ae=n.R16UI),Y===n.UNSIGNED_INT&&(ae=n.R32UI),Y===n.BYTE&&(ae=n.R8I),Y===n.SHORT&&(ae=n.R16I),Y===n.INT&&(ae=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(ae=n.RG32F),Y===n.HALF_FLOAT&&(ae=n.RG16F),Y===n.UNSIGNED_BYTE&&(ae=n.RG8)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ae=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ae=n.RG16UI),Y===n.UNSIGNED_INT&&(ae=n.RG32UI),Y===n.BYTE&&(ae=n.RG8I),Y===n.SHORT&&(ae=n.RG16I),Y===n.INT&&(ae=n.RG32I)),b===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),b===n.RGBA){const Ce=re?za:lt.getTransfer(ne);Y===n.FLOAT&&(ae=n.RGBA32F),Y===n.HALF_FLOAT&&(ae=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ae=Ce===pt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==vt&&I.minFilter!==Yt?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function y(I){const b=I.target;b.removeEventListener("dispose",y),C(b),b.isVideoTexture&&u.delete(b)}function R(I){const b=I.target;b.removeEventListener("dispose",R),T(b)}function C(I){const b=i.get(I);if(b.__webglInit===void 0)return;const Y=I.source,ne=d.get(Y);if(ne){const re=ne[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(I),Object.keys(ne).length===0&&d.delete(Y)}i.remove(I)}function E(I){const b=i.get(I);n.deleteTexture(b.__webglTexture);const Y=I.source,ne=d.get(Y);delete ne[b.__cacheKey],a.memory.textures--}function T(I){const b=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let re=0;re<b.__webglFramebuffer[ne].length;re++)n.deleteFramebuffer(b.__webglFramebuffer[ne][re]);else n.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[ne]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=I.textures;for(let ne=0,re=Y.length;ne<re;ne++){const ae=i.get(Y[ne]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(Y[ne])}i.remove(I)}let w=0;function v(){w=0}function D(){const I=w;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),w+=1,I}function O(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function U(I,b){const Y=i.get(I);if(I.isVideoTexture&&ye(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(Y,I,b);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function k(I,b){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){de(Y,I,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function L(I,b){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){de(Y,I,b);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function F(I,b){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){ve(Y,I,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}const j={[Ll]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},G={[vt]:n.NEAREST,[hp]:n.NEAREST_MIPMAP_NEAREST,[ys]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},W={[Tp]:n.NEVER,[Dp]:n.ALWAYS,[Ap]:n.LESS,[sf]:n.LEQUAL,[Cp]:n.EQUAL,[Lp]:n.GEQUAL,[Rp]:n.GREATER,[Pp]:n.NOTEQUAL};function J(I,b){if(b.type===Rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yt||b.magFilter===Eo||b.magFilter===ys||b.magFilter===tr||b.minFilter===Yt||b.minFilter===Eo||b.minFilter===ys||b.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,j[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,j[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,j[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,G[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,W[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vt||b.minFilter!==ys&&b.minFilter!==tr||b.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Q(I,b){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",y));const ne=b.source;let re=d.get(ne);re===void 0&&(re={},d.set(ne,re));const ae=O(b);if(ae!==I.__cacheKey){re[ae]===void 0&&(re[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[ae].usedTimes++;const Ce=re[I.__cacheKey];Ce!==void 0&&(re[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(b)),I.__cacheKey=ae,I.__webglTexture=re[ae].texture}return Y}function de(I,b,Y){let ne=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=n.TEXTURE_3D);const re=Q(I,b),ae=b.source;t.bindTexture(ne,I.__webglTexture,n.TEXTURE0+Y);const Ce=i.get(ae);if(ae.version!==Ce.__version||re===!0){t.activeTexture(n.TEXTURE0+Y);const ge=lt.getPrimaries(lt.workingColorSpace),me=b.colorSpace===Mi?null:lt.getPrimaries(b.colorSpace),Ue=b.colorSpace===Mi||ge===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ce=_(b.image,!1,r.maxTextureSize);ce=Xe(b,ce);const Te=s.convert(b.format,b.colorSpace),Je=s.convert(b.type);let Le=M(b.internalFormat,Te,Je,b.colorSpace,b.isVideoTexture);J(ne,b);let xe;const Be=b.mipmaps,Ye=b.isVideoTexture!==!0,at=Ce.__version===void 0||re===!0,He=ae.dataReady,S=x(b,ce);if(b.isDepthTexture)Le=n.DEPTH_COMPONENT16,b.type===Rn?Le=n.DEPTH_COMPONENT32F:b.type===Bi?Le=n.DEPTH_COMPONENT24:b.type===Gs&&(Le=n.DEPTH24_STENCIL8),at&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Le,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Le,ce.width,ce.height,0,Te,Je,null));else if(b.isDataTexture)if(Be.length>0){Ye&&at&&t.texStorage2D(n.TEXTURE_2D,S,Le,Be[0].width,Be[0].height);for(let B=0,X=Be.length;B<X;B++)xe=Be[B],Ye?He&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,xe.width,xe.height,Te,Je,xe.data):t.texImage2D(n.TEXTURE_2D,B,Le,xe.width,xe.height,0,Te,Je,xe.data);b.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(n.TEXTURE_2D,S,Le,ce.width,ce.height),He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Te,Je,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ce.width,ce.height,0,Te,Je,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,Le,Be[0].width,Be[0].height,ce.depth);for(let B=0,X=Be.length;B<X;B++)xe=Be[B],b.format!==Wt?Te!==null?Ye?He&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,xe.width,xe.height,ce.depth,Te,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Le,xe.width,xe.height,ce.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,xe.width,xe.height,ce.depth,Te,Je,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,Le,xe.width,xe.height,ce.depth,0,Te,Je,xe.data)}else{Ye&&at&&t.texStorage2D(n.TEXTURE_2D,S,Le,Be[0].width,Be[0].height);for(let B=0,X=Be.length;B<X;B++)xe=Be[B],b.format!==Wt?Te!==null?Ye?He&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,xe.width,xe.height,Te,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,B,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?He&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,xe.width,xe.height,Te,Je,xe.data):t.texImage2D(n.TEXTURE_2D,B,Le,xe.width,xe.height,0,Te,Je,xe.data)}else if(b.isDataArrayTexture)Ye?(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,Le,ce.width,ce.height,ce.depth),He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,Je,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ce.width,ce.height,ce.depth,0,Te,Je,ce.data);else if(b.isData3DTexture)Ye?(at&&t.texStorage3D(n.TEXTURE_3D,S,Le,ce.width,ce.height,ce.depth),He&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,Je,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ce.width,ce.height,ce.depth,0,Te,Je,ce.data);else if(b.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(n.TEXTURE_2D,S,Le,ce.width,ce.height);else{let B=ce.width,X=ce.height;for(let se=0;se<S;se++)t.texImage2D(n.TEXTURE_2D,se,Le,B,X,0,Te,Je,null),B>>=1,X>>=1}}else if(Be.length>0){if(Ye&&at){const B=ct(Be[0]);t.texStorage2D(n.TEXTURE_2D,S,Le,B.width,B.height)}for(let B=0,X=Be.length;B<X;B++)xe=Be[B],Ye?He&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Te,Je,xe):t.texImage2D(n.TEXTURE_2D,B,Le,Te,Je,xe);b.generateMipmaps=!1}else if(Ye){if(at){const B=ct(ce);t.texStorage2D(n.TEXTURE_2D,S,Le,B.width,B.height)}He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Je,ce)}else t.texImage2D(n.TEXTURE_2D,0,Le,Te,Je,ce);m(b)&&p(ne),Ce.__version=ae.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ve(I,b,Y){if(b.image.length!==6)return;const ne=Q(I,b),re=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);const ae=i.get(re);if(re.version!==ae.__version||ne===!0){t.activeTexture(n.TEXTURE0+Y);const Ce=lt.getPrimaries(lt.workingColorSpace),ge=b.colorSpace===Mi?null:lt.getPrimaries(b.colorSpace),me=b.colorSpace===Mi||Ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let X=0;X<6;X++)!Ue&&!ce?Te[X]=_(b.image[X],!0,r.maxCubemapSize):Te[X]=ce?b.image[X].image:b.image[X],Te[X]=Xe(b,Te[X]);const Je=Te[0],Le=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),Be=M(b.internalFormat,Le,xe,b.colorSpace),Ye=b.isVideoTexture!==!0,at=ae.__version===void 0||ne===!0,He=re.dataReady;let S=x(b,Je);J(n.TEXTURE_CUBE_MAP,b);let B;if(Ue){Ye&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,S,Be,Je.width,Je.height);for(let X=0;X<6;X++){B=Te[X].mipmaps;for(let se=0;se<B.length;se++){const le=B[se];b.format!==Wt?Le!==null?Ye?He&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,le.width,le.height,Le,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,Be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,le.width,le.height,Le,xe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,Be,le.width,le.height,0,Le,xe,le.data)}}}else{if(B=b.mipmaps,Ye&&at){B.length>0&&S++;const X=ct(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,S,Be,X.width,X.height)}for(let X=0;X<6;X++)if(ce){Ye?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Te[X].width,Te[X].height,Le,xe,Te[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,Te[X].width,Te[X].height,0,Le,xe,Te[X].data);for(let se=0;se<B.length;se++){const ze=B[se].image[X].image;Ye?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,ze.width,ze.height,Le,xe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,Be,ze.width,ze.height,0,Le,xe,ze.data)}}else{Ye?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Le,xe,Te[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,Le,xe,Te[X]);for(let se=0;se<B.length;se++){const le=B[se];Ye?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,Le,xe,le.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,Be,Le,xe,le.image[X])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),ae.__version=re.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function V(I,b,Y,ne,re,ae){const Ce=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),me=M(Y.internalFormat,Ce,ge,Y.colorSpace);if(!i.get(b).__hasExternalTextures){const ce=Math.max(1,b.width>>ae),Te=Math.max(1,b.height>>ae);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ae,me,ce,Te,b.depth,0,Ce,ge,null):t.texImage2D(re,ae,me,ce,Te,0,Ce,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,re,i.get(Y).__webglTexture,0,Ee(b)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,re,i.get(Y).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(I,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer&&!b.stencilBuffer){let ne=n.DEPTH_COMPONENT24;if(Y||ke(b)){const re=b.depthTexture;re&&re.isDepthTexture&&(re.type===Rn?ne=n.DEPTH_COMPONENT32F:re.type===Bi&&(ne=n.DEPTH_COMPONENT24));const ae=Ee(b);ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,ne,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,ne,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(b.depthBuffer&&b.stencilBuffer){const ne=Ee(b);Y&&ke(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,b.width,b.height):ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{const ne=b.textures;for(let re=0;re<ne.length;re++){const ae=ne[re],Ce=s.convert(ae.format,ae.colorSpace),ge=s.convert(ae.type),me=M(ae.internalFormat,Ce,ge,ae.colorSpace),Ue=Ee(b);Y&&ke(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,me,b.width,b.height):ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,me,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const ne=i.get(b.depthTexture).__webglTexture,re=Ee(b);if(b.depthTexture.format===Pi)ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(b.depthTexture.format===Rs)ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function oe(I){const b=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,I)}else if(Y){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=n.createRenderbuffer(),ie(b.__webglDepthbuffer[ne],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ie(b.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(I,b,Y){const ne=i.get(I);b!==void 0&&V(ne.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&oe(I)}function Se(I){const b=I.texture,Y=i.get(I),ne=i.get(b);I.addEventListener("dispose",R);const re=I.textures,ae=I.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=b.version,a.memory.textures++),ae){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let me=0;me<b.mipmaps.length;me++)Y.__webglFramebuffer[ge][me]=n.createFramebuffer()}else Y.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ge=0,me=re.length;ge<me;ge++){const Ue=i.get(re[ge]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&ke(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const me=re[ge];Y.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ge]);const Ue=s.convert(me.format,me.colorSpace),ce=s.convert(me.type),Te=M(me.internalFormat,Ue,ce,me.colorSpace,I.isXRRenderTarget===!0),Je=Ee(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Te,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),J(n.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)V(Y.__webglFramebuffer[ge][me],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,me);else V(Y.__webglFramebuffer[ge],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,me=re.length;ge<me;ge++){const Ue=re[ge],ce=i.get(Ue);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),J(n.TEXTURE_2D,Ue),V(Y.__webglFramebuffer,I,Ue,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(Ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),J(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)V(Y.__webglFramebuffer[me],I,b,n.COLOR_ATTACHMENT0,ge,me);else V(Y.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,ge,0);m(b)&&p(ge),t.unbindTexture()}I.depthBuffer&&oe(I)}function N(I){const b=I.textures;for(let Y=0,ne=b.length;Y<ne;Y++){const re=b[Y];if(m(re)){const ae=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(re).__webglTexture;t.bindTexture(ae,Ce),p(ae),t.unbindTexture()}}}const he=[],Z=[];function De(I){if(I.samples>0){if(ke(I)===!1){const b=I.textures,Y=I.width,ne=I.height;let re=n.COLOR_BUFFER_BIT;const ae=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(I),ge=b.length>1;if(ge)for(let me=0;me<b.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let me=0;me<b.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);const Ue=i.get(b[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,re,n.NEAREST),c===!0&&(he.length=0,Z.length=0,he.push(n.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(he.push(ae),Z.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let me=0;me<b.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);const Ue=i.get(b[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ee(I){return Math.min(r.maxSamples,I.samples)}function ke(I){const b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(I){const b=a.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Xe(I,b){const Y=I.colorSpace,ne=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Hi&&Y!==Mi&&(lt.getTransfer(Y)===pt?(ne!==Wt||re!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=v,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=L,this.setTextureCube=F,this.rebindTextures=we,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ke}function Iv(n,e){function t(i,r=Mi){let s;const a=lt.getTransfer(r);if(i===Oi)return n.UNSIGNED_BYTE;if(i===Qh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ef)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fp)return n.BYTE;if(i===dp)return n.SHORT;if(i===Kh)return n.UNSIGNED_SHORT;if(i===Jh)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===mp)return n.ALPHA;if(i===gp)return n.RGB;if(i===Wt)return n.RGBA;if(i===_p)return n.LUMINANCE;if(i===vp)return n.LUMINANCE_ALPHA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===xp)return n.RED;if(i===tf)return n.RED_INTEGER;if(i===yp)return n.RG;if(i===nf)return n.RG_INTEGER;if(i===rf)return n.RGBA_INTEGER;if(i===To||i===Ao||i===Co||i===Ro)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===Ec||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Rc||i===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cc||i===Rc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Dc||i===Ic||i===Uc||i===Nc||i===kc||i===Fc||i===Oc||i===Bc||i===zc||i===Hc||i===Gc||i===Vc||i===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===Xc||i===qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Po)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===$c||i===Yc||i===jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Uv extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nv={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
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

}`;class Ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Vt({vertexShader:kv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qt(new sr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Bv extends gr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=new Ov,m=t.getContextAttributes();let p=null,M=null;const x=[],y=[],R=new Re;let C=null;const E=new ln;E.layers.enable(1),E.viewport=new Ft;const T=new ln;T.layers.enable(2),T.viewport=new Ft;const w=[E,T],v=new Uv;v.layers.enable(1),v.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ie=x[V];return ie===void 0&&(ie=new nl,x[V]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(V){let ie=x[V];return ie===void 0&&(ie=new nl,x[V]=ie),ie.getGripSpace()},this.getHand=function(V){let ie=x[V];return ie===void 0&&(ie=new nl,x[V]=ie),ie.getHandSpace()};function U(V){const ie=y.indexOf(V.inputSource);if(ie===-1)return;const ue=x[ie];ue!==void 0&&(ue.update(V.inputSource,V.frame,l||a),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",L);for(let V=0;V<x.length;V++){const ie=y[V];ie!==null&&(y[V]=null,x[V].disconnect(ie))}D=null,O=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",k),r.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Pn(h.framebufferWidth,h.framebufferHeight,{format:Wt,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ue=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Rs:Pi,ue=m.stencil?Gs:Bi);const we={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Pn(d.textureWidth,d.textureHeight,{format:Wt,type:Oi,depthTexture:new qa(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(V){for(let ie=0;ie<V.removed.length;ie++){const ue=V.removed[ie],oe=y.indexOf(ue);oe>=0&&(y[oe]=null,x[oe].disconnect(ue))}for(let ie=0;ie<V.added.length;ie++){const ue=V.added[ie];let oe=y.indexOf(ue);if(oe===-1){for(let Se=0;Se<x.length;Se++)if(Se>=y.length){y.push(ue),oe=Se;break}else if(y[Se]===null){y[Se]=ue,oe=Se;break}if(oe===-1)break}const we=x[oe];we&&we.connect(ue)}}const F=new H,j=new H;function G(V,ie,ue){F.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);const oe=F.distanceTo(j),we=ie.projectionMatrix.elements,Se=ue.projectionMatrix.elements,N=we[14]/(we[10]-1),he=we[14]/(we[10]+1),Z=(we[9]+1)/we[5],De=(we[9]-1)/we[5],Ee=(we[8]-1)/we[0],ke=(Se[8]+1)/Se[0],ye=N*Ee,Xe=N*ke,ct=oe/(-Ee+ke),I=ct*-Ee;ie.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(I),V.translateZ(ct),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const b=N+ct,Y=he+ct,ne=ye-I,re=Xe+(oe-I),ae=Z*he/Y*b,Ce=De*he/Y*b;V.projectionMatrix.makePerspective(ne,re,ae,Ce,b,Y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,ie){ie===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ie.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),v.near=T.near=E.near=V.near,v.far=T.far=E.far=V.far,(D!==v.near||O!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,O=v.far,E.near=D,E.far=O,T.near=D,T.far=O,E.updateProjectionMatrix(),T.updateProjectionMatrix(),V.updateProjectionMatrix());const ie=V.parent,ue=v.cameras;W(v,ie);for(let oe=0;oe<ue.length;oe++)W(ue[oe],ie);ue.length===2?G(v,E,T):v.projectionMatrix.copy(E.projectionMatrix),J(V,v,ie)};function J(V,ie,ue){ue===null?V.matrix.copy(ie.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(ie.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ie.projectionMatrix),V.projectionMatrixInverse.copy(ie.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Il*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let Q=null;function de(V,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ue=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let oe=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Se=0;Se<ue.length;Se++){const N=ue[Se];let he=null;if(h!==null)he=h.getViewport(N);else{const De=f.getViewSubImage(d,N);he=De.viewport,Se===0&&(e.setRenderTargetTextures(M,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(M))}let Z=w[Se];Z===void 0&&(Z=new ln,Z.layers.enable(Se),Z.viewport=new Ft,w[Se]=Z),Z.matrix.fromArray(N.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(N.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(he.x,he.y,he.width,he.height),Se===0&&(v.matrix.copy(Z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Z)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Se=f.getDepthInformation(ue[0]);Se&&Se.isValid&&Se.texture&&_.init(e,Se,r.renderState)}}for(let ue=0;ue<x.length;ue++){const oe=y[ue],we=x[ue];oe!==null&&we!==void 0&&we.update(oe,ie,l||a)}_.render(e,v),Q&&Q(V,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const ve=new vf;ve.setAnimationLoop(de),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}const Yi=new oi,zv=new st;function Hv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,y=M.envMapRotation;if(x&&(m.envMap.value=x,Yi.copy(y),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(Yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const y=x.program;i.uniformBlockBinding(M,y)}function l(M,x){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(M,R);const C=e.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){const x=f();M.__bindingPointIndex=x;const y=n.createBuffer(),R=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],y=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,E=y.length;C<E;C++){const T=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,v=T.length;w<v;w++){const D=T[w];if(h(D,C,w,R)===!0){const O=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let L=0;L<U.length;L++){const F=U[L],j=_(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,O+k,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,x,y,R){const C=M.value,E=x+"_"+y;if(R[E]===void 0)return typeof C=="number"||typeof C=="boolean"?R[E]=C:R[E]=C.clone(),!0;{const T=R[E];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return R[E]=C,!0}else if(T.equals(C)===!1)return T.copy(C),!0}return!1}function g(M){const x=M.uniforms;let y=0;const R=16;for(let E=0,T=x.length;E<T;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,D=w.length;v<D;v++){const O=w[v],U=Array.isArray(O.value)?O.value:[O.value];for(let k=0,L=U.length;k<L;k++){const F=U[k],j=_(F),G=y%R;G!==0&&R-G<j.boundary&&(y+=R-G),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=j.storage}}}const C=y%R;return C>0&&(y+=R-C),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Vv{constructor(e={}){const{canvas:t=Np(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let y=!1,R=0,C=0,E=null,T=-1,w=null;const v=new Ft,D=new Ft;let O=null;const U=new Ke(0);let k=0,L=t.width,F=t.height,j=1,G=null,W=null;const J=new Ft(0,0,L,F),Q=new Ft(0,0,L,F);let de=!1;const ve=new _f;let V=!1,ie=!1;const ue=new st,oe=new H,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return E===null?j:1}let N=i;function he(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",X,!1),N===null){const z="webgl2";if(N=he(z,A),N===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,De,Ee,ke,ye,Xe,ct,I,b,Y,ne,re,ae,Ce,ge,me,Ue,ce,Te,Je,Le,xe,Be,Ye;function at(){Z=new K0(N),Z.init(),xe=new Iv(N,Z),De=new X0(N,Z,e,xe),Ee=new Lv(N),ke=new e_(N),ye=new _v,Xe=new Dv(N,Z,Ee,ye,De,xe,ke),ct=new $0(x),I=new Z0(x),b=new om(N),Be=new V0(N,b),Y=new J0(N,b,ke,Be),ne=new n_(N,Y,b,ke),Te=new t_(N,De,Xe),me=new q0(ye),re=new gv(x,ct,I,Z,De,Be,me),ae=new Hv(x,ye),Ce=new xv,ge=new Ev(Z),ce=new G0(x,ct,I,Ee,ne,d,c),Ue=new Pv(x,ne,De),Ye=new Gv(N,ke,De,Ee),Je=new W0(N,Z,ke),Le=new Q0(N,Z,ke),ke.programs=re.programs,x.capabilities=De,x.extensions=Z,x.properties=ye,x.renderLists=Ce,x.shadowMap=Ue,x.state=Ee,x.info=ke}at();const He=new Bv(x,N);this.xr=He,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(L,F,!1))},this.getSize=function(A){return A.set(L,F)},this.setSize=function(A,z,K=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,F=z,t.width=Math.floor(A*j),t.height=Math.floor(z*j),K===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(L*j,F*j).floor()},this.setDrawingBufferSize=function(A,z,K){L=A,F=z,j=K,t.width=Math.floor(A*K),t.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,z,K,q){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,K,q),Ee.viewport(v.copy(J).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,z,K,q){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,z,K,q),Ee.scissor(D.copy(Q).multiplyScalar(j).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){Ee.setScissorTest(de=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(A=!0,z=!0,K=!0){let q=0;if(A){let $=!1;if(E!==null){const _e=E.texture.format;$=_e===rf||_e===nf||_e===tf}if($){const _e=E.texture.type,Me=_e===Oi||_e===Bi||_e===Kh||_e===Gs||_e===Qh||_e===ef,be=ce.getClearColor(),Ie=ce.getClearAlpha(),Fe=be.r,Ge=be.g,Ze=be.b;Me?(h[0]=Fe,h[1]=Ge,h[2]=Ze,h[3]=Ie,N.clearBufferuiv(N.COLOR,0,h)):(g[0]=Fe,g[1]=Ge,g[2]=Ze,g[3]=Ie,N.clearBufferiv(N.COLOR,0,g))}else q|=N.COLOR_BUFFER_BIT}z&&(q|=N.DEPTH_BUFFER_BIT),K&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",X,!1),Ce.dispose(),ge.dispose(),ye.dispose(),ct.dispose(),I.dispose(),ne.dispose(),Be.dispose(),Ye.dispose(),re.dispose(),He.dispose(),He.removeEventListener("sessionstart",Qe),He.removeEventListener("sessionend",wt),dt.stop()};function S(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=ke.autoReset,z=Ue.enabled,K=Ue.autoUpdate,q=Ue.needsUpdate,$=Ue.type;at(),ke.autoReset=A,Ue.enabled=z,Ue.autoUpdate=K,Ue.needsUpdate=q,Ue.type=$}function X(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const z=A.target;z.removeEventListener("dispose",se),le(z)}function le(A){ze(A),ye.remove(A)}function ze(A){const z=ye.get(A).programs;z!==void 0&&(z.forEach(function(K){re.releaseProgram(K)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,q,$,_e){z===null&&(z=we);const Me=$.isMesh&&$.matrixWorld.determinant()<0,be=Md(A,z,K,q,$);Ee.setMaterial(q,Me);let Ie=K.index,Fe=1;if(q.wireframe===!0){if(Ie=Y.getWireframeAttribute(K),Ie===void 0)return;Fe=2}const Ge=K.drawRange,Ze=K.attributes.position;let Mt=Ge.start*Fe,Ot=(Ge.start+Ge.count)*Fe;_e!==null&&(Mt=Math.max(Mt,_e.start*Fe),Ot=Math.min(Ot,(_e.start+_e.count)*Fe)),Ie!==null?(Mt=Math.max(Mt,0),Ot=Math.min(Ot,Ie.count)):Ze!=null&&(Mt=Math.max(Mt,0),Ot=Math.min(Ot,Ze.count));const rn=Ot-Mt;if(rn<0||rn===1/0)return;Be.setup($,q,be,K,Ie);let Yn,it=Je;if(Ie!==null&&(Yn=b.get(Ie),it=Le,it.setIndex(Yn)),$.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*Se()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if($.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),Ee.setLineWidth(Oe*Se()),$.isLineSegments?it.setMode(N.LINES):$.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else $.isPoints?it.setMode(N.POINTS):$.isSprite&&it.setMode(N.TRIANGLES);if($.isBatchedMesh)$._multiDrawInstances!==null?it.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances):it.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)it.renderInstances(Mt,rn,$.count);else if(K.isInstancedBufferGeometry){const Oe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,cs=Math.min(K.instanceCount,Oe);it.renderInstances(Mt,rn,cs)}else it.render(Mt,rn)};function je(A,z,K){A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Qs(A,z,K),A.side=mn,A.needsUpdate=!0,Qs(A,z,K),A.side=On):Qs(A,z,K)}this.compile=function(A,z,K=null){K===null&&(K=A),m=ge.get(K),m.init(z),M.push(m),K.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),A!==K&&A.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(x._useLegacyLights);const q=new Set;return A.traverse(function($){const _e=$.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const be=_e[Me];je(be,K,$),q.add(be)}else je(_e,K,$),q.add(_e)}),M.pop(),m=null,q},this.compileAsync=function(A,z,K=null){const q=this.compile(A,z,K);return new Promise($=>{function _e(){if(q.forEach(function(Me){ye.get(Me).currentProgram.isReady()&&q.delete(Me)}),q.size===0){$(A);return}setTimeout(_e,10)}Z.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let _t=null;function Pt(A){_t&&_t(A)}function Qe(){dt.stop()}function wt(){dt.start()}const dt=new vf;dt.setAnimationLoop(Pt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(A){_t=A,He.setAnimationLoop(A),A===null?dt.stop():dt.start()},He.addEventListener("sessionstart",Qe),He.addEventListener("sessionend",wt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(z),z=He.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,E),m=ge.get(A,M.length),m.init(z),M.push(m),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ve.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,V=me.init(this.clippingPlanes,ie),_=Ce.get(A,p.length),_.init(),p.push(_),li(A,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,W);const K=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1;K&&ce.addToRenderList(_,A),this.info.render.frame++,V===!0&&me.beginShadows();const q=m.state.shadowsArray;Ue.render(q,A,z),V===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,_e=_.transmissive;if(m.setupLights(x._useLegacyLights),z.isArrayCamera){const Me=z.cameras;if(_e.length>0)for(let be=0,Ie=Me.length;be<Ie;be++){const Fe=Me[be];ci($,_e,A,Fe)}K&&ce.render(A);for(let be=0,Ie=Me.length;be<Ie;be++){const Fe=Me[be];un(_,A,Fe,Fe.viewport)}}else _e.length>0&&ci($,_e,A,z),K&&ce.render(A),un(_,A,z);E!==null&&(Xe.updateMultisampleRenderTarget(E),Xe.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,z),Be.resetDefaultState(),T=-1,w=null,M.pop(),M.length>0?(m=M[M.length-1],V===!0&&me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function li(A,z,K,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){q&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const Me=ne.update(A),be=A.material;be.visible&&_.push(A,Me,be,K,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const Me=ne.update(A),be=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),oe.copy(Me.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(be)){const Ie=Me.groups;for(let Fe=0,Ge=Ie.length;Fe<Ge;Fe++){const Ze=Ie[Fe],Mt=be[Ze.materialIndex];Mt&&Mt.visible&&_.push(A,Me,Mt,K,oe.z,Ze)}}else be.visible&&_.push(A,Me,be,K,oe.z,null)}}const _e=A.children;for(let Me=0,be=_e.length;Me<be;Me++)li(_e[Me],z,K,q)}function un(A,z,K,q){const $=A.opaque,_e=A.transmissive,Me=A.transparent;m.setupLightsView(K),V===!0&&me.setGlobalState(x.clippingPlanes,K),q&&Ee.viewport(v.copy(q)),$.length>0&&$n($,z,K),_e.length>0&&$n(_e,z,K),Me.length>0&&$n(Me,z,K),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ci(A,z,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Pn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Qr:Oi,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _e=m.state.transmissionRenderTarget[q.id],Me=q.viewport||v;_e.setSize(Me.z,Me.w);const be=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(U),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=Ri;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),V===!0&&me.setGlobalState(x.clippingPlanes,q),$n(A,K,q),Xe.updateMultisampleRenderTarget(_e),Xe.updateRenderTargetMipmap(_e),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ze=0,Mt=z.length;Ze<Mt;Ze++){const Ot=z[Ze],rn=Ot.object,Yn=Ot.geometry,it=Ot.material,Oe=Ot.group;if(it.side===On&&rn.layers.test(q.layers)){const cs=it.side;it.side=tn,it.needsUpdate=!0,ls(rn,K,q,Yn,it,Oe),it.side=cs,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(Xe.updateMultisampleRenderTarget(_e),Xe.updateRenderTargetMipmap(_e))}x.setRenderTarget(be),x.setClearColor(U,k),Fe!==void 0&&(q.viewport=Fe),x.toneMapping=Ie}function $n(A,z,K){const q=z.isScene===!0?z.overrideMaterial:null;for(let $=0,_e=A.length;$<_e;$++){const Me=A[$],be=Me.object,Ie=Me.geometry,Fe=q===null?Me.material:q,Ge=Me.group;be.layers.test(K.layers)&&ls(be,z,K,Ie,Fe,Ge)}}function ls(A,z,K,q,$,_e){A.onBeforeRender(x,z,K,q,$,_e),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(x,z,K,q,A,_e),$.transparent===!0&&$.side===On&&$.forceSinglePass===!1?($.side=tn,$.needsUpdate=!0,x.renderBufferDirect(K,z,q,$,A,_e),$.side=mn,$.needsUpdate=!0,x.renderBufferDirect(K,z,q,$,A,_e),$.side=On):x.renderBufferDirect(K,z,q,$,A,_e),A.onAfterRender(x,z,K,q,$,_e)}function Qs(A,z,K){z.isScene!==!0&&(z=we);const q=ye.get(A),$=m.state.lights,_e=m.state.shadowsArray,Me=$.state.version,be=re.getParameters(A,$.state,_e,z,K),Ie=re.getProgramCacheKey(be);let Fe=q.programs;q.environment=A.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(A.isMeshStandardMaterial?I:ct).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",se),Fe=new Map,q.programs=Fe);let Ge=Fe.get(Ie);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===Me)return _c(A,be),Ge}else be.uniforms=re.getUniforms(A),A.onBuild(K,be,x),A.onBeforeCompile(be,x),Ge=re.acquireProgram(be,Ie),Fe.set(Ie,Ge),q.uniforms=be.uniforms;const Ze=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=me.uniform),_c(A,be),q.needsLights=Ed(A),q.lightsStateVersion=Me,q.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function gc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ka.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function _c(A,z){const K=ye.get(A);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Md(A,z,K,q,$){z.isScene!==!0&&(z=we),Xe.resetTextureUnits();const _e=z.fog,Me=q.isMeshStandardMaterial?z.environment:null,be=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Hi,Ie=(q.isMeshStandardMaterial?I:ct).get(q.envMap||Me),Fe=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ze=!!K.morphAttributes.position,Mt=!!K.morphAttributes.normal,Ot=!!K.morphAttributes.color;let rn=Ri;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(rn=x.toneMapping);const Yn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,it=Yn!==void 0?Yn.length:0,Oe=ye.get(q),cs=m.state.lights;if(V===!0&&(ie===!0||A!==w)){const hn=A===w&&q.id===T;me.setState(q,A,hn)}let mt=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==cs.state.version||Oe.outputColorSpace!==be||$.isBatchedMesh&&Oe.batching===!1||!$.isBatchedMesh&&Oe.batching===!0||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||$.isInstancedMesh&&Oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Oe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Oe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Oe.instancingMorph===!1&&$.morphTexture!==null||Oe.envMap!==Ie||q.fog===!0&&Oe.fog!==_e||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==me.numPlanes||Oe.numIntersection!==me.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==Ge||Oe.morphTargets!==Ze||Oe.morphNormals!==Mt||Oe.morphColors!==Ot||Oe.toneMapping!==rn||Oe.morphTargetsCount!==it)&&(mt=!0):(mt=!0,Oe.__version=q.version);let Gi=Oe.currentProgram;mt===!0&&(Gi=Qs(q,z,$));let vc=!1,us=!1,wo=!1;const Bt=Gi.getUniforms(),ui=Oe.uniforms;if(Ee.useProgram(Gi.program)&&(vc=!0,us=!0,wo=!0),q.id!==T&&(T=q.id,us=!0),vc||w!==A){Bt.setValue(N,"projectionMatrix",A.projectionMatrix),Bt.setValue(N,"viewMatrix",A.matrixWorldInverse);const hn=Bt.map.cameraPosition;hn!==void 0&&hn.setValue(N,oe.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,us=!0,wo=!0)}if($.isSkinnedMesh){Bt.setOptional(N,$,"bindMatrix"),Bt.setOptional(N,$,"bindMatrixInverse");const hn=$.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Bt.setValue(N,"boneTexture",hn.boneTexture,Xe))}$.isBatchedMesh&&(Bt.setOptional(N,$,"batchingTexture"),Bt.setValue(N,"batchingTexture",$._matricesTexture,Xe));const Mo=K.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0)&&Te.update($,K,Gi),(us||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,Bt.setValue(N,"receiveShadow",$.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ui.envMap.value=Ie,ui.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(ui.envMapIntensity.value=z.environmentIntensity),us&&(Bt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&bd(ui,wo),_e&&q.fog===!0&&ae.refreshFogUniforms(ui,_e),ae.refreshMaterialUniforms(ui,q,j,F,m.state.transmissionRenderTarget[A.id]),ka.upload(N,gc(Oe),ui,Xe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ka.upload(N,gc(Oe),ui,Xe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Bt.setValue(N,"center",$.center),Bt.setValue(N,"modelViewMatrix",$.modelViewMatrix),Bt.setValue(N,"normalMatrix",$.normalMatrix),Bt.setValue(N,"modelMatrix",$.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const hn=q.uniformsGroups;for(let bo=0,Td=hn.length;bo<Td;bo++){const xc=hn[bo];Ye.update(xc,Gi),Ye.bind(xc,Gi)}}return Gi}function bd(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Ed(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,z,K){ye.get(A.texture).__webglTexture=z,ye.get(A.depthTexture).__webglTexture=K;const q=ye.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=K===void 0,q.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const K=ye.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){E=A,R=z,C=K;let q=!0,$=null,_e=!1,Me=!1;if(A){const Ie=ye.get(A);Ie.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(N.FRAMEBUFFER,null),q=!1):Ie.__webglFramebuffer===void 0?Xe.setupRenderTarget(A):Ie.__hasExternalTextures&&Xe.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Ge=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?$=Ge[z][K]:$=Ge[z],_e=!0):A.samples>0&&Xe.useMultisampledRTT(A)===!1?$=ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?$=Ge[K]:$=Ge,v.copy(A.viewport),D.copy(A.scissor),O=A.scissorTest}else v.copy(J).multiplyScalar(j).floor(),D.copy(Q).multiplyScalar(j).floor(),O=de;if(Ee.bindFramebuffer(N.FRAMEBUFFER,$)&&q&&Ee.drawBuffers(A,$),Ee.viewport(v),Ee.scissor(D),Ee.setScissorTest(O),_e){const Ie=ye.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,K)}else if(Me){const Ie=ye.get(A.texture),Fe=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.__webglTexture,K||0,Fe)}T=-1},this.readRenderTargetPixels=function(A,z,K,q,$,_e,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){Ee.bindFramebuffer(N.FRAMEBUFFER,be);try{const Ie=A.texture,Fe=Ie.format,Ge=Ie.type;if(!De.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&K>=0&&K<=A.height-$&&N.readPixels(z,K,q,$,xe.convert(Fe),xe.convert(Ge),_e)}finally{const Ie=E!==null?ye.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,z,K=0){const q=Math.pow(2,-K),$=Math.floor(z.image.width*q),_e=Math.floor(z.image.height*q);Xe.setTexture2D(z,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,A.x,A.y,$,_e),Ee.unbindTexture()},this.copyTextureToTexture=function(A,z,K,q=0){const $=z.image.width,_e=z.image.height,Me=xe.convert(K.format),be=xe.convert(K.type);Xe.setTexture2D(K,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,q,A.x,A.y,$,_e,Me,be,z.image.data):z.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,q,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,q,A.x,A.y,Me,be,z.image),q===0&&K.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(A,z,K,q,$=0){const _e=A.max.x-A.min.x,Me=A.max.y-A.min.y,be=A.max.z-A.min.z,Ie=xe.convert(q.format),Fe=xe.convert(q.type);let Ge;if(q.isData3DTexture)Xe.setTexture3D(q,0),Ge=N.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)Xe.setTexture2DArray(q,0),Ge=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const Ze=N.getParameter(N.UNPACK_ROW_LENGTH),Mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ot=N.getParameter(N.UNPACK_SKIP_PIXELS),rn=N.getParameter(N.UNPACK_SKIP_ROWS),Yn=N.getParameter(N.UNPACK_SKIP_IMAGES),it=K.isCompressedTexture?K.mipmaps[$]:K.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,it.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?N.texSubImage3D(Ge,$,z.x,z.y,z.z,_e,Me,be,Ie,Fe,it.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,$,z.x,z.y,z.z,_e,Me,be,Ie,it.data):N.texSubImage3D(Ge,$,z.x,z.y,z.z,_e,Me,be,Ie,Fe,it),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,rn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Yn),$===0&&q.generateMipmaps&&N.generateMipmap(Ge),Ee.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Xe.setTextureCube(A,0):A.isData3DTexture?Xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Xe.setTexture2DArray(A,0):Xe.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){R=0,C=0,E=null,Ee.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tc?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===uo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class il extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bf extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=vt,u=vt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ef extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new H,Ya=new H,zu=new st,gs=new nc,wa=new ho,rl=new H,Hu=new H;let Wv=class extends nn{constructor(e=new qn,t=new Ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)$a.fromBufferAttribute(t,r-1),Ya.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$a.distanceTo(Ya);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),wa.radius+=s,e.ray.intersectsSphere(wa)===!1)return;zu.copy(r).invert(),gs.copy(e.ray).applyMatrix4(zu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),x=Ma(this,e,gs,c,p,M);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Ma(this,e,gs,c,_,m);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=Ma(this,e,gs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ma(this,e,gs,c,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ma(n,e,t,i,r,s){const a=n.geometry.attributes.position;if($a.fromBufferAttribute(a,r),Ya.fromBufferAttribute(a,s),t.distanceSqToSegment($a,Ya,rl,Hu)>i)return;rl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(rl);if(!(c<e.near||c>e.far))return{distance:c,point:Hu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Gu=new H,Vu=new H;class sl extends Wv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Gu.fromBufferAttribute(t,r),Vu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gu.distanceTo(Vu);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class al extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);const Xu={type:"change"},ol={type:"start"},qu={type:"end"},ba=new nc,$u=new vi,Xv=Math.cos(70*Up.DEG2RAD);class Tf extends gr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Ue),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xu),i.update(),s=r.NONE},this.update=function(){const S=new H,B=new ur().setFromUnitVectors(e.up,new H(0,1,0)),X=B.clone().invert(),se=new H,le=new ur,ze=new H,je=2*Math.PI;return function(Pt=null){const Qe=i.object.position;S.copy(Qe).sub(i.target),S.applyQuaternion(B),o.setFromVector3(S),i.autoRotate&&s===r.NONE&&O(v(Pt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let wt=i.minAzimuthAngle,dt=i.maxAzimuthAngle;isFinite(wt)&&isFinite(dt)&&(wt<-Math.PI?wt+=je:wt>Math.PI&&(wt-=je),dt<-Math.PI?dt+=je:dt>Math.PI&&(dt-=je),wt<=dt?o.theta=Math.max(wt,Math.min(dt,o.theta)):o.theta=o.theta>(wt+dt)/2?Math.max(wt,o.theta):Math.min(dt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let li=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)o.radius=J(o.radius);else{const un=o.radius;o.radius=J(o.radius*l),li=un!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion(X),Qe.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&C){let un=null;if(i.object.isPerspectiveCamera){const ci=S.length();un=J(ci*l);const $n=ci-un;i.object.position.addScaledVector(y,$n),i.object.updateMatrixWorld(),li=!!$n}else if(i.object.isOrthographicCamera){const ci=new H(R.x,R.y,0);ci.unproject(i.object);const $n=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),li=$n!==i.object.zoom;const ls=new H(R.x,R.y,0);ls.unproject(i.object),i.object.position.sub(ls).add(ci),i.object.updateMatrixWorld(),un=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;un!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(un).add(i.object.position):(ba.origin.copy(i.object.position),ba.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ba.direction))<Xv?e.lookAt(i.target):($u.setFromNormalAndCoplanarPoint(i.object.up,i.target),ba.intersectPlane($u,i.target))))}else if(i.object.isOrthographicCamera){const un=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),un!==i.object.zoom&&(i.object.updateProjectionMatrix(),li=!0)}return l=1,C=!1,li||se.distanceToSquared(i.object.position)>a||8*(1-le.dot(i.object.quaternion))>a||ze.distanceToSquared(i.target)>a?(i.dispatchEvent(Xu),se.copy(i.object.position),le.copy(i.object.quaternion),ze.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",I),i.domElement.removeEventListener("pointercancel",Y),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",Y),i.domElement.getRootNode().removeEventListener("keydown",ge,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Wu,c=new Wu;let l=1;const u=new H,f=new Re,d=new Re,h=new Re,g=new Re,_=new Re,m=new Re,p=new Re,M=new Re,x=new Re,y=new H,R=new Re;let C=!1;const E=[],T={};let w=!1;function v(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function D(S){const B=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*B)}function O(S){c.theta-=S}function U(S){c.phi-=S}const k=function(){const S=new H;return function(X,se){S.setFromMatrixColumn(se,0),S.multiplyScalar(-X),u.add(S)}}(),L=function(){const S=new H;return function(X,se){i.screenSpacePanning===!0?S.setFromMatrixColumn(se,1):(S.setFromMatrixColumn(se,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(X),u.add(S)}}(),F=function(){const S=new H;return function(X,se){const le=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;S.copy(ze).sub(i.target);let je=S.length();je*=Math.tan(i.object.fov/2*Math.PI/180),k(2*X*je/le.clientHeight,i.object.matrix),L(2*se*je/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(X*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),L(se*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(S,B){if(!i.zoomToCursor)return;C=!0;const X=i.domElement.getBoundingClientRect(),se=S-X.left,le=B-X.top,ze=X.width,je=X.height;R.x=se/ze*2-1,R.y=-(le/je)*2+1,y.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function Q(S){f.set(S.clientX,S.clientY)}function de(S){W(S.clientX,S.clientX),p.set(S.clientX,S.clientY)}function ve(S){g.set(S.clientX,S.clientY)}function V(S){d.set(S.clientX,S.clientY),h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const B=i.domElement;O(2*Math.PI*h.x/B.clientHeight),U(2*Math.PI*h.y/B.clientHeight),f.copy(d),i.update()}function ie(S){M.set(S.clientX,S.clientY),x.subVectors(M,p),x.y>0?j(D(x.y)):x.y<0&&G(D(x.y)),p.copy(M),i.update()}function ue(S){_.set(S.clientX,S.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),F(m.x,m.y),g.copy(_),i.update()}function oe(S){W(S.clientX,S.clientY),S.deltaY<0?G(D(S.deltaY)):S.deltaY>0&&j(D(S.deltaY)),i.update()}function we(S){let B=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),B=!0;break}B&&(S.preventDefault(),i.update())}function Se(S){if(E.length===1)f.set(S.pageX,S.pageY);else{const B=at(S),X=.5*(S.pageX+B.x),se=.5*(S.pageY+B.y);f.set(X,se)}}function N(S){if(E.length===1)g.set(S.pageX,S.pageY);else{const B=at(S),X=.5*(S.pageX+B.x),se=.5*(S.pageY+B.y);g.set(X,se)}}function he(S){const B=at(S),X=S.pageX-B.x,se=S.pageY-B.y,le=Math.sqrt(X*X+se*se);p.set(0,le)}function Z(S){i.enableZoom&&he(S),i.enablePan&&N(S)}function De(S){i.enableZoom&&he(S),i.enableRotate&&Se(S)}function Ee(S){if(E.length==1)d.set(S.pageX,S.pageY);else{const X=at(S),se=.5*(S.pageX+X.x),le=.5*(S.pageY+X.y);d.set(se,le)}h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const B=i.domElement;O(2*Math.PI*h.x/B.clientHeight),U(2*Math.PI*h.y/B.clientHeight),f.copy(d)}function ke(S){if(E.length===1)_.set(S.pageX,S.pageY);else{const B=at(S),X=.5*(S.pageX+B.x),se=.5*(S.pageY+B.y);_.set(X,se)}m.subVectors(_,g).multiplyScalar(i.panSpeed),F(m.x,m.y),g.copy(_)}function ye(S){const B=at(S),X=S.pageX-B.x,se=S.pageY-B.y,le=Math.sqrt(X*X+se*se);M.set(0,le),x.set(0,Math.pow(M.y/p.y,i.zoomSpeed)),j(x.y),p.copy(M);const ze=(S.pageX+B.x)*.5,je=(S.pageY+B.y)*.5;W(ze,je)}function Xe(S){i.enableZoom&&ye(S),i.enablePan&&ke(S)}function ct(S){i.enableZoom&&ye(S),i.enableRotate&&Ee(S)}function I(S){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",Y)),!Be(S)&&(Le(S),S.pointerType==="touch"?ce(S):ne(S)))}function b(S){i.enabled!==!1&&(S.pointerType==="touch"?Te(S):re(S))}function Y(S){switch(xe(S),E.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",Y),i.dispatchEvent(qu),s=r.NONE;break;case 1:const B=E[0],X=T[B];ce({pointerId:B,pageX:X.x,pageY:X.y});break}}function ne(S){let B;switch(S.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case vr.DOLLY:if(i.enableZoom===!1)return;de(S),s=r.DOLLY;break;case vr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;ve(S),s=r.PAN}else{if(i.enableRotate===!1)return;Q(S),s=r.ROTATE}break;case vr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;Q(S),s=r.ROTATE}else{if(i.enablePan===!1)return;ve(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ol)}function re(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(S);break;case r.DOLLY:if(i.enableZoom===!1)return;ie(S);break;case r.PAN:if(i.enablePan===!1)return;ue(S);break}}function ae(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(ol),oe(Ce(S)),i.dispatchEvent(qu))}function Ce(S){const B=S.deltaMode,X={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(B){case 1:X.deltaY*=16;break;case 2:X.deltaY*=100;break}return S.ctrlKey&&!w&&(X.deltaY*=10),X}function ge(S){S.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(S){S.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function Ue(S){i.enabled===!1||i.enablePan===!1||we(S)}function ce(S){switch(Ye(S),E.length){case 1:switch(i.touches.ONE){case xr.ROTATE:if(i.enableRotate===!1)return;Se(S),s=r.TOUCH_ROTATE;break;case xr.PAN:if(i.enablePan===!1)return;N(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Z(S),s=r.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ol)}function Te(S){switch(Ye(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ke(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ct(S),i.update();break;default:s=r.NONE}}function Je(S){i.enabled!==!1&&S.preventDefault()}function Le(S){E.push(S.pointerId)}function xe(S){delete T[S.pointerId];for(let B=0;B<E.length;B++)if(E[B]==S.pointerId){E.splice(B,1);return}}function Be(S){for(let B=0;B<E.length;B++)if(E[B]==S.pointerId)return!0;return!1}function Ye(S){let B=T[S.pointerId];B===void 0&&(B=new Re,T[S.pointerId]=B),B.set(S.pageX,S.pageY)}function at(S){const B=S.pointerId===E[0]?E[1]:E[0];return T[B]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",I),i.domElement.addEventListener("pointercancel",Y),i.domElement.addEventListener("wheel",ae,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}function qv(n){return n.length>=2&&n[0]===31&&n[1]===139}function $v(n){return n.length>=2&&n[0]===120&&(n[1]===1||n[1]===94||n[1]===156||n[1]===218)}function Yv(n){const e=n.slice(0,8),t=new DataView(e.buffer,e.byteOffset),i=t.getUint32(0,!0),r=t.getUint32(4,!0);if(e.length===8&&i>0&&i<100&&r===n.byteLength-8)return i}const jv=new TextEncoder,Zv=new TextDecoder;function Kv(n){return jv.encode(n)}function Jv(n){return Zv.decode(n instanceof Uint8Array?n:Uint8Array.from(n))}class Af{constructor(e,t){P(this,"littleEndian");P(this,"offset");P(this,"array");P(this,"view");P(this,"readByte",this.readNumber.bind(this,"getInt8",1));P(this,"readShort",this.readNumber.bind(this,"getInt16",2));P(this,"readInt",this.readNumber.bind(this,"getInt32",4));P(this,"readFloat",this.readNumber.bind(this,"getFloat32",4));P(this,"readDouble",this.readNumber.bind(this,"getFloat64",8));this.littleEndian=(t==null?void 0:t.littleEndian)??!1,this.offset=(t==null?void 0:t.offset)??0,this.array=e instanceof Uint8Array?e:new Uint8Array(e),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}readNumber(e,t){this.requireAvailable(t);const i=this.view[e](this.offset,this.littleEndian);return this.offset+=t,i}requireAvailable(e){if(e<0)throw new Error(`Cannot read negative byte length ${e}`);if(this.offset+e>this.array.byteLength)throw new Error(`Cannot read ${e} bytes at offset ${this.offset}; input length is ${this.array.byteLength}`)}readBytes(e){this.requireAvailable(e);const t=this.array.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){this.requireAvailable(2);const e=this.view.getUint16(this.offset,this.littleEndian);this.offset+=2;const t=this.readBytes(e);return Jv(t)}}class Cf{constructor(e){P(this,"littleEndian");P(this,"offset");P(this,"buffer");P(this,"array");P(this,"view");P(this,"writeByte",this.writeNumber.bind(this,"setInt8",1));P(this,"writeShort",this.writeNumber.bind(this,"setInt16",2));P(this,"writeInt",this.writeNumber.bind(this,"setInt32",4));P(this,"writeFloat",this.writeNumber.bind(this,"setFloat32",4));P(this,"writeDouble",this.writeNumber.bind(this,"setFloat64",8));this.littleEndian=(e==null?void 0:e.littleEndian)??!1,this.offset=(e==null?void 0:e.offset)??0,this.buffer=new ArrayBuffer((e==null?void 0:e.initialSize)??1024),this.array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer)}accommodate(e){const t=this.offset+e;if(this.buffer.byteLength>=t)return;let i=this.buffer.byteLength;for(;i<t;)i*=2;const r=new ArrayBuffer(i),s=new Uint8Array(r);s.set(this.array),this.offset>this.buffer.byteLength&&s.fill(0,this.buffer.byteLength,this.offset),this.buffer=r,this.view=new DataView(r),this.array=s}writeNumber(e,t,i){this.accommodate(t),this.view[e](this.offset,i,this.littleEndian),this.offset+=t}writeBytes(e){this.accommodate(e.length),this.array.set(e,this.offset),this.offset+=e.length}writeString(e){const t=Kv(e);if(t.length>65535)throw new Error(`NBT strings cannot exceed 65535 bytes; got ${t.length}`);this.accommodate(2),this.view.setUint16(this.offset,t.length,this.littleEndian),this.offset+=2,this.writeBytes(t)}getData(){return this.accommodate(0),this.array.slice(0,this.offset)}}var te;(function(n){function e(f){return typeof f=="number"?f:void 0}n.readNumber=e;function t(f){return typeof f=="number"?Math.floor(f):void 0}n.readInt=t;function i(f){return typeof f=="string"?f:void 0}n.readString=i;function r(f){return typeof f=="boolean"?f:void 0}n.readBoolean=r;function s(f){return typeof f=="object"&&f!==null&&!Array.isArray(f)?f:void 0}n.readObject=s;function a(f,d){if(Array.isArray(f))return d?f.map(h=>d(h)):f}n.readArray=a;function o(f,d){if(Array.isArray(f))return[0,1].map(h=>d(f[h]))}n.readPair=o;function c(f,d){const h=s(f)??{};return Object.fromEntries(Object.entries(h).map(([g,_])=>[g,d(_)]))}n.readMap=c;function l(f,d,h){const g=d(f);return g?h(g):void 0}n.compose=l;function u(f,d){return typeof f!="string"?d[0]:d.includes(f)?f:d[0]}n.readEnum=u})(te||(te={}));var $e;(function(n){function e(r){const s=te.readNumber(r);if(s)return i(s);const a=te.readArray(r,o=>te.readNumber(o)??0);if(!(a===void 0||a.length!==3))return a}n.fromJson=e;function t(r){if(r.isNumber())return i(r.getAsNumber());if(!r.isListOrArray())return;const s=r.getItems();if(!(s.length<3))return s.map(a=>a.getAsNumber())}n.fromNbt=t;function i(r){const s=r>>16&255,a=r>>8&255,o=r&255;return[s/255,a/255,o/255]}n.intToRgb=i})($e||($e={}));class $t{constructor(e){P(this,"source");P(this,"cursor");this.source=e,this.cursor=0}get remainingLength(){return this.source.length-this.cursor}get totalLength(){return this.source.length}getRead(e=0){return this.source.substring(e,this.cursor)}getRemaining(){return this.source.substring(this.cursor)}canRead(e=1){return this.cursor+e<=this.source.length}peek(e=0){return this.source.charAt(this.cursor+e)}read(){return this.source.charAt(this.cursor++)}skip(){this.cursor+=1}skipWhitespace(){for(;this.canRead()&&$t.isWhitespace(this.peek());)this.skip()}expect(e,t=!1){if(t&&this.skipWhitespace(),!this.canRead()||this.peek()!==e)throw this.createError(`Expected '${e}'`);this.skip()}readInt(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected integer");try{const i=Number(t);if(isNaN(i)||!Number.isInteger(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid integer '${t}'`)}}readFloat(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected float");try{const i=Number(t);if(isNaN(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid float '${t}'`)}}readUnquotedString(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInUnquotedString(this.peek());)this.skip();return this.getRead(e)}readQuotedString(){if(!this.canRead())return"";const e=this.peek();if(!$t.isQuotedStringStart(e))throw this.createError("Expected quote to start a string");return this.skip(),this.readStringUntil(e)}readString(){if(!this.canRead())return"";const e=this.peek();return $t.isQuotedStringStart(e)?(this.skip(),this.readStringUntil(e)):this.readUnquotedString()}readStringUntil(e){const t=[];let i=!1;for(;this.canRead();){const r=this.read();if(i)if(r===e||r==="\\")t.push(r),i=!1;else throw this.cursor-=1,this.createError(`Invalid escape sequence '${r}' in quoted string`);else if(r==="\\")i=!0;else{if(r===e)return t.join("");t.push(r)}}throw this.createError("Unclosed quoted string")}readBoolean(){const e=this.cursor,t=this.readUnquotedString();if(t.length===0)throw this.createError("Expected bool");if(t==="true")return!0;if(t==="false")return!1;throw this.cursor=e,this.createError(`Invalid bool, expected true or false but found '${t}'`)}static isAllowedInNumber(e){return e>="0"&&e<="9"||e==="."||e==="-"}static isAllowedInUnquotedString(e){return e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z"||e==="_"||e==="-"||e==="."||e==="+"}static isQuotedStringStart(e){return e==="'"||e==='"'}static isWhitespace(e){return e===" "||e==="	"||e===`
`||e==="\r"}createError(e){const t=Math.min(this.source.length,this.cursor),i=(t>10?"...":"")+this.source.substring(Math.max(0,t-10),t);return new Error(`${e} at position ${this.cursor}: ${i}<--[HERE]`)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Qv=4,Yu=0,ju=1,ex=2;function ss(n){let e=n.length;for(;--e>=0;)n[e]=0}const tx=0,Rf=1,nx=2,ix=3,rx=258,rc=29,$s=256,Ps=$s+1+rc,Yr=30,sc=19,Pf=2*Ps+1,nr=15,ll=16,sx=7,ac=256,Lf=16,Df=17,If=18,Nl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Fa=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),ax=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Uf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ox=512,ii=new Array((Ps+2)*2);ss(ii);const bs=new Array(Yr*2);ss(bs);const Ls=new Array(ox);ss(Ls);const Ds=new Array(rx-ix+1);ss(Ds);const oc=new Array(rc);ss(oc);const ja=new Array(Yr);ss(ja);function cl(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Nf,kf,Ff;function ul(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Of=n=>n<256?Ls[n]:Ls[256+(n>>>7)],Is=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},en=(n,e,t)=>{n.bi_valid>ll-t?(n.bi_buf|=e<<n.bi_valid&65535,Is(n,n.bi_buf),n.bi_buf=e>>ll-n.bi_valid,n.bi_valid+=t-ll):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},zn=(n,e,t)=>{en(n,t[e*2],t[e*2+1])},Bf=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},lx=n=>{n.bi_valid===16?(Is(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},cx=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,f,d,h,g,_=0;for(d=0;d<=nr;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<Pf;l++)u=n.heap[l],d=t[t[u*2+1]*2+1]+1,d>c&&(d=c,_++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,h=0,u>=o&&(h=a[u-o]),g=t[u*2],n.opt_len+=g*(d+h),s&&(n.static_len+=g*(r[u*2+1]+h)));if(_!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(u=n.bl_count[d];u!==0;)f=n.heap[--l],!(f>i)&&(t[f*2+1]!==d&&(n.opt_len+=(d-t[f*2+1])*t[f*2],t[f*2+1]=d),u--)}},zf=(n,e,t)=>{const i=new Array(nr+1);let r=0,s,a;for(s=1;s<=nr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Bf(i[o]++,o))}},ux=()=>{let n,e,t,i,r;const s=new Array(nr+1);for(t=0,i=0;i<rc-1;i++)for(oc[i]=t,n=0;n<1<<Nl[i];n++)Ds[t++]=i;for(Ds[t-1]=i,r=0,i=0;i<16;i++)for(ja[i]=r,n=0;n<1<<Fa[i];n++)Ls[r++]=i;for(r>>=7;i<Yr;i++)for(ja[i]=r<<7,n=0;n<1<<Fa[i]-7;n++)Ls[256+r++]=i;for(e=0;e<=nr;e++)s[e]=0;for(n=0;n<=143;)ii[n*2+1]=8,n++,s[8]++;for(;n<=255;)ii[n*2+1]=9,n++,s[9]++;for(;n<=279;)ii[n*2+1]=7,n++,s[7]++;for(;n<=287;)ii[n*2+1]=8,n++,s[8]++;for(zf(ii,Ps+1,s),n=0;n<Yr;n++)bs[n*2+1]=5,bs[n*2]=Bf(n,5);Nf=new cl(ii,Nl,$s+1,Ps,nr),kf=new cl(bs,Fa,0,Yr,nr),Ff=new cl(new Array(0),ax,0,sc,sx)},Hf=n=>{let e;for(e=0;e<Ps;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Yr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<sc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[ac*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Gf=n=>{n.bi_valid>8?Is(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Zu=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},hl=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Zu(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Zu(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Ku=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?zn(n,r,e):(a=Ds[r],zn(n,a+$s+1,e),o=Nl[a],o!==0&&(r-=oc[a],en(n,r,o)),i--,a=Of(i),zn(n,a,t),o=Fa[a],o!==0&&(i-=ja[a],en(n,i,o)));while(s<n.sym_next);zn(n,ac,e)},kl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=Pf,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)hl(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],hl(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,hl(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],cx(n,e),zf(t,c,n.bl_count)},Ju=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Lf*2]++):o<=10?n.bl_tree[Df*2]++:n.bl_tree[If*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},Qu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do zn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(zn(n,s,n.bl_tree),o--),zn(n,Lf,n.bl_tree),en(n,o-3,2)):o<=10?(zn(n,Df,n.bl_tree),en(n,o-3,3)):(zn(n,If,n.bl_tree),en(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},hx=n=>{let e;for(Ju(n,n.dyn_ltree,n.l_desc.max_code),Ju(n,n.dyn_dtree,n.d_desc.max_code),kl(n,n.bl_desc),e=sc-1;e>=3&&n.bl_tree[Uf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},fx=(n,e,t,i)=>{let r;for(en(n,e-257,5),en(n,t-1,5),en(n,i-4,4),r=0;r<i;r++)en(n,n.bl_tree[Uf[r]*2+1],3);Qu(n,n.dyn_ltree,e-1),Qu(n,n.dyn_dtree,t-1)},dx=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Yu;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return ju;for(t=32;t<$s;t++)if(n.dyn_ltree[t*2]!==0)return ju;return Yu};let eh=!1;const px=n=>{eh||(ux(),eh=!0),n.l_desc=new ul(n.dyn_ltree,Nf),n.d_desc=new ul(n.dyn_dtree,kf),n.bl_desc=new ul(n.bl_tree,Ff),n.bi_buf=0,n.bi_valid=0,Hf(n)},Vf=(n,e,t,i)=>{en(n,(tx<<1)+(i?1:0),3),Gf(n),Is(n,t),Is(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},mx=n=>{en(n,Rf<<1,3),zn(n,ac,ii),lx(n)},gx=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===ex&&(n.strm.data_type=dx(n)),kl(n,n.l_desc),kl(n,n.d_desc),a=hx(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?Vf(n,e,t,i):n.strategy===Qv||s===r?(en(n,(Rf<<1)+(i?1:0),3),Ku(n,ii,bs)):(en(n,(nx<<1)+(i?1:0),3),fx(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Ku(n,n.dyn_ltree,n.dyn_dtree)),Hf(n),i&&Gf(n)},_x=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Ds[t]+$s+1)*2]++,n.dyn_dtree[Of(e)*2]++),n.sym_next===n.sym_end);var vx=px,xx=Vf,yx=gx,Sx=_x,wx=mx,Mx={_tr_init:vx,_tr_stored_block:xx,_tr_flush_block:yx,_tr_tally:Sx,_tr_align:wx};const bx=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Us=bx;const Ex=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},Tx=new Uint32Array(Ex()),Ax=(n,e,t,i)=>{const r=Tx,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Dt=Ax,hr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ys={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Cx,_tr_stored_block:Fl,_tr_flush_block:Rx,_tr_tally:Li,_tr_align:Px}=Mx,{Z_NO_FLUSH:Di,Z_PARTIAL_FLUSH:Lx,Z_FULL_FLUSH:Dx,Z_FINISH:pn,Z_BLOCK:th,Z_OK:kt,Z_STREAM_END:nh,Z_STREAM_ERROR:Gn,Z_DATA_ERROR:Ix,Z_BUF_ERROR:fl,Z_DEFAULT_COMPRESSION:Ux,Z_FILTERED:Nx,Z_HUFFMAN_ONLY:Ea,Z_RLE:kx,Z_FIXED:Fx,Z_DEFAULT_STRATEGY:Ox,Z_UNKNOWN:Bx,Z_DEFLATED:po}=Ys,zx=9,Hx=15,Gx=8,Vx=29,Wx=256,Ol=Wx+1+Vx,Xx=30,qx=19,$x=2*Ol+1,Yx=15,tt=3,Ti=258,Vn=Ti+tt+1,jx=32,ts=42,lc=57,Bl=69,zl=73,Hl=91,Gl=103,ir=113,ws=666,Zt=1,as=2,fr=3,os=4,Zx=3,rr=(n,e)=>(n.msg=hr[e],e),ih=n=>n*2-(n>4?9:0),bi=n=>{let e=n.length;for(;--e>=0;)n[e]=0},Kx=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let cc=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask;const dr=(n,e)=>{let t;if(n.legacy_hash)t=n.ins_h=cc(n,n.ins_h,n.window[e+tt-1]);else{const r=n.window,s=r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;t=n.ins_h=Math.imul(s,66521)+66521>>>16&n.hash_mask}const i=n.prev[e&n.w_mask]=n.head[t];return n.head[t]=e,i},on=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},cn=(n,e)=>{Rx(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,on(n.strm)},nt=(n,e)=>{n.pending_buf[n.pending++]=e},_s=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Vl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Us(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Dt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},Wf=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Vn?n.strstart-(n.w_size-Vn):0,l=n.window,u=n.w_mask,f=n.prev,d=n.strstart+Ti;let h=l[i+a-1],g=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==h||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<d);if(s=Ti-(d-i),i=d-Ti,s>a){if(n.match_start=e,a=s,s>=o)break;h=l[i+a-1],g=l[i+a]}}while((e=f[e&u])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},ns=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Vn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),Kx(n),i+=e),n.strm.avail_in===0)break;if(t=Vl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.legacy_hash){if(n.lookahead+n.insert>=tt)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=cc(n,n.ins_h,n.window[r+1]);n.insert&&(dr(n,r),r++,n.insert--,!(n.lookahead+n.insert<tt)););}else if(n.lookahead+n.insert>tt)for(r=n.strstart-n.insert;n.insert&&(dr(n,r),r++,n.insert--,!(n.lookahead+n.insert<=tt)););}while(n.lookahead<Vn&&n.strm.avail_in!==0)},Xf=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==pn||e===Di||i!==r+n.strm.avail_in)))break;a=e===pn&&i===r+n.strm.avail_in?1:0,Fl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,on(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Vl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?os:e!==Di&&e!==pn&&n.strm.avail_in===0&&n.strstart===n.block_start?as:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Vl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===pn)&&e!==Di&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===pn&&n.strm.avail_in===0&&i===r?1:0,Fl(n,n.block_start,i,a),n.block_start+=i,on(n.strm)),a?fr:Zt)},dl=(n,e)=>{let t,i;for(;;){if(n.lookahead<Vn){if(ns(n),n.lookahead<Vn&&e===Di)return Zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=tt&&(t=dr(n,n.strstart)),t!==0&&n.strstart-t<=n.w_size-Vn&&(n.match_length=Wf(n,t)),n.match_length>=tt)if(i=Li(n,n.strstart-n.match_start,n.match_length-tt),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=tt){n.match_length--;do n.strstart++,t=dr(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=cc(n,n.ins_h,n.window[n.strstart+1]));else i=Li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=n.strstart<tt-1?n.strstart:tt-1,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as},Fr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Vn){if(ns(n),n.lookahead<Vn&&e===Di)return Zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=tt&&(t=dr(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=tt-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Vn&&(n.match_length=Wf(n,t),n.match_length<=5&&(n.strategy===Nx||n.match_length===tt&&n.strstart-n.match_start>4096)&&(n.match_length=tt-1)),n.prev_length>=tt&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-tt,i=Li(n,n.strstart-1-n.prev_match,n.prev_length-tt),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(t=dr(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=tt-1,n.strstart++,i&&(cn(n,!1),n.strm.avail_out===0))return Zt}else if(n.match_available){if(i=Li(n,0,n.window[n.strstart-1]),i&&cn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Zt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Li(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<tt-1?n.strstart:tt-1,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as},Jx=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=Ti){if(ns(n),n.lookahead<=Ti&&e===Di)return Zt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=tt&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+Ti;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=Ti-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=tt?(t=Li(n,1,n.match_length-tt),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=0,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as},Qx=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(ns(n),n.lookahead===0)){if(e===Di)return Zt;break}if(n.match_length=0,t=Li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=0,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as};function In(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const Ms=[new In(0,0,0,0,Xf),new In(4,4,8,4,dl),new In(4,5,16,8,dl),new In(4,6,32,32,dl),new In(4,4,16,16,Fr),new In(8,16,32,32,Fr),new In(8,16,128,128,Fr),new In(8,32,128,256,Fr),new In(32,128,258,1024,Fr),new In(32,258,258,4096,Fr)],e1=n=>{n.window_size=2*n.w_size,bi(n.head),n.max_lazy_match=Ms[n.level].max_lazy,n.good_match=Ms[n.level].good_length,n.nice_match=Ms[n.level].nice_length,n.max_chain_length=Ms[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=tt-1,n.match_available=0,n.ins_h=0};function t1(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=po,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array($x*2),this.dyn_dtree=new Uint16Array((2*Xx+1)*2),this.bl_tree=new Uint16Array((2*qx+1)*2),bi(this.dyn_ltree),bi(this.dyn_dtree),bi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(Yx+1),this.heap=new Uint16Array(2*Ol+1),bi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ol+1),bi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const js=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==ts&&e.status!==lc&&e.status!==Bl&&e.status!==zl&&e.status!==Hl&&e.status!==Gl&&e.status!==ir&&e.status!==ws?1:0},qf=n=>{if(js(n))return rr(n,Gn);n.total_in=n.total_out=0,n.data_type=Bx;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?lc:e.wrap?ts:ir,n.adler=e.wrap===2?0:1,e.last_flush=-2,Cx(e),kt},$f=n=>{const e=qf(n);return e===kt&&e1(n.state),e},n1=(n,e)=>js(n)||n.state.wrap!==2?Gn:(n.state.gzhead=e,kt),Yf=(n,e,t,i,r,s,a)=>{if(!n)return Gn;let o=1;if(e===Ux&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>zx||t!==po||i<8||i>15||e<0||e>9||s<0||s>Fx||i===8&&o!==1)return rr(n,Gn);i===8&&(i=9);const c=new t1;return n.state=c,c.strm=n,c.status=ts,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=a?1:0,c.hash_bits=r+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+tt-1)/tt),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<r+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=e,c.strategy=s,c.method=t,$f(n)},i1=(n,e)=>Yf(n,e,po,Hx,Gx,Ox),r1=(n,e)=>{if(js(n)||e>th||e<0)return n?rr(n,Gn):Gn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===ws&&e!==pn)return rr(n,n.avail_out===0?fl:Gn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(on(n),n.avail_out===0)return t.last_flush=-1,kt}else if(n.avail_in===0&&ih(e)<=ih(i)&&e!==pn)return rr(n,fl);if(t.status===ws&&n.avail_in!==0)return rr(n,fl);if(t.status===ts&&t.wrap===0&&(t.status=ir),t.status===ts){let r=po+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Ea||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=jx),r+=31-r%31,_s(t,r),t.strstart!==0&&(_s(t,n.adler>>>16),_s(t,n.adler&65535)),n.adler=1,t.status=ir,on(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===lc){if(n.adler=0,nt(t,31),nt(t,139),nt(t,8),t.gzhead)nt(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),nt(t,t.gzhead.time&255),nt(t,t.gzhead.time>>8&255),nt(t,t.gzhead.time>>16&255),nt(t,t.gzhead.time>>24&255),nt(t,t.level===9?2:t.strategy>=Ea||t.level<2?4:0),nt(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(nt(t,t.gzhead.extra.length&255),nt(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Dt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Bl;else if(nt(t,0),nt(t,0),nt(t,0),nt(t,0),nt(t,0),nt(t,t.level===9?2:t.strategy>=Ea||t.level<2?4:0),nt(t,Zx),t.status=ir,on(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===Bl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,on(n),t.pending!==0)return t.last_flush=-1,kt;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=zl}if(t.status===zl){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,kt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,nt(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Hl}if(t.status===Hl){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,kt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,nt(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r))}t.status=Gl}if(t.status===Gl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(on(n),t.pending!==0))return t.last_flush=-1,kt;nt(t,n.adler&255),nt(t,n.adler>>8&255),n.adler=0}if(t.status=ir,on(n),t.pending!==0)return t.last_flush=-1,kt}if(n.avail_in!==0||t.lookahead!==0||e!==Di&&t.status!==ws){let r=t.level===0?Xf(t,e):t.strategy===Ea?Qx(t,e):t.strategy===kx?Jx(t,e):Ms[t.level].func(t,e);if((r===fr||r===os)&&(t.status=ws),r===Zt||r===fr)return n.avail_out===0&&(t.last_flush=-1),kt;if(r===as&&(e===Lx?Px(t):e!==th&&(Fl(t,0,0,!1),e===Dx&&(bi(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),on(n),n.avail_out===0))return t.last_flush=-1,kt}return e!==pn?kt:t.wrap<=0?nh:(t.wrap===2?(nt(t,n.adler&255),nt(t,n.adler>>8&255),nt(t,n.adler>>16&255),nt(t,n.adler>>24&255),nt(t,n.total_in&255),nt(t,n.total_in>>8&255),nt(t,n.total_in>>16&255),nt(t,n.total_in>>24&255)):(_s(t,n.adler>>>16),_s(t,n.adler&65535)),on(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?kt:nh)},s1=n=>{if(js(n))return Gn;const e=n.state.status;return n.state=null,e===ir?rr(n,Ix):kt},a1=(n,e)=>{let t=e.length;if(js(n))return Gn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==ts||i.lookahead)return Gn;if(r===1&&(n.adler=Us(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(bi(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,ns(i);i.lookahead>=tt;){let c=i.strstart,l=i.lookahead-(tt-1);do dr(i,c),c++;while(--l);i.strstart=c,i.lookahead=tt-1,ns(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=tt-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,kt};var o1=i1,l1=Yf,c1=$f,u1=qf,h1=n1,f1=r1,d1=s1,p1=a1,m1="pako deflate (from Nodeca project)",Es={deflateInit:o1,deflateInit2:l1,deflateReset:c1,deflateResetKeep:u1,deflateSetHeader:h1,deflate:f1,deflateEnd:d1,deflateSetDictionary:p1,deflateInfo:m1};const g1=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var _1=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)g1(t,i)&&(n[i]=t[i])}}return n},v1=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},mo={assign:_1,flattenChunks:v1};let jf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{jf=!1}const Ns=new Uint8Array(256);for(let n=0;n<256;n++)Ns[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Ns[254]=Ns[255]=1;var x1=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const y1=(n,e)=>{if(e<65534&&n.subarray&&jf)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var S1=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=Ns[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return y1(s,r)},w1=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Ns[n[t]]>e?t:e},ks={string2buf:x1,buf2string:S1,utf8border:w1};function M1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Zf=M1;const Kf=Object.prototype.toString,{Z_NO_FLUSH:b1,Z_SYNC_FLUSH:E1,Z_FULL_FLUSH:T1,Z_FINISH:A1,Z_OK:Za,Z_STREAM_END:C1,Z_DEFAULT_COMPRESSION:R1,Z_DEFAULT_STRATEGY:P1,Z_DEFLATED:L1}=Ys,D1={level:R1,method:L1,chunkSize:16384,windowBits:15,memLevel:8,strategy:P1,legacyHash:!0};function Zs(n){this.options=mo.assign({},D1,n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Zf,this.strm.avail_out=0;let t=Es.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy,e.legacyHash);if(t!==Za)throw new Error(hr[t]);if(e.header&&Es.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=ks.string2buf(e.dictionary):Kf.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Es.deflateSetDictionary(this.strm,i),t!==Za)throw new Error(hr[t]);this._dict_set=!0}}Zs.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?A1:b1,typeof n=="string"?t.input=ks.string2buf(n):Kf.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===E1||s===T1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Es.deflate(t,s),r===C1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Es.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Za;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Zs.prototype.onData=function(n){this.chunks.push(n)};Zs.prototype.onEnd=function(n){n===Za&&(this.result=mo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function uc(n,e){const t=new Zs(e);if(t.push(n,!0),t.err)throw t.msg||hr[t.err];return t.result}function I1(n,e){return e=e||{},e.raw=!0,uc(n,e)}function U1(n,e){return e=e||{},e.gzip=!0,uc(n,e)}var N1=Zs,k1=uc,F1=I1,O1=U1,B1={Deflate:N1,deflate:k1,deflateRaw:F1,gzip:O1};const Ta=16209,z1=16191;var H1=function(e,t){let i,r,s,a,o,c,l,u,f,d,h,g,_,m,p,M,x,y,R,C,E,T,w,v;const D=e.state;i=e.next_in,w=e.input,r=i+(e.avail_in-5),s=e.next_out,v=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=D.dmax,l=D.wsize,u=D.whave,f=D.wnext,d=D.window,h=D.hold,g=D.bits,_=D.lencode,m=D.distcode,p=(1<<D.lenbits)-1,M=(1<<D.distbits)-1;e:do{g<15&&(h+=w[i++]<<g,g+=8,h+=w[i++]<<g,g+=8),x=_[h&p];t:for(;;){if(y=x>>>24,h>>>=y,g-=y,y=x>>>16&255,y===0)v[s++]=x&65535;else if(y&16){R=x&65535,y&=15,y&&(g<y&&(h+=w[i++]<<g,g+=8),R+=h&(1<<y)-1,h>>>=y,g-=y),g<15&&(h+=w[i++]<<g,g+=8,h+=w[i++]<<g,g+=8),x=m[h&M];n:for(;;){if(y=x>>>24,h>>>=y,g-=y,y=x>>>16&255,y&16){if(C=x&65535,y&=15,g<y&&(h+=w[i++]<<g,g+=8,g<y&&(h+=w[i++]<<g,g+=8)),C+=h&(1<<y)-1,C>c){e.msg="invalid distance too far back",D.mode=Ta;break e}if(h>>>=y,g-=y,y=s-a,C>y){if(y=C-y,y>u&&D.sane){e.msg="invalid distance too far back",D.mode=Ta;break e}if(E=0,T=d,f===0){if(E+=l-y,y<R){R-=y;do v[s++]=d[E++];while(--y);E=s-C,T=v}}else if(f<y){if(E+=l+f-y,y-=f,y<R){R-=y;do v[s++]=d[E++];while(--y);if(E=0,f<R){y=f,R-=y;do v[s++]=d[E++];while(--y);E=s-C,T=v}}}else if(E+=f-y,y<R){R-=y;do v[s++]=d[E++];while(--y);E=s-C,T=v}for(;R>2;)v[s++]=T[E++],v[s++]=T[E++],v[s++]=T[E++],R-=3;R&&(v[s++]=T[E++],R>1&&(v[s++]=T[E++]))}else{E=s-C;do v[s++]=v[E++],v[s++]=v[E++],v[s++]=v[E++],R-=3;while(R>2);R&&(v[s++]=v[E++],R>1&&(v[s++]=v[E++]))}}else if(y&64){e.msg="invalid distance code",D.mode=Ta;break e}else{x=m[(x&65535)+(h&(1<<y)-1)];continue n}break}}else if(y&64)if(y&32){D.mode=z1;break e}else{e.msg="invalid literal/length code",D.mode=Ta;break e}else{x=_[(x&65535)+(h&(1<<y)-1)];continue t}break}}while(i<r&&s<o);R=g>>3,i-=R,g-=R<<3,h&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),D.hold=h,D.bits=g};const Or=15,rh=852,sh=592,ah=0,pl=1,oh=2,G1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),V1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),W1=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),X1=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),q1=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,u=0,f=0,d=0,h=0,g=0,_=0,m=0,p=0,M=0,x,y,R,C,E,T=null,w;const v=new Uint16Array(Or+1),D=new Uint16Array(Or+1);let O=null,U,k,L;for(l=0;l<=Or;l++)v[l]=0;for(u=0;u<i;u++)v[e[t+u]]++;for(h=c,d=Or;d>=1&&v[d]===0;d--);if(h>d&&(h=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(f=1;f<d&&v[f]===0;f++);for(h<f&&(h=f),m=1,l=1;l<=Or;l++)if(m<<=1,m-=v[l],m<0)return-1;if(m>0&&(n===ah||d!==1))return-1;for(D[1]=0,l=1;l<Or;l++)D[l+1]=D[l]+v[l];for(u=0;u<i;u++)e[t+u]!==0&&(a[D[e[t+u]]++]=u);if(n===ah?(T=O=a,w=20):n===pl?(T=G1,O=V1,w=257):(T=W1,O=X1,w=0),M=0,u=0,l=f,E=s,g=h,_=0,R=-1,p=1<<h,C=p-1,n===pl&&p>rh||n===oh&&p>sh)return 1;for(;;){U=l-_,a[u]+1<w?(k=0,L=a[u]):a[u]>=w?(k=O[a[u]-w],L=T[a[u]-w]):(k=96,L=0),x=1<<l-_,y=1<<g,f=y;do y-=x,r[E+(M>>_)+y]=U<<24|k<<16|L|0;while(y!==0);for(x=1<<l-1;M&x;)x>>=1;if(x!==0?(M&=x-1,M+=x):M=0,u++,--v[l]===0){if(l===d)break;l=e[t+a[u]]}if(l>h&&(M&C)!==R){for(_===0&&(_=h),E+=f,g=l-_,m=1<<g;g+_<d&&(m-=v[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===pl&&p>rh||n===oh&&p>sh)return 1;R=M&C,r[R]=h<<24|g<<16|E-s|0}}return M!==0&&(r[E+M]=l-_<<24|64<<16|0),o.bits=h,0};var Ts=q1;const $1=0,Jf=1,Qf=2,{Z_FINISH:lh,Z_BLOCK:Y1,Z_TREES:Aa,Z_OK:pr,Z_STREAM_END:j1,Z_NEED_DICT:Z1,Z_STREAM_ERROR:_n,Z_DATA_ERROR:ed,Z_MEM_ERROR:td,Z_BUF_ERROR:K1,Z_DEFLATED:ch}=Ys,go=16180,uh=16181,hh=16182,fh=16183,dh=16184,ph=16185,mh=16186,gh=16187,_h=16188,vh=16189,Ka=16190,ei=16191,ml=16192,xh=16193,gl=16194,yh=16195,Sh=16196,wh=16197,Mh=16198,Ca=16199,Ra=16200,bh=16201,Eh=16202,Th=16203,Ah=16204,Ch=16205,_l=16206,Rh=16207,Ph=16208,gt=16209,nd=16210,id=16211,J1=852,Q1=592,ey=15,ty=ey,Lh=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function ny(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const _r=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<go||e.mode>id?1:0},rd=n=>{if(_r(n))return _n;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=go,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(J1),e.distcode=e.distdyn=new Int32Array(Q1),e.sane=1,e.back=-1,pr},sd=n=>{if(_r(n))return _n;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,rd(n)},ad=(n,e)=>{let t;if(_r(n))return _n;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?_n:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,sd(n))},od=(n,e)=>{if(!n)return _n;const t=new ny;n.state=t,t.strm=n,t.window=null,t.mode=go;const i=ad(n,e);return i!==pr&&(n.state=null),i},iy=n=>od(n,ty);let Dh=!0,vl,xl;const ry=n=>{if(Dh){vl=new Int32Array(512),xl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(Ts(Jf,n.lens,0,288,vl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;Ts(Qf,n.lens,0,32,xl,0,n.work,{bits:5}),Dh=!1}n.lencode=vl,n.lenbits=9,n.distcode=xl,n.distbits=5},ld=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.window=new Uint8Array(1<<s.wbits)),s.wsize===0&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},sy=(n,e)=>{let t,i,r,s,a,o,c,l,u,f,d,h,g,_,m=0,p,M,x,y,R,C,E,T;const w=new Uint8Array(4);let v,D;const O=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(_r(n)||!n.output||!n.input&&n.avail_in!==0)return _n;t=n.state,t.mode===ei&&(t.mode=ml),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,f=o,d=c,T=pr;e:for(;;)switch(t.mode){case go:if(t.wrap===0){t.mode=ml;break}for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,w[0]=l&255,w[1]=l>>>8&255,t.check=Dt(t.check,w,2,0),l=0,u=0,t.mode=uh;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=gt;break}if((l&15)!==ch){n.msg="unknown compression method",t.mode=gt;break}if(l>>>=4,u-=4,E=(l&15)+8,t.wbits===0&&(t.wbits=E),E>15||E>t.wbits){n.msg="invalid window size",t.mode=gt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?vh:ei,l=0,u=0;break;case uh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==ch){n.msg="unknown compression method",t.mode=gt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=gt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Dt(t.check,w,2,0)),l=0,u=0,t.mode=hh;case hh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,w[2]=l>>>16&255,w[3]=l>>>24&255,t.check=Dt(t.check,w,4,0)),l=0,u=0,t.mode=fh;case fh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Dt(t.check,w,2,0)),l=0,u=0,t.mode=dh;case dh:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Dt(t.check,w,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=ph;case ph:if(t.flags&1024&&(h=t.length,h>o&&(h=o),h&&(t.head&&(E=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+h),E)),t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,h,s)),o-=h,s+=h,t.length-=h),t.length))break e;t.length=0,t.mode=mh;case mh:if(t.flags&2048){if(o===0)break e;h=0;do E=i[s+h++],t.head&&E&&t.length<65536&&(t.head.name+=String.fromCharCode(E));while(E&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,h,s)),o-=h,s+=h,E)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=gh;case gh:if(t.flags&4096){if(o===0)break e;h=0;do E=i[s+h++],t.head&&E&&t.length<65536&&(t.head.comment+=String.fromCharCode(E));while(E&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,h,s)),o-=h,s+=h,E)break e}else t.head&&(t.head.comment=null);t.mode=_h;case _h:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=gt;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ei;break;case vh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}n.adler=t.check=Lh(l),l=0,u=0,t.mode=Ka;case Ka:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,Z1;n.adler=t.check=1,t.mode=ei;case ei:if(e===Y1||e===Aa)break e;case ml:if(t.last){l>>>=u&7,u-=u&7,t.mode=_l;break}for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=xh;break;case 1:if(ry(t),t.mode=Ca,e===Aa){l>>>=2,u-=2;break e}break;case 2:t.mode=Sh;break;case 3:n.msg="invalid block type",t.mode=gt}l>>>=2,u-=2;break;case xh:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=gt;break}if(t.length=l&65535,l=0,u=0,t.mode=gl,e===Aa)break e;case gl:t.mode=yh;case yh:if(h=t.length,h){if(h>o&&(h=o),h>c&&(h=c),h===0)break e;r.set(i.subarray(s,s+h),a),o-=h,s+=h,c-=h,a+=h,t.length-=h;break}t.mode=ei;break;case Sh:for(;u<14;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=gt;break}t.have=0,t.mode=wh;case wh:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.lens[O[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[O[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,v={bits:t.lenbits},T=Ts($1,t.lens,0,19,t.lencode,0,t.work,v),t.lenbits=v.bits,T){n.msg="invalid code lengths set",t.mode=gt;break}t.have=0,t.mode=Mh;case Mh:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,M=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(x<16)l>>>=p,u-=p,t.lens[t.have++]=x;else{if(x===16){for(D=p+2;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=gt;break}E=t.lens[t.have-1],h=3+(l&3),l>>>=2,u-=2}else if(x===17){for(D=p+3;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,h=3+(l&7),l>>>=3,u-=3}else{for(D=p+7;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,h=11+(l&127),l>>>=7,u-=7}if(t.have+h>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=gt;break}for(;h--;)t.lens[t.have++]=E}}if(t.mode===gt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=gt;break}if(t.lenbits=9,v={bits:t.lenbits},T=Ts(Jf,t.lens,0,t.nlen,t.lencode,0,t.work,v),t.lenbits=v.bits,T){n.msg="invalid literal/lengths set",t.mode=gt;break}if(t.distbits=6,t.distcode=t.distdyn,v={bits:t.distbits},T=Ts(Qf,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,v),t.distbits=v.bits,T){n.msg="invalid distances set",t.mode=gt;break}if(t.mode=Ca,e===Aa)break e;case Ca:t.mode=Ra;case Ra:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,H1(n,d),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===ei&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,M=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(M&&!(M&240)){for(y=p,R=M,C=x;m=t.lencode[C+((l&(1<<y+R)-1)>>y)],p=m>>>24,M=m>>>16&255,x=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,t.length=x,M===0){t.mode=Ch;break}if(M&32){t.back=-1,t.mode=ei;break}if(M&64){n.msg="invalid literal/length code",t.mode=gt;break}t.extra=M&15,t.mode=bh;case bh:if(t.extra){for(D=t.extra;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Eh;case Eh:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,M=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(!(M&240)){for(y=p,R=M,C=x;m=t.distcode[C+((l&(1<<y+R)-1)>>y)],p=m>>>24,M=m>>>16&255,x=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,M&64){n.msg="invalid distance code",t.mode=gt;break}t.offset=x,t.extra=M&15,t.mode=Th;case Th:if(t.extra){for(D=t.extra;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=gt;break}t.mode=Ah;case Ah:if(c===0)break e;if(h=d-c,t.offset>h){if(h=t.offset-h,h>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=gt;break}h>t.wnext?(h-=t.wnext,g=t.wsize-h):g=t.wnext-h,h>t.length&&(h=t.length),_=t.window}else _=r,g=a-t.offset,h=t.length;h>c&&(h=c),c-=h,t.length-=h;do r[a++]=_[g++];while(--h);t.length===0&&(t.mode=Ra);break;case Ch:if(c===0)break e;r[a++]=t.length,c--,t.mode=Ra;break;case _l:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[s++]<<u,u+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Dt(t.check,r,d,a-d):Us(t.check,r,d,a-d)),d=c,t.wrap&4&&(t.flags?l:Lh(l))!==t.check){n.msg="incorrect data check",t.mode=gt;break}l=0,u=0}t.mode=Rh;case Rh:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=gt;break}l=0,u=0}t.mode=Ph;case Ph:T=j1;break e;case gt:T=ed;break e;case nd:return td;case id:default:return _n}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<gt&&(t.mode<_l||e!==lh))&&ld(n,n.output,n.next_out,d-n.avail_out),f-=n.avail_in,d-=n.avail_out,n.total_in+=f,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Dt(t.check,r,d,n.next_out-d):Us(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ei?128:0)+(t.mode===Ca||t.mode===gl?256:0),(f===0&&d===0||e===lh)&&T===pr&&(T=K1),T},ay=n=>{if(_r(n))return _n;let e=n.state;return e.window&&(e.window=null),n.state=null,pr},oy=(n,e)=>{if(_r(n))return _n;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,pr):_n},ly=(n,e)=>{const t=e.length;let i,r,s;return _r(n)||(i=n.state,i.wrap!==0&&i.mode!==Ka)?_n:i.mode===Ka&&(r=1,r=Us(r,e,t,0),r!==i.check)?ed:(s=ld(n,e,t,t),s?(i.mode=nd,td):(i.havedict=1,pr))};var cy=sd,uy=ad,hy=rd,fy=iy,dy=od,py=sy,my=ay,gy=oy,_y=ly,vy="pako inflate (from Nodeca project)",kn={inflateReset:cy,inflateReset2:uy,inflateResetKeep:hy,inflateInit:fy,inflateInit2:dy,inflate:py,inflateEnd:my,inflateGetHeader:gy,inflateSetDictionary:_y,inflateInfo:vy};function xy(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var yy=xy;const cd=Object.prototype.toString,{Z_NO_FLUSH:Sy,Z_FINISH:Ih,Z_OK:jr,Z_STREAM_END:yl,Z_NEED_DICT:Sl,Z_STREAM_ERROR:wy,Z_DATA_ERROR:Uh,Z_MEM_ERROR:My,Z_BUF_ERROR:Nh}=Ys,by={chunkSize:1024*64,windowBits:15,to:""};function Ks(n){this.options=mo.assign({},by,n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Zf,this.strm.avail_out=0;let t=kn.inflateInit2(this.strm,e.windowBits);if(t!==jr)throw new Error(hr[t]);if(this.header=new yy,kn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=ks.string2buf(e.dictionary):cd.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=kn.inflateSetDictionary(this.strm,e.dictionary),t!==jr)))throw new Error(hr[t])}Ks.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Ih:Sy,cd.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=kn.inflate(t,a),s===Sl&&r&&(s=kn.inflateSetDictionary(t,r),s===jr?s=kn.inflate(t,a):s===Uh&&(s=Sl));t.avail_in>0&&s===yl&&t.state.wrap&2&&t.state.flags!==0&&t.input[t.next_in]!==0;)kn.inflateReset(t),s=kn.inflate(t,a);switch(s){case wy:case Uh:case Sl:case My:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===yl||a>0))if(this.options.to==="string"){let c=ks.utf8border(t.output,t.next_out),l=t.next_out-c,u=ks.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out)),t.avail_out=0,t.next_out=0;if(!((s===jr||s===Nh)&&o===0)){if(s===yl)return s=kn.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0){if(a===Ih)return s=kn.inflateEnd(this.strm),this.onEnd(s===jr?Nh:s),this.ended=!0,!1;break}}}return!0};Ks.prototype.onData=function(n){this.chunks.push(n)};Ks.prototype.onEnd=function(n){n===jr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=mo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function hc(n,e){const t=new Ks(e);if(t.push(n,!0),t.err)throw t.msg||hr[t.err];return t.result}function Ey(n,e){return e=e||{},e.raw=!0,hc(n,e)}var Ty=Ks,Ay=hc,Cy=Ey,Ry=hc,Py={Inflate:Ty,inflate:Ay,inflateRaw:Cy,ungzip:Ry};const{Deflate:Ly,deflate:Dy,deflateRaw:Iy,gzip:Uy}=B1,{Inflate:Ny,inflate:ky,inflateRaw:Fy,ungzip:Oy}=Py;var By=Ly,zy=Dy,Hy=Iy,Gy=Uy,Vy=Ny,Wy=ky,Xy=Fy,qy=Oy,$y=Ys,wl={Deflate:By,deflate:zy,deflateRaw:Hy,gzip:Gy,Inflate:Vy,inflate:Wy,inflateRaw:Xy,ungzip:qy,constants:$y},fe;(function(n){n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.ByteArray=7]="ByteArray",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.IntArray=11]="IntArray",n[n.LongArray=12]="LongArray"})(fe||(fe={}));const Cs=class Cs{static register(e,t){const i=t.create().getId();if(i!==e)throw new Error(`Registered factory ${fe[i]} does not match type ${fe[e]}`);Cs.FACTORIES.set(e,t)}isEnd(){return this.getId()===fe.End}isByte(){return this.getId()===fe.Byte}isShort(){return this.getId()===fe.Short}isInt(){return this.getId()===fe.Int}isLong(){return this.getId()===fe.Long}isFloat(){return this.getId()===fe.Float}isDouble(){return this.getId()===fe.Double}isByteArray(){return this.getId()===fe.ByteArray}isString(){return this.getId()===fe.String}isList(){return this.getId()===fe.List}isCompound(){return this.getId()===fe.Compound}isIntArray(){return this.getId()===fe.IntArray}isLongArray(){return this.getId()===fe.LongArray}isNumber(){return this.isByte()||this.isShort()||this.isInt()||this.isLong()||this.isFloat()||this.isDouble()}isArray(){return this.isByteArray()||this.isIntArray()||this.isLongArray()}isListOrArray(){return this.isList()||this.isArray()}getAsNumber(){return 0}getAsString(){return""}toJsonWithId(){return{type:this.getId(),value:this.toJson()}}static getFactory(e){const t=this.FACTORIES.get(e);if(!t)throw new Error(`Invalid tag id ${e}`);return t}static create(e){return this.getFactory(e).create()}static fromString(e){const t=typeof e=="string"?new $t(e):e;return this.getFactory(fe.Compound).fromString(t)}static fromJson(e,t=fe.Compound){return this.getFactory(t).fromJson(e)}static fromJsonWithId(e){const t=te.readObject(e)??{},i=te.readInt(t.type)??0;return Cs.fromJson(t.value??{},i)}static fromBytes(e,t=fe.Compound){return this.getFactory(t).fromBytes(e)}};P(Cs,"FACTORIES",new Map);let rt=Cs;const ni=class ni extends rt{constructor(t){super();P(this,"value");this.value=typeof t=="number"?t:t?1:0}getId(){return fe.Byte}equals(t){return t.isByte()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"b"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeByte(this.value)}static create(){return ni.ZERO}static fromJson(t){return new ni(te.readInt(t)??0)}static fromBytes(t){const i=t.readByte();return new ni(i)}};P(ni,"ZERO",new ni(0)),P(ni,"ONE",new ni(1));let Ii=ni;rt.register(fe.Byte,Ii);class Js extends rt{constructor(t){super();P(this,"items");this.items=t}getItems(){return this.items.slice(0)}getAsTuple(t,i){return[...Array(t)].map((r,s)=>i(this.items[s]))}get(t){if(t=Math.floor(t),!(t<0||t>=this.items.length))return this.items[t]}get length(){return this.items.length}map(t){return this.items.map(t)}filter(t){return this.items.filter(t)}forEach(t){this.items.forEach(t)}set(t,i){this.items[t]=i}add(t){this.items.push(t)}insert(t,i){this.items.splice(t,0,i)}delete(t){this.items.splice(t,1)}clear(){this.items=[]}}class Ui extends Js{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new Ii(t):t))}getId(){return fe.ByteArray}equals(e){return e.isByteArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return fe.Byte}toString(){return"[B;"+this.items.map(t=>t.getAsNumber().toFixed()+"B").join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length),e.writeBytes(this.items.map(t=>t.getAsNumber()))}static create(){return new Ui([])}static fromJson(e){const t=te.readArray(e,i=>te.readNumber(i)??0)??[];return new Ui(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative ByteArray length ${t}`);const i=e.readBytes(t);return new Ui(i)}}rt.register(fe.ByteArray,Ui);class ar extends rt{constructor(t){super();P(this,"value");this.value=t}getId(){return fe.Float}equals(t){return t.isFloat()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toString()+"f"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeFloat(this.value)}static create(){return new ar(0)}static fromJson(t){return new ar(te.readNumber(t)??0)}static fromBytes(t){const i=t.readFloat();return new ar(i)}}rt.register(fe.Float,ar);class gn extends rt{constructor(t){super();P(this,"value");this.value=t}getId(){return fe.Int}equals(t){return t.isInt()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeInt(this.value)}static create(){return new gn(0)}static fromJson(t){return new gn(te.readInt(t)??0)}static fromBytes(t){const i=t.readInt();return new gn(i)}}rt.register(fe.Int,gn);class Ni extends Js{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new gn(t):t))}getId(){return fe.IntArray}equals(e){return e.isIntArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return fe.Int}get length(){return this.items.length}toString(){return"[I;"+this.items.map(t=>t.getAsNumber().toFixed()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items)e.writeInt(t.getAsNumber())}static create(){return new Ni}static fromJson(e){const t=te.readArray(e,i=>te.readNumber(i)??0)??[];return new Ni(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative IntArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push(e.readInt());return new Ni(i)}}rt.register(fe.IntArray,Ni);class jt extends Js{constructor(t,i){super(t??[]);P(this,"type");this.type=this.items.length===0?fe.End:i??this.items[0].getId()}static make(t,i){return new jt(i.map(r=>new t(r)))}getId(){return fe.List}equals(t){return t.isList()&&this.type===t.type&&this.length===t.length&&this.items.every((i,r)=>i.equals(t.items[r]))}getType(){return this.type}getNumber(t){const i=this.get(t);return i!=null&&i.isNumber()?i.getAsNumber():0}getString(t){const i=this.get(t);return i!=null&&i.isString()?i.getAsString():""}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&r.getType()===i?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Tt.create()}set(t,i){this.updateType(i),super.set(t,i)}add(t){this.updateType(t),super.add(t)}insert(t,i){this.updateType(i),super.insert(t,i)}updateType(t){if(t.getId()!==fe.End){if(this.type===fe.End)this.type=t.getId();else if(this.type!==t.getId())throw new Error(`Trying to add tag of type ${fe[t.getId()]} to list of ${fe[this.type]}`)}}clear(){super.clear(),this.type=fe.End}toString(){return"["+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(t="  ",i=0){if(this.length===0)return"[]";const r=t.repeat(i),s=t.repeat(i+1);return`[
`+this.map(a=>s+a.toPrettyString(t,i+1)).join(`,
`)+`
`+r+"]"}toSimplifiedJson(){return this.map(t=>t.toSimplifiedJson())}toJson(){return{type:this.type,items:this.items.map(t=>t.toJson())}}toBytes(t){this.items.length===0?this.type=fe.End:this.type=this.items[0].getId(),t.writeByte(this.type),t.writeInt(this.items.length);for(const i of this.items)i.toBytes(t)}static create(){return new jt}static fromJson(t){const i=te.readObject(t)??{},r=te.readNumber(i.type)??fe.Compound,s=(te.readArray(i.items)??[]).flatMap(a=>a!==void 0?[rt.fromJson(a,r)]:[]);return new jt(s,r)}static fromBytes(t){const i=t.readByte(),r=t.readInt();if(r<0)throw new Error(`Negative List length ${r}`);if(i===fe.End&&r>0)throw new Error(`Missing type on ListTag but length is ${r}`);const s=[];for(let a=0;a<r;a+=1)s.push(rt.fromBytes(t,i));return new jt(s,i)}}rt.register(fe.List,jt);const Et=class Et extends rt{constructor(t){super();P(this,"value");this.value=Et.toPair(t)}static toPair(t){return Array.isArray(t)?t:Et.bigintToPair(t)}static bigintToPair(t){return Et.dataview.setBigInt64(0,t),[Et.dataview.getInt32(0),Et.dataview.getInt32(4)]}static pairToBigint(t){return Et.dataview.setInt32(0,Number(t[0])),Et.dataview.setInt32(4,Number(t[1])),Et.dataview.getBigInt64(0)}static pairToString(t){return Et.pairToBigint(t).toString()}static pairToNumber(t){return Number(Et.pairToBigint(t))}getId(){return fe.Long}equals(t){return t.isLong()&&this.value[0]===t.value[0]&&this.value[1]===t.value[1]}getAsNumber(){return Et.pairToNumber(this.value)}getAsPair(){return this.value}toBigInt(){return Et.pairToBigint(this.value)}toString(){return Et.pairToString(this.value)+"L"}toPrettyString(){return this.toString()}toSimplifiedJson(){return Et.pairToNumber(this.value)}toJson(){return this.value}toBytes(t){t.writeInt(this.value[0]),t.writeInt(this.value[1])}static create(){return new Et([0,0])}static fromJson(t){return new Et(Array.isArray(t)&&t.length===2?t.map(i=>typeof i=="number"?i:0):[0,0])}static fromBytes(t){const i=t.readInt(),r=t.readInt();return new Et([i,r])}};P(Et,"dataview",new DataView(new Uint8Array(8).buffer));let is=Et;rt.register(fe.Long,is);class ki extends Js{constructor(e){super(Array.from(e??[],t=>typeof t=="bigint"||Array.isArray(t)?new is(t):t))}getId(){return fe.LongArray}equals(e){return e.isLongArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return fe.Long}get length(){return this.items.length}toString(){return"[L;"+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsPair())}toJson(){return this.items.map(e=>e.getAsPair())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items){const[i,r]=t.getAsPair();e.writeInt(i),e.writeInt(r)}}static create(){return new ki}static fromJson(e){const t=te.readArray(e,i=>te.readPair(i,r=>te.readNumber(r)??0)??[0,0])??[];return new ki(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative LongArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push([e.readInt(),e.readInt()]);return new ki(i)}}rt.register(fe.LongArray,ki);class or extends rt{constructor(t){super();P(this,"value");this.value=t}getId(){return fe.Short}equals(t){return t.isShort()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"s"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeShort(this.value)}static create(){return new or(0)}static fromJson(t){return new or(typeof t=="number"?Math.floor(t):0)}static fromBytes(t){const i=t.readShort();return new or(i)}}rt.register(fe.Short,or);const Qi=class Qi extends rt{constructor(t){super();P(this,"value");this.value=t}getId(){return fe.String}equals(t){return t.isString()&&this.value===t.value}getAsString(){return this.value}toString(){return'"'+this.value.replace(/(\\|")/g,"\\$1")+'"'}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeString(this.value)}static create(){return Qi.EMPTY}static fromJson(t){return new Qi(typeof t=="string"?t:"")}static fromBytes(t){const i=t.readString();return new Qi(i)}};P(Qi,"EMPTY",new Qi(""));let Wn=Qi;rt.register(fe.String,Wn);var Ja;(function(n){const e=new RegExp("^[-+]?(?:[0-9]+[.]|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?$","i"),t=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?d$","i"),i=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?f$","i"),r=new RegExp("^[-+]?(?:0|[1-9][0-9]*)b$","i"),s=new RegExp("^[-+]?(?:0|[1-9][0-9]*)l$","i"),a=new RegExp("^[-+]?(?:0|[1-9][0-9]*)s$","i"),o=new RegExp("^[-+]?(?:0|[1-9][0-9]*)$","i");function c(h){if(h.skipWhitespace(),!h.canRead())throw h.createError("Expected value");const g=h.peek();if(g==="{")return l(h);if(g==="[")if(h.canRead(3)&&!$t.isQuotedStringStart(h.peek(1))&&h.peek(2)===";"){h.expect("[",!0);const _=h.cursor,m=h.read();if(h.skip(),h.skipWhitespace(),h.canRead()){if(m==="B")return f(h,Ui,fe.ByteArray,fe.Byte);if(m==="L")return f(h,ki,fe.LongArray,fe.Long);if(m==="I")return f(h,Ni,fe.IntArray,fe.Int);throw h.cursor=_,h.createError(`Invalid array type '${m}'`)}else throw h.createError("Expected value")}else return u(h);else{h.skipWhitespace();const _=h.cursor;if($t.isQuotedStringStart(h.peek()))return new Wn(h.readQuotedString());{const m=h.readUnquotedString();if(m.length===0)throw h.cursor=_,h.createError("Expected value");try{if(i.test(m)){const p=Number(m.substring(0,m.length-1));return new ar(p)}else if(r.test(m)){const p=Number(m.substring(0,m.length-1));return new Ii(Math.floor(p))}else if(s.test(m)){const p=BigInt(m.substring(0,m.length-1));return new is(p)}else if(a.test(m)){const p=Number(m.substring(0,m.length-1));return new or(Math.floor(p))}else if(o.test(m)){const p=Number(m);return new gn(Math.floor(p))}else if(t.test(m)){const p=Number(m.substring(0,m.length-1));return new Fi(p)}else if(e.test(m)){const p=Number(m);return new Fi(p)}else{if(m.toLowerCase()==="true")return Ii.ONE;if(m.toLowerCase()==="false")return Ii.ZERO}}catch{}return m.length===0?Wn.EMPTY:new Wn(m)}}}n.readTag=c;function l(h){h.expect("{",!0);const g=new Map;for(h.skipWhitespace();h.canRead()&&h.peek()!=="}";){const _=h.cursor;if(h.skipWhitespace(),!h.canRead())throw h.createError("Expected key");const m=h.readString();if(m.length===0)throw h.cursor=_,h.createError("Expected key");h.expect(":",!0);const p=c(h);if(g.set(m,p),!d(h))break;if(!h.canRead())throw h.createError("Expected key")}return h.expect("}",!0),new Tt(g)}function u(h){if(h.expect("[",!0),h.skipWhitespace(),!h.canRead())throw h.createError("Expected value");const g=[];let _=fe.End;for(;h.peek()!=="]";){const m=h.cursor,p=c(h),M=p.getId();if(_===fe.End)_=M;else if(M!==_)throw h.cursor=m,h.createError(`Can't insert ${fe[M]} into list of ${fe[_]}`);if(g.push(p),!d(h))break;if(!h.canRead())throw h.createError("Expected value")}return h.expect("]",!0),new jt(g,_)}function f(h,g,_,m){const p=[];for(;h.peek()!=="]";){const M=c(h);if(M.getId()!==m)throw h.createError(`Can't insert ${fe[M.getId()]} into ${fe[_]}`);if(p.push(M.isLong()?M.getAsPair():M.getAsNumber()),!d(h))break;if(!h.canRead())throw h.createError("Expected value")}return h.expect("]"),new g(p)}function d(h){return h.skipWhitespace(),h.canRead()&&h.peek()===","?(h.skip(),h.skipWhitespace(),!0):!1}})(Ja||(Ja={}));class Tt extends rt{constructor(t){super();P(this,"properties");this.properties=t??new Map}getId(){return fe.Compound}equals(t){return t.isCompound()&&this.size===t.size&&[...this.properties.entries()].every(([i,r])=>{const s=t.properties.get(i);return s!==void 0&&r.equals(s)})}has(t){return this.properties.has(t)}hasNumber(t){var i;return((i=this.get(t))==null?void 0:i.isNumber())??!1}hasString(t){var i;return((i=this.get(t))==null?void 0:i.isString())??!1}hasList(t,i,r){const s=this.get(t);return((s==null?void 0:s.isList())&&(i===void 0||s.getType()===i)&&(r===void 0||s.length===r))??!1}hasCompound(t){var i;return((i=this.get(t))==null?void 0:i.isCompound())??!1}get(t){return this.properties.get(t)}getString(t){var i;return((i=this.get(t))==null?void 0:i.getAsString())??""}getNumber(t){var i;return((i=this.get(t))==null?void 0:i.getAsNumber())??0}getBoolean(t){return this.getNumber(t)!==0}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&(i===void 0||r.getType()===i)?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Tt.create()}getByteArray(t){const i=this.get(t);return i!=null&&i.isByteArray()?i:Ui.create()}getIntArray(t){const i=this.get(t);return i!=null&&i.isIntArray()?i:Ni.create()}getLongArray(t){const i=this.get(t);return i!=null&&i.isLongArray()?i:ki.create()}keys(){return this.properties.keys()}get size(){return this.properties.size}map(t){return Object.fromEntries([...this.properties.entries()].map(([i,r])=>t(i,r,this)))}forEach(t){[...this.properties.entries()].forEach(([i,r])=>t(i,r,this))}set(t,i){return this.properties.set(t,i),this}delete(t){return this.properties.delete(t)}clear(){return this.properties.clear(),this}toString(){const t=[];for(const[i,r]of this.properties.entries()){const s=i.split("").some(a=>!$t.isAllowedInUnquotedString(a));t.push((s?JSON.stringify(i):i)+":"+r.toString())}return"{"+t.join(",")+"}"}toPrettyString(t="  ",i=0){if(this.size===0)return"{}";const r=t.repeat(i),s=t.repeat(i+1),a=[];for(const[o,c]of this.properties.entries()){const l=o.split("").some(u=>!$t.isAllowedInUnquotedString(u));a.push((l?JSON.stringify(o):o)+": "+c.toPrettyString(t,i+1))}return`{
`+a.map(o=>s+o).join(`,
`)+`
`+r+"}"}toSimplifiedJson(){return this.map((t,i)=>[t,i.toSimplifiedJson()])}toJson(){return this.map((t,i)=>[t,{type:i.getId(),value:i.toJson()}])}toBytes(t){for(const[i,r]of this.properties.entries()){const s=r.getId();t.writeByte(s),t.writeString(i),r.toBytes(t)}t.writeByte(fe.End)}static create(){return new Tt}static fromString(t){return Ja.readTag(t)}static fromJson(t){const i=te.readMap(t,r=>{const{type:s,value:a}=te.readObject(r)??{},o=te.readNumber(s);return rt.fromJson(a??{},o)});return new Tt(new Map(Object.entries(i)))}static fromBytes(t){const i=new Map;for(;;){const r=t.readByte();if(r===fe.End)break;const s=t.readString(),a=rt.fromBytes(t,r);i.set(s,a)}return new Tt(i)}}rt.register(fe.Compound,Tt);const Un=class Un{constructor(e,t,i,r,s){P(this,"name");P(this,"root");P(this,"compression");P(this,"littleEndian");P(this,"bedrockHeader");this.name=e,this.root=t,this.compression=i,this.littleEndian=r,this.bedrockHeader=s}writeNamedTag(e){e.writeByte(fe.Compound),e.writeString(this.name),this.root.toBytes(e)}write(){const e=this.littleEndian===!0||this.bedrockHeader!==void 0,t=new Cf({littleEndian:e,offset:this.bedrockHeader!==void 0?8:0});if(this.writeNamedTag(t),this.bedrockHeader!==void 0){const r=t.offset;t.offset=0,t.writeInt(this.bedrockHeader),t.writeInt(r-8),t.offset=r}const i=t.getData();return this.compression==="gzip"?wl.gzip(i):this.compression==="zlib"?wl.deflate(i):i}static readNamedTag(e){if(e.readByte()!==fe.Compound)throw new Error("Top tag should be a compound");return{name:e.readString(),root:Tt.fromBytes(e)}}static create(e={}){const t=e.name??Un.DEFAULT_NAME,i=Tt.create(),r=e.compression??"none",s=e.bedrockHeader===!0?Un.DEFAULT_BEDROCK_HEADER:typeof e.bedrockHeader=="number"?e.bedrockHeader:void 0,a=e.littleEndian??s!==void 0;return new Un(t,i,r,a,s)}static read(e,t={}){const i=typeof t.bedrockHeader=="number"?t.bedrockHeader:t.bedrockHeader?Yv(e):void 0,r=t.compression==="gzip"||!i&&t.compression===void 0&&qv(e),s=t.compression==="zlib"||!i&&t.compression===void 0&&$v(e),a=s||r?wl.inflate(e):e,o=t.littleEndian||i!==void 0,c=r?"gzip":s?"zlib":"none",l=new Af(a,{littleEndian:o,offset:i!==void 0?8:0}),{name:u,root:f}=Un.readNamedTag(l);return new Un(t.name??u,f,c,o,i)}toJson(){return{name:this.name,root:this.root.toJson(),compression:this.compression,littleEndian:this.littleEndian,bedrockHeader:this.bedrockHeader??null}}static fromJson(e){const t=te.readObject(e)??{},i=te.readString(t.name)??"",r=Tt.fromJson(t.root??{}),s=te.readString(t.compression)??"none",a=te.readBoolean(t.littleEndian)??!1,o=te.readNumber(t.bedrockHeader);return new Un(i,r,s,a,o)}};P(Un,"DEFAULT_NAME",""),P(Un,"DEFAULT_BEDROCK_HEADER",4);let Xn=Un;class ai{constructor(e,t,i,r,s){P(this,"x");P(this,"z");P(this,"compression");P(this,"timestamp");P(this,"raw");P(this,"file");P(this,"dirty");this.x=e,this.z=t,this.compression=i,this.timestamp=r,this.raw=s,this.dirty=!1}getCompression(){switch(this.compression){case 1:return"gzip";case 2:return"zlib";case 3:return"none";default:throw new Error(`Invalid compression mode ${this.compression}`)}}setCompression(e){switch(e){case"gzip":this.compression=1;break;case"zlib":this.compression=2;break;case"none":this.compression=3;break;default:throw new Error(`Invalid compression mode ${e}`)}}getFile(){return this.file===void 0&&(this.file=Xn.read(this.raw,{compression:this.getCompression()})),this.file}getRoot(){return this.getFile().root}setRoot(e){this.file===void 0&&(this.file=Xn.create({compression:this.getCompression()})),this.file.root=e,this.markDirty()}markDirty(){this.dirty=!0}getRaw(){if(this.file===void 0||this.dirty===!1)return this.raw;this.file.compression=this.getCompression();const e=this.file.write();return this.raw=e,this.dirty=!1,e}toJson(){return{x:this.x,z:this.z,compression:this.compression,timestamp:this.timestamp,size:this.raw.byteLength}}toRef(e){return new ai.Ref(this.x,this.z,this.compression,this.timestamp,this.raw.byteLength,e)}static create(e,t,i,r){const s=new ai(e,t,0,r??0,i.write());return s.setCompression(i.compression),s}static fromJson(e,t){const i=te.readObject(e)??{},r=te.readInt(i.x)??0,s=te.readInt(i.z)??0,a=te.readNumber(i.compression)??2,o=te.readInt(i.timestamp)??0,c=te.readInt(i.size)??0;return new ai.Ref(r,s,a,o,c,t)}}(function(n){class e{constructor(i,r,s,a,o,c){P(this,"x");P(this,"z");P(this,"compression");P(this,"timestamp");P(this,"size");P(this,"resolver");P(this,"file");this.x=i,this.z=r,this.compression=s,this.timestamp=a,this.size=o,this.resolver=c}getFile(){if(this.file instanceof Xn)return this.file}getRoot(){if(this.file instanceof Xn)return this.file.root}async getFileAsync(){return this.file?this.file:(this.file=(async()=>{const i=await this.resolver(this.x,this.z);return this.file=i,i})(),this.file)}async getRootAsync(){return(await this.getFileAsync()).root}isResolved(){return this.file instanceof Xn}}n.Ref=e})(ai||(ai={}));class ud{constructor(e){P(this,"chunks");this.chunks=Array(32*32).fill(void 0);for(const t of e){const i=zi.getIndex(t.x,t.z);this.chunks[i]=t}}getChunkPositions(){return this.chunks.flatMap(e=>e?[[e.x,e.z]]:[])}getChunk(e){if(!(e<0||e>=32*32))return this.chunks[e]}findChunk(e,t){return this.getChunk(zi.getIndex(e,t))}getFirstChunk(){return this.chunks.filter(e=>e!==void 0)[0]}filter(e){return this.chunks.filter(t=>t!==void 0&&e(t))}map(e){return this.chunks.flatMap(t=>t!==void 0?[e(t)]:[])}}class zi extends ud{constructor(e){super(e)}write(){let e=0;for(const s of this.chunks)s!==void 0&&(e+=Math.ceil(s.getRaw().length/4096));const t=new Uint8Array(8192+e*4096),i=new DataView(t.buffer);let r=2;for(const s of this.chunks){if(s===void 0)continue;const a=s.getRaw(),o=4*((s.x&31)+(s.z&31)*32),c=Math.ceil(a.length/4096);i.setInt8(o,r>>16),i.setInt16(o+1,r&65535),i.setInt8(o+3,c),i.setInt32(o+4096,s.timestamp);const l=r*4096;i.setInt32(l,a.length+1),i.setInt8(l+4,s.compression),t.set(a,l+5),r+=c}return t}static read(e){const t=[];for(let i=0;i<32;i+=1)for(let r=0;r<32;r+=1){const s=4*((i&31)+(r&31)*32);if(e[s+3]===0)continue;const o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],c=(e[s+4096]<<24)+(e[s+4097]<<16)+(e[s+4098]<<8)+e[s+4099],l=o*4096,u=(e[l]<<24)+(e[l+1]<<16)+(e[l+2]<<8)+e[l+3],f=e[l+4],d=e.slice(l+5,l+4+u);t.push(new ai(i,r,f,c,d))}return new zi(t)}static getIndex(e,t){return(e&31)+(t&31)*32}toJson(){return{chunks:this.map(e=>e.toJson())}}static fromJson(e,t){const i=te.readObject(e)??{},s=(te.readArray(i.chunks)??[]).flatMap(a=>a!==void 0?[ai.fromJson(a,t)]:[]);return new zi.Ref(s)}}(function(n){class e extends ud{}n.Ref=e})(zi||(zi={}));class Fi extends rt{constructor(t){super();P(this,"value");this.value=t}getId(){return fe.Double}equals(t){return t.isDouble()&&this.value===t.value}getAsNumber(){return this.value}toString(){return Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeDouble(this.value)}static create(){return new Fi(0)}static fromJson(t){return new Fi(te.readNumber(t)??0)}static fromBytes(t){const i=t.readDouble();return new Fi(i)}}rt.register(fe.Double,Fi);const er=class er extends rt{constructor(){super()}getId(){return fe.End}equals(e){return e.isEnd()}toString(){return"END"}toPrettyString(){return this.toString()}toSimplifiedJson(){return null}toJson(){return null}toBytes(){}static create(){return er.INSTANCE}static fromJson(){return er.INSTANCE}static fromBytes(){return er.INSTANCE}};P(er,"INSTANCE",new er);let Qa=er;rt.register(fe.End,Qa);var Ne;(function(n){n.UP="up",n.DOWN="down",n.NORTH="north",n.EAST="east",n.SOUTH="south",n.WEST="west"})(Ne||(Ne={}));const Yy={[Ne.UP]:[0,1,0],[Ne.DOWN]:[0,-1,0],[Ne.NORTH]:[0,0,-1],[Ne.EAST]:[1,0,0],[Ne.SOUTH]:[0,0,1],[Ne.WEST]:[-1,0,0]};(function(n){n.ALL=[n.UP,n.DOWN,n.NORTH,n.EAST,n.SOUTH,n.WEST];function e(t){return Yy[t]}n.normal=e})(Ne||(Ne={}));var At;(function(n){function e(f,d,h){return[f,d,h]}n.create=e,n.ZERO=n.create(0,0,0);function t(f,d,h,g){return[f[0]+d,f[1]+h,f[2]+g]}n.offset=t;function i(f,d){return[f[0]-d[0],f[1]-d[1],f[2]-d[2]]}n.subtract=i;function r(f,d){return[f[0]+d[0],f[1]+d[1],f[2]+d[2]]}n.add=r;function s(f,d){return n.offset(f,...Ne.normal(d))}n.towards=s;function a(f,d){return f===d?!0:f[0]===d[0]&&f[1]===d[1]&&f[2]===d[2]}n.equals=a;function o(f){return f[0]*f[0]+f[1]*f[1]+f[2]*f[2]}n.magnitude=o;function c(f){return new jt(f.map(d=>new gn(d)))}n.toNbt=c;function l(f){return f.getAsTuple(3,d=>d!=null&&d.isInt()?d.getAsNumber():0)}n.fromNbt=l;function u(f){const d=te.readArray(f,h=>te.readInt(h)??0)??[0,0,0];return e(d[0],d[1],d[2])}n.fromJson=u})(At||(At={}));const Mn=class Mn{constructor(e,t){P(this,"namespace");P(this,"path");this.namespace=e,this.path=t}is(e){return this.equals(Mn.parse(e))}equals(e){return this===e?!0:e instanceof Mn?this.namespace===e.namespace&&this.path===e.path:!1}toString(){return this.namespace+Mn.SEPARATOR+this.path}withPrefix(e){return new Mn(this.namespace,e+this.path)}static create(e){return new Mn(this.DEFAULT_NAMESPACE,e)}static parse(e){const t=e.indexOf(this.SEPARATOR);if(t>=0){const i=t>=1?e.substring(0,t):this.DEFAULT_NAMESPACE,r=e.substring(t+1);return new Mn(i,r)}return new Mn(this.DEFAULT_NAMESPACE,e)}};P(Mn,"DEFAULT_NAMESPACE","minecraft"),P(Mn,"SEPARATOR",":");let ee=Mn;var xt;let Ai=(xt=class{constructor(e,t={}){P(this,"properties");P(this,"name");this.properties=t,this.name=typeof e=="string"?ee.parse(e):e}getName(){return this.name}getProperties(){return this.properties}getProperty(e){return this.properties[e]}isFluid(){return this.is(xt.WATER)||this.is(xt.LAVA)}isWaterlogged(){return this.is(xt.WATER)||this.is(xt.LAVA)||this.is("bubble_column")||this.is("kelp")||this.is("kelp_plant")||this.is("seagrass")||this.is("tall_seagrass")||this.properties.waterlogged==="true"}equals(e){if(!this.name.equals(e.name))return!1;const t=Object.keys(this.properties);return t.length!==Object.keys(e.properties).length?!1:t.every(i=>e.properties[i]===this.properties[i])}is(e){return typeof e=="string"?this.name.equals(ee.parse(e)):e instanceof ee?this.name.equals(e):this.name.equals(e.name)}toString(){return Object.keys(this.properties).length===0?this.name.toString():`${this.name.toString()}[${Object.entries(this.properties).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>e+"="+t).join(",")}]`}toNbt(){const e=new Tt().set("Name",new Wn(this.name.toString())),t=Object.entries(this.properties).sort(([i],[r])=>i.localeCompare(r));return t.length>0&&e.set("Properties",new Tt(new Map(t.map(([i,r])=>[i,new Wn(r)])))),e}static parse(e){const t=e.indexOf("[");if(t===-1)return new xt(e);{const i=e.substring(0,t),r=e.substring(t+1,e.length-1).split(","),s=Object.fromEntries(r.map(a=>a.split("=")));return new xt(i,s)}}static fromNbt(e){const t=ee.parse(e.getString("Name")),i=e.getCompound("Properties").map((r,s)=>[r,s.getAsString()]);return new xt(t,i)}static fromJson(e){const t=te.readObject(e)??{},i=ee.parse(te.readString(t.Name)??xt.STONE.name.toString()),r=te.readMap(t.Properties,s=>te.readString(s)??"");return new xt(i,r)}},P(xt,"AIR",new xt(ee.create("air"))),P(xt,"STONE",new xt(ee.create("stone"))),P(xt,"WATER",new xt(ee.create("water"),{level:"0"})),P(xt,"LAVA",new xt(ee.create("lava"),{level:"0"})),xt);const lo=class lo{constructor(e,t){P(this,"size");P(this,"defaultValue");P(this,"storage");P(this,"palette");this.size=e,this.defaultValue=t,this.storage=Array(e).fill(0),this.palette=[t]}index(e,t,i){if(!this.isLocalCoordinate(e)||!this.isLocalCoordinate(t)||!this.isLocalCoordinate(i))throw new Error(`Coordinates ${e},${t},${i} are outside paletted container bounds 0..15`);return(e<<8)+(t<<4)+i}isLocalCoordinate(e){return Number.isInteger(e)&&e>=0&&e<lo.WIDTH}get(e,t,i){const r=this.storage[this.index(e,t,i)];return this.palette[r]}set(e,t,i,r){let s=this.palette.findIndex(a=>a.equals(r));s===-1&&(s=this.palette.length,this.palette.push(r)),this.storage[this.index(e,t,i)]=s}};P(lo,"WIDTH",16);let eo=lo;const yi=class yi{constructor(e){P(this,"minY");P(this,"states");this.minY=e,this.states=new eo(yi.SIZE,Ai.AIR)}get minBlockY(){return this.minY<<4}getBlockState(e,t,i){return this.states.get(e,t,i)}setBlockState(e,t,i,r){this.states.set(e,t,i,r)}};P(yi,"WIDTH",16),P(yi,"SIZE",yi.WIDTH*yi.WIDTH*yi.WIDTH);let Wl=yi;var Xl;(function(n){function e(u,f){return[u,f]}n.create=e;function t(u){return[u[0]>>4,u[2]>>4]}n.fromBlockPos=t;function i(u){return[Number(u)&4294967295,Number(u>>BigInt(32))]}n.fromLong=i;function r(u){return s(u[0],u[1])}n.toLong=r;function s(u,f){return BigInt(u&4294967295)|BigInt(f&4294967295)<<BigInt(32)}n.asLong=s;function a(u){return u[0]<<4}n.minBlockX=a;function o(u){return u[1]<<4}n.minBlockZ=o;function c(u){return(u[0]<<4)+15}n.maxBlockX=c;function l(u){return(u[1]<<4)+15}n.maxBlockZ=l})(Xl||(Xl={}));const hd=new Map([["minecraft:speed",3402751],["minecraft:slowness",9154528],["minecraft:haste",14270531],["minecraft:mining_fatigue",4866583],["minecraft:strength",16762624],["minecraft:instant_health",16262179],["minecraft:instant_damage",11101546],["minecraft:jump_boost",16646020],["minecraft:nausea",5578058],["minecraft:regeneration",13458603],["minecraft:resistance",9520880],["minecraft:fire_resistance",16750848],["minecraft:water_breathing",10017472],["minecraft:invisibility",16185078],["minecraft:blindness",2039587],["minecraft:night_vision",12779366],["minecraft:hunger",5797459],["minecraft:weakness",4738376],["minecraft:poison",8889187],["minecraft:wither",7561558],["minecraft:health_boost",16284963],["minecraft:absorption",2445989],["minecraft:saturation",16262179],["minecraft:glowing",9740385],["minecraft:levitation",13565951],["minecraft:luck",5882118],["minecraft:unluck",12624973],["minecraft:slow_falling",15978425],["minecraft:conduit_power",1950417],["minecraft:dolphins_grace",8954814],["minecraft:bad_omen",745784],["minecraft:hero_of_the_village",4521796],["minecraft:darkness",2696993],["minecraft:trial_omen",1484454],["minecraft:raid_omen",14565464],["minecraft:wind_charged",12438015],["minecraft:weaving",7891290],["minecraft:oozing",10092451],["minecraft:infested",9214860]]);var to;(function(n){function e(t){return{effect:ee.parse(t.getString("id")),duration:t.getNumber("duration"),amplifier:t.getNumber("amplifier")}}n.fromNbt=e})(to||(to={}));const fd=new Map([["minecraft:empty",[]],["minecraft:water",[]],["minecraft:mundane",[]],["minecraft:thick",[]],["minecraft:awkward",[]],["minecraft:night_vision",[{effect:ee.create("night_vision"),duration:3600,amplifier:0}]],["minecraft:long_night_vision",[{effect:ee.create("night_vision"),duration:9600,amplifier:0}]],["minecraft:invisibility",[{effect:ee.create("invisibility"),duration:3600,amplifier:0}]],["minecraft:long_invisibility",[{effect:ee.create("invisibility"),duration:9600,amplifier:0}]],["minecraft:leaping",[{effect:ee.create("jump_boost"),duration:3600,amplifier:0}]],["minecraft:long_leaping",[{effect:ee.create("jump_boost"),duration:9600,amplifier:0}]],["minecraft:strong_leaping",[{effect:ee.create("jump_boost"),duration:1800,amplifier:1}]],["minecraft:fire_resistance",[{effect:ee.create("fire_resistance"),duration:3600,amplifier:0}]],["minecraft:long_fire_resistance",[{effect:ee.create("fire_resistance"),duration:9600,amplifier:0}]],["minecraft:swiftness",[{effect:ee.create("speed"),duration:3600,amplifier:0}]],["minecraft:long_swiftness",[{effect:ee.create("speed"),duration:9600,amplifier:0}]],["minecraft:strong_swiftness",[{effect:ee.create("speed"),duration:1800,amplifier:1}]],["minecraft:slowness",[{effect:ee.create("slowness"),duration:1800,amplifier:0}]],["minecraft:long_slowness",[{effect:ee.create("slowness"),duration:4800,amplifier:0}]],["minecraft:strong_slowness",[{effect:ee.create("slowness"),duration:400,amplifier:3}]],["minecraft:turtle_master",[{effect:ee.create("slowness"),duration:400,amplifier:3},{effect:ee.create("resistance"),duration:400,amplifier:2}]],["minecraft:long_turtle_master",[{effect:ee.create("slowness"),duration:800,amplifier:3},{effect:ee.create("resistance"),duration:800,amplifier:2}]],["minecraft:strong_turtle_master",[{effect:ee.create("slowness"),duration:400,amplifier:5},{effect:ee.create("resistance"),duration:400,amplifier:3}]],["minecraft:water_breathing",[{effect:ee.create("water_breathing"),duration:3600,amplifier:0}]],["minecraft:long_water_breathing",[{effect:ee.create("water_breathing"),duration:9600,amplifier:0}]],["minecraft:healing",[{effect:ee.create("instant_health"),duration:1,amplifier:0}]],["minecraft:strong_healing",[{effect:ee.create("instant_health"),duration:1,amplifier:1}]],["minecraft:harming",[{effect:ee.create("instant_damage"),duration:1,amplifier:0}]],["minecraft:strong_harming",[{effect:ee.create("instant_damage"),duration:1,amplifier:1}]],["minecraft:poison",[{effect:ee.create("poison"),duration:900,amplifier:0}]],["minecraft:long_poison",[{effect:ee.create("poison"),duration:1800,amplifier:0}]],["minecraft:strong_poison",[{effect:ee.create("poison"),duration:432,amplifier:1}]],["minecraft:regeneration",[{effect:ee.create("regeneration"),duration:900,amplifier:0}]],["minecraft:long_regeneration",[{effect:ee.create("regeneration"),duration:1800,amplifier:0}]],["minecraft:strong_regeneration",[{effect:ee.create("regeneration"),duration:450,amplifier:1}]],["minecraft:strength",[{effect:ee.create("strength"),duration:3600,amplifier:0}]],["minecraft:long_strength",[{effect:ee.create("strength"),duration:9600,amplifier:0}]],["minecraft:strong_strength",[{effect:ee.create("strength"),duration:1800,amplifier:1}]],["minecraft:weakness",[{effect:ee.create("weakness"),duration:1800,amplifier:0}]],["minecraft:long_weakness",[{effect:ee.create("weakness"),duration:4800,amplifier:0}]],["minecraft:luck",[{effect:ee.create("luck"),duration:6e3,amplifier:0}]],["minecraft:slow_falling",[{effect:ee.create("slow_falling"),duration:1800,amplifier:0}]],["minecraft:long_slow_falling",[{effect:ee.create("slow_falling"),duration:4800,amplifier:0}]],["minecraft:wind_charged",[{effect:ee.create("wind_charged"),duration:3600,amplifier:0}]],["minecraft:weaving",[{effect:ee.create("weaving"),duration:3600,amplifier:0}]],["minecraft:oozing",[{effect:ee.create("oozing"),duration:3600,amplifier:0}]],["minecraft:infested",[{effect:ee.create("infested"),duration:3600,amplifier:0}]]]);var Fs;(function(n){function e(s){const a={};return s.isString()?a.potion=ee.parse(s.getAsString()):s.isCompound()&&(s.hasString("potion")&&(a.potion=ee.parse(s.getString("potion"))),s.hasNumber("custom_color")&&(a.customColor=s.getNumber("custom_color")),s.hasList("custom_effects")&&(a.customEffects=s.getList("custom_effects",fe.Compound).map(to.fromNbt))),a}n.fromNbt=e;function t(s){if(s.customColor)return $e.intToRgb(s.customColor);const a=i(s);return r(a)}n.getColor=t;function i(s){const a=[];return s.potion&&a.push(...fd.get(s.potion.toString())??[]),s.customEffects&&a.push(...s.customEffects),a}n.getAllEffects=i;function r(s){let[a,o,c]=[0,0,0],l=0;for(const u of s){const f=hd.get(u.effect.toString());if(f===void 0)continue;const d=$e.intToRgb(f),h=u.amplifier+1;a+=h*d[0],o+=h*d[1],c+=h*d[2],l+=h}return l===0?$e.intToRgb(-13083194):(a=a/l,o=o/l,c=c/l,[a,o,c])}})(Fs||(Fs={}));var no;(function(n){function e(r,s){return a=>typeof a=="string"?i(r,ee.parse(a)):t(s(a))}n.parser=e;function t(r,s){return{value:()=>r,key:()=>s}}n.direct=t;function i(r,s,a=!0){return a?{value:()=>r.getOrThrow(s),key:()=>s}:{value:()=>r.get(s),key:()=>s}}n.reference=i})(no||(no={}));class ri{constructor(e,t,i=new Map){P(this,"id");P(this,"count");P(this,"components");this.id=e,this.count=t,this.components=i}getComponent(e,t){var r;if(typeof e=="string"&&(e=ee.parse(e)),this.components.has("!"+e.toString()))return;const i=this.components.get(e.toString());if(i)return i;if(t)return(r=t.getItemComponents(this.id))==null?void 0:r.get(e.toString())}hasComponent(e,t){var i;return typeof e=="string"&&(e=ee.parse(e)),this.components.has("!"+e.toString())?!1:this.components.has(e.toString())?!0:t?(i=t.getItemComponents(this.id))==null?void 0:i.has(e.toString()):!1}clone(){const e=new Map(this.components);return new ri(this.id,this.count,e)}is(e){return typeof e=="string"?this.id.equals(ee.parse(e)):e instanceof ee?this.id.equals(e):this.id.equals(e.id)}equals(e){return this===e?!0:e instanceof ri?this.count===e.count&&this.isSameItemSameComponents(e):!1}isSameItemSameComponents(e){if(!this.id.equals(e.id)||this.components.size!==e.components.size)return!1;for(const[t,i]of this.components){const r=e.components.get(t);if(i.toString()!==(r==null?void 0:r.toString()))return!1}return!0}toString(){let e=this.id.toString();return this.components.size>0&&(e+=`[${[...this.components.entries()].map(([t,i])=>t.startsWith("!")?t:`${t}=${i.toString()}`).join(",")}]`),this.count>1&&(e+=` ${this.count}`),e}static fromString(e){const t=new $t(e);t.skipWhitespace();const i=t.cursor;for(;t.canRead()&&t.peek()!=="["&&!$t.isWhitespace(t.peek());)t.skip();const r=ee.parse(t.getRead(i)),s=new Map;t.skipWhitespace(),t.canRead()&&t.peek()==="["&&ri.readComponents(t,s),t.skipWhitespace();const a=t.canRead()?t.readInt():1;if(t.skipWhitespace(),t.canRead())throw t.createError("Unexpected trailing data");return new ri(r,a,s)}static readComponents(e,t){if(e.expect("["),e.skipWhitespace(),e.canRead()&&e.peek()==="]"){e.skip();return}do{if(e.peek()==="!"){e.skip(),e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="]"&&e.peek()!==",";)e.skip();t.set("!"+ee.parse(e.getRead(i).trim()).toString(),new Tt)}else{e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="=";)e.skip();const r=ee.parse(e.getRead(i).trim()).toString();if(!e.canRead())break;e.skip(),e.skipWhitespace();const s=Ja.readTag(e);t.set(r,s)}if(e.skipWhitespace(),!e.canRead())break;if(e.peek()==="]"){e.skip();return}if(e.peek()!==",")throw new Error("Expected , or ]");e.skip()}while(e.canRead());throw new Error("Missing closing ]")}toNbt(){const e=new Tt().set("id",new Wn(this.id.toString()));return this.count>1&&e.set("count",new gn(this.count)),this.components.size>0&&e.set("components",new Tt(this.components)),e}static fromNbt(e){const t=ee.parse(e.getString("id")),i=e.hasNumber("count")?e.getNumber("count"):1,r=new Map(Object.entries(e.getCompound("components").map((s,a)=>s.startsWith("!")?["!"+ee.parse(s).toString(),new Tt]:[ee.parse(s).toString(),a])));return new ri(t,i,r)}}const Si=class Si{constructor(e,t){P(this,"key");P(this,"parser");P(this,"storage",new Map);P(this,"builtin",new Map);P(this,"tags");this.key=e,this.parser=t}static createAndRegister(e,t){const i=new Si(ee.create(e),t);return Si.REGISTRY.register(i.key,i),i}register(e,t,i){return this.storage.set(e.toString(),t),i&&this.builtin.set(e.toString(),t),no.reference(this,e)}delete(e){const t=this.storage.delete(e.toString());return this.builtin.delete(e.toString()),t}keys(){return[...this.storage.keys()].map(e=>ee.parse(e))}has(e){return this.storage.has(e.toString())}get(e){var t=this.storage.get(e.toString());return t instanceof Function&&(t=t(),this.storage.set(e.toString(),t)),t}getOrThrow(e){const t=this.get(e);if(t===void 0)throw new Error(`Missing key in ${this.key.toString()}: ${e.toString()}`);return t}parse(e){if(!this.parser)throw new Error(`No parser exists for ${this.key.toString()}`);return this.parser(e)}clear(){this.storage.clear();for(const[e,t]of this.builtin.entries())this.storage.set(e,t);return this.tags&&this.tags.clear(),this}assign(e){if(!this.key.equals(e.key))throw new Error(`Cannot assign registry of type ${e.key.toString()} to registry of type ${this.key.toString()}`);for(const t of e.keys())this.storage.set(t.toString(),e.getOrThrow(t));return this}cloneEmpty(){return new Si(this.key,this.parser)}forEach(e){for(const[t,i]of this.storage.entries())e(ee.parse(t),i instanceof Function?i():i,this)}map(e){return[...this.storage.entries()].map(([t,i])=>e(ee.parse(t),i instanceof Function?i():i,this))}getTagRegistry(){return this.tags===void 0&&(this.tags=new Si(new ee(this.key.namespace,`tags/${this.key.path}`))),this.tags}};P(Si,"REGISTRY",new Si(ee.create("root")));let io=Si;var Zr;(function(n){n.NONE="none",n.CLOCKWISE_90="clockwise_90",n.CLOCKWISE_180="180",n.COUNTERCLOCKWISE_90="counterclockwise_90"})(Zr||(Zr={}));const jy=[{key:"north",offset:[0,0,-1]},{key:"east",offset:[1,0,0]},{key:"south",offset:[0,0,1]},{key:"west",offset:[-1,0,0]}],dd=new Set(["minecraft:air","minecraft:cave_air","minecraft:void_air","minecraft:water","minecraft:lava"]),Zy=[/_banner$/,/_button$/,/_carpet$/,/_coral$/,/_coral_fan$/,/_door$/,/_fence$/,/_fence_gate$/,/_flower$/,/_glass_pane$/,/_hanging_sign$/,/_leaves$/,/_pressure_plate$/,/_rail$/,/_sapling$/,/_sign$/,/_slab$/,/_stairs$/,/_torch$/,/_trapdoor$/,/_wall$/,/_wall_banner$/,/_wall_hanging_sign$/,/_wall_sign$/,/_wall_torch$/,/_wool_carpet$/,/^attached_/,/^potted_/,/amethyst_cluster$/,/azalea$/,/bamboo$/,/bell$/,/big_dripleaf$/,/brewing_stand$/,/cake$/,/chain$/,/chest$/,/cocoa$/,/comparator$/,/conduit$/,/dead_bush$/,/decorated_pot$/,/end_rod$/,/fern$/,/grass$/,/grindstone$/,/kelp$/,/ladder$/,/lantern$/,/lever$/,/lightning_rod$/,/mangrove_roots$/,/mushroom$/,/pane$/,/repeater$/,/scaffolding$/,/seagrass$/,/skull$/,/soul_lantern$/,/sugar_cane$/,/turtle_egg$/,/twisting_vines$/,/vine$/,/weeping_vines$/];function fc(n){return n.includes(":")?n.split(":")[1]:n}function ql(n){const e=fc(n);return e==="iron_bars"||e.endsWith("glass_pane")}function $l(n){const e=fc(n);return e==="nether_brick_fence"||e.endsWith("_fence")&&!e.endsWith("_fence_gate")}function Ky(n){return ql(n)||$l(n)}function kh(n){if(!n||dd.has(n))return!1;const e=fc(n);return!Zy.some(t=>t.test(e))}function Jy(n,e){return!e||dd.has(e)?!1:ql(n)?ql(e)||kh(e):$l(n)?$l(e)||kh(e):!1}var Hn;let Qy=(Hn=class{constructor(e,t=[],i=[]){P(this,"size");P(this,"palette");P(this,"blocks");P(this,"blocksMap",[]);P(this,"xStride");P(this,"yStride");P(this,"placedBlocksCache",null);P(this,"placedBlocksMapCache",null);P(this,"paletteIndex",new Map);this.size=e,this.palette=t,this.blocks=i,this.xStride=e[1]*e[2],this.yStride=e[2],this.palette.forEach((r,s)=>{this.paletteIndex.set(r.toString(),s)}),i.forEach(r=>{if(!this.isInside(r.pos))throw new Error(`Found block at ${r.pos} which is outside the structure bounds ${this.size}`);this.blocksMap[this.getIndex(r.pos)]=r})}getSize(){return this.size}addBlock(e,t,i,r){if(!this.isInside(e))throw new Error(`Cannot add block at ${e} outside the structure bounds ${this.size}`);const s=new Ai(t,i),a=s.toString();let o=this.paletteIndex.get(a);o===void 0&&(o=this.palette.length,this.palette.push(s),this.paletteIndex.set(a,o));const c=this.getIndex(e),l=this.blocksMap[c];if(l)l.state=o,l.nbt=r;else{const u={pos:At.create(e[0],e[1],e[2]),state:o,nbt:r};this.blocks.push(u),this.blocksMap[c]=u}return this.clearPlacedCaches(),this}getBlocks(){return this.ensurePlacedCaches(),this.placedBlocksCache??[]}getBlock(e){var i;return this.isInside(e)?(this.ensurePlacedCaches(),((i=this.placedBlocksMapCache)==null?void 0:i[this.getIndex(e)])??null):null}clone(){return new Hn(At.create(this.size[0],this.size[1],this.size[2]),this.palette.map(e=>new Ai(e.getName(),{...e.getProperties()})),this.blocks.map(e=>({pos:At.create(e.pos[0],e.pos[1],e.pos[2]),state:e.state,nbt:e.nbt})))}updateBlockStates(){const e=[];for(const t of this.getBlocks()){const i=t.state.getName().toString();if(!Ky(i))continue;const r={...t.state.getProperties()};for(const s of jy){const a=this.getBlock(At.add(t.pos,s.offset)),o=(a==null?void 0:a.state.getName().toString())??"";r[s.key]=Jy(i,o)?"true":"false"}r.waterlogged===void 0&&(r.waterlogged="false"),!new Ai(i,r).equals(t.state)&&e.push({pos:t.pos,name:i,properties:r,nbt:t.nbt})}for(const t of e)this.addBlock(t.pos,t.name,t.properties,t.nbt);return{updatedBlocks:e.length}}toPlacedBlock(e){const t=this.palette[e.state];if(!t)throw new Error(`Block at ${e.pos.join(" ")} in structure references invalid palette index ${e.state}`);return{pos:e.pos,state:t,nbt:e.nbt}}isInside(e){return e[0]>=0&&e[0]<this.size[0]&&e[1]>=0&&e[1]<this.size[1]&&e[2]>=0&&e[2]<this.size[2]}getIndex(e){return e[0]*this.xStride+e[1]*this.yStride+e[2]}ensurePlacedCaches(){if(!(this.placedBlocksCache&&this.placedBlocksMapCache)){this.placedBlocksCache=[],this.placedBlocksMapCache=[];for(const e of this.blocks){const t=this.toPlacedBlock(e);this.placedBlocksCache.push(t),this.placedBlocksMapCache[this.getIndex(e.pos)]=t}}}clearPlacedCaches(){this.placedBlocksCache=null,this.placedBlocksMapCache=null}toNbt(e={}){const t=e.updateBlockStates?this.clone():this;e.updateBlockStates&&t.updateBlockStates();const i=[],r=new Map,s=t.blocks.map(o=>{const c=t.toPlacedBlock(o),l=c.state.toString();let u=r.get(l);u===void 0&&(u=i.length,i.push(c.state),r.set(l,u));const f=new Tt().set("pos",At.toNbt(c.pos)).set("state",new gn(u));return c.nbt&&c.nbt.size>0&&f.set("nbt",c.nbt),f}),a=new Tt().set("size",At.toNbt(this.size)).set("palette",new jt(i.map(o=>o.toNbt()))).set("blocks",new jt(s)).set("entities",new jt);return e.dataVersion!==void 0&&a.set("DataVersion",new gn(e.dataVersion)),a}writeNbt(e={}){return new Xn(e.name??"",this.toNbt(e),e.compression??"gzip",!1,void 0).write()}static fromNbt(e){const t=At.fromNbt(e.getList("size")),i=e.getList("palette",fe.Compound).map(s=>Ai.fromNbt(s)),r=e.getList("blocks",fe.Compound).map(s=>{const a=At.fromNbt(s.getList("pos")),o=s.getNumber("state"),c=s.getCompound("nbt");return{pos:a,state:o,nbt:c.size>0?c:void 0}});return new Hn(t,i,r)}static transform(e,t,i){switch(t){case Zr.COUNTERCLOCKWISE_90:return At.create(i[0]-i[2]+e[2],e[1],i[0]+i[2]-e[0]);case Zr.CLOCKWISE_90:return At.create(i[0]+i[2]-e[2],e[1],i[2]-i[0]+e[0]);case Zr.CLOCKWISE_180:return At.create(i[0]+i[0]-e[0],e[1],i[2]+i[2]-e[2]);default:return e}}},P(Hn,"REGISTRY",io.createAndRegister("structures")),P(Hn,"EMPTY",new Hn(At.ZERO)),Hn);class Ut{constructor(e,t,i){P(this,"x");P(this,"y");P(this,"z");this.x=e,this.y=t,this.z=i}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}distance(e){return this.sub(e).length()}distanceSquared(e){return this.sub(e).lengthSquared()}abs(){return new Ut(Math.abs(this.x),Math.abs(this.y),Math.abs(this.z))}add(e){return new Ut(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Ut(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new Ut(this.x*e.x,this.y*e.y,this.z*e.z)}div(e){return new Ut(this.x/e.x,this.y/e.y,this.z/e.z)}scale(e){return new Ut(this.x*e,this.y*e,this.z*e)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,r=this.x*e.y-this.y*e.x;return new Ut(t,i,r)}normalize(){if(this.x==0&&this.y==0&&this.z==0)return this;const e=1/this.length();return new Ut(this.x*e,this.y*e,this.z*e)}components(){return[this.x,this.y,this.z]}toString(){return`[${this.x} ${this.y} ${this.z}]`}}function Ei(n,e,t){return Math.max(e,Math.min(t,n))}function Yl(n){return(n&n-1)===0}function dc(n){return n-=1,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>18,n|=n>>32,n+1}var Oa=1e-6,mr=typeof Float32Array<"u"?Float32Array:Array,eS=Math.PI/180;function jl(n){return n*eS}function ot(){var n=new mr(16);return mr!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function tS(n){var e=new mr(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function nS(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function iS(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function rS(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-i*a,x=t*c-r*a,y=t*l-s*a,R=i*c-r*o,C=i*l-s*o,E=r*l-s*c,T=u*_-f*g,w=u*m-d*g,v=u*p-h*g,D=f*m-d*_,O=f*p-h*_,U=d*p-h*m,k=M*U-x*O+y*D+R*v-C*w+E*T;return k?(k=1/k,n[0]=(o*U-c*O+l*D)*k,n[1]=(r*O-i*U-s*D)*k,n[2]=(_*E-m*C+p*R)*k,n[3]=(d*C-f*E-h*R)*k,n[4]=(c*v-a*U-l*w)*k,n[5]=(t*U-r*v+s*w)*k,n[6]=(m*y-g*E-p*x)*k,n[7]=(u*E-d*y+h*x)*k,n[8]=(a*O-o*v+l*T)*k,n[9]=(i*v-t*O-s*T)*k,n[10]=(g*C-_*y+p*M)*k,n[11]=(f*y-u*C-h*M)*k,n[12]=(o*w-a*D-c*T)*k,n[13]=(t*D-i*w+r*T)*k,n[14]=(_*x-g*R-m*M)*k,n[15]=(u*R-f*x+d*M)*k,n):null}function qe(n,e,t){var i=t[0],r=t[1],s=t[2],a,o,c,l,u,f,d,h,g,_,m,p;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],c=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=e[9],m=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=c,n[3]=l,n[4]=u,n[5]=f,n[6]=d,n[7]=h,n[8]=g,n[9]=_,n[10]=m,n[11]=p,n[12]=a*i+u*r+g*s+e[12],n[13]=o*i+f*r+_*s+e[13],n[14]=c*i+d*r+m*s+e[14],n[15]=l*i+h*r+p*s+e[15]),n}function bn(n,e,t){var i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function sS(n,e,t,i){var r=i[0],s=i[1],a=i[2],o=Math.sqrt(r*r+s*s+a*a),c,l,u,f,d,h,g,_,m,p,M,x,y,R,C,E,T,w,v,D,O,U,k,L;return o<Oa?null:(o=1/o,r*=o,s*=o,a*=o,c=Math.sin(t),l=Math.cos(t),u=1-l,f=e[0],d=e[1],h=e[2],g=e[3],_=e[4],m=e[5],p=e[6],M=e[7],x=e[8],y=e[9],R=e[10],C=e[11],E=r*r*u+l,T=s*r*u+a*c,w=a*r*u-s*c,v=r*s*u-a*c,D=s*s*u+l,O=a*s*u+r*c,U=r*a*u+s*c,k=s*a*u-r*c,L=a*a*u+l,n[0]=f*E+_*T+x*w,n[1]=d*E+m*T+y*w,n[2]=h*E+p*T+R*w,n[3]=g*E+M*T+C*w,n[4]=f*v+_*D+x*O,n[5]=d*v+m*D+y*O,n[6]=h*v+p*D+R*O,n[7]=g*v+M*D+C*O,n[8]=f*U+_*k+x*L,n[9]=d*U+m*k+y*L,n[10]=h*U+p*k+R*L,n[11]=g*U+M*k+C*L,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function Os(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],f=e[10],d=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+l*i,n[5]=a*r+u*i,n[6]=o*r+f*i,n[7]=c*r+d*i,n[8]=l*r-s*i,n[9]=u*r-a*i,n[10]=f*r-o*i,n[11]=d*r-c*i,n}function Gt(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[8],u=e[9],f=e[10],d=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-l*i,n[1]=a*r-u*i,n[2]=o*r-f*i,n[3]=c*r-d*i,n[8]=s*i+l*r,n[9]=a*i+u*r,n[10]=o*i+f*r,n[11]=c*i+d*r,n}function pd(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],d=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+l*i,n[1]=a*r+u*i,n[2]=o*r+f*i,n[3]=c*r+d*i,n[4]=l*r-s*i,n[5]=u*r-a*i,n[6]=f*r-o*i,n[7]=d*r-c*i,n}function aS(n,e,t,i,r){var s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0){var a=1/(i-r);n[10]=(r+i)*a,n[14]=2*r*i*a}else n[10]=-1,n[14]=-2*i;return n}var oS=aS;function lS(n,e,t,i,r,s,a){var o=1/(e-t),c=1/(i-r),l=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*l,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*c,n[14]=(a+s)*l,n[15]=1,n}var cS=lS;function uS(n,e,t,i){var r,s,a,o,c,l,u,f,d,h,g=e[0],_=e[1],m=e[2],p=i[0],M=i[1],x=i[2],y=t[0],R=t[1],C=t[2];return Math.abs(g-y)<Oa&&Math.abs(_-R)<Oa&&Math.abs(m-C)<Oa?iS(n):(u=g-y,f=_-R,d=m-C,h=1/Math.sqrt(u*u+f*f+d*d),u*=h,f*=h,d*=h,r=M*d-x*f,s=x*u-p*d,a=p*f-M*u,h=Math.sqrt(r*r+s*s+a*a),h?(h=1/h,r*=h,s*=h,a*=h):(r=0,s=0,a=0),o=f*a-d*s,c=d*r-u*a,l=u*s-f*r,h=Math.sqrt(o*o+c*c+l*l),h?(h=1/h,o*=h,c*=h,l*=h):(o=0,c=0,l=0),n[0]=r,n[1]=o,n[2]=u,n[3]=0,n[4]=s,n[5]=c,n[6]=f,n[7]=0,n[8]=a,n[9]=l,n[10]=d,n[11]=0,n[12]=-(r*g+s*_+a*m),n[13]=-(o*g+c*_+l*m),n[14]=-(u*g+f*_+d*m),n[15]=1,n)}function ro(){var n=new mr(3);return mr!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function _i(n){var e=new mr(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function hS(n){var e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function wn(n,e,t){var i=new mr(3);return i[0]=n,i[1]=e,i[2]=t,i}function Pa(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function fS(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function dS(n,e,t,i){return n[0]=e[0]+t[0]*i,n[1]=e[1]+t[1]*i,n[2]=e[2]+t[2]*i,n}function pS(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function md(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function mS(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}(function(){var n=ro();return function(e,t,i,r,s,a){var o,c;for(t||(t=3),i||(i=0),r?c=Math.min(r*t+i,e.length):c=e.length,o=i;o<c;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();const Sn=[124/255,189/255,107/255],gS=$e.intToRgb(6396257),_S=$e.intToRgb(8431445),Br=$e.intToRgb(4764952),La=$e.intToRgb(4159204),vS=$e.intToRgb(2129968),xS=n=>{const e=n/15,t=e*.6+(e>0?.4:.3),i=Ei(e*e*.7-.5,0,1),r=Ei(e*e*.6-.7,0,1);return[t,i,r]},Da=n=>[n/8,1-n/32,n/64],lr={large_fern:()=>Sn,tall_grass:()=>Sn,grass_block:()=>Sn,fern:()=>Sn,grass:()=>Sn,short_grass:()=>Sn,potted_fern:()=>Sn,pink_petals:()=>Sn,wildflowers:()=>Sn,bush:()=>Sn,spruce_leaves:()=>gS,birch_leaves:()=>_S,oak_leaves:()=>Br,jungle_leaves:()=>Br,acacia_leaves:()=>Br,dark_oak_leaves:()=>Br,vine:()=>Br,mangrove_leaves:()=>Br,water:()=>La,bubble_column:()=>La,cauldron:()=>La,water_cauldron:()=>La,redstone_wire:n=>xS(parseInt(n.power??"0")),sugar_cane:()=>Sn,attached_melon_stem:()=>Da(7),attached_pumpkin_stem:()=>Da(7),melon_stem:n=>Da(parseInt(n.age??"0")),pumpkin_stem:n=>Da(parseInt(n.age??"0")),lily_pad:()=>vS};var yt;(function(n){function e(i,r,s){let{up:a,down:o,north:c,east:l,south:u,west:f}=i;switch(s){case 90:[c,l,u,f]=[l,u,f,c];break;case 180:[c,l,u,f]=[u,f,c,l];break;case 270:[c,l,u,f]=[f,c,l,u]}switch(r){case 90:[a,c,o,u]=[c,o,u,a];break;case 180:[a,c,o,u]=[o,u,a,c];break;case 270:[a,c,o,u]=[u,a,c,o]}return{up:a,down:o,north:c,east:l,south:u,west:f}}n.rotate=e;function t(){return Object.create(null)}n.none=t})(yt||(yt={}));const dn=class dn{constructor(e,t,i,r,s,a,o=0){P(this,"pos");P(this,"color");P(this,"texture");P(this,"textureLimit");P(this,"normal");P(this,"blockPos");P(this,"emissive");this.pos=e,this.color=t,this.texture=i,this.textureLimit=r,this.normal=s,this.blockPos=a,this.emissive=o}transform(e){return dn.VEC[0]=this.pos.x,dn.VEC[1]=this.pos.y,dn.VEC[2]=this.pos.z,mS(dn.VEC,dn.VEC,e),this.pos=new Ut(dn.VEC[0],dn.VEC[1],dn.VEC[2]),this}static fromPos(e){return new dn(e,[0,0,0],[0,0],[0,0,0,0],void 0,void 0,0)}};P(dn,"VEC",ro());let Ln=dn;class Bs{constructor(e,t){P(this,"v1");P(this,"v2");this.v1=e,this.v2=t}vertices(){return[this.v1,this.v2]}forEach(e){return e(this.v1),e(this.v2),this}transform(e){return this.forEach(t=>t.transform(e)),this}setColor(e){return this.forEach(t=>t.color=e),this}toString(){return`Line(${this.v1.pos.toString()}, ${this.v2.pos.toString()})`}static fromPoints(e,t){return new Bs(Ln.fromPos(e),Ln.fromPos(t))}}class ft{constructor(e=[],t=[]){P(this,"quads");P(this,"lines");P(this,"posBuffer");P(this,"colorBuffer");P(this,"textureBuffer");P(this,"textureLimitBuffer");P(this,"normalBuffer");P(this,"blockPosBuffer");P(this,"indexBuffer");P(this,"indexType");P(this,"linePosBuffer");P(this,"lineColorBuffer");this.quads=e,this.lines=t}clear(){return this.quads=[],this.lines=[],this}isEmpty(){return this.quads.length===0&&this.lines.length===0}quadVertices(){return this.quads.length*4}quadIndices(){return this.quads.length*6}lineVertices(){return this.lines.length*2}merge(e){for(const t of e.quads)this.quads.push(t);for(const t of e.lines)this.lines.push(t);return this}addLine(e,t,i,r,s,a,o){const c=new Bs(Ln.fromPos(new Ut(e,t,i)),Ln.fromPos(new Ut(r,s,a))).setColor(o);return this.lines.push(c),this}addLineCube(e,t,i,r,s,a,o){return this.addLine(e,t,i,e,t,a,o),this.addLine(r,t,i,r,t,a,o),this.addLine(e,t,i,r,t,i,o),this.addLine(e,t,a,r,t,a,o),this.addLine(e,t,i,e,s,i,o),this.addLine(r,t,i,r,s,i,o),this.addLine(e,t,a,e,s,a,o),this.addLine(r,t,a,r,s,a,o),this.addLine(e,s,i,e,s,a,o),this.addLine(r,s,i,r,s,a,o),this.addLine(e,s,i,r,s,i,o),this.addLine(e,s,a,r,s,a,o),this}transform(e){for(const t of this.quads)t.transform(e);return this}computeNormals(){for(const e of this.quads){const t=e.normal();e.forEach(i=>i.normal=t)}}rebuild(e,t){const i=t.usage??e.DYNAMIC_DRAW,r=(a,o,c)=>{if(a||(a=e.createBuffer()??void 0),!a)throw new Error("Cannot create new buffer");return e.bindBuffer(o,a),e.bufferData(o,c,i),a},s=(a,o,c,l)=>{if(a.length===0){o&&e.deleteBuffer(o);return}const u=a[0]instanceof Bs?2:4,f=new Float32Array(a.length*u*c);let d=0;for(const h of a)for(const g of h.vertices()){const _=l(g);if(!_)throw new Error("Missing vertex component");for(let m=0;m<c;m+=1)f[d++]=_[m]??0}return r(o,e.ARRAY_BUFFER,f)};if(t.pos&&(this.posBuffer=s(this.quads,this.posBuffer,3,a=>a.pos.components()),this.linePosBuffer=s(this.lines,this.linePosBuffer,3,a=>a.pos.components())),t.color&&(this.colorBuffer=s(this.quads,this.colorBuffer,3,a=>a.color),this.lineColorBuffer=s(this.lines,this.lineColorBuffer,3,a=>a.color)),t.texture&&(this.textureBuffer=s(this.quads,this.textureBuffer,2,a=>a.texture),this.textureLimitBuffer=s(this.quads,this.textureLimitBuffer,4,a=>a.textureLimit)),t.normal&&(this.normalBuffer=s(this.quads,this.normalBuffer,3,a=>{var o;return(o=a.normal)==null?void 0:o.components()})),t.blockPos&&(this.blockPosBuffer=s(this.quads,this.blockPosBuffer,3,a=>{var o;return(o=a.blockPos)==null?void 0:o.components()})),this.quads.length===0)this.indexBuffer&&e.deleteBuffer(this.indexBuffer),this.indexBuffer=void 0,this.indexType=void 0;else{const a=this.quadVertices()>65536;if(a&&!(typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext)&&!e.getExtension("OES_element_index_uint"))throw new Error("Mesh requires 32-bit indices, but OES_element_index_uint is not available");this.indexType=a?e.UNSIGNED_INT:e.UNSIGNED_SHORT;const o=a?new Uint32Array(this.quadIndices()):new Uint16Array(this.quadIndices());let c=0;for(let l=0;l<this.quads.length;l+=1){const u=l*4;o[c++]=u,o[c++]=u+1,o[c++]=u+2,o[c++]=u,o[c++]=u+2,o[c++]=u+3}this.indexBuffer=r(this.indexBuffer,e.ELEMENT_ARRAY_BUFFER,o)}return this}}function Fh(n){const e=te.readObject(n)??{},i={model:te.readString(e.model)??""},r=te.readNumber(e.x);r!==void 0&&(i.x=r);const s=te.readNumber(e.y);s!==void 0&&(i.y=s);const a=te.readBoolean(e.uvlock);a!==void 0&&(i.uvlock=a);const o=te.readNumber(e.weight);return o!==void 0&&(i.weight=o),i}function gd(n){const e=te.readArray(n,Fh);return e||Fh(n)}function _d(n){const e=te.readObject(n);if(!e)return;const t=te.readArray(e.OR,_d);if(t){const i=t.flatMap(r=>r?[r]:[]);if(i.length>0)return{OR:i}}return Object.fromEntries(Object.entries(e).map(([i,r])=>[i,te.readString(r)??""]))}function yS(n){const e=te.readObject(n)??{},t=gd(e.apply),i=_d(e.when);return i?{when:i,apply:t}:{apply:t}}class _o{constructor(e,t){P(this,"variants");P(this,"multipart");this.variants=e,this.multipart=t}getModelVariants(e){if(this.variants){const t=Object.keys(this.variants).filter(r=>this.matchesVariant(r,e));if(t.length===0)return[];const i=this.variants[t[0]];return[Array.isArray(i)?i[0]:i]}else if(this.multipart)return this.multipart.filter(i=>i.when?this.matchesCase(i.when,e):!0).map(i=>Array.isArray(i.apply)?i.apply[0]:i.apply);return[]}getMesh(e,t,i,r,s){var l;const a=this.getModelVariants(t),o=new ft;for(const u of a){const f=yt.rotate(s,u.x??0,u.y??0),d=r.getBlockModel(ee.parse(u.model));if(!d)throw new Error(`Cannot find block model ${u.model}`);const h=e?(l=lr[e.path])==null?void 0:l.call(lr,t):void 0,g=d.getMesh(i,f,h);if(u.x||u.y){const _=ot();qe(_,_,[8,8,8]),Gt(_,_,-jl(u.y??0)),Os(_,_,-jl(u.x??0)),qe(_,_,[-8,-8,-8]),g.transform(_)}o.merge(g)}const c=ot();return bn(c,c,[.0625,.0625,.0625]),o.transform(c)}matchesVariant(e,t){return e.split(",").every(i=>{const[r,s]=i.split("=");return t[r]===s})}matchesCase(e,t){if(Array.isArray(e.OR))return e.OR.some(r=>this.matchesCase(r,t));const i=e;return Object.keys(i).every(r=>i[r].split("|").includes(t[r]))}static fromJson(e){const t=te.readObject(e)??{},i=te.readObject(t.variants),r=i?Object.fromEntries(Object.entries(i).map(([a,o])=>[a,gd(o)])):void 0,s=te.readArray(t.multipart,yS);return new _o(r,s)}}class vo{constructor(e,t,i,r){P(this,"v1");P(this,"v2");P(this,"v3");P(this,"v4");this.v1=e,this.v2=t,this.v3=i,this.v4=r}vertices(){return[this.v1,this.v2,this.v3,this.v4]}forEach(e){return e(this.v1),e(this.v2),e(this.v3),e(this.v4),this}transform(e){return this.forEach(t=>t.transform(e)),this}normal(){const e=this.v2.pos.sub(this.v1.pos),t=this.v3.pos.sub(this.v1.pos);return e.cross(t).normalize()}reverse(){return[this.v1,this.v2,this.v3,this.v4]=[this.v4,this.v3,this.v2,this.v1],this}setColor(e){return this.forEach(t=>t.color=e),this}setTexture(e,t){return this.v1.textureLimit=t,this.v2.textureLimit=t,this.v3.textureLimit=t,this.v4.textureLimit=t,this.v1.texture=[e[0],e[1]],this.v2.texture=[e[2],e[3]],this.v3.texture=[e[4],e[5]],this.v4.texture=[e[6],e[7]],this}toString(){return`Quad(${this.v1.pos.toString()}, ${this.v2.pos.toString()}, ${this.v3.pos.toString()}, ${this.v4.pos.toString()})`}static fromPoints(e,t,i,r){return new vo(Ln.fromPos(e),Ln.fromPos(t),Ln.fromPos(i),Ln.fromPos(r))}}const SS={0:[0,3,2,3,2,1,0,1],90:[2,3,2,1,0,1,0,3],180:[2,1,0,1,0,3,2,3],270:[0,1,0,3,2,3,2,1]},wS={x:[1,0,0],y:[0,1,0],z:[0,0,1]},zr=1.41421356237,MS={x:[1,zr,zr],y:[zr,1,zr],z:[zr,zr,1]},wi=class wi{constructor(e,t,i,r,s){P(this,"parent");P(this,"textures");P(this,"elements");P(this,"display");P(this,"guiLight");P(this,"generationMarker",!1);this.parent=e,this.textures=t,this.elements=i,this.display=r,this.guiLight=s}getDisplayTransform(e){var r;const t=(r=this.display)==null?void 0:r[e],i=ot();return qe(i,i,[8,8,8]),t!=null&&t.translation&&qe(i,i,t.translation),t!=null&&t.rotation&&(Os(i,i,t.rotation[0]*Math.PI/180),Gt(i,i,t.rotation[1]*Math.PI/180),pd(i,i,-t.rotation[2]*Math.PI/180)),t!=null&&t.scale&&bn(i,i,t.scale),qe(i,i,[-8,-8,-8]),i}getMesh(e,t,i){const r=new ft,s=a=>i===void 0?[1,1,1]:a===void 0||a<0?[1,1,1]:typeof i=="function"?i(a):i;for(const a of this.elements??[])r.merge(this.getElementMesh(a,e,t,s));return r}getElementMesh(e,t,i,r){var g,_,m,p,M,x,y,R,C,E,T,w;const s=new ft,[a,o,c]=e.from,[l,u,f]=e.to,d=(v,D,O)=>{var de,ve,V,ie;const U=vo.fromPoints(new Ut(O[0],O[1],O[2]),new Ut(O[3],O[4],O[5]),new Ut(O[6],O[7],O[8]),new Ut(O[9],O[10],O[11])),k=r(v.tintindex);U.setColor(k);const[L,F,j,G]=t.getTextureUV(this.getTexture(v.texture)),W=(j-L)/16,J=(G-F)/16;D[0]=(((de=v.uv)==null?void 0:de[0])??D[0])*W,D[1]=(((ve=v.uv)==null?void 0:ve[1])??D[1])*J,D[2]=(((V=v.uv)==null?void 0:V[2])??D[2])*W,D[3]=(((ie=v.uv)==null?void 0:ie[3])??D[3])*J;const Q=SS[v.rotation??0];U.setTexture([L+D[Q[0]],F+D[Q[1]],L+D[Q[2]],F+D[Q[3]],L+D[Q[4]],F+D[Q[5]],L+D[Q[6]],F+D[Q[7]]],[L+Math.min(D[0],D[2]),F+Math.min(D[1],D[3]),L+Math.max(D[0],D[2]),F+Math.max(D[1],D[3])]),s.quads.push(U)};(_=(g=e.faces)==null?void 0:g.up)!=null&&_.texture&&(!e.faces.up.cullface||!i[e.faces.up.cullface])&&d(e.faces.up,[a,16-f,l,16-c],[a,u,f,l,u,f,l,u,c,a,u,c]),(p=(m=e.faces)==null?void 0:m.down)!=null&&p.texture&&(!e.faces.down.cullface||!i[e.faces.down.cullface])&&d(e.faces.down,[16-f,16-l,16-c,16-a],[a,o,c,l,o,c,l,o,f,a,o,f]),(x=(M=e.faces)==null?void 0:M.south)!=null&&x.texture&&(!e.faces.south.cullface||!i[e.faces.south.cullface])&&d(e.faces.south,[a,16-u,l,16-o],[a,o,f,l,o,f,l,u,f,a,u,f]),(R=(y=e.faces)==null?void 0:y.north)!=null&&R.texture&&(!e.faces.north.cullface||!i[e.faces.north.cullface])&&d(e.faces.north,[16-l,16-u,16-a,16-o],[l,o,c,a,o,c,a,u,c,l,u,c]),(E=(C=e.faces)==null?void 0:C.east)!=null&&E.texture&&(!e.faces.east.cullface||!i[e.faces.east.cullface])&&d(e.faces.east,[16-f,16-u,16-c,16-o],[l,o,f,l,o,c,l,u,c,l,u,f]),(w=(T=e.faces)==null?void 0:T.west)!=null&&w.texture&&(!e.faces.west.cullface||!i[e.faces.west.cullface])&&d(e.faces.west,[c,16-u,f,16-o],[a,o,c,a,o,f,a,u,f,a,u,c]);const h=ot();if(e.rotation){const v=wn(...e.rotation.origin);qe(h,h,v),sS(h,h,jl(e.rotation.angle),wS[e.rotation.axis]),e.rotation.rescale&&bn(h,h,MS[e.rotation.axis]),pS(v,v),qe(h,h,v)}return s.transform(h)}getTexture(e){var t;for(;e.startsWith("#");)e=((t=this.textures)==null?void 0:t[e.slice(1)])??"";return ee.parse(e)}flatten(e){var o;if(!this.parent)return;if(this.parent.equals(wi.BUILTIN_GENERATED)){this.generationMarker=!0;return}const t=this.getParent(e);if(!t){console.warn(`parent ${this.parent} does not exist!`),this.parent=void 0;return}t.flatten(e),this.elements||(this.elements=t.elements),this.textures||(this.textures={});const i=this.textures,r=t.textures;r&&Object.keys(r).forEach(c=>{i[c]||(i[c]=r[c])}),this.display||(this.display={});const s=this.display,a=t.display;if(a&&Object.keys(a).forEach(c=>{const l=c;if(!s[l])s[l]=a[l];else{const u=a[l];u&&Object.keys(u).forEach(f=>{const d=f,h=s[l];h&&!h[d]&&u[d]&&(h[d]=u[d])})}}),this.guiLight||(this.guiLight=t.guiLight),t.generationMarker&&(this.generationMarker=!0),this.generationMarker&&(((o=this.elements)==null?void 0:o.length)??0)===0)for(let c=0;c<wi.GENERATED_LAYERS.length;c+=1){const l=wi.GENERATED_LAYERS[c];if(!Object.hasOwn(this.textures,l))break;this.elements||(this.elements=[]),this.elements.push({from:[0,0,0],to:[16,16,0],faces:{south:{texture:`#${l}`,tintindex:c}}})}this.parent=void 0}getParent(e){return this.parent?e.getBlockModel(this.parent):null}static fromJson(e){var u;const t=te.readObject(e)??{},i=te.readString(t.parent),r=i?ee.parse(i):void 0,s=te.readObject(t.textures),a=s?te.readMap(s,f=>te.readString(f)??""):void 0,o=(u=te.readArray(t.elements,f=>te.readObject(f)??{}))==null?void 0:u.map(f=>f),c=te.readObject(t.display),l=te.readString(t.gui_light);return new wi(r,a,o,c,l)}};P(wi,"BUILTIN_GENERATED",ee.create("builtin/generated")),P(wi,"GENERATED_LAYERS",["layer0","layer1","layer2","layer3","layer4"]);let ht=wi;class An{constructor(e,t){P(this,"img");P(this,"idMap");P(this,"part");if(this.img=e,this.idMap=t,!Yl(e.width)||!Yl(e.height))throw new Error(`Expected texture atlas dimensions to be powers of two, got ${e.width}x${e.height}.`);this.part=16/e.width}getTextureAtlas(){return this.img}getTextureUV(e){return this.idMap[e.toString()]??[0,0,this.part,this.part]}getPixelSize(){return this.part/16}static async fromBlobs(e){const t=Math.sqrt(Object.keys(e).length+1),i=dc(t),r=i*16,s=1/i,a=document.createElement("canvas");a.width=r,a.height=r;const o=a.getContext("2d");if(!o)throw new Error("Failed to get 2D rendering context");this.drawInvalidTexture(o);const c={};let l=1;return await Promise.all(Object.keys(e).map(async u=>{const f=l%i,d=Math.floor(l/i);l+=1,c[u]=[s*f,s*d,s*f+s,s*d+s];const h=await createImageBitmap(e[u]);o.drawImage(h,0,0,16,16,16*f,16*d,16,16)})),new An(o.getImageData(0,0,r,r),c)}static empty(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");if(!t)throw new Error("Failed to get 2D rendering context");return An.drawInvalidTexture(t),new An(t.getImageData(0,0,16,16),{})}static drawInvalidTexture(e){e.fillStyle="black",e.fillRect(0,0,16,16),e.fillStyle="magenta",e.fillRect(0,0,8,8),e.fillRect(8,8,8,8)}}function Ia(n){if(!n)return"";if(typeof n=="string")return n;const e=n;return typeof e.toString=="function"?e.toString():String(n)}function vd(){const n=new URL("../../assets/default-pack/",import.meta.url).toString();return pc(n)}function pc(n){const e=(typeof n=="string"?n:n.toString()).replace(/\/?$/,"/");return{baseUrl:e,assetsJson:new URL("assets.json",e).toString(),atlasPng:new URL("atlas.png",e).toString(),blockFlags:{opaqueTxt:new URL("block-flags/opaque.txt",e).toString(),transparentTxt:new URL("block-flags/transparent.txt",e).toString(),nonSelfCullingTxt:new URL("block-flags/non_self_culling.txt",e).toString(),emissiveJson:new URL("block-flags/emissive.json",e).toString()}}}function Ml(n){const e=new Set;return(n.match(/minecraft:[a-z0-9_]+/g)??[]).forEach(i=>e.add(i)),n.split(/\s+/).map(i=>i.trim()).filter(Boolean).forEach(i=>{const r=i.startsWith("minecraft:")?i:`minecraft:${i}`;e.add(r)}),e}async function bS(n){const e=typeof createImageBitmap=="function"?await createImageBitmap(n):null,t=(e==null?void 0:e.width)??0,i=(e==null?void 0:e.height)??0;if(!e||t<=0||i<=0)throw new Error("[lodestone] Unable to decode atlas.png: createImageBitmap unavailable or failed.");const r=dc(Math.max(t,i)),a=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(r,r):typeof document<"u"?Object.assign(document.createElement("canvas"),{width:r,height:r}):(()=>{throw new Error("[lodestone] No canvas implementation available to decode atlas.png")})()).getContext("2d");if(!a)throw new Error("[lodestone] Unable to create 2D canvas context to decode atlas.png");return a.drawImage(e,0,0),{imageData:a.getImageData(0,0,r,r),atlasSize:r}}function xd(n){const{assets:e,atlas:t,flags:i}=n,r={};Object.keys(e.blockstates??{}).forEach(h=>{r[`minecraft:${h}`]=_o.fromJson(e.blockstates[h])});const s={};Object.keys(e.models??{}).forEach(h=>{s[`minecraft:${h}`]=ht.fromJson(e.models[h])});const a={getBlockModel(h){return s[Ia(h)]??null}};Object.values(s).forEach(h=>h.flatten(a));const o={};Object.keys(e.textures??{}).forEach(h=>{const[g,_,m,p]=e.textures[h],M=m!==p&&h.startsWith("block/")?m:p;o[`minecraft:${h}`]=[g/t.atlasSize,_/t.atlasSize,(g+m)/t.atlasSize,(_+M)/t.atlasSize]});const c=new An(t.imageData,o),l=(i==null?void 0:i.opaque)??new Set,u=(i==null?void 0:i.transparent)??new Set,f=(i==null?void 0:i.nonSelfCulling)??new Set,d=(i==null?void 0:i.emissive)??{};return{getBlockDefinition(h){return r[Ia(h)]??null},getBlockModel(h){return s[Ia(h)]??null},getTextureUV(h){return c.getTextureUV(h)},getTextureAtlas(){return c.getTextureAtlas()},getPixelSize(){return c.getPixelSize()},getBlockFlags(h){const g=Ia(h),_=u.has(g),m=l.has(g),p=!_&&(m||l.size===0),M=f.has(g),x=d[g];return{opaque:p,semi_transparent:_,self_culling:!M,emissive:!!x,emissiveIntensity:(x==null?void 0:x.intensity)??1,emissiveConditional:x==null?void 0:x.conditional}},getBlockProperties(){return null},getDefaultBlockProperties(){return null}}}async function ES(n){const e=(n==null?void 0:n.fetch)??globalThis.fetch;if(!e)throw new Error("[lodestone] fetch is not available; pass options.fetch");const t=n!=null&&n.baseUrl?pc(n.baseUrl):vd(),[i,r,s,a,o,c]=await Promise.all([e(t.assetsJson),e(t.atlasPng),e(t.blockFlags.opaqueTxt),e(t.blockFlags.transparentTxt),e(t.blockFlags.nonSelfCullingTxt),e(t.blockFlags.emissiveJson)]);if(!i.ok)throw new Error(`[lodestone] Failed to fetch assets.json: ${i.status} ${i.statusText}`);if(!r.ok)throw new Error(`[lodestone] Failed to fetch atlas.png: ${r.status} ${r.statusText}`);if(!s.ok)throw new Error(`[lodestone] Failed to fetch opaque.txt: ${s.status} ${s.statusText}`);if(!a.ok)throw new Error(`[lodestone] Failed to fetch transparent.txt: ${a.status} ${a.statusText}`);if(!o.ok)throw new Error(`[lodestone] Failed to fetch non_self_culling.txt: ${o.status} ${o.statusText}`);if(!c.ok)throw new Error(`[lodestone] Failed to fetch emissive.json: ${c.status} ${c.statusText}`);const l=await i.json(),u=await r.blob(),f=await bS(u),d={opaque:Ml(await s.text()),transparent:Ml(await a.text()),nonSelfCulling:Ml(await o.text()),emissive:await c.json()},h=xd({assets:l,atlas:f,flags:d});return{urls:t,assets:l,atlas:f,resources:h}}function bl(n,e,t,i,r){var a;const s=i.up?16:[14.2,12.5,10.5,9,7,5.3,3.7,1.9,16,16,16,16,16,16,16,16][e];return new ht(void 0,{still:`block/${n}_still`,flow:`block/${n}_flow`},[{from:[0,0,0],to:[16,s,16],faces:{up:{texture:"#still",tintindex:r,cullface:Ne.UP},down:{texture:"#still",tintindex:r,cullface:Ne.DOWN},north:{texture:"#flow",tintindex:r,cullface:Ne.NORTH},east:{texture:"#flow",tintindex:r,cullface:Ne.EAST},south:{texture:"#flow",tintindex:r,cullface:Ne.SOUTH},west:{texture:"#flow",tintindex:r,cullface:Ne.WEST}}}]).getMesh(t,i,(a=lr[n])==null?void 0:a.call(lr,{}))}const vs={white:$e.intToRgb(16383998),orange:$e.intToRgb(16351261),magenta:$e.intToRgb(13061821),light_blue:$e.intToRgb(3847130),yellow:$e.intToRgb(16701501),lime:$e.intToRgb(8439583),pink:$e.intToRgb(15961002),gray:$e.intToRgb(4673362),light_gray:$e.intToRgb(10329495),cyan:$e.intToRgb(1481884),purple:$e.intToRgb(8991416),blue:$e.intToRgb(3949738),brown:$e.intToRgb(8606770),green:$e.intToRgb(6192150),red:$e.intToRgb(11546150),black:$e.intToRgb(1908001)};var et;(function(n){function e(L){return F=>new ht(void 0,{0:L.withPrefix("entity/chest/").toString()},[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],rotation:180,texture:"#0"},down:{uv:[.75,0,1.25,.25],rotation:180,texture:"#0"}}}]).getMesh(F,yt.none())}n.chestRenderer=e;function t(L){return new ht(void 0,{0:"entity/decorated_pot/decorated_pot_side",1:"entity/decorated_pot/decorated_pot_base"},[{from:[1,0,1],to:[15,16,15],faces:{north:{uv:[1,0,15,16],texture:"#0"},east:{uv:[1,0,15,16],texture:"#0"},south:{uv:[1,0,15,16],texture:"#0"},west:{uv:[1,0,15,16],texture:"#0"},up:{uv:[0,6.5,7,13.5],texture:"#1"},down:{uv:[7,6.5,14,13.5],texture:"#1"}}},{from:[5,16,5],to:[11,17,11],faces:{north:{uv:[0,5.5,3,6],texture:"#1"},east:{uv:[3,5.5,6,6],texture:"#1"},south:{uv:[6,5.5,9,6],texture:"#1"},west:{uv:[9,5.5,12,6],texture:"#1"}}},{from:[4,17,4],to:[12,20,12],faces:{north:{uv:[0,4,4,5.5],texture:"#1"},east:{uv:[4,4,8,5.5],texture:"#1"},south:{uv:[8,4,12,5.5],texture:"#1"},west:{uv:[12,4,16,5.5],texture:"#1"},up:{uv:[4,0,8,4],texture:"#1"},down:{uv:[8,0,12,4],texture:"#1"}}}]).getMesh(L,yt.none())}n.decoratedPotRenderer=t;function i(L){return new ht(void 0,{0:"entity/shield_base_nopattern"},[{from:[-6,-11,-2],to:[6,11,-1],faces:{north:{uv:[3.5,.25,6.5,5.75],texture:"#0"},east:{uv:[3.25,.25,3.5,5.75],texture:"#0"},south:{uv:[.25,.25,3.25,5.75],texture:"#0"},west:{uv:[0,.25,.25,5.75],texture:"#0"},up:{uv:[.25,0,3.25,.25],texture:"#0"},down:{uv:[3.25,0,6.25,.25],texture:"#0"}}}]).getMesh(L,yt.none())}n.shieldRenderer=i;function r(L,F){return j=>new ht(void 0,{0:L.withPrefix("entity/").toString()},[{from:[4,0,4],to:[12,8,12],faces:{north:{uv:[6,2*F,8,4*F],texture:"#0"},east:{uv:[2,2*F,0,4*F],texture:"#0"},south:{uv:[2,2*F,4,4*F],texture:"#0"},west:{uv:[6,2*F,4,4*F],texture:"#0"},up:{uv:[2,0*F,4,2*F],texture:"#0"},down:{uv:[4,0*F,6,2*F],texture:"#0"}}}]).getMesh(j,yt.none())}n.headRenderer=r;function s(L=ee.create("enderdragon/dragon")){return F=>{const j=ot();return qe(j,j,[8,8,8]),bn(j,j,[.75,.75,.75]),Gt(j,j,Math.PI),qe(j,j,[-8,-11.2,-8]),new ht(void 0,{0:L.withPrefix("entity/").toString()},[{from:[2,4,-16],to:[14,9,0],faces:{north:{uv:[12,3.75,12.75,4.0625],texture:"#0"},east:{uv:[11,3.75,12,4.0625],texture:"#0"},south:{uv:[13.75,3.75,14.5,4.0625],texture:"#0"},west:{uv:[12.75,3.75,13.75,4.0625],texture:"#0"},up:{uv:[12.75,3.75,12,2.75],texture:"#0"},down:{uv:[13.5,2.75,12.75,3.75],texture:"#0"}}},{from:[0,0,-2],to:[16,16,14],faces:{north:{uv:[8,2.875,9,3.875],texture:"#0"},east:{uv:[7,2.875,8,3.875],texture:"#0"},south:{uv:[10,2.875,11,3.875],texture:"#0"},west:{uv:[9,2.875,10,3.875],texture:"#0"},up:{uv:[9,2.875,8,1.875],texture:"#0"},down:{uv:[10,1.875,9,2.875],texture:"#0"}}},{from:[2,0,-16],to:[14,4,0],rotation:{angle:-.2*180/Math.PI,axis:"x",origin:[8,4,-2]},faces:{north:{uv:[12,5.0625,12.75,5.3125],texture:"#0"},east:{uv:[11,5.0625,12,5.3125],texture:"#0"},south:{uv:[13.75,5.0625,14.5,5.3125],texture:"#0"},west:{uv:[12.75,5.0625,13.75,5.3125],texture:"#0"},up:{uv:[12.75,5.0625,12,4.0625],texture:"#0"},down:{uv:[13.5,4.0625,12.75,5.0625],texture:"#0"}}},{from:[3,16,4],to:[5,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[11,16,4],to:[13,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[3,9,-14],to:[5,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}},{from:[11,9,-14],to:[13,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}}]).getMesh(F,yt.none()).transform(j)}}n.dragonHeadRenderer=s;function a(L=ee.create("piglin/piglin")){return F=>new ht(void 0,{0:L.withPrefix("entity/").toString()},[{from:[3,0,4],to:[13,8,12],faces:{north:{uv:[6.5,2,9,4],texture:"#0"},east:{uv:[2,2,0,4],texture:"#0"},south:{uv:[2,2,4.5,4],texture:"#0"},west:{uv:[6.5,2,4.5,4],texture:"#0"},up:{uv:[2,0,4.5,2],texture:"#0"},down:{uv:[4.5,0,7,2],texture:"#0"}}},{from:[6,0,12],to:[10,4,13],faces:{north:{uv:[9.25,.5,10.25,1.5],texture:"#0"},east:{uv:[7.75,.5,8,1.5],texture:"#0"},south:{uv:[8,.5,9,1.5],texture:"#0"},west:{uv:[9,.5,9.25,1.5],texture:"#0"},up:{uv:[8,.25,9,.5],texture:"#0"},down:{uv:[9,.25,10,.5],texture:"#0"}}},{from:[5,0,12],to:[6,2,13],faces:{north:{uv:[1.25,.25,1.5,.75],texture:"#0"},east:{uv:[.5,.25,.75,.75],texture:"#0"},south:{uv:[.75,.25,1,.75],texture:"#0"},west:{uv:[1,.25,1.25,.75],texture:"#0"},up:{uv:[.75,0,1,.25],texture:"#0"},down:{uv:[1,0,1.25,.25],texture:"#0"}}},{from:[10,0,12],to:[11,2,13],faces:{north:{uv:[1.25,1.25,1.5,1.75],texture:"#0"},east:{uv:[.5,1.25,.75,1.75],texture:"#0"},south:{uv:[.75,1.25,1,1.75],texture:"#0"},west:{uv:[1,1.25,1.25,1.75],texture:"#0"},up:{uv:[.75,1,1,1.25],texture:"#0"},down:{uv:[1,1,1.25,1.25],texture:"#0"}}},{from:[2.5,1.5,6],to:[3.5,6.5,10],rotation:{angle:-30,axis:"z",origin:[3,7,8]},faces:{north:{uv:[12,2.5,12.25,3.75],texture:"#0"},east:{uv:[9.75,2.5,10.75,3.75],texture:"#0"},south:{uv:[10.75,2.5,11,3.75],texture:"#0"},west:{uv:[11,2.5,12,3.75],texture:"#0"},up:{uv:[10.75,1.5,11,2.5],texture:"#0"},down:{uv:[11,1.5,11.25,2.5],texture:"#0"}}},{from:[12.5,1.5,6],to:[13.5,6.5,10],rotation:{angle:30,axis:"z",origin:[13,7,8]},faces:{north:{uv:[15.25,2.5,15,3.75],texture:"#0"},east:{uv:[15,2.5,14,3.75],texture:"#0"},south:{uv:[14,2.5,13.75,3.75],texture:"#0"},west:{uv:[13.75,2.5,12.75,3.75],texture:"#0"},up:{uv:[14,1.5,13.75,2.5],texture:"#0"},down:{uv:[14.25,1.5,14,2.5],texture:"#0"}}}]).getMesh(F,yt.none())}n.piglinHeadRenderer=a;function o(L){return F=>new ht(void 0,{0:L.withPrefix("entity/signs/").toString()},[{from:[-4,8,7],to:[20,20,9],faces:{north:{uv:[0,0,12,6],texture:"#0"},east:{uv:[12,1,13,7],texture:"#0"},south:{uv:[0,8,12,14],texture:"#0"},west:{uv:[12,1,13,7],texture:"#0"},up:{uv:[0,0,12,.5],texture:"#0"},down:{uv:[0,5.5,12,6],texture:"#0"}}},{from:[7,-6,7],to:[9,8,9],faces:{north:{uv:[14,8,15,15],texture:"#0"},east:{uv:[15,8,16,15],texture:"#0"},south:{uv:[14,8,15,15],texture:"#0"},west:{uv:[15,8,16,15],texture:"#0"},up:{uv:[14,7.5,15,8],texture:"#0"},down:{uv:[15,7.5,16,8],texture:"#0"}}}]).getMesh(F,yt.none())}n.signRenderer=o;function c(L){return F=>new ht(void 0,{0:L.withPrefix("entity/signs/").toString()},[{from:[-4,4,17],to:[20,16,19],faces:{north:{uv:[0,0,12,6],texture:"#0"},east:{uv:[12,1,13,7],texture:"#0"},south:{uv:[0,8,12,14],texture:"#0"},west:{uv:[12,1,13,7],texture:"#0"},up:{uv:[0,0,12,.5],texture:"#0"},down:{uv:[0,5.5,12,6],texture:"#0"}}}]).getMesh(F,yt.none())}n.wallSignRenderer=c;function l(L){return(F,j)=>{const G=[14,4,16,6];return new ht(void 0,{0:L.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{south:{uv:[1,8,8,13],texture:"#0"},west:{uv:[0,8,1,13],texture:"#0"},north:{uv:[9,8,16,13],texture:"#0"},east:{uv:[8,8,9,13],texture:"#0"},up:{uv:[1,7,8,8],texture:"#0"},down:{uv:[1,7,8,8],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,12,8],rotation:{angle:-45,axis:"y",origin:[3,11,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,11,8],to:[4.5,15,8],rotation:{angle:45,axis:"y",origin:[3,13,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,14,8],to:[4.5,16,8],rotation:{angle:-45,axis:"y",origin:[3,15,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,12,8],rotation:{angle:-45,axis:"y",origin:[13,11,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,11,8],to:[14.5,15,8],rotation:{angle:45,axis:"y",origin:[13,13,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,14,8],to:[14.5,16,8],rotation:{angle:-45,axis:"y",origin:[13,15,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}}]).getMesh(j,yt.none())}}n.hangingSignRenderer=l;function u(L){return F=>{const j=[14,4,16,6];return new ht(void 0,{0:`entity/signs/hanging/${L}`},[{from:[1,0,7],to:[15,10,9],faces:{south:{uv:[1,8,8,13],texture:"#0"},west:{uv:[0,8,1,13],texture:"#0"},north:{uv:[9,8,16,13],texture:"#0"},east:{uv:[8,8,9,13],texture:"#0"},up:{uv:[1,7,8,8],texture:"#0"},down:{uv:[1,7,8,8],texture:"#0"}}},{from:[0,14,6],to:[16,16,10],faces:{north:{uv:[0,2,8,3],texture:"#0"},east:{uv:[8,2,10,3],texture:"#0"},south:{uv:[0,2,8,3],texture:"#0"},west:{uv:[8,2,10,3],texture:"#0"},up:{uv:[0,0,8,1],texture:"#0"},down:{uv:[0,1,8,2],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,12,8],rotation:{angle:45,axis:"y",origin:[3,11,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,11,8],to:[4.5,14,8],rotation:{angle:-45,axis:"y",origin:[3,12.5,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,12,8],rotation:{angle:45,axis:"y",origin:[13,11,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,11,8],to:[14.5,14,8],rotation:{angle:-45,axis:"y",origin:[13,12.5,8]},faces:{north:{uv:j,texture:"#0"},south:{uv:j,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}}]).getMesh(F,yt.none())}}n.wallHangingSignRenderer=u;function f(L){return new ht(void 0,{0:"entity/conduit/base"},[{from:[5,5,5],to:[11,11,11],faces:{north:{uv:[3,6,6,12],texture:"#0"},east:{uv:[0,6,3,12],texture:"#0"},south:{uv:[9,6,12,12],texture:"#0"},west:{uv:[6,6,9,12],texture:"#0"},up:{uv:[6,6,3,0],texture:"#0"},down:{uv:[9,0,6,6],texture:"#0"}}}]).getMesh(L,yt.none())}n.conduitRenderer=f;function d(L){return F=>new ht(void 0,{0:L.withPrefix("entity/shulker/").toString()},[{from:[0,0,0],to:[16,8,16],faces:{north:{uv:[4,11,8,13],texture:"#0"},east:{uv:[0,11,4,13],texture:"#0"},south:{uv:[12,11,16,13],texture:"#0"},west:{uv:[8,11,12,13],texture:"#0"},up:{uv:[8,11,4,7],texture:"#0"},down:{uv:[12,7,8,11],texture:"#0"}}},{from:[0,4,0],to:[16,16,16],faces:{north:{uv:[4,4,8,7],texture:"#0"},east:{uv:[0,4,4,7],texture:"#0"},south:{uv:[12,4,16,7],texture:"#0"},west:{uv:[8,4,12,7],texture:"#0"},up:{uv:[8,4,4,0],texture:"#0"},down:{uv:[12,0,8,4],texture:"#0"}}}]).getMesh(F,yt.none())}n.shulkerBoxRenderer=d;const h=L=>({north:{uv:[.25,.25,5.25,10.25],texture:`#${L}`,tintindex:L},east:{uv:[0,.25,.25,10.25],texture:`#${L}`,tintindex:L},south:{uv:[5.5,.25,10.5,10.25],texture:`#${L}`,tintindex:L},west:{uv:[5.25,.25,5.5,10.25],texture:`#${L}`,tintindex:L},up:{uv:[5.25,.25,.25,0],texture:`#${L}`,tintindex:L},down:{uv:[10.25,0,5.25,.25],texture:`#${L}`,tintindex:L}});function g(L,F){return(j,G)=>{const W={0:"entity/banner_base"},J=[...F.base],Q=[L];return G==null||G.forEach((de,ve)=>{const V=ee.parse(de.getString("pattern")).path,ie=de.getString("color");ve++,W[ve]=`entity/banner/${V}`,J.push(F.pattern(ve)),Q.push(ie)}),new ht(void 0,W,J).getMesh(j,yt.none(),de=>vs[Q[de]])}}n.bannerRenderer=L=>g(L,{base:[{from:[-2,-8,6],to:[18,32,7],faces:h(0)},{from:[7,-12,7],to:[9,30,9],faces:{north:{uv:[11.5,.5,12,11],texture:"#0"},east:{uv:[11,.5,11.5,11],texture:"#0"},south:{uv:[12.5,.5,13,11],texture:"#0"},west:{uv:[12,.5,12.5,11],texture:"#0"},up:{uv:[12,.5,11.5,0],texture:"#0"},down:{uv:[12.5,0,12,.5],texture:"#0"}}},{from:[-2,30,7],to:[18,32,9],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:F=>({from:[-2,-8,6],to:[18,32,7],faces:h(F)})}),n.wallBannerRenderer=L=>g(L,{base:[{from:[-2,-8,-1.5],to:[18,32,-.5],faces:h(0)},{from:[-2,30,-3.5],to:[18,32,-1.5],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:F=>({from:[-2,-8,-1.5],to:[18,32,-.5],faces:h(F)})});function _(L){return new ht(void 0,{0:"entity/bell/bell_body"},[{from:[5,3,5],to:[11,10,11],faces:{north:{uv:[3,3,6,6.5],texture:"#0"},east:{uv:[0,3,3,6.5],texture:"#0"},south:{uv:[9,3,12,6.5],texture:"#0"},west:{uv:[6,3,9,6.5],texture:"#0"},up:{uv:[6,3,3,0],texture:"#0"},down:{uv:[9,0,6,3],texture:"#0"}}},{from:[4,10,4],to:[12,12,12],faces:{north:{uv:[4,10.5,8,11.5],texture:"#0"},east:{uv:[0,10.5,4,11.5],texture:"#0"},south:{uv:[12,10.5,16,11.5],texture:"#0"},west:{uv:[8,10.5,12,11.5],texture:"#0"},up:{uv:[8,10.5,4,6.5],texture:"#0"},down:{uv:[12,6.5,8,10.5],texture:"#0"}}}]).getMesh(L,yt.none())}n.bellRenderer=_;function m(L){return(F,j)=>F==="foot"?new ht(void 0,{0:L.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{north:{uv:[5.5,5.5,9.5,7],rotation:180,texture:"#0"},east:{uv:[0,7,1.5,11],rotation:270,texture:"#0"},west:{uv:[5.5,7,7,11],rotation:90,texture:"#0"},up:{uv:[5.5,11,1.5,7],texture:"#0"},down:{uv:[11,7,7,11],texture:"#0"}}},{from:[0,0,0],to:[3,3,3],faces:{north:{uv:[12.5,5.25,13.25,6],texture:"#0"},east:{uv:[14.75,5.25,15.5,6],texture:"#0"},south:{uv:[14,5.25,14.75,6],texture:"#0"},west:{uv:[13.25,5.25,14,6],texture:"#0"},up:{uv:[13.25,4.5,14,5.25],texture:"#0"},down:{uv:[14,4.5,14.75,5.25],texture:"#0"}}},{from:[13,0,0],to:[16,3,3],faces:{north:{uv:[13.25,3.75,14,4.5],texture:"#0"},east:{uv:[12.5,3.75,13.25,4.5],texture:"#0"},south:{uv:[14.75,3.75,15.5,4.5],texture:"#0"},west:{uv:[14,3.75,14.75,4.5],texture:"#0"},up:{uv:[13.25,3,14,3.75],texture:"#0"},down:{uv:[14,3,14.75,3.75],texture:"#0"}}}]).getMesh(j,yt.none()):new ht(void 0,{0:L.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{east:{uv:[0,1.5,1.5,5.5],rotation:270,texture:"#0"},south:{uv:[1.5,0,5.5,1.5],rotation:180,texture:"#0"},west:{uv:[5.5,1.5,7,5.5],rotation:90,texture:"#0"},up:{uv:[5.5,5.5,1.5,1.5],texture:"#0"},down:{uv:[11,1.5,7,5.5],texture:"#0"}}},{from:[0,0,13],to:[3,3,16],faces:{north:{uv:[14.75,.75,15.5,1.5],texture:"#0"},east:{uv:[14,.75,14.75,1.5],texture:"#0"},south:{uv:[13.25,.75,14,1.5],texture:"#0"},west:{uv:[12.5,.75,13.25,1.5],texture:"#0"},up:{uv:[13.25,0,14,.75],texture:"#0"},down:{uv:[14,0,14.75,.75],texture:"#0"}}},{from:[13,0,13],to:[16,3,16],faces:{north:{uv:[14,2.25,14.75,3],texture:"#0"},east:{uv:[13.25,2.25,14,3],texture:"#0"},south:{uv:[12.5,2.25,13.25,3],texture:"#0"},west:{uv:[14.75,2.25,15.5,3],texture:"#0"},up:{uv:[13.25,1.5,14,2.25],texture:"#0"},down:{uv:[14,1.5,14.75,2.25],texture:"#0"}}}]).getMesh(j,yt.none())}n.bedRenderer=m;function p(L,F,j=""){return L.getProperty(F)??j}function M(L,F,j="0"){return parseInt(L.getProperty(F)??j)}const x=new Map(Object.entries({"minecraft:chest":n.chestRenderer(ee.create("normal")),"minecraft:ender_chest":n.chestRenderer(ee.create("ender")),"minecraft:trapped_chest":n.chestRenderer(ee.create("trapped"))})),y=new Map(Object.entries({"minecraft:skeleton_skull":n.headRenderer(ee.create("skeleton/skeleton"),2),"minecraft:wither_skeleton_skull":n.headRenderer(ee.create("skeleton/wither_skeleton"),2),"minecraft:zombie_head":n.headRenderer(ee.create("zombie/zombie"),1),"minecraft:creeper_head":n.headRenderer(ee.create("creeper/creeper"),2),"minecraft:dragon_head":n.dragonHeadRenderer(),"minecraft:piglin_head":n.piglinHeadRenderer(),"minecraft:player_head":n.headRenderer(ee.create("player/wide/steve"),1)})),R=["oak","spruce","birch","jungle","acacia","dark_oak","crimson","warped","mangrove","bamboo","cherry","pale_oak","poplar"],C=new Map(R.map(L=>[`minecraft:${L}_sign`,n.signRenderer(ee.create(L))])),E=new Map(R.map(L=>[`minecraft:${L}_wall_sign`,n.wallSignRenderer(ee.create(L))])),T=new Map(R.map(L=>[`minecraft:${L}_hanging_sign`,n.hangingSignRenderer(ee.create(L))])),w=new Map(R.map(L=>[`minecraft:${L}_wall_hanging_sign`,n.wallHangingSignRenderer(L)])),v=new Map(Object.keys(vs).map(L=>[`minecraft:${L}_shulker_box`,n.shulkerBoxRenderer(ee.create(`shulker_${L}`))])),D=new Map(Object.keys(vs).map(L=>[`minecraft:${L}_bed`,n.bedRenderer(ee.create(L))])),O=new Map(Object.keys(vs).map(L=>[`minecraft:${L}_banner`,n.bannerRenderer(L)])),U=new Map(Object.keys(vs).map(L=>[`minecraft:${L}_wall_banner`,n.wallBannerRenderer(L)]));function k(L,F,j,G){const W=new ft;L.is("water")&&W.merge(bl("water",M(L,"level"),j,G,0)),L.is("lava")&&W.merge(bl("lava",M(L,"level"),j,G));const J=x.get(L.getName().toString());if(J!==void 0){const he=p(L,"facing","south"),Z=ot();qe(Z,Z,[8,8,8]),Gt(Z,Z,he==="west"?Math.PI/2:he==="south"?Math.PI:he==="east"?Math.PI*3/2:0),qe(Z,Z,[-8,-8,-8]),W.merge(J(j).transform(Z))}L.is("decorated_pot")&&W.merge(t(j));const Q=y.get(L.getName().toString());if(Q!==void 0){const he=M(L,"rotation")/16*Math.PI*2,Z=ot();qe(Z,Z,[8,8,8]),Gt(Z,Z,he),qe(Z,Z,[-8,-8,-8]),W.merge(Q(j).transform(Z))}const de=C.get(L.getName().toString());if(de!==void 0){const he=M(L,"rotation")/16*Math.PI*2,Z=ot();qe(Z,Z,[8,8,8]),Gt(Z,Z,he),bn(Z,Z,[2/3,2/3,2/3]),qe(Z,Z,[-8,-8,-8]),W.merge(de(j).transform(Z))}const ve=E.get(L.getName().toString());if(ve!==void 0){const he=p(L,"facing","south"),Z=ot();qe(Z,Z,[8,8,8]),Gt(Z,Z,he==="west"?Math.PI/2:he==="south"?Math.PI:he==="east"?Math.PI*3/2:0),bn(Z,Z,[2/3,2/3,2/3]),qe(Z,Z,[-8,-8,-8]),W.merge(ve(j).transform(Z))}const V=T.get(L.getName().toString());if(V!==void 0){const he=p(L,"attached","false")==="true",Z=M(L,"rotation")/16*Math.PI*2,De=ot();qe(De,De,[8,8,8]),Gt(De,De,Z),qe(De,De,[-8,-8,-8]),W.merge(V(he,j).transform(De))}const ie=w.get(L.getName().toString());if(ie!==void 0){const he=p(L,"facing","south"),Z=ot();qe(Z,Z,[8,8,8]),Gt(Z,Z,he==="west"?Math.PI/2:he==="south"?Math.PI:he==="east"?Math.PI*3/2:0),qe(Z,Z,[-8,-8,-8]),W.merge(ie(j).transform(Z))}L.is("conduit")&&W.merge(f(j));const ue=v.get(L.getName().toString());if(ue!==void 0){const he=p(L,"facing","up"),Z=ot();qe(Z,Z,[8,8,8]),he==="down"?Os(Z,Z,Math.PI):he!=="up"&&(Gt(Z,Z,he==="east"?Math.PI/2:he==="north"?Math.PI:he==="west"?Math.PI*3/2:0),Os(Z,Z,Math.PI/2)),qe(Z,Z,[-8,-8,-8]),W.merge(ue(j).transform(Z))}if(L.is("bell")){const he=ot();qe(he,he,[8,8,8]),bn(he,he,[1,-1,-1]),qe(he,he,[-8,-8,-8]),W.merge(_(j).transform(he))}const oe=D.get(L.getName().toString());if(oe!==void 0){const he=p(L,"part","head"),Z=p(L,"facing","south"),De=ot();qe(De,De,[8,8,8]),Gt(De,De,Z==="east"?Math.PI/2:Z==="north"?Math.PI:Z==="west"?Math.PI*3/2:0),qe(De,De,[-8,-8,-8]),W.merge(oe(he,j).transform(De))}const we=O.get(L.getName().toString());if(we!==void 0){const he=M(L,"rotation")/16*Math.PI*2,Z=ot();qe(Z,Z,[8,24,8]),Gt(Z,Z,he),bn(Z,Z,[2/3,2/3,2/3]),qe(Z,Z,[-8,-24,-8]),W.merge(we(j,F==null?void 0:F.getList("patterns",fe.Compound)).transform(Z))}const Se=U.get(L.getName().toString());if(Se!==void 0){const he=p(L,"facing","south"),Z=ot();qe(Z,Z,[8,8,8]),Gt(Z,Z,he==="east"?Math.PI/2:he==="north"?Math.PI:he==="west"?Math.PI*3/2:0),bn(Z,Z,[2/3,2/3,2/3]),qe(Z,Z,[-8,-23.2,-8]),W.merge(Se(j,F==null?void 0:F.getList("patterns",fe.Compound)).transform(Z))}!L.is("water")&&!L.is("lava")&&L.isWaterlogged()&&W.merge(bl("water",0,j,G,0));const N=ot();return bn(N,N,[.0625,.0625,.0625]),W.transform(N)}C.clear(),E.clear(),T.clear(),w.clear(),R.forEach(L=>{C.set(`minecraft:${L}_sign`,n.signRenderer(ee.create(L))),E.set(`minecraft:${L}_wall_sign`,n.wallSignRenderer(ee.create(L))),T.set(`minecraft:${L}_hanging_sign`,n.hangingSignRenderer(ee.create(L))),w.set(`minecraft:${L}_wall_hanging_sign`,n.wallHangingSignRenderer(L))}),n.getBlockMesh=k})(et||(et={}));class Wr{constructor(e,t,i,r=16,s=!0){P(this,"gl");P(this,"structure");P(this,"resources");P(this,"chunks",[]);P(this,"chunkSize");P(this,"meshesDirty",!0);P(this,"meshCache",[]);P(this,"emissiveLights",[]);P(this,"emissiveLightsByChunk",new Map);P(this,"emissiveDirty",!0);P(this,"blockPropsCache",new WeakMap);P(this,"buildToken",0);this.gl=e,this.structure=t,this.resources=i,this.chunkSize=typeof r=="number"?[r,r,r]:r,s&&this.updateStructureBuffers()}setStructure(e,t){this.structure=e,(t==null?void 0:t.rebuild)!==!1&&this.updateStructureBuffers()}updateStructureBuffers(e){if(!this.structure)return;this.buildToken+=1;const t=this.buildChunkFilter(e);this.markDirty(),this.prepareRebuild(e);for(const i of this.structure.getBlocks())this.processBlock(i,t);this.finalizeRebuild(e)}async updateStructureBuffersAsync(e){var c,l;if(!this.structure)return;const t=++this.buildToken,i=this.buildChunkFilter(e==null?void 0:e.chunkPositions);this.markDirty(),this.prepareRebuild(e==null?void 0:e.chunkPositions);const r=this.structure.getBlocks(),s=r.length,a=(e==null?void 0:e.timeSliceMs)??8;let o=this.now();for(let u=0;u<r.length;u++){if(t!==this.buildToken)return;this.processBlock(r[u],i),!(u&1023)&&this.now()-o>=a&&((c=e==null?void 0:e.onProgress)==null||c.call(e,u+1,s),await this.yieldControl(),o=this.now())}t===this.buildToken&&(await this.finalizeRebuildAsync(e==null?void 0:e.chunkPositions,a),(l=e==null?void 0:e.onProgress)==null||l.call(e,s,s))}getMeshes(){return this.getMeshEntries().map(e=>e.mesh)}cancelPendingBuilds(){this.buildToken+=1}getMeshesInRange(e,t){return this.getMeshEntriesInRange(e,t).map(i=>i.mesh)}getMeshEntries(){return(this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),this.meshCache}getMeshEntriesInRange(e,t){if((this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),t===void 0)return this.meshCache;const i=t*t;return this.meshCache.filter(s=>{const a=[s.origin[0]+this.chunkSize[0]*.5,s.origin[1]+this.chunkSize[1]*.5,s.origin[2]+this.chunkSize[2]*.5],o=a[0]-e[0],c=a[1]-e[1],l=a[2]-e[2];return o*o+c*c+l*l<=i})}needsCull(e,t){var s;const i=(s=this.structure.getBlock(At.towards(e.pos,t)))==null?void 0:s.state;if(!i)return!1;const r=this.resources.getBlockFlags(i.getName());return e.state.getName().equals(i.getName())&&(r!=null&&r.self_culling)?!0:r!=null&&r.opaque?!(t===Ne.UP&&e.state.isWaterlogged()):e.state.isWaterlogged()&&i.isWaterlogged()}isFullyOccluded(e){var i;const t=[Ne.UP,Ne.DOWN,Ne.NORTH,Ne.SOUTH,Ne.EAST,Ne.WEST];for(const r of t){const s=(i=this.structure.getBlock(At.towards(e.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=this.resources.getBlockFlags(s.getName());if(!(a!=null&&a.opaque))return!1}return!0}finishChunkMesh(e,t,i,r,s){const a=ot();qe(a,a,t),e.transform(a);const o=this.resources.getBlockFlags(i);let c=0;if(o!=null&&o.emissive){const l=o.emissiveConditional;if(l){const u=r[l];(u===void 0||u==="true")&&(c=o.emissiveIntensity??1)}else c=o.emissiveIntensity??1}if(c>0){const l=this.emissiveLightsByChunk.get(s)??[];l.push({position:[t[0]+.5,t[1]+.5,t[2]+.5],intensity:c,color:[1,.85,.6]}),this.emissiveLightsByChunk.set(s,l),this.emissiveDirty=!0}for(const l of e.quads){const u=l.normal();l.forEach(f=>{f.normal=u,f.blockPos=new Ut(t[0],t[1],t[2]),f.emissive=c})}}getEmissiveLights(){if(this.emissiveDirty){const e=[];this.emissiveLightsByChunk.forEach(t=>e.push(...t)),this.emissiveLights=e,this.emissiveDirty=!1}return this.emissiveLights}clearEmissiveLights(e){const t=this.chunkKey(e);this.emissiveLightsByChunk.has(t)&&(this.emissiveLightsByChunk.delete(t),this.emissiveDirty=!0)}prepareRebuild(e){if(!e){this.emissiveLightsByChunk.clear(),this.emissiveLights=[],this.emissiveDirty=!0,this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.clear(),r.transparentMesh.clear())})));return}e.forEach(t=>this.clearEmissiveLights(t)),e.forEach(t=>{const i=this.getChunk(t);i.mesh.clear(),i.transparentMesh.clear()})}finalizeRebuild(e){if(!e){this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),r.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}))})));return}e.forEach(t=>{const i=this.getChunk(t);i.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),i.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW})})}async finalizeRebuildAsync(e,t=8){let i=this.now();const r=async()=>{this.now()-i>=t&&(await this.yieldControl(),i=this.now())};if(!e){for(const s of this.chunks)if(s){for(const a of s)if(a)for(const o of a)o&&(o.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),o.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r())}return}for(const s of e){const a=this.getChunk(s);a.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),a.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r()}}processBlock(e,t){var c;const i=e.state.getName(),r=this.getBlockProps(e.state);if(this.isFullyOccluded(e))return;const s=[Math.floor(e.pos[0]/this.chunkSize[0]),Math.floor(e.pos[1]/this.chunkSize[1]),Math.floor(e.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(t&&!t.has(a))return;const o=this.getChunk(s);try{const l=this.resources.getBlockDefinition(i),u={up:this.needsCull(e,Ne.UP),down:this.needsCull(e,Ne.DOWN),west:this.needsCull(e,Ne.WEST),east:this.needsCull(e,Ne.EAST),north:this.needsCull(e,Ne.NORTH),south:this.needsCull(e,Ne.SOUTH)},f=new ft;l&&f.merge(l.getMesh(i,r,this.resources,this.resources,u));const d=et.getBlockMesh(e.state,e.nbt,this.resources,u);d.isEmpty()||f.merge(d),f.isEmpty()||(this.finishChunkMesh(f,e.pos,i,r,a),(c=this.resources.getBlockFlags(e.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(f):o.mesh.merge(f))}catch(l){console.error(`Error rendering block ${i}`,l)}}getBlockProps(e){const t=this.blockPropsCache.get(e);if(t)return t;const i={...e.getProperties()},r=this.resources.getDefaultBlockProperties(e.getName())??{};return Object.entries(r).forEach(([s,a])=>{i[s]===void 0&&(i[s]=a)}),this.blockPropsCache.set(e,i),i}buildChunkFilter(e){if(!e)return null;const t=new Set;return e.forEach(i=>{t.add(this.chunkKey(i))}),t}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}chunkKey(e){return`${e[0]},${e[1]},${e[2]}`}getChunk(e){const t=Math.abs(e[0])*2+(e[0]<0?1:0),i=Math.abs(e[1])*2+(e[1]<0?1:0),r=Math.abs(e[2])*2+(e[2]<0?1:0);if(this.chunks[t]||(this.chunks[t]=[]),this.chunks[t][i]||(this.chunks[t][i]=[]),!this.chunks[t][i][r]){const s=[e[0]*this.chunkSize[0],e[1]*this.chunkSize[1],e[2]*this.chunkSize[2]];this.chunks[t][i][r]={mesh:new ft,transparentMesh:new ft,origin:s}}return this.chunks[t][i][r]}rebuildMeshCache(){const e=[],t=[];this.chunks.forEach(i=>i.forEach(r=>r.forEach(s=>{s&&(s.mesh.isEmpty()||e.push({mesh:s.mesh,origin:s.origin,transparent:!1}),s.transparentMesh.isEmpty()||t.push({mesh:s.transparentMesh,origin:s.origin,transparent:!0}))}))),this.meshCache=e.concat(t),this.meshesDirty=!1}markDirty(){this.meshesDirty=!0,this.meshCache=[]}}class yd{constructor(e,t,i){P(this,"gl");P(this,"program");this.gl=e,this.program=this.initShaderProgram(t,i)}getProgram(){return this.program}initShaderProgram(e,t){const i=this.loadShader(this.gl.VERTEX_SHADER,e);if(!i)throw new Error("Failed to create vertex shader");const r=this.loadShader(this.gl.FRAGMENT_SHADER,t);if(!r)throw new Error("Failed to create fragment shader");const s=this.gl.createProgram();if(!s)throw new Error("Failed to create shader program");if(this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS))throw new Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(s)}`);return s}loadShader(e,t){const i=this.gl.createShader(e);if(!i)throw new Error("Failed to create shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)){const r=new Error(`Compiling ${e===this.gl.VERTEX_SHADER?"vertex":"fragment"} shader: ${this.gl.getShaderInfoLog(i)}`);throw this.gl.deleteShader(i),r}return i}}const TS=`
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
`,AS=`
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
`;class Sd{constructor(e){P(this,"gl");P(this,"shaderProgram");P(this,"projMatrix");P(this,"activeShader");P(this,"pixelSize",0);this.gl=e,this.shaderProgram=new yd(e,TS,AS).getProgram(),this.activeShader=this.shaderProgram,this.projMatrix=this.getPerspective(),this.initialize()}setViewport(e,t,i,r){this.gl.viewport(e,t,i,r),this.projMatrix=this.getPerspective()}getPerspective(){const e=70*Math.PI/180,t=this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,i=ot();return oS(i,e,t,.1,500),i}initialize(){this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK)}setShader(e){this.gl.useProgram(e),this.activeShader=e}setVertexAttr(e,t,i){if(i===void 0)throw new Error(`Expected buffer for ${e}`);const r=this.gl.getAttribLocation(this.activeShader,e);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.vertexAttribPointer(r,t,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(r)}setUniform(e,t){const i=this.gl.getUniformLocation(this.activeShader,e);this.gl.uniformMatrix4fv(i,!1,t)}setTexture(e,t){this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.pixelSize=t??0}createAtlasTexture(e){const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture");return this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),t}prepareDraw(e){this.setUniform("mView",e),this.setUniform("mProj",this.projMatrix);const t=this.gl.getUniformLocation(this.activeShader,"pixelSize");this.gl.uniform1f(t,this.pixelSize)}drawMesh(e,t){if(e.quadVertices()>0){if(t.pos&&this.setVertexAttr("vertPos",3,e.posBuffer),t.color&&this.setVertexAttr("vertColor",3,e.colorBuffer),t.texture&&(this.setVertexAttr("texCoord",2,e.textureBuffer),this.setVertexAttr("texLimit",4,e.textureLimitBuffer)),t.normal&&this.setVertexAttr("normal",3,e.normalBuffer),t.blockPos&&this.setVertexAttr("blockPos",3,e.blockPosBuffer),!e.indexBuffer)throw new Error("Expected index buffer");this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,e.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,e.quadIndices(),e.indexType??this.gl.UNSIGNED_SHORT,0)}e.lineVertices()>0&&(t.pos&&this.setVertexAttr("vertPos",3,e.linePosBuffer),t.color&&this.setVertexAttr("vertColor",3,e.lineColorBuffer),this.gl.drawArrays(this.gl.LINES,0,e.lineVertices()))}}class xo extends Sd{constructor(t,i,r,s={}){super(t);P(this,"item");P(this,"resources");P(this,"mesh");P(this,"atlasTexture");this.item=i,this.resources=r,this.updateMesh(s),this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas())}setItem(t,i={}){this.item=t,this.updateMesh(i)}updateMesh(t={}){this.mesh=xo.getItemMesh(this.item,this.resources,t),this.mesh.computeNormals(),this.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0})}static getItemMesh(t,i,r){var c;const s=(c=t.getComponent("item_model",i))==null?void 0:c.getAsString();if(s===void 0)return new ft;const a=i.getItemModel(ee.parse(s));if(!a)throw new Error(`Item model ${s} does not exist (defined by item ${t.toString()})`);return a.getMesh(t,i,r)}getPerspective(){const t=ot();return cS(t,0,16,0,16,.1,500),t}drawItem(){var i,r;const t=ot();qe(t,t,[0,0,-32]),this.setShader(this.shaderProgram),this.setTexture(this.atlasTexture,(r=(i=this.resources).getPixelSize)==null?void 0:r.call(i)),this.prepareDraw(t),this.drawMesh(this.mesh,{pos:!0,color:!0,texture:!0,normal:!0})}}const ji=[0,0,0];var so;(function(n){function e(u){var h;const f=te.readObject(u)??{},d=(h=te.readString(f.type))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"constant":return new t($e.fromJson(f.value)??ji);case"dye":return new i($e.fromJson(f.default)??ji);case"grass":return new r(te.readNumber(f.temperature)??0,te.readNumber(f.downfall)??0);case"firework":return new s($e.fromJson(f.default)??ji);case"potion":return new a($e.fromJson(f.default)??ji);case"map_color":return new o($e.fromJson(f.default)??ji);case"custom_model_data":return new c(te.readInt(f.index)??0,$e.fromJson(f.default)??ji);case"team":return new l($e.fromJson(f.default)??ji);default:throw new Error(`Invalid item tint type ${d}`)}}n.fromJson=e;class t{constructor(f){P(this,"value");this.value=f}getTint(f){return this.value}}n.Constant=t;class i{constructor(f){P(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("dyed_color",d);return h?h.isCompound()?$e.intToRgb(h.getNumber("rgb")):$e.intToRgb(h.getAsNumber()):this.default_color}}n.Dye=i;class r{constructor(f,d){P(this,"temperature");P(this,"downfall");this.temperature=f,this.downfall=d}getTint(f){return[124/255,189/255,107/255]}}n.Grass=r;class s{constructor(f){P(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("firework_explosion",d);if(!(h!=null&&h.isCompound()))return this.default_color;const g=h.get("colors");return!g||!g.isListOrArray()?this.default_color:(()=>{if(g.length===1){const x=g.get(0);return x?$e.intToRgb(x.getAsNumber()):this.default_color}let[m,p,M]=[0,0,0];for(const x of g.getItems())m+=(x.getAsNumber()&16711680)>>16,p+=(x.getAsNumber()&65280)>>8,M+=(x.getAsNumber()&255)>>0;return m/=g.length,p/=g.length,M/=g.length,[m/255,p/255,M/255]})()}}n.Firework=s;class a{constructor(f){P(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("potion_contents",d);if(!h)return this.default_color;const g=Fs.fromNbt(h);return Fs.getColor(g)}}n.Potion=a;class o{constructor(f){P(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("map_color",d);return h?$e.intToRgb(h.getAsNumber()):this.default_color}}n.MapColor=o;class c{constructor(f,d){P(this,"index");P(this,"default_color");this.index=f,this.default_color=d}getTint(f,d){const h=f.getComponent("custom_model_data",d);if(!(h!=null&&h.isCompound()))return this.default_color;const g=h.getList("colors").get(this.index);return g?$e.fromNbt(g)??this.default_color:this.default_color}}n.CustomModelData=c;class l{constructor(f){P(this,"default_color");this.default_color=f}getTint(f,d,h){return h.context_entity_team_color??this.default_color}}n.Team=l})(so||(so={}));var Zl;(function(n){function e(h){var m;const g=te.readObject(h)??{},_=(m=te.readString(g.type))==null?void 0:m.replace(/^minecraft:/,"");switch(_){case"bed":return new t(ee.parse(te.readString(g.texture)??""));case"banner":return new i(te.readString(g.color)??"");case"conduit":return new r;case"chest":return new s(ee.parse(te.readString(g.texture)??""),te.readNumber(g.openness)??0);case"head":return new a(te.readString(g.kind)??"",typeof g.texture=="string"?ee.parse(g.texture):void 0,te.readNumber(g.animation)??0);case"player_head":return new a("player",void 0,0);case"shulker_box":return new o(ee.parse(te.readString(g.texture)??""),te.readNumber(g.openness)??0,te.readString(g.orientation)??"up");case"shield":return new c;case"trident":return new l;case"decorated_pot":return new u;case"standing_sign":return new f(te.readString(g.wood_type)??"",typeof g.texture=="string"?ee.parse(g.texture):void 0);case"hanging_sign":return new d(te.readString(g.wood_type)??"",typeof g.texture=="string"?ee.parse(g.texture):void 0);default:return console.warn(`[lodestone]: Unknown special model ${_}`),{getMesh:()=>new ft}}}n.fromJson=e;class t{constructor(g){P(this,"renderer");this.renderer=et.bedRenderer(g)}getMesh(g,_){const m=this.renderer("head",_),p=this.renderer("foot",_),M=ot();return qe(M,M,[0,0,-16]),m.merge(p.transform(M))}}class i{constructor(g){P(this,"renderer");this.renderer=et.bannerRenderer(g)}getMesh(g,_){const m=g.getComponent("banner_patterns",void 0),p=ot();return qe(p,p,[8,24,8]),Gt(p,p,Math.PI),bn(p,p,[2/3,2/3,2/3]),qe(p,p,[-8,-24,-8]),this.renderer(_,m instanceof jt?m:void 0).transform(p)}}class r{getMesh(g,_){return et.conduitRenderer(_)}}class s{constructor(g,_){P(this,"renderer");this.renderer=et.chestRenderer(g)}getMesh(g,_){const m=ot();return qe(m,m,[8,8,8]),Gt(m,m,Math.PI),qe(m,m,[-8,-8,-8]),this.renderer(_).transform(m)}}class a{constructor(g,_,m){P(this,"renderer");this.renderer=({skeleton:()=>et.headRenderer(_??ee.create("skeleton/skeleton"),2),wither_skeleton:()=>et.headRenderer(_??ee.create("skeleton/wither_skeleton"),2),zombie:()=>et.headRenderer(_??ee.create("zombie/zombie"),1),creeper:()=>et.headRenderer(_??ee.create("creeper/creeper"),2),dragon:()=>et.dragonHeadRenderer(_),piglin:()=>et.piglinHeadRenderer(_),player:()=>et.headRenderer(_??ee.create("player/wide/steve"),1)}[g]??(()=>()=>new ft))()}getMesh(g,_){return this.renderer(_)}}class o{constructor(g,_,m){P(this,"renderer");this.renderer=et.shulkerBoxRenderer(g)}getMesh(g,_){return this.renderer(_)}}class c{getMesh(g,_){const m=et.shieldRenderer(_),p=ot();return qe(p,p,[-3,1,0]),Os(p,p,-10*Math.PI/180),Gt(p,p,-10*Math.PI/180),pd(p,p,-5*Math.PI/180),m.transform(p)}}class l{getMesh(g,_){return new ft}}class u{getMesh(g,_){return et.decoratedPotRenderer(_)}}class f{constructor(g,_){P(this,"renderer");this.renderer=et.signRenderer(_??ee.create(g))}getMesh(g,_){return this.renderer(_)}}class d{constructor(g,_){P(this,"renderer");this.renderer=et.hangingSignRenderer(_??ee.create(g))}getMesh(g,_){return this.renderer(!1,_)}}})(Zl||(Zl={}));const Oh=new ft;var Kl;(function(n){function e(u){var h,g;const f=te.readObject(u)??{},d=(h=te.readString(f.type))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"empty":return new t;case"model":return new i(ee.parse(te.readString(f.model)??""),te.readArray(f.tints,so.fromJson)??[]);case"composite":return new r(te.readArray(f.models,n.fromJson)??[]);case"condition":return new s(s.propertyFromJson(f),n.fromJson(f.on_true),n.fromJson(f.on_false));case"select":return new a(a.propertyFromJson(f),new Map((g=te.readArray(f.cases,_=>te.readObject(_)??{}))==null?void 0:g.flatMap(_=>{const m=n.fromJson(_.model);return Array.isArray(_.when)?_.when.map(p=>[te.readString(p)??"",m]):[[te.readString(_.when)??"",m]]})),f.fallback?n.fromJson(f.fallback):void 0);case"range_dispatch":return new o(o.propertyFromJson(f),te.readNumber(f.scale)??1,te.readArray(f.entries,_=>{const m=te.readObject(_)??{};return{threshold:te.readNumber(m.threshold)??0,model:n.fromJson(m.model)}})??[],f.fallback?n.fromJson(f.fallback):void 0);case"special":return new c(Zl.fromJson(f.model),ee.parse(te.readString(f.base)??""));case"bundle/selected_item":return new l;default:return console.warn(`[lodestone]: Unknown item model type '${d}'`),{getMesh:()=>new ft}}}n.fromJson=e;class t{getMesh(f,d,h){return new ft}}n.Empty=t;class i{constructor(f,d){P(this,"modelId");P(this,"tints");this.modelId=f,this.tints=d}getMesh(f,d,h){const g=d.getBlockModel(this.modelId);if(!g)return console.warn(`[lodestone]: Model '${this.modelId}' does not exist`),new ft;const _=p=>p<this.tints.length?this.tints[p].getTint(f,d,h):[1,1,1],m=g.getMesh(d,yt.none(),_);return m.transform(g.getDisplayTransform(h.display_context??"gui")),m}}n.Model=i;class r{constructor(f){P(this,"models");this.models=f}getMesh(f,d,h){const g=new ft;return this.models.forEach(_=>g.merge(_.getMesh(f,d,h))),g}}n.Composite=r;class s{constructor(f,d,h){P(this,"property");P(this,"onTrue");P(this,"onFalse");this.property=f,this.onTrue=d,this.onFalse=h}getMesh(f,d,h){return(this.property(f,d,h)?this.onTrue:this.onFalse).getMesh(f,d,h)}static propertyFromJson(f){var h;const d=(h=te.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"fishing_rod/cast":case"selected":case"carried":case"extended_view":return(M,x,y)=>y[d]??!1;case"view_entity":return(M,x,y)=>y.context_entity_is_view_entity??!1;case"using_item":return(M,x,y)=>(y.use_duration??-1)>=0;case"bundle/has_selected_item":return(M,x,y)=>(y["bundle/selected_item"]??-1)>=0;case"broken":return(M,x,y)=>{var E,T;const R=(E=M.getComponent("damage",x))==null?void 0:E.getAsNumber(),C=(T=M.getComponent("max_damage",x))==null?void 0:T.getAsNumber();return R!==void 0&&C!==void 0&&R>=C-1};case"damaged":return(M,x,y)=>{var E,T;const R=(E=M.getComponent("damage",x))==null?void 0:E.getAsNumber(),C=(T=M.getComponent("max_damage",x))==null?void 0:T.getAsNumber();return R!==void 0&&C!==void 0&&R>=1};case"has_component":const g=ee.parse(te.readString(f.component)??""),_=te.readBoolean(f.ignore_default)??!1;return(M,x,y)=>M.hasComponent(g,_?void 0:x);case"keybind_down":const m=te.readString(f.keybind)??"";return(M,x,y)=>{var R;return((R=y.keybind_down)==null?void 0:R.includes(m))??!1};case"custom_model_data":const p=te.readInt(f.index)??0;return(M,x,y)=>{const R=M.getComponent("custom_model_data",x);if(!(R!=null&&R.isCompound()))return!1;const C=R.getList("flags").getNumber(p);return C!==void 0&&C!==0};default:return console.warn(`[lodestone]: Unknown condition property '${d}'`),()=>!1}}}n.Condition=s;class a{constructor(f,d,h){P(this,"property");P(this,"cases");P(this,"fallback");this.property=f,this.cases=d,this.fallback=h}getMesh(f,d,h){var _;const g=this.property(f,d,h);return((_=(g!==null?this.cases.get(g):void 0)??this.fallback)==null?void 0:_.getMesh(f,d,h))??Oh}static propertyFromJson(f){var h;const d=(h=te.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"main_hand":return(p,M,x)=>x.main_hand??"right";case"display_context":return(p,M,x)=>x.display_context??"gui";case"context_dimension":return(p,M,x)=>{var y;return((y=x.context_dimension)==null?void 0:y.toString())??null};case"charge_type":const g=ee.create("firework_rocket");return(p,M,x)=>{const y=p.getComponent("charged_projectiles",M);return!(y!=null&&y.isList())||y.length===0?"none":y.filter(R=>R.isCompound()?ee.parse(R.getString("id")).equals(g):!1).length>0?"rocket":"arrow"};case"trim_material":return(p,M,x)=>{const y=p.getComponent("trim",M);return y!=null&&y.isCompound()?ee.parse(y.getString("material")).toString():null};case"block_state":const _=te.readString(f.block_state_property)??"";return(p,M,x)=>{const y=p.getComponent("block_state",M);return y!=null&&y.isCompound()?y.getString(_):null};case"local_time":return(p,M,x)=>"NOT IMPLEMENTED";case"context_entity_type":return(p,M,x)=>{var y;return((y=x.context_entity_type)==null?void 0:y.toString())??null};case"custom_model_data":const m=te.readInt(f.index)??0;return(p,M,x)=>{const y=p.getComponent("custom_model_data",M);if(!(y!=null&&y.isCompound()))return null;const R=y.getList("strings");return R.length<=m?null:R.getString(m)};default:return console.warn(`[lodestone]: Unknown select property '${d}'`),()=>null}}}n.Select=a;class o{constructor(f,d,h,g){P(this,"property");P(this,"scale");P(this,"fallback");P(this,"entries");this.property=f,this.scale=d,this.fallback=g,this.entries=h.sort((_,m)=>_.threshold-m.threshold)}getMesh(f,d,h){const g=this.property(f,d,h)*this.scale;let _=this.fallback;for(const m of this.entries)if(m.threshold<=g)_=m.model;else break;return(_==null?void 0:_.getMesh(f,d,h))??Oh}static propertyFromJson(f){var h;const d=(h=te.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"bundle/fullness":let g=function(x,y){const R=x.getComponent("bundle_contents",y);return R!=null&&R.isListOrArray()?R.map(E=>E.isCompound()?ri.fromNbt(E):void 0).reduce((E,T)=>{var D;if(T===void 0)return E;if(T.hasComponent("bundle_contents",y))return E+g(T,y)+1/16;const w=T.getComponent("bees",y);if(w!=null&&w.isListOrArray()&&w.length>0)return E+1;const v=((D=T.getComponent("max_stack_size",y))==null?void 0:D.getAsNumber())??1;return E+T.count/v},0):0};return(x,y,R)=>g(x,y);case"damage":{const x=te.readBoolean(f.normalize)??!0;return(y,R,C)=>{var w,v;const E=((w=y.getComponent("max_damage",R))==null?void 0:w.getAsNumber())??0,T=Ei(((v=y.getComponent("damage",R))==null?void 0:v.getAsNumber())??0,0,E);return x?E>0?Ei(T/E,0,1):0:Ei(T,0,E)}}case"count":{const x=te.readBoolean(f.normalize)??!0;return(y,R,C)=>{var T;const E=((T=y.getComponent("max_stack_size",R))==null?void 0:T.getAsNumber())??1;return x?Ei(y.count/E,0,1):Ei(y.count,0,E)}}case"cooldown":return(x,y,R)=>{var w;const C=x.getComponent("use_cooldown",y),E=C!=null&&C.isCompound()?C.getString("cooldown_group"):"",T=C!=null&&C.isCompound()&&E?ee.parse(E):x.id;return((w=R.cooldown_percentage)==null?void 0:w[T.toString()])??0};case"time":switch(te.readString(f.source)??"daytime"){case"moon_phase":return(x,y,R)=>(R.game_time??0)/24e3%8/8;case"random":return(x,y,R)=>Math.random();default:return(x,y,R)=>{const E=(R.game_time??0)/24e3%1-.25,T=.5-Math.cos(E*Math.PI)/2;return(E*2+T)/3}}case"compass":return(x,y,R)=>R.compass_angle??0;case"crossbow/pull":return(x,y,R)=>R["crossbow/pull"]??0;case"use_duration":const m=te.readBoolean(f.remaining)??!0;return(x,y,R)=>R.use_duration===void 0||R.use_duration<0?0:m?Math.max((R.max_use_duration??0)-R.use_duration,0):R.use_duration;case"use_cycle":const p=te.readNumber(f.period)??1;return(x,y,R)=>R.use_duration===void 0||R.use_duration<0||p<=0?0:Math.max((R.max_use_duration??0)-(R.use_duration??0),0)%p;case"custom_model_data":const M=te.readInt(f.index)??0;return(x,y,R)=>{const C=x.getComponent("custom_model_data",y);return C!=null&&C.isCompound()?C.getList("floats").getNumber(M):0};default:return console.warn(`[lodestone]: Unknown range dispatch property '${d}'`),()=>0}}}n.RangeDispatch=o;class c{constructor(f,d){P(this,"specialModel");P(this,"base");this.specialModel=f,this.base=d}getMesh(f,d,h){const g=this.specialModel.getMesh(f,d),_=d.getBlockModel(this.base);return _?(g.transform(_.getDisplayTransform(h.display_context??"gui")),g):(console.warn(`[lodestone]: Special model base '${this.base}' does not exist`),new ft)}}n.Special=c;class l{getMesh(f,d,h){const g=h["bundle/selected_item"];if(g===void 0||g<0)return new ft;const _=f.getComponent("bundle_contents",d);if(!(_!=null&&_.isListOrArray()))return new ft;const m=_.get(g);if(m===void 0||!m.isCompound())return new ft;const p=ri.fromNbt(m);return xo.getItemMesh(p,d,{...h,"bundle/selected_item":-1,selected:!1,carried:!1,use_duration:-1})}}n.BundleSelectedItem=l})(Kl||(Kl={}));const El=256,Bh=2,CS=Bh*Bh,Ua=(n,e,t=1)=>{const i=new bf(n,Math.max(1,e),Math.max(1,t),Wt,Rn);return i.needsUpdate=!0,i.magFilter=vt,i.minFilter=vt,i.wrapS=Cn,i.wrapT=Cn,i.flipY=!1,i},Ae={direction:[-.5,.25,.5],color:[1,.75,.45],ambientColor:[.25,.4,.6],fillColor:[.35,.28,.5],rimColor:[1,.55,.25],intensity:1.35,ambientIntensity:.55,fillIntensity:.3,rimIntensity:.55,horizonFalloff:.7,exposure:1.15,sky:{zenithColor:[.12,.28,.56],horizonColor:[1,.55,.25],groundColor:[.25,.2,.25],sunGlowColor:[1,.45,.15],sunGlowIntensity:.6,sunGlowExponent:6,stars:{enabled:!1,density:.003,brightness:.6}},disc:{size:35,distance:180,coreColor:[1,.98,.9],glowColor:[1,.55,.15],coreIntensity:2.8,glowIntensity:3.5,softness:.25},fog:{color:[.85,.6,.4],density:2e-4,heightFalloff:.001},shadow:{enabled:!0,mapSize:2048,bias:5e-4,normalBias:.02,intensity:.5,softness:3,frustumSize:100},postProcess:{enabled:!1,ao:{enabled:!0,intensity:.5,radius:.5,samples:16},bloom:{enabled:!1,threshold:.8,intensity:.4,radius:.6},godRays:{enabled:!1,intensity:.4,decay:.95,density:.8,samples:60}},emissive:{range:16,intensity:3.5,tint:[1,.85,.6]}};function zh(n){var t,i,r,s,a,o,c,l,u,f,d,h,g,_,m,p,M,x,y,R,C,E,T,w,v,D,O,U,k,L,F,j,G,W,J,Q,de,ve,V,ie,ue,oe,we,Se,N,he,Z,De,Ee,ke,ye,Xe,ct,I,b,Y,ne,re,ae;const e=_i((n==null?void 0:n.direction)??wn(...Ae.direction));return hS(e)<1e-5&&fS(e,0,1,0),md(e,e),{direction:e,color:(n==null?void 0:n.color)??Ae.color,ambientColor:(n==null?void 0:n.ambientColor)??Ae.ambientColor,fillColor:(n==null?void 0:n.fillColor)??Ae.fillColor,rimColor:(n==null?void 0:n.rimColor)??Ae.rimColor,intensity:(n==null?void 0:n.intensity)??Ae.intensity,ambientIntensity:(n==null?void 0:n.ambientIntensity)??Ae.ambientIntensity,fillIntensity:(n==null?void 0:n.fillIntensity)??Ae.fillIntensity,rimIntensity:(n==null?void 0:n.rimIntensity)??Ae.rimIntensity,horizonFalloff:(n==null?void 0:n.horizonFalloff)??Ae.horizonFalloff,exposure:(n==null?void 0:n.exposure)??Ae.exposure,sky:{zenithColor:((t=n==null?void 0:n.sky)==null?void 0:t.zenithColor)??Ae.sky.zenithColor,horizonColor:((i=n==null?void 0:n.sky)==null?void 0:i.horizonColor)??Ae.sky.horizonColor,groundColor:((r=n==null?void 0:n.sky)==null?void 0:r.groundColor)??Ae.sky.groundColor,sunGlowColor:((s=n==null?void 0:n.sky)==null?void 0:s.sunGlowColor)??Ae.sky.sunGlowColor,sunGlowIntensity:((a=n==null?void 0:n.sky)==null?void 0:a.sunGlowIntensity)??Ae.sky.sunGlowIntensity,sunGlowExponent:((o=n==null?void 0:n.sky)==null?void 0:o.sunGlowExponent)??Ae.sky.sunGlowExponent,stars:{enabled:((l=(c=n==null?void 0:n.sky)==null?void 0:c.stars)==null?void 0:l.enabled)??Ae.sky.stars.enabled,density:((f=(u=n==null?void 0:n.sky)==null?void 0:u.stars)==null?void 0:f.density)??Ae.sky.stars.density,brightness:((h=(d=n==null?void 0:n.sky)==null?void 0:d.stars)==null?void 0:h.brightness)??Ae.sky.stars.brightness}},disc:{size:((g=n==null?void 0:n.disc)==null?void 0:g.size)??Ae.disc.size,distance:((_=n==null?void 0:n.disc)==null?void 0:_.distance)??Ae.disc.distance,coreColor:((m=n==null?void 0:n.disc)==null?void 0:m.coreColor)??Ae.disc.coreColor,glowColor:((p=n==null?void 0:n.disc)==null?void 0:p.glowColor)??Ae.disc.glowColor,coreIntensity:((M=n==null?void 0:n.disc)==null?void 0:M.coreIntensity)??Ae.disc.coreIntensity,glowIntensity:((x=n==null?void 0:n.disc)==null?void 0:x.glowIntensity)??Ae.disc.glowIntensity,softness:((y=n==null?void 0:n.disc)==null?void 0:y.softness)??Ae.disc.softness},fog:{color:((R=n==null?void 0:n.fog)==null?void 0:R.color)??Ae.fog.color,density:((C=n==null?void 0:n.fog)==null?void 0:C.density)??Ae.fog.density,heightFalloff:((E=n==null?void 0:n.fog)==null?void 0:E.heightFalloff)??Ae.fog.heightFalloff},shadow:{enabled:((T=n==null?void 0:n.shadow)==null?void 0:T.enabled)??Ae.shadow.enabled,mapSize:((w=n==null?void 0:n.shadow)==null?void 0:w.mapSize)??Ae.shadow.mapSize,bias:((v=n==null?void 0:n.shadow)==null?void 0:v.bias)??Ae.shadow.bias,normalBias:((D=n==null?void 0:n.shadow)==null?void 0:D.normalBias)??Ae.shadow.normalBias,intensity:((O=n==null?void 0:n.shadow)==null?void 0:O.intensity)??Ae.shadow.intensity,softness:((U=n==null?void 0:n.shadow)==null?void 0:U.softness)??Ae.shadow.softness,frustumSize:((k=n==null?void 0:n.shadow)==null?void 0:k.frustumSize)??Ae.shadow.frustumSize},postProcess:{enabled:((L=n==null?void 0:n.postProcess)==null?void 0:L.enabled)??Ae.postProcess.enabled,ao:{enabled:((j=(F=n==null?void 0:n.postProcess)==null?void 0:F.ao)==null?void 0:j.enabled)??Ae.postProcess.ao.enabled,intensity:((W=(G=n==null?void 0:n.postProcess)==null?void 0:G.ao)==null?void 0:W.intensity)??Ae.postProcess.ao.intensity,radius:((Q=(J=n==null?void 0:n.postProcess)==null?void 0:J.ao)==null?void 0:Q.radius)??Ae.postProcess.ao.radius,samples:((ve=(de=n==null?void 0:n.postProcess)==null?void 0:de.ao)==null?void 0:ve.samples)??Ae.postProcess.ao.samples},bloom:{enabled:((ie=(V=n==null?void 0:n.postProcess)==null?void 0:V.bloom)==null?void 0:ie.enabled)??Ae.postProcess.bloom.enabled,threshold:((oe=(ue=n==null?void 0:n.postProcess)==null?void 0:ue.bloom)==null?void 0:oe.threshold)??Ae.postProcess.bloom.threshold,intensity:((Se=(we=n==null?void 0:n.postProcess)==null?void 0:we.bloom)==null?void 0:Se.intensity)??Ae.postProcess.bloom.intensity,radius:((he=(N=n==null?void 0:n.postProcess)==null?void 0:N.bloom)==null?void 0:he.radius)??Ae.postProcess.bloom.radius},godRays:{enabled:((De=(Z=n==null?void 0:n.postProcess)==null?void 0:Z.godRays)==null?void 0:De.enabled)??Ae.postProcess.godRays.enabled,intensity:((ke=(Ee=n==null?void 0:n.postProcess)==null?void 0:Ee.godRays)==null?void 0:ke.intensity)??Ae.postProcess.godRays.intensity,decay:((Xe=(ye=n==null?void 0:n.postProcess)==null?void 0:ye.godRays)==null?void 0:Xe.decay)??Ae.postProcess.godRays.decay,density:((I=(ct=n==null?void 0:n.postProcess)==null?void 0:ct.godRays)==null?void 0:I.density)??Ae.postProcess.godRays.density,samples:((Y=(b=n==null?void 0:n.postProcess)==null?void 0:b.godRays)==null?void 0:Y.samples)??Ae.postProcess.godRays.samples}},emissive:{range:((ne=n==null?void 0:n.emissive)==null?void 0:ne.range)??Ae.emissive.range,intensity:((re=n==null?void 0:n.emissive)==null?void 0:re.intensity)??Ae.emissive.intensity,tint:((ae=n==null?void 0:n.emissive)==null?void 0:ae.tint)??Ae.emissive.tint}}}function Hh(n){var d,h;const e=new qn;if(n.quads.length===0)return e;const t=[],i=[],r=[],s=[],a=[],o=[],c=[],l=[];let u=0;for(const g of n.quads){const _=g.vertices();for(const m of _){t.push(m.pos.x,m.pos.y,m.pos.z);const p=m.normal??g.normal();i.push(p.x,p.y,p.z),r.push(((d=m.texture)==null?void 0:d[0])??0,((h=m.texture)==null?void 0:h[1])??0),m.textureLimit?a.push(m.textureLimit[0],m.textureLimit[1],m.textureLimit[2],m.textureLimit[3]):a.push(0,0,0,0);const M=m.color??[1,1,1];s.push(M[0],M[1],M[2]);const x=m.blockPos??m.pos;o.push(x.x,x.y,x.z),c.push(m.emissive??0)}l.push(u,u+1,u+2,u,u+2,u+3),u+=4}e.setAttribute("position",new Nt(t,3)),e.setAttribute("normal",new Nt(i,3)),e.setAttribute("uv",new Nt(r,2)),e.setAttribute("texLimit",new Nt(a,4)),e.setAttribute("color",new Nt(s,3)),e.setAttribute("blockPos",new Nt(o,3)),e.setAttribute("emissive",new Nt(c,1));const f=t.length/3>65536?new Uint32Array(l):new Uint16Array(l);return e.setIndex(new Dn(f,1)),e.computeBoundingSphere(),e}function Tl(n){const e=new qn;if(n.lines.length===0)return e;const t=[],i=[];for(const r of n.lines)r.vertices().forEach(s=>{t.push(s.pos.x,s.pos.y,s.pos.z);const a=s.color??[1,1,1];i.push(a[0],a[1],a[2])});return e.setAttribute("position",new Nt(t,3)),e.setAttribute("color",new Nt(i,3)),e.computeBoundingSphere(),e}let RS=class{constructor(e,t,i,r){P(this,"structure");P(this,"resources");P(this,"renderer");P(this,"structureScene");P(this,"skyScene");P(this,"overlayScene");P(this,"camera");P(this,"skyCamera");P(this,"atlasTexture");P(this,"opaqueMaterial");P(this,"transparentMaterial");P(this,"coloredMaterial");P(this,"lineMaterial");P(this,"skyMaterial");P(this,"shadowDepthMaterial");P(this,"shadowMap",null);P(this,"emissiveLightDataTex",null);P(this,"emissiveLightColorTex",null);P(this,"shadowCamera");P(this,"sunlight");P(this,"skyMesh");P(this,"sunDisc");P(this,"shadowDirty",!0);P(this,"emissiveSelectionDirty",!0);P(this,"lastEmissiveCameraPos",null);P(this,"lastEmissiveLightCount",0);P(this,"sceneTarget",null);P(this,"depthTarget",null);P(this,"bloomBrightTarget",null);P(this,"bloomBlurTarget1",null);P(this,"bloomBlurTarget2",null);P(this,"godRaysTarget",null);P(this,"aoTarget",null);P(this,"postProcessQuad",null);P(this,"ssaoMaterial",null);P(this,"bloomBrightMaterial",null);P(this,"bloomBlurMaterial",null);P(this,"godRaysMaterial",null);P(this,"compositeMaterial",null);P(this,"chunkBuilder");P(this,"asyncBuild");P(this,"asyncChunkBuildTimeMs");P(this,"buildPromise",null);P(this,"buildToken",0);P(this,"chunkMeshes",[]);P(this,"grid");P(this,"invisibleBlocks");P(this,"outline");P(this,"chunkSize");P(this,"targetCenter");P(this,"cameraPosition");P(this,"cameraTarget");P(this,"cameraUp");P(this,"cameraViewMatrix");P(this,"useInvisibleBlocks");P(this,"drawDistance");P(this,"pixelSize");P(this,"maxEmissiveTextureSize");P(this,"debug");var o,c;this.structure=t,this.resources=i,this.renderer=new Vv({canvas:e,alpha:!1,antialias:(r==null?void 0:r.antialias)??!0,preserveDrawingBuffer:(r==null?void 0:r.preserveDrawingBuffer)??!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.maxEmissiveTextureSize=this.renderer.capabilities.maxTextureSize??8192,this.structureScene=new il,this.skyScene=new il,this.overlayScene=new il,this.camera=new ln(70,(e.clientWidth||1)/(e.clientHeight||1),.1,2e3),this.skyCamera=new Xa(-1,1,1,-1,0,1),this.shadowCamera=new Xa(-50,50,50,-50,.1,200);const s=this.renderer.getContext(),a=(r==null?void 0:r.chunkSize)??16;if(this.chunkSize=typeof a=="number"?[a,a,a]:a,this.targetCenter=wn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.cameraPosition=ro(),this.cameraTarget=_i(this.targetCenter),this.cameraUp=wn(0,1,0),this.cameraViewMatrix=ot(),this.resetCamera(),this.asyncBuild=(r==null?void 0:r.asyncBuild)??!1,this.asyncChunkBuildTimeMs=(r==null?void 0:r.asyncChunkBuildTimeMs)??8,this.chunkBuilder=new Wr(s,t,i,a,!this.asyncBuild),this.useInvisibleBlocks=(r==null?void 0:r.useInvisibleBlockBuffer)??!1,this.drawDistance=r==null?void 0:r.drawDistance,this.sunlight=zh(r==null?void 0:r.sunlight),this.debug=(r==null?void 0:r.debug)??!1,this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas()),this.pixelSize=((c=(o=this.resources).getPixelSize)==null?void 0:c.call(o))??0,this.emissiveLightDataTex=Ua(new Float32Array([0,0,0,0]),1),this.emissiveLightColorTex=Ua(new Float32Array([0,0,0,0]),1),this.shadowDepthMaterial=this.createShadowDepthMaterial(),this.initShadowMap(),this.opaqueMaterial=this.createStructureMaterial(!1),this.transparentMaterial=this.createStructureMaterial(!0),this.coloredMaterial=this.createColoredMaterial(),this.lineMaterial=new Ef({vertexColors:!0,transparent:!0,depthTest:!0}),this.skyMaterial=this.createSkyMaterial(),this.debug){const l=this.resources.getTextureAtlas(),f=Array.from(l.data.slice(3,3+400*4)).filter((d,h)=>h%4===0).filter(d=>d!==0).length;console.log("[lodestone] atlas info",{width:l.width,height:l.height,alphaSampleNonZero:f})}this.asyncBuild?this.rebuildChunksAsync():this.rebuildChunkObjects(),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc),this.skyMesh=this.createSkyMesh(),this.skyMesh&&this.skyScene.add(this.skyMesh),this.initPostProcessing(e.width||800,e.height||600)}setViewport(e,t,i,r,s=1){this.renderer.setPixelRatio(s),this.renderer.setSize(i,r,!1),this.renderer.setScissorTest(!1),this.renderer.setViewport(e,t,i,r),this.camera.aspect=i/Math.max(r,1),this.camera.updateProjectionMatrix();const a=this.renderer.getDrawingBufferSize(new Re);this.resizePostProcessTargets(Math.max(1,Math.floor(a.x)),Math.max(1,Math.floor(a.y)))}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}setCamera(e){return e.position&&Pa(this.cameraPosition,e.position),e.target&&Pa(this.cameraTarget,e.target),e.up&&Pa(this.cameraUp,e.up),e.fov!==void 0&&this.setFOV(e.fov),this.updateStoredViewMatrix(),this}getCamera(){return{position:_i(this.cameraPosition),target:_i(this.cameraTarget),up:_i(this.cameraUp),fov:this.camera.fov}}getViewMatrix(){return tS(this.cameraViewMatrix)}lookAt(e,t,i){return this.setCamera({position:e,target:t,up:i})}setCameraPosition(e){return this.setCamera({position:e})}setCameraTarget(e){return this.setCamera({target:e})}resetCamera(){const e=this.structure.getSize(),t=Math.max(8,Math.max(e[0],e[1],e[2])*1.8);return this.setCamera({position:wn(this.targetCenter[0],this.targetCenter[1]+t*.35,this.targetCenter[2]+t),target:this.targetCenter,up:wn(0,1,0)})}setStructure(e){this.structure=e,this.targetCenter=wn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.setCameraTarget(this.targetCenter),this.asyncBuild?(this.chunkBuilder.setStructure(e,{rebuild:!1}),this.rebuildOverlay(),this.rebuildChunksAsync()):(this.chunkBuilder.setStructure(e),this.rebuildChunkObjects(),this.rebuildOverlay()),this.shadowDirty=!0}updateStructureBuffers(e){if(this.asyncBuild){this.updateStructureBuffersAsync(e);return}this.chunkBuilder.updateStructureBuffers(e),this.rebuildChunkObjects(),this.rebuildOverlay(),this.shadowDirty=!0}async updateStructureBuffersAsync(e){this.rebuildOverlay(),await this.rebuildChunksAsync(e)}whenReady(){return this.buildPromise??Promise.resolve()}drawStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.updateSkyUniforms(e),this.renderShadowPass(),!this.renderPostProcessing(e)&&(this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.structureScene.overrideMaterial=null,this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera))}drawColoredStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.renderer.clear(),this.structureScene.overrideMaterial=this.coloredMaterial,this.renderer.render(this.structureScene,this.camera),this.structureScene.overrideMaterial=null}drawGrid(e=this.cameraViewMatrix){this.grid&&(this.prepareCamera(e),this.positionSunDisc(e),this.setOverlayVisibility({grid:!0,invisible:!1,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawInvisibleBlocks(e=this.cameraViewMatrix){!this.useInvisibleBlocks||!this.invisibleBlocks||(this.prepareCamera(e),this.setOverlayVisibility({grid:!1,invisible:!0,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawOutline(e,t){const i=t?e:this.cameraViewMatrix,r=t??e;this.outline||(this.outline=this.createOutline(),this.overlayScene.add(this.outline)),this.outline.position.set(r[0],r[1],r[2]),this.prepareCamera(i),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!0}),this.renderer.render(this.overlayScene,this.camera)}dispose(){var e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m;this.buildToken+=1,this.chunkBuilder.cancelPendingBuilds(),this.chunkMeshes.forEach(p=>{this.structureScene.remove(p),p.geometry.dispose()}),this.chunkMeshes=[],this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose(),this.grid=void 0),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose(),this.invisibleBlocks=void 0),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.skyMesh&&(this.structureScene.remove(this.skyMesh),this.skyMesh.geometry.dispose(),this.skyMesh=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),(e=this.sunDisc.material)==null||e.dispose(),this.sunDisc=void 0),this.postProcessQuad&&(this.postProcessQuad.geometry.dispose(),this.postProcessQuad=null),this.structureScene.clear(),this.overlayScene.clear(),this.atlasTexture.dispose(),this.opaqueMaterial.dispose(),this.transparentMaterial.dispose(),this.coloredMaterial.dispose(),this.lineMaterial.dispose(),this.skyMaterial.dispose(),this.shadowDepthMaterial.dispose(),(t=this.shadowMap)==null||t.dispose(),(i=this.sceneTarget)==null||i.dispose(),(r=this.depthTarget)==null||r.dispose(),(s=this.bloomBrightTarget)==null||s.dispose(),(a=this.bloomBlurTarget1)==null||a.dispose(),(o=this.bloomBlurTarget2)==null||o.dispose(),(c=this.godRaysTarget)==null||c.dispose(),(l=this.aoTarget)==null||l.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(f=this.bloomBrightMaterial)==null||f.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(h=this.godRaysMaterial)==null||h.dispose(),(g=this.compositeMaterial)==null||g.dispose(),(_=this.emissiveLightDataTex)==null||_.dispose(),(m=this.emissiveLightColorTex)==null||m.dispose(),this.renderer.dispose()}prepareCamera(e){const t=new st().fromArray(e),i=new st().copy(t).invert();this.camera.position.setFromMatrixPosition(i),this.camera.quaternion.setFromRotationMatrix(i),this.camera.updateMatrixWorld(!0);const r=this.getCameraPosition(e)??wn(0,0,10);Pa(this.cameraPosition,r),this.camera.updateMatrixWorld(!0),this.drawDistance?this.applyDrawDistance(r,this.drawDistance):this.chunkMeshes.forEach(s=>s.visible=!0),this.updateEmissiveLightsForCamera(r)}rebuildChunkObjects(){this.chunkMeshes.forEach(i=>{this.structureScene.remove(i),i.geometry.dispose()}),this.chunkMeshes=[],this.chunkBuilder.getMeshEntries().forEach((i,r)=>{var c,l;if(i.mesh.isEmpty())return;const s=Hh(i.mesh),a=i.transparent?this.transparentMaterial:this.opaqueMaterial,o=new Qt(s,a);o.renderOrder=i.transparent?1:0,o.userData.origin=i.origin,this.structureScene.add(o),this.chunkMeshes.push(o),this.debug&&r===0&&console.log("[lodestone] chunk geometry sample",{vertices:((c=s.getAttribute("position"))==null?void 0:c.count)??0,indices:((l=s.getIndex())==null?void 0:l.count)??0,transparent:i.transparent})});const t=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(t),this.emissiveSelectionDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks",{count:this.chunkMeshes.length})}async rebuildChunksAsync(e){const t=++this.buildToken,i=(async()=>{await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:e,timeSliceMs:this.asyncChunkBuildTimeMs}),t===this.buildToken&&await this.rebuildChunkObjectsAsync(t)})();return this.buildPromise=i,i}async rebuildChunkObjectsAsync(e){var s,a;this.chunkMeshes.forEach(o=>{this.structureScene.remove(o),o.geometry.dispose()}),this.chunkMeshes=[];const t=this.chunkBuilder.getMeshEntries();let i=this.now();for(let o=0;o<t.length;o++){if(e!==this.buildToken)return;const c=t[o];if(c.mesh.isEmpty())continue;const l=Hh(c.mesh),u=c.transparent?this.transparentMaterial:this.opaqueMaterial,f=new Qt(l,u);f.renderOrder=c.transparent?1:0,f.userData.origin=c.origin,this.structureScene.add(f),this.chunkMeshes.push(f),this.debug&&o===0&&console.log("[lodestone] chunk geometry sample",{vertices:((s=l.getAttribute("position"))==null?void 0:s.count)??0,indices:((a=l.getIndex())==null?void 0:a.count)??0,transparent:c.transparent}),!(o&31)&&this.now()-i>=this.asyncChunkBuildTimeMs&&(await this.yieldControl(),i=this.now())}if(e!==this.buildToken)return;const r=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(r),this.emissiveSelectionDirty=!0,this.shadowDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks (async)",{count:this.chunkMeshes.length})}updateEmissiveLightUniforms(e){var f,d;const t=Math.min(e.length,El),i=this.maxEmissiveTextureSize||8192,r=Math.min(i,Math.max(1,Math.ceil(Math.sqrt(Math.max(1,t))))),s=Math.min(i,Math.max(1,Math.ceil(t/r))),a=r*s,o=Math.min(t,a),c=new Float32Array(r*s*4),l=new Float32Array(r*s*4);for(let h=0;h<o;h++){const g=e[h];c[h*4+0]=g.position[0],c[h*4+1]=g.position[1],c[h*4+2]=g.position[2],c[h*4+3]=g.intensity,l[h*4+0]=g.color[0],l[h*4+1]=g.color[1],l[h*4+2]=g.color[2],l[h*4+3]=1}(f=this.emissiveLightDataTex)==null||f.dispose(),(d=this.emissiveLightColorTex)==null||d.dispose(),this.emissiveLightDataTex=Ua(c,r,s),this.emissiveLightColorTex=Ua(l,r,s);const u=h=>{const g=h.uniforms;g&&(g.emissiveLightData&&(g.emissiveLightData.value=this.emissiveLightDataTex),g.emissiveLightColors&&(g.emissiveLightColors.value=this.emissiveLightColorTex),g.emissiveLightCount&&(g.emissiveLightCount.value=o),g.emissiveLightTexSize&&g.emissiveLightTexSize.value instanceof Re&&g.emissiveLightTexSize.value.set(r,s))};u(this.opaqueMaterial),u(this.transparentMaterial),this.debug&&o>0&&console.log("[lodestone] emissive lights",{count:o})}updateEmissiveLightsForCamera(e){const t=this.chunkBuilder.getEmissiveLights();if(t.length===0){(this.emissiveSelectionDirty||this.lastEmissiveLightCount!==0)&&(this.updateEmissiveLightUniforms([]),this.lastEmissiveLightCount=0,this.emissiveSelectionDirty=!1),this.lastEmissiveCameraPos=_i(e);return}const i=!this.lastEmissiveCameraPos||this.cameraMovedEnough(e,this.lastEmissiveCameraPos);if(!this.emissiveSelectionDirty&&!i)return;const r=this.drawDistance?Math.pow(this.drawDistance+this.sunlight.emissive.range,2):void 0,s=this.pickNearestEmissiveLights(t,e,El,r);this.updateEmissiveLightUniforms(s),this.lastEmissiveLightCount=s.length,this.emissiveSelectionDirty=!1,this.lastEmissiveCameraPos=_i(e)}cameraMovedEnough(e,t){const i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return i*i+r*r+s*s>=CS}pickNearestEmissiveLights(e,t,i,r){if(e.length<=i&&r===void 0)return e;const s=[];let a=-1,o=-1;for(const c of e){const l=c.position[0]-t[0],u=c.position[1]-t[1],f=c.position[2]-t[2],d=l*l+u*u+f*f;if(!(r!==void 0&&d>r)){if(s.length<i){s.push({light:c,distSq:d}),d>o&&(o=d,a=s.length-1);continue}if(!(d>=o)){s[a]={light:c,distSq:d},o=s[0].distSq,a=0;for(let h=1;h<s.length;h++)s[h].distSq>o&&(o=s[h].distSq,a=h)}}}return s.sort((c,l)=>c.distSq-l.distSq),s.map(c=>c.light)}rebuildOverlay(){this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose()),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose()),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),this.sunDisc.material.dispose()),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc)}createStructureMaterial(e){return new al({name:e?"lodestone-structure-transparent":"lodestone-structure-opaque",vertexShader:`
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
				#define MAX_EMISSIVE_LIGHTS ${El}
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
			`,uniforms:this.createStructureUniforms(),transparent:e,depthWrite:!e,depthTest:!0,alphaTest:.01,side:mn})}createStructureUniforms(){var i;const e=r=>new Ke(r[0],r[1],r[2]),t=new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]);return t.lengthSq()===0&&t.set(0,1,0),t.normalize(),{atlas:{value:this.atlasTexture},pixelSize:{value:this.pixelSize},sunDirection:{value:t},sunColor:{value:e(this.sunlight.color)},ambientColor:{value:e(this.sunlight.ambientColor)},fillColor:{value:e(this.sunlight.fillColor)},rimColor:{value:e(this.sunlight.rimColor)},sunIntensity:{value:this.sunlight.intensity},ambientIntensity:{value:this.sunlight.ambientIntensity},fillIntensity:{value:this.sunlight.fillIntensity},rimIntensity:{value:this.sunlight.rimIntensity},horizonFalloff:{value:this.sunlight.horizonFalloff},exposure:{value:this.sunlight.exposure},fogColor:{value:e(this.sunlight.fog.color)},fogDensity:{value:this.sunlight.fog.density},fogHeightFalloff:{value:this.sunlight.fog.heightFalloff},shadowMap:{value:((i=this.shadowMap)==null?void 0:i.texture)??null},shadowMatrix:{value:new st},shadowBias:{value:this.sunlight.shadow.bias},shadowNormalBias:{value:this.sunlight.shadow.normalBias},shadowIntensity:{value:this.sunlight.shadow.intensity},shadowSoftness:{value:this.sunlight.shadow.softness},shadowMapSize:{value:new Re(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize)},shadowEnabled:{value:this.sunlight.shadow.enabled},emissiveLightData:{value:this.emissiveLightDataTex},emissiveLightColors:{value:this.emissiveLightColorTex},emissiveLightCount:{value:0},emissiveLightTexSize:{value:new Re(1,1)},emissiveRange:{value:this.sunlight.emissive.range},emissiveGlobalIntensity:{value:this.sunlight.emissive.intensity},emissiveTint:{value:e(this.sunlight.emissive.tint)}}}setSunlight(e){this.sunlight=zh(e),this.syncShadowResources(),this.syncPostProcessingResources(),this.applySunlightUniforms(this.opaqueMaterial),this.applySunlightUniforms(this.transparentMaterial),this.applySkyUniforms(),this.applySunDiscUniforms(),this.applyPostProcessUniforms(),this.shadowDirty=!0,this.emissiveSelectionDirty=!0}syncShadowResources(){var e,t;if(this.sunlight.shadow.enabled){const i=this.sunlight.shadow.mapSize;(!this.shadowMap||this.shadowMap.width!==i||this.shadowMap.height!==i)&&((e=this.shadowMap)==null||e.dispose(),this.shadowMap=null,this.initShadowMap(),this.shadowDirty=!0);return}(t=this.shadowMap)==null||t.dispose(),this.shadowMap=null,this.shadowDirty=!0}syncPostProcessingResources(){var t,i,r,s,a,o,c,l,u,f,d,h,g;if(!this.sunlight.postProcess.enabled||this.sceneTarget&&this.postProcessQuad&&this.ssaoMaterial&&this.bloomBrightMaterial&&this.bloomBlurMaterial&&this.godRaysMaterial&&this.compositeMaterial)return;(t=this.sceneTarget)==null||t.dispose(),(i=this.depthTarget)==null||i.dispose(),(r=this.bloomBrightTarget)==null||r.dispose(),(s=this.bloomBlurTarget1)==null||s.dispose(),(a=this.bloomBlurTarget2)==null||a.dispose(),(o=this.godRaysTarget)==null||o.dispose(),(c=this.aoTarget)==null||c.dispose(),(l=this.postProcessQuad)==null||l.geometry.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(f=this.bloomBrightMaterial)==null||f.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(h=this.godRaysMaterial)==null||h.dispose(),(g=this.compositeMaterial)==null||g.dispose(),this.sceneTarget=null,this.depthTarget=null,this.bloomBrightTarget=null,this.bloomBlurTarget1=null,this.bloomBlurTarget2=null,this.godRaysTarget=null,this.aoTarget=null,this.postProcessQuad=null,this.ssaoMaterial=null,this.bloomBrightMaterial=null,this.bloomBlurMaterial=null,this.godRaysMaterial=null,this.compositeMaterial=null;const e=this.renderer.getSize(new Re);this.initPostProcessing(Math.max(1,e.x),Math.max(1,e.y))}applyPostProcessUniforms(){var a,o,c,l;const e=this.sunlight.postProcess,t=(a=this.ssaoMaterial)==null?void 0:a.uniforms;t!=null&&t.aoRadius&&(t.aoRadius.value=e.ao.radius),t!=null&&t.aoIntensity&&(t.aoIntensity.value=e.ao.intensity);const i=(o=this.bloomBrightMaterial)==null?void 0:o.uniforms;i!=null&&i.threshold&&(i.threshold.value=e.bloom.threshold);const r=(c=this.compositeMaterial)==null?void 0:c.uniforms;r!=null&&r.bloomIntensity&&(r.bloomIntensity.value=e.bloom.intensity);const s=(l=this.godRaysMaterial)==null?void 0:l.uniforms;s!=null&&s.intensity&&(s.intensity.value=e.godRays.intensity),s!=null&&s.decay&&(s.decay.value=e.godRays.decay),s!=null&&s.density&&(s.density.value=e.godRays.density),s!=null&&s.numSamples&&(s.numSamples.value=e.godRays.samples)}applySunDiscUniforms(){if(!this.sunDisc)return;const t=this.sunDisc.material.uniforms;t&&(t.coreColor.value.setRGB(this.sunlight.disc.coreColor[0],this.sunlight.disc.coreColor[1],this.sunlight.disc.coreColor[2]),t.glowColor.value.setRGB(this.sunlight.disc.glowColor[0],this.sunlight.disc.glowColor[1],this.sunlight.disc.glowColor[2]),t.coreIntensity.value=this.sunlight.disc.coreIntensity,t.glowIntensity.value=this.sunlight.disc.glowIntensity,t.softness.value=this.sunlight.disc.softness)}applySkyUniforms(){var r;const e=this.skyMaterial.uniforms;if(!e)return;const t=(s,a)=>{const o=e[s];(o==null?void 0:o.value)instanceof Ke&&o.value.setRGB(a[0],a[1],a[2])},i=(r=e.sunDirection)==null?void 0:r.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),t("zenithColor",this.sunlight.sky.zenithColor),t("horizonColor",this.sunlight.sky.horizonColor),t("groundColor",this.sunlight.sky.groundColor),t("sunGlowColor",this.sunlight.sky.sunGlowColor),e.sunGlowIntensity&&(e.sunGlowIntensity.value=this.sunlight.sky.sunGlowIntensity),e.sunGlowExponent&&(e.sunGlowExponent.value=this.sunlight.sky.sunGlowExponent),e.starsEnabled&&(e.starsEnabled.value=this.sunlight.sky.stars.enabled),e.starsDensity&&(e.starsDensity.value=this.sunlight.sky.stars.density),e.starsBrightness&&(e.starsBrightness.value=this.sunlight.sky.stars.brightness)}applySunlightUniforms(e){var s,a,o;const t=e.uniforms;if(!t)return;const i=(c,l)=>{const u=t[c];(u==null?void 0:u.value)instanceof Ke&&u.value.setRGB(l[0],l[1],l[2])},r=(s=t.sunDirection)==null?void 0:s.value;r&&r.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i("sunColor",this.sunlight.color),i("ambientColor",this.sunlight.ambientColor),i("fillColor",this.sunlight.fillColor),i("rimColor",this.sunlight.rimColor),i("fogColor",this.sunlight.fog.color),t.sunIntensity&&(t.sunIntensity.value=this.sunlight.intensity),t.ambientIntensity&&(t.ambientIntensity.value=this.sunlight.ambientIntensity),t.fillIntensity&&(t.fillIntensity.value=this.sunlight.fillIntensity),t.rimIntensity&&(t.rimIntensity.value=this.sunlight.rimIntensity),t.horizonFalloff&&(t.horizonFalloff.value=this.sunlight.horizonFalloff),t.exposure&&(t.exposure.value=this.sunlight.exposure),t.fogDensity&&(t.fogDensity.value=this.sunlight.fog.density),t.fogHeightFalloff&&(t.fogHeightFalloff.value=this.sunlight.fog.heightFalloff),t.shadowEnabled&&(t.shadowEnabled.value=this.sunlight.shadow.enabled),t.shadowBias&&(t.shadowBias.value=this.sunlight.shadow.bias),t.shadowNormalBias&&(t.shadowNormalBias.value=this.sunlight.shadow.normalBias),t.shadowIntensity&&(t.shadowIntensity.value=this.sunlight.shadow.intensity),t.shadowSoftness&&(t.shadowSoftness.value=this.sunlight.shadow.softness),((a=t.shadowMapSize)==null?void 0:a.value)instanceof Re&&t.shadowMapSize.value.set(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize),t.shadowMap&&(t.shadowMap.value=((o=this.shadowMap)==null?void 0:o.texture)??null),t.emissiveRange&&(t.emissiveRange.value=this.sunlight.emissive.range),t.emissiveGlobalIntensity&&(t.emissiveGlobalIntensity.value=this.sunlight.emissive.intensity),i("emissiveTint",this.sunlight.emissive.tint)}createColoredMaterial(){return new al({name:"lodestone-structure-colored",vertexShader:`
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
			`,transparent:!1,depthWrite:!0,depthTest:!0,side:mn})}createGrid(){const[e,t,i]=this.structure.getSize(),r=new ft;r.addLine(0,0,0,e,0,0,[1,0,0]),r.addLine(0,0,0,0,0,i,[0,0,1]);const s=[.8,.8,.8];r.addLine(0,0,0,0,t,0,s),r.addLine(e,0,0,e,t,0,s),r.addLine(0,0,i,0,t,i,s),r.addLine(e,0,i,e,t,i,s),r.addLine(0,t,0,0,t,i,s),r.addLine(e,t,0,e,t,i,s),r.addLine(0,t,0,e,t,0,s),r.addLine(0,t,i,e,t,i,s);const a=128,o=Math.max(1,Math.ceil(e/a)),c=Math.max(1,Math.ceil(i/a));for(let u=o;u<=e;u+=o)r.addLine(u,0,0,u,0,i,s);for(let u=c;u<=i;u+=c)r.addLine(0,0,u,e,0,u,s);const l=Tl(r);return l.attributes.position?new sl(l,this.lineMaterial):void 0}createOutline(){const e=new ft;e.addLineCube(0,0,0,1,1,1,[1,1,1]);const t=Tl(e);return new sl(t,this.lineMaterial)}createInvisibleBlocks(){const e=new ft;if(!this.useInvisibleBlocks)return;const t=this.structure.getSize(),i=t[0]*t[1]*t[2];if(i>2e5){this.debug&&console.warn("[lodestone] Skipping invisible blocks buffer for large structure",{volume:i});return}for(let s=0;s<t[0];s+=1)for(let a=0;a<t[1];a+=1)for(let o=0;o<t[2];o+=1){const c=this.structure.getBlock([s,a,o]);c!==void 0&&(c===null?e.addLineCube(s+.4375,a+.4375,o+.4375,s+.5625,a+.5625,o+.5625,[1,.25,.25]):c.state.is(Ai.AIR)?e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,.5,1]):c.state.is(new Ai("cave_air"))&&e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,1,.5]))}const r=Tl(e);return r.attributes.position?new sl(r,this.lineMaterial):void 0}setOverlayVisibility(e){this.grid&&(this.grid.visible=e.grid),this.invisibleBlocks&&(this.invisibleBlocks.visible=e.invisible),this.outline&&(this.outline.visible=e.outline),this.sunDisc&&(this.sunDisc.visible=e.sunDisc??!1)}createAtlasTexture(e){const t=new bf(e.data,e.width,e.height,Wt);return t.magFilter=vt,t.minFilter=vt,t.wrapS=Cn,t.wrapT=Cn,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}getCameraPosition(e){const t=ot();return rS(t,e)?wn(t[12],t[13],t[14]):null}updateStoredViewMatrix(){uS(this.cameraViewMatrix,this.cameraPosition,this.cameraTarget,this.cameraUp)}applyDrawDistance(e,t){const i=t*t;let r=!1;for(const s of this.chunkMeshes){const a=s.userData.origin;if(!a){s.visible||(s.visible=!0,r=!0);continue}const o=[a[0]+this.chunkSize[0]*.5,a[1]+this.chunkSize[1]*.5,a[2]+this.chunkSize[2]*.5],c=o[0]-e[0],l=o[1]-e[1],u=o[2]-e[2],f=c*c+l*l+u*u<=i;s.visible!==f&&(s.visible=f,r=!0)}r&&(this.shadowDirty=!0)}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}positionSunDisc(e){if(!this.sunDisc)return;const t=this.getCameraPosition(e)??wn(0,0,10),i=_i(this.sunlight.direction);md(i,i);const r=this.sunlight.disc.distance,s=ro();dS(s,t,i,r),this.sunDisc.position.set(s[0],s[1],s[2]),this.sunDisc.scale.setScalar(this.sunlight.disc.size),this.sunDisc.lookAt(t[0],t[1],t[2])}createSunDisc(){const e=new sr(1,1,1,1),t=new Vt({name:"lodestone-sun-disc",transparent:!0,depthWrite:!1,depthTest:!0,side:On,uniforms:{coreColor:{value:new Ke(...this.sunlight.disc.coreColor)},glowColor:{value:new Ke(...this.sunlight.disc.glowColor)},coreIntensity:{value:this.sunlight.disc.coreIntensity},glowIntensity:{value:this.sunlight.disc.glowIntensity},softness:{value:this.sunlight.disc.softness}},vertexShader:`
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
			`}),i=new Qt(e,t);return i.renderOrder=10,i}createSkyMaterial(){return new Vt({name:"lodestone-sky",transparent:!1,depthWrite:!1,depthTest:!1,side:mn,uniforms:{sunDirection:{value:new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize()},zenithColor:{value:new Ke(...this.sunlight.sky.zenithColor)},horizonColor:{value:new Ke(...this.sunlight.sky.horizonColor)},groundColor:{value:new Ke(...this.sunlight.sky.groundColor)},sunGlowColor:{value:new Ke(...this.sunlight.sky.sunGlowColor)},sunGlowIntensity:{value:this.sunlight.sky.sunGlowIntensity},sunGlowExponent:{value:this.sunlight.sky.sunGlowExponent},invViewMatrix:{value:new st},invProjectionMatrix:{value:new st},starsEnabled:{value:this.sunlight.sky.stars.enabled},starsDensity:{value:this.sunlight.sky.stars.density},starsBrightness:{value:this.sunlight.sky.stars.brightness}},vertexShader:`
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
			`})}createSkyMesh(){const e=new sr(2,2,1,1),t=new Qt(e,this.skyMaterial);return t.frustumCulled=!1,t.renderOrder=-1e3,t}updateSkyUniforms(e){var a,o,c;const t=this.skyMaterial.uniforms,i=(a=t.sunDirection)==null?void 0:a.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize();const r=(o=t.invViewMatrix)==null?void 0:o.value,s=(c=t.invProjectionMatrix)==null?void 0:c.value;if(r){const l=new st;l.fromArray(e),r.copy(l).invert()}s&&s.copy(this.camera.projectionMatrix).invert()}createShadowDepthMaterial(){return new al({name:"lodestone-shadow-depth",vertexShader:`
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
			`,side:mn,depthTest:!0,depthWrite:!0})}initShadowMap(){if(!this.sunlight.shadow.enabled)return;const e=this.sunlight.shadow.mapSize;this.shadowMap=new Pn(e,e,{minFilter:vt,magFilter:vt,format:Wt,type:Rn})}updateShadowCamera(){const e=this.sunlight.shadow.frustumSize,t=e/2,i=new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),r=new H(this.targetCenter[0],this.targetCenter[1],this.targetCenter[2]),s=r.clone().add(i.clone().multiplyScalar(e));this.shadowCamera.left=-t,this.shadowCamera.right=t,this.shadowCamera.top=t,this.shadowCamera.bottom=-t,this.shadowCamera.near=.1,this.shadowCamera.far=e*2,this.shadowCamera.position.copy(s),this.shadowCamera.lookAt(r),this.shadowCamera.updateMatrixWorld(!0),this.shadowCamera.updateProjectionMatrix()}renderShadowPass(){if(!this.sunlight.shadow.enabled||!this.shadowMap||!this.shadowDirty)return;this.updateShadowCamera();const e=new st;e.multiplyMatrices(this.shadowCamera.projectionMatrix,this.shadowCamera.matrixWorldInverse);const t=r=>{var a;const s=r.uniforms;s.shadowMatrix&&s.shadowMatrix.value.copy(e),s.shadowMap&&(s.shadowMap.value=((a=this.shadowMap)==null?void 0:a.texture)??null)};t(this.opaqueMaterial),t(this.transparentMaterial);const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.shadowMap),this.renderer.setClearColor(16777215,1),this.renderer.clear(),this.structureScene.overrideMaterial=this.shadowDepthMaterial,this.renderer.render(this.structureScene,this.shadowCamera),this.structureScene.overrideMaterial=null,this.renderer.setRenderTarget(i),this.renderer.setClearColor(0,1),this.shadowDirty=!1}initPostProcessing(e,t){if(!this.sunlight.postProcess.enabled)return;const i=(s,a,o=!1)=>new Pn(s,a,{minFilter:Yt,magFilter:Yt,format:Wt,type:Qr,depthBuffer:o});this.sceneTarget=new Pn(e,t,{minFilter:Yt,magFilter:Yt,format:Wt,type:Qr,depthBuffer:!0}),this.sceneTarget.depthTexture=new qa(e,t),this.sceneTarget.depthTexture.format=Pi,this.sceneTarget.depthTexture.type=Bi,this.depthTarget=new Pn(e,t,{minFilter:vt,magFilter:vt,format:Wt,type:Rn,depthBuffer:!0}),this.aoTarget=i(e,t),this.bloomBrightTarget=i(e/2,t/2),this.bloomBlurTarget1=i(e/2,t/2),this.bloomBlurTarget2=i(e/2,t/2),this.godRaysTarget=i(e/2,t/2);const r=new sr(2,2);this.postProcessQuad=new Qt(r),this.postProcessQuad.frustumCulled=!1,this.ssaoMaterial=this.createSSAOMaterial(),this.bloomBrightMaterial=this.createBloomBrightMaterial(),this.bloomBlurMaterial=this.createBloomBlurMaterial(),this.godRaysMaterial=this.createGodRaysMaterial(),this.compositeMaterial=this.createCompositeMaterial()}resizePostProcessTargets(e,t){var i,r,s,a,o,c,l,u;this.sunlight.postProcess.enabled&&(e<=0||t<=0||((i=this.sceneTarget)==null||i.setSize(e,t),this.sceneTarget&&((r=this.sceneTarget.depthTexture)==null||r.dispose(),this.sceneTarget.depthTexture=new qa(e,t),this.sceneTarget.depthTexture.format=Pi,this.sceneTarget.depthTexture.type=Bi),(s=this.depthTarget)==null||s.setSize(e,t),(a=this.aoTarget)==null||a.setSize(e,t),(o=this.bloomBrightTarget)==null||o.setSize(Math.max(1,e/2),Math.max(1,t/2)),(c=this.bloomBlurTarget1)==null||c.setSize(Math.max(1,e/2),Math.max(1,t/2)),(l=this.bloomBlurTarget2)==null||l.setSize(Math.max(1,e/2),Math.max(1,t/2)),(u=this.godRaysTarget)==null||u.setSize(Math.max(1,e/2),Math.max(1,t/2))))}createSSAOMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Re},cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},aoRadius:{value:this.sunlight.postProcess.ao.radius},aoIntensity:{value:this.sunlight.postProcess.ao.intensity}},vertexShader:`
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
			`})}createBloomBlurMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},direction:{value:new Re(1,0)},resolution:{value:new Re}},vertexShader:`
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
			`})}createGodRaysMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},tScene:{value:null},sunPosition:{value:new Re(.5,.5)},intensity:{value:this.sunlight.postProcess.godRays.intensity},decay:{value:this.sunlight.postProcess.godRays.decay},density:{value:this.sunlight.postProcess.godRays.density},numSamples:{value:this.sunlight.postProcess.godRays.samples}},vertexShader:`
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
			`})}getSunScreenPosition(e){const t=new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i=this.getCameraPosition(e)??wn(0,0,10),r=new H(i[0],i[1],i[2]).add(t.multiplyScalar(100));return r.project(this.camera),new Re((r.x+1)*.5,(r.y+1)*.5)}renderPostProcessing(e){var o;if(!this.sunlight.postProcess.enabled||!this.sceneTarget||!this.postProcessQuad)return!1;const t=this.sunlight.postProcess;if(!(t.ao.enabled||t.bloom.enabled||t.godRays.enabled))return!1;const r=this.sceneTarget.width,s=this.sceneTarget.height;this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera);let a=this.sceneTarget.texture;if(t.ao.enabled&&this.ssaoMaterial&&this.aoTarget&&(this.ssaoMaterial.uniforms.tDiffuse.value=a,this.ssaoMaterial.uniforms.tDepth.value=this.sceneTarget.depthTexture,this.ssaoMaterial.uniforms.resolution.value.set(r,s),this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.postProcessQuad.material=this.ssaoMaterial,this.renderer.setRenderTarget(this.aoTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.aoTarget.texture),t.bloom.enabled&&this.bloomBrightMaterial&&this.bloomBrightTarget&&this.bloomBlurTarget1&&this.bloomBlurTarget2&&this.bloomBlurMaterial&&(this.bloomBrightMaterial.uniforms.tDiffuse.value=a,this.postProcessQuad.material=this.bloomBrightMaterial,this.renderer.setRenderTarget(this.bloomBrightTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.bloomBlurMaterial.uniforms.direction.value.set(1,0),this.bloomBlurMaterial.uniforms.resolution.value.set(r/2,s/2),this.postProcessQuad.material=this.bloomBlurMaterial,this.renderer.setRenderTarget(this.bloomBlurTarget1),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBlurTarget1.texture,this.bloomBlurMaterial.uniforms.direction.value.set(0,1),this.renderer.setRenderTarget(this.bloomBlurTarget2),this.renderer.render(this.postProcessQuad,this.skyCamera)),t.godRays.enabled&&this.godRaysMaterial&&this.godRaysTarget&&this.bloomBrightTarget){const c=this.getSunScreenPosition(e);this.godRaysMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.godRaysMaterial.uniforms.tScene.value=a,this.godRaysMaterial.uniforms.sunPosition.value.copy(c),this.postProcessQuad.material=this.godRaysMaterial,this.renderer.setRenderTarget(this.godRaysTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.godRaysTarget.texture}return this.compositeMaterial&&(this.compositeMaterial.uniforms.tScene.value=a,this.compositeMaterial.uniforms.tBloom.value=((o=this.bloomBlurTarget2)==null?void 0:o.texture)??null,this.postProcessQuad.material=this.compositeMaterial,this.renderer.setRenderTarget(null),this.renderer.render(this.postProcessQuad,this.skyCamera)),!0}};const PS=Object.freeze(Object.defineProperty({__proto__:null,BlockColors:lr,BlockDefinition:_o,BlockModel:ht,get BlockPos(){return At},BlockState:Ai,ChunkBuilder:Wr,get ChunkPos(){return Xl},ChunkSection:Wl,get Color(){return $e},get Cull(){return yt},get Direction(){return Ne},EFFECT_COLORS:hd,get Holder(){return no},Identifier:ee,get ItemModel(){return Kl},ItemRenderer:xo,ItemStack:ri,get ItemTint(){return so},get Json(){return te},Line:Bs,Mesh:ft,get MobEffectInstance(){return to},NbtAbstractList:Js,NbtByte:Ii,NbtByteArray:Ui,get NbtChunk(){return ai},NbtCompound:Tt,NbtDouble:Fi,NbtEnd:Qa,NbtFile:Xn,NbtFloat:ar,NbtInt:gn,NbtIntArray:Ni,NbtList:jt,NbtLong:is,NbtLongArray:ki,get NbtRegion(){return zi},NbtShort:or,NbtString:Wn,NbtTag:rt,get NbtType(){return fe},POTION_EFFECTS:fd,PalettedContainer:eo,get PotionContents(){return Fs},Quad:vo,RawDataInput:Af,RawDataOutput:Cf,Registry:io,Renderer:Sd,get Rotation(){return Zr},ShaderProgram:yd,get SpecialRenderers(){return et},StringReader:$t,Structure:Qy,TextureAtlas:An,ThreeStructureRenderer:RS,Vector:Ut,Vertex:Ln,clamp:Ei,createResourcesFromPack:xd,getBundledDefaultPackUrls:vd,getDefaultPackUrls:pc,isPowerOfTwo:Yl,loadDefaultPackResources:ES,upperPowerOfTwo:dc},Symbol.toStringTag,{value:"Module"})),{Structure:yo,ThreeStructureRenderer:So,loadDefaultPackResources:LS,createResourcesFromPack:DS,BlockState:Gh}=PS;var Xh;if((Xh=An==null?void 0:An.prototype)!=null&&Xh.getTextureUV){const n=An.prototype.getTextureUV;An.prototype.getTextureUV=function(e){if(!e)return[0,0,this.part,this.part];const t=e.toString();if(this.idMap[t])return this.idMap[t];if(t.startsWith("minecraft:")){const i=t.substring(10);if(this.idMap[i])return this.idMap[i]}else{const i="minecraft:"+t;if(this.idMap[i])return this.idMap[i]}return n.call(this,e)}}let zs,St,En,It,ut,Pe,ao=null,cr=null,oo="",Xr=null,xi,Hs=null,Tn=[0,0,0],Jl=10,As=null;yo.prototype.ensurePlacedCaches=function(){if(this.placedBlocksGrid)return;const n=this.size[0],e=this.size[1],t=this.size[2],i=n*e*t,r=new Uint16Array(i);r.fill(65535);const s=e*t;this.placedBlockObjectMap=new Map,this.placedBlockIndexMap=new Map;for(let a=0;a<this.blocks.length;a++){const o=this.blocks[a],c=o.pos[0]*s+o.pos[1]*t+o.pos[2];r[c]=o.state,this.placedBlockIndexMap.set(c,a)}this.placedBlocksGrid=r};yo.prototype.getBlock=function(n){if(!this.isInside(n))return null;this.ensurePlacedCaches(),this.size[0];const e=this.size[1],t=this.size[2],i=n[0]*(e*t)+n[1]*t+n[2],r=this.placedBlocksGrid[i];if(r===65535)return null;let s=this.placedBlockObjectMap.get(i);if(!s){const a=this.placedBlockIndexMap.get(i),o=a!==void 0?this.blocks[a]:null;s={pos:[n[0],n[1],n[2]],state:this.palette[r],nbt:o==null?void 0:o.nbt},this.placedBlockObjectMap.set(i,s)}return s};yo.prototype.getBlocks=function(){if(this.ensurePlacedCaches(),this.placedBlocksCache&&this.placedBlocksCache.length>0)return this.placedBlocksCache;this.placedBlocksCache=[];for(let n=0;n<this.blocks.length;n++){const e=this.blocks[n];this.placedBlocksCache.push({pos:[e.pos[0],e.pos[1],e.pos[2]],state:this.palette[e.state],nbt:e.nbt})}return this.placedBlocksCache};if(et!=null&&et.getBlockMesh){const n=et.getBlockMesh;et.getBlockMesh=function(e,t,i,r){var a;const s=e.getName().toString();if(s.includes("chest")&&!s.includes("ender_chest")&&!s.includes("boat")){let o="single";if(typeof e.getProperties=="function"){const c=e.getProperties();c&&c.type&&(o=c.type)}else e.properties&&(o=e.properties.type||"single");if(o==="left"||o==="right"){const c=new ft;if(e.isWaterlogged&&e.isWaterlogged()){const l=(a=et.liquidRenderer)==null?void 0:a.call(et,"water",0,i,r,0);l&&c.merge(l)}return c}}return n.call(this,e,t,i,r)}}var qh;if((qh=ht==null?void 0:ht.prototype)!=null&&qh.flatten){const n=ht.prototype.flatten;ht.prototype.flatten=function(e){if(this.parent){const t=this.parent.toString();if(t==="builtin/entity"||t==="minecraft:builtin/entity"||t==="builtin/generated"||t==="minecraft:builtin/generated"){this.parent=void 0;return}}return n.call(this,e)}}const IS=["chest","sign","frame","stair","slab","glass","door","trapdoor","fence","wall","gate","lantern","torch","chain","ladder","bars","pane","carpet","flower","tulip","rose","orchid","dandelion","poppy","bluet","lily","sunflower","lilac","peony","bush","sapling","mushroom","fungus","roots","sprout","vine","lichen","rail","lever","button","pressure_plate","tripwire","redstone","repeater","comparator","campfire","candle","amethyst","dripstone","coral","pickle","egg","bell","conduit","beacon","brewing","cauldron","hopper","composter","lectern","grindstone","stonecutter","anvil","enchanting","portal","dragon_egg","cake","bed","piston","head","skull","banner","bamboo","sugar_cane","cactus","kelp","seagrass"],Ql=n=>{if(!n)return!1;const e=n.toLowerCase();return IS.some(t=>e.includes(t))};Wr&&(Wr.prototype.needsCull=function(n,e){var s;const t=(s=this.structure.getBlock(At.towards(n.pos,e)))==null?void 0:s.state;if(!t)return!1;const i=t.getName().toString(),r=this.resources.getBlockFlags(t.getName());return!(!(r!=null&&r.opaque)||Ql(i))},Wr.prototype.isFullyOccluded=function(n){var i;const e=n.state.getName().toString();if(e.includes("chest")||e.includes("sign")||e.includes("frame"))return!1;const t=[Ne.UP,Ne.DOWN,Ne.NORTH,Ne.SOUTH,Ne.EAST,Ne.WEST];for(const r of t){const s=(i=this.structure.getBlock(At.towards(n.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=s.getName().toString();if(Ql(a))return!1;const o=this.resources.getBlockFlags(s.getName());if(!(o!=null&&o.opaque))return!1}return!0},Wr.prototype.processBlock=function(n,e){var c;const t=n.state.getName(),i=t.toString(),r=this.getBlockProps(n.state);if(this.isFullyOccluded(n))return;const s=[Math.floor(n.pos[0]/this.chunkSize[0]),Math.floor(n.pos[1]/this.chunkSize[1]),Math.floor(n.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(e&&!e.has(a))return;const o=this.getChunk(s);try{const l={up:this.needsCull(n,Ne.UP),down:this.needsCull(n,Ne.DOWN),west:this.needsCull(n,Ne.WEST),east:this.needsCull(n,Ne.EAST),north:this.needsCull(n,Ne.NORTH),south:this.needsCull(n,Ne.SOUTH)},u=new ft;if(!i.includes("sign")){const d=this.resources.getBlockDefinition(t);if(d)try{u.merge(d.getMesh(t,r,this.resources,this.resources,l))}catch{}}if(et!=null&&et.getBlockMesh)try{const d=et.getBlockMesh(n.state,n.nbt,this.resources,l);d&&!d.isEmpty()&&u.merge(d)}catch{}u.isEmpty()||(this.finishChunkMesh(u,n.pos,t,r,a),(c=this.resources.getBlockFlags(n.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(u):o.mesh.merge(u))}catch(l){console.error(`Error rendering block ${i}`,l)}});So.prototype.applyDrawDistance=function(){if(this.chunkMeshes)for(let n=0;n<this.chunkMeshes.length;n++){const e=this.chunkMeshes[n];e.visible=!0,e.frustumCulled=!1}};const Vh=new st,Hr=new st,xs=[0,0,0];So.prototype.prepareCamera=function(n){if(Vh.fromArray(n),Hr.copy(Vh).invert(),this.camera.position.setFromMatrixPosition(Hr),this.camera.quaternion.setFromRotationMatrix(Hr),this.camera.updateMatrixWorld(!0),xs[0]=Hr.elements[12],xs[1]=Hr.elements[13],xs[2]=Hr.elements[14],this.drawDistance)this.applyDrawDistance(xs,this.drawDistance);else if(this.chunkMeshes)for(let e=0;e<this.chunkMeshes.length;e++)this.chunkMeshes[e].visible=!0;typeof this.updateEmissiveLightsForCamera=="function"&&this.updateEmissiveLightsForCamera(xs)};So.prototype.rebuildChunksAsync=async function(n){const e=++this.buildToken;if(window.AndroidHost&&window.AndroidHost.onLoadingProgress("RENDERING_0%"),await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:n,timeSliceMs:this.asyncChunkBuildTimeMs||12,onProgress:(r,s)=>{if(window.AndroidHost){const a=Math.floor(r/Math.max(1,s)*50);window.AndroidHost.onLoadingProgress(`RENDERING_${a}%`)}}}),e!==this.buildToken)return;const i=this.rebuildChunkObjectsAsync.call(this,e).then(()=>{if(this.chunkMeshes)for(let r=0;r<this.chunkMeshes.length;r++){const s=this.chunkMeshes[r];s.visible=!0,s.frustumCulled=!1}window.AndroidHost&&e===this.buildToken&&window.AndroidHost.onLoadingProgress("RENDERING_100%")});return this.buildPromise=i,i};async function US(){zs=document.getElementById("renderer-container");const n=window.innerWidth/window.innerHeight;En=new ln(60,n,.5,1e5),It=new Xa(-10*n,10*n,10,-10,.5,1e5),St=En,St.position.set(10,15,20);try{const e=Date.now(),t=window.location.href.split("?")[0].replace("index.html","")+"default-pack/",i=T=>{const w=new Set;return T&&T.split(/\r?\n/).forEach(v=>{const D=v.trim();D&&!D.startsWith("#")&&w.add(D.startsWith("minecraft:")?D:"minecraft:"+D)}),w},[r,s,a,o,c]=await Promise.all([LS({baseUrl:t+`?cb=${e}`}),fetch(t+`block-flags/opaque.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/transparent.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/non_self_culling.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/emissive.json?cb=${e}`).catch(()=>null)]),l=["acacia","bamboo","birch","cherry","crimson","dark_oak","jungle","mangrove","oak","pale_oak","poplar","spruce","warped"];l.forEach(T=>{delete r.assets.blockstates[`${T}_sign`],delete r.assets.models[`${T}_sign`],delete r.assets.blockstates[`${T}_wall_sign`],delete r.assets.models[`${T}_wall_sign`],delete r.assets.blockstates[`${T}_hanging_sign`],delete r.assets.models[`${T}_hanging_sign`],delete r.assets.blockstates[`${T}_wall_hanging_sign`],delete r.assets.models[`${T}_wall_hanging_sign`]});const u=(T,w,v)=>({variants:{"type=left,facing=north":{model:w,y:0},"type=left,facing=south":{model:w,y:180},"type=left,facing=west":{model:w,y:270},"type=left,facing=east":{model:w,y:90},"type=right,facing=north":{model:v,y:0},"type=right,facing=south":{model:v,y:180},"type=right,facing=west":{model:v,y:270},"type=right,facing=east":{model:v,y:90},"type=single,facing=north":{model:T,y:0},"type=single,facing=south":{model:T,y:180},"type=single,facing=west":{model:T,y:270},"type=single,facing=east":{model:T,y:90},"facing=north":{model:T,y:0},"facing=south":{model:T,y:180},"facing=west":{model:T,y:270},"facing=east":{model:T,y:90}}});r.assets.blockstates.chest=u("block/chest","block/chest_left","block/chest_right"),r.assets.blockstates.trapped_chest=u("block/chest","block/trapped_chest_left","block/trapped_chest_right");const f=[{name:"copper_chest",tex:"copper"},{name:"exposed_copper_chest",tex:"copper_exposed"},{name:"weathered_copper_chest",tex:"copper_weathered"},{name:"oxidized_copper_chest",tex:"copper_oxidized"},{name:"waxed_copper_chest",tex:"copper"},{name:"waxed_exposed_copper_chest",tex:"copper_exposed"},{name:"waxed_weathered_copper_chest",tex:"copper_weathered"},{name:"waxed_oxidized_copper_chest",tex:"copper_oxidized"}];for(const T of f)r.assets.blockstates[T.name]=u(`block/${T.name}`,`block/${T.name}_left`,`block/${T.name}_right`);const d=(T,w)=>{const v=T?[1,0,1]:[0,0,1],D=T?[16,10,15]:[15,10,15],O=T?[1,10,1]:[0,10,1],U=T?[16,14,15]:[15,14,15],k=T?[15,7,0]:[0,7,0],L=T?[16,11,2]:[1,11,2],F={north:{uv:[10.75,8.25,14.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7.25,10.75],rotation:180,texture:"#0"},up:{uv:[11,8.25,7.25,4.75],texture:"#0"},down:{uv:[7.25,8.25,3.5,4.75],texture:"#0"}},j={north:{uv:[10.75,3.75,14.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7.25,4.75],rotation:180,texture:"#0"},up:{uv:[11,3.5,7.25,0],texture:"#0"},down:{uv:[7.25,3.5,3.5,0],texture:"#0"}},G={north:{uv:[.25,.25,.5,1.25],rotation:180,texture:"#0"},south:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.5,0,.75,.25],texture:"#0"},down:{uv:[.25,0,.5,.25],texture:"#0"}};return T?(F.west={uv:[7.25,8.25,10.75,10.75],rotation:180,texture:"#0"},j.west={uv:[7.25,3.75,10.75,4.75],rotation:180,texture:"#0"},G.west={uv:[.5,.25,.75,1.25],rotation:180,texture:"#0"}):(F.east={uv:[3.5,8.25,0,10.75],rotation:180,texture:"#0"},j.east={uv:[3.5,3.75,0,4.75],rotation:180,texture:"#0"},G.east={uv:[.25,.25,0,1.25],rotation:180,texture:"#0"}),{textures:{0:w},elements:[{from:v,to:D,faces:F},{from:O,to:U,faces:j},{from:k,to:L,faces:G}]}};r.assets.models["block/chest_left"]=d(!0,"entity/chest/normal_left"),r.assets.models["block/chest_right"]=d(!1,"entity/chest/normal_right"),r.assets.models["block/trapped_chest_left"]=d(!0,"entity/chest/trapped_left"),r.assets.models["block/trapped_chest_right"]=d(!1,"entity/chest/trapped_right");for(const T of f)r.assets.models[`block/${T.name}_left`]=d(!0,`entity/chest/${T.tex}_left`),r.assets.models[`block/${T.name}_right`]=d(!1,`entity/chest/${T.tex}_right`);const h=T=>({variants:{"facing=south":{model:T},"facing=north":{model:T,y:180},"facing=east":{model:T,y:90},"facing=west":{model:T,y:270},"facing=up":{model:T,x:270},"facing=down":{model:T,x:90},"facing=south,fixed=false":{model:T},"facing=north,fixed=false":{model:T,y:180},"facing=east,fixed=false":{model:T,y:90},"facing=west,fixed=false":{model:T,y:270},"facing=up,fixed=false":{model:T,x:270},"facing=down,fixed=false":{model:T,x:90},"facing=south,fixed=true":{model:T},"facing=north,fixed=true":{model:T,y:180},"facing=east,fixed=true":{model:T,y:90},"facing=west,fixed=true":{model:T,y:270},"facing=up,fixed=true":{model:T,x:270},"facing=down,fixed=true":{model:T,x:90},"facing=south,map=false":{model:T},"facing=north,map=false":{model:T,y:180},"facing=east,map=false":{model:T,y:90},"facing=west,map=false":{model:T,y:270},"facing=up,map=false":{model:T,x:270},"facing=down,map=false":{model:T,x:90},"facing=south,map=true":{model:T},"facing=north,map=true":{model:T,y:180},"facing=east,map=true":{model:T,y:90},"facing=west,map=true":{model:T,y:270},"facing=up,map=true":{model:T,x:270},"facing=down,map=true":{model:T,x:90},"":{model:T}}});r.assets.blockstates.item_frame=h("block/item_frame"),r.assets.blockstates.glow_item_frame=h("block/glow_item_frame");const g=()=>({textures:{wood:"block/birch_planks"},elements:[{from:[3,3,0],to:[13,13,.5],faces:{north:{uv:[3,3,13,13],texture:"#wood"},south:{uv:[3,3,13,13],texture:"#wood"}}},{from:[2,2,0],to:[14,3,1],faces:{north:{uv:[2,13,14,14],texture:"#wood"},south:{uv:[2,13,14,14],texture:"#wood"},up:{uv:[2,15,14,16],texture:"#wood"},down:{uv:[2,0,14,1],texture:"#wood"},east:{uv:[0,13,1,14],texture:"#wood"},west:{uv:[15,13,16,14],texture:"#wood"}}},{from:[2,13,0],to:[14,14,1],faces:{north:{uv:[2,2,14,3],texture:"#wood"},south:{uv:[2,2,14,3],texture:"#wood"},up:{uv:[2,0,14,1],texture:"#wood"},down:{uv:[2,15,14,16],texture:"#wood"},east:{uv:[0,2,1,3],texture:"#wood"},west:{uv:[15,2,16,3],texture:"#wood"}}},{from:[2,3,0],to:[3,13,1],faces:{north:{uv:[13,3,14,13],texture:"#wood"},south:{uv:[2,3,3,13],texture:"#wood"},east:{uv:[0,3,1,13],texture:"#wood"},west:{uv:[15,3,16,13],texture:"#wood"}}},{from:[13,3,0],to:[14,13,1],faces:{north:{uv:[2,3,3,13],texture:"#wood"},south:{uv:[13,3,14,13],texture:"#wood"},east:{uv:[0,3,1,13],texture:"#wood"},west:{uv:[15,3,16,13],texture:"#wood"}}}]});r.assets.models["block/item_frame"]=g(),r.assets.models["block/glow_item_frame"]=g();const _=(T,w="")=>{if(!Array.isArray(T)||w.includes("repeater")||w.includes("comparator"))return T;const v=[],D=new Set;for(const O of T){if(!O||typeof O!="object"){v.push(O);continue}const U=O.from,k=O.to;if(!Array.isArray(U)||!Array.isArray(k)||U.length!==3||k.length!==3){v.push(O);continue}const L=U[0]===k[0]||U[2]===k[2];let F="#torch";if(O.faces&&typeof O.faces=="object"){for(const W of Object.values(O.faces))if(W&&typeof W=="object"&&W.texture){F=W.texture;break}}const j=F.includes("redstone")||w.includes("redstone");if(L&&j){const W=U[1],J=k[1],Q=Math.round(J-W);if(Q<=0)continue;let de=U[0]===k[0]?U[0]:(U[0]+k[0])/2,ve=U[2]===k[2]?U[2]:(U[2]+k[2])/2,V=Math.round(de),ie=Math.round(ve);Math.abs(V-8)<=2&&Math.abs(ie-8)<=2&&(V=8,ie=8);const ue=O.rotation,oe=ue?JSON.stringify(ue):"",we=`${V},${W},${ie},${J},${oe}`;if(D.has(we))continue;D.add(we);const Se=Math.max(0,16-Q),N={from:[V-1,W,ie-1],to:[V+1,J,ie+1],shade:!1,faces:{up:{texture:F,uv:[7,6,9,8]},down:{texture:F,uv:[7,13,9,15]},north:{texture:F,uv:[7,Se,9,16]},south:{texture:F,uv:[7,Se,9,16]},east:{texture:F,uv:[7,Se,9,16]},west:{texture:F,uv:[7,Se,9,16]}}};ue&&(N.rotation=ue),v.push(N)}else v.push(O)}return v};r.assets&&r.assets.models&&Object.keys(r.assets.models).forEach(T=>{const w=r.assets.models[T];w&&Array.isArray(w.elements)&&(w.elements=_(w.elements,T))});const m=s&&s.ok?await s.text():"",p=a&&a.ok?await a.text():"",M=o&&o.ok?await o.text():"",x=c&&c.ok?await c.json():{},y=i(m),R=i(p),C=new Set;if(y.forEach(T=>{Ql(T)?R.add(T):C.add(T)}),r.assets&&r.assets.textures){const T=r.assets.textures;Object.keys(T).forEach(w=>{w.startsWith("minecraft:")?T[w.replace("minecraft:","")]=T[w]:T["minecraft:"+w]=T[w]})}const E={opaque:C,transparent:R,nonSelfCulling:i(M),emissive:x};if(Xr=DS({assets:r.assets,atlas:r.atlas,flags:E}),Xr&&Xr.textures){const T=Xr.textures;Object.keys(T).forEach(w=>{w.startsWith("minecraft:")?T[w.replace("minecraft:","")]=T[w]:T["minecraft:"+w]=T[w]}),l.forEach(w=>{T[`entity/signs/${w}`]&&(T[`minecraft:entity/signs/${w}`]=T[`entity/signs/${w}`]),T[`entity/signs/hanging/${w}`]&&(T[`minecraft:entity/signs/hanging/${w}`]=T[`entity/signs/hanging/${w}`])})}window.AndroidHost&&window.AndroidHost.onLoadingProgress("READY")}catch(e){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: Failed to load default resource pack. "+(e==null?void 0:e.message))}}const Wh=ot();function mc(){As=requestAnimationFrame(mc),ut&&ut.update(),Pe&&St&&(St.updateMatrixWorld(!0),nS(Wh,St.matrixWorldInverse.elements),Pe.drawStructure(Wh))}window.startRenderLoop=function(){As===null&&mc()};window.stopRenderLoop=function(){As!==null&&(cancelAnimationFrame(As),As=null)};window.destroyRenderer=function(){var n,e;if(window.stopRenderLoop(),ut&&ut.dispose(),Pe)try{if(Pe.chunkMeshes){for(const t of Pe.chunkMeshes)t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{var r;return(r=i.dispose)==null?void 0:r.call(i)}):(e=(n=t.material).dispose)==null||e.call(n));Pe.chunkMeshes=[]}Pe.renderer&&(Pe.renderer.dispose(),Pe.renderer.forceContextLoss())}catch(t){console.error("Error destroying renderer: ",t)}cr=null,ao=null,Hs=null,zs&&(zs.innerHTML="")};async function NS(n,e){const t=n.getCompound("Size"),i=[t.getNumber("x")??0,t.getNumber("y")??0,t.getNumber("z")??0],r=[Math.abs(i[0]),Math.abs(i[1]),Math.abs(i[2])],s=n.getList("BlockStatePalette"),a=[];s.forEach(W=>{if(!W.isCompound())return;const J=W.getString("Name")??"minecraft:air",Q={};if(W.has("Properties")){const de=W.get("Properties");de&&de.isCompound()&&de.forEach((ve,V)=>{ve&&(V&&V.value!==void 0?typeof V.value=="object"&&Array.isArray(V.value)?Q[ve]=String(V.value[1]??V.value[0]):Q[ve]=String(V.value):V&&typeof V.getAsString=="function"?Q[ve]=V.getAsString():V!=null&&(Q[ve]=String(V)))})}a.push(new Gh(J,Q))});const o=a.map(W=>W.is("minecraft:air")),c=n.has("BlockStates")?n.getLongArray("BlockStates"):null;let l=0,u=new BigUint64Array(0);if(c){if(typeof c.getItems=="function"){const W=c.getItems();l=W.length,u=new BigUint64Array(l);for(let J=0;J<l;J++){const Q=W[J];if(Q&&typeof Q.getAsPair=="function"){const de=Q.getAsPair(),ve=BigInt(de[0]>>>0),V=BigInt(de[1]>>>0);u[J]=ve<<32n|V}else if(Q&&typeof Q.value=="bigint")u[J]=BigInt(Q.value);else if(Array.isArray(Q)){const de=BigInt((Q[0]??0)>>>0),ve=BigInt((Q[1]??0)>>>0);u[J]=de<<32n|ve}}}else if(Array.isArray(c.value)){const W=c.value;l=W.length,u=new BigUint64Array(l);for(let J=0;J<l;J++)u[J]=BigInt(W[J])}}const f=Math.max(2,Math.ceil(Math.log2(Math.max(2,a.length)))),d=(1n<<BigInt(f))-1n,h=r[0],g=r[1],_=r[2],m=h*g*_,p=[];let M=h,x=g,y=_,R=0,C=0,E=0,T=!1,w=performance.now();for(let W=0;W<m;W++){let J=0;if(l>0){const Q=BigInt(W*f),de=Number(Q>>6n),ve=Q&63n,V=BigInt((W+1)*f-1),ie=Number(V>>6n);if(de<l){if(de===ie)J=Number(u[de]>>ve&d);else if(ie<l){const ue=64n-ve;J=Number((u[de]>>ve|u[ie]<<ue)&d)}}}if(J>=0&&J<a.length&&!o[J]){const Q=W%h,de=Math.floor(W/(h*_)),ve=Math.floor(W/h)%_;p.push({pos:[Q,de,ve],state:J}),Q<M&&(M=Q),de<x&&(x=de),ve<y&&(y=ve),Q>R&&(R=Q),de>C&&(C=de),ve>E&&(E=ve),T=!0}W&255||performance.now()-w>=12&&(e&&e(Math.floor(W/m*100)),await new Promise(de=>requestAnimationFrame(de)),w=performance.now())}if(T){Tn=[(M+R)/2,(x+C)/2,(y+E)/2];const W=R-M+1,J=C-x+1,Q=E-y+1;Jl=Math.max(1,.5*Math.sqrt(W*W+J*J+Q*Q))}else Tn=[h/2,g/2,_/2],Jl=Math.max(1,Math.max(h,g,_)/2);const v=["Entities","PendingBlockEntities","TileEntities","BlockEntities"],D=n.has("Position")?n.getCompound("Position"):null,O=D?D.getNumber("x")??0:0,U=D?D.getNumber("y")??0:0,k=D?D.getNumber("z")??0:0,L=i[0]<0?O+i[0]+1:O,F=i[1]<0?U+i[1]+1:U,j=i[2]<0?k+i[2]+1:k,G=new Set;return p.forEach(W=>G.add(W.pos[0]+","+W.pos[1]+","+W.pos[2])),v.forEach(W=>{if(!n.has(W))return;const J=n.getList(W);J&&J.forEach(Q=>{if(!Q||!Q.isCompound())return;const ve=(Q.getString("id")??Q.getString("Id")??Q.getString("Name")??"").toLowerCase().replace("minecraft:","");if(ve!=="item_frame"&&ve!=="glow_item_frame")return;let V=0,ie=0,ue=0;if(Q.has("Pos")){const ye=Q.getList("Pos");ye&&ye.length>=3&&(V=ye.getNumber(0)??0,ie=ye.getNumber(1)??0,ue=ye.getNumber(2)??0)}else Q.has("TileX")?(V=Q.getNumber("TileX")??0,ie=Q.getNumber("TileY")??0,ue=Q.getNumber("TileZ")??0):Q.has("x")&&(V=Q.getNumber("x")??0,ie=Q.getNumber("y")??0,ue=Q.getNumber("z")??0);let oe=Math.floor(V-L),we=Math.floor(ie-F),Se=Math.floor(ue-j);if((oe<0||oe>=h||we<0||we>=g||Se<0||Se>=_)&&(oe=Math.floor(V),we=Math.floor(ie),Se=Math.floor(ue)),oe<0||oe>=h||we<0||we>=g||Se<0||Se>=_)return;let N="south",he=-1;if(Q.has("Facing")){const ye=Q.get("Facing");typeof ye=="number"?he=ye:ye&&typeof ye.getAsNumber=="function"?he=ye.getAsNumber():ye&&ye.value!==void 0?he=Number(ye.value):typeof ye=="string"&&(N=ye.toLowerCase())}else Q.has("FacingDirection")?he=Q.getNumber("FacingDirection")??-1:Q.has("Direction")&&(he=Q.getNumber("Direction")??-1);if(he!==-1){const ye={0:"down",1:"up",2:"north",3:"south",4:"west",5:"east"};ye[he]&&(N=ye[he])}const Z=oe+","+we+","+Se;G.has(Z)&&(N==="south"&&Se+1<_?Se+=1:N==="north"&&Se-1>=0?Se-=1:N==="east"&&oe+1<h?oe+=1:N==="west"&&oe-1>=0?oe-=1:N==="up"&&we+1<g?we+=1:N==="down"&&we-1>=0&&(we-=1));const De=ve==="glow_item_frame"?"minecraft:glow_item_frame":"minecraft:item_frame",Ee=new Gh(De,{facing:N,fixed:"false",invisible:"false",map:"false"});a.push(Ee);const ke=a.length-1;p.push({pos:[oe,we,Se],state:ke}),G.add(oe+","+we+","+Se)})}),e&&e(100),new yo(r,a,p)}window.loadLitematic=async function(){try{ao=await(await fetch("./model.litematic")).arrayBuffer(),Hs=Xn.read(new Uint8Array(ao)).root;const t=Hs.getCompound("Regions");let i=[];t&&typeof t.keys=="function"?i=Array.from(t.keys()):t&&(i=Object.keys(t)),i=i.filter(r=>typeof r=="string"&&r!=="properties"&&r!=="constructor"&&r!=="__proto__"),i.length===0&&(i=["Region1"]),oo=i[0],window.AndroidHost&&window.AndroidHost.onRegionsParsed(JSON.stringify(i)),await wd(oo),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS")}catch(n){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(n==null?void 0:n.message))}};async function wd(n){var u,f;if(!ao||!Xr||!Hs)return;if(window.stopRenderLoop(),ut&&ut.dispose(),Pe)try{if(Pe.chunkMeshes){for(const d of Pe.chunkMeshes)d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material.forEach(h=>{var g;return(g=h.dispose)==null?void 0:g.call(h)}):(f=(u=d.material).dispose)==null||f.call(u));Pe.chunkMeshes=[]}Pe.dispose()}catch(d){console.error("Error disposing renderer: ",d)}zs.innerHTML="",xi=document.createElement("canvas"),xi.style.width="100%",xi.style.height="100%",zs.appendChild(xi);const t=Hs.getCompound("Regions").getCompound(n);cr=await NS(t,d=>{window.AndroidHost&&window.AndroidHost.onLoadingProgress(`DECODING_${d}%`)}),await kS();const i=cr.getSize(),r=i[0]*i[1]*i[2],s=Math.max(i[0],i[1],i[2]),a=r>1e6||s>128?32:16,o={asyncBuild:!0,asyncChunkBuildTimeMs:12,chunkSize:[a,a,a]};if(Pe=new So(xi,cr,Xr,o),Pe.drawDistance=1e5,Pe.atlasTexture){const d=Pe.atlasTexture;d.minFilter=ys,d.magFilter=vt,Pe.renderer&&(d.anisotropy=Pe.renderer.capabilities.getMaxAnisotropy()),d.needsUpdate=!0}Pe.sunlight&&Pe.sunlight.fog&&(Pe.sunlight.fog.density=0,Pe.sunlight.fog.heightFalloff=0),Pe.setViewport(0,0,window.innerWidth,window.innerHeight),Pe.camera=St,Pe.skyScene&&Pe.skyScene.clear(),Pe.renderer&&(Pe.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),Pe.renderer.toneMapping=jh,Pe.renderer.toneMappingExposure=.7),Gr=!0,window.toggleDayNight();const c=window.innerWidth/window.innerHeight;En.far=1e5,En.aspect=c,En.updateProjectionMatrix(),It.far=1e5,It.updateProjectionMatrix(),ut&&ut.dispose(),ut=new Tf(St,xi),ut.enableDamping=!0,ut.dampingFactor=.05,ut.target.set(Tn[0],Tn[1],Tn[2]);const l=Math.max(Jl*2.2,10);St.position.set(Tn[0]+l,Tn[1]+l*.8,Tn[2]+l),ut.update(),window.addEventListener("resize",()=>{const d=window.innerWidth,h=window.innerHeight,g=d/h;if(Pe.setViewport(0,0,d,h),En.aspect=g,En.updateProjectionMatrix(),St===It){const m=St.position.distanceTo(ut.target)*Math.tan(En.fov*Math.PI/360)*2,p=m*g;It.left=-p/2,It.right=p/2,It.top=m/2,It.bottom=-m/2,It.far=1e5,It.updateProjectionMatrix()}}),mc(),await Pe.whenReady()}async function kS(){if(cr)try{const n=cr,e=n.blocks||[],t=n.palette||[],i={};let r=0;const s=e.length;let a=0,o=performance.now();for(;a<s;){const c=Math.min(a+5e4,s);for(;a<c;a++){const l=e[a];if(l){const u=l.state,f=t[u];if(f){const d=f.getName().toString();i[d]=(i[d]||0)+1,r++}}}a<s&&performance.now()-o>=12&&(await new Promise(l=>requestAnimationFrame(l)),o=performance.now())}window.AndroidHost&&window.AndroidHost.onStatisticsUpdated(r,JSON.stringify(i))}catch(n){console.error("Error collecting block statistics: ",n)}}window.toggleCameraView=function(){if(!ut||!xi)return;const n=ut.target.clone(),e=St.position.clone(),t=new H().subVectors(e,n),i=Math.max(t.length(),5);if(St===En){const r=window.innerWidth/window.innerHeight,s=i*Math.tan(En.fov*Math.PI/360)*2,a=s*r;It.left=-a/2,It.right=a/2,It.top=s/2,It.bottom=-s/2,It.far=1e5,It.updateProjectionMatrix(),St=It}else St=En;St.position.copy(e),Pe&&(Pe.camera=St,Pe.sunlight&&Pe.sunlight.postProcess&&(St===It?Pe.sunlight.postProcess.enabled=!1:Pe.sunlight.postProcess.enabled=!0)),ut.dispose(),ut=new Tf(St,xi),ut.enableDamping=!0,ut.dampingFactor=.05,ut.target.copy(n),ut.update()};let Gr=!1;window.toggleDayNight=function(){if(Gr=!Gr,Pe){if(Pe.renderer&&Pe.renderer.setClearColor(Gr?264208:11062,1),Pe.sunlight){const n=Pe.sunlight;Gr?(n.intensity=.08,n.ambientIntensity=.12,n.emissive&&(n.emissive.intensity=.25),n.direction=[-.2,-.9,-.3],n.light&&(n.light.intensity=.08),n.ambient&&(n.ambient.intensity=.12)):(n.intensity=.5,n.ambientIntensity=.65,n.emissive&&(n.emissive.intensity=.1),n.direction=[.6,1,.8],n.light&&(n.light.intensity=.5),n.ambient&&(n.ambient.intensity=.65))}Pe.opaqueMaterial&&Pe.applySunlightUniforms(Pe.opaqueMaterial),Pe.transparentMaterial&&Pe.applySunlightUniforms(Pe.transparentMaterial)}return Gr};window.resetCamera=function(){if(!cr||!ut||!St)return;const n=new H().subVectors(St.position,ut.target);ut.target.set(Tn[0],Tn[1],Tn[2]),St.position.addVectors(ut.target,n),ut.update()};window.switchRegion=async function(n){n!==oo&&(window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),oo=n,await wd(n),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS"))};US();
