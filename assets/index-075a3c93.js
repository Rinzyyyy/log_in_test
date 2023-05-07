(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function ea(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=oe(r)?hs(r):ea(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(oe(e))return e;if(J(e))return e}}const ds=/;(?![^(]*\))/g,ms=/:([^]+)/,ps=/\/\*.*?\*\//gs;function hs(e){const t={};return e.replace(ps,"").split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function de(e){let t="";if(oe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=de(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vs=Qr(gs);function Hi(e){return!!e||e===""}function bs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Gn(e[r],t[r]);return n}function Gn(e,t){if(e===t)return!0;let n=Da(e),r=Da(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Jt(e),r=Jt(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?bs(e,t):!1;if(n=J(e),r=J(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Gn(e[o],t[o]))return!1}}return String(e)===String(t)}function ys(e,t){return e.findIndex(n=>Gn(n,t))}const ft=e=>oe(e)?e:e==null?"":F(e)||J(e)&&(e.toString===Wi||!j(e.toString))?JSON.stringify(e,Bi,2):String(e),Bi=(e,t)=>t&&t.__v_isRef?Bi(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Qn(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!F(t)&&!Ki(t)?String(t):t,q={},Ct=[],Te=()=>{},xs=()=>!1,ws=/^on[^a-z]/,Zn=e=>ws.test(e),ta=e=>e.startsWith("onUpdate:"),pe=Object.assign,na=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_s=Object.prototype.hasOwnProperty,z=(e,t)=>_s.call(e,t),F=Array.isArray,Pt=e=>cn(e)==="[object Map]",Qn=e=>cn(e)==="[object Set]",Da=e=>cn(e)==="[object Date]",j=e=>typeof e=="function",oe=e=>typeof e=="string",Jt=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Yi=e=>J(e)&&j(e.then)&&j(e.catch),Wi=Object.prototype.toString,cn=e=>Wi.call(e),ks=e=>cn(e).slice(8,-1),Ki=e=>cn(e)==="[object Object]",ra=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},As=/-(\w)/g,Ue=er(e=>e.replace(As,(t,n)=>n?n.toUpperCase():"")),Os=/\B([A-Z])/g,Lt=er(e=>e.replace(Os,"-$1").toLowerCase()),tr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=er(e=>e?`on${tr(e)}`:""),Gt=(e,t)=>!Object.is(e,t),Mn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$n=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let za;const Es=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ee;class Cs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ps(e,t=Ee){t&&t.active&&t.effects.push(e)}function Ss(){return Ee}const aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qi=e=>(e.w&rt)>0,Xi=e=>(e.n&rt)>0,Is=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rt},Ts=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];qi(a)&&!Xi(a)?a.delete(e):t[n++]=a,a.w&=~rt,a.n&=~rt}t.length=n}},Pr=new WeakMap;let Ht=0,rt=1;const Sr=30;let Ce;const yt=Symbol(""),Ir=Symbol("");class ia{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ps(this,r)}run(){if(!this.active)return this.fn();let t=Ce,n=tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ce,Ce=this,tt=!0,rt=1<<++Ht,Ht<=Sr?Is(this):$a(this),this.fn()}finally{Ht<=Sr&&Ts(this),rt=1<<--Ht,Ce=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ce===this?this.deferStop=!0:this.active&&($a(this),this.onStop&&this.onStop(),this.active=!1)}}function $a(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tt=!0;const Vi=[];function jt(){Vi.push(tt),tt=!1}function Dt(){const e=Vi.pop();tt=e===void 0?!0:e}function be(e,t,n){if(tt&&Ce){let r=Pr.get(e);r||Pr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=aa()),Ji(a)}}function Ji(e,t){let n=!1;Ht<=Sr?Xi(e)||(e.n|=rt,n=!qi(e)):n=!e.has(Ce),n&&(e.add(Ce),Ce.deps.push(e))}function Ke(e,t,n,r,a,i){const o=Pr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ra(n)&&s.push(o.get("length")):(s.push(o.get(yt)),Pt(e)&&s.push(o.get(Ir)));break;case"delete":F(e)||(s.push(o.get(yt)),Pt(e)&&s.push(o.get(Ir)));break;case"set":Pt(e)&&s.push(o.get(yt));break}if(s.length===1)s[0]&&Tr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Tr(aa(l))}}function Tr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ua(r);for(const r of n)r.computed||Ua(r)}function Ua(e,t){(e!==Ce||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ns=Qr("__proto__,__v_isRef,__isVue"),Gi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Jt)),Ms=oa(),Fs=oa(!1,!0),Rs=oa(!0),Ha=Ls();function Ls(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){jt();const r=H(this)[t].apply(this,n);return Dt(),r}}),e}function js(e){const t=H(this);return be(t,"has",e),t.hasOwnProperty(e)}function oa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Qs:no:t?to:eo).get(r))return r;const o=F(r);if(!e){if(o&&z(Ha,a))return Reflect.get(Ha,a,i);if(a==="hasOwnProperty")return js}const s=Reflect.get(r,a,i);return(Jt(a)?Gi.has(a):Ns(a))||(e||be(r,"get",a),t)?s:fe(s)?o&&ra(a)?s:s.value:J(s)?e?ro(s):fa(s):s}}const Ds=Zi(),zs=Zi(!0);function Zi(e=!1){return function(n,r,a,i){let o=n[r];if(Nt(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!Un(a)&&!Nt(a)&&(o=H(o),a=H(a)),!F(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=F(n)&&ra(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Gt(a,o)&&Ke(n,"set",r,a):Ke(n,"add",r,a)),l}}function $s(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ke(e,"delete",t,void 0),r}function Us(e,t){const n=Reflect.has(e,t);return(!Jt(t)||!Gi.has(t))&&be(e,"has",t),n}function Hs(e){return be(e,"iterate",F(e)?"length":yt),Reflect.ownKeys(e)}const Qi={get:Ms,set:Ds,deleteProperty:$s,has:Us,ownKeys:Hs},Bs={get:Rs,set(e,t){return!0},deleteProperty(e,t){return!0}},Ys=pe({},Qi,{get:Fs,set:zs}),sa=e=>e,nr=e=>Reflect.getPrototypeOf(e);function vn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&be(a,"get",t),be(a,"get",i));const{has:o}=nr(a),s=r?sa:n?ua:Zt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function bn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&be(r,"has",e),be(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function yn(e,t=!1){return e=e.__v_raw,!t&&be(H(e),"iterate",yt),Reflect.get(e,"size",e)}function Ba(e){e=H(e);const t=H(this);return nr(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function Ya(e,t){t=H(t);const n=H(this),{has:r,get:a}=nr(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Gt(t,o)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function Wa(e){const t=H(this),{has:n,get:r}=nr(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ke(t,"delete",e,void 0),i}function Ka(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function xn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?sa:e?ua:Zt;return!e&&be(s,"iterate",yt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function wn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=Pt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?sa:t?ua:Zt;return!t&&be(i,"iterate",l?Ir:yt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function Ws(){const e={get(i){return vn(this,i)},get size(){return yn(this)},has:bn,add:Ba,set:Ya,delete:Wa,clear:Ka,forEach:xn(!1,!1)},t={get(i){return vn(this,i,!1,!0)},get size(){return yn(this)},has:bn,add:Ba,set:Ya,delete:Wa,clear:Ka,forEach:xn(!1,!0)},n={get(i){return vn(this,i,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:xn(!0,!1)},r={get(i){return vn(this,i,!0,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=wn(i,!1,!1),n[i]=wn(i,!0,!1),t[i]=wn(i,!1,!0),r[i]=wn(i,!0,!0)}),[e,n,t,r]}const[Ks,qs,Xs,Vs]=Ws();function la(e,t){const n=t?e?Vs:Xs:e?qs:Ks;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Js={get:la(!1,!1)},Gs={get:la(!1,!0)},Zs={get:la(!0,!1)},eo=new WeakMap,to=new WeakMap,no=new WeakMap,Qs=new WeakMap;function el(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(e){return e.__v_skip||!Object.isExtensible(e)?0:el(ks(e))}function fa(e){return Nt(e)?e:ca(e,!1,Qi,Js,eo)}function nl(e){return ca(e,!1,Ys,Gs,to)}function ro(e){return ca(e,!0,Bs,Zs,no)}function ca(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=tl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function St(e){return Nt(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function Un(e){return!!(e&&e.__v_isShallow)}function ao(e){return St(e)||Nt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function io(e){return zn(e,"__v_skip",!0),e}const Zt=e=>J(e)?fa(e):e,ua=e=>J(e)?ro(e):e;function oo(e){tt&&Ce&&(e=H(e),Ji(e.dep||(e.dep=aa())))}function so(e,t){e=H(e);const n=e.dep;n&&Tr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function xe(e){return rl(e,!1)}function rl(e,t){return fe(e)?e:new al(e,t)}class al{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:Zt(t)}get value(){return oo(this),this._value}set value(t){const n=this.__v_isShallow||Un(t)||Nt(t);t=n?t:H(t),Gt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Zt(t),so(this))}}function je(e){return fe(e)?e.value:e}const il={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function lo(e){return St(e)?e:new Proxy(e,il)}var fo;class ol{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[fo]=!1,this._dirty=!0,this.effect=new ia(t,()=>{this._dirty||(this._dirty=!0,so(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return oo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}fo="__v_isReadonly";function sl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new ol(r,a,i||!a,n)}function nt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){rr(i,t,n)}return a}function Ne(e,t,n,r){if(j(e)){const i=nt(e,t,n,r);return i&&Yi(i)&&i.catch(o=>{rr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ne(e[i],t,n,r));return a}function rr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,o,s]);return}}ll(e,n,a,r)}function ll(e,t,n,r=!0){console.error(e)}let Qt=!1,Nr=!1;const le=[];let ze=0;const It=[];let Ye=null,mt=0;const co=Promise.resolve();let da=null;function fl(e){const t=da||co;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=ze+1,n=le.length;for(;t<n;){const r=t+n>>>1;en(le[r])<e?t=r+1:n=r}return t}function ma(e){(!le.length||!le.includes(e,Qt&&e.allowRecurse?ze+1:ze))&&(e.id==null?le.push(e):le.splice(cl(e.id),0,e),uo())}function uo(){!Qt&&!Nr&&(Nr=!0,da=co.then(po))}function ul(e){const t=le.indexOf(e);t>ze&&le.splice(t,1)}function dl(e){F(e)?It.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?mt+1:mt))&&It.push(e),uo()}function qa(e,t=Qt?ze+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function mo(e){if(It.length){const t=[...new Set(It)];if(It.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>en(n)-en(r)),mt=0;mt<Ye.length;mt++)Ye[mt]();Ye=null,mt=0}}const en=e=>e.id==null?1/0:e.id,ml=(e,t)=>{const n=en(e)-en(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function po(e){Nr=!1,Qt=!0,le.sort(ml);const t=Te;try{for(ze=0;ze<le.length;ze++){const n=le[ze];n&&n.active!==!1&&nt(n,null,14)}}finally{ze=0,le.length=0,mo(),Qt=!1,da=null,(le.length||It.length)&&po()}}function pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(k=>oe(k)?k.trim():k)),m&&(a=n.map($n))}let s,l=r[s=vr(t)]||r[s=vr(Ue(t))];!l&&i&&(l=r[s=vr(Lt(t))]),l&&Ne(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ne(c,e,6,a)}}function ho(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=ho(c,t,!0);d&&(s=!0,pe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):pe(o,i),J(e)&&r.set(e,o),o)}function ar(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Lt(t))||z(e,t))}let Ae=null,ir=null;function Hn(e){const t=Ae;return Ae=e,ir=e&&e.type.__scopeId||null,t}function hl(e){ir=e}function gl(){ir=null}function vl(e,t=Ae,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ni(-1);const i=Hn(t);let o;try{o=e(...a)}finally{Hn(i),r._d&&ni(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:M,inheritAttrs:I}=e;let $,w;const C=Hn(e);try{if(n.shapeFlag&4){const L=a||r;$=De(d.call(L,L,m,i,k,v,M)),w=l}else{const L=t;$=De(L.length>1?L(i,{attrs:l,slots:s,emit:c}):L(i,null)),w=t.props?l:bl(l)}}catch(L){Kt.length=0,rr(L,e,1),$=me(tn)}let O=$;if(w&&I!==!1){const L=Object.keys(w),{shapeFlag:U}=O;L.length&&U&7&&(o&&L.some(ta)&&(w=yl(w,o)),O=Mt(O,w))}return n.dirs&&(O=Mt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),$=O,Hn(C),$}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},yl=(e,t)=>{const n={};for(const r in e)(!ta(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xa(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!ar(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Xa(r,o,c):!0:!!o;return!1}function Xa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ar(n,i))return!0}return!1}function wl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const _l=e=>e.__isSuspense;function kl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):dl(e)}function Al(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){const r=re||Ae;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const _n={};function Yt(e,t,n){return go(e,t,n)}function go(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=Ss()===(re==null?void 0:re.scope)?re:null;let l,c=!1,d=!1;if(fe(e)?(l=()=>e.value,c=Un(e)):St(e)?(l=()=>e,r=!0):F(e)?(d=!0,c=e.some(O=>St(O)||Un(O)),l=()=>e.map(O=>{if(fe(O))return O.value;if(St(O))return gt(O);if(j(O))return nt(O,s,2)})):j(e)?t?l=()=>nt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ne(e,s,3,[v])}:l=Te,t&&r){const O=l;l=()=>gt(O())}let m,v=O=>{m=w.onStop=()=>{nt(O,s,4)}},k;if(rn)if(v=Te,t?n&&Ne(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const O=kf();k=O.__watcherHandles||(O.__watcherHandles=[])}else return Te;let M=d?new Array(e.length).fill(_n):_n;const I=()=>{if(w.active)if(t){const O=w.run();(r||c||(d?O.some((L,U)=>Gt(L,M[U])):Gt(O,M)))&&(m&&m(),Ne(t,s,3,[O,M===_n?void 0:d&&M[0]===_n?[]:M,v]),M=O)}else w.run()};I.allowRecurse=!!t;let $;a==="sync"?$=I:a==="post"?$=()=>ve(I,s&&s.suspense):(I.pre=!0,s&&(I.id=s.uid),$=()=>ma(I));const w=new ia(l,$);t?n?I():M=w.run():a==="post"?ve(w.run.bind(w),s&&s.suspense):w.run();const C=()=>{w.stop(),s&&s.scope&&na(s.scope.effects,w)};return k&&k.push(C),C}function Ol(e,t,n){const r=this.proxy,a=oe(e)?e.includes(".")?vo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=re;Ft(this);const s=go(a,i.bind(r),n);return o?Ft(o):xt(),s}function vo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))gt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(Qn(e)||Pt(e))e.forEach(n=>{gt(n,t)});else if(Ki(e))for(const n in e)gt(e[n],t);return e}function pa(e){return j(e)?{setup:e,name:e.name}:e}const Rn=e=>!!e.type.__asyncLoader,bo=e=>e.type.__isKeepAlive;function El(e,t){yo(e,"a",t)}function Cl(e,t){yo(e,"da",t)}function yo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(or(t,r,n),n){let a=n.parent;for(;a&&a.parent;)bo(a.parent.vnode)&&Pl(r,t,n,a),a=a.parent}}function Pl(e,t,n,r){const a=or(t,e,r,!0);xo(()=>{na(r[t],a)},n)}function or(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;jt(),Ft(n);const s=Ne(t,n,e,o);return xt(),Dt(),s});return r?a.unshift(i):a.push(i),i}}const Je=e=>(t,n=re)=>(!rn||e==="sp")&&or(e,(...r)=>t(...r),n),Sl=Je("bm"),Il=Je("m"),Tl=Je("bu"),Nl=Je("u"),Ml=Je("bum"),xo=Je("um"),Fl=Je("sp"),Rl=Je("rtg"),Ll=Je("rtc");function jl(e,t=re){or("ec",e,t)}function yr(e,t){const n=Ae;if(n===null)return e;const r=fr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=q]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&gt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ct(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(jt(),Ne(l,n,8,[e.el,s,e,t]),Dt())}}const wo="components";function Dl(e,t){return $l(wo,e,!0,t)||e}const zl=Symbol();function $l(e,t,n=!0,r=!1){const a=Ae||re;if(a){const i=a.type;if(e===wo){const s=xf(i,!1);if(s&&(s===t||s===Ue(t)||s===tr(Ue(t))))return i}const o=Va(a[e]||i[e],t)||Va(a.appContext[e],t);return!o&&r?i:o}}function Va(e,t){return e&&(e[t]||e[Ue(t)]||e[tr(Ue(t))])}const Mr=e=>e?To(e)?fr(e)||e.proxy:Mr(e.parent):null,Wt=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mr(e.parent),$root:e=>Mr(e.root),$emit:e=>e.emit,$options:e=>ha(e),$forceUpdate:e=>e.f||(e.f=()=>ma(e.update)),$nextTick:e=>e.n||(e.n=fl.bind(e.proxy)),$watch:e=>Ol.bind(e)}),xr=(e,t)=>e!==q&&!e.__isScriptSetup&&z(e,t),Ul={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(xr(r,t))return o[t]=1,r[t];if(a!==q&&z(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&z(c,t))return o[t]=3,i[t];if(n!==q&&z(n,t))return o[t]=4,n[t];Fr&&(o[t]=0)}}const d=Wt[t];let m,v;if(d)return t==="$attrs"&&be(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&z(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return xr(a,t)?(a[t]=n,!0):r!==q&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&z(e,o)||xr(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(Wt,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Fr=!0;function Hl(e){const t=ha(e),n=e.proxy,r=e.ctx;Fr=!1,t.beforeCreate&&Ja(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:M,activated:I,deactivated:$,beforeDestroy:w,beforeUnmount:C,destroyed:O,unmounted:L,render:U,renderTracked:ee,renderTriggered:Q,errorCaptured:se,serverPrefetch:he,expose:te,inheritAttrs:ke,components:He,directives:Me,filters:pr}=t;if(c&&Bl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const W=o[G];j(W)&&(r[G]=W.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=fa(G))}if(Fr=!0,i)for(const G in i){const W=i[G],st=j(W)?W.bind(n,n):j(W.get)?W.get.bind(n,n):Te,hn=!j(W)&&j(W.set)?W.set.bind(n):Te,lt=we({get:st,set:hn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Fe=>lt.value=Fe})}if(s)for(const G in s)_o(s[G],r,n,G);if(l){const G=j(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{Al(W,G[W])})}d&&Ja(d,e,"c");function ce(G,W){F(W)?W.forEach(st=>G(st.bind(n))):W&&G(W.bind(n))}if(ce(Sl,m),ce(Il,v),ce(Tl,k),ce(Nl,M),ce(El,I),ce(Cl,$),ce(jl,se),ce(Ll,ee),ce(Rl,Q),ce(Ml,C),ce(xo,L),ce(Fl,he),F(te))if(te.length){const G=e.exposed||(e.exposed={});te.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:st=>n[W]=st})})}else e.exposed||(e.exposed={});U&&e.render===Te&&(e.render=U),ke!=null&&(e.inheritAttrs=ke),He&&(e.components=He),Me&&(e.directives=Me)}function Bl(e,t,n=Te,r=!1){F(e)&&(e=Rr(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=Fn(i.from||a,i.default,!0):o=Fn(i.from||a):o=Fn(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ja(e,t,n){Ne(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _o(e,t,n,r){const a=r.includes(".")?vo(n,r):()=>n[r];if(oe(e)){const i=t[e];j(i)&&Yt(a,i)}else if(j(e))Yt(a,e.bind(n));else if(J(e))if(F(e))e.forEach(i=>_o(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Yt(a,i,e)}}function ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Bn(l,c,o,!0)),Bn(l,t,o)),J(t)&&i.set(t,l),l}function Bn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Bn(e,i,n,!0),a&&a.forEach(o=>Bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Yl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Yl={data:Ga,props:dt,emits:dt,methods:dt,computed:dt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:dt,directives:dt,watch:Kl,provide:Ga,inject:Wl};function Ga(e,t){return t?e?function(){return pe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Wl(e,t){return dt(Rr(e),Rr(t))}function Rr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function dt(e,t){return e?pe(pe(Object.create(null),e),t):t}function Kl(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function ql(e,t,n,r=!1){const a={},i={};zn(i,lr,1),e.propsDefaults=Object.create(null),ko(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:nl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Xl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(ar(e.emitsOptions,v))continue;const k=t[v];if(l)if(z(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const M=Ue(v);a[M]=Lr(l,s,M,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{ko(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=Lt(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Lr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m))&&(delete i[m],c=!0)}c&&Ke(e,"set","$attrs")}function ko(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Nn(l))continue;const c=t[l];let d;a&&z(a,d=Ue(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:ar(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Lr(a,l,m,c[m],e,!z(c,m))}}return o}function Lr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ft(a),r=c[n]=l.call(null,t),xt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Lt(n))&&(r=!0))}return r}function Ao(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,k]=Ao(m,t,!0);pe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,Ct),Ct;if(F(i))for(let d=0;d<i.length;d++){const m=Ue(i[d]);Za(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Ue(d);if(Za(m)){const v=i[d],k=o[m]=F(v)||j(v)?{type:v}:Object.assign({},v);if(k){const M=ti(Boolean,k.type),I=ti(String,k.type);k[0]=M>-1,k[1]=I<0||M<I,(M>-1||z(k,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function Za(e){return e[0]!=="$"}function Qa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ei(e,t){return Qa(e)===Qa(t)}function ti(e,t){return F(t)?t.findIndex(n=>ei(n,e)):j(t)&&ei(t,e)?0:-1}const Oo=e=>e[0]==="_"||e==="$stable",ga=e=>F(e)?e.map(De):[De(e)],Vl=(e,t,n)=>{if(t._n)return t;const r=vl((...a)=>ga(t(...a)),n);return r._c=!1,r},Eo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Oo(a))continue;const i=e[a];if(j(i))t[a]=Vl(a,i,r);else if(i!=null){const o=ga(i);t[a]=()=>o}}},Co=(e,t)=>{const n=ga(t);e.slots.default=()=>n},Jl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),zn(t,"_",n)):Eo(t,e.slots={})}else e.slots={},t&&Co(e,t);zn(e.slots,lr,1)},Gl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Eo(t,a)),o=t}else t&&(Co(e,t),o={default:1});if(i)for(const s in a)!Oo(s)&&!(s in o)&&delete a[s]};function Po(){return{app:null,config:{isNativeTag:xs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zl=0;function Ql(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=Po(),o=new Set;let s=!1;const l=i.app={_uid:Zl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Af,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=me(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,fr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function jr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,k)=>jr(v,t&&(F(t)?t[k]:t),n,r,a));return}if(Rn(r)&&!a)return;const i=r.shapeFlag&4?fr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(oe(c)?(d[c]=null,z(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),j(l))nt(l,s,12,[o,d]);else{const v=oe(l),k=fe(l);if(v||k){const M=()=>{if(e.f){const I=v?z(m,l)?m[l]:d[l]:l.value;a?F(I)&&na(I,i):F(I)?I.includes(i)||I.push(i):v?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,z(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,ve(M,n)):M()}}}const ve=kl;function ef(e){return tf(e)}function tf(e,t){const n=Es();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Te,insertStaticContent:M}=e,I=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ut(f,u)&&(g=gn(f),Fe(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case sr:$(f,u,p,g);break;case tn:w(f,u,p,g);break;case wr:f==null&&C(u,p,g,A);break;case We:He(f,u,p,g,h,x,A,y,_);break;default:P&1?U(f,u,p,g,h,x,A,y,_):P&6?Me(f,u,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,_,kt)}T!=null&&h&&jr(T,f&&f.ref,x,u||f,!u)},$=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},w=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},C=(f,u,p,g)=>{[f.el,f.anchor]=M(f.children,u,p,g,f.el,f.anchor)},O=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},L=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ee(u,p,g,h,x,A,y,_):he(f,u,h,x,A,y,_)},ee=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:T,props:P,shapeFlag:N,transition:R,dirs:D}=f;if(_=f.el=o(f.type,x,P&&P.is,P),N&8?d(_,f.children):N&16&&se(f.children,_,null,g,h,x&&T!=="foreignObject",A,y),D&&ct(f,null,g,"created"),Q(_,f,f.scopeId,A,g),P){for(const Y in P)Y!=="value"&&!Nn(Y)&&i(_,Y,null,P[Y],x,f.children,g,h,Be);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Le(b,g,f)}D&&ct(f,null,g,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;K&&R.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||K||D)&&ve(()=>{b&&Le(b,g,f),K&&R.enter(_),D&&ct(f,null,g,"mounted")},h)},Q=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;Q(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},se=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const T=f[b]=y?et(f[b]):De(f[b]);I(null,T,u,p,g,h,x,A,y)}},he=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:T}=u;_|=f.patchFlag&16;const P=f.props||q,N=u.props||q;let R;p&&ut(p,!1),(R=N.onVnodeBeforeUpdate)&&Le(R,p,u,f),T&&ct(u,f,p,"beforeUpdate"),p&&ut(p,!0);const D=h&&u.type!=="foreignObject";if(b?te(f.dynamicChildren,b,y,p,g,D,x):A||W(f,u,y,null,p,g,D,x,!1),_>0){if(_&16)ke(y,u,P,N,p,g,h);else if(_&2&&P.class!==N.class&&i(y,"class",null,N.class,h),_&4&&i(y,"style",P.style,N.style,h),_&8){const K=u.dynamicProps;for(let Y=0;Y<K.length;Y++){const ne=K[Y],Oe=P[ne],At=N[ne];(At!==Oe||ne==="value")&&i(y,ne,Oe,At,h,f.children,p,g,Be)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&ke(y,u,P,N,p,g,h);((R=N.onVnodeUpdated)||T)&&ve(()=>{R&&Le(R,p,u,f),T&&ct(u,f,p,"updated")},g)},te=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],T=_.el&&(_.type===We||!Ut(_,b)||_.shapeFlag&70)?m(_.el):p;I(_,b,T,null,g,h,x,A,!0)}},ke=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==q)for(const y in p)!Nn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Be);for(const y in g){if(Nn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Be)}"value"in g&&i(f,"value",p.value,g.value)}},He=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,g),r(T,p,g),se(u.children,p,T,h,x,A,y,_)):P>0&&P&64&&N&&f.dynamicChildren?(te(f.dynamicChildren,N,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&So(f,u,!0)):W(f,u,p,T,h,x,A,y,_)},Me=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):pr(u,p,g,h,x,A,_):Na(f,u,_)},pr=(f,u,p,g,h,x,A)=>{const y=f.component=hf(f,g,h);if(bo(f)&&(y.ctx.renderer=kt),gf(y),y.asyncDep){if(h&&h.registerDep(y,ce),!f.el){const _=y.subTree=me(tn);w(null,_,u,p)}return}ce(y,f,u,p,h,x,A)},Na=(f,u,p)=>{const g=u.component=f.component;if(xl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,ul(g.update),g.update();else u.el=f.el,g.vnode=u},ce=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:N,parent:R,vnode:D}=f,K=T,Y;ut(f,!1),T?(T.el=D.el,G(f,T,A)):T=D,P&&Mn(P),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Le(Y,R,T,D),ut(f,!0);const ne=br(f),Oe=f.subTree;f.subTree=ne,I(Oe,ne,m(Oe.el),gn(Oe),f,h,x),T.el=ne.el,K===null&&wl(f,ne.el),N&&ve(N,h),(Y=T.props&&T.props.onVnodeUpdated)&&ve(()=>Le(Y,R,T,D),h)}else{let T;const{el:P,props:N}=u,{bm:R,m:D,parent:K}=f,Y=Rn(u);if(ut(f,!1),R&&Mn(R),!Y&&(T=N&&N.onVnodeBeforeMount)&&Le(T,K,u),ut(f,!0),P&&gr){const ne=()=>{f.subTree=br(f),gr(P,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=br(f);I(null,ne,p,g,f,h,x),u.el=ne.el}if(D&&ve(D,h),!Y&&(T=N&&N.onVnodeMounted)){const ne=u;ve(()=>Le(T,K,ne),h)}(u.shapeFlag&256||K&&Rn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&ve(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new ia(y,()=>ma(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,ut(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Xl(f,u.props,g,p),Gl(f,u.children,p),jt(),qa(),Dt()},W=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:N,shapeFlag:R}=u;if(N>0){if(N&128){hn(b,P,p,g,h,x,A,y,_);return}else if(N&256){st(b,P,p,g,h,x,A,y,_);return}}R&8?(T&16&&Be(b,h,x),P!==b&&d(p,P)):T&16?R&16?hn(b,P,p,g,h,x,A,y,_):Be(b,h,x,!0):(T&8&&d(p,""),R&16&&se(P,p,g,h,x,A,y,_))},st=(f,u,p,g,h,x,A,y,_)=>{f=f||Ct,u=u||Ct;const b=f.length,T=u.length,P=Math.min(b,T);let N;for(N=0;N<P;N++){const R=u[N]=_?et(u[N]):De(u[N]);I(f[N],R,p,null,h,x,A,y,_)}b>T?Be(f,h,x,!0,!1,P):se(u,p,g,h,x,A,y,_,P)},hn=(f,u,p,g,h,x,A,y,_)=>{let b=0;const T=u.length;let P=f.length-1,N=T-1;for(;b<=P&&b<=N;){const R=f[b],D=u[b]=_?et(u[b]):De(u[b]);if(Ut(R,D))I(R,D,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=N;){const R=f[P],D=u[N]=_?et(u[N]):De(u[N]);if(Ut(R,D))I(R,D,p,null,h,x,A,y,_);else break;P--,N--}if(b>P){if(b<=N){const R=N+1,D=R<T?u[R].el:g;for(;b<=N;)I(null,u[b]=_?et(u[b]):De(u[b]),p,D,h,x,A,y,_),b++}}else if(b>N)for(;b<=P;)Fe(f[b],h,x,!0),b++;else{const R=b,D=b,K=new Map;for(b=D;b<=N;b++){const ye=u[b]=_?et(u[b]):De(u[b]);ye.key!=null&&K.set(ye.key,b)}let Y,ne=0;const Oe=N-D+1;let At=!1,Ra=0;const $t=new Array(Oe);for(b=0;b<Oe;b++)$t[b]=0;for(b=R;b<=P;b++){const ye=f[b];if(ne>=Oe){Fe(ye,h,x,!0);continue}let Re;if(ye.key!=null)Re=K.get(ye.key);else for(Y=D;Y<=N;Y++)if($t[Y-D]===0&&Ut(ye,u[Y])){Re=Y;break}Re===void 0?Fe(ye,h,x,!0):($t[Re-D]=b+1,Re>=Ra?Ra=Re:At=!0,I(ye,u[Re],p,null,h,x,A,y,_),ne++)}const La=At?nf($t):Ct;for(Y=La.length-1,b=Oe-1;b>=0;b--){const ye=D+b,Re=u[ye],ja=ye+1<T?u[ye+1].el:g;$t[b]===0?I(null,Re,p,ja,h,x,A,y,_):At&&(Y<0||b!==La[Y]?lt(Re,p,ja,2):Y--)}}},lt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){lt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,kt);return}if(A===We){r(x,u,p);for(let P=0;P<_.length;P++)lt(_[P],u,p,g);r(f.anchor,u,p);return}if(A===wr){O(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ve(()=>y.enter(x),h);else{const{leave:P,delayLeave:N,afterLeave:R}=y,D=()=>r(x,u,p),K=()=>{P(x,()=>{D(),R&&R()})};N?N(x,D,K):K()}else r(x,u,p)},Fe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:N}=f;if(y!=null&&jr(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const R=T&1&&N,D=!Rn(f);let K;if(D&&(K=A&&A.onVnodeBeforeUnmount)&&Le(K,u,f),T&6)us(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}R&&ct(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,h,kt,g):b&&(x!==We||P>0&&P&64)?Be(b,u,p,!1,!0):(x===We&&P&384||!h&&T&16)&&Be(_,u,p),g&&Ma(f)}(D&&(K=A&&A.onVnodeUnmounted)||R)&&ve(()=>{K&&Le(K,u,f),R&&ct(f,null,u,"unmounted")},p)},Ma=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===We){cs(p,g);return}if(u===wr){L(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},cs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},us=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&Mn(g),h.stop(),x&&(x.active=!1,Fe(A,f,u,p)),y&&ve(y,u),ve(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Be=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Fe(f[A],u,p,g,h)},gn=f=>f.shapeFlag&6?gn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Fa=(f,u,p)=>{f==null?u._vnode&&Fe(u._vnode,null,null,!0):I(u._vnode||null,f,u,null,null,null,p),qa(),mo(),u._vnode=f},kt={p:I,um:Fe,m:lt,r:Ma,mt:pr,mc:se,pc:W,pbc:te,n:gn,o:e};let hr,gr;return t&&([hr,gr]=t(kt)),{render:Fa,hydrate:hr,createApp:Ql(Fa,hr)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function So(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=et(a[i]),s.el=o.el),n||So(o,s)),s.type===sr&&(s.el=o.el)}}function nf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const rf=e=>e.__isTeleport,We=Symbol(void 0),sr=Symbol(void 0),tn=Symbol(void 0),wr=Symbol(void 0),Kt=[];let Se=null;function af(e=!1){Kt.push(Se=e?null:[])}function of(){Kt.pop(),Se=Kt[Kt.length-1]||null}let nn=1;function ni(e){nn+=e}function sf(e){return e.dynamicChildren=nn>0?Se||Ct:null,of(),nn>0&&Se&&Se.push(e),e}function lf(e,t,n,r,a,i){return sf(B(e,t,n,r,a,i,!0))}function Dr(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const lr="__vInternal",Io=({key:e})=>e??null,Ln=({ref:e,ref_key:t,ref_for:n})=>e!=null?oe(e)||fe(e)||j(e)?{i:Ae,r:e,k:t,f:!!n}:e:null;function B(e,t=null,n=null,r=0,a=null,i=e===We?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Io(t),ref:t&&Ln(t),scopeId:ir,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ae};return s?(va(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=oe(n)?8:16),nn>0&&!o&&Se&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Se.push(l),l}const me=ff;function ff(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===zl)&&(e=tn),Dr(e)){const s=Mt(e,t,!0);return n&&va(s,n),nn>0&&!i&&Se&&(s.shapeFlag&6?Se[Se.indexOf(e)]=s:Se.push(s)),s.patchFlag|=-2,s}if(wf(e)&&(e=e.__vccOpts),t){t=cf(t);let{class:s,style:l}=t;s&&!oe(s)&&(t.class=de(s)),J(l)&&(ao(l)&&!F(l)&&(l=pe({},l)),t.style=ea(l))}const o=oe(e)?1:_l(e)?128:rf(e)?64:J(e)?4:j(e)?2:0;return B(e,t,n,r,a,o,i,!0)}function cf(e){return e?ao(e)||lr in e?pe({},e):e:null}function Mt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?df(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Io(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Ln(t)):[a,Ln(t)]:Ln(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==We?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function uf(e=" ",t=0){return me(sr,null,e,t)}function De(e){return e==null||typeof e=="boolean"?me(tn):F(e)?me(We,null,e.slice()):typeof e=="object"?et(e):me(sr,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function va(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),va(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(lr in t)?t._ctx=Ae:a===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[uf(t)]):n=8);e.children=t,e.shapeFlag|=n}function df(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=de([t.class,r.class]));else if(a==="style")t.style=ea([t.style,r.style]);else if(Zn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Le(e,t,n,r=null){Ne(e,t,7,[n,r])}const mf=Po();let pf=0;function hf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||mf,i={uid:pf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(r,a),emitsOptions:ho(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=pl.bind(null,i),e.ce&&e.ce(i),i}let re=null;const Ft=e=>{re=e,e.scope.on()},xt=()=>{re&&re.scope.off(),re=null};function To(e){return e.vnode.shapeFlag&4}let rn=!1;function gf(e,t=!1){rn=t;const{props:n,children:r}=e.vnode,a=To(e);ql(e,n,a,t),Jl(e,r);const i=a?vf(e,t):void 0;return rn=!1,i}function vf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=io(new Proxy(e.ctx,Ul));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?yf(e):null;Ft(e),jt();const i=nt(r,e,0,[e.props,a]);if(Dt(),xt(),Yi(i)){if(i.then(xt,xt),t)return i.then(o=>{ri(e,o,t)}).catch(o=>{rr(o,e,0)});e.asyncDep=i}else ri(e,i,t)}else No(e,t)}function ri(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=lo(t)),No(e,n)}let ai;function No(e,t,n){const r=e.type;if(!e.render){if(!t&&ai&&!r.render){const a=r.template||ha(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=ai(a,c)}}e.render=r.render||Te}Ft(e),jt(),Hl(e),Dt(),xt()}function bf(e){return new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}})}function yf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=bf(e))},slots:e.slots,emit:e.emit,expose:t}}function fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(lo(io(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}}))}function xf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function wf(e){return j(e)&&"__vccOpts"in e}const we=(e,t)=>sl(e,t,rn);function Mo(e,t,n){const r=arguments.length;return r===2?J(t)&&!F(t)?Dr(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dr(n)&&(n=[n]),me(e,t,n))}const _f=Symbol(""),kf=()=>Fn(_f),Af="3.2.47",Of="http://www.w3.org/2000/svg",pt=typeof document<"u"?document:null,ii=pt&&pt.createElement("template"),Ef={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?pt.createElementNS(Of,e):pt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ii.innerHTML=r?`<svg>${e}</svg>`:e;const s=ii.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pf(e,t,n){const r=e.style,a=oe(n);if(n&&!a){if(t&&!oe(t))for(const i in t)n[i]==null&&zr(r,i,"");for(const i in n)zr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const oi=/\s*!important$/;function zr(e,t,n){if(F(n))n.forEach(r=>zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Sf(e,t);oi.test(n)?e.setProperty(Lt(r),n.replace(oi,""),"important"):e[r]=n}}const si=["Webkit","Moz","ms"],_r={};function Sf(e,t){const n=_r[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return _r[t]=r;r=tr(r);for(let a=0;a<si.length;a++){const i=si[a]+r;if(i in e)return _r[t]=i}return t}const li="http://www.w3.org/1999/xlink";function If(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(li,t.slice(6,t.length)):e.setAttributeNS(li,t,n);else{const i=vs(t);n==null||i&&!Hi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Tf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Hi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function ht(e,t,n,r){e.addEventListener(t,n,r)}function Nf(e,t,n,r){e.removeEventListener(t,n,r)}function Mf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ff(t);if(r){const c=i[t]=jf(r,a);ht(e,s,c,l)}else o&&(Nf(e,s,o,l),i[t]=void 0)}}const fi=/(?:Once|Passive|Capture)$/;function Ff(e){let t;if(fi.test(e)){t={};let r;for(;r=e.match(fi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Lt(e.slice(2)),t]}let kr=0;const Rf=Promise.resolve(),Lf=()=>kr||(Rf.then(()=>kr=0),kr=Date.now());function jf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(Df(r,n.value),t,5,[r])};return n.value=e,n.attached=Lf(),n}function Df(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ci=/^on[a-z]/,zf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Cf(e,r,a):t==="style"?Pf(e,n,r):Zn(t)?ta(t)||Mf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$f(e,t,r,a))?Tf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),If(e,t,r,a))};function $f(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ci.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ci.test(t)&&oe(n)?!1:t in e}const Yn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Mn(t,n):t};function Uf(e){e.target.composing=!0}function ui(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const di={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Yn(a);const i=r||a.props&&a.props.type==="number";ht(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=$n(s)),e._assign(s)}),n&&ht(e,"change",()=>{e.value=e.value.trim()}),t||(ht(e,"compositionstart",Uf),ht(e,"compositionend",ui),ht(e,"change",ui))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Yn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&$n(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Hf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Qn(t);ht(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?$n(Wn(o)):Wn(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=Yn(r)},mounted(e,{value:t}){mi(e,t)},beforeUpdate(e,t,n){e._assign=Yn(n)},updated(e,{value:t}){mi(e,t)}};function mi(e,t){const n=e.multiple;if(!(n&&!F(t)&&!Qn(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Wn(i);if(n)F(t)?i.selected=ys(t,o)>-1:i.selected=t.has(o);else if(Gn(Wn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Wn(e){return"_value"in e?e._value:e.value}const Bf=pe({patchProp:zf},Ef);let pi;function Yf(){return pi||(pi=ef(Bf))}const Wf=(...e)=>{const t=Yf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Kf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Kf(e){return oe(e)?document.querySelector(e):e}const qf="/log_in_test/assets/logo-277e0e97.svg",Xf={account:"phone numer or e-mail address",password:"password",forgot:"Forgot password?",login:"log in",or:"or",have:"Don't have an account?",signUp:"Sign up",alert:"Sign in sucessfully!",error:"Wrong email or password!"},Vf={account:"手機號碼或電子郵件地址",password:"密碼",forgot:"忘記密碼？",login:"登入",or:"或",have:"還沒有註冊嗎？",signUp:"註冊",alert:"登入成功 !",error:"帳號或密碼輸入錯誤 ! "},ie={en:Xf,cn:Vf};const Jf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},un=e=>(hl("data-v-9871d801"),e=e(),gl(),e),Gf=["aria-checked"],Zf=un(()=>B("option",{value:"en"},"US",-1)),Qf=un(()=>B("option",{value:"cn"},"中文",-1)),ec=[Zf,Qf],tc={class:"arrow"},nc=un(()=>B("img",{class:"logo",src:qf,alt:"logo"},null,-1)),rc={class:"time"},ac=["placeholder"],ic=["placeholder"],oc=un(()=>B("hr",null,null,-1)),sc=un(()=>B("hr",null,null,-1)),lc={__name:"App",setup(e){const t=xe("en");let n=ie[t.value].account,r=ie[t.value].password,a=ie[t.value].forgot,i=ie[t.value].login,o=ie[t.value].or,s=ie[t.value].have,l=ie[t.value].signUp,c=ie[t.value].alert,d=ie[t.value].error;Yt(t,te=>{n=ie[te].account,r=ie[te].password,a=ie[te].forgot,i=ie[te].login,o=ie[te].or,s=ie[te].have,l=ie[te].signUp,c=ie[te].alert,d=ie[te].error});const m=xe(Date.now());setInterval(()=>{m.value=Date.now()},1e3);const v=we(()=>new Date(m.value).toLocaleString("en-US",{hour12:!1}).replace(",","_")),k=xe(null),M=xe(null),I=xe("hide");function $(){k.value==="abc123"&&M.value==="abc123"?(I.value="hide",alert(c)):(I.value="show",k.value="",M.value="")}const w=xe("left"),C=xe(!1),O=xe("hide"),L=xe("showSun"),U=xe(null),ee=xe(null),Q=xe(null),se=xe(null);function he(){C.value=!C.value,C.value?(w.value="right",L.value="hide",O.value="showMoon",U.value="blackmode_back",ee.value="blackmode_button",Q.value="blackmode_a",se.value="blackmode_p"):(w.value="left",L.value="showSun",O.value="hide",U.value="",ee.value="",Q.value="",se.value="")}return(te,ke)=>{const He=Dl("font-awesome-icon");return af(),lf("div",{class:de(["back",U.value])},[B("nav",null,[B("button",{class:de([ee.value,"switch"]),type:"button",role:"switch","aria-checked":C.value,onClick:he},[B("span",{class:de(L.value)},[me(He,{icon:["fass","sun"]})],2),B("span",{class:de(w.value)},"Ｏ",2),B("span",{class:de(O.value)},[me(He,{icon:["fass","moon"],size:"xs"})],2)],10,Gf),B("span",null,[me(He,{icon:["fass","globe"]})]),yr(B("select",{class:de(ee.value),"onUpdate:modelValue":ke[0]||(ke[0]=Me=>t.value=Me)},ec,2),[[Hf,t.value]]),B("span",tc,[me(He,{icon:["fas","angle-down"]})])]),B("header",null,[nc,B("p",rc,ft(je(v)),1)]),B("main",null,[B("section",null,[yr(B("input",{"onUpdate:modelValue":ke[1]||(ke[1]=Me=>k.value=Me),type:"text",placeholder:je(n)},null,8,ac),[[di,k.value]]),yr(B("input",{"onUpdate:modelValue":ke[2]||(ke[2]=Me=>M.value=Me),type:"text",placeholder:je(r)},null,8,ic),[[di,M.value]]),B("p",{class:de(I.value)},ft(je(d)),3),B("a",{href:"#",class:de(Q.value)},ft(je(a)),3)]),B("button",{onClick:$,class:de(ee.value)},ft(je(i)),3),B("div",null,[oc,B("p",{class:de(se.value)},ft(je(o)),3),sc]),B("div",null,[B("p",{class:de(se.value)},ft(je(s)),3),B("a",{class:de(Q.value)},ft(je(l)),3)])])],2)}}},fc=Jf(lc,[["__scopeId","data-v-9871d801"]]);function hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hi(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kn(e){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function cc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uc(e,t,n){return t&&gi(e.prototype,t),n&&gi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ba(e,t){return mc(e)||hc(e,t)||Fo(e,t)||vc()}function dn(e){return dc(e)||pc(e)||Fo(e)||gc()}function dc(e){if(Array.isArray(e))return $r(e)}function mc(e){if(Array.isArray(e))return e}function pc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Fo(e,t){if(e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vi=function(){},ya={},Ro={},Lo=null,jo={mark:vi,measure:vi};try{typeof window<"u"&&(ya=window),typeof document<"u"&&(Ro=document),typeof MutationObserver<"u"&&(Lo=MutationObserver),typeof performance<"u"&&(jo=performance)}catch{}var bc=ya.navigator||{},bi=bc.userAgent,yi=bi===void 0?"":bi,at=ya,V=Ro,xi=Lo,kn=jo;at.document;var Ge=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Do=~yi.indexOf("MSIE")||~yi.indexOf("Trident/"),An,On,En,Cn,Pn,qe="___FONT_AWESOME___",Ur=16,zo="fa",$o="svg-inline--fa",wt="data-fa-i2svg",Hr="data-fa-pseudo-element",yc="data-fa-pseudo-element-pending",xa="data-prefix",wa="data-icon",wi="fontawesome-i2svg",xc="async",wc=["HTML","HEAD","STYLE","SCRIPT"],Uo=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",_a=[X,Z];function mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var an=mn((An={},ae(An,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(An,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),An)),on=mn((On={},ae(On,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(On,Z,{solid:"fass",regular:"fasr",light:"fasl"}),On)),sn=mn((En={},ae(En,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(En,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),En)),_c=mn((Cn={},ae(Cn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(Cn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Cn)),kc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ho="fa-layers-text",Ac=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Oc=mn((Pn={},ae(Pn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Pn,Z,{900:"fass",400:"fasr",300:"fasl"}),Pn)),Bo=[1,2,3,4,5,6,7,8,9,10],Ec=Bo.concat([11,12,13,14,15,16,17,18,19,20]),Cc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ln=new Set;Object.keys(on[X]).map(ln.add.bind(ln));Object.keys(on[Z]).map(ln.add.bind(ln));var Pc=[].concat(_a,dn(ln),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vt.GROUP,vt.SWAP_OPACITY,vt.PRIMARY,vt.SECONDARY]).concat(Bo.map(function(e){return"".concat(e,"x")})).concat(Ec.map(function(e){return"w-".concat(e)})),qt=at.FontAwesomeConfig||{};function Sc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ic(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var Tc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tc.forEach(function(e){var t=ba(e,2),n=t[0],r=t[1],a=Ic(Sc(n));a!=null&&(qt[r]=a)})}var Yo={styleDefault:"solid",familyDefault:"classic",cssPrefix:zo,replacementClass:$o,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qt.familyPrefix&&(qt.cssPrefix=qt.familyPrefix);var Rt=E(E({},Yo),qt);Rt.autoReplaceSvg||(Rt.observeMutations=!1);var S={};Object.keys(Yo).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Rt[e]=n,Xt.forEach(function(r){return r(S)})},get:function(){return Rt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Rt.cssPrefix=t,Xt.forEach(function(n){return n(S)})},get:function(){return Rt.cssPrefix}});at.FontAwesomeConfig=S;var Xt=[];function Nc(e){return Xt.push(e),function(){Xt.splice(Xt.indexOf(e),1)}}var Qe=Ur,$e={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mc(e){if(!(!e||!Ge)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var Fc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fn(){for(var e=12,t="";e-- >0;)t+=Fc[Math.random()*62|0];return t}function zt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ka(e){return e.classList?zt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Wo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Wo(e[n]),'" ')},"").trim()}function cr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Aa(e){return e.size!==$e.size||e.x!==$e.x||e.y!==$e.y||e.rotate!==$e.rotate||e.flipX||e.flipY}function Lc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function jc(e){var t=e.transform,n=e.width,r=n===void 0?Ur:n,a=e.height,i=a===void 0?Ur:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Do?l+="translate(".concat(t.x/Qe-r/2,"em, ").concat(t.y/Qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Qe,"em), calc(-50% + ").concat(t.y/Qe,"em)) "):l+="translate(".concat(t.x/Qe,"em, ").concat(t.y/Qe,"em) "),l+="scale(".concat(t.size/Qe*(t.flipX?-1:1),", ").concat(t.size/Qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Dc=`:root, :host {
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
}`;function Ko(){var e=zo,t=$o,n=S.cssPrefix,r=S.replacementClass,a=Dc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var _i=!1;function Ar(){S.autoAddCss&&!_i&&(Mc(Ko()),_i=!0)}var zc={mixout:function(){return{dom:{css:Ko,insertCss:Ar}}},hooks:function(){return{beforeDOMElementCreation:function(){Ar()},beforeI2svg:function(){Ar()}}}},Xe=at||{};Xe[qe]||(Xe[qe]={});Xe[qe].styles||(Xe[qe].styles={});Xe[qe].hooks||(Xe[qe].hooks={});Xe[qe].shims||(Xe[qe].shims=[]);var Ie=Xe[qe],qo=[],$c=function e(){V.removeEventListener("DOMContentLoaded",e),qn=1,qo.map(function(t){return t()})},qn=!1;Ge&&(qn=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),qn||V.addEventListener("DOMContentLoaded",$c));function Uc(e){Ge&&(qn?setTimeout(e,0):qo.push(e))}function pn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Wo(e):"<".concat(t," ").concat(Rc(r),">").concat(i.map(pn).join(""),"</").concat(t,">")}function ki(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Hc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Or=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Hc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Bc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Br(e){var t=Bc(e);return t.length===1?t[0].toString(16):null}function Yc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ai(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Yr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ai(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,Ai(t)):Ie.styles[e]=E(E({},Ie.styles[e]||{}),i),e==="fas"&&Yr("fa",t)}var Sn,In,Tn,Ot=Ie.styles,Wc=Ie.shims,Kc=(Sn={},ae(Sn,X,Object.values(sn[X])),ae(Sn,Z,Object.values(sn[Z])),Sn),Oa=null,Xo={},Vo={},Jo={},Go={},Zo={},qc=(In={},ae(In,X,Object.keys(an[X])),ae(In,Z,Object.keys(an[Z])),In);function Xc(e){return~Pc.indexOf(e)}function Vc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xc(a)?a:null}var Qo=function(){var t=function(i){return Or(Ot,function(o,s,l){return o[l]=Or(s,i,{}),o},{})};Xo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Vo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Zo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ot||S.autoFetchSvg,r=Or(Wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Jo=r.names,Go=r.unicodes,Oa=ur(S.styleDefault,{family:S.familyDefault})};Nc(function(e){Oa=ur(e.styleDefault,{family:S.familyDefault})});Qo();function Ea(e,t){return(Xo[e]||{})[t]}function Jc(e,t){return(Vo[e]||{})[t]}function bt(e,t){return(Zo[e]||{})[t]}function es(e){return Jo[e]||{prefix:null,iconName:null}}function Gc(e){var t=Go[e],n=Ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return Oa}var Ca=function(){return{prefix:null,iconName:null,rest:[]}};function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=an[r][e],i=on[r][e]||on[r][a],o=e in Ie.styles?e:null;return i||o||null}var Oi=(Tn={},ae(Tn,X,Object.keys(sn[X])),ae(Tn,Z,Object.keys(sn[Z])),Tn);function dr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,X,"".concat(S.cssPrefix,"-").concat(X)),ae(t,Z,"".concat(S.cssPrefix,"-").concat(Z)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Oi[X].includes(c)}))&&(s=X),(e.includes(i[Z])||e.some(function(c){return Oi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Vc(S.cssPrefix,d);if(Ot[d]?(d=Kc[s].includes(d)?_c[s][d]:d,o=d,c.prefix=d):qc[s].indexOf(d)>-1?(o=d,c.prefix=ur(d,{family:s})):m?c.iconName=m:d!==S.replacementClass&&d!==i[X]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?es(c.iconName):{},k=bt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!Ot.far&&Ot.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Ca());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(Ot.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=bt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=it()||"fas"),l}var Zc=function(){function e(){cc(this,e),this.definitions={}}return uc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Yr(s,o[s]);var l=sn[X][s];l&&Yr(l,o[s]),Qo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ei=[],Et={},Tt={},Qc=Object.keys(Tt);function eu(e,t){var n=t.mixoutsTo;return Ei=e,Et={},Object.keys(Tt).forEach(function(r){Qc.indexOf(r)===-1&&delete Tt[r]}),Ei.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Kn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Et[o]||(Et[o]=[]),Et[o].push(i[o])})}r.provides&&r.provides(Tt)}),n}function Wr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Et[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function _t(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Et[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Tt[e]?Tt[e].apply(null,t):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(t)return t=bt(n,t)||t,ki(ts.definitions,n,t)||ki(Ie.styles,n,t)}var ts=new Zc,tu=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,_t("noAuto")},nu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge?(_t("beforeI2svg",t),Ve("pseudoElements2svg",t),Ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Uc(function(){au({autoReplaceSvgRoot:n}),_t("watch",t)})}},ru={icon:function(t){if(t===null)return null;if(Kn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ur(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(kc))){var a=dr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:bt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=it();return{prefix:i,iconName:bt(i,t)||t}}}},_e={noAuto:tu,config:S,dom:nu,parse:ru,library:ts,findIconDefinition:Kr,toHtml:pn},au=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ie.styles).length>0||S.autoFetchSvg)&&Ge&&S.autoReplaceSvg&&_e.dom.i2svg({node:r})};function mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ge){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function iu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Aa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=cr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ou(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Pa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,M=r.found?r:n,I=M.width,$=M.height,w=a==="fak",C=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),O={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat($)})},L=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/$*16*.0625,"em")}:{};k&&(O.attributes[wt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(d||fn())},children:[l]}),delete O.attributes.title);var U=E(E({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},L),m.styles)}),ee=r.found&&n.found?Ve("generateAbstractMask",U)||{children:[],attributes:{}}:Ve("generateAbstractIcon",U)||{children:[],attributes:{}},Q=ee.children,se=ee.attributes;return U.children=Q,U.attributes=se,s?ou(U):iu(U)}function Ci(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[wt]="");var d=E({},o.styles);Aa(a)&&(d.transform=jc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=cr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function su(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=cr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Er=Ie.styles;function qr(e){var t=e[0],n=e[1],r=e.slice(4),a=ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var lu={found:!1,width:512,height:512};function fu(e,t){!Uo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=it()),new Promise(function(r,a){if(Ve("missingIconAbstract"),n==="fa"){var i=es(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Er[t]&&Er[t][e]){var o=Er[t][e];return r(qr(o))}fu(e,t),r(E(E({},lu),{},{icon:S.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}var Pi=function(){},Vr=S.measurePerformance&&kn&&kn.mark&&kn.measure?kn:{mark:Pi,measure:Pi},Bt='FA "6.4.0"',cu=function(t){return Vr.mark("".concat(Bt," ").concat(t," begins")),function(){return ns(t)}},ns=function(t){Vr.mark("".concat(Bt," ").concat(t," ends")),Vr.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},Sa={begin:cu,end:ns},jn=function(){};function Si(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function uu(e){var t=e.getAttribute?e.getAttribute(xa):null,n=e.getAttribute?e.getAttribute(wa):null;return t&&n}function du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function mu(){if(S.autoReplaceSvg===!0)return Dn.replace;var e=Dn[S.autoReplaceSvg];return e||Dn.replace}function pu(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function hu(e){return V.createElement(e)}function rs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pu:hu:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(rs(o,{ceFn:r}))}),a}function gu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Dn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(rs(a),n)}),n.getAttribute(wt)===null&&S.keepOriginalSource){var r=V.createComment(gu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ka(n).indexOf(S.replacementClass))return Dn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return pn(s)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=o}};function Ii(e){e()}function as(e,t){var n=typeof t=="function"?t:jn;if(e.length===0)n();else{var r=Ii;S.mutateApproach===xc&&(r=at.requestAnimationFrame||Ii),r(function(){var a=mu(),i=Sa.begin("mutate");e.map(a),i(),n()})}}var Ia=!1;function is(){Ia=!0}function Jr(){Ia=!1}var Xn=null;function Ti(e){if(xi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?jn:t,r=e.nodeCallback,a=r===void 0?jn:r,i=e.pseudoElementsCallback,o=i===void 0?jn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;Xn=new xi(function(c){if(!Ia){var d=it();zt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Si(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Si(m.target)&&~Cc.indexOf(m.attributeName))if(m.attributeName==="class"&&uu(m.target)){var v=dr(ka(m.target)),k=v.prefix,M=v.iconName;m.target.setAttribute(xa,k||d),M&&m.target.setAttribute(wa,M)}else du(m.target)&&a(m.target)})}}),Ge&&Xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vu(){Xn&&Xn.disconnect()}function bu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function yu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=dr(ka(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Jc(a.prefix,e.innerText)||Ea(a.prefix,Br(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function xu(e){var t=zt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||fn()):(t["aria-hidden"]="true",t.focusable="false")),t}function wu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$e,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yu(e),r=n.iconName,a=n.prefix,i=n.rest,o=xu(e),s=Wr("parseNodeAttributes",{},e),l=t.styleParser?bu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:$e,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var _u=Ie.styles;function os(e){var t=S.autoReplaceSvg==="nest"?Ni(e,{styleParser:!1}):Ni(e);return~t.extra.classes.indexOf(Ho)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}var ot=new Set;_a.map(function(e){ot.add("fa-".concat(e))});Object.keys(an[X]).map(ot.add.bind(ot));Object.keys(an[Z]).map(ot.add.bind(ot));ot=dn(ot);function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ge)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(wi,"-").concat(m))},a=function(m){return n.remove("".concat(wi,"-").concat(m))},i=S.autoFetchSvg?ot:_a.map(function(d){return"fa-".concat(d)}).concat(Object.keys(_u));i.includes("fa")||i.push("fa");var o=[".".concat(Ho,":not([").concat(wt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(wt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=zt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Sa.begin("onTree"),c=s.reduce(function(d,m){try{var v=os(m);v&&d.push(v)}catch(k){Uo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){as(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;os(e).then(function(n){n&&as([n],t)})}function Au(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?$e:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,M=k===void 0?null:k,I=n.classes,$=I===void 0?[]:I,w=n.attributes,C=w===void 0?{}:w,O=n.styles,L=O===void 0?{}:O;if(t){var U=t.prefix,ee=t.iconName,Q=t.icon;return mr(E({type:"icon"},t),function(){return _t("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(v?C["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(M||fn()):(C["aria-hidden"]="true",C.focusable="false")),Pa({icons:{main:qr(Q),mask:l?qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ee,transform:E(E({},$e),a),symbol:o,title:v,maskId:d,titleId:M,extra:{attributes:C,styles:L,classes:$}})})}},Eu={mixout:function(){return{icon:Au(Ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mi,n.nodeCallback=ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Mi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,M){Promise.all([Xr(a,s),d.iconName?Xr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var $=ba(I,2),w=$[0],C=$[1];k([n,Pa({icons:{main:w,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=cr(s);l.length>0&&(a.style=l);var c;return Aa(o)&&(c=Ve("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Cu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return mr({type:"layer"},function(){_t("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(dn(i)).join(" ")},children:o}]})}}}},Pu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return mr({type:"counter",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),su({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(dn(s))}})})}}}},Su={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?$e:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return mr({type:"text",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),Ci({content:n,transform:E(E({},$e),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(S.cssPrefix,"-layers-text")].concat(dn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Do){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ci({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Iu=new RegExp('"',"ug"),Fi=[1105920,1112319];function Tu(e){var t=e.replace(Iu,""),n=Yc(t,0),r=n>=Fi[0]&&n<=Fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Br(a?t[0]:t),isSecondary:r||a}}function Ri(e,t){var n="".concat(yc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=zt(e.children),o=i.filter(function(Q){return Q.getAttribute(Hr)===t})[0],s=at.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ac),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?on[v][l[2].toLowerCase()]:Oc[v][c],M=Tu(m),I=M.value,$=M.isSecondary,w=l[0].startsWith("FontAwesome"),C=Ea(k,I),O=C;if(w){var L=Gc(I);L.iconName&&L.prefix&&(C=L.iconName,k=L.prefix)}if(C&&!$&&(!o||o.getAttribute(xa)!==k||o.getAttribute(wa)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var U=wu(),ee=U.extra;ee.attributes[Hr]=t,Xr(C,k).then(function(Q){var se=Pa(E(E({},U),{},{icons:{main:Q,mask:Ca()},prefix:k,iconName:O,extra:ee,watchable:!0})),he=V.createElement("svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=se.map(function(te){return pn(te)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Nu(e){return Promise.all([Ri(e,"::before"),Ri(e,"::after")])}function Mu(e){return e.parentNode!==document.head&&!~wc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Li(e){if(Ge)return new Promise(function(t,n){var r=zt(e.querySelectorAll("*")).filter(Mu).map(Nu),a=Sa.begin("searchPseudoElements");is(),Promise.all(r).then(function(){a(),Jr(),t()}).catch(function(){a(),Jr(),n()})})}var Fu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Li,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;S.searchPseudoElements&&Li(a)}}},ji=!1,Ru={mixout:function(){return{dom:{unwatch:function(){is(),ji=!0}}}},hooks:function(){return{bootstrap:function(){Ti(Wr("mutationObserverCallbacks",{}))},noAuto:function(){vu()},watch:function(n){var r=n.observeMutationsRoot;ji?Jr():Ti(Wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Lu={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},k.outer),children:[{tag:"g",attributes:E({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),k.path)}]}]}}}},Cr={x:0,y:0,width:"100%",height:"100%"};function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ju(e){return e.tag==="g"?e.children:[e]}var Du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?dr(a.split(" ").map(function(o){return o.trim()})):Ca();return i.prefix||(i.prefix=it()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=Lc({transform:l,containerWidth:m,iconWidth:c}),M={tag:"rect",attributes:E(E({},Cr),{},{fill:"white"})},I=d.children?{children:d.children.map(zi)}:{},$={tag:"g",attributes:E({},k.inner),children:[zi(E({tag:d.tag,attributes:E(E({},d.attributes),k.path)},I))]},w={tag:"g",attributes:E({},k.outer),children:[$]},C="mask-".concat(s||fn()),O="clip-".concat(s||fn()),L={tag:"mask",attributes:E(E({},Cr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:ju(v)},L]};return r.push(U,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(C,")")},Cr)}),{children:r,attributes:a}}}},zu={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Uu=[zc,Eu,Cu,Pu,Su,Fu,Ru,Lu,Du,zu,$u];eu(Uu,{mixoutsTo:_e});_e.noAuto;var ss=_e.config,Hu=_e.library;_e.dom;var Vn=_e.parse;_e.findIconDefinition;_e.toHtml;var Bu=_e.icon;_e.layer;var Yu=_e.text;_e.counter;var Wu={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},Ku={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},qu={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Xu={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$i(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jn(e){return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(e)}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ju(e,t){if(e==null)return{};var n=Vu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gr(e){return Gu(e)||Zu(e)||Qu(e)||ed()}function Gu(e){if(Array.isArray(e))return Zr(e)}function Zu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ed(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ls={exports:{}};(function(e){(function(t){var n=function(w,C,O){if(!c(C)||m(C)||v(C)||k(C)||l(C))return C;var L,U=0,ee=0;if(d(C))for(L=[],ee=C.length;U<ee;U++)L.push(n(w,C[U],O));else{L={};for(var Q in C)Object.prototype.hasOwnProperty.call(C,Q)&&(L[w(Q,O)]=n(w,C[Q],O))}return L},r=function(w,C){C=C||{};var O=C.separator||"_",L=C.split||/(?=[A-Z])/;return w.split(L).join(O)},a=function(w){return M(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(C,O){return O?O.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var C=a(w);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(w,C){return r(w,C).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},M=function(w){return w=w-0,w===w},I=function(w,C){var O=C&&"process"in C?C.process:C;return typeof O!="function"?w:function(L,U){return O(L,w,U)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,C){return n(I(a,C),w)},decamelizeKeys:function(w,C){return n(I(o,C),w,C)},pascalizeKeys:function(w,C){return n(I(i,C),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(td)})(ls);var nd=ls.exports,rd=["class","style"];function ad(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=nd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function id(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ta(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=id(d);break;case"style":l.style=ad(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ju(n,rd);return Mo(e.tag,Pe(Pe(Pe({},t),{},{class:a.class,style:Pe(Pe({},a.style),o)},a.attrs),s),r)}var fs=!1;try{fs=!0}catch{}function od(){if(!fs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ge({},e,t):{}}function sd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ge(t,"fa-".concat(e.size),e.size!==null),ge(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ge(t,"fa-pull-".concat(e.pull),e.pull!==null),ge(t,"fa-swap-opacity",e.swapOpacity),ge(t,"fa-bounce",e.bounce),ge(t,"fa-shake",e.shake),ge(t,"fa-beat",e.beat),ge(t,"fa-fade",e.fade),ge(t,"fa-beat-fade",e.beatFade),ge(t,"fa-flash",e.flash),ge(t,"fa-spin-pulse",e.spinPulse),ge(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ui(e){if(e&&Jn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vn.icon)return Vn.icon(e);if(e===null)return null;if(Jn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ld=pa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=we(function(){return Ui(t.icon)}),i=we(function(){return Vt("classes",sd(t))}),o=we(function(){return Vt("transform",typeof t.transform=="string"?Vn.transform(t.transform):t.transform)}),s=we(function(){return Vt("mask",Ui(t.mask))}),l=we(function(){return Bu(a.value,Pe(Pe(Pe(Pe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Yt(l,function(d){if(!d)return od("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=we(function(){return l.value?Ta(l.value.abstract[0],{},r):null});return function(){return c.value}}});pa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ss.familyPrefix,i=we(function(){return["".concat(a,"-layers")].concat(Gr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Mo("div",{class:i.value},r.default?r.default():[])}}});pa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ss.familyPrefix,i=we(function(){return Vt("classes",[].concat(Gr(t.counter?["".concat(a,"-layers-counter")]:[]),Gr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=we(function(){return Vt("transform",typeof t.transform=="string"?Vn.transform(t.transform):t.transform)}),s=we(function(){var c=Yu(t.value.toString(),Pe(Pe({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=we(function(){return Ta(s.value,{},r)});return function(){return l.value}}});Hu.add(Ku,Xu,qu,Wu);Wf(fc).component("font-awesome-icon",ld).mount("#app");
