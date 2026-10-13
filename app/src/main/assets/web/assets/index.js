var Td=Object.defineProperty;var Ad=(n,e,t)=>e in n?Td(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var L=(n,e,t)=>Ad(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="164",_r={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,Sc=1,Cd=2,$h=1,Pd=2,ei=3,gn=0,tn=1,kn=2,Ai=0,Wr=1,wc=2,Mc=3,bc=4,Ld=5,Zi=100,Dd=101,Id=102,Ud=103,Nd=104,Fd=200,kd=201,Od=202,Bd=203,Al=204,Rl=205,zd=206,Hd=207,Gd=208,Vd=209,Wd=210,Xd=211,qd=212,$d=213,Yd=214,jd=0,Zd=1,Kd=2,za=3,Jd=4,Qd=5,ep=6,tp=7,Yh=0,np=1,ip=2,Ri=0,rp=1,sp=2,ap=3,jh=4,op=5,lp=6,cp=7,Zh=300,Zr=301,Kr=302,Cl=303,Pl=304,uo=306,Ll=1e3,An=1001,Dl=1002,vt=1003,up=1004,ys=1005,Yt=1006,Eo=1007,er=1008,ki=1009,hp=1010,fp=1011,Kh=1012,Jh=1013,Oi=1014,Rn=1015,Jr=1016,Qh=1017,ef=1018,Gs=1020,dp=35902,pp=1021,mp=1022,Wt=1023,gp=1024,_p=1025,Ci=1026,Ps=1027,vp=1028,tf=1029,xp=1030,nf=1031,rf=1033,To=33776,Ao=33777,Ro=33778,Co=33779,Ec=35840,Tc=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Lc=37496,Dc=37808,Ic=37809,Uc=37810,Nc=37811,Fc=37812,kc=37813,Oc=37814,Bc=37815,zc=37816,Hc=37817,Gc=37818,Vc=37819,Wc=37820,Xc=37821,Po=36492,qc=36494,$c=36495,yp=36283,Yc=36284,jc=36285,Zc=36286,Sp=3200,wp=3201,Mp=0,bp=1,wi="",Un="srgb",zi="srgb-linear",tc="display-p3",ho="display-p3-linear",Ha="linear",pt="srgb",Ga="rec709",Va="p3",xr=7680,Kc=519,Ep=512,Tp=513,Ap=514,sf=515,Rp=516,Cp=517,Pp=518,Lp=519,Jc=35044,Qc="300 es",ri=2e3,Wa=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,Il=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function Dp(n,e){return(n%e+e)%e}function Lo(n,e,t){return(1-t)*n+t*e}function hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ip={DEG2RAD:Fa};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],v=r[4],y=r[7],P=r[2],b=r[5],E=r[8];return s[0]=a*_+o*w+c*P,s[3]=a*m+o*v+c*b,s[6]=a*p+o*y+c*E,s[1]=l*_+u*w+h*P,s[4]=l*m+u*v+h*b,s[7]=l*p+u*y+h*E,s[2]=d*_+f*w+g*P,s[5]=d*m+f*v+g*b,s[8]=d*p+f*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Xe;function af(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Up(){const n=Xa("canvas");return n.style.display="block",n}const eu={};function Np(n){n in eu||(eu[n]=!0,console.warn(n))}const tu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nu=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[zi]:{transfer:Ha,primaries:Ga,toReference:n=>n,fromReference:n=>n},[Un]:{transfer:pt,primaries:Ga,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ho]:{transfer:Ha,primaries:Va,toReference:n=>n.applyMatrix3(nu),fromReference:n=>n.applyMatrix3(tu)},[tc]:{transfer:pt,primaries:Va,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nu),fromReference:n=>n.applyMatrix3(tu).convertLinearToSRGB()}},Fp=new Set([zi,ho]),ct={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ta[e].toReference,r=ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ta[n].primaries},getTransfer:function(n){return n===wi?Ha:ta[n].transfer}};function Xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yr;class kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yr===void 0&&(yr=Xa("canvas")),yr.width=e.width,yr.height=e.height;const i=yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xr(t[i]/255)*255):t[i]=Xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Op=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uo(r[a].image)):s.push(Uo(r[a]))}else s=Uo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bp=0;class Kt extends mr{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=An,r=An,s=Yt,a=er,o=Wt,c=ki,l=Kt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vs(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Zh;Kt.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(f+1)/2,P=(p+1)/2,b=(u+d)/4,E=(h+_)/4,U=(g+m)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=E/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=E/s,r=U/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zp extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends zp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lf extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hp extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,p*w);m=Math.sin(m*b)/P,o=Math.sin(o*b)/P}const y=o*w;if(c=c*m+d*y,l=l*m+f*y,u=u*m+g*y,h=h*m+_*y,m===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new H,iu=new cr;class Ws{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),ia.subVectors(this.max,fs),Sr.subVectors(e.a,fs),wr.subVectors(e.b,fs),Mr.subVectors(e.c,fs),ui.subVectors(wr,Sr),hi.subVectors(Mr,wr),Gi.subVectors(Sr,Mr);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Gi.z,Gi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Gi.z,0,-Gi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Gi.y,Gi.x,0];return!Fo(t,Sr,wr,Mr,ia)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Sr,wr,Mr,ia))?!1:(ra.crossVectors(ui,hi),t=[ra.x,ra.y,ra.z],Fo(t,Sr,wr,Mr,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new H,new H,new H,new H,new H,new H,new H,new H],xn=new H,na=new Ws,Sr=new H,wr=new H,Mr=new H,ui=new H,hi=new H,Gi=new H,fs=new H,ia=new H,ra=new H,Vi=new H;function Fo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);const o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Gp=new Ws,ds=new H,ko=new H;class fo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(ko)),this.expandByPoint(ds.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new H,Oo=new H,sa=new H,fi=new H,Bo=new H,aa=new H,zo=new H;class nc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Oo.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Oo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=fi.dot(this.direction),c=-fi.dot(sa),l=fi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oo).addScaledVector(sa,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){Bo.subVectors(t,e),aa.subVectors(i,e),zo.crossVectors(Bo,aa);let a=this.direction.dot(zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(aa.crossVectors(fi,aa));if(c<0)return null;const l=o*this.direction.dot(Bo.cross(fi));if(l<0||c+l>a)return null;const u=-o*fi.dot(zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Wp)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),di.crossVectors(i,sn),di.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),di.crossVectors(i,sn)),di.normalize(),oa.crossVectors(sn,di),r[0]=di.x,r[4]=oa.x,r[8]=sn.x,r[1]=di.y,r[5]=oa.y,r[9]=sn.y,r[2]=di.z,r[6]=oa.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],v=i[7],y=i[11],P=i[15],b=r[0],E=r[4],U=r[8],M=r[12],x=r[1],R=r[5],N=r[9],D=r[13],F=r[2],C=r[6],k=r[10],V=r[14],G=r[3],K=r[7],te=r[11],le=r[15];return s[0]=a*b+o*x+c*F+l*G,s[4]=a*E+o*R+c*C+l*K,s[8]=a*U+o*N+c*k+l*te,s[12]=a*M+o*D+c*V+l*le,s[1]=u*b+h*x+d*F+f*G,s[5]=u*E+h*R+d*C+f*K,s[9]=u*U+h*N+d*k+f*te,s[13]=u*M+h*D+d*V+f*le,s[2]=g*b+_*x+m*F+p*G,s[6]=g*E+_*R+m*C+p*K,s[10]=g*U+_*N+m*k+p*te,s[14]=g*M+_*D+m*V+p*le,s[3]=w*b+v*x+y*F+P*G,s[7]=w*E+v*R+y*C+P*K,s[11]=w*U+v*N+y*k+P*te,s[15]=w*M+v*D+y*V+P*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*l-_*d*l+_*c*f-o*m*f-h*c*p+o*d*p,v=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,y=u*_*l-g*h*l+g*o*f-a*_*f-u*o*p+a*h*p,P=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,b=t*w+i*v+r*y+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=w*E,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*E,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*E,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*E,e[4]=v*E,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*E,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*E,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*E,e[8]=y*E,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*E,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*E,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*E,e[12]=P*E,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*E,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*E,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,w=c*l,v=c*u,y=c*h,P=i.x,b=i.y,E=i.z;return r[0]=(1-(_+p))*P,r[1]=(f+y)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(f-y)*b,r[5]=(1-(d+p))*b,r[6]=(m+w)*b,r[7]=0,r[8]=(g+v)*E,r[9]=(m-w)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const a=br.set(r[4],r[5],r[6]).length(),o=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const l=1/s,u=1/a,h=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ri){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===ri)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Wa)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ri){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*l,f=(i+r)*u;let g,_;if(o===ri)g=(a+s)*h,_=-2*h;else if(o===Wa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new H,yn=new at,Vp=new H(0,0,0),Wp=new H(1,1,1),di=new H,oa=new H,sn=new H,ru=new at,su=new cr;class ai{constructor(e=0,t=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xp=0;const au=new H,Er=new cr,Zn=new at,la=new H,ps=new H,qp=new H,$p=new cr,ou=new H(1,0,0),lu=new H(0,1,0),cu=new H(0,0,1),uu={type:"added"},Yp={type:"removed"},Tr={type:"childadded",child:null},Ho={type:"childremoved",child:null};class nn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new H,t=new ai,i=new cr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Xe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(ps,la,this.up):Zn.lookAt(la,ps,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(Zn),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new H(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new H,Kn=new H,Go=new H,Jn=new H,Ar=new H,Rr=new H,hu=new H,Vo=new H,Wo=new H,Xo=new H;class On{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),Kn.subVectors(i,t),Go.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(Kn),c=Sn.dot(Go),l=Kn.dot(Kn),u=Kn.dot(Go),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),Kn.subVectors(e,t),Sn.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Sn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ar.subVectors(r,i),Rr.subVectors(s,i),Vo.subVectors(e,i);const c=Ar.dot(Vo),l=Rr.dot(Vo);if(c<=0&&l<=0)return t.copy(i);Wo.subVectors(e,r);const u=Ar.dot(Wo),h=Rr.dot(Wo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Ar,a);Xo.subVectors(e,s);const f=Ar.dot(Xo),g=Rr.dot(Xo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Rr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return hu.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(hu,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Ar,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=Dp(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qo(a,s,e+1/3),this.g=qo(a,s,e),this.b=qo(a,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=uf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return ct.fromWorkingColorSpace(Gt.copy(this),e),Math.round(qt(Gt.r*255,0,255))*65536+Math.round(qt(Gt.g*255,0,255))*256+Math.round(qt(Gt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Un){ct.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(ca);const i=Lo(pi.h,ca.h,t),r=Lo(pi.s,ca.s,t),s=Lo(pi.l,ca.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gt=new Ze;Ze.NAMES=uf;let jp=0;class Xs extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Wr,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hf extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new H,ua=new Re;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Np("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class ff extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class df extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zp=0;const fn=new at,$o=new nn,Cr=new H,an=new Ws,ms=new Ws,Dt=new H;class Xn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?df:ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(an.min,ms.min),an.expandByPoint(Dt),Dt.addVectors(an.max,ms.max),an.expandByPoint(Dt)):(an.expandByPoint(ms.min),an.expandByPoint(ms.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(Cr.fromBufferAttribute(e,l),Dt.add(Cr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new H,c[U]=new H;const l=new H,u=new H,h=new H,d=new Re,f=new Re,g=new Re,_=new H,m=new H;function p(U,M,x){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,U),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[U].add(_),o[M].add(_),o[x].add(_),c[U].add(m),c[M].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,M=w.length;U<M;++U){const x=w[U],R=x.start,N=x.count;for(let D=R,F=R+N;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new H,y=new H,P=new H,b=new H;function E(U){P.fromBufferAttribute(r,U),b.copy(P);const M=o[U];v.copy(M),v.sub(P.multiplyScalar(P.dot(M))).normalize(),y.crossVectors(b,M);const R=y.dot(c[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,R)}for(let U=0,M=w.length;U<M;++U){const x=w[U],R=x.start,N=x.count;for(let D=R,F=R+N;D<F;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new at,Wi=new nc,ha=new fo,du=new H,Pr=new H,Lr=new H,Dr=new H,Yo=new H,fa=new H,da=new Re,pa=new Re,ma=new Re,pu=new H,mu=new H,gu=new H,ga=new H,_a=new H;let Qt=class extends nn{constructor(e=new Xn,t=new hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Yo.fromBufferAttribute(h,e),a?fa.addScaledVector(Yo,u):fa.addScaledVector(Yo.sub(t),u))}t.add(fa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(ha.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ha,du)===null||Wi.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(fu.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(fu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,P=v;y<P;y+=3){const b=o.getX(y),E=o.getX(y+1),U=o.getX(y+2);r=va(this,p,e,i,l,u,h,b,E,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);r=va(this,a,e,i,l,u,h,w,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,P=v;y<P;y+=3){const b=y,E=y+1,U=y+2;r=va(this,p,e,i,l,u,h,b,E,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,v=m+1,y=m+2;r=va(this,a,e,i,l,u,h,w,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Kp(n,e,t,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gn,o),c===null)return null;_a.copy(o),_a.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:n}}function va(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Pr),n.getVertexPosition(c,Lr),n.getVertexPosition(l,Dr);const u=Kp(n,e,t,i,Pr,Lr,Dr,ga);if(u){r&&(da.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,c),ma.fromBufferAttribute(r,l),u.uv=On.getInterpolation(ga,Pr,Lr,Dr,da,pa,ma,new Re)),s&&(da.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,c),ma.fromBufferAttribute(s,l),u.uv1=On.getInterpolation(ga,Pr,Lr,Dr,da,pa,ma,new Re)),a&&(pu.fromBufferAttribute(a,o),mu.fromBufferAttribute(a,c),gu.fromBufferAttribute(a,l),u.normal=On.getInterpolation(ga,Pr,Lr,Dr,pu,mu,gu,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new H,materialIndex:0};On.getNormal(Pr,Lr,Dr,h.normal),u.face=h}return u}class qs extends Xn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function g(_,m,p,w,v,y,P,b,E,U,M){const x=y/E,R=P/U,N=y/2,D=P/2,F=b/2,C=E+1,k=U+1;let V=0,G=0;const K=new H;for(let te=0;te<k;te++){const le=te*R-D;for(let ye=0;ye<C;ye++){const Pe=ye*x-N;K[_]=Pe*w,K[m]=le*v,K[p]=F,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=b>0?1:-1,u.push(K.x,K.y,K.z),h.push(ye/E),h.push(1-te/U),V+=1}}for(let te=0;te<U;te++)for(let le=0;le<E;le++){const ye=d+le+C*te,Pe=d+le+C*(te+1),$=d+(le+1)+C*(te+1),ne=d+(le+1)+C*te;c.push(ye,Pe,ne),c.push(Pe,$,ne),G+=6}o.addGroup(f,G,M),f+=G,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Qr(n[t]);for(const r in i)e[r]=i[r]}return e}function Jp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Qp={clone:Qr,merge:Xt};var em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=Jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mf extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new H,_u=new Re,vu=new Re;class ln extends mf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,_u,vu),t.subVectors(vu,_u)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Ur=1;class nm extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Ir,Ur,e,t);r.layers=this.layers,this.add(r);const s=new ln(Ir,Ur,e,t);s.layers=this.layers,this.add(s);const a=new ln(Ir,Ur,e,t);a.layers=this.layers,this.add(a);const o=new ln(Ir,Ur,e,t);o.layers=this.layers,this.add(o);const c=new ln(Ir,Ur,e,t);c.layers=this.layers,this.add(c);const l=new ln(Ir,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gf extends Kt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class im extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qs(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ai});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===er&&(t.minFilter=Yt),new nm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const jo=new H,rm=new H,sm=new Xe;class _i{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=jo.subVectors(i,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sm.getNormalMatrix(e),r=this.coplanarPoint(jo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new fo,xa=new H;class _f{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],w=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,m-f,y-p).normalize(),i[1].setComponents(c+s,d+l,m+f,y+p).normalize(),i[2].setComponents(c+a,d+u,m+g,y+w).normalize(),i[3].setComponents(c-a,d-u,m-g,y-w).normalize(),i[4].setComponents(c-o,d-h,m-_,y-v).normalize(),t===ri)i[5].setComponents(c+o,d+h,m+_,y+v).normalize();else if(t===Wa)i[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function am(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,o),h.count===-1&&d.length===0&&n.bufferSubData(l,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class rr extends Xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let v=0;v<l;v++){const y=v*h-s;g.push(y,-w,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const v=w+l*p,y=w+l*(p+1),P=w+1+l*(p+1),b=w+1+l*p;f.push(v,y,b),f.push(y,P,b)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var om=`#ifdef USE_ALPHAHASH
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`
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
#endif`,yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
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
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
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
}`,y0=`#include <common>
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
}`,S0=`uniform vec3 diffuse;
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
}`,C0=`#define PHONG
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
}`,k0=`uniform vec3 color;
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
}`,O0=`uniform float rotation;
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
}`,We={alphahash_fragment:om,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:um,alphatest_fragment:hm,alphatest_pars_fragment:fm,aomap_fragment:dm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:_m,beginnormal_vertex:vm,bsdfs:xm,iridescence_fragment:ym,bumpmap_pars_fragment:Sm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Em,color_fragment:Tm,color_pars_fragment:Am,color_pars_vertex:Rm,color_vertex:Cm,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Im,displacementmap_vertex:Um,emissivemap_fragment:Nm,emissivemap_pars_fragment:Fm,colorspace_fragment:km,colorspace_pars_fragment:Om,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Hm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Qm,envmap_vertex:Vm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:qm,fog_pars_fragment:$m,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:jm,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Km,lights_pars_begin:Jm,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:rg,lights_physical_pars_fragment:sg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:vg,morphinstance_vertex:xg,morphcolor_vertex:yg,morphnormal_vertex:Sg,morphtarget_pars_vertex:wg,morphtarget_vertex:Mg,normal_fragment_begin:bg,normal_fragment_maps:Eg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ig,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:kg,dithering_fragment:Og,dithering_pars_fragment:Bg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:$g,skinning_vertex:Yg,skinnormal_vertex:jg,specularmap_fragment:Zg,specularmap_pars_fragment:Kg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:e0,transmission_pars_fragment:t0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:r0,worldpos_vertex:s0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:u0,cube_frag:h0,depth_vert:f0,depth_frag:d0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:g0,equirect_frag:_0,linedashed_vert:v0,linedashed_frag:x0,meshbasic_vert:y0,meshbasic_frag:S0,meshlambert_vert:w0,meshlambert_frag:M0,meshmatcap_vert:b0,meshmatcap_frag:E0,meshnormal_vert:T0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:P0,meshphysical_frag:L0,meshtoon_vert:D0,meshtoon_frag:I0,points_vert:U0,points_frag:N0,shadow_vert:F0,shadow_frag:k0,sprite_vert:O0,sprite_frag:B0},de={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Fn={basic:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Xt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Xt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Xt([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Xt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Xt([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Xt([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Xt([de.common,de.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Xt([de.lights,de.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Fn.physical={uniforms:Xt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ya={r:0,b:0,g:0},qi=new ai,z0=new at;function H0(n,e,t,i,r,s,a){const o=new Ze(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function _(w){let v=!1;const y=g(w);y===null?p(o,c):y&&y.isColor&&(p(y,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(w,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===uo)?(u===void 0&&(u=new Qt(new qs(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Qr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(v.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(qi)),u.material.toneMapped=ct.getTransfer(y.colorSpace)!==pt,(h!==y||d!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qt(new rr(2,2),new Vt({name:"BackgroundMaterial",uniforms:Qr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,v){w.getRGB(ya,pf(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(w,v=1){o.set(w),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:_,addToRenderList:m}}function G0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,R,N,D,F){let C=!1;const k=h(D,N,R);s!==k&&(s=k,l(s.object)),C=f(x,D,N,F),C&&g(x,D,N,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,y(x,R,N,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,R,N){const D=N.wireframe===!0;let F=i[x.id];F===void 0&&(F={},i[x.id]=F);let C=F[R.id];C===void 0&&(C={},F[R.id]=C);let k=C[D];return k===void 0&&(k=d(c()),C[D]=k),k}function d(x){const R=[],N=[],D=[];for(let F=0;F<t;F++)R[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:D,object:x,attributes:{},index:null}}function f(x,R,N,D){const F=s.attributes,C=R.attributes;let k=0;const V=N.getAttributes();for(const G in V)if(V[G].location>=0){const te=F[G];let le=C[G];if(le===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),te===void 0||te.attribute!==le||le&&te.data!==le.data)return!0;k++}return s.attributesNum!==k||s.index!==D}function g(x,R,N,D){const F={},C=R.attributes;let k=0;const V=N.getAttributes();for(const G in V)if(V[G].location>=0){let te=C[G];te===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(te=x.instanceColor));const le={};le.attribute=te,te&&te.data&&(le.data=te.data),F[G]=le,k++}s.attributes=F,s.attributesNum=k,s.index=D}function _(){const x=s.newAttributes;for(let R=0,N=x.length;R<N;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const N=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;N[x]=1,D[x]===0&&(n.enableVertexAttribArray(x),D[x]=1),F[x]!==R&&(n.vertexAttribDivisor(x,R),F[x]=R)}function w(){const x=s.newAttributes,R=s.enabledAttributes;for(let N=0,D=R.length;N<D;N++)R[N]!==x[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function v(x,R,N,D,F,C,k){k===!0?n.vertexAttribIPointer(x,R,N,F,C):n.vertexAttribPointer(x,R,N,D,F,C)}function y(x,R,N,D){_();const F=D.attributes,C=N.getAttributes(),k=R.defaultAttributeValues;for(const V in C){const G=C[V];if(G.location>=0){let K=F[V];if(K===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const te=K.normalized,le=K.itemSize,ye=e.get(K);if(ye===void 0)continue;const Pe=ye.buffer,$=ye.type,ne=ye.bytesPerElement,oe=$===n.INT||$===n.UNSIGNED_INT||K.gpuType===Jh;if(K.isInterleavedBufferAttribute){const ae=K.data,Ie=ae.stride,Le=K.offset;if(ae.isInstancedInterleavedBuffer){for(let O=0;O<G.locationSize;O++)p(G.location+O,ae.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let O=0;O<G.locationSize;O++)m(G.location+O);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let O=0;O<G.locationSize;O++)v(G.location+O,le/G.locationSize,$,te,Ie*ne,(Le+le/G.locationSize*O)*ne,oe)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae,K.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ae=0;ae<G.locationSize;ae++)v(G.location+ae,le/G.locationSize,$,te,le*ne,le/G.locationSize*ae*ne,oe)}}else if(k!==void 0){const te=k[V];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(G.location,te);break;case 3:n.vertexAttrib3fv(G.location,te);break;case 4:n.vertexAttrib4fv(G.location,te);break;default:n.vertexAttrib1fv(G.location,te)}}}}w()}function P(){U();for(const x in i){const R=i[x];for(const N in R){const D=R[N];for(const F in D)u(D[F].object),delete D[F];delete R[N]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const N in R){const D=R[N];for(const F in D)u(D[F].object),delete D[F];delete R[N]}delete i[x.id]}function E(x){for(const R in i){const N=i[R];if(N[x.id]===void 0)continue;const D=N[x.id];for(const F in D)u(D[F].object),delete D[F];delete N[x.id]}}function U(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function V0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function W0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Wt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const E=b===Jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ki&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!E)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:y,maxSamples:P}}function X0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _i,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,v=w*4;let y=p.clippingState||null;c.value=y,y=u(g,d,v,f);for(let P=0;P!==v;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)a.copy(h[v]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function q0(n){let e=new WeakMap;function t(a,o){return o===Cl?a.mapping=Zr:o===Pl&&(a.mapping=Kr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cl||o===Pl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new im(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qa extends mf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,xu=[.125,.215,.35,.446,.526,.582],Ki=20,Zo=new qa,yu=new Ze;let Ko=null,Jo=0,Qo=0,el=!1;const ji=(1+Math.sqrt(5))/2,Nr=1/ji,Su=[new H(-ji,Nr,0),new H(ji,Nr,0),new H(-Nr,0,ji),new H(Nr,0,ji),new H(0,ji,-Nr),new H(0,ji,Nr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Jo,Qo),this._renderer.xr.enabled=el,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Jr,format:Wt,colorSpace:zi,depthBuffer:!1},r=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(s)),this._blurMaterial=Y0(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,r){const o=new ln(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(yu),u.toneMapping=Ri,u.autoClear=!1;const f=new hf({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Qt(new qs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(yu),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Sa(r,w*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zr||e.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Sa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Su[(r-s-1)%Su.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let w=0;for(let E=0;E<Ki;++E){const U=E/_,M=Math.exp(-U*U/2);p.push(M),E===0?w+=M:E<m&&(w+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-Gr?r-v+Gr:0),b=4*(this._cubeSize-y);Sa(t,P,b,3*y,2*y),c.setRenderTarget(t),c.render(h,Zo)}}function $0(n){const e=[],t=[],i=[];let r=n;const s=n-Gr+1+xu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Gr?c=xu[a-n+Gr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,U=b>2?0:-1,M=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];w.set(M,_*g*b),v.set(d,m*g*b);const x=[b,b,b,b,b,b];y.set(x,p*g*b)}const P=new Xn;P.setAttribute("position",new Ln(w,_)),P.setAttribute("uv",new Ln(v,m)),P.setAttribute("faceIndex",new Ln(y,p)),e.push(P),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mu(n,e,t){const i=new Cn(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Y0(n,e,t){const i=new Float32Array(Ki),r=new H(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function bu(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Eu(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function j0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Cl||c===Pl,u=c===Zr||c===Kr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new wu(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new wu(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Z0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function K0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let v=0,y=w.length;v<y;v+=3){const P=w[v+0],b=w[v+1],E=w[v+2];d.push(P,b,b,E,E,P)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,y=w.length/3-1;v<y;v+=3){const P=v+0,b=v+1,E=v+2;d.push(P,b,b,E,E,P)}}else return;const m=new(af(d)?df:ff)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function J0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,f[m]);else{_.multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w];for(let w=0;w<_.length;w++)t.update(p,i,_[w])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Q0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e_(n,e,t){const i=new WeakMap,r=new Ot;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*P*4*h),E=new lf(b,y,P,h);E.type=Rn,E.needsUpdate=!0;const U=v*4;for(let x=0;x<h;x++){const R=m[x],N=p[x],D=w[x],F=y*P*4*x;for(let C=0;C<R.count;C++){const k=C*U;f===!0&&(r.fromBufferAttribute(R,C),b[F+k+0]=r.x,b[F+k+1]=r.y,b[F+k+2]=r.z,b[F+k+3]=0),g===!0&&(r.fromBufferAttribute(N,C),b[F+k+4]=r.x,b[F+k+5]=r.y,b[F+k+6]=r.z,b[F+k+7]=0),_===!0&&(r.fromBufferAttribute(D,C),b[F+k+8]=r.x,b[F+k+9]=r.y,b[F+k+10]=r.z,b[F+k+11]=D.itemSize===4?r.w:1)}}d={count:h,texture:E,size:new Re(y,P)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function t_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class $a extends Kt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ci&&(i=Oi),i===void 0&&u===Ps&&(i=Gs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xf=new Kt,yf=new $a(1,1);yf.compareFunction=sf;const Sf=new lf,wf=new Hp,Mf=new gf,Tu=[],Au=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tu[r];if(s===void 0&&(s=new Float32Array(r),Tu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function po(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function a_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Pu.set(i),n.uniformMatrix2fv(this.addr,!1,Pu),Pt(t,i)}}function o_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Cu.set(i),n.uniformMatrix3fv(this.addr,!1,Cu),Pt(t,i)}}function l_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ru.set(i),n.uniformMatrix4fv(this.addr,!1,Ru),Pt(t,i)}}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function d_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function __(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?yf:xf;t.setTexture2D(e||s,r)}function v_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wf,r)}function x_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mf,r)}function y_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sf,r)}function S_(n){switch(n){case 5126:return n_;case 35664:return i_;case 35665:return r_;case 35666:return s_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return y_}}function w_(n,e){n.uniform1fv(this.addr,e)}function M_(n,e){const t=rs(e,this.size,2);n.uniform2fv(this.addr,t)}function b_(n,e){const t=rs(e,this.size,3);n.uniform3fv(this.addr,t)}function E_(n,e){const t=rs(e,this.size,4);n.uniform4fv(this.addr,t)}function T_(n,e){const t=rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A_(n,e){const t=rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R_(n,e){const t=rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C_(n,e){n.uniform1iv(this.addr,e)}function P_(n,e){n.uniform2iv(this.addr,e)}function L_(n,e){n.uniform3iv(this.addr,e)}function D_(n,e){n.uniform4iv(this.addr,e)}function I_(n,e){n.uniform1uiv(this.addr,e)}function U_(n,e){n.uniform2uiv(this.addr,e)}function N_(n,e){n.uniform3uiv(this.addr,e)}function F_(n,e){n.uniform4uiv(this.addr,e)}function k_(n,e,t){const i=this.cache,r=e.length,s=po(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xf,s[a])}function O_(n,e,t){const i=this.cache,r=e.length,s=po(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wf,s[a])}function B_(n,e,t){const i=this.cache,r=e.length,s=po(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mf,s[a])}function z_(n,e,t){const i=this.cache,r=e.length,s=po(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Sf,s[a])}function H_(n){switch(n){case 5126:return w_;case 35664:return M_;case 35665:return b_;case 35666:return E_;case 35674:return T_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return I_;case 36294:return U_;case 36295:return N_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class G_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=S_(t.type)}}class V_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}}class W_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Lu(n,e){n.seq.push(e),n.map[e.id]=e}function X_(n,e,t){const i=n.name,r=i.length;for(tl.lastIndex=0;;){const s=tl.exec(i),a=tl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Lu(t,l===void 0?new G_(o,n,e):new V_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new W_(o),Lu(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);X_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q_=37297;let $_=0;function Y_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function j_(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===Va&&t===Ga?i="LinearDisplayP3ToLinearSRGB":e===Ga&&t===Va&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case ho:return[i,"LinearTransferOETF"];case Un:case tc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Iu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Y_(n.getShaderSource(e),a)}else return r}function Z_(n,e){const t=j_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K_(n,e){let t;switch(e){case rp:t="Linear";break;case sp:t="Reinhard";break;case ap:t="OptimizedCineon";break;case jh:t="ACESFilmic";break;case lp:t="AgX";break;case cp:t="Neutral";break;case op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Q_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ev(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ss(n){return n!==""}function Uu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(tv,iv)}const nv=new Map;function iv(n,e){let t=We[e];if(t===void 0){const i=nv.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(n){return n.replace(rv,sv)}function sv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ku(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function av(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function ov(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Kr:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function cv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case np:e="ENVMAP_BLENDING_MIX";break;case ip:e="ENVMAP_BLENDING_ADD";break}return e}function uv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=av(t),l=ov(t),u=lv(t),h=cv(t),d=uv(t),f=J_(t),g=Q_(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?We.tonemapping_pars_fragment:"",t.toneMapping!==Ri?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Ul(a),a=Uu(a,t),a=Nu(a,t),o=Ul(o),o=Uu(o,t),o=Nu(o,t),a=Fu(a),o=Fu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=w+m+a,y=w+p+o,P=Du(r,r.VERTEX_SHADER,v),b=Du(r,r.FRAGMENT_SHADER,y);r.attachShader(_,P),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(R){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(P).trim(),F=r.getShaderInfoLog(b).trim();let C=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(C=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,b);else{const V=Iu(r,P,"vertex"),G=Iu(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+V+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||F==="")&&(k=!1);k&&(R.diagnostics={runnable:C,programLog:N,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(P),r.deleteShader(b),U=new ka(r,_),M=ev(r,_)}let U;this.getUniforms=function(){return U===void 0&&E(this),U};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,q_)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=b,this}let fv=0;class dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pv(e),t.set(e,i)),i}}class pv{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}}function mv(n,e,t,i,r,s,a){const o=new cf,c=new dv,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,N,D){const F=N.fog,C=D.geometry,k=M.isMeshStandardMaterial?N.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),G=V&&V.mapping===uo?V.image.height:null,K=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const te=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,le=te!==void 0?te.length:0;let ye=0;C.morphAttributes.position!==void 0&&(ye=1),C.morphAttributes.normal!==void 0&&(ye=2),C.morphAttributes.color!==void 0&&(ye=3);let Pe,$,ne,oe;if(K){const Qe=Fn[K];Pe=Qe.vertexShader,$=Qe.fragmentShader}else Pe=M.vertexShader,$=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),oe=c.getFragmentShaderID(M);const ae=n.getRenderTarget(),Ie=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,O=!!M.map,fe=!!M.matcap,Y=!!V,Ae=!!M.aoMap,Me=!!M.lightMap,_e=!!M.bumpMap,xe=!!M.normalMap,Fe=!!M.displacementMap,ut=!!M.emissiveMap,I=!!M.metalnessMap,T=!!M.roughnessMap,j=M.anisotropy>0,ee=M.clearcoat>0,ie=M.dispersion>0,se=M.iridescence>0,Te=M.sheen>0,me=M.transmission>0,pe=j&&!!M.anisotropyMap,Ne=ee&&!!M.clearcoatMap,ue=ee&&!!M.clearcoatNormalMap,be=ee&&!!M.clearcoatRoughnessMap,Je=se&&!!M.iridescenceMap,De=se&&!!M.iridescenceThicknessMap,ve=Te&&!!M.sheenColorMap,Be=Te&&!!M.sheenRoughnessMap,$e=!!M.specularMap,ot=!!M.specularColorMap,Ge=!!M.specularIntensityMap,S=me&&!!M.transmissionMap,B=me&&!!M.thicknessMap,W=!!M.gradientMap,re=!!M.alphaMap,ce=M.alphaTest>0,ze=!!M.alphaHash,Ye=!!M.extensions;let _t=Ri;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Lt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:$,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Le,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:zi,alphaToCoverage:!!M.alphaToCoverage,map:O,matcap:fe,envMap:Y,envMapMode:Y&&V.mapping,envMapCubeUVHeight:G,aoMap:Ae,lightMap:Me,bumpMap:_e,normalMap:xe,displacementMap:d&&Fe,emissiveMap:ut,normalMapObjectSpace:xe&&M.normalMapType===bp,normalMapTangentSpace:xe&&M.normalMapType===Mp,metalnessMap:I,roughnessMap:T,anisotropy:j,anisotropyMap:pe,clearcoat:ee,clearcoatMap:Ne,clearcoatNormalMap:ue,clearcoatRoughnessMap:be,dispersion:ie,iridescence:se,iridescenceMap:Je,iridescenceThicknessMap:De,sheen:Te,sheenColorMap:ve,sheenRoughnessMap:Be,specularMap:$e,specularColorMap:ot,specularIntensityMap:Ge,transmission:me,transmissionMap:S,thicknessMap:B,gradientMap:W,opaque:M.transparent===!1&&M.blending===Wr&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:ze,combine:M.combine,mapUv:O&&_(M.map.channel),aoMapUv:Ae&&_(M.aoMap.channel),lightMapUv:Me&&_(M.lightMap.channel),bumpMapUv:_e&&_(M.bumpMap.channel),normalMapUv:xe&&_(M.normalMap.channel),displacementMapUv:Fe&&_(M.displacementMap.channel),emissiveMapUv:ut&&_(M.emissiveMap.channel),metalnessMapUv:I&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:pe&&_(M.anisotropyMap.channel),clearcoatMapUv:Ne&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(M.sheenRoughnessMap.channel),specularMapUv:$e&&_(M.specularMap.channel),specularColorMapUv:ot&&_(M.specularColorMap.channel),specularIntensityMapUv:Ge&&_(M.specularIntensityMap.channel),transmissionMapUv:S&&_(M.transmissionMap.channel),thicknessMapUv:B&&_(M.thicknessMap.channel),alphaMapUv:re&&_(M.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xe||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(O||re),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ye,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,useLegacyLights:n._useLegacyLights,decodeVideoTexture:O&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===kn,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(x,M),v(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),M.push(o.mask)}function y(M){const x=g[M.type];let R;if(x){const N=Fn[x];R=Qp.clone(N.uniforms)}else R=M.uniforms;return R}function P(M,x){let R;for(let N=0,D=u.length;N<D;N++){const F=u[N];if(F.cacheKey===x){R=F,++R.usedTimes;break}}return R===void 0&&(R=new hv(n,x,M,s),u.push(R)),R}function b(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:U}}function gv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _v(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||_v),i.length>1&&i.sort(d||Ou),r.length>1&&r.sort(d||Ou)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function vv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Bu,n.set(i,[a])):r>=s.length?(a=new Bu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function yv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sv=0;function wv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Mv(n){const e=new xv,t=yv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new at,a=new at;function o(l,u){let h=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let g=0,_=0,m=0,p=0,w=0,v=0,y=0,P=0,b=0,E=0,U=0;l.sort(wv);const M=u===!0?Math.PI:1;for(let R=0,N=l.length;R<N;R++){const D=l[R],F=D.color,C=D.intensity,k=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*C*M,d+=F.g*C*M,f+=F.b*C*M;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],C);U++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const K=D.shadow,te=t.get(D);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=G,g++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(F).multiplyScalar(C*M),G.distance=k,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[m]=G;const K=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,K.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[m]=K.matrix,D.castShadow){const te=t.get(D);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.spotShadow[m]=te,i.spotShadowMap[m]=V,P++}m++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(F).multiplyScalar(C),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=G,p++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*M),G.distance=D.distance,G.decay=D.decay,D.castShadow){const K=D.shadow,te=t.get(D);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,i.pointShadow[_]=te,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=D.shadow.matrix,y++}i.point[_]=G,_++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(C*M),G.groundColor.copy(D.groundColor).multiplyScalar(C*M),i.hemi[w]=G,w++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==w||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==P||x.numSpotMaps!==b||x.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=w,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=P+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=U,x.directionalLength=g,x.pointLength=_,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=w,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=P,x.numSpotMaps=b,x.numLightProbes=U,i.version=Sv++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const v=l[p];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function zu(n){const e=new Mv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function bv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new zu(n),e.set(r,[o])):s>=a.length?(o=new zu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Ev extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tv extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Av=`void main() {
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
}`;function Cv(n,e,t){let i=new _f;const r=new Re,s=new Re,a=new Ot,o=new Ev({depthPacking:wp}),c=new Tv,l={},u=t.maxTextureSize,h={[gn]:tn,[tn]:gn,[kn]:kn},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xn;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let p=this.type;this.render=function(b,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ai),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==ei&&this.type===ei,F=p===ei&&this.type!==ei;for(let C=0,k=b.length;C<k;C++){const V=b[C],G=V.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const K=G.getFrameExtents();if(r.multiply(K),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,G.mapSize.y=s.y)),G.map===null||D===!0||F===!0){const le=this.type!==ei?{minFilter:vt,magFilter:vt}:{};G.map!==null&&G.map.dispose(),G.map=new Cn(r.x,r.y,le),G.map.texture.name=V.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const te=G.getViewportCount();for(let le=0;le<te;le++){const ye=G.getViewport(le);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),N.viewport(a),G.updateMatrices(V,le),i=G.getFrustum(),y(E,U,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===ei&&w(G,U),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,x,R)};function w(b,E){const U=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Cn(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,U,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,U,f,_,null)}function v(b,E,U,M){let x=null;const R=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)x=R;else if(x=U.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=x.uuid,D=E.uuid;let F=l[N];F===void 0&&(F={},l[N]=F);let C=F[D];C===void 0&&(C=x.clone(),F[D]=C,E.addEventListener("dispose",P)),x=C}if(x.visible=E.visible,x.wireframe=E.wireframe,M===ei?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=U}return x}function y(b,E,U,M,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ei)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const D=e.update(b),F=b.material;if(Array.isArray(F)){const C=D.groups;for(let k=0,V=C.length;k<V;k++){const G=C[k],K=F[G.materialIndex];if(K&&K.visible){const te=v(b,K,M,x);b.onBeforeShadow(n,b,E,U,D,te,G),n.renderBufferDirect(U,null,D,te,b,G),b.onAfterShadow(n,b,E,U,D,te,G)}}}else if(F.visible){const C=v(b,F,M,x);b.onBeforeShadow(n,b,E,U,D,C,null),n.renderBufferDirect(U,null,D,C,b,null),b.onAfterShadow(n,b,E,U,D,C,null)}}const N=b.children;for(let D=0,F=N.length;D<F;D++)y(N[D],E,U,M,x)}function P(b){b.target.removeEventListener("dispose",P);for(const U in l){const M=l[U],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}function Pv(n){function e(){let S=!1;const B=new Ot;let W=null;const re=new Ot(0,0,0,0);return{setMask:function(ce){W!==ce&&!S&&(n.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){S=ce},setClear:function(ce,ze,Ye,_t,Lt){Lt===!0&&(ce*=_t,ze*=_t,Ye*=_t),B.set(ce,ze,Ye,_t),re.equals(B)===!1&&(n.clearColor(ce,ze,Ye,_t),re.copy(B))},reset:function(){S=!1,W=null,re.set(-1,0,0,0)}}}function t(){let S=!1,B=null,W=null,re=null;return{setTest:function(ce){ce?oe(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(ce){B!==ce&&!S&&(n.depthMask(ce),B=ce)},setFunc:function(ce){if(W!==ce){switch(ce){case jd:n.depthFunc(n.NEVER);break;case Zd:n.depthFunc(n.ALWAYS);break;case Kd:n.depthFunc(n.LESS);break;case za:n.depthFunc(n.LEQUAL);break;case Jd:n.depthFunc(n.EQUAL);break;case Qd:n.depthFunc(n.GEQUAL);break;case ep:n.depthFunc(n.GREATER);break;case tp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=ce}},setLocked:function(ce){S=ce},setClear:function(ce){re!==ce&&(n.clearDepth(ce),re=ce)},reset:function(){S=!1,B=null,W=null,re=null}}}function i(){let S=!1,B=null,W=null,re=null,ce=null,ze=null,Ye=null,_t=null,Lt=null;return{setTest:function(Qe){S||(Qe?oe(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(Qe){B!==Qe&&!S&&(n.stencilMask(Qe),B=Qe)},setFunc:function(Qe,Mt,dt){(W!==Qe||re!==Mt||ce!==dt)&&(n.stencilFunc(Qe,Mt,dt),W=Qe,re=Mt,ce=dt)},setOp:function(Qe,Mt,dt){(ze!==Qe||Ye!==Mt||_t!==dt)&&(n.stencilOp(Qe,Mt,dt),ze=Qe,Ye=Mt,_t=dt)},setLocked:function(Qe){S=Qe},setClear:function(Qe){Lt!==Qe&&(n.clearStencil(Qe),Lt=Qe)},reset:function(){S=!1,B=null,W=null,re=null,ce=null,ze=null,Ye=null,_t=null,Lt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,w=null,v=null,y=null,P=null,b=new Ze(0,0,0),E=0,U=!1,M=null,x=null,R=null,N=null,D=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,k=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),C=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),C=k>=2);let G=null,K={};const te=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),ye=new Ot().fromArray(te),Pe=new Ot().fromArray(le);function $(S,B,W,re){const ce=new Uint8Array(4),ze=n.createTexture();n.bindTexture(S,ze),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<W;Ye++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(B,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(B+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ze}const ne={};ne[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),s.setFunc(za),_e(!1),xe(Sc),oe(n.CULL_FACE),Ae(Ai);function oe(S){l[S]!==!0&&(n.enable(S),l[S]=!0)}function ae(S){l[S]!==!1&&(n.disable(S),l[S]=!1)}function Ie(S,B){return u[S]!==B?(n.bindFramebuffer(S,B),u[S]=B,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=B),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=B),!0):!1}function Le(S,B){let W=d,re=!1;if(S){W=h.get(B),W===void 0&&(W=[],h.set(B,W));const ce=S.textures;if(W.length!==ce.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ze=0,Ye=ce.length;ze<Ye;ze++)W[ze]=n.COLOR_ATTACHMENT0+ze;W.length=ce.length,re=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,re=!0);re&&n.drawBuffers(W)}function O(S){return f!==S?(n.useProgram(S),f=S,!0):!1}const fe={[Zi]:n.FUNC_ADD,[Dd]:n.FUNC_SUBTRACT,[Id]:n.FUNC_REVERSE_SUBTRACT};fe[Ud]=n.MIN,fe[Nd]=n.MAX;const Y={[Fd]:n.ZERO,[kd]:n.ONE,[Od]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[Wd]:n.SRC_ALPHA_SATURATE,[Gd]:n.DST_COLOR,[zd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[Vd]:n.ONE_MINUS_DST_COLOR,[Hd]:n.ONE_MINUS_DST_ALPHA,[Xd]:n.CONSTANT_COLOR,[qd]:n.ONE_MINUS_CONSTANT_COLOR,[$d]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(S,B,W,re,ce,ze,Ye,_t,Lt,Qe){if(S===Ai){g===!0&&(ae(n.BLEND),g=!1);return}if(g===!1&&(oe(n.BLEND),g=!0),S!==Ld){if(S!==_||Qe!==U){if((m!==Zi||v!==Zi)&&(n.blendEquation(n.FUNC_ADD),m=Zi,v=Zi),Qe)switch(S){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}p=null,w=null,y=null,P=null,b.set(0,0,0),E=0,_=S,U=Qe}return}ce=ce||B,ze=ze||W,Ye=Ye||re,(B!==m||ce!==v)&&(n.blendEquationSeparate(fe[B],fe[ce]),m=B,v=ce),(W!==p||re!==w||ze!==y||Ye!==P)&&(n.blendFuncSeparate(Y[W],Y[re],Y[ze],Y[Ye]),p=W,w=re,y=ze,P=Ye),(_t.equals(b)===!1||Lt!==E)&&(n.blendColor(_t.r,_t.g,_t.b,Lt),b.copy(_t),E=Lt),_=S,U=!1}function Me(S,B){S.side===kn?ae(n.CULL_FACE):oe(n.CULL_FACE);let W=S.side===tn;B&&(W=!W),_e(W),S.blending===Wr&&S.transparent===!1?Ae(Ai):Ae(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const re=S.stencilWrite;a.setTest(re),re&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ut(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(S){M!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),M=S)}function xe(S){S!==Rd?(oe(n.CULL_FACE),S!==x&&(S===Sc?n.cullFace(n.BACK):S===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),x=S}function Fe(S){S!==R&&(C&&n.lineWidth(S),R=S)}function ut(S,B,W){S?(oe(n.POLYGON_OFFSET_FILL),(N!==B||D!==W)&&(n.polygonOffset(B,W),N=B,D=W)):ae(n.POLYGON_OFFSET_FILL)}function I(S){S?oe(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function T(S){S===void 0&&(S=n.TEXTURE0+F-1),G!==S&&(n.activeTexture(S),G=S)}function j(S,B,W){W===void 0&&(G===null?W=n.TEXTURE0+F-1:W=G);let re=K[W];re===void 0&&(re={type:void 0,texture:void 0},K[W]=re),(re.type!==S||re.texture!==B)&&(G!==W&&(n.activeTexture(W),G=W),n.bindTexture(S,B||ne[S]),re.type=S,re.texture=B)}function ee(){const S=K[G];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Je(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ve(S){ye.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),ye.copy(S))}function Be(S){Pe.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),Pe.copy(S))}function $e(S,B){let W=c.get(B);W===void 0&&(W=new WeakMap,c.set(B,W));let re=W.get(S);re===void 0&&(re=n.getUniformBlockIndex(B,S.name),W.set(S,re))}function ot(S,B){const re=c.get(B).get(S);o.get(B)!==re&&(n.uniformBlockBinding(B,re,S.__bindingPointIndex),o.set(B,re))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},G=null,K={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,w=null,v=null,y=null,P=null,b=new Ze(0,0,0),E=0,U=!1,M=null,x=null,R=null,N=null,D=null,ye.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:oe,disable:ae,bindFramebuffer:Ie,drawBuffers:Le,useProgram:O,setBlending:Ae,setMaterial:Me,setFlipSided:_e,setCullFace:xe,setLineWidth:Fe,setPolygonOffset:ut,setScissorTest:I,activeTexture:T,bindTexture:j,unbindTexture:ee,compressedTexImage2D:ie,compressedTexImage3D:se,texImage2D:Je,texImage3D:De,updateUBOMapping:$e,uniformBlockBinding:ot,texStorage2D:ue,texStorage3D:be,texSubImage2D:Te,texSubImage3D:me,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ne,scissor:ve,viewport:Be,reset:Ge}}function Lv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return f?new OffscreenCanvas(I,T):Xa("canvas")}function _(I,T,j){let ee=1;const ie=ut(I);if((ie.width>j||ie.height>j)&&(ee=j/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const se=Math.floor(ee*ie.width),Te=Math.floor(ee*ie.height);h===void 0&&(h=g(se,Te));const me=T?g(se,Te):h;return me.width=se,me.height=Te,me.getContext("2d").drawImage(I,0,0,se,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+se+"x"+Te+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==vt&&I.minFilter!==Yt}function p(I){n.generateMipmap(I)}function w(I,T,j,ee,ie=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let se=T;if(T===n.RED&&(j===n.FLOAT&&(se=n.R32F),j===n.HALF_FLOAT&&(se=n.R16F),j===n.UNSIGNED_BYTE&&(se=n.R8)),T===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(se=n.R8UI),j===n.UNSIGNED_SHORT&&(se=n.R16UI),j===n.UNSIGNED_INT&&(se=n.R32UI),j===n.BYTE&&(se=n.R8I),j===n.SHORT&&(se=n.R16I),j===n.INT&&(se=n.R32I)),T===n.RG&&(j===n.FLOAT&&(se=n.RG32F),j===n.HALF_FLOAT&&(se=n.RG16F),j===n.UNSIGNED_BYTE&&(se=n.RG8)),T===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(se=n.RG8UI),j===n.UNSIGNED_SHORT&&(se=n.RG16UI),j===n.UNSIGNED_INT&&(se=n.RG32UI),j===n.BYTE&&(se=n.RG8I),j===n.SHORT&&(se=n.RG16I),j===n.INT&&(se=n.RG32I)),T===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),T===n.RGBA){const Te=ie?Ha:ct.getTransfer(ee);j===n.FLOAT&&(se=n.RGBA32F),j===n.HALF_FLOAT&&(se=n.RGBA16F),j===n.UNSIGNED_BYTE&&(se=Te===pt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==vt&&I.minFilter!==Yt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function y(I){const T=I.target;T.removeEventListener("dispose",y),b(T),T.isVideoTexture&&u.delete(T)}function P(I){const T=I.target;T.removeEventListener("dispose",P),U(T)}function b(I){const T=i.get(I);if(T.__webglInit===void 0)return;const j=I.source,ee=d.get(j);if(ee){const ie=ee[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(I),Object.keys(ee).length===0&&d.delete(j)}i.remove(I)}function E(I){const T=i.get(I);n.deleteTexture(T.__webglTexture);const j=I.source,ee=d.get(j);delete ee[T.__cacheKey],a.memory.textures--}function U(I){const T=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ie=0;ie<T.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=I.textures;for(let ee=0,ie=j.length;ee<ie;ee++){const se=i.get(j[ee]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(j[ee])}i.remove(I)}let M=0;function x(){M=0}function R(){const I=M;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),M+=1,I}function N(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function D(I,T){const j=i.get(I);if(I.isVideoTexture&&xe(I),I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){const ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(j,I,T);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+T)}function F(I,T){const j=i.get(I);if(I.version>0&&j.__version!==I.version){ye(j,I,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+T)}function C(I,T){const j=i.get(I);if(I.version>0&&j.__version!==I.version){ye(j,I,T);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+T)}function k(I,T){const j=i.get(I);if(I.version>0&&j.__version!==I.version){Pe(j,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+T)}const V={[Ll]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},G={[vt]:n.NEAREST,[up]:n.NEAREST_MIPMAP_NEAREST,[ys]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[er]:n.LINEAR_MIPMAP_LINEAR},K={[Ep]:n.NEVER,[Lp]:n.ALWAYS,[Tp]:n.LESS,[sf]:n.LEQUAL,[Ap]:n.EQUAL,[Pp]:n.GEQUAL,[Rp]:n.GREATER,[Cp]:n.NOTEQUAL};function te(I,T){if(T.type===Rn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yt||T.magFilter===Eo||T.magFilter===ys||T.magFilter===er||T.minFilter===Yt||T.minFilter===Eo||T.minFilter===ys||T.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,V[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,V[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,V[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,G[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vt||T.minFilter!==ys&&T.minFilter!==er||T.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function le(I,T){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",y));const ee=T.source;let ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));const se=N(T);if(se!==I.__cacheKey){ie[se]===void 0&&(ie[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ie[se].usedTimes++;const Te=ie[I.__cacheKey];Te!==void 0&&(ie[I.__cacheKey].usedTimes--,Te.usedTimes===0&&E(T)),I.__cacheKey=se,I.__webglTexture=ie[se].texture}return j}function ye(I,T,j){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);const ie=le(I,T),se=T.source;t.bindTexture(ee,I.__webglTexture,n.TEXTURE0+j);const Te=i.get(se);if(se.version!==Te.__version||ie===!0){t.activeTexture(n.TEXTURE0+j);const me=ct.getPrimaries(ct.workingColorSpace),pe=T.colorSpace===wi?null:ct.getPrimaries(T.colorSpace),Ne=T.colorSpace===wi||me===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ue=_(T.image,!1,r.maxTextureSize);ue=Fe(T,ue);const be=s.convert(T.format,T.colorSpace),Je=s.convert(T.type);let De=w(T.internalFormat,be,Je,T.colorSpace,T.isVideoTexture);te(ee,T);let ve;const Be=T.mipmaps,$e=T.isVideoTexture!==!0,ot=Te.__version===void 0||ie===!0,Ge=se.dataReady,S=v(T,ue);if(T.isDepthTexture)De=n.DEPTH_COMPONENT16,T.type===Rn?De=n.DEPTH_COMPONENT32F:T.type===Oi?De=n.DEPTH_COMPONENT24:T.type===Gs&&(De=n.DEPTH24_STENCIL8),ot&&($e?t.texStorage2D(n.TEXTURE_2D,1,De,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,De,ue.width,ue.height,0,be,Je,null));else if(T.isDataTexture)if(Be.length>0){$e&&ot&&t.texStorage2D(n.TEXTURE_2D,S,De,Be[0].width,Be[0].height);for(let B=0,W=Be.length;B<W;B++)ve=Be[B],$e?Ge&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,ve.width,ve.height,be,Je,ve.data):t.texImage2D(n.TEXTURE_2D,B,De,ve.width,ve.height,0,be,Je,ve.data);T.generateMipmaps=!1}else $e?(ot&&t.texStorage2D(n.TEXTURE_2D,S,De,ue.width,ue.height),Ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,be,Je,ue.data)):t.texImage2D(n.TEXTURE_2D,0,De,ue.width,ue.height,0,be,Je,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,De,Be[0].width,Be[0].height,ue.depth);for(let B=0,W=Be.length;B<W;B++)ve=Be[B],T.format!==Wt?be!==null?$e?Ge&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,ue.depth,be,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,De,ve.width,ve.height,ue.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,ue.depth,be,Je,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,De,ve.width,ve.height,ue.depth,0,be,Je,ve.data)}else{$e&&ot&&t.texStorage2D(n.TEXTURE_2D,S,De,Be[0].width,Be[0].height);for(let B=0,W=Be.length;B<W;B++)ve=Be[B],T.format!==Wt?be!==null?$e?Ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,B,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Ge&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,ve.width,ve.height,be,Je,ve.data):t.texImage2D(n.TEXTURE_2D,B,De,ve.width,ve.height,0,be,Je,ve.data)}else if(T.isDataArrayTexture)$e?(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,De,ue.width,ue.height,ue.depth),Ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,Je,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,be,Je,ue.data);else if(T.isData3DTexture)$e?(ot&&t.texStorage3D(n.TEXTURE_3D,S,De,ue.width,ue.height,ue.depth),Ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,Je,ue.data)):t.texImage3D(n.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,be,Je,ue.data);else if(T.isFramebufferTexture){if(ot)if($e)t.texStorage2D(n.TEXTURE_2D,S,De,ue.width,ue.height);else{let B=ue.width,W=ue.height;for(let re=0;re<S;re++)t.texImage2D(n.TEXTURE_2D,re,De,B,W,0,be,Je,null),B>>=1,W>>=1}}else if(Be.length>0){if($e&&ot){const B=ut(Be[0]);t.texStorage2D(n.TEXTURE_2D,S,De,B.width,B.height)}for(let B=0,W=Be.length;B<W;B++)ve=Be[B],$e?Ge&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,be,Je,ve):t.texImage2D(n.TEXTURE_2D,B,De,be,Je,ve);T.generateMipmaps=!1}else if($e){if(ot){const B=ut(ue);t.texStorage2D(n.TEXTURE_2D,S,De,B.width,B.height)}Ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Je,ue)}else t.texImage2D(n.TEXTURE_2D,0,De,be,Je,ue);m(T)&&p(ee),Te.__version=se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Pe(I,T,j){if(T.image.length!==6)return;const ee=le(I,T),ie=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+j);const se=i.get(ie);if(ie.version!==se.__version||ee===!0){t.activeTexture(n.TEXTURE0+j);const Te=ct.getPrimaries(ct.workingColorSpace),me=T.colorSpace===wi?null:ct.getPrimaries(T.colorSpace),pe=T.colorSpace===wi||Te===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,ue=T.image[0]&&T.image[0].isDataTexture,be=[];for(let W=0;W<6;W++)!Ne&&!ue?be[W]=_(T.image[W],!0,r.maxCubemapSize):be[W]=ue?T.image[W].image:T.image[W],be[W]=Fe(T,be[W]);const Je=be[0],De=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),Be=w(T.internalFormat,De,ve,T.colorSpace),$e=T.isVideoTexture!==!0,ot=se.__version===void 0||ee===!0,Ge=ie.dataReady;let S=v(T,Je);te(n.TEXTURE_CUBE_MAP,T);let B;if(Ne){$e&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,S,Be,Je.width,Je.height);for(let W=0;W<6;W++){B=be[W].mipmaps;for(let re=0;re<B.length;re++){const ce=B[re];T.format!==Wt?De!==null?$e?Ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,ce.width,ce.height,De,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,Be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,ce.width,ce.height,De,ve,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,Be,ce.width,ce.height,0,De,ve,ce.data)}}}else{if(B=T.mipmaps,$e&&ot){B.length>0&&S++;const W=ut(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,S,Be,W.width,W.height)}for(let W=0;W<6;W++)if(ue){$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,be[W].width,be[W].height,De,ve,be[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Be,be[W].width,be[W].height,0,De,ve,be[W].data);for(let re=0;re<B.length;re++){const ze=B[re].image[W].image;$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,ze.width,ze.height,De,ve,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,Be,ze.width,ze.height,0,De,ve,ze.data)}}else{$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,De,ve,be[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Be,De,ve,be[W]);for(let re=0;re<B.length;re++){const ce=B[re];$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,De,ve,ce.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,Be,De,ve,ce.image[W])}}}m(T)&&p(n.TEXTURE_CUBE_MAP),se.__version=ie.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function $(I,T,j,ee,ie,se){const Te=s.convert(j.format,j.colorSpace),me=s.convert(j.type),pe=w(j.internalFormat,Te,me,j.colorSpace);if(!i.get(T).__hasExternalTextures){const ue=Math.max(1,T.width>>se),be=Math.max(1,T.height>>se);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,se,pe,ue,be,T.depth,0,Te,me,null):t.texImage2D(ie,se,pe,ue,be,0,Te,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ie,i.get(j).__webglTexture,0,Me(T)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ie,i.get(j).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(I,T,j){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer&&!T.stencilBuffer){let ee=n.DEPTH_COMPONENT24;if(j||_e(T)){const ie=T.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Rn?ee=n.DEPTH_COMPONENT32F:ie.type===Oi&&(ee=n.DEPTH_COMPONENT24));const se=Me(T);_e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,ee,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ee,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(T.depthBuffer&&T.stencilBuffer){const ee=Me(T);j&&_e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,T.width,T.height):_e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{const ee=T.textures;for(let ie=0;ie<ee.length;ie++){const se=ee[ie],Te=s.convert(se.format,se.colorSpace),me=s.convert(se.type),pe=w(se.internalFormat,Te,me,se.colorSpace),Ne=Me(T);j&&_e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,pe,T.width,T.height):_e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,pe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const ee=i.get(T.depthTexture).__webglTexture,ie=Me(T);if(T.depthTexture.format===Ci)_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Ps)_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ae(I){const T=i.get(I),j=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");oe(T.__webglFramebuffer,I)}else if(j){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=n.createRenderbuffer(),ne(T.__webglDepthbuffer[ee],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),ne(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(I,T,j){const ee=i.get(I);T!==void 0&&$(ee.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&ae(I)}function Le(I){const T=I.texture,j=i.get(I),ee=i.get(T);I.addEventListener("dispose",P);const ie=I.textures,se=I.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,a.memory.textures++),se){j.__webglFramebuffer=[];for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[me]=[];for(let pe=0;pe<T.mipmaps.length;pe++)j.__webglFramebuffer[me][pe]=n.createFramebuffer()}else j.__webglFramebuffer[me]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let me=0;me<T.mipmaps.length;me++)j.__webglFramebuffer[me]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Te)for(let me=0,pe=ie.length;me<pe;me++){const Ne=i.get(ie[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&_e(I)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const pe=ie[me];j.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[me]);const Ne=s.convert(pe.format,pe.colorSpace),ue=s.convert(pe.type),be=w(pe.internalFormat,Ne,ue,pe.colorSpace,I.isXRRenderTarget===!0),Je=Me(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,be,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,j.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),te(n.TEXTURE_CUBE_MAP,T);for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)$(j.__webglFramebuffer[me][pe],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,pe);else $(j.__webglFramebuffer[me],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(T)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let me=0,pe=ie.length;me<pe;me++){const Ne=ie[me],ue=i.get(Ne);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),te(n.TEXTURE_2D,Ne),$(j.__webglFramebuffer,I,Ne,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(Ne)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,ee.__webglTexture),te(me,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)$(j.__webglFramebuffer[pe],I,T,n.COLOR_ATTACHMENT0,me,pe);else $(j.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,me,0);m(T)&&p(me),t.unbindTexture()}I.depthBuffer&&ae(I)}function O(I){const T=I.textures;for(let j=0,ee=T.length;j<ee;j++){const ie=T[j];if(m(ie)){const se=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ie).__webglTexture;t.bindTexture(se,Te),p(se),t.unbindTexture()}}}const fe=[],Y=[];function Ae(I){if(I.samples>0){if(_e(I)===!1){const T=I.textures,j=I.width,ee=I.height;let ie=n.COLOR_BUFFER_BIT;const se=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(I),me=T.length>1;if(me)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);const Ne=i.get(T[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,j,ee,0,0,j,ee,ie,n.NEAREST),c===!0&&(fe.length=0,Y.length=0,fe.push(n.COLOR_ATTACHMENT0+pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(fe.push(se),Y.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);const Ne=i.get(T[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Me(I){return Math.min(r.maxSamples,I.samples)}function _e(I){const T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(I){const T=a.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function Fe(I,T){const j=I.colorSpace,ee=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==zi&&j!==wi&&(ct.getTransfer(j)===pt?(ee!==Wt||ie!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=C,this.setTextureCube=k,this.rebindTextures=Ie,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=$,this.useMultisampledRTT=_e}function Dv(n,e){function t(i,r=wi){let s;const a=ct.getTransfer(r);if(i===ki)return n.UNSIGNED_BYTE;if(i===Qh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ef)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hp)return n.BYTE;if(i===fp)return n.SHORT;if(i===Kh)return n.UNSIGNED_SHORT;if(i===Jh)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===pp)return n.ALPHA;if(i===mp)return n.RGB;if(i===Wt)return n.RGBA;if(i===gp)return n.LUMINANCE;if(i===_p)return n.LUMINANCE_ALPHA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===Ps)return n.DEPTH_STENCIL;if(i===vp)return n.RED;if(i===tf)return n.RED_INTEGER;if(i===xp)return n.RG;if(i===nf)return n.RG_INTEGER;if(i===rf)return n.RGBA_INTEGER;if(i===To||i===Ao||i===Ro||i===Co)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===Tc||i===Ac||i===Rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Pc||i===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cc||i===Pc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Ic||i===Uc||i===Nc||i===Fc||i===kc||i===Oc||i===Bc||i===zc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===qc||i===$c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Po)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yp||i===Yc||i===jc||i===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Iv extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wa extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nv=`
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

}`;class kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Vt({vertexShader:Nv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qt(new rr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Ov extends mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new kv,m=t.getContextAttributes();let p=null,w=null;const v=[],y=[],P=new Re;let b=null;const E=new ln;E.layers.enable(1),E.viewport=new Ot;const U=new ln;U.layers.enable(2),U.viewport=new Ot;const M=[E,U],x=new Iv;x.layers.enable(1),x.layers.enable(2);let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=v[$];return ne===void 0&&(ne=new nl,v[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=v[$];return ne===void 0&&(ne=new nl,v[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=v[$];return ne===void 0&&(ne=new nl,v[$]=ne),ne.getHandSpace()};function D($){const ne=y.indexOf($.inputSource);if(ne===-1)return;const oe=v[ne];oe!==void 0&&(oe.update($.inputSource,$.frame,l||a),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",C);for(let $=0;$<v.length;$++){const ne=y[$];ne!==null&&(y[$]=null,v[$].disconnect(ne))}R=null,N=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",F),r.addEventListener("inputsourceschange",C),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Cn(f.framebufferWidth,f.framebufferHeight,{format:Wt,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,oe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Ps:Ci,oe=m.stencil?Gs:Oi);const Ie={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Cn(d.textureWidth,d.textureHeight,{format:Wt,type:ki,depthTexture:new $a(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C($){for(let ne=0;ne<$.removed.length;ne++){const oe=$.removed[ne],ae=y.indexOf(oe);ae>=0&&(y[ae]=null,v[ae].disconnect(oe))}for(let ne=0;ne<$.added.length;ne++){const oe=$.added[ne];let ae=y.indexOf(oe);if(ae===-1){for(let Le=0;Le<v.length;Le++)if(Le>=y.length){y.push(oe),ae=Le;break}else if(y[Le]===null){y[Le]=oe,ae=Le;break}if(ae===-1)break}const Ie=v[ae];Ie&&Ie.connect(oe)}}const k=new H,V=new H;function G($,ne,oe){k.setFromMatrixPosition(ne.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const ae=k.distanceTo(V),Ie=ne.projectionMatrix.elements,Le=oe.projectionMatrix.elements,O=Ie[14]/(Ie[10]-1),fe=Ie[14]/(Ie[10]+1),Y=(Ie[9]+1)/Ie[5],Ae=(Ie[9]-1)/Ie[5],Me=(Ie[8]-1)/Ie[0],_e=(Le[8]+1)/Le[0],xe=O*Me,Fe=O*_e,ut=ae/(-Me+_e),I=ut*-Me;ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(I),$.translateZ(ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const T=O+ut,j=fe+ut,ee=xe-I,ie=Fe+(ae-I),se=Y*fe/j*T,Te=Ae*fe/j*T;$.projectionMatrix.makePerspective(ee,ie,se,Te,T,j),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function K($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),x.near=U.near=E.near=$.near,x.far=U.far=E.far=$.far,(R!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,N=x.far,E.near=R,E.far=N,U.near=R,U.far=N,E.updateProjectionMatrix(),U.updateProjectionMatrix(),$.updateProjectionMatrix());const ne=$.parent,oe=x.cameras;K(x,ne);for(let ae=0;ae<oe.length;ae++)K(oe[ae],ne);oe.length===2?G(x,E,U):x.projectionMatrix.copy(E.projectionMatrix),te($,x,ne)};function te($,ne,oe){oe===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Il*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null};let le=null;function ye($,ne){if(u=ne.getViewerPose(l||a),g=ne,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ae=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Le=0;Le<oe.length;Le++){const O=oe[Le];let fe=null;if(f!==null)fe=f.getViewport(O);else{const Ae=h.getViewSubImage(d,O);fe=Ae.viewport,Le===0&&(e.setRenderTargetTextures(w,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(w))}let Y=M[Le];Y===void 0&&(Y=new ln,Y.layers.enable(Le),Y.viewport=new Ot,M[Le]=Y),Y.matrix.fromArray(O.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(O.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(fe.x,fe.y,fe.width,fe.height),Le===0&&(x.matrix.copy(Y.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(Y)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Le=h.getDepthInformation(oe[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let oe=0;oe<v.length;oe++){const ae=y[oe],Ie=v[oe];ae!==null&&Ie!==void 0&&Ie.update(ae,ne,l||a)}_.render(e,x),le&&le($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Pe=new vf;Pe.setAnimationLoop(ye),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const $i=new ai,Bv=new at;function zv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),v=w.envMap,y=w.envMapRotation;if(v&&(m.envMap.value=v,$i.copy(y),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(Bv.makeRotationFromEuler($i)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*P,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const y=v.program;i.uniformBlockBinding(w,y)}function l(w,v){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(w,P);const b=e.render.frame;s[w.id]!==b&&(d(w),s[w.id]=b)}function u(w){const v=h();w.__bindingPointIndex=v;const y=n.createBuffer(),P=w.__size,b=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const v=r[w.id],y=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const U=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,x=U.length;M<x;M++){const R=U[M];if(f(R,b,M,P)===!0){const N=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let C=0;C<D.length;C++){const k=D[C],V=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+F,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,v,y,P){const b=w.value,E=v+"_"+y;if(P[E]===void 0)return typeof b=="number"||typeof b=="boolean"?P[E]=b:P[E]=b.clone(),!0;{const U=P[E];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return P[E]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function g(w){const v=w.uniforms;let y=0;const P=16;for(let E=0,U=v.length;E<U;E++){const M=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,R=M.length;x<R;x++){const N=M[x],D=Array.isArray(N.value)?N.value:[N.value];for(let F=0,C=D.length;F<C;F++){const k=D[F],V=_(k),G=y%P;G!==0&&P-G<V.boundary&&(y+=P-G),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=V.storage}}}const b=y%P;return b>0&&(y+=P-b),w.__size=y,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Gv{constructor(e={}){const{canvas:t=Up(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const v=this;let y=!1,P=0,b=0,E=null,U=-1,M=null;const x=new Ot,R=new Ot;let N=null;const D=new Ze(0);let F=0,C=t.width,k=t.height,V=1,G=null,K=null;const te=new Ot(0,0,C,k),le=new Ot(0,0,C,k);let ye=!1;const Pe=new _f;let $=!1,ne=!1;const oe=new at,ae=new H,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return E===null?V:1}let O=i;function fe(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",W,!1),O===null){const z="webgl2";if(O=fe(z,A),O===null)throw fe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Y,Ae,Me,_e,xe,Fe,ut,I,T,j,ee,ie,se,Te,me,pe,Ne,ue,be,Je,De,ve,Be,$e;function ot(){Y=new Z0(O),Y.init(),ve=new Dv(O,Y),Ae=new W0(O,Y,e,ve),Me=new Pv(O),_e=new Q0(O),xe=new gv,Fe=new Lv(O,Y,Me,xe,Ae,ve,_e),ut=new q0(v),I=new j0(v),T=new am(O),Be=new G0(O,T),j=new K0(O,T,_e,Be),ee=new t_(O,j,T,_e),be=new e_(O,Ae,Fe),pe=new X0(xe),ie=new mv(v,ut,I,Y,Ae,Be,pe),se=new zv(v,xe),Te=new vv,me=new bv(Y),ue=new H0(v,ut,I,Me,ee,d,c),Ne=new Cv(v,ee,Ae),$e=new Hv(O,_e,Ae,Me),Je=new V0(O,Y,_e),De=new J0(O,Y,_e),_e.programs=ie.programs,v.capabilities=Ae,v.extensions=Y,v.properties=xe,v.renderLists=Te,v.shadowMap=Ne,v.state=Me,v.info=_e}ot();const Ge=new Ov(v,O);this.xr=Ge,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Y.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Y.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(C,k,!1))},this.getSize=function(A){return A.set(C,k)},this.setSize=function(A,z,Z=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,k=z,t.width=Math.floor(A*V),t.height=Math.floor(z*V),Z===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(C*V,k*V).floor()},this.setDrawingBufferSize=function(A,z,Z){C=A,k=z,V=Z,t.width=Math.floor(A*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,z,Z,X){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,z,Z,X),Me.viewport(x.copy(te).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,z,Z,X){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,z,Z,X),Me.scissor(R.copy(le).multiplyScalar(V).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){Me.setScissorTest(ye=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,z=!0,Z=!0){let X=0;if(A){let q=!1;if(E!==null){const ge=E.texture.format;q=ge===rf||ge===nf||ge===tf}if(q){const ge=E.texture.type,Se=ge===ki||ge===Oi||ge===Kh||ge===Gs||ge===Qh||ge===ef,we=ue.getClearColor(),Ue=ue.getClearAlpha(),ke=we.r,Ve=we.g,je=we.b;Se?(f[0]=ke,f[1]=Ve,f[2]=je,f[3]=Ue,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=ke,g[1]=Ve,g[2]=je,g[3]=Ue,O.clearBufferiv(O.COLOR,0,g))}else X|=O.COLOR_BUFFER_BIT}z&&(X|=O.DEPTH_BUFFER_BIT),Z&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Te.dispose(),me.dispose(),xe.dispose(),ut.dispose(),I.dispose(),ee.dispose(),Be.dispose(),$e.dispose(),ie.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Qe),Ge.removeEventListener("sessionend",Mt),dt.stop()};function S(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=_e.autoReset,z=Ne.enabled,Z=Ne.autoUpdate,X=Ne.needsUpdate,q=Ne.type;ot(),_e.autoReset=A,Ne.enabled=z,Ne.autoUpdate=Z,Ne.needsUpdate=X,Ne.type=q}function W(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const z=A.target;z.removeEventListener("dispose",re),ce(z)}function ce(A){ze(A),xe.remove(A)}function ze(A){const z=xe.get(A).programs;z!==void 0&&(z.forEach(function(Z){ie.releaseProgram(Z)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,X,q,ge){z===null&&(z=Ie);const Se=q.isMesh&&q.matrixWorld.determinant()<0,we=wd(A,z,Z,X,q);Me.setMaterial(X,Se);let Ue=Z.index,ke=1;if(X.wireframe===!0){if(Ue=j.getWireframeAttribute(Z),Ue===void 0)return;ke=2}const Ve=Z.drawRange,je=Z.attributes.position;let bt=Ve.start*ke,Bt=(Ve.start+Ve.count)*ke;ge!==null&&(bt=Math.max(bt,ge.start*ke),Bt=Math.min(Bt,(ge.start+ge.count)*ke)),Ue!==null?(bt=Math.max(bt,0),Bt=Math.min(Bt,Ue.count)):je!=null&&(bt=Math.max(bt,0),Bt=Math.min(Bt,je.count));const rn=Bt-bt;if(rn<0||rn===1/0)return;Be.setup(q,X,we,Z,Ue);let $n,it=Je;if(Ue!==null&&($n=T.get(Ue),it=De,it.setIndex($n)),q.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*Le()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(q.isLine){let Oe=X.linewidth;Oe===void 0&&(Oe=1),Me.setLineWidth(Oe*Le()),q.isLineSegments?it.setMode(O.LINES):q.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else q.isPoints?it.setMode(O.POINTS):q.isSprite&&it.setMode(O.TRIANGLES);if(q.isBatchedMesh)q._multiDrawInstances!==null?it.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances):it.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)it.renderInstances(bt,rn,q.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,cs=Math.min(Z.instanceCount,Oe);it.renderInstances(bt,rn,cs)}else it.render(bt,rn)};function Ye(A,z,Z){A.transparent===!0&&A.side===kn&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,ea(A,z,Z),A.side=gn,A.needsUpdate=!0,ea(A,z,Z),A.side=kn):ea(A,z,Z)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),m=me.get(Z),m.init(z),w.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(v._useLegacyLights);const X=new Set;return A.traverse(function(q){const ge=q.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const we=ge[Se];Ye(we,Z,q),X.add(we)}else Ye(ge,Z,q),X.add(ge)}),w.pop(),m=null,X},this.compileAsync=function(A,z,Z=null){const X=this.compile(A,z,Z);return new Promise(q=>{function ge(){if(X.forEach(function(Se){xe.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){q(A);return}setTimeout(ge,10)}Y.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let _t=null;function Lt(A){_t&&_t(A)}function Qe(){dt.stop()}function Mt(){dt.start()}const dt=new vf;dt.setAnimationLoop(Lt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(A){_t=A,Ge.setAnimationLoop(A),A===null?dt.stop():dt.start()},Ge.addEventListener("sessionstart",Qe),Ge.addEventListener("sessionend",Mt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(z),z=Ge.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,E),m=me.get(A,w.length),m.init(z),w.push(m),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Pe.setFromProjectionMatrix(oe),ne=this.localClippingEnabled,$=pe.init(this.clippingPlanes,ne),_=Te.get(A,p.length),_.init(),p.push(_),oi(A,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,K);const Z=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1;Z&&ue.addToRenderList(_,A),this.info.render.frame++,$===!0&&pe.beginShadows();const X=m.state.shadowsArray;Ne.render(X,A,z),$===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,ge=_.transmissive;if(m.setupLights(v._useLegacyLights),z.isArrayCamera){const Se=z.cameras;if(ge.length>0)for(let we=0,Ue=Se.length;we<Ue;we++){const ke=Se[we];li(q,ge,A,ke)}Z&&ue.render(A);for(let we=0,Ue=Se.length;we<Ue;we++){const ke=Se[we];un(_,A,ke,ke.viewport)}}else ge.length>0&&li(q,ge,A,z),Z&&ue.render(A),un(_,A,z);E!==null&&(Fe.updateMultisampleRenderTarget(E),Fe.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(v,A,z),Be.resetDefaultState(),U=-1,M=null,w.pop(),w.length>0?(m=w[w.length-1],$===!0&&pe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function oi(A,z,Z,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){X&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const Se=ee.update(A),we=A.material;we.visible&&_.push(A,Se,we,Z,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const Se=ee.update(A),we=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ae.copy(Se.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(we)){const Ue=Se.groups;for(let ke=0,Ve=Ue.length;ke<Ve;ke++){const je=Ue[ke],bt=we[je.materialIndex];bt&&bt.visible&&_.push(A,Se,bt,Z,ae.z,je)}}else we.visible&&_.push(A,Se,we,Z,ae.z,null)}}const ge=A.children;for(let Se=0,we=ge.length;Se<we;Se++)oi(ge[Se],z,Z,X)}function un(A,z,Z,X){const q=A.opaque,ge=A.transmissive,Se=A.transparent;m.setupLightsView(Z),$===!0&&pe.setGlobalState(v.clippingPlanes,Z),X&&Me.viewport(x.copy(X)),q.length>0&&qn(q,z,Z),ge.length>0&&qn(ge,z,Z),Se.length>0&&qn(Se,z,Z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function li(A,z,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Cn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Jr:ki,minFilter:er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ge=m.state.transmissionRenderTarget[X.id],Se=X.viewport||x;ge.setSize(Se.z,Se.w);const we=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(D),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const Ue=v.toneMapping;v.toneMapping=Ri;const ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),$===!0&&pe.setGlobalState(v.clippingPlanes,X),qn(A,Z,X),Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let je=0,bt=z.length;je<bt;je++){const Bt=z[je],rn=Bt.object,$n=Bt.geometry,it=Bt.material,Oe=Bt.group;if(it.side===kn&&rn.layers.test(X.layers)){const cs=it.side;it.side=tn,it.needsUpdate=!0,ls(rn,Z,X,$n,it,Oe),it.side=cs,it.needsUpdate=!0,Ve=!0}}Ve===!0&&(Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge))}v.setRenderTarget(we),v.setClearColor(D,F),ke!==void 0&&(X.viewport=ke),v.toneMapping=Ue}function qn(A,z,Z){const X=z.isScene===!0?z.overrideMaterial:null;for(let q=0,ge=A.length;q<ge;q++){const Se=A[q],we=Se.object,Ue=Se.geometry,ke=X===null?Se.material:X,Ve=Se.group;we.layers.test(Z.layers)&&ls(we,z,Z,Ue,ke,Ve)}}function ls(A,z,Z,X,q,ge){A.onBeforeRender(v,z,Z,X,q,ge),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(v,z,Z,X,A,ge),q.transparent===!0&&q.side===kn&&q.forceSinglePass===!1?(q.side=tn,q.needsUpdate=!0,v.renderBufferDirect(Z,z,X,q,A,ge),q.side=gn,q.needsUpdate=!0,v.renderBufferDirect(Z,z,X,q,A,ge),q.side=kn):v.renderBufferDirect(Z,z,X,q,A,ge),A.onAfterRender(v,z,Z,X,q,ge)}function ea(A,z,Z){z.isScene!==!0&&(z=Ie);const X=xe.get(A),q=m.state.lights,ge=m.state.shadowsArray,Se=q.state.version,we=ie.getParameters(A,q.state,ge,z,Z),Ue=ie.getProgramCacheKey(we);let ke=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?I:ut).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",re),ke=new Map,X.programs=ke);let Ve=ke.get(Ue);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===Se)return vc(A,we),Ve}else we.uniforms=ie.getUniforms(A),A.onBuild(Z,we,v),A.onBeforeCompile(we,v),Ve=ie.acquireProgram(we,Ue),ke.set(Ue,Ve),X.uniforms=we.uniforms;const je=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=pe.uniform),vc(A,we),X.needsLights=bd(A),X.lightsStateVersion=Se,X.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function _c(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ka.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function vc(A,z){const Z=xe.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function wd(A,z,Z,X,q){z.isScene!==!0&&(z=Ie),Fe.resetTextureUnits();const ge=z.fog,Se=X.isMeshStandardMaterial?z.environment:null,we=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:zi,Ue=(X.isMeshStandardMaterial?I:ut).get(X.envMap||Se),ke=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),je=!!Z.morphAttributes.position,bt=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color;let rn=Ri;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(rn=v.toneMapping);const $n=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=$n!==void 0?$n.length:0,Oe=xe.get(X),cs=m.state.lights;if($===!0&&(ne===!0||A!==M)){const hn=A===M&&X.id===U;pe.setState(X,A,hn)}let mt=!1;X.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==cs.state.version||Oe.outputColorSpace!==we||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Ue||X.fog===!0&&Oe.fog!==ge||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==pe.numPlanes||Oe.numIntersection!==pe.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ve||Oe.morphTargets!==je||Oe.morphNormals!==bt||Oe.morphColors!==Bt||Oe.toneMapping!==rn||Oe.morphTargetsCount!==it)&&(mt=!0):(mt=!0,Oe.__version=X.version);let Hi=Oe.currentProgram;mt===!0&&(Hi=ea(X,z,q));let xc=!1,us=!1,wo=!1;const zt=Hi.getUniforms(),ci=Oe.uniforms;if(Me.useProgram(Hi.program)&&(xc=!0,us=!0,wo=!0),X.id!==U&&(U=X.id,us=!0),xc||M!==A){zt.setValue(O,"projectionMatrix",A.projectionMatrix),zt.setValue(O,"viewMatrix",A.matrixWorldInverse);const hn=zt.map.cameraPosition;hn!==void 0&&hn.setValue(O,ae.setFromMatrixPosition(A.matrixWorld)),Ae.logarithmicDepthBuffer&&zt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&zt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,us=!0,wo=!0)}if(q.isSkinnedMesh){zt.setOptional(O,q,"bindMatrix"),zt.setOptional(O,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),zt.setValue(O,"boneTexture",hn.boneTexture,Fe))}q.isBatchedMesh&&(zt.setOptional(O,q,"batchingTexture"),zt.setValue(O,"batchingTexture",q._matricesTexture,Fe));const Mo=Z.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0)&&be.update(q,Z,Hi),(us||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,zt.setValue(O,"receiveShadow",q.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ci.envMap.value=Ue,ci.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(ci.envMapIntensity.value=z.environmentIntensity),us&&(zt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Md(ci,wo),ge&&X.fog===!0&&se.refreshFogUniforms(ci,ge),se.refreshMaterialUniforms(ci,X,V,k,m.state.transmissionRenderTarget[A.id]),ka.upload(O,_c(Oe),ci,Fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ka.upload(O,_c(Oe),ci,Fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&zt.setValue(O,"center",q.center),zt.setValue(O,"modelViewMatrix",q.modelViewMatrix),zt.setValue(O,"normalMatrix",q.normalMatrix),zt.setValue(O,"modelMatrix",q.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const hn=X.uniformsGroups;for(let bo=0,Ed=hn.length;bo<Ed;bo++){const yc=hn[bo];$e.update(yc,Hi),$e.bind(yc,Hi)}}return Hi}function Md(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function bd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,z,Z){xe.get(A.texture).__webglTexture=z,xe.get(A.depthTexture).__webglTexture=Z;const X=xe.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=Z===void 0,X.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const Z=xe.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Z=0){E=A,P=z,b=Z;let X=!0,q=null,ge=!1,Se=!1;if(A){const Ue=xe.get(A);Ue.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(O.FRAMEBUFFER,null),X=!1):Ue.__webglFramebuffer===void 0?Fe.setupRenderTarget(A):Ue.__hasExternalTextures&&Fe.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const Ve=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?q=Ve[z][Z]:q=Ve[z],ge=!0):A.samples>0&&Fe.useMultisampledRTT(A)===!1?q=xe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?q=Ve[Z]:q=Ve,x.copy(A.viewport),R.copy(A.scissor),N=A.scissorTest}else x.copy(te).multiplyScalar(V).floor(),R.copy(le).multiplyScalar(V).floor(),N=ye;if(Me.bindFramebuffer(O.FRAMEBUFFER,q)&&X&&Me.drawBuffers(A,q),Me.viewport(x),Me.scissor(R),Me.setScissorTest(N),ge){const Ue=xe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,Z)}else if(Se){const Ue=xe.get(A.texture),ke=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,Z||0,ke)}U=-1},this.readRenderTargetPixels=function(A,z,Z,X,q,ge,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Me.bindFramebuffer(O.FRAMEBUFFER,we);try{const Ue=A.texture,ke=Ue.format,Ve=Ue.type;if(!Ae.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&Z>=0&&Z<=A.height-q&&O.readPixels(z,Z,X,q,ve.convert(ke),ve.convert(Ve),ge)}finally{const Ue=E!==null?xe.get(E).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,z,Z=0){const X=Math.pow(2,-Z),q=Math.floor(z.image.width*X),ge=Math.floor(z.image.height*X);Fe.setTexture2D(z,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,A.x,A.y,q,ge),Me.unbindTexture()},this.copyTextureToTexture=function(A,z,Z,X=0){const q=z.image.width,ge=z.image.height,Se=ve.convert(Z.format),we=ve.convert(Z.type);Fe.setTexture2D(Z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment),z.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,A.x,A.y,q,ge,Se,we,z.image.data):z.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Se,z.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,X,A.x,A.y,Se,we,z.image),X===0&&Z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Z,X,q=0){const ge=A.max.x-A.min.x,Se=A.max.y-A.min.y,we=A.max.z-A.min.z,Ue=ve.convert(X.format),ke=ve.convert(X.type);let Ve;if(X.isData3DTexture)Fe.setTexture3D(X,0),Ve=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Fe.setTexture2DArray(X,0),Ve=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const je=O.getParameter(O.UNPACK_ROW_LENGTH),bt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Bt=O.getParameter(O.UNPACK_SKIP_PIXELS),rn=O.getParameter(O.UNPACK_SKIP_ROWS),$n=O.getParameter(O.UNPACK_SKIP_IMAGES),it=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,it.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),Z.isDataTexture||Z.isData3DTexture?O.texSubImage3D(Ve,q,z.x,z.y,z.z,ge,Se,we,Ue,ke,it.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Ve,q,z.x,z.y,z.z,ge,Se,we,Ue,it.data):O.texSubImage3D(Ve,q,z.x,z.y,z.z,ge,Se,we,Ue,ke,it),O.pixelStorei(O.UNPACK_ROW_LENGTH,je),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,rn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$n),q===0&&X.generateMipmaps&&O.generateMipmap(Ve),Me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Fe.setTextureCube(A,0):A.isData3DTexture?Fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Fe.setTexture2DArray(A,0):Fe.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){P=0,b=0,E=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tc?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===ho?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class il extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bf extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=vt,u=vt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ef extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ya=new H,ja=new H,Hu=new at,gs=new nc,Ma=new fo,rl=new H,Gu=new H;let Vv=class extends nn{constructor(e=new Xn,t=new Ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ya.fromBufferAttribute(t,r-1),ja.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ya.distanceTo(ja);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;Hu.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Hu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),w=u.getX(_+1),v=ba(this,e,gs,c,p,w);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ba(this,e,gs,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=ba(this,e,gs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ba(this,e,gs,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ba(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ya.fromBufferAttribute(a,r),ja.fromBufferAttribute(a,s),t.distanceSqToSegment(Ya,ja,rl,Gu)>i)return;rl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(rl);if(!(c<e.near||c>e.far))return{distance:c,point:Gu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Vu=new H,Wu=new H;class sl extends Vv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vu.fromBufferAttribute(t,r),Wu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vu.distanceTo(Wu);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class al extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);const qu={type:"change"},ol={type:"start"},$u={type:"end"},Ea=new nc,Yu=new _i,Wv=Math.cos(70*Ip.DEG2RAD);class Tf extends mr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Ne),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qu),i.update(),s=r.NONE},this.update=function(){const S=new H,B=new cr().setFromUnitVectors(e.up,new H(0,1,0)),W=B.clone().invert(),re=new H,ce=new cr,ze=new H,Ye=2*Math.PI;return function(Lt=null){const Qe=i.object.position;S.copy(Qe).sub(i.target),S.applyQuaternion(B),o.setFromVector3(S),i.autoRotate&&s===r.NONE&&N(x(Lt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Mt=i.minAzimuthAngle,dt=i.maxAzimuthAngle;isFinite(Mt)&&isFinite(dt)&&(Mt<-Math.PI?Mt+=Ye:Mt>Math.PI&&(Mt-=Ye),dt<-Math.PI?dt+=Ye:dt>Math.PI&&(dt-=Ye),Mt<=dt?o.theta=Math.max(Mt,Math.min(dt,o.theta)):o.theta=o.theta>(Mt+dt)/2?Math.max(Mt,o.theta):Math.min(dt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let oi=!1;if(i.zoomToCursor&&b||i.object.isOrthographicCamera)o.radius=te(o.radius);else{const un=o.radius;o.radius=te(o.radius*l),oi=un!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion(W),Qe.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&b){let un=null;if(i.object.isPerspectiveCamera){const li=S.length();un=te(li*l);const qn=li-un;i.object.position.addScaledVector(y,qn),i.object.updateMatrixWorld(),oi=!!qn}else if(i.object.isOrthographicCamera){const li=new H(P.x,P.y,0);li.unproject(i.object);const qn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),oi=qn!==i.object.zoom;const ls=new H(P.x,P.y,0);ls.unproject(i.object),i.object.position.sub(ls).add(li),i.object.updateMatrixWorld(),un=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;un!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(un).add(i.object.position):(Ea.origin.copy(i.object.position),Ea.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ea.direction))<Wv?e.lookAt(i.target):(Yu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ea.intersectPlane(Yu,i.target))))}else if(i.object.isOrthographicCamera){const un=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),un!==i.object.zoom&&(i.object.updateProjectionMatrix(),oi=!0)}return l=1,b=!1,oi||re.distanceToSquared(i.object.position)>a||8*(1-ce.dot(i.object.quaternion))>a||ze.distanceToSquared(i.target)>a?(i.dispatchEvent(qu),re.copy(i.object.position),ce.copy(i.object.quaternion),ze.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",I),i.domElement.removeEventListener("pointercancel",j),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",j),i.domElement.getRootNode().removeEventListener("keydown",me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Xu,c=new Xu;let l=1;const u=new H,h=new Re,d=new Re,f=new Re,g=new Re,_=new Re,m=new Re,p=new Re,w=new Re,v=new Re,y=new H,P=new Re;let b=!1;const E=[],U={};let M=!1;function x(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function R(S){const B=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*B)}function N(S){c.theta-=S}function D(S){c.phi-=S}const F=function(){const S=new H;return function(W,re){S.setFromMatrixColumn(re,0),S.multiplyScalar(-W),u.add(S)}}(),C=function(){const S=new H;return function(W,re){i.screenSpacePanning===!0?S.setFromMatrixColumn(re,1):(S.setFromMatrixColumn(re,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(W),u.add(S)}}(),k=function(){const S=new H;return function(W,re){const ce=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;S.copy(ze).sub(i.target);let Ye=S.length();Ye*=Math.tan(i.object.fov/2*Math.PI/180),F(2*W*Ye/ce.clientHeight,i.object.matrix),C(2*re*Ye/ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(W*(i.object.right-i.object.left)/i.object.zoom/ce.clientWidth,i.object.matrix),C(re*(i.object.top-i.object.bottom)/i.object.zoom/ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(S,B){if(!i.zoomToCursor)return;b=!0;const W=i.domElement.getBoundingClientRect(),re=S-W.left,ce=B-W.top,ze=W.width,Ye=W.height;P.x=re/ze*2-1,P.y=-(ce/Ye)*2+1,y.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function te(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function le(S){h.set(S.clientX,S.clientY)}function ye(S){K(S.clientX,S.clientX),p.set(S.clientX,S.clientY)}function Pe(S){g.set(S.clientX,S.clientY)}function $(S){d.set(S.clientX,S.clientY),f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const B=i.domElement;N(2*Math.PI*f.x/B.clientHeight),D(2*Math.PI*f.y/B.clientHeight),h.copy(d),i.update()}function ne(S){w.set(S.clientX,S.clientY),v.subVectors(w,p),v.y>0?V(R(v.y)):v.y<0&&G(R(v.y)),p.copy(w),i.update()}function oe(S){_.set(S.clientX,S.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),k(m.x,m.y),g.copy(_),i.update()}function ae(S){K(S.clientX,S.clientY),S.deltaY<0?G(R(S.deltaY)):S.deltaY>0&&V(R(S.deltaY)),i.update()}function Ie(S){let B=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),B=!0;break}B&&(S.preventDefault(),i.update())}function Le(S){if(E.length===1)h.set(S.pageX,S.pageY);else{const B=ot(S),W=.5*(S.pageX+B.x),re=.5*(S.pageY+B.y);h.set(W,re)}}function O(S){if(E.length===1)g.set(S.pageX,S.pageY);else{const B=ot(S),W=.5*(S.pageX+B.x),re=.5*(S.pageY+B.y);g.set(W,re)}}function fe(S){const B=ot(S),W=S.pageX-B.x,re=S.pageY-B.y,ce=Math.sqrt(W*W+re*re);p.set(0,ce)}function Y(S){i.enableZoom&&fe(S),i.enablePan&&O(S)}function Ae(S){i.enableZoom&&fe(S),i.enableRotate&&Le(S)}function Me(S){if(E.length==1)d.set(S.pageX,S.pageY);else{const W=ot(S),re=.5*(S.pageX+W.x),ce=.5*(S.pageY+W.y);d.set(re,ce)}f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const B=i.domElement;N(2*Math.PI*f.x/B.clientHeight),D(2*Math.PI*f.y/B.clientHeight),h.copy(d)}function _e(S){if(E.length===1)_.set(S.pageX,S.pageY);else{const B=ot(S),W=.5*(S.pageX+B.x),re=.5*(S.pageY+B.y);_.set(W,re)}m.subVectors(_,g).multiplyScalar(i.panSpeed),k(m.x,m.y),g.copy(_)}function xe(S){const B=ot(S),W=S.pageX-B.x,re=S.pageY-B.y,ce=Math.sqrt(W*W+re*re);w.set(0,ce),v.set(0,Math.pow(w.y/p.y,i.zoomSpeed)),V(v.y),p.copy(w);const ze=(S.pageX+B.x)*.5,Ye=(S.pageY+B.y)*.5;K(ze,Ye)}function Fe(S){i.enableZoom&&xe(S),i.enablePan&&_e(S)}function ut(S){i.enableZoom&&xe(S),i.enableRotate&&Me(S)}function I(S){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",j)),!Be(S)&&(De(S),S.pointerType==="touch"?ue(S):ee(S)))}function T(S){i.enabled!==!1&&(S.pointerType==="touch"?be(S):ie(S))}function j(S){switch(ve(S),E.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",j),i.dispatchEvent($u),s=r.NONE;break;case 1:const B=E[0],W=U[B];ue({pointerId:B,pageX:W.x,pageY:W.y});break}}function ee(S){let B;switch(S.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case _r.DOLLY:if(i.enableZoom===!1)return;ye(S),s=r.DOLLY;break;case _r.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;Pe(S),s=r.PAN}else{if(i.enableRotate===!1)return;le(S),s=r.ROTATE}break;case _r.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;le(S),s=r.ROTATE}else{if(i.enablePan===!1)return;Pe(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ol)}function ie(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;$(S);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(S);break;case r.PAN:if(i.enablePan===!1)return;oe(S);break}}function se(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(ol),ae(Te(S)),i.dispatchEvent($u))}function Te(S){const B=S.deltaMode,W={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(B){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return S.ctrlKey&&!M&&(W.deltaY*=10),W}function me(S){S.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(S){S.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Ne(S){i.enabled===!1||i.enablePan===!1||Ie(S)}function ue(S){switch($e(S),E.length){case 1:switch(i.touches.ONE){case vr.ROTATE:if(i.enableRotate===!1)return;Le(S),s=r.TOUCH_ROTATE;break;case vr.PAN:if(i.enablePan===!1)return;O(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(S),s=r.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ae(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ol)}function be(S){switch($e(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;_e(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ut(S),i.update();break;default:s=r.NONE}}function Je(S){i.enabled!==!1&&S.preventDefault()}function De(S){E.push(S.pointerId)}function ve(S){delete U[S.pointerId];for(let B=0;B<E.length;B++)if(E[B]==S.pointerId){E.splice(B,1);return}}function Be(S){for(let B=0;B<E.length;B++)if(E[B]==S.pointerId)return!0;return!1}function $e(S){let B=U[S.pointerId];B===void 0&&(B=new Re,U[S.pointerId]=B),B.set(S.pageX,S.pageY)}function ot(S){const B=S.pointerId===E[0]?E[1]:E[0];return U[B]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",I),i.domElement.addEventListener("pointercancel",j),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}}function Xv(n){return n.length>=2&&n[0]===31&&n[1]===139}function qv(n){return n.length>=2&&n[0]===120&&(n[1]===1||n[1]===94||n[1]===156||n[1]===218)}function $v(n){const e=n.slice(0,8),t=new DataView(e.buffer,e.byteOffset),i=t.getUint32(0,!0),r=t.getUint32(4,!0);if(e.length===8&&i>0&&i<100&&r===n.byteLength-8)return i}const Yv=new TextEncoder,jv=new TextDecoder;function Zv(n){return Yv.encode(n)}function Kv(n){return jv.decode(n instanceof Uint8Array?n:Uint8Array.from(n))}class Af{constructor(e,t){L(this,"littleEndian");L(this,"offset");L(this,"array");L(this,"view");L(this,"readByte",this.readNumber.bind(this,"getInt8",1));L(this,"readShort",this.readNumber.bind(this,"getInt16",2));L(this,"readInt",this.readNumber.bind(this,"getInt32",4));L(this,"readFloat",this.readNumber.bind(this,"getFloat32",4));L(this,"readDouble",this.readNumber.bind(this,"getFloat64",8));this.littleEndian=(t==null?void 0:t.littleEndian)??!1,this.offset=(t==null?void 0:t.offset)??0,this.array=e instanceof Uint8Array?e:new Uint8Array(e),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}readNumber(e,t){this.requireAvailable(t);const i=this.view[e](this.offset,this.littleEndian);return this.offset+=t,i}requireAvailable(e){if(e<0)throw new Error(`Cannot read negative byte length ${e}`);if(this.offset+e>this.array.byteLength)throw new Error(`Cannot read ${e} bytes at offset ${this.offset}; input length is ${this.array.byteLength}`)}readBytes(e){this.requireAvailable(e);const t=this.array.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){this.requireAvailable(2);const e=this.view.getUint16(this.offset,this.littleEndian);this.offset+=2;const t=this.readBytes(e);return Kv(t)}}class Rf{constructor(e){L(this,"littleEndian");L(this,"offset");L(this,"buffer");L(this,"array");L(this,"view");L(this,"writeByte",this.writeNumber.bind(this,"setInt8",1));L(this,"writeShort",this.writeNumber.bind(this,"setInt16",2));L(this,"writeInt",this.writeNumber.bind(this,"setInt32",4));L(this,"writeFloat",this.writeNumber.bind(this,"setFloat32",4));L(this,"writeDouble",this.writeNumber.bind(this,"setFloat64",8));this.littleEndian=(e==null?void 0:e.littleEndian)??!1,this.offset=(e==null?void 0:e.offset)??0,this.buffer=new ArrayBuffer((e==null?void 0:e.initialSize)??1024),this.array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer)}accommodate(e){const t=this.offset+e;if(this.buffer.byteLength>=t)return;let i=this.buffer.byteLength;for(;i<t;)i*=2;const r=new ArrayBuffer(i),s=new Uint8Array(r);s.set(this.array),this.offset>this.buffer.byteLength&&s.fill(0,this.buffer.byteLength,this.offset),this.buffer=r,this.view=new DataView(r),this.array=s}writeNumber(e,t,i){this.accommodate(t),this.view[e](this.offset,i,this.littleEndian),this.offset+=t}writeBytes(e){this.accommodate(e.length),this.array.set(e,this.offset),this.offset+=e.length}writeString(e){const t=Zv(e);if(t.length>65535)throw new Error(`NBT strings cannot exceed 65535 bytes; got ${t.length}`);this.accommodate(2),this.view.setUint16(this.offset,t.length,this.littleEndian),this.offset+=2,this.writeBytes(t)}getData(){return this.accommodate(0),this.array.slice(0,this.offset)}}var Q;(function(n){function e(h){return typeof h=="number"?h:void 0}n.readNumber=e;function t(h){return typeof h=="number"?Math.floor(h):void 0}n.readInt=t;function i(h){return typeof h=="string"?h:void 0}n.readString=i;function r(h){return typeof h=="boolean"?h:void 0}n.readBoolean=r;function s(h){return typeof h=="object"&&h!==null&&!Array.isArray(h)?h:void 0}n.readObject=s;function a(h,d){if(Array.isArray(h))return d?h.map(f=>d(f)):h}n.readArray=a;function o(h,d){if(Array.isArray(h))return[0,1].map(f=>d(h[f]))}n.readPair=o;function c(h,d){const f=s(h)??{};return Object.fromEntries(Object.entries(f).map(([g,_])=>[g,d(_)]))}n.readMap=c;function l(h,d,f){const g=d(h);return g?f(g):void 0}n.compose=l;function u(h,d){return typeof h!="string"?d[0]:d.includes(h)?h:d[0]}n.readEnum=u})(Q||(Q={}));var qe;(function(n){function e(r){const s=Q.readNumber(r);if(s)return i(s);const a=Q.readArray(r,o=>Q.readNumber(o)??0);if(!(a===void 0||a.length!==3))return a}n.fromJson=e;function t(r){if(r.isNumber())return i(r.getAsNumber());if(!r.isListOrArray())return;const s=r.getItems();if(!(s.length<3))return s.map(a=>a.getAsNumber())}n.fromNbt=t;function i(r){const s=r>>16&255,a=r>>8&255,o=r&255;return[s/255,a/255,o/255]}n.intToRgb=i})(qe||(qe={}));class $t{constructor(e){L(this,"source");L(this,"cursor");this.source=e,this.cursor=0}get remainingLength(){return this.source.length-this.cursor}get totalLength(){return this.source.length}getRead(e=0){return this.source.substring(e,this.cursor)}getRemaining(){return this.source.substring(this.cursor)}canRead(e=1){return this.cursor+e<=this.source.length}peek(e=0){return this.source.charAt(this.cursor+e)}read(){return this.source.charAt(this.cursor++)}skip(){this.cursor+=1}skipWhitespace(){for(;this.canRead()&&$t.isWhitespace(this.peek());)this.skip()}expect(e,t=!1){if(t&&this.skipWhitespace(),!this.canRead()||this.peek()!==e)throw this.createError(`Expected '${e}'`);this.skip()}readInt(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected integer");try{const i=Number(t);if(isNaN(i)||!Number.isInteger(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid integer '${t}'`)}}readFloat(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInNumber(this.peek());)this.skip();const t=this.getRead(e);if(t.length===0)throw this.createError("Expected float");try{const i=Number(t);if(isNaN(i))throw new Error;return i}catch{throw this.cursor=e,this.createError(`Invalid float '${t}'`)}}readUnquotedString(){const e=this.cursor;for(;this.canRead()&&$t.isAllowedInUnquotedString(this.peek());)this.skip();return this.getRead(e)}readQuotedString(){if(!this.canRead())return"";const e=this.peek();if(!$t.isQuotedStringStart(e))throw this.createError("Expected quote to start a string");return this.skip(),this.readStringUntil(e)}readString(){if(!this.canRead())return"";const e=this.peek();return $t.isQuotedStringStart(e)?(this.skip(),this.readStringUntil(e)):this.readUnquotedString()}readStringUntil(e){const t=[];let i=!1;for(;this.canRead();){const r=this.read();if(i)if(r===e||r==="\\")t.push(r),i=!1;else throw this.cursor-=1,this.createError(`Invalid escape sequence '${r}' in quoted string`);else if(r==="\\")i=!0;else{if(r===e)return t.join("");t.push(r)}}throw this.createError("Unclosed quoted string")}readBoolean(){const e=this.cursor,t=this.readUnquotedString();if(t.length===0)throw this.createError("Expected bool");if(t==="true")return!0;if(t==="false")return!1;throw this.cursor=e,this.createError(`Invalid bool, expected true or false but found '${t}'`)}static isAllowedInNumber(e){return e>="0"&&e<="9"||e==="."||e==="-"}static isAllowedInUnquotedString(e){return e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z"||e==="_"||e==="-"||e==="."||e==="+"}static isQuotedStringStart(e){return e==="'"||e==='"'}static isWhitespace(e){return e===" "||e==="	"||e===`
`||e==="\r"}createError(e){const t=Math.min(this.source.length,this.cursor),i=(t>10?"...":"")+this.source.substring(Math.max(0,t-10),t);return new Error(`${e} at position ${this.cursor}: ${i}<--[HERE]`)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Jv=4,ju=0,Zu=1,Qv=2;function ss(n){let e=n.length;for(;--e>=0;)n[e]=0}const ex=0,Cf=1,tx=2,nx=3,ix=258,rc=29,$s=256,Ls=$s+1+rc,qr=30,sc=19,Pf=2*Ls+1,tr=15,ll=16,rx=7,ac=256,Lf=16,Df=17,If=18,Nl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Oa=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),sx=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Uf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ax=512,ni=new Array((Ls+2)*2);ss(ni);const bs=new Array(qr*2);ss(bs);const Ds=new Array(ax);ss(Ds);const Is=new Array(ix-nx+1);ss(Is);const oc=new Array(rc);ss(oc);const Za=new Array(qr);ss(Za);function cl(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Nf,Ff,kf;function ul(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Of=n=>n<256?Ds[n]:Ds[256+(n>>>7)],Us=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},en=(n,e,t)=>{n.bi_valid>ll-t?(n.bi_buf|=e<<n.bi_valid&65535,Us(n,n.bi_buf),n.bi_buf=e>>ll-n.bi_valid,n.bi_valid+=t-ll):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Bn=(n,e,t)=>{en(n,t[e*2],t[e*2+1])},Bf=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},ox=n=>{n.bi_valid===16?(Us(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},lx=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,h,d,f,g,_=0;for(d=0;d<=tr;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<Pf;l++)u=n.heap[l],d=t[t[u*2+1]*2+1]+1,d>c&&(d=c,_++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,f=0,u>=o&&(f=a[u-o]),g=t[u*2],n.opt_len+=g*(d+f),s&&(n.static_len+=g*(r[u*2+1]+f)));if(_!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(u=n.bl_count[d];u!==0;)h=n.heap[--l],!(h>i)&&(t[h*2+1]!==d&&(n.opt_len+=(d-t[h*2+1])*t[h*2],t[h*2+1]=d),u--)}},zf=(n,e,t)=>{const i=new Array(tr+1);let r=0,s,a;for(s=1;s<=tr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Bf(i[o]++,o))}},cx=()=>{let n,e,t,i,r;const s=new Array(tr+1);for(t=0,i=0;i<rc-1;i++)for(oc[i]=t,n=0;n<1<<Nl[i];n++)Is[t++]=i;for(Is[t-1]=i,r=0,i=0;i<16;i++)for(Za[i]=r,n=0;n<1<<Oa[i];n++)Ds[r++]=i;for(r>>=7;i<qr;i++)for(Za[i]=r<<7,n=0;n<1<<Oa[i]-7;n++)Ds[256+r++]=i;for(e=0;e<=tr;e++)s[e]=0;for(n=0;n<=143;)ni[n*2+1]=8,n++,s[8]++;for(;n<=255;)ni[n*2+1]=9,n++,s[9]++;for(;n<=279;)ni[n*2+1]=7,n++,s[7]++;for(;n<=287;)ni[n*2+1]=8,n++,s[8]++;for(zf(ni,Ls+1,s),n=0;n<qr;n++)bs[n*2+1]=5,bs[n*2]=Bf(n,5);Nf=new cl(ni,Nl,$s+1,Ls,tr),Ff=new cl(bs,Oa,0,qr,tr),kf=new cl(new Array(0),sx,0,sc,rx)},Hf=n=>{let e;for(e=0;e<Ls;e++)n.dyn_ltree[e*2]=0;for(e=0;e<qr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<sc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[ac*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Gf=n=>{n.bi_valid>8?Us(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Ku=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},hl=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Ku(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Ku(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Ju=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Bn(n,r,e):(a=Is[r],Bn(n,a+$s+1,e),o=Nl[a],o!==0&&(r-=oc[a],en(n,r,o)),i--,a=Of(i),Bn(n,a,t),o=Oa[a],o!==0&&(i-=Za[a],en(n,i,o)));while(s<n.sym_next);Bn(n,ac,e)},Fl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=Pf,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)hl(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],hl(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,hl(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],lx(n,e),zf(t,c,n.bl_count)},Qu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Lf*2]++):o<=10?n.bl_tree[Df*2]++:n.bl_tree[If*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},eh=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do Bn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Bn(n,s,n.bl_tree),o--),Bn(n,Lf,n.bl_tree),en(n,o-3,2)):o<=10?(Bn(n,Df,n.bl_tree),en(n,o-3,3)):(Bn(n,If,n.bl_tree),en(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},ux=n=>{let e;for(Qu(n,n.dyn_ltree,n.l_desc.max_code),Qu(n,n.dyn_dtree,n.d_desc.max_code),Fl(n,n.bl_desc),e=sc-1;e>=3&&n.bl_tree[Uf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},hx=(n,e,t,i)=>{let r;for(en(n,e-257,5),en(n,t-1,5),en(n,i-4,4),r=0;r<i;r++)en(n,n.bl_tree[Uf[r]*2+1],3);eh(n,n.dyn_ltree,e-1),eh(n,n.dyn_dtree,t-1)},fx=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return ju;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Zu;for(t=32;t<$s;t++)if(n.dyn_ltree[t*2]!==0)return Zu;return ju};let th=!1;const dx=n=>{th||(cx(),th=!0),n.l_desc=new ul(n.dyn_ltree,Nf),n.d_desc=new ul(n.dyn_dtree,Ff),n.bl_desc=new ul(n.bl_tree,kf),n.bi_buf=0,n.bi_valid=0,Hf(n)},Vf=(n,e,t,i)=>{en(n,(ex<<1)+(i?1:0),3),Gf(n),Us(n,t),Us(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},px=n=>{en(n,Cf<<1,3),Bn(n,ac,ni),ox(n)},mx=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===Qv&&(n.strm.data_type=fx(n)),Fl(n,n.l_desc),Fl(n,n.d_desc),a=ux(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?Vf(n,e,t,i):n.strategy===Jv||s===r?(en(n,(Cf<<1)+(i?1:0),3),Ju(n,ni,bs)):(en(n,(tx<<1)+(i?1:0),3),hx(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Ju(n,n.dyn_ltree,n.dyn_dtree)),Hf(n),i&&Gf(n)},gx=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Is[t]+$s+1)*2]++,n.dyn_dtree[Of(e)*2]++),n.sym_next===n.sym_end);var _x=dx,vx=Vf,xx=mx,yx=gx,Sx=px,wx={_tr_init:_x,_tr_stored_block:vx,_tr_flush_block:xx,_tr_tally:yx,_tr_align:Sx};const Mx=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Ns=Mx;const bx=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},Ex=new Uint32Array(bx()),Tx=(n,e,t,i)=>{const r=Ex,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var It=Tx,ur={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ys={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Ax,_tr_stored_block:kl,_tr_flush_block:Rx,_tr_tally:Pi,_tr_align:Cx}=wx,{Z_NO_FLUSH:Li,Z_PARTIAL_FLUSH:Px,Z_FULL_FLUSH:Lx,Z_FINISH:mn,Z_BLOCK:nh,Z_OK:Ft,Z_STREAM_END:ih,Z_STREAM_ERROR:Hn,Z_DATA_ERROR:Dx,Z_BUF_ERROR:fl,Z_DEFAULT_COMPRESSION:Ix,Z_FILTERED:Ux,Z_HUFFMAN_ONLY:Ta,Z_RLE:Nx,Z_FIXED:Fx,Z_DEFAULT_STRATEGY:kx,Z_UNKNOWN:Ox,Z_DEFLATED:mo}=Ys,Bx=9,zx=15,Hx=8,Gx=29,Vx=256,Ol=Vx+1+Gx,Wx=30,Xx=19,qx=2*Ol+1,$x=15,et=3,Ei=258,Gn=Ei+et+1,Yx=32,es=42,lc=57,Bl=69,zl=73,Hl=91,Gl=103,nr=113,ws=666,Zt=1,as=2,hr=3,os=4,jx=3,ir=(n,e)=>(n.msg=ur[e],e),rh=n=>n*2-(n>4?9:0),Mi=n=>{let e=n.length;for(;--e>=0;)n[e]=0},Zx=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let cc=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask;const fr=(n,e)=>{let t;if(n.legacy_hash)t=n.ins_h=cc(n,n.ins_h,n.window[e+et-1]);else{const r=n.window,s=r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;t=n.ins_h=Math.imul(s,66521)+66521>>>16&n.hash_mask}const i=n.prev[e&n.w_mask]=n.head[t];return n.head[t]=e,i},on=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},cn=(n,e)=>{Rx(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,on(n.strm)},tt=(n,e)=>{n.pending_buf[n.pending++]=e},_s=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Vl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Ns(n.adler,e,r,t):n.state.wrap===2&&(n.adler=It(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},Wf=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Gn?n.strstart-(n.w_size-Gn):0,l=n.window,u=n.w_mask,h=n.prev,d=n.strstart+Ei;let f=l[i+a-1],g=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==f||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<d);if(s=Ei-(d-i),i=d-Ei,s>a){if(n.match_start=e,a=s,s>=o)break;f=l[i+a-1],g=l[i+a]}}while((e=h[e&u])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},ts=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Gn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),Zx(n),i+=e),n.strm.avail_in===0)break;if(t=Vl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.legacy_hash){if(n.lookahead+n.insert>=et)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=cc(n,n.ins_h,n.window[r+1]);n.insert&&(fr(n,r),r++,n.insert--,!(n.lookahead+n.insert<et)););}else if(n.lookahead+n.insert>et)for(r=n.strstart-n.insert;n.insert&&(fr(n,r),r++,n.insert--,!(n.lookahead+n.insert<=et)););}while(n.lookahead<Gn&&n.strm.avail_in!==0)},Xf=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==mn||e===Li||i!==r+n.strm.avail_in)))break;a=e===mn&&i===r+n.strm.avail_in?1:0,kl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,on(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Vl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?os:e!==Li&&e!==mn&&n.strm.avail_in===0&&n.strstart===n.block_start?as:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Vl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===mn)&&e!==Li&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===mn&&n.strm.avail_in===0&&i===r?1:0,kl(n,n.block_start,i,a),n.block_start+=i,on(n.strm)),a?hr:Zt)},dl=(n,e)=>{let t,i;for(;;){if(n.lookahead<Gn){if(ts(n),n.lookahead<Gn&&e===Li)return Zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=et&&(t=fr(n,n.strstart)),t!==0&&n.strstart-t<=n.w_size-Gn&&(n.match_length=Wf(n,t)),n.match_length>=et)if(i=Pi(n,n.strstart-n.match_start,n.match_length-et),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=et){n.match_length--;do n.strstart++,t=fr(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=cc(n,n.ins_h,n.window[n.strstart+1]));else i=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=n.strstart<et-1?n.strstart:et-1,e===mn?(cn(n,!0),n.strm.avail_out===0?hr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as},Fr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Gn){if(ts(n),n.lookahead<Gn&&e===Li)return Zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=et&&(t=fr(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=et-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Gn&&(n.match_length=Wf(n,t),n.match_length<=5&&(n.strategy===Ux||n.match_length===et&&n.strstart-n.match_start>4096)&&(n.match_length=et-1)),n.prev_length>=et&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-et,i=Pi(n,n.strstart-1-n.prev_match,n.prev_length-et),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(t=fr(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=et-1,n.strstart++,i&&(cn(n,!1),n.strm.avail_out===0))return Zt}else if(n.match_available){if(i=Pi(n,0,n.window[n.strstart-1]),i&&cn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Zt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Pi(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<et-1?n.strstart:et-1,e===mn?(cn(n,!0),n.strm.avail_out===0?hr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as},Kx=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=Ei){if(ts(n),n.lookahead<=Ei&&e===Li)return Zt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=et&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+Ei;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=Ei-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=et?(t=Pi(n,1,n.match_length-et),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=0,e===mn?(cn(n,!0),n.strm.avail_out===0?hr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as},Jx=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(ts(n),n.lookahead===0)){if(e===Li)return Zt;break}if(n.match_length=0,t=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(cn(n,!1),n.strm.avail_out===0))return Zt}return n.insert=0,e===mn?(cn(n,!0),n.strm.avail_out===0?hr:os):n.sym_next&&(cn(n,!1),n.strm.avail_out===0)?Zt:as};function Dn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const Ms=[new Dn(0,0,0,0,Xf),new Dn(4,4,8,4,dl),new Dn(4,5,16,8,dl),new Dn(4,6,32,32,dl),new Dn(4,4,16,16,Fr),new Dn(8,16,32,32,Fr),new Dn(8,16,128,128,Fr),new Dn(8,32,128,256,Fr),new Dn(32,128,258,1024,Fr),new Dn(32,258,258,4096,Fr)],Qx=n=>{n.window_size=2*n.w_size,Mi(n.head),n.max_lazy_match=Ms[n.level].max_lazy,n.good_match=Ms[n.level].good_length,n.nice_match=Ms[n.level].nice_length,n.max_chain_length=Ms[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=et-1,n.match_available=0,n.ins_h=0};function e1(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=mo,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(qx*2),this.dyn_dtree=new Uint16Array((2*Wx+1)*2),this.bl_tree=new Uint16Array((2*Xx+1)*2),Mi(this.dyn_ltree),Mi(this.dyn_dtree),Mi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array($x+1),this.heap=new Uint16Array(2*Ol+1),Mi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ol+1),Mi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const js=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==es&&e.status!==lc&&e.status!==Bl&&e.status!==zl&&e.status!==Hl&&e.status!==Gl&&e.status!==nr&&e.status!==ws?1:0},qf=n=>{if(js(n))return ir(n,Hn);n.total_in=n.total_out=0,n.data_type=Ox;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?lc:e.wrap?es:nr,n.adler=e.wrap===2?0:1,e.last_flush=-2,Ax(e),Ft},$f=n=>{const e=qf(n);return e===Ft&&Qx(n.state),e},t1=(n,e)=>js(n)||n.state.wrap!==2?Hn:(n.state.gzhead=e,Ft),Yf=(n,e,t,i,r,s,a)=>{if(!n)return Hn;let o=1;if(e===Ix&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>Bx||t!==mo||i<8||i>15||e<0||e>9||s<0||s>Fx||i===8&&o!==1)return ir(n,Hn);i===8&&(i=9);const c=new e1;return n.state=c,c.strm=n,c.status=es,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=a?1:0,c.hash_bits=r+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+et-1)/et),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<r+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=e,c.strategy=s,c.method=t,$f(n)},n1=(n,e)=>Yf(n,e,mo,zx,Hx,kx),i1=(n,e)=>{if(js(n)||e>nh||e<0)return n?ir(n,Hn):Hn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===ws&&e!==mn)return ir(n,n.avail_out===0?fl:Hn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(on(n),n.avail_out===0)return t.last_flush=-1,Ft}else if(n.avail_in===0&&rh(e)<=rh(i)&&e!==mn)return ir(n,fl);if(t.status===ws&&n.avail_in!==0)return ir(n,fl);if(t.status===es&&t.wrap===0&&(t.status=nr),t.status===es){let r=mo+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Ta||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=Yx),r+=31-r%31,_s(t,r),t.strstart!==0&&(_s(t,n.adler>>>16),_s(t,n.adler&65535)),n.adler=1,t.status=nr,on(n),t.pending!==0)return t.last_flush=-1,Ft}if(t.status===lc){if(n.adler=0,tt(t,31),tt(t,139),tt(t,8),t.gzhead)tt(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),tt(t,t.gzhead.time&255),tt(t,t.gzhead.time>>8&255),tt(t,t.gzhead.time>>16&255),tt(t,t.gzhead.time>>24&255),tt(t,t.level===9?2:t.strategy>=Ta||t.level<2?4:0),tt(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(tt(t,t.gzhead.extra.length&255),tt(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=It(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Bl;else if(tt(t,0),tt(t,0),tt(t,0),tt(t,0),tt(t,0),tt(t,t.level===9?2:t.strategy>=Ta||t.level<2?4:0),tt(t,jx),t.status=nr,on(n),t.pending!==0)return t.last_flush=-1,Ft}if(t.status===Bl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,on(n),t.pending!==0)return t.last_flush=-1,Ft;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=zl}if(t.status===zl){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,Ft;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,tt(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Hl}if(t.status===Hl){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r)),on(n),t.pending!==0)return t.last_flush=-1,Ft;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,tt(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=It(n.adler,t.pending_buf,t.pending-r,r))}t.status=Gl}if(t.status===Gl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(on(n),t.pending!==0))return t.last_flush=-1,Ft;tt(t,n.adler&255),tt(t,n.adler>>8&255),n.adler=0}if(t.status=nr,on(n),t.pending!==0)return t.last_flush=-1,Ft}if(n.avail_in!==0||t.lookahead!==0||e!==Li&&t.status!==ws){let r=t.level===0?Xf(t,e):t.strategy===Ta?Jx(t,e):t.strategy===Nx?Kx(t,e):Ms[t.level].func(t,e);if((r===hr||r===os)&&(t.status=ws),r===Zt||r===hr)return n.avail_out===0&&(t.last_flush=-1),Ft;if(r===as&&(e===Px?Cx(t):e!==nh&&(kl(t,0,0,!1),e===Lx&&(Mi(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),on(n),n.avail_out===0))return t.last_flush=-1,Ft}return e!==mn?Ft:t.wrap<=0?ih:(t.wrap===2?(tt(t,n.adler&255),tt(t,n.adler>>8&255),tt(t,n.adler>>16&255),tt(t,n.adler>>24&255),tt(t,n.total_in&255),tt(t,n.total_in>>8&255),tt(t,n.total_in>>16&255),tt(t,n.total_in>>24&255)):(_s(t,n.adler>>>16),_s(t,n.adler&65535)),on(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Ft:ih)},r1=n=>{if(js(n))return Hn;const e=n.state.status;return n.state=null,e===nr?ir(n,Dx):Ft},s1=(n,e)=>{let t=e.length;if(js(n))return Hn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==es||i.lookahead)return Hn;if(r===1&&(n.adler=Ns(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Mi(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,ts(i);i.lookahead>=et;){let c=i.strstart,l=i.lookahead-(et-1);do fr(i,c),c++;while(--l);i.strstart=c,i.lookahead=et-1,ts(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=et-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,Ft};var a1=n1,o1=Yf,l1=$f,c1=qf,u1=t1,h1=i1,f1=r1,d1=s1,p1="pako deflate (from Nodeca project)",Es={deflateInit:a1,deflateInit2:o1,deflateReset:l1,deflateResetKeep:c1,deflateSetHeader:u1,deflate:h1,deflateEnd:f1,deflateSetDictionary:d1,deflateInfo:p1};const m1=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var g1=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)m1(t,i)&&(n[i]=t[i])}}return n},_1=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},go={assign:g1,flattenChunks:_1};let jf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{jf=!1}const Fs=new Uint8Array(256);for(let n=0;n<256;n++)Fs[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Fs[254]=Fs[255]=1;var v1=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const x1=(n,e)=>{if(e<65534&&n.subarray&&jf)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var y1=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=Fs[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return x1(s,r)},S1=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Fs[n[t]]>e?t:e},ks={string2buf:v1,buf2string:y1,utf8border:S1};function w1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Zf=w1;const Kf=Object.prototype.toString,{Z_NO_FLUSH:M1,Z_SYNC_FLUSH:b1,Z_FULL_FLUSH:E1,Z_FINISH:T1,Z_OK:Ka,Z_STREAM_END:A1,Z_DEFAULT_COMPRESSION:R1,Z_DEFAULT_STRATEGY:C1,Z_DEFLATED:P1}=Ys,L1={level:R1,method:P1,chunkSize:16384,windowBits:15,memLevel:8,strategy:C1,legacyHash:!0};function Zs(n){this.options=go.assign({},L1,n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Zf,this.strm.avail_out=0;let t=Es.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy,e.legacyHash);if(t!==Ka)throw new Error(ur[t]);if(e.header&&Es.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=ks.string2buf(e.dictionary):Kf.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Es.deflateSetDictionary(this.strm,i),t!==Ka)throw new Error(ur[t]);this._dict_set=!0}}Zs.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?T1:M1,typeof n=="string"?t.input=ks.string2buf(n):Kf.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===b1||s===E1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Es.deflate(t,s),r===A1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Es.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Ka;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Zs.prototype.onData=function(n){this.chunks.push(n)};Zs.prototype.onEnd=function(n){n===Ka&&(this.result=go.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function uc(n,e){const t=new Zs(e);if(t.push(n,!0),t.err)throw t.msg||ur[t.err];return t.result}function D1(n,e){return e=e||{},e.raw=!0,uc(n,e)}function I1(n,e){return e=e||{},e.gzip=!0,uc(n,e)}var U1=Zs,N1=uc,F1=D1,k1=I1,O1={Deflate:U1,deflate:N1,deflateRaw:F1,gzip:k1};const Aa=16209,B1=16191;var z1=function(e,t){let i,r,s,a,o,c,l,u,h,d,f,g,_,m,p,w,v,y,P,b,E,U,M,x;const R=e.state;i=e.next_in,M=e.input,r=i+(e.avail_in-5),s=e.next_out,x=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=R.dmax,l=R.wsize,u=R.whave,h=R.wnext,d=R.window,f=R.hold,g=R.bits,_=R.lencode,m=R.distcode,p=(1<<R.lenbits)-1,w=(1<<R.distbits)-1;e:do{g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),v=_[f&p];t:for(;;){if(y=v>>>24,f>>>=y,g-=y,y=v>>>16&255,y===0)x[s++]=v&65535;else if(y&16){P=v&65535,y&=15,y&&(g<y&&(f+=M[i++]<<g,g+=8),P+=f&(1<<y)-1,f>>>=y,g-=y),g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),v=m[f&w];n:for(;;){if(y=v>>>24,f>>>=y,g-=y,y=v>>>16&255,y&16){if(b=v&65535,y&=15,g<y&&(f+=M[i++]<<g,g+=8,g<y&&(f+=M[i++]<<g,g+=8)),b+=f&(1<<y)-1,b>c){e.msg="invalid distance too far back",R.mode=Aa;break e}if(f>>>=y,g-=y,y=s-a,b>y){if(y=b-y,y>u&&R.sane){e.msg="invalid distance too far back",R.mode=Aa;break e}if(E=0,U=d,h===0){if(E+=l-y,y<P){P-=y;do x[s++]=d[E++];while(--y);E=s-b,U=x}}else if(h<y){if(E+=l+h-y,y-=h,y<P){P-=y;do x[s++]=d[E++];while(--y);if(E=0,h<P){y=h,P-=y;do x[s++]=d[E++];while(--y);E=s-b,U=x}}}else if(E+=h-y,y<P){P-=y;do x[s++]=d[E++];while(--y);E=s-b,U=x}for(;P>2;)x[s++]=U[E++],x[s++]=U[E++],x[s++]=U[E++],P-=3;P&&(x[s++]=U[E++],P>1&&(x[s++]=U[E++]))}else{E=s-b;do x[s++]=x[E++],x[s++]=x[E++],x[s++]=x[E++],P-=3;while(P>2);P&&(x[s++]=x[E++],P>1&&(x[s++]=x[E++]))}}else if(y&64){e.msg="invalid distance code",R.mode=Aa;break e}else{v=m[(v&65535)+(f&(1<<y)-1)];continue n}break}}else if(y&64)if(y&32){R.mode=B1;break e}else{e.msg="invalid literal/length code",R.mode=Aa;break e}else{v=_[(v&65535)+(f&(1<<y)-1)];continue t}break}}while(i<r&&s<o);P=g>>3,i-=P,g-=P<<3,f&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),R.hold=f,R.bits=g};const kr=15,sh=852,ah=592,oh=0,pl=1,lh=2,H1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),G1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),V1=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),W1=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),X1=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,u=0,h=0,d=0,f=0,g=0,_=0,m=0,p=0,w=0,v,y,P,b,E,U=null,M;const x=new Uint16Array(kr+1),R=new Uint16Array(kr+1);let N=null,D,F,C;for(l=0;l<=kr;l++)x[l]=0;for(u=0;u<i;u++)x[e[t+u]]++;for(f=c,d=kr;d>=1&&x[d]===0;d--);if(f>d&&(f=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(h=1;h<d&&x[h]===0;h++);for(f<h&&(f=h),m=1,l=1;l<=kr;l++)if(m<<=1,m-=x[l],m<0)return-1;if(m>0&&(n===oh||d!==1))return-1;for(R[1]=0,l=1;l<kr;l++)R[l+1]=R[l]+x[l];for(u=0;u<i;u++)e[t+u]!==0&&(a[R[e[t+u]]++]=u);if(n===oh?(U=N=a,M=20):n===pl?(U=H1,N=G1,M=257):(U=V1,N=W1,M=0),w=0,u=0,l=h,E=s,g=f,_=0,P=-1,p=1<<f,b=p-1,n===pl&&p>sh||n===lh&&p>ah)return 1;for(;;){D=l-_,a[u]+1<M?(F=0,C=a[u]):a[u]>=M?(F=N[a[u]-M],C=U[a[u]-M]):(F=96,C=0),v=1<<l-_,y=1<<g,h=y;do y-=v,r[E+(w>>_)+y]=D<<24|F<<16|C|0;while(y!==0);for(v=1<<l-1;w&v;)v>>=1;if(v!==0?(w&=v-1,w+=v):w=0,u++,--x[l]===0){if(l===d)break;l=e[t+a[u]]}if(l>f&&(w&b)!==P){for(_===0&&(_=f),E+=h,g=l-_,m=1<<g;g+_<d&&(m-=x[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===pl&&p>sh||n===lh&&p>ah)return 1;P=w&b,r[P]=f<<24|g<<16|E-s|0}}return w!==0&&(r[E+w]=l-_<<24|64<<16|0),o.bits=f,0};var Ts=X1;const q1=0,Jf=1,Qf=2,{Z_FINISH:ch,Z_BLOCK:$1,Z_TREES:Ra,Z_OK:dr,Z_STREAM_END:Y1,Z_NEED_DICT:j1,Z_STREAM_ERROR:vn,Z_DATA_ERROR:ed,Z_MEM_ERROR:td,Z_BUF_ERROR:Z1,Z_DEFLATED:uh}=Ys,_o=16180,hh=16181,fh=16182,dh=16183,ph=16184,mh=16185,gh=16186,_h=16187,vh=16188,xh=16189,Ja=16190,Qn=16191,ml=16192,yh=16193,gl=16194,Sh=16195,wh=16196,Mh=16197,bh=16198,Ca=16199,Pa=16200,Eh=16201,Th=16202,Ah=16203,Rh=16204,Ch=16205,_l=16206,Ph=16207,Lh=16208,gt=16209,nd=16210,id=16211,K1=852,J1=592,Q1=15,ey=Q1,Dh=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function ty(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const gr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<_o||e.mode>id?1:0},rd=n=>{if(gr(n))return vn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=_o,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(K1),e.distcode=e.distdyn=new Int32Array(J1),e.sane=1,e.back=-1,dr},sd=n=>{if(gr(n))return vn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,rd(n)},ad=(n,e)=>{let t;if(gr(n))return vn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?vn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,sd(n))},od=(n,e)=>{if(!n)return vn;const t=new ty;n.state=t,t.strm=n,t.window=null,t.mode=_o;const i=ad(n,e);return i!==dr&&(n.state=null),i},ny=n=>od(n,ey);let Ih=!0,vl,xl;const iy=n=>{if(Ih){vl=new Int32Array(512),xl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(Ts(Jf,n.lens,0,288,vl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;Ts(Qf,n.lens,0,32,xl,0,n.work,{bits:5}),Ih=!1}n.lencode=vl,n.lenbits=9,n.distcode=xl,n.distbits=5},ld=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.window=new Uint8Array(1<<s.wbits)),s.wsize===0&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},ry=(n,e)=>{let t,i,r,s,a,o,c,l,u,h,d,f,g,_,m=0,p,w,v,y,P,b,E,U;const M=new Uint8Array(4);let x,R;const N=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(gr(n)||!n.output||!n.input&&n.avail_in!==0)return vn;t=n.state,t.mode===Qn&&(t.mode=ml),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,h=o,d=c,U=dr;e:for(;;)switch(t.mode){case _o:if(t.wrap===0){t.mode=ml;break}for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,M[0]=l&255,M[1]=l>>>8&255,t.check=It(t.check,M,2,0),l=0,u=0,t.mode=hh;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=gt;break}if((l&15)!==uh){n.msg="unknown compression method",t.mode=gt;break}if(l>>>=4,u-=4,E=(l&15)+8,t.wbits===0&&(t.wbits=E),E>15||E>t.wbits){n.msg="invalid window size",t.mode=gt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?xh:Qn,l=0,u=0;break;case hh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==uh){n.msg="unknown compression method",t.mode=gt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=gt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=It(t.check,M,2,0)),l=0,u=0,t.mode=fh;case fh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,M[2]=l>>>16&255,M[3]=l>>>24&255,t.check=It(t.check,M,4,0)),l=0,u=0,t.mode=dh;case dh:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=It(t.check,M,2,0)),l=0,u=0,t.mode=ph;case ph:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=It(t.check,M,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=mh;case mh:if(t.flags&1024&&(f=t.length,f>o&&(f=o),f&&(t.head&&(E=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+f),E)),t.flags&512&&t.wrap&4&&(t.check=It(t.check,i,f,s)),o-=f,s+=f,t.length-=f),t.length))break e;t.length=0,t.mode=gh;case gh:if(t.flags&2048){if(o===0)break e;f=0;do E=i[s+f++],t.head&&E&&t.length<65536&&(t.head.name+=String.fromCharCode(E));while(E&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=It(t.check,i,f,s)),o-=f,s+=f,E)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=_h;case _h:if(t.flags&4096){if(o===0)break e;f=0;do E=i[s+f++],t.head&&E&&t.length<65536&&(t.head.comment+=String.fromCharCode(E));while(E&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=It(t.check,i,f,s)),o-=f,s+=f,E)break e}else t.head&&(t.head.comment=null);t.mode=vh;case vh:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=gt;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=Qn;break;case xh:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}n.adler=t.check=Dh(l),l=0,u=0,t.mode=Ja;case Ja:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,j1;n.adler=t.check=1,t.mode=Qn;case Qn:if(e===$1||e===Ra)break e;case ml:if(t.last){l>>>=u&7,u-=u&7,t.mode=_l;break}for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=yh;break;case 1:if(iy(t),t.mode=Ca,e===Ra){l>>>=2,u-=2;break e}break;case 2:t.mode=wh;break;case 3:n.msg="invalid block type",t.mode=gt}l>>>=2,u-=2;break;case yh:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=gt;break}if(t.length=l&65535,l=0,u=0,t.mode=gl,e===Ra)break e;case gl:t.mode=Sh;case Sh:if(f=t.length,f){if(f>o&&(f=o),f>c&&(f=c),f===0)break e;r.set(i.subarray(s,s+f),a),o-=f,s+=f,c-=f,a+=f,t.length-=f;break}t.mode=Qn;break;case wh:for(;u<14;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=gt;break}t.have=0,t.mode=Mh;case Mh:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.lens[N[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[N[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,x={bits:t.lenbits},U=Ts(q1,t.lens,0,19,t.lencode,0,t.work,x),t.lenbits=x.bits,U){n.msg="invalid code lengths set",t.mode=gt;break}t.have=0,t.mode=bh;case bh:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(v<16)l>>>=p,u-=p,t.lens[t.have++]=v;else{if(v===16){for(R=p+2;u<R;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=gt;break}E=t.lens[t.have-1],f=3+(l&3),l>>>=2,u-=2}else if(v===17){for(R=p+3;u<R;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,f=3+(l&7),l>>>=3,u-=3}else{for(R=p+7;u<R;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,E=0,f=11+(l&127),l>>>=7,u-=7}if(t.have+f>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=gt;break}for(;f--;)t.lens[t.have++]=E}}if(t.mode===gt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=gt;break}if(t.lenbits=9,x={bits:t.lenbits},U=Ts(Jf,t.lens,0,t.nlen,t.lencode,0,t.work,x),t.lenbits=x.bits,U){n.msg="invalid literal/lengths set",t.mode=gt;break}if(t.distbits=6,t.distcode=t.distdyn,x={bits:t.distbits},U=Ts(Qf,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,x),t.distbits=x.bits,U){n.msg="invalid distances set",t.mode=gt;break}if(t.mode=Ca,e===Ra)break e;case Ca:t.mode=Pa;case Pa:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,z1(n,d),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===Qn&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(w&&!(w&240)){for(y=p,P=w,b=v;m=t.lencode[b+((l&(1<<y+P)-1)>>y)],p=m>>>24,w=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,t.length=v,w===0){t.mode=Ch;break}if(w&32){t.back=-1,t.mode=Qn;break}if(w&64){n.msg="invalid literal/length code",t.mode=gt;break}t.extra=w&15,t.mode=Eh;case Eh:if(t.extra){for(R=t.extra;u<R;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Th;case Th:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,w=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(!(w&240)){for(y=p,P=w,b=v;m=t.distcode[b+((l&(1<<y+P)-1)>>y)],p=m>>>24,w=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=y,u-=y,t.back+=y}if(l>>>=p,u-=p,t.back+=p,w&64){n.msg="invalid distance code",t.mode=gt;break}t.offset=v,t.extra=w&15,t.mode=Ah;case Ah:if(t.extra){for(R=t.extra;u<R;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=gt;break}t.mode=Rh;case Rh:if(c===0)break e;if(f=d-c,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=gt;break}f>t.wnext?(f-=t.wnext,g=t.wsize-f):g=t.wnext-f,f>t.length&&(f=t.length),_=t.window}else _=r,g=a-t.offset,f=t.length;f>c&&(f=c),c-=f,t.length-=f;do r[a++]=_[g++];while(--f);t.length===0&&(t.mode=Pa);break;case Ch:if(c===0)break e;r[a++]=t.length,c--,t.mode=Pa;break;case _l:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[s++]<<u,u+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?It(t.check,r,d,a-d):Ns(t.check,r,d,a-d)),d=c,t.wrap&4&&(t.flags?l:Dh(l))!==t.check){n.msg="incorrect data check",t.mode=gt;break}l=0,u=0}t.mode=Ph;case Ph:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=gt;break}l=0,u=0}t.mode=Lh;case Lh:U=Y1;break e;case gt:U=ed;break e;case nd:return td;case id:default:return vn}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<gt&&(t.mode<_l||e!==ch))&&ld(n,n.output,n.next_out,d-n.avail_out),h-=n.avail_in,d-=n.avail_out,n.total_in+=h,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?It(t.check,r,d,n.next_out-d):Ns(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===Qn?128:0)+(t.mode===Ca||t.mode===gl?256:0),(h===0&&d===0||e===ch)&&U===dr&&(U=Z1),U},sy=n=>{if(gr(n))return vn;let e=n.state;return e.window&&(e.window=null),n.state=null,dr},ay=(n,e)=>{if(gr(n))return vn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,dr):vn},oy=(n,e)=>{const t=e.length;let i,r,s;return gr(n)||(i=n.state,i.wrap!==0&&i.mode!==Ja)?vn:i.mode===Ja&&(r=1,r=Ns(r,e,t,0),r!==i.check)?ed:(s=ld(n,e,t,t),s?(i.mode=nd,td):(i.havedict=1,dr))};var ly=sd,cy=ad,uy=rd,hy=ny,fy=od,dy=ry,py=sy,my=ay,gy=oy,_y="pako inflate (from Nodeca project)",Nn={inflateReset:ly,inflateReset2:cy,inflateResetKeep:uy,inflateInit:hy,inflateInit2:fy,inflate:dy,inflateEnd:py,inflateGetHeader:my,inflateSetDictionary:gy,inflateInfo:_y};function vy(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var xy=vy;const cd=Object.prototype.toString,{Z_NO_FLUSH:yy,Z_FINISH:Uh,Z_OK:$r,Z_STREAM_END:yl,Z_NEED_DICT:Sl,Z_STREAM_ERROR:Sy,Z_DATA_ERROR:Nh,Z_MEM_ERROR:wy,Z_BUF_ERROR:Fh}=Ys,My={chunkSize:1024*64,windowBits:15,to:""};function Ks(n){this.options=go.assign({},My,n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Zf,this.strm.avail_out=0;let t=Nn.inflateInit2(this.strm,e.windowBits);if(t!==$r)throw new Error(ur[t]);if(this.header=new xy,Nn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=ks.string2buf(e.dictionary):cd.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=Nn.inflateSetDictionary(this.strm,e.dictionary),t!==$r)))throw new Error(ur[t])}Ks.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Uh:yy,cd.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=Nn.inflate(t,a),s===Sl&&r&&(s=Nn.inflateSetDictionary(t,r),s===$r?s=Nn.inflate(t,a):s===Nh&&(s=Sl));t.avail_in>0&&s===yl&&t.state.wrap&2&&t.state.flags!==0&&t.input[t.next_in]!==0;)Nn.inflateReset(t),s=Nn.inflate(t,a);switch(s){case Sy:case Nh:case Sl:case wy:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===yl||a>0))if(this.options.to==="string"){let c=ks.utf8border(t.output,t.next_out),l=t.next_out-c,u=ks.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out)),t.avail_out=0,t.next_out=0;if(!((s===$r||s===Fh)&&o===0)){if(s===yl)return s=Nn.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0){if(a===Uh)return s=Nn.inflateEnd(this.strm),this.onEnd(s===$r?Fh:s),this.ended=!0,!1;break}}}return!0};Ks.prototype.onData=function(n){this.chunks.push(n)};Ks.prototype.onEnd=function(n){n===$r&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=go.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function hc(n,e){const t=new Ks(e);if(t.push(n,!0),t.err)throw t.msg||ur[t.err];return t.result}function by(n,e){return e=e||{},e.raw=!0,hc(n,e)}var Ey=Ks,Ty=hc,Ay=by,Ry=hc,Cy={Inflate:Ey,inflate:Ty,inflateRaw:Ay,ungzip:Ry};const{Deflate:Py,deflate:Ly,deflateRaw:Dy,gzip:Iy}=O1,{Inflate:Uy,inflate:Ny,inflateRaw:Fy,ungzip:ky}=Cy;var Oy=Py,By=Ly,zy=Dy,Hy=Iy,Gy=Uy,Vy=Ny,Wy=Fy,Xy=ky,qy=Ys,wl={Deflate:Oy,deflate:By,deflateRaw:zy,gzip:Hy,Inflate:Gy,inflate:Vy,inflateRaw:Wy,ungzip:Xy,constants:qy},he;(function(n){n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.ByteArray=7]="ByteArray",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.IntArray=11]="IntArray",n[n.LongArray=12]="LongArray"})(he||(he={}));const Cs=class Cs{static register(e,t){const i=t.create().getId();if(i!==e)throw new Error(`Registered factory ${he[i]} does not match type ${he[e]}`);Cs.FACTORIES.set(e,t)}isEnd(){return this.getId()===he.End}isByte(){return this.getId()===he.Byte}isShort(){return this.getId()===he.Short}isInt(){return this.getId()===he.Int}isLong(){return this.getId()===he.Long}isFloat(){return this.getId()===he.Float}isDouble(){return this.getId()===he.Double}isByteArray(){return this.getId()===he.ByteArray}isString(){return this.getId()===he.String}isList(){return this.getId()===he.List}isCompound(){return this.getId()===he.Compound}isIntArray(){return this.getId()===he.IntArray}isLongArray(){return this.getId()===he.LongArray}isNumber(){return this.isByte()||this.isShort()||this.isInt()||this.isLong()||this.isFloat()||this.isDouble()}isArray(){return this.isByteArray()||this.isIntArray()||this.isLongArray()}isListOrArray(){return this.isList()||this.isArray()}getAsNumber(){return 0}getAsString(){return""}toJsonWithId(){return{type:this.getId(),value:this.toJson()}}static getFactory(e){const t=this.FACTORIES.get(e);if(!t)throw new Error(`Invalid tag id ${e}`);return t}static create(e){return this.getFactory(e).create()}static fromString(e){const t=typeof e=="string"?new $t(e):e;return this.getFactory(he.Compound).fromString(t)}static fromJson(e,t=he.Compound){return this.getFactory(t).fromJson(e)}static fromJsonWithId(e){const t=Q.readObject(e)??{},i=Q.readInt(t.type)??0;return Cs.fromJson(t.value??{},i)}static fromBytes(e,t=he.Compound){return this.getFactory(t).fromBytes(e)}};L(Cs,"FACTORIES",new Map);let rt=Cs;const ti=class ti extends rt{constructor(t){super();L(this,"value");this.value=typeof t=="number"?t:t?1:0}getId(){return he.Byte}equals(t){return t.isByte()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"b"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeByte(this.value)}static create(){return ti.ZERO}static fromJson(t){return new ti(Q.readInt(t)??0)}static fromBytes(t){const i=t.readByte();return new ti(i)}};L(ti,"ZERO",new ti(0)),L(ti,"ONE",new ti(1));let Di=ti;rt.register(he.Byte,Di);class Js extends rt{constructor(t){super();L(this,"items");this.items=t??[]}[Symbol.iterator](){return(this.items||[])[Symbol.iterator]()}getItems(){return this.items.slice(0)}getAsTuple(t,i){return[...Array(t)].map((r,s)=>i(this.items[s]))}get(t){if(t=Math.floor(t),!(t<0||t>=this.items.length))return this.items[t]}get length(){return this.items.length}map(t){return this.items.map(t)}filter(t){return this.items.filter(t)}forEach(t){this.items.forEach(t)}set(t,i){this.items[t]=i}add(t){this.items.push(t)}insert(t,i){this.items.splice(t,0,i)}delete(t){this.items.splice(t,1)}clear(){this.items=[]}}class Ii extends Js{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new Di(t):t))}getId(){return he.ByteArray}equals(e){return e.isByteArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return he.Byte}toString(){return"[B;"+this.items.map(t=>t.getAsNumber().toFixed()+"B").join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length),e.writeBytes(this.items.map(t=>t.getAsNumber()))}static create(){return new Ii([])}static fromJson(e){const t=Q.readArray(e,i=>Q.readNumber(i)??0)??[];return new Ii(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative ByteArray length ${t}`);const i=e.readBytes(t);return new Ii(i)}}rt.register(he.ByteArray,Ii);class sr extends rt{constructor(t){super();L(this,"value");this.value=t}getId(){return he.Float}equals(t){return t.isFloat()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toString()+"f"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeFloat(this.value)}static create(){return new sr(0)}static fromJson(t){return new sr(Q.readNumber(t)??0)}static fromBytes(t){const i=t.readFloat();return new sr(i)}}rt.register(he.Float,sr);class _n extends rt{constructor(t){super();L(this,"value");this.value=t}getId(){return he.Int}equals(t){return t.isInt()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeInt(this.value)}static create(){return new _n(0)}static fromJson(t){return new _n(Q.readInt(t)??0)}static fromBytes(t){const i=t.readInt();return new _n(i)}}rt.register(he.Int,_n);class Ui extends Js{constructor(e){super(Array.from(e??[],t=>typeof t=="number"?new _n(t):t))}getId(){return he.IntArray}equals(e){return e.isIntArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return he.Int}get length(){return this.items.length}toString(){return"[I;"+this.items.map(t=>t.getAsNumber().toFixed()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsNumber())}toJson(){return this.items.map(e=>e.getAsNumber())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items)e.writeInt(t.getAsNumber())}static create(){return new Ui}static fromJson(e){const t=Q.readArray(e,i=>Q.readNumber(i)??0)??[];return new Ui(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative IntArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push(e.readInt());return new Ui(i)}}rt.register(he.IntArray,Ui);class jt extends Js{constructor(t,i){super(t??[]);L(this,"type");this.type=this.items.length===0?he.End:i??this.items[0].getId()}static make(t,i){return new jt(i.map(r=>new t(r)))}getId(){return he.List}equals(t){return t.isList()&&this.type===t.type&&this.length===t.length&&this.items.every((i,r)=>i.equals(t.items[r]))}getType(){return this.type}getNumber(t){const i=this.get(t);return i!=null&&i.isNumber()?i.getAsNumber():0}getString(t){const i=this.get(t);return i!=null&&i.isString()?i.getAsString():""}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&r.getType()===i?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:At.create()}set(t,i){this.updateType(i),super.set(t,i)}add(t){this.updateType(t),super.add(t)}insert(t,i){this.updateType(i),super.insert(t,i)}updateType(t){if(t.getId()!==he.End){if(this.type===he.End)this.type=t.getId();else if(this.type!==t.getId())throw new Error(`Trying to add tag of type ${he[t.getId()]} to list of ${he[this.type]}`)}}clear(){super.clear(),this.type=he.End}toString(){return"["+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(t="  ",i=0){if(this.length===0)return"[]";const r=t.repeat(i),s=t.repeat(i+1);return`[
`+this.map(a=>s+a.toPrettyString(t,i+1)).join(`,
`)+`
`+r+"]"}toSimplifiedJson(){return this.map(t=>t.toSimplifiedJson())}toJson(){return{type:this.type,items:this.items.map(t=>t.toJson())}}toBytes(t){this.items.length===0?this.type=he.End:this.type=this.items[0].getId(),t.writeByte(this.type),t.writeInt(this.items.length);for(const i of this.items)i.toBytes(t)}static create(){return new jt}static fromJson(t){const i=Q.readObject(t)??{},r=Q.readNumber(i.type)??he.Compound,s=(Q.readArray(i.items)??[]).flatMap(a=>a!==void 0?[rt.fromJson(a,r)]:[]);return new jt(s,r)}static fromBytes(t){const i=t.readByte(),r=t.readInt();if(r<0)throw new Error(`Negative List length ${r}`);if(i===he.End&&r>0)throw new Error(`Missing type on ListTag but length is ${r}`);const s=[];for(let a=0;a<r;a+=1)s.push(rt.fromBytes(t,i));return new jt(s,i)}}rt.register(he.List,jt);const Tt=class Tt extends rt{constructor(t){super();L(this,"value");this.value=Tt.toPair(t)}static toPair(t){return Array.isArray(t)?t:Tt.bigintToPair(t)}static bigintToPair(t){return Tt.dataview.setBigInt64(0,t),[Tt.dataview.getInt32(0),Tt.dataview.getInt32(4)]}static pairToBigint(t){return Tt.dataview.setInt32(0,Number(t[0])),Tt.dataview.setInt32(4,Number(t[1])),Tt.dataview.getBigInt64(0)}static pairToString(t){return Tt.pairToBigint(t).toString()}static pairToNumber(t){return Number(Tt.pairToBigint(t))}getId(){return he.Long}equals(t){return t.isLong()&&this.value[0]===t.value[0]&&this.value[1]===t.value[1]}getAsNumber(){return Tt.pairToNumber(this.value)}getAsPair(){return this.value}toBigInt(){return Tt.pairToBigint(this.value)}toString(){return Tt.pairToString(this.value)+"L"}toPrettyString(){return this.toString()}toSimplifiedJson(){return Tt.pairToNumber(this.value)}toJson(){return this.value}toBytes(t){t.writeInt(this.value[0]),t.writeInt(this.value[1])}static create(){return new Tt([0,0])}static fromJson(t){return new Tt(Array.isArray(t)&&t.length===2?t.map(i=>typeof i=="number"?i:0):[0,0])}static fromBytes(t){const i=t.readInt(),r=t.readInt();return new Tt([i,r])}};L(Tt,"dataview",new DataView(new Uint8Array(8).buffer));let ns=Tt;rt.register(he.Long,ns);class Ni extends Js{constructor(e){super(Array.from(e??[],t=>typeof t=="bigint"||Array.isArray(t)?new ns(t):t))}getId(){return he.LongArray}equals(e){return e.isLongArray()&&this.length===e.length&&this.items.every((t,i)=>t.equals(e.items[i]))}getType(){return he.Long}get length(){return this.items.length}toString(){return"[L;"+this.items.map(t=>t.toString()).join(",")+"]"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.items.map(e=>e.getAsPair())}toJson(){return this.items.map(e=>e.getAsPair())}toBytes(e){e.writeInt(this.items.length);for(const t of this.items){const[i,r]=t.getAsPair();e.writeInt(i),e.writeInt(r)}}static create(){return new Ni}static fromJson(e){const t=Q.readArray(e,i=>Q.readPair(i,r=>Q.readNumber(r)??0)??[0,0])??[];return new Ni(t)}static fromBytes(e){const t=e.readInt();if(t<0)throw new Error(`Negative LongArray length ${t}`);const i=[];for(let r=0;r<t;r+=1)i.push([e.readInt(),e.readInt()]);return new Ni(i)}}rt.register(he.LongArray,Ni);class ar extends rt{constructor(t){super();L(this,"value");this.value=t}getId(){return he.Short}equals(t){return t.isShort()&&this.value===t.value}getAsNumber(){return this.value}toString(){return this.value.toFixed()+"s"}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeShort(this.value)}static create(){return new ar(0)}static fromJson(t){return new ar(typeof t=="number"?Math.floor(t):0)}static fromBytes(t){const i=t.readShort();return new ar(i)}}rt.register(he.Short,ar);const Ji=class Ji extends rt{constructor(t){super();L(this,"value");this.value=t}getId(){return he.String}equals(t){return t.isString()&&this.value===t.value}getAsString(){return this.value}toString(){return'"'+this.value.replace(/(\\|")/g,"\\$1")+'"'}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeString(this.value)}static create(){return Ji.EMPTY}static fromJson(t){return new Ji(typeof t=="string"?t:"")}static fromBytes(t){const i=t.readString();return new Ji(i)}};L(Ji,"EMPTY",new Ji(""));let Vn=Ji;rt.register(he.String,Vn);var Qa;(function(n){const e=new RegExp("^[-+]?(?:[0-9]+[.]|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?$","i"),t=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?d$","i"),i=new RegExp("^[-+]?(?:[0-9]+[.]?|[0-9]*[.][0-9]+)(?:e[-+]?[0-9]+)?f$","i"),r=new RegExp("^[-+]?(?:0|[1-9][0-9]*)b$","i"),s=new RegExp("^[-+]?(?:0|[1-9][0-9]*)l$","i"),a=new RegExp("^[-+]?(?:0|[1-9][0-9]*)s$","i"),o=new RegExp("^[-+]?(?:0|[1-9][0-9]*)$","i");function c(f){if(f.skipWhitespace(),!f.canRead())throw f.createError("Expected value");const g=f.peek();if(g==="{")return l(f);if(g==="[")if(f.canRead(3)&&!$t.isQuotedStringStart(f.peek(1))&&f.peek(2)===";"){f.expect("[",!0);const _=f.cursor,m=f.read();if(f.skip(),f.skipWhitespace(),f.canRead()){if(m==="B")return h(f,Ii,he.ByteArray,he.Byte);if(m==="L")return h(f,Ni,he.LongArray,he.Long);if(m==="I")return h(f,Ui,he.IntArray,he.Int);throw f.cursor=_,f.createError(`Invalid array type '${m}'`)}else throw f.createError("Expected value")}else return u(f);else{f.skipWhitespace();const _=f.cursor;if($t.isQuotedStringStart(f.peek()))return new Vn(f.readQuotedString());{const m=f.readUnquotedString();if(m.length===0)throw f.cursor=_,f.createError("Expected value");try{if(i.test(m)){const p=Number(m.substring(0,m.length-1));return new sr(p)}else if(r.test(m)){const p=Number(m.substring(0,m.length-1));return new Di(Math.floor(p))}else if(s.test(m)){const p=BigInt(m.substring(0,m.length-1));return new ns(p)}else if(a.test(m)){const p=Number(m.substring(0,m.length-1));return new ar(Math.floor(p))}else if(o.test(m)){const p=Number(m);return new _n(Math.floor(p))}else if(t.test(m)){const p=Number(m.substring(0,m.length-1));return new Fi(p)}else if(e.test(m)){const p=Number(m);return new Fi(p)}else{if(m.toLowerCase()==="true")return Di.ONE;if(m.toLowerCase()==="false")return Di.ZERO}}catch{}return m.length===0?Vn.EMPTY:new Vn(m)}}}n.readTag=c;function l(f){f.expect("{",!0);const g=new Map;for(f.skipWhitespace();f.canRead()&&f.peek()!=="}";){const _=f.cursor;if(f.skipWhitespace(),!f.canRead())throw f.createError("Expected key");const m=f.readString();if(m.length===0)throw f.cursor=_,f.createError("Expected key");f.expect(":",!0);const p=c(f);if(g.set(m,p),!d(f))break;if(!f.canRead())throw f.createError("Expected key")}return f.expect("}",!0),new At(g)}function u(f){if(f.expect("[",!0),f.skipWhitespace(),!f.canRead())throw f.createError("Expected value");const g=[];let _=he.End;for(;f.peek()!=="]";){const m=f.cursor,p=c(f),w=p.getId();if(_===he.End)_=w;else if(w!==_)throw f.cursor=m,f.createError(`Can't insert ${he[w]} into list of ${he[_]}`);if(g.push(p),!d(f))break;if(!f.canRead())throw f.createError("Expected value")}return f.expect("]",!0),new jt(g,_)}function h(f,g,_,m){const p=[];for(;f.peek()!=="]";){const w=c(f);if(w.getId()!==m)throw f.createError(`Can't insert ${he[w.getId()]} into ${he[_]}`);if(p.push(w.isLong()?w.getAsPair():w.getAsNumber()),!d(f))break;if(!f.canRead())throw f.createError("Expected value")}return f.expect("]"),new g(p)}function d(f){return f.skipWhitespace(),f.canRead()&&f.peek()===","?(f.skip(),f.skipWhitespace(),!0):!1}})(Qa||(Qa={}));class At extends rt{constructor(t){super();L(this,"properties");this.properties=t??new Map}[Symbol.iterator](){return(this.properties||new Map)[Symbol.iterator]()}getId(){return he.Compound}equals(t){return t.isCompound()&&this.size===t.size&&[...this.properties.entries()].every(([i,r])=>{const s=t.properties.get(i);return s!==void 0&&r.equals(s)})}has(t){return this.properties.has(t)}hasNumber(t){var i;return((i=this.get(t))==null?void 0:i.isNumber())??!1}hasString(t){var i;return((i=this.get(t))==null?void 0:i.isString())??!1}hasList(t,i,r){const s=this.get(t);return((s==null?void 0:s.isList())&&(i===void 0||s.getType()===i)&&(r===void 0||s.length===r))??!1}hasCompound(t){var i;return((i=this.get(t))==null?void 0:i.isCompound())??!1}get(t){return this.properties.get(t)}getString(t){var i;return((i=this.get(t))==null?void 0:i.getAsString())??""}getNumber(t){var i;return((i=this.get(t))==null?void 0:i.getAsNumber())??0}getBoolean(t){return this.getNumber(t)!==0}getList(t,i){const r=this.get(t);return r!=null&&r.isList()&&(i===void 0||r.getType()===i)?r:jt.create()}getCompound(t){const i=this.get(t);return i!=null&&i.isCompound()?i:At.create()}getByteArray(t){const i=this.get(t);return i!=null&&i.isByteArray()?i:Ii.create()}getIntArray(t){const i=this.get(t);return i!=null&&i.isIntArray()?i:Ui.create()}getLongArray(t){const i=this.get(t);return i!=null&&i.isLongArray()?i:Ni.create()}keys(){return this.properties.keys()}get size(){return this.properties.size}map(t){return Object.fromEntries([...this.properties.entries()].map(([i,r])=>t(i,r,this)))}forEach(t){[...this.properties.entries()].forEach(([i,r])=>t(i,r,this))}set(t,i){return this.properties.set(t,i),this}delete(t){return this.properties.delete(t)}clear(){return this.properties.clear(),this}toString(){const t=[];for(const[i,r]of this.properties.entries()){const s=i.split("").some(a=>!$t.isAllowedInUnquotedString(a));t.push((s?JSON.stringify(i):i)+":"+r.toString())}return"{"+t.join(",")+"}"}toPrettyString(t="  ",i=0){if(this.size===0)return"{}";const r=t.repeat(i),s=t.repeat(i+1),a=[];for(const[o,c]of this.properties.entries()){const l=o.split("").some(u=>!$t.isAllowedInUnquotedString(u));a.push((l?JSON.stringify(o):o)+": "+c.toPrettyString(t,i+1))}return`{
`+a.map(o=>s+o).join(`,
`)+`
`+r+"}"}toSimplifiedJson(){return this.map((t,i)=>[t,i.toSimplifiedJson()])}toJson(){return this.map((t,i)=>[t,{type:i.getId(),value:i.toJson()}])}toBytes(t){for(const[i,r]of this.properties.entries()){const s=r.getId();t.writeByte(s),t.writeString(i),r.toBytes(t)}t.writeByte(he.End)}static create(){return new At}static fromString(t){return Qa.readTag(t)}static fromJson(t){const i=Q.readMap(t,r=>{const{type:s,value:a}=Q.readObject(r)??{},o=Q.readNumber(s);return rt.fromJson(a??{},o)});return new At(new Map(Object.entries(i)))}static fromBytes(t){const i=new Map;for(;;){const r=t.readByte();if(r===he.End)break;const s=t.readString(),a=rt.fromBytes(t,r);i.set(s,a)}return new At(i)}}rt.register(he.Compound,At);const In=class In{constructor(e,t,i,r,s){L(this,"name");L(this,"root");L(this,"compression");L(this,"littleEndian");L(this,"bedrockHeader");this.name=e,this.root=t,this.compression=i,this.littleEndian=r,this.bedrockHeader=s}writeNamedTag(e){e.writeByte(he.Compound),e.writeString(this.name),this.root.toBytes(e)}write(){const e=this.littleEndian===!0||this.bedrockHeader!==void 0,t=new Rf({littleEndian:e,offset:this.bedrockHeader!==void 0?8:0});if(this.writeNamedTag(t),this.bedrockHeader!==void 0){const r=t.offset;t.offset=0,t.writeInt(this.bedrockHeader),t.writeInt(r-8),t.offset=r}const i=t.getData();return this.compression==="gzip"?wl.gzip(i):this.compression==="zlib"?wl.deflate(i):i}static readNamedTag(e){if(e.readByte()!==he.Compound)throw new Error("Top tag should be a compound");return{name:e.readString(),root:At.fromBytes(e)}}static create(e={}){const t=e.name??In.DEFAULT_NAME,i=At.create(),r=e.compression??"none",s=e.bedrockHeader===!0?In.DEFAULT_BEDROCK_HEADER:typeof e.bedrockHeader=="number"?e.bedrockHeader:void 0,a=e.littleEndian??s!==void 0;return new In(t,i,r,a,s)}static read(e,t={}){const i=typeof t.bedrockHeader=="number"?t.bedrockHeader:t.bedrockHeader?$v(e):void 0,r=t.compression==="gzip"||!i&&t.compression===void 0&&Xv(e),s=t.compression==="zlib"||!i&&t.compression===void 0&&qv(e),a=s||r?wl.inflate(e):e,o=t.littleEndian||i!==void 0,c=r?"gzip":s?"zlib":"none",l=new Af(a,{littleEndian:o,offset:i!==void 0?8:0}),{name:u,root:h}=In.readNamedTag(l);return new In(t.name??u,h,c,o,i)}toJson(){return{name:this.name,root:this.root.toJson(),compression:this.compression,littleEndian:this.littleEndian,bedrockHeader:this.bedrockHeader??null}}static fromJson(e){const t=Q.readObject(e)??{},i=Q.readString(t.name)??"",r=At.fromJson(t.root??{}),s=Q.readString(t.compression)??"none",a=Q.readBoolean(t.littleEndian)??!1,o=Q.readNumber(t.bedrockHeader);return new In(i,r,s,a,o)}};L(In,"DEFAULT_NAME",""),L(In,"DEFAULT_BEDROCK_HEADER",4);let Wn=In;class si{constructor(e,t,i,r,s){L(this,"x");L(this,"z");L(this,"compression");L(this,"timestamp");L(this,"raw");L(this,"file");L(this,"dirty");this.x=e,this.z=t,this.compression=i,this.timestamp=r,this.raw=s,this.dirty=!1}getCompression(){switch(this.compression){case 1:return"gzip";case 2:return"zlib";case 3:return"none";default:throw new Error(`Invalid compression mode ${this.compression}`)}}setCompression(e){switch(e){case"gzip":this.compression=1;break;case"zlib":this.compression=2;break;case"none":this.compression=3;break;default:throw new Error(`Invalid compression mode ${e}`)}}getFile(){return this.file===void 0&&(this.file=Wn.read(this.raw,{compression:this.getCompression()})),this.file}getRoot(){return this.getFile().root}setRoot(e){this.file===void 0&&(this.file=Wn.create({compression:this.getCompression()})),this.file.root=e,this.markDirty()}markDirty(){this.dirty=!0}getRaw(){if(this.file===void 0||this.dirty===!1)return this.raw;this.file.compression=this.getCompression();const e=this.file.write();return this.raw=e,this.dirty=!1,e}toJson(){return{x:this.x,z:this.z,compression:this.compression,timestamp:this.timestamp,size:this.raw.byteLength}}toRef(e){return new si.Ref(this.x,this.z,this.compression,this.timestamp,this.raw.byteLength,e)}static create(e,t,i,r){const s=new si(e,t,0,r??0,i.write());return s.setCompression(i.compression),s}static fromJson(e,t){const i=Q.readObject(e)??{},r=Q.readInt(i.x)??0,s=Q.readInt(i.z)??0,a=Q.readNumber(i.compression)??2,o=Q.readInt(i.timestamp)??0,c=Q.readInt(i.size)??0;return new si.Ref(r,s,a,o,c,t)}}(function(n){class e{constructor(i,r,s,a,o,c){L(this,"x");L(this,"z");L(this,"compression");L(this,"timestamp");L(this,"size");L(this,"resolver");L(this,"file");this.x=i,this.z=r,this.compression=s,this.timestamp=a,this.size=o,this.resolver=c}getFile(){if(this.file instanceof Wn)return this.file}getRoot(){if(this.file instanceof Wn)return this.file.root}async getFileAsync(){return this.file?this.file:(this.file=(async()=>{const i=await this.resolver(this.x,this.z);return this.file=i,i})(),this.file)}async getRootAsync(){return(await this.getFileAsync()).root}isResolved(){return this.file instanceof Wn}}n.Ref=e})(si||(si={}));class ud{constructor(e){L(this,"chunks");this.chunks=Array(32*32).fill(void 0);for(const t of e){const i=Bi.getIndex(t.x,t.z);this.chunks[i]=t}}getChunkPositions(){return this.chunks.flatMap(e=>e?[[e.x,e.z]]:[])}getChunk(e){if(!(e<0||e>=32*32))return this.chunks[e]}findChunk(e,t){return this.getChunk(Bi.getIndex(e,t))}getFirstChunk(){return this.chunks.filter(e=>e!==void 0)[0]}filter(e){return this.chunks.filter(t=>t!==void 0&&e(t))}map(e){return this.chunks.flatMap(t=>t!==void 0?[e(t)]:[])}}class Bi extends ud{constructor(e){super(e)}write(){let e=0;for(const s of this.chunks)s!==void 0&&(e+=Math.ceil(s.getRaw().length/4096));const t=new Uint8Array(8192+e*4096),i=new DataView(t.buffer);let r=2;for(const s of this.chunks){if(s===void 0)continue;const a=s.getRaw(),o=4*((s.x&31)+(s.z&31)*32),c=Math.ceil(a.length/4096);i.setInt8(o,r>>16),i.setInt16(o+1,r&65535),i.setInt8(o+3,c),i.setInt32(o+4096,s.timestamp);const l=r*4096;i.setInt32(l,a.length+1),i.setInt8(l+4,s.compression),t.set(a,l+5),r+=c}return t}static read(e){const t=[];for(let i=0;i<32;i+=1)for(let r=0;r<32;r+=1){const s=4*((i&31)+(r&31)*32);if(e[s+3]===0)continue;const o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],c=(e[s+4096]<<24)+(e[s+4097]<<16)+(e[s+4098]<<8)+e[s+4099],l=o*4096,u=(e[l]<<24)+(e[l+1]<<16)+(e[l+2]<<8)+e[l+3],h=e[l+4],d=e.slice(l+5,l+4+u);t.push(new si(i,r,h,c,d))}return new Bi(t)}static getIndex(e,t){return(e&31)+(t&31)*32}toJson(){return{chunks:this.map(e=>e.toJson())}}static fromJson(e,t){const i=Q.readObject(e)??{},s=(Q.readArray(i.chunks)??[]).flatMap(a=>a!==void 0?[si.fromJson(a,t)]:[]);return new Bi.Ref(s)}}(function(n){class e extends ud{}n.Ref=e})(Bi||(Bi={}));class Fi extends rt{constructor(t){super();L(this,"value");this.value=t}getId(){return he.Double}equals(t){return t.isDouble()&&this.value===t.value}getAsNumber(){return this.value}toString(){return Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}toPrettyString(){return this.toString()}toSimplifiedJson(){return this.value}toJson(){return this.value}toBytes(t){t.writeDouble(this.value)}static create(){return new Fi(0)}static fromJson(t){return new Fi(Q.readNumber(t)??0)}static fromBytes(t){const i=t.readDouble();return new Fi(i)}}rt.register(he.Double,Fi);const Qi=class Qi extends rt{constructor(){super()}getId(){return he.End}equals(e){return e.isEnd()}toString(){return"END"}toPrettyString(){return this.toString()}toSimplifiedJson(){return null}toJson(){return null}toBytes(){}static create(){return Qi.INSTANCE}static fromJson(){return Qi.INSTANCE}static fromBytes(){return Qi.INSTANCE}};L(Qi,"INSTANCE",new Qi);let eo=Qi;rt.register(he.End,eo);var Ke;(function(n){n.UP="up",n.DOWN="down",n.NORTH="north",n.EAST="east",n.SOUTH="south",n.WEST="west"})(Ke||(Ke={}));const $y={[Ke.UP]:[0,1,0],[Ke.DOWN]:[0,-1,0],[Ke.NORTH]:[0,0,-1],[Ke.EAST]:[1,0,0],[Ke.SOUTH]:[0,0,1],[Ke.WEST]:[-1,0,0]};(function(n){n.ALL=[n.UP,n.DOWN,n.NORTH,n.EAST,n.SOUTH,n.WEST];function e(t){return $y[t]}n.normal=e})(Ke||(Ke={}));var Rt;(function(n){function e(h,d,f){return[h,d,f]}n.create=e,n.ZERO=n.create(0,0,0);function t(h,d,f,g){return[h[0]+d,h[1]+f,h[2]+g]}n.offset=t;function i(h,d){return[h[0]-d[0],h[1]-d[1],h[2]-d[2]]}n.subtract=i;function r(h,d){return[h[0]+d[0],h[1]+d[1],h[2]+d[2]]}n.add=r;function s(h,d){return n.offset(h,...Ke.normal(d))}n.towards=s;function a(h,d){return h===d?!0:h[0]===d[0]&&h[1]===d[1]&&h[2]===d[2]}n.equals=a;function o(h){return h[0]*h[0]+h[1]*h[1]+h[2]*h[2]}n.magnitude=o;function c(h){return new jt(h.map(d=>new _n(d)))}n.toNbt=c;function l(h){return h.getAsTuple(3,d=>d!=null&&d.isInt()?d.getAsNumber():0)}n.fromNbt=l;function u(h){const d=Q.readArray(h,f=>Q.readInt(f)??0)??[0,0,0];return e(d[0],d[1],d[2])}n.fromJson=u})(Rt||(Rt={}));const bn=class bn{constructor(e,t){L(this,"namespace");L(this,"path");this.namespace=e,this.path=t}is(e){return this.equals(bn.parse(e))}equals(e){return this===e?!0:e instanceof bn?this.namespace===e.namespace&&this.path===e.path:!1}toString(){return this.namespace+bn.SEPARATOR+this.path}withPrefix(e){return new bn(this.namespace,e+this.path)}static create(e){return new bn(this.DEFAULT_NAMESPACE,e)}static parse(e){const t=e.indexOf(this.SEPARATOR);if(t>=0){const i=t>=1?e.substring(0,t):this.DEFAULT_NAMESPACE,r=e.substring(t+1);return new bn(i,r)}return new bn(this.DEFAULT_NAMESPACE,e)}};L(bn,"DEFAULT_NAMESPACE","minecraft"),L(bn,"SEPARATOR",":");let J=bn;var yt;let Ti=(yt=class{constructor(e,t={}){L(this,"properties");L(this,"name");this.properties=t,this.name=typeof e=="string"?J.parse(e):e}getName(){return this.name}getProperties(){return this.properties}getProperty(e){return this.properties[e]}isFluid(){return this.is(yt.WATER)||this.is(yt.LAVA)}isWaterlogged(){return this.is(yt.WATER)||this.is(yt.LAVA)||this.is("bubble_column")||this.is("kelp")||this.is("kelp_plant")||this.is("seagrass")||this.is("tall_seagrass")||this.properties.waterlogged==="true"}equals(e){if(!this.name.equals(e.name))return!1;const t=Object.keys(this.properties);return t.length!==Object.keys(e.properties).length?!1:t.every(i=>e.properties[i]===this.properties[i])}is(e){return typeof e=="string"?this.name.equals(J.parse(e)):e instanceof J?this.name.equals(e):this.name.equals(e.name)}toString(){return Object.keys(this.properties).length===0?this.name.toString():`${this.name.toString()}[${Object.entries(this.properties).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>e+"="+t).join(",")}]`}toNbt(){const e=new At().set("Name",new Vn(this.name.toString())),t=Object.entries(this.properties).sort(([i],[r])=>i.localeCompare(r));return t.length>0&&e.set("Properties",new At(new Map(t.map(([i,r])=>[i,new Vn(r)])))),e}static parse(e){const t=e.indexOf("[");if(t===-1)return new yt(e);{const i=e.substring(0,t),r=e.substring(t+1,e.length-1).split(","),s=Object.fromEntries(r.map(a=>a.split("=")));return new yt(i,s)}}static fromNbt(e){const t=J.parse(e.getString("Name")),i=e.getCompound("Properties").map((r,s)=>[r,s.getAsString()]);return new yt(t,i)}static fromJson(e){const t=Q.readObject(e)??{},i=J.parse(Q.readString(t.Name)??yt.STONE.name.toString()),r=Q.readMap(t.Properties,s=>Q.readString(s)??"");return new yt(i,r)}},L(yt,"AIR",new yt(J.create("air"))),L(yt,"STONE",new yt(J.create("stone"))),L(yt,"WATER",new yt(J.create("water"),{level:"0"})),L(yt,"LAVA",new yt(J.create("lava"),{level:"0"})),yt);const co=class co{constructor(e,t){L(this,"size");L(this,"defaultValue");L(this,"storage");L(this,"palette");this.size=e,this.defaultValue=t,this.storage=Array(e).fill(0),this.palette=[t]}index(e,t,i){if(!this.isLocalCoordinate(e)||!this.isLocalCoordinate(t)||!this.isLocalCoordinate(i))throw new Error(`Coordinates ${e},${t},${i} are outside paletted container bounds 0..15`);return(e<<8)+(t<<4)+i}isLocalCoordinate(e){return Number.isInteger(e)&&e>=0&&e<co.WIDTH}get(e,t,i){const r=this.storage[this.index(e,t,i)];return this.palette[r]}set(e,t,i,r){let s=this.palette.findIndex(a=>a.equals(r));s===-1&&(s=this.palette.length,this.palette.push(r)),this.storage[this.index(e,t,i)]=s}};L(co,"WIDTH",16);let to=co;const xi=class xi{constructor(e){L(this,"minY");L(this,"states");this.minY=e,this.states=new to(xi.SIZE,Ti.AIR)}get minBlockY(){return this.minY<<4}getBlockState(e,t,i){return this.states.get(e,t,i)}setBlockState(e,t,i,r){this.states.set(e,t,i,r)}};L(xi,"WIDTH",16),L(xi,"SIZE",xi.WIDTH*xi.WIDTH*xi.WIDTH);let Wl=xi;var Xl;(function(n){function e(u,h){return[u,h]}n.create=e;function t(u){return[u[0]>>4,u[2]>>4]}n.fromBlockPos=t;function i(u){return[Number(u)&4294967295,Number(u>>BigInt(32))]}n.fromLong=i;function r(u){return s(u[0],u[1])}n.toLong=r;function s(u,h){return BigInt(u&4294967295)|BigInt(h&4294967295)<<BigInt(32)}n.asLong=s;function a(u){return u[0]<<4}n.minBlockX=a;function o(u){return u[1]<<4}n.minBlockZ=o;function c(u){return(u[0]<<4)+15}n.maxBlockX=c;function l(u){return(u[1]<<4)+15}n.maxBlockZ=l})(Xl||(Xl={}));const hd=new Map([["minecraft:speed",3402751],["minecraft:slowness",9154528],["minecraft:haste",14270531],["minecraft:mining_fatigue",4866583],["minecraft:strength",16762624],["minecraft:instant_health",16262179],["minecraft:instant_damage",11101546],["minecraft:jump_boost",16646020],["minecraft:nausea",5578058],["minecraft:regeneration",13458603],["minecraft:resistance",9520880],["minecraft:fire_resistance",16750848],["minecraft:water_breathing",10017472],["minecraft:invisibility",16185078],["minecraft:blindness",2039587],["minecraft:night_vision",12779366],["minecraft:hunger",5797459],["minecraft:weakness",4738376],["minecraft:poison",8889187],["minecraft:wither",7561558],["minecraft:health_boost",16284963],["minecraft:absorption",2445989],["minecraft:saturation",16262179],["minecraft:glowing",9740385],["minecraft:levitation",13565951],["minecraft:luck",5882118],["minecraft:unluck",12624973],["minecraft:slow_falling",15978425],["minecraft:conduit_power",1950417],["minecraft:dolphins_grace",8954814],["minecraft:bad_omen",745784],["minecraft:hero_of_the_village",4521796],["minecraft:darkness",2696993],["minecraft:trial_omen",1484454],["minecraft:raid_omen",14565464],["minecraft:wind_charged",12438015],["minecraft:weaving",7891290],["minecraft:oozing",10092451],["minecraft:infested",9214860]]);var no;(function(n){function e(t){return{effect:J.parse(t.getString("id")),duration:t.getNumber("duration"),amplifier:t.getNumber("amplifier")}}n.fromNbt=e})(no||(no={}));const fd=new Map([["minecraft:empty",[]],["minecraft:water",[]],["minecraft:mundane",[]],["minecraft:thick",[]],["minecraft:awkward",[]],["minecraft:night_vision",[{effect:J.create("night_vision"),duration:3600,amplifier:0}]],["minecraft:long_night_vision",[{effect:J.create("night_vision"),duration:9600,amplifier:0}]],["minecraft:invisibility",[{effect:J.create("invisibility"),duration:3600,amplifier:0}]],["minecraft:long_invisibility",[{effect:J.create("invisibility"),duration:9600,amplifier:0}]],["minecraft:leaping",[{effect:J.create("jump_boost"),duration:3600,amplifier:0}]],["minecraft:long_leaping",[{effect:J.create("jump_boost"),duration:9600,amplifier:0}]],["minecraft:strong_leaping",[{effect:J.create("jump_boost"),duration:1800,amplifier:1}]],["minecraft:fire_resistance",[{effect:J.create("fire_resistance"),duration:3600,amplifier:0}]],["minecraft:long_fire_resistance",[{effect:J.create("fire_resistance"),duration:9600,amplifier:0}]],["minecraft:swiftness",[{effect:J.create("speed"),duration:3600,amplifier:0}]],["minecraft:long_swiftness",[{effect:J.create("speed"),duration:9600,amplifier:0}]],["minecraft:strong_swiftness",[{effect:J.create("speed"),duration:1800,amplifier:1}]],["minecraft:slowness",[{effect:J.create("slowness"),duration:1800,amplifier:0}]],["minecraft:long_slowness",[{effect:J.create("slowness"),duration:4800,amplifier:0}]],["minecraft:strong_slowness",[{effect:J.create("slowness"),duration:400,amplifier:3}]],["minecraft:turtle_master",[{effect:J.create("slowness"),duration:400,amplifier:3},{effect:J.create("resistance"),duration:400,amplifier:2}]],["minecraft:long_turtle_master",[{effect:J.create("slowness"),duration:800,amplifier:3},{effect:J.create("resistance"),duration:800,amplifier:2}]],["minecraft:strong_turtle_master",[{effect:J.create("slowness"),duration:400,amplifier:5},{effect:J.create("resistance"),duration:400,amplifier:3}]],["minecraft:water_breathing",[{effect:J.create("water_breathing"),duration:3600,amplifier:0}]],["minecraft:long_water_breathing",[{effect:J.create("water_breathing"),duration:9600,amplifier:0}]],["minecraft:healing",[{effect:J.create("instant_health"),duration:1,amplifier:0}]],["minecraft:strong_healing",[{effect:J.create("instant_health"),duration:1,amplifier:1}]],["minecraft:harming",[{effect:J.create("instant_damage"),duration:1,amplifier:0}]],["minecraft:strong_harming",[{effect:J.create("instant_damage"),duration:1,amplifier:1}]],["minecraft:poison",[{effect:J.create("poison"),duration:900,amplifier:0}]],["minecraft:long_poison",[{effect:J.create("poison"),duration:1800,amplifier:0}]],["minecraft:strong_poison",[{effect:J.create("poison"),duration:432,amplifier:1}]],["minecraft:regeneration",[{effect:J.create("regeneration"),duration:900,amplifier:0}]],["minecraft:long_regeneration",[{effect:J.create("regeneration"),duration:1800,amplifier:0}]],["minecraft:strong_regeneration",[{effect:J.create("regeneration"),duration:450,amplifier:1}]],["minecraft:strength",[{effect:J.create("strength"),duration:3600,amplifier:0}]],["minecraft:long_strength",[{effect:J.create("strength"),duration:9600,amplifier:0}]],["minecraft:strong_strength",[{effect:J.create("strength"),duration:1800,amplifier:1}]],["minecraft:weakness",[{effect:J.create("weakness"),duration:1800,amplifier:0}]],["minecraft:long_weakness",[{effect:J.create("weakness"),duration:4800,amplifier:0}]],["minecraft:luck",[{effect:J.create("luck"),duration:6e3,amplifier:0}]],["minecraft:slow_falling",[{effect:J.create("slow_falling"),duration:1800,amplifier:0}]],["minecraft:long_slow_falling",[{effect:J.create("slow_falling"),duration:4800,amplifier:0}]],["minecraft:wind_charged",[{effect:J.create("wind_charged"),duration:3600,amplifier:0}]],["minecraft:weaving",[{effect:J.create("weaving"),duration:3600,amplifier:0}]],["minecraft:oozing",[{effect:J.create("oozing"),duration:3600,amplifier:0}]],["minecraft:infested",[{effect:J.create("infested"),duration:3600,amplifier:0}]]]);var Os;(function(n){function e(s){const a={};return s.isString()?a.potion=J.parse(s.getAsString()):s.isCompound()&&(s.hasString("potion")&&(a.potion=J.parse(s.getString("potion"))),s.hasNumber("custom_color")&&(a.customColor=s.getNumber("custom_color")),s.hasList("custom_effects")&&(a.customEffects=s.getList("custom_effects",he.Compound).map(no.fromNbt))),a}n.fromNbt=e;function t(s){if(s.customColor)return qe.intToRgb(s.customColor);const a=i(s);return r(a)}n.getColor=t;function i(s){const a=[];return s.potion&&a.push(...fd.get(s.potion.toString())??[]),s.customEffects&&a.push(...s.customEffects),a}n.getAllEffects=i;function r(s){let[a,o,c]=[0,0,0],l=0;for(const u of s){const h=hd.get(u.effect.toString());if(h===void 0)continue;const d=qe.intToRgb(h),f=u.amplifier+1;a+=f*d[0],o+=f*d[1],c+=f*d[2],l+=f}return l===0?qe.intToRgb(-13083194):(a=a/l,o=o/l,c=c/l,[a,o,c])}})(Os||(Os={}));var io;(function(n){function e(r,s){return a=>typeof a=="string"?i(r,J.parse(a)):t(s(a))}n.parser=e;function t(r,s){return{value:()=>r,key:()=>s}}n.direct=t;function i(r,s,a=!0){return a?{value:()=>r.getOrThrow(s),key:()=>s}:{value:()=>r.get(s),key:()=>s}}n.reference=i})(io||(io={}));class ii{constructor(e,t,i=new Map){L(this,"id");L(this,"count");L(this,"components");this.id=e,this.count=t,this.components=i}getComponent(e,t){var r;if(typeof e=="string"&&(e=J.parse(e)),this.components.has("!"+e.toString()))return;const i=this.components.get(e.toString());if(i)return i;if(t)return(r=t.getItemComponents(this.id))==null?void 0:r.get(e.toString())}hasComponent(e,t){var i;return typeof e=="string"&&(e=J.parse(e)),this.components.has("!"+e.toString())?!1:this.components.has(e.toString())?!0:t?(i=t.getItemComponents(this.id))==null?void 0:i.has(e.toString()):!1}clone(){const e=new Map(this.components);return new ii(this.id,this.count,e)}is(e){return typeof e=="string"?this.id.equals(J.parse(e)):e instanceof J?this.id.equals(e):this.id.equals(e.id)}equals(e){return this===e?!0:e instanceof ii?this.count===e.count&&this.isSameItemSameComponents(e):!1}isSameItemSameComponents(e){if(!this.id.equals(e.id)||this.components.size!==e.components.size)return!1;for(const[t,i]of this.components){const r=e.components.get(t);if(i.toString()!==(r==null?void 0:r.toString()))return!1}return!0}toString(){let e=this.id.toString();return this.components.size>0&&(e+=`[${[...this.components.entries()].map(([t,i])=>t.startsWith("!")?t:`${t}=${i.toString()}`).join(",")}]`),this.count>1&&(e+=` ${this.count}`),e}static fromString(e){const t=new $t(e);t.skipWhitespace();const i=t.cursor;for(;t.canRead()&&t.peek()!=="["&&!$t.isWhitespace(t.peek());)t.skip();const r=J.parse(t.getRead(i)),s=new Map;t.skipWhitespace(),t.canRead()&&t.peek()==="["&&ii.readComponents(t,s),t.skipWhitespace();const a=t.canRead()?t.readInt():1;if(t.skipWhitespace(),t.canRead())throw t.createError("Unexpected trailing data");return new ii(r,a,s)}static readComponents(e,t){if(e.expect("["),e.skipWhitespace(),e.canRead()&&e.peek()==="]"){e.skip();return}do{if(e.peek()==="!"){e.skip(),e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="]"&&e.peek()!==",";)e.skip();t.set("!"+J.parse(e.getRead(i).trim()).toString(),new At)}else{e.skipWhitespace();const i=e.cursor;for(;e.canRead()&&e.peek()!=="=";)e.skip();const r=J.parse(e.getRead(i).trim()).toString();if(!e.canRead())break;e.skip(),e.skipWhitespace();const s=Qa.readTag(e);t.set(r,s)}if(e.skipWhitespace(),!e.canRead())break;if(e.peek()==="]"){e.skip();return}if(e.peek()!==",")throw new Error("Expected , or ]");e.skip()}while(e.canRead());throw new Error("Missing closing ]")}toNbt(){const e=new At().set("id",new Vn(this.id.toString()));return this.count>1&&e.set("count",new _n(this.count)),this.components.size>0&&e.set("components",new At(this.components)),e}static fromNbt(e){const t=J.parse(e.getString("id")),i=e.hasNumber("count")?e.getNumber("count"):1,r=new Map(Object.entries(e.getCompound("components").map((s,a)=>s.startsWith("!")?["!"+J.parse(s).toString(),new At]:[J.parse(s).toString(),a])));return new ii(t,i,r)}}const yi=class yi{constructor(e,t){L(this,"key");L(this,"parser");L(this,"storage",new Map);L(this,"builtin",new Map);L(this,"tags");this.key=e,this.parser=t}static createAndRegister(e,t){const i=new yi(J.create(e),t);return yi.REGISTRY.register(i.key,i),i}register(e,t,i){return this.storage.set(e.toString(),t),i&&this.builtin.set(e.toString(),t),io.reference(this,e)}delete(e){const t=this.storage.delete(e.toString());return this.builtin.delete(e.toString()),t}keys(){return[...this.storage.keys()].map(e=>J.parse(e))}has(e){return this.storage.has(e.toString())}get(e){var t=this.storage.get(e.toString());return t instanceof Function&&(t=t(),this.storage.set(e.toString(),t)),t}getOrThrow(e){const t=this.get(e);if(t===void 0)throw new Error(`Missing key in ${this.key.toString()}: ${e.toString()}`);return t}parse(e){if(!this.parser)throw new Error(`No parser exists for ${this.key.toString()}`);return this.parser(e)}clear(){this.storage.clear();for(const[e,t]of this.builtin.entries())this.storage.set(e,t);return this.tags&&this.tags.clear(),this}assign(e){if(!this.key.equals(e.key))throw new Error(`Cannot assign registry of type ${e.key.toString()} to registry of type ${this.key.toString()}`);for(const t of e.keys())this.storage.set(t.toString(),e.getOrThrow(t));return this}cloneEmpty(){return new yi(this.key,this.parser)}forEach(e){for(const[t,i]of this.storage.entries())e(J.parse(t),i instanceof Function?i():i,this)}map(e){return[...this.storage.entries()].map(([t,i])=>e(J.parse(t),i instanceof Function?i():i,this))}getTagRegistry(){return this.tags===void 0&&(this.tags=new yi(new J(this.key.namespace,`tags/${this.key.path}`))),this.tags}};L(yi,"REGISTRY",new yi(J.create("root")));let ro=yi;var Yr;(function(n){n.NONE="none",n.CLOCKWISE_90="clockwise_90",n.CLOCKWISE_180="180",n.COUNTERCLOCKWISE_90="counterclockwise_90"})(Yr||(Yr={}));const Yy=[{key:"north",offset:[0,0,-1]},{key:"east",offset:[1,0,0]},{key:"south",offset:[0,0,1]},{key:"west",offset:[-1,0,0]}],dd=new Set(["minecraft:air","minecraft:cave_air","minecraft:void_air","minecraft:water","minecraft:lava"]),jy=[/_banner$/,/_button$/,/_carpet$/,/_coral$/,/_coral_fan$/,/_door$/,/_fence$/,/_fence_gate$/,/_flower$/,/_glass_pane$/,/_hanging_sign$/,/_leaves$/,/_pressure_plate$/,/_rail$/,/_sapling$/,/_sign$/,/_slab$/,/_stairs$/,/_torch$/,/_trapdoor$/,/_wall$/,/_wall_banner$/,/_wall_hanging_sign$/,/_wall_sign$/,/_wall_torch$/,/_wool_carpet$/,/^attached_/,/^potted_/,/amethyst_cluster$/,/azalea$/,/bamboo$/,/bell$/,/big_dripleaf$/,/brewing_stand$/,/cake$/,/chain$/,/chest$/,/cocoa$/,/comparator$/,/conduit$/,/dead_bush$/,/decorated_pot$/,/end_rod$/,/fern$/,/grass$/,/grindstone$/,/kelp$/,/ladder$/,/lantern$/,/lever$/,/lightning_rod$/,/mangrove_roots$/,/mushroom$/,/pane$/,/repeater$/,/scaffolding$/,/seagrass$/,/skull$/,/soul_lantern$/,/sugar_cane$/,/turtle_egg$/,/twisting_vines$/,/vine$/,/weeping_vines$/];function fc(n){return n.includes(":")?n.split(":")[1]:n}function ql(n){const e=fc(n);return e==="iron_bars"||e.endsWith("glass_pane")}function $l(n){const e=fc(n);return e==="nether_brick_fence"||e.endsWith("_fence")&&!e.endsWith("_fence_gate")}function Zy(n){return ql(n)||$l(n)}function kh(n){if(!n||dd.has(n))return!1;const e=fc(n);return!jy.some(t=>t.test(e))}function Ky(n,e){return!e||dd.has(e)?!1:ql(n)?ql(e)||kh(e):$l(n)?$l(e)||kh(e):!1}var zn;let Jy=(zn=class{constructor(e,t=[],i=[]){L(this,"size");L(this,"palette");L(this,"blocks");L(this,"blocksMap",[]);L(this,"xStride");L(this,"yStride");L(this,"placedBlocksCache",null);L(this,"placedBlocksMapCache",null);L(this,"paletteIndex",new Map);this.size=e,this.palette=t,this.blocks=i,this.xStride=e[1]*e[2],this.yStride=e[2],this.palette.forEach((r,s)=>{this.paletteIndex.set(r.toString(),s)}),i.forEach(r=>{if(!this.isInside(r.pos))throw new Error(`Found block at ${r.pos} which is outside the structure bounds ${this.size}`);this.blocksMap[this.getIndex(r.pos)]=r})}getSize(){return this.size}addBlock(e,t,i,r){if(!this.isInside(e))throw new Error(`Cannot add block at ${e} outside the structure bounds ${this.size}`);const s=new Ti(t,i),a=s.toString();let o=this.paletteIndex.get(a);o===void 0&&(o=this.palette.length,this.palette.push(s),this.paletteIndex.set(a,o));const c=this.getIndex(e),l=this.blocksMap[c];if(l)l.state=o,l.nbt=r;else{const u={pos:Rt.create(e[0],e[1],e[2]),state:o,nbt:r};this.blocks.push(u),this.blocksMap[c]=u}return this.clearPlacedCaches(),this}getBlocks(){return this.ensurePlacedCaches(),this.placedBlocksCache??[]}getBlock(e){var i;return this.isInside(e)?(this.ensurePlacedCaches(),((i=this.placedBlocksMapCache)==null?void 0:i[this.getIndex(e)])??null):null}clone(){return new zn(Rt.create(this.size[0],this.size[1],this.size[2]),this.palette.map(e=>new Ti(e.getName(),{...e.getProperties()})),this.blocks.map(e=>({pos:Rt.create(e.pos[0],e.pos[1],e.pos[2]),state:e.state,nbt:e.nbt})))}updateBlockStates(){const e=[];for(const t of this.getBlocks()){const i=t.state.getName().toString();if(!Zy(i))continue;const r={...t.state.getProperties()};for(const s of Yy){const a=this.getBlock(Rt.add(t.pos,s.offset)),o=(a==null?void 0:a.state.getName().toString())??"";r[s.key]=Ky(i,o)?"true":"false"}r.waterlogged===void 0&&(r.waterlogged="false"),!new Ti(i,r).equals(t.state)&&e.push({pos:t.pos,name:i,properties:r,nbt:t.nbt})}for(const t of e)this.addBlock(t.pos,t.name,t.properties,t.nbt);return{updatedBlocks:e.length}}toPlacedBlock(e){const t=this.palette[e.state];if(!t)throw new Error(`Block at ${e.pos.join(" ")} in structure references invalid palette index ${e.state}`);return{pos:e.pos,state:t,nbt:e.nbt}}isInside(e){return e[0]>=0&&e[0]<this.size[0]&&e[1]>=0&&e[1]<this.size[1]&&e[2]>=0&&e[2]<this.size[2]}getIndex(e){return e[0]*this.xStride+e[1]*this.yStride+e[2]}ensurePlacedCaches(){if(!(this.placedBlocksCache&&this.placedBlocksMapCache)){this.placedBlocksCache=[],this.placedBlocksMapCache=[];for(const e of this.blocks){const t=this.toPlacedBlock(e);this.placedBlocksCache.push(t),this.placedBlocksMapCache[this.getIndex(e.pos)]=t}}}clearPlacedCaches(){this.placedBlocksCache=null,this.placedBlocksMapCache=null}toNbt(e={}){const t=e.updateBlockStates?this.clone():this;e.updateBlockStates&&t.updateBlockStates();const i=[],r=new Map,s=t.blocks.map(o=>{const c=t.toPlacedBlock(o),l=c.state.toString();let u=r.get(l);u===void 0&&(u=i.length,i.push(c.state),r.set(l,u));const h=new At().set("pos",Rt.toNbt(c.pos)).set("state",new _n(u));return c.nbt&&c.nbt.size>0&&h.set("nbt",c.nbt),h}),a=new At().set("size",Rt.toNbt(this.size)).set("palette",new jt(i.map(o=>o.toNbt()))).set("blocks",new jt(s)).set("entities",new jt);return e.dataVersion!==void 0&&a.set("DataVersion",new _n(e.dataVersion)),a}writeNbt(e={}){return new Wn(e.name??"",this.toNbt(e),e.compression??"gzip",!1,void 0).write()}static fromNbt(e){const t=Rt.fromNbt(e.getList("size")),i=e.getList("palette",he.Compound).map(s=>Ti.fromNbt(s)),r=e.getList("blocks",he.Compound).map(s=>{const a=Rt.fromNbt(s.getList("pos")),o=s.getNumber("state"),c=s.getCompound("nbt");return{pos:a,state:o,nbt:c.size>0?c:void 0}});return new zn(t,i,r)}static transform(e,t,i){switch(t){case Yr.COUNTERCLOCKWISE_90:return Rt.create(i[0]-i[2]+e[2],e[1],i[0]+i[2]-e[0]);case Yr.CLOCKWISE_90:return Rt.create(i[0]+i[2]-e[2],e[1],i[2]-i[0]+e[0]);case Yr.CLOCKWISE_180:return Rt.create(i[0]+i[0]-e[0],e[1],i[2]+i[2]-e[2]);default:return e}}},L(zn,"REGISTRY",ro.createAndRegister("structures")),L(zn,"EMPTY",new zn(Rt.ZERO)),zn);class St{constructor(e,t,i){L(this,"x");L(this,"y");L(this,"z");this.x=e,this.y=t,this.z=i}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}distance(e){return this.sub(e).length()}distanceSquared(e){return this.sub(e).lengthSquared()}abs(){return new St(Math.abs(this.x),Math.abs(this.y),Math.abs(this.z))}add(e){return new St(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new St(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new St(this.x*e.x,this.y*e.y,this.z*e.z)}div(e){return new St(this.x/e.x,this.y/e.y,this.z/e.z)}scale(e){return new St(this.x*e,this.y*e,this.z*e)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,r=this.x*e.y-this.y*e.x;return new St(t,i,r)}normalize(){if(this.x==0&&this.y==0&&this.z==0)return this;const e=1/this.length();return new St(this.x*e,this.y*e,this.z*e)}components(){return[this.x,this.y,this.z]}toString(){return`[${this.x} ${this.y} ${this.z}]`}}function bi(n,e,t){return Math.max(e,Math.min(t,n))}function Yl(n){return(n&n-1)===0}function dc(n){return n-=1,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>18,n|=n>>32,n+1}var Ba=1e-6,pr=typeof Float32Array<"u"?Float32Array:Array,Qy=Math.PI/180;function jl(n){return n*Qy}function st(){var n=new pr(16);return pr!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function eS(n){var e=new pr(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function tS(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function nS(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function iS(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=t*o-i*a,v=t*c-r*a,y=t*l-s*a,P=i*c-r*o,b=i*l-s*o,E=r*l-s*c,U=u*_-h*g,M=u*m-d*g,x=u*p-f*g,R=h*m-d*_,N=h*p-f*_,D=d*p-f*m,F=w*D-v*N+y*R+P*x-b*M+E*U;return F?(F=1/F,n[0]=(o*D-c*N+l*R)*F,n[1]=(r*N-i*D-s*R)*F,n[2]=(_*E-m*b+p*P)*F,n[3]=(d*b-h*E-f*P)*F,n[4]=(c*x-a*D-l*M)*F,n[5]=(t*D-r*x+s*M)*F,n[6]=(m*y-g*E-p*v)*F,n[7]=(u*E-d*y+f*v)*F,n[8]=(a*N-o*x+l*U)*F,n[9]=(i*x-t*N-s*U)*F,n[10]=(g*b-_*y+p*w)*F,n[11]=(h*y-u*b-f*w)*F,n[12]=(o*M-a*R-c*U)*F,n[13]=(t*R-i*M+r*U)*F,n[14]=(_*v-g*P-m*w)*F,n[15]=(u*P-h*v+d*w)*F,n):null}function He(n,e,t){var i=t[0],r=t[1],s=t[2],a,o,c,l,u,h,d,f,g,_,m,p;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],c=e[2],l=e[3],u=e[4],h=e[5],d=e[6],f=e[7],g=e[8],_=e[9],m=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=c,n[3]=l,n[4]=u,n[5]=h,n[6]=d,n[7]=f,n[8]=g,n[9]=_,n[10]=m,n[11]=p,n[12]=a*i+u*r+g*s+e[12],n[13]=o*i+h*r+_*s+e[13],n[14]=c*i+d*r+m*s+e[14],n[15]=l*i+f*r+p*s+e[15]),n}function pn(n,e,t){var i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function rS(n,e,t,i){var r=i[0],s=i[1],a=i[2],o=Math.sqrt(r*r+s*s+a*a),c,l,u,h,d,f,g,_,m,p,w,v,y,P,b,E,U,M,x,R,N,D,F,C;return o<Ba?null:(o=1/o,r*=o,s*=o,a*=o,c=Math.sin(t),l=Math.cos(t),u=1-l,h=e[0],d=e[1],f=e[2],g=e[3],_=e[4],m=e[5],p=e[6],w=e[7],v=e[8],y=e[9],P=e[10],b=e[11],E=r*r*u+l,U=s*r*u+a*c,M=a*r*u-s*c,x=r*s*u-a*c,R=s*s*u+l,N=a*s*u+r*c,D=r*a*u+s*c,F=s*a*u-r*c,C=a*a*u+l,n[0]=h*E+_*U+v*M,n[1]=d*E+m*U+y*M,n[2]=f*E+p*U+P*M,n[3]=g*E+w*U+b*M,n[4]=h*x+_*R+v*N,n[5]=d*x+m*R+y*N,n[6]=f*x+p*R+P*N,n[7]=g*x+w*R+b*N,n[8]=h*D+_*F+v*C,n[9]=d*D+m*F+y*C,n[10]=f*D+p*F+P*C,n[11]=g*D+w*F+b*C,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function is(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+l*i,n[5]=a*r+u*i,n[6]=o*r+h*i,n[7]=c*r+d*i,n[8]=l*r-s*i,n[9]=u*r-a*i,n[10]=h*r-o*i,n[11]=d*r-c*i,n}function kt(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[8],u=e[9],h=e[10],d=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-l*i,n[1]=a*r-u*i,n[2]=o*r-h*i,n[3]=c*r-d*i,n[8]=s*i+l*r,n[9]=a*i+u*r,n[10]=o*i+h*r,n[11]=c*i+d*r,n}function pc(n,e,t){var i=Math.sin(t),r=Math.cos(t),s=e[0],a=e[1],o=e[2],c=e[3],l=e[4],u=e[5],h=e[6],d=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+l*i,n[1]=a*r+u*i,n[2]=o*r+h*i,n[3]=c*r+d*i,n[4]=l*r-s*i,n[5]=u*r-a*i,n[6]=h*r-o*i,n[7]=d*r-c*i,n}function sS(n,e,t,i,r){var s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0){var a=1/(i-r);n[10]=(r+i)*a,n[14]=2*r*i*a}else n[10]=-1,n[14]=-2*i;return n}var aS=sS;function oS(n,e,t,i,r,s,a){var o=1/(e-t),c=1/(i-r),l=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*l,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*c,n[14]=(a+s)*l,n[15]=1,n}var lS=oS;function cS(n,e,t,i){var r,s,a,o,c,l,u,h,d,f,g=e[0],_=e[1],m=e[2],p=i[0],w=i[1],v=i[2],y=t[0],P=t[1],b=t[2];return Math.abs(g-y)<Ba&&Math.abs(_-P)<Ba&&Math.abs(m-b)<Ba?nS(n):(u=g-y,h=_-P,d=m-b,f=1/Math.sqrt(u*u+h*h+d*d),u*=f,h*=f,d*=f,r=w*d-v*h,s=v*u-p*d,a=p*h-w*u,f=Math.sqrt(r*r+s*s+a*a),f?(f=1/f,r*=f,s*=f,a*=f):(r=0,s=0,a=0),o=h*a-d*s,c=d*r-u*a,l=u*s-h*r,f=Math.sqrt(o*o+c*c+l*l),f?(f=1/f,o*=f,c*=f,l*=f):(o=0,c=0,l=0),n[0]=r,n[1]=o,n[2]=u,n[3]=0,n[4]=s,n[5]=c,n[6]=h,n[7]=0,n[8]=a,n[9]=l,n[10]=d,n[11]=0,n[12]=-(r*g+s*_+a*m),n[13]=-(o*g+c*_+l*m),n[14]=-(u*g+h*_+d*m),n[15]=1,n)}function so(){var n=new pr(3);return pr!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function gi(n){var e=new pr(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function uS(n){var e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function Mn(n,e,t){var i=new pr(3);return i[0]=n,i[1]=e,i[2]=t,i}function La(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function hS(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function fS(n,e,t,i){return n[0]=e[0]+t[0]*i,n[1]=e[1]+t[1]*i,n[2]=e[2]+t[2]*i,n}function dS(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function pd(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function pS(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}(function(){var n=so();return function(e,t,i,r,s,a){var o,c;for(t||(t=3),i||(i=0),r?c=Math.min(r*t+i,e.length):c=e.length,o=i;o<c;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();const wn=[124/255,189/255,107/255],mS=qe.intToRgb(6396257),gS=qe.intToRgb(8431445),Or=qe.intToRgb(4764952),Da=qe.intToRgb(4159204),_S=qe.intToRgb(2129968),vS=n=>{const e=n/15,t=e*.6+(e>0?.4:.3),i=bi(e*e*.7-.5,0,1),r=bi(e*e*.6-.7,0,1);return[t,i,r]},Ia=n=>[n/8,1-n/32,n/64],or={large_fern:()=>wn,tall_grass:()=>wn,grass_block:()=>wn,fern:()=>wn,grass:()=>wn,short_grass:()=>wn,potted_fern:()=>wn,pink_petals:()=>wn,wildflowers:()=>wn,bush:()=>wn,spruce_leaves:()=>mS,birch_leaves:()=>gS,oak_leaves:()=>Or,jungle_leaves:()=>Or,acacia_leaves:()=>Or,dark_oak_leaves:()=>Or,vine:()=>Or,mangrove_leaves:()=>Or,water:()=>Da,bubble_column:()=>Da,cauldron:()=>Da,water_cauldron:()=>Da,redstone_wire:n=>vS(parseInt(n.power??"0")),sugar_cane:()=>wn,attached_melon_stem:()=>Ia(7),attached_pumpkin_stem:()=>Ia(7),melon_stem:n=>Ia(parseInt(n.age??"0")),pumpkin_stem:n=>Ia(parseInt(n.age??"0")),lily_pad:()=>_S};var xt;(function(n){function e(i,r,s){let{up:a,down:o,north:c,east:l,south:u,west:h}=i;switch(s){case 90:[c,l,u,h]=[l,u,h,c];break;case 180:[c,l,u,h]=[u,h,c,l];break;case 270:[c,l,u,h]=[h,c,l,u]}switch(r){case 90:[a,c,o,u]=[c,o,u,a];break;case 180:[a,c,o,u]=[o,u,a,c];break;case 270:[a,c,o,u]=[u,a,c,o]}return{up:a,down:o,north:c,east:l,south:u,west:h}}n.rotate=e;function t(){return Object.create(null)}n.none=t})(xt||(xt={}));const dn=class dn{constructor(e,t,i,r,s,a,o=0){L(this,"pos");L(this,"color");L(this,"texture");L(this,"textureLimit");L(this,"normal");L(this,"blockPos");L(this,"emissive");this.pos=e,this.color=t,this.texture=i,this.textureLimit=r,this.normal=s,this.blockPos=a,this.emissive=o}transform(e){return dn.VEC[0]=this.pos.x,dn.VEC[1]=this.pos.y,dn.VEC[2]=this.pos.z,pS(dn.VEC,dn.VEC,e),this.pos=new St(dn.VEC[0],dn.VEC[1],dn.VEC[2]),this}static fromPos(e){return new dn(e,[0,0,0],[0,0],[0,0,0,0],void 0,void 0,0)}};L(dn,"VEC",so());let Pn=dn;class Bs{constructor(e,t){L(this,"v1");L(this,"v2");this.v1=e,this.v2=t}vertices(){return[this.v1,this.v2]}forEach(e){return e(this.v1),e(this.v2),this}transform(e){return this.forEach(t=>t.transform(e)),this}setColor(e){return this.forEach(t=>t.color=e),this}toString(){return`Line(${this.v1.pos.toString()}, ${this.v2.pos.toString()})`}static fromPoints(e,t){return new Bs(Pn.fromPos(e),Pn.fromPos(t))}}class ft{constructor(e=[],t=[]){L(this,"quads");L(this,"lines");L(this,"posBuffer");L(this,"colorBuffer");L(this,"textureBuffer");L(this,"textureLimitBuffer");L(this,"normalBuffer");L(this,"blockPosBuffer");L(this,"indexBuffer");L(this,"indexType");L(this,"linePosBuffer");L(this,"lineColorBuffer");this.quads=e,this.lines=t}clear(){return this.quads=[],this.lines=[],this}isEmpty(){return this.quads.length===0&&this.lines.length===0}quadVertices(){return this.quads.length*4}quadIndices(){return this.quads.length*6}lineVertices(){return this.lines.length*2}merge(e){for(const t of e.quads)this.quads.push(t);for(const t of e.lines)this.lines.push(t);return this}addLine(e,t,i,r,s,a,o){const c=new Bs(Pn.fromPos(new St(e,t,i)),Pn.fromPos(new St(r,s,a))).setColor(o);return this.lines.push(c),this}addLineCube(e,t,i,r,s,a,o){return this.addLine(e,t,i,e,t,a,o),this.addLine(r,t,i,r,t,a,o),this.addLine(e,t,i,r,t,i,o),this.addLine(e,t,a,r,t,a,o),this.addLine(e,t,i,e,s,i,o),this.addLine(r,t,i,r,s,i,o),this.addLine(e,t,a,e,s,a,o),this.addLine(r,t,a,r,s,a,o),this.addLine(e,s,i,e,s,a,o),this.addLine(r,s,i,r,s,a,o),this.addLine(e,s,i,r,s,i,o),this.addLine(e,s,a,r,s,a,o),this}transform(e){for(const t of this.quads)t.transform(e);return this}computeNormals(){for(const e of this.quads){const t=e.normal();e.forEach(i=>i.normal=t)}}rebuild(e,t){const i=t.usage??e.DYNAMIC_DRAW,r=(a,o,c)=>{if(a||(a=e.createBuffer()??void 0),!a)throw new Error("Cannot create new buffer");return e.bindBuffer(o,a),e.bufferData(o,c,i),a},s=(a,o,c,l)=>{if(a.length===0){o&&e.deleteBuffer(o);return}const u=a[0]instanceof Bs?2:4,h=new Float32Array(a.length*u*c);let d=0;for(const f of a)for(const g of f.vertices()){const _=l(g);if(!_)throw new Error("Missing vertex component");for(let m=0;m<c;m+=1)h[d++]=_[m]??0}return r(o,e.ARRAY_BUFFER,h)};if(t.pos&&(this.posBuffer=s(this.quads,this.posBuffer,3,a=>a.pos.components()),this.linePosBuffer=s(this.lines,this.linePosBuffer,3,a=>a.pos.components())),t.color&&(this.colorBuffer=s(this.quads,this.colorBuffer,3,a=>a.color),this.lineColorBuffer=s(this.lines,this.lineColorBuffer,3,a=>a.color)),t.texture&&(this.textureBuffer=s(this.quads,this.textureBuffer,2,a=>a.texture),this.textureLimitBuffer=s(this.quads,this.textureLimitBuffer,4,a=>a.textureLimit)),t.normal&&(this.normalBuffer=s(this.quads,this.normalBuffer,3,a=>{var o;return(o=a.normal)==null?void 0:o.components()})),t.blockPos&&(this.blockPosBuffer=s(this.quads,this.blockPosBuffer,3,a=>{var o;return(o=a.blockPos)==null?void 0:o.components()})),this.quads.length===0)this.indexBuffer&&e.deleteBuffer(this.indexBuffer),this.indexBuffer=void 0,this.indexType=void 0;else{const a=this.quadVertices()>65536;if(a&&!(typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext)&&!e.getExtension("OES_element_index_uint"))throw new Error("Mesh requires 32-bit indices, but OES_element_index_uint is not available");this.indexType=a?e.UNSIGNED_INT:e.UNSIGNED_SHORT;const o=a?new Uint32Array(this.quadIndices()):new Uint16Array(this.quadIndices());let c=0;for(let l=0;l<this.quads.length;l+=1){const u=l*4;o[c++]=u,o[c++]=u+1,o[c++]=u+2,o[c++]=u,o[c++]=u+2,o[c++]=u+3}this.indexBuffer=r(this.indexBuffer,e.ELEMENT_ARRAY_BUFFER,o)}return this}}function Oh(n){const e=Q.readObject(n)??{},i={model:Q.readString(e.model)??""},r=Q.readNumber(e.x);r!==void 0&&(i.x=r);const s=Q.readNumber(e.y);s!==void 0&&(i.y=s);const a=Q.readBoolean(e.uvlock);a!==void 0&&(i.uvlock=a);const o=Q.readNumber(e.weight);return o!==void 0&&(i.weight=o),i}function md(n){const e=Q.readArray(n,Oh);return e||Oh(n)}function gd(n){const e=Q.readObject(n);if(!e)return;const t=Q.readArray(e.OR,gd);if(t){const i=t.flatMap(r=>r?[r]:[]);if(i.length>0)return{OR:i}}return Object.fromEntries(Object.entries(e).map(([i,r])=>[i,Q.readString(r)??""]))}function xS(n){const e=Q.readObject(n)??{},t=md(e.apply),i=gd(e.when);return i?{when:i,apply:t}:{apply:t}}class vo{constructor(e,t){L(this,"variants");L(this,"multipart");this.variants=e,this.multipart=t}getModelVariants(e){if(this.variants){const t=Object.keys(this.variants).filter(r=>this.matchesVariant(r,e));if(t.length===0)return[];const i=this.variants[t[0]];return[Array.isArray(i)?i[0]:i]}else if(this.multipart)return this.multipart.filter(i=>i.when?this.matchesCase(i.when,e):!0).map(i=>Array.isArray(i.apply)?i.apply[0]:i.apply);return[]}getMesh(e,t,i,r,s){var l;const a=this.getModelVariants(t),o=new ft;for(const u of a){const h=xt.rotate(s,u.x??0,u.y??0),d=r.getBlockModel(J.parse(u.model));if(!d)throw new Error(`Cannot find block model ${u.model}`);const f=e?(l=or[e.path])==null?void 0:l.call(or,t):void 0,g=d.getMesh(i,h,f);if(u.x||u.y){const _=st();He(_,_,[8,8,8]),kt(_,_,-jl(u.y??0)),is(_,_,-jl(u.x??0)),He(_,_,[-8,-8,-8]),g.transform(_)}o.merge(g)}const c=st();return pn(c,c,[.0625,.0625,.0625]),o.transform(c)}matchesVariant(e,t){return e.split(",").every(i=>{const[r,s]=i.split("=");return t[r]===s})}matchesCase(e,t){if(Array.isArray(e.OR))return e.OR.some(r=>this.matchesCase(r,t));const i=e;return Object.keys(i).every(r=>i[r].split("|").includes(t[r]))}static fromJson(e){const t=Q.readObject(e)??{},i=Q.readObject(t.variants),r=i?Object.fromEntries(Object.entries(i).map(([a,o])=>[a,md(o)])):void 0,s=Q.readArray(t.multipart,xS);return new vo(r,s)}}class Qs{constructor(e,t,i,r){L(this,"v1");L(this,"v2");L(this,"v3");L(this,"v4");this.v1=e,this.v2=t,this.v3=i,this.v4=r}vertices(){return[this.v1,this.v2,this.v3,this.v4]}forEach(e){return e(this.v1),e(this.v2),e(this.v3),e(this.v4),this}transform(e){return this.forEach(t=>t.transform(e)),this}normal(){const e=this.v2.pos.sub(this.v1.pos),t=this.v3.pos.sub(this.v1.pos);return e.cross(t).normalize()}reverse(){return[this.v1,this.v2,this.v3,this.v4]=[this.v4,this.v3,this.v2,this.v1],this}setColor(e){return this.forEach(t=>t.color=e),this}setTexture(e,t){return this.v1.textureLimit=t,this.v2.textureLimit=t,this.v3.textureLimit=t,this.v4.textureLimit=t,this.v1.texture=[e[0],e[1]],this.v2.texture=[e[2],e[3]],this.v3.texture=[e[4],e[5]],this.v4.texture=[e[6],e[7]],this}toString(){return`Quad(${this.v1.pos.toString()}, ${this.v2.pos.toString()}, ${this.v3.pos.toString()}, ${this.v4.pos.toString()})`}static fromPoints(e,t,i,r){return new Qs(Pn.fromPos(e),Pn.fromPos(t),Pn.fromPos(i),Pn.fromPos(r))}}const yS={0:[0,3,2,3,2,1,0,1],90:[2,3,2,1,0,1,0,3],180:[2,1,0,1,0,3,2,3],270:[0,1,0,3,2,3,2,1]},SS={x:[1,0,0],y:[0,1,0],z:[0,0,1]},Br=1.41421356237,wS={x:[1,Br,Br],y:[Br,1,Br],z:[Br,Br,1]},Si=class Si{constructor(e,t,i,r,s){L(this,"parent");L(this,"textures");L(this,"elements");L(this,"display");L(this,"guiLight");L(this,"generationMarker",!1);this.parent=e,this.textures=t,this.elements=i,this.display=r,this.guiLight=s}getDisplayTransform(e){var r;const t=(r=this.display)==null?void 0:r[e],i=st();return He(i,i,[8,8,8]),t!=null&&t.translation&&He(i,i,t.translation),t!=null&&t.rotation&&(is(i,i,t.rotation[0]*Math.PI/180),kt(i,i,t.rotation[1]*Math.PI/180),pc(i,i,-t.rotation[2]*Math.PI/180)),t!=null&&t.scale&&pn(i,i,t.scale),He(i,i,[-8,-8,-8]),i}getMesh(e,t,i){const r=new ft,s=a=>i===void 0?[1,1,1]:a===void 0||a<0?[1,1,1]:typeof i=="function"?i(a):i;for(const a of this.elements??[])r.merge(this.getElementMesh(a,e,t,s));return r}getElementMesh(e,t,i,r){var g,_,m,p,w,v,y,P,b,E,U,M;const s=new ft,[a,o,c]=e.from,[l,u,h]=e.to,d=(x,R,N)=>{var ye,Pe,$,ne;const D=Qs.fromPoints(new St(N[0],N[1],N[2]),new St(N[3],N[4],N[5]),new St(N[6],N[7],N[8]),new St(N[9],N[10],N[11])),F=r(x.tintindex);D.setColor(F);const[C,k,V,G]=t.getTextureUV(this.getTexture(x.texture)),K=(V-C)/16,te=(G-k)/16;R[0]=(((ye=x.uv)==null?void 0:ye[0])??R[0])*K,R[1]=(((Pe=x.uv)==null?void 0:Pe[1])??R[1])*te,R[2]=((($=x.uv)==null?void 0:$[2])??R[2])*K,R[3]=(((ne=x.uv)==null?void 0:ne[3])??R[3])*te;const le=yS[x.rotation??0];D.setTexture([C+R[le[0]],k+R[le[1]],C+R[le[2]],k+R[le[3]],C+R[le[4]],k+R[le[5]],C+R[le[6]],k+R[le[7]]],[C+Math.min(R[0],R[2]),k+Math.min(R[1],R[3]),C+Math.max(R[0],R[2]),k+Math.max(R[1],R[3])]),s.quads.push(D)};(_=(g=e.faces)==null?void 0:g.up)!=null&&_.texture&&(!e.faces.up.cullface||!i[e.faces.up.cullface])&&d(e.faces.up,[a,16-h,l,16-c],[a,u,h,l,u,h,l,u,c,a,u,c]),(p=(m=e.faces)==null?void 0:m.down)!=null&&p.texture&&(!e.faces.down.cullface||!i[e.faces.down.cullface])&&d(e.faces.down,[16-h,16-l,16-c,16-a],[a,o,c,l,o,c,l,o,h,a,o,h]),(v=(w=e.faces)==null?void 0:w.south)!=null&&v.texture&&(!e.faces.south.cullface||!i[e.faces.south.cullface])&&d(e.faces.south,[a,16-u,l,16-o],[a,o,h,l,o,h,l,u,h,a,u,h]),(P=(y=e.faces)==null?void 0:y.north)!=null&&P.texture&&(!e.faces.north.cullface||!i[e.faces.north.cullface])&&d(e.faces.north,[16-l,16-u,16-a,16-o],[l,o,c,a,o,c,a,u,c,l,u,c]),(E=(b=e.faces)==null?void 0:b.east)!=null&&E.texture&&(!e.faces.east.cullface||!i[e.faces.east.cullface])&&d(e.faces.east,[16-h,16-u,16-c,16-o],[l,o,h,l,o,c,l,u,c,l,u,h]),(M=(U=e.faces)==null?void 0:U.west)!=null&&M.texture&&(!e.faces.west.cullface||!i[e.faces.west.cullface])&&d(e.faces.west,[c,16-u,h,16-o],[a,o,c,a,o,h,a,u,h,a,u,c]);const f=st();if(e.rotation){const x=Mn(...e.rotation.origin);He(f,f,x),rS(f,f,jl(e.rotation.angle),SS[e.rotation.axis]),e.rotation.rescale&&pn(f,f,wS[e.rotation.axis]),dS(x,x),He(f,f,x)}return s.transform(f)}getTexture(e){var t;for(;e.startsWith("#");)e=((t=this.textures)==null?void 0:t[e.slice(1)])??"";return J.parse(e)}flatten(e){var o;if(!this.parent)return;if(this.parent.equals(Si.BUILTIN_GENERATED)){this.generationMarker=!0;return}const t=this.getParent(e);if(!t){console.warn(`parent ${this.parent} does not exist!`),this.parent=void 0;return}t.flatten(e),this.elements||(this.elements=t.elements),this.textures||(this.textures={});const i=this.textures,r=t.textures;r&&Object.keys(r).forEach(c=>{i[c]||(i[c]=r[c])}),this.display||(this.display={});const s=this.display,a=t.display;if(a&&Object.keys(a).forEach(c=>{const l=c;if(!s[l])s[l]=a[l];else{const u=a[l];u&&Object.keys(u).forEach(h=>{const d=h,f=s[l];f&&!f[d]&&u[d]&&(f[d]=u[d])})}}),this.guiLight||(this.guiLight=t.guiLight),t.generationMarker&&(this.generationMarker=!0),this.generationMarker&&(((o=this.elements)==null?void 0:o.length)??0)===0)for(let c=0;c<Si.GENERATED_LAYERS.length;c+=1){const l=Si.GENERATED_LAYERS[c];if(!Object.hasOwn(this.textures,l))break;this.elements||(this.elements=[]),this.elements.push({from:[0,0,0],to:[16,16,0],faces:{south:{texture:`#${l}`,tintindex:c}}})}this.parent=void 0}getParent(e){return this.parent?e.getBlockModel(this.parent):null}static fromJson(e){var u;const t=Q.readObject(e)??{},i=Q.readString(t.parent),r=i?J.parse(i):void 0,s=Q.readObject(t.textures),a=s?Q.readMap(s,h=>Q.readString(h)??""):void 0,o=(u=Q.readArray(t.elements,h=>Q.readObject(h)??{}))==null?void 0:u.map(h=>h),c=Q.readObject(t.display),l=Q.readString(t.gui_light);return new Si(r,a,o,c,l)}};L(Si,"BUILTIN_GENERATED",J.create("builtin/generated")),L(Si,"GENERATED_LAYERS",["layer0","layer1","layer2","layer3","layer4"]);let nt=Si;class jr{constructor(e,t){L(this,"img");L(this,"idMap");L(this,"part");if(this.img=e,this.idMap=t,!Yl(e.width)||!Yl(e.height))throw new Error(`Expected texture atlas dimensions to be powers of two, got ${e.width}x${e.height}.`);this.part=16/e.width}getTextureAtlas(){return this.img}getTextureUV(e){return this.idMap[e.toString()]??[0,0,this.part,this.part]}getPixelSize(){return this.part/16}static async fromBlobs(e){const t=Math.sqrt(Object.keys(e).length+1),i=dc(t),r=i*16,s=1/i,a=document.createElement("canvas");a.width=r,a.height=r;const o=a.getContext("2d");if(!o)throw new Error("Failed to get 2D rendering context");this.drawInvalidTexture(o);const c={};let l=1;return await Promise.all(Object.keys(e).map(async u=>{const h=l%i,d=Math.floor(l/i);l+=1,c[u]=[s*h,s*d,s*h+s,s*d+s];const f=await createImageBitmap(e[u]);o.drawImage(f,0,0,16,16,16*h,16*d,16,16)})),new jr(o.getImageData(0,0,r,r),c)}static empty(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");if(!t)throw new Error("Failed to get 2D rendering context");return jr.drawInvalidTexture(t),new jr(t.getImageData(0,0,16,16),{})}static drawInvalidTexture(e){e.fillStyle="black",e.fillRect(0,0,16,16),e.fillStyle="magenta",e.fillRect(0,0,8,8),e.fillRect(8,8,8,8)}}function Ua(n){if(!n)return"";if(typeof n=="string")return n;const e=n;return typeof e.toString=="function"?e.toString():String(n)}function _d(){const n=new URL("../../assets/default-pack/",import.meta.url).toString();return mc(n)}function mc(n){const e=(typeof n=="string"?n:n.toString()).replace(/\/?$/,"/");return{baseUrl:e,assetsJson:new URL("assets.json",e).toString(),atlasPng:new URL("atlas.png",e).toString(),blockFlags:{opaqueTxt:new URL("block-flags/opaque.txt",e).toString(),transparentTxt:new URL("block-flags/transparent.txt",e).toString(),nonSelfCullingTxt:new URL("block-flags/non_self_culling.txt",e).toString(),emissiveJson:new URL("block-flags/emissive.json",e).toString()}}}function Ml(n){const e=new Set;return!n||typeof n!="string"||((n.match(/minecraft:[a-z0-9_]+/g)??[]).forEach(i=>e.add(i)),n.split(/\s+/).map(i=>i.trim()).filter(Boolean).forEach(i=>{const r=i.startsWith("minecraft:")?i:`minecraft:${i}`;e.add(r)})),e}async function MS(n){let e=null;try{typeof createImageBitmap=="function"&&(e=await createImageBitmap(n))}catch{e=null}let t=(e==null?void 0:e.width)??0,i=(e==null?void 0:e.height)??0;if((!e||t<=0||i<=0)&&typeof Image<"u"&&typeof URL<"u"&&typeof URL.createObjectURL=="function")try{const c=new Image,l=URL.createObjectURL(n);await new Promise((u,h)=>{c.onload=()=>u(c),c.onerror=d=>h(d),c.src=l}),URL.revokeObjectURL(l),e=c,t=c.width,i=c.height}catch{e=null}if(!e||t<=0||i<=0)throw new Error("[lodestone] Unable to decode atlas.png: createImageBitmap unavailable or failed.");const r=dc(Math.max(t,i)),a=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(r,r):typeof document<"u"?Object.assign(document.createElement("canvas"),{width:r,height:r}):(()=>{throw new Error("[lodestone] No canvas implementation available to decode atlas.png")})()).getContext("2d");if(!a)throw new Error("[lodestone] Unable to create 2D canvas context to decode atlas.png");return a.drawImage(e,0,0),{imageData:a.getImageData(0,0,r,r),atlasSize:r}}function vd(n){const{assets:e,atlas:t,flags:i}=n,r={};Object.keys(e.blockstates??{}).forEach(f=>{r[`minecraft:${f}`]=vo.fromJson(e.blockstates[f])});const s={};Object.keys(e.models??{}).forEach(f=>{s[`minecraft:${f}`]=nt.fromJson(e.models[f])});const a={getBlockModel(f){return s[Ua(f)]??null}};Object.values(s).forEach(f=>f.flatten(a));const o={};Object.keys(e.textures??{}).forEach(f=>{const g=e.textures[f];if(!g||typeof g[Symbol.iterator]!="function")return;const[_,m,p,w]=g,v=p!==w&&f.startsWith("block/")?p:w;o[`minecraft:${f}`]=[_/t.atlasSize,m/t.atlasSize,(_+p)/t.atlasSize,(m+v)/t.atlasSize]});const c=new jr(t.imageData,o),l=(i==null?void 0:i.opaque)??new Set,u=(i==null?void 0:i.transparent)??new Set,h=(i==null?void 0:i.nonSelfCulling)??new Set,d=(i==null?void 0:i.emissive)??{};return{getBlockDefinition(f){return r[Ua(f)]??null},getBlockModel(f){return s[Ua(f)]??null},getTextureUV(f){return c.getTextureUV(f)},getTextureAtlas(){return c.getTextureAtlas()},getPixelSize(){return c.getPixelSize()},getBlockFlags(f){const g=Ua(f),_=u.has(g),m=l.has(g),p=!_&&(m||l.size===0),w=h.has(g),v=d[g];return{opaque:p,semi_transparent:_,self_culling:!w,emissive:!!v,emissiveIntensity:(v==null?void 0:v.intensity)??1,emissiveConditional:v==null?void 0:v.conditional}},getBlockProperties(){return null},getDefaultBlockProperties(){return null}}}async function bS(n){const e=(n==null?void 0:n.fetch)??globalThis.fetch;if(!e)throw new Error("[lodestone] fetch is not available; pass options.fetch");const t=n!=null&&n.baseUrl?mc(n.baseUrl):_d(),[i,r,s,a,o,c]=await Promise.all([e(t.assetsJson),e(t.atlasPng),e(t.blockFlags.opaqueTxt),e(t.blockFlags.transparentTxt),e(t.blockFlags.nonSelfCullingTxt),e(t.blockFlags.emissiveJson)]);if(!i.ok)throw new Error(`[lodestone] Failed to fetch assets.json: ${i.status} ${i.statusText}`);if(!r.ok)throw new Error(`[lodestone] Failed to fetch atlas.png: ${r.status} ${r.statusText}`);if(!s.ok)throw new Error(`[lodestone] Failed to fetch opaque.txt: ${s.status} ${s.statusText}`);if(!a.ok)throw new Error(`[lodestone] Failed to fetch transparent.txt: ${a.status} ${a.statusText}`);if(!o.ok)throw new Error(`[lodestone] Failed to fetch non_self_culling.txt: ${o.status} ${o.statusText}`);if(!c.ok)throw new Error(`[lodestone] Failed to fetch emissive.json: ${c.status} ${c.statusText}`);const l=await i.json(),u=await r.blob(),h=await MS(u),d={opaque:Ml(await s.text()),transparent:Ml(await a.text()),nonSelfCulling:Ml(await o.text()),emissive:await c.json()},f=vd({assets:l,atlas:h,flags:d});return{urls:t,assets:l,atlas:h,resources:f}}function bl(n,e,t,i,r){var a;const s=i.up?16:[14.2,12.5,10.5,9,7,5.3,3.7,1.9,16,16,16,16,16,16,16,16][e];return new nt(void 0,{still:`block/${n}_still`,flow:`block/${n}_flow`},[{from:[0,0,0],to:[16,s,16],faces:{up:{texture:"#still",tintindex:r,cullface:Ke.UP},down:{texture:"#still",tintindex:r,cullface:Ke.DOWN},north:{texture:"#flow",tintindex:r,cullface:Ke.NORTH},east:{texture:"#flow",tintindex:r,cullface:Ke.EAST},south:{texture:"#flow",tintindex:r,cullface:Ke.SOUTH},west:{texture:"#flow",tintindex:r,cullface:Ke.WEST}}}]).getMesh(t,i,(a=or[n])==null?void 0:a.call(or,{}))}const vs={white:qe.intToRgb(16383998),orange:qe.intToRgb(16351261),magenta:qe.intToRgb(13061821),light_blue:qe.intToRgb(3847130),yellow:qe.intToRgb(16701501),lime:qe.intToRgb(8439583),pink:qe.intToRgb(15961002),gray:qe.intToRgb(4673362),light_gray:qe.intToRgb(10329495),cyan:qe.intToRgb(1481884),purple:qe.intToRgb(8991416),blue:qe.intToRgb(3949738),brown:qe.intToRgb(8606770),green:qe.intToRgb(6192150),red:qe.intToRgb(11546150),black:qe.intToRgb(1908001)};var lt;(function(n){function e(C){return k=>new nt(void 0,{0:C.withPrefix("entity/chest/").toString()},[{from:[1,0,1],to:[15,10,15],faces:{north:{uv:[10.5,8.25,14,10.75],rotation:180,texture:"#0"},east:{uv:[7,8.25,10.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7,10.75],rotation:180,texture:"#0"},west:{uv:[0,8.25,3.5,10.75],rotation:180,texture:"#0"},up:{uv:[7,4.75,10.5,8.25],texture:"#0"},down:{uv:[3.5,4.75,7,8.25],texture:"#0"}}},{from:[1,10,1],to:[15,14,15],faces:{north:{uv:[10.5,3.75,14,4.75],rotation:180,texture:"#0"},east:{uv:[7,3.75,10.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7,4.75],rotation:180,texture:"#0"},west:{uv:[0,3.75,3.5,4.75],rotation:180,texture:"#0"},up:{uv:[7,0,10.5,3.5],texture:"#0"},down:{uv:[3.5,0,7,3.5],texture:"#0"}}},{from:[7,7,0],to:[9,11,2],faces:{north:{uv:[.25,.25,.75,1.25],rotation:180,texture:"#0"},east:{uv:[0,.25,.25,1.25],rotation:180,texture:"#0"},south:{uv:[1,.25,1.5,1.25],rotation:180,texture:"#0"},west:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.25,0,.75,.25],rotation:180,texture:"#0"},down:{uv:[.75,0,1.25,.25],rotation:180,texture:"#0"}}}]).getMesh(k,xt.none())}n.chestRenderer=e;function t(C){return new nt(void 0,{0:"entity/decorated_pot/decorated_pot_side",1:"entity/decorated_pot/decorated_pot_base"},[{from:[1,0,1],to:[15,16,15],faces:{north:{uv:[1,0,15,16],texture:"#0"},east:{uv:[1,0,15,16],texture:"#0"},south:{uv:[1,0,15,16],texture:"#0"},west:{uv:[1,0,15,16],texture:"#0"},up:{uv:[0,6.5,7,13.5],texture:"#1"},down:{uv:[7,6.5,14,13.5],texture:"#1"}}},{from:[5,16,5],to:[11,17,11],faces:{north:{uv:[0,5.5,3,6],texture:"#1"},east:{uv:[3,5.5,6,6],texture:"#1"},south:{uv:[6,5.5,9,6],texture:"#1"},west:{uv:[9,5.5,12,6],texture:"#1"}}},{from:[4,17,4],to:[12,20,12],faces:{north:{uv:[0,4,4,5.5],texture:"#1"},east:{uv:[4,4,8,5.5],texture:"#1"},south:{uv:[8,4,12,5.5],texture:"#1"},west:{uv:[12,4,16,5.5],texture:"#1"},up:{uv:[4,0,8,4],texture:"#1"},down:{uv:[8,0,12,4],texture:"#1"}}}]).getMesh(C,xt.none())}n.decoratedPotRenderer=t;function i(C){return new nt(void 0,{0:"entity/shield_base_nopattern"},[{from:[-6,-11,-2],to:[6,11,-1],faces:{north:{uv:[3.5,.25,6.5,5.75],texture:"#0"},east:{uv:[3.25,.25,3.5,5.75],texture:"#0"},south:{uv:[.25,.25,3.25,5.75],texture:"#0"},west:{uv:[0,.25,.25,5.75],texture:"#0"},up:{uv:[.25,0,3.25,.25],texture:"#0"},down:{uv:[3.25,0,6.25,.25],texture:"#0"}}}]).getMesh(C,xt.none())}n.shieldRenderer=i;function r(C,k){return V=>new nt(void 0,{0:C.withPrefix("entity/").toString()},[{from:[4,0,4],to:[12,8,12],faces:{north:{uv:[6,2*k,8,4*k],texture:"#0"},east:{uv:[2,2*k,0,4*k],texture:"#0"},south:{uv:[2,2*k,4,4*k],texture:"#0"},west:{uv:[6,2*k,4,4*k],texture:"#0"},up:{uv:[2,0*k,4,2*k],texture:"#0"},down:{uv:[4,0*k,6,2*k],texture:"#0"}}}]).getMesh(V,xt.none())}n.headRenderer=r;function s(C=J.create("enderdragon/dragon")){return k=>{const V=st();return He(V,V,[8,8,8]),pn(V,V,[.75,.75,.75]),kt(V,V,Math.PI),He(V,V,[-8,-11.2,-8]),new nt(void 0,{0:C.withPrefix("entity/").toString()},[{from:[2,4,-16],to:[14,9,0],faces:{north:{uv:[12,3.75,12.75,4.0625],texture:"#0"},east:{uv:[11,3.75,12,4.0625],texture:"#0"},south:{uv:[13.75,3.75,14.5,4.0625],texture:"#0"},west:{uv:[12.75,3.75,13.75,4.0625],texture:"#0"},up:{uv:[12.75,3.75,12,2.75],texture:"#0"},down:{uv:[13.5,2.75,12.75,3.75],texture:"#0"}}},{from:[0,0,-2],to:[16,16,14],faces:{north:{uv:[8,2.875,9,3.875],texture:"#0"},east:{uv:[7,2.875,8,3.875],texture:"#0"},south:{uv:[10,2.875,11,3.875],texture:"#0"},west:{uv:[9,2.875,10,3.875],texture:"#0"},up:{uv:[9,2.875,8,1.875],texture:"#0"},down:{uv:[10,1.875,9,2.875],texture:"#0"}}},{from:[2,0,-16],to:[14,4,0],rotation:{angle:-.2*180/Math.PI,axis:"x",origin:[8,4,-2]},faces:{north:{uv:[12,5.0625,12.75,5.3125],texture:"#0"},east:{uv:[11,5.0625,12,5.3125],texture:"#0"},south:{uv:[13.75,5.0625,14.5,5.3125],texture:"#0"},west:{uv:[12.75,5.0625,13.75,5.3125],texture:"#0"},up:{uv:[12.75,5.0625,12,4.0625],texture:"#0"},down:{uv:[13.5,4.0625,12.75,5.0625],texture:"#0"}}},{from:[3,16,4],to:[5,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[11,16,4],to:[13,20,10],faces:{north:{uv:[.375,.375,.5,.625],texture:"#0"},east:{uv:[0,.375,.375,.625],texture:"#0"},south:{uv:[.875,.375,1,.625],texture:"#0"},west:{uv:[.5,.375,.875,.625],texture:"#0"},up:{uv:[.5,.375,.375,0],texture:"#0"},down:{uv:[.625,0,.5,.375],texture:"#0"}}},{from:[3,9,-14],to:[5,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}},{from:[11,9,-14],to:[13,11,-10],faces:{north:{uv:[7.25,.25,7.375,.375],texture:"#0"},east:{uv:[7,.25,7.25,.375],texture:"#0"},south:{uv:[7.625,.25,7.75,.375],texture:"#0"},west:{uv:[7.375,.25,7.625,.375],texture:"#0"},up:{uv:[7.375,.25,7.25,0],texture:"#0"},down:{uv:[7.5,0,7.375,.25],texture:"#0"}}}]).getMesh(k,xt.none()).transform(V)}}n.dragonHeadRenderer=s;function a(C=J.create("piglin/piglin")){return k=>new nt(void 0,{0:C.withPrefix("entity/").toString()},[{from:[3,0,4],to:[13,8,12],faces:{north:{uv:[6.5,2,9,4],texture:"#0"},east:{uv:[2,2,0,4],texture:"#0"},south:{uv:[2,2,4.5,4],texture:"#0"},west:{uv:[6.5,2,4.5,4],texture:"#0"},up:{uv:[2,0,4.5,2],texture:"#0"},down:{uv:[4.5,0,7,2],texture:"#0"}}},{from:[6,0,12],to:[10,4,13],faces:{north:{uv:[9.25,.5,10.25,1.5],texture:"#0"},east:{uv:[7.75,.5,8,1.5],texture:"#0"},south:{uv:[8,.5,9,1.5],texture:"#0"},west:{uv:[9,.5,9.25,1.5],texture:"#0"},up:{uv:[8,.25,9,.5],texture:"#0"},down:{uv:[9,.25,10,.5],texture:"#0"}}},{from:[5,0,12],to:[6,2,13],faces:{north:{uv:[1.25,.25,1.5,.75],texture:"#0"},east:{uv:[.5,.25,.75,.75],texture:"#0"},south:{uv:[.75,.25,1,.75],texture:"#0"},west:{uv:[1,.25,1.25,.75],texture:"#0"},up:{uv:[.75,0,1,.25],texture:"#0"},down:{uv:[1,0,1.25,.25],texture:"#0"}}},{from:[10,0,12],to:[11,2,13],faces:{north:{uv:[1.25,1.25,1.5,1.75],texture:"#0"},east:{uv:[.5,1.25,.75,1.75],texture:"#0"},south:{uv:[.75,1.25,1,1.75],texture:"#0"},west:{uv:[1,1.25,1.25,1.75],texture:"#0"},up:{uv:[.75,1,1,1.25],texture:"#0"},down:{uv:[1,1,1.25,1.25],texture:"#0"}}},{from:[2.5,1.5,6],to:[3.5,6.5,10],rotation:{angle:-30,axis:"z",origin:[3,7,8]},faces:{north:{uv:[12,2.5,12.25,3.75],texture:"#0"},east:{uv:[9.75,2.5,10.75,3.75],texture:"#0"},south:{uv:[10.75,2.5,11,3.75],texture:"#0"},west:{uv:[11,2.5,12,3.75],texture:"#0"},up:{uv:[10.75,1.5,11,2.5],texture:"#0"},down:{uv:[11,1.5,11.25,2.5],texture:"#0"}}},{from:[12.5,1.5,6],to:[13.5,6.5,10],rotation:{angle:30,axis:"z",origin:[13,7,8]},faces:{north:{uv:[15.25,2.5,15,3.75],texture:"#0"},east:{uv:[15,2.5,14,3.75],texture:"#0"},south:{uv:[14,2.5,13.75,3.75],texture:"#0"},west:{uv:[13.75,2.5,12.75,3.75],texture:"#0"},up:{uv:[14,1.5,13.75,2.5],texture:"#0"},down:{uv:[14.25,1.5,14,2.5],texture:"#0"}}}]).getMesh(k,xt.none())}n.piglinHeadRenderer=a;function o(C){return k=>new nt(void 0,{0:C.withPrefix("entity/signs/").toString()},[{from:[-4,8,7],to:[20,20,9],faces:{north:{uv:[.5,1,6.5,7],texture:"#0"},east:{uv:[0,1,.5,7],texture:"#0"},south:{uv:[7,1,13,7],texture:"#0"},west:{uv:[6.5,1,7,7],texture:"#0"},up:{uv:[6.5,1,.5,0],texture:"#0"},down:{uv:[12.5,0,6.5,1],texture:"#0"}}},{from:[7,-6,7],to:[9,8,9],faces:{north:{uv:[.5,8,1,15],texture:"#0"},east:{uv:[0,8,.5,15],texture:"#0"},south:{uv:[1.5,8,2,15],texture:"#0"},west:{uv:[1,8,1.5,15],texture:"#0"},up:{uv:[1,8,.5,7],texture:"#0"},down:{uv:[1.5,7,1,8],texture:"#0"}}}]).getMesh(k,xt.none())}n.signRenderer=o;function c(C){return k=>new nt(void 0,{0:C.withPrefix("entity/signs/").toString()},[{from:[-4,4,17],to:[20,16,19],faces:{north:{uv:[.5,1,6.5,7],texture:"#0"},east:{uv:[0,1,.5,7],texture:"#0"},south:{uv:[7,1,13,7],texture:"#0"},west:{uv:[6.5,1,7,7],texture:"#0"},up:{uv:[6.5,1,.5,0],texture:"#0"},down:{uv:[12.5,0,6.5,1],texture:"#0"}}}]).getMesh(k,xt.none())}n.wallSignRenderer=c;function l(C){return(k,V)=>k?new nt(void 0,{0:C.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[2,10,8],to:[5,16,8],faces:{north:{uv:[3.5,3,6.5,6],texture:"#0"},south:{uv:[3.5,3,6.5,6],texture:"#0"}}},{from:[3.5,10,6.5],to:[3.5,16,9.5],faces:{east:{uv:[3.5,3,6.5,6],texture:"#0"},west:{uv:[3.5,3,6.5,6],texture:"#0"}}},{from:[11,10,8],to:[14,16,8],faces:{north:{uv:[3.5,3,6.5,6],texture:"#0"},south:{uv:[3.5,3,6.5,6],texture:"#0"}}},{from:[12.5,10,6.5],to:[12.5,16,9.5],faces:{east:{uv:[3.5,3,6.5,6],texture:"#0"},west:{uv:[3.5,3,6.5,6],texture:"#0"}}}]).getMesh(V,xt.none()):new nt(void 0,{0:C.withPrefix("entity/signs/hanging/").toString()},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,16,8],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{north:{uv:[0,8,.75,14],texture:"#0"},south:{uv:[0,8,.75,14],texture:"#0"}}},{from:[3,10,6.5],to:[3,16,9.5],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{east:{uv:[.75,8,1.5,14],texture:"#0"},west:{uv:[.75,8,1.5,14],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,16,8],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{north:{uv:[0,8,.75,14],texture:"#0"},south:{uv:[0,8,.75,14],texture:"#0"}}},{from:[13,10,6.5],to:[13,16,9.5],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{east:{uv:[.75,8,1.5,14],texture:"#0"},west:{uv:[.75,8,1.5,14],texture:"#0"}}}]).getMesh(V,xt.none())}n.hangingSignRenderer=l;function u(C){return k=>new nt(void 0,{0:`entity/signs/hanging/${C}`},[{from:[1,0,7],to:[15,10,9],faces:{north:{uv:[.5,7,4,12],texture:"#0"},east:{uv:[0,7,.5,12],texture:"#0"},south:{uv:[4.5,7,8,12],texture:"#0"},west:{uv:[4,7,4.5,12],texture:"#0"},up:{uv:[4,7,.5,6],texture:"#0"},down:{uv:[7.5,6,4,7],texture:"#0"}}},{from:[0,14,6],to:[16,16,10],faces:{north:{uv:[1,2,5,3],texture:"#0"},east:{uv:[0,2,1,3],texture:"#0"},south:{uv:[6,2,10,3],texture:"#0"},west:{uv:[5,2,6,3],texture:"#0"},up:{uv:[5,2,1,0],texture:"#0"},down:{uv:[9,0,5,2],texture:"#0"}}},{from:[1.5,10,8],to:[4.5,16,8],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{north:{uv:[0,8,.75,14],texture:"#0"},south:{uv:[0,8,.75,14],texture:"#0"}}},{from:[3,10,6.5],to:[3,16,9.5],rotation:{angle:45,axis:"y",origin:[3,12,8]},faces:{east:{uv:[.75,8,1.5,14],texture:"#0"},west:{uv:[.75,8,1.5,14],texture:"#0"}}},{from:[11.5,10,8],to:[14.5,16,8],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{north:{uv:[0,8,.75,14],texture:"#0"},south:{uv:[0,8,.75,14],texture:"#0"}}},{from:[13,10,6.5],to:[13,16,9.5],rotation:{angle:45,axis:"y",origin:[13,12,8]},faces:{east:{uv:[.75,8,1.5,14],texture:"#0"},west:{uv:[.75,8,1.5,14],texture:"#0"}}}]).getMesh(k,xt.none())}n.wallHangingSignRenderer=u;function h(C){return new nt(void 0,{0:"entity/conduit/base"},[{from:[5,5,5],to:[11,11,11],faces:{north:{uv:[3,6,6,12],texture:"#0"},east:{uv:[0,6,3,12],texture:"#0"},south:{uv:[9,6,12,12],texture:"#0"},west:{uv:[6,6,9,12],texture:"#0"},up:{uv:[6,6,3,0],texture:"#0"},down:{uv:[9,0,6,6],texture:"#0"}}}]).getMesh(C,xt.none())}n.conduitRenderer=h;function d(C){return k=>new nt(void 0,{0:C.withPrefix("entity/shulker/").toString()},[{from:[0,0,0],to:[16,8,16],faces:{north:{uv:[4,11,8,13],texture:"#0"},east:{uv:[0,11,4,13],texture:"#0"},south:{uv:[12,11,16,13],texture:"#0"},west:{uv:[8,11,12,13],texture:"#0"},up:{uv:[8,11,4,7],texture:"#0"},down:{uv:[12,7,8,11],texture:"#0"}}},{from:[0,4,0],to:[16,16,16],faces:{north:{uv:[4,4,8,7],texture:"#0"},east:{uv:[0,4,4,7],texture:"#0"},south:{uv:[12,4,16,7],texture:"#0"},west:{uv:[8,4,12,7],texture:"#0"},up:{uv:[8,4,4,0],texture:"#0"},down:{uv:[12,0,8,4],texture:"#0"}}}]).getMesh(k,xt.none())}n.shulkerBoxRenderer=d;const f=C=>({north:{uv:[.25,.25,5.25,10.25],texture:`#${C}`,tintindex:C},east:{uv:[0,.25,.25,10.25],texture:`#${C}`,tintindex:C},south:{uv:[5.5,.25,10.5,10.25],texture:`#${C}`,tintindex:C},west:{uv:[5.25,.25,5.5,10.25],texture:`#${C}`,tintindex:C},up:{uv:[5.25,.25,.25,0],texture:`#${C}`,tintindex:C},down:{uv:[10.25,0,5.25,.25],texture:`#${C}`,tintindex:C}});function g(C,k){return(V,G)=>{const K={0:"entity/banner_base"},te=[...k.base],le=[C];return G==null||G.forEach((ye,Pe)=>{const $=J.parse(ye.getString("pattern")).path,ne=ye.getString("color");Pe++,K[Pe]=`entity/banner/${$}`,te.push(k.pattern(Pe)),le.push(ne)}),new nt(void 0,K,te).getMesh(V,xt.none(),ye=>vs[le[ye]])}}n.bannerRenderer=C=>g(C,{base:[{from:[-2,-8,6],to:[18,32,7],faces:f(0)},{from:[7,-12,7],to:[9,30,9],faces:{north:{uv:[11.5,.5,12,11],texture:"#0"},east:{uv:[11,.5,11.5,11],texture:"#0"},south:{uv:[12.5,.5,13,11],texture:"#0"},west:{uv:[12,.5,12.5,11],texture:"#0"},up:{uv:[12,.5,11.5,0],texture:"#0"},down:{uv:[12.5,0,12,.5],texture:"#0"}}},{from:[-2,30,7],to:[18,32,9],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:k=>({from:[-2,-8,6],to:[18,32,7],faces:f(k)})}),n.wallBannerRenderer=C=>g(C,{base:[{from:[-2,-8,-1.5],to:[18,32,-.5],faces:f(0)},{from:[-2,30,-3.5],to:[18,32,-1.5],faces:{north:{uv:[.5,11,5.5,11.5],texture:"#0"},east:{uv:[0,11,.5,11.5],texture:"#0"},south:{uv:[6,11,11,11.5],texture:"#0"},west:{uv:[5.5,11,6,11.5],texture:"#0"},up:{uv:[5.5,11,.5,10.5],texture:"#0"},down:{uv:[10.5,10.5,5.5,11],texture:"#0"}}}],pattern:k=>({from:[-2,-8,-1.5],to:[18,32,-.5],faces:f(k)})});function _(C){return new nt(void 0,{0:"entity/bell/bell_body"},[{from:[5,3,5],to:[11,10,11],faces:{north:{uv:[3,3,6,6.5],texture:"#0"},east:{uv:[0,3,3,6.5],texture:"#0"},south:{uv:[9,3,12,6.5],texture:"#0"},west:{uv:[6,3,9,6.5],texture:"#0"},up:{uv:[6,3,3,0],texture:"#0"},down:{uv:[9,0,6,3],texture:"#0"}}},{from:[4,10,4],to:[12,12,12],faces:{north:{uv:[4,10.5,8,11.5],texture:"#0"},east:{uv:[0,10.5,4,11.5],texture:"#0"},south:{uv:[12,10.5,16,11.5],texture:"#0"},west:{uv:[8,10.5,12,11.5],texture:"#0"},up:{uv:[8,10.5,4,6.5],texture:"#0"},down:{uv:[12,6.5,8,10.5],texture:"#0"}}}]).getMesh(C,xt.none())}n.bellRenderer=_;function m(C){return(k,V)=>k==="foot"?new nt(void 0,{0:C.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{north:{uv:[5.5,5.5,9.5,7],rotation:180,texture:"#0"},east:{uv:[0,7,1.5,11],rotation:270,texture:"#0"},west:{uv:[5.5,7,7,11],rotation:90,texture:"#0"},up:{uv:[5.5,11,1.5,7],texture:"#0"},down:{uv:[11,7,7,11],texture:"#0"}}},{from:[0,0,0],to:[3,3,3],faces:{north:{uv:[12.5,5.25,13.25,6],texture:"#0"},east:{uv:[14.75,5.25,15.5,6],texture:"#0"},south:{uv:[14,5.25,14.75,6],texture:"#0"},west:{uv:[13.25,5.25,14,6],texture:"#0"},up:{uv:[13.25,4.5,14,5.25],texture:"#0"},down:{uv:[14,4.5,14.75,5.25],texture:"#0"}}},{from:[13,0,0],to:[16,3,3],faces:{north:{uv:[13.25,3.75,14,4.5],texture:"#0"},east:{uv:[12.5,3.75,13.25,4.5],texture:"#0"},south:{uv:[14.75,3.75,15.5,4.5],texture:"#0"},west:{uv:[14,3.75,14.75,4.5],texture:"#0"},up:{uv:[13.25,3,14,3.75],texture:"#0"},down:{uv:[14,3,14.75,3.75],texture:"#0"}}}]).getMesh(V,xt.none()):new nt(void 0,{0:C.withPrefix("entity/bed/").toString()},[{from:[0,3,0],to:[16,9,16],faces:{east:{uv:[0,1.5,1.5,5.5],rotation:270,texture:"#0"},south:{uv:[1.5,0,5.5,1.5],rotation:180,texture:"#0"},west:{uv:[5.5,1.5,7,5.5],rotation:90,texture:"#0"},up:{uv:[5.5,5.5,1.5,1.5],texture:"#0"},down:{uv:[11,1.5,7,5.5],texture:"#0"}}},{from:[0,0,13],to:[3,3,16],faces:{north:{uv:[14.75,.75,15.5,1.5],texture:"#0"},east:{uv:[14,.75,14.75,1.5],texture:"#0"},south:{uv:[13.25,.75,14,1.5],texture:"#0"},west:{uv:[12.5,.75,13.25,1.5],texture:"#0"},up:{uv:[13.25,0,14,.75],texture:"#0"},down:{uv:[14,0,14.75,.75],texture:"#0"}}},{from:[13,0,13],to:[16,3,16],faces:{north:{uv:[14,2.25,14.75,3],texture:"#0"},east:{uv:[13.25,2.25,14,3],texture:"#0"},south:{uv:[12.5,2.25,13.25,3],texture:"#0"},west:{uv:[14.75,2.25,15.5,3],texture:"#0"},up:{uv:[13.25,1.5,14,2.25],texture:"#0"},down:{uv:[14,1.5,14.75,2.25],texture:"#0"}}}]).getMesh(V,xt.none())}n.bedRenderer=m;function p(C,k,V=""){return C.getProperty(k)??V}function w(C,k,V="0"){return parseInt(C.getProperty(k)??V)}const v=new Map(Object.entries({"minecraft:chest":n.chestRenderer(J.create("normal")),"minecraft:ender_chest":n.chestRenderer(J.create("ender")),"minecraft:trapped_chest":n.chestRenderer(J.create("trapped"))})),y=new Map(Object.entries({"minecraft:skeleton_skull":n.headRenderer(J.create("skeleton/skeleton"),2),"minecraft:wither_skeleton_skull":n.headRenderer(J.create("skeleton/wither_skeleton"),2),"minecraft:zombie_head":n.headRenderer(J.create("zombie/zombie"),1),"minecraft:creeper_head":n.headRenderer(J.create("creeper/creeper"),2),"minecraft:dragon_head":n.dragonHeadRenderer(),"minecraft:piglin_head":n.piglinHeadRenderer(),"minecraft:player_head":n.headRenderer(J.create("player/wide/steve"),1)})),P=["oak","spruce","birch","jungle","acacia","dark_oak","mangrove","cherry","bamboo","crimson","warped","pale_oak"],b=new Map(P.map(C=>[`minecraft:${C}_sign`,n.signRenderer(J.create(C))])),E=new Map(P.map(C=>[`minecraft:${C}_wall_sign`,n.wallSignRenderer(J.create(C))])),U=new Map(P.map(C=>[`minecraft:${C}_hanging_sign`,n.hangingSignRenderer(J.create(C))])),M=new Map(P.map(C=>[`minecraft:${C}_wall_hanging_sign`,n.wallHangingSignRenderer(C)])),x=new Map(Object.keys(vs).map(C=>[`minecraft:${C}_shulker_box`,n.shulkerBoxRenderer(J.create(`shulker_${C}`))])),R=new Map(Object.keys(vs).map(C=>[`minecraft:${C}_bed`,n.bedRenderer(J.create(C))])),N=new Map(Object.keys(vs).map(C=>[`minecraft:${C}_banner`,n.bannerRenderer(C)])),D=new Map(Object.keys(vs).map(C=>[`minecraft:${C}_wall_banner`,n.wallBannerRenderer(C)]));function F(C,k,V,G){const K=new ft;C.is("water")&&K.merge(bl("water",w(C,"level"),V,G,0)),C.is("lava")&&K.merge(bl("lava",w(C,"level"),V,G));const te=v.get(C.getName().toString());if(te!==void 0){const fe=p(C,"facing","south"),Y=st();He(Y,Y,[8,8,8]),kt(Y,Y,fe==="west"?Math.PI/2:fe==="south"?Math.PI:fe==="east"?Math.PI*3/2:0),He(Y,Y,[-8,-8,-8]),K.merge(te(V).transform(Y))}C.is("decorated_pot")&&K.merge(t(V));const le=y.get(C.getName().toString());if(le!==void 0){const fe=w(C,"rotation")/16*Math.PI*2,Y=st();He(Y,Y,[8,8,8]),kt(Y,Y,fe),He(Y,Y,[-8,-8,-8]),K.merge(le(V).transform(Y))}const ye=b.get(C.getName().toString());if(ye!==void 0){const fe=w(C,"rotation")/16*Math.PI*2,Y=st();He(Y,Y,[8,8,8]),kt(Y,Y,fe),pn(Y,Y,[2/3,2/3,2/3]),He(Y,Y,[-8,-8,-8]),K.merge(ye(V).transform(Y))}const Pe=E.get(C.getName().toString());if(Pe!==void 0){const fe=p(C,"facing","south"),Y=st();He(Y,Y,[8,8,8]),kt(Y,Y,fe==="west"?Math.PI/2:fe==="south"?Math.PI:fe==="east"?Math.PI*3/2:0),pn(Y,Y,[2/3,2/3,2/3]),He(Y,Y,[-8,-8,-8]),K.merge(Pe(V).transform(Y))}const $=U.get(C.getName().toString());if($!==void 0){const fe=p(C,"attached","false")==="true",Y=w(C,"rotation")/16*Math.PI*2,Ae=st();He(Ae,Ae,[8,8,8]),kt(Ae,Ae,Y),pn(Ae,Ae,[2/3,2/3,2/3]),He(Ae,Ae,[-8,-8,-8]),K.merge($(fe,V).transform(Ae))}const ne=M.get(C.getName().toString());if(ne!==void 0){const fe=p(C,"facing","south"),Y=st();He(Y,Y,[8,8,8]),kt(Y,Y,fe==="west"?Math.PI/2:fe==="south"?Math.PI:fe==="east"?Math.PI*3/2:0),He(Y,Y,[-8,-8,-8]),K.merge(ne(V).transform(Y))}C.is("conduit")&&K.merge(h(V));const oe=x.get(C.getName().toString());if(oe!==void 0){const fe=p(C,"facing","up"),Y=st();He(Y,Y,[8,8,8]),fe==="down"?is(Y,Y,Math.PI):fe!=="up"&&(kt(Y,Y,fe==="east"?Math.PI/2:fe==="north"?Math.PI:fe==="west"?Math.PI*3/2:0),is(Y,Y,Math.PI/2)),He(Y,Y,[-8,-8,-8]),K.merge(oe(V).transform(Y))}if(C.is("bell")){const fe=st();He(fe,fe,[8,8,8]),pn(fe,fe,[1,-1,-1]),He(fe,fe,[-8,-8,-8]),K.merge(_(V).transform(fe))}const ae=R.get(C.getName().toString());if(ae!==void 0){const fe=p(C,"part","head"),Y=p(C,"facing","south"),Ae=st();He(Ae,Ae,[8,8,8]),kt(Ae,Ae,Y==="east"?Math.PI/2:Y==="north"?Math.PI:Y==="west"?Math.PI*3/2:0),He(Ae,Ae,[-8,-8,-8]),K.merge(ae(fe,V).transform(Ae))}const Ie=N.get(C.getName().toString());if(Ie!==void 0){const fe=w(C,"rotation")/16*Math.PI*2,Y=st();He(Y,Y,[8,24,8]),kt(Y,Y,fe),pn(Y,Y,[2/3,2/3,2/3]),He(Y,Y,[-8,-24,-8]),K.merge(Ie(V,k==null?void 0:k.getList("patterns",he.Compound)).transform(Y))}const Le=D.get(C.getName().toString());if(Le!==void 0){const fe=p(C,"facing","south"),Y=st();He(Y,Y,[8,8,8]),kt(Y,Y,fe==="east"?Math.PI/2:fe==="north"?Math.PI:fe==="west"?Math.PI*3/2:0),pn(Y,Y,[2/3,2/3,2/3]),He(Y,Y,[-8,-23.2,-8]),K.merge(Le(V,k==null?void 0:k.getList("patterns",he.Compound)).transform(Y))}!C.is("water")&&!C.is("lava")&&C.isWaterlogged()&&K.merge(bl("water",0,V,G,0));const O=st();return pn(O,O,[.0625,.0625,.0625]),K.transform(O)}n.getBlockMesh=F})(lt||(lt={}));class As{constructor(e,t,i,r=16,s=!0){L(this,"gl");L(this,"structure");L(this,"resources");L(this,"chunks",[]);L(this,"chunkSize");L(this,"meshesDirty",!0);L(this,"meshCache",[]);L(this,"emissiveLights",[]);L(this,"emissiveLightsByChunk",new Map);L(this,"emissiveDirty",!0);L(this,"blockPropsCache",new WeakMap);L(this,"buildToken",0);this.gl=e,this.structure=t,this.resources=i,this.chunkSize=typeof r=="number"?[r,r,r]:r,s&&this.updateStructureBuffers()}setStructure(e,t){this.structure=e,(t==null?void 0:t.rebuild)!==!1&&this.updateStructureBuffers()}updateStructureBuffers(e){if(!this.structure)return;this.buildToken+=1;const t=this.buildChunkFilter(e);this.markDirty(),this.prepareRebuild(e);for(const i of this.structure.getBlocks())this.processBlock(i,t);this.finalizeRebuild(e)}async updateStructureBuffersAsync(e){var c,l;if(!this.structure)return;const t=++this.buildToken,i=this.buildChunkFilter(e==null?void 0:e.chunkPositions);this.markDirty(),this.prepareRebuild(e==null?void 0:e.chunkPositions);const r=this.structure.getBlocks(),s=r.length,a=(e==null?void 0:e.timeSliceMs)??8;let o=this.now();for(let u=0;u<r.length;u++){if(t!==this.buildToken)return;this.processBlock(r[u],i),!(u&1023)&&this.now()-o>=a&&((c=e==null?void 0:e.onProgress)==null||c.call(e,u+1,s),await this.yieldControl(),o=this.now())}t===this.buildToken&&(await this.finalizeRebuildAsync(e==null?void 0:e.chunkPositions,a),(l=e==null?void 0:e.onProgress)==null||l.call(e,s,s))}getMeshes(){return this.getMeshEntries().map(e=>e.mesh)}cancelPendingBuilds(){this.buildToken+=1}getMeshesInRange(e,t){return this.getMeshEntriesInRange(e,t).map(i=>i.mesh)}getMeshEntries(){return(this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),this.meshCache}getMeshEntriesInRange(e,t){if((this.meshesDirty||this.meshCache.length===0)&&this.rebuildMeshCache(),t===void 0)return this.meshCache;const i=t*t;return this.meshCache.filter(s=>{const a=[s.origin[0]+this.chunkSize[0]*.5,s.origin[1]+this.chunkSize[1]*.5,s.origin[2]+this.chunkSize[2]*.5],o=a[0]-e[0],c=a[1]-e[1],l=a[2]-e[2];return o*o+c*c+l*l<=i})}needsCull(e,t){var s;const i=(s=this.structure.getBlock(Rt.towards(e.pos,t)))==null?void 0:s.state;if(!i)return!1;const r=this.resources.getBlockFlags(i.getName());return e.state.getName().equals(i.getName())&&(r!=null&&r.self_culling)?!0:r!=null&&r.opaque?!(t===Ke.UP&&e.state.isWaterlogged()):e.state.isWaterlogged()&&i.isWaterlogged()}isFullyOccluded(e){var i;const t=[Ke.UP,Ke.DOWN,Ke.NORTH,Ke.SOUTH,Ke.EAST,Ke.WEST];for(const r of t){const s=(i=this.structure.getBlock(Rt.towards(e.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=this.resources.getBlockFlags(s.getName());if(!(a!=null&&a.opaque))return!1}return!0}finishChunkMesh(e,t,i,r,s){const a=st();He(a,a,t),e.transform(a);const o=this.resources.getBlockFlags(i);let c=0;if(o!=null&&o.emissive){const l=o.emissiveConditional;if(l){const u=r[l];(u===void 0||u==="true")&&(c=o.emissiveIntensity??1)}else c=o.emissiveIntensity??1}if(c>0){const l=this.emissiveLightsByChunk.get(s)??[];l.push({position:[t[0]+.5,t[1]+.5,t[2]+.5],intensity:c,color:[1,.85,.6]}),this.emissiveLightsByChunk.set(s,l),this.emissiveDirty=!0}for(const l of e.quads){const u=l.normal();l.forEach(h=>{h.normal=u,h.blockPos=new St(t[0],t[1],t[2]),h.emissive=c})}}getEmissiveLights(){if(this.emissiveDirty){const e=[];this.emissiveLightsByChunk.forEach(t=>e.push(...t)),this.emissiveLights=e,this.emissiveDirty=!1}return this.emissiveLights}clearEmissiveLights(e){const t=this.chunkKey(e);this.emissiveLightsByChunk.has(t)&&(this.emissiveLightsByChunk.delete(t),this.emissiveDirty=!0)}prepareRebuild(e){if(!e){this.emissiveLightsByChunk.clear(),this.emissiveLights=[],this.emissiveDirty=!0,this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.clear(),r.transparentMesh.clear())})));return}e.forEach(t=>this.clearEmissiveLights(t)),e.forEach(t=>{const i=this.getChunk(t);i.mesh.clear(),i.transparentMesh.clear()})}finalizeRebuild(e){if(!e){this.chunks.forEach(t=>t.forEach(i=>i.forEach(r=>{r&&(r.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),r.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}))})));return}e.forEach(t=>{const i=this.getChunk(t);i.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),i.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW})})}async finalizeRebuildAsync(e,t=8){let i=this.now();const r=async()=>{this.now()-i>=t&&(await this.yieldControl(),i=this.now())};if(!e){for(const s of this.chunks)if(s){for(const a of s)if(a)for(const o of a)o&&(o.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),o.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r())}return}for(const s of e){const a=this.getChunk(s);a.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),a.transparentMesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0,blockPos:!0,usage:this.gl.STATIC_DRAW}),await r()}}processBlock(e,t){var c;const i=e.state.getName(),r=this.getBlockProps(e.state);if(this.isFullyOccluded(e))return;const s=[Math.floor(e.pos[0]/this.chunkSize[0]),Math.floor(e.pos[1]/this.chunkSize[1]),Math.floor(e.pos[2]/this.chunkSize[2])],a=this.chunkKey(s);if(t&&!t.has(a))return;const o=this.getChunk(s);try{const l=this.resources.getBlockDefinition(i),u={up:this.needsCull(e,Ke.UP),down:this.needsCull(e,Ke.DOWN),west:this.needsCull(e,Ke.WEST),east:this.needsCull(e,Ke.EAST),north:this.needsCull(e,Ke.NORTH),south:this.needsCull(e,Ke.SOUTH)},h=new ft;l&&h.merge(l.getMesh(i,r,this.resources,this.resources,u));const d=lt.getBlockMesh(e.state,e.nbt,this.resources,u);d.isEmpty()||h.merge(d),h.isEmpty()||(this.finishChunkMesh(h,e.pos,i,r,a),(c=this.resources.getBlockFlags(e.state.getName()))!=null&&c.semi_transparent?o.transparentMesh.merge(h):o.mesh.merge(h))}catch(l){console.error(`Error rendering block ${i}`,l)}}getBlockProps(e){const t=this.blockPropsCache.get(e);if(t)return t;const i={...e.getProperties()},r=this.resources.getDefaultBlockProperties(e.getName())??{};return Object.entries(r).forEach(([s,a])=>{i[s]===void 0&&(i[s]=a)}),this.blockPropsCache.set(e,i),i}buildChunkFilter(e){if(!e)return null;const t=new Set;return e.forEach(i=>{t.add(this.chunkKey(i))}),t}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}chunkKey(e){return`${e[0]},${e[1]},${e[2]}`}getChunk(e){const t=Math.abs(e[0])*2+(e[0]<0?1:0),i=Math.abs(e[1])*2+(e[1]<0?1:0),r=Math.abs(e[2])*2+(e[2]<0?1:0);if(this.chunks[t]||(this.chunks[t]=[]),this.chunks[t][i]||(this.chunks[t][i]=[]),!this.chunks[t][i][r]){const s=[e[0]*this.chunkSize[0],e[1]*this.chunkSize[1],e[2]*this.chunkSize[2]];this.chunks[t][i][r]={mesh:new ft,transparentMesh:new ft,origin:s}}return this.chunks[t][i][r]}rebuildMeshCache(){const e=[],t=[];this.chunks.forEach(i=>i.forEach(r=>r.forEach(s=>{s&&(s.mesh.isEmpty()||e.push({mesh:s.mesh,origin:s.origin,transparent:!1}),s.transparentMesh.isEmpty()||t.push({mesh:s.transparentMesh,origin:s.origin,transparent:!0}))}))),this.meshCache=e.concat(t),this.meshesDirty=!1}markDirty(){this.meshesDirty=!0,this.meshCache=[]}}class xd{constructor(e,t,i){L(this,"gl");L(this,"program");this.gl=e,this.program=this.initShaderProgram(t,i)}getProgram(){return this.program}initShaderProgram(e,t){const i=this.loadShader(this.gl.VERTEX_SHADER,e);if(!i)throw new Error("Failed to create vertex shader");const r=this.loadShader(this.gl.FRAGMENT_SHADER,t);if(!r)throw new Error("Failed to create fragment shader");const s=this.gl.createProgram();if(!s)throw new Error("Failed to create shader program");if(this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS))throw new Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(s)}`);return s}loadShader(e,t){const i=this.gl.createShader(e);if(!i)throw new Error("Failed to create shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)){const r=new Error(`Compiling ${e===this.gl.VERTEX_SHADER?"vertex":"fragment"} shader: ${this.gl.getShaderInfoLog(i)}`);throw this.gl.deleteShader(i),r}return i}}const ES=`
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
`,TS=`
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
`;class yd{constructor(e){L(this,"gl");L(this,"shaderProgram");L(this,"projMatrix");L(this,"activeShader");L(this,"pixelSize",0);this.gl=e,this.shaderProgram=new xd(e,ES,TS).getProgram(),this.activeShader=this.shaderProgram,this.projMatrix=this.getPerspective(),this.initialize()}setViewport(e,t,i,r){this.gl.viewport(e,t,i,r),this.projMatrix=this.getPerspective()}getPerspective(){const e=70*Math.PI/180,t=this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,i=st();return aS(i,e,t,.1,500),i}initialize(){this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK)}setShader(e){this.gl.useProgram(e),this.activeShader=e}setVertexAttr(e,t,i){if(i===void 0)throw new Error(`Expected buffer for ${e}`);const r=this.gl.getAttribLocation(this.activeShader,e);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.vertexAttribPointer(r,t,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(r)}setUniform(e,t){const i=this.gl.getUniformLocation(this.activeShader,e);this.gl.uniformMatrix4fv(i,!1,t)}setTexture(e,t){this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.pixelSize=t??0}createAtlasTexture(e){const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture");return this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),t}prepareDraw(e){this.setUniform("mView",e),this.setUniform("mProj",this.projMatrix);const t=this.gl.getUniformLocation(this.activeShader,"pixelSize");this.gl.uniform1f(t,this.pixelSize)}drawMesh(e,t){if(e.quadVertices()>0){if(t.pos&&this.setVertexAttr("vertPos",3,e.posBuffer),t.color&&this.setVertexAttr("vertColor",3,e.colorBuffer),t.texture&&(this.setVertexAttr("texCoord",2,e.textureBuffer),this.setVertexAttr("texLimit",4,e.textureLimitBuffer)),t.normal&&this.setVertexAttr("normal",3,e.normalBuffer),t.blockPos&&this.setVertexAttr("blockPos",3,e.blockPosBuffer),!e.indexBuffer)throw new Error("Expected index buffer");this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,e.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,e.quadIndices(),e.indexType??this.gl.UNSIGNED_SHORT,0)}e.lineVertices()>0&&(t.pos&&this.setVertexAttr("vertPos",3,e.linePosBuffer),t.color&&this.setVertexAttr("vertColor",3,e.lineColorBuffer),this.gl.drawArrays(this.gl.LINES,0,e.lineVertices()))}}class xo extends yd{constructor(t,i,r,s={}){super(t);L(this,"item");L(this,"resources");L(this,"mesh");L(this,"atlasTexture");this.item=i,this.resources=r,this.updateMesh(s),this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas())}setItem(t,i={}){this.item=t,this.updateMesh(i)}updateMesh(t={}){this.mesh=xo.getItemMesh(this.item,this.resources,t),this.mesh.computeNormals(),this.mesh.rebuild(this.gl,{pos:!0,color:!0,texture:!0,normal:!0})}static getItemMesh(t,i,r){var c;const s=(c=t.getComponent("item_model",i))==null?void 0:c.getAsString();if(s===void 0)return new ft;const a=i.getItemModel(J.parse(s));if(!a)throw new Error(`Item model ${s} does not exist (defined by item ${t.toString()})`);return a.getMesh(t,i,r)}getPerspective(){const t=st();return lS(t,0,16,0,16,.1,500),t}drawItem(){var i,r;const t=st();He(t,t,[0,0,-32]),this.setShader(this.shaderProgram),this.setTexture(this.atlasTexture,(r=(i=this.resources).getPixelSize)==null?void 0:r.call(i)),this.prepareDraw(t),this.drawMesh(this.mesh,{pos:!0,color:!0,texture:!0,normal:!0})}}const Yi=[0,0,0];var ao;(function(n){function e(u){var f;const h=Q.readObject(u)??{},d=(f=Q.readString(h.type))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"constant":return new t(qe.fromJson(h.value)??Yi);case"dye":return new i(qe.fromJson(h.default)??Yi);case"grass":return new r(Q.readNumber(h.temperature)??0,Q.readNumber(h.downfall)??0);case"firework":return new s(qe.fromJson(h.default)??Yi);case"potion":return new a(qe.fromJson(h.default)??Yi);case"map_color":return new o(qe.fromJson(h.default)??Yi);case"custom_model_data":return new c(Q.readInt(h.index)??0,qe.fromJson(h.default)??Yi);case"team":return new l(qe.fromJson(h.default)??Yi);default:throw new Error(`Invalid item tint type ${d}`)}}n.fromJson=e;class t{constructor(h){L(this,"value");this.value=h}getTint(h){return this.value}}n.Constant=t;class i{constructor(h){L(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("dyed_color",d);return f?f.isCompound()?qe.intToRgb(f.getNumber("rgb")):qe.intToRgb(f.getAsNumber()):this.default_color}}n.Dye=i;class r{constructor(h,d){L(this,"temperature");L(this,"downfall");this.temperature=h,this.downfall=d}getTint(h){return[124/255,189/255,107/255]}}n.Grass=r;class s{constructor(h){L(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("firework_explosion",d);if(!(f!=null&&f.isCompound()))return this.default_color;const g=f.get("colors");return!g||!g.isListOrArray()?this.default_color:(()=>{if(g.length===1){const v=g.get(0);return v?qe.intToRgb(v.getAsNumber()):this.default_color}let[m,p,w]=[0,0,0];for(const v of g.getItems())m+=(v.getAsNumber()&16711680)>>16,p+=(v.getAsNumber()&65280)>>8,w+=(v.getAsNumber()&255)>>0;return m/=g.length,p/=g.length,w/=g.length,[m/255,p/255,w/255]})()}}n.Firework=s;class a{constructor(h){L(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("potion_contents",d);if(!f)return this.default_color;const g=Os.fromNbt(f);return Os.getColor(g)}}n.Potion=a;class o{constructor(h){L(this,"default_color");this.default_color=h}getTint(h,d){const f=h.getComponent("map_color",d);return f?qe.intToRgb(f.getAsNumber()):this.default_color}}n.MapColor=o;class c{constructor(h,d){L(this,"index");L(this,"default_color");this.index=h,this.default_color=d}getTint(h,d){const f=h.getComponent("custom_model_data",d);if(!(f!=null&&f.isCompound()))return this.default_color;const g=f.getList("colors").get(this.index);return g?qe.fromNbt(g)??this.default_color:this.default_color}}n.CustomModelData=c;class l{constructor(h){L(this,"default_color");this.default_color=h}getTint(h,d,f){return f.context_entity_team_color??this.default_color}}n.Team=l})(ao||(ao={}));var Zl;(function(n){function e(f){var m;const g=Q.readObject(f)??{},_=(m=Q.readString(g.type))==null?void 0:m.replace(/^minecraft:/,"");switch(_){case"bed":return new t(J.parse(Q.readString(g.texture)??""));case"banner":return new i(Q.readString(g.color)??"");case"conduit":return new r;case"chest":return new s(J.parse(Q.readString(g.texture)??""),Q.readNumber(g.openness)??0);case"head":return new a(Q.readString(g.kind)??"",typeof g.texture=="string"?J.parse(g.texture):void 0,Q.readNumber(g.animation)??0);case"player_head":return new a("player",void 0,0);case"shulker_box":return new o(J.parse(Q.readString(g.texture)??""),Q.readNumber(g.openness)??0,Q.readString(g.orientation)??"up");case"shield":return new c;case"trident":return new l;case"decorated_pot":return new u;case"standing_sign":return new h(Q.readString(g.wood_type)??"",typeof g.texture=="string"?J.parse(g.texture):void 0);case"hanging_sign":return new d(Q.readString(g.wood_type)??"",typeof g.texture=="string"?J.parse(g.texture):void 0);default:return console.warn(`[lodestone]: Unknown special model ${_}`),{getMesh:()=>new ft}}}n.fromJson=e;class t{constructor(g){L(this,"renderer");this.renderer=lt.bedRenderer(g)}getMesh(g,_){const m=this.renderer("head",_),p=this.renderer("foot",_),w=st();return He(w,w,[0,0,-16]),m.merge(p.transform(w))}}class i{constructor(g){L(this,"renderer");this.renderer=lt.bannerRenderer(g)}getMesh(g,_){const m=g.getComponent("banner_patterns",void 0),p=st();return He(p,p,[8,24,8]),kt(p,p,Math.PI),pn(p,p,[2/3,2/3,2/3]),He(p,p,[-8,-24,-8]),this.renderer(_,m instanceof jt?m:void 0).transform(p)}}class r{getMesh(g,_){return lt.conduitRenderer(_)}}class s{constructor(g,_){L(this,"renderer");this.renderer=lt.chestRenderer(g)}getMesh(g,_){const m=st();return He(m,m,[8,8,8]),kt(m,m,Math.PI),He(m,m,[-8,-8,-8]),this.renderer(_).transform(m)}}class a{constructor(g,_,m){L(this,"renderer");this.renderer=({skeleton:()=>lt.headRenderer(_??J.create("skeleton/skeleton"),2),wither_skeleton:()=>lt.headRenderer(_??J.create("skeleton/wither_skeleton"),2),zombie:()=>lt.headRenderer(_??J.create("zombie/zombie"),1),creeper:()=>lt.headRenderer(_??J.create("creeper/creeper"),2),dragon:()=>lt.dragonHeadRenderer(_),piglin:()=>lt.piglinHeadRenderer(_),player:()=>lt.headRenderer(_??J.create("player/wide/steve"),1)}[g]??(()=>()=>new ft))()}getMesh(g,_){return this.renderer(_)}}class o{constructor(g,_,m){L(this,"renderer");this.renderer=lt.shulkerBoxRenderer(g)}getMesh(g,_){return this.renderer(_)}}class c{getMesh(g,_){const m=lt.shieldRenderer(_),p=st();return He(p,p,[-3,1,0]),is(p,p,-10*Math.PI/180),kt(p,p,-10*Math.PI/180),pc(p,p,-5*Math.PI/180),m.transform(p)}}class l{getMesh(g,_){return new ft}}class u{getMesh(g,_){return lt.decoratedPotRenderer(_)}}class h{constructor(g,_){L(this,"renderer");this.renderer=lt.signRenderer(_??J.create(g))}getMesh(g,_){return this.renderer(_)}}class d{constructor(g,_){L(this,"renderer");this.renderer=lt.hangingSignRenderer(_??J.create(g))}getMesh(g,_){return this.renderer(!1,_)}}})(Zl||(Zl={}));const Bh=new ft;var Kl;(function(n){function e(u){var f,g;const h=Q.readObject(u)??{},d=(f=Q.readString(h.type))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"empty":return new t;case"model":return new i(J.parse(Q.readString(h.model)??""),Q.readArray(h.tints,ao.fromJson)??[]);case"composite":return new r(Q.readArray(h.models,n.fromJson)??[]);case"condition":return new s(s.propertyFromJson(h),n.fromJson(h.on_true),n.fromJson(h.on_false));case"select":return new a(a.propertyFromJson(h),new Map((g=Q.readArray(h.cases,_=>Q.readObject(_)??{}))==null?void 0:g.flatMap(_=>{const m=n.fromJson(_.model);return Array.isArray(_.when)?_.when.map(p=>[Q.readString(p)??"",m]):[[Q.readString(_.when)??"",m]]})),h.fallback?n.fromJson(h.fallback):void 0);case"range_dispatch":return new o(o.propertyFromJson(h),Q.readNumber(h.scale)??1,Q.readArray(h.entries,_=>{const m=Q.readObject(_)??{};return{threshold:Q.readNumber(m.threshold)??0,model:n.fromJson(m.model)}})??[],h.fallback?n.fromJson(h.fallback):void 0);case"special":return new c(Zl.fromJson(h.model),J.parse(Q.readString(h.base)??""));case"bundle/selected_item":return new l;default:return console.warn(`[lodestone]: Unknown item model type '${d}'`),{getMesh:()=>new ft}}}n.fromJson=e;class t{getMesh(h,d,f){return new ft}}n.Empty=t;class i{constructor(h,d){L(this,"modelId");L(this,"tints");this.modelId=h,this.tints=d}getMesh(h,d,f){const g=d.getBlockModel(this.modelId);if(!g)return console.warn(`[lodestone]: Model '${this.modelId}' does not exist`),new ft;const _=p=>p<this.tints.length?this.tints[p].getTint(h,d,f):[1,1,1],m=g.getMesh(d,xt.none(),_);return m.transform(g.getDisplayTransform(f.display_context??"gui")),m}}n.Model=i;class r{constructor(h){L(this,"models");this.models=h}getMesh(h,d,f){const g=new ft;return this.models.forEach(_=>g.merge(_.getMesh(h,d,f))),g}}n.Composite=r;class s{constructor(h,d,f){L(this,"property");L(this,"onTrue");L(this,"onFalse");this.property=h,this.onTrue=d,this.onFalse=f}getMesh(h,d,f){return(this.property(h,d,f)?this.onTrue:this.onFalse).getMesh(h,d,f)}static propertyFromJson(h){var f;const d=(f=Q.readString(h.property))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"fishing_rod/cast":case"selected":case"carried":case"extended_view":return(w,v,y)=>y[d]??!1;case"view_entity":return(w,v,y)=>y.context_entity_is_view_entity??!1;case"using_item":return(w,v,y)=>(y.use_duration??-1)>=0;case"bundle/has_selected_item":return(w,v,y)=>(y["bundle/selected_item"]??-1)>=0;case"broken":return(w,v,y)=>{var E,U;const P=(E=w.getComponent("damage",v))==null?void 0:E.getAsNumber(),b=(U=w.getComponent("max_damage",v))==null?void 0:U.getAsNumber();return P!==void 0&&b!==void 0&&P>=b-1};case"damaged":return(w,v,y)=>{var E,U;const P=(E=w.getComponent("damage",v))==null?void 0:E.getAsNumber(),b=(U=w.getComponent("max_damage",v))==null?void 0:U.getAsNumber();return P!==void 0&&b!==void 0&&P>=1};case"has_component":const g=J.parse(Q.readString(h.component)??""),_=Q.readBoolean(h.ignore_default)??!1;return(w,v,y)=>w.hasComponent(g,_?void 0:v);case"keybind_down":const m=Q.readString(h.keybind)??"";return(w,v,y)=>{var P;return((P=y.keybind_down)==null?void 0:P.includes(m))??!1};case"custom_model_data":const p=Q.readInt(h.index)??0;return(w,v,y)=>{const P=w.getComponent("custom_model_data",v);if(!(P!=null&&P.isCompound()))return!1;const b=P.getList("flags").getNumber(p);return b!==void 0&&b!==0};default:return console.warn(`[lodestone]: Unknown condition property '${d}'`),()=>!1}}}n.Condition=s;class a{constructor(h,d,f){L(this,"property");L(this,"cases");L(this,"fallback");this.property=h,this.cases=d,this.fallback=f}getMesh(h,d,f){var _;const g=this.property(h,d,f);return((_=(g!==null?this.cases.get(g):void 0)??this.fallback)==null?void 0:_.getMesh(h,d,f))??Bh}static propertyFromJson(h){var f;const d=(f=Q.readString(h.property))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"main_hand":return(p,w,v)=>v.main_hand??"right";case"display_context":return(p,w,v)=>v.display_context??"gui";case"context_dimension":return(p,w,v)=>{var y;return((y=v.context_dimension)==null?void 0:y.toString())??null};case"charge_type":const g=J.create("firework_rocket");return(p,w,v)=>{const y=p.getComponent("charged_projectiles",w);return!(y!=null&&y.isList())||y.length===0?"none":y.filter(P=>P.isCompound()?J.parse(P.getString("id")).equals(g):!1).length>0?"rocket":"arrow"};case"trim_material":return(p,w,v)=>{const y=p.getComponent("trim",w);return y!=null&&y.isCompound()?J.parse(y.getString("material")).toString():null};case"block_state":const _=Q.readString(h.block_state_property)??"";return(p,w,v)=>{const y=p.getComponent("block_state",w);return y!=null&&y.isCompound()?y.getString(_):null};case"local_time":return(p,w,v)=>"NOT IMPLEMENTED";case"context_entity_type":return(p,w,v)=>{var y;return((y=v.context_entity_type)==null?void 0:y.toString())??null};case"custom_model_data":const m=Q.readInt(h.index)??0;return(p,w,v)=>{const y=p.getComponent("custom_model_data",w);if(!(y!=null&&y.isCompound()))return null;const P=y.getList("strings");return P.length<=m?null:P.getString(m)};default:return console.warn(`[lodestone]: Unknown select property '${d}'`),()=>null}}}n.Select=a;class o{constructor(h,d,f,g){L(this,"property");L(this,"scale");L(this,"fallback");L(this,"entries");this.property=h,this.scale=d,this.fallback=g,this.entries=f.sort((_,m)=>_.threshold-m.threshold)}getMesh(h,d,f){const g=this.property(h,d,f)*this.scale;let _=this.fallback;for(const m of this.entries)if(m.threshold<=g)_=m.model;else break;return(_==null?void 0:_.getMesh(h,d,f))??Bh}static propertyFromJson(h){var f;const d=(f=Q.readString(h.property))==null?void 0:f.replace(/^minecraft:/,"");switch(d){case"bundle/fullness":let g=function(v,y){const P=v.getComponent("bundle_contents",y);return P!=null&&P.isListOrArray()?P.map(E=>E.isCompound()?ii.fromNbt(E):void 0).reduce((E,U)=>{var R;if(U===void 0)return E;if(U.hasComponent("bundle_contents",y))return E+g(U,y)+1/16;const M=U.getComponent("bees",y);if(M!=null&&M.isListOrArray()&&M.length>0)return E+1;const x=((R=U.getComponent("max_stack_size",y))==null?void 0:R.getAsNumber())??1;return E+U.count/x},0):0};return(v,y,P)=>g(v,y);case"damage":{const v=Q.readBoolean(h.normalize)??!0;return(y,P,b)=>{var M,x;const E=((M=y.getComponent("max_damage",P))==null?void 0:M.getAsNumber())??0,U=bi(((x=y.getComponent("damage",P))==null?void 0:x.getAsNumber())??0,0,E);return v?E>0?bi(U/E,0,1):0:bi(U,0,E)}}case"count":{const v=Q.readBoolean(h.normalize)??!0;return(y,P,b)=>{var U;const E=((U=y.getComponent("max_stack_size",P))==null?void 0:U.getAsNumber())??1;return v?bi(y.count/E,0,1):bi(y.count,0,E)}}case"cooldown":return(v,y,P)=>{var M;const b=v.getComponent("use_cooldown",y),E=b!=null&&b.isCompound()?b.getString("cooldown_group"):"",U=b!=null&&b.isCompound()&&E?J.parse(E):v.id;return((M=P.cooldown_percentage)==null?void 0:M[U.toString()])??0};case"time":switch(Q.readString(h.source)??"daytime"){case"moon_phase":return(v,y,P)=>(P.game_time??0)/24e3%8/8;case"random":return(v,y,P)=>Math.random();default:return(v,y,P)=>{const E=(P.game_time??0)/24e3%1-.25,U=.5-Math.cos(E*Math.PI)/2;return(E*2+U)/3}}case"compass":return(v,y,P)=>P.compass_angle??0;case"crossbow/pull":return(v,y,P)=>P["crossbow/pull"]??0;case"use_duration":const m=Q.readBoolean(h.remaining)??!0;return(v,y,P)=>P.use_duration===void 0||P.use_duration<0?0:m?Math.max((P.max_use_duration??0)-P.use_duration,0):P.use_duration;case"use_cycle":const p=Q.readNumber(h.period)??1;return(v,y,P)=>P.use_duration===void 0||P.use_duration<0||p<=0?0:Math.max((P.max_use_duration??0)-(P.use_duration??0),0)%p;case"custom_model_data":const w=Q.readInt(h.index)??0;return(v,y,P)=>{const b=v.getComponent("custom_model_data",y);return b!=null&&b.isCompound()?b.getList("floats").getNumber(w):0};default:return console.warn(`[lodestone]: Unknown range dispatch property '${d}'`),()=>0}}}n.RangeDispatch=o;class c{constructor(h,d){L(this,"specialModel");L(this,"base");this.specialModel=h,this.base=d}getMesh(h,d,f){const g=this.specialModel.getMesh(h,d),_=d.getBlockModel(this.base);return _?(g.transform(_.getDisplayTransform(f.display_context??"gui")),g):(console.warn(`[lodestone]: Special model base '${this.base}' does not exist`),new ft)}}n.Special=c;class l{getMesh(h,d,f){const g=f["bundle/selected_item"];if(g===void 0||g<0)return new ft;const _=h.getComponent("bundle_contents",d);if(!(_!=null&&_.isListOrArray()))return new ft;const m=_.get(g);if(m===void 0||!m.isCompound())return new ft;const p=ii.fromNbt(m);return xo.getItemMesh(p,d,{...f,"bundle/selected_item":-1,selected:!1,carried:!1,use_duration:-1})}}n.BundleSelectedItem=l})(Kl||(Kl={}));const El=256,zh=2,AS=zh*zh,Na=(n,e,t=1)=>{const i=new bf(n,Math.max(1,e),Math.max(1,t),Wt,Rn);return i.needsUpdate=!0,i.magFilter=vt,i.minFilter=vt,i.wrapS=An,i.wrapT=An,i.flipY=!1,i},Ee={direction:[-.5,.25,.5],color:[1,.75,.45],ambientColor:[.25,.4,.6],fillColor:[.35,.28,.5],rimColor:[1,.55,.25],intensity:1.35,ambientIntensity:.55,fillIntensity:.3,rimIntensity:.55,horizonFalloff:.7,exposure:1.15,sky:{zenithColor:[.12,.28,.56],horizonColor:[1,.55,.25],groundColor:[.25,.2,.25],sunGlowColor:[1,.45,.15],sunGlowIntensity:.6,sunGlowExponent:6,stars:{enabled:!1,density:.003,brightness:.6}},disc:{size:35,distance:180,coreColor:[1,.98,.9],glowColor:[1,.55,.15],coreIntensity:2.8,glowIntensity:3.5,softness:.25},fog:{color:[.85,.6,.4],density:2e-4,heightFalloff:.001},shadow:{enabled:!0,mapSize:2048,bias:5e-4,normalBias:.02,intensity:.5,softness:3,frustumSize:100},postProcess:{enabled:!1,ao:{enabled:!0,intensity:.5,radius:.5,samples:16},bloom:{enabled:!1,threshold:.8,intensity:.4,radius:.6},godRays:{enabled:!1,intensity:.4,decay:.95,density:.8,samples:60}},emissive:{range:16,intensity:3.5,tint:[1,.85,.6]}};function Hh(n){var t,i,r,s,a,o,c,l,u,h,d,f,g,_,m,p,w,v,y,P,b,E,U,M,x,R,N,D,F,C,k,V,G,K,te,le,ye,Pe,$,ne,oe,ae,Ie,Le,O,fe,Y,Ae,Me,_e,xe,Fe,ut,I,T,j,ee,ie,se;const e=gi((n==null?void 0:n.direction)??Mn(...Ee.direction));return uS(e)<1e-5&&hS(e,0,1,0),pd(e,e),{direction:e,color:(n==null?void 0:n.color)??Ee.color,ambientColor:(n==null?void 0:n.ambientColor)??Ee.ambientColor,fillColor:(n==null?void 0:n.fillColor)??Ee.fillColor,rimColor:(n==null?void 0:n.rimColor)??Ee.rimColor,intensity:(n==null?void 0:n.intensity)??Ee.intensity,ambientIntensity:(n==null?void 0:n.ambientIntensity)??Ee.ambientIntensity,fillIntensity:(n==null?void 0:n.fillIntensity)??Ee.fillIntensity,rimIntensity:(n==null?void 0:n.rimIntensity)??Ee.rimIntensity,horizonFalloff:(n==null?void 0:n.horizonFalloff)??Ee.horizonFalloff,exposure:(n==null?void 0:n.exposure)??Ee.exposure,sky:{zenithColor:((t=n==null?void 0:n.sky)==null?void 0:t.zenithColor)??Ee.sky.zenithColor,horizonColor:((i=n==null?void 0:n.sky)==null?void 0:i.horizonColor)??Ee.sky.horizonColor,groundColor:((r=n==null?void 0:n.sky)==null?void 0:r.groundColor)??Ee.sky.groundColor,sunGlowColor:((s=n==null?void 0:n.sky)==null?void 0:s.sunGlowColor)??Ee.sky.sunGlowColor,sunGlowIntensity:((a=n==null?void 0:n.sky)==null?void 0:a.sunGlowIntensity)??Ee.sky.sunGlowIntensity,sunGlowExponent:((o=n==null?void 0:n.sky)==null?void 0:o.sunGlowExponent)??Ee.sky.sunGlowExponent,stars:{enabled:((l=(c=n==null?void 0:n.sky)==null?void 0:c.stars)==null?void 0:l.enabled)??Ee.sky.stars.enabled,density:((h=(u=n==null?void 0:n.sky)==null?void 0:u.stars)==null?void 0:h.density)??Ee.sky.stars.density,brightness:((f=(d=n==null?void 0:n.sky)==null?void 0:d.stars)==null?void 0:f.brightness)??Ee.sky.stars.brightness}},disc:{size:((g=n==null?void 0:n.disc)==null?void 0:g.size)??Ee.disc.size,distance:((_=n==null?void 0:n.disc)==null?void 0:_.distance)??Ee.disc.distance,coreColor:((m=n==null?void 0:n.disc)==null?void 0:m.coreColor)??Ee.disc.coreColor,glowColor:((p=n==null?void 0:n.disc)==null?void 0:p.glowColor)??Ee.disc.glowColor,coreIntensity:((w=n==null?void 0:n.disc)==null?void 0:w.coreIntensity)??Ee.disc.coreIntensity,glowIntensity:((v=n==null?void 0:n.disc)==null?void 0:v.glowIntensity)??Ee.disc.glowIntensity,softness:((y=n==null?void 0:n.disc)==null?void 0:y.softness)??Ee.disc.softness},fog:{color:((P=n==null?void 0:n.fog)==null?void 0:P.color)??Ee.fog.color,density:((b=n==null?void 0:n.fog)==null?void 0:b.density)??Ee.fog.density,heightFalloff:((E=n==null?void 0:n.fog)==null?void 0:E.heightFalloff)??Ee.fog.heightFalloff},shadow:{enabled:((U=n==null?void 0:n.shadow)==null?void 0:U.enabled)??Ee.shadow.enabled,mapSize:((M=n==null?void 0:n.shadow)==null?void 0:M.mapSize)??Ee.shadow.mapSize,bias:((x=n==null?void 0:n.shadow)==null?void 0:x.bias)??Ee.shadow.bias,normalBias:((R=n==null?void 0:n.shadow)==null?void 0:R.normalBias)??Ee.shadow.normalBias,intensity:((N=n==null?void 0:n.shadow)==null?void 0:N.intensity)??Ee.shadow.intensity,softness:((D=n==null?void 0:n.shadow)==null?void 0:D.softness)??Ee.shadow.softness,frustumSize:((F=n==null?void 0:n.shadow)==null?void 0:F.frustumSize)??Ee.shadow.frustumSize},postProcess:{enabled:((C=n==null?void 0:n.postProcess)==null?void 0:C.enabled)??Ee.postProcess.enabled,ao:{enabled:((V=(k=n==null?void 0:n.postProcess)==null?void 0:k.ao)==null?void 0:V.enabled)??Ee.postProcess.ao.enabled,intensity:((K=(G=n==null?void 0:n.postProcess)==null?void 0:G.ao)==null?void 0:K.intensity)??Ee.postProcess.ao.intensity,radius:((le=(te=n==null?void 0:n.postProcess)==null?void 0:te.ao)==null?void 0:le.radius)??Ee.postProcess.ao.radius,samples:((Pe=(ye=n==null?void 0:n.postProcess)==null?void 0:ye.ao)==null?void 0:Pe.samples)??Ee.postProcess.ao.samples},bloom:{enabled:((ne=($=n==null?void 0:n.postProcess)==null?void 0:$.bloom)==null?void 0:ne.enabled)??Ee.postProcess.bloom.enabled,threshold:((ae=(oe=n==null?void 0:n.postProcess)==null?void 0:oe.bloom)==null?void 0:ae.threshold)??Ee.postProcess.bloom.threshold,intensity:((Le=(Ie=n==null?void 0:n.postProcess)==null?void 0:Ie.bloom)==null?void 0:Le.intensity)??Ee.postProcess.bloom.intensity,radius:((fe=(O=n==null?void 0:n.postProcess)==null?void 0:O.bloom)==null?void 0:fe.radius)??Ee.postProcess.bloom.radius},godRays:{enabled:((Ae=(Y=n==null?void 0:n.postProcess)==null?void 0:Y.godRays)==null?void 0:Ae.enabled)??Ee.postProcess.godRays.enabled,intensity:((_e=(Me=n==null?void 0:n.postProcess)==null?void 0:Me.godRays)==null?void 0:_e.intensity)??Ee.postProcess.godRays.intensity,decay:((Fe=(xe=n==null?void 0:n.postProcess)==null?void 0:xe.godRays)==null?void 0:Fe.decay)??Ee.postProcess.godRays.decay,density:((I=(ut=n==null?void 0:n.postProcess)==null?void 0:ut.godRays)==null?void 0:I.density)??Ee.postProcess.godRays.density,samples:((j=(T=n==null?void 0:n.postProcess)==null?void 0:T.godRays)==null?void 0:j.samples)??Ee.postProcess.godRays.samples}},emissive:{range:((ee=n==null?void 0:n.emissive)==null?void 0:ee.range)??Ee.emissive.range,intensity:((ie=n==null?void 0:n.emissive)==null?void 0:ie.intensity)??Ee.emissive.intensity,tint:((se=n==null?void 0:n.emissive)==null?void 0:se.tint)??Ee.emissive.tint}}}function Gh(n){var d,f;const e=new Xn;if(n.quads.length===0)return e;const t=[],i=[],r=[],s=[],a=[],o=[],c=[],l=[];let u=0;for(const g of n.quads){const _=g.vertices();for(const m of _){t.push(m.pos.x,m.pos.y,m.pos.z);const p=m.normal??g.normal();i.push(p.x,p.y,p.z),r.push(((d=m.texture)==null?void 0:d[0])??0,((f=m.texture)==null?void 0:f[1])??0),m.textureLimit?a.push(m.textureLimit[0],m.textureLimit[1],m.textureLimit[2],m.textureLimit[3]):a.push(0,0,0,0);const w=m.color??[1,1,1];s.push(w[0],w[1],w[2]);const v=m.blockPos??m.pos;o.push(v.x,v.y,v.z),c.push(m.emissive??0)}l.push(u,u+1,u+2,u,u+2,u+3),u+=4}e.setAttribute("position",new Nt(t,3)),e.setAttribute("normal",new Nt(i,3)),e.setAttribute("uv",new Nt(r,2)),e.setAttribute("texLimit",new Nt(a,4)),e.setAttribute("color",new Nt(s,3)),e.setAttribute("blockPos",new Nt(o,3)),e.setAttribute("emissive",new Nt(c,1));const h=t.length/3>65536?new Uint32Array(l):new Uint16Array(l);return e.setIndex(new Ln(h,1)),e.computeBoundingSphere(),e}function Tl(n){const e=new Xn;if(n.lines.length===0)return e;const t=[],i=[];for(const r of n.lines)r.vertices().forEach(s=>{t.push(s.pos.x,s.pos.y,s.pos.z);const a=s.color??[1,1,1];i.push(a[0],a[1],a[2])});return e.setAttribute("position",new Nt(t,3)),e.setAttribute("color",new Nt(i,3)),e.computeBoundingSphere(),e}let RS=class{constructor(e,t,i,r){L(this,"structure");L(this,"resources");L(this,"renderer");L(this,"structureScene");L(this,"skyScene");L(this,"overlayScene");L(this,"camera");L(this,"skyCamera");L(this,"atlasTexture");L(this,"opaqueMaterial");L(this,"transparentMaterial");L(this,"coloredMaterial");L(this,"lineMaterial");L(this,"skyMaterial");L(this,"shadowDepthMaterial");L(this,"shadowMap",null);L(this,"emissiveLightDataTex",null);L(this,"emissiveLightColorTex",null);L(this,"shadowCamera");L(this,"sunlight");L(this,"skyMesh");L(this,"sunDisc");L(this,"shadowDirty",!0);L(this,"emissiveSelectionDirty",!0);L(this,"lastEmissiveCameraPos",null);L(this,"lastEmissiveLightCount",0);L(this,"sceneTarget",null);L(this,"depthTarget",null);L(this,"bloomBrightTarget",null);L(this,"bloomBlurTarget1",null);L(this,"bloomBlurTarget2",null);L(this,"godRaysTarget",null);L(this,"aoTarget",null);L(this,"postProcessQuad",null);L(this,"ssaoMaterial",null);L(this,"bloomBrightMaterial",null);L(this,"bloomBlurMaterial",null);L(this,"godRaysMaterial",null);L(this,"compositeMaterial",null);L(this,"chunkBuilder");L(this,"asyncBuild");L(this,"asyncChunkBuildTimeMs");L(this,"buildPromise",null);L(this,"buildToken",0);L(this,"chunkMeshes",[]);L(this,"grid");L(this,"invisibleBlocks");L(this,"outline");L(this,"chunkSize");L(this,"targetCenter");L(this,"cameraPosition");L(this,"cameraTarget");L(this,"cameraUp");L(this,"cameraViewMatrix");L(this,"useInvisibleBlocks");L(this,"drawDistance");L(this,"pixelSize");L(this,"maxEmissiveTextureSize");L(this,"debug");var o,c;this.structure=t,this.resources=i,this.renderer=new Gv({canvas:e,alpha:!1,antialias:(r==null?void 0:r.antialias)??!0,preserveDrawingBuffer:(r==null?void 0:r.preserveDrawingBuffer)??!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.maxEmissiveTextureSize=this.renderer.capabilities.maxTextureSize??8192,this.structureScene=new il,this.skyScene=new il,this.overlayScene=new il,this.camera=new ln(70,(e.clientWidth||1)/(e.clientHeight||1),.1,2e3),this.skyCamera=new qa(-1,1,1,-1,0,1),this.shadowCamera=new qa(-50,50,50,-50,.1,200);const s=this.renderer.getContext(),a=(r==null?void 0:r.chunkSize)??16;if(this.chunkSize=typeof a=="number"?[a,a,a]:a,this.targetCenter=Mn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.cameraPosition=so(),this.cameraTarget=gi(this.targetCenter),this.cameraUp=Mn(0,1,0),this.cameraViewMatrix=st(),this.resetCamera(),this.asyncBuild=(r==null?void 0:r.asyncBuild)??!1,this.asyncChunkBuildTimeMs=(r==null?void 0:r.asyncChunkBuildTimeMs)??8,this.chunkBuilder=new As(s,t,i,a,!this.asyncBuild),this.useInvisibleBlocks=(r==null?void 0:r.useInvisibleBlockBuffer)??!1,this.drawDistance=r==null?void 0:r.drawDistance,this.sunlight=Hh(r==null?void 0:r.sunlight),this.debug=(r==null?void 0:r.debug)??!1,this.atlasTexture=this.createAtlasTexture(this.resources.getTextureAtlas()),this.pixelSize=((c=(o=this.resources).getPixelSize)==null?void 0:c.call(o))??0,this.emissiveLightDataTex=Na(new Float32Array([0,0,0,0]),1),this.emissiveLightColorTex=Na(new Float32Array([0,0,0,0]),1),this.shadowDepthMaterial=this.createShadowDepthMaterial(),this.initShadowMap(),this.opaqueMaterial=this.createStructureMaterial(!1),this.transparentMaterial=this.createStructureMaterial(!0),this.coloredMaterial=this.createColoredMaterial(),this.lineMaterial=new Ef({vertexColors:!0,transparent:!0,depthTest:!0}),this.skyMaterial=this.createSkyMaterial(),this.debug){const l=this.resources.getTextureAtlas(),h=Array.from(l.data.slice(3,3+400*4)).filter((d,f)=>f%4===0).filter(d=>d!==0).length;console.log("[lodestone] atlas info",{width:l.width,height:l.height,alphaSampleNonZero:h})}this.asyncBuild?this.rebuildChunksAsync():this.rebuildChunkObjects(),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc),this.skyMesh=this.createSkyMesh(),this.skyMesh&&this.skyScene.add(this.skyMesh),this.initPostProcessing(e.width||800,e.height||600)}setViewport(e,t,i,r,s=1){this.renderer.setPixelRatio(s),this.renderer.setSize(i,r,!1),this.renderer.setScissorTest(!1),this.renderer.setViewport(e,t,i,r),this.camera.aspect=i/Math.max(r,1),this.camera.updateProjectionMatrix();const a=this.renderer.getDrawingBufferSize(new Re);this.resizePostProcessTargets(Math.max(1,Math.floor(a.x)),Math.max(1,Math.floor(a.y)))}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}setCamera(e){return e.position&&La(this.cameraPosition,e.position),e.target&&La(this.cameraTarget,e.target),e.up&&La(this.cameraUp,e.up),e.fov!==void 0&&this.setFOV(e.fov),this.updateStoredViewMatrix(),this}getCamera(){return{position:gi(this.cameraPosition),target:gi(this.cameraTarget),up:gi(this.cameraUp),fov:this.camera.fov}}getViewMatrix(){return eS(this.cameraViewMatrix)}lookAt(e,t,i){return this.setCamera({position:e,target:t,up:i})}setCameraPosition(e){return this.setCamera({position:e})}setCameraTarget(e){return this.setCamera({target:e})}resetCamera(){const e=this.structure.getSize(),t=Math.max(8,Math.max(e[0],e[1],e[2])*1.8);return this.setCamera({position:Mn(this.targetCenter[0],this.targetCenter[1]+t*.35,this.targetCenter[2]+t),target:this.targetCenter,up:Mn(0,1,0)})}setStructure(e){this.structure=e,this.targetCenter=Mn((this.structure.getSize()[0]??0)/2,(this.structure.getSize()[1]??0)/2,(this.structure.getSize()[2]??0)/2),this.setCameraTarget(this.targetCenter),this.asyncBuild?(this.chunkBuilder.setStructure(e,{rebuild:!1}),this.rebuildOverlay(),this.rebuildChunksAsync()):(this.chunkBuilder.setStructure(e),this.rebuildChunkObjects(),this.rebuildOverlay()),this.shadowDirty=!0}updateStructureBuffers(e){if(this.asyncBuild){this.updateStructureBuffersAsync(e);return}this.chunkBuilder.updateStructureBuffers(e),this.rebuildChunkObjects(),this.rebuildOverlay(),this.shadowDirty=!0}async updateStructureBuffersAsync(e){this.rebuildOverlay(),await this.rebuildChunksAsync(e)}whenReady(){return this.buildPromise??Promise.resolve()}drawStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.updateSkyUniforms(e),this.renderShadowPass(),!this.renderPostProcessing(e)&&(this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.structureScene.overrideMaterial=null,this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera))}drawColoredStructure(e=this.cameraViewMatrix){this.prepareCamera(e),this.positionSunDisc(e),this.renderer.clear(),this.structureScene.overrideMaterial=this.coloredMaterial,this.renderer.render(this.structureScene,this.camera),this.structureScene.overrideMaterial=null}drawGrid(e=this.cameraViewMatrix){this.grid&&(this.prepareCamera(e),this.positionSunDisc(e),this.setOverlayVisibility({grid:!0,invisible:!1,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawInvisibleBlocks(e=this.cameraViewMatrix){!this.useInvisibleBlocks||!this.invisibleBlocks||(this.prepareCamera(e),this.setOverlayVisibility({grid:!1,invisible:!0,outline:!1}),this.renderer.render(this.overlayScene,this.camera))}drawOutline(e,t){const i=t?e:this.cameraViewMatrix,r=t??e;this.outline||(this.outline=this.createOutline(),this.overlayScene.add(this.outline)),this.outline.position.set(r[0],r[1],r[2]),this.prepareCamera(i),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!0}),this.renderer.render(this.overlayScene,this.camera)}dispose(){var e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m;this.buildToken+=1,this.chunkBuilder.cancelPendingBuilds(),this.chunkMeshes.forEach(p=>{this.structureScene.remove(p),p.geometry.dispose()}),this.chunkMeshes=[],this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose(),this.grid=void 0),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose(),this.invisibleBlocks=void 0),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.skyMesh&&(this.structureScene.remove(this.skyMesh),this.skyMesh.geometry.dispose(),this.skyMesh=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),(e=this.sunDisc.material)==null||e.dispose(),this.sunDisc=void 0),this.postProcessQuad&&(this.postProcessQuad.geometry.dispose(),this.postProcessQuad=null),this.structureScene.clear(),this.overlayScene.clear(),this.atlasTexture.dispose(),this.opaqueMaterial.dispose(),this.transparentMaterial.dispose(),this.coloredMaterial.dispose(),this.lineMaterial.dispose(),this.skyMaterial.dispose(),this.shadowDepthMaterial.dispose(),(t=this.shadowMap)==null||t.dispose(),(i=this.sceneTarget)==null||i.dispose(),(r=this.depthTarget)==null||r.dispose(),(s=this.bloomBrightTarget)==null||s.dispose(),(a=this.bloomBlurTarget1)==null||a.dispose(),(o=this.bloomBlurTarget2)==null||o.dispose(),(c=this.godRaysTarget)==null||c.dispose(),(l=this.aoTarget)==null||l.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(h=this.bloomBrightMaterial)==null||h.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(f=this.godRaysMaterial)==null||f.dispose(),(g=this.compositeMaterial)==null||g.dispose(),(_=this.emissiveLightDataTex)==null||_.dispose(),(m=this.emissiveLightColorTex)==null||m.dispose(),this.renderer.dispose()}prepareCamera(e){const t=new at().fromArray(e),i=new at().copy(t).invert();this.camera.position.setFromMatrixPosition(i),this.camera.quaternion.setFromRotationMatrix(i),this.camera.updateMatrixWorld(!0);const r=this.getCameraPosition(e)??Mn(0,0,10);La(this.cameraPosition,r),this.camera.updateMatrixWorld(!0),this.drawDistance?this.applyDrawDistance(r,this.drawDistance):this.chunkMeshes.forEach(s=>s.visible=!0),this.updateEmissiveLightsForCamera(r)}rebuildChunkObjects(){this.chunkMeshes.forEach(i=>{this.structureScene.remove(i),i.geometry.dispose()}),this.chunkMeshes=[],this.chunkBuilder.getMeshEntries().forEach((i,r)=>{var c,l;if(i.mesh.isEmpty())return;const s=Gh(i.mesh),a=i.transparent?this.transparentMaterial:this.opaqueMaterial,o=new Qt(s,a);o.renderOrder=i.transparent?1:0,o.userData.origin=i.origin,this.structureScene.add(o),this.chunkMeshes.push(o),this.debug&&r===0&&console.log("[lodestone] chunk geometry sample",{vertices:((c=s.getAttribute("position"))==null?void 0:c.count)??0,indices:((l=s.getIndex())==null?void 0:l.count)??0,transparent:i.transparent})});const t=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(t),this.emissiveSelectionDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks",{count:this.chunkMeshes.length})}async rebuildChunksAsync(e){const t=++this.buildToken,i=(async()=>{await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:e,timeSliceMs:this.asyncChunkBuildTimeMs}),t===this.buildToken&&await this.rebuildChunkObjectsAsync(t)})();return this.buildPromise=i,i}async rebuildChunkObjectsAsync(e){var s,a;this.chunkMeshes.forEach(o=>{this.structureScene.remove(o),o.geometry.dispose()}),this.chunkMeshes=[];const t=this.chunkBuilder.getMeshEntries();let i=this.now();for(let o=0;o<t.length;o++){if(e!==this.buildToken)return;const c=t[o];if(c.mesh.isEmpty())continue;const l=Gh(c.mesh),u=c.transparent?this.transparentMaterial:this.opaqueMaterial,h=new Qt(l,u);h.renderOrder=c.transparent?1:0,h.userData.origin=c.origin,this.structureScene.add(h),this.chunkMeshes.push(h),this.debug&&o===0&&console.log("[lodestone] chunk geometry sample",{vertices:((s=l.getAttribute("position"))==null?void 0:s.count)??0,indices:((a=l.getIndex())==null?void 0:a.count)??0,transparent:c.transparent}),!(o&31)&&this.now()-i>=this.asyncChunkBuildTimeMs&&(await this.yieldControl(),i=this.now())}if(e!==this.buildToken)return;const r=this.chunkBuilder.getEmissiveLights();this.updateEmissiveLightUniforms(r),this.emissiveSelectionDirty=!0,this.shadowDirty=!0,this.debug&&console.log("[lodestone] rebuilt chunks (async)",{count:this.chunkMeshes.length})}updateEmissiveLightUniforms(e){var h,d;const t=Math.min(e.length,El),i=this.maxEmissiveTextureSize||8192,r=Math.min(i,Math.max(1,Math.ceil(Math.sqrt(Math.max(1,t))))),s=Math.min(i,Math.max(1,Math.ceil(t/r))),a=r*s,o=Math.min(t,a),c=new Float32Array(r*s*4),l=new Float32Array(r*s*4);for(let f=0;f<o;f++){const g=e[f];c[f*4+0]=g.position[0],c[f*4+1]=g.position[1],c[f*4+2]=g.position[2],c[f*4+3]=g.intensity,l[f*4+0]=g.color[0],l[f*4+1]=g.color[1],l[f*4+2]=g.color[2],l[f*4+3]=1}(h=this.emissiveLightDataTex)==null||h.dispose(),(d=this.emissiveLightColorTex)==null||d.dispose(),this.emissiveLightDataTex=Na(c,r,s),this.emissiveLightColorTex=Na(l,r,s);const u=f=>{const g=f.uniforms;g&&(g.emissiveLightData&&(g.emissiveLightData.value=this.emissiveLightDataTex),g.emissiveLightColors&&(g.emissiveLightColors.value=this.emissiveLightColorTex),g.emissiveLightCount&&(g.emissiveLightCount.value=o),g.emissiveLightTexSize&&g.emissiveLightTexSize.value instanceof Re&&g.emissiveLightTexSize.value.set(r,s))};u(this.opaqueMaterial),u(this.transparentMaterial),this.debug&&o>0&&console.log("[lodestone] emissive lights",{count:o})}updateEmissiveLightsForCamera(e){const t=this.chunkBuilder.getEmissiveLights();if(t.length===0){(this.emissiveSelectionDirty||this.lastEmissiveLightCount!==0)&&(this.updateEmissiveLightUniforms([]),this.lastEmissiveLightCount=0,this.emissiveSelectionDirty=!1),this.lastEmissiveCameraPos=gi(e);return}const i=!this.lastEmissiveCameraPos||this.cameraMovedEnough(e,this.lastEmissiveCameraPos);if(!this.emissiveSelectionDirty&&!i)return;const r=this.drawDistance?Math.pow(this.drawDistance+this.sunlight.emissive.range,2):void 0,s=this.pickNearestEmissiveLights(t,e,El,r);this.updateEmissiveLightUniforms(s),this.lastEmissiveLightCount=s.length,this.emissiveSelectionDirty=!1,this.lastEmissiveCameraPos=gi(e)}cameraMovedEnough(e,t){const i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return i*i+r*r+s*s>=AS}pickNearestEmissiveLights(e,t,i,r){if(e.length<=i&&r===void 0)return e;const s=[];let a=-1,o=-1;for(const c of e){const l=c.position[0]-t[0],u=c.position[1]-t[1],h=c.position[2]-t[2],d=l*l+u*u+h*h;if(!(r!==void 0&&d>r)){if(s.length<i){s.push({light:c,distSq:d}),d>o&&(o=d,a=s.length-1);continue}if(!(d>=o)){s[a]={light:c,distSq:d},o=s[0].distSq,a=0;for(let f=1;f<s.length;f++)s[f].distSq>o&&(o=s[f].distSq,a=f)}}}return s.sort((c,l)=>c.distSq-l.distSq),s.map(c=>c.light)}rebuildOverlay(){this.grid&&(this.overlayScene.remove(this.grid),this.grid.geometry.dispose()),this.grid=this.createGrid(),this.grid&&this.overlayScene.add(this.grid),this.invisibleBlocks&&(this.overlayScene.remove(this.invisibleBlocks),this.invisibleBlocks.geometry.dispose()),this.useInvisibleBlocks&&(this.invisibleBlocks=this.createInvisibleBlocks(),this.invisibleBlocks&&this.overlayScene.add(this.invisibleBlocks)),this.outline&&(this.overlayScene.remove(this.outline),this.outline.geometry.dispose(),this.outline=void 0),this.sunDisc&&(this.overlayScene.remove(this.sunDisc),this.sunDisc.geometry.dispose(),this.sunDisc.material.dispose()),this.sunDisc=this.createSunDisc(),this.sunDisc&&this.overlayScene.add(this.sunDisc)}createStructureMaterial(e){return new al({name:e?"lodestone-structure-transparent":"lodestone-structure-opaque",vertexShader:`
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
			`,uniforms:this.createStructureUniforms(),transparent:e,depthWrite:!e,depthTest:!0,alphaTest:.01,side:gn})}createStructureUniforms(){var i;const e=r=>new Ze(r[0],r[1],r[2]),t=new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]);return t.lengthSq()===0&&t.set(0,1,0),t.normalize(),{atlas:{value:this.atlasTexture},pixelSize:{value:this.pixelSize},sunDirection:{value:t},sunColor:{value:e(this.sunlight.color)},ambientColor:{value:e(this.sunlight.ambientColor)},fillColor:{value:e(this.sunlight.fillColor)},rimColor:{value:e(this.sunlight.rimColor)},sunIntensity:{value:this.sunlight.intensity},ambientIntensity:{value:this.sunlight.ambientIntensity},fillIntensity:{value:this.sunlight.fillIntensity},rimIntensity:{value:this.sunlight.rimIntensity},horizonFalloff:{value:this.sunlight.horizonFalloff},exposure:{value:this.sunlight.exposure},fogColor:{value:e(this.sunlight.fog.color)},fogDensity:{value:this.sunlight.fog.density},fogHeightFalloff:{value:this.sunlight.fog.heightFalloff},shadowMap:{value:((i=this.shadowMap)==null?void 0:i.texture)??null},shadowMatrix:{value:new at},shadowBias:{value:this.sunlight.shadow.bias},shadowNormalBias:{value:this.sunlight.shadow.normalBias},shadowIntensity:{value:this.sunlight.shadow.intensity},shadowSoftness:{value:this.sunlight.shadow.softness},shadowMapSize:{value:new Re(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize)},shadowEnabled:{value:this.sunlight.shadow.enabled},emissiveLightData:{value:this.emissiveLightDataTex},emissiveLightColors:{value:this.emissiveLightColorTex},emissiveLightCount:{value:0},emissiveLightTexSize:{value:new Re(1,1)},emissiveRange:{value:this.sunlight.emissive.range},emissiveGlobalIntensity:{value:this.sunlight.emissive.intensity},emissiveTint:{value:e(this.sunlight.emissive.tint)}}}setSunlight(e){this.sunlight=Hh(e),this.syncShadowResources(),this.syncPostProcessingResources(),this.applySunlightUniforms(this.opaqueMaterial),this.applySunlightUniforms(this.transparentMaterial),this.applySkyUniforms(),this.applySunDiscUniforms(),this.applyPostProcessUniforms(),this.shadowDirty=!0,this.emissiveSelectionDirty=!0}syncShadowResources(){var e,t;if(this.sunlight.shadow.enabled){const i=this.sunlight.shadow.mapSize;(!this.shadowMap||this.shadowMap.width!==i||this.shadowMap.height!==i)&&((e=this.shadowMap)==null||e.dispose(),this.shadowMap=null,this.initShadowMap(),this.shadowDirty=!0);return}(t=this.shadowMap)==null||t.dispose(),this.shadowMap=null,this.shadowDirty=!0}syncPostProcessingResources(){var t,i,r,s,a,o,c,l,u,h,d,f,g;if(!this.sunlight.postProcess.enabled||this.sceneTarget&&this.postProcessQuad&&this.ssaoMaterial&&this.bloomBrightMaterial&&this.bloomBlurMaterial&&this.godRaysMaterial&&this.compositeMaterial)return;(t=this.sceneTarget)==null||t.dispose(),(i=this.depthTarget)==null||i.dispose(),(r=this.bloomBrightTarget)==null||r.dispose(),(s=this.bloomBlurTarget1)==null||s.dispose(),(a=this.bloomBlurTarget2)==null||a.dispose(),(o=this.godRaysTarget)==null||o.dispose(),(c=this.aoTarget)==null||c.dispose(),(l=this.postProcessQuad)==null||l.geometry.dispose(),(u=this.ssaoMaterial)==null||u.dispose(),(h=this.bloomBrightMaterial)==null||h.dispose(),(d=this.bloomBlurMaterial)==null||d.dispose(),(f=this.godRaysMaterial)==null||f.dispose(),(g=this.compositeMaterial)==null||g.dispose(),this.sceneTarget=null,this.depthTarget=null,this.bloomBrightTarget=null,this.bloomBlurTarget1=null,this.bloomBlurTarget2=null,this.godRaysTarget=null,this.aoTarget=null,this.postProcessQuad=null,this.ssaoMaterial=null,this.bloomBrightMaterial=null,this.bloomBlurMaterial=null,this.godRaysMaterial=null,this.compositeMaterial=null;const e=this.renderer.getSize(new Re);this.initPostProcessing(Math.max(1,e.x),Math.max(1,e.y))}applyPostProcessUniforms(){var a,o,c,l;const e=this.sunlight.postProcess,t=(a=this.ssaoMaterial)==null?void 0:a.uniforms;t!=null&&t.aoRadius&&(t.aoRadius.value=e.ao.radius),t!=null&&t.aoIntensity&&(t.aoIntensity.value=e.ao.intensity);const i=(o=this.bloomBrightMaterial)==null?void 0:o.uniforms;i!=null&&i.threshold&&(i.threshold.value=e.bloom.threshold);const r=(c=this.compositeMaterial)==null?void 0:c.uniforms;r!=null&&r.bloomIntensity&&(r.bloomIntensity.value=e.bloom.intensity);const s=(l=this.godRaysMaterial)==null?void 0:l.uniforms;s!=null&&s.intensity&&(s.intensity.value=e.godRays.intensity),s!=null&&s.decay&&(s.decay.value=e.godRays.decay),s!=null&&s.density&&(s.density.value=e.godRays.density),s!=null&&s.numSamples&&(s.numSamples.value=e.godRays.samples)}applySunDiscUniforms(){if(!this.sunDisc)return;const t=this.sunDisc.material.uniforms;t&&(t.coreColor.value.setRGB(this.sunlight.disc.coreColor[0],this.sunlight.disc.coreColor[1],this.sunlight.disc.coreColor[2]),t.glowColor.value.setRGB(this.sunlight.disc.glowColor[0],this.sunlight.disc.glowColor[1],this.sunlight.disc.glowColor[2]),t.coreIntensity.value=this.sunlight.disc.coreIntensity,t.glowIntensity.value=this.sunlight.disc.glowIntensity,t.softness.value=this.sunlight.disc.softness)}applySkyUniforms(){var r;const e=this.skyMaterial.uniforms;if(!e)return;const t=(s,a)=>{const o=e[s];(o==null?void 0:o.value)instanceof Ze&&o.value.setRGB(a[0],a[1],a[2])},i=(r=e.sunDirection)==null?void 0:r.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),t("zenithColor",this.sunlight.sky.zenithColor),t("horizonColor",this.sunlight.sky.horizonColor),t("groundColor",this.sunlight.sky.groundColor),t("sunGlowColor",this.sunlight.sky.sunGlowColor),e.sunGlowIntensity&&(e.sunGlowIntensity.value=this.sunlight.sky.sunGlowIntensity),e.sunGlowExponent&&(e.sunGlowExponent.value=this.sunlight.sky.sunGlowExponent),e.starsEnabled&&(e.starsEnabled.value=this.sunlight.sky.stars.enabled),e.starsDensity&&(e.starsDensity.value=this.sunlight.sky.stars.density),e.starsBrightness&&(e.starsBrightness.value=this.sunlight.sky.stars.brightness)}applySunlightUniforms(e){var s,a,o;const t=e.uniforms;if(!t)return;const i=(c,l)=>{const u=t[c];(u==null?void 0:u.value)instanceof Ze&&u.value.setRGB(l[0],l[1],l[2])},r=(s=t.sunDirection)==null?void 0:s.value;r&&r.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i("sunColor",this.sunlight.color),i("ambientColor",this.sunlight.ambientColor),i("fillColor",this.sunlight.fillColor),i("rimColor",this.sunlight.rimColor),i("fogColor",this.sunlight.fog.color),t.sunIntensity&&(t.sunIntensity.value=this.sunlight.intensity),t.ambientIntensity&&(t.ambientIntensity.value=this.sunlight.ambientIntensity),t.fillIntensity&&(t.fillIntensity.value=this.sunlight.fillIntensity),t.rimIntensity&&(t.rimIntensity.value=this.sunlight.rimIntensity),t.horizonFalloff&&(t.horizonFalloff.value=this.sunlight.horizonFalloff),t.exposure&&(t.exposure.value=this.sunlight.exposure),t.fogDensity&&(t.fogDensity.value=this.sunlight.fog.density),t.fogHeightFalloff&&(t.fogHeightFalloff.value=this.sunlight.fog.heightFalloff),t.shadowEnabled&&(t.shadowEnabled.value=this.sunlight.shadow.enabled),t.shadowBias&&(t.shadowBias.value=this.sunlight.shadow.bias),t.shadowNormalBias&&(t.shadowNormalBias.value=this.sunlight.shadow.normalBias),t.shadowIntensity&&(t.shadowIntensity.value=this.sunlight.shadow.intensity),t.shadowSoftness&&(t.shadowSoftness.value=this.sunlight.shadow.softness),((a=t.shadowMapSize)==null?void 0:a.value)instanceof Re&&t.shadowMapSize.value.set(this.sunlight.shadow.mapSize,this.sunlight.shadow.mapSize),t.shadowMap&&(t.shadowMap.value=((o=this.shadowMap)==null?void 0:o.texture)??null),t.emissiveRange&&(t.emissiveRange.value=this.sunlight.emissive.range),t.emissiveGlobalIntensity&&(t.emissiveGlobalIntensity.value=this.sunlight.emissive.intensity),i("emissiveTint",this.sunlight.emissive.tint)}createColoredMaterial(){return new al({name:"lodestone-structure-colored",vertexShader:`
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
			`,transparent:!1,depthWrite:!0,depthTest:!0,side:gn})}createGrid(){const[e,t,i]=this.structure.getSize(),r=new ft;r.addLine(0,0,0,e,0,0,[1,0,0]),r.addLine(0,0,0,0,0,i,[0,0,1]);const s=[.8,.8,.8];r.addLine(0,0,0,0,t,0,s),r.addLine(e,0,0,e,t,0,s),r.addLine(0,0,i,0,t,i,s),r.addLine(e,0,i,e,t,i,s),r.addLine(0,t,0,0,t,i,s),r.addLine(e,t,0,e,t,i,s),r.addLine(0,t,0,e,t,0,s),r.addLine(0,t,i,e,t,i,s);const a=128,o=Math.max(1,Math.ceil(e/a)),c=Math.max(1,Math.ceil(i/a));for(let u=o;u<=e;u+=o)r.addLine(u,0,0,u,0,i,s);for(let u=c;u<=i;u+=c)r.addLine(0,0,u,e,0,u,s);const l=Tl(r);return l.attributes.position?new sl(l,this.lineMaterial):void 0}createOutline(){const e=new ft;e.addLineCube(0,0,0,1,1,1,[1,1,1]);const t=Tl(e);return new sl(t,this.lineMaterial)}createInvisibleBlocks(){const e=new ft;if(!this.useInvisibleBlocks)return;const t=this.structure.getSize(),i=t[0]*t[1]*t[2];if(i>2e5){this.debug&&console.warn("[lodestone] Skipping invisible blocks buffer for large structure",{volume:i});return}for(let s=0;s<t[0];s+=1)for(let a=0;a<t[1];a+=1)for(let o=0;o<t[2];o+=1){const c=this.structure.getBlock([s,a,o]);c!==void 0&&(c===null?e.addLineCube(s+.4375,a+.4375,o+.4375,s+.5625,a+.5625,o+.5625,[1,.25,.25]):c.state.is(Ti.AIR)?e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,.5,1]):c.state.is(new Ti("cave_air"))&&e.addLineCube(s+.375,a+.375,o+.375,s+.625,a+.625,o+.625,[.5,1,.5]))}const r=Tl(e);return r.attributes.position?new sl(r,this.lineMaterial):void 0}setOverlayVisibility(e){this.grid&&(this.grid.visible=e.grid),this.invisibleBlocks&&(this.invisibleBlocks.visible=e.invisible),this.outline&&(this.outline.visible=e.outline),this.sunDisc&&(this.sunDisc.visible=e.sunDisc??!1)}createAtlasTexture(e){const t=new bf(e.data,e.width,e.height,Wt);return t.magFilter=vt,t.minFilter=vt,t.wrapS=An,t.wrapT=An,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}getCameraPosition(e){const t=st();return iS(t,e)?Mn(t[12],t[13],t[14]):null}updateStoredViewMatrix(){cS(this.cameraViewMatrix,this.cameraPosition,this.cameraTarget,this.cameraUp)}applyDrawDistance(e,t){const i=t*t;let r=!1;for(const s of this.chunkMeshes){const a=s.userData.origin;if(!a){s.visible||(s.visible=!0,r=!0);continue}const o=[a[0]+this.chunkSize[0]*.5,a[1]+this.chunkSize[1]*.5,a[2]+this.chunkSize[2]*.5],c=o[0]-e[0],l=o[1]-e[1],u=o[2]-e[2],h=c*c+l*l+u*u<=i;s.visible!==h&&(s.visible=h,r=!0)}r&&(this.shadowDirty=!0)}now(){return typeof performance<"u"?performance.now():Date.now()}async yieldControl(){const e=globalThis.requestIdleCallback;if(e){await new Promise(t=>e(t));return}await new Promise(t=>setTimeout(t,0))}positionSunDisc(e){if(!this.sunDisc)return;const t=this.getCameraPosition(e)??Mn(0,0,10),i=gi(this.sunlight.direction);pd(i,i);const r=this.sunlight.disc.distance,s=so();fS(s,t,i,r),this.sunDisc.position.set(s[0],s[1],s[2]),this.sunDisc.scale.setScalar(this.sunlight.disc.size),this.sunDisc.lookAt(t[0],t[1],t[2])}createSunDisc(){const e=new rr(1,1,1,1),t=new Vt({name:"lodestone-sun-disc",transparent:!0,depthWrite:!1,depthTest:!0,side:kn,uniforms:{coreColor:{value:new Ze(...this.sunlight.disc.coreColor)},glowColor:{value:new Ze(...this.sunlight.disc.glowColor)},coreIntensity:{value:this.sunlight.disc.coreIntensity},glowIntensity:{value:this.sunlight.disc.glowIntensity},softness:{value:this.sunlight.disc.softness}},vertexShader:`
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
			`}),i=new Qt(e,t);return i.renderOrder=10,i}createSkyMaterial(){return new Vt({name:"lodestone-sky",transparent:!1,depthWrite:!1,depthTest:!1,side:gn,uniforms:{sunDirection:{value:new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize()},zenithColor:{value:new Ze(...this.sunlight.sky.zenithColor)},horizonColor:{value:new Ze(...this.sunlight.sky.horizonColor)},groundColor:{value:new Ze(...this.sunlight.sky.groundColor)},sunGlowColor:{value:new Ze(...this.sunlight.sky.sunGlowColor)},sunGlowIntensity:{value:this.sunlight.sky.sunGlowIntensity},sunGlowExponent:{value:this.sunlight.sky.sunGlowExponent},invViewMatrix:{value:new at},invProjectionMatrix:{value:new at},starsEnabled:{value:this.sunlight.sky.stars.enabled},starsDensity:{value:this.sunlight.sky.stars.density},starsBrightness:{value:this.sunlight.sky.stars.brightness}},vertexShader:`
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
			`})}createSkyMesh(){const e=new rr(2,2,1,1),t=new Qt(e,this.skyMaterial);return t.frustumCulled=!1,t.renderOrder=-1e3,t}updateSkyUniforms(e){var a,o,c;const t=this.skyMaterial.uniforms,i=(a=t.sunDirection)==null?void 0:a.value;i&&i.set(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize();const r=(o=t.invViewMatrix)==null?void 0:o.value,s=(c=t.invProjectionMatrix)==null?void 0:c.value;if(r){const l=new at;l.fromArray(e),r.copy(l).invert()}s&&s.copy(this.camera.projectionMatrix).invert()}createShadowDepthMaterial(){return new al({name:"lodestone-shadow-depth",vertexShader:`
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
			`,side:gn,depthTest:!0,depthWrite:!0})}initShadowMap(){if(!this.sunlight.shadow.enabled)return;const e=this.sunlight.shadow.mapSize;this.shadowMap=new Cn(e,e,{minFilter:vt,magFilter:vt,format:Wt,type:Rn})}updateShadowCamera(){const e=this.sunlight.shadow.frustumSize,t=e/2,i=new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),r=new H(this.targetCenter[0],this.targetCenter[1],this.targetCenter[2]),s=r.clone().add(i.clone().multiplyScalar(e));this.shadowCamera.left=-t,this.shadowCamera.right=t,this.shadowCamera.top=t,this.shadowCamera.bottom=-t,this.shadowCamera.near=.1,this.shadowCamera.far=e*2,this.shadowCamera.position.copy(s),this.shadowCamera.lookAt(r),this.shadowCamera.updateMatrixWorld(!0),this.shadowCamera.updateProjectionMatrix()}renderShadowPass(){if(!this.sunlight.shadow.enabled||!this.shadowMap||!this.shadowDirty)return;this.updateShadowCamera();const e=new at;e.multiplyMatrices(this.shadowCamera.projectionMatrix,this.shadowCamera.matrixWorldInverse);const t=r=>{var a;const s=r.uniforms;s.shadowMatrix&&s.shadowMatrix.value.copy(e),s.shadowMap&&(s.shadowMap.value=((a=this.shadowMap)==null?void 0:a.texture)??null)};t(this.opaqueMaterial),t(this.transparentMaterial);const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.shadowMap),this.renderer.setClearColor(16777215,1),this.renderer.clear(),this.structureScene.overrideMaterial=this.shadowDepthMaterial,this.renderer.render(this.structureScene,this.shadowCamera),this.structureScene.overrideMaterial=null,this.renderer.setRenderTarget(i),this.renderer.setClearColor(0,1),this.shadowDirty=!1}initPostProcessing(e,t){if(!this.sunlight.postProcess.enabled)return;const i=(s,a,o=!1)=>new Cn(s,a,{minFilter:Yt,magFilter:Yt,format:Wt,type:Jr,depthBuffer:o});this.sceneTarget=new Cn(e,t,{minFilter:Yt,magFilter:Yt,format:Wt,type:Jr,depthBuffer:!0}),this.sceneTarget.depthTexture=new $a(e,t),this.sceneTarget.depthTexture.format=Ci,this.sceneTarget.depthTexture.type=Oi,this.depthTarget=new Cn(e,t,{minFilter:vt,magFilter:vt,format:Wt,type:Rn,depthBuffer:!0}),this.aoTarget=i(e,t),this.bloomBrightTarget=i(e/2,t/2),this.bloomBlurTarget1=i(e/2,t/2),this.bloomBlurTarget2=i(e/2,t/2),this.godRaysTarget=i(e/2,t/2);const r=new rr(2,2);this.postProcessQuad=new Qt(r),this.postProcessQuad.frustumCulled=!1,this.ssaoMaterial=this.createSSAOMaterial(),this.bloomBrightMaterial=this.createBloomBrightMaterial(),this.bloomBlurMaterial=this.createBloomBlurMaterial(),this.godRaysMaterial=this.createGodRaysMaterial(),this.compositeMaterial=this.createCompositeMaterial()}resizePostProcessTargets(e,t){var i,r,s,a,o,c,l,u;this.sunlight.postProcess.enabled&&(e<=0||t<=0||((i=this.sceneTarget)==null||i.setSize(e,t),this.sceneTarget&&((r=this.sceneTarget.depthTexture)==null||r.dispose(),this.sceneTarget.depthTexture=new $a(e,t),this.sceneTarget.depthTexture.format=Ci,this.sceneTarget.depthTexture.type=Oi),(s=this.depthTarget)==null||s.setSize(e,t),(a=this.aoTarget)==null||a.setSize(e,t),(o=this.bloomBrightTarget)==null||o.setSize(Math.max(1,e/2),Math.max(1,t/2)),(c=this.bloomBlurTarget1)==null||c.setSize(Math.max(1,e/2),Math.max(1,t/2)),(l=this.bloomBlurTarget2)==null||l.setSize(Math.max(1,e/2),Math.max(1,t/2)),(u=this.godRaysTarget)==null||u.setSize(Math.max(1,e/2),Math.max(1,t/2))))}createSSAOMaterial(){return new Vt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Re},cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},aoRadius:{value:this.sunlight.postProcess.ao.radius},aoIntensity:{value:this.sunlight.postProcess.ao.intensity}},vertexShader:`
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
			`})}getSunScreenPosition(e){const t=new H(this.sunlight.direction[0],this.sunlight.direction[1],this.sunlight.direction[2]).normalize(),i=this.getCameraPosition(e)??Mn(0,0,10),r=new H(i[0],i[1],i[2]).add(t.multiplyScalar(100));return r.project(this.camera),new Re((r.x+1)*.5,(r.y+1)*.5)}renderPostProcessing(e){var o;if(!this.sunlight.postProcess.enabled||!this.sceneTarget||!this.postProcessQuad)return!1;const t=this.sunlight.postProcess;if(!(t.ao.enabled||t.bloom.enabled||t.godRays.enabled))return!1;const r=this.sceneTarget.width,s=this.sceneTarget.height;this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(this.skyScene,this.skyCamera),this.renderer.render(this.structureScene,this.camera),this.setOverlayVisibility({grid:!1,invisible:!1,outline:!1,sunDisc:!0}),this.renderer.render(this.overlayScene,this.camera);let a=this.sceneTarget.texture;if(t.ao.enabled&&this.ssaoMaterial&&this.aoTarget&&(this.ssaoMaterial.uniforms.tDiffuse.value=a,this.ssaoMaterial.uniforms.tDepth.value=this.sceneTarget.depthTexture,this.ssaoMaterial.uniforms.resolution.value.set(r,s),this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.postProcessQuad.material=this.ssaoMaterial,this.renderer.setRenderTarget(this.aoTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.aoTarget.texture),t.bloom.enabled&&this.bloomBrightMaterial&&this.bloomBrightTarget&&this.bloomBlurTarget1&&this.bloomBlurTarget2&&this.bloomBlurMaterial&&(this.bloomBrightMaterial.uniforms.tDiffuse.value=a,this.postProcessQuad.material=this.bloomBrightMaterial,this.renderer.setRenderTarget(this.bloomBrightTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.bloomBlurMaterial.uniforms.direction.value.set(1,0),this.bloomBlurMaterial.uniforms.resolution.value.set(r/2,s/2),this.postProcessQuad.material=this.bloomBlurMaterial,this.renderer.setRenderTarget(this.bloomBlurTarget1),this.renderer.render(this.postProcessQuad,this.skyCamera),this.bloomBlurMaterial.uniforms.tDiffuse.value=this.bloomBlurTarget1.texture,this.bloomBlurMaterial.uniforms.direction.value.set(0,1),this.renderer.setRenderTarget(this.bloomBlurTarget2),this.renderer.render(this.postProcessQuad,this.skyCamera)),t.godRays.enabled&&this.godRaysMaterial&&this.godRaysTarget&&this.bloomBrightTarget){const c=this.getSunScreenPosition(e);this.godRaysMaterial.uniforms.tDiffuse.value=this.bloomBrightTarget.texture,this.godRaysMaterial.uniforms.tScene.value=a,this.godRaysMaterial.uniforms.sunPosition.value.copy(c),this.postProcessQuad.material=this.godRaysMaterial,this.renderer.setRenderTarget(this.godRaysTarget),this.renderer.render(this.postProcessQuad,this.skyCamera),a=this.godRaysTarget.texture}return this.compositeMaterial&&(this.compositeMaterial.uniforms.tScene.value=a,this.compositeMaterial.uniforms.tBloom.value=((o=this.bloomBlurTarget2)==null?void 0:o.texture)??null,this.postProcessQuad.material=this.compositeMaterial,this.renderer.setRenderTarget(null),this.renderer.render(this.postProcessQuad,this.skyCamera)),!0}};const CS=Object.freeze(Object.defineProperty({__proto__:null,BlockColors:or,BlockDefinition:vo,BlockModel:nt,get BlockPos(){return Rt},BlockState:Ti,ChunkBuilder:As,get ChunkPos(){return Xl},ChunkSection:Wl,get Color(){return qe},get Cull(){return xt},get Direction(){return Ke},EFFECT_COLORS:hd,get Holder(){return io},Identifier:J,get ItemModel(){return Kl},ItemRenderer:xo,ItemStack:ii,get ItemTint(){return ao},get Json(){return Q},Line:Bs,Mesh:ft,get MobEffectInstance(){return no},NbtAbstractList:Js,NbtByte:Di,NbtByteArray:Ii,get NbtChunk(){return si},NbtCompound:At,NbtDouble:Fi,NbtEnd:eo,NbtFile:Wn,NbtFloat:sr,NbtInt:_n,NbtIntArray:Ui,NbtList:jt,NbtLong:ns,NbtLongArray:Ni,get NbtRegion(){return Bi},NbtShort:ar,NbtString:Vn,NbtTag:rt,get NbtType(){return he},POTION_EFFECTS:fd,PalettedContainer:to,get PotionContents(){return Os},Quad:Qs,RawDataInput:Af,RawDataOutput:Rf,Registry:ro,Renderer:yd,get Rotation(){return Yr},ShaderProgram:xd,get SpecialRenderers(){return lt},StringReader:$t,Structure:Jy,TextureAtlas:jr,ThreeStructureRenderer:RS,Vector:St,Vertex:Pn,clamp:bi,createResourcesFromPack:vd,getBundledDefaultPackUrls:_d,getDefaultPackUrls:mc,isPowerOfTwo:Yl,loadDefaultPackResources:bS,upperPowerOfTwo:dc},Symbol.toStringTag,{value:"Module"})),{Structure:yo,ThreeStructureRenderer:So,loadDefaultPackResources:PS,createResourcesFromPack:LS,BlockState:Vh}=CS;let zs,wt,En,Ut,ht,Ce,oo=null,lr=null,lo="",Vr=null,vi,Hs=null,Tn=[0,0,0],Jl=10,Rs=null;yo.prototype.ensurePlacedCaches=function(){if(this.placedBlocksGrid)return;const n=this.size[0],e=this.size[1],t=this.size[2],i=n*e*t,r=new Uint16Array(i);r.fill(65535);const s=e*t;this.placedBlockObjectMap=new Map,this.placedBlockIndexMap=new Map;for(let a=0;a<this.blocks.length;a++){const o=this.blocks[a],c=o.pos[0]*s+o.pos[1]*t+o.pos[2];r[c]=o.state,this.placedBlockIndexMap.set(c,a)}this.placedBlocksGrid=r};yo.prototype.getBlock=function(n){if(!this.isInside(n))return null;this.ensurePlacedCaches(),this.size[0];const e=this.size[1],t=this.size[2],i=n[0]*(e*t)+n[1]*t+n[2],r=this.placedBlocksGrid[i];if(r===65535)return null;let s=this.placedBlockObjectMap.get(i);if(!s){const a=this.placedBlockIndexMap.get(i),o=a!==void 0?this.blocks[a]:null;s={pos:[n[0],n[1],n[2]],state:this.palette[r],nbt:o==null?void 0:o.nbt},this.placedBlockObjectMap.set(i,s)}return s};yo.prototype.getBlocks=function(){if(this.ensurePlacedCaches(),this.placedBlocksCache&&this.placedBlocksCache.length>0)return this.placedBlocksCache;this.placedBlocksCache=[];for(let n=0;n<this.blocks.length;n++){const e=this.blocks[n],t={pos:[e.pos[0],e.pos[1],e.pos[2]],state:this.palette[e.state],nbt:e.nbt};this.placedBlocksCache.push(t)}return this.placedBlocksCache};nt!=null&&nt.prototype&&(nt.prototype.getElementMesh=function(n,e,t,i){var m,p,w,v,y,P,b,E,U,M,x,R;const r=new ft,[s,a,o]=n.from,[c,l,u]=n.to,h=e.getTextureAtlas?e.getTextureAtlas():null,d=(h==null?void 0:h.width)||2048,f=(h==null?void 0:h.height)||2048,g={0:[0,1,0,3,2,3,2,1],90:[2,1,0,1,0,3,2,3],180:[2,3,2,1,0,1,0,3],270:[0,3,2,3,2,1,0,1]},_=(N,D,F)=>{var Ie,Le,O,fe;const C=Qs.fromPoints(new St(F[0],F[1],F[2]),new St(F[3],F[4],F[5]),new St(F[6],F[7],F[8]),new St(F[9],F[10],F[11])),k=i?i(N.tintindex):void 0;k&&C.setColor(k);const V=this.getTexture(N.texture),[G,K,te,le]=e.getTextureUV(V);let ye=(te-G)/16,Pe=(le-K)/16;const $=Math.round((te-G)*d),ne=Math.round((le-K)*f);$>0&&ne>0&&($!==16||ne!==16)&&(ye=1/d,Pe=1/f);const oe=[(((Ie=N.uv)==null?void 0:Ie[0])??D[0])*ye,(((Le=N.uv)==null?void 0:Le[1])??D[1])*Pe,(((O=N.uv)==null?void 0:O[2])??D[2])*ye,(((fe=N.uv)==null?void 0:fe[3])??D[3])*Pe],ae=g[N.rotation??0]||g[0];C.setTexture([G+oe[ae[0]],K+oe[ae[1]],G+oe[ae[2]],K+oe[ae[3]],G+oe[ae[4]],K+oe[ae[5]],G+oe[ae[6]],K+oe[ae[7]]],[G+Math.min(oe[0],oe[2]),K+Math.min(oe[1],oe[3]),G+Math.max(oe[0],oe[2]),K+Math.max(oe[1],oe[3])]),r.quads.push(C)};if((p=(m=n.faces)==null?void 0:m.up)!=null&&p.texture&&(!n.faces.up.cullface||!t[n.faces.up.cullface])&&_(n.faces.up,[s,16-u,c,16-o],[s,l,u,c,l,u,c,l,o,s,l,o]),(v=(w=n.faces)==null?void 0:w.down)!=null&&v.texture&&(!n.faces.down.cullface||!t[n.faces.down.cullface])&&_(n.faces.down,[16-u,16-c,16-o,16-s],[s,a,o,c,a,o,c,a,u,s,a,u]),(P=(y=n.faces)==null?void 0:y.south)!=null&&P.texture&&(!n.faces.south.cullface||!t[n.faces.south.cullface])&&_(n.faces.south,[s,16-l,c,16-a],[s,a,u,c,a,u,c,l,u,s,l,u]),(E=(b=n.faces)==null?void 0:b.north)!=null&&E.texture&&(!n.faces.north.cullface||!t[n.faces.north.cullface])&&_(n.faces.north,[16-c,16-l,16-s,16-a],[c,a,o,s,a,o,s,l,o,c,l,o]),(M=(U=n.faces)==null?void 0:U.east)!=null&&M.texture&&(!n.faces.east.cullface||!t[n.faces.east.cullface])&&_(n.faces.east,[16-u,16-l,16-o,16-a],[c,a,u,c,a,o,c,l,o,c,l,u]),(R=(x=n.faces)==null?void 0:x.west)!=null&&R.texture&&(!n.faces.west.cullface||!t[n.faces.west.cullface])&&_(n.faces.west,[o,16-l,u,16-a],[s,a,o,s,a,u,s,l,u,s,l,o]),n.rotation){const N=st();He(N,N,[n.rotation.origin[0],n.rotation.origin[1],n.rotation.origin[2]]);const D=n.rotation.angle*Math.PI/180;n.rotation.axis==="x"?is(N,N,D):n.rotation.axis==="y"?kt(N,N,D):n.rotation.axis==="z"&&pc(N,N,D),He(N,N,[-n.rotation.origin[0],-n.rotation.origin[1],-n.rotation.origin[2]]),r.transform(N)}return r});if(lt!=null&&lt.getBlockMesh){const n=lt.getBlockMesh;lt.getBlockMesh=function(e,t,i,r){var a;const s=e.getName().toString();if(s==="minecraft:chest"||s==="minecraft:trapped_chest"){let o="single";if(typeof e.getProperties=="function"){const c=e.getProperties();c&&c.type&&(o=c.type)}else e.properties&&(o=e.properties.type||"single");if(o==="left"||o==="right"){const c=new ft;if(e.isWaterlogged&&e.isWaterlogged()){const l=(a=lt.liquidRenderer)==null?void 0:a.call(lt,"water",0,i,r,0);l&&c.merge(l)}return c}}return n.call(this,e,t,i,r)}}var qh;if((qh=nt==null?void 0:nt.prototype)!=null&&qh.flatten){const n=nt.prototype.flatten;nt.prototype.flatten=function(e){if(this.parent){const t=this.parent.toString();if(t==="builtin/entity"||t==="minecraft:builtin/entity"||t==="builtin/generated"||t==="minecraft:builtin/generated"){this.parent=void 0;return}}return n.call(this,e)}}const DS=["chest","sign","frame","stair","slab","glass","door","trapdoor","fence","wall","gate","lantern","torch","chain","ladder","bars","pane","carpet","flower","tulip","rose","orchid","dandelion","poppy","bluet","lily","sunflower","lilac","peony","bush","sapling","mushroom","fungus","roots","sprout","vine","lichen","rail","lever","button","pressure_plate","tripwire","redstone","repeater","comparator","campfire","candle","amethyst","dripstone","coral","pickle","egg","bell","conduit","beacon","brewing","cauldron","hopper","composter","lectern","grindstone","stonecutter","anvil","enchanting","portal","dragon_egg","cake","bed","piston","head","skull","banner","bamboo","sugar_cane","cactus","kelp","seagrass"],Ql=n=>{if(!n)return!1;const e=n.toLowerCase();return DS.some(t=>e.includes(t))};As&&(As.prototype.needsCull=function(n,e){var s;const t=(s=this.structure.getBlock(Rt.towards(n.pos,e)))==null?void 0:s.state;if(!t)return!1;const i=t.getName().toString(),r=this.resources.getBlockFlags(t.getName());return!(!(r!=null&&r.opaque)||Ql(i))},As.prototype.isFullyOccluded=function(n){var i;const e=n.state.getName().toString();if(e==="minecraft:chest"||e==="minecraft:trapped_chest"||e.includes("hanging_sign")||e==="minecraft:item_frame"||e==="minecraft:glow_item_frame")return!1;const t=[Ke.UP,Ke.DOWN,Ke.NORTH,Ke.SOUTH,Ke.EAST,Ke.WEST];for(const r of t){const s=(i=this.structure.getBlock(Rt.towards(n.pos,r)))==null?void 0:i.state;if(!s)return!1;const a=s.getName().toString();if(Ql(a))return!1;const o=this.resources.getBlockFlags(s.getName());if(!(o!=null&&o.opaque))return!1}return!0});So.prototype.applyDrawDistance=function(){if(this.chunkMeshes)for(let n=0;n<this.chunkMeshes.length;n++){const e=this.chunkMeshes[n];e.visible=!0,e.frustumCulled=!1}};const Wh=new at,zr=new at,xs=[0,0,0];So.prototype.prepareCamera=function(n){if(Wh.fromArray(n),zr.copy(Wh).invert(),this.camera.position.setFromMatrixPosition(zr),this.camera.quaternion.setFromRotationMatrix(zr),this.camera.updateMatrixWorld(!0),xs[0]=zr.elements[12],xs[1]=zr.elements[13],xs[2]=zr.elements[14],this.drawDistance)this.applyDrawDistance(xs,this.drawDistance);else if(this.chunkMeshes)for(let e=0;e<this.chunkMeshes.length;e++)this.chunkMeshes[e].visible=!0;typeof this.updateEmissiveLightsForCamera=="function"&&this.updateEmissiveLightsForCamera(xs)};So.prototype.rebuildChunksAsync=async function(n){const e=++this.buildToken;if(window.AndroidHost&&window.AndroidHost.onLoadingProgress("RENDERING_0%"),await this.chunkBuilder.updateStructureBuffersAsync({chunkPositions:n,timeSliceMs:this.asyncChunkBuildTimeMs||12,onProgress:(r,s)=>{if(window.AndroidHost){const a=Math.floor(r/Math.max(1,s)*50);window.AndroidHost.onLoadingProgress(`RENDERING_${a}%`)}}}),e!==this.buildToken)return;const i=this.rebuildChunkObjectsAsync.call(this,e).then(()=>{if(this.chunkMeshes)for(let r=0;r<this.chunkMeshes.length;r++){const s=this.chunkMeshes[r];s.visible=!0,s.frustumCulled=!1}window.AndroidHost&&e===this.buildToken&&window.AndroidHost.onLoadingProgress("RENDERING_100%")});return this.buildPromise=i,i};async function IS(){zs=document.getElementById("renderer-container");const n=window.innerWidth/window.innerHeight;En=new ln(60,n,.5,1e5),Ut=new qa(-10*n,10*n,10,-10,.5,1e5),wt=En,wt.position.set(10,15,20);try{const e=Date.now(),t=window.location.href.split("?")[0].replace("index.html","")+"default-pack/",i=b=>{const E=new Set;return b&&b.split(/\r?\n/).forEach(U=>{const M=U.trim();M&&!M.startsWith("#")&&E.add(M.startsWith("minecraft:")?M:"minecraft:"+M)}),E},[r,s,a,o,c]=await Promise.all([PS({baseUrl:t+`?cb=${e}`}),fetch(t+`block-flags/opaque.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/transparent.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/non-self-culling.txt?cb=${e}`).catch(()=>null),fetch(t+`block-flags/emissive.json?cb=${e}`).catch(()=>null)]);Object.keys(r.assets.textures).forEach(b=>{b.startsWith("minecraft:")||(r.assets.textures["minecraft:"+b]=r.assets.textures[b])}),["acacia","bamboo","birch","cherry","crimson","dark_oak","jungle","mangrove","oak","spruce","warped","pale_oak"].forEach(b=>{delete r.assets.blockstates[`${b}_hanging_sign`],delete r.assets.blockstates[`${b}_wall_hanging_sign`],delete r.assets.models[`block/${b}_hanging_sign`]});const u=(b,E,U)=>({variants:{"type=left,facing=north":{model:E,y:0},"type=left,facing=south":{model:E,y:180},"type=left,facing=west":{model:E,y:270},"type=left,facing=east":{model:E,y:90},"type=right,facing=north":{model:U,y:0},"type=right,facing=south":{model:U,y:180},"type=right,facing=west":{model:U,y:270},"type=right,facing=east":{model:U,y:90},"type=single,facing=north":{model:b,y:0},"type=single,facing=south":{model:b,y:180},"type=single,facing=west":{model:b,y:270},"type=single,facing=east":{model:b,y:90},"facing=north":{model:b,y:0},"facing=south":{model:b,y:180},"facing=west":{model:b,y:270},"facing=east":{model:b,y:90}}});r.assets.blockstates.chest=u("block/chest","block/chest_left","block/chest_right"),r.assets.blockstates.trapped_chest=u("block/chest","block/trapped_chest_left","block/trapped_chest_right");const h=(b,E)=>{const U=b?[1,0,1]:[0,0,1],M=b?[16,10,15]:[15,10,15],x=b?[1,10,1]:[0,10,1],R=b?[16,14,15]:[15,14,15],N=b?[15,7,0]:[0,7,0],D=b?[16,11,2]:[1,11,2],F={north:{uv:[10.75,8.25,14.5,10.75],rotation:180,texture:"#0"},south:{uv:[3.5,8.25,7.25,10.75],rotation:180,texture:"#0"},up:{uv:[11,8.25,7.25,4.75],texture:"#0"},down:{uv:[7.25,8.25,3.5,4.75],texture:"#0"}},C={north:{uv:[10.75,3.75,14.5,4.75],rotation:180,texture:"#0"},south:{uv:[3.5,3.75,7.25,4.75],rotation:180,texture:"#0"},up:{uv:[11,3.5,7.25,0],texture:"#0"},down:{uv:[7.25,3.5,3.5,0],texture:"#0"}},k={north:{uv:[.25,.25,.5,1.25],rotation:180,texture:"#0"},south:{uv:[.75,.25,1,1.25],rotation:180,texture:"#0"},up:{uv:[.5,0,.75,.25],texture:"#0"},down:{uv:[.25,0,.5,.25],texture:"#0"}};return b?(F.west={uv:[7.25,8.25,10.75,10.75],rotation:180,texture:"#0"},C.west={uv:[7.25,3.75,10.75,4.75],rotation:180,texture:"#0"},k.west={uv:[.5,.25,.75,1.25],rotation:180,texture:"#0"}):(F.east={uv:[3.5,8.25,0,10.75],rotation:180,texture:"#0"},C.east={uv:[3.5,3.75,0,4.75],rotation:180,texture:"#0"},k.east={uv:[.25,.25,0,1.25],rotation:180,texture:"#0"}),{textures:{0:E},elements:[{from:U,to:M,faces:F},{from:x,to:R,faces:C},{from:N,to:D,faces:k}]}};r.assets.models["block/chest_left"]=h(!0,"entity/chest/normal_left"),r.assets.models["block/chest_right"]=h(!1,"entity/chest/normal_right"),r.assets.models["block/trapped_chest_left"]=h(!0,"entity/chest/trapped_left"),r.assets.models["block/trapped_chest_right"]=h(!1,"entity/chest/trapped_right");const d=b=>({variants:{"":{model:b},"facing=south":{model:b,y:0},"facing=north":{model:b,y:180},"facing=east":{model:b,y:90},"facing=west":{model:b,y:270},"facing=up":{model:b,x:90},"facing=down":{model:b,x:270},"map=false,facing=south":{model:b,y:0},"map=false,facing=north":{model:b,y:180},"map=false,facing=east":{model:b,y:90},"map=false,facing=west":{model:b,y:270},"map=false,facing=up":{model:b,x:90},"map=false,facing=down":{model:b,x:270},"map=true,facing=south":{model:b,y:0},"map=true,facing=north":{model:b,y:180},"map=true,facing=east":{model:b,y:90},"map=true,facing=west":{model:b,y:270},"map=true,facing=up":{model:b,x:90},"map=true,facing=down":{model:b,x:270}}});r.assets.blockstates.item_frame=d("block/item_frame"),r.assets.blockstates.glow_item_frame=d("block/glow_item_frame");const f=b=>({textures:{wood:b},elements:[{from:[3,3,.1],to:[13,13,.6],faces:{north:{uv:[3,3,13,13],texture:"#wood"},south:{uv:[3,3,13,13],texture:"#wood"}}},{from:[2,2,0],to:[14,3,1],faces:{north:{uv:[2,13,14,14],texture:"#wood"},south:{uv:[2,13,14,14],texture:"#wood"},up:{uv:[2,14,14,16],texture:"#wood"},down:{uv:[2,0,14,2],texture:"#wood"},east:{uv:[14,13,16,14],texture:"#wood"},west:{uv:[0,13,2,14],texture:"#wood"}}},{from:[2,13,0],to:[14,14,1],faces:{north:{uv:[2,2,14,3],texture:"#wood"},south:{uv:[2,2,14,3],texture:"#wood"},up:{uv:[2,14,14,16],texture:"#wood"},down:{uv:[2,0,14,2],texture:"#wood"},east:{uv:[0,2,2,3],texture:"#wood"},west:{uv:[14,2,16,3],texture:"#wood"}}},{from:[2,3,0],to:[3,13,1],faces:{north:{uv:[13,3,14,13],texture:"#wood"},south:{uv:[2,3,3,13],texture:"#wood"},east:{uv:[0,3,2,13],texture:"#wood"},west:{uv:[14,3,16,13],texture:"#wood"}}},{from:[13,3,0],to:[14,13,1],faces:{north:{uv:[2,3,3,13],texture:"#wood"},south:{uv:[13,3,14,13],texture:"#wood"},east:{uv:[0,3,2,13],texture:"#wood"},west:{uv:[14,3,16,13],texture:"#wood"}}}]});r.assets.models["block/item_frame"]=f("block/item_frame"),r.assets.models["block/glow_item_frame"]=f("block/glow_item_frame");const g=s&&s.ok?await s.text():"",_=a&&a.ok?await a.text():"",m=o&&o.ok?await o.text():"",p=c&&c.ok?await c.json():{},w=i(g),v=i(_),y=new Set;w.forEach(b=>{Ql(b)?v.add(b):y.add(b)});const P={opaque:y,transparent:v,nonSelfCulling:i(m),emissive:p};if(Vr=LS({assets:r.assets,atlas:r.atlas,flags:P}),Vr&&Vr.textures){const b=Vr.textures;Object.keys(b).forEach(E=>{E.startsWith("minecraft:")||(b["minecraft:"+E]=b[E])})}window.AndroidHost&&window.AndroidHost.onLoadingProgress("READY")}catch(e){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: Failed to load default resource pack. "+(e==null?void 0:e.message))}}const Xh=st();function gc(){Rs=requestAnimationFrame(gc),ht&&ht.update(),Ce&&wt&&(wt.updateMatrixWorld(!0),tS(Xh,wt.matrixWorldInverse.elements),Ce.drawStructure(Xh))}window.startRenderLoop=function(){Rs===null&&gc()};window.stopRenderLoop=function(){Rs!==null&&(cancelAnimationFrame(Rs),Rs=null)};window.destroyRenderer=function(){var n,e;if(window.stopRenderLoop(),ht&&ht.dispose(),Ce)try{if(Ce.chunkMeshes){for(const t of Ce.chunkMeshes)t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{var r;return(r=i.dispose)==null?void 0:r.call(i)}):(e=(n=t.material).dispose)==null||e.call(n));Ce.chunkMeshes=[]}Ce.renderer&&(Ce.renderer.dispose(),Ce.renderer.forceContextLoss())}catch(t){console.error("Error destroying renderer: ",t)}lr=null,oo=null,Hs=null,zs&&(zs.innerHTML="")};async function US(n,e){const t=n.getCompound("Size"),i=[t.getNumber("x")??0,t.getNumber("y")??0,t.getNumber("z")??0],r=[Math.abs(i[0]),Math.abs(i[1]),Math.abs(i[2])],s=n.getList("BlockStatePalette"),a=[];s.forEach(R=>{if(!R.isCompound())return;let N=R.getString("Name")??"minecraft:air";const D={};if(R.has("Properties")){const F=R.get("Properties");F&&F.isCompound()&&F.forEach((C,k)=>{C&&(k&&k.value!==void 0?typeof k.value=="object"&&Array.isArray(k.value)?D[C]=String(k.value[1]??k.value[0]):D[C]=String(k.value):k&&typeof k.getAsString=="function"?D[C]=k.getAsString():k!=null&&(D[C]=String(k)))})}N.includes("_hanging_sign")&&D.facing&&!D.rotation&&(N=N.replace("_hanging_sign","_wall_hanging_sign")),a.push(new Vh(N,D))});const o=a.map(R=>R.is("minecraft:air")),c=R=>{var ae,Ie,Le,O,fe,Y,Ae,Me;if(!R||!R.isCompound())return;const N=R.getString("id")??R.getString("Id")??"",D=N.startsWith("minecraft:")?N:"minecraft:"+N;if(D!=="minecraft:item_frame"&&D!=="minecraft:glow_item_frame")return;let F=0,C=0,k=0;if(R.has("Pos")){const _e=R.getList("Pos");_e&&_e.length>=3&&(F=((ae=_e.get(0))==null?void 0:ae.value)??_e.get(0)??0,C=((Ie=_e.get(1))==null?void 0:Ie.value)??_e.get(1)??0,k=((Le=_e.get(2))==null?void 0:Le.value)??_e.get(2)??0)}else R.has("TileX")?(F=R.getNumber("TileX")??0,C=R.getNumber("TileY")??0,k=R.getNumber("TileZ")??0):R.has("x")&&(F=R.getNumber("x")??0,C=R.getNumber("y")??0,k=R.getNumber("z")??0);let V="south";if(R.has("Facing")){const _e=((O=R.get("Facing"))==null?void 0:O.value)??R.get("Facing")??0,xe=typeof _e=="number"?_e:parseInt(String(_e),10);xe===0?V="down":xe===1?V="up":xe===2?V="north":xe===3?V="south":xe===4?V="west":xe===5&&(V="east")}else if(R.has("Direction")){const _e=((fe=R.get("Direction"))==null?void 0:fe.value)??R.get("Direction")??0,xe=typeof _e=="number"?_e:parseInt(String(_e),10);xe===0?V="south":xe===1?V="west":xe===2?V="north":xe===3?V="east":xe===4?V="up":xe===5&&(V="down")}let G=F,K=C,te=k;R.has("Pos")&&(V==="south"?te+=.2:V==="north"?te-=.2:V==="west"?G-=.2:V==="east"?G+=.2:V==="up"?K+=.2:V==="down"&&(K-=.2));let le=Math.floor(G),ye=Math.floor(K),Pe=Math.floor(te);if(i[0]<0){const _e=((Y=n.getCompound("Position"))==null?void 0:Y.getNumber("x"))??0;le=le-(_e+i[0]+1)}if(i[1]<0){const _e=((Ae=n.getCompound("Position"))==null?void 0:Ae.getNumber("y"))??0;ye=ye-(_e+i[1]+1)}if(i[2]<0){const _e=((Me=n.getCompound("Position"))==null?void 0:Me.getNumber("z"))??0;Pe=Pe-(_e+i[2]+1)}let $=le,ne=ye,oe=Pe;if(V==="south"?oe+=1:V==="north"?oe-=1:V==="west"?$-=1:V==="east"?$+=1:V==="up"?ne+=1:V==="down"&&(ne-=1),$>=0&&$<r[0]&&ne>=0&&ne<r[1]&&oe>=0&&oe<r[2]){let _e=a.findIndex(xe=>{var Fe;return xe.getName().toString()===D&&((Fe=xe.getProperties())==null?void 0:Fe.facing)===V});_e<0&&(a.push(new Vh(D,{facing:V})),o.push(!1),_e=a.length-1),w.push({pos:[$,ne,oe],state:_e})}};["Entities","PendingBlockEntities","TileEntities","BlockEntities"].forEach(R=>{if(n.has(R)){const N=n.getList(R);N&&typeof N.forEach=="function"&&N.forEach(D=>c(D))}});const l=n.has("BlockStates")?n.getLongArray("BlockStates"):null;let u=0,h=new BigUint64Array(0);if(l){if(typeof l.getItems=="function"){const R=l.getItems();u=R.length,h=new BigUint64Array(u);for(let N=0;N<u;N++){const D=R[N];if(D&&typeof D.getAsPair=="function"){const F=D.getAsPair(),C=BigInt(F[0]>>>0),k=BigInt(F[1]>>>0);h[N]=C<<32n|k}else if(D&&typeof D.value=="bigint")h[N]=BigInt(D.value);else if(Array.isArray(D)){const F=BigInt((D[0]??0)>>>0),C=BigInt((D[1]??0)>>>0);h[N]=F<<32n|C}}}else if(Array.isArray(l.value)){const R=l.value;u=R.length,h=new BigUint64Array(u);for(let N=0;N<u;N++)h[N]=BigInt(R[N])}}const d=Math.max(2,Math.ceil(Math.log2(Math.max(2,a.length)))),f=(1n<<BigInt(d))-1n,g=r[0],_=r[1],m=r[2],p=g*_*m,w=[];let v=g,y=_,P=m,b=0,E=0,U=0,M=!1,x=performance.now();for(let R=0;R<p;R++){let N=0;if(u>0){const D=BigInt(R*d),F=Number(D>>6n),C=D&63n,k=BigInt((R+1)*d-1),V=Number(k>>6n);if(F<u){if(F===V)N=Number(h[F]>>C&f);else if(V<u){const G=64n-C;N=Number((h[F]>>C|h[V]<<G)&f)}}}if(N>=0&&N<a.length&&!o[N]){const D=R%g,F=Math.floor(R/(g*m)),C=Math.floor(R/g)%m;w.push({pos:[D,F,C],state:N}),D<v&&(v=D),F<y&&(y=F),C<P&&(P=C),D>b&&(b=D),F>E&&(E=F),C>U&&(U=C),M=!0}R&255||performance.now()-x>=12&&(e&&e(Math.floor(R/p*100)),await new Promise(F=>requestAnimationFrame(F)),x=performance.now())}if(M){Tn=[(v+b)/2,(y+E)/2,(P+U)/2];const R=b-v+1,N=E-y+1,D=U-P+1;Jl=Math.max(1,.5*Math.sqrt(R*R+N*N+D*D))}else Tn=[g/2,_/2,m/2],Jl=Math.max(1,Math.max(g,_,m)/2);return e&&e(100),new yo(r,a,w)}window.loadLitematic=async function(){try{oo=await(await fetch("./model.litematic")).arrayBuffer(),Hs=Wn.read(new Uint8Array(oo)).root;const t=Hs.getCompound("Regions");let i=[];t&&typeof t.keys=="function"?i=Array.from(t.keys()):t&&(i=Object.keys(t)),i=i.filter(r=>typeof r=="string"&&r!=="properties"&&r!=="constructor"&&r!=="__proto__"),i.length===0&&(i=["Region1"]),lo=i[0],window.AndroidHost&&window.AndroidHost.onRegionsParsed(JSON.stringify(i)),await Sd(lo),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS")}catch(n){window.AndroidHost&&window.AndroidHost.onLoadingProgress("ERROR: "+(n==null?void 0:n.message))}};async function Sd(n){var u,h;if(!oo||!Vr||!Hs)return;if(window.stopRenderLoop(),ht&&ht.dispose(),Ce)try{if(Ce.chunkMeshes){for(const d of Ce.chunkMeshes)d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material.forEach(f=>{var g;return(g=f.dispose)==null?void 0:g.call(f)}):(h=(u=d.material).dispose)==null||h.call(u));Ce.chunkMeshes=[]}Ce.dispose()}catch(d){console.error("Error disposing renderer: ",d)}zs.innerHTML="",vi=document.createElement("canvas"),vi.style.width="100%",vi.style.height="100%",zs.appendChild(vi);const t=Hs.getCompound("Regions").getCompound(n);lr=await US(t,d=>{window.AndroidHost&&window.AndroidHost.onLoadingProgress(`DECODING_${d}%`)}),await NS();const i=lr.getSize(),r=i[0]*i[1]*i[2],s=Math.max(i[0],i[1],i[2]),a=r>1e6||s>128?32:16,o={asyncBuild:!0,asyncChunkBuildTimeMs:12,chunkSize:[a,a,a]};if(Ce=new So(vi,lr,Vr,o),Ce.drawDistance=1e5,Ce.atlasTexture){const d=Ce.atlasTexture;d.minFilter=ys,d.magFilter=vt,Ce.renderer&&(d.anisotropy=Ce.renderer.capabilities.getMaxAnisotropy()),d.needsUpdate=!0}Ce.sunlight&&Ce.sunlight.fog&&(Ce.sunlight.fog.density=0,Ce.sunlight.fog.heightFalloff=0),Ce.setViewport(0,0,window.innerWidth,window.innerHeight),Ce.camera=wt,Ce.skyScene&&Ce.skyScene.clear(),Ce.renderer&&(Ce.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ce.renderer.toneMapping=jh,Ce.renderer.toneMappingExposure=.7),Hr=!0,window.toggleDayNight();const c=window.innerWidth/window.innerHeight;En.far=1e5,En.aspect=c,En.updateProjectionMatrix(),Ut.far=1e5,Ut.updateProjectionMatrix(),ht&&ht.dispose(),ht=new Tf(wt,vi),ht.enableDamping=!0,ht.dampingFactor=.05,ht.target.set(Tn[0],Tn[1],Tn[2]);const l=Math.max(Jl*2.2,10);wt.position.set(Tn[0]+l,Tn[1]+l*.8,Tn[2]+l),ht.update(),window.addEventListener("resize",()=>{const d=window.innerWidth,f=window.innerHeight,g=d/f;if(Ce.setViewport(0,0,d,f),En.aspect=g,En.updateProjectionMatrix(),wt===Ut){const m=wt.position.distanceTo(ht.target)*Math.tan(En.fov*Math.PI/360)*2,p=m*g;Ut.left=-p/2,Ut.right=p/2,Ut.top=m/2,Ut.bottom=-m/2,Ut.far=1e5,Ut.updateProjectionMatrix()}}),gc(),await Ce.whenReady()}async function NS(){if(lr)try{const n=lr,e=n.blocks||[],t=n.palette||[],i={};let r=0;const s=e.length;let a=0,o=performance.now();for(;a<s;){const c=Math.min(a+5e4,s);for(;a<c;a++){const l=e[a];if(l){const u=l.state,h=t[u];if(h){const d=h.getName().toString();i[d]=(i[d]||0)+1,r++}}}a<s&&performance.now()-o>=12&&(await new Promise(l=>requestAnimationFrame(l)),o=performance.now())}window.AndroidHost&&window.AndroidHost.onStatisticsUpdated(r,JSON.stringify(i))}catch(n){console.error("Error collecting block statistics: ",n)}}window.toggleCameraView=function(){if(!ht||!vi)return;const n=ht.target.clone(),e=wt.position.clone(),t=new H().subVectors(e,n),i=Math.max(t.length(),5);if(wt===En){const r=window.innerWidth/window.innerHeight,s=i*Math.tan(En.fov*Math.PI/360)*2,a=s*r;Ut.left=-a/2,Ut.right=a/2,Ut.top=s/2,Ut.bottom=-s/2,Ut.far=1e5,Ut.updateProjectionMatrix(),wt=Ut}else wt=En;wt.position.copy(e),Ce&&(Ce.camera=wt,Ce.sunlight&&Ce.sunlight.postProcess&&(wt===Ut?Ce.sunlight.postProcess.enabled=!1:Ce.sunlight.postProcess.enabled=!0)),ht.dispose(),ht=new Tf(wt,vi),ht.enableDamping=!0,ht.dampingFactor=.05,ht.target.copy(n),ht.update()};let Hr=!1;window.toggleDayNight=function(){if(Hr=!Hr,Ce){if(Ce.renderer&&Ce.renderer.setClearColor(Hr?264208:11062,1),Ce.sunlight){const n=Ce.sunlight;Hr?(n.intensity=.08,n.ambientIntensity=.12,n.emissive&&(n.emissive.intensity=.25),n.direction=[-.2,-.9,-.3],n.light&&(n.light.intensity=.08),n.ambient&&(n.ambient.intensity=.12)):(n.intensity=.5,n.ambientIntensity=.65,n.emissive&&(n.emissive.intensity=.1),n.direction=[.6,1,.8],n.light&&(n.light.intensity=.5),n.ambient&&(n.ambient.intensity=.65))}Ce.opaqueMaterial&&Ce.applySunlightUniforms(Ce.opaqueMaterial),Ce.transparentMaterial&&Ce.applySunlightUniforms(Ce.transparentMaterial)}return Hr};window.resetCamera=function(){if(!lr||!ht||!wt)return;const n=new H().subVectors(wt.position,ht.target);ht.target.set(Tn[0],Tn[1],Tn[2]),wt.position.addVectors(ht.target,n),ht.update()};window.switchRegion=async function(n){n!==lo&&(window.AndroidHost&&window.AndroidHost.onLoadingProgress("DECODING_0%"),lo=n,await Sd(n),window.AndroidHost&&window.AndroidHost.onLoadingProgress("SUCCESS"))};IS();
