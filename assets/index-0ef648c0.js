(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Xr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function qr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?os(r):qr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(se(e))return e;if(Z(e))return e}}const rs=/;(?![^(]*\))/g,as=/:([^]+)/,is=/\/\*.*?\*\//gs;function os(e){const t={};return e.replace(is,"").split(rs).forEach(n=>{if(n){const r=n.split(as);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xe(e){let t="";if(se(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=xe(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ss="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ls=Xr(ss);function Ni(e){return!!e||e===""}function fs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Vn(e[r],t[r]);return n}function Vn(e,t){if(e===t)return!0;let n=Sa(e),r=Sa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=qt(e),r=qt(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return n&&r?fs(e,t):!1;if(n=Z(e),r=Z(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Vn(e[o],t[o]))return!1}}return String(e)===String(t)}function cs(e,t){return e.findIndex(n=>Vn(n,t))}const st=e=>se(e)?e:e==null?"":N(e)||Z(e)&&(e.toString===Ri||!R(e.toString))?JSON.stringify(e,Fi,2):String(e),Fi=(e,t)=>t&&t.__v_isRef?Fi(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:qn(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!N(t)&&!Di(t)?String(t):t,J={},Ot=[],Te=()=>{},us=()=>!1,ds=/^on[^a-z]/,Xn=e=>ds.test(e),Jr=e=>e.startsWith("onUpdate:"),ue=Object.assign,Gr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ms=Object.prototype.hasOwnProperty,z=(e,t)=>ms.call(e,t),N=Array.isArray,Pt=e=>ln(e)==="[object Map]",qn=e=>ln(e)==="[object Set]",Sa=e=>ln(e)==="[object Date]",R=e=>typeof e=="function",se=e=>typeof e=="string",qt=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Li=e=>Z(e)&&R(e.then)&&R(e.catch),Ri=Object.prototype.toString,ln=e=>Ri.call(e),ps=e=>ln(e).slice(8,-1),Di=e=>ln(e)==="[object Object]",Qr=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},hs=/-(\w)/g,Mt=Jn(e=>e.replace(hs,(t,n)=>n?n.toUpperCase():"")),gs=/\B([A-Z])/g,Rt=Jn(e=>e.replace(gs,"-$1").toLowerCase()),ji=Jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),dr=Jn(e=>e?`on${ji(e)}`:""),Jt=(e,t)=>!Object.is(e,t),In=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},jn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ma;const vs=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ce;class bs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(e,t=Ce){t&&t.active&&t.effects.push(e)}function xs(){return Ce}const Zr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ui=e=>(e.w&et)>0,$i=e=>(e.n&et)>0,_s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=et},ws=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ui(a)&&!$i(a)?a.delete(e):t[n++]=a,a.w&=~et,a.n&=~et}t.length=n}},Ar=new WeakMap;let Yt=0,et=1;const Cr=30;let Ee;const bt=Symbol(""),Er=Symbol("");class ea{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ys(this,r)}run(){if(!this.active)return this.fn();let t=Ee,n=Qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ee,Ee=this,Qe=!0,et=1<<++Yt,Yt<=Cr?_s(this):Na(this),this.fn()}finally{Yt<=Cr&&ws(this),et=1<<--Yt,Ee=this.parent,Qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ee===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Qe=!0;const zi=[];function Dt(){zi.push(Qe),Qe=!1}function jt(){const e=zi.pop();Qe=e===void 0?!0:e}function he(e,t,n){if(Qe&&Ee){let r=Ar.get(e);r||Ar.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Zr()),Hi(a)}}function Hi(e,t){let n=!1;Yt<=Cr?$i(e)||(e.n|=et,n=!Ui(e)):n=!e.has(Ee),n&&(e.add(Ee),Ee.deps.push(e))}function Ye(e,t,n,r,a,i){const o=Ar.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&N(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":N(e)?Qr(n)&&s.push(o.get("length")):(s.push(o.get(bt)),Pt(e)&&s.push(o.get(Er)));break;case"delete":N(e)||(s.push(o.get(bt)),Pt(e)&&s.push(o.get(Er)));break;case"set":Pt(e)&&s.push(o.get(bt));break}if(s.length===1)s[0]&&Or(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Or(Zr(l))}}function Or(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&Fa(r);for(const r of n)r.computed||Fa(r)}function Fa(e,t){(e!==Ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ks=Xr("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qt)),As=ta(),Cs=ta(!1,!0),Es=ta(!0),La=Os();function Os(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Dt();const r=B(this)[t].apply(this,n);return jt(),r}}),e}function Ps(e){const t=B(this);return he(t,"has",e),t.hasOwnProperty(e)}function ta(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Bs:Xi:t?Vi:Ki).get(r))return r;const o=N(r);if(!e){if(o&&z(La,a))return Reflect.get(La,a,i);if(a==="hasOwnProperty")return Ps}const s=Reflect.get(r,a,i);return(qt(a)?Yi.has(a):ks(a))||(e||he(r,"get",a),t)?s:ce(s)?o&&Qr(a)?s:s.value:Z(s)?e?qi(s):aa(s):s}}const Ts=Bi(),Is=Bi(!0);function Bi(e=!1){return function(n,r,a,i){let o=n[r];if(Nt(o)&&ce(o)&&!ce(a))return!1;if(!e&&(!Un(a)&&!Nt(a)&&(o=B(o),a=B(a)),!N(n)&&ce(o)&&!ce(a)))return o.value=a,!0;const s=N(n)&&Qr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Jt(a,o)&&Ye(n,"set",r,a):Ye(n,"add",r,a)),l}}function Ss(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ye(e,"delete",t,void 0),r}function Ms(e,t){const n=Reflect.has(e,t);return(!qt(t)||!Yi.has(t))&&he(e,"has",t),n}function Ns(e){return he(e,"iterate",N(e)?"length":bt),Reflect.ownKeys(e)}const Wi={get:As,set:Ts,deleteProperty:Ss,has:Ms,ownKeys:Ns},Fs={get:Es,set(e,t){return!0},deleteProperty(e,t){return!0}},Ls=ue({},Wi,{get:Cs,set:Is}),na=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function pn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=Gn(a),s=r?na:n?oa:Gt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function hn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function gn(e,t=!1){return e=e.__v_raw,!t&&he(B(e),"iterate",bt),Reflect.get(e,"size",e)}function Ra(e){e=B(e);const t=B(this);return Gn(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function Da(e,t){t=B(t);const n=B(this),{has:r,get:a}=Gn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Jt(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function ja(e){const t=B(this),{has:n,get:r}=Gn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function Ua(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function vn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?na:e?oa:Gt;return!e&&he(s,"iterate",bt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function bn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=Pt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?na:t?oa:Gt;return!t&&he(i,"iterate",l?Er:bt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Rs(){const e={get(i){return pn(this,i)},get size(){return gn(this)},has:hn,add:Ra,set:Da,delete:ja,clear:Ua,forEach:vn(!1,!1)},t={get(i){return pn(this,i,!1,!0)},get size(){return gn(this)},has:hn,add:Ra,set:Da,delete:ja,clear:Ua,forEach:vn(!1,!0)},n={get(i){return pn(this,i,!0)},get size(){return gn(this,!0)},has(i){return hn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:vn(!0,!1)},r={get(i){return pn(this,i,!0,!0)},get size(){return gn(this,!0)},has(i){return hn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=bn(i,!1,!1),n[i]=bn(i,!0,!1),t[i]=bn(i,!1,!0),r[i]=bn(i,!0,!0)}),[e,n,t,r]}const[Ds,js,Us,$s]=Rs();function ra(e,t){const n=t?e?$s:Us:e?js:Ds;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const zs={get:ra(!1,!1)},Hs={get:ra(!1,!0)},Ys={get:ra(!0,!1)},Ki=new WeakMap,Vi=new WeakMap,Xi=new WeakMap,Bs=new WeakMap;function Ws(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ks(e){return e.__v_skip||!Object.isExtensible(e)?0:Ws(ps(e))}function aa(e){return Nt(e)?e:ia(e,!1,Wi,zs,Ki)}function Vs(e){return ia(e,!1,Ls,Hs,Vi)}function qi(e){return ia(e,!0,Fs,Ys,Xi)}function ia(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ks(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Tt(e){return Nt(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function Un(e){return!!(e&&e.__v_isShallow)}function Ji(e){return Tt(e)||Nt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Gi(e){return Dn(e,"__v_skip",!0),e}const Gt=e=>Z(e)?aa(e):e,oa=e=>Z(e)?qi(e):e;function Qi(e){Qe&&Ee&&(e=B(e),Hi(e.dep||(e.dep=Zr())))}function Zi(e,t){e=B(e);const n=e.dep;n&&Or(n)}function ce(e){return!!(e&&e.__v_isRef===!0)}function Ae(e){return Xs(e,!1)}function Xs(e,t){return ce(e)?e:new qs(e,t)}class qs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:B(t),this._value=n?t:Gt(t)}get value(){return Qi(this),this._value}set value(t){const n=this.__v_isShallow||Un(t)||Nt(t);t=n?t:B(t),Jt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Gt(t),Zi(this))}}function Fe(e){return ce(e)?e.value:e}const Js={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return Tt(e)?e:new Proxy(e,Js)}var to;class Gs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[to]=!1,this._dirty=!0,this.effect=new ea(t,()=>{this._dirty||(this._dirty=!0,Zi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Qi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}to="__v_isReadonly";function Qs(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new Gs(r,a,i||!a,n)}function Ze(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Qn(i,t,n)}return a}function we(e,t,n,r){if(R(e)){const i=Ze(e,t,n,r);return i&&Li(i)&&i.catch(o=>{Qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],t,n,r));return a}function Qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ze(l,null,10,[e,o,s]);return}}Zs(e,n,a,r)}function Zs(e,t,n,r=!0){console.error(e)}let Qt=!1,Pr=!1;const fe=[];let De=0;const It=[];let ze=null,ut=0;const no=Promise.resolve();let sa=null;function el(e){const t=sa||no;return e?t.then(this?e.bind(this):e):t}function tl(e){let t=De+1,n=fe.length;for(;t<n;){const r=t+n>>>1;Zt(fe[r])<e?t=r+1:n=r}return t}function la(e){(!fe.length||!fe.includes(e,Qt&&e.allowRecurse?De+1:De))&&(e.id==null?fe.push(e):fe.splice(tl(e.id),0,e),ro())}function ro(){!Qt&&!Pr&&(Pr=!0,sa=no.then(io))}function nl(e){const t=fe.indexOf(e);t>De&&fe.splice(t,1)}function rl(e){N(e)?It.push(...e):(!ze||!ze.includes(e,e.allowRecurse?ut+1:ut))&&It.push(e),ro()}function $a(e,t=Qt?De+1:0){for(;t<fe.length;t++){const n=fe[t];n&&n.pre&&(fe.splice(t,1),t--,n())}}function ao(e){if(It.length){const t=[...new Set(It)];if(It.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Zt(n)-Zt(r)),ut=0;ut<ze.length;ut++)ze[ut]();ze=null,ut=0}}const Zt=e=>e.id==null?1/0:e.id,al=(e,t)=>{const n=Zt(e)-Zt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function io(e){Pr=!1,Qt=!0,fe.sort(al);const t=Te;try{for(De=0;De<fe.length;De++){const n=fe[De];n&&n.active!==!1&&Ze(n,null,14)}}finally{De=0,fe.length=0,ao(),Qt=!1,sa=null,(fe.length||It.length)&&io()}}function il(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||J;h&&(a=n.map(w=>se(w)?w.trim():w)),m&&(a=n.map(jn))}let s,l=r[s=dr(t)]||r[s=dr(Mt(t))];!l&&i&&(l=r[s=dr(Rt(t))]),l&&we(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,we(c,e,6,a)}}function oo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=c=>{const d=oo(c,t,!0);d&&(s=!0,ue(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Z(e)&&r.set(e,null),null):(N(i)?i.forEach(l=>o[l]=null):ue(o,i),Z(e)&&r.set(e,o),o)}function Zn(e,t){return!e||!Xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Rt(t))||z(e,t))}let _e=null,er=null;function $n(e){const t=_e;return _e=e,er=e&&e.type.__scopeId||null,t}function ol(e){er=e}function sl(){er=null}function ll(e,t=_e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&qa(-1);const i=$n(t);let o;try{o=e(...a)}finally{$n(i),r._d&&qa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:w,ctx:M,inheritAttrs:C}=e;let U,L;const H=$n(e);try{if(n.shapeFlag&4){const D=a||r;U=Re(d.call(D,D,m,i,w,h,M)),L=l}else{const D=t;U=Re(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),L=t.props?l:fl(l)}}catch(D){Kt.length=0,Qn(D,e,1),U=yt(He)}let P=U;if(L&&C!==!1){const D=Object.keys(L),{shapeFlag:Y}=P;D.length&&Y&7&&(o&&D.some(Jr)&&(L=cl(L,o)),P=tt(P,L))}return n.dirs&&(P=tt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),U=P,$n(H),U}const fl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xn(n))&&((t||(t={}))[n]=e[n]);return t},cl=(e,t)=>{const n={};for(const r in e)(!Jr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ul(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!Zn(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?za(r,o,c):!0:!!o;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function dl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ml=e=>e.__isSuspense;function pl(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):rl(e)}function hl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Sn(e,t,n=!1){const r=re||_e;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const yn={};function Mn(e,t,n){return so(e,t,n)}function so(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){const s=xs()===(re==null?void 0:re.scope)?re:null;let l,c=!1,d=!1;if(ce(e)?(l=()=>e.value,c=Un(e)):Tt(e)?(l=()=>e,r=!0):N(e)?(d=!0,c=e.some(P=>Tt(P)||Un(P)),l=()=>e.map(P=>{if(ce(P))return P.value;if(Tt(P))return ht(P);if(R(P))return Ze(P,s,2)})):R(e)?t?l=()=>Ze(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),we(e,s,3,[h])}:l=Te,t&&r){const P=l;l=()=>ht(P())}let m,h=P=>{m=L.onStop=()=>{Ze(P,s,4)}},w;if(tn)if(h=Te,t?n&&we(t,s,3,[l(),d?[]:void 0,h]):l(),a==="sync"){const P=pf();w=P.__watcherHandles||(P.__watcherHandles=[])}else return Te;let M=d?new Array(e.length).fill(yn):yn;const C=()=>{if(L.active)if(t){const P=L.run();(r||c||(d?P.some((D,Y)=>Jt(D,M[Y])):Jt(P,M)))&&(m&&m(),we(t,s,3,[P,M===yn?void 0:d&&M[0]===yn?[]:M,h]),M=P)}else L.run()};C.allowRecurse=!!t;let U;a==="sync"?U=C:a==="post"?U=()=>pe(C,s&&s.suspense):(C.pre=!0,s&&(C.id=s.uid),U=()=>la(C));const L=new ea(l,U);t?n?C():M=L.run():a==="post"?pe(L.run.bind(L),s&&s.suspense):L.run();const H=()=>{L.stop(),s&&s.scope&&Gr(s.scope.effects,L)};return w&&w.push(H),H}function gl(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?lo(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=re;Ft(this);const s=so(a,i.bind(r),n);return o?Ft(o):xt(),s}function lo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))ht(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(qn(e)||Pt(e))e.forEach(n=>{ht(n,t)});else if(Di(e))for(const n in e)ht(e[n],t);return e}function vl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mo(()=>{e.isMounted=!0}),po(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],bl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},setup(e,{slots:t}){const n=sf(),r=vl();let a;return()=>{const i=t.default&&co(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const C of i)if(C.type!==He){o=C;break}}const s=B(e),{mode:l}=s;if(r.isLeaving)return pr(o);const c=Ha(o);if(!c)return pr(o);const d=Tr(c,s,r,n);Ir(c,d);const m=n.subTree,h=m&&Ha(m);let w=!1;const{getTransitionKey:M}=c.type;if(M){const C=M();a===void 0?a=C:C!==a&&(a=C,w=!0)}if(h&&h.type!==He&&(!dt(c,h)||w)){const C=Tr(h,s,r,n);if(Ir(h,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},pr(o);l==="in-out"&&c.type!==He&&(C.delayLeave=(U,L,H)=>{const P=fo(r,h);P[String(h.key)]=h,U._leaveCb=()=>{L(),U._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=H})}return o}}},yl=bl;function fo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Tr(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:h,onAfterLeave:w,onLeaveCancelled:M,onBeforeAppear:C,onAppear:U,onAfterAppear:L,onAppearCancelled:H}=t,P=String(e.key),D=fo(n,e),Y=(S,$)=>{S&&we(S,r,9,$)},le=(S,$)=>{const W=$[1];Y(S,$),N(S)?S.every(ge=>ge.length<=1)&&W():S.length<=1&&W()},ie={mode:i,persisted:o,beforeEnter(S){let $=s;if(!n.isMounted)if(a)$=C||s;else return;S._leaveCb&&S._leaveCb(!0);const W=D[P];W&&dt(e,W)&&W.el._leaveCb&&W.el._leaveCb(),Y($,[S])},enter(S){let $=l,W=c,ge=d;if(!n.isMounted)if(a)$=U||l,W=L||c,ge=H||d;else return;let Ie=!1;const Ue=S._enterCb=zt=>{Ie||(Ie=!0,zt?Y(ge,[S]):Y(W,[S]),ie.delayedLeave&&ie.delayedLeave(),S._enterCb=void 0)};$?le($,[S,Ue]):Ue()},leave(S,$){const W=String(e.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return $();Y(m,[S]);let ge=!1;const Ie=S._leaveCb=Ue=>{ge||(ge=!0,$(),Ue?Y(M,[S]):Y(w,[S]),S._leaveCb=void 0,D[W]===e&&delete D[W])};D[W]=e,h?le(h,[S,Ie]):Ie()},clone(S){return Tr(S,t,n,r)}};return ie}function pr(e){if(tr(e))return e=tt(e),e.children=null,e}function Ha(e){return tr(e)?e.children?e.children[0]:void 0:e}function Ir(e,t){e.shapeFlag&6&&e.component?Ir(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function co(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&a++,r=r.concat(co(o.children,t,s))):(t||o.type!==He)&&r.push(s!=null?tt(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const Nn=e=>!!e.type.__asyncLoader,tr=e=>e.type.__isKeepAlive;function xl(e,t){uo(e,"a",t)}function _l(e,t){uo(e,"da",t)}function uo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(nr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)tr(a.parent.vnode)&&wl(r,t,n,a),a=a.parent}}function wl(e,t,n,r){const a=nr(t,e,r,!0);ho(()=>{Gr(r[t],a)},n)}function nr(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Dt(),Ft(n);const s=we(t,n,e,o);return xt(),jt(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=re)=>(!tn||e==="sp")&&nr(e,(...r)=>t(...r),n),kl=Ve("bm"),mo=Ve("m"),Al=Ve("bu"),Cl=Ve("u"),po=Ve("bum"),ho=Ve("um"),El=Ve("sp"),Ol=Ve("rtg"),Pl=Ve("rtc");function Tl(e,t=re){nr("ec",e,t)}function hr(e,t){const n=_e;if(n===null)return e;const r=ir(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=J]=t[i];o&&(R(o)&&(o={mounted:o,updated:o}),o.deep&&ht(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function lt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Dt(),we(l,n,8,[e.el,s,e,t]),jt())}}const Il=Symbol(),Sr=e=>e?Co(e)?ir(e)||e.proxy:Sr(e.parent):null,Wt=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sr(e.parent),$root:e=>Sr(e.root),$emit:e=>e.emit,$options:e=>fa(e),$forceUpdate:e=>e.f||(e.f=()=>la(e.update)),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>gl.bind(e)}),gr=(e,t)=>e!==J&&!e.__isScriptSetup&&z(e,t),Sl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(gr(r,t))return o[t]=1,r[t];if(a!==J&&z(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&z(c,t))return o[t]=3,i[t];if(n!==J&&z(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const d=Wt[t];let m,h;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&z(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,z(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return gr(a,t)?(a[t]=n,!0):r!==J&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&z(e,o)||gr(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(Wt,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Mr=!0;function Ml(e){const t=fa(e),n=e.proxy,r=e.ctx;Mr=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:w,updated:M,activated:C,deactivated:U,beforeDestroy:L,beforeUnmount:H,destroyed:P,unmounted:D,render:Y,renderTracked:le,renderTriggered:ie,errorCaptured:S,serverPrefetch:$,expose:W,inheritAttrs:ge,components:Ie,directives:Ue,filters:zt}=t;if(c&&Nl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const V=o[ee];R(V)&&(r[ee]=V.bind(n))}if(a){const ee=a.call(n,n);Z(ee)&&(e.data=aa(ee))}if(Mr=!0,i)for(const ee in i){const V=i[ee],it=R(V)?V.bind(n,n):R(V.get)?V.get.bind(n,n):Te,dn=!R(V)&&R(V.set)?V.set.bind(n):Te,ot=Oo({get:it,set:dn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Se=>ot.value=Se})}if(s)for(const ee in s)go(s[ee],r,n,ee);if(l){const ee=R(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(V=>{hl(V,ee[V])})}d&&Ya(d,e,"c");function de(ee,V){N(V)?V.forEach(it=>ee(it.bind(n))):V&&ee(V.bind(n))}if(de(kl,m),de(mo,h),de(Al,w),de(Cl,M),de(xl,C),de(_l,U),de(Tl,S),de(Pl,le),de(Ol,ie),de(po,H),de(ho,D),de(El,$),N(W))if(W.length){const ee=e.exposed||(e.exposed={});W.forEach(V=>{Object.defineProperty(ee,V,{get:()=>n[V],set:it=>n[V]=it})})}else e.exposed||(e.exposed={});Y&&e.render===Te&&(e.render=Y),ge!=null&&(e.inheritAttrs=ge),Ie&&(e.components=Ie),Ue&&(e.directives=Ue)}function Nl(e,t,n=Te,r=!1){N(e)&&(e=Nr(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=Sn(i.from||a,i.default,!0):o=Sn(i.from||a):o=Sn(i),ce(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ya(e,t,n){we(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function go(e,t,n,r){const a=r.includes(".")?lo(n,r):()=>n[r];if(se(e)){const i=t[e];R(i)&&Mn(a,i)}else if(R(e))Mn(a,e.bind(n));else if(Z(e))if(N(e))e.forEach(i=>go(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&Mn(a,i,e)}}function fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),Z(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Fl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Fl={data:Ba,props:ct,emits:ct,methods:ct,computed:ct,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:ct,directives:ct,watch:Rl,provide:Ba,inject:Ll};function Ba(e,t){return t?e?function(){return ue(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Ll(e,t){return ct(Nr(e),Nr(t))}function Nr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function ct(e,t){return e?ue(ue(Object.create(null),e),t):t}function Rl(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Dl(e,t,n,r=!1){const a={},i={};Dn(i,ar,1),e.propsDefaults=Object.create(null),vo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(Zn(e.emitsOptions,h))continue;const w=t[h];if(l)if(z(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const M=Mt(h);a[M]=Fr(l,s,M,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{vo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=Rt(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m))&&(delete i[m],c=!0)}c&&Ye(e,"set","$attrs")}function vo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Tn(l))continue;const c=t[l];let d;a&&z(a,d=Mt(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(a,l,m,c[m],e,!z(c,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ft(a),r=c[n]=l.call(null,t),xt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[h,w]=bo(m,t,!0);ue(o,h),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Z(e)&&r.set(e,Ot),Ot;if(N(i))for(let d=0;d<i.length;d++){const m=Mt(i[d]);Wa(m)&&(o[m]=J)}else if(i)for(const d in i){const m=Mt(d);if(Wa(m)){const h=i[d],w=o[m]=N(h)||R(h)?{type:h}:Object.assign({},h);if(w){const M=Xa(Boolean,w.type),C=Xa(String,w.type);w[0]=M>-1,w[1]=C<0||M<C,(M>-1||z(w,"default"))&&s.push(m)}}}const c=[o,s];return Z(e)&&r.set(e,c),c}function Wa(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Va(e,t){return Ka(e)===Ka(t)}function Xa(e,t){return N(t)?t.findIndex(n=>Va(n,e)):R(t)&&Va(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",ca=e=>N(e)?e.map(Re):[Re(e)],Ul=(e,t,n)=>{if(t._n)return t;const r=ll((...a)=>ca(t(...a)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(yo(a))continue;const i=e[a];if(R(i))t[a]=Ul(a,i,r);else if(i!=null){const o=ca(i);t[a]=()=>o}}},_o=(e,t)=>{const n=ca(t);e.slots.default=()=>n},$l=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Dn(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&_o(e,t);Dn(e.slots,ar,1)},zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ue(a,t),!n&&s===1&&delete a._):(i=!t.$stable,xo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!yo(s)&&!(s in o)&&delete a[s]};function wo(){return{app:null,config:{isNativeTag:us,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hl=0;function Yl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=wo(),o=new Set;let s=!1;const l=i.app={_uid:Hl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...d)):R(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const h=yt(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,ir(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Lr(e,t,n,r,a=!1){if(N(e)){e.forEach((h,w)=>Lr(h,t&&(N(t)?t[w]:t),n,r,a));return}if(Nn(r)&&!a)return;const i=r.shapeFlag&4?ir(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(se(c)?(d[c]=null,z(m,c)&&(m[c]=null)):ce(c)&&(c.value=null)),R(l))Ze(l,s,12,[o,d]);else{const h=se(l),w=ce(l);if(h||w){const M=()=>{if(e.f){const C=h?z(m,l)?m[l]:d[l]:l.value;a?N(C)&&Gr(C,i):N(C)?C.includes(i)||C.push(i):h?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,z(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,pe(M,n)):M()}}}const pe=pl;function Bl(e){return Wl(e)}function Wl(e,t){const n=vs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:w=Te,insertStaticContent:M}=e,C=(f,u,p,v=null,g=null,x=null,k=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!dt(f,u)&&(v=mn(f),Se(f,g,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:E}=u;switch(b){case rr:U(f,u,p,v);break;case He:L(f,u,p,v);break;case vr:f==null&&H(u,p,v,k);break;case Le:Ie(f,u,p,v,g,x,k,y,_);break;default:E&1?Y(f,u,p,v,g,x,k,y,_):E&6?Ue(f,u,p,v,g,x,k,y,_):(E&64||E&128)&&b.process(f,u,p,v,g,x,k,y,_,kt)}T!=null&&g&&Lr(T,f&&f.ref,x,u||f,!u)},U=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},L=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},H=(f,u,p,v)=>{[f.el,f.anchor]=M(f.children,u,p,v,f.el,f.anchor)},P=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},D=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},Y=(f,u,p,v,g,x,k,y,_)=>{k=k||u.type==="svg",f==null?le(u,p,v,g,x,k,y,_):$(f,u,g,x,k,y,_)},le=(f,u,p,v,g,x,k,y)=>{let _,b;const{type:T,props:E,shapeFlag:I,transition:F,dirs:j}=f;if(_=f.el=o(f.type,x,E&&E.is,E),I&8?d(_,f.children):I&16&&S(f.children,_,null,v,g,x&&T!=="foreignObject",k,y),j&&lt(f,null,v,"created"),ie(_,f,f.scopeId,k,v),E){for(const K in E)K!=="value"&&!Tn(K)&&i(_,K,null,E[K],x,f.children,v,g,$e);"value"in E&&i(_,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Ne(b,v,f)}j&&lt(f,null,v,"beforeMount");const X=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;X&&F.beforeEnter(_),r(_,u,p),((b=E&&E.onVnodeMounted)||X||j)&&pe(()=>{b&&Ne(b,v,f),X&&F.enter(_),j&&lt(f,null,v,"mounted")},g)},ie=(f,u,p,v,g)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(g){let x=g.subTree;if(u===x){const k=g.vnode;ie(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},S=(f,u,p,v,g,x,k,y,_=0)=>{for(let b=_;b<f.length;b++){const T=f[b]=y?Ge(f[b]):Re(f[b]);C(null,T,u,p,v,g,x,k,y)}},$=(f,u,p,v,g,x,k)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:T}=u;_|=f.patchFlag&16;const E=f.props||J,I=u.props||J;let F;p&&ft(p,!1),(F=I.onVnodeBeforeUpdate)&&Ne(F,p,u,f),T&&lt(u,f,p,"beforeUpdate"),p&&ft(p,!0);const j=g&&u.type!=="foreignObject";if(b?W(f.dynamicChildren,b,y,p,v,j,x):k||V(f,u,y,null,p,v,j,x,!1),_>0){if(_&16)ge(y,u,E,I,p,v,g);else if(_&2&&E.class!==I.class&&i(y,"class",null,I.class,g),_&4&&i(y,"style",E.style,I.style,g),_&8){const X=u.dynamicProps;for(let K=0;K<X.length;K++){const ne=X[K],ke=E[ne],At=I[ne];(At!==ke||ne==="value")&&i(y,ne,ke,At,g,f.children,p,v,$e)}}_&1&&f.children!==u.children&&d(y,u.children)}else!k&&b==null&&ge(y,u,E,I,p,v,g);((F=I.onVnodeUpdated)||T)&&pe(()=>{F&&Ne(F,p,u,f),T&&lt(u,f,p,"updated")},v)},W=(f,u,p,v,g,x,k)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],T=_.el&&(_.type===Le||!dt(_,b)||_.shapeFlag&70)?m(_.el):p;C(_,b,T,null,v,g,x,k,!0)}},ge=(f,u,p,v,g,x,k)=>{if(p!==v){if(p!==J)for(const y in p)!Tn(y)&&!(y in v)&&i(f,y,p[y],null,k,u.children,g,x,$e);for(const y in v){if(Tn(y))continue;const _=v[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,k,u.children,g,x,$e)}"value"in v&&i(f,"value",p.value,v.value)}},Ie=(f,u,p,v,g,x,k,y,_)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,v),r(T,p,v),S(u.children,p,T,g,x,k,y,_)):E>0&&E&64&&I&&f.dynamicChildren?(W(f.dynamicChildren,I,p,g,x,k,y),(u.key!=null||g&&u===g.subTree)&&ko(f,u,!0)):V(f,u,p,T,g,x,k,y,_)},Ue=(f,u,p,v,g,x,k,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,k,_):zt(u,p,v,g,x,k,_):Ca(f,u,_)},zt=(f,u,p,v,g,x,k)=>{const y=f.component=of(f,v,g);if(tr(f)&&(y.ctx.renderer=kt),lf(y),y.asyncDep){if(g&&g.registerDep(y,de),!f.el){const _=y.subTree=yt(He);L(null,_,u,p)}return}de(y,f,u,p,g,x,k)},Ca=(f,u,p)=>{const v=u.component=f.component;if(ul(f,u,p))if(v.asyncDep&&!v.asyncResolved){ee(v,u,p);return}else v.next=u,nl(v.update),v.update();else u.el=f.el,v.vnode=u},de=(f,u,p,v,g,x,k)=>{const y=()=>{if(f.isMounted){let{next:T,bu:E,u:I,parent:F,vnode:j}=f,X=T,K;ft(f,!1),T?(T.el=j.el,ee(f,T,k)):T=j,E&&In(E),(K=T.props&&T.props.onVnodeBeforeUpdate)&&Ne(K,F,T,j),ft(f,!0);const ne=mr(f),ke=f.subTree;f.subTree=ne,C(ke,ne,m(ke.el),mn(ke),f,g,x),T.el=ne.el,X===null&&dl(f,ne.el),I&&pe(I,g),(K=T.props&&T.props.onVnodeUpdated)&&pe(()=>Ne(K,F,T,j),g)}else{let T;const{el:E,props:I}=u,{bm:F,m:j,parent:X}=f,K=Nn(u);if(ft(f,!1),F&&In(F),!K&&(T=I&&I.onVnodeBeforeMount)&&Ne(T,X,u),ft(f,!0),E&&ur){const ne=()=>{f.subTree=mr(f),ur(E,f.subTree,f,g,null)};K?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=mr(f);C(null,ne,p,v,f,g,x),u.el=ne.el}if(j&&pe(j,g),!K&&(T=I&&I.onVnodeMounted)){const ne=u;pe(()=>Ne(T,X,ne),g)}(u.shapeFlag&256||X&&Nn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&pe(f.a,g),f.isMounted=!0,u=p=v=null}},_=f.effect=new ea(y,()=>la(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,ft(f,!0),b()},ee=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,jl(f,u.props,v,p),zl(f,u.children,p),Dt(),$a(),jt()},V=(f,u,p,v,g,x,k,y,_=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,E=u.children,{patchFlag:I,shapeFlag:F}=u;if(I>0){if(I&128){dn(b,E,p,v,g,x,k,y,_);return}else if(I&256){it(b,E,p,v,g,x,k,y,_);return}}F&8?(T&16&&$e(b,g,x),E!==b&&d(p,E)):T&16?F&16?dn(b,E,p,v,g,x,k,y,_):$e(b,g,x,!0):(T&8&&d(p,""),F&16&&S(E,p,v,g,x,k,y,_))},it=(f,u,p,v,g,x,k,y,_)=>{f=f||Ot,u=u||Ot;const b=f.length,T=u.length,E=Math.min(b,T);let I;for(I=0;I<E;I++){const F=u[I]=_?Ge(u[I]):Re(u[I]);C(f[I],F,p,null,g,x,k,y,_)}b>T?$e(f,g,x,!0,!1,E):S(u,p,v,g,x,k,y,_,E)},dn=(f,u,p,v,g,x,k,y,_)=>{let b=0;const T=u.length;let E=f.length-1,I=T-1;for(;b<=E&&b<=I;){const F=f[b],j=u[b]=_?Ge(u[b]):Re(u[b]);if(dt(F,j))C(F,j,p,null,g,x,k,y,_);else break;b++}for(;b<=E&&b<=I;){const F=f[E],j=u[I]=_?Ge(u[I]):Re(u[I]);if(dt(F,j))C(F,j,p,null,g,x,k,y,_);else break;E--,I--}if(b>E){if(b<=I){const F=I+1,j=F<T?u[F].el:v;for(;b<=I;)C(null,u[b]=_?Ge(u[b]):Re(u[b]),p,j,g,x,k,y,_),b++}}else if(b>I)for(;b<=E;)Se(f[b],g,x,!0),b++;else{const F=b,j=b,X=new Map;for(b=j;b<=I;b++){const ve=u[b]=_?Ge(u[b]):Re(u[b]);ve.key!=null&&X.set(ve.key,b)}let K,ne=0;const ke=I-j+1;let At=!1,Pa=0;const Ht=new Array(ke);for(b=0;b<ke;b++)Ht[b]=0;for(b=F;b<=E;b++){const ve=f[b];if(ne>=ke){Se(ve,g,x,!0);continue}let Me;if(ve.key!=null)Me=X.get(ve.key);else for(K=j;K<=I;K++)if(Ht[K-j]===0&&dt(ve,u[K])){Me=K;break}Me===void 0?Se(ve,g,x,!0):(Ht[Me-j]=b+1,Me>=Pa?Pa=Me:At=!0,C(ve,u[Me],p,null,g,x,k,y,_),ne++)}const Ta=At?Kl(Ht):Ot;for(K=Ta.length-1,b=ke-1;b>=0;b--){const ve=j+b,Me=u[ve],Ia=ve+1<T?u[ve+1].el:v;Ht[b]===0?C(null,Me,p,Ia,g,x,k,y,_):At&&(K<0||b!==Ta[K]?ot(Me,p,Ia,2):K--)}}},ot=(f,u,p,v,g=null)=>{const{el:x,type:k,transition:y,children:_,shapeFlag:b}=f;if(b&6){ot(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){k.move(f,u,p,kt);return}if(k===Le){r(x,u,p);for(let E=0;E<_.length;E++)ot(_[E],u,p,v);r(f.anchor,u,p);return}if(k===vr){P(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),pe(()=>y.enter(x),g);else{const{leave:E,delayLeave:I,afterLeave:F}=y,j=()=>r(x,u,p),X=()=>{E(x,()=>{j(),F&&F()})};I?I(x,j,X):X()}else r(x,u,p)},Se=(f,u,p,v=!1,g=!1)=>{const{type:x,props:k,ref:y,children:_,dynamicChildren:b,shapeFlag:T,patchFlag:E,dirs:I}=f;if(y!=null&&Lr(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&I,j=!Nn(f);let X;if(j&&(X=k&&k.onVnodeBeforeUnmount)&&Ne(X,u,f),T&6)ns(f.component,p,v);else{if(T&128){f.suspense.unmount(p,v);return}F&&lt(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,g,kt,v):b&&(x!==Le||E>0&&E&64)?$e(b,u,p,!1,!0):(x===Le&&E&384||!g&&T&16)&&$e(_,u,p),v&&Ea(f)}(j&&(X=k&&k.onVnodeUnmounted)||F)&&pe(()=>{X&&Ne(X,u,f),F&&lt(f,null,u,"unmounted")},p)},Ea=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===Le){ts(p,v);return}if(u===vr){D(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:y}=g,_=()=>k(p,x);y?y(f.el,x,_):_()}else x()},ts=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},ns=(f,u,p)=>{const{bum:v,scope:g,update:x,subTree:k,um:y}=f;v&&In(v),g.stop(),x&&(x.active=!1,Se(k,f,u,p)),y&&pe(y,u),pe(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$e=(f,u,p,v=!1,g=!1,x=0)=>{for(let k=x;k<f.length;k++)Se(f[k],u,p,v,g)},mn=f=>f.shapeFlag&6?mn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Oa=(f,u,p)=>{f==null?u._vnode&&Se(u._vnode,null,null,!0):C(u._vnode||null,f,u,null,null,null,p),$a(),ao(),u._vnode=f},kt={p:C,um:Se,m:ot,r:Ea,mt:zt,mc:S,pc:V,pbc:W,n:mn,o:e};let cr,ur;return t&&([cr,ur]=t(kt)),{render:Oa,hydrate:cr,createApp:Yl(Oa,cr)}}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ko(e,t,n=!1){const r=e.children,a=t.children;if(N(r)&&N(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||ko(o,s)),s.type===rr&&(s.el=o.el)}}function Kl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vl=e=>e.__isTeleport,Le=Symbol(void 0),rr=Symbol(void 0),He=Symbol(void 0),vr=Symbol(void 0),Kt=[];let Oe=null;function Xl(e=!1){Kt.push(Oe=e?null:[])}function ql(){Kt.pop(),Oe=Kt[Kt.length-1]||null}let en=1;function qa(e){en+=e}function Jl(e){return e.dynamicChildren=en>0?Oe||Ot:null,ql(),en>0&&Oe&&Oe.push(e),e}function Gl(e,t,n,r,a,i){return Jl(q(e,t,n,r,a,i,!0))}function Ql(e){return e?e.__v_isVNode===!0:!1}function dt(e,t){return e.type===t.type&&e.key===t.key}const ar="__vInternal",Ao=({key:e})=>e??null,Fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?se(e)||ce(e)||R(e)?{i:_e,r:e,k:t,f:!!n}:e:null;function q(e,t=null,n=null,r=0,a=null,i=e===Le?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&Fn(t),scopeId:er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:_e};return s?(ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),en>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const yt=Zl;function Zl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Il)&&(e=He),Ql(e)){const s=tt(e,t,!0);return n&&ua(s,n),en>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(df(e)&&(e=e.__vccOpts),t){t=ef(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=xe(s)),Z(l)&&(Ji(l)&&!N(l)&&(l=ue({},l)),t.style=qr(l))}const o=se(e)?1:ml(e)?128:Vl(e)?64:Z(e)?4:R(e)?2:0;return q(e,t,n,r,a,o,i,!0)}function ef(e){return e?Ji(e)||ar in e?ue({},e):e:null}function tt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?nf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ao(s),ref:t&&t.ref?n&&a?N(a)?a.concat(Fn(t)):[a,Fn(t)]:Fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tt(e.ssContent),ssFallback:e.ssFallback&&tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function tf(e=" ",t=0){return yt(rr,null,e,t)}function Re(e){return e==null||typeof e=="boolean"?yt(He):N(e)?yt(Le,null,e.slice()):typeof e=="object"?Ge(e):yt(rr,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tt(e)}function ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ar in t)?t._ctx=_e:a===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[tf(t)]):n=8);e.children=t,e.shapeFlag|=n}function nf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=xe([t.class,r.class]));else if(a==="style")t.style=qr([t.style,r.style]);else if(Xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(N(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){we(e,t,7,[n,r])}const rf=wo();let af=0;function of(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||rf,i={uid:af++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:oo(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let re=null;const sf=()=>re||_e,Ft=e=>{re=e,e.scope.on()},xt=()=>{re&&re.scope.off(),re=null};function Co(e){return e.vnode.shapeFlag&4}let tn=!1;function lf(e,t=!1){tn=t;const{props:n,children:r}=e.vnode,a=Co(e);Dl(e,n,a,t),$l(e,r);const i=a?ff(e,t):void 0;return tn=!1,i}function ff(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gi(new Proxy(e.ctx,Sl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?uf(e):null;Ft(e),Dt();const i=Ze(r,e,0,[e.props,a]);if(jt(),xt(),Li(i)){if(i.then(xt,xt),t)return i.then(o=>{Ja(e,o,t)}).catch(o=>{Qn(o,e,0)});e.asyncDep=i}else Ja(e,i,t)}else Eo(e,t)}function Ja(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=eo(t)),Eo(e,n)}let Ga;function Eo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||fa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ue(ue({isCustomElement:i,delimiters:s},o),l);r.render=Ga(a,c)}}e.render=r.render||Te}Ft(e),Dt(),Ml(e),jt(),xt()}function cf(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function uf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=cf(e))},slots:e.slots,emit:e.emit,expose:t}}function ir(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}}))}function df(e){return R(e)&&"__vccOpts"in e}const Oo=(e,t)=>Qs(e,t,tn),mf=Symbol(""),pf=()=>Sn(mf),hf="3.2.47",gf="http://www.w3.org/2000/svg",mt=typeof document<"u"?document:null,Qa=mt&&mt.createElement("template"),vf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(gf,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function bf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function yf(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&Rr(r,i,"");for(const i in n)Rr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Za=/\s*!important$/;function Rr(e,t,n){if(N(n))n.forEach(r=>Rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=xf(e,t);Za.test(n)?e.setProperty(Rt(r),n.replace(Za,""),"important"):e[r]=n}}const ei=["Webkit","Moz","ms"],br={};function xf(e,t){const n=br[t];if(n)return n;let r=Mt(t);if(r!=="filter"&&r in e)return br[t]=r;r=ji(r);for(let a=0;a<ei.length;a++){const i=ei[a]+r;if(i in e)return br[t]=i}return t}const ti="http://www.w3.org/1999/xlink";function _f(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n);else{const i=ls(t);n==null||i&&!Ni(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function wf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ni(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function pt(e,t,n,r){e.addEventListener(t,n,r)}function kf(e,t,n,r){e.removeEventListener(t,n,r)}function Af(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Cf(t);if(r){const c=i[t]=Pf(r,a);pt(e,s,c,l)}else o&&(kf(e,s,o,l),i[t]=void 0)}}const ni=/(?:Once|Passive|Capture)$/;function Cf(e){let t;if(ni.test(e)){t={};let r;for(;r=e.match(ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rt(e.slice(2)),t]}let yr=0;const Ef=Promise.resolve(),Of=()=>yr||(Ef.then(()=>yr=0),yr=Date.now());function Pf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;we(Tf(r,n.value),t,5,[r])};return n.value=e,n.attached=Of(),n}function Tf(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ri=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?bf(e,r,a):t==="style"?yf(e,n,r):Xn(t)?Jr(t)||Af(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?wf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_f(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ri.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ri.test(t)&&se(n)?!1:t in e}const Mf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yl.props;const Hn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>In(t,n):t};function Nf(e){e.target.composing=!0}function ai(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ii={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Hn(a);const i=r||a.props&&a.props.type==="number";pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=jn(s)),e._assign(s)}),n&&pt(e,"change",()=>{e.value=e.value.trim()}),t||(pt(e,"compositionstart",Nf),pt(e,"compositionend",ai),pt(e,"change",ai))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Hn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&jn(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Ff={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=qn(t);pt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?jn(Yn(o)):Yn(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=Hn(r)},mounted(e,{value:t}){oi(e,t)},beforeUpdate(e,t,n){e._assign=Hn(n)},updated(e,{value:t}){oi(e,t)}};function oi(e,t){const n=e.multiple;if(!(n&&!N(t)&&!qn(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Yn(i);if(n)N(t)?i.selected=cs(t,o)>-1:i.selected=t.has(o);else if(Vn(Yn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Yn(e){return"_value"in e?e._value:e.value}const Lf=ue({patchProp:If},vf);let si;function Rf(){return si||(si=Bl(Lf))}const Df=(...e)=>{const t=Rf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=jf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function jf(e){return se(e)?document.querySelector(e):e}const Uf="/log_in_test/assets/logo-277e0e97.svg",$f={account:"phone numer or e-mail address",password:"password",forgot:"Forgot password?",login:"log in",or:"or",have:"Don't have an account?",signUp:"Sign up",alert:"Sign in sucessfully!",error:"Wrong email or password!"},zf={account:"手機號碼或電子郵件地址",password:"密碼",forgot:"忘記密碼？",login:"登入",or:"或",have:"還沒有註冊嗎？",signUp:"註冊",alert:"登入成功 !",error:"帳號或密碼輸入錯誤 ! "},oe={en:$f,cn:zf};const Hf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Ut=e=>(ol("data-v-cc9cbded"),e=e(),sl(),e),Yf=Ut(()=>q("label",null,"Mode",-1)),Bf=["aria-checked"],Wf=Ut(()=>q("option",{value:"en"},"US",-1)),Kf=Ut(()=>q("option",{value:"cn"},"中文",-1)),Vf=[Wf,Kf],Xf=Ut(()=>q("img",{class:"logo",src:Uf,alt:"logo"},null,-1)),qf={class:"time"},Jf=["placeholder"],Gf=["placeholder"],Qf=Ut(()=>q("hr",null,null,-1)),Zf=Ut(()=>q("hr",null,null,-1)),ec={__name:"App",setup(e){const t=Ae(null),n=Ae(null),r=Ae("hide"),a=Ae(Date.now()),i=Ae("left"),o=Ae(!1),s=Ae(null),l=Ae(null),c=Ae(null),d=Ae(null),m=Ae("en");let h=oe[m.value].account,w=oe[m.value].password,M=oe[m.value].forgot,C=oe[m.value].login,U=oe[m.value].or,L=oe[m.value].have,H=oe[m.value].signUp,P=oe[m.value].alert,D=oe[m.value].error;Mn(m,S=>{h=oe[S].account,w=oe[S].password,M=oe[S].forgot,C=oe[S].login,U=oe[S].or,L=oe[S].have,H=oe[S].signUp,P=oe[S].alert,D=oe[S].error}),setInterval(()=>{a.value=Date.now()},1e3);const Y=Oo(()=>new Date(a.value).toString().slice(0,-8));function le(){t.value==="abc123"&&n.value==="abc123"?(r.value="hide",alert(P)):(r.value="show",t.value="",n.value="")}function ie(){o.value=!o.value,o.value?(i.value="right",s.value="blackmode_back",l.value="blackmode_button",c.value="blackmode_a",d.value="blackmode_p"):(i.value="left",s.value="",l.value="",c.value="",d.value="")}return(S,$)=>(Xl(),Gl("div",{class:xe(["back",s.value])},[q("nav",null,[Yf,q("button",{class:xe([l.value,"switch"]),type:"button",role:"switch","aria-checked":o.value,onClick:ie},[q("span",{class:xe(i.value)},"Ｏ",2)],10,Bf),hr(q("select",{"onUpdate:modelValue":$[0]||($[0]=W=>m.value=W)},Vf,512),[[Ff,m.value]])]),q("header",null,[Xf,q("p",qf,st(Fe(Y)),1)]),q("main",null,[q("section",null,[hr(q("input",{"onUpdate:modelValue":$[1]||($[1]=W=>t.value=W),type:"text",placeholder:Fe(h)},null,8,Jf),[[ii,t.value]]),hr(q("input",{"onUpdate:modelValue":$[2]||($[2]=W=>n.value=W),type:"text",placeholder:Fe(w)},null,8,Gf),[[ii,n.value]]),q("p",{class:xe(r.value)},st(Fe(D)),3),q("a",{href:"#",class:xe(c.value)},st(Fe(M)),3)]),q("button",{onClick:le,class:xe(l.value)},st(Fe(C)),3),q("div",null,[Qf,q("p",{class:xe(d.value)},st(Fe(U)),3),Zf]),q("div",null,[q("p",{class:xe(d.value)},st(Fe(L)),3),q("a",{class:xe(c.value)},st(Fe(H)),3)])])],2))}},tc=Hf(ec,[["__scopeId","data-v-cc9cbded"]]);function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function nc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return ic(e)||sc(e,t)||Po(e,t)||fc()}function fn(e){return ac(e)||oc(e)||Po(e)||lc()}function ac(e){if(Array.isArray(e))return Dr(e)}function ic(e){if(Array.isArray(e))return e}function oc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Po(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ma={},To={},Io=null,So={mark:ci,measure:ci};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(To=document),typeof MutationObserver<"u"&&(Io=MutationObserver),typeof performance<"u"&&(So=performance)}catch{}var cc=ma.navigator||{},ui=cc.userAgent,di=ui===void 0?"":ui,nt=ma,Q=To,mi=Io,xn=So;nt.document;var Xe=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Mo=~di.indexOf("MSIE")||~di.indexOf("Trident/"),_n,wn,kn,An,Cn,Be="___FONT_AWESOME___",jr=16,No="fa",Fo="svg-inline--fa",_t="data-fa-i2svg",Ur="data-fa-pseudo-element",uc="data-fa-pseudo-element-pending",pa="data-prefix",ha="data-icon",pi="fontawesome-i2svg",dc="async",mc=["HTML","HEAD","STYLE","SCRIPT"],Lo=function(){try{return!0}catch{return!1}}(),G="classic",te="sharp",ga=[G,te];function cn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var nn=cn((_n={},ae(_n,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(_n,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),_n)),rn=cn((wn={},ae(wn,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(wn,te,{solid:"fass",regular:"fasr",light:"fasl"}),wn)),an=cn((kn={},ae(kn,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(kn,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),kn)),pc=cn((An={},ae(An,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(An,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),An)),hc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ro="fa-layers-text",gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vc=cn((Cn={},ae(Cn,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Cn,te,{900:"fass",400:"fasr",300:"fasl"}),Cn)),Do=[1,2,3,4,5,6,7,8,9,10],bc=Do.concat([11,12,13,14,15,16,17,18,19,20]),yc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},on=new Set;Object.keys(rn[G]).map(on.add.bind(on));Object.keys(rn[te]).map(on.add.bind(on));var xc=[].concat(ga,fn(on),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY]).concat(Do.map(function(e){return"".concat(e,"x")})).concat(bc.map(function(e){return"w-".concat(e)})),Vt=nt.FontAwesomeConfig||{};function _c(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function wc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var kc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kc.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=wc(_c(n));a!=null&&(Vt[r]=a)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:No,replacementClass:Fo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vt.familyPrefix&&(Vt.cssPrefix=Vt.familyPrefix);var Lt=A(A({},jo),Vt);Lt.autoReplaceSvg||(Lt.observeMutations=!1);var O={};Object.keys(jo).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){Lt[e]=n,Xt.forEach(function(r){return r(O)})},get:function(){return Lt[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){Lt.cssPrefix=t,Xt.forEach(function(n){return n(O)})},get:function(){return Lt.cssPrefix}});nt.FontAwesomeConfig=O;var Xt=[];function Ac(e){return Xt.push(e),function(){Xt.splice(Xt.indexOf(e),1)}}var Je=jr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cc(e){if(!(!e||!Xe)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Q.head.insertBefore(t,r),e}}var Ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sn(){for(var e=12,t="";e-- >0;)t+=Ec[Math.random()*62|0];return t}function $t(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function va(e){return e.classList?$t(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Uo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Uo(e[n]),'" ')},"").trim()}function or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Pc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Tc(e){var t=e.transform,n=e.width,r=n===void 0?jr:n,a=e.height,i=a===void 0?jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Mo?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ic=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $o(){var e=No,t=Fo,n=O.cssPrefix,r=O.replacementClass,a=Ic;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function xr(){O.autoAddCss&&!hi&&(Cc($o()),hi=!0)}var Sc={mixout:function(){return{dom:{css:$o,insertCss:xr}}},hooks:function(){return{beforeDOMElementCreation:function(){xr()},beforeI2svg:function(){xr()}}}},We=nt||{};We[Be]||(We[Be]={});We[Be].styles||(We[Be].styles={});We[Be].hooks||(We[Be].hooks={});We[Be].shims||(We[Be].shims=[]);var Pe=We[Be],zo=[],Mc=function e(){Q.removeEventListener("DOMContentLoaded",e),Wn=1,zo.map(function(t){return t()})},Wn=!1;Xe&&(Wn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Wn||Q.addEventListener("DOMContentLoaded",Mc));function Nc(e){Xe&&(Wn?setTimeout(e,0):zo.push(e))}function un(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Uo(e):"<".concat(t," ").concat(Oc(r),">").concat(i.map(un).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},_r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Fc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Lc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function $r(e){var t=Lc(e);return t.length===1?t[0].toString(16):null}function Rc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function zr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Pe.hooks.addPack=="function"&&!a?Pe.hooks.addPack(e,vi(t)):Pe.styles[e]=A(A({},Pe.styles[e]||{}),i),e==="fas"&&zr("fa",t)}var En,On,Pn,Ct=Pe.styles,Dc=Pe.shims,jc=(En={},ae(En,G,Object.values(an[G])),ae(En,te,Object.values(an[te])),En),ya=null,Ho={},Yo={},Bo={},Wo={},Ko={},Uc=(On={},ae(On,G,Object.keys(nn[G])),ae(On,te,Object.keys(nn[te])),On);function $c(e){return~xc.indexOf(e)}function zc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!$c(a)?a:null}var Vo=function(){var t=function(i){return _r(Ct,function(o,s,l){return o[l]=_r(s,i,{}),o},{})};Ho=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Yo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ko=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ct||O.autoFetchSvg,r=_r(Dc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Bo=r.names,Wo=r.unicodes,ya=sr(O.styleDefault,{family:O.familyDefault})};Ac(function(e){ya=sr(e.styleDefault,{family:O.familyDefault})});Vo();function xa(e,t){return(Ho[e]||{})[t]}function Hc(e,t){return(Yo[e]||{})[t]}function vt(e,t){return(Ko[e]||{})[t]}function Xo(e){return Bo[e]||{prefix:null,iconName:null}}function Yc(e){var t=Wo[e],n=xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rt(){return ya}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,a=nn[r][e],i=rn[r][e]||rn[r][a],o=e in Pe.styles?e:null;return i||o||null}var bi=(Pn={},ae(Pn,G,Object.keys(an[G])),ae(Pn,te,Object.keys(an[te])),Pn);function lr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,G,"".concat(O.cssPrefix,"-").concat(G)),ae(t,te,"".concat(O.cssPrefix,"-").concat(te)),t),o=null,s=G;(e.includes(i[G])||e.some(function(c){return bi[G].includes(c)}))&&(s=G),(e.includes(i[te])||e.some(function(c){return bi[te].includes(c)}))&&(s=te);var l=e.reduce(function(c,d){var m=zc(O.cssPrefix,d);if(Ct[d]?(d=jc[s].includes(d)?pc[s][d]:d,o=d,c.prefix=d):Uc[s].indexOf(d)>-1?(o=d,c.prefix=sr(d,{family:s})):m?c.iconName=m:d!==O.replacementClass&&d!==i[G]&&d!==i[te]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=o==="fa"?Xo(c.iconName):{},w=vt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Ct.far&&Ct.fas&&!O.autoFetchSvg&&(c.prefix="fas")}return c},_a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(Ct.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=vt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=rt()||"fas"),l}var Bc=function(){function e(){nc(this,e),this.definitions={}}return rc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),zr(s,o[s]);var l=an[G][s];l&&zr(l,o[s]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),yi=[],Et={},St={},Wc=Object.keys(St);function Kc(e,t){var n=t.mixoutsTo;return yi=e,Et={},Object.keys(St).forEach(function(r){Wc.indexOf(r)===-1&&delete St[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Et[o]||(Et[o]=[]),Et[o].push(i[o])})}r.provides&&r.provides(St)}),n}function Hr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Et[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Et[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return St[e]?St[e].apply(null,t):void 0}function Yr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rt();if(t)return t=vt(n,t)||t,gi(qo.definitions,n,t)||gi(Pe.styles,n,t)}var qo=new Bc,Vc=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,wt("noAuto")},Xc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(wt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,Nc(function(){Jc({autoReplaceSvgRoot:n}),wt("watch",t)})}},qc={icon:function(t){if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=sr(t[0]);return{prefix:r,iconName:vt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(hc))){var a=lr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||rt(),iconName:vt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=rt();return{prefix:i,iconName:vt(i,t)||t}}}},be={noAuto:Vc,config:O,dom:Xc,parse:qc,library:qo,findIconDefinition:Yr,toHtml:un},Jc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Pe.styles).length>0||O.autoFetchSvg)&&Xe&&O.autoReplaceSvg&&be.dom.i2svg({node:r})};function fr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return un(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Xe){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ba(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=or(A(A({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Qc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,M=r.found?r:n,C=M.width,U=M.height,L=a==="fak",H=[O.replacementClass,i?"".concat(O.cssPrefix,"-").concat(i):""].filter(function($){return m.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(m.classes).join(" "),P={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:H,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(U)})},D=L&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/U*16*.0625,"em")}:{};w&&(P.attributes[_t]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(d||sn())},children:[l]}),delete P.attributes.title);var Y=A(A({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:A(A({},D),m.styles)}),le=r.found&&n.found?Ke("generateAbstractMask",Y)||{children:[],attributes:{}}:Ke("generateAbstractIcon",Y)||{children:[],attributes:{}},ie=le.children,S=le.attributes;return Y.children=ie,Y.attributes=S,s?Qc(Y):Gc(Y)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[_t]="");var d=A({},o.styles);ba(a)&&(d.transform=Tc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=or(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Zc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wr=Pe.styles;function Br(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var eu={found:!1,width:512,height:512};function tu(e,t){!Lo&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wr(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=rt()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=Xo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&wr[t]&&wr[t][e]){var o=wr[t][e];return r(Br(o))}tu(e,t),r(A(A({},eu),{},{icon:O.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var _i=function(){},Kr=O.measurePerformance&&xn&&xn.mark&&xn.measure?xn:{mark:_i,measure:_i},Bt='FA "6.4.0"',nu=function(t){return Kr.mark("".concat(Bt," ").concat(t," begins")),function(){return Jo(t)}},Jo=function(t){Kr.mark("".concat(Bt," ").concat(t," ends")),Kr.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},ka={begin:nu,end:Jo},Ln=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(_t):null;return typeof t=="string"}function ru(e){var t=e.getAttribute?e.getAttribute(pa):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function au(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function iu(){if(O.autoReplaceSvg===!0)return Rn.replace;var e=Rn[O.autoReplaceSvg];return e||Rn.replace}function ou(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function su(e){return Q.createElement(e)}function Go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ou:su:n;if(typeof e=="string")return Q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Go(o,{ceFn:r}))}),a}function lu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Go(a),n)}),n.getAttribute(_t)===null&&O.keepOriginalSource){var r=Q.createComment(lu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~va(n).indexOf(O.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===O.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return un(s)}).join(`
`);n.setAttribute(_t,""),n.innerHTML=o}};function ki(e){e()}function Qo(e,t){var n=typeof t=="function"?t:Ln;if(e.length===0)n();else{var r=ki;O.mutateApproach===dc&&(r=nt.requestAnimationFrame||ki),r(function(){var a=iu(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function Zo(){Aa=!0}function Vr(){Aa=!1}var Kn=null;function Ai(e){if(mi&&O.observeMutations){var t=e.treeCallback,n=t===void 0?Ln:t,r=e.nodeCallback,a=r===void 0?Ln:r,i=e.pseudoElementsCallback,o=i===void 0?Ln:i,s=e.observeMutationsRoot,l=s===void 0?Q:s;Kn=new mi(function(c){if(!Aa){var d=rt();$t(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(O.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&O.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~yc.indexOf(m.attributeName))if(m.attributeName==="class"&&ru(m.target)){var h=lr(va(m.target)),w=h.prefix,M=h.iconName;m.target.setAttribute(pa,w||d),M&&m.target.setAttribute(ha,M)}else au(m.target)&&a(m.target)})}}),Xe&&Kn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fu(){Kn&&Kn.disconnect()}function cu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function uu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=lr(va(e));return a.prefix||(a.prefix=rt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Hc(a.prefix,e.innerText)||xa(a.prefix,$r(e.innerText))),!a.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function du(e){var t=$t(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uu(e),r=n.iconName,a=n.prefix,i=n.rest,o=du(e),s=Hr("parseNodeAttributes",{},e),l=t.styleParser?cu(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var pu=Pe.styles;function es(e){var t=O.autoReplaceSvg==="nest"?Ci(e,{styleParser:!1}):Ci(e);return~t.extra.classes.indexOf(Ro)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var at=new Set;ga.map(function(e){at.add("fa-".concat(e))});Object.keys(nn[G]).map(at.add.bind(at));Object.keys(nn[te]).map(at.add.bind(at));at=fn(at);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=O.autoFetchSvg?at:ga.map(function(d){return"fa-".concat(d)}).concat(Object.keys(pu));i.includes("fa")||i.push("fa");var o=[".".concat(Ro,":not([").concat(_t,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(_t,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=$t(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=s.reduce(function(d,m){try{var h=es(m);h&&d.push(h)}catch(w){Lo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){Qo(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;es(e).then(function(n){n&&Qo([n],t)})}function gu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var vu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,M=w===void 0?null:w,C=n.classes,U=C===void 0?[]:C,L=n.attributes,H=L===void 0?{}:L,P=n.styles,D=P===void 0?{}:P;if(t){var Y=t.prefix,le=t.iconName,ie=t.icon;return fr(A({type:"icon"},t),function(){return wt("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(h?H["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(M||sn()):(H["aria-hidden"]="true",H.focusable="false")),wa({icons:{main:Br(ie),mask:l?Br(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:le,transform:A(A({},je),a),symbol:o,title:h,maskId:d,titleId:M,extra:{attributes:H,styles:D,classes:U}})})}},bu={mixout:function(){return{icon:gu(vu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Q:r,i=n.callback,o=i===void 0?function(){}:i;return Ei(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,M){Promise.all([Wr(a,s),d.iconName?Wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var U=da(C,2),L=U[0],H=U[1];w([n,wa({icons:{main:L,mask:H},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=or(s);l.length>0&&(a.style=l);var c;return ba(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},yu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return fr({type:"layer"},function(){wt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(fn(i)).join(" ")},children:o}]})}}}},xu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return fr({type:"counter",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),Zc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(fn(s))}})})}}}},_u={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,w=h===void 0?{}:h;return fr({type:"text",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:A(A({},je),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(O.cssPrefix,"-layers-text")].concat(fn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Mo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return O.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},wu=new RegExp('"',"ug"),Oi=[1105920,1112319];function ku(e){var t=e.replace(wu,""),n=Rc(t,0),r=n>=Oi[0]&&n<=Oi[1],a=t.length===2?t[0]===t[1]:!1;return{value:$r(a?t[0]:t),isSecondary:r||a}}function Pi(e,t){var n="".concat(uc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=$t(e.children),o=i.filter(function(ie){return ie.getAttribute(Ur)===t})[0],s=nt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(gc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:G,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?rn[h][l[2].toLowerCase()]:vc[h][c],M=ku(m),C=M.value,U=M.isSecondary,L=l[0].startsWith("FontAwesome"),H=xa(w,C),P=H;if(L){var D=Yc(C);D.iconName&&D.prefix&&(H=D.iconName,w=D.prefix)}if(H&&!U&&(!o||o.getAttribute(pa)!==w||o.getAttribute(ha)!==P)){e.setAttribute(n,P),o&&e.removeChild(o);var Y=mu(),le=Y.extra;le.attributes[Ur]=t,Wr(H,w).then(function(ie){var S=wa(A(A({},Y),{},{icons:{main:ie,mask:_a()},prefix:w,iconName:P,extra:le,watchable:!0})),$=Q.createElement("svg");t==="::before"?e.insertBefore($,e.firstChild):e.appendChild($),$.outerHTML=S.map(function(W){return un(W)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Au(e){return Promise.all([Pi(e,"::before"),Pi(e,"::after")])}function Cu(e){return e.parentNode!==document.head&&!~mc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ur)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ti(e){if(Xe)return new Promise(function(t,n){var r=$t(e.querySelectorAll("*")).filter(Cu).map(Au),a=ka.begin("searchPseudoElements");Zo(),Promise.all(r).then(function(){a(),Vr(),t()}).catch(function(){a(),Vr(),n()})})}var Eu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ti,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Q:r;O.searchPseudoElements&&Ti(a)}}},Ii=!1,Ou={mixout:function(){return{dom:{unwatch:function(){Zo(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){Ai(Hr("mutationObserverCallbacks",{}))},noAuto:function(){fu()},watch:function(n){var r=n.observeMutationsRoot;Ii?Vr():Ai(Hr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Pu={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:h};return{tag:"g",attributes:A({},w.outer),children:[{tag:"g",attributes:A({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),w.path)}]}]}}}},kr={x:0,y:0,width:"100%",height:"100%"};function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Tu(e){return e.tag==="g"?e.children:[e]}var Iu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?lr(a.split(" ").map(function(o){return o.trim()})):_a();return i.prefix||(i.prefix=rt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,h=o.icon,w=Pc({transform:l,containerWidth:m,iconWidth:c}),M={tag:"rect",attributes:A(A({},kr),{},{fill:"white"})},C=d.children?{children:d.children.map(Mi)}:{},U={tag:"g",attributes:A({},w.inner),children:[Mi(A({tag:d.tag,attributes:A(A({},d.attributes),w.path)},C))]},L={tag:"g",attributes:A({},w.outer),children:[U]},H="mask-".concat(s||sn()),P="clip-".concat(s||sn()),D={tag:"mask",attributes:A(A({},kr),{},{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,L]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Tu(h)},D]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(H,")")},kr)}),{children:r,attributes:a}}}},Su={provides:function(t){var n=!1;nt.matchMedia&&(n=nt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Nu=[Sc,bu,yu,xu,_u,Eu,Ou,Pu,Iu,Su,Mu];Kc(Nu,{mixoutsTo:be});be.noAuto;be.config;be.library;be.dom;be.parse;be.findIconDefinition;be.toHtml;be.icon;be.layer;be.text;be.counter;Df(tc).mount("#app");
