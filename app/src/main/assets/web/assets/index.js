var Ed=Object.defineProperty;var Td=(n,e,t)=>e in n?Ed(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var R=(n,e,t)=>Td(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="164",_r={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ad=0,_c=1,Cd=2,Vh=1,Rd=2,ti=3,vn=0,rn=1,Bn=2,Ci=0,Gr=1,vc=2,xc=3,Sc=4,Pd=5,Ki=100,Ld=101,Dd=102,Id=103,Ud=104,Nd=200,Fd=201,Od=202,kd=203,bl=204,El=205,Bd=206,zd=207,Hd=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,$d=214,Yd=0,jd=1,Zd=2,Ua=3,Kd=4,Jd=5,Qd=6,ep=7,Wh=0,tp=1,np=2,Ri=0,ip=1,rp=2,sp=3,ap=4,op=5,lp=6,cp=7,Xh=300,Yr=301,jr=302,Tl=303,Al=304,oo=306,Cl=1e3,Rn=1001,Rl=1002,vt=1003,up=1004,$s=1005,jt=1006,So=1007,tr=1008,ki=1009,hp=1010,fp=1011,qh=1012,$h=1013,Bi=1014,Pn=1015,Zr=1016,Yh=1017,jh=1018,Us=1020,dp=35902,pp=1021,mp=1022,Wt=1023,gp=1024,_p=1025,Pi=1026,Ms=1027,vp=1028,Zh=1029,xp=1030,Kh=1031,Jh=1033,yo=33776,wo=33777,Mo=33778,bo=33779,yc=35840,wc=35841,Mc=35842,bc=35843,Ec=36196,Tc=37492,Ac=37496,Cc=37808,Rc=37809,Pc=37810,Lc=37811,Dc=37812,Ic=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,kc=37818,Bc=37819,zc=37820,Hc=37821,Eo=36492,Gc=36494,Vc=36495,Sp=36283,Wc=36284,Xc=36285,qc=36286,yp=3200,wp=3201,Mp=0,bp=1,Mi="",Fn="srgb",Hi="srgb-linear",Ql="display-p3",lo="display-p3-linear",Na="linear",ft="srgb",Fa="rec709",Oa="p3",xr=7680,$c=519,Ep=512,Tp=513,Ap=514,Qh=515,Cp=516,Rp=517,Pp=518,Lp=519,Yc=35044,jc="300 es",si=2e3,ka=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,Pl=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function Dp(n,e){return(n%e+e)%e}function To(n,e,t){return(1-t)*n+t*e}function ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ip={DEG2RAD:Ra};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],x=r[4],S=r[7],C=r[2],A=r[5],E=r[8];return s[0]=a*_+o*w+c*C,s[3]=a*m+o*x+c*A,s[6]=a*p+o*S+c*E,s[1]=l*_+u*w+h*C,s[4]=l*m+u*x+h*A,s[7]=l*p+u*S+h*E,s[2]=d*_+f*w+g*C,s[5]=d*m+f*x+g*A,s[8]=d*p+f*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new We;function ef(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Up(){const n=Ba("canvas");return n.style.display="block",n}const Zc={};function Np(n){n in Zc||(Zc[n]=!0,console.warn(n))}const Kc=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[Hi]:{transfer:Na,primaries:Fa,toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:ft,primaries:Fa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lo]:{transfer:Na,primaries:Oa,toReference:n=>n.applyMatrix3(Jc),fromReference:n=>n.applyMatrix3(Kc)},[Ql]:{transfer:ft,primaries:Oa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Jc),fromReference:n=>n.applyMatrix3(Kc).convertLinearToSRGB()}},Fp=new Set([Hi,lo]),lt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ys[e].toReference,r=Ys[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ys[n].primaries},getTransfer:function(n){return n===Mi?Na:Ys[n].transfer}};function Vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Sr;class Op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Ba("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vr(t[i]/255)*255):t[i]=Vr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kp=0;class tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ro(r[a].image)):s.push(Ro(r[a]))}else s=Ro(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Op.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bp=0;class Jt extends mr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Rn,r=Rn,s=jt,a=tr,o=Wt,c=ki,l=Jt.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Ns(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cl:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cl:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Xh;Jt.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(f+1)/2,C=(p+1)/2,A=(u+d)/4,E=(h+_)/4,I=(g+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=I/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=I/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zp extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends zp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nf extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hp extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,p*w);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const S=o*w;if(c=c*m+d*S,l=l*m+f*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new O,Qc=new cr;class Fs{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Zs.subVectors(this.max,cs),yr.subVectors(e.a,cs),wr.subVectors(e.b,cs),Mr.subVectors(e.c,cs),fi.subVectors(wr,yr),di.subVectors(Mr,wr),Vi.subVectors(yr,Mr);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Vi.z,Vi.y,fi.z,0,-fi.x,di.z,0,-di.x,Vi.z,0,-Vi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Vi.y,Vi.x,0];return!Lo(t,yr,wr,Mr,Zs)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,yr,wr,Mr,Zs))?!1:(Ks.crossVectors(fi,di),t=[Ks.x,Ks.y,Ks.z],Lo(t,yr,wr,Mr,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new O,new O,new O,new O,new O,new O,new O,new O],yn=new O,js=new Fs,yr=new O,wr=new O,Mr=new O,fi=new O,di=new O,Vi=new O,cs=new O,Zs=new O,Ks=new O,Wi=new O;function Lo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wi.fromArray(n,s);const o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Gp=new Fs,us=new O,Do=new O;class co{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Do)),this.expandByPoint(us.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new O,Io=new O,Js=new O,pi=new O,Uo=new O,Qs=new O,No=new O;class ec{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Io.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Io);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=pi.dot(this.direction),c=-pi.dot(Js),l=pi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Io).addScaledVector(Js,d),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,r,s){Uo.subVectors(t,e),Qs.subVectors(i,e),No.crossVectors(Uo,Qs);let a=this.direction.dot(No),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const c=o*this.direction.dot(Qs.crossVectors(pi,Qs));if(c<0)return null;const l=o*this.direction.dot(Uo.cross(pi));if(l<0||c+l>a)return null;const u=-o*pi.dot(No);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Wp)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),mi.crossVectors(i,on),mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),mi.crossVectors(i,on)),mi.normalize(),ea.crossVectors(on,mi),r[0]=mi.x,r[4]=ea.x,r[8]=on.x,r[1]=mi.y,r[5]=ea.y,r[9]=on.y,r[2]=mi.z,r[6]=ea.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],x=i[7],S=i[11],C=i[15],A=r[0],E=r[4],I=r[8],M=r[12],v=r[1],D=r[5],V=r[9],U=r[13],z=r[2],L=r[6],H=r[10],K=r[14],X=r[3],Q=r[7],re=r[11],fe=r[15];return s[0]=a*A+o*v+c*z+l*X,s[4]=a*E+o*D+c*L+l*Q,s[8]=a*I+o*V+c*H+l*re,s[12]=a*M+o*U+c*K+l*fe,s[1]=u*A+h*v+d*z+f*X,s[5]=u*E+h*D+d*L+f*Q,s[9]=u*I+h*V+d*H+f*re,s[13]=u*M+h*U+d*K+f*fe,s[2]=g*A+_*v+m*z+p*X,s[6]=g*E+_*D+m*L+p*Q,s[10]=g*I+_*V+m*H+p*re,s[14]=g*M+_*U+m*K+p*fe,s[3]=w*A+x*v+S*z+C*X,s[7]=w*E+x*D+S*L+C*Q,s[11]=w*I+x*V+S*H+C*re,s[15]=w*M+x*U+S*K+C*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*l-_*d*l+_*c*f-o*m*f-h*c*p+o*d*p,x=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,S=u*_*l-g*h*l+g*o*f-a*_*f-u*o*p+a*h*p,C=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,A=t*w+i*x+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=w*E,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*E,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*E,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*E,e[4]=x*E,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*E,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*E,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*E,e[8]=S*E,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*E,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*E,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*E,e[12]=C*E,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*E,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*E,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,w=c*l,x=c*u,S=c*h,C=i.x,A=i.y,E=i.z;return r[0]=(1-(_+p))*C,r[1]=(f+S)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(f-S)*A,r[5]=(1-(d+p))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+x)*E,r[9]=(m-w)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const a=br.set(r[4],r[5],r[6]).length(),o=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const l=1/s,u=1/a,h=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=si){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===si)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ka)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=si){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*l,f=(i+r)*u;let g,_;if(o===si)g=(a+s)*h,_=-2*h;else if(o===ka)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new O,wn=new ct,Vp=new O(0,0,0),Wp=new O(1,1,1),mi=new O,ea=new O,on=new O,eu=new ct,tu=new cr;class li{constructor(e=0,t=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xp=0;const nu=new O,Er=new cr,Kn=new ct,ta=new O,hs=new O,qp=new O,$p=new cr,iu=new O(1,0,0),ru=new O(0,1,0),su=new O(0,0,1),au={type:"added"},Yp={type:"removed"},Tr={type:"childadded",child:null},Fo={type:"childremoved",child:null};class sn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new O,t=new li,i=new cr,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new We}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ta.copy(e):ta.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(hs,ta,this.up):Kn.lookAt(ta,hs,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(Kn),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new O,Jn=new O,Oo=new O,Qn=new O,Ar=new O,Cr=new O,ou=new O,ko=new O,Bo=new O,zo=new O;class zn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mn.subVectors(r,t),Jn.subVectors(i,t),Oo.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Jn),c=Mn.dot(Oo),l=Jn.dot(Jn),u=Jn.dot(Oo),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static isFrontFacing(e,t,i,r){return Mn.subVectors(i,t),Jn.subVectors(e,t),Mn.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Mn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ar.subVectors(r,i),Cr.subVectors(s,i),ko.subVectors(e,i);const c=Ar.dot(ko),l=Cr.dot(ko);if(c<=0&&l<=0)return t.copy(i);Bo.subVectors(e,r);const u=Ar.dot(Bo),h=Cr.dot(Bo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Ar,a);zo.subVectors(e,s);const f=Ar.dot(zo),g=Cr.dot(zo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Cr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ou.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(ou,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Ar,a).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},na={h:0,s:0,l:0};function Ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=Dp(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ho(a,s,e+1/3),this.g=Ho(a,s,e),this.b=Ho(a,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return lt.fromWorkingColorSpace(Gt.copy(this),e),Math.round($t(Gt.r*255,0,255))*65536+Math.round($t(Gt.g*255,0,255))*256+Math.round($t(Gt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Fn){lt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(na);const i=To(gi.h,na.h,t),r=To(gi.s,na.s,t),s=To(gi.l,na.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gt=new je;je.NAMES=sf;let jp=0;class Os extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Gr,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=El,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class af extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new O,ia=new Re;class Tt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Np("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class of extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lf extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zp=0;const pn=new ct,Go=new sn,Rr=new O,ln=new Fs,fs=new Fs,Pt=new O;class In extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ef(e)?lf:of)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(ln.min,fs.min),ln.expandByPoint(Pt),Pt.addVectors(ln.max,fs.max),ln.expandByPoint(Pt)):(ln.expandByPoint(fs.min),ln.expandByPoint(fs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Pt.fromBufferAttribute(o,l),c&&(Rr.fromBufferAttribute(e,l),Pt.add(Rr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new O,c[I]=new O;const l=new O,u=new O,h=new O,d=new Re,f=new Re,g=new Re,_=new O,m=new O;function p(I,M,v){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,v),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[I].add(_),o[M].add(_),o[v].add(_),c[I].add(m),c[M].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,M=w.length;I<M;++I){const v=w[I],D=v.start,V=v.count;for(let U=D,z=D+V;U<z;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new O,S=new O,C=new O,A=new O;function E(I){C.fromBufferAttribute(r,I),A.copy(C);const M=o[I];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(A,M);const D=S.dot(c[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,D)}for(let I=0,M=w.length;I<M;++I){const v=w[I],D=v.start,V=v.count;for(let U=D,z=D+V;U<z;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new ct,Xi=new ec,ra=new co,cu=new O,Pr=new O,Lr=new O,Dr=new O,Vo=new O,sa=new O,aa=new Re,oa=new Re,la=new Re,uu=new O,hu=new O,fu=new O,ca=new O,ua=new O;let Xt=class extends sn{constructor(e=new In,t=new af){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){sa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Vo.fromBufferAttribute(h,e),a?sa.addScaledVector(Vo,u):sa.addScaledVector(Vo.sub(t),u))}t.add(sa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(ra.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ra,cu)===null||Xi.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(lu),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,C=x;S<C;S+=3){const A=o.getX(S),E=o.getX(S+1),I=o.getX(S+2);r=ha(this,p,e,i,l,u,h,A,E,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=ha(this,a,e,i,l,u,h,w,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,C=x;S<C;S+=3){const A=S,E=S+1,I=S+2;r=ha(this,p,e,i,l,u,h,A,E,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,x=m+1,S=m+2;r=ha(this,a,e,i,l,u,h,w,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Kp(n,e,t,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===vn,o),c===null)return null;ua.copy(o),ua.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ua);return l<t.near||l>t.far?null:{distance:l,point:ua.clone(),object:n}}function ha(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Pr),n.getVertexPosition(c,Lr),n.getVertexPosition(l,Dr);const u=Kp(n,e,t,i,Pr,Lr,Dr,ca);if(u){r&&(aa.fromBufferAttribute(r,o),oa.fromBufferAttribute(r,c),la.fromBufferAttribute(r,l),u.uv=zn.getInterpolation(ca,Pr,Lr,Dr,aa,oa,la,new Re)),s&&(aa.fromBufferAttribute(s,o),oa.fromBufferAttribute(s,c),la.fromBufferAttribute(s,l),u.uv1=zn.getInterpolation(ca,Pr,Lr,Dr,aa,oa,la,new Re)),a&&(uu.fromBufferAttribute(a,o),hu.fromBufferAttribute(a,c),fu.fromBufferAttribute(a,l),u.normal=zn.getInterpolation(ca,Pr,Lr,Dr,uu,hu,fu,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};zn.getNormal(Pr,Lr,Dr,h.normal),u.face=h}return u}class ks extends In{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function g(_,m,p,w,x,S,C,A,E,I,M){const v=S/E,D=C/I,V=S/2,U=C/2,z=A/2,L=E+1,H=I+1;let K=0,X=0;const Q=new O;for(let re=0;re<H;re++){const fe=re*D-U;for(let be=0;be<L;be++){const Ie=be*v-V;Q[_]=Ie*w,Q[m]=fe*x,Q[p]=z,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(be/E),h.push(1-re/I),K+=1}}for(let re=0;re<I;re++)for(let fe=0;fe<E;fe++){const be=d+fe+L*re,Ie=d+fe+L*(re+1),Y=d+(fe+1)+L*(re+1),ae=d+(fe+1)+L*re;c.push(be,Ie,ae),c.push(Ie,Y,ae),X+=6}o.addGroup(f,X,M),f+=X,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const r in i)e[r]=i[r]}return e}function Jp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Qp={clone:Kr,merge:qt};var em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=Jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uf extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new O,du=new Re,pu=new Re;class un extends uf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,du,pu),t.subVectors(pu,du)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Ur=1;class nm extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Ir,Ur,e,t);r.layers=this.layers,this.add(r);const s=new un(Ir,Ur,e,t);s.layers=this.layers,this.add(s);const a=new un(Ir,Ur,e,t);a.layers=this.layers,this.add(a);const o=new un(Ir,Ur,e,t);o.layers=this.layers,this.add(o);const c=new un(Ir,Ur,e,t);c.layers=this.layers,this.add(c);const l=new un(Ir,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hf extends Jt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class im extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ks(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Ci});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),o=t.minFilter;return t.minFilter===tr&&(t.minFilter=jt),new nm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Wo=new O,rm=new O,sm=new We;class Si{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wo.subVectors(i,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sm.getNormalMatrix(e),r=this.coplanarPoint(Wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new co,fa=new O;class ff{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,a=new Si){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],w=r[13],x=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,m-f,S-p).normalize(),i[1].setComponents(c+s,d+l,m+f,S+p).normalize(),i[2].setComponents(c+a,d+u,m+g,S+w).normalize(),i[3].setComponents(c-a,d-u,m-g,S-w).normalize(),i[4].setComponents(c-o,d-h,m-_,S-x).normalize(),t===si)i[5].setComponents(c+o,d+h,m+_,S+x).normalize();else if(t===ka)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function df(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function am(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,o),h.count===-1&&d.length===0&&n.bufferSubData(l,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class sr extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let x=0;x<l;x++){const S=x*h-s;g.push(S,-w,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const x=w+l*p,S=w+l*(p+1),C=w+1+l*(p+1),A=w+1+l*p;f.push(x,S,A),f.push(S,C,A)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
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
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`
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
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,sg=`struct PhysicalMaterial {
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
}`,ag=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
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
#endif`,yg=`#ifdef USE_MORPHNORMALS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rg=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xg=`float getShadowMask() {
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
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,x0=`uniform vec3 diffuse;
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
}`,y0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
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
}`,b0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
}`,T0=`#define NORMAL
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
}`,A0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,P0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,D0=`#define TOON
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
}`,I0=`#define TOON
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
}`,U0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,k0=`uniform float rotation;
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
}`,B0=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:om,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:um,alphatest_fragment:hm,alphatest_pars_fragment:fm,aomap_fragment:dm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:_m,beginnormal_vertex:vm,bsdfs:xm,iridescence_fragment:Sm,bumpmap_pars_fragment:ym,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Em,color_fragment:Tm,color_pars_fragment:Am,color_pars_vertex:Cm,color_vertex:Rm,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Im,displacementmap_vertex:Um,emissivemap_fragment:Nm,emissivemap_pars_fragment:Fm,colorspace_fragment:Om,colorspace_pars_fragment:km,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Hm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Qm,envmap_vertex:Vm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:qm,fog_pars_fragment:$m,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:jm,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Km,lights_pars_begin:Jm,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:rg,lights_physical_pars_fragment:sg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:vg,morphinstance_vertex:xg,morphcolor_vertex:Sg,morphnormal_vertex:yg,morphtarget_pars_vertex:wg,morphtarget_vertex:Mg,normal_fragment_begin:bg,normal_fragment_maps:Eg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Cg,normalmap_pars_fragment:Rg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ig,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:kg,dithering_pars_fragment:Bg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:$g,skinning_vertex:Yg,skinnormal_vertex:jg,specularmap_fragment:Zg,specularmap_pars_fragment:Kg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:e0,transmission_pars_fragment:t0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:r0,worldpos_vertex:s0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:u0,cube_frag:h0,depth_vert:f0,depth_frag:d0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:g0,equirect_frag:_0,linedashed_vert:v0,linedashed_frag:x0,meshbasic_vert:S0,meshbasic_frag:y0,meshlambert_vert:w0,meshlambert_frag:M0,meshmatcap_vert:b0,meshmatcap_frag:E0,meshnormal_vert:T0,meshnormal_frag:A0,meshphong_vert:C0,meshphong_frag:R0,meshphysical_vert:P0,meshphysical_frag:L0,meshtoon_vert:D0,meshtoon_frag:I0,points_vert:U0,points_frag:N0,shadow_vert:F0,shadow_frag:O0,sprite_vert:k0,sprite_frag:B0},ge={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},kn={basic:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:qt([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:qt([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:qt([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:qt([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:qt([ge.lights,ge.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};kn.physical={uniforms:qt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const da={r:0,b:0,g:0},$i=new li,z0=new ct;function H0(n,e,t,i,r,s,a){const o=new je(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function _(w){let x=!1;const S=g(w);S===null?p(o,c):S&&S.isColor&&(p(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(w,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===oo)?(u===void 0&&(u=new Xt(new ks(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Kr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler($i)),u.material.toneMapped=lt.getTransfer(S.colorSpace)!==ft,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Xt(new sr(2,2),new Vt({name:"BackgroundMaterial",uniforms:Kr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=lt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,x){w.getRGB(da,cf(n)),i.buffers.color.setClear(da.r,da.g,da.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:_,addToRenderList:m}}function G0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,D,V,U,z){let L=!1;const H=h(U,V,D);s!==H&&(s=H,l(s.object)),L=f(v,U,V,z),L&&g(v,U,V,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,S(v,D,V,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,D,V){const U=V.wireframe===!0;let z=i[v.id];z===void 0&&(z={},i[v.id]=z);let L=z[D.id];L===void 0&&(L={},z[D.id]=L);let H=L[U];return H===void 0&&(H=d(c()),L[U]=H),H}function d(v){const D=[],V=[],U=[];for(let z=0;z<t;z++)D[z]=0,V[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:U,object:v,attributes:{},index:null}}function f(v,D,V,U){const z=s.attributes,L=D.attributes;let H=0;const K=V.getAttributes();for(const X in K)if(K[X].location>=0){const re=z[X];let fe=L[X];if(fe===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==U}function g(v,D,V,U){const z={},L=D.attributes;let H=0;const K=V.getAttributes();for(const X in K)if(K[X].location>=0){let re=L[X];re===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),z[X]=fe,H++}s.attributes=z,s.attributesNum=H,s.index=U}function _(){const v=s.newAttributes;for(let D=0,V=v.length;D<V;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const V=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;V[v]=1,U[v]===0&&(n.enableVertexAttribArray(v),U[v]=1),z[v]!==D&&(n.vertexAttribDivisor(v,D),z[v]=D)}function w(){const v=s.newAttributes,D=s.enabledAttributes;for(let V=0,U=D.length;V<U;V++)D[V]!==v[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function x(v,D,V,U,z,L,H){H===!0?n.vertexAttribIPointer(v,D,V,z,L):n.vertexAttribPointer(v,D,V,U,z,L)}function S(v,D,V,U){_();const z=U.attributes,L=V.getAttributes(),H=D.defaultAttributeValues;for(const K in L){const X=L[K];if(X.location>=0){let Q=z[K];if(Q===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const re=Q.normalized,fe=Q.itemSize,be=e.get(Q);if(be===void 0)continue;const Ie=be.buffer,Y=be.type,ae=be.bytesPerElement,ve=Y===n.INT||Y===n.UNSIGNED_INT||Q.gpuType===$h;if(Q.isInterleavedBufferAttribute){const le=Q.data,Ue=le.stride,ie=Q.offset;if(le.isInstancedInterleavedBuffer){for(let N=0;N<X.locationSize;N++)p(X.location+N,le.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let N=0;N<X.locationSize;N++)m(X.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let N=0;N<X.locationSize;N++)x(X.location+N,fe/X.locationSize,Y,re,Ue*ae,(ie+fe/X.locationSize*N)*ae,ve)}else{if(Q.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)p(X.location+le,Q.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let le=0;le<X.locationSize;le++)x(X.location+le,fe/X.locationSize,Y,re,fe*ae,fe/X.locationSize*le*ae,ve)}}else if(H!==void 0){const re=H[K];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(X.location,re);break;case 3:n.vertexAttrib3fv(X.location,re);break;case 4:n.vertexAttrib4fv(X.location,re);break;default:n.vertexAttrib1fv(X.location,re)}}}}w()}function C(){I();for(const v in i){const D=i[v];for(const V in D){const U=D[V];for(const z in U)u(U[z].object),delete U[z];delete D[V]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;const D=i[v.id];for(const V in D){const U=D[V];for(const z in U)u(U[z].object),delete U[z];delete D[V]}delete i[v.id]}function E(v){for(const D in i){const V=i[D];if(V[v.id]===void 0)continue;const U=V[v.id];for(const z in U)u(U[z].object),delete U[z];delete V[v.id]}}function I(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function V0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function W0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Wt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===Zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ki&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!E)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function X0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Si,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,x=w*4;let S=p.clippingState||null;c.value=S,S=u(g,d,x,f);for(let C=0;C!==x;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==_;++x,S+=4)a.copy(h[x]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function q0(n){let e=new WeakMap;function t(a,o){return o===Tl?a.mapping=Yr:o===Al&&(a.mapping=jr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tl||o===Al)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new im(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class za extends uf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hr=4,mu=[.125,.215,.35,.446,.526,.582],Ji=20,Xo=new za,gu=new je;let qo=null,$o=0,Yo=0,jo=!1;const Zi=(1+Math.sqrt(5))/2,Nr=1/Zi,_u=[new O(-Zi,Nr,0),new O(Zi,Nr,0),new O(-Nr,0,Zi),new O(Nr,0,Zi),new O(0,Zi,-Nr),new O(0,Zi,Nr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,$o,Yo),this._renderer.xr.enabled=jo,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Zr,format:Wt,colorSpace:Hi,depthBuffer:!1},r=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(s)),this._blurMaterial=Y0(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,i,r){const o=new un(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(gu),u.toneMapping=Ri,u.autoClear=!1;const f=new af({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Xt(new ks,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(gu),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;pa(r,w*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;pa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_u[(r-s-1)%_u.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let w=0;for(let E=0;E<Ji;++E){const I=E/_,M=Math.exp(-I*I/2);p.push(M),E===0?w+=M:E<m&&(w+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Hr?r-x+Hr:0),A=4*(this._cubeSize-S);pa(t,C,A,3*S,2*S),c.setRenderTarget(t),c.render(h,Xo)}}function $0(n){const e=[],t=[],i=[];let r=n;const s=n-Hr+1+mu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Hr?c=mu[a-n+Hr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,I=A>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];w.set(M,_*g*A),x.set(d,m*g*A);const v=[A,A,A,A,A,A];S.set(v,p*g*A)}const C=new In;C.setAttribute("position",new Tt(w,_)),C.setAttribute("uv",new Tt(x,m)),C.setAttribute("faceIndex",new Tt(S,p)),e.push(C),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xu(n,e,t){const i=new Ln(n,e,t);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Y0(n,e,t){const i=new Float32Array(Ji),r=new O(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Su(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function yu(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function j0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Tl||c===Al,u=c===Yr||c===jr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new vu(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new vu(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Z0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function K0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let x=0,S=w.length;x<S;x+=3){const C=w[x+0],A=w[x+1],E=w[x+2];d.push(C,A,A,E,E,C)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,S=w.length/3-1;x<S;x+=3){const C=x+0,A=x+1,E=x+2;d.push(C,A,A,E,E,C)}}else return;const m=new(ef(d)?lf:of)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function J0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,f[m]);else{_.multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w];for(let w=0;w<_.length;w++)t.update(p,i,_[w])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Q0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e_(n,e,t){const i=new WeakMap,r=new kt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=o.attributes.position.count*x,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*C*4*h),E=new nf(A,S,C,h);E.type=Pn,E.needsUpdate=!0;const I=x*4;for(let v=0;v<h;v++){const D=m[v],V=p[v],U=w[v],z=S*C*4*v;for(let L=0;L<D.count;L++){const H=L*I;f===!0&&(r.fromBufferAttribute(D,L),A[z+H+0]=r.x,A[z+H+1]=r.y,A[z+H+2]=r.z,A[z+H+3]=0),g===!0&&(r.fromBufferAttribute(V,L),A[z+H+4]=r.x,A[z+H+5]=r.y,A[z+H+6]=r.z,A[z+H+7]=0),_===!0&&(r.fromBufferAttribute(U,L),A[z+H+8]=r.x,A[z+H+9]=r.y,A[z+H+10]=r.z,A[z+H+11]=U.itemSize===4?r.w:1)}}d={count:h,texture:E,size:new Re(S,C)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function t_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Ha extends Jt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Pi,u!==Pi&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pi&&(i=Bi),i===void 0&&u===Ms&&(i=Us),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pf=new Jt,mf=new Ha(1,1);mf.compareFunction=Qh;const gf=new nf,_f=new Hp,vf=new hf,wu=[],Mu=[],bu=new Float32Array(16),Eu=new Float32Array(9),Tu=new Float32Array(4);function ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wu[r];if(s===void 0&&(s=new Float32Array(r),wu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uo(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function a_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),Ct(t,i)}}function o_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),Ct(t,i)}}function l_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),Ct(t,i)}}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function d_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function __(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?mf:pf;t.setTexture2D(e||s,r)}function v_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_f,r)}function x_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vf,r)}function S_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gf,r)}function y_(n){switch(n){case 5126:return n_;case 35664:return i_;case 35665:return r_;case 35666:return s_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return S_}}function w_(n,e){n.uniform1fv(this.addr,e)}function M_(n,e){const t=ts(e,this.size,2);n.uniform2fv(this.addr,t)}function b_(n,e){const t=ts(e,this.size,3);n.uniform3fv(this.addr,t)}function E_(n,e){const t=ts(e,this.size,4);n.uniform4fv(this.addr,t)}function T_(n,e){const t=ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A_(n,e){const t=ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function C_(n,e){const t=ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function R_(n,e){n.uniform1iv(this.addr,e)}function P_(n,e){n.uniform2iv(this.addr,e)}function L_(n,e){n.uniform3iv(this.addr,e)}function D_(n,e){n.uniform4iv(this.addr,e)}function I_(n,e){n.uniform1uiv(this.addr,e)}function U_(n,e){n.uniform2uiv(this.addr,e)}function N_(n,e){n.uniform3uiv(this.addr,e)}function F_(n,e){n.uniform4uiv(this.addr,e)}function O_(n,e,t){const i=this.cache,r=e.length,s=uo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||pf,s[a])}function k_(n,e,t){const i=this.cache,r=e.length,s=uo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_f,s[a])}function B_(n,e,t){const i=this.cache,r=e.length,s=uo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vf,s[a])}function z_(n,e,t){const i=this.cache,r=e.length,s=uo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gf,s[a])}function H_(n){switch(n){case 5126:return w_;case 35664:return M_;case 35665:return b_;case 35666:return E_;case 35674:return T_;case 35675:return A_;case 35676:return C_;case 5124:case 35670:return R_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return I_;case 36294:return U_;case 36295:return N_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class G_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}}class V_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}}class W_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Au(n,e){n.seq.push(e),n.map[e.id]=e}function X_(n,e,t){const i=n.name,r=i.length;for(Zo.lastIndex=0;;){const s=Zo.exec(i),a=Zo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Au(t,l===void 0?new G_(o,n,e):new V_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new W_(o),Au(t,h)),t=h}}}class Pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);X_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Cu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q_=37297;let $_=0;function Y_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function j_(n){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n);let i;switch(e===t?i="":e===Oa&&t===Fa?i="LinearDisplayP3ToLinearSRGB":e===Fa&&t===Oa&&(i="LinearSRGBToLinearDisplayP3"),n){case Hi:case lo:return[i,"LinearTransferOETF"];case Fn:case Ql:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ru(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Y_(n.getShaderSource(e),a)}else return r}function Z_(n,e){const t=j_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K_(n,e){let t;switch(e){case ip:t="Linear";break;case rp:t="Reinhard";break;case sp:t="OptimizedCineon";break;case ap:t="ACESFilmic";break;case lp:t="AgX";break;case cp:t="Neutral";break;case op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Q_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ev(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function gs(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(n){return n.replace(tv,iv)}const nv=new Map;function iv(n,e){let t=Ve[e];if(t===void 0){const i=nv.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ll(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(rv,sv)}function sv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function av(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function ov(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yr:case jr:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function cv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wh:e="ENVMAP_BLENDING_MULTIPLY";break;case tp:e="ENVMAP_BLENDING_MIX";break;case np:e="ENVMAP_BLENDING_ADD";break}return e}function uv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=av(t),l=ov(t),u=lv(t),h=cv(t),d=uv(t),f=J_(t),g=Q_(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ri?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=Ll(a),a=Pu(a,t),a=Lu(a,t),o=Ll(o),o=Pu(o,t),o=Lu(o,t),a=Du(a),o=Du(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+a,S=w+p+o,C=Cu(r,r.VERTEX_SHADER,x),A=Cu(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(C).trim(),z=r.getShaderInfoLog(A).trim();let L=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,A);else{const K=Ru(r,C,"vertex"),X=Ru(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+K+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||z==="")&&(H=!1);H&&(D.diagnostics={runnable:L,programLog:V,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(C),r.deleteShader(A),I=new Pa(r,_),M=ev(r,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,q_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let fv=0;class dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pv(e),t.set(e,i)),i}}class pv{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}}function mv(n,e,t,i,r,s,a){const o=new rf,c=new dv,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,D,V,U){const z=V.fog,L=U.geometry,H=M.isMeshStandardMaterial?V.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),X=K&&K.mapping===oo?K.image.height:null,Q=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const re=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,fe=re!==void 0?re.length:0;let be=0;L.morphAttributes.position!==void 0&&(be=1),L.morphAttributes.normal!==void 0&&(be=2),L.morphAttributes.color!==void 0&&(be=3);let Ie,Y,ae,ve;if(Q){const Je=kn[Q];Ie=Je.vertexShader,Y=Je.fragmentShader}else Ie=M.vertexShader,Y=M.fragmentShader,c.update(M),ae=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);const le=n.getRenderTarget(),Ue=U.isInstancedMesh===!0,ie=U.isBatchedMesh===!0,N=!!M.map,ne=!!M.matcap,B=!!K,_e=!!M.aoMap,me=!!M.lightMap,Me=!!M.bumpMap,Te=!!M.normalMap,Pe=!!M.displacementMap,Ke=!!M.emissiveMap,P=!!M.metalnessMap,b=!!M.roughnessMap,G=M.anisotropy>0,j=M.clearcoat>0,te=M.dispersion>0,se=M.iridescence>0,ye=M.sheen>0,de=M.transmission>0,ue=G&&!!M.anisotropyMap,Ne=j&&!!M.clearcoatMap,ce=j&&!!M.clearcoatNormalMap,Ae=j&&!!M.clearcoatRoughnessMap,Ze=se&&!!M.iridescenceMap,Le=se&&!!M.iridescenceThicknessMap,Se=ye&&!!M.sheenColorMap,ke=ye&&!!M.sheenRoughnessMap,qe=!!M.specularMap,ot=!!M.specularColorMap,He=!!M.specularIntensityMap,y=de&&!!M.transmissionMap,F=de&&!!M.thicknessMap,W=!!M.gradientMap,oe=!!M.alphaMap,he=M.alphaTest>0,Be=!!M.alphaHash,$e=!!M.extensions;let mt=Ri;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Rt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:Y,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ie,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Hi,alphaToCoverage:!!M.alphaToCoverage,map:N,matcap:ne,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:X,aoMap:_e,lightMap:me,bumpMap:Me,normalMap:Te,displacementMap:d&&Pe,emissiveMap:Ke,normalMapObjectSpace:Te&&M.normalMapType===bp,normalMapTangentSpace:Te&&M.normalMapType===Mp,metalnessMap:P,roughnessMap:b,anisotropy:G,anisotropyMap:ue,clearcoat:j,clearcoatMap:Ne,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ae,dispersion:te,iridescence:se,iridescenceMap:Ze,iridescenceThicknessMap:Le,sheen:ye,sheenColorMap:Se,sheenRoughnessMap:ke,specularMap:qe,specularColorMap:ot,specularIntensityMap:He,transmission:de,transmissionMap:y,thicknessMap:F,gradientMap:W,opaque:M.transparent===!1&&M.blending===Gr&&M.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:Be,combine:M.combine,mapUv:N&&_(M.map.channel),aoMapUv:_e&&_(M.aoMap.channel),lightMapUv:me&&_(M.lightMap.channel),bumpMapUv:Me&&_(M.bumpMap.channel),normalMapUv:Te&&_(M.normalMap.channel),displacementMapUv:Pe&&_(M.displacementMap.channel),emissiveMapUv:Ke&&_(M.emissiveMap.channel),metalnessMapUv:P&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:Ne&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(M.sheenRoughnessMap.channel),specularMapUv:qe&&_(M.specularMap.channel),specularColorMapUv:ot&&_(M.specularColorMap.channel),specularIntensityMapUv:He&&_(M.specularIntensityMap.channel),transmissionMapUv:y&&_(M.transmissionMap.channel),thicknessMapUv:F&&_(M.thicknessMap.channel),alphaMapUv:oe&&_(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Te||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(N||oe),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:be,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:N&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bn,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$e&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)v.push(D),v.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(w(v,M),x(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function w(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function x(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),M.push(o.mask)}function S(M){const v=g[M.type];let D;if(v){const V=kn[v];D=Qp.clone(V.uniforms)}else D=M.uniforms;return D}function C(M,v){let D;for(let V=0,U=u.length;V<U;V++){const z=u[V];if(z.cacheKey===v){D=z,++D.usedTimes;break}}return D===void 0&&(D=new hv(n,v,M,s),u.push(D)),D}function A(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:I}}function gv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _v(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||_v),i.length>1&&i.sort(d||Uu),r.length>1&&r.sort(d||Uu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function vv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Nu,n.set(i,[a])):r>=s.length?(a=new Nu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Sv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yv=0;function wv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Mv(n){const e=new xv,t=Sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new ct,a=new ct;function o(l,u){let h=0,d=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,_=0,m=0,p=0,w=0,x=0,S=0,C=0,A=0,E=0,I=0;l.sort(wv);const M=u===!0?Math.PI:1;for(let D=0,V=l.length;D<V;D++){const U=l[D],z=U.color,L=U.intensity,H=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*L*M,d+=z.g*L*M,f+=z.b*L*M;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],L);I++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const Q=U.shadow,re=t.get(U);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,i.directionalShadow[g]=re,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=U.shadow.matrix,x++}i.directional[g]=X,g++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(z).multiplyScalar(L*M),X.distance=H,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[m]=X;const Q=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,Q.updateMatrices(U),U.castShadow&&E++),i.spotLightMatrix[m]=Q.matrix,U.castShadow){const re=t.get(U);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,i.spotShadow[m]=re,i.spotShadowMap[m]=K,C++}m++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(z).multiplyScalar(L),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=X,p++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*M),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,re=t.get(U);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,i.pointShadow[_]=re,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=U.shadow.matrix,S++}i.point[_]=X,_++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(L*M),X.groundColor.copy(U.groundColor).multiplyScalar(L*M),i.hemi[w]=X,w++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==m||v.rectAreaLength!==p||v.hemiLength!==w||v.numDirectionalShadows!==x||v.numPointShadows!==S||v.numSpotShadows!==C||v.numSpotMaps!==A||v.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=w,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,v.directionalLength=g,v.pointLength=_,v.spotLength=m,v.rectAreaLength=p,v.hemiLength=w,v.numDirectionalShadows=x,v.numPointShadows=S,v.numSpotShadows=C,v.numSpotMaps=A,v.numLightProbes=I,i.version=yv++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const x=l[p];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Fu(n){const e=new Mv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function bv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fu(n),e.set(r,[o])):s>=a.length?(o=new Fu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Ev extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tv extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cv=`uniform sampler2D shadow_pass;
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
}`;function Rv(n,e,t){let i=new ff;const r=new Re,s=new Re,a=new kt,o=new Ev({depthPacking:wp}),c=new Tv,l={},u=t.maxTextureSize,h={[vn]:rn,[rn]:vn,[Bn]:Bn},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Av,fragmentShader:Cv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let p=this.type;this.render=function(A,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),v=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ci),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=p!==ti&&this.type===ti,z=p===ti&&this.type!==ti;for(let L=0,H=A.length;L<H;L++){const K=A[L],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Q=X.getFrameExtents();if(r.multiply(Q),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,X.mapSize.y=s.y)),X.map===null||U===!0||z===!0){const fe=this.type!==ti?{minFilter:vt,magFilter:vt}:{};X.map!==null&&X.map.dispose(),X.map=new Ln(r.x,r.y,fe),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const re=X.getViewportCount();for(let fe=0;fe<re;fe++){const be=X.getViewport(fe);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),V.viewport(a),X.updateMatrices(K,fe),i=X.getFrustum(),S(E,I,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&w(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,v,D)};function w(A,E){const I=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ln(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,I,f,_,null)}function x(A,E,I,M){let v=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)v=D;else if(v=I.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const V=v.uuid,U=E.uuid;let z=l[V];z===void 0&&(z={},l[V]=z);let L=z[U];L===void 0&&(L=v.clone(),z[U]=L,E.addEventListener("dispose",C)),v=L}if(v.visible=E.visible,v.wireframe=E.wireframe,M===ti?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=n.properties.get(v);V.light=I}return v}function S(A,E,I,M,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ti)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const U=e.update(A),z=A.material;if(Array.isArray(z)){const L=U.groups;for(let H=0,K=L.length;H<K;H++){const X=L[H],Q=z[X.materialIndex];if(Q&&Q.visible){const re=x(A,Q,M,v);A.onBeforeShadow(n,A,E,I,U,re,X),n.renderBufferDirect(I,null,U,re,A,X),A.onAfterShadow(n,A,E,I,U,re,X)}}}else if(z.visible){const L=x(A,z,M,v);A.onBeforeShadow(n,A,E,I,U,L,null),n.renderBufferDirect(I,null,U,L,A,null),A.onAfterShadow(n,A,E,I,U,L,null)}}const V=A.children;for(let U=0,z=V.length;U<z;U++)S(V[U],E,I,M,v)}function C(A){A.target.removeEventListener("dispose",C);for(const I in l){const M=l[I],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}function Pv(n){function e(){let y=!1;const F=new kt;let W=null;const oe=new kt(0,0,0,0);return{setMask:function(he){W!==he&&!y&&(n.colorMask(he,he,he,he),W=he)},setLocked:function(he){y=he},setClear:function(he,Be,$e,mt,Rt){Rt===!0&&(he*=mt,Be*=mt,$e*=mt),F.set(he,Be,$e,mt),oe.equals(F)===!1&&(n.clearColor(he,Be,$e,mt),oe.copy(F))},reset:function(){y=!1,W=null,oe.set(-1,0,0,0)}}}function t(){let y=!1,F=null,W=null,oe=null;return{setTest:function(he){he?ve(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(he){F!==he&&!y&&(n.depthMask(he),F=he)},setFunc:function(he){if(W!==he){switch(he){case Yd:n.depthFunc(n.NEVER);break;case jd:n.depthFunc(n.ALWAYS);break;case Zd:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case Kd:n.depthFunc(n.EQUAL);break;case Jd:n.depthFunc(n.GEQUAL);break;case Qd:n.depthFunc(n.GREATER);break;case ep:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=he}},setLocked:function(he){y=he},setClear:function(he){oe!==he&&(n.clearDepth(he),oe=he)},reset:function(){y=!1,F=null,W=null,oe=null}}}function i(){let y=!1,F=null,W=null,oe=null,he=null,Be=null,$e=null,mt=null,Rt=null;return{setTest:function(Je){y||(Je?ve(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Je){F!==Je&&!y&&(n.stencilMask(Je),F=Je)},setFunc:function(Je,xt,ht){(W!==Je||oe!==xt||he!==ht)&&(n.stencilFunc(Je,xt,ht),W=Je,oe=xt,he=ht)},setOp:function(Je,xt,ht){(Be!==Je||$e!==xt||mt!==ht)&&(n.stencilOp(Je,xt,ht),Be=Je,$e=xt,mt=ht)},setLocked:function(Je){y=Je},setClear:function(Je){Rt!==Je&&(n.clearStencil(Je),Rt=Je)},reset:function(){y=!1,F=null,W=null,oe=null,he=null,Be=null,$e=null,mt=null,Rt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,w=null,x=null,S=null,C=null,A=new je(0,0,0),E=0,I=!1,M=null,v=null,D=null,V=null,U=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),L=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),L=H>=2);let X=null,Q={};const re=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),be=new kt().fromArray(re),Ie=new kt().fromArray(fe);function Y(y,F,W,oe){const he=new Uint8Array(4),Be=n.createTexture();n.bindTexture(y,Be),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<W;$e++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(F,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(F+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Be}const ae={};ae[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),s.setFunc(Ua),Me(!1),Te(_c),ve(n.CULL_FACE),_e(Ci);function ve(y){l[y]!==!0&&(n.enable(y),l[y]=!0)}function le(y){l[y]!==!1&&(n.disable(y),l[y]=!1)}function Ue(y,F){return u[y]!==F?(n.bindFramebuffer(y,F),u[y]=F,y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=F),y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=F),!0):!1}function ie(y,F){let W=d,oe=!1;if(y){W=h.get(F),W===void 0&&(W=[],h.set(F,W));const he=y.textures;if(W.length!==he.length||W[0]!==n.COLOR_ATTACHMENT0){for(let Be=0,$e=he.length;Be<$e;Be++)W[Be]=n.COLOR_ATTACHMENT0+Be;W.length=he.length,oe=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,oe=!0);oe&&n.drawBuffers(W)}function N(y){return f!==y?(n.useProgram(y),f=y,!0):!1}const ne={[Ki]:n.FUNC_ADD,[Ld]:n.FUNC_SUBTRACT,[Dd]:n.FUNC_REVERSE_SUBTRACT};ne[Id]=n.MIN,ne[Ud]=n.MAX;const B={[Nd]:n.ZERO,[Fd]:n.ONE,[Od]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[Vd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[Bd]:n.DST_ALPHA,[kd]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[zd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[$d]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(y,F,W,oe,he,Be,$e,mt,Rt,Je){if(y===Ci){g===!0&&(le(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),y!==Pd){if(y!==_||Je!==I){if((m!==Ki||x!==Ki)&&(n.blendEquation(n.FUNC_ADD),m=Ki,x=Ki),Je)switch(y){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}p=null,w=null,S=null,C=null,A.set(0,0,0),E=0,_=y,I=Je}return}he=he||F,Be=Be||W,$e=$e||oe,(F!==m||he!==x)&&(n.blendEquationSeparate(ne[F],ne[he]),m=F,x=he),(W!==p||oe!==w||Be!==S||$e!==C)&&(n.blendFuncSeparate(B[W],B[oe],B[Be],B[$e]),p=W,w=oe,S=Be,C=$e),(mt.equals(A)===!1||Rt!==E)&&(n.blendColor(mt.r,mt.g,mt.b,Rt),A.copy(mt),E=Rt),_=y,I=!1}function me(y,F){y.side===Bn?le(n.CULL_FACE):ve(n.CULL_FACE);let W=y.side===rn;F&&(W=!W),Me(W),y.blending===Gr&&y.transparent===!1?_e(Ci):_e(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const oe=y.stencilWrite;a.setTest(oe),oe&&(a.setMask(y.stencilWriteMask),a.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),a.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Ke(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(y){M!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),M=y)}function Te(y){y!==Ad?(ve(n.CULL_FACE),y!==v&&(y===_c?n.cullFace(n.BACK):y===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),v=y}function Pe(y){y!==D&&(L&&n.lineWidth(y),D=y)}function Ke(y,F,W){y?(ve(n.POLYGON_OFFSET_FILL),(V!==F||U!==W)&&(n.polygonOffset(F,W),V=F,U=W)):le(n.POLYGON_OFFSET_FILL)}function P(y){y?ve(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function b(y){y===void 0&&(y=n.TEXTURE0+z-1),X!==y&&(n.activeTexture(y),X=y)}function G(y,F,W){W===void 0&&(X===null?W=n.TEXTURE0+z-1:W=X);let oe=Q[W];oe===void 0&&(oe={type:void 0,texture:void 0},Q[W]=oe),(oe.type!==y||oe.texture!==F)&&(X!==W&&(n.activeTexture(W),X=W),n.bindTexture(y,F||ae[y]),oe.type=y,oe.texture=F)}function j(){const y=Q[X];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ye(){try{n.texSubImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ze(){try{n.texImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Se(y){be.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),be.copy(y))}function ke(y){Ie.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),Ie.copy(y))}function qe(y,F){let W=c.get(F);W===void 0&&(W=new WeakMap,c.set(F,W));let oe=W.get(y);oe===void 0&&(oe=n.getUniformBlockIndex(F,y.name),W.set(y,oe))}function ot(y,F){const oe=c.get(F).get(y);o.get(F)!==oe&&(n.uniformBlockBinding(F,oe,y.__bindingPointIndex),o.set(F,oe))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},X=null,Q={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,w=null,x=null,S=null,C=null,A=new je(0,0,0),E=0,I=!1,M=null,v=null,D=null,V=null,U=null,be.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ve,disable:le,bindFramebuffer:Ue,drawBuffers:ie,useProgram:N,setBlending:_e,setMaterial:me,setFlipSided:Me,setCullFace:Te,setLineWidth:Pe,setPolygonOffset:Ke,setScissorTest:P,activeTexture:b,bindTexture:G,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:Ze,texImage3D:Le,updateUBOMapping:qe,uniformBlockBinding:ot,texStorage2D:ce,texStorage3D:Ae,texSubImage2D:ye,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ne,scissor:Se,viewport:ke,reset:He}}function Lv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):Ba("canvas")}function _(P,b,G){let j=1;const te=Ke(P);if((te.width>G||te.height>G)&&(j=G/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(j*te.width),ye=Math.floor(j*te.height);h===void 0&&(h=g(se,ye));const de=b?g(se,ye):h;return de.width=se,de.height=ye,de.getContext("2d").drawImage(P,0,0,se,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+se+"x"+ye+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==vt&&P.minFilter!==jt}function p(P){n.generateMipmap(P)}function w(P,b,G,j,te=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=b;if(b===n.RED&&(G===n.FLOAT&&(se=n.R32F),G===n.HALF_FLOAT&&(se=n.R16F),G===n.UNSIGNED_BYTE&&(se=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.R8UI),G===n.UNSIGNED_SHORT&&(se=n.R16UI),G===n.UNSIGNED_INT&&(se=n.R32UI),G===n.BYTE&&(se=n.R8I),G===n.SHORT&&(se=n.R16I),G===n.INT&&(se=n.R32I)),b===n.RG&&(G===n.FLOAT&&(se=n.RG32F),G===n.HALF_FLOAT&&(se=n.RG16F),G===n.UNSIGNED_BYTE&&(se=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.RG8UI),G===n.UNSIGNED_SHORT&&(se=n.RG16UI),G===n.UNSIGNED_INT&&(se=n.RG32UI),G===n.BYTE&&(se=n.RG8I),G===n.SHORT&&(se=n.RG16I),G===n.INT&&(se=n.RG32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),b===n.RGBA){const ye=te?Na:lt.getTransfer(j);G===n.FLOAT&&(se=n.RGBA32F),G===n.HALF_FLOAT&&(se=n.RGBA16F),G===n.UNSIGNED_BYTE&&(se=ye===ft?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==vt&&P.minFilter!==jt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function S(P){const b=P.target;b.removeEventListener("dispose",S),A(b),b.isVideoTexture&&u.delete(b)}function C(P){const b=P.target;b.removeEventListener("dispose",C),I(b)}function A(P){const b=i.get(P);if(b.__webglInit===void 0)return;const G=P.source,j=d.get(G);if(j){const te=j[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(P),Object.keys(j).length===0&&d.delete(G)}i.remove(P)}function E(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const G=P.source,j=d.get(G);delete j[b.__cacheKey],a.memory.textures--}function I(P){const b=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let te=0;te<b.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(b.__webglFramebuffer[j][te]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=P.textures;for(let j=0,te=G.length;j<te;j++){const se=i.get(G[j]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(G[j])}i.remove(P)}let M=0;function v(){M=0}function D(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function V(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function U(P,b){const G=i.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(G,P,b);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function z(P,b){const G=i.get(P);if(P.version>0&&G.__version!==P.version){be(G,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function L(P,b){const G=i.get(P);if(P.version>0&&G.__version!==P.version){be(G,P,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function H(P,b){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Ie(G,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const K={[Cl]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[Rl]:n.MIRRORED_REPEAT},X={[vt]:n.NEAREST,[up]:n.NEAREST_MIPMAP_NEAREST,[$s]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[So]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},Q={[Ep]:n.NEVER,[Lp]:n.ALWAYS,[Tp]:n.LESS,[Qh]:n.LEQUAL,[Ap]:n.EQUAL,[Pp]:n.GEQUAL,[Cp]:n.GREATER,[Rp]:n.NOTEQUAL};function re(P,b){if(b.type===Pn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===jt||b.magFilter===So||b.magFilter===$s||b.magFilter===tr||b.minFilter===jt||b.minFilter===So||b.minFilter===$s||b.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,K[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,X[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vt||b.minFilter!==$s&&b.minFilter!==tr||b.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function fe(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",S));const j=b.source;let te=d.get(j);te===void 0&&(te={},d.set(j,te));const se=V(b);if(se!==P.__cacheKey){te[se]===void 0&&(te[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[se].usedTimes++;const ye=te[P.__cacheKey];ye!==void 0&&(te[P.__cacheKey].usedTimes--,ye.usedTimes===0&&E(b)),P.__cacheKey=se,P.__webglTexture=te[se].texture}return G}function be(P,b,G){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const te=fe(P,b),se=b.source;t.bindTexture(j,P.__webglTexture,n.TEXTURE0+G);const ye=i.get(se);if(se.version!==ye.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const de=lt.getPrimaries(lt.workingColorSpace),ue=b.colorSpace===Mi?null:lt.getPrimaries(b.colorSpace),Ne=b.colorSpace===Mi||de===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ce=_(b.image,!1,r.maxTextureSize);ce=Pe(b,ce);const Ae=s.convert(b.format,b.colorSpace),Ze=s.convert(b.type);let Le=w(b.internalFormat,Ae,Ze,b.colorSpace,b.isVideoTexture);re(j,b);let Se;const ke=b.mipmaps,qe=b.isVideoTexture!==!0,ot=ye.__version===void 0||te===!0,He=se.dataReady,y=x(b,ce);if(b.isDepthTexture)Le=n.DEPTH_COMPONENT16,b.type===Pn?Le=n.DEPTH_COMPONENT32F:b.type===Bi?Le=n.DEPTH_COMPONENT24:b.type===Us&&(Le=n.DEPTH24_STENCIL8),ot&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Le,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Le,ce.width,ce.height,0,Ae,Ze,null));else if(b.isDataTexture)if(ke.length>0){qe&&ot&&t.texStorage2D(n.TEXTURE_2D,y,Le,ke[0].width,ke[0].height);for(let F=0,W=ke.length;F<W;F++)Se=ke[F],qe?He&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,Se.width,Se.height,Ae,Ze,Se.data):t.texImage2D(n.TEXTURE_2D,F,Le,Se.width,Se.height,0,Ae,Ze,Se.data);b.generateMipmaps=!1}else qe?(ot&&t.texStorage2D(n.TEXTURE_2D,y,Le,ce.width,ce.height),He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Ae,Ze,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ce.width,ce.height,0,Ae,Ze,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,y,Le,ke[0].width,ke[0].height,ce.depth);for(let F=0,W=ke.length;F<W;F++)Se=ke[F],b.format!==Wt?Ae!==null?qe?He&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,Se.width,Se.height,ce.depth,Ae,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,F,Le,Se.width,Se.height,ce.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,Se.width,Se.height,ce.depth,Ae,Ze,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,F,Le,Se.width,Se.height,ce.depth,0,Ae,Ze,Se.data)}else{qe&&ot&&t.texStorage2D(n.TEXTURE_2D,y,Le,ke[0].width,ke[0].height);for(let F=0,W=ke.length;F<W;F++)Se=ke[F],b.format!==Wt?Ae!==null?qe?He&&t.compressedTexSubImage2D(n.TEXTURE_2D,F,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,F,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?He&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,Se.width,Se.height,Ae,Ze,Se.data):t.texImage2D(n.TEXTURE_2D,F,Le,Se.width,Se.height,0,Ae,Ze,Se.data)}else if(b.isDataArrayTexture)qe?(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,y,Le,ce.width,ce.height,ce.depth),He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Ze,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ce.width,ce.height,ce.depth,0,Ae,Ze,ce.data);else if(b.isData3DTexture)qe?(ot&&t.texStorage3D(n.TEXTURE_3D,y,Le,ce.width,ce.height,ce.depth),He&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Ze,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ce.width,ce.height,ce.depth,0,Ae,Ze,ce.data);else if(b.isFramebufferTexture){if(ot)if(qe)t.texStorage2D(n.TEXTURE_2D,y,Le,ce.width,ce.height);else{let F=ce.width,W=ce.height;for(let oe=0;oe<y;oe++)t.texImage2D(n.TEXTURE_2D,oe,Le,F,W,0,Ae,Ze,null),F>>=1,W>>=1}}else if(ke.length>0){if(qe&&ot){const F=Ke(ke[0]);t.texStorage2D(n.TEXTURE_2D,y,Le,F.width,F.height)}for(let F=0,W=ke.length;F<W;F++)Se=ke[F],qe?He&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,Ae,Ze,Se):t.texImage2D(n.TEXTURE_2D,F,Le,Ae,Ze,Se);b.generateMipmaps=!1}else if(qe){if(ot){const F=Ke(ce);t.texStorage2D(n.TEXTURE_2D,y,Le,F.width,F.height)}He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ze,ce)}else t.texImage2D(n.TEXTURE_2D,0,Le,Ae,Ze,ce);m(b)&&p(j),ye.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ie(P,b,G){if(b.image.length!==6)return;const j=fe(P,b),te=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const se=i.get(te);if(te.version!==se.__version||j===!0){t.activeTexture(n.TEXTURE0+G);const ye=lt.getPrimaries(lt.workingColorSpace),de=b.colorSpace===Mi?null:lt.getPrimaries(b.colorSpace),ue=b.colorSpace===Mi||ye===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let W=0;W<6;W++)!Ne&&!ce?Ae[W]=_(b.image[W],!0,r.maxCubemapSize):Ae[W]=ce?b.image[W].image:b.image[W],Ae[W]=Pe(b,Ae[W]);const Ze=Ae[0],Le=s.convert(b.format,b.colorSpace),Se=s.convert(b.type),ke=w(b.internalFormat,Le,Se,b.colorSpace),qe=b.isVideoTexture!==!0,ot=se.__version===void 0||j===!0,He=te.dataReady;let y=x(b,Ze);re(n.TEXTURE_CUBE_MAP,b);let F;if(Ne){qe&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,y,ke,Ze.width,Ze.height);for(let W=0;W<6;W++){F=Ae[W].mipmaps;for(let oe=0;oe<F.length;oe++){const he=F[oe];b.format!==Wt?Le!==null?qe?He&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,0,0,he.width,he.height,Le,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,0,0,he.width,he.height,Le,Se,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,ke,he.width,he.height,0,Le,Se,he.data)}}}else{if(F=b.mipmaps,qe&&ot){F.length>0&&y++;const W=Ke(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,y,ke,W.width,W.height)}for(let W=0;W<6;W++)if(ce){qe?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ae[W].width,Ae[W].height,Le,Se,Ae[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ke,Ae[W].width,Ae[W].height,0,Le,Se,Ae[W].data);for(let oe=0;oe<F.length;oe++){const Be=F[oe].image[W].image;qe?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,0,0,Be.width,Be.height,Le,Se,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,ke,Be.width,Be.height,0,Le,Se,Be.data)}}else{qe?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Le,Se,Ae[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ke,Le,Se,Ae[W]);for(let oe=0;oe<F.length;oe++){const he=F[oe];qe?He&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,0,0,Le,Se,he.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,ke,Le,Se,he.image[W])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),se.__version=te.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Y(P,b,G,j,te,se){const ye=s.convert(G.format,G.colorSpace),de=s.convert(G.type),ue=w(G.internalFormat,ye,de,G.colorSpace);if(!i.get(b).__hasExternalTextures){const ce=Math.max(1,b.width>>se),Ae=Math.max(1,b.height>>se);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,se,ue,ce,Ae,b.depth,0,ye,de,null):t.texImage2D(te,se,ue,ce,Ae,0,ye,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,i.get(G).__webglTexture,0,me(b)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,i.get(G).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let j=n.DEPTH_COMPONENT24;if(G||Me(b)){const te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Pn?j=n.DEPTH_COMPONENT32F:te.type===Bi&&(j=n.DEPTH_COMPONENT24));const se=me(b);Me(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,j,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,j,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const j=me(b);G&&Me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,b.width,b.height):Me(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const j=b.textures;for(let te=0;te<j.length;te++){const se=j[te],ye=s.convert(se.format,se.colorSpace),de=s.convert(se.type),ue=w(se.internalFormat,ye,de,se.colorSpace),Ne=me(b);G&&Me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ue,b.width,b.height):Me(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,ue,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ue,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const j=i.get(b.depthTexture).__webglTexture,te=me(b);if(b.depthTexture.format===Pi)Me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(b.depthTexture.format===Ms)Me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function le(P){const b=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ve(b.__webglFramebuffer,P)}else if(G){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=n.createRenderbuffer(),ae(b.__webglDepthbuffer[j],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ae(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(P,b,G){const j=i.get(P);b!==void 0&&Y(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&le(P)}function ie(P){const b=P.texture,G=i.get(P),j=i.get(b);P.addEventListener("dispose",C);const te=P.textures,se=P.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,a.memory.textures++),se){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let ue=0;ue<b.mipmaps.length;ue++)G.__webglFramebuffer[de][ue]=n.createFramebuffer()}else G.__webglFramebuffer[de]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)G.__webglFramebuffer[de]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ye)for(let de=0,ue=te.length;de<ue;de++){const Ne=i.get(te[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Me(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const ue=te[de];G.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const Ne=s.convert(ue.format,ue.colorSpace),ce=s.convert(ue.type),Ae=w(ue.internalFormat,Ne,ce,ue.colorSpace,P.isXRRenderTarget===!0),Ze=me(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Ae,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,G.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),re(n.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)Y(G.__webglFramebuffer[de][ue],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ue);else Y(G.__webglFramebuffer[de],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let de=0,ue=te.length;de<ue;de++){const Ne=te[de],ce=i.get(Ne);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),re(n.TEXTURE_2D,Ne),Y(G.__webglFramebuffer,P,Ne,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Ne)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),re(de,b),b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)Y(G.__webglFramebuffer[ue],P,b,n.COLOR_ATTACHMENT0,de,ue);else Y(G.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,de,0);m(b)&&p(de),t.unbindTexture()}P.depthBuffer&&le(P)}function N(P){const b=P.textures;for(let G=0,j=b.length;G<j;G++){const te=b[G];if(m(te)){const se=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(te).__webglTexture;t.bindTexture(se,ye),p(se),t.unbindTexture()}}}const ne=[],B=[];function _e(P){if(P.samples>0){if(Me(P)===!1){const b=P.textures,G=P.width,j=P.height;let te=n.COLOR_BUFFER_BIT;const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(P),de=b.length>1;if(de)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const Ne=i.get(b[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,te,n.NEAREST),c===!0&&(ne.length=0,B.length=0,ne.push(n.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ne.push(se),B.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const Ne=i.get(b[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function me(P){return Math.min(r.maxSamples,P.samples)}function Me(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(P){const b=a.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function Pe(P,b){const G=P.colorSpace,j=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Hi&&G!==Mi&&(lt.getTransfer(G)===ft?(j!==Wt||te!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=v,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=L,this.setTextureCube=H,this.rebindTextures=Ue,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Me}function Dv(n,e){function t(i,r=Mi){let s;const a=lt.getTransfer(r);if(i===ki)return n.UNSIGNED_BYTE;if(i===Yh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hp)return n.BYTE;if(i===fp)return n.SHORT;if(i===qh)return n.UNSIGNED_SHORT;if(i===$h)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Zr)return n.HALF_FLOAT;if(i===pp)return n.ALPHA;if(i===mp)return n.RGB;if(i===Wt)return n.RGBA;if(i===gp)return n.LUMINANCE;if(i===_p)return n.LUMINANCE_ALPHA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===vp)return n.RED;if(i===Zh)return n.RED_INTEGER;if(i===xp)return n.RG;if(i===Kh)return n.RG_INTEGER;if(i===Jh)return n.RGBA_INTEGER;if(i===yo||i===wo||i===Mo||i===bo)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yc||i===wc||i===Mc||i===bc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ec||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ec||i===Tc)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ac)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc||i===Fc||i===Oc||i===kc||i===Bc||i===zc||i===Hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ic)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===Gc||i===Vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Wc||i===Xc||i===qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Iv extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ma extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nv=`
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

}`;class Ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Vt({vertexShader:Nv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xt(new sr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class kv extends mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new Ov,m=t.getContextAttributes();let p=null,w=null;const x=[],S=[],C=new Re;let A=null;const E=new un;E.layers.enable(1),E.viewport=new kt;const I=new un;I.layers.enable(2),I.viewport=new kt;const M=[E,I],v=new Iv;v.layers.enable(1),v.layers.enable(2);let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Ko,x[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Ko,x[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Ko,x[Y]=ae),ae.getHandSpace()};function U(Y){const ae=S.indexOf(Y.inputSource);if(ae===-1)return;const ve=x[ae];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",L);for(let Y=0;Y<x.length;Y++){const ae=S[Y];ae!==null&&(S[Y]=null,x[Y].disconnect(ae))}D=null,V=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Wt,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,ve=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Ms:Pi,ve=m.stencil?Us:Bi);const Ue={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Ln(d.textureWidth,d.textureHeight,{format:Wt,type:ki,depthTexture:new Ha(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(Y){for(let ae=0;ae<Y.removed.length;ae++){const ve=Y.removed[ae],le=S.indexOf(ve);le>=0&&(S[le]=null,x[le].disconnect(ve))}for(let ae=0;ae<Y.added.length;ae++){const ve=Y.added[ae];let le=S.indexOf(ve);if(le===-1){for(let ie=0;ie<x.length;ie++)if(ie>=S.length){S.push(ve),le=ie;break}else if(S[ie]===null){S[ie]=ve,le=ie;break}if(le===-1)break}const Ue=x[le];Ue&&Ue.connect(ve)}}const H=new O,K=new O;function X(Y,ae,ve){H.setFromMatrixPosition(ae.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const le=H.distanceTo(K),Ue=ae.projectionMatrix.elements,ie=ve.projectionMatrix.elements,N=Ue[14]/(Ue[10]-1),ne=Ue[14]/(Ue[10]+1),B=(Ue[9]+1)/Ue[5],_e=(Ue[9]-1)/Ue[5],me=(Ue[8]-1)/Ue[0],Me=(ie[8]+1)/ie[0],Te=N*me,Pe=N*Me,Ke=le/(-me+Me),P=Ke*-me;ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(P),Y.translateZ(Ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=N+Ke,G=ne+Ke,j=Te-P,te=Pe+(le-P),se=B*ne/G*b,ye=_e*ne/G*b;Y.projectionMatrix.makePerspective(j,te,se,ye,b,G),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Q(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),v.near=I.near=E.near=Y.near,v.far=I.far=E.far=Y.far,(D!==v.near||V!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,V=v.far,E.near=D,E.far=V,I.near=D,I.far=V,E.updateProjectionMatrix(),I.updateProjectionMatrix(),Y.updateProjectionMatrix());const ae=Y.parent,ve=v.cameras;Q(v,ae);for(let le=0;le<ve.length;le++)Q(ve[le],ae);ve.length===2?X(v,E,I):v.projectionMatrix.copy(E.projectionMatrix),re(Y,v,ae)};function re(Y,ae,ve){ve===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Pl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null};let fe=null;function be(Y,ae){if(u=ae.getViewerPose(l||a),g=ae,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let le=!1;ve.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let ie=0;ie<ve.length;ie++){const N=ve[ie];let ne=null;if(f!==null)ne=f.getViewport(N);else{const _e=h.getViewSubImage(d,N);ne=_e.viewport,ie===0&&(e.setRenderTargetTextures(w,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(w))}let B=M[ie];B===void 0&&(B=new un,B.layers.enable(ie),B.viewport=new kt,M[ie]=B),B.matrix.fromArray(N.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(N.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(ne.x,ne.y,ne.width,ne.height),ie===0&&(v.matrix.copy(B.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(B)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const ie=h.getDepthInformation(ve[0]);ie&&ie.isValid&&ie.texture&&_.init(e,ie,r.renderState)}}for(let ve=0;ve<x.length;ve++){const le=S[ve],Ue=x[ve];le!==null&&Ue!==void 0&&Ue.update(le,ae,l||a)}_.render(e,v),fe&&fe(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Ie=new df;Ie.setAnimationLoop(be),this.setAnimationLoop=function(Y){fe=Y},this.dispose=function(){}}}const Yi=new li,Bv=new ct;function zv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),x=w.envMap,S=w.envMapRotation;if(x&&(m.envMap.value=x,Yi.copy(S),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(Yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*C,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const S=x.program;i.uniformBlockBinding(w,S)}function l(w,x){let S=r[w.id];S===void 0&&(g(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(w,C);const A=e.render.frame;s[w.id]!==A&&(d(w),s[w.id]=A)}function u(w){const x=h();w.__bindingPointIndex=x;const S=n.createBuffer(),C=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=r[w.id],S=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,v=I.length;M<v;M++){const D=I[M];if(f(D,A,M,C)===!0){const V=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let L=0;L<U.length;L++){const H=U[L],K=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,V+z,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,x,S,C){const A=w.value,E=x+"_"+S;if(C[E]===void 0)return typeof A=="number"||typeof A=="boolean"?C[E]=A:C[E]=A.clone(),!0;{const I=C[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(w){const x=w.uniforms;let S=0;const C=16;for(let E=0,I=x.length;E<I;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,D=M.length;v<D;v++){const V=M[v],U=Array.isArray(V.value)?V.value:[V.value];for(let z=0,L=U.length;z<L;z++){const H=U[z],K=_(H),X=S%C;X!==0&&C-X<K.boundary&&(S+=C-X),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=K.storage}}}const A=S%C;return A>0&&(S+=C-A),w.__size=S,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Gv{constructor(e={}){const{canvas:t=Up(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let S=!1,C=0,A=0,E=null,I=-1,M=null;const v=new kt,D=new kt;let V=null;const U=new je(0);let z=0,L=t.width,H=t.height,K=1,X=null,Q=null;const re=new kt(0,0,L,H),fe=new kt(0,0,L,H);let be=!1;const Ie=new ff;let Y=!1,ae=!1;const ve=new ct,le=new O,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return E===null?K:1}let N=i;function ne(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",y,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",W,!1),N===null){const k="webgl2";if(N=ne(k,T),N===null)throw ne(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let B,_e,me,Me,Te,Pe,Ke,P,b,G,j,te,se,ye,de,ue,Ne,ce,Ae,Ze,Le,Se,ke,qe;function ot(){B=new Z0(N),B.init(),Se=new Dv(N,B),_e=new W0(N,B,e,Se),me=new Pv(N),Me=new Q0(N),Te=new gv,Pe=new Lv(N,B,me,Te,_e,Se,Me),Ke=new q0(x),P=new j0(x),b=new am(N),ke=new G0(N,b),G=new K0(N,b,Me,ke),j=new t_(N,G,b,Me),Ae=new e_(N,_e,Pe),ue=new X0(Te),te=new mv(x,Ke,P,B,_e,ke,ue),se=new zv(x,Te),ye=new vv,de=new bv(B),ce=new H0(x,Ke,P,me,j,d,c),Ne=new Rv(x,j,_e),qe=new Hv(N,Me,_e,me),Ze=new V0(N,B,Me),Le=new J0(N,B,Me),Me.programs=te.programs,x.capabilities=_e,x.extensions=B,x.properties=Te,x.renderLists=ye,x.shadowMap=Ne,x.state=me,x.info=Me}ot();const He=new kv(x,N);this.xr=He,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=B.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=B.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(L,H,!1))},this.getSize=function(T){return T.set(L,H)},this.setSize=function(T,k,Z=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,H=k,t.width=Math.floor(T*K),t.height=Math.floor(k*K),Z===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(L*K,H*K).floor()},this.setDrawingBufferSize=function(T,k,Z){L=T,H=k,K=Z,t.width=Math.floor(T*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,k,Z,q){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,k,Z,q),me.viewport(v.copy(re).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(fe)},this.setScissor=function(T,k,Z,q){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,k,Z,q),me.scissor(D.copy(fe).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){me.setScissorTest(be=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(T=!0,k=!0,Z=!0){let q=0;if(T){let $=!1;if(E!==null){const xe=E.texture.format;$=xe===Jh||xe===Kh||xe===Zh}if($){const xe=E.texture.type,we=xe===ki||xe===Bi||xe===qh||xe===Us||xe===Yh||xe===jh,Ee=ce.getClearColor(),De=ce.getClearAlpha(),Fe=Ee.r,Ge=Ee.g,Ye=Ee.b;we?(f[0]=Fe,f[1]=Ge,f[2]=Ye,f[3]=De,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Fe,g[1]=Ge,g[2]=Ye,g[3]=De,N.clearBufferiv(N.COLOR,0,g))}else q|=N.COLOR_BUFFER_BIT}k&&(q|=N.DEPTH_BUFFER_BIT),Z&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",y,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",W,!1),ye.dispose(),de.dispose(),Te.dispose(),Ke.dispose(),P.dispose(),j.dispose(),ke.dispose(),qe.dispose(),te.dispose(),He.dispose(),He.removeEventListener("sessionstart",Je),He.removeEventListener("sessionend",xt),ht.stop()};function y(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Me.autoReset,k=Ne.enabled,Z=Ne.autoUpdate,q=Ne.needsUpdate,$=Ne.type;ot(),Me.autoReset=T,Ne.enabled=k,Ne.autoUpdate=Z,Ne.needsUpdate=q,Ne.type=$}function W(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const k=T.target;k.removeEventListener("dispose",oe),he(k)}function he(T){Be(T),Te.remove(T)}function Be(T){const k=Te.get(T).programs;k!==void 0&&(k.forEach(function(Z){te.releaseProgram(Z)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Z,q,$,xe){k===null&&(k=Ue);const we=$.isMesh&&$.matrixWorld.determinant()<0,Ee=yd(T,k,Z,q,$);me.setMaterial(q,we);let De=Z.index,Fe=1;if(q.wireframe===!0){if(De=G.getWireframeAttribute(Z),De===void 0)return;Fe=2}const Ge=Z.drawRange,Ye=Z.attributes.position;let St=Ge.start*Fe,Bt=(Ge.start+Ge.count)*Fe;xe!==null&&(St=Math.max(St,xe.start*Fe),Bt=Math.min(Bt,(xe.start+xe.count)*Fe)),De!==null?(St=Math.max(St,0),Bt=Math.min(Bt,De.count)):Ye!=null&&(St=Math.max(St,0),Bt=Math.min(Bt,Ye.count));const an=Bt-St;if(an<0||an===1/0)return;ke.setup($,q,Ee,Z,De);let Yn,it=Ze;if(De!==null&&(Yn=b.get(De),it=Le,it.setIndex(Yn)),$.isMesh)q.wireframe===!0?(me.setLineWidth(q.wireframeLinewidth*ie()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if($.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),me.setLineWidth(Oe*ie()),$.isLineSegments?it.setMode(N.LINES):$.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else $.isPoints?it.setMode(N.POINTS):$.isSprite&&it.setMode(N.TRIANGLES);if($.isBatchedMesh)$._multiDrawInstances!==null?it.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances):it.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)it.renderInstances(St,an,$.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,as=Math.min(Z.instanceCount,Oe);it.renderInstances(St,an,as)}else it.render(St,an)};function $e(T,k,Z){T.transparent===!0&&T.side===Bn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,qs(T,k,Z),T.side=vn,T.needsUpdate=!0,qs(T,k,Z),T.side=Bn):qs(T,k,Z)}this.compile=function(T,k,Z=null){Z===null&&(Z=T),m=de.get(Z),m.init(k),w.push(m),Z.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),T!==Z&&T.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(x._useLegacyLights);const q=new Set;return T.traverse(function($){const xe=$.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const Ee=xe[we];$e(Ee,Z,$),q.add(Ee)}else $e(xe,Z,$),q.add(xe)}),w.pop(),m=null,q},this.compileAsync=function(T,k,Z=null){const q=this.compile(T,k,Z);return new Promise($=>{function xe(){if(q.forEach(function(we){Te.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){$(T);return}setTimeout(xe,10)}B.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let mt=null;function Rt(T){mt&&mt(T)}function Je(){ht.stop()}function xt(){ht.start()}const ht=new df;ht.setAnimationLoop(Rt),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(T){mt=T,He.setAnimationLoop(T),T===null?ht.stop():ht.start()},He.addEventListener("sessionstart",Je),He.addEventListener("sessionend",xt),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(k),k=He.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,k,E),m=de.get(T,w.length),m.init(k),w.push(m),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ie.setFromProjectionMatrix(ve),ae=this.localClippingEnabled,Y=ue.init(this.clippingPlanes,ae),_=ye.get(T,p.length),_.init(),p.push(_),ci(T,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,Q);const Z=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1;Z&&ce.addToRenderList(_,T),this.info.render.frame++,Y===!0&&ue.beginShadows();const q=m.state.shadowsArray;Ne.render(q,T,k),Y===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,xe=_.transmissive;if(m.setupLights(x._useLegacyLights),k.isArrayCamera){const we=k.cameras;if(xe.length>0)for(let Ee=0,De=we.length;Ee<De;Ee++){const Fe=we[Ee];ui($,xe,T,Fe)}Z&&ce.render(T);for(let Ee=0,De=we.length;Ee<De;Ee++){const Fe=we[Ee];fn(_,T,Fe,Fe.viewport)}}else xe.length>0&&ui($,xe,T,k),Z&&ce.render(T),fn(_,T,k);E!==null&&(Pe.updateMultisampleRenderTarget(E),Pe.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,k),ke.resetDefaultState(),I=-1,M=null,w.pop(),w.length>0?(m=w[w.length-1],Y===!0&&ue.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ci(T,k,Z,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){q&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const we=j.update(T),Ee=T.material;Ee.visible&&_.push(T,we,Ee,Z,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const we=j.update(T),Ee=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),le.copy(we.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Ee)){const De=we.groups;for(let Fe=0,Ge=De.length;Fe<Ge;Fe++){const Ye=De[Fe],St=Ee[Ye.materialIndex];St&&St.visible&&_.push(T,we,St,Z,le.z,Ye)}}else Ee.visible&&_.push(T,we,Ee,Z,le.z,null)}}const xe=T.children;for(let we=0,Ee=xe.length;we<Ee;we++)ci(xe[we],k,Z,q)}function fn(T,k,Z,q){const $=T.opaque,xe=T.transmissive,we=T.transparent;m.setupLightsView(Z),Y===!0&&ue.setGlobalState(x.clippingPlanes,Z),q&&me.viewport(v.copy(q)),$.length>0&&$n($,k,Z),xe.length>0&&$n(xe,k,Z),we.length>0&&$n(we,k,Z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ui(T,k,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Ln(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Zr:ki,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const xe=m.state.transmissionRenderTarget[q.id],we=q.viewport||v;xe.setSize(we.z,we.w);const Ee=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(U),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const De=x.toneMapping;x.toneMapping=Ri;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),Y===!0&&ue.setGlobalState(x.clippingPlanes,q),$n(T,Z,q),Pe.updateMultisampleRenderTarget(xe),Pe.updateRenderTargetMipmap(xe),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ye=0,St=k.length;Ye<St;Ye++){const Bt=k[Ye],an=Bt.object,Yn=Bt.geometry,it=Bt.material,Oe=Bt.group;if(it.side===Bn&&an.layers.test(q.layers)){const as=it.side;it.side=rn,it.needsUpdate=!0,ss(an,Z,q,Yn,it,Oe),it.side=as,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(Pe.updateMultisampleRenderTarget(xe),Pe.updateRenderTargetMipmap(xe))}x.setRenderTarget(Ee),x.setClearColor(U,z),Fe!==void 0&&(q.viewport=Fe),x.toneMapping=De}function $n(T,k,Z){const q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,xe=T.length;$<xe;$++){const we=T[$],Ee=we.object,De=we.geometry,Fe=q===null?we.material:q,Ge=we.group;Ee.layers.test(Z.layers)&&ss(Ee,k,Z,De,Fe,Ge)}}function ss(T,k,Z,q,$,xe){T.onBeforeRender(x,k,Z,q,$,xe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(x,k,Z,q,T,xe),$.transparent===!0&&$.side===Bn&&$.forceSinglePass===!1?($.side=rn,$.needsUpdate=!0,x.renderBufferDirect(Z,k,q,$,T,xe),$.side=vn,$.needsUpdate=!0,x.renderBufferDirect(Z,k,q,$,T,xe),$.side=Bn):x.renderBufferDirect(Z,k,q,$,T,xe),T.onAfterRender(x,k,Z,q,$,xe)}function qs(T,k,Z){k.isScene!==!0&&(k=Ue);const q=Te.get(T),$=m.state.lights,xe=m.state.shadowsArray,we=$.state.version,Ee=te.getParameters(T,$.state,xe,k,Z),De=te.getProgramCacheKey(Ee);let Fe=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?P:Ke).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",oe),Fe=new Map,q.programs=Fe);let Ge=Fe.get(De);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===we)return pc(T,Ee),Ge}else Ee.uniforms=te.getUniforms(T),T.onBuild(Z,Ee,x),T.onBeforeCompile(Ee,x),Ge=te.acquireProgram(Ee,De),Fe.set(De,Ge),q.uniforms=Ee.uniforms;const Ye=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=ue.uniform),pc(T,Ee),q.needsLights=Md(T),q.lightsStateVersion=we,q.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function dc(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Pa.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function pc(T,k){const Z=Te.get(T);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function yd(T,k,Z,q,$){k.isScene!==!0&&(k=Ue),Pe.resetTextureUnits();const xe=k.fog,we=q.isMeshStandardMaterial?k.environment:null,Ee=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Hi,De=(q.isMeshStandardMaterial?P:Ke).get(q.envMap||we),Fe=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ye=!!Z.morphAttributes.position,St=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color;let an=Ri;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(an=x.toneMapping);const Yn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=Yn!==void 0?Yn.length:0,Oe=Te.get(q),as=m.state.lights;if(Y===!0&&(ae===!0||T!==M)){const dn=T===M&&q.id===I;ue.setState(q,T,dn)}let dt=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==as.state.version||Oe.outputColorSpace!==Ee||$.isBatchedMesh&&Oe.batching===!1||!$.isBatchedMesh&&Oe.batching===!0||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||$.isInstancedMesh&&Oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Oe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Oe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Oe.instancingMorph===!1&&$.morphTexture!==null||Oe.envMap!==De||q.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ue.numPlanes||Oe.numIntersection!==ue.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==Ge||Oe.morphTargets!==Ye||Oe.morphNormals!==St||Oe.morphColors!==Bt||Oe.toneMapping!==an||Oe.morphTargetsCount!==it)&&(dt=!0):(dt=!0,Oe.__version=q.version);let Gi=Oe.currentProgram;dt===!0&&(Gi=qs(q,k,$));let mc=!1,os=!1,_o=!1;const zt=Gi.getUniforms(),hi=Oe.uniforms;if(me.useProgram(Gi.program)&&(mc=!0,os=!0,_o=!0),q.id!==I&&(I=q.id,os=!0),mc||M!==T){zt.setValue(N,"projectionMatrix",T.projectionMatrix),zt.setValue(N,"viewMatrix",T.matrixWorldInverse);const dn=zt.map.cameraPosition;dn!==void 0&&dn.setValue(N,le.setFromMatrixPosition(T.matrixWorld)),_e.logarithmicDepthBuffer&&zt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&zt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,os=!0,_o=!0)}if($.isSkinnedMesh){zt.setOptional(N,$,"bindMatrix"),zt.setOptional(N,$,"bindMatrixInverse");const dn=$.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),zt.setValue(N,"boneTexture",dn.boneTexture,Pe))}$.isBatchedMesh&&(zt.setOptional(N,$,"batchingTexture"),zt.setValue(N,"batchingTexture",$._matricesTexture,Pe));const vo=Z.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0)&&Ae.update($,Z,Gi),(os||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,zt.setValue(N,"receiveShadow",$.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hi.envMap.value=De,hi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(hi.envMapIntensity.value=k.environmentIntensity),os&&(zt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&wd(hi,_o),xe&&q.fog===!0&&se.refreshFogUniforms(hi,xe),se.refreshMaterialUniforms(hi,q,K,H,m.state.transmissionRenderTarget[T.id]),Pa.upload(N,dc(Oe),hi,Pe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Pa.upload(N,dc(Oe),hi,Pe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&zt.setValue(N,"center",$.center),zt.setValue(N,"modelViewMatrix",$.modelViewMatrix),zt.setValue(N,"normalMatrix",$.normalMatrix),zt.setValue(N,"modelMatrix",$.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const dn=q.uniformsGroups;for(let xo=0,bd=dn.length;xo<bd;xo++){const gc=dn[xo];qe.update(gc,Gi),qe.bind(gc,Gi)}}return Gi}function wd(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Md(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,k,Z){Te.get(T.texture).__webglTexture=k,Te.get(T.depthTexture).__webglTexture=Z;const q=Te.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Z===void 0,q.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const Z=Te.get(T);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Z=0){E=T,C=k,A=Z;let q=!0,$=null,xe=!1,we=!1;if(T){const De=Te.get(T);De.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(N.FRAMEBUFFER,null),q=!1):De.__webglFramebuffer===void 0?Pe.setupRenderTarget(T):De.__hasExternalTextures&&Pe.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const Ge=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?$=Ge[k][Z]:$=Ge[k],xe=!0):T.samples>0&&Pe.useMultisampledRTT(T)===!1?$=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?$=Ge[Z]:$=Ge,v.copy(T.viewport),D.copy(T.scissor),V=T.scissorTest}else v.copy(re).multiplyScalar(K).floor(),D.copy(fe).multiplyScalar(K).floor(),V=be;if(me.bindFramebuffer(N.FRAMEBUFFER,$)&&q&&me.drawBuffers(T,$),me.viewport(v),me.scissor(D),me.setScissorTest(V),xe){const De=Te.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,Z)}else if(we){const De=Te.get(T.texture),Fe=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,Z||0,Fe)}I=-1},this.readRenderTargetPixels=function(T,k,Z,q,$,xe,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){me.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const De=T.texture,Fe=De.format,Ge=De.type;if(!_e.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&Z>=0&&Z<=T.height-$&&N.readPixels(k,Z,q,$,Se.convert(Fe),Se.convert(Ge),xe)}finally{const De=E!==null?Te.get(E).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,k,Z=0){const q=Math.pow(2,-Z),$=Math.floor(k.image.width*q),xe=Math.floor(k.image.height*q);Pe.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,T.x,T.y,$,xe),me.unbindTexture()},this.copyTextureToTexture=function(T,k,Z,q=0){const $=k.image.width,xe=k.image.height,we=Se.convert(Z.format),Ee=Se.convert(Z.type);Pe.setTexture2D(Z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,q,T.x,T.y,$,xe,we,Ee,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,q,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,we,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,q,T.x,T.y,we,Ee,k.image),q===0&&Z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(T,k,Z,q,$=0){const xe=T.max.x-T.min.x,we=T.max.y-T.min.y,Ee=T.max.z-T.min.z,De=Se.convert(q.format),Fe=Se.convert(q.type);let Ge;if(q.isData3DTexture)Pe.setTexture3D(q,0),Ge=N.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)Pe.setTexture2DArray(q,0),Ge=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const Ye=N.getParameter(N.UNPACK_ROW_LENGTH),St=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Bt=N.getParameter(N.UNPACK_SKIP_PIXELS),an=N.getParameter(N.UNPACK_SKIP_ROWS),Yn=N.getParameter(N.UNPACK_SKIP_IMAGES),it=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,it.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,T.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?N.texSubImage3D(Ge,$,k.x,k.y,k.z,xe,we,Ee,De,Fe,it.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,$,k.x,k.y,k.z,xe,we,Ee,De,it.data):N.texSubImage3D(Ge,$,k.x,k.y,k.z,xe,we,Ee,De,Fe,it),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ye),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,an),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Yn),$===0&&q.generateMipmaps&&N.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Pe.setTextureCube(T,0):T.isData3DTexture?Pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Pe.setTexture2DArray(T,0):Pe.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){C=0,A=0,E=null,me.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ql?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===lo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jo extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xf extends Jt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=vt,u=vt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sf extends Os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new O,Va=new O,Ou=new ct,ds=new ec,ga=new co,Qo=new O,ku=new O;let Vv=class extends sn{constructor(e=new In,t=new Sf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ga.fromBufferAttribute(t,r-1),Va.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ga.distanceTo(Va);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;Ou.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),w=u.getX(_+1),x=_a(this,e,ds,c,p,w);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=_a(this,e,ds,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=_a(this,e,ds,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=_a(this,e,ds,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function _a(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ga.fromBufferAttribute(a,r),Va.fromBufferAttribute(a,s),t.distanceSqToSegment(Ga,Va,Qo,ku)>i)return;Qo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Qo);if(!(c<e.near||c>e.far))return{distance:c,point:ku.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Bu=new O,zu=new O;class el extends Vv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Bu.fromBufferAttribute(t,r),zu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Bu.distanceTo(zu);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tl extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);const Gu={type:"change"},nl={type:"start"},Vu={type:"end"},va=new ec,Wu=new Si,Wv=Math.cos(70*Ip.DEG2RAD);class yf extends mr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",Ne),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gu),i.update(),s=r.NONE},this.update=function(){const y=new O,F=new cr().setFromUnitVectors(e.up,new O(0,1,0)),W=F.clone().invert(),oe=new O,he=new cr,Be=new O,$e=2*Math.PI;return function(Rt=null){const Je=i.object.position;y.copy(Je).sub(i.target),y.applyQuaternion(F),o.setFromVector3(y),i.autoRotate&&s===r.NONE&&V(v(Rt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let xt=i.minAzimuthAngle,ht=i.maxAzimuthAngle;isFinite(xt)&&isFinite(ht)&&(xt<-Math.PI?xt+=$e:xt>Math.PI&&(xt-=$e),ht<-Math.PI?ht+=$e:ht>Math.PI&&(ht-=$e),xt<=ht?o.theta=Math.max(xt,Math.min(ht,o.theta)):o.theta=o.theta>(xt+ht)/2?Math.max(xt,o.theta):Math.min(ht,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ci=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)o.radius=re(o.radius);else{const fn=o.radius;o.radius=re(o.radius*l),ci=fn!=o.radius}if(y.setFromSpherical(o),y.applyQuaternion(W),Je.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let fn=null;if(i.object.isPerspectiveCamera){const ui=y.length();fn=re(ui*l);const $n=ui-fn;i.object.position.addScaledVector(S,$n),i.object.updateMatrixWorld(),ci=!!$n}else if(i.object.isOrthographicCamera){const ui=new O(C.x,C.y,0);ui.unproject(i.object);const $n=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),ci=$n!==i.object.zoom;const ss=new O(C.x,C.y,0);ss.unproject(i.object),i.object.position.sub(ss).add(ui),i.object.updateMatrixWorld(),fn=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;fn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(fn).add(i.object.position):(va.origin.copy(i.object.position),va.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(va.direction))<Wv?e.lookAt(i.target):(Wu.setFromNormalAndCoplanarPoint(i.object.up,i.target),va.intersectPlane(Wu,i.target))))}else if(i.object.isOrthographicCamera){const fn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),fn!==i.object.zoom&&(i.object.updateProjectionMatrix(),ci=!0)}return l=1,A=!1,ci||oe.distanceToSquared(i.object.position)>a||8*(1-he.dot(i.object.quaternion))>a||Be.distanceToSquared(i.target)>a?(i.dispatchEvent(Gu),oe.copy(i.object.position),he.copy(i.object.quaternion),Be.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ze),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",G),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",G),i.domElement.getRootNode().removeEventListener("keydown",de,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Hu,c=new Hu;let l=1;const u=new O,h=new Re,d=new Re,f=new Re,g=new Re,_=new Re,m=new Re,p=new Re,w=new Re,x=new Re,S=new O,C=new Re;let A=!1;const E=[],I={};let M=!1;function v(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function D(y){const F=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*F)}function V(y){c.theta-=y}function U(y){c.phi-=y}const z=function(){const y=new O;return function(W,oe){y.setFromMatrixColumn(oe,0),y.multiplyScalar(-W),u.add(y)}}(),L=function(){const y=new O;return function(W,oe){i.screenSpacePanning===!0?y.setFromMatrixColumn(oe,1):(y.setFromMatrixColumn(oe,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(W),u.add(y)}}(),H=function(){const y=new O;return function(W,oe){const he=i.domElement;if(i.object.isPerspectiveCamera){const Be=i.object.position;y.copy(Be).sub(i.target);let $e=y.length();$e*=Math.tan(i.object.fov/2*Math.PI/180),z(2*W*$e/he.clientHeight,i.object.matrix),L(2*oe*$e/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(W*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),L(oe*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(y,F){if(!i.zoomToCursor)return;A=!0;const W=i.domElement.getBoundingClientRect(),oe=y-W.left,he=F-W.top,Be=W.width,$e=W.height;C.x=oe/Be*2-1,C.y=-(he/$e)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function re(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function fe(y){h.set(y.clientX,y.clientY)}function be(y){Q(y.clientX,y.clientX),p.set(y.clientX,y.clientY)}function Ie(y){g.set(y.clientX,y.clientY)}function Y(y){d.set(y.clientX,y.clientY),f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const F=i.domElement;V(2*Math.PI*f.x/F.clientHeight),U(2*Math.PI*f.y/F.clientHeight),h.copy(d),i.update()}function ae(y){w.set(y.clientX,y.clientY),x.subVectors(w,p),x.y>0?K(D(x.y)):x.y<0&&X(D(x.y)),p.copy(w),i.update()}function ve(y){_.set(y.clientX,y.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_),i.update()}function le(y){Q(y.clientX,y.clientY),y.deltaY<0?X(D(y.deltaY)):y.deltaY>0&&K(D(y.deltaY)),i.update()}function Ue(y){let F=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),F=!0;break}F&&(y.preventDefault(),i.update())}function ie(y){if(E.length===1)h.set(y.pageX,y.pageY);else{const F=ot(y),W=.5*(y.pageX+F.x),oe=.5*(y.pageY+F.y);h.set(W,oe)}}function N(y){if(E.length===1)g.set(y.pageX,y.pageY);else{const F=ot(y),W=.5*(y.pageX+F.x),oe=.5*(y.pageY+F.y);g.set(W,oe)}}function ne(y){const F=ot(y),W=y.pageX-F.x,oe=y.pageY-F.y,he=Math.sqrt(W*W+oe*oe);p.set(0,he)}function B(y){i.enableZoom&&ne(y),i.enablePan&&N(y)}function _e(y){i.enableZoom&&ne(y),i.enableRotate&&ie(y)}function me(y){if(E.length==1)d.set(y.pageX,y.pageY);else{const W=ot(y),oe=.5*(y.pageX+W.x),he=.5*(y.pageY+W.y);d.set(oe,he)}f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const F=i.domElement;V(2*Math.PI*f.x/F.clientHeight),U(2*Math.PI*f.y/F.clientHeight),h.copy(d)}function Me(y){if(E.length===1)_.set(y.pageX,y.pageY);else{const F=ot(y),W=.5*(y.pageX+F.x),oe=.5*(y.pageY+F.y);_.set(W,oe)}m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_)}function Te(y){const F=ot(y),W=y.pageX-F.x,oe=y.pageY-F.y,he=Math.sqrt(W*W+oe*oe);w.set(0,he),x.set(0,Math.pow(w.y/p.y,i.zoomSpeed)),K(x.y),p.copy(w);const Be=(y.pageX+F.x)*.5,$e=(y.pageY+F.y)*.5;Q(Be,$e)}function Pe(y){i.enableZoom&&Te(y),i.enablePan&&Me(y)}function Ke(y){i.enableZoom&&Te(y),i.enableRotate&&me(y)}function P(y){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",G)),!ke(y)&&(Le(y),y.pointerType==="touch"?ce(y):j(y)))}function b(y){i.enabled!==!1&&(y.pointerType==="touch"?Ae(y):te(y))}function G(y){switch(Se(y),E.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",G),i.dispatchEvent(Vu),s=r.NONE;break;case 1:const F=E[0],W=I[F];ce({pointerId:F,pageX:W.x,pageY:W.y});break}}function j(y){let F;switch(y.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case _r.DOLLY:if(i.enableZoom===!1)return;be(y),s=r.DOLLY;break;case _r.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;Ie(y),s=r.PAN}else{if(i.enableRotate===!1)return;fe(y),s=r.ROTATE}break;case _r.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;fe(y),s=r.ROTATE}else{if(i.enablePan===!1)return;Ie(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(nl)}function te(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Y(y);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(y);break;case r.PAN:if(i.enablePan===!1)return;ve(y);break}}function se(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(nl),le(ye(y)),i.dispatchEvent(Vu))}function ye(y){const F=y.deltaMode,W={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(F){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return y.ctrlKey&&!M&&(W.deltaY*=10),W}function de(y){y.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(y){y.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function Ne(y){i.enabled===!1||i.enablePan===!1||Ue(y)}function ce(y){switch(qe(y),E.length){case 1:switch(i.touches.ONE){case vr.ROTATE:if(i.enableRotate===!1)return;ie(y),s=r.TOUCH_ROTATE;break;case vr.PAN:if(i.enablePan===!1)return;N(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(y),s=r.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_e(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(nl)}function Ae(y){switch(qe(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;me(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Me(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(y),i.update();break;default:s=r.NONE}}function Ze(y){i.enabled!==!1&&y.preventDefault()}function Le(y){E.push(y.pointerId)}function Se(y){delete I[y.pointerId];for(let F=0;F<E.length;F++)if(E[F]==y.pointerId){E.splice(F,1);return}}function ke(y){for(let F=0;F<E.length;F++)if(E[F]==y.pointerId)return!0;return!1}function qe(y){let F=I[y.pointerId];F===void 0&&(F=new Re,I[y.pointerId]=F),F.set(y.pageX,y.pageY)}function ot(y){const F=y.pointerId===E[0]?E[1]:E[0];return I[F]}i.domElement.addEventListener("contextmenu",Ze),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",G),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}function Xv(n){return n.length>=2&&n[0]===31&&n[1]===139}function qv(n){return n.length>=2&&n[0]===120&&(n[1]===1||n[1]===94||n[1]===156||n[1]===218)}function $v(n){const e=n.slice(0,8),t=new DataView(e.buffer,e.byteOffset),i=t.getUint32(0,!0),r=t.getUint32(4,!0);if(e.length===8&&i>0&&i<100&&r===n.byteLength-8)return i}const Yv=new TextEncoder,jv=new TextDecoder;function Zv(n){return Yv.encode(n)}function Kv(n){return jv.decode(n instanceof Uint8Array?n:Uint8Array.from(n))}class wf{constructor(e,t){R(this,"littleEndian");R(this,"offset");R(this,"array");R(this,"view");R(this,"readByte",this.readNumber.bind(this,"getInt8",1));R(this,"readShort",this.readNumber.bind(this,"getInt16",2));R(this,"readInt",this.readNumber.bind(this,"getInt32",4));R(this,"readFloat",this.readNumber.bind(this,"getFloat32",4));R(this,"readDouble",this.readNumber.bind(this,"getFloat64",8));this.littleEndian=(t==null?void 0:t.littleEndian)??!1,this.offset=(t==null?void 0:t.offset)??0,this.array=e instanceof Uint8Array?e:new Uint8Array(e),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}readNumber(e,t){this.requireAvailable(t);const i=this.view[e](this.offset,this.littleEndian);return this.offset+=t,i}requireAvailable(e){if(e<0)throw new Error(`Cannot read negative byte length ${e}`);if(this.offset+e>this.array.byteLength)throw new Error(`Cannot read ${e} bytes at offset ${this.offset}; input length is ${this.array.byteLength}`)}readBytes(e){this.requireAvailable(e);const t=this.array.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){this.requireAvailable(2);const e=this.view.getUint16(this.offset,this.littleEndian);this.offset+=2;const t=this.readBytes(e);return Kv(t)}}class Mf{constructor(e){R(this,"littleEndian");R(this,"offset");R(this,"buffer");R(this,"array");R(this,"view");R(this,"writeByte",this.writeNumber.bind(this,"setInt8",1));R(this,"writeShort",this.writeNumber.bind(this,"setInt16",2));R(this,"writeInt",this.writeNumber.bind(this,"setInt32",4));R(this,"writeFloat",this.writeNumber.bind(this,"setFloat32",4));R(this,"writeDouble",this.writeNumber.bind(this,"setFloat64",8));this.littleEndian=(e==null?void 0:e.littleEndian)??!1,this.offset=(e==null?void 0:e.offset)??0,this.buffer=new ArrayBuffer((e==null?void 0:e.initialSize)??1024),this.array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer)}accommodate(e){const t=this.offset+e;if(this.buffer.byteLength>=t)return;let i=this.buffer.byteLength;for(;i<t;)i*=2;const r=new ArrayBuffer(i),s=new Uint8Array(r);s.set(this.array),this.offset>this.buffer.byteLength&&s.fill(0,this.buffer.byteLength,this.offset),this.buffer=r,this.view=new DataView(r),this.array=s}writeNumber(e,t,i){this.accommodate(t),this.view[e](this.offset,i,this.littleEndian),this.offset+=t}writeBytes(e){this.accommodate(e.length),this.array.set(e,this.offset),this.offset+=e.length}writeString(e){const t=Zv(e);if(t.length>65535)throw new Error(`NBT strings cannot exceed 65535 bytes; got ${t.length}`);this.accommodate(2),this.view.setUint16(this.offset,t.length,this.littleEndian),this.offset+=2,this.writeBytes(t)}getData(){return this.accommodate(0),this.array.slice(0,this.offset)}}var ee;(function(n){function e(h){return typeof h=="number"?h:void 0}n.readNumber=e;function t(h){return typeof h=="number"?Math.floor(h):void 0}n.readInt=t;function i(h){return typeof h=="string"?h:void 0}n.readString=i;function r(h){return typeof h=="boolean"?h:void 0}n.readBoolean=r;function s(h){return typeof h=="object"&&h!==null&&!Array.isArray(h)?h:void 0}n.readObject=s;function a(h,d){if(Array.isArray(h))return d?h.map(f=>d(f)):h}n.readArray=a;function o(h,d){if(Array.isArray(h))return[0,1].map(f=>d(h[f]))}n.readPair=o;function c(h,d){const f=s(h)??{};return Object.fromEntries(Object.entries(f).map(([g,_])=>[g,d(_)]))}n.readMap=c;function l(h,d,f){const g=d(h);return g?f(g):void 0}n.compose=l;function u(h,d){return typeof h!="string"?d[0]:d.includes(h)?h:d[0]}n.readEnum=u})(ee||(ee={}));var Xe;(function(n){function e(r){const s=ee.readNumber(r);if(s)return i(s);const a=ee.readArray(r,o=>ee.readNumber(o)??0);if(!(a===void 0||a.length!==3))return a}n.fromJson=e;function t(r){if(r.isNumber())return i(r.getAsNumber());if(!r.isListOrArray())return;const s=r.getItems();if(!(s.length<3))return s.map(a=>a.getAsNumber())}n.fromNbt=t;function i(r){const s=r>>16&255,a=r>>8&255,o=r&255;return[s/255,a/255,o/255]}n.intToRgb=i})(Xe||(Xe={}));class Yt{constructor(e){R(this,"source");R(this,"cursor");this.source=e,this.cursor=0}get remainingLength(){return this.source.length-this.cursor}get totalLength(){return this.source.length}getRead(e=0){return this.source.substring(e,this.cursor)}getRemaining(){return this.source.substring(this.cursor)}canRead(e=1){return this.cursor+e<=this.source.length}peek(e=0){return this.source.charAt(this.cursor+e)}read(){return this.source.charAt(this.cursor++)}skip(){this.cursor+=1}skipWhitespace(){for(;this.canRead()&&Yt.isWhitespace(this.peek());)this.skip()}expect(e,t=!1){if(t&&this.skipWhitespace(),!this.canRead()||this.peek()!==e)throw this.createError(`Expected '${e}'`);this.skip()}readInt(){const e=this.cursor;for(;this.canRead()&&Yt.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected integer");try{const i=Number(t);if(isNaN(i)||!Number.isInteger(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid integer '${t}'`)}}readFloat(){const e=this.cursor;for(;this.canRead()&&Yt.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected float");try{const i=Number(t);if(isNaN(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid float '${t}'`)}}readUnquotedString(){const e=this.cursor;for(;this.canRead()&&Yt.isAllowedInUnquotedString(this.peek());)this.skip();return this.getRead(e)}readQuotedString(){if(!this.canRead())return"";const e=this.peek();if(!Yt.isQuotedStringStart(e))throw this.createError("Expected quote to start a string");return this.skip(),this.readStringUntil(e)}readString(){if(!this.canRead())return"";const e=this.peek();return Yt.isQuotedStringStart(e)?(this.skip(),this.readStringUntil(e)):this.readUnquotedString()}readStringUntil(e){const t=[];let i=!1;for(;this.canRead();){const r=this.read();if(i)if(r===e||r==="\\")t.push(r),i=!1;else throw this.cursor-=1,this.createError(`Invalid escape sequence '${r}' in quoted string`);else if(r==="\\")i=!0;else{if(r===e)return t.join("");t.push(r)}}throw this.createError("Unclosed quoted string")}readBoolean(){const e=this.cursor,t=this.readUnquotedString();if(t.length===0)throw this.createError("Expected bool");if(t==="true")return!0;if(t==="false")return!1;throw this.cursor=e,this.createError(`Invalid bool, expected true or false but found '${t}'`)}static isAllowedInNumber(e){return e>="0"&&e<="9"||e==="."||e==="-"}static isAllowedInUnquotedString(e){return e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z"||e==="_"||e==="-"||e==="."||e==="+"}static isQuotedStringStart(e){return e==="'"||e==='"'}static isWhitespace(e){return e===" "||e==="	"||e===`
`||e==="\r"}createError(e){const t=Math.min(this.source.length,this.cursor),i=(t>10?"...":"")+this.source.substring(Math.max(0,t-10),t);return new Error(`${e} at position ${this.cursor}: ${i}<--[HERE]`)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Jv=4,Xu=0,qu=1,Qv=2;function ns(n){let e=n.length;for(;--e>=0;)n[e]=0}const ex=0,bf=1,tx=2,nx=3,ix=258,nc=29,Bs=256,bs=Bs+1+nc,Wr=30,ic=19,Ef=2*bs+1,nr=15,il=16,rx=7,rc=256,Tf=16,Af=17,Cf=18,Dl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),La=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),sx=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Rf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ax=512,ii=new Array((bs+2)*2);ns(ii);const xs=new Array(Wr*2);ns(xs);const Es=new Array(ax);ns(Es);const Ts=new Array(ix-nx+1);ns(Ts);const sc=new Array(nc);ns(sc);const Wa=new Array(Wr);ns(Wa);function rl(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Pf,Lf,Df;function sl(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const If=n=>n<256?Es[n]:Es[256+(n>>>7)],As=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},nn=(n,e,t)=>{n.bi_valid>il-t?(n.bi_buf|=e<<n.bi_valid&65535,As(n,n.bi_buf),n.bi_buf=e>>il-n.bi_valid,n.bi_valid+=t-il):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Hn=(n,e,t)=>{nn(n,t[e*2],t[e*2+1])},Uf=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},ox=n=>{n.bi_valid===16?(As(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},lx=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,h,d,f,g,_=0;for(d=0;d<=nr;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<Ef;l++)u=n.heap[l],d=t[t[u*2+1]*2+1]+1,d>c&&(d=c,_++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,f=0,u>=o&&(f=a[u-o]),g=t[u*2],n.opt_len+=g*(d+f),s&&(n.static_len+=g*(r[u*2+1]+f)));if(_!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(u=n.bl_count[d];u!==0;)h=n.heap[--l],!(h>i)&&(t[h*2+1]!==d&&(n.opt_len+=(d-t[h*2+1])*t[h*2],t[h*2+1]=d),u--)}},Nf=(n,e,t)=>{const i=new Array(nr+1);let r=0,s,a;for(s=1;s<=nr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Uf(i[o]++,o))}},cx=()=>{let n,e,t,i,r;const s=new Array(nr+1);for(t=0,i=0;i<nc-1;i++)for(sc[i]=t,n=0;n<1<<Dl[i];n++)Ts[t++]=i;for(Ts[t-1]=i,r=0,i=0;i<16;i++)for(Wa[i]=r,n=0;n<1<<La[i];n++)Es[r++]=i;for(r>>=7;i<Wr;i++)for(Wa[i]=r<<7,n=0;n<1<<La[i]-7;n++)Es[256+r++]=i;for(e=0;e<=nr;e++)s[e]=0;for(n=0;n<=143;)ii[n*2+1]=8,n++,s[8]++;for(;n<=255;)ii[n*2+1]=9,n++,s[9]++;for(;n<=279;)ii[n*2+1]=7,n++,s[7]++;for(;n<=287;)ii[n*2+1]=8,n++,s[8]++;for(Nf(ii,bs+1,s),n=0;n<Wr;n++)xs[n*2+1]=5,xs[n*2]=Uf(n,5);Pf=new rl(ii,Dl,Bs+1,bs,nr),Lf=new rl(xs,La,0,Wr,nr),Df=new rl(new Array(0),sx,0,ic,rx)},Ff=n=>{let e;for(e=0;e<bs;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Wr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<ic;e++)n.bl_tree[e*2]=0;n.dyn_ltree[rc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Of=n=>{n.bi_valid>8?As(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},$u=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},al=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&$u(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!$u(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Yu=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Hn(n,r,e):(a=Ts[r],Hn(n,a+Bs+1,e),o=Dl[a],o!==0&&(r-=sc[a],nn(n,r,o)),i--,a=If(i),Hn(n,a,t),o=La[a],o!==0&&(i-=Wa[a],nn(n,i,o)));while(s<n.sym_next);Hn(n,rc,e)},Il=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=Ef,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)al(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],al(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,al(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],lx(n,e),Nf(t,c,n.bl_count)},ju=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Tf*2]++):o<=10?n.bl_tree[Af*2]++:n.bl_tree[Cf*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},Zu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do Hn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Hn(n,s,n.bl_tree),o--),Hn(n,Tf,n.bl_tree),nn(n,o-3,2)):o<=10?(Hn(n,Af,n.bl_tree),nn(n,o-3,3)):(Hn(n,Cf,n.bl_tree),nn(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},ux=n=>{let e;for(ju(n,n.dyn_ltree,n.l_desc.max_code),ju(n,n.dyn_dtree,n.d_desc.max_code),Il(n,n.bl_desc),e=ic-1;e>=3&&n.bl_tree[Rf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},hx=(n,e,t,i)=>{let r;for(nn(n,e-257,5),nn(n,t-1,5),nn(n,i-4,4),r=0;r<i;r++)nn(n,n.bl_tree[Rf[r]*2+1],3);Zu(n,n.dyn_ltree,e-1),Zu(n,n.dyn_dtree,t-1)},fx=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Xu;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return qu;for(t=32;t<Bs;t++)if(n.dyn_ltree[t*2]!==0)return qu;return Xu};let Ku=!1;const dx=n=>{Ku||(cx(),Ku=!0),n.l_desc=new sl(n.dyn_ltree,Pf),n.d_desc=new sl(n.dyn_dtree,Lf),n.bl_desc=new sl(n.bl_tree,Df),n.bi_buf=0,n.bi_valid=0,Ff(n)},kf=(n,e,t,i)=>{nn(n,(ex<<1)+(i?1:0),3),Of(n),As(n,t),As(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},px=n=>{nn(n,bf<<1,3),Hn(n,rc,ii),ox(n)},mx=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===Qv&&(n.strm.data_type=fx(n)),Il(n,n.l_desc),Il(n,n.d_desc),a=ux(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?kf(n,e,t,i):n.strategy===Jv||s===r?(nn(n,(bf<<1)+(i?1:0),3),Yu(n,ii,xs)):(nn(n,(tx<<1)+(i?1:0),3),hx(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Yu(n,n.dyn_ltree,n.dyn_dtree)),Ff(n),i&&Of(n)},gx=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Ts[t]+Bs+1)*2]++,n.dyn_dtree[If(e)*2]++),n.sym_next===n.sym_end);var _x=dx,vx=kf,xx=mx,Sx=gx,yx=px,wx={_tr_init:_x,_tr_stored_block:vx,_tr_flush_block:xx,_tr_tally:Sx,_tr_align:yx};const Mx=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Cs=Mx;const bx=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},Ex=new Uint32Array(bx()),Tx=(n,e,t,i)=>{const r=Ex,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Lt=Tx,ur={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},zs={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Ax,_tr_stored_block:Ul,_tr_flush_block:Cx,_tr_tally:Li,_tr_align:Rx}=wx,{Z_NO_FLUSH:Di,Z_PARTIAL_FLUSH:Px,Z_FULL_FLUSH:Lx,Z_FINISH:_n,Z_BLOCK:Ju,Z_OK:Ut,Z_STREAM_END:Qu,Z_STREAM_ERROR:Vn,Z_DATA_ERROR:Dx,Z_BUF_ERROR:ol,Z_DEFAULT_COMPRESSION:Ix,Z_FILTERED:Ux,Z_HUFFMAN_ONLY:xa,Z_RLE:Nx,Z_FIXED:Fx,Z_DEFAULT_STRATEGY:Ox,Z_UNKNOWN:kx,Z_DEFLATED:ho}=zs,Bx=9,zx=15,Hx=8,Gx=29,Vx=256,Nl=Vx+1+Gx,Wx=30,Xx=19,qx=2*Nl+1,$x=15,Qe=3,Ti=258,Wn=Ti+Qe+1,Yx=32,Jr=42,ac=57,Fl=69,Ol=73,kl=91,Bl=103,ir=113,_s=666,Kt=1,is=2,hr=3,rs=4,jx=3,rr=(n,e)=>(n.msg=ur[e],e),eh=n=>n*2-(n>4?9:0),bi=n=>{let e=n.length;for(;--e>=0;)n[e]=0},Zx=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let oc=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask;const fr=(n,e)=>{let t;if(n.legacy_hash)t=n.ins_h=oc(n,n.ins_h,n.window[e+Qe-1]);else{const r=n.window,s=r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;t=n.ins_h=Math.imul(s,66521)+66521>>>16&n.hash_mask}const i=n.prev[e&n.w_mask]=n.head[t];return n.head[t]=e,i},cn=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},hn=(n,e)=>{Cx(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,cn(n.strm)},et=(n,e)=>{n.pending_buf[n.pending++]=e},ps=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},zl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Cs(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Lt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},Bf=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Wn?n.strstart-(n.w_size-Wn):0,l=n.window,u=n.w_mask,h=n.prev,d=n.strstart+Ti;let f=l[i+a-1],g=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==f||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<d);if(s=Ti-(d-i),i=d-Ti,s>a){if(n.match_start=e,a=s,s>=o)break;f=l[i+a-1],g=l[i+a]}}while((e=h[e&u])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},Qr=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Wn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),Zx(n),i+=e),n.strm.avail_in===0)break;if(t=zl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.legacy_hash){if(n.lookahead+n.insert>=Qe)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=oc(n,n.ins_h,n.window[r+1]);n.insert&&(fr(n,r),r++,n.insert--,!(n.lookahead+n.insert<Qe)););}else if(n.lookahead+n.insert>Qe)for(r=n.strstart-n.insert;n.insert&&(fr(n,r),r++,n.insert--,!(n.lookahead+n.insert<=Qe)););}while(n.lookahead<Wn&&n.strm.avail_in!==0)},zf=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==_n||e===Di||i!==r+n.strm.avail_in)))break;a=e===_n&&i===r+n.strm.avail_in?1:0,Ul(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,cn(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(zl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?rs:e!==Di&&e!==_n&&n.strm.avail_in===0&&n.strstart===n.block_start?is:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(zl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===_n)&&e!==Di&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===_n&&n.strm.avail_in===0&&i===r?1:0,Ul(n,n.block_start,i,a),n.block_start+=i,cn(n.strm)),a?hr:Kt)},ll=(n,e)=>{let t,i;for(;;){if(n.lookahead<Wn){if(Qr(n),n.lookahead<Wn&&e===Di)return Kt;if(n.lookahead===0)break}if(t=0,n.lookahead>=Qe&&(t=fr(n,n.strstart)),t!==0&&n.strstart-t<=n.w_size-Wn&&(n.match_length=Bf(n,t)),n.match_length>=Qe)if(i=Li(n,n.strstart-n.match_start,n.match_length-Qe),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Qe){n.match_length--;do n.strstart++,t=fr(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=oc(n,n.ins_h,n.window[n.strstart+1]));else i=Li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(hn(n,!1),n.strm.avail_out===0))return Kt}return n.insert=n.strstart<Qe-1?n.strstart:Qe-1,e===_n?(hn(n,!0),n.strm.avail_out===0?hr:rs):n.sym_next&&(hn(n,!1),n.strm.avail_out===0)?Kt:is},Fr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Wn){if(Qr(n),n.lookahead<Wn&&e===Di)return Kt;if(n.lookahead===0)break}if(t=0,n.lookahead>=Qe&&(t=fr(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Qe-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Wn&&(n.match_length=Bf(n,t),n.match_length<=5&&(n.strategy===Ux||n.match_length===Qe&&n.strstart-n.match_start>4096)&&(n.match_length=Qe-1)),n.prev_length>=Qe&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-Qe,i=Li(n,n.strstart-1-n.prev_match,n.prev_length-Qe),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(t=fr(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Qe-1,n.strstart++,i&&(hn(n,!1),n.strm.avail_out===0))return Kt}else if(n.match_available){if(i=Li(n,0,n.window[n.strstart-1]),i&&hn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Kt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Li(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Qe-1?n.strstart:Qe-1,e===_n?(hn(n,!0),n.strm.avail_out===0?hr:rs):n.sym_next&&(hn(n,!1),n.strm.avail_out===0)?Kt:is},Kx=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=Ti){if(Qr(n),n.lookahead<=Ti&&e===Di)return Kt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=Qe&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+Ti;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=Ti-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=Qe?(t=Li(n,1,n.match_length-Qe),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(hn(n,!1),n.strm.avail_out===0))return Kt}return n.insert=0,e===_n?(hn(n,!0),n.strm.avail_out===0?hr:rs):n.sym_next&&(hn(n,!1),n.strm.avail_out===0)?Kt:is},Jx=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Qr(n),n.lookahead===0)){if(e===Di)return Kt;break}if(n.match_length=0,t=Li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(hn(n,!1),n.strm.avail_out===0))return Kt}return n.insert=0,e===_n?(hn(n,!0),n.strm.avail_out===0?hr:rs):n.sym_next&&(hn(n,!1),n.strm.avail_out===0)?Kt:is};function Un(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const vs=[new Un(0,0,0,0,zf),new Un(4,4,8,4,ll),new Un(4,5,16,8,ll),new Un(4,6,32,32,ll),new Un(4,4,16,16,Fr),new Un(8,16,32,32,Fr),new Un(8,16,128,128,Fr),new Un(8,32,128,256,Fr),new Un(32,128,258,1024,Fr),new Un(32,258,258,4096,Fr)],Qx=n=>{n.window_size=2*n.w_size,bi(n.head),n.max_lazy_match=vs[n.level].max_lazy,n.good_match=vs[n.level].good_length,n.nice_match=vs[n.level].nice_length,n.max_chain_length=vs[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=Qe-1,n.match_available=0,n.ins_h=0};function e1(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ho,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(qx*2),this.dyn_dtree=new Uint16Array((2*Wx+1)*2),this.bl_tree=new Uint16Array((2*Xx+1)*2),bi(this.dyn_ltree),bi(this.dyn_dtree),bi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array($x+1),this.heap=new Uint16Array(2*Nl+1),bi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Nl+1),bi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Hs=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Jr&&e.status!==ac&&e.status!==Fl&&e.status!==Ol&&e.status!==kl&&e.status!==Bl&&e.status!==ir&&e.status!==_s?1:0},Hf=n=>{if(Hs(n))return rr(n,Vn);n.total_in=n.total_out=0,n.data_type=kx;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?ac:e.wrap?Jr:ir,n.adler=e.wrap===2?0:1,e.last_flush=-2,Ax(e),Ut},Gf=n=>{const e=Hf(n);return e===Ut&&Qx(n.state),e},t1=(n,e)=>Hs(n)||n.state.wrap!==2?Vn:(n.state.gzhead=e,Ut),Vf=(n,e,t,i,r,s,a)=>{if(!n)return Vn;let o=1;if(e===Ix&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>Bx||t!==ho||i<8||i>15||e<0||e>9||s<0||s>Fx||i===8&&o!==1)return rr(n,Vn);i===8&&(i=9);const c=new e1;return n.state=c,c.strm=n,c.status=Jr,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=a?1:0,c.hash_bits=r+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+Qe-1)/Qe),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<r+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=e,c.strategy=s,c.method=t,Gf(n)},n1=(n,e)=>Vf(n,e,ho,zx,Hx,Ox),i1=(n,e)=>{if(Hs(n)||e>Ju||e<0)return n?rr(n,Vn):Vn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===_s&&e!==_n)return rr(n,n.avail_out===0?ol:Vn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(cn(n),n.avail_out===0)return t.last_flush=-1,Ut}else if(n.avail_in===0&&eh(e)<=eh(i)&&e!==_n)return rr(n,ol);if(t.status===_s&&n.avail_in!==0)return rr(n,ol);if(t.status===Jr&&t.wrap===0&&(t.status=ir),t.status===Jr){let r=ho+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=xa||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=Yx),r+=31-r%31,ps(t,r),t.strstart!==0&&(ps(t,n.adler>>>16),ps(t,n.adler&65535)),n.adler=1,t.status=ir,cn(n),t.pending!==0)return t.last_flush=-1,Ut}if(t.status===ac){if(n.adler=0,et(t,31),et(t,139),et(t,8),t.gzhead)et(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),et(t,t.gzhead.time&255),et(t,t.gzhead.time>>8&255),et(t,t.gzhead.time>>16&255),et(t,t.gzhead.time>>24&255),et(t,t.level===9?2:t.strategy>=xa||t.level<2?4:0),et(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(et(t,t.gzhead.extra.length&255),et(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Lt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Fl;else if(et(t,0),et(t,0),et(t,0),et(t,0),et(t,0),et(t,t.level===9?2:t.strategy>=xa||t.level<2?4:0),et(t,jx),t.status=ir,cn(n),t.pending!==0)return t.last_flush=-1,Ut}if(t.status===Fl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Lt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,cn(n),t.pending!==0)return t.last_flush=-1,Ut;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Lt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Ol}if(t.status===Ol){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Lt(n.adler,t.pending_buf,t.pending-r,r)),cn(n),t.pending!==0)return t.last_flush=-1,Ut;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,et(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Lt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=kl}if(t.status===kl){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Lt(n.adler,t.pending_buf,t.pending-r,r)),cn(n),t.pending!==0)return t.last_flush=-1,Ut;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,et(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Lt(n.adler,t.pending_buf,t.pending-r,r))}t.status=Bl}if(t.status===Bl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(cn(n),t.pending!==0))return t.last_flush=-1,Ut;et(t,n.adler&255),et(t,n.adler>>8&255),n.adler=0}if(t.status=ir,cn(n),t.pending!==0)return t.last_flush=-1,Ut}if(n.avail_in!==0||t.lookahead!==0||e!==Di&&t.status!==_s){let r=t.level===0?zf(t,e):t.strategy===xa?Jx(t,e):t.strategy===Nx?Kx(t,e):vs[t.level].func(t,e);if((r===hr||r===rs)&&(t.status=_s),r===Kt||r===hr)return n.avail_out===0&&(t.last_flush=-1),Ut;if(r===is&&(e===Px?Rx(t):e!==Ju&&(Ul(t,0,0,!1),e===Lx&&(bi(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),cn(n),n.avail_out===0))return t.last_flush=-1,Ut}return e!==_n?Ut:t.wrap<=0?Qu:(t.wrap===2?(et(t,n.adler&255),et(t,n.adler>>8&255),et(t,n.adler>>16&255),et(t,n.adler>>24&255),et(t,n.total_in&255),et(t,n.total_in>>8&255),et(t,n.total_in>>16&255),et(t,n.total_in>>24&255)):(ps(t,n.adler>>>16),ps(t,n.adler&65535)),cn(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Ut:Qu)},r1=n=>{if(Hs(n))return Vn;const e=n.state.status;return n.state=null,e===ir?rr(n,Dx):Ut},s1=(n,e)=>{let t=e.length;if(Hs(n))return Vn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Jr||i.lookahead)return Vn;if(r===1&&(n.adler=Cs(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(bi(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Qr(i);i.lookahead>=Qe;){let c=i.strstart,l=i.lookahead-(Qe-1);do fr(i,c),c++;while(--l);i.strstart=c,i.lookahead=Qe-1,Qr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Qe-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,Ut};var a1=n1,o1=Vf,l1=Gf,c1=Hf,u1=t1,h1=i1,f1=r1,d1=s1,p1="pako deflate (from Nodeca project)",Ss={deflateInit:a1,deflateInit2:o1,deflateReset:l1,deflateResetKeep:c1,deflateSetHeader:u1,deflate:h1,deflateEnd:f1,deflateSetDictionary:d1,deflateInfo:p1};const m1=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var g1=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)m1(t,i)&&(n[i]=t[i])}}return n},_1=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},fo={assign:g1,flattenChunks:_1};let Wf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Wf=!1}const Rs=new Uint8Array(256);for(let n=0;n<256;n++)Rs[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Rs[254]=Rs[255]=1;var v1=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const x1=(n,e)=>{if(e<65534&&n.subarray&&Wf)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var S1=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=Rs[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return x1(s,r)},y1=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Rs[n[t]]>e?t:e},Ps={string2buf:v1,buf2string:S1,utf8border:y1};function w1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Xf=w1;const qf=Object.prototype.toString,{Z_NO_FLUSH:M1,Z_SYNC_FLUSH:b1,Z_FULL_FLUSH:E1,Z_FINISH:T1,Z_OK:Xa,Z_STREAM_END:A1,Z_DEFAULT_COMPRESSION:C1,Z_DEFAULT_STRATEGY:R1,Z_DEFLATED:P1}=zs,L1={level:C1,method:P1,chunkSize:16384,windowBits:15,memLevel:8,strategy:R1,legacyHash:!0};function Gs(n){this.options=fo.assign({},L1,n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Xf,this.strm.avail_out=0;let t=Ss.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy,e.legacyHash);if(t!==Xa)throw new Error(ur[t]);if(e.header&&Ss.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Ps.string2buf(e.dictionary):qf.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Ss.deflateSetDictionary(this.strm,i),t!==Xa)throw new Error(ur[t]);this._dict_set=!0}}Gs.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?T1:M1,typeof n=="string"?t.input=Ps.string2buf(n):qf.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===b1||s===E1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Ss.deflate(t,s),r===A1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Ss.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Xa;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Gs.prototype.onData=function(n){this.chunks.push(n)};Gs.prototype.onEnd=function(n){n===Xa&&(this.result=fo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function lc(n,e){const t=new Gs(e);if(t.push(n,!0),t.err)throw t.msg||ur[t.err];return t.result}function D1(n,e){return e=e||{},e.raw=!0,lc(n,e)}function I1(n,e){return e=e||{},e.gzip=!0,lc(n,e)}var U1=Gs,N1=lc,F1=D1,O1=I1,k1={Deflate:U1,deflate:N1,deflateRaw:F1,gzip:O1};const Sa=16209,B1=16191;var z1=function(e,t){let i,r,s,a,o,c,l,u,h,d,f,g,_,m,p,w,x,S,C,A,E,I,M,v;const D=e.state;i=e.next_in,M=e.input,r=i+(e.avail_in-5),s=e.next_out,v=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=D.dmax,l=D.wsize,u=D.whave,h=D.wnext,d=D.window,f=D.hold,g=D.bits,_=D.lencode,m=D.distcode,p=(1<<D.lenbits)-1,w=(1<<D.distbits)-1;e:do{g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),x=_[f&p];t:for(;;){if(S=x>>>24,f>>>=S,g-=S,S=x>>>16&255,S===0)v[s++]=x&65535;else if(S&16){C=x&65535,S&=15,S&&(g<S&&(f+=M[i++]<<g,g+=8),C+=f&(1<<S)-1,f>>>=S,g-=S),g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),x=m[f&w];n:for(;;){if(S=x>>>24,f>>>=S,g-=S,S=x>>>16&255,S&16){if(A=x&65535,S&=15,g<S&&(f+=M[i++]<<g,g+=8,g<S&&(f+=M[i++]<<g,g+=8)),A+=f&(1<<S)-1,A>c){e.msg="invalid distance too far back",D.mode=Sa;break e}if(f>>>=S,g-=S,S=s-a,A>S){if(S=A-S,S>u&&D.sane){e.msg="invalid distance too far back",D.mode=Sa;break e}if(E=0,I=d,h===0){if(E+=l-S,S<C){C-=S;do v[s++]=d[E++];while(--S);E=s-A,I=v}}else if(h<S){if(E+=l+h-S,S-=h,S<C){C-=S;do v[s++]=d[E++];while(--S);if(E=0,h<C){S=h,C-=S;do v[s++]=d[E++];while(--S);E=s-A,I=v}}}else if(E+=h-S,S<C){C-=S;do v[s++]=d[E++];while(--S);E=s-A,I=v}for(;C>2;)v[s++]=I[E++],v[s++]=I[E++],v[s++]=I[E++],C-=3;C&&(v[s++]=I[E++],C>1&&(v[s++]=I[E++]))}else{E=s-A;do v[s++]=v[E++],v[s++]=v[E++],v[s++]=v[E++],C-=3;while(C>2);C&&(v[s++]=v[E++],C>1&&(v[s++]=v[E++]))}}else if(S&64){e.msg="invalid distance code",D.mode=Sa;break e}else{x=m[(x&65535)+(f&(1<<S)-1)];continue n}break}}else if(S&64)if(S&32){D.mode=B1;break e}else{e.msg="invalid literal/length code",D.mode=Sa;break e}else{x=_[(x&65535)+(f&(1<<S)-1)];continue t}break}}while(i<r&&s<o);C=g>>3,i-=C,g-=C<<3,f&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),D.hold=f,D.bits=g};const Or=15,th=852,nh=592,ih=0,cl=1,rh=2,H1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),G1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),V1=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),W1=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),X1=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,u=0,h=0,d=0,f=0,g=0,_=0,m=0,p=0,w=0,x,S,C,A,E,I=null,M;const v=new Uint16Array(Or+1),D=new Uint16Array(Or+1);let V=null,U,z,L;for(l=0;l<=Or;l++)v[l]=0;for(u=0;u<i;u++)v[e[t+u]]++;for(f=c,d=Or;d>=1&&v[d]===0;d--);if(f>d&&(f=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(h=1;h<d&&v[h]===0;h++);for(f<h&&(f=h),m=1,l=1;l<=Or;l++)if(m<<=1,m-=v[l],m<0)return-1;if(m>0&&(n===ih||d!==1))return-1;for(D[1]=0,l=1;l<Or;l++)D[l+1]=D[l]+v[l];for(u=0;u<i;u++)e[t+u]!==0&&(a[D[e[t+u]]++]=u);if(n===ih?(I=V=a,M=20):n===cl?(I=H1,V=G1,M=257):(I=V1,V=W1,M=0),w=0,u=0,l=h,E=s,g=f,_=0,C=-1,p=1<<f,A=p-1,n===cl&&p>th||n===rh&&p>nh)return 1;for(;;){U=l-_,a[u]+1<M?(z=0,L=a[u]):a[u]>=M?(z=V[a[u]-M],L=I[a[u]-M]):(z=96,L=0),x=1<<l-_,S=1<<g,h=S;do S-=x,r[E+(w>>_)+S]=U<<24|z<<16|L|0;while(S!==0);for(x=1<<l-1;w&x;)x>>=1;if(x!==0?(w&=x-1,w+=x):w=0,u++,--v[l]===0){if(l===d)break;l=e[t+a[u]]}if(l>f&&(w&A)!==C){for(_===0&&(_=f),E+=h,g=l-_,m=1<<g;g+_<d&&(m-=v[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===cl&&p>th||n===rh&&p>nh)return 1;C=w&A,r[C]=f<<24|g<<16|E-s|0}}return w!==0&&(r[E+w]=l-_<<24|64<<16|0),o.bits=f,0};var ys=X1;const q1=0,$f=1,Yf=2,{Z_FINISH:sh,Z_BLOCK:$1,Z_TREES:ya,Z_OK:dr,Z_STREAM_END:Y1,Z_NEED_DICT:j1,Z_STREAM_ERROR:Sn,Z_DATA_ERROR:jf,Z_MEM_ERROR:Zf,Z_BUF_ERROR:Z1,Z_DEFLATED:ah}=zs,po=16180,oh=16181,lh=16182,ch=16183,uh=16184,hh=16185,fh=16186,dh=16187,ph=16188,mh=16189,qa=16190,ei=16191,ul=16192,gh=16193,hl=16194,_h=16195,vh=16196,xh=16197,Sh=16198,wa=16199,Ma=16200,yh=16201,wh=16202,Mh=16203,bh=16204,Eh=16205,fl=16206,Th=16207,Ah=16208,pt=16209,Kf=16210,Jf=16211,K1=852,J1=592,Q1=15,eS=Q1,Ch=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function tS(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const gr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<po||e.mode>Jf?1:0},Qf=n=>{if(gr(n))return Sn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=po,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(K1),e.distcode=e.distdyn=new Int32Array(J1),e.sane=1,e.back=-1,dr},ed=n=>{if(gr(n))return Sn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,Qf(n)},td=(n,e)=>{let t;if(gr(n))return Sn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Sn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,ed(n))},nd=(n,e)=>{if(!n)return Sn;const t=new tS;n.state=t,t.strm=n,t.window=null,t.mode=po;const i=td(n,e);return i!==dr&&(n.state=null),i},nS=n=>nd(n,eS);let Rh=!0,dl,pl;const iS=n=>{if(Rh){dl=new Int32Array(512),pl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(ys($f,n.lens,0,288,dl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;ys(Yf,n.lens,0,32,pl,0,n.work,{bits:5}),Rh=!1}n.lencode=dl,n.lenbits=9,n.distcode=pl,n.distbits=5},id=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.window=new Uint8Array(1<<s.wbits)),s.wsize===0&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},rS=(n,e)=>{let t,i,r,s,a,o,c,l,u,h,d,f,g,_,m=0,p,w,x,S,C,A,E,I;const M=new Uint8Array(4);let v,D;const V=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(gr(n)||!n.output||!n.input&&n.avail_in!==0)return Sn;t=n.state,t.mode===ei&&(t.mode=ul),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,h=o,d=c,I=dr;e:for(;;)switch(t.mode){case po:if(t.wrap===0){t.mode=ul;break}for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,M[0]=l&255,M[1]=l>>>8&255,t.check=Lt(t.check,M,2,0),l=0,u=0,t.mode=oh;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=pt;break}if((l&15)!==ah){n.msg="unknown compression method",t.mode=pt;break}if(l>>>=4,u-=4,E=(l&15)+8,t.wbits===0&&(t.wbits=E),E>15||E>t.wbits){n.msg="invalid window size",t.mode=pt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?mh:ei,l=0,u=0;break;case oh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==ah){n.msg="unknown compression method",t.mode=pt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=pt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Lt(t.check,M,2,0)),l=0,u=0,t.mode=lh;case lh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,M[2]=l>>>16&255,M[3]=l>>>24&255,t.check=Lt(t.check,M,4,0)),l=0,u=0,t.mode=ch;case ch:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Lt(t.check,M,2,0)),l=0,u=0,t.mode=uh;case uh:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Lt(t.check,M,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=hh;case hh:if(t.flags&1024&&(f=t.length,f>o&&(f=o),f&&(t.head&&(E=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+f),E)),t.flags&512&&t.wrap&4&&(t.check=Lt(t.check,i,f,s)),o-=f,s+=f,t.length-=f),t.length))break e;t.length=0,t.mode=fh;case fh:if(t.flags&2048){if(o===0)break e;f=0;do E=i[s+f++],t.head&&E&&t.length<65536&&(t.head.name+=String.fromCharCode(E));while(E&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Lt(t.check,i,f,s)),o-=f,s+=f,E)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=dh;case dh:if(t.flags&4096){if(o===0)break e;f=0;do E=i[s+f++],t.head&&E&&t.length<65536&&(t.head.comment+=String.fromCharCode(E));while(E&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Lt(t.check,i,f,s)),o-=f,s+=f,E)break e}else t.head&&(t.head.comment=null);t.mode=ph;case ph:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=pt;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ei;break;case mh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}n.adler=t.check=Ch(l),l=0,u=0,t.mode=qa;case qa:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,j1;n.adler=t.check=1,t.mode=ei;case ei:if(e===$1||e===ya)break e;case ul:if(t.last){l>>>=u&7,u-=u&7,t.mode=fl;break}for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=gh;break;case 1:if(iS(t),t.mode=wa,e===ya){l>>>=2,u-=2;break e}break;case 2:t.mode=vh;break;case 3:n.msg="invalid block type",t.mode=pt}l>>>=2,u-=2;break;case gh:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=pt;break}if(t.length=l&65535,l=0,u=0,t.mode=hl,e===ya)break e;case hl:t.mode=_h;case _h:if(f=t.length,f){if(f>o&&(f=o),f>c&&(f=c),f===0)break e;r.set(i.subarray(s,s+f),a),o-=f,s+=f,c-=f,a+=f,t.length-=f;break}t.mode=ei;break;case vh:for(;u<14;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=pt;break}t.have=0,t.mode=xh;case xh:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.lens[V[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[V[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,v={bits:t.lenbits},I=ys(q1,t.lens,0,19,t.lencode,0,t.work,v),t.lenbits=v.bits,I){n.msg="invalid code lengths set",t.mode=pt;break}t.have=0,t.mode=Sh;case Sh:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(x<16)l>>>=p,u-=p,t.lens[t.have++]=x;else{if(x===16){for(D=p+2;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=pt;break}E=t.lens[t.have-1],f=3+(l&3),l>>>=2,u-=2}else if(x===17){for(D=p+3;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,f=3+(l&7),l>>>=3,u-=3}else{for(D=p+7;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,f=11+(l&127),l>>>=7,u-=7}if(t.have+f>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=pt;break}for(;f--;)t.lens[t.have++]=E}}if(t.mode===pt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=pt;break}if(t.lenbits=9,v={bits:t.lenbits},I=ys($f,t.lens,0,t.nlen,t.lencode,0,t.work,v),t.lenbits=v.bits,I){n.msg="invalid literal/lengths set",t.mode=pt;break}if(t.distbits=6,t.distcode=t.distdyn,v={bits:t.distbits},I=ys(Yf,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,v),t.distbits=v.bits,I){n.msg="invalid distances set",t.mode=pt;break}if(t.mode=wa,e===ya)break e;case wa:t.mode=Ma;case Ma:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,z1(n,d),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===ei&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(w&&!(w&240)){for(S=p,C=w,A=x;m=t.lencode[A+((l&(1<<S+C)-1)>>S)],p=m>>>24,w=m>>>16&255,x=m&65535,!(S+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=S,u-=S,t.back+=S}if(l>>>=p,u-=p,t.back+=p,t.length=x,w===0){t.mode=Eh;break}if(w&32){t.back=-1,t.mode=ei;break}if(w&64){n.msg="invalid literal/length code",t.mode=pt;break}t.extra=w&15,t.mode=yh;case yh:if(t.extra){for(D=t.extra;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=wh;case wh:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,w=m>>>16&255,x=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(!(w&240)){for(S=p,C=w,A=x;m=t.distcode[A+((l&(1<<S+C)-1)>>S)],p=m>>>24,w=m>>>16&255,x=m&65535,!(S+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=S,u-=S,t.back+=S}if(l>>>=p,u-=p,t.back+=p,w&64){n.msg="invalid distance code",t.mode=pt;break}t.offset=x,t.extra=w&15,t.mode=Mh;case Mh:if(t.extra){for(D=t.extra;u<D;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=pt;break}t.mode=bh;case bh:if(c===0)break e;if(f=d-c,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=pt;break}f>t.wnext?(f-=t.wnext,g=t.wsize-f):g=t.wnext-f,f>t.length&&(f=t.length),_=t.window}else _=r,g=a-t.offset,f=t.length;f>c&&(f=c),c-=f,t.length-=f;do r[a++]=_[g++];while(--f);t.length===0&&(t.mode=Ma);break;case Eh:if(c===0)break e;r[a++]=t.length,c--,t.mode=Ma;break;case fl:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[s++]<<u,u+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Lt(t.check,r,d,a-d):Cs(t.check,r,d,a-d)),d=c,t.wrap&4&&(t.flags?l:Ch(l))!==t.check){n.msg="incorrect data check",t.mode=pt;break}l=0,u=0}t.mode=Th;case Th:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=pt;break}l=0,u=0}t.mode=Ah;case Ah:I=Y1;break e;case pt:I=jf;break e;case Kf:return Zf;case Jf:default:return Sn}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<pt&&(t.mode<fl||e!==sh))&&id(n,n.output,n.next_out,d-n.avail_out),h-=n.avail_in,d-=n.avail_out,n.total_in+=h,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Lt(t.check,r,d,n.next_out-d):Cs(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ei?128:0)+(t.mode===wa||t.mode===hl?256:0),(h===0&&d===0||e===sh)&&I===dr&&(I=Z1),I},sS=n=>{if(gr(n))return Sn;let e=n.state;return e.window&&(e.window=null),n.state=null,dr},aS=(n,e)=>{if(gr(n))return Sn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,dr):Sn},oS=(n,e)=>{const t=e.length;let i,r,s;return gr(n)||(i=n.state,i.wrap!==0&&i.mode!==qa)?Sn:i.mode===qa&&(r=1,r=Cs(r,e,t,0),r!==i.check)?jf:(s=id(n,e,t,t),s?(i.mode=Kf,Zf):(i.havedict=1,dr))};var lS=ed,cS=td,uS=Qf,hS=nS,fS=nd,dS=rS,pS=sS,mS=aS,gS=oS,_S="pako inflate (from Nodeca project)",On={inflateReset:lS,inflateReset2:cS,inflateResetKeep:uS,inflateInit:hS,inflateInit2:fS,inflate:dS,inflateEnd:pS,inflateGetHeader:mS,inflateSetDictionary:gS,inflateInfo:_S};function vS(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var xS=vS;const rd=Object.prototype.toString,{Z_NO_FLUSH:SS,Z_FINISH:Ph,Z_OK:Xr,Z_STREAM_END:ml,Z_NEED_DICT:gl,Z_STREAM_ERROR:yS,Z_DATA_ERROR:Lh,Z_MEM_ERROR:wS,Z_BUF_ERROR:Dh}=zs,MS={chunkSize:1024*64,windowBits:15,to:""};function Vs(n){this.options=fo.assign({},MS,n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Xf,this.strm.avail_out=0;let t=On.inflateInit2(this.strm,e.windowBits);if(t!==Xr)throw new Error(ur[t]);if(this.header=new xS,On.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Ps.string2buf(e.dictionary):rd.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=On.inflateSetDictionary(this.strm,e.dictionary),t!==Xr)))throw new Error(ur[t])}Vs.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Ph:SS,rd.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=On.inflate(t,a),s===gl&&r&&(s=On.inflateSetDictionary(t,r),s===Xr?s=On.inflate(t,a):s===Lh&&(s=gl));t.avail_in>0&&s===ml&&t.state.wrap&2&&t.state.flags!==0&&t.input[t.next_in]!==0;)On.inflateReset(t),s=On.inflate(t,a);switch(s){case yS:case Lh:case gl:case wS:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===ml||a>0))if(this.options.to==="string"){let c=Ps.utf8border(t.output,t.next_out),l=t.next_out-c,u=Ps.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out)),t.avail_out=0,t.next_out=0;if(!((s===Xr||s===Dh)&&o===0)){if(s===ml)return s=On.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0){if(a===Ph)return s=On.inflateEnd(this.strm),this.onEnd(s===Xr?Dh:s),this.ended=!0,!1;break}}}return!0};Vs.prototype.onData=function(n){this.chunks.push(n)};Vs.prototype.onEnd=function(n){n===Xr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=fo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function cc(n,e){const t=new Vs(e);if(t.push(n,!0),t.err)throw t.msg||ur[t.err];return t.result}function bS(n,e){return e=e||{},e.raw=!0,cc(n,e)}var ES=Vs,TS=cc,AS=bS,CS=cc,RS={Inflate:ES,inflate:TS,inflateRaw:AS,ungzip:CS};const{Deflate:PS,deflate:LS,deflateRaw:DS,gzip:IS}=k1,{Inflate:US,inflate:NS,inflateRaw:FS,ungzip:OS}=RS;var kS=PS,BS=LS,zS=DS,HS=IS,GS=US,VS=NS,WS=FS,XS=OS,qS=zs,_l={Deflate:kS,deflate:BS,deflateRaw:zS,gzip:HS,Inflate:GS,inflate:VS,inflateRaw:WS,ungzip:XS,constants:qS},pe;(function(n){n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.ByteArray=7]="ByteArray",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.IntArray=11]="IntArray",n[n.LongArray=12]="LongArray"})(pe||(pe={}));const ws=class ws{static register(e,t){const i=t.create().getId();if(i!==e)throw new Error(`Registered factory ${pe[i]} does not match type ${pe[e]}`);ws.FACTORIES.set(e,t)}isEnd(){return this.getId()===pe.End}isByte(){return this.getId()===pe.Byte}isShort(){return this.getId()===pe.Short}isInt(){return this.getId()===pe.Int}isLong(){return this.getId()===pe.Long}isFloat(){return this.getId()===pe.Float}isDouble(){return this.getId()===pe.Double}isByteArray(){return this.getId()===pe.ByteArray}isString(){return this.getId()===pe.String}isList(){return this.getId()===pe.List}isCompound(){return this.getId()===pe.Compound}isIntArray(){return this.getId()===pe.IntArray}isLongArray(){return this.getId()===pe.LongArray}isNumber(){return this.isByte()||this.isShort()||this.isInt()||this.isLong()||this.isFloat()||this.isDouble()}isArray(){return this.isByteArray()||this.isIntArray()||this.isLongArray()}isListOrArray(){return this.isList()||this.isArray()}getAsNumber(){return 0}getAsString(){return""}toJsonWithId(){return{type:this.getId(),value:this.toJson()}}static getFactory(e){const t=this.FACTORIES.get(e);if(!t)throw new Error(`Invalid tag id ${e}`);return t}static create(e){return this.getFactory(e).create()}static fromString(e){const t=typeof e=="string"?new Yt(e):e;return this.getFactory(pe.Compound).fromString(t)}static fromJson(e,t=pe.Compound){return this.getFactory(t).fromJson(e)}static fromJsonWithId(e){const t=ee.readObject(e)??{},i=ee.readInt(t.type)??0;return ws.fromJson(t.value??{},i)}static fromBytes(e,t=pe.Compound){return this.getFactory(t).fromBytes(e)}};R(ws,"FACTORIES",new Map);let at=ws;const ni=class ni extends at{constructor(t){super();R(this,"value");this.value=typeof t=="number"?t:t?1:0}getId(){return pe.Byte}equals(t){return t.isByte()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"b"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeByte(this.value)}static create(){return ni.ZERO}static fromJson(t){return new ni(ee.readInt(t)??0)}static fromBytes(t){const i=t.readByte();return new ni(i)}};R(ni,"ZERO",new ni(0)),R(ni,"ONE",new ni(1));let Ii=ni;at.register(pe.Byte,Ii);class Ws extends at{constructor(t){super();R(this,"items");this.items=t}getItems(){return this.items.slice(0)}getAsTuple(t,i){return[...Array(t)].map((r,s)=>i(this.items[s]))}get(t){if(t=Math.floor(t),!(t<0||t>=this.items.length))return this.items[t]}get length(){return this.items.length}map(t){return this.items.map(t)}filter(t){return this.items.filter(t)}forEach(t){this.items.forEach(t)}set(t,i){this.items[t]=i}add(t){this.items.push(t)}insert(t,i){this.items.splice(t,0,i)}delete(t){this.items.splice(t,1)}clear(){this.items=[]}}class Ui extends Ws{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new Ii(t):t))}getId(){return pe.ByteArray}equals(e){return e.isByteArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return pe.Byte}toString(){return"[B;"+this.items.map(t=>t.getAsNumber().toFixed()+"B").join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length),e.writeBytes(this.items.map(t=>t.getAsNumber()))}static create(){return new Ui([])}static fromJson(e){const t=ee.readArray(e,i=>ee.readNumber(i)??0)??[];return new Ui(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative ByteArray length ${t}`);const i=e.readBytes(t);return new Ui(i)}}at.register(pe.ByteArray,Ui);class ar extends at{constructor(t){super();R(this,"value");this.value=t}getId(){return pe.Float}equals(t){return t.isFloat()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toString()+"f"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeFloat(this.value)}static create(){return new ar(0)}static fromJson(t){return new ar(ee.readNumber(t)??0)}static fromBytes(t){const i=t.readFloat();return new ar(i)}}at.register(pe.Float,ar);class xn extends at{constructor(t){super();R(this,"value");this.value=t}getId(){return pe.Int}equals(t){return t.isInt()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeInt(this.value)}static create(){return new xn(0)}static fromJson(t){return new xn(ee.readInt(t)??0)}static fromBytes(t){const i=t.readInt();return new xn(i)}}at.register(pe.Int,xn);class Ni extends Ws{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new xn(t):t))}getId(){return pe.IntArray}equals(e){return e.isIntArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return pe.Int}get length(){return this.items.length}toString(){return"[I;"+this.items.map(t=>t.getAsNumber().toFixed()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items)e.writeInt(t.getAsNumber())}static create(){return new Ni}static fromJson(e){const t=ee.readArray(e,i=>ee.readNumber(i)??0)??[];return new Ni(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative IntArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push(e.readInt());return new Ni(i)}}at.register(pe.IntArray,Ni);class Zt extends Ws{constructor(t,i){super(t??[]);R(this,"type");this.type=this.items.length===0?pe.End:i??this.items[0].getId()}static make(t,i){return new Zt(i.map(r=>new t(r)))}getId(){return pe.List}equals(t){return t.isList()&&this.type===t.type&&this.length===t.length&&this.items.every((i,r)=>i.equals(t.items[r]))}getType(){return this.type}getNumber(t){const i=this.get(t);return i!=null&&i.isNumber()?i.getAsNumber():0}getString(t){const i=this.get(t);return i!=null&&i.isString()?i.getAsString():""}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&r.getType()===i?r:Zt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Et.create()}set(t,i){this.updateType(i),super.set(t,i)}add(t){this.updateType(t),super.add(t)}insert(t,i){this.updateType(i),super.insert(t,i)}updateType(t){if(t.getId()!==pe.End){if(this.type===pe.End)this.type=t.getId();else if(this.type!==t.getId())throw new Error(`Trying to add tag of type ${pe[t.getId()]} to list of ${pe[this.type]}`)}}clear(){super.clear(),this.type=pe.End}toString(){return"["+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(t="  ",i=0){if(this.length===0)return"[]";const r=t.repeat(i),s=t.repeat(i+1);return`[
`+this.map(a=>s+a.toPrettyString(t,i+1)).join(`,
`)+`
`+r+"]"}toSimplifiedJson(){return this.map(t=>t.toSimplifiedJson())}toJson(){return{type:this.type,items:this.items.map(t=>t.toJson())}}toBytes(t){this.items.length===0?this.type=pe.End:this.type=this.items[0].getId(),t.writeByte(this.type),t.writeInt(this.items.length);for(const i of this.items)i.toBytes(t)}static create(){return new Zt}static fromJson(t){const i=ee.readObject(t)??{},r=ee.readNumber(i.type)??pe.Compound,s=(ee.readArray(i.items)??[]).flatMap(a=>a!==void 0?[at.fromJson(a,r)]:[]);return new Zt(s,r)}static fromBytes(t){const i=t.readByte(),r=t.readInt();if(r<0)throw new Error(`Negative List length ${r}`);if(i===pe.End&&r>0)throw new Error(`Missing type on ListTag but length is ${r}`);const s=[];for(let a=0;a<r;a+=1)s.push(at.fromBytes(t,i));return new Zt(s,i)}}at.register(pe.List,Zt);const wt=class wt extends at{constructor(t){super();R(this,"value");this.value=wt.toPair(t)}static toPair(t){return Array.isArray(t)?t:wt.bigintToPair(t)}static bigintToPair(t){return wt.dataview.setBigInt64(0,t),[wt.dataview.getInt32(0),wt.dataview.getInt32(4)]}static pairToBigint(t){return wt.dataview.setInt32(0,Number(t[0])),wt.dataview.setInt32(4,Number(t[1])),wt.dataview.getBigInt64(0)}static pairToString(t){return wt.pairToBigint(t).toString()}static pairToNumber(t){return Number(wt.pairToBigint(t))}getId(){return pe.Long}equals(t){return t.isLong()&&this.value[0]===t.value[0]&&this.value[1]===t.value[1]}getAsNumber(){return wt.pairToNumber(this.value)}getAsPair(){return this.value}toBigInt(){return wt.pairToBigint(this.value)}toString(){return wt.pairToString(this.value)+"L"}toPrettyString(){return this.toString()}toSimplifiedJson(){return wt.pairToNumber(this.value)}toJson(){return this.value}toBytes(t){t.writeInt(this.value[0]),t.writeInt(this.value[1])}static create(){return new wt([0,0])}static fromJson(t){return new wt(Array.isArray(t)&&t.length===2?t.map(i=>typeof i=="number"?i:0):[0,0])}static fromBytes(t){const i=t.readInt(),r=t.readInt();return new wt([i,r])}};R(wt,"dataview",new DataView(new Uint8Array(8).buffer));let es=wt;at.register(pe.Long,es);class Fi extends Ws{constructor(e){super(Array.from(e??[],t=>typeof t=="bigint"||Array.isArray(t)?new es(t):t))}getId(){return pe.LongArray}equals(e){return e.isLongArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return pe.Long}get length(){return this.items.length}toString(){return"[L;"+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsPair())}toJson(){return this.items.map(e=>e.getAsPair())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items){const[i,r]=t.getAsPair();e.writeInt(i),e.writeInt(r)}}static create(){return new Fi}static fromJson(e){const t=ee.readArray(e,i=>ee.readPair(i,r=>ee.readNumber(r)??0)??[0,0])??[];return new Fi(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative LongArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push([e.readInt(),e.readInt()]);return new Fi(i)}}at.register(pe.LongArray,Fi);class or extends at{constructor(t){super();R(this,"value");this.value=t}getId(){return pe.Short}equals(t){return t.isShort()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"s"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeShort(this.value)}static create(){return new or(0)}static fromJson(t){return new or(typeof t=="number"?Math.floor(t):0)}static fromBytes(t){const i=t.readShort();return new or(i)}}at.register(pe.Short,or);const Qi=class Qi extends at{constructor(t){super();R(this,"value");this.value=t}getId(){return pe.String}equals(t){return t.isString()&&this.value===t.value}getAsString(){return this.value}toString(){return'"'+this.value.replace(/(\\|")/g,"\\$1")+'"'}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeString(this.value)}static create(){return Qi.EMPTY}static fromJson(t){return new Qi(typeof t=="string"?t:"")}static fromBytes(t){const i=t.readString();return new Qi(i)}};R(Qi,"EMPTY",new Qi(""));let Xn=Qi;at.register(pe.String,Xn);var $a;(function(n){const e=new RegExp("^[-+]?(?:[0-9]+[.]|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?$","i"),t=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?d$","i"),i=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?f$","i"),r=new RegExp("^[-+]?(?:0|[1-9][0-9]*)b$","i"),s=new RegExp("^[-+]?(?:0|[1-9][0-9]*)l$","i"),a=new RegExp("^[-+]?(?:0|[1-9][0-9]*)s$","i"),o=new RegExp("^[-+]?(?:0|[1-9][0-9]*)$","i");function c(f){if(f.skipWhitespace(),!f.canRead())throw f.createError("Expected value");const g=f.peek();if(g==="{")return l(f);if(g==="[")if(f.canRead(3)&&!Yt.isQuotedStringStart(f.peek(1))&&f.peek(2)===";"){f.expect("[",!0);const _=f.cursor,m=f.read();if(f.skip(),f.skipWhitespace(),f.canRead()){if(m==="B")return h(f,Ui,pe.ByteArray,pe.Byte);if(m==="L")return h(f,Fi,pe.LongArray,pe.Long);if(m==="I")return h(f,Ni,pe.IntArray,pe.Int);throw f.cursor=_,f.createError(`Invalid array type '${m}'`)}else throw f.createError("Expected value")}else return u(f);else{f.skipWhitespace();const _=f.cursor;if(Yt.isQuotedStringStart(f.peek()))return new Xn(f.readQuotedString());{const m=f.readUnquotedString();if(m.length===0)throw f.cursor=_,f.createError("Expected value");try{if(i.test(m)){const p=Number(m.substring(0,m.length-1));return new ar(p)}else if(r.test(m)){const p=Number(m.substring(0,m.length-1));return new Ii(Math.floor(p))}else if(s.test(m)){const p=BigInt(m.substring(0,m.length-1));return new es(p)}else if(a.test(m)){const p=Number(m.substring(0,m.length-1));return new or(Math.floor(p))}else if(o.test(m)){const p=Number(m);return new xn(Math.floor(p))}else if(t.test(m)){const p=Number(m.substring(0,m.length-1));return new Oi(p)}else if(e.test(m)){const p=Number(m);return new Oi(p)}else{if(m.toLowerCase()==="true")return Ii.ONE;if(m.toLowerCase()==="false")return Ii.ZERO}}catch{}return m.length===0?Xn.EMPTY:new Xn(m)}}}n.readTag=c;function l(f){f.expect("{",!0);const g=new Map;for(f.skipWhitespace();f.canRead()&&f.peek()!=="}";){const _=f.cursor;if(f.skipWhitespace(),!f.canRead())throw f.createError("Expected key");const m=f.readString();if(m.length===0)throw f.cursor=_,f.createError("Expected key");f.expect(":",!0);const p=c(f);if(g.set(m,p),!d(f))break;if(!f.canRead())throw f.createError("Expected key")}return f.expect("}",!0),new Et(g)}function u(f){if(f.expect("[",!0),f.skipWhitespace(),!f.canRead())throw f.createError("Expected value");const g=[];let _=pe.End;for(;f.peek()!=="]";){const m=f.cursor,p=c(f),w=p.getId();if(_===pe.End)_=w;else if(w!==_)throw f.cursor=m,f.createError(`Can't insert ${pe[w]} into list of ${pe[_]}`);if(g.push(p),!d(f))break;if(!f.canRead())throw f.createError("Expected value")}return f.expect("]",!0),new Zt(g,_)}function h(f,g,_,m){const p=[];for(;f.peek()!=="]";){const w=c(f);if(w.getId()!==m)throw f.createError(`Can't insert ${pe[w.getId()]} into ${pe[_]}`);if(p.push(w.isLong()?w.getAsPair():w.getAsNumber()),!d(f))break;if(!f.canRead())throw f.createError("Expected value")}return f.expect("]"),new g(p)}function d(f){return f.skipWhitespace(),f.canRead()&&f.peek()===","?(f.skip(),f.skipWhitespace(),!0):!1}})($a||($a={}));class Et extends at{constructor(t){super();R(this,"properties");this.properties=t??new Map}getId(){return pe.Compound}equals(t){return t.isCompound()&&this.size===t.size&&[...this.properties.entries()].every(([i,r])=>{const s=t.properties.get(i);return s!==void 0&&r.equals(s)})}has(t){return this.properties.has(t)}hasNumber(t){var i;return((i=this.get(t))==null?void 0:i.isNumber())??!1}hasString(t){var i;return((i=this.get(t))==null?void 0:i.isString())??!1}hasList(t,i,r){const s=this.get(t);return((s==null?void 0:s.isList())&&(i===void 0||s.getType()===i)&&(r===void 0||s.length===r))??!1}hasCompound(t){var i;return((i=this.get(t))==null?void 0:i.isCompound())??!1}get(t){return this.properties.get(t)}getString(t){var i;return((i=this.get(t))==null?void 0:i.getAsString())??""}getNumber(t){var i;return((i=this.get(t))==null?void 0:i.getAsNumber())??0}getBoolean(t){return this.getNumber(t)!==0}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&(i===void 0||r.getType()===i)?r:Zt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Et.create()}getByteArray(t){const i=this.get(t);return i!=null&&i.isByteArray()?i:Ui.create()}getIntArray(t){const i=this.get(t);return i!=null&&i.isIntArray()?i:Ni.create()}getLongArray(t){const i=this.get(t);return i!=null&&i.isLongArray()?i:Fi.create()}keys(){return this.properties.keys()}get size(){return this.properties.size}map(t){return Object.fromEntries([...this.properties.entries()].map(([i,r])=>t(i,r,this)))}forEach(t){[...this.properties.entries()].forEach(([i,r])=>t(i,r,this))}set(t,i){return this.properties.set(t,i),this}delete(t){return this.properties.delete(t)}clear(){return this.properties.clear(),this}toString(){const t=[];for(const[i,r]of this.properties.entries()){const s=i.split("").some(a=>!Yt.isAllowedInUnquotedString(a));t.push((s?JSON.stringify(i):i)+":"+r.toString())}return"{"+t.join(",")+"}"}toPrettyString(t="  ",i=0){if(this.size===0)return"{}";const r=t.repeat(i),s=t.repeat(i+1),a=[];for(const[o,c]of this.properties.entries()){const l=o.split("").some(u=>!Yt.isAllowedInUnquotedString(u));a.push((l?JSON.stringify(o):o)+": "+c.toPrettyString(t,i+1))}return`{
`+a.map(o=>s+o).join(`,
`)+`
`+r+"}"}toSimplifiedJson(){return this.map((t,i)=>[t,i.toSimplifiedJson()])}toJson(){return this.map((t,i)=>[t,{type:i.getId(),value:i.toJson()}])}toBytes(t){for(const[i,r]of this.properties.entries()){const s=r.getId();t.writeByte(s),t.writeString(i),r.toBytes(t)}t.writeByte(pe.End)}static create(){return new Et}static fromString(t){return $a.readTag(t)}static fromJson(t){const i=ee.readMap(t,r=>{const{type:s,value:a}=ee.readObject(r)??{},o=ee.readNumber(s);return at.fromJson(a??{},o)});return new Et(new Map(Object.entries(i)))}static fromBytes(t){const i=new Map;for(;;){const r=t.readByte();if(r===pe.End)break;const s=t.readString(),a=at.fromBytes(t,r);i.set(s,a)}return new Et(i)}}at.register(pe.Compound,Et);const Nn=class Nn{constructor(e,t,i,r,s){R(this,"name");R(this,"root");R(this,"compression");R(this,"littleEndian");R(this,"bedrockHeader");this.name=e,this.root=t,this.compression=i,this.littleEndian=r,this.bedrockHeader=s}writeNamedTag(e){e.writeByte(pe.Compound),e.writeString(this.name),this.root.toBytes(e)}write(){const e=this.littleEndian===!0||this.bedrockHeader!==void 0,t=new Mf({littleEndian:e,offset:this.bedrockHeader!==void 0?8:0});if(this.writeNamedTag(t),this.bedrockHeader!==void 0){const r=t.offset;t.offset=0,t.writeInt(this.bedrockHeader),t.writeInt(r-8),t.offset=r}const i=t.getData();return this.compression==="gzip"?_l.gzip(i):this.compression==="zlib"?_l.deflate(i):i}static readNamedTag(e){if(e.readByte()!==pe.Compound)throw new Error("Top tag should be a compound");return{name:e.readString(),root:Et.fromBytes(e)}}static create(e={}){const t=e.name??Nn.DEFAULT_NAME,i=Et.create(),r=e.compression??"none",s=e.bedrockHeader===!0?Nn.DEFAULT_BEDROCK_HEADER:typeof e.bedrockHeader=="number"?e.bedrockHeader:void 0,a=e.littleEndian??s!==void 0;return new Nn(t,i,r,a,s)}static read(e,t={}){const i=typeof t.bedrockHeader=="number"?t.bedrockHeader:t.bedrockHeader?$v(e):void 0,r=t.compression==="gzip"||!i&&t.compression===void 0&&Xv(e),s=t.compression==="zlib"||!i&&t.compression===void 0&&qv(e),a=s||r?_l.inflate(e):e,o=t.littleEndian||i!==void 0,c=r?"gzip":s?"zlib":"none",l=new wf(a,{littleEndian:o,offset:i!==void 0?8:0}),{name:u,root:h}=Nn.readNamedTag(l);return new Nn(t.name??u,h,c,o,i)}toJson(){return{name:this.name,root:this.root.toJson(),compression:this.compression,littleEndian:this.littleEndian,bedrockHeader:this.bedrockHeader??null}}static fromJson(e){const t=ee.readObject(e)??{},i=ee.readString(t.name)??"",r=Et.fromJson(t.root??{}),s=ee.readString(t.compression)??"none",a=ee.readBoolean(t.littleEndian)??!1,o=ee.readNumber(t.bedrockHeader);return new Nn(i,r,s,a,o)}};R(Nn,"DEFAULT_NAME",""),R(Nn,"DEFAULT_BEDROCK_HEADER",4);let qn=Nn;class ai{constructor(e,t,i,r,s){R(this,"x");R(this,"z");R(this,"compression");R(this,"timestamp");R(this,"raw");R(this,"file");R(this,"dirty");this.x=e,this.z=t,this.compression=i,this.timestamp=r,this.raw=s,this.dirty=!1}getCompression(){switch(this.compression){case 1:return"gzip";case 2:return"zlib";case 3:return"none";default:throw new Error(`Invalid compression mode ${this.compression}`)}}setCompression(e){switch(e){case"gzip":this.compression=1;break;case"zlib":this.compression=2;break;case"none":this.compression=3;break;default:throw new Error(`Invalid compression mode ${e}`)}}getFile(){return this.file===void 0&&(this.file=qn.read(this.raw,{compression:this.getCompression()})),this.file}getRoot(){return this.getFile().root}setRoot(e){this.file===void 0&&(this.file=qn.create({compression:this.getCompression()})),this.file.root=e,this.markDirty()}markDirty(){this.dirty=!0}getRaw(){if(this.file===void 0||this.dirty===!1)return this.raw;this.file.compression=this.getCompression();const e=this.file.write();return this.raw=e,this.dirty=!1,e}toJson(){return{x:this.x,z:this.z,compression:this.compression,timestamp:this.timestamp,size:this.raw.byteLength}}toRef(e){return new ai.Ref(this.x,this.z,this.compression,this.timestamp,this.raw.byteLength,e)}static create(e,t,i,r){const s=new ai(e,t,0,r??0,i.write());return s.setCompression(i.compression),s}static fromJson(e,t){const i=ee.readObject(e)??{},r=ee.readInt(i.x)??0,s=ee.readInt(i.z)??0,a=ee.readNumber(i.compression)??2,o=ee.readInt(i.timestamp)??0,c=ee.readInt(i.size)??0;return new ai.Ref(r,s,a,o,c,t)}}(function(n){class e{constructor(i,r,s,a,o,c){R(this,"x");R(this,"z");R(this,"compression");R(this,"timestamp");R(this,"size");R(this,"resolver");R(this,"file");this.x=i,this.z=r,this.compression=s,this.timestamp=a,this.size=o,this.resolver=c}getFile(){if(this.file instanceof qn)return this.file}getRoot(){if(this.file instanceof qn)return this.file.root}async getFileAsync(){return this.file?this.file:(this.file=(async()=>{const i=await this.resolver(this.x,this.z);return this.file=i,i})(),this.file)}async getRootAsync(){return(await this.getFileAsync()).root}isResolved(){return this.file instanceof qn}}n.Ref=e})(ai||(ai={}));class sd{constructor(e){R(this,"chunks");this.chunks=Array(32*32).fill(void 0);for(const t of e){const i=zi.getIndex(t.x,t.z);this.chunks[i]=t}}getChunkPositions(){return this.chunks.flatMap(e=>e?[[e.x,e.z]]:[])}getChunk(e){if(!(e<0||e>=32*32))return this.chunks[e]}findChunk(e,t){return this.getChunk(zi.getIndex(e,t))}getFirstChunk(){return this.chunks.filter(e=>e!==void 0)[0]}filter(e){return this.chunks.filter(t=>t!==void 0&&e(t))}map(e){return this.chunks.flatMap(t=>t!==void 0?[e(t)]:[])}}class zi extends sd{constructor(e){super(e)}write(){let e=0;for(const s of this.chunks)s!==void 0&&(e+=Math.ceil(s.getRaw().length/4096));const t=new Uint8Array(8192+e*4096),i=new DataView(t.buffer);let r=2;for(const s of this.chunks){if(s===void 0)continue;const a=s.getRaw(),o=4*((s.x&31)+(s.z&31)*32),c=Math.ceil(a.length/4096);i.setInt8(o,r>>16),i.setInt16(o+1,r&65535),i.setInt8(o+3,c),i.setInt32(o+4096,s.timestamp);const l=r*4096;i.setInt32(l,a.length+1),i.setInt8(l+4,s.compression),t.set(a,l+5),r+=c}return t}static read(e){const t=[];for(let i=0;i<32;i+=1)for(let r=0;r<32;r+=1){const s=4*((i&31)+(r&31)*32);if(e[s+3]===0)continue;const o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],c=(e[s+4096]<<24)+(e[s+4097]<<16)+(e[s+4098]<<8)+e[s+4099],l=o*4096,u=(e[l]<<24)+(e[l+1]<<16)+(e[l+2]<<8)+e[l+3],h=e[l+4],d=e.slice(l+5,l+4+u);t.push(new ai(i,r,h,c,d))}return new zi(t)}static getIndex(e,t){return(e&31)+(t&31)*32}toJson(){return{chunks:this.map(e=>e.toJson())}}static fromJson(e,t){const i=ee.readObject(e)??{},s=(ee.readArray(i.chunks)??[]).flatMap(a=>a!==void 0?[ai.fromJson(a,t)]:[]);return new zi.Ref(s)}}(function(n){class e extends sd{}n.Ref=e})(zi||(zi={}));class Oi extends at{constructor(t){super();R(this,"value");this.value=t}getId(){return pe.Double}equals(t){return t.isDouble()&&this.value===t.value}getAsNumber(){return this.value}toString(){return Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeDouble(this.value)}static create(){return new Oi(0)}static fromJson(t){return new Oi(ee.readNumber(t)??0)}static fromBytes(t){const i=t.readDouble();return new Oi(i)}}at.register(pe.Double,Oi);const er=class er extends at{constructor(){super()}getId(){return pe.End}equals(e){return e.isEnd()}toString(){return"END"}toPrettyString(){return this.toString()}toSimplifiedJson(){return null}toJson(){return null}toBytes(){}static create(){return er.INSTANCE}static fromJson(){return er.INSTANCE}static fromBytes(){return er.INSTANCE}};R(er,"INSTANCE",new er);let Ya=er;at.register(pe.End,Ya);var tt;(function(n){n.UP="up",n.DOWN="down",n.NORTH="north",n.EAST="east",n.SOUTH="south",n.WEST="west"})(tt||(tt={}));const $S={[tt.UP]:[0,1,0],[tt.DOWN]:[0,-1,0],[tt.NORTH]:[0,0,-1],[tt.EAST]:[1,0,0],[tt.SOUTH]:[0,0,1],[tt.WEST]:[-1,0,0]};(function(n){n.ALL=[n.UP,n.DOWN,n.NORTH,n.EAST,n.SOUTH,n.WEST];function e(t){return $S[t]}n.normal=e})(tt||(tt={}));var Nt;(function(n){function e(h,d,f){return[h,d,f]}n.create=e,n.ZERO=n.create(0,0,0);function t(h,d,f,g){return[h[0]+d,h[1]+f,h[2]+g]}n.offset=t;function i(h,d){return[h[0]-d[0],h[1]-d[1],h[2]-d[2]]}n.subtract=i;function r(h,d){return[h[0]+d[0],h[1]+d[1],h[2]+d[2]]}n.add=r;function s(h,d){return n.offset(h,...tt.normal(d))}n.towards=s;function a(h,d){return h===d?!0:h[0]===d[0]&&h[1]===d[1]&&h[2]===d[2]}n.equals=a;function o(h){return h[0]*h[0]+h[1]*h[1]+h[2]*h[2]}n.magnitude=o;function c(h){return new Zt(h.map(d=>new xn(d)))}n.toNbt=c;function l(h){return h.getAsTuple(3,d=>d!=null&&d.isInt()?d.getAsNumber():0)}n.fromNbt=l;function u(h){const d=ee.readArray(h,f=>ee.readInt(f)??0)??[0,0,0];return e(d[0],d[1],d[2])}n.fromJson=u})(Nt||(Nt={}));const Tn=class Tn{constructor(e,t){R(this,"namespace");R(this,"path");this.namespace=e,this.path=t}is(e){return this.equals(Tn.parse(e))}equals(e){return this===e?!0:e instanceof Tn?this.namespace===e.namespace&&this.path===e.path:!1}toString(){return this.namespace+Tn.SEPARATOR+this.path}withPrefix(e){return new Tn(this.namespace,e+this.path)}static create(e){return new Tn(this.DEFAULT_NAMESPACE,e)}static parse(e){const t=e.indexOf(this.SEPARATOR);if(t>=0){const i=t>=1?e.substring(0,t):this.DEFAULT_NAMESPACE,r=e.substring(t+1);return new Tn(i,r)}return new Tn(this.DEFAULT_NAMESPACE,e)}};R(Tn,"DEFAULT_NAMESPACE","minecraft"),R(Tn,"SEPARATOR",":");let J=Tn;var _t;let Ai=(_t=class{constructor(e,t={}){R(this,"properties");R(this,"name");this.properties=t,this.name=typeof e=="string"?J.parse(e):e}getName(){return this.name}getProperties(){return this.properties}getProperty(e){return this.properties[e]}isFluid(){return this.is(_t.WATER)||this.is(_t.LAVA)}isWaterlogged(){return this.is(_t.WATER)||this.is(_t.LAVA)||this.is("bubble_column")||this.is("kelp")||this.is("kelp_plant")||this.is("seagrass")||this.is("tall_seagrass")||this.properties.waterlogged==="true"}equals(e){if(!this.name.equals(e.name))return!1;const t=Object.keys(this.properties);return t.length!==Object.keys(e.properties).length?!1:t.every(i=>e.properties[i]===this.properties[i])}is(e){return typeof e=="string"?this.name.equals(J.parse(e)):e instanceof J?this.name.equals(e):this.name.equals(e.name)}toString(){return Object.keys(this.properties).length===0?this.name.toString():`${this.name.toString()}[${Object.entries(this.properties).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>e+"="+t).join(",")}]`}toNbt(){const e=new Et().set("Name",new Xn(this.name.toString())),t=Object.entries(this.properties).sort(([i],[r])=>i.localeCompare(r));return t.length>0&&e.set("Properties",new Et(new Map(t.map(([i,r])=>[i,new Xn(r)])))),e}static parse(e){const t=e.indexOf("[");if(t===-1)return new _t(e);{const i=e.substring(0,t),r=e.substring(t+1,e.length-1).split(","),s=Object.fromEntries(r.map(a=>a.split("=")));return new _t(i,s)}}static fromNbt(e){const t=J.parse(e.getString("Name")),i=e.getCompound("Properties").map((r,s)=>[r,s.getAsString()]);return new _t(t,i)}static fromJson(e){const t=ee.readObject(e)??{},i=J.parse(ee.readString(t.Name)??_t.STONE.name.toString()),r=ee.readMap(t.Properties,s=>ee.readString(s)??"");return new _t(i,r)}},R(_t,"AIR",new _t(J.create("air"))),R(_t,"STONE",new _t(J.create("stone"))),R(_t,"WATER",new _t(J.create("water"),{level:"0"})),R(_t,"LAVA",new _t(J.create("lava"),{level:"0"})),_t);const ao=class ao{constructor(e,t){R(this,"size");R(this,"defaultValue");R(this,"storage");R(this,"palette");this.size=e,this.defaultValue=t,this.storage=Array(e).fill(0),this.palette=[t]}index(e,t,i){if(!this.isLocalCoordinate(e)||!this.isLocalCoordinate(t)||!this.isLocalCoordinate(i))throw new Error(`Coordinates ${e},${t},${i} are outside paletted container bounds 0..15`);return(e<<8)+(t<<4)+i}isLocalCoordinate(e){return Number.isInteger(e)&&e>=0&&e<ao.WIDTH}get(e,t,i){const r=this.storage[this.index(e,t,i)];return this.palette[r]}set(e,t,i,r){let s=this.palette.findIndex(a=>a.equals(r));s===-1&&(s=this.palette.length,this.palette.push(r)),this.storage[this.index(e,t,i)]=s}};R(ao,"WIDTH",16);let ja=ao;const yi=class yi{constructor(e){R(this,"minY");R(this,"states");this.minY=e,this.states=new ja(yi.SIZE,Ai.AIR)}get minBlockY(){return this.minY<<4}getBlockState(e,t,i){return this.states.get(e,t,i)}setBlockState(e,t,i,r){this.states.set(e,t,i,r)}};R(yi,"WIDTH",16),R(yi,"SIZE",yi.WIDTH*yi.WIDTH*yi.WIDTH);let Hl=yi;var Gl;(function(n){function e(u,h){return[u,h]}n.create=e;function t(u){return[u[0]>>4,u[2]>>4]}n.fromBlockPos=t;function i(u){return[Number(u)&4294967295,Number(u>>BigInt(32))]}n.fromLong=i;function r(u){return s(u[0],u[1])}n.toLong=r;function s(u,h){return BigInt(u&4294967295)|BigInt(h&4294967295)<<BigInt(32)}n.asLong=s;function a(u){return u[0]<<4}n.minBlockX=a;function o(u){return u[1]<<4}n.minBlockZ=o;function c(u){return(u[0]<<4)+15}n.maxBlockX=c;function l(u){return(u[1]<<4)+15}n.maxBlockZ=l})(Gl||(Gl={}));const ad=new Map([["minecraft:speed",3402751],["minecraft:slowness",9154528],["minecraft:haste",14270531],["minecraft:mining_fatigue",4866583],["minecraft:strength",16762624],["minecraft:instant_health",16262179],["minecraft:instant_damage",11101546],["minecraft:jump_boost",16646020],["minecraft:nausea",5578058],["minecraft:regeneration",13458603],["minecraft:resistance",9520880],["minecraft:fire_resistance",16750848],["minecraft:water_breathing",10017472],["minecraft:invisibility",16185078],["minecraft:blindness",2039587],["minecraft:night_vision",12779366],["minecraft:hunger",5797459],["minecraft:weakness",4738376],["minecraft:poison",8889187],["minecraft:wither",7561558],["minecraft:health_boost",16284963],["minecraft:absorption",2445989],["minecraft:saturation",16262179],["minecraft:glowing",9740385],["minecraft:levitation",13565951],["minecraft:luck",5882118],["minecraft:unluck",12624973],["minecraft:slow_falling",15978425],["minecraft:conduit_power",1950417],["minecraft:dolphins_grace",8954814],["minecraft:bad_omen",745784],["minecraft:hero_of_the_village",4521796],["minecraft:darkness",2696993],["minecraft:trial_omen",1484454],["minecraft:raid_omen",14565464],["minecraft:wind_charged",12438015],["minecraft:weaving",7891290],["minecraft:oozing",10092451],["minecraft:infested",9214860]]);var Za;(function(n){function e(t){return{effect:J.parse(t.getString("id")),duration:t.getNumber("duration"),amplifier:t.getNumber("amplifier")}}n.fromNbt=e})(Za||(Za={}));const od=new Map([["minecraft:empty",[]],["minecraft:water",[]],["minecraft:mundane",[]],["minecraft:thick",[]],["minecraft:awkward",[]],["minecraft:night_vision",[{effect:J.create("night_vision"),duration:3600,amplifier:0}]],["minecraft:long_night_vision",[{effect:J.create("night_vision"),duration:9600,amplifier:0}]],["minecraft:invisibility",[{effect:J.create("invisibility"),duration:3600,amplifier:0}]],["minecraft:long_invisibility",[{effect:J.create("invisibility"),duration:9600,amplifier:0}]],["minecraft:leaping",[{effect:J.create("jump_boost"),duration:3600,amplifier:0}]],["minecraft:long_leaping",[{effect:J.create("jump_boost"),duration:9600,amplifier:0}]],["minecraft:strong_leaping",[{effect:J.create("jump_boost"),duration:1800,amplifier:1}]],["minecraft:fire_resistance",[{effect:J.create("fire_resistance"),duration:3600,amplifier:0}]],["minecraft:long_fire_resistance",[{effect:J.create("fire_resistance"),duration:9600,amplifier:0}]],["minecraft:swiftness",[{effect:J.create("speed"),duration:3600,amplifier:0}]],["minecraft:long_swiftness",[{effect:J.create("speed"),duration:9600,amplifier:0}]],["minecraft:strong_swiftness",[{effect:J.create("speed"),duration:1800,amplifier:1}]],["minecraft:slowness",[{effect:J.create("slowness"),duration:1800,amplifier:0}]],["minecraft:long_slowness",[{effect:J.create("slowness"),duration:4800,amplifier:0}]],["minecraft:strong_slowness",[{effect:J.create("slowness"),duration:400,amplifier:3}]],["minecraft:turtle_master",[{effect:J.create("slowness"),duration:400,amplifier:3},{effect:J.create("resistance"),duration:400,amplifier:2}]],["minecraft:long_turtle_master",[{effect:J.create("slowness"),duration:800,amplifier:3},{effect:J.create("resistance"),duration:800,amplifier:2}]],["minecraft:strong_turtle_master",[{effect:J.create("slowness"),duration:400,amplifier:5},{effect:J.create("resistance"),duration:400,amplifier:3}]],["minecraft:water_breathing",[{effect:J.create("water_breathing"),duration:3600,amplifier:0}]],["minecraft:long_water_breathing",[{effect:J.create("water_breathing"),duration:9600,amplifier:0}]],["minecraft:healing",[{effect:J.create("instant_health"),duration:1,amplifier:0}]],["minecraft:strong_healing",[{effect:J.create("instant_health"),duration:1,amplifier:1}]],["minecraft:harming",[{effect:J.create("instant_damage"),duration:1,amplifier:0}]],["minecraft:strong_harming",[{effect:J.create("instant_damage"),duration:1,amplifier:1}]],["minecraft:poison",[{effect:J.create("poison"),duration:900,amplifier:0}]],["minecraft:long_poison",[{effect:J.create("poison"),duration:1800,amplifier:0}]],["minecraft:strong_poison",[{effect:J.create("poison"),duration:432,amplifier:1}]],["minecraft:regeneration",[{effect:J.create("regeneration"),duration:900,amplifier:0}]],["minecraft:long_regeneration",[{effect:J.create("regeneration"),duration:1800,amplifier:0}]],["minecraft:strong_regeneration",[{effect:J.create("regeneration"),duration:450,amplifier:1}]],["minecraft:strength",[{effect:J.create("strength"),duration:3600,amplifier:0}]],["minecraft:long_strength",[{effect:J.create("strength"),duration:9600,amplifier:0}]],["minecraft:strong_strength",[{effect:J.create("strength"),duration:1800,amplifier:1}]],["minecraft:weakness",[{effect:J.create("weakness"),duration:1800,amplifier:0}]],["minecraft:long_weakness",[{effect:J.create("weakness"),duration:4800,amplifier:0}]],["minecraft:luck",[{effect:J.create("luck"),duration:6e3,amplifier:0}]],["minecraft:slow_falling",[{effect:J.create("slow_falling"),duration:1800,amplifier:0}]],["minecraft:long_slow_falling",[{effect:J.create("slow_falling"),duration:4800,amplifier:0}]],["minecraft:wind_charged",[{effect:J.create("wind_charged"),duration:3600,amplifier:0}]],["minecraft:weaving",[{effect:J.create("weaving"),duration:3600,amplifier:0}]],["minecraft:oozing",[{effect:J.create("oozing"),duration:3600,amplifier:0}]],["minecraft:infested",[{effect:J.create("infested"),duration:3600,amplifier:0}]]]);var Ls;(function(n){function e(s){const a={};return s.isString()?a.potion=J.parse(s.getAsString()):s.isCompound()&&(s.hasString("potion")&&(a.potion=J.parse(s.getString("potion"))),s.hasNumber("custom_color")&&(a.customColor=s.getNumber("custom_color")),s.hasList("custom_effects")&&(a.customEffects=s.getList("custom_effects",pe.Compound).map(Za.fromNbt))),a}n.fromNbt=e;function t(s){if(s.customColor)return Xe.intToRgb(s.customColor);const a=i(s);return r(a)}n.getColor=t;function i(s){const a=[];return s.potion&&a.push(...od.get(s.potion.toString())??[]),s.customEffects&&a.push(...s.customEffects),a}n.getAllEffects=i;function r(s){let[a,o,c]=[0,0,0],l=0;for(const u of s){const h=ad.get(u.effect.toString());if(h===void 0)continue;const d=Xe.intToRgb(h),f=u.amplifier+1;a+=f*d[0],o+=f*d[1],c+=f*d[2],l+=f}return l===0?Xe.intToRgb(-13083194):(a=a/l,o=o/l,c=c/l,[a,o,c])}})(Ls||(Ls={}));var Ka;(function(n){function e(r,s){return a=>typeof a=="string"?i(r,J.parse(a)):t(s(a))}n.parser=e;function t(r,s){return{value:()=>r,key:()=>s}}n.direct=t;function i(r,s,a=!0){return a?{value:()=>r.getOrThrow(s),key:()=>s}:{value:()=>r.get(s),key:()=>s}}n.reference=i})(Ka||(Ka={}));class ri{constructor(e,t,i=new Map){R(this,"id");R(this,"count");R(this,"components");this.id=e,this.count=t,this.components=i}getComponent(e,t){var r;if(typeof e=="string"&&(e=J.parse(e)),this.components.has("!"+e.toString()))return;const i=this.components.get(e.toString());if(i)return i;if(t)return(r=t.getItemComponents(this.id))==null?void 0:r.get(e.toString())}hasComponent(e,t){var i;return typeof e=="string"&&(e=J.parse(e)),this.components.has("!"+e.toString())?!1:this.components.has(e.toString())?!0:t?(i=t.getItemComponents(this.id))==null?void 0:i.has(e.toString()):!1}clone(){const e=new Map(this.components);return new ri(this.id,this.count,e)}is(e){return typeof e=="string"?this.id.equals(J.parse(e)):e instanceof J?this.id.equals(e):this.id.equals(e.id)}equals(e){return this===e?!0:e instanceof ri?this.count===e.count&&this.isSameItemSameComponents(e):!1}isSameItemSameComponents(e){if(!this.id.equals(e.id)||this.components.size!==e.components.size)return!1;for(const[t,i]of this.components){const r=e.components.get(t);if(i.toString()!==(r==null?void 0:r.toString()))return!1}return!0}toString(){let e=this.id.toString();return this.components.size>0&&(e+=`[${[...this.components.entries()].map(([t,i])=>t.startsWith("!")?t:`${t}=${i.toString()}`).join(",")}]`),this.count>1&&(e+=` ${this.count}`),e}static fromString(e){const t=new Yt(e);t.skipWhitespace();const i=t.cursor;for(;t.canRead()&&t.peek()!=="["&&!Yt.isWhitespace(t.peek());)t.skip();const r=J.parse(t.getRead(i)),s=new Map;t.skipWhitespace(),t.canRead()&&t.peek()==="["&&ri.readComponents(t,s),t.skipWhitespace();const a=t.canRead()?t.readInt():1;if(t.skipWhitespace(),t.canRead())throw t.createError("Unexpected trailing data");return new ri(r,a,s)}static readComponents(e,t){if(e.expect("["),e.skipWhitespace(),e.canRead()&&e.peek()==="]"){e.skip();return}do{if(e.peek()==="!"){e.skip(),e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="]"&&e.peek()!==",";)e.skip();t.set("!"+J.parse(e.getRead(i).trim()).toString(),new Et)}else{e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="=";)e.skip();const r=J.parse(e.getRead(i).trim()).toString();if(!e.canRead())break;e.skip(),e.skipWhitespace();const s=$a.readTag(e);t.set(r,s)}if(e.skipWhitespace(),!e.canRead())break;if(e.peek()==="]"){e.skip();return}if(e.peek()!==",")throw new Error("Expected , or ]");e.skip()}while(e.canRead());throw new Error("Missing closing ]")}toNbt(){const e=new Et().set("id",new Xn(this.id.toString()));return this.count>1&&e.set("count",new xn(this.count)),this.components.size>0&&e.set("components",new Et(this.components)),e}static fromNbt(e){const t=J.parse(e.getString("id")),i=e.hasNumber("count")?e.getNumber("count"):1,r=new Map(Object.entries(e.getCompound("components").map((s,a)=>s.startsWith("!")?["!"+J.parse(s).toString(),new Et]:[J.parse(s).toString(),a])));return new ri(t,i,r)}}const wi=class wi{constructor(e,t){R(this,"key");R(this,"parser");R(this,"storage",new Map);R(this,"builtin",new Map);R(this,"tags");this.key=e,this.parser=t}static createAndRegister(e,t){const i=new wi(J.create(e),t);return wi.REGISTRY.register(i.key,i),i}register(e,t,i){return this.storage.set(e.toString(),t),i&&this.builtin.set(e.toString(),t),Ka.reference(this,e)}delete(e){const t=this.storage.delete(e.toString());return this.builtin.delete(e.toString()),t}keys(){return[...this.storage.keys()].map(e=>J.parse(e))}has(e){return this.storage.has(e.toString())}get(e){var t=this.storage.get(e.toString());return t instanceof Function&&(t=t(),this.storage.set(e.toString(),t)),t}getOrThrow(e){const t=this.get(e);if(t===void 0)throw new Error(`Missing key in ${this.key.toString()}: ${e.toString()}`);return t}parse(e){if(!this.parser)throw new Error(`No parser exists for ${this.key.toString()}`);return this.parser(e)}clear(){this.storage.clear();for(const[e,t]of this.builtin.entries())this.storage.set(e,t);return this.tags&&this.tags.clear(),this}assign(e){if(!this.key.equals(e.key))throw new Error(`Cannot assign registry of type ${e.key.toString()} to registry of type ${this.key.toString()}`);for(const t of e.keys())this.storage.set(t.toString(),e.getOrThrow(t));return this}cloneEmpty(){return new wi(this.key,this.parser)}forEach(e){for(const[t,i]of this.storage.entries())e(J.parse(t),i instanceof Function?i():i,this)}map(e){return[...this.storage.entries()].map(([t,i])=>e(J.parse(t),i instanceof Function?i():i,this))}getTagRegistry(){return this.tags===void 0&&(this.tags=new wi(new J(this.key.namespace,`tags/${this.key.path}`))),this.tags}};R(wi,"REGISTRY",new wi(J.create("root")));let Ja=wi;var qr;(function(n){n.NONE="none",n.CLOCKWISE_90="clockwise_90",n.CLOCKWISE_180="180",n.COUNTERCLOCKWISE_90="counterclockwise_90"})(qr||(qr={}));const YS=[{key:"north",offset:[0,0,-1]},{key:"east",offset:[1,0,0]},{key:"south",offset:[0,0,1]},{key:"west",offset:[-1,0,0]}],ld=new Set(["minecraft:air","minecraft:cave_air","minecraft:void_air","minecraft:water","minecraft:lava"]),jS=[/_banner$/,/_button$/,/_carpet$/,/_coral$/,/_coral_fan$/,/_door$/,/_fence$/,/_fence_gate$/,/_flower$/,/_glass_pane$/,/_hanging_sign$/,/_leaves$/,/_pressure_plate$/,/_rail$/,/_sapling$/,/_sign$/,/_slab$/,/_stairs$/,/_torch$/,/_trapdoor$/,/_wall$/,/_wall_banner$/,/_wall_hanging_sign$/,/_wall_sign$/,/_wall_torch$/,/_wool_carpet$/,/^attached_/,/^potted_/,/amethyst_cluster$/,/azalea$/,/bamboo$/,/bell$/,/big_dripleaf$/,/brewing_stand$/,/cake$/,/chain$/,/chest$/,/cocoa$/,/comparator$/,/conduit$/,/dead_bush$/,/decorated_pot$/,/end_rod$/,/fern$/,/grass$/,/grindstone$/,/kelp$/,/ladder$/,/lantern$/,/lever$/,/lightning_rod$/,/mangrove_roots$/,/mushroom$/,/pane$/,/repeater$/,/scaffolding$/,/seagrass$/,/skull$/,/soul_lantern$/,/sugar_cane$/,/turtle_egg$/,/twisting_vines$/,/vine$/,/weeping_vines$/];function uc(n){return n.includes(":")?n.split(":")[1]:n}function Vl(n){const e=uc(n);return e==="iron_bars"||e.endsWith("glass_pane")}function Wl(n){const e=uc(n);return e==="nether_brick_fence"||e.endsWith("_fence")&&!e.endsWith("_fence_gate")}function ZS(n){return Vl(n)||Wl(n)}function Ih(n){if(!n||ld.has(n))return!1;const e=uc(n);return!jS.some(t=>t.test(e))}function KS(n,e){return!e||ld.has(e)?!1:Vl(n)?Vl(e)||Ih(e):Wl(n)?Wl(e)||Ih(e):!1}var Gn;let JS=(Gn=class{constructor(e,t=[],i=[]){R(this,"size");R(this,"palette");R(this,"blocks");R(this,"blocksMap",[]);R(this,"xStride");R(this,"yStride");R(this,"placedBlocksCache",null);R(this,"placedBlocksMapCache",null);R(this,"paletteIndex",new Map);this.size=e,this.palette=t,this.blocks=i,this.xStride=e[1]*e[2],this.yStride=e[2],this.palette.forEach((r,s)=>{this.paletteIndex.set(r.toString(),s)}),i.forEach(r=>{if(!this.isInside(r.pos))throw new Error(`Found block at ${r.pos} which is outside the structure bounds ${this.size}`);this.blocksMap[this.getIndex(r.pos)]=r})}getSize(){return this.size}addBlock(e,t,i,r){if(!this.isInside(e))throw new Error(`Cannot add block at ${e} outside the structure bounds ${this.size}`);const s=new Ai(t,i),a=s.toString();let o=this.paletteIndex.get(a);o===void 0&&(o=this.palette.length,this.palette.push(s),this.paletteIndex.set(a,o));const c=this.getIndex(e),l=this.blocksMap[c];if(l)l.state=o,l.nbt=r;else{const u={pos:Nt.create(e[0],e[1],e[2]),state:o,nbt:r};this.blocks.push(u),this.blocksMap[c]=u}return this.clearPlacedCaches(),this}getBlocks(){return this.ensurePlacedCaches(),this.placedBlocksCache??[]}getBlock(e){var i;return this.isInside(e)?(this.ensurePlacedCaches(),((i=this.placedBlocksMapCache)==null?void 0:i[this.getIndex(e)])??null):null}clone(){return new Gn(Nt.create(this.size[0],this.size[1],this.size[2]),this.palette.map(e=>new Ai(e.getName(),{...e.getProperties()})),this.blocks.map(e=>({pos:Nt.create(e.pos[0],e.pos[1],e.pos[2]),state:e.state,nbt:e.nbt})))}updateBlockStates(){const e=[];for(const t of this.getBlocks()){const i=t.state.getName().toString();if(!ZS(i))continue;const r={...t.state.getProperties()};for(const s of YS){const a=this.getBlock(Nt.add(t.pos,s.offset)),o=(a==null?void 0:a.state.getName().toString())??"";r[s.key]=KS(i,o)?"true":"false"}r.waterlogged===void 0&&(r.waterlogged="false"),!new Ai(i,r).equals(t.state)&&e.push({pos:t.pos,name:i,properties:r,nbt:t.nbt})}for(const t of e)this.addBlock(t.pos,t.name,t.properties,t.nbt);return{updatedBlocks:e.length}}toPlacedBlock(e){const t=this.palette[e.state];if(!t)throw new Error(`Block at ${e.pos.join(" ")} in structure references invalid palette index ${e.state}`);return{pos:e.pos,state:t,nbt:e.nbt}}isInside(e){return e[0]>=0&&e[0]<this.size[0]&&e[1]>=0&&e[1]<this.size[1]&&e[2]>=0&&e[2]<this.size[2]}getIndex(e){return e[0]*this.xStride+e[1]*this.yStride+e[2]}ensurePlacedCaches(){if(!(this.placedBlocksCache&&this.placedBlocksMapCache)){this.placedBlocksCache=[],this.placedBlocksMapCache=[];for(const e of this.blocks){const t=this.toPlacedBlock(e);this.placedBlocksCache.push(t),this.placedBlocksMapCache[this.getIndex(e.pos)]=t}}}clearPlacedCaches(){this.placedBlocksCache=null,this.placedBlocksMapCache=null}toNbt(e={}){const t=e.updateBlockStates?this.clone():this;e.updateBlockStates&&t.updateBlockStates();const i=[],r=new Map,s=t.blocks.map(o=>{const c=t.toPlacedBlock(o),l=c.state.toString();let u=r.get(l);u===void 0&&(u=i.length,i.push(c.state),r.set(l,u));const h=new Et().set("pos",Nt.toNbt(c.pos)).set("state",new xn(u));return c.nbt&&c.nbt.size>0&&h.set("nbt",c.nbt),h}),a=new Et().set("size",Nt.toNbt(this.size)).set("palette",new Zt(i.map(o=>o.toNbt()))).set("blocks",new Zt(s)).set("entities",new Zt);return e.dataVersion!==void 0&&a.set("DataVersion",new xn(e.dataVersion)),a}writeNbt(e={}){return new qn(e.name??"",this.toNbt(e),e.compression??"gzip",!1,void 0).write()}static fromNbt(e){const t=Nt.fromNbt(e.getList("size")),i=e.getList("palette",pe.Compound).map(s=>Ai.fromNbt(s)),r=e.getList("blocks",pe.Compound).map(s=>{const a=Nt.fromNbt(s.getList("pos")),o=s.getNumber("state"),c=s.getCompound("nbt");return{pos:a,state:o,nbt:c.size>0?c:void 0}});return new Gn(t,i,r)}static transform(e,t,i){switch(t){case qr.COUNTERCLOCKWISE_90:return Nt.create(i[0]-i[2]+e[2],e[1],i[0]+i[2]-e[0]);case qr.CLOCKWISE_90:return Nt.create(i[0]+i[2]-e[2],e[1],i[2]-i[0]+e[0]);case qr.CLOCKWISE_180:return Nt.create(i[0]+i[0]-e[0],e[1],i[2]+i[2]-e[2]);default:return e}}},R(Gn,"REGISTRY",Ja.createAndRegister("structures")),R(Gn,"EMPTY",new Gn(Nt.ZERO)),Gn);class Dt{constructor(e,t,i){R(this,"x");R(this,"y");R(this,"z");this.x=e,this.y=t,this.z=i}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}distance(e){return this.sub(e).length()}distanceSquared(e){return this.sub(e).lengthSquared()}abs(){return new Dt(Math.abs(this.x),Math.abs(this.y),Math.abs(this.z))}add(e){return new Dt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Dt(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new Dt(this.x*e.x,this.y*e.y,this.z*e.z)}div(e){return new Dt(this.x/e.x,this.y/e.y,this.z/e.z)}scale(e){return new Dt(this.x*e,this.y*e,this.z*e)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,r=this.x*e.y-this.y*e.x;return new Dt(t,i,r)}normalize(){if(this.x==0&&this.y==0&&this.z==0)return this;const e=1/this.length();return new Dt(this.x*e,this.y*e,this.z*e)}components(){return[this.x,this.y,this.z]}toString(){return`[${this.x} ${this.y} ${this.z}]`}}function Ei(n,e,t){return Math.max(e,Math.min(t,n))}function Xl(n){return(n&n-1)===0}function hc(n){return n-=1,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>18,n|=n>>32,n+1}var Da=1e-6,pr=typeof Float32Array<"u"?Float32Array:Array,QS=Math.PI/180;function ql(n){return n*QS}function nt(){var n=new pr(16);return pr!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function ey(n){var e=new pr(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function ty(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function ny(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function iy(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=t*o-i*a,x=t*c-r*a,S=t*l-s*a,C=i*c-r*o,A=i*l-s*o,E=r*l-s*c,I=u*_-h*g,M=u*m-d*g,v=u*p-f*g,D=h*m-d*_,V=h*p-f*_,U=d*p-f*m,z=w*U-x*V+S*D+C*v-A*M+E*I;return z?(z=1/z,n[0]=(o*U-c*V+l*D)*z,n[1]=(r*V-i*U-s*D)*z,n[2]=(_*E-m*A+p*C)*z,n[3]=(d*A-h*E-f*C)*z,n[4]=(c*v-a*U-l*M)*z,n[5]=(t*U-r*v+s*M)*z,n[6]=(m*S-g*E-p*x)*z,n[7]=(u*E-d*S+f*x)*z,n[8]=(a*V-o*v+l*I)*z,n[9]=(i*v-t*V-s*I)*z,n[10]=(g*A-_*S+p*w)*z,n[11]=(h*S-u*A-f*w)*z,n[12]=(o*M-a*D-c*I)*z,n[13]=(t*D-i*M+r*I)*z,n[14]=(_*x-g*C-m*w)*z,n[15]=(u*C-h*x+d*w)*z,n):null}function ze(n,e,t){var i=t[0],r=t[1],s=t[2],a,o,c,l,u,h,d,f,g,_,m,p;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],c=e[2],l=e[3],u=e[4],h=e[5],d=e[6],f=e[7],g=e[8],_=e[9],m=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=c,n[3]=l,n[4]=u,n[5]=h,n[6]=d,n[7]=f,n[8]=g,n[9]=_,n[10]=m,n[11]=p,n[12]=a*i+u*r+g*s+e[12],n[13]=o*i+h*r+_*s+e[13],n[14]=c*i+d*r+m*s+e[14],n[15]=l*i+f*r+p*s+e[15]),n}function tn(n,e,t){var i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function ry(n,e,t,i){var r=i[0],s=i[1],a=i[2],o=Math.sqrt(r*r+s*s+a*a),c,l,u,h,d,f,g,_,m,p,w,x,S,C,A,E,I,M,v,D,V,U,z,L;return o<Da?null:(o=1/o,r*=o,s*=o,a*=o,c=Math.sin(t),l=Math.cos(t),u=1-l,h=e[0],d=e[1],f=e[2],g=e[3],_=e[4],m=e[5],p=e[6],w=e[7],x=e[8],S=e[9],C=e[10],A=e[11],E=r*r*u+l,I=s*r*u+a*c,M=a*r*u-s*c,v=r*s*u-a*c,D=s*s*u+l,V=a*s*u+r*c,U=r*a*u+s*c,z=s*a*u-r*c,L=a*a*u+l,n[0]=h*E+_*I+x*M,n[1]=d*E+m*I+S*M,n[2]=f*E+p*I+C*M,n[3]=g*E+w*I+A*M,n[4]=h*v+_*D+x*V,n[5]=d*v+m*D+S*V,n[6]=f*v+p*D+C*V,n[7]=g*v+w*D+A*V,n[8]=h*U+_*z+x*L,n[9]=d*U+m*z+S*L,n[10]=f*U+p*z+C*L,n[11]=g*U+w*z+A*L,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function Ds(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+l*i,n[5]=a*r+u*i,n[6]=o*r+h*i,n[7]=c*r+d*i,n[8]=l*r-s*i,n[9]=u*r-a*i,n[10]=h*r-o*i,n[11]=d*r-c*i,n}function Ft(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[8],u=e[9],h=e[10],d=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-l*i,n[1]=a*r-u*i,n[2]=o*r-h*i,n[3]=c*r-d*i,n[8]=s*i+l*r,n[9]=a*i+u*r,n[10]=o*i+h*r,n[11]=c*i+d*r,n}function cd(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[4],u=e[5],h=e[6],d=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+l*i,n[1]=a*r+u*i,n[2]=o*r+h*i,n[3]=c*r+d*i,n[4]=l*r-s*i,n[5]=u*r-a*i,n[6]=h*r-o*i,n[7]=d*r-c*i,n}function sy(n,e,t,i,r){var s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0){var a=1/(i-r);n[10]=(r+i)*a,n[14]=2*r*i*a}else n[10]=-1,n[14]=-2*i;return n}var ay=sy;function oy(n,e,t,i,r,s,a){var o=1/(e-t),c=1/(i-r),l=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*l,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*c,n[14]=(a+s)*l,n[15]=1,n}var ly=oy;function cy(n,e,t,i){var r,s,a,o,c,l,u,h,d,f,g=e[0],_=e[1],m=e[2],p=i[0],w=i[1],x=i[2],S=t[0],C=t[1],A=t[2];return Math.abs(g-S)<Da&&Math.abs(_-C)<Da&&Math.abs(m-A)<Da?ny(n):(u=g-S,h=_-C,d=m-A,f=1/Math.sqrt(u*u+h*h+d*d),u*=f,h*=f,d*=f,r=w*d-x*h,s=x*u-p*d,a=p*h-w*u,f=Math.sqrt(r*r+s*s+a*a),f?(f=1/f,r*=f,s*=f,a*=f):(r=0,s=0,a=0),o=h*a-d*s,c=d*r-u*a,l=u*s-h*r,f=Math.sqrt(o*o+c*c+l*l),f?(f=1/f,o*=f,c*=f,l*=f):(o=0,c=0,l=0),n[0]=r,n[1]=o,n[2]=u,n[3]=0,n[4]=s,n[5]=c,n[6]=h,n[7]=0,n[8]=a,n[9]=l,n[10]=d,n[11]=0,n[12]=-(r*g+s*_+a*m),n[13]=-(o*g+c*_+l*m),n[14]=-(u*g+h*_+d*m),n[15]=1,n)}function Qa(){var n=new pr(3);return pr!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function vi(n){var e=new pr(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function uy(n){var e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function En(n,e,t){var i=new pr(3);return i[0]=n,i[1]=e,i[2]=t,i}function ba(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function hy(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function fy(n,e,t,i){return n[0]=e[0]+t[0]*i,n[1]=e[1]+t[1]*i,n[2]=e[2]+t[2]*i,n}function dy(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function ud(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function py(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}(function(){var n=Qa();return function(e,t,i,r,s,a){var o,c;for(t||(t=3),i||(i=0),r?c=Math.min(r*t+i,e.length):c=e.length,o=i;o<c;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();const bn=[124/255,189/255,107/255],my=Xe.intToRgb(6396257),gy=Xe.intToRgb(8431445),kr=Xe.intToRgb(4764952),Ea=Xe.intToRgb(4159204),_y=Xe.intToRgb(2129968),vy=n=>{const e=n/15,t=e*.6+(e>0?.4:.3),i=Ei(e*e*.7-.5,0,1),r=Ei(e*e*.6-.7,0,1);return[t,i,r]},Ta=n=>[n/8,1-n/32,n/64],lr={large_fern:()=>bn,tall_grass:()=>bn,grass_block:()=>bn,fern:()=>bn,grass:()=>bn,short_grass:()=>bn,potted_fern:()=>bn,pink_petals:()=>bn,wildflowers:()=>bn,bush:()=>bn,spruce_leaves:()=>my,birch_leaves:()=>gy,oak_leaves:()=>kr,jungle_leaves:()=>kr,acacia_leaves:()=>kr,dark_oak_leaves:()=>kr,vine:()=>kr,mangrove_leaves:()=>kr,water:()=>Ea,bubble_column:()=>Ea,cauldron:()=>Ea,water_cauldron:()=>Ea,redstone_wire:n=>vy(parseInt(n.power??"0")),sugar_cane:()=>bn,attached_melon_stem:()=>Ta(7),attached_pumpkin_stem:()=>Ta(7),melon_stem:n=>Ta(parseInt(n.age??"0")),pumpkin_stem:n=>Ta(parseInt(n.age??"0")),lily_pad:()=>_y};var gt;(function(n){function e(i,r,s){let{up:a,down:o,north:c,east:l,south:u,west:h}=i;switch(s){case 90:[c,l,u,h]=[l,u,h,c];break;case 180:[c,l,u,h]=[u,h,c,l];break;case 270:[c,l,u,h]=[h,c,l,u]}switch(r){case 90:[a,c,o,u]=[c,o,u,a];break;case 180:[a,c,o,u]=[o,u,a,c];break;case 270:[a,c,o,u]=[u,a,c,o]}return{up:a,down:o,north:c,east:l,south:u,west:h}}n.rotate=e;function t(){return Object.create(null)}n.none=t})(gt||(gt={}));const mn=class mn{constructor(e,t,i,r,s,a,o=0){R(this,"pos");R(this,"color");R(this,"texture");R(this,"textureLimit");R(this,"normal");R(this,"blockPos");R(this,"emissive");this.pos=e,this.color=t,this.texture=i,this.textureLimit=r,this.normal=s,this.blockPos=a,this.emissive=o}transform(e){return mn.VEC[0]=this.pos.x,mn.VEC[1]=this.pos.y,mn.VEC[2]=this.pos.z,py(mn.VEC,mn.VEC,e),this.pos=new Dt(mn.VEC[0],mn.VEC[1],mn.VEC[2]),this}static fromPos(e){return new mn(e,[0,0,0],[0,0],[0,0,0,0],void 0,void 0,0)}};R(mn,"VEC",Qa());let Dn=mn;class Is{constructor(e,t){R(this,"v1");R(this,"v2");this.v1=e,this.v2=t}vertices(){return[this.v1,this.v2]}forEach(e){return e(this.v1),e(this.v2),this}transform(e){return this.forEach(t=>t.transform(e)),this}setColor(e){return this.forEach(t=>t.color=e),this}toString(){return`Line(${this.v1.pos.toString()}, ${this.v2.pos.toString()})`}static fromPoints(e,t){return new Is(Dn.fromPos(e),Dn.fromPos(t))}}class st{constructor(e=[],t=[]){R(this,"quads");R(this,"lines");R(this,"posBuffer");R(this,"colorBuffer");R(this,"textureBuffer");R(this,"textureLimitBuffer");R(this,"normalBuffer");R(this,"blockPosBuffer");R(this,"indexBuffer");R(this,"indexType");R(this,"linePosBuffer");R(this,"lineColorBuffer");this.quads=e,this.lines=t}clear(){return this.quads=[],this.lines=[],this}isEmpty(){return this.quads.length===0&&this.lines.length===0}quadVertices(){return this.quads.length*4}quadIndices(){return this.quads.length*6}lineVertices(){return this.lines.length*2}merge(e){for(const t of e.quads)this.quads.push(t);for(const t of e.lines)this.lines.push(t);return this}addLine(e,t,i,r,s,a,o){const c=new Is(Dn.fromPos(new Dt(e,t,i)),Dn.fromPos(new Dt(r,s,a))).setColor(o);return this.lines.push(c),this}addLineCube(e,t,i,r,s,a,o){return this.addLine(e,t,i,e,t,a,o),this.addLine(r,t,i,r,t,a,o),this.addLine(e,t,i,r,t,i,o),this.addLine(e,t,a,r,t,a,o),this.addLine(e,t,i,e,s,i,o),this.addLine(r,t,i,r,s,i,o),this.addLine(e,t,a,e,s,a,o),this.addLine(r,t,a,r,s,a,o),this.addLine(e,s,i,e,s,a,o),this.addLine(r,s,i,r,s,a,o),this.addLine(e,s,i,r,s,i,o),this.addLine(e,s,a,r,s,a,o),this}transform(e){for(const t of this.quads)t.transform(e);return this}computeNormals(){for(const e of this.quads){const t=e.normal();e.forEach(i=>i.normal=t)}}rebuild(e,t){const i=t.usage??e.DYNAMIC_DRAW,r=(a,o,c)=>{if(a||(a=e.createBuffer()??void 0),!a)throw new Error("Cannot create new buffer");return e.bindBuffer(o,a),e.bufferData(o,c,i),a},s=(a,o,c,l)=>{if(a.length===0){o&&e.deleteBuffer(o);return}const u=a[0]instanceof Is?2:4,h=new Float32Array(a.length*u*c);let d=0;for(const f of a)for(const g of f.vertices()){const _=l(g);if(!_)throw new Error("Missing vertex component");for(let m=0;m<c;m+=1)h[d++]=_[m]??0}return r(o,e.ARRAY_BUFFER,h)};if(t.pos&&(this.posBuffer=s(this.quads,this.posBuffer,3,a=>a.pos.components()),this.linePosBuffer=s(this.lines,this.linePosBuffer,3,a=>a.pos.components())),t.color&&(this.colorBuffer=s(this.quads,this.colorBuffer,3,a=>a.color),this.lineColorBuffer=s(this.lines,this.lineColorBuffer,3,a=>a.color)),t.texture&&(this.textureBuffer=s(this.quads,this.textureBuffer,2,a=>a.texture),this.textureLimitBuffer=s(this.quads,this.textureLimitBuffer,4,a=>a.textureLimit)),t.normal&&(this.normalBuffer=s(this.quads,this.normalBuffer,3,a=>{var o;return(o=a.normal)==null?void 0:o.components()})),t.blockPos&&(this.blockPosBuffer=s(this.quads,this.blockPosBuffer,3,a=>{var o;return(o=a.blockPos)==null?void 0:o.components()})),this.quads.length===0)this.indexBuffer&&e.deleteBuffer(this.indexBuffer),this.indexBuffer=void 0,this.indexType=void 0;else{const a=this.quadVertices()>65536;if(a&&!(typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext)&&!e.getExtension("OES_element_index_uint"))throw new Error("Mesh requires 32-bit indices, but OES_element_index_uint is not available");this.indexType=a?e.UNSIGNED_INT:e.UNSIGNED_SHORT;const o=a?new Uint32Array(this.quadIndices()):new Uint16Array(this.quadIndices());let c=0;for(let l=0;l<this.quads.length;l+=1){const u=l*4;o[c++]=u,o[c++]=u+1,o[c++]=u+2,o[c++]=u,o[c++]=u+2,o[c++]=u+3}this.indexBuffer=r(this.indexBuffer,e.ELEMENT_ARRAY_BUFFER,o)}return this}}function Uh(n){const e=ee.readObject(n)??{},i={model:ee.readString(e.model)??""},r=ee.readNumber(e.x);r!==void 0&&(i.x=r);const s=ee.readNumber(e.y);s!==void 0&&(i.y=s);const a=ee.readBoolean(e.uvlock);a!==void 0&&(i.uvlock=a);const o=ee.readNumber(e.weight);return o!==void 0&&(i.weight=o),i}function hd(n){const e=ee.readArray(n,Uh);return e||Uh(n)}function fd(n){const e=ee.readObject(n);if(!e)return;const t=ee.readArray(e.OR,fd);if(t){const i=t.flatMap(r=>r?[r]:[]);if(i.length>0)return{OR:i}}return Object.fromEntries(Object.entries(e).map(([i,r])=>[i,ee.readString(r)??""]))}function xy(n){const e=ee.readObject(n)??{},t=hd(e.apply),i=fd(e.when);return i?{when:i,apply:t}:{apply:t}}class mo{constructor(e,t){R(this,"variants");R(this,"multipart");this.variants=e,this.multipart=t}getModelVariants(e){if(this.variants){const t=Object.keys(this.variants).filter(r=>this.matchesVariant(r,e));if(t.length===0)return[];const i=this.variants[t[0]];return[Array.isArray(i)?i[0]:i]}else if(this.multipart)return this.multipart.filter(i=>i.when?this.matchesCase(i.when,e):!0).map(i=>Array.isArray(i.apply)?i.apply[0]:i.apply);return[]}getMesh(e,t,i,r,s){var l;const a=this.getModelVariants(t),o=new st;for(const u of a){const h=gt.rotate(s,u.x??0,u.y??0),d=r.getBlockModel(J.parse(u.model));if(!d)throw new Error(`Cannot find block model ${u.model}`);const f=e?(l=lr[e.path])==null?void 0:l.call(lr,t):void 0,g=d.getMesh(i,h,f);if(u.x||u.y){const _=nt();ze(_,_,[8,8,8]),Ft(_,_,-ql(u.y??0)),Ds(_,_,-ql(u.x??0)),ze(_,_,[-8,-8,-8]),g.transform(_)}o.merge(g)}const c=nt();return tn(c,c,[.0625,.0625,.0625]),o.transform(c)}matchesVariant(e,t){return e.split(",").every(i=>{const[r,s]=i.split("=");return t[r]===s})}matchesCase(e,t){if(Array.isArray(e.OR))return e.OR.some(r=>this.matchesCase(r,t));const i=e;return Object.keys(i).every(r=>i[r].split("|").includes(t[r]))}static fromJson(e){const t=ee.readObject(e)??{},i=ee.readObject(t.variants),r=i?Object.fromEntries(Object.entries(i).map(([a,o])=>[a,hd(o)])):void 0,s=ee.readArray(t.multipart,xy);return new mo(r,s)}}class Xs{constructor(e,t,i,r){R(this,"v1");R(this,"v2");R(this,"v3");R(this,"v4");this.v1=e,this.v2=t,this.v3=i,this.v4=r}vertices(){return[this.v1,this.v2,this.v3,this.v4]}forEach(e){return e(this.v1),e(this.v2),e(this.v3),e(this.v4),this}transform(e){return this.forEach(t=>t.transform(e)),this}normal(){const e=this.v2.pos.sub(this.v1.pos),t=this.v3.pos.sub(this.v1.pos);return e.cross(t).normalize()}reverse(){return[this.v1,this.v2,this.v3,this.v4]=[this.v4,this.v3,this.v2,this.v1],this}setColor(e){return this.forEach(t=>t.color=e),this}setTexture(e,t){return this.v1.textureLimit=t,this.v2.textureLimit=t,this.v3.textureLimit=t,this.v4.textureLimit=t,this.v1.texture=[e[0],e[1]],this.v2.texture=[e[2],e[3]],this.v3.texture=[e[4],e[5]],this.v4.texture=[e[6],e[7]],this}toString(){return`Quad(${this.v1.pos.toString()}, ${this.v2.pos.toString()}, ${this.v3.pos.toString()}, ${this.v4.pos.toString()})`}static fromPoints(e,t,i,r){return new Xs(Dn.fromPos(e),Dn.fromPos(t),Dn.fromPos(i),Dn.fromPos(r))}}const Sy={0:[0,3,2,3,2,1,0,1],90:[2,3,2,1,0,1,0,3],180:[2,1,0,1,0,3,2,3],270:[0,1,0,3,2,3,2,1]},yy={x:[1,0,0],y:[0,1,0],z:[0,0,1]},Br=1.41421356237,wy={x:[1,Br,Br],y:[Br,1,Br],z:[Br,Br,1]};var Cn;let Mt=(Cn=class{constructor(e,t,i,r,s){R(this,"parent");R(this,"textures");R(this,"elements");R(this,"display");R(this,"guiLight");R(this,"generationMarker",!1);this.parent=e,this.textures=t,this.elements=i,this.display=r,this.guiLight=s}getDisplayTransform(e){var r;const t=(r=this.display)==null?void 0:r[e],i=nt();return ze(i,i,[8,8,8]),t!=null&&t.translation&&ze(i,i,t.translation),t!=null&&t.rotation&&(Ds(i,i,t.rotation[0]*Math.PI/180),Ft(i,i,t.rotation[1]*Math.PI/180),cd(i,i,-t.rotation[2]*Math.PI/180)),t!=null&&t.scale&&tn(i,i,t.scale),ze(i,i,[-8,-8,-8]),i}getMesh(e,t,i){const r=new st,s=a=>i===void 0?[1,1,1]:a===void 0||a<0?[1,1,1]:typeof i=="function"?i(a):i;for(const a of this.elements??[])r.merge(this.getElementMesh(a,e,t,s));return r}getElementMesh(e,t,i,r){var g,_,m,p,w,x,S,C,A,E,I,M;const s=new st,[a,o,c]=e.from,[l,u,h]=e.to,d=(v,D,V)=>{var be,Ie,Y,ae;const U=Xs.fromPoints(new Dt(V[0],V[1],V[2]),new Dt(V[3],V[4],V[5]),new Dt(V[6],V[7],V[8]),new Dt(V[9],V[10],V[11])),z=r(v.tintindex);U.setColor(z);const[L,H,K,X]=t.getTextureUV(this.getTexture(v.texture)),Q=(K-L)/16,re=(X-H)/16;D[0]=(((be=v.uv)==null?void 0:be[0])??D[0])*Q,D[1]=(((Ie=v.uv)==null?void 0:Ie[1])??D[1])*re,D[2]=(((Y=v.uv)==null?void 0:Y[2])??D[2])*Q,D[3]=(((ae=v.uv)==null?void 0:ae[3])??D[3])*re;const fe=Sy[v.rotation??0];U.setTexture([L+D[fe[0]],H+D[fe[1]],L+D[fe[2]],H+D[fe[3]],L+D[fe[4]],H+D[fe[5]],L+D[fe[6]],H+D[fe[7]]],[L+Math.min(D[0],D[2]),H+Math.min(D[1],D[3]),L+Math.max(D[0],D[2]),H+Math.max(D[1],D[3])]),s.quads.push(U)};(_=(g=e.faces)==null?void 0:g.up)!=null&&_.texture&&(!e.faces.up.cullface||!i[e.faces.up.cullface])&&d(e.faces.up,[a,16-h,l,16-c],[a,u,h,l,u,h,l,u,c,a,u,c]),(p=(m=e.faces)==null?void 0:m.down)!=null&&p.texture&&(!e.faces.down.cullface||!i[e.faces.down.cullface])&&d(e.faces.down,[16-h,16-l,16-c,16-a],[a,o,c,l,o,c,l,o,h,a,o,h]),(x=(w=e.faces)==null?void 0:w.south)!=null&&x.texture&&(!e.faces.south.cullface||!i[e.faces.south.cullface])&&d(e.faces.south,[a,16-u,l,16-o],[a,o,h,l,o,h,l,u,h,a,u,h]),(C=(S=e.faces)==null?void 0:S.north)!=null&&C.texture&&(!e.faces.north.cullface||!i[e.faces.north.cullface])&&d(e.faces.north,[16-l,16-u,16-a,16-o],[l,o,c,a,o,c,a,u,c,l,u,c]),(E=(A=e.faces)==null?void 0:A.east)!=null&&E.texture&&(!e.faces.east.cullface||!i[e.faces.east.cullface])&&d(e.faces.east,[16-h,16-u,16-c,16-o],[l,o,h,l,o,c,l,u,c,l,u,h]),(M=(I=e.faces)==null?void 0:I.west)!=null&&M.texture&&(!e.faces.west.cullface||!i[e.faces.west.cullface])&&d(e.faces.west,[c,16-u,h,16-o],[a,o,c,a,o,h,a,u,h,a,u,c]);const f=nt();if(e.rotation){const v=En(...e.rotation.origin);ze(f,f,v),ry(f,f,ql(e.rotation.angle),yy[e.rotation.axis]),e.rotation.rescale&&tn(f,f,wy[e.rotation.axis]),dy(v,v),ze(f,f,v)}return s.transform(f)}getTexture(e){var t;for(;e.startsWith("#");)e=((t=this.textures)==null?void 0:t[e.slice(1)])??"";return J.parse(e)}flatten(e){var o;if(!this.parent)return;if(this.parent.equals(Cn.BUILTIN_GENERATED)){this.generationMarker=!0;return}const t=this.getParent(e);if(!t){console.warn(`parent ${this.parent} does not exist!`),this.parent=void 0;return}t.flatten(e),this.elements||(this.elements=t.elements),this.textures||(this.textures={});const i=this.textures,r=t.textures;r&&Object.keys(r).forEach(c=>{i[c]||(i[c]=r[c])}),this.display||(this.display={});const s=this.display,a=t.display;if(a&&Object.keys(a).forEach(c=>{const l=c;if(!s[l])s[l]=a[l];else{const u=a[l];u&&Object.keys(u).forEach(h=>{const d=h,f=s[l];f&&!f[d]&&u[d]&&(f[d]=u[d])})}}),this.guiLight||(this.guiLight=t.guiLight),t.generationMarker&&(this.generationMarker=!0),this.generationMarker&&(((o=this.elements)==null?void 0:o.length)??0)===0)for(let c=0;c<Cn.GENERATED_LAYERS.length;c+=1){const l=Cn.GENERATED_LAYERS[c];if(!Object.hasOwn(this.textures,l))break;this.elements||(this.elements=[]),this.elements.push({from:[0,0,0],to:[16,16,0],faces:{south:{texture:`#${l}`,tintindex:c}}})}this.parent=void 0}getParent(e){return this.parent?e.getBlockModel(this.parent):null}static fromJson(e){var u;const t=ee.readObject(e)??{},i=ee.readString(t.parent),r=i?J.parse(i):void 0,s=ee.readObject(t.textures),a=s?ee.readMap(s,h=>ee.readString(h)??""):void 0,o=(u=ee.readArray(t.elements,h=>ee.readObject(h)??{}))==null?void 0:u.map(h=>h),c=ee.readObject(t.display),l=ee.readString(t.gui_light);return new Cn(r,a,o,c,l)}},R(Cn,"BUILTIN_GENERATED",J.create("builtin/generated")),R(Cn,"GENERATED_LAYERS",["layer0","layer1","layer2","layer3","layer4"]),Cn);class $r{constructor(e,t){R(this,"img");R(this,"idMap");R(this,"part");if(this.img=e,this.idMap=t,!Xl(e.width)||!Xl(e.height))throw new Error(`Expected texture atlas dimensions to be powers of two, got ${e.width}x${e.height}.`);this.part=16/e.width}getTextureAtlas(){return this.img}getTextureUV(e){return this.idMap[e.toString()]??[0,0,this.part,this.part]}getPixelSize(){return this.part/16}static async fromBlobs(e){const t=Math.sqrt(Object.keys(e).length+1),i=hc(t),r=i*16,s=1/i,a=document.createElement("canvas");a.width=r,a.height=r;const o=a.getContext("2d");if(!o)throw new Error("Failed to get 2D rendering context");this.drawInvalidTexture(o);const c={};let l=1;return await Promise.all(Object.keys(e).map(async u=>{const h=l%i,d=Math.floor(l/i);l+=1,c[u]=[s*h,s*d,s*h+s,s*d+s];const f=await createImageBitmap(e[u]);o.drawImage(f,0,0,16,16,16*h,16*d,16,16)})),new $r(o.getImageData(0,0,r,r),c)}static empty(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");if(!t)throw new Error("Failed to get 2D rendering context");return $r.drawInvalidTexture(t),new $r(t.getImageData(0,0,16,16),{})}static drawInvalidTexture(e){e.fillStyle="black",e.fillRect(0,0,16,16),e.fillStyle="magenta",e.fillRect(0,0,8,8),e.fillRect(8,8,8,8)}}function Aa(n){if(!n)return"";if(typeof n=="string")return n;const e=n;return typeof e.toString=="function"?e.toString():String(n)}function dd(){const n=new URL("../../assets/default-pack/",import.meta.url).toString();return fc(n)}function fc(n){const e=(typeof n=="string"?n:n.toString()).replace(/\/?$/,"/");return{baseUrl:e,assetsJson:new URL("assets.json",e).toString(),atlasPng:new URL("atlas.png",e).toString(),blockFlags:{opaqueTxt:new URL("block-flags/opaque.txt",e).toString(),transparentTxt:new URL("block-flags/transparent.txt",e).toString(),nonSelfCullingTxt:new URL("block-flags/non_self_culling.txt",e).toString(),emissiveJson:new URL("block-flags/emissive.json",e).toString()}}}function vl(n){const e=new Set;return(n.match(/minecraft:[a-z0-9_]+/g)??[]).forEach(i=>e.add(i)),n.split(/\s+/).map(i=>i.trim()).filter(Boolean).forEach(i=>{const r=i.startsWith("minecraft:")?i:`minecraft:${i}`;e.add(r)}),e}async function My(n){const e=typeof createImageBitmap=="function"?await createImageBitmap(n):null,t=(e==null?void 0:e.width)??0,i=(e==null?void 0:e.height)??0;if(!e||t<=0||i<=0)throw new Error("[lodestone] Unable to decode atlas.png: createImageBitmap unavailable or failed.");const r=hc(Math.max(t,i)),a=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(r,r):typeof document<"u"?Object.assign(document.createElement("canvas"),{width:r,height:r}):(()=>{throw new Error("[lodestone] No canvas implementation available to decode atlas.png")})()).getContext("2d");if(!a)throw new Error("[lodestone] Unable to create 2D canvas context to decode atlas.png");return a.drawImage(e,0,0),{imageData:a.getImageData(0,0,r,r),atlasSize:r}}function pd(n){const{assets:e,atlas:t,flags:i}=n,r={};Object.keys(e.blockstates??{}).forEach(f=>{r[`minecraft:${f}`]=mo.fromJson(e.blockstates[f])});const s={};Object.keys(e.models??{}).forEach(f=>{s[`minecraft:${f}`]=Mt.fromJson(e.models[f])});const a={getBlockModel(f){return s[Aa(f)]??null}};Object.values(s).forEach(f=>f.flatten(a));const o={};Object.keys(e.textures??{}).forEach(f=>{const[g,_,m,p]=e.textures[f],w=m!==p&&f.startsWith("block/")?m:p;o[`minecraft:${f}`]=[g/t.atlasSize,_/t.atlasSize,(g+m)/t.atlasSize,(_+w)/t.atlasSize]});const c=new $r(t.imageData,o),l=(i==null?void 0:i.opaque)??new Set,u=(i==null?void 0:i.transparent)??new Set,h=(i==null?void 0:i.nonSelfCulling)??new Set,d=(i==null?void 0:i.emissive)??{};return{getBlockDefinition(f){return r[Aa(f)]??null},getBlockModel(f){return s[Aa(f)]??null},getTextureUV(f){return c.getTextureUV(f)},getTextureAtlas(){return c.getTextureAtlas()},getPixelSize(){return c.getPixelSize()},getBlockFlags(f){const g=Aa(f),_=u.has(g),m=l.has(g),p=!_&&(m||l.size===0),w=h.has(g),x=d[g];return{opaque:p,semi_transparent:_,self_culling:!w,emissive:!!x,emissiveIntensity:(x==null?void 0:x.intensity)??1,emissiveConditional:x==null?void 0:x.conditional}},getBlockProperties(){return null},getDefaultBlockProperties(){return null}}}async function by(n){const e=(n==null?void 0:n.fetch)??globalThis.fetch;if(!e)throw new Error("[lodestone] fetch is not available; pass options.fetch");const t=n!=null&&n.baseUrl?fc(n.baseUrl):dd(),[i,r,s,a,o,c]=await Promise.all([e(t.assetsJson),e(t.atlasPng),e(t.blockFlags.opaqueTxt),e(t.blockFlags.transparentTxt),e(t.blockFlags.nonSelfCullingTxt),e(t.blockFlags.emissiveJson)]);if(!i.ok)throw new Error(`[lodestone] Failed to fetch assets.json: ${i.status} ${i.statusText}`);if(!r.ok)throw new Error(`[lodestone] Failed to fetch atlas.png: ${r.status} ${r.statusText}`);if(!s.ok)throw new Error(`[lodestone] Failed to fetch opaque.txt: ${s.status} ${s.statusText}`);if(!a.ok)throw new Error(`[lodestone] Failed to fetch transparent.txt: ${a.status} ${a.statusText}`);if(!o.ok)throw new Error(`[lodestone] Failed to fetch non_self_culling.txt: ${o.status} ${o.statusText}`);if(!c.ok)throw new Error(`[lodestone] Failed to fetch emissive.json: ${c.status} ${c.statusText}`);const l=await i.json(),u=await r.blob(),h=await My(u),d={opaque:vl(await s.text()),transparent:vl(await a.text()),nonSelfCulling:vl(await o.text()),emissive:await c.json()},f=pd({assets:l,atlas:h,flags:d});return{urls:t,assets:l,atlas:h,resources:f}}function xl(n,e,t,i,r){var a;const s=i.up?16:[14.2,12.5,10.5,9,7,5.3,3.7,1.9,16,16,16,16,16,16,16,16][e];return new Mt(void 0,{still:`block/${n}_still`,flow:`block/${n}_flow`},[{from:[0,0,0],to:[16,s,16],faces:{up:{texture:"#still",tintindex:r,cullface:tt.UP},down:{texture:"#still",tintindex:r,cullface:tt.DOWN},north:{texture:"#flow",tintindex:r,cullface:tt.NORTH},east:{texture:"#flow",tintindex:r,cullface:tt.EAST},south:{texture:"#flow",tintindex:r,cullface:tt.SOUTH},west:{texture:"#flow",tintindex:r,cullface:tt.WEST}}}]).getMesh(t,i,(a=lr[n])==null?void 0:a.call(lr,{}))}const ms={white:Xe.intToRgb(16383998),orange:Xe.intToRgb(16351261),magenta:Xe.intToRgb(13061821),light_blue:Xe.intToRgb(3847130),yellow:Xe.intToRgb(16701501),lime:Xe.intToRgb(8439583),pink:Xe.intToRgb(15961002),gray:Xe.intToRgb(4673362),light_gray:Xe.intToRgb(10329495),cyan:Xe.intToRgb(1481884),purple:Xe.intToRgb(8991416),blue:Xe.intToRgb(3949738),brown:Xe.intToRgb(8606770),green:Xe.intToRgb(6192150),red:Xe.intToRgb(11546150),black:Xe.intToRgb(1908001)};var bt;(function(n){function e(L){return H=>new Mt(void 0,{0:L.withPrefix("entity/chest/").toString()},[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],rotation:180,texture:"#0"},down:{uv:[.75,0,1.25,.25],rotation:180,texture:"#0"}}}]).getMesh(H,gt.none())}n.chestRenderer=e;function t(L){return new Mt(void 0,{0:"entity/decorated_pot/decorated_pot_side",1:"entity/decorated_pot/decorated_pot_base"},[{from:[1,0,1],to:[15,16,15],faces:{north:{uv:[1,0,15,16],texture:"#0"},east:{uv:[1,0,15,16],texture:"#0"},south:{uv:[1,0,15,16],texture:"#0"},west:{uv:[1,0,15,16],texture:"#0"},up:{uv:[0,6.5,7,13.5],texture:"#1"},down:{uv:[7,6.5,14,13.5],texture:"#1"}}},{from:[5,16,5],to:[11,17,11],faces:{north:{uv:[0,5.5,3,6],texture:"#1"},east:{uv:[3,5.5,6,6],texture:"#1"},south:{uv:[6,5.5,9,6],texture:"#1"},west:{uv:[9,5.5,12,6],texture:"#1"}}},{from:[4,17,4],to:[12,20,12],faces:{north:{uv:[0,4,4,5.5],texture:"#1"},east:{uv:[4,4,8,5.5],texture:"#1"},south:{uv:[8,4,12,5.5],texture:"#1"},west:{uv:[12,4,16,5.5],texture:"#1"},up:{uv:[4,0,8,4],texture:"#1"},down:{uv:[8,0,12,4],texture:"#1"}}}]).getMesh(L,gt.none())}n.decoratedPotRenderer=t;function i(L){return new Mt(void 0,{0:"entity/shield_base_nopattern"},[{from:[-6,-11,-2],to:[6,11,-1],faces:{north:{uv:[3.5,.25,6.5,5.75],texture:"#0"},east:{uv:[3.25,.25,3.5,5.75],texture:"#0"},south:{uv:[.25,.25,3.25,5.75],texture:"#0"},west:{uv:[0,.25,.25,5.75],texture:"#0"},up:{uv:[.25,0,3.25,.25],texture:"#0"},down:{uv:[3.25,0,6.25,.25],texture:"#0"}}}]).getMesh(L,gt.none())}n.shieldRenderer=i;function r(L,H){return K=>new Mt(void 0,{0:L.withPrefix("entity/").toString()},[{from:[4,0,4],to:[12,8,12],faces:{north:{uv:[6,2*H,8,4*H],texture:"#0"},east:{uv:[2,2*H,0,4*H],texture:"#0"},south:{uv:[2,2*H,4,4*H],texture:"#0"},west:{uv:[6,2*H,4,4*H],texture:"#0"},up:{uv:[2,0*H,4,2*H],texture:"#0"},down:{uv:[4,0*H,6,2*H],texture:"#0"}}}]).getMesh(K,gt.none())}n.headRenderer=r;function s(L=J.create("enderdragon/dragon")){return H=>{const K=nt();return ze(K,K,[8,8,8]),tn(K,K,[.75,.75,.75]),Ft(K,K,Math.PI),ze(K,K,[-8,-11.2,-8]),new Mt(void 0,{0:L.withPrefix("entity/").toString()},[{from:[2,4,-16],to:[14,9,0],faces:{north:{uv:[12,3.75,12.75,4.0625],texture:"#0"},east:{uv:[11,3.75,12,4.0625],texture:"#0"},south:{uv:[13.75,3.75,14.5,4.0625],texture:"#0"},west:{uv:[12.75,3.75,13.75,4.0625],texture:"#0"},up:{uv:[12.75,3.75,12,2.75],texture:"#0"},down:{uv:[13.5,2.75,12.75,3.75],texture:"#0"}}},{from:[0,0,-2],to:[16,16,14],faces:{north:{uv:[8,2.875,9,3.875],texture:"#0"},east:{uv:[7,2.875,8,3.875],texture:"#0"},south:{uv:[10,2.875,11,3.875],texture:"#0"},west:{uv:[9,2.875,10,3.875],texture:"#0"},up:{uv:[9,2.875,8,1.875],texture:"#0"},down:{uv:[10,1.875,9,2.875],texture:"#0"}}},{from:[2,0,-16],to:[14,4,0],rotation:{angle:-.2*180/Math.PI,axis:"x",origin:[8,4,-2]},faces:{north:{uv:[12,5.0625,12.75,5.3125],texture:"#0"},east:{uv:[11,5.0625,12,5.3125],texture:"#0"},south:{uv:[13.75,5.0625,14.5,5.3125],texture:"#0"},west:{uv:[12.75,5.0625,13.75,5.3125],texture:"#0"},up:{uv:[12.75,5.0625,12,4.0625],texture:"#0"},down:{uv:[13.5,4.0625,12.75,5.0625],texture:"#0"}}},{from:[3,16,4],to:[5,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[11,16,4],to:[13,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[3,9,-14],to:[5,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}},{from:[11,9,-14],to:[13,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}}]).getMesh(H,gt.none()).transform(K)}}n.dragonHeadRenderer=s;function a(L=J.create("piglin/piglin")){return H=>new Mt(void 0,{0:L.withPrefix("entity/").toString()},[{from:[3,0,4],to:[13,8,12],faces:{north:{uv:[6.5,2,9,4],texture:"#0"},east:{uv:[2,2,0,4],texture:"#0"},south:{uv:[2,2,4.5,4],texture:"#0"},west:{uv:[6.5,2,4.5,4],texture:"#0"},up:{uv:[2,0,4.5,2],texture:"#0"},down:{uv:[4.5,0,7,2],texture:"#0"}}},{from:[6,0,12],to:[10,4,13],faces:{north:{uv:[9.25,.5,10.25,1.5],texture:"#0"},east:{uv:[7.75,.5,8,1.5],texture:"#0"},south:{uv:[8,.5,9,1.5],texture:"#0"},west:{uv:[9,.5,9.25,1.5],texture:"#0"},up:{uv:[8,.25,9,.5],texture:"#0"},down:{uv:[9,.25,10,.5],texture:"#0"}}},{from:[5,0,12],to:[6,2,13],faces:{north:{uv:[1.25,.25,1.5,.75],texture:"#0"},east:{uv:[.5,.25,.75,.75],texture:"#0"},south:{uv:[.75,.25,1,.75],texture:"#0"},west:{uv:[1,.25,1.25,.75],texture:"#0"},up:{uv:[.75,0,1,.25],texture:"#0"},down:{uv:[1,0,1.25,.25],texture:"#0"}}},{from:[10,0,12],to:[11,2,13],faces:{north:{uv:[1.25,1.25,1.5,1.75],texture:"#0"},east:{uv:[.5,1.25,.75,1.75],texture:"#0"},south:{uv:[.75,1.25,1,1.75],texture:"#0"},west:{uv:[1,1.25,1.25,1.75],texture:"#0"},up:{uv:[.75,1,1,1.25],texture:"#0"},down:{uv:[1,1,1.25,1.25],texture:"#0"}}},{from:[2.5,1.5,6],to:[3.5,6.5,10],rotation:{angle:-30,axis:"z",origin:[3,7,8]},faces:{north:{uv:[12,2.5,12.25,3.75],texture:"#0"},east:{uv:[9.75,2.5,10.75,3.75],texture:"#0"},south:{uv:[10.75,2.5,11,3.75],texture:"#0"},west:{uv:[11,2.5,12,3.75],texture:"#0"},up:{uv:[10.75,1.5,11,2.5],texture:"#0"},down:{uv:[11,1.5,11.25,2.5],texture:"#0"}}},{from:[12.5,1.5,6],to:[13.5,6.5,10],rotation:{angle:30,axis:"z",origin:[13,7,8]},faces:{north:{uv:[15.25,2.5,15,3.75],texture:"#0"},east:{uv:[15,2.5,14,3.75],texture:"#0"},south:{uv:[14,2.5,13.75,3.75],texture:"#0"},west:{uv:[13.75,2.5,12.75,3.75],texture:"#0"},up:{uv:[14,1.5,13.75,2.5],texture:"#0"},down:{uv:[14.25,1.5,14,2.5],texture:"#0"}}}]).getMesh(H,gt.none())}n.piglinHeadRenderer=a;function o(L){return H=>new Mt(void 0,{0:L.withPrefix("entity/signs/").toString()},[{from:[-4,8,7],to:[20,20,9],faces:{north:{uv:[.5,1,6.5,7],texture:"#0"},east:{uv:[0,1,.5,7],texture:"#0"},south:{uv:[7,1,13,7],texture:"#0"},west:{uv:[6.5,1,7,7],texture:"#0"},up:{uv:[6.5,1,.5,0],texture:"#0"},down:{uv:[12.5,0,6.5,1],texture:"#0"}}},{from:[7,-6,7],to:[9,8,9],faces:{north:{uv:[.5,8,1,15],texture:"#0"},east:{uv:[0,8,.5,15],texture:"#0"},south:{uv:[1.5,8,2,15],texture:"#0"},west:{uv:[1,8,1.5,15],texture:"#0"},up:{uv:[1,8,.5,7],texture:"#0"},down:{uv:[1.5,7,1,8],texture:"#0"}}}]).getMesh(H,gt.none())}n.signRenderer=o;function c(L){return H=>new Mt(void 0,{0:L.withPrefix("entity/signs/").toString()},[{from:[-4,4,17],to:[20,16,19],faces:{north:{uv:[.5,1,6.5,7],texture:"#0"},east:{uv:[0,1,.5,7],texture:"#0"},south:{uv:[7,1,13,7],texture:"#0"},west:{uv:[6.5,1,7,7],texture:"#0"},up:{uv:[6.5,1,.5,0],texture:"#0"},down:{uv:[12.5,0,6.5,1],texture:"#0"}}}]).getMesh(H,gt.none())}n.wallSignRenderer=c;function l(L){return(H,K)=>H?new Mt(void 0,{0:L.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[2,10,8],to:[14,16,8],faces:{north:{uv:[3.5,3,6.5,6],texture:"#0"},south:{uv:[3.5,3,6.5,6],texture:"#0"}}}]).getMesh(K,gt.none()):new Mt(void 0,{0:L.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,16,8],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[3,10,6.5],to:[3,16,9.5],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,16,8],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[13,10,6.5],to:[13,16,9.5],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}}]).getMesh(K,gt.none())}n.hangingSignRenderer=l;function u(L){return H=>new Mt(void 0,{0:`entity/signs/hanging/${L}`},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[0,14,6],to:[16,16,10],faces:{north:{uv:[1,2,5,3],texture:"#0"},east:{uv:[0,2,1,3],texture:"#0"},south:{uv:[6,2,10,3],texture:"#0"},west:{uv:[5,2,6,3],texture:"#0"},up:{uv:[5,2,1,0],texture:"#0"},down:{uv:[9,0,5,2],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,16,8],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[3,10,6.5],to:[3,16,9.5],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,16,8],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{north:{uv:[0,3,.75,6],texture:"#0"},south:{uv:[0,3,.75,6],texture:"#0"}}},{from:[13,10,6.5],to:[13,16,9.5],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{east:{uv:[1.5,3,2.25,6],texture:"#0"},west:{uv:[1.5,3,2.25,6],texture:"#0"}}}]).getMesh(H,gt.none())}n.wallHangingSignRenderer=u;function h(L){return new Mt(void 0,{0:"entity/conduit/base"},[{from:[5,5,5],to:[11,11,11],faces:{north:{uv:[3,6,6,12],texture:"#0"},east:{uv:[0,6,3,12],texture:"#0"},south:{uv:[9,6,12,12],texture:"#0"},west:{uv:[6,6,9,12],texture:"#0"},up:{uv:[6,6,3,0],texture:"#0"},down:{uv:[9,0,6,6],texture:"#0"}}}]).getMesh(L,gt.none())}n.conduitRenderer=h;function d(L){return H=>new Mt(void 0,{0:L.withPrefix("entity/shulker/").toString()},[{from:[0,0,0],to:[16,8,16],faces:{north:{uv:[4,11,8,13],texture:"#0"},east:{uv:[0,11,4,13],texture:"#0"},south:{uv:[12,11,16,13],texture:"#0"},west:{uv:[8,11,12,13],texture:"#0"},up:{uv:[8,11,4,7],texture:"#0"},down:{uv:[12,7,8,11],texture:"#0"}}},{from:[0,4,0],to:[16,16,16],faces:{north:{uv:[4,4,8,7],texture:"#0"},east:{uv:[0,4,4,7],texture:"#0"},south:{uv:[12,4,16,7],texture:"#0"},west:{uv:[8,4,12,7],texture:"#0"},up:{uv:[8,4,4,0],texture:"#0"},down:{uv:[12,0,8,4],texture:"#0"}}}]).getMesh(H,gt.none())}n.shulkerBoxRenderer=d;const f=L=>({north:{uv:[.25,.25,5.25,10.25],texture:`#${L}`,tintindex:L},east:{uv:[0,.25,.25,10.25],texture:`#${L}`,tintindex:L},south:{uv:[5.5,.25,10.5,10.25],texture:`#${L}`,tintindex:L},west:{uv:[5.25,.25,5.5,10.25],texture:`#${L}`,tintindex:L},up:{uv:[5.25,.25,.25,0],texture:`#${L}`,tintindex:L},down:{uv:[10.25,0,5.25,.25],texture:`#${L}`,tintindex:L}});function g(L,H){return(K,X)=>{const Q={0:"entity/banner_base"},re=[...H.base],fe=[L];return X==null||X.forEach((be,Ie)=>{const Y=J.parse(be.getString("pattern")).path,ae=be.getString("color");Ie++,Q[Ie]=`entity/banner/${Y}`,re.push(H.pattern(Ie)),fe.push(ae)}),new Mt(void 0,Q,re).getMesh(K,gt.none(),be=>ms[fe[be]])}}n.bannerRenderer=L=>g(L,{base:[{from:[-2,-8,6],to:[18,32,7],faces:f(0)},{from:[7,-12,7],to:[9,30,9],faces:{north:{uv:[11.5,.5,12,11],texture:"#0"},east:{uv:[11,.5,11.5,11],texture:"#0"},south:{uv:[12.5,.5,13,11],texture:"#0"},west:{uv:[12,.5,12.5,11],texture:"#0"},up:{uv:[12,.5,11.5,0],texture:"#0"},down:{uv:[12.5,0,12,.5],texture:"#0"}}},{from:[-2,30,7],to:[18,32,9],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:H=>({from:[-2,-8,6],to:[18,32,7],faces:f(H)})}),n.wallBannerRenderer=L=>g(L,{base:[{from:[-2,-8,-1.5],to:[18,32,-.5],faces:f(0)},{from:[-2,30,-3.5],to:[18,32,-1.5],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:H=>({from:[-2,-8,-1.5],to:[18,32,-.5],faces:f(H)})});function _(L){return new Mt(void 0,{0:"entity/bell/bell_body"},[{from:[5,3,5],to:[11,10,11],faces:{north:{uv:[3,3,6,6.5],texture:"#0"},east:{uv:[0,3,3,6.5],texture:"#0"},south:{uv:[9,3,12,6.5],texture:"#0"},west:{uv:[6,3,9,6.5],texture:"#0"},up:{uv:[6,3,3,0],texture:"#0"},down:{uv:[9,0,6,3],texture:"#0"}}},{from:[4,10,4],to:[12,12,12],faces:{north:{uv:[4,10.5,8,11.5],texture:"#0"},east:{uv:[0,10.5,4,11.5],texture:"#0"},south:{uv:[12,10.5,16,11.5],texture:"#0"},west:{uv:[8,10.5,12,11.5],texture:"#0"},up:{uv:[8,10.5,4,6.5],texture:"#0"},down:{uv:[12,6.5,8,10.5],texture:"#0"}}}]).getMesh(L,gt.none())}n.bellRenderer=_;function m(L){return(H,K)=>H==="foot"?new Mt(void 0,{0:L.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{north:{uv:[5.5,5.5,9.5,7],rotation:180,texture:"#0"},east:{uv:[0,7,1.5,11],rotation:270,texture:"#0"},west:{uv:[5.5,7,7,11],rotation:90,texture:"#0"},up:{uv:[5.5,11,1.5,7],texture:"#0"},down:{uv:[11,7,7,11],texture:"#0"}}},{from:[0,0,0],to:[3,3,3],faces:{north:{uv:[12.5,5.25,13.25,6],texture:"#0"},east:{uv:[14.75,5.25,15.5,6],texture:"#0"},south:{uv:[14,5.25,14.75,6],texture:"#0"},west:{uv:[13.25,5.25,14,6],texture:"#0"},up:{uv:[13.25,4.5,14,5.25],texture:"#0"},down:{uv:[14,4.5,14.75,5.25],texture:"#0"}}},{from:[13,0,0],to:[16,3,3],faces:{north:{uv:[13.25,3.75,14,4.5],texture:"#0"},east:{uv:[12.5,3.75,13.25,4.5],texture:"#0"},south:{uv:[14.75,3.75,15.5,4.5],texture:"#0"},west:{uv:[14,3.75,14.75,4.5],texture:"#0"},up:{uv:[13.25,3,14,3.75],texture:"#0"},down:{uv:[14,3,14.75,3.75],texture:"#0"}}}]).getMesh(K,gt.none()):new Mt(void 0,{0:L.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{east:{uv:[0,1.5,1.5,5.5],rotation:270,texture:"#0"},south:{uv:[1.5,0,5.5,1.5],rotation:180,texture:"#0"},west:{uv:[5.5,1.5,7,5.5],rotation:90,texture:"#0"},up:{uv:[5.5,5.5,1.5,1.5],texture:"#0"},down:{uv:[11,1.5,7,5.5],texture:"#0"}}},{from:[0,0,13],to:[3,3,16],faces:{north:{uv:[14.75,.75,15.5,1.5],texture:"#0"},east:{uv:[14,.75,14.75,1.5],texture:"#0"},south:{uv:[13.25,.75,14,1.5],texture:"#0"},west:{uv:[12.5,.75,13.25,1.5],texture:"#0"},up:{uv:[13.25,0,14,.75],texture:"#0"},down:{uv:[14,0,14.75,.75],texture:"#0"}}},{from:[13,0,13],to:[16,3,16],faces:{north:{uv:[14,2.25,14.75,3],texture:"#0"},east:{uv:[13.25,2.25,14,3],texture:"#0"},south:{uv:[12.5,2.25,13.25,3],texture:"#0"},west:{uv:[14.75,2.25,15.5,3],texture:"#0"},up:{uv:[13.25,1.5,14,2.25],texture:"#0"},down:{uv:[14,1.5,14.75,2.25],texture:"#0"}}}]).getMesh(K,gt.none())}n.bedRenderer=m;function p(L,H,K=""){return L.getProperty(H)??K}function w(L,H,K="0"){return parseInt(L.getProperty(H)??K)}const x=new Map(Object.entries({"minecraft:chest":n.chestRenderer(J.create("normal")),"minecraft:ender_chest":n.chestRenderer(J.create("ender")),"minecraft:trapped_chest":n.chestRenderer(J.create("trapped"))})),S=new Map(Object.entries({"minecraft:skeleton_skull":n.headRenderer(J.create("skeleton/skeleton"),2),"minecraft:wither_skeleton_skull":n.headRenderer(J.create("skeleton/wither_skeleton"),2),"minecraft:zombie_head":n.headRenderer(J.create("zombie/zombie"),1),"minecraft:creeper_head":n.headRenderer(J.create("creeper/creeper"),2),"minecraft:dragon_head":n.dragonHeadRenderer(),"minecraft:piglin_head":n.piglinHeadRenderer(),"minecraft:player_head":n.headRenderer(J.create("player/wide/steve"),1)})),C=["oak","spruce","birch","jungle","acacia","dark_oak","mangrove","cherry","bamboo","crimson","warped"],A=new Map(C.map(L=>[`minecraft:${L}_sign`,n.signRenderer(J.create(L))])),E=new Map(C.map(L=>[`minecraft:${L}_wall_sign`,n.wallSignRenderer(J.create(L))])),I=new Map(C.map(L=>[`minecraft:${L}_hanging_sign`,n.hangingSignRenderer(J.create(L))])),M=new Map(C.map(L=>[`minecraft:${L}_wall_hanging_sign`,n.wallHangingSignRenderer(L)])),v=new Map(Object.keys(ms).map(L=>[`minecraft:${L}_shulker_box`,n.shulkerBoxRenderer(J.create(`shulker_${L}`))])),D=new Map(Object.keys(ms).map(L=>[`minecraft:${L}_bed`,n.bedRenderer(J.create(L))])),V=new Map(Object.keys(ms).map(L=>[`minecraft:${L}_banner`,n.bannerRenderer(L)])),U=new Map(Object.keys(ms).map(L=>[`minecraft:${L}_wall_banner`,n.wallBannerRenderer(L)]));function z(L,H,K,X){const Q=new st;L.is("water")&&Q.merge(xl("water",w(L,"level"),K,X,0)),L.is("lava")&&Q.merge(xl("lava",w(L,"level"),K,X));const re=x.get(L.getName().toString());if(re!==void 0){const ne=p(L,"facing","south"),B=nt();ze(B,B,[8,8,8]),Ft(B,B,ne==="west"?Math.PI/2:ne==="south"?Math.PI:ne==="east"?Math.PI*3/2:0),ze(B,B,[-8,-8,-8]),Q.merge(re(K).transform(B))}L.is("decorated_pot")&&Q.merge(t(K));const fe=S.get(L.getName().toString());if(fe!==void 0){const ne=w(L,"rotation")/16*Math.PI*2,B=nt();ze(B,B,[8,8,8]),Ft(B,B,ne),ze(B,B,[-8,-8,-8]),Q.merge(fe(K).transform(B))}const be=A.get(L.getName().toString());if(be!==void 0){const ne=w(L,"rotation")/16*Math.PI*2,B=nt();ze(B,B,[8,8,8]),Ft(B,B,ne),tn(B,B,[2/3,2/3,2/3]),ze(B,B,[-8,-8,-8]),Q.merge(be(K).transform(B))}const Ie=E.get(L.getName().toString());if(Ie!==void 0){const ne=p(L,"facing","south"),B=nt();ze(B,B,[8,8,8]),Ft(B,B,ne==="west"?Math.PI/2:ne==="south"?Math.PI:ne==="east"?Math.PI*3/2:0),tn(B,B,[2/3,2/3,2/3]),ze(B,B,[-8,-8,-8]),Q.merge(Ie(K).transform(B))}const Y=I.get(L.getName().toString());if(Y!==void 0){const ne=p(L,"attached","false")==="true",B=w(L,"rotation")/16*Math.PI*2,_e=nt();ze(_e,_e,[8,8,8]),Ft(_e,_e,B),tn(_e,_e,[2/3,2/3,2/3]),ze(_e,_e,[-8,-8,-8]),Q.merge(Y(ne,K).transform(_e))}const ae=M.get(L.getName().toString());if(ae!==void 0){const ne=p(L,"facing","south"),B=nt();ze(B,B,[8,8,8]),Ft(B,B,ne==="west"?Math.PI/2:ne==="south"?Math.PI:ne==="east"?Math.PI*3/2:0),ze(B,B,[-8,-8,-8]),Q.merge(ae(K).transform(B))}L.is("conduit")&&Q.merge(h(K));const ve=v.get(L.getName().toString());if(ve!==void 0){const ne=p(L,"facing","up"),B=nt();ze(B,B,[8,8,8]),ne==="down"?Ds(B,B,Math.PI):ne!=="up"&&(Ft(B,B,ne==="east"?Math.PI/2:ne==="north"?Math.PI:ne==="west"?Math.PI*3/2:0),Ds(B,B,Math.PI/2)),ze(B,B,[-8,-8,-8]),Q.merge(ve(K).transform(B))}if(L.is("bell")){const ne=nt();ze(ne,ne,[8,8,8]),tn(ne,ne,[1,-1,-1]),ze(ne,ne,[-8,-8,-8]),Q.merge(_(K).transform(ne))}const le=D.get(L.getName().toString());if(le!==void 0){const ne=p(L,"part","head"),B=p(L,"facing","south"),_e=nt();ze(_e,_e,[8,8,8]),Ft(_e,_e,B==="east"?Math.PI/2:B==="north"?Math.PI:B==="west"?Math.PI*3/2:0),ze(_e,_e,[-8,-8,-8]),Q.merge(le(ne,K).transform(_e))}const Ue=V.get(L.getName().toString());if(Ue!==void 0){const ne=w(L,"rotation")/16*Math.PI*2,B=nt();ze(B,B,[8,24,8]),Ft(B,B,ne),tn(B,B,[2/3,2/3,2/3]),ze(B,B,[-8,-24,-8]),Q.merge(Ue(K,H==null?void 0:H.getList("patterns",pe.Compound)).transform(B))}const ie=U.get(L.getName().toString());if(ie!==void 0){const ne=p(L,"facing","south"),B=nt();ze(B,B,[8,8,8]),Ft(B,B,ne==="east"?Math.PI/2:ne==="north"?Math.PI:ne==="west"?Math.PI*3/2:0),tn(B,B,[2/3,2/3,2/3]),ze(B,B,[-8,-23.2,-8]),Q.merge(ie(K,H==null?void 0:H.getList("patterns",pe.Compound)).transform(B))}!L.is("water")&&!L.is("lava")&&L.isWaterlogged()&&Q.merge(xl("water",0,K,X,0));const N=nt();return tn(N,N,[.0625,.0625,.0625]),Q.transform(N)}n.getBlockMesh=z})(bt||(bt={}));class md{constructor(e,t,i,r=16,s=!0){R(this,"gl");R(this,"structure");R(this,"resources");R(this,"chunks",[]);R(this,"chunkSize");R(this,"meshesDirty",!0);R(this,"meshCache",[]);R(this,"emissiveLights",[]);R(this,"emissiveLightsByChunk",new Map);R(this,"emissiveDirty",!0);R(this,"blockPropsCache",new WeakMap);R(this,"buildToken",0);this.gl=e,this.structure=t,this.resources=i,this.chunkSize=typeof r=="number"?[r,r,r]:r,s&&this.updateStructureBuffers()}setStructure(e,t){this.structure=e,(t==null?void 0:t.rebuild)!==!1&&this.updateStructureBuffers()}updateStructureBuffers(e){if(!this.structure)return;this.buildToken+=1;const t=this.buildChunkFilter(e);this.markDirty(),this.prepareRebuild(e);for(const i of this.structure.getBlocks())this.processBlock(i,t);this.finalizeRebuild(e)}async updateStructureBuffersAsync(e){var c,l;if(!this.structure)return;const t=++this.buildToken,i=this.buildChunkFilter(e==null?void 0:e.chunkPositions);this.markDirty(),this.prepareRebuild(e==null?void 0:e.chunkPositions);const r=this.structure.getBlocks(),s=r.length,a=(e==null?void 0:e.timeSliceMs)??8;let o=this.now();for(let u=0;u<r.length;u++){if(t!==this.buildToken)return;this.processBlock(r[u],i),!(u&1023)&&this.now()-o>=a&&((c=e==null?void 0:e.onProgress)==null||c.call(e,u+1,s),await this.yieldControl(),o=this.now())}t===this.buildToken&&(await this.finalizeRebuildAsync(e==null?void 0:e.chunkPositions,a),(l=e==null?void 0:e.onProgress)==null||l.call(e,s,s))}getMeshes(){return this.getMeshEntries().map(e=>e.mesh)}cancelPendingBuilds(){this.buildToken+=1}getMeshesInRange(e,t){return this.getMeshEntriesInRange(e,t).map(i=>i.mesh)}getMeshEntries(){return(this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),this.meshCache}getMeshEntriesInRange(e,t){if((this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),t===void 0)return this.meshCache;const i=t*t;return this.meshCache.filter(s=>{const a=[s.origin[0]+this.chunkSize[0]*.5,s.origin[1]+this.chunkSize[1]*.5,s.origin[2]+this.chunkSize[2]*.5],o=a[0]-e[0],c=a[1]-e[1],l=a[2]-e[2];return o*o+c*c+l*l<=i})}needsCull(e,t){var s;const i=(s=this.structure.getBlock(Nt.towards(e.pos,t)))==null?void 0:s.state;if(!i)return!1;const r=this.resources.getBlockFlags(i.getName());return e.state.getName().equals(i.getName())&&(r!=null&&r.self_culling)?!0:r!=null&&r.opaque?!(t===tt.UP&&e.state.isWaterlogged()):e.state.isWaterlogged()&&i.isWaterlogged()}isFullyOccluded(e){var i;const t=[tt.UP,tt.DOWN,tt.NORTH,tt.SOUTH,tt.EAST,tt.WEST];for(const r of t){const s=(i=this.structure.getBlock(Nt.towards(e.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=this.resources.getBlockFlags(s.getName());if(!(a!=null&&a.opaque))return!1}return!0}finishChunkMesh(e,t,i,r,s){const a=nt();ze(a,a,t),e.transform(a);const o=this.resources.getBlockFlags(i);let c=0;if(o!=null&&o.emissive){const l=o.emissiveConditional;if(l){const u=r[l];(u===void 0||u==="true")&&(c=o.emissiveIntensity??1)}else c=o.emissiveIntensity??1}if(c>0){const l=this.emissiveLightsByChunk.get(s)??[];l.push({position:[t[0]+.5,t[1]+.5,t[2]+.5],intensity:c,color:[1,.85,.6]}),this.emissiveLightsByChunk.set(s,l),this.emissiveDirty=!0}for(const l of e.quads){const u=l.normal();l.forEach(h=>{h.normal=u,h.blockPos=new Dt(t[0],t[1],t[2]),h.emissive=c})}}getEmissiveLights(){if(this.emissiveDirty){const e=[];this.emissiveLightsByChunk.forEach(t=>e.push(...t)),this.emissiveLights=e,this.emissiveDirty=!1}return this.emissiveLights}clearEmissiveLights(e){const t=this.chunkKey(e);this.emissiveLightsByChunk.has(t)&&(this.emissiveLightsByChunk.delete(t),this.emissiveDirty=!0)}prepareRebuild(e){if(!e){this.emissiveLightsByChunk.clear(),this.emissiveLights=[],this.emissiveDirty=!0,this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.clear(),r.transparentMesh.clear())})));return}e.forEach(t=>this.clearEmissiveLights(t)),e.forEach(t=>{const i=this.getChunk(t);i.mesh.clear(),i.transparentMesh.clear()})}finalizeRebuild(e){if(!e){this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),r.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}))})));return}e.forEach(t=>{const i=this.getChunk(t);i.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),i.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW})})}async finalizeRebuildAsync(e,t=8){let i=this.now();const r=async()=>{this.now()-i>=t&&(await this.yieldControl(),i=this.now())};if(!e){for(const s of this.chunks)if(s){for(const a of s)if(a)for(const o of a)o&&(o.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),o.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r())}return}for(const s of e){const a=this.getChunk(s);a.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),a.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r()}}processBlock(e,t){var c;const i=e.state.getName(),r=this.getBlockProps(e.state);if(this.isFullyOccluded(e))return;const s=[Math.floor(e.pos[0]/this.chunkSize[0]),Math.floor(e.pos[1]/this.chunkSize[1]),Math.floor(e.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(t&&!t.has(a))return;const o=this.getChunk(s);try{const l=this.resources.getBlockDefinition(i),u={up:this.needsCull(e,tt.UP),down:this.needsCull(e,tt.DOWN),west:this.needsCull(e,tt.WEST),east:this.needsCull(e,tt.EAST),north:this.needsCull(e,tt.NORTH),south:this.needsCull(e,tt.SOUTH)},h=new st;l&&h.merge(l.getMesh(i,r,this.resources,this.resources,u));const d=bt.getBlockMesh(e.state,e.nbt,this.resources,u);d.isEmpty()||h.merge(d),h.isEmpty()||(this.finishChunkMesh(h,e.pos,i,r,a),(c=this.resources.getBlockFlags(e.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(h):o.mesh.merge(h))}catch(l){console.error(`Error rendering block ${i}`,l)}}getBlockProps(e){const t=this.blockPropsCache.get(e);if(t)return t;const i={...e.getProperties()},r=this.resources.getDefaultBlockProperties(e.getName())??{};return Object.entries(r).forEach(([s,a])=>{i[s]===void 0&&(i[s]=a)}),this.blockPropsCache.set(e,i),i}buildChunkFilter(e){if(!e)return null;const t=new Set;return e.forEach(i=>{t.add(this.chunkKey(i))}),t}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}chunkKey(e){return`${e[0]},${e[1]},${e[2]}`}getChunk(e){const t=Math.abs(e[0])*2+(e[0]<0?1:0),i=Math.abs(e[1])*2+(e[1]<0?1:0),r=Math.abs(e[2])*2+(e[2]<0?1:0);if(this.chunks[t]||(this.chunks[t]=[]),this.chunks[t][i]||(this.chunks[t][i]=[]),!this.chunks[t][i][r]){const s=[e[0]*this.chunkSize[0],e[1]*this.chunkSize[1],e[2]*this.chunkSize[2]];this.chunks[t][i][r]={mesh:new st,transparentMesh:new st,origin:s}}return this.chunks[t][i][r]}rebuildMeshCache(){const e=[],t=[];this.chunks.forEach(i=>i.forEach(r=>r.forEach(s=>{s&&(s.mesh.isEmpty()||e.push({mesh:s.mesh,origin:s.origin,transparent:!1}),s.transparentMesh.isEmpty()||t.push({mesh:s.transparentMesh,origin:s.origin,transparent:!0}))}))),this.meshCache=e.concat(t),this.meshesDirty=!1}markDirty(){this.meshesDirty=!0,this.meshCache=[]}}class gd{constructor(e,t,i){R(this,"gl");R(this,"program");this.gl=e,this.program=this.initShaderProgram(t,i)}getProgram(){return this.program}initShaderProgram(e,t){const i=this.loadShader(this.gl.VERTEX_SHADER,e);if(!i)throw new Error("Failed to create vertex shader");const r=this.loadShader(this.gl.FRAGMENT_SHADER,t);if(!r)throw new Error("Failed to create fragment shader");const s=this.gl.createProgram();if(!s)throw new Error("Failed to create shader program");if(this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS))throw new Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(s)}`);return s}loadShader(e,t){const i=this.gl.createShader(e);if(!i)throw new Error("Failed to create shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)){const r=new Error(`Compiling ${e===this.gl.VERTEX_SHADER?"vertex":"fragment"} shader: ${this.gl.getShaderInfoLog(i)}`);throw this.gl.deleteShader(i),r}return i}}const Ey=`
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
`,Ty=`
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
`;class _d{constructor(e){R(this,"gl");R(this,"shaderProgram");R(this,"projMatrix");R(this,"activeShader");R(this,"pixelSize",0);this.gl=e,this.shaderProgram=new gd(e,Ey,Ty).getProgram(),this.activeShader=this.shaderProgram,this.projMatrix=this.getPerspective(),this.initialize()}setViewport(e,t,i,r){this.gl.viewport(e,t,i,r),this.projMatrix=this.getPerspective()}getPerspective(){const e=70*Math.PI/180,t=this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,i=nt();return ay(i,e,t,.1,500),i}initialize(){this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK)}setShader(e){this.gl.useProgram(e),this.activeShader=e}setVertexAttr(e,t,i){if(i===void 0)throw new Error(`Expected buffer for ${e}`);const r=this.gl.getAttribLocation(this.activeShader,e);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.vertexAttribPointer(r,t,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(r)}setUniform(e,t){const i=this.gl.getUniformLocation(this.activeShader,e);this.gl.uniformMatrix4fv(i,!1,t)}setTexture(e,t){this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.pixelSize=t??0}createAtlasTexture(e){const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture");return this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),t}prepareDraw(e){this.setUniform("mView",e),this.setUniform("mProj",this.projMatrix);const t=this.gl.getUniformLocation(this.activeShader,"pixelSize");this.gl.uniform1f(t,this.pixelSize)}drawMesh(e,t){if(e.quadVertices()>0){if(t.pos&&this.setVertexAttr("vertPos",3,e.posBuffer),t.color&&this.setVertexAttr("vertColor",3,e.colorBuffer),t.texture&&(this.setVertexAttr("texCoord",2,e.textureBuffer),this.setVertexAttr("texLimit",4,e.textureLimitBuffer)),t.normal&&this.setVertexAttr("normal",3,e.normalBuffer),t.blockPos&&this.setVertexAttr("blockPos",3,e.blockPosBuffer),!e.indexBuffer)throw new Error("Expected index buffer");this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,e.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,e.quadIndices(),e.indexType??this.gl.UNSIGNED_SHORT,0)}e.lineVertices()>0&&(t.pos&&this.setVertexAttr("vertPos",3,e.linePosBuffer),t.color&&this.setVertexAttr("vertColor",3,e.lineColorBuffer),this.gl.drawArrays(this.gl.LINES,0,e.lineVertices()))}}class go extends _d{constructor(t,i,r,s={}){super(t);R(this,"item");R(this,"resources");R(this,"mesh");R(this,"atlasTexture");this.item=i,this.resources=r,this.updateMesh(s),this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas())}setItem(t,i={}){this.item=t,this.updateMesh(i)}updateMesh(t={}){this.mesh=go.getItemMesh(this.item,this.resources,t),this.mesh.computeNormals(),this.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0})}static getItemMesh(t,i,r){var c;const s=(c=t.getComponent("item_model",i))==null?void 0:c.getAsString();if(s===void 0)return new st;const a=i.getItemModel(J.parse(s));if(!a)throw new Error(`Item model ${s} does not exist (defined by item ${t.toString()})`);return a.getMesh(t,i,r)}getPerspective(){const t=nt();return ly(t,0,16,0,16,.1,500),t}drawItem(){var i,r;const t=nt();ze(t,t,[0,0,-32]),this.setShader(this.shaderProgram),this.setTexture(this.atlasTexture,(r=(i=this.resources).getPixelSize)==null?void 0:r.call(i)),this.prepareDraw(t),this.drawMesh(this.mesh,{pos:!0,color:!0,texture:!0,normal:!0})}}const ji=[0,0,0];var eo;(function(n){function e(u){var f;const h=ee.readObject(u)??{},d=(f=ee.readString(h.type))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"constant":return new t(Xe.fromJson(h.value)??ji);case"dye":return new i(Xe.fromJson(h.default)??ji);case"grass":return new r(ee.readNumber(h.temperature)??0,ee.readNumber(h.downfall)??0);case"firework":return new s(Xe.fromJson(h.default)??ji);case"potion":return new a(Xe.fromJson(h.default)??ji);case"map_color":return new o(Xe.fromJson(h.default)??ji);case"custom_model_data":return new c(ee.readInt(h.index)??0,Xe.fromJson(h.default)??ji);case"team":return new l(Xe.fromJson(h.default)??ji);default:throw new Error(`Invalid item tint type ${d}`)}}n.fromJson=e;class t{constructor(h){R(this,"value");this.value=h}getTint(h){return this.value}}n.Constant=t;class i{constructor(h){R(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("dyed_color",d);return f?f.isCompound()?Xe.intToRgb(f.getNumber("rgb")):Xe.intToRgb(f.getAsNumber()):this.default_color}}n.Dye=i;class r{constructor(h,d){R(this,"temperature");R(this,"downfall");this.temperature=h,this.downfall=d}getTint(h){return[124/255,189/255,107/255]}}n.Grass=r;class s{constructor(h){R(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("firework_explosion",d);if(!(f!=null&&f.isCompound()))return this.default_color;const g=f.get("colors");return!g||!g.isListOrArray()?this.default_color:(()=>{if(g.length===1){const x=g.get(0);return x?Xe.intToRgb(x.getAsNumber()):this.default_color}let[m,p,w]=[0,0,0];for(const x of g.getItems())m+=(x.getAsNumber()&16711680)>>16,p+=(x.getAsNumber()&65280)>>8,w+=(x.getAsNumber()&255)>>0;return m/=g.length,p/=g.length,w/=g.length,[m/255,p/255,w/255]})()}}n.Firework=s;class a{constructor(h){R(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("potion_contents",d);if(!f)return this.default_color;const g=Ls.fromNbt(f);return Ls.getColor(g)}}n.Potion=a;class o{constructor(h){R(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("map_color",d);return f?Xe.intToRgb(f.getAsNumber()):this.default_color}}n.MapColor=o;class c{constructor(h,d){R(this,"index");R(this,"default_color");this.index=h,this.default_color=d}getTint(h,d){const f=h.getComponent("custom_model_data",d);if(!(f!=null&&f.isCompound()))return this.default_color;const g=f.getList("colors").get(this.index);return g?Xe.fromNbt(g)??this.default_color:this.default_color}}n.CustomModelData=c;class l{constructor(h){R(this,"default_color");this.default_color=h}getTint(h,d,f){return f.context_entity_team_color??this.default_color}}n.Team=l})(eo||(eo={}));var $l;(function(n){function e(f){var m;const g=ee.readObject(f)??{},_=(m=ee.readString(g.type))==null?void 0:m.replace(/^minecraft:/,"");switch(_){case"bed":return new t(J.parse(ee.readString(g.texture)??""));case"banner":return new i(ee.readString(g.color)??"");case"conduit":return new r;case"chest":return new s(J.parse(ee.readString(g.texture)??""),ee.readNumber(g.openness)??0);case"head":return new a(ee.readString(g.kind)??"",typeof g.texture=="string"?J.parse(g.texture):void 0,ee.readNumber(g.animation)??0);case"player_head":return new a("player",void 0,0);case"shulker_box":return new o(J.parse(ee.readString(g.texture)??""),ee.readNumber(g.openness)??0,ee.readString(g.orientation)??"up");case"shield":return new c;case"trident":return new l;case"decorated_pot":return new u;case"standing_sign":return new h(ee.readString(g.wood_type)??"",typeof g.texture=="string"?J.parse(g.texture):void 0);case"hanging_sign":return new d(ee.readString(g.wood_type)??"",typeof g.texture=="string"?J.parse(g.texture):void 0);default:return console.warn(`[lodestone]: Unknown special model ${_}`),{getMesh:()=>new st}}}n.fromJson=e;class t{constructor(g){R(this,"renderer");this.renderer=bt.bedRenderer(g)}getMesh(g,_){const m=this.renderer("head",_),p=this.renderer("foot",_),w=nt();return ze(w,w,[0,0,-16]),m.merge(p.transform(w))}}class i{constructor(g){R(this,"renderer");this.renderer=bt.bannerRenderer(g)}getMesh(g,_){const m=g.getComponent("banner_patterns",void 0),p=nt();return ze(p,p,[8,24,8]),Ft(p,p,Math.PI),tn(p,p,[2/3,2/3,2/3]),ze(p,p,[-8,-24,-8]),this.renderer(_,m instanceof Zt?m:void 0).transform(p)}}class r{getMesh(g,_){return bt.conduitRenderer(_)}}class s{constructor(g,_){R(this,"renderer");this.renderer=bt.chestRenderer(g)}getMesh(g,_){const m=nt();return ze(m,m,[8,8,8]),Ft(m,m,Math.PI),ze(m,m,[-8,-8,-8]),this.renderer(_).transform(m)}}class a{constructor(g,_,m){R(this,"renderer");this.renderer=({skeleton:()=>bt.headRenderer(_??J.create("skeleton/skeleton"),2),wither_skeleton:()=>bt.headRenderer(_??J.create("skeleton/wither_skeleton"),2),zombie:()=>bt.headRenderer(_??J.create("zombie/zombie"),1),creeper:()=>bt.headRenderer(_??J.create("creeper/creeper"),2),dragon:()=>bt.dragonHeadRenderer(_),piglin:()=>bt.piglinHeadRenderer(_),player:()=>bt.headRenderer(_??J.create("player/wide/steve"),1)}[g]??(()=>()=>new st))()}getMesh(g,_){return this.renderer(_)}}class o{constructor(g,_,m){R(this,"renderer");this.renderer=bt.shulkerBoxRenderer(g)}getMesh(g,_){return this.renderer(_)}}class c{getMesh(g,_){const m=bt.shieldRenderer(_),p=nt();return ze(p,p,[-3,1,0]),Ds(p,p,-10*Math.PI/180),Ft(p,p,-10*Math.PI/180),cd(p,p,-5*Math.PI/180),m.transform(p)}}class l{getMesh(g,_){return new st}}class u{getMesh(g,_){return bt.decoratedPotRenderer(_)}}class h{constructor(g,_){R(this,"renderer");this.renderer=bt.signRenderer(_??J.create(g))}getMesh(g,_){return this.renderer(_)}}class d{constructor(g,_){R(this,"renderer");this.renderer=bt.hangingSignRenderer(_??J.create(g))}getMesh(g,_){return this.renderer(!1,_)}}})($l||($l={}));const Nh=new st;var Yl;(function(n){function e(u){var f,g;const h=ee.readObject(u)??{},d=(f=ee.readString(h.type))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"empty":return new t;case"model":return new i(J.parse(ee.readString(h.model)??""),ee.readArray(h.tints,eo.fromJson)??[]);case"composite":return new r(ee.readArray(h.models,n.fromJson)??[]);case"condition":return new s(s.propertyFromJson(h),n.fromJson(h.on_true),n.fromJson(h.on_false));case"select":return new a(a.propertyFromJson(h),new Map((g=ee.readArray(h.cases,_=>ee.readObject(_)??{}))==null?void 0:g.flatMap(_=>{const m=n.fromJson(_.model);return Array.isArray(_.when)?_.when.map(p=>[ee.readString(p)??"",m]):[[ee.readString(_.when)??"",m]]})),h.fallback?n.fromJson(h.fallback):void 0);case"range_dispatch":return new o(o.propertyFromJson(h),ee.readNumber(h.scale)??1,ee.readArray(h.entries,_=>{const m=ee.readObject(_)??{};return{threshold:ee.readNumber(m.threshold)??0,model:n.fromJson(m.model)}})??[],h.fallback?n.fromJson(h.fallback):void 0);case"special":return new c($l.fromJson(h.model),J.parse(ee.readString(h.base)??""));case"bundle/selected_item":return new l;default:return console.warn(`[lodestone]: Unknown item model type '${d}'`),{getMesh:()=>new st}}}n.fromJson=e;class t{getMesh(h,d,f){return new st}}n.Empty=t;class i{constructor(h,d){R(this,"modelId");R(this,"tints");this.modelId=h,this.tints=d}getMesh(h,d,f){const g=d.getBlockModel(this.modelId);if(!g)return console.warn(`[lodestone]: Model '${this.modelId}' does not exist`),new st;const _=p=>p<this.tints.length?this.tints[p].getTint(h,d,f):[1,1,1],m=g.getMesh(d,gt.none(),_);return m.transform(g.getDisplayTransform(f.display_context??"gui")),m}}n.Model=i;class r{constructor(h){R(this,"models");this.models=h}getMesh(h,d,f){const g=new st;return this.models.forEach(_=>g.merge(_.getMesh(h,d,f))),g}}n.Composite=r;class s{constructor(h,d,f){R(this,"property");R(this,"onTrue");R(this,"onFalse");this.property=h,this.onTrue=d,this.onFalse=f}getMesh(h,d,f){return(this.property(h,d,f)?this.onTrue:this.onFalse).getMesh(h,d,f)}static propertyFromJson(h){var f;const d=(f=ee.readString(h.property))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"fishing_rod/cast":case"selected":case"carried":case"extended_view":return(w,x,S)=>S[d]??!1;case"view_entity":return(w,x,S)=>S.context_entity_is_view_entity??!1;case"using_item":return(w,x,S)=>(S.use_duration??-1)>=0;case"bundle/has_selected_item":return(w,x,S)=>(S["bundle/selected_item"]??-1)>=0;case"broken":return(w,x,S)=>{var E,I;const C=(E=w.getComponent("damage",x))==null?void 0:E.getAsNumber(),A=(I=w.getComponent("max_damage",x))==null?void 0:I.getAsNumber();return C!==void 0&&A!==void 0&&C>=A-1};case"damaged":return(w,x,S)=>{var E,I;const C=(E=w.getComponent("damage",x))==null?void 0:E.getAsNumber(),A=(I=w.getComponent("max_damage",x))==null?void 0:I.getAsNumber();return C!==void 0&&A!==void 0&&C>=1};case"has_component":const g=J.parse(ee.readString(h.component)??""),_=ee.readBoolean(h.ignore_default)??!1;return(w,x,S)=>w.hasComponent(g,_?void 0:x);case"keybind_down":const m=ee.readString(h.keybind)??"";return(w,x,S)=>{var C;return((C=S.keybind_down)==null?void 0:C.includes(m))??!1};case"custom_model_data":const p=ee.readInt(h.index)??0;return(w,x,S)=>{const C=w.getComponent("custom_model_data",x);if(!(C!=null&&C.isCompound()))return!1;const A=C.getList("flags").getNumber(p);return A!==void 0&&A!==0};default:return console.warn(`[lodestone]: Unknown condition property '${d}'`),()=>!1}}}n.Condition=s;class a{constructor(h,d,f){R(this,"property");R(this,"cases");R(this,"fallback");this.property=h,this.cases=d,this.fallback=f}getMesh(h,d,f){var _;const g=this.property(h,d,f);return((_=(g!==null?this.cases.get(g):void 0)??this.fallback)==null?void 0:_.getMesh(h,d,f))??Nh}static propertyFromJson(h){var f;const d=(f=ee.readString(h.property))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"main_hand":return(p,w,x)=>x.main_hand??"right";case"display_context":return(p,w,x)=>x.display_context??"gui";case"context_dimension":return(p,w,x)=>{var S;return((S=x.context_dimension)==null?void 0:S.toString())??null};case"charge_type":const g=J.create("firework_rocket");return(p,w,x)=>{const S=p.getComponent("charged_projectiles",w);return!(S!=null&&S.isList())||S.length===0?"none":S.filter(C=>C.isCompound()?J.parse(C.getString("id")).equals(g):!1).length>0?"rocket":"arrow"};case"trim_material":return(p,w,x)=>{const S=p.getComponent("trim",w);return S!=null&&S.isCompound()?J.parse(S.getString("material")).toString():null};case"block_state":const _=ee.readString(h.block_state_property)??"";return(p,w,x)=>{const S=p.getComponent("block_state",w);return S!=null&&S.isCompound()?S.getString(_):null};case"local_time":return(p,w,x)=>"NOT IMPLEMENTED";case"context_entity_type":return(p,w,x)=>{var S;return((S=x.context_entity_type)==null?void 0:S.toString())??null};case"custom_model_data":const m=ee.readInt(h.index)??0;return(p,w,x)=>{const S=p.getComponent("custom_model_data",w);if(!(S!=null&&S.isCompound()))return null;const C=S.getList("strings");return C.length<=m?null:C.getString(m)};default:return console.warn(`[lodestone]: Unknown select property '${d}'`),()=>null}}}n.Select=a;class o{constructor(h,d,f,g){R(this,"property");R(this,"scale");R(this,"fallback");R(this,"entries");this.property=h,this.scale=d,this.fallback=g,this.entries=f.sort((_,m)=>_.threshold-m.threshold)}getMesh(h,d,f){const g=this.property(h,d,f)*this.scale;let _=this.fallback;for(const m of this.entries)if(m.threshold<=g)_=m.model;else break;return(_==null?void 0:_.getMesh(h,d,f))??Nh}static propertyFromJson(h){var f;const d=(f=ee.readString(h.property))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"bundle/fullness":let g=function(x,S){const C=x.getComponent("bundle_contents",S);return C!=null&&C.isListOrArray()?C.map(E=>E.isCompound()?ri.fromNbt(E):void 0).reduce((E,I)=>{var D;if(I===void 0)return E;if(I.hasComponent("bundle_contents",S))return E+g(I,S)+1/16;const M=I.getComponent("bees",S);if(M!=null&&M.isListOrArray()&&M.length>0)return E+1;const v=((D=I.getComponent("max_stack_size",S))==null?void 0:D.getAsNumber())??1;return E+I.count/v},0):0};return(x,S,C)=>g(x,S);case"damage":{const x=ee.readBoolean(h.normalize)??!0;return(S,C,A)=>{var M,v;const E=((M=S.getComponent("max_damage",C))==null?void 0:M.getAsNumber())??0,I=Ei(((v=S.getComponent("damage",C))==null?void 0:v.getAsNumber())??0,0,E);return x?E>0?Ei(I/E,0,1):0:Ei(I,0,E)}}case"count":{const x=ee.readBoolean(h.normalize)??!0;return(S,C,A)=>{var I;const E=((I=S.getComponent("max_stack_size",C))==null?void 0:I.getAsNumber())??1;return x?Ei(S.count/E,0,1):Ei(S.count,0,E)}}case"cooldown":return(x,S,C)=>{var M;const A=x.getComponent("use_cooldown",S),E=A!=null&&A.isCompound()?A.getString("cooldown_group"):"",I=A!=null&&A.isCompound()&&E?J.parse(E):x.id;return((M=C.cooldown_percentage)==null?void 0:M[I.toString()])??0};case"time":switch(ee.readString(h.source)??"daytime"){case"moon_phase":return(x,S,C)=>(C.game_time??0)/24e3%8/8;case"random":return(x,S,C)=>Math.random();default:return(x,S,C)=>{const E=(C.game_time??0)/24e3%1-.25,I=.5-Math.cos(E*Math.PI)/2;return(E*2+I)/3}}case"compass":return(x,S,C)=>C.compass_angle??0;case"crossbow/pull":return(x,S,C)=>C["crossbow/pull"]??0;case"use_duration":const m=ee.readBoolean(h.remaining)??!0;return(x,S,C)=>C.use_duration===void 0||C.use_duration<0?0:m?Math.max((C.max_use_duration??0)-C.use_duration,0):C.use_duration;case"use_cycle":const p=ee.readNumber(h.period)??1;return(x,S,C)=>C.use_duration===void 0||C.use_duration<0||p<=0?0:Math.max((C.max_use_duration??0)-(C.use_duration??0),0)%p;case"custom_model_data":const w=ee.readInt(h.index)??0;return(x,S,C)=>{const A=x.getComponent("custom_model_data",S);return A!=null&&A.isCompound()?A.getList("floats").getNumber(w):0};default:return console.warn(`[lodestone]: Unknown range dispatch property '${d}'`),()=>0}}}n.RangeDispatch=o;class c{constructor(h,d){R(this,"specialModel");R(this,"base");this.specialModel=h,this.base=d}getMesh(h,d,f){const g=this.specialModel.getMesh(h,d),_=d.getBlockModel(this.base);return _?(g.transform(_.getDisplayTransform(f.display_context??"gui")),g):(console.warn(`[lodestone]: Special model base '${this.base}' does not exist`),new st)}}n.Special=c;class l{getMesh(h,d,f){const g=f["bundle/selected_item"];if(g===void 0||g<0)return new st;const _=h.getComponent("bundle_contents",d);if(!(_!=null&&_.isListOrArray()))return new st;const m=_.get(g);if(m===void 0||!m.isCompound())return new st;const p=ri.fromNbt(m);return go.getItemMesh(p,d,{...f,"bundle/selected_item":-1,selected:!1,carried:!1,use_duration:-1})}}n.BundleSelectedItem=l})(Yl||(Yl={}));const Sl=256,Fh=2,Ay=Fh*Fh,Ca=(n,e,t=1)=>{const i=new xf(n,Math.max(1,e),Math.max(1,t),Wt,Pn);return i.needsUpdate=!0,i.magFilter=vt,i.minFilter=vt,i.wrapS=Rn,i.wrapT=Rn,i.flipY=!1,i},Ce={direction:[-.5,.25,.5],color:[1,.75,.45],ambientColor:[.25,.4,.6],fillColor:[.35,.28,.5],rimColor:[1,.55,.25],intensity:1.35,ambientIntensity:.55,fillIntensity:.3,rimIntensity:.55,horizonFalloff:.7,exposure:1.15,sky:{zenithColor:[.12,.28,.56],horizonColor:[1,.55,.25],groundColor:[.25,.2,.25],sunGlowColor:[1,.45,.15],sunGlowIntensity:.6,sunGlowExponent:6,stars:{enabled:!1,density:.003,brightness:.6}},disc:{size:35,distance:180,coreColor:[1,.98,.9],glowColor:[1,.55,.15],coreIntensity:2.8,glowIntensity:3.5,softness:.25},fog:{color:[.85,.6,.4],density:2e-4,heightFalloff:.001},shadow:{enabled:!0,mapSize:2048,bias:5e-4,normalBias:.02,intensity:.5,softness:3,frustumSize:100},postProcess:{enabled:!1,ao:{enabled:!0,intensity:.5,radius:.5,samples:16},bloom:{enabled:!1,threshold:.8,intensity:.4,radius:.6},godRays:{enabled:!1,intensity:.4,decay:.95,density:.8,samples:60}},emissive:{range:16,intensity:3.5,tint:[1,.85,.6]}};function Oh(n){var t,i,r,s,a,o,c,l,u,h,d,f,g,_,m,p,w,x,S,C,A,E,I,M,v,D,V,U,z,L,H,K,X,Q,re,fe,be,Ie,Y,ae,ve,le,Ue,ie,N,ne,B,_e,me,Me,Te,Pe,Ke,P,b,G,j,te,se;const e=vi((n==null?void 0:n.direction)??En(...Ce.direction));return uy(e)<1e-5&&hy(e,0,1,0),ud(e,e),{direction:e,color:(n==null?void 0:n.color)??Ce.color,ambientColor:(n==null?void 0:n.ambientColor)??Ce.ambientColor,fillColor:(n==null?void 0:n.fillColor)??Ce.fillColor,rimColor:(n==null?void 0:n.rimColor)??Ce.rimColor,intensity:(n==null?void 0:n.intensity)??Ce.intensity,ambientIntensity:(n==null?void 0:n.ambientIntensity)??Ce.ambientIntensity,fillIntensity:(n==null?void 0:n.fillIntensity)??Ce.fillIntensity,rimIntensity:(n==null?void 0:n.rimIntensity)??Ce.rimIntensity,horizonFalloff:(n==null?void 0:n.horizonFalloff)??Ce.horizonFalloff,exposure:(n==null?void 0:n.exposure)??Ce.exposure,sky:{zenithColor:((t=n==null?void 0:n.sky)==null?void 0:t.zenithColor)??Ce.sky.zenithColor,horizonColor:((i=n==null?void 0:n.sky)==null?void 0:i.horizonColor)??Ce.sky.horizonColor,groundColor:((r=n==null?void 0:n.sky)==null?void 0:r.groundColor)??Ce.sky.groundColor,sunGlowColor:((s=n==null?void 0:n.sky)==null?void 0:s.sunGlowColor)??Ce.sky.sunGlowColor,sunGlowIntensity:((a=n==null?void 0:n.sky)==null?void 0:a.sunGlowIntensity)??Ce.sky.sunGlowIntensity,sunGlowExponent:((o=n==null?void 0:n.sky)==null?void 0:o.sunGlowExponent)??Ce.sky.sunGlowExponent,stars:{enabled:((l=(c=n==null?void 0:n.sky)==null?void 0:c.stars)==null?void 0:l.enabled)??Ce.sky.stars.enabled,density:((h=(u=n==null?void 0:n.sky)==null?void 0:u.stars)==null?void 0:h.density)??Ce.sky.stars.density,brightness:((f=(d=n==null?void 0:n.sky)==null?void 0:d.stars)==null?void 0:f.brightness)??Ce.sky.stars.brightness}},disc:{size:((g=n==null?void 0:n.disc)==null?void 0:g.size)??Ce.disc.size,distance:((_=n==null?void 0:n.disc)==null?void 0:_.distance)??Ce.disc.distance,coreColor:((m=n==null?void 0:n.disc)==null?void 0:m.coreColor)??Ce.disc.coreColor,glowColor:((p=n==null?void 0:n.disc)==null?void 0:p.glowColor)??Ce.disc.glowColor,coreIntensity:((w=n==null?void 0:n.disc)==null?void 0:w.coreIntensity)??Ce.disc.coreIntensity,glowIntensity:((x=n==null?void 0:n.disc)==null?void 0:x.glowIntensity)??Ce.disc.glowIntensity,softness:((S=n==null?void 0:n.disc)==null?void 0:S.softness)??Ce.disc.softness},fog:{color:((C=n==null?void 0:n.fog)==null?void 0:C.color)??Ce.fog.color,density:((A=n==null?void 0:n.fog)==null?void 0:A.density)??Ce.fog.density,heightFalloff:((E=n==null?void 0:n.fog)==null?void 0:E.heightFalloff)??Ce.fog.heightFalloff},shadow:{enabled:((I=n==null?void 0:n.shadow)==null?void 0:I.enabled)??Ce.shadow.enabled,mapSize:((M=n==null?void 0:n.shadow)==null?void 0:M.mapSize)??Ce.shadow.mapSize,bias:((v=n==null?void 0:n.shadow)==null?void 0:v.bias)??Ce.shadow.bias,normalBias:((D=n==null?void 0:n.shadow)==null?void 0:D.normalBias)??Ce.shadow.normalBias,intensity:((V=n==null?void 0:n.shadow)==null?void 0:V.intensity)??Ce.shadow.intensity,softness:((U=n==null?void 0:n.shadow)==null?void 0:U.softness)??Ce.shadow.softness,frustumSize:((z=n==null?void 0:n.shadow)==null?void 0:z.frustumSize)??Ce.shadow.frustumSize},postProcess:{enabled:((L=n==null?void 0:n.postProcess)==null?void 0:L.enabled)??Ce.postProcess.enabled,ao:{enabled:((K=(H=n==null?void 0:n.postProcess)==null?void 0:H.ao)==null?void 0:K.enabled)??Ce.postProcess.ao.enabled,intensity:((Q=(X=n==null?void 0:n.postProcess)==null?void 0:X.ao)==null?void 0:Q.intensity)??Ce.postProcess.ao.intensity,radius:((fe=(re=n==null?void 0:n.postProcess)==null?void 0:re.ao)==null?void 0:fe.radius)??Ce.postProcess.ao.radius,samples:((Ie=(be=n==null?void 0:n.postProcess)==null?void 0:be.ao)==null?void 0:Ie.samples)??Ce.postProcess.ao.samples},bloom:{enabled:((ae=(Y=n==null?void 0:n.postProcess)==null?void 0:Y.bloom)==null?void 0:ae.enabled)??Ce.postProcess.bloom.enabled,threshold:((le=(ve=n==null?void 0:n.postProcess)==null?void 0:ve.bloom)==null?void 0:le.threshold)??Ce.postProcess.bloom.threshold,intensity:((ie=(Ue=n==null?void 0:n.postProcess)==null?void 0:Ue.bloom)==null?void 0:ie.intensity)??Ce.postProcess.bloom.intensity,radius:((ne=(N=n==null?void 0:n.postProcess)==null?void 0:N.bloom)==null?void 0:ne.radius)??Ce.postProcess.bloom.radius},godRays:{enabled:((_e=(B=n==null?void 0:n.postProcess)==null?void 0:B.godRays)==null?void 0:_e.enabled)??Ce.postProcess.godRays.enabled,intensity:((Me=(me=n==null?void 0:n.postProcess)==null?void 0:me.godRays)==null?void 0:Me.intensity)??Ce.postProcess.godRays.intensity,decay:((Pe=(Te=n==null?void 0:n.postProcess)==null?void 0:Te.godRays)==null?void 0:Pe.decay)??Ce.postProcess.godRays.decay,density:((P=(Ke=n==null?void 0:n.postProcess)==null?void 0:Ke.godRays)==null?void 0:P.density)??Ce.postProcess.godRays.density,samples:((G=(b=n==null?void 0:n.postProcess)==null?void 0:b.godRays)==null?void 0:G.samples)??Ce.postProcess.godRays.samples}},emissive:{range:((j=n==null?void 0:n.emissive)==null?void 0:j.range)??Ce.emissive.range,intensity:((te=n==null?void 0:n.emissive)==null?void 0:te.intensity)??Ce.emissive.intensity,tint:((se=n==null?void 0:n.emissive)==null?void 0:se.tint)??Ce.emissive.tint}}}function kh(n){var d,f;const e=new In;if(n.quads.length===0)return e;const t=[],i=[],r=[],s=[],a=[],o=[],c=[],l=[];let u=0;for(const g of n.quads){const _=g.vertices();for(const m of _){t.push(m.pos.x,m.pos.y,m.pos.z);const p=m.normal??g.normal();i.push(p.x,p.y,p.z),r.push(((d=m.texture)==null?void 0:d[0])??0,((f=m.texture)==null?void 0:f[1])??0),m.textureLimit?a.push(m.textureLimit[0],m.textureLimit[1],m.textureLimit[2],m.textureLimit[3]):a.push(0,0,0,0);const w=m.color??[1,1,1];s.push(w[0],w[1],w[2]);const x=m.blockPos??m.pos;o.push(x.x,x.y,x.z),c.push(m.emissive??0)}l.push(u,u+1,u+2,u,u+2,u+3),u+=4}e.setAttribute("position",new It(t,3)),e.setAttribute("normal",new It(i,3)),e.setAttribute("uv",new It(r,2)),e.setAttribute("texLimit",new It(a,4)),e.setAttribute("color",new It(s,3)),e.setAttribute("blockPos",new It(o,3)),e.setAttribute("emissive",new It(c,1));const h=t.length/3>65536?new Uint32Array(l):new Uint16Array(l);return e.setIndex(new Tt(h,1)),e.computeBoundingSphere(),e}function yl(n){const e=new In;if(n.lines.length===0)return e;const t=[],i=[];for(const r of n.lines)r.vertices().forEach(s=>{t.push(s.pos.x,s.pos.y,s.pos.z);const a=s.color??[1,1,1];i.push(a[0],a[1],a[2])});return e.setAttribute("position",new It(t,3)),e.setAttribute("color",new It(i,3)),e.computeBoundingSphere(),e}let Cy=class{constructor(e,t,i,r){R(this,"structure");R(this,"resources");R(this,"renderer");R(this,"structureScene");R(this,"skyScene");R(this,"overlayScene");R(this,"camera");R(this,"skyCamera");R(this,"atlasTexture");R(this,"opaqueMaterial");R(this,"transparentMaterial");R(this,"coloredMaterial");R(this,"lineMaterial");R(this,"skyMaterial");R(this,"shadowDepthMaterial");R(this,"shadowMap",null);R(this,"emissiveLightDataTex",null);R(this,"emissiveLightColorTex",null);R(this,"shadowCamera");R(this,"sunlight");R(this,"skyMesh");R(this,"sunDisc");R(this,"shadowDirty",!0);R(this,"emissiveSelectionDirty",!0);R(this,"lastEmissiveCameraPos",null);R(this,"lastEmissiveLightCount",0);R(this,"sceneTarget",null);R(this,"depthTarget",null);R(this,"bloomBrightTarget",null);R(this,"bloomBlurTarget1",null);R(this,"bloomBlurTarget2",null);R(this,"godRaysTarget",null);R(this,"aoTarget",null);R(this,"postProcessQuad",null);R(this,"ssaoMaterial",null);R(this,"bloomBrightMaterial",null);R(this,"bloomBlurMaterial",null);R(this,"godRaysMaterial",null);R(this,"compositeMaterial",null);R(this,"chunkBuilder");R(this,"asyncBuild");R(this,"asyncChunkBuildTimeMs");R(this,"buildPromise",null);R(this,"buildToken",0);R(this,"chunkMeshes",[]);R(this,"grid");R(this,"invisibleBlocks");R(this,"outline");R(this,"chunkSize");R(this,"targetCenter");R(this,"cameraPosition");R(this,"cameraTarget");R(this,"cameraUp");R(this,"cameraViewMatrix");R(this,"useInvisibleBlocks");R(this,"drawDistance");R(this,"pixelSize");R(this,"maxEmissiveTextureSize");R(this,"debug");var o,c;this.structure=t,this.resources=i,this.renderer=new Gv({canvas:e,alpha:!1,antialias:(r==null?void 0:r.antialias)??!0,preserveDrawingBuffer:(r==null?void 0:r.preserveDrawingBuffer)??!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.maxEmissiveTextureSize=this.renderer.capabilities.maxTextureSize??8192,this.structureScene=new Jo,this.skyScene=new Jo,this.overlayScene=new Jo,this.camera=new un(70,(e.clientWidth||1)/(e.clientHeight||1),.1,2e3),this.skyCamera=new za(-1,1,1,-1,0,1),this.shadowCamera=new za(-50,50,50,-50,.1,200);const s=this.renderer.getContext(),a=(r==null?void 0:r.chunkSize)??16;if(this.chunkSize=typeof a=="number"?[a,a,a]:a,this.targetCenter=En((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.cameraPosition=Qa(),this.cameraTarget=vi(this.targetCenter),this.cameraUp=En(0,1,0),this.cameraViewMatrix=nt(),this.resetCamera(),this.asyncBuild=(r==null?void 0:r.asyncBuild)??!1,this.asyncChunkBuildTimeMs=(r==null?void 0:r.asyncChunkBuildTimeMs)??8,this.chunkBuilder=new md(s,t,i,a,!this.asyncBuild),this.useInvisibleBlocks=(r==null?void 0:r.useInvisibleBlockBuffer)??!1,this.drawDistance=r==null?void 0:r.drawDistance,this.sunlight=Oh(r==null?void 0:r.sunlight),this.debug=(r==null?void 0:r.debug)??!1,this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas()),this.pixelSize=((c=(o=this.resources).getPixelSize)==null?void 0:c.call(o))??0,this.emissiveLightDataTex=Ca(new Float32Array([0,0,0,0]),1),this.emissiveLightColorTex=Ca(new Float32Array([0,0,0,0]),1),this.shadowDepthMaterial=this.createShadowDepthMaterial(),this.initShadowMap(),this.opaqueMaterial=this.createStructureMaterial(!1),this.transparentMaterial=this.createStructureMaterial(!0),this.coloredMaterial=this.createColoredMaterial(),this.lineMaterial=new Sf({vertexColors:!0,transparent:!0,depthTest:!0}),this.skyMaterial=this.createSkyMaterial(),this.debug){const l=this.resources.getTextureAtlas(),h=Array.from(l.data.slice(3,3+400*4)).filter((d,f)=>f%4===0).filter(d=>d!==0).length;console.log("[lodestone] atlas info",{width:l.width,height:l.height,alphaSampleNonZero:h})}this.asyncBuild?this.rebuildChunksAsync():this.rebuildChunkObjects(),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc),this.skyMesh=this.createSkyMesh(),this.skyMesh&&this.skyScene.add(this.skyMesh),this.initPostProcessing(e.width||800,e.height||600)}setViewport(e,t,i,r,s=1){this.renderer.setPixelRatio(s),this.renderer.setSize(i,r,!1),this.renderer.setScissorTest(!1),this.renderer.setViewport(e,t,i,r),this.camera.aspect=i/Math.max(r,1),this.camera.updateProjectionMatrix();const a=this.renderer.getDrawingBufferSize(new Re);this.resizePostProcessTargets(Math.max(1,Math.floor(a.x)),Math.max(1,Math.floor(a.y)))}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}setCamera(e){return e.position&&ba(this.cameraPosition,e.position),e.target&&ba(this.cameraTarget,e.target),e.up&&ba(this.cameraUp,e.up),e.fov!==void 0&&this.setFOV(e.fov),this.updateStoredViewMatrix(),this}getCamera(){return{position:vi(this.cameraPosition),target:vi(this.cameraTarget),up:vi(this.cameraUp),fov:this.camera.fov}}getViewMatrix(){return ey(this.cameraViewMatrix)}lookAt(e,t,i){return this.setCamera({position:e,target:t,up:i})}setCameraPosition(e){return this.setCamera({position:e})}setCameraTarget(e){return this.setCamera({target:e})}resetCamera(){const e=this.structure.getSize(),t=Math.max(8,Math.max(e[0],e[1],e[2])*1.8);return this.setCamera({position:En(this.targetCenter[0],this.targetCenter[1]+t*.35,this.targetCenter[2]+t),target:this.targetCenter,up:En(0,1,0)})}setStructure(e){this.structure=e,this.targetCenter=En((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.setCameraTarget(this.targetCenter),this.asyncBuild?(this.chunkBuilder.setStructure(e,{rebuild:!1}),this.rebuildOverlay(),this.rebuildChunksAsync()):(this.chunkBuilder.setStructure(e),this.rebuildChunkObjects(),this.rebuildOverlay()),this.shadowDirty=!0}updateStructureBuffers(e){if(this.asyncBuild){this.updateStructureBuffersAsync(e);return}this.chunkBuilder.updateStructureBuffers(e),this.rebuildChunkObjects(),this.rebuildOverlay(),this.shadowDirty=!0}async updateStructureBuffersAsync(e){this.rebuildOverlay(),await this.rebuildChunksAsync(e)}whenReady(){return this.buildPromise??Promise.resolve()}drawStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.updateSkyUniforms(e),this.renderShadowPass(),!this.renderPostProcessing(e)&&(this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.structureScene.overrideMaterial=null,this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera))}drawColoredStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.renderer.clear(),this.structureScene.overrideMaterial=this.coloredMaterial,this.renderer.render(this.structureScene,this.camera),this.structureScene.overrideMaterial=null}drawGrid(e=this.cameraViewMatrix){this.grid&&(this.prepareCamera(e),this.positionSunDisc(e),this.setOverlayVisibility({grid:!0,invisible:!1,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawInvisibleBlocks(e=this.cameraViewMatrix){!this.useInvisibleBlocks||!this.invisibleBlocks||(this.prepareCamera(e),this.setOverlayVisibility({grid:!1,invisible:!0,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawOutline(e,t){const i=t?e:this.cameraViewMatrix,r=t??e;this.outline||(this.outline=this.createOutline(),this.overlayScene.add(this.outline)),this.outline.position.set(r[0],r[1],r[2]),this.prepareCamera(i),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!0}),this.renderer.render(this.overlayScene,this.camera)}dispose(){var e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m;this.buildToken+=1,this.chunkBuilder.cancelPendingBuilds(),this.chunkMeshes.forEach(p=>{this.structureScene.remove(p),p.geometry.dispose()}),this.chunkMeshes=[],this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose(),this.grid=void 0),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose(),this.invisibleBlocks=void 0),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.skyMesh&&(this.structureScene.remove(this.skyMesh),this.skyMesh.geometry.dispose(),this.skyMesh=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),(e=this.sunDisc.material)==null||e.dispose(),this.sunDisc=void 0),this.postProcessQuad&&(this.postProcessQuad.geometry.dispose(),this.postProcessQuad=null),this.structureScene.clear(),this.overlayScene.clear(),this.atlasTexture.dispose(),this.opaqueMaterial.dispose(),this.transparentMaterial.dispose(),this.coloredMaterial.dispose(),this.lineMaterial.dispose(),this.skyMaterial.dispose(),this.shadowDepthMaterial.dispose(),(t=this.shadowMap)==null||t.dispose(),(i=this.sceneTarget)==null||i.dispose(),(r=this.depthTarget)==null||r.dispose(),(s=this.bloomBrightTarget)==null||s.dispose(),(a=this.bloomBlurTarget1)==null||a.dispose(),(o=this.bloomBlurTarget2)==null||o.dispose(),(c=this.godRaysTarget)==null||c.dispose(),(l=this.aoTarget)==null||l.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(h=this.bloomBrightMaterial)==null||h.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(f=this.godRaysMaterial)==null||f.dispose(),(g=this.compositeMaterial)==null||g.dispose(),(_=this.emissiveLightDataTex)==null||_.dispose(),(m=this.emissiveLightColorTex)==null||m.dispose(),this.renderer.dispose()}prepareCamera(e){const t=new ct().fromArray(e),i=new ct().copy(t).invert();this.camera.position.setFromMatrixPosition(i),this.camera.quaternion.setFromRotationMatrix(i),this.camera.updateMatrixWorld(!0);const r=this.getCameraPosition(e)??En(0,0,10);ba(this.cameraPosition,r),this.camera.updateMatrixWorld(!0),this.drawDistance?this.applyDrawDistance(r,this.drawDistance):this.chunkMeshes.forEach(s=>s.visible=!0),this.updateEmissiveLightsForCamera(r)}rebuildChunkObjects(){this.chunkMeshes.forEach(i=>{this.structureScene.remove(i),i.geometry.dispose()}),this.chunkMeshes=[],this.chunkBuilder.getMeshEntries().forEach((i,r)=>{var c,l;if(i.mesh.isEmpty())return;const s=kh(i.mesh),a=i.transparent?this.transparentMaterial:this.opaqueMaterial,o=new Xt(s,a);o.renderOrder=i.transparent?1:0,o.userData.origin=i.origin,this.structureScene.add(o),this.chunkMeshes.push(o),this.debug&&r===0&&console.log("[lodestone] chunk geometry sample",{vertices:((c=s.getAttribute("position"))==null?void 0:c.count)??0,indices:((l=s.getIndex())==null?void 0:l.count)??0,transparent:i.transparent})});const t=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(t),this.emissiveSelectionDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks",{count:this.chunkMeshes.length})}async rebuildChunksAsync(e){const t=++this.buildToken,i=(async()=>{await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:e,timeSliceMs:this.asyncChunkBuildTimeMs}),t===this.buildToken&&await this.rebuildChunkObjectsAsync(t)})();return this.buildPromise=i,i}async rebuildChunkObjectsAsync(e){var s,a;this.chunkMeshes.forEach(o=>{this.structureScene.remove(o),o.geometry.dispose()}),this.chunkMeshes=[];const t=this.chunkBuilder.getMeshEntries();let i=this.now();for(let o=0;o<t.length;o++){if(e!==this.buildToken)return;const c=t[o];if(c.mesh.isEmpty())continue;const l=kh(c.mesh),u=c.transparent?this.transparentMaterial:this.opaqueMaterial,h=new Xt(l,u);h.renderOrder=c.transparent?1:0,h.userData.origin=c.origin,this.structureScene.add(h),this.chunkMeshes.push(h),this.debug&&o===0&&console.log("[lodestone] chunk geometry sample",{vertices:((s=l.getAttribute("position"))==null?void 0:s.count)??0,indices:((a=l.getIndex())==null?void 0:a.count)??0,transparent:c.transparent}),!(o&31)&&this.now()-i>=this.asyncChunkBuildTimeMs&&(await this.yieldControl(),i=this.now())}if(e!==this.buildToken)return;const r=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(r),this.emissiveSelectionDirty=!0,this.shadowDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks (async)",{count:this.chunkMeshes.length})}updateEmissiveLightUniforms(e){var h,d;const t=Math.min(e.length,Sl),i=this.maxEmissiveTextureSize||8192,r=Math.min(i,Math.max(1,Math.ceil(Math.sqrt(Math.max(1,t))))),s=Math.min(i,Math.max(1,Math.ceil(t/r))),a=r*s,o=Math.min(t,a),c=new Float32Array(r*s*4),l=new Float32Array(r*s*4);for(let f=0;f<o;f++){const g=e[f];c[f*4+0]=g.position[0],c[f*4+1]=g.position[1],c[f*4+2]=g.position[2],c[f*4+3]=g.intensity,l[f*4+0]=g.color[0],l[f*4+1]=g.color[1],l[f*4+2]=g.color[2],l[f*4+3]=1}(h=this.emissiveLightDataTex)==null||h.dispose(),(d=this.emissiveLightColorTex)==null||d.dispose(),this.emissiveLightDataTex=Ca(c,r,s),this.emissiveLightColorTex=Ca(l,r,s);const u=f=>{const g=f.uniforms;g&&(g.emissiveLightData&&(g.emissiveLightData.value=this.emissiveLightDataTex),g.emissiveLightColors&&(g.emissiveLightColors.value=this.emissiveLightColorTex),g.emissiveLightCount&&(g.emissiveLightCount.value=o),g.emissiveLightTexSize&&g.emissiveLightTexSize.value instanceof Re&&g.emissiveLightTexSize.value.set(r,s))};u(this.opaqueMaterial),u(this.transparentMaterial),this.debug&&o>0&&console.log("[lodestone] emissive lights",{count:o})}updateEmissiveLightsForCamera(e){const t=this.chunkBuilder.getEmissiveLights();if(t.length===0){(this.emissiveSelectionDirty||this.lastEmissiveLightCount!==0)&&(this.updateEmissiveLightUniforms([]),this.lastEmissiveLightCount=0,this.emissiveSelectionDirty=!1),this.lastEmissiveCameraPos=vi(e);return}const i=!this.lastEmissiveCameraPos||this.cameraMovedEnough(e,this.lastEmissiveCameraPos);if(!this.emissiveSelectionDirty&&!i)return;const r=this.drawDistance?Math.pow(this.drawDistance+this.sunlight.emissive.range,2):void 0,s=this.pickNearestEmissiveLights(t,e,Sl,r);this.updateEmissiveLightUniforms(s),this.lastEmissiveLightCount=s.length,this.emissiveSelectionDirty=!1,this.lastEmissiveCameraPos=vi(e)}cameraMovedEnough(e,t){const i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return i*i+r*r+s*s>=Ay}pickNearestEmissiveLights(e,t,i,r){if(e.length<=i&&r===void 0)return e;const s=[];let a=-1,o=-1;for(const c of e){const l=c.position[0]-t[0],u=c.position[1]-t[1],h=c.position[2]-t[2],d=l*l+u*u+h*h;if(!(r!==void 0&&d>r)){if(s.length<i){s.push({light:c,distSq:d}),d>o&&(o=d,a=s.length-1);continue}if(!(d>=o)){s[a]={light:c,distSq:d},o=s[0].distSq,a=0;for(let f=1;f<s.length;f++)s[f].distSq>o&&(o=s[f].distSq,a=f)}}}return s.sort((c,l)=>c.distSq-l.distSq),s.map(c=>c.light)}rebuildOverlay(){this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose()),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose()),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),this.sunDisc.material.dispose()),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc)}createStructureMaterial(e){return new tl({name:e?"lodestone-structure-transparent":"lodestone-structure-opaque",vertexShader:`
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
				#define MAX_EMISSIVE_LIGHTS ${Sl}
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
			`,uniforms:this.createStructureUniforms(),transparent:e,depthWrite:!e,depthTest:!0,alphaTest:.01,side:vn})}createStructureUniforms(){var i;const e=r=>new je(r[0],r[1],r[2]),t=new O(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]);return t.lengthSq()===0&&t.set(0,1,0),t.normalize(),{atlas:{value:this.atlasTexture},pixelSize:{value:this.pixelSize},sunDirection:{value:t},sunColor:{value:e(this.sunlight.color)},ambientColor:{value:e(this.sunlight.ambientColor)},fillColor:{value:e(this.sunlight.fillColor)},rimColor:{value:e(this.sunlight.rimColor)},sunIntensity:{value:this.sunlight.intensity},ambientIntensity:{value:this.sunlight.ambientIntensity},fillIntensity:{value:this.sunlight.fillIntensity},rimIntensity:{value:this.sunlight.rimIntensity},horizonFalloff:{value:this.sunlight.horizonFalloff},exposure:{value:this.sunlight.exposure},fogColor:{value:e(this.sunlight.fog.color)},fogDensity:{value:this.sunlight.fog.density},fogHeightFalloff:{value:this.sunlight.fog.heightFalloff},shadowMap:{value:((i=this.shadowMap)==null?void 0:i.texture)??null},shadowMatrix:{value:new ct},shadowBias:{value:this.sunlight.shadow.bias},shadowNormalBias:{value:this.sunlight.shadow.normalBias},shadowIntensity:{value:this.sunlight.shadow.intensity},shadowSoftness:{value:this.sunlight.shadow.softness},shadowMapSize:{value:new Re(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize)},shadowEnabled:{value:this.sunlight.shadow.enabled},emissiveLightData:{value:this.emissiveLightDataTex},emissiveLightColors:{value:this.emissiveLightColorTex},emissiveLightCount:{value:0},emissiveLightTexSize:{value:new Re(1,1)},emissiveRange:{value:this.sunlight.emissive.range},emissiveGlobalIntensity:{value:this.sunlight.emissive.intensity},emissiveTint:{value:e(this.sunlight.emissive.tint)}}}setSunlight(e){this.sunlight=Oh(e),this.syncShadowResources(),this.syncPostProcessingResources(),this.applySunlightUniforms(this.opaqueMaterial),this.applySunlightUniforms(this.transparentMaterial),this.applySkyUniforms(),this.applySunDiscUniforms(),this.applyPostProcessUniforms(),this.shadowDirty=!0,this.emissiveSelectionDirty=!0}syncShadowResources(){var e,t;if(this.sunlight.shadow.enabled){const i=this.sunlight.shadow.mapSize;(!this.shadowMap||this.shadowMap.width!==i||this.shadowMap.height!==i)&&((e=this.shadowMap)==null||e.dispose(),this.shadowMap=null,this.initShadowMap(),this.shadowDirty=!0);return}(t=this.shadowMap)==null||t.dispose(),this.shadowMap=null,this.shadowDirty=!0}syncPostProcessingResources(){var t,i,r,s,a,o,c,l,u,h,d,f,g;if(!this.sunlight.postProcess.enabled||this.sceneTarget&&this.postProcessQuad&&this.ssaoMaterial&&this.bloomBrightMaterial&&this.bloomBlurMaterial&&this.godRaysMaterial&&this.compositeMaterial)return;(t=this.sceneTarget)==null||t.dispose(),(i=this.depthTarget)==null||i.dispose(),(r=this.bloomBrightTarget)==null||r.dispose(),(s=this.bloomBlurTarget1)==null||s.dispose(),(a=this.bloomBlurTarget2)==null||a.dispose(),(o=this.godRaysTarget)==null||o.dispose(),(c=this.aoTarget)==null||c.dispose(),(l=this.postProcessQuad)==null||l.geometry.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(h=this.bloomBrightMaterial)==null||h.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(f=this.godRaysMaterial)==null||f.dispose(),(g=this.compositeMaterial)==null||g.dispose(),this.sceneTarget=null,this.depthTarget=null,this.bloomBrightTarget=null,this.bloomBlurTarget1=null,this.bloomBlurTarget2=null,this.godRaysTarget=null,this.aoTarget=null,this.postProcessQuad=null,this.ssaoMaterial=null,this.bloomBrightMaterial=null,this.bloomBlurMaterial=null,this.godRaysMaterial=null,this.compositeMaterial=null;const e=this.renderer.getSize(new Re);this.initPostProcessing(Math.max(1,e.x),Math.max(1,e.y))}applyPostProcessUniforms(){var a,o,c,l;const e=this.sunlight.postProcess,t=(a=this.ssaoMaterial)==null?void 0:a.uniforms;t!=null&&t.aoRadius&&(t.aoRadius.value=e.ao.radius),t!=null&&t.aoIntensity&&(t.aoIntensity.value=e.ao.intensity);const i=(o=this.bloomBrightMaterial)==null?void 0:o.uniforms;i!=null&&i.threshold&&(i.threshold.value=e.bloom.threshold);const r=(c=this.compositeMaterial)==null?void 0:c.uniforms;r!=null&&r.bloomIntensity&&(r.bloomIntensity.value=e.bloom.intensity);const s=(l=this.godRaysMaterial)==null?void 0:l.uniforms;s!=null&&s.intensity&&(s.intensity.value=e.godRays.intensity),s!=null&&s.decay&&(s.decay.value=e.godRays.decay),s!=null&&s.density&&(s.density.value=e.godRays.density),s!=null&&s.numSamples&&(s.numSamples.value=e.godRays.samples)}applySunDiscUniforms(){if(!this.sunDisc)return;const t=this.sunDisc.material.uniforms;t&&(t.coreColor.value.setRGB(this.sunlight.disc.coreColor[0],this.sunlight.disc.coreColor[1],this.sunlight.disc.coreColor[2]),t.glowColor.value.setRGB(this.sunlight.disc.glowColor[0],this.sunlight.disc.glowColor[1],this.sunlight.disc.glowColor[2]),t.coreIntensity.value=this.sunlight.disc.coreIntensity,t.glowIntensity.value=this.sunlight.disc.glowIntensity,t.softness.value=this.sunlight.disc.softness)}applySkyUniforms(){var r;const e=this.skyMaterial.uniforms;if(!e)return;const t=(s,a)=>{const o=e[s];(o==null?void 0:o.value)instanceof je&&o.value.setRGB(a[0],a[1],a[2])},i=(r=e.sunDirection)==null?void 0:r.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),t("zenithColor",this.sunlight.sky.zenithColor),t("horizonColor",this.sunlight.sky.horizonColor),t("groundColor",this.sunlight.sky.groundColor),t("sunGlowColor",this.sunlight.sky.sunGlowColor),e.sunGlowIntensity&&(e.sunGlowIntensity.value=this.sunlight.sky.sunGlowIntensity),e.sunGlowExponent&&(e.sunGlowExponent.value=this.sunlight.sky.sunGlowExponent),e.starsEnabled&&(e.starsEnabled.value=this.sunlight.sky.stars.enabled),e.starsDensity&&(e.starsDensity.value=this.sunlight.sky.stars.density),e.starsBrightness&&(e.starsBrightness.value=this.sunlight.sky.stars.brightness)}applySunlightUniforms(e){var s,a,o;const t=e.uniforms;if(!t)return;const i=(c,l)=>{const u=t[c];(u==null?void 0:u.value)instanceof je&&u.value.setRGB(l[0],l[1],l[2])},r=(s=t.sunDirection)==null?void 0:s.value;r&&r.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i("sunColor",this.sunlight.color),i("ambientColor",this.sunlight.ambientColor),i("fillColor",this.sunlight.fillColor),i("rimColor",this.sunlight.rimColor),i("fogColor",this.sunlight.fog.color),t.sunIntensity&&(t.sunIntensity.value=this.sunlight.intensity),t.ambientIntensity&&(t.ambientIntensity.value=this.sunlight.ambientIntensity),t.fillIntensity&&(t.fillIntensity.value=this.sunlight.fillIntensity),t.rimIntensity&&(t.rimIntensity.value=this.sunlight.rimIntensity),t.horizonFalloff&&(t.horizonFalloff.value=this.sunlight.horizonFalloff),t.exposure&&(t.exposure.value=this.sunlight.exposure),t.fogDensity&&(t.fogDensity.value=this.sunlight.fog.density),t.fogHeightFalloff&&(t.fogHeightFalloff.value=this.sunlight.fog.heightFalloff),t.shadowEnabled&&(t.shadowEnabled.value=this.sunlight.shadow.enabled),t.shadowBias&&(t.shadowBias.value=this.sunlight.shadow.bias),t.shadowNormalBias&&(t.shadowNormalBias.value=this.sunlight.shadow.normalBias),t.shadowIntensity&&(t.shadowIntensity.value=this.sunlight.shadow.intensity),t.shadowSoftness&&(t.shadowSoftness.value=this.sunlight.shadow.softness),((a=t.shadowMapSize)==null?void 0:a.value)instanceof Re&&t.shadowMapSize.value.set(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize),t.shadowMap&&(t.shadowMap.value=((o=this.shadowMap)==null?void 0:o.texture)??null),t.emissiveRange&&(t.emissiveRange.value=this.sunlight.emissive.range),t.emissiveGlobalIntensity&&(t.emissiveGlobalIntensity.value=this.sunlight.emissive.intensity),i("emissiveTint",this.sunlight.emissive.tint)}createColoredMaterial(){return new tl({name:"lodestone-structure-colored",vertexShader:`
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
			`,transparent:!1,depthWrite:!0,depthTest:!0,side:vn})}createGrid(){const[e,t,i]=this.structure.getSize(),r=new st;r.addLine(0,0,0,e,0,0,[1,0,0]),r.addLine(0,0,0,0,0,i,[0,0,1]);const s=[.8,.8,.8];r.addLine(0,0,0,0,t,0,s),r.addLine(e,0,0,e,t,0,s),r.addLine(0,0,i,0,t,i,s),r.addLine(e,0,i,e,t,i,s),r.addLine(0,t,0,0,t,i,s),r.addLine(e,t,0,e,t,i,s),r.addLine(0,t,0,e,t,0,s),r.addLine(0,t,i,e,t,i,s);const a=128,o=Math.max(1,Math.ceil(e/a)),c=Math.max(1,Math.ceil(i/a));for(let u=o;u<=e;u+=o)r.addLine(u,0,0,u,0,i,s);for(let u=c;u<=i;u+=c)r.addLine(0,0,u,e,0,u,s);const l=yl(r);return l.attributes.position?new el(l,this.lineMaterial):void 0}createOutline(){const e=new st;e.addLineCube(0,0,0,1,1,1,[1,1,1]);const t=yl(e);return new el(t,this.lineMaterial)}createInvisibleBlocks(){const e=new st;if(!this.useInvisibleBlocks)return;const t=this.structure.getSize(),i=t[0]*t[1]*t[2];if(i>2e5){this.debug&&console.warn("[lodestone] Skipping invisible blocks buffer for large structure",{volume:i});return}for(let s=0;s<t[0];s+=1)for(let a=0;a<t[1];a+=1)for(let o=0;o<t[2];o+=1){const c=this.structure.getBlock([s,a,o]);c!==void 0&&(c===null?e.addLineCube(s+.4375,a+.4375,o+.4375,s+.5625,a+.5625,o+.5625,[1,.25,.25]):c.state.is(Ai.AIR)?e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,.5,1]):c.state.is(new Ai("cave_air"))&&e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,1,.5]))}const r=yl(e);return r.attributes.position?new el(r,this.lineMaterial):void 0}setOverlayVisibility(e){this.grid&&(this.grid.visible=e.grid),this.invisibleBlocks&&(this.invisibleBlocks.visible=e.invisible),this.outline&&(this.outline.visible=e.outline),this.sunDisc&&(this.sunDisc.visible=e.sunDisc??!1)}createAtlasTexture(e){const t=new xf(e.data,e.width,e.height,Wt);return t.magFilter=vt,t.minFilter=vt,t.wrapS=Rn,t.wrapT=Rn,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}getCameraPosition(e){const t=nt();return iy(t,e)?En(t[12],t[13],t[14]):null}updateStoredViewMatrix(){cy(this.cameraViewMatrix,this.cameraPosition,this.cameraTarget,this.cameraUp)}applyDrawDistance(e,t){const i=t*t;let r=!1;for(const s of this.chunkMeshes){const a=s.userData.origin;if(!a){s.visible||(s.visible=!0,r=!0);continue}const o=[a[0]+this.chunkSize[0]*.5,a[1]+this.chunkSize[1]*.5,a[2]+this.chunkSize[2]*.5],c=o[0]-e[0],l=o[1]-e[1],u=o[2]-e[2],h=c*c+l*l+u*u<=i;s.visible!==h&&(s.visible=h,r=!0)}r&&(this.shadowDirty=!0)}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}positionSunDisc(e){if(!this.sunDisc)return;const t=this.getCameraPosition(e)??En(0,0,10),i=vi(this.sunlight.direction);ud(i,i);const r=this.sunlight.disc.distance,s=Qa();fy(s,t,i,r),this.sunDisc.position.set(s[0],s[1],s[2]),this.sunDisc.scale.setScalar(this.sunlight.disc.size),this.sunDisc.lookAt(t[0],t[1],t[2])}createSunDisc(){const e=new sr(1,1,1,1),t=new Vt({name:"lodestone-sun-disc",transparent:!0,depthWrite:!1,depthTest:!0,side:Bn,uniforms:{coreColor:{value:new je(...this.sunlight.disc.coreColor)},glowColor:{value:new je(...this.sunlight.disc.glowColor)},coreIntensity:{value:this.sunlight.disc.coreIntensity},glowIntensity:{value:this.sunlight.disc.glowIntensity},softness:{value:this.sunlight.disc.softness}},vertexShader:`
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
			`}),i=new Xt(e,t);return i.renderOrder=10,i}createSkyMaterial(){return new Vt({name:"lodestone-sky",transparent:!1,depthWrite:!1,depthTest:!1,side:vn,uniforms:{sunDirection:{value:new O(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize()},zenithColor:{value:new je(...this.sunlight.sky.zenithColor)},horizonColor:{value:new je(...this.sunlight.sky.horizonColor)},groundColor:{value:new je(...this.sunlight.sky.groundColor)},sunGlowColor:{value:new je(...this.sunlight.sky.sunGlowColor)},sunGlowIntensity:{value:this.sunlight.sky.sunGlowIntensity},sunGlowExponent:{value:this.sunlight.sky.sunGlowExponent},invViewMatrix:{value:new ct},invProjectionMatrix:{value:new ct},starsEnabled:{value:this.sunlight.sky.stars.enabled},starsDensity:{value:this.sunlight.sky.stars.density},starsBrightness:{value:this.sunlight.sky.stars.brightness}},vertexShader:`
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
			`})}createSkyMesh(){const e=new sr(2,2,1,1),t=new Xt(e,this.skyMaterial);return t.frustumCulled=!1,t.renderOrder=-1e3,t}updateSkyUniforms(e){var a,o,c;const t=this.skyMaterial.uniforms,i=(a=t.sunDirection)==null?void 0:a.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize();const r=(o=t.invViewMatrix)==null?void 0:o.value,s=(c=t.invProjectionMatrix)==null?void 0:c.value;if(r){const l=new ct;l.fromArray(e),r.copy(l).invert()}s&&s.copy(this.camera.projectionMatrix).invert()}createShadowDepthMaterial(){return new tl({name:"lodestone-shadow-depth",vertexShader:`
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
			`,side:vn,depthTest:!0,depthWrite:!0})}initShadowMap(){if(!this.sunlight.shadow.enabled)return;const e=this.sunlight.shadow.mapSize;this.shadowMap=new Ln(e,e,{minFilter:vt,magFilter:vt,format:Wt,type:Pn})}updateShadowCamera(){const e=this.sunlight.shadow.frustumSize,t=e/2,i=new O(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),r=new O(this.targetCenter[0],this.targetCenter[1],this.targetCenter[2]),s=r.clone().add(i.clone().multiplyScalar(e));this.shadowCamera.left=-t,this.shadowCamera.right=t,this.shadowCamera.top=t,this.shadowCamera.bottom=-t,this.shadowCamera.near=.1,this.shadowCamera.far=e*2,this.shadowCamera.position.copy(s),this.shadowCamera.lookAt(r),this.shadowCamera.updateMatrixWorld(!0),this.shadowCamera.updateProjectionMatrix()}renderShadowPass(){if(!this.sunlight.shadow.enabled||!this.shadowMap||!this.shadowDirty)return;this.updateShadowCamera();const e=new ct;e.multiplyMatrices(this.shadowCamera.projectionMatrix,this.shadowCamera.matrixWorldInverse);const t=r=>{var a;const s=r.uniforms;s.shadowMatrix&&s.shadowMatrix.value.copy(e),s.shadowMap&&(s.shadowMap.value=((a=this.shadowMap)==null?void 0:a.texture)??null)};t(this.opaqueMaterial),t(this.transparentMaterial);const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.shadowMap),this.renderer.setClearColor(16777215,1),this.renderer.clear(),this.structureScene.overrideMaterial=this.shadowDepthMaterial,this.renderer.render(this.structureScene,this.shadowCamera),this.structureScene.overrideMaterial=null,this.renderer.setRenderTarget(i),this.renderer.setClearColor(0,1),this.shadowDirty=!1}initPostProcessing(e,t){if(!this.sunlight.postProcess.enabled)return;const i=(s,a,o=!1)=>new Ln(s,a,{minFilter:jt,magFilter:jt,format:Wt,type:Zr,depthBuffer:o});this.sceneTarget=new Ln(e,t,{minFilter:jt,magFilter:jt,format:Wt,type:Zr,depthBuffer:!0}),this.sceneTarget.depthTexture=new Ha(e,t),this.sceneTarget.depthTexture.format=Pi,this.sceneTarget.depthTexture.type=Bi,this.depthTarget=new Ln(e,t,{minFilter:vt,magFilter:vt,format:Wt,type:Pn,depthBuffer:!0}),this.aoTarget=i(e,t),this.bloomBrightTarget=i(e/2,t/2),this.bloomBlurTarget1=i(e/2,t/2),this.bloomBlurTarget2=i(e/2,t/2),this.godRaysTarget=i(e/2,t/2);const r=new sr(2,2);this.postProcessQuad=new Xt(r),this.postProcessQuad.frustumCulled=!1,this.ssaoMaterial=this.createSSAOMaterial(),this.bloomBrightMaterial=this.createBloomBrightMaterial(),this.bloomBlurMaterial=this.createBloomBlurMaterial(),this.godRaysMaterial=this.createGodRaysMaterial(),this.compositeMaterial=this.createCompositeMaterial()}resizePostProcessTargets(e,t){var i,r,s,a,o,c,l,u;this.sunlight.postProcess.enabled&&(e<=0||t<=0||((i=this.sceneTarget)==null||i.setSize(e,t),this.sceneTarget&&((r=this.sceneTarget.depthTexture)==null||r.dispose(),this.sceneTarget.depthTexture=new Ha(e,t),this.sceneTarget.depthTexture.format=Pi,this.sceneTarget.depthTexture.type=Bi),(s=this.depthTarget)==null||s.setSize(e,t),(a=this.aoTarget)==null||a.setSize(e,t),(o=this.bloomBrightTarget)==null||o.setSize(Math.max(1,e/2),Math.max(1,t/2)),(c=this.bloomBlurTarget1)==null||c.setSize(Math.max(1,e/2),Math.max(1,t/2)),(l=this.bloomBlurTarget2)==null||l.setSize(Math.max(1,e/2),Math.max(1,t/2)),(u=this.godRaysTarget)==null||u.setSize(Math.max(1,e/2),Math.max(1,t/2))))}createSSAOMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Re},cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},aoRadius:{value:this.sunlight.postProcess.ao.radius},aoIntensity:{value:this.sunlight.postProcess.ao.intensity}},vertexShader:`
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
			`})}getSunScreenPosition(e){const t=new O(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i=this.getCameraPosition(e)??En(0,0,10),r=new O(i[0],i[1],i[2]).add(t.multiplyScalar(100));return r.project(this.camera),new Re((r.x+1)*.5,(r.y+1)*.5)}renderPostProcessing(e){var o;if(!this.sunlight.postProcess.enabled||!this.sceneTarget||!this.postProcessQuad)return!1;const t=this.sunlight.postProcess;if(!(t.ao.enabled||t.bloom.enabled||t.godRays.enabled))return!1;const r=this.sceneTarget.width,s=this.sceneTarget.height;this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera);let a=this.sceneTarget.texture;if(t.ao.enabled&&this.ssaoMaterial&&this.aoTarget&&(this.ssaoMaterial.uniforms.tDiffuse.value=a,this.ssaoMaterial.uniforms.tDepth.value=this.sceneTarget.depthTexture,this.ssaoMaterial.uniforms.resolution.value.set(r,s),this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.postProcessQuad.material=this.ssaoMaterial,this.renderer.setRenderTarget(this.aoTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.aoTarget.texture),t.bloom.enabled&&this.bloomBrightMaterial&&this.bloomBrightTarget&&this.bloomBlurTarget1&&this.bloomBlurTarget2&&this.bloomBlurMaterial&&(this.bloomBrightMaterial.uniforms.tDiffuse.value=a,this.postProcessQuad.material=this.bloomBrightMaterial,this.renderer.setRenderTarget(this.bloomBrightTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.bloomBlurMaterial.uniforms.direction.value.set(1,0),this.bloomBlurMaterial.uniforms.resolution.value.set(r/2,s/2),this.postProcessQuad.material=this.bloomBlurMaterial,this.renderer.setRenderTarget(this.bloomBlurTarget1),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBlurTarget1.texture,this.bloomBlurMaterial.uniforms.direction.value.set(0,1),this.renderer.setRenderTarget(this.bloomBlurTarget2),this.renderer.render(this.postProcessQuad,this.skyCamera)),t.godRays.enabled&&this.godRaysMaterial&&this.godRaysTarget&&this.bloomBrightTarget){const c=this.getSunScreenPosition(e);this.godRaysMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.godRaysMaterial.uniforms.tScene.value=a,this.godRaysMaterial.uniforms.sunPosition.value.copy(c),this.postProcessQuad.material=this.godRaysMaterial,this.renderer.setRenderTarget(this.godRaysTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.godRaysTarget.texture}return this.compositeMaterial&&(this.compositeMaterial.uniforms.tScene.value=a,this.compositeMaterial.uniforms.tBloom.value=((o=this.bloomBlurTarget2)==null?void 0:o.texture)??null,this.postProcessQuad.material=this.compositeMaterial,this.renderer.setRenderTarget(null),this.renderer.render(this.postProcessQuad,this.skyCamera)),!0}};const Ry=Object.freeze(Object.defineProperty({__proto__:null,BlockColors:lr,BlockDefinition:mo,BlockModel:Mt,get BlockPos(){return Nt},BlockState:Ai,ChunkBuilder:md,get ChunkPos(){return Gl},ChunkSection:Hl,get Color(){return Xe},get Cull(){return gt},get Direction(){return tt},EFFECT_COLORS:ad,get Holder(){return Ka},Identifier:J,get ItemModel(){return Yl},ItemRenderer:go,ItemStack:ri,get ItemTint(){return eo},get Json(){return ee},Line:Is,Mesh:st,get MobEffectInstance(){return Za},NbtAbstractList:Ws,NbtByte:Ii,NbtByteArray:Ui,get NbtChunk(){return ai},NbtCompound:Et,NbtDouble:Oi,NbtEnd:Ya,NbtFile:qn,NbtFloat:ar,NbtInt:xn,NbtIntArray:Ni,NbtList:Zt,NbtLong:es,NbtLongArray:Fi,get NbtRegion(){return zi},NbtShort:or,NbtString:Xn,NbtTag:at,get NbtType(){return pe},POTION_EFFECTS:od,PalettedContainer:ja,get PotionContents(){return Ls},Quad:Xs,RawDataInput:wf,RawDataOutput:Mf,Registry:Ja,Renderer:_d,get Rotation(){return qr},ShaderProgram:gd,get SpecialRenderers(){return bt},StringReader:Yt,Structure:JS,TextureAtlas:$r,ThreeStructureRenderer:Cy,Vector:Dt,Vertex:Dn,clamp:Ei,createResourcesFromPack:pd,getBundledDefaultPackUrls:dd,getDefaultPackUrls:fc,isPowerOfTwo:Xl,loadDefaultPackResources:by,upperPowerOfTwo:hc},Symbol.toStringTag,{value:"Module"})),{Structure:Bh,ThreeStructureRenderer:vd,loadDefaultPackResources:Py,BlockState:Ly,SpecialRenderers:to,Cull:no,BlockModel:jl,Direction:zr}=Ry;let Zl,Ot,oi,gn,ut,rt,Kl=null,wl=null,io="",xi=null,An,ro=null,en=[0,0,0],Ml=10,so=!0,Ia=null;function zh(n,e){const t="#0",i={0:`entity/chest/${e}`};return n==="left"?new jl(void 0,i,[{from:[0,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14.25,10.75],rotation:180,texture:t},south:{uv:[3.25,8.25,7,10.75],rotation:180,texture:t},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:t},up:{uv:[7,4.75,10.75,8.25],texture:t},down:{uv:[3.25,4.75,7,8.25],texture:t}}},{from:[0,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14.25,4.75],rotation:180,texture:t},south:{uv:[3.25,3.75,7,4.75],rotation:180,texture:t},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:t},up:{uv:[7,0,10.75,3.5],texture:t},down:{uv:[3.25,0,7,3.5],texture:t}}},{from:[0,7,0],to:[1,11,1],faces:{north:{uv:[.25,.25,.5,1.25],rotation:180,texture:t},south:{uv:[.75,.25,1,1.25],rotation:180,texture:t},east:{uv:[0,.25,.25,1.25],rotation:180,texture:t},up:{uv:[.25,0,.5,.25],texture:t},down:{uv:[.5,0,.75,.25],texture:t}}}]):new jl(void 0,i,[{from:[1,0,1],to:[16,10,15],faces:{north:{uv:[10.5,8.25,14.25,10.75],rotation:180,texture:t},south:{uv:[3.25,8.25,7,10.75],rotation:180,texture:t},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:t},up:{uv:[7,4.75,10.75,8.25],texture:t},down:{uv:[3.25,4.75,7,8.25],texture:t}}},{from:[1,10,1],to:[16,14,15],faces:{north:{uv:[10.5,3.75,14.25,4.75],rotation:180,texture:t},south:{uv:[3.25,3.75,7,4.75],rotation:180,texture:t},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:t},up:{uv:[7,0,10.75,3.5],texture:t},down:{uv:[3.25,0,7,3.5],texture:t}}},{from:[15,7,0],to:[16,11,1],faces:{north:{uv:[.25,.25,.5,1.25],rotation:180,texture:t},south:{uv:[.75,.25,1,1.25],rotation:180,texture:t},west:{uv:[.5,.25,.75,1.25],rotation:180,texture:t},up:{uv:[.25,0,.5,.25],texture:t},down:{uv:[.5,0,.75,.25],texture:t}}}])}function Dy(n){return new jl(void 0,{still:"block/water_still",flow:"block/water_flow"},[{from:[.01,.01,.01],to:[15.99,15.99,15.99],faces:{up:{texture:"#still",cullface:zr.UP},down:{texture:"#still",cullface:zr.DOWN},north:{texture:"#flow",cullface:zr.NORTH},east:{texture:"#flow",cullface:zr.EAST},south:{texture:"#flow",cullface:zr.SOUTH},west:{texture:"#flow",cullface:zr.WEST}}}]).getMesh(n,no.none())}const Iy=to.getBlockMesh;to.getBlockMesh=function(n,e,t,i){const r=n.getName().toString();if(r==="minecraft:chest"||r==="minecraft:trapped_chest"){const a=n.getProperty("type")??"single",o=n.getProperty("facing")??"south",c=r==="minecraft:trapped_chest"?"trapped":"normal";let l;if(a==="left"?l=zh("left",`${c}_left`).getMesh(t,no.none()):a==="right"&&(l=zh("right",`${c}_right`).getMesh(t,no.none())),l){const u=new st,h=nt();ze(h,h,[8,8,8]),Ft(h,h,o==="west"?Math.PI/2:o==="south"?Math.PI:o==="east"?Math.PI*3/2:0),ze(h,h,[-8,-8,-8]),u.merge(l.transform(h));const d=nt();return tn(d,d,[.0625,.0625,.0625]),u.transform(d)}}const s=Iy.call(to,n,e,t,i);if(!n.is("water")&&!n.is("lava")&&n.isWaterlogged()){const a=Dy(t),o=nt();tn(o,o,[.0625,.0625,.0625]),s.merge(a.transform(o))}return s};function Hh(n){const e=new In;if(!n||!n.quads||n.quads.length===0)return e;const t=n.quads.length,i=t*4,r=new Float32Array(i*3),s=new Float32Array(i*3),a=new Float32Array(i*2),o=new Float32Array(i*4),c=new Float32Array(i*3),l=new Float32Array(i*3),u=new Float32Array(i),h=i>65535?new Uint32Array(t*6):new Uint16Array(t*6);let d=0,f=0,g=0;for(let _=0;_<t;_++){const m=n.quads[_],p=m.vertices(),w=m.normal();for(let x=0;x<4;x++){const S=p[x],C=S.pos,A=S.normal||w,E=S.texture,I=S.textureLimit,M=S.color,v=S.blockPos||C;r[d*3]=C.x,r[d*3+1]=C.y,r[d*3+2]=C.z,s[d*3]=A.x,s[d*3+1]=A.y,s[d*3+2]=A.z,E&&(a[d*2]=E[0],a[d*2+1]=E[1]),I&&(o[d*4]=I[0],o[d*4+1]=I[1],o[d*4+2]=I[2],o[d*4+3]=I[3]),M?(c[d*3]=M[0],c[d*3+1]=M[1],c[d*3+2]=M[2]):(c[d*3]=1,c[d*3+1]=1,c[d*3+2]=1),l[d*3]=v.x,l[d*3+1]=v.y,l[d*3+2]=v.z,u[d]=S.emissive||0,d++}h[f]=g,h[f+1]=g+1,h[f+2]=g+2,h[f+3]=g,h[f+4]=g+2,h[f+5]=g+3,f+=6,g+=4}return e.setAttribute("position",new Tt(r,3)),e.setAttribute("normal",new Tt(s,3)),e.setAttribute("uv",new Tt(a,2)),e.setAttribute("texLimit",new Tt(o,4)),e.setAttribute("color",new Tt(c,3)),e.setAttribute("blockPos",new Tt(l,3)),e.setAttribute("emissive",new Tt(u,1)),e.setIndex(new Tt(h,1)),e.computeBoundingSphere(),e}function Gh(n,e,t,i,r){if(!(!e||!e.quads||e.quads.length===0))for(let s=0;s<e.quads.length;s++){const o=e.quads[s].vertices(),c=o[0].clone(),l=o[1].clone(),u=o[2].clone(),h=o[3].clone();c.pos.x+=t,c.pos.y+=i,c.pos.z+=r,l.pos.x+=t,l.pos.y+=i,l.pos.z+=r,u.pos.x+=t,u.pos.y+=i,u.pos.z+=r,h.pos.x+=t,h.pos.y+=i,h.pos.z+=r,c.blockPos={x:t,y:i,z:r},l.blockPos={x:t,y:i,z:r},u.blockPos={x:t,y:i,z:r},h.blockPos={x:t,y:i,z:r},n.quads.push(new Xs(c,l,u,h))}}vd.prototype.applyDrawDistance=function(){if(this.chunkMeshes)for(let n=0;n<this.chunkMeshes.length;n++){const e=this.chunkMeshes[n];e.visible=!0,e.frustumCulled=!1}};async function Uy(){Zl=document.getElementById("renderer-container");const n=window.innerWidth/window.innerHeight;oi=new un(60,n,.5,1e5),gn=new za(-10*n,10*n,10,-10,.5,1e5),Ot=oi,Ot.position.set(10,15,20);try{const e=window.location.href.split("?")[0].replace("index.html","")+"default-pack/";xi=(await Py({baseUrl:e})).resources,window.AndroidHost&&window.AndroidHost.onLoadingProgress("READY")}catch(e){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: Failed to load default resource pack. "+(e==null?void 0:e.message))}}function xd(){if(so&&(Ia=requestAnimationFrame(xd),ut&&ut.update(),rt&&Ot)){if(rt.chunkMeshes)for(let e=0;e<rt.chunkMeshes.length;e++){const t=rt.chunkMeshes[e];t.visible=!0,t.frustumCulled=!1}Ot.updateMatrixWorld(!0);const n=nt();ty(n,Ot.matrixWorldInverse.elements),rt.drawStructure(n)}}window.stopRenderLoop=function(){so=!1,Ia!==null&&(cancelAnimationFrame(Ia),Ia=null)};window.startRenderLoop=function(){so||(so=!0,xd())};window.destroyRenderer=function(){var n;if(window.stopRenderLoop(),rt)try{rt.dispose()}catch(e){console.error(e)}if(ut&&ut.dispose(),An)try{const e=An.getContext("webgl2")||An.getContext("webgl");(n=e==null?void 0:e.getExtension("WEBGL_lose_context"))==null||n.loseContext()}catch(e){console.error(e)}};window.loadLitematic=async function(){try{Kl=await(await fetch("./model.litematic")).arrayBuffer(),ro=qn.read(new Uint8Array(Kl)).root;const t=ro.getCompound("Regions");let i=[];t&&typeof t.keys=="function"?i=Array.from(t.keys()):t&&(i=Object.keys(t)),i=i.filter(r=>typeof r=="string"&&r!=="properties"&&r!=="constructor"&&r!=="__proto__"),i.length===0&&(i=["Region1"]),io=i[0],window.AndroidHost&&window.AndroidHost.onRegionsParsed(JSON.stringify(i)),await Sd(io),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS")}catch(n){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(n==null?void 0:n.message))}};async function Sd(n){if(!Kl||!xi||!ro)return;window.stopRenderLoop(),window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),Zl.innerHTML="",An=document.createElement("canvas"),An.style.width="100%",An.style.height="100%",Zl.appendChild(An);const t=ro.getCompound("Regions").getCompound(n),i=t.getCompound("Size"),r=[i.getNumber("x")??0,i.getNumber("y")??0,i.getNumber("z")??0],s=[Math.abs(r[0]),Math.abs(r[1]),Math.abs(r[2])],a=t.getList("BlockStatePalette"),o=[];a.forEach(ie=>{if(!ie.isCompound())return;const N=ie.getString("Name")??"minecraft:air",ne={};if(ie.has("Properties")){const B=ie.get("Properties");B&&B.isCompound()&&B.forEach((_e,me)=>{var Me;ne[_e]=((Me=me.getAsString)==null?void 0:Me.call(me))??""})}o.push(new Ly(N,ne))});const c=o.map(ie=>ie.is("minecraft:air")||ie.is("minecraft:cave_air")||ie.is("minecraft:void_air")),l=new Array(o.length),u=new Array(o.length),h=new Array(o.length);for(let ie=0;ie<o.length;ie++){if(c[ie]){h[ie]=!1;continue}const N=o[ie],ne=N.getName(),B=N.getProperties(),_e=xi.getBlockDefinition(ne),me=no.none(),Me=new st,Te=new st,Pe=new st;_e&&Pe.merge(_e.getMesh(ne,B,xi,xi,me));const Ke=to.getBlockMesh(N,void 0,xi,me);Ke.isEmpty()||Pe.merge(Ke);const P=xi.getBlockFlags(ne);P!=null&&P.semi_transparent?(Te.merge(Pe),h[ie]=!1):(Me.merge(Pe),h[ie]=!Pe.isEmpty()&&!(P!=null&&P.semi_transparent)),l[ie]=Me,u[ie]=Te}const d=t.has("BlockStates")?t.getLongArray("BlockStates"):null,f=d?d.getItems():[],g=new BigUint64Array(f.length);let _=performance.now();for(let ie=0;ie<f.length;ie++){const N=f[ie].getAsPair(),ne=BigInt(N[0]>>>0),B=BigInt(N[1]>>>0);if(g[ie]=ne<<32n|B,!(ie&2047)&&performance.now()-_>=12){const me=Math.floor(ie/Math.max(1,f.length)*50);window.AndroidHost&&window.AndroidHost.onLoadingProgress(`DECODING_${me}%`),await new Promise(Me=>requestAnimationFrame(Me)),_=performance.now()}}const m=Math.max(2,Math.ceil(Math.log2(o.length))),p=(1n<<BigInt(m))-1n,w=s[0],x=s[1],S=s[2],C=w*x*S,A=new Uint32Array(o.length);let E=0;_=performance.now();for(let ie=0;ie<C;ie++){let N=0;if(g.length>0){const ne=BigInt(ie*m),B=Number(ne>>6n),_e=ne&63n;if(B<g.length){let me=g[B]>>_e;_e+BigInt(m)>64n&&B+1<g.length&&(me|=g[B+1]<<64n-_e),N=Number(me&p)}}if(N>=0&&N<o.length&&!c[N]&&(A[N]++,E++),!(ie&2047)&&performance.now()-_>=12){const B=50+Math.floor(ie/Math.max(1,C)*50);window.AndroidHost&&window.AndroidHost.onLoadingProgress(`DECODING_${B}%`),await new Promise(_e=>requestAnimationFrame(_e)),_=performance.now()}}window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_100%");const I={};for(let ie=0;ie<o.length;ie++)A[ie]>0&&(I[o[ie].getName().toString()]=A[ie]);window.AndroidHost&&window.AndroidHost.onStatisticsUpdated(E,JSON.stringify(I));const M=Math.max(w,x,S),v=C>2e6?64:C>5e5||M>128?32:16,D=(ie,N,ne)=>{if(ie<0||ie>=w||N<0||N>=x||ne<0||ne>=S)return-1;const B=(N*S+ne)*w+ie;if(g.length===0)return 0;const _e=BigInt(B*m),me=Number(_e>>6n),Me=_e&63n;if(me>=g.length)return 0;let Te=g[me]>>Me;return Me+BigInt(m)>64n&&me+1<g.length&&(Te|=g[me+1]<<64n-Me),Number(Te&p)},V=(ie,N,ne)=>{if(ie===0||ie===w-1||N===0||N===x-1||ne===0||ne===S-1)return!1;const B=D(ie+1,N,ne);if(B<0||!h[B])return!1;const _e=D(ie-1,N,ne);if(_e<0||!h[_e])return!1;const me=D(ie,N+1,ne);if(me<0||!h[me])return!1;const Me=D(ie,N-1,ne);if(Me<0||!h[Me])return!1;const Te=D(ie,N,ne+1);if(Te<0||!h[Te])return!1;const Pe=D(ie,N,ne-1);return!(Pe<0||!h[Pe])};wl=new Bh(s,o,[]);const U={asyncBuild:!1,chunkSize:[v,v,v]};rt=new vd(An,wl,xi,U),rt.sunlight&&rt.sunlight.fog&&(rt.sunlight.fog.density=0,rt.sunlight.fog.heightFalloff=0),rt.setViewport(0,0,window.innerWidth,window.innerHeight),rt.camera=Ot,rt.skyScene&&rt.skyScene.clear(),rt.renderer&&rt.renderer.setClearColor(11062,1);const z=window.innerWidth/window.innerHeight;oi.far=1e5,oi.aspect=z,oi.updateProjectionMatrix(),gn.far=1e5,gn.updateProjectionMatrix(),en=[w/2,x/2,S/2],Ml=Math.max(1,Math.max(w,x,S)/2),ut&&ut.dispose(),ut=new yf(Ot,An),ut.enableDamping=!0,ut.dampingFactor=.05,ut.target.set(en[0],en[1],en[2]);const L=Math.max(Ml*2.2,10);Ot.position.set(en[0]+L,en[1]+L*.8,en[2]+L),ut.update(),window.startRenderLoop(),window.AndroidHost&&window.AndroidHost.onLoadingProgress("RENDERING_0%");const H=Math.ceil(w/v),K=Math.ceil(x/v),X=Math.ceil(S/v),Q=H*K*X;let re=0,fe=w,be=x,Ie=S,Y=0,ae=0,ve=0,le=!1;_=performance.now();const Ue=[];for(let ie=0;ie<K;ie++)for(let N=0;N<X;N++)for(let ne=0;ne<H;ne++){re++;const B=new st,_e=new st,me=ne*v,Me=Math.min(w,(ne+1)*v),Te=ie*v,Pe=Math.min(x,(ie+1)*v),Ke=N*v,P=Math.min(S,(N+1)*v);for(let G=Te;G<Pe;G++)for(let j=Ke;j<P;j++)for(let te=me;te<Me;te++){const se=(G*S+j)*w+te;let ye=0;if(g.length>0){const de=BigInt(se*m),ue=Number(de>>6n),Ne=de&63n;if(ue<g.length){let ce=g[ue]>>Ne;Ne+BigInt(m)>64n&&ue+1<g.length&&(ce|=g[ue+1]<<64n-Ne),ye=Number(ce&p)}}if(ye>=0&&ye<o.length&&!c[ye]){if(te<fe&&(fe=te),G<be&&(be=G),j<Ie&&(Ie=j),te>Y&&(Y=te),G>ae&&(ae=G),j>ve&&(ve=j),le=!0,C<=5e5&&Ue.push({pos:[te,G,j],state:ye}),h[ye]&&V(te,G,j))continue;const de=l[ye];de&&!de.isEmpty()&&Gh(B,de,te,G,j);const ue=u[ye];ue&&!ue.isEmpty()&&Gh(_e,ue,te,G,j)}}if(!B.isEmpty()){const G=Hh(B),j=new Xt(G,rt.opaqueMaterial);j.visible=!0,j.frustumCulled=!1,rt.structureScene.add(j),rt.chunkMeshes.push(j)}if(!_e.isEmpty()){const G=Hh(_e),j=new Xt(G,rt.transparentMaterial);j.renderOrder=1,j.visible=!0,j.frustumCulled=!1,rt.structureScene.add(j),rt.chunkMeshes.push(j)}if(performance.now()-_>=12){const G=Math.floor(re/Q*100);window.AndroidHost&&window.AndroidHost.onLoadingProgress(`RENDERING_${G}%`),await new Promise(j=>requestAnimationFrame(j)),_=performance.now()}}if(window.AndroidHost&&window.AndroidHost.onLoadingProgress("RENDERING_100%"),le){en=[(fe+Y)/2,(be+ae)/2,(Ie+ve)/2];const ie=Y-fe+1,N=ae-be+1,ne=ve-Ie+1;Ml=Math.max(1,.5*Math.sqrt(ie*ie+N*N+ne*ne));const B=ut.target.clone(),_e=new O(en[0],en[1],en[2]),me=new O().subVectors(_e,B);ut.target.copy(_e),Ot.position.add(me),ut.update()}Ue.length>0&&(wl=new Bh(s,o,Ue))}window.toggleCameraView=function(){if(!ut||!An)return;const n=ut.target.clone(),e=Ot.position.clone(),t=new O().subVectors(e,n),i=Math.max(t.length(),5);if(Ot===oi){const r=window.innerWidth/window.innerHeight,s=i*Math.tan(oi.fov*Math.PI/360)*2,a=s*r;gn.left=-a/2,gn.right=a/2,gn.top=s/2,gn.bottom=-s/2,gn.far=1e5,gn.updateProjectionMatrix(),Ot=gn}else Ot=oi;Ot.position.copy(e),rt&&(rt.camera=Ot,rt.sunlight&&rt.sunlight.postProcess&&(Ot===gn?rt.sunlight.postProcess.enabled=!1:rt.sunlight.postProcess.enabled=!0)),ut.dispose(),ut=new yf(Ot,An),ut.enableDamping=!0,ut.dampingFactor=.05,ut.target.copy(n),ut.update()};window.resetCamera=function(){if(!ut)return;const n=ut.target.clone(),e=new O(en[0],en[1],en[2]),t=new O().subVectors(e,n);ut.target.copy(e),oi.position.add(t),gn.position.add(t),ut.update()};window.switchRegion=async function(n){n!==io&&(window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),io=n,await Sd(n),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS"))};Uy();
