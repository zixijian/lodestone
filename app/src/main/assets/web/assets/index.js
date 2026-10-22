var Ff=Object.defineProperty;var Of=(n,e,t)=>e in n?Ff(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var P=(n,e,t)=>Of(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="164",xr={ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bf=0,bc=1,zf=2,nd=1,Gf=2,ni=3,gn=0,tn=1,zn=2,Li=0,Yr=1,Mc=2,Ec=3,Tc=4,Vf=5,er=100,Hf=101,Wf=102,Zf=103,Xf=104,Yf=200,Kf=201,jf=202,qf=203,Ll=204,Il=205,$f=206,Jf=207,Qf=208,ep=209,tp=210,np=211,ip=212,rp=213,sp=214,ap=0,op=1,lp=2,Xa=3,cp=4,up=5,hp=6,dp=7,id=0,fp=1,pp=2,Ii=0,mp=1,gp=2,_p=3,rd=4,vp=5,xp=6,yp=7,sd=300,Jr=301,Qr=302,Dl=303,Ul=304,go=306,Nl=1e3,Cn=1001,kl=1002,xt=1003,Sp=1004,ws=1005,Kt=1006,Ro=1007,rr=1008,Gi=1009,wp=1010,bp=1011,ad=1012,od=1013,Vi=1014,Rn=1015,es=1016,ld=1017,cd=1018,Hs=1020,Mp=35902,Ep=1021,Tp=1022,Wt=1023,Ap=1024,Cp=1025,Di=1026,Ps=1027,Rp=1028,ud=1029,Pp=1030,hd=1031,dd=1033,Po=33776,Lo=33777,Io=33778,Do=33779,Ac=35840,Cc=35841,Rc=35842,Pc=35843,Lc=36196,Ic=37492,Dc=37496,Uc=37808,Nc=37809,kc=37810,Fc=37811,Oc=37812,Bc=37813,zc=37814,Gc=37815,Vc=37816,Hc=37817,Wc=37818,Zc=37819,Xc=37820,Yc=37821,Uo=36492,Kc=36494,jc=36495,Lp=36283,qc=36284,$c=36285,Jc=36286,Ip=3200,Dp=3201,Up=0,Np=1,Ti="",Nn="srgb",Wi="srgb-linear",rc="display-p3",_o="display-p3-linear",Ya="linear",gt="srgb",Ka="rec709",ja="p3",Sr=7680,Qc=519,kp=512,Fp=513,Op=514,fd=515,Bp=516,zp=517,Gp=518,Vp=519,eu=35044,tu="300 es",ai=2e3,qa=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,Fl=180/Math.PI;function Ws(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Hp(n,e){return(n%e+e)%e}function No(n,e,t){return(1-t)*n+t*e}function fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wp={DEG2RAD:Oa};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,a,o,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],v=r[4],y=r[7],R=r[2],C=r[5],T=r[8];return s[0]=a*_+o*w+c*R,s[3]=a*m+o*v+c*C,s[6]=a*p+o*y+c*T,s[1]=l*_+u*w+h*R,s[4]=l*m+u*v+h*C,s[7]=l*p+u*y+h*T,s[2]=f*_+d*w+g*R,s[5]=f*m+d*v+g*C,s[8]=f*p+d*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new $e;function pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zp(){const n=$a("canvas");return n.style.display="block",n}const nu={};function Xp(n){n in nu||(nu[n]=!0,console.warn(n))}const iu=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ru=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[Wi]:{transfer:Ya,primaries:Ka,toReference:n=>n,fromReference:n=>n},[Nn]:{transfer:gt,primaries:Ka,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_o]:{transfer:Ya,primaries:ja,toReference:n=>n.applyMatrix3(ru),fromReference:n=>n.applyMatrix3(iu)},[rc]:{transfer:gt,primaries:ja,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ru),fromReference:n=>n.applyMatrix3(iu).convertLinearToSRGB()}},Yp=new Set([Wi,_o]),dt={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ta[e].toReference,r=ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ta[n].primaries},getTransfer:function(n){return n===Ti?Ya:ta[n].transfer}};function Kr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wr;class Kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=$a("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kr(t[i]/255)*255):t[i]=Kr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jp=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oo(r[a].image)):s.push(Oo(r[a]))}else s=Oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;class $t extends _r{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Cn,r=Cn,s=Kt,a=rr,o=Wt,c=Gi,l=$t.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ws(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=sd;$t.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,R=(p+1)/2,C=(u+f)/4,T=(h+_)/4,U=(g+m)/4;return v>y&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=U/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(f-u)/w,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $p extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends $p{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gd extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jp extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,p*w);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const y=o*w;if(c=c*m+f*y,l=l*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new z,su=new hr;class Zs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),ia.subVectors(this.max,ps),br.subVectors(e.a,ps),Mr.subVectors(e.b,ps),Er.subVectors(e.c,ps),pi.subVectors(Mr,br),mi.subVectors(Er,Mr),Xi.subVectors(br,Er);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Xi.z,Xi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Xi.z,0,-Xi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Xi.y,Xi.x,0];return!zo(t,br,Mr,Er,ia)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,br,Mr,Er,ia))?!1:(ra.crossVectors(pi,mi),t=[ra.x,ra.y,ra.z],zo(t,br,Mr,Er,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new z,new z,new z,new z,new z,new z,new z,new z],xn=new z,na=new Zs,br=new z,Mr=new z,Er=new z,pi=new z,mi=new z,Xi=new z,ps=new z,ia=new z,ra=new z,Yi=new z;function zo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Yi.fromArray(n,s);const o=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Qp=new Zs,ms=new z,Go=new z;class vo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Go)),this.expandByPoint(ms.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new z,Vo=new z,sa=new z,gi=new z,Ho=new z,aa=new z,Wo=new z;class sc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vo.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Vo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=gi.dot(this.direction),c=-gi.dot(sa),l=gi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vo).addScaledVector(sa,f),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){Ho.subVectors(t,e),aa.subVectors(i,e),Wo.crossVectors(Ho,aa);let a=this.direction.dot(Wo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(aa.crossVectors(gi,aa));if(c<0)return null;const l=o*this.direction.dot(Ho.cross(gi));if(l<0||c+l>a)return null;const u=-o*gi.dot(Wo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,a,o,c,l,u,h,f,d,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,f,d,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),_i.crossVectors(i,sn),_i.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),_i.crossVectors(i,sn)),_i.normalize(),oa.crossVectors(sn,_i),r[0]=_i.x,r[4]=oa.x,r[8]=sn.x,r[1]=_i.y,r[5]=oa.y,r[9]=sn.y,r[2]=_i.z,r[6]=oa.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],v=i[7],y=i[11],R=i[15],C=r[0],T=r[4],U=r[8],b=r[12],x=r[1],E=r[5],N=r[9],D=r[13],O=r[2],L=r[6],H=r[10],$=r[14],G=r[3],ee=r[7],le=r[11],he=r[15];return s[0]=a*C+o*x+c*O+l*G,s[4]=a*T+o*E+c*L+l*ee,s[8]=a*U+o*N+c*H+l*le,s[12]=a*b+o*D+c*$+l*he,s[1]=u*C+h*x+f*O+d*G,s[5]=u*T+h*E+f*L+d*ee,s[9]=u*U+h*N+f*H+d*le,s[13]=u*b+h*D+f*$+d*he,s[2]=g*C+_*x+m*O+p*G,s[6]=g*T+_*E+m*L+p*ee,s[10]=g*U+_*N+m*H+p*le,s[14]=g*b+_*D+m*$+p*he,s[3]=w*C+v*x+y*O+R*G,s[7]=w*T+v*E+y*L+R*ee,s[11]=w*U+v*N+y*H+R*le,s[15]=w*b+v*D+y*$+R*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*f+i*l*f+r*o*d-i*c*d)+_*(+t*c*d-t*l*f+s*a*f-r*a*d+r*l*u-s*c*u)+m*(+t*l*h-t*o*d-s*a*h+i*a*d+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*f+r*a*h-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*l-_*f*l+_*c*d-o*m*d-h*c*p+o*f*p,v=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,y=u*_*l-g*h*l+g*o*d-a*_*d-u*o*p+a*h*p,R=g*h*c-u*_*c-g*o*f+a*_*f+u*o*m-a*h*m,C=t*w+i*v+r*y+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=w*T,e[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*T,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*T,e[3]=(h*c*s-o*f*s-h*r*l+i*f*l+o*r*d-i*c*d)*T,e[4]=v*T,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*T,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*T,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*d+t*c*d)*T,e[8]=y*T,e[9]=(g*h*s-u*_*s-g*i*d+t*_*d+u*i*p-t*h*p)*T,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*T,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*d-t*o*d)*T,e[12]=R*T,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*m+t*h*m)*T,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*T,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,w=c*l,v=c*u,y=c*h,R=i.x,C=i.y,T=i.z;return r[0]=(1-(_+p))*R,r[1]=(d+y)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(d-y)*C,r[5]=(1-(f+p))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(g+v)*T,r[9]=(m-w)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const a=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const l=1/s,u=1/a,h=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ai){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(o===ai)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===qa)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ai){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*l,d=(i+r)*u;let g,_;if(o===ai)g=(a+s)*h,_=-2*h;else if(o===qa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tr=new z,yn=new ut,em=new z(0,0,0),tm=new z(1,1,1),_i=new z,oa=new z,sn=new z,au=new ut,ou=new hr;class ui{constructor(e=0,t=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class _d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nm=0;const lu=new z,Ar=new hr,Jn=new ut,la=new z,gs=new z,im=new z,rm=new hr,cu=new z(1,0,0),uu=new z(0,1,0),hu=new z(0,0,1),du={type:"added"},sm={type:"removed"},Cr={type:"childadded",child:null},Zo={type:"childremoved",child:null};class nn extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new z,t=new ui,i=new hr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new $e}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(gs,la,this.up):Jn.lookAt(la,gs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sm),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new z(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new z,Qn=new z,Xo=new z,ei=new z,Rr=new z,Pr=new z,fu=new z,Yo=new z,Ko=new z,jo=new z;class Gn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),Qn.subVectors(i,t),Xo.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(Qn),c=Sn.dot(Xo),l=Qn.dot(Qn),u=Qn.dot(Xo),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),Qn.subVectors(e,t),Sn.cross(Qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Sn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Rr.subVectors(r,i),Pr.subVectors(s,i),Yo.subVectors(e,i);const c=Rr.dot(Yo),l=Pr.dot(Yo);if(c<=0&&l<=0)return t.copy(i);Ko.subVectors(e,r);const u=Rr.dot(Ko),h=Pr.dot(Ko);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Rr,a);jo.subVectors(e,s);const d=Rr.dot(jo),g=Pr.dot(jo);if(g>=0&&d<=g)return t.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Pr,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return fu.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(fu,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(Rr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=Hp(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qo(a,s,e+1/3),this.g=qo(a,s,e),this.b=qo(a,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return dt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Xt(Gt.r*255,0,255))*65536+Math.round(Xt(Gt.g*255,0,255))*256+Math.round(Xt(Gt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Nn){dt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(ca);const i=No(vi.h,ca.h,t),r=No(vi.s,ca.s,t),s=No(vi.l,ca.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gt=new tt;tt.NAMES=vd;let am=0;class Xs extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Yr,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ll&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xd extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new z,ua=new Oe;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eu&&(e.usage=this.usage),e}}class yd extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sd extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let om=0;const dn=new ut,$o=new nn,Lr=new z,an=new Zs,_s=new Zs,It=new z;class Yn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?Sd:yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(an.min,_s.min),an.expandByPoint(It),It.addVectors(an.max,_s.max),an.expandByPoint(It)):(an.expandByPoint(_s.min),an.expandByPoint(_s.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)It.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),It.add(Lr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new z,c[U]=new z;const l=new z,u=new z,h=new z,f=new Oe,d=new Oe,g=new Oe,_=new z,m=new z;function p(U,b,x){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,U),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(E),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(E),o[U].add(_),o[b].add(_),o[x].add(_),c[U].add(m),c[b].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,b=w.length;U<b;++U){const x=w[U],E=x.start,N=x.count;for(let D=E,O=E+N;D<O;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new z,y=new z,R=new z,C=new z;function T(U){R.fromBufferAttribute(r,U),C.copy(R);const b=o[U];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(C,b);const E=y.dot(c[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,E)}for(let U=0,b=w.length;U<b;++U){const x=w[U],E=x.start,N=x.count;for(let D=E,O=E+N;D<O;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new In(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pu=new ut,Ki=new sc,ha=new vo,mu=new z,Ir=new z,Dr=new z,Ur=new z,Jo=new z,da=new z,fa=new Oe,pa=new Oe,ma=new Oe,gu=new z,_u=new z,vu=new z,ga=new z,_a=new z;let Qt=class extends nn{constructor(e=new Yn,t=new xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){da.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Jo.fromBufferAttribute(h,e),a?da.addScaledVector(Jo,u):da.addScaledVector(Jo.sub(t),u))}t.add(da)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(ha.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ha,mu)===null||Ki.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(pu),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,R=v;y<R;y+=3){const C=o.getX(y),T=o.getX(y+1),U=o.getX(y+2);r=va(this,p,e,i,l,u,h,C,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);r=va(this,a,e,i,l,u,h,w,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,R=v;y<R;y+=3){const C=y,T=y+1,U=y+2;r=va(this,p,e,i,l,u,h,C,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=m,v=m+1,y=m+2;r=va(this,a,e,i,l,u,h,w,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function lm(n,e,t,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gn,o),c===null)return null;_a.copy(o),_a.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:n}}function va(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ir),n.getVertexPosition(c,Dr),n.getVertexPosition(l,Ur);const u=lm(n,e,t,i,Ir,Dr,Ur,ga);if(u){r&&(fa.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,c),ma.fromBufferAttribute(r,l),u.uv=Gn.getInterpolation(ga,Ir,Dr,Ur,fa,pa,ma,new Oe)),s&&(fa.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,c),ma.fromBufferAttribute(s,l),u.uv1=Gn.getInterpolation(ga,Ir,Dr,Ur,fa,pa,ma,new Oe)),a&&(gu.fromBufferAttribute(a,o),_u.fromBufferAttribute(a,c),vu.fromBufferAttribute(a,l),u.normal=Gn.getInterpolation(ga,Ir,Dr,Ur,gu,_u,vu,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new z,materialIndex:0};Gn.getNormal(Ir,Dr,Ur,h.normal),u.face=h}return u}class Ys extends Yn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function g(_,m,p,w,v,y,R,C,T,U,b){const x=y/T,E=R/U,N=y/2,D=R/2,O=C/2,L=T+1,H=U+1;let $=0,G=0;const ee=new z;for(let le=0;le<H;le++){const he=le*E-D;for(let Ee=0;Ee<L;Ee++){const Pe=Ee*x-N;ee[_]=Pe*w,ee[m]=he*v,ee[p]=O,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=C>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Ee/T),h.push(1-le/U),$+=1}}for(let le=0;le<U;le++)for(let he=0;he<T;he++){const Ee=f+he+L*le,Pe=f+he+L*(le+1),W=f+(he+1)+L*(le+1),se=f+(he+1)+L*le;c.push(Ee,Pe,se),c.push(Pe,W,se),G+=6}o.addGroup(d,G,b),d+=G,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=ts(n[t]);for(const r in i)e[r]=i[r]}return e}function cm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const um={clone:ts,merge:Zt};var hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bd extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new z,xu=new Oe,yu=new Oe;class ln extends bd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,xu,yu),t.subVectors(yu,xu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,kr=1;class fm extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Nr,kr,e,t);r.layers=this.layers,this.add(r);const s=new ln(Nr,kr,e,t);s.layers=this.layers,this.add(s);const a=new ln(Nr,kr,e,t);a.layers=this.layers,this.add(a);const o=new ln(Nr,kr,e,t);o.layers=this.layers,this.add(o);const c=new ln(Nr,kr,e,t);c.layers=this.layers,this.add(c);const l=new ln(Nr,kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Md extends $t{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pm extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Md(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ys(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Li});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===rr&&(t.minFilter=Kt),new fm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Qo=new z,mm=new z,gm=new $e;class Si{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Qo.subVectors(i,t).cross(mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gm.getNormalMatrix(e),r=this.coplanarPoint(Qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new vo,xa=new z;class Ed{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,a=new Si){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],w=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-s,f-l,m-d,y-p).normalize(),i[1].setComponents(c+s,f+l,m+d,y+p).normalize(),i[2].setComponents(c+a,f+u,m+g,y+w).normalize(),i[3].setComponents(c-a,f-u,m-g,y-w).normalize(),i[4].setComponents(c-o,f-h,m-_,y-v).normalize(),t===ai)i[5].setComponents(c+o,f+h,m+_,y+v).normalize();else if(t===qa)i[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _m(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,o),h.count===-1&&f.length===0&&n.bufferSubData(l,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class lr extends Yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*f-a;for(let v=0;v<l;v++){const y=v*h-s;g.push(y,-w,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const v=w+l*p,y=w+l*(p+1),R=w+1+l*(p+1),C=w+1+l*p;d.push(v,y,C),d.push(y,R,C)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gm=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`
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
	
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
#endif`,gg=`struct PhysicalMaterial {
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
}`,_g=`
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ag=`#if defined( USE_POINTS_UV )
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
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
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
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
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
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
}`,E0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,W0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,qe={alphahash_fragment:vm,alphahash_pars_fragment:xm,alphamap_fragment:ym,alphamap_pars_fragment:Sm,alphatest_fragment:wm,alphatest_pars_fragment:bm,aomap_fragment:Mm,aomap_pars_fragment:Em,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:Cm,beginnormal_vertex:Rm,bsdfs:Pm,iridescence_fragment:Lm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Um,clipping_planes_pars_vertex:Nm,clipping_planes_vertex:km,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:Gm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Zm,emissivemap_fragment:Xm,emissivemap_pars_fragment:Ym,colorspace_fragment:Km,colorspace_pars_fragment:jm,envmap_fragment:qm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:ug,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:rg,gradientmap_pars_fragment:sg,lightmap_pars_fragment:ag,lights_lambert_fragment:og,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:hg,lights_toon_pars_fragment:dg,lights_phong_fragment:fg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:_g,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:bg,map_fragment:Mg,map_pars_fragment:Eg,map_particle_fragment:Tg,map_particle_pars_fragment:Ag,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Pg,morphcolor_vertex:Lg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ug,normal_fragment_begin:Ng,normal_fragment_maps:kg,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Wg,opaque_fragment:Zg,packing:Xg,premultiplied_alpha_fragment:Yg,project_vertex:Kg,dithering_fragment:jg,dithering_pars_fragment:qg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:r0,skinning_vertex:s0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:u0,transmission_fragment:h0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:v0,backgroundCube_vert:x0,backgroundCube_frag:y0,cube_vert:S0,cube_frag:w0,depth_vert:b0,depth_frag:M0,distanceRGBA_vert:E0,distanceRGBA_frag:T0,equirect_vert:A0,equirect_frag:C0,linedashed_vert:R0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:I0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:k0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:G0,meshphysical_frag:V0,meshtoon_vert:H0,meshtoon_frag:W0,points_vert:Z0,points_frag:X0,shadow_vert:Y0,shadow_frag:K0,sprite_vert:j0,sprite_frag:q0},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},On={basic:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Zt([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Zt([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};On.physical={uniforms:Zt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ya={r:0,b:0,g:0},qi=new ui,$0=new ut;function J0(n,e,t,i,r,s,a){const o=new tt(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function _(w){let v=!1;const y=g(w);y===null?p(o,c):y&&y.isColor&&(p(y,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(w,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===go)?(u===void 0&&(u=new Qt(new Ys(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:ts(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(v.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(qi)),u.material.toneMapped=dt.getTransfer(y.colorSpace)!==gt,(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qt(new lr(2,2),new Ht({name:"BackgroundMaterial",uniforms:ts(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,v){w.getRGB(ya,wd(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(w,v=1){o.set(w),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:_,addToRenderList:m}}function Q0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(x,E,N,D,O){let L=!1;const H=h(D,N,E);s!==H&&(s=H,l(s.object)),L=d(x,D,N,O),L&&g(x,D,N,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,y(x,E,N,D),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,E,N){const D=N.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let L=O[E.id];L===void 0&&(L={},O[E.id]=L);let H=L[D];return H===void 0&&(H=f(c()),L[D]=H),H}function f(x){const E=[],N=[],D=[];for(let O=0;O<t;O++)E[O]=0,N[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,E,N,D){const O=s.attributes,L=E.attributes;let H=0;const $=N.getAttributes();for(const G in $)if($[G].location>=0){const le=O[G];let he=L[G];if(he===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),le===void 0||le.attribute!==he||he&&le.data!==he.data)return!0;H++}return s.attributesNum!==H||s.index!==D}function g(x,E,N,D){const O={},L=E.attributes;let H=0;const $=N.getAttributes();for(const G in $)if($[G].location>=0){let le=L[G];le===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(le=x.instanceColor));const he={};he.attribute=le,le&&le.data&&(he.data=le.data),O[G]=he,H++}s.attributes=O,s.attributesNum=H,s.index=D}function _(){const x=s.newAttributes;for(let E=0,N=x.length;E<N;E++)x[E]=0}function m(x){p(x,0)}function p(x,E){const N=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;N[x]=1,D[x]===0&&(n.enableVertexAttribArray(x),D[x]=1),O[x]!==E&&(n.vertexAttribDivisor(x,E),O[x]=E)}function w(){const x=s.newAttributes,E=s.enabledAttributes;for(let N=0,D=E.length;N<D;N++)E[N]!==x[N]&&(n.disableVertexAttribArray(N),E[N]=0)}function v(x,E,N,D,O,L,H){H===!0?n.vertexAttribIPointer(x,E,N,O,L):n.vertexAttribPointer(x,E,N,D,O,L)}function y(x,E,N,D){_();const O=D.attributes,L=N.getAttributes(),H=E.defaultAttributeValues;for(const $ in L){const G=L[$];if(G.location>=0){let ee=O[$];if(ee===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){const le=ee.normalized,he=ee.itemSize,Ee=e.get(ee);if(Ee===void 0)continue;const Pe=Ee.buffer,W=Ee.type,se=Ee.bytesPerElement,Me=W===n.INT||W===n.UNSIGNED_INT||ee.gpuType===od;if(ee.isInterleavedBufferAttribute){const pe=ee.data,Ce=pe.stride,Te=ee.offset;if(pe.isInstancedInterleavedBuffer){for(let F=0;F<G.locationSize;F++)p(G.location+F,pe.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let F=0;F<G.locationSize;F++)m(G.location+F);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let F=0;F<G.locationSize;F++)v(G.location+F,he/G.locationSize,W,le,Ce*se,(Te+he/G.locationSize*F)*se,Me)}else{if(ee.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)p(G.location+pe,ee.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<G.locationSize;pe++)m(G.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let pe=0;pe<G.locationSize;pe++)v(G.location+pe,he/G.locationSize,W,le,he*se,he/G.locationSize*pe*se,Me)}}else if(H!==void 0){const le=H[$];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(G.location,le);break;case 3:n.vertexAttrib3fv(G.location,le);break;case 4:n.vertexAttrib4fv(G.location,le);break;default:n.vertexAttrib1fv(G.location,le)}}}}w()}function R(){U();for(const x in i){const E=i[x];for(const N in E){const D=E[N];for(const O in D)u(D[O].object),delete D[O];delete E[N]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const N in E){const D=E[N];for(const O in D)u(D[O].object),delete D[O];delete E[N]}delete i[x.id]}function T(x){for(const E in i){const N=i[E];if(N[x.id]===void 0)continue;const D=N[x.id];for(const O in D)u(D[O].object),delete D[O];delete N[x.id]}}function U(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function e_(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(l[d],u[d]);else{f.multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function t_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Wt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const T=C===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!T)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:y,maxSamples:R}}function n_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Si,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,v=w*4;let y=p.clippingState||null;c.value=y,y=u(g,f,v,d);for(let R=0;R!==v;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(h[v]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function i_(n){let e=new WeakMap;function t(a,o){return o===Dl?a.mapping=Jr:o===Ul&&(a.mapping=Qr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dl||o===Ul)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new pm(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ja extends bd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,Su=[.125,.215,.35,.446,.526,.582],tr=20,el=new Ja,wu=new tt;let tl=null,nl=0,il=0,rl=!1;const Qi=(1+Math.sqrt(5))/2,Fr=1/Qi,bu=[new z(-Qi,Fr,0),new z(Qi,Fr,0),new z(-Fr,0,Qi),new z(Fr,0,Qi),new z(0,Qi,-Fr),new z(0,Qi,Fr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),this._renderer.xr.enabled=rl,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:es,format:Wt,colorSpace:Wi,depthBuffer:!1},r=Eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r_(s)),this._blurMaterial=s_(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,i,r){const o=new ln(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wu),u.toneMapping=Ii,u.autoClear=!1;const d=new xd({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Qt(new Ys,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(wu),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Sa(r,w*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Sa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,el)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bu[(r-s-1)%bu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*tr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):tr;m>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const p=[];let w=0;for(let T=0;T<tr;++T){const U=T/_,b=Math.exp(-U*U/2);p.push(b),T===0?w+=b:T<m&&(w+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const y=this._sizeLods[r],R=3*y*(r>v-Wr?r-v+Wr:0),C=4*(this._cubeSize-y);Sa(t,R,C,3*y,2*y),c.setRenderTarget(t),c.render(h,el)}}function r_(n){const e=[],t=[],i=[];let r=n;const s=n-Wr+1+Su.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Wr?c=Su[a-n+Wr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let C=0;C<d;C++){const T=C%3*2/3-1,U=C>2?0:-1,b=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];w.set(b,_*g*C),v.set(f,m*g*C);const x=[C,C,C,C,C,C];y.set(x,p*g*C)}const R=new Yn;R.setAttribute("position",new In(w,_)),R.setAttribute("uv",new In(v,m)),R.setAttribute("faceIndex",new In(y,p)),e.push(R),r>Wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eu(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function s_(n,e,t){const i=new Float32Array(tr),r=new z(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Tu(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Au(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function a_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Dl||c===Ul,u=c===Jr||c===Qr;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Mu(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Mu(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function o_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function l_(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let v=0,y=w.length;v<y;v+=3){const R=w[v+0],C=w[v+1],T=w[v+2];f.push(R,C,C,T,T,R)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,y=w.length/3-1;v<y;v+=3){const R=v+0,C=v+1,T=v+2;f.push(R,C,C,T,T,R)}}else return;const m=new(pd(f)?Sd:yd)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function c_(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(f[m]/a,d[m]);else{_.multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w];for(let w=0;w<_.length;w++)t.update(p,i,_[w])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function u_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function h_(n,e,t){const i=new WeakMap,r=new Ft;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let b=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*R*4*h),T=new gd(C,y,R,h);T.type=Rn,T.needsUpdate=!0;const U=v*4;for(let x=0;x<h;x++){const E=m[x],N=p[x],D=w[x],O=y*R*4*x;for(let L=0;L<E.count;L++){const H=L*U;d===!0&&(r.fromBufferAttribute(E,L),C[O+H+0]=r.x,C[O+H+1]=r.y,C[O+H+2]=r.z,C[O+H+3]=0),g===!0&&(r.fromBufferAttribute(N,L),C[O+H+4]=r.x,C[O+H+5]=r.y,C[O+H+6]=r.z,C[O+H+7]=0),_===!0&&(r.fromBufferAttribute(D,L),C[O+H+8]=r.x,C[O+H+9]=r.y,C[O+H+10]=r.z,C[O+H+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new Oe(y,R)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function d_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Qa extends $t{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Di,u!==Di&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Di&&(i=Vi),i===void 0&&u===Ps&&(i=Hs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=c!==void 0?c:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ad=new $t,Cd=new Qa(1,1);Cd.compareFunction=fd;const Rd=new gd,Pd=new Jp,Ld=new Md,Cu=[],Ru=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Iu=new Float32Array(4);function as(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cu[r];if(s===void 0&&(s=new Float32Array(r),Cu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xo(n,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function f_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function __(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Iu.set(i),n.uniformMatrix2fv(this.addr,!1,Iu),Lt(t,i)}}function v_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),Lt(t,i)}}function x_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),Lt(t,i)}}function y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function M_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function C_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Cd:Ad;t.setTexture2D(e||s,r)}function R_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pd,r)}function P_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ld,r)}function L_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rd,r)}function I_(n){switch(n){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return S_;case 35668:case 35672:return w_;case 35669:case 35673:return b_;case 5125:return M_;case 36294:return E_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}function D_(n,e){n.uniform1fv(this.addr,e)}function U_(n,e){const t=as(e,this.size,2);n.uniform2fv(this.addr,t)}function N_(n,e){const t=as(e,this.size,3);n.uniform3fv(this.addr,t)}function k_(n,e){const t=as(e,this.size,4);n.uniform4fv(this.addr,t)}function F_(n,e){const t=as(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O_(n,e){const t=as(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B_(n,e){const t=as(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function z_(n,e){n.uniform1iv(this.addr,e)}function G_(n,e){n.uniform2iv(this.addr,e)}function V_(n,e){n.uniform3iv(this.addr,e)}function H_(n,e){n.uniform4iv(this.addr,e)}function W_(n,e){n.uniform1uiv(this.addr,e)}function Z_(n,e){n.uniform2uiv(this.addr,e)}function X_(n,e){n.uniform3uiv(this.addr,e)}function Y_(n,e){n.uniform4uiv(this.addr,e)}function K_(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ad,s[a])}function j_(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pd,s[a])}function q_(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ld,s[a])}function $_(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rd,s[a])}function J_(n){switch(n){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return k_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return Z_;case 36295:return X_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return $_}}class Q_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}}class ev{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}}class tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Du(n,e){n.seq.push(e),n.map[e.id]=e}function nv(n,e,t){const i=n.name,r=i.length;for(sl.lastIndex=0;;){const s=sl.exec(i),a=sl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Du(t,l===void 0?new Q_(o,n,e):new ev(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new tv(o),Du(t,h)),t=h}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);nv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iv=37297;let rv=0;function sv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function av(n){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(n);let i;switch(e===t?i="":e===ja&&t===Ka?i="LinearDisplayP3ToLinearSRGB":e===Ka&&t===ja&&(i="LinearSRGBToLinearDisplayP3"),n){case Wi:case _o:return[i,"LinearTransferOETF"];case Nn:case rc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sv(n.getShaderSource(e),a)}else return r}function ov(n,e){const t=av(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lv(n,e){let t;switch(e){case mp:t="Linear";break;case gp:t="Reinhard";break;case _p:t="OptimizedCineon";break;case rd:t="ACESFilmic";break;case xp:t="AgX";break;case yp:t="Neutral";break;case vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function uv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function bs(n){return n!==""}function ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(n){return n.replace(dv,pv)}const fv=new Map;function pv(n,e){let t=qe[e];if(t===void 0){const i=fv.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(n){return n.replace(mv,gv)}function gv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function _v(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function vv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case fp:e="ENVMAP_BLENDING_MIX";break;case pp:e="ENVMAP_BLENDING_ADD";break}return e}function Sv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_v(t),l=vv(t),u=xv(t),h=yv(t),f=Sv(t),d=cv(t),g=uv(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ii?lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ov("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=Ol(a),a=ku(a,t),a=Fu(a,t),o=Ol(o),o=ku(o,t),o=Fu(o,t),a=Ou(a),o=Ou(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=w+m+a,y=w+p+o,R=Uu(r,r.VERTEX_SHADER,v),C=Uu(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(E){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(R).trim(),O=r.getShaderInfoLog(C).trim();let L=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const $=Nu(r,R,"vertex"),G=Nu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+$+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||O==="")&&(H=!1);H&&(E.diagnostics={runnable:L,programLog:N,vertexShader:{log:D,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(R),r.deleteShader(C),U=new Ba(r,_),b=hv(r,_)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,iv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let bv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ev(e),t.set(e,i)),i}}class Ev{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}}function Tv(n,e,t,i,r,s,a){const o=new _d,c=new Mv,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,E,N,D){const O=N.fog,L=D.geometry,H=b.isMeshStandardMaterial?N.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),G=$&&$.mapping===go?$.image.height:null,ee=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const le=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,he=le!==void 0?le.length:0;let Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let Pe,W,se,Me;if(ee){const nt=On[ee];Pe=nt.vertexShader,W=nt.fragmentShader}else Pe=b.vertexShader,W=b.fragmentShader,c.update(b),se=c.getVertexShaderID(b),Me=c.getFragmentShaderID(b);const pe=n.getRenderTarget(),Ce=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,F=!!b.map,me=!!b.matcap,Y=!!$,Ie=!!b.aoMap,de=!!b.lightMap,Se=!!b.bumpMap,Ae=!!b.normalMap,Le=!!b.displacementMap,Ve=!!b.emissiveMap,I=!!b.metalnessMap,M=!!b.roughnessMap,K=b.anisotropy>0,ie=b.clearcoat>0,ce=b.dispersion>0,j=b.iridescence>0,_e=b.sheen>0,te=b.transmission>0,Q=K&&!!b.anisotropyMap,fe=ie&&!!b.clearcoatMap,ne=ie&&!!b.clearcoatNormalMap,ge=ie&&!!b.clearcoatRoughnessMap,Ne=j&&!!b.iridescenceMap,be=j&&!!b.iridescenceThicknessMap,xe=_e&&!!b.sheenColorMap,De=_e&&!!b.sheenRoughnessMap,ke=!!b.specularMap,We=!!b.specularColorMap,ze=!!b.specularIntensityMap,S=te&&!!b.transmissionMap,k=te&&!!b.thicknessMap,V=!!b.gradientMap,ae=!!b.alphaMap,ue=b.alphaTest>0,oe=!!b.alphaHash,Ke=!!b.extensions;let pt=Ii;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(pt=n.toneMapping);const bt={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Pe,fragmentShader:W,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Te,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Wi,alphaToCoverage:!!b.alphaToCoverage,map:F,matcap:me,envMap:Y,envMapMode:Y&&$.mapping,envMapCubeUVHeight:G,aoMap:Ie,lightMap:de,bumpMap:Se,normalMap:Ae,displacementMap:f&&Le,emissiveMap:Ve,normalMapObjectSpace:Ae&&b.normalMapType===Np,normalMapTangentSpace:Ae&&b.normalMapType===Up,metalnessMap:I,roughnessMap:M,anisotropy:K,anisotropyMap:Q,clearcoat:ie,clearcoatMap:fe,clearcoatNormalMap:ne,clearcoatRoughnessMap:ge,dispersion:ce,iridescence:j,iridescenceMap:Ne,iridescenceThicknessMap:be,sheen:_e,sheenColorMap:xe,sheenRoughnessMap:De,specularMap:ke,specularColorMap:We,specularIntensityMap:ze,transmission:te,transmissionMap:S,thicknessMap:k,gradientMap:V,opaque:b.transparent===!1&&b.blending===Yr&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:ue,alphaHash:oe,combine:b.combine,mapUv:F&&_(b.map.channel),aoMapUv:Ie&&_(b.aoMap.channel),lightMapUv:de&&_(b.lightMap.channel),bumpMapUv:Se&&_(b.bumpMap.channel),normalMapUv:Ae&&_(b.normalMap.channel),displacementMapUv:Le&&_(b.displacementMap.channel),emissiveMapUv:Ve&&_(b.emissiveMap.channel),metalnessMapUv:I&&_(b.metalnessMap.channel),roughnessMapUv:M&&_(b.roughnessMap.channel),anisotropyMapUv:Q&&_(b.anisotropyMap.channel),clearcoatMapUv:fe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(b.sheenRoughnessMap.channel),specularMapUv:ke&&_(b.specularMap.channel),specularColorMapUv:We&&_(b.specularColorMap.channel),specularIntensityMapUv:ze&&_(b.specularIntensityMap.channel),transmissionMapUv:S&&_(b.transmissionMap.channel),thicknessMapUv:k&&_(b.thicknessMap.channel),alphaMapUv:ae&&_(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ae||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(F||ae),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ee,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:F&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const E in b.defines)x.push(E),x.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(w(x,b),v(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function w(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function v(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),b.push(o.mask)}function y(b){const x=g[b.type];let E;if(x){const N=On[x];E=um.clone(N.uniforms)}else E=b.uniforms;return E}function R(b,x){let E;for(let N=0,D=u.length;N<D;N++){const O=u[N];if(O.cacheKey===x){E=O,++E.usedTimes;break}}return E===void 0&&(E=new wv(n,x,b,s),u.push(E)),E}function C(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:U}}function Av(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Cv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Cv),i.length>1&&i.sort(f||zu),r.length>1&&r.sort(f||zu)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Rv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gu,n.set(i,[a])):r>=s.length?(a=new Gu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Lv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Iv=0;function Dv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uv(n){const e=new Pv,t=Lv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const r=new z,s=new ut,a=new ut;function o(l,u){let h=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,_=0,m=0,p=0,w=0,v=0,y=0,R=0,C=0,T=0,U=0;l.sort(Dv);const b=u===!0?Math.PI:1;for(let E=0,N=l.length;E<N;E++){const D=l[E],O=D.color,L=D.intensity,H=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*L*b,f+=O.g*L*b,d+=O.b*L*b;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],L);U++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const ee=D.shadow,le=t.get(D);le.shadowBias=ee.bias,le.shadowNormalBias=ee.normalBias,le.shadowRadius=ee.radius,le.shadowMapSize=ee.mapSize,i.directionalShadow[g]=le,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=G,g++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(O).multiplyScalar(L*b),G.distance=H,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[m]=G;const ee=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,ee.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[m]=ee.matrix,D.castShadow){const le=t.get(D);le.shadowBias=ee.bias,le.shadowNormalBias=ee.normalBias,le.shadowRadius=ee.radius,le.shadowMapSize=ee.mapSize,i.spotShadow[m]=le,i.spotShadowMap[m]=$,R++}m++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(O).multiplyScalar(L),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=G,p++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*b),G.distance=D.distance,G.decay=D.decay,D.castShadow){const ee=D.shadow,le=t.get(D);le.shadowBias=ee.bias,le.shadowNormalBias=ee.normalBias,le.shadowRadius=ee.radius,le.shadowMapSize=ee.mapSize,le.shadowCameraNear=ee.camera.near,le.shadowCameraFar=ee.camera.far,i.pointShadow[_]=le,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=D.shadow.matrix,y++}i.point[_]=G,_++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(L*b),G.groundColor.copy(D.groundColor).multiplyScalar(L*b),i.hemi[w]=G,w++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==w||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==R||x.numSpotMaps!==C||x.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=w,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=R+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=U,x.directionalLength=g,x.pointLength=_,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=w,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=R,x.numSpotMaps=C,x.numLightProbes=U,i.version=Iv++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const v=l[p];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Vu(n){const e=new Uv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Nv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vu(n),e.set(r,[o])):s>=a.length?(o=new Vu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class kv extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fv extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
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
}`;function zv(n,e,t){let i=new Ed;const r=new Oe,s=new Oe,a=new Ft,o=new kv({depthPacking:Dp}),c=new Fv,l={},u=t.maxTextureSize,h={[gn]:tn,[tn]:gn,[zn]:zn},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Ov,fragmentShader:Bv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Yn;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let p=this.type;this.render=function(C,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Li),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==ni&&this.type===ni,O=p===ni&&this.type!==ni;for(let L=0,H=C.length;L<H;L++){const $=C[L],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ee=G.getFrameExtents();if(r.multiply(ee),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,G.mapSize.y=s.y)),G.map===null||D===!0||O===!0){const he=this.type!==ni?{minFilter:xt,magFilter:xt}:{};G.map!==null&&G.map.dispose(),G.map=new Pn(r.x,r.y,he),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const le=G.getViewportCount();for(let he=0;he<le;he++){const Ee=G.getViewport(he);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),N.viewport(a),G.updateMatrices($,he),i=G.getFrustum(),y(T,U,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===ni&&w(G,U),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,E)};function w(C,T){const U=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,U,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,U,d,_,null)}function v(C,T,U,b){let x=null;const E=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=U.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=x.uuid,D=T.uuid;let O=l[N];O===void 0&&(O={},l[N]=O);let L=O[D];L===void 0&&(L=x.clone(),O[D]=L,T.addEventListener("dispose",R)),x=L}if(x.visible=T.visible,x.wireframe=T.wireframe,b===ni?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=U}return x}function y(C,T,U,b,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const D=e.update(C),O=C.material;if(Array.isArray(O)){const L=D.groups;for(let H=0,$=L.length;H<$;H++){const G=L[H],ee=O[G.materialIndex];if(ee&&ee.visible){const le=v(C,ee,b,x);C.onBeforeShadow(n,C,T,U,D,le,G),n.renderBufferDirect(U,null,D,le,C,G),C.onAfterShadow(n,C,T,U,D,le,G)}}}else if(O.visible){const L=v(C,O,b,x);C.onBeforeShadow(n,C,T,U,D,L,null),n.renderBufferDirect(U,null,D,L,C,null),C.onAfterShadow(n,C,T,U,D,L,null)}}const N=C.children;for(let D=0,O=N.length;D<O;D++)y(N[D],T,U,b,x)}function R(C){C.target.removeEventListener("dispose",R);for(const U in l){const b=l[U],x=C.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function Gv(n){function e(){let S=!1;const k=new Ft;let V=null;const ae=new Ft(0,0,0,0);return{setMask:function(ue){V!==ue&&!S&&(n.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){S=ue},setClear:function(ue,oe,Ke,pt,bt){bt===!0&&(ue*=pt,oe*=pt,Ke*=pt),k.set(ue,oe,Ke,pt),ae.equals(k)===!1&&(n.clearColor(ue,oe,Ke,pt),ae.copy(k))},reset:function(){S=!1,V=null,ae.set(-1,0,0,0)}}}function t(){let S=!1,k=null,V=null,ae=null;return{setTest:function(ue){ue?Me(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(ue){k!==ue&&!S&&(n.depthMask(ue),k=ue)},setFunc:function(ue){if(V!==ue){switch(ue){case ap:n.depthFunc(n.NEVER);break;case op:n.depthFunc(n.ALWAYS);break;case lp:n.depthFunc(n.LESS);break;case Xa:n.depthFunc(n.LEQUAL);break;case cp:n.depthFunc(n.EQUAL);break;case up:n.depthFunc(n.GEQUAL);break;case hp:n.depthFunc(n.GREATER);break;case dp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=ue}},setLocked:function(ue){S=ue},setClear:function(ue){ae!==ue&&(n.clearDepth(ue),ae=ue)},reset:function(){S=!1,k=null,V=null,ae=null}}}function i(){let S=!1,k=null,V=null,ae=null,ue=null,oe=null,Ke=null,pt=null,bt=null;return{setTest:function(nt){S||(nt?Me(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(nt){k!==nt&&!S&&(n.stencilMask(nt),k=nt)},setFunc:function(nt,Mt,mt){(V!==nt||ae!==Mt||ue!==mt)&&(n.stencilFunc(nt,Mt,mt),V=nt,ae=Mt,ue=mt)},setOp:function(nt,Mt,mt){(oe!==nt||Ke!==Mt||pt!==mt)&&(n.stencilOp(nt,Mt,mt),oe=nt,Ke=Mt,pt=mt)},setLocked:function(nt){S=nt},setClear:function(nt){bt!==nt&&(n.clearStencil(nt),bt=nt)},reset:function(){S=!1,k=null,V=null,ae=null,ue=null,oe=null,Ke=null,pt=null,bt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,w=null,v=null,y=null,R=null,C=new tt(0,0,0),T=0,U=!1,b=null,x=null,E=null,N=null,D=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),L=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),L=H>=2);let G=null,ee={};const le=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Ee=new Ft().fromArray(le),Pe=new Ft().fromArray(he);function W(S,k,V,ae){const ue=new Uint8Array(4),oe=n.createTexture();n.bindTexture(S,oe),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<V;Ke++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(k,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(k+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return oe}const se={};se[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),s.setFunc(Xa),Se(!1),Ae(bc),Me(n.CULL_FACE),Ie(Li);function Me(S){l[S]!==!0&&(n.enable(S),l[S]=!0)}function pe(S){l[S]!==!1&&(n.disable(S),l[S]=!1)}function Ce(S,k){return u[S]!==k?(n.bindFramebuffer(S,k),u[S]=k,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=k),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=k),!0):!1}function Te(S,k){let V=f,ae=!1;if(S){V=h.get(k),V===void 0&&(V=[],h.set(k,V));const ue=S.textures;if(V.length!==ue.length||V[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ke=ue.length;oe<Ke;oe++)V[oe]=n.COLOR_ATTACHMENT0+oe;V.length=ue.length,ae=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,ae=!0);ae&&n.drawBuffers(V)}function F(S){return d!==S?(n.useProgram(S),d=S,!0):!1}const me={[er]:n.FUNC_ADD,[Hf]:n.FUNC_SUBTRACT,[Wf]:n.FUNC_REVERSE_SUBTRACT};me[Zf]=n.MIN,me[Xf]=n.MAX;const Y={[Yf]:n.ZERO,[Kf]:n.ONE,[jf]:n.SRC_COLOR,[Ll]:n.SRC_ALPHA,[tp]:n.SRC_ALPHA_SATURATE,[Qf]:n.DST_COLOR,[$f]:n.DST_ALPHA,[qf]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[ep]:n.ONE_MINUS_DST_COLOR,[Jf]:n.ONE_MINUS_DST_ALPHA,[np]:n.CONSTANT_COLOR,[ip]:n.ONE_MINUS_CONSTANT_COLOR,[rp]:n.CONSTANT_ALPHA,[sp]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(S,k,V,ae,ue,oe,Ke,pt,bt,nt){if(S===Li){g===!0&&(pe(n.BLEND),g=!1);return}if(g===!1&&(Me(n.BLEND),g=!0),S!==Vf){if(S!==_||nt!==U){if((m!==er||v!==er)&&(n.blendEquation(n.FUNC_ADD),m=er,v=er),nt)switch(S){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.ONE,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}p=null,w=null,y=null,R=null,C.set(0,0,0),T=0,_=S,U=nt}return}ue=ue||k,oe=oe||V,Ke=Ke||ae,(k!==m||ue!==v)&&(n.blendEquationSeparate(me[k],me[ue]),m=k,v=ue),(V!==p||ae!==w||oe!==y||Ke!==R)&&(n.blendFuncSeparate(Y[V],Y[ae],Y[oe],Y[Ke]),p=V,w=ae,y=oe,R=Ke),(pt.equals(C)===!1||bt!==T)&&(n.blendColor(pt.r,pt.g,pt.b,bt),C.copy(pt),T=bt),_=S,U=!1}function de(S,k){S.side===zn?pe(n.CULL_FACE):Me(n.CULL_FACE);let V=S.side===tn;k&&(V=!V),Se(V),S.blending===Yr&&S.transparent===!1?Ie(Li):Ie(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const ae=S.stencilWrite;a.setTest(ae),ae&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Ve(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(S){b!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),b=S)}function Ae(S){S!==Bf?(Me(n.CULL_FACE),S!==x&&(S===bc?n.cullFace(n.BACK):S===zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),x=S}function Le(S){S!==E&&(L&&n.lineWidth(S),E=S)}function Ve(S,k,V){S?(Me(n.POLYGON_OFFSET_FILL),(N!==k||D!==V)&&(n.polygonOffset(k,V),N=k,D=V)):pe(n.POLYGON_OFFSET_FILL)}function I(S){S?Me(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function M(S){S===void 0&&(S=n.TEXTURE0+O-1),G!==S&&(n.activeTexture(S),G=S)}function K(S,k,V){V===void 0&&(G===null?V=n.TEXTURE0+O-1:V=G);let ae=ee[V];ae===void 0&&(ae={type:void 0,texture:void 0},ee[V]=ae),(ae.type!==S||ae.texture!==k)&&(G!==V&&(n.activeTexture(V),G=V),n.bindTexture(S,k||se[S]),ae.type=S,ae.texture=k)}function ie(){const S=ee[G];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function xe(S){Ee.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),Ee.copy(S))}function De(S){Pe.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),Pe.copy(S))}function ke(S,k){let V=c.get(k);V===void 0&&(V=new WeakMap,c.set(k,V));let ae=V.get(S);ae===void 0&&(ae=n.getUniformBlockIndex(k,S.name),V.set(S,ae))}function We(S,k){const ae=c.get(k).get(S);o.get(k)!==ae&&(n.uniformBlockBinding(k,ae,S.__bindingPointIndex),o.set(k,ae))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},G=null,ee={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,w=null,v=null,y=null,R=null,C=new tt(0,0,0),T=0,U=!1,b=null,x=null,E=null,N=null,D=null,Ee.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Me,disable:pe,bindFramebuffer:Ce,drawBuffers:Te,useProgram:F,setBlending:Ie,setMaterial:de,setFlipSided:Se,setCullFace:Ae,setLineWidth:Le,setPolygonOffset:Ve,setScissorTest:I,activeTexture:M,bindTexture:K,unbindTexture:ie,compressedTexImage2D:ce,compressedTexImage3D:j,texImage2D:Ne,texImage3D:be,updateUBOMapping:ke,uniformBlockBinding:We,texStorage2D:ne,texStorage3D:ge,texSubImage2D:_e,texSubImage3D:te,compressedTexSubImage2D:Q,compressedTexSubImage3D:fe,scissor:xe,viewport:De,reset:ze}}function Vv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,M){return d?new OffscreenCanvas(I,M):$a("canvas")}function _(I,M,K){let ie=1;const ce=Ve(I);if((ce.width>K||ce.height>K)&&(ie=K/Math.max(ce.width,ce.height)),ie<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(ie*ce.width),_e=Math.floor(ie*ce.height);h===void 0&&(h=g(j,_e));const te=M?g(j,_e):h;return te.width=j,te.height=_e,te.getContext("2d").drawImage(I,0,0,j,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+j+"x"+_e+")."),te}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==xt&&I.minFilter!==Kt}function p(I){n.generateMipmap(I)}function w(I,M,K,ie,ce=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=M;if(M===n.RED&&(K===n.FLOAT&&(j=n.R32F),K===n.HALF_FLOAT&&(j=n.R16F),K===n.UNSIGNED_BYTE&&(j=n.R8)),M===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(j=n.R8UI),K===n.UNSIGNED_SHORT&&(j=n.R16UI),K===n.UNSIGNED_INT&&(j=n.R32UI),K===n.BYTE&&(j=n.R8I),K===n.SHORT&&(j=n.R16I),K===n.INT&&(j=n.R32I)),M===n.RG&&(K===n.FLOAT&&(j=n.RG32F),K===n.HALF_FLOAT&&(j=n.RG16F),K===n.UNSIGNED_BYTE&&(j=n.RG8)),M===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(j=n.RG8UI),K===n.UNSIGNED_SHORT&&(j=n.RG16UI),K===n.UNSIGNED_INT&&(j=n.RG32UI),K===n.BYTE&&(j=n.RG8I),K===n.SHORT&&(j=n.RG16I),K===n.INT&&(j=n.RG32I)),M===n.RGB&&K===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),M===n.RGBA){const _e=ce?Ya:dt.getTransfer(ie);K===n.FLOAT&&(j=n.RGBA32F),K===n.HALF_FLOAT&&(j=n.RGBA16F),K===n.UNSIGNED_BYTE&&(j=_e===gt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==xt&&I.minFilter!==Kt?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function y(I){const M=I.target;M.removeEventListener("dispose",y),C(M),M.isVideoTexture&&u.delete(M)}function R(I){const M=I.target;M.removeEventListener("dispose",R),U(M)}function C(I){const M=i.get(I);if(M.__webglInit===void 0)return;const K=I.source,ie=f.get(K);if(ie){const ce=ie[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(I),Object.keys(ie).length===0&&f.delete(K)}i.remove(I)}function T(I){const M=i.get(I);n.deleteTexture(M.__webglTexture);const K=I.source,ie=f.get(K);delete ie[M.__cacheKey],a.memory.textures--}function U(I){const M=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let ce=0;ce<M.__webglFramebuffer[ie].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[ie][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)n.deleteFramebuffer(M.__webglFramebuffer[ie]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=I.textures;for(let ie=0,ce=K.length;ie<ce;ie++){const j=i.get(K[ie]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(K[ie])}i.remove(I)}let b=0;function x(){b=0}function E(){const I=b;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),b+=1,I}function N(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function D(I,M){const K=i.get(I);if(I.isVideoTexture&&Ae(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const ie=I.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(K,I,M);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+M)}function O(I,M){const K=i.get(I);if(I.version>0&&K.__version!==I.version){Ee(K,I,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+M)}function L(I,M){const K=i.get(I);if(I.version>0&&K.__version!==I.version){Ee(K,I,M);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+M)}function H(I,M){const K=i.get(I);if(I.version>0&&K.__version!==I.version){Pe(K,I,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+M)}const $={[Nl]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[kl]:n.MIRRORED_REPEAT},G={[xt]:n.NEAREST,[Sp]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Ro]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},ee={[kp]:n.NEVER,[Vp]:n.ALWAYS,[Fp]:n.LESS,[fd]:n.LEQUAL,[Op]:n.EQUAL,[Gp]:n.GEQUAL,[Bp]:n.GREATER,[zp]:n.NOTEQUAL};function le(I,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kt||M.magFilter===Ro||M.magFilter===ws||M.magFilter===rr||M.minFilter===Kt||M.minFilter===Ro||M.minFilter===ws||M.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,$[M.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,$[M.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,$[M.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,G[M.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,G[M.minFilter]),M.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xt||M.minFilter!==ws&&M.minFilter!==rr||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function he(I,M){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",y));const ie=M.source;let ce=f.get(ie);ce===void 0&&(ce={},f.set(ie,ce));const j=N(M);if(j!==I.__cacheKey){ce[j]===void 0&&(ce[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ce[j].usedTimes++;const _e=ce[I.__cacheKey];_e!==void 0&&(ce[I.__cacheKey].usedTimes--,_e.usedTimes===0&&T(M)),I.__cacheKey=j,I.__webglTexture=ce[j].texture}return K}function Ee(I,M,K){let ie=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=n.TEXTURE_3D);const ce=he(I,M),j=M.source;t.bindTexture(ie,I.__webglTexture,n.TEXTURE0+K);const _e=i.get(j);if(j.version!==_e.__version||ce===!0){t.activeTexture(n.TEXTURE0+K);const te=dt.getPrimaries(dt.workingColorSpace),Q=M.colorSpace===Ti?null:dt.getPrimaries(M.colorSpace),fe=M.colorSpace===Ti||te===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ne=_(M.image,!1,r.maxTextureSize);ne=Le(M,ne);const ge=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let be=w(M.internalFormat,ge,Ne,M.colorSpace,M.isVideoTexture);le(ie,M);let xe;const De=M.mipmaps,ke=M.isVideoTexture!==!0,We=_e.__version===void 0||ce===!0,ze=j.dataReady,S=v(M,ne);if(M.isDepthTexture)be=n.DEPTH_COMPONENT16,M.type===Rn?be=n.DEPTH_COMPONENT32F:M.type===Vi?be=n.DEPTH_COMPONENT24:M.type===Hs&&(be=n.DEPTH24_STENCIL8),We&&(ke?t.texStorage2D(n.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,ge,Ne,null));else if(M.isDataTexture)if(De.length>0){ke&&We&&t.texStorage2D(n.TEXTURE_2D,S,be,De[0].width,De[0].height);for(let k=0,V=De.length;k<V;k++)xe=De[k],ke?ze&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,xe.width,xe.height,ge,Ne,xe.data):t.texImage2D(n.TEXTURE_2D,k,be,xe.width,xe.height,0,ge,Ne,xe.data);M.generateMipmaps=!1}else ke?(We&&t.texStorage2D(n.TEXTURE_2D,S,be,ne.width,ne.height),ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Ne,ne.data)):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,ge,Ne,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,be,De[0].width,De[0].height,ne.depth);for(let k=0,V=De.length;k<V;k++)xe=De[k],M.format!==Wt?ge!==null?ke?ze&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,xe.width,xe.height,ne.depth,ge,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,be,xe.width,xe.height,ne.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,xe.width,xe.height,ne.depth,ge,Ne,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,be,xe.width,xe.height,ne.depth,0,ge,Ne,xe.data)}else{ke&&We&&t.texStorage2D(n.TEXTURE_2D,S,be,De[0].width,De[0].height);for(let k=0,V=De.length;k<V;k++)xe=De[k],M.format!==Wt?ge!==null?ke?ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,k,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?ze&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,xe.width,xe.height,ge,Ne,xe.data):t.texImage2D(n.TEXTURE_2D,k,be,xe.width,xe.height,0,ge,Ne,xe.data)}else if(M.isDataArrayTexture)ke?(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,be,ne.width,ne.height,ne.depth),ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ne,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,ge,Ne,ne.data);else if(M.isData3DTexture)ke?(We&&t.texStorage3D(n.TEXTURE_3D,S,be,ne.width,ne.height,ne.depth),ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ne,ne.data)):t.texImage3D(n.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,ge,Ne,ne.data);else if(M.isFramebufferTexture){if(We)if(ke)t.texStorage2D(n.TEXTURE_2D,S,be,ne.width,ne.height);else{let k=ne.width,V=ne.height;for(let ae=0;ae<S;ae++)t.texImage2D(n.TEXTURE_2D,ae,be,k,V,0,ge,Ne,null),k>>=1,V>>=1}}else if(De.length>0){if(ke&&We){const k=Ve(De[0]);t.texStorage2D(n.TEXTURE_2D,S,be,k.width,k.height)}for(let k=0,V=De.length;k<V;k++)xe=De[k],ke?ze&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,ge,Ne,xe):t.texImage2D(n.TEXTURE_2D,k,be,ge,Ne,xe);M.generateMipmaps=!1}else if(ke){if(We){const k=Ve(ne);t.texStorage2D(n.TEXTURE_2D,S,be,k.width,k.height)}ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ne,ne)}else t.texImage2D(n.TEXTURE_2D,0,be,ge,Ne,ne);m(M)&&p(ie),_e.__version=j.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Pe(I,M,K){if(M.image.length!==6)return;const ie=he(I,M),ce=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+K);const j=i.get(ce);if(ce.version!==j.__version||ie===!0){t.activeTexture(n.TEXTURE0+K);const _e=dt.getPrimaries(dt.workingColorSpace),te=M.colorSpace===Ti?null:dt.getPrimaries(M.colorSpace),Q=M.colorSpace===Ti||_e===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const fe=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let V=0;V<6;V++)!fe&&!ne?ge[V]=_(M.image[V],!0,r.maxCubemapSize):ge[V]=ne?M.image[V].image:M.image[V],ge[V]=Le(M,ge[V]);const Ne=ge[0],be=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),De=w(M.internalFormat,be,xe,M.colorSpace),ke=M.isVideoTexture!==!0,We=j.__version===void 0||ie===!0,ze=ce.dataReady;let S=v(M,Ne);le(n.TEXTURE_CUBE_MAP,M);let k;if(fe){ke&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,S,De,Ne.width,Ne.height);for(let V=0;V<6;V++){k=ge[V].mipmaps;for(let ae=0;ae<k.length;ae++){const ue=k[ae];M.format!==Wt?be!==null?ke?ze&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,0,0,ue.width,ue.height,be,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,De,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,0,0,ue.width,ue.height,be,xe,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,De,ue.width,ue.height,0,be,xe,ue.data)}}}else{if(k=M.mipmaps,ke&&We){k.length>0&&S++;const V=Ve(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,S,De,V.width,V.height)}for(let V=0;V<6;V++)if(ne){ke?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ge[V].width,ge[V].height,be,xe,ge[V].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,De,ge[V].width,ge[V].height,0,be,xe,ge[V].data);for(let ae=0;ae<k.length;ae++){const oe=k[ae].image[V].image;ke?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,0,0,oe.width,oe.height,be,xe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,De,oe.width,oe.height,0,be,xe,oe.data)}}else{ke?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,be,xe,ge[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,De,be,xe,ge[V]);for(let ae=0;ae<k.length;ae++){const ue=k[ae];ke?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,0,0,be,xe,ue.image[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,De,be,xe,ue.image[V])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),j.__version=ce.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function W(I,M,K,ie,ce,j){const _e=s.convert(K.format,K.colorSpace),te=s.convert(K.type),Q=w(K.internalFormat,_e,te,K.colorSpace);if(!i.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>j),ge=Math.max(1,M.height>>j);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,j,Q,ne,ge,M.depth,0,_e,te,null):t.texImage2D(ce,j,Q,ne,ge,0,_e,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Se(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ce,i.get(K).__webglTexture,0,de(M)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ce,i.get(K).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(I,M,K){if(n.bindRenderbuffer(n.RENDERBUFFER,I),M.depthBuffer&&!M.stencilBuffer){let ie=n.DEPTH_COMPONENT24;if(K||Se(M)){const ce=M.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Rn?ie=n.DEPTH_COMPONENT32F:ce.type===Vi&&(ie=n.DEPTH_COMPONENT24));const j=de(M);Se(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,ie,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,ie,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(M.depthBuffer&&M.stencilBuffer){const ie=de(M);K&&Se(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,M.width,M.height):Se(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{const ie=M.textures;for(let ce=0;ce<ie.length;ce++){const j=ie[ce],_e=s.convert(j.format,j.colorSpace),te=s.convert(j.type),Q=w(j.internalFormat,_e,te,j.colorSpace),fe=de(M);K&&Se(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Q,M.width,M.height):Se(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,ce=de(M);if(M.depthTexture.format===Di)Se(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Ps)Se(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function pe(I){const M=i.get(I),K=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Me(M.__webglFramebuffer,I)}else if(K){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=n.createRenderbuffer(),se(M.__webglDepthbuffer[ie],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),se(M.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(I,M,K){const ie=i.get(I);M!==void 0&&W(ie.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&pe(I)}function Te(I){const M=I.texture,K=i.get(I),ie=i.get(M);I.addEventListener("dispose",R);const ce=I.textures,j=I.isWebGLCubeRenderTarget===!0,_e=ce.length>1;if(_e||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=M.version,a.memory.textures++),j){K.__webglFramebuffer=[];for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[te]=[];for(let Q=0;Q<M.mipmaps.length;Q++)K.__webglFramebuffer[te][Q]=n.createFramebuffer()}else K.__webglFramebuffer[te]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let te=0;te<M.mipmaps.length;te++)K.__webglFramebuffer[te]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(_e)for(let te=0,Q=ce.length;te<Q;te++){const fe=i.get(ce[te]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Se(I)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let te=0;te<ce.length;te++){const Q=ce[te];K.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[te]);const fe=s.convert(Q.format,Q.colorSpace),ne=s.convert(Q.type),ge=w(Q.internalFormat,fe,ne,Q.colorSpace,I.isXRRenderTarget===!0),Ne=de(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ge,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,K.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),se(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),le(n.TEXTURE_CUBE_MAP,M);for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)W(K.__webglFramebuffer[te][Q],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Q);else W(K.__webglFramebuffer[te],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let te=0,Q=ce.length;te<Q;te++){const fe=ce[te],ne=i.get(fe);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),le(n.TEXTURE_2D,fe),W(K.__webglFramebuffer,I,fe,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,0),m(fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,ie.__webglTexture),le(te,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)W(K.__webglFramebuffer[Q],I,M,n.COLOR_ATTACHMENT0,te,Q);else W(K.__webglFramebuffer,I,M,n.COLOR_ATTACHMENT0,te,0);m(M)&&p(te),t.unbindTexture()}I.depthBuffer&&pe(I)}function F(I){const M=I.textures;for(let K=0,ie=M.length;K<ie;K++){const ce=M[K];if(m(ce)){const j=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ce).__webglTexture;t.bindTexture(j,_e),p(j),t.unbindTexture()}}}const me=[],Y=[];function Ie(I){if(I.samples>0){if(Se(I)===!1){const M=I.textures,K=I.width,ie=I.height;let ce=n.COLOR_BUFFER_BIT;const j=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(I),te=M.length>1;if(te)for(let Q=0;Q<M.length;Q++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Q=0;Q<M.length;Q++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Q]);const fe=i.get(M[Q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,K,ie,0,0,K,ie,ce,n.NEAREST),c===!0&&(me.length=0,Y.length=0,me.push(n.COLOR_ATTACHMENT0+Q),I.depthBuffer&&I.resolveDepthBuffer===!1&&(me.push(j),Y.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let Q=0;Q<M.length;Q++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Q]);const fe=i.get(M[Q]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const M=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function de(I){return Math.min(r.maxSamples,I.samples)}function Se(I){const M=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(I){const M=a.render.frame;u.get(I)!==M&&(u.set(I,M),I.update())}function Le(I,M){const K=I.colorSpace,ie=I.format,ce=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Wi&&K!==Ti&&(dt.getTransfer(K)===gt?(ie!==Wt||ce!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function Ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=E,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=L,this.setTextureCube=H,this.rebindTextures=Ce,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Se}function Hv(n,e){function t(i,r=Ti){let s;const a=dt.getTransfer(r);if(i===Gi)return n.UNSIGNED_BYTE;if(i===ld)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wp)return n.BYTE;if(i===bp)return n.SHORT;if(i===ad)return n.UNSIGNED_SHORT;if(i===od)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===Ep)return n.ALPHA;if(i===Tp)return n.RGB;if(i===Wt)return n.RGBA;if(i===Ap)return n.LUMINANCE;if(i===Cp)return n.LUMINANCE_ALPHA;if(i===Di)return n.DEPTH_COMPONENT;if(i===Ps)return n.DEPTH_STENCIL;if(i===Rp)return n.RED;if(i===ud)return n.RED_INTEGER;if(i===Pp)return n.RG;if(i===hd)return n.RG_INTEGER;if(i===dd)return n.RGBA_INTEGER;if(i===Po||i===Lo||i===Io||i===Do)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ac||i===Cc||i===Rc||i===Pc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Ic||i===Dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lc||i===Ic)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uc||i===Nc||i===kc||i===Fc||i===Oc||i===Bc||i===zc||i===Gc||i===Vc||i===Hc||i===Wc||i===Zc||i===Xc||i===Yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Kc||i===jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Uo)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lp||i===qc||i===$c||i===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Wv extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wa extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zv={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
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

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ht({vertexShader:Xv,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qt(new lr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class jv extends _r{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new Kv,m=t.getContextAttributes();let p=null,w=null;const v=[],y=[],R=new Oe;let C=null;const T=new ln;T.layers.enable(1),T.viewport=new Ft;const U=new ln;U.layers.enable(2),U.viewport=new Ft;const b=[T,U],x=new Wv;x.layers.enable(1),x.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=v[W];return se===void 0&&(se=new al,v[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=v[W];return se===void 0&&(se=new al,v[W]=se),se.getGripSpace()},this.getHand=function(W){let se=v[W];return se===void 0&&(se=new al,v[W]=se),se.getHandSpace()};function D(W){const se=y.indexOf(W.inputSource);if(se===-1)return;const Me=v[se];Me!==void 0&&(Me.update(W.inputSource,W.frame,l||a),Me.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",L);for(let W=0;W<v.length;W++){const se=y[W];se!==null&&(y[W]=null,v[W].disconnect(se))}E=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,w=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",O),r.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Pn(d.framebufferWidth,d.framebufferHeight,{format:Wt,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,Me=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Ps:Di,Me=m.stencil?Hs:Vi);const Ce={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Pn(f.textureWidth,f.textureHeight,{format:Wt,type:Gi,depthTexture:new Qa(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(W){for(let se=0;se<W.removed.length;se++){const Me=W.removed[se],pe=y.indexOf(Me);pe>=0&&(y[pe]=null,v[pe].disconnect(Me))}for(let se=0;se<W.added.length;se++){const Me=W.added[se];let pe=y.indexOf(Me);if(pe===-1){for(let Te=0;Te<v.length;Te++)if(Te>=y.length){y.push(Me),pe=Te;break}else if(y[Te]===null){y[Te]=Me,pe=Te;break}if(pe===-1)break}const Ce=v[pe];Ce&&Ce.connect(Me)}}const H=new z,$=new z;function G(W,se,Me){H.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(Me.matrixWorld);const pe=H.distanceTo($),Ce=se.projectionMatrix.elements,Te=Me.projectionMatrix.elements,F=Ce[14]/(Ce[10]-1),me=Ce[14]/(Ce[10]+1),Y=(Ce[9]+1)/Ce[5],Ie=(Ce[9]-1)/Ce[5],de=(Ce[8]-1)/Ce[0],Se=(Te[8]+1)/Te[0],Ae=F*de,Le=F*Se,Ve=pe/(-de+Se),I=Ve*-de;se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(I),W.translateZ(Ve),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const M=F+Ve,K=me+Ve,ie=Ae-I,ce=Le+(pe-I),j=Y*me/K*M,_e=Ie*me/K*M;W.projectionMatrix.makePerspective(ie,ce,j,_e,M,K),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ee(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),x.near=U.near=T.near=W.near,x.far=U.far=T.far=W.far,(E!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,N=x.far,T.near=E,T.far=N,U.near=E,U.far=N,T.updateProjectionMatrix(),U.updateProjectionMatrix(),W.updateProjectionMatrix());const se=W.parent,Me=x.cameras;ee(x,se);for(let pe=0;pe<Me.length;pe++)ee(Me[pe],se);Me.length===2?G(x,T,U):x.projectionMatrix.copy(T.projectionMatrix),le(W,x,se)};function le(W,se,Me){Me===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(Me.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Fl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let he=null;function Ee(W,se){if(u=se.getViewerPose(l||a),g=se,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let pe=!1;Me.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let Te=0;Te<Me.length;Te++){const F=Me[Te];let me=null;if(d!==null)me=d.getViewport(F);else{const Ie=h.getViewSubImage(f,F);me=Ie.viewport,Te===0&&(e.setRenderTargetTextures(w,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(w))}let Y=b[Te];Y===void 0&&(Y=new ln,Y.layers.enable(Te),Y.viewport=new Ft,b[Te]=Y),Y.matrix.fromArray(F.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(F.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(me.x,me.y,me.width,me.height),Te===0&&(x.matrix.copy(Y.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(Y)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=h.getDepthInformation(Me[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,r.renderState)}}for(let Me=0;Me<v.length;Me++){const pe=y[Me],Ce=v[Me];pe!==null&&Ce!==void 0&&Ce.update(pe,se,l||a)}_.render(e,x),he&&he(W,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Pe=new Td;Pe.setAnimationLoop(Ee),this.setAnimationLoop=function(W){he=W},this.dispose=function(){}}}const $i=new ui,qv=new ut;function $v(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),v=w.envMap,y=w.envMapRotation;if(v&&(m.envMap.value=v,$i.copy(y),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler($i)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const y=v.program;i.uniformBlockBinding(w,y)}function l(w,v){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(w,R);const C=e.render.frame;s[w.id]!==C&&(f(w),s[w.id]=C)}function u(w){const v=h();w.__bindingPointIndex=v;const y=n.createBuffer(),R=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const v=r[w.id],y=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,T=y.length;C<T;C++){const U=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,x=U.length;b<x;b++){const E=U[b];if(d(E,C,b,R)===!0){const N=E.__offset,D=Array.isArray(E.value)?E.value:[E.value];let O=0;for(let L=0;L<D.length;L++){const H=D[L],$=_(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+O,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,v,y,R){const C=w.value,T=v+"_"+y;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const U=R[T];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[T]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(w){const v=w.uniforms;let y=0;const R=16;for(let T=0,U=v.length;T<U;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,E=b.length;x<E;x++){const N=b[x],D=Array.isArray(N.value)?N.value:[N.value];for(let O=0,L=D.length;O<L;O++){const H=D[O],$=_(H),G=y%R;G!==0&&R-G<$.boundary&&(y+=R-G),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=$.storage}}}const C=y%R;return C>0&&(y+=R-C),w.__size=y,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Qv{constructor(e={}){const{canvas:t=Zp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const v=this;let y=!1,R=0,C=0,T=null,U=-1,b=null;const x=new Ft,E=new Ft;let N=null;const D=new tt(0);let O=0,L=t.width,H=t.height,$=1,G=null,ee=null;const le=new Ft(0,0,L,H),he=new Ft(0,0,L,H);let Ee=!1;const Pe=new Ed;let W=!1,se=!1;const Me=new ut,pe=new z,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return T===null?$:1}let F=i;function me(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",V,!1),F===null){const B="webgl2";if(F=me(B,A),F===null)throw me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Y,Ie,de,Se,Ae,Le,Ve,I,M,K,ie,ce,j,_e,te,Q,fe,ne,ge,Ne,be,xe,De,ke;function We(){Y=new o_(F),Y.init(),xe=new Hv(F,Y),Ie=new t_(F,Y,e,xe),de=new Gv(F),Se=new u_(F),Ae=new Av,Le=new Vv(F,Y,de,Ae,Ie,xe,Se),Ve=new i_(v),I=new a_(v),M=new _m(F),De=new Q0(F,M),K=new l_(F,M,Se,De),ie=new d_(F,K,M,Se),ge=new h_(F,Ie,Le),Q=new n_(Ae),ce=new Tv(v,Ve,I,Y,Ie,De,Q),j=new $v(v,Ae),_e=new Rv,te=new Nv(Y),ne=new J0(v,Ve,I,de,ie,f,c),fe=new zv(v,ie,Ie),ke=new Jv(F,Se,Ie,de),Ne=new e_(F,Y,Se),be=new c_(F,Y,Se),Se.programs=ce.programs,v.capabilities=Ie,v.extensions=Y,v.properties=Ae,v.renderLists=_e,v.shadowMap=fe,v.state=de,v.info=Se}We();const ze=new jv(v,F);this.xr=ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Y.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Y.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(L,H,!1))},this.getSize=function(A){return A.set(L,H)},this.setSize=function(A,B,q=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,H=B,t.width=Math.floor(A*$),t.height=Math.floor(B*$),q===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(L*$,H*$).floor()},this.setDrawingBufferSize=function(A,B,q){L=A,H=B,$=q,t.width=Math.floor(A*q),t.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,B,q,Z){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,B,q,Z),de.viewport(x.copy(le).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,B,q,Z){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,B,q,Z),de.scissor(E.copy(he).multiplyScalar($).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){de.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(A=!0,B=!0,q=!0){let Z=0;if(A){let X=!1;if(T!==null){const we=T.texture.format;X=we===dd||we===hd||we===ud}if(X){const we=T.texture.type,Re=we===Gi||we===Vi||we===ad||we===Hs||we===ld||we===cd,Ue=ne.getClearColor(),Ge=ne.getClearAlpha(),Ze=Ue.r,je=Ue.g,et=Ue.b;Re?(d[0]=Ze,d[1]=je,d[2]=et,d[3]=Ge,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Ze,g[1]=je,g[2]=et,g[3]=Ge,F.clearBufferiv(F.COLOR,0,g))}else Z|=F.COLOR_BUFFER_BIT}B&&(Z|=F.DEPTH_BUFFER_BIT),q&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",V,!1),_e.dispose(),te.dispose(),Ae.dispose(),Ve.dispose(),I.dispose(),ie.dispose(),De.dispose(),ke.dispose(),ce.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",nt),ze.removeEventListener("sessionend",Mt),mt.stop()};function S(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Se.autoReset,B=fe.enabled,q=fe.autoUpdate,Z=fe.needsUpdate,X=fe.type;We(),Se.autoReset=A,fe.enabled=B,fe.autoUpdate=q,fe.needsUpdate=Z,fe.type=X}function V(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const B=A.target;B.removeEventListener("dispose",ae),ue(B)}function ue(A){oe(A),Ae.remove(A)}function oe(A){const B=Ae.get(A).programs;B!==void 0&&(B.forEach(function(q){ce.releaseProgram(q)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Z,X,we){B===null&&(B=Ce);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Ue=Df(A,B,q,Z,X);de.setMaterial(Z,Re);let Ge=q.index,Ze=1;if(Z.wireframe===!0){if(Ge=K.getWireframeAttribute(q),Ge===void 0)return;Ze=2}const je=q.drawRange,et=q.attributes.position;let Et=je.start*Ze,Ot=(je.start+je.count)*Ze;we!==null&&(Et=Math.max(Et,we.start*Ze),Ot=Math.min(Ot,(we.start+we.count)*Ze)),Ge!==null?(Et=Math.max(Et,0),Ot=Math.min(Ot,Ge.count)):et!=null&&(Et=Math.max(Et,0),Ot=Math.min(Ot,et.count));const rn=Ot-Et;if(rn<0||rn===1/0)return;De.setup(X,Z,Ue,q,Ge);let jn,ot=Ne;if(Ge!==null&&(jn=M.get(Ge),ot=be,ot.setIndex(jn)),X.isMesh)Z.wireframe===!0?(de.setLineWidth(Z.wireframeLinewidth*Te()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(X.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),de.setLineWidth(Xe*Te()),X.isLineSegments?ot.setMode(F.LINES):X.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else X.isPoints?ot.setMode(F.POINTS):X.isSprite&&ot.setMode(F.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ot.renderInstances(Et,rn,X.count);else if(q.isInstancedBufferGeometry){const Xe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hs=Math.min(q.instanceCount,Xe);ot.renderInstances(Et,rn,hs)}else ot.render(Et,rn)};function Ke(A,B,q){A.transparent===!0&&A.side===zn&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,ea(A,B,q),A.side=gn,A.needsUpdate=!0,ea(A,B,q),A.side=zn):ea(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=te.get(q),m.init(B),w.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),A!==q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(v._useLegacyLights);const Z=new Set;return A.traverse(function(X){const we=X.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){const Ue=we[Re];Ke(Ue,q,X),Z.add(Ue)}else Ke(we,q,X),Z.add(we)}),w.pop(),m=null,Z},this.compileAsync=function(A,B,q=null){const Z=this.compile(A,B,q);return new Promise(X=>{function we(){if(Z.forEach(function(Re){Ae.get(Re).currentProgram.isReady()&&Z.delete(Re)}),Z.size===0){X(A);return}setTimeout(we,10)}Y.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let pt=null;function bt(A){pt&&pt(A)}function nt(){mt.stop()}function Mt(){mt.start()}const mt=new Td;mt.setAnimationLoop(bt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(A){pt=A,ze.setAnimationLoop(A),A===null?mt.stop():mt.start()},ze.addEventListener("sessionstart",nt),ze.addEventListener("sessionend",Mt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(B),B=ze.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,T),m=te.get(A,w.length),m.init(B),w.push(m),Me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Pe.setFromProjectionMatrix(Me),se=this.localClippingEnabled,W=Q.init(this.clippingPlanes,se),_=_e.get(A,p.length),_.init(),p.push(_),hi(A,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,ee);const q=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1;q&&ne.addToRenderList(_,A),this.info.render.frame++,W===!0&&Q.beginShadows();const Z=m.state.shadowsArray;fe.render(Z,A,B),W===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,we=_.transmissive;if(m.setupLights(v._useLegacyLights),B.isArrayCamera){const Re=B.cameras;if(we.length>0)for(let Ue=0,Ge=Re.length;Ue<Ge;Ue++){const Ze=Re[Ue];di(X,we,A,Ze)}q&&ne.render(A);for(let Ue=0,Ge=Re.length;Ue<Ge;Ue++){const Ze=Re[Ue];un(_,A,Ze,Ze.viewport)}}else we.length>0&&di(X,we,A,B),q&&ne.render(A),un(_,A,B);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,B),De.resetDefaultState(),U=-1,b=null,w.pop(),w.length>0?(m=w[w.length-1],W===!0&&Q.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function hi(A,B,q,Z){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){Z&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Re=ie.update(A),Ue=A.material;Ue.visible&&_.push(A,Re,Ue,q,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const Re=ie.update(A),Ue=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),pe.copy(Re.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ue)){const Ge=Re.groups;for(let Ze=0,je=Ge.length;Ze<je;Ze++){const et=Ge[Ze],Et=Ue[et.materialIndex];Et&&Et.visible&&_.push(A,Re,Et,q,pe.z,et)}}else Ue.visible&&_.push(A,Re,Ue,q,pe.z,null)}}const we=A.children;for(let Re=0,Ue=we.length;Re<Ue;Re++)hi(we[Re],B,q,Z)}function un(A,B,q,Z){const X=A.opaque,we=A.transmissive,Re=A.transparent;m.setupLightsView(q),W===!0&&Q.setGlobalState(v.clippingPlanes,q),Z&&de.viewport(x.copy(Z)),X.length>0&&Kn(X,B,q),we.length>0&&Kn(we,B,q),Re.length>0&&Kn(Re,B,q),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function di(A,B,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Pn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?es:Gi,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const we=m.state.transmissionRenderTarget[Z.id],Re=Z.viewport||x;we.setSize(Re.z,Re.w);const Ue=v.getRenderTarget();v.setRenderTarget(we),v.getClearColor(D),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Ge=v.toneMapping;v.toneMapping=Ii;const Ze=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),W===!0&&Q.setGlobalState(v.clippingPlanes,Z),Kn(A,q,Z),Le.updateMultisampleRenderTarget(we),Le.updateRenderTargetMipmap(we),Y.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let et=0,Et=B.length;et<Et;et++){const Ot=B[et],rn=Ot.object,jn=Ot.geometry,ot=Ot.material,Xe=Ot.group;if(ot.side===zn&&rn.layers.test(Z.layers)){const hs=ot.side;ot.side=tn,ot.needsUpdate=!0,us(rn,q,Z,jn,ot,Xe),ot.side=hs,ot.needsUpdate=!0,je=!0}}je===!0&&(Le.updateMultisampleRenderTarget(we),Le.updateRenderTargetMipmap(we))}v.setRenderTarget(Ue),v.setClearColor(D,O),Ze!==void 0&&(Z.viewport=Ze),v.toneMapping=Ge}function Kn(A,B,q){const Z=B.isScene===!0?B.overrideMaterial:null;for(let X=0,we=A.length;X<we;X++){const Re=A[X],Ue=Re.object,Ge=Re.geometry,Ze=Z===null?Re.material:Z,je=Re.group;Ue.layers.test(q.layers)&&us(Ue,B,q,Ge,Ze,je)}}function us(A,B,q,Z,X,we){A.onBeforeRender(v,B,q,Z,X,we),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(v,B,q,Z,A,we),X.transparent===!0&&X.side===zn&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,v.renderBufferDirect(q,B,Z,X,A,we),X.side=gn,X.needsUpdate=!0,v.renderBufferDirect(q,B,Z,X,A,we),X.side=zn):v.renderBufferDirect(q,B,Z,X,A,we),A.onAfterRender(v,B,q,Z,X,we)}function ea(A,B,q){B.isScene!==!0&&(B=Ce);const Z=Ae.get(A),X=m.state.lights,we=m.state.shadowsArray,Re=X.state.version,Ue=ce.getParameters(A,X.state,we,B,q),Ge=ce.getProgramCacheKey(Ue);let Ze=Z.programs;Z.environment=A.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(A.isMeshStandardMaterial?I:Ve).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",ae),Ze=new Map,Z.programs=Ze);let je=Ze.get(Ge);if(je!==void 0){if(Z.currentProgram===je&&Z.lightsStateVersion===Re)return yc(A,Ue),je}else Ue.uniforms=ce.getUniforms(A),A.onBuild(q,Ue,v),A.onBeforeCompile(Ue,v),je=ce.acquireProgram(Ue,Ge),Ze.set(Ge,je),Z.uniforms=Ue.uniforms;const et=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=Q.uniform),yc(A,Ue),Z.needsLights=Nf(A),Z.lightsStateVersion=Re,Z.needsLights&&(et.ambientLightColor.value=X.state.ambient,et.lightProbe.value=X.state.probe,et.directionalLights.value=X.state.directional,et.directionalLightShadows.value=X.state.directionalShadow,et.spotLights.value=X.state.spot,et.spotLightShadows.value=X.state.spotShadow,et.rectAreaLights.value=X.state.rectArea,et.ltc_1.value=X.state.rectAreaLTC1,et.ltc_2.value=X.state.rectAreaLTC2,et.pointLights.value=X.state.point,et.pointLightShadows.value=X.state.pointShadow,et.hemisphereLights.value=X.state.hemi,et.directionalShadowMap.value=X.state.directionalShadowMap,et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,et.spotShadowMap.value=X.state.spotShadowMap,et.spotLightMatrix.value=X.state.spotLightMatrix,et.spotLightMap.value=X.state.spotLightMap,et.pointShadowMap.value=X.state.pointShadowMap,et.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=je,Z.uniformsList=null,je}function xc(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Ba.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function yc(A,B){const q=Ae.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Df(A,B,q,Z,X){B.isScene!==!0&&(B=Ce),Le.resetTextureUnits();const we=B.fog,Re=Z.isMeshStandardMaterial?B.environment:null,Ue=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Wi,Ge=(Z.isMeshStandardMaterial?I:Ve).get(Z.envMap||Re),Ze=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),et=!!q.morphAttributes.position,Et=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let rn=Ii;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(rn=v.toneMapping);const jn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=jn!==void 0?jn.length:0,Xe=Ae.get(Z),hs=m.state.lights;if(W===!0&&(se===!0||A!==b)){const hn=A===b&&Z.id===U;Q.setState(Z,A,hn)}let _t=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==hs.state.version||Xe.outputColorSpace!==Ue||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==Ge||Z.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Q.numPlanes||Xe.numIntersection!==Q.numIntersection)||Xe.vertexAlphas!==Ze||Xe.vertexTangents!==je||Xe.morphTargets!==et||Xe.morphNormals!==Et||Xe.morphColors!==Ot||Xe.toneMapping!==rn||Xe.morphTargetsCount!==ot)&&(_t=!0):(_t=!0,Xe.__version=Z.version);let Zi=Xe.currentProgram;_t===!0&&(Zi=ea(Z,B,X));let Sc=!1,ds=!1,To=!1;const Bt=Zi.getUniforms(),fi=Xe.uniforms;if(de.useProgram(Zi.program)&&(Sc=!0,ds=!0,To=!0),Z.id!==U&&(U=Z.id,ds=!0),Sc||b!==A){Bt.setValue(F,"projectionMatrix",A.projectionMatrix),Bt.setValue(F,"viewMatrix",A.matrixWorldInverse);const hn=Bt.map.cameraPosition;hn!==void 0&&hn.setValue(F,pe.setFromMatrixPosition(A.matrixWorld)),Ie.logarithmicDepthBuffer&&Bt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Bt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ds=!0,To=!0)}if(X.isSkinnedMesh){Bt.setOptional(F,X,"bindMatrix"),Bt.setOptional(F,X,"bindMatrixInverse");const hn=X.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Bt.setValue(F,"boneTexture",hn.boneTexture,Le))}X.isBatchedMesh&&(Bt.setOptional(F,X,"batchingTexture"),Bt.setValue(F,"batchingTexture",X._matricesTexture,Le));const Ao=q.morphAttributes;if((Ao.position!==void 0||Ao.normal!==void 0||Ao.color!==void 0)&&ge.update(X,q,Zi),(ds||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Bt.setValue(F,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(fi.envMap.value=Ge,fi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(fi.envMapIntensity.value=B.environmentIntensity),ds&&(Bt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Uf(fi,To),we&&Z.fog===!0&&j.refreshFogUniforms(fi,we),j.refreshMaterialUniforms(fi,Z,$,H,m.state.transmissionRenderTarget[A.id]),Ba.upload(F,xc(Xe),fi,Le)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ba.upload(F,xc(Xe),fi,Le),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Bt.setValue(F,"center",X.center),Bt.setValue(F,"modelViewMatrix",X.modelViewMatrix),Bt.setValue(F,"normalMatrix",X.normalMatrix),Bt.setValue(F,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const hn=Z.uniformsGroups;for(let Co=0,kf=hn.length;Co<kf;Co++){const wc=hn[Co];ke.update(wc,Zi),ke.bind(wc,Zi)}}return Zi}function Uf(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Nf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,B,q){Ae.get(A.texture).__webglTexture=B,Ae.get(A.depthTexture).__webglTexture=q;const Z=Ae.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const q=Ae.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){T=A,R=B,C=q;let Z=!0,X=null,we=!1,Re=!1;if(A){const Ge=Ae.get(A);Ge.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1):Ge.__webglFramebuffer===void 0?Le.setupRenderTarget(A):Ge.__hasExternalTextures&&Le.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Re=!0);const je=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[B])?X=je[B][q]:X=je[B],we=!0):A.samples>0&&Le.useMultisampledRTT(A)===!1?X=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?X=je[q]:X=je,x.copy(A.viewport),E.copy(A.scissor),N=A.scissorTest}else x.copy(le).multiplyScalar($).floor(),E.copy(he).multiplyScalar($).floor(),N=Ee;if(de.bindFramebuffer(F.FRAMEBUFFER,X)&&Z&&de.drawBuffers(A,X),de.viewport(x),de.scissor(E),de.setScissorTest(N),we){const Ge=Ae.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ge.__webglTexture,q)}else if(Re){const Ge=Ae.get(A.texture),Ze=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,q||0,Ze)}U=-1},this.readRenderTargetPixels=function(A,B,q,Z,X,we,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){de.bindFramebuffer(F.FRAMEBUFFER,Ue);try{const Ge=A.texture,Ze=Ge.format,je=Ge.type;if(!Ie.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Z&&q>=0&&q<=A.height-X&&F.readPixels(B,q,Z,X,xe.convert(Ze),xe.convert(je),we)}finally{const Ge=T!==null?Ae.get(T).__webglFramebuffer:null;de.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(A,B,q=0){const Z=Math.pow(2,-q),X=Math.floor(B.image.width*Z),we=Math.floor(B.image.height*Z);Le.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,A.x,A.y,X,we),de.unbindTexture()},this.copyTextureToTexture=function(A,B,q,Z=0){const X=B.image.width,we=B.image.height,Re=xe.convert(q.format),Ue=xe.convert(q.type);Le.setTexture2D(q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Z,A.x,A.y,X,we,Re,Ue,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Z,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Re,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,Z,A.x,A.y,Re,Ue,B.image),Z===0&&q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q,Z,X=0){const we=A.max.x-A.min.x,Re=A.max.y-A.min.y,Ue=A.max.z-A.min.z,Ge=xe.convert(Z.format),Ze=xe.convert(Z.type);let je;if(Z.isData3DTexture)Le.setTexture3D(Z,0),je=F.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)Le.setTexture2DArray(Z,0),je=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const et=F.getParameter(F.UNPACK_ROW_LENGTH),Et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ot=F.getParameter(F.UNPACK_SKIP_PIXELS),rn=F.getParameter(F.UNPACK_SKIP_ROWS),jn=F.getParameter(F.UNPACK_SKIP_IMAGES),ot=q.isCompressedTexture?q.mipmaps[X]:q.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?F.texSubImage3D(je,X,B.x,B.y,B.z,we,Re,Ue,Ge,Ze,ot.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(je,X,B.x,B.y,B.z,we,Re,Ue,Ge,ot.data):F.texSubImage3D(je,X,B.x,B.y,B.z,we,Re,Ue,Ge,Ze,ot),F.pixelStorei(F.UNPACK_ROW_LENGTH,et),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,rn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jn),X===0&&Z.generateMipmaps&&F.generateMipmap(je),de.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Le.setTextureCube(A,0):A.isData3DTexture?Le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Le.setTexture2DArray(A,0):Le.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,de.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rc?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===_o?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ol extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Id extends $t{constructor(e=null,t=1,i=1,r,s,a,o,c,l=xt,u=xt,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eo=new z,to=new z,Hu=new ut,vs=new sc,ba=new vo,ll=new z,Wu=new z;let ex=class extends nn{constructor(e=new Yn,t=new Dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)eo.fromBufferAttribute(t,r-1),to.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=eo.distanceTo(to);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;Hu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(Hu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),w=u.getX(_+1),v=Ma(this,e,vs,c,p,w);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ma(this,e,vs,c,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=Ma(this,e,vs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ma(this,e,vs,c,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ma(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(eo.fromBufferAttribute(a,r),to.fromBufferAttribute(a,s),t.distanceSqToSegment(eo,to,ll,Wu)>i)return;ll.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ll);if(!(c<e.near||c>e.far))return{distance:c,point:Wu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Zu=new z,Xu=new z;class cl extends ex{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Zu.fromBufferAttribute(t,r),Xu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zu.distanceTo(Xu);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ul extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const Ku={type:"change"},hl={type:"start"},ju={type:"end"},Ea=new sc,qu=new Si,tx=Math.cos(70*Wp.DEG2RAD);class Ud extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",fe),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ku),i.update(),s=r.NONE},this.update=function(){const S=new z,k=new hr().setFromUnitVectors(e.up,new z(0,1,0)),V=k.clone().invert(),ae=new z,ue=new hr,oe=new z,Ke=2*Math.PI;return function(bt=null){const nt=i.object.position;S.copy(nt).sub(i.target),S.applyQuaternion(k),o.setFromVector3(S),i.autoRotate&&s===r.NONE&&N(x(bt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Mt=i.minAzimuthAngle,mt=i.maxAzimuthAngle;isFinite(Mt)&&isFinite(mt)&&(Mt<-Math.PI?Mt+=Ke:Mt>Math.PI&&(Mt-=Ke),mt<-Math.PI?mt+=Ke:mt>Math.PI&&(mt-=Ke),Mt<=mt?o.theta=Math.max(Mt,Math.min(mt,o.theta)):o.theta=o.theta>(Mt+mt)/2?Math.max(Mt,o.theta):Math.min(mt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let hi=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)o.radius=le(o.radius);else{const un=o.radius;o.radius=le(o.radius*l),hi=un!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion(V),nt.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&C){let un=null;if(i.object.isPerspectiveCamera){const di=S.length();un=le(di*l);const Kn=di-un;i.object.position.addScaledVector(y,Kn),i.object.updateMatrixWorld(),hi=!!Kn}else if(i.object.isOrthographicCamera){const di=new z(R.x,R.y,0);di.unproject(i.object);const Kn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),hi=Kn!==i.object.zoom;const us=new z(R.x,R.y,0);us.unproject(i.object),i.object.position.sub(us).add(di),i.object.updateMatrixWorld(),un=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;un!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(un).add(i.object.position):(Ea.origin.copy(i.object.position),Ea.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ea.direction))<tx?e.lookAt(i.target):(qu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ea.intersectPlane(qu,i.target))))}else if(i.object.isOrthographicCamera){const un=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),un!==i.object.zoom&&(i.object.updateProjectionMatrix(),hi=!0)}return l=1,C=!1,hi||ae.distanceToSquared(i.object.position)>a||8*(1-ue.dot(i.object.quaternion))>a||oe.distanceToSquared(i.target)>a?(i.dispatchEvent(Ku),ae.copy(i.object.position),ue.copy(i.object.quaternion),oe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ne),i.domElement.removeEventListener("pointerdown",I),i.domElement.removeEventListener("pointercancel",K),i.domElement.removeEventListener("wheel",j),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",K),i.domElement.getRootNode().removeEventListener("keydown",te,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Yu,c=new Yu;let l=1;const u=new z,h=new Oe,f=new Oe,d=new Oe,g=new Oe,_=new Oe,m=new Oe,p=new Oe,w=new Oe,v=new Oe,y=new z,R=new Oe;let C=!1;const T=[],U={};let b=!1;function x(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function E(S){const k=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*k)}function N(S){c.theta-=S}function D(S){c.phi-=S}const O=function(){const S=new z;return function(V,ae){S.setFromMatrixColumn(ae,0),S.multiplyScalar(-V),u.add(S)}}(),L=function(){const S=new z;return function(V,ae){i.screenSpacePanning===!0?S.setFromMatrixColumn(ae,1):(S.setFromMatrixColumn(ae,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(V),u.add(S)}}(),H=function(){const S=new z;return function(V,ae){const ue=i.domElement;if(i.object.isPerspectiveCamera){const oe=i.object.position;S.copy(oe).sub(i.target);let Ke=S.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),O(2*V*Ke/ue.clientHeight,i.object.matrix),L(2*ae*Ke/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(V*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),L(ae*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(S,k){if(!i.zoomToCursor)return;C=!0;const V=i.domElement.getBoundingClientRect(),ae=S-V.left,ue=k-V.top,oe=V.width,Ke=V.height;R.x=ae/oe*2-1,R.y=-(ue/Ke)*2+1,y.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function le(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function he(S){h.set(S.clientX,S.clientY)}function Ee(S){ee(S.clientX,S.clientX),p.set(S.clientX,S.clientY)}function Pe(S){g.set(S.clientX,S.clientY)}function W(S){f.set(S.clientX,S.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const k=i.domElement;N(2*Math.PI*d.x/k.clientHeight),D(2*Math.PI*d.y/k.clientHeight),h.copy(f),i.update()}function se(S){w.set(S.clientX,S.clientY),v.subVectors(w,p),v.y>0?$(E(v.y)):v.y<0&&G(E(v.y)),p.copy(w),i.update()}function Me(S){_.set(S.clientX,S.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_),i.update()}function pe(S){ee(S.clientX,S.clientY),S.deltaY<0?G(E(S.deltaY)):S.deltaY>0&&$(E(S.deltaY)),i.update()}function Ce(S){let k=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),k=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),k=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),k=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),k=!0;break}k&&(S.preventDefault(),i.update())}function Te(S){if(T.length===1)h.set(S.pageX,S.pageY);else{const k=We(S),V=.5*(S.pageX+k.x),ae=.5*(S.pageY+k.y);h.set(V,ae)}}function F(S){if(T.length===1)g.set(S.pageX,S.pageY);else{const k=We(S),V=.5*(S.pageX+k.x),ae=.5*(S.pageY+k.y);g.set(V,ae)}}function me(S){const k=We(S),V=S.pageX-k.x,ae=S.pageY-k.y,ue=Math.sqrt(V*V+ae*ae);p.set(0,ue)}function Y(S){i.enableZoom&&me(S),i.enablePan&&F(S)}function Ie(S){i.enableZoom&&me(S),i.enableRotate&&Te(S)}function de(S){if(T.length==1)f.set(S.pageX,S.pageY);else{const V=We(S),ae=.5*(S.pageX+V.x),ue=.5*(S.pageY+V.y);f.set(ae,ue)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const k=i.domElement;N(2*Math.PI*d.x/k.clientHeight),D(2*Math.PI*d.y/k.clientHeight),h.copy(f)}function Se(S){if(T.length===1)_.set(S.pageX,S.pageY);else{const k=We(S),V=.5*(S.pageX+k.x),ae=.5*(S.pageY+k.y);_.set(V,ae)}m.subVectors(_,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(_)}function Ae(S){const k=We(S),V=S.pageX-k.x,ae=S.pageY-k.y,ue=Math.sqrt(V*V+ae*ae);w.set(0,ue),v.set(0,Math.pow(w.y/p.y,i.zoomSpeed)),$(v.y),p.copy(w);const oe=(S.pageX+k.x)*.5,Ke=(S.pageY+k.y)*.5;ee(oe,Ke)}function Le(S){i.enableZoom&&Ae(S),i.enablePan&&Se(S)}function Ve(S){i.enableZoom&&Ae(S),i.enableRotate&&de(S)}function I(S){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",K)),!De(S)&&(be(S),S.pointerType==="touch"?ne(S):ie(S)))}function M(S){i.enabled!==!1&&(S.pointerType==="touch"?ge(S):ce(S))}function K(S){switch(xe(S),T.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",K),i.dispatchEvent(ju),s=r.NONE;break;case 1:const k=T[0],V=U[k];ne({pointerId:k,pageX:V.x,pageY:V.y});break}}function ie(S){let k;switch(S.button){case 0:k=i.mouseButtons.LEFT;break;case 1:k=i.mouseButtons.MIDDLE;break;case 2:k=i.mouseButtons.RIGHT;break;default:k=-1}switch(k){case xr.DOLLY:if(i.enableZoom===!1)return;Ee(S),s=r.DOLLY;break;case xr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;Pe(S),s=r.PAN}else{if(i.enableRotate===!1)return;he(S),s=r.ROTATE}break;case xr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;he(S),s=r.ROTATE}else{if(i.enablePan===!1)return;Pe(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(hl)}function ce(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(S);break;case r.DOLLY:if(i.enableZoom===!1)return;se(S);break;case r.PAN:if(i.enablePan===!1)return;Me(S);break}}function j(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(hl),pe(_e(S)),i.dispatchEvent(ju))}function _e(S){const k=S.deltaMode,V={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(k){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return S.ctrlKey&&!b&&(V.deltaY*=10),V}function te(S){S.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",Q,{passive:!0,capture:!0}))}function Q(S){S.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",Q,{passive:!0,capture:!0}))}function fe(S){i.enabled===!1||i.enablePan===!1||Ce(S)}function ne(S){switch(ke(S),T.length){case 1:switch(i.touches.ONE){case yr.ROTATE:if(i.enableRotate===!1)return;Te(S),s=r.TOUCH_ROTATE;break;case yr.PAN:if(i.enablePan===!1)return;F(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(S),s=r.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ie(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(hl)}function ge(S){switch(ke(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;de(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Se(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ve(S),i.update();break;default:s=r.NONE}}function Ne(S){i.enabled!==!1&&S.preventDefault()}function be(S){T.push(S.pointerId)}function xe(S){delete U[S.pointerId];for(let k=0;k<T.length;k++)if(T[k]==S.pointerId){T.splice(k,1);return}}function De(S){for(let k=0;k<T.length;k++)if(T[k]==S.pointerId)return!0;return!1}function ke(S){let k=U[S.pointerId];k===void 0&&(k=new Oe,U[S.pointerId]=k),k.set(S.pageX,S.pageY)}function We(S){const k=S.pointerId===T[0]?T[1]:T[0];return U[k]}i.domElement.addEventListener("contextmenu",Ne),i.domElement.addEventListener("pointerdown",I),i.domElement.addEventListener("pointercancel",K),i.domElement.addEventListener("wheel",j,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",te,{passive:!0,capture:!0}),this.update()}}function nx(n){return n.length>=2&&n[0]===31&&n[1]===139}function ix(n){return n.length>=2&&n[0]===120&&(n[1]===1||n[1]===94||n[1]===156||n[1]===218)}function rx(n){const e=n.slice(0,8),t=new DataView(e.buffer,e.byteOffset),i=t.getUint32(0,!0),r=t.getUint32(4,!0);if(e.length===8&&i>0&&i<100&&r===n.byteLength-8)return i}const sx=new TextEncoder,ax=new TextDecoder;function ox(n){return sx.encode(n)}function lx(n){return ax.decode(n instanceof Uint8Array?n:Uint8Array.from(n))}class Nd{constructor(e,t){P(this,"littleEndian");P(this,"offset");P(this,"array");P(this,"view");P(this,"readByte",this.readNumber.bind(this,"getInt8",1));P(this,"readShort",this.readNumber.bind(this,"getInt16",2));P(this,"readInt",this.readNumber.bind(this,"getInt32",4));P(this,"readFloat",this.readNumber.bind(this,"getFloat32",4));P(this,"readDouble",this.readNumber.bind(this,"getFloat64",8));this.littleEndian=(t==null?void 0:t.littleEndian)??!1,this.offset=(t==null?void 0:t.offset)??0,this.array=e instanceof Uint8Array?e:new Uint8Array(e),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}readNumber(e,t){this.requireAvailable(t);const i=this.view[e](this.offset,this.littleEndian);return this.offset+=t,i}requireAvailable(e){if(e<0)throw new Error(`Cannot read negative byte length ${e}`);if(this.offset+e>this.array.byteLength)throw new Error(`Cannot read ${e} bytes at offset ${this.offset}; input length is ${this.array.byteLength}`)}readBytes(e){this.requireAvailable(e);const t=this.array.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){this.requireAvailable(2);const e=this.view.getUint16(this.offset,this.littleEndian);this.offset+=2;const t=this.readBytes(e);return lx(t)}}class kd{constructor(e){P(this,"littleEndian");P(this,"offset");P(this,"buffer");P(this,"array");P(this,"view");P(this,"writeByte",this.writeNumber.bind(this,"setInt8",1));P(this,"writeShort",this.writeNumber.bind(this,"setInt16",2));P(this,"writeInt",this.writeNumber.bind(this,"setInt32",4));P(this,"writeFloat",this.writeNumber.bind(this,"setFloat32",4));P(this,"writeDouble",this.writeNumber.bind(this,"setFloat64",8));this.littleEndian=(e==null?void 0:e.littleEndian)??!1,this.offset=(e==null?void 0:e.offset)??0,this.buffer=new ArrayBuffer((e==null?void 0:e.initialSize)??1024),this.array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer)}accommodate(e){const t=this.offset+e;if(this.buffer.byteLength>=t)return;let i=this.buffer.byteLength;for(;i<t;)i*=2;const r=new ArrayBuffer(i),s=new Uint8Array(r);s.set(this.array),this.offset>this.buffer.byteLength&&s.fill(0,this.buffer.byteLength,this.offset),this.buffer=r,this.view=new DataView(r),this.array=s}writeNumber(e,t,i){this.accommodate(t),this.view[e](this.offset,i,this.littleEndian),this.offset+=t}writeBytes(e){this.accommodate(e.length),this.array.set(e,this.offset),this.offset+=e.length}writeString(e){const t=ox(e);if(t.length>65535)throw new Error(`NBT strings cannot exceed 65535 bytes; got ${t.length}`);this.accommodate(2),this.view.setUint16(this.offset,t.length,this.littleEndian),this.offset+=2,this.writeBytes(t)}getData(){return this.accommodate(0),this.array.slice(0,this.offset)}}var re;(function(n){function e(h){return typeof h=="number"?h:void 0}n.readNumber=e;function t(h){return typeof h=="number"?Math.floor(h):void 0}n.readInt=t;function i(h){return typeof h=="string"?h:void 0}n.readString=i;function r(h){return typeof h=="boolean"?h:void 0}n.readBoolean=r;function s(h){return typeof h=="object"&&h!==null&&!Array.isArray(h)?h:void 0}n.readObject=s;function a(h,f){if(Array.isArray(h))return f?h.map(d=>f(d)):h}n.readArray=a;function o(h,f){if(Array.isArray(h))return[0,1].map(d=>f(h[d]))}n.readPair=o;function c(h,f){const d=s(h)??{};return Object.fromEntries(Object.entries(d).map(([g,_])=>[g,f(_)]))}n.readMap=c;function l(h,f,d){const g=f(h);return g?d(g):void 0}n.compose=l;function u(h,f){return typeof h!="string"?f[0]:f.includes(h)?h:f[0]}n.readEnum=u})(re||(re={}));var Qe;(function(n){function e(r){const s=re.readNumber(r);if(s)return i(s);const a=re.readArray(r,o=>re.readNumber(o)??0);if(!(a===void 0||a.length!==3))return a}n.fromJson=e;function t(r){if(r.isNumber())return i(r.getAsNumber());if(!r.isListOrArray())return;const s=r.getItems();if(!(s.length<3))return s.map(a=>a.getAsNumber())}n.fromNbt=t;function i(r){const s=r>>16&255,a=r>>8&255,o=r&255;return[s/255,a/255,o/255]}n.intToRgb=i})(Qe||(Qe={}));class Yt{constructor(e){P(this,"source");P(this,"cursor");this.source=e,this.cursor=0}get remainingLength(){return this.source.length-this.cursor}get totalLength(){return this.source.length}getRead(e=0){return this.source.substring(e,this.cursor)}getRemaining(){return this.source.substring(this.cursor)}canRead(e=1){return this.cursor+e<=this.source.length}peek(e=0){return this.source.charAt(this.cursor+e)}read(){return this.source.charAt(this.cursor++)}skip(){this.cursor+=1}skipWhitespace(){for(;this.canRead()&&Yt.isWhitespace(this.peek());)this.skip()}expect(e,t=!1){if(t&&this.skipWhitespace(),!this.canRead()||this.peek()!==e)throw this.createError(`Expected '${e}'`);this.skip()}readInt(){const e=this.cursor;for(;this.canRead()&&Yt.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected integer");try{const i=Number(t);if(isNaN(i)||!Number.isInteger(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid integer '${t}'`)}}readFloat(){const e=this.cursor;for(;this.canRead()&&Yt.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected float");try{const i=Number(t);if(isNaN(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid float '${t}'`)}}readUnquotedString(){const e=this.cursor;for(;this.canRead()&&Yt.isAllowedInUnquotedString(this.peek());)this.skip();return this.getRead(e)}readQuotedString(){if(!this.canRead())return"";const e=this.peek();if(!Yt.isQuotedStringStart(e))throw this.createError("Expected quote to start a string");return this.skip(),this.readStringUntil(e)}readString(){if(!this.canRead())return"";const e=this.peek();return Yt.isQuotedStringStart(e)?(this.skip(),this.readStringUntil(e)):this.readUnquotedString()}readStringUntil(e){const t=[];let i=!1;for(;this.canRead();){const r=this.read();if(i)if(r===e||r==="\\")t.push(r),i=!1;else throw this.cursor-=1,this.createError(`Invalid escape sequence '${r}' in quoted string`);else if(r==="\\")i=!0;else{if(r===e)return t.join("");t.push(r)}}throw this.createError("Unclosed quoted string")}readBoolean(){const e=this.cursor,t=this.readUnquotedString();if(t.length===0)throw this.createError("Expected bool");if(t==="true")return!0;if(t==="false")return!1;throw this.cursor=e,this.createError(`Invalid bool, expected true or false but found '${t}'`)}static isAllowedInNumber(e){return e>="0"&&e<="9"||e==="."||e==="-"}static isAllowedInUnquotedString(e){return e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z"||e==="_"||e==="-"||e==="."||e==="+"}static isQuotedStringStart(e){return e==="'"||e==='"'}static isWhitespace(e){return e===" "||e==="	"||e===`
`||e==="\r"}createError(e){const t=Math.min(this.source.length,this.cursor),i=(t>10?"...":"")+this.source.substring(Math.max(0,t-10),t);return new Error(`${e} at position ${this.cursor}: ${i}<--[HERE]`)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const cx=4,$u=0,Ju=1,ux=2;function os(n){let e=n.length;for(;--e>=0;)n[e]=0}const hx=0,Fd=1,dx=2,fx=3,px=258,oc=29,Ks=256,Ls=Ks+1+oc,jr=30,lc=19,Od=2*Ls+1,sr=15,dl=16,mx=7,cc=256,Bd=16,zd=17,Gd=18,Bl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),za=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),gx=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Vd=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_x=512,ri=new Array((Ls+2)*2);os(ri);const Ts=new Array(jr*2);os(Ts);const Is=new Array(_x);os(Is);const Ds=new Array(px-fx+1);os(Ds);const uc=new Array(oc);os(uc);const no=new Array(jr);os(no);function fl(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Hd,Wd,Zd;function pl(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Xd=n=>n<256?Is[n]:Is[256+(n>>>7)],Us=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},en=(n,e,t)=>{n.bi_valid>dl-t?(n.bi_buf|=e<<n.bi_valid&65535,Us(n,n.bi_buf),n.bi_buf=e>>dl-n.bi_valid,n.bi_valid+=t-dl):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Vn=(n,e,t)=>{en(n,t[e*2],t[e*2+1])},Yd=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},vx=n=>{n.bi_valid===16?(Us(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},xx=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,h,f,d,g,_=0;for(f=0;f<=sr;f++)n.bl_count[f]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<Od;l++)u=n.heap[l],f=t[t[u*2+1]*2+1]+1,f>c&&(f=c,_++),t[u*2+1]=f,!(u>i)&&(n.bl_count[f]++,d=0,u>=o&&(d=a[u-o]),g=t[u*2],n.opt_len+=g*(f+d),s&&(n.static_len+=g*(r[u*2+1]+d)));if(_!==0){do{for(f=c-1;n.bl_count[f]===0;)f--;n.bl_count[f]--,n.bl_count[f+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(f=c;f!==0;f--)for(u=n.bl_count[f];u!==0;)h=n.heap[--l],!(h>i)&&(t[h*2+1]!==f&&(n.opt_len+=(f-t[h*2+1])*t[h*2],t[h*2+1]=f),u--)}},Kd=(n,e,t)=>{const i=new Array(sr+1);let r=0,s,a;for(s=1;s<=sr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Yd(i[o]++,o))}},yx=()=>{let n,e,t,i,r;const s=new Array(sr+1);for(t=0,i=0;i<oc-1;i++)for(uc[i]=t,n=0;n<1<<Bl[i];n++)Ds[t++]=i;for(Ds[t-1]=i,r=0,i=0;i<16;i++)for(no[i]=r,n=0;n<1<<za[i];n++)Is[r++]=i;for(r>>=7;i<jr;i++)for(no[i]=r<<7,n=0;n<1<<za[i]-7;n++)Is[256+r++]=i;for(e=0;e<=sr;e++)s[e]=0;for(n=0;n<=143;)ri[n*2+1]=8,n++,s[8]++;for(;n<=255;)ri[n*2+1]=9,n++,s[9]++;for(;n<=279;)ri[n*2+1]=7,n++,s[7]++;for(;n<=287;)ri[n*2+1]=8,n++,s[8]++;for(Kd(ri,Ls+1,s),n=0;n<jr;n++)Ts[n*2+1]=5,Ts[n*2]=Yd(n,5);Hd=new fl(ri,Bl,Ks+1,Ls,sr),Wd=new fl(Ts,za,0,jr,sr),Zd=new fl(new Array(0),gx,0,lc,mx)},jd=n=>{let e;for(e=0;e<Ls;e++)n.dyn_ltree[e*2]=0;for(e=0;e<jr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<lc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[cc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},qd=n=>{n.bi_valid>8?Us(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Qu=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},ml=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Qu(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Qu(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},eh=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Vn(n,r,e):(a=Ds[r],Vn(n,a+Ks+1,e),o=Bl[a],o!==0&&(r-=uc[a],en(n,r,o)),i--,a=Xd(i),Vn(n,a,t),o=za[a],o!==0&&(i-=no[a],en(n,i,o)));while(s<n.sym_next);Vn(n,cc,e)},zl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=Od,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)ml(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],ml(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,ml(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],xx(n,e),Kd(t,c,n.bl_count)},th=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Bd*2]++):o<=10?n.bl_tree[zd*2]++:n.bl_tree[Gd*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},nh=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do Vn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Vn(n,s,n.bl_tree),o--),Vn(n,Bd,n.bl_tree),en(n,o-3,2)):o<=10?(Vn(n,zd,n.bl_tree),en(n,o-3,3)):(Vn(n,Gd,n.bl_tree),en(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},Sx=n=>{let e;for(th(n,n.dyn_ltree,n.l_desc.max_code),th(n,n.dyn_dtree,n.d_desc.max_code),zl(n,n.bl_desc),e=lc-1;e>=3&&n.bl_tree[Vd[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},wx=(n,e,t,i)=>{let r;for(en(n,e-257,5),en(n,t-1,5),en(n,i-4,4),r=0;r<i;r++)en(n,n.bl_tree[Vd[r]*2+1],3);nh(n,n.dyn_ltree,e-1),nh(n,n.dyn_dtree,t-1)},bx=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return $u;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Ju;for(t=32;t<Ks;t++)if(n.dyn_ltree[t*2]!==0)return Ju;return $u};let ih=!1;const Mx=n=>{ih||(yx(),ih=!0),n.l_desc=new pl(n.dyn_ltree,Hd),n.d_desc=new pl(n.dyn_dtree,Wd),n.bl_desc=new pl(n.bl_tree,Zd),n.bi_buf=0,n.bi_valid=0,jd(n)},$d=(n,e,t,i)=>{en(n,(hx<<1)+(i?1:0),3),qd(n),Us(n,t),Us(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},Ex=n=>{en(n,Fd<<1,3),Vn(n,cc,ri),vx(n)},Tx=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===ux&&(n.strm.data_type=bx(n)),zl(n,n.l_desc),zl(n,n.d_desc),a=Sx(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?$d(n,e,t,i):n.strategy===cx||s===r?(en(n,(Fd<<1)+(i?1:0),3),eh(n,ri,Ts)):(en(n,(dx<<1)+(i?1:0),3),wx(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),eh(n,n.dyn_ltree,n.dyn_dtree)),jd(n),i&&qd(n)},Ax=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Ds[t]+Ks+1)*2]++,n.dyn_dtree[Xd(e)*2]++),n.sym_next===n.sym_end);var Cx=Mx,Rx=$d,Px=Tx,Lx=Ax,Ix=Ex,Dx={_tr_init:Cx,_tr_stored_block:Rx,_tr_flush_block:Px,_tr_tally:Lx,_tr_align:Ix};const Ux=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Ns=Ux;const Nx=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},kx=new Uint32Array(Nx()),Fx=(n,e,t,i)=>{const r=kx,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Dt=Fx,dr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},js={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Ox,_tr_stored_block:Gl,_tr_flush_block:Bx,_tr_tally:Ui,_tr_align:zx}=Dx,{Z_NO_FLUSH:Ni,Z_PARTIAL_FLUSH:Gx,Z_FULL_FLUSH:Vx,Z_FINISH:pn,Z_BLOCK:rh,Z_OK:kt,Z_STREAM_END:sh,Z_STREAM_ERROR:Wn,Z_DATA_ERROR:Hx,Z_BUF_ERROR:gl,Z_DEFAULT_COMPRESSION:Wx,Z_FILTERED:Zx,Z_HUFFMAN_ONLY:Ta,Z_RLE:Xx,Z_FIXED:Yx,Z_DEFAULT_STRATEGY:Kx,Z_UNKNOWN:jx,Z_DEFLATED:yo}=js,qx=9,$x=15,Jx=8,Qx=29,e1=256,Vl=e1+1+Qx,t1=30,n1=19,i1=2*Vl+1,r1=15,rt=3,Ri=258,Zn=Ri+rt+1,s1=32,ns=42,hc=57,Hl=69,Wl=73,Zl=91,Xl=103,ar=113,Ms=666,qt=1,ls=2,fr=3,cs=4,a1=3,or=(n,e)=>(n.msg=dr[e],e),ah=n=>n*2-(n>4?9:0),Ai=n=>{let e=n.length;for(;--e>=0;)n[e]=0},o1=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let dc=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask;const pr=(n,e)=>{let t;if(n.legacy_hash)t=n.ins_h=dc(n,n.ins_h,n.window[e+rt-1]);else{const r=n.window,s=r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;t=n.ins_h=Math.imul(s,66521)+66521>>>16&n.hash_mask}const i=n.prev[e&n.w_mask]=n.head[t];return n.head[t]=e,i},on=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},cn=(n,e)=>{Bx(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,on(n.strm)},st=(n,e)=>{n.pending_buf[n.pending++]=e},xs=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Yl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Ns(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Dt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},Jd=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Zn?n.strstart-(n.w_size-Zn):0,l=n.window,u=n.w_mask,h=n.prev,f=n.strstart+Ri;let d=l[i+a-1],g=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==d||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<f);if(s=Ri-(f-i),i=f-Ri,s>a){if(n.match_start=e,a=s,s>=o)break;d=l[i+a-1],g=l[i+a]}}while((e=h[e&u])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},is=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Zn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),o1(n),i+=e),n.strm.avail_in===0)break;if(t=Yl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.legacy_hash){if(n.lookahead+n.insert>=rt)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=dc(n,n.ins_h,n.window[r+1]);n.insert&&(pr(n,r),r++,n.insert--,!(n.lookahead+n.insert<rt)););}else if(n.lookahead+n.insert>rt)for(r=n.strstart-n.insert;n.insert&&(pr(n,r),r++,n.insert--,!(n.lookahead+n.insert<=rt)););}while(n.lookahead<Zn&&n.strm.avail_in!==0)},Qd=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==pn||e===Ni||i!==r+n.strm.avail_in)))break;a=e===pn&&i===r+n.strm.avail_in?1:0,Gl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,on(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Yl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?cs:e!==Ni&&e!==pn&&n.strm.avail_in===0&&n.strstart===n.block_start?ls:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Yl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===pn)&&e!==Ni&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===pn&&n.strm.avail_in===0&&i===r?1:0,Gl(n,n.block_start,i,a),n.block_start+=i,on(n.strm)),a?fr:qt)},_l=(n,e)=>{let t,i;for(;;){if(n.lookahead<Zn){if(is(n),n.lookahead<Zn&&e===Ni)return qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=rt&&(t=pr(n,n.strstart)),t!==0&&n.strstart-t<=n.w_size-Zn&&(n.match_length=Jd(n,t)),n.match_length>=rt)if(i=Ui(n,n.strstart-n.match_start,n.match_length-rt),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=rt){n.match_length--;do n.strstart++,t=pr(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=dc(n,n.ins_h,n.window[n.strstart+1]));else i=Ui(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(cn(n,!1),n.strm.avail_out===0))return qt}return n.insert=n.strstart<rt-1?n.strstart:rt-1,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:cs):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?qt:ls},Or=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Zn){if(is(n),n.lookahead<Zn&&e===Ni)return qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=rt&&(t=pr(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=rt-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Zn&&(n.match_length=Jd(n,t),n.match_length<=5&&(n.strategy===Zx||n.match_length===rt&&n.strstart-n.match_start>4096)&&(n.match_length=rt-1)),n.prev_length>=rt&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-rt,i=Ui(n,n.strstart-1-n.prev_match,n.prev_length-rt),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(t=pr(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=rt-1,n.strstart++,i&&(cn(n,!1),n.strm.avail_out===0))return qt}else if(n.match_available){if(i=Ui(n,0,n.window[n.strstart-1]),i&&cn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return qt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Ui(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<rt-1?n.strstart:rt-1,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:cs):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?qt:ls},l1=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=Ri){if(is(n),n.lookahead<=Ri&&e===Ni)return qt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=rt&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+Ri;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=Ri-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=rt?(t=Ui(n,1,n.match_length-rt),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Ui(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(cn(n,!1),n.strm.avail_out===0))return qt}return n.insert=0,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:cs):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?qt:ls},c1=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(is(n),n.lookahead===0)){if(e===Ni)return qt;break}if(n.match_length=0,t=Ui(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(cn(n,!1),n.strm.avail_out===0))return qt}return n.insert=0,e===pn?(cn(n,!0),n.strm.avail_out===0?fr:cs):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?qt:ls};function Dn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const Es=[new Dn(0,0,0,0,Qd),new Dn(4,4,8,4,_l),new Dn(4,5,16,8,_l),new Dn(4,6,32,32,_l),new Dn(4,4,16,16,Or),new Dn(8,16,32,32,Or),new Dn(8,16,128,128,Or),new Dn(8,32,128,256,Or),new Dn(32,128,258,1024,Or),new Dn(32,258,258,4096,Or)],u1=n=>{n.window_size=2*n.w_size,Ai(n.head),n.max_lazy_match=Es[n.level].max_lazy,n.good_match=Es[n.level].good_length,n.nice_match=Es[n.level].nice_length,n.max_chain_length=Es[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=rt-1,n.match_available=0,n.ins_h=0};function h1(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=yo,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(i1*2),this.dyn_dtree=new Uint16Array((2*t1+1)*2),this.bl_tree=new Uint16Array((2*n1+1)*2),Ai(this.dyn_ltree),Ai(this.dyn_dtree),Ai(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(r1+1),this.heap=new Uint16Array(2*Vl+1),Ai(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Vl+1),Ai(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const qs=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==ns&&e.status!==hc&&e.status!==Hl&&e.status!==Wl&&e.status!==Zl&&e.status!==Xl&&e.status!==ar&&e.status!==Ms?1:0},ef=n=>{if(qs(n))return or(n,Wn);n.total_in=n.total_out=0,n.data_type=jx;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?hc:e.wrap?ns:ar,n.adler=e.wrap===2?0:1,e.last_flush=-2,Ox(e),kt},tf=n=>{const e=ef(n);return e===kt&&u1(n.state),e},d1=(n,e)=>qs(n)||n.state.wrap!==2?Wn:(n.state.gzhead=e,kt),nf=(n,e,t,i,r,s,a)=>{if(!n)return Wn;let o=1;if(e===Wx&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>qx||t!==yo||i<8||i>15||e<0||e>9||s<0||s>Yx||i===8&&o!==1)return or(n,Wn);i===8&&(i=9);const c=new h1;return n.state=c,c.strm=n,c.status=ns,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=a?1:0,c.hash_bits=r+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+rt-1)/rt),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<r+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=e,c.strategy=s,c.method=t,tf(n)},f1=(n,e)=>nf(n,e,yo,$x,Jx,Kx),p1=(n,e)=>{if(qs(n)||e>rh||e<0)return n?or(n,Wn):Wn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===Ms&&e!==pn)return or(n,n.avail_out===0?gl:Wn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(on(n),n.avail_out===0)return t.last_flush=-1,kt}else if(n.avail_in===0&&ah(e)<=ah(i)&&e!==pn)return or(n,gl);if(t.status===Ms&&n.avail_in!==0)return or(n,gl);if(t.status===ns&&t.wrap===0&&(t.status=ar),t.status===ns){let r=yo+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Ta||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=s1),r+=31-r%31,xs(t,r),t.strstart!==0&&(xs(t,n.adler>>>16),xs(t,n.adler&65535)),n.adler=1,t.status=ar,on(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===hc){if(n.adler=0,st(t,31),st(t,139),st(t,8),t.gzhead)st(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),st(t,t.gzhead.time&255),st(t,t.gzhead.time>>8&255),st(t,t.gzhead.time>>16&255),st(t,t.gzhead.time>>24&255),st(t,t.level===9?2:t.strategy>=Ta||t.level<2?4:0),st(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(st(t,t.gzhead.extra.length&255),st(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Dt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Hl;else if(st(t,0),st(t,0),st(t,0),st(t,0),st(t,0),st(t,t.level===9?2:t.strategy>=Ta||t.level<2?4:0),st(t,a1),t.status=ar,on(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===Hl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,on(n),t.pending!==0)return t.last_flush=-1,kt;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Wl}if(t.status===Wl){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,kt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,st(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Zl}if(t.status===Zl){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,kt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,st(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r))}t.status=Xl}if(t.status===Xl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(on(n),t.pending!==0))return t.last_flush=-1,kt;st(t,n.adler&255),st(t,n.adler>>8&255),n.adler=0}if(t.status=ar,on(n),t.pending!==0)return t.last_flush=-1,kt}if(n.avail_in!==0||t.lookahead!==0||e!==Ni&&t.status!==Ms){let r=t.level===0?Qd(t,e):t.strategy===Ta?c1(t,e):t.strategy===Xx?l1(t,e):Es[t.level].func(t,e);if((r===fr||r===cs)&&(t.status=Ms),r===qt||r===fr)return n.avail_out===0&&(t.last_flush=-1),kt;if(r===ls&&(e===Gx?zx(t):e!==rh&&(Gl(t,0,0,!1),e===Vx&&(Ai(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),on(n),n.avail_out===0))return t.last_flush=-1,kt}return e!==pn?kt:t.wrap<=0?sh:(t.wrap===2?(st(t,n.adler&255),st(t,n.adler>>8&255),st(t,n.adler>>16&255),st(t,n.adler>>24&255),st(t,n.total_in&255),st(t,n.total_in>>8&255),st(t,n.total_in>>16&255),st(t,n.total_in>>24&255)):(xs(t,n.adler>>>16),xs(t,n.adler&65535)),on(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?kt:sh)},m1=n=>{if(qs(n))return Wn;const e=n.state.status;return n.state=null,e===ar?or(n,Hx):kt},g1=(n,e)=>{let t=e.length;if(qs(n))return Wn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==ns||i.lookahead)return Wn;if(r===1&&(n.adler=Ns(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Ai(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,is(i);i.lookahead>=rt;){let c=i.strstart,l=i.lookahead-(rt-1);do pr(i,c),c++;while(--l);i.strstart=c,i.lookahead=rt-1,is(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=rt-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,kt};var _1=f1,v1=nf,x1=tf,y1=ef,S1=d1,w1=p1,b1=m1,M1=g1,E1="pako deflate (from Nodeca project)",As={deflateInit:_1,deflateInit2:v1,deflateReset:x1,deflateResetKeep:y1,deflateSetHeader:S1,deflate:w1,deflateEnd:b1,deflateSetDictionary:M1,deflateInfo:E1};const T1=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var A1=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)T1(t,i)&&(n[i]=t[i])}}return n},C1=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},So={assign:A1,flattenChunks:C1};let rf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{rf=!1}const ks=new Uint8Array(256);for(let n=0;n<256;n++)ks[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;ks[254]=ks[255]=1;var R1=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const P1=(n,e)=>{if(e<65534&&n.subarray&&rf)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var L1=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=ks[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return P1(s,r)},I1=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+ks[n[t]]>e?t:e},Fs={string2buf:R1,buf2string:L1,utf8border:I1};function D1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var sf=D1;const af=Object.prototype.toString,{Z_NO_FLUSH:U1,Z_SYNC_FLUSH:N1,Z_FULL_FLUSH:k1,Z_FINISH:F1,Z_OK:io,Z_STREAM_END:O1,Z_DEFAULT_COMPRESSION:B1,Z_DEFAULT_STRATEGY:z1,Z_DEFLATED:G1}=js,V1={level:B1,method:G1,chunkSize:16384,windowBits:15,memLevel:8,strategy:z1,legacyHash:!0};function $s(n){this.options=So.assign({},V1,n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new sf,this.strm.avail_out=0;let t=As.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy,e.legacyHash);if(t!==io)throw new Error(dr[t]);if(e.header&&As.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Fs.string2buf(e.dictionary):af.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=As.deflateSetDictionary(this.strm,i),t!==io)throw new Error(dr[t]);this._dict_set=!0}}$s.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?F1:U1,typeof n=="string"?t.input=Fs.string2buf(n):af.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===N1||s===k1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=As.deflate(t,s),r===O1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=As.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===io;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};$s.prototype.onData=function(n){this.chunks.push(n)};$s.prototype.onEnd=function(n){n===io&&(this.result=So.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function fc(n,e){const t=new $s(e);if(t.push(n,!0),t.err)throw t.msg||dr[t.err];return t.result}function H1(n,e){return e=e||{},e.raw=!0,fc(n,e)}function W1(n,e){return e=e||{},e.gzip=!0,fc(n,e)}var Z1=$s,X1=fc,Y1=H1,K1=W1,j1={Deflate:Z1,deflate:X1,deflateRaw:Y1,gzip:K1};const Aa=16209,q1=16191;var $1=function(e,t){let i,r,s,a,o,c,l,u,h,f,d,g,_,m,p,w,v,y,R,C,T,U,b,x;const E=e.state;i=e.next_in,b=e.input,r=i+(e.avail_in-5),s=e.next_out,x=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=E.dmax,l=E.wsize,u=E.whave,h=E.wnext,f=E.window,d=E.hold,g=E.bits,_=E.lencode,m=E.distcode,p=(1<<E.lenbits)-1,w=(1<<E.distbits)-1;e:do{g<15&&(d+=b[i++]<<g,g+=8,d+=b[i++]<<g,g+=8),v=_[d&p];t:for(;;){if(y=v>>>24,d>>>=y,g-=y,y=v>>>16&255,y===0)x[s++]=v&65535;else if(y&16){R=v&65535,y&=15,y&&(g<y&&(d+=b[i++]<<g,g+=8),R+=d&(1<<y)-1,d>>>=y,g-=y),g<15&&(d+=b[i++]<<g,g+=8,d+=b[i++]<<g,g+=8),v=m[d&w];n:for(;;){if(y=v>>>24,d>>>=y,g-=y,y=v>>>16&255,y&16){if(C=v&65535,y&=15,g<y&&(d+=b[i++]<<g,g+=8,g<y&&(d+=b[i++]<<g,g+=8)),C+=d&(1<<y)-1,C>c){e.msg="invalid distance too far back",E.mode=Aa;break e}if(d>>>=y,g-=y,y=s-a,C>y){if(y=C-y,y>u&&E.sane){e.msg="invalid distance too far back",E.mode=Aa;break e}if(T=0,U=f,h===0){if(T+=l-y,y<R){R-=y;do x[s++]=f[T++];while(--y);T=s-C,U=x}}else if(h<y){if(T+=l+h-y,y-=h,y<R){R-=y;do x[s++]=f[T++];while(--y);if(T=0,h<R){y=h,R-=y;do x[s++]=f[T++];while(--y);T=s-C,U=x}}}else if(T+=h-y,y<R){R-=y;do x[s++]=f[T++];while(--y);T=s-C,U=x}for(;R>2;)x[s++]=U[T++],x[s++]=U[T++],x[s++]=U[T++],R-=3;R&&(x[s++]=U[T++],R>1&&(x[s++]=U[T++]))}else{T=s-C;do x[s++]=x[T++],x[s++]=x[T++],x[s++]=x[T++],R-=3;while(R>2);R&&(x[s++]=x[T++],R>1&&(x[s++]=x[T++]))}}else if(y&64){e.msg="invalid distance code",E.mode=Aa;break e}else{v=m[(v&65535)+(d&(1<<y)-1)];continue n}break}}else if(y&64)if(y&32){E.mode=q1;break e}else{e.msg="invalid literal/length code",E.mode=Aa;break e}else{v=_[(v&65535)+(d&(1<<y)-1)];continue t}break}}while(i<r&&s<o);R=g>>3,i-=R,g-=R<<3,d&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),E.hold=d,E.bits=g};const Br=15,oh=852,lh=592,ch=0,vl=1,uh=2,J1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Q1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),ey=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ty=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),ny=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,u=0,h=0,f=0,d=0,g=0,_=0,m=0,p=0,w=0,v,y,R,C,T,U=null,b;const x=new Uint16Array(Br+1),E=new Uint16Array(Br+1);let N=null,D,O,L;for(l=0;l<=Br;l++)x[l]=0;for(u=0;u<i;u++)x[e[t+u]]++;for(d=c,f=Br;f>=1&&x[f]===0;f--);if(d>f&&(d=f),f===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(h=1;h<f&&x[h]===0;h++);for(d<h&&(d=h),m=1,l=1;l<=Br;l++)if(m<<=1,m-=x[l],m<0)return-1;if(m>0&&(n===ch||f!==1))return-1;for(E[1]=0,l=1;l<Br;l++)E[l+1]=E[l]+x[l];for(u=0;u<i;u++)e[t+u]!==0&&(a[E[e[t+u]]++]=u);if(n===ch?(U=N=a,b=20):n===vl?(U=J1,N=Q1,b=257):(U=ey,N=ty,b=0),w=0,u=0,l=h,T=s,g=d,_=0,R=-1,p=1<<d,C=p-1,n===vl&&p>oh||n===uh&&p>lh)return 1;for(;;){D=l-_,a[u]+1<b?(O=0,L=a[u]):a[u]>=b?(O=N[a[u]-b],L=U[a[u]-b]):(O=96,L=0),v=1<<l-_,y=1<<g,h=y;do y-=v,r[T+(w>>_)+y]=D<<24|O<<16|L|0;while(y!==0);for(v=1<<l-1;w&v;)v>>=1;if(v!==0?(w&=v-1,w+=v):w=0,u++,--x[l]===0){if(l===f)break;l=e[t+a[u]]}if(l>d&&(w&C)!==R){for(_===0&&(_=d),T+=h,g=l-_,m=1<<g;g+_<f&&(m-=x[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===vl&&p>oh||n===uh&&p>lh)return 1;R=w&C,r[R]=d<<24|g<<16|T-s|0}}return w!==0&&(r[T+w]=l-_<<24|64<<16|0),o.bits=d,0};var Cs=ny;const iy=0,of=1,lf=2,{Z_FINISH:hh,Z_BLOCK:ry,Z_TREES:Ca,Z_OK:mr,Z_STREAM_END:sy,Z_NEED_DICT:ay,Z_STREAM_ERROR:vn,Z_DATA_ERROR:cf,Z_MEM_ERROR:uf,Z_BUF_ERROR:oy,Z_DEFLATED:dh}=js,wo=16180,fh=16181,ph=16182,mh=16183,gh=16184,_h=16185,vh=16186,xh=16187,yh=16188,Sh=16189,ro=16190,ti=16191,xl=16192,wh=16193,yl=16194,bh=16195,Mh=16196,Eh=16197,Th=16198,Ra=16199,Pa=16200,Ah=16201,Ch=16202,Rh=16203,Ph=16204,Lh=16205,Sl=16206,Ih=16207,Dh=16208,vt=16209,hf=16210,df=16211,ly=852,cy=592,uy=15,hy=uy,Uh=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function dy(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const vr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<wo||e.mode>df?1:0},ff=n=>{if(vr(n))return vn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=wo,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(ly),e.distcode=e.distdyn=new Int32Array(cy),e.sane=1,e.back=-1,mr},pf=n=>{if(vr(n))return vn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,ff(n)},mf=(n,e)=>{let t;if(vr(n))return vn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?vn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,pf(n))},gf=(n,e)=>{if(!n)return vn;const t=new dy;n.state=t,t.strm=n,t.window=null,t.mode=wo;const i=mf(n,e);return i!==mr&&(n.state=null),i},fy=n=>gf(n,hy);let Nh=!0,wl,bl;const py=n=>{if(Nh){wl=new Int32Array(512),bl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(Cs(of,n.lens,0,288,wl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;Cs(lf,n.lens,0,32,bl,0,n.work,{bits:5}),Nh=!1}n.lencode=wl,n.lenbits=9,n.distcode=bl,n.distbits=5},_f=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.window=new Uint8Array(1<<s.wbits)),s.wsize===0&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},my=(n,e)=>{let t,i,r,s,a,o,c,l,u,h,f,d,g,_,m=0,p,w,v,y,R,C,T,U;const b=new Uint8Array(4);let x,E;const N=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(vr(n)||!n.output||!n.input&&n.avail_in!==0)return vn;t=n.state,t.mode===ti&&(t.mode=xl),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,h=o,f=c,U=mr;e:for(;;)switch(t.mode){case wo:if(t.wrap===0){t.mode=xl;break}for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,b[0]=l&255,b[1]=l>>>8&255,t.check=Dt(t.check,b,2,0),l=0,u=0,t.mode=fh;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=vt;break}if((l&15)!==dh){n.msg="unknown compression method",t.mode=vt;break}if(l>>>=4,u-=4,T=(l&15)+8,t.wbits===0&&(t.wbits=T),T>15||T>t.wbits){n.msg="invalid window size",t.mode=vt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?Sh:ti,l=0,u=0;break;case fh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==dh){n.msg="unknown compression method",t.mode=vt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=vt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=Dt(t.check,b,2,0)),l=0,u=0,t.mode=ph;case ph:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,b[2]=l>>>16&255,b[3]=l>>>24&255,t.check=Dt(t.check,b,4,0)),l=0,u=0,t.mode=mh;case mh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=Dt(t.check,b,2,0)),l=0,u=0,t.mode=gh;case gh:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=Dt(t.check,b,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=_h;case _h:if(t.flags&1024&&(d=t.length,d>o&&(d=o),d&&(t.head&&(T=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+d),T)),t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,d,s)),o-=d,s+=d,t.length-=d),t.length))break e;t.length=0,t.mode=vh;case vh:if(t.flags&2048){if(o===0)break e;d=0;do T=i[s+d++],t.head&&T&&t.length<65536&&(t.head.name+=String.fromCharCode(T));while(T&&d<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,d,s)),o-=d,s+=d,T)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=xh;case xh:if(t.flags&4096){if(o===0)break e;d=0;do T=i[s+d++],t.head&&T&&t.length<65536&&(t.head.comment+=String.fromCharCode(T));while(T&&d<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,d,s)),o-=d,s+=d,T)break e}else t.head&&(t.head.comment=null);t.mode=yh;case yh:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=vt;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ti;break;case Sh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}n.adler=t.check=Uh(l),l=0,u=0,t.mode=ro;case ro:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,ay;n.adler=t.check=1,t.mode=ti;case ti:if(e===ry||e===Ca)break e;case xl:if(t.last){l>>>=u&7,u-=u&7,t.mode=Sl;break}for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=wh;break;case 1:if(py(t),t.mode=Ra,e===Ca){l>>>=2,u-=2;break e}break;case 2:t.mode=Mh;break;case 3:n.msg="invalid block type",t.mode=vt}l>>>=2,u-=2;break;case wh:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=vt;break}if(t.length=l&65535,l=0,u=0,t.mode=yl,e===Ca)break e;case yl:t.mode=bh;case bh:if(d=t.length,d){if(d>o&&(d=o),d>c&&(d=c),d===0)break e;r.set(i.subarray(s,s+d),a),o-=d,s+=d,c-=d,a+=d,t.length-=d;break}t.mode=ti;break;case Mh:for(;u<14;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=vt;break}t.have=0,t.mode=Eh;case Eh:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.lens[N[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[N[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,x={bits:t.lenbits},U=Cs(iy,t.lens,0,19,t.lencode,0,t.work,x),t.lenbits=x.bits,U){n.msg="invalid code lengths set",t.mode=vt;break}t.have=0,t.mode=Th;case Th:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(v<16)l>>>=p,u-=p,t.lens[t.have++]=v;else{if(v===16){for(E=p+2;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=vt;break}T=t.lens[t.have-1],d=3+(l&3),l>>>=2,u-=2}else if(v===17){for(E=p+3;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,T=0,d=3+(l&7),l>>>=3,u-=3}else{for(E=p+7;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,T=0,d=11+(l&127),l>>>=7,u-=7}if(t.have+d>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=vt;break}for(;d--;)t.lens[t.have++]=T}}if(t.mode===vt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=vt;break}if(t.lenbits=9,x={bits:t.lenbits},U=Cs(of,t.lens,0,t.nlen,t.lencode,0,t.work,x),t.lenbits=x.bits,U){n.msg="invalid literal/lengths set",t.mode=vt;break}if(t.distbits=6,t.distcode=t.distdyn,x={bits:t.distbits},U=Cs(lf,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,x),t.distbits=x.bits,U){n.msg="invalid distances set",t.mode=vt;break}if(t.mode=Ra,e===Ca)break e;case Ra:t.mode=Pa;case Pa:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,$1(n,f),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===ti&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(w&&!(w&240)){for(y=p,R=w,C=v;m=t.lencode[C+((l&(1<<y+R)-1)>>y)],p=m>>>24,w=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,t.length=v,w===0){t.mode=Lh;break}if(w&32){t.back=-1,t.mode=ti;break}if(w&64){n.msg="invalid literal/length code",t.mode=vt;break}t.extra=w&15,t.mode=Ah;case Ah:if(t.extra){for(E=t.extra;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Ch;case Ch:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,w=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(!(w&240)){for(y=p,R=w,C=v;m=t.distcode[C+((l&(1<<y+R)-1)>>y)],p=m>>>24,w=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,w&64){n.msg="invalid distance code",t.mode=vt;break}t.offset=v,t.extra=w&15,t.mode=Rh;case Rh:if(t.extra){for(E=t.extra;u<E;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=vt;break}t.mode=Ph;case Ph:if(c===0)break e;if(d=f-c,t.offset>d){if(d=t.offset-d,d>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=vt;break}d>t.wnext?(d-=t.wnext,g=t.wsize-d):g=t.wnext-d,d>t.length&&(d=t.length),_=t.window}else _=r,g=a-t.offset,d=t.length;d>c&&(d=c),c-=d,t.length-=d;do r[a++]=_[g++];while(--d);t.length===0&&(t.mode=Pa);break;case Lh:if(c===0)break e;r[a++]=t.length,c--,t.mode=Pa;break;case Sl:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[s++]<<u,u+=8}if(f-=c,n.total_out+=f,t.total+=f,t.wrap&4&&f&&(n.adler=t.check=t.flags?Dt(t.check,r,f,a-f):Ns(t.check,r,f,a-f)),f=c,t.wrap&4&&(t.flags?l:Uh(l))!==t.check){n.msg="incorrect data check",t.mode=vt;break}l=0,u=0}t.mode=Ih;case Ih:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=vt;break}l=0,u=0}t.mode=Dh;case Dh:U=sy;break e;case vt:U=cf;break e;case hf:return uf;case df:default:return vn}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||f!==n.avail_out&&t.mode<vt&&(t.mode<Sl||e!==hh))&&_f(n,n.output,n.next_out,f-n.avail_out),h-=n.avail_in,f-=n.avail_out,n.total_in+=h,n.total_out+=f,t.total+=f,t.wrap&4&&f&&(n.adler=t.check=t.flags?Dt(t.check,r,f,n.next_out-f):Ns(t.check,r,f,n.next_out-f)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ti?128:0)+(t.mode===Ra||t.mode===yl?256:0),(h===0&&f===0||e===hh)&&U===mr&&(U=oy),U},gy=n=>{if(vr(n))return vn;let e=n.state;return e.window&&(e.window=null),n.state=null,mr},_y=(n,e)=>{if(vr(n))return vn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,mr):vn},vy=(n,e)=>{const t=e.length;let i,r,s;return vr(n)||(i=n.state,i.wrap!==0&&i.mode!==ro)?vn:i.mode===ro&&(r=1,r=Ns(r,e,t,0),r!==i.check)?cf:(s=_f(n,e,t,t),s?(i.mode=hf,uf):(i.havedict=1,mr))};var xy=pf,yy=mf,Sy=ff,wy=fy,by=gf,My=my,Ey=gy,Ty=_y,Ay=vy,Cy="pako inflate (from Nodeca project)",kn={inflateReset:xy,inflateReset2:yy,inflateResetKeep:Sy,inflateInit:wy,inflateInit2:by,inflate:My,inflateEnd:Ey,inflateGetHeader:Ty,inflateSetDictionary:Ay,inflateInfo:Cy};function Ry(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Py=Ry;const vf=Object.prototype.toString,{Z_NO_FLUSH:Ly,Z_FINISH:kh,Z_OK:qr,Z_STREAM_END:Ml,Z_NEED_DICT:El,Z_STREAM_ERROR:Iy,Z_DATA_ERROR:Fh,Z_MEM_ERROR:Dy,Z_BUF_ERROR:Oh}=js,Uy={chunkSize:1024*64,windowBits:15,to:""};function Js(n){this.options=So.assign({},Uy,n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new sf,this.strm.avail_out=0;let t=kn.inflateInit2(this.strm,e.windowBits);if(t!==qr)throw new Error(dr[t]);if(this.header=new Py,kn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Fs.string2buf(e.dictionary):vf.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=kn.inflateSetDictionary(this.strm,e.dictionary),t!==qr)))throw new Error(dr[t])}Js.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?kh:Ly,vf.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=kn.inflate(t,a),s===El&&r&&(s=kn.inflateSetDictionary(t,r),s===qr?s=kn.inflate(t,a):s===Fh&&(s=El));t.avail_in>0&&s===Ml&&t.state.wrap&2&&t.state.flags!==0&&t.input[t.next_in]!==0;)kn.inflateReset(t),s=kn.inflate(t,a);switch(s){case Iy:case Fh:case El:case Dy:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===Ml||a>0))if(this.options.to==="string"){let c=Fs.utf8border(t.output,t.next_out),l=t.next_out-c,u=Fs.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out)),t.avail_out=0,t.next_out=0;if(!((s===qr||s===Oh)&&o===0)){if(s===Ml)return s=kn.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0){if(a===kh)return s=kn.inflateEnd(this.strm),this.onEnd(s===qr?Oh:s),this.ended=!0,!1;break}}}return!0};Js.prototype.onData=function(n){this.chunks.push(n)};Js.prototype.onEnd=function(n){n===qr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=So.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function pc(n,e){const t=new Js(e);if(t.push(n,!0),t.err)throw t.msg||dr[t.err];return t.result}function Ny(n,e){return e=e||{},e.raw=!0,pc(n,e)}var ky=Js,Fy=pc,Oy=Ny,By=pc,zy={Inflate:ky,inflate:Fy,inflateRaw:Oy,ungzip:By};const{Deflate:Gy,deflate:Vy,deflateRaw:Hy,gzip:Wy}=j1,{Inflate:Zy,inflate:Xy,inflateRaw:Yy,ungzip:Ky}=zy;var jy=Gy,qy=Vy,$y=Hy,Jy=Wy,Qy=Zy,eS=Xy,tS=Yy,nS=Ky,iS=js,Tl={Deflate:jy,deflate:qy,deflateRaw:$y,gzip:Jy,Inflate:Qy,inflate:eS,inflateRaw:tS,ungzip:nS,constants:iS},ve;(function(n){n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.ByteArray=7]="ByteArray",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.IntArray=11]="IntArray",n[n.LongArray=12]="LongArray"})(ve||(ve={}));const Rs=class Rs{static register(e,t){const i=t.create().getId();if(i!==e)throw new Error(`Registered factory ${ve[i]} does not match type ${ve[e]}`);Rs.FACTORIES.set(e,t)}isEnd(){return this.getId()===ve.End}isByte(){return this.getId()===ve.Byte}isShort(){return this.getId()===ve.Short}isInt(){return this.getId()===ve.Int}isLong(){return this.getId()===ve.Long}isFloat(){return this.getId()===ve.Float}isDouble(){return this.getId()===ve.Double}isByteArray(){return this.getId()===ve.ByteArray}isString(){return this.getId()===ve.String}isList(){return this.getId()===ve.List}isCompound(){return this.getId()===ve.Compound}isIntArray(){return this.getId()===ve.IntArray}isLongArray(){return this.getId()===ve.LongArray}isNumber(){return this.isByte()||this.isShort()||this.isInt()||this.isLong()||this.isFloat()||this.isDouble()}isArray(){return this.isByteArray()||this.isIntArray()||this.isLongArray()}isListOrArray(){return this.isList()||this.isArray()}getAsNumber(){return 0}getAsString(){return""}toJsonWithId(){return{type:this.getId(),value:this.toJson()}}static getFactory(e){const t=this.FACTORIES.get(e);if(!t)throw new Error(`Invalid tag id ${e}`);return t}static create(e){return this.getFactory(e).create()}static fromString(e){const t=typeof e=="string"?new Yt(e):e;return this.getFactory(ve.Compound).fromString(t)}static fromJson(e,t=ve.Compound){return this.getFactory(t).fromJson(e)}static fromJsonWithId(e){const t=re.readObject(e)??{},i=re.readInt(t.type)??0;return Rs.fromJson(t.value??{},i)}static fromBytes(e,t=ve.Compound){return this.getFactory(t).fromBytes(e)}};P(Rs,"FACTORIES",new Map);let lt=Rs;const ii=class ii extends lt{constructor(t){super();P(this,"value");this.value=typeof t=="number"?t:t?1:0}getId(){return ve.Byte}equals(t){return t.isByte()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"b"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeByte(this.value)}static create(){return ii.ZERO}static fromJson(t){return new ii(re.readInt(t)??0)}static fromBytes(t){const i=t.readByte();return new ii(i)}};P(ii,"ZERO",new ii(0)),P(ii,"ONE",new ii(1));let ki=ii;lt.register(ve.Byte,ki);class Qs extends lt{constructor(t){super();P(this,"items");this.items=t}getItems(){return this.items.slice(0)}getAsTuple(t,i){return[...Array(t)].map((r,s)=>i(this.items[s]))}get(t){if(t=Math.floor(t),!(t<0||t>=this.items.length))return this.items[t]}get length(){return this.items.length}map(t){return this.items.map(t)}filter(t){return this.items.filter(t)}forEach(t){this.items.forEach(t)}set(t,i){this.items[t]=i}add(t){this.items.push(t)}insert(t,i){this.items.splice(t,0,i)}delete(t){this.items.splice(t,1)}clear(){this.items=[]}}class Fi extends Qs{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new ki(t):t))}getId(){return ve.ByteArray}equals(e){return e.isByteArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return ve.Byte}toString(){return"[B;"+this.items.map(t=>t.getAsNumber().toFixed()+"B").join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length),e.writeBytes(this.items.map(t=>t.getAsNumber()))}static create(){return new Fi([])}static fromJson(e){const t=re.readArray(e,i=>re.readNumber(i)??0)??[];return new Fi(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative ByteArray length ${t}`);const i=e.readBytes(t);return new Fi(i)}}lt.register(ve.ByteArray,Fi);class cr extends lt{constructor(t){super();P(this,"value");this.value=t}getId(){return ve.Float}equals(t){return t.isFloat()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toString()+"f"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeFloat(this.value)}static create(){return new cr(0)}static fromJson(t){return new cr(re.readNumber(t)??0)}static fromBytes(t){const i=t.readFloat();return new cr(i)}}lt.register(ve.Float,cr);class _n extends lt{constructor(t){super();P(this,"value");this.value=t}getId(){return ve.Int}equals(t){return t.isInt()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeInt(this.value)}static create(){return new _n(0)}static fromJson(t){return new _n(re.readInt(t)??0)}static fromBytes(t){const i=t.readInt();return new _n(i)}}lt.register(ve.Int,_n);class Oi extends Qs{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new _n(t):t))}getId(){return ve.IntArray}equals(e){return e.isIntArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return ve.Int}get length(){return this.items.length}toString(){return"[I;"+this.items.map(t=>t.getAsNumber().toFixed()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items)e.writeInt(t.getAsNumber())}static create(){return new Oi}static fromJson(e){const t=re.readArray(e,i=>re.readNumber(i)??0)??[];return new Oi(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative IntArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push(e.readInt());return new Oi(i)}}lt.register(ve.IntArray,Oi);class jt extends Qs{constructor(t,i){super(t??[]);P(this,"type");this.type=this.items.length===0?ve.End:i??this.items[0].getId()}static make(t,i){return new jt(i.map(r=>new t(r)))}getId(){return ve.List}equals(t){return t.isList()&&this.type===t.type&&this.length===t.length&&this.items.every((i,r)=>i.equals(t.items[r]))}getType(){return this.type}getNumber(t){const i=this.get(t);return i!=null&&i.isNumber()?i.getAsNumber():0}getString(t){const i=this.get(t);return i!=null&&i.isString()?i.getAsString():""}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&r.getType()===i?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Ct.create()}set(t,i){this.updateType(i),super.set(t,i)}add(t){this.updateType(t),super.add(t)}insert(t,i){this.updateType(i),super.insert(t,i)}updateType(t){if(t.getId()!==ve.End){if(this.type===ve.End)this.type=t.getId();else if(this.type!==t.getId())throw new Error(`Trying to add tag of type ${ve[t.getId()]} to list of ${ve[this.type]}`)}}clear(){super.clear(),this.type=ve.End}toString(){return"["+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(t="  ",i=0){if(this.length===0)return"[]";const r=t.repeat(i),s=t.repeat(i+1);return`[
`+this.map(a=>s+a.toPrettyString(t,i+1)).join(`,
`)+`
`+r+"]"}toSimplifiedJson(){return this.map(t=>t.toSimplifiedJson())}toJson(){return{type:this.type,items:this.items.map(t=>t.toJson())}}toBytes(t){this.items.length===0?this.type=ve.End:this.type=this.items[0].getId(),t.writeByte(this.type),t.writeInt(this.items.length);for(const i of this.items)i.toBytes(t)}static create(){return new jt}static fromJson(t){const i=re.readObject(t)??{},r=re.readNumber(i.type)??ve.Compound,s=(re.readArray(i.items)??[]).flatMap(a=>a!==void 0?[lt.fromJson(a,r)]:[]);return new jt(s,r)}static fromBytes(t){const i=t.readByte(),r=t.readInt();if(r<0)throw new Error(`Negative List length ${r}`);if(i===ve.End&&r>0)throw new Error(`Missing type on ListTag but length is ${r}`);const s=[];for(let a=0;a<r;a+=1)s.push(lt.fromBytes(t,i));return new jt(s,i)}}lt.register(ve.List,jt);const At=class At extends lt{constructor(t){super();P(this,"value");this.value=At.toPair(t)}static toPair(t){return Array.isArray(t)?t:At.bigintToPair(t)}static bigintToPair(t){return At.dataview.setBigInt64(0,t),[At.dataview.getInt32(0),At.dataview.getInt32(4)]}static pairToBigint(t){return At.dataview.setInt32(0,Number(t[0])),At.dataview.setInt32(4,Number(t[1])),At.dataview.getBigInt64(0)}static pairToString(t){return At.pairToBigint(t).toString()}static pairToNumber(t){return Number(At.pairToBigint(t))}getId(){return ve.Long}equals(t){return t.isLong()&&this.value[0]===t.value[0]&&this.value[1]===t.value[1]}getAsNumber(){return At.pairToNumber(this.value)}getAsPair(){return this.value}toBigInt(){return At.pairToBigint(this.value)}toString(){return At.pairToString(this.value)+"L"}toPrettyString(){return this.toString()}toSimplifiedJson(){return At.pairToNumber(this.value)}toJson(){return this.value}toBytes(t){t.writeInt(this.value[0]),t.writeInt(this.value[1])}static create(){return new At([0,0])}static fromJson(t){return new At(Array.isArray(t)&&t.length===2?t.map(i=>typeof i=="number"?i:0):[0,0])}static fromBytes(t){const i=t.readInt(),r=t.readInt();return new At([i,r])}};P(At,"dataview",new DataView(new Uint8Array(8).buffer));let rs=At;lt.register(ve.Long,rs);class Bi extends Qs{constructor(e){super(Array.from(e??[],t=>typeof t=="bigint"||Array.isArray(t)?new rs(t):t))}getId(){return ve.LongArray}equals(e){return e.isLongArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return ve.Long}get length(){return this.items.length}toString(){return"[L;"+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsPair())}toJson(){return this.items.map(e=>e.getAsPair())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items){const[i,r]=t.getAsPair();e.writeInt(i),e.writeInt(r)}}static create(){return new Bi}static fromJson(e){const t=re.readArray(e,i=>re.readPair(i,r=>re.readNumber(r)??0)??[0,0])??[];return new Bi(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative LongArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push([e.readInt(),e.readInt()]);return new Bi(i)}}lt.register(ve.LongArray,Bi);class ur extends lt{constructor(t){super();P(this,"value");this.value=t}getId(){return ve.Short}equals(t){return t.isShort()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"s"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeShort(this.value)}static create(){return new ur(0)}static fromJson(t){return new ur(typeof t=="number"?Math.floor(t):0)}static fromBytes(t){const i=t.readShort();return new ur(i)}}lt.register(ve.Short,ur);const nr=class nr extends lt{constructor(t){super();P(this,"value");this.value=t}getId(){return ve.String}equals(t){return t.isString()&&this.value===t.value}getAsString(){return this.value}toString(){return'"'+this.value.replace(/(\\|")/g,"\\$1")+'"'}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeString(this.value)}static create(){return nr.EMPTY}static fromJson(t){return new nr(typeof t=="string"?t:"")}static fromBytes(t){const i=t.readString();return new nr(i)}};P(nr,"EMPTY",new nr(""));let Xn=nr;lt.register(ve.String,Xn);var so;(function(n){const e=new RegExp("^[-+]?(?:[0-9]+[.]|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?$","i"),t=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?d$","i"),i=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?f$","i"),r=new RegExp("^[-+]?(?:0|[1-9][0-9]*)b$","i"),s=new RegExp("^[-+]?(?:0|[1-9][0-9]*)l$","i"),a=new RegExp("^[-+]?(?:0|[1-9][0-9]*)s$","i"),o=new RegExp("^[-+]?(?:0|[1-9][0-9]*)$","i");function c(d){if(d.skipWhitespace(),!d.canRead())throw d.createError("Expected value");const g=d.peek();if(g==="{")return l(d);if(g==="[")if(d.canRead(3)&&!Yt.isQuotedStringStart(d.peek(1))&&d.peek(2)===";"){d.expect("[",!0);const _=d.cursor,m=d.read();if(d.skip(),d.skipWhitespace(),d.canRead()){if(m==="B")return h(d,Fi,ve.ByteArray,ve.Byte);if(m==="L")return h(d,Bi,ve.LongArray,ve.Long);if(m==="I")return h(d,Oi,ve.IntArray,ve.Int);throw d.cursor=_,d.createError(`Invalid array type '${m}'`)}else throw d.createError("Expected value")}else return u(d);else{d.skipWhitespace();const _=d.cursor;if(Yt.isQuotedStringStart(d.peek()))return new Xn(d.readQuotedString());{const m=d.readUnquotedString();if(m.length===0)throw d.cursor=_,d.createError("Expected value");try{if(i.test(m)){const p=Number(m.substring(0,m.length-1));return new cr(p)}else if(r.test(m)){const p=Number(m.substring(0,m.length-1));return new ki(Math.floor(p))}else if(s.test(m)){const p=BigInt(m.substring(0,m.length-1));return new rs(p)}else if(a.test(m)){const p=Number(m.substring(0,m.length-1));return new ur(Math.floor(p))}else if(o.test(m)){const p=Number(m);return new _n(Math.floor(p))}else if(t.test(m)){const p=Number(m.substring(0,m.length-1));return new zi(p)}else if(e.test(m)){const p=Number(m);return new zi(p)}else{if(m.toLowerCase()==="true")return ki.ONE;if(m.toLowerCase()==="false")return ki.ZERO}}catch{}return m.length===0?Xn.EMPTY:new Xn(m)}}}n.readTag=c;function l(d){d.expect("{",!0);const g=new Map;for(d.skipWhitespace();d.canRead()&&d.peek()!=="}";){const _=d.cursor;if(d.skipWhitespace(),!d.canRead())throw d.createError("Expected key");const m=d.readString();if(m.length===0)throw d.cursor=_,d.createError("Expected key");d.expect(":",!0);const p=c(d);if(g.set(m,p),!f(d))break;if(!d.canRead())throw d.createError("Expected key")}return d.expect("}",!0),new Ct(g)}function u(d){if(d.expect("[",!0),d.skipWhitespace(),!d.canRead())throw d.createError("Expected value");const g=[];let _=ve.End;for(;d.peek()!=="]";){const m=d.cursor,p=c(d),w=p.getId();if(_===ve.End)_=w;else if(w!==_)throw d.cursor=m,d.createError(`Can't insert ${ve[w]} into list of ${ve[_]}`);if(g.push(p),!f(d))break;if(!d.canRead())throw d.createError("Expected value")}return d.expect("]",!0),new jt(g,_)}function h(d,g,_,m){const p=[];for(;d.peek()!=="]";){const w=c(d);if(w.getId()!==m)throw d.createError(`Can't insert ${ve[w.getId()]} into ${ve[_]}`);if(p.push(w.isLong()?w.getAsPair():w.getAsNumber()),!f(d))break;if(!d.canRead())throw d.createError("Expected value")}return d.expect("]"),new g(p)}function f(d){return d.skipWhitespace(),d.canRead()&&d.peek()===","?(d.skip(),d.skipWhitespace(),!0):!1}})(so||(so={}));class Ct extends lt{constructor(t){super();P(this,"properties");this.properties=t??new Map}getId(){return ve.Compound}equals(t){return t.isCompound()&&this.size===t.size&&[...this.properties.entries()].every(([i,r])=>{const s=t.properties.get(i);return s!==void 0&&r.equals(s)})}has(t){return this.properties.has(t)}hasNumber(t){var i;return((i=this.get(t))==null?void 0:i.isNumber())??!1}hasString(t){var i;return((i=this.get(t))==null?void 0:i.isString())??!1}hasList(t,i,r){const s=this.get(t);return((s==null?void 0:s.isList())&&(i===void 0||s.getType()===i)&&(r===void 0||s.length===r))??!1}hasCompound(t){var i;return((i=this.get(t))==null?void 0:i.isCompound())??!1}get(t){return this.properties.get(t)}getString(t){var i;return((i=this.get(t))==null?void 0:i.getAsString())??""}getNumber(t){var i;return((i=this.get(t))==null?void 0:i.getAsNumber())??0}getBoolean(t){return this.getNumber(t)!==0}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&(i===void 0||r.getType()===i)?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:Ct.create()}getByteArray(t){const i=this.get(t);return i!=null&&i.isByteArray()?i:Fi.create()}getIntArray(t){const i=this.get(t);return i!=null&&i.isIntArray()?i:Oi.create()}getLongArray(t){const i=this.get(t);return i!=null&&i.isLongArray()?i:Bi.create()}keys(){return this.properties.keys()}get size(){return this.properties.size}map(t){return Object.fromEntries([...this.properties.entries()].map(([i,r])=>t(i,r,this)))}forEach(t){[...this.properties.entries()].forEach(([i,r])=>t(i,r,this))}set(t,i){return this.properties.set(t,i),this}delete(t){return this.properties.delete(t)}clear(){return this.properties.clear(),this}toString(){const t=[];for(const[i,r]of this.properties.entries()){const s=i.split("").some(a=>!Yt.isAllowedInUnquotedString(a));t.push((s?JSON.stringify(i):i)+":"+r.toString())}return"{"+t.join(",")+"}"}toPrettyString(t="  ",i=0){if(this.size===0)return"{}";const r=t.repeat(i),s=t.repeat(i+1),a=[];for(const[o,c]of this.properties.entries()){const l=o.split("").some(u=>!Yt.isAllowedInUnquotedString(u));a.push((l?JSON.stringify(o):o)+": "+c.toPrettyString(t,i+1))}return`{
`+a.map(o=>s+o).join(`,
`)+`
`+r+"}"}toSimplifiedJson(){return this.map((t,i)=>[t,i.toSimplifiedJson()])}toJson(){return this.map((t,i)=>[t,{type:i.getId(),value:i.toJson()}])}toBytes(t){for(const[i,r]of this.properties.entries()){const s=r.getId();t.writeByte(s),t.writeString(i),r.toBytes(t)}t.writeByte(ve.End)}static create(){return new Ct}static fromString(t){return so.readTag(t)}static fromJson(t){const i=re.readMap(t,r=>{const{type:s,value:a}=re.readObject(r)??{},o=re.readNumber(s);return lt.fromJson(a??{},o)});return new Ct(new Map(Object.entries(i)))}static fromBytes(t){const i=new Map;for(;;){const r=t.readByte();if(r===ve.End)break;const s=t.readString(),a=lt.fromBytes(t,r);i.set(s,a)}return new Ct(i)}}lt.register(ve.Compound,Ct);const Un=class Un{constructor(e,t,i,r,s){P(this,"name");P(this,"root");P(this,"compression");P(this,"littleEndian");P(this,"bedrockHeader");this.name=e,this.root=t,this.compression=i,this.littleEndian=r,this.bedrockHeader=s}writeNamedTag(e){e.writeByte(ve.Compound),e.writeString(this.name),this.root.toBytes(e)}write(){const e=this.littleEndian===!0||this.bedrockHeader!==void 0,t=new kd({littleEndian:e,offset:this.bedrockHeader!==void 0?8:0});if(this.writeNamedTag(t),this.bedrockHeader!==void 0){const r=t.offset;t.offset=0,t.writeInt(this.bedrockHeader),t.writeInt(r-8),t.offset=r}const i=t.getData();return this.compression==="gzip"?Tl.gzip(i):this.compression==="zlib"?Tl.deflate(i):i}static readNamedTag(e){if(e.readByte()!==ve.Compound)throw new Error("Top tag should be a compound");return{name:e.readString(),root:Ct.fromBytes(e)}}static create(e={}){const t=e.name??Un.DEFAULT_NAME,i=Ct.create(),r=e.compression??"none",s=e.bedrockHeader===!0?Un.DEFAULT_BEDROCK_HEADER:typeof e.bedrockHeader=="number"?e.bedrockHeader:void 0,a=e.littleEndian??s!==void 0;return new Un(t,i,r,a,s)}static read(e,t={}){const i=typeof t.bedrockHeader=="number"?t.bedrockHeader:t.bedrockHeader?rx(e):void 0,r=t.compression==="gzip"||!i&&t.compression===void 0&&nx(e),s=t.compression==="zlib"||!i&&t.compression===void 0&&ix(e),a=s||r?Tl.inflate(e):e,o=t.littleEndian||i!==void 0,c=r?"gzip":s?"zlib":"none",l=new Nd(a,{littleEndian:o,offset:i!==void 0?8:0}),{name:u,root:h}=Un.readNamedTag(l);return new Un(t.name??u,h,c,o,i)}toJson(){return{name:this.name,root:this.root.toJson(),compression:this.compression,littleEndian:this.littleEndian,bedrockHeader:this.bedrockHeader??null}}static fromJson(e){const t=re.readObject(e)??{},i=re.readString(t.name)??"",r=Ct.fromJson(t.root??{}),s=re.readString(t.compression)??"none",a=re.readBoolean(t.littleEndian)??!1,o=re.readNumber(t.bedrockHeader);return new Un(i,r,s,a,o)}};P(Un,"DEFAULT_NAME",""),P(Un,"DEFAULT_BEDROCK_HEADER",4);let oi=Un;class li{constructor(e,t,i,r,s){P(this,"x");P(this,"z");P(this,"compression");P(this,"timestamp");P(this,"raw");P(this,"file");P(this,"dirty");this.x=e,this.z=t,this.compression=i,this.timestamp=r,this.raw=s,this.dirty=!1}getCompression(){switch(this.compression){case 1:return"gzip";case 2:return"zlib";case 3:return"none";default:throw new Error(`Invalid compression mode ${this.compression}`)}}setCompression(e){switch(e){case"gzip":this.compression=1;break;case"zlib":this.compression=2;break;case"none":this.compression=3;break;default:throw new Error(`Invalid compression mode ${e}`)}}getFile(){return this.file===void 0&&(this.file=oi.read(this.raw,{compression:this.getCompression()})),this.file}getRoot(){return this.getFile().root}setRoot(e){this.file===void 0&&(this.file=oi.create({compression:this.getCompression()})),this.file.root=e,this.markDirty()}markDirty(){this.dirty=!0}getRaw(){if(this.file===void 0||this.dirty===!1)return this.raw;this.file.compression=this.getCompression();const e=this.file.write();return this.raw=e,this.dirty=!1,e}toJson(){return{x:this.x,z:this.z,compression:this.compression,timestamp:this.timestamp,size:this.raw.byteLength}}toRef(e){return new li.Ref(this.x,this.z,this.compression,this.timestamp,this.raw.byteLength,e)}static create(e,t,i,r){const s=new li(e,t,0,r??0,i.write());return s.setCompression(i.compression),s}static fromJson(e,t){const i=re.readObject(e)??{},r=re.readInt(i.x)??0,s=re.readInt(i.z)??0,a=re.readNumber(i.compression)??2,o=re.readInt(i.timestamp)??0,c=re.readInt(i.size)??0;return new li.Ref(r,s,a,o,c,t)}}(function(n){class e{constructor(i,r,s,a,o,c){P(this,"x");P(this,"z");P(this,"compression");P(this,"timestamp");P(this,"size");P(this,"resolver");P(this,"file");this.x=i,this.z=r,this.compression=s,this.timestamp=a,this.size=o,this.resolver=c}getFile(){if(this.file instanceof oi)return this.file}getRoot(){if(this.file instanceof oi)return this.file.root}async getFileAsync(){return this.file?this.file:(this.file=(async()=>{const i=await this.resolver(this.x,this.z);return this.file=i,i})(),this.file)}async getRootAsync(){return(await this.getFileAsync()).root}isResolved(){return this.file instanceof oi}}n.Ref=e})(li||(li={}));class xf{constructor(e){P(this,"chunks");this.chunks=Array(32*32).fill(void 0);for(const t of e){const i=Hi.getIndex(t.x,t.z);this.chunks[i]=t}}getChunkPositions(){return this.chunks.flatMap(e=>e?[[e.x,e.z]]:[])}getChunk(e){if(!(e<0||e>=32*32))return this.chunks[e]}findChunk(e,t){return this.getChunk(Hi.getIndex(e,t))}getFirstChunk(){return this.chunks.filter(e=>e!==void 0)[0]}filter(e){return this.chunks.filter(t=>t!==void 0&&e(t))}map(e){return this.chunks.flatMap(t=>t!==void 0?[e(t)]:[])}}class Hi extends xf{constructor(e){super(e)}write(){let e=0;for(const s of this.chunks)s!==void 0&&(e+=Math.ceil(s.getRaw().length/4096));const t=new Uint8Array(8192+e*4096),i=new DataView(t.buffer);let r=2;for(const s of this.chunks){if(s===void 0)continue;const a=s.getRaw(),o=4*((s.x&31)+(s.z&31)*32),c=Math.ceil(a.length/4096);i.setInt8(o,r>>16),i.setInt16(o+1,r&65535),i.setInt8(o+3,c),i.setInt32(o+4096,s.timestamp);const l=r*4096;i.setInt32(l,a.length+1),i.setInt8(l+4,s.compression),t.set(a,l+5),r+=c}return t}static read(e){const t=[];for(let i=0;i<32;i+=1)for(let r=0;r<32;r+=1){const s=4*((i&31)+(r&31)*32);if(e[s+3]===0)continue;const o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],c=(e[s+4096]<<24)+(e[s+4097]<<16)+(e[s+4098]<<8)+e[s+4099],l=o*4096,u=(e[l]<<24)+(e[l+1]<<16)+(e[l+2]<<8)+e[l+3],h=e[l+4],f=e.slice(l+5,l+4+u);t.push(new li(i,r,h,c,f))}return new Hi(t)}static getIndex(e,t){return(e&31)+(t&31)*32}toJson(){return{chunks:this.map(e=>e.toJson())}}static fromJson(e,t){const i=re.readObject(e)??{},s=(re.readArray(i.chunks)??[]).flatMap(a=>a!==void 0?[li.fromJson(a,t)]:[]);return new Hi.Ref(s)}}(function(n){class e extends xf{}n.Ref=e})(Hi||(Hi={}));class zi extends lt{constructor(t){super();P(this,"value");this.value=t}getId(){return ve.Double}equals(t){return t.isDouble()&&this.value===t.value}getAsNumber(){return this.value}toString(){return Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeDouble(this.value)}static create(){return new zi(0)}static fromJson(t){return new zi(re.readNumber(t)??0)}static fromBytes(t){const i=t.readDouble();return new zi(i)}}lt.register(ve.Double,zi);const ir=class ir extends lt{constructor(){super()}getId(){return ve.End}equals(e){return e.isEnd()}toString(){return"END"}toPrettyString(){return this.toString()}toSimplifiedJson(){return null}toJson(){return null}toBytes(){}static create(){return ir.INSTANCE}static fromJson(){return ir.INSTANCE}static fromBytes(){return ir.INSTANCE}};P(ir,"INSTANCE",new ir);let ao=ir;lt.register(ve.End,ao);var He;(function(n){n.UP="up",n.DOWN="down",n.NORTH="north",n.EAST="east",n.SOUTH="south",n.WEST="west"})(He||(He={}));const rS={[He.UP]:[0,1,0],[He.DOWN]:[0,-1,0],[He.NORTH]:[0,0,-1],[He.EAST]:[1,0,0],[He.SOUTH]:[0,0,1],[He.WEST]:[-1,0,0]};(function(n){n.ALL=[n.UP,n.DOWN,n.NORTH,n.EAST,n.SOUTH,n.WEST];function e(t){return rS[t]}n.normal=e})(He||(He={}));var Rt;(function(n){function e(h,f,d){return[h,f,d]}n.create=e,n.ZERO=n.create(0,0,0);function t(h,f,d,g){return[h[0]+f,h[1]+d,h[2]+g]}n.offset=t;function i(h,f){return[h[0]-f[0],h[1]-f[1],h[2]-f[2]]}n.subtract=i;function r(h,f){return[h[0]+f[0],h[1]+f[1],h[2]+f[2]]}n.add=r;function s(h,f){return n.offset(h,...He.normal(f))}n.towards=s;function a(h,f){return h===f?!0:h[0]===f[0]&&h[1]===f[1]&&h[2]===f[2]}n.equals=a;function o(h){return h[0]*h[0]+h[1]*h[1]+h[2]*h[2]}n.magnitude=o;function c(h){return new jt(h.map(f=>new _n(f)))}n.toNbt=c;function l(h){return h.getAsTuple(3,f=>f!=null&&f.isInt()?f.getAsNumber():0)}n.fromNbt=l;function u(h){const f=re.readArray(h,d=>re.readInt(d)??0)??[0,0,0];return e(f[0],f[1],f[2])}n.fromJson=u})(Rt||(Rt={}));const Mn=class Mn{constructor(e,t){P(this,"namespace");P(this,"path");this.namespace=e,this.path=t}is(e){return this.equals(Mn.parse(e))}equals(e){return this===e?!0:e instanceof Mn?this.namespace===e.namespace&&this.path===e.path:!1}toString(){return this.namespace+Mn.SEPARATOR+this.path}withPrefix(e){return new Mn(this.namespace,e+this.path)}static create(e){return new Mn(this.DEFAULT_NAMESPACE,e)}static parse(e){const t=e.indexOf(this.SEPARATOR);if(t>=0){const i=t>=1?e.substring(0,t):this.DEFAULT_NAMESPACE,r=e.substring(t+1);return new Mn(i,r)}return new Mn(this.DEFAULT_NAMESPACE,e)}};P(Mn,"DEFAULT_NAMESPACE","minecraft"),P(Mn,"SEPARATOR",":");let J=Mn;var yt;let Pi=(yt=class{constructor(e,t={}){P(this,"properties");P(this,"name");this.properties=t,this.name=typeof e=="string"?J.parse(e):e}getName(){return this.name}getProperties(){return this.properties}getProperty(e){return this.properties[e]}isFluid(){return this.is(yt.WATER)||this.is(yt.LAVA)}isWaterlogged(){return this.is(yt.WATER)||this.is(yt.LAVA)||this.is("bubble_column")||this.is("kelp")||this.is("kelp_plant")||this.is("seagrass")||this.is("tall_seagrass")||this.properties.waterlogged==="true"}equals(e){if(!this.name.equals(e.name))return!1;const t=Object.keys(this.properties);return t.length!==Object.keys(e.properties).length?!1:t.every(i=>e.properties[i]===this.properties[i])}is(e){return typeof e=="string"?this.name.equals(J.parse(e)):e instanceof J?this.name.equals(e):this.name.equals(e.name)}toString(){return Object.keys(this.properties).length===0?this.name.toString():`${this.name.toString()}[${Object.entries(this.properties).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>e+"="+t).join(",")}]`}toNbt(){const e=new Ct().set("Name",new Xn(this.name.toString())),t=Object.entries(this.properties).sort(([i],[r])=>i.localeCompare(r));return t.length>0&&e.set("Properties",new Ct(new Map(t.map(([i,r])=>[i,new Xn(r)])))),e}static parse(e){const t=e.indexOf("[");if(t===-1)return new yt(e);{const i=e.substring(0,t),r=e.substring(t+1,e.length-1).split(","),s=Object.fromEntries(r.map(a=>a.split("=")));return new yt(i,s)}}static fromNbt(e){const t=J.parse(e.getString("Name")),i=e.getCompound("Properties").map((r,s)=>[r,s.getAsString()]);return new yt(t,i)}static fromJson(e){const t=re.readObject(e)??{},i=J.parse(re.readString(t.Name)??yt.STONE.name.toString()),r=re.readMap(t.Properties,s=>re.readString(s)??"");return new yt(i,r)}},P(yt,"AIR",new yt(J.create("air"))),P(yt,"STONE",new yt(J.create("stone"))),P(yt,"WATER",new yt(J.create("water"),{level:"0"})),P(yt,"LAVA",new yt(J.create("lava"),{level:"0"})),yt);const mo=class mo{constructor(e,t){P(this,"size");P(this,"defaultValue");P(this,"storage");P(this,"palette");this.size=e,this.defaultValue=t,this.storage=Array(e).fill(0),this.palette=[t]}index(e,t,i){if(!this.isLocalCoordinate(e)||!this.isLocalCoordinate(t)||!this.isLocalCoordinate(i))throw new Error(`Coordinates ${e},${t},${i} are outside paletted container bounds 0..15`);return(e<<8)+(t<<4)+i}isLocalCoordinate(e){return Number.isInteger(e)&&e>=0&&e<mo.WIDTH}get(e,t,i){const r=this.storage[this.index(e,t,i)];return this.palette[r]}set(e,t,i,r){let s=this.palette.findIndex(a=>a.equals(r));s===-1&&(s=this.palette.length,this.palette.push(r)),this.storage[this.index(e,t,i)]=s}};P(mo,"WIDTH",16);let oo=mo;const bi=class bi{constructor(e){P(this,"minY");P(this,"states");this.minY=e,this.states=new oo(bi.SIZE,Pi.AIR)}get minBlockY(){return this.minY<<4}getBlockState(e,t,i){return this.states.get(e,t,i)}setBlockState(e,t,i,r){this.states.set(e,t,i,r)}};P(bi,"WIDTH",16),P(bi,"SIZE",bi.WIDTH*bi.WIDTH*bi.WIDTH);let Kl=bi;var jl;(function(n){function e(u,h){return[u,h]}n.create=e;function t(u){return[u[0]>>4,u[2]>>4]}n.fromBlockPos=t;function i(u){return[Number(u)&4294967295,Number(u>>BigInt(32))]}n.fromLong=i;function r(u){return s(u[0],u[1])}n.toLong=r;function s(u,h){return BigInt(u&4294967295)|BigInt(h&4294967295)<<BigInt(32)}n.asLong=s;function a(u){return u[0]<<4}n.minBlockX=a;function o(u){return u[1]<<4}n.minBlockZ=o;function c(u){return(u[0]<<4)+15}n.maxBlockX=c;function l(u){return(u[1]<<4)+15}n.maxBlockZ=l})(jl||(jl={}));const yf=new Map([["minecraft:speed",3402751],["minecraft:slowness",9154528],["minecraft:haste",14270531],["minecraft:mining_fatigue",4866583],["minecraft:strength",16762624],["minecraft:instant_health",16262179],["minecraft:instant_damage",11101546],["minecraft:jump_boost",16646020],["minecraft:nausea",5578058],["minecraft:regeneration",13458603],["minecraft:resistance",9520880],["minecraft:fire_resistance",16750848],["minecraft:water_breathing",10017472],["minecraft:invisibility",16185078],["minecraft:blindness",2039587],["minecraft:night_vision",12779366],["minecraft:hunger",5797459],["minecraft:weakness",4738376],["minecraft:poison",8889187],["minecraft:wither",7561558],["minecraft:health_boost",16284963],["minecraft:absorption",2445989],["minecraft:saturation",16262179],["minecraft:glowing",9740385],["minecraft:levitation",13565951],["minecraft:luck",5882118],["minecraft:unluck",12624973],["minecraft:slow_falling",15978425],["minecraft:conduit_power",1950417],["minecraft:dolphins_grace",8954814],["minecraft:bad_omen",745784],["minecraft:hero_of_the_village",4521796],["minecraft:darkness",2696993],["minecraft:trial_omen",1484454],["minecraft:raid_omen",14565464],["minecraft:wind_charged",12438015],["minecraft:weaving",7891290],["minecraft:oozing",10092451],["minecraft:infested",9214860]]);var lo;(function(n){function e(t){return{effect:J.parse(t.getString("id")),duration:t.getNumber("duration"),amplifier:t.getNumber("amplifier")}}n.fromNbt=e})(lo||(lo={}));const Sf=new Map([["minecraft:empty",[]],["minecraft:water",[]],["minecraft:mundane",[]],["minecraft:thick",[]],["minecraft:awkward",[]],["minecraft:night_vision",[{effect:J.create("night_vision"),duration:3600,amplifier:0}]],["minecraft:long_night_vision",[{effect:J.create("night_vision"),duration:9600,amplifier:0}]],["minecraft:invisibility",[{effect:J.create("invisibility"),duration:3600,amplifier:0}]],["minecraft:long_invisibility",[{effect:J.create("invisibility"),duration:9600,amplifier:0}]],["minecraft:leaping",[{effect:J.create("jump_boost"),duration:3600,amplifier:0}]],["minecraft:long_leaping",[{effect:J.create("jump_boost"),duration:9600,amplifier:0}]],["minecraft:strong_leaping",[{effect:J.create("jump_boost"),duration:1800,amplifier:1}]],["minecraft:fire_resistance",[{effect:J.create("fire_resistance"),duration:3600,amplifier:0}]],["minecraft:long_fire_resistance",[{effect:J.create("fire_resistance"),duration:9600,amplifier:0}]],["minecraft:swiftness",[{effect:J.create("speed"),duration:3600,amplifier:0}]],["minecraft:long_swiftness",[{effect:J.create("speed"),duration:9600,amplifier:0}]],["minecraft:strong_swiftness",[{effect:J.create("speed"),duration:1800,amplifier:1}]],["minecraft:slowness",[{effect:J.create("slowness"),duration:1800,amplifier:0}]],["minecraft:long_slowness",[{effect:J.create("slowness"),duration:4800,amplifier:0}]],["minecraft:strong_slowness",[{effect:J.create("slowness"),duration:400,amplifier:3}]],["minecraft:turtle_master",[{effect:J.create("slowness"),duration:400,amplifier:3},{effect:J.create("resistance"),duration:400,amplifier:2}]],["minecraft:long_turtle_master",[{effect:J.create("slowness"),duration:800,amplifier:3},{effect:J.create("resistance"),duration:800,amplifier:2}]],["minecraft:strong_turtle_master",[{effect:J.create("slowness"),duration:400,amplifier:5},{effect:J.create("resistance"),duration:400,amplifier:3}]],["minecraft:water_breathing",[{effect:J.create("water_breathing"),duration:3600,amplifier:0}]],["minecraft:long_water_breathing",[{effect:J.create("water_breathing"),duration:9600,amplifier:0}]],["minecraft:healing",[{effect:J.create("instant_health"),duration:1,amplifier:0}]],["minecraft:strong_healing",[{effect:J.create("instant_health"),duration:1,amplifier:1}]],["minecraft:harming",[{effect:J.create("instant_damage"),duration:1,amplifier:0}]],["minecraft:strong_harming",[{effect:J.create("instant_damage"),duration:1,amplifier:1}]],["minecraft:poison",[{effect:J.create("poison"),duration:900,amplifier:0}]],["minecraft:long_poison",[{effect:J.create("poison"),duration:1800,amplifier:0}]],["minecraft:strong_poison",[{effect:J.create("poison"),duration:432,amplifier:1}]],["minecraft:regeneration",[{effect:J.create("regeneration"),duration:900,amplifier:0}]],["minecraft:long_regeneration",[{effect:J.create("regeneration"),duration:1800,amplifier:0}]],["minecraft:strong_regeneration",[{effect:J.create("regeneration"),duration:450,amplifier:1}]],["minecraft:strength",[{effect:J.create("strength"),duration:3600,amplifier:0}]],["minecraft:long_strength",[{effect:J.create("strength"),duration:9600,amplifier:0}]],["minecraft:strong_strength",[{effect:J.create("strength"),duration:1800,amplifier:1}]],["minecraft:weakness",[{effect:J.create("weakness"),duration:1800,amplifier:0}]],["minecraft:long_weakness",[{effect:J.create("weakness"),duration:4800,amplifier:0}]],["minecraft:luck",[{effect:J.create("luck"),duration:6e3,amplifier:0}]],["minecraft:slow_falling",[{effect:J.create("slow_falling"),duration:1800,amplifier:0}]],["minecraft:long_slow_falling",[{effect:J.create("slow_falling"),duration:4800,amplifier:0}]],["minecraft:wind_charged",[{effect:J.create("wind_charged"),duration:3600,amplifier:0}]],["minecraft:weaving",[{effect:J.create("weaving"),duration:3600,amplifier:0}]],["minecraft:oozing",[{effect:J.create("oozing"),duration:3600,amplifier:0}]],["minecraft:infested",[{effect:J.create("infested"),duration:3600,amplifier:0}]]]);var Os;(function(n){function e(s){const a={};return s.isString()?a.potion=J.parse(s.getAsString()):s.isCompound()&&(s.hasString("potion")&&(a.potion=J.parse(s.getString("potion"))),s.hasNumber("custom_color")&&(a.customColor=s.getNumber("custom_color")),s.hasList("custom_effects")&&(a.customEffects=s.getList("custom_effects",ve.Compound).map(lo.fromNbt))),a}n.fromNbt=e;function t(s){if(s.customColor)return Qe.intToRgb(s.customColor);const a=i(s);return r(a)}n.getColor=t;function i(s){const a=[];return s.potion&&a.push(...Sf.get(s.potion.toString())??[]),s.customEffects&&a.push(...s.customEffects),a}n.getAllEffects=i;function r(s){let[a,o,c]=[0,0,0],l=0;for(const u of s){const h=yf.get(u.effect.toString());if(h===void 0)continue;const f=Qe.intToRgb(h),d=u.amplifier+1;a+=d*f[0],o+=d*f[1],c+=d*f[2],l+=d}return l===0?Qe.intToRgb(-13083194):(a=a/l,o=o/l,c=c/l,[a,o,c])}})(Os||(Os={}));var co;(function(n){function e(r,s){return a=>typeof a=="string"?i(r,J.parse(a)):t(s(a))}n.parser=e;function t(r,s){return{value:()=>r,key:()=>s}}n.direct=t;function i(r,s,a=!0){return a?{value:()=>r.getOrThrow(s),key:()=>s}:{value:()=>r.get(s),key:()=>s}}n.reference=i})(co||(co={}));class si{constructor(e,t,i=new Map){P(this,"id");P(this,"count");P(this,"components");this.id=e,this.count=t,this.components=i}getComponent(e,t){var r;if(typeof e=="string"&&(e=J.parse(e)),this.components.has("!"+e.toString()))return;const i=this.components.get(e.toString());if(i)return i;if(t)return(r=t.getItemComponents(this.id))==null?void 0:r.get(e.toString())}hasComponent(e,t){var i;return typeof e=="string"&&(e=J.parse(e)),this.components.has("!"+e.toString())?!1:this.components.has(e.toString())?!0:t?(i=t.getItemComponents(this.id))==null?void 0:i.has(e.toString()):!1}clone(){const e=new Map(this.components);return new si(this.id,this.count,e)}is(e){return typeof e=="string"?this.id.equals(J.parse(e)):e instanceof J?this.id.equals(e):this.id.equals(e.id)}equals(e){return this===e?!0:e instanceof si?this.count===e.count&&this.isSameItemSameComponents(e):!1}isSameItemSameComponents(e){if(!this.id.equals(e.id)||this.components.size!==e.components.size)return!1;for(const[t,i]of this.components){const r=e.components.get(t);if(i.toString()!==(r==null?void 0:r.toString()))return!1}return!0}toString(){let e=this.id.toString();return this.components.size>0&&(e+=`[${[...this.components.entries()].map(([t,i])=>t.startsWith("!")?t:`${t}=${i.toString()}`).join(",")}]`),this.count>1&&(e+=` ${this.count}`),e}static fromString(e){const t=new Yt(e);t.skipWhitespace();const i=t.cursor;for(;t.canRead()&&t.peek()!=="["&&!Yt.isWhitespace(t.peek());)t.skip();const r=J.parse(t.getRead(i)),s=new Map;t.skipWhitespace(),t.canRead()&&t.peek()==="["&&si.readComponents(t,s),t.skipWhitespace();const a=t.canRead()?t.readInt():1;if(t.skipWhitespace(),t.canRead())throw t.createError("Unexpected trailing data");return new si(r,a,s)}static readComponents(e,t){if(e.expect("["),e.skipWhitespace(),e.canRead()&&e.peek()==="]"){e.skip();return}do{if(e.peek()==="!"){e.skip(),e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="]"&&e.peek()!==",";)e.skip();t.set("!"+J.parse(e.getRead(i).trim()).toString(),new Ct)}else{e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="=";)e.skip();const r=J.parse(e.getRead(i).trim()).toString();if(!e.canRead())break;e.skip(),e.skipWhitespace();const s=so.readTag(e);t.set(r,s)}if(e.skipWhitespace(),!e.canRead())break;if(e.peek()==="]"){e.skip();return}if(e.peek()!==",")throw new Error("Expected , or ]");e.skip()}while(e.canRead());throw new Error("Missing closing ]")}toNbt(){const e=new Ct().set("id",new Xn(this.id.toString()));return this.count>1&&e.set("count",new _n(this.count)),this.components.size>0&&e.set("components",new Ct(this.components)),e}static fromNbt(e){const t=J.parse(e.getString("id")),i=e.hasNumber("count")?e.getNumber("count"):1,r=new Map(Object.entries(e.getCompound("components").map((s,a)=>s.startsWith("!")?["!"+J.parse(s).toString(),new Ct]:[J.parse(s).toString(),a])));return new si(t,i,r)}}const Mi=class Mi{constructor(e,t){P(this,"key");P(this,"parser");P(this,"storage",new Map);P(this,"builtin",new Map);P(this,"tags");this.key=e,this.parser=t}static createAndRegister(e,t){const i=new Mi(J.create(e),t);return Mi.REGISTRY.register(i.key,i),i}register(e,t,i){return this.storage.set(e.toString(),t),i&&this.builtin.set(e.toString(),t),co.reference(this,e)}delete(e){const t=this.storage.delete(e.toString());return this.builtin.delete(e.toString()),t}keys(){return[...this.storage.keys()].map(e=>J.parse(e))}has(e){return this.storage.has(e.toString())}get(e){var t=this.storage.get(e.toString());return t instanceof Function&&(t=t(),this.storage.set(e.toString(),t)),t}getOrThrow(e){const t=this.get(e);if(t===void 0)throw new Error(`Missing key in ${this.key.toString()}: ${e.toString()}`);return t}parse(e){if(!this.parser)throw new Error(`No parser exists for ${this.key.toString()}`);return this.parser(e)}clear(){this.storage.clear();for(const[e,t]of this.builtin.entries())this.storage.set(e,t);return this.tags&&this.tags.clear(),this}assign(e){if(!this.key.equals(e.key))throw new Error(`Cannot assign registry of type ${e.key.toString()} to registry of type ${this.key.toString()}`);for(const t of e.keys())this.storage.set(t.toString(),e.getOrThrow(t));return this}cloneEmpty(){return new Mi(this.key,this.parser)}forEach(e){for(const[t,i]of this.storage.entries())e(J.parse(t),i instanceof Function?i():i,this)}map(e){return[...this.storage.entries()].map(([t,i])=>e(J.parse(t),i instanceof Function?i():i,this))}getTagRegistry(){return this.tags===void 0&&(this.tags=new Mi(new J(this.key.namespace,`tags/${this.key.path}`))),this.tags}};P(Mi,"REGISTRY",new Mi(J.create("root")));let uo=Mi;var $r;(function(n){n.NONE="none",n.CLOCKWISE_90="clockwise_90",n.CLOCKWISE_180="180",n.COUNTERCLOCKWISE_90="counterclockwise_90"})($r||($r={}));const sS=[{key:"north",offset:[0,0,-1]},{key:"east",offset:[1,0,0]},{key:"south",offset:[0,0,1]},{key:"west",offset:[-1,0,0]}],wf=new Set(["minecraft:air","minecraft:cave_air","minecraft:void_air","minecraft:water","minecraft:lava"]),aS=[/_banner$/,/_button$/,/_carpet$/,/_coral$/,/_coral_fan$/,/_door$/,/_fence$/,/_fence_gate$/,/_flower$/,/_glass_pane$/,/_hanging_sign$/,/_leaves$/,/_pressure_plate$/,/_rail$/,/_sapling$/,/_sign$/,/_slab$/,/_stairs$/,/_torch$/,/_trapdoor$/,/_wall$/,/_wall_banner$/,/_wall_hanging_sign$/,/_wall_sign$/,/_wall_torch$/,/_wool_carpet$/,/^attached_/,/^potted_/,/amethyst_cluster$/,/azalea$/,/bamboo$/,/bell$/,/big_dripleaf$/,/brewing_stand$/,/cake$/,/chain$/,/chest$/,/cocoa$/,/comparator$/,/conduit$/,/dead_bush$/,/decorated_pot$/,/end_rod$/,/fern$/,/grass$/,/grindstone$/,/kelp$/,/ladder$/,/lantern$/,/lever$/,/lightning_rod$/,/mangrove_roots$/,/mushroom$/,/pane$/,/repeater$/,/scaffolding$/,/seagrass$/,/skull$/,/soul_lantern$/,/sugar_cane$/,/turtle_egg$/,/twisting_vines$/,/vine$/,/weeping_vines$/];function mc(n){return n.includes(":")?n.split(":")[1]:n}function ql(n){const e=mc(n);return e==="iron_bars"||e.endsWith("glass_pane")}function $l(n){const e=mc(n);return e==="nether_brick_fence"||e.endsWith("_fence")&&!e.endsWith("_fence_gate")}function oS(n){return ql(n)||$l(n)}function Bh(n){if(!n||wf.has(n))return!1;const e=mc(n);return!aS.some(t=>t.test(e))}function lS(n,e){return!e||wf.has(e)?!1:ql(n)?ql(e)||Bh(e):$l(n)?$l(e)||Bh(e):!1}var Hn;let cS=(Hn=class{constructor(e,t=[],i=[]){P(this,"size");P(this,"palette");P(this,"blocks");P(this,"blocksMap",[]);P(this,"xStride");P(this,"yStride");P(this,"placedBlocksCache",null);P(this,"placedBlocksMapCache",null);P(this,"paletteIndex",new Map);this.size=e,this.palette=t,this.blocks=i,this.xStride=e[1]*e[2],this.yStride=e[2],this.palette.forEach((r,s)=>{this.paletteIndex.set(r.toString(),s)}),i.forEach(r=>{if(!this.isInside(r.pos))throw new Error(`Found block at ${r.pos} which is outside the structure bounds ${this.size}`);this.blocksMap[this.getIndex(r.pos)]=r})}getSize(){return this.size}addBlock(e,t,i,r){if(!this.isInside(e))throw new Error(`Cannot add block at ${e} outside the structure bounds ${this.size}`);const s=new Pi(t,i),a=s.toString();let o=this.paletteIndex.get(a);o===void 0&&(o=this.palette.length,this.palette.push(s),this.paletteIndex.set(a,o));const c=this.getIndex(e),l=this.blocksMap[c];if(l)l.state=o,l.nbt=r;else{const u={pos:Rt.create(e[0],e[1],e[2]),state:o,nbt:r};this.blocks.push(u),this.blocksMap[c]=u}return this.clearPlacedCaches(),this}getBlocks(){return this.ensurePlacedCaches(),this.placedBlocksCache??[]}getBlock(e){var i;return this.isInside(e)?(this.ensurePlacedCaches(),((i=this.placedBlocksMapCache)==null?void 0:i[this.getIndex(e)])??null):null}clone(){return new Hn(Rt.create(this.size[0],this.size[1],this.size[2]),this.palette.map(e=>new Pi(e.getName(),{...e.getProperties()})),this.blocks.map(e=>({pos:Rt.create(e.pos[0],e.pos[1],e.pos[2]),state:e.state,nbt:e.nbt})))}updateBlockStates(){const e=[];for(const t of this.getBlocks()){const i=t.state.getName().toString();if(!oS(i))continue;const r={...t.state.getProperties()};for(const s of sS){const a=this.getBlock(Rt.add(t.pos,s.offset)),o=(a==null?void 0:a.state.getName().toString())??"";r[s.key]=lS(i,o)?"true":"false"}r.waterlogged===void 0&&(r.waterlogged="false"),!new Pi(i,r).equals(t.state)&&e.push({pos:t.pos,name:i,properties:r,nbt:t.nbt})}for(const t of e)this.addBlock(t.pos,t.name,t.properties,t.nbt);return{updatedBlocks:e.length}}toPlacedBlock(e){const t=this.palette[e.state];if(!t)throw new Error(`Block at ${e.pos.join(" ")} in structure references invalid palette index ${e.state}`);return{pos:e.pos,state:t,nbt:e.nbt}}isInside(e){return e[0]>=0&&e[0]<this.size[0]&&e[1]>=0&&e[1]<this.size[1]&&e[2]>=0&&e[2]<this.size[2]}getIndex(e){return e[0]*this.xStride+e[1]*this.yStride+e[2]}ensurePlacedCaches(){if(!(this.placedBlocksCache&&this.placedBlocksMapCache)){this.placedBlocksCache=[],this.placedBlocksMapCache=[];for(const e of this.blocks){const t=this.toPlacedBlock(e);this.placedBlocksCache.push(t),this.placedBlocksMapCache[this.getIndex(e.pos)]=t}}}clearPlacedCaches(){this.placedBlocksCache=null,this.placedBlocksMapCache=null}toNbt(e={}){const t=e.updateBlockStates?this.clone():this;e.updateBlockStates&&t.updateBlockStates();const i=[],r=new Map,s=t.blocks.map(o=>{const c=t.toPlacedBlock(o),l=c.state.toString();let u=r.get(l);u===void 0&&(u=i.length,i.push(c.state),r.set(l,u));const h=new Ct().set("pos",Rt.toNbt(c.pos)).set("state",new _n(u));return c.nbt&&c.nbt.size>0&&h.set("nbt",c.nbt),h}),a=new Ct().set("size",Rt.toNbt(this.size)).set("palette",new jt(i.map(o=>o.toNbt()))).set("blocks",new jt(s)).set("entities",new jt);return e.dataVersion!==void 0&&a.set("DataVersion",new _n(e.dataVersion)),a}writeNbt(e={}){return new oi(e.name??"",this.toNbt(e),e.compression??"gzip",!1,void 0).write()}static fromNbt(e){const t=Rt.fromNbt(e.getList("size")),i=e.getList("palette",ve.Compound).map(s=>Pi.fromNbt(s)),r=e.getList("blocks",ve.Compound).map(s=>{const a=Rt.fromNbt(s.getList("pos")),o=s.getNumber("state"),c=s.getCompound("nbt");return{pos:a,state:o,nbt:c.size>0?c:void 0}});return new Hn(t,i,r)}static transform(e,t,i){switch(t){case $r.COUNTERCLOCKWISE_90:return Rt.create(i[0]-i[2]+e[2],e[1],i[0]+i[2]-e[0]);case $r.CLOCKWISE_90:return Rt.create(i[0]+i[2]-e[2],e[1],i[2]-i[0]+e[0]);case $r.CLOCKWISE_180:return Rt.create(i[0]+i[0]-e[0],e[1],i[2]+i[2]-e[2]);default:return e}}},P(Hn,"REGISTRY",uo.createAndRegister("structures")),P(Hn,"EMPTY",new Hn(Rt.ZERO)),Hn);class Ye{constructor(e,t,i){P(this,"x");P(this,"y");P(this,"z");this.x=e,this.y=t,this.z=i}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}distance(e){return this.sub(e).length()}distanceSquared(e){return this.sub(e).lengthSquared()}abs(){return new Ye(Math.abs(this.x),Math.abs(this.y),Math.abs(this.z))}add(e){return new Ye(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Ye(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new Ye(this.x*e.x,this.y*e.y,this.z*e.z)}div(e){return new Ye(this.x/e.x,this.y/e.y,this.z/e.z)}scale(e){return new Ye(this.x*e,this.y*e,this.z*e)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,r=this.x*e.y-this.y*e.x;return new Ye(t,i,r)}normalize(){if(this.x==0&&this.y==0&&this.z==0)return this;const e=1/this.length();return new Ye(this.x*e,this.y*e,this.z*e)}components(){return[this.x,this.y,this.z]}toString(){return`[${this.x} ${this.y} ${this.z}]`}}function Ci(n,e,t){return Math.max(e,Math.min(t,n))}function Jl(n){return(n&n-1)===0}function gc(n){return n-=1,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>18,n|=n>>32,n+1}var Ga=1e-6,gr=typeof Float32Array<"u"?Float32Array:Array,uS=Math.PI/180;function Ql(n){return n*uS}function ht(){var n=new gr(16);return gr!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function hS(n){var e=new gr(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function dS(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function fS(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function pS(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=t*o-i*a,v=t*c-r*a,y=t*l-s*a,R=i*c-r*o,C=i*l-s*o,T=r*l-s*c,U=u*_-h*g,b=u*m-f*g,x=u*p-d*g,E=h*m-f*_,N=h*p-d*_,D=f*p-d*m,O=w*D-v*N+y*E+R*x-C*b+T*U;return O?(O=1/O,n[0]=(o*D-c*N+l*E)*O,n[1]=(r*N-i*D-s*E)*O,n[2]=(_*T-m*C+p*R)*O,n[3]=(f*C-h*T-d*R)*O,n[4]=(c*x-a*D-l*b)*O,n[5]=(t*D-r*x+s*b)*O,n[6]=(m*y-g*T-p*v)*O,n[7]=(u*T-f*y+d*v)*O,n[8]=(a*N-o*x+l*U)*O,n[9]=(i*x-t*N-s*U)*O,n[10]=(g*C-_*y+p*w)*O,n[11]=(h*y-u*C-d*w)*O,n[12]=(o*b-a*E-c*U)*O,n[13]=(t*E-i*b+r*U)*O,n[14]=(_*v-g*R-m*w)*O,n[15]=(u*R-h*v+f*w)*O,n):null}function Je(n,e,t){var i=t[0],r=t[1],s=t[2],a,o,c,l,u,h,f,d,g,_,m,p;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],c=e[2],l=e[3],u=e[4],h=e[5],f=e[6],d=e[7],g=e[8],_=e[9],m=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=c,n[3]=l,n[4]=u,n[5]=h,n[6]=f,n[7]=d,n[8]=g,n[9]=_,n[10]=m,n[11]=p,n[12]=a*i+u*r+g*s+e[12],n[13]=o*i+h*r+_*s+e[13],n[14]=c*i+f*r+m*s+e[14],n[15]=l*i+d*r+p*s+e[15]),n}function En(n,e,t){var i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function mS(n,e,t,i){var r=i[0],s=i[1],a=i[2],o=Math.sqrt(r*r+s*s+a*a),c,l,u,h,f,d,g,_,m,p,w,v,y,R,C,T,U,b,x,E,N,D,O,L;return o<Ga?null:(o=1/o,r*=o,s*=o,a*=o,c=Math.sin(t),l=Math.cos(t),u=1-l,h=e[0],f=e[1],d=e[2],g=e[3],_=e[4],m=e[5],p=e[6],w=e[7],v=e[8],y=e[9],R=e[10],C=e[11],T=r*r*u+l,U=s*r*u+a*c,b=a*r*u-s*c,x=r*s*u-a*c,E=s*s*u+l,N=a*s*u+r*c,D=r*a*u+s*c,O=s*a*u-r*c,L=a*a*u+l,n[0]=h*T+_*U+v*b,n[1]=f*T+m*U+y*b,n[2]=d*T+p*U+R*b,n[3]=g*T+w*U+C*b,n[4]=h*x+_*E+v*N,n[5]=f*x+m*E+y*N,n[6]=d*x+p*E+R*N,n[7]=g*x+w*E+C*N,n[8]=h*D+_*O+v*L,n[9]=f*D+m*O+y*L,n[10]=d*D+p*O+R*L,n[11]=g*D+w*O+C*L,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function Bs(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],h=e[10],f=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+l*i,n[5]=a*r+u*i,n[6]=o*r+h*i,n[7]=c*r+f*i,n[8]=l*r-s*i,n[9]=u*r-a*i,n[10]=h*r-o*i,n[11]=f*r-c*i,n}function Vt(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[8],u=e[9],h=e[10],f=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-l*i,n[1]=a*r-u*i,n[2]=o*r-h*i,n[3]=c*r-f*i,n[8]=s*i+l*r,n[9]=a*i+u*r,n[10]=o*i+h*r,n[11]=c*i+f*r,n}function bf(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[4],u=e[5],h=e[6],f=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+l*i,n[1]=a*r+u*i,n[2]=o*r+h*i,n[3]=c*r+f*i,n[4]=l*r-s*i,n[5]=u*r-a*i,n[6]=h*r-o*i,n[7]=f*r-c*i,n}function gS(n,e,t,i,r){var s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0){var a=1/(i-r);n[10]=(r+i)*a,n[14]=2*r*i*a}else n[10]=-1,n[14]=-2*i;return n}var _S=gS;function vS(n,e,t,i,r,s,a){var o=1/(e-t),c=1/(i-r),l=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*l,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*c,n[14]=(a+s)*l,n[15]=1,n}var xS=vS;function yS(n,e,t,i){var r,s,a,o,c,l,u,h,f,d,g=e[0],_=e[1],m=e[2],p=i[0],w=i[1],v=i[2],y=t[0],R=t[1],C=t[2];return Math.abs(g-y)<Ga&&Math.abs(_-R)<Ga&&Math.abs(m-C)<Ga?fS(n):(u=g-y,h=_-R,f=m-C,d=1/Math.sqrt(u*u+h*h+f*f),u*=d,h*=d,f*=d,r=w*f-v*h,s=v*u-p*f,a=p*h-w*u,d=Math.sqrt(r*r+s*s+a*a),d?(d=1/d,r*=d,s*=d,a*=d):(r=0,s=0,a=0),o=h*a-f*s,c=f*r-u*a,l=u*s-h*r,d=Math.sqrt(o*o+c*c+l*l),d?(d=1/d,o*=d,c*=d,l*=d):(o=0,c=0,l=0),n[0]=r,n[1]=o,n[2]=u,n[3]=0,n[4]=s,n[5]=c,n[6]=h,n[7]=0,n[8]=a,n[9]=l,n[10]=f,n[11]=0,n[12]=-(r*g+s*_+a*m),n[13]=-(o*g+c*_+l*m),n[14]=-(u*g+h*_+f*m),n[15]=1,n)}function ho(){var n=new gr(3);return gr!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function yi(n){var e=new gr(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function SS(n){var e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function bn(n,e,t){var i=new gr(3);return i[0]=n,i[1]=e,i[2]=t,i}function La(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function wS(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function bS(n,e,t,i){return n[0]=e[0]+t[0]*i,n[1]=e[1]+t[1]*i,n[2]=e[2]+t[2]*i,n}function MS(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function Mf(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function ES(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}(function(){var n=ho();return function(e,t,i,r,s,a){var o,c;for(t||(t=3),i||(i=0),r?c=Math.min(r*t+i,e.length):c=e.length,o=i;o<c;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();const wn=[124/255,189/255,107/255],TS=Qe.intToRgb(6396257),AS=Qe.intToRgb(8431445),zr=Qe.intToRgb(4764952),Ia=Qe.intToRgb(4159204),CS=Qe.intToRgb(2129968),RS=n=>{const e=n/15,t=e*.6+(e>0?.4:.3),i=Ci(e*e*.7-.5,0,1),r=Ci(e*e*.6-.7,0,1);return[t,i,r]},Da=n=>[n/8,1-n/32,n/64],mn={large_fern:()=>wn,tall_grass:()=>wn,grass_block:()=>wn,fern:()=>wn,grass:()=>wn,short_grass:()=>wn,potted_fern:()=>wn,pink_petals:()=>wn,wildflowers:()=>wn,bush:()=>wn,spruce_leaves:()=>TS,birch_leaves:()=>AS,oak_leaves:()=>zr,jungle_leaves:()=>zr,acacia_leaves:()=>zr,dark_oak_leaves:()=>zr,vine:()=>zr,mangrove_leaves:()=>zr,water:()=>Ia,bubble_column:()=>Ia,cauldron:()=>Ia,water_cauldron:()=>Ia,redstone_wire:n=>RS(parseInt(n.power??"0")),sugar_cane:()=>wn,attached_melon_stem:()=>Da(7),attached_pumpkin_stem:()=>Da(7),melon_stem:n=>Da(parseInt(n.age??"0")),pumpkin_stem:n=>Da(parseInt(n.age??"0")),lily_pad:()=>CS};var St;(function(n){function e(i,r,s){let{up:a,down:o,north:c,east:l,south:u,west:h}=i;switch(s){case 90:[c,l,u,h]=[l,u,h,c];break;case 180:[c,l,u,h]=[u,h,c,l];break;case 270:[c,l,u,h]=[h,c,l,u]}switch(r){case 90:[a,c,o,u]=[c,o,u,a];break;case 180:[a,c,o,u]=[o,u,a,c];break;case 270:[a,c,o,u]=[u,a,c,o]}return{up:a,down:o,north:c,east:l,south:u,west:h}}n.rotate=e;function t(){return Object.create(null)}n.none=t})(St||(St={}));const fn=class fn{constructor(e,t,i,r,s,a,o=0){P(this,"pos");P(this,"color");P(this,"texture");P(this,"textureLimit");P(this,"normal");P(this,"blockPos");P(this,"emissive");this.pos=e,this.color=t,this.texture=i,this.textureLimit=r,this.normal=s,this.blockPos=a,this.emissive=o}transform(e){return fn.VEC[0]=this.pos.x,fn.VEC[1]=this.pos.y,fn.VEC[2]=this.pos.z,ES(fn.VEC,fn.VEC,e),this.pos=new Ye(fn.VEC[0],fn.VEC[1],fn.VEC[2]),this}static fromPos(e){return new fn(e,[0,0,0],[0,0],[0,0,0,0],void 0,void 0,0)}};P(fn,"VEC",ho());let Ln=fn;class zs{constructor(e,t){P(this,"v1");P(this,"v2");this.v1=e,this.v2=t}vertices(){return[this.v1,this.v2]}forEach(e){return e(this.v1),e(this.v2),this}transform(e){return this.forEach(t=>t.transform(e)),this}setColor(e){return this.forEach(t=>t.color=e),this}toString(){return`Line(${this.v1.pos.toString()}, ${this.v2.pos.toString()})`}static fromPoints(e,t){return new zs(Ln.fromPos(e),Ln.fromPos(t))}}class ct{constructor(e=[],t=[]){P(this,"quads");P(this,"lines");P(this,"posBuffer");P(this,"colorBuffer");P(this,"textureBuffer");P(this,"textureLimitBuffer");P(this,"normalBuffer");P(this,"blockPosBuffer");P(this,"indexBuffer");P(this,"indexType");P(this,"linePosBuffer");P(this,"lineColorBuffer");this.quads=e,this.lines=t}clear(){return this.quads=[],this.lines=[],this}isEmpty(){return this.quads.length===0&&this.lines.length===0}quadVertices(){return this.quads.length*4}quadIndices(){return this.quads.length*6}lineVertices(){return this.lines.length*2}merge(e){for(const t of e.quads)this.quads.push(t);for(const t of e.lines)this.lines.push(t);return this}addLine(e,t,i,r,s,a,o){const c=new zs(Ln.fromPos(new Ye(e,t,i)),Ln.fromPos(new Ye(r,s,a))).setColor(o);return this.lines.push(c),this}addLineCube(e,t,i,r,s,a,o){return this.addLine(e,t,i,e,t,a,o),this.addLine(r,t,i,r,t,a,o),this.addLine(e,t,i,r,t,i,o),this.addLine(e,t,a,r,t,a,o),this.addLine(e,t,i,e,s,i,o),this.addLine(r,t,i,r,s,i,o),this.addLine(e,t,a,e,s,a,o),this.addLine(r,t,a,r,s,a,o),this.addLine(e,s,i,e,s,a,o),this.addLine(r,s,i,r,s,a,o),this.addLine(e,s,i,r,s,i,o),this.addLine(e,s,a,r,s,a,o),this}transform(e){for(const t of this.quads)t.transform(e);return this}computeNormals(){for(const e of this.quads){const t=e.normal();e.forEach(i=>i.normal=t)}}rebuild(e,t){const i=t.usage??e.DYNAMIC_DRAW,r=(a,o,c)=>{if(a||(a=e.createBuffer()??void 0),!a)throw new Error("Cannot create new buffer");return e.bindBuffer(o,a),e.bufferData(o,c,i),a},s=(a,o,c,l)=>{if(a.length===0){o&&e.deleteBuffer(o);return}const u=a[0]instanceof zs?2:4,h=new Float32Array(a.length*u*c);let f=0;for(const d of a)for(const g of d.vertices()){const _=l(g);if(!_)throw new Error("Missing vertex component");for(let m=0;m<c;m+=1)h[f++]=_[m]??0}return r(o,e.ARRAY_BUFFER,h)};if(t.pos&&(this.posBuffer=s(this.quads,this.posBuffer,3,a=>a.pos.components()),this.linePosBuffer=s(this.lines,this.linePosBuffer,3,a=>a.pos.components())),t.color&&(this.colorBuffer=s(this.quads,this.colorBuffer,3,a=>a.color),this.lineColorBuffer=s(this.lines,this.lineColorBuffer,3,a=>a.color)),t.texture&&(this.textureBuffer=s(this.quads,this.textureBuffer,2,a=>a.texture),this.textureLimitBuffer=s(this.quads,this.textureLimitBuffer,4,a=>a.textureLimit)),t.normal&&(this.normalBuffer=s(this.quads,this.normalBuffer,3,a=>{var o;return(o=a.normal)==null?void 0:o.components()})),t.blockPos&&(this.blockPosBuffer=s(this.quads,this.blockPosBuffer,3,a=>{var o;return(o=a.blockPos)==null?void 0:o.components()})),this.quads.length===0)this.indexBuffer&&e.deleteBuffer(this.indexBuffer),this.indexBuffer=void 0,this.indexType=void 0;else{const a=this.quadVertices()>65536;if(a&&!(typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext)&&!e.getExtension("OES_element_index_uint"))throw new Error("Mesh requires 32-bit indices, but OES_element_index_uint is not available");this.indexType=a?e.UNSIGNED_INT:e.UNSIGNED_SHORT;const o=a?new Uint32Array(this.quadIndices()):new Uint16Array(this.quadIndices());let c=0;for(let l=0;l<this.quads.length;l+=1){const u=l*4;o[c++]=u,o[c++]=u+1,o[c++]=u+2,o[c++]=u,o[c++]=u+2,o[c++]=u+3}this.indexBuffer=r(this.indexBuffer,e.ELEMENT_ARRAY_BUFFER,o)}return this}}function zh(n){const e=re.readObject(n)??{},i={model:re.readString(e.model)??""},r=re.readNumber(e.x);r!==void 0&&(i.x=r);const s=re.readNumber(e.y);s!==void 0&&(i.y=s);const a=re.readBoolean(e.uvlock);a!==void 0&&(i.uvlock=a);const o=re.readNumber(e.weight);return o!==void 0&&(i.weight=o),i}function Ef(n){const e=re.readArray(n,zh);return e||zh(n)}function Tf(n){const e=re.readObject(n);if(!e)return;const t=re.readArray(e.OR,Tf);if(t){const i=t.flatMap(r=>r?[r]:[]);if(i.length>0)return{OR:i}}return Object.fromEntries(Object.entries(e).map(([i,r])=>[i,re.readString(r)??""]))}function PS(n){const e=re.readObject(n)??{},t=Ef(e.apply),i=Tf(e.when);return i?{when:i,apply:t}:{apply:t}}class bo{constructor(e,t){P(this,"variants");P(this,"multipart");this.variants=e,this.multipart=t}getModelVariants(e){if(this.variants){const t=Object.keys(this.variants).filter(r=>this.matchesVariant(r,e));if(t.length===0)return[];const i=this.variants[t[0]];return[Array.isArray(i)?i[0]:i]}else if(this.multipart)return this.multipart.filter(i=>i.when?this.matchesCase(i.when,e):!0).map(i=>Array.isArray(i.apply)?i.apply[0]:i.apply);return[]}getMesh(e,t,i,r,s){var l;const a=this.getModelVariants(t),o=new ct;for(const u of a){const h=St.rotate(s,u.x??0,u.y??0),f=r.getBlockModel(J.parse(u.model));if(!f)throw new Error(`Cannot find block model ${u.model}`);const d=e?(l=mn[e.path])==null?void 0:l.call(mn,t):void 0,g=f.getMesh(i,h,d);if(u.x||u.y){const _=ht();Je(_,_,[8,8,8]),Vt(_,_,-Ql(u.y??0)),Bs(_,_,-Ql(u.x??0)),Je(_,_,[-8,-8,-8]),g.transform(_)}o.merge(g)}const c=ht();return En(c,c,[.0625,.0625,.0625]),o.transform(c)}matchesVariant(e,t){return e.split(",").every(i=>{const[r,s]=i.split("=");return t[r]===s})}matchesCase(e,t){if(Array.isArray(e.OR))return e.OR.some(r=>this.matchesCase(r,t));const i=e;return Object.keys(i).every(r=>i[r].split("|").includes(t[r]))}static fromJson(e){const t=re.readObject(e)??{},i=re.readObject(t.variants),r=i?Object.fromEntries(Object.entries(i).map(([a,o])=>[a,Ef(o)])):void 0,s=re.readArray(t.multipart,PS);return new bo(r,s)}}class Bn{constructor(e,t,i,r){P(this,"v1");P(this,"v2");P(this,"v3");P(this,"v4");this.v1=e,this.v2=t,this.v3=i,this.v4=r}vertices(){return[this.v1,this.v2,this.v3,this.v4]}forEach(e){return e(this.v1),e(this.v2),e(this.v3),e(this.v4),this}transform(e){return this.forEach(t=>t.transform(e)),this}normal(){const e=this.v2.pos.sub(this.v1.pos),t=this.v3.pos.sub(this.v1.pos);return e.cross(t).normalize()}reverse(){return[this.v1,this.v2,this.v3,this.v4]=[this.v4,this.v3,this.v2,this.v1],this}setColor(e){return this.forEach(t=>t.color=e),this}setTexture(e,t){return this.v1.textureLimit=t,this.v2.textureLimit=t,this.v3.textureLimit=t,this.v4.textureLimit=t,this.v1.texture=[e[0],e[1]],this.v2.texture=[e[2],e[3]],this.v3.texture=[e[4],e[5]],this.v4.texture=[e[6],e[7]],this}toString(){return`Quad(${this.v1.pos.toString()}, ${this.v2.pos.toString()}, ${this.v3.pos.toString()}, ${this.v4.pos.toString()})`}static fromPoints(e,t,i,r){return new Bn(Ln.fromPos(e),Ln.fromPos(t),Ln.fromPos(i),Ln.fromPos(r))}}const LS={0:[0,3,2,3,2,1,0,1],90:[2,3,2,1,0,1,0,3],180:[2,1,0,1,0,3,2,3],270:[0,1,0,3,2,3,2,1]},IS={x:[1,0,0],y:[0,1,0],z:[0,0,1]},Gr=1.41421356237,DS={x:[1,Gr,Gr],y:[Gr,1,Gr],z:[Gr,Gr,1]},Ei=class Ei{constructor(e,t,i,r,s){P(this,"parent");P(this,"textures");P(this,"elements");P(this,"display");P(this,"guiLight");P(this,"generationMarker",!1);this.parent=e,this.textures=t,this.elements=i,this.display=r,this.guiLight=s}getDisplayTransform(e){var r;const t=(r=this.display)==null?void 0:r[e],i=ht();return Je(i,i,[8,8,8]),t!=null&&t.translation&&Je(i,i,t.translation),t!=null&&t.rotation&&(Bs(i,i,t.rotation[0]*Math.PI/180),Vt(i,i,t.rotation[1]*Math.PI/180),bf(i,i,-t.rotation[2]*Math.PI/180)),t!=null&&t.scale&&En(i,i,t.scale),Je(i,i,[-8,-8,-8]),i}getMesh(e,t,i){const r=new ct,s=a=>i===void 0?[1,1,1]:a===void 0||a<0?[1,1,1]:typeof i=="function"?i(a):i;for(const a of this.elements??[])r.merge(this.getElementMesh(a,e,t,s));return r}getElementMesh(e,t,i,r){var g,_,m,p,w,v,y,R,C,T,U,b;const s=new ct,[a,o,c]=e.from,[l,u,h]=e.to,f=(x,E,N)=>{var Ee,Pe,W,se;const D=Bn.fromPoints(new Ye(N[0],N[1],N[2]),new Ye(N[3],N[4],N[5]),new Ye(N[6],N[7],N[8]),new Ye(N[9],N[10],N[11])),O=r(x.tintindex);D.setColor(O);const[L,H,$,G]=t.getTextureUV(this.getTexture(x.texture)),ee=($-L)/16,le=(G-H)/16;E[0]=(((Ee=x.uv)==null?void 0:Ee[0])??E[0])*ee,E[1]=(((Pe=x.uv)==null?void 0:Pe[1])??E[1])*le,E[2]=(((W=x.uv)==null?void 0:W[2])??E[2])*ee,E[3]=(((se=x.uv)==null?void 0:se[3])??E[3])*le;const he=LS[x.rotation??0];D.setTexture([L+E[he[0]],H+E[he[1]],L+E[he[2]],H+E[he[3]],L+E[he[4]],H+E[he[5]],L+E[he[6]],H+E[he[7]]],[L+Math.min(E[0],E[2]),H+Math.min(E[1],E[3]),L+Math.max(E[0],E[2]),H+Math.max(E[1],E[3])]),s.quads.push(D)};(_=(g=e.faces)==null?void 0:g.up)!=null&&_.texture&&(!e.faces.up.cullface||!i[e.faces.up.cullface])&&f(e.faces.up,[a,16-h,l,16-c],[a,u,h,l,u,h,l,u,c,a,u,c]),(p=(m=e.faces)==null?void 0:m.down)!=null&&p.texture&&(!e.faces.down.cullface||!i[e.faces.down.cullface])&&f(e.faces.down,[16-h,16-l,16-c,16-a],[a,o,c,l,o,c,l,o,h,a,o,h]),(v=(w=e.faces)==null?void 0:w.south)!=null&&v.texture&&(!e.faces.south.cullface||!i[e.faces.south.cullface])&&f(e.faces.south,[a,16-u,l,16-o],[a,o,h,l,o,h,l,u,h,a,u,h]),(R=(y=e.faces)==null?void 0:y.north)!=null&&R.texture&&(!e.faces.north.cullface||!i[e.faces.north.cullface])&&f(e.faces.north,[16-l,16-u,16-a,16-o],[l,o,c,a,o,c,a,u,c,l,u,c]),(T=(C=e.faces)==null?void 0:C.east)!=null&&T.texture&&(!e.faces.east.cullface||!i[e.faces.east.cullface])&&f(e.faces.east,[16-h,16-u,16-c,16-o],[l,o,h,l,o,c,l,u,c,l,u,h]),(b=(U=e.faces)==null?void 0:U.west)!=null&&b.texture&&(!e.faces.west.cullface||!i[e.faces.west.cullface])&&f(e.faces.west,[c,16-u,h,16-o],[a,o,c,a,o,h,a,u,h,a,u,c]);const d=ht();if(e.rotation){const x=bn(...e.rotation.origin);Je(d,d,x),mS(d,d,Ql(e.rotation.angle),IS[e.rotation.axis]),e.rotation.rescale&&En(d,d,DS[e.rotation.axis]),MS(x,x),Je(d,d,x)}return s.transform(d)}getTexture(e){var t;for(;e.startsWith("#");)e=((t=this.textures)==null?void 0:t[e.slice(1)])??"";return J.parse(e)}flatten(e){var o;if(!this.parent)return;if(this.parent.equals(Ei.BUILTIN_GENERATED)){this.generationMarker=!0;return}const t=this.getParent(e);if(!t){console.warn(`parent ${this.parent} does not exist!`),this.parent=void 0;return}t.flatten(e),this.elements||(this.elements=t.elements),this.textures||(this.textures={});const i=this.textures,r=t.textures;r&&Object.keys(r).forEach(c=>{i[c]||(i[c]=r[c])}),this.display||(this.display={});const s=this.display,a=t.display;if(a&&Object.keys(a).forEach(c=>{const l=c;if(!s[l])s[l]=a[l];else{const u=a[l];u&&Object.keys(u).forEach(h=>{const f=h,d=s[l];d&&!d[f]&&u[f]&&(d[f]=u[f])})}}),this.guiLight||(this.guiLight=t.guiLight),t.generationMarker&&(this.generationMarker=!0),this.generationMarker&&(((o=this.elements)==null?void 0:o.length)??0)===0)for(let c=0;c<Ei.GENERATED_LAYERS.length;c+=1){const l=Ei.GENERATED_LAYERS[c];if(!Object.hasOwn(this.textures,l))break;this.elements||(this.elements=[]),this.elements.push({from:[0,0,0],to:[16,16,0],faces:{south:{texture:`#${l}`,tintindex:c}}})}this.parent=void 0}getParent(e){return this.parent?e.getBlockModel(this.parent):null}static fromJson(e){var u;const t=re.readObject(e)??{},i=re.readString(t.parent),r=i?J.parse(i):void 0,s=re.readObject(t.textures),a=s?re.readMap(s,h=>re.readString(h)??""):void 0,o=(u=re.readArray(t.elements,h=>re.readObject(h)??{}))==null?void 0:u.map(h=>h),c=re.readObject(t.display),l=re.readString(t.gui_light);return new Ei(r,a,o,c,l)}};P(Ei,"BUILTIN_GENERATED",J.create("builtin/generated")),P(Ei,"GENERATED_LAYERS",["layer0","layer1","layer2","layer3","layer4"]);let ft=Ei;class An{constructor(e,t){P(this,"img");P(this,"idMap");P(this,"part");if(this.img=e,this.idMap=t,!Jl(e.width)||!Jl(e.height))throw new Error(`Expected texture atlas dimensions to be powers of two, got ${e.width}x${e.height}.`);this.part=16/e.width}getTextureAtlas(){return this.img}getTextureUV(e){return this.idMap[e.toString()]??[0,0,this.part,this.part]}getPixelSize(){return this.part/16}static async fromBlobs(e){const t=Math.sqrt(Object.keys(e).length+1),i=gc(t),r=i*16,s=1/i,a=document.createElement("canvas");a.width=r,a.height=r;const o=a.getContext("2d");if(!o)throw new Error("Failed to get 2D rendering context");this.drawInvalidTexture(o);const c={};let l=1;return await Promise.all(Object.keys(e).map(async u=>{const h=l%i,f=Math.floor(l/i);l+=1,c[u]=[s*h,s*f,s*h+s,s*f+s];const d=await createImageBitmap(e[u]);o.drawImage(d,0,0,16,16,16*h,16*f,16,16)})),new An(o.getImageData(0,0,r,r),c)}static empty(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");if(!t)throw new Error("Failed to get 2D rendering context");return An.drawInvalidTexture(t),new An(t.getImageData(0,0,16,16),{})}static drawInvalidTexture(e){e.fillStyle="black",e.fillRect(0,0,16,16),e.fillStyle="magenta",e.fillRect(0,0,8,8),e.fillRect(8,8,8,8)}}function Ua(n){if(!n)return"";if(typeof n=="string")return n;const e=n;return typeof e.toString=="function"?e.toString():String(n)}function Af(){const n=new URL("../../assets/default-pack/",import.meta.url).toString();return _c(n)}function _c(n){const e=(typeof n=="string"?n:n.toString()).replace(/\/?$/,"/");return{baseUrl:e,assetsJson:new URL("assets.json",e).toString(),atlasPng:new URL("atlas.png",e).toString(),blockFlags:{opaqueTxt:new URL("block-flags/opaque.txt",e).toString(),transparentTxt:new URL("block-flags/transparent.txt",e).toString(),nonSelfCullingTxt:new URL("block-flags/non_self_culling.txt",e).toString(),emissiveJson:new URL("block-flags/emissive.json",e).toString()}}}function Al(n){const e=new Set;return(n.match(/minecraft:[a-z0-9_]+/g)??[]).forEach(i=>e.add(i)),n.split(/\s+/).map(i=>i.trim()).filter(Boolean).forEach(i=>{const r=i.startsWith("minecraft:")?i:`minecraft:${i}`;e.add(r)}),e}async function US(n){const e=typeof createImageBitmap=="function"?await createImageBitmap(n):null,t=(e==null?void 0:e.width)??0,i=(e==null?void 0:e.height)??0;if(!e||t<=0||i<=0)throw new Error("[lodestone] Unable to decode atlas.png: createImageBitmap unavailable or failed.");const r=gc(Math.max(t,i)),a=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(r,r):typeof document<"u"?Object.assign(document.createElement("canvas"),{width:r,height:r}):(()=>{throw new Error("[lodestone] No canvas implementation available to decode atlas.png")})()).getContext("2d");if(!a)throw new Error("[lodestone] Unable to create 2D canvas context to decode atlas.png");return a.drawImage(e,0,0),{imageData:a.getImageData(0,0,r,r),atlasSize:r}}function Cf(n){const{assets:e,atlas:t,flags:i}=n,r={};Object.keys(e.blockstates??{}).forEach(d=>{r[`minecraft:${d}`]=bo.fromJson(e.blockstates[d])});const s={};Object.keys(e.models??{}).forEach(d=>{s[`minecraft:${d}`]=ft.fromJson(e.models[d])});const a={getBlockModel(d){return s[Ua(d)]??null}};Object.values(s).forEach(d=>d.flatten(a));const o={};Object.keys(e.textures??{}).forEach(d=>{const[g,_,m,p]=e.textures[d],w=m!==p&&d.startsWith("block/")?m:p;o[`minecraft:${d}`]=[g/t.atlasSize,_/t.atlasSize,(g+m)/t.atlasSize,(_+w)/t.atlasSize]});const c=new An(t.imageData,o),l=(i==null?void 0:i.opaque)??new Set,u=(i==null?void 0:i.transparent)??new Set,h=(i==null?void 0:i.nonSelfCulling)??new Set,f=(i==null?void 0:i.emissive)??{};return{getBlockDefinition(d){return r[Ua(d)]??null},getBlockModel(d){return s[Ua(d)]??null},getTextureUV(d){return c.getTextureUV(d)},getTextureAtlas(){return c.getTextureAtlas()},getPixelSize(){return c.getPixelSize()},getBlockFlags(d){const g=Ua(d),_=u.has(g),m=l.has(g),p=!_&&(m||l.size===0),w=h.has(g),v=f[g];return{opaque:p,semi_transparent:_,self_culling:!w,emissive:!!v,emissiveIntensity:(v==null?void 0:v.intensity)??1,emissiveConditional:v==null?void 0:v.conditional}},getBlockProperties(){return null},getDefaultBlockProperties(){return null}}}async function NS(n){const e=(n==null?void 0:n.fetch)??globalThis.fetch;if(!e)throw new Error("[lodestone] fetch is not available; pass options.fetch");const t=n!=null&&n.baseUrl?_c(n.baseUrl):Af(),[i,r,s,a,o,c]=await Promise.all([e(t.assetsJson),e(t.atlasPng),e(t.blockFlags.opaqueTxt),e(t.blockFlags.transparentTxt),e(t.blockFlags.nonSelfCullingTxt),e(t.blockFlags.emissiveJson)]);if(!i.ok)throw new Error(`[lodestone] Failed to fetch assets.json: ${i.status} ${i.statusText}`);if(!r.ok)throw new Error(`[lodestone] Failed to fetch atlas.png: ${r.status} ${r.statusText}`);if(!s.ok)throw new Error(`[lodestone] Failed to fetch opaque.txt: ${s.status} ${s.statusText}`);if(!a.ok)throw new Error(`[lodestone] Failed to fetch transparent.txt: ${a.status} ${a.statusText}`);if(!o.ok)throw new Error(`[lodestone] Failed to fetch non_self_culling.txt: ${o.status} ${o.statusText}`);if(!c.ok)throw new Error(`[lodestone] Failed to fetch emissive.json: ${c.status} ${c.statusText}`);const l=await i.json(),u=await r.blob(),h=await US(u),f={opaque:Al(await s.text()),transparent:Al(await a.text()),nonSelfCulling:Al(await o.text()),emissive:await c.json()},d=Cf({assets:l,atlas:h,flags:f});return{urls:t,assets:l,atlas:h,resources:d}}function Gh(n,e,t,i,r){var a;const s=i.up?16:[14.2,12.5,10.5,9,7,5.3,3.7,1.9,16,16,16,16,16,16,16,16][e];return new ft(void 0,{still:`block/${n}_still`,flow:`block/${n}_flow`},[{from:[0,0,0],to:[16,s,16],faces:{up:{texture:"#still",tintindex:r,cullface:He.UP},down:{texture:"#still",tintindex:r,cullface:He.DOWN},north:{texture:"#flow",tintindex:r,cullface:He.NORTH},east:{texture:"#flow",tintindex:r,cullface:He.EAST},south:{texture:"#flow",tintindex:r,cullface:He.SOUTH},west:{texture:"#flow",tintindex:r,cullface:He.WEST}}}]).getMesh(t,i,(a=mn[n])==null?void 0:a.call(mn,{}))}const ys={white:Qe.intToRgb(16383998),orange:Qe.intToRgb(16351261),magenta:Qe.intToRgb(13061821),light_blue:Qe.intToRgb(3847130),yellow:Qe.intToRgb(16701501),lime:Qe.intToRgb(8439583),pink:Qe.intToRgb(15961002),gray:Qe.intToRgb(4673362),light_gray:Qe.intToRgb(10329495),cyan:Qe.intToRgb(1481884),purple:Qe.intToRgb(8991416),blue:Qe.intToRgb(3949738),brown:Qe.intToRgb(8606770),green:Qe.intToRgb(6192150),red:Qe.intToRgb(11546150),black:Qe.intToRgb(1908001)};var at;(function(n){function e(L){return H=>new ft(void 0,{0:L.withPrefix("entity/chest/").toString()},[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],rotation:180,texture:"#0"},down:{uv:[.75,0,1.25,.25],rotation:180,texture:"#0"}}}]).getMesh(H,St.none())}n.chestRenderer=e;function t(L){return new ft(void 0,{0:"entity/decorated_pot/decorated_pot_side",1:"entity/decorated_pot/decorated_pot_base"},[{from:[1,0,1],to:[15,16,15],faces:{north:{uv:[1,0,15,16],texture:"#0"},east:{uv:[1,0,15,16],texture:"#0"},south:{uv:[1,0,15,16],texture:"#0"},west:{uv:[1,0,15,16],texture:"#0"},up:{uv:[0,6.5,7,13.5],texture:"#1"},down:{uv:[7,6.5,14,13.5],texture:"#1"}}},{from:[5,16,5],to:[11,17,11],faces:{north:{uv:[0,5.5,3,6],texture:"#1"},east:{uv:[3,5.5,6,6],texture:"#1"},south:{uv:[6,5.5,9,6],texture:"#1"},west:{uv:[9,5.5,12,6],texture:"#1"}}},{from:[4,17,4],to:[12,20,12],faces:{north:{uv:[0,4,4,5.5],texture:"#1"},east:{uv:[4,4,8,5.5],texture:"#1"},south:{uv:[8,4,12,5.5],texture:"#1"},west:{uv:[12,4,16,5.5],texture:"#1"},up:{uv:[4,0,8,4],texture:"#1"},down:{uv:[8,0,12,4],texture:"#1"}}}]).getMesh(L,St.none())}n.decoratedPotRenderer=t;function i(L){return new ft(void 0,{0:"entity/shield_base_nopattern"},[{from:[-6,-11,-2],to:[6,11,-1],faces:{north:{uv:[3.5,.25,6.5,5.75],texture:"#0"},east:{uv:[3.25,.25,3.5,5.75],texture:"#0"},south:{uv:[.25,.25,3.25,5.75],texture:"#0"},west:{uv:[0,.25,.25,5.75],texture:"#0"},up:{uv:[.25,0,3.25,.25],texture:"#0"},down:{uv:[3.25,0,6.25,.25],texture:"#0"}}}]).getMesh(L,St.none())}n.shieldRenderer=i;function r(L,H){return $=>new ft(void 0,{0:L.withPrefix("entity/").toString()},[{from:[4,0,4],to:[12,8,12],faces:{north:{uv:[6,2*H,8,4*H],texture:"#0"},east:{uv:[2,2*H,0,4*H],texture:"#0"},south:{uv:[2,2*H,4,4*H],texture:"#0"},west:{uv:[6,2*H,4,4*H],texture:"#0"},up:{uv:[2,0*H,4,2*H],texture:"#0"},down:{uv:[4,0*H,6,2*H],texture:"#0"}}}]).getMesh($,St.none())}n.headRenderer=r;function s(L=J.create("enderdragon/dragon")){return H=>{const $=ht();return Je($,$,[8,8,8]),En($,$,[.75,.75,.75]),Vt($,$,Math.PI),Je($,$,[-8,-11.2,-8]),new ft(void 0,{0:L.withPrefix("entity/").toString()},[{from:[2,4,-16],to:[14,9,0],faces:{north:{uv:[12,3.75,12.75,4.0625],texture:"#0"},east:{uv:[11,3.75,12,4.0625],texture:"#0"},south:{uv:[13.75,3.75,14.5,4.0625],texture:"#0"},west:{uv:[12.75,3.75,13.75,4.0625],texture:"#0"},up:{uv:[12.75,3.75,12,2.75],texture:"#0"},down:{uv:[13.5,2.75,12.75,3.75],texture:"#0"}}},{from:[0,0,-2],to:[16,16,14],faces:{north:{uv:[8,2.875,9,3.875],texture:"#0"},east:{uv:[7,2.875,8,3.875],texture:"#0"},south:{uv:[10,2.875,11,3.875],texture:"#0"},west:{uv:[9,2.875,10,3.875],texture:"#0"},up:{uv:[9,2.875,8,1.875],texture:"#0"},down:{uv:[10,1.875,9,2.875],texture:"#0"}}},{from:[2,0,-16],to:[14,4,0],rotation:{angle:-.2*180/Math.PI,axis:"x",origin:[8,4,-2]},faces:{north:{uv:[12,5.0625,12.75,5.3125],texture:"#0"},east:{uv:[11,5.0625,12,5.3125],texture:"#0"},south:{uv:[13.75,5.0625,14.5,5.3125],texture:"#0"},west:{uv:[12.75,5.0625,13.75,5.3125],texture:"#0"},up:{uv:[12.75,5.0625,12,4.0625],texture:"#0"},down:{uv:[13.5,4.0625,12.75,5.0625],texture:"#0"}}},{from:[3,16,4],to:[5,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[11,16,4],to:[13,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[3,9,-14],to:[5,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}},{from:[11,9,-14],to:[13,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}}]).getMesh(H,St.none()).transform($)}}n.dragonHeadRenderer=s;function a(L=J.create("piglin/piglin")){return H=>new ft(void 0,{0:L.withPrefix("entity/").toString()},[{from:[3,0,4],to:[13,8,12],faces:{north:{uv:[6.5,2,9,4],texture:"#0"},east:{uv:[2,2,0,4],texture:"#0"},south:{uv:[2,2,4.5,4],texture:"#0"},west:{uv:[6.5,2,4.5,4],texture:"#0"},up:{uv:[2,0,4.5,2],texture:"#0"},down:{uv:[4.5,0,7,2],texture:"#0"}}},{from:[6,0,12],to:[10,4,13],faces:{north:{uv:[9.25,.5,10.25,1.5],texture:"#0"},east:{uv:[7.75,.5,8,1.5],texture:"#0"},south:{uv:[8,.5,9,1.5],texture:"#0"},west:{uv:[9,.5,9.25,1.5],texture:"#0"},up:{uv:[8,.25,9,.5],texture:"#0"},down:{uv:[9,.25,10,.5],texture:"#0"}}},{from:[5,0,12],to:[6,2,13],faces:{north:{uv:[1.25,.25,1.5,.75],texture:"#0"},east:{uv:[.5,.25,.75,.75],texture:"#0"},south:{uv:[.75,.25,1,.75],texture:"#0"},west:{uv:[1,.25,1.25,.75],texture:"#0"},up:{uv:[.75,0,1,.25],texture:"#0"},down:{uv:[1,0,1.25,.25],texture:"#0"}}},{from:[10,0,12],to:[11,2,13],faces:{north:{uv:[1.25,1.25,1.5,1.75],texture:"#0"},east:{uv:[.5,1.25,.75,1.75],texture:"#0"},south:{uv:[.75,1.25,1,1.75],texture:"#0"},west:{uv:[1,1.25,1.25,1.75],texture:"#0"},up:{uv:[.75,1,1,1.25],texture:"#0"},down:{uv:[1,1,1.25,1.25],texture:"#0"}}},{from:[2.5,1.5,6],to:[3.5,6.5,10],rotation:{angle:-30,axis:"z",origin:[3,7,8]},faces:{north:{uv:[12,2.5,12.25,3.75],texture:"#0"},east:{uv:[9.75,2.5,10.75,3.75],texture:"#0"},south:{uv:[10.75,2.5,11,3.75],texture:"#0"},west:{uv:[11,2.5,12,3.75],texture:"#0"},up:{uv:[10.75,1.5,11,2.5],texture:"#0"},down:{uv:[11,1.5,11.25,2.5],texture:"#0"}}},{from:[12.5,1.5,6],to:[13.5,6.5,10],rotation:{angle:30,axis:"z",origin:[13,7,8]},faces:{north:{uv:[15.25,2.5,15,3.75],texture:"#0"},east:{uv:[15,2.5,14,3.75],texture:"#0"},south:{uv:[14,2.5,13.75,3.75],texture:"#0"},west:{uv:[13.75,2.5,12.75,3.75],texture:"#0"},up:{uv:[14,1.5,13.75,2.5],texture:"#0"},down:{uv:[14.25,1.5,14,2.5],texture:"#0"}}}]).getMesh(H,St.none())}n.piglinHeadRenderer=a;function o(L){return H=>new ft(void 0,{0:L.withPrefix("entity/signs/").toString()},[{from:[-4,8,7],to:[20,20,9],faces:{north:{uv:[0,0,12,6],texture:"#0"},east:{uv:[12,1,13,7],texture:"#0"},south:{uv:[0,8,12,14],texture:"#0"},west:{uv:[12,1,13,7],texture:"#0"},up:{uv:[0,0,12,.5],texture:"#0"},down:{uv:[0,5.5,12,6],texture:"#0"}}},{from:[7,-6,7],to:[9,8,9],faces:{north:{uv:[14,8,15,15],texture:"#0"},east:{uv:[15,8,16,15],texture:"#0"},south:{uv:[14,8,15,15],texture:"#0"},west:{uv:[15,8,16,15],texture:"#0"},up:{uv:[14,7.5,15,8],texture:"#0"},down:{uv:[15,7.5,16,8],texture:"#0"}}}]).getMesh(H,St.none())}n.signRenderer=o;function c(L){return H=>new ft(void 0,{0:L.withPrefix("entity/signs/").toString()},[{from:[-4,4,17],to:[20,16,19],faces:{north:{uv:[0,0,12,6],texture:"#0"},east:{uv:[12,1,13,7],texture:"#0"},south:{uv:[0,8,12,14],texture:"#0"},west:{uv:[12,1,13,7],texture:"#0"},up:{uv:[0,0,12,.5],texture:"#0"},down:{uv:[0,5.5,12,6],texture:"#0"}}}]).getMesh(H,St.none())}n.wallSignRenderer=c;function l(L){return(H,$)=>{const G=[14,4,16,6];return new ft(void 0,{0:L.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{south:{uv:[1,8,8,13],texture:"#0"},west:{uv:[0,8,1,13],texture:"#0"},north:{uv:[9,8,16,13],texture:"#0"},east:{uv:[8,8,9,13],texture:"#0"},up:{uv:[1,7,8,8],texture:"#0"},down:{uv:[1,7,8,8],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,12,8],rotation:{angle:-45,axis:"y",origin:[3,11,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,11,8],to:[4.5,15,8],rotation:{angle:45,axis:"y",origin:[3,13,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,14,8],to:[4.5,16,8],rotation:{angle:-45,axis:"y",origin:[3,15,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,12,8],rotation:{angle:-45,axis:"y",origin:[13,11,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,11,8],to:[14.5,15,8],rotation:{angle:45,axis:"y",origin:[13,13,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,14,8],to:[14.5,16,8],rotation:{angle:-45,axis:"y",origin:[13,15,8]},faces:{north:{uv:G,texture:"#0"},south:{uv:G,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}}]).getMesh($,St.none())}}n.hangingSignRenderer=l;function u(L){return H=>{const $=[14,4,16,6];return new ft(void 0,{0:`entity/signs/hanging/${L}`},[{from:[1,0,7],to:[15,10,9],faces:{south:{uv:[1,8,8,13],texture:"#0"},west:{uv:[0,8,1,13],texture:"#0"},north:{uv:[9,8,16,13],texture:"#0"},east:{uv:[8,8,9,13],texture:"#0"},up:{uv:[1,7,8,8],texture:"#0"},down:{uv:[1,7,8,8],texture:"#0"}}},{from:[0,14,6],to:[16,16,10],faces:{north:{uv:[0,2,8,3],texture:"#0"},east:{uv:[8,2,10,3],texture:"#0"},south:{uv:[0,2,8,3],texture:"#0"},west:{uv:[8,2,10,3],texture:"#0"},up:{uv:[0,0,8,1],texture:"#0"},down:{uv:[0,1,8,2],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,12,8],rotation:{angle:45,axis:"y",origin:[3,11,8]},faces:{north:{uv:$,texture:"#0"},south:{uv:$,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[1.5,11,8],to:[4.5,14,8],rotation:{angle:-45,axis:"y",origin:[3,12.5,8]},faces:{north:{uv:$,texture:"#0"},south:{uv:$,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,12,8],rotation:{angle:45,axis:"y",origin:[13,11,8]},faces:{north:{uv:$,texture:"#0"},south:{uv:$,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}},{from:[11.5,11,8],to:[14.5,14,8],rotation:{angle:-45,axis:"y",origin:[13,12.5,8]},faces:{north:{uv:$,texture:"#0"},south:{uv:$,texture:"#0"},up:{uv:[14,4,16,4.5],texture:"#0"},down:{uv:[14,5.5,16,6],texture:"#0"}}}]).getMesh(H,St.none())}}n.wallHangingSignRenderer=u;function h(L){return new ft(void 0,{0:"entity/conduit/base"},[{from:[5,5,5],to:[11,11,11],faces:{north:{uv:[3,6,6,12],texture:"#0"},east:{uv:[0,6,3,12],texture:"#0"},south:{uv:[9,6,12,12],texture:"#0"},west:{uv:[6,6,9,12],texture:"#0"},up:{uv:[6,6,3,0],texture:"#0"},down:{uv:[9,0,6,6],texture:"#0"}}}]).getMesh(L,St.none())}n.conduitRenderer=h;function f(L){return H=>new ft(void 0,{0:L.withPrefix("entity/shulker/").toString()},[{from:[0,0,0],to:[16,8,16],faces:{north:{uv:[4,11,8,13],texture:"#0"},east:{uv:[0,11,4,13],texture:"#0"},south:{uv:[12,11,16,13],texture:"#0"},west:{uv:[8,11,12,13],texture:"#0"},up:{uv:[8,11,4,7],texture:"#0"},down:{uv:[12,7,8,11],texture:"#0"}}},{from:[0,4,0],to:[16,16,16],faces:{north:{uv:[4,4,8,7],texture:"#0"},east:{uv:[0,4,4,7],texture:"#0"},south:{uv:[12,4,16,7],texture:"#0"},west:{uv:[8,4,12,7],texture:"#0"},up:{uv:[8,4,4,0],texture:"#0"},down:{uv:[12,0,8,4],texture:"#0"}}}]).getMesh(H,St.none())}n.shulkerBoxRenderer=f;const d=L=>({north:{uv:[.25,.25,5.25,10.25],texture:`#${L}`,tintindex:L},east:{uv:[0,.25,.25,10.25],texture:`#${L}`,tintindex:L},south:{uv:[5.5,.25,10.5,10.25],texture:`#${L}`,tintindex:L},west:{uv:[5.25,.25,5.5,10.25],texture:`#${L}`,tintindex:L},up:{uv:[5.25,.25,.25,0],texture:`#${L}`,tintindex:L},down:{uv:[10.25,0,5.25,.25],texture:`#${L}`,tintindex:L}});function g(L,H){return($,G)=>{const ee={0:"entity/banner_base"},le=[...H.base],he=[L];return G==null||G.forEach((Ee,Pe)=>{const W=J.parse(Ee.getString("pattern")).path,se=Ee.getString("color");Pe++,ee[Pe]=`entity/banner/${W}`,le.push(H.pattern(Pe)),he.push(se)}),new ft(void 0,ee,le).getMesh($,St.none(),Ee=>ys[he[Ee]])}}n.bannerRenderer=L=>g(L,{base:[{from:[-2,-8,6],to:[18,32,7],faces:d(0)},{from:[7,-12,7],to:[9,30,9],faces:{north:{uv:[11.5,.5,12,11],texture:"#0"},east:{uv:[11,.5,11.5,11],texture:"#0"},south:{uv:[12.5,.5,13,11],texture:"#0"},west:{uv:[12,.5,12.5,11],texture:"#0"},up:{uv:[12,.5,11.5,0],texture:"#0"},down:{uv:[12.5,0,12,.5],texture:"#0"}}},{from:[-2,30,7],to:[18,32,9],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:H=>({from:[-2,-8,6],to:[18,32,7],faces:d(H)})}),n.wallBannerRenderer=L=>g(L,{base:[{from:[-2,-8,-1.5],to:[18,32,-.5],faces:d(0)},{from:[-2,30,-3.5],to:[18,32,-1.5],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:H=>({from:[-2,-8,-1.5],to:[18,32,-.5],faces:d(H)})});function _(L){return new ft(void 0,{0:"entity/bell/bell_body"},[{from:[5,3,5],to:[11,10,11],faces:{north:{uv:[3,3,6,6.5],texture:"#0"},east:{uv:[0,3,3,6.5],texture:"#0"},south:{uv:[9,3,12,6.5],texture:"#0"},west:{uv:[6,3,9,6.5],texture:"#0"},up:{uv:[6,3,3,0],texture:"#0"},down:{uv:[9,0,6,3],texture:"#0"}}},{from:[4,10,4],to:[12,12,12],faces:{north:{uv:[4,10.5,8,11.5],texture:"#0"},east:{uv:[0,10.5,4,11.5],texture:"#0"},south:{uv:[12,10.5,16,11.5],texture:"#0"},west:{uv:[8,10.5,12,11.5],texture:"#0"},up:{uv:[8,10.5,4,6.5],texture:"#0"},down:{uv:[12,6.5,8,10.5],texture:"#0"}}}]).getMesh(L,St.none())}n.bellRenderer=_;function m(L){return(H,$)=>H==="foot"?new ft(void 0,{0:L.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{north:{uv:[5.5,5.5,9.5,7],rotation:180,texture:"#0"},east:{uv:[0,7,1.5,11],rotation:270,texture:"#0"},west:{uv:[5.5,7,7,11],rotation:90,texture:"#0"},up:{uv:[5.5,11,1.5,7],texture:"#0"},down:{uv:[11,7,7,11],texture:"#0"}}},{from:[0,0,0],to:[3,3,3],faces:{north:{uv:[12.5,5.25,13.25,6],texture:"#0"},east:{uv:[14.75,5.25,15.5,6],texture:"#0"},south:{uv:[14,5.25,14.75,6],texture:"#0"},west:{uv:[13.25,5.25,14,6],texture:"#0"},up:{uv:[13.25,4.5,14,5.25],texture:"#0"},down:{uv:[14,4.5,14.75,5.25],texture:"#0"}}},{from:[13,0,0],to:[16,3,3],faces:{north:{uv:[13.25,3.75,14,4.5],texture:"#0"},east:{uv:[12.5,3.75,13.25,4.5],texture:"#0"},south:{uv:[14.75,3.75,15.5,4.5],texture:"#0"},west:{uv:[14,3.75,14.75,4.5],texture:"#0"},up:{uv:[13.25,3,14,3.75],texture:"#0"},down:{uv:[14,3,14.75,3.75],texture:"#0"}}}]).getMesh($,St.none()):new ft(void 0,{0:L.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{east:{uv:[0,1.5,1.5,5.5],rotation:270,texture:"#0"},south:{uv:[1.5,0,5.5,1.5],rotation:180,texture:"#0"},west:{uv:[5.5,1.5,7,5.5],rotation:90,texture:"#0"},up:{uv:[5.5,5.5,1.5,1.5],texture:"#0"},down:{uv:[11,1.5,7,5.5],texture:"#0"}}},{from:[0,0,13],to:[3,3,16],faces:{north:{uv:[14.75,.75,15.5,1.5],texture:"#0"},east:{uv:[14,.75,14.75,1.5],texture:"#0"},south:{uv:[13.25,.75,14,1.5],texture:"#0"},west:{uv:[12.5,.75,13.25,1.5],texture:"#0"},up:{uv:[13.25,0,14,.75],texture:"#0"},down:{uv:[14,0,14.75,.75],texture:"#0"}}},{from:[13,0,13],to:[16,3,16],faces:{north:{uv:[14,2.25,14.75,3],texture:"#0"},east:{uv:[13.25,2.25,14,3],texture:"#0"},south:{uv:[12.5,2.25,13.25,3],texture:"#0"},west:{uv:[14.75,2.25,15.5,3],texture:"#0"},up:{uv:[13.25,1.5,14,2.25],texture:"#0"},down:{uv:[14,1.5,14.75,2.25],texture:"#0"}}}]).getMesh($,St.none())}n.bedRenderer=m;function p(L,H,$=""){return L.getProperty(H)??$}function w(L,H,$="0"){return parseInt(L.getProperty(H)??$)}const v=new Map(Object.entries({"minecraft:chest":n.chestRenderer(J.create("normal")),"minecraft:ender_chest":n.chestRenderer(J.create("ender")),"minecraft:trapped_chest":n.chestRenderer(J.create("trapped"))})),y=new Map(Object.entries({"minecraft:skeleton_skull":n.headRenderer(J.create("skeleton/skeleton"),2),"minecraft:wither_skeleton_skull":n.headRenderer(J.create("skeleton/wither_skeleton"),2),"minecraft:zombie_head":n.headRenderer(J.create("zombie/zombie"),1),"minecraft:creeper_head":n.headRenderer(J.create("creeper/creeper"),2),"minecraft:dragon_head":n.dragonHeadRenderer(),"minecraft:piglin_head":n.piglinHeadRenderer(),"minecraft:player_head":n.headRenderer(J.create("player/wide/steve"),1)})),R=["oak","spruce","birch","jungle","acacia","dark_oak","crimson","warped","mangrove","bamboo","cherry","pale_oak","poplar"],C=new Map(R.map(L=>[`minecraft:${L}_sign`,n.signRenderer(J.create(L))])),T=new Map(R.map(L=>[`minecraft:${L}_wall_sign`,n.wallSignRenderer(J.create(L))])),U=new Map(R.map(L=>[`minecraft:${L}_hanging_sign`,n.hangingSignRenderer(J.create(L))])),b=new Map(R.map(L=>[`minecraft:${L}_wall_hanging_sign`,n.wallHangingSignRenderer(L)])),x=new Map(Object.keys(ys).map(L=>[`minecraft:${L}_shulker_box`,n.shulkerBoxRenderer(J.create(`shulker_${L}`))])),E=new Map(Object.keys(ys).map(L=>[`minecraft:${L}_bed`,n.bedRenderer(J.create(L))])),N=new Map(Object.keys(ys).map(L=>[`minecraft:${L}_banner`,n.bannerRenderer(L)])),D=new Map(Object.keys(ys).map(L=>[`minecraft:${L}_wall_banner`,n.wallBannerRenderer(L)]));function O(L,H,$,G){const ee=new ct;L.is("water")&&ee.merge(Gh("water",w(L,"level"),$,G,0)),L.is("lava")&&ee.merge(Gh("lava",w(L,"level"),$,G));const le=v.get(L.getName().toString());if(le!==void 0){const me=p(L,"facing","south"),Y=ht();Je(Y,Y,[8,8,8]),Vt(Y,Y,me==="west"?Math.PI/2:me==="south"?Math.PI:me==="east"?Math.PI*3/2:0),Je(Y,Y,[-8,-8,-8]),ee.merge(le($).transform(Y))}L.is("decorated_pot")&&ee.merge(t($));const he=y.get(L.getName().toString());if(he!==void 0){const me=w(L,"rotation")/16*Math.PI*2,Y=ht();Je(Y,Y,[8,8,8]),Vt(Y,Y,me),Je(Y,Y,[-8,-8,-8]),ee.merge(he($).transform(Y))}const Ee=C.get(L.getName().toString());if(Ee!==void 0){const me=w(L,"rotation")/16*Math.PI*2,Y=ht();Je(Y,Y,[8,8,8]),Vt(Y,Y,me),En(Y,Y,[2/3,2/3,2/3]),Je(Y,Y,[-8,-8,-8]),ee.merge(Ee($).transform(Y))}const Pe=T.get(L.getName().toString());if(Pe!==void 0){const me=p(L,"facing","south"),Y=ht();Je(Y,Y,[8,8,8]),Vt(Y,Y,me==="west"?Math.PI/2:me==="south"?Math.PI:me==="east"?Math.PI*3/2:0),En(Y,Y,[2/3,2/3,2/3]),Je(Y,Y,[-8,-8,-8]),ee.merge(Pe($).transform(Y))}const W=U.get(L.getName().toString());if(W!==void 0){const me=p(L,"attached","false")==="true",Y=w(L,"rotation")/16*Math.PI*2,Ie=ht();Je(Ie,Ie,[8,8,8]),Vt(Ie,Ie,Y),Je(Ie,Ie,[-8,-8,-8]),ee.merge(W(me,$).transform(Ie))}const se=b.get(L.getName().toString());if(se!==void 0){const me=p(L,"facing","south"),Y=ht();Je(Y,Y,[8,8,8]),Vt(Y,Y,me==="west"?Math.PI/2:me==="south"?Math.PI:me==="east"?Math.PI*3/2:0),Je(Y,Y,[-8,-8,-8]),ee.merge(se($).transform(Y))}L.is("conduit")&&ee.merge(h($));const Me=x.get(L.getName().toString());if(Me!==void 0){const me=p(L,"facing","up"),Y=ht();Je(Y,Y,[8,8,8]),me==="down"?Bs(Y,Y,Math.PI):me!=="up"&&(Vt(Y,Y,me==="east"?Math.PI/2:me==="north"?Math.PI:me==="west"?Math.PI*3/2:0),Bs(Y,Y,Math.PI/2)),Je(Y,Y,[-8,-8,-8]),ee.merge(Me($).transform(Y))}if(L.is("bell")){const me=ht();Je(me,me,[8,8,8]),En(me,me,[1,-1,-1]),Je(me,me,[-8,-8,-8]),ee.merge(_($).transform(me))}const pe=E.get(L.getName().toString());if(pe!==void 0){const me=p(L,"part","head"),Y=p(L,"facing","south"),Ie=ht();Je(Ie,Ie,[8,8,8]),Vt(Ie,Ie,Y==="east"?Math.PI/2:Y==="north"?Math.PI:Y==="west"?Math.PI*3/2:0),Je(Ie,Ie,[-8,-8,-8]),ee.merge(pe(me,$).transform(Ie))}const Ce=N.get(L.getName().toString());if(Ce!==void 0){const me=w(L,"rotation")/16*Math.PI*2,Y=ht();Je(Y,Y,[8,24,8]),Vt(Y,Y,me),En(Y,Y,[2/3,2/3,2/3]),Je(Y,Y,[-8,-24,-8]),ee.merge(Ce($,H==null?void 0:H.getList("patterns",ve.Compound)).transform(Y))}const Te=D.get(L.getName().toString());if(Te!==void 0){const me=p(L,"facing","south"),Y=ht();Je(Y,Y,[8,8,8]),Vt(Y,Y,me==="east"?Math.PI/2:me==="north"?Math.PI:me==="west"?Math.PI*3/2:0),En(Y,Y,[2/3,2/3,2/3]),Je(Y,Y,[-8,-23.2,-8]),ee.merge(Te($,H==null?void 0:H.getList("patterns",ve.Compound)).transform(Y))}const F=ht();return En(F,F,[.0625,.0625,.0625]),ee.transform(F)}C.clear(),T.clear(),U.clear(),b.clear(),R.forEach(L=>{C.set(`minecraft:${L}_sign`,n.signRenderer(J.create(L))),T.set(`minecraft:${L}_wall_sign`,n.wallSignRenderer(J.create(L))),U.set(`minecraft:${L}_hanging_sign`,n.hangingSignRenderer(J.create(L))),b.set(`minecraft:${L}_wall_hanging_sign`,n.wallHangingSignRenderer(L))}),n.getBlockMesh=O})(at||(at={}));class Zr{constructor(e,t,i,r=16,s=!0){P(this,"gl");P(this,"structure");P(this,"resources");P(this,"chunks",[]);P(this,"chunkSize");P(this,"meshesDirty",!0);P(this,"meshCache",[]);P(this,"emissiveLights",[]);P(this,"emissiveLightsByChunk",new Map);P(this,"emissiveDirty",!0);P(this,"blockPropsCache",new WeakMap);P(this,"buildToken",0);this.gl=e,this.structure=t,this.resources=i,this.chunkSize=typeof r=="number"?[r,r,r]:r,s&&this.updateStructureBuffers()}setStructure(e,t){this.structure=e,(t==null?void 0:t.rebuild)!==!1&&this.updateStructureBuffers()}updateStructureBuffers(e){if(!this.structure)return;this.buildToken+=1;const t=this.buildChunkFilter(e);this.markDirty(),this.prepareRebuild(e);for(const i of this.structure.getBlocks())this.processBlock(i,t);this.finalizeRebuild(e)}async updateStructureBuffersAsync(e){var c,l;if(!this.structure)return;const t=++this.buildToken,i=this.buildChunkFilter(e==null?void 0:e.chunkPositions);this.markDirty(),this.prepareRebuild(e==null?void 0:e.chunkPositions);const r=this.structure.getBlocks(),s=r.length,a=(e==null?void 0:e.timeSliceMs)??8;let o=this.now();for(let u=0;u<r.length;u++){if(t!==this.buildToken)return;this.processBlock(r[u],i),!(u&1023)&&this.now()-o>=a&&((c=e==null?void 0:e.onProgress)==null||c.call(e,u+1,s),await this.yieldControl(),o=this.now())}t===this.buildToken&&(await this.finalizeRebuildAsync(e==null?void 0:e.chunkPositions,a),(l=e==null?void 0:e.onProgress)==null||l.call(e,s,s))}getMeshes(){return this.getMeshEntries().map(e=>e.mesh)}cancelPendingBuilds(){this.buildToken+=1}getMeshesInRange(e,t){return this.getMeshEntriesInRange(e,t).map(i=>i.mesh)}getMeshEntries(){return(this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),this.meshCache}getMeshEntriesInRange(e,t){if((this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),t===void 0)return this.meshCache;const i=t*t;return this.meshCache.filter(s=>{const a=[s.origin[0]+this.chunkSize[0]*.5,s.origin[1]+this.chunkSize[1]*.5,s.origin[2]+this.chunkSize[2]*.5],o=a[0]-e[0],c=a[1]-e[1],l=a[2]-e[2];return o*o+c*c+l*l<=i})}needsCull(e,t){var s;const i=(s=this.structure.getBlock(Rt.towards(e.pos,t)))==null?void 0:s.state;if(!i)return!1;const r=this.resources.getBlockFlags(i.getName());return e.state.getName().equals(i.getName())&&(r!=null&&r.self_culling)?!0:r!=null&&r.opaque?!(t===He.UP&&e.state.isWaterlogged()):e.state.isWaterlogged()&&i.isWaterlogged()}isFullyOccluded(e){var i;const t=[He.UP,He.DOWN,He.NORTH,He.SOUTH,He.EAST,He.WEST];for(const r of t){const s=(i=this.structure.getBlock(Rt.towards(e.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=this.resources.getBlockFlags(s.getName());if(!(a!=null&&a.opaque))return!1}return!0}finishChunkMesh(e,t,i,r,s){const a=ht();Je(a,a,t),e.transform(a);const o=this.resources.getBlockFlags(i);let c=0;if(o!=null&&o.emissive){const l=o.emissiveConditional;if(l){const u=r[l];(u===void 0||u==="true")&&(c=o.emissiveIntensity??1)}else c=o.emissiveIntensity??1}if(c>0){const l=this.emissiveLightsByChunk.get(s)??[];l.push({position:[t[0]+.5,t[1]+.5,t[2]+.5],intensity:c,color:[1,.85,.6]}),this.emissiveLightsByChunk.set(s,l),this.emissiveDirty=!0}for(const l of e.quads){const u=l.normal();l.forEach(h=>{h.normal=u,h.blockPos=new Ye(t[0],t[1],t[2]),h.emissive=c})}}getEmissiveLights(){if(this.emissiveDirty){const e=[];this.emissiveLightsByChunk.forEach(t=>e.push(...t)),this.emissiveLights=e,this.emissiveDirty=!1}return this.emissiveLights}clearEmissiveLights(e){const t=this.chunkKey(e);this.emissiveLightsByChunk.has(t)&&(this.emissiveLightsByChunk.delete(t),this.emissiveDirty=!0)}prepareRebuild(e){if(!e){this.emissiveLightsByChunk.clear(),this.emissiveLights=[],this.emissiveDirty=!0,this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.clear(),r.transparentMesh.clear())})));return}e.forEach(t=>this.clearEmissiveLights(t)),e.forEach(t=>{const i=this.getChunk(t);i.mesh.clear(),i.transparentMesh.clear()})}finalizeRebuild(e){if(!e){this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),r.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}))})));return}e.forEach(t=>{const i=this.getChunk(t);i.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),i.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW})})}async finalizeRebuildAsync(e,t=8){let i=this.now();const r=async()=>{this.now()-i>=t&&(await this.yieldControl(),i=this.now())};if(!e){for(const s of this.chunks)if(s){for(const a of s)if(a)for(const o of a)o&&(o.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),o.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r())}return}for(const s of e){const a=this.getChunk(s);a.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),a.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r()}}processBlock(e,t){var c;const i=e.state.getName(),r=this.getBlockProps(e.state);if(this.isFullyOccluded(e))return;const s=[Math.floor(e.pos[0]/this.chunkSize[0]),Math.floor(e.pos[1]/this.chunkSize[1]),Math.floor(e.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(t&&!t.has(a))return;const o=this.getChunk(s);try{const l=this.resources.getBlockDefinition(i),u={up:this.needsCull(e,He.UP),down:this.needsCull(e,He.DOWN),west:this.needsCull(e,He.WEST),east:this.needsCull(e,He.EAST),north:this.needsCull(e,He.NORTH),south:this.needsCull(e,He.SOUTH)},h=new ct;l&&h.merge(l.getMesh(i,r,this.resources,this.resources,u));const f=at.getBlockMesh(e.state,e.nbt,this.resources,u);f.isEmpty()||h.merge(f),h.isEmpty()||(this.finishChunkMesh(h,e.pos,i,r,a),(c=this.resources.getBlockFlags(e.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(h):o.mesh.merge(h))}catch(l){console.error(`Error rendering block ${i}`,l)}}getBlockProps(e){const t=this.blockPropsCache.get(e);if(t)return t;const i={...e.getProperties()},r=this.resources.getDefaultBlockProperties(e.getName())??{};return Object.entries(r).forEach(([s,a])=>{i[s]===void 0&&(i[s]=a)}),this.blockPropsCache.set(e,i),i}buildChunkFilter(e){if(!e)return null;const t=new Set;return e.forEach(i=>{t.add(this.chunkKey(i))}),t}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}chunkKey(e){return`${e[0]},${e[1]},${e[2]}`}getChunk(e){const t=Math.abs(e[0])*2+(e[0]<0?1:0),i=Math.abs(e[1])*2+(e[1]<0?1:0),r=Math.abs(e[2])*2+(e[2]<0?1:0);if(this.chunks[t]||(this.chunks[t]=[]),this.chunks[t][i]||(this.chunks[t][i]=[]),!this.chunks[t][i][r]){const s=[e[0]*this.chunkSize[0],e[1]*this.chunkSize[1],e[2]*this.chunkSize[2]];this.chunks[t][i][r]={mesh:new ct,transparentMesh:new ct,origin:s}}return this.chunks[t][i][r]}rebuildMeshCache(){const e=[],t=[];this.chunks.forEach(i=>i.forEach(r=>r.forEach(s=>{s&&(s.mesh.isEmpty()||e.push({mesh:s.mesh,origin:s.origin,transparent:!1}),s.transparentMesh.isEmpty()||t.push({mesh:s.transparentMesh,origin:s.origin,transparent:!0}))}))),this.meshCache=e.concat(t),this.meshesDirty=!1}markDirty(){this.meshesDirty=!0,this.meshCache=[]}}class Rf{constructor(e,t,i){P(this,"gl");P(this,"program");this.gl=e,this.program=this.initShaderProgram(t,i)}getProgram(){return this.program}initShaderProgram(e,t){const i=this.loadShader(this.gl.VERTEX_SHADER,e);if(!i)throw new Error("Failed to create vertex shader");const r=this.loadShader(this.gl.FRAGMENT_SHADER,t);if(!r)throw new Error("Failed to create fragment shader");const s=this.gl.createProgram();if(!s)throw new Error("Failed to create shader program");if(this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS))throw new Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(s)}`);return s}loadShader(e,t){const i=this.gl.createShader(e);if(!i)throw new Error("Failed to create shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)){const r=new Error(`Compiling ${e===this.gl.VERTEX_SHADER?"vertex":"fragment"} shader: ${this.gl.getShaderInfoLog(i)}`);throw this.gl.deleteShader(i),r}return i}}const kS=`
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
`,FS=`
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
`;class Pf{constructor(e){P(this,"gl");P(this,"shaderProgram");P(this,"projMatrix");P(this,"activeShader");P(this,"pixelSize",0);this.gl=e,this.shaderProgram=new Rf(e,kS,FS).getProgram(),this.activeShader=this.shaderProgram,this.projMatrix=this.getPerspective(),this.initialize()}setViewport(e,t,i,r){this.gl.viewport(e,t,i,r),this.projMatrix=this.getPerspective()}getPerspective(){const e=70*Math.PI/180,t=this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,i=ht();return _S(i,e,t,.1,500),i}initialize(){this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK)}setShader(e){this.gl.useProgram(e),this.activeShader=e}setVertexAttr(e,t,i){if(i===void 0)throw new Error(`Expected buffer for ${e}`);const r=this.gl.getAttribLocation(this.activeShader,e);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.vertexAttribPointer(r,t,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(r)}setUniform(e,t){const i=this.gl.getUniformLocation(this.activeShader,e);this.gl.uniformMatrix4fv(i,!1,t)}setTexture(e,t){this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.pixelSize=t??0}createAtlasTexture(e){const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture");return this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),t}prepareDraw(e){this.setUniform("mView",e),this.setUniform("mProj",this.projMatrix);const t=this.gl.getUniformLocation(this.activeShader,"pixelSize");this.gl.uniform1f(t,this.pixelSize)}drawMesh(e,t){if(e.quadVertices()>0){if(t.pos&&this.setVertexAttr("vertPos",3,e.posBuffer),t.color&&this.setVertexAttr("vertColor",3,e.colorBuffer),t.texture&&(this.setVertexAttr("texCoord",2,e.textureBuffer),this.setVertexAttr("texLimit",4,e.textureLimitBuffer)),t.normal&&this.setVertexAttr("normal",3,e.normalBuffer),t.blockPos&&this.setVertexAttr("blockPos",3,e.blockPosBuffer),!e.indexBuffer)throw new Error("Expected index buffer");this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,e.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,e.quadIndices(),e.indexType??this.gl.UNSIGNED_SHORT,0)}e.lineVertices()>0&&(t.pos&&this.setVertexAttr("vertPos",3,e.linePosBuffer),t.color&&this.setVertexAttr("vertColor",3,e.lineColorBuffer),this.gl.drawArrays(this.gl.LINES,0,e.lineVertices()))}}class Mo extends Pf{constructor(t,i,r,s={}){super(t);P(this,"item");P(this,"resources");P(this,"mesh");P(this,"atlasTexture");this.item=i,this.resources=r,this.updateMesh(s),this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas())}setItem(t,i={}){this.item=t,this.updateMesh(i)}updateMesh(t={}){this.mesh=Mo.getItemMesh(this.item,this.resources,t),this.mesh.computeNormals(),this.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0})}static getItemMesh(t,i,r){var c;const s=(c=t.getComponent("item_model",i))==null?void 0:c.getAsString();if(s===void 0)return new ct;const a=i.getItemModel(J.parse(s));if(!a)throw new Error(`Item model ${s} does not exist (defined by item ${t.toString()})`);return a.getMesh(t,i,r)}getPerspective(){const t=ht();return xS(t,0,16,0,16,.1,500),t}drawItem(){var i,r;const t=ht();Je(t,t,[0,0,-32]),this.setShader(this.shaderProgram),this.setTexture(this.atlasTexture,(r=(i=this.resources).getPixelSize)==null?void 0:r.call(i)),this.prepareDraw(t),this.drawMesh(this.mesh,{pos:!0,color:!0,texture:!0,normal:!0})}}const Ji=[0,0,0];var fo;(function(n){function e(u){var d;const h=re.readObject(u)??{},f=(d=re.readString(h.type))==null?void 0:d.replace(/^minecraft:/,"");switch(f){case"constant":return new t(Qe.fromJson(h.value)??Ji);case"dye":return new i(Qe.fromJson(h.default)??Ji);case"grass":return new r(re.readNumber(h.temperature)??0,re.readNumber(h.downfall)??0);case"firework":return new s(Qe.fromJson(h.default)??Ji);case"potion":return new a(Qe.fromJson(h.default)??Ji);case"map_color":return new o(Qe.fromJson(h.default)??Ji);case"custom_model_data":return new c(re.readInt(h.index)??0,Qe.fromJson(h.default)??Ji);case"team":return new l(Qe.fromJson(h.default)??Ji);default:throw new Error(`Invalid item tint type ${f}`)}}n.fromJson=e;class t{constructor(h){P(this,"value");this.value=h}getTint(h){return this.value}}n.Constant=t;class i{constructor(h){P(this,"default_color");this.default_color=h}getTint(h,f){const d=h.getComponent("dyed_color",f);return d?d.isCompound()?Qe.intToRgb(d.getNumber("rgb")):Qe.intToRgb(d.getAsNumber()):this.default_color}}n.Dye=i;class r{constructor(h,f){P(this,"temperature");P(this,"downfall");this.temperature=h,this.downfall=f}getTint(h){return[124/255,189/255,107/255]}}n.Grass=r;class s{constructor(h){P(this,"default_color");this.default_color=h}getTint(h,f){const d=h.getComponent("firework_explosion",f);if(!(d!=null&&d.isCompound()))return this.default_color;const g=d.get("colors");return!g||!g.isListOrArray()?this.default_color:(()=>{if(g.length===1){const v=g.get(0);return v?Qe.intToRgb(v.getAsNumber()):this.default_color}let[m,p,w]=[0,0,0];for(const v of g.getItems())m+=(v.getAsNumber()&16711680)>>16,p+=(v.getAsNumber()&65280)>>8,w+=(v.getAsNumber()&255)>>0;return m/=g.length,p/=g.length,w/=g.length,[m/255,p/255,w/255]})()}}n.Firework=s;class a{constructor(h){P(this,"default_color");this.default_color=h}getTint(h,f){const d=h.getComponent("potion_contents",f);if(!d)return this.default_color;const g=Os.fromNbt(d);return Os.getColor(g)}}n.Potion=a;class o{constructor(h){P(this,"default_color");this.default_color=h}getTint(h,f){const d=h.getComponent("map_color",f);return d?Qe.intToRgb(d.getAsNumber()):this.default_color}}n.MapColor=o;class c{constructor(h,f){P(this,"index");P(this,"default_color");this.index=h,this.default_color=f}getTint(h,f){const d=h.getComponent("custom_model_data",f);if(!(d!=null&&d.isCompound()))return this.default_color;const g=d.getList("colors").get(this.index);return g?Qe.fromNbt(g)??this.default_color:this.default_color}}n.CustomModelData=c;class l{constructor(h){P(this,"default_color");this.default_color=h}getTint(h,f,d){return d.context_entity_team_color??this.default_color}}n.Team=l})(fo||(fo={}));var ec;(function(n){function e(d){var m;const g=re.readObject(d)??{},_=(m=re.readString(g.type))==null?void 0:m.replace(/^minecraft:/,"");switch(_){case"bed":return new t(J.parse(re.readString(g.texture)??""));case"banner":return new i(re.readString(g.color)??"");case"conduit":return new r;case"chest":return new s(J.parse(re.readString(g.texture)??""),re.readNumber(g.openness)??0);case"head":return new a(re.readString(g.kind)??"",typeof g.texture=="string"?J.parse(g.texture):void 0,re.readNumber(g.animation)??0);case"player_head":return new a("player",void 0,0);case"shulker_box":return new o(J.parse(re.readString(g.texture)??""),re.readNumber(g.openness)??0,re.readString(g.orientation)??"up");case"shield":return new c;case"trident":return new l;case"decorated_pot":return new u;case"standing_sign":return new h(re.readString(g.wood_type)??"",typeof g.texture=="string"?J.parse(g.texture):void 0);case"hanging_sign":return new f(re.readString(g.wood_type)??"",typeof g.texture=="string"?J.parse(g.texture):void 0);default:return console.warn(`[lodestone]: Unknown special model ${_}`),{getMesh:()=>new ct}}}n.fromJson=e;class t{constructor(g){P(this,"renderer");this.renderer=at.bedRenderer(g)}getMesh(g,_){const m=this.renderer("head",_),p=this.renderer("foot",_),w=ht();return Je(w,w,[0,0,-16]),m.merge(p.transform(w))}}class i{constructor(g){P(this,"renderer");this.renderer=at.bannerRenderer(g)}getMesh(g,_){const m=g.getComponent("banner_patterns",void 0),p=ht();return Je(p,p,[8,24,8]),Vt(p,p,Math.PI),En(p,p,[2/3,2/3,2/3]),Je(p,p,[-8,-24,-8]),this.renderer(_,m instanceof jt?m:void 0).transform(p)}}class r{getMesh(g,_){return at.conduitRenderer(_)}}class s{constructor(g,_){P(this,"renderer");this.renderer=at.chestRenderer(g)}getMesh(g,_){const m=ht();return Je(m,m,[8,8,8]),Vt(m,m,Math.PI),Je(m,m,[-8,-8,-8]),this.renderer(_).transform(m)}}class a{constructor(g,_,m){P(this,"renderer");this.renderer=({skeleton:()=>at.headRenderer(_??J.create("skeleton/skeleton"),2),wither_skeleton:()=>at.headRenderer(_??J.create("skeleton/wither_skeleton"),2),zombie:()=>at.headRenderer(_??J.create("zombie/zombie"),1),creeper:()=>at.headRenderer(_??J.create("creeper/creeper"),2),dragon:()=>at.dragonHeadRenderer(_),piglin:()=>at.piglinHeadRenderer(_),player:()=>at.headRenderer(_??J.create("player/wide/steve"),1)}[g]??(()=>()=>new ct))()}getMesh(g,_){return this.renderer(_)}}class o{constructor(g,_,m){P(this,"renderer");this.renderer=at.shulkerBoxRenderer(g)}getMesh(g,_){return this.renderer(_)}}class c{getMesh(g,_){const m=at.shieldRenderer(_),p=ht();return Je(p,p,[-3,1,0]),Bs(p,p,-10*Math.PI/180),Vt(p,p,-10*Math.PI/180),bf(p,p,-5*Math.PI/180),m.transform(p)}}class l{getMesh(g,_){return new ct}}class u{getMesh(g,_){return at.decoratedPotRenderer(_)}}class h{constructor(g,_){P(this,"renderer");this.renderer=at.signRenderer(_??J.create(g))}getMesh(g,_){return this.renderer(_)}}class f{constructor(g,_){P(this,"renderer");this.renderer=at.hangingSignRenderer(_??J.create(g))}getMesh(g,_){return this.renderer(!1,_)}}})(ec||(ec={}));const Vh=new ct;var tc;(function(n){function e(u){var d,g;const h=re.readObject(u)??{},f=(d=re.readString(h.type))==null?void 0:d.replace(/^minecraft:/,"");switch(f){case"empty":return new t;case"model":return new i(J.parse(re.readString(h.model)??""),re.readArray(h.tints,fo.fromJson)??[]);case"composite":return new r(re.readArray(h.models,n.fromJson)??[]);case"condition":return new s(s.propertyFromJson(h),n.fromJson(h.on_true),n.fromJson(h.on_false));case"select":return new a(a.propertyFromJson(h),new Map((g=re.readArray(h.cases,_=>re.readObject(_)??{}))==null?void 0:g.flatMap(_=>{const m=n.fromJson(_.model);return Array.isArray(_.when)?_.when.map(p=>[re.readString(p)??"",m]):[[re.readString(_.when)??"",m]]})),h.fallback?n.fromJson(h.fallback):void 0);case"range_dispatch":return new o(o.propertyFromJson(h),re.readNumber(h.scale)??1,re.readArray(h.entries,_=>{const m=re.readObject(_)??{};return{threshold:re.readNumber(m.threshold)??0,model:n.fromJson(m.model)}})??[],h.fallback?n.fromJson(h.fallback):void 0);case"special":return new c(ec.fromJson(h.model),J.parse(re.readString(h.base)??""));case"bundle/selected_item":return new l;default:return console.warn(`[lodestone]: Unknown item model type '${f}'`),{getMesh:()=>new ct}}}n.fromJson=e;class t{getMesh(h,f,d){return new ct}}n.Empty=t;class i{constructor(h,f){P(this,"modelId");P(this,"tints");this.modelId=h,this.tints=f}getMesh(h,f,d){const g=f.getBlockModel(this.modelId);if(!g)return console.warn(`[lodestone]: Model '${this.modelId}' does not exist`),new ct;const _=p=>p<this.tints.length?this.tints[p].getTint(h,f,d):[1,1,1],m=g.getMesh(f,St.none(),_);return m.transform(g.getDisplayTransform(d.display_context??"gui")),m}}n.Model=i;class r{constructor(h){P(this,"models");this.models=h}getMesh(h,f,d){const g=new ct;return this.models.forEach(_=>g.merge(_.getMesh(h,f,d))),g}}n.Composite=r;class s{constructor(h,f,d){P(this,"property");P(this,"onTrue");P(this,"onFalse");this.property=h,this.onTrue=f,this.onFalse=d}getMesh(h,f,d){return(this.property(h,f,d)?this.onTrue:this.onFalse).getMesh(h,f,d)}static propertyFromJson(h){var d;const f=(d=re.readString(h.property))==null?void 0:d.replace(/^minecraft:/,"");switch(f){case"fishing_rod/cast":case"selected":case"carried":case"extended_view":return(w,v,y)=>y[f]??!1;case"view_entity":return(w,v,y)=>y.context_entity_is_view_entity??!1;case"using_item":return(w,v,y)=>(y.use_duration??-1)>=0;case"bundle/has_selected_item":return(w,v,y)=>(y["bundle/selected_item"]??-1)>=0;case"broken":return(w,v,y)=>{var T,U;const R=(T=w.getComponent("damage",v))==null?void 0:T.getAsNumber(),C=(U=w.getComponent("max_damage",v))==null?void 0:U.getAsNumber();return R!==void 0&&C!==void 0&&R>=C-1};case"damaged":return(w,v,y)=>{var T,U;const R=(T=w.getComponent("damage",v))==null?void 0:T.getAsNumber(),C=(U=w.getComponent("max_damage",v))==null?void 0:U.getAsNumber();return R!==void 0&&C!==void 0&&R>=1};case"has_component":const g=J.parse(re.readString(h.component)??""),_=re.readBoolean(h.ignore_default)??!1;return(w,v,y)=>w.hasComponent(g,_?void 0:v);case"keybind_down":const m=re.readString(h.keybind)??"";return(w,v,y)=>{var R;return((R=y.keybind_down)==null?void 0:R.includes(m))??!1};case"custom_model_data":const p=re.readInt(h.index)??0;return(w,v,y)=>{const R=w.getComponent("custom_model_data",v);if(!(R!=null&&R.isCompound()))return!1;const C=R.getList("flags").getNumber(p);return C!==void 0&&C!==0};default:return console.warn(`[lodestone]: Unknown condition property '${f}'`),()=>!1}}}n.Condition=s;class a{constructor(h,f,d){P(this,"property");P(this,"cases");P(this,"fallback");this.property=h,this.cases=f,this.fallback=d}getMesh(h,f,d){var _;const g=this.property(h,f,d);return((_=(g!==null?this.cases.get(g):void 0)??this.fallback)==null?void 0:_.getMesh(h,f,d))??Vh}static propertyFromJson(h){var d;const f=(d=re.readString(h.property))==null?void 0:d.replace(/^minecraft:/,"");switch(f){case"main_hand":return(p,w,v)=>v.main_hand??"right";case"display_context":return(p,w,v)=>v.display_context??"gui";case"context_dimension":return(p,w,v)=>{var y;return((y=v.context_dimension)==null?void 0:y.toString())??null};case"charge_type":const g=J.create("firework_rocket");return(p,w,v)=>{const y=p.getComponent("charged_projectiles",w);return!(y!=null&&y.isList())||y.length===0?"none":y.filter(R=>R.isCompound()?J.parse(R.getString("id")).equals(g):!1).length>0?"rocket":"arrow"};case"trim_material":return(p,w,v)=>{const y=p.getComponent("trim",w);return y!=null&&y.isCompound()?J.parse(y.getString("material")).toString():null};case"block_state":const _=re.readString(h.block_state_property)??"";return(p,w,v)=>{const y=p.getComponent("block_state",w);return y!=null&&y.isCompound()?y.getString(_):null};case"local_time":return(p,w,v)=>"NOT IMPLEMENTED";case"context_entity_type":return(p,w,v)=>{var y;return((y=v.context_entity_type)==null?void 0:y.toString())??null};case"custom_model_data":const m=re.readInt(h.index)??0;return(p,w,v)=>{const y=p.getComponent("custom_model_data",w);if(!(y!=null&&y.isCompound()))return null;const R=y.getList("strings");return R.length<=m?null:R.getString(m)};default:return console.warn(`[lodestone]: Unknown select property '${f}'`),()=>null}}}n.Select=a;class o{constructor(h,f,d,g){P(this,"property");P(this,"scale");P(this,"fallback");P(this,"entries");this.property=h,this.scale=f,this.fallback=g,this.entries=d.sort((_,m)=>_.threshold-m.threshold)}getMesh(h,f,d){const g=this.property(h,f,d)*this.scale;let _=this.fallback;for(const m of this.entries)if(m.threshold<=g)_=m.model;else break;return(_==null?void 0:_.getMesh(h,f,d))??Vh}static propertyFromJson(h){var d;const f=(d=re.readString(h.property))==null?void 0:d.replace(/^minecraft:/,"");switch(f){case"bundle/fullness":let g=function(v,y){const R=v.getComponent("bundle_contents",y);return R!=null&&R.isListOrArray()?R.map(T=>T.isCompound()?si.fromNbt(T):void 0).reduce((T,U)=>{var E;if(U===void 0)return T;if(U.hasComponent("bundle_contents",y))return T+g(U,y)+1/16;const b=U.getComponent("bees",y);if(b!=null&&b.isListOrArray()&&b.length>0)return T+1;const x=((E=U.getComponent("max_stack_size",y))==null?void 0:E.getAsNumber())??1;return T+U.count/x},0):0};return(v,y,R)=>g(v,y);case"damage":{const v=re.readBoolean(h.normalize)??!0;return(y,R,C)=>{var b,x;const T=((b=y.getComponent("max_damage",R))==null?void 0:b.getAsNumber())??0,U=Ci(((x=y.getComponent("damage",R))==null?void 0:x.getAsNumber())??0,0,T);return v?T>0?Ci(U/T,0,1):0:Ci(U,0,T)}}case"count":{const v=re.readBoolean(h.normalize)??!0;return(y,R,C)=>{var U;const T=((U=y.getComponent("max_stack_size",R))==null?void 0:U.getAsNumber())??1;return v?Ci(y.count/T,0,1):Ci(y.count,0,T)}}case"cooldown":return(v,y,R)=>{var b;const C=v.getComponent("use_cooldown",y),T=C!=null&&C.isCompound()?C.getString("cooldown_group"):"",U=C!=null&&C.isCompound()&&T?J.parse(T):v.id;return((b=R.cooldown_percentage)==null?void 0:b[U.toString()])??0};case"time":switch(re.readString(h.source)??"daytime"){case"moon_phase":return(v,y,R)=>(R.game_time??0)/24e3%8/8;case"random":return(v,y,R)=>Math.random();default:return(v,y,R)=>{const T=(R.game_time??0)/24e3%1-.25,U=.5-Math.cos(T*Math.PI)/2;return(T*2+U)/3}}case"compass":return(v,y,R)=>R.compass_angle??0;case"crossbow/pull":return(v,y,R)=>R["crossbow/pull"]??0;case"use_duration":const m=re.readBoolean(h.remaining)??!0;return(v,y,R)=>R.use_duration===void 0||R.use_duration<0?0:m?Math.max((R.max_use_duration??0)-R.use_duration,0):R.use_duration;case"use_cycle":const p=re.readNumber(h.period)??1;return(v,y,R)=>R.use_duration===void 0||R.use_duration<0||p<=0?0:Math.max((R.max_use_duration??0)-(R.use_duration??0),0)%p;case"custom_model_data":const w=re.readInt(h.index)??0;return(v,y,R)=>{const C=v.getComponent("custom_model_data",y);return C!=null&&C.isCompound()?C.getList("floats").getNumber(w):0};default:return console.warn(`[lodestone]: Unknown range dispatch property '${f}'`),()=>0}}}n.RangeDispatch=o;class c{constructor(h,f){P(this,"specialModel");P(this,"base");this.specialModel=h,this.base=f}getMesh(h,f,d){const g=this.specialModel.getMesh(h,f),_=f.getBlockModel(this.base);return _?(g.transform(_.getDisplayTransform(d.display_context??"gui")),g):(console.warn(`[lodestone]: Special model base '${this.base}' does not exist`),new ct)}}n.Special=c;class l{getMesh(h,f,d){const g=d["bundle/selected_item"];if(g===void 0||g<0)return new ct;const _=h.getComponent("bundle_contents",f);if(!(_!=null&&_.isListOrArray()))return new ct;const m=_.get(g);if(m===void 0||!m.isCompound())return new ct;const p=si.fromNbt(m);return Mo.getItemMesh(p,f,{...d,"bundle/selected_item":-1,selected:!1,carried:!1,use_duration:-1})}}n.BundleSelectedItem=l})(tc||(tc={}));const Cl=256,Hh=2,OS=Hh*Hh,Na=(n,e,t=1)=>{const i=new Id(n,Math.max(1,e),Math.max(1,t),Wt,Rn);return i.needsUpdate=!0,i.magFilter=xt,i.minFilter=xt,i.wrapS=Cn,i.wrapT=Cn,i.flipY=!1,i},Fe={direction:[-.5,.25,.5],color:[1,.75,.45],ambientColor:[.25,.4,.6],fillColor:[.35,.28,.5],rimColor:[1,.55,.25],intensity:1.35,ambientIntensity:.55,fillIntensity:.3,rimIntensity:.55,horizonFalloff:.7,exposure:1.15,sky:{zenithColor:[.12,.28,.56],horizonColor:[1,.55,.25],groundColor:[.25,.2,.25],sunGlowColor:[1,.45,.15],sunGlowIntensity:.6,sunGlowExponent:6,stars:{enabled:!1,density:.003,brightness:.6}},disc:{size:35,distance:180,coreColor:[1,.98,.9],glowColor:[1,.55,.15],coreIntensity:2.8,glowIntensity:3.5,softness:.25},fog:{color:[.85,.6,.4],density:2e-4,heightFalloff:.001},shadow:{enabled:!0,mapSize:2048,bias:5e-4,normalBias:.02,intensity:.5,softness:3,frustumSize:100},postProcess:{enabled:!1,ao:{enabled:!0,intensity:.5,radius:.5,samples:16},bloom:{enabled:!1,threshold:.8,intensity:.4,radius:.6},godRays:{enabled:!1,intensity:.4,decay:.95,density:.8,samples:60}},emissive:{range:16,intensity:3.5,tint:[1,.85,.6]}};function Wh(n){var t,i,r,s,a,o,c,l,u,h,f,d,g,_,m,p,w,v,y,R,C,T,U,b,x,E,N,D,O,L,H,$,G,ee,le,he,Ee,Pe,W,se,Me,pe,Ce,Te,F,me,Y,Ie,de,Se,Ae,Le,Ve,I,M,K,ie,ce,j;const e=yi((n==null?void 0:n.direction)??bn(...Fe.direction));return SS(e)<1e-5&&wS(e,0,1,0),Mf(e,e),{direction:e,color:(n==null?void 0:n.color)??Fe.color,ambientColor:(n==null?void 0:n.ambientColor)??Fe.ambientColor,fillColor:(n==null?void 0:n.fillColor)??Fe.fillColor,rimColor:(n==null?void 0:n.rimColor)??Fe.rimColor,intensity:(n==null?void 0:n.intensity)??Fe.intensity,ambientIntensity:(n==null?void 0:n.ambientIntensity)??Fe.ambientIntensity,fillIntensity:(n==null?void 0:n.fillIntensity)??Fe.fillIntensity,rimIntensity:(n==null?void 0:n.rimIntensity)??Fe.rimIntensity,horizonFalloff:(n==null?void 0:n.horizonFalloff)??Fe.horizonFalloff,exposure:(n==null?void 0:n.exposure)??Fe.exposure,sky:{zenithColor:((t=n==null?void 0:n.sky)==null?void 0:t.zenithColor)??Fe.sky.zenithColor,horizonColor:((i=n==null?void 0:n.sky)==null?void 0:i.horizonColor)??Fe.sky.horizonColor,groundColor:((r=n==null?void 0:n.sky)==null?void 0:r.groundColor)??Fe.sky.groundColor,sunGlowColor:((s=n==null?void 0:n.sky)==null?void 0:s.sunGlowColor)??Fe.sky.sunGlowColor,sunGlowIntensity:((a=n==null?void 0:n.sky)==null?void 0:a.sunGlowIntensity)??Fe.sky.sunGlowIntensity,sunGlowExponent:((o=n==null?void 0:n.sky)==null?void 0:o.sunGlowExponent)??Fe.sky.sunGlowExponent,stars:{enabled:((l=(c=n==null?void 0:n.sky)==null?void 0:c.stars)==null?void 0:l.enabled)??Fe.sky.stars.enabled,density:((h=(u=n==null?void 0:n.sky)==null?void 0:u.stars)==null?void 0:h.density)??Fe.sky.stars.density,brightness:((d=(f=n==null?void 0:n.sky)==null?void 0:f.stars)==null?void 0:d.brightness)??Fe.sky.stars.brightness}},disc:{size:((g=n==null?void 0:n.disc)==null?void 0:g.size)??Fe.disc.size,distance:((_=n==null?void 0:n.disc)==null?void 0:_.distance)??Fe.disc.distance,coreColor:((m=n==null?void 0:n.disc)==null?void 0:m.coreColor)??Fe.disc.coreColor,glowColor:((p=n==null?void 0:n.disc)==null?void 0:p.glowColor)??Fe.disc.glowColor,coreIntensity:((w=n==null?void 0:n.disc)==null?void 0:w.coreIntensity)??Fe.disc.coreIntensity,glowIntensity:((v=n==null?void 0:n.disc)==null?void 0:v.glowIntensity)??Fe.disc.glowIntensity,softness:((y=n==null?void 0:n.disc)==null?void 0:y.softness)??Fe.disc.softness},fog:{color:((R=n==null?void 0:n.fog)==null?void 0:R.color)??Fe.fog.color,density:((C=n==null?void 0:n.fog)==null?void 0:C.density)??Fe.fog.density,heightFalloff:((T=n==null?void 0:n.fog)==null?void 0:T.heightFalloff)??Fe.fog.heightFalloff},shadow:{enabled:((U=n==null?void 0:n.shadow)==null?void 0:U.enabled)??Fe.shadow.enabled,mapSize:((b=n==null?void 0:n.shadow)==null?void 0:b.mapSize)??Fe.shadow.mapSize,bias:((x=n==null?void 0:n.shadow)==null?void 0:x.bias)??Fe.shadow.bias,normalBias:((E=n==null?void 0:n.shadow)==null?void 0:E.normalBias)??Fe.shadow.normalBias,intensity:((N=n==null?void 0:n.shadow)==null?void 0:N.intensity)??Fe.shadow.intensity,softness:((D=n==null?void 0:n.shadow)==null?void 0:D.softness)??Fe.shadow.softness,frustumSize:((O=n==null?void 0:n.shadow)==null?void 0:O.frustumSize)??Fe.shadow.frustumSize},postProcess:{enabled:((L=n==null?void 0:n.postProcess)==null?void 0:L.enabled)??Fe.postProcess.enabled,ao:{enabled:(($=(H=n==null?void 0:n.postProcess)==null?void 0:H.ao)==null?void 0:$.enabled)??Fe.postProcess.ao.enabled,intensity:((ee=(G=n==null?void 0:n.postProcess)==null?void 0:G.ao)==null?void 0:ee.intensity)??Fe.postProcess.ao.intensity,radius:((he=(le=n==null?void 0:n.postProcess)==null?void 0:le.ao)==null?void 0:he.radius)??Fe.postProcess.ao.radius,samples:((Pe=(Ee=n==null?void 0:n.postProcess)==null?void 0:Ee.ao)==null?void 0:Pe.samples)??Fe.postProcess.ao.samples},bloom:{enabled:((se=(W=n==null?void 0:n.postProcess)==null?void 0:W.bloom)==null?void 0:se.enabled)??Fe.postProcess.bloom.enabled,threshold:((pe=(Me=n==null?void 0:n.postProcess)==null?void 0:Me.bloom)==null?void 0:pe.threshold)??Fe.postProcess.bloom.threshold,intensity:((Te=(Ce=n==null?void 0:n.postProcess)==null?void 0:Ce.bloom)==null?void 0:Te.intensity)??Fe.postProcess.bloom.intensity,radius:((me=(F=n==null?void 0:n.postProcess)==null?void 0:F.bloom)==null?void 0:me.radius)??Fe.postProcess.bloom.radius},godRays:{enabled:((Ie=(Y=n==null?void 0:n.postProcess)==null?void 0:Y.godRays)==null?void 0:Ie.enabled)??Fe.postProcess.godRays.enabled,intensity:((Se=(de=n==null?void 0:n.postProcess)==null?void 0:de.godRays)==null?void 0:Se.intensity)??Fe.postProcess.godRays.intensity,decay:((Le=(Ae=n==null?void 0:n.postProcess)==null?void 0:Ae.godRays)==null?void 0:Le.decay)??Fe.postProcess.godRays.decay,density:((I=(Ve=n==null?void 0:n.postProcess)==null?void 0:Ve.godRays)==null?void 0:I.density)??Fe.postProcess.godRays.density,samples:((K=(M=n==null?void 0:n.postProcess)==null?void 0:M.godRays)==null?void 0:K.samples)??Fe.postProcess.godRays.samples}},emissive:{range:((ie=n==null?void 0:n.emissive)==null?void 0:ie.range)??Fe.emissive.range,intensity:((ce=n==null?void 0:n.emissive)==null?void 0:ce.intensity)??Fe.emissive.intensity,tint:((j=n==null?void 0:n.emissive)==null?void 0:j.tint)??Fe.emissive.tint}}}function Zh(n){var f,d;const e=new Yn;if(n.quads.length===0)return e;const t=[],i=[],r=[],s=[],a=[],o=[],c=[],l=[];let u=0;for(const g of n.quads){const _=g.vertices();for(const m of _){t.push(m.pos.x,m.pos.y,m.pos.z);const p=m.normal??g.normal();i.push(p.x,p.y,p.z),r.push(((f=m.texture)==null?void 0:f[0])??0,((d=m.texture)==null?void 0:d[1])??0),m.textureLimit?a.push(m.textureLimit[0],m.textureLimit[1],m.textureLimit[2],m.textureLimit[3]):a.push(0,0,0,0);const w=m.color??[1,1,1];s.push(w[0],w[1],w[2]);const v=m.blockPos??m.pos;o.push(v.x,v.y,v.z),c.push(m.emissive??0)}l.push(u,u+1,u+2,u,u+2,u+3),u+=4}e.setAttribute("position",new Nt(t,3)),e.setAttribute("normal",new Nt(i,3)),e.setAttribute("uv",new Nt(r,2)),e.setAttribute("texLimit",new Nt(a,4)),e.setAttribute("color",new Nt(s,3)),e.setAttribute("blockPos",new Nt(o,3)),e.setAttribute("emissive",new Nt(c,1));const h=t.length/3>65536?new Uint32Array(l):new Uint16Array(l);return e.setIndex(new In(h,1)),e.computeBoundingSphere(),e}function Rl(n){const e=new Yn;if(n.lines.length===0)return e;const t=[],i=[];for(const r of n.lines)r.vertices().forEach(s=>{t.push(s.pos.x,s.pos.y,s.pos.z);const a=s.color??[1,1,1];i.push(a[0],a[1],a[2])});return e.setAttribute("position",new Nt(t,3)),e.setAttribute("color",new Nt(i,3)),e.computeBoundingSphere(),e}let BS=class{constructor(e,t,i,r){P(this,"structure");P(this,"resources");P(this,"renderer");P(this,"structureScene");P(this,"skyScene");P(this,"overlayScene");P(this,"camera");P(this,"skyCamera");P(this,"atlasTexture");P(this,"opaqueMaterial");P(this,"transparentMaterial");P(this,"coloredMaterial");P(this,"lineMaterial");P(this,"skyMaterial");P(this,"shadowDepthMaterial");P(this,"shadowMap",null);P(this,"emissiveLightDataTex",null);P(this,"emissiveLightColorTex",null);P(this,"shadowCamera");P(this,"sunlight");P(this,"skyMesh");P(this,"sunDisc");P(this,"shadowDirty",!0);P(this,"emissiveSelectionDirty",!0);P(this,"lastEmissiveCameraPos",null);P(this,"lastEmissiveLightCount",0);P(this,"sceneTarget",null);P(this,"depthTarget",null);P(this,"bloomBrightTarget",null);P(this,"bloomBlurTarget1",null);P(this,"bloomBlurTarget2",null);P(this,"godRaysTarget",null);P(this,"aoTarget",null);P(this,"postProcessQuad",null);P(this,"ssaoMaterial",null);P(this,"bloomBrightMaterial",null);P(this,"bloomBlurMaterial",null);P(this,"godRaysMaterial",null);P(this,"compositeMaterial",null);P(this,"chunkBuilder");P(this,"asyncBuild");P(this,"asyncChunkBuildTimeMs");P(this,"buildPromise",null);P(this,"buildToken",0);P(this,"chunkMeshes",[]);P(this,"grid");P(this,"invisibleBlocks");P(this,"outline");P(this,"chunkSize");P(this,"targetCenter");P(this,"cameraPosition");P(this,"cameraTarget");P(this,"cameraUp");P(this,"cameraViewMatrix");P(this,"useInvisibleBlocks");P(this,"drawDistance");P(this,"pixelSize");P(this,"maxEmissiveTextureSize");P(this,"debug");var o,c;this.structure=t,this.resources=i,this.renderer=new Qv({canvas:e,alpha:!1,antialias:(r==null?void 0:r.antialias)??!0,preserveDrawingBuffer:(r==null?void 0:r.preserveDrawingBuffer)??!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.maxEmissiveTextureSize=this.renderer.capabilities.maxTextureSize??8192,this.structureScene=new ol,this.skyScene=new ol,this.overlayScene=new ol,this.camera=new ln(70,(e.clientWidth||1)/(e.clientHeight||1),.1,2e3),this.skyCamera=new Ja(-1,1,1,-1,0,1),this.shadowCamera=new Ja(-50,50,50,-50,.1,200);const s=this.renderer.getContext(),a=(r==null?void 0:r.chunkSize)??16;if(this.chunkSize=typeof a=="number"?[a,a,a]:a,this.targetCenter=bn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.cameraPosition=ho(),this.cameraTarget=yi(this.targetCenter),this.cameraUp=bn(0,1,0),this.cameraViewMatrix=ht(),this.resetCamera(),this.asyncBuild=(r==null?void 0:r.asyncBuild)??!1,this.asyncChunkBuildTimeMs=(r==null?void 0:r.asyncChunkBuildTimeMs)??8,this.chunkBuilder=new Zr(s,t,i,a,!this.asyncBuild),this.useInvisibleBlocks=(r==null?void 0:r.useInvisibleBlockBuffer)??!1,this.drawDistance=r==null?void 0:r.drawDistance,this.sunlight=Wh(r==null?void 0:r.sunlight),this.debug=(r==null?void 0:r.debug)??!1,this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas()),this.pixelSize=((c=(o=this.resources).getPixelSize)==null?void 0:c.call(o))??0,this.emissiveLightDataTex=Na(new Float32Array([0,0,0,0]),1),this.emissiveLightColorTex=Na(new Float32Array([0,0,0,0]),1),this.shadowDepthMaterial=this.createShadowDepthMaterial(),this.initShadowMap(),this.opaqueMaterial=this.createStructureMaterial(!1),this.transparentMaterial=this.createStructureMaterial(!0),this.coloredMaterial=this.createColoredMaterial(),this.lineMaterial=new Dd({vertexColors:!0,transparent:!0,depthTest:!0}),this.skyMaterial=this.createSkyMaterial(),this.debug){const l=this.resources.getTextureAtlas(),h=Array.from(l.data.slice(3,3+400*4)).filter((f,d)=>d%4===0).filter(f=>f!==0).length;console.log("[lodestone] atlas info",{width:l.width,height:l.height,alphaSampleNonZero:h})}this.asyncBuild?this.rebuildChunksAsync():this.rebuildChunkObjects(),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc),this.skyMesh=this.createSkyMesh(),this.skyMesh&&this.skyScene.add(this.skyMesh),this.initPostProcessing(e.width||800,e.height||600)}setViewport(e,t,i,r,s=1){this.renderer.setPixelRatio(s),this.renderer.setSize(i,r,!1),this.renderer.setScissorTest(!1),this.renderer.setViewport(e,t,i,r),this.camera.aspect=i/Math.max(r,1),this.camera.updateProjectionMatrix();const a=this.renderer.getDrawingBufferSize(new Oe);this.resizePostProcessTargets(Math.max(1,Math.floor(a.x)),Math.max(1,Math.floor(a.y)))}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}setCamera(e){return e.position&&La(this.cameraPosition,e.position),e.target&&La(this.cameraTarget,e.target),e.up&&La(this.cameraUp,e.up),e.fov!==void 0&&this.setFOV(e.fov),this.updateStoredViewMatrix(),this}getCamera(){return{position:yi(this.cameraPosition),target:yi(this.cameraTarget),up:yi(this.cameraUp),fov:this.camera.fov}}getViewMatrix(){return hS(this.cameraViewMatrix)}lookAt(e,t,i){return this.setCamera({position:e,target:t,up:i})}setCameraPosition(e){return this.setCamera({position:e})}setCameraTarget(e){return this.setCamera({target:e})}resetCamera(){const e=this.structure.getSize(),t=Math.max(8,Math.max(e[0],e[1],e[2])*1.8);return this.setCamera({position:bn(this.targetCenter[0],this.targetCenter[1]+t*.35,this.targetCenter[2]+t),target:this.targetCenter,up:bn(0,1,0)})}setStructure(e){this.structure=e,this.targetCenter=bn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.setCameraTarget(this.targetCenter),this.asyncBuild?(this.chunkBuilder.setStructure(e,{rebuild:!1}),this.rebuildOverlay(),this.rebuildChunksAsync()):(this.chunkBuilder.setStructure(e),this.rebuildChunkObjects(),this.rebuildOverlay()),this.shadowDirty=!0}updateStructureBuffers(e){if(this.asyncBuild){this.updateStructureBuffersAsync(e);return}this.chunkBuilder.updateStructureBuffers(e),this.rebuildChunkObjects(),this.rebuildOverlay(),this.shadowDirty=!0}async updateStructureBuffersAsync(e){this.rebuildOverlay(),await this.rebuildChunksAsync(e)}whenReady(){return this.buildPromise??Promise.resolve()}drawStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.updateSkyUniforms(e),this.renderShadowPass(),!this.renderPostProcessing(e)&&(this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.structureScene.overrideMaterial=null,this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera))}drawColoredStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.renderer.clear(),this.structureScene.overrideMaterial=this.coloredMaterial,this.renderer.render(this.structureScene,this.camera),this.structureScene.overrideMaterial=null}drawGrid(e=this.cameraViewMatrix){this.grid&&(this.prepareCamera(e),this.positionSunDisc(e),this.setOverlayVisibility({grid:!0,invisible:!1,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawInvisibleBlocks(e=this.cameraViewMatrix){!this.useInvisibleBlocks||!this.invisibleBlocks||(this.prepareCamera(e),this.setOverlayVisibility({grid:!1,invisible:!0,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawOutline(e,t){const i=t?e:this.cameraViewMatrix,r=t??e;this.outline||(this.outline=this.createOutline(),this.overlayScene.add(this.outline)),this.outline.position.set(r[0],r[1],r[2]),this.prepareCamera(i),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!0}),this.renderer.render(this.overlayScene,this.camera)}dispose(){var e,t,i,r,s,a,o,c,l,u,h,f,d,g,_,m;this.buildToken+=1,this.chunkBuilder.cancelPendingBuilds(),this.chunkMeshes.forEach(p=>{this.structureScene.remove(p),p.geometry.dispose()}),this.chunkMeshes=[],this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose(),this.grid=void 0),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose(),this.invisibleBlocks=void 0),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.skyMesh&&(this.structureScene.remove(this.skyMesh),this.skyMesh.geometry.dispose(),this.skyMesh=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),(e=this.sunDisc.material)==null||e.dispose(),this.sunDisc=void 0),this.postProcessQuad&&(this.postProcessQuad.geometry.dispose(),this.postProcessQuad=null),this.structureScene.clear(),this.overlayScene.clear(),this.atlasTexture.dispose(),this.opaqueMaterial.dispose(),this.transparentMaterial.dispose(),this.coloredMaterial.dispose(),this.lineMaterial.dispose(),this.skyMaterial.dispose(),this.shadowDepthMaterial.dispose(),(t=this.shadowMap)==null||t.dispose(),(i=this.sceneTarget)==null||i.dispose(),(r=this.depthTarget)==null||r.dispose(),(s=this.bloomBrightTarget)==null||s.dispose(),(a=this.bloomBlurTarget1)==null||a.dispose(),(o=this.bloomBlurTarget2)==null||o.dispose(),(c=this.godRaysTarget)==null||c.dispose(),(l=this.aoTarget)==null||l.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(h=this.bloomBrightMaterial)==null||h.dispose(),(f=this.bloomBlurMaterial)==null||f.dispose(),(d=this.godRaysMaterial)==null||d.dispose(),(g=this.compositeMaterial)==null||g.dispose(),(_=this.emissiveLightDataTex)==null||_.dispose(),(m=this.emissiveLightColorTex)==null||m.dispose(),this.renderer.dispose()}prepareCamera(e){const t=new ut().fromArray(e),i=new ut().copy(t).invert();this.camera.position.setFromMatrixPosition(i),this.camera.quaternion.setFromRotationMatrix(i),this.camera.updateMatrixWorld(!0);const r=this.getCameraPosition(e)??bn(0,0,10);La(this.cameraPosition,r),this.camera.updateMatrixWorld(!0),this.drawDistance?this.applyDrawDistance(r,this.drawDistance):this.chunkMeshes.forEach(s=>s.visible=!0),this.updateEmissiveLightsForCamera(r)}rebuildChunkObjects(){this.chunkMeshes.forEach(i=>{this.structureScene.remove(i),i.geometry.dispose()}),this.chunkMeshes=[],this.chunkBuilder.getMeshEntries().forEach((i,r)=>{var c,l;if(i.mesh.isEmpty())return;const s=Zh(i.mesh),a=i.transparent?this.transparentMaterial:this.opaqueMaterial,o=new Qt(s,a);o.renderOrder=i.transparent?1:0,o.userData.origin=i.origin,this.structureScene.add(o),this.chunkMeshes.push(o),this.debug&&r===0&&console.log("[lodestone] chunk geometry sample",{vertices:((c=s.getAttribute("position"))==null?void 0:c.count)??0,indices:((l=s.getIndex())==null?void 0:l.count)??0,transparent:i.transparent})});const t=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(t),this.emissiveSelectionDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks",{count:this.chunkMeshes.length})}async rebuildChunksAsync(e){const t=++this.buildToken,i=(async()=>{await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:e,timeSliceMs:this.asyncChunkBuildTimeMs}),t===this.buildToken&&await this.rebuildChunkObjectsAsync(t)})();return this.buildPromise=i,i}async rebuildChunkObjectsAsync(e){var s,a;this.chunkMeshes.forEach(o=>{this.structureScene.remove(o),o.geometry.dispose()}),this.chunkMeshes=[];const t=this.chunkBuilder.getMeshEntries();let i=this.now();for(let o=0;o<t.length;o++){if(e!==this.buildToken)return;const c=t[o];if(c.mesh.isEmpty())continue;const l=Zh(c.mesh),u=c.transparent?this.transparentMaterial:this.opaqueMaterial,h=new Qt(l,u);h.renderOrder=c.transparent?1:0,h.userData.origin=c.origin,this.structureScene.add(h),this.chunkMeshes.push(h),this.debug&&o===0&&console.log("[lodestone] chunk geometry sample",{vertices:((s=l.getAttribute("position"))==null?void 0:s.count)??0,indices:((a=l.getIndex())==null?void 0:a.count)??0,transparent:c.transparent}),!(o&31)&&this.now()-i>=this.asyncChunkBuildTimeMs&&(await this.yieldControl(),i=this.now())}if(e!==this.buildToken)return;const r=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(r),this.emissiveSelectionDirty=!0,this.shadowDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks (async)",{count:this.chunkMeshes.length})}updateEmissiveLightUniforms(e){var h,f;const t=Math.min(e.length,Cl),i=this.maxEmissiveTextureSize||8192,r=Math.min(i,Math.max(1,Math.ceil(Math.sqrt(Math.max(1,t))))),s=Math.min(i,Math.max(1,Math.ceil(t/r))),a=r*s,o=Math.min(t,a),c=new Float32Array(r*s*4),l=new Float32Array(r*s*4);for(let d=0;d<o;d++){const g=e[d];c[d*4+0]=g.position[0],c[d*4+1]=g.position[1],c[d*4+2]=g.position[2],c[d*4+3]=g.intensity,l[d*4+0]=g.color[0],l[d*4+1]=g.color[1],l[d*4+2]=g.color[2],l[d*4+3]=1}(h=this.emissiveLightDataTex)==null||h.dispose(),(f=this.emissiveLightColorTex)==null||f.dispose(),this.emissiveLightDataTex=Na(c,r,s),this.emissiveLightColorTex=Na(l,r,s);const u=d=>{const g=d.uniforms;g&&(g.emissiveLightData&&(g.emissiveLightData.value=this.emissiveLightDataTex),g.emissiveLightColors&&(g.emissiveLightColors.value=this.emissiveLightColorTex),g.emissiveLightCount&&(g.emissiveLightCount.value=o),g.emissiveLightTexSize&&g.emissiveLightTexSize.value instanceof Oe&&g.emissiveLightTexSize.value.set(r,s))};u(this.opaqueMaterial),u(this.transparentMaterial),this.debug&&o>0&&console.log("[lodestone] emissive lights",{count:o})}updateEmissiveLightsForCamera(e){const t=this.chunkBuilder.getEmissiveLights();if(t.length===0){(this.emissiveSelectionDirty||this.lastEmissiveLightCount!==0)&&(this.updateEmissiveLightUniforms([]),this.lastEmissiveLightCount=0,this.emissiveSelectionDirty=!1),this.lastEmissiveCameraPos=yi(e);return}const i=!this.lastEmissiveCameraPos||this.cameraMovedEnough(e,this.lastEmissiveCameraPos);if(!this.emissiveSelectionDirty&&!i)return;const r=this.drawDistance?Math.pow(this.drawDistance+this.sunlight.emissive.range,2):void 0,s=this.pickNearestEmissiveLights(t,e,Cl,r);this.updateEmissiveLightUniforms(s),this.lastEmissiveLightCount=s.length,this.emissiveSelectionDirty=!1,this.lastEmissiveCameraPos=yi(e)}cameraMovedEnough(e,t){const i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return i*i+r*r+s*s>=OS}pickNearestEmissiveLights(e,t,i,r){if(e.length<=i&&r===void 0)return e;const s=[];let a=-1,o=-1;for(const c of e){const l=c.position[0]-t[0],u=c.position[1]-t[1],h=c.position[2]-t[2],f=l*l+u*u+h*h;if(!(r!==void 0&&f>r)){if(s.length<i){s.push({light:c,distSq:f}),f>o&&(o=f,a=s.length-1);continue}if(!(f>=o)){s[a]={light:c,distSq:f},o=s[0].distSq,a=0;for(let d=1;d<s.length;d++)s[d].distSq>o&&(o=s[d].distSq,a=d)}}}return s.sort((c,l)=>c.distSq-l.distSq),s.map(c=>c.light)}rebuildOverlay(){this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose()),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose()),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),this.sunDisc.material.dispose()),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc)}createStructureMaterial(e){return new ul({name:e?"lodestone-structure-transparent":"lodestone-structure-opaque",vertexShader:`
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
				#define MAX_EMISSIVE_LIGHTS ${Cl}
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
			`,uniforms:this.createStructureUniforms(),transparent:e,depthWrite:!e,depthTest:!0,alphaTest:.01,side:gn})}createStructureUniforms(){var i;const e=r=>new tt(r[0],r[1],r[2]),t=new z(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]);return t.lengthSq()===0&&t.set(0,1,0),t.normalize(),{atlas:{value:this.atlasTexture},pixelSize:{value:this.pixelSize},sunDirection:{value:t},sunColor:{value:e(this.sunlight.color)},ambientColor:{value:e(this.sunlight.ambientColor)},fillColor:{value:e(this.sunlight.fillColor)},rimColor:{value:e(this.sunlight.rimColor)},sunIntensity:{value:this.sunlight.intensity},ambientIntensity:{value:this.sunlight.ambientIntensity},fillIntensity:{value:this.sunlight.fillIntensity},rimIntensity:{value:this.sunlight.rimIntensity},horizonFalloff:{value:this.sunlight.horizonFalloff},exposure:{value:this.sunlight.exposure},fogColor:{value:e(this.sunlight.fog.color)},fogDensity:{value:this.sunlight.fog.density},fogHeightFalloff:{value:this.sunlight.fog.heightFalloff},shadowMap:{value:((i=this.shadowMap)==null?void 0:i.texture)??null},shadowMatrix:{value:new ut},shadowBias:{value:this.sunlight.shadow.bias},shadowNormalBias:{value:this.sunlight.shadow.normalBias},shadowIntensity:{value:this.sunlight.shadow.intensity},shadowSoftness:{value:this.sunlight.shadow.softness},shadowMapSize:{value:new Oe(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize)},shadowEnabled:{value:this.sunlight.shadow.enabled},emissiveLightData:{value:this.emissiveLightDataTex},emissiveLightColors:{value:this.emissiveLightColorTex},emissiveLightCount:{value:0},emissiveLightTexSize:{value:new Oe(1,1)},emissiveRange:{value:this.sunlight.emissive.range},emissiveGlobalIntensity:{value:this.sunlight.emissive.intensity},emissiveTint:{value:e(this.sunlight.emissive.tint)}}}setSunlight(e){this.sunlight=Wh(e),this.syncShadowResources(),this.syncPostProcessingResources(),this.applySunlightUniforms(this.opaqueMaterial),this.applySunlightUniforms(this.transparentMaterial),this.applySkyUniforms(),this.applySunDiscUniforms(),this.applyPostProcessUniforms(),this.shadowDirty=!0,this.emissiveSelectionDirty=!0}syncShadowResources(){var e,t;if(this.sunlight.shadow.enabled){const i=this.sunlight.shadow.mapSize;(!this.shadowMap||this.shadowMap.width!==i||this.shadowMap.height!==i)&&((e=this.shadowMap)==null||e.dispose(),this.shadowMap=null,this.initShadowMap(),this.shadowDirty=!0);return}(t=this.shadowMap)==null||t.dispose(),this.shadowMap=null,this.shadowDirty=!0}syncPostProcessingResources(){var t,i,r,s,a,o,c,l,u,h,f,d,g;if(!this.sunlight.postProcess.enabled||this.sceneTarget&&this.postProcessQuad&&this.ssaoMaterial&&this.bloomBrightMaterial&&this.bloomBlurMaterial&&this.godRaysMaterial&&this.compositeMaterial)return;(t=this.sceneTarget)==null||t.dispose(),(i=this.depthTarget)==null||i.dispose(),(r=this.bloomBrightTarget)==null||r.dispose(),(s=this.bloomBlurTarget1)==null||s.dispose(),(a=this.bloomBlurTarget2)==null||a.dispose(),(o=this.godRaysTarget)==null||o.dispose(),(c=this.aoTarget)==null||c.dispose(),(l=this.postProcessQuad)==null||l.geometry.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(h=this.bloomBrightMaterial)==null||h.dispose(),(f=this.bloomBlurMaterial)==null||f.dispose(),(d=this.godRaysMaterial)==null||d.dispose(),(g=this.compositeMaterial)==null||g.dispose(),this.sceneTarget=null,this.depthTarget=null,this.bloomBrightTarget=null,this.bloomBlurTarget1=null,this.bloomBlurTarget2=null,this.godRaysTarget=null,this.aoTarget=null,this.postProcessQuad=null,this.ssaoMaterial=null,this.bloomBrightMaterial=null,this.bloomBlurMaterial=null,this.godRaysMaterial=null,this.compositeMaterial=null;const e=this.renderer.getSize(new Oe);this.initPostProcessing(Math.max(1,e.x),Math.max(1,e.y))}applyPostProcessUniforms(){var a,o,c,l;const e=this.sunlight.postProcess,t=(a=this.ssaoMaterial)==null?void 0:a.uniforms;t!=null&&t.aoRadius&&(t.aoRadius.value=e.ao.radius),t!=null&&t.aoIntensity&&(t.aoIntensity.value=e.ao.intensity);const i=(o=this.bloomBrightMaterial)==null?void 0:o.uniforms;i!=null&&i.threshold&&(i.threshold.value=e.bloom.threshold);const r=(c=this.compositeMaterial)==null?void 0:c.uniforms;r!=null&&r.bloomIntensity&&(r.bloomIntensity.value=e.bloom.intensity);const s=(l=this.godRaysMaterial)==null?void 0:l.uniforms;s!=null&&s.intensity&&(s.intensity.value=e.godRays.intensity),s!=null&&s.decay&&(s.decay.value=e.godRays.decay),s!=null&&s.density&&(s.density.value=e.godRays.density),s!=null&&s.numSamples&&(s.numSamples.value=e.godRays.samples)}applySunDiscUniforms(){if(!this.sunDisc)return;const t=this.sunDisc.material.uniforms;t&&(t.coreColor.value.setRGB(this.sunlight.disc.coreColor[0],this.sunlight.disc.coreColor[1],this.sunlight.disc.coreColor[2]),t.glowColor.value.setRGB(this.sunlight.disc.glowColor[0],this.sunlight.disc.glowColor[1],this.sunlight.disc.glowColor[2]),t.coreIntensity.value=this.sunlight.disc.coreIntensity,t.glowIntensity.value=this.sunlight.disc.glowIntensity,t.softness.value=this.sunlight.disc.softness)}applySkyUniforms(){var r;const e=this.skyMaterial.uniforms;if(!e)return;const t=(s,a)=>{const o=e[s];(o==null?void 0:o.value)instanceof tt&&o.value.setRGB(a[0],a[1],a[2])},i=(r=e.sunDirection)==null?void 0:r.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),t("zenithColor",this.sunlight.sky.zenithColor),t("horizonColor",this.sunlight.sky.horizonColor),t("groundColor",this.sunlight.sky.groundColor),t("sunGlowColor",this.sunlight.sky.sunGlowColor),e.sunGlowIntensity&&(e.sunGlowIntensity.value=this.sunlight.sky.sunGlowIntensity),e.sunGlowExponent&&(e.sunGlowExponent.value=this.sunlight.sky.sunGlowExponent),e.starsEnabled&&(e.starsEnabled.value=this.sunlight.sky.stars.enabled),e.starsDensity&&(e.starsDensity.value=this.sunlight.sky.stars.density),e.starsBrightness&&(e.starsBrightness.value=this.sunlight.sky.stars.brightness)}applySunlightUniforms(e){var s,a,o;const t=e.uniforms;if(!t)return;const i=(c,l)=>{const u=t[c];(u==null?void 0:u.value)instanceof tt&&u.value.setRGB(l[0],l[1],l[2])},r=(s=t.sunDirection)==null?void 0:s.value;r&&r.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i("sunColor",this.sunlight.color),i("ambientColor",this.sunlight.ambientColor),i("fillColor",this.sunlight.fillColor),i("rimColor",this.sunlight.rimColor),i("fogColor",this.sunlight.fog.color),t.sunIntensity&&(t.sunIntensity.value=this.sunlight.intensity),t.ambientIntensity&&(t.ambientIntensity.value=this.sunlight.ambientIntensity),t.fillIntensity&&(t.fillIntensity.value=this.sunlight.fillIntensity),t.rimIntensity&&(t.rimIntensity.value=this.sunlight.rimIntensity),t.horizonFalloff&&(t.horizonFalloff.value=this.sunlight.horizonFalloff),t.exposure&&(t.exposure.value=this.sunlight.exposure),t.fogDensity&&(t.fogDensity.value=this.sunlight.fog.density),t.fogHeightFalloff&&(t.fogHeightFalloff.value=this.sunlight.fog.heightFalloff),t.shadowEnabled&&(t.shadowEnabled.value=this.sunlight.shadow.enabled),t.shadowBias&&(t.shadowBias.value=this.sunlight.shadow.bias),t.shadowNormalBias&&(t.shadowNormalBias.value=this.sunlight.shadow.normalBias),t.shadowIntensity&&(t.shadowIntensity.value=this.sunlight.shadow.intensity),t.shadowSoftness&&(t.shadowSoftness.value=this.sunlight.shadow.softness),((a=t.shadowMapSize)==null?void 0:a.value)instanceof Oe&&t.shadowMapSize.value.set(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize),t.shadowMap&&(t.shadowMap.value=((o=this.shadowMap)==null?void 0:o.texture)??null),t.emissiveRange&&(t.emissiveRange.value=this.sunlight.emissive.range),t.emissiveGlobalIntensity&&(t.emissiveGlobalIntensity.value=this.sunlight.emissive.intensity),i("emissiveTint",this.sunlight.emissive.tint)}createColoredMaterial(){return new ul({name:"lodestone-structure-colored",vertexShader:`
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
			`,transparent:!1,depthWrite:!0,depthTest:!0,side:gn})}createGrid(){const[e,t,i]=this.structure.getSize(),r=new ct;r.addLine(0,0,0,e,0,0,[1,0,0]),r.addLine(0,0,0,0,0,i,[0,0,1]);const s=[.8,.8,.8];r.addLine(0,0,0,0,t,0,s),r.addLine(e,0,0,e,t,0,s),r.addLine(0,0,i,0,t,i,s),r.addLine(e,0,i,e,t,i,s),r.addLine(0,t,0,0,t,i,s),r.addLine(e,t,0,e,t,i,s),r.addLine(0,t,0,e,t,0,s),r.addLine(0,t,i,e,t,i,s);const a=128,o=Math.max(1,Math.ceil(e/a)),c=Math.max(1,Math.ceil(i/a));for(let u=o;u<=e;u+=o)r.addLine(u,0,0,u,0,i,s);for(let u=c;u<=i;u+=c)r.addLine(0,0,u,e,0,u,s);const l=Rl(r);return l.attributes.position?new cl(l,this.lineMaterial):void 0}createOutline(){const e=new ct;e.addLineCube(0,0,0,1,1,1,[1,1,1]);const t=Rl(e);return new cl(t,this.lineMaterial)}createInvisibleBlocks(){const e=new ct;if(!this.useInvisibleBlocks)return;const t=this.structure.getSize(),i=t[0]*t[1]*t[2];if(i>2e5){this.debug&&console.warn("[lodestone] Skipping invisible blocks buffer for large structure",{volume:i});return}for(let s=0;s<t[0];s+=1)for(let a=0;a<t[1];a+=1)for(let o=0;o<t[2];o+=1){const c=this.structure.getBlock([s,a,o]);c!==void 0&&(c===null?e.addLineCube(s+.4375,a+.4375,o+.4375,s+.5625,a+.5625,o+.5625,[1,.25,.25]):c.state.is(Pi.AIR)?e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,.5,1]):c.state.is(new Pi("cave_air"))&&e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,1,.5]))}const r=Rl(e);return r.attributes.position?new cl(r,this.lineMaterial):void 0}setOverlayVisibility(e){this.grid&&(this.grid.visible=e.grid),this.invisibleBlocks&&(this.invisibleBlocks.visible=e.invisible),this.outline&&(this.outline.visible=e.outline),this.sunDisc&&(this.sunDisc.visible=e.sunDisc??!1)}createAtlasTexture(e){const t=new Id(e.data,e.width,e.height,Wt);return t.magFilter=xt,t.minFilter=xt,t.wrapS=Cn,t.wrapT=Cn,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}getCameraPosition(e){const t=ht();return pS(t,e)?bn(t[12],t[13],t[14]):null}updateStoredViewMatrix(){yS(this.cameraViewMatrix,this.cameraPosition,this.cameraTarget,this.cameraUp)}applyDrawDistance(e,t){const i=t*t;let r=!1;for(const s of this.chunkMeshes){const a=s.userData.origin;if(!a){s.visible||(s.visible=!0,r=!0);continue}const o=[a[0]+this.chunkSize[0]*.5,a[1]+this.chunkSize[1]*.5,a[2]+this.chunkSize[2]*.5],c=o[0]-e[0],l=o[1]-e[1],u=o[2]-e[2],h=c*c+l*l+u*u<=i;s.visible!==h&&(s.visible=h,r=!0)}r&&(this.shadowDirty=!0)}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}positionSunDisc(e){if(!this.sunDisc)return;const t=this.getCameraPosition(e)??bn(0,0,10),i=yi(this.sunlight.direction);Mf(i,i);const r=this.sunlight.disc.distance,s=ho();bS(s,t,i,r),this.sunDisc.position.set(s[0],s[1],s[2]),this.sunDisc.scale.setScalar(this.sunlight.disc.size),this.sunDisc.lookAt(t[0],t[1],t[2])}createSunDisc(){const e=new lr(1,1,1,1),t=new Ht({name:"lodestone-sun-disc",transparent:!0,depthWrite:!1,depthTest:!0,side:zn,uniforms:{coreColor:{value:new tt(...this.sunlight.disc.coreColor)},glowColor:{value:new tt(...this.sunlight.disc.glowColor)},coreIntensity:{value:this.sunlight.disc.coreIntensity},glowIntensity:{value:this.sunlight.disc.glowIntensity},softness:{value:this.sunlight.disc.softness}},vertexShader:`
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
			`}),i=new Qt(e,t);return i.renderOrder=10,i}createSkyMaterial(){return new Ht({name:"lodestone-sky",transparent:!1,depthWrite:!1,depthTest:!1,side:gn,uniforms:{sunDirection:{value:new z(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize()},zenithColor:{value:new tt(...this.sunlight.sky.zenithColor)},horizonColor:{value:new tt(...this.sunlight.sky.horizonColor)},groundColor:{value:new tt(...this.sunlight.sky.groundColor)},sunGlowColor:{value:new tt(...this.sunlight.sky.sunGlowColor)},sunGlowIntensity:{value:this.sunlight.sky.sunGlowIntensity},sunGlowExponent:{value:this.sunlight.sky.sunGlowExponent},invViewMatrix:{value:new ut},invProjectionMatrix:{value:new ut},starsEnabled:{value:this.sunlight.sky.stars.enabled},starsDensity:{value:this.sunlight.sky.stars.density},starsBrightness:{value:this.sunlight.sky.stars.brightness}},vertexShader:`
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
			`})}createSkyMesh(){const e=new lr(2,2,1,1),t=new Qt(e,this.skyMaterial);return t.frustumCulled=!1,t.renderOrder=-1e3,t}updateSkyUniforms(e){var a,o,c;const t=this.skyMaterial.uniforms,i=(a=t.sunDirection)==null?void 0:a.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize();const r=(o=t.invViewMatrix)==null?void 0:o.value,s=(c=t.invProjectionMatrix)==null?void 0:c.value;if(r){const l=new ut;l.fromArray(e),r.copy(l).invert()}s&&s.copy(this.camera.projectionMatrix).invert()}createShadowDepthMaterial(){return new ul({name:"lodestone-shadow-depth",vertexShader:`
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
			`,side:gn,depthTest:!0,depthWrite:!0})}initShadowMap(){if(!this.sunlight.shadow.enabled)return;const e=this.sunlight.shadow.mapSize;this.shadowMap=new Pn(e,e,{minFilter:xt,magFilter:xt,format:Wt,type:Rn})}updateShadowCamera(){const e=this.sunlight.shadow.frustumSize,t=e/2,i=new z(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),r=new z(this.targetCenter[0],this.targetCenter[1],this.targetCenter[2]),s=r.clone().add(i.clone().multiplyScalar(e));this.shadowCamera.left=-t,this.shadowCamera.right=t,this.shadowCamera.top=t,this.shadowCamera.bottom=-t,this.shadowCamera.near=.1,this.shadowCamera.far=e*2,this.shadowCamera.position.copy(s),this.shadowCamera.lookAt(r),this.shadowCamera.updateMatrixWorld(!0),this.shadowCamera.updateProjectionMatrix()}renderShadowPass(){if(!this.sunlight.shadow.enabled||!this.shadowMap||!this.shadowDirty)return;this.updateShadowCamera();const e=new ut;e.multiplyMatrices(this.shadowCamera.projectionMatrix,this.shadowCamera.matrixWorldInverse);const t=r=>{var a;const s=r.uniforms;s.shadowMatrix&&s.shadowMatrix.value.copy(e),s.shadowMap&&(s.shadowMap.value=((a=this.shadowMap)==null?void 0:a.texture)??null)};t(this.opaqueMaterial),t(this.transparentMaterial);const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.shadowMap),this.renderer.setClearColor(16777215,1),this.renderer.clear(),this.structureScene.overrideMaterial=this.shadowDepthMaterial,this.renderer.render(this.structureScene,this.shadowCamera),this.structureScene.overrideMaterial=null,this.renderer.setRenderTarget(i),this.renderer.setClearColor(0,1),this.shadowDirty=!1}initPostProcessing(e,t){if(!this.sunlight.postProcess.enabled)return;const i=(s,a,o=!1)=>new Pn(s,a,{minFilter:Kt,magFilter:Kt,format:Wt,type:es,depthBuffer:o});this.sceneTarget=new Pn(e,t,{minFilter:Kt,magFilter:Kt,format:Wt,type:es,depthBuffer:!0}),this.sceneTarget.depthTexture=new Qa(e,t),this.sceneTarget.depthTexture.format=Di,this.sceneTarget.depthTexture.type=Vi,this.depthTarget=new Pn(e,t,{minFilter:xt,magFilter:xt,format:Wt,type:Rn,depthBuffer:!0}),this.aoTarget=i(e,t),this.bloomBrightTarget=i(e/2,t/2),this.bloomBlurTarget1=i(e/2,t/2),this.bloomBlurTarget2=i(e/2,t/2),this.godRaysTarget=i(e/2,t/2);const r=new lr(2,2);this.postProcessQuad=new Qt(r),this.postProcessQuad.frustumCulled=!1,this.ssaoMaterial=this.createSSAOMaterial(),this.bloomBrightMaterial=this.createBloomBrightMaterial(),this.bloomBlurMaterial=this.createBloomBlurMaterial(),this.godRaysMaterial=this.createGodRaysMaterial(),this.compositeMaterial=this.createCompositeMaterial()}resizePostProcessTargets(e,t){var i,r,s,a,o,c,l,u;this.sunlight.postProcess.enabled&&(e<=0||t<=0||((i=this.sceneTarget)==null||i.setSize(e,t),this.sceneTarget&&((r=this.sceneTarget.depthTexture)==null||r.dispose(),this.sceneTarget.depthTexture=new Qa(e,t),this.sceneTarget.depthTexture.format=Di,this.sceneTarget.depthTexture.type=Vi),(s=this.depthTarget)==null||s.setSize(e,t),(a=this.aoTarget)==null||a.setSize(e,t),(o=this.bloomBrightTarget)==null||o.setSize(Math.max(1,e/2),Math.max(1,t/2)),(c=this.bloomBlurTarget1)==null||c.setSize(Math.max(1,e/2),Math.max(1,t/2)),(l=this.bloomBlurTarget2)==null||l.setSize(Math.max(1,e/2),Math.max(1,t/2)),(u=this.godRaysTarget)==null||u.setSize(Math.max(1,e/2),Math.max(1,t/2))))}createSSAOMaterial(){return new Ht({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Oe},cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},aoRadius:{value:this.sunlight.postProcess.ao.radius},aoIntensity:{value:this.sunlight.postProcess.ao.intensity}},vertexShader:`
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
			`})}createBloomBrightMaterial(){return new Ht({uniforms:{tDiffuse:{value:null},threshold:{value:this.sunlight.postProcess.bloom.threshold}},vertexShader:`
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
			`})}createBloomBlurMaterial(){return new Ht({uniforms:{tDiffuse:{value:null},direction:{value:new Oe(1,0)},resolution:{value:new Oe}},vertexShader:`
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
			`})}createGodRaysMaterial(){return new Ht({uniforms:{tDiffuse:{value:null},tScene:{value:null},sunPosition:{value:new Oe(.5,.5)},intensity:{value:this.sunlight.postProcess.godRays.intensity},decay:{value:this.sunlight.postProcess.godRays.decay},density:{value:this.sunlight.postProcess.godRays.density},numSamples:{value:this.sunlight.postProcess.godRays.samples}},vertexShader:`
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
			`})}createCompositeMaterial(){return new Ht({uniforms:{tScene:{value:null},tBloom:{value:null},bloomIntensity:{value:this.sunlight.postProcess.bloom.intensity}},vertexShader:`
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
			`})}getSunScreenPosition(e){const t=new z(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i=this.getCameraPosition(e)??bn(0,0,10),r=new z(i[0],i[1],i[2]).add(t.multiplyScalar(100));return r.project(this.camera),new Oe((r.x+1)*.5,(r.y+1)*.5)}renderPostProcessing(e){var o;if(!this.sunlight.postProcess.enabled||!this.sceneTarget||!this.postProcessQuad)return!1;const t=this.sunlight.postProcess;if(!(t.ao.enabled||t.bloom.enabled||t.godRays.enabled))return!1;const r=this.sceneTarget.width,s=this.sceneTarget.height;this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera);let a=this.sceneTarget.texture;if(t.ao.enabled&&this.ssaoMaterial&&this.aoTarget&&(this.ssaoMaterial.uniforms.tDiffuse.value=a,this.ssaoMaterial.uniforms.tDepth.value=this.sceneTarget.depthTexture,this.ssaoMaterial.uniforms.resolution.value.set(r,s),this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.postProcessQuad.material=this.ssaoMaterial,this.renderer.setRenderTarget(this.aoTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.aoTarget.texture),t.bloom.enabled&&this.bloomBrightMaterial&&this.bloomBrightTarget&&this.bloomBlurTarget1&&this.bloomBlurTarget2&&this.bloomBlurMaterial&&(this.bloomBrightMaterial.uniforms.tDiffuse.value=a,this.postProcessQuad.material=this.bloomBrightMaterial,this.renderer.setRenderTarget(this.bloomBrightTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.bloomBlurMaterial.uniforms.direction.value.set(1,0),this.bloomBlurMaterial.uniforms.resolution.value.set(r/2,s/2),this.postProcessQuad.material=this.bloomBlurMaterial,this.renderer.setRenderTarget(this.bloomBlurTarget1),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBlurTarget1.texture,this.bloomBlurMaterial.uniforms.direction.value.set(0,1),this.renderer.setRenderTarget(this.bloomBlurTarget2),this.renderer.render(this.postProcessQuad,this.skyCamera)),t.godRays.enabled&&this.godRaysMaterial&&this.godRaysTarget&&this.bloomBrightTarget){const c=this.getSunScreenPosition(e);this.godRaysMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.godRaysMaterial.uniforms.tScene.value=a,this.godRaysMaterial.uniforms.sunPosition.value.copy(c),this.postProcessQuad.material=this.godRaysMaterial,this.renderer.setRenderTarget(this.godRaysTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.godRaysTarget.texture}return this.compositeMaterial&&(this.compositeMaterial.uniforms.tScene.value=a,this.compositeMaterial.uniforms.tBloom.value=((o=this.bloomBlurTarget2)==null?void 0:o.texture)??null,this.postProcessQuad.material=this.compositeMaterial,this.renderer.setRenderTarget(null),this.renderer.render(this.postProcessQuad,this.skyCamera)),!0}};const zS=Object.freeze(Object.defineProperty({__proto__:null,BlockColors:mn,BlockDefinition:bo,BlockModel:ft,get BlockPos(){return Rt},BlockState:Pi,ChunkBuilder:Zr,get ChunkPos(){return jl},ChunkSection:Kl,get Color(){return Qe},get Cull(){return St},get Direction(){return He},EFFECT_COLORS:yf,get Holder(){return co},Identifier:J,get ItemModel(){return tc},ItemRenderer:Mo,ItemStack:si,get ItemTint(){return fo},get Json(){return re},Line:zs,Mesh:ct,get MobEffectInstance(){return lo},NbtAbstractList:Qs,NbtByte:ki,NbtByteArray:Fi,get NbtChunk(){return li},NbtCompound:Ct,NbtDouble:zi,NbtEnd:ao,NbtFile:oi,NbtFloat:cr,NbtInt:_n,NbtIntArray:Oi,NbtList:jt,NbtLong:rs,NbtLongArray:Bi,get NbtRegion(){return Hi},NbtShort:ur,NbtString:Xn,NbtTag:lt,get NbtType(){return ve},POTION_EFFECTS:Sf,PalettedContainer:oo,get PotionContents(){return Os},Quad:Bn,RawDataInput:Nd,RawDataOutput:kd,Registry:uo,Renderer:Pf,get Rotation(){return $r},ShaderProgram:Rf,get SpecialRenderers(){return at},StringReader:Yt,Structure:cS,TextureAtlas:An,ThreeStructureRenderer:BS,Vector:Ye,Vertex:Ln,clamp:Ci,createResourcesFromPack:Cf,getBundledDefaultPackUrls:Af,getDefaultPackUrls:_c,isPowerOfTwo:Jl,loadDefaultPackResources:NS,upperPowerOfTwo:gc},Symbol.toStringTag,{value:"Module"})),Lf="dmFyIHJ0PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgaXQ9KHksbSxYKT0+bSBpbiB5P3J0KHksbSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6WH0pOnlbbV09WDt2YXIgY2U9KHksbSxYKT0+aXQoeSx0eXBlb2YgbSE9InN5bWJvbCI/bSsiIjptLFgpOyhmdW5jdGlvbigpeyJ1c2Ugc3RyaWN0Ijt2YXIgeT1VaW50OEFycmF5LG09VWludDE2QXJyYXksWD1JbnQzMkFycmF5LGhlPW5ldyB5KFswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDAsMCwwLDBdKSxnZT1uZXcgeShbMCwwLDAsMCwxLDEsMiwyLDMsMyw0LDQsNSw1LDYsNiw3LDcsOCw4LDksOSwxMCwxMCwxMSwxMSwxMiwxMiwxMywxMywwLDBdKSxNZT1uZXcgeShbMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV0pLHZlPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPW5ldyBtKDMxKSxpPTA7aTwzMTsrK2kpbltpXT10Kz0xPDxlW2ktMV07Zm9yKHZhciByPW5ldyBYKG5bMzBdKSxpPTE7aTwzMDsrK2kpZm9yKHZhciBvPW5baV07bzxuW2krMV07KytvKXJbb109by1uW2ldPDw1fGk7cmV0dXJue2I6bixyfX0sd2U9dmUoaGUsMikseWU9d2UuYixfZT13ZS5yO3llWzI4XT0yNTgsX2VbMjU4XT0yODtmb3IodmFyIExlPXZlKGdlLDApLE5lPUxlLmIsaj1uZXcgbSgzMjc2OCksaD0wO2g8MzI3Njg7KytoKXt2YXIgQz0oaCY0MzY5MCk+PjF8KGgmMjE4NDUpPDwxO0M9KEMmNTI0MjgpPj4yfChDJjEzMTA3KTw8MixDPShDJjYxNjgwKT4+NHwoQyYzODU1KTw8NCxqW2hdPSgoQyY2NTI4MCk+Pjh8KEMmMjU1KTw8OCk+PjF9Zm9yKHZhciAkPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIGk9ZS5sZW5ndGgscj0wLG89bmV3IG0odCk7cjxpOysrcillW3JdJiYrK29bZVtyXS0xXTt2YXIgbD1uZXcgbSh0KTtmb3Iocj0xO3I8dDsrK3IpbFtyXT1sW3ItMV0rb1tyLTFdPDwxO3ZhciBhO2lmKG4pe2E9bmV3IG0oMTw8dCk7dmFyIGc9MTUtdDtmb3Iocj0wO3I8aTsrK3IpaWYoZVtyXSlmb3IodmFyIHY9cjw8NHxlW3JdLGM9dC1lW3JdLHM9bFtlW3JdLTFdKys8PGMsZj1zfCgxPDxjKS0xO3M8PWY7KytzKWFbaltzXT4+Z109dn1lbHNlIGZvcihhPW5ldyBtKGkpLHI9MDtyPGk7KytyKWVbcl0mJihhW3JdPWpbbFtlW3JdLTFdKytdPj4xNS1lW3JdKTtyZXR1cm4gYX0sSz1uZXcgeSgyODgpLGg9MDtoPDE0NDsrK2gpS1toXT04O2Zvcih2YXIgaD0xNDQ7aDwyNTY7KytoKUtbaF09OTtmb3IodmFyIGg9MjU2O2g8MjgwOysraClLW2hdPTc7Zm9yKHZhciBoPTI4MDtoPDI4ODsrK2gpS1toXT04O2Zvcih2YXIgcGU9bmV3IHkoMzIpLGg9MDtoPDMyOysraClwZVtoXT01O3ZhciBDZT0kKEssOSwxKSxHZT0kKHBlLDUsMSksZWU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWVbMF0sbj0xO248ZS5sZW5ndGg7KytuKWVbbl0+dCYmKHQ9ZVtuXSk7cmV0dXJuIHR9LEU9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXQvOHwwO3JldHVybihlW2ldfGVbaSsxXTw8OCk+Pih0JjcpJm59LHRlPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC84fDA7cmV0dXJuKGVbbl18ZVtuKzFdPDw4fGVbbisyXTw8MTYpPj4odCY3KX0seGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrNykvOHwwfSxTZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuKG49PW51bGx8fG4+ZS5sZW5ndGgpJiYobj1lLmxlbmd0aCksbmV3IHkoZS5zdWJhcnJheSh0LG4pKX0sVWU9WyJ1bmV4cGVjdGVkIEVPRiIsImludmFsaWQgYmxvY2sgdHlwZSIsImludmFsaWQgbGVuZ3RoL2xpdGVyYWwiLCJpbnZhbGlkIGRpc3RhbmNlIiwic3RyZWFtIGZpbmlzaGVkIiwibm8gc3RyZWFtIGhhbmRsZXIiLCwibm8gY2FsbGJhY2siLCJpbnZhbGlkIFVURi04IGRhdGEiLCJleHRyYSBmaWVsZCB0b28gbG9uZyIsImRhdGUgbm90IGluIHJhbmdlIDE5ODAtMjA5OSIsImZpbGVuYW1lIHRvbyBsb25nIiwic3RyZWFtIGZpbmlzaGluZyIsImludmFsaWQgemlwIGRhdGEiXSxBPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uZXcgRXJyb3IodHx8VWVbZV0pO2lmKGkuY29kZT1lLEVycm9yLmNhcHR1cmVTdGFja1RyYWNlJiZFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShpLEEpLCFuKXRocm93IGk7cmV0dXJuIGl9LG5lPWZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByPWUubGVuZ3RoLG89MDtpZighcnx8dC5mJiYhdC5sKXJldHVybiBufHxuZXcgeSgwKTt2YXIgbD0hbixhPWx8fHQuaSE9MixnPXQuaTtsJiYobj1uZXcgeShyKjMpKTt2YXIgdj1mdW5jdGlvbihCZSl7dmFyIEllPW4ubGVuZ3RoO2lmKEJlPkllKXt2YXIgRWU9bmV3IHkoTWF0aC5tYXgoSWUqMixCZSkpO0VlLnNldChuKSxuPUVlfX0sYz10LmZ8fDAscz10LnB8fDAsZj10LmJ8fDAsdz10Lmwsaz10LmQsdT10Lm0sZD10Lm4sQj1yKjg7ZG97aWYoIXcpe2M9RShlLHMsMSk7dmFyIEY9RShlLHMrMSwzKTtpZihzKz0zLEYpaWYoRj09MSl3PUNlLGs9R2UsdT05LGQ9NTtlbHNlIGlmKEY9PTIpe3ZhciBEPUUoZSxzLDMxKSsyNTcsRz1FKGUscysxMCwxNSkrNCxQPUQrRShlLHMrNSwzMSkrMTtzKz0xNDtmb3IodmFyIEw9bmV3IHkoUCksSD1uZXcgeSgxOSkscD0wO3A8RzsrK3ApSFtNZVtwXV09RShlLHMrcCozLDcpO3MrPUcqMztmb3IodmFyIFE9ZWUoSCksWj0oMTw8USktMSxvZT0kKEgsUSwxKSxwPTA7cDxQOyl7dmFyIHo9b2VbRShlLHMsWildO3MrPXomMTU7dmFyIGI9ej4+NDtpZihiPDE2KUxbcCsrXT1iO2Vsc2V7dmFyIHg9MCxOPTA7Zm9yKGI9PTE2PyhOPTMrRShlLHMsMykscys9Mix4PUxbcC0xXSk6Yj09MTc/KE49MytFKGUscyw3KSxzKz0zKTpiPT0xOCYmKE49MTErRShlLHMsMTI3KSxzKz03KTtOLS07KUxbcCsrXT14fX12YXIgTT1MLnN1YmFycmF5KDAsRCksVD1MLnN1YmFycmF5KEQpO3U9ZWUoTSksZD1lZShUKSx3PSQoTSx1LDEpLGs9JChULGQsMSl9ZWxzZSBBKDEpO2Vsc2V7dmFyIGI9eGUocykrNCxZPWVbYi00XXxlW2ItM108PDgsST1iK1k7aWYoST5yKXtnJiZBKDApO2JyZWFrfWEmJnYoZitZKSxuLnNldChlLnN1YmFycmF5KGIsSSksZiksdC5iPWYrPVksdC5wPXM9SSo4LHQuZj1jO2NvbnRpbnVlfWlmKHM+Qil7ZyYmQSgwKTticmVha319YSYmdihmKzEzMTA3Mik7Zm9yKHZhciBTPSgxPDx1KS0xLFY9KDE8PGQpLTEscT1zOztxPXMpe3ZhciB4PXdbdGUoZSxzKSZTXSxfPXg+PjQ7aWYocys9eCYxNSxzPkIpe2cmJkEoMCk7YnJlYWt9aWYoeHx8QSgyKSxfPDI1NiluW2YrK109XztlbHNlIGlmKF89PTI1Nil7cT1zLHc9bnVsbDticmVha31lbHNle3ZhciBXPV8tMjU0O2lmKF8+MjY0KXt2YXIgcD1fLTI1NyxKPWhlW3BdO1c9RShlLHMsKDE8PEopLTEpK3llW3BdLHMrPUp9dmFyIGZlPWtbdGUoZSxzKSZWXSxsZT1mZT4+NDtmZXx8QSgzKSxzKz1mZSYxNTt2YXIgVD1OZVtsZV07aWYobGU+Myl7dmFyIEo9Z2VbbGVdO1QrPXRlKGUscykmKDE8PEopLTEscys9Sn1pZihzPkIpe2cmJkEoMCk7YnJlYWt9YSYmdihmKzEzMTA3Mik7dmFyIG1lPWYrVztpZihmPFQpe3ZhciBBZT1vLVQsbnQ9TWF0aC5taW4oVCxtZSk7Zm9yKEFlK2Y8MCYmQSgzKTtmPG50OysrZiluW2ZdPWlbQWUrZl19Zm9yKDtmPG1lOysrZiluW2ZdPW5bZi1UXX19dC5sPXcsdC5wPXEsdC5iPWYsdC5mPWMsdyYmKGM9MSx0Lm09dSx0LmQ9ayx0Lm49ZCl9d2hpbGUoIWMpO3JldHVybiBmIT1uLmxlbmd0aCYmbD9TZShuLDAsZik6bi5zdWJhcnJheSgwLGYpfSxSZT1uZXcgeSgwKSxPZT1mdW5jdGlvbihlKXsoZVswXSE9MzF8fGVbMV0hPTEzOXx8ZVsyXSE9OCkmJkEoNiwiaW52YWxpZCBnemlwIGRhdGEiKTt2YXIgdD1lWzNdLG49MTA7dCY0JiYobis9KGVbMTBdfGVbMTFdPDw4KSsyKTtmb3IodmFyIGk9KHQ+PjMmMSkrKHQ+PjQmMSk7aT4wO2ktPSFlW24rK10pO3JldHVybiBuKyh0JjIpfSxGZT1mdW5jdGlvbihlKXt2YXIgdD1lLmxlbmd0aDtyZXR1cm4oZVt0LTRdfGVbdC0zXTw8OHxlW3QtMl08PDE2fGVbdC0xXTw8MjQpPj4+MH0sWWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oKGVbMF0mMTUpIT04fHxlWzBdPj40Pjd8fChlWzBdPDw4fGVbMV0pJTMxKSYmQSg2LCJpbnZhbGlkIHpsaWIgZGF0YSIpLChlWzFdPj41JjEpPT0xJiZBKDYsImludmFsaWQgemxpYiBkYXRhOiAiKyhlWzFdJjMyPyJuZWVkIjoidW5leHBlY3RlZCIpKyIgZGljdGlvbmFyeSIpLChlWzFdPj4zJjQpKzJ9O2Z1bmN0aW9uIERlKGUsdCl7cmV0dXJuIG5lKGUse2k6Mn0sdCx0KX1mdW5jdGlvbiB1ZShlLHQpe3ZhciBuPU9lKGUpO3JldHVybiBuKzg+ZS5sZW5ndGgmJkEoNiwiaW52YWxpZCBnemlwIGRhdGEiKSxuZShlLnN1YmFycmF5KG4sLTgpLHtpOjJ9LG5ldyB5KEZlKGUpKSx0KX1mdW5jdGlvbiBQZShlLHQpe3JldHVybiBuZShlLnN1YmFycmF5KFllKGUpLC00KSx7aToyfSx0LHQpfWZ1bmN0aW9uIHplKGUsdCl7cmV0dXJuIGVbMF09PTMxJiZlWzFdPT0xMzkmJmVbMl09PTg/dWUoZSx0KTooZVswXSYxNSkhPTh8fGVbMF0+PjQ+N3x8KGVbMF08PDh8ZVsxXSklMzE/RGUoZSx0KTpQZShlLHQpfXZhciBYZT10eXBlb2YgVGV4dERlY29kZXI8InUiJiZuZXcgVGV4dERlY29kZXIsWmU9MDt0cnl7WGUuZGVjb2RlKFJlLHtzdHJlYW06ITB9KSxaZT0xfWNhdGNoe31jb25zdCBVPTAscmU9MSxpZT0yLHNlPTMsJGU9NCxLZT01LEhlPTYsVmU9NyxhZT04LGJlPTksUj0xMCxxZT0xMSxkZT0xMjtjbGFzcyBKZXtjb25zdHJ1Y3Rvcih0KXtjZSh0aGlzLCJ2aWV3Iik7Y2UodGhpcywib2Zmc2V0IiwwKTt0aGlzLmJ1ZmZlcj10LHRoaXMudmlldz1uZXcgRGF0YVZpZXcodC5idWZmZXIsdC5ieXRlT2Zmc2V0LHQuYnl0ZUxlbmd0aCl9cmVhZEJ5dGUoKXtjb25zdCB0PXRoaXMudmlldy5nZXRJbnQ4KHRoaXMub2Zmc2V0KTtyZXR1cm4gdGhpcy5vZmZzZXQrPTEsdH1yZWFkVW5zaWduZWRCeXRlKCl7Y29uc3QgdD10aGlzLnZpZXcuZ2V0VWludDgodGhpcy5vZmZzZXQpO3JldHVybiB0aGlzLm9mZnNldCs9MSx0fXJlYWRTaG9ydCgpe2NvbnN0IHQ9dGhpcy52aWV3LmdldEludDE2KHRoaXMub2Zmc2V0LCExKTtyZXR1cm4gdGhpcy5vZmZzZXQrPTIsdH1yZWFkSW50KCl7Y29uc3QgdD10aGlzLnZpZXcuZ2V0SW50MzIodGhpcy5vZmZzZXQsITEpO3JldHVybiB0aGlzLm9mZnNldCs9NCx0fXJlYWRMb25nQmlnSW50KCl7Y29uc3QgdD1CaWdJbnQodGhpcy52aWV3LmdldFVpbnQzMih0aGlzLm9mZnNldCwhMSkpLG49QmlnSW50KHRoaXMudmlldy5nZXRVaW50MzIodGhpcy5vZmZzZXQrNCwhMSkpO3JldHVybiB0aGlzLm9mZnNldCs9OCx0PDwzMm58bn1yZWFkRmxvYXQoKXtjb25zdCB0PXRoaXMudmlldy5nZXRGbG9hdDMyKHRoaXMub2Zmc2V0LCExKTtyZXR1cm4gdGhpcy5vZmZzZXQrPTQsdH1yZWFkRG91YmxlKCl7Y29uc3QgdD10aGlzLnZpZXcuZ2V0RmxvYXQ2NCh0aGlzLm9mZnNldCwhMSk7cmV0dXJuIHRoaXMub2Zmc2V0Kz04LHR9cmVhZFN0cmluZygpe2NvbnN0IHQ9dGhpcy52aWV3LmdldFVpbnQxNih0aGlzLm9mZnNldCwhMSk7aWYodGhpcy5vZmZzZXQrPTIsdD09PTApcmV0dXJuIiI7Y29uc3Qgbj10aGlzLmJ1ZmZlci5zdWJhcnJheSh0aGlzLm9mZnNldCx0aGlzLm9mZnNldCt0KTtyZXR1cm4gdGhpcy5vZmZzZXQrPXQsbmV3IFRleHREZWNvZGVyKCJ1dGYtOCIpLmRlY29kZShuKX1za2lwKHQpe3RoaXMub2Zmc2V0Kz10fXNraXBUYWcodCl7c3dpdGNoKHQpe2Nhc2UgcmU6dGhpcy5vZmZzZXQrPTE7YnJlYWs7Y2FzZSBpZTp0aGlzLm9mZnNldCs9MjticmVhaztjYXNlIHNlOnRoaXMub2Zmc2V0Kz00O2JyZWFrO2Nhc2UgJGU6dGhpcy5vZmZzZXQrPTg7YnJlYWs7Y2FzZSBLZTp0aGlzLm9mZnNldCs9NDticmVhaztjYXNlIEhlOnRoaXMub2Zmc2V0Kz04O2JyZWFrO2Nhc2UgVmU6e2NvbnN0IG49dGhpcy5yZWFkSW50KCk7dGhpcy5vZmZzZXQrPU1hdGgubWF4KDAsbik7YnJlYWt9Y2FzZSBhZTp7Y29uc3Qgbj10aGlzLnZpZXcuZ2V0VWludDE2KHRoaXMub2Zmc2V0LCExKTt0aGlzLm9mZnNldCs9MituO2JyZWFrfWNhc2UgYmU6e2NvbnN0IG49dGhpcy5yZWFkQnl0ZSgpLGk9dGhpcy5yZWFkSW50KCk7aWYoaT4wKWZvcihsZXQgcj0wO3I8aTtyKyspdGhpcy5za2lwVGFnKG4pO2JyZWFrfWNhc2UgUjp7Zm9yKDt0aGlzLm9mZnNldDx0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoOyl7Y29uc3Qgbj10aGlzLnJlYWRCeXRlKCk7aWYobj09PVUpYnJlYWs7Y29uc3QgaT10aGlzLnZpZXcuZ2V0VWludDE2KHRoaXMub2Zmc2V0LCExKTt0aGlzLm9mZnNldCs9MitpLHRoaXMuc2tpcFRhZyhuKX1icmVha31jYXNlIHFlOntjb25zdCBuPXRoaXMucmVhZEludCgpO3RoaXMub2Zmc2V0Kz1NYXRoLm1heCgwLG4pKjQ7YnJlYWt9Y2FzZSBkZTp7Y29uc3Qgbj10aGlzLnJlYWRJbnQoKTt0aGlzLm9mZnNldCs9TWF0aC5tYXgoMCxuKSo4O2JyZWFrfWRlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIE5CVCBUYWcgVHlwZTogJHt0fSBhdCBvZmZzZXQgJHt0aGlzLm9mZnNldH1gKX19fWxldCBPPW5ldyBNYXA7ZnVuY3Rpb24gUWUoZSl7bGV0IHQ9bmV3IFVpbnQ4QXJyYXkoZSk7aWYodFswXT09PTMxJiZ0WzFdPT09MTM5KXRyeXt0PXVlKHQpfWNhdGNoe3Q9emUodCl9Ty5jbGVhcigpO2NvbnN0IG49bmV3IEplKHQpO2lmKG4ucmVhZEJ5dGUoKSE9PVIpdGhyb3cgbmV3IEVycm9yKCJJbnZhbGlkIE5CVCByb290IHRhZyIpO2ZvcihuLnJlYWRTdHJpbmcoKTtuLm9mZnNldDx0LmJ5dGVMZW5ndGg7KXtjb25zdCByPW4ucmVhZEJ5dGUoKTtpZihyPT09VSlicmVhaztpZihuLnJlYWRTdHJpbmcoKT09PSJSZWdpb25zIiYmcj09PVIpZm9yKDtuLm9mZnNldDx0LmJ5dGVMZW5ndGgmJm4ucmVhZEJ5dGUoKSE9PVU7KXtjb25zdCBhPW4ucmVhZFN0cmluZygpLGc9V2UobixhKTtPLnNldChhLGcpfWVsc2Ugbi5za2lwVGFnKHIpfXJldHVybiBBcnJheS5mcm9tKE8ua2V5cygpKX1mdW5jdGlvbiBXZShlLHQpe2xldCBuPVswLDAsMF0saT1bMCwwLDBdLHI9W10sbz1udWxsLGw9MDtmb3IoO2Uub2Zmc2V0PGUuYnVmZmVyLmJ5dGVMZW5ndGg7KXtjb25zdCBhPWUucmVhZEJ5dGUoKTtpZihhPT09VSlicmVhaztjb25zdCBnPWUucmVhZFN0cmluZygpO2lmKGc9PT0iU2l6ZSImJmE9PT1SKW49VGUoZSk7ZWxzZSBpZihnPT09IlBvc2l0aW9uIiYmYT09PVIpaT1UZShlKTtlbHNlIGlmKGc9PT0iQmxvY2tTdGF0ZVBhbGV0dGUiJiZhPT09YmUpcj1qZShlKTtlbHNlIGlmKGc9PT0iQmxvY2tTdGF0ZXMiJiZhPT09ZGUpe2w9ZS5yZWFkSW50KCksbz1uZXcgQmlnVWludDY0QXJyYXkobCk7Zm9yKGxldCB2PTA7djxsO3YrKylvW3ZdPWUucmVhZExvbmdCaWdJbnQoKX1lbHNlIGUuc2tpcFRhZyhhKX1yZXR1cm57bmFtZTp0LHNpemU6W01hdGguYWJzKG5bMF0pLE1hdGguYWJzKG5bMV0pLE1hdGguYWJzKG5bMl0pXSxwb3NpdGlvbjppLHBhbGV0dGU6cixsb25nQXJyYXk6byxudW1Mb25nczpsfX1mdW5jdGlvbiBUZShlKXtsZXQgdD0wLG49MCxpPTA7Zm9yKDtlLm9mZnNldDxlLmJ1ZmZlci5ieXRlTGVuZ3RoOyl7Y29uc3Qgcj1lLnJlYWRCeXRlKCk7aWYocj09PVUpYnJlYWs7Y29uc3Qgbz1lLnJlYWRTdHJpbmcoKTtsZXQgbD0wO3I9PT1zZT9sPWUucmVhZEludCgpOnI9PT1pZT9sPWUucmVhZFNob3J0KCk6cj09PXJlP2w9ZS5yZWFkQnl0ZSgpOmUuc2tpcFRhZyhyKSxvPT09IngifHxvPT09IlgiP3Q9bDpvPT09InkifHxvPT09IlkiP249bDoobz09PSJ6Inx8bz09PSJaIikmJihpPWwpfXJldHVyblt0LG4saV19ZnVuY3Rpb24gamUoZSl7Y29uc3QgdD1lLnJlYWRCeXRlKCksbj1lLnJlYWRJbnQoKSxpPVtdO2lmKHQhPT1SKXtmb3IobGV0IHI9MDtyPG47cisrKWUuc2tpcFRhZyh0KTtyZXR1cm4gaX1mb3IobGV0IHI9MDtyPG47cisrKXtsZXQgbz0ibWluZWNyYWZ0OmFpciI7Y29uc3QgbD17fTtmb3IoO2Uub2Zmc2V0PGUuYnVmZmVyLmJ5dGVMZW5ndGg7KXtjb25zdCBhPWUucmVhZEJ5dGUoKTtpZihhPT09VSlicmVhaztjb25zdCBnPWUucmVhZFN0cmluZygpO2lmKGc9PT0iTmFtZSImJmE9PT1hZSlvPWUucmVhZFN0cmluZygpO2Vsc2UgaWYoZz09PSJQcm9wZXJ0aWVzIiYmYT09PVIpZm9yKDtlLm9mZnNldDxlLmJ1ZmZlci5ieXRlTGVuZ3RoOyl7Y29uc3Qgdj1lLnJlYWRCeXRlKCk7aWYodj09PVUpYnJlYWs7Y29uc3QgYz1lLnJlYWRTdHJpbmcoKTt2PT09YWU/bFtjXT1lLnJlYWRTdHJpbmcoKTp2PT09c2U/bFtjXT1TdHJpbmcoZS5yZWFkSW50KCkpOnY9PT1yZT9sW2NdPVN0cmluZyhlLnJlYWRCeXRlKCkpOnY9PT1pZT9sW2NdPVN0cmluZyhlLnJlYWRTaG9ydCgpKTplLnNraXBUYWcodil9ZWxzZSBlLnNraXBUYWcoYSl9aS5wdXNoKHtuYW1lOm8scHJvcGVydGllczpsfSl9cmV0dXJuIGl9ZnVuY3Rpb24ga2UoZSx0LG4saSxyKXtlLmNodW5rR3JpZHN8fChlLmNodW5rR3JpZHM9bmV3IE1hcCk7Y29uc3Qgbz1gJHt0fSwke259LCR7aX1gO2lmKGUuY2h1bmtHcmlkcy5oYXMobykpcmV0dXJuIGUuY2h1bmtHcmlkcy5nZXQobyk7Y29uc3QgbD1yKnIqcixhPW5ldyBVaW50MTZBcnJheShsKTthLmZpbGwoNjU1MzUpO2NvbnN0IGc9ZS5zaXplWzBdLHY9ZS5zaXplWzFdLGM9ZS5zaXplWzJdLHM9Zyp2KmMsZj1lLnBhbGV0dGUsdz1NYXRoLm1heCgyLE1hdGguY2VpbChNYXRoLmxvZzIoTWF0aC5tYXgoMixmLmxlbmd0aCkpKSksaz0oMW48PEJpZ0ludCh3KSktMW4sdT1lLmxvbmdBcnJheSxkPWUubnVtTG9uZ3MsQj1NYXRoLmZsb29yKDY0L3cpLEY9TWF0aC5jZWlsKHMvQiksYj1kPT09Rnx8ZD5zLyg2NC93KSsuMSYmZCE9PU1hdGguY2VpbChzKncvNjQpLFk9Zi5tYXAocD0+cC5uYW1lPT09Im1pbmVjcmFmdDphaXIiKSxJPXQqcixEPU1hdGgubWluKEkrcixnKSxHPW4qcixQPU1hdGgubWluKEcrcix2KSxMPWkqcixIPU1hdGgubWluKEwrcixjKTtpZih1JiZkPjApZm9yKGxldCBwPUc7cDxQO3ArKyl7Y29uc3QgUT1wLUc7Zm9yKGxldCBaPUw7WjxIO1orKyl7Y29uc3Qgb2U9Wi1MO2ZvcihsZXQgej1JO3o8RDt6Kyspe2NvbnN0IHg9ei1JLE49cCooZypjKStaKmcrejtsZXQgTT0wO2lmKGIpe2NvbnN0IFQ9TWF0aC5mbG9vcihOL0IpO2lmKFQ8ZCl7Y29uc3QgUz1CaWdJbnQoTiVCKncpO009TnVtYmVyKHVbVF0+PlMmayl9fWVsc2V7Y29uc3QgVD1CaWdJbnQoTip3KSxTPU51bWJlcihUPj42biksVj1UJjYzbixxPUJpZ0ludCgoTisxKSp3LTEpLF89TnVtYmVyKHE+PjZuKTtpZihTPGQpe2lmKFM9PT1fKU09TnVtYmVyKHVbU10+PlYmayk7ZWxzZSBpZihfPGQpe2NvbnN0IFc9NjRuLVY7TT1OdW1iZXIoKHVbU10+PlZ8dVtfXTw8Vykmayl9fX1pZihNPj0wJiZNPGYubGVuZ3RoJiYhWVtNXSl7Y29uc3QgVD14KihyKnIpK1EqcitvZTthW1RdPU19fX19cmV0dXJuIGUuY2h1bmtHcmlkcy5zZXQobyxhKSxhfWZ1bmN0aW9uIGV0KGUsdCxuLGkscil7Y29uc3Qgbz1PLmdldChlKTtpZighbyl0aHJvdyBuZXcgRXJyb3IoYFJlZ2lvbiAke2V9IG5vdCBmb3VuZGApO2NvbnN0IGw9a2Uobyx0LG4saSxyKSxhPW8uc2l6ZVswXSxnPW8uc2l6ZVsxXSx2PW8uc2l6ZVsyXSxjPXQqcixzPU1hdGgubWluKGMrcixhKSxmPW4qcix3PU1hdGgubWluKGYrcixnKSxrPWkqcix1PU1hdGgubWluKGsrcix2KSxkPVtdO2ZvcihsZXQgQj1jO0I8cztCKyspe2NvbnN0IEY9Qi1jO2ZvcihsZXQgYj1mO2I8dztiKyspe2NvbnN0IFk9Yi1mO2ZvcihsZXQgST1rO0k8dTtJKyspe2NvbnN0IEQ9SS1rLEc9RioocipyKStZKnIrRCxQPWxbR107UCE9PTY1NTM1JiZkLnB1c2goQixiLEksUCl9fX1yZXR1cm4gbmV3IFVpbnQzMkFycmF5KGQpfWZ1bmN0aW9uIHR0KGUsdCl7Y29uc3Qgbj1PLmdldChlKTtpZighbil0aHJvdyBuZXcgRXJyb3IoYFJlZ2lvbiAke2V9IG5vdCBmb3VuZGApO2NvbnN0IGk9bi5zaXplWzBdLHI9bi5zaXplWzFdLG89bi5zaXplWzJdLGw9TWF0aC5jZWlsKGkvdCksYT1NYXRoLmNlaWwoci90KSxnPU1hdGguY2VpbChvL3QpLHY9W107Zm9yKGxldCBjPTA7YzxsO2MrKylmb3IobGV0IHM9MDtzPGE7cysrKWZvcihsZXQgZj0wO2Y8ZztmKyspe2NvbnN0IHc9a2UobixjLHMsZix0KTtsZXQgaz0hMTtmb3IobGV0IHU9MDt1PHcubGVuZ3RoO3UrKylpZih3W3VdIT09NjU1MzUpe2s9ITA7YnJlYWt9ayYmdi5wdXNoKFtjLHMsZl0pfXJldHVybiB2fXNlbGYub25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHt0eXBlOnQscGF5bG9hZDpuLGlkOml9PWUuZGF0YTt0cnl7aWYodD09PSJQQVJTRV9MSVRFTUFUSUMiKXtjb25zdCBvPVFlKG4uYnVmZmVyKS5tYXAobD0+e2NvbnN0IGE9Ty5nZXQobCk7cmV0dXJue25hbWU6YS5uYW1lLHNpemU6YS5zaXplLHBvc2l0aW9uOmEucG9zaXRpb24scGFsZXR0ZUNvdW50OmEucGFsZXR0ZS5sZW5ndGgscGFsZXR0ZTphLnBhbGV0dGV9fSk7c2VsZi5wb3N0TWVzc2FnZSh7aWQ6aSx0eXBlOiJQQVJTRV9MSVRFTUFUSUNfU1VDQ0VTUyIscmVnaW9uczpvfSl9ZWxzZSBpZih0PT09IkdFVF9SRUdJT05fUEFMRVRURSIpe2NvbnN0IHI9Ty5nZXQobi5yZWdpb25OYW1lKTtpZighcil0aHJvdyBuZXcgRXJyb3IoYFJlZ2lvbiAke24ucmVnaW9uTmFtZX0gbm90IGZvdW5kYCk7c2VsZi5wb3N0TWVzc2FnZSh7aWQ6aSx0eXBlOiJHRVRfUkVHSU9OX1BBTEVUVEVfU1VDQ0VTUyIscGFsZXR0ZTpyLnBhbGV0dGUsc2l6ZTpyLnNpemV9KX1lbHNlIGlmKHQ9PT0iR0VUX0NIVU5LX0xJU1QiKXtjb25zdCByPXR0KG4ucmVnaW9uTmFtZSxuLmNodW5rU2l6ZSk7c2VsZi5wb3N0TWVzc2FnZSh7aWQ6aSx0eXBlOiJHRVRfQ0hVTktfTElTVF9TVUNDRVNTIixjaHVua3M6cn0pfWVsc2UgaWYodD09PSJERUNPREVfQ0hVTksiKXtjb25zdCByPWV0KG4ucmVnaW9uTmFtZSxuLmN4LG4uY3ksbi5jeixuLmNodW5rU2l6ZSk7c2VsZi5wb3N0TWVzc2FnZSh7aWQ6aSx0eXBlOiJERUNPREVfQ0hVTktfU1VDQ0VTUyIscmVnaW9uTmFtZTpuLnJlZ2lvbk5hbWUsY3g6bi5jeCxjeTpuLmN5LGN6Om4uY3osYmxvY2tzOnJ9LFtyLmJ1ZmZlcl0pfX1jYXRjaChyKXtzZWxmLnBvc3RNZXNzYWdlKHtpZDppLHR5cGU6IkVSUk9SIixlcnJvcjoocj09bnVsbD92b2lkIDA6ci5tZXNzYWdlKXx8U3RyaW5nKHIpfSl9fX0pKCk7Cg==",GS=n=>Uint8Array.from(atob(n),e=>e.charCodeAt(0)),Xh=typeof self<"u"&&self.Blob&&new Blob([GS(Lf)],{type:"text/javascript;charset=utf-8"});function VS(n){let e;try{if(e=Xh&&(self.URL||self.webkitURL).createObjectURL(Xh),!e)throw"";const t=new Worker(e,{name:n==null?void 0:n.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+Lf,{name:n==null?void 0:n.name})}finally{e&&(self.URL||self.webkitURL).revokeObjectURL(e)}}const{Structure:Eo,ThreeStructureRenderer:vc,loadDefaultPackResources:HS,createResourcesFromPack:WS,BlockState:ZS}=zS;var ed;if((ed=An==null?void 0:An.prototype)!=null&&ed.getTextureUV){const n=An.prototype.getTextureUV;An.prototype.getTextureUV=function(e){if(!e)return[0,0,this.part,this.part];const t=e.toString();if(this.idMap[t])return this.idMap[t];if(t.startsWith("minecraft:")){const i=t.substring(10);if(this.idMap[i])return this.idMap[i]}else{const i="minecraft:"+t;if(this.idMap[i])return this.idMap[i]}return n.call(this,e)}}let Gs,wt,Tn,Ut,it,Be,Va=null,ss=null,po="",Xr=null,wi,Fn=[0,0,0],Yh=10,Ha=null,ka=null,XS=0;const nc=new Map;function YS(){return ka||(ka=new VS,ka.onmessage=n=>{const{id:e,type:t,error:i,...r}=n.data,s=nc.get(e);s&&(nc.delete(e),t==="ERROR"||i?s.reject(new Error(i||"Worker error")):s.resolve(r))}),ka}function Wa(n,e,t){const i=++XS,r=YS();return new Promise((s,a)=>{nc.set(i,{resolve:s,reject:a}),t?r.postMessage({id:i,type:n,payload:e},t):r.postMessage({id:i,type:n,payload:e})})}Eo.prototype.ensurePlacedCaches=function(){if(this.placedBlocksGrid)return;const n=this.size[0],e=this.size[1],t=this.size[2],i=n*e*t,r=new Uint16Array(i);r.fill(65535);const s=e*t;this.placedBlockObjectMap=new Map;for(let a=0;a<this.blocks.length;a++){const o=this.blocks[a],c=o.pos[0]*s+o.pos[1]*t+o.pos[2];r[c]=o.state}this.placedBlocksGrid=r};Eo.prototype.getBlock=function(n){if(!this.isInside(n))return null;this.ensurePlacedCaches();const e=this.size[1],t=this.size[2],i=n[0]*(e*t)+n[1]*t+n[2],r=this.placedBlocksGrid[i];if(r===65535)return null;let s=this.placedBlockObjectMap.get(i);return s||(s={pos:[n[0],n[1],n[2]],state:this.palette[r]},this.placedBlockObjectMap.set(i,s)),s};Eo.prototype.getBlocks=function(){if(this.ensurePlacedCaches(),this.placedBlocksCache&&this.placedBlocksCache.length>0)return this.placedBlocksCache;this.placedBlocksCache=[];for(let n=0;n<this.blocks.length;n++){const e=this.blocks[n];this.placedBlocksCache.push({pos:[e.pos[0],e.pos[1],e.pos[2]],state:this.palette[e.state],nbt:e.nbt})}return this.placedBlocksCache};function Fa(n,e,t,i,r=0,s=null,a=null){var K,ie,ce;const o=new ct,c=((K=mn==null?void 0:mn[n])==null?void 0:K.call(mn,{}))??[.247,.462,.894],l=[14.2,12.5,10.5,9,7,5.3,3.7,1.9],u=(j,_e,te)=>{var ne;if(!s)return!1;const Q=(ne=s.getBlock([j,_e,te]))==null?void 0:ne.state;if(!Q)return!1;const fe=Q.getName().toString();return!!(fe==="minecraft:water"||fe==="minecraft:lava"||Q.isWaterlogged&&Q.isWaterlogged())},h=(j,_e,te)=>{var Ne,be,xe;if(!s)return-1;const Q=(Ne=s.getBlock([j,_e,te]))==null?void 0:Ne.state;if(!Q)return-1;const fe=Q.getName().toString();if(!(fe==="minecraft:water"||fe==="minecraft:lava"||Q.isWaterlogged&&Q.isWaterlogged()))return-1;const ge=(be=s.getBlock([j,_e+1,te]))==null?void 0:be.state;if(ge){const De=ge.getName().toString();if(De==="minecraft:water"||De==="minecraft:lava")return 16}if(fe==="minecraft:water"||fe==="minecraft:lava"){const De=typeof Q.getProperty=="function"?Q.getProperty("level"):((xe=Q.properties)==null?void 0:xe.level)??"0",ke=parseInt(De||"0",10);if(ke>=8)return 16;const We=ke&7;return l[We]??14.2}return 14.2},[f,d,g]=a||[0,0,0],_=i.up||(s&&a?u(f,d+1,g):!1),m=i.down||(s&&a?u(f,d-1,g):!1),p=!i.north,w=!i.south,v=!i.west,y=!i.east,R=s&&a?h(f,d,g-1):-1,C=s&&a?h(f,d,g+1):-1,T=s&&a?h(f-1,d,g):-1,U=s&&a?h(f+1,d,g):-1;let b=!1,x="north",E="bottom",N="straight",D=!1,O="bottom",L=!1,H="bottom",$="false",G="north";if(s&&a){const j=(ie=s.getBlock(a))==null?void 0:ie.state;if(j){const _e=j.getName().toString(),te=Q=>{var fe;return typeof j.getProperty=="function"?j.getProperty(Q):(fe=j.properties)==null?void 0:fe[Q]};_e.includes("stair")?(b=!0,x=te("facing")||"north",E=te("half")||"bottom",N=te("shape")||"straight"):_e.includes("slab")&&!_e.includes("double")?(D=!0,O=te("type")||"bottom"):_e.includes("trapdoor")&&(L=!0,H=te("half")||"bottom",$=te("open")||"false",G=te("facing")||"north")}}const ee=s&&a?(ce=s.getBlock([a[0],a[1]+1,a[2]]))==null?void 0:ce.state:null,le=ee&&(ee.getName().toString()==="minecraft:water"||ee.getName().toString()==="minecraft:lava");let he=14.2;if(le)he=16;else{const j=e&7;he=l[j]??14.2}let Ee=he,Pe=he,W=he,se=he;if(_||le)Ee=Pe=W=se=16;else if(b||D||L)Ee=Pe=W=se=he;else if(s&&a){const j=(te,Q,fe)=>{var xe,De,ke;const ne=(xe=s.getBlock([te,Q,fe]))==null?void 0:xe.state;if(!ne)return-1;const ge=ne.getName().toString();if(!(ge==="minecraft:water"||ge==="minecraft:lava"||ne.isWaterlogged&&ne.isWaterlogged()))return-1;const be=(De=s.getBlock([te,Q+1,fe]))==null?void 0:De.state;if(be){const We=be.getName().toString();if(We==="minecraft:water"||We==="minecraft:lava")return 16}if(ge==="minecraft:water"||ge==="minecraft:lava"){const We=typeof ne.getProperty=="function"?ne.getProperty("level"):((ke=ne.properties)==null?void 0:ke.level)??"0",ze=parseInt(We||"0",10);if(ze>=8)return 16;const S=ze&7;return l[S]??14.2}return 14.2},_e=(te,Q)=>{let fe=0,ne=0,ge=-1,Ne=!1;for(const[xe,De]of te){const ke=j(xe,d,De);ke>=0&&(fe+=ke,ne++,ke>ge&&(ge=ke),ke>=16&&(Ne=!0))}if(ne===0)return Q;if(Ne)return 16;const be=fe/ne;return Math.min(be,ge>=0?ge:Q)};Ee=_e([[f-1,g-1],[f-1,g],[f,g-1],[f,g]],he),Pe=_e([[f,g-1],[f+1,g-1],[f,g],[f+1,g]],he),W=_e([[f,g],[f+1,g],[f,g+1],[f+1,g+1]],he),se=_e([[f-1,g],[f,g],[f-1,g+1],[f,g+1]],he)}const Me=`block/${n}_still`,pe=`block/${n}_flow`,[Ce,Te,F,me]=t.getTextureUV(Me),Y=(F-Ce)/16,Ie=(me-Te)/16,[de,Se,Ae,Le]=t.getTextureUV(pe),Ve=(Ae-de)/16,I=(Le-Se)/16,M=(j,_e,te,Q,fe,ne,ge,Ne,be,xe,De,ke,We,ze,S)=>{if(xe){const oe=Bn.fromPoints(new Ye(j,be,fe),new Ye(Q,Ne,fe),new Ye(Q,ge,te),new Ye(j,ne,te));oe.setColor(c),oe.v1.texture=[Ce+j*Y,Te+fe*Ie],oe.v2.texture=[Ce+Q*Y,Te+fe*Ie],oe.v3.texture=[Ce+Q*Y,Te+te*Ie],oe.v4.texture=[Ce+j*Y,Te+te*Ie],oe.v1.textureLimit=[Ce,Te,F,me],oe.v2.textureLimit=[Ce,Te,F,me],oe.v3.textureLimit=[Ce,Te,F,me],oe.v4.textureLimit=[Ce,Te,F,me],o.quads.push(oe)}if(De){const oe=Bn.fromPoints(new Ye(j,_e,te),new Ye(Q,_e,te),new Ye(Q,_e,fe),new Ye(j,_e,fe));oe.setColor(c),oe.v1.texture=[Ce+j*Y,Te+te*Ie],oe.v2.texture=[Ce+Q*Y,Te+te*Ie],oe.v3.texture=[Ce+Q*Y,Te+fe*Ie],oe.v4.texture=[Ce+j*Y,Te+fe*Ie],oe.v1.textureLimit=[Ce,Te,F,me],oe.v2.textureLimit=[Ce,Te,F,me],oe.v3.textureLimit=[Ce,Te,F,me],oe.v4.textureLimit=[Ce,Te,F,me],o.quads.push(oe)}const k=R>=0?Math.min(R,Math.min(ne,ge)):_e,V=C>=0?Math.min(C,Math.min(be,Ne)):_e,ae=T>=0?Math.min(T,Math.min(ne,be)):_e,ue=U>=0?Math.min(U,Math.min(ge,Ne)):_e;if(ke&&(ne>k||ge>k)){const oe=Bn.fromPoints(new Ye(Q,k,te),new Ye(j,k,te),new Ye(j,ne,te),new Ye(Q,ge,te));oe.setColor(c),oe.v1.texture=[de+Q*Ve,Se+(16-k)*I],oe.v2.texture=[de+j*Ve,Se+(16-k)*I],oe.v3.texture=[de+j*Ve,Se+(16-ne)*I],oe.v4.texture=[de+Q*Ve,Se+(16-ge)*I],oe.v1.textureLimit=[de,Se,Ae,Le],oe.v2.textureLimit=[de,Se,Ae,Le],oe.v3.textureLimit=[de,Se,Ae,Le],oe.v4.textureLimit=[de,Se,Ae,Le],o.quads.push(oe)}if(We&&(be>V||Ne>V)){const oe=Bn.fromPoints(new Ye(j,V,fe),new Ye(Q,V,fe),new Ye(Q,Ne,fe),new Ye(j,be,fe));oe.setColor(c),oe.v1.texture=[de+j*Ve,Se+(16-V)*I],oe.v2.texture=[de+Q*Ve,Se+(16-V)*I],oe.v3.texture=[de+Q*Ve,Se+(16-Ne)*I],oe.v4.texture=[de+j*Ve,Se+(16-be)*I],oe.v1.textureLimit=[de,Se,Ae,Le],oe.v2.textureLimit=[de,Se,Ae,Le],oe.v3.textureLimit=[de,Se,Ae,Le],oe.v4.textureLimit=[de,Se,Ae,Le],o.quads.push(oe)}if(ze&&(ne>ae||be>ae)){const oe=Bn.fromPoints(new Ye(j,ae,te),new Ye(j,ae,fe),new Ye(j,be,fe),new Ye(j,ne,te));oe.setColor(c),oe.v1.texture=[de+te*Ve,Se+(16-ae)*I],oe.v2.texture=[de+fe*Ve,Se+(16-ae)*I],oe.v3.texture=[de+fe*Ve,Se+(16-be)*I],oe.v4.texture=[de+te*Ve,Se+(16-ne)*I],oe.v1.textureLimit=[de,Se,Ae,Le],oe.v2.textureLimit=[de,Se,Ae,Le],oe.v3.textureLimit=[de,Se,Ae,Le],oe.v4.textureLimit=[de,Se,Ae,Le],o.quads.push(oe)}if(S&&(ge>ue||Ne>ue)){const oe=Bn.fromPoints(new Ye(Q,ue,fe),new Ye(Q,ue,te),new Ye(Q,ge,te),new Ye(Q,Ne,fe));oe.setColor(c),oe.v1.texture=[de+(16-fe)*Ve,Se+(16-ue)*I],oe.v2.texture=[de+(16-te)*Ve,Se+(16-ue)*I],oe.v3.texture=[de+(16-te)*Ve,Se+(16-ge)*I],oe.v4.texture=[de+(16-fe)*Ve,Se+(16-Ne)*I],oe.v1.textureLimit=[de,Se,Ae,Le],oe.v2.textureLimit=[de,Se,Ae,Le],oe.v3.textureLimit=[de,Se,Ae,Le],oe.v4.textureLimit=[de,Se,Ae,Le],o.quads.push(oe)}};if(b){const j={north:[2,3],south:[0,1],east:[0,3],west:[1,2]},_e={north:[0,2,3],south:[0,1,2],east:[0,1,3],west:[1,2,3]},te={north:[1,2,3],south:[0,1,3],east:[0,2,3],west:[0,1,2]},Q={north:[2],south:[0],east:[3],west:[1]},fe={north:[3],south:[1],east:[0],west:[2]};let ne=[];N==="straight"?ne=j[x]||j.north:N==="outer_left"?ne=_e[x]||_e.north:N==="outer_right"?ne=te[x]||te.north:N==="inner_left"?ne=Q[x]||Q.north:N==="inner_right"?ne=fe[x]||fe.north:ne=j[x]||j.north;const ge=E==="top",Ne=ge?0:8,be=(Ee+Pe)/2,xe=(Ee+se)/2,De=(Pe+W)/2,ke=(se+W)/2,We=(Ee+Pe+W+se)/4,ze=k=>ne.includes(k),S=(k,V,ae,ue,oe,Ke,pt,bt)=>{M(k,Ne,V,ae,ue,oe,Ke,pt,bt,!_&&!ge,!m&&V===0&&ge,p&&V===0,w&&ue===16,v&&k===0,y&&ae===16)};return ze(0)&&S(0,0,8,8,Ee,be,We,xe),ze(1)&&S(8,0,16,8,be,Pe,De,We),ze(2)&&S(8,8,16,16,We,De,W,ke),ze(3)&&S(0,8,8,16,xe,We,ke,se),o}return D?(O==="bottom"?M(0,8,0,16,16,Ee,Pe,W,se,!_,!1,p,w,v,y):M(0,0,0,16,16,8,8,8,8,!1,!m,p,w,v,y),o):L?($==="true"?G==="north"?M(0,0,3,16,16,Ee,Pe,W,se,!_,!m,!1,w,v,y):G==="south"?M(0,0,0,16,13,Ee,Pe,W,se,!_,!m,p,!1,v,y):G==="west"?M(3,0,0,16,16,Ee,Pe,W,se,!_,!m,p,w,!1,y):M(0,0,0,13,16,Ee,Pe,W,se,!_,!m,p,w,v,!1):H==="bottom"?M(0,3,0,16,16,Ee,Pe,W,se,!_,!1,p,w,v,y):M(0,0,0,16,16,13,13,13,13,!1,!m,p,w,v,y),o):(M(0,0,0,16,16,Ee,Pe,W,se,!_,!m,p,w,v,y),o)}at&&(at.liquidRenderer=function(){return new ct});if(at!=null&&at.getBlockMesh){const n=at.getBlockMesh;at.getBlockMesh=function(e,t,i,r,s,a){var u;const o=e.getName().toString(),c=new Float32Array([.0625,0,0,0,0,.0625,0,0,0,0,.0625,0,0,0,0,1]);if(o==="minecraft:water"||o==="minecraft:lava"){const h=o.replace("minecraft:",""),f=typeof e.getProperty=="function"?e.getProperty("level"):((u=e.properties)==null?void 0:u.level)??"0",d=parseInt(f||"0",10);return Fa(h,d,i,r,0,s,a).transform(c)}if(o==="minecraft:chest"||o==="minecraft:trapped_chest"){let h="single";if(typeof e.getProperties=="function"){const f=e.getProperties();f&&f.type&&(h=f.type)}else e.properties&&(h=e.properties.type||"single");if(h==="left"||h==="right"){const f=new ct;if(e.isWaterlogged&&e.isWaterlogged()){const d=Fa("water",0,i,r,0,s,a);d&&f.merge(d.transform(c))}return f}}else if(o.includes("copper_chest")){const h=new ct;if(e.isWaterlogged&&e.isWaterlogged()){const f=Fa("water",0,i,r,0,s,a);f&&h.merge(f.transform(c))}return h}const l=n.call(this,e,t,i,r);if(e.isWaterlogged&&e.isWaterlogged()){const h=Fa("water",0,i,r,0,s,a);h&&!h.isEmpty()&&l.merge(h.transform(c))}return l}}var td;if((td=ft==null?void 0:ft.prototype)!=null&&td.flatten){const n=ft.prototype.flatten;ft.prototype.flatten=function(e){if(this.parent){const t=this.parent.toString();if(t==="builtin/entity"||t==="minecraft:builtin/entity"||t==="builtin/generated"||t==="minecraft:builtin/generated"){this.parent=void 0;return}}return n.call(this,e)}}const KS=["chest","sign","frame","stair","slab","glass","door","trapdoor","fence","wall","gate","lantern","torch","chain","ladder","bars","pane","carpet","flower","tulip","rose","orchid","dandelion","poppy","bluet","lily","sunflower","lilac","peony","bush","sapling","mushroom","fungus","roots","sprout","vine","lichen","rail","lever","button","pressure_plate","tripwire","redstone","repeater","comparator","campfire","candle","amethyst","dripstone","coral","pickle","egg","bell","conduit","beacon","brewing","cauldron","hopper","composter","lectern","grindstone","stonecutter","anvil","enchanting","portal","dragon_egg","cake","bed","piston","head","skull","banner","bamboo","sugar_cane","cactus","kelp","seagrass"],Za=n=>{if(!n)return!1;const e=n.toLowerCase();return KS.some(t=>e.includes(t))},Kh=n=>{if(!n)return!1;const e=n.toLowerCase();return e.includes("redstone_torch")||e.includes("redstone_wall_torch")||e.includes("repeater")||e.includes("comparator")},Pl=n=>{if(!n)return!1;const e=n.toLowerCase();return e.includes("glass")&&!e.includes("pane")},jh=n=>n?n.toLowerCase().includes("pane"):!1,qh=n=>{if(!n)return!1;const e=n.toLowerCase();return!(!e.includes("leaves")||e.includes("azalea"))},$h=n=>n?n.toLowerCase().includes("observer"):!1;Zr&&(Zr.prototype.needsCull=function(n,e){var o;const t=n.state.getName().toString();if(Kh(t))return!1;const i=(o=this.structure.getBlock(Rt.towards(n.pos,e)))==null?void 0:o.state;if(!i)return!1;const r=i.getName().toString();if(Pl(t))return Pl(r);if(jh(t))return!1;if(qh(t))return qh(r);if($h(t))return $h(r);if(t==="minecraft:water"||t==="minecraft:lava"){const c=typeof e=="string"?e:(e==null?void 0:e.name)||String(e),l=r==="minecraft:water"||r==="minecraft:lava"||i.isWaterlogged&&i.isWaterlogged();if(c==="up"||c==="down"){if(l)return!0}else if(l)return!1;if(Pl(r)||jh(r)||Za(r))return!1;const u=this.resources.getBlockFlags(i.getName());return!(u!=null&&u.transparent||!(u!=null&&u.opaque))}const a=this.resources.getBlockFlags(i.getName());return!(!(a!=null&&a.opaque)||Za(r))},Zr.prototype.isFullyOccluded=function(n){var i;const e=n.state.getName().toString();if(Kh(e)||e.includes("chest")||e.includes("sign")||e.includes("frame")||e.includes("torch"))return!1;const t=[He.UP,He.DOWN,He.NORTH,He.SOUTH,He.EAST,He.WEST];for(const r of t){const s=(i=this.structure.getBlock(Rt.towards(n.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=s.getName().toString();if(Za(a))return!1;const o=this.resources.getBlockFlags(s.getName());if(!(o!=null&&o.opaque))return!1}return!0},Zr.prototype.processBlock=function(n,e){var c;const t=n.state.getName(),i=t.toString(),r=this.getBlockProps(n.state);if(this.isFullyOccluded(n))return;const s=[Math.floor(n.pos[0]/this.chunkSize[0]),Math.floor(n.pos[1]/this.chunkSize[1]),Math.floor(n.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(e&&!e.has(a))return;const o=this.getChunk(s);try{const l={up:this.needsCull(n,He.UP),down:this.needsCull(n,He.DOWN),west:this.needsCull(n,He.WEST),east:this.needsCull(n,He.EAST),north:this.needsCull(n,He.NORTH),south:this.needsCull(n,He.SOUTH)},u=new ct;if(!i.includes("sign")){const f=this.resources.getBlockDefinition(t);if(f)try{u.merge(f.getMesh(t,r,this.resources,this.resources,l))}catch{}}if(at!=null&&at.getBlockMesh)try{const f=at.getBlockMesh(n.state,n.nbt,this.resources,l,this.structure,n.pos);f&&!f.isEmpty()&&u.merge(f)}catch{}u.isEmpty()||(this.finishChunkMesh(u,n.pos,t,r,a),(c=this.resources.getBlockFlags(n.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(u):o.mesh.merge(u))}catch(l){console.error(`Error rendering block ${i}`,l)}});vc.prototype.applyDrawDistance=function(){if(this.chunkMeshes)for(let n=0;n<this.chunkMeshes.length;n++){const e=this.chunkMeshes[n];e.visible=!0,e.frustumCulled=!0}};const Jh=new ut,Vr=new ut,Ss=[0,0,0];vc.prototype.prepareCamera=function(n){if(Jh.fromArray(n),Vr.copy(Jh).invert(),this.camera&&(this.camera.position.setFromMatrixPosition(Vr),this.camera.quaternion.setFromRotationMatrix(Vr),this.camera.updateMatrixWorld(!0)),Ss[0]=Vr.elements[12],Ss[1]=Vr.elements[13],Ss[2]=Vr.elements[14],this.drawDistance)this.applyDrawDistance(Ss,this.drawDistance);else if(this.chunkMeshes)for(let e=0;e<this.chunkMeshes.length;e++)this.chunkMeshes[e].visible=!0,this.chunkMeshes[e].frustumCulled=!0;typeof this.updateEmissiveLightsForCamera=="function"&&this.updateEmissiveLightsForCamera(Ss)};async function jS(){Gs=document.getElementById("renderer-container");const n=window.innerWidth/window.innerHeight;Tn=new ln(60,n,.5,1e5),Ut=new Ja(-10*n,10*n,10,-10,.5,1e5),wt=Tn,wt.position.set(10,15,20);try{const e=Date.now(),t=window.location.href.split("?")[0].replace("index.html","")+"default-pack/",i=E=>{const N=new Set;return E&&E.split(/\r?\n/).forEach(D=>{const O=D.trim();O&&!O.startsWith("#")&&N.add(O.startsWith("minecraft:")?O:"minecraft:"+O)}),N},[r,s,a,o,c]=await Promise.all([HS({baseUrl:t+`?cb=${e}`}),fetch(t+`block-flags/opaque.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/transparent.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/non_self_culling.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/emissive.json?cb=${e}`).catch(()=>null)]),l=["acacia","bamboo","birch","cherry","crimson","dark_oak","jungle","mangrove","oak","pale_oak","poplar","spruce","warped"];l.forEach(E=>{delete r.assets.blockstates[`${E}_sign`],delete r.assets.models[`${E}_sign`],delete r.assets.blockstates[`${E}_wall_sign`],delete r.assets.models[`${E}_wall_sign`],delete r.assets.blockstates[`${E}_hanging_sign`],delete r.assets.models[`${E}_hanging_sign`],delete r.assets.blockstates[`${E}_wall_hanging_sign`],delete r.assets.models[`${E}_wall_hanging_sign`]});const u=(E,N,D)=>({variants:{"type=left,facing=north":{model:N,y:0},"type=left,facing=south":{model:N,y:180},"type=left,facing=west":{model:N,y:270},"type=left,facing=east":{model:N,y:90},"type=right,facing=north":{model:D,y:0},"type=right,facing=south":{model:D,y:180},"type=right,facing=west":{model:D,y:270},"type=right,facing=east":{model:D,y:90},"type=single,facing=north":{model:E,y:0},"type=single,facing=south":{model:E,y:180},"type=single,facing=west":{model:E,y:270},"type=single,facing=east":{model:E,y:90},"facing=north":{model:E,y:0},"facing=south":{model:E,y:180},"facing=west":{model:E,y:270},"facing=east":{model:E,y:90}}});r.assets.blockstates.chest=u("block/chest","block/chest_left","block/chest_right"),r.assets.blockstates.trapped_chest=u("block/chest","block/trapped_chest_left","block/trapped_chest_right");const h=(E,N)=>{const D=E?[1,0,1]:[0,0,1],O=E?[16,10,15]:[15,10,15],L=E?[1,10,1]:[0,10,1],H=E?[16,14,15]:[15,14,15],$=E?[15,7,0]:[0,7,0],G=E?[16,11,2]:[1,11,2],ee={north:{uv:[10.75,8.25,14.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7.25,10.75],rotation:180,texture:"#0"},up:{uv:[11,8.25,7.25,4.75],texture:"#0"},down:{uv:[7.25,8.25,3.5,4.75],texture:"#0"}},le={north:{uv:[10.75,3.75,14.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7.25,4.75],rotation:180,texture:"#0"},up:{uv:[11,3.5,7.25,0],texture:"#0"},down:{uv:[7.25,3.5,3.5,0],texture:"#0"}},he={north:{uv:[.25,.25,.5,1.25],rotation:180,texture:"#0"},south:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.5,0,.75,.25],texture:"#0"},down:{uv:[.25,0,.5,.25],texture:"#0"}};return E?(ee.west={uv:[7.25,8.25,10.75,10.75],rotation:180,texture:"#0"},le.west={uv:[7.25,3.75,10.75,4.75],rotation:180,texture:"#0"},he.west={uv:[.5,.25,.75,1.25],rotation:180,texture:"#0"}):(ee.east={uv:[3.5,8.25,0,10.75],rotation:180,texture:"#0"},le.east={uv:[3.5,3.75,0,4.75],rotation:180,texture:"#0"},he.east={uv:[.25,.25,0,1.25],rotation:180,texture:"#0"}),{textures:{0:N},elements:[{from:D,to:O,faces:ee},{from:L,to:H,faces:le},{from:$,to:G,faces:he}]}};r.assets.models["block/chest_left"]=h(!0,"entity/chest/normal_left"),r.assets.models["block/chest_right"]=h(!1,"entity/chest/normal_right"),r.assets.models["block/trapped_chest_left"]=h(!0,"entity/chest/trapped_left"),r.assets.models["block/trapped_chest_right"]=h(!1,"entity/chest/trapped_right"),r.assets.models["block/copper_torch"]={parent:"minecraft:block/template_torch",textures:{torch:"minecraft:block/copper_torch"}},r.assets.models["block/copper_wall_torch"]={parent:"minecraft:block/template_torch_wall",textures:{torch:"minecraft:block/copper_torch"}};const f=["copper_torch","exposed_copper_torch","weathered_copper_torch","oxidized_copper_torch","waxed_copper_torch","waxed_exposed_copper_torch","waxed_weathered_copper_torch","waxed_oxidized_copper_torch"],d={variants:{"":{model:"minecraft:block/copper_torch"}}},g={variants:{"facing=east":{model:"minecraft:block/copper_wall_torch"},"facing=north":{model:"minecraft:block/copper_wall_torch",y:270},"facing=south":{model:"minecraft:block/copper_wall_torch",y:90},"facing=west":{model:"minecraft:block/copper_wall_torch",y:180}}};f.forEach(E=>{r.assets.blockstates[E]=d,r.assets.blockstates[E.replace("_torch","_wall_torch")]=g});const _=E=>({textures:{0:E},elements:[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],texture:"#0"},down:{uv:[.75,0,1.25,.25],texture:"#0"}}}]});[{name:"copper_chest",tex:"entity/chest/copper"},{name:"exposed_copper_chest",tex:"entity/chest/copper_exposed"},{name:"weathered_copper_chest",tex:"entity/chest/copper_weathered"},{name:"oxidized_copper_chest",tex:"entity/chest/copper_oxidized"}].forEach(E=>{const N=`block/${E.name}`,D=`block/${E.name}_left`,O=`block/${E.name}_right`;r.assets.models[N]=_(E.tex),r.assets.models[D]=h(!0,`${E.tex}_left`),r.assets.models[O]=h(!1,`${E.tex}_right`);const L=u(N,D,O);r.assets.blockstates[E.name]=L,r.assets.blockstates[`waxed_${E.name}`]=L});const p=E=>({variants:{"facing=south":{model:E},"facing=north":{model:E,y:180},"facing=east":{model:E,y:90},"facing=west":{model:E,y:270},"facing=up":{model:E,x:270},"facing=down":{model:E,x:90},"facing=south,fixed=false":{model:E},"facing=north,fixed=false":{model:E,y:180},"facing=east,fixed=false":{model:E,y:90},"facing=west,fixed=false":{model:E,y:270},"facing=up,fixed=false":{model:E,x:270},"facing=down,fixed=false":{model:E,x:90},"facing=south,fixed=true":{model:E},"facing=north,fixed=true":{model:E,y:180},"facing=east,fixed=true":{model:E,y:90},"facing=west,fixed=true":{model:E,y:270},"facing=up,fixed=true":{model:E,x:270},"facing=down,fixed=true":{model:E,x:90},"facing=south,map=false":{model:E},"facing=north,map=false":{model:E,y:180},"facing=east,map=false":{model:E,y:90},"facing=west,map=false":{model:E,y:270},"facing=up,map=false":{model:E,x:270},"facing=down,map=false":{model:E,x:90},"facing=south,map=true":{model:E},"facing=north,map=true":{model:E,y:180},"facing=east,map=true":{model:E,y:90},"facing=west,map=true":{model:E,y:270},"facing=up,map=true":{model:E,x:270},"facing=down,map=true":{model:E,x:90},"":{model:E}}});r.assets.blockstates.item_frame=p("block/item_frame"),r.assets.blockstates.glow_item_frame=p("block/glow_item_frame");const w=()=>({textures:{wood:"block/birch_planks"},elements:[{from:[3,3,0],to:[13,13,.5],faces:{north:{uv:[3,3,13,13],texture:"#wood"},south:{uv:[3,3,13,13],texture:"#wood"}}},{from:[2,2,0],to:[14,3,1],faces:{north:{uv:[2,13,14,14],texture:"#wood"},south:{uv:[2,13,14,14],texture:"#wood"},up:{uv:[2,15,14,16],texture:"#wood"},down:{uv:[2,0,14,1],texture:"#wood"},east:{uv:[0,13,1,14],texture:"#wood"},west:{uv:[15,13,16,14],texture:"#wood"}}},{from:[2,13,0],to:[14,14,1],faces:{north:{uv:[2,2,14,3],texture:"#wood"},south:{uv:[2,2,14,3],texture:"#wood"},up:{uv:[2,0,14,1],texture:"#wood"},down:{uv:[2,15,14,16],texture:"#wood"},east:{uv:[0,2,1,3],texture:"#wood"},west:{uv:[15,2,16,3],texture:"#wood"}}},{from:[2,3,0],to:[3,13,1],faces:{north:{uv:[13,3,14,13],texture:"#wood"},south:{uv:[2,3,3,13],texture:"#wood"},east:{uv:[0,3,1,13],texture:"#wood"},west:{uv:[15,3,16,13],texture:"#wood"}}},{from:[13,3,0],to:[14,13,1],faces:{north:{uv:[2,3,3,13],texture:"#wood"},south:{uv:[13,3,14,13],texture:"#wood"},east:{uv:[0,3,1,13],texture:"#wood"},west:{uv:[15,3,16,13],texture:"#wood"}}}]});r.assets.models["block/item_frame"]=w(),r.assets.models["block/glow_item_frame"]=w();const v=s&&s.ok?await s.text():"",y=a&&a.ok?await a.text():"",R=o&&o.ok?await o.text():"",C=c&&c.ok?await c.json():{},T=i(v),U=i(y),b=new Set;T.forEach(E=>{Za(E)?U.add(E):b.add(E)});const x={opaque:b,transparent:U,nonSelfCulling:i(R),emissive:C};if(Xr=WS({assets:r.assets,atlas:r.atlas,flags:x}),Xr&&Xr.textures){const E=Xr.textures;Object.keys(E).forEach(N=>{N.startsWith("minecraft:")?E[N.replace("minecraft:","")]=E[N]:E["minecraft:"+N]=E[N]}),l.forEach(N=>{E[`entity/signs/${N}`]&&(E[`minecraft:entity/signs/${N}`]=E[`entity/signs/${N}`]),E[`entity/signs/hanging/${N}`]&&(E[`minecraft:entity/signs/hanging/${N}`]=E[`entity/signs/hanging/${N}`])})}window.AndroidHost&&window.AndroidHost.onLoadingProgress("READY")}catch(e){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: Failed to load default resource pack. "+(e==null?void 0:e.message))}}const Qh=ht();let Vs=!1;function qS(){Vs=!1,it&&it.update(),Be&&wt&&(wt.updateMatrixWorld(!0),dS(Qh,wt.matrixWorldInverse.elements),Be.drawStructure(Qh)),it&&it.enableDamping&&(it.state!==-1||Vs)&&ci()}function ci(){Vs||(Vs=!0,Ha=requestAnimationFrame(qS))}window.startRenderLoop=function(){ci()};window.stopRenderLoop=function(){Ha!==null&&(cancelAnimationFrame(Ha),Ha=null),Vs=!1};window.destroyRenderer=function(){var n,e;if(window.stopRenderLoop(),it&&it.dispose(),Be)try{if(Be.chunkMeshes){for(const t of Be.chunkMeshes)t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{var r;return(r=i.dispose)==null?void 0:r.call(i)}):(e=(n=t.material).dispose)==null||e.call(n));Be.chunkMeshes=[]}Be.renderer&&(Be.renderer.dispose(),Be.renderer.forceContextLoss())}catch(t){console.error("Error destroying renderer: ",t)}ss=null,Va=null,Gs&&(Gs.innerHTML="")};window.loadLitematic=async function(){try{window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),Va=await(await fetch("./model.litematic")).arrayBuffer();const i=((await Wa("PARSE_LITEMATIC",{buffer:Va.slice(0)},[Va.slice(0)])).regions||[]).map(r=>r.name);i.length===0&&i.push("Region1"),po=i[0],window.AndroidHost&&window.AndroidHost.onRegionsParsed(JSON.stringify(i)),await If(po),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS")}catch(n){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(n==null?void 0:n.message))}};async function If(n){var _,m;if(!Xr)return;if(window.stopRenderLoop(),it&&it.dispose(),Be)try{if(Be.chunkMeshes){for(const p of Be.chunkMeshes)p.geometry&&p.geometry.dispose(),p.material&&(Array.isArray(p.material)?p.material.forEach(w=>{var v;return(v=w.dispose)==null?void 0:v.call(w)}):(m=(_=p.material).dispose)==null||m.call(_));Be.chunkMeshes=[]}Be.dispose()}catch(p){console.error("Error disposing renderer: ",p)}Gs.innerHTML="",wi=document.createElement("canvas"),wi.style.width="100%",wi.style.height="100%",Gs.appendChild(wi),window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_10%");const e=await Wa("GET_REGION_PALETTE",{regionName:n}),t=e.palette||[],i=e.size||[1,1,1],r=t.map(p=>new ZS(p.name,p.properties));Fn=[i[0]/2,i[1]/2,i[2]/2],Yh=Math.max(1,Math.max(i[0],i[1],i[2])/2);const s=i[0]*i[1]*i[2],a=Math.max(i[0],i[1],i[2]),o=s>1e6||a>128?32:16,l=(await Wa("GET_CHUNK_LIST",{regionName:n,chunkSize:o})).chunks||[],u=l.length,h=[];for(let p=0;p<u;p++){const[w,v,y]=l[p],R=await Wa("DECODE_CHUNK",{regionName:n,cx:w,cy:v,cz:y,chunkSize:o}),C=new Uint32Array(R.blocks),T=C.length/4;for(let U=0;U<T;U++)h.push({pos:[C[U*4],C[U*4+1],C[U*4+2]],state:C[U*4+3]});if(window.AndroidHost&&(p%10===0||p===u-1)){const U=Math.floor((p+1)/u*80)+10;window.AndroidHost.onLoadingProgress(`DECODING_${U}%`)}}ss=new Eo(i,r,h);const f={asyncBuild:!0,asyncChunkBuildTimeMs:12,chunkSize:[o,o,o]};if(Be=new vc(wi,ss,Xr,f),Be.drawDistance=1e5,Be.atlasTexture){const p=Be.atlasTexture;p.minFilter=ws,p.magFilter=xt,Be.renderer&&(p.anisotropy=Be.renderer.capabilities.getMaxAnisotropy()),p.needsUpdate=!0}Be.sunlight&&Be.sunlight.fog&&(Be.sunlight.fog.density=0,Be.sunlight.fog.heightFalloff=0),Be.setViewport(0,0,window.innerWidth,window.innerHeight),Be.camera=wt,Be.skyScene&&Be.skyScene.clear(),Be.renderer&&(Be.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),Be.renderer.toneMapping=rd,Be.renderer.toneMappingExposure=.7),Hr=!0,window.toggleDayNight();const d=window.innerWidth/window.innerHeight;Tn.far=1e5,Tn.aspect=d,Tn.updateProjectionMatrix(),Ut.far=1e5,Ut.updateProjectionMatrix(),it&&it.dispose(),it=new Ud(wt,wi),it.enableDamping=!0,it.dampingFactor=.05,it.target.set(Fn[0],Fn[1],Fn[2]),it.addEventListener("change",ci);const g=Math.max(Yh*2.2,10);wt.position.set(Fn[0]+g,Fn[1]+g*.8,Fn[2]+g),it.update(),window.addEventListener("resize",()=>{const p=window.innerWidth,w=window.innerHeight,v=p/w;if(Be.setViewport(0,0,p,w),Tn.aspect=v,Tn.updateProjectionMatrix(),wt===Ut){const R=wt.position.distanceTo(it.target)*Math.tan(Tn.fov*Math.PI/360)*2,C=R*v;Ut.left=-C/2,Ut.right=C/2,Ut.top=R/2,Ut.bottom=-R/2,Ut.far=1e5,Ut.updateProjectionMatrix()}ci()}),$S(),await Be.whenReady(),ci()}async function $S(){if(ss)try{const n=ss,e=n.blocks||[],t=n.palette||[],i={};let r=0;const s=e.length;let a=0,o=performance.now();for(;a<s;){const c=Math.min(a+5e4,s);for(;a<c;a++){const l=e[a];if(l){const u=l.state,h=t[u];if(h){const f=h.getName().toString();i[f]=(i[f]||0)+1,r++}}}a<s&&performance.now()-o>=12&&(await new Promise(l=>requestAnimationFrame(l)),o=performance.now())}window.AndroidHost&&window.AndroidHost.onStatisticsUpdated(r,JSON.stringify(i))}catch(n){console.error("Error collecting block statistics: ",n)}}window.toggleCameraView=function(){if(!it||!wi)return;const n=it.target.clone(),e=wt.position.clone(),t=new z().subVectors(e,n),i=Math.max(t.length(),5);if(wt===Tn){const r=window.innerWidth/window.innerHeight,s=i*Math.tan(Tn.fov*Math.PI/360)*2,a=s*r;Ut.left=-a/2,Ut.right=a/2,Ut.top=s/2,Ut.bottom=-s/2,Ut.far=1e5,Ut.updateProjectionMatrix(),wt=Ut}else wt=Tn;wt.position.copy(e),Be&&(Be.camera=wt,Be.sunlight&&Be.sunlight.postProcess&&(wt===Ut?Be.sunlight.postProcess.enabled=!1:Be.sunlight.postProcess.enabled=!0)),it.dispose(),it=new Ud(wt,wi),it.enableDamping=!0,it.dampingFactor=.05,it.target.copy(n),it.addEventListener("change",ci),it.update(),ci()};let Hr=!1;window.toggleDayNight=function(){if(Hr=!Hr,Be){if(Be.renderer&&Be.renderer.setClearColor(Hr?264208:11062,1),Be.sunlight){const n=Be.sunlight;Hr?(n.intensity=.08,n.ambientIntensity=.12,n.emissive&&(n.emissive.intensity=.25),n.direction=[-.2,-.9,-.3],n.light&&(n.light.intensity=.08),n.ambient&&(n.ambient.intensity=.12)):(n.intensity=.5,n.ambientIntensity=.65,n.emissive&&(n.emissive.intensity=.1),n.direction=[.6,1,.8],n.light&&(n.light.intensity=.5),n.ambient&&(n.ambient.intensity=.65))}Be.opaqueMaterial&&Be.applySunlightUniforms(Be.opaqueMaterial),Be.transparentMaterial&&Be.applySunlightUniforms(Be.transparentMaterial)}return ci(),Hr};window.resetCamera=function(){if(!ss||!it||!wt)return;const n=new z().subVectors(wt.position,it.target);it.target.set(Fn[0],Fn[1],Fn[2]),wt.position.addVectors(it.target,n),it.update(),ci()};window.switchRegion=async function(n){n!==po&&(window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),po=n,await If(n),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS"))};jS();
