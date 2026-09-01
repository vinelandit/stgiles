(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="184",d_={ROTATE:0,DOLLY:1,PAN:2},p_={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,gl=1,vh=2,m_=0,gs=1,_h=2,vr=3,hi=0,$e=1,Vn=2,Xn=0,Qi=1,vl=2,_l=3,xl=4,du=5,g_=6,oi=100,xh=101,yh=102,Mh=103,Sh=104,bh=200,Eh=201,wh=202,Th=203,Es=204,ja=205,pu=206,Ah=207,Ch=208,Rh=209,Ph=210,Ih=211,Lh=212,Dh=213,Nh=214,$a=0,Ka=1,Ja=2,er=3,Za=4,Qa=5,to=6,eo=7,Ns=0,Uh=1,Oh=2,Cn=0,mu=1,gu=2,vu=3,_u=4,xu=5,yu=6,Mu=7,Su=300,bi=301,nr=302,Hs=303,Vs=304,Us=306,wr=1e3,Wn=1001,no=1002,Pe=1003,Fh=1004,Fr=1005,Ve=1006,Gs=1007,yi=1008,v_=1008,en=1009,bu=1010,Eu=1011,Tr=1012,Xo=1013,In=1014,An=1015,Yn=1016,qo=1017,Yo=1018,Ar=1020,wu=35902,Tu=35899,Au=1021,Cu=1022,vn=1023,jn=1026,Mi=1027,Ru=1028,jo=1029,Ei=1030,$o=1031,__=1032,Ko=1033,vs=33776,_s=33777,xs=33778,ys=33779,io=35840,ro=35841,so=35842,ao=35843,oo=36196,lo=37492,co=37496,uo=37488,ho=37489,ws=37490,fo=37491,po=37808,mo=37809,go=37810,vo=37811,_o=37812,xo=37813,yo=37814,Mo=37815,So=37816,bo=37817,Eo=37818,wo=37819,To=37820,Ao=37821,Co=36492,Ro=36494,Po=36495,Io=36283,Lo=36284,Ts=36285,Do=36286,x_=0,y_=1,M_=2,Bh=3200,fi=0,kh=1,li="",qe="srgb",As="srgb-linear",Cs="linear",he="srgb",S_="",b_="rg",E_="ga",w_=0,Di=7680,T_=7681,A_=7682,C_=7683,R_=34055,P_=34056,I_=5386,L_=512,D_=513,N_=514,U_=515,O_=516,F_=517,B_=518,yl=519,zh=512,Hh=513,Vh=514,Jo=515,Gh=516,Wh=517,Zo=518,Xh=519,No=35044,k_=35048,Ml="300 es",_n=2e3,Cr=2001,z_={COMPUTE:"compute",RENDER:"render"},H_={TEXTURE_COMPARE:"depthTextureCompare"};function qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function V_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yh(){const i=Rr("canvas");return i.style.display="block",i}const Sl={};function Rs(...i){const t="THREE."+i.shift();console.log(t,...i)}function Pu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=Pu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=Pu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Uo(...i){const t=i.join(" ");t in Sl||(Sl[t]=!0,Yt(...i))}function G_(){return typeof self<"u"&&typeof self.scheduler<"u"&&typeof self.scheduler.yield<"u"?self.scheduler.yield():new Promise(i=>{requestAnimationFrame(i)})}function jh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const $h={[$a]:Ka,[Ja]:to,[Za]:eo,[er]:Qa,[Ka]:$a,[to]:Ja,[eo]:Za,[Qa]:er};class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const yr=Math.PI/180,ir=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Qo(i,t){return(i%t+t)%t}function Kh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Jh(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function Zh(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function Qh(i,t=1){return t-Math.abs(Qo(i,t*2)-t)}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rf(i,t){return i+Math.random()*(t-i)}function sf(i){return i*(.5-Math.random())}function af(i){i!==void 0&&(bl=i);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(i){return i*yr}function lf(i){return i*ir}function cf(i){return(i&i-1)===0&&i!==0}function uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ff(i,t,e,n,r){const s=Math.cos,a=Math.sin,l=s(e/2),c=a(e/2),h=s((t+n)/2),f=a((t+n)/2),g=s((t-n)/2),d=a((t-n)/2),_=s((n-t)/2),M=a((n-t)/2);switch(r){case"XYX":i.set(l*f,c*g,c*d,l*h);break;case"YZY":i.set(c*d,l*f,c*g,l*h);break;case"ZXZ":i.set(c*g,c*d,l*f,l*h);break;case"XZX":i.set(l*f,c*M,c*_,l*h);break;case"YXY":i.set(c*_,l*f,c*M,l*h);break;case"ZYZ":i.set(c*M,c*_,l*f,l*h);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const W_={DEG2RAD:yr,RAD2DEG:ir,generateUUID:Rn,clamp:Kt,euclideanModulo:Qo,mapLinear:Kh,inverseLerp:Jh,lerp:Mr,damp:Zh,pingpong:Qh,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:rf,randFloatSpread:sf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:uf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:ff,normalize:te,denormalize:Ye},ul=class ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;let Ft=ul;class Ai{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,l){let c=n[r+0],h=n[r+1],f=n[r+2],g=n[r+3],d=s[a+0],_=s[a+1],M=s[a+2],R=s[a+3];if(g!==R||c!==d||h!==_||f!==M){let b=c*d+h*_+f*M+g*R;b<0&&(d=-d,_=-_,M=-M,R=-R,b=-b);let x=1-l;if(b<.9995){const N=Math.acos(b),L=Math.sin(N);x=Math.sin(x*N)/L,l=Math.sin(l*N)/L,c=c*x+d*l,h=h*x+_*l,f=f*x+M*l,g=g*x+R*l}else{c=c*x+d*l,h=h*x+_*l,f=f*x+M*l,g=g*x+R*l;const N=1/Math.sqrt(c*c+h*h+f*f+g*g);c*=N,h*=N,f*=N,g*=N}}t[e]=c,t[e+1]=h,t[e+2]=f,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,r,s,a){const l=n[r],c=n[r+1],h=n[r+2],f=n[r+3],g=s[a],d=s[a+1],_=s[a+2],M=s[a+3];return t[e]=l*M+f*g+c*_-h*d,t[e+1]=c*M+f*d+h*g-l*_,t[e+2]=h*M+f*_+l*d-c*g,t[e+3]=f*M-l*g-c*d-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),f=l(r/2),g=l(s/2),d=c(n/2),_=c(r/2),M=c(s/2);switch(a){case"XYZ":this._x=d*f*g+h*_*M,this._y=h*_*g-d*f*M,this._z=h*f*M+d*_*g,this._w=h*f*g-d*_*M;break;case"YXZ":this._x=d*f*g+h*_*M,this._y=h*_*g-d*f*M,this._z=h*f*M-d*_*g,this._w=h*f*g+d*_*M;break;case"ZXY":this._x=d*f*g-h*_*M,this._y=h*_*g+d*f*M,this._z=h*f*M+d*_*g,this._w=h*f*g-d*_*M;break;case"ZYX":this._x=d*f*g-h*_*M,this._y=h*_*g+d*f*M,this._z=h*f*M-d*_*g,this._w=h*f*g+d*_*M;break;case"YZX":this._x=d*f*g+h*_*M,this._y=h*_*g+d*f*M,this._z=h*f*M-d*_*g,this._w=h*f*g-d*_*M;break;case"XZY":this._x=d*f*g-h*_*M,this._y=h*_*g-d*f*M,this._z=h*f*M+d*_*g,this._w=h*f*g+d*_*M;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],l=e[5],c=e[9],h=e[2],f=e[6],g=e[10],d=n+l+g;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(f-c)*_,this._y=(s-h)*_,this._z=(a-r)*_}else if(n>l&&n>g){const _=2*Math.sqrt(1+n-l-g);this._w=(f-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+h)/_}else if(l>g){const _=2*Math.sqrt(1+l-n-g);this._w=(s-h)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+f)/_}else{const _=2*Math.sqrt(1+g-n-l);this._w=(a-r)/_,this._x=(s+h)/_,this._y=(c+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,l=e._x,c=e._y,h=e._z,f=e._w;return this._x=n*f+a*l+r*h-s*c,this._y=r*f+a*c+s*l-n*h,this._z=s*f+a*h+n*c-r*l,this._w=a*f-n*l-r*c-s*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let c=1-e;if(l<.9995){const h=Math.acos(l),f=Math.sin(h);c=Math.sin(c*h)/f,e=Math.sin(e*h)/f,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*r-l*n),f=2*(l*e-s*r),g=2*(s*n-a*e);return this.x=e+c*h+a*g-l*f,this.y=n+c*f+l*h-s*g,this.z=r+c*g+s*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,l=e.y,c=e.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let nt=hl;const Ws=new nt,El=new Ai,fl=class fl{constructor(t,e,n,r,s,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,c,h)}set(t,e,n,r,s,a,l,c,h){const f=this.elements;return f[0]=t,f[1]=r,f[2]=l,f[3]=e,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],f=n[4],g=n[7],d=n[2],_=n[5],M=n[8],R=r[0],b=r[3],x=r[6],N=r[1],L=r[4],D=r[7],J=r[2],O=r[5],X=r[8];return s[0]=a*R+l*N+c*J,s[3]=a*b+l*L+c*O,s[6]=a*x+l*D+c*X,s[1]=h*R+f*N+g*J,s[4]=h*b+f*L+g*O,s[7]=h*x+f*D+g*X,s[2]=d*R+_*N+M*J,s[5]=d*b+_*L+M*O,s[8]=d*x+_*D+M*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8];return e*a*f-e*l*h-n*s*f+n*l*c+r*s*h-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=f*a-l*h,d=l*c-f*s,_=h*s-a*c,M=e*g+n*d+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=g*R,t[1]=(r*h-f*n)*R,t[2]=(l*n-r*a)*R,t[3]=d*R,t[4]=(f*e-r*c)*R,t[5]=(r*s-l*e)*R,t[6]=_*R,t[7]=(n*c-h*e)*R,t[8]=(a*e-n*s)*R,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,l){const c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-r*h,r*c,-r*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;let Zt=fl;const Xs=new Zt,wl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){const i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===he&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:t,whitePoint:n,transfer:Cs,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:he,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}const ae=df();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class pf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Rr("canvas")),Ni.width=t.width,Ni.height=t.height;const r=Ni.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mf=0;class tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}let gf=0;const Ys=new nt;class Oe extends di{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Wn,r=Wn,s=Ve,a=yi,l=vn,c=en,h=Oe.DEFAULT_ANISOTROPY,f=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Rn(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ys).x}get height(){return this.source.getSize(Ys).y}get depth(){return this.source.getSize(Ys).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Su;Oe.DEFAULT_ANISOTROPY=1;const dl=class dl{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,h=c[0],f=c[4],g=c[8],d=c[1],_=c[5],M=c[9],R=c[2],b=c[6],x=c[10];if(Math.abs(f-d)<.01&&Math.abs(g-R)<.01&&Math.abs(M-b)<.01){if(Math.abs(f+d)<.1&&Math.abs(g+R)<.1&&Math.abs(M+b)<.1&&Math.abs(h+_+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(h+1)/2,D=(_+1)/2,J=(x+1)/2,O=(f+d)/4,X=(g+R)/4,A=(M+b)/4;return L>D&&L>J?L<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(L),r=O/n,s=X/n):D>J?D<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(D),n=O/r,s=A/r):J<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(J),n=X/s,r=A/s),this.set(n,r,s,e),this}let N=Math.sqrt((b-M)*(b-M)+(g-R)*(g-R)+(d-f)*(d-f));return Math.abs(N)<.001&&(N=1),this.x=(b-M)/N,this.y=(g-R)/N,this.z=(d-f)/N,this.w=Math.acos((h+_+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dl.prototype.isVector4=!0;let be=dl;class vf extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Oe(r),a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new tl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends vf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Iu extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _f extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ds=class Ds{constructor(t,e,n,r,s,a,l,c,h,f,g,d,_,M,R,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,c,h,f,g,d,_,M,R,b)}set(t,e,n,r,s,a,l,c,h,f,g,d,_,M,R,b){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=r,x[1]=s,x[5]=a,x[9]=l,x[13]=c,x[2]=h,x[6]=f,x[10]=g,x[14]=d,x[3]=_,x[7]=M,x[11]=R,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ds().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Ui.setFromMatrixColumn(t,0).length(),s=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r),f=Math.cos(s),g=Math.sin(s);if(t.order==="XYZ"){const d=a*f,_=a*g,M=l*f,R=l*g;e[0]=c*f,e[4]=-c*g,e[8]=h,e[1]=_+M*h,e[5]=d-R*h,e[9]=-l*c,e[2]=R-d*h,e[6]=M+_*h,e[10]=a*c}else if(t.order==="YXZ"){const d=c*f,_=c*g,M=h*f,R=h*g;e[0]=d+R*l,e[4]=M*l-_,e[8]=a*h,e[1]=a*g,e[5]=a*f,e[9]=-l,e[2]=_*l-M,e[6]=R+d*l,e[10]=a*c}else if(t.order==="ZXY"){const d=c*f,_=c*g,M=h*f,R=h*g;e[0]=d-R*l,e[4]=-a*g,e[8]=M+_*l,e[1]=_+M*l,e[5]=a*f,e[9]=R-d*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){const d=a*f,_=a*g,M=l*f,R=l*g;e[0]=c*f,e[4]=M*h-_,e[8]=d*h+R,e[1]=c*g,e[5]=R*h+d,e[9]=_*h-M,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,_=a*h,M=l*c,R=l*h;e[0]=c*f,e[4]=R-d*g,e[8]=M*g+_,e[1]=g,e[5]=a*f,e[9]=-l*f,e[2]=-h*f,e[6]=_*g+M,e[10]=d-R*g}else if(t.order==="XZY"){const d=a*c,_=a*h,M=l*c,R=l*h;e[0]=c*f,e[4]=-g,e[8]=h*f,e[1]=d*g+R,e[5]=a*f,e[9]=_*g-M,e[2]=M*g-_,e[6]=l*f,e[10]=R*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,yf)}lookAt(t,e,n){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ti.crossVectors(n,Ze),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ti.crossVectors(n,Ze)),ti.normalize(),Br.crossVectors(Ze,ti),r[0]=ti.x,r[4]=Br.x,r[8]=Ze.x,r[1]=ti.y,r[5]=Br.y,r[9]=Ze.y,r[2]=ti.z,r[6]=Br.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],f=n[1],g=n[5],d=n[9],_=n[13],M=n[2],R=n[6],b=n[10],x=n[14],N=n[3],L=n[7],D=n[11],J=n[15],O=r[0],X=r[4],A=r[8],z=r[12],Y=r[1],W=r[5],et=r[9],at=r[13],lt=r[2],Q=r[6],ft=r[10],mt=r[14],Ct=r[3],Nt=r[7],y=r[11],T=r[15];return s[0]=a*O+l*Y+c*lt+h*Ct,s[4]=a*X+l*W+c*Q+h*Nt,s[8]=a*A+l*et+c*ft+h*y,s[12]=a*z+l*at+c*mt+h*T,s[1]=f*O+g*Y+d*lt+_*Ct,s[5]=f*X+g*W+d*Q+_*Nt,s[9]=f*A+g*et+d*ft+_*y,s[13]=f*z+g*at+d*mt+_*T,s[2]=M*O+R*Y+b*lt+x*Ct,s[6]=M*X+R*W+b*Q+x*Nt,s[10]=M*A+R*et+b*ft+x*y,s[14]=M*z+R*at+b*mt+x*T,s[3]=N*O+L*Y+D*lt+J*Ct,s[7]=N*X+L*W+D*Q+J*Nt,s[11]=N*A+L*et+D*ft+J*y,s[15]=N*z+L*at+D*mt+J*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],l=t[5],c=t[9],h=t[13],f=t[2],g=t[6],d=t[10],_=t[14],M=t[3],R=t[7],b=t[11],x=t[15],N=c*_-h*d,L=l*_-h*g,D=l*d-c*g,J=a*_-h*f,O=a*d-c*f,X=a*g-l*f;return e*(R*N-b*L+x*D)-n*(M*N-b*J+x*O)+r*(M*L-R*J+x*X)-s*(M*D-R*O+b*X)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=t[9],d=t[10],_=t[11],M=t[12],R=t[13],b=t[14],x=t[15],N=e*l-n*a,L=e*c-r*a,D=e*h-s*a,J=n*c-r*l,O=n*h-s*l,X=r*h-s*c,A=f*R-g*M,z=f*b-d*M,Y=f*x-_*M,W=g*b-d*R,et=g*x-_*R,at=d*x-_*b,lt=N*at-L*et+D*W+J*Y-O*z+X*A;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/lt;return t[0]=(l*at-c*et+h*W)*Q,t[1]=(r*et-n*at-s*W)*Q,t[2]=(R*X-b*O+x*J)*Q,t[3]=(d*O-g*X-_*J)*Q,t[4]=(c*Y-a*at-h*z)*Q,t[5]=(e*at-r*Y+s*z)*Q,t[6]=(b*D-M*X-x*L)*Q,t[7]=(f*X-d*D+_*L)*Q,t[8]=(a*et-l*Y+h*A)*Q,t[9]=(n*Y-e*et-s*A)*Q,t[10]=(M*O-R*D+x*N)*Q,t[11]=(g*D-f*O-_*N)*Q,t[12]=(l*z-a*W-c*A)*Q,t[13]=(e*W-n*z+r*A)*Q,t[14]=(R*L-M*J-b*N)*Q,t[15]=(f*J-g*L+d*N)*Q,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,l=t.y,c=t.z,h=s*a,f=s*l;return this.set(h*a+n,h*l-r*c,h*c+r*l,0,h*l+r*c,f*l+n,f*c-r*a,0,h*c-r*l,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,l=e._z,c=e._w,h=s+s,f=a+a,g=l+l,d=s*h,_=s*f,M=s*g,R=a*f,b=a*g,x=l*g,N=c*h,L=c*f,D=c*g,J=n.x,O=n.y,X=n.z;return r[0]=(1-(R+x))*J,r[1]=(_+D)*J,r[2]=(M-L)*J,r[3]=0,r[4]=(_-D)*O,r[5]=(1-(d+x))*O,r[6]=(b+N)*O,r[7]=0,r[8]=(M+L)*X,r[9]=(b-N)*X,r[10]=(1-(d+R))*X,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(r[0],r[1],r[2]).length();const l=Ui.set(r[4],r[5],r[6]).length(),c=Ui.set(r[8],r[9],r[10]).length();s<0&&(a=-a),fn.copy(this);const h=1/a,f=1/l,g=1/c;return fn.elements[0]*=h,fn.elements[1]*=h,fn.elements[2]*=h,fn.elements[4]*=f,fn.elements[5]*=f,fn.elements[6]*=f,fn.elements[8]*=g,fn.elements[9]*=g,fn.elements[10]*=g,e.setFromRotationMatrix(fn),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,r,s,a,l=_n,c=!1){const h=this.elements,f=2*s/(e-t),g=2*s/(n-r),d=(e+t)/(e-t),_=(n+r)/(n-r);let M,R;if(c)M=s/(a-s),R=a*s/(a-s);else if(l===_n)M=-(a+s)/(a-s),R=-2*a*s/(a-s);else if(l===Cr)M=-a/(a-s),R=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,a,l=_n,c=!1){const h=this.elements,f=2/(e-t),g=2/(n-r),d=-(e+t)/(e-t),_=-(n+r)/(n-r);let M,R;if(c)M=1/(a-s),R=a/(a-s);else if(l===_n)M=-2/(a-s),R=-(a+s)/(a-s);else if(l===Cr)M=-1/(a-s),R=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ds.prototype.isMatrix4=!0;let fe=Ds;const Ui=new nt,fn=new fe,xf=new nt(0,0,0),yf=new nt(1,1,1),ti=new nt,Br=new nt,Ze=new nt,Al=new fe,Cl=new Ai;class Ln{constructor(t=0,e=0,n=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],l=r[8],c=r[1],h=r[5],f=r[9],g=r[2],d=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mf=0;const Rl=new nt,Oi=new Ai,On=new fe,kr=new nt,lr=new nt,Sf=new nt,bf=new Ai,Pl=new nt(1,0,0),Il=new nt(0,1,0),Ll=new nt(0,0,1),Dl={type:"added"},Ef={type:"removed"},Fi={type:"childadded",child:null},js={type:"childremoved",child:null};class Me extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new nt,e=new Ln,n=new Ai,r=new nt(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new Zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(lr,kr,this.up):On.lookAt(kr,lr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(On),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){const g=c[h];s(t.shapes,g)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(s(t.materials,this.material[c]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(t.animations,c))}}if(e){const l=a(t.geometries),c=a(t.materials),h=a(t.textures),f=a(t.images),g=a(t.shapes),d=a(t.skeletons),_=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),M.length>0&&(n.nodes=M)}return n.object=r,n;function a(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Me.DEFAULT_UP=new nt(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wf={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const R of t.hand.values()){const b=e.getJointPose(R,n),x=this._getHandJoint(h,R);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const f=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],d=f.position.distanceTo(g.position),_=.02,M=.005;h.inputState.pinching&&d>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Ks(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ae.workingColorSpace){if(t=Qo(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ks(a,s,t+1/3),this.g=Ks(a,s,t),this.b=Ks(a,s,t-1/3)}return ae.colorSpaceToWorking(this,r),this}setStyle(t,e=qe){function n(s){s!==void 0&&parseFloat(s)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ae.workingToColorSpace(He.copy(this),t),Math.round(Kt(He.r*255,0,255))*65536+Math.round(Kt(He.g*255,0,255))*256+Math.round(Kt(He.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(He.copy(this),e);const n=He.r,r=He.g,s=He.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let c,h;const f=(l+a)/2;if(l===a)c=0,h=0;else{const g=a-l;switch(h=f<=.5?g/(a+l):g/(2-a-l),a){case n:c=(r-s)/g+(r<s?6:0);break;case r:c=(s-n)/g+2;break;case s:c=(n-r)/g+4;break}c/=6}return t.h=c,t.s=h,t.l=f,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=qe){ae.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,r=He.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(zr);const n=Mr(ei.h,zr.h,e),r=Mr(ei.s,zr.s,e),s=Mr(ei.l,zr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new $t;$t.NAMES=Lu;class Du extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const dn=new nt,Fn=new nt,Js=new nt,Bn=new nt,Bi=new nt,ki=new nt,Nl=new nt,Zs=new nt,Qs=new nt,ta=new nt,ea=new be,na=new be,ia=new be;class gn{constructor(t=new nt,e=new nt,n=new nt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){dn.subVectors(r,e),Fn.subVectors(n,e),Js.subVectors(t,e);const a=dn.dot(dn),l=dn.dot(Fn),c=dn.dot(Js),h=Fn.dot(Fn),f=Fn.dot(Js),g=a*h-l*l;if(g===0)return s.set(0,0,0),null;const d=1/g,_=(h*c-l*f)*d,M=(a*f-l*c)*d;return s.set(1-_-M,M,_)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,r,s,a,l,c){return this.getBarycoord(t,e,n,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(l,Bn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ea,s.x),a.addScaledVector(na,s.y),a.addScaledVector(ia,s.z),a}static isFrontFacing(t,e,n,r){return dn.subVectors(n,e),Fn.subVectors(t,e),dn.cross(Fn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),dn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,l;Bi.subVectors(r,n),ki.subVectors(s,n),Zs.subVectors(t,n);const c=Bi.dot(Zs),h=ki.dot(Zs);if(c<=0&&h<=0)return e.copy(n);Qs.subVectors(t,r);const f=Bi.dot(Qs),g=ki.dot(Qs);if(f>=0&&g<=f)return e.copy(r);const d=c*g-f*h;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Bi,a);ta.subVectors(t,s);const _=Bi.dot(ta),M=ki.dot(ta);if(M>=0&&_<=M)return e.copy(s);const R=_*h-c*M;if(R<=0&&h>=0&&M<=0)return l=h/(h-M),e.copy(n).addScaledVector(ki,l);const b=f*M-_*g;if(b<=0&&g-f>=0&&_-M>=0)return Nl.subVectors(s,r),l=(g-f)/(g-f+(_-M)),e.copy(r).addScaledVector(Nl,l);const x=1/(b+R+d);return a=R*x,l=d*x,e.copy(n).addScaledVector(Bi,a).addScaledVector(ki,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Dr{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Vr.subVectors(this.max,cr),zi.subVectors(t.a,cr),Hi.subVectors(t.b,cr),Vi.subVectors(t.c,cr),ni.subVectors(Hi,zi),ii.subVectors(Vi,Hi),pi.subVectors(zi,Vi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-pi.z,pi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,pi.z,0,-pi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-pi.y,pi.x,0];return!ra(e,zi,Hi,Vi,Vr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,zi,Hi,Vi,Vr))?!1:(Gr.crossVectors(ni,ii),e=[Gr.x,Gr.y,Gr.z],ra(e,zi,Hi,Vi,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const kn=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],pn=new nt,Hr=new Dr,zi=new nt,Hi=new nt,Vi=new nt,ni=new nt,ii=new nt,pi=new nt,cr=new nt,Vr=new nt,Gr=new nt,mi=new nt;function ra(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mi.fromArray(i,s);const l=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),c=t.dot(mi),h=e.dot(mi),f=n.dot(mi);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>l)return!1}return!0}const Gn=Tf();function Tf(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const h=c-127;h<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,r[c]=-h-1,r[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,r[c]=13,r[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,f=0;for(;(h&8388608)===0;)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[c]=h|f}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:l}}function Qe(i){Math.abs(i)>65504&&Yt("DataUtils.toHalfFloat(): Value out of range."),i=Kt(i,-65504,65504),Gn.floatView[0]=i;const t=Gn.uint32View[0],e=t>>23&511;return Gn.baseTable[e]+((t&8388607)>>Gn.shiftTable[e])}function Wr(i){const t=i>>10;return Gn.uint32View[0]=Gn.mantissaTable[Gn.offsetTable[t]+(i&1023)]+Gn.exponentTable[t],Gn.floatView[0]}const Ae=new nt,Xr=new Ft;let Af=0;class nn extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Nu extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uu extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class X_ extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Wr(this.array[t*this.itemSize]);return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=Qe(e),this}getY(t){let e=Wr(this.array[t*this.itemSize+1]);return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=Qe(e),this}getZ(t){let e=Wr(this.array[t*this.itemSize+2]);return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=Qe(e),this}getW(t){let e=Wr(this.array[t*this.itemSize+3]);return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=Qe(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=Qe(e),this.array[t+1]=Qe(n),this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array)),this.array[t+0]=Qe(e),this.array[t+1]=Qe(n),this.array[t+2]=Qe(r),this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array),s=te(s,this.array)),this.array[t+0]=Qe(e),this.array[t+1]=Qe(n),this.array[t+2]=Qe(r),this.array[t+3]=Qe(s),this}}class pe extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Cf=new Dr,ur=new nt,sa=new nt;class Nr{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ur,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(sa)),this.expandByPoint(ur.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Rf=0;const on=new fe,aa=new Me,Gi=new nt,tn=new Dr,hr=new Dr,Ue=new nt;class De extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Uu:Nu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const l=e[s];hr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ue.addVectors(tn.min,hr.min),tn.expandByPoint(Ue),Ue.addVectors(tn.max,hr.max),tn.expandByPoint(Ue)):(tn.expandByPoint(hr.min),tn.expandByPoint(hr.max))}tn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){const l=e[s],c=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)Ue.fromBufferAttribute(l,h),c&&(Gi.fromBufferAttribute(t,h),Ue.add(Gi)),r=Math.max(r,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let A=0;A<n.count;A++)l[A]=new nt,c[A]=new nt;const h=new nt,f=new nt,g=new nt,d=new Ft,_=new Ft,M=new Ft,R=new nt,b=new nt;function x(A,z,Y){h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,z),g.fromBufferAttribute(n,Y),d.fromBufferAttribute(s,A),_.fromBufferAttribute(s,z),M.fromBufferAttribute(s,Y),f.sub(h),g.sub(h),_.sub(d),M.sub(d);const W=1/(_.x*M.y-M.x*_.y);isFinite(W)&&(R.copy(f).multiplyScalar(M.y).addScaledVector(g,-_.y).multiplyScalar(W),b.copy(g).multiplyScalar(_.x).addScaledVector(f,-M.x).multiplyScalar(W),l[A].add(R),l[z].add(R),l[Y].add(R),c[A].add(b),c[z].add(b),c[Y].add(b))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let A=0,z=N.length;A<z;++A){const Y=N[A],W=Y.start,et=Y.count;for(let at=W,lt=W+et;at<lt;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new nt,D=new nt,J=new nt,O=new nt;function X(A){J.fromBufferAttribute(r,A),O.copy(J);const z=l[A];L.copy(z),L.sub(J.multiplyScalar(J.dot(z))).normalize(),D.crossVectors(O,z);const W=D.dot(c[A])<0?-1:1;a.setXYZW(A,L.x,L.y,L.z,W)}for(let A=0,z=N.length;A<z;++A){const Y=N[A],W=Y.start,et=Y.count;for(let at=W,lt=W+et;at<lt;at+=3)X(t.getX(at+0)),X(t.getX(at+1)),X(t.getX(at+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new nt,s=new nt,a=new nt,l=new nt,c=new nt,h=new nt,f=new nt,g=new nt;if(t)for(let d=0,_=t.count;d<_;d+=3){const M=t.getX(d+0),R=t.getX(d+1),b=t.getX(d+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,R),a.fromBufferAttribute(e,b),f.subVectors(a,s),g.subVectors(r,s),f.cross(g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),l.add(f),c.add(f),h.add(f),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(R,c.x,c.y,c.z),n.setXYZ(b,h.x,h.y,h.z)}else for(let d=0,_=e.count;d<_;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),f.subVectors(a,s),g.subVectors(r,s),f.cross(g),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(l,c){const h=l.array,f=l.itemSize,g=l.normalized,d=new h.constructor(c.length*f);let _=0,M=0;for(let R=0,b=c.length;R<b;R++){l.isInterleavedBufferAttribute?_=c[R]*l.data.stride+l.offset:_=c[R]*f;for(let x=0;x<f;x++)d[M++]=h[_++]}return new nn(d,f,g)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],h=t(c,n);e.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const c=[],h=s[l];for(let f=0,g=h.length;f<g;f++){const d=h[f],_=t(d,n);c.push(_)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],f=[];for(let g=0,d=h.length;g<d;g++){const _=h[g];f.push(_.toJSON(t.data))}f.length>0&&(r[c]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(e))}const s=t.morphAttributes;for(const h in s){const f=[],g=s[h];for(let d=0,_=g.length;d<_;d++)f.push(g[d].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,f=a.length;h<f;h++){const g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new nt;class Ou{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ye(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ye(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ye(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ye(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Rs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ou(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let If=0;class Ke extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Qi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Es,this.blendDst=ja,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Es&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class q_ extends Ke{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zn=new nt,oa=new nt,qr=new nt,ri=new nt,la=new nt,Yr=new nt,ca=new nt;class Os{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){oa.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(oa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(qr),l=ri.dot(this.direction),c=-ri.dot(qr),h=ri.lengthSq(),f=Math.abs(1-a*a);let g,d,_,M;if(f>0)if(g=a*c-l,d=a*l-c,M=s*f,g>=0)if(d>=-M)if(d<=M){const R=1/f;g*=R,d*=R,_=g*(g+a*d+2*l)+d*(a*g+d+2*c)+h}else d=s,g=Math.max(0,-(a*d+l)),_=-g*g+d*(d+2*c)+h;else d=-s,g=Math.max(0,-(a*d+l)),_=-g*g+d*(d+2*c)+h;else d<=-M?(g=Math.max(0,-(-a*s+l)),d=g>0?-s:Math.min(Math.max(-s,-c),s),_=-g*g+d*(d+2*c)+h):d<=M?(g=0,d=Math.min(Math.max(-s,-c),s),_=d*(d+2*c)+h):(g=Math.max(0,-(a*s+l)),d=g>0?s:Math.min(Math.max(-s,-c),s),_=-g*g+d*(d+2*c)+h);else d=a>0?-s:s,g=Math.max(0,-(a*d+l)),_=-g*g+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(oa).addScaledVector(qr,d),_}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,l,c;const h=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,r=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,r=(t.min.x-d.x)*h),f>=0?(s=(t.min.y-d.y)*f,a=(t.max.y-d.y)*f):(s=(t.max.y-d.y)*f,a=(t.min.y-d.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),g>=0?(l=(t.min.z-d.z)*g,c=(t.max.z-d.z)*g):(l=(t.max.z-d.z)*g,c=(t.min.z-d.z)*g),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,r,s){la.subVectors(e,t),Yr.subVectors(n,t),ca.crossVectors(la,Yr);let a=this.direction.dot(ca),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ri.subVectors(this.origin,t);const c=l*this.direction.dot(Yr.crossVectors(ri,Yr));if(c<0)return null;const h=l*this.direction.dot(la.cross(ri));if(h<0||c+h>a)return null;const f=-l*ri.dot(ca);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nl extends Ke{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ul=new fe,gi=new Os,jr=new Nr,Ol=new nt,$r=new nt,Kr=new nt,Jr=new nt,ua=new nt,Zr=new nt,Fl=new nt,Qr=new nt;class rn extends Me{constructor(t=new De,e=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){Zr.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const f=l[c],g=s[c];f!==0&&(ua.fromBufferAttribute(g,t),a?Zr.addScaledVector(ua,f):Zr.addScaledVector(ua.sub(e),f))}e.add(Zr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(jr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(jr,Ol)===null||gi.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Ul.copy(s).invert(),gi.copy(t.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,g=s.attributes.normal,d=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,R=d.length;M<R;M++){const b=d[M],x=a[b.materialIndex],N=Math.max(b.start,_.start),L=Math.min(l.count,Math.min(b.start+b.count,_.start+_.count));for(let D=N,J=L;D<J;D+=3){const O=l.getX(D),X=l.getX(D+1),A=l.getX(D+2);r=ts(this,x,t,n,h,f,g,O,X,A),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{const M=Math.max(0,_.start),R=Math.min(l.count,_.start+_.count);for(let b=M,x=R;b<x;b+=3){const N=l.getX(b),L=l.getX(b+1),D=l.getX(b+2);r=ts(this,a,t,n,h,f,g,N,L,D),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,R=d.length;M<R;M++){const b=d[M],x=a[b.materialIndex],N=Math.max(b.start,_.start),L=Math.min(c.count,Math.min(b.start+b.count,_.start+_.count));for(let D=N,J=L;D<J;D+=3){const O=D,X=D+1,A=D+2;r=ts(this,x,t,n,h,f,g,O,X,A),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{const M=Math.max(0,_.start),R=Math.min(c.count,_.start+_.count);for(let b=M,x=R;b<x;b+=3){const N=b,L=b+1,D=b+2;r=ts(this,a,t,n,h,f,g,N,L,D),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}}}function Lf(i,t,e,n,r,s,a,l){let c;if(t.side===$e?c=n.intersectTriangle(a,s,r,!0,l):c=n.intersectTriangle(r,s,a,t.side===hi,l),c===null)return null;Qr.copy(l),Qr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Qr);return h<e.near||h>e.far?null:{distance:h,point:Qr.clone(),object:i}}function ts(i,t,e,n,r,s,a,l,c,h){i.getVertexPosition(l,$r),i.getVertexPosition(c,Kr),i.getVertexPosition(h,Jr);const f=Lf(i,t,e,n,$r,Kr,Jr,Fl);if(f){const g=new nt;gn.getBarycoord(Fl,$r,Kr,Jr,g),r&&(f.uv=gn.getInterpolatedAttribute(r,l,c,h,g,new Ft)),s&&(f.uv1=gn.getInterpolatedAttribute(s,l,c,h,g,new Ft)),a&&(f.normal=gn.getInterpolatedAttribute(a,l,c,h,g,new nt),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:l,b:c,c:h,normal:new nt,materialIndex:0};gn.getNormal($r,Kr,Jr,d.normal),f.face=d,f.barycoord=g}return f}class Df extends Oe{constructor(t=null,e=1,n=1,r,s,a,l,c,h=Pe,f=Pe,g,d){super(null,a,l,c,h,f,r,s,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Y_ extends nn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ha=new nt,Nf=new nt,Uf=new Zt;class _i{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ha.subVectors(n,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(ha),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Uf.getNormalMatrix(t),r=this.coplanarPoint(ha).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Nr,Of=new Ft(.5,.5),es=new nt;class Fs{constructor(t=new _i,e=new _i,n=new _i,r=new _i,s=new _i,a=new _i){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){const r=this.planes,s=t.elements,a=s[0],l=s[1],c=s[2],h=s[3],f=s[4],g=s[5],d=s[6],_=s[7],M=s[8],R=s[9],b=s[10],x=s[11],N=s[12],L=s[13],D=s[14],J=s[15];if(r[0].setComponents(h-a,_-f,x-M,J-N).normalize(),r[1].setComponents(h+a,_+f,x+M,J+N).normalize(),r[2].setComponents(h+l,_+g,x+R,J+L).normalize(),r[3].setComponents(h-l,_-g,x-R,J-L).normalize(),n)r[4].setComponents(c,d,b,D).normalize(),r[5].setComponents(h-c,_-d,x-b,J-D).normalize();else if(r[4].setComponents(h-c,_-d,x-b,J-D).normalize(),e===_n)r[5].setComponents(h+c,_+d,x+b,J+D).normalize();else if(e===Cr)r[5].setComponents(c,d,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);const e=Of.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(es.x=r.normal.x>0?t.max.x:t.min.x,es.y=r.normal.y>0?t.max.y:t.min.y,es.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Mn=new fe,Sn=new Fs;class Fu{constructor(){this.coordinateSystem=_n}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const r=e.cameras[n];if(Mn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,r.coordinateSystem,r.reversedDepth),Sn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const r=e.cameras[n];if(Mn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,r.coordinateSystem,r.reversedDepth),Sn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const r=e.cameras[n];if(Mn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,r.coordinateSystem,r.reversedDepth),Sn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const r=e.cameras[n];if(Mn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,r.coordinateSystem,r.reversedDepth),Sn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const r=e.cameras[n];if(Mn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,r.coordinateSystem,r.reversedDepth),Sn.containsPoint(t))return!0}return!1}clone(){return new Fu}}class il extends Ke{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ps=new nt,Is=new nt,Bl=new fe,fr=new Os,ns=new Nr,fa=new nt,kl=new nt;class Ff extends Me{constructor(t=new De,e=new il){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ps.fromBufferAttribute(e,r-1),Is.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ps.distanceTo(Is);t.setAttribute("lineDistance",new pe(n,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),ns.radius+=s,t.ray.intersectsSphere(ns)===!1)return;Bl.copy(r).invert(),fr.copy(t.ray).applyMatrix4(Bl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){const _=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let R=_,b=M-1;R<b;R+=h){const x=f.getX(R),N=f.getX(R+1),L=is(this,t,fr,c,x,N,R);L&&e.push(L)}if(this.isLineLoop){const R=f.getX(M-1),b=f.getX(_),x=is(this,t,fr,c,R,b,M-1);x&&e.push(x)}}else{const _=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let R=_,b=M-1;R<b;R+=h){const x=is(this,t,fr,c,R,R+1,R);x&&e.push(x)}if(this.isLineLoop){const R=is(this,t,fr,c,M-1,_,M-1);R&&e.push(R)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function is(i,t,e,n,r,s,a){const l=i.geometry.attributes.position;if(Ps.fromBufferAttribute(l,r),Is.fromBufferAttribute(l,s),e.distanceSqToSegment(Ps,Is,fa,kl)>n)return;fa.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(fa);if(!(h<t.near||h>t.far))return{distance:h,point:kl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const zl=new nt,Hl=new nt;class Bf extends Ff{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)zl.fromBufferAttribute(e,r),Hl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zl.distanceTo(Hl);t.setAttribute("lineDistance",new pe(n,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kf extends Ke{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vl=new fe,Oo=new Os,rs=new Nr,ss=new nt;class j_ extends Me{constructor(t=new De,e=new kf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),rs.radius+=s,t.ray.intersectsSphere(rs)===!1)return;Vl.copy(r).invert(),Oo.copy(t.ray).applyMatrix4(Vl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,g=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=d,R=_;M<R;M++){const b=h.getX(M);ss.fromBufferAttribute(g,b),Gl(ss,b,c,r,t,e,this)}}else{const d=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let M=d,R=_;M<R;M++)ss.fromBufferAttribute(g,M),Gl(ss,M,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Gl(i,t,e,n,r,s,a){const l=Oo.distanceSqToPoint(i);if(l<e){const c=new nt;Oo.closestPointToPoint(i,c),c.applyMatrix4(n);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class $_ extends Oe{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Pe,this.minFilter=Pe,this.generateMipmaps=!1,this.needsUpdate=!0}}class Bu extends Oe{constructor(t=[],e=bi,n,r,s,a,l,c,h,f){super(t,e,n,r,s,a,l,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rr extends Oe{constructor(t,e,n=In,r,s,a,l=Pe,c=Pe,h,f=jn,g=1){if(f!==jn&&f!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:g};super(d,r,s,a,l,c,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zf extends rr{constructor(t,e=In,n=bi,r,s,a=Pe,l=Pe,c,h=jn){const f={width:t,height:t,depth:1},g=[f,f,f,f,f,f];super(t,t,e,n,r,s,a,l,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ku extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ur extends De{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],f=[],g=[];let d=0,_=0;M("z","y","x",-1,-1,n,e,t,a,s,0),M("z","y","x",1,-1,n,e,-t,a,s,1),M("x","z","y",1,1,t,n,e,r,a,2),M("x","z","y",1,-1,t,n,-e,r,a,3),M("x","y","z",1,-1,t,e,n,r,s,4),M("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(g,2));function M(R,b,x,N,L,D,J,O,X,A,z){const Y=D/X,W=J/A,et=D/2,at=J/2,lt=O/2,Q=X+1,ft=A+1;let mt=0,Ct=0;const Nt=new nt;for(let y=0;y<ft;y++){const T=y*W-at;for(let o=0;o<Q;o++){const u=o*Y-et;Nt[R]=u*N,Nt[b]=T*L,Nt[x]=lt,h.push(Nt.x,Nt.y,Nt.z),Nt[R]=0,Nt[b]=0,Nt[x]=O>0?1:-1,f.push(Nt.x,Nt.y,Nt.z),g.push(o/X),g.push(1-y/A),mt+=1}}for(let y=0;y<A;y++)for(let T=0;T<X;T++){const o=d+T+Q*y,u=d+T+Q*(y+1),m=d+(T+1)+Q*(y+1),v=d+(T+1)+Q*y;c.push(o,u,v),c.push(u,m,v),Ct+=6}l.addGroup(_,Ct,z),_+=Ct,d+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class zu extends De{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],l=[],c=[],h=new nt,f=new Ft;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let g=0,d=3;g<=e;g++,d+=3){const _=n+g/e*r;h.x=t*Math.cos(_),h.y=t*Math.sin(_),a.push(h.x,h.y,h.z),l.push(0,0,1),f.x=(a[d]/t+1)/2,f.y=(a[d+1]/t+1)/2,c.push(f.x,f.y)}for(let g=1;g<=e;g++)s.push(g,g+1,0);this.setIndex(s),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hu extends De{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const f=[],g=[],d=[],_=[];let M=0;const R=[],b=n/2;let x=0;N(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(_,2));function N(){const D=new nt,J=new nt;let O=0;const X=(e-t)/n;for(let A=0;A<=s;A++){const z=[],Y=A/s,W=Y*(e-t)+t;for(let et=0;et<=r;et++){const at=et/r,lt=at*c+l,Q=Math.sin(lt),ft=Math.cos(lt);J.x=W*Q,J.y=-Y*n+b,J.z=W*ft,g.push(J.x,J.y,J.z),D.set(Q,X,ft).normalize(),d.push(D.x,D.y,D.z),_.push(at,1-Y),z.push(M++)}R.push(z)}for(let A=0;A<r;A++)for(let z=0;z<s;z++){const Y=R[z][A],W=R[z+1][A],et=R[z+1][A+1],at=R[z][A+1];(t>0||z!==0)&&(f.push(Y,W,at),O+=3),(e>0||z!==s-1)&&(f.push(W,et,at),O+=3)}h.addGroup(x,O,0),x+=O}function L(D){const J=M,O=new Ft,X=new nt;let A=0;const z=D===!0?t:e,Y=D===!0?1:-1;for(let et=1;et<=r;et++)g.push(0,b*Y,0),d.push(0,Y,0),_.push(.5,.5),M++;const W=M;for(let et=0;et<=r;et++){const lt=et/r*c+l,Q=Math.cos(lt),ft=Math.sin(lt);X.x=z*ft,X.y=b*Y,X.z=z*Q,g.push(X.x,X.y,X.z),d.push(0,Y,0),O.x=Q*.5+.5,O.y=ft*.5*Y+.5,_.push(O.x,O.y),M++}for(let et=0;et<r;et++){const at=J+et,lt=W+et;D===!0?f.push(lt,lt+1,at):f.push(lt+1,lt,at),A+=3}h.addGroup(x,A,D===!0?1:2),x+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let l=0,c=s-1,h;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),h=n[r]-a,h<0)l=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const f=n[r],d=n[r+1]-f,_=(a-f)/d;return(r+_)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),l=this.getPoint(s),c=e||(a.isVector2?new Ft:new nt);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new nt,r=[],s=[],a=[],l=new nt,c=new fe;for(let _=0;_<=t;_++){const M=_/t;r[_]=this.getTangentAt(M,new nt)}s[0]=new nt,a[0]=new nt;let h=Number.MAX_VALUE;const f=Math.abs(r[0].x),g=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=h&&(h=f,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),d<=h&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let _=1;_<=t;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),l.crossVectors(r[_-1],r[_]),l.length()>Number.EPSILON){l.normalize();const M=Math.acos(Kt(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(c.makeRotationAxis(l,M))}a[_].crossVectors(r[_],s[_])}if(e===!0){let _=Math.acos(Kt(s[0].dot(s[t]),-1,1));_/=t,r[0].dot(l.crossVectors(s[0],s[t]))>0&&(_=-_);for(let M=1;M<=t;M++)s[M].applyMatrix4(c.makeRotationAxis(r[M],_*M)),a[M].crossVectors(r[M],s[M])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rl extends Nn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new Ft){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),g=Math.sin(this.aRotation),d=c-this.aX,_=h-this.aY;c=d*f-_*g+this.aX,h=d*g+_*f+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hf extends rl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let i=0,t=0,e=0,n=0;function r(s,a,l,c){i=s,t=l,e=-3*s+3*a-2*l-c,n=2*s-2*a+l+c}return{initCatmullRom:function(s,a,l,c,h){r(a,l,h*(l-s),h*(c-a))},initNonuniformCatmullRom:function(s,a,l,c,h,f,g){let d=(a-s)/h-(l-s)/(h+f)+(l-a)/f,_=(l-a)/f-(c-a)/(f+g)+(c-l)/g;d*=f,_*=f,r(a,l,d,_)},calc:function(s){const a=s*s,l=a*s;return i+t*s+e*a+n*l}}}const Wl=new nt,Xl=new nt,da=new sl,pa=new sl,ma=new sl;class Vf extends Nn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new nt){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:c===0&&l===s-1&&(l=s-2,c=1);let h,f;this.closed||l>0?h=r[(l-1)%s]:(Xl.subVectors(r[0],r[1]).add(r[0]),h=Xl);const g=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?f=r[(l+2)%s]:(Wl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Wl),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),_),R=Math.pow(g.distanceToSquared(d),_),b=Math.pow(d.distanceToSquared(f),_);R<1e-4&&(R=1),M<1e-4&&(M=R),b<1e-4&&(b=R),da.initNonuniformCatmullRom(h.x,g.x,d.x,f.x,M,R,b),pa.initNonuniformCatmullRom(h.y,g.y,d.y,f.y,M,R,b),ma.initNonuniformCatmullRom(h.z,g.z,d.z,f.z,M,R,b)}else this.curveType==="catmullrom"&&(da.initCatmullRom(h.x,g.x,d.x,f.x,this.tension),pa.initCatmullRom(h.y,g.y,d.y,f.y,this.tension),ma.initCatmullRom(h.z,g.z,d.z,f.z,this.tension));return n.set(da.calc(c),pa.calc(c),ma.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new nt().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ql(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,l=i*i,c=i*l;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*l+s*i+e}function Gf(i,t){const e=1-i;return e*e*t}function Wf(i,t){return 2*(1-i)*i*t}function Xf(i,t){return i*i*t}function Sr(i,t,e,n){return Gf(i,t)+Wf(i,e)+Xf(i,n)}function qf(i,t){const e=1-i;return e*e*e*t}function Yf(i,t){const e=1-i;return 3*e*e*i*t}function jf(i,t){return 3*(1-i)*i*i*t}function $f(i,t){return i*i*i*t}function br(i,t,e,n,r){return qf(i,t)+Yf(i,e)+jf(i,n)+$f(i,r)}class Vu extends Nn{constructor(t=new Ft,e=new Ft,n=new Ft,r=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ft){const n=e,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(br(t,r.x,s.x,a.x,l.x),br(t,r.y,s.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kf extends Nn{constructor(t=new nt,e=new nt,n=new nt,r=new nt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new nt){const n=e,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(br(t,r.x,s.x,a.x,l.x),br(t,r.y,s.y,a.y,l.y),br(t,r.z,s.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gu extends Nn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jf extends Nn{constructor(t=new nt,e=new nt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends Nn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Sr(t,r.x,s.x,a.x),Sr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Nn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Sr(t,r.x,s.x,a.x),Sr(t,r.y,s.y,a.y),Sr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qu extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),l=s-a,c=r[a===0?a:a-1],h=r[a],f=r[a>r.length-2?r.length-1:a+1],g=r[a>r.length-3?r.length-1:a+2];return n.set(ql(l,c.x,h.x,f.x,g.x),ql(l,c.y,h.y,f.y,g.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Ft().fromArray(r))}return this}}var Ls=Object.freeze({__proto__:null,ArcCurve:Hf,CatmullRomCurve3:Vf,CubicBezierCurve:Vu,CubicBezierCurve3:Kf,EllipseCurve:rl,LineCurve:Gu,LineCurve3:Jf,QuadraticBezierCurve:Wu,QuadraticBezierCurve3:Xu,SplineCurve:qu});class Zf extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ls[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,l=this.curves[s],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){const f=c[h];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Ls[r.type]().fromJSON(r))}return this}}class Fo extends Zf{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gu(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Wu(this.currentPoint.clone(),new Ft(t,e),new Ft(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const l=new Vu(this.currentPoint.clone(),new Ft(t,e),new Ft(n,r),new Ft(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new qu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,l,c){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+h,e+f,n,r,s,a,l,c),this}absellipse(t,e,n,r,s,a,l,c){const h=new rl(t,e,n,r,s,a,l,c);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ms extends Fo{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Fo().fromJSON(r))}return this}}function Qf(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Yu(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let l,c,h;if(n&&(s=rd(i,t,s,e)),i.length>80*e){l=i[0],c=i[1];let f=l,g=c;for(let d=e;d<r;d+=e){const _=i[d],M=i[d+1];_<l&&(l=_),M<c&&(c=M),_>f&&(f=_),M>g&&(g=M)}h=Math.max(f-l,g-c),h=h!==0?32767/h:0}return Pr(s,a,e,l,c,h,0),a}function Yu(i,t,e,n,r){let s;if(r===md(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=Yl(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Yl(a/n|0,i[a],i[a+1],s);return s&&sr(s,s.next)&&(Lr(s),s=s.next),s}function wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||ye(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&cd(i,n,r,s);let l=i;for(;i.prev!==i.next;){const c=i.prev,h=i.next;if(s?ed(i,n,r,s):td(i)){t.push(c.i,i.i,h.i),Lr(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=nd(wi(i),t),Pr(i,t,e,n,r,s,2)):a===2&&id(i,t,e,n,r,s):Pr(wi(i),t,e,n,r,s,1);break}}}function td(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,l=t.y,c=e.y,h=n.y,f=Math.min(r,s,a),g=Math.min(l,c,h),d=Math.max(r,s,a),_=Math.max(l,c,h);let M=n.next;for(;M!==t;){if(M.x>=f&&M.x<=d&&M.y>=g&&M.y<=_&&_r(r,l,s,c,a,h,M.x,M.y)&&ye(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function ed(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ye(r,s,a)>=0)return!1;const l=r.x,c=s.x,h=a.x,f=r.y,g=s.y,d=a.y,_=Math.min(l,c,h),M=Math.min(f,g,d),R=Math.max(l,c,h),b=Math.max(f,g,d),x=Bo(_,M,t,e,n),N=Bo(R,b,t,e,n);let L=i.prevZ,D=i.nextZ;for(;L&&L.z>=x&&D&&D.z<=N;){if(L.x>=_&&L.x<=R&&L.y>=M&&L.y<=b&&L!==r&&L!==a&&_r(l,f,c,g,h,d,L.x,L.y)&&ye(L.prev,L,L.next)>=0||(L=L.prevZ,D.x>=_&&D.x<=R&&D.y>=M&&D.y<=b&&D!==r&&D!==a&&_r(l,f,c,g,h,d,D.x,D.y)&&ye(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;L&&L.z>=x;){if(L.x>=_&&L.x<=R&&L.y>=M&&L.y<=b&&L!==r&&L!==a&&_r(l,f,c,g,h,d,L.x,L.y)&&ye(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;D&&D.z<=N;){if(D.x>=_&&D.x<=R&&D.y>=M&&D.y<=b&&D!==r&&D!==a&&_r(l,f,c,g,h,d,D.x,D.y)&&ye(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function nd(i,t){let e=i;do{const n=e.prev,r=e.next.next;!sr(n,r)&&$u(n,e,e.next,r)&&Ir(n,r)&&Ir(r,n)&&(t.push(n.i,e.i,r.i),Lr(e),Lr(e.next),e=i=r),e=e.next}while(e!==i);return wi(e)}function id(i,t,e,n,r,s){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&fd(a,l)){let c=Ku(a,l);a=wi(a,a.next),c=wi(c,c.next),Pr(a,t,e,n,r,s,0),Pr(c,t,e,n,r,s,0);return}l=l.next}a=a.next}while(a!==i)}function rd(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const l=t[s]*n,c=s<a-1?t[s+1]*n:i.length,h=Yu(i,l,c,n,!1);h===h.next&&(h.steiner=!0),r.push(hd(h))}r.sort(sd);for(let s=0;s<r.length;s++)e=ad(r[s],e);return e}function sd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function ad(i,t){const e=od(i,t);if(!e)return t;const n=Ku(e,i);return wi(n,n.next),wi(e,e.next)}function od(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(sr(i,e))return e;do{if(sr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const g=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=n&&g>s&&(s=g,a=e.x<e.next.x?e:e.next,g===n))return a}e=e.next}while(e!==t);if(!a)return null;const l=a,c=a.x,h=a.y;let f=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&ju(r<h?n:s,r,c,h,r<h?s:n,r,e.x,e.y)){const g=Math.abs(r-e.y)/(n-e.x);Ir(e,i)&&(g<f||g===f&&(e.x>a.x||e.x===a.x&&ld(a,e)))&&(a=e,f=g)}e=e.next}while(e!==l);return a}function ld(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function cd(i,t,e,n){let r=i;do r.z===0&&(r.z=Bo(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ud(r)}function ud(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let c=e;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,l--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function Bo(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ju(i,t,e,n,r,s,a,l){return(r-a)*(t-l)>=(i-a)*(s-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(s-l)>=(r-a)*(n-l)}function _r(i,t,e,n,r,s,a,l){return!(i===a&&t===l)&&ju(i,t,e,n,r,s,a,l)}function fd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dd(i,t)&&(Ir(i,t)&&Ir(t,i)&&pd(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||sr(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sr(i,t){return i.x===t.x&&i.y===t.y}function $u(i,t,e,n){const r=os(ye(i,t,e)),s=os(ye(i,t,n)),a=os(ye(e,n,i)),l=os(ye(e,n,t));return!!(r!==s&&a!==l||r===0&&as(i,e,t)||s===0&&as(i,n,t)||a===0&&as(e,i,n)||l===0&&as(e,t,n))}function as(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function os(i){return i>0?1:i<0?-1:0}function dd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function pd(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ku(i,t){const e=ko(i.i,i.x,i.y),n=ko(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yl(i,t,e,n){const r=ko(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ko(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function md(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class gd{static triangulate(t,e,n=2){return Qf(t,e,n)}}class Si{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Si.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];jl(t),$l(n,t);let a=t.length;e.forEach(jl);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,$l(n,e[c]);const l=gd.triangulate(n,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}}function jl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $l(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ju extends De{constructor(t=new Ms([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];a(h)}this.setAttribute("position",new pe(r,3)),this.setAttribute("uv",new pe(s,2)),this.computeVertexNormals();function a(l){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,_=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:_-.1,R=e.bevelOffset!==void 0?e.bevelOffset:0,b=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,N=e.UVGenerator!==void 0?e.UVGenerator:vd;let L,D=!1,J,O,X,A;if(x){L=x.getSpacedPoints(f),D=!0,d=!1;const F=x.isCatmullRomCurve3?x.closed:!1;J=x.computeFrenetFrames(f,F),O=new nt,X=new nt,A=new nt}d||(b=0,_=0,M=0,R=0);const z=l.extractPoints(h);let Y=z.shape;const W=z.holes;if(!Si.isClockWise(Y)){Y=Y.reverse();for(let F=0,G=W.length;F<G;F++){const k=W[F];Si.isClockWise(k)&&(W[F]=k.reverse())}}function at(F){const k=10000000000000001e-36;let q=F[0];for(let j=1;j<=F.length;j++){const ct=j%F.length,B=F[ct],ut=B.x-q.x,vt=B.y-q.y,_t=ut*ut+vt*vt,it=Math.max(Math.abs(B.x),Math.abs(B.y),Math.abs(q.x),Math.abs(q.y)),Tt=k*it*it;if(_t<=Tt){F.splice(ct,1),j--;continue}q=B}}at(Y),W.forEach(at);const lt=W.length,Q=Y;for(let F=0;F<lt;F++){const G=W[F];Y=Y.concat(G)}function ft(F,G,k){return G||oe("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(G,k)}const mt=Y.length;function Ct(F,G,k){let q,j,ct;const B=F.x-G.x,ut=F.y-G.y,vt=k.x-F.x,_t=k.y-F.y,it=B*B+ut*ut,Tt=B*_t-ut*vt;if(Math.abs(Tt)>Number.EPSILON){const I=Math.sqrt(it),S=Math.sqrt(vt*vt+_t*_t),tt=G.x-ut/I,st=G.y+B/I,ht=k.x-_t/S,Et=k.y+vt/S,Mt=((ht-tt)*_t-(Et-st)*vt)/(B*_t-ut*vt);q=tt+B*Mt-F.x,j=st+ut*Mt-F.y;const rt=q*q+j*j;if(rt<=2)return new Ft(q,j);ct=Math.sqrt(rt/2)}else{let I=!1;B>Number.EPSILON?vt>Number.EPSILON&&(I=!0):B<-Number.EPSILON?vt<-Number.EPSILON&&(I=!0):Math.sign(ut)===Math.sign(_t)&&(I=!0),I?(q=-ut,j=B,ct=Math.sqrt(it)):(q=B,j=ut,ct=Math.sqrt(it/2))}return new Ft(q/ct,j/ct)}const Nt=[];for(let F=0,G=Q.length,k=G-1,q=F+1;F<G;F++,k++,q++)k===G&&(k=0),q===G&&(q=0),Nt[F]=Ct(Q[F],Q[k],Q[q]);const y=[];let T,o=Nt.concat();for(let F=0,G=lt;F<G;F++){const k=W[F];T=[];for(let q=0,j=k.length,ct=j-1,B=q+1;q<j;q++,ct++,B++)ct===j&&(ct=0),B===j&&(B=0),T[q]=Ct(k[q],k[ct],k[B]);y.push(T),o=o.concat(T)}let u;if(b===0)u=Si.triangulateShape(Q,W);else{const F=[],G=[];for(let k=0;k<b;k++){const q=k/b,j=_*Math.cos(q*Math.PI/2),ct=M*Math.sin(q*Math.PI/2)+R;for(let B=0,ut=Q.length;B<ut;B++){const vt=ft(Q[B],Nt[B],ct);C(vt.x,vt.y,-j),q===0&&F.push(vt)}for(let B=0,ut=lt;B<ut;B++){const vt=W[B];T=y[B];const _t=[];for(let it=0,Tt=vt.length;it<Tt;it++){const I=ft(vt[it],T[it],ct);C(I.x,I.y,-j),q===0&&_t.push(I)}q===0&&G.push(_t)}}u=Si.triangulateShape(F,G)}const m=u.length,v=M+R;for(let F=0;F<mt;F++){const G=d?ft(Y[F],o[F],v):Y[F];D?(X.copy(J.normals[0]).multiplyScalar(G.x),O.copy(J.binormals[0]).multiplyScalar(G.y),A.copy(L[0]).add(X).add(O),C(A.x,A.y,A.z)):C(G.x,G.y,0)}for(let F=1;F<=f;F++)for(let G=0;G<mt;G++){const k=d?ft(Y[G],o[G],v):Y[G];D?(X.copy(J.normals[F]).multiplyScalar(k.x),O.copy(J.binormals[F]).multiplyScalar(k.y),A.copy(L[F]).add(X).add(O),C(A.x,A.y,A.z)):C(k.x,k.y,g/f*F)}for(let F=b-1;F>=0;F--){const G=F/b,k=_*Math.cos(G*Math.PI/2),q=M*Math.sin(G*Math.PI/2)+R;for(let j=0,ct=Q.length;j<ct;j++){const B=ft(Q[j],Nt[j],q);C(B.x,B.y,g+k)}for(let j=0,ct=W.length;j<ct;j++){const B=W[j];T=y[j];for(let ut=0,vt=B.length;ut<vt;ut++){const _t=ft(B[ut],T[ut],q);D?C(_t.x,_t.y+L[f-1].y,L[f-1].x+k):C(_t.x,_t.y,g+k)}}}p(),E();function p(){const F=r.length/3;if(d){let G=0,k=mt*G;for(let q=0;q<m;q++){const j=u[q];P(j[2]+k,j[1]+k,j[0]+k)}G=f+b*2,k=mt*G;for(let q=0;q<m;q++){const j=u[q];P(j[0]+k,j[1]+k,j[2]+k)}}else{for(let G=0;G<m;G++){const k=u[G];P(k[2],k[1],k[0])}for(let G=0;G<m;G++){const k=u[G];P(k[0]+mt*f,k[1]+mt*f,k[2]+mt*f)}}n.addGroup(F,r.length/3-F,0)}function E(){const F=r.length/3;let G=0;w(Q,G),G+=Q.length;for(let k=0,q=W.length;k<q;k++){const j=W[k];w(j,G),G+=j.length}n.addGroup(F,r.length/3-F,1)}function w(F,G){let k=F.length;for(;--k>=0;){const q=k;let j=k-1;j<0&&(j=F.length-1);for(let ct=0,B=f+b*2;ct<B;ct++){const ut=mt*ct,vt=mt*(ct+1),_t=G+q+ut,it=G+j+ut,Tt=G+j+vt,I=G+q+vt;H(_t,it,Tt,I)}}}function C(F,G,k){c.push(F),c.push(G),c.push(k)}function P(F,G,k){K(F),K(G),K(k);const q=r.length/3,j=N.generateTopUV(n,r,q-3,q-2,q-1);V(j[0]),V(j[1]),V(j[2])}function H(F,G,k,q){K(F),K(G),K(q),K(G),K(k),K(q);const j=r.length/3,ct=N.generateSideWallUV(n,r,j-6,j-3,j-2,j-1);V(ct[0]),V(ct[1]),V(ct[3]),V(ct[1]),V(ct[2]),V(ct[3])}function K(F){r.push(c[F*3+0]),r.push(c[F*3+1]),r.push(c[F*3+2])}function V(F){s.push(F.x),s.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _d(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const l=e[t.shapes[s]];n.push(l)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ls[r.type]().fromJSON(r)),new Ju(n,t.options)}}const vd={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],l=t[n*3],c=t[n*3+1],h=t[r*3],f=t[r*3+1];return[new Ft(s,a),new Ft(l,c),new Ft(h,f)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[n*3],f=t[n*3+1],g=t[n*3+2],d=t[r*3],_=t[r*3+1],M=t[r*3+2],R=t[s*3],b=t[s*3+1],x=t[s*3+2];return Math.abs(l-f)<Math.abs(a-h)?[new Ft(a,1-c),new Ft(h,1-g),new Ft(d,1-M),new Ft(R,1-x)]:[new Ft(l,1-c),new Ft(f,1-g),new Ft(_,1-M),new Ft(b,1-x)]}};function _d(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ti extends De{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,l=Math.floor(n),c=Math.floor(r),h=l+1,f=c+1,g=t/l,d=e/c,_=[],M=[],R=[],b=[];for(let x=0;x<f;x++){const N=x*d-a;for(let L=0;L<h;L++){const D=L*g-s;M.push(D,-N,0),R.push(0,0,1),b.push(L/l),b.push(1-x/c)}}for(let x=0;x<c;x++)for(let N=0;N<l;N++){const L=N+h*x,D=N+h*(x+1),J=N+1+h*(x+1),O=N+1+h*x;_.push(L,D,O),_.push(D,J,O)}this.setIndex(_),this.setAttribute("position",new pe(M,3)),this.setAttribute("normal",new pe(R,3)),this.setAttribute("uv",new pe(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.widthSegments,t.heightSegments)}}class al extends De{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let h=0;const f=[],g=new nt,d=new nt,_=[],M=[],R=[],b=[];for(let x=0;x<=n;x++){const N=[],L=x/n;let D=0;x===0&&a===0?D=.5/e:x===n&&c===Math.PI&&(D=-.5/e);for(let J=0;J<=e;J++){const O=J/e;g.x=-t*Math.cos(r+O*s)*Math.sin(a+L*l),g.y=t*Math.cos(a+L*l),g.z=t*Math.sin(r+O*s)*Math.sin(a+L*l),M.push(g.x,g.y,g.z),d.copy(g).normalize(),R.push(d.x,d.y,d.z),b.push(O+D,1-L),N.push(h++)}f.push(N)}for(let x=0;x<n;x++)for(let N=0;N<e;N++){const L=f[x][N+1],D=f[x][N],J=f[x+1][N],O=f[x+1][N+1];(x!==0||a>0)&&_.push(L,D,O),(x!==n-1||c<Math.PI)&&_.push(D,J,O)}this.setIndex(_),this.setAttribute("position",new pe(M,3)),this.setAttribute("normal",new pe(R,3)),this.setAttribute("uv",new pe(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zu extends De{constructor(t=new Xu(new nt(-1,-1,0),new nt(-1,1,0),new nt(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const l=new nt,c=new nt,h=new Ft;let f=new nt;const g=[],d=[],_=[],M=[];R(),this.setIndex(M),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(_,2));function R(){for(let L=0;L<e;L++)b(L);b(s===!1?e:0),N(),x()}function b(L){f=t.getPointAt(L/e,f);const D=a.normals[L],J=a.binormals[L];for(let O=0;O<=r;O++){const X=O/r*Math.PI*2,A=Math.sin(X),z=-Math.cos(X);c.x=z*D.x+A*J.x,c.y=z*D.y+A*J.y,c.z=z*D.z+A*J.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=f.x+n*c.x,l.y=f.y+n*c.y,l.z=f.z+n*c.z,g.push(l.x,l.y,l.z)}}function x(){for(let L=1;L<=e;L++)for(let D=1;D<=r;D++){const J=(r+1)*(L-1)+(D-1),O=(r+1)*L+(D-1),X=(r+1)*L+D,A=(r+1)*(L-1)+D;M.push(J,O,A),M.push(O,X,A)}}function N(){for(let L=0;L<=e;L++)for(let D=0;D<=r;D++)h.x=L/e,h.y=D/r,_.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Zu(new Ls[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K_ extends De{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,r=new nt,s=new nt;if(t.index!==null){const a=t.attributes.position,l=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,f=c.length;h<f;++h){const g=c[h],d=g.start,_=g.count;for(let M=d,R=d+_;M<R;M+=3)for(let b=0;b<3;b++){const x=l.getX(M+b),N=l.getX(M+(b+1)%3);r.fromBufferAttribute(a,x),s.fromBufferAttribute(a,N),Kl(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let h=0;h<3;h++){const f=3*l+h,g=3*l+(h+1)%3;r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),Kl(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new pe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Kl(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}class J_ extends Ke{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $t(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(Jl(r))r.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Jl(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=ar(i[e]);for(const r in n)t[r]=n[r]}return t}function Jl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const yd={clone:ar,merge:Xe};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ke{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bd extends Dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Er extends Ke{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Z_ extends Er{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Q_ extends Ke{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $t(16777215),this.specular=new $t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Ns,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tx extends Ke{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new $t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ex extends Ke{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class nx extends Ke{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Ns,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ed extends Ke{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wd extends Ke{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ix extends Ke{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new $t(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rx extends il{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const ga={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Zl(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Zl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zl(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Td{constructor(t,e,n){const r=this;let s=!1,a=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,l),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,g){return h.push(f,g),this},this.removeHandler=function(f){const g=h.indexOf(f);return g!==-1&&h.splice(g,2),this},this.getHandler=function(f){for(let g=0,d=h.length;g<d;g+=2){const _=h[g],M=h[g+1];if(_.global&&(_.lastIndex=0),_.test(f))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ad=new Td;class ol{constructor(t){this.manager=t!==void 0?t:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ol.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi=new WeakMap;class Cd extends ol{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ga.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let g=Wi.get(a);g===void 0&&(g=[],Wi.set(a,g)),g.push({onLoad:e,onError:r})}return a}const l=Rr("img");function c(){f(),e&&e(this);const g=Wi.get(this)||[];for(let d=0;d<g.length;d++){const _=g[d];_.onLoad&&_.onLoad(this)}Wi.delete(this),s.manager.itemEnd(t)}function h(g){f(),r&&r(g),ga.remove(`image:${t}`);const d=Wi.get(this)||[];for(let _=0;_<d.length;_++){const M=d[_];M.onError&&M.onError(g)}Wi.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),ga.add(`image:${t}`,l),s.manager.itemStart(t),l.src=t,l}}class Zi extends ol{constructor(t){super(t)}load(t,e,n,r){const s=new Oe,a=new Cd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){s.image=l,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Ci extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class sx extends Ci{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const va=new fe,Ql=new nt,tc=new nt;class ll{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tc),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Cr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ls=new nt,cs=new Ai,bn=new nt;class th extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ls,cs,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ls,cs,bn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ls,cs,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ls,cs,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new nt,ec=new Ft,nc=new Ft;class je extends th{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/h,r*=a.width/c,n*=a.height/h}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Rd extends ll{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ir*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ax extends Ci{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Rd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Pd extends ll{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}}class ox extends Ci{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Pd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Bs extends th{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Id extends ll{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends Ci{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Id}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Ld extends Ci{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class cx extends Ci{constructor(t,e,n=10,r=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Dd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new nt)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,r=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*r),e.addScaledVector(a[2],.488603*s),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*r)),e.addScaledVector(a[5],1.092548*(r*s)),e.addScaledVector(a[6],.315392*(3*s*s-1)),e.addScaledVector(a[7],1.092548*(n*s)),e.addScaledVector(a[8],.546274*(n*n-r*r)),e}getIrradianceAt(t,e){const n=t.x,r=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*r),e.addScaledVector(a[2],2*.511664*s),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*r),e.addScaledVector(a[5],2*.429043*r*s),e.addScaledVector(a[6],.743125*s*s-.247708),e.addScaledVector(a[7],2*.429043*n*s),e.addScaledVector(a[8],.429043*(n*n-r*r)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(t,e+r*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(t,e+r*3);return t}static getBasisAt(t,e){const n=t.x,r=t.y,s=t.z;e[0]=.282095,e[1]=.488603*r,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*r,e[5]=1.092548*r*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-r*r)}}class ux extends Ci{constructor(t=new Dd,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class hx extends De{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Xi=-90,qi=1;class Nd extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new je(Xi,qi,t,e);r.layers=this.layers,this.add(r);const s=new je(Xi,qi,t,e);s.layers=this.layers,this.add(s);const a=new je(Xi,qi,t,e);a.layers=this.layers,this.add(a);const l=new je(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new je(Xi,qi,t,e);c.layers=this.layers,this.add(c);const h=new je(Xi,qi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,l,c]=e;for(const h of e)this.remove(h);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,h,f]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=R,t.setRenderTarget(n,5,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(g,d,_),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Ud extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Od.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Od(){this._document.hidden===!1&&this.reset()}class ln{constructor(t){this.value=t}clone(){return new ln(this.value.clone===void 0?this.value:this.value.clone())}}class dx extends Pf{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const ic=new fe;class px{constructor(t,e,n=0,r=1/0){this.ray=new Os(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ic.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ic),this}intersectObject(t,e=!0,n=[]){return zo(t,this,n,e),n.sort(rc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)zo(t[r],this,n,e);return n.sort(rc),n}}function rc(i,t){return i.distance-t.distance}function zo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,l=s.length;a<l;a++)zo(s[a],t,e,!0)}}class mx{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const pl=class pl{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};pl.prototype.isMatrix2=!0;let sc=pl;const ac=new nt,us=new nt,Yi=new nt,ji=new nt,_a=new nt,Fd=new nt,Bd=new nt;class gx{constructor(t=new nt,e=new nt){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ac.subVectors(t,this.start),us.subVectors(this.end,this.start);const n=us.dot(us);if(n===0)return 0;let s=us.dot(ac)/n;return e&&(s=Kt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Fd,n=Bd){const r=10000000000000001e-32;let s,a;const l=this.start,c=t.start,h=this.end,f=t.end;Yi.subVectors(h,l),ji.subVectors(f,c),_a.subVectors(l,c);const g=Yi.dot(Yi),d=ji.dot(ji),_=ji.dot(_a);if(g<=r&&d<=r)return e.copy(l),n.copy(c),e.sub(n),e.dot(e);if(g<=r)s=0,a=_/d,a=Kt(a,0,1);else{const M=Yi.dot(_a);if(d<=r)a=0,s=Kt(-M/g,0,1);else{const R=Yi.dot(ji),b=g*d-R*R;b!==0?s=Kt((R*_-M*d)/b,0,1):s=0,a=(R*s+_)/d,a<0?(a=0,s=Kt(-M/g,0,1)):a>1&&(a=1,s=Kt((R-M)/g,0,1))}}return e.copy(l).addScaledVector(Yi,s),n.copy(c).addScaledVector(ji,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class kd extends Bf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new De;r.setAttribute("position",new pe(e,3)),r.setAttribute("color",new pe(n,3));const s=new il({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new $t,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class vx{constructor(){this.type="ShapePath",this.color=new $t,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Fo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,a){return this.currentPath.bezierCurveTo(t,e,n,r,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(x){const N=[];for(let L=0,D=x.length;L<D;L++){const J=x[L],O=new Ms;O.curves=J.curves,N.push(O)}return N}function n(x,N){const L=N.length;let D=!1;for(let J=L-1,O=0;O<L;J=O++){let X=N[J],A=N[O],z=A.x-X.x,Y=A.y-X.y;if(Math.abs(Y)>Number.EPSILON){if(Y<0&&(X=N[O],z=-z,A=N[J],Y=-Y),x.y<X.y||x.y>A.y)continue;if(x.y===X.y){if(x.x===X.x)return!0}else{const W=Y*(x.x-X.x)-z*(x.y-X.y);if(W===0)return!0;if(W<0)continue;D=!D}}else{if(x.y!==X.y)continue;if(A.x<=x.x&&x.x<=X.x||X.x<=x.x&&x.x<=A.x)return!0}}return D}const r=Si.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,l,c;const h=[];if(s.length===1)return l=s[0],c=new Ms,c.curves=l.curves,h.push(c),h;let f=!r(s[0].getPoints());f=t?!f:f;const g=[],d=[];let _=[],M=0,R;d[M]=void 0,_[M]=[];for(let x=0,N=s.length;x<N;x++)l=s[x],R=l.getPoints(),a=r(R),a=t?!a:a,a?(!f&&d[M]&&M++,d[M]={s:new Ms,p:R},d[M].s.curves=l.curves,f&&M++,_[M]=[]):_[M].push({h:l,p:R[0]});if(!d[0])return e(s);if(d.length>1){let x=!1,N=0;for(let L=0,D=d.length;L<D;L++)g[L]=[];for(let L=0,D=d.length;L<D;L++){const J=_[L];for(let O=0;O<J.length;O++){const X=J[O];let A=!0;for(let z=0;z<d.length;z++)n(X.p,d[z].p)&&(L!==z&&N++,A?(A=!1,g[z].push(X)):x=!0);A&&g[L].push(X)}}N>0&&x===!1&&(_=g)}let b;for(let x=0,N=d.length;x<N;x++){c=d[x].s,h.push(c),b=_[x];for(let L=0,D=b.length;L<D;L++)c.holes.push(b[L].h)}return h}}class _x extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Yt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function oc(i,t,e,n){const r=zd(n);switch(e){case Au:return i*t;case Ru:return i*t/r.components*r.byteLength;case jo:return i*t/r.components*r.byteLength;case Ei:return i*t*2/r.components*r.byteLength;case $o:return i*t*2/r.components*r.byteLength;case Cu:return i*t*3/r.components*r.byteLength;case vn:return i*t*4/r.components*r.byteLength;case Ko:return i*t*4/r.components*r.byteLength;case vs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xs:case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:case ao:return Math.max(i,16)*Math.max(t,8)/4;case io:case so:return Math.max(i,8)*Math.max(t,8)/2;case oo:case lo:case uo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:case ws:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Ro:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Io:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ts:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zd(i){switch(i){case en:case bu:return{byteLength:1,components:1};case Tr:case Eu:case Yn:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case In:case Xo:case An:return{byteLength:4,components:1};case wu:case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hd(i){const t=new WeakMap;function e(l,c){const h=l.array,f=l.usage,g=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,c,h){const f=c.array,g=c.updateRanges;if(i.bindBuffer(h,l),g.length===0)i.bufferSubData(h,0,f);else{g.sort((_,M)=>_.start-M.start);let d=0;for(let _=1;_<g.length;_++){const M=g[d],R=g[_];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++d,g[d]=R)}g.length=d+1;for(let _=0,M=g.length;_<M;_++){const R=g[_];i.bufferSubData(h,R.start*f.BYTES_PER_ELEMENT,f,R.start,R.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:r,remove:s,update:a}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,Np=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,zp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,r0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,a0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
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
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,f0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,g0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,M0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Vd,alphahash_pars_fragment:Gd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:qd,alphatest_pars_fragment:Yd,aomap_fragment:jd,aomap_pars_fragment:$d,batching_pars_vertex:Kd,batching_vertex:Jd,begin_vertex:Zd,beginnormal_vertex:Qd,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:ap,color_fragment:op,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:vp,colorspace_fragment:_p,colorspace_pars_fragment:xp,envmap_fragment:yp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Np,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Cp,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Lp,lights_pars_begin:Dp,lights_toon_fragment:Up,lights_toon_pars_fragment:Op,lights_phong_fragment:Fp,lights_phong_pars_fragment:Bp,lights_physical_fragment:kp,lights_physical_pars_fragment:zp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Gp,lightprobes_pars_fragment:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:jp,map_fragment:$p,map_pars_fragment:Kp,map_particle_fragment:Jp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:rm,morphtarget_vertex:sm,normal_fragment_begin:am,normal_fragment_maps:om,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:um,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Um,transmission_fragment:Om,transmission_pars_fragment:Fm,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:jm,depth_frag:$m,distance_vert:Km,distance_frag:Jm,equirect_vert:Zm,equirect_frag:Qm,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:r0,meshlambert_frag:s0,meshmatcap_vert:a0,meshmatcap_frag:o0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:u0,meshphong_frag:h0,meshphysical_vert:f0,meshphysical_frag:d0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:v0,shadow_vert:_0,shadow_frag:x0,sprite_vert:y0,sprite_frag:M0},Bt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new nt},probesMax:{value:new nt},probesResolution:{value:new nt}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Tn={basic:{uniforms:Xe([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Xe([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Xe([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Xe([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Xe([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new $t(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Xe([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Xe([Bt.points,Bt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Xe([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Xe([Bt.common,Bt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Xe([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Xe([Bt.sprite,Bt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:Xe([Bt.common,Bt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:Xe([Bt.lights,Bt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Tn.physical={uniforms:Xe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const hs={r:0,b:0,g:0},S0=new fe,nh=new Zt;nh.set(-1,0,0,0,1,0,0,0,1);function b0(i,t,e,n,r,s){const a=new $t(0);let l=r===!0?0:1,c,h,f=null,g=0,d=null;function _(N){let L=N.isScene===!0?N.background:null;if(L&&L.isTexture){const D=N.backgroundBlurriness>0;L=t.get(L,D)}return L}function M(N){let L=!1;const D=_(N);D===null?b(a,l):D&&D.isColor&&(b(D,1),L=!0);const J=i.xr.getEnvironmentBlendMode();J==="additive"?e.buffers.color.setClear(0,0,0,1,s):J==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(N,L){const D=_(L);D&&(D.isCubeTexture||D.mapping===Us)?(h===void 0&&(h=new rn(new Ur(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ar(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(J,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(L.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(nh),h.material.toneMapped=ae.getTransfer(D.colorSpace)!==he,(f!==D||g!==D.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=D,g=D.version,d=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new rn(new Ti(2,2),new Dn({name:"BackgroundMaterial",uniforms:ar(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=ae.getTransfer(D.colorSpace)!==he,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||g!==D.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=D,g=D.version,d=i.toneMapping),c.layers.enableAll(),N.unshift(c,c.geometry,c.material,0,0,null))}function b(N,L){N.getRGB(hs,Qu(i)),e.buffers.color.setClear(hs.r,hs.g,hs.b,L,s)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(N,L=1){a.set(N),l=L,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(N){l=N,b(a,l)},render:M,addToRenderList:R,dispose:x}}function E0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function l(W,et,at,lt,Q){let ft=!1;const mt=g(W,lt,at,et);s!==mt&&(s=mt,h(s.object)),ft=_(W,lt,at,Q),ft&&M(W,lt,at,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ft||a)&&(a=!1,D(W,et,at,lt),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(W){return i.bindVertexArray(W)}function f(W){return i.deleteVertexArray(W)}function g(W,et,at,lt){const Q=lt.wireframe===!0;let ft=n[et.id];ft===void 0&&(ft={},n[et.id]=ft);const mt=W.isInstancedMesh===!0?W.id:0;let Ct=ft[mt];Ct===void 0&&(Ct={},ft[mt]=Ct);let Nt=Ct[at.id];Nt===void 0&&(Nt={},Ct[at.id]=Nt);let y=Nt[Q];return y===void 0&&(y=d(c()),Nt[Q]=y),y}function d(W){const et=[],at=[],lt=[];for(let Q=0;Q<e;Q++)et[Q]=0,at[Q]=0,lt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:at,attributeDivisors:lt,object:W,attributes:{},index:null}}function _(W,et,at,lt){const Q=s.attributes,ft=et.attributes;let mt=0;const Ct=at.getAttributes();for(const Nt in Ct)if(Ct[Nt].location>=0){const T=Q[Nt];let o=ft[Nt];if(o===void 0&&(Nt==="instanceMatrix"&&W.instanceMatrix&&(o=W.instanceMatrix),Nt==="instanceColor"&&W.instanceColor&&(o=W.instanceColor)),T===void 0||T.attribute!==o||o&&T.data!==o.data)return!0;mt++}return s.attributesNum!==mt||s.index!==lt}function M(W,et,at,lt){const Q={},ft=et.attributes;let mt=0;const Ct=at.getAttributes();for(const Nt in Ct)if(Ct[Nt].location>=0){let T=ft[Nt];T===void 0&&(Nt==="instanceMatrix"&&W.instanceMatrix&&(T=W.instanceMatrix),Nt==="instanceColor"&&W.instanceColor&&(T=W.instanceColor));const o={};o.attribute=T,T&&T.data&&(o.data=T.data),Q[Nt]=o,mt++}s.attributes=Q,s.attributesNum=mt,s.index=lt}function R(){const W=s.newAttributes;for(let et=0,at=W.length;et<at;et++)W[et]=0}function b(W){x(W,0)}function x(W,et){const at=s.newAttributes,lt=s.enabledAttributes,Q=s.attributeDivisors;at[W]=1,lt[W]===0&&(i.enableVertexAttribArray(W),lt[W]=1),Q[W]!==et&&(i.vertexAttribDivisor(W,et),Q[W]=et)}function N(){const W=s.newAttributes,et=s.enabledAttributes;for(let at=0,lt=et.length;at<lt;at++)et[at]!==W[at]&&(i.disableVertexAttribArray(at),et[at]=0)}function L(W,et,at,lt,Q,ft,mt){mt===!0?i.vertexAttribIPointer(W,et,at,Q,ft):i.vertexAttribPointer(W,et,at,lt,Q,ft)}function D(W,et,at,lt){R();const Q=lt.attributes,ft=at.getAttributes(),mt=et.defaultAttributeValues;for(const Ct in ft){const Nt=ft[Ct];if(Nt.location>=0){let y=Q[Ct];if(y===void 0&&(Ct==="instanceMatrix"&&W.instanceMatrix&&(y=W.instanceMatrix),Ct==="instanceColor"&&W.instanceColor&&(y=W.instanceColor)),y!==void 0){const T=y.normalized,o=y.itemSize,u=t.get(y);if(u===void 0)continue;const m=u.buffer,v=u.type,p=u.bytesPerElement,E=v===i.INT||v===i.UNSIGNED_INT||y.gpuType===Xo;if(y.isInterleavedBufferAttribute){const w=y.data,C=w.stride,P=y.offset;if(w.isInstancedInterleavedBuffer){for(let H=0;H<Nt.locationSize;H++)x(Nt.location+H,w.meshPerAttribute);W.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let H=0;H<Nt.locationSize;H++)b(Nt.location+H);i.bindBuffer(i.ARRAY_BUFFER,m);for(let H=0;H<Nt.locationSize;H++)L(Nt.location+H,o/Nt.locationSize,v,T,C*p,(P+o/Nt.locationSize*H)*p,E)}else{if(y.isInstancedBufferAttribute){for(let w=0;w<Nt.locationSize;w++)x(Nt.location+w,y.meshPerAttribute);W.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=y.meshPerAttribute*y.count)}else for(let w=0;w<Nt.locationSize;w++)b(Nt.location+w);i.bindBuffer(i.ARRAY_BUFFER,m);for(let w=0;w<Nt.locationSize;w++)L(Nt.location+w,o/Nt.locationSize,v,T,o*p,o/Nt.locationSize*w*p,E)}}else if(mt!==void 0){const T=mt[Ct];if(T!==void 0)switch(T.length){case 2:i.vertexAttrib2fv(Nt.location,T);break;case 3:i.vertexAttrib3fv(Nt.location,T);break;case 4:i.vertexAttrib4fv(Nt.location,T);break;default:i.vertexAttrib1fv(Nt.location,T)}}}}N()}function J(){z();for(const W in n){const et=n[W];for(const at in et){const lt=et[at];for(const Q in lt){const ft=lt[Q];for(const mt in ft)f(ft[mt].object),delete ft[mt];delete lt[Q]}}delete n[W]}}function O(W){if(n[W.id]===void 0)return;const et=n[W.id];for(const at in et){const lt=et[at];for(const Q in lt){const ft=lt[Q];for(const mt in ft)f(ft[mt].object),delete ft[mt];delete lt[Q]}}delete n[W.id]}function X(W){for(const et in n){const at=n[et];for(const lt in at){const Q=at[lt];if(Q[W.id]===void 0)continue;const ft=Q[W.id];for(const mt in ft)f(ft[mt].object),delete ft[mt];delete Q[W.id]}}}function A(W){for(const et in n){const at=n[et],lt=W.isInstancedMesh===!0?W.id:0,Q=at[lt];if(Q!==void 0){for(const ft in Q){const mt=Q[ft];for(const Ct in mt)f(mt[Ct].object),delete mt[Ct];delete Q[ft]}delete at[lt],Object.keys(at).length===0&&delete n[et]}}}function z(){Y(),a=!0,s!==r&&(s=r,h(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:z,resetDefaultState:Y,dispose:J,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:X,initAttributes:R,enableAttribute:b,disableUnusedAttributes:N}}function w0(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function l(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];e.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function T0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const X=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(X){return!(X!==vn&&n.convert(X)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(X){const A=X===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(X!==en&&n.convert(X)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&X!==An&&!A)}function c(X){if(X==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=c(h);f!==h&&(Yt("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const g=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),J=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,maxSamples:J,samples:O}}function A0(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new _i,l=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){const _=g.length!==0||d||n!==0||r;return r=d,n=g.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,d){e=f(g,d,0)},this.setState=function(g,d,_){const M=g.clippingPlanes,R=g.clipIntersection,b=g.clipShadows,x=i.get(g);if(!r||M===null||M.length===0||s&&!b)s?f(null):h();else{const N=s?0:n,L=N*4;let D=x.clippingState||null;c.value=D,D=f(M,d,L,_);for(let J=0;J!==L;++J)D[J]=e[J];x.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(g,d,_,M){const R=g!==null?g.length:0;let b=null;if(R!==0){if(b=c.value,M!==!0||b===null){const x=_+R*4,N=d.matrixWorldInverse;l.getNormalMatrix(N),(b===null||b.length<x)&&(b=new Float32Array(x));for(let L=0,D=_;L!==R;++L,D+=4)a.copy(g[L]).applyMatrix4(N,l),a.normal.toArray(b,D),b[D+3]=a.constant}c.value=b,c.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,b}}const ci=4,lc=[.125,.215,.35,.446,.526,.582],xi=20,C0=256,dr=new Bs,cc=new $t;let xa=null,ya=0,Ma=0,Sa=!1;const R0=new nt;class uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:l=R0}=s;xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xa,ya,Ma),this._renderer.xr.enabled=Sa,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Yn,format:vn,colorSpace:As,depthBuffer:!1},r=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P0(s)),this._blurMaterial=L0(s,t,e),this._ggxMaterial=I0(s,t,e)}return r}_compileMaterial(t){const e=new rn(new De,t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,r,s){const c=new je(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,_=g.toneMapping;g.getClearColor(cc),g.toneMapping=Cn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new Ur,new nl({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,b=R.material;let x=!1;const N=t.background;N?N.isColor&&(b.color.copy(N),t.background=null,x=!0):(b.color.copy(cc),x=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(c.up.set(0,h[L],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[L],s.y,s.z)):D===1?(c.up.set(0,0,h[L]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[L],s.z)):(c.up.set(0,h[L],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[L]));const J=this._cubeSize;$i(r,D*J,L>2?J:0,J,J),g.setRenderTarget(r),x&&g.render(R,c),g.render(t,c)}g.toneMapping=_,g.autoClear=d,t.background=N}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===bi||t.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=t;const c=this._cubeSize;$i(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const c=a.uniforms,h=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-f*f),d=0+h*1.25,_=g*d,{_lodMax:M}=this,R=this._sizeLods[n],b=3*R*(n>M-ci?n-M+ci:0),x=4*(this._cubeSize-R);c.envMap.value=t.texture,c.roughness.value=_,c.mipInt.value=M-e,$i(s,b,x,3*R,2*R),r.setRenderTarget(s),r.render(l,dr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=M-n,$i(t,b,x,3*R,2*R),r.setRenderTarget(t),r.render(l,dr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&oe("blur direction must be either latitudinal or longitudinal!");const f=3,g=this._lodMeshes[r];g.material=h;const d=h.uniforms,_=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*xi-1),R=s/M,b=isFinite(s)?1+Math.floor(f*R):xi;b>xi&&Yt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${xi}`);const x=[];let N=0;for(let X=0;X<xi;++X){const A=X/R,z=Math.exp(-A*A/2);x.push(z),X===0?N+=z:X<b&&(N+=2*z)}for(let X=0;X<x.length;X++)x[X]=x[X]/N;d.envMap.value=t.texture,d.samples.value=b,d.weights.value=x,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:L}=this;d.dTheta.value=M,d.mipInt.value=L-n;const D=this._sizeLods[r],J=3*D*(r>L-ci?r-L+ci:0),O=4*(this._cubeSize-D);$i(e,J,O,3*D,2*D),c.setRenderTarget(e),c.render(g,dr)}}function P0(i){const t=[],e=[],n=[];let r=i;const s=i-ci+1+lc.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let c=1/l;a>i-ci?c=lc[a-i+ci-1]:a===0&&(c=0),e.push(c);const h=1/(l-2),f=-h,g=1+h,d=[f,f,g,f,g,g,f,f,g,g,f,g],_=6,M=6,R=3,b=2,x=1,N=new Float32Array(R*M*_),L=new Float32Array(b*M*_),D=new Float32Array(x*M*_);for(let O=0;O<_;O++){const X=O%3*2/3-1,A=O>2?0:-1,z=[X,A,0,X+2/3,A,0,X+2/3,A+1,0,X,A,0,X+2/3,A+1,0,X,A+1,0];N.set(z,R*M*O),L.set(d,b*M*O);const Y=[O,O,O,O,O,O];D.set(Y,x*M*O)}const J=new De;J.setAttribute("position",new nn(N,R)),J.setAttribute("uv",new nn(L,b)),J.setAttribute("faceIndex",new nn(D,x)),n.push(new rn(J,null)),r>ci&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function hc(i,t,e){const n=new Pn(i,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function I0(i,t,e){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function L0(i,t,e){const n=new Float32Array(xi),r=new nt(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dc(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ks(){return`

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
	`}class ih extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Bu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ur(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Xn});s.uniforms.tEquirect.value=e;const a=new rn(r,s),l=e.minFilter;return e.minFilter===yi&&(e.minFilter=Ve),new Nd(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function D0(i){let t=new WeakMap,e=new WeakMap,n=null;function r(d,_=!1){return d==null?null:_?a(d):s(d)}function s(d){if(d&&d.isTexture){const _=d.mapping;if(_===Hs||_===Vs)if(t.has(d)){const M=t.get(d).texture;return l(M,d.mapping)}else{const M=d.image;if(M&&M.height>0){const R=new ih(M.height);return R.fromEquirectangularTexture(i,d),t.set(d,R),d.addEventListener("dispose",h),l(R.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const _=d.mapping,M=_===Hs||_===Vs,R=_===bi||_===nr;if(M||R){let b=e.get(d);const x=b!==void 0?b.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new uc(i)),b=M?n.fromEquirectangular(d,b):n.fromCubemap(d,b),b.texture.pmremVersion=d.pmremVersion,e.set(d,b),b.texture;if(b!==void 0)return b.texture;{const N=d.image;return M&&N&&N.height>0||R&&N&&c(N)?(n===null&&(n=new uc(i)),b=M?n.fromEquirectangular(d):n.fromCubemap(d),b.texture.pmremVersion=d.pmremVersion,e.set(d,b),d.addEventListener("dispose",f),b.texture):null}}}return d}function l(d,_){return _===Hs?d.mapping=bi:_===Vs&&(d.mapping=nr),d}function c(d){let _=0;const M=6;for(let R=0;R<M;R++)d[R]!==void 0&&_++;return _===M}function h(d){const _=d.target;_.removeEventListener("dispose",h);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function f(d){const _=d.target;_.removeEventListener("dispose",f);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function N0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Uo("WebGLRenderer: "+n+" extension not supported."),r}}}function U0(i,t,e,n){const r={},s=new WeakMap;function a(g){const d=g.target;d.index!==null&&t.remove(d.index);for(const M in d.attributes)t.remove(d.attributes[M]);d.removeEventListener("dispose",a),delete r[d.id];const _=s.get(d);_&&(t.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(g,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(g){const d=g.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER)}function h(g){const d=[],_=g.index,M=g.attributes.position;let R=0;if(M===void 0)return;if(_!==null){const N=_.array;R=_.version;for(let L=0,D=N.length;L<D;L+=3){const J=N[L+0],O=N[L+1],X=N[L+2];d.push(J,O,O,X,X,J)}}else{const N=M.array;R=M.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const J=L+0,O=L+1,X=L+2;d.push(J,O,O,X,X,J)}}const b=new(M.count>=65535?Uu:Nu)(d,1);b.version=R;const x=s.get(g);x&&t.remove(x),s.set(g,b)}function f(g){const d=s.get(g);if(d){const _=g.index;_!==null&&d.version<_.version&&h(g)}else h(g);return s.get(g)}return{get:l,update:c,getWireframeAttribute:f}}function O0(i,t,e){let n;function r(g){n=g}let s,a;function l(g){s=g.type,a=g.bytesPerElement}function c(g,d){i.drawElements(n,d,s,g*a),e.update(d,n,1)}function h(g,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,g*a,_),e.update(d,n,_))}function f(g,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,g,0,_);let R=0;for(let b=0;b<_;b++)R+=d[b];e.update(R,n,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function F0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:oe("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function B0(i,t,e){const n=new WeakMap,r=new be;function s(a,l,c){const h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0;let d=n.get(l);if(d===void 0||d.count!==g){let z=function(){X.dispose(),n.delete(l),l.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();const _=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,R=l.morphAttributes.color!==void 0,b=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],N=l.morphAttributes.color||[];let L=0;_===!0&&(L=1),M===!0&&(L=2),R===!0&&(L=3);let D=l.attributes.position.count*L,J=1;D>t.maxTextureSize&&(J=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const O=new Float32Array(D*J*4*g),X=new Iu(O,D,J,g);X.type=An,X.needsUpdate=!0;const A=L*4;for(let Y=0;Y<g;Y++){const W=b[Y],et=x[Y],at=N[Y],lt=D*J*4*Y;for(let Q=0;Q<W.count;Q++){const ft=Q*A;_===!0&&(r.fromBufferAttribute(W,Q),O[lt+ft+0]=r.x,O[lt+ft+1]=r.y,O[lt+ft+2]=r.z,O[lt+ft+3]=0),M===!0&&(r.fromBufferAttribute(et,Q),O[lt+ft+4]=r.x,O[lt+ft+5]=r.y,O[lt+ft+6]=r.z,O[lt+ft+7]=0),R===!0&&(r.fromBufferAttribute(at,Q),O[lt+ft+8]=r.x,O[lt+ft+9]=r.y,O[lt+ft+10]=r.z,O[lt+ft+11]=at.itemSize===4?r.w:1)}}d={count:g,texture:X,size:new Ft(D,J)},n.set(l,d),l.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let R=0;R<h.length;R++)_+=h[R];const M=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function k0(i,t,e,n,r){let s=new WeakMap;function a(h){const f=r.render.frame,g=h.geometry,d=t.get(h,g);if(s.get(d)!==f&&(t.update(d),s.set(d,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==f&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return d}function l(){s=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}const z0={[mu]:"LINEAR_TONE_MAPPING",[gu]:"REINHARD_TONE_MAPPING",[vu]:"CINEON_TONE_MAPPING",[_u]:"ACES_FILMIC_TONE_MAPPING",[yu]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function H0(i,t,e,n,r){const s=new Pn(t,e,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new rr(t,e):void 0}),a=new Pn(t,e,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new De;l.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pe([0,2,0,0,2,0],2));const c=new bd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new rn(l,c),f=new Bs(-1,1,1,-1,0,1);let g=null,d=null,_=!1,M,R=null,b=[],x=!1;this.setSize=function(N,L){s.setSize(N,L),a.setSize(N,L);for(let D=0;D<b.length;D++){const J=b[D];J.setSize&&J.setSize(N,L)}},this.setEffects=function(N){b=N,x=b.length>0&&b[0].isRenderPass===!0;const L=s.width,D=s.height;for(let J=0;J<b.length;J++){const O=b[J];O.setSize&&O.setSize(L,D)}},this.begin=function(N,L){if(_||N.toneMapping===Cn&&b.length===0)return!1;if(R=L,L!==null){const D=L.width,J=L.height;(s.width!==D||s.height!==J)&&this.setSize(D,J)}return x===!1&&N.setRenderTarget(s),M=N.toneMapping,N.toneMapping=Cn,!0},this.hasRenderPass=function(){return x},this.end=function(N,L){N.toneMapping=M,_=!0;let D=s,J=a;for(let O=0;O<b.length;O++){const X=b[O];if(X.enabled!==!1&&(X.render(N,J,D,L),X.needsSwap!==!1)){const A=D;D=J,J=A}}if(g!==N.outputColorSpace||d!==N.toneMapping){g=N.outputColorSpace,d=N.toneMapping,c.defines={},ae.getTransfer(g)===he&&(c.defines.SRGB_TRANSFER="");const O=z0[d];O&&(c.defines[O]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=D.texture,N.setRenderTarget(R),N.render(h,f),R=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),l.dispose(),c.dispose()}}const rh=new Oe,Ho=new rr(1,1),sh=new Iu,ah=new _f,oh=new Bu,pc=[],mc=[],gc=new Float32Array(16),vc=new Float32Array(9),_c=new Float32Array(4);function or(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=pc[r];if(s===void 0&&(s=new Float32Array(r),pc[r]=s),t!==0){n.toArray(s,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(s,l)}return s}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zs(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;_c.set(n),i.uniformMatrix2fv(this.addr,!1,_c),Le(e,n)}}function Y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),Le(e,n)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Le(e,n)}}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function ig(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ho.compareFunction=e.isReversedDepthBuffer()?Zo:Jo,s=Ho):s=rh,e.setTexture2D(t||s,r)}function rg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ah,r)}function sg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||oh,r)}function ag(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||sh,r)}function og(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return j0;case 5124:case 35670:return $0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return Z0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(i,t){i.uniform1fv(this.addr,t)}function cg(i,t){const e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){const e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){const e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){const e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dg(i,t){const e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pg(i,t){const e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mg(i,t){i.uniform1iv(this.addr,t)}function gg(i,t){i.uniform2iv(this.addr,t)}function vg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function xg(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ho:a=rh;for(let l=0;l!==r;++l)e.setTexture2D(t[l]||a,s[l])}function Eg(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ah,s[a])}function wg(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||oh,s[a])}function Tg(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||sh,s[a])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return hg;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return yg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=og(e.type)}}class Rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}}class Pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function xc(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){const n=i.name,r=n.length;for(ba.lastIndex=0;;){const s=ba.exec(n),a=ba.lastIndex;let l=s[1];const c=s[2]==="]",h=s[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===r){xc(e,h===void 0?new Cg(l,i,t):new Rg(l,i,t));break}else{let g=e.map[l];g===void 0&&(g=new Pg(l),xc(e,g)),e=g}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);Ig(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const l=e[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lg=37297;let Dg=0;function Ng(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const Mc=new Zt;function Ug(i){ae._getMatrix(Mc,ae.workingColorSpace,i);const t=`mat3( ${Mc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Cs:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Ng(i.getShaderSource(t),l)}else return s}function Og(i,t){const e=Ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Fg={[mu]:"Linear",[gu]:"Reinhard",[vu]:"Cineon",[_u]:"ACESFilmic",[yu]:"AgX",[Mu]:"Neutral",[xu]:"Custom"};function Bg(i,t){const e=Fg[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new nt;function kg(){ae.getLuminanceCoefficients(fs);const i=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Hg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function xr(i){return i!==""}function bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(Gg,Xg)}const Wg=new Map;function Xg(i,t){let e=ne[t];if(e===void 0){const n=Wg.get(t);if(n!==void 0)e=ne[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}const qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(qg,Yg)}function Yg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const jg={[gs]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function $g(i){return jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kg={[bi]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function Jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zg={[nr]:"ENVMAP_MODE_REFRACTION"};function Qg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tv={[Ns]:"ENVMAP_BLENDING_MULTIPLY",[Uh]:"ENVMAP_BLENDING_MIX",[Oh]:"ENVMAP_BLENDING_ADD"};function ev(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tv[i.combine]||"ENVMAP_BLENDING_NONE"}function nv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function iv(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,l=e.fragmentShader;const c=$g(e),h=Jg(e),f=Qg(e),g=ev(e),d=nv(e),_=zg(e),M=Hg(s),R=r.createProgram();let b,x,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(xr).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(xr).join(`
`),x.length>0&&(x+=`
`)):(b=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),x=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Og("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=Vo(a),a=bc(a,e),a=Ec(a,e),l=Vo(l),l=bc(l,e),l=Ec(l,e),a=wc(a),l=wc(l),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,b=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=N+b+a,D=N+x+l,J=yc(r,r.VERTEX_SHADER,L),O=yc(r,r.FRAGMENT_SHADER,D);r.attachShader(R,J),r.attachShader(R,O),e.index0AttributeName!==void 0?r.bindAttribLocation(R,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(R,0,"position"),r.linkProgram(R);function X(W){if(i.debug.checkShaderErrors){const et=r.getProgramInfoLog(R)||"",at=r.getShaderInfoLog(J)||"",lt=r.getShaderInfoLog(O)||"",Q=et.trim(),ft=at.trim(),mt=lt.trim();let Ct=!0,Nt=!0;if(r.getProgramParameter(R,r.LINK_STATUS)===!1)if(Ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,R,J,O);else{const y=Sc(r,J,"vertex"),T=Sc(r,O,"fragment");oe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(R,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+Q+`
`+y+`
`+T)}else Q!==""?Yt("WebGLProgram: Program Info Log:",Q):(ft===""||mt==="")&&(Nt=!1);Nt&&(W.diagnostics={runnable:Ct,programLog:Q,vertexShader:{log:ft,prefix:b},fragmentShader:{log:mt,prefix:x}})}r.deleteShader(J),r.deleteShader(O),A=new Ss(r,R),z=Vg(r,R)}let A;this.getUniforms=function(){return A===void 0&&X(this),A};let z;this.getAttributes=function(){return z===void 0&&X(this),z};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(R,Lg)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(R),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=J,this.fragmentShader=O,this}let rv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new av(t),e.set(t,n)),n}}class av{constructor(t){this.id=rv++,this.code=t,this.usedTimes=0}}function ov(i){return i===Ei||i===ws||i===Ts}function lv(i,t,e,n,r,s){const a=new el,l=new sv,c=new Set,h=[],f=new Map,g=n.logarithmicDepthBuffer;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return c.add(A),A===0?"uv":`uv${A}`}function R(A,z,Y,W,et,at){const lt=W.fog,Q=et.geometry,ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Ct=t.get(A.envMap||ft,mt),Nt=Ct&&Ct.mapping===Us?Ct.image.height:null,y=_[A.type];A.precision!==null&&(d=n.getMaxPrecision(A.precision),d!==A.precision&&Yt("WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const T=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,o=T!==void 0?T.length:0;let u=0;Q.morphAttributes.position!==void 0&&(u=1),Q.morphAttributes.normal!==void 0&&(u=2),Q.morphAttributes.color!==void 0&&(u=3);let m,v,p,E;if(y){const jt=Tn[y];m=jt.vertexShader,v=jt.fragmentShader}else m=A.vertexShader,v=A.fragmentShader,l.update(A),p=l.getVertexShaderID(A),E=l.getFragmentShaderID(A);const w=i.getRenderTarget(),C=i.state.buffers.depth.getReversed(),P=et.isInstancedMesh===!0,H=et.isBatchedMesh===!0,K=!!A.map,V=!!A.matcap,F=!!Ct,G=!!A.aoMap,k=!!A.lightMap,q=!!A.bumpMap,j=!!A.normalMap,ct=!!A.displacementMap,B=!!A.emissiveMap,ut=!!A.metalnessMap,vt=!!A.roughnessMap,_t=A.anisotropy>0,it=A.clearcoat>0,Tt=A.dispersion>0,I=A.iridescence>0,S=A.sheen>0,tt=A.transmission>0,st=_t&&!!A.anisotropyMap,ht=it&&!!A.clearcoatMap,Et=it&&!!A.clearcoatNormalMap,Mt=it&&!!A.clearcoatRoughnessMap,rt=I&&!!A.iridescenceMap,dt=I&&!!A.iridescenceThicknessMap,wt=S&&!!A.sheenColorMap,Rt=S&&!!A.sheenRoughnessMap,St=!!A.specularMap,bt=!!A.specularColorMap,Lt=!!A.specularIntensityMap,Dt=tt&&!!A.transmissionMap,Ot=tt&&!!A.thicknessMap,Z=!!A.gradientMap,Pt=!!A.alphaMap,xt=A.alphaTest>0,It=!!A.alphaHash,Ut=!!A.extensions;let At=Cn;A.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=i.toneMapping);const Ht={shaderID:y,shaderType:A.type,shaderName:A.name,vertexShader:m,fragmentShader:v,defines:A.defines,customVertexShaderID:p,customFragmentShaderID:E,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:H,batchingColor:H&&et._colorsTexture!==null,instancing:P,instancingColor:P&&et.instanceColor!==null,instancingMorph:P&&et.morphTexture!==null,outputColorSpace:w===null?i.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:K,matcap:V,envMap:F,envMapMode:F&&Ct.mapping,envMapCubeUVHeight:Nt,aoMap:G,lightMap:k,bumpMap:q,normalMap:j,displacementMap:ct,emissiveMap:B,normalMapObjectSpace:j&&A.normalMapType===kh,normalMapTangentSpace:j&&A.normalMapType===fi,packedNormalMap:j&&A.normalMapType===fi&&ov(A.normalMap.format),metalnessMap:ut,roughnessMap:vt,anisotropy:_t,anisotropyMap:st,clearcoat:it,clearcoatMap:ht,clearcoatNormalMap:Et,clearcoatRoughnessMap:Mt,dispersion:Tt,iridescence:I,iridescenceMap:rt,iridescenceThicknessMap:dt,sheen:S,sheenColorMap:wt,sheenRoughnessMap:Rt,specularMap:St,specularColorMap:bt,specularIntensityMap:Lt,transmission:tt,transmissionMap:Dt,thicknessMap:Ot,gradientMap:Z,opaque:A.transparent===!1&&A.blending===Qi&&A.alphaToCoverage===!1,alphaMap:Pt,alphaTest:xt,alphaHash:It,combine:A.combine,mapUv:K&&M(A.map.channel),aoMapUv:G&&M(A.aoMap.channel),lightMapUv:k&&M(A.lightMap.channel),bumpMapUv:q&&M(A.bumpMap.channel),normalMapUv:j&&M(A.normalMap.channel),displacementMapUv:ct&&M(A.displacementMap.channel),emissiveMapUv:B&&M(A.emissiveMap.channel),metalnessMapUv:ut&&M(A.metalnessMap.channel),roughnessMapUv:vt&&M(A.roughnessMap.channel),anisotropyMapUv:st&&M(A.anisotropyMap.channel),clearcoatMapUv:ht&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Et&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&M(A.sheenRoughnessMap.channel),specularMapUv:St&&M(A.specularMap.channel),specularColorMapUv:bt&&M(A.specularColorMap.channel),specularIntensityMapUv:Lt&&M(A.specularIntensityMap.channel),transmissionMapUv:Dt&&M(A.transmissionMap.channel),thicknessMapUv:Ot&&M(A.thicknessMap.channel),alphaMapUv:Pt&&M(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(j||_t),vertexNormals:!!Q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!Q.attributes.uv&&(K||Pt),fog:!!lt,useFog:A.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Q.attributes.normal===void 0&&j===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:C,skinning:et.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:o,morphTextureStride:u,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:at.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:K&&A.map.isVideoTexture===!0&&ae.getTransfer(A.map.colorSpace)===he,decodeVideoTextureEmissive:B&&A.emissiveMap.isVideoTexture===!0&&ae.getTransfer(A.emissiveMap.colorSpace)===he,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Vn,flipSided:A.side===$e,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ut&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&A.extensions.multiDraw===!0||H)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function b(A){const z=[];if(A.shaderID?z.push(A.shaderID):(z.push(A.customVertexShaderID),z.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)z.push(Y),z.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(x(z,A),N(z,A),z.push(i.outputColorSpace)),z.push(A.customProgramCacheKey),z.join()}function x(A,z){A.push(z.precision),A.push(z.outputColorSpace),A.push(z.envMapMode),A.push(z.envMapCubeUVHeight),A.push(z.mapUv),A.push(z.alphaMapUv),A.push(z.lightMapUv),A.push(z.aoMapUv),A.push(z.bumpMapUv),A.push(z.normalMapUv),A.push(z.displacementMapUv),A.push(z.emissiveMapUv),A.push(z.metalnessMapUv),A.push(z.roughnessMapUv),A.push(z.anisotropyMapUv),A.push(z.clearcoatMapUv),A.push(z.clearcoatNormalMapUv),A.push(z.clearcoatRoughnessMapUv),A.push(z.iridescenceMapUv),A.push(z.iridescenceThicknessMapUv),A.push(z.sheenColorMapUv),A.push(z.sheenRoughnessMapUv),A.push(z.specularMapUv),A.push(z.specularColorMapUv),A.push(z.specularIntensityMapUv),A.push(z.transmissionMapUv),A.push(z.thicknessMapUv),A.push(z.combine),A.push(z.fogExp2),A.push(z.sizeAttenuation),A.push(z.morphTargetsCount),A.push(z.morphAttributeCount),A.push(z.numDirLights),A.push(z.numPointLights),A.push(z.numSpotLights),A.push(z.numSpotLightMaps),A.push(z.numHemiLights),A.push(z.numRectAreaLights),A.push(z.numDirLightShadows),A.push(z.numPointLightShadows),A.push(z.numSpotLightShadows),A.push(z.numSpotLightShadowsWithMaps),A.push(z.numLightProbes),A.push(z.shadowMapType),A.push(z.toneMapping),A.push(z.numClippingPlanes),A.push(z.numClipIntersection),A.push(z.depthPacking)}function N(A,z){a.disableAll(),z.instancing&&a.enable(0),z.instancingColor&&a.enable(1),z.instancingMorph&&a.enable(2),z.matcap&&a.enable(3),z.envMap&&a.enable(4),z.normalMapObjectSpace&&a.enable(5),z.normalMapTangentSpace&&a.enable(6),z.clearcoat&&a.enable(7),z.iridescence&&a.enable(8),z.alphaTest&&a.enable(9),z.vertexColors&&a.enable(10),z.vertexAlphas&&a.enable(11),z.vertexUv1s&&a.enable(12),z.vertexUv2s&&a.enable(13),z.vertexUv3s&&a.enable(14),z.vertexTangents&&a.enable(15),z.anisotropy&&a.enable(16),z.alphaHash&&a.enable(17),z.batching&&a.enable(18),z.dispersion&&a.enable(19),z.batchingColor&&a.enable(20),z.gradientMap&&a.enable(21),z.packedNormalMap&&a.enable(22),z.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),z.fog&&a.enable(0),z.useFog&&a.enable(1),z.flatShading&&a.enable(2),z.logarithmicDepthBuffer&&a.enable(3),z.reversedDepthBuffer&&a.enable(4),z.skinning&&a.enable(5),z.morphTargets&&a.enable(6),z.morphNormals&&a.enable(7),z.morphColors&&a.enable(8),z.premultipliedAlpha&&a.enable(9),z.shadowMapEnabled&&a.enable(10),z.doubleSided&&a.enable(11),z.flipSided&&a.enable(12),z.useDepthPacking&&a.enable(13),z.dithering&&a.enable(14),z.transmission&&a.enable(15),z.sheen&&a.enable(16),z.opaque&&a.enable(17),z.pointsUvs&&a.enable(18),z.decodeVideoTexture&&a.enable(19),z.decodeVideoTextureEmissive&&a.enable(20),z.alphaToCoverage&&a.enable(21),z.numLightProbeGrids>0&&a.enable(22),A.push(a.mask)}function L(A){const z=_[A.type];let Y;if(z){const W=Tn[z];Y=yd.clone(W.uniforms)}else Y=A.uniforms;return Y}function D(A,z){let Y=f.get(z);return Y!==void 0?++Y.usedTimes:(Y=new iv(i,z,A,r),h.push(Y),f.set(z,Y)),Y}function J(A){if(--A.usedTimes===0){const z=h.indexOf(A);h[z]=h[h.length-1],h.pop(),f.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function X(){l.dispose()}return{getParameters:R,getProgramCacheKey:b,getUniforms:L,acquireProgram:D,releaseProgram:J,releaseShaderCache:O,programs:h,dispose:X}}function cv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function uv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function l(d,_,M,R,b,x){let N=i[t];return N===void 0?(N={id:d.id,object:d,geometry:_,material:M,materialVariant:a(d),groupOrder:R,renderOrder:d.renderOrder,z:b,group:x},i[t]=N):(N.id=d.id,N.object=d,N.geometry=_,N.material=M,N.materialVariant=a(d),N.groupOrder=R,N.renderOrder=d.renderOrder,N.z=b,N.group=x),t++,N}function c(d,_,M,R,b,x){const N=l(d,_,M,R,b,x);M.transmission>0?n.push(N):M.transparent===!0?r.push(N):e.push(N)}function h(d,_,M,R,b,x){const N=l(d,_,M,R,b,x);M.transmission>0?n.unshift(N):M.transparent===!0?r.unshift(N):e.unshift(N)}function f(d,_){e.length>1&&e.sort(d||uv),n.length>1&&n.sort(_||Ac),r.length>1&&r.sort(_||Ac)}function g(){for(let d=t,_=i.length;d<_;d++){const M=i[d];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:h,finish:g,sort:f}}function hv(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Cc,i.set(n,[a])):r>=s.length?(a=new Cc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new $t};break;case"SpotLight":e={position:new nt,direction:new nt,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return i[t.id]=e,e}}}function dv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pv=0;function mv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gv(i){const t=new fv,e=dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new nt);const r=new nt,s=new fe,a=new fe;function l(h){let f=0,g=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let _=0,M=0,R=0,b=0,x=0,N=0,L=0,D=0,J=0,O=0,X=0;h.sort(mv);for(let z=0,Y=h.length;z<Y;z++){const W=h[z],et=W.color,at=W.intensity,lt=W.distance;let Q=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Ei?Q=W.shadow.map.texture:Q=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)f+=et.r*at,g+=et.g*at,d+=et.b*at;else if(W.isLightProbe){for(let ft=0;ft<9;ft++)n.probe[ft].addScaledVector(W.sh.coefficients[ft],at);X++}else if(W.isDirectionalLight){const ft=t.get(W);if(ft.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const mt=W.shadow,Ct=e.get(W);Ct.shadowIntensity=mt.intensity,Ct.shadowBias=mt.bias,Ct.shadowNormalBias=mt.normalBias,Ct.shadowRadius=mt.radius,Ct.shadowMapSize=mt.mapSize,n.directionalShadow[_]=Ct,n.directionalShadowMap[_]=Q,n.directionalShadowMatrix[_]=W.shadow.matrix,N++}n.directional[_]=ft,_++}else if(W.isSpotLight){const ft=t.get(W);ft.position.setFromMatrixPosition(W.matrixWorld),ft.color.copy(et).multiplyScalar(at),ft.distance=lt,ft.coneCos=Math.cos(W.angle),ft.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ft.decay=W.decay,n.spot[R]=ft;const mt=W.shadow;if(W.map&&(n.spotLightMap[J]=W.map,J++,mt.updateMatrices(W),W.castShadow&&O++),n.spotLightMatrix[R]=mt.matrix,W.castShadow){const Ct=e.get(W);Ct.shadowIntensity=mt.intensity,Ct.shadowBias=mt.bias,Ct.shadowNormalBias=mt.normalBias,Ct.shadowRadius=mt.radius,Ct.shadowMapSize=mt.mapSize,n.spotShadow[R]=Ct,n.spotShadowMap[R]=Q,D++}R++}else if(W.isRectAreaLight){const ft=t.get(W);ft.color.copy(et).multiplyScalar(at),ft.halfWidth.set(W.width*.5,0,0),ft.halfHeight.set(0,W.height*.5,0),n.rectArea[b]=ft,b++}else if(W.isPointLight){const ft=t.get(W);if(ft.color.copy(W.color).multiplyScalar(W.intensity),ft.distance=W.distance,ft.decay=W.decay,W.castShadow){const mt=W.shadow,Ct=e.get(W);Ct.shadowIntensity=mt.intensity,Ct.shadowBias=mt.bias,Ct.shadowNormalBias=mt.normalBias,Ct.shadowRadius=mt.radius,Ct.shadowMapSize=mt.mapSize,Ct.shadowCameraNear=mt.camera.near,Ct.shadowCameraFar=mt.camera.far,n.pointShadow[M]=Ct,n.pointShadowMap[M]=Q,n.pointShadowMatrix[M]=W.shadow.matrix,L++}n.point[M]=ft,M++}else if(W.isHemisphereLight){const ft=t.get(W);ft.skyColor.copy(W.color).multiplyScalar(at),ft.groundColor.copy(W.groundColor).multiplyScalar(at),n.hemi[x]=ft,x++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==_||A.pointLength!==M||A.spotLength!==R||A.rectAreaLength!==b||A.hemiLength!==x||A.numDirectionalShadows!==N||A.numPointShadows!==L||A.numSpotShadows!==D||A.numSpotMaps!==J||A.numLightProbes!==X)&&(n.directional.length=_,n.spot.length=R,n.rectArea.length=b,n.point.length=M,n.hemi.length=x,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=D+J-O,n.spotLightMap.length=J,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=X,A.directionalLength=_,A.pointLength=M,A.spotLength=R,A.rectAreaLength=b,A.hemiLength=x,A.numDirectionalShadows=N,A.numPointShadows=L,A.numSpotShadows=D,A.numSpotMaps=J,A.numLightProbes=X,n.version=pv++)}function c(h,f){let g=0,d=0,_=0,M=0,R=0;const b=f.matrixWorldInverse;for(let x=0,N=h.length;x<N;x++){const L=h[x];if(L.isDirectionalLight){const D=n.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(b),g++}else if(L.isSpotLight){const D=n.spot[_];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(b),D.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(b),_++}else if(L.isRectAreaLight){const D=n.rectArea[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(b),a.identity(),s.copy(L.matrixWorld),s.premultiply(b),a.extractRotation(s),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),M++}else if(L.isPointLight){const D=n.point[d];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(b),d++}else if(L.isHemisphereLight){const D=n.hemi[R];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(b),R++}}}return{setup:l,setupView:c,state:n}}function Rc(i){const t=new gv(i),e=[],n=[],r=[];function s(d){g.camera=d,e.length=0,n.length=0,r.length=0}function a(d){e.push(d)}function l(d){n.push(d)}function c(d){r.push(d)}function h(){t.setup(e)}function f(d){t.setupView(e,d)}const g={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:g,setupLights:h,setupLightsView:f,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function vv(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new Rc(i),t.set(r,[l])):s>=a.length?(l=new Rc(i),a.push(l)):l=a[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yv=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],Mv=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],Pc=new fe,pr=new nt,Ea=new nt;function Sv(i,t,e){let n=new Fs;const r=new Ft,s=new Ft,a=new be,l=new Ed,c=new wd,h={},f=e.maxTextureSize,g={[hi]:$e,[$e]:hi,[Vn]:Vn},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:_v,fragmentShader:xv}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const M=new De;M.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new rn(M,d),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let x=this.type;this.render=function(O,X,A){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||O.length===0)return;this.type===_h&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gs);const z=i.getRenderTarget(),Y=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),et=i.state;et.setBlending(Xn),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const at=x!==this.type;at&&X.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(Q=>Q.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,Q=O.length;lt<Q;lt++){const ft=O[lt],mt=ft.shadow;if(mt===void 0){Yt("WebGLShadowMap:",ft,"has no shadow.");continue}if(mt.autoUpdate===!1&&mt.needsUpdate===!1)continue;r.copy(mt.mapSize);const Ct=mt.getFrameExtents();r.multiply(Ct),s.copy(mt.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Ct.x),r.x=s.x*Ct.x,mt.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Ct.y),r.y=s.y*Ct.y,mt.mapSize.y=s.y));const Nt=i.state.buffers.depth.getReversed();if(mt.camera._reversedDepth=Nt,mt.map===null||at===!0){if(mt.map!==null&&(mt.map.depthTexture!==null&&(mt.map.depthTexture.dispose(),mt.map.depthTexture=null),mt.map.dispose()),this.type===vr){if(ft.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}mt.map=new Pn(r.x,r.y,{format:Ei,type:Yn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),mt.map.texture.name=ft.name+".shadowMap",mt.map.depthTexture=new rr(r.x,r.y,An),mt.map.depthTexture.name=ft.name+".shadowMapDepth",mt.map.depthTexture.format=jn,mt.map.depthTexture.compareFunction=null,mt.map.depthTexture.minFilter=Pe,mt.map.depthTexture.magFilter=Pe}else ft.isPointLight?(mt.map=new ih(r.x),mt.map.depthTexture=new zf(r.x,In)):(mt.map=new Pn(r.x,r.y),mt.map.depthTexture=new rr(r.x,r.y,In)),mt.map.depthTexture.name=ft.name+".shadowMap",mt.map.depthTexture.format=jn,this.type===gs?(mt.map.depthTexture.compareFunction=Nt?Zo:Jo,mt.map.depthTexture.minFilter=Ve,mt.map.depthTexture.magFilter=Ve):(mt.map.depthTexture.compareFunction=null,mt.map.depthTexture.minFilter=Pe,mt.map.depthTexture.magFilter=Pe);mt.camera.updateProjectionMatrix()}const y=mt.map.isWebGLCubeRenderTarget?6:1;for(let T=0;T<y;T++){if(mt.map.isWebGLCubeRenderTarget)i.setRenderTarget(mt.map,T),i.clear();else{T===0&&(i.setRenderTarget(mt.map),i.clear());const o=mt.getViewport(T);a.set(s.x*o.x,s.y*o.y,s.x*o.z,s.y*o.w),et.viewport(a)}if(ft.isPointLight){const o=mt.camera,u=mt.matrix,m=ft.distance||o.far;m!==o.far&&(o.far=m,o.updateProjectionMatrix()),pr.setFromMatrixPosition(ft.matrixWorld),o.position.copy(pr),Ea.copy(o.position),Ea.add(yv[T]),o.up.copy(Mv[T]),o.lookAt(Ea),o.updateMatrixWorld(),u.makeTranslation(-pr.x,-pr.y,-pr.z),Pc.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),mt._frustum.setFromProjectionMatrix(Pc,o.coordinateSystem,o.reversedDepth)}else mt.updateMatrices(ft);n=mt.getFrustum(),D(X,A,mt.camera,ft,this.type)}mt.isPointLightShadow!==!0&&this.type===vr&&N(mt,A),mt.needsUpdate=!1}x=this.type,b.needsUpdate=!1,i.setRenderTarget(z,Y,W)};function N(O,X){const A=t.update(R);d.defines.VSM_SAMPLES!==O.blurSamples&&(d.defines.VSM_SAMPLES=O.blurSamples,_.defines.VSM_SAMPLES=O.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Pn(r.x,r.y,{format:Ei,type:Yn})),d.uniforms.shadow_pass.value=O.map.depthTexture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(X,null,A,d,R,null),_.uniforms.shadow_pass.value=O.mapPass.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(X,null,A,_,R,null)}function L(O,X,A,z){let Y=null;const W=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(W!==void 0)Y=W;else if(Y=A.isPointLight===!0?c:l,i.localClippingEnabled&&X.clipShadows===!0&&Array.isArray(X.clippingPlanes)&&X.clippingPlanes.length!==0||X.displacementMap&&X.displacementScale!==0||X.alphaMap&&X.alphaTest>0||X.map&&X.alphaTest>0||X.alphaToCoverage===!0){const et=Y.uuid,at=X.uuid;let lt=h[et];lt===void 0&&(lt={},h[et]=lt);let Q=lt[at];Q===void 0&&(Q=Y.clone(),lt[at]=Q,X.addEventListener("dispose",J)),Y=Q}if(Y.visible=X.visible,Y.wireframe=X.wireframe,z===vr?Y.side=X.shadowSide!==null?X.shadowSide:X.side:Y.side=X.shadowSide!==null?X.shadowSide:g[X.side],Y.alphaMap=X.alphaMap,Y.alphaTest=X.alphaToCoverage===!0?.5:X.alphaTest,Y.map=X.map,Y.clipShadows=X.clipShadows,Y.clippingPlanes=X.clippingPlanes,Y.clipIntersection=X.clipIntersection,Y.displacementMap=X.displacementMap,Y.displacementScale=X.displacementScale,Y.displacementBias=X.displacementBias,Y.wireframeLinewidth=X.wireframeLinewidth,Y.linewidth=X.linewidth,A.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const et=i.properties.get(Y);et.light=A}return Y}function D(O,X,A,z,Y){if(O.visible===!1)return;if(O.layers.test(X.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&Y===vr)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);const at=t.update(O),lt=O.material;if(Array.isArray(lt)){const Q=at.groups;for(let ft=0,mt=Q.length;ft<mt;ft++){const Ct=Q[ft],Nt=lt[Ct.materialIndex];if(Nt&&Nt.visible){const y=L(O,Nt,z,Y);O.onBeforeShadow(i,O,X,A,at,y,Ct),i.renderBufferDirect(A,null,at,y,O,Ct),O.onAfterShadow(i,O,X,A,at,y,Ct)}}}else if(lt.visible){const Q=L(O,lt,z,Y);O.onBeforeShadow(i,O,X,A,at,Q,null),i.renderBufferDirect(A,null,at,Q,O,null),O.onAfterShadow(i,O,X,A,at,Q,null)}}const et=O.children;for(let at=0,lt=et.length;at<lt;at++)D(et[at],X,A,z,Y)}function J(O){O.target.removeEventListener("dispose",J);for(const A in h){const z=h[A],Y=O.target.uuid;Y in z&&(z[Y].dispose(),delete z[Y])}}}function bv(i,t){function e(){let Z=!1;const Pt=new be;let xt=null;const It=new be(0,0,0,0);return{setMask:function(Ut){xt!==Ut&&!Z&&(i.colorMask(Ut,Ut,Ut,Ut),xt=Ut)},setLocked:function(Ut){Z=Ut},setClear:function(Ut,At,Ht,jt,le){le===!0&&(Ut*=jt,At*=jt,Ht*=jt),Pt.set(Ut,At,Ht,jt),It.equals(Pt)===!1&&(i.clearColor(Ut,At,Ht,jt),It.copy(Pt))},reset:function(){Z=!1,xt=null,It.set(-1,0,0,0)}}}function n(){let Z=!1,Pt=!1,xt=null,It=null,Ut=null;return{setReversed:function(At){if(Pt!==At){const Ht=t.get("EXT_clip_control");At?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Pt=At;const jt=Ut;Ut=null,this.setClear(jt)}},getReversed:function(){return Pt},setTest:function(At){At?w(i.DEPTH_TEST):C(i.DEPTH_TEST)},setMask:function(At){xt!==At&&!Z&&(i.depthMask(At),xt=At)},setFunc:function(At){if(Pt&&(At=$h[At]),It!==At){switch(At){case $a:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case to:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=At}},setLocked:function(At){Z=At},setClear:function(At){Ut!==At&&(Ut=At,Pt&&(At=1-At),i.clearDepth(At))},reset:function(){Z=!1,xt=null,It=null,Ut=null,Pt=!1}}}function r(){let Z=!1,Pt=null,xt=null,It=null,Ut=null,At=null,Ht=null,jt=null,le=null;return{setTest:function(ee){Z||(ee?w(i.STENCIL_TEST):C(i.STENCIL_TEST))},setMask:function(ee){Pt!==ee&&!Z&&(i.stencilMask(ee),Pt=ee)},setFunc:function(ee,xe,Fe){(xt!==ee||It!==xe||Ut!==Fe)&&(i.stencilFunc(ee,xe,Fe),xt=ee,It=xe,Ut=Fe)},setOp:function(ee,xe,Fe){(At!==ee||Ht!==xe||jt!==Fe)&&(i.stencilOp(ee,xe,Fe),At=ee,Ht=xe,jt=Fe)},setLocked:function(ee){Z=ee},setClear:function(ee){le!==ee&&(i.clearStencil(ee),le=ee)},reset:function(){Z=!1,Pt=null,xt=null,It=null,Ut=null,At=null,Ht=null,jt=null,le=null}}}const s=new e,a=new n,l=new r,c=new WeakMap,h=new WeakMap;let f={},g={},d={},_=new WeakMap,M=[],R=null,b=!1,x=null,N=null,L=null,D=null,J=null,O=null,X=null,A=new $t(0,0,0),z=0,Y=!1,W=null,et=null,at=null,lt=null,Q=null;const ft=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let mt=!1,Ct=0;const Nt=i.getParameter(i.VERSION);Nt.indexOf("WebGL")!==-1?(Ct=parseFloat(/^WebGL (\d)/.exec(Nt)[1]),mt=Ct>=1):Nt.indexOf("OpenGL ES")!==-1&&(Ct=parseFloat(/^OpenGL ES (\d)/.exec(Nt)[1]),mt=Ct>=2);let y=null,T={};const o=i.getParameter(i.SCISSOR_BOX),u=i.getParameter(i.VIEWPORT),m=new be().fromArray(o),v=new be().fromArray(u);function p(Z,Pt,xt,It){const Ut=new Uint8Array(4),At=i.createTexture();i.bindTexture(Z,At),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<xt;Ht++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Pt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return At}const E={};E[i.TEXTURE_2D]=p(i.TEXTURE_2D,i.TEXTURE_2D,1),E[i.TEXTURE_CUBE_MAP]=p(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[i.TEXTURE_2D_ARRAY]=p(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),E[i.TEXTURE_3D]=p(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),w(i.DEPTH_TEST),a.setFunc(er),q(!1),j(gl),w(i.CULL_FACE),G(Xn);function w(Z){f[Z]!==!0&&(i.enable(Z),f[Z]=!0)}function C(Z){f[Z]!==!1&&(i.disable(Z),f[Z]=!1)}function P(Z,Pt){return d[Z]!==Pt?(i.bindFramebuffer(Z,Pt),d[Z]=Pt,Z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Pt),Z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function H(Z,Pt){let xt=M,It=!1;if(Z){xt=_.get(Pt),xt===void 0&&(xt=[],_.set(Pt,xt));const Ut=Z.textures;if(xt.length!==Ut.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Ht=Ut.length;At<Ht;At++)xt[At]=i.COLOR_ATTACHMENT0+At;xt.length=Ut.length,It=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,It=!0);It&&i.drawBuffers(xt)}function K(Z){return R!==Z?(i.useProgram(Z),R=Z,!0):!1}const V={[oi]:i.FUNC_ADD,[xh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};V[Mh]=i.MIN,V[Sh]=i.MAX;const F={[bh]:i.ZERO,[Eh]:i.ONE,[wh]:i.SRC_COLOR,[Es]:i.SRC_ALPHA,[Ph]:i.SRC_ALPHA_SATURATE,[Ch]:i.DST_COLOR,[pu]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Rh]:i.ONE_MINUS_DST_COLOR,[Ah]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Lh]:i.ONE_MINUS_CONSTANT_COLOR,[Dh]:i.CONSTANT_ALPHA,[Nh]:i.ONE_MINUS_CONSTANT_ALPHA};function G(Z,Pt,xt,It,Ut,At,Ht,jt,le,ee){if(Z===Xn){b===!0&&(C(i.BLEND),b=!1);return}if(b===!1&&(w(i.BLEND),b=!0),Z!==du){if(Z!==x||ee!==Y){if((N!==oi||J!==oi)&&(i.blendEquation(i.FUNC_ADD),N=oi,J=oi),ee)switch(Z){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _l:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",Z);break}L=null,D=null,O=null,X=null,A.set(0,0,0),z=0,x=Z,Y=ee}return}Ut=Ut||Pt,At=At||xt,Ht=Ht||It,(Pt!==N||Ut!==J)&&(i.blendEquationSeparate(V[Pt],V[Ut]),N=Pt,J=Ut),(xt!==L||It!==D||At!==O||Ht!==X)&&(i.blendFuncSeparate(F[xt],F[It],F[At],F[Ht]),L=xt,D=It,O=At,X=Ht),(jt.equals(A)===!1||le!==z)&&(i.blendColor(jt.r,jt.g,jt.b,le),A.copy(jt),z=le),x=Z,Y=!1}function k(Z,Pt){Z.side===Vn?C(i.CULL_FACE):w(i.CULL_FACE);let xt=Z.side===$e;Pt&&(xt=!xt),q(xt),Z.blending===Qi&&Z.transparent===!1?G(Xn):G(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const It=Z.stencilWrite;l.setTest(It),It&&(l.setMask(Z.stencilWriteMask),l.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),l.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),B(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?w(i.SAMPLE_ALPHA_TO_COVERAGE):C(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(Z){W!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),W=Z)}function j(Z){Z!==gh?(w(i.CULL_FACE),Z!==et&&(Z===gl?i.cullFace(i.BACK):Z===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):C(i.CULL_FACE),et=Z}function ct(Z){Z!==at&&(mt&&i.lineWidth(Z),at=Z)}function B(Z,Pt,xt){Z?(w(i.POLYGON_OFFSET_FILL),(lt!==Pt||Q!==xt)&&(lt=Pt,Q=xt,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,xt))):C(i.POLYGON_OFFSET_FILL)}function ut(Z){Z?w(i.SCISSOR_TEST):C(i.SCISSOR_TEST)}function vt(Z){Z===void 0&&(Z=i.TEXTURE0+ft-1),y!==Z&&(i.activeTexture(Z),y=Z)}function _t(Z,Pt,xt){xt===void 0&&(y===null?xt=i.TEXTURE0+ft-1:xt=y);let It=T[xt];It===void 0&&(It={type:void 0,texture:void 0},T[xt]=It),(It.type!==Z||It.texture!==Pt)&&(y!==xt&&(i.activeTexture(xt),y=xt),i.bindTexture(Z,Pt||E[Z]),It.type=Z,It.texture=Pt)}function it(){const Z=T[y];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function S(){try{i.texSubImage2D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function tt(){try{i.texSubImage3D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function Et(){try{i.texStorage2D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function Mt(){try{i.texStorage3D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function rt(){try{i.texImage2D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function dt(){try{i.texImage3D(...arguments)}catch(Z){oe("WebGLState:",Z)}}function wt(Z){return g[Z]!==void 0?g[Z]:i.getParameter(Z)}function Rt(Z,Pt){g[Z]!==Pt&&(i.pixelStorei(Z,Pt),g[Z]=Pt)}function St(Z){m.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),m.copy(Z))}function bt(Z){v.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),v.copy(Z))}function Lt(Z,Pt){let xt=h.get(Pt);xt===void 0&&(xt=new WeakMap,h.set(Pt,xt));let It=xt.get(Z);It===void 0&&(It=i.getUniformBlockIndex(Pt,Z.name),xt.set(Z,It))}function Dt(Z,Pt){const It=h.get(Pt).get(Z);c.get(Pt)!==It&&(i.uniformBlockBinding(Pt,It,Z.__bindingPointIndex),c.set(Pt,It))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},g={},y=null,T={},d={},_=new WeakMap,M=[],R=null,b=!1,x=null,N=null,L=null,D=null,J=null,O=null,X=null,A=new $t(0,0,0),z=0,Y=!1,W=null,et=null,at=null,lt=null,Q=null,m.set(0,0,i.canvas.width,i.canvas.height),v.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:w,disable:C,bindFramebuffer:P,drawBuffers:H,useProgram:K,setBlending:G,setMaterial:k,setFlipSided:q,setCullFace:j,setLineWidth:ct,setPolygonOffset:B,setScissorTest:ut,activeTexture:vt,bindTexture:_t,unbindTexture:it,compressedTexImage2D:Tt,compressedTexImage3D:I,texImage2D:rt,texImage3D:dt,pixelStorei:Rt,getParameter:wt,updateUBOMapping:Lt,uniformBlockBinding:Dt,texStorage2D:Et,texStorage3D:Mt,texSubImage2D:S,texSubImage3D:tt,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:St,viewport:bt,reset:Ot}}function Ev(i,t,e,n,r,s,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,f=new WeakMap,g=new Set;let d;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,S){return M?new OffscreenCanvas(I,S):Rr("canvas")}function b(I,S,tt){let st=1;const ht=Tt(I);if((ht.width>tt||ht.height>tt)&&(st=tt/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Et=Math.floor(st*ht.width),Mt=Math.floor(st*ht.height);d===void 0&&(d=R(Et,Mt));const rt=S?R(Et,Mt):d;return rt.width=Et,rt.height=Mt,rt.getContext("2d").drawImage(I,0,0,Et,Mt),Yt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Et+"x"+Mt+")."),rt}else return"data"in I&&Yt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function x(I){return I.generateMipmaps}function N(I){i.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(I,S,tt,st,ht,Et=!1){if(I!==null){if(i[I]!==void 0)return i[I];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Mt;st&&(Mt=t.get("EXT_texture_norm16"),Mt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=S;if(S===i.RED&&(tt===i.FLOAT&&(rt=i.R32F),tt===i.HALF_FLOAT&&(rt=i.R16F),tt===i.UNSIGNED_BYTE&&(rt=i.R8),tt===i.UNSIGNED_SHORT&&Mt&&(rt=Mt.R16_EXT),tt===i.SHORT&&Mt&&(rt=Mt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(rt=i.R8UI),tt===i.UNSIGNED_SHORT&&(rt=i.R16UI),tt===i.UNSIGNED_INT&&(rt=i.R32UI),tt===i.BYTE&&(rt=i.R8I),tt===i.SHORT&&(rt=i.R16I),tt===i.INT&&(rt=i.R32I)),S===i.RG&&(tt===i.FLOAT&&(rt=i.RG32F),tt===i.HALF_FLOAT&&(rt=i.RG16F),tt===i.UNSIGNED_BYTE&&(rt=i.RG8),tt===i.UNSIGNED_SHORT&&Mt&&(rt=Mt.RG16_EXT),tt===i.SHORT&&Mt&&(rt=Mt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(rt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(rt=i.RG16UI),tt===i.UNSIGNED_INT&&(rt=i.RG32UI),tt===i.BYTE&&(rt=i.RG8I),tt===i.SHORT&&(rt=i.RG16I),tt===i.INT&&(rt=i.RG32I)),S===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),tt===i.UNSIGNED_INT&&(rt=i.RGB32UI),tt===i.BYTE&&(rt=i.RGB8I),tt===i.SHORT&&(rt=i.RGB16I),tt===i.INT&&(rt=i.RGB32I)),S===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(rt=i.RGBA32UI),tt===i.BYTE&&(rt=i.RGBA8I),tt===i.SHORT&&(rt=i.RGBA16I),tt===i.INT&&(rt=i.RGBA32I)),S===i.RGB&&(tt===i.UNSIGNED_SHORT&&Mt&&(rt=Mt.RGB16_EXT),tt===i.SHORT&&Mt&&(rt=Mt.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),S===i.RGBA){const dt=Et?Cs:ae.getTransfer(ht);tt===i.FLOAT&&(rt=i.RGBA32F),tt===i.HALF_FLOAT&&(rt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(rt=dt===he?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&Mt&&(rt=Mt.RGBA16_EXT),tt===i.SHORT&&Mt&&(rt=Mt.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function J(I,S){let tt;return I?S===null||S===In||S===Ar?tt=i.DEPTH24_STENCIL8:S===An?tt=i.DEPTH32F_STENCIL8:S===Tr&&(tt=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===In||S===Ar?tt=i.DEPTH_COMPONENT24:S===An?tt=i.DEPTH_COMPONENT32F:S===Tr&&(tt=i.DEPTH_COMPONENT16),tt}function O(I,S){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pe&&I.minFilter!==Ve?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function X(I){const S=I.target;S.removeEventListener("dispose",X),z(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&g.delete(S)}function A(I){const S=I.target;S.removeEventListener("dispose",A),W(S)}function z(I){const S=n.get(I);if(S.__webglInit===void 0)return;const tt=I.source,st=_.get(tt);if(st){const ht=st[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&Y(I),Object.keys(st).length===0&&_.delete(tt)}n.remove(I)}function Y(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const tt=I.source,st=_.get(tt);delete st[S.__cacheKey],a.memory.textures--}function W(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let ht=0;ht<S.__webglFramebuffer[st].length;ht++)i.deleteFramebuffer(S.__webglFramebuffer[st][ht]);else i.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)i.deleteFramebuffer(S.__webglFramebuffer[st]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const tt=I.textures;for(let st=0,ht=tt.length;st<ht;st++){const Et=n.get(tt[st]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(tt[st])}n.remove(I)}let et=0;function at(){et=0}function lt(){return et}function Q(I){et=I}function ft(){const I=et;return I>=r.maxTextures&&Yt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),et+=1,I}function mt(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Ct(I,S){const tt=n.get(I);if(I.isVideoTexture&&_t(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&tt.__version!==I.version){const st=I.image;if(st===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{C(tt,I,S);return}}else I.isExternalTexture&&(tt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+S)}function Nt(I,S){const tt=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&tt.__version!==I.version){C(tt,I,S);return}else I.isExternalTexture&&(tt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+S)}function y(I,S){const tt=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&tt.__version!==I.version){C(tt,I,S);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+S)}function T(I,S){const tt=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&tt.__version!==I.version){P(tt,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+S)}const o={[wr]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},u={[Pe]:i.NEAREST,[Fh]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Gs]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},m={[zh]:i.NEVER,[Xh]:i.ALWAYS,[Hh]:i.LESS,[Jo]:i.LEQUAL,[Vh]:i.EQUAL,[Zo]:i.GEQUAL,[Gh]:i.GREATER,[Wh]:i.NOTEQUAL};function v(I,S){if(S.type===An&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ve||S.magFilter===Gs||S.magFilter===Fr||S.magFilter===yi||S.minFilter===Ve||S.minFilter===Gs||S.minFilter===Fr||S.minFilter===yi)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,o[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,o[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,o[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,u[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,u[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,m[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pe||S.minFilter!==Fr&&S.minFilter!==yi||S.type===An&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function p(I,S){let tt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",X));const st=S.source;let ht=_.get(st);ht===void 0&&(ht={},_.set(st,ht));const Et=mt(S);if(Et!==I.__cacheKey){ht[Et]===void 0&&(ht[Et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ht[Et].usedTimes++;const Mt=ht[I.__cacheKey];Mt!==void 0&&(ht[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&Y(S)),I.__cacheKey=Et,I.__webglTexture=ht[Et].texture}return tt}function E(I,S,tt){return Math.floor(Math.floor(I/tt)/S)}function w(I,S,tt,st){const Et=I.updateRanges;if(Et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,tt,st,S.data);else{Et.sort((Rt,St)=>Rt.start-St.start);let Mt=0;for(let Rt=1;Rt<Et.length;Rt++){const St=Et[Mt],bt=Et[Rt],Lt=St.start+St.count,Dt=E(bt.start,S.width,4),Ot=E(St.start,S.width,4);bt.start<=Lt+1&&Dt===Ot&&E(bt.start+bt.count-1,S.width,4)===Dt?St.count=Math.max(St.count,bt.start+bt.count-St.start):(++Mt,Et[Mt]=bt)}Et.length=Mt+1;const rt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Rt=0,St=Et.length;Rt<St;Rt++){const bt=Et[Rt],Lt=Math.floor(bt.start/4),Dt=Math.ceil(bt.count/4),Ot=Lt%S.width,Z=Math.floor(Lt/S.width),Pt=Dt,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,Ot,Z,Pt,xt,tt,st,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function C(I,S,tt){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);const ht=p(I,S),Et=S.source;e.bindTexture(st,I.__webglTexture,i.TEXTURE0+tt);const Mt=n.get(Et);if(Et.version!==Mt.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const xt=ae.getPrimaries(ae.workingColorSpace),It=S.colorSpace===li?null:ae.getPrimaries(S.colorSpace),Ut=S.colorSpace===li||xt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let dt=b(S.image,!1,r.maxTextureSize);dt=it(S,dt);const wt=s.convert(S.format,S.colorSpace),Rt=s.convert(S.type);let St=D(S.internalFormat,wt,Rt,S.normalized,S.colorSpace,S.isVideoTexture);v(st,S);let bt;const Lt=S.mipmaps,Dt=S.isVideoTexture!==!0,Ot=Mt.__version===void 0||ht===!0,Z=Et.dataReady,Pt=O(S,dt);if(S.isDepthTexture)St=J(S.format===Mi,S.type),Ot&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,St,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,St,dt.width,dt.height,0,wt,Rt,null));else if(S.isDataTexture)if(Lt.length>0){Dt&&Ot&&e.texStorage2D(i.TEXTURE_2D,Pt,St,Lt[0].width,Lt[0].height);for(let xt=0,It=Lt.length;xt<It;xt++)bt=Lt[xt],Dt?Z&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,bt.width,bt.height,wt,Rt,bt.data):e.texImage2D(i.TEXTURE_2D,xt,St,bt.width,bt.height,0,wt,Rt,bt.data);S.generateMipmaps=!1}else Dt?(Ot&&e.texStorage2D(i.TEXTURE_2D,Pt,St,dt.width,dt.height),Z&&w(S,dt,wt,Rt)):e.texImage2D(i.TEXTURE_2D,0,St,dt.width,dt.height,0,wt,Rt,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Dt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,St,Lt[0].width,Lt[0].height,dt.depth);for(let xt=0,It=Lt.length;xt<It;xt++)if(bt=Lt[xt],S.format!==vn)if(wt!==null)if(Dt){if(Z)if(S.layerUpdates.size>0){const Ut=oc(bt.width,bt.height,S.format,S.type);for(const At of S.layerUpdates){const Ht=bt.data.subarray(At*Ut/bt.data.BYTES_PER_ELEMENT,(At+1)*Ut/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,At,bt.width,bt.height,1,wt,Ht)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,bt.width,bt.height,dt.depth,wt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,St,bt.width,bt.height,dt.depth,0,bt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,bt.width,bt.height,dt.depth,wt,Rt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,St,bt.width,bt.height,dt.depth,0,wt,Rt,bt.data)}else{Dt&&Ot&&e.texStorage2D(i.TEXTURE_2D,Pt,St,Lt[0].width,Lt[0].height);for(let xt=0,It=Lt.length;xt<It;xt++)bt=Lt[xt],S.format!==vn?wt!==null?Dt?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,St,bt.width,bt.height,0,bt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?Z&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,bt.width,bt.height,wt,Rt,bt.data):e.texImage2D(i.TEXTURE_2D,xt,St,bt.width,bt.height,0,wt,Rt,bt.data)}else if(S.isDataArrayTexture)if(Dt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,St,dt.width,dt.height,dt.depth),Z)if(S.layerUpdates.size>0){const xt=oc(dt.width,dt.height,S.format,S.type);for(const It of S.layerUpdates){const Ut=dt.data.subarray(It*xt/dt.data.BYTES_PER_ELEMENT,(It+1)*xt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,dt.width,dt.height,1,wt,Rt,Ut)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,wt,Rt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,dt.width,dt.height,dt.depth,0,wt,Rt,dt.data);else if(S.isData3DTexture)Dt?(Ot&&e.texStorage3D(i.TEXTURE_3D,Pt,St,dt.width,dt.height,dt.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,wt,Rt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,St,dt.width,dt.height,dt.depth,0,wt,Rt,dt.data);else if(S.isFramebufferTexture){if(Ot)if(Dt)e.texStorage2D(i.TEXTURE_2D,Pt,St,dt.width,dt.height);else{let xt=dt.width,It=dt.height;for(let Ut=0;Ut<Pt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,St,xt,It,0,wt,Rt,null),xt>>=1,It>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),dt.parentNode!==xt){xt.appendChild(dt),g.add(S),xt.onpaint=jt=>{const le=jt.changedElements;for(const ee of g)le.includes(ee.image)&&(ee.needsUpdate=!0)},xt.requestPaint();return}const It=0,Ut=i.RGBA,At=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,It,Ut,At,Ht,dt),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Dt&&Ot){const xt=Tt(Lt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,St,xt.width,xt.height)}for(let xt=0,It=Lt.length;xt<It;xt++)bt=Lt[xt],Dt?Z&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,wt,Rt,bt):e.texImage2D(i.TEXTURE_2D,xt,St,wt,Rt,bt);S.generateMipmaps=!1}else if(Dt){if(Ot){const xt=Tt(dt);e.texStorage2D(i.TEXTURE_2D,Pt,St,xt.width,xt.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Rt,dt)}else e.texImage2D(i.TEXTURE_2D,0,St,wt,Rt,dt);x(S)&&N(st),Mt.__version=Et.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function P(I,S,tt){if(S.image.length!==6)return;const st=p(I,S),ht=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+tt);const Et=n.get(ht);if(ht.version!==Et.__version||st===!0){e.activeTexture(i.TEXTURE0+tt);const Mt=ae.getPrimaries(ae.workingColorSpace),rt=S.colorSpace===li?null:ae.getPrimaries(S.colorSpace),dt=S.colorSpace===li||Mt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const wt=S.isCompressedTexture||S.image[0].isCompressedTexture,Rt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let At=0;At<6;At++)!wt&&!Rt?St[At]=b(S.image[At],!0,r.maxCubemapSize):St[At]=Rt?S.image[At].image:S.image[At],St[At]=it(S,St[At]);const bt=St[0],Lt=s.convert(S.format,S.colorSpace),Dt=s.convert(S.type),Ot=D(S.internalFormat,Lt,Dt,S.normalized,S.colorSpace),Z=S.isVideoTexture!==!0,Pt=Et.__version===void 0||st===!0,xt=ht.dataReady;let It=O(S,bt);v(i.TEXTURE_CUBE_MAP,S);let Ut;if(wt){Z&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Ot,bt.width,bt.height);for(let At=0;At<6;At++){Ut=St[At].mipmaps;for(let Ht=0;Ht<Ut.length;Ht++){const jt=Ut[Ht];S.format!==vn?Lt!==null?Z?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht,0,0,jt.width,jt.height,Lt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht,Ot,jt.width,jt.height,0,jt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht,0,0,jt.width,jt.height,Lt,Dt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht,Ot,jt.width,jt.height,0,Lt,Dt,jt.data)}}}else{if(Ut=S.mipmaps,Z&&Pt){Ut.length>0&&It++;const At=Tt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Ot,At.width,At.height)}for(let At=0;At<6;At++)if(Rt){Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,St[At].width,St[At].height,Lt,Dt,St[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Ot,St[At].width,St[At].height,0,Lt,Dt,St[At].data);for(let Ht=0;Ht<Ut.length;Ht++){const le=Ut[Ht].image[At].image;Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht+1,0,0,le.width,le.height,Lt,Dt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht+1,Ot,le.width,le.height,0,Lt,Dt,le.data)}}else{Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Lt,Dt,St[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Ot,Lt,Dt,St[At]);for(let Ht=0;Ht<Ut.length;Ht++){const jt=Ut[Ht];Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht+1,0,0,Lt,Dt,jt.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht+1,Ot,Lt,Dt,jt.image[At])}}}x(S)&&N(i.TEXTURE_CUBE_MAP),Et.__version=ht.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function H(I,S,tt,st,ht,Et){const Mt=s.convert(tt.format,tt.colorSpace),rt=s.convert(tt.type),dt=D(tt.internalFormat,Mt,rt,tt.normalized,tt.colorSpace),wt=n.get(S),Rt=n.get(tt);if(Rt.__renderTarget=S,!wt.__hasExternalTextures){const St=Math.max(1,S.width>>Et),bt=Math.max(1,S.height>>Et);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,Et,dt,St,bt,S.depth,0,Mt,rt,null):e.texImage2D(ht,Et,dt,St,bt,0,Mt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),vt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ht,Rt.__webglTexture,0,ut(S)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ht,Rt.__webglTexture,Et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(I,S,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const st=S.depthTexture,ht=st&&st.isDepthTexture?st.type:null,Et=J(S.stencilBuffer,ht),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(S),Et,S.width,S.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(S),Et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Et,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,I)}else{const st=S.textures;for(let ht=0;ht<st.length;ht++){const Et=st[ht],Mt=s.convert(Et.format,Et.colorSpace),rt=s.convert(Et.type),dt=D(Et.internalFormat,Mt,rt,Et.normalized,Et.colorSpace);vt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(S),dt,S.width,S.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(S),dt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,dt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(I,S,tt){const st=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=n.get(S.depthTexture);if(ht.__renderTarget=S,(!ht.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),st){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,S.depthTexture.addEventListener("dispose",X)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),v(i.TEXTURE_CUBE_MAP,S.depthTexture);const wt=s.convert(S.depthTexture.format),Rt=s.convert(S.depthTexture.type);let St;S.depthTexture.format===jn?St=i.DEPTH_COMPONENT24:S.depthTexture.format===Mi&&(St=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,St,S.width,S.height,0,wt,Rt,null)}}else Ct(S.depthTexture,0);const Et=ht.__webglTexture,Mt=ut(S),rt=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,dt=S.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===jn)vt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,rt,Et,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,rt,Et,0);else if(S.depthTexture.format===Mi)vt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,rt,Et,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,rt,Et,0);else throw new Error("Unknown depthTexture format")}function F(I){const S=n.get(I),tt=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const st=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){const ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=st}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(tt)for(let st=0;st<6;st++)V(S.__webglFramebuffer[st],I,st);else{const st=I.texture.mipmaps;st&&st.length>0?V(S.__webglFramebuffer[0],I,0):V(S.__webglFramebuffer,I,0)}else if(tt){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=i.createRenderbuffer(),K(S.__webglDepthbuffer[st],I,!1);else{const ht=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=S.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Et)}}else{const st=I.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,I,!1);else{const ht=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(I,S,tt){const st=n.get(I);S!==void 0&&H(st.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&F(I)}function k(I){const S=I.texture,tt=n.get(I),st=n.get(S);I.addEventListener("dispose",A);const ht=I.textures,Et=I.isWebGLCubeRenderTarget===!0,Mt=ht.length>1;if(Mt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,a.memory.textures++),Et){tt.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){tt.__webglFramebuffer[rt]=[];for(let dt=0;dt<S.mipmaps.length;dt++)tt.__webglFramebuffer[rt][dt]=i.createFramebuffer()}else tt.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){tt.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)tt.__webglFramebuffer[rt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let rt=0,dt=ht.length;rt<dt;rt++){const wt=n.get(ht[rt]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&vt(I)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let rt=0;rt<ht.length;rt++){const dt=ht[rt];tt.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[rt]);const wt=s.convert(dt.format,dt.colorSpace),Rt=s.convert(dt.type),St=D(dt.internalFormat,wt,Rt,dt.normalized,dt.colorSpace,I.isXRRenderTarget===!0),bt=ut(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),K(tt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Et){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),v(i.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)H(tt.__webglFramebuffer[rt][dt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else H(tt.__webglFramebuffer[rt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);x(S)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let rt=0,dt=ht.length;rt<dt;rt++){const wt=ht[rt],Rt=n.get(wt);let St=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Rt.__webglTexture),v(St,wt),H(tt.__webglFramebuffer,I,wt,i.COLOR_ATTACHMENT0+rt,St,0),x(wt)&&N(St)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,st.__webglTexture),v(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)H(tt.__webglFramebuffer[dt],I,S,i.COLOR_ATTACHMENT0,rt,dt);else H(tt.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,rt,0);x(S)&&N(rt),e.unbindTexture()}I.depthBuffer&&F(I)}function q(I){const S=I.textures;for(let tt=0,st=S.length;tt<st;tt++){const ht=S[tt];if(x(ht)){const Et=L(I),Mt=n.get(ht).__webglTexture;e.bindTexture(Et,Mt),N(Et),e.unbindTexture()}}}const j=[],ct=[];function B(I){if(I.samples>0){if(vt(I)===!1){const S=I.textures,tt=I.width,st=I.height;let ht=i.COLOR_BUFFER_BIT;const Et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(I),rt=S.length>1;if(rt)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const dt=I.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[wt]);const Rt=n.get(S[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,tt,st,0,0,tt,st,ht,i.NEAREST),c===!0&&(j.length=0,ct.length=0,j.push(i.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(j.push(Et),ct.push(Et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[wt]);const Rt=n.get(S[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(I){return Math.min(r.maxSamples,I.samples)}function vt(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(I){const S=a.render.frame;f.get(I)!==S&&(f.set(I,S),I.update())}function it(I,S){const tt=I.colorSpace,st=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||tt!==As&&tt!==li&&(ae.getTransfer(tt)===he?(st!==vn||ht!==en)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",tt)),S}function Tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ft,this.resetTextureUnits=at,this.getTextureUnits=lt,this.setTextureUnits=Q,this.setTexture2D=Ct,this.setTexture2DArray=Nt,this.setTexture3D=y,this.setTextureCube=T,this.rebindTextures=G,this.setupRenderTarget=k,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=H,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wv(i,t){function e(n,r=li){let s;const a=ae.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bu)return i.BYTE;if(n===Eu)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===Au)return i.ALPHA;if(n===Cu)return i.RGB;if(n===vn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Ru)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===vs||n===_s||n===xs||n===ys)if(a===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===ro||n===so||n===ao)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co||n===uo||n===ho||n===ws||n===fo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oo||n===lo)return a===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===co)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===uo)return s.COMPRESSED_R11_EAC;if(n===ho)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ws)return s.COMPRESSED_RG11_EAC;if(n===fo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===yo||n===Mo||n===So||n===bo||n===Eo||n===wo||n===To||n===Ao)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===po)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Ro||n===Po)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Co)return a===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Io||n===Lo||n===Ts||n===Do)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Io)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ts)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
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

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ku(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:Tv,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rn(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rv extends di{constructor(t,e){super();const n=this;let r=null,s=1,a=null,l="local-floor",c=1,h=null,f=null,g=null,d=null,_=null,M=null;const R=typeof XRWebGLBinding<"u",b=new Cv,x={},N=e.getContextAttributes();let L=null,D=null;const J=[],O=[],X=new Ft;let A=null;const z=new je;z.viewport=new be;const Y=new je;Y.viewport=new be;const W=[z,Y],et=new Ud;let at=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(p){let E=J[p];return E===void 0&&(E=new $s,J[p]=E),E.getTargetRaySpace()},this.getControllerGrip=function(p){let E=J[p];return E===void 0&&(E=new $s,J[p]=E),E.getGripSpace()},this.getHand=function(p){let E=J[p];return E===void 0&&(E=new $s,J[p]=E),E.getHandSpace()};function Q(p){const E=O.indexOf(p.inputSource);if(E===-1)return;const w=J[E];w!==void 0&&(w.update(p.inputSource,p.frame,h||a),w.dispatchEvent({type:p.type,data:p.inputSource}))}function ft(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ft),r.removeEventListener("inputsourceschange",mt);for(let p=0;p<J.length;p++){const E=O[p];E!==null&&(O[p]=null,J[p].disconnect(E))}at=null,lt=null,b.reset();for(const p in x)delete x[p];t.setRenderTarget(L),_=null,d=null,g=null,r=null,D=null,v.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(X.width,X.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(p){s=p,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(p){l=p,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(p){h=p},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(r,e)),g},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(p){if(r=p,r!==null){if(L=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ft),r.addEventListener("inputsourceschange",mt),N.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(X),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let w=null,C=null,P=null;N.depth&&(P=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,w=N.stencil?Mi:jn,C=N.stencil?Ar:In);const H={colorFormat:e.RGBA8,depthFormat:P,scaleFactor:s};g=this.getBinding(),d=g.createProjectionLayer(H),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),D=new Pn(d.textureWidth,d.textureHeight,{format:vn,type:en,depthTexture:new rr(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,w),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const w={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,w),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new Pn(_.framebufferWidth,_.framebufferHeight,{format:vn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(l),v.setContext(r),v.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function mt(p){for(let E=0;E<p.removed.length;E++){const w=p.removed[E],C=O.indexOf(w);C>=0&&(O[C]=null,J[C].disconnect(w))}for(let E=0;E<p.added.length;E++){const w=p.added[E];let C=O.indexOf(w);if(C===-1){for(let H=0;H<J.length;H++)if(H>=O.length){O.push(w),C=H;break}else if(O[H]===null){O[H]=w,C=H;break}if(C===-1)break}const P=J[C];P&&P.connect(w)}}const Ct=new nt,Nt=new nt;function y(p,E,w){Ct.setFromMatrixPosition(E.matrixWorld),Nt.setFromMatrixPosition(w.matrixWorld);const C=Ct.distanceTo(Nt),P=E.projectionMatrix.elements,H=w.projectionMatrix.elements,K=P[14]/(P[10]-1),V=P[14]/(P[10]+1),F=(P[9]+1)/P[5],G=(P[9]-1)/P[5],k=(P[8]-1)/P[0],q=(H[8]+1)/H[0],j=K*k,ct=K*q,B=C/(-k+q),ut=B*-k;if(E.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.translateX(ut),p.translateZ(B),p.matrixWorld.compose(p.position,p.quaternion,p.scale),p.matrixWorldInverse.copy(p.matrixWorld).invert(),P[10]===-1)p.projectionMatrix.copy(E.projectionMatrix),p.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{const vt=K+B,_t=V+B,it=j-ut,Tt=ct+(C-ut),I=F*V/_t*vt,S=G*V/_t*vt;p.projectionMatrix.makePerspective(it,Tt,I,S,vt,_t),p.projectionMatrixInverse.copy(p.projectionMatrix).invert()}}function T(p,E){E===null?p.matrixWorld.copy(p.matrix):p.matrixWorld.multiplyMatrices(E.matrixWorld,p.matrix),p.matrixWorldInverse.copy(p.matrixWorld).invert()}this.updateCamera=function(p){if(r===null)return;let E=p.near,w=p.far;b.texture!==null&&(b.depthNear>0&&(E=b.depthNear),b.depthFar>0&&(w=b.depthFar)),et.near=Y.near=z.near=E,et.far=Y.far=z.far=w,(at!==et.near||lt!==et.far)&&(r.updateRenderState({depthNear:et.near,depthFar:et.far}),at=et.near,lt=et.far),et.layers.mask=p.layers.mask|6,z.layers.mask=et.layers.mask&-5,Y.layers.mask=et.layers.mask&-3;const C=p.parent,P=et.cameras;T(et,C);for(let H=0;H<P.length;H++)T(P[H],C);P.length===2?y(et,z,Y):et.projectionMatrix.copy(z.projectionMatrix),o(p,et,C)};function o(p,E,w){w===null?p.matrix.copy(E.matrixWorld):(p.matrix.copy(w.matrixWorld),p.matrix.invert(),p.matrix.multiply(E.matrixWorld)),p.matrix.decompose(p.position,p.quaternion,p.scale),p.updateMatrixWorld(!0),p.projectionMatrix.copy(E.projectionMatrix),p.projectionMatrixInverse.copy(E.projectionMatrixInverse),p.isPerspectiveCamera&&(p.fov=ir*2*Math.atan(1/p.projectionMatrix.elements[5]),p.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(d===null&&_===null))return c},this.setFoveation=function(p){c=p,d!==null&&(d.fixedFoveation=p),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=p)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(et)},this.getCameraTexture=function(p){return x[p]};let u=null;function m(p,E){if(f=E.getViewerPose(h||a),M=E,f!==null){const w=f.views;_!==null&&(t.setRenderTargetFramebuffer(D,_.framebuffer),t.setRenderTarget(D));let C=!1;w.length!==et.cameras.length&&(et.cameras.length=0,C=!0);for(let V=0;V<w.length;V++){const F=w[V];let G=null;if(_!==null)G=_.getViewport(F);else{const q=g.getViewSubImage(d,F);G=q.viewport,V===0&&(t.setRenderTargetTextures(D,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(D))}let k=W[V];k===void 0&&(k=new je,k.layers.enable(V),k.viewport=new be,W[V]=k),k.matrix.fromArray(F.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(F.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(G.x,G.y,G.width,G.height),V===0&&(et.matrix.copy(k.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),C===!0&&et.cameras.push(k)}const P=r.enabledFeatures;if(P&&P.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&R){g=n.getBinding();const V=g.getDepthInformation(w[0]);V&&V.isValid&&V.texture&&b.init(V,r.renderState)}if(P&&P.includes("camera-access")&&R){t.state.unbindTexture(),g=n.getBinding();for(let V=0;V<w.length;V++){const F=w[V].camera;if(F){let G=x[F];G||(G=new ku,x[F]=G);const k=g.getCameraImage(F);G.sourceTexture=k}}}}for(let w=0;w<J.length;w++){const C=O[w],P=J[w];C!==null&&P!==void 0&&P.update(C,E,h||a)}u&&u(p,E),E.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:E}),M=null}const v=new eh;v.setAnimationLoop(m),this.setAnimationLoop=function(p){u=p},this.dispose=function(){}}}const Pv=new fe,lh=new Zt;lh.set(-1,0,0,0,1,0,0,0,1);function Iv(i,t){function e(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function n(b,x){x.color.getRGB(b.fogColor.value,Qu(i)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function r(b,x,N,L,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(b,x):x.isMeshLambertMaterial?(s(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(b,x),g(b,x)):x.isMeshPhongMaterial?(s(b,x),f(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(b,x),d(b,x),x.isMeshPhysicalMaterial&&_(b,x,D)):x.isMeshMatcapMaterial?(s(b,x),M(b,x)):x.isMeshDepthMaterial?s(b,x):x.isMeshDistanceMaterial?(s(b,x),R(b,x)):x.isMeshNormalMaterial?s(b,x):x.isLineBasicMaterial?(a(b,x),x.isLineDashedMaterial&&l(b,x)):x.isPointsMaterial?c(b,x,N,L):x.isSpriteMaterial?h(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,e(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,e(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,e(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===$e&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,e(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===$e&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,e(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,e(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const N=t.get(x),L=N.envMap,D=N.envMapRotation;L&&(b.envMap.value=L,b.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(D)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(lh),b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,b.aoMapTransform))}function a(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,e(x.map,b.mapTransform))}function l(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function c(b,x,N,L){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*N,b.scale.value=L*.5,x.map&&(b.map.value=x.map,e(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,e(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function h(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,e(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,e(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function f(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function d(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function _(b,x,N){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$e&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=N.texture,b.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,x){x.matcap&&(b.matcap.value=x.matcap)}function R(b,x){const N=t.get(x).light;b.referencePosition.value.setFromMatrixPosition(N.matrixWorld),b.nearDistance.value=N.shadow.camera.near,b.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lv(i,t,e,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(N,L){const D=L.program;n.uniformBlockBinding(N,D)}function h(N,L){let D=r[N.id];D===void 0&&(M(N),D=f(N),r[N.id]=D,N.addEventListener("dispose",b));const J=L.program;n.updateUBOMapping(N,J);const O=t.render.frame;s[N.id]!==O&&(d(N),s[N.id]=O)}function f(N){const L=g();N.__bindingPointIndex=L;const D=i.createBuffer(),J=N.__size,O=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,J,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,D),D}function g(){for(let N=0;N<l;N++)if(a.indexOf(N)===-1)return a.push(N),N;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(N){const L=r[N.id],D=N.uniforms,J=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let O=0,X=D.length;O<X;O++){const A=Array.isArray(D[O])?D[O]:[D[O]];for(let z=0,Y=A.length;z<Y;z++){const W=A[z];if(_(W,O,z,J)===!0){const et=W.__offset,at=Array.isArray(W.value)?W.value:[W.value];let lt=0;for(let Q=0;Q<at.length;Q++){const ft=at[Q],mt=R(ft);typeof ft=="number"||typeof ft=="boolean"?(W.__data[0]=ft,i.bufferSubData(i.UNIFORM_BUFFER,et+lt,W.__data)):ft.isMatrix3?(W.__data[0]=ft.elements[0],W.__data[1]=ft.elements[1],W.__data[2]=ft.elements[2],W.__data[3]=0,W.__data[4]=ft.elements[3],W.__data[5]=ft.elements[4],W.__data[6]=ft.elements[5],W.__data[7]=0,W.__data[8]=ft.elements[6],W.__data[9]=ft.elements[7],W.__data[10]=ft.elements[8],W.__data[11]=0):ArrayBuffer.isView(ft)?W.__data.set(new ft.constructor(ft.buffer,ft.byteOffset,W.__data.length)):(ft.toArray(W.__data,lt),lt+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,et,W.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(N,L,D,J){const O=N.value,X=L+"_"+D;if(J[X]===void 0)return typeof O=="number"||typeof O=="boolean"?J[X]=O:ArrayBuffer.isView(O)?J[X]=O.slice():J[X]=O.clone(),!0;{const A=J[X];if(typeof O=="number"||typeof O=="boolean"){if(A!==O)return J[X]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(A.equals(O)===!1)return A.copy(O),!0}}return!1}function M(N){const L=N.uniforms;let D=0;const J=16;for(let X=0,A=L.length;X<A;X++){const z=Array.isArray(L[X])?L[X]:[L[X]];for(let Y=0,W=z.length;Y<W;Y++){const et=z[Y],at=Array.isArray(et.value)?et.value:[et.value];for(let lt=0,Q=at.length;lt<Q;lt++){const ft=at[lt],mt=R(ft),Ct=D%J,Nt=Ct%mt.boundary,y=Ct+Nt;D+=Nt,y!==0&&J-y<mt.storage&&(D+=J-y),et.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=mt.storage}}}const O=D%J;return O>0&&(D+=J-O),N.__size=D,N.__cache={},this}function R(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(L.boundary=16,L.storage=N.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",N),L}function b(N){const L=N.target;L.removeEventListener("dispose",b);const D=a.indexOf(L.__bindingPointIndex);a.splice(D,1),i.deleteBuffer(r[L.id]),delete r[L.id],delete s[L.id]}function x(){for(const N in r)i.deleteBuffer(r[N]);a=[],r={},s={}}return{bind:c,update:h,dispose:x}}const Dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function Nv(){return En===null&&(En=new Df(Dv,16,16,Ei,Yn),En.name="DFG_LUT",En.minFilter=Ve,En.magFilter=Ve,En.wrapS=Wn,En.wrapT=Wn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class ch{constructor(t={}){const{canvas:e=Yh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:_=en}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;const R=_,b=new Set([Ko,$o,jo]),x=new Set([en,In,Tr,Ar,qo,Yo]),N=new Uint32Array(4),L=new Int32Array(4),D=new nt;let J=null,O=null;const X=[],A=[];let z=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let W=!1,et=null;this._outputColorSpace=qe;let at=0,lt=0,Q=null,ft=-1,mt=null;const Ct=new be,Nt=new be;let y=null;const T=new $t(0);let o=0,u=e.width,m=e.height,v=1,p=null,E=null;const w=new be(0,0,u,m),C=new be(0,0,u,m);let P=!1;const H=new Fs;let K=!1,V=!1;const F=new fe,G=new nt,k=new be,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function ct(){return Q===null?v:1}let B=n;function ut(U,ot){return e.getContext(U,ot)}try{const U={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",jt,!1),B===null){const ot="webgl2";if(B=ut(ot,U),B===null)throw ut(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw oe("WebGLRenderer: "+U.message),U}let vt,_t,it,Tt,I,S,tt,st,ht,Et,Mt,rt,dt,wt,Rt,St,bt,Lt,Dt,Ot,Z,Pt,xt;function It(){vt=new N0(B),vt.init(),Z=new wv(B,vt),_t=new T0(B,vt,t,Z),it=new bv(B,vt),_t.reversedDepthBuffer&&d&&it.buffers.depth.setReversed(!0),Tt=new F0(B),I=new cv,S=new Ev(B,vt,it,I,_t,Z,Tt),tt=new D0(Y),st=new Hd(B),Pt=new E0(B,st),ht=new U0(B,st,Tt,Pt),Et=new k0(B,ht,st,Pt,Tt),Lt=new B0(B,_t,S),Rt=new A0(I),Mt=new lv(Y,tt,vt,_t,Pt,Rt),rt=new Iv(Y,I),dt=new hv,wt=new vv(vt),bt=new b0(Y,tt,it,Et,M,c),St=new Sv(Y,Et,_t),xt=new Lv(B,Tt,_t,it),Dt=new w0(B,vt,Tt),Ot=new O0(B,vt,Tt),Tt.programs=Mt.programs,Y.capabilities=_t,Y.extensions=vt,Y.properties=I,Y.renderLists=dt,Y.shadowMap=St,Y.state=it,Y.info=Tt}It(),R!==en&&(z=new H0(R,e.width,e.height,r,s));const Ut=new Rv(Y,B);this.xr=Ut,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const U=vt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=vt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(U){U!==void 0&&(v=U,this.setSize(u,m,!1))},this.getSize=function(U){return U.set(u,m)},this.setSize=function(U,ot,yt=!0){if(Ut.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}u=U,m=ot,e.width=Math.floor(U*v),e.height=Math.floor(ot*v),yt===!0&&(e.style.width=U+"px",e.style.height=ot+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,U,ot)},this.getDrawingBufferSize=function(U){return U.set(u*v,m*v).floor()},this.setDrawingBufferSize=function(U,ot,yt){u=U,m=ot,v=yt,e.width=Math.floor(U*yt),e.height=Math.floor(ot*yt),this.setViewport(0,0,U,ot)},this.setEffects=function(U){if(R===en){oe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let ot=0;ot<U.length;ot++)if(U[ot].isOutputPass===!0){Yt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(Ct)},this.getViewport=function(U){return U.copy(w)},this.setViewport=function(U,ot,yt,pt){U.isVector4?w.set(U.x,U.y,U.z,U.w):w.set(U,ot,yt,pt),it.viewport(Ct.copy(w).multiplyScalar(v).round())},this.getScissor=function(U){return U.copy(C)},this.setScissor=function(U,ot,yt,pt){U.isVector4?C.set(U.x,U.y,U.z,U.w):C.set(U,ot,yt,pt),it.scissor(Nt.copy(C).multiplyScalar(v).round())},this.getScissorTest=function(){return P},this.setScissorTest=function(U){it.setScissorTest(P=U)},this.setOpaqueSort=function(U){p=U},this.setTransparentSort=function(U){E=U},this.getClearColor=function(U){return U.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(U=!0,ot=!0,yt=!0){let pt=0;if(U){let gt=!1;if(Q!==null){const zt=Q.texture.format;gt=b.has(zt)}if(gt){const zt=Q.texture.type,Gt=x.has(zt),kt=bt.getClearColor(),Wt=bt.getClearAlpha(),Xt=kt.r,Qt=kt.g,ie=kt.b;Gt?(N[0]=Xt,N[1]=Qt,N[2]=ie,N[3]=Wt,B.clearBufferuiv(B.COLOR,0,N)):(L[0]=Xt,L[1]=Qt,L[2]=ie,L[3]=Wt,B.clearBufferiv(B.COLOR,0,L))}else pt|=B.COLOR_BUFFER_BIT}ot&&(pt|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),yt&&(pt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pt!==0&&B.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),et=U},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),bt.dispose(),dt.dispose(),wt.dispose(),I.dispose(),tt.dispose(),Et.dispose(),Pt.dispose(),xt.dispose(),Mt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Ne),Ut.removeEventListener("sessionend",Ce),ve.stop()};function At(U){U.preventDefault(),Rs("WebGLRenderer: Context Lost."),W=!0}function Ht(){Rs("WebGLRenderer: Context Restored."),W=!1;const U=Tt.autoReset,ot=St.enabled,yt=St.autoUpdate,pt=St.needsUpdate,gt=St.type;It(),Tt.autoReset=U,St.enabled=ot,St.autoUpdate=yt,St.needsUpdate=pt,St.type=gt}function jt(U){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function le(U){const ot=U.target;ot.removeEventListener("dispose",le),ee(ot)}function ee(U){xe(U),I.remove(U)}function xe(U){const ot=I.get(U).programs;ot!==void 0&&(ot.forEach(function(yt){Mt.releaseProgram(yt)}),U.isShaderMaterial&&Mt.releaseShaderCache(U))}this.renderBufferDirect=function(U,ot,yt,pt,gt,zt){ot===null&&(ot=q);const Gt=gt.isMesh&&gt.matrixWorld.determinant()<0,kt=Or(U,ot,yt,pt,gt);it.setMaterial(pt,Gt);let Wt=yt.index,Xt=1;if(pt.wireframe===!0){if(Wt=ht.getWireframeAttribute(yt),Wt===void 0)return;Xt=2}const Qt=yt.drawRange,ie=yt.attributes.position;let qt=Qt.start*Xt,de=(Qt.start+Qt.count)*Xt;zt!==null&&(qt=Math.max(qt,zt.start*Xt),de=Math.min(de,(zt.start+zt.count)*Xt)),Wt!==null?(qt=Math.max(qt,0),de=Math.min(de,Wt.count)):ie!=null&&(qt=Math.max(qt,0),de=Math.min(de,ie.count));const Ee=de-qt;if(Ee<0||Ee===1/0)return;Pt.setup(gt,pt,kt,yt,Wt);let Se,me=Dt;if(Wt!==null&&(Se=st.get(Wt),me=Ot,me.setIndex(Se)),gt.isMesh)pt.wireframe===!0?(it.setLineWidth(pt.wireframeLinewidth*ct()),me.setMode(B.LINES)):me.setMode(B.TRIANGLES);else if(gt.isLine){let ke=pt.linewidth;ke===void 0&&(ke=1),it.setLineWidth(ke*ct()),gt.isLineSegments?me.setMode(B.LINES):gt.isLineLoop?me.setMode(B.LINE_LOOP):me.setMode(B.LINE_STRIP)}else gt.isPoints?me.setMode(B.POINTS):gt.isSprite&&me.setMode(B.TRIANGLES);if(gt.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))me.renderMultiDraw(gt._multiDrawStarts,gt._multiDrawCounts,gt._multiDrawCount);else{const ke=gt._multiDrawStarts,Vt=gt._multiDrawCounts,Je=gt._multiDrawCount,ce=Wt?st.get(Wt).bytesPerElement:1,an=I.get(pt).currentProgram.getUniforms();for(let yn=0;yn<Je;yn++)an.setValue(B,"_gl_DrawID",yn),me.render(ke[yn]/ce,Vt[yn])}else if(gt.isInstancedMesh)me.renderInstances(qt,Ee,gt.count);else if(yt.isInstancedBufferGeometry){const ke=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,Vt=Math.min(yt.instanceCount,ke);me.renderInstances(qt,Ee,Vt)}else me.render(qt,Ee)};function Fe(U,ot,yt){U.transparent===!0&&U.side===Vn&&U.forceSinglePass===!1?(U.side=$e,U.needsUpdate=!0,sn(U,ot,yt),U.side=hi,U.needsUpdate=!0,sn(U,ot,yt),U.side=Vn):sn(U,ot,yt)}this.compile=function(U,ot,yt=null){yt===null&&(yt=U),O=wt.get(yt),O.init(ot),A.push(O),yt.traverseVisible(function(gt){gt.isLight&&gt.layers.test(ot.layers)&&(O.pushLight(gt),gt.castShadow&&O.pushShadow(gt))}),U!==yt&&U.traverseVisible(function(gt){gt.isLight&&gt.layers.test(ot.layers)&&(O.pushLight(gt),gt.castShadow&&O.pushShadow(gt))}),O.setupLights();const pt=new Set;return U.traverse(function(gt){if(!(gt.isMesh||gt.isPoints||gt.isLine||gt.isSprite))return;const zt=gt.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){const kt=zt[Gt];Fe(kt,yt,gt),pt.add(kt)}else Fe(zt,yt,gt),pt.add(zt)}),O=A.pop(),pt},this.compileAsync=function(U,ot,yt=null){const pt=this.compile(U,ot,yt);return new Promise(gt=>{function zt(){if(pt.forEach(function(Gt){I.get(Gt).currentProgram.isReady()&&pt.delete(Gt)}),pt.size===0){gt(U);return}setTimeout(zt,10)}vt.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let $n=null;function Un(U){$n&&$n(U)}function Ne(){ve.stop()}function Ce(){ve.start()}const ve=new eh;ve.setAnimationLoop(Un),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(U){$n=U,Ut.setAnimationLoop(U),U===null?ve.stop():ve.start()},Ut.addEventListener("sessionstart",Ne),Ut.addEventListener("sessionend",Ce),this.render=function(U,ot){if(ot!==void 0&&ot.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;et!==null&&et.renderStart(U,ot);const yt=Ut.enabled===!0&&Ut.isPresenting===!0,pt=z!==null&&(Q===null||yt)&&z.begin(Y,Q);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(ot),ot=Ut.getCamera()),U.isScene===!0&&U.onBeforeRender(Y,U,ot,Q),O=wt.get(U,A.length),O.init(ot),O.state.textureUnits=S.getTextureUnits(),A.push(O),F.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),H.setFromProjectionMatrix(F,_n,ot.reversedDepth),V=this.localClippingEnabled,K=Rt.init(this.clippingPlanes,V),J=dt.get(U,X.length),J.init(),X.push(J),Ut.enabled===!0&&Ut.isPresenting===!0){const Gt=Y.xr.getDepthSensingMesh();Gt!==null&&cn(Gt,ot,-1/0,Y.sortObjects)}cn(U,ot,0,Y.sortObjects),J.finish(),Y.sortObjects===!0&&J.sort(p,E),j=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,j&&bt.addToRenderList(J,U),this.info.render.frame++,K===!0&&Rt.beginShadows();const gt=O.state.shadowsArray;if(St.render(gt,U,ot),K===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pt&&z.hasRenderPass())===!1){const Gt=J.opaque,kt=J.transmissive;if(O.setupLights(),ot.isArrayCamera){const Wt=ot.cameras;if(kt.length>0)for(let Xt=0,Qt=Wt.length;Xt<Qt;Xt++){const ie=Wt[Xt];Ge(Gt,kt,U,ie)}j&&bt.render(U);for(let Xt=0,Qt=Wt.length;Xt<Qt;Xt++){const ie=Wt[Xt];Re(J,U,ie,ie.viewport)}}else kt.length>0&&Ge(Gt,kt,U,ot),j&&bt.render(U),Re(J,U,ot)}Q!==null&&lt===0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q)),pt&&z.end(Y),U.isScene===!0&&U.onAfterRender(Y,U,ot),Pt.resetDefaultState(),ft=-1,mt=null,A.pop(),A.length>0?(O=A[A.length-1],S.setTextureUnits(O.state.textureUnits),K===!0&&Rt.setGlobalState(Y.clippingPlanes,O.state.camera)):O=null,X.pop(),X.length>0?J=X[X.length-1]:J=null,et!==null&&et.renderEnd()};function cn(U,ot,yt,pt){if(U.visible===!1)return;if(U.layers.test(ot.layers)){if(U.isGroup)yt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ot);else if(U.isLightProbeGrid)O.pushLightProbeGrid(U);else if(U.isLight)O.pushLight(U),U.castShadow&&O.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||H.intersectsSprite(U)){pt&&k.setFromMatrixPosition(U.matrixWorld).applyMatrix4(F);const Gt=Et.update(U),kt=U.material;kt.visible&&J.push(U,Gt,kt,yt,k.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||H.intersectsObject(U))){const Gt=Et.update(U),kt=U.material;if(pt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),k.copy(U.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),k.copy(Gt.boundingSphere.center)),k.applyMatrix4(U.matrixWorld).applyMatrix4(F)),Array.isArray(kt)){const Wt=Gt.groups;for(let Xt=0,Qt=Wt.length;Xt<Qt;Xt++){const ie=Wt[Xt],qt=kt[ie.materialIndex];qt&&qt.visible&&J.push(U,Gt,qt,yt,k.z,ie)}}else kt.visible&&J.push(U,Gt,kt,yt,k.z,null)}}const zt=U.children;for(let Gt=0,kt=zt.length;Gt<kt;Gt++)cn(zt[Gt],ot,yt,pt)}function Re(U,ot,yt,pt){const{opaque:gt,transmissive:zt,transparent:Gt}=U;O.setupLightsView(yt),K===!0&&Rt.setGlobalState(Y.clippingPlanes,yt),pt&&it.viewport(Ct.copy(pt)),gt.length>0&&Be(gt,ot,yt),zt.length>0&&Be(zt,ot,yt),Gt.length>0&&Be(Gt,ot,yt),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Ge(U,ot,yt,pt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[pt.id]===void 0){const qt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[pt.id]=new Pn(1,1,{generateMipmaps:!0,type:qt?Yn:en,minFilter:yi,samples:Math.max(4,_t.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const zt=O.state.transmissionRenderTarget[pt.id],Gt=pt.viewport||Ct;zt.setSize(Gt.z*Y.transmissionResolutionScale,Gt.w*Y.transmissionResolutionScale);const kt=Y.getRenderTarget(),Wt=Y.getActiveCubeFace(),Xt=Y.getActiveMipmapLevel();Y.setRenderTarget(zt),Y.getClearColor(T),o=Y.getClearAlpha(),o<1&&Y.setClearColor(16777215,.5),Y.clear(),j&&bt.render(yt);const Qt=Y.toneMapping;Y.toneMapping=Cn;const ie=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),O.setupLightsView(pt),K===!0&&Rt.setGlobalState(Y.clippingPlanes,pt),Be(U,yt,pt),S.updateMultisampleRenderTarget(zt),S.updateRenderTargetMipmap(zt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let de=0,Ee=ot.length;de<Ee;de++){const Se=ot[de],{object:me,geometry:ke,material:Vt,group:Je}=Se;if(Vt.side===Vn&&me.layers.test(pt.layers)){const ce=Vt.side;Vt.side=$e,Vt.needsUpdate=!0,xn(me,yt,pt,ke,Vt,Je),Vt.side=ce,Vt.needsUpdate=!0,qt=!0}}qt===!0&&(S.updateMultisampleRenderTarget(zt),S.updateRenderTargetMipmap(zt))}Y.setRenderTarget(kt,Wt,Xt),Y.setClearColor(T,o),ie!==void 0&&(pt.viewport=ie),Y.toneMapping=Qt}function Be(U,ot,yt){const pt=ot.isScene===!0?ot.overrideMaterial:null;for(let gt=0,zt=U.length;gt<zt;gt++){const Gt=U[gt],{object:kt,geometry:Wt,group:Xt}=Gt;let Qt=Gt.material;Qt.allowOverride===!0&&pt!==null&&(Qt=pt),kt.layers.test(yt.layers)&&xn(kt,ot,yt,Wt,Qt,Xt)}}function xn(U,ot,yt,pt,gt,zt){U.onBeforeRender(Y,ot,yt,pt,gt,zt),U.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),gt.onBeforeRender(Y,ot,yt,pt,U,zt),gt.transparent===!0&&gt.side===Vn&&gt.forceSinglePass===!1?(gt.side=$e,gt.needsUpdate=!0,Y.renderBufferDirect(yt,ot,pt,gt,U,zt),gt.side=hi,gt.needsUpdate=!0,Y.renderBufferDirect(yt,ot,pt,gt,U,zt),gt.side=Vn):Y.renderBufferDirect(yt,ot,pt,gt,U,zt),U.onAfterRender(Y,ot,yt,pt,gt,zt)}function sn(U,ot,yt){ot.isScene!==!0&&(ot=q);const pt=I.get(U),gt=O.state.lights,zt=O.state.shadowsArray,Gt=gt.state.version,kt=Mt.getParameters(U,gt.state,zt,ot,yt,O.state.lightProbeGridArray),Wt=Mt.getProgramCacheKey(kt);let Xt=pt.programs;pt.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?ot.environment:null,pt.fog=ot.fog;const Qt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;pt.envMap=tt.get(U.envMap||pt.environment,Qt),pt.envMapRotation=pt.environment!==null&&U.envMap===null?ot.environmentRotation:U.envMapRotation,Xt===void 0&&(U.addEventListener("dispose",le),Xt=new Map,pt.programs=Xt);let ie=Xt.get(Wt);if(ie!==void 0){if(pt.currentProgram===ie&&pt.lightsStateVersion===Gt)return Kn(U,kt),ie}else kt.uniforms=Mt.getUniforms(U),et!==null&&U.isNodeMaterial&&et.build(U,yt,kt),U.onBeforeCompile(kt,Y),ie=Mt.acquireProgram(kt,Wt),Xt.set(Wt,ie),pt.uniforms=kt.uniforms;const qt=pt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),Kn(U,kt),pt.needsLights=re(U),pt.lightsStateVersion=Gt,pt.needsLights&&(qt.ambientLightColor.value=gt.state.ambient,qt.lightProbe.value=gt.state.probe,qt.directionalLights.value=gt.state.directional,qt.directionalLightShadows.value=gt.state.directionalShadow,qt.spotLights.value=gt.state.spot,qt.spotLightShadows.value=gt.state.spotShadow,qt.rectAreaLights.value=gt.state.rectArea,qt.ltc_1.value=gt.state.rectAreaLTC1,qt.ltc_2.value=gt.state.rectAreaLTC2,qt.pointLights.value=gt.state.point,qt.pointLightShadows.value=gt.state.pointShadow,qt.hemisphereLights.value=gt.state.hemi,qt.directionalShadowMatrix.value=gt.state.directionalShadowMatrix,qt.spotLightMatrix.value=gt.state.spotLightMatrix,qt.spotLightMap.value=gt.state.spotLightMap,qt.pointShadowMatrix.value=gt.state.pointShadowMatrix),pt.lightProbeGrid=O.state.lightProbeGridArray.length>0,pt.currentProgram=ie,pt.uniformsList=null,ie}function un(U){if(U.uniformsList===null){const ot=U.currentProgram.getUniforms();U.uniformsList=Ss.seqWithValue(ot.seq,U.uniforms)}return U.uniformsList}function Kn(U,ot){const yt=I.get(U);yt.outputColorSpace=ot.outputColorSpace,yt.batching=ot.batching,yt.batchingColor=ot.batchingColor,yt.instancing=ot.instancing,yt.instancingColor=ot.instancingColor,yt.instancingMorph=ot.instancingMorph,yt.skinning=ot.skinning,yt.morphTargets=ot.morphTargets,yt.morphNormals=ot.morphNormals,yt.morphColors=ot.morphColors,yt.morphTargetsCount=ot.morphTargetsCount,yt.numClippingPlanes=ot.numClippingPlanes,yt.numIntersection=ot.numClipIntersection,yt.vertexAlphas=ot.vertexAlphas,yt.vertexTangents=ot.vertexTangents,yt.toneMapping=ot.toneMapping}function hn(U,ot){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;D.setFromMatrixPosition(ot.matrixWorld);for(let yt=0,pt=U.length;yt<pt;yt++){const gt=U[yt];if(gt.texture!==null&&gt.boundingBox.containsPoint(D))return gt}return null}function Or(U,ot,yt,pt,gt){ot.isScene!==!0&&(ot=q),S.resetTextureUnits();const zt=ot.fog,Gt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial?ot.environment:null,kt=Q===null?Y.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ae.workingColorSpace,Wt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial&&!pt.envMap||pt.isMeshPhongMaterial&&!pt.envMap,Xt=tt.get(pt.envMap||Gt,Wt),Qt=pt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,ie=!!yt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),qt=!!yt.morphAttributes.position,de=!!yt.morphAttributes.normal,Ee=!!yt.morphAttributes.color;let Se=Cn;pt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Se=Y.toneMapping);const me=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,ke=me!==void 0?me.length:0,Vt=I.get(pt),Je=O.state.lights;if(K===!0&&(V===!0||U!==mt)){const _e=U===mt&&pt.id===ft;Rt.setState(pt,U,_e)}let ce=!1;pt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Je.state.version||Vt.outputColorSpace!==kt||gt.isBatchedMesh&&Vt.batching===!1||!gt.isBatchedMesh&&Vt.batching===!0||gt.isBatchedMesh&&Vt.batchingColor===!0&&gt.colorTexture===null||gt.isBatchedMesh&&Vt.batchingColor===!1&&gt.colorTexture!==null||gt.isInstancedMesh&&Vt.instancing===!1||!gt.isInstancedMesh&&Vt.instancing===!0||gt.isSkinnedMesh&&Vt.skinning===!1||!gt.isSkinnedMesh&&Vt.skinning===!0||gt.isInstancedMesh&&Vt.instancingColor===!0&&gt.instanceColor===null||gt.isInstancedMesh&&Vt.instancingColor===!1&&gt.instanceColor!==null||gt.isInstancedMesh&&Vt.instancingMorph===!0&&gt.morphTexture===null||gt.isInstancedMesh&&Vt.instancingMorph===!1&&gt.morphTexture!==null||Vt.envMap!==Xt||pt.fog===!0&&Vt.fog!==zt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Rt.numPlanes||Vt.numIntersection!==Rt.numIntersection)||Vt.vertexAlphas!==Qt||Vt.vertexTangents!==ie||Vt.morphTargets!==qt||Vt.morphNormals!==de||Vt.morphColors!==Ee||Vt.toneMapping!==Se||Vt.morphTargetsCount!==ke||!!Vt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Vt.__version=pt.version);let an=Vt.currentProgram;ce===!0&&(an=sn(pt,ot,gt),et&&pt.isNodeMaterial&&et.onUpdateProgram(pt,an,Vt));let yn=!1,Jn=!1,Ii=!1;const ge=an.getUniforms(),we=Vt.uniforms;if(it.useProgram(an.program)&&(yn=!0,Jn=!0,Ii=!0),pt.id!==ft&&(ft=pt.id,Jn=!0),Vt.needsLights){const _e=hn(O.state.lightProbeGridArray,gt);Vt.lightProbeGrid!==_e&&(Vt.lightProbeGrid=_e,Jn=!0)}if(yn||mt!==U){it.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),ge.setValue(B,"projectionMatrix",U.projectionMatrix),ge.setValue(B,"viewMatrix",U.matrixWorldInverse);const Qn=ge.map.cameraPosition;Qn!==void 0&&Qn.setValue(B,G.setFromMatrixPosition(U.matrixWorld)),_t.logarithmicDepthBuffer&&ge.setValue(B,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&ge.setValue(B,"isOrthographic",U.isOrthographicCamera===!0),mt!==U&&(mt=U,Jn=!0,Ii=!0)}if(Vt.needsLights&&(Je.state.directionalShadowMap.length>0&&ge.setValue(B,"directionalShadowMap",Je.state.directionalShadowMap,S),Je.state.spotShadowMap.length>0&&ge.setValue(B,"spotShadowMap",Je.state.spotShadowMap,S),Je.state.pointShadowMap.length>0&&ge.setValue(B,"pointShadowMap",Je.state.pointShadowMap,S)),gt.isSkinnedMesh){ge.setOptional(B,gt,"bindMatrix"),ge.setOptional(B,gt,"bindMatrixInverse");const _e=gt.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ge.setValue(B,"boneTexture",_e.boneTexture,S))}gt.isBatchedMesh&&(ge.setOptional(B,gt,"batchingTexture"),ge.setValue(B,"batchingTexture",gt._matricesTexture,S),ge.setOptional(B,gt,"batchingIdTexture"),ge.setValue(B,"batchingIdTexture",gt._indirectTexture,S),ge.setOptional(B,gt,"batchingColorTexture"),gt._colorsTexture!==null&&ge.setValue(B,"batchingColorTexture",gt._colorsTexture,S));const Zn=yt.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Lt.update(gt,yt,an),(Jn||Vt.receiveShadow!==gt.receiveShadow)&&(Vt.receiveShadow=gt.receiveShadow,ge.setValue(B,"receiveShadow",gt.receiveShadow)),(pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial)&&pt.envMap===null&&ot.environment!==null&&(we.envMapIntensity.value=ot.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Nv()),Jn){if(ge.setValue(B,"toneMappingExposure",Y.toneMappingExposure),Vt.needsLights&&Jt(we,Ii),zt&&pt.fog===!0&&rt.refreshFogUniforms(we,zt),rt.refreshMaterialUniforms(we,pt,v,m,O.state.transmissionRenderTarget[U.id]),Vt.needsLights&&Vt.lightProbeGrid){const _e=Vt.lightProbeGrid;we.probesSH.value=_e.texture,we.probesMin.value.copy(_e.boundingBox.min),we.probesMax.value.copy(_e.boundingBox.max),we.probesResolution.value.copy(_e.resolution)}Ss.upload(B,un(Vt),we,S)}if(pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(Ss.upload(B,un(Vt),we,S),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&ge.setValue(B,"center",gt.center),ge.setValue(B,"modelViewMatrix",gt.modelViewMatrix),ge.setValue(B,"normalMatrix",gt.normalMatrix),ge.setValue(B,"modelMatrix",gt.matrixWorld),pt.uniformsGroups!==void 0){const _e=pt.uniformsGroups;for(let Qn=0,Li=_e.length;Qn<Li;Qn++){const ml=_e[Qn];xt.update(ml,an),xt.bind(ml,an)}}return an}function Jt(U,ot){U.ambientLightColor.needsUpdate=ot,U.lightProbe.needsUpdate=ot,U.directionalLights.needsUpdate=ot,U.directionalLightShadows.needsUpdate=ot,U.pointLights.needsUpdate=ot,U.pointLightShadows.needsUpdate=ot,U.spotLights.needsUpdate=ot,U.spotLightShadows.needsUpdate=ot,U.rectAreaLights.needsUpdate=ot,U.hemisphereLights.needsUpdate=ot}function re(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(U,ot,yt){const pt=I.get(U);pt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),I.get(U.texture).__webglTexture=ot,I.get(U.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:yt,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,ot){const yt=I.get(U);yt.__webglFramebuffer=ot,yt.__useDefaultFramebuffer=ot===void 0};const se=B.createFramebuffer();this.setRenderTarget=function(U,ot=0,yt=0){Q=U,at=ot,lt=yt;let pt=null,gt=!1,zt=!1;if(U){const kt=I.get(U);if(kt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(B.FRAMEBUFFER,kt.__webglFramebuffer),Ct.copy(U.viewport),Nt.copy(U.scissor),y=U.scissorTest,it.viewport(Ct),it.scissor(Nt),it.setScissorTest(y),ft=-1;return}else if(kt.__webglFramebuffer===void 0)S.setupRenderTarget(U);else if(kt.__hasExternalTextures)S.rebindTextures(U,I.get(U.texture).__webglTexture,I.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Qt=U.depthTexture;if(kt.__boundDepthTexture!==Qt){if(Qt!==null&&I.has(Qt)&&(U.width!==Qt.image.width||U.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(U)}}const Wt=U.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(zt=!0);const Xt=I.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Xt[ot])?pt=Xt[ot][yt]:pt=Xt[ot],gt=!0):U.samples>0&&S.useMultisampledRTT(U)===!1?pt=I.get(U).__webglMultisampledFramebuffer:Array.isArray(Xt)?pt=Xt[yt]:pt=Xt,Ct.copy(U.viewport),Nt.copy(U.scissor),y=U.scissorTest}else Ct.copy(w).multiplyScalar(v).floor(),Nt.copy(C).multiplyScalar(v).floor(),y=P;if(yt!==0&&(pt=se),it.bindFramebuffer(B.FRAMEBUFFER,pt)&&it.drawBuffers(U,pt),it.viewport(Ct),it.scissor(Nt),it.setScissorTest(y),gt){const kt=I.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt.__webglTexture,yt)}else if(zt){const kt=ot;for(let Wt=0;Wt<U.textures.length;Wt++){const Xt=I.get(U.textures[Wt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Wt,Xt.__webglTexture,yt,kt)}}else if(U!==null&&yt!==0){const kt=I.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,kt.__webglTexture,yt)}ft=-1},this.readRenderTargetPixels=function(U,ot,yt,pt,gt,zt,Gt,kt=0){if(!(U&&U.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=I.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt){it.bindFramebuffer(B.FRAMEBUFFER,Wt);try{const Xt=U.textures[kt],Qt=Xt.format,ie=Xt.type;if(U.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),!_t.textureFormatReadable(Qt)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(ie)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=U.width-pt&&yt>=0&&yt<=U.height-gt&&B.readPixels(ot,yt,pt,gt,Z.convert(Qt),Z.convert(ie),zt)}finally{const Xt=Q!==null?I.get(Q).__webglFramebuffer:null;it.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(U,ot,yt,pt,gt,zt,Gt,kt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=I.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt)if(ot>=0&&ot<=U.width-pt&&yt>=0&&yt<=U.height-gt){it.bindFramebuffer(B.FRAMEBUFFER,Wt);const Xt=U.textures[kt],Qt=Xt.format,ie=Xt.type;if(U.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),!_t.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qt),B.bufferData(B.PIXEL_PACK_BUFFER,zt.byteLength,B.STREAM_READ),B.readPixels(ot,yt,pt,gt,Z.convert(Qt),Z.convert(ie),0);const de=Q!==null?I.get(Q).__webglFramebuffer:null;it.bindFramebuffer(B.FRAMEBUFFER,de);const Ee=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jh(B,Ee,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,zt),B.deleteBuffer(qt),B.deleteSync(Ee),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,ot=null,yt=0){const pt=Math.pow(2,-yt),gt=Math.floor(U.image.width*pt),zt=Math.floor(U.image.height*pt),Gt=ot!==null?ot.x:0,kt=ot!==null?ot.y:0;S.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,yt,0,0,Gt,kt,gt,zt),it.unbindTexture()};const ue=B.createFramebuffer(),Te=B.createFramebuffer();this.copyTextureToTexture=function(U,ot,yt=null,pt=null,gt=0,zt=0){let Gt,kt,Wt,Xt,Qt,ie,qt,de,Ee;const Se=U.isCompressedTexture?U.mipmaps[zt]:U.image;if(yt!==null)Gt=yt.max.x-yt.min.x,kt=yt.max.y-yt.min.y,Wt=yt.isBox3?yt.max.z-yt.min.z:1,Xt=yt.min.x,Qt=yt.min.y,ie=yt.isBox3?yt.min.z:0;else{const we=Math.pow(2,-gt);Gt=Math.floor(Se.width*we),kt=Math.floor(Se.height*we),U.isDataArrayTexture?Wt=Se.depth:U.isData3DTexture?Wt=Math.floor(Se.depth*we):Wt=1,Xt=0,Qt=0,ie=0}pt!==null?(qt=pt.x,de=pt.y,Ee=pt.z):(qt=0,de=0,Ee=0);const me=Z.convert(ot.format),ke=Z.convert(ot.type);let Vt;ot.isData3DTexture?(S.setTexture3D(ot,0),Vt=B.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(S.setTexture2DArray(ot,0),Vt=B.TEXTURE_2D_ARRAY):(S.setTexture2D(ot,0),Vt=B.TEXTURE_2D),it.activeTexture(B.TEXTURE0),it.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ot.flipY),it.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),it.pixelStorei(B.UNPACK_ALIGNMENT,ot.unpackAlignment);const Je=it.getParameter(B.UNPACK_ROW_LENGTH),ce=it.getParameter(B.UNPACK_IMAGE_HEIGHT),an=it.getParameter(B.UNPACK_SKIP_PIXELS),yn=it.getParameter(B.UNPACK_SKIP_ROWS),Jn=it.getParameter(B.UNPACK_SKIP_IMAGES);it.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),it.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),it.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),it.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),it.pixelStorei(B.UNPACK_SKIP_IMAGES,ie);const Ii=U.isDataArrayTexture||U.isData3DTexture,ge=ot.isDataArrayTexture||ot.isData3DTexture;if(U.isDepthTexture){const we=I.get(U),Zn=I.get(ot),_e=I.get(we.__renderTarget),Qn=I.get(Zn.__renderTarget);it.bindFramebuffer(B.READ_FRAMEBUFFER,_e.__webglFramebuffer),it.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Li=0;Li<Wt;Li++)Ii&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(U).__webglTexture,gt,ie+Li),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(ot).__webglTexture,zt,Ee+Li)),B.blitFramebuffer(Xt,Qt,Gt,kt,qt,de,Gt,kt,B.DEPTH_BUFFER_BIT,B.NEAREST);it.bindFramebuffer(B.READ_FRAMEBUFFER,null),it.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(gt!==0||U.isRenderTargetTexture||I.has(U)){const we=I.get(U),Zn=I.get(ot);it.bindFramebuffer(B.READ_FRAMEBUFFER,ue),it.bindFramebuffer(B.DRAW_FRAMEBUFFER,Te);for(let _e=0;_e<Wt;_e++)Ii?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,gt,ie+_e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,gt),ge?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zn.__webglTexture,zt,Ee+_e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zn.__webglTexture,zt),gt!==0?B.blitFramebuffer(Xt,Qt,Gt,kt,qt,de,Gt,kt,B.COLOR_BUFFER_BIT,B.NEAREST):ge?B.copyTexSubImage3D(Vt,zt,qt,de,Ee+_e,Xt,Qt,Gt,kt):B.copyTexSubImage2D(Vt,zt,qt,de,Xt,Qt,Gt,kt);it.bindFramebuffer(B.READ_FRAMEBUFFER,null),it.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ge?U.isDataTexture||U.isData3DTexture?B.texSubImage3D(Vt,zt,qt,de,Ee,Gt,kt,Wt,me,ke,Se.data):ot.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,zt,qt,de,Ee,Gt,kt,Wt,me,Se.data):B.texSubImage3D(Vt,zt,qt,de,Ee,Gt,kt,Wt,me,ke,Se):U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,zt,qt,de,Gt,kt,me,ke,Se.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,zt,qt,de,Se.width,Se.height,me,Se.data):B.texSubImage2D(B.TEXTURE_2D,zt,qt,de,Gt,kt,me,ke,Se);it.pixelStorei(B.UNPACK_ROW_LENGTH,Je),it.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce),it.pixelStorei(B.UNPACK_SKIP_PIXELS,an),it.pixelStorei(B.UNPACK_SKIP_ROWS,yn),it.pixelStorei(B.UNPACK_SKIP_IMAGES,Jn),zt===0&&ot.generateMipmaps&&B.generateMipmap(Vt),it.unbindTexture()},this.initRenderTarget=function(U){I.get(U).__webglFramebuffer===void 0&&S.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?S.setTextureCube(U,0):U.isData3DTexture?S.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?S.setTexture2DArray(U,0):S.setTexture2D(U,0),it.unbindTexture()},this.resetState=function(){at=0,lt=0,Q=null,it.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class Go extends Me{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ft(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Ki=new nt,Ic=new fe,Lc=new fe,Dc=new nt,Nc=new nt;class Uv{constructor(t={}){const e=this;let n,r,s,a;const l={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(M,R){M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ic.copy(R.matrixWorldInverse),Lc.multiplyMatrices(R.projectionMatrix,Ic),f(M,M,R),this.sortObjects&&_(M)},this.setSize=function(M,R){n=M,r=R,s=n/2,a=r/2,c.style.width=M+"px",c.style.height=R+"px"};function h(M){M.isCSS2DObject&&(M.element.style.display="none");for(let R=0,b=M.children.length;R<b;R++)h(M.children[R])}function f(M,R,b){if(M.visible===!1){h(M);return}if(M.isCSS2DObject){Ki.setFromMatrixPosition(M.matrixWorld),Ki.applyMatrix4(Lc);const x=Ki.z>=-1&&Ki.z<=1&&M.layers.test(b.layers)===!0,N=M.element;N.style.display=x===!0?"":"none",x===!0&&(M.onBeforeRender(e,R,b),N.style.transform="translate("+-100*M.center.x+"%,"+-100*M.center.y+"%)translate("+(Ki.x*s+s)+"px,"+(-Ki.y*a+a)+"px)",N.parentNode!==c&&c.appendChild(N),M.onAfterRender(e,R,b));const L={distanceToCameraSquared:g(b,M)};l.objects.set(M,L)}for(let x=0,N=M.children.length;x<N;x++)f(M.children[x],R,b)}function g(M,R){return Dc.setFromMatrixPosition(M.matrixWorld),Nc.setFromMatrixPosition(R.matrixWorld),Dc.distanceToSquared(Nc)}function d(M){const R=[];return M.traverseVisible(function(b){b.isCSS2DObject&&R.push(b)}),R}function _(M){const R=d(M).sort(function(x,N){if(x.renderOrder!==N.renderOrder)return N.renderOrder-x.renderOrder;const L=l.objects.get(x).distanceToCameraSquared,D=l.objects.get(N).distanceToCameraSquared;return L-D}),b=R.length;for(let x=0,N=R.length;x<N;x++)R[x].element.style.zIndex=b-x}}}const Uc={init:function(i,t,e,n,r,s,a="#tlStrip",l='<div class="tlItem" style="width:+++WIDTH+++">+++LABEL+++<span class="tick +++TICKCLASS+++"></span>+++EVENT+++</div>'){this.pop=i,this.startYear=e,this.endYear=n,this.selector=a,this.phase=e,this.wpc=(n-e)/119,this.populationEl=$("."+r),this.continuousYearEl=$("."+s),this.continuousYear=0,$(a).html(""),$("#tlPointer").css({width:this.wpc+"%"});for(var c=e;c<=n;c+=10){let h=l;h=h.replace("+++WIDTH+++",this.wpc+"%"),c%100==0?(h=h.replace("+++LABEL+++","<label>"+c+"</label>"),h=h.replace("+++TICKCLASS+++","major")):c%50==0?(h=h.replace("+++LABEL+++","<label class='minor'>"+c+"</label>"),h=h.replace("+++TICKCLASS+++","")):(h=h.replace("+++LABEL+++",""),h=h.replace("+++TICKCLASS+++","")),typeof t[""+c]<"u"?h=h.replace("+++EVENT+++","<div class='tlEvent' id='eventDecade"+c+"'></div>"):h=h.replace("+++EVENT+++",""),$(a).append(h)}this.placeConnector()},placeConnector:function(){const i=$(".tlEvent"),t=i[0],e=i[i.length-1];$("#tlConnector").css({left:parseInt($(t).offset().left-$("#tl").offset().left)+"px",width:parseInt($(e).offset().left-$(t).offset().left)+"px"})},show:function(){gsap.to($(this.selector).parent(),{opacity:1,duration:.5})},hide:function(){gsap.to($(this.selector).parent(),{opacity:0,duration:.5})},scrollTo:function(i){const t=$("body").hasClass("changer")?.1:1,e=this,n=(i-this.startYear)/10;let r=this.wpc*(n+.5);gsap.to("#tlPointer",{left:r+"%",duration:t*5,ease:"power1.inOut"}),$(".tlEvent").removeClass("selected"),$(".tlEvent#eventDecade"+i).addClass("selected"),gsap.to(this,{phase:i,duration:t*5,ease:"power1.inOut",onUpdate:function(){const s=parseInt(Math.floor(e.phase));s!=e.continuousYear&&(e.continuousYear=s,e.populationEl.html(e.pop.population(s).toLocaleString()),e.continuousYearEl.html(s))}})}};class Ov{constructor(){this._dataset=void 0,this._epsilon=void 0,this._minPts=void 0,this._clusters=void 0,this._noise=void 0,this._visited=void 0,this._assigned=void 0,this._datasetLength=0,this._dataset=[],this._epsilon=1,this._minPts=2,this._clusters=[],this._noise=[],this._visited=[],this._assigned=[],this._datasetLength=0}cluster(t,e){if(t){if(!(t instanceof Array))throw Error("Dataset must be of type array, "+typeof t+" given");this._dataset=t,this._clusters=[],this._noise=[],this._datasetLength=t.length,this._visited=new Array(this._datasetLength),this._assigned=new Array(this._datasetLength)}if(!e.minPts||typeof e.minPts!="number")throw Error("Minimum points must be defined and of type number (integer)");this._minPts=e.minPts,this._epsilon=e.epsilon?e.epsilon:this._getkNNDistPlotKnee(t,this._minPts);for(let n=0;n<this._datasetLength;n++)if(this._visited[n]!==1){this._visited[n]=1;const r=this._regionQuery(n);if(r.length<this._minPts)this._noise.push(n);else{const s=this._clusters.length;this._clusters.push([]),this._addToCluster(n,s),this._expandCluster(s,r)}}return this._clusters}_kNNDistPlot(t,e){const n=[];return t.forEach((r,s)=>{const a=[];t.forEach((l,c)=>{s!==c&&a.push(this._haversineDistanceMeters(r,l))}),a.sort((l,c)=>l-c),n.push(a[e-1])}),n.sort((r,s)=>s-r),n}_getkNNDistPlotKnee(t,e){const n=this._kNNDistPlot(t,e);if(console.log(n),t.length<3)throw new Error("Requires at least 3 data points to determine epsilon");if(t.length===3)return n[1];let r=0;for(let h=0;h<n.length-1;h++)r+=n[h]-n[h+1];const s=r/n.length-1,a=[];for(let h=0;h<n.length-1;h++)a.push(n[h]-n[h+1]>s);let l=Math.round(n.length/2),c=a.length;for(let h=0;h<a.length-1;h++)if(a[h]||c--,c/a.length<3/4){l=h;break}return console.log(JSON.stringify(l)),n[l]}_mergeArrays(t,e){const n=e.length;for(let r=0;r<n;r++){const s=e[r];t.indexOf(s)<0&&t.push(s)}return t}_haversineDistanceMeters(t,e){const n=f=>f*Math.PI/180,r=n(t[1]),s=n(t[0]),a=n(e[1]),l=a-r,c=n(e[0])-s,h=Math.sin(l/2)*Math.sin(l/2)+Math.cos(r)*Math.cos(a)*Math.sin(c/2)*Math.sin(c/2);return 2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))*6371e3}_regionQuery(t){const e=[];for(let n=0;n<this._datasetLength;n++)this._haversineDistanceMeters(this._dataset[t],this._dataset[n])<this._epsilon&&e.push(n);return e}_expandCluster(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(this._visited[r]!==1){this._visited[r]=1;const s=this._regionQuery(r);s.length>=this._minPts&&(e=this._mergeArrays(e,s))}this._assigned[r]!==1&&this._addToCluster(r,t)}}_addToCluster(t,e){this._clusters[e].push(t),this._assigned[t]=1}}const Hn=[{name:"Glasgow",pop:"599,650",lat:55.861155,lon:-4.2501687,type:"town"},{name:"Edinburgh",pop:"464,990",lat:55.899864196777344,lon:-3.0929973125457764,type:"town"},{name:"Aberdeen",pop:"196,670",lat:57.14265060424805,lon:-2.0976345539093018,type:"town"},{name:"Dundee",pop:"147,710",lat:56.4605938,lon:-2.97019,type:"town"},{name:"Paisley",pop:"76,220",lat:55.8455828,lon:-4.4239646,type:"town"},{name:"East Kilbride",pop:"74,740",lat:55.7601174,lon:-4.1796401,type:"town"},{name:"Livingston",pop:"56,570",lat:55.8829582,lon:-3.5175773,type:"town"},{name:"Cumbernauld",pop:"51,610",lat:55.9477764,lon:-3.9882568,type:"town"},{name:"Dunfermline",pop:"50,380",lat:56.0713724,lon:-3.4616183,type:"town"},{name:"Kirkcaldy",pop:"49,460",lat:56.1110218,lon:-3.1582296,type:"town"},{name:"Ayr",pop:"47,190",lat:55.4628044,lon:-4.6302502,type:"town"},{name:"Perth",pop:"47,180",lat:56.3914751,lon:-3.4383963,type:"town"},{name:"Inverness",pop:"46,870",lat:57.4790124,lon:-4.225739,type:"town"},{name:"Coatbridge",pop:"43,970",lat:55.8622848,lon:-4.0273166,type:"town"},{name:"Greenock",pop:"43,690",lat:55.9473423,lon:-4.7564721,type:"town"},{name:"Stirling",pop:"36,440",lat:56.1181242,lon:-3.9360012,type:"town"},{name:"Falkirk",pop:"35,310",lat:55.9991959,lon:-3.784376,type:"town"},{name:"Irvine",pop:"33,740",lat:55.6143121,lon:-4.6655591,type:"town"},{name:"Dumfries",pop:"33,280",lat:55.0727039,lon:-3.6044458,type:"town"},{name:"Arbroath",pop:"23,640",lat:56.5586729,lon:-2.5815669,type:"town"},{name:"Elgin",pop:"22,980",lat:57.6487891,lon:-3.3148459,type:"town"},{name:"Renfrew",pop:"22,010",lat:55.8775733,lon:-4.3888761,type:"town"},{name:"Dumbarton",pop:"19,950",lat:55.9432443,lon:-4.5708479,type:"town"},{name:"Peterhead",pop:"18,450",lat:57.5052909,lon:-1.7813194,type:"town"},{name:"St Andrews",pop:"16,800",lat:56.3403902,lon:-2.7955844,type:"town"},{name:"Troon",pop:"14,680",lat:55.5437893,lon:-4.663906,type:"town"},{name:"Fraserburgh",pop:"13,140",lat:57.6935974,lon:-2.0051497,type:"town"},{name:"Galashiels",pop:"12,660",lat:55.616418,lon:-2.8070791,type:"town"},{name:"Montrose",pop:"11,880",lat:56.7114295,lon:-2.4681544,type:"town"},{name:"Stonehaven",pop:"11,370",lat:56.9640234,lon:-2.2087993,type:"town"},{name:"Stranraer",pop:"10,510",lat:54.9044332,lon:-5.026204,type:"town"},{name:"Forres",pop:"9,900",lat:57.609864,lon:-3.613215,type:"town"},{name:"Nairn",pop:"9,860",lat:57.5850133,lon:-3.8681503,type:"town"},{name:"Cupar",pop:"9,270",lat:56.3193913,lon:-3.0116545,type:"town"},{name:"Oban",pop:"8,540",lat:56.4120166,lon:-5.4723731,type:"town"},{name:"Dunbar",pop:"8,470",lat:56.0021385,lon:-2.5158237,type:"town"},{name:"Peebles",pop:"8,380",lat:55.6517553,lon:-3.1885456,type:"town"},{name:"Thurso",pop:"7,760",lat:58.5947443,lon:-3.520577,type:"town"},{name:"Kirkwall",pop:"7,150",lat:58.9816049,lon:-2.960369,type:"town"},{name:"Wick",pop:"7,140",lat:58.4425516,lon:-3.0915827,type:"town"},{name:"Lerwick",pop:"7,040",lat:60.1531357,lon:-1.1427296,type:"town"},{name:"Fort William",pop:"5,830",lat:56.8178285,lon:-5.110974,type:"town"},{name:"Stornoway",pop:"5,250",lat:58.2084053,lon:-6.3881174,type:"town"},{name:"Campbeltown",pop:"4,800",lat:55.4241858,lon:-5.6051005,type:"town"},{name:"Rothesay",pop:"4,310",lat:55.8373085,lon:-5.0522439,type:"town"}],mr={data:[],activeParish:null,init:function(i,t,e,n){const r=this;if(this.project=e,this.camera=t,this.scene=i,this.x1=16,this.x2=12,this.labelRenderer=new Uv,this.labelRenderer.setSize(window.screen.width,n?window.screen.width:window.screen.height),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style["pointer-events"]="none",this.labelRenderer.domElement.style.top=0,this.labelRenderer.domElement.style.left=0,document.getElementById("mapHolder").appendChild(this.labelRenderer.domElement),!n){const a=new mn;a.position.set(0,0,0),i.add(a);const l=document.createElement("label");l.className="landmark",l.classList.add("parish");const c=document.createElement("video");c.src="videos/flag_loop.webm",c.loop=!0,c.autoplay=!0,c.muted=!0,c.controls=!1,l.appendChild(c);const h=document.createElement("span");h.textContent="PENDING",l.appendChild(h);const f=new Go(l);f.position.set(0,.1,0),f.center.set(0,0),a.add(f),a.renderOrder=-1e5,this.activeParish=a;for(var s=0;s<Hn.length;s++){const g=new mn,d=this.project.ll2xy(Hn[s].lat,Hn[s].lon);d[1]+=this.project.options.mapCentreOffsetY,g.position.set(d[0],0,d[1]),i.add(g);const _=document.createElement("label");_.className="landmark",_.id="landmark"+s;const M=parseInt(Hn[s].pop.replace(",",""));M>1e5?_.classList.add("large"):M>5e4?_.classList.add("medium"):M>2e4?_.classList.add("small"):_.classList.add("village");const R=document.createElement("span");R.textContent=Hn[s].name,_.appendChild(R);const b=new Go(_);b.position.set(0,0,0),b.center.set(0,0),g.add(b),g.renderOrder=-1e5,this.data.push({pin:g,label:_,label3:b})}}$("#x1").change(function(){r.x1=$(this).val()}),$("#x2").change(function(){r.x2=$(this).val()})},tooClose:function(i,t,e=1){for(var n in Hn){const r=this.dist(i,t,Hn[n].lat,Hn[n].lon);if(r<e)return[r,Hn[n],n]}return-1},dist(i,t,e,n){if(i==e&&t==n)return 0;const r=Math.PI*i/180,s=Math.PI*e/180,a=t-n,l=Math.PI*a/180;let c=Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(l);return c>1&&(c=1),c=Math.acos(c),c=c*180/Math.PI,c=c*60*1.1515,c=c*1.609344,c},smoothstep:function(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},render(i,t){this.labelRenderer.render(i,t);for(var e=0;e<this.data.length;e++){const n=2+t.position.distanceTo(this.data[e].pin.position),r=this.smoothstep(this.x1,this.x2,n);this.data[e].label.style.opacity=r}}};class uh{constructor(t){this.options=t,this.options.northRad=this.deg2rad(this.options.north),this.options.southRad=this.deg2rad(this.options.south),this.options.eastRad=this.deg2rad(this.options.east),this.options.westRad=this.deg2rad(this.options.west),this.ymin=this.mercY(this.options.southRad),this.ymax=this.mercY(this.options.northRad),this.xFactor=this.options.width/this.options.scale/(this.options.eastRad-this.options.westRad),this.yFactor=this.options.height/this.options.scale/(this.ymax-this.ymin),this.mode=this.options.mode?this.options.mode:"equirectangular"}deg2rad(t){return t*(Math.PI/180)}mercY(t){return Math.log(Math.tan(t/2+Math.PI/4))}ll2xy(t,e,n=!1){return this.mode=="equirectangular"?this.ll2xyEquirec(t,e,n):this.ll2xyMerc(t,e,n)}ll2xyMerc(t,e,n=!1){t=this.deg2rad(t),e=this.deg2rad(e);let r=e,s=this.mercY(t);return r=(r-this.options.westRad)*this.xFactor,s=(this.ymax-s)*this.yFactor,this.options.invert&&!n?[-(r-this.options.width/this.options.scale/2),-(s-this.options.height/this.options.scale/2)]:[r,s+this.options.offsetY]}ll2xyEquirec(t,e,n=!1){let r=this.options.width*((e-this.options.west)/(this.options.east-this.options.west)),s=this.options.height-this.options.height*((t-this.options.south)/(this.options.north-this.options.south));return s-=this.options.offsetY,r/=this.options.scale,s/=this.options.scale,this.options.invert&&!n&&(r=-(r-this.options.width/this.options.scale/2),s=-(s-this.options.height/this.options.scale/2)),[r,s]}}const ds={config:{north:60.86,south:54.634,east:-.7624839,west:-8.6667826,offsetY:0,scale:1,invert:!1,mode:"equirectangular"},init:function(){const i=this;this.frame=0,this.el=$("#insetInner img"),this.marker=$("#insetMarker"),this.config.width=this.el.width(),this.config.height=this.el.height();const t=.5*($("#insetInner").width()-this.config.width);$("#insetOverlay").css({width:this.el.width()+"px",height:this.el.height()+"px",left:t+"px"}),this.project=new uh(this.config),this.tex=null,new Zi().load("./images/inset_map.png",function(n){n.encoding=void 0,n.colorSpace=qe,i.tex=n,i.initHeat()},function(n){console.error(n)})},initHeat:function(){this.renderer=new ch({antialias:!0}),this.renderer.setSize(this.config.width,this.config.height),this.scene=new Du,this.camera=new Bs(this.config.width/-2,this.config.width/2,this.config.height/2,this.config.height/-2),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.scene.add(this.camera),document.getElementById("insetInner").appendChild(this.renderer.domElement),this.material=new Er({map:this.tex}),this.ar=this.config.width/this.config.height;const i=20;let t=`
    uniform float uAspectRatio; 
    `,e=`
    vec2 p = vMapUv; p.y /= uAspectRatio; float density = 0.0;
    float cutoff = 0.05;
    float bands = 15.;
    float bias = -.25;
    float smoothness = 0.2;
    float exponent = 35.;
    float factor = 3.0;
    vec2 h;

    vec2 uResolution = vec2(${this.config.width}, ${this.config.height});
    `;for(let s=0;s<i;s++)this.material.userData["hotspot"+s]={value:[0,0,0]},t+="uniform vec3 uHotspot"+s+`;
        `,e+=`

        // gaussian         
                
        h = uHotspot${s}.xy;
        h.y /= uAspectRatio;

        density += (factor * (uHotspot${s}.z)) * exp( - exponent * length(p - h / uResolution));


        

        // density += float(length(p - h / uResolution) < 0.01);
        `;e+=`; 
    gl_FragColor = vec4(0.5) * texture(map, vMapUv).a;
    

    // density = smoothstep(cutoff * 0.99, cutoff * 1.01, density);
    
    
    
    // density *= texture(map, vMapUv).a; // compensating for Y texture offset
    density = round(density * bands) / bands;


    
    float grid = 0.5 + (0.5 + bias) * sin(vMapUv.t * 500.);

    grid += bias;

    float final = smoothstep(grid, grid + smoothness, density);
  
    gl_FragColor = mix(gl_FragColor, gl_FragColor * vec4(62., 139., 103., 255.0) / 255.0, final);
    ;
    
`,this.material.onBeforeCompile=s=>{s.uniforms.uAspectRatio=new ln(this.ar),s.uniforms.uTest=new ln(1);for(let a=0;a<i;a++)s.uniforms["uHotspot"+a]=new ln(new nt(this.material.userData["hotspot"+a].value[0],this.material.userData["hotspot"+a].value[1],this.material.userData["hotspot"+a].value[2]));s.fragmentShader=t+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
            ${e}`),this._shader=s},this.material.toneMapping=!1;const n=new Ti(this.config.width,this.config.height),r=new rn(n,this.material);this.scene.add(r),this.renderer.render(this.scene,this.camera)},initLinks:function(i){const t=this;let e="";const n=$("#insetOverlay");$(".mapLink").remove();for(var r in i){e+='<div class="mapLink" style="transform:translate(';const s=t.project.ll2xy(i[r][0],i[r][1]);e+=`${s[0]}px, ${s[1]}px`,e+=')"></div>'}n.append(e)},hide:function(){this.marker.removeClass("show")},show:function(){this.marker.addClass("show")},update:function(i){this.frame++;const t=this.project.ll2xy(i.lat,i.lon);this.marker.css({transform:"translate("+(t[0]+"px, "+t[1]+"px)")}),this.renderer.render(this.scene,this.camera)}},xx={texLoaded:[null,null,null,null,null],overviewGroup:new mn,mapConfig:{north:59.36977,south:54.487505,east:-1.439095,west:-7.96315,width:5798,height:7965,offsetY:0,scale:100,invert:!0,mode:"mercator"},_shader:null,_year:0,inset:ds,reset:function(){this.scene.remove(this.overviewGroup),delete this.overviewGroup,this.overviewGroup=new mn,this.scene.add(this.overviewGroup),this.spin=!1,this.spinFree=!0,this.flying=!1,this.maxSpherePhase=.3,this.activeOpacityFactor=1,this.spinDir=-1,this.spinRate=0,this.spinPhase=0,this.isMobile?(this.camera.position.set(this.cameraPositionMobileInit[0],this.cameraPositionMobileInit[1],this.cameraPositionMobileInit[2]),this.lookAt=new nt(this.lookAtMobileInit[0],this.lookAtMobileInit[1],this.lookAtMobileInit[2])):(this.camera.position.set(this.cameraPositionInit[0],this.cameraPositionInit[1],this.cameraPositionInit[2]),this.lookAt=new nt(this.lookAtInit[0],this.lookAtInit[1],this.lookAtInit[2]),this.cameraSpinOffset=new nt(this.cameraSpinOffsetInit[0],this.cameraSpinOffsetInit[1],this.cameraSpinOffsetInit[2])),this.camera.lookAt(this.lookAt),gsap.set(".landmark.parish",{opacity:0})},init:function(i,t,e,n,r=!1){console.log("init map3d",r);const s=this;r?this.mapConfig={north:61,south:49,east:2.2,west:-11,width:1812,height:2800,offsetY:-200,mapCentreOffsetY:0,scale:40,invert:!0,mode:"equirectangular"}:(this.mapConfig={north:61,south:49,east:2.2,west:-11,width:9059,height:14e3,offsetY:-1e3,mapCentreOffsetY:0,scale:200,invert:!0,mode:"equirectangular"},this.FPSCounter=new fpsCounter),this.isMobile=r,this.callback=i,this.spieler=t,this.timeline=Uc,this.spinRateInc=1e-5,this.spinRateMax=75e-5,this.elevation=5,this.spheres={},this.ui=n,this.activeYear=null,this.debug=e,this.geodbscan=new Ov,this.lodPhase={value:1},this.infix=(this.debug,"_small"),this.currentPosition={lat:55,lon:-5},this.spherePhase=0,this.scene=new Du,this.camera=new je(45,window.screen.width/(r?window.screen.width:window.screen.height),.1,1e3),r||this.camera.setViewOffset(window.screen.width,window.screen.height,0,275,window.screen.width,window.screen.height),this.axesHelper=new kd(5),this.ambientLight=new Ld(16777215,1),this.frame=0,this.pivotGroup=new mn,this.dims=[this.mapConfig.width,this.mapConfig.height],this.project=new uh(this.mapConfig),this.orbitTarget=new Me,this.orbitTarget.position.set(0,0,0),this.vMesh=null,this.label=null,this.label3=null,this.pin=null,this.renderer=new ch({antialias:!0}),this.geometryGroup=new mn,this.scene.add(this.geometryGroup),this.scene.add(this.overviewGroup),this.scene.background=new $t(14409438),this.camera.eulerOrder="YXZ",this.cameraPositionInit=[0,77.5,9.21],this.cameraPositionFinal=[0,77.5,9.21],this.lookAtInit=[0,0,9.22],this.cameraPositionMobileInit=[0,40,11],this.lookAtMobileInit=[0,0,10.1],this.cameraSpinOffsetInit=[0,0,-5],this.cameraPositionMobile=[0,45,11],this.lookAtMobile=[0,0,11.1],this.rotationMatrix=new fe,this.targetQuaternion=new Ai,this.renderer.setSize(window.screen.width,r?window.screen.width:window.screen.height),this.renderer.sortObjects=!0,this.renderer.outputEncoding=void 0,this.renderer.outputColorSpace="srgb",ae.enabled=!1,this.renderer.useLegacyLights=!1,document.getElementById("mapHolder").appendChild(this.renderer.domElement),this.plane=null;const a=new Zi;a.load(r?"../images/sg_tex_col-2_mobile.jpg":"./images/sg_tex_col-1_desat_B.jpg",function(c){c.encoding=void 0,c.colorSpace=qe,s.texLoaded[0]=c,s.checkTex()},function(c){console.error(c)}),new Zi,a.load("./images/noise.png",function(c){c.encoding=void 0,c.colorSpace=qe,c.wrapS=wr,c.wrapT=wr,s.texLoaded[4]=c,s.checkTex()},function(c){console.error(c)}),r||(new Zi().load("./images/sg_tex_height_normalised.png",function(f){s.texLoaded[1]=f,s.checkTex()},function(f){console.error(f)}),new Zi().load("./images/sg_tex_col-2-B.jpg",function(f){s.texLoaded[3]=f,s.checkTex()},function(f){console.error(f)})),new Zi().load(r?"../images/sg_tex_mask_mobile.png":"./images/sg_tex_mask_small.jpg",function(c){s.texLoaded[2]=c,s.checkTex()},function(c){console.error(c)}),this.sGeometry=new al(.5,32,16,0,Math.PI*2,0,Math.PI*.5),this.sMaterialActive=new nl({color:16777215,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,userData:{intrinsicOpacity:0}}),this.activeSphere=new rn(this.sGeometry,this.sMaterialActive),this.scene.add(this.activeSphere)},populate:function(i,t,e,n,r){const s=this;this.isMobile||(this.ui.populate(i.surname),$("body").hasClass("changer")||this.ui.showMap()),this.spieler.init(i.surname,i.id,t,e,function(a,l){if(a&&i.num_records>300){const f=Object.keys(a);s.ui.ph("first_year",f[0]),s.ui.ph("final_description",s.spieler.data[s.spieler.data.length-1].text);const g=[],d=[];for(var c in a)g.push([a[c][1]*.23,a[c][0]]),d.push(l[c]);const _=s.geodbscan.cluster(g,{minPts:2,epsilon:15e3}),M=[];for(var h in _){let R=0,b=-1;for(var c in _[h]){const L=s.spieler.data[_[h][c]];M.push(_[h][c]),L.total>R&&(R=L.total,b=_[h][c])}const x=M.indexOf(b);x>-1&&M.splice(x,1),console.log("in cluster "+h+", the ID of the largest cluster is "+b+" and the quantity is "+R)}e.init(i.id,t),s.isMobile||Uc.init(e,a,1560,1900,"population","continuousYear"),s.reset(),s.makeSpheres(a,l,M),s.isMobile||(s.isMobile||s.inset.initLinks(a),s.ui.showQR(i.id,n)),r()}else e.init(s.state.id,s.dataRoot,function(f){ui.movePanel("insufficient")})},this.debug)},makeSpheres:function(i,t,e){this.coords=i;for(var n in this.spheres)this.scene.remove(this.spheres[n]),delete this.spheres[n];$(".overviewLabel").remove();let r=!0,s=0;for(var a in i){const l=t[a],c=this.project.ll2xy(i[a][0],i[a][1]);c[1]+=this.project.options.mapCentreOffsetY,r&&(this.activeSphere.position.set(c[0],0,c[1]),r=!1);let h=this.project.ll2xy(i[a][0],i[a][1],!0);if(this._shader.uniforms["uHotspot"+s].value.x=h[0]*this.mapConfig.scale,this._shader.uniforms["uHotspot"+s].value.y=this.mapConfig.height-h[1]*this.mapConfig.scale,this._shader.uniforms["uHotspot"+s].value.z=0,!this.isMobile){let M=this.inset.project.ll2xy(i[a][0],i[a][1],!0);M[1]=this.inset.config.height-M[1],this.inset._shader.uniforms["uHotspot"+s].value.x=M[0],this.inset._shader.uniforms["uHotspot"+s].value.y=M[1],this.inset._shader.uniforms["uHotspot"+s].value.z=1}const f=new mn;f.position.set(c[0]+(this.isMobile?18.6:0),0,c[1]),this.overviewGroup.add(f);const g=document.createElement("label");g.className="overviewLabel"+(e.indexOf(s)>-1?" suppress":"");const d=document.createElement("span");d.textContent=l,g.appendChild(d);const _=new Go(g);_.position.set(0,0,0),_.center.set(0,0),f.add(_),f.renderOrder=1,s++}for(s=s;s<12;s++)this._shader.uniforms["uHotspot"+s].value.x=0,this._shader.uniforms["uHotspot"+s].value.y=0,this._shader.uniforms["uHotspot"+s].value.z=0,this.isMobile||(this.inset._shader.uniforms["uHotspot"+s].value.x=0,this.inset._shader.uniforms["uHotspot"+s].value.y=0,this.inset._shader.uniforms["uHotspot"+s].value.z=0)},goMobile:function(){const i=this,t=this.spieler.clusterDensities(1900);for(var e in t)this._shader.uniforms["uHotspot"+e].value.z=t[e]*1.3;gsap.to(this._shader.uniforms.uHeatmapVisiblePhase,{value:1,duration:5}),this.spin=!1,gsap.to(this.camera.position,{x:this.cameraPositionMobile[0],y:this.cameraPositionMobile[1],z:this.cameraPositionMobile[2],ease:"power1.out",duration:2,delay:0,onUpdate:function(){i.camera.lookAt(i.lookAt)},onComplete:function(){console.log("done")}}),gsap.to(this.lookAt,{x:this.lookAtMobile[0],y:this.lookAtMobile[1],z:this.lookAtMobile[2],ease:"power1.out",duration:2,delay:0,onUpdate:function(){i.camera.lookAt(i.lookAt)}})},fly:function(i,t,e,n,r){const s=$("body").hasClass("changer")?0:1;console.log("tf",s);const a=this;let l;this.spin=!0;const c=document.querySelector(".landmark.parish"),h=document.querySelector(".landmark.parish span");this.camera.up.set(0,1,0),this.flying=!0,r==-1?(ds.hide(),gsap.to(this.sMaterialOverview,{opacity:1,ease:"sine.inOut",duration:s*2,delay:s*2}),gsap.to(this,{activeOpacityFactor:0,duration:s*2,ease:"sine.inOut"}),gsap.to(this._shader.uniforms.uHeatmapVisiblePhase,{value:1,duration:s*5})):(ds.show(),gsap.to(this.currentPosition,{lat:e[0],lon:e[1],duration:s*5,ease:"sine.inOut",onUpdate:function(){ds.update(a.currentPosition)}})),r!=-1&&(l=this.project.ll2xy(e[0],e[1]),l[1]+=this.project.options.mapCentreOffsetY,gsap.to(".landmark.hidden span",{opacity:1,duration:.5,onComplete:function(){$(".landmark.hidden").removeClass("hidden")}}),gsap.to(".landmark.parish",{opacity:0,duration:1,onComplete:function(){mr.activeParish.position.set(l[0],0,l[1]),h.innerHTML=t,c.classList.remove("noText");const f=mr.tooClose(e[0],e[1]);f!=-1&&($("#landmark"+f[2]).addClass("hidden"),gsap.to("#landmark"+f[2]+" span",{opacity:0,duration:.5})),h.innerHTML=t,gsap.to(".landmark.parish",{opacity:1,duration:1,delay:2.5})}}),gsap.to(this,{activeOpacityFactor:0,ease:"sine.inOut",duration:2.5,onComplete:function(){a.activeSphere.position.set(l[0],0,l[1]),gsap.to(a,{activeOpacityFactor:1,ease:"sine.inOut",duration:2.5})}})),r==1||r==-2?(r==-2&&gsap.to(this._shader.uniforms.uHeatmapVisiblePhase,{value:0,duration:5}),this.spinFree=!0,this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[0]),this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[1]),this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[2]),this.spinPhase=0,this.spinRate=0,gsap.to(this.camera.position,{x:l[0],y:this.elevation,z:l[1]-10,ease:"power1.inOut",delay:0,duration:5}),gsap.to(this.lodPhase,{value:0,duration:2.5,ease:"sine.inOut"}),$("#mapHolder").addClass("tiltshift"),this.cameraSpinOffset.setY(this.elevation),gsap.to(this.lookAt,{x:l[0],y:0,z:l[1]-0,ease:"power1.inOut",delay:0,duration:5,onUpdate:function(){a.camera.lookAt(a.lookAt)},onComplete:function(){a.spin=!0,n()}})):r==-1?(gsap.to(this.lodPhase,{value:1,duration:s*5,ease:"power1.inOut"}),$("#mapHolder").removeClass("tiltshift"),this.spin=!0,this.spinFree=!1,gsap.to(this,{spinPhase:this.spinPhase>Math.PI*.5?Math.PI:0,duration:s*5,ease:"sine.inOut"}),gsap.to(this.camera.position,{x:this.cameraPositionFinal[0],y:this.cameraPositionFinal[1],z:this.cameraPositionFinal[2],ease:"sine.inOut",duration:s*5,delay:0,onUpdate:function(){a.camera.lookAt(a.lookAt)},onComplete:function(){n()}}),gsap.to(this.lookAt,{x:this.lookAtInit[0],y:this.lookAtInit[1],z:this.lookAtInit[2],ease:"sine.inOut",duration:s*5,delay:0,onUpdate:function(){a.camera.lookAt(a.lookAt)}}),gsap.to(this.cameraSpinOffset,{x:this.cameraSpinOffsetInit[0],y:this.cameraSpinOffsetInit[1],z:this.cameraSpinOffsetInit[2],ease:"sine.inOut",duration:s*5,delay:0,onUpdate:function(){a.camera.lookAt(a.lookAt)}}),gsap.to(".landmark.parish",{opacity:0,duration:s*1}),gsap.to("#compass",{transform:"rotate(0)",duration:s*.5,ease:"sine.inOut"})):(gsap.to(this.cameraSpinOffset,{y:this.elevation*3,ease:"sine.inOut",delay:0,duration:s*2.5}),gsap.to(this.cameraSpinOffset,{y:this.elevation,ease:"sine.inOut",delay:s*2.5,duration:s*2.5}),gsap.to(this.cameraSpinOffset,{x:0,z:-10,ease:"sine.inOut",duration:s*5,onUpdate:function(){a.camera.position.setX(a.lookAt.x+a.cameraSpinOffset.x),a.camera.position.setY(a.lookAt.y+a.cameraSpinOffset.y),a.camera.position.setZ(a.lookAt.z+a.cameraSpinOffset.z),a.camera.lookAt(a.lookAt)},onComplete:function(){a.spin=!0,n()}}),gsap.to(this.lookAt,{x:l[0],y:0,z:l[1]-0,ease:"sine.inOut",duration:s*5,onUpdate:function(){a.camera.lookAt(a.lookAt)}})),window.setTimeout(function(){a.flying=!1},s*6e3),this.lastPosition=l},checkTex:function(){if(console.log("check tex"),this.isMobile&&this.texLoaded[0]&&this.texLoaded[2]&&this.texLoaded[4]||!this.isMobile&&this.texLoaded[0]&&this.texLoaded[1]&&this.texLoaded[2]&&this.texLoaded[3]&&this.texLoaded[4]){mr.init(this.scene,this.camera,this.project,this.isMobile),this.spinTarget=mr.spinTarget,this.materials={},this.isMobile?this.materials.untiled=new Er({map:this.texLoaded[0],emissiveMap:this.texLoaded[0],emissive:new $t(16777215),normalMap:this.texLoaded[2],alphaMap:this.texLoaded[0]}):this.materials.untiled=new Er({map:this.texLoaded[0],displacementMap:this.texLoaded[1],displacementScale:.2,displacementBias:0,emissiveMap:this.texLoaded[0],emissive:new $t(16777215),normalMap:this.texLoaded[2],alphaMap:this.texLoaded[3]}),this.ar=this.mapConfig.width/this.mapConfig.height;const i=12;let t=`uniform float uLodPhase; 
            uniform float uHeatmapVisiblePhase; 
            uniform float uAspectRatio; 
            uniform vec2 uResolution;
            `,e=`vec2 p = vMapUv; p.y /= uAspectRatio; float density = 0.0;

            float cutoff = 0.05;
            float bands = 15.;
            float bias = -.25;
            float smoothness = 0.2;
            float exponent = 35.;
            float factor = 1.0;
            vec2 h;
            `;for(let c=0;c<i;c++)this.materials.untiled.userData["hotspot"+c]={value:[0,0,0]},t+="uniform vec3 uHotspot"+c+`;
                `,e+=`
                
                // gaussian         
                
                h = uHotspot${c}.xy;
                h.y /= uAspectRatio;

                density += (factor * uHotspot${c}.z) * exp( - exponent * length(p - h / uResolution)); 
                // density += float(length(p - h / uResolution) < 0.01);
                
                `;e+=`
                
            if(density < cutoff) {
                density = 0.0;
            }

            density *= texture(normalMap, vMapUv + vec2(0., 1000./14000.)).r; // compensating for Y texture offset
            density = round(density * bands) / bands;

            // map LOD
            gl_FragColor = mix(gl_FragColor, texture(alphaMap, vMapUv), uLodPhase); 
            

            float grid = 0.5 + (0.5 + bias) * sin(vMapUv.t * ${this.isMobile?"1000":"1500"}.);

            grid += bias;

            density *= uHeatmapVisiblePhase;

            float final = smoothstep(grid, grid + smoothness, density);
            gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(113., 195., 179.) / 255.0, final);
            `,this.materials.untiled.onBeforeCompile=c=>{c.uniforms.uLodPhase=new ln(0),c.uniforms.uHeatmapVisiblePhase=new ln(0),c.uniforms.uAspectRatio=new ln(this.ar),c.uniforms.uResolution=new ln([this.mapConfig.width,this.mapConfig.height]);for(let h=0;h<i;h++)c.uniforms["uHotspot"+h]=new ln(new nt(this.materials.untiled.userData["hotspot"+h].value[0],this.materials.untiled.userData["hotspot"+h].value[1],this.materials.untiled.userData["hotspot"+h].value[2]));c.fragmentShader=t+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
                    ${e}`),this._shader=c},this.materials.untiled.toneMapping=!1;const n=new Ti(this.dims[0]/this.mapConfig.scale,this.dims[1]/this.mapConfig.scale,parseInt(16*this.dims[0]/this.mapConfig.scale),parseInt(16*this.dims[1]/this.mapConfig.scale)),r=new rn(n,this.materials.untiled);this.geometryGroup.add(r),this.materials.clouds=new Er({map:this.texLoaded[4],transparent:!0,color:16777215,blending:du,blendEquation:oi,blendSrc:Es,blendDst:pu});let s=`
            uniform vec2 uResolution; 
            uniform float uFrame; 

            //SETTINGS//
            const float timeScale = 5.0;
            const float cloudScale = 1.5;
            const float skyCover = 0.6; //overwritten by mouse x drag
            const float softness = 0.35;
            const float brightness = 2.0;
            const int noiseOctaves = 5;
            const float curlStrain = 3.0;
            
            //SETTINGS//

            float saturate(float num)
            {
                return clamp(num,0.0,1.0);
            }

            float noise(vec2 uv, sampler2D map)
            {
                return texture(map,uv).r;
            }

            vec2 rotate(vec2 uv, sampler2D map)
            {
                uv = uv + noise(uv*0.2, map)*0.005;
                float rot = curlStrain;
                float sinRot=sin(rot);
                float cosRot=cos(rot);
                mat2 rotMat = mat2(cosRot,-sinRot,sinRot,cosRot);
                return uv * rotMat;
            }

            float fbm (vec2 uv, sampler2D map)
            {
                float rot = 1.57;
                float sinRot=sin(rot);
                float cosRot=cos(rot);
                float f = 0.0;
                float total = 0.0;
                float mul = 0.5;
                mat2 rotMat = mat2(cosRot,-sinRot,sinRot,cosRot);
                
                for(int i = 0;i < noiseOctaves;i++)
                {
                    f += noise(uv+vec2(uFrame/60.*0.00015*timeScale, 0.) *(1.0-mul), map)*mul;
                    total += mul;
                    uv *= 3.0;
                    uv=rotate(uv, map);
                    mul *= 0.5;
                }
                return f/total;
            }


            `,a=`
            vec2 uv = vMapUv.xy * uResolution / (1000.0 * cloudScale);
            
            float cover = 0.65;
            
            float bright = brightness*(1.8-cover);
            
            float color1 = fbm(uv-vec2(0.5+uFrame/60.*0.00004*timeScale, 0.), map);
            float color2 = fbm(uv-vec2(10.5+uFrame/60.*0.00002*timeScale, 0.), map);
            
            float clouds1 = smoothstep(1.0-cover,min((1.0-cover)+softness*2.0,1.0),color1);
            float clouds2 = smoothstep(1.0-cover,min((1.0-cover)+softness,1.0),color2);
            
            float cloudsFormComb = saturate(clouds1+clouds2);
            
            vec4 skyCol = vec4(208.0, 216.0, 192.0, 0.) / 255.;
            float cloudCol = saturate(saturate(1.0-pow(color1,2.0)*0.5)*bright * 1.0);
            vec4 clouds1Color = vec4(cloudCol,cloudCol,cloudCol,1.0);
            vec4 clouds2Color = mix(clouds1Color,skyCol,0.4);
            vec4 cloudColComb = mix(clouds1Color,clouds2Color,saturate(clouds2-clouds1));
            cloudColComb.rgb *= cloudColComb.a;

            gl_FragColor = mix(skyCol,cloudColComb,cloudsFormComb);
            gl_FragColor.a *= 0.15;
            `;this.materials.clouds.onBeforeCompile=c=>{c.uniforms.uFrame=new ln(0),c.uniforms.uResolution=new ln([this.dims[0]/this.mapConfig.scale,this.dims[1]/this.mapConfig.scale]),c.fragmentShader=s+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
                    ${a}`),this._cloudshader=c},new Ti(this.dims[0]/this.mapConfig.scale,this.dims[1]/this.mapConfig.scale);const l=new rn(n,this.materials.clouds);l.position.z=2.75,this.geometryGroup.add(l),this.renderer.setAnimationLoop(this.animate.bind(this)),this.geometryGroup.rotateZ(Math.PI/2),this.geometryGroup.rotateX(-Math.PI/2),this.geometryGroup.rotateY(Math.PI/2),this.geometryGroup.rotateZ(Math.PI),console.log("blork"),this.callback()}},animate:function(i){if(this.isMobile||this.FPSCounter.update(i),this.frame++,this.camera.position.y,this.spherePhase+=.0025,this.spherePhase>this.maxSpherePhase&&(this.spherePhase=0),this.activeSphere.scale.set(this.spherePhase*2,this.spherePhase*2,this.spherePhase*2),this._shader&&(this._shader.uniforms.uLodPhase.value=this.lodPhase.value),this._cloudshader&&(this._cloudshader.uniforms.uFrame.value=this.frame),!this.isMobile&&this.timeline.continuousYear!=this._year){this._year=this.timeline.continuousYear;const e=this.spieler.clusterDensities(this._year);for(var t in e)this._shader.uniforms["uHotspot"+t].value.z=e[t],this.inset._shader.uniforms["uHotspot"+t].value.z=e[t]}if(this.spin){const e=this.lookAt.x-this.camera.position.x,n=this.lookAt.z-this.camera.position.z,r=Math.sqrt(e*e+n*n);let s=Math.PI/2+.25*Math.sin(this.spinPhase);this.spinFree&&(this.spinPhase+=this.spinRate,this.spinRate<this.spinRateMax&&(this.spinRate+=this.spinRateInc),this.spinPhase=this.spinPhase%(Math.PI*2));let a=s*180/Math.PI;a-=90,gsap.set("#compass",{transform:"rotate("+parseFloat(-a)+"deg)"}),this.cameraSpinOffset.setX(-r*Math.cos(s)),this.cameraSpinOffset.setZ(-r*Math.sin(s)),this.camera.position.x=this.lookAt.x+this.cameraSpinOffset.x,this.camera.position.z=this.lookAt.z+this.cameraSpinOffset.z,this.camera.lookAt(this.lookAt)}this.renderer.render(this.scene,this.camera),mr.render(this.scene,this.camera)}};function hh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}const Oc={features:[{type:"Feature",properties:{name:"The Highlands"},geometry:{coordinates:[[[-4.685763482308516,57.06871606329631],[-4.034372544180201,57.58206607241789],[-2.465497724473778,58.70433208009811],[-4.192399320061128,58.75941757846513],[-5.380885857478091,58.62751926231013],[-5.9616453267786085,57.794805664241125],[-5.898848935103331,57.317355914448854],[-5.598356356164828,57.26624839079045],[-6.03329146866372,56.888272930300246],[-6.335589508351319,56.67366106551296],[-6.050001958391164,56.66962290087233],[-5.903260864690026,56.5266813164117],[-5.4797724213922265,56.47261753467197],[-5.107116689473372,56.6760236700548],[-4.685375380253902,56.83748707260753],[-4.274274187293628,56.73163704011358],[-4.153831267283508,57.032538520812324],[-4.685763482308516,57.06871606329631]]],type:"Polygon"}},{type:"Feature",properties:{name:"Moray"},geometry:{coordinates:[[[-2.769457511489634,57.7266272575898],[-3.1944509122806437,57.80292173346777],[-3.9562883784009273,57.637905929741294],[-4.684985857447344,57.06900475251368],[-3.7755538798975294,57.00684984362675],[-3.7061620290695316,57.17822236131774],[-2.769457511489634,57.7266272575898]]],type:"Polygon"}},{type:"Feature",properties:{name:"Argyll"},geometry:{coordinates:[[[-5.578542487355776,55.767662956005495],[-5.393794993437751,55.8940698438025],[-5.30866732003496,55.85079602182023],[-5.247421995696534,55.87939700754824],[-5.183517048023006,55.94115736828719],[-4.970853147394109,55.85692180521278],[-4.859568391475364,55.95226379235814],[-4.91296512201302,56.05849222301666],[-4.681373172818553,56.41900675301616],[-4.127688758529722,56.54380948591605],[-4.278000590745936,56.73270444045818],[-4.688635810093601,56.8351304972508],[-5.10781145773538,56.67527917776957],[-5.502906832232526,56.456245144746845],[-5.746198609626532,55.985665766135895],[-5.578542487355776,55.767662956005495]]],type:"Polygon"}},{type:"Feature",properties:{name:"Perth and Kinross"},geometry:{coordinates:[[[-3.3085409694566295,56.35941824570247],[-3.2623054222269587,56.35426786235308],[-3.084328830167806,56.43549847710896],[-3.30608813623914,56.41102143409837],[-3.315191497983264,56.58308243799498],[-3.3964550876651174,56.885568383656704],[-4.280260645663702,56.731338679850836],[-3.811253619287214,56.14675313244231],[-3.3085409694566295,56.35941824570247]]],type:"Polygon"}},{type:"Feature",properties:{name:"Angus",island:""},geometry:{coordinates:[[[-3.413781251079513,56.977416169692276],[-3.314934792199253,56.58458357106356],[-3.3057210072012424,56.41079018198039],[-2.8894737236665833,56.457504719602326],[-2.2222820965170627,56.3573737187248],[-2.4010800833666224,56.64172061614167],[-3.413781251079513,56.977416169692276]]],type:"Polygon"}},{type:"Feature",properties:{name:"Falkirk"},geometry:{coordinates:[[[-3.922184882106393,56.01500900354716],[-3.859572405420437,55.97033695684493],[-3.6703888092272905,55.98796689665852],[-3.6656764205513923,56.02559383771873],[-3.736652611433499,56.065596922769146],[-3.922184882106393,56.01500900354716]]],type:"Polygon"}},{type:"Feature",properties:{name:"Inverclyde"},geometry:{coordinates:[[[-4.926661398866116,55.84478139255927],[-4.541723392906107,55.8443024675754],[-4.453729264819742,55.92500979995299],[-4.669494802475327,55.94574750169892],[-4.848104656115424,55.968935475541656],[-4.9169250036807455,55.90767328333541],[-4.926661398866116,55.84478139255927]]],type:"Polygon"}},{type:"Feature",properties:{name:"Ayrshire"},geometry:{coordinates:[[[-3.7029765285040526,55.391084597400976],[-4.358001620109889,55.7168873438593],[-4.544447114299345,55.84206262145514],[-4.963887181680832,55.843553496300785],[-4.960714753739069,55.67518792575973],[-4.705688249292052,55.52934183950438],[-5.159449745228301,55.08239210997496],[-4.516118955117179,55.04682122974586],[-3.7029765285040526,55.391084597400976]]],type:"Polygon"}},{type:"Feature",properties:{name:"West Lothian"},geometry:{coordinates:[[[-3.6660803240724817,56.024201406737575],[-3.6961589619682513,55.873859158719654],[-3.564616352015406,55.811712839113596],[-3.354716898379081,55.870339802956806],[-3.475650081722904,55.93371828911131],[-3.4349671296294275,56.01832195375229],[-3.6660803240724817,56.024201406737575]]],type:"Polygon"}},{type:"Feature",properties:{name:"Lanarkshire"},geometry:{coordinates:[[[-3.7021114448930916,55.391464217400426],[-3.3455502292576966,55.659989770352695],[-3.485667399408186,55.657639566869335],[-3.3641459689799547,55.86951001733445],[-3.5703255153686086,55.81529765743463],[-3.6959242802030303,55.87894299206883],[-3.6765270496039193,55.98634179726707],[-4.0111781214916675,55.95327669085566],[-3.958296507133241,55.72583119249202],[-4.358133707475588,55.71642105275362],[-3.7021114448930916,55.391464217400426]]],type:"Polygon"}},{type:"Feature",properties:{name:"Dunbartonshire"},geometry:{coordinates:[[[-4.887138563090332,56.02549387206756],[-4.8466482055141284,55.971393470779674],[-4.453897005882425,55.926736667215096],[-4.443430318514544,55.93966039414386],[-4.008980733443849,55.950236317936685],[-3.8618765491889064,55.967866787488845],[-4.205415950178946,56.21874876274481],[-4.887138563090332,56.02549387206756]]],type:"Polygon"}},{type:"Feature",properties:{name:"Stirling"},geometry:{coordinates:[[[-3.928626054607747,56.016083778097396],[-3.745159496213091,56.0643262597265],[-3.872914409132619,56.12204812785413],[-3.815761158296965,56.14679899100477],[-3.921899428633452,56.294323975842474],[-4.207522864293139,56.21992894119094],[-3.928626054607747,56.016083778097396]]],type:"Polygon"}},{type:"Feature",properties:{name:"Glasgow"},geometry:{coordinates:[[[-4.4381468533591715,55.939997287509016],[-4.544640991641899,55.842295483582944],[-4.358181292698589,55.71763471509118],[-3.9566105009884325,55.725141305203834],[-4.0137521194034775,55.95052297187024],[-4.4381468533591715,55.939997287509016]]],type:"Polygon"}},{type:"Feature",properties:{name:"Isle of Bute",island:"yes"},geometry:{coordinates:[[[-5.182568851844735,55.93181984455077],[-5.2334766007279825,55.892908267503174],[-5.123853637116412,55.74656075219181],[-4.9946449041876235,55.6998757469494],[-5.0063572617467855,55.84705822030267],[-5.182568851844735,55.93181984455077]]],type:"Polygon"}},{type:"Feature",properties:{name:"Kintyre"},geometry:{coordinates:[[[-5.404688656785652,55.887510227529305],[-5.6469850270324855,55.71350217322063],[-5.9012866996681055,55.300356346010545],[-5.594033709281518,55.23518087307815],[-5.459872120019952,55.42704714834571],[-5.413646332851158,55.71949063579237],[-5.249598441647578,55.78841859718176],[-5.404688656785652,55.887510227529305]]],type:"Polygon"}},{type:"Feature",properties:{name:"Loch Lomond"},geometry:{coordinates:[[[-4.883547724017944,56.088168871053796],[-4.874798373184603,56.03169478577115],[-3.923371080186712,56.295888442052046],[-4.123045771707552,56.54367774165897],[-4.678831139944208,56.42058963763594],[-4.883547724017944,56.088168871053796]]],type:"Polygon"}},{type:"Feature",properties:{name:"The Borders"},geometry:{coordinates:[[[-2.844626393340235,55.77345741436568],[-2.634642605571173,55.669725349147626],[-3.34530742296036,55.66171902378079],[-3.69577588977927,55.39263321796979],[-2.564485126489359,55.20792662794665],[-1.391976586768834,55.7503159441836],[-2.088571074315354,56.02706970060109],[-2.844626393340235,55.77345741436568]]],type:"Polygon"}},{type:"Feature",properties:{name:"Dumfries and Galloway"},geometry:{coordinates:[[[-2.563145434553064,55.212314333722105],[-3.6968014719076336,55.39271445319227],[-4.51669821183097,55.04576567175539],[-5.327958874216506,55.09116809060379],[-5.311496859195358,54.59860907222523],[-4.058174471489082,54.62877528187241],[-3.014485976549338,54.90511394956849],[-2.563145434553064,55.212314333722105]]],type:"Polygon"}},{type:"Feature",properties:{name:"Edinburgh"},geometry:{coordinates:[[[-3.429231293696631,56.017071897222024],[-3.4735231281955237,55.932850661724984],[-3.3599448499994367,55.87067542306694],[-3.0111631967203607,55.851167780693004],[-2.919813576154894,55.96823581698257],[-3.112683384612808,56.03783795309377],[-3.429231293696631,56.017071897222024]]],type:"Polygon"}},{type:"Feature",properties:{name:"East Lothian"},geometry:{coordinates:[[[-3.010633647831469,55.85101289794247],[-2.843966061244288,55.7732281911305],[-2.208629527455429,55.987025257150435],[-2.1643892342983975,56.19771788533893],[-2.8376529486859283,56.0856565045037],[-3.010633647831469,55.85101289794247]]],type:"Polygon"}},{type:"Feature",properties:{name:"Midlothian"},geometry:{coordinates:[[[-3.3609555022223105,55.868591602687275],[-3.4885437245856963,55.6600834877658],[-2.6313069273016936,55.67040752582918],[-3.0136411397226937,55.854143140925686],[-3.3609555022223105,55.868591602687275]]],type:"Polygon"}},{type:"Feature",properties:{name:"Arran",island:"yes"},geometry:{coordinates:[[[-5.329008183029657,55.735206155536076],[-5.436948390804332,55.57578694939039],[-5.236717192167021,55.365210282234074],[-4.733708612739889,55.55125726397216],[-5.234695855761544,55.76585884516629],[-5.329008183029657,55.735206155536076]]],type:"Polygon"}},{type:"Feature",properties:{name:"Fife"},geometry:{coordinates:[[[-3.286215260829067,56.357515397197545],[-3.8695792394689477,56.12152067142077],[-3.6662863820233156,56.027501049371295],[-3.227086298164835,56.01331062244495],[-2.4543756763487465,56.2368462639142],[-2.686518031888909,56.43028160882389],[-2.8909000691959363,56.458680115089834],[-3.286215260829067,56.357515397197545]]],type:"Polygon"}},{type:"Feature",properties:{name:"Aberdeenshire"},geometry:{coordinates:[[[-3.7766465606887323,57.00429366132445],[-3.4154895181858507,56.97756968043008],[-2.4041600502853555,56.642177071635246],[-2.139241295328304,56.709837745034235],[-1.5653296774439411,57.746288256197005],[-2.7550884387034955,57.742814238792704],[-3.702312932078769,57.18060920283091],[-3.7766465606887323,57.00429366132445]]],type:"Polygon"},id:23},{type:"Feature",properties:{name:"The Outer Hebrides",island:"yes"},geometry:{coordinates:[[[-5.97087474027694,58.51874393531514],[-7.277225014654107,58.718539728949],[-8.367937004355639,56.66850687051007],[-7.386205305801383,56.665300575043034],[-7.00400096586722,57.50168220080576],[-6.458434263608467,57.751570918211684],[-5.97087474027694,58.51874393531514]]],type:"Polygon"}},{type:"Feature",properties:{name:"Orkney",island:"yes"},geometry:{coordinates:[[[-3.671903631426545,58.80364931596873],[-2.500487181242704,58.700325307169265],[-2.103548609691643,59.41099999134519],[-3.0831029002273453,59.502043785623954],[-3.671903631426545,58.80364931596873]]],type:"Polygon"}},{type:"Feature",properties:{name:"Shetland",island:"yes"},geometry:{coordinates:[[[-2.642611114193784,60.717113480701386],[-2.642611114193784,59.73116539719098],[-.15651589926457632,59.73116539719098],[-.15381236827633415,60.99714580464973],[-2.642611114193784,60.717113480701386]]],type:"Polygon"}},{type:"Feature",properties:{name:"The Isle of Mull",island:"yes"},geometry:{coordinates:[[[-6.049483550244133,56.655273782500814],[-6.419813769119827,56.6639571008312],[-6.764728947579528,56.17464713368713],[-5.763762485251277,56.273752631171135],[-5.610694365844012,56.49226101885125],[-5.907438986743074,56.52708140053872],[-6.049483550244133,56.655273782500814]]],type:"Polygon"}},{type:"Feature",properties:{name:"Isles of Coll and Tiree",island:"yes"},geometry:{coordinates:[[[-6.435298721827394,56.67623493104472],[-6.369262627136322,56.81423505526362],[-7.2504651542948295,56.443784016770394],[-6.768488204207841,56.32178028934882],[-6.435298721827394,56.67623493104472]]],type:"Polygon"}},{type:"Feature",properties:{name:"Isle of Jura",island:"yes"},geometry:{coordinates:[[[-5.65379663280936,56.145285578631615],[-5.676626014186013,56.157234532629815],[-6.146189473613305,56.074484715914366],[-6.087356627381581,55.81552333518448],[-6.013850952055691,55.72949697084991],[-5.65379663280936,56.145285578631615]]],type:"Polygon"}},{type:"Feature",properties:{name:"Islay",island:"yes"},geometry:{coordinates:[[[-6.119210206243565,55.96181830420417],[-6.54560582571807,55.966563139320016],[-6.805698930450376,55.70014732775064],[-6.353258798755576,55.49124935888122],[-5.963858934343278,55.66677428898464],[-6.08876985622237,55.813797887451926],[-6.119210206243565,55.96181830420417]]],type:"Polygon"}},{type:"Feature",properties:{name:"The Isle of Skye",island:"yes"},geometry:{coordinates:[[[-5.609935273213495,57.268143251292656],[-5.894619232719663,57.28932840786385],[-5.978192391658752,57.69625441026423],[-6.230208314801104,57.77392365412996],[-6.839264098143161,57.59222950842681],[-6.818003156145295,57.31419671184301],[-6.824656128252485,57.09265796245319],[-6.556979948782384,56.89575824253669],[-6.189824713074728,56.796308248867206],[-5.929773677951147,57.006379475344914],[-5.609935273213495,57.268143251292656]]],type:"Polygon"}}]},Fv={from(i,t){const e=turf.point([t,i]);for(let n in Oc.features){const r=Oc.features[n];if(turf.booleanPointInPolygon(e,r))return r.properties.name}return!1}},Bv={data:{1592:"James VI recognises the power of presbyterianism with his 'Golden Act'",1614:"Edinburgh mathematician John Napier invents logarithms",1625:"Charles I of England, Scotland and Ireland begins his tumultuous reign",1648:"the second English Civil War ends with the execution of Charles I — Scotland is thrown into turmoil",1692:"the Massacre of 30 'disloyal' noblemen at Glencoe puts the fear of God into many a Scottish laird",1695:"the Bank of Scotland is established by an Act of Parliament",1746:"the Battle of Culloden in 1746 puts a decisive end to the Jacobite risings",1783:"the Glasgow Herald newspaper publishes its first edition",1817:"the Scotsman newspaper publishes its first edition",1846:"the Highland Potato Famine ravages rural communities",1860:"Edinburgh polymath James Clerk Maxwell publishes the first of his revolutionary equations unifying of electricity and magnetism",1603:"the Union of the Crown turns James VI of Scotland into James I of England",1642:"the first English Civil War begins and end, bringing strife and uncertainty to Scotland",1679:"James, Duke of Monmouth, finally defeats the Covenanters at the Battle of Bothwell Brig",1689:"in the first Jacobite Rising, Highlanders defeat the army of William III, but are stopped at the Battle of Dunkeld",1769:"James Watt patents his condensing chamber, greatly improving the efficiency of the steam engine and ushering in the Industrial Revolution",1879:"the Tay Bridge disaster claims at least 59 lives, but eleven years later there's better news when the Forth Rail Bridge is completed",1561:"Mary, Queen of Scots returns from France aged eighteen",1566:"King James VI is baptised at Stirling",1639:"The First Bishops' War ends with a short-lived treaty",1640:"Scots invade and occupy parts of northern England in the Second Bishops' War after their success at the Battle of Newburn",1651:"many Scottish royalists perish in the Battle of Worcester at the hands of the New Model Army",1698:"Scotland's attempt to create a 'New Caledonia' in the inhospitable Darien Gap between North and South America fails nobly",1707:"the Acts of Union merge Scotland and England into a United Kingdom",1748:"Scottish philosopher David Hume publishes his Philosophical Essays Concerning Human Understanding, introducing the world to his unique introspective methods",1776:"Adam Smith publishes The Wealth of Nations, effectively creating the field of economics, in the same year the United States declares independence from Great Britain",1878:"the collapse of the City of Glasgow Bank sends shockwaves through the merchant classes. Eighteen years later, the opening of the Glasgow Subway heralds the arrival of urban mass transit in Scotland"},request:function(i){const t=[];for(var e in this.data)e>=i&&e<i+10&&t.push([e,this.data[e]]);return t.length?t[Math.floor(Math.random()*t.length)]:!1}},yx={data:[],PI:3.1415926535,R:6371e3,points:["north","northeast","east","southeast","south","southwest","west","northwest"],pluralise:function(i){return i.at(-1)=="s"?i+"es":i+"s"},distLL:function(i,t){const e=i[0]*this.PI/180,n=t[0]*this.PI/180,r=n-e,s=(t[1]-i[1])*this.PI/180,a=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e)*Math.cos(n)*Math.sin(s/2)*Math.sin(s*2),l=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*l},calcBearing:function(i,t,e,n){const r=n-t,s=Math.cos(this.radians(e))*Math.sin(this.radians(r)),a=Math.cos(this.radians(i))*Math.sin(this.radians(e))-Math.sin(this.radians(i))*Math.cos(this.radians(e))*Math.cos(this.radians(r));let l=Math.atan2(s,a);return l=this.degrees(l),l},degrees:function(i){return i*(180/Math.PI)},radians:function(i){return i*(Math.PI/180)},calcNSEW:function(i,t,e,n){let r=this.calcBearing(i,t,e,n);return r+=22.5,r=r%360,r<0&&(r+=360),r=parseInt(r/45),this.points[r]},compassSpiel:function(i){let t,e;const n=.5*(i.boundingN.pos[0]+i.boundingS.pos[0]),r=.5*(i.boundingE.pos[1]+i.boundingW.pos[1]),s=this.distLL([i.boundingE.pos[0],r],[i.boundingW.pos[0],r]),a=this.distLL([n,i.boundingN.pos[1]],[n,i.boundingS.pos[1]]);a>0?t=s/a:t=-1;const l={};i.boundingN.name in l?(t==-1||t>0&&t<1)&&l[i.boundingN.name].push("North"):(t==-1||t>0&&t<1)&&(l[i.boundingN.name]=["North"]),i.boundingS.name in l?(t==-1||t>0&&t<1)&&l[i.boundingS.name].push("South"):(t==-1||t>0&&t<1)&&(l[i.boundingS.name]=["South"]),i.boundingE.name in l?(t==-1||t>1)&&l[i.boundingE.name].push("East"):(t==-1||t>1)&&(l[i.boundingE.name]=["East"]),i.boundingW.name in l?(t==-1||t>1)&&l[i.boundingW.name].push("West"):(t==-1||t>1)&&(l[i.boundingW.name]=["West"]);const c=Object.keys(l).length;let h=!1;for(var f in l)if(f==i.maxparish.name){h=!0;break}if(c<=1||h)e="singleton";else{e=`${this._("ranging")} `;let g=0;for(var f in l)e+=l[f].join(" and ")+" to "+f,g<c-2?e+=", ":g<c-1&&(e+=" and "),g++}return e},syn:{moves:["moves","drifts","migrates","travels","journeys"],cluster:["cluster","community","settlement"],isolated:["isolated","remote","distant"],"establishing a presence":["establishing a presence","setting up","settling","putting down roots"],"show up":["show up","turn up","appear"],around:["around","near"],clan:["clan","family","tribe","lineage"],New:["New","Fresh","Another","A new"],Remaining:["Remaining","Spreading out","Increasing their numbers"],appears:["shows up","appears","begins","forms"],ranging:["ranging","going"],stay:["stay","remain","dwell"],about:["about","around","some"],After:["After","Following"],break:["break","gap in the records"],"return to":["return to","reappear in"],"in and around":["in and around","in the vicinity of","in the records of"],outpost:["outpost","base","population"],small:["small","minor","tentative"],"setting up":["setting up","establishing","creating"],Meanwhile:["Meanwhile","Elsewhere","In historical news","Also"]},_:function(i){if(this.syn[i]){const t=this.syn[i][this.syndices[i]];return this.syndices[i]++,this.syndices[i]=this.syndices[i]%this.syn[i].length,t}return i},getNext:function(i=1,t=!1,e=!1){if(e?this.index=i:this.index+=i,this.index>this.data.length-1&&(this.index=0),this.index<0)return this.index=0,!1;const n=this.data[this.index];return n.init=t,this.index==this.data.length-2&&this.wasLast&&(n.init=-2),this.index==this.data.length-1?(n.init=-1,this.wasLast=!0):this.wasLast=!1,n},setClusterProportions:function(){let i=0;for(var t=0;t<this.data.length-1;t++)i+=this.data[t].total;for(var t=0;t<this.data.length-1;t++)this.data[t].proportion=this.data[t].total/i},clusterDensities:function(i){let t;const e=[];for(var n=0;n<this.data.length-1;n++){const r=this.data[n].year,s=this.data[n].lastyear;t=this.smoothstep(r,this.data[n].lastyear+50,i),t*=this.smoothstep(s+50,s,i),e.push(t*(.5+.5*this.data[n].proportion))}return e},smoothstep(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},parse:function(i,t){let e=0,n,r;const s=this._.bind(this);this.data=[];for(var a in t){const f={};f.text="";let g;const d=t[a];d.maxparish.name=="North Uist"&&(d.maxparish.pos[0]=57.6,d.maxparish.pos[1]=-7.333);const _=10+parseInt(d.lastyear-d.firstyear);f.year=d.firstyear,f.lastyear=d.lastyear;let M=Fv.from(d.maxparish.pos[0],d.maxparish.pos[1]),R=Bv.request(d.firstyear);f.region=M,f.name=d.maxparish.name,f.pos=[d.maxparish.pos[0],d.maxparish.pos[1]];let b="";M&&M!=f.name&&(b=" in "+M);const x=this.compassSpiel(d);a==0?f.text+=`First ${s("cluster")} of ${this.pluralise(i)} ${s("appears")} in the records`:(g=this.calcNSEW(n[0],n[1],d.centroid[0],d.centroid[1]),Math.random()>.6?f.text+=`${s("New")} ${s("cluster")} ${s("appears")} when the `:f.text+="The ",f.text+=`${i} ${s("clan")} ${s("moves")} ${g}, `,x=="singleton"?f.text+=`${s("setting up")} a ${s("small")} ${s("outpost")}`:d.biggest||(f.text+=`${s("establishing a presence")}`)),x=="singleton"?f.text+=` in the parish of ${d.maxparish.name}${b}. They ${s("stay")} there for ${s("about")} ${_} years`:(f.text+=` around ${d.maxparish.name}${b}`,Math.random()>.5&&(f.text+=` and ${x}`)),f.text+=".",r=M,d.biggest&&(f.text+=` This is the clan's largest cluster, spanning ${d.numParishes} parishes. It will persist for at least ${_} years.`),R?f.historical=`${s("Meanwhile")}, in ${R[0]}, ${R[1]}.`:f.historical="",f.total=d.total,n=d.centroid,this.data.push(f)}this.data.length>12&&(console.log("pruning"),this.data.sort(function(f,g){return f.total>g.total?-1:1}),this.data=this.data.slice(0,-(this.data.length-12)),this.data.sort(function(f,g){return f.year<g.year?-1:1})),r="";const l=[];for(var c in this.data)this.data[c].lastyear>=1890&&e++,l.includes(this.data[c].name)?this.data[c].text=`${s("After")} a ${s("break")}, the ${this.pluralise(i)} ${s("return to")} the parish of ${this.data[c].name} in ${this.data[c].region}. `:r==this.data[c].region&&(this.data[c].text=`${s("Remaining")} in ${r}, the ${this.pluralise(i)} ${s("show up")} ${s("in and around")} the parish of ${this.data[c].name}. `),l.push(this.data[c].name),r=this.data[c].region;const h={year:1900,historical:""};e==this.data.length?h.text=`Records end with the ${i} family ${s("thriving")}: all population clusters are still active!`:e>this.data.length/2?h.text=`Records end with the ${i} clan in fine fettle: ${e} of the ${this.data.length} main population clusters are still active!`:h.text=`Records end with the ${i} family somewhat diminished: ${e} of the ${this.data.length} main population clusters ${e>1?"are":"is"} still active.`,this.data.push(h),this.setClusterProportions()},init:function(i,t,e,n,r,s){const a=this;this.pop=n,this.index=-1,this.wasLast=!1,this.surname=i,this.syndices={};for(var l in this.syn)this.syndices[l]=Math.floor(Math.random()*this.syn[l].length);const c=e+"/data/spiel/"+t+".json";$.get(c,function(h){a.parse(a.surname,h);const f={},g={};let d=0;for(var _ in a.data)a.data[_].year<1900&&(f[a.data[_].year]=a.data[_].pos,g[a.data[_].year]=a.data[_].name),d++;d<4&&!s?(console.log("narrative data too sparse for "+a.surname),r(!1)):r(f,g)}).fail(function(h){console.log("no narrative data for "+a.surname),r(!1)})}},kv={data:[{year:1600,value:8e5},{year:1707,value:1e6},{year:1755,value:1265380},{year:1801,value:1608420},{year:1811,value:1805864},{year:1821,value:2091521},{year:1831,value:2364386},{year:1841,value:2620184},{year:1851,value:2888742},{year:1861,value:3062294},{year:1871,value:3360018},{year:1881,value:3735573},{year:1891,value:4025647},{year:1901,value:4472103}],estimate:function(i,t=1){let e=0;if(i<this.data[0].year){const r=this.data[1].year-this.data[0].year,a=(this.data[1].value-this.data[0].value)/r;e=this.data[0].value-a*(this.data[0].year-i)}else for(var n in this.data)if(this.data[n].year>i){const r=this.data[n].year-this.data[n-1].year,a=(this.data[n].value-this.data[n-1].value)/r,l=i-this.data[n-1].year;e=this.data[n-1].value+a*l;break}return parseInt(e*t)}},Fc={births:{1560:3085,1570:5232,1580:6308,1590:6504,1600:19705,1610:36012,1620:41819,1630:49409,1640:72530,1650:83334,1660:99730,1670:122137,1680:139151,1690:155131,1700:187912,1710:221814,1720:241522,1730:246495,1740:242652,1750:271952,1760:292848,1770:300301,1780:333358,1790:378650,1800:401356,1810:420549,1820:473055,1830:495589,1840:425687,1850:733350,1860:1138913,1870:1276479,1880:1313936,1890:1333111}},Mx={init:function(i,t,e=!1){const n=this;this.dataRoot=t;const r=this.dataRoot+"/data/surnames/data"+i+".json";$.get(r,function(s){n.data=s,e&&e(n.data)})},population:function(i){i==1900&&(i=1899);let t;i%10==0?t=i:t=i-i%10;let n=this.data.births.totals[t]/Fc.births[t];if(t!=i&&this.data.births.totals[t+10]){let s=this.data.births.totals[t+10]/Fc.births[t+10],a=(i-t)/10;n=a*s+(1-a)*n}return kv.estimate(i,n)}},ps={init:function(i,t,e,n,r){const s=this;this.sourceEl=i,this.targetEl=t,this.callback=n,this.apiRoot=r,this.template='<div data-surname="{SURNAME}" data-id="{ID}" data-num_records="{NUM_RECORDS}" class="searchResult{THRESHOLD_CLASS}">{SURNAME}{THRESHOLD_NOTE}</div>',i.on("keydown change",function(){const a=$(this).val().toUpperCase();if(a.length>=2){const l=s.apiRoot+"/?auth=s$fsqi-928&command=search&surname="+a+"&exact=0";$.get(l,function(c){c=JSON.parse(c),c=c.surnames;let h="";for(var f in c){let g=s.template;g=g.replaceAll("{SURNAME}",c[f].name),g=g.replace("{THRESHOLD_NOTE}",c[f].num_records>=e?"":"<span>Insufficient records</span>"),g=g.replace("{THRESHOLD_CLASS}",c[f].num_records>=e?"":" insufficient_records"),g=g.replaceAll("{ID}",c[f].id),g=g.replaceAll("{NUM_RECORDS}",c[f].num_records),h+=g}s.targetEl.html(h)})}}),$(document).on("click",".searchResult",function(){n($(this).attr("data-surname"),$(this).attr("data-id"),$(this).attr("data-num_records"))})},clear:function(){$("#searchResults").html(""),$("#searchName").val("")}};var bs={exports:{}};/*!
 * 
 *   simple-keyboard v3.8.31
 *   https://github.com/hodgef/simple-keyboard
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */var zv=bs.exports,Bc;function Hv(){return Bc||(Bc=1,(function(i,t){(function(e,n){i.exports=n()})(zv,(function(){return(function(){var e={9306:function(y,T,o){var u=o(4901),m=o(6823),v=TypeError;y.exports=function(p){if(u(p))return p;throw new v(m(p)+" is not a function")}},5548:function(y,T,o){var u=o(3517),m=o(6823),v=TypeError;y.exports=function(p){if(u(p))return p;throw new v(m(p)+" is not a constructor")}},3506:function(y,T,o){var u=o(3925),m=String,v=TypeError;y.exports=function(p){if(u(p))return p;throw new v("Can't set "+m(p)+" as a prototype")}},6469:function(y,T,o){var u=o(8227),m=o(2360),v=o(4913).f,p=u("unscopables"),E=Array.prototype;E[p]===void 0&&v(E,p,{configurable:!0,value:m(null)}),y.exports=function(w){E[p][w]=!0}},7829:function(y,T,o){var u=o(8183).charAt;y.exports=function(m,v,p){return v+(p?u(m,v).length:1)}},8551:function(y,T,o){var u=o(34),m=String,v=TypeError;y.exports=function(p){if(u(p))return p;throw new v(m(p)+" is not an object")}},235:function(y,T,o){var u=o(9213).forEach,m=o(4598)("forEach");y.exports=m?[].forEach:function(v){return u(this,v,arguments.length>1?arguments[1]:void 0)}},7916:function(y,T,o){var u=o(6080),m=o(9565),v=o(8981),p=o(6319),E=o(4209),w=o(3517),C=o(6198),P=o(4659),H=o(81),K=o(851),V=Array;y.exports=function(F){var G=v(F),k=w(this),q=arguments.length,j=q>1?arguments[1]:void 0,ct=j!==void 0;ct&&(j=u(j,q>2?arguments[2]:void 0));var B,ut,vt,_t,it,Tt,I=K(G),S=0;if(!I||this===V&&E(I))for(B=C(G),ut=k?new this(B):V(B);B>S;S++)Tt=ct?j(G[S],S):G[S],P(ut,S,Tt);else for(ut=k?new this:[],it=(_t=H(G,I)).next;!(vt=m(it,_t)).done;S++)Tt=ct?p(_t,j,[vt.value,S],!0):vt.value,P(ut,S,Tt);return ut.length=S,ut}},9617:function(y,T,o){var u=o(5397),m=o(5610),v=o(6198),p=function(E){return function(w,C,P){var H=u(w),K=v(H);if(K===0)return!E&&-1;var V,F=m(P,K);if(E&&C!=C){for(;K>F;)if((V=H[F++])!=V)return!0}else for(;K>F;F++)if((E||F in H)&&H[F]===C)return E||F||0;return!E&&-1}};y.exports={includes:p(!0),indexOf:p(!1)}},9213:function(y,T,o){var u=o(6080),m=o(9504),v=o(7055),p=o(8981),E=o(6198),w=o(1469),C=m([].push),P=function(H){var K=H===1,V=H===2,F=H===3,G=H===4,k=H===6,q=H===7,j=H===5||k;return function(ct,B,ut,vt){for(var _t,it,Tt=p(ct),I=v(Tt),S=E(I),tt=u(B,ut),st=0,ht=vt||w,Et=K?ht(ct,S):V||q?ht(ct,0):void 0;S>st;st++)if((j||st in I)&&(it=tt(_t=I[st],st,Tt),H))if(K)Et[st]=it;else if(it)switch(H){case 3:return!0;case 5:return _t;case 6:return st;case 2:C(Et,_t)}else switch(H){case 4:return!1;case 7:C(Et,_t)}return k?-1:F||G?G:Et}};y.exports={forEach:P(0),map:P(1),filter:P(2),some:P(3),every:P(4),find:P(5),findIndex:P(6),filterReject:P(7)}},597:function(y,T,o){var u=o(9039),m=o(8227),v=o(9519),p=m("species");y.exports=function(E){return v>=51||!u((function(){var w=[];return(w.constructor={})[p]=function(){return{foo:1}},w[E](Boolean).foo!==1}))}},4598:function(y,T,o){var u=o(9039);y.exports=function(m,v){var p=[][m];return!!p&&u((function(){p.call(null,v||function(){return 1},1)}))}},926:function(y,T,o){var u=o(9306),m=o(8981),v=o(7055),p=o(6198),E=TypeError,w="Reduce of empty array with no initial value",C=function(P){return function(H,K,V,F){var G=m(H),k=v(G),q=p(G);if(u(K),q===0&&V<2)throw new E(w);var j=P?q-1:0,ct=P?-1:1;if(V<2)for(;;){if(j in k){F=k[j],j+=ct;break}if(j+=ct,P?j<0:q<=j)throw new E(w)}for(;P?j>=0:q>j;j+=ct)j in k&&(F=K(F,k[j],j,G));return F}};y.exports={left:C(!1),right:C(!0)}},4527:function(y,T,o){var u=o(3724),m=o(4376),v=TypeError,p=Object.getOwnPropertyDescriptor,E=u&&!(function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(w){return w instanceof TypeError}})();y.exports=E?function(w,C){if(m(w)&&!p(w,"length").writable)throw new v("Cannot set read only .length");return w.length=C}:function(w,C){return w.length=C}},7680:function(y,T,o){var u=o(9504);y.exports=u([].slice)},4488:function(y,T,o){var u=o(7680),m=Math.floor,v=function(p,E){var w=p.length;if(w<8)for(var C,P,H=1;H<w;){for(P=H,C=p[H];P&&E(p[P-1],C)>0;)p[P]=p[--P];P!==H++&&(p[P]=C)}else for(var K=m(w/2),V=v(u(p,0,K),E),F=v(u(p,K),E),G=V.length,k=F.length,q=0,j=0;q<G||j<k;)p[q+j]=q<G&&j<k?E(V[q],F[j])<=0?V[q++]:F[j++]:q<G?V[q++]:F[j++];return p};y.exports=v},7433:function(y,T,o){var u=o(4376),m=o(3517),v=o(34),p=o(8227)("species"),E=Array;y.exports=function(w){var C;return u(w)&&(C=w.constructor,(m(C)&&(C===E||u(C.prototype))||v(C)&&(C=C[p])===null)&&(C=void 0)),C===void 0?E:C}},1469:function(y,T,o){var u=o(7433);y.exports=function(m,v){return new(u(m))(v===0?0:v)}},6319:function(y,T,o){var u=o(8551),m=o(9539);y.exports=function(v,p,E,w){try{return w?p(u(E)[0],E[1]):p(E)}catch(C){m(v,"throw",C)}}},4428:function(y,T,o){var u=o(8227)("iterator"),m=!1;try{var v=0,p={next:function(){return{done:!!v++}},return:function(){m=!0}};p[u]=function(){return this},Array.from(p,(function(){throw 2}))}catch{}y.exports=function(E,w){try{if(!w&&!m)return!1}catch{return!1}var C=!1;try{var P={};P[u]=function(){return{next:function(){return{done:C=!0}}}},E(P)}catch{}return C}},2195:function(y,T,o){var u=o(9504),m=u({}.toString),v=u("".slice);y.exports=function(p){return v(m(p),8,-1)}},6955:function(y,T,o){var u=o(2140),m=o(4901),v=o(2195),p=o(8227)("toStringTag"),E=Object,w=v((function(){return arguments})())==="Arguments";y.exports=u?v:function(C){var P,H,K;return C===void 0?"Undefined":C===null?"Null":typeof(H=(function(V,F){try{return V[F]}catch{}})(P=E(C),p))=="string"?H:w?v(P):(K=v(P))==="Object"&&m(P.callee)?"Arguments":K}},7740:function(y,T,o){var u=o(9297),m=o(5031),v=o(7347),p=o(4913);y.exports=function(E,w,C){for(var P=m(w),H=p.f,K=v.f,V=0;V<P.length;V++){var F=P[V];u(E,F)||C&&u(C,F)||H(E,F,K(w,F))}}},1436:function(y,T,o){var u=o(8227)("match");y.exports=function(m){var v=/./;try{"/./"[m](v)}catch{try{return v[u]=!1,"/./"[m](v)}catch{}}return!1}},2211:function(y,T,o){var u=o(9039);y.exports=!u((function(){function m(){}return m.prototype.constructor=null,Object.getPrototypeOf(new m)!==m.prototype}))},2529:function(y){y.exports=function(T,o){return{value:T,done:o}}},6699:function(y,T,o){var u=o(3724),m=o(4913),v=o(6980);y.exports=u?function(p,E,w){return m.f(p,E,v(1,w))}:function(p,E,w){return p[E]=w,p}},6980:function(y){y.exports=function(T,o){return{enumerable:!(1&T),configurable:!(2&T),writable:!(4&T),value:o}}},4659:function(y,T,o){var u=o(3724),m=o(4913),v=o(6980);y.exports=function(p,E,w){u?m.f(p,E,v(0,w)):p[E]=w}},3640:function(y,T,o){var u=o(8551),m=o(4270),v=TypeError;y.exports=function(p){if(u(this),p==="string"||p==="default")p="string";else if(p!=="number")throw new v("Incorrect hint");return m(this,p)}},2106:function(y,T,o){var u=o(283),m=o(4913);y.exports=function(v,p,E){return E.get&&u(E.get,p,{getter:!0}),E.set&&u(E.set,p,{setter:!0}),m.f(v,p,E)}},6840:function(y,T,o){var u=o(4901),m=o(4913),v=o(283),p=o(9433);y.exports=function(E,w,C,P){P||(P={});var H=P.enumerable,K=P.name!==void 0?P.name:w;if(u(C)&&v(C,K,P),P.global)H?E[w]=C:p(w,C);else{try{P.unsafe?E[w]&&(H=!0):delete E[w]}catch{}H?E[w]=C:m.f(E,w,{value:C,enumerable:!1,configurable:!P.nonConfigurable,writable:!P.nonWritable})}return E}},9433:function(y,T,o){var u=o(4576),m=Object.defineProperty;y.exports=function(v,p){try{m(u,v,{value:p,configurable:!0,writable:!0})}catch{u[v]=p}return p}},4606:function(y,T,o){var u=o(6823),m=TypeError;y.exports=function(v,p){if(!delete v[p])throw new m("Cannot delete property "+u(p)+" of "+u(v))}},3724:function(y,T,o){var u=o(9039);y.exports=!u((function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}))},4055:function(y,T,o){var u=o(4576),m=o(34),v=u.document,p=m(v)&&m(v.createElement);y.exports=function(E){return p?v.createElement(E):{}}},6837:function(y){var T=TypeError;y.exports=function(o){if(o>9007199254740991)throw T("Maximum allowed index exceeded");return o}},7400:function(y){y.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},9296:function(y,T,o){var u=o(4055)("span").classList,m=u&&u.constructor&&u.constructor.prototype;y.exports=m===Object.prototype?void 0:m},8727:function(y){y.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3709:function(y,T,o){var u=o(2839).match(/firefox\/(\d+)/i);y.exports=!!u&&+u[1]},3763:function(y,T,o){var u=o(2839);y.exports=/MSIE|Trident/.test(u)},6193:function(y,T,o){var u=o(4215);y.exports=u==="NODE"},2839:function(y,T,o){var u=o(4576).navigator,m=u&&u.userAgent;y.exports=m?String(m):""},9519:function(y,T,o){var u,m,v=o(4576),p=o(2839),E=v.process,w=v.Deno,C=E&&E.versions||w&&w.version,P=C&&C.v8;P&&(m=(u=P.split("."))[0]>0&&u[0]<4?1:+(u[0]+u[1])),!m&&p&&(!(u=p.match(/Edge\/(\d+)/))||u[1]>=74)&&(u=p.match(/Chrome\/(\d+)/))&&(m=+u[1]),y.exports=m},3607:function(y,T,o){var u=o(2839).match(/AppleWebKit\/(\d+)\./);y.exports=!!u&&+u[1]},4215:function(y,T,o){var u=o(4576),m=o(2839),v=o(2195),p=function(E){return m.slice(0,E.length)===E};y.exports=p("Bun/")?"BUN":p("Cloudflare-Workers")?"CLOUDFLARE":p("Deno/")?"DENO":p("Node.js/")?"NODE":u.Bun&&typeof Bun.version=="string"?"BUN":u.Deno&&typeof Deno.version=="object"?"DENO":v(u.process)==="process"?"NODE":u.window&&u.document?"BROWSER":"REST"},6518:function(y,T,o){var u=o(4576),m=o(7347).f,v=o(6699),p=o(6840),E=o(9433),w=o(7740),C=o(2796);y.exports=function(P,H){var K,V,F,G,k,q=P.target,j=P.global,ct=P.stat;if(K=j?u:ct?u[q]||E(q,{}):u[q]&&u[q].prototype)for(V in H){if(G=H[V],F=P.dontCallGetSet?(k=m(K,V))&&k.value:K[V],!C(j?V:q+(ct?".":"#")+V,P.forced)&&F!==void 0){if(typeof G==typeof F)continue;w(G,F)}(P.sham||F&&F.sham)&&v(G,"sham",!0),p(K,V,G,P)}}},9039:function(y){y.exports=function(T){try{return!!T()}catch{return!0}}},9228:function(y,T,o){o(7495);var u=o(9565),m=o(6840),v=o(7323),p=o(9039),E=o(8227),w=o(6699),C=E("species"),P=RegExp.prototype;y.exports=function(H,K,V,F){var G=E(H),k=!p((function(){var B={};return B[G]=function(){return 7},""[H](B)!==7})),q=k&&!p((function(){var B=!1,ut=/a/;return H==="split"&&((ut={}).constructor={},ut.constructor[C]=function(){return ut},ut.flags="",ut[G]=/./[G]),ut.exec=function(){return B=!0,null},ut[G](""),!B}));if(!k||!q||V){var j=/./[G],ct=K(G,""[H],(function(B,ut,vt,_t,it){var Tt=ut.exec;return Tt===v||Tt===P.exec?k&&!it?{done:!0,value:u(j,ut,vt,_t)}:{done:!0,value:u(B,vt,ut,_t)}:{done:!1}}));m(String.prototype,H,ct[0]),m(P,G,ct[1])}F&&w(P[G],"sham",!0)}},8745:function(y,T,o){var u=o(616),m=Function.prototype,v=m.apply,p=m.call;y.exports=typeof Reflect=="object"&&Reflect.apply||(u?p.bind(v):function(){return p.apply(v,arguments)})},6080:function(y,T,o){var u=o(7476),m=o(9306),v=o(616),p=u(u.bind);y.exports=function(E,w){return m(E),w===void 0?E:v?p(E,w):function(){return E.apply(w,arguments)}}},616:function(y,T,o){var u=o(9039);y.exports=!u((function(){var m=(function(){}).bind();return typeof m!="function"||m.hasOwnProperty("prototype")}))},9565:function(y,T,o){var u=o(616),m=Function.prototype.call;y.exports=u?m.bind(m):function(){return m.apply(m,arguments)}},350:function(y,T,o){var u=o(3724),m=o(9297),v=Function.prototype,p=u&&Object.getOwnPropertyDescriptor,E=m(v,"name"),w=E&&(function(){}).name==="something",C=E&&(!u||u&&p(v,"name").configurable);y.exports={EXISTS:E,PROPER:w,CONFIGURABLE:C}},6706:function(y,T,o){var u=o(9504),m=o(9306);y.exports=function(v,p,E){try{return u(m(Object.getOwnPropertyDescriptor(v,p)[E]))}catch{}}},7476:function(y,T,o){var u=o(2195),m=o(9504);y.exports=function(v){if(u(v)==="Function")return m(v)}},9504:function(y,T,o){var u=o(616),m=Function.prototype,v=m.call,p=u&&m.bind.bind(v,v);y.exports=u?p:function(E){return function(){return v.apply(E,arguments)}}},7751:function(y,T,o){var u=o(4576),m=o(4901);y.exports=function(v,p){return arguments.length<2?(E=u[v],m(E)?E:void 0):u[v]&&u[v][p];var E}},851:function(y,T,o){var u=o(6955),m=o(5966),v=o(4117),p=o(6269),E=o(8227)("iterator");y.exports=function(w){if(!v(w))return m(w,E)||m(w,"@@iterator")||p[u(w)]}},81:function(y,T,o){var u=o(9565),m=o(9306),v=o(8551),p=o(6823),E=o(851),w=TypeError;y.exports=function(C,P){var H=arguments.length<2?E(C):P;if(m(H))return v(u(H,C));throw new w(p(C)+" is not iterable")}},6933:function(y,T,o){var u=o(9504),m=o(4376),v=o(4901),p=o(2195),E=o(655),w=u([].push);y.exports=function(C){if(v(C))return C;if(m(C)){for(var P=C.length,H=[],K=0;K<P;K++){var V=C[K];typeof V=="string"?w(H,V):typeof V!="number"&&p(V)!=="Number"&&p(V)!=="String"||w(H,E(V))}var F=H.length,G=!0;return function(k,q){if(G)return G=!1,q;if(m(this))return q;for(var j=0;j<F;j++)if(H[j]===k)return q}}}},5966:function(y,T,o){var u=o(9306),m=o(4117);y.exports=function(v,p){var E=v[p];return m(E)?void 0:u(E)}},2478:function(y,T,o){var u=o(9504),m=o(8981),v=Math.floor,p=u("".charAt),E=u("".replace),w=u("".slice),C=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,P=/\$([$&'`]|\d{1,2})/g;y.exports=function(H,K,V,F,G,k){var q=V+H.length,j=F.length,ct=P;return G!==void 0&&(G=m(G),ct=C),E(k,ct,(function(B,ut){var vt;switch(p(ut,0)){case"$":return"$";case"&":return H;case"`":return w(K,0,V);case"'":return w(K,q);case"<":vt=G[w(ut,1,-1)];break;default:var _t=+ut;if(_t===0)return B;if(_t>j){var it=v(_t/10);return it===0?B:it<=j?F[it-1]===void 0?p(ut,1):F[it-1]+p(ut,1):B}vt=F[_t-1]}return vt===void 0?"":vt}))}},4576:function(y,T,o){var u=function(m){return m&&m.Math===Math&&m};y.exports=u(typeof globalThis=="object"&&globalThis)||u(typeof window=="object"&&window)||u(typeof self=="object"&&self)||u(typeof o.g=="object"&&o.g)||u(typeof this=="object"&&this)||(function(){return this})()||Function("return this")()},9297:function(y,T,o){var u=o(9504),m=o(8981),v=u({}.hasOwnProperty);y.exports=Object.hasOwn||function(p,E){return v(m(p),E)}},421:function(y){y.exports={}},397:function(y,T,o){var u=o(7751);y.exports=u("document","documentElement")},5917:function(y,T,o){var u=o(3724),m=o(9039),v=o(4055);y.exports=!u&&!m((function(){return Object.defineProperty(v("div"),"a",{get:function(){return 7}}).a!==7}))},7055:function(y,T,o){var u=o(9504),m=o(9039),v=o(2195),p=Object,E=u("".split);y.exports=m((function(){return!p("z").propertyIsEnumerable(0)}))?function(w){return v(w)==="String"?E(w,""):p(w)}:p},3167:function(y,T,o){var u=o(4901),m=o(34),v=o(2967);y.exports=function(p,E,w){var C,P;return v&&u(C=E.constructor)&&C!==w&&m(P=C.prototype)&&P!==w.prototype&&v(p,P),p}},3706:function(y,T,o){var u=o(9504),m=o(4901),v=o(7629),p=u(Function.toString);m(v.inspectSource)||(v.inspectSource=function(E){return p(E)}),y.exports=v.inspectSource},1181:function(y,T,o){var u,m,v,p=o(8622),E=o(4576),w=o(34),C=o(6699),P=o(9297),H=o(7629),K=o(6119),V=o(421),F="Object already initialized",G=E.TypeError,k=E.WeakMap;if(p||H.state){var q=H.state||(H.state=new k);q.get=q.get,q.has=q.has,q.set=q.set,u=function(ct,B){if(q.has(ct))throw new G(F);return B.facade=ct,q.set(ct,B),B},m=function(ct){return q.get(ct)||{}},v=function(ct){return q.has(ct)}}else{var j=K("state");V[j]=!0,u=function(ct,B){if(P(ct,j))throw new G(F);return B.facade=ct,C(ct,j,B),B},m=function(ct){return P(ct,j)?ct[j]:{}},v=function(ct){return P(ct,j)}}y.exports={set:u,get:m,has:v,enforce:function(ct){return v(ct)?m(ct):u(ct,{})},getterFor:function(ct){return function(B){var ut;if(!w(B)||(ut=m(B)).type!==ct)throw new G("Incompatible receiver, "+ct+" required");return ut}}}},4209:function(y,T,o){var u=o(8227),m=o(6269),v=u("iterator"),p=Array.prototype;y.exports=function(E){return E!==void 0&&(m.Array===E||p[v]===E)}},4376:function(y,T,o){var u=o(2195);y.exports=Array.isArray||function(m){return u(m)==="Array"}},4901:function(y){var T=typeof document=="object"&&document.all;y.exports=T===void 0&&T!==void 0?function(o){return typeof o=="function"||o===T}:function(o){return typeof o=="function"}},3517:function(y,T,o){var u=o(9504),m=o(9039),v=o(4901),p=o(6955),E=o(7751),w=o(3706),C=function(){},P=E("Reflect","construct"),H=/^\s*(?:class|function)\b/,K=u(H.exec),V=!H.test(C),F=function(k){if(!v(k))return!1;try{return P(C,[],k),!0}catch{return!1}},G=function(k){if(!v(k))return!1;switch(p(k)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return V||!!K(H,w(k))}catch{return!0}};G.sham=!0,y.exports=!P||m((function(){var k;return F(F.call)||!F(Object)||!F((function(){k=!0}))||k}))?G:F},2796:function(y,T,o){var u=o(9039),m=o(4901),v=/#|\.prototype\./,p=function(H,K){var V=w[E(H)];return V===P||V!==C&&(m(K)?u(K):!!K)},E=p.normalize=function(H){return String(H).replace(v,".").toLowerCase()},w=p.data={},C=p.NATIVE="N",P=p.POLYFILL="P";y.exports=p},2087:function(y,T,o){var u=o(34),m=Math.floor;y.exports=Number.isInteger||function(v){return!u(v)&&isFinite(v)&&m(v)===v}},4117:function(y){y.exports=function(T){return T==null}},34:function(y,T,o){var u=o(4901);y.exports=function(m){return typeof m=="object"?m!==null:u(m)}},3925:function(y,T,o){var u=o(34);y.exports=function(m){return u(m)||m===null}},6395:function(y){y.exports=!1},788:function(y,T,o){var u=o(34),m=o(2195),v=o(8227)("match");y.exports=function(p){var E;return u(p)&&((E=p[v])!==void 0?!!E:m(p)==="RegExp")}},757:function(y,T,o){var u=o(7751),m=o(4901),v=o(1625),p=o(7040),E=Object;y.exports=p?function(w){return typeof w=="symbol"}:function(w){var C=u("Symbol");return m(C)&&v(C.prototype,E(w))}},9539:function(y,T,o){var u=o(9565),m=o(8551),v=o(5966);y.exports=function(p,E,w){var C,P;m(p);try{if(!(C=v(p,"return"))){if(E==="throw")throw w;return w}C=u(C,p)}catch(H){P=!0,C=H}if(E==="throw")throw w;if(P)throw C;return m(C),w}},3994:function(y,T,o){var u=o(7657).IteratorPrototype,m=o(2360),v=o(6980),p=o(687),E=o(6269),w=function(){return this};y.exports=function(C,P,H,K){var V=P+" Iterator";return C.prototype=m(u,{next:v(+!K,H)}),p(C,V,!1,!0),E[V]=w,C}},1088:function(y,T,o){var u=o(6518),m=o(9565),v=o(6395),p=o(350),E=o(4901),w=o(3994),C=o(2787),P=o(2967),H=o(687),K=o(6699),V=o(6840),F=o(8227),G=o(6269),k=o(7657),q=p.PROPER,j=p.CONFIGURABLE,ct=k.IteratorPrototype,B=k.BUGGY_SAFARI_ITERATORS,ut=F("iterator"),vt="keys",_t="values",it="entries",Tt=function(){return this};y.exports=function(I,S,tt,st,ht,Et,Mt){w(tt,S,st);var rt,dt,wt,Rt=function(Pt){if(Pt===ht&&Ot)return Ot;if(!B&&Pt&&Pt in Lt)return Lt[Pt];switch(Pt){case vt:case _t:case it:return function(){return new tt(this,Pt)}}return function(){return new tt(this)}},St=S+" Iterator",bt=!1,Lt=I.prototype,Dt=Lt[ut]||Lt["@@iterator"]||ht&&Lt[ht],Ot=!B&&Dt||Rt(ht),Z=S==="Array"&&Lt.entries||Dt;if(Z&&(rt=C(Z.call(new I)))!==Object.prototype&&rt.next&&(v||C(rt)===ct||(P?P(rt,ct):E(rt[ut])||V(rt,ut,Tt)),H(rt,St,!0,!0),v&&(G[St]=Tt)),q&&ht===_t&&Dt&&Dt.name!==_t&&(!v&&j?K(Lt,"name",_t):(bt=!0,Ot=function(){return m(Dt,this)})),ht)if(dt={values:Rt(_t),keys:Et?Ot:Rt(vt),entries:Rt(it)},Mt)for(wt in dt)(B||bt||!(wt in Lt))&&V(Lt,wt,dt[wt]);else u({target:S,proto:!0,forced:B||bt},dt);return v&&!Mt||Lt[ut]===Ot||V(Lt,ut,Ot,{name:ht}),G[S]=Ot,dt}},7657:function(y,T,o){var u,m,v,p=o(9039),E=o(4901),w=o(34),C=o(2360),P=o(2787),H=o(6840),K=o(8227),V=o(6395),F=K("iterator"),G=!1;[].keys&&("next"in(v=[].keys())?(m=P(P(v)))!==Object.prototype&&(u=m):G=!0),!w(u)||p((function(){var k={};return u[F].call(k)!==k}))?u={}:V&&(u=C(u)),E(u[F])||H(u,F,(function(){return this})),y.exports={IteratorPrototype:u,BUGGY_SAFARI_ITERATORS:G}},6269:function(y){y.exports={}},6198:function(y,T,o){var u=o(8014);y.exports=function(m){return u(m.length)}},283:function(y,T,o){var u=o(9504),m=o(9039),v=o(4901),p=o(9297),E=o(3724),w=o(350).CONFIGURABLE,C=o(3706),P=o(1181),H=P.enforce,K=P.get,V=String,F=Object.defineProperty,G=u("".slice),k=u("".replace),q=u([].join),j=E&&!m((function(){return F((function(){}),"length",{value:8}).length!==8})),ct=String(String).split("String"),B=y.exports=function(ut,vt,_t){G(V(vt),0,7)==="Symbol("&&(vt="["+k(V(vt),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),_t&&_t.getter&&(vt="get "+vt),_t&&_t.setter&&(vt="set "+vt),(!p(ut,"name")||w&&ut.name!==vt)&&(E?F(ut,"name",{value:vt,configurable:!0}):ut.name=vt),j&&_t&&p(_t,"arity")&&ut.length!==_t.arity&&F(ut,"length",{value:_t.arity});try{_t&&p(_t,"constructor")&&_t.constructor?E&&F(ut,"prototype",{writable:!1}):ut.prototype&&(ut.prototype=void 0)}catch{}var it=H(ut);return p(it,"source")||(it.source=q(ct,typeof vt=="string"?vt:"")),ut};Function.prototype.toString=B((function(){return v(this)&&K(this).source||C(this)}),"toString")},741:function(y){var T=Math.ceil,o=Math.floor;y.exports=Math.trunc||function(u){var m=+u;return(m>0?o:T)(m)}},5749:function(y,T,o){var u=o(788),m=TypeError;y.exports=function(v){if(u(v))throw new m("The method doesn't accept regular expressions");return v}},4213:function(y,T,o){var u=o(3724),m=o(9504),v=o(9565),p=o(9039),E=o(1072),w=o(3717),C=o(8773),P=o(8981),H=o(7055),K=Object.assign,V=Object.defineProperty,F=m([].concat);y.exports=!K||p((function(){if(u&&K({b:1},K(V({},"a",{enumerable:!0,get:function(){V(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var G={},k={},q=Symbol("assign detection"),j="abcdefghijklmnopqrst";return G[q]=7,j.split("").forEach((function(ct){k[ct]=ct})),K({},G)[q]!==7||E(K({},k)).join("")!==j}))?function(G,k){for(var q=P(G),j=arguments.length,ct=1,B=w.f,ut=C.f;j>ct;)for(var vt,_t=H(arguments[ct++]),it=B?F(E(_t),B(_t)):E(_t),Tt=it.length,I=0;Tt>I;)vt=it[I++],u&&!v(ut,_t,vt)||(q[vt]=_t[vt]);return q}:K},2360:function(y,T,o){var u,m=o(8551),v=o(6801),p=o(8727),E=o(421),w=o(397),C=o(4055),P=o(6119),H="prototype",K="script",V=P("IE_PROTO"),F=function(){},G=function(j){return"<"+K+">"+j+"</"+K+">"},k=function(j){j.write(G("")),j.close();var ct=j.parentWindow.Object;return j=null,ct},q=function(){try{u=new ActiveXObject("htmlfile")}catch{}var j,ct,B;q=typeof document<"u"?document.domain&&u?k(u):(ct=C("iframe"),B="java"+K+":",ct.style.display="none",w.appendChild(ct),ct.src=String(B),(j=ct.contentWindow.document).open(),j.write(G("document.F=Object")),j.close(),j.F):k(u);for(var ut=p.length;ut--;)delete q[H][p[ut]];return q()};E[V]=!0,y.exports=Object.create||function(j,ct){var B;return j!==null?(F[H]=m(j),B=new F,F[H]=null,B[V]=j):B=q(),ct===void 0?B:v.f(B,ct)}},6801:function(y,T,o){var u=o(3724),m=o(8686),v=o(4913),p=o(8551),E=o(5397),w=o(1072);T.f=u&&!m?Object.defineProperties:function(C,P){p(C);for(var H,K=E(P),V=w(P),F=V.length,G=0;F>G;)v.f(C,H=V[G++],K[H]);return C}},4913:function(y,T,o){var u=o(3724),m=o(5917),v=o(8686),p=o(8551),E=o(6969),w=TypeError,C=Object.defineProperty,P=Object.getOwnPropertyDescriptor,H="enumerable",K="configurable",V="writable";T.f=u?v?function(F,G,k){if(p(F),G=E(G),p(k),typeof F=="function"&&G==="prototype"&&"value"in k&&V in k&&!k[V]){var q=P(F,G);q&&q[V]&&(F[G]=k.value,k={configurable:K in k?k[K]:q[K],enumerable:H in k?k[H]:q[H],writable:!1})}return C(F,G,k)}:C:function(F,G,k){if(p(F),G=E(G),p(k),m)try{return C(F,G,k)}catch{}if("get"in k||"set"in k)throw new w("Accessors not supported");return"value"in k&&(F[G]=k.value),F}},7347:function(y,T,o){var u=o(3724),m=o(9565),v=o(8773),p=o(6980),E=o(5397),w=o(6969),C=o(9297),P=o(5917),H=Object.getOwnPropertyDescriptor;T.f=u?H:function(K,V){if(K=E(K),V=w(V),P)try{return H(K,V)}catch{}if(C(K,V))return p(!m(v.f,K,V),K[V])}},298:function(y,T,o){var u=o(2195),m=o(5397),v=o(8480).f,p=o(7680),E=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];y.exports.f=function(w){return E&&u(w)==="Window"?(function(C){try{return v(C)}catch{return p(E)}})(w):v(m(w))}},8480:function(y,T,o){var u=o(1828),m=o(8727).concat("length","prototype");T.f=Object.getOwnPropertyNames||function(v){return u(v,m)}},3717:function(y,T){T.f=Object.getOwnPropertySymbols},2787:function(y,T,o){var u=o(9297),m=o(4901),v=o(8981),p=o(6119),E=o(2211),w=p("IE_PROTO"),C=Object,P=C.prototype;y.exports=E?C.getPrototypeOf:function(H){var K=v(H);if(u(K,w))return K[w];var V=K.constructor;return m(V)&&K instanceof V?V.prototype:K instanceof C?P:null}},1625:function(y,T,o){var u=o(9504);y.exports=u({}.isPrototypeOf)},1828:function(y,T,o){var u=o(9504),m=o(9297),v=o(5397),p=o(9617).indexOf,E=o(421),w=u([].push);y.exports=function(C,P){var H,K=v(C),V=0,F=[];for(H in K)!m(E,H)&&m(K,H)&&w(F,H);for(;P.length>V;)m(K,H=P[V++])&&(~p(F,H)||w(F,H));return F}},1072:function(y,T,o){var u=o(1828),m=o(8727);y.exports=Object.keys||function(v){return u(v,m)}},8773:function(y,T){var o={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,m=u&&!o.call({1:2},1);T.f=m?function(v){var p=u(this,v);return!!p&&p.enumerable}:o},2551:function(y,T,o){var u=o(6395),m=o(4576),v=o(9039),p=o(3607);y.exports=u||!v((function(){if(!(p&&p<535)){var E=Math.random();__defineSetter__.call(null,E,(function(){})),delete m[E]}}))},2967:function(y,T,o){var u=o(6706),m=o(34),v=o(7750),p=o(3506);y.exports=Object.setPrototypeOf||("__proto__"in{}?(function(){var E,w=!1,C={};try{(E=u(Object.prototype,"__proto__","set"))(C,[]),w=C instanceof Array}catch{}return function(P,H){return v(P),p(H),m(P)&&(w?E(P,H):P.__proto__=H),P}})():void 0)},3179:function(y,T,o){var u=o(2140),m=o(6955);y.exports=u?{}.toString:function(){return"[object "+m(this)+"]"}},4270:function(y,T,o){var u=o(9565),m=o(4901),v=o(34),p=TypeError;y.exports=function(E,w){var C,P;if(w==="string"&&m(C=E.toString)&&!v(P=u(C,E))||m(C=E.valueOf)&&!v(P=u(C,E))||w!=="string"&&m(C=E.toString)&&!v(P=u(C,E)))return P;throw new p("Can't convert object to primitive value")}},5031:function(y,T,o){var u=o(7751),m=o(9504),v=o(8480),p=o(3717),E=o(8551),w=m([].concat);y.exports=u("Reflect","ownKeys")||function(C){var P=v.f(E(C)),H=p.f;return H?w(P,H(C)):P}},9167:function(y,T,o){var u=o(4576);y.exports=u},1056:function(y,T,o){var u=o(4913).f;y.exports=function(m,v,p){p in m||u(m,p,{configurable:!0,get:function(){return v[p]},set:function(E){v[p]=E}})}},6682:function(y,T,o){var u=o(9565),m=o(8551),v=o(4901),p=o(2195),E=o(7323),w=TypeError;y.exports=function(C,P){var H=C.exec;if(v(H)){var K=u(H,C,P);return K!==null&&m(K),K}if(p(C)==="RegExp")return u(E,C,P);throw new w("RegExp#exec called on incompatible receiver")}},7323:function(y,T,o){var u,m,v=o(9565),p=o(9504),E=o(655),w=o(7979),C=o(8429),P=o(5745),H=o(2360),K=o(1181).get,V=o(3635),F=o(8814),G=P("native-string-replace",String.prototype.replace),k=RegExp.prototype.exec,q=k,j=p("".charAt),ct=p("".indexOf),B=p("".replace),ut=p("".slice),vt=(m=/b*/g,v(k,u=/a/,"a"),v(k,m,"a"),u.lastIndex!==0||m.lastIndex!==0),_t=C.BROKEN_CARET,it=/()??/.exec("")[1]!==void 0;(vt||it||_t||V||F)&&(q=function(Tt){var I,S,tt,st,ht,Et,Mt,rt=this,dt=K(rt),wt=E(Tt),Rt=dt.raw;if(Rt)return Rt.lastIndex=rt.lastIndex,I=v(q,Rt,wt),rt.lastIndex=Rt.lastIndex,I;var St=dt.groups,bt=_t&&rt.sticky,Lt=v(w,rt),Dt=rt.source,Ot=0,Z=wt;if(bt&&(Lt=B(Lt,"y",""),ct(Lt,"g")===-1&&(Lt+="g"),Z=ut(wt,rt.lastIndex),rt.lastIndex>0&&(!rt.multiline||rt.multiline&&j(wt,rt.lastIndex-1)!==`
`)&&(Dt="(?: "+Dt+")",Z=" "+Z,Ot++),S=new RegExp("^(?:"+Dt+")",Lt)),it&&(S=new RegExp("^"+Dt+"$(?!\\s)",Lt)),vt&&(tt=rt.lastIndex),st=v(k,bt?S:rt,Z),bt?st?(st.input=ut(st.input,Ot),st[0]=ut(st[0],Ot),st.index=rt.lastIndex,rt.lastIndex+=st[0].length):rt.lastIndex=0:vt&&st&&(rt.lastIndex=rt.global?st.index+st[0].length:tt),it&&st&&st.length>1&&v(G,st[0],S,(function(){for(ht=1;ht<arguments.length-2;ht++)arguments[ht]===void 0&&(st[ht]=void 0)})),st&&St)for(st.groups=Et=H(null),ht=0;ht<St.length;ht++)Et[(Mt=St[ht])[0]]=st[Mt[1]];return st}),y.exports=q},7979:function(y,T,o){var u=o(8551);y.exports=function(){var m=u(this),v="";return m.hasIndices&&(v+="d"),m.global&&(v+="g"),m.ignoreCase&&(v+="i"),m.multiline&&(v+="m"),m.dotAll&&(v+="s"),m.unicode&&(v+="u"),m.unicodeSets&&(v+="v"),m.sticky&&(v+="y"),v}},1034:function(y,T,o){var u=o(9565),m=o(9297),v=o(1625),p=o(7979),E=RegExp.prototype;y.exports=function(w){var C=w.flags;return C!==void 0||"flags"in E||m(w,"flags")||!v(E,w)?C:u(p,w)}},8429:function(y,T,o){var u=o(9039),m=o(4576).RegExp,v=u((function(){var w=m("a","y");return w.lastIndex=2,w.exec("abcd")!==null})),p=v||u((function(){return!m("a","y").sticky})),E=v||u((function(){var w=m("^r","gy");return w.lastIndex=2,w.exec("str")!==null}));y.exports={BROKEN_CARET:E,MISSED_STICKY:p,UNSUPPORTED_Y:v}},3635:function(y,T,o){var u=o(9039),m=o(4576).RegExp;y.exports=u((function(){var v=m(".","s");return!(v.dotAll&&v.test(`
`)&&v.flags==="s")}))},8814:function(y,T,o){var u=o(9039),m=o(4576).RegExp;y.exports=u((function(){var v=m("(?<a>b)","g");return v.exec("b").groups.a!=="b"||"b".replace(v,"$<a>c")!=="bc"}))},7750:function(y,T,o){var u=o(4117),m=TypeError;y.exports=function(v){if(u(v))throw new m("Can't call method on "+v);return v}},7633:function(y,T,o){var u=o(7751),m=o(2106),v=o(8227),p=o(3724),E=v("species");y.exports=function(w){var C=u(w);p&&C&&!C[E]&&m(C,E,{configurable:!0,get:function(){return this}})}},687:function(y,T,o){var u=o(4913).f,m=o(9297),v=o(8227)("toStringTag");y.exports=function(p,E,w){p&&!w&&(p=p.prototype),p&&!m(p,v)&&u(p,v,{configurable:!0,value:E})}},6119:function(y,T,o){var u=o(5745),m=o(3392),v=u("keys");y.exports=function(p){return v[p]||(v[p]=m(p))}},7629:function(y,T,o){var u=o(6395),m=o(4576),v=o(9433),p="__core-js_shared__",E=y.exports=m[p]||v(p,{});(E.versions||(E.versions=[])).push({version:"3.40.0",mode:u?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(y,T,o){var u=o(7629);y.exports=function(m,v){return u[m]||(u[m]=v||{})}},2293:function(y,T,o){var u=o(8551),m=o(5548),v=o(4117),p=o(8227)("species");y.exports=function(E,w){var C,P=u(E).constructor;return P===void 0||v(C=u(P)[p])?w:m(C)}},8183:function(y,T,o){var u=o(9504),m=o(1291),v=o(655),p=o(7750),E=u("".charAt),w=u("".charCodeAt),C=u("".slice),P=function(H){return function(K,V){var F,G,k=v(p(K)),q=m(V),j=k.length;return q<0||q>=j?H?"":void 0:(F=w(k,q))<55296||F>56319||q+1===j||(G=w(k,q+1))<56320||G>57343?H?E(k,q):F:H?C(k,q,q+2):G-56320+(F-55296<<10)+65536}};y.exports={codeAt:P(!1),charAt:P(!0)}},706:function(y,T,o){var u=o(350).PROPER,m=o(9039),v=o(7452);y.exports=function(p){return m((function(){return!!v[p]()||"​᠎"[p]()!=="​᠎"||u&&v[p].name!==p}))}},3802:function(y,T,o){var u=o(9504),m=o(7750),v=o(655),p=o(7452),E=u("".replace),w=RegExp("^["+p+"]+"),C=RegExp("(^|[^"+p+"])["+p+"]+$"),P=function(H){return function(K){var V=v(m(K));return 1&H&&(V=E(V,w,"")),2&H&&(V=E(V,C,"$1")),V}};y.exports={start:P(1),end:P(2),trim:P(3)}},4495:function(y,T,o){var u=o(9519),m=o(9039),v=o(4576).String;y.exports=!!Object.getOwnPropertySymbols&&!m((function(){var p=Symbol("symbol detection");return!v(p)||!(Object(p)instanceof Symbol)||!Symbol.sham&&u&&u<41}))},8242:function(y,T,o){var u=o(9565),m=o(7751),v=o(8227),p=o(6840);y.exports=function(){var E=m("Symbol"),w=E&&E.prototype,C=w&&w.valueOf,P=v("toPrimitive");w&&!w[P]&&p(w,P,(function(H){return u(C,this)}),{arity:1})}},1296:function(y,T,o){var u=o(4495);y.exports=u&&!!Symbol.for&&!!Symbol.keyFor},1240:function(y,T,o){var u=o(9504);y.exports=u(1 .valueOf)},5610:function(y,T,o){var u=o(1291),m=Math.max,v=Math.min;y.exports=function(p,E){var w=u(p);return w<0?m(w+E,0):v(w,E)}},5397:function(y,T,o){var u=o(7055),m=o(7750);y.exports=function(v){return u(m(v))}},1291:function(y,T,o){var u=o(741);y.exports=function(m){var v=+m;return v!=v||v===0?0:u(v)}},8014:function(y,T,o){var u=o(1291),m=Math.min;y.exports=function(v){var p=u(v);return p>0?m(p,9007199254740991):0}},8981:function(y,T,o){var u=o(7750),m=Object;y.exports=function(v){return m(u(v))}},2777:function(y,T,o){var u=o(9565),m=o(34),v=o(757),p=o(5966),E=o(4270),w=o(8227),C=TypeError,P=w("toPrimitive");y.exports=function(H,K){if(!m(H)||v(H))return H;var V,F=p(H,P);if(F){if(K===void 0&&(K="default"),V=u(F,H,K),!m(V)||v(V))return V;throw new C("Can't convert object to primitive value")}return K===void 0&&(K="number"),E(H,K)}},6969:function(y,T,o){var u=o(2777),m=o(757);y.exports=function(v){var p=u(v,"string");return m(p)?p:p+""}},2140:function(y,T,o){var u={};u[o(8227)("toStringTag")]="z",y.exports=String(u)==="[object z]"},655:function(y,T,o){var u=o(6955),m=String;y.exports=function(v){if(u(v)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return m(v)}},6823:function(y){var T=String;y.exports=function(o){try{return T(o)}catch{return"Object"}}},3392:function(y,T,o){var u=o(9504),m=0,v=Math.random(),p=u(1 .toString);y.exports=function(E){return"Symbol("+(E===void 0?"":E)+")_"+p(++m+v,36)}},7040:function(y,T,o){var u=o(4495);y.exports=u&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},8686:function(y,T,o){var u=o(3724),m=o(9039);y.exports=u&&m((function(){return Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype!==42}))},8622:function(y,T,o){var u=o(4576),m=o(4901),v=u.WeakMap;y.exports=m(v)&&/native code/.test(String(v))},511:function(y,T,o){var u=o(9167),m=o(9297),v=o(1951),p=o(4913).f;y.exports=function(E){var w=u.Symbol||(u.Symbol={});m(w,E)||p(w,E,{value:v.f(E)})}},1951:function(y,T,o){var u=o(8227);T.f=u},8227:function(y,T,o){var u=o(4576),m=o(5745),v=o(9297),p=o(3392),E=o(4495),w=o(7040),C=u.Symbol,P=m("wks"),H=w?C.for||C:C&&C.withoutSetter||p;y.exports=function(K){return v(P,K)||(P[K]=E&&v(C,K)?C[K]:H("Symbol."+K)),P[K]}},7452:function(y){y.exports=`	
\v\f\r                　\u2028\u2029\uFEFF`},8706:function(y,T,o){var u=o(6518),m=o(9039),v=o(4376),p=o(34),E=o(8981),w=o(6198),C=o(6837),P=o(4659),H=o(1469),K=o(597),V=o(8227),F=o(9519),G=V("isConcatSpreadable"),k=F>=51||!m((function(){var j=[];return j[G]=!1,j.concat()[0]!==j})),q=function(j){if(!p(j))return!1;var ct=j[G];return ct!==void 0?!!ct:v(j)};u({target:"Array",proto:!0,arity:1,forced:!k||!K("concat")},{concat:function(j){var ct,B,ut,vt,_t,it=E(this),Tt=H(it,0),I=0;for(ct=-1,ut=arguments.length;ct<ut;ct++)if(q(_t=ct===-1?it:arguments[ct]))for(vt=w(_t),C(I+vt),B=0;B<vt;B++,I++)B in _t&&P(Tt,I,_t[B]);else C(I+1),P(Tt,I++,_t);return Tt.length=I,Tt}})},2008:function(y,T,o){var u=o(6518),m=o(9213).filter;u({target:"Array",proto:!0,forced:!o(597)("filter")},{filter:function(v){return m(this,v,arguments.length>1?arguments[1]:void 0)}})},3418:function(y,T,o){var u=o(6518),m=o(7916);u({target:"Array",stat:!0,forced:!o(4428)((function(v){Array.from(v)}))},{from:m})},4423:function(y,T,o){var u=o(6518),m=o(9617).includes,v=o(9039),p=o(6469);u({target:"Array",proto:!0,forced:v((function(){return!Array(1).includes()}))},{includes:function(E){return m(this,E,arguments.length>1?arguments[1]:void 0)}}),p("includes")},5276:function(y,T,o){var u=o(6518),m=o(7476),v=o(9617).indexOf,p=o(4598),E=m([].indexOf),w=!!E&&1/E([1],1,-0)<0;u({target:"Array",proto:!0,forced:w||!p("indexOf")},{indexOf:function(C){var P=arguments.length>1?arguments[1]:void 0;return w?E(this,C,P)||0:v(this,C,P)}})},3792:function(y,T,o){var u=o(5397),m=o(6469),v=o(6269),p=o(1181),E=o(4913).f,w=o(1088),C=o(2529),P=o(6395),H=o(3724),K="Array Iterator",V=p.set,F=p.getterFor(K);y.exports=w(Array,"Array",(function(k,q){V(this,{type:K,target:u(k),index:0,kind:q})}),(function(){var k=F(this),q=k.target,j=k.index++;if(!q||j>=q.length)return k.target=null,C(void 0,!0);switch(k.kind){case"keys":return C(j,!1);case"values":return C(q[j],!1)}return C([j,q[j]],!1)}),"values");var G=v.Arguments=v.Array;if(m("keys"),m("values"),m("entries"),!P&&H&&G.name!=="values")try{E(G,"name",{value:"values"})}catch{}},8598:function(y,T,o){var u=o(6518),m=o(9504),v=o(7055),p=o(5397),E=o(4598),w=m([].join);u({target:"Array",proto:!0,forced:v!==Object||!E("join",",")},{join:function(C){return w(p(this),C===void 0?",":C)}})},2062:function(y,T,o){var u=o(6518),m=o(9213).map;u({target:"Array",proto:!0,forced:!o(597)("map")},{map:function(v){return m(this,v,arguments.length>1?arguments[1]:void 0)}})},2712:function(y,T,o){var u=o(6518),m=o(926).left,v=o(4598),p=o(9519);u({target:"Array",proto:!0,forced:!o(6193)&&p>79&&p<83||!v("reduce")},{reduce:function(E){var w=arguments.length;return m(this,E,w,w>1?arguments[1]:void 0)}})},4782:function(y,T,o){var u=o(6518),m=o(4376),v=o(3517),p=o(34),E=o(5610),w=o(6198),C=o(5397),P=o(4659),H=o(8227),K=o(597),V=o(7680),F=K("slice"),G=H("species"),k=Array,q=Math.max;u({target:"Array",proto:!0,forced:!F},{slice:function(j,ct){var B,ut,vt,_t=C(this),it=w(_t),Tt=E(j,it),I=E(ct===void 0?it:ct,it);if(m(_t)&&(B=_t.constructor,(v(B)&&(B===k||m(B.prototype))||p(B)&&(B=B[G])===null)&&(B=void 0),B===k||B===void 0))return V(_t,Tt,I);for(ut=new(B===void 0?k:B)(q(I-Tt,0)),vt=0;Tt<I;Tt++,vt++)Tt in _t&&P(ut,vt,_t[Tt]);return ut.length=vt,ut}})},6910:function(y,T,o){var u=o(6518),m=o(9504),v=o(9306),p=o(8981),E=o(6198),w=o(4606),C=o(655),P=o(9039),H=o(4488),K=o(4598),V=o(3709),F=o(3763),G=o(9519),k=o(3607),q=[],j=m(q.sort),ct=m(q.push),B=P((function(){q.sort(void 0)})),ut=P((function(){q.sort(null)})),vt=K("sort"),_t=!P((function(){if(G)return G<70;if(!(V&&V>3)){if(F)return!0;if(k)return k<603;var it,Tt,I,S,tt="";for(it=65;it<76;it++){switch(Tt=String.fromCharCode(it),it){case 66:case 69:case 70:case 72:I=3;break;case 68:case 71:I=4;break;default:I=2}for(S=0;S<47;S++)q.push({k:Tt+S,v:I})}for(q.sort((function(st,ht){return ht.v-st.v})),S=0;S<q.length;S++)Tt=q[S].k.charAt(0),tt.charAt(tt.length-1)!==Tt&&(tt+=Tt);return tt!=="DGBEFHACIJK"}}));u({target:"Array",proto:!0,forced:B||!ut||!vt||!_t},{sort:function(it){it!==void 0&&v(it);var Tt=p(this);if(_t)return it===void 0?j(Tt):j(Tt,it);var I,S,tt=[],st=E(Tt);for(S=0;S<st;S++)S in Tt&&ct(tt,Tt[S]);for(H(tt,(function(ht){return function(Et,Mt){return Mt===void 0?-1:Et===void 0?1:ht!==void 0?+ht(Et,Mt)||0:C(Et)>C(Mt)?1:-1}})(it)),I=E(tt),S=0;S<I;)Tt[S]=tt[S++];for(;S<st;)w(Tt,S++);return Tt}})},4554:function(y,T,o){var u=o(6518),m=o(8981),v=o(5610),p=o(1291),E=o(6198),w=o(4527),C=o(6837),P=o(1469),H=o(4659),K=o(4606),V=o(597)("splice"),F=Math.max,G=Math.min;u({target:"Array",proto:!0,forced:!V},{splice:function(k,q){var j,ct,B,ut,vt,_t,it=m(this),Tt=E(it),I=v(k,Tt),S=arguments.length;for(S===0?j=ct=0:S===1?(j=0,ct=Tt-I):(j=S-2,ct=G(F(p(q),0),Tt-I)),C(Tt+j-ct),B=P(it,ct),ut=0;ut<ct;ut++)(vt=I+ut)in it&&H(B,ut,it[vt]);if(B.length=ct,j<ct){for(ut=I;ut<Tt-ct;ut++)_t=ut+j,(vt=ut+ct)in it?it[_t]=it[vt]:K(it,_t);for(ut=Tt;ut>Tt-ct+j;ut--)K(it,ut-1)}else if(j>ct)for(ut=Tt-ct;ut>I;ut--)_t=ut+j-1,(vt=ut+ct-1)in it?it[_t]=it[vt]:K(it,_t);for(ut=0;ut<j;ut++)it[ut+I]=arguments[ut+2];return w(it,Tt-ct+j),B}})},739:function(y,T,o){var u=o(6518),m=o(9039),v=o(8981),p=o(2777);u({target:"Date",proto:!0,arity:1,forced:m((function(){return new Date(NaN).toJSON()!==null||Date.prototype.toJSON.call({toISOString:function(){return 1}})!==1}))},{toJSON:function(E){var w=v(this),C=p(w,"number");return typeof C!="number"||isFinite(C)?w.toISOString():null}})},9572:function(y,T,o){var u=o(9297),m=o(6840),v=o(3640),p=o(8227)("toPrimitive"),E=Date.prototype;u(E,p)||m(E,p,v)},2010:function(y,T,o){var u=o(3724),m=o(350).EXISTS,v=o(9504),p=o(2106),E=Function.prototype,w=v(E.toString),C=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,P=v(C.exec);u&&!m&&p(E,"name",{configurable:!0,get:function(){try{return P(C,w(this))[1]}catch{return""}}})},3110:function(y,T,o){var u=o(6518),m=o(7751),v=o(8745),p=o(9565),E=o(9504),w=o(9039),C=o(4901),P=o(757),H=o(7680),K=o(6933),V=o(4495),F=String,G=m("JSON","stringify"),k=E(/./.exec),q=E("".charAt),j=E("".charCodeAt),ct=E("".replace),B=E(1 .toString),ut=/[\uD800-\uDFFF]/g,vt=/^[\uD800-\uDBFF]$/,_t=/^[\uDC00-\uDFFF]$/,it=!V||w((function(){var tt=m("Symbol")("stringify detection");return G([tt])!=="[null]"||G({a:tt})!=="{}"||G(Object(tt))!=="{}"})),Tt=w((function(){return G("\uDF06\uD834")!=='"\\udf06\\ud834"'||G("\uDEAD")!=='"\\udead"'})),I=function(tt,st){var ht=H(arguments),Et=K(st);if(C(Et)||tt!==void 0&&!P(tt))return ht[1]=function(Mt,rt){if(C(Et)&&(rt=p(Et,this,F(Mt),rt)),!P(rt))return rt},v(G,null,ht)},S=function(tt,st,ht){var Et=q(ht,st-1),Mt=q(ht,st+1);return k(vt,tt)&&!k(_t,Mt)||k(_t,tt)&&!k(vt,Et)?"\\u"+B(j(tt,0),16):tt};G&&u({target:"JSON",stat:!0,arity:3,forced:it||Tt},{stringify:function(tt,st,ht){var Et=H(arguments),Mt=v(it?I:G,null,Et);return Tt&&typeof Mt=="string"?ct(Mt,ut,S):Mt}})},2892:function(y,T,o){var u=o(6518),m=o(6395),v=o(3724),p=o(4576),E=o(9167),w=o(9504),C=o(2796),P=o(9297),H=o(3167),K=o(1625),V=o(757),F=o(2777),G=o(9039),k=o(8480).f,q=o(7347).f,j=o(4913).f,ct=o(1240),B=o(3802).trim,ut="Number",vt=p[ut],_t=E[ut],it=vt.prototype,Tt=p.TypeError,I=w("".slice),S=w("".charCodeAt),tt=function(Mt){var rt,dt,wt,Rt,St,bt,Lt,Dt,Ot=F(Mt,"number");if(V(Ot))throw new Tt("Cannot convert a Symbol value to a number");if(typeof Ot=="string"&&Ot.length>2){if(Ot=B(Ot),(rt=S(Ot,0))===43||rt===45){if((dt=S(Ot,2))===88||dt===120)return NaN}else if(rt===48){switch(S(Ot,1)){case 66:case 98:wt=2,Rt=49;break;case 79:case 111:wt=8,Rt=55;break;default:return+Ot}for(bt=(St=I(Ot,2)).length,Lt=0;Lt<bt;Lt++)if((Dt=S(St,Lt))<48||Dt>Rt)return NaN;return parseInt(St,wt)}}return+Ot},st=C(ut,!vt(" 0o1")||!vt("0b1")||vt("+0x1")),ht=function(Mt){var rt,dt=arguments.length<1?0:vt((function(wt){var Rt=F(wt,"number");return typeof Rt=="bigint"?Rt:tt(Rt)})(Mt));return K(it,rt=this)&&G((function(){ct(rt)}))?H(Object(dt),this,ht):dt};ht.prototype=it,st&&!m&&(it.constructor=ht),u({global:!0,constructor:!0,wrap:!0,forced:st},{Number:ht});var Et=function(Mt,rt){for(var dt,wt=v?k(rt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Rt=0;wt.length>Rt;Rt++)P(rt,dt=wt[Rt])&&!P(Mt,dt)&&j(Mt,dt,q(rt,dt))};m&&_t&&Et(E[ut],_t),(st||m)&&Et(E[ut],vt)},2637:function(y,T,o){o(6518)({target:"Number",stat:!0},{isInteger:o(2087)})},9085:function(y,T,o){var u=o(6518),m=o(4213);u({target:"Object",stat:!0,arity:2,forced:Object.assign!==m},{assign:m})},7427:function(y,T,o){var u=o(6518),m=o(3724),v=o(2551),p=o(9306),E=o(8981),w=o(4913);m&&u({target:"Object",proto:!0,forced:v},{__defineGetter__:function(C,P){w.f(E(this),C,{get:p(P),enumerable:!0,configurable:!0})}})},3851:function(y,T,o){var u=o(6518),m=o(9039),v=o(5397),p=o(7347).f,E=o(3724);u({target:"Object",stat:!0,forced:!E||m((function(){p(1)})),sham:!E},{getOwnPropertyDescriptor:function(w,C){return p(v(w),C)}})},1278:function(y,T,o){var u=o(6518),m=o(3724),v=o(5031),p=o(5397),E=o(7347),w=o(4659);u({target:"Object",stat:!0,sham:!m},{getOwnPropertyDescriptors:function(C){for(var P,H,K=p(C),V=E.f,F=v(K),G={},k=0;F.length>k;)(H=V(K,P=F[k++]))!==void 0&&w(G,P,H);return G}})},1480:function(y,T,o){var u=o(6518),m=o(9039),v=o(298).f;u({target:"Object",stat:!0,forced:m((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:v})},9773:function(y,T,o){var u=o(6518),m=o(4495),v=o(9039),p=o(3717),E=o(8981);u({target:"Object",stat:!0,forced:!m||v((function(){p.f(1)}))},{getOwnPropertySymbols:function(w){var C=p.f;return C?C(E(w)):[]}})},9432:function(y,T,o){var u=o(6518),m=o(8981),v=o(1072);u({target:"Object",stat:!0,forced:o(9039)((function(){v(1)}))},{keys:function(p){return v(m(p))}})},6099:function(y,T,o){var u=o(2140),m=o(6840),v=o(3179);u||m(Object.prototype,"toString",v,{unsafe:!0})},4864:function(y,T,o){var u=o(3724),m=o(4576),v=o(9504),p=o(2796),E=o(3167),w=o(6699),C=o(2360),P=o(8480).f,H=o(1625),K=o(788),V=o(655),F=o(1034),G=o(8429),k=o(1056),q=o(6840),j=o(9039),ct=o(9297),B=o(1181).enforce,ut=o(7633),vt=o(8227),_t=o(3635),it=o(8814),Tt=vt("match"),I=m.RegExp,S=I.prototype,tt=m.SyntaxError,st=v(S.exec),ht=v("".charAt),Et=v("".replace),Mt=v("".indexOf),rt=v("".slice),dt=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,wt=/a/g,Rt=/a/g,St=new I(wt)!==wt,bt=G.MISSED_STICKY,Lt=G.UNSUPPORTED_Y,Dt=u&&(!St||bt||_t||it||j((function(){return Rt[Tt]=!1,I(wt)!==wt||I(Rt)===Rt||String(I(wt,"i"))!=="/a/i"})));if(p("RegExp",Dt)){for(var Ot=function(xt,It){var Ut,At,Ht,jt,le,ee,xe=H(S,this),Fe=K(xt),$n=It===void 0,Un=[],Ne=xt;if(!xe&&Fe&&$n&&xt.constructor===Ot)return xt;if((Fe||H(S,xt))&&(xt=xt.source,$n&&(It=F(Ne))),xt=xt===void 0?"":V(xt),It=It===void 0?"":V(It),Ne=xt,_t&&"dotAll"in wt&&(At=!!It&&Mt(It,"s")>-1)&&(It=Et(It,/s/g,"")),Ut=It,bt&&"sticky"in wt&&(Ht=!!It&&Mt(It,"y")>-1)&&Lt&&(It=Et(It,/y/g,"")),it&&(jt=(function(Ce){for(var ve,cn=Ce.length,Re=0,Ge="",Be=[],xn=C(null),sn=!1,un=!1,Kn=0,hn="";Re<=cn;Re++){if((ve=ht(Ce,Re))==="\\")ve+=ht(Ce,++Re);else if(ve==="]")sn=!1;else if(!sn)switch(!0){case ve==="[":sn=!0;break;case ve==="(":if(Ge+=ve,rt(Ce,Re+1,Re+3)==="?:")continue;st(dt,rt(Ce,Re+1))&&(Re+=2,un=!0),Kn++;continue;case(ve===">"&&un):if(hn===""||ct(xn,hn))throw new tt("Invalid capture group name");xn[hn]=!0,Be[Be.length]=[hn,Kn],un=!1,hn="";continue}un?hn+=ve:Ge+=ve}return[Ge,Be]})(xt),xt=jt[0],Un=jt[1]),le=E(I(xt,It),xe?this:S,Ot),(At||Ht||Un.length)&&(ee=B(le),At&&(ee.dotAll=!0,ee.raw=Ot((function(Ce){for(var ve,cn=Ce.length,Re=0,Ge="",Be=!1;Re<=cn;Re++)(ve=ht(Ce,Re))!=="\\"?Be||ve!=="."?(ve==="["?Be=!0:ve==="]"&&(Be=!1),Ge+=ve):Ge+="[\\s\\S]":Ge+=ve+ht(Ce,++Re);return Ge})(xt),Ut)),Ht&&(ee.sticky=!0),Un.length&&(ee.groups=Un)),xt!==Ne)try{w(le,"source",Ne===""?"(?:)":Ne)}catch{}return le},Z=P(I),Pt=0;Z.length>Pt;)k(Ot,I,Z[Pt++]);S.constructor=Ot,Ot.prototype=S,q(m,"RegExp",Ot,{constructor:!0})}ut("RegExp")},7495:function(y,T,o){var u=o(6518),m=o(7323);u({target:"RegExp",proto:!0,forced:/./.exec!==m},{exec:m})},8781:function(y,T,o){var u=o(350).PROPER,m=o(6840),v=o(8551),p=o(655),E=o(9039),w=o(1034),C="toString",P=RegExp.prototype,H=P[C],K=E((function(){return H.call({source:"a",flags:"b"})!=="/a/b"})),V=u&&H.name!==C;(K||V)&&m(P,C,(function(){var F=v(this);return"/"+p(F.source)+"/"+p(w(F))}),{unsafe:!0})},1699:function(y,T,o){var u=o(6518),m=o(9504),v=o(5749),p=o(7750),E=o(655),w=o(1436),C=m("".indexOf);u({target:"String",proto:!0,forced:!w("includes")},{includes:function(P){return!!~C(E(p(this)),E(v(P)),arguments.length>1?arguments[1]:void 0)}})},7764:function(y,T,o){var u=o(8183).charAt,m=o(655),v=o(1181),p=o(1088),E=o(2529),w="String Iterator",C=v.set,P=v.getterFor(w);p(String,"String",(function(H){C(this,{type:w,string:m(H),index:0})}),(function(){var H,K=P(this),V=K.string,F=K.index;return F>=V.length?E(void 0,!0):(H=u(V,F),K.index+=H.length,E(H,!1))}))},8543:function(y,T,o){var u=o(6518),m=o(9565),v=o(7476),p=o(3994),E=o(2529),w=o(7750),C=o(8014),P=o(655),H=o(8551),K=o(4117),V=o(2195),F=o(788),G=o(1034),k=o(5966),q=o(6840),j=o(9039),ct=o(8227),B=o(2293),ut=o(7829),vt=o(6682),_t=o(1181),it=o(6395),Tt=ct("matchAll"),I="RegExp String",S=I+" Iterator",tt=_t.set,st=_t.getterFor(S),ht=RegExp.prototype,Et=TypeError,Mt=v("".indexOf),rt=v("".matchAll),dt=!!rt&&!j((function(){rt("a",/./)})),wt=p((function(St,bt,Lt,Dt){tt(this,{type:S,regexp:St,string:bt,global:Lt,unicode:Dt,done:!1})}),I,(function(){var St=st(this);if(St.done)return E(void 0,!0);var bt=St.regexp,Lt=St.string,Dt=vt(bt,Lt);return Dt===null?(St.done=!0,E(void 0,!0)):St.global?(P(Dt[0])===""&&(bt.lastIndex=ut(Lt,C(bt.lastIndex),St.unicode)),E(Dt,!1)):(St.done=!0,E(Dt,!1))})),Rt=function(St){var bt,Lt,Dt,Ot=H(this),Z=P(St),Pt=B(Ot,RegExp),xt=P(G(Ot));return bt=new Pt(Pt===RegExp?Ot.source:Ot,xt),Lt=!!~Mt(xt,"g"),Dt=!!~Mt(xt,"u"),bt.lastIndex=C(Ot.lastIndex),new wt(bt,Z,Lt,Dt)};u({target:"String",proto:!0,forced:dt},{matchAll:function(St){var bt,Lt,Dt,Ot,Z=w(this);if(K(St)){if(dt)return rt(Z,St)}else{if(F(St)&&(bt=P(w(G(St))),!~Mt(bt,"g")))throw new Et("`.matchAll` does not allow non-global regexes");if(dt)return rt(Z,St);if((Dt=k(St,Tt))===void 0&&it&&V(St)==="RegExp"&&(Dt=Rt),Dt)return m(Dt,St,Z)}return Lt=P(Z),Ot=new RegExp(St,"g"),it?m(Rt,Ot,Lt):Ot[Tt](Lt)}}),it||Tt in ht||q(ht,Tt,Rt)},1761:function(y,T,o){var u=o(9565),m=o(9228),v=o(8551),p=o(4117),E=o(8014),w=o(655),C=o(7750),P=o(5966),H=o(7829),K=o(6682);m("match",(function(V,F,G){return[function(k){var q=C(this),j=p(k)?void 0:P(k,V);return j?u(j,k,q):new RegExp(k)[V](w(q))},function(k){var q=v(this),j=w(k),ct=G(F,q,j);if(ct.done)return ct.value;if(!q.global)return K(q,j);var B=q.unicode;q.lastIndex=0;for(var ut,vt=[],_t=0;(ut=K(q,j))!==null;){var it=w(ut[0]);vt[_t]=it,it===""&&(q.lastIndex=H(j,E(q.lastIndex),B)),_t++}return _t===0?null:vt}]}))},5440:function(y,T,o){var u=o(8745),m=o(9565),v=o(9504),p=o(9228),E=o(9039),w=o(8551),C=o(4901),P=o(4117),H=o(1291),K=o(8014),V=o(655),F=o(7750),G=o(7829),k=o(5966),q=o(2478),j=o(6682),ct=o(8227)("replace"),B=Math.max,ut=Math.min,vt=v([].concat),_t=v([].push),it=v("".indexOf),Tt=v("".slice),I="a".replace(/./,"$0")==="$0",S=!!/./[ct]&&/./[ct]("a","$0")==="";p("replace",(function(tt,st,ht){var Et=S?"$":"$0";return[function(Mt,rt){var dt=F(this),wt=P(Mt)?void 0:k(Mt,ct);return wt?m(wt,Mt,dt,rt):m(st,V(dt),Mt,rt)},function(Mt,rt){var dt=w(this),wt=V(Mt);if(typeof rt=="string"&&it(rt,Et)===-1&&it(rt,"$<")===-1){var Rt=ht(st,dt,wt,rt);if(Rt.done)return Rt.value}var St=C(rt);St||(rt=V(rt));var bt,Lt=dt.global;Lt&&(bt=dt.unicode,dt.lastIndex=0);for(var Dt,Ot=[];(Dt=j(dt,wt))!==null&&(_t(Ot,Dt),Lt);)V(Dt[0])===""&&(dt.lastIndex=G(wt,K(dt.lastIndex),bt));for(var Z,Pt="",xt=0,It=0;It<Ot.length;It++){for(var Ut,At=V((Dt=Ot[It])[0]),Ht=B(ut(H(Dt.index),wt.length),0),jt=[],le=1;le<Dt.length;le++)_t(jt,(Z=Dt[le])===void 0?Z:String(Z));var ee=Dt.groups;if(St){var xe=vt([At],jt,Ht,wt);ee!==void 0&&_t(xe,ee),Ut=V(u(rt,void 0,xe))}else Ut=q(At,wt,Ht,jt,ee,rt);Ht>=xt&&(Pt+=Tt(wt,xt,Ht)+Ut,xt=Ht+At.length)}return Pt+Tt(wt,xt)}]}),!!E((function(){var tt=/./;return tt.exec=function(){var st=[];return st.groups={a:"7"},st},"".replace(tt,"$<a>")!=="7"}))||!I||S)},744:function(y,T,o){var u=o(9565),m=o(9504),v=o(9228),p=o(8551),E=o(4117),w=o(7750),C=o(2293),P=o(7829),H=o(8014),K=o(655),V=o(5966),F=o(6682),G=o(8429),k=o(9039),q=G.UNSUPPORTED_Y,j=Math.min,ct=m([].push),B=m("".slice),ut=!k((function(){var _t=/(?:)/,it=_t.exec;_t.exec=function(){return it.apply(this,arguments)};var Tt="ab".split(_t);return Tt.length!==2||Tt[0]!=="a"||Tt[1]!=="b"})),vt="abbc".split(/(b)*/)[1]==="c"||"test".split(/(?:)/,-1).length!==4||"ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||".".split(/()()/).length>1||"".split(/.?/).length;v("split",(function(_t,it,Tt){var I="0".split(void 0,0).length?function(S,tt){return S===void 0&&tt===0?[]:u(it,this,S,tt)}:it;return[function(S,tt){var st=w(this),ht=E(S)?void 0:V(S,_t);return ht?u(ht,S,st,tt):u(I,K(st),S,tt)},function(S,tt){var st=p(this),ht=K(S);if(!vt){var Et=Tt(I,st,ht,tt,I!==it);if(Et.done)return Et.value}var Mt=C(st,RegExp),rt=st.unicode,dt=(st.ignoreCase?"i":"")+(st.multiline?"m":"")+(st.unicode?"u":"")+(q?"g":"y"),wt=new Mt(q?"^(?:"+st.source+")":st,dt),Rt=tt===void 0?4294967295:tt>>>0;if(Rt===0)return[];if(ht.length===0)return F(wt,ht)===null?[ht]:[];for(var St=0,bt=0,Lt=[];bt<ht.length;){wt.lastIndex=q?0:bt;var Dt,Ot=F(wt,q?B(ht,bt):ht);if(Ot===null||(Dt=j(H(wt.lastIndex+(q?bt:0)),ht.length))===St)bt=P(ht,bt,rt);else{if(ct(Lt,B(ht,St,bt)),Lt.length===Rt)return Lt;for(var Z=1;Z<=Ot.length-1;Z++)if(ct(Lt,Ot[Z]),Lt.length===Rt)return Lt;bt=St=Dt}}return ct(Lt,B(ht,St)),Lt}]}),vt||!ut,q)},2762:function(y,T,o){var u=o(6518),m=o(3802).trim;u({target:"String",proto:!0,forced:o(706)("trim")},{trim:function(){return m(this)}})},6761:function(y,T,o){var u=o(6518),m=o(4576),v=o(9565),p=o(9504),E=o(6395),w=o(3724),C=o(4495),P=o(9039),H=o(9297),K=o(1625),V=o(8551),F=o(5397),G=o(6969),k=o(655),q=o(6980),j=o(2360),ct=o(1072),B=o(8480),ut=o(298),vt=o(3717),_t=o(7347),it=o(4913),Tt=o(6801),I=o(8773),S=o(6840),tt=o(2106),st=o(5745),ht=o(6119),Et=o(421),Mt=o(3392),rt=o(8227),dt=o(1951),wt=o(511),Rt=o(8242),St=o(687),bt=o(1181),Lt=o(9213).forEach,Dt=ht("hidden"),Ot="Symbol",Z="prototype",Pt=bt.set,xt=bt.getterFor(Ot),It=Object[Z],Ut=m.Symbol,At=Ut&&Ut[Z],Ht=m.RangeError,jt=m.TypeError,le=m.QObject,ee=_t.f,xe=it.f,Fe=ut.f,$n=I.f,Un=p([].push),Ne=st("symbols"),Ce=st("op-symbols"),ve=st("wks"),cn=!le||!le[Z]||!le[Z].findChild,Re=function(Jt,re,se){var ue=ee(It,re);ue&&delete It[re],xe(Jt,re,se),ue&&Jt!==It&&xe(It,re,ue)},Ge=w&&P((function(){return j(xe({},"a",{get:function(){return xe(this,"a",{value:7}).a}})).a!==7}))?Re:xe,Be=function(Jt,re){var se=Ne[Jt]=j(At);return Pt(se,{type:Ot,tag:Jt,description:re}),w||(se.description=re),se},xn=function(Jt,re,se){Jt===It&&xn(Ce,re,se),V(Jt);var ue=G(re);return V(se),H(Ne,ue)?(se.enumerable?(H(Jt,Dt)&&Jt[Dt][ue]&&(Jt[Dt][ue]=!1),se=j(se,{enumerable:q(0,!1)})):(H(Jt,Dt)||xe(Jt,Dt,q(1,j(null))),Jt[Dt][ue]=!0),Ge(Jt,ue,se)):xe(Jt,ue,se)},sn=function(Jt,re){V(Jt);var se=F(re),ue=ct(se).concat(Or(se));return Lt(ue,(function(Te){w&&!v(un,se,Te)||xn(Jt,Te,se[Te])})),Jt},un=function(Jt){var re=G(Jt),se=v($n,this,re);return!(this===It&&H(Ne,re)&&!H(Ce,re))&&(!(se||!H(this,re)||!H(Ne,re)||H(this,Dt)&&this[Dt][re])||se)},Kn=function(Jt,re){var se=F(Jt),ue=G(re);if(se!==It||!H(Ne,ue)||H(Ce,ue)){var Te=ee(se,ue);return!Te||!H(Ne,ue)||H(se,Dt)&&se[Dt][ue]||(Te.enumerable=!0),Te}},hn=function(Jt){var re=Fe(F(Jt)),se=[];return Lt(re,(function(ue){H(Ne,ue)||H(Et,ue)||Un(se,ue)})),se},Or=function(Jt){var re=Jt===It,se=Fe(re?Ce:F(Jt)),ue=[];return Lt(se,(function(Te){!H(Ne,Te)||re&&!H(It,Te)||Un(ue,Ne[Te])})),ue};C||(Ut=function(){if(K(At,this))throw new jt("Symbol is not a constructor");var Jt=arguments.length&&arguments[0]!==void 0?k(arguments[0]):void 0,re=Mt(Jt),se=function(ue){var Te=this===void 0?m:this;Te===It&&v(se,Ce,ue),H(Te,Dt)&&H(Te[Dt],re)&&(Te[Dt][re]=!1);var U=q(1,ue);try{Ge(Te,re,U)}catch(ot){if(!(ot instanceof Ht))throw ot;Re(Te,re,U)}};return w&&cn&&Ge(It,re,{configurable:!0,set:se}),Be(re,Jt)},S(At=Ut[Z],"toString",(function(){return xt(this).tag})),S(Ut,"withoutSetter",(function(Jt){return Be(Mt(Jt),Jt)})),I.f=un,it.f=xn,Tt.f=sn,_t.f=Kn,B.f=ut.f=hn,vt.f=Or,dt.f=function(Jt){return Be(rt(Jt),Jt)},w&&(tt(At,"description",{configurable:!0,get:function(){return xt(this).description}}),E||S(It,"propertyIsEnumerable",un,{unsafe:!0}))),u({global:!0,constructor:!0,wrap:!0,forced:!C,sham:!C},{Symbol:Ut}),Lt(ct(ve),(function(Jt){wt(Jt)})),u({target:Ot,stat:!0,forced:!C},{useSetter:function(){cn=!0},useSimple:function(){cn=!1}}),u({target:"Object",stat:!0,forced:!C,sham:!w},{create:function(Jt,re){return re===void 0?j(Jt):sn(j(Jt),re)},defineProperty:xn,defineProperties:sn,getOwnPropertyDescriptor:Kn}),u({target:"Object",stat:!0,forced:!C},{getOwnPropertyNames:hn}),Rt(),St(Ut,Ot),Et[Dt]=!0},9463:function(y,T,o){var u=o(6518),m=o(3724),v=o(4576),p=o(9504),E=o(9297),w=o(4901),C=o(1625),P=o(655),H=o(2106),K=o(7740),V=v.Symbol,F=V&&V.prototype;if(m&&w(V)&&(!("description"in F)||V().description!==void 0)){var G={},k=function(){var _t=arguments.length<1||arguments[0]===void 0?void 0:P(arguments[0]),it=C(F,this)?new V(_t):_t===void 0?V():V(_t);return _t===""&&(G[it]=!0),it};K(k,V),k.prototype=F,F.constructor=k;var q=String(V("description detection"))==="Symbol(description detection)",j=p(F.valueOf),ct=p(F.toString),B=/^Symbol\((.*)\)[^)]+$/,ut=p("".replace),vt=p("".slice);H(F,"description",{configurable:!0,get:function(){var _t=j(this);if(E(G,_t))return"";var it=ct(_t),Tt=q?vt(it,7,-1):ut(it,B,"$1");return Tt===""?void 0:Tt}}),u({global:!0,constructor:!0,forced:!0},{Symbol:k})}},1510:function(y,T,o){var u=o(6518),m=o(7751),v=o(9297),p=o(655),E=o(5745),w=o(1296),C=E("string-to-symbol-registry"),P=E("symbol-to-string-registry");u({target:"Symbol",stat:!0,forced:!w},{for:function(H){var K=p(H);if(v(C,K))return C[K];var V=m("Symbol")(K);return C[K]=V,P[V]=K,V}})},2259:function(y,T,o){o(511)("iterator")},2675:function(y,T,o){o(6761),o(1510),o(7812),o(3110),o(9773)},7812:function(y,T,o){var u=o(6518),m=o(9297),v=o(757),p=o(6823),E=o(5745),w=o(1296),C=E("symbol-to-string-registry");u({target:"Symbol",stat:!0,forced:!w},{keyFor:function(P){if(!v(P))throw new TypeError(p(P)+" is not a symbol");if(m(C,P))return C[P]}})},5700:function(y,T,o){var u=o(511),m=o(8242);u("toPrimitive"),m()},8344:function(y,T,o){o(8543)},3500:function(y,T,o){var u=o(4576),m=o(7400),v=o(9296),p=o(235),E=o(6699),w=function(P){if(P&&P.forEach!==p)try{E(P,"forEach",p)}catch{P.forEach=p}};for(var C in m)m[C]&&w(u[C]&&u[C].prototype);w(v)},2953:function(y,T,o){var u=o(4576),m=o(7400),v=o(9296),p=o(3792),E=o(6699),w=o(687),C=o(8227)("iterator"),P=p.values,H=function(V,F){if(V){if(V[C]!==P)try{E(V,C,P)}catch{V[C]=P}if(w(V,F,!0),m[F]){for(var G in p)if(V[G]!==p[G])try{E(V,G,p[G])}catch{V[G]=p[G]}}}};for(var K in m)H(u[K]&&u[K].prototype,K);H(v,"DOMTokenList")}},n={};function r(y){var T=n[y];if(T!==void 0)return T.exports;var o=n[y]={exports:{}};return e[y].call(o.exports,o,o.exports,r),o.exports}r.d=function(y,T){for(var o in T)r.o(T,o)&&!r.o(y,o)&&Object.defineProperty(y,o,{enumerable:!0,get:T[o]})},r.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),r.o=function(y,T){return Object.prototype.hasOwnProperty.call(y,T)},r.r=function(y){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})};var s={};r.r(s),r.d(s,{SimpleKeyboard:function(){return Ct},default:function(){return Nt}}),r(5276),r(8598),r(4782),r(4554),r(2010),r(7427),r(6099),r(7495),r(8781),r(5440),r(744),r(2762),typeof Element>"u"||"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof self<"u"&&"document"in self&&((!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))&&(function(y){if("Element"in y){var T="classList",o="prototype",u=y.Element[o],m=Object,v=String[o].trim||function(){return this.replace(/^\s+|\s+$/g,"")},p=Array[o].indexOf||function(V){for(var F=0,G=this.length;F<G;F++)if(F in this&&this[F]===V)return F;return-1},E=function(V,F){this.name=V,this.code=DOMException[V],this.message=F},w=function(V,F){if(F==="")throw new E("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(F))throw new E("INVALID_CHARACTER_ERR","The token must not contain space characters.");return p.call(V,F)},C=function(V){for(var F=v.call(V.getAttribute("class")||""),G=F?F.split(/\s+/):[],k=0,q=G.length;k<q;k++)this.push(G[k]);this._updateClassName=function(){V.setAttribute("class",this.toString())}},P=C[o]=[],H=function(){return new C(this)};if(E[o]=Error[o],P.item=function(V){return this[V]||null},P.contains=function(V){return~w(this,V+"")},P.add=function(){var V,F=arguments,G=0,k=F.length,q=!1;do~w(this,V=F[G]+"")||(this.push(V),q=!0);while(++G<k);q&&this._updateClassName()},P.remove=function(){var V,F,G=arguments,k=0,q=G.length,j=!1;do for(F=w(this,V=G[k]+"");~F;)this.splice(F,1),j=!0,F=w(this,V);while(++k<q);j&&this._updateClassName()},P.toggle=function(V,F){var G=this.contains(V),k=G?F!==!0&&"remove":F!==!1&&"add";return k&&this[k](V),F===!0||F===!1?F:!G},P.replace=function(V,F){var G=w(V+"");~G&&(this.splice(G,1,F),this._updateClassName())},P.toString=function(){return this.join(" ")},m.defineProperty){var K={get:H,enumerable:!0,configurable:!0};try{m.defineProperty(u,T,K)}catch(V){V.number!==void 0&&V.number!==-2146823252||(K.enumerable=!1,m.defineProperty(u,T,K))}}else m[o].__defineGetter__&&u.__defineGetter__(T,H)}})(self),(function(){var y=document.createElement("_");if(y.classList.add("c1","c2"),!y.classList.contains("c2")){var T=function(u){var m=DOMTokenList.prototype[u];DOMTokenList.prototype[u]=function(v){var p,E=arguments.length;for(p=0;p<E;p++)v=arguments[p],m.call(this,v)}};T("add"),T("remove")}if(y.classList.toggle("c3",!1),y.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(u,m){return 1 in arguments&&!this.contains(u)==!m?m:o.call(this,u)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(u,m){var v=this.toString().split(" "),p=v.indexOf(u+"");~p&&(v=v.slice(p),this.remove.apply(this,v),this.add(m),this.add.apply(this,v.slice(1)))}),y=null})()),r(2675),r(9463),r(2259),r(5700),r(8706),r(2008),r(3418),r(4423),r(3792),r(2062),r(6910),r(739),r(9572),r(2892),r(9085),r(3851),r(1278),r(9432),r(4864),r(1699),r(7764),r(8344),r(3500),r(2953),r(2712),r(2637),r(1480),r(1761);function a(y){return(function(T){if(Array.isArray(T))return c(T)})(y)||(function(T){if(typeof Symbol<"u"&&T[Symbol.iterator]!=null||T["@@iterator"]!=null)return Array.from(T)})(y)||l(y)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function l(y,T){if(y){if(typeof y=="string")return c(y,T);var o={}.toString.call(y).slice(8,-1);return o==="Object"&&y.constructor&&(o=y.constructor.name),o==="Map"||o==="Set"?Array.from(y):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(y,T):void 0}}function c(y,T){(T==null||T>y.length)&&(T=y.length);for(var o=0,u=Array(T);o<T;o++)u[o]=y[o];return u}function h(y){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},h(y)}function f(y,T){for(var o=0;o<T.length;o++){var u=T[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(y,d(u.key),u)}}function g(y,T,o){return(T=d(T))in y?Object.defineProperty(y,T,{value:o,enumerable:!0,configurable:!0,writable:!0}):y[T]=o,y}function d(y){var T=(function(o,u){if(h(o)!="object"||!o)return o;var m=o[Symbol.toPrimitive];if(m!==void 0){var v=m.call(o,u);if(h(v)!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)})(y,"string");return h(T)=="symbol"?T:T+""}var _=(function(){return y=function u(m){var v=m.getOptions,p=m.getCaretPosition,E=m.getCaretPositionEnd,w=m.dispatch;(function(C,P){if(!(C instanceof P))throw new TypeError("Cannot call a class as a function")})(this,u),g(this,"getOptions",void 0),g(this,"getCaretPosition",void 0),g(this,"getCaretPositionEnd",void 0),g(this,"dispatch",void 0),g(this,"maxLengthReached",void 0),g(this,"isStandardButton",(function(C){return C&&!(C[0]==="{"&&C[C.length-1]==="}")})),this.getOptions=v,this.getCaretPosition=p,this.getCaretPositionEnd=E,this.dispatch=w,u.bindMethods(u,this)},T=[{key:"getButtonType",value:function(u){return u.includes("{")&&u.includes("}")&&u!=="{//}"?"functionBtn":"standardBtn"}},{key:"getButtonClass",value:function(u){var m=this.getButtonType(u),v=u.replace("{","").replace("}",""),p="";return m!=="standardBtn"&&(p=" hg-button-".concat(v)),"hg-".concat(m).concat(p)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"↑","{arrowleft}":"←","{arrowdown}":"↓","{arrowright}":"→","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{forwarddelete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(u,m){return(m=arguments.length>2&&arguments[2]!==void 0&&arguments[2]?Object.assign({},this.getDefaultDiplay(),m):m||this.getDefaultDiplay())[u]||u}},{key:"getUpdatedInput",value:function(u,m,v){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:v,E=arguments.length>4&&arguments[4]!==void 0&&arguments[4],w=this.getOptions(),C=[v,p,E],P=m;return(u==="{bksp}"||u==="{backspace}")&&P.length>0?P=this.removeAt.apply(this,[P].concat(C)):(u==="{delete}"||u==="{forwarddelete}")&&P.length>0?P=this.removeForwardsAt.apply(this,[P].concat(C)):u==="{space}"?P=this.addStringAt.apply(this,[P," "].concat(C)):u!=="{tab}"||typeof w.tabCharOnTab=="boolean"&&w.tabCharOnTab===!1?u!=="{enter}"&&u!=="{numpadenter}"||!w.newLineOnEnter?u.includes("numpad")&&Number.isInteger(Number(u[u.length-2]))?P=this.addStringAt.apply(this,[P,u[u.length-2]].concat(C)):u==="{numpaddivide}"?P=this.addStringAt.apply(this,[P,"/"].concat(C)):u==="{numpadmultiply}"?P=this.addStringAt.apply(this,[P,"*"].concat(C)):u==="{numpadsubtract}"?P=this.addStringAt.apply(this,[P,"-"].concat(C)):u==="{numpadadd}"?P=this.addStringAt.apply(this,[P,"+"].concat(C)):u==="{numpaddecimal}"?P=this.addStringAt.apply(this,[P,"."].concat(C)):u==="{"||u==="}"?P=this.addStringAt.apply(this,[P,u].concat(C)):u.includes("{")||u.includes("}")||(P=this.addStringAt.apply(this,[P,u].concat(C))):P=this.addStringAt.apply(this,[P,`
`].concat(C)):P=this.addStringAt.apply(this,[P,"	"].concat(C)),w.debug&&console.log("Input will be: "+P),P}},{key:"updateCaretPos",value:function(u){var m=arguments.length>1&&arguments[1]!==void 0&&arguments[1],v=this.updateCaretPosAction(u,m);this.dispatch((function(p){p.setCaretPosition(v)}))}},{key:"updateCaretPosAction",value:function(u){var m=arguments.length>1&&arguments[1]!==void 0&&arguments[1],v=this.getOptions(),p=this.getCaretPosition();return p!=null&&(m?p>0&&(p-=u):p+=u),v.debug&&console.log("Caret at:",p),p}},{key:"addStringAt",value:function(u,m){var v,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:u.length,E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:u.length,w=arguments.length>4&&arguments[4]!==void 0&&arguments[4];return p||p===0?(v=[u.slice(0,p),m,u.slice(E)].join(""),this.isMaxLengthReached()||w&&this.updateCaretPos(m.length)):v=u+m,v}},{key:"removeAt",value:function(u){var m,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u.length,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:u.length,E=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(v===0&&p===0)return u;if(v===p){var w=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;v&&v>=0?u.substring(v-2,v).match(w)?(m=u.substr(0,v-2)+u.substr(v),E&&this.updateCaretPos(2,!0)):(m=u.substr(0,v-1)+u.substr(v),E&&this.updateCaretPos(1,!0)):u.slice(-2).match(w)?(m=u.slice(0,-2),E&&this.updateCaretPos(2,!0)):(m=u.slice(0,-1),E&&this.updateCaretPos(1,!0))}else m=u.slice(0,v)+u.slice(p),E&&this.dispatch((function(C){C.setCaretPosition(v)}));return m}},{key:"removeForwardsAt",value:function(u){var m,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u.length,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:u.length,E=arguments.length>3&&arguments[3]!==void 0&&arguments[3];return u!=null&&u.length&&v!==null?(v===p?m=u.substring(v,v+2).match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g)?u.substr(0,v)+u.substr(v+2):u.substr(0,v)+u.substr(v+1):(m=u.slice(0,v)+u.slice(p),E&&this.dispatch((function(w){w.setCaretPosition(v)}))),m):u}},{key:"handleMaxLength",value:function(u,m){var v=this.getOptions(),p=v.maxLength,E=u[v.inputName||"default"],w=m.length-1>=p;if(m.length<=E.length)return!1;if(Number.isInteger(p))return v.debug&&console.log("maxLength (num) reached:",w),w?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if(h(p)==="object"){var C=m.length-1>=p[v.inputName||"default"];return v.debug&&console.log("maxLength (obj) reached:",C),C?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return!!this.maxLengthReached}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return!!window.PointerEvent}},{key:"camelCase",value:function(u){return u?u.toLowerCase().trim().split(/[.\-_\s]/g).reduce((function(m,v){return v.length?m+v[0].toUpperCase()+v.slice(1):m})):""}},{key:"chunkArray",value:function(u,m){return a(Array(Math.ceil(u.length/m))).map((function(v,p){return u.slice(m*p,m+m*p)}))}},{key:"escapeRegex",value:function(u){return u.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}},{key:"getRtlOffset",value:function(u,m){var v=u,p=m.indexOf("‫");return p<u&&p!=-1&&v--,m.indexOf("‬")<u&&p!=-1&&v--,v<0?0:v}}],o=[{key:"bindMethods",value:function(u,m){var v,p=(function(w,C){var P=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!P){if(Array.isArray(w)||(P=l(w))||C){P&&(w=P);var H=0,K=function(){};return{s:K,n:function(){return H>=w.length?{done:!0}:{done:!1,value:w[H++]}},e:function(k){throw k},f:K}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var V,F=!0,G=!1;return{s:function(){P=P.call(w)},n:function(){var k=P.next();return F=k.done,k},e:function(k){G=!0,V=k},f:function(){try{F||P.return==null||P.return()}finally{if(G)throw V}}}})(Object.getOwnPropertyNames(u.prototype));try{for(p.s();!(v=p.n()).done;){var E=v.value;E==="constructor"||E==="bindMethods"||(m[E]=m[E].bind(m))}}catch(w){p.e(w)}finally{p.f()}}}],T&&f(y.prototype,T),o&&f(y,o),Object.defineProperty(y,"prototype",{writable:!1}),y;var y,T,o})();g(_,"noop",(function(){}));var M=_;function R(y){return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},R(y)}function b(y,T){for(var o=0;o<T.length;o++){var u=T[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(y,N(u.key),u)}}function x(y,T,o){return(T=N(T))in y?Object.defineProperty(y,T,{value:o,enumerable:!0,configurable:!0,writable:!0}):y[T]=o,y}function N(y){var T=(function(o,u){if(R(o)!="object"||!o)return o;var m=o[Symbol.toPrimitive];if(m!==void 0){var v=m.call(o,u);if(R(v)!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)})(y,"string");return R(T)=="symbol"?T:T+""}var L=(function(){return y=function u(m){var v=this,p=m.dispatch,E=m.getOptions;(function(w,C){if(!(w instanceof C))throw new TypeError("Cannot call a class as a function")})(this,u),x(this,"getOptions",void 0),x(this,"dispatch",void 0),x(this,"isModifierKey",(function(w){return w.altKey||w.ctrlKey||w.shiftKey||["Tab","CapsLock","Esc","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(w.code||w.key||v.keyCodeToKey(w==null?void 0:w.keyCode))})),this.dispatch=p,this.getOptions=E,M.bindMethods(u,this)},T=[{key:"handleHighlightKeyDown",value:function(u){var m=this.getOptions();m.physicalKeyboardHighlightPreventDefault&&this.isModifierKey(u)&&(u.preventDefault(),u.stopImmediatePropagation());var v=this.getSimpleKeyboardLayoutKey(u);this.dispatch((function(p){var E,w,C=p.getButtonElement(v),P=p.getButtonElement("{".concat(v,"}"));if(C)E=C,w=v;else{if(!P)return;E=P,w="{".concat(v,"}")}var H,K,V,F,G=function(q){q.style.background=m.physicalKeyboardHighlightBgColor||"#dadce4",q.style.color=m.physicalKeyboardHighlightTextColor||"black"};if(E)if(Array.isArray(E)){if(E.forEach((function(q){return G(q)})),m.physicalKeyboardHighlightPress)if(m.physicalKeyboardHighlightPressUsePointerEvents)(H=E[0])===null||H===void 0||(K=H.onpointerdown)===null||K===void 0||K.call(H,u);else if(m.physicalKeyboardHighlightPressUseClick){var k;(k=E[0])===null||k===void 0||k.click()}else p.handleButtonClicked(w,u)}else G(E),m.physicalKeyboardHighlightPress&&(m.physicalKeyboardHighlightPressUsePointerEvents?(V=E)===null||V===void 0||(F=V.onpointerdown)===null||F===void 0||F.call(V,u):m.physicalKeyboardHighlightPressUseClick?E.click():p.handleButtonClicked(w,u))}))}},{key:"handleHighlightKeyUp",value:function(u){var m=this.getOptions();m.physicalKeyboardHighlightPreventDefault&&this.isModifierKey(u)&&(u.preventDefault(),u.stopImmediatePropagation());var v=this.getSimpleKeyboardLayoutKey(u);this.dispatch((function(p){var E,w,C,P=p.getButtonElement(v)||p.getButtonElement("{".concat(v,"}")),H=function(K){K.removeAttribute&&K.removeAttribute("style")};P&&(Array.isArray(P)?(P.forEach((function(K){return H(K)})),m.physicalKeyboardHighlightPressUsePointerEvents&&((E=P[0])===null||E===void 0||(w=E.onpointerup)===null||w===void 0||w.call(E,u))):(H(P),m.physicalKeyboardHighlightPressUsePointerEvents&&(P==null||(C=P.onpointerup)===null||C===void 0||C.call(P,u))))}))}},{key:"getSimpleKeyboardLayoutKey",value:function(u){var m,v="",p=u.code||u.key||this.keyCodeToKey(u==null?void 0:u.keyCode);return(v=p!=null&&p.includes("Numpad")||p!=null&&p.includes("Shift")||p!=null&&p.includes("Space")||p!=null&&p.includes("Backspace")||p!=null&&p.includes("Control")||p!=null&&p.includes("Alt")||p!=null&&p.includes("Meta")?u.code||"":u.key||this.keyCodeToKey(u==null?void 0:u.keyCode)||"").length>1?(m=v)===null||m===void 0?void 0:m.toLowerCase():v}},{key:"keyCodeToKey",value:function(u){return{8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Meta",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9",106:"NumpadMultiply",107:"NumpadAdd",109:"NumpadSubtract",110:"NumpadDecimal",111:"NumpadDivide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}[u]||""}}],T&&b(y.prototype,T),o&&b(y,o),Object.defineProperty(y,"prototype",{writable:!1}),y;var y,T,o})();function D(y){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},D(y)}function J(y,T){for(var o=0;o<T.length;o++){var u=T[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(y,X(u.key),u)}}function O(y,T,o){return(T=X(T))in y?Object.defineProperty(y,T,{value:o,enumerable:!0,configurable:!0,writable:!0}):y[T]=o,y}function X(y){var T=(function(o,u){if(D(o)!="object"||!o)return o;var m=o[Symbol.toPrimitive];if(m!==void 0){var v=m.call(o,u);if(D(v)!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)})(y,"string");return D(T)=="symbol"?T:T+""}var A=(function(){return y=function u(m){var v=m.utilities,p=m.options;(function(E,w){if(!(E instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),O(this,"utilities",void 0),O(this,"options",void 0),O(this,"candidateBoxElement",void 0),O(this,"pageIndex",0),O(this,"pageSize",void 0),this.utilities=v,this.options=p,M.bindMethods(u,this),this.pageSize=this.utilities.getOptions().layoutCandidatesPageSize||5},T=[{key:"destroy",value:function(){this.candidateBoxElement&&(this.candidateBoxElement.remove(),this.pageIndex=0)}},{key:"show",value:function(u){var m=this,v=u.candidateValue,p=u.targetElement,E=u.onSelect;if(v&&v.length){var w=this.utilities.chunkArray(v.split(" "),this.pageSize);this.renderPage({candidateListPages:w,targetElement:p,pageIndex:this.pageIndex,nbPages:w.length,onItemSelected:function(C,P){E(C,P),m.destroy()}})}}},{key:"renderPage",value:function(u){var m,v=this,p=u.candidateListPages,E=u.targetElement,w=u.pageIndex,C=u.nbPages,P=u.onItemSelected;(m=this.candidateBoxElement)===null||m===void 0||m.remove(),this.candidateBoxElement=document.createElement("div"),this.candidateBoxElement.className="hg-candidate-box";var H=document.createElement("ul");H.className="hg-candidate-box-list",p[w].forEach((function(j){var ct,B=document.createElement("li"),ut=function(){var vt=new(v.options.useTouchEvents?TouchEvent:MouseEvent)("click");return Object.defineProperty(vt,"target",{value:B}),vt};B.className="hg-candidate-box-list-item",B.innerHTML=((ct=v.options.display)===null||ct===void 0?void 0:ct[j])||j,v.options.useTouchEvents?B.ontouchstart=function(vt){return P(j,vt||ut())}:B.onclick=function(){var vt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ut();return P(j,vt)},H.appendChild(B)}));var K=w>0,V=document.createElement("div");V.classList.add("hg-candidate-box-prev"),K&&V.classList.add("hg-candidate-box-btn-active");var F=function(){K&&v.renderPage({candidateListPages:p,targetElement:E,pageIndex:w-1,nbPages:C,onItemSelected:P})};this.options.useTouchEvents?V.ontouchstart=F:V.onclick=F,this.candidateBoxElement.appendChild(V),this.candidateBoxElement.appendChild(H);var G=w<C-1,k=document.createElement("div");k.classList.add("hg-candidate-box-next"),G&&k.classList.add("hg-candidate-box-btn-active");var q=function(){G&&v.renderPage({candidateListPages:p,targetElement:E,pageIndex:w+1,nbPages:C,onItemSelected:P})};this.options.useTouchEvents?k.ontouchstart=q:k.onclick=q,this.candidateBoxElement.appendChild(k),E.prepend(this.candidateBoxElement)}}],T&&J(y.prototype,T),o&&J(y,o),Object.defineProperty(y,"prototype",{writable:!1}),y;var y,T,o})(),z=A;function Y(y){return(function(T){if(Array.isArray(T))return W(T)})(y)||(function(T){if(typeof Symbol<"u"&&T[Symbol.iterator]!=null||T["@@iterator"]!=null)return Array.from(T)})(y)||(function(T,o){if(T){if(typeof T=="string")return W(T,o);var u={}.toString.call(T).slice(8,-1);return u==="Object"&&T.constructor&&(u=T.constructor.name),u==="Map"||u==="Set"?Array.from(T):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?W(T,o):void 0}})(y)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function W(y,T){(T==null||T>y.length)&&(T=y.length);for(var o=0,u=Array(T);o<T;o++)u[o]=y[o];return u}function et(y){return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},et(y)}function at(y,T){var o=Object.keys(y);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(y);T&&(u=u.filter((function(m){return Object.getOwnPropertyDescriptor(y,m).enumerable}))),o.push.apply(o,u)}return o}function lt(y,T){for(var o=0;o<T.length;o++){var u=T[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(y,ft(u.key),u)}}function Q(y,T,o){return(T=ft(T))in y?Object.defineProperty(y,T,{value:o,enumerable:!0,configurable:!0,writable:!0}):y[T]=o,y}function ft(y){var T=(function(o,u){if(et(o)!="object"||!o)return o;var m=o[Symbol.toPrimitive];if(m!==void 0){var v=m.call(o,u);if(et(v)!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)})(y,"string");return et(T)=="symbol"?T:T+""}var mt=(function(){return y=function u(m,v){var p=this;if((function(F,G){if(!(F instanceof G))throw new TypeError("Cannot call a class as a function")})(this,u),Q(this,"input",void 0),Q(this,"options",void 0),Q(this,"utilities",void 0),Q(this,"caretPosition",void 0),Q(this,"caretPositionEnd",void 0),Q(this,"keyboardDOM",void 0),Q(this,"keyboardPluginClasses",void 0),Q(this,"keyboardDOMClass",void 0),Q(this,"buttonElements",void 0),Q(this,"currentInstanceName",void 0),Q(this,"allKeyboardInstances",void 0),Q(this,"keyboardInstanceNames",void 0),Q(this,"isFirstKeyboardInstance",void 0),Q(this,"physicalKeyboard",void 0),Q(this,"modules",void 0),Q(this,"activeButtonClass",void 0),Q(this,"holdInteractionTimeout",void 0),Q(this,"holdTimeout",void 0),Q(this,"isMouseHold",void 0),Q(this,"initialized",void 0),Q(this,"candidateBox",void 0),Q(this,"keyboardRowsDOM",void 0),Q(this,"defaultName","default"),Q(this,"activeInputElement",null),Q(this,"handleParams",(function(F,G){var k,q,j;if(typeof F=="string")k=F.split(".").join(""),q=document.querySelector(".".concat(k)),j=G;else if(F instanceof HTMLDivElement){if(!F.className)throw console.warn("Any DOM element passed as parameter must have a class."),new Error("KEYBOARD_DOM_CLASS_ERROR");k=F.className.split(" ")[0],q=F,j=G}else k="simple-keyboard",q=document.querySelector(".".concat(k)),j=F;return{keyboardDOMClass:k,keyboardDOM:q,options:j}})),Q(this,"getOptions",(function(){return p.options})),Q(this,"getCaretPosition",(function(){return p.caretPosition})),Q(this,"getCaretPositionEnd",(function(){return p.caretPositionEnd})),Q(this,"registerModule",(function(F,G){p.modules[F]||(p.modules[F]={}),G(p.modules[F])})),Q(this,"getKeyboardClassString",(function(){for(var F=arguments.length,G=new Array(F),k=0;k<F;k++)G[k]=arguments[k];return[p.keyboardDOMClass].concat(G).filter((function(q){return!!q})).join(" ")})),typeof window<"u"){var E=this.handleParams(m,v),w=E.keyboardDOMClass,C=E.keyboardDOM,P=E.options,H=P===void 0?{}:P;this.utilities=new M({getOptions:this.getOptions,getCaretPosition:this.getCaretPosition,getCaretPositionEnd:this.getCaretPositionEnd,dispatch:this.dispatch}),this.caretPosition=null,this.caretPositionEnd=null,this.keyboardDOM=C,this.options=(function(F){for(var G=1;G<arguments.length;G++){var k=arguments[G]!=null?arguments[G]:{};G%2?at(Object(k),!0).forEach((function(q){Q(F,q,k[q])})):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(k)):at(Object(k)).forEach((function(q){Object.defineProperty(F,q,Object.getOwnPropertyDescriptor(k,q))}))}return F})({layoutName:"default",theme:"hg-theme-default",inputName:"default",preventMouseDownDefault:!1,enableLayoutCandidates:!0,excludeFromLayout:{}},H),this.keyboardPluginClasses="",M.bindMethods(u,this);var K=this.options.inputName,V=K===void 0?this.defaultName:K;if(this.input={},this.input[V]="",this.keyboardDOMClass=w,this.buttonElements={},window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),this.currentInstanceName=this.utilities.camelCase(this.keyboardDOMClass),window.SimpleKeyboardInstances[this.currentInstanceName]=this,this.allKeyboardInstances=window.SimpleKeyboardInstances,this.keyboardInstanceNames=Object.keys(window.SimpleKeyboardInstances),this.isFirstKeyboardInstance=this.keyboardInstanceNames[0]===this.currentInstanceName,this.physicalKeyboard=new L({dispatch:this.dispatch,getOptions:this.getOptions}),this.candidateBox=this.options.enableLayoutCandidates?new z({utilities:this.utilities,options:this.options}):null,!this.keyboardDOM)throw console.warn('".'.concat(w,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),this.modules={},this.loadModules()}},T=[{key:"setCaretPosition",value:function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u;this.caretPosition=u,this.caretPositionEnd=m}},{key:"getInputCandidates",value:function(u){var m=this,v=this.options,p=v.layoutCandidates,E=v.layoutCandidatesCaseSensitiveMatch;if(!p||et(p)!=="object")return{};var w=Object.keys(p).filter((function(H){var K=u.substring(0,m.getCaretPositionEnd()||0)||u,V=new RegExp("".concat(m.utilities.escapeRegex(H),"$"),E?"g":"gi");return!!Y(K.matchAll(V)).length}));if(w.length>1){var C=w.sort((function(H,K){return K.length-H.length}))[0];return{candidateKey:C,candidateValue:p[C]}}if(w.length){var P=w[0];return{candidateKey:P,candidateValue:p[P]}}return{}}},{key:"showCandidatesBox",value:function(u,m,v){var p=this;this.candidateBox&&this.candidateBox.show({candidateValue:m,targetElement:v,onSelect:function(E,w){var C=p.options,P=C.layoutCandidatesCaseSensitiveMatch,H=C.disableCandidateNormalization,K=C.enableLayoutCandidatesKeyPress,V=E;H||(V=E.normalize("NFD")),typeof p.options.beforeInputUpdate=="function"&&p.options.beforeInputUpdate(p);var F=p.getInput(p.options.inputName,!0),G=p.getCaretPositionEnd()||0,k=F.substring(0,G||0)||F,q=new RegExp("".concat(p.utilities.escapeRegex(u),"$"),P?"g":"gi"),j=k.replace(q,V),ct=F.replace(k,j),B=j.length-k.length,ut=(G||F.length)+B;ut<0&&(ut=0),p.setInput(ct,p.options.inputName,!0),p.setCaretPosition(ut),K&&typeof p.options.onKeyPress=="function"&&p.options.onKeyPress(E,w),typeof p.options.onChange=="function"&&p.options.onChange(p.getInput(p.options.inputName,!0),w),typeof p.options.onChangeAll=="function"&&p.options.onChangeAll(p.getAllInputs(),w)}})}},{key:"handleButtonClicked",value:function(u,m){var v=this.options,p=v.inputName,E=p===void 0?this.defaultName:p,w=v.debug;if(u!=="{//}"){this.input[E]||(this.input[E]=""),typeof this.options.beforeInputUpdate=="function"&&this.options.beforeInputUpdate(this);var C=this.utilities.getUpdatedInput(u,this.input[E],this.caretPosition,this.caretPositionEnd);if(this.utilities.isStandardButton(u)&&this.activeInputElement&&this.input[E]&&this.input[E]===C&&this.caretPosition===0&&this.caretPositionEnd===C.length)return this.setInput("",this.options.inputName,!0),this.setCaretPosition(0),this.activeInputElement.value="",this.activeInputElement.setSelectionRange(0,0),void this.handleButtonClicked(u,m);if(typeof this.options.onKeyPress=="function"&&this.options.onKeyPress(u,m),this.input[E]!==C&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(C))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,C))return;var P=this.utilities.getUpdatedInput(u,this.input[E],this.caretPosition,this.caretPositionEnd,!0);if(this.setInput(P,this.options.inputName,!0),w&&console.log("Input changed:",this.getAllInputs()),this.options.debug&&console.log("Caret at: ",this.getCaretPosition(),this.getCaretPositionEnd(),"(".concat(this.keyboardDOMClass,")"),m==null?void 0:m.type),this.options.syncInstanceInputs&&this.syncInstanceInputs(),typeof this.options.onChange=="function"&&this.options.onChange(this.getInput(this.options.inputName,!0),m),typeof this.options.onChangeAll=="function"&&this.options.onChangeAll(this.getAllInputs(),m),m!=null&&m.target&&this.options.enableLayoutCandidates){var H,K=this.getInputCandidates(C),V=K.candidateKey,F=K.candidateValue;V&&F?this.showCandidatesBox(V,F,this.keyboardDOM):(H=this.candidateBox)===null||H===void 0||H.destroy()}}this.caretPositionEnd&&this.caretPosition!==this.caretPositionEnd&&(this.setCaretPosition(this.caretPositionEnd,this.caretPositionEnd),this.activeInputElement&&this.activeInputElement.setSelectionRange(this.caretPositionEnd,this.caretPositionEnd),this.options.debug&&console.log("Caret position aligned",this.caretPosition)),w&&console.log("Key pressed:",u)}}},{key:"getMouseHold",value:function(){return this.isMouseHold}},{key:"setMouseHold",value:function(u){this.options.syncInstanceInputs?this.dispatch((function(m){m.isMouseHold=u})):this.isMouseHold=u}},{key:"handleButtonMouseDown",value:function(u,m){var v=this;m&&(this.options.preventMouseDownDefault&&m.preventDefault(),this.options.stopMouseDownPropagation&&m.stopPropagation(),m.target.classList.add(this.activeButtonClass)),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.setMouseHold(!0),this.options.disableButtonHold||(this.holdTimeout=window.setTimeout((function(){(v.getMouseHold()&&(!u.includes("{")&&!u.includes("}")||u==="{delete}"||u==="{backspace}"||u==="{bksp}"||u==="{space}"||u==="{tab}")||u==="{arrowright}"||u==="{arrowleft}"||u==="{arrowup}"||u==="{arrowdown}")&&(v.options.debug&&console.log("Button held:",u),v.handleButtonHold(u)),clearTimeout(v.holdTimeout)}),500))}},{key:"handleButtonMouseUp",value:function(u,m){var v=this;m&&(this.options.preventMouseUpDefault&&m.preventDefault&&m.preventDefault(),this.options.stopMouseUpPropagation&&m.stopPropagation&&m.stopPropagation(),!(m.target===this.keyboardDOM||m.target&&this.keyboardDOM.contains(m.target)||this.candidateBox&&this.candidateBox.candidateBoxElement&&(m.target===this.candidateBox.candidateBoxElement||m.target&&this.candidateBox.candidateBoxElement.contains(m.target)))&&this.candidateBox&&this.candidateBox.destroy()),this.recurseButtons((function(p){p.classList.remove(v.activeButtonClass)})),this.setMouseHold(!1),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),u&&typeof this.options.onKeyReleased=="function"&&this.options.onKeyReleased(u,m)}},{key:"handleKeyboardContainerMouseDown",value:function(u){this.options.preventMouseDownDefault&&u.preventDefault()}},{key:"handleButtonHold",value:function(u){var m=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=window.setTimeout((function(){m.getMouseHold()?(m.handleButtonClicked(u),m.handleButtonHold(u)):clearTimeout(m.holdInteractionTimeout)}),100)}},{key:"syncInstanceInputs",value:function(){var u=this;this.dispatch((function(m){m.replaceInput(u.input),m.setCaretPosition(u.caretPosition,u.caretPositionEnd)}))}},{key:"clearInput",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.inputName||this.defaultName;this.input[u]="",this.setCaretPosition(0),this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"getInput",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.inputName||this.defaultName,m=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return this.options.syncInstanceInputs&&!m&&this.syncInstanceInputs(),this.options.rtl?"‫"+this.input[u].replace("‫","").replace("‬","")+"‬":this.input[u]}},{key:"getAllInputs",value:function(){var u=this,m={};return Object.keys(this.input).forEach((function(v){m[v]=u.getInput(v,!0)})),m}},{key:"setInput",value:function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.inputName||this.defaultName,v=arguments.length>2?arguments[2]:void 0;this.input[m]=u,!v&&this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"replaceInput",value:function(u){this.input=u}},{key:"setOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=this.changedOptions(u);this.options=Object.assign(this.options,u),m.length&&(this.options.debug&&console.log("changedOptions",m),this.onSetOptions(m),this.render())}},{key:"changedOptions",value:function(u){var m=this;return Object.keys(u).filter((function(v){return JSON.stringify(u[v])!==JSON.stringify(m.options[v])}))}},{key:"onSetOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];u.includes("layoutName")&&this.candidateBox&&this.candidateBox.destroy(),(u.includes("layoutCandidatesPageSize")||u.includes("layoutCandidates"))&&this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=new z({utilities:this.utilities,options:this.options}))}},{key:"resetRows",value:function(){this.keyboardRowsDOM&&this.keyboardRowsDOM.remove(),this.keyboardDOM.className=this.keyboardDOMClass,this.keyboardDOM.setAttribute("data-skInstance",this.currentInstanceName),this.buttonElements={}}},{key:"dispatch",value:function(u){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach((function(m){u(window.SimpleKeyboardInstances[m],m)}))}},{key:"addButtonTheme",value:function(u,m){var v=this;m&&u&&(u.split(" ").forEach((function(p){m.split(" ").forEach((function(E){v.options.buttonTheme||(v.options.buttonTheme=[]);var w=!1;v.options.buttonTheme.map((function(C){if(C!=null&&C.class.split(" ").includes(E)){w=!0;var P=C.buttons.split(" ");P.includes(p)||(w=!0,P.push(p),C.buttons=P.join(" "))}return C})),w||v.options.buttonTheme.push({class:E,buttons:u})}))})),this.render())}},{key:"removeButtonTheme",value:function(u,m){var v=this;if(!u&&!m)return this.options.buttonTheme=[],void this.render();u&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(u.split(" ").forEach((function(p){var E;(E=v.options)===null||E===void 0||(E=E.buttonTheme)===null||E===void 0||E.map((function(w,C){if(w&&m&&m.includes(w.class)||!m){var P,H,K=(P=w)===null||P===void 0?void 0:P.buttons.split(" ").filter((function(V){return V!==p}));w&&K!=null&&K.length?w.buttons=K.join(" "):((H=v.options.buttonTheme)===null||H===void 0||H.splice(C,1),w=null)}return w}))})),this.render())}},{key:"getButtonElement",value:function(u){var m,v=this.buttonElements[u];return v&&(m=v.length>1?v:v[0]),m}},{key:"inputPatternIsValid",value:function(u){var m,v=this.options.inputPattern;if((m=v instanceof RegExp?v:v[this.options.inputName||this.defaultName])&&u){var p=m.test(u);return this.options.debug&&console.log('inputPattern ("'.concat(m,'"): ').concat(p?"passed":"did not pass!")),p}return!0}},{key:"setEventListeners",value:function(){if(this.isFirstKeyboardInstance||!this.allKeyboardInstances){this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")"));var u=this.options.physicalKeyboardHighlightPreventDefault,m=u!==void 0&&u;document.addEventListener("keyup",this.handleKeyUp,m),document.addEventListener("keydown",this.handleKeyDown,m),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleTouchEnd),this.options.updateCaretOnSelectionChange&&document.addEventListener("selectionchange",this.handleSelectionChange),document.addEventListener("select",this.handleSelect)}}},{key:"handleKeyUp",value:function(u){this.caretEventHandler(u),this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyUp(u)}},{key:"handleKeyDown",value:function(u){this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyDown(u)}},{key:"handleMouseUp",value:function(u){this.caretEventHandler(u)}},{key:"handleTouchEnd",value:function(u){this.caretEventHandler(u)}},{key:"handleSelect",value:function(u){this.caretEventHandler(u)}},{key:"handleSelectionChange",value:function(u){navigator.userAgent.includes("Firefox")||this.caretEventHandler(u)}},{key:"caretEventHandler",value:function(u){var m,v=this;u.target.tagName&&(m=u.target.tagName.toLowerCase()),this.dispatch((function(p){var E=u.target===p.keyboardDOM||u.target&&p.keyboardDOM.contains(u.target);if(v.options.syncInstanceInputs&&Array.isArray(u.path)&&(E=u.path.some((function(P){var H;return P==null||(H=P.hasAttribute)===null||H===void 0?void 0:H.call(P,"data-skInstance")}))),(m==="textarea"||m==="input"&&["text","search","url","tel","password"].includes(u.target.type))&&!p.options.disableCaretPositioning){var w=u.target.selectionStart,C=u.target.selectionEnd;p.options.rtl&&(w=p.utilities.getRtlOffset(w,p.getInput()),C=p.utilities.getRtlOffset(C,p.getInput())),p.setCaretPosition(w,C),p.activeInputElement=u.target,p.options.debug&&console.log("Caret at: ",p.getCaretPosition(),p.getCaretPositionEnd(),u&&u.target.tagName.toLowerCase(),"(".concat(p.keyboardDOMClass,")"),u==null?void 0:u.type)}else!p.options.disableCaretPositioning&&E||(u==null?void 0:u.type)==="selectionchange"||(p.setCaretPosition(null),p.activeInputElement=null,p.options.debug&&console.log('Caret position reset due to "'.concat(u==null?void 0:u.type,'" event'),u))}))}},{key:"recurseButtons",value:function(u){var m=this;u&&Object.keys(this.buttonElements).forEach((function(v){return m.buttonElements[v].forEach(u)}))}},{key:"destroy",value:function(){this.options.debug&&console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName));var u=this.options.physicalKeyboardHighlightPreventDefault,m=u!==void 0&&u;document.removeEventListener("keyup",this.handleKeyUp,m),document.removeEventListener("keydown",this.handleKeyDown,m),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleTouchEnd),document.removeEventListener("select",this.handleSelect),this.options.updateCaretOnSelectionChange&&document.removeEventListener("selectionchange",this.handleSelectionChange),document.onpointerup=null,document.ontouchend=null,document.ontouchcancel=null,document.onmouseup=null,this.recurseButtons((function(v){v&&(v.onpointerdown=null,v.onpointerup=null,v.onpointercancel=null,v.ontouchstart=null,v.ontouchend=null,v.ontouchcancel=null,v.onclick=null,v.onmousedown=null,v.onmouseup=null,v.remove(),v=null)})),this.keyboardDOM.onpointerdown=null,this.keyboardDOM.ontouchstart=null,this.keyboardDOM.onmousedown=null,this.resetRows(),this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=null),this.activeInputElement=null,this.keyboardDOM.removeAttribute("data-skInstance"),this.keyboardDOM.innerHTML="",window.SimpleKeyboardInstances[this.currentInstanceName]=null,delete window.SimpleKeyboardInstances[this.currentInstanceName],this.initialized=!1}},{key:"getButtonThemeClasses",value:function(u){var m=this.options.buttonTheme,v=[];return Array.isArray(m)&&m.forEach((function(p){if(p&&p.class&&typeof p.class=="string"&&p.buttons&&typeof p.buttons=="string"){var E=p.class.split(" ");p.buttons.split(" ").includes(u)&&(v=[].concat(Y(v),Y(E)))}else console.warn('Incorrect "buttonTheme". Please check the documentation.',p)})),v}},{key:"setDOMButtonAttributes",value:function(u,m){var v=this.options.buttonAttributes;Array.isArray(v)&&v.forEach((function(p){p.attribute&&typeof p.attribute=="string"&&p.value&&typeof p.value=="string"&&p.buttons&&typeof p.buttons=="string"?p.buttons.split(" ").includes(u)&&m(p.attribute,p.value):console.warn('Incorrect "buttonAttributes". Please check the documentation.',p)}))}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(u){if(u.target.classList.contains("hg-button"))return u.preventDefault(),u.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.setEventListeners(),typeof this.options.onInit=="function"&&this.options.onInit(this)}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),typeof this.options.beforeFirstRender=="function"&&this.options.beforeFirstRender(this),this.isFirstKeyboardInstance&&this.utilities.pointerEventsSupported()&&!this.options.useTouchEvents&&!this.options.useMouseEvents&&this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){typeof this.options.beforeRender=="function"&&this.options.beforeRender(this)}},{key:"onRender",value:function(){typeof this.options.onRender=="function"&&this.options.onRender(this)}},{key:"onModulesLoaded",value:function(){typeof this.options.onModulesLoaded=="function"&&this.options.onModulesLoaded(this)}},{key:"loadModules",value:function(){var u=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach((function(m){var v=new m(u);v.init&&v.init(u)})),this.keyboardPluginClasses="modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(u,m){return!!this.modules[u]&&this.modules[u][m]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(u,m,v,p){var E=this,w=Array.from(u.children),C=0;return w.length&&v.forEach((function(P,H){var K=p[H];if(!(K&&K>P))return!1;var V=P-C,F=K-C,G=document.createElement("div");G.className+="hg-button-container";var k="".concat(E.options.layoutName,"-r").concat(m,"c").concat(H);G.setAttribute("data-skUID",k);var q=w.splice(V,F-V+1);C=F-V,q.forEach((function(j){return G.appendChild(j)})),w.splice(V,0,G),u.innerHTML="",w.forEach((function(j){return u.appendChild(j)})),E.options.debug&&console.log("rowDOMContainer",q,V,F,C+1)})),u}},{key:"render",value:function(){var u=this;this.resetRows(),this.initialized||this.beforeFirstRender(),this.beforeRender();var m="hg-layout-".concat(this.options.layoutName),v=this.options.layout||{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},p=this.options.useTouchEvents||!1,E=p?"hg-touch-events":"",w=this.options.useMouseEvents||!1,C=this.options.disableRowButtonContainers;this.keyboardDOM.className=this.getKeyboardClassString(this.options.theme,m,this.keyboardPluginClasses,E),this.keyboardDOM.setAttribute("data-skInstance",this.currentInstanceName),this.keyboardRowsDOM=document.createElement("div"),this.keyboardRowsDOM.className="hg-rows",v[this.options.layoutName||this.defaultName].forEach((function(P,H){var K=P.split(" ");u.options.excludeFromLayout&&u.options.excludeFromLayout[u.options.layoutName||u.defaultName]&&(K=K.filter((function(k){return u.options.excludeFromLayout&&!u.options.excludeFromLayout[u.options.layoutName||u.defaultName].includes(k)})));var V=document.createElement("div");V.className+="hg-row";var F=[],G=[];K.forEach((function(k,q){var j,ct=!C&&typeof k=="string"&&k.length>1&&k.indexOf("[")===0,B=!C&&typeof k=="string"&&k.length>1&&k.indexOf("]")===k.length-1;ct&&(F.push(q),k=k.replace(/\[/g,"")),B&&(G.push(q),k=k.replace(/\]/g,""));var ut=u.utilities.getButtonClass(k),vt=u.utilities.getButtonDisplayName(k,u.options.display,u.options.mergeDisplay),_t=u.options.useButtonTag?"button":"div",it=document.createElement(_t);it.className+="hg-button ".concat(ut),(j=it.classList).add.apply(j,Y(u.getButtonThemeClasses(k))),u.setDOMButtonAttributes(k,(function(S,tt){it.setAttribute(S,tt)})),u.activeButtonClass="hg-activeButton",!u.utilities.pointerEventsSupported()||p||w?p?(it.ontouchstart=function(S){u.handleButtonClicked(k,S),u.handleButtonMouseDown(k,S)},it.ontouchend=function(S){u.handleButtonMouseUp(k,S)},it.ontouchcancel=function(S){u.handleButtonMouseUp(k,S)}):(it.onclick=function(S){u.setMouseHold(!1),typeof u.options.onKeyReleased=="function"||u.options.useMouseEvents&&u.options.clickOnMouseDown||u.handleButtonClicked(k,S)},it.onmousedown=function(S){(typeof u.options.onKeyReleased=="function"||u.options.useMouseEvents&&u.options.clickOnMouseDown)&&!u.isMouseHold&&u.handleButtonClicked(k,S),u.handleButtonMouseDown(k,S)},it.onmouseup=function(S){u.handleButtonMouseUp(k,S)}):(it.onpointerdown=function(S){u.handleButtonClicked(k,S),u.handleButtonMouseDown(k,S)},it.onpointerup=function(S){u.handleButtonMouseUp(k,S)},it.onpointercancel=function(S){u.handleButtonMouseUp(k,S)}),it.setAttribute("data-skBtn",k);var Tt="".concat(u.options.layoutName,"-r").concat(H,"b").concat(q);it.setAttribute("data-skBtnUID",Tt);var I=document.createElement("span");I.innerHTML=vt,it.appendChild(I),u.buttonElements[k]||(u.buttonElements[k]=[]),u.buttonElements[k].push(it),V.appendChild(it)})),V=u.parseRowDOMContainers(V,H,F,G),u.keyboardRowsDOM.appendChild(V)})),this.keyboardDOM.appendChild(this.keyboardRowsDOM),this.onRender(),this.initialized||(this.initialized=!0,!this.utilities.pointerEventsSupported()||p||w?p?(document.ontouchend=function(P){return u.handleButtonMouseUp(void 0,P)},document.ontouchcancel=function(P){return u.handleButtonMouseUp(void 0,P)},this.keyboardDOM.ontouchstart=function(P){return u.handleKeyboardContainerMouseDown(P)}):p||(document.onmouseup=function(P){return u.handleButtonMouseUp(void 0,P)},this.keyboardDOM.onmousedown=function(P){return u.handleKeyboardContainerMouseDown(P)}):(document.onpointerup=function(P){return u.handleButtonMouseUp(void 0,P)},this.keyboardDOM.onpointerdown=function(P){return u.handleKeyboardContainerMouseDown(P)}),this.onInit())}}],T&&lt(y.prototype,T),o&&lt(y,o),Object.defineProperty(y,"prototype",{writable:!1}),y;var y,T,o})(),Ct=mt,Nt=Ct;return s})()}))})(bs)),bs.exports}var Vv=Hv();const Gv=hh(Vv);var Ji={},wa,kc;function Wv(){return kc||(kc=1,wa=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),wa}var Ta={},ai={},zc;function Ri(){if(zc)return ai;zc=1;let i;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ai.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},ai.getSymbolTotalCodewords=function(n){return t[n]},ai.getBCHDigit=function(e){let n=0;for(;e!==0;)n++,e>>>=1;return n},ai.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');i=n},ai.isKanjiModeEnabled=function(){return typeof i<"u"},ai.toSJIS=function(n){return i(n)},ai}var Aa={},Hc;function cl(){return Hc||(Hc=1,(function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function t(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+e)}}i.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},i.from=function(n,r){if(i.isValid(n))return n;try{return t(n)}catch{return r}}})(Aa)),Aa}var Ca,Vc;function Xv(){if(Vc)return Ca;Vc=1;function i(){this.buffer=[],this.length=0}return i.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},Ca=i,Ca}var Ra,Gc;function qv(){if(Gc)return Ra;Gc=1;function i(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return i.prototype.set=function(t,e,n,r){const s=t*this.size+e;this.data[s]=n,r&&(this.reservedBit[s]=!0)},i.prototype.get=function(t,e){return this.data[t*this.size+e]},i.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},i.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},Ra=i,Ra}var Pa={},Wc;function Yv(){return Wc||(Wc=1,(function(i){const t=Ri().getSymbolSize;i.getRowColCoords=function(n){if(n===1)return[];const r=Math.floor(n/7)+2,s=t(n),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,l=[s-7];for(let c=1;c<r-1;c++)l[c]=l[c-1]-a;return l.push(6),l.reverse()},i.getPositions=function(n){const r=[],s=i.getRowColCoords(n),a=s.length;for(let l=0;l<a;l++)for(let c=0;c<a;c++)l===0&&c===0||l===0&&c===a-1||l===a-1&&c===0||r.push([s[l],s[c]]);return r}})(Pa)),Pa}var Ia={},Xc;function jv(){if(Xc)return Ia;Xc=1;const i=Ri().getSymbolSize,t=7;return Ia.getPositions=function(n){const r=i(n);return[[0,0],[r-t,0],[0,r-t]]},Ia}var La={},qc;function $v(){return qc||(qc=1,(function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};i.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},i.from=function(r){return i.isValid(r)?parseInt(r,10):void 0},i.getPenaltyN1=function(r){const s=r.size;let a=0,l=0,c=0,h=null,f=null;for(let g=0;g<s;g++){l=c=0,h=f=null;for(let d=0;d<s;d++){let _=r.get(g,d);_===h?l++:(l>=5&&(a+=t.N1+(l-5)),h=_,l=1),_=r.get(d,g),_===f?c++:(c>=5&&(a+=t.N1+(c-5)),f=_,c=1)}l>=5&&(a+=t.N1+(l-5)),c>=5&&(a+=t.N1+(c-5))}return a},i.getPenaltyN2=function(r){const s=r.size;let a=0;for(let l=0;l<s-1;l++)for(let c=0;c<s-1;c++){const h=r.get(l,c)+r.get(l,c+1)+r.get(l+1,c)+r.get(l+1,c+1);(h===4||h===0)&&a++}return a*t.N2},i.getPenaltyN3=function(r){const s=r.size;let a=0,l=0,c=0;for(let h=0;h<s;h++){l=c=0;for(let f=0;f<s;f++)l=l<<1&2047|r.get(h,f),f>=10&&(l===1488||l===93)&&a++,c=c<<1&2047|r.get(f,h),f>=10&&(c===1488||c===93)&&a++}return a*t.N3},i.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let c=0;c<a;c++)s+=r.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*t.N4};function e(n,r,s){switch(n){case i.Patterns.PATTERN000:return(r+s)%2===0;case i.Patterns.PATTERN001:return r%2===0;case i.Patterns.PATTERN010:return s%3===0;case i.Patterns.PATTERN011:return(r+s)%3===0;case i.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case i.Patterns.PATTERN101:return r*s%2+r*s%3===0;case i.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case i.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}i.applyMask=function(r,s){const a=s.size;for(let l=0;l<a;l++)for(let c=0;c<a;c++)s.isReserved(c,l)||s.xor(c,l,e(r,c,l))},i.getBestMask=function(r,s){const a=Object.keys(i.Patterns).length;let l=0,c=1/0;for(let h=0;h<a;h++){s(h),i.applyMask(h,r);const f=i.getPenaltyN1(r)+i.getPenaltyN2(r)+i.getPenaltyN3(r)+i.getPenaltyN4(r);i.applyMask(h,r),f<c&&(c=f,l=h)}return l}})(La)),La}var ms={},Yc;function fh(){if(Yc)return ms;Yc=1;const i=cl(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ms.getBlocksCount=function(r,s){switch(s){case i.L:return t[(r-1)*4+0];case i.M:return t[(r-1)*4+1];case i.Q:return t[(r-1)*4+2];case i.H:return t[(r-1)*4+3];default:return}},ms.getTotalCodewordsCount=function(r,s){switch(s){case i.L:return e[(r-1)*4+0];case i.M:return e[(r-1)*4+1];case i.Q:return e[(r-1)*4+2];case i.H:return e[(r-1)*4+3];default:return}},ms}var Da={},gr={},jc;function Kv(){if(jc)return gr;jc=1;const i=new Uint8Array(512),t=new Uint8Array(256);return(function(){let n=1;for(let r=0;r<255;r++)i[r]=n,t[n]=r,n<<=1,n&256&&(n^=285);for(let r=255;r<512;r++)i[r]=i[r-255]})(),gr.log=function(n){if(n<1)throw new Error("log("+n+")");return t[n]},gr.exp=function(n){return i[n]},gr.mul=function(n,r){return n===0||r===0?0:i[t[n]+t[r]]},gr}var $c;function Jv(){return $c||($c=1,(function(i){const t=Kv();i.mul=function(n,r){const s=new Uint8Array(n.length+r.length-1);for(let a=0;a<n.length;a++)for(let l=0;l<r.length;l++)s[a+l]^=t.mul(n[a],r[l]);return s},i.mod=function(n,r){let s=new Uint8Array(n);for(;s.length-r.length>=0;){const a=s[0];for(let c=0;c<r.length;c++)s[c]^=t.mul(r[c],a);let l=0;for(;l<s.length&&s[l]===0;)l++;s=s.slice(l)}return s},i.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let s=0;s<n;s++)r=i.mul(r,new Uint8Array([1,t.exp(s)]));return r}})(Da)),Da}var Na,Kc;function Zv(){if(Kc)return Na;Kc=1;const i=Jv();function t(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(n){this.degree=n,this.genPoly=i.generateECPolynomial(this.degree)},t.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(n.length+this.degree);r.set(n);const s=i.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const l=new Uint8Array(this.degree);return l.set(s,a),l}return s},Na=t,Na}var Ua={},Oa={},Fa={},Jc;function dh(){return Jc||(Jc=1,Fa.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),Fa}var wn={},Zc;function ph(){if(Zc)return wn;Zc=1;const i="[0-9]+",t="[A-Z $%*+\\-./:]+";let e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";e=e.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+e+`)(?:.|[\r
]))+`;wn.KANJI=new RegExp(e,"g"),wn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),wn.BYTE=new RegExp(n,"g"),wn.NUMERIC=new RegExp(i,"g"),wn.ALPHANUMERIC=new RegExp(t,"g");const r=new RegExp("^"+e+"$"),s=new RegExp("^"+i+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return wn.testKanji=function(c){return r.test(c)},wn.testNumeric=function(c){return s.test(c)},wn.testAlphanumeric=function(c){return a.test(c)},wn}var Qc;function Pi(){return Qc||(Qc=1,(function(i){const t=dh(),e=ph();i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},i.getBestModeForData=function(s){return e.testNumeric(s)?i.NUMERIC:e.testAlphanumeric(s)?i.ALPHANUMERIC:e.testKanji(s)?i.KANJI:i.BYTE},i.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},i.isValid=function(s){return s&&s.bit&&s.ccBits};function n(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+r)}}i.from=function(s,a){if(i.isValid(s))return s;try{return n(s)}catch{return a}}})(Oa)),Oa}var tu;function Qv(){return tu||(tu=1,(function(i){const t=Ri(),e=fh(),n=cl(),r=Pi(),s=dh(),a=7973,l=t.getBCHDigit(a);function c(d,_,M){for(let R=1;R<=40;R++)if(_<=i.getCapacity(R,M,d))return R}function h(d,_){return r.getCharCountIndicator(d,_)+4}function f(d,_){let M=0;return d.forEach(function(R){const b=h(R.mode,_);M+=b+R.getBitsLength()}),M}function g(d,_){for(let M=1;M<=40;M++)if(f(d,M)<=i.getCapacity(M,_,r.MIXED))return M}i.from=function(_,M){return s.isValid(_)?parseInt(_,10):M},i.getCapacity=function(_,M,R){if(!s.isValid(_))throw new Error("Invalid QR Code version");typeof R>"u"&&(R=r.BYTE);const b=t.getSymbolTotalCodewords(_),x=e.getTotalCodewordsCount(_,M),N=(b-x)*8;if(R===r.MIXED)return N;const L=N-h(R,_);switch(R){case r.NUMERIC:return Math.floor(L/10*3);case r.ALPHANUMERIC:return Math.floor(L/11*2);case r.KANJI:return Math.floor(L/13);case r.BYTE:default:return Math.floor(L/8)}},i.getBestVersionForData=function(_,M){let R;const b=n.from(M,n.M);if(Array.isArray(_)){if(_.length>1)return g(_,b);if(_.length===0)return 1;R=_[0]}else R=_;return c(R.mode,R.getLength(),b)},i.getEncodedBits=function(_){if(!s.isValid(_)||_<7)throw new Error("Invalid QR Code version");let M=_<<12;for(;t.getBCHDigit(M)-l>=0;)M^=a<<t.getBCHDigit(M)-l;return _<<12|M}})(Ua)),Ua}var Ba={},eu;function t_(){if(eu)return Ba;eu=1;const i=Ri(),t=1335,e=21522,n=i.getBCHDigit(t);return Ba.getEncodedBits=function(s,a){const l=s.bit<<3|a;let c=l<<10;for(;i.getBCHDigit(c)-n>=0;)c^=t<<i.getBCHDigit(c)-n;return(l<<10|c)^e},Ba}var ka={},za,nu;function e_(){if(nu)return za;nu=1;const i=Pi();function t(e){this.mode=i.NUMERIC,this.data=e.toString()}return t.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),n.put(a,10);const l=this.data.length-r;l>0&&(s=this.data.substr(r),a=parseInt(s,10),n.put(a,l*3+1))},za=t,za}var Ha,iu;function n_(){if(iu)return Ha;iu=1;const i=Pi(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(n){this.mode=i.ALPHANUMERIC,this.data=n}return e.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=t.indexOf(this.data[s])*45;a+=t.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(t.indexOf(this.data[s]),6)},Ha=e,Ha}var Va,ru;function i_(){if(ru)return Va;ru=1;const i=Pi();function t(e){this.mode=i.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}return t.getBitsLength=function(n){return n*8},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){for(let n=0,r=this.data.length;n<r;n++)e.put(this.data[n],8)},Va=t,Va}var Ga,su;function r_(){if(su)return Ga;su=1;const i=Pi(),t=Ri();function e(n){this.mode=i.KANJI,this.data=n}return e.getBitsLength=function(r){return r*13},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let r;for(r=0;r<this.data.length;r++){let s=t.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},Ga=e,Ga}var Wa={exports:{}},au;function s_(){return au||(au=1,(function(i){var t={single_source_shortest_paths:function(e,n,r){var s={},a={};a[n]=0;var l=t.PriorityQueue.make();l.push(n,0);for(var c,h,f,g,d,_,M,R,b;!l.empty();){c=l.pop(),h=c.value,g=c.cost,d=e[h]||{};for(f in d)d.hasOwnProperty(f)&&(_=d[f],M=g+_,R=a[f],b=typeof a[f]>"u",(b||R>M)&&(a[f]=M,l.push(f,M),s[f]=h))}if(typeof r<"u"&&typeof a[r]>"u"){var x=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(x)}return s},extract_shortest_path_from_predecessor_list:function(e,n){for(var r=[],s=n;s;)r.push(s),e[s],s=e[s];return r.reverse(),r},find_path:function(e,n,r){var s=t.single_source_shortest_paths(e,n,r);return t.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(e){var n=t.PriorityQueue,r={},s;e=e||{};for(s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r.queue=[],r.sorter=e.sorter||n.default_sorter,r},default_sorter:function(e,n){return e.cost-n.cost},push:function(e,n){var r={value:e,cost:n};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=t})(Wa)),Wa.exports}var ou;function a_(){return ou||(ou=1,(function(i){const t=Pi(),e=e_(),n=n_(),r=i_(),s=r_(),a=ph(),l=Ri(),c=s_();function h(x){return unescape(encodeURIComponent(x)).length}function f(x,N,L){const D=[];let J;for(;(J=x.exec(L))!==null;)D.push({data:J[0],index:J.index,mode:N,length:J[0].length});return D}function g(x){const N=f(a.NUMERIC,t.NUMERIC,x),L=f(a.ALPHANUMERIC,t.ALPHANUMERIC,x);let D,J;return l.isKanjiModeEnabled()?(D=f(a.BYTE,t.BYTE,x),J=f(a.KANJI,t.KANJI,x)):(D=f(a.BYTE_KANJI,t.BYTE,x),J=[]),N.concat(L,D,J).sort(function(X,A){return X.index-A.index}).map(function(X){return{data:X.data,mode:X.mode,length:X.length}})}function d(x,N){switch(N){case t.NUMERIC:return e.getBitsLength(x);case t.ALPHANUMERIC:return n.getBitsLength(x);case t.KANJI:return s.getBitsLength(x);case t.BYTE:return r.getBitsLength(x)}}function _(x){return x.reduce(function(N,L){const D=N.length-1>=0?N[N.length-1]:null;return D&&D.mode===L.mode?(N[N.length-1].data+=L.data,N):(N.push(L),N)},[])}function M(x){const N=[];for(let L=0;L<x.length;L++){const D=x[L];switch(D.mode){case t.NUMERIC:N.push([D,{data:D.data,mode:t.ALPHANUMERIC,length:D.length},{data:D.data,mode:t.BYTE,length:D.length}]);break;case t.ALPHANUMERIC:N.push([D,{data:D.data,mode:t.BYTE,length:D.length}]);break;case t.KANJI:N.push([D,{data:D.data,mode:t.BYTE,length:h(D.data)}]);break;case t.BYTE:N.push([{data:D.data,mode:t.BYTE,length:h(D.data)}])}}return N}function R(x,N){const L={},D={start:{}};let J=["start"];for(let O=0;O<x.length;O++){const X=x[O],A=[];for(let z=0;z<X.length;z++){const Y=X[z],W=""+O+z;A.push(W),L[W]={node:Y,lastCount:0},D[W]={};for(let et=0;et<J.length;et++){const at=J[et];L[at]&&L[at].node.mode===Y.mode?(D[at][W]=d(L[at].lastCount+Y.length,Y.mode)-d(L[at].lastCount,Y.mode),L[at].lastCount+=Y.length):(L[at]&&(L[at].lastCount=Y.length),D[at][W]=d(Y.length,Y.mode)+4+t.getCharCountIndicator(Y.mode,N))}}J=A}for(let O=0;O<J.length;O++)D[J[O]].end=0;return{map:D,table:L}}function b(x,N){let L;const D=t.getBestModeForData(x);if(L=t.from(N,D),L!==t.BYTE&&L.bit<D.bit)throw new Error('"'+x+'" cannot be encoded with mode '+t.toString(L)+`.
 Suggested mode is: `+t.toString(D));switch(L===t.KANJI&&!l.isKanjiModeEnabled()&&(L=t.BYTE),L){case t.NUMERIC:return new e(x);case t.ALPHANUMERIC:return new n(x);case t.KANJI:return new s(x);case t.BYTE:return new r(x)}}i.fromArray=function(N){return N.reduce(function(L,D){return typeof D=="string"?L.push(b(D,null)):D.data&&L.push(b(D.data,D.mode)),L},[])},i.fromString=function(N,L){const D=g(N,l.isKanjiModeEnabled()),J=M(D),O=R(J,L),X=c.find_path(O.map,"start","end"),A=[];for(let z=1;z<X.length-1;z++)A.push(O.table[X[z]].node);return i.fromArray(_(A))},i.rawSplit=function(N){return i.fromArray(g(N,l.isKanjiModeEnabled()))}})(ka)),ka}var lu;function o_(){if(lu)return Ta;lu=1;const i=Ri(),t=cl(),e=Xv(),n=qv(),r=Yv(),s=jv(),a=$v(),l=fh(),c=Zv(),h=Qv(),f=t_(),g=Pi(),d=a_();function _(O,X){const A=O.size,z=s.getPositions(X);for(let Y=0;Y<z.length;Y++){const W=z[Y][0],et=z[Y][1];for(let at=-1;at<=7;at++)if(!(W+at<=-1||A<=W+at))for(let lt=-1;lt<=7;lt++)et+lt<=-1||A<=et+lt||(at>=0&&at<=6&&(lt===0||lt===6)||lt>=0&&lt<=6&&(at===0||at===6)||at>=2&&at<=4&&lt>=2&&lt<=4?O.set(W+at,et+lt,!0,!0):O.set(W+at,et+lt,!1,!0))}}function M(O){const X=O.size;for(let A=8;A<X-8;A++){const z=A%2===0;O.set(A,6,z,!0),O.set(6,A,z,!0)}}function R(O,X){const A=r.getPositions(X);for(let z=0;z<A.length;z++){const Y=A[z][0],W=A[z][1];for(let et=-2;et<=2;et++)for(let at=-2;at<=2;at++)et===-2||et===2||at===-2||at===2||et===0&&at===0?O.set(Y+et,W+at,!0,!0):O.set(Y+et,W+at,!1,!0)}}function b(O,X){const A=O.size,z=h.getEncodedBits(X);let Y,W,et;for(let at=0;at<18;at++)Y=Math.floor(at/3),W=at%3+A-8-3,et=(z>>at&1)===1,O.set(Y,W,et,!0),O.set(W,Y,et,!0)}function x(O,X,A){const z=O.size,Y=f.getEncodedBits(X,A);let W,et;for(W=0;W<15;W++)et=(Y>>W&1)===1,W<6?O.set(W,8,et,!0):W<8?O.set(W+1,8,et,!0):O.set(z-15+W,8,et,!0),W<8?O.set(8,z-W-1,et,!0):W<9?O.set(8,15-W-1+1,et,!0):O.set(8,15-W-1,et,!0);O.set(z-8,8,1,!0)}function N(O,X){const A=O.size;let z=-1,Y=A-1,W=7,et=0;for(let at=A-1;at>0;at-=2)for(at===6&&at--;;){for(let lt=0;lt<2;lt++)if(!O.isReserved(Y,at-lt)){let Q=!1;et<X.length&&(Q=(X[et]>>>W&1)===1),O.set(Y,at-lt,Q),W--,W===-1&&(et++,W=7)}if(Y+=z,Y<0||A<=Y){Y-=z,z=-z;break}}}function L(O,X,A){const z=new e;A.forEach(function(lt){z.put(lt.mode.bit,4),z.put(lt.getLength(),g.getCharCountIndicator(lt.mode,O)),lt.write(z)});const Y=i.getSymbolTotalCodewords(O),W=l.getTotalCodewordsCount(O,X),et=(Y-W)*8;for(z.getLengthInBits()+4<=et&&z.put(0,4);z.getLengthInBits()%8!==0;)z.putBit(0);const at=(et-z.getLengthInBits())/8;for(let lt=0;lt<at;lt++)z.put(lt%2?17:236,8);return D(z,O,X)}function D(O,X,A){const z=i.getSymbolTotalCodewords(X),Y=l.getTotalCodewordsCount(X,A),W=z-Y,et=l.getBlocksCount(X,A),at=z%et,lt=et-at,Q=Math.floor(z/et),ft=Math.floor(W/et),mt=ft+1,Ct=Q-ft,Nt=new c(Ct);let y=0;const T=new Array(et),o=new Array(et);let u=0;const m=new Uint8Array(O.buffer);for(let C=0;C<et;C++){const P=C<lt?ft:mt;T[C]=m.slice(y,y+P),o[C]=Nt.encode(T[C]),y+=P,u=Math.max(u,P)}const v=new Uint8Array(z);let p=0,E,w;for(E=0;E<u;E++)for(w=0;w<et;w++)E<T[w].length&&(v[p++]=T[w][E]);for(E=0;E<Ct;E++)for(w=0;w<et;w++)v[p++]=o[w][E];return v}function J(O,X,A,z){let Y;if(Array.isArray(O))Y=d.fromArray(O);else if(typeof O=="string"){let Q=X;if(!Q){const ft=d.rawSplit(O);Q=h.getBestVersionForData(ft,A)}Y=d.fromString(O,Q||40)}else throw new Error("Invalid data");const W=h.getBestVersionForData(Y,A);if(!W)throw new Error("The amount of data is too big to be stored in a QR Code");if(!X)X=W;else if(X<W)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+W+`.
`);const et=L(X,A,Y),at=i.getSymbolSize(X),lt=new n(at);return _(lt,X),M(lt),R(lt,X),x(lt,A,0),X>=7&&b(lt,X),N(lt,et),isNaN(z)&&(z=a.getBestMask(lt,x.bind(null,lt,A))),a.applyMask(z,lt),x(lt,A,z),{modules:lt,version:X,errorCorrectionLevel:A,maskPattern:z,segments:Y}}return Ta.create=function(X,A){if(typeof X>"u"||X==="")throw new Error("No input text");let z=t.M,Y,W;return typeof A<"u"&&(z=t.from(A.errorCorrectionLevel,t.M),Y=h.from(A.version),W=a.from(A.maskPattern),A.toSJISFunc&&i.setToSJISFunction(A.toSJISFunc)),J(X,Y,z,W)},Ta}var Xa={},qa={},cu;function mh(){return cu||(cu=1,(function(i){function t(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let n=e.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+e);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const r=parseInt(n.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+n.slice(0,6).join("")}}i.getOptions=function(n){n||(n={}),n.color||(n.color={});const r=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},i.getScale=function(n,r){return r.width&&r.width>=n+r.margin*2?r.width/(n+r.margin*2):r.scale},i.getImageWidth=function(n,r){const s=i.getScale(n,r);return Math.floor((n+r.margin*2)*s)},i.qrToImageData=function(n,r,s){const a=r.modules.size,l=r.modules.data,c=i.getScale(a,s),h=Math.floor((a+s.margin*2)*c),f=s.margin*c,g=[s.color.light,s.color.dark];for(let d=0;d<h;d++)for(let _=0;_<h;_++){let M=(d*h+_)*4,R=s.color.light;if(d>=f&&_>=f&&d<h-f&&_<h-f){const b=Math.floor((d-f)/c),x=Math.floor((_-f)/c);R=g[l[b*a+x]?1:0]}n[M++]=R.r,n[M++]=R.g,n[M++]=R.b,n[M]=R.a}}})(qa)),qa}var uu;function l_(){return uu||(uu=1,(function(i){const t=mh();function e(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(s,a,l){let c=l,h=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(h=n()),c=t.getOptions(c);const f=t.getImageWidth(s.modules.size,c),g=h.getContext("2d"),d=g.createImageData(f,f);return t.qrToImageData(d.data,s,c),e(g,h,f),g.putImageData(d,0,0),h},i.renderToDataURL=function(s,a,l){let c=l;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const h=i.render(s,a,c),f=c.type||"image/png",g=c.rendererOpts||{};return h.toDataURL(f,g.quality)}})(Xa)),Xa}var Ya={},hu;function c_(){if(hu)return Ya;hu=1;const i=mh();function t(r,s){const a=r.a/255,l=s+'="'+r.hex+'"';return a<1?l+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':l}function e(r,s,a){let l=r+s;return typeof a<"u"&&(l+=" "+a),l}function n(r,s,a){let l="",c=0,h=!1,f=0;for(let g=0;g<r.length;g++){const d=Math.floor(g%s),_=Math.floor(g/s);!d&&!h&&(h=!0),r[g]?(f++,g>0&&d>0&&r[g-1]||(l+=h?e("M",d+a,.5+_+a):e("m",c,0),c=0,h=!1),d+1<s&&r[g+1]||(l+=e("h",f),f=0)):c++}return l}return Ya.render=function(s,a,l){const c=i.getOptions(a),h=s.modules.size,f=s.modules.data,g=h+c.margin*2,d=c.color.light.a?"<path "+t(c.color.light,"fill")+' d="M0 0h'+g+"v"+g+'H0z"/>':"",_="<path "+t(c.color.dark,"stroke")+' d="'+n(f,h,c.margin)+'"/>',M='viewBox="0 0 '+g+" "+g+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+M+' shape-rendering="crispEdges">'+d+_+`</svg>
`;return typeof l=="function"&&l(null,b),b},Ya}var fu;function u_(){if(fu)return Ji;fu=1;const i=Wv(),t=o_(),e=l_(),n=c_();function r(s,a,l,c,h){const f=[].slice.call(arguments,1),g=f.length,d=typeof f[g-1]=="function";if(!d&&!i())throw new Error("Callback required as last argument");if(d){if(g<2)throw new Error("Too few arguments provided");g===2?(h=l,l=a,a=c=void 0):g===3&&(a.getContext&&typeof h>"u"?(h=c,c=void 0):(h=c,c=l,l=a,a=void 0))}else{if(g<1)throw new Error("Too few arguments provided");return g===1?(l=a,a=c=void 0):g===2&&!a.getContext&&(c=l,l=a,a=void 0),new Promise(function(_,M){try{const R=t.create(l,c);_(s(R,a,c))}catch(R){M(R)}})}try{const _=t.create(l,c);h(null,s(_,a,c))}catch(_){h(_)}}return Ji.create=t.create,Ji.toCanvas=r.bind(null,e.render),Ji.toDataURL=r.bind(null,e.renderToDataURL),Ji.toString=r.bind(null,function(s,a,l){return n.render(s,l)}),Ji}var h_=u_();const f_=hh(h_),Sx={init:function(i,t,e,n,r,s,a,l,c,h){const f=this;console.log("init ui"),this.app=s,this.goNext=i,this.goPrev=t,this.globe=n,this.nameCallback=a,this.loadCallback=l,this.restartCallback=c,this.prepareInterstitialCallback=h,this.m=r,this.curPanelID="home",this.panels=$(".panel"),this.search=ps,this.pb=$(".progressBarInner"),this.nav=document.getElementById("nav"),this.begin=document.getElementById("begin"),this.loading=document.getElementById("loading"),this.outlier=document.getElementById("outlier"),this.activeInput=null,this.recordThreshold=500,this.inactivityTimeout=180,ps.init($("#searchName"),$("#searchResults"),this.recordThreshold,function(d,_,M){M>=f.recordThreshold&&(d=f.capitalizeFirstLetter(d.toLowerCase()),f.ph("surname",d),f.ph("surname_plural",d.at(-1)=="s"?d+"es":d+"s"),f.ph("id",_),f.ph("num_records",M.toLocaleString()),f.nameCallback(d,_,M),ps.clear(),f.keyboard.clearInput("searchName"),$("body").hasClass("changer")||f.movePanel("where"))},e),$("#begin").click(function(){f.hidePanels(),f.goNext(1,!0),f.app.setUI("main")}),$(".next").click(function(){if($("#nav").hasClass("disabled")||f.m.flying)return!1;f.goNext()}),$(".back").click(function(){if($("#nav").hasClass("disabled")||f.m.flying)return!1;f.goPrev()}),$(".btnNextPanel").click(function(){const d=$(this).attr("data-id");$(this).attr("data-skip")=="yes"&&(f.app.state.origin="",f.app.state.lat=0,f.app.state.lon=0,f.app.state.noAncestry=0,f.app.saveState()),f.movePanel(d)}),$(".restart, .restartOverview, .restartPanel").click(function(){f.restart()}),$(document).on("click",".tlEvent, .mapLink",function(d){if(f.m.flying||f.nav.classList.contains("disabled")||$(this).hasClass("selected"))return!1;const _=$(this).index($(this).hasClass("tlEvent")?".tlEvent":".mapLink");f.goNext(_,!1,!0)}),$(".overview").click(function(){f.skipToOverview()}),this.keyboard=new Gv({onChange:d=>g(d),layout:{default:["Q W E R T Y U I O P {bksp}","A S D F G H J K L '","Z X C V B N M","{space}"]}});function g(d){f.activeInput.val(d).change()}this.setInactivityTimeout(),$(document).click(function(){window.clearTimeout(f.tDaemon),f.setInactivityTimeout()}),document.addEventListener("keydown",d=>{d.key=="1"&&f.showChanger()})},skipToOverview:function(){if($("#nav").hasClass("disabled")||this.m.flying)return!1;this.goNext($(".tlEvent").length,-1,!0)},showChanger:function(){gsap.set("#panels",{display:"block"}),gsap.set(".panel",{display:"none"}),gsap.set(".panel#p_name",{display:"block",opacity:1,scale:1}),this.mapKeyboard("name"),this.showKeyboard("name"),$("body").addClass("changer")},hideChanger:function(){gsap.set("#panels",{display:"none"}),this.hideKeyboard(),$("body").removeClass("changer")},capitalizeFirstLetter:function(i){return String(i).charAt(0).toUpperCase()+String(i).slice(1)},setInactivityTimeout:function(){const i=this;this.tDaemon=window.setTimeout(function(){i.globe.animating||i.restart(),i.setInactivityTimeout()},this.inactivityTimeout*1e3)},restart:function(){gsap.globalTimeline.clear(),this.mapKeyboard("name"),this.keyboard.clearInput("searchName"),this.mapKeyboard("where"),this.keyboard.clearInput("countrySearch"),$("#countrySearch").val(""),this.showPanels(),this.movePanel("home"),this.restartCallback(),this.hideMap()},showMap:function(){gsap.set("#mapHolder",{opacity:1e-7}),gsap.to("#mapHolder",{opacity:1,duration:.2}),gsap.set("#compass",{transform:"rotate(0deg)"}),gsap.to("#p_interstitial",{"background-color":"rgba(100, 100, 100, 0)",duration:1,ease:"power1.inOut",onComplete:function(){}}),gsap.to(".progressBar",{opacity:0,duration:1,ease:"power1.inOut"}),gsap.to("#stats, #inset",{x:0,duration:.5,delay:0}),this.showBegin()},hideMap:function(){gsap.to("#mapHolder",{opacity:1e-6,duration:.2,onComplete:function(){console.log("setting ghost"),$("#mapHolder").css({opacity:1e-6})}})},ph:function(i,t){$(".ph_"+i).text(t)},populate:function(i){$(".surname").html(i)},enableNav:function(){gsap.set(this.nav,{display:"block"}),gsap.to(this.nav,{opacity:1,duration:.5}),gsap.to("#descriptionInner",{opacity:1,duration:.5})},disableNav:function(){const i=this;gsap.to(this.nav,{opacity:0,duration:.5,onComplete:function(){gsap.set(i.nav,{display:"none"})}}),gsap.to("#descriptionInner",{opacity:0,duration:.5})},hideLoading:function(i=!1){$("#loading").fadeOut(500),this.showPanels(i)},showQR:function(i,t){console.log("show QR",i,t),f_.toDataURL(t+"/mobile/?id="+i+"&dbID="+this.app.state.dbID).then(e=>{$("#qr").attr("src",e)}).catch(e=>{console.error(e)})},showPanels:function(i){const t=this;gsap.set(".progressBar",{opacity:1}),gsap.to("#tlOuter, #overviewTitle, #navOverview, #overviewFrame",{opacity:0,duration:.5,onComplete:function(){gsap.set("#tlOuter, #overviewTitle, #navOverview, #overviewFrame",{display:"none"})}}),gsap.to("#stats, #ribbon, #inset, #compassHolder, #qrHolder, .restart",{opacity:0,duration:.5,delay:0,onComplete:function(){$("#panels").fadeIn(500),t.movePanel(i?"interstitial":"home"),gsap.set("#stats, #ribbon, #compassHolder, #qrHolder, .restart, #descriptionHolder, #nav",{display:"none"})}}),gsap.to(["#descriptionHolder"],{opacity:0,duration:.5,delay:0}),gsap.to(["#begin","#nav"],{y:200,duration:.25,opacity:0,delay:0})},hidePanels:function(){$("#panels").fadeOut(500)},hideKeyboard:function(){console.log("hiding keyboard"),gsap.to("#keyboard-holder",{opacity:0,y:100,duration:.5,onComplete:function(){gsap.set("#keyboard-holder",{display:"none"})}})},showKeyboard:function(i){console.log("showing keyboard",i),i=="name"?(gsap.set("#keyboard-holder",{display:"block",opacity:0,y:100}),gsap.to("#keyboard-holder",{opacity:1,y:0,delay:.5,duration:1})):gsap.to("#keyboard-holder",{opacity:1,display:"block",y:120,delay:0,duration:.5})},movePanel:function(i){const t=this;$("body").removeClass("someCountryResults");const e=$(".panel.active").attr("id");if(console.log("curnext",e,i),"p_"+i!=e){const n=$(".panel#"+e),r=$(".panel#p_"+i);gsap.set(r,{scale:.5,opacity:0,display:"block"}),gsap.to(n,{scale:1.7,opacity:0,duration:.5,ease:"power1.inOut",onComplete:function(){n.hide()}}),gsap.to(r,{scale:1,opacity:1,duration:.5,ease:"power1.inOut",onComplete:function(){}}),i=="name"||i=="where"?(this.showKeyboard(i),this.mapKeyboard(i)):this.hideKeyboard()}$(".panel").removeClass("active"),$(".panel#p_"+i).addClass("active"),this.curPanelID=i,i=="interstitial"?(this.hideKeyboard(),this.prepareInterstitialCallback(),gsap.set(this.pb,{width:0}),gsap.to(this.pb,{width:"100%",duration:this.debug?.1:2.5,delay:.1,ease:"linear",onComplete:function(){t.loadCallback()}})):i=="name"&&(this.globe.focus(),ps.clear(),gsap.to(".panels_underlay",{y:0,opacity:1,duration:1})),i!="name"&&gsap.to(".panels_underlay",{y:100,opacity:0,duration:1})},mapKeyboard:function(i){this.keyboard.setOptions({inputName:i=="where"?"countrySearch":"searchName"}),this.activeInput=i=="where"?$("#countrySearch"):$("#searchName")},hideBegin:function(){const i=this;gsap.to(this.begin,{transform:"translateY(100px)",opacity:0,duration:.5,onComplete:function(){gsap.set(i.begin,{display:"none"})}}),gsap.to(this.nav,{transform:"translateY(0)",duration:1,delay:1})},showBegin:function(){gsap.set([this.begin,"#ribbon","#mapHeading"],{display:"block",opacity:0}),gsap.to([this.begin,"#ribbon","#mapHeading"],{opacity:1,transform:"translateY(0)",duration:1}),gsap.to(this.nav,{transform:"translateY(100px)",duration:1,delay:1})}};export{_u as $,H_ as A,De as B,th as C,Vn as D,ox as E,Fs as F,mn as G,Yn as H,Y_ as I,lx as J,cx as K,Ve as L,rn as M,Cn as N,ax as O,gs as P,Ld as Q,vf as R,al as S,Zi as T,sx as U,nt as V,_n as W,ux as X,mu as Y,gu as Z,vu as _,nl as a,Xh as a$,yu as a0,Mu as a1,bu as a2,en as a3,Eu as a4,Tr as a5,Xo as a6,In as a7,An as a8,Au as a9,Hs as aA,Vs as aB,Us as aC,k_ as aD,he as aE,Zt as aF,_i as aG,Bs as aH,Ke as aI,Wo as aJ,Cr as aK,Yh as aL,V_ as aM,no as aN,Wn as aO,wr as aP,yi as aQ,Gs as aR,Fr as aS,Fh as aT,Pe as aU,Wh as aV,Gh as aW,Zo as aX,Vh as aY,Jo as aZ,Hh as a_,Ru as aa,jo as ab,jn as ac,Mi as ad,Ei as ae,$o as af,Cu as ag,__ as ah,qo as ai,Yo as aj,Ar as ak,wu as al,Tu as am,di as an,$_ as ao,rr as ap,$t as aq,je as ar,Ud as as,Ti as at,du as au,oi as av,bh as aw,Hu as ax,Ai as ay,$s as az,fe as b,Co as b$,zh as b0,Cs as b1,li as b2,oc as b3,yh as b4,xh as b5,Ah as b6,Rh as b7,ja as b8,Th as b9,xs as bA,ys as bB,io as bC,ro as bD,so as bE,ao as bF,oo as bG,lo as bH,co as bI,uo as bJ,ho as bK,ws as bL,fo as bM,po as bN,mo as bO,go as bP,vo as bQ,_o as bR,xo as bS,yo as bT,Mo as bU,So as bV,bo as bW,Eo as bX,wo as bY,To as bZ,Ao as b_,pu as ba,Ch as bb,Ph as bc,Es as bd,wh as be,Eh as bf,gh as bg,gl as bh,vh as bi,g_ as bj,Xn as bk,xl as bl,_l as bm,vl as bn,Qi as bo,eo as bp,to as bq,Qa as br,Za as bs,er as bt,Ja as bu,Ka as bv,$a as bw,Ko as bx,vs as by,_s as bz,nx as c,As as c$,Io as c0,Lo as c1,Ts as c2,Do as c3,Df as c4,Q_ as c5,Er as c6,Z_ as c7,tx as c8,ex as c9,w_ as cA,Di as cB,Sh as cC,Mh as cD,$h as cE,X_ as cF,Oh as cG,Uh as cH,Ns as cI,W_ as cJ,sc as cK,Ur as cL,Nd as cM,m_ as cN,zf as cO,b_ as cP,_h as cQ,Nr as cR,bi as cS,nr as cT,fi as cU,S_ as cV,E_ as cW,kh as cX,dx as cY,Iu as cZ,No as c_,ix as ca,il as cb,rx as cc,kf as cd,q_ as ce,J_ as cf,ir as cg,Bu as ch,Oe as ci,Su as cj,Uu as ck,Nu as cl,F_ as cm,O_ as cn,B_ as co,N_ as cp,U_ as cq,D_ as cr,yl as cs,L_ as ct,P_ as cu,R_ as cv,C_ as cw,A_ as cx,I_ as cy,T_ as cz,qe as d,Me as d0,v_ as d1,Rs as d2,hx as d3,K_ as d4,Dr as d5,Dn as d6,Tn as d7,yd as d8,Bt as d9,Mx as dA,xx as dB,gx as da,vx as db,Ju as dc,Bf as dd,Ff as de,Zu as df,Kf as dg,Nn as dh,zu as di,Ln as dj,j_ as dk,ne as dl,Go as dm,_x as dn,d_ as dp,p_ as dq,mx as dr,Os as ds,Pn as dt,fx as du,ch as dv,px as dw,Uv as dx,yx as dy,Sx as dz,pe as e,nn as f,Pf as g,Ou as h,x_ as i,M_ as j,y_ as k,hh as l,Du as m,Uo as n,oe as o,ae as p,Ft as q,vn as r,be as s,Fu as t,$e as u,hi as v,Yt as w,vr as x,G_ as y,z_ as z};
