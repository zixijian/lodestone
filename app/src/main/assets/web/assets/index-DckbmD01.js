var _d=Object.defineProperty;var vd=(n,e,t)=>e in n?_d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var C=(n,e,t)=>vd(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $l="164",_r={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xd=0,fc=1,Sd=2,Nh=1,yd=2,Qn=3,gn=0,tn=1,Fn=2,Ti=0,Hr=1,dc=2,pc=3,mc=4,Md=5,Zi=100,wd=101,bd=102,Ed=103,Td=104,Ad=200,Rd=201,Cd=202,Pd=203,Sl=204,yl=205,Ld=206,Dd=207,Id=208,Ud=209,Nd=210,Fd=211,Od=212,kd=213,Bd=214,zd=0,Hd=1,Gd=2,Ua=3,Vd=4,Wd=5,Xd=6,qd=7,Fh=0,$d=1,Yd=2,Ai=0,jd=1,Zd=2,Kd=3,Jd=4,Qd=5,ep=6,tp=7,Oh=300,$r=301,Yr=302,Ml=303,wl=304,so=306,bl=1e3,Tn=1001,El=1002,St=1003,np=1004,Ys=1005,$t=1006,xo=1007,er=1008,Oi=1009,ip=1010,rp=1011,kh=1012,Bh=1013,ki=1014,An=1015,jr=1016,zh=1017,Hh=1018,Fs=1020,sp=35902,ap=1021,op=1022,Vt=1023,lp=1024,cp=1025,Ri=1026,ws=1027,up=1028,Gh=1029,hp=1030,Vh=1031,Wh=1033,So=33776,yo=33777,Mo=33778,wo=33779,gc=35840,_c=35841,vc=35842,xc=35843,Sc=36196,yc=37492,Mc=37496,wc=37808,bc=37809,Ec=37810,Tc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Lc=37816,Dc=37817,Ic=37818,Uc=37819,Nc=37820,Fc=37821,bo=36492,Oc=36494,kc=36495,fp=36283,Bc=36284,zc=36285,Hc=36286,dp=3200,pp=3201,mp=0,gp=1,yi="",In="srgb",zi="srgb-linear",Yl="display-p3",ao="display-p3-linear",Na="linear",ut="srgb",Fa="rec709",Oa="p3",xr=7680,Gc=519,_p=512,vp=513,xp=514,Xh=515,Sp=516,yp=517,Mp=518,wp=519,Vc=35044,Wc="300 es",ii=2e3,ka=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,Tl=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function bp(n,e){return(n%e+e)%e}function Eo(n,e,t){return(1-t)*n+t*e}function os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ep={DEG2RAD:Pa};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],x=r[4],y=r[7],P=r[2],A=r[5],E=r[8];return s[0]=a*_+o*M+c*P,s[3]=a*m+o*x+c*A,s[6]=a*p+o*y+c*E,s[1]=l*_+u*M+f*P,s[4]=l*m+u*x+f*A,s[7]=l*p+u*y+f*E,s[2]=d*_+h*M+g*P,s[5]=d*m+h*x+g*A,s[8]=d*p+h*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ve;function qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tp(){const n=Ba("canvas");return n.style.display="block",n}const Xc={};function Ap(n){n in Xc||(Xc[n]=!0,console.warn(n))}const qc=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[zi]:{transfer:Na,primaries:Fa,toReference:n=>n,fromReference:n=>n},[In]:{transfer:ut,primaries:Fa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ao]:{transfer:Na,primaries:Oa,toReference:n=>n.applyMatrix3($c),fromReference:n=>n.applyMatrix3(qc)},[Yl]:{transfer:ut,primaries:Oa,toReference:n=>n.convertSRGBToLinear().applyMatrix3($c),fromReference:n=>n.applyMatrix3(qc).convertLinearToSRGB()}},Rp=new Set([zi,ao]),st={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Rp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=js[e].toReference,r=js[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return js[n].primaries},getTransfer:function(n){return n===yi?Na:js[n].transfer}};function Gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Sr;class Cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Ba("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gr(t[i]/255)*255):t[i]=Gr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pp=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ro(r[a].image)):s.push(Ro(r[a]))}else s=Ro(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lp=0;class Zt extends mr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=Tn,r=Tn,s=$t,a=er,o=Vt,c=Oi,l=Zt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Os(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Oh;Zt.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(h+1)/2,P=(p+1)/2,A=(u+d)/4,E=(f+_)/4,U=(g+m)/4;return x>y&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=E/s,r=U/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dp extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Dp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yh extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ip extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=1-o;const p=c*d+l*h+u*g+f*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,p*M);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const y=o*M;if(c=c*m+d*y,l=l*m+h*y,u=u*m+g*y,f=f*m+_*y,m===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=P,l*=P,u*=P,f*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-o*h,e[t+2]=l*g+u*h+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new k,Yc=new cr;class ks{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Ks.subVectors(this.max,ls),yr.subVectors(e.a,ls),Mr.subVectors(e.b,ls),wr.subVectors(e.c,ls),ci.subVectors(Mr,yr),ui.subVectors(wr,Mr),Gi.subVectors(yr,wr);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Gi.z,Gi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Gi.z,0,-Gi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Gi.y,Gi.x,0];return!Po(t,yr,Mr,wr,Ks)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,yr,Mr,wr,Ks))?!1:(Js.crossVectors(ci,ui),t=[Js.x,Js.y,Js.z],Po(t,yr,Mr,wr,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new k,new k,new k,new k,new k,new k,new k,new k],xn=new k,Zs=new ks,yr=new k,Mr=new k,wr=new k,ci=new k,ui=new k,Gi=new k,ls=new k,Ks=new k,Js=new k,Vi=new k;function Po(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);const o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Up=new ks,cs=new k,Lo=new k;class oo{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Up.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Lo)),this.expandByPoint(cs.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new k,Do=new k,Qs=new k,hi=new k,Io=new k,ea=new k,Uo=new k;class jl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Do.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Do);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=hi.dot(this.direction),c=-hi.dot(Qs),l=hi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Do).addScaledVector(Qs,d),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,r,s){Io.subVectors(t,e),ea.subVectors(i,e),Uo.crossVectors(Io,ea);let a=this.direction.dot(Uo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const c=o*this.direction.dot(ea.crossVectors(hi,ea));if(c<0)return null;const l=o*this.direction.dot(Io.cross(hi));if(l<0||c+l>a)return null;const u=-o*hi.dot(Uo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,Fp)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),fi.crossVectors(i,sn),fi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),fi.crossVectors(i,sn)),fi.normalize(),ta.crossVectors(sn,fi),r[0]=fi.x,r[4]=ta.x,r[8]=sn.x,r[1]=fi.y,r[5]=ta.y,r[9]=sn.y,r[2]=fi.z,r[6]=ta.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],x=i[7],y=i[11],P=i[15],A=r[0],E=r[4],U=r[8],w=r[12],v=r[1],D=r[5],z=r[9],I=r[13],H=r[2],R=r[6],B=r[10],q=r[14],V=r[3],J=r[7],te=r[11],ue=r[15];return s[0]=a*A+o*v+c*H+l*V,s[4]=a*E+o*D+c*R+l*J,s[8]=a*U+o*z+c*B+l*te,s[12]=a*w+o*I+c*q+l*ue,s[1]=u*A+f*v+d*H+h*V,s[5]=u*E+f*D+d*R+h*J,s[9]=u*U+f*z+d*B+h*te,s[13]=u*w+f*I+d*q+h*ue,s[2]=g*A+_*v+m*H+p*V,s[6]=g*E+_*D+m*R+p*J,s[10]=g*U+_*z+m*B+p*te,s[14]=g*w+_*I+m*q+p*ue,s[3]=M*A+x*v+y*H+P*V,s[7]=M*E+x*D+y*R+P*J,s[11]=M*U+x*z+y*B+P*te,s[15]=M*w+x*I+y*q+P*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*h-i*c*h)+_*(+t*c*h-t*l*d+s*a*d-r*a*h+r*l*u-s*c*u)+m*(+t*l*f-t*o*h-s*a*f+i*a*h+s*o*u-i*l*u)+p*(-r*o*u-t*c*f+t*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*l-_*d*l+_*c*h-o*m*h-f*c*p+o*d*p,x=g*d*l-u*m*l-g*c*h+a*m*h+u*c*p-a*d*p,y=u*_*l-g*f*l+g*o*h-a*_*h-u*o*p+a*f*p,P=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,A=t*M+i*x+r*y+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=M*E,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*E,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*E,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*h-i*c*h)*E,e[4]=x*E,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*E,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*E,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*h+t*c*h)*E,e[8]=y*E,e[9]=(g*f*s-u*_*s-g*i*h+t*_*h+u*i*p-t*f*p)*E,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*E,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*h-t*o*h)*E,e[12]=P*E,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*E,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*E,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,M=c*l,x=c*u,y=c*f,P=i.x,A=i.y,E=i.z;return r[0]=(1-(_+p))*P,r[1]=(h+y)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(h-y)*A,r[5]=(1-(d+p))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+x)*E,r[9]=(m-M)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const a=br.set(r[4],r[5],r[6]).length(),o=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const l=1/s,u=1/a,f=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ii){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,g;if(o===ii)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ka)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ii){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*l,h=(i+r)*u;let g,_;if(o===ii)g=(a+s)*f,_=-2*f;else if(o===ka)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new k,Sn=new ot,Np=new k(0,0,0),Fp=new k(1,1,1),fi=new k,ta=new k,sn=new k,jc=new ot,Zc=new cr;class si{constructor(e=0,t=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Op=0;const Kc=new k,Er=new cr,jn=new ot,na=new k,us=new k,kp=new k,Bp=new cr,Jc=new k(1,0,0),Qc=new k(0,1,0),eu=new k(0,0,1),tu={type:"added"},zp={type:"removed"},Tr={type:"childadded",child:null},No={type:"childremoved",child:null};class nn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new k,t=new si,i=new cr,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ve}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(us,na,this.up):jn.lookAt(na,us,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(jn),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zp),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new k(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new k,Zn=new k,Fo=new k,Kn=new k,Ar=new k,Rr=new k,nu=new k,Oo=new k,ko=new k,Bo=new k;class On{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Zn.subVectors(i,t),Fo.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Zn),c=yn.dot(Fo),l=Zn.dot(Zn),u=Zn.dot(Fo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Zn.subVectors(e,t),yn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ar.subVectors(r,i),Rr.subVectors(s,i),Oo.subVectors(e,i);const c=Ar.dot(Oo),l=Rr.dot(Oo);if(c<=0&&l<=0)return t.copy(i);ko.subVectors(e,r);const u=Ar.dot(ko),f=Rr.dot(ko);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Ar,a);Bo.subVectors(e,s);const h=Ar.dot(Bo),g=Rr.dot(Bo);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Rr,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return nu.subVectors(s,r),o=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(nu,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Ar,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ia={h:0,s:0,l:0};function zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=bp(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=zo(a,s,e+1/3),this.g=zo(a,s,e),this.b=zo(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const i=Zh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return st.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Xt(Ht.r*255,0,255))*65536+Math.round(Xt(Ht.g*255,0,255))*256+Math.round(Xt(Ht.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=In){st.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,r=Ht.b;return e!==In?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(ia);const i=Eo(di.h,ia.h,t),r=Eo(di.s,ia.s,t),s=Eo(di.l,ia.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ht=new je;je.NAMES=Zh;let Hp=0;class Bs extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Hr,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=yl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kh extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,ra=new Ee;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ap("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class Jh extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qh extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gp=0;const dn=new ot,Ho=new nn,Cr=new k,an=new ks,hs=new ks,Ct=new k;class Wn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Qh:Jh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(an.min,hs.min),an.expandByPoint(Ct),Ct.addVectors(an.max,hs.max),an.expandByPoint(Ct)):(an.expandByPoint(hs.min),an.expandByPoint(hs.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ct.fromBufferAttribute(o,l),c&&(Cr.fromBufferAttribute(e,l),Ct.add(Cr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new k,c[U]=new k;const l=new k,u=new k,f=new k,d=new Ee,h=new Ee,g=new Ee,_=new k,m=new k;function p(U,w,v){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,v),d.fromBufferAttribute(s,U),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,v),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),o[U].add(_),o[w].add(_),o[v].add(_),c[U].add(m),c[w].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,w=M.length;U<w;++U){const v=M[U],D=v.start,z=v.count;for(let I=D,H=D+z;I<H;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new k,y=new k,P=new k,A=new k;function E(U){P.fromBufferAttribute(r,U),A.copy(P);const w=o[U];x.copy(w),x.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(A,w);const D=y.dot(c[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,D)}for(let U=0,w=M.length;U<w;++U){const v=M[U],D=v.start,z=v.count;for(let I=D,H=D+z;I<H;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new Pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new ot,Wi=new jl,sa=new oo,ru=new k,Pr=new k,Lr=new k,Dr=new k,Go=new k,aa=new k,oa=new Ee,la=new Ee,ca=new Ee,su=new k,au=new k,ou=new k,ua=new k,ha=new k;let Qt=class extends nn{constructor(e=new Wn,t=new Kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){aa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Go.fromBufferAttribute(f,e),a?aa.addScaledVector(Go,u):aa.addScaledVector(Go.sub(t),u))}t.add(aa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(sa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(sa,ru)===null||Wi.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(iu.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(iu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,P=x;y<P;y+=3){const A=o.getX(y),E=o.getX(y+1),U=o.getX(y+2);r=fa(this,p,e,i,l,u,f,A,E,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);r=fa(this,a,e,i,l,u,f,M,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,P=x;y<P;y+=3){const A=y,E=y+1,U=y+2;r=fa(this,p,e,i,l,u,f,A,E,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,y=m+2;r=fa(this,a,e,i,l,u,f,M,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Vp(n,e,t,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gn,o),c===null)return null;ha.copy(o),ha.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ha);return l<t.near||l>t.far?null:{distance:l,point:ha.clone(),object:n}}function fa(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Pr),n.getVertexPosition(c,Lr),n.getVertexPosition(l,Dr);const u=Vp(n,e,t,i,Pr,Lr,Dr,ua);if(u){r&&(oa.fromBufferAttribute(r,o),la.fromBufferAttribute(r,c),ca.fromBufferAttribute(r,l),u.uv=On.getInterpolation(ua,Pr,Lr,Dr,oa,la,ca,new Ee)),s&&(oa.fromBufferAttribute(s,o),la.fromBufferAttribute(s,c),ca.fromBufferAttribute(s,l),u.uv1=On.getInterpolation(ua,Pr,Lr,Dr,oa,la,ca,new Ee)),a&&(su.fromBufferAttribute(a,o),au.fromBufferAttribute(a,c),ou.fromBufferAttribute(a,l),u.normal=On.getInterpolation(ua,Pr,Lr,Dr,su,au,ou,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new k,materialIndex:0};On.getNormal(Pr,Lr,Dr,f.normal),u.face=f}return u}class zs extends Wn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function g(_,m,p,M,x,y,P,A,E,U,w){const v=y/E,D=P/U,z=y/2,I=P/2,H=A/2,R=E+1,B=U+1;let q=0,V=0;const J=new k;for(let te=0;te<B;te++){const ue=te*D-I;for(let Me=0;Me<R;Me++){const Ie=Me*v-z;J[_]=Ie*M,J[m]=ue*x,J[p]=H,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=A>0?1:-1,u.push(J.x,J.y,J.z),f.push(Me/E),f.push(1-te/U),q+=1}}for(let te=0;te<U;te++)for(let ue=0;ue<E;ue++){const Me=d+ue+R*te,Ie=d+ue+R*(te+1),Z=d+(ue+1)+R*(te+1),se=d+(ue+1)+R*te;c.push(Me,Ie,se),c.push(Ie,Z,se),V+=6}o.addGroup(h,V,w),h+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Zr(n[t]);for(const r in i)e[r]=i[r]}return e}function Wp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ef(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Xp={clone:Zr,merge:Wt};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=Wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tf extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new k,lu=new Ee,cu=new Ee;class cn extends tf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Ur=1;class Yp extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Ir,Ur,e,t);r.layers=this.layers,this.add(r);const s=new cn(Ir,Ur,e,t);s.layers=this.layers,this.add(s);const a=new cn(Ir,Ur,e,t);a.layers=this.layers,this.add(a);const o=new cn(Ir,Ur,e,t);o.layers=this.layers,this.add(o);const c=new cn(Ir,Ur,e,t);c.layers=this.layers,this.add(c);const l=new cn(Ir,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nf extends Zt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jp extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zs(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ti});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===er&&(t.minFilter=$t),new Yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Vo=new k,Zp=new k,Kp=new Ve;class gi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vo.subVectors(i,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kp.getNormalMatrix(e),r=this.coplanarPoint(Vo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new oo,da=new k;class rf{constructor(e=new gi,t=new gi,i=new gi,r=new gi,s=new gi,a=new gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],x=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,m-h,y-p).normalize(),i[1].setComponents(c+s,d+l,m+h,y+p).normalize(),i[2].setComponents(c+a,d+u,m+g,y+M).normalize(),i[3].setComponents(c-a,d-u,m-g,y-M).normalize(),i[4].setComponents(c-o,d-f,m-_,y-x).normalize(),t===ii)i[5].setComponents(c+o,d+f,m+_,y+x).normalize();else if(t===ka)i[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,o),f.count===-1&&d.length===0&&n.bufferSubData(l,0,u),d.length!==0){for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class rr extends Wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let x=0;x<l;x++){const y=x*f-s;g.push(y,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const x=M+l*p,y=M+l*(p+1),P=M+1+l*(p+1),A=M+1+l*p;h.push(x,y,A),h.push(y,P,A)}this.setIndex(h),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fm=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`
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
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,Km=`struct PhysicalMaterial {
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
}`,Jm=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
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
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,s0=`#if DEPTH_PACKING == 3200
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
}`,a0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,_0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,x0=`#define NORMAL
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
}`,S0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,M0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,E0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,P0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Qp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:rm,aomap_fragment:sm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:um,bsdfs:hm,iridescence_fragment:fm,bumpmap_pars_fragment:dm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:vm,color_pars_fragment:xm,color_pars_vertex:Sm,color_vertex:ym,common:Mm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Em,displacementmap_vertex:Tm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Lm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Im,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Xm,envmap_vertex:Nm,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:km,fog_pars_fragment:Bm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:$m,lights_phong_fragment:Ym,lights_phong_pars_fragment:jm,lights_physical_fragment:Zm,lights_physical_pars_fragment:Km,lights_fragment_begin:Jm,lights_fragment_maps:Qm,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:rg,map_fragment:sg,map_pars_fragment:ag,map_particle_fragment:og,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:ug,morphinstance_vertex:hg,morphcolor_vertex:fg,morphnormal_vertex:dg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:_g,normal_pars_fragment:vg,normal_pars_vertex:xg,normal_vertex:Sg,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Eg,opaque_fragment:Tg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Pg,dithering_pars_fragment:Lg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Ng,shadowmap_vertex:Fg,shadowmask_pars_fragment:Og,skinbase_vertex:kg,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:Hg,specularmap_fragment:Gg,specularmap_pars_fragment:Vg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:$g,uv_pars_fragment:Yg,uv_pars_vertex:jg,uv_vertex:Zg,worldpos_vertex:Kg,background_vert:Jg,background_frag:Qg,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:n0,cube_frag:i0,depth_vert:r0,depth_frag:s0,distanceRGBA_vert:a0,distanceRGBA_frag:o0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:u0,linedashed_frag:h0,meshbasic_vert:f0,meshbasic_frag:d0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:_0,meshnormal_vert:v0,meshnormal_frag:x0,meshphong_vert:S0,meshphong_frag:y0,meshphysical_vert:M0,meshphysical_frag:w0,meshtoon_vert:b0,meshtoon_frag:E0,points_vert:T0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:P0,sprite_frag:L0},he={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Nn={basic:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Wt([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Wt([he.lights,he.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Nn.physical={uniforms:Wt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const pa={r:0,b:0,g:0},qi=new si,D0=new ot;function I0(n,e,t,i,r,s,a){const o=new je(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const y=g(M);y===null?p(o,c):y&&y.isColor&&(p(y,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(M,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===so)?(u===void 0&&(u=new Qt(new zs(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Zr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(x.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler(qi)),u.material.toneMapped=st.getTransfer(y.colorSpace)!==ut,(f!==y||d!==y.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qt(new rr(2,2),new Gt({name:"BackgroundMaterial",uniforms:Zr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(pa,ef(n)),i.buffers.color.setClear(pa.r,pa.g,pa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function U0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,D,z,I,H){let R=!1;const B=f(I,z,D);s!==B&&(s=B,l(s.object)),R=h(v,I,z,H),R&&g(v,I,z,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,y(v,D,z,I),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function f(v,D,z){const I=z.wireframe===!0;let H=i[v.id];H===void 0&&(H={},i[v.id]=H);let R=H[D.id];R===void 0&&(R={},H[D.id]=R);let B=R[I];return B===void 0&&(B=d(c()),R[I]=B),B}function d(v){const D=[],z=[],I=[];for(let H=0;H<t;H++)D[H]=0,z[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:I,object:v,attributes:{},index:null}}function h(v,D,z,I){const H=s.attributes,R=D.attributes;let B=0;const q=z.getAttributes();for(const V in q)if(q[V].location>=0){const te=H[V];let ue=R[V];if(ue===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function g(v,D,z,I){const H={},R=D.attributes;let B=0;const q=z.getAttributes();for(const V in q)if(q[V].location>=0){let te=R[V];te===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),H[V]=ue,B++}s.attributes=H,s.attributesNum=B,s.index=I}function _(){const v=s.newAttributes;for(let D=0,z=v.length;D<z;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const z=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;z[v]=1,I[v]===0&&(n.enableVertexAttribArray(v),I[v]=1),H[v]!==D&&(n.vertexAttribDivisor(v,D),H[v]=D)}function M(){const v=s.newAttributes,D=s.enabledAttributes;for(let z=0,I=D.length;z<I;z++)D[z]!==v[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function x(v,D,z,I,H,R,B){B===!0?n.vertexAttribIPointer(v,D,z,H,R):n.vertexAttribPointer(v,D,z,I,H,R)}function y(v,D,z,I){_();const H=I.attributes,R=z.getAttributes(),B=D.defaultAttributeValues;for(const q in R){const V=R[q];if(V.location>=0){let J=H[q];if(J===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const te=J.normalized,ue=J.itemSize,Me=e.get(J);if(Me===void 0)continue;const Ie=Me.buffer,Z=Me.type,se=Me.bytesPerElement,ge=Z===n.INT||Z===n.UNSIGNED_INT||J.gpuType===Bh;if(J.isInterleavedBufferAttribute){const oe=J.data,Le=oe.stride,Ce=J.offset;if(oe.isInstancedInterleavedBuffer){for(let O=0;O<V.locationSize;O++)p(V.location+O,oe.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let O=0;O<V.locationSize;O++)m(V.location+O);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let O=0;O<V.locationSize;O++)x(V.location+O,ue/V.locationSize,Z,te,Le*se,(Ce+ue/V.locationSize*O)*se,ge)}else{if(J.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,J.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let oe=0;oe<V.locationSize;oe++)x(V.location+oe,ue/V.locationSize,Z,te,ue*se,ue/V.locationSize*oe*se,ge)}}else if(B!==void 0){const te=B[q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(V.location,te);break;case 3:n.vertexAttrib3fv(V.location,te);break;case 4:n.vertexAttrib4fv(V.location,te);break;default:n.vertexAttrib1fv(V.location,te)}}}}M()}function P(){U();for(const v in i){const D=i[v];for(const z in D){const I=D[z];for(const H in I)u(I[H].object),delete I[H];delete D[z]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;const D=i[v.id];for(const z in D){const I=D[z];for(const H in I)u(I[H].object),delete I[H];delete D[z]}delete i[v.id]}function E(v){for(const D in i){const z=i[D];if(z[v.id]===void 0)continue;const I=z[v.id];for(const H in I)u(I[H].object),delete I[H];delete z[v.id]}}function U(){w(),a=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function N0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(l[h],u[h]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function F0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Vt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Oi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==An&&!E)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:P}}function O0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gi,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,x=M*4;let y=p.clippingState||null;c.value=y,y=u(g,d,x,h);for(let P=0;P!==x;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=h;x!==_;++x,y+=4)a.copy(f[x]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function k0(n){let e=new WeakMap;function t(a,o){return o===Ml?a.mapping=$r:o===wl&&(a.mapping=Yr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ml||o===wl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new jp(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class za extends tf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zr=4,uu=[.125,.215,.35,.446,.526,.582],Ki=20,Wo=new za,hu=new je;let Xo=null,qo=0,$o=0,Yo=!1;const ji=(1+Math.sqrt(5))/2,Nr=1/ji,fu=[new k(-ji,Nr,0),new k(ji,Nr,0),new k(-Nr,0,ji),new k(Nr,0,ji),new k(0,ji,-Nr),new k(0,ji,Nr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,qo,$o),this._renderer.xr.enabled=Yo,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:jr,format:Vt,colorSpace:zi,depthBuffer:!1},r=pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(s)),this._blurMaterial=z0(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,r){const o=new cn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(hu),u.toneMapping=Ai,u.autoClear=!1;const h=new Kh({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Qt(new zs,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(hu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;ma(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$r||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ma(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fu[(r-s-1)%fu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ki-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let M=0;for(let E=0;E<Ki;++E){const U=E/_,w=Math.exp(-U*U/2);p.push(w),E===0?M+=w:E<m&&(M+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[r],P=3*y*(r>x-zr?r-x+zr:0),A=4*(this._cubeSize-y);ma(t,P,A,3*y,2*y),c.setRenderTarget(t),c.render(f,Wo)}}function B0(n){const e=[],t=[],i=[];let r=n;const s=n-zr+1+uu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-zr?c=uu[a-n+zr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),x=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let A=0;A<h;A++){const E=A%3*2/3-1,U=A>2?0:-1,w=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];M.set(w,_*g*A),x.set(d,m*g*A);const v=[A,A,A,A,A,A];y.set(v,p*g*A)}const P=new Wn;P.setAttribute("position",new Pn(M,_)),P.setAttribute("uv",new Pn(x,m)),P.setAttribute("faceIndex",new Pn(y,p)),e.push(P),r>zr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pu(n,e,t){const i=new Rn(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function z0(n,e,t){const i=new Float32Array(Ki),r=new k(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function mu(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function gu(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function H0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ml||c===wl,u=c===$r||c===Yr;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new du(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new du(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function G0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function V0(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let x=0,y=M.length;x<y;x+=3){const P=M[x+0],A=M[x+1],E=M[x+2];d.push(P,A,A,E,E,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const P=x+0,A=x+1,E=x+2;d.push(P,A,A,E,E,P)}}else return;const m=new(qh(d)?Qh:Jh)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function W0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function l(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*a,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,h[m]);else{_.multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M];for(let M=0;M<_.length;M++)t.update(p,i,_[M])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function X0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q0(n,e,t){const i=new WeakMap,r=new Ot;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let v=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var h=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let P=o.attributes.position.count*y,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*A*4*f),U=new Yh(E,P,A,f);U.type=An,U.needsUpdate=!0;const w=y*4;for(let D=0;D<f;D++){const z=p[D],I=M[D],H=x[D],R=P*A*4*D;for(let B=0;B<z.count;B++){const q=B*w;g===!0&&(r.fromBufferAttribute(z,B),E[R+q+0]=r.x,E[R+q+1]=r.y,E[R+q+2]=r.z,E[R+q+3]=0),_===!0&&(r.fromBufferAttribute(I,B),E[R+q+4]=r.x,E[R+q+5]=r.y,E[R+q+6]=r.z,E[R+q+7]=0),m===!0&&(r.fromBufferAttribute(H,B),E[R+q+8]=r.x,E[R+q+9]=r.y,E[R+q+10]=r.z,E[R+q+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new Ee(P,A)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function $0(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Ha extends Zt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Ri,u!==Ri&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ri&&(i=ki),i===void 0&&u===ws&&(i=Fs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=c!==void 0?c:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const af=new Zt,of=new Ha(1,1);of.compareFunction=Xh;const lf=new Yh,cf=new Ip,uf=new nf,_u=[],vu=[],xu=new Float32Array(16),Su=new Float32Array(9),yu=new Float32Array(4);function es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_u[r];if(s===void 0&&(s=new Float32Array(r),_u[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lo(n,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Y0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function J0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),At(t,i)}}function Q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Su.set(i),n.uniformMatrix3fv(this.addr,!1,Su),At(t,i)}}function e_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),At(t,i)}}function t_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function s_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function c_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?of:af;t.setTexture2D(e||s,r)}function u_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cf,r)}function h_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||uf,r)}function f_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lf,r)}function d_(n){switch(n){case 5126:return Y0;case 35664:return j0;case 35665:return Z0;case 35666:return K0;case 35674:return J0;case 35675:return Q0;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return s_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return f_}}function p_(n,e){n.uniform1fv(this.addr,e)}function m_(n,e){const t=es(e,this.size,2);n.uniform2fv(this.addr,t)}function g_(n,e){const t=es(e,this.size,3);n.uniform3fv(this.addr,t)}function __(n,e){const t=es(e,this.size,4);n.uniform4fv(this.addr,t)}function v_(n,e){const t=es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function x_(n,e){const t=es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function S_(n,e){const t=es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function y_(n,e){n.uniform1iv(this.addr,e)}function M_(n,e){n.uniform2iv(this.addr,e)}function w_(n,e){n.uniform3iv(this.addr,e)}function b_(n,e){n.uniform4iv(this.addr,e)}function E_(n,e){n.uniform1uiv(this.addr,e)}function T_(n,e){n.uniform2uiv(this.addr,e)}function A_(n,e){n.uniform3uiv(this.addr,e)}function R_(n,e){n.uniform4uiv(this.addr,e)}function C_(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||af,s[a])}function P_(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cf,s[a])}function L_(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||uf,s[a])}function D_(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||lf,s[a])}function I_(n){switch(n){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return x_;case 35676:return S_;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return w_;case 35669:case 35673:return b_;case 5125:return E_;case 36294:return T_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}class U_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d_(t.type)}}class N_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}}class F_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Mu(n,e){n.seq.push(e),n.map[e.id]=e}function O_(n,e,t){const i=n.name,r=i.length;for(jo.lastIndex=0;;){const s=jo.exec(i),a=jo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Mu(t,l===void 0?new U_(o,n,e):new N_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new F_(o),Mu(t,f)),t=f}}}class La{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);O_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const k_=37297;let B_=0;function z_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function H_(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===Oa&&t===Fa?i="LinearDisplayP3ToLinearSRGB":e===Fa&&t===Oa&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case ao:return[i,"LinearTransferOETF"];case In:case Yl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+z_(n.getShaderSource(e),a)}else return r}function G_(n,e){const t=H_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function V_(n,e){let t;switch(e){case jd:t="Linear";break;case Zd:t="Reinhard";break;case Kd:t="OptimizedCineon";break;case Jd:t="ACESFilmic";break;case ep:t="AgX";break;case tp:t="Neutral";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function W_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function X_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ms(n){return n!==""}function Eu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace($_,j_)}const Y_=new Map;function j_(n,e){let t=Ge[e];if(t===void 0){const i=Y_.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(n){return n.replace(Z_,K_)}function K_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ru(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function J_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Q_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $r:case Yr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ev(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function tv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case $d:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function nv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=J_(t),l=Q_(t),u=ev(t),f=tv(t),d=nv(t),h=W_(t),g=X_(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ai?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),a=Al(a),a=Eu(a,t),a=Tu(a,t),o=Al(o),o=Eu(o,t),o=Tu(o,t),a=Au(a),o=Au(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,y=M+p+o,P=wu(r,r.VERTEX_SHADER,x),A=wu(r,r.FRAGMENT_SHADER,y);r.attachShader(_,P),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(P).trim(),H=r.getShaderInfoLog(A).trim();let R=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{const q=bu(r,P,"vertex"),V=bu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+q+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||H==="")&&(B=!1);B&&(D.diagnostics={runnable:R,programLog:z,vertexShader:{log:I,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(P),r.deleteShader(A),U=new La(r,_),w=q_(r,_)}let U;this.getUniforms=function(){return U===void 0&&E(this),U};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,k_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let rv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new av(e),t.set(e,i)),i}}class av{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}}function ov(n,e,t,i,r,s,a){const o=new jh,c=new sv,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,D,z,I){const H=z.fog,R=I.geometry,B=w.isMeshStandardMaterial?z.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),V=q&&q.mapping===so?q.image.height:null,J=g[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const te=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ue=te!==void 0?te.length:0;let Me=0;R.morphAttributes.position!==void 0&&(Me=1),R.morphAttributes.normal!==void 0&&(Me=2),R.morphAttributes.color!==void 0&&(Me=3);let Ie,Z,se,ge;if(J){const Ke=Nn[J];Ie=Ke.vertexShader,Z=Ke.fragmentShader}else Ie=w.vertexShader,Z=w.fragmentShader,c.update(w),se=c.getVertexShaderID(w),ge=c.getFragmentShaderID(w);const oe=n.getRenderTarget(),Le=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,O=!!w.map,me=!!w.matcap,j=!!q,Ae=!!w.aoMap,be=!!w.lightMap,Be=!!w.bumpMap,Pe=!!w.normalMap,We=!!w.displacementMap,at=!!w.emissiveMap,L=!!w.metalnessMap,b=!!w.roughnessMap,$=w.anisotropy>0,ee=w.clearcoat>0,ne=w.dispersion>0,re=w.iridescence>0,we=w.sheen>0,de=w.transmission>0,fe=$&&!!w.anisotropyMap,De=ee&&!!w.clearcoatMap,le=ee&&!!w.clearcoatNormalMap,Se=ee&&!!w.clearcoatRoughnessMap,Ze=re&&!!w.iridescenceMap,Te=re&&!!w.iridescenceThicknessMap,_e=we&&!!w.sheenColorMap,Fe=we&&!!w.sheenRoughnessMap,qe=!!w.specularMap,rt=!!w.specularColorMap,ze=!!w.specularIntensityMap,S=de&&!!w.transmissionMap,N=de&&!!w.thicknessMap,G=!!w.gradientMap,ie=!!w.alphaMap,ae=w.alphaTest>0,Oe=!!w.alphaHash,$e=!!w.extensions;let pt=Ai;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=n.toneMapping);const Rt={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:Ie,fragmentShader:Z,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Ce,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zi,alphaToCoverage:!!w.alphaToCoverage,map:O,matcap:me,envMap:j,envMapMode:j&&q.mapping,envMapCubeUVHeight:V,aoMap:Ae,lightMap:be,bumpMap:Be,normalMap:Pe,displacementMap:d&&We,emissiveMap:at,normalMapObjectSpace:Pe&&w.normalMapType===gp,normalMapTangentSpace:Pe&&w.normalMapType===mp,metalnessMap:L,roughnessMap:b,anisotropy:$,anisotropyMap:fe,clearcoat:ee,clearcoatMap:De,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:ne,iridescence:re,iridescenceMap:Ze,iridescenceThicknessMap:Te,sheen:we,sheenColorMap:_e,sheenRoughnessMap:Fe,specularMap:qe,specularColorMap:rt,specularIntensityMap:ze,transmission:de,transmissionMap:S,thicknessMap:N,gradientMap:G,opaque:w.transparent===!1&&w.blending===Hr&&w.alphaToCoverage===!1,alphaMap:ie,alphaTest:ae,alphaHash:Oe,combine:w.combine,mapUv:O&&_(w.map.channel),aoMapUv:Ae&&_(w.aoMap.channel),lightMapUv:be&&_(w.lightMap.channel),bumpMapUv:Be&&_(w.bumpMap.channel),normalMapUv:Pe&&_(w.normalMap.channel),displacementMapUv:We&&_(w.displacementMap.channel),emissiveMapUv:at&&_(w.emissiveMap.channel),metalnessMapUv:L&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:fe&&_(w.anisotropyMap.channel),clearcoatMapUv:De&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(w.sheenRoughnessMap.channel),specularMapUv:qe&&_(w.specularMap.channel),specularColorMapUv:rt&&_(w.specularColorMap.channel),specularIntensityMapUv:ze&&_(w.specularIntensityMap.channel),transmissionMapUv:S&&_(w.transmissionMap.channel),thicknessMapUv:N&&_(w.thicknessMap.channel),alphaMapUv:ie&&_(w.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Pe||$),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(O||ie),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:O&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fn,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$e&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$e&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function p(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)v.push(D),v.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(M(v,w),x(v,w),v.push(n.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function M(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function x(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),w.push(o.mask)}function y(w){const v=g[w.type];let D;if(v){const z=Nn[v];D=Xp.clone(z.uniforms)}else D=w.uniforms;return D}function P(w,v){let D;for(let z=0,I=u.length;z<I;z++){const H=u[z];if(H.cacheKey===v){D=H,++D.usedTimes;break}}return D===void 0&&(D=new iv(n,v,w,s),u.push(D)),D}function A(w){if(--w.usedTimes===0){const v=u.indexOf(w);u[v]=u[u.length-1],u.pop(),w.destroy()}}function E(w){c.remove(w)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:U}}function lv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function cv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||cv),i.length>1&&i.sort(d||Cu),r.length>1&&r.sort(d||Cu)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function uv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Pu,n.set(i,[a])):r>=s.length?(a=new Pu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function fv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dv=0;function pv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mv(n){const e=new hv,t=fv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new ot,a=new ot;function o(l,u){let f=0,d=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,_=0,m=0,p=0,M=0,x=0,y=0,P=0,A=0,E=0,U=0;l.sort(pv);const w=u===!0?Math.PI:1;for(let D=0,z=l.length;D<z;D++){const I=l[D],H=I.color,R=I.intensity,B=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=H.r*R*w,d+=H.g*R*w,h+=H.b*R*w;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],R);U++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const J=I.shadow,te=t.get(I);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=I.shadow.matrix,x++}i.directional[g]=V,g++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(H).multiplyScalar(R*w),V.distance=B,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[m]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,J.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[m]=J.matrix,I.castShadow){const te=t.get(I);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.spotShadow[m]=te,i.spotShadowMap[m]=q,P++}m++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(H).multiplyScalar(R),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=V,p++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,te=t.get(I);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,i.pointShadow[_]=te,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=I.shadow.matrix,y++}i.point[_]=V,_++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(R*w),V.groundColor.copy(I.groundColor).multiplyScalar(R*w),i.hemi[M]=V,M++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==m||v.rectAreaLength!==p||v.hemiLength!==M||v.numDirectionalShadows!==x||v.numPointShadows!==y||v.numSpotShadows!==P||v.numSpotMaps!==A||v.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=P+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=U,v.directionalLength=g,v.pointLength=_,v.spotLength=m,v.rectAreaLength=p,v.hemiLength=M,v.numDirectionalShadows=x,v.numPointShadows=y,v.numSpotShadows=P,v.numSpotMaps=A,v.numLightProbes=U,i.version=dv++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Lu(n){const e=new mv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function gv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lu(n),e.set(r,[o])):s>=a.length?(o=new Lu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class _v extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vv extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
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
}`;function yv(n,e,t){let i=new rf;const r=new Ee,s=new Ee,a=new Ot,o=new _v({depthPacking:pp}),c=new vv,l={},u=t.maxTextureSize,f={[gn]:tn,[tn]:gn,[Fn]:Fn},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:xv,fragmentShader:Sv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Wn;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let p=this.type;this.render=function(A,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),v=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ti),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=p!==Qn&&this.type===Qn,H=p===Qn&&this.type!==Qn;for(let R=0,B=A.length;R<B;R++){const q=A[R],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();if(r.multiply(J),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,V.mapSize.y=s.y)),V.map===null||I===!0||H===!0){const ue=this.type!==Qn?{minFilter:St,magFilter:St}:{};V.map!==null&&V.map.dispose(),V.map=new Rn(r.x,r.y,ue),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const te=V.getViewportCount();for(let ue=0;ue<te;ue++){const Me=V.getViewport(ue);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),z.viewport(a),V.updateMatrices(q,ue),i=V.getFrustum(),y(E,U,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Qn&&M(V,U),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,v,D)};function M(A,E){const U=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,U,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,U,h,_,null)}function x(A,E,U,w){let v=null;const D=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)v=D;else if(v=U.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=v.uuid,I=E.uuid;let H=l[z];H===void 0&&(H={},l[z]=H);let R=H[I];R===void 0&&(R=v.clone(),H[I]=R,E.addEventListener("dispose",P)),v=R}if(v.visible=E.visible,v.wireframe=E.wireframe,w===Qn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=n.properties.get(v);z.light=U}return v}function y(A,E,U,w,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Qn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const I=e.update(A),H=A.material;if(Array.isArray(H)){const R=I.groups;for(let B=0,q=R.length;B<q;B++){const V=R[B],J=H[V.materialIndex];if(J&&J.visible){const te=x(A,J,w,v);A.onBeforeShadow(n,A,E,U,I,te,V),n.renderBufferDirect(U,null,I,te,A,V),A.onAfterShadow(n,A,E,U,I,te,V)}}}else if(H.visible){const R=x(A,H,w,v);A.onBeforeShadow(n,A,E,U,I,R,null),n.renderBufferDirect(U,null,I,R,A,null),A.onAfterShadow(n,A,E,U,I,R,null)}}const z=A.children;for(let I=0,H=z.length;I<H;I++)y(z[I],E,U,w,v)}function P(A){A.target.removeEventListener("dispose",P);for(const U in l){const w=l[U],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}function Mv(n){function e(){let S=!1;const N=new Ot;let G=null;const ie=new Ot(0,0,0,0);return{setMask:function(ae){G!==ae&&!S&&(n.colorMask(ae,ae,ae,ae),G=ae)},setLocked:function(ae){S=ae},setClear:function(ae,Oe,$e,pt,Rt){Rt===!0&&(ae*=pt,Oe*=pt,$e*=pt),N.set(ae,Oe,$e,pt),ie.equals(N)===!1&&(n.clearColor(ae,Oe,$e,pt),ie.copy(N))},reset:function(){S=!1,G=null,ie.set(-1,0,0,0)}}}function t(){let S=!1,N=null,G=null,ie=null;return{setTest:function(ae){ae?ge(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ae){N!==ae&&!S&&(n.depthMask(ae),N=ae)},setFunc:function(ae){if(G!==ae){switch(ae){case zd:n.depthFunc(n.NEVER);break;case Hd:n.depthFunc(n.ALWAYS);break;case Gd:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case Vd:n.depthFunc(n.EQUAL);break;case Wd:n.depthFunc(n.GEQUAL);break;case Xd:n.depthFunc(n.GREATER);break;case qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}G=ae}},setLocked:function(ae){S=ae},setClear:function(ae){ie!==ae&&(n.clearDepth(ae),ie=ae)},reset:function(){S=!1,N=null,G=null,ie=null}}}function i(){let S=!1,N=null,G=null,ie=null,ae=null,Oe=null,$e=null,pt=null,Rt=null;return{setTest:function(Ke){S||(Ke?ge(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Ke){N!==Ke&&!S&&(n.stencilMask(Ke),N=Ke)},setFunc:function(Ke,yt,ct){(G!==Ke||ie!==yt||ae!==ct)&&(n.stencilFunc(Ke,yt,ct),G=Ke,ie=yt,ae=ct)},setOp:function(Ke,yt,ct){(Oe!==Ke||$e!==yt||pt!==ct)&&(n.stencilOp(Ke,yt,ct),Oe=Ke,$e=yt,pt=ct)},setLocked:function(Ke){S=Ke},setClear:function(Ke){Rt!==Ke&&(n.clearStencil(Ke),Rt=Ke)},reset:function(){S=!1,N=null,G=null,ie=null,ae=null,Oe=null,$e=null,pt=null,Rt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,M=null,x=null,y=null,P=null,A=new je(0,0,0),E=0,U=!1,w=null,v=null,D=null,z=null,I=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,B=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),R=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),R=B>=2);let V=null,J={};const te=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Me=new Ot().fromArray(te),Ie=new Ot().fromArray(ue);function Z(S,N,G,ie){const ae=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(S,Oe),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<G;$e++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(N,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(N+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Oe}const se={};se[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Ua),Be(!1),Pe(fc),ge(n.CULL_FACE),Ae(Ti);function ge(S){l[S]!==!0&&(n.enable(S),l[S]=!0)}function oe(S){l[S]!==!1&&(n.disable(S),l[S]=!1)}function Le(S,N){return u[S]!==N?(n.bindFramebuffer(S,N),u[S]=N,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=N),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=N),!0):!1}function Ce(S,N){let G=d,ie=!1;if(S){G=f.get(N),G===void 0&&(G=[],f.set(N,G));const ae=S.textures;if(G.length!==ae.length||G[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,$e=ae.length;Oe<$e;Oe++)G[Oe]=n.COLOR_ATTACHMENT0+Oe;G.length=ae.length,ie=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,ie=!0);ie&&n.drawBuffers(G)}function O(S){return h!==S?(n.useProgram(S),h=S,!0):!1}const me={[Zi]:n.FUNC_ADD,[wd]:n.FUNC_SUBTRACT,[bd]:n.FUNC_REVERSE_SUBTRACT};me[Ed]=n.MIN,me[Td]=n.MAX;const j={[Ad]:n.ZERO,[Rd]:n.ONE,[Cd]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[Id]:n.DST_COLOR,[Ld]:n.DST_ALPHA,[Pd]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Dd]:n.ONE_MINUS_DST_ALPHA,[Fd]:n.CONSTANT_COLOR,[Od]:n.ONE_MINUS_CONSTANT_COLOR,[kd]:n.CONSTANT_ALPHA,[Bd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(S,N,G,ie,ae,Oe,$e,pt,Rt,Ke){if(S===Ti){g===!0&&(oe(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),S!==Md){if(S!==_||Ke!==U){if((m!==Zi||x!==Zi)&&(n.blendEquation(n.FUNC_ADD),m=Zi,x=Zi),Ke)switch(S){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}p=null,M=null,y=null,P=null,A.set(0,0,0),E=0,_=S,U=Ke}return}ae=ae||N,Oe=Oe||G,$e=$e||ie,(N!==m||ae!==x)&&(n.blendEquationSeparate(me[N],me[ae]),m=N,x=ae),(G!==p||ie!==M||Oe!==y||$e!==P)&&(n.blendFuncSeparate(j[G],j[ie],j[Oe],j[$e]),p=G,M=ie,y=Oe,P=$e),(pt.equals(A)===!1||Rt!==E)&&(n.blendColor(pt.r,pt.g,pt.b,Rt),A.copy(pt),E=Rt),_=S,U=!1}function be(S,N){S.side===Fn?oe(n.CULL_FACE):ge(n.CULL_FACE);let G=S.side===tn;N&&(G=!G),Be(G),S.blending===Hr&&S.transparent===!1?Ae(Ti):Ae(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const ie=S.stencilWrite;a.setTest(ie),ie&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),at(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(S){w!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),w=S)}function Pe(S){S!==xd?(ge(n.CULL_FACE),S!==v&&(S===fc?n.cullFace(n.BACK):S===Sd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),v=S}function We(S){S!==D&&(R&&n.lineWidth(S),D=S)}function at(S,N,G){S?(ge(n.POLYGON_OFFSET_FILL),(z!==N||I!==G)&&(n.polygonOffset(N,G),z=N,I=G)):oe(n.POLYGON_OFFSET_FILL)}function L(S){S?ge(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function b(S){S===void 0&&(S=n.TEXTURE0+H-1),V!==S&&(n.activeTexture(S),V=S)}function $(S,N,G){G===void 0&&(V===null?G=n.TEXTURE0+H-1:G=V);let ie=J[G];ie===void 0&&(ie={type:void 0,texture:void 0},J[G]=ie),(ie.type!==S||ie.texture!==N)&&(V!==G&&(n.activeTexture(G),V=G),n.bindTexture(S,N||se[S]),ie.type=S,ie.texture=N)}function ee(){const S=J[V];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ze(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _e(S){Me.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),Me.copy(S))}function Fe(S){Ie.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),Ie.copy(S))}function qe(S,N){let G=c.get(N);G===void 0&&(G=new WeakMap,c.set(N,G));let ie=G.get(S);ie===void 0&&(ie=n.getUniformBlockIndex(N,S.name),G.set(S,ie))}function rt(S,N){const ie=c.get(N).get(S);o.get(N)!==ie&&(n.uniformBlockBinding(N,ie,S.__bindingPointIndex),o.set(N,ie))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},V=null,J={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,M=null,x=null,y=null,P=null,A=new je(0,0,0),E=0,U=!1,w=null,v=null,D=null,z=null,I=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:oe,bindFramebuffer:Le,drawBuffers:Ce,useProgram:O,setBlending:Ae,setMaterial:be,setFlipSided:Be,setCullFace:Pe,setLineWidth:We,setPolygonOffset:at,setScissorTest:L,activeTexture:b,bindTexture:$,unbindTexture:ee,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:Ze,texImage3D:Te,updateUBOMapping:qe,uniformBlockBinding:rt,texStorage2D:le,texStorage3D:Se,texSubImage2D:we,texSubImage3D:de,compressedTexSubImage2D:fe,compressedTexSubImage3D:De,scissor:_e,viewport:Fe,reset:ze}}function wv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return h?new OffscreenCanvas(L,b):Ba("canvas")}function _(L,b,$){let ee=1;const ne=at(L);if((ne.width>$||ne.height>$)&&(ee=$/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(ee*ne.width),we=Math.floor(ee*ne.height);f===void 0&&(f=g(re,we));const de=b?g(re,we):f;return de.width=re,de.height=we,de.getContext("2d").drawImage(L,0,0,re,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+we+")."),de}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==St&&L.minFilter!==$t}function p(L){n.generateMipmap(L)}function M(L,b,$,ee,ne=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=b;if(b===n.RED&&($===n.FLOAT&&(re=n.R32F),$===n.HALF_FLOAT&&(re=n.R16F),$===n.UNSIGNED_BYTE&&(re=n.R8)),b===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(re=n.R8UI),$===n.UNSIGNED_SHORT&&(re=n.R16UI),$===n.UNSIGNED_INT&&(re=n.R32UI),$===n.BYTE&&(re=n.R8I),$===n.SHORT&&(re=n.R16I),$===n.INT&&(re=n.R32I)),b===n.RG&&($===n.FLOAT&&(re=n.RG32F),$===n.HALF_FLOAT&&(re=n.RG16F),$===n.UNSIGNED_BYTE&&(re=n.RG8)),b===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(re=n.RG8UI),$===n.UNSIGNED_SHORT&&(re=n.RG16UI),$===n.UNSIGNED_INT&&(re=n.RG32UI),$===n.BYTE&&(re=n.RG8I),$===n.SHORT&&(re=n.RG16I),$===n.INT&&(re=n.RG32I)),b===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),b===n.RGBA){const we=ne?Na:st.getTransfer(ee);$===n.FLOAT&&(re=n.RGBA32F),$===n.HALF_FLOAT&&(re=n.RGBA16F),$===n.UNSIGNED_BYTE&&(re=we===ut?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==St&&L.minFilter!==$t?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function y(L){const b=L.target;b.removeEventListener("dispose",y),A(b),b.isVideoTexture&&u.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),U(b)}function A(L){const b=i.get(L);if(b.__webglInit===void 0)return;const $=L.source,ee=d.get($);if(ee){const ne=ee[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(L),Object.keys(ee).length===0&&d.delete($)}i.remove(L)}function E(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const $=L.source,ee=d.get($);delete ee[b.__cacheKey],a.memory.textures--}function U(L){const b=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ne=0;ne<b.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[ee]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=L.textures;for(let ee=0,ne=$.length;ee<ne;ee++){const re=i.get($[ee]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove($[ee])}i.remove(L)}let w=0;function v(){w=0}function D(){const L=w;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),w+=1,L}function z(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function I(L,b){const $=i.get(L);if(L.isVideoTexture&&Pe(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me($,L,b);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+b)}function H(L,b){const $=i.get(L);if(L.version>0&&$.__version!==L.version){Me($,L,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+b)}function R(L,b){const $=i.get(L);if(L.version>0&&$.__version!==L.version){Me($,L,b);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+b)}function B(L,b){const $=i.get(L);if(L.version>0&&$.__version!==L.version){Ie($,L,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+b)}const q={[bl]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[El]:n.MIRRORED_REPEAT},V={[St]:n.NEAREST,[np]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[xo]:n.LINEAR_MIPMAP_NEAREST,[er]:n.LINEAR_MIPMAP_LINEAR},J={[_p]:n.NEVER,[wp]:n.ALWAYS,[vp]:n.LESS,[Xh]:n.LEQUAL,[xp]:n.EQUAL,[Mp]:n.GEQUAL,[Sp]:n.GREATER,[yp]:n.NOTEQUAL};function te(L,b){if(b.type===An&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===$t||b.magFilter===xo||b.magFilter===Ys||b.magFilter===er||b.minFilter===$t||b.minFilter===xo||b.minFilter===Ys||b.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,q[b.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,q[b.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,q[b.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,V[b.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,V[b.minFilter]),b.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===St||b.minFilter!==Ys&&b.minFilter!==er||b.type===An&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ue(L,b){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",y));const ee=b.source;let ne=d.get(ee);ne===void 0&&(ne={},d.set(ee,ne));const re=z(b);if(re!==L.__cacheKey){ne[re]===void 0&&(ne[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ne[re].usedTimes++;const we=ne[L.__cacheKey];we!==void 0&&(ne[L.__cacheKey].usedTimes--,we.usedTimes===0&&E(b)),L.__cacheKey=re,L.__webglTexture=ne[re].texture}return $}function Me(L,b,$){let ee=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=n.TEXTURE_3D);const ne=ue(L,b),re=b.source;t.bindTexture(ee,L.__webglTexture,n.TEXTURE0+$);const we=i.get(re);if(re.version!==we.__version||ne===!0){t.activeTexture(n.TEXTURE0+$);const de=st.getPrimaries(st.workingColorSpace),fe=b.colorSpace===yi?null:st.getPrimaries(b.colorSpace),De=b.colorSpace===yi||de===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let le=_(b.image,!1,r.maxTextureSize);le=We(b,le);const Se=s.convert(b.format,b.colorSpace),Ze=s.convert(b.type);let Te=M(b.internalFormat,Se,Ze,b.colorSpace,b.isVideoTexture);te(ee,b);let _e;const Fe=b.mipmaps,qe=b.isVideoTexture!==!0,rt=we.__version===void 0||ne===!0,ze=re.dataReady,S=x(b,le);if(b.isDepthTexture)Te=n.DEPTH_COMPONENT16,b.type===An?Te=n.DEPTH_COMPONENT32F:b.type===ki?Te=n.DEPTH_COMPONENT24:b.type===Fs&&(Te=n.DEPTH24_STENCIL8),rt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Te,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,Se,Ze,null));else if(b.isDataTexture)if(Fe.length>0){qe&&rt&&t.texStorage2D(n.TEXTURE_2D,S,Te,Fe[0].width,Fe[0].height);for(let N=0,G=Fe.length;N<G;N++)_e=Fe[N],qe?ze&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,_e.width,_e.height,Se,Ze,_e.data):t.texImage2D(n.TEXTURE_2D,N,Te,_e.width,_e.height,0,Se,Ze,_e.data);b.generateMipmaps=!1}else qe?(rt&&t.texStorage2D(n.TEXTURE_2D,S,Te,le.width,le.height),ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Se,Ze,le.data)):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,Se,Ze,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,Te,Fe[0].width,Fe[0].height,le.depth);for(let N=0,G=Fe.length;N<G;N++)_e=Fe[N],b.format!==Vt?Se!==null?qe?ze&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,_e.width,_e.height,le.depth,Se,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,Te,_e.width,_e.height,le.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,_e.width,_e.height,le.depth,Se,Ze,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,Te,_e.width,_e.height,le.depth,0,Se,Ze,_e.data)}else{qe&&rt&&t.texStorage2D(n.TEXTURE_2D,S,Te,Fe[0].width,Fe[0].height);for(let N=0,G=Fe.length;N<G;N++)_e=Fe[N],b.format!==Vt?Se!==null?qe?ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,N,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?ze&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,_e.width,_e.height,Se,Ze,_e.data):t.texImage2D(n.TEXTURE_2D,N,Te,_e.width,_e.height,0,Se,Ze,_e.data)}else if(b.isDataArrayTexture)qe?(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,Te,le.width,le.height,le.depth),ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Ze,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,Se,Ze,le.data);else if(b.isData3DTexture)qe?(rt&&t.texStorage3D(n.TEXTURE_3D,S,Te,le.width,le.height,le.depth),ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Ze,le.data)):t.texImage3D(n.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,Se,Ze,le.data);else if(b.isFramebufferTexture){if(rt)if(qe)t.texStorage2D(n.TEXTURE_2D,S,Te,le.width,le.height);else{let N=le.width,G=le.height;for(let ie=0;ie<S;ie++)t.texImage2D(n.TEXTURE_2D,ie,Te,N,G,0,Se,Ze,null),N>>=1,G>>=1}}else if(Fe.length>0){if(qe&&rt){const N=at(Fe[0]);t.texStorage2D(n.TEXTURE_2D,S,Te,N.width,N.height)}for(let N=0,G=Fe.length;N<G;N++)_e=Fe[N],qe?ze&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,Se,Ze,_e):t.texImage2D(n.TEXTURE_2D,N,Te,Se,Ze,_e);b.generateMipmaps=!1}else if(qe){if(rt){const N=at(le);t.texStorage2D(n.TEXTURE_2D,S,Te,N.width,N.height)}ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ze,le)}else t.texImage2D(n.TEXTURE_2D,0,Te,Se,Ze,le);m(b)&&p(ee),we.__version=re.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ie(L,b,$){if(b.image.length!==6)return;const ee=ue(L,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const re=i.get(ne);if(ne.version!==re.__version||ee===!0){t.activeTexture(n.TEXTURE0+$);const we=st.getPrimaries(st.workingColorSpace),de=b.colorSpace===yi?null:st.getPrimaries(b.colorSpace),fe=b.colorSpace===yi||we===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let G=0;G<6;G++)!De&&!le?Se[G]=_(b.image[G],!0,r.maxCubemapSize):Se[G]=le?b.image[G].image:b.image[G],Se[G]=We(b,Se[G]);const Ze=Se[0],Te=s.convert(b.format,b.colorSpace),_e=s.convert(b.type),Fe=M(b.internalFormat,Te,_e,b.colorSpace),qe=b.isVideoTexture!==!0,rt=re.__version===void 0||ee===!0,ze=ne.dataReady;let S=x(b,Ze);te(n.TEXTURE_CUBE_MAP,b);let N;if(De){qe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,S,Fe,Ze.width,Ze.height);for(let G=0;G<6;G++){N=Se[G].mipmaps;for(let ie=0;ie<N.length;ie++){const ae=N[ie];b.format!==Vt?Te!==null?qe?ze&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,0,0,ae.width,ae.height,Te,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,Fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,0,0,ae.width,ae.height,Te,_e,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,Fe,ae.width,ae.height,0,Te,_e,ae.data)}}}else{if(N=b.mipmaps,qe&&rt){N.length>0&&S++;const G=at(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,S,Fe,G.width,G.height)}for(let G=0;G<6;G++)if(le){qe?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Se[G].width,Se[G].height,Te,_e,Se[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Fe,Se[G].width,Se[G].height,0,Te,_e,Se[G].data);for(let ie=0;ie<N.length;ie++){const Oe=N[ie].image[G].image;qe?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,0,0,Oe.width,Oe.height,Te,_e,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,Fe,Oe.width,Oe.height,0,Te,_e,Oe.data)}}else{qe?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Te,_e,Se[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Fe,Te,_e,Se[G]);for(let ie=0;ie<N.length;ie++){const ae=N[ie];qe?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,0,0,Te,_e,ae.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,Fe,Te,_e,ae.image[G])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),re.__version=ne.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Z(L,b,$,ee,ne,re){const we=s.convert($.format,$.colorSpace),de=s.convert($.type),fe=M($.internalFormat,we,de,$.colorSpace);if(!i.get(b).__hasExternalTextures){const le=Math.max(1,b.width>>re),Se=Math.max(1,b.height>>re);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,fe,le,Se,b.depth,0,we,de,null):t.texImage2D(ne,re,fe,le,Se,0,we,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Be(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ne,i.get($).__webglTexture,0,be(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ne,i.get($).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(L,b,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let ee=n.DEPTH_COMPONENT24;if($||Be(b)){const ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===An?ee=n.DEPTH_COMPONENT32F:ne.type===ki&&(ee=n.DEPTH_COMPONENT24));const re=be(b);Be(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ee,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ee,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const ee=be(b);$&&Be(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,b.width,b.height):Be(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const ee=b.textures;for(let ne=0;ne<ee.length;ne++){const re=ee[ne],we=s.convert(re.format,re.colorSpace),de=s.convert(re.type),fe=M(re.internalFormat,we,de,re.colorSpace),De=be(b);$&&Be(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,fe,b.width,b.height):Be(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,fe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,fe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),I(b.depthTexture,0);const ee=i.get(b.depthTexture).__webglTexture,ne=be(b);if(b.depthTexture.format===Ri)Be(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(b.depthTexture.format===ws)Be(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function oe(L){const b=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ge(b.__webglFramebuffer,L)}else if($){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=n.createRenderbuffer(),se(b.__webglDepthbuffer[ee],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),se(b.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(L,b,$){const ee=i.get(L);b!==void 0&&Z(ee.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&oe(L)}function Ce(L){const b=L.texture,$=i.get(L),ee=i.get(b);L.addEventListener("dispose",P);const ne=L.textures,re=L.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=b.version,a.memory.textures++),re){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let fe=0;fe<b.mipmaps.length;fe++)$.__webglFramebuffer[de][fe]=n.createFramebuffer()}else $.__webglFramebuffer[de]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)$.__webglFramebuffer[de]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(we)for(let de=0,fe=ne.length;de<fe;de++){const De=i.get(ne[de]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&Be(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const fe=ne[de];$.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const De=s.convert(fe.format,fe.colorSpace),le=s.convert(fe.type),Se=M(fe.internalFormat,De,le,fe.colorSpace,L.isXRRenderTarget===!0),Ze=be(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Se,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,$.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),se($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),te(n.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Z($.__webglFramebuffer[de][fe],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,fe);else Z($.__webglFramebuffer[de],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,fe=ne.length;de<fe;de++){const De=ne[de],le=i.get(De);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),te(n.TEXTURE_2D,De),Z($.__webglFramebuffer,L,De,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(De)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ee.__webglTexture),te(de,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Z($.__webglFramebuffer[fe],L,b,n.COLOR_ATTACHMENT0,de,fe);else Z($.__webglFramebuffer,L,b,n.COLOR_ATTACHMENT0,de,0);m(b)&&p(de),t.unbindTexture()}L.depthBuffer&&oe(L)}function O(L){const b=L.textures;for(let $=0,ee=b.length;$<ee;$++){const ne=b[$];if(m(ne)){const re=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(ne).__webglTexture;t.bindTexture(re,we),p(re),t.unbindTexture()}}}const me=[],j=[];function Ae(L){if(L.samples>0){if(Be(L)===!1){const b=L.textures,$=L.width,ee=L.height;let ne=n.COLOR_BUFFER_BIT;const re=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(L),de=b.length>1;if(de)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);const De=i.get(b[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,$,ee,0,0,$,ee,ne,n.NEAREST),c===!0&&(me.length=0,j.length=0,me.push(n.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(me.push(re),j.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);const De=i.get(b[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const b=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function be(L){return Math.min(r.maxSamples,L.samples)}function Be(L){const b=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pe(L){const b=a.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function We(L,b){const $=L.colorSpace,ee=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==zi&&$!==yi&&(st.getTransfer($)===ut?(ee!==Vt||ne!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}function at(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=v,this.setTexture2D=I,this.setTexture2DArray=H,this.setTexture3D=R,this.setTextureCube=B,this.rebindTextures=Le,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Be}function bv(n,e){function t(i,r=yi){let s;const a=st.getTransfer(r);if(i===Oi)return n.UNSIGNED_BYTE;if(i===zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ip)return n.BYTE;if(i===rp)return n.SHORT;if(i===kh)return n.UNSIGNED_SHORT;if(i===Bh)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===ap)return n.ALPHA;if(i===op)return n.RGB;if(i===Vt)return n.RGBA;if(i===lp)return n.LUMINANCE;if(i===cp)return n.LUMINANCE_ALPHA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===up)return n.RED;if(i===Gh)return n.RED_INTEGER;if(i===hp)return n.RG;if(i===Vh)return n.RG_INTEGER;if(i===Wh)return n.RGBA_INTEGER;if(i===So||i===yo||i===Mo||i===wo)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===_c||i===vc||i===xc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===yc||i===Mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sc||i===yc)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wc||i===bc||i===Ec||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc||i===Fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bo||i===Oc||i===kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bo)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fp||i===Bc||i===zc||i===Hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Ev extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ga extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tv={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Gt({vertexShader:Av,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qt(new rr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Pv extends mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=new Cv,m=t.getContextAttributes();let p=null,M=null;const x=[],y=[],P=new Ee;let A=null;const E=new cn;E.layers.enable(1),E.viewport=new Ot;const U=new cn;U.layers.enable(2),U.viewport=new Ot;const w=[E,U],v=new Ev;v.layers.enable(1),v.layers.enable(2);let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=x[Z];return se===void 0&&(se=new Zo,x[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=x[Z];return se===void 0&&(se=new Zo,x[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=x[Z];return se===void 0&&(se=new Zo,x[Z]=se),se.getHandSpace()};function I(Z){const se=y.indexOf(Z.inputSource);if(se===-1)return;const ge=x[se];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,l||a),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",R);for(let Z=0;Z<x.length;Z++){const se=y[Z];se!==null&&(y[Z]=null,x[Z].disconnect(se))}D=null,z=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Vt,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ge=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?ws:Ri,ge=m.stencil?Fs:ki);const Le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Rn(d.textureWidth,d.textureHeight,{format:Vt,type:Oi,depthTexture:new Ha(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(Z){for(let se=0;se<Z.removed.length;se++){const ge=Z.removed[se],oe=y.indexOf(ge);oe>=0&&(y[oe]=null,x[oe].disconnect(ge))}for(let se=0;se<Z.added.length;se++){const ge=Z.added[se];let oe=y.indexOf(ge);if(oe===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=y.length){y.push(ge),oe=Ce;break}else if(y[Ce]===null){y[Ce]=ge,oe=Ce;break}if(oe===-1)break}const Le=x[oe];Le&&Le.connect(ge)}}const B=new k,q=new k;function V(Z,se,ge){B.setFromMatrixPosition(se.matrixWorld),q.setFromMatrixPosition(ge.matrixWorld);const oe=B.distanceTo(q),Le=se.projectionMatrix.elements,Ce=ge.projectionMatrix.elements,O=Le[14]/(Le[10]-1),me=Le[14]/(Le[10]+1),j=(Le[9]+1)/Le[5],Ae=(Le[9]-1)/Le[5],be=(Le[8]-1)/Le[0],Be=(Ce[8]+1)/Ce[0],Pe=O*be,We=O*Be,at=oe/(-be+Be),L=at*-be;se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(L),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const b=O+at,$=me+at,ee=Pe-L,ne=We+(oe-L),re=j*me/$*b,we=Ae*me/$*b;Z.projectionMatrix.makePerspective(ee,ne,re,we,b,$),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function J(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;_.texture!==null&&(Z.near=_.depthNear,Z.far=_.depthFar),v.near=U.near=E.near=Z.near,v.far=U.far=E.far=Z.far,(D!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,z=v.far,E.near=D,E.far=z,U.near=D,U.far=z,E.updateProjectionMatrix(),U.updateProjectionMatrix(),Z.updateProjectionMatrix());const se=Z.parent,ge=v.cameras;J(v,se);for(let oe=0;oe<ge.length;oe++)J(ge[oe],se);ge.length===2?V(v,E,U):v.projectionMatrix.copy(E.projectionMatrix),te(Z,v,se)};function te(Z,se,ge){ge===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Tl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null};let ue=null;function Me(Z,se){if(u=se.getViewerPose(l||a),g=se,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let oe=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Ce=0;Ce<ge.length;Ce++){const O=ge[Ce];let me=null;if(h!==null)me=h.getViewport(O);else{const Ae=f.getViewSubImage(d,O);me=Ae.viewport,Ce===0&&(e.setRenderTargetTextures(M,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(M))}let j=w[Ce];j===void 0&&(j=new cn,j.layers.enable(Ce),j.viewport=new Ot,w[Ce]=j),j.matrix.fromArray(O.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(O.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(me.x,me.y,me.width,me.height),Ce===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(j)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ce=f.getDepthInformation(ge[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let ge=0;ge<x.length;ge++){const oe=y[ge],Le=x[ge];oe!==null&&Le!==void 0&&Le.update(oe,se,l||a)}_.render(e,v),ue&&ue(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Ie=new sf;Ie.setAnimationLoop(Me),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}}const $i=new si,Lv=new ot;function Dv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ef(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,y=M.envMapRotation;if(x&&(m.envMap.value=x,$i.copy(y),$i.x*=-1,$i.y*=-1,$i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler($i)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*P,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Iv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const y=x.program;i.uniformBlockBinding(M,y)}function l(M,x){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(M,P);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){const x=f();M.__bindingPointIndex=x;const y=n.createBuffer(),P=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],y=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,E=y.length;A<E;A++){const U=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,v=U.length;w<v;w++){const D=U[w];if(h(D,A,w,P)===!0){const z=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let H=0;for(let R=0;R<I.length;R++){const B=I[R],q=_(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,z+H,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,x,y,P){const A=M.value,E=x+"_"+y;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{const U=P[E];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return P[E]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(M){const x=M.uniforms;let y=0;const P=16;for(let E=0,U=x.length;E<U;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,D=w.length;v<D;v++){const z=w[v],I=Array.isArray(z.value)?z.value:[z.value];for(let H=0,R=I.length;H<R;H++){const B=I[H],q=_(B),V=y%P;V!==0&&P-V<q.boundary&&(y+=P-V),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=q.storage}}}const A=y%P;return A>0&&(y+=P-A),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Uv{constructor(e={}){const{canvas:t=Tp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;const x=this;let y=!1,P=0,A=0,E=null,U=-1,w=null;const v=new Ot,D=new Ot;let z=null;const I=new je(0);let H=0,R=t.width,B=t.height,q=1,V=null,J=null;const te=new Ot(0,0,R,B),ue=new Ot(0,0,R,B);let Me=!1;const Ie=new rf;let Z=!1,se=!1;const ge=new ot,oe=new k,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return E===null?q:1}let O=i;function me(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$l}`),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",G,!1),O===null){const F="webgl2";if(O=me(F,T),O===null)throw me(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let j,Ae,be,Be,Pe,We,at,L,b,$,ee,ne,re,we,de,fe,De,le,Se,Ze,Te,_e,Fe,qe;function rt(){j=new G0(O),j.init(),_e=new bv(O,j),Ae=new F0(O,j,e,_e),be=new Mv(O),Be=new X0(O),Pe=new lv,We=new wv(O,j,be,Pe,Ae,_e,Be),at=new k0(x),L=new H0(x),b=new Jp(O),Fe=new U0(O,b),$=new V0(O,b,Be,Fe),ee=new $0(O,$,b,Be),Se=new q0(O,Ae,We),fe=new O0(Pe),ne=new ov(x,at,L,j,Ae,Fe,fe),re=new Dv(x,Pe),we=new uv,de=new gv(j),le=new I0(x,at,L,be,ee,d,c),De=new yv(x,ee,Ae),qe=new Iv(O,Be,Ae,be),Ze=new N0(O,j,Be),Te=new W0(O,j,Be),Be.programs=ne.programs,x.capabilities=Ae,x.extensions=j,x.properties=Pe,x.renderLists=we,x.shadowMap=De,x.state=be,x.info=Be}rt();const ze=new Pv(x,O);this.xr=ze,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(R,B,!1))},this.getSize=function(T){return T.set(R,B)},this.setSize=function(T,F,Y=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=T,B=F,t.width=Math.floor(T*q),t.height=Math.floor(F*q),Y===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(R*q,B*q).floor()},this.setDrawingBufferSize=function(T,F,Y){R=T,B=F,q=Y,t.width=Math.floor(T*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,F,Y,W){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,F,Y,W),be.viewport(v.copy(te).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,F,Y,W){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,F,Y,W),be.scissor(D.copy(ue).multiplyScalar(q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){be.setScissorTest(Me=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(T=!0,F=!0,Y=!0){let W=0;if(T){let X=!1;if(E!==null){const pe=E.texture.format;X=pe===Wh||pe===Vh||pe===Gh}if(X){const pe=E.texture.type,ve=pe===Oi||pe===ki||pe===kh||pe===Fs||pe===zh||pe===Hh,xe=le.getClearColor(),Re=le.getClearAlpha(),Ue=xe.r,He=xe.g,Ye=xe.b;ve?(h[0]=Ue,h[1]=He,h[2]=Ye,h[3]=Re,O.clearBufferuiv(O.COLOR,0,h)):(g[0]=Ue,g[1]=He,g[2]=Ye,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT),Y&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",G,!1),we.dispose(),de.dispose(),Pe.dispose(),at.dispose(),L.dispose(),ee.dispose(),Fe.dispose(),qe.dispose(),ne.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Ke),ze.removeEventListener("sessionend",yt),ct.stop()};function S(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Be.autoReset,F=De.enabled,Y=De.autoUpdate,W=De.needsUpdate,X=De.type;rt(),Be.autoReset=T,De.enabled=F,De.autoUpdate=Y,De.needsUpdate=W,De.type=X}function G(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const F=T.target;F.removeEventListener("dispose",ie),ae(F)}function ae(T){Oe(T),Pe.remove(T)}function Oe(T){const F=Pe.get(T).programs;F!==void 0&&(F.forEach(function(Y){ne.releaseProgram(Y)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Y,W,X,pe){F===null&&(F=Le);const ve=X.isMesh&&X.matrixWorld.determinant()<0,xe=dd(T,F,Y,W,X);be.setMaterial(W,ve);let Re=Y.index,Ue=1;if(W.wireframe===!0){if(Re=$.getWireframeAttribute(Y),Re===void 0)return;Ue=2}const He=Y.drawRange,Ye=Y.attributes.position;let Mt=He.start*Ue,kt=(He.start+He.count)*Ue;pe!==null&&(Mt=Math.max(Mt,pe.start*Ue),kt=Math.min(kt,(pe.start+pe.count)*Ue)),Re!==null?(Mt=Math.max(Mt,0),kt=Math.min(kt,Re.count)):Ye!=null&&(Mt=Math.max(Mt,0),kt=Math.min(kt,Ye.count));const rn=kt-Mt;if(rn<0||rn===1/0)return;Fe.setup(X,W,xe,Y,Re);let qn,tt=Ze;if(Re!==null&&(qn=b.get(Re),tt=Te,tt.setIndex(qn)),X.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*Ce()),tt.setMode(O.LINES)):tt.setMode(O.TRIANGLES);else if(X.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),be.setLineWidth(Ne*Ce()),X.isLineSegments?tt.setMode(O.LINES):X.isLineLoop?tt.setMode(O.LINE_LOOP):tt.setMode(O.LINE_STRIP)}else X.isPoints?tt.setMode(O.POINTS):X.isSprite&&tt.setMode(O.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?tt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)tt.renderInstances(Mt,rn,X.count);else if(Y.isInstancedBufferGeometry){const Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ss=Math.min(Y.instanceCount,Ne);tt.renderInstances(Mt,rn,ss)}else tt.render(Mt,rn)};function $e(T,F,Y){T.transparent===!0&&T.side===Fn&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,$s(T,F,Y),T.side=gn,T.needsUpdate=!0,$s(T,F,Y),T.side=Fn):$s(T,F,Y)}this.compile=function(T,F,Y=null){Y===null&&(Y=T),m=de.get(Y),m.init(F),M.push(m),Y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),T!==Y&&T.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights);const W=new Set;return T.traverse(function(X){const pe=X.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const xe=pe[ve];$e(xe,Y,X),W.add(xe)}else $e(pe,Y,X),W.add(pe)}),M.pop(),m=null,W},this.compileAsync=function(T,F,Y=null){const W=this.compile(T,F,Y);return new Promise(X=>{function pe(){if(W.forEach(function(ve){Pe.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){X(T);return}setTimeout(pe,10)}j.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let pt=null;function Rt(T){pt&&pt(T)}function Ke(){ct.stop()}function yt(){ct.start()}const ct=new sf;ct.setAnimationLoop(Rt),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(T){pt=T,ze.setAnimationLoop(T),T===null?ct.stop():ct.start()},ze.addEventListener("sessionstart",Ke),ze.addEventListener("sessionend",yt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(F),F=ze.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,E),m=de.get(T,M.length),m.init(F),M.push(m),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(ge),se=this.localClippingEnabled,Z=fe.init(this.clippingPlanes,se),_=we.get(T,p.length),_.init(),p.push(_),ai(T,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,J);const Y=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1;Y&&le.addToRenderList(_,T),this.info.render.frame++,Z===!0&&fe.beginShadows();const W=m.state.shadowsArray;De.render(W,T,F),Z===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,pe=_.transmissive;if(m.setupLights(x._useLegacyLights),F.isArrayCamera){const ve=F.cameras;if(pe.length>0)for(let xe=0,Re=ve.length;xe<Re;xe++){const Ue=ve[xe];oi(X,pe,T,Ue)}Y&&le.render(T);for(let xe=0,Re=ve.length;xe<Re;xe++){const Ue=ve[xe];hn(_,T,Ue,Ue.viewport)}}else pe.length>0&&oi(X,pe,T,F),Y&&le.render(T),hn(_,T,F);E!==null&&(We.updateMultisampleRenderTarget(E),We.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,F),Fe.resetDefaultState(),U=-1,w=null,M.pop(),M.length>0?(m=M[M.length-1],Z===!0&&fe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ai(T,F,Y,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){W&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ge);const ve=ee.update(T),xe=T.material;xe.visible&&_.push(T,ve,xe,Y,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const ve=ee.update(T),xe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),oe.copy(ve.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(ge)),Array.isArray(xe)){const Re=ve.groups;for(let Ue=0,He=Re.length;Ue<He;Ue++){const Ye=Re[Ue],Mt=xe[Ye.materialIndex];Mt&&Mt.visible&&_.push(T,ve,Mt,Y,oe.z,Ye)}}else xe.visible&&_.push(T,ve,xe,Y,oe.z,null)}}const pe=T.children;for(let ve=0,xe=pe.length;ve<xe;ve++)ai(pe[ve],F,Y,W)}function hn(T,F,Y,W){const X=T.opaque,pe=T.transmissive,ve=T.transparent;m.setupLightsView(Y),Z===!0&&fe.setGlobalState(x.clippingPlanes,Y),W&&be.viewport(v.copy(W)),X.length>0&&Xn(X,F,Y),pe.length>0&&Xn(pe,F,Y),ve.length>0&&Xn(ve,F,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function oi(T,F,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Rn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?jr:Oi,minFilter:er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const pe=m.state.transmissionRenderTarget[W.id],ve=W.viewport||v;pe.setSize(ve.z,ve.w);const xe=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(I),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Ai;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Z===!0&&fe.setGlobalState(x.clippingPlanes,W),Xn(T,Y,W),We.updateMultisampleRenderTarget(pe),We.updateRenderTargetMipmap(pe),j.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ye=0,Mt=F.length;Ye<Mt;Ye++){const kt=F[Ye],rn=kt.object,qn=kt.geometry,tt=kt.material,Ne=kt.group;if(tt.side===Fn&&rn.layers.test(W.layers)){const ss=tt.side;tt.side=tn,tt.needsUpdate=!0,rs(rn,Y,W,qn,tt,Ne),tt.side=ss,tt.needsUpdate=!0,He=!0}}He===!0&&(We.updateMultisampleRenderTarget(pe),We.updateRenderTargetMipmap(pe))}x.setRenderTarget(xe),x.setClearColor(I,H),Ue!==void 0&&(W.viewport=Ue),x.toneMapping=Re}function Xn(T,F,Y){const W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,pe=T.length;X<pe;X++){const ve=T[X],xe=ve.object,Re=ve.geometry,Ue=W===null?ve.material:W,He=ve.group;xe.layers.test(Y.layers)&&rs(xe,F,Y,Re,Ue,He)}}function rs(T,F,Y,W,X,pe){T.onBeforeRender(x,F,Y,W,X,pe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(x,F,Y,W,T,pe),X.transparent===!0&&X.side===Fn&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,x.renderBufferDirect(Y,F,W,X,T,pe),X.side=gn,X.needsUpdate=!0,x.renderBufferDirect(Y,F,W,X,T,pe),X.side=Fn):x.renderBufferDirect(Y,F,W,X,T,pe),T.onAfterRender(x,F,Y,W,X,pe)}function $s(T,F,Y){F.isScene!==!0&&(F=Le);const W=Pe.get(T),X=m.state.lights,pe=m.state.shadowsArray,ve=X.state.version,xe=ne.getParameters(T,X.state,pe,F,Y),Re=ne.getProgramCacheKey(xe);let Ue=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?L:at).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",ie),Ue=new Map,W.programs=Ue);let He=Ue.get(Re);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===ve)return cc(T,xe),He}else xe.uniforms=ne.getUniforms(T),T.onBuild(Y,xe,x),T.onBeforeCompile(xe,x),He=ne.acquireProgram(xe,Re),Ue.set(Re,He),W.uniforms=xe.uniforms;const Ye=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=fe.uniform),cc(T,xe),W.needsLights=md(T),W.lightsStateVersion=ve,W.needsLights&&(Ye.ambientLightColor.value=X.state.ambient,Ye.lightProbe.value=X.state.probe,Ye.directionalLights.value=X.state.directional,Ye.directionalLightShadows.value=X.state.directionalShadow,Ye.spotLights.value=X.state.spot,Ye.spotLightShadows.value=X.state.spotShadow,Ye.rectAreaLights.value=X.state.rectArea,Ye.ltc_1.value=X.state.rectAreaLTC1,Ye.ltc_2.value=X.state.rectAreaLTC2,Ye.pointLights.value=X.state.point,Ye.pointLightShadows.value=X.state.pointShadow,Ye.hemisphereLights.value=X.state.hemi,Ye.directionalShadowMap.value=X.state.directionalShadowMap,Ye.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ye.spotShadowMap.value=X.state.spotShadowMap,Ye.spotLightMatrix.value=X.state.spotLightMatrix,Ye.spotLightMap.value=X.state.spotLightMap,Ye.pointShadowMap.value=X.state.pointShadowMap,Ye.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function lc(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=La.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function cc(T,F){const Y=Pe.get(T);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function dd(T,F,Y,W,X){F.isScene!==!0&&(F=Le),We.resetTextureUnits();const pe=F.fog,ve=W.isMeshStandardMaterial?F.environment:null,xe=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:zi,Re=(W.isMeshStandardMaterial?L:at).get(W.envMap||ve),Ue=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ye=!!Y.morphAttributes.position,Mt=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color;let rn=Ai;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(rn=x.toneMapping);const qn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=qn!==void 0?qn.length:0,Ne=Pe.get(W),ss=m.state.lights;if(Z===!0&&(se===!0||T!==w)){const fn=T===w&&W.id===U;fe.setState(W,T,fn)}let ht=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ss.state.version||Ne.outputColorSpace!==xe||X.isBatchedMesh&&Ne.batching===!1||!X.isBatchedMesh&&Ne.batching===!0||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||X.isInstancedMesh&&Ne.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ne.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ne.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ne.instancingMorph===!1&&X.morphTexture!==null||Ne.envMap!==Re||W.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==fe.numPlanes||Ne.numIntersection!==fe.numIntersection)||Ne.vertexAlphas!==Ue||Ne.vertexTangents!==He||Ne.morphTargets!==Ye||Ne.morphNormals!==Mt||Ne.morphColors!==kt||Ne.toneMapping!==rn||Ne.morphTargetsCount!==tt)&&(ht=!0):(ht=!0,Ne.__version=W.version);let Hi=Ne.currentProgram;ht===!0&&(Hi=$s(W,F,X));let uc=!1,as=!1,go=!1;const Bt=Hi.getUniforms(),li=Ne.uniforms;if(be.useProgram(Hi.program)&&(uc=!0,as=!0,go=!0),W.id!==U&&(U=W.id,as=!0),uc||w!==T){Bt.setValue(O,"projectionMatrix",T.projectionMatrix),Bt.setValue(O,"viewMatrix",T.matrixWorldInverse);const fn=Bt.map.cameraPosition;fn!==void 0&&fn.setValue(O,oe.setFromMatrixPosition(T.matrixWorld)),Ae.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,as=!0,go=!0)}if(X.isSkinnedMesh){Bt.setOptional(O,X,"bindMatrix"),Bt.setOptional(O,X,"bindMatrixInverse");const fn=X.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Bt.setValue(O,"boneTexture",fn.boneTexture,We))}X.isBatchedMesh&&(Bt.setOptional(O,X,"batchingTexture"),Bt.setValue(O,"batchingTexture",X._matricesTexture,We));const _o=Y.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Se.update(X,Y,Hi),(as||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,Bt.setValue(O,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(li.envMap.value=Re,li.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(li.envMapIntensity.value=F.environmentIntensity),as&&(Bt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&pd(li,go),pe&&W.fog===!0&&re.refreshFogUniforms(li,pe),re.refreshMaterialUniforms(li,W,q,B,m.state.transmissionRenderTarget[T.id]),La.upload(O,lc(Ne),li,We)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(La.upload(O,lc(Ne),li,We),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Bt.setValue(O,"center",X.center),Bt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Bt.setValue(O,"normalMatrix",X.normalMatrix),Bt.setValue(O,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const fn=W.uniformsGroups;for(let vo=0,gd=fn.length;vo<gd;vo++){const hc=fn[vo];qe.update(hc,Hi),qe.bind(hc,Hi)}}return Hi}function pd(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function md(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,F,Y){Pe.get(T.texture).__webglTexture=F,Pe.get(T.depthTexture).__webglTexture=Y;const W=Pe.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const Y=Pe.get(T);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Y=0){E=T,P=F,A=Y;let W=!0,X=null,pe=!1,ve=!1;if(T){const Re=Pe.get(T);Re.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):Re.__webglFramebuffer===void 0?We.setupRenderTarget(T):Re.__hasExternalTextures&&We.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const He=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[F])?X=He[F][Y]:X=He[F],pe=!0):T.samples>0&&We.useMultisampledRTT(T)===!1?X=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[Y]:X=He,v.copy(T.viewport),D.copy(T.scissor),z=T.scissorTest}else v.copy(te).multiplyScalar(q).floor(),D.copy(ue).multiplyScalar(q).floor(),z=Me;if(be.bindFramebuffer(O.FRAMEBUFFER,X)&&W&&be.drawBuffers(T,X),be.viewport(v),be.scissor(D),be.setScissorTest(z),pe){const Re=Pe.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,Y)}else if(ve){const Re=Pe.get(T.texture),Ue=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Ue)}U=-1},this.readRenderTargetPixels=function(T,F,Y,W,X,pe,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){be.bindFramebuffer(O.FRAMEBUFFER,xe);try{const Re=T.texture,Ue=Re.format,He=Re.type;if(!Ae.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&Y>=0&&Y<=T.height-X&&O.readPixels(F,Y,W,X,_e.convert(Ue),_e.convert(He),pe)}finally{const Re=E!==null?Pe.get(E).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,F,Y=0){const W=Math.pow(2,-Y),X=Math.floor(F.image.width*W),pe=Math.floor(F.image.height*W);We.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,T.x,T.y,X,pe),be.unbindTexture()},this.copyTextureToTexture=function(T,F,Y,W=0){const X=F.image.width,pe=F.image.height,ve=_e.convert(Y.format),xe=_e.convert(Y.type);We.setTexture2D(Y,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,X,pe,ve,xe,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,ve,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,ve,xe,F.image),W===0&&Y.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(T,F,Y,W,X=0){const pe=T.max.x-T.min.x,ve=T.max.y-T.min.y,xe=T.max.z-T.min.z,Re=_e.convert(W.format),Ue=_e.convert(W.type);let He;if(W.isData3DTexture)We.setTexture3D(W,0),He=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)We.setTexture2DArray(W,0),He=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ye=O.getParameter(O.UNPACK_ROW_LENGTH),Mt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),kt=O.getParameter(O.UNPACK_SKIP_PIXELS),rn=O.getParameter(O.UNPACK_SKIP_ROWS),qn=O.getParameter(O.UNPACK_SKIP_IMAGES),tt=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,tt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?O.texSubImage3D(He,X,F.x,F.y,F.z,pe,ve,xe,Re,Ue,tt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(He,X,F.x,F.y,F.z,pe,ve,xe,Re,tt.data):O.texSubImage3D(He,X,F.x,F.y,F.z,pe,ve,xe,Re,Ue,tt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,rn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qn),X===0&&W.generateMipmaps&&O.generateMipmap(He),be.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?We.setTextureCube(T,0):T.isData3DTexture?We.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?We.setTexture2DArray(T,0):We.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,be.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===ao?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ko extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hf extends Zt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=St,u=St,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ff extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new k,Va=new k,Du=new ot,fs=new jl,_a=new oo,Jo=new k,Iu=new k;let Nv=class extends nn{constructor(e=new Wn,t=new ff){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ga.fromBufferAttribute(t,r-1),Va.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ga.distanceTo(Va);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=s,e.ray.intersectsSphere(_a)===!1)return;Du.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Du);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),x=va(this,e,fs,c,p,M);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=va(this,e,fs,c,_,m);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=va(this,e,fs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=va(this,e,fs,c,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function va(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ga.fromBufferAttribute(a,r),Va.fromBufferAttribute(a,s),t.distanceSqToSegment(Ga,Va,Jo,Iu)>i)return;Jo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Jo);if(!(c<e.near||c>e.far))return{distance:c,point:Iu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Uu=new k,Nu=new k;class Qo extends Nv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Uu.fromBufferAttribute(t,r),Nu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uu.distanceTo(Nu);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class el extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);const Ou={type:"change"},tl={type:"start"},ku={type:"end"},xa=new jl,Bu=new gi,Fv=Math.cos(70*Ep.DEG2RAD);class df extends mr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",De),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ou),i.update(),s=r.NONE},this.update=function(){const S=new k,N=new cr().setFromUnitVectors(e.up,new k(0,1,0)),G=N.clone().invert(),ie=new k,ae=new cr,Oe=new k,$e=2*Math.PI;return function(Rt=null){const Ke=i.object.position;S.copy(Ke).sub(i.target),S.applyQuaternion(N),o.setFromVector3(S),i.autoRotate&&s===r.NONE&&z(v(Rt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let yt=i.minAzimuthAngle,ct=i.maxAzimuthAngle;isFinite(yt)&&isFinite(ct)&&(yt<-Math.PI?yt+=$e:yt>Math.PI&&(yt-=$e),ct<-Math.PI?ct+=$e:ct>Math.PI&&(ct-=$e),yt<=ct?o.theta=Math.max(yt,Math.min(ct,o.theta)):o.theta=o.theta>(yt+ct)/2?Math.max(yt,o.theta):Math.min(ct,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ai=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)o.radius=te(o.radius);else{const hn=o.radius;o.radius=te(o.radius*l),ai=hn!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion(G),Ke.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let hn=null;if(i.object.isPerspectiveCamera){const oi=S.length();hn=te(oi*l);const Xn=oi-hn;i.object.position.addScaledVector(y,Xn),i.object.updateMatrixWorld(),ai=!!Xn}else if(i.object.isOrthographicCamera){const oi=new k(P.x,P.y,0);oi.unproject(i.object);const Xn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),ai=Xn!==i.object.zoom;const rs=new k(P.x,P.y,0);rs.unproject(i.object),i.object.position.sub(rs).add(oi),i.object.updateMatrixWorld(),hn=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;hn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(hn).add(i.object.position):(xa.origin.copy(i.object.position),xa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xa.direction))<Fv?e.lookAt(i.target):(Bu.setFromNormalAndCoplanarPoint(i.object.up,i.target),xa.intersectPlane(Bu,i.target))))}else if(i.object.isOrthographicCamera){const hn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),hn!==i.object.zoom&&(i.object.updateProjectionMatrix(),ai=!0)}return l=1,A=!1,ai||ie.distanceToSquared(i.object.position)>a||8*(1-ae.dot(i.object.quaternion))>a||Oe.distanceToSquared(i.target)>a?(i.dispatchEvent(Ou),ie.copy(i.object.position),ae.copy(i.object.quaternion),Oe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ze),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",$),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",$),i.domElement.getRootNode().removeEventListener("keydown",de,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",De),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Fu,c=new Fu;let l=1;const u=new k,f=new Ee,d=new Ee,h=new Ee,g=new Ee,_=new Ee,m=new Ee,p=new Ee,M=new Ee,x=new Ee,y=new k,P=new Ee;let A=!1;const E=[],U={};let w=!1;function v(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function D(S){const N=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*N)}function z(S){c.theta-=S}function I(S){c.phi-=S}const H=function(){const S=new k;return function(G,ie){S.setFromMatrixColumn(ie,0),S.multiplyScalar(-G),u.add(S)}}(),R=function(){const S=new k;return function(G,ie){i.screenSpacePanning===!0?S.setFromMatrixColumn(ie,1):(S.setFromMatrixColumn(ie,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(G),u.add(S)}}(),B=function(){const S=new k;return function(G,ie){const ae=i.domElement;if(i.object.isPerspectiveCamera){const Oe=i.object.position;S.copy(Oe).sub(i.target);let $e=S.length();$e*=Math.tan(i.object.fov/2*Math.PI/180),H(2*G*$e/ae.clientHeight,i.object.matrix),R(2*ie*$e/ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(G*(i.object.right-i.object.left)/i.object.zoom/ae.clientWidth,i.object.matrix),R(ie*(i.object.top-i.object.bottom)/i.object.zoom/ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(S,N){if(!i.zoomToCursor)return;A=!0;const G=i.domElement.getBoundingClientRect(),ie=S-G.left,ae=N-G.top,Oe=G.width,$e=G.height;P.x=ie/Oe*2-1,P.y=-(ae/$e)*2+1,y.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function te(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function ue(S){f.set(S.clientX,S.clientY)}function Me(S){J(S.clientX,S.clientX),p.set(S.clientX,S.clientY)}function Ie(S){g.set(S.clientX,S.clientY)}function Z(S){d.set(S.clientX,S.clientY),h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const N=i.domElement;z(2*Math.PI*h.x/N.clientHeight),I(2*Math.PI*h.y/N.clientHeight),f.copy(d),i.update()}function se(S){M.set(S.clientX,S.clientY),x.subVectors(M,p),x.y>0?q(D(x.y)):x.y<0&&V(D(x.y)),p.copy(M),i.update()}function ge(S){_.set(S.clientX,S.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),B(m.x,m.y),g.copy(_),i.update()}function oe(S){J(S.clientX,S.clientY),S.deltaY<0?V(D(S.deltaY)):S.deltaY>0&&q(D(S.deltaY)),i.update()}function Le(S){let N=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),N=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),N=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),N=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),N=!0;break}N&&(S.preventDefault(),i.update())}function Ce(S){if(E.length===1)f.set(S.pageX,S.pageY);else{const N=rt(S),G=.5*(S.pageX+N.x),ie=.5*(S.pageY+N.y);f.set(G,ie)}}function O(S){if(E.length===1)g.set(S.pageX,S.pageY);else{const N=rt(S),G=.5*(S.pageX+N.x),ie=.5*(S.pageY+N.y);g.set(G,ie)}}function me(S){const N=rt(S),G=S.pageX-N.x,ie=S.pageY-N.y,ae=Math.sqrt(G*G+ie*ie);p.set(0,ae)}function j(S){i.enableZoom&&me(S),i.enablePan&&O(S)}function Ae(S){i.enableZoom&&me(S),i.enableRotate&&Ce(S)}function be(S){if(E.length==1)d.set(S.pageX,S.pageY);else{const G=rt(S),ie=.5*(S.pageX+G.x),ae=.5*(S.pageY+G.y);d.set(ie,ae)}h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const N=i.domElement;z(2*Math.PI*h.x/N.clientHeight),I(2*Math.PI*h.y/N.clientHeight),f.copy(d)}function Be(S){if(E.length===1)_.set(S.pageX,S.pageY);else{const N=rt(S),G=.5*(S.pageX+N.x),ie=.5*(S.pageY+N.y);_.set(G,ie)}m.subVectors(_,g).multiplyScalar(i.panSpeed),B(m.x,m.y),g.copy(_)}function Pe(S){const N=rt(S),G=S.pageX-N.x,ie=S.pageY-N.y,ae=Math.sqrt(G*G+ie*ie);M.set(0,ae),x.set(0,Math.pow(M.y/p.y,i.zoomSpeed)),q(x.y),p.copy(M);const Oe=(S.pageX+N.x)*.5,$e=(S.pageY+N.y)*.5;J(Oe,$e)}function We(S){i.enableZoom&&Pe(S),i.enablePan&&Be(S)}function at(S){i.enableZoom&&Pe(S),i.enableRotate&&be(S)}function L(S){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",$)),!Fe(S)&&(Te(S),S.pointerType==="touch"?le(S):ee(S)))}function b(S){i.enabled!==!1&&(S.pointerType==="touch"?Se(S):ne(S))}function $(S){switch(_e(S),E.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",$),i.dispatchEvent(ku),s=r.NONE;break;case 1:const N=E[0],G=U[N];le({pointerId:N,pageX:G.x,pageY:G.y});break}}function ee(S){let N;switch(S.button){case 0:N=i.mouseButtons.LEFT;break;case 1:N=i.mouseButtons.MIDDLE;break;case 2:N=i.mouseButtons.RIGHT;break;default:N=-1}switch(N){case _r.DOLLY:if(i.enableZoom===!1)return;Me(S),s=r.DOLLY;break;case _r.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;Ie(S),s=r.PAN}else{if(i.enableRotate===!1)return;ue(S),s=r.ROTATE}break;case _r.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;ue(S),s=r.ROTATE}else{if(i.enablePan===!1)return;Ie(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(tl)}function ne(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(S);break;case r.DOLLY:if(i.enableZoom===!1)return;se(S);break;case r.PAN:if(i.enablePan===!1)return;ge(S);break}}function re(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(tl),oe(we(S)),i.dispatchEvent(ku))}function we(S){const N=S.deltaMode,G={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(N){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return S.ctrlKey&&!w&&(G.deltaY*=10),G}function de(S){S.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(S){S.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function De(S){i.enabled===!1||i.enablePan===!1||Le(S)}function le(S){switch(qe(S),E.length){case 1:switch(i.touches.ONE){case vr.ROTATE:if(i.enableRotate===!1)return;Ce(S),s=r.TOUCH_ROTATE;break;case vr.PAN:if(i.enablePan===!1)return;O(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(S),s=r.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ae(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(tl)}function Se(S){switch(qe(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Be(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;at(S),i.update();break;default:s=r.NONE}}function Ze(S){i.enabled!==!1&&S.preventDefault()}function Te(S){E.push(S.pointerId)}function _e(S){delete U[S.pointerId];for(let N=0;N<E.length;N++)if(E[N]==S.pointerId){E.splice(N,1);return}}function Fe(S){for(let N=0;N<E.length;N++)if(E[N]==S.pointerId)return!0;return!1}function qe(S){let N=U[S.pointerId];N===void 0&&(N=new Ee,U[S.pointerId]=N),N.set(S.pageX,S.pageY)}function rt(S){const N=S.pointerId===E[0]?E[1]:E[0];return U[N]}i.domElement.addEventListener("contextmenu",Ze),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",$),i.domElement.addEventListener("wheel",re,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}function Ov(n){return n.length>=2&&n[0]===31&&n[1]===139}function kv(n){return n.length>=2&&n[0]===120&&(n[1]===1||n[1]===94||n[1]===156||n[1]===218)}function Bv(n){const e=n.slice(0,8),t=new DataView(e.buffer,e.byteOffset),i=t.getUint32(0,!0),r=t.getUint32(4,!0);if(e.length===8&&i>0&&i<100&&r===n.byteLength-8)return i}const zv=new TextEncoder,Hv=new TextDecoder;function Gv(n){return zv.encode(n)}function Vv(n){return Hv.decode(n instanceof Uint8Array?n:Uint8Array.from(n))}class pf{constructor(e,t){C(this,"littleEndian");C(this,"offset");C(this,"array");C(this,"view");C(this,"readByte",this.readNumber.bind(this,"getInt8",1));C(this,"readShort",this.readNumber.bind(this,"getInt16",2));C(this,"readInt",this.readNumber.bind(this,"getInt32",4));C(this,"readFloat",this.readNumber.bind(this,"getFloat32",4));C(this,"readDouble",this.readNumber.bind(this,"getFloat64",8));this.littleEndian=(t==null?void 0:t.littleEndian)??!1,this.offset=(t==null?void 0:t.offset)??0,this.array=e instanceof Uint8Array?e:new Uint8Array(e),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}readNumber(e,t){this.requireAvailable(t);const i=this.view[e](this.offset,this.littleEndian);return this.offset+=t,i}requireAvailable(e){if(e<0)throw new Error(`Cannot read negative byte length ${e}`);if(this.offset+e>this.array.byteLength)throw new Error(`Cannot read ${e} bytes at offset ${this.offset}; input length is ${this.array.byteLength}`)}readBytes(e){this.requireAvailable(e);const t=this.array.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){this.requireAvailable(2);const e=this.view.getUint16(this.offset,this.littleEndian);this.offset+=2;const t=this.readBytes(e);return Vv(t)}}class mf{constructor(e){C(this,"littleEndian");C(this,"offset");C(this,"buffer");C(this,"array");C(this,"view");C(this,"writeByte",this.writeNumber.bind(this,"setInt8",1));C(this,"writeShort",this.writeNumber.bind(this,"setInt16",2));C(this,"writeInt",this.writeNumber.bind(this,"setInt32",4));C(this,"writeFloat",this.writeNumber.bind(this,"setFloat32",4));C(this,"writeDouble",this.writeNumber.bind(this,"setFloat64",8));this.littleEndian=(e==null?void 0:e.littleEndian)??!1,this.offset=(e==null?void 0:e.offset)??0,this.buffer=new ArrayBuffer((e==null?void 0:e.initialSize)??1024),this.array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer)}accommodate(e){const t=this.offset+e;if(this.buffer.byteLength>=t)return;let i=this.buffer.byteLength;for(;i<t;)i*=2;const r=new ArrayBuffer(i),s=new Uint8Array(r);s.set(this.array),this.offset>this.buffer.byteLength&&s.fill(0,this.buffer.byteLength,this.offset),this.buffer=r,this.view=new DataView(r),this.array=s}writeNumber(e,t,i){this.accommodate(t),this.view[e](this.offset,i,this.littleEndian),this.offset+=t}writeBytes(e){this.accommodate(e.length),this.array.set(e,this.offset),this.offset+=e.length}writeString(e){const t=Gv(e);if(t.length>65535)throw new Error(`NBT strings cannot exceed 65535 bytes; got ${t.length}`);this.accommodate(2),this.view.setUint16(this.offset,t.length,this.littleEndian),this.offset+=2,this.writeBytes(t)}getData(){return this.accommodate(0),this.array.slice(0,this.offset)}}var Q;(function(n){function e(f){return typeof f=="number"?f:void 0}n.readNumber=e;function t(f){return typeof f=="number"?Math.floor(f):void 0}n.readInt=t;function i(f){return typeof f=="string"?f:void 0}n.readString=i;function r(f){return typeof f=="boolean"?f:void 0}n.readBoolean=r;function s(f){return typeof f=="object"&&f!==null&&!Array.isArray(f)?f:void 0}n.readObject=s;function a(f,d){if(Array.isArray(f))return d?f.map(h=>d(h)):f}n.readArray=a;function o(f,d){if(Array.isArray(f))return[0,1].map(h=>d(f[h]))}n.readPair=o;function c(f,d){const h=s(f)??{};return Object.fromEntries(Object.entries(h).map(([g,_])=>[g,d(_)]))}n.readMap=c;function l(f,d,h){const g=d(f);return g?h(g):void 0}n.compose=l;function u(f,d){return typeof f!="string"?d[0]:d.includes(f)?f:d[0]}n.readEnum=u})(Q||(Q={}));var Xe;(function(n){function e(r){const s=Q.readNumber(r);if(s)return i(s);const a=Q.readArray(r,o=>Q.readNumber(o)??0);if(!(a===void 0||a.length!==3))return a}n.fromJson=e;function t(r){if(r.isNumber())return i(r.getAsNumber());if(!r.isListOrArray())return;const s=r.getItems();if(!(s.length<3))return s.map(a=>a.getAsNumber())}n.fromNbt=t;function i(r){const s=r>>16&255,a=r>>8&255,o=r&255;return[s/255,a/255,o/255]}n.intToRgb=i})(Xe||(Xe={}));class qt{constructor(e){C(this,"source");C(this,"cursor");this.source=e,this.cursor=0}get remainingLength(){return this.source.length-this.cursor}get totalLength(){return this.source.length}getRead(e=0){return this.source.substring(e,this.cursor)}getRemaining(){return this.source.substring(this.cursor)}canRead(e=1){return this.cursor+e<=this.source.length}peek(e=0){return this.source.charAt(this.cursor+e)}read(){return this.source.charAt(this.cursor++)}skip(){this.cursor+=1}skipWhitespace(){for(;this.canRead()&&qt.isWhitespace(this.peek());)this.skip()}expect(e,t=!1){if(t&&this.skipWhitespace(),!this.canRead()||this.peek()!==e)throw this.createError(`Expected '${e}'`);this.skip()}readInt(){const e=this.cursor;for(;this.canRead()&&qt.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected integer");try{const i=Number(t);if(isNaN(i)||!Number.isInteger(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid integer '${t}'`)}}readFloat(){const e=this.cursor;for(;this.canRead()&&qt.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected float");try{const i=Number(t);if(isNaN(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid float '${t}'`)}}readUnquotedString(){const e=this.cursor;for(;this.canRead()&&qt.isAllowedInUnquotedString(this.peek());)this.skip();return this.getRead(e)}readQuotedString(){if(!this.canRead())return"";const e=this.peek();if(!qt.isQuotedStringStart(e))throw this.createError("Expected quote to start a string");return this.skip(),this.readStringUntil(e)}readString(){if(!this.canRead())return"";const e=this.peek();return qt.isQuotedStringStart(e)?(this.skip(),this.readStringUntil(e)):this.readUnquotedString()}readStringUntil(e){const t=[];let i=!1;for(;this.canRead();){const r=this.read();if(i)if(r===e||r==="\\")t.push(r),i=!1;else throw this.cursor-=1,this.createError(`Invalid escape sequence '${r}' in quoted string`);else if(r==="\\")i=!0;else{if(r===e)return t.join("");t.push(r)}}throw this.createError("Unclosed quoted string")}readBoolean(){const e=this.cursor,t=this.readUnquotedString();if(t.length===0)throw this.createError("Expected bool");if(t==="true")return!0;if(t==="false")return!1;throw this.cursor=e,this.createError(`Invalid bool, expected true or false but found '${t}'`)}static isAllowedInNumber(e){return e>="0"&&e<="9"||e==="."||e==="-"}static isAllowedInUnquotedString(e){return e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z"||e==="_"||e==="-"||e==="."||e==="+"}static isQuotedStringStart(e){return e==="'"||e==='"'}static isWhitespace(e){return e===" "||e==="	"||e===`
`||e==="\r"}createError(e){const t=Math.min(this.source.length,this.cursor),i=(t>10?"...":"")+this.source.substring(Math.max(0,t-10),t);return new Error(`${e} at position ${this.cursor}: ${i}<--[HERE]`)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Wv=4,zu=0,Hu=1,Xv=2;function ts(n){let e=n.length;for(;--e>=0;)n[e]=0}const qv=0,gf=1,$v=2,Yv=3,jv=258,Kl=29,Hs=256,bs=Hs+1+Kl,Vr=30,Jl=19,_f=2*bs+1,tr=15,nl=16,Zv=7,Ql=256,vf=16,xf=17,Sf=18,Rl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Da=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Kv=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),yf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jv=512,ti=new Array((bs+2)*2);ts(ti);const vs=new Array(Vr*2);ts(vs);const Es=new Array(Jv);ts(Es);const Ts=new Array(jv-Yv+1);ts(Ts);const ec=new Array(Kl);ts(ec);const Wa=new Array(Vr);ts(Wa);function il(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Mf,wf,bf;function rl(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Ef=n=>n<256?Es[n]:Es[256+(n>>>7)],As=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},en=(n,e,t)=>{n.bi_valid>nl-t?(n.bi_buf|=e<<n.bi_valid&65535,As(n,n.bi_buf),n.bi_buf=e>>nl-n.bi_valid,n.bi_valid+=t-nl):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},kn=(n,e,t)=>{en(n,t[e*2],t[e*2+1])},Tf=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},Qv=n=>{n.bi_valid===16?(As(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},ex=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,f,d,h,g,_=0;for(d=0;d<=tr;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<_f;l++)u=n.heap[l],d=t[t[u*2+1]*2+1]+1,d>c&&(d=c,_++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,h=0,u>=o&&(h=a[u-o]),g=t[u*2],n.opt_len+=g*(d+h),s&&(n.static_len+=g*(r[u*2+1]+h)));if(_!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(u=n.bl_count[d];u!==0;)f=n.heap[--l],!(f>i)&&(t[f*2+1]!==d&&(n.opt_len+=(d-t[f*2+1])*t[f*2],t[f*2+1]=d),u--)}},Af=(n,e,t)=>{const i=new Array(tr+1);let r=0,s,a;for(s=1;s<=tr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Tf(i[o]++,o))}},tx=()=>{let n,e,t,i,r;const s=new Array(tr+1);for(t=0,i=0;i<Kl-1;i++)for(ec[i]=t,n=0;n<1<<Rl[i];n++)Ts[t++]=i;for(Ts[t-1]=i,r=0,i=0;i<16;i++)for(Wa[i]=r,n=0;n<1<<Da[i];n++)Es[r++]=i;for(r>>=7;i<Vr;i++)for(Wa[i]=r<<7,n=0;n<1<<Da[i]-7;n++)Es[256+r++]=i;for(e=0;e<=tr;e++)s[e]=0;for(n=0;n<=143;)ti[n*2+1]=8,n++,s[8]++;for(;n<=255;)ti[n*2+1]=9,n++,s[9]++;for(;n<=279;)ti[n*2+1]=7,n++,s[7]++;for(;n<=287;)ti[n*2+1]=8,n++,s[8]++;for(Af(ti,bs+1,s),n=0;n<Vr;n++)vs[n*2+1]=5,vs[n*2]=Tf(n,5);Mf=new il(ti,Rl,Hs+1,bs,tr),wf=new il(vs,Da,0,Vr,tr),bf=new il(new Array(0),Kv,0,Jl,Zv)},Rf=n=>{let e;for(e=0;e<bs;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Vr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Jl;e++)n.bl_tree[e*2]=0;n.dyn_ltree[Ql*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Cf=n=>{n.bi_valid>8?As(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Gu=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},sl=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Gu(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Gu(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Vu=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?kn(n,r,e):(a=Ts[r],kn(n,a+Hs+1,e),o=Rl[a],o!==0&&(r-=ec[a],en(n,r,o)),i--,a=Ef(i),kn(n,a,t),o=Da[a],o!==0&&(i-=Wa[a],en(n,i,o)));while(s<n.sym_next);kn(n,Ql,e)},Cl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=_f,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)sl(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],sl(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,sl(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],ex(n,e),Af(t,c,n.bl_count)},Wu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[vf*2]++):o<=10?n.bl_tree[xf*2]++:n.bl_tree[Sf*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},Xu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do kn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(kn(n,s,n.bl_tree),o--),kn(n,vf,n.bl_tree),en(n,o-3,2)):o<=10?(kn(n,xf,n.bl_tree),en(n,o-3,3)):(kn(n,Sf,n.bl_tree),en(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},nx=n=>{let e;for(Wu(n,n.dyn_ltree,n.l_desc.max_code),Wu(n,n.dyn_dtree,n.d_desc.max_code),Cl(n,n.bl_desc),e=Jl-1;e>=3&&n.bl_tree[yf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},ix=(n,e,t,i)=>{let r;for(en(n,e-257,5),en(n,t-1,5),en(n,i-4,4),r=0;r<i;r++)en(n,n.bl_tree[yf[r]*2+1],3);Xu(n,n.dyn_ltree,e-1),Xu(n,n.dyn_dtree,t-1)},rx=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return zu;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Hu;for(t=32;t<Hs;t++)if(n.dyn_ltree[t*2]!==0)return Hu;return zu};let qu=!1;const sx=n=>{qu||(tx(),qu=!0),n.l_desc=new rl(n.dyn_ltree,Mf),n.d_desc=new rl(n.dyn_dtree,wf),n.bl_desc=new rl(n.bl_tree,bf),n.bi_buf=0,n.bi_valid=0,Rf(n)},Pf=(n,e,t,i)=>{en(n,(qv<<1)+(i?1:0),3),Cf(n),As(n,t),As(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},ax=n=>{en(n,gf<<1,3),kn(n,Ql,ti),Qv(n)},ox=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===Xv&&(n.strm.data_type=rx(n)),Cl(n,n.l_desc),Cl(n,n.d_desc),a=nx(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?Pf(n,e,t,i):n.strategy===Wv||s===r?(en(n,(gf<<1)+(i?1:0),3),Vu(n,ti,vs)):(en(n,($v<<1)+(i?1:0),3),ix(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Vu(n,n.dyn_ltree,n.dyn_dtree)),Rf(n),i&&Cf(n)},lx=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Ts[t]+Hs+1)*2]++,n.dyn_dtree[Ef(e)*2]++),n.sym_next===n.sym_end);var cx=sx,ux=Pf,hx=ox,fx=lx,dx=ax,px={_tr_init:cx,_tr_stored_block:ux,_tr_flush_block:hx,_tr_tally:fx,_tr_align:dx};const mx=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Rs=mx;const gx=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},_x=new Uint32Array(gx()),vx=(n,e,t,i)=>{const r=_x,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Pt=vx,ur={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Gs={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:xx,_tr_stored_block:Pl,_tr_flush_block:Sx,_tr_tally:Ci,_tr_align:yx}=px,{Z_NO_FLUSH:Pi,Z_PARTIAL_FLUSH:Mx,Z_FULL_FLUSH:wx,Z_FINISH:mn,Z_BLOCK:$u,Z_OK:It,Z_STREAM_END:Yu,Z_STREAM_ERROR:zn,Z_DATA_ERROR:bx,Z_BUF_ERROR:al,Z_DEFAULT_COMPRESSION:Ex,Z_FILTERED:Tx,Z_HUFFMAN_ONLY:Sa,Z_RLE:Ax,Z_FIXED:Rx,Z_DEFAULT_STRATEGY:Cx,Z_UNKNOWN:Px,Z_DEFLATED:co}=Gs,Lx=9,Dx=15,Ix=8,Ux=29,Nx=256,Ll=Nx+1+Ux,Fx=30,Ox=19,kx=2*Ll+1,Bx=15,Je=3,bi=258,Hn=bi+Je+1,zx=32,Kr=42,tc=57,Dl=69,Il=73,Ul=91,Nl=103,nr=113,gs=666,jt=1,ns=2,hr=3,is=4,Hx=3,ir=(n,e)=>(n.msg=ur[e],e),ju=n=>n*2-(n>4?9:0),Mi=n=>{let e=n.length;for(;--e>=0;)n[e]=0},Gx=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let nc=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask;const fr=(n,e)=>{let t;if(n.legacy_hash)t=n.ins_h=nc(n,n.ins_h,n.window[e+Je-1]);else{const r=n.window,s=r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;t=n.ins_h=Math.imul(s,66521)+66521>>>16&n.hash_mask}const i=n.prev[e&n.w_mask]=n.head[t];return n.head[t]=e,i},on=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},un=(n,e)=>{Sx(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,on(n.strm)},Qe=(n,e)=>{n.pending_buf[n.pending++]=e},ds=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Fl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Rs(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Pt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},Lf=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Hn?n.strstart-(n.w_size-Hn):0,l=n.window,u=n.w_mask,f=n.prev,d=n.strstart+bi;let h=l[i+a-1],g=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==h||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<d);if(s=bi-(d-i),i=d-bi,s>a){if(n.match_start=e,a=s,s>=o)break;h=l[i+a-1],g=l[i+a]}}while((e=f[e&u])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},Jr=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Hn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),Gx(n),i+=e),n.strm.avail_in===0)break;if(t=Fl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.legacy_hash){if(n.lookahead+n.insert>=Je)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=nc(n,n.ins_h,n.window[r+1]);n.insert&&(fr(n,r),r++,n.insert--,!(n.lookahead+n.insert<Je)););}else if(n.lookahead+n.insert>Je)for(r=n.strstart-n.insert;n.insert&&(fr(n,r),r++,n.insert--,!(n.lookahead+n.insert<=Je)););}while(n.lookahead<Hn&&n.strm.avail_in!==0)},Df=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==mn||e===Pi||i!==r+n.strm.avail_in)))break;a=e===mn&&i===r+n.strm.avail_in?1:0,Pl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,on(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Fl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?is:e!==Pi&&e!==mn&&n.strm.avail_in===0&&n.strstart===n.block_start?ns:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Fl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===mn)&&e!==Pi&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===mn&&n.strm.avail_in===0&&i===r?1:0,Pl(n,n.block_start,i,a),n.block_start+=i,on(n.strm)),a?hr:jt)},ol=(n,e)=>{let t,i;for(;;){if(n.lookahead<Hn){if(Jr(n),n.lookahead<Hn&&e===Pi)return jt;if(n.lookahead===0)break}if(t=0,n.lookahead>=Je&&(t=fr(n,n.strstart)),t!==0&&n.strstart-t<=n.w_size-Hn&&(n.match_length=Lf(n,t)),n.match_length>=Je)if(i=Ci(n,n.strstart-n.match_start,n.match_length-Je),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Je){n.match_length--;do n.strstart++,t=fr(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=nc(n,n.ins_h,n.window[n.strstart+1]));else i=Ci(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(un(n,!1),n.strm.avail_out===0))return jt}return n.insert=n.strstart<Je-1?n.strstart:Je-1,e===mn?(un(n,!0),n.strm.avail_out===0?hr:is):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?jt:ns},Fr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Hn){if(Jr(n),n.lookahead<Hn&&e===Pi)return jt;if(n.lookahead===0)break}if(t=0,n.lookahead>=Je&&(t=fr(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Je-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Hn&&(n.match_length=Lf(n,t),n.match_length<=5&&(n.strategy===Tx||n.match_length===Je&&n.strstart-n.match_start>4096)&&(n.match_length=Je-1)),n.prev_length>=Je&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-Je,i=Ci(n,n.strstart-1-n.prev_match,n.prev_length-Je),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(t=fr(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Je-1,n.strstart++,i&&(un(n,!1),n.strm.avail_out===0))return jt}else if(n.match_available){if(i=Ci(n,0,n.window[n.strstart-1]),i&&un(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return jt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Ci(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Je-1?n.strstart:Je-1,e===mn?(un(n,!0),n.strm.avail_out===0?hr:is):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?jt:ns},Vx=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=bi){if(Jr(n),n.lookahead<=bi&&e===Pi)return jt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=Je&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+bi;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=bi-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=Je?(t=Ci(n,1,n.match_length-Je),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Ci(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(un(n,!1),n.strm.avail_out===0))return jt}return n.insert=0,e===mn?(un(n,!0),n.strm.avail_out===0?hr:is):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?jt:ns},Wx=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Jr(n),n.lookahead===0)){if(e===Pi)return jt;break}if(n.match_length=0,t=Ci(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(un(n,!1),n.strm.avail_out===0))return jt}return n.insert=0,e===mn?(un(n,!0),n.strm.avail_out===0?hr:is):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?jt:ns};function Ln(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const _s=[new Ln(0,0,0,0,Df),new Ln(4,4,8,4,ol),new Ln(4,5,16,8,ol),new Ln(4,6,32,32,ol),new Ln(4,4,16,16,Fr),new Ln(8,16,32,32,Fr),new Ln(8,16,128,128,Fr),new Ln(8,32,128,256,Fr),new Ln(32,128,258,1024,Fr),new Ln(32,258,258,4096,Fr)],Xx=n=>{n.window_size=2*n.w_size,Mi(n.head),n.max_lazy_match=_s[n.level].max_lazy,n.good_match=_s[n.level].good_length,n.nice_match=_s[n.level].nice_length,n.max_chain_length=_s[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=Je-1,n.match_available=0,n.ins_h=0};function qx(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=co,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(kx*2),this.dyn_dtree=new Uint16Array((2*Fx+1)*2),this.bl_tree=new Uint16Array((2*Ox+1)*2),Mi(this.dyn_ltree),Mi(this.dyn_dtree),Mi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(Bx+1),this.heap=new Uint16Array(2*Ll+1),Mi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ll+1),Mi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Vs=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Kr&&e.status!==tc&&e.status!==Dl&&e.status!==Il&&e.status!==Ul&&e.status!==Nl&&e.status!==nr&&e.status!==gs?1:0},If=n=>{if(Vs(n))return ir(n,zn);n.total_in=n.total_out=0,n.data_type=Px;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?tc:e.wrap?Kr:nr,n.adler=e.wrap===2?0:1,e.last_flush=-2,xx(e),It},Uf=n=>{const e=If(n);return e===It&&Xx(n.state),e},$x=(n,e)=>Vs(n)||n.state.wrap!==2?zn:(n.state.gzhead=e,It),Nf=(n,e,t,i,r,s,a)=>{if(!n)return zn;let o=1;if(e===Ex&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>Lx||t!==co||i<8||i>15||e<0||e>9||s<0||s>Rx||i===8&&o!==1)return ir(n,zn);i===8&&(i=9);const c=new qx;return n.state=c,c.strm=n,c.status=Kr,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=a?1:0,c.hash_bits=r+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+Je-1)/Je),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<r+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=e,c.strategy=s,c.method=t,Uf(n)},Yx=(n,e)=>Nf(n,e,co,Dx,Ix,Cx),jx=(n,e)=>{if(Vs(n)||e>$u||e<0)return n?ir(n,zn):zn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===gs&&e!==mn)return ir(n,n.avail_out===0?al:zn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(on(n),n.avail_out===0)return t.last_flush=-1,It}else if(n.avail_in===0&&ju(e)<=ju(i)&&e!==mn)return ir(n,al);if(t.status===gs&&n.avail_in!==0)return ir(n,al);if(t.status===Kr&&t.wrap===0&&(t.status=nr),t.status===Kr){let r=co+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Sa||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=zx),r+=31-r%31,ds(t,r),t.strstart!==0&&(ds(t,n.adler>>>16),ds(t,n.adler&65535)),n.adler=1,t.status=nr,on(n),t.pending!==0)return t.last_flush=-1,It}if(t.status===tc){if(n.adler=0,Qe(t,31),Qe(t,139),Qe(t,8),t.gzhead)Qe(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),Qe(t,t.gzhead.time&255),Qe(t,t.gzhead.time>>8&255),Qe(t,t.gzhead.time>>16&255),Qe(t,t.gzhead.time>>24&255),Qe(t,t.level===9?2:t.strategy>=Sa||t.level<2?4:0),Qe(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(Qe(t,t.gzhead.extra.length&255),Qe(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Pt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Dl;else if(Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,t.level===9?2:t.strategy>=Sa||t.level<2?4:0),Qe(t,Hx),t.status=nr,on(n),t.pending!==0)return t.last_flush=-1,It}if(t.status===Dl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,on(n),t.pending!==0)return t.last_flush=-1,It;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Il}if(t.status===Il){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,Qe(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Ul}if(t.status===Ul){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,Qe(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r))}t.status=Nl}if(t.status===Nl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(on(n),t.pending!==0))return t.last_flush=-1,It;Qe(t,n.adler&255),Qe(t,n.adler>>8&255),n.adler=0}if(t.status=nr,on(n),t.pending!==0)return t.last_flush=-1,It}if(n.avail_in!==0||t.lookahead!==0||e!==Pi&&t.status!==gs){let r=t.level===0?Df(t,e):t.strategy===Sa?Wx(t,e):t.strategy===Ax?Vx(t,e):_s[t.level].func(t,e);if((r===hr||r===is)&&(t.status=gs),r===jt||r===hr)return n.avail_out===0&&(t.last_flush=-1),It;if(r===ns&&(e===Mx?yx(t):e!==$u&&(Pl(t,0,0,!1),e===wx&&(Mi(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),on(n),n.avail_out===0))return t.last_flush=-1,It}return e!==mn?It:t.wrap<=0?Yu:(t.wrap===2?(Qe(t,n.adler&255),Qe(t,n.adler>>8&255),Qe(t,n.adler>>16&255),Qe(t,n.adler>>24&255),Qe(t,n.total_in&255),Qe(t,n.total_in>>8&255),Qe(t,n.total_in>>16&255),Qe(t,n.total_in>>24&255)):(ds(t,n.adler>>>16),ds(t,n.adler&65535)),on(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?It:Yu)},Zx=n=>{if(Vs(n))return zn;const e=n.state.status;return n.state=null,e===nr?ir(n,bx):It},Kx=(n,e)=>{let t=e.length;if(Vs(n))return zn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Kr||i.lookahead)return zn;if(r===1&&(n.adler=Rs(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Mi(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Jr(i);i.lookahead>=Je;){let c=i.strstart,l=i.lookahead-(Je-1);do fr(i,c),c++;while(--l);i.strstart=c,i.lookahead=Je-1,Jr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Je-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,It};var Jx=Yx,Qx=Nf,e1=Uf,t1=If,n1=$x,i1=jx,r1=Zx,s1=Kx,a1="pako deflate (from Nodeca project)",xs={deflateInit:Jx,deflateInit2:Qx,deflateReset:e1,deflateResetKeep:t1,deflateSetHeader:n1,deflate:i1,deflateEnd:r1,deflateSetDictionary:s1,deflateInfo:a1};const o1=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var l1=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)o1(t,i)&&(n[i]=t[i])}}return n},c1=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},uo={assign:l1,flattenChunks:c1};let Ff=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Ff=!1}const Cs=new Uint8Array(256);for(let n=0;n<256;n++)Cs[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Cs[254]=Cs[255]=1;var u1=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const h1=(n,e)=>{if(e<65534&&n.subarray&&Ff)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var f1=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=Cs[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return h1(s,r)},d1=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Cs[n[t]]>e?t:e},Ps={string2buf:u1,buf2string:f1,utf8border:d1};function p1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Of=p1;const kf=Object.prototype.toString,{Z_NO_FLUSH:m1,Z_SYNC_FLUSH:g1,Z_FULL_FLUSH:_1,Z_FINISH:v1,Z_OK:Xa,Z_STREAM_END:x1,Z_DEFAULT_COMPRESSION:S1,Z_DEFAULT_STRATEGY:y1,Z_DEFLATED:M1}=Gs,w1={level:S1,method:M1,chunkSize:16384,windowBits:15,memLevel:8,strategy:y1,legacyHash:!0};function Ws(n){this.options=uo.assign({},w1,n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Of,this.strm.avail_out=0;let t=xs.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy,e.legacyHash);if(t!==Xa)throw new Error(ur[t]);if(e.header&&xs.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Ps.string2buf(e.dictionary):kf.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=xs.deflateSetDictionary(this.strm,i),t!==Xa)throw new Error(ur[t]);this._dict_set=!0}}Ws.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?v1:m1,typeof n=="string"?t.input=Ps.string2buf(n):kf.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===g1||s===_1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=xs.deflate(t,s),r===x1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=xs.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Xa;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Ws.prototype.onData=function(n){this.chunks.push(n)};Ws.prototype.onEnd=function(n){n===Xa&&(this.result=uo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function ic(n,e){const t=new Ws(e);if(t.push(n,!0),t.err)throw t.msg||ur[t.err];return t.result}function b1(n,e){return e=e||{},e.raw=!0,ic(n,e)}function E1(n,e){return e=e||{},e.gzip=!0,ic(n,e)}var T1=Ws,A1=ic,R1=b1,C1=E1,P1={Deflate:T1,deflate:A1,deflateRaw:R1,gzip:C1};const ya=16209,L1=16191;var D1=function(e,t){let i,r,s,a,o,c,l,u,f,d,h,g,_,m,p,M,x,y,P,A,E,U,w,v;const D=e.state;i=e.next_in,w=e.input,r=i+(e.avail_in-5),s=e.next_out,v=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=D.dmax,l=D.wsize,u=D.whave,f=D.wnext,d=D.window,h=D.hold,g=D.bits,_=D.lencode,m=D.distcode,p=(1<<D.lenbits)-1,M=(1<<D.distbits)-1;e:do{g<15&&(h+=w[i++]<<g,g+=8,h+=w[i++]<<g,g+=8),x=_[h&p];t:for(;;){if(y=x>>>24,h>>>=y,g-=y,y=x>>>16&255,y===0)v[s++]=x&65535;else if(y&16){P=x&65535,y&=15,y&&(g<y&&(h+=w[i++]<<g,g+=8),P+=h&(1<<y)-1,h>>>=y,g-=y),g<15&&(h+=w[i++]<<g,g+=8,h+=w[i++]<<g,g+=8),x=m[h&M];n:for(;;){if(y=x>>>24,h>>>=y,g-=y,y=x>>>16&255,y&16){if(A=x&65535,y&=15,g<y&&(h+=w[i++]<<g,g+=8,g<y&&(h+=w[i++]<<g,g+=8)),A+=h&(1<<y)-1,A>c){e.msg="invalid distance too far back",D.mode=ya;break e}if(h>>>=y,g-=y,y=s-a,A>y){if(y=A-y,y>u&&D.sane){e.msg="invalid distance too far back",D.mode=ya;break e}if(E=0,U=d,f===0){if(E+=l-y,y<P){P-=y;do v[s++]=d[E++];while(--y);E=s-A,U=v}}else if(f<y){if(E+=l+f-y,y-=f,y<P){P-=y;do v[s++]=d[E++];while(--y);if(E=0,f<P){y=f,P-=y;do v[s++]=d[E++];while(--y);E=s-A,U=v}}}else if(E+=f-y,y<P){P-=y;do v[s++]=d[E++];while(--y);E=s-A,U=v}for(;P>2;)v[s++]=U[E++],v[s++]=U[E++],v[s++]=U[E++],P-=3;P&&(v[s++]=U[E++],P>1&&(v[s++]=U[E++]))}else{E=s-A;do v[s++]=v[E++],v[s++]=v[E++],v[s++]=v[E++],P-=3;while(P>2);P&&(v[s++]=v[E++],P>1&&(v[s++]=v[E++]))}}else if(y&64){e.msg="invalid distance code",D.mode=ya;break e}else{x=m[(x&65535)+(h&(1<<y)-1)];continue n}break}}else if(y&64)if(y&32){D.mode=L1;break e}else{e.msg="invalid literal/length code",D.mode=ya;break e}else{x=_[(x&65535)+(h&(1<<y)-1)];continue t}break}}while(i<r&&s<o);P=g>>3,i-=P,g-=P<<3,h&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),D.hold=h,D.bits=g};const Or=15,Zu=852,Ku=592,Ju=0,ll=1,Qu=2,I1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),U1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),N1=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),F1=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),O1=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,u=0,f=0,d=0,h=0,g=0,_=0,m=0,p=0,M=0,x,y,P,A,E,U=null,w;const v=new Uint16Array(Or+1),D=new Uint16Array(Or+1);let z=null,I,H,R;for(l=0;l<=Or;l++)v[l]=0;for(u=0;u<i;u++)v[e[t+u]]++;for(h=c,d=Or;d>=1&&v[d]===0;d--);if(h>d&&(h=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(f=1;f<d&&v[f]===0;f++);for(h<f&&(h=f),m=1,l=1;l<=Or;l++)if(m<<=1,m-=v[l],m<0)return-1;if(m>0&&(n===Ju||d!==1))return-1;for(D[1]=0,l=1;l<Or;l++)D[l+1]=D[l]+v[l];for(u=0;u<i;u++)e[t+u]!==0&&(a[D[e[t+u]]++]=u);if(n===Ju?(U=z=a,w=20):n===ll?(U=I1,z=U1,w=257):(U=N1,z=F1,w=0),M=0,u=0,l=f,E=s,g=h,_=0,P=-1,p=1<<h,A=p-1,n===ll&&p>Zu||n===Qu&&p>Ku)return 1;for(;;){I=l-_,a[u]+1<w?(H=0,R=a[u]):a[u]>=w?(H=z[a[u]-w],R=U[a[u]-w]):(H=96,R=0),x=1<<l-_,y=1<<g,f=y;do y-=x,r[E+(M>>_)+y]=I<<24|H<<16|R|0;while(y!==0);for(x=1<<l-1;M&x;)x>>=1;if(x!==0?(M&=x-1,M+=x):M=0,u++,--v[l]===0){if(l===d)break;l=e[t+a[u]]}if(l>h&&(M&A)!==P){for(_===0&&(_=h),E+=f,g=l-_,m=1<<g;g+_<d&&(m-=v[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===ll&&p>Zu||n===Qu&&p>Ku)return 1;P=M&A,r[P]=h<<24|g<<16|E-s|0}}return M!==0&&(r[E+M]=l-_<<24|64<<16|0),o.bits=h,0};var Ss=O1;const k1=0,Bf=1,zf=2,{Z_FINISH:eh,Z_BLOCK:B1,Z_TREES:Ma,Z_OK:dr,Z_STREAM_END:z1,Z_NEED_DICT:H1,Z_STREAM_ERROR:vn,Z_DATA_ERROR:Hf,Z_MEM_ERROR:Gf,Z_BUF_ERROR:G1,Z_DEFLATED:th}=Gs,ho=16180,nh=16181,ih=16182,rh=16183,sh=16184,ah=16185,oh=16186,lh=16187,ch=16188,uh=16189,qa=16190,Jn=16191,cl=16192,hh=16193,ul=16194,fh=16195,dh=16196,ph=16197,mh=16198,wa=16199,ba=16200,gh=16201,_h=16202,vh=16203,xh=16204,Sh=16205,hl=16206,yh=16207,Mh=16208,ft=16209,Vf=16210,Wf=16211,V1=852,W1=592,X1=15,q1=X1,wh=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function $1(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const gr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<ho||e.mode>Wf?1:0},Xf=n=>{if(gr(n))return vn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=ho,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(V1),e.distcode=e.distdyn=new Int32Array(W1),e.sane=1,e.back=-1,dr},qf=n=>{if(gr(n))return vn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,Xf(n)},$f=(n,e)=>{let t;if(gr(n))return vn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?vn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,qf(n))},Yf=(n,e)=>{if(!n)return vn;const t=new $1;n.state=t,t.strm=n,t.window=null,t.mode=ho;const i=$f(n,e);return i!==dr&&(n.state=null),i},Y1=n=>Yf(n,q1);let bh=!0,fl,dl;const j1=n=>{if(bh){fl=new Int32Array(512),dl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(Ss(Bf,n.lens,0,288,fl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;Ss(zf,n.lens,0,32,dl,0,n.work,{bits:5}),bh=!1}n.lencode=fl,n.lenbits=9,n.distcode=dl,n.distbits=5},jf=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.window=new Uint8Array(1<<s.wbits)),s.wsize===0&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},Z1=(n,e)=>{let t,i,r,s,a,o,c,l,u,f,d,h,g,_,m=0,p,M,x,y,P,A,E,U;const w=new Uint8Array(4);let v,D;const z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(gr(n)||!n.output||!n.input&&n.avail_in!==0)return vn;t=n.state,t.mode===Jn&&(t.mode=cl),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,f=o,d=c,U=dr;e:for(;;)switch(t.mode){case ho:if(t.wrap===0){t.mode=cl;break}for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,w[0]=l&255,w[1]=l>>>8&255,t.check=Pt(t.check,w,2,0),l=0,u=0,t.mode=nh;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=ft;break}if((l&15)!==th){n.msg="unknown compression method",t.mode=ft;break}if(l>>>=4,u-=4,E=(l&15)+8,t.wbits===0&&(t.wbits=E),E>15||E>t.wbits){n.msg="invalid window size",t.mode=ft;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?uh:Jn,l=0,u=0;break;case nh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==th){n.msg="unknown compression method",t.mode=ft;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=ft;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Pt(t.check,w,2,0)),l=0,u=0,t.mode=ih;case ih:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,w[2]=l>>>16&255,w[3]=l>>>24&255,t.check=Pt(t.check,w,4,0)),l=0,u=0,t.mode=rh;case rh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Pt(t.check,w,2,0)),l=0,u=0,t.mode=sh;case sh:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Pt(t.check,w,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=ah;case ah:if(t.flags&1024&&(h=t.length,h>o&&(h=o),h&&(t.head&&(E=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+h),E)),t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,h,s)),o-=h,s+=h,t.length-=h),t.length))break e;t.length=0,t.mode=oh;case oh:if(t.flags&2048){if(o===0)break e;h=0;do E=i[s+h++],t.head&&E&&t.length<65536&&(t.head.name+=String.fromCharCode(E));while(E&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,h,s)),o-=h,s+=h,E)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=lh;case lh:if(t.flags&4096){if(o===0)break e;h=0;do E=i[s+h++],t.head&&E&&t.length<65536&&(t.head.comment+=String.fromCharCode(E));while(E&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,h,s)),o-=h,s+=h,E)break e}else t.head&&(t.head.comment=null);t.mode=ch;case ch:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=ft;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=Jn;break;case uh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}n.adler=t.check=wh(l),l=0,u=0,t.mode=qa;case qa:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,H1;n.adler=t.check=1,t.mode=Jn;case Jn:if(e===B1||e===Ma)break e;case cl:if(t.last){l>>>=u&7,u-=u&7,t.mode=hl;break}for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=hh;break;case 1:if(j1(t),t.mode=wa,e===Ma){l>>>=2,u-=2;break e}break;case 2:t.mode=dh;break;case 3:n.msg="invalid block type",t.mode=ft}l>>>=2,u-=2;break;case hh:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=ft;break}if(t.length=l&65535,l=0,u=0,t.mode=ul,e===Ma)break e;case ul:t.mode=fh;case fh:if(h=t.length,h){if(h>o&&(h=o),h>c&&(h=c),h===0)break e;r.set(i.subarray(s,s+h),a),o-=h,s+=h,c-=h,a+=h,t.length-=h;break}t.mode=Jn;break;case dh:for(;u<14;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=ft;break}t.have=0,t.mode=ph;case ph:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.lens[z[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[z[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,v={bits:t.lenbits},U=Ss(k1,t.lens,0,19,t.lencode,0,t.work,v),t.lenbits=v.bits,U){n.msg="invalid code lengths set",t.mode=ft;break}t.have=0,t.mode=mh;case mh:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,M=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(x<16)l>>>=p,u-=p,t.lens[t.have++]=x;else{if(x===16){for(D=p+2;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=ft;break}E=t.lens[t.have-1],h=3+(l&3),l>>>=2,u-=2}else if(x===17){for(D=p+3;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,h=3+(l&7),l>>>=3,u-=3}else{for(D=p+7;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,h=11+(l&127),l>>>=7,u-=7}if(t.have+h>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=ft;break}for(;h--;)t.lens[t.have++]=E}}if(t.mode===ft)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=ft;break}if(t.lenbits=9,v={bits:t.lenbits},U=Ss(Bf,t.lens,0,t.nlen,t.lencode,0,t.work,v),t.lenbits=v.bits,U){n.msg="invalid literal/lengths set",t.mode=ft;break}if(t.distbits=6,t.distcode=t.distdyn,v={bits:t.distbits},U=Ss(zf,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,v),t.distbits=v.bits,U){n.msg="invalid distances set",t.mode=ft;break}if(t.mode=wa,e===Ma)break e;case wa:t.mode=ba;case ba:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,D1(n,d),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===Jn&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,M=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(M&&!(M&240)){for(y=p,P=M,A=x;m=t.lencode[A+((l&(1<<y+P)-1)>>y)],p=m>>>24,M=m>>>16&255,x=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,t.length=x,M===0){t.mode=Sh;break}if(M&32){t.back=-1,t.mode=Jn;break}if(M&64){n.msg="invalid literal/length code",t.mode=ft;break}t.extra=M&15,t.mode=gh;case gh:if(t.extra){for(D=t.extra;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=_h;case _h:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,M=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(!(M&240)){for(y=p,P=M,A=x;m=t.distcode[A+((l&(1<<y+P)-1)>>y)],p=m>>>24,M=m>>>16&255,x=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,M&64){n.msg="invalid distance code",t.mode=ft;break}t.offset=x,t.extra=M&15,t.mode=vh;case vh:if(t.extra){for(D=t.extra;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=ft;break}t.mode=xh;case xh:if(c===0)break e;if(h=d-c,t.offset>h){if(h=t.offset-h,h>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=ft;break}h>t.wnext?(h-=t.wnext,g=t.wsize-h):g=t.wnext-h,h>t.length&&(h=t.length),_=t.window}else _=r,g=a-t.offset,h=t.length;h>c&&(h=c),c-=h,t.length-=h;do r[a++]=_[g++];while(--h);t.length===0&&(t.mode=ba);break;case Sh:if(c===0)break e;r[a++]=t.length,c--,t.mode=ba;break;case hl:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[s++]<<u,u+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Pt(t.check,r,d,a-d):Rs(t.check,r,d,a-d)),d=c,t.wrap&4&&(t.flags?l:wh(l))!==t.check){n.msg="incorrect data check",t.mode=ft;break}l=0,u=0}t.mode=yh;case yh:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=ft;break}l=0,u=0}t.mode=Mh;case Mh:U=z1;break e;case ft:U=Hf;break e;case Vf:return Gf;case Wf:default:return vn}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<ft&&(t.mode<hl||e!==eh))&&jf(n,n.output,n.next_out,d-n.avail_out),f-=n.avail_in,d-=n.avail_out,n.total_in+=f,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Pt(t.check,r,d,n.next_out-d):Rs(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===Jn?128:0)+(t.mode===wa||t.mode===ul?256:0),(f===0&&d===0||e===eh)&&U===dr&&(U=G1),U},K1=n=>{if(gr(n))return vn;let e=n.state;return e.window&&(e.window=null),n.state=null,dr},J1=(n,e)=>{if(gr(n))return vn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,dr):vn},Q1=(n,e)=>{const t=e.length;let i,r,s;return gr(n)||(i=n.state,i.wrap!==0&&i.mode!==qa)?vn:i.mode===qa&&(r=1,r=Rs(r,e,t,0),r!==i.check)?Hf:(s=jf(n,e,t,t),s?(i.mode=Vf,Gf):(i.havedict=1,dr))};var eS=qf,tS=$f,nS=Xf,iS=Y1,rS=Yf,sS=Z1,aS=K1,oS=J1,lS=Q1,cS="pako inflate (from Nodeca project)",Un={inflateReset:eS,inflateReset2:tS,inflateResetKeep:nS,inflateInit:iS,inflateInit2:rS,inflate:sS,inflateEnd:aS,inflateGetHeader:oS,inflateSetDictionary:lS,inflateInfo:cS};function uS(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var hS=uS;const Zf=Object.prototype.toString,{Z_NO_FLUSH:fS,Z_FINISH:Eh,Z_OK:Wr,Z_STREAM_END:pl,Z_NEED_DICT:ml,Z_STREAM_ERROR:dS,Z_DATA_ERROR:Th,Z_MEM_ERROR:pS,Z_BUF_ERROR:Ah}=Gs,mS={chunkSize:1024*64,windowBits:15,to:""};function Xs(n){this.options=uo.assign({},mS,n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Of,this.strm.avail_out=0;let t=Un.inflateInit2(this.strm,e.windowBits);if(t!==Wr)throw new Error(ur[t]);if(this.header=new hS,Un.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Ps.string2buf(e.dictionary):Zf.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=Un.inflateSetDictionary(this.strm,e.dictionary),t!==Wr)))throw new Error(ur[t])}Xs.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Eh:fS,Zf.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=Un.inflate(t,a),s===ml&&r&&(s=Un.inflateSetDictionary(t,r),s===Wr?s=Un.inflate(t,a):s===Th&&(s=ml));t.avail_in>0&&s===pl&&t.state.wrap&2&&t.state.flags!==0&&t.input[t.next_in]!==0;)Un.inflateReset(t),s=Un.inflate(t,a);switch(s){case dS:case Th:case ml:case pS:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===pl||a>0))if(this.options.to==="string"){let c=Ps.utf8border(t.output,t.next_out),l=t.next_out-c,u=Ps.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out)),t.avail_out=0,t.next_out=0;if(!((s===Wr||s===Ah)&&o===0)){if(s===pl)return s=Un.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0){if(a===Eh)return s=Un.inflateEnd(this.strm),this.onEnd(s===Wr?Ah:s),this.ended=!0,!1;break}}}return!0};Xs.prototype.onData=function(n){this.chunks.push(n)};Xs.prototype.onEnd=function(n){n===Wr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=uo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function rc(n,e){const t=new Xs(e);if(t.push(n,!0),t.err)throw t.msg||ur[t.err];return t.result}function gS(n,e){return e=e||{},e.raw=!0,rc(n,e)}var _S=Xs,vS=rc,xS=gS,SS=rc,yS={Inflate:_S,inflate:vS,inflateRaw:xS,ungzip:SS};const{Deflate:MS,deflate:wS,deflateRaw:bS,gzip:ES}=P1,{Inflate:TS,inflate:AS,inflateRaw:RS,ungzip:CS}=yS;var PS=MS,LS=wS,DS=bS,IS=ES,US=TS,NS=AS,FS=RS,OS=CS,kS=Gs,gl={Deflate:PS,deflate:LS,deflateRaw:DS,gzip:IS,Inflate:US,inflate:NS,inflateRaw:FS,ungzip:OS,constants:kS},ce;(function(n){n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.ByteArray=7]="ByteArray",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.IntArray=11]="IntArray",n[n.LongArray=12]="LongArray"})(ce||(ce={}));const Ms=class Ms{static register(e,t){const i=t.create().getId();if(i!==e)throw new Error(`Registered factory ${ce[i]} does not match type ${ce[e]}`);Ms.FACTORIES.set(e,t)}isEnd(){return this.getId()===ce.End}isByte(){return this.getId()===ce.Byte}isShort(){return this.getId()===ce.Short}isInt(){return this.getId()===ce.Int}isLong(){return this.getId()===ce.Long}isFloat(){return this.getId()===ce.Float}isDouble(){return this.getId()===ce.Double}isByteArray(){return this.getId()===ce.ByteArray}isString(){return this.getId()===ce.String}isList(){return this.getId()===ce.List}isCompound(){return this.getId()===ce.Compound}isIntArray(){return this.getId()===ce.IntArray}isLongArray(){return this.getId()===ce.LongArray}isNumber(){return this.isByte()||this.isShort()||this.isInt()||this.isLong()||this.isFloat()||this.isDouble()}isArray(){return this.isByteArray()||this.isIntArray()||this.isLongArray()}isListOrArray(){return this.isList()||this.isArray()}getAsNumber(){return 0}getAsString(){return""}toJsonWithId(){return{type:this.getId(),value:this.toJson()}}static getFactory(e){const t=this.FACTORIES.get(e);if(!t)throw new Error(`Invalid tag id ${e}`);return t}static create(e){return this.getFactory(e).create()}static fromString(e){const t=typeof e=="string"?new qt(e):e;return this.getFactory(ce.Compound).fromString(t)}static fromJson(e,t=ce.Compound){return this.getFactory(t).fromJson(e)}static fromJsonWithId(e){const t=Q.readObject(e)??{},i=Q.readInt(t.type)??0;return Ms.fromJson(t.value??{},i)}static fromBytes(e,t=ce.Compound){return this.getFactory(t).fromBytes(e)}};C(Ms,"FACTORIES",new Map);let it=Ms;const ei=class ei extends it{constructor(t){super();C(this,"value");this.value=typeof t=="number"?t:t?1:0}getId(){return ce.Byte}equals(t){return t.isByte()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"b"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeByte(this.value)}static create(){return ei.ZERO}static fromJson(t){return new ei(Q.readInt(t)??0)}static fromBytes(t){const i=t.readByte();return new ei(i)}};C(ei,"ZERO",new ei(0)),C(ei,"ONE",new ei(1));let Li=ei;it.register(ce.Byte,Li);class qs extends it{constructor(t){super();C(this,"items");this.items=t}getItems(){return this.items.slice(0)}getAsTuple(t,i){return[...Array(t)].map((r,s)=>i(this.items[s]))}get(t){if(t=Math.floor(t),!(t<0||t>=this.items.length))return this.items[t]}get length(){return this.items.length}map(t){return this.items.map(t)}filter(t){return this.items.filter(t)}forEach(t){this.items.forEach(t)}set(t,i){this.items[t]=i}add(t){this.items.push(t)}insert(t,i){this.items.splice(t,0,i)}delete(t){this.items.splice(t,1)}clear(){this.items=[]}}class Di extends qs{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new Li(t):t))}getId(){return ce.ByteArray}equals(e){return e.isByteArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return ce.Byte}toString(){return"[B;"+this.items.map(t=>t.getAsNumber().toFixed()+"B").join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length),e.writeBytes(this.items.map(t=>t.getAsNumber()))}static create(){return new Di([])}static fromJson(e){const t=Q.readArray(e,i=>Q.readNumber(i)??0)??[];return new Di(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative ByteArray length ${t}`);const i=e.readBytes(t);return new Di(i)}}it.register(ce.ByteArray,Di);class sr extends it{constructor(t){super();C(this,"value");this.value=t}getId(){return ce.Float}equals(t){return t.isFloat()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toString()+"f"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeFloat(this.value)}static create(){return new sr(0)}static fromJson(t){return new sr(Q.readNumber(t)??0)}static fromBytes(t){const i=t.readFloat();return new sr(i)}}it.register(ce.Float,sr);class _n extends it{constructor(t){super();C(this,"value");this.value=t}getId(){return ce.Int}equals(t){return t.isInt()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeInt(this.value)}static create(){return new _n(0)}static fromJson(t){return new _n(Q.readInt(t)??0)}static fromBytes(t){const i=t.readInt();return new _n(i)}}it.register(ce.Int,_n);class Ii extends qs{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new _n(t):t))}getId(){return ce.IntArray}equals(e){return e.isIntArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return ce.Int}get length(){return this.items.length}toString(){return"[I;"+this.items.map(t=>t.getAsNumber().toFixed()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items)e.writeInt(t.getAsNumber())}static create(){return new Ii}static fromJson(e){const t=Q.readArray(e,i=>Q.readNumber(i)??0)??[];return new Ii(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative IntArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push(e.readInt());return new Ii(i)}}it.register(ce.IntArray,Ii);class Yt extends qs{constructor(t,i){super(t??[]);C(this,"type");this.type=this.items.length===0?ce.End:i??this.items[0].getId()}static make(t,i){return new Yt(i.map(r=>new t(r)))}getId(){return ce.List}equals(t){return t.isList()&&this.type===t.type&&this.length===t.length&&this.items.every((i,r)=>i.equals(t.items[r]))}getType(){return this.type}getNumber(t){const i=this.get(t);return i!=null&&i.isNumber()?i.getAsNumber():0}getString(t){const i=this.get(t);return i!=null&&i.isString()?i.getAsString():""}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&r.getType()===i?r:Yt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Et.create()}set(t,i){this.updateType(i),super.set(t,i)}add(t){this.updateType(t),super.add(t)}insert(t,i){this.updateType(i),super.insert(t,i)}updateType(t){if(t.getId()!==ce.End){if(this.type===ce.End)this.type=t.getId();else if(this.type!==t.getId())throw new Error(`Trying to add tag of type ${ce[t.getId()]} to list of ${ce[this.type]}`)}}clear(){super.clear(),this.type=ce.End}toString(){return"["+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(t="  ",i=0){if(this.length===0)return"[]";const r=t.repeat(i),s=t.repeat(i+1);return`[
`+this.map(a=>s+a.toPrettyString(t,i+1)).join(`,
`)+`
`+r+"]"}toSimplifiedJson(){return this.map(t=>t.toSimplifiedJson())}toJson(){return{type:this.type,items:this.items.map(t=>t.toJson())}}toBytes(t){this.items.length===0?this.type=ce.End:this.type=this.items[0].getId(),t.writeByte(this.type),t.writeInt(this.items.length);for(const i of this.items)i.toBytes(t)}static create(){return new Yt}static fromJson(t){const i=Q.readObject(t)??{},r=Q.readNumber(i.type)??ce.Compound,s=(Q.readArray(i.items)??[]).flatMap(a=>a!==void 0?[it.fromJson(a,r)]:[]);return new Yt(s,r)}static fromBytes(t){const i=t.readByte(),r=t.readInt();if(r<0)throw new Error(`Negative List length ${r}`);if(i===ce.End&&r>0)throw new Error(`Missing type on ListTag but length is ${r}`);const s=[];for(let a=0;a<r;a+=1)s.push(it.fromBytes(t,i));return new Yt(s,i)}}it.register(ce.List,Yt);const bt=class bt extends it{constructor(t){super();C(this,"value");this.value=bt.toPair(t)}static toPair(t){return Array.isArray(t)?t:bt.bigintToPair(t)}static bigintToPair(t){return bt.dataview.setBigInt64(0,t),[bt.dataview.getInt32(0),bt.dataview.getInt32(4)]}static pairToBigint(t){return bt.dataview.setInt32(0,Number(t[0])),bt.dataview.setInt32(4,Number(t[1])),bt.dataview.getBigInt64(0)}static pairToString(t){return bt.pairToBigint(t).toString()}static pairToNumber(t){return Number(bt.pairToBigint(t))}getId(){return ce.Long}equals(t){return t.isLong()&&this.value[0]===t.value[0]&&this.value[1]===t.value[1]}getAsNumber(){return bt.pairToNumber(this.value)}getAsPair(){return this.value}toBigInt(){return bt.pairToBigint(this.value)}toString(){return bt.pairToString(this.value)+"L"}toPrettyString(){return this.toString()}toSimplifiedJson(){return bt.pairToNumber(this.value)}toJson(){return this.value}toBytes(t){t.writeInt(this.value[0]),t.writeInt(this.value[1])}static create(){return new bt([0,0])}static fromJson(t){return new bt(Array.isArray(t)&&t.length===2?t.map(i=>typeof i=="number"?i:0):[0,0])}static fromBytes(t){const i=t.readInt(),r=t.readInt();return new bt([i,r])}};C(bt,"dataview",new DataView(new Uint8Array(8).buffer));let Qr=bt;it.register(ce.Long,Qr);class Ui extends qs{constructor(e){super(Array.from(e??[],t=>typeof t=="bigint"||Array.isArray(t)?new Qr(t):t))}getId(){return ce.LongArray}equals(e){return e.isLongArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return ce.Long}get length(){return this.items.length}toString(){return"[L;"+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsPair())}toJson(){return this.items.map(e=>e.getAsPair())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items){const[i,r]=t.getAsPair();e.writeInt(i),e.writeInt(r)}}static create(){return new Ui}static fromJson(e){const t=Q.readArray(e,i=>Q.readPair(i,r=>Q.readNumber(r)??0)??[0,0])??[];return new Ui(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative LongArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push([e.readInt(),e.readInt()]);return new Ui(i)}}it.register(ce.LongArray,Ui);class ar extends it{constructor(t){super();C(this,"value");this.value=t}getId(){return ce.Short}equals(t){return t.isShort()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"s"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeShort(this.value)}static create(){return new ar(0)}static fromJson(t){return new ar(typeof t=="number"?Math.floor(t):0)}static fromBytes(t){const i=t.readShort();return new ar(i)}}it.register(ce.Short,ar);const Ji=class Ji extends it{constructor(t){super();C(this,"value");this.value=t}getId(){return ce.String}equals(t){return t.isString()&&this.value===t.value}getAsString(){return this.value}toString(){return'"'+this.value.replace(/(\\|")/g,"\\$1")+'"'}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeString(this.value)}static create(){return Ji.EMPTY}static fromJson(t){return new Ji(typeof t=="string"?t:"")}static fromBytes(t){const i=t.readString();return new Ji(i)}};C(Ji,"EMPTY",new Ji(""));let Gn=Ji;it.register(ce.String,Gn);var $a;(function(n){const e=new RegExp("^[-+]?(?:[0-9]+[.]|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?$","i"),t=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?d$","i"),i=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?f$","i"),r=new RegExp("^[-+]?(?:0|[1-9][0-9]*)b$","i"),s=new RegExp("^[-+]?(?:0|[1-9][0-9]*)l$","i"),a=new RegExp("^[-+]?(?:0|[1-9][0-9]*)s$","i"),o=new RegExp("^[-+]?(?:0|[1-9][0-9]*)$","i");function c(h){if(h.skipWhitespace(),!h.canRead())throw h.createError("Expected value");const g=h.peek();if(g==="{")return l(h);if(g==="[")if(h.canRead(3)&&!qt.isQuotedStringStart(h.peek(1))&&h.peek(2)===";"){h.expect("[",!0);const _=h.cursor,m=h.read();if(h.skip(),h.skipWhitespace(),h.canRead()){if(m==="B")return f(h,Di,ce.ByteArray,ce.Byte);if(m==="L")return f(h,Ui,ce.LongArray,ce.Long);if(m==="I")return f(h,Ii,ce.IntArray,ce.Int);throw h.cursor=_,h.createError(`Invalid array type '${m}'`)}else throw h.createError("Expected value")}else return u(h);else{h.skipWhitespace();const _=h.cursor;if(qt.isQuotedStringStart(h.peek()))return new Gn(h.readQuotedString());{const m=h.readUnquotedString();if(m.length===0)throw h.cursor=_,h.createError("Expected value");try{if(i.test(m)){const p=Number(m.substring(0,m.length-1));return new sr(p)}else if(r.test(m)){const p=Number(m.substring(0,m.length-1));return new Li(Math.floor(p))}else if(s.test(m)){const p=BigInt(m.substring(0,m.length-1));return new Qr(p)}else if(a.test(m)){const p=Number(m.substring(0,m.length-1));return new ar(Math.floor(p))}else if(o.test(m)){const p=Number(m);return new _n(Math.floor(p))}else if(t.test(m)){const p=Number(m.substring(0,m.length-1));return new Ni(p)}else if(e.test(m)){const p=Number(m);return new Ni(p)}else{if(m.toLowerCase()==="true")return Li.ONE;if(m.toLowerCase()==="false")return Li.ZERO}}catch{}return m.length===0?Gn.EMPTY:new Gn(m)}}}n.readTag=c;function l(h){h.expect("{",!0);const g=new Map;for(h.skipWhitespace();h.canRead()&&h.peek()!=="}";){const _=h.cursor;if(h.skipWhitespace(),!h.canRead())throw h.createError("Expected key");const m=h.readString();if(m.length===0)throw h.cursor=_,h.createError("Expected key");h.expect(":",!0);const p=c(h);if(g.set(m,p),!d(h))break;if(!h.canRead())throw h.createError("Expected key")}return h.expect("}",!0),new Et(g)}function u(h){if(h.expect("[",!0),h.skipWhitespace(),!h.canRead())throw h.createError("Expected value");const g=[];let _=ce.End;for(;h.peek()!=="]";){const m=h.cursor,p=c(h),M=p.getId();if(_===ce.End)_=M;else if(M!==_)throw h.cursor=m,h.createError(`Can't insert ${ce[M]} into list of ${ce[_]}`);if(g.push(p),!d(h))break;if(!h.canRead())throw h.createError("Expected value")}return h.expect("]",!0),new Yt(g,_)}function f(h,g,_,m){const p=[];for(;h.peek()!=="]";){const M=c(h);if(M.getId()!==m)throw h.createError(`Can't insert ${ce[M.getId()]} into ${ce[_]}`);if(p.push(M.isLong()?M.getAsPair():M.getAsNumber()),!d(h))break;if(!h.canRead())throw h.createError("Expected value")}return h.expect("]"),new g(p)}function d(h){return h.skipWhitespace(),h.canRead()&&h.peek()===","?(h.skip(),h.skipWhitespace(),!0):!1}})($a||($a={}));class Et extends it{constructor(t){super();C(this,"properties");this.properties=t??new Map}getId(){return ce.Compound}equals(t){return t.isCompound()&&this.size===t.size&&[...this.properties.entries()].every(([i,r])=>{const s=t.properties.get(i);return s!==void 0&&r.equals(s)})}has(t){return this.properties.has(t)}hasNumber(t){var i;return((i=this.get(t))==null?void 0:i.isNumber())??!1}hasString(t){var i;return((i=this.get(t))==null?void 0:i.isString())??!1}hasList(t,i,r){const s=this.get(t);return((s==null?void 0:s.isList())&&(i===void 0||s.getType()===i)&&(r===void 0||s.length===r))??!1}hasCompound(t){var i;return((i=this.get(t))==null?void 0:i.isCompound())??!1}get(t){return this.properties.get(t)}getString(t){var i;return((i=this.get(t))==null?void 0:i.getAsString())??""}getNumber(t){var i;return((i=this.get(t))==null?void 0:i.getAsNumber())??0}getBoolean(t){return this.getNumber(t)!==0}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&(i===void 0||r.getType()===i)?r:Yt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Et.create()}getByteArray(t){const i=this.get(t);return i!=null&&i.isByteArray()?i:Di.create()}getIntArray(t){const i=this.get(t);return i!=null&&i.isIntArray()?i:Ii.create()}getLongArray(t){const i=this.get(t);return i!=null&&i.isLongArray()?i:Ui.create()}keys(){return this.properties.keys()}get size(){return this.properties.size}map(t){return Object.fromEntries([...this.properties.entries()].map(([i,r])=>t(i,r,this)))}forEach(t){[...this.properties.entries()].forEach(([i,r])=>t(i,r,this))}set(t,i){return this.properties.set(t,i),this}delete(t){return this.properties.delete(t)}clear(){return this.properties.clear(),this}toString(){const t=[];for(const[i,r]of this.properties.entries()){const s=i.split("").some(a=>!qt.isAllowedInUnquotedString(a));t.push((s?JSON.stringify(i):i)+":"+r.toString())}return"{"+t.join(",")+"}"}toPrettyString(t="  ",i=0){if(this.size===0)return"{}";const r=t.repeat(i),s=t.repeat(i+1),a=[];for(const[o,c]of this.properties.entries()){const l=o.split("").some(u=>!qt.isAllowedInUnquotedString(u));a.push((l?JSON.stringify(o):o)+": "+c.toPrettyString(t,i+1))}return`{
`+a.map(o=>s+o).join(`,
`)+`
`+r+"}"}toSimplifiedJson(){return this.map((t,i)=>[t,i.toSimplifiedJson()])}toJson(){return this.map((t,i)=>[t,{type:i.getId(),value:i.toJson()}])}toBytes(t){for(const[i,r]of this.properties.entries()){const s=r.getId();t.writeByte(s),t.writeString(i),r.toBytes(t)}t.writeByte(ce.End)}static create(){return new Et}static fromString(t){return $a.readTag(t)}static fromJson(t){const i=Q.readMap(t,r=>{const{type:s,value:a}=Q.readObject(r)??{},o=Q.readNumber(s);return it.fromJson(a??{},o)});return new Et(new Map(Object.entries(i)))}static fromBytes(t){const i=new Map;for(;;){const r=t.readByte();if(r===ce.End)break;const s=t.readString(),a=it.fromBytes(t,r);i.set(s,a)}return new Et(i)}}it.register(ce.Compound,Et);const Dn=class Dn{constructor(e,t,i,r,s){C(this,"name");C(this,"root");C(this,"compression");C(this,"littleEndian");C(this,"bedrockHeader");this.name=e,this.root=t,this.compression=i,this.littleEndian=r,this.bedrockHeader=s}writeNamedTag(e){e.writeByte(ce.Compound),e.writeString(this.name),this.root.toBytes(e)}write(){const e=this.littleEndian===!0||this.bedrockHeader!==void 0,t=new mf({littleEndian:e,offset:this.bedrockHeader!==void 0?8:0});if(this.writeNamedTag(t),this.bedrockHeader!==void 0){const r=t.offset;t.offset=0,t.writeInt(this.bedrockHeader),t.writeInt(r-8),t.offset=r}const i=t.getData();return this.compression==="gzip"?gl.gzip(i):this.compression==="zlib"?gl.deflate(i):i}static readNamedTag(e){if(e.readByte()!==ce.Compound)throw new Error("Top tag should be a compound");return{name:e.readString(),root:Et.fromBytes(e)}}static create(e={}){const t=e.name??Dn.DEFAULT_NAME,i=Et.create(),r=e.compression??"none",s=e.bedrockHeader===!0?Dn.DEFAULT_BEDROCK_HEADER:typeof e.bedrockHeader=="number"?e.bedrockHeader:void 0,a=e.littleEndian??s!==void 0;return new Dn(t,i,r,a,s)}static read(e,t={}){const i=typeof t.bedrockHeader=="number"?t.bedrockHeader:t.bedrockHeader?Bv(e):void 0,r=t.compression==="gzip"||!i&&t.compression===void 0&&Ov(e),s=t.compression==="zlib"||!i&&t.compression===void 0&&kv(e),a=s||r?gl.inflate(e):e,o=t.littleEndian||i!==void 0,c=r?"gzip":s?"zlib":"none",l=new pf(a,{littleEndian:o,offset:i!==void 0?8:0}),{name:u,root:f}=Dn.readNamedTag(l);return new Dn(t.name??u,f,c,o,i)}toJson(){return{name:this.name,root:this.root.toJson(),compression:this.compression,littleEndian:this.littleEndian,bedrockHeader:this.bedrockHeader??null}}static fromJson(e){const t=Q.readObject(e)??{},i=Q.readString(t.name)??"",r=Et.fromJson(t.root??{}),s=Q.readString(t.compression)??"none",a=Q.readBoolean(t.littleEndian)??!1,o=Q.readNumber(t.bedrockHeader);return new Dn(i,r,s,a,o)}};C(Dn,"DEFAULT_NAME",""),C(Dn,"DEFAULT_BEDROCK_HEADER",4);let Vn=Dn;class ri{constructor(e,t,i,r,s){C(this,"x");C(this,"z");C(this,"compression");C(this,"timestamp");C(this,"raw");C(this,"file");C(this,"dirty");this.x=e,this.z=t,this.compression=i,this.timestamp=r,this.raw=s,this.dirty=!1}getCompression(){switch(this.compression){case 1:return"gzip";case 2:return"zlib";case 3:return"none";default:throw new Error(`Invalid compression mode ${this.compression}`)}}setCompression(e){switch(e){case"gzip":this.compression=1;break;case"zlib":this.compression=2;break;case"none":this.compression=3;break;default:throw new Error(`Invalid compression mode ${e}`)}}getFile(){return this.file===void 0&&(this.file=Vn.read(this.raw,{compression:this.getCompression()})),this.file}getRoot(){return this.getFile().root}setRoot(e){this.file===void 0&&(this.file=Vn.create({compression:this.getCompression()})),this.file.root=e,this.markDirty()}markDirty(){this.dirty=!0}getRaw(){if(this.file===void 0||this.dirty===!1)return this.raw;this.file.compression=this.getCompression();const e=this.file.write();return this.raw=e,this.dirty=!1,e}toJson(){return{x:this.x,z:this.z,compression:this.compression,timestamp:this.timestamp,size:this.raw.byteLength}}toRef(e){return new ri.Ref(this.x,this.z,this.compression,this.timestamp,this.raw.byteLength,e)}static create(e,t,i,r){const s=new ri(e,t,0,r??0,i.write());return s.setCompression(i.compression),s}static fromJson(e,t){const i=Q.readObject(e)??{},r=Q.readInt(i.x)??0,s=Q.readInt(i.z)??0,a=Q.readNumber(i.compression)??2,o=Q.readInt(i.timestamp)??0,c=Q.readInt(i.size)??0;return new ri.Ref(r,s,a,o,c,t)}}(function(n){class e{constructor(i,r,s,a,o,c){C(this,"x");C(this,"z");C(this,"compression");C(this,"timestamp");C(this,"size");C(this,"resolver");C(this,"file");this.x=i,this.z=r,this.compression=s,this.timestamp=a,this.size=o,this.resolver=c}getFile(){if(this.file instanceof Vn)return this.file}getRoot(){if(this.file instanceof Vn)return this.file.root}async getFileAsync(){return this.file?this.file:(this.file=(async()=>{const i=await this.resolver(this.x,this.z);return this.file=i,i})(),this.file)}async getRootAsync(){return(await this.getFileAsync()).root}isResolved(){return this.file instanceof Vn}}n.Ref=e})(ri||(ri={}));class Kf{constructor(e){C(this,"chunks");this.chunks=Array(32*32).fill(void 0);for(const t of e){const i=Bi.getIndex(t.x,t.z);this.chunks[i]=t}}getChunkPositions(){return this.chunks.flatMap(e=>e?[[e.x,e.z]]:[])}getChunk(e){if(!(e<0||e>=32*32))return this.chunks[e]}findChunk(e,t){return this.getChunk(Bi.getIndex(e,t))}getFirstChunk(){return this.chunks.filter(e=>e!==void 0)[0]}filter(e){return this.chunks.filter(t=>t!==void 0&&e(t))}map(e){return this.chunks.flatMap(t=>t!==void 0?[e(t)]:[])}}class Bi extends Kf{constructor(e){super(e)}write(){let e=0;for(const s of this.chunks)s!==void 0&&(e+=Math.ceil(s.getRaw().length/4096));const t=new Uint8Array(8192+e*4096),i=new DataView(t.buffer);let r=2;for(const s of this.chunks){if(s===void 0)continue;const a=s.getRaw(),o=4*((s.x&31)+(s.z&31)*32),c=Math.ceil(a.length/4096);i.setInt8(o,r>>16),i.setInt16(o+1,r&65535),i.setInt8(o+3,c),i.setInt32(o+4096,s.timestamp);const l=r*4096;i.setInt32(l,a.length+1),i.setInt8(l+4,s.compression),t.set(a,l+5),r+=c}return t}static read(e){const t=[];for(let i=0;i<32;i+=1)for(let r=0;r<32;r+=1){const s=4*((i&31)+(r&31)*32);if(e[s+3]===0)continue;const o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],c=(e[s+4096]<<24)+(e[s+4097]<<16)+(e[s+4098]<<8)+e[s+4099],l=o*4096,u=(e[l]<<24)+(e[l+1]<<16)+(e[l+2]<<8)+e[l+3],f=e[l+4],d=e.slice(l+5,l+4+u);t.push(new ri(i,r,f,c,d))}return new Bi(t)}static getIndex(e,t){return(e&31)+(t&31)*32}toJson(){return{chunks:this.map(e=>e.toJson())}}static fromJson(e,t){const i=Q.readObject(e)??{},s=(Q.readArray(i.chunks)??[]).flatMap(a=>a!==void 0?[ri.fromJson(a,t)]:[]);return new Bi.Ref(s)}}(function(n){class e extends Kf{}n.Ref=e})(Bi||(Bi={}));class Ni extends it{constructor(t){super();C(this,"value");this.value=t}getId(){return ce.Double}equals(t){return t.isDouble()&&this.value===t.value}getAsNumber(){return this.value}toString(){return Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeDouble(this.value)}static create(){return new Ni(0)}static fromJson(t){return new Ni(Q.readNumber(t)??0)}static fromBytes(t){const i=t.readDouble();return new Ni(i)}}it.register(ce.Double,Ni);const Qi=class Qi extends it{constructor(){super()}getId(){return ce.End}equals(e){return e.isEnd()}toString(){return"END"}toPrettyString(){return this.toString()}toSimplifiedJson(){return null}toJson(){return null}toBytes(){}static create(){return Qi.INSTANCE}static fromJson(){return Qi.INSTANCE}static fromBytes(){return Qi.INSTANCE}};C(Qi,"INSTANCE",new Qi);let Ya=Qi;it.register(ce.End,Ya);var et;(function(n){n.UP="up",n.DOWN="down",n.NORTH="north",n.EAST="east",n.SOUTH="south",n.WEST="west"})(et||(et={}));const BS={[et.UP]:[0,1,0],[et.DOWN]:[0,-1,0],[et.NORTH]:[0,0,-1],[et.EAST]:[1,0,0],[et.SOUTH]:[0,0,1],[et.WEST]:[-1,0,0]};(function(n){n.ALL=[n.UP,n.DOWN,n.NORTH,n.EAST,n.SOUTH,n.WEST];function e(t){return BS[t]}n.normal=e})(et||(et={}));var Ut;(function(n){function e(f,d,h){return[f,d,h]}n.create=e,n.ZERO=n.create(0,0,0);function t(f,d,h,g){return[f[0]+d,f[1]+h,f[2]+g]}n.offset=t;function i(f,d){return[f[0]-d[0],f[1]-d[1],f[2]-d[2]]}n.subtract=i;function r(f,d){return[f[0]+d[0],f[1]+d[1],f[2]+d[2]]}n.add=r;function s(f,d){return n.offset(f,...et.normal(d))}n.towards=s;function a(f,d){return f===d?!0:f[0]===d[0]&&f[1]===d[1]&&f[2]===d[2]}n.equals=a;function o(f){return f[0]*f[0]+f[1]*f[1]+f[2]*f[2]}n.magnitude=o;function c(f){return new Yt(f.map(d=>new _n(d)))}n.toNbt=c;function l(f){return f.getAsTuple(3,d=>d!=null&&d.isInt()?d.getAsNumber():0)}n.fromNbt=l;function u(f){const d=Q.readArray(f,h=>Q.readInt(h)??0)??[0,0,0];return e(d[0],d[1],d[2])}n.fromJson=u})(Ut||(Ut={}));const bn=class bn{constructor(e,t){C(this,"namespace");C(this,"path");this.namespace=e,this.path=t}is(e){return this.equals(bn.parse(e))}equals(e){return this===e?!0:e instanceof bn?this.namespace===e.namespace&&this.path===e.path:!1}toString(){return this.namespace+bn.SEPARATOR+this.path}withPrefix(e){return new bn(this.namespace,e+this.path)}static create(e){return new bn(this.DEFAULT_NAMESPACE,e)}static parse(e){const t=e.indexOf(this.SEPARATOR);if(t>=0){const i=t>=1?e.substring(0,t):this.DEFAULT_NAMESPACE,r=e.substring(t+1);return new bn(i,r)}return new bn(this.DEFAULT_NAMESPACE,e)}};C(bn,"DEFAULT_NAMESPACE","minecraft"),C(bn,"SEPARATOR",":");let K=bn;var xt;let Ei=(xt=class{constructor(e,t={}){C(this,"properties");C(this,"name");this.properties=t,this.name=typeof e=="string"?K.parse(e):e}getName(){return this.name}getProperties(){return this.properties}getProperty(e){return this.properties[e]}isFluid(){return this.is(xt.WATER)||this.is(xt.LAVA)}isWaterlogged(){return this.is(xt.WATER)||this.is(xt.LAVA)||this.is("bubble_column")||this.is("kelp")||this.is("kelp_plant")||this.is("seagrass")||this.is("tall_seagrass")||this.properties.waterlogged==="true"}equals(e){if(!this.name.equals(e.name))return!1;const t=Object.keys(this.properties);return t.length!==Object.keys(e.properties).length?!1:t.every(i=>e.properties[i]===this.properties[i])}is(e){return typeof e=="string"?this.name.equals(K.parse(e)):e instanceof K?this.name.equals(e):this.name.equals(e.name)}toString(){return Object.keys(this.properties).length===0?this.name.toString():`${this.name.toString()}[${Object.entries(this.properties).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>e+"="+t).join(",")}]`}toNbt(){const e=new Et().set("Name",new Gn(this.name.toString())),t=Object.entries(this.properties).sort(([i],[r])=>i.localeCompare(r));return t.length>0&&e.set("Properties",new Et(new Map(t.map(([i,r])=>[i,new Gn(r)])))),e}static parse(e){const t=e.indexOf("[");if(t===-1)return new xt(e);{const i=e.substring(0,t),r=e.substring(t+1,e.length-1).split(","),s=Object.fromEntries(r.map(a=>a.split("=")));return new xt(i,s)}}static fromNbt(e){const t=K.parse(e.getString("Name")),i=e.getCompound("Properties").map((r,s)=>[r,s.getAsString()]);return new xt(t,i)}static fromJson(e){const t=Q.readObject(e)??{},i=K.parse(Q.readString(t.Name)??xt.STONE.name.toString()),r=Q.readMap(t.Properties,s=>Q.readString(s)??"");return new xt(i,r)}},C(xt,"AIR",new xt(K.create("air"))),C(xt,"STONE",new xt(K.create("stone"))),C(xt,"WATER",new xt(K.create("water"),{level:"0"})),C(xt,"LAVA",new xt(K.create("lava"),{level:"0"})),xt);const ro=class ro{constructor(e,t){C(this,"size");C(this,"defaultValue");C(this,"storage");C(this,"palette");this.size=e,this.defaultValue=t,this.storage=Array(e).fill(0),this.palette=[t]}index(e,t,i){if(!this.isLocalCoordinate(e)||!this.isLocalCoordinate(t)||!this.isLocalCoordinate(i))throw new Error(`Coordinates ${e},${t},${i} are outside paletted container bounds 0..15`);return(e<<8)+(t<<4)+i}isLocalCoordinate(e){return Number.isInteger(e)&&e>=0&&e<ro.WIDTH}get(e,t,i){const r=this.storage[this.index(e,t,i)];return this.palette[r]}set(e,t,i,r){let s=this.palette.findIndex(a=>a.equals(r));s===-1&&(s=this.palette.length,this.palette.push(r)),this.storage[this.index(e,t,i)]=s}};C(ro,"WIDTH",16);let ja=ro;const vi=class vi{constructor(e){C(this,"minY");C(this,"states");this.minY=e,this.states=new ja(vi.SIZE,Ei.AIR)}get minBlockY(){return this.minY<<4}getBlockState(e,t,i){return this.states.get(e,t,i)}setBlockState(e,t,i,r){this.states.set(e,t,i,r)}};C(vi,"WIDTH",16),C(vi,"SIZE",vi.WIDTH*vi.WIDTH*vi.WIDTH);let Ol=vi;var kl;(function(n){function e(u,f){return[u,f]}n.create=e;function t(u){return[u[0]>>4,u[2]>>4]}n.fromBlockPos=t;function i(u){return[Number(u)&4294967295,Number(u>>BigInt(32))]}n.fromLong=i;function r(u){return s(u[0],u[1])}n.toLong=r;function s(u,f){return BigInt(u&4294967295)|BigInt(f&4294967295)<<BigInt(32)}n.asLong=s;function a(u){return u[0]<<4}n.minBlockX=a;function o(u){return u[1]<<4}n.minBlockZ=o;function c(u){return(u[0]<<4)+15}n.maxBlockX=c;function l(u){return(u[1]<<4)+15}n.maxBlockZ=l})(kl||(kl={}));const Jf=new Map([["minecraft:speed",3402751],["minecraft:slowness",9154528],["minecraft:haste",14270531],["minecraft:mining_fatigue",4866583],["minecraft:strength",16762624],["minecraft:instant_health",16262179],["minecraft:instant_damage",11101546],["minecraft:jump_boost",16646020],["minecraft:nausea",5578058],["minecraft:regeneration",13458603],["minecraft:resistance",9520880],["minecraft:fire_resistance",16750848],["minecraft:water_breathing",10017472],["minecraft:invisibility",16185078],["minecraft:blindness",2039587],["minecraft:night_vision",12779366],["minecraft:hunger",5797459],["minecraft:weakness",4738376],["minecraft:poison",8889187],["minecraft:wither",7561558],["minecraft:health_boost",16284963],["minecraft:absorption",2445989],["minecraft:saturation",16262179],["minecraft:glowing",9740385],["minecraft:levitation",13565951],["minecraft:luck",5882118],["minecraft:unluck",12624973],["minecraft:slow_falling",15978425],["minecraft:conduit_power",1950417],["minecraft:dolphins_grace",8954814],["minecraft:bad_omen",745784],["minecraft:hero_of_the_village",4521796],["minecraft:darkness",2696993],["minecraft:trial_omen",1484454],["minecraft:raid_omen",14565464],["minecraft:wind_charged",12438015],["minecraft:weaving",7891290],["minecraft:oozing",10092451],["minecraft:infested",9214860]]);var Za;(function(n){function e(t){return{effect:K.parse(t.getString("id")),duration:t.getNumber("duration"),amplifier:t.getNumber("amplifier")}}n.fromNbt=e})(Za||(Za={}));const Qf=new Map([["minecraft:empty",[]],["minecraft:water",[]],["minecraft:mundane",[]],["minecraft:thick",[]],["minecraft:awkward",[]],["minecraft:night_vision",[{effect:K.create("night_vision"),duration:3600,amplifier:0}]],["minecraft:long_night_vision",[{effect:K.create("night_vision"),duration:9600,amplifier:0}]],["minecraft:invisibility",[{effect:K.create("invisibility"),duration:3600,amplifier:0}]],["minecraft:long_invisibility",[{effect:K.create("invisibility"),duration:9600,amplifier:0}]],["minecraft:leaping",[{effect:K.create("jump_boost"),duration:3600,amplifier:0}]],["minecraft:long_leaping",[{effect:K.create("jump_boost"),duration:9600,amplifier:0}]],["minecraft:strong_leaping",[{effect:K.create("jump_boost"),duration:1800,amplifier:1}]],["minecraft:fire_resistance",[{effect:K.create("fire_resistance"),duration:3600,amplifier:0}]],["minecraft:long_fire_resistance",[{effect:K.create("fire_resistance"),duration:9600,amplifier:0}]],["minecraft:swiftness",[{effect:K.create("speed"),duration:3600,amplifier:0}]],["minecraft:long_swiftness",[{effect:K.create("speed"),duration:9600,amplifier:0}]],["minecraft:strong_swiftness",[{effect:K.create("speed"),duration:1800,amplifier:1}]],["minecraft:slowness",[{effect:K.create("slowness"),duration:1800,amplifier:0}]],["minecraft:long_slowness",[{effect:K.create("slowness"),duration:4800,amplifier:0}]],["minecraft:strong_slowness",[{effect:K.create("slowness"),duration:400,amplifier:3}]],["minecraft:turtle_master",[{effect:K.create("slowness"),duration:400,amplifier:3},{effect:K.create("resistance"),duration:400,amplifier:2}]],["minecraft:long_turtle_master",[{effect:K.create("slowness"),duration:800,amplifier:3},{effect:K.create("resistance"),duration:800,amplifier:2}]],["minecraft:strong_turtle_master",[{effect:K.create("slowness"),duration:400,amplifier:5},{effect:K.create("resistance"),duration:400,amplifier:3}]],["minecraft:water_breathing",[{effect:K.create("water_breathing"),duration:3600,amplifier:0}]],["minecraft:long_water_breathing",[{effect:K.create("water_breathing"),duration:9600,amplifier:0}]],["minecraft:healing",[{effect:K.create("instant_health"),duration:1,amplifier:0}]],["minecraft:strong_healing",[{effect:K.create("instant_health"),duration:1,amplifier:1}]],["minecraft:harming",[{effect:K.create("instant_damage"),duration:1,amplifier:0}]],["minecraft:strong_harming",[{effect:K.create("instant_damage"),duration:1,amplifier:1}]],["minecraft:poison",[{effect:K.create("poison"),duration:900,amplifier:0}]],["minecraft:long_poison",[{effect:K.create("poison"),duration:1800,amplifier:0}]],["minecraft:strong_poison",[{effect:K.create("poison"),duration:432,amplifier:1}]],["minecraft:regeneration",[{effect:K.create("regeneration"),duration:900,amplifier:0}]],["minecraft:long_regeneration",[{effect:K.create("regeneration"),duration:1800,amplifier:0}]],["minecraft:strong_regeneration",[{effect:K.create("regeneration"),duration:450,amplifier:1}]],["minecraft:strength",[{effect:K.create("strength"),duration:3600,amplifier:0}]],["minecraft:long_strength",[{effect:K.create("strength"),duration:9600,amplifier:0}]],["minecraft:strong_strength",[{effect:K.create("strength"),duration:1800,amplifier:1}]],["minecraft:weakness",[{effect:K.create("weakness"),duration:1800,amplifier:0}]],["minecraft:long_weakness",[{effect:K.create("weakness"),duration:4800,amplifier:0}]],["minecraft:luck",[{effect:K.create("luck"),duration:6e3,amplifier:0}]],["minecraft:slow_falling",[{effect:K.create("slow_falling"),duration:1800,amplifier:0}]],["minecraft:long_slow_falling",[{effect:K.create("slow_falling"),duration:4800,amplifier:0}]],["minecraft:wind_charged",[{effect:K.create("wind_charged"),duration:3600,amplifier:0}]],["minecraft:weaving",[{effect:K.create("weaving"),duration:3600,amplifier:0}]],["minecraft:oozing",[{effect:K.create("oozing"),duration:3600,amplifier:0}]],["minecraft:infested",[{effect:K.create("infested"),duration:3600,amplifier:0}]]]);var Ls;(function(n){function e(s){const a={};return s.isString()?a.potion=K.parse(s.getAsString()):s.isCompound()&&(s.hasString("potion")&&(a.potion=K.parse(s.getString("potion"))),s.hasNumber("custom_color")&&(a.customColor=s.getNumber("custom_color")),s.hasList("custom_effects")&&(a.customEffects=s.getList("custom_effects",ce.Compound).map(Za.fromNbt))),a}n.fromNbt=e;function t(s){if(s.customColor)return Xe.intToRgb(s.customColor);const a=i(s);return r(a)}n.getColor=t;function i(s){const a=[];return s.potion&&a.push(...Qf.get(s.potion.toString())??[]),s.customEffects&&a.push(...s.customEffects),a}n.getAllEffects=i;function r(s){let[a,o,c]=[0,0,0],l=0;for(const u of s){const f=Jf.get(u.effect.toString());if(f===void 0)continue;const d=Xe.intToRgb(f),h=u.amplifier+1;a+=h*d[0],o+=h*d[1],c+=h*d[2],l+=h}return l===0?Xe.intToRgb(-13083194):(a=a/l,o=o/l,c=c/l,[a,o,c])}})(Ls||(Ls={}));var Ka;(function(n){function e(r,s){return a=>typeof a=="string"?i(r,K.parse(a)):t(s(a))}n.parser=e;function t(r,s){return{value:()=>r,key:()=>s}}n.direct=t;function i(r,s,a=!0){return a?{value:()=>r.getOrThrow(s),key:()=>s}:{value:()=>r.get(s),key:()=>s}}n.reference=i})(Ka||(Ka={}));class ni{constructor(e,t,i=new Map){C(this,"id");C(this,"count");C(this,"components");this.id=e,this.count=t,this.components=i}getComponent(e,t){var r;if(typeof e=="string"&&(e=K.parse(e)),this.components.has("!"+e.toString()))return;const i=this.components.get(e.toString());if(i)return i;if(t)return(r=t.getItemComponents(this.id))==null?void 0:r.get(e.toString())}hasComponent(e,t){var i;return typeof e=="string"&&(e=K.parse(e)),this.components.has("!"+e.toString())?!1:this.components.has(e.toString())?!0:t?(i=t.getItemComponents(this.id))==null?void 0:i.has(e.toString()):!1}clone(){const e=new Map(this.components);return new ni(this.id,this.count,e)}is(e){return typeof e=="string"?this.id.equals(K.parse(e)):e instanceof K?this.id.equals(e):this.id.equals(e.id)}equals(e){return this===e?!0:e instanceof ni?this.count===e.count&&this.isSameItemSameComponents(e):!1}isSameItemSameComponents(e){if(!this.id.equals(e.id)||this.components.size!==e.components.size)return!1;for(const[t,i]of this.components){const r=e.components.get(t);if(i.toString()!==(r==null?void 0:r.toString()))return!1}return!0}toString(){let e=this.id.toString();return this.components.size>0&&(e+=`[${[...this.components.entries()].map(([t,i])=>t.startsWith("!")?t:`${t}=${i.toString()}`).join(",")}]`),this.count>1&&(e+=` ${this.count}`),e}static fromString(e){const t=new qt(e);t.skipWhitespace();const i=t.cursor;for(;t.canRead()&&t.peek()!=="["&&!qt.isWhitespace(t.peek());)t.skip();const r=K.parse(t.getRead(i)),s=new Map;t.skipWhitespace(),t.canRead()&&t.peek()==="["&&ni.readComponents(t,s),t.skipWhitespace();const a=t.canRead()?t.readInt():1;if(t.skipWhitespace(),t.canRead())throw t.createError("Unexpected trailing data");return new ni(r,a,s)}static readComponents(e,t){if(e.expect("["),e.skipWhitespace(),e.canRead()&&e.peek()==="]"){e.skip();return}do{if(e.peek()==="!"){e.skip(),e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="]"&&e.peek()!==",";)e.skip();t.set("!"+K.parse(e.getRead(i).trim()).toString(),new Et)}else{e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="=";)e.skip();const r=K.parse(e.getRead(i).trim()).toString();if(!e.canRead())break;e.skip(),e.skipWhitespace();const s=$a.readTag(e);t.set(r,s)}if(e.skipWhitespace(),!e.canRead())break;if(e.peek()==="]"){e.skip();return}if(e.peek()!==",")throw new Error("Expected , or ]");e.skip()}while(e.canRead());throw new Error("Missing closing ]")}toNbt(){const e=new Et().set("id",new Gn(this.id.toString()));return this.count>1&&e.set("count",new _n(this.count)),this.components.size>0&&e.set("components",new Et(this.components)),e}static fromNbt(e){const t=K.parse(e.getString("id")),i=e.hasNumber("count")?e.getNumber("count"):1,r=new Map(Object.entries(e.getCompound("components").map((s,a)=>s.startsWith("!")?["!"+K.parse(s).toString(),new Et]:[K.parse(s).toString(),a])));return new ni(t,i,r)}}const xi=class xi{constructor(e,t){C(this,"key");C(this,"parser");C(this,"storage",new Map);C(this,"builtin",new Map);C(this,"tags");this.key=e,this.parser=t}static createAndRegister(e,t){const i=new xi(K.create(e),t);return xi.REGISTRY.register(i.key,i),i}register(e,t,i){return this.storage.set(e.toString(),t),i&&this.builtin.set(e.toString(),t),Ka.reference(this,e)}delete(e){const t=this.storage.delete(e.toString());return this.builtin.delete(e.toString()),t}keys(){return[...this.storage.keys()].map(e=>K.parse(e))}has(e){return this.storage.has(e.toString())}get(e){var t=this.storage.get(e.toString());return t instanceof Function&&(t=t(),this.storage.set(e.toString(),t)),t}getOrThrow(e){const t=this.get(e);if(t===void 0)throw new Error(`Missing key in ${this.key.toString()}: ${e.toString()}`);return t}parse(e){if(!this.parser)throw new Error(`No parser exists for ${this.key.toString()}`);return this.parser(e)}clear(){this.storage.clear();for(const[e,t]of this.builtin.entries())this.storage.set(e,t);return this.tags&&this.tags.clear(),this}assign(e){if(!this.key.equals(e.key))throw new Error(`Cannot assign registry of type ${e.key.toString()} to registry of type ${this.key.toString()}`);for(const t of e.keys())this.storage.set(t.toString(),e.getOrThrow(t));return this}cloneEmpty(){return new xi(this.key,this.parser)}forEach(e){for(const[t,i]of this.storage.entries())e(K.parse(t),i instanceof Function?i():i,this)}map(e){return[...this.storage.entries()].map(([t,i])=>e(K.parse(t),i instanceof Function?i():i,this))}getTagRegistry(){return this.tags===void 0&&(this.tags=new xi(new K(this.key.namespace,`tags/${this.key.path}`))),this.tags}};C(xi,"REGISTRY",new xi(K.create("root")));let Ja=xi;var Xr;(function(n){n.NONE="none",n.CLOCKWISE_90="clockwise_90",n.CLOCKWISE_180="180",n.COUNTERCLOCKWISE_90="counterclockwise_90"})(Xr||(Xr={}));const zS=[{key:"north",offset:[0,0,-1]},{key:"east",offset:[1,0,0]},{key:"south",offset:[0,0,1]},{key:"west",offset:[-1,0,0]}],ed=new Set(["minecraft:air","minecraft:cave_air","minecraft:void_air","minecraft:water","minecraft:lava"]),HS=[/_banner$/,/_button$/,/_carpet$/,/_coral$/,/_coral_fan$/,/_door$/,/_fence$/,/_fence_gate$/,/_flower$/,/_glass_pane$/,/_hanging_sign$/,/_leaves$/,/_pressure_plate$/,/_rail$/,/_sapling$/,/_sign$/,/_slab$/,/_stairs$/,/_torch$/,/_trapdoor$/,/_wall$/,/_wall_banner$/,/_wall_hanging_sign$/,/_wall_sign$/,/_wall_torch$/,/_wool_carpet$/,/^attached_/,/^potted_/,/amethyst_cluster$/,/azalea$/,/bamboo$/,/bell$/,/big_dripleaf$/,/brewing_stand$/,/cake$/,/chain$/,/chest$/,/cocoa$/,/comparator$/,/conduit$/,/dead_bush$/,/decorated_pot$/,/end_rod$/,/fern$/,/grass$/,/grindstone$/,/kelp$/,/ladder$/,/lantern$/,/lever$/,/lightning_rod$/,/mangrove_roots$/,/mushroom$/,/pane$/,/repeater$/,/scaffolding$/,/seagrass$/,/skull$/,/soul_lantern$/,/sugar_cane$/,/turtle_egg$/,/twisting_vines$/,/vine$/,/weeping_vines$/];function sc(n){return n.includes(":")?n.split(":")[1]:n}function Bl(n){const e=sc(n);return e==="iron_bars"||e.endsWith("glass_pane")}function zl(n){const e=sc(n);return e==="nether_brick_fence"||e.endsWith("_fence")&&!e.endsWith("_fence_gate")}function GS(n){return Bl(n)||zl(n)}function Rh(n){if(!n||ed.has(n))return!1;const e=sc(n);return!HS.some(t=>t.test(e))}function VS(n,e){return!e||ed.has(e)?!1:Bl(n)?Bl(e)||Rh(e):zl(n)?zl(e)||Rh(e):!1}var Bn;let WS=(Bn=class{constructor(e,t=[],i=[]){C(this,"size");C(this,"palette");C(this,"blocks");C(this,"blocksMap",[]);C(this,"xStride");C(this,"yStride");C(this,"placedBlocksCache",null);C(this,"placedBlocksMapCache",null);C(this,"paletteIndex",new Map);this.size=e,this.palette=t,this.blocks=i,this.xStride=e[1]*e[2],this.yStride=e[2],this.palette.forEach((r,s)=>{this.paletteIndex.set(r.toString(),s)}),i.forEach(r=>{if(!this.isInside(r.pos))throw new Error(`Found block at ${r.pos} which is outside the structure bounds ${this.size}`);this.blocksMap[this.getIndex(r.pos)]=r})}getSize(){return this.size}addBlock(e,t,i,r){if(!this.isInside(e))throw new Error(`Cannot add block at ${e} outside the structure bounds ${this.size}`);const s=new Ei(t,i),a=s.toString();let o=this.paletteIndex.get(a);o===void 0&&(o=this.palette.length,this.palette.push(s),this.paletteIndex.set(a,o));const c=this.getIndex(e),l=this.blocksMap[c];if(l)l.state=o,l.nbt=r;else{const u={pos:Ut.create(e[0],e[1],e[2]),state:o,nbt:r};this.blocks.push(u),this.blocksMap[c]=u}return this.clearPlacedCaches(),this}getBlocks(){return this.ensurePlacedCaches(),this.placedBlocksCache??[]}getBlock(e){var i;return this.isInside(e)?(this.ensurePlacedCaches(),((i=this.placedBlocksMapCache)==null?void 0:i[this.getIndex(e)])??null):null}clone(){return new Bn(Ut.create(this.size[0],this.size[1],this.size[2]),this.palette.map(e=>new Ei(e.getName(),{...e.getProperties()})),this.blocks.map(e=>({pos:Ut.create(e.pos[0],e.pos[1],e.pos[2]),state:e.state,nbt:e.nbt})))}updateBlockStates(){const e=[];for(const t of this.getBlocks()){const i=t.state.getName().toString();if(!GS(i))continue;const r={...t.state.getProperties()};for(const s of zS){const a=this.getBlock(Ut.add(t.pos,s.offset)),o=(a==null?void 0:a.state.getName().toString())??"";r[s.key]=VS(i,o)?"true":"false"}r.waterlogged===void 0&&(r.waterlogged="false"),!new Ei(i,r).equals(t.state)&&e.push({pos:t.pos,name:i,properties:r,nbt:t.nbt})}for(const t of e)this.addBlock(t.pos,t.name,t.properties,t.nbt);return{updatedBlocks:e.length}}toPlacedBlock(e){const t=this.palette[e.state];if(!t)throw new Error(`Block at ${e.pos.join(" ")} in structure references invalid palette index ${e.state}`);return{pos:e.pos,state:t,nbt:e.nbt}}isInside(e){return e[0]>=0&&e[0]<this.size[0]&&e[1]>=0&&e[1]<this.size[1]&&e[2]>=0&&e[2]<this.size[2]}getIndex(e){return e[0]*this.xStride+e[1]*this.yStride+e[2]}ensurePlacedCaches(){if(!(this.placedBlocksCache&&this.placedBlocksMapCache)){this.placedBlocksCache=[],this.placedBlocksMapCache=[];for(const e of this.blocks){const t=this.toPlacedBlock(e);this.placedBlocksCache.push(t),this.placedBlocksMapCache[this.getIndex(e.pos)]=t}}}clearPlacedCaches(){this.placedBlocksCache=null,this.placedBlocksMapCache=null}toNbt(e={}){const t=e.updateBlockStates?this.clone():this;e.updateBlockStates&&t.updateBlockStates();const i=[],r=new Map,s=t.blocks.map(o=>{const c=t.toPlacedBlock(o),l=c.state.toString();let u=r.get(l);u===void 0&&(u=i.length,i.push(c.state),r.set(l,u));const f=new Et().set("pos",Ut.toNbt(c.pos)).set("state",new _n(u));return c.nbt&&c.nbt.size>0&&f.set("nbt",c.nbt),f}),a=new Et().set("size",Ut.toNbt(this.size)).set("palette",new Yt(i.map(o=>o.toNbt()))).set("blocks",new Yt(s)).set("entities",new Yt);return e.dataVersion!==void 0&&a.set("DataVersion",new _n(e.dataVersion)),a}writeNbt(e={}){return new Vn(e.name??"",this.toNbt(e),e.compression??"gzip",!1,void 0).write()}static fromNbt(e){const t=Ut.fromNbt(e.getList("size")),i=e.getList("palette",ce.Compound).map(s=>Ei.fromNbt(s)),r=e.getList("blocks",ce.Compound).map(s=>{const a=Ut.fromNbt(s.getList("pos")),o=s.getNumber("state"),c=s.getCompound("nbt");return{pos:a,state:o,nbt:c.size>0?c:void 0}});return new Bn(t,i,r)}static transform(e,t,i){switch(t){case Xr.COUNTERCLOCKWISE_90:return Ut.create(i[0]-i[2]+e[2],e[1],i[0]+i[2]-e[0]);case Xr.CLOCKWISE_90:return Ut.create(i[0]+i[2]-e[2],e[1],i[2]-i[0]+e[0]);case Xr.CLOCKWISE_180:return Ut.create(i[0]+i[0]-e[0],e[1],i[2]+i[2]-e[2]);default:return e}}},C(Bn,"REGISTRY",Ja.createAndRegister("structures")),C(Bn,"EMPTY",new Bn(Ut.ZERO)),Bn);class Lt{constructor(e,t,i){C(this,"x");C(this,"y");C(this,"z");this.x=e,this.y=t,this.z=i}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}distance(e){return this.sub(e).length()}distanceSquared(e){return this.sub(e).lengthSquared()}abs(){return new Lt(Math.abs(this.x),Math.abs(this.y),Math.abs(this.z))}add(e){return new Lt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Lt(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new Lt(this.x*e.x,this.y*e.y,this.z*e.z)}div(e){return new Lt(this.x/e.x,this.y/e.y,this.z/e.z)}scale(e){return new Lt(this.x*e,this.y*e,this.z*e)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,r=this.x*e.y-this.y*e.x;return new Lt(t,i,r)}normalize(){if(this.x==0&&this.y==0&&this.z==0)return this;const e=1/this.length();return new Lt(this.x*e,this.y*e,this.z*e)}components(){return[this.x,this.y,this.z]}toString(){return`[${this.x} ${this.y} ${this.z}]`}}function wi(n,e,t){return Math.max(e,Math.min(t,n))}function Hl(n){return(n&n-1)===0}function ac(n){return n-=1,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>18,n|=n>>32,n+1}var Ia=1e-6,pr=typeof Float32Array<"u"?Float32Array:Array,XS=Math.PI/180;function Gl(n){return n*XS}function nt(){var n=new pr(16);return pr!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function qS(n){var e=new pr(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function $S(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function YS(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function jS(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-i*a,x=t*c-r*a,y=t*l-s*a,P=i*c-r*o,A=i*l-s*o,E=r*l-s*c,U=u*_-f*g,w=u*m-d*g,v=u*p-h*g,D=f*m-d*_,z=f*p-h*_,I=d*p-h*m,H=M*I-x*z+y*D+P*v-A*w+E*U;return H?(H=1/H,n[0]=(o*I-c*z+l*D)*H,n[1]=(r*z-i*I-s*D)*H,n[2]=(_*E-m*A+p*P)*H,n[3]=(d*A-f*E-h*P)*H,n[4]=(c*v-a*I-l*w)*H,n[5]=(t*I-r*v+s*w)*H,n[6]=(m*y-g*E-p*x)*H,n[7]=(u*E-d*y+h*x)*H,n[8]=(a*z-o*v+l*U)*H,n[9]=(i*v-t*z-s*U)*H,n[10]=(g*A-_*y+p*M)*H,n[11]=(f*y-u*A-h*M)*H,n[12]=(o*w-a*D-c*U)*H,n[13]=(t*D-i*w+r*U)*H,n[14]=(_*x-g*P-m*M)*H,n[15]=(u*P-f*x+d*M)*H,n):null}function ke(n,e,t){var i=t[0],r=t[1],s=t[2],a,o,c,l,u,f,d,h,g,_,m,p;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],c=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=e[9],m=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=c,n[3]=l,n[4]=u,n[5]=f,n[6]=d,n[7]=h,n[8]=g,n[9]=_,n[10]=m,n[11]=p,n[12]=a*i+u*r+g*s+e[12],n[13]=o*i+f*r+_*s+e[13],n[14]=c*i+d*r+m*s+e[14],n[15]=l*i+h*r+p*s+e[15]),n}function ln(n,e,t){var i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function ZS(n,e,t,i){var r=i[0],s=i[1],a=i[2],o=Math.sqrt(r*r+s*s+a*a),c,l,u,f,d,h,g,_,m,p,M,x,y,P,A,E,U,w,v,D,z,I,H,R;return o<Ia?null:(o=1/o,r*=o,s*=o,a*=o,c=Math.sin(t),l=Math.cos(t),u=1-l,f=e[0],d=e[1],h=e[2],g=e[3],_=e[4],m=e[5],p=e[6],M=e[7],x=e[8],y=e[9],P=e[10],A=e[11],E=r*r*u+l,U=s*r*u+a*c,w=a*r*u-s*c,v=r*s*u-a*c,D=s*s*u+l,z=a*s*u+r*c,I=r*a*u+s*c,H=s*a*u-r*c,R=a*a*u+l,n[0]=f*E+_*U+x*w,n[1]=d*E+m*U+y*w,n[2]=h*E+p*U+P*w,n[3]=g*E+M*U+A*w,n[4]=f*v+_*D+x*z,n[5]=d*v+m*D+y*z,n[6]=h*v+p*D+P*z,n[7]=g*v+M*D+A*z,n[8]=f*I+_*H+x*R,n[9]=d*I+m*H+y*R,n[10]=h*I+p*H+P*R,n[11]=g*I+M*H+A*R,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function Ds(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],f=e[10],d=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+l*i,n[5]=a*r+u*i,n[6]=o*r+f*i,n[7]=c*r+d*i,n[8]=l*r-s*i,n[9]=u*r-a*i,n[10]=f*r-o*i,n[11]=d*r-c*i,n}function Nt(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[8],u=e[9],f=e[10],d=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-l*i,n[1]=a*r-u*i,n[2]=o*r-f*i,n[3]=c*r-d*i,n[8]=s*i+l*r,n[9]=a*i+u*r,n[10]=o*i+f*r,n[11]=c*i+d*r,n}function td(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],d=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+l*i,n[1]=a*r+u*i,n[2]=o*r+f*i,n[3]=c*r+d*i,n[4]=l*r-s*i,n[5]=u*r-a*i,n[6]=f*r-o*i,n[7]=d*r-c*i,n}function KS(n,e,t,i,r){var s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0){var a=1/(i-r);n[10]=(r+i)*a,n[14]=2*r*i*a}else n[10]=-1,n[14]=-2*i;return n}var JS=KS;function QS(n,e,t,i,r,s,a){var o=1/(e-t),c=1/(i-r),l=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*l,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*c,n[14]=(a+s)*l,n[15]=1,n}var ey=QS;function ty(n,e,t,i){var r,s,a,o,c,l,u,f,d,h,g=e[0],_=e[1],m=e[2],p=i[0],M=i[1],x=i[2],y=t[0],P=t[1],A=t[2];return Math.abs(g-y)<Ia&&Math.abs(_-P)<Ia&&Math.abs(m-A)<Ia?YS(n):(u=g-y,f=_-P,d=m-A,h=1/Math.sqrt(u*u+f*f+d*d),u*=h,f*=h,d*=h,r=M*d-x*f,s=x*u-p*d,a=p*f-M*u,h=Math.sqrt(r*r+s*s+a*a),h?(h=1/h,r*=h,s*=h,a*=h):(r=0,s=0,a=0),o=f*a-d*s,c=d*r-u*a,l=u*s-f*r,h=Math.sqrt(o*o+c*c+l*l),h?(h=1/h,o*=h,c*=h,l*=h):(o=0,c=0,l=0),n[0]=r,n[1]=o,n[2]=u,n[3]=0,n[4]=s,n[5]=c,n[6]=f,n[7]=0,n[8]=a,n[9]=l,n[10]=d,n[11]=0,n[12]=-(r*g+s*_+a*m),n[13]=-(o*g+c*_+l*m),n[14]=-(u*g+f*_+d*m),n[15]=1,n)}function Qa(){var n=new pr(3);return pr!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function mi(n){var e=new pr(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function ny(n){var e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function wn(n,e,t){var i=new pr(3);return i[0]=n,i[1]=e,i[2]=t,i}function Ea(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function iy(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function ry(n,e,t,i){return n[0]=e[0]+t[0]*i,n[1]=e[1]+t[1]*i,n[2]=e[2]+t[2]*i,n}function sy(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function nd(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function ay(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}(function(){var n=Qa();return function(e,t,i,r,s,a){var o,c;for(t||(t=3),i||(i=0),r?c=Math.min(r*t+i,e.length):c=e.length,o=i;o<c;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();const Mn=[124/255,189/255,107/255],oy=Xe.intToRgb(6396257),ly=Xe.intToRgb(8431445),kr=Xe.intToRgb(4764952),Ta=Xe.intToRgb(4159204),cy=Xe.intToRgb(2129968),uy=n=>{const e=n/15,t=e*.6+(e>0?.4:.3),i=wi(e*e*.7-.5,0,1),r=wi(e*e*.6-.7,0,1);return[t,i,r]},Aa=n=>[n/8,1-n/32,n/64],or={large_fern:()=>Mn,tall_grass:()=>Mn,grass_block:()=>Mn,fern:()=>Mn,grass:()=>Mn,short_grass:()=>Mn,potted_fern:()=>Mn,pink_petals:()=>Mn,wildflowers:()=>Mn,bush:()=>Mn,spruce_leaves:()=>oy,birch_leaves:()=>ly,oak_leaves:()=>kr,jungle_leaves:()=>kr,acacia_leaves:()=>kr,dark_oak_leaves:()=>kr,vine:()=>kr,mangrove_leaves:()=>kr,water:()=>Ta,bubble_column:()=>Ta,cauldron:()=>Ta,water_cauldron:()=>Ta,redstone_wire:n=>uy(parseInt(n.power??"0")),sugar_cane:()=>Mn,attached_melon_stem:()=>Aa(7),attached_pumpkin_stem:()=>Aa(7),melon_stem:n=>Aa(parseInt(n.age??"0")),pumpkin_stem:n=>Aa(parseInt(n.age??"0")),lily_pad:()=>cy};var mt;(function(n){function e(i,r,s){let{up:a,down:o,north:c,east:l,south:u,west:f}=i;switch(s){case 90:[c,l,u,f]=[l,u,f,c];break;case 180:[c,l,u,f]=[u,f,c,l];break;case 270:[c,l,u,f]=[f,c,l,u]}switch(r){case 90:[a,c,o,u]=[c,o,u,a];break;case 180:[a,c,o,u]=[o,u,a,c];break;case 270:[a,c,o,u]=[u,a,c,o]}return{up:a,down:o,north:c,east:l,south:u,west:f}}n.rotate=e;function t(){return Object.create(null)}n.none=t})(mt||(mt={}));const pn=class pn{constructor(e,t,i,r,s,a,o=0){C(this,"pos");C(this,"color");C(this,"texture");C(this,"textureLimit");C(this,"normal");C(this,"blockPos");C(this,"emissive");this.pos=e,this.color=t,this.texture=i,this.textureLimit=r,this.normal=s,this.blockPos=a,this.emissive=o}transform(e){return pn.VEC[0]=this.pos.x,pn.VEC[1]=this.pos.y,pn.VEC[2]=this.pos.z,ay(pn.VEC,pn.VEC,e),this.pos=new Lt(pn.VEC[0],pn.VEC[1],pn.VEC[2]),this}static fromPos(e){return new pn(e,[0,0,0],[0,0],[0,0,0,0],void 0,void 0,0)}};C(pn,"VEC",Qa());let Cn=pn;class Is{constructor(e,t){C(this,"v1");C(this,"v2");this.v1=e,this.v2=t}vertices(){return[this.v1,this.v2]}forEach(e){return e(this.v1),e(this.v2),this}transform(e){return this.forEach(t=>t.transform(e)),this}setColor(e){return this.forEach(t=>t.color=e),this}toString(){return`Line(${this.v1.pos.toString()}, ${this.v2.pos.toString()})`}static fromPoints(e,t){return new Is(Cn.fromPos(e),Cn.fromPos(t))}}class dt{constructor(e=[],t=[]){C(this,"quads");C(this,"lines");C(this,"posBuffer");C(this,"colorBuffer");C(this,"textureBuffer");C(this,"textureLimitBuffer");C(this,"normalBuffer");C(this,"blockPosBuffer");C(this,"indexBuffer");C(this,"indexType");C(this,"linePosBuffer");C(this,"lineColorBuffer");this.quads=e,this.lines=t}clear(){return this.quads=[],this.lines=[],this}isEmpty(){return this.quads.length===0&&this.lines.length===0}quadVertices(){return this.quads.length*4}quadIndices(){return this.quads.length*6}lineVertices(){return this.lines.length*2}merge(e){for(const t of e.quads)this.quads.push(t);for(const t of e.lines)this.lines.push(t);return this}addLine(e,t,i,r,s,a,o){const c=new Is(Cn.fromPos(new Lt(e,t,i)),Cn.fromPos(new Lt(r,s,a))).setColor(o);return this.lines.push(c),this}addLineCube(e,t,i,r,s,a,o){return this.addLine(e,t,i,e,t,a,o),this.addLine(r,t,i,r,t,a,o),this.addLine(e,t,i,r,t,i,o),this.addLine(e,t,a,r,t,a,o),this.addLine(e,t,i,e,s,i,o),this.addLine(r,t,i,r,s,i,o),this.addLine(e,t,a,e,s,a,o),this.addLine(r,t,a,r,s,a,o),this.addLine(e,s,i,e,s,a,o),this.addLine(r,s,i,r,s,a,o),this.addLine(e,s,i,r,s,i,o),this.addLine(e,s,a,r,s,a,o),this}transform(e){for(const t of this.quads)t.transform(e);return this}computeNormals(){for(const e of this.quads){const t=e.normal();e.forEach(i=>i.normal=t)}}rebuild(e,t){const i=t.usage??e.DYNAMIC_DRAW,r=(a,o,c)=>{if(a||(a=e.createBuffer()??void 0),!a)throw new Error("Cannot create new buffer");return e.bindBuffer(o,a),e.bufferData(o,c,i),a},s=(a,o,c,l)=>{if(a.length===0){o&&e.deleteBuffer(o);return}const u=a[0]instanceof Is?2:4,f=new Float32Array(a.length*u*c);let d=0;for(const h of a)for(const g of h.vertices()){const _=l(g);if(!_)throw new Error("Missing vertex component");for(let m=0;m<c;m+=1)f[d++]=_[m]??0}return r(o,e.ARRAY_BUFFER,f)};if(t.pos&&(this.posBuffer=s(this.quads,this.posBuffer,3,a=>a.pos.components()),this.linePosBuffer=s(this.lines,this.linePosBuffer,3,a=>a.pos.components())),t.color&&(this.colorBuffer=s(this.quads,this.colorBuffer,3,a=>a.color),this.lineColorBuffer=s(this.lines,this.lineColorBuffer,3,a=>a.color)),t.texture&&(this.textureBuffer=s(this.quads,this.textureBuffer,2,a=>a.texture),this.textureLimitBuffer=s(this.quads,this.textureLimitBuffer,4,a=>a.textureLimit)),t.normal&&(this.normalBuffer=s(this.quads,this.normalBuffer,3,a=>{var o;return(o=a.normal)==null?void 0:o.components()})),t.blockPos&&(this.blockPosBuffer=s(this.quads,this.blockPosBuffer,3,a=>{var o;return(o=a.blockPos)==null?void 0:o.components()})),this.quads.length===0)this.indexBuffer&&e.deleteBuffer(this.indexBuffer),this.indexBuffer=void 0,this.indexType=void 0;else{const a=this.quadVertices()>65536;if(a&&!(typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext)&&!e.getExtension("OES_element_index_uint"))throw new Error("Mesh requires 32-bit indices, but OES_element_index_uint is not available");this.indexType=a?e.UNSIGNED_INT:e.UNSIGNED_SHORT;const o=a?new Uint32Array(this.quadIndices()):new Uint16Array(this.quadIndices());let c=0;for(let l=0;l<this.quads.length;l+=1){const u=l*4;o[c++]=u,o[c++]=u+1,o[c++]=u+2,o[c++]=u,o[c++]=u+2,o[c++]=u+3}this.indexBuffer=r(this.indexBuffer,e.ELEMENT_ARRAY_BUFFER,o)}return this}}function Ch(n){const e=Q.readObject(n)??{},i={model:Q.readString(e.model)??""},r=Q.readNumber(e.x);r!==void 0&&(i.x=r);const s=Q.readNumber(e.y);s!==void 0&&(i.y=s);const a=Q.readBoolean(e.uvlock);a!==void 0&&(i.uvlock=a);const o=Q.readNumber(e.weight);return o!==void 0&&(i.weight=o),i}function id(n){const e=Q.readArray(n,Ch);return e||Ch(n)}function rd(n){const e=Q.readObject(n);if(!e)return;const t=Q.readArray(e.OR,rd);if(t){const i=t.flatMap(r=>r?[r]:[]);if(i.length>0)return{OR:i}}return Object.fromEntries(Object.entries(e).map(([i,r])=>[i,Q.readString(r)??""]))}function hy(n){const e=Q.readObject(n)??{},t=id(e.apply),i=rd(e.when);return i?{when:i,apply:t}:{apply:t}}class fo{constructor(e,t){C(this,"variants");C(this,"multipart");this.variants=e,this.multipart=t}getModelVariants(e){if(this.variants){const t=Object.keys(this.variants).filter(r=>this.matchesVariant(r,e));if(t.length===0)return[];const i=this.variants[t[0]];return[Array.isArray(i)?i[0]:i]}else if(this.multipart)return this.multipart.filter(i=>i.when?this.matchesCase(i.when,e):!0).map(i=>Array.isArray(i.apply)?i.apply[0]:i.apply);return[]}getMesh(e,t,i,r,s){var l;const a=this.getModelVariants(t),o=new dt;for(const u of a){const f=mt.rotate(s,u.x??0,u.y??0),d=r.getBlockModel(K.parse(u.model));if(!d)throw new Error(`Cannot find block model ${u.model}`);const h=e?(l=or[e.path])==null?void 0:l.call(or,t):void 0,g=d.getMesh(i,f,h);if(u.x||u.y){const _=nt();ke(_,_,[8,8,8]),Nt(_,_,-Gl(u.y??0)),Ds(_,_,-Gl(u.x??0)),ke(_,_,[-8,-8,-8]),g.transform(_)}o.merge(g)}const c=nt();return ln(c,c,[.0625,.0625,.0625]),o.transform(c)}matchesVariant(e,t){return e.split(",").every(i=>{const[r,s]=i.split("=");return t[r]===s})}matchesCase(e,t){if(Array.isArray(e.OR))return e.OR.some(r=>this.matchesCase(r,t));const i=e;return Object.keys(i).every(r=>i[r].split("|").includes(t[r]))}static fromJson(e){const t=Q.readObject(e)??{},i=Q.readObject(t.variants),r=i?Object.fromEntries(Object.entries(i).map(([a,o])=>[a,id(o)])):void 0,s=Q.readArray(t.multipart,hy);return new fo(r,s)}}class po{constructor(e,t,i,r){C(this,"v1");C(this,"v2");C(this,"v3");C(this,"v4");this.v1=e,this.v2=t,this.v3=i,this.v4=r}vertices(){return[this.v1,this.v2,this.v3,this.v4]}forEach(e){return e(this.v1),e(this.v2),e(this.v3),e(this.v4),this}transform(e){return this.forEach(t=>t.transform(e)),this}normal(){const e=this.v2.pos.sub(this.v1.pos),t=this.v3.pos.sub(this.v1.pos);return e.cross(t).normalize()}reverse(){return[this.v1,this.v2,this.v3,this.v4]=[this.v4,this.v3,this.v2,this.v1],this}setColor(e){return this.forEach(t=>t.color=e),this}setTexture(e,t){return this.v1.textureLimit=t,this.v2.textureLimit=t,this.v3.textureLimit=t,this.v4.textureLimit=t,this.v1.texture=[e[0],e[1]],this.v2.texture=[e[2],e[3]],this.v3.texture=[e[4],e[5]],this.v4.texture=[e[6],e[7]],this}toString(){return`Quad(${this.v1.pos.toString()}, ${this.v2.pos.toString()}, ${this.v3.pos.toString()}, ${this.v4.pos.toString()})`}static fromPoints(e,t,i,r){return new po(Cn.fromPos(e),Cn.fromPos(t),Cn.fromPos(i),Cn.fromPos(r))}}const fy={0:[0,3,2,3,2,1,0,1],90:[2,3,2,1,0,1,0,3],180:[2,1,0,1,0,3,2,3],270:[0,1,0,3,2,3,2,1]},dy={x:[1,0,0],y:[0,1,0],z:[0,0,1]},Br=1.41421356237,py={x:[1,Br,Br],y:[Br,1,Br],z:[Br,Br,1]},Si=class Si{constructor(e,t,i,r,s){C(this,"parent");C(this,"textures");C(this,"elements");C(this,"display");C(this,"guiLight");C(this,"generationMarker",!1);this.parent=e,this.textures=t,this.elements=i,this.display=r,this.guiLight=s}getDisplayTransform(e){var r;const t=(r=this.display)==null?void 0:r[e],i=nt();return ke(i,i,[8,8,8]),t!=null&&t.translation&&ke(i,i,t.translation),t!=null&&t.rotation&&(Ds(i,i,t.rotation[0]*Math.PI/180),Nt(i,i,t.rotation[1]*Math.PI/180),td(i,i,-t.rotation[2]*Math.PI/180)),t!=null&&t.scale&&ln(i,i,t.scale),ke(i,i,[-8,-8,-8]),i}getMesh(e,t,i){const r=new dt,s=a=>i===void 0?[1,1,1]:a===void 0||a<0?[1,1,1]:typeof i=="function"?i(a):i;for(const a of this.elements??[])r.merge(this.getElementMesh(a,e,t,s));return r}getElementMesh(e,t,i,r){var g,_,m,p,M,x,y,P,A,E,U,w;const s=new dt,[a,o,c]=e.from,[l,u,f]=e.to,d=(v,D,z)=>{var Me,Ie,Z,se;const I=po.fromPoints(new Lt(z[0],z[1],z[2]),new Lt(z[3],z[4],z[5]),new Lt(z[6],z[7],z[8]),new Lt(z[9],z[10],z[11])),H=r(v.tintindex);I.setColor(H);const[R,B,q,V]=t.getTextureUV(this.getTexture(v.texture)),J=(q-R)/16,te=(V-B)/16;D[0]=(((Me=v.uv)==null?void 0:Me[0])??D[0])*J,D[1]=(((Ie=v.uv)==null?void 0:Ie[1])??D[1])*te,D[2]=(((Z=v.uv)==null?void 0:Z[2])??D[2])*J,D[3]=(((se=v.uv)==null?void 0:se[3])??D[3])*te;const ue=fy[v.rotation??0];I.setTexture([R+D[ue[0]],B+D[ue[1]],R+D[ue[2]],B+D[ue[3]],R+D[ue[4]],B+D[ue[5]],R+D[ue[6]],B+D[ue[7]]],[R+Math.min(D[0],D[2]),B+Math.min(D[1],D[3]),R+Math.max(D[0],D[2]),B+Math.max(D[1],D[3])]),s.quads.push(I)};(_=(g=e.faces)==null?void 0:g.up)!=null&&_.texture&&(!e.faces.up.cullface||!i[e.faces.up.cullface])&&d(e.faces.up,[a,16-f,l,16-c],[a,u,f,l,u,f,l,u,c,a,u,c]),(p=(m=e.faces)==null?void 0:m.down)!=null&&p.texture&&(!e.faces.down.cullface||!i[e.faces.down.cullface])&&d(e.faces.down,[16-f,16-l,16-c,16-a],[a,o,c,l,o,c,l,o,f,a,o,f]),(x=(M=e.faces)==null?void 0:M.south)!=null&&x.texture&&(!e.faces.south.cullface||!i[e.faces.south.cullface])&&d(e.faces.south,[a,16-u,l,16-o],[a,o,f,l,o,f,l,u,f,a,u,f]),(P=(y=e.faces)==null?void 0:y.north)!=null&&P.texture&&(!e.faces.north.cullface||!i[e.faces.north.cullface])&&d(e.faces.north,[16-l,16-u,16-a,16-o],[l,o,c,a,o,c,a,u,c,l,u,c]),(E=(A=e.faces)==null?void 0:A.east)!=null&&E.texture&&(!e.faces.east.cullface||!i[e.faces.east.cullface])&&d(e.faces.east,[16-f,16-u,16-c,16-o],[l,o,f,l,o,c,l,u,c,l,u,f]),(w=(U=e.faces)==null?void 0:U.west)!=null&&w.texture&&(!e.faces.west.cullface||!i[e.faces.west.cullface])&&d(e.faces.west,[c,16-u,f,16-o],[a,o,c,a,o,f,a,u,f,a,u,c]);const h=nt();if(e.rotation){const v=wn(...e.rotation.origin);ke(h,h,v),ZS(h,h,Gl(e.rotation.angle),dy[e.rotation.axis]),e.rotation.rescale&&ln(h,h,py[e.rotation.axis]),sy(v,v),ke(h,h,v)}return s.transform(h)}getTexture(e){var t;for(;e.startsWith("#");)e=((t=this.textures)==null?void 0:t[e.slice(1)])??"";return K.parse(e)}flatten(e){var o;if(!this.parent)return;if(this.parent.equals(Si.BUILTIN_GENERATED)){this.generationMarker=!0;return}const t=this.getParent(e);if(!t){console.warn(`parent ${this.parent} does not exist!`),this.parent=void 0;return}t.flatten(e),this.elements||(this.elements=t.elements),this.textures||(this.textures={});const i=this.textures,r=t.textures;r&&Object.keys(r).forEach(c=>{i[c]||(i[c]=r[c])}),this.display||(this.display={});const s=this.display,a=t.display;if(a&&Object.keys(a).forEach(c=>{const l=c;if(!s[l])s[l]=a[l];else{const u=a[l];u&&Object.keys(u).forEach(f=>{const d=f,h=s[l];h&&!h[d]&&u[d]&&(h[d]=u[d])})}}),this.guiLight||(this.guiLight=t.guiLight),t.generationMarker&&(this.generationMarker=!0),this.generationMarker&&(((o=this.elements)==null?void 0:o.length)??0)===0)for(let c=0;c<Si.GENERATED_LAYERS.length;c+=1){const l=Si.GENERATED_LAYERS[c];if(!Object.hasOwn(this.textures,l))break;this.elements||(this.elements=[]),this.elements.push({from:[0,0,0],to:[16,16,0],faces:{south:{texture:`#${l}`,tintindex:c}}})}this.parent=void 0}getParent(e){return this.parent?e.getBlockModel(this.parent):null}static fromJson(e){var u;const t=Q.readObject(e)??{},i=Q.readString(t.parent),r=i?K.parse(i):void 0,s=Q.readObject(t.textures),a=s?Q.readMap(s,f=>Q.readString(f)??""):void 0,o=(u=Q.readArray(t.elements,f=>Q.readObject(f)??{}))==null?void 0:u.map(f=>f),c=Q.readObject(t.display),l=Q.readString(t.gui_light);return new Si(r,a,o,c,l)}};C(Si,"BUILTIN_GENERATED",K.create("builtin/generated")),C(Si,"GENERATED_LAYERS",["layer0","layer1","layer2","layer3","layer4"]);let gt=Si;class qr{constructor(e,t){C(this,"img");C(this,"idMap");C(this,"part");if(this.img=e,this.idMap=t,!Hl(e.width)||!Hl(e.height))throw new Error(`Expected texture atlas dimensions to be powers of two, got ${e.width}x${e.height}.`);this.part=16/e.width}getTextureAtlas(){return this.img}getTextureUV(e){return this.idMap[e.toString()]??[0,0,this.part,this.part]}getPixelSize(){return this.part/16}static async fromBlobs(e){const t=Math.sqrt(Object.keys(e).length+1),i=ac(t),r=i*16,s=1/i,a=document.createElement("canvas");a.width=r,a.height=r;const o=a.getContext("2d");if(!o)throw new Error("Failed to get 2D rendering context");this.drawInvalidTexture(o);const c={};let l=1;return await Promise.all(Object.keys(e).map(async u=>{const f=l%i,d=Math.floor(l/i);l+=1,c[u]=[s*f,s*d,s*f+s,s*d+s];const h=await createImageBitmap(e[u]);o.drawImage(h,0,0,16,16,16*f,16*d,16,16)})),new qr(o.getImageData(0,0,r,r),c)}static empty(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");if(!t)throw new Error("Failed to get 2D rendering context");return qr.drawInvalidTexture(t),new qr(t.getImageData(0,0,16,16),{})}static drawInvalidTexture(e){e.fillStyle="black",e.fillRect(0,0,16,16),e.fillStyle="magenta",e.fillRect(0,0,8,8),e.fillRect(8,8,8,8)}}function Ra(n){if(!n)return"";if(typeof n=="string")return n;const e=n;return typeof e.toString=="function"?e.toString():String(n)}function sd(n){const e=(typeof n=="string"?n:n.toString()).replace(/\/?$/,"/");return{baseUrl:e,assetsJson:new URL("assets.json",e).toString(),atlasPng:new URL("atlas.png",e).toString(),blockFlags:{opaqueTxt:new URL("block-flags/opaque.txt",e).toString(),transparentTxt:new URL("block-flags/transparent.txt",e).toString(),nonSelfCullingTxt:new URL("block-flags/non_self_culling.txt",e).toString(),emissiveJson:new URL("block-flags/emissive.json",e).toString()}}}function ad(n){const{assets:e,atlas:t,flags:i}=n,r={};Object.keys(e.blockstates??{}).forEach(h=>{r[`minecraft:${h}`]=fo.fromJson(e.blockstates[h])});const s={};Object.keys(e.models??{}).forEach(h=>{s[`minecraft:${h}`]=gt.fromJson(e.models[h])});const a={getBlockModel(h){return s[Ra(h)]??null}};Object.values(s).forEach(h=>h.flatten(a));const o={};Object.keys(e.textures??{}).forEach(h=>{const[g,_,m,p]=e.textures[h],M=m!==p&&h.startsWith("block/")?m:p;o[`minecraft:${h}`]=[g/t.atlasSize,_/t.atlasSize,(g+m)/t.atlasSize,(_+M)/t.atlasSize]});const c=new qr(t.imageData,o),l=(i==null?void 0:i.opaque)??new Set,u=(i==null?void 0:i.transparent)??new Set,f=(i==null?void 0:i.nonSelfCulling)??new Set,d=(i==null?void 0:i.emissive)??{};return{getBlockDefinition(h){return r[Ra(h)]??null},getBlockModel(h){return s[Ra(h)]??null},getTextureUV(h){return c.getTextureUV(h)},getTextureAtlas(){return c.getTextureAtlas()},getPixelSize(){return c.getPixelSize()},getBlockFlags(h){const g=Ra(h),_=u.has(g),m=l.has(g),p=!_&&(m||l.size===0),M=f.has(g),x=d[g];return{opaque:p,semi_transparent:_,self_culling:!M,emissive:!!x,emissiveIntensity:(x==null?void 0:x.intensity)??1,emissiveConditional:x==null?void 0:x.conditional}},getBlockProperties(){return null},getDefaultBlockProperties(){return null}}}function _l(n,e,t,i,r){var a;const s=i.up?16:[14.2,12.5,10.5,9,7,5.3,3.7,1.9,16,16,16,16,16,16,16,16][e];return new gt(void 0,{still:`block/${n}_still`,flow:`block/${n}_flow`},[{from:[0,0,0],to:[16,s,16],faces:{up:{texture:"#still",tintindex:r,cullface:et.UP},down:{texture:"#still",tintindex:r,cullface:et.DOWN},north:{texture:"#flow",tintindex:r,cullface:et.NORTH},east:{texture:"#flow",tintindex:r,cullface:et.EAST},south:{texture:"#flow",tintindex:r,cullface:et.SOUTH},west:{texture:"#flow",tintindex:r,cullface:et.WEST}}}]).getMesh(t,i,(a=or[n])==null?void 0:a.call(or,{}))}const ps={white:Xe.intToRgb(16383998),orange:Xe.intToRgb(16351261),magenta:Xe.intToRgb(13061821),light_blue:Xe.intToRgb(3847130),yellow:Xe.intToRgb(16701501),lime:Xe.intToRgb(8439583),pink:Xe.intToRgb(15961002),gray:Xe.intToRgb(4673362),light_gray:Xe.intToRgb(10329495),cyan:Xe.intToRgb(1481884),purple:Xe.intToRgb(8991416),blue:Xe.intToRgb(3949738),brown:Xe.intToRgb(8606770),green:Xe.intToRgb(6192150),red:Xe.intToRgb(11546150),black:Xe.intToRgb(1908001)};var vt;(function(n){function e(R){return B=>new gt(void 0,{0:R.withPrefix("entity/chest/").toString()},[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],rotation:180,texture:"#0"},down:{uv:[.75,0,1.25,.25],rotation:180,texture:"#0"}}}]).getMesh(B,mt.none())}n.chestRenderer=e;function t(R){return new gt(void 0,{0:"entity/decorated_pot/decorated_pot_side",1:"entity/decorated_pot/decorated_pot_base"},[{from:[1,0,1],to:[15,16,15],faces:{north:{uv:[1,0,15,16],texture:"#0"},east:{uv:[1,0,15,16],texture:"#0"},south:{uv:[1,0,15,16],texture:"#0"},west:{uv:[1,0,15,16],texture:"#0"},up:{uv:[0,6.5,7,13.5],texture:"#1"},down:{uv:[7,6.5,14,13.5],texture:"#1"}}},{from:[5,16,5],to:[11,17,11],faces:{north:{uv:[0,5.5,3,6],texture:"#1"},east:{uv:[3,5.5,6,6],texture:"#1"},south:{uv:[6,5.5,9,6],texture:"#1"},west:{uv:[9,5.5,12,6],texture:"#1"}}},{from:[4,17,4],to:[12,20,12],faces:{north:{uv:[0,4,4,5.5],texture:"#1"},east:{uv:[4,4,8,5.5],texture:"#1"},south:{uv:[8,4,12,5.5],texture:"#1"},west:{uv:[12,4,16,5.5],texture:"#1"},up:{uv:[4,0,8,4],texture:"#1"},down:{uv:[8,0,12,4],texture:"#1"}}}]).getMesh(R,mt.none())}n.decoratedPotRenderer=t;function i(R){return new gt(void 0,{0:"entity/shield_base_nopattern"},[{from:[-6,-11,-2],to:[6,11,-1],faces:{north:{uv:[3.5,.25,6.5,5.75],texture:"#0"},east:{uv:[3.25,.25,3.5,5.75],texture:"#0"},south:{uv:[.25,.25,3.25,5.75],texture:"#0"},west:{uv:[0,.25,.25,5.75],texture:"#0"},up:{uv:[.25,0,3.25,.25],texture:"#0"},down:{uv:[3.25,0,6.25,.25],texture:"#0"}}}]).getMesh(R,mt.none())}n.shieldRenderer=i;function r(R,B){return q=>new gt(void 0,{0:R.withPrefix("entity/").toString()},[{from:[4,0,4],to:[12,8,12],faces:{north:{uv:[6,2*B,8,4*B],texture:"#0"},east:{uv:[2,2*B,0,4*B],texture:"#0"},south:{uv:[2,2*B,4,4*B],texture:"#0"},west:{uv:[6,2*B,4,4*B],texture:"#0"},up:{uv:[2,0*B,4,2*B],texture:"#0"},down:{uv:[4,0*B,6,2*B],texture:"#0"}}}]).getMesh(q,mt.none())}n.headRenderer=r;function s(R=K.create("enderdragon/dragon")){return B=>{const q=nt();return ke(q,q,[8,8,8]),ln(q,q,[.75,.75,.75]),Nt(q,q,Math.PI),ke(q,q,[-8,-11.2,-8]),new gt(void 0,{0:R.withPrefix("entity/").toString()},[{from:[2,4,-16],to:[14,9,0],faces:{north:{uv:[12,3.75,12.75,4.0625],texture:"#0"},east:{uv:[11,3.75,12,4.0625],texture:"#0"},south:{uv:[13.75,3.75,14.5,4.0625],texture:"#0"},west:{uv:[12.75,3.75,13.75,4.0625],texture:"#0"},up:{uv:[12.75,3.75,12,2.75],texture:"#0"},down:{uv:[13.5,2.75,12.75,3.75],texture:"#0"}}},{from:[0,0,-2],to:[16,16,14],faces:{north:{uv:[8,2.875,9,3.875],texture:"#0"},east:{uv:[7,2.875,8,3.875],texture:"#0"},south:{uv:[10,2.875,11,3.875],texture:"#0"},west:{uv:[9,2.875,10,3.875],texture:"#0"},up:{uv:[9,2.875,8,1.875],texture:"#0"},down:{uv:[10,1.875,9,2.875],texture:"#0"}}},{from:[2,0,-16],to:[14,4,0],rotation:{angle:-.2*180/Math.PI,axis:"x",origin:[8,4,-2]},faces:{north:{uv:[12,5.0625,12.75,5.3125],texture:"#0"},east:{uv:[11,5.0625,12,5.3125],texture:"#0"},south:{uv:[13.75,5.0625,14.5,5.3125],texture:"#0"},west:{uv:[12.75,5.0625,13.75,5.3125],texture:"#0"},up:{uv:[12.75,5.0625,12,4.0625],texture:"#0"},down:{uv:[13.5,4.0625,12.75,5.0625],texture:"#0"}}},{from:[3,16,4],to:[5,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[11,16,4],to:[13,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[3,9,-14],to:[5,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}},{from:[11,9,-14],to:[13,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}}]).getMesh(B,mt.none()).transform(q)}}n.dragonHeadRenderer=s;function a(R=K.create("piglin/piglin")){return B=>new gt(void 0,{0:R.withPrefix("entity/").toString()},[{from:[3,0,4],to:[13,8,12],faces:{north:{uv:[6.5,2,9,4],texture:"#0"},east:{uv:[2,2,0,4],texture:"#0"},south:{uv:[2,2,4.5,4],texture:"#0"},west:{uv:[6.5,2,4.5,4],texture:"#0"},up:{uv:[2,0,4.5,2],texture:"#0"},down:{uv:[4.5,0,7,2],texture:"#0"}}},{from:[6,0,12],to:[10,4,13],faces:{north:{uv:[9.25,.5,10.25,1.5],texture:"#0"},east:{uv:[7.75,.5,8,1.5],texture:"#0"},south:{uv:[8,.5,9,1.5],texture:"#0"},west:{uv:[9,.5,9.25,1.5],texture:"#0"},up:{uv:[8,.25,9,.5],texture:"#0"},down:{uv:[9,.25,10,.5],texture:"#0"}}},{from:[5,0,12],to:[6,2,13],faces:{north:{uv:[1.25,.25,1.5,.75],texture:"#0"},east:{uv:[.5,.25,.75,.75],texture:"#0"},south:{uv:[.75,.25,1,.75],texture:"#0"},west:{uv:[1,.25,1.25,.75],texture:"#0"},up:{uv:[.75,0,1,.25],texture:"#0"},down:{uv:[1,0,1.25,.25],texture:"#0"}}},{from:[10,0,12],to:[11,2,13],faces:{north:{uv:[1.25,1.25,1.5,1.75],texture:"#0"},east:{uv:[.5,1.25,.75,1.75],texture:"#0"},south:{uv:[.75,1.25,1,1.75],texture:"#0"},west:{uv:[1,1.25,1.25,1.75],texture:"#0"},up:{uv:[.75,1,1,1.25],texture:"#0"},down:{uv:[1,1,1.25,1.25],texture:"#0"}}},{from:[2.5,1.5,6],to:[3.5,6.5,10],rotation:{angle:-30,axis:"z",origin:[3,7,8]},faces:{north:{uv:[12,2.5,12.25,3.75],texture:"#0"},east:{uv:[9.75,2.5,10.75,3.75],texture:"#0"},south:{uv:[10.75,2.5,11,3.75],texture:"#0"},west:{uv:[11,2.5,12,3.75],texture:"#0"},up:{uv:[10.75,1.5,11,2.5],texture:"#0"},down:{uv:[11,1.5,11.25,2.5],texture:"#0"}}},{from:[12.5,1.5,6],to:[13.5,6.5,10],rotation:{angle:30,axis:"z",origin:[13,7,8]},faces:{north:{uv:[15.25,2.5,15,3.75],texture:"#0"},east:{uv:[15,2.5,14,3.75],texture:"#0"},south:{uv:[14,2.5,13.75,3.75],texture:"#0"},west:{uv:[13.75,2.5,12.75,3.75],texture:"#0"},up:{uv:[14,1.5,13.75,2.5],texture:"#0"},down:{uv:[14.25,1.5,14,2.5],texture:"#0"}}}]).getMesh(B,mt.none())}n.piglinHeadRenderer=a;function o(R){return B=>new gt(void 0,{0:R.withPrefix("entity/signs/").toString()},[{from:[-4,8,7],to:[20,20,9],faces:{north:{uv:[.5,1,6.5,7],texture:"#0"},east:{uv:[0,1,.5,7],texture:"#0"},south:{uv:[7,1,13,7],texture:"#0"},west:{uv:[6.5,1,7,7],texture:"#0"},up:{uv:[6.5,1,.5,0],texture:"#0"},down:{uv:[12.5,0,6.5,1],texture:"#0"}}},{from:[7,-6,7],to:[9,8,9],faces:{north:{uv:[.5,8,1,15],texture:"#0"},east:{uv:[0,8,.5,15],texture:"#0"},south:{uv:[1.5,8,2,15],texture:"#0"},west:{uv:[1,8,1.5,15],texture:"#0"},up:{uv:[1,8,.5,7],texture:"#0"},down:{uv:[1.5,7,1,8],texture:"#0"}}}]).getMesh(B,mt.none())}n.signRenderer=o;function c(R){return B=>new gt(void 0,{0:R.withPrefix("entity/signs/").toString()},[{from:[-4,4,17],to:[20,16,19],faces:{north:{uv:[.5,1,6.5,7],texture:"#0"},east:{uv:[0,1,.5,7],texture:"#0"},south:{uv:[7,1,13,7],texture:"#0"},west:{uv:[6.5,1,7,7],texture:"#0"},up:{uv:[6.5,1,.5,0],texture:"#0"},down:{uv:[12.5,0,6.5,1],texture:"#0"}}}]).getMesh(B,mt.none())}n.wallSignRenderer=c;function l(R){return(B,q)=>B?new gt(void 0,{0:R.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[2,10,8],to:[14,16,8],faces:{north:{uv:[3.5,3,6.5,6],texture:"#0"},south:{uv:[3.5,3,6.5,6],texture:"#0"}}}]).getMesh(q,mt.none()):new gt(void 0,{0:R.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,16,8],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[3,10,6.5],to:[3,16,9.5],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,16,8],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[13,10,6.5],to:[13,16,9.5],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}}]).getMesh(q,mt.none())}n.hangingSignRenderer=l;function u(R){return B=>new gt(void 0,{0:`entity/signs/hanging/${R}`},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[0,14,6],to:[16,16,10],faces:{north:{uv:[1,2,5,3],texture:"#0"},east:{uv:[0,2,1,3],texture:"#0"},south:{uv:[6,2,10,3],texture:"#0"},west:{uv:[5,2,6,3],texture:"#0"},up:{uv:[5,2,1,0],texture:"#0"},down:{uv:[9,0,5,2],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,16,8],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[3,10,6.5],to:[3,16,9.5],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,16,8],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[13,10,6.5],to:[13,16,9.5],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}}]).getMesh(B,mt.none())}n.wallHangingSignRenderer=u;function f(R){return new gt(void 0,{0:"entity/conduit/base"},[{from:[5,5,5],to:[11,11,11],faces:{north:{uv:[3,6,6,12],texture:"#0"},east:{uv:[0,6,3,12],texture:"#0"},south:{uv:[9,6,12,12],texture:"#0"},west:{uv:[6,6,9,12],texture:"#0"},up:{uv:[6,6,3,0],texture:"#0"},down:{uv:[9,0,6,6],texture:"#0"}}}]).getMesh(R,mt.none())}n.conduitRenderer=f;function d(R){return B=>new gt(void 0,{0:R.withPrefix("entity/shulker/").toString()},[{from:[0,0,0],to:[16,8,16],faces:{north:{uv:[4,11,8,13],texture:"#0"},east:{uv:[0,11,4,13],texture:"#0"},south:{uv:[12,11,16,13],texture:"#0"},west:{uv:[8,11,12,13],texture:"#0"},up:{uv:[8,11,4,7],texture:"#0"},down:{uv:[12,7,8,11],texture:"#0"}}},{from:[0,4,0],to:[16,16,16],faces:{north:{uv:[4,4,8,7],texture:"#0"},east:{uv:[0,4,4,7],texture:"#0"},south:{uv:[12,4,16,7],texture:"#0"},west:{uv:[8,4,12,7],texture:"#0"},up:{uv:[8,4,4,0],texture:"#0"},down:{uv:[12,0,8,4],texture:"#0"}}}]).getMesh(B,mt.none())}n.shulkerBoxRenderer=d;const h=R=>({north:{uv:[.25,.25,5.25,10.25],texture:`#${R}`,tintindex:R},east:{uv:[0,.25,.25,10.25],texture:`#${R}`,tintindex:R},south:{uv:[5.5,.25,10.5,10.25],texture:`#${R}`,tintindex:R},west:{uv:[5.25,.25,5.5,10.25],texture:`#${R}`,tintindex:R},up:{uv:[5.25,.25,.25,0],texture:`#${R}`,tintindex:R},down:{uv:[10.25,0,5.25,.25],texture:`#${R}`,tintindex:R}});function g(R,B){return(q,V)=>{const J={0:"entity/banner_base"},te=[...B.base],ue=[R];return V==null||V.forEach((Me,Ie)=>{const Z=K.parse(Me.getString("pattern")).path,se=Me.getString("color");Ie++,J[Ie]=`entity/banner/${Z}`,te.push(B.pattern(Ie)),ue.push(se)}),new gt(void 0,J,te).getMesh(q,mt.none(),Me=>ps[ue[Me]])}}n.bannerRenderer=R=>g(R,{base:[{from:[-2,-8,6],to:[18,32,7],faces:h(0)},{from:[7,-12,7],to:[9,30,9],faces:{north:{uv:[11.5,.5,12,11],texture:"#0"},east:{uv:[11,.5,11.5,11],texture:"#0"},south:{uv:[12.5,.5,13,11],texture:"#0"},west:{uv:[12,.5,12.5,11],texture:"#0"},up:{uv:[12,.5,11.5,0],texture:"#0"},down:{uv:[12.5,0,12,.5],texture:"#0"}}},{from:[-2,30,7],to:[18,32,9],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:B=>({from:[-2,-8,6],to:[18,32,7],faces:h(B)})}),n.wallBannerRenderer=R=>g(R,{base:[{from:[-2,-8,-1.5],to:[18,32,-.5],faces:h(0)},{from:[-2,30,-3.5],to:[18,32,-1.5],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:B=>({from:[-2,-8,-1.5],to:[18,32,-.5],faces:h(B)})});function _(R){return new gt(void 0,{0:"entity/bell/bell_body"},[{from:[5,3,5],to:[11,10,11],faces:{north:{uv:[3,3,6,6.5],texture:"#0"},east:{uv:[0,3,3,6.5],texture:"#0"},south:{uv:[9,3,12,6.5],texture:"#0"},west:{uv:[6,3,9,6.5],texture:"#0"},up:{uv:[6,3,3,0],texture:"#0"},down:{uv:[9,0,6,3],texture:"#0"}}},{from:[4,10,4],to:[12,12,12],faces:{north:{uv:[4,10.5,8,11.5],texture:"#0"},east:{uv:[0,10.5,4,11.5],texture:"#0"},south:{uv:[12,10.5,16,11.5],texture:"#0"},west:{uv:[8,10.5,12,11.5],texture:"#0"},up:{uv:[8,10.5,4,6.5],texture:"#0"},down:{uv:[12,6.5,8,10.5],texture:"#0"}}}]).getMesh(R,mt.none())}n.bellRenderer=_;function m(R){return(B,q)=>B==="foot"?new gt(void 0,{0:R.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{north:{uv:[5.5,5.5,9.5,7],rotation:180,texture:"#0"},east:{uv:[0,7,1.5,11],rotation:270,texture:"#0"},west:{uv:[5.5,7,7,11],rotation:90,texture:"#0"},up:{uv:[5.5,11,1.5,7],texture:"#0"},down:{uv:[11,7,7,11],texture:"#0"}}},{from:[0,0,0],to:[3,3,3],faces:{north:{uv:[12.5,5.25,13.25,6],texture:"#0"},east:{uv:[14.75,5.25,15.5,6],texture:"#0"},south:{uv:[14,5.25,14.75,6],texture:"#0"},west:{uv:[13.25,5.25,14,6],texture:"#0"},up:{uv:[13.25,4.5,14,5.25],texture:"#0"},down:{uv:[14,4.5,14.75,5.25],texture:"#0"}}},{from:[13,0,0],to:[16,3,3],faces:{north:{uv:[13.25,3.75,14,4.5],texture:"#0"},east:{uv:[12.5,3.75,13.25,4.5],texture:"#0"},south:{uv:[14.75,3.75,15.5,4.5],texture:"#0"},west:{uv:[14,3.75,14.75,4.5],texture:"#0"},up:{uv:[13.25,3,14,3.75],texture:"#0"},down:{uv:[14,3,14.75,3.75],texture:"#0"}}}]).getMesh(q,mt.none()):new gt(void 0,{0:R.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{east:{uv:[0,1.5,1.5,5.5],rotation:270,texture:"#0"},south:{uv:[1.5,0,5.5,1.5],rotation:180,texture:"#0"},west:{uv:[5.5,1.5,7,5.5],rotation:90,texture:"#0"},up:{uv:[5.5,5.5,1.5,1.5],texture:"#0"},down:{uv:[11,1.5,7,5.5],texture:"#0"}}},{from:[0,0,13],to:[3,3,16],faces:{north:{uv:[14.75,.75,15.5,1.5],texture:"#0"},east:{uv:[14,.75,14.75,1.5],texture:"#0"},south:{uv:[13.25,.75,14,1.5],texture:"#0"},west:{uv:[12.5,.75,13.25,1.5],texture:"#0"},up:{uv:[13.25,0,14,.75],texture:"#0"},down:{uv:[14,0,14.75,.75],texture:"#0"}}},{from:[13,0,13],to:[16,3,16],faces:{north:{uv:[14,2.25,14.75,3],texture:"#0"},east:{uv:[13.25,2.25,14,3],texture:"#0"},south:{uv:[12.5,2.25,13.25,3],texture:"#0"},west:{uv:[14.75,2.25,15.5,3],texture:"#0"},up:{uv:[13.25,1.5,14,2.25],texture:"#0"},down:{uv:[14,1.5,14.75,2.25],texture:"#0"}}}]).getMesh(q,mt.none())}n.bedRenderer=m;function p(R,B,q=""){return R.getProperty(B)??q}function M(R,B,q="0"){return parseInt(R.getProperty(B)??q)}const x=new Map(Object.entries({"minecraft:chest":n.chestRenderer(K.create("normal")),"minecraft:ender_chest":n.chestRenderer(K.create("ender")),"minecraft:trapped_chest":n.chestRenderer(K.create("trapped"))})),y=new Map(Object.entries({"minecraft:skeleton_skull":n.headRenderer(K.create("skeleton/skeleton"),2),"minecraft:wither_skeleton_skull":n.headRenderer(K.create("skeleton/wither_skeleton"),2),"minecraft:zombie_head":n.headRenderer(K.create("zombie/zombie"),1),"minecraft:creeper_head":n.headRenderer(K.create("creeper/creeper"),2),"minecraft:dragon_head":n.dragonHeadRenderer(),"minecraft:piglin_head":n.piglinHeadRenderer(),"minecraft:player_head":n.headRenderer(K.create("player/wide/steve"),1)})),P=["oak","spruce","birch","jungle","acacia","dark_oak","mangrove","cherry","bamboo","crimson","warped"],A=new Map(P.map(R=>[`minecraft:${R}_sign`,n.signRenderer(K.create(R))])),E=new Map(P.map(R=>[`minecraft:${R}_wall_sign`,n.wallSignRenderer(K.create(R))])),U=new Map(P.map(R=>[`minecraft:${R}_hanging_sign`,n.hangingSignRenderer(K.create(R))])),w=new Map(P.map(R=>[`minecraft:${R}_wall_hanging_sign`,n.wallHangingSignRenderer(R)])),v=new Map(Object.keys(ps).map(R=>[`minecraft:${R}_shulker_box`,n.shulkerBoxRenderer(K.create(`shulker_${R}`))])),D=new Map(Object.keys(ps).map(R=>[`minecraft:${R}_bed`,n.bedRenderer(K.create(R))])),z=new Map(Object.keys(ps).map(R=>[`minecraft:${R}_banner`,n.bannerRenderer(R)])),I=new Map(Object.keys(ps).map(R=>[`minecraft:${R}_wall_banner`,n.wallBannerRenderer(R)]));function H(R,B,q,V){const J=new dt;R.is("water")&&J.merge(_l("water",M(R,"level"),q,V,0)),R.is("lava")&&J.merge(_l("lava",M(R,"level"),q,V));const te=x.get(R.getName().toString());if(te!==void 0){const me=p(R,"facing","south"),j=nt();ke(j,j,[8,8,8]),Nt(j,j,me==="west"?Math.PI/2:me==="south"?Math.PI:me==="east"?Math.PI*3/2:0),ke(j,j,[-8,-8,-8]),J.merge(te(q).transform(j))}R.is("decorated_pot")&&J.merge(t(q));const ue=y.get(R.getName().toString());if(ue!==void 0){const me=M(R,"rotation")/16*Math.PI*2,j=nt();ke(j,j,[8,8,8]),Nt(j,j,me),ke(j,j,[-8,-8,-8]),J.merge(ue(q).transform(j))}const Me=A.get(R.getName().toString());if(Me!==void 0){const me=M(R,"rotation")/16*Math.PI*2,j=nt();ke(j,j,[8,8,8]),Nt(j,j,me),ln(j,j,[2/3,2/3,2/3]),ke(j,j,[-8,-8,-8]),J.merge(Me(q).transform(j))}const Ie=E.get(R.getName().toString());if(Ie!==void 0){const me=p(R,"facing","south"),j=nt();ke(j,j,[8,8,8]),Nt(j,j,me==="west"?Math.PI/2:me==="south"?Math.PI:me==="east"?Math.PI*3/2:0),ln(j,j,[2/3,2/3,2/3]),ke(j,j,[-8,-8,-8]),J.merge(Ie(q).transform(j))}const Z=U.get(R.getName().toString());if(Z!==void 0){const me=p(R,"attached","false")==="true",j=M(R,"rotation")/16*Math.PI*2,Ae=nt();ke(Ae,Ae,[8,8,8]),Nt(Ae,Ae,j),ln(Ae,Ae,[2/3,2/3,2/3]),ke(Ae,Ae,[-8,-8,-8]),J.merge(Z(me,q).transform(Ae))}const se=w.get(R.getName().toString());if(se!==void 0){const me=p(R,"facing","south"),j=nt();ke(j,j,[8,8,8]),Nt(j,j,me==="west"?Math.PI/2:me==="south"?Math.PI:me==="east"?Math.PI*3/2:0),ke(j,j,[-8,-8,-8]),J.merge(se(q).transform(j))}R.is("conduit")&&J.merge(f(q));const ge=v.get(R.getName().toString());if(ge!==void 0){const me=p(R,"facing","up"),j=nt();ke(j,j,[8,8,8]),me==="down"?Ds(j,j,Math.PI):me!=="up"&&(Nt(j,j,me==="east"?Math.PI/2:me==="north"?Math.PI:me==="west"?Math.PI*3/2:0),Ds(j,j,Math.PI/2)),ke(j,j,[-8,-8,-8]),J.merge(ge(q).transform(j))}if(R.is("bell")){const me=nt();ke(me,me,[8,8,8]),ln(me,me,[1,-1,-1]),ke(me,me,[-8,-8,-8]),J.merge(_(q).transform(me))}const oe=D.get(R.getName().toString());if(oe!==void 0){const me=p(R,"part","head"),j=p(R,"facing","south"),Ae=nt();ke(Ae,Ae,[8,8,8]),Nt(Ae,Ae,j==="east"?Math.PI/2:j==="north"?Math.PI:j==="west"?Math.PI*3/2:0),ke(Ae,Ae,[-8,-8,-8]),J.merge(oe(me,q).transform(Ae))}const Le=z.get(R.getName().toString());if(Le!==void 0){const me=M(R,"rotation")/16*Math.PI*2,j=nt();ke(j,j,[8,24,8]),Nt(j,j,me),ln(j,j,[2/3,2/3,2/3]),ke(j,j,[-8,-24,-8]),J.merge(Le(q,B==null?void 0:B.getList("patterns",ce.Compound)).transform(j))}const Ce=I.get(R.getName().toString());if(Ce!==void 0){const me=p(R,"facing","south"),j=nt();ke(j,j,[8,8,8]),Nt(j,j,me==="east"?Math.PI/2:me==="north"?Math.PI:me==="west"?Math.PI*3/2:0),ln(j,j,[2/3,2/3,2/3]),ke(j,j,[-8,-23.2,-8]),J.merge(Ce(q,B==null?void 0:B.getList("patterns",ce.Compound)).transform(j))}!R.is("water")&&!R.is("lava")&&R.isWaterlogged()&&J.merge(_l("water",0,q,V,0));const O=nt();return ln(O,O,[.0625,.0625,.0625]),J.transform(O)}n.getBlockMesh=H})(vt||(vt={}));class od{constructor(e,t,i,r=16,s=!0){C(this,"gl");C(this,"structure");C(this,"resources");C(this,"chunks",[]);C(this,"chunkSize");C(this,"meshesDirty",!0);C(this,"meshCache",[]);C(this,"emissiveLights",[]);C(this,"emissiveLightsByChunk",new Map);C(this,"emissiveDirty",!0);C(this,"blockPropsCache",new WeakMap);C(this,"buildToken",0);this.gl=e,this.structure=t,this.resources=i,this.chunkSize=typeof r=="number"?[r,r,r]:r,s&&this.updateStructureBuffers()}setStructure(e,t){this.structure=e,(t==null?void 0:t.rebuild)!==!1&&this.updateStructureBuffers()}updateStructureBuffers(e){if(!this.structure)return;this.buildToken+=1;const t=this.buildChunkFilter(e);this.markDirty(),this.prepareRebuild(e);for(const i of this.structure.getBlocks())this.processBlock(i,t);this.finalizeRebuild(e)}async updateStructureBuffersAsync(e){var c,l;if(!this.structure)return;const t=++this.buildToken,i=this.buildChunkFilter(e==null?void 0:e.chunkPositions);this.markDirty(),this.prepareRebuild(e==null?void 0:e.chunkPositions);const r=this.structure.getBlocks(),s=r.length,a=(e==null?void 0:e.timeSliceMs)??8;let o=this.now();for(let u=0;u<r.length;u++){if(t!==this.buildToken)return;this.processBlock(r[u],i),!(u&1023)&&this.now()-o>=a&&((c=e==null?void 0:e.onProgress)==null||c.call(e,u+1,s),await this.yieldControl(),o=this.now())}t===this.buildToken&&(await this.finalizeRebuildAsync(e==null?void 0:e.chunkPositions,a),(l=e==null?void 0:e.onProgress)==null||l.call(e,s,s))}getMeshes(){return this.getMeshEntries().map(e=>e.mesh)}cancelPendingBuilds(){this.buildToken+=1}getMeshesInRange(e,t){return this.getMeshEntriesInRange(e,t).map(i=>i.mesh)}getMeshEntries(){return(this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),this.meshCache}getMeshEntriesInRange(e,t){if((this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),t===void 0)return this.meshCache;const i=t*t;return this.meshCache.filter(s=>{const a=[s.origin[0]+this.chunkSize[0]*.5,s.origin[1]+this.chunkSize[1]*.5,s.origin[2]+this.chunkSize[2]*.5],o=a[0]-e[0],c=a[1]-e[1],l=a[2]-e[2];return o*o+c*c+l*l<=i})}needsCull(e,t){var s;const i=(s=this.structure.getBlock(Ut.towards(e.pos,t)))==null?void 0:s.state;if(!i)return!1;const r=this.resources.getBlockFlags(i.getName());return e.state.getName().equals(i.getName())&&(r!=null&&r.self_culling)?!0:r!=null&&r.opaque?!(t===et.UP&&e.state.isWaterlogged()):e.state.isWaterlogged()&&i.isWaterlogged()}isFullyOccluded(e){var i;const t=[et.UP,et.DOWN,et.NORTH,et.SOUTH,et.EAST,et.WEST];for(const r of t){const s=(i=this.structure.getBlock(Ut.towards(e.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=this.resources.getBlockFlags(s.getName());if(!(a!=null&&a.opaque))return!1}return!0}finishChunkMesh(e,t,i,r,s){const a=nt();ke(a,a,t),e.transform(a);const o=this.resources.getBlockFlags(i);let c=0;if(o!=null&&o.emissive){const l=o.emissiveConditional;if(l){const u=r[l];(u===void 0||u==="true")&&(c=o.emissiveIntensity??1)}else c=o.emissiveIntensity??1}if(c>0){const l=this.emissiveLightsByChunk.get(s)??[];l.push({position:[t[0]+.5,t[1]+.5,t[2]+.5],intensity:c,color:[1,.85,.6]}),this.emissiveLightsByChunk.set(s,l),this.emissiveDirty=!0}for(const l of e.quads){const u=l.normal();l.forEach(f=>{f.normal=u,f.blockPos=new Lt(t[0],t[1],t[2]),f.emissive=c})}}getEmissiveLights(){if(this.emissiveDirty){const e=[];this.emissiveLightsByChunk.forEach(t=>e.push(...t)),this.emissiveLights=e,this.emissiveDirty=!1}return this.emissiveLights}clearEmissiveLights(e){const t=this.chunkKey(e);this.emissiveLightsByChunk.has(t)&&(this.emissiveLightsByChunk.delete(t),this.emissiveDirty=!0)}prepareRebuild(e){if(!e){this.emissiveLightsByChunk.clear(),this.emissiveLights=[],this.emissiveDirty=!0,this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.clear(),r.transparentMesh.clear())})));return}e.forEach(t=>this.clearEmissiveLights(t)),e.forEach(t=>{const i=this.getChunk(t);i.mesh.clear(),i.transparentMesh.clear()})}finalizeRebuild(e){if(!e){this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),r.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}))})));return}e.forEach(t=>{const i=this.getChunk(t);i.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),i.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW})})}async finalizeRebuildAsync(e,t=8){let i=this.now();const r=async()=>{this.now()-i>=t&&(await this.yieldControl(),i=this.now())};if(!e){for(const s of this.chunks)if(s){for(const a of s)if(a)for(const o of a)o&&(o.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),o.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r())}return}for(const s of e){const a=this.getChunk(s);a.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),a.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r()}}processBlock(e,t){var c;const i=e.state.getName(),r=this.getBlockProps(e.state);if(this.isFullyOccluded(e))return;const s=[Math.floor(e.pos[0]/this.chunkSize[0]),Math.floor(e.pos[1]/this.chunkSize[1]),Math.floor(e.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(t&&!t.has(a))return;const o=this.getChunk(s);try{const l=this.resources.getBlockDefinition(i),u={up:this.needsCull(e,et.UP),down:this.needsCull(e,et.DOWN),west:this.needsCull(e,et.WEST),east:this.needsCull(e,et.EAST),north:this.needsCull(e,et.NORTH),south:this.needsCull(e,et.SOUTH)},f=new dt;l&&f.merge(l.getMesh(i,r,this.resources,this.resources,u));const d=vt.getBlockMesh(e.state,e.nbt,this.resources,u);d.isEmpty()||f.merge(d),f.isEmpty()||(this.finishChunkMesh(f,e.pos,i,r,a),(c=this.resources.getBlockFlags(e.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(f):o.mesh.merge(f))}catch(l){console.error(`Error rendering block ${i}`,l)}}getBlockProps(e){const t=this.blockPropsCache.get(e);if(t)return t;const i={...e.getProperties()},r=this.resources.getDefaultBlockProperties(e.getName())??{};return Object.entries(r).forEach(([s,a])=>{i[s]===void 0&&(i[s]=a)}),this.blockPropsCache.set(e,i),i}buildChunkFilter(e){if(!e)return null;const t=new Set;return e.forEach(i=>{t.add(this.chunkKey(i))}),t}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}chunkKey(e){return`${e[0]},${e[1]},${e[2]}`}getChunk(e){const t=Math.abs(e[0])*2+(e[0]<0?1:0),i=Math.abs(e[1])*2+(e[1]<0?1:0),r=Math.abs(e[2])*2+(e[2]<0?1:0);if(this.chunks[t]||(this.chunks[t]=[]),this.chunks[t][i]||(this.chunks[t][i]=[]),!this.chunks[t][i][r]){const s=[e[0]*this.chunkSize[0],e[1]*this.chunkSize[1],e[2]*this.chunkSize[2]];this.chunks[t][i][r]={mesh:new dt,transparentMesh:new dt,origin:s}}return this.chunks[t][i][r]}rebuildMeshCache(){const e=[],t=[];this.chunks.forEach(i=>i.forEach(r=>r.forEach(s=>{s&&(s.mesh.isEmpty()||e.push({mesh:s.mesh,origin:s.origin,transparent:!1}),s.transparentMesh.isEmpty()||t.push({mesh:s.transparentMesh,origin:s.origin,transparent:!0}))}))),this.meshCache=e.concat(t),this.meshesDirty=!1}markDirty(){this.meshesDirty=!0,this.meshCache=[]}}class ld{constructor(e,t,i){C(this,"gl");C(this,"program");this.gl=e,this.program=this.initShaderProgram(t,i)}getProgram(){return this.program}initShaderProgram(e,t){const i=this.loadShader(this.gl.VERTEX_SHADER,e);if(!i)throw new Error("Failed to create vertex shader");const r=this.loadShader(this.gl.FRAGMENT_SHADER,t);if(!r)throw new Error("Failed to create fragment shader");const s=this.gl.createProgram();if(!s)throw new Error("Failed to create shader program");if(this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS))throw new Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(s)}`);return s}loadShader(e,t){const i=this.gl.createShader(e);if(!i)throw new Error("Failed to create shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)){const r=new Error(`Compiling ${e===this.gl.VERTEX_SHADER?"vertex":"fragment"} shader: ${this.gl.getShaderInfoLog(i)}`);throw this.gl.deleteShader(i),r}return i}}const my=`
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
`,gy=`
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
`;class cd{constructor(e){C(this,"gl");C(this,"shaderProgram");C(this,"projMatrix");C(this,"activeShader");C(this,"pixelSize",0);this.gl=e,this.shaderProgram=new ld(e,my,gy).getProgram(),this.activeShader=this.shaderProgram,this.projMatrix=this.getPerspective(),this.initialize()}setViewport(e,t,i,r){this.gl.viewport(e,t,i,r),this.projMatrix=this.getPerspective()}getPerspective(){const e=70*Math.PI/180,t=this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,i=nt();return JS(i,e,t,.1,500),i}initialize(){this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK)}setShader(e){this.gl.useProgram(e),this.activeShader=e}setVertexAttr(e,t,i){if(i===void 0)throw new Error(`Expected buffer for ${e}`);const r=this.gl.getAttribLocation(this.activeShader,e);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.vertexAttribPointer(r,t,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(r)}setUniform(e,t){const i=this.gl.getUniformLocation(this.activeShader,e);this.gl.uniformMatrix4fv(i,!1,t)}setTexture(e,t){this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.pixelSize=t??0}createAtlasTexture(e){const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture");return this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),t}prepareDraw(e){this.setUniform("mView",e),this.setUniform("mProj",this.projMatrix);const t=this.gl.getUniformLocation(this.activeShader,"pixelSize");this.gl.uniform1f(t,this.pixelSize)}drawMesh(e,t){if(e.quadVertices()>0){if(t.pos&&this.setVertexAttr("vertPos",3,e.posBuffer),t.color&&this.setVertexAttr("vertColor",3,e.colorBuffer),t.texture&&(this.setVertexAttr("texCoord",2,e.textureBuffer),this.setVertexAttr("texLimit",4,e.textureLimitBuffer)),t.normal&&this.setVertexAttr("normal",3,e.normalBuffer),t.blockPos&&this.setVertexAttr("blockPos",3,e.blockPosBuffer),!e.indexBuffer)throw new Error("Expected index buffer");this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,e.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,e.quadIndices(),e.indexType??this.gl.UNSIGNED_SHORT,0)}e.lineVertices()>0&&(t.pos&&this.setVertexAttr("vertPos",3,e.linePosBuffer),t.color&&this.setVertexAttr("vertColor",3,e.lineColorBuffer),this.gl.drawArrays(this.gl.LINES,0,e.lineVertices()))}}class mo extends cd{constructor(t,i,r,s={}){super(t);C(this,"item");C(this,"resources");C(this,"mesh");C(this,"atlasTexture");this.item=i,this.resources=r,this.updateMesh(s),this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas())}setItem(t,i={}){this.item=t,this.updateMesh(i)}updateMesh(t={}){this.mesh=mo.getItemMesh(this.item,this.resources,t),this.mesh.computeNormals(),this.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0})}static getItemMesh(t,i,r){var c;const s=(c=t.getComponent("item_model",i))==null?void 0:c.getAsString();if(s===void 0)return new dt;const a=i.getItemModel(K.parse(s));if(!a)throw new Error(`Item model ${s} does not exist (defined by item ${t.toString()})`);return a.getMesh(t,i,r)}getPerspective(){const t=nt();return ey(t,0,16,0,16,.1,500),t}drawItem(){var i,r;const t=nt();ke(t,t,[0,0,-32]),this.setShader(this.shaderProgram),this.setTexture(this.atlasTexture,(r=(i=this.resources).getPixelSize)==null?void 0:r.call(i)),this.prepareDraw(t),this.drawMesh(this.mesh,{pos:!0,color:!0,texture:!0,normal:!0})}}const Yi=[0,0,0];var eo;(function(n){function e(u){var h;const f=Q.readObject(u)??{},d=(h=Q.readString(f.type))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"constant":return new t(Xe.fromJson(f.value)??Yi);case"dye":return new i(Xe.fromJson(f.default)??Yi);case"grass":return new r(Q.readNumber(f.temperature)??0,Q.readNumber(f.downfall)??0);case"firework":return new s(Xe.fromJson(f.default)??Yi);case"potion":return new a(Xe.fromJson(f.default)??Yi);case"map_color":return new o(Xe.fromJson(f.default)??Yi);case"custom_model_data":return new c(Q.readInt(f.index)??0,Xe.fromJson(f.default)??Yi);case"team":return new l(Xe.fromJson(f.default)??Yi);default:throw new Error(`Invalid item tint type ${d}`)}}n.fromJson=e;class t{constructor(f){C(this,"value");this.value=f}getTint(f){return this.value}}n.Constant=t;class i{constructor(f){C(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("dyed_color",d);return h?h.isCompound()?Xe.intToRgb(h.getNumber("rgb")):Xe.intToRgb(h.getAsNumber()):this.default_color}}n.Dye=i;class r{constructor(f,d){C(this,"temperature");C(this,"downfall");this.temperature=f,this.downfall=d}getTint(f){return[124/255,189/255,107/255]}}n.Grass=r;class s{constructor(f){C(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("firework_explosion",d);if(!(h!=null&&h.isCompound()))return this.default_color;const g=h.get("colors");return!g||!g.isListOrArray()?this.default_color:(()=>{if(g.length===1){const x=g.get(0);return x?Xe.intToRgb(x.getAsNumber()):this.default_color}let[m,p,M]=[0,0,0];for(const x of g.getItems())m+=(x.getAsNumber()&16711680)>>16,p+=(x.getAsNumber()&65280)>>8,M+=(x.getAsNumber()&255)>>0;return m/=g.length,p/=g.length,M/=g.length,[m/255,p/255,M/255]})()}}n.Firework=s;class a{constructor(f){C(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("potion_contents",d);if(!h)return this.default_color;const g=Ls.fromNbt(h);return Ls.getColor(g)}}n.Potion=a;class o{constructor(f){C(this,"default_color");this.default_color=f}getTint(f,d){const h=f.getComponent("map_color",d);return h?Xe.intToRgb(h.getAsNumber()):this.default_color}}n.MapColor=o;class c{constructor(f,d){C(this,"index");C(this,"default_color");this.index=f,this.default_color=d}getTint(f,d){const h=f.getComponent("custom_model_data",d);if(!(h!=null&&h.isCompound()))return this.default_color;const g=h.getList("colors").get(this.index);return g?Xe.fromNbt(g)??this.default_color:this.default_color}}n.CustomModelData=c;class l{constructor(f){C(this,"default_color");this.default_color=f}getTint(f,d,h){return h.context_entity_team_color??this.default_color}}n.Team=l})(eo||(eo={}));var Vl;(function(n){function e(h){var m;const g=Q.readObject(h)??{},_=(m=Q.readString(g.type))==null?void 0:m.replace(/^minecraft:/,"");switch(_){case"bed":return new t(K.parse(Q.readString(g.texture)??""));case"banner":return new i(Q.readString(g.color)??"");case"conduit":return new r;case"chest":return new s(K.parse(Q.readString(g.texture)??""),Q.readNumber(g.openness)??0);case"head":return new a(Q.readString(g.kind)??"",typeof g.texture=="string"?K.parse(g.texture):void 0,Q.readNumber(g.animation)??0);case"player_head":return new a("player",void 0,0);case"shulker_box":return new o(K.parse(Q.readString(g.texture)??""),Q.readNumber(g.openness)??0,Q.readString(g.orientation)??"up");case"shield":return new c;case"trident":return new l;case"decorated_pot":return new u;case"standing_sign":return new f(Q.readString(g.wood_type)??"",typeof g.texture=="string"?K.parse(g.texture):void 0);case"hanging_sign":return new d(Q.readString(g.wood_type)??"",typeof g.texture=="string"?K.parse(g.texture):void 0);default:return console.warn(`[lodestone]: Unknown special model ${_}`),{getMesh:()=>new dt}}}n.fromJson=e;class t{constructor(g){C(this,"renderer");this.renderer=vt.bedRenderer(g)}getMesh(g,_){const m=this.renderer("head",_),p=this.renderer("foot",_),M=nt();return ke(M,M,[0,0,-16]),m.merge(p.transform(M))}}class i{constructor(g){C(this,"renderer");this.renderer=vt.bannerRenderer(g)}getMesh(g,_){const m=g.getComponent("banner_patterns",void 0),p=nt();return ke(p,p,[8,24,8]),Nt(p,p,Math.PI),ln(p,p,[2/3,2/3,2/3]),ke(p,p,[-8,-24,-8]),this.renderer(_,m instanceof Yt?m:void 0).transform(p)}}class r{getMesh(g,_){return vt.conduitRenderer(_)}}class s{constructor(g,_){C(this,"renderer");this.renderer=vt.chestRenderer(g)}getMesh(g,_){const m=nt();return ke(m,m,[8,8,8]),Nt(m,m,Math.PI),ke(m,m,[-8,-8,-8]),this.renderer(_).transform(m)}}class a{constructor(g,_,m){C(this,"renderer");this.renderer=({skeleton:()=>vt.headRenderer(_??K.create("skeleton/skeleton"),2),wither_skeleton:()=>vt.headRenderer(_??K.create("skeleton/wither_skeleton"),2),zombie:()=>vt.headRenderer(_??K.create("zombie/zombie"),1),creeper:()=>vt.headRenderer(_??K.create("creeper/creeper"),2),dragon:()=>vt.dragonHeadRenderer(_),piglin:()=>vt.piglinHeadRenderer(_),player:()=>vt.headRenderer(_??K.create("player/wide/steve"),1)}[g]??(()=>()=>new dt))()}getMesh(g,_){return this.renderer(_)}}class o{constructor(g,_,m){C(this,"renderer");this.renderer=vt.shulkerBoxRenderer(g)}getMesh(g,_){return this.renderer(_)}}class c{getMesh(g,_){const m=vt.shieldRenderer(_),p=nt();return ke(p,p,[-3,1,0]),Ds(p,p,-10*Math.PI/180),Nt(p,p,-10*Math.PI/180),td(p,p,-5*Math.PI/180),m.transform(p)}}class l{getMesh(g,_){return new dt}}class u{getMesh(g,_){return vt.decoratedPotRenderer(_)}}class f{constructor(g,_){C(this,"renderer");this.renderer=vt.signRenderer(_??K.create(g))}getMesh(g,_){return this.renderer(_)}}class d{constructor(g,_){C(this,"renderer");this.renderer=vt.hangingSignRenderer(_??K.create(g))}getMesh(g,_){return this.renderer(!1,_)}}})(Vl||(Vl={}));const Ph=new dt;var Wl;(function(n){function e(u){var h,g;const f=Q.readObject(u)??{},d=(h=Q.readString(f.type))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"empty":return new t;case"model":return new i(K.parse(Q.readString(f.model)??""),Q.readArray(f.tints,eo.fromJson)??[]);case"composite":return new r(Q.readArray(f.models,n.fromJson)??[]);case"condition":return new s(s.propertyFromJson(f),n.fromJson(f.on_true),n.fromJson(f.on_false));case"select":return new a(a.propertyFromJson(f),new Map((g=Q.readArray(f.cases,_=>Q.readObject(_)??{}))==null?void 0:g.flatMap(_=>{const m=n.fromJson(_.model);return Array.isArray(_.when)?_.when.map(p=>[Q.readString(p)??"",m]):[[Q.readString(_.when)??"",m]]})),f.fallback?n.fromJson(f.fallback):void 0);case"range_dispatch":return new o(o.propertyFromJson(f),Q.readNumber(f.scale)??1,Q.readArray(f.entries,_=>{const m=Q.readObject(_)??{};return{threshold:Q.readNumber(m.threshold)??0,model:n.fromJson(m.model)}})??[],f.fallback?n.fromJson(f.fallback):void 0);case"special":return new c(Vl.fromJson(f.model),K.parse(Q.readString(f.base)??""));case"bundle/selected_item":return new l;default:return console.warn(`[lodestone]: Unknown item model type '${d}'`),{getMesh:()=>new dt}}}n.fromJson=e;class t{getMesh(f,d,h){return new dt}}n.Empty=t;class i{constructor(f,d){C(this,"modelId");C(this,"tints");this.modelId=f,this.tints=d}getMesh(f,d,h){const g=d.getBlockModel(this.modelId);if(!g)return console.warn(`[lodestone]: Model '${this.modelId}' does not exist`),new dt;const _=p=>p<this.tints.length?this.tints[p].getTint(f,d,h):[1,1,1],m=g.getMesh(d,mt.none(),_);return m.transform(g.getDisplayTransform(h.display_context??"gui")),m}}n.Model=i;class r{constructor(f){C(this,"models");this.models=f}getMesh(f,d,h){const g=new dt;return this.models.forEach(_=>g.merge(_.getMesh(f,d,h))),g}}n.Composite=r;class s{constructor(f,d,h){C(this,"property");C(this,"onTrue");C(this,"onFalse");this.property=f,this.onTrue=d,this.onFalse=h}getMesh(f,d,h){return(this.property(f,d,h)?this.onTrue:this.onFalse).getMesh(f,d,h)}static propertyFromJson(f){var h;const d=(h=Q.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"fishing_rod/cast":case"selected":case"carried":case"extended_view":return(M,x,y)=>y[d]??!1;case"view_entity":return(M,x,y)=>y.context_entity_is_view_entity??!1;case"using_item":return(M,x,y)=>(y.use_duration??-1)>=0;case"bundle/has_selected_item":return(M,x,y)=>(y["bundle/selected_item"]??-1)>=0;case"broken":return(M,x,y)=>{var E,U;const P=(E=M.getComponent("damage",x))==null?void 0:E.getAsNumber(),A=(U=M.getComponent("max_damage",x))==null?void 0:U.getAsNumber();return P!==void 0&&A!==void 0&&P>=A-1};case"damaged":return(M,x,y)=>{var E,U;const P=(E=M.getComponent("damage",x))==null?void 0:E.getAsNumber(),A=(U=M.getComponent("max_damage",x))==null?void 0:U.getAsNumber();return P!==void 0&&A!==void 0&&P>=1};case"has_component":const g=K.parse(Q.readString(f.component)??""),_=Q.readBoolean(f.ignore_default)??!1;return(M,x,y)=>M.hasComponent(g,_?void 0:x);case"keybind_down":const m=Q.readString(f.keybind)??"";return(M,x,y)=>{var P;return((P=y.keybind_down)==null?void 0:P.includes(m))??!1};case"custom_model_data":const p=Q.readInt(f.index)??0;return(M,x,y)=>{const P=M.getComponent("custom_model_data",x);if(!(P!=null&&P.isCompound()))return!1;const A=P.getList("flags").getNumber(p);return A!==void 0&&A!==0};default:return console.warn(`[lodestone]: Unknown condition property '${d}'`),()=>!1}}}n.Condition=s;class a{constructor(f,d,h){C(this,"property");C(this,"cases");C(this,"fallback");this.property=f,this.cases=d,this.fallback=h}getMesh(f,d,h){var _;const g=this.property(f,d,h);return((_=(g!==null?this.cases.get(g):void 0)??this.fallback)==null?void 0:_.getMesh(f,d,h))??Ph}static propertyFromJson(f){var h;const d=(h=Q.readString(f.property))==null?void 0:h.replace(/^minecraft:/,"");switch(d){case"main_hand":return(p,M,x)=>x.main_hand??"right";case"display_context":return(p,M,x)=>x.display_context??"gui";case"context_dimension":return(p,M,x)=>{var y;return((y=x.context_dimension)==null?void 0:y.toString())??null};case"charge_type":const g=K.create("firework_rocket");return(p,M,x)=>{const y=p.getComponent("charged_projectiles",M);return!(y!=null&&y.isList())||y.length===0?"none":y.filter(P=>P.isCompound()?K.parse(P.getString("id")).equals(g):!1).length>0?"rocket":"arrow"};case"trim_material":return(p,M,x)=>{const y=p.getComponent("trim",M);return y!=null&&y.isCompound()?K.parse(y.getString("material")).toString():null};case"block_state":const _=Q.readString(f.block_state_property)??"";return(p,M,x)=>{const y=p.getComponent("block_state",M);return y!=null&&y.isCompound()?y.getString(_):null};case"local_time":return(p,M,x)=>"NOT IMPLEMENTED";case"context_entity_type":return(p,M,x)=>{var y;return((y=x.context_entity_type)==null?void 0:y.toString())??null};case"custom_model_data":const m=Q.readInt(f.index)??0;return(p,M,x)=>{const y=p.getComponent("custom_model_data",M);if(!(y!=null&&y.isCompound()))return null;const P=y.getList("strings");return P.length<=m?null:P.getString(m)};default:return console.warn(`[lodestone]: Unknown select property '${d}'`),()=>null}}}n.Select=a;class o{constructor(f,d,h,g){C(this,"property");C(this,"scale");C(this,"fallback");C(this,"entries");this.property=f,this.scale=d,this.fallback=g,this.entries=h.sort((_,m)=>_.threshold-m.threshold)}getMesh(f,d,h){const g=this.property(f,d,h)*this.scale;let _=this.fallback;for(const m of this.entries)if(m.threshold<=g)_=m.model;else break;return(_==null?void 0:_.getMesh(f,d,h))??Ph}static propertyFromJson(f){var g;const d=(g=Q.readString(f.property))==null?void 0:g.replace(/^minecraft:/,"");switch(d){case"bundle/fullness":let _=function(y,P){const A=y.getComponent("bundle_contents",P);return A!=null&&A.isListOrArray()?A.map(U=>U.isCompound()?ni.fromNbt(U):void 0).reduce((U,w)=>{var z;if(w===void 0)return U;if(w.hasComponent("bundle_contents",P))return U+_(w,P)+1/16;const v=w.getComponent("bees",P);if(v!=null&&v.isListOrArray()&&v.length>0)return U+1;const D=((z=w.getComponent("max_stack_size",P))==null?void 0:z.getAsNumber())??1;return U+w.count/D},0):0};var h=_;return(y,P,A)=>_(y,P);case"damage":{const y=Q.readBoolean(f.normalize)??!0;return(P,A,E)=>{var v,D;const U=((v=P.getComponent("max_damage",A))==null?void 0:v.getAsNumber())??0,w=wi(((D=P.getComponent("damage",A))==null?void 0:D.getAsNumber())??0,0,U);return y?U>0?wi(w/U,0,1):0:wi(w,0,U)}}case"count":{const y=Q.readBoolean(f.normalize)??!0;return(P,A,E)=>{var w;const U=((w=P.getComponent("max_stack_size",A))==null?void 0:w.getAsNumber())??1;return y?wi(P.count/U,0,1):wi(P.count,0,U)}}case"cooldown":return(y,P,A)=>{var v;const E=y.getComponent("use_cooldown",P),U=E!=null&&E.isCompound()?E.getString("cooldown_group"):"",w=E!=null&&E.isCompound()&&U?K.parse(U):y.id;return((v=A.cooldown_percentage)==null?void 0:v[w.toString()])??0};case"time":switch(Q.readString(f.source)??"daytime"){case"moon_phase":return(y,P,A)=>(A.game_time??0)/24e3%8/8;case"random":return(y,P,A)=>Math.random();default:return(y,P,A)=>{const U=(A.game_time??0)/24e3%1-.25,w=.5-Math.cos(U*Math.PI)/2;return(U*2+w)/3}}case"compass":return(y,P,A)=>A.compass_angle??0;case"crossbow/pull":return(y,P,A)=>A["crossbow/pull"]??0;case"use_duration":const p=Q.readBoolean(f.remaining)??!0;return(y,P,A)=>A.use_duration===void 0||A.use_duration<0?0:p?Math.max((A.max_use_duration??0)-A.use_duration,0):A.use_duration;case"use_cycle":const M=Q.readNumber(f.period)??1;return(y,P,A)=>A.use_duration===void 0||A.use_duration<0||M<=0?0:Math.max((A.max_use_duration??0)-(A.use_duration??0),0)%M;case"custom_model_data":const x=Q.readInt(f.index)??0;return(y,P,A)=>{const E=y.getComponent("custom_model_data",P);return E!=null&&E.isCompound()?E.getList("floats").getNumber(x):0};default:return console.warn(`[lodestone]: Unknown range dispatch property '${d}'`),()=>0}}}n.RangeDispatch=o;class c{constructor(f,d){C(this,"specialModel");C(this,"base");this.specialModel=f,this.base=d}getMesh(f,d,h){const g=this.specialModel.getMesh(f,d),_=d.getBlockModel(this.base);return _?(g.transform(_.getDisplayTransform(h.display_context??"gui")),g):(console.warn(`[lodestone]: Special model base '${this.base}' does not exist`),new dt)}}n.Special=c;class l{getMesh(f,d,h){const g=h["bundle/selected_item"];if(g===void 0||g<0)return new dt;const _=f.getComponent("bundle_contents",d);if(!(_!=null&&_.isListOrArray()))return new dt;const m=_.get(g);if(m===void 0||!m.isCompound())return new dt;const p=ni.fromNbt(m);return mo.getItemMesh(p,d,{...h,"bundle/selected_item":-1,selected:!1,carried:!1,use_duration:-1})}}n.BundleSelectedItem=l})(Wl||(Wl={}));const vl=256,Lh=2,_y=Lh*Lh,Ca=(n,e,t=1)=>{const i=new hf(n,Math.max(1,e),Math.max(1,t),Vt,An);return i.needsUpdate=!0,i.magFilter=St,i.minFilter=St,i.wrapS=Tn,i.wrapT=Tn,i.flipY=!1,i},ye={direction:[-.5,.25,.5],color:[1,.75,.45],ambientColor:[.25,.4,.6],fillColor:[.35,.28,.5],rimColor:[1,.55,.25],intensity:1.35,ambientIntensity:.55,fillIntensity:.3,rimIntensity:.55,horizonFalloff:.7,exposure:1.15,sky:{zenithColor:[.12,.28,.56],horizonColor:[1,.55,.25],groundColor:[.25,.2,.25],sunGlowColor:[1,.45,.15],sunGlowIntensity:.6,sunGlowExponent:6,stars:{enabled:!1,density:.003,brightness:.6}},disc:{size:35,distance:180,coreColor:[1,.98,.9],glowColor:[1,.55,.15],coreIntensity:2.8,glowIntensity:3.5,softness:.25},fog:{color:[.85,.6,.4],density:2e-4,heightFalloff:.001},shadow:{enabled:!0,mapSize:2048,bias:5e-4,normalBias:.02,intensity:.5,softness:3,frustumSize:100},postProcess:{enabled:!1,ao:{enabled:!0,intensity:.5,radius:.5,samples:16},bloom:{enabled:!1,threshold:.8,intensity:.4,radius:.6},godRays:{enabled:!1,intensity:.4,decay:.95,density:.8,samples:60}},emissive:{range:16,intensity:3.5,tint:[1,.85,.6]}};function Dh(n){var t,i,r,s,a,o,c,l,u,f,d,h,g,_,m,p,M,x,y,P,A,E,U,w,v,D,z,I,H,R,B,q,V,J,te,ue,Me,Ie,Z,se,ge,oe,Le,Ce,O,me,j,Ae,be,Be,Pe,We,at,L,b,$,ee,ne,re;const e=mi((n==null?void 0:n.direction)??wn(...ye.direction));return ny(e)<1e-5&&iy(e,0,1,0),nd(e,e),{direction:e,color:(n==null?void 0:n.color)??ye.color,ambientColor:(n==null?void 0:n.ambientColor)??ye.ambientColor,fillColor:(n==null?void 0:n.fillColor)??ye.fillColor,rimColor:(n==null?void 0:n.rimColor)??ye.rimColor,intensity:(n==null?void 0:n.intensity)??ye.intensity,ambientIntensity:(n==null?void 0:n.ambientIntensity)??ye.ambientIntensity,fillIntensity:(n==null?void 0:n.fillIntensity)??ye.fillIntensity,rimIntensity:(n==null?void 0:n.rimIntensity)??ye.rimIntensity,horizonFalloff:(n==null?void 0:n.horizonFalloff)??ye.horizonFalloff,exposure:(n==null?void 0:n.exposure)??ye.exposure,sky:{zenithColor:((t=n==null?void 0:n.sky)==null?void 0:t.zenithColor)??ye.sky.zenithColor,horizonColor:((i=n==null?void 0:n.sky)==null?void 0:i.horizonColor)??ye.sky.horizonColor,groundColor:((r=n==null?void 0:n.sky)==null?void 0:r.groundColor)??ye.sky.groundColor,sunGlowColor:((s=n==null?void 0:n.sky)==null?void 0:s.sunGlowColor)??ye.sky.sunGlowColor,sunGlowIntensity:((a=n==null?void 0:n.sky)==null?void 0:a.sunGlowIntensity)??ye.sky.sunGlowIntensity,sunGlowExponent:((o=n==null?void 0:n.sky)==null?void 0:o.sunGlowExponent)??ye.sky.sunGlowExponent,stars:{enabled:((l=(c=n==null?void 0:n.sky)==null?void 0:c.stars)==null?void 0:l.enabled)??ye.sky.stars.enabled,density:((f=(u=n==null?void 0:n.sky)==null?void 0:u.stars)==null?void 0:f.density)??ye.sky.stars.density,brightness:((h=(d=n==null?void 0:n.sky)==null?void 0:d.stars)==null?void 0:h.brightness)??ye.sky.stars.brightness}},disc:{size:((g=n==null?void 0:n.disc)==null?void 0:g.size)??ye.disc.size,distance:((_=n==null?void 0:n.disc)==null?void 0:_.distance)??ye.disc.distance,coreColor:((m=n==null?void 0:n.disc)==null?void 0:m.coreColor)??ye.disc.coreColor,glowColor:((p=n==null?void 0:n.disc)==null?void 0:p.glowColor)??ye.disc.glowColor,coreIntensity:((M=n==null?void 0:n.disc)==null?void 0:M.coreIntensity)??ye.disc.coreIntensity,glowIntensity:((x=n==null?void 0:n.disc)==null?void 0:x.glowIntensity)??ye.disc.glowIntensity,softness:((y=n==null?void 0:n.disc)==null?void 0:y.softness)??ye.disc.softness},fog:{color:((P=n==null?void 0:n.fog)==null?void 0:P.color)??ye.fog.color,density:((A=n==null?void 0:n.fog)==null?void 0:A.density)??ye.fog.density,heightFalloff:((E=n==null?void 0:n.fog)==null?void 0:E.heightFalloff)??ye.fog.heightFalloff},shadow:{enabled:((U=n==null?void 0:n.shadow)==null?void 0:U.enabled)??ye.shadow.enabled,mapSize:((w=n==null?void 0:n.shadow)==null?void 0:w.mapSize)??ye.shadow.mapSize,bias:((v=n==null?void 0:n.shadow)==null?void 0:v.bias)??ye.shadow.bias,normalBias:((D=n==null?void 0:n.shadow)==null?void 0:D.normalBias)??ye.shadow.normalBias,intensity:((z=n==null?void 0:n.shadow)==null?void 0:z.intensity)??ye.shadow.intensity,softness:((I=n==null?void 0:n.shadow)==null?void 0:I.softness)??ye.shadow.softness,frustumSize:((H=n==null?void 0:n.shadow)==null?void 0:H.frustumSize)??ye.shadow.frustumSize},postProcess:{enabled:((R=n==null?void 0:n.postProcess)==null?void 0:R.enabled)??ye.postProcess.enabled,ao:{enabled:((q=(B=n==null?void 0:n.postProcess)==null?void 0:B.ao)==null?void 0:q.enabled)??ye.postProcess.ao.enabled,intensity:((J=(V=n==null?void 0:n.postProcess)==null?void 0:V.ao)==null?void 0:J.intensity)??ye.postProcess.ao.intensity,radius:((ue=(te=n==null?void 0:n.postProcess)==null?void 0:te.ao)==null?void 0:ue.radius)??ye.postProcess.ao.radius,samples:((Ie=(Me=n==null?void 0:n.postProcess)==null?void 0:Me.ao)==null?void 0:Ie.samples)??ye.postProcess.ao.samples},bloom:{enabled:((se=(Z=n==null?void 0:n.postProcess)==null?void 0:Z.bloom)==null?void 0:se.enabled)??ye.postProcess.bloom.enabled,threshold:((oe=(ge=n==null?void 0:n.postProcess)==null?void 0:ge.bloom)==null?void 0:oe.threshold)??ye.postProcess.bloom.threshold,intensity:((Ce=(Le=n==null?void 0:n.postProcess)==null?void 0:Le.bloom)==null?void 0:Ce.intensity)??ye.postProcess.bloom.intensity,radius:((me=(O=n==null?void 0:n.postProcess)==null?void 0:O.bloom)==null?void 0:me.radius)??ye.postProcess.bloom.radius},godRays:{enabled:((Ae=(j=n==null?void 0:n.postProcess)==null?void 0:j.godRays)==null?void 0:Ae.enabled)??ye.postProcess.godRays.enabled,intensity:((Be=(be=n==null?void 0:n.postProcess)==null?void 0:be.godRays)==null?void 0:Be.intensity)??ye.postProcess.godRays.intensity,decay:((We=(Pe=n==null?void 0:n.postProcess)==null?void 0:Pe.godRays)==null?void 0:We.decay)??ye.postProcess.godRays.decay,density:((L=(at=n==null?void 0:n.postProcess)==null?void 0:at.godRays)==null?void 0:L.density)??ye.postProcess.godRays.density,samples:(($=(b=n==null?void 0:n.postProcess)==null?void 0:b.godRays)==null?void 0:$.samples)??ye.postProcess.godRays.samples}},emissive:{range:((ee=n==null?void 0:n.emissive)==null?void 0:ee.range)??ye.emissive.range,intensity:((ne=n==null?void 0:n.emissive)==null?void 0:ne.intensity)??ye.emissive.intensity,tint:((re=n==null?void 0:n.emissive)==null?void 0:re.tint)??ye.emissive.tint}}}function Ih(n){var d,h;const e=new Wn;if(n.quads.length===0)return e;const t=[],i=[],r=[],s=[],a=[],o=[],c=[],l=[];let u=0;for(const g of n.quads){const _=g.vertices();for(const m of _){t.push(m.pos.x,m.pos.y,m.pos.z);const p=m.normal??g.normal();i.push(p.x,p.y,p.z),r.push(((d=m.texture)==null?void 0:d[0])??0,((h=m.texture)==null?void 0:h[1])??0),m.textureLimit?a.push(m.textureLimit[0],m.textureLimit[1],m.textureLimit[2],m.textureLimit[3]):a.push(0,0,0,0);const M=m.color??[1,1,1];s.push(M[0],M[1],M[2]);const x=m.blockPos??m.pos;o.push(x.x,x.y,x.z),c.push(m.emissive??0)}l.push(u,u+1,u+2,u,u+2,u+3),u+=4}e.setAttribute("position",new Dt(t,3)),e.setAttribute("normal",new Dt(i,3)),e.setAttribute("uv",new Dt(r,2)),e.setAttribute("texLimit",new Dt(a,4)),e.setAttribute("color",new Dt(s,3)),e.setAttribute("blockPos",new Dt(o,3)),e.setAttribute("emissive",new Dt(c,1));const f=t.length/3>65536?new Uint32Array(l):new Uint16Array(l);return e.setIndex(new Pn(f,1)),e.computeBoundingSphere(),e}function xl(n){const e=new Wn;if(n.lines.length===0)return e;const t=[],i=[];for(const r of n.lines)r.vertices().forEach(s=>{t.push(s.pos.x,s.pos.y,s.pos.z);const a=s.color??[1,1,1];i.push(a[0],a[1],a[2])});return e.setAttribute("position",new Dt(t,3)),e.setAttribute("color",new Dt(i,3)),e.computeBoundingSphere(),e}let vy=class{constructor(e,t,i,r){C(this,"structure");C(this,"resources");C(this,"renderer");C(this,"structureScene");C(this,"skyScene");C(this,"overlayScene");C(this,"camera");C(this,"skyCamera");C(this,"atlasTexture");C(this,"opaqueMaterial");C(this,"transparentMaterial");C(this,"coloredMaterial");C(this,"lineMaterial");C(this,"skyMaterial");C(this,"shadowDepthMaterial");C(this,"shadowMap",null);C(this,"emissiveLightDataTex",null);C(this,"emissiveLightColorTex",null);C(this,"shadowCamera");C(this,"sunlight");C(this,"skyMesh");C(this,"sunDisc");C(this,"shadowDirty",!0);C(this,"emissiveSelectionDirty",!0);C(this,"lastEmissiveCameraPos",null);C(this,"lastEmissiveLightCount",0);C(this,"sceneTarget",null);C(this,"depthTarget",null);C(this,"bloomBrightTarget",null);C(this,"bloomBlurTarget1",null);C(this,"bloomBlurTarget2",null);C(this,"godRaysTarget",null);C(this,"aoTarget",null);C(this,"postProcessQuad",null);C(this,"ssaoMaterial",null);C(this,"bloomBrightMaterial",null);C(this,"bloomBlurMaterial",null);C(this,"godRaysMaterial",null);C(this,"compositeMaterial",null);C(this,"chunkBuilder");C(this,"asyncBuild");C(this,"asyncChunkBuildTimeMs");C(this,"buildPromise",null);C(this,"buildToken",0);C(this,"chunkMeshes",[]);C(this,"grid");C(this,"invisibleBlocks");C(this,"outline");C(this,"chunkSize");C(this,"targetCenter");C(this,"cameraPosition");C(this,"cameraTarget");C(this,"cameraUp");C(this,"cameraViewMatrix");C(this,"useInvisibleBlocks");C(this,"drawDistance");C(this,"pixelSize");C(this,"maxEmissiveTextureSize");C(this,"debug");var o,c;this.structure=t,this.resources=i,this.renderer=new Uv({canvas:e,alpha:!1,antialias:(r==null?void 0:r.antialias)??!0,preserveDrawingBuffer:(r==null?void 0:r.preserveDrawingBuffer)??!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.maxEmissiveTextureSize=this.renderer.capabilities.maxTextureSize??8192,this.structureScene=new Ko,this.skyScene=new Ko,this.overlayScene=new Ko,this.camera=new cn(70,(e.clientWidth||1)/(e.clientHeight||1),.1,2e3),this.skyCamera=new za(-1,1,1,-1,0,1),this.shadowCamera=new za(-50,50,50,-50,.1,200);const s=this.renderer.getContext(),a=(r==null?void 0:r.chunkSize)??16;if(this.chunkSize=typeof a=="number"?[a,a,a]:a,this.targetCenter=wn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.cameraPosition=Qa(),this.cameraTarget=mi(this.targetCenter),this.cameraUp=wn(0,1,0),this.cameraViewMatrix=nt(),this.resetCamera(),this.asyncBuild=(r==null?void 0:r.asyncBuild)??!1,this.asyncChunkBuildTimeMs=(r==null?void 0:r.asyncChunkBuildTimeMs)??8,this.chunkBuilder=new od(s,t,i,a,!this.asyncBuild),this.useInvisibleBlocks=(r==null?void 0:r.useInvisibleBlockBuffer)??!1,this.drawDistance=r==null?void 0:r.drawDistance,this.sunlight=Dh(r==null?void 0:r.sunlight),this.debug=(r==null?void 0:r.debug)??!1,this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas()),this.pixelSize=((c=(o=this.resources).getPixelSize)==null?void 0:c.call(o))??0,this.emissiveLightDataTex=Ca(new Float32Array([0,0,0,0]),1),this.emissiveLightColorTex=Ca(new Float32Array([0,0,0,0]),1),this.shadowDepthMaterial=this.createShadowDepthMaterial(),this.initShadowMap(),this.opaqueMaterial=this.createStructureMaterial(!1),this.transparentMaterial=this.createStructureMaterial(!0),this.coloredMaterial=this.createColoredMaterial(),this.lineMaterial=new ff({vertexColors:!0,transparent:!0,depthTest:!0}),this.skyMaterial=this.createSkyMaterial(),this.debug){const l=this.resources.getTextureAtlas(),f=Array.from(l.data.slice(3,3+400*4)).filter((d,h)=>h%4===0).filter(d=>d!==0).length;console.log("[lodestone] atlas info",{width:l.width,height:l.height,alphaSampleNonZero:f})}this.asyncBuild?this.rebuildChunksAsync():this.rebuildChunkObjects(),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc),this.skyMesh=this.createSkyMesh(),this.skyMesh&&this.skyScene.add(this.skyMesh),this.initPostProcessing(e.width||800,e.height||600)}setViewport(e,t,i,r,s=1){this.renderer.setPixelRatio(s),this.renderer.setSize(i,r,!1),this.renderer.setScissorTest(!1),this.renderer.setViewport(e,t,i,r),this.camera.aspect=i/Math.max(r,1),this.camera.updateProjectionMatrix();const a=this.renderer.getDrawingBufferSize(new Ee);this.resizePostProcessTargets(Math.max(1,Math.floor(a.x)),Math.max(1,Math.floor(a.y)))}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}setCamera(e){return e.position&&Ea(this.cameraPosition,e.position),e.target&&Ea(this.cameraTarget,e.target),e.up&&Ea(this.cameraUp,e.up),e.fov!==void 0&&this.setFOV(e.fov),this.updateStoredViewMatrix(),this}getCamera(){return{position:mi(this.cameraPosition),target:mi(this.cameraTarget),up:mi(this.cameraUp),fov:this.camera.fov}}getViewMatrix(){return qS(this.cameraViewMatrix)}lookAt(e,t,i){return this.setCamera({position:e,target:t,up:i})}setCameraPosition(e){return this.setCamera({position:e})}setCameraTarget(e){return this.setCamera({target:e})}resetCamera(){const e=this.structure.getSize(),t=Math.max(8,Math.max(e[0],e[1],e[2])*1.8);return this.setCamera({position:wn(this.targetCenter[0],this.targetCenter[1]+t*.35,this.targetCenter[2]+t),target:this.targetCenter,up:wn(0,1,0)})}setStructure(e){this.structure=e,this.targetCenter=wn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.setCameraTarget(this.targetCenter),this.asyncBuild?(this.chunkBuilder.setStructure(e,{rebuild:!1}),this.rebuildOverlay(),this.rebuildChunksAsync()):(this.chunkBuilder.setStructure(e),this.rebuildChunkObjects(),this.rebuildOverlay()),this.shadowDirty=!0}updateStructureBuffers(e){if(this.asyncBuild){this.updateStructureBuffersAsync(e);return}this.chunkBuilder.updateStructureBuffers(e),this.rebuildChunkObjects(),this.rebuildOverlay(),this.shadowDirty=!0}async updateStructureBuffersAsync(e){this.rebuildOverlay(),await this.rebuildChunksAsync(e)}whenReady(){return this.buildPromise??Promise.resolve()}drawStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.updateSkyUniforms(e),this.renderShadowPass(),!this.renderPostProcessing(e)&&(this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.structureScene.overrideMaterial=null,this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera))}drawColoredStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.renderer.clear(),this.structureScene.overrideMaterial=this.coloredMaterial,this.renderer.render(this.structureScene,this.camera),this.structureScene.overrideMaterial=null}drawGrid(e=this.cameraViewMatrix){this.grid&&(this.prepareCamera(e),this.positionSunDisc(e),this.setOverlayVisibility({grid:!0,invisible:!1,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawInvisibleBlocks(e=this.cameraViewMatrix){!this.useInvisibleBlocks||!this.invisibleBlocks||(this.prepareCamera(e),this.setOverlayVisibility({grid:!1,invisible:!0,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawOutline(e,t){const i=t?e:this.cameraViewMatrix,r=t??e;this.outline||(this.outline=this.createOutline(),this.overlayScene.add(this.outline)),this.outline.position.set(r[0],r[1],r[2]),this.prepareCamera(i),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!0}),this.renderer.render(this.overlayScene,this.camera)}dispose(){var e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m;this.buildToken+=1,this.chunkBuilder.cancelPendingBuilds(),this.chunkMeshes.forEach(p=>{this.structureScene.remove(p),p.geometry.dispose()}),this.chunkMeshes=[],this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose(),this.grid=void 0),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose(),this.invisibleBlocks=void 0),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.skyMesh&&(this.structureScene.remove(this.skyMesh),this.skyMesh.geometry.dispose(),this.skyMesh=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),(e=this.sunDisc.material)==null||e.dispose(),this.sunDisc=void 0),this.postProcessQuad&&(this.postProcessQuad.geometry.dispose(),this.postProcessQuad=null),this.structureScene.clear(),this.overlayScene.clear(),this.atlasTexture.dispose(),this.opaqueMaterial.dispose(),this.transparentMaterial.dispose(),this.coloredMaterial.dispose(),this.lineMaterial.dispose(),this.skyMaterial.dispose(),this.shadowDepthMaterial.dispose(),(t=this.shadowMap)==null||t.dispose(),(i=this.sceneTarget)==null||i.dispose(),(r=this.depthTarget)==null||r.dispose(),(s=this.bloomBrightTarget)==null||s.dispose(),(a=this.bloomBlurTarget1)==null||a.dispose(),(o=this.bloomBlurTarget2)==null||o.dispose(),(c=this.godRaysTarget)==null||c.dispose(),(l=this.aoTarget)==null||l.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(f=this.bloomBrightMaterial)==null||f.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(h=this.godRaysMaterial)==null||h.dispose(),(g=this.compositeMaterial)==null||g.dispose(),(_=this.emissiveLightDataTex)==null||_.dispose(),(m=this.emissiveLightColorTex)==null||m.dispose(),this.renderer.dispose()}prepareCamera(e){const t=new ot().fromArray(e),i=new ot().copy(t).invert();this.camera.position.setFromMatrixPosition(i),this.camera.quaternion.setFromRotationMatrix(i),this.camera.updateMatrixWorld(!0);const r=this.getCameraPosition(e)??wn(0,0,10);Ea(this.cameraPosition,r),this.camera.updateMatrixWorld(!0),this.drawDistance?this.applyDrawDistance(r,this.drawDistance):this.chunkMeshes.forEach(s=>s.visible=!0),this.updateEmissiveLightsForCamera(r)}rebuildChunkObjects(){this.chunkMeshes.forEach(i=>{this.structureScene.remove(i),i.geometry.dispose()}),this.chunkMeshes=[],this.chunkBuilder.getMeshEntries().forEach((i,r)=>{var c,l;if(i.mesh.isEmpty())return;const s=Ih(i.mesh),a=i.transparent?this.transparentMaterial:this.opaqueMaterial,o=new Qt(s,a);o.renderOrder=i.transparent?1:0,o.userData.origin=i.origin,this.structureScene.add(o),this.chunkMeshes.push(o),this.debug&&r===0&&console.log("[lodestone] chunk geometry sample",{vertices:((c=s.getAttribute("position"))==null?void 0:c.count)??0,indices:((l=s.getIndex())==null?void 0:l.count)??0,transparent:i.transparent})});const t=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(t),this.emissiveSelectionDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks",{count:this.chunkMeshes.length})}async rebuildChunksAsync(e){const t=++this.buildToken,i=(async()=>{await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:e,timeSliceMs:this.asyncChunkBuildTimeMs}),t===this.buildToken&&await this.rebuildChunkObjectsAsync(t)})();return this.buildPromise=i,i}async rebuildChunkObjectsAsync(e){var s,a;this.chunkMeshes.forEach(o=>{this.structureScene.remove(o),o.geometry.dispose()}),this.chunkMeshes=[];const t=this.chunkBuilder.getMeshEntries();let i=this.now();for(let o=0;o<t.length;o++){if(e!==this.buildToken)return;const c=t[o];if(c.mesh.isEmpty())continue;const l=Ih(c.mesh),u=c.transparent?this.transparentMaterial:this.opaqueMaterial,f=new Qt(l,u);f.renderOrder=c.transparent?1:0,f.userData.origin=c.origin,this.structureScene.add(f),this.chunkMeshes.push(f),this.debug&&o===0&&console.log("[lodestone] chunk geometry sample",{vertices:((s=l.getAttribute("position"))==null?void 0:s.count)??0,indices:((a=l.getIndex())==null?void 0:a.count)??0,transparent:c.transparent}),!(o&31)&&this.now()-i>=this.asyncChunkBuildTimeMs&&(await this.yieldControl(),i=this.now())}if(e!==this.buildToken)return;const r=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(r),this.emissiveSelectionDirty=!0,this.shadowDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks (async)",{count:this.chunkMeshes.length})}updateEmissiveLightUniforms(e){var f,d;const t=Math.min(e.length,vl),i=this.maxEmissiveTextureSize||8192,r=Math.min(i,Math.max(1,Math.ceil(Math.sqrt(Math.max(1,t))))),s=Math.min(i,Math.max(1,Math.ceil(t/r))),a=r*s,o=Math.min(t,a),c=new Float32Array(r*s*4),l=new Float32Array(r*s*4);for(let h=0;h<o;h++){const g=e[h];c[h*4+0]=g.position[0],c[h*4+1]=g.position[1],c[h*4+2]=g.position[2],c[h*4+3]=g.intensity,l[h*4+0]=g.color[0],l[h*4+1]=g.color[1],l[h*4+2]=g.color[2],l[h*4+3]=1}(f=this.emissiveLightDataTex)==null||f.dispose(),(d=this.emissiveLightColorTex)==null||d.dispose(),this.emissiveLightDataTex=Ca(c,r,s),this.emissiveLightColorTex=Ca(l,r,s);const u=h=>{const g=h.uniforms;g&&(g.emissiveLightData&&(g.emissiveLightData.value=this.emissiveLightDataTex),g.emissiveLightColors&&(g.emissiveLightColors.value=this.emissiveLightColorTex),g.emissiveLightCount&&(g.emissiveLightCount.value=o),g.emissiveLightTexSize&&g.emissiveLightTexSize.value instanceof Ee&&g.emissiveLightTexSize.value.set(r,s))};u(this.opaqueMaterial),u(this.transparentMaterial),this.debug&&o>0&&console.log("[lodestone] emissive lights",{count:o})}updateEmissiveLightsForCamera(e){const t=this.chunkBuilder.getEmissiveLights();if(t.length===0){(this.emissiveSelectionDirty||this.lastEmissiveLightCount!==0)&&(this.updateEmissiveLightUniforms([]),this.lastEmissiveLightCount=0,this.emissiveSelectionDirty=!1),this.lastEmissiveCameraPos=mi(e);return}const i=!this.lastEmissiveCameraPos||this.cameraMovedEnough(e,this.lastEmissiveCameraPos);if(!this.emissiveSelectionDirty&&!i)return;const r=this.drawDistance?Math.pow(this.drawDistance+this.sunlight.emissive.range,2):void 0,s=this.pickNearestEmissiveLights(t,e,vl,r);this.updateEmissiveLightUniforms(s),this.lastEmissiveLightCount=s.length,this.emissiveSelectionDirty=!1,this.lastEmissiveCameraPos=mi(e)}cameraMovedEnough(e,t){const i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return i*i+r*r+s*s>=_y}pickNearestEmissiveLights(e,t,i,r){if(e.length<=i&&r===void 0)return e;const s=[];let a=-1,o=-1;for(const c of e){const l=c.position[0]-t[0],u=c.position[1]-t[1],f=c.position[2]-t[2],d=l*l+u*u+f*f;if(!(r!==void 0&&d>r)){if(s.length<i){s.push({light:c,distSq:d}),d>o&&(o=d,a=s.length-1);continue}if(!(d>=o)){s[a]={light:c,distSq:d},o=s[0].distSq,a=0;for(let h=1;h<s.length;h++)s[h].distSq>o&&(o=s[h].distSq,a=h)}}}return s.sort((c,l)=>c.distSq-l.distSq),s.map(c=>c.light)}rebuildOverlay(){this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose()),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose()),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),this.sunDisc.material.dispose()),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc)}createStructureMaterial(e){return new el({name:e?"lodestone-structure-transparent":"lodestone-structure-opaque",vertexShader:`
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
				#define MAX_EMISSIVE_LIGHTS ${vl}
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
			`,uniforms:this.createStructureUniforms(),transparent:e,depthWrite:!e,depthTest:!0,alphaTest:.01,side:gn})}createStructureUniforms(){var i;const e=r=>new je(r[0],r[1],r[2]),t=new k(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]);return t.lengthSq()===0&&t.set(0,1,0),t.normalize(),{atlas:{value:this.atlasTexture},pixelSize:{value:this.pixelSize},sunDirection:{value:t},sunColor:{value:e(this.sunlight.color)},ambientColor:{value:e(this.sunlight.ambientColor)},fillColor:{value:e(this.sunlight.fillColor)},rimColor:{value:e(this.sunlight.rimColor)},sunIntensity:{value:this.sunlight.intensity},ambientIntensity:{value:this.sunlight.ambientIntensity},fillIntensity:{value:this.sunlight.fillIntensity},rimIntensity:{value:this.sunlight.rimIntensity},horizonFalloff:{value:this.sunlight.horizonFalloff},exposure:{value:this.sunlight.exposure},fogColor:{value:e(this.sunlight.fog.color)},fogDensity:{value:this.sunlight.fog.density},fogHeightFalloff:{value:this.sunlight.fog.heightFalloff},shadowMap:{value:((i=this.shadowMap)==null?void 0:i.texture)??null},shadowMatrix:{value:new ot},shadowBias:{value:this.sunlight.shadow.bias},shadowNormalBias:{value:this.sunlight.shadow.normalBias},shadowIntensity:{value:this.sunlight.shadow.intensity},shadowSoftness:{value:this.sunlight.shadow.softness},shadowMapSize:{value:new Ee(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize)},shadowEnabled:{value:this.sunlight.shadow.enabled},emissiveLightData:{value:this.emissiveLightDataTex},emissiveLightColors:{value:this.emissiveLightColorTex},emissiveLightCount:{value:0},emissiveLightTexSize:{value:new Ee(1,1)},emissiveRange:{value:this.sunlight.emissive.range},emissiveGlobalIntensity:{value:this.sunlight.emissive.intensity},emissiveTint:{value:e(this.sunlight.emissive.tint)}}}setSunlight(e){this.sunlight=Dh(e),this.syncShadowResources(),this.syncPostProcessingResources(),this.applySunlightUniforms(this.opaqueMaterial),this.applySunlightUniforms(this.transparentMaterial),this.applySkyUniforms(),this.applySunDiscUniforms(),this.applyPostProcessUniforms(),this.shadowDirty=!0,this.emissiveSelectionDirty=!0}syncShadowResources(){var e,t;if(this.sunlight.shadow.enabled){const i=this.sunlight.shadow.mapSize;(!this.shadowMap||this.shadowMap.width!==i||this.shadowMap.height!==i)&&((e=this.shadowMap)==null||e.dispose(),this.shadowMap=null,this.initShadowMap(),this.shadowDirty=!0);return}(t=this.shadowMap)==null||t.dispose(),this.shadowMap=null,this.shadowDirty=!0}syncPostProcessingResources(){var t,i,r,s,a,o,c,l,u,f,d,h,g;if(!this.sunlight.postProcess.enabled||this.sceneTarget&&this.postProcessQuad&&this.ssaoMaterial&&this.bloomBrightMaterial&&this.bloomBlurMaterial&&this.godRaysMaterial&&this.compositeMaterial)return;(t=this.sceneTarget)==null||t.dispose(),(i=this.depthTarget)==null||i.dispose(),(r=this.bloomBrightTarget)==null||r.dispose(),(s=this.bloomBlurTarget1)==null||s.dispose(),(a=this.bloomBlurTarget2)==null||a.dispose(),(o=this.godRaysTarget)==null||o.dispose(),(c=this.aoTarget)==null||c.dispose(),(l=this.postProcessQuad)==null||l.geometry.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(f=this.bloomBrightMaterial)==null||f.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(h=this.godRaysMaterial)==null||h.dispose(),(g=this.compositeMaterial)==null||g.dispose(),this.sceneTarget=null,this.depthTarget=null,this.bloomBrightTarget=null,this.bloomBlurTarget1=null,this.bloomBlurTarget2=null,this.godRaysTarget=null,this.aoTarget=null,this.postProcessQuad=null,this.ssaoMaterial=null,this.bloomBrightMaterial=null,this.bloomBlurMaterial=null,this.godRaysMaterial=null,this.compositeMaterial=null;const e=this.renderer.getSize(new Ee);this.initPostProcessing(Math.max(1,e.x),Math.max(1,e.y))}applyPostProcessUniforms(){var a,o,c,l;const e=this.sunlight.postProcess,t=(a=this.ssaoMaterial)==null?void 0:a.uniforms;t!=null&&t.aoRadius&&(t.aoRadius.value=e.ao.radius),t!=null&&t.aoIntensity&&(t.aoIntensity.value=e.ao.intensity);const i=(o=this.bloomBrightMaterial)==null?void 0:o.uniforms;i!=null&&i.threshold&&(i.threshold.value=e.bloom.threshold);const r=(c=this.compositeMaterial)==null?void 0:c.uniforms;r!=null&&r.bloomIntensity&&(r.bloomIntensity.value=e.bloom.intensity);const s=(l=this.godRaysMaterial)==null?void 0:l.uniforms;s!=null&&s.intensity&&(s.intensity.value=e.godRays.intensity),s!=null&&s.decay&&(s.decay.value=e.godRays.decay),s!=null&&s.density&&(s.density.value=e.godRays.density),s!=null&&s.numSamples&&(s.numSamples.value=e.godRays.samples)}applySunDiscUniforms(){if(!this.sunDisc)return;const t=this.sunDisc.material.uniforms;t&&(t.coreColor.value.setRGB(this.sunlight.disc.coreColor[0],this.sunlight.disc.coreColor[1],this.sunlight.disc.coreColor[2]),t.glowColor.value.setRGB(this.sunlight.disc.glowColor[0],this.sunlight.disc.glowColor[1],this.sunlight.disc.glowColor[2]),t.coreIntensity.value=this.sunlight.disc.coreIntensity,t.glowIntensity.value=this.sunlight.disc.glowIntensity,t.softness.value=this.sunlight.disc.softness)}applySkyUniforms(){var r;const e=this.skyMaterial.uniforms;if(!e)return;const t=(s,a)=>{const o=e[s];(o==null?void 0:o.value)instanceof je&&o.value.setRGB(a[0],a[1],a[2])},i=(r=e.sunDirection)==null?void 0:r.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),t("zenithColor",this.sunlight.sky.zenithColor),t("horizonColor",this.sunlight.sky.horizonColor),t("groundColor",this.sunlight.sky.groundColor),t("sunGlowColor",this.sunlight.sky.sunGlowColor),e.sunGlowIntensity&&(e.sunGlowIntensity.value=this.sunlight.sky.sunGlowIntensity),e.sunGlowExponent&&(e.sunGlowExponent.value=this.sunlight.sky.sunGlowExponent),e.starsEnabled&&(e.starsEnabled.value=this.sunlight.sky.stars.enabled),e.starsDensity&&(e.starsDensity.value=this.sunlight.sky.stars.density),e.starsBrightness&&(e.starsBrightness.value=this.sunlight.sky.stars.brightness)}applySunlightUniforms(e){var s,a,o;const t=e.uniforms;if(!t)return;const i=(c,l)=>{const u=t[c];(u==null?void 0:u.value)instanceof je&&u.value.setRGB(l[0],l[1],l[2])},r=(s=t.sunDirection)==null?void 0:s.value;r&&r.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i("sunColor",this.sunlight.color),i("ambientColor",this.sunlight.ambientColor),i("fillColor",this.sunlight.fillColor),i("rimColor",this.sunlight.rimColor),i("fogColor",this.sunlight.fog.color),t.sunIntensity&&(t.sunIntensity.value=this.sunlight.intensity),t.ambientIntensity&&(t.ambientIntensity.value=this.sunlight.ambientIntensity),t.fillIntensity&&(t.fillIntensity.value=this.sunlight.fillIntensity),t.rimIntensity&&(t.rimIntensity.value=this.sunlight.rimIntensity),t.horizonFalloff&&(t.horizonFalloff.value=this.sunlight.horizonFalloff),t.exposure&&(t.exposure.value=this.sunlight.exposure),t.fogDensity&&(t.fogDensity.value=this.sunlight.fog.density),t.fogHeightFalloff&&(t.fogHeightFalloff.value=this.sunlight.fog.heightFalloff),t.shadowEnabled&&(t.shadowEnabled.value=this.sunlight.shadow.enabled),t.shadowBias&&(t.shadowBias.value=this.sunlight.shadow.bias),t.shadowNormalBias&&(t.shadowNormalBias.value=this.sunlight.shadow.normalBias),t.shadowIntensity&&(t.shadowIntensity.value=this.sunlight.shadow.intensity),t.shadowSoftness&&(t.shadowSoftness.value=this.sunlight.shadow.softness),((a=t.shadowMapSize)==null?void 0:a.value)instanceof Ee&&t.shadowMapSize.value.set(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize),t.shadowMap&&(t.shadowMap.value=((o=this.shadowMap)==null?void 0:o.texture)??null),t.emissiveRange&&(t.emissiveRange.value=this.sunlight.emissive.range),t.emissiveGlobalIntensity&&(t.emissiveGlobalIntensity.value=this.sunlight.emissive.intensity),i("emissiveTint",this.sunlight.emissive.tint)}createColoredMaterial(){return new el({name:"lodestone-structure-colored",vertexShader:`
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
			`,transparent:!1,depthWrite:!0,depthTest:!0,side:gn})}createGrid(){const[e,t,i]=this.structure.getSize(),r=new dt;r.addLine(0,0,0,e,0,0,[1,0,0]),r.addLine(0,0,0,0,0,i,[0,0,1]);const s=[.8,.8,.8];r.addLine(0,0,0,0,t,0,s),r.addLine(e,0,0,e,t,0,s),r.addLine(0,0,i,0,t,i,s),r.addLine(e,0,i,e,t,i,s),r.addLine(0,t,0,0,t,i,s),r.addLine(e,t,0,e,t,i,s),r.addLine(0,t,0,e,t,0,s),r.addLine(0,t,i,e,t,i,s);const a=128,o=Math.max(1,Math.ceil(e/a)),c=Math.max(1,Math.ceil(i/a));for(let u=o;u<=e;u+=o)r.addLine(u,0,0,u,0,i,s);for(let u=c;u<=i;u+=c)r.addLine(0,0,u,e,0,u,s);const l=xl(r);return l.attributes.position?new Qo(l,this.lineMaterial):void 0}createOutline(){const e=new dt;e.addLineCube(0,0,0,1,1,1,[1,1,1]);const t=xl(e);return new Qo(t,this.lineMaterial)}createInvisibleBlocks(){const e=new dt;if(!this.useInvisibleBlocks)return;const t=this.structure.getSize(),i=t[0]*t[1]*t[2];if(i>2e5){this.debug&&console.warn("[lodestone] Skipping invisible blocks buffer for large structure",{volume:i});return}for(let s=0;s<t[0];s+=1)for(let a=0;a<t[1];a+=1)for(let o=0;o<t[2];o+=1){const c=this.structure.getBlock([s,a,o]);c!==void 0&&(c===null?e.addLineCube(s+.4375,a+.4375,o+.4375,s+.5625,a+.5625,o+.5625,[1,.25,.25]):c.state.is(Ei.AIR)?e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,.5,1]):c.state.is(new Ei("cave_air"))&&e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,1,.5]))}const r=xl(e);return r.attributes.position?new Qo(r,this.lineMaterial):void 0}setOverlayVisibility(e){this.grid&&(this.grid.visible=e.grid),this.invisibleBlocks&&(this.invisibleBlocks.visible=e.invisible),this.outline&&(this.outline.visible=e.outline),this.sunDisc&&(this.sunDisc.visible=e.sunDisc??!1)}createAtlasTexture(e){const t=new hf(e.data,e.width,e.height,Vt);return t.magFilter=St,t.minFilter=St,t.wrapS=Tn,t.wrapT=Tn,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}getCameraPosition(e){const t=nt();return jS(t,e)?wn(t[12],t[13],t[14]):null}updateStoredViewMatrix(){ty(this.cameraViewMatrix,this.cameraPosition,this.cameraTarget,this.cameraUp)}applyDrawDistance(e,t){const i=t*t;let r=!1;for(const s of this.chunkMeshes){const a=s.userData.origin;if(!a){s.visible||(s.visible=!0,r=!0);continue}const o=[a[0]+this.chunkSize[0]*.5,a[1]+this.chunkSize[1]*.5,a[2]+this.chunkSize[2]*.5],c=o[0]-e[0],l=o[1]-e[1],u=o[2]-e[2],f=c*c+l*l+u*u<=i;s.visible!==f&&(s.visible=f,r=!0)}r&&(this.shadowDirty=!0)}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}positionSunDisc(e){if(!this.sunDisc)return;const t=this.getCameraPosition(e)??wn(0,0,10),i=mi(this.sunlight.direction);nd(i,i);const r=this.sunlight.disc.distance,s=Qa();ry(s,t,i,r),this.sunDisc.position.set(s[0],s[1],s[2]),this.sunDisc.scale.setScalar(this.sunlight.disc.size),this.sunDisc.lookAt(t[0],t[1],t[2])}createSunDisc(){const e=new rr(1,1,1,1),t=new Gt({name:"lodestone-sun-disc",transparent:!0,depthWrite:!1,depthTest:!0,side:Fn,uniforms:{coreColor:{value:new je(...this.sunlight.disc.coreColor)},glowColor:{value:new je(...this.sunlight.disc.glowColor)},coreIntensity:{value:this.sunlight.disc.coreIntensity},glowIntensity:{value:this.sunlight.disc.glowIntensity},softness:{value:this.sunlight.disc.softness}},vertexShader:`
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
			`}),i=new Qt(e,t);return i.renderOrder=10,i}createSkyMaterial(){return new Gt({name:"lodestone-sky",transparent:!1,depthWrite:!1,depthTest:!1,side:gn,uniforms:{sunDirection:{value:new k(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize()},zenithColor:{value:new je(...this.sunlight.sky.zenithColor)},horizonColor:{value:new je(...this.sunlight.sky.horizonColor)},groundColor:{value:new je(...this.sunlight.sky.groundColor)},sunGlowColor:{value:new je(...this.sunlight.sky.sunGlowColor)},sunGlowIntensity:{value:this.sunlight.sky.sunGlowIntensity},sunGlowExponent:{value:this.sunlight.sky.sunGlowExponent},invViewMatrix:{value:new ot},invProjectionMatrix:{value:new ot},starsEnabled:{value:this.sunlight.sky.stars.enabled},starsDensity:{value:this.sunlight.sky.stars.density},starsBrightness:{value:this.sunlight.sky.stars.brightness}},vertexShader:`
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
			`})}createSkyMesh(){const e=new rr(2,2,1,1),t=new Qt(e,this.skyMaterial);return t.frustumCulled=!1,t.renderOrder=-1e3,t}updateSkyUniforms(e){var a,o,c;const t=this.skyMaterial.uniforms,i=(a=t.sunDirection)==null?void 0:a.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize();const r=(o=t.invViewMatrix)==null?void 0:o.value,s=(c=t.invProjectionMatrix)==null?void 0:c.value;if(r){const l=new ot;l.fromArray(e),r.copy(l).invert()}s&&s.copy(this.camera.projectionMatrix).invert()}createShadowDepthMaterial(){return new el({name:"lodestone-shadow-depth",vertexShader:`
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
			`,side:gn,depthTest:!0,depthWrite:!0})}initShadowMap(){if(!this.sunlight.shadow.enabled)return;const e=this.sunlight.shadow.mapSize;this.shadowMap=new Rn(e,e,{minFilter:St,magFilter:St,format:Vt,type:An})}updateShadowCamera(){const e=this.sunlight.shadow.frustumSize,t=e/2,i=new k(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),r=new k(this.targetCenter[0],this.targetCenter[1],this.targetCenter[2]),s=r.clone().add(i.clone().multiplyScalar(e));this.shadowCamera.left=-t,this.shadowCamera.right=t,this.shadowCamera.top=t,this.shadowCamera.bottom=-t,this.shadowCamera.near=.1,this.shadowCamera.far=e*2,this.shadowCamera.position.copy(s),this.shadowCamera.lookAt(r),this.shadowCamera.updateMatrixWorld(!0),this.shadowCamera.updateProjectionMatrix()}renderShadowPass(){if(!this.sunlight.shadow.enabled||!this.shadowMap||!this.shadowDirty)return;this.updateShadowCamera();const e=new ot;e.multiplyMatrices(this.shadowCamera.projectionMatrix,this.shadowCamera.matrixWorldInverse);const t=r=>{var a;const s=r.uniforms;s.shadowMatrix&&s.shadowMatrix.value.copy(e),s.shadowMap&&(s.shadowMap.value=((a=this.shadowMap)==null?void 0:a.texture)??null)};t(this.opaqueMaterial),t(this.transparentMaterial);const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.shadowMap),this.renderer.setClearColor(16777215,1),this.renderer.clear(),this.structureScene.overrideMaterial=this.shadowDepthMaterial,this.renderer.render(this.structureScene,this.shadowCamera),this.structureScene.overrideMaterial=null,this.renderer.setRenderTarget(i),this.renderer.setClearColor(0,1),this.shadowDirty=!1}initPostProcessing(e,t){if(!this.sunlight.postProcess.enabled)return;const i=(s,a,o=!1)=>new Rn(s,a,{minFilter:$t,magFilter:$t,format:Vt,type:jr,depthBuffer:o});this.sceneTarget=new Rn(e,t,{minFilter:$t,magFilter:$t,format:Vt,type:jr,depthBuffer:!0}),this.sceneTarget.depthTexture=new Ha(e,t),this.sceneTarget.depthTexture.format=Ri,this.sceneTarget.depthTexture.type=ki,this.depthTarget=new Rn(e,t,{minFilter:St,magFilter:St,format:Vt,type:An,depthBuffer:!0}),this.aoTarget=i(e,t),this.bloomBrightTarget=i(e/2,t/2),this.bloomBlurTarget1=i(e/2,t/2),this.bloomBlurTarget2=i(e/2,t/2),this.godRaysTarget=i(e/2,t/2);const r=new rr(2,2);this.postProcessQuad=new Qt(r),this.postProcessQuad.frustumCulled=!1,this.ssaoMaterial=this.createSSAOMaterial(),this.bloomBrightMaterial=this.createBloomBrightMaterial(),this.bloomBlurMaterial=this.createBloomBlurMaterial(),this.godRaysMaterial=this.createGodRaysMaterial(),this.compositeMaterial=this.createCompositeMaterial()}resizePostProcessTargets(e,t){var i,r,s,a,o,c,l,u;this.sunlight.postProcess.enabled&&(e<=0||t<=0||((i=this.sceneTarget)==null||i.setSize(e,t),this.sceneTarget&&((r=this.sceneTarget.depthTexture)==null||r.dispose(),this.sceneTarget.depthTexture=new Ha(e,t),this.sceneTarget.depthTexture.format=Ri,this.sceneTarget.depthTexture.type=ki),(s=this.depthTarget)==null||s.setSize(e,t),(a=this.aoTarget)==null||a.setSize(e,t),(o=this.bloomBrightTarget)==null||o.setSize(Math.max(1,e/2),Math.max(1,t/2)),(c=this.bloomBlurTarget1)==null||c.setSize(Math.max(1,e/2),Math.max(1,t/2)),(l=this.bloomBlurTarget2)==null||l.setSize(Math.max(1,e/2),Math.max(1,t/2)),(u=this.godRaysTarget)==null||u.setSize(Math.max(1,e/2),Math.max(1,t/2))))}createSSAOMaterial(){return new Gt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ee},cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},aoRadius:{value:this.sunlight.postProcess.ao.radius},aoIntensity:{value:this.sunlight.postProcess.ao.intensity}},vertexShader:`
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
			`})}createBloomBrightMaterial(){return new Gt({uniforms:{tDiffuse:{value:null},threshold:{value:this.sunlight.postProcess.bloom.threshold}},vertexShader:`
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
			`})}createBloomBlurMaterial(){return new Gt({uniforms:{tDiffuse:{value:null},direction:{value:new Ee(1,0)},resolution:{value:new Ee}},vertexShader:`
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
			`})}createGodRaysMaterial(){return new Gt({uniforms:{tDiffuse:{value:null},tScene:{value:null},sunPosition:{value:new Ee(.5,.5)},intensity:{value:this.sunlight.postProcess.godRays.intensity},decay:{value:this.sunlight.postProcess.godRays.decay},density:{value:this.sunlight.postProcess.godRays.density},numSamples:{value:this.sunlight.postProcess.godRays.samples}},vertexShader:`
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
			`})}createCompositeMaterial(){return new Gt({uniforms:{tScene:{value:null},tBloom:{value:null},bloomIntensity:{value:this.sunlight.postProcess.bloom.intensity}},vertexShader:`
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
			`})}getSunScreenPosition(e){const t=new k(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i=this.getCameraPosition(e)??wn(0,0,10),r=new k(i[0],i[1],i[2]).add(t.multiplyScalar(100));return r.project(this.camera),new Ee((r.x+1)*.5,(r.y+1)*.5)}renderPostProcessing(e){var o;if(!this.sunlight.postProcess.enabled||!this.sceneTarget||!this.postProcessQuad)return!1;const t=this.sunlight.postProcess;if(!(t.ao.enabled||t.bloom.enabled||t.godRays.enabled))return!1;const r=this.sceneTarget.width,s=this.sceneTarget.height;this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera);let a=this.sceneTarget.texture;if(t.ao.enabled&&this.ssaoMaterial&&this.aoTarget&&(this.ssaoMaterial.uniforms.tDiffuse.value=a,this.ssaoMaterial.uniforms.tDepth.value=this.sceneTarget.depthTexture,this.ssaoMaterial.uniforms.resolution.value.set(r,s),this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.postProcessQuad.material=this.ssaoMaterial,this.renderer.setRenderTarget(this.aoTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.aoTarget.texture),t.bloom.enabled&&this.bloomBrightMaterial&&this.bloomBrightTarget&&this.bloomBlurTarget1&&this.bloomBlurTarget2&&this.bloomBlurMaterial&&(this.bloomBrightMaterial.uniforms.tDiffuse.value=a,this.postProcessQuad.material=this.bloomBrightMaterial,this.renderer.setRenderTarget(this.bloomBrightTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.bloomBlurMaterial.uniforms.direction.value.set(1,0),this.bloomBlurMaterial.uniforms.resolution.value.set(r/2,s/2),this.postProcessQuad.material=this.bloomBlurMaterial,this.renderer.setRenderTarget(this.bloomBlurTarget1),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBlurTarget1.texture,this.bloomBlurMaterial.uniforms.direction.value.set(0,1),this.renderer.setRenderTarget(this.bloomBlurTarget2),this.renderer.render(this.postProcessQuad,this.skyCamera)),t.godRays.enabled&&this.godRaysMaterial&&this.godRaysTarget&&this.bloomBrightTarget){const c=this.getSunScreenPosition(e);this.godRaysMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.godRaysMaterial.uniforms.tScene.value=a,this.godRaysMaterial.uniforms.sunPosition.value.copy(c),this.postProcessQuad.material=this.godRaysMaterial,this.renderer.setRenderTarget(this.godRaysTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.godRaysTarget.texture}return this.compositeMaterial&&(this.compositeMaterial.uniforms.tScene.value=a,this.compositeMaterial.uniforms.tBloom.value=((o=this.bloomBlurTarget2)==null?void 0:o.texture)??null,this.postProcessQuad.material=this.compositeMaterial,this.renderer.setRenderTarget(null),this.renderer.render(this.postProcessQuad,this.skyCamera)),!0}};const xy=Object.freeze(Object.defineProperty({__proto__:null,BlockColors:or,BlockDefinition:fo,BlockModel:gt,get BlockPos(){return Ut},BlockState:Ei,ChunkBuilder:od,get ChunkPos(){return kl},ChunkSection:Ol,get Color(){return Xe},get Cull(){return mt},get Direction(){return et},EFFECT_COLORS:Jf,get Holder(){return Ka},Identifier:K,get ItemModel(){return Wl},ItemRenderer:mo,ItemStack:ni,get ItemTint(){return eo},get Json(){return Q},Line:Is,Mesh:dt,get MobEffectInstance(){return Za},NbtAbstractList:qs,NbtByte:Li,NbtByteArray:Di,get NbtChunk(){return ri},NbtCompound:Et,NbtDouble:Ni,NbtEnd:Ya,NbtFile:Vn,NbtFloat:sr,NbtInt:_n,NbtIntArray:Ii,NbtList:Yt,NbtLong:Qr,NbtLongArray:Ui,get NbtRegion(){return Bi},NbtShort:ar,NbtString:Gn,NbtTag:it,get NbtType(){return ce},POTION_EFFECTS:Qf,PalettedContainer:ja,get PotionContents(){return Ls},Quad:po,RawDataInput:pf,RawDataOutput:mf,Registry:Ja,Renderer:cd,get Rotation(){return Xr},ShaderProgram:ld,get SpecialRenderers(){return vt},StringReader:qt,Structure:WS,TextureAtlas:qr,ThreeStructureRenderer:vy,Vector:Lt,Vertex:Cn,clamp:wi,createResourcesFromPack:ad,getDefaultPackUrls:sd,isPowerOfTwo:Hl,upperPowerOfTwo:ac},Symbol.toStringTag,{value:"Module"})),{Structure:ud,ThreeStructureRenderer:oc,BlockState:Sy}=xy;let Us,Ft,Fi,En,_t=null,lt=null,to=null,lr=null,no="",Xl=null,_i=null,Ns=null,Jt=[0,0,0],io=10,ys=null,ql=null;const Uh=nt();ud.prototype.ensurePlacedCaches=function(){if(!(this.placedBlocksCache&&this.placedBlocksCache.length===this.blocks.length)){this.placedBlocksCache=this.blocks.map(n=>this.toPlacedBlock(n)),this.placedBlocksMapCache=[];for(let n=0;n<this.placedBlocksCache.length;n++){const e=this.placedBlocksCache[n];this.placedBlocksMapCache[this.getIndex(e.pos)]=e}}};const yy=vt.getBlockMesh;vt.getBlockMesh=function(n,e,t,i){const r=n.getName().toString();if(r==="minecraft:chest"||r==="minecraft:trapped_chest"){const s=n.getProperty("type")||"single";if(s==="left"||s==="right"){const a=r==="minecraft:trapped_chest"?"trapped":"normal",o=s==="left",c=`entity/chest/${a}_${s}`,l=o?[1,0,1]:[0,0,1],u=o?[16,10,15]:[15,10,15],f=o?[1,10,1]:[0,10,1],d=o?[16,14,15]:[15,14,15],h=o?[15,7,0]:[0,7,0],g=o?[16,11,2]:[1,11,2],m=new gt(void 0,{0:c},[{from:l,to:u,faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:f,to:d,faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:h,to:g,faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],texture:"#0"},down:{uv:[.75,0,1.25,.25],texture:"#0"}}}]).getMesh(t,mt.none()),p=n.getProperty("facing")||"south",M=nt();ke(M,M,[8,8,8]),Nt(M,M,p==="west"?Math.PI/2:p==="south"?Math.PI:p==="east"?Math.PI*3/2:0),ke(M,M,[-8,-8,-8]),m.transform(M);const x=nt();return ln(x,x,[.0625,.0625,.0625]),m.transform(x)}}return yy.call(this,n,e,t,i)};oc.prototype.applyDrawDistance=function(){if(this.chunkMeshes)for(let n=0;n<this.chunkMeshes.length;n++){const e=this.chunkMeshes[n];e.visible=!0,e.frustumCulled=!1}};oc.prototype.rebuildChunksAsync=async function(n){const e=++this.buildToken;if(window.AndroidHost&&window.AndroidHost.onLoadingProgress("RENDERING_0%"),await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:n,timeSliceMs:this.asyncChunkBuildTimeMs||12,onProgress:(r,s)=>{if(window.AndroidHost){const a=Math.floor(r/Math.max(1,s)*50);window.AndroidHost.onLoadingProgress(`RENDERING_${a}%`)}}}),e!==this.buildToken)return;const i=this.rebuildChunkObjectsAsync.call(this,e).then(()=>{if(this.chunkMeshes)for(let r=0;r<this.chunkMeshes.length;r++){const s=this.chunkMeshes[r];s.visible=!0,s.frustumCulled=!1,s.matrixAutoUpdate=!1}window.AndroidHost&&e===this.buildToken&&window.AndroidHost.onLoadingProgress("RENDERING_100%")});return this.buildPromise=i,i};async function My(n){const e=sd(n),[t,i,r,s,a,o]=await Promise.all([fetch(e.assetsJson),fetch(e.atlasPng),fetch(e.blockFlags.opaqueTxt),fetch(e.blockFlags.transparentTxt),fetch(e.blockFlags.nonSelfCullingTxt),fetch(e.blockFlags.emissiveJson)]);if(!t.ok)throw new Error(`Failed to fetch assets.json: ${t.status}`);if(!i.ok)throw new Error(`Failed to fetch atlas.png: ${i.status}`);const c=await t.json(),l=await i.blob(),u=new Image,f=URL.createObjectURL(l);if(await new Promise((M,x)=>{u.onload=()=>M(!0),u.onerror=y=>x(y),u.src=f}),URL.revokeObjectURL(f),u.width<=0||u.height<=0)throw new Error(`Failed to decode atlas.png image: invalid dimensions ${u.width}x${u.height}`);const d=ac(Math.max(u.width,u.height)),h=document.createElement("canvas");h.width=d,h.height=d;const g=h.getContext("2d");g.drawImage(u,0,0);const _=g.getImageData(0,0,d,d),m=M=>{const x=new Set;return(M.match(/minecraft:[a-z0-9_]+/g)??[]).forEach(P=>x.add(P)),x},p={opaque:m(await r.text()),transparent:m(await s.text()),nonSelfCulling:m(await a.text()),emissive:await o.json()};return ad({assets:c,atlas:{imageData:_,atlasSize:d},flags:p})}window.cleanupRenderer=function(){if(ys!==null&&(cancelAnimationFrame(ys),ys=null),_t&&(_t.dispose(),_t=null),lt){try{const n=lt.renderer;if(n){const e=n.getContext();if(n.dispose(),e){const t=e.getExtension("WEBGL_lose_context");t&&t.loseContext()}}}catch(n){console.warn("Error disposing WebGL renderer context",n)}lt=null}lr=null,to=null,Ns=null,Us&&(Us.innerHTML="")};window.addEventListener("beforeunload",()=>window.cleanupRenderer());window.addEventListener("pagehide",()=>window.cleanupRenderer());async function wy(){Us=document.getElementById("renderer-container");const n=window.innerWidth/window.innerHeight;Fi=new cn(60,n,.5,1e5),En=new za(-10*n,10*n,10,-10,.5,1e5),Ft=Fi,Ft.position.set(10,15,20);try{const e=new URL("default-pack/",window.location.href).href;Xl=await My(e),window.AndroidHost&&window.AndroidHost.onLoadingProgress("READY")}catch(e){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: Failed to load default resource pack. "+(e==null?void 0:e.message))}}ql=wy();function hd(){ys=requestAnimationFrame(hd),_t&&_t.update(),lt&&Ft&&(Ft.updateMatrixWorld(!0),$S(Uh,Ft.matrixWorldInverse.elements),lt.drawStructure(Uh))}async function by(n,e){var w,v,D,z;const t=n.getCompound("Size"),i=[t.getNumber("x")??0,t.getNumber("y")??0,t.getNumber("z")??0],r=[Math.abs(i[0]),Math.abs(i[1]),Math.abs(i[2])],s=n.getList("BlockStatePalette"),a=[];s.forEach(I=>{if(!I.isCompound())return;const H=Sy.fromNbt(I);a.push(H)});const o=a.map(I=>I.is("minecraft:air")),c=n.has("BlockStates")?n.getLongArray("BlockStates"):null,l=c?c.getItems().map(I=>I.getAsPair()):[],u=Math.max(2,Math.ceil(Math.log2(a.length))),f=(1<<u)-1,d=r[0],h=r[1],g=r[2],_=d*h*g,m=[];let p=d,M=h,x=g,y=0,P=0,A=0,E=!1,U=performance.now();for(let I=0;I<_;I++){let H=0;if(l.length>0){const R=I*u,B=R>>>5,q=(I+1)*u-1>>>5,V=R&31,J=B>>>1;let te,ue;if(B&1?(te=((D=l[J])==null?void 0:D[0])??0,ue=((z=l[J+1])==null?void 0:z[1])??0):(te=((w=l[J])==null?void 0:w[1])??0,ue=((v=l[J])==null?void 0:v[0])??0),B===q)H=te>>>V&f;else{const Me=32-V;H=te>>>V&f|ue<<Me&f}}if(H>=0&&H<a.length&&!o[H]){const R=I%d,B=Math.floor(I/(d*g)),q=Math.floor(I/d)%g;m.push({pos:[R,B,q],state:H}),R<p&&(p=R),B<M&&(M=B),q<x&&(x=q),R>y&&(y=R),B>P&&(P=B),q>A&&(A=q),E=!0}I&32767||performance.now()-U>=12&&(e&&e(Math.floor(I/_*100)),await new Promise(B=>requestAnimationFrame(B)),U=performance.now())}if(E){Jt=[(p+y)/2,(M+P)/2,(x+A)/2];const I=y-p+1,H=P-M+1,R=A-x+1;io=Math.max(1,.5*Math.sqrt(I*I+H*H+R*R))}else Jt=[d/2,h/2,g/2],io=Math.max(1,Math.max(d,h,g)/2);return e&&e(100),new ud(r,a,m)}window.loadLitematic=async function(){try{ql&&await ql,to=await(await fetch("./model.litematic")).arrayBuffer(),Ns=Vn.read(new Uint8Array(to)).root;const t=Ns.getCompound("Regions");let i=[];t&&typeof t.keys=="function"?i=Array.from(t.keys()):t&&(i=Object.keys(t)),i=i.filter(r=>typeof r=="string"&&r!=="properties"&&r!=="constructor"&&r!=="__proto__"),i.length===0&&(i=["Region1"]),no=i[0],window.AndroidHost&&window.AndroidHost.onRegionsParsed(JSON.stringify(i)),await fd(no),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS")}catch(n){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(n==null?void 0:n.message))}};async function fd(n){if(!to||!Xl||!Ns)return;if(lt){try{lt.renderer.dispose()}catch{}lt=null}Us.innerHTML="",_i=document.createElement("canvas"),_i.style.width="100%",_i.style.height="100%",Us.appendChild(_i);const t=Ns.getCompound("Regions").getCompound(n);lr=await by(t,u=>{window.AndroidHost&&window.AndroidHost.onLoadingProgress(`DECODING_${u}%`)});const i=lr.getSize(),r=i[0]*i[1]*i[2],s=Math.max(i[0],i[1],i[2]),a=r>1e6||s>128?32:16,o={asyncBuild:!0,asyncChunkBuildTimeMs:12,chunkSize:[a,a,a]};lt=new oc(_i,lr,Xl,o),lt.sunlight&&lt.sunlight.fog&&(lt.sunlight.fog.density=0,lt.sunlight.fog.heightFalloff=0),lt.setViewport(0,0,window.innerWidth,window.innerHeight),lt.camera=Ft,lt.skyScene&&lt.skyScene.clear(),lt.renderer&&lt.renderer.setClearColor(11062,1);const c=window.innerWidth/window.innerHeight;Fi.far=1e5,Fi.aspect=c,Fi.updateProjectionMatrix(),En.far=1e5,En.updateProjectionMatrix(),_t&&_t.dispose(),_t=new df(Ft,_i),_t.enableDamping=!0,_t.dampingFactor=.05,_t.target.set(Jt[0],Jt[1],Jt[2]);const l=Math.max(io*2.2,10);Ft.position.set(Jt[0]+l,Jt[1]+l*.8,Jt[2]+l),_t.update(),ys===null&&hd(),await lt.whenReady(),Ey()}function Ey(){if(lr)try{const n=lr,e=n.blocks||[],t=n.palette||[],i={};let r=0;for(let s=0;s<e.length;s++){const a=e[s];if(a){const o=t[a.state];if(o){const c=o.getName().toString();c!=="minecraft:air"&&c!=="minecraft:cave_air"&&c!=="minecraft:void_air"&&(i[c]=(i[c]||0)+1,r++)}}}window.AndroidHost&&window.AndroidHost.onStatisticsUpdated(r,JSON.stringify(i))}catch(n){console.error("Error collecting block statistics: ",n)}}window.toggleCameraView=function(){if(!_t||!_i)return;const n=_t.target.clone(),e=Ft.position.clone();if(Ft===Fi){const t=window.innerWidth/window.innerHeight,r=Math.max(e.distanceTo(n),5)*Math.tan(Fi.fov*Math.PI/360)*2,s=r*t;En.left=-s/2,En.right=s/2,En.top=r/2,En.bottom=-r/2,En.far=1e5,En.updateProjectionMatrix(),Ft=En}else Ft=Fi;Ft.position.copy(e),lt&&(lt.camera=Ft,lt.sunlight&&lt.sunlight.postProcess&&(Ft===En?lt.sunlight.postProcess.enabled=!1:lt.sunlight.postProcess.enabled=!0)),_t.dispose(),_t=new df(Ft,_i),_t.enableDamping=!0,_t.dampingFactor=.05,_t.target.copy(n),_t.update()};window.resetCamera=function(){if(!lr||!_t)return;const n=Math.max(io*2.2,10);_t.target.set(Jt[0],Jt[1],Jt[2]),Ft.position.set(Jt[0]+n,Jt[1]+n*.8,Jt[2]+n),_t.update()};window.switchRegion=async function(n){n!==no&&(window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),no=n,await fd(n),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS"))};
