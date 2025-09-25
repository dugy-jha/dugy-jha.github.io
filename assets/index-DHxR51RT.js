(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function Xb(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Zd={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function Yb(){if(Q0)return il;Q0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:a,type:r,key:d,ref:o!==void 0?o:null,props:u}}return il.Fragment=e,il.jsx=n,il.jsxs=n,il}var J0;function qb(){return J0||(J0=1,Zd.exports=Yb()),Zd.exports}var c=qb(),Qd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function Zb(){if(K0)return pt;K0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function M(P,ee,ye){this.props=P,this.context=ee,this.refs=A,this.updater=ye||S}M.prototype.isReactComponent={},M.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=M.prototype;function L(P,ee,ye){this.props=P,this.context=ee,this.refs=A,this.updater=ye||S}var O=L.prototype=new _;O.constructor=L,T(O,M.prototype),O.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function V(P,ee,ye,be,Le,ke){return ye=ke.ref,{$$typeof:a,type:P,key:ee,ref:ye!==void 0?ye:null,props:ke}}function Z(P,ee){return V(P.type,ee,void 0,void 0,void 0,P.props)}function D(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function N(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return ee[ye]})}var k=/\/+/g;function ae(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?N(""+P.key):ee.toString(36)}function he(){}function pe(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(he,he):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function de(P,ee,ye,be,Le){var ke=typeof P;(ke==="undefined"||ke==="boolean")&&(P=null);var ne=!1;if(P===null)ne=!0;else switch(ke){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(P.$$typeof){case a:case e:ne=!0;break;case v:return ne=P._init,de(ne(P._payload),ee,ye,be,Le)}}if(ne)return Le=Le(P),ne=be===""?"."+ae(P,0):be,C(Le)?(ye="",ne!=null&&(ye=ne.replace(k,"$&/")+"/"),de(Le,ee,ye,"",function(Ke){return Ke})):Le!=null&&(D(Le)&&(Le=Z(Le,ye+(Le.key==null||P&&P.key===Le.key?"":(""+Le.key).replace(k,"$&/")+"/")+ne)),ee.push(Le)),1;ne=0;var ve=be===""?".":be+":";if(C(P))for(var Me=0;Me<P.length;Me++)be=P[Me],ke=ve+ae(be,Me),ne+=de(be,ee,ye,ke,Le);else if(Me=y(P),typeof Me=="function")for(P=Me.call(P),Me=0;!(be=P.next()).done;)be=be.value,ke=ve+ae(be,Me++),ne+=de(be,ee,ye,ke,Le);else if(ke==="object"){if(typeof P.then=="function")return de(pe(P),ee,ye,be,Le);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ne}function I(P,ee,ye){if(P==null)return P;var be=[],Le=0;return de(P,be,"","",function(ke){return ee.call(ye,ke,Le++)}),be}function J(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var X=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Se(){}return pt.Children={map:I,forEach:function(P,ee,ye){I(P,function(){ee.apply(this,arguments)},ye)},count:function(P){var ee=0;return I(P,function(){ee++}),ee},toArray:function(P){return I(P,function(ee){return ee})||[]},only:function(P){if(!D(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},pt.Component=M,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=L,pt.StrictMode=r,pt.Suspense=g,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,pt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},pt.cache=function(P){return function(){return P.apply(null,arguments)}},pt.cloneElement=function(P,ee,ye){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var be=T({},P.props),Le=P.key,ke=void 0;if(ee!=null)for(ne in ee.ref!==void 0&&(ke=void 0),ee.key!==void 0&&(Le=""+ee.key),ee)!B.call(ee,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ee.ref===void 0||(be[ne]=ee[ne]);var ne=arguments.length-2;if(ne===1)be.children=ye;else if(1<ne){for(var ve=Array(ne),Me=0;Me<ne;Me++)ve[Me]=arguments[Me+2];be.children=ve}return V(P.type,Le,void 0,void 0,ke,be)},pt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},pt.createElement=function(P,ee,ye){var be,Le={},ke=null;if(ee!=null)for(be in ee.key!==void 0&&(ke=""+ee.key),ee)B.call(ee,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Le[be]=ee[be]);var ne=arguments.length-2;if(ne===1)Le.children=ye;else if(1<ne){for(var ve=Array(ne),Me=0;Me<ne;Me++)ve[Me]=arguments[Me+2];Le.children=ve}if(P&&P.defaultProps)for(be in ne=P.defaultProps,ne)Le[be]===void 0&&(Le[be]=ne[be]);return V(P,ke,void 0,void 0,null,Le)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(P){return{$$typeof:h,render:P}},pt.isValidElement=D,pt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:J}},pt.memo=function(P,ee){return{$$typeof:p,type:P,compare:ee===void 0?null:ee}},pt.startTransition=function(P){var ee=F.T,ye={};F.T=ye;try{var be=P(),Le=F.S;Le!==null&&Le(ye,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(Se,X)}catch(ke){X(ke)}finally{F.T=ee}},pt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},pt.use=function(P){return F.H.use(P)},pt.useActionState=function(P,ee,ye){return F.H.useActionState(P,ee,ye)},pt.useCallback=function(P,ee){return F.H.useCallback(P,ee)},pt.useContext=function(P){return F.H.useContext(P)},pt.useDebugValue=function(){},pt.useDeferredValue=function(P,ee){return F.H.useDeferredValue(P,ee)},pt.useEffect=function(P,ee,ye){var be=F.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(P,ee)},pt.useId=function(){return F.H.useId()},pt.useImperativeHandle=function(P,ee,ye){return F.H.useImperativeHandle(P,ee,ye)},pt.useInsertionEffect=function(P,ee){return F.H.useInsertionEffect(P,ee)},pt.useLayoutEffect=function(P,ee){return F.H.useLayoutEffect(P,ee)},pt.useMemo=function(P,ee){return F.H.useMemo(P,ee)},pt.useOptimistic=function(P,ee){return F.H.useOptimistic(P,ee)},pt.useReducer=function(P,ee,ye){return F.H.useReducer(P,ee,ye)},pt.useRef=function(P){return F.H.useRef(P)},pt.useState=function(P){return F.H.useState(P)},pt.useSyncExternalStore=function(P,ee,ye){return F.H.useSyncExternalStore(P,ee,ye)},pt.useTransition=function(){return F.H.useTransition()},pt.version="19.1.1",pt}var $0;function Qp(){return $0||($0=1,Qd.exports=Zb()),Qd.exports}var ie=Qp();const W_=Xb(ie);var Jd={exports:{}},al={},Kd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function Qb(){return ex||(ex=1,(function(a){function e(I,J){var X=I.length;I.push(J);e:for(;0<X;){var Se=X-1>>>1,P=I[Se];if(0<o(P,J))I[Se]=J,I[X]=P,X=Se;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var J=I[0],X=I.pop();if(X!==J){I[0]=X;e:for(var Se=0,P=I.length,ee=P>>>1;Se<ee;){var ye=2*(Se+1)-1,be=I[ye],Le=ye+1,ke=I[Le];if(0>o(be,X))Le<P&&0>o(ke,be)?(I[Se]=ke,I[Le]=X,Se=Le):(I[Se]=be,I[ye]=X,Se=ye);else if(Le<P&&0>o(ke,X))I[Se]=ke,I[Le]=X,Se=Le;else break e}}return J}function o(I,J){var X=I.sortIndex-J.sortIndex;return X!==0?X:I.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();a.unstable_now=function(){return d.now()-h}}var g=[],p=[],v=1,x=null,y=3,S=!1,T=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var J=n(p);J!==null;){if(J.callback===null)r(p);else if(J.startTime<=I)r(p),J.sortIndex=J.expirationTime,e(g,J);else break;J=n(p)}}function F(I){if(A=!1,C(I),!T)if(n(g)!==null)T=!0,B||(B=!0,ae());else{var J=n(p);J!==null&&de(F,J.startTime-I)}}var B=!1,V=-1,Z=5,D=-1;function N(){return M?!0:!(a.unstable_now()-D<Z)}function k(){if(M=!1,B){var I=a.unstable_now();D=I;var J=!0;try{e:{T=!1,A&&(A=!1,L(V),V=-1),S=!0;var X=y;try{t:{for(C(I),x=n(g);x!==null&&!(x.expirationTime>I&&N());){var Se=x.callback;if(typeof Se=="function"){x.callback=null,y=x.priorityLevel;var P=Se(x.expirationTime<=I);if(I=a.unstable_now(),typeof P=="function"){x.callback=P,C(I),J=!0;break t}x===n(g)&&r(g),C(I)}else r(g);x=n(g)}if(x!==null)J=!0;else{var ee=n(p);ee!==null&&de(F,ee.startTime-I),J=!1}}break e}finally{x=null,y=X,S=!1}J=void 0}}finally{J?ae():B=!1}}}var ae;if(typeof O=="function")ae=function(){O(k)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,pe=he.port2;he.port1.onmessage=k,ae=function(){pe.postMessage(null)}}else ae=function(){_(k,0)};function de(I,J){V=_(function(){I(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_next=function(I){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var X=y;y=J;try{return I()}finally{y=X}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=y;y=I;try{return J()}finally{y=X}},a.unstable_scheduleCallback=function(I,J,X){var Se=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Se+X:Se):X=Se,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=X+P,I={id:v++,callback:J,priorityLevel:I,startTime:X,expirationTime:P,sortIndex:-1},X>Se?(I.sortIndex=X,e(p,I),n(g)===null&&I===n(p)&&(A?(L(V),V=-1):A=!0,de(F,X-Se))):(I.sortIndex=P,e(g,I),T||S||(T=!0,B||(B=!0,ae()))),I},a.unstable_shouldYield=N,a.unstable_wrapCallback=function(I){var J=y;return function(){var X=y;y=J;try{return I.apply(this,arguments)}finally{y=X}}}})($d)),$d}var tx;function Jb(){return tx||(tx=1,Kd.exports=Qb()),Kd.exports}var eh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx;function Kb(){if(nx)return On;nx=1;var a=Qp();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:g,containerInfo:p,implementation:v}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(g,p,null,v)},On.flushSync=function(g){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,g)return g()}finally{d.T=p,r.p=v,r.d.f()}},On.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},On.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},On.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:S}):v==="script"&&r.d.X(g,{crossOrigin:x,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},On.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin);r.d.L(g,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},On.requestFormReset=function(g){r.d.r(g)},On.unstable_batchedUpdates=function(g,p){return g(p)},On.useFormState=function(g,p,v){return d.H.useFormState(g,p,v)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.1.1",On}var ix;function $b(){if(ix)return eh.exports;ix=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),eh.exports=Kb(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function eM(){if(ax)return al;ax=1;var a=Jb(),e=Qp(),n=$b();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function d(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function g(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var E=!1,R=f.child;R;){if(R===s){E=!0,s=f,l=m;break}if(R===l){E=!0,l=f,s=m;break}R=R.sibling}if(!E){for(R=m.child;R;){if(R===s){E=!0,s=m,l=f;break}if(R===l){E=!0,l=m,s=f;break}R=R.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case M:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case O:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case Z:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var de=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},Se=[],P=-1;function ee(t){return{current:t}}function ye(t){0>P||(t.current=Se[P],Se[P]=null,P--)}function be(t,i){P++,Se[P]=t.current,t.current=i}var Le=ee(null),ke=ee(null),ne=ee(null),ve=ee(null);function Me(t,i){switch(be(ne,i),be(ke,t),be(Le,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?E0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=E0(i),t=T0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Le),be(Le,t)}function Ke(){ye(Le),ye(ke),ye(ne)}function Ze(t){t.memoizedState!==null&&be(ve,t);var i=Le.current,s=T0(i,t.type);i!==s&&(be(ke,t),be(Le,s))}function ht(t){ke.current===t&&(ye(Le),ye(ke)),ve.current===t&&(ye(ve),Ko._currentValue=X)}var en=Object.prototype.hasOwnProperty,z=a.unstable_scheduleCallback,Ot=a.unstable_cancelCallback,ct=a.unstable_shouldYield,it=a.unstable_requestPaint,ze=a.unstable_now,At=a.unstable_getCurrentPriorityLevel,Ge=a.unstable_ImmediatePriority,ut=a.unstable_UserBlockingPriority,Wt=a.unstable_NormalPriority,Xt=a.unstable_LowPriority,U=a.unstable_IdlePriority,b=a.log,H=a.unstable_setDisableYieldValue,K=null,ue=null;function re(t){if(typeof b=="function"&&H(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(K,t)}catch{}}var Ce=Math.clz32?Math.clz32:Xe,Ne=Math.log,Ve=Math.LN2;function Xe(t){return t>>>=0,t===0?32:31-(Ne(t)/Ve|0)|0}var Ee=256,Fe=4194304;function $e(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~m,l!==0?f=$e(l):(E&=R,E!==0?f=$e(E):s||(s=R&~t,s!==0&&(f=$e(s))))):(R=l&~m,R!==0?f=$e(R):E!==0?f=$e(E):s||(s=l&~t,s!==0&&(f=$e(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ft(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Re(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function De(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Be(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,i,s,l,f,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,j=t.expirationTimes,te=t.hiddenUpdates;for(s=E&~s;0<s;){var me=31-Ce(s),xe=1<<me;R[me]=0,j[me]=-1;var se=te[me];if(se!==null)for(te[me]=null,me=0;me<se.length;me++){var oe=se[me];oe!==null&&(oe.lane&=-536870913)}s&=~xe}l!==0&&_e(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function _e(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ce(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Ye(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ce(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function lt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:G0(t.type))}function bi(t,i){var s=J.p;try{return J.p=t,i()}finally{J.p=s}}var mn=Math.random().toString(36).slice(2),gn="__reactFiber$"+mn,tn="__reactProps$"+mn,Fi="__reactContainer$"+mn,Zr="__reactEvents$"+mn,Ol="__reactListeners$"+mn,Qr="__reactHandles$"+mn,co="__reactResources$"+mn,Ii="__reactMarker$"+mn;function Jr(t){delete t[gn],delete t[tn],delete t[Zr],delete t[Ol],delete t[Qr]}function Qi(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Fi]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=N0(t);t!==null;){if(s=t[gn])return s;t=N0(t)}return i}t=s,s=t.parentNode}return null}function Ua(t){if(t=t[gn]||t[Fi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function gr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function La(t){var i=t[co];return i||(i=t[co]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function un(t){t[Ii]=!0}var Pl=new Set,Fl={};function w(t,i){Y(t,i),Y(t+"Capture",i)}function Y(t,i){for(Fl[t]=i,t=0;t<i.length;t++)Pl.add(i[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fe={},Q={};function Ae(t){return en.call(Q,t)?!0:en.call(fe,t)?!1:ce.test(t)?Q[t]=!0:(fe[t]=!0,!1)}function Oe(t,i,s){if(Ae(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function He(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ie(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var nt,rt;function Qe(t){if(nt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);nt=i&&i[1]||"",rt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+t+rt}var gt=!1;function Nt(t,i){if(!t||gt)return"";gt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(oe){var se=oe}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(oe){se=oe}t.call(xe.prototype)}}else{try{throw Error()}catch(oe){se=oe}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(oe){if(oe&&se&&typeof oe.stack=="string")return[oe.stack,se.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],R=m[1];if(E&&R){var j=E.split(`
`),te=R.split(`
`);for(f=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;f<te.length&&!te[f].includes("DetermineComponentFrameRoot");)f++;if(l===j.length||f===te.length)for(l=j.length-1,f=te.length-1;1<=l&&0<=f&&j[l]!==te[f];)f--;for(;1<=l&&0<=f;l--,f--)if(j[l]!==te[f]){if(l!==1||f!==1)do if(l--,f--,0>f||j[l]!==te[f]){var me=`
`+j[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{gt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Qe(s):""}function Qt(t){switch(t.tag){case 26:case 27:case 5:return Qe(t.type);case 16:return Qe("Lazy");case 13:return Qe("Suspense");case 19:return Qe("SuspenseList");case 0:case 15:return Nt(t.type,!1);case 11:return Nt(t.type.render,!1);case 1:return Nt(t.type,!0);case 31:return Qe("Activity");default:return""}}function jt(t){try{var i="";do i+=Qt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qt(t){var i=tt(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function St(t){t._valueTracker||(t._valueTracker=qt(t))}function Dn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=tt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var jn=/[\n"\\]/g;function Sn(t){return t.replace(jn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function kt(t,i,s,l,f,m,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+vt(i)):t.value!==""+vt(i)&&(t.value=""+vt(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Un(t,E,vt(i)):s!=null?Un(t,E,vt(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+vt(R):t.removeAttribute("name")}function zn(t,i,s,l,f,m,E,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+vt(s):"",i=i!=null?""+vt(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Un(t,i,s){i==="number"&&Mi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function nn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+vt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function An(t,i,s){if(i!=null&&(i=""+vt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+vt(s):""}function Kr(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(de(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=vt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function kn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var k1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Em(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||k1.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Tm(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Em(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Em(t,m,i[m])}function Yu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(t){return W1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var qu=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $r=null,es=null;function Am(t){var i=Ua(t);if(i&&(t=i.stateNode)){var s=t[tn]||null;e:switch(t=i.stateNode,i.type){case"input":if(kt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Sn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[tn]||null;if(!f)throw Error(r(90));kt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Dn(l)}break e;case"textarea":An(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&nn(t,!!s.multiple,i,!1)}}}var Qu=!1;function Rm(t,i,s){if(Qu)return t(i,s);Qu=!0;try{var l=t(i);return l}finally{if(Qu=!1,($r!==null||es!==null)&&(bc(),$r&&(i=$r,t=es,es=$r=null,Am(i),t)))for(i=0;i<t.length;i++)Am(t[i])}}function uo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[tn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(Ji)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Ju=!1}var Oa=null,Ku=null,jl=null;function wm(){if(jl)return jl;var t,i=Ku,s=i.length,l,f="value"in Oa?Oa.value:Oa.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===f[m-l];l++);return jl=f.slice(t,1<l?1-l:void 0)}function zl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function Nm(){return!1}function Gn(t){function i(s,l,f,m,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bl:Nm,this.isPropagationStopped=Nm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),i}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Gn(vr),ho=v({},vr,{view:0,detail:0}),X1=Gn(ho),$u,ef,po,Hl=v({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?($u=t.screenX-po.screenX,ef=t.screenY-po.screenY):ef=$u=0,po=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),Cm=Gn(Hl),Y1=v({},Hl,{dataTransfer:0}),q1=Gn(Y1),Z1=v({},ho,{relatedTarget:0}),tf=Gn(Z1),Q1=v({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),J1=Gn(Q1),K1=v({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$1=Gn(K1),eS=v({},vr,{data:0}),Dm=Gn(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=iS[t])?!!i[t]:!1}function nf(){return aS}var rS=v({},ho,{key:function(t){if(t.key){var i=tS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=Gn(rS),oS=v({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=Gn(oS),lS=v({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),cS=Gn(lS),uS=v({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Gn(uS),dS=v({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=Gn(dS),pS=v({},vr,{newState:0,oldState:0}),mS=Gn(pS),gS=[9,13,27,32],af=Ji&&"CompositionEvent"in window,mo=null;Ji&&"documentMode"in document&&(mo=document.documentMode);var vS=Ji&&"TextEvent"in window&&!mo,Lm=Ji&&(!af||mo&&8<mo&&11>=mo),Om=" ",Pm=!1;function Fm(t,i){switch(t){case"keyup":return gS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function xS(t,i){switch(t){case"compositionend":return Im(i);case"keypress":return i.which!==32?null:(Pm=!0,Om);case"textInput":return t=i.data,t===Om&&Pm?null:t;default:return null}}function _S(t,i){if(ts)return t==="compositionend"||!af&&Fm(t,i)?(t=wm(),jl=Ku=Oa=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lm&&i.locale!=="ko"?null:i.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!yS[t.type]:i==="textarea"}function zm(t,i,s,l){$r?es?es.push(l):es=[l]:$r=l,i=wc(i,"onChange"),0<i.length&&(s=new Vl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var go=null,vo=null;function SS(t){_0(t,0)}function kl(t){var i=gr(t);if(Dn(i))return t}function Bm(t,i){if(t==="change")return i}var Vm=!1;if(Ji){var rf;if(Ji){var sf="oninput"in document;if(!sf){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),sf=typeof Hm.oninput=="function"}rf=sf}else rf=!1;Vm=rf&&(!document.documentMode||9<document.documentMode)}function km(){go&&(go.detachEvent("onpropertychange",Gm),vo=go=null)}function Gm(t){if(t.propertyName==="value"&&kl(vo)){var i=[];zm(i,vo,t,Zu(t)),Rm(SS,i)}}function bS(t,i,s){t==="focusin"?(km(),go=i,vo=s,go.attachEvent("onpropertychange",Gm)):t==="focusout"&&km()}function MS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(vo)}function ES(t,i){if(t==="click")return kl(i)}function TS(t,i){if(t==="input"||t==="change")return kl(i)}function AS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:AS;function xo(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!en.call(i,f)||!$n(t[f],i[f]))return!1}return!0}function Wm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,i){var s=Wm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Wm(s)}}function Ym(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ym(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Mi(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Mi(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var RS=Ji&&"documentMode"in document&&11>=document.documentMode,ns=null,lf=null,_o=null,cf=!1;function Zm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;cf||ns==null||ns!==Mi(l)||(l=ns,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&xo(_o,l)||(_o=l,l=wc(lf,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ns)))}function xr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var is={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},uf={},Qm={};Ji&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function _r(t){if(uf[t])return uf[t];if(!is[t])return t;var i=is[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Qm)return uf[t]=i[s];return t}var Jm=_r("animationend"),Km=_r("animationiteration"),$m=_r("animationstart"),wS=_r("transitionrun"),NS=_r("transitionstart"),CS=_r("transitioncancel"),eg=_r("transitionend"),tg=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Ei(t,i){tg.set(t,i),w(i,[t])}var ng=new WeakMap;function fi(t,i){if(typeof t=="object"&&t!==null){var s=ng.get(t);return s!==void 0?s:(i={value:t,source:i,stack:jt(i)},ng.set(t,i),i)}return{value:t,source:i,stack:jt(i)}}var di=[],as=0,df=0;function Gl(){for(var t=as,i=df=as=0;i<t;){var s=di[i];di[i++]=null;var l=di[i];di[i++]=null;var f=di[i];di[i++]=null;var m=di[i];if(di[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&ig(s,f,m)}}function Wl(t,i,s,l){di[as++]=t,di[as++]=i,di[as++]=s,di[as++]=l,df|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function hf(t,i,s,l){return Wl(t,i,s,l),Xl(t)}function rs(t,i){return Wl(t,null,null,i),Xl(t)}function ig(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Ce(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Xl(t){if(50<Go)throw Go=0,_d=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ss={};function DS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,s,l){return new DS(t,i,s,l)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,i){var s=t.alternate;return s===null?(s=ei(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function ag(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Yl(t,i,s,l,f,m){var E=0;if(l=t,typeof t=="function")pf(t)&&(E=1);else if(typeof t=="string")E=Lb(t,s,Le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ei(31,s,i,f),t.elementType=D,t.lanes=m,t;case T:return yr(s.children,f,m,i);case A:E=8,f|=24;break;case M:return t=ei(12,s,i,f|2),t.elementType=M,t.lanes=m,t;case F:return t=ei(13,s,i,f),t.elementType=F,t.lanes=m,t;case B:return t=ei(19,s,i,f),t.elementType=B,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case O:E=10;break e;case L:E=9;break e;case C:E=11;break e;case V:E=14;break e;case Z:E=16,l=null;break e}E=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ei(E,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function yr(t,i,s,l){return t=ei(7,t,l,i),t.lanes=s,t}function mf(t,i,s){return t=ei(6,t,null,i),t.lanes=s,t}function gf(t,i,s){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var os=[],ls=0,ql=null,Zl=0,hi=[],pi=0,Sr=null,$i=1,ea="";function br(t,i){os[ls++]=Zl,os[ls++]=ql,ql=t,Zl=i}function rg(t,i,s){hi[pi++]=$i,hi[pi++]=ea,hi[pi++]=Sr,Sr=t;var l=$i;t=ea;var f=32-Ce(l)-1;l&=~(1<<f),s+=1;var m=32-Ce(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,$i=1<<32-Ce(i)+f|s<<f|l,ea=m+t}else $i=1<<m|s<<f|l,ea=t}function vf(t){t.return!==null&&(br(t,1),rg(t,1,0))}function xf(t){for(;t===ql;)ql=os[--ls],os[ls]=null,Zl=os[--ls],os[ls]=null;for(;t===Sr;)Sr=hi[--pi],hi[pi]=null,ea=hi[--pi],hi[pi]=null,$i=hi[--pi],hi[pi]=null}var Bn=null,an=null,Ut=!1,Mr=null,ji=!1,_f=Error(r(519));function Er(t){var i=Error(r(418,""));throw bo(fi(i,t)),_f}function sg(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[tn]=l,s){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(s=0;s<Xo.length;s++)Mt(Xo[s],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),zn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),St(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Kr(i,l.value,l.defaultValue,l.children),St(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||M0(i.textContent,s)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=Nc),i=!0):i=!1,i||Er(t)}function og(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Bn=Bn.return}}function yo(t){if(t!==Bn)return!1;if(!Ut)return og(t),Ut=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Pd(t.type,t.memoizedProps)),s=!s),s&&an&&Er(t),og(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){an=Ai(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}an=null}}else i===27?(i=an,Qa(t.type)?(t=zd,zd=null,an=t):an=i):an=Bn?Ai(t.stateNode.nextSibling):null;return!0}function So(){an=Bn=null,Ut=!1}function lg(){var t=Mr;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Mr=null),t}function bo(t){Mr===null?Mr=[t]:Mr.push(t)}var yf=ee(null),Tr=null,ta=null;function Pa(t,i,s){be(yf,i._currentValue),i._currentValue=s}function na(t){t._currentValue=yf.current,ye(yf)}function Sf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function bf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=f;for(var j=0;j<i.length;j++)if(R.context===i[j]){m.lanes|=s,R=m.alternate,R!==null&&(R.lanes|=s),Sf(m.return,s,t),l||(E=null);break e}m=R.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(r(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Sf(E,s,t),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===t){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Mo(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=f.type;$n(f.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(f===ve.current){if(E=f.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ko):t=[Ko])}f=f.return}t!==null&&bf(i,t,s,l),i.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ar(t){Tr=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return cg(Tr,t)}function Jl(t,i){return Tr===null&&Ar(t),cg(t,i)}function cg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ta===null){if(t===null)throw Error(r(308));ta=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ta=ta.next=i;return s}var US=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},LS=a.unstable_scheduleCallback,OS=a.unstable_NormalPriority,vn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new US,data:new Map,refCount:0}}function Eo(t){t.refCount--,t.refCount===0&&LS(OS,function(){t.controller.abort()})}var To=null,Ef=0,cs=0,us=null;function PS(t,i){if(To===null){var s=To=[];Ef=0,cs=Ad(),us={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ef++,i.then(ug,ug),i}function ug(){if(--Ef===0&&To!==null){us!==null&&(us.status="fulfilled");var t=To;To=null,cs=0,us=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function FS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var fg=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&PS(t,i),fg!==null&&fg(t,i)};var Rr=ee(null);function Tf(){var t=Rr.current;return t!==null?t:Yt.pooledCache}function Kl(t,i){i===null?be(Rr,Rr.current):be(Rr,i.pool)}function dg(){var t=Tf();return t===null?null:{parent:vn._currentValue,pool:t}}var Ao=Error(r(460)),hg=Error(r(474)),$l=Error(r(542)),Af={then:function(){}};function pg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ec(){}function mg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ec,ec),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,vg(t),t;default:if(typeof i.status=="string")i.then(ec,ec);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,vg(t),t}throw Ro=i,Ao}}var Ro=null;function gg(){if(Ro===null)throw Error(r(459));var t=Ro;return Ro=null,t}function vg(t){if(t===Ao||t===$l)throw Error(r(483))}var Fa=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Xl(t),ig(t,null,s),i}return Wl(t,l,i,s),Xl(t)}function wo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ye(t,s)}}function Nf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Cf=!1;function No(){if(Cf){var t=us;if(t!==null)throw t}}function Co(t,i,s,l){Cf=!1;var f=t.updateQueue;Fa=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var j=R,te=j.next;j.next=null,E===null?m=te:E.next=te,E=j;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==E&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=j))}if(m!==null){var xe=f.baseState;E=0,me=te=j=null,R=m;do{var se=R.lane&-536870913,oe=se!==R.lane;if(oe?(Rt&se)===se:(l&se)===se){se!==0&&se===cs&&(Cf=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ot=t,at=R;se=i;var Vt=s;switch(at.tag){case 1:if(ot=at.payload,typeof ot=="function"){xe=ot.call(Vt,xe,se);break e}xe=ot;break e;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=at.payload,se=typeof ot=="function"?ot.call(Vt,xe,se):ot,se==null)break e;xe=v({},xe,se);break e;case 2:Fa=!0}}se=R.callback,se!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=f.callbacks,oe===null?f.callbacks=[se]:oe.push(se))}else oe={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=oe,j=xe):me=me.next=oe,E|=se;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;oe=R,R=oe.next,oe.next=null,f.lastBaseUpdate=oe,f.shared.pending=null}}while(!0);me===null&&(j=xe),f.baseState=j,f.firstBaseUpdate=te,f.lastBaseUpdate=me,m===null&&(f.shared.lanes=0),Xa|=E,t.lanes=E,t.memoizedState=xe}}function xg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function _g(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)xg(s[t],i)}var fs=ee(null),tc=ee(0);function yg(t,i){t=ca,be(tc,t),be(fs,i),ca=t|i.baseLanes}function Df(){be(tc,ca),be(fs,fs.current)}function Uf(){ca=tc.current,ye(fs),ye(tc)}var za=0,_t=null,zt=null,fn=null,nc=!1,ds=!1,wr=!1,ic=0,Do=0,hs=null,IS=0;function ln(){throw Error(r(321))}function Lf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!$n(t[s],i[s]))return!1;return!0}function Of(t,i,s,l,f,m){return za=m,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?iv:av,wr=!1,m=s(l,f),wr=!1,ds&&(m=bg(i,s,l,f)),Sg(t),m}function Sg(t){I.H=cc;var i=zt!==null&&zt.next!==null;if(za=0,fn=zt=_t=null,nc=!1,Do=0,hs=null,i)throw Error(r(300));t===null||bn||(t=t.dependencies,t!==null&&Ql(t)&&(bn=!0))}function bg(t,i,s,l){_t=t;var f=0;do{if(ds&&(hs=null),Do=0,ds=!1,25<=f)throw Error(r(301));if(f+=1,fn=zt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=GS,m=i(s,l)}while(ds);return m}function jS(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Uo(i):i,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(_t.flags|=1024),i}function Pf(){var t=ic!==0;return ic=0,t}function Ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function If(t){if(nc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}nc=!1}za=0,fn=zt=_t=null,ds=!1,Do=ic=0,hs=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?_t.memoizedState=fn=t:fn=fn.next=t,fn}function dn(){if(zt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var i=fn===null?_t.memoizedState:fn.next;if(i!==null)fn=i,zt=t;else{if(t===null)throw _t.alternate===null?Error(r(467)):Error(r(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},fn===null?_t.memoizedState=fn=t:fn=fn.next=t}return fn}function jf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(t){var i=Do;return Do+=1,hs===null&&(hs=[]),t=mg(hs,t,i),i=_t,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?iv:av),t}function ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uo(t);if(t.$$typeof===O)return Ln(t)}throw Error(r(438,String(t)))}function zf(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=_t.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=jf(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=N;return i.index++,s}function ia(t,i){return typeof i=="function"?i(t):i}function rc(t){var i=dn();return Bf(i,zt,t)}function Bf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var R=E=null,j=null,te=i,me=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(Rt&xe)===xe:(za&xe)===xe){var se=te.revertLane;if(se===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===cs&&(me=!0);else if((za&se)===se){te=te.next,se===cs&&(me=!0);continue}else xe={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},j===null?(R=j=xe,E=m):j=j.next=xe,_t.lanes|=se,Xa|=se;xe=te.action,wr&&s(m,xe),m=te.hasEagerState?te.eagerState:s(m,xe)}else se={lane:xe,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},j===null?(R=j=se,E=m):j=j.next=se,_t.lanes|=xe,Xa|=xe;te=te.next}while(te!==null&&te!==i);if(j===null?E=m:j.next=R,!$n(m,t.memoizedState)&&(bn=!0,me&&(s=us,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=j,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=dn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do m=t(m,E.action),E=E.next;while(E!==f);$n(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Mg(t,i,s){var l=_t,f=dn(),m=Ut;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!$n((zt||f).memoizedState,s);E&&(f.memoizedState=s,bn=!0),f=f.queue;var R=Ag.bind(null,l,f,t);if(Lo(2048,8,R,[t]),f.getSnapshot!==i||E||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,ps(9,sc(),Tg.bind(null,l,f,s,i),null),Yt===null)throw Error(r(349));m||(za&124)!==0||Eg(l,i,s)}return s}function Eg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=jf(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Tg(t,i,s,l){i.value=s,i.getSnapshot=l,Rg(i)&&wg(t)}function Ag(t,i,s){return s(function(){Rg(i)&&wg(t)})}function Rg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!$n(t,s)}catch{return!0}}function wg(t){var i=rs(t,2);i!==null&&ri(i,t,2)}function Hf(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),wr){re(!0);try{s()}finally{re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},i}function Ng(t,i,s,l){return t.baseState=s,Bf(t,zt,typeof l=="function"?l:ia)}function zS(t,i,s,l,f){if(lc(t))throw Error(r(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Cg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Cg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=I.T,E={};I.T=E;try{var R=s(f,l),j=I.S;j!==null&&j(E,R),Dg(t,i,R)}catch(te){kf(t,i,te)}finally{I.T=m}}else try{m=s(f,l),Dg(t,i,m)}catch(te){kf(t,i,te)}}function Dg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Ug(t,i,l)},function(l){return kf(t,i,l)}):Ug(t,i,s)}function Ug(t,i,s){i.status="fulfilled",i.value=s,Lg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Cg(t,s)))}function kf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Lg(i),i=i.next;while(i!==l)}t.action=null}function Lg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Og(t,i){return i}function Pg(t,i){if(Ut){var s=Yt.formState;if(s!==null){e:{var l=_t;if(Ut){if(an){t:{for(var f=an,m=ji;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ai(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){an=Ai(f.nextSibling),l=f.data==="F!";break e}}Er(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Og,lastRenderedState:i},s.queue=l,s=ev.bind(null,_t,l),l.dispatch=s,l=Hf(!1),m=qf.bind(null,_t,!1,l.queue),l=Wn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=zS.bind(null,_t,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Fg(t){var i=dn();return Ig(i,zt,t)}function Ig(t,i,s){if(i=Bf(t,i,Og)[0],t=rc(ia)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Uo(i)}catch(E){throw E===Ao?$l:E}else l=i;i=dn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,ps(9,sc(),BS.bind(null,f,s),null)),[l,m,t]}function BS(t,i){t.action=i}function jg(t){var i=dn(),s=zt;if(s!==null)return Ig(i,s,t);dn(),i=i.memoizedState,s=dn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function ps(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=_t.updateQueue,i===null&&(i=jf(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function sc(){return{destroy:void 0,resource:void 0}}function zg(){return dn().memoizedState}function oc(t,i,s,l){var f=Wn();l=l===void 0?null:l,_t.flags|=t,f.memoizedState=ps(1|i,sc(),s,l)}function Lo(t,i,s,l){var f=dn();l=l===void 0?null:l;var m=f.memoizedState.inst;zt!==null&&l!==null&&Lf(l,zt.memoizedState.deps)?f.memoizedState=ps(i,m,s,l):(_t.flags|=t,f.memoizedState=ps(1|i,m,s,l))}function Bg(t,i){oc(8390656,8,t,i)}function Vg(t,i){Lo(2048,8,t,i)}function Hg(t,i){return Lo(4,2,t,i)}function kg(t,i){return Lo(4,4,t,i)}function Gg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Wg(t,i,s){s=s!=null?s.concat([t]):null,Lo(4,4,Gg.bind(null,i,t),s)}function Gf(){}function Xg(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Lf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Yg(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Lf(i,l[1]))return l[0];if(l=t(),wr){re(!0);try{t()}finally{re(!1)}}return s.memoizedState=[l,i],l}function Wf(t,i,s){return s===void 0||(za&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=Qv(),_t.lanes|=t,Xa|=t,s)}function qg(t,i,s,l){return $n(s,i)?s:fs.current!==null?(t=Wf(t,s,l),$n(t,i)||(bn=!0),t):(za&42)===0?(bn=!0,t.memoizedState=s):(t=Qv(),_t.lanes|=t,Xa|=t,i)}function Zg(t,i,s,l,f){var m=J.p;J.p=m!==0&&8>m?m:8;var E=I.T,R={};I.T=R,qf(t,!1,i,s);try{var j=f(),te=I.S;if(te!==null&&te(R,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var me=FS(j,l);Oo(t,i,me,ai(t))}else Oo(t,i,l,ai(t))}catch(xe){Oo(t,i,{then:function(){},status:"rejected",reason:xe},ai())}finally{J.p=m,I.T=E}}function VS(){}function Xf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=Qg(t).queue;Zg(t,f,i,X,s===null?VS:function(){return Jg(t),s(l)})}function Qg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:X},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Jg(t){var i=Qg(t).next.queue;Oo(t,i,{},ai())}function Yf(){return Ln(Ko)}function Kg(){return dn().memoizedState}function $g(){return dn().memoizedState}function HS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ai();t=Ia(s);var l=ja(i,t,s);l!==null&&(ri(l,i,s),wo(l,i,s)),i={cache:Mf()},t.payload=i;return}i=i.return}}function kS(t,i,s){var l=ai();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},lc(t)?tv(i,s):(s=hf(t,i,s,l),s!==null&&(ri(s,t,l),nv(s,i,l)))}function ev(t,i,s){var l=ai();Oo(t,i,s,l)}function Oo(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(lc(t))tv(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,R=m(E,s);if(f.hasEagerState=!0,f.eagerState=R,$n(R,E))return Wl(t,i,f,0),Yt===null&&Gl(),!1}catch{}finally{}if(s=hf(t,i,f,l),s!==null)return ri(s,t,l),nv(s,i,l),!0}return!1}function qf(t,i,s,l){if(l={lane:2,revertLane:Ad(),action:l,hasEagerState:!1,eagerState:null,next:null},lc(t)){if(i)throw Error(r(479))}else i=hf(t,s,l,2),i!==null&&ri(i,t,2)}function lc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function tv(t,i){ds=nc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function nv(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ye(t,s)}}var cc={readContext:Ln,use:ac,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},iv={readContext:Ln,use:ac,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:Bg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,oc(4194308,4,Gg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return oc(4194308,4,t,i)},useInsertionEffect:function(t,i){oc(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(wr){re(!0);try{t()}finally{re(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var f=s(i);if(wr){re(!0);try{s(i)}finally{re(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=kS.bind(null,_t,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=Hf(t);var i=t.queue,s=ev.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Gf,useDeferredValue:function(t,i){var s=Wn();return Wf(s,t,i)},useTransition:function(){var t=Hf(!1);return t=Zg.bind(null,_t,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=_t,f=Wn();if(Ut){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Yt===null)throw Error(r(349));(Rt&124)!==0||Eg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Bg(Ag.bind(null,l,m,t),[t]),l.flags|=2048,ps(9,sc(),Tg.bind(null,l,m,s,i),null),s},useId:function(){var t=Wn(),i=Yt.identifierPrefix;if(Ut){var s=ea,l=$i;s=(l&~(1<<32-Ce(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=ic++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=IS++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Yf,useFormState:Pg,useActionState:Pg,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=qf.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:zf,useCacheRefresh:function(){return Wn().memoizedState=HS.bind(null,_t)}},av={readContext:Ln,use:ac,useCallback:Xg,useContext:Ln,useEffect:Vg,useImperativeHandle:Wg,useInsertionEffect:Hg,useLayoutEffect:kg,useMemo:Yg,useReducer:rc,useRef:zg,useState:function(){return rc(ia)},useDebugValue:Gf,useDeferredValue:function(t,i){var s=dn();return qg(s,zt.memoizedState,t,i)},useTransition:function(){var t=rc(ia)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Uo(t),i]},useSyncExternalStore:Mg,useId:Kg,useHostTransitionStatus:Yf,useFormState:Fg,useActionState:Fg,useOptimistic:function(t,i){var s=dn();return Ng(s,zt,t,i)},useMemoCache:zf,useCacheRefresh:$g},GS={readContext:Ln,use:ac,useCallback:Xg,useContext:Ln,useEffect:Vg,useImperativeHandle:Wg,useInsertionEffect:Hg,useLayoutEffect:kg,useMemo:Yg,useReducer:Vf,useRef:zg,useState:function(){return Vf(ia)},useDebugValue:Gf,useDeferredValue:function(t,i){var s=dn();return zt===null?Wf(s,t,i):qg(s,zt.memoizedState,t,i)},useTransition:function(){var t=Vf(ia)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Uo(t),i]},useSyncExternalStore:Mg,useId:Kg,useHostTransitionStatus:Yf,useFormState:jg,useActionState:jg,useOptimistic:function(t,i){var s=dn();return zt!==null?Ng(s,zt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:zf,useCacheRefresh:$g},ms=null,Po=0;function uc(t){var i=Po;return Po+=1,ms===null&&(ms=[]),mg(ms,t,i)}function Fo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function fc(t,i){throw i.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function rv(t){var i=t._init;return i(t._payload)}function sv(t){function i(q,G){if(t){var $=q.deletions;$===null?(q.deletions=[G],q.flags|=16):$.push(G)}}function s(q,G){if(!t)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function l(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function f(q,G){return q=Ki(q,G),q.index=0,q.sibling=null,q}function m(q,G,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<G?(q.flags|=67108866,G):$):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function E(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function R(q,G,$,ge){return G===null||G.tag!==6?(G=mf($,q.mode,ge),G.return=q,G):(G=f(G,$),G.return=q,G)}function j(q,G,$,ge){var We=$.type;return We===T?me(q,G,$.props.children,ge,$.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Z&&rv(We)===G.type)?(G=f(G,$.props),Fo(G,$),G.return=q,G):(G=Yl($.type,$.key,$.props,null,q.mode,ge),Fo(G,$),G.return=q,G)}function te(q,G,$,ge){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=gf($,q.mode,ge),G.return=q,G):(G=f(G,$.children||[]),G.return=q,G)}function me(q,G,$,ge,We){return G===null||G.tag!==7?(G=yr($,q.mode,ge,We),G.return=q,G):(G=f(G,$),G.return=q,G)}function xe(q,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=mf(""+G,q.mode,$),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return $=Yl(G.type,G.key,G.props,null,q.mode,$),Fo($,G),$.return=q,$;case S:return G=gf(G,q.mode,$),G.return=q,G;case Z:var ge=G._init;return G=ge(G._payload),xe(q,G,$)}if(de(G)||ae(G))return G=yr(G,q.mode,$,null),G.return=q,G;if(typeof G.then=="function")return xe(q,uc(G),$);if(G.$$typeof===O)return xe(q,Jl(q,G),$);fc(q,G)}return null}function se(q,G,$,ge){var We=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return We!==null?null:R(q,G,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===We?j(q,G,$,ge):null;case S:return $.key===We?te(q,G,$,ge):null;case Z:return We=$._init,$=We($._payload),se(q,G,$,ge)}if(de($)||ae($))return We!==null?null:me(q,G,$,ge,null);if(typeof $.then=="function")return se(q,G,uc($),ge);if($.$$typeof===O)return se(q,G,Jl(q,$),ge);fc(q,$)}return null}function oe(q,G,$,ge,We){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return q=q.get($)||null,R(G,q,""+ge,We);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return q=q.get(ge.key===null?$:ge.key)||null,j(G,q,ge,We);case S:return q=q.get(ge.key===null?$:ge.key)||null,te(G,q,ge,We);case Z:var yt=ge._init;return ge=yt(ge._payload),oe(q,G,$,ge,We)}if(de(ge)||ae(ge))return q=q.get($)||null,me(G,q,ge,We,null);if(typeof ge.then=="function")return oe(q,G,$,uc(ge),We);if(ge.$$typeof===O)return oe(q,G,$,Jl(G,ge),We);fc(G,ge)}return null}function ot(q,G,$,ge){for(var We=null,yt=null,Je=G,st=G=0,En=null;Je!==null&&st<$.length;st++){Je.index>st?(En=Je,Je=null):En=Je.sibling;var Ct=se(q,Je,$[st],ge);if(Ct===null){Je===null&&(Je=En);break}t&&Je&&Ct.alternate===null&&i(q,Je),G=m(Ct,G,st),yt===null?We=Ct:yt.sibling=Ct,yt=Ct,Je=En}if(st===$.length)return s(q,Je),Ut&&br(q,st),We;if(Je===null){for(;st<$.length;st++)Je=xe(q,$[st],ge),Je!==null&&(G=m(Je,G,st),yt===null?We=Je:yt.sibling=Je,yt=Je);return Ut&&br(q,st),We}for(Je=l(Je);st<$.length;st++)En=oe(Je,q,st,$[st],ge),En!==null&&(t&&En.alternate!==null&&Je.delete(En.key===null?st:En.key),G=m(En,G,st),yt===null?We=En:yt.sibling=En,yt=En);return t&&Je.forEach(function(tr){return i(q,tr)}),Ut&&br(q,st),We}function at(q,G,$,ge){if($==null)throw Error(r(151));for(var We=null,yt=null,Je=G,st=G=0,En=null,Ct=$.next();Je!==null&&!Ct.done;st++,Ct=$.next()){Je.index>st?(En=Je,Je=null):En=Je.sibling;var tr=se(q,Je,Ct.value,ge);if(tr===null){Je===null&&(Je=En);break}t&&Je&&tr.alternate===null&&i(q,Je),G=m(tr,G,st),yt===null?We=tr:yt.sibling=tr,yt=tr,Je=En}if(Ct.done)return s(q,Je),Ut&&br(q,st),We;if(Je===null){for(;!Ct.done;st++,Ct=$.next())Ct=xe(q,Ct.value,ge),Ct!==null&&(G=m(Ct,G,st),yt===null?We=Ct:yt.sibling=Ct,yt=Ct);return Ut&&br(q,st),We}for(Je=l(Je);!Ct.done;st++,Ct=$.next())Ct=oe(Je,q,st,Ct.value,ge),Ct!==null&&(t&&Ct.alternate!==null&&Je.delete(Ct.key===null?st:Ct.key),G=m(Ct,G,st),yt===null?We=Ct:yt.sibling=Ct,yt=Ct);return t&&Je.forEach(function(Wb){return i(q,Wb)}),Ut&&br(q,st),We}function Vt(q,G,$,ge){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var We=$.key;G!==null;){if(G.key===We){if(We=$.type,We===T){if(G.tag===7){s(q,G.sibling),ge=f(G,$.props.children),ge.return=q,q=ge;break e}}else if(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Z&&rv(We)===G.type){s(q,G.sibling),ge=f(G,$.props),Fo(ge,$),ge.return=q,q=ge;break e}s(q,G);break}else i(q,G);G=G.sibling}$.type===T?(ge=yr($.props.children,q.mode,ge,$.key),ge.return=q,q=ge):(ge=Yl($.type,$.key,$.props,null,q.mode,ge),Fo(ge,$),ge.return=q,q=ge)}return E(q);case S:e:{for(We=$.key;G!==null;){if(G.key===We)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){s(q,G.sibling),ge=f(G,$.children||[]),ge.return=q,q=ge;break e}else{s(q,G);break}else i(q,G);G=G.sibling}ge=gf($,q.mode,ge),ge.return=q,q=ge}return E(q);case Z:return We=$._init,$=We($._payload),Vt(q,G,$,ge)}if(de($))return ot(q,G,$,ge);if(ae($)){if(We=ae($),typeof We!="function")throw Error(r(150));return $=We.call($),at(q,G,$,ge)}if(typeof $.then=="function")return Vt(q,G,uc($),ge);if($.$$typeof===O)return Vt(q,G,Jl(q,$),ge);fc(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(s(q,G.sibling),ge=f(G,$),ge.return=q,q=ge):(s(q,G),ge=mf($,q.mode,ge),ge.return=q,q=ge),E(q)):s(q,G)}return function(q,G,$,ge){try{Po=0;var We=Vt(q,G,$,ge);return ms=null,We}catch(Je){if(Je===Ao||Je===$l)throw Je;var yt=ei(29,Je,null,q.mode);return yt.lanes=ge,yt.return=q,yt}finally{}}}var gs=sv(!0),ov=sv(!1),mi=ee(null),zi=null;function Ba(t){var i=t.alternate;be(xn,xn.current&1),be(mi,t),zi===null&&(i===null||fs.current!==null||i.memoizedState!==null)&&(zi=t)}function lv(t){if(t.tag===22){if(be(xn,xn.current),be(mi,t),zi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(zi=t)}}else Va()}function Va(){be(xn,xn.current),be(mi,mi.current)}function aa(t){ye(mi),zi===t&&(zi=null),ye(xn)}var xn=ee(0);function dc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||jd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Zf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Qf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ai(),f=Ia(l);f.payload=i,s!=null&&(f.callback=s),i=ja(t,f,l),i!==null&&(ri(i,t,l),wo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ai(),f=Ia(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ja(t,f,l),i!==null&&(ri(i,t,l),wo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ai(),l=Ia(s);l.tag=2,i!=null&&(l.callback=i),i=ja(t,l,s),i!==null&&(ri(i,t,s),wo(i,t,s))}};function cv(t,i,s,l,f,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!xo(s,l)||!xo(f,m):!0}function uv(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Qf.enqueueReplaceState(i,i.state,null)}function Nr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function fv(t){hc(t)}function dv(t){console.error(t)}function hv(t){hc(t)}function pc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function pv(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Jf(t,i,s){return s=Ia(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(t,i)},s}function mv(t){return t=Ia(t),t.tag=3,t}function gv(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){pv(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){pv(i,s,l),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function WS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Mo(i,s,f,!0),s=mi.current,s!==null){switch(s.tag){case 13:return zi===null?Sd():s.alternate===null&&rn===0&&(rn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Af?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Md(t,l,f)),!1;case 22:return s.flags|=65536,l===Af?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Md(t,l,f)),!1}throw Error(r(435,s.tag))}return Md(t,l,f),Sd(),!1}if(Ut)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==_f&&(t=Error(r(422),{cause:l}),bo(fi(t,s)))):(l!==_f&&(i=Error(r(423),{cause:l}),bo(fi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=fi(l,s),f=Jf(t.stateNode,l,f),Nf(t,f),rn!==4&&(rn=2)),!1;var m=Error(r(520),{cause:l});if(m=fi(m,s),ko===null?ko=[m]:ko.push(m),rn!==4&&(rn=2),i===null)return!0;l=fi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Jf(s.stateNode,l,t),Nf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ya===null||!Ya.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=mv(f),gv(f,t,s,l),Nf(s,f),!1}s=s.return}while(s!==null);return!1}var vv=Error(r(461)),bn=!1;function Rn(t,i,s,l){i.child=t===null?ov(i,null,s,l):gs(i,t.child,s,l)}function xv(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var R in l)R!=="ref"&&(E[R]=l[R])}else E=l;return Ar(i),l=Of(t,i,s,E,m,f),R=Pf(),t!==null&&!bn?(Ff(t,i,f),ra(t,i,f)):(Ut&&R&&vf(i),i.flags|=1,Rn(t,i,l,f),i.child)}function _v(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!pf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,yv(t,i,m,l,f)):(t=Yl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!rd(t,f)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:xo,s(E,l)&&t.ref===i.ref)return ra(t,i,f)}return i.flags|=1,t=Ki(m,l),t.ref=i.ref,t.return=i,i.child=t}function yv(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(xo(m,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=m,rd(t,f))(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,ra(t,i,f)}return Kf(t,i,s,l,f)}function Sv(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return bv(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kl(i,m!==null?m.cachePool:null),m!==null?yg(i,m):Df(),lv(i);else return i.lanes=i.childLanes=536870912,bv(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Kl(i,m.cachePool),yg(i,m),Va(),i.memoizedState=null):(t!==null&&Kl(i,null),Df(),Va());return Rn(t,i,f,s),i.child}function bv(t,i,s,l){var f=Tf();return f=f===null?null:{parent:vn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Kl(i,null),Df(),lv(i),t!==null&&Mo(t,i,l,!0),null}function mc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Kf(t,i,s,l,f){return Ar(i),s=Of(t,i,s,l,void 0,f),l=Pf(),t!==null&&!bn?(Ff(t,i,f),ra(t,i,f)):(Ut&&l&&vf(i),i.flags|=1,Rn(t,i,s,f),i.child)}function Mv(t,i,s,l,f,m){return Ar(i),i.updateQueue=null,s=bg(i,l,s,f),Sg(t),l=Pf(),t!==null&&!bn?(Ff(t,i,m),ra(t,i,m)):(Ut&&l&&vf(i),i.flags|=1,Rn(t,i,s,m),i.child)}function Ev(t,i,s,l,f){if(Ar(i),i.stateNode===null){var m=ss,E=s.contextType;typeof E=="object"&&E!==null&&(m=Ln(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Qf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Rf(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Ln(E):ss,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Zf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Qf.enqueueReplaceState(m,m.state,null),Co(i,l,m,f),No(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var R=i.memoizedProps,j=Nr(s,R);m.props=j;var te=m.context,me=s.contextType;E=ss,typeof me=="object"&&me!==null&&(E=Ln(me));var xe=s.getDerivedStateFromProps;me=typeof xe=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||te!==E)&&uv(i,m,l,E),Fa=!1;var se=i.memoizedState;m.state=se,Co(i,l,m,f),No(),te=i.memoizedState,R||se!==te||Fa?(typeof xe=="function"&&(Zf(i,s,xe,l),te=i.memoizedState),(j=Fa||cv(i,s,j,l,se,te,E))?(me||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),m.props=l,m.state=te,m.context=E,l=j):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,wf(t,i),E=i.memoizedProps,me=Nr(s,E),m.props=me,xe=i.pendingProps,se=m.context,te=s.contextType,j=ss,typeof te=="object"&&te!==null&&(j=Ln(te)),R=s.getDerivedStateFromProps,(te=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==xe||se!==j)&&uv(i,m,l,j),Fa=!1,se=i.memoizedState,m.state=se,Co(i,l,m,f),No();var oe=i.memoizedState;E!==xe||se!==oe||Fa||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof R=="function"&&(Zf(i,s,R,l),oe=i.memoizedState),(me=Fa||cv(i,s,me,l,se,oe,j)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,oe,j),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,oe,j)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=oe),m.props=l,m.state=oe,m.context=j,l=me):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,mc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=gs(i,t.child,null,f),i.child=gs(i,null,s,f)):Rn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ra(t,i,f),t}function Tv(t,i,s,l){return So(),i.flags|=256,Rn(t,i,s,l),i.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(t){return{baseLanes:t,cachePool:dg()}}function td(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=gi),t}function Av(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ut){if(f?Ba(i):Va(),Ut){var R=an,j;if(j=R){e:{for(j=R,R=ji;j.nodeType!==8;){if(!R){R=null;break e}if(j=Ai(j.nextSibling),j===null){R=null;break e}}R=j}R!==null?(i.memoizedState={dehydrated:R,treeContext:Sr!==null?{id:$i,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},j=ei(18,null,null,0),j.stateNode=R,j.return=i,i.child=j,Bn=i,an=null,j=!0):j=!1}j||Er(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return jd(R)?i.lanes=32:i.lanes=536870912,null;aa(i)}return R=l.children,l=l.fallback,f?(Va(),f=i.mode,R=gc({mode:"hidden",children:R},f),l=yr(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,f=i.child,f.memoizedState=ed(s),f.childLanes=td(t,E,s),i.memoizedState=$f,l):(Ba(i),nd(i,R))}if(j=t.memoizedState,j!==null&&(R=j.dehydrated,R!==null)){if(m)i.flags&256?(Ba(i),i.flags&=-257,i=id(t,i,s)):i.memoizedState!==null?(Va(),i.child=t.child,i.flags|=128,i=null):(Va(),f=l.fallback,R=i.mode,l=gc({mode:"visible",children:l.children},R),f=yr(f,R,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,gs(i,t.child,null,s),l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,E,s),i.memoizedState=$f,i=f);else if(Ba(i),jd(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var te=E.dgst;E=te,l=Error(r(419)),l.stack="",l.digest=E,bo({value:l,source:null,stack:null}),i=id(t,i,s)}else if(bn||Mo(t,i,s,!1),E=(s&t.childLanes)!==0,bn||E){if(E=Yt,E!==null&&(l=s&-s,l=(l&42)!==0?1:lt(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==j.retryLane))throw j.retryLane=l,rs(t,l),ri(E,t,l),vv;R.data==="$?"||Sd(),i=id(t,i,s)}else R.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=j.treeContext,an=Ai(R.nextSibling),Bn=i,Ut=!0,Mr=null,ji=!1,t!==null&&(hi[pi++]=$i,hi[pi++]=ea,hi[pi++]=Sr,$i=t.id,ea=t.overflow,Sr=i),i=nd(i,l.children),i.flags|=4096);return i}return f?(Va(),f=l.fallback,R=i.mode,j=t.child,te=j.sibling,l=Ki(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,te!==null?f=Ki(te,f):(f=yr(f,R,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,R=t.child.memoizedState,R===null?R=ed(s):(j=R.cachePool,j!==null?(te=vn._currentValue,j=j.parent!==te?{parent:te,pool:te}:j):j=dg(),R={baseLanes:R.baseLanes|s,cachePool:j}),f.memoizedState=R,f.childLanes=td(t,E,s),i.memoizedState=$f,l):(Ba(i),s=t.child,t=s.sibling,s=Ki(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function nd(t,i){return i=gc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function gc(t,i){return t=ei(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function id(t,i,s){return gs(i,t.child,null,s),t=nd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Rv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Sf(t.return,i,s)}function ad(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function wv(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Rn(t,i,l.children,s),l=xn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,s,i);else if(t.tag===19)Rv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(be(xn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&dc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),ad(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&dc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}ad(i,!0,s,null,m);break;case"together":ad(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ra(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Xa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Mo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=Ki(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Ki(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function rd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function XS(t,i,s){switch(i.tag){case 3:Me(i,i.stateNode.containerInfo),Pa(i,vn,t.memoizedState.cache),So();break;case 27:case 5:Ze(i);break;case 4:Me(i,i.stateNode.containerInfo);break;case 10:Pa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ba(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Av(t,i,s):(Ba(i),t=ra(t,i,s),t!==null?t.sibling:null);Ba(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Mo(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return wv(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),be(xn,xn.current),l)break;return null;case 22:case 23:return i.lanes=0,Sv(t,i,s);case 24:Pa(i,vn,t.memoizedState.cache)}return ra(t,i,s)}function Nv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)bn=!0;else{if(!rd(t,s)&&(i.flags&128)===0)return bn=!1,XS(t,i,s);bn=(t.flags&131072)!==0}else bn=!1,Ut&&(i.flags&1048576)!==0&&rg(i,Zl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")pf(l)?(t=Nr(l,t),i.tag=1,i=Ev(null,i,l,t,s)):(i.tag=0,i=Kf(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===C){i.tag=11,i=xv(null,i,l,t,s);break e}else if(f===V){i.tag=14,i=_v(null,i,l,t,s);break e}}throw i=pe(l)||l,Error(r(306,i,""))}}return i;case 0:return Kf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Nr(l,i.pendingProps),Ev(t,i,l,f,s);case 3:e:{if(Me(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,wf(t,i),Co(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Pa(i,vn,l),l!==m.cache&&bf(i,[vn],s,!0),No(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Tv(t,i,l,s);break e}else if(l!==f){f=fi(Error(r(424)),i),bo(f),i=Tv(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(an=Ai(t.firstChild),Bn=i,Ut=!0,Mr=null,ji=!0,s=ov(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(So(),l===f){i=ra(t,i,s);break e}Rn(t,i,l,s)}i=i.child}return i;case 26:return mc(t,i),t===null?(s=L0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ut||(s=i.type,t=i.pendingProps,l=Cc(ne.current).createElement(s),l[gn]=i,l[tn]=t,Nn(l,s,t),un(l),i.stateNode=l):i.memoizedState=L0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ze(i),t===null&&Ut&&(l=i.stateNode=C0(i.type,i.pendingProps,ne.current),Bn=i,ji=!0,f=an,Qa(i.type)?(zd=f,an=Ai(l.firstChild)):an=f),Rn(t,i,i.pendingProps.children,s),mc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ut&&((f=l=an)&&(l=yb(l,i.type,i.pendingProps,ji),l!==null?(i.stateNode=l,Bn=i,an=Ai(l.firstChild),ji=!1,f=!0):f=!1),f||Er(i)),Ze(i),f=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,l=m.children,Pd(f,m)?l=null:E!==null&&Pd(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=Of(t,i,jS,null,null,s),Ko._currentValue=f),mc(t,i),Rn(t,i,l,s),i.child;case 6:return t===null&&Ut&&((t=s=an)&&(s=Sb(s,i.pendingProps,ji),s!==null?(i.stateNode=s,Bn=i,an=null,t=!0):t=!1),t||Er(i)),null;case 13:return Av(t,i,s);case 4:return Me(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,s):Rn(t,i,l,s),i.child;case 11:return xv(t,i,i.type,i.pendingProps,s);case 7:return Rn(t,i,i.pendingProps,s),i.child;case 8:return Rn(t,i,i.pendingProps.children,s),i.child;case 12:return Rn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Pa(i,i.type,l.value),Rn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ar(i),f=Ln(f),l=l(f),i.flags|=1,Rn(t,i,l,s),i.child;case 14:return _v(t,i,i.type,i.pendingProps,s);case 15:return yv(t,i,i.type,i.pendingProps,s);case 19:return wv(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=gc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Ki(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Sv(t,i,s);case 24:return Ar(i),l=Ln(vn),t===null?(f=Tf(),f===null&&(f=Yt,m=Mf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Rf(i),Pa(i,vn,f)):((t.lanes&s)!==0&&(wf(t,i),Co(i,null,null,s),No()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Pa(i,vn,l)):(l=m.cache,Pa(i,vn,l),l!==f.cache&&bf(i,[vn],s,!0))),Rn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function sa(t){t.flags|=4}function Cv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j0(i)){if(i=mi.current,i!==null&&((Rt&4194048)===Rt?zi!==null:(Rt&62914560)!==Rt&&(Rt&536870912)===0||i!==zi))throw Ro=Af,hg;t.flags|=8192}}function vc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Re():536870912,t.lanes|=i,ys|=i)}function Io(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Kt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function YS(t,i,s){var l=i.pendingProps;switch(xf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(i),null;case 1:return Kt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),na(vn),Ke(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(yo(i)?sa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,lg())),Kt(i),null;case 26:return s=i.memoizedState,t===null?(sa(i),s!==null?(Kt(i),Cv(i,s)):(Kt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(sa(i),Kt(i),Cv(i,s)):(Kt(i),i.flags&=-16777217):(t.memoizedProps!==l&&sa(i),Kt(i),i.flags&=-16777217),null;case 27:ht(i),s=ne.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&sa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Kt(i),null}t=Le.current,yo(i)?sg(i):(t=C0(f,l,s),i.stateNode=t,sa(i))}return Kt(i),null;case 5:if(ht(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&sa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Kt(i),null}if(t=Le.current,yo(i))sg(i);else{switch(f=Cc(ne.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[gn]=i,t[tn]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(Nn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&sa(i)}}return Kt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&sa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=ne.current,yo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||M0(t.nodeValue,s)),t||Er(i)}else t=Cc(t).createTextNode(l),t[gn]=i,i.stateNode=t}return Kt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=yo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gn]=i}else So(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Kt(i),f=!1}else f=lg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(aa(i),i):(aa(i),null)}if(aa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),vc(i,i.updateQueue),Kt(i),null;case 4:return Ke(),t===null&&Cd(i.stateNode.containerInfo),Kt(i),null;case 10:return na(i.type),Kt(i),null;case 19:if(ye(xn),f=i.memoizedState,f===null)return Kt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Io(f,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=dc(t),m!==null){for(i.flags|=128,Io(f,!1),t=m.updateQueue,i.updateQueue=t,vc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)ag(s,t),s=s.sibling;return be(xn,xn.current&1|2),i.child}t=t.sibling}f.tail!==null&&ze()>yc&&(i.flags|=128,l=!0,Io(f,!1),i.lanes=4194304)}else{if(!l)if(t=dc(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,vc(i,t),Io(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ut)return Kt(i),null}else 2*ze()-f.renderingStartTime>yc&&s!==536870912&&(i.flags|=128,l=!0,Io(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=ze(),i.sibling=null,t=xn.current,be(xn,l?t&1|2:t&1),i):(Kt(i),null);case 22:case 23:return aa(i),Uf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Kt(i),i.subtreeFlags&6&&(i.flags|=8192)):Kt(i),s=i.updateQueue,s!==null&&vc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ye(Rr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),na(vn),Kt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function qS(t,i){switch(xf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return na(vn),Ke(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ht(i),null;case 13:if(aa(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));So()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ye(xn),null;case 4:return Ke(),null;case 10:return na(i.type),null;case 22:case 23:return aa(i),Uf(),t!==null&&ye(Rr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return na(vn),null;case 25:return null;default:return null}}function Dv(t,i){switch(xf(i),i.tag){case 3:na(vn),Ke();break;case 26:case 27:case 5:ht(i);break;case 4:Ke();break;case 13:aa(i);break;case 19:ye(xn);break;case 10:na(i.type);break;case 22:case 23:aa(i),Uf(),t!==null&&ye(Rr);break;case 24:na(vn)}}function jo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==f)}}catch(R){Gt(i,i.return,R)}}function Ha(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var E=l.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,f=i;var j=s,te=R;try{te()}catch(me){Gt(f,j,me)}}}l=l.next}while(l!==m)}}catch(me){Gt(i,i.return,me)}}function Uv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{_g(i,s)}catch(l){Gt(t,t.return,l)}}}function Lv(t,i,s){s.props=Nr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Gt(t,i,l)}}function zo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Gt(t,i,f)}}function Bi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Gt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Gt(t,i,f)}else s.current=null}function Ov(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Gt(t,t.return,f)}}function sd(t,i,s){try{var l=t.stateNode;mb(l,t.type,s,i),l[tn]=i}catch(f){Gt(t,t.return,f)}}function Pv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Nc));else if(l!==4&&(l===27&&Qa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(ld(t,i,s),t=t.sibling;t!==null;)ld(t,i,s),t=t.sibling}function xc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Qa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(xc(t,i,s),t=t.sibling;t!==null;)xc(t,i,s),t=t.sibling}function Fv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Nn(i,l,s),i[gn]=t,i[tn]=s}catch(m){Gt(t,t.return,m)}}var oa=!1,cn=!1,cd=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function ZS(t,i){if(t=t.containerInfo,Ld=Fc,t=qm(t),of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,R=-1,j=-1,te=0,me=0,xe=t,se=null;t:for(;;){for(var oe;xe!==s||f!==0&&xe.nodeType!==3||(R=E+f),xe!==m||l!==0&&xe.nodeType!==3||(j=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(oe=xe.firstChild)!==null;)se=xe,xe=oe;for(;;){if(xe===t)break t;if(se===s&&++te===f&&(R=E),se===m&&++me===l&&(j=E),(oe=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=oe}s=R===-1||j===-1?null:{start:R,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(Od={focusedElem:t,selectionRange:s},Fc=!1,Mn=i;Mn!==null;)if(i=Mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Mn=t;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ot=Nr(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(ot,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Gt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Id(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Mn=t;break}Mn=i.return}}function jv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ka(t,s),l&4&&jo(5,s);break;case 1:if(ka(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){Gt(s,s.return,E)}else{var f=Nr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Gt(s,s.return,E)}}l&64&&Uv(s),l&512&&zo(s,s.return);break;case 3:if(ka(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{_g(t,i)}catch(E){Gt(s,s.return,E)}}break;case 27:i===null&&l&4&&Fv(s);case 26:case 5:ka(t,s),i===null&&l&4&&Ov(s),l&512&&zo(s,s.return);break;case 12:ka(t,s);break;case 13:ka(t,s),l&4&&Vv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=ab.bind(null,s),bb(t,s))));break;case 22:if(l=s.memoizedState!==null||oa,!l){i=i!==null&&i.memoizedState!==null||cn,f=oa;var m=cn;oa=l,(cn=i)&&!m?Ga(t,s,(s.subtreeFlags&8772)!==0):ka(t,s),oa=f,cn=m}break;case 30:break;default:ka(t,s)}}function zv(t){var i=t.alternate;i!==null&&(t.alternate=null,zv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Jr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Xn=!1;function la(t,i,s){for(s=s.child;s!==null;)Bv(t,i,s),s=s.sibling}function Bv(t,i,s){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(K,s)}catch{}switch(s.tag){case 26:cn||Bi(s,i),la(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:cn||Bi(s,i);var l=Jt,f=Xn;Qa(s.type)&&(Jt=s.stateNode,Xn=!1),la(t,i,s),qo(s.stateNode),Jt=l,Xn=f;break;case 5:cn||Bi(s,i);case 6:if(l=Jt,f=Xn,Jt=null,la(t,i,s),Jt=l,Xn=f,Jt!==null)if(Xn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(s.stateNode)}catch(m){Gt(s,i,m)}else try{Jt.removeChild(s.stateNode)}catch(m){Gt(s,i,m)}break;case 18:Jt!==null&&(Xn?(t=Jt,w0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),nl(t)):w0(Jt,s.stateNode));break;case 4:l=Jt,f=Xn,Jt=s.stateNode.containerInfo,Xn=!0,la(t,i,s),Jt=l,Xn=f;break;case 0:case 11:case 14:case 15:cn||Ha(2,s,i),cn||Ha(4,s,i),la(t,i,s);break;case 1:cn||(Bi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Lv(s,i,l)),la(t,i,s);break;case 21:la(t,i,s);break;case 22:cn=(l=cn)||s.memoizedState!==null,la(t,i,s),cn=l;break;default:la(t,i,s)}}function Vv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nl(t)}catch(s){Gt(i,i.return,s)}}function QS(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Iv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Iv),i;default:throw Error(r(435,t.tag))}}function ud(t,i){var s=QS(t);i.forEach(function(l){var f=rb.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,E=i,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){Jt=R.stateNode,Xn=!1;break e}break;case 5:Jt=R.stateNode,Xn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(Jt===null)throw Error(r(160));Bv(m,E,f),Jt=null,Xn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Hv(i,t),i=i.sibling}var Ti=null;function Hv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(i,t),ni(t),l&4&&(Ha(3,t,t.return),jo(3,t),Ha(5,t,t.return));break;case 1:ti(i,t),ni(t),l&512&&(cn||s===null||Bi(s,s.return)),l&64&&oa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ti;if(ti(i,t),ni(t),l&512&&(cn||s===null||Bi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ii]||m[gn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Nn(m,l,s),m[gn]=t,un(m),l=m;break e;case"link":var E=F0("link","href",f).get(l+(s.href||""));if(E){for(var R=0;R<E.length;R++)if(m=E[R],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(R,1);break t}}m=f.createElement(l),Nn(m,l,s),f.head.appendChild(m);break;case"meta":if(E=F0("meta","content",f).get(l+(s.content||""))){for(R=0;R<E.length;R++)if(m=E[R],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(R,1);break t}}m=f.createElement(l),Nn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[gn]=t,un(m),l=m}t.stateNode=l}else I0(f,t.type,t.stateNode);else t.stateNode=P0(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?I0(f,t.type,t.stateNode):P0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&sd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ti(i,t),ni(t),l&512&&(cn||s===null||Bi(s,s.return)),s!==null&&l&4&&sd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,t),ni(t),l&512&&(cn||s===null||Bi(s,s.return)),t.flags&32){f=t.stateNode;try{kn(f,"")}catch(oe){Gt(t,t.return,oe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,sd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(cd=!0);break;case 6:if(ti(i,t),ni(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(oe){Gt(t,t.return,oe)}}break;case 3:if(Lc=null,f=Ti,Ti=Dc(i.containerInfo),ti(i,t),Ti=f,ni(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{nl(i.containerInfo)}catch(oe){Gt(t,t.return,oe)}cd&&(cd=!1,kv(t));break;case 4:l=Ti,Ti=Dc(t.stateNode.containerInfo),ti(i,t),ni(t),Ti=l;break;case 12:ti(i,t),ni(t);break;case 13:ti(i,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(gd=ze()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ud(t,l)));break;case 22:f=t.memoizedState!==null;var j=s!==null&&s.memoizedState!==null,te=oa,me=cn;if(oa=te||f,cn=me||j,ti(i,t),cn=me,oa=te,ni(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||j||oa||cn||Cr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){j=s=i;try{if(m=j.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=j.stateNode;var xe=j.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(oe){Gt(j,j.return,oe)}}}else if(i.tag===6){if(s===null){j=i;try{j.stateNode.nodeValue=f?"":j.memoizedProps}catch(oe){Gt(j,j.return,oe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,ud(t,s))));break;case 19:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ud(t,l)));break;case 30:break;case 21:break;default:ti(i,t),ni(t)}}function ni(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Pv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=od(t);xc(t,m,f);break;case 5:var E=s.stateNode;s.flags&32&&(kn(E,""),s.flags&=-33);var R=od(t);xc(t,R,E);break;case 3:case 4:var j=s.stateNode.containerInfo,te=od(t);ld(t,te,j);break;default:throw Error(r(161))}}catch(me){Gt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function kv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;kv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ka(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)jv(t,i.alternate,i),i=i.sibling}function Cr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Cr(i);break;case 1:Bi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Lv(i,i.return,s),Cr(i);break;case 27:qo(i.stateNode);case 26:case 5:Bi(i,i.return),Cr(i);break;case 22:i.memoizedState===null&&Cr(i);break;case 30:Cr(i);break;default:Cr(i)}t=t.sibling}}function Ga(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ga(f,m,s),jo(4,m);break;case 1:if(Ga(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(te){Gt(l,l.return,te)}if(l=m,f=l.updateQueue,f!==null){var R=l.stateNode;try{var j=f.shared.hiddenCallbacks;if(j!==null)for(f.shared.hiddenCallbacks=null,f=0;f<j.length;f++)xg(j[f],R)}catch(te){Gt(l,l.return,te)}}s&&E&64&&Uv(m),zo(m,m.return);break;case 27:Fv(m);case 26:case 5:Ga(f,m,s),s&&l===null&&E&4&&Ov(m),zo(m,m.return);break;case 12:Ga(f,m,s);break;case 13:Ga(f,m,s),s&&E&4&&Vv(f,m);break;case 22:m.memoizedState===null&&Ga(f,m,s),zo(m,m.return);break;case 30:break;default:Ga(f,m,s)}i=i.sibling}}function fd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Eo(s))}function dd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Eo(t))}function Vi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Gv(t,i,s,l),i=i.sibling}function Gv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i,s,l),f&2048&&jo(9,i);break;case 1:Vi(t,i,s,l);break;case 3:Vi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Eo(t)));break;case 12:if(f&2048){Vi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,R=m.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Gt(i,i.return,j)}}else Vi(t,i,s,l);break;case 13:Vi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Vi(t,i,s,l):Bo(t,i):m._visibility&2?Vi(t,i,s,l):(m._visibility|=2,vs(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&fd(E,i);break;case 24:Vi(t,i,s,l),f&2048&&dd(i.alternate,i);break;default:Vi(t,i,s,l)}}function vs(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,E=i,R=s,j=l,te=E.flags;switch(E.tag){case 0:case 11:case 15:vs(m,E,R,j,f),jo(8,E);break;case 23:break;case 22:var me=E.stateNode;E.memoizedState!==null?me._visibility&2?vs(m,E,R,j,f):Bo(m,E):(me._visibility|=2,vs(m,E,R,j,f)),f&&te&2048&&fd(E.alternate,E);break;case 24:vs(m,E,R,j,f),f&&te&2048&&dd(E.alternate,E);break;default:vs(m,E,R,j,f)}i=i.sibling}}function Bo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Bo(s,l),f&2048&&fd(l.alternate,l);break;case 24:Bo(s,l),f&2048&&dd(l.alternate,l);break;default:Bo(s,l)}i=i.sibling}}var Vo=8192;function xs(t){if(t.subtreeFlags&Vo)for(t=t.child;t!==null;)Wv(t),t=t.sibling}function Wv(t){switch(t.tag){case 26:xs(t),t.flags&Vo&&t.memoizedState!==null&&Pb(Ti,t.memoizedState,t.memoizedProps);break;case 5:xs(t);break;case 3:case 4:var i=Ti;Ti=Dc(t.stateNode.containerInfo),xs(t),Ti=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Vo,Vo=16777216,xs(t),Vo=i):xs(t));break;default:xs(t)}}function Xv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ho(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,qv(l,t)}Xv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yv(t),t=t.sibling}function Yv(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,_c(t)):Ho(t);break;default:Ho(t)}}function _c(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,qv(l,t)}Xv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ha(8,i,i.return),_c(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,_c(i));break;default:_c(i)}t=t.sibling}}function qv(t,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Ha(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Eo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else e:for(s=t;Mn!==null;){l=Mn;var f=l.sibling,m=l.return;if(zv(l),l===s){Mn=null;break e}if(f!==null){f.return=m,Mn=f;break e}Mn=m}}}var JS={getCacheForType:function(t){var i=Ln(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},KS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Yt=null,bt=null,Rt=0,It=0,ii=null,Wa=!1,_s=!1,hd=!1,ca=0,rn=0,Xa=0,Dr=0,pd=0,gi=0,ys=0,ko=null,Yn=null,md=!1,gd=0,yc=1/0,Sc=null,Ya=null,wn=0,qa=null,Ss=null,bs=0,vd=0,xd=null,Zv=null,Go=0,_d=null;function ai(){if((Ft&2)!==0&&Rt!==0)return Rt&-Rt;if(I.T!==null){var t=cs;return t!==0?t:Ad()}return wt()}function Qv(){gi===0&&(gi=(Rt&536870912)===0||Ut?W():536870912);var t=mi.current;return t!==null&&(t.flags|=32),gi}function ri(t,i,s){(t===Yt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(Ms(t,0),Za(t,Rt,gi,!1)),Be(t,s),((Ft&2)===0||t!==Yt)&&(t===Yt&&((Ft&2)===0&&(Dr|=s),rn===4&&Za(t,Rt,gi,!1)),Hi(t))}function Jv(t,i,s){if((Ft&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=l?tb(t,i):bd(t,i,!0),m=l;do{if(f===0){_s&&!l&&Za(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!$S(s)){f=bd(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var R=t;f=ko;var j=R.current.memoizedState.isDehydrated;if(j&&(Ms(R,E).flags|=256),E=bd(R,E,!1),E!==2){if(hd&&!j){R.errorRecoveryDisabledLanes|=m,Dr|=m,f=4;break e}m=Yn,Yn=f,m!==null&&(Yn===null?Yn=m:Yn.push.apply(Yn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Ms(t,0),Za(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Za(l,i,gi,!Wa);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=gd+300-ze(),10<f)){if(Za(l,i,gi,!Wa),qe(l,0,!0)!==0)break e;l.timeoutHandle=A0(Kv.bind(null,l,s,Yn,Sc,md,i,gi,Dr,ys,Wa,m,2,-0,0),f);break e}Kv(l,s,Yn,Sc,md,i,gi,Dr,ys,Wa,m,0,-0,0)}}break}while(!0);Hi(t)}function Kv(t,i,s,l,f,m,E,R,j,te,me,xe,se,oe){if(t.timeoutHandle=-1,xe=i.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(Jo={stylesheets:null,count:0,unsuspend:Ob},Wv(i),xe=Fb(),xe!==null)){t.cancelPendingCommit=xe(r0.bind(null,t,i,m,s,l,f,E,R,j,me,1,se,oe)),Za(t,m,E,!te);return}r0(t,i,m,s,l,f,E,R,j)}function $S(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!$n(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Za(t,i,s,l){i&=~pd,i&=~Dr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Ce(f),E=1<<m;l[m]=-1,f&=~E}s!==0&&_e(t,s,i)}function bc(){return(Ft&6)===0?(Wo(0),!1):!0}function yd(){if(bt!==null){if(It===0)var t=bt.return;else t=bt,ta=Tr=null,If(t),ms=null,Po=0,t=bt;for(;t!==null;)Dv(t.alternate,t),t=t.return;bt=null}}function Ms(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,vb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),yd(),Yt=t,bt=s=Ki(t.current,null),Rt=i,It=0,ii=null,Wa=!1,_s=Ue(t,i),hd=!1,ys=gi=pd=Dr=Xa=rn=0,Yn=ko=null,md=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ce(l),m=1<<f;i|=t[f],l&=~m}return ca=i,Gl(),s}function $v(t,i){_t=null,I.H=cc,i===Ao||i===$l?(i=gg(),It=3):i===hg?(i=gg(),It=4):It=i===vv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,bt===null&&(rn=1,pc(t,fi(i,t.current)))}function e0(){var t=I.H;return I.H=cc,t===null?cc:t}function t0(){var t=I.A;return I.A=JS,t}function Sd(){rn=4,Wa||(Rt&4194048)!==Rt&&mi.current!==null||(_s=!0),(Xa&134217727)===0&&(Dr&134217727)===0||Yt===null||Za(Yt,Rt,gi,!1)}function bd(t,i,s){var l=Ft;Ft|=2;var f=e0(),m=t0();(Yt!==t||Rt!==i)&&(Sc=null,Ms(t,i)),i=!1;var E=rn;e:do try{if(It!==0&&bt!==null){var R=bt,j=ii;switch(It){case 8:yd(),E=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var te=It;if(It=0,ii=null,Es(t,R,j,te),s&&_s){E=0;break e}break;default:te=It,It=0,ii=null,Es(t,R,j,te)}}eb(),E=rn;break}catch(me){$v(t,me)}while(!0);return i&&t.shellSuspendCounter++,ta=Tr=null,Ft=l,I.H=f,I.A=m,bt===null&&(Yt=null,Rt=0,Gl()),E}function eb(){for(;bt!==null;)n0(bt)}function tb(t,i){var s=Ft;Ft|=2;var l=e0(),f=t0();Yt!==t||Rt!==i?(Sc=null,yc=ze()+500,Ms(t,i)):_s=Ue(t,i);e:do try{if(It!==0&&bt!==null){i=bt;var m=ii;t:switch(It){case 1:It=0,ii=null,Es(t,i,m,1);break;case 2:case 9:if(pg(m)){It=0,ii=null,i0(i);break}i=function(){It!==2&&It!==9||Yt!==t||(It=7),Hi(t)},m.then(i,i);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:pg(m)?(It=0,ii=null,i0(i)):(It=0,ii=null,Es(t,i,m,7));break;case 5:var E=null;switch(bt.tag){case 26:E=bt.memoizedState;case 5:case 27:var R=bt;if(!E||j0(E)){It=0,ii=null;var j=R.sibling;if(j!==null)bt=j;else{var te=R.return;te!==null?(bt=te,Mc(te)):bt=null}break t}}It=0,ii=null,Es(t,i,m,5);break;case 6:It=0,ii=null,Es(t,i,m,6);break;case 8:yd(),rn=6;break e;default:throw Error(r(462))}}nb();break}catch(me){$v(t,me)}while(!0);return ta=Tr=null,I.H=l,I.A=f,Ft=s,bt!==null?0:(Yt=null,Rt=0,Gl(),rn)}function nb(){for(;bt!==null&&!ct();)n0(bt)}function n0(t){var i=Nv(t.alternate,t,ca);t.memoizedProps=t.pendingProps,i===null?Mc(t):bt=i}function i0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Mv(s,i,i.pendingProps,i.type,void 0,Rt);break;case 11:i=Mv(s,i,i.pendingProps,i.type.render,i.ref,Rt);break;case 5:If(i);default:Dv(s,i),i=bt=ag(i,ca),i=Nv(s,i,ca)}t.memoizedProps=t.pendingProps,i===null?Mc(t):bt=i}function Es(t,i,s,l){ta=Tr=null,If(i),ms=null,Po=0;var f=i.return;try{if(WS(t,f,i,s,Rt)){rn=1,pc(t,fi(s,t.current)),bt=null;return}}catch(m){if(f!==null)throw bt=f,m;rn=1,pc(t,fi(s,t.current)),bt=null;return}i.flags&32768?(Ut||l===1?t=!0:_s||(Rt&536870912)!==0?t=!1:(Wa=t=!0,(l===2||l===9||l===3||l===6)&&(l=mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),a0(i,t)):Mc(i)}function Mc(t){var i=t;do{if((i.flags&32768)!==0){a0(i,Wa);return}t=i.return;var s=YS(i.alternate,i,ca);if(s!==null){bt=s;return}if(i=i.sibling,i!==null){bt=i;return}bt=i=t}while(i!==null);rn===0&&(rn=5)}function a0(t,i){do{var s=qS(t.alternate,t);if(s!==null){s.flags&=32767,bt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){bt=t;return}bt=t=s}while(t!==null);rn=6,bt=null}function r0(t,i,s,l,f,m,E,R,j){t.cancelPendingCommit=null;do Ec();while(wn!==0);if((Ft&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=df,Te(t,s,m,E,R,j),t===Yt&&(bt=Yt=null,Rt=0),Ss=i,qa=t,bs=s,vd=m,xd=f,Zv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sb(Wt,function(){return u0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=J.p,J.p=2,E=Ft,Ft|=4;try{ZS(t,i,s)}finally{Ft=E,J.p=f,I.T=l}}wn=1,s0(),o0(),l0()}}function s0(){if(wn===1){wn=0;var t=qa,i=Ss,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=J.p;J.p=2;var f=Ft;Ft|=4;try{Hv(i,t);var m=Od,E=qm(t.containerInfo),R=m.focusedElem,j=m.selectionRange;if(E!==R&&R&&R.ownerDocument&&Ym(R.ownerDocument.documentElement,R)){if(j!==null&&of(R)){var te=j.start,me=j.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var xe=R.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var oe=se.getSelection(),ot=R.textContent.length,at=Math.min(j.start,ot),Vt=j.end===void 0?at:Math.min(j.end,ot);!oe.extend&&at>Vt&&(E=Vt,Vt=at,at=E);var q=Xm(R,at),G=Xm(R,Vt);if(q&&G&&(oe.rangeCount!==1||oe.anchorNode!==q.node||oe.anchorOffset!==q.offset||oe.focusNode!==G.node||oe.focusOffset!==G.offset)){var $=xe.createRange();$.setStart(q.node,q.offset),oe.removeAllRanges(),at>Vt?(oe.addRange($),oe.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),oe.addRange($))}}}}for(xe=[],oe=R;oe=oe.parentNode;)oe.nodeType===1&&xe.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ge=xe[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Fc=!!Ld,Od=Ld=null}finally{Ft=f,J.p=l,I.T=s}}t.current=i,wn=2}}function o0(){if(wn===2){wn=0;var t=qa,i=Ss,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=J.p;J.p=2;var f=Ft;Ft|=4;try{jv(t,i.alternate,i)}finally{Ft=f,J.p=l,I.T=s}}wn=3}}function l0(){if(wn===4||wn===3){wn=0,it();var t=qa,i=Ss,s=bs,l=Zv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,Ss=qa=null,c0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ya=null),Pt(s),i=i.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(K,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=J.p,J.p=2,I.T=null;try{for(var m=t.onRecoverableError,E=0;E<l.length;E++){var R=l[E];m(R.value,{componentStack:R.stack})}}finally{I.T=i,J.p=f}}(bs&3)!==0&&Ec(),Hi(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===_d?Go++:(Go=0,_d=t):Go=0,Wo(0)}}function c0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Eo(i)))}function Ec(t){return s0(),o0(),l0(),u0()}function u0(){if(wn!==5)return!1;var t=qa,i=vd;vd=0;var s=Pt(bs),l=I.T,f=J.p;try{J.p=32>s?32:s,I.T=null,s=xd,xd=null;var m=qa,E=bs;if(wn=0,Ss=qa=null,bs=0,(Ft&6)!==0)throw Error(r(331));var R=Ft;if(Ft|=4,Yv(m.current),Gv(m,m.current,E,s),Ft=R,Wo(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(K,m)}catch{}return!0}finally{J.p=f,I.T=l,c0(t,i)}}function f0(t,i,s){i=fi(s,i),i=Jf(t.stateNode,i,2),t=ja(t,i,2),t!==null&&(Be(t,2),Hi(t))}function Gt(t,i,s){if(t.tag===3)f0(t,t,s);else for(;i!==null;){if(i.tag===3){f0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ya===null||!Ya.has(l))){t=fi(s,t),s=mv(2),l=ja(i,s,2),l!==null&&(gv(s,l,i,t),Be(l,2),Hi(l));break}}i=i.return}}function Md(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new KS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(hd=!0,f.add(s),t=ib.bind(null,t,i,s),i.then(t,t))}function ib(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(Rt&s)===s&&(rn===4||rn===3&&(Rt&62914560)===Rt&&300>ze()-gd?(Ft&2)===0&&Ms(t,0):pd|=s,ys===Rt&&(ys=0)),Hi(t)}function d0(t,i){i===0&&(i=Re()),t=rs(t,i),t!==null&&(Be(t,i),Hi(t))}function ab(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),d0(t,s)}function rb(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),d0(t,s)}function sb(t,i){return z(t,i)}var Tc=null,Ts=null,Ed=!1,Ac=!1,Td=!1,Ur=0;function Hi(t){t!==Ts&&t.next===null&&(Ts===null?Tc=Ts=t:Ts=Ts.next=t),Ac=!0,Ed||(Ed=!0,lb())}function Wo(t,i){if(!Td&&Ac){Td=!0;do for(var s=!1,l=Tc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-Ce(42|t)+1)-1,m&=f&~(E&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,g0(l,m))}else m=Rt,m=qe(l,l===Yt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ue(l,m)||(s=!0,g0(l,m));l=l.next}while(s);Td=!1}}function ob(){h0()}function h0(){Ac=Ed=!1;var t=0;Ur!==0&&(gb()&&(t=Ur),Ur=0);for(var i=ze(),s=null,l=Tc;l!==null;){var f=l.next,m=p0(l,i);m===0?(l.next=null,s===null?Tc=f:s.next=f,f===null&&(Ts=s)):(s=l,(t!==0||(m&3)!==0)&&(Ac=!0)),l=f}Wo(t)}function p0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-Ce(m),R=1<<E,j=f[E];j===-1?((R&s)===0||(R&l)!==0)&&(f[E]=ft(R,i)):j<=i&&(t.expiredLanes|=R),m&=~R}if(i=Yt,s=Rt,s=qe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(It===2||It===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ot(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ot(l),Pt(s)){case 2:case 8:s=ut;break;case 32:s=Wt;break;case 268435456:s=U;break;default:s=Wt}return l=m0.bind(null,t),s=z(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ot(l),t.callbackPriority=2,t.callbackNode=null,2}function m0(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Ec()&&t.callbackNode!==s)return null;var l=Rt;return l=qe(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Jv(t,l,i),p0(t,ze()),t.callbackNode!=null&&t.callbackNode===s?m0.bind(null,t):null)}function g0(t,i){if(Ec())return null;Jv(t,i,!0)}function lb(){xb(function(){(Ft&6)!==0?z(Ge,ob):h0()})}function Ad(){return Ur===0&&(Ur=W()),Ur}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Il(""+t)}function x0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function cb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=v0((f[tn]||null).action),E=l.submitter;E&&(i=(i=E[tn]||null)?v0(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var R=new Vl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ur!==0){var j=E?x0(f,E):new FormData(f);Xf(s,{pending:!0,data:j,method:f.method,action:m},null,j)}}else typeof m=="function"&&(R.preventDefault(),j=E?x0(f,E):new FormData(f),Xf(s,{pending:!0,data:j,method:f.method,action:m},m,j))},currentTarget:f}]})}}for(var Rd=0;Rd<ff.length;Rd++){var wd=ff[Rd],ub=wd.toLowerCase(),fb=wd[0].toUpperCase()+wd.slice(1);Ei(ub,"on"+fb)}Ei(Jm,"onAnimationEnd"),Ei(Km,"onAnimationIteration"),Ei($m,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(wS,"onTransitionRun"),Ei(NS,"onTransitionStart"),Ei(CS,"onTransitionCancel"),Ei(eg,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function _0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var R=l[E],j=R.instance,te=R.currentTarget;if(R=R.listener,j!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=te;try{m(f)}catch(me){hc(me)}f.currentTarget=null,m=j}else for(E=0;E<l.length;E++){if(R=l[E],j=R.instance,te=R.currentTarget,R=R.listener,j!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=te;try{m(f)}catch(me){hc(me)}f.currentTarget=null,m=j}}}}function Mt(t,i){var s=i[Zr];s===void 0&&(s=i[Zr]=new Set);var l=t+"__bubble";s.has(l)||(y0(i,t,2,!1),s.add(l))}function Nd(t,i,s){var l=0;i&&(l|=4),y0(s,t,l,i)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Cd(t){if(!t[Rc]){t[Rc]=!0,Pl.forEach(function(s){s!=="selectionchange"&&(db.has(s)||Nd(s,!1,t),Nd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Rc]||(i[Rc]=!0,Nd("selectionchange",!1,i))}}function y0(t,i,s,l){switch(G0(i)){case 2:var f=zb;break;case 8:f=Bb;break;default:f=Gd}s=f.bind(null,i,s,t),f=void 0,!Ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Dd(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var R=l.stateNode.containerInfo;if(R===f)break;if(E===4)for(E=l.return;E!==null;){var j=E.tag;if((j===3||j===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;R!==null;){if(E=Qi(R),E===null)return;if(j=E.tag,j===5||j===6||j===26||j===27){l=m=E;continue e}R=R.parentNode}}l=l.return}Rm(function(){var te=m,me=Zu(s),xe=[];e:{var se=tg.get(t);if(se!==void 0){var oe=Vl,ot=t;switch(t){case"keypress":if(zl(s)===0)break e;case"keydown":case"keyup":oe=sS;break;case"focusin":ot="focus",oe=tf;break;case"focusout":ot="blur",oe=tf;break;case"beforeblur":case"afterblur":oe=tf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=cS;break;case Jm:case Km:case $m:oe=J1;break;case eg:oe=fS;break;case"scroll":case"scrollend":oe=X1;break;case"wheel":oe=hS;break;case"copy":case"cut":case"paste":oe=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Um;break;case"toggle":case"beforetoggle":oe=mS}var at=(i&4)!==0,Vt=!at&&(t==="scroll"||t==="scrollend"),q=at?se!==null?se+"Capture":null:se;at=[];for(var G=te,$;G!==null;){var ge=G;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||q===null||(ge=uo(G,q),ge!=null&&at.push(Yo(G,ge,$))),Vt)break;G=G.return}0<at.length&&(se=new oe(se,ot,null,s,me),xe.push({event:se,listeners:at}))}}if((i&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",se&&s!==qu&&(ot=s.relatedTarget||s.fromElement)&&(Qi(ot)||ot[Fi]))break e;if((oe||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,oe?(ot=s.relatedTarget||s.toElement,oe=te,ot=ot?Qi(ot):null,ot!==null&&(Vt=u(ot),at=ot.tag,ot!==Vt||at!==5&&at!==27&&at!==6)&&(ot=null)):(oe=null,ot=te),oe!==ot)){if(at=Cm,ge="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(at=Um,ge="onPointerLeave",q="onPointerEnter",G="pointer"),Vt=oe==null?se:gr(oe),$=ot==null?se:gr(ot),se=new at(ge,G+"leave",oe,s,me),se.target=Vt,se.relatedTarget=$,ge=null,Qi(me)===te&&(at=new at(q,G+"enter",ot,s,me),at.target=$,at.relatedTarget=Vt,ge=at),Vt=ge,oe&&ot)t:{for(at=oe,q=ot,G=0,$=at;$;$=As($))G++;for($=0,ge=q;ge;ge=As(ge))$++;for(;0<G-$;)at=As(at),G--;for(;0<$-G;)q=As(q),$--;for(;G--;){if(at===q||q!==null&&at===q.alternate)break t;at=As(at),q=As(q)}at=null}else at=null;oe!==null&&S0(xe,se,oe,at,!1),ot!==null&&Vt!==null&&S0(xe,Vt,ot,at,!0)}}e:{if(se=te?gr(te):window,oe=se.nodeName&&se.nodeName.toLowerCase(),oe==="select"||oe==="input"&&se.type==="file")var We=Bm;else if(jm(se))if(Vm)We=TS;else{We=MS;var yt=bS}else oe=se.nodeName,!oe||oe.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&Yu(te.elementType)&&(We=Bm):We=ES;if(We&&(We=We(t,te))){zm(xe,We,s,me);break e}yt&&yt(t,se,te),t==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&Un(se,"number",se.value)}switch(yt=te?gr(te):window,t){case"focusin":(jm(yt)||yt.contentEditable==="true")&&(ns=yt,lf=te,_o=null);break;case"focusout":_o=lf=ns=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Zm(xe,s,me);break;case"selectionchange":if(RS)break;case"keydown":case"keyup":Zm(xe,s,me)}var Je;if(af)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ts?Fm(t,s)&&(st="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(st="onCompositionStart");st&&(Lm&&s.locale!=="ko"&&(ts||st!=="onCompositionStart"?st==="onCompositionEnd"&&ts&&(Je=wm()):(Oa=me,Ku="value"in Oa?Oa.value:Oa.textContent,ts=!0)),yt=wc(te,st),0<yt.length&&(st=new Dm(st,t,null,s,me),xe.push({event:st,listeners:yt}),Je?st.data=Je:(Je=Im(s),Je!==null&&(st.data=Je)))),(Je=vS?xS(t,s):_S(t,s))&&(st=wc(te,"onBeforeInput"),0<st.length&&(yt=new Dm("onBeforeInput","beforeinput",null,s,me),xe.push({event:yt,listeners:st}),yt.data=Je)),cb(xe,t,te,s,me)}_0(xe,i)})}function Yo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function wc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=uo(t,s),f!=null&&l.unshift(Yo(t,f,m)),f=uo(t,i),f!=null&&l.push(Yo(t,f,m))),t.tag===3)return l;t=t.return}return[]}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function S0(t,i,s,l,f){for(var m=i._reactName,E=[];s!==null&&s!==l;){var R=s,j=R.alternate,te=R.stateNode;if(R=R.tag,j!==null&&j===l)break;R!==5&&R!==26&&R!==27||te===null||(j=te,f?(te=uo(s,m),te!=null&&E.unshift(Yo(s,te,j))):f||(te=uo(s,m),te!=null&&E.push(Yo(s,te,j)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var hb=/\r\n?/g,pb=/\u0000|\uFFFD/g;function b0(t){return(typeof t=="string"?t:""+t).replace(hb,`
`).replace(pb,"")}function M0(t,i){return i=b0(i),b0(t)===i}function Nc(){}function Bt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||kn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&kn(t,""+l);break;case"className":He(t,"class",l);break;case"tabIndex":He(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":He(t,s,l);break;case"style":Tm(t,l,m);break;case"data":if(i!=="object"){He(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Il(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Bt(t,i,"name",f.name,f,null),Bt(t,i,"formEncType",f.formEncType,f,null),Bt(t,i,"formMethod",f.formMethod,f,null),Bt(t,i,"formTarget",f.formTarget,f,null)):(Bt(t,i,"encType",f.encType,f,null),Bt(t,i,"method",f.method,f,null),Bt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Il(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Nc);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Il(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Oe(t,"popover",l);break;case"xlinkActuate":Ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ie(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ie(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ie(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ie(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=G1.get(s)||s,Oe(t,s,l))}}function Ud(t,i,s,l,f,m){switch(s){case"style":Tm(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?kn(t,l):(typeof l=="number"||typeof l=="bigint")&&kn(t,""+l);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Oe(t,s,l)}}}function Nn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Bt(t,i,m,E,s,null)}}f&&Bt(t,i,"srcSet",s.srcSet,s,null),l&&Bt(t,i,"src",s.src,s,null);return;case"input":Mt("invalid",t);var R=m=E=f=null,j=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":E=me;break;case"checked":j=me;break;case"defaultChecked":te=me;break;case"value":m=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:Bt(t,i,l,me,s,null)}}zn(t,m,R,j,te,E,f,!1),St(t);return;case"select":Mt("invalid",t),l=E=m=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":m=R;break;case"defaultValue":E=R;break;case"multiple":l=R;default:Bt(t,i,f,R,s,null)}i=m,s=E,t.multiple=!!l,i!=null?nn(t,!!l,i,!1):s!=null&&nn(t,!!l,s,!0);return;case"textarea":Mt("invalid",t),m=f=l=null;for(E in s)if(s.hasOwnProperty(E)&&(R=s[E],R!=null))switch(E){case"value":l=R;break;case"defaultValue":f=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Bt(t,i,E,R,s,null)}Kr(t,l,f,m),St(t);return;case"option":for(j in s)if(s.hasOwnProperty(j)&&(l=s[j],l!=null))switch(j){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Bt(t,i,j,l,s,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(l=0;l<Xo.length;l++)Mt(Xo[l],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Bt(t,i,te,l,s,null)}return;default:if(Yu(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&Ud(t,i,me,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Bt(t,i,R,l,s,null))}function mb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,R=null,j=null,te=null,me=null;for(oe in s){var xe=s[oe];if(s.hasOwnProperty(oe)&&xe!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":j=xe;default:l.hasOwnProperty(oe)||Bt(t,i,oe,null,l,xe)}}for(var se in l){var oe=l[se];if(xe=s[se],l.hasOwnProperty(se)&&(oe!=null||xe!=null))switch(se){case"type":m=oe;break;case"name":f=oe;break;case"checked":te=oe;break;case"defaultChecked":me=oe;break;case"value":E=oe;break;case"defaultValue":R=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,i));break;default:oe!==xe&&Bt(t,i,se,oe,l,xe)}}kt(t,E,R,j,te,me,m,f);return;case"select":oe=E=R=se=null;for(m in s)if(j=s[m],s.hasOwnProperty(m)&&j!=null)switch(m){case"value":break;case"multiple":oe=j;default:l.hasOwnProperty(m)||Bt(t,i,m,null,l,j)}for(f in l)if(m=l[f],j=s[f],l.hasOwnProperty(f)&&(m!=null||j!=null))switch(f){case"value":se=m;break;case"defaultValue":R=m;break;case"multiple":E=m;default:m!==j&&Bt(t,i,f,m,l,j)}i=R,s=E,l=oe,se!=null?nn(t,!!s,se,!1):!!l!=!!s&&(i!=null?nn(t,!!s,i,!0):nn(t,!!s,s?[]:"",!1));return;case"textarea":oe=se=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Bt(t,i,R,null,l,f)}for(E in l)if(f=l[E],m=s[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":se=f;break;case"defaultValue":oe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Bt(t,i,E,f,l,m)}An(t,se,oe);return;case"option":for(var ot in s)if(se=s[ot],s.hasOwnProperty(ot)&&se!=null&&!l.hasOwnProperty(ot))switch(ot){case"selected":t.selected=!1;break;default:Bt(t,i,ot,null,l,se)}for(j in l)if(se=l[j],oe=s[j],l.hasOwnProperty(j)&&se!==oe&&(se!=null||oe!=null))switch(j){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Bt(t,i,j,se,l,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)se=s[at],s.hasOwnProperty(at)&&se!=null&&!l.hasOwnProperty(at)&&Bt(t,i,at,null,l,se);for(te in l)if(se=l[te],oe=s[te],l.hasOwnProperty(te)&&se!==oe&&(se!=null||oe!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,i));break;default:Bt(t,i,te,se,l,oe)}return;default:if(Yu(i)){for(var Vt in s)se=s[Vt],s.hasOwnProperty(Vt)&&se!==void 0&&!l.hasOwnProperty(Vt)&&Ud(t,i,Vt,void 0,l,se);for(me in l)se=l[me],oe=s[me],!l.hasOwnProperty(me)||se===oe||se===void 0&&oe===void 0||Ud(t,i,me,se,l,oe);return}}for(var q in s)se=s[q],s.hasOwnProperty(q)&&se!=null&&!l.hasOwnProperty(q)&&Bt(t,i,q,null,l,se);for(xe in l)se=l[xe],oe=s[xe],!l.hasOwnProperty(xe)||se===oe||se==null&&oe==null||Bt(t,i,xe,se,l,oe)}var Ld=null,Od=null;function Cc(t){return t.nodeType===9?t:t.ownerDocument}function E0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Pd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fd=null;function gb(){var t=window.event;return t&&t.type==="popstate"?t===Fd?!1:(Fd=t,!0):(Fd=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,vb=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(_b)}:A0;function _b(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function w0(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=t.ownerDocument;if(s&1&&qo(E.documentElement),s&2&&qo(E.body),s&4)for(s=E.head,qo(s),E=s.firstChild;E;){var R=E.nextSibling,j=E.nodeName;E[Ii]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=R}}if(f===0){t.removeChild(m),nl(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);nl(i)}function Id(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Id(s),Jr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function yb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ii])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function Sb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ai(t.nextSibling),t===null))return null;return t}function jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function bb(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ai(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var zd=null;function N0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function C0(t,i,s){switch(i=Cc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function qo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Jr(t)}var vi=new Map,D0=new Set;function Dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=J.d;J.d={f:Mb,r:Eb,D:Tb,C:Ab,L:Rb,m:wb,X:Cb,S:Nb,M:Db};function Mb(){var t=ua.f(),i=bc();return t||i}function Eb(t){var i=Ua(t);i!==null&&i.tag===5&&i.type==="form"?Jg(i):ua.r(t)}var Rs=typeof document>"u"?null:document;function U0(t,i,s){var l=Rs;if(l&&typeof i=="string"&&i){var f=Sn(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),D0.has(f)||(D0.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Nn(i,"link",t),un(i),l.head.appendChild(i)))}}function Tb(t){ua.D(t),U0("dns-prefetch",t,null)}function Ab(t,i){ua.C(t,i),U0("preconnect",t,i)}function Rb(t,i,s){ua.L(t,i,s);var l=Rs;if(l&&t&&i){var f='link[rel="preload"][as="'+Sn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Sn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Sn(s.imageSizes)+'"]')):f+='[href="'+Sn(t)+'"]';var m=f;switch(i){case"style":m=ws(t);break;case"script":m=Ns(t)}vi.has(m)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),vi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Zo(m))||i==="script"&&l.querySelector(Qo(m))||(i=l.createElement("link"),Nn(i,"link",t),un(i),l.head.appendChild(i)))}}function wb(t,i){ua.m(t,i);var s=Rs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Sn(l)+'"][href="'+Sn(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ns(t)}if(!vi.has(m)&&(t=v({rel:"modulepreload",href:t},i),vi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Qo(m)))return}l=s.createElement("link"),Nn(l,"link",t),un(l),s.head.appendChild(l)}}}function Nb(t,i,s){ua.S(t,i,s);var l=Rs;if(l&&t){var f=La(l).hoistableStyles,m=ws(t);i=i||"default";var E=f.get(m);if(!E){var R={loading:0,preload:null};if(E=l.querySelector(Zo(m)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=vi.get(m))&&Bd(t,s);var j=E=l.createElement("link");un(j),Nn(j,"link",t),j._p=new Promise(function(te,me){j.onload=te,j.onerror=me}),j.addEventListener("load",function(){R.loading|=1}),j.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Uc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:R},f.set(m,E)}}}function Cb(t,i){ua.X(t,i);var s=Rs;if(s&&t){var l=La(s).hoistableScripts,f=Ns(t),m=l.get(f);m||(m=s.querySelector(Qo(f)),m||(t=v({src:t,async:!0},i),(i=vi.get(f))&&Vd(t,i),m=s.createElement("script"),un(m),Nn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Db(t,i){ua.M(t,i);var s=Rs;if(s&&t){var l=La(s).hoistableScripts,f=Ns(t),m=l.get(f);m||(m=s.querySelector(Qo(f)),m||(t=v({src:t,async:!0,type:"module"},i),(i=vi.get(f))&&Vd(t,i),m=s.createElement("script"),un(m),Nn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function L0(t,i,s,l){var f=(f=ne.current)?Dc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ws(s.href),s=La(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ws(s.href);var m=La(f).hoistableStyles,E=m.get(t);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=f.querySelector(Zo(t)))&&!m._p&&(E.instance=m,E.state.loading=5),vi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(t,s),m||Ub(f,t,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ns(s),s=La(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ws(t){return'href="'+Sn(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function O0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ub(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Nn(i,"link",s),un(i),t.head.appendChild(i))}function Ns(t){return'[src="'+Sn(t)+'"]'}function Qo(t){return"script[async]"+t}function P0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Sn(s.href)+'"]');if(l)return i.instance=l,un(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),un(l),Nn(l,"style",f),Uc(l,s.precedence,t),i.instance=l;case"stylesheet":f=ws(s.href);var m=t.querySelector(Zo(f));if(m)return i.state.loading|=4,i.instance=m,un(m),m;l=O0(s),(f=vi.get(f))&&Bd(l,f),m=(t.ownerDocument||t).createElement("link"),un(m);var E=m;return E._p=new Promise(function(R,j){E.onload=R,E.onerror=j}),Nn(m,"link",l),i.state.loading|=4,Uc(m,s.precedence,t),i.instance=m;case"script":return m=Ns(s.src),(f=t.querySelector(Qo(m)))?(i.instance=f,un(f),f):(l=s,(f=vi.get(m))&&(l=v({},s),Vd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),un(f),Nn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Uc(l,s.precedence,t));return i.instance}function Uc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var R=l[E];if(R.dataset.precedence===i)m=R;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Bd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Vd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Lc=null;function F0(t,i,s){if(Lc===null){var l=new Map,f=Lc=new Map;f.set(s,l)}else f=Lc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Ii]||m[gn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var R=l.get(E);R?R.push(m):l.set(E,[m])}}return l}function I0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Lb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function j0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Jo=null;function Ob(){}function Pb(t,i,s){if(Jo===null)throw Error(r(475));var l=Jo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=ws(s.href),m=t.querySelector(Zo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Oc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,un(m);return}m=t.ownerDocument||t,s=O0(s),(f=vi.get(f))&&Bd(s,f),m=m.createElement("link"),un(m);var E=m;E._p=new Promise(function(R,j){E.onload=R,E.onerror=j}),Nn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Oc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function Fb(){if(Jo===null)throw Error(r(475));var t=Jo;return t.stylesheets&&t.count===0&&Hd(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Hd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Oc(){if(this.count--,this.count===0){if(this.stylesheets)Hd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pc=null;function Hd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pc=new Map,i.forEach(Ib,t),Pc=null,Oc.call(t))}function Ib(t,i){if(!(i.state.loading&4)){var s=Pc.get(t);if(s)var l=s.get(null);else{s=new Map,Pc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,f),s.set(E,f),this.count++,l=Oc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Ko={$$typeof:O,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function jb(t,i,s,l,f,m,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function z0(t,i,s,l,f,m,E,R,j,te,me,xe){return t=new jb(t,i,s,E,R,j,te,xe),i=1,m===!0&&(i|=24),m=ei(3,null,null,i),t.current=m,m.stateNode=t,i=Mf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Rf(m),t}function B0(t){return t?(t=ss,t):ss}function V0(t,i,s,l,f,m){f=B0(f),l.context===null?l.context=f:l.pendingContext=f,l=Ia(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=ja(t,l,i),s!==null&&(ri(s,t,i),wo(s,t,i))}function H0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function kd(t,i){H0(t,i),(t=t.alternate)&&H0(t,i)}function k0(t){if(t.tag===13){var i=rs(t,67108864);i!==null&&ri(i,t,67108864),kd(t,67108864)}}var Fc=!0;function zb(t,i,s,l){var f=I.T;I.T=null;var m=J.p;try{J.p=2,Gd(t,i,s,l)}finally{J.p=m,I.T=f}}function Bb(t,i,s,l){var f=I.T;I.T=null;var m=J.p;try{J.p=8,Gd(t,i,s,l)}finally{J.p=m,I.T=f}}function Gd(t,i,s,l){if(Fc){var f=Wd(l);if(f===null)Dd(t,i,l,Ic,s),W0(t,l);else if(Hb(f,t,i,s,l))l.stopPropagation();else if(W0(t,l),i&4&&-1<Vb.indexOf(t)){for(;f!==null;){var m=Ua(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=$e(m.pendingLanes);if(E!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var j=1<<31-Ce(E);R.entanglements[1]|=j,E&=~j}Hi(m),(Ft&6)===0&&(yc=ze()+500,Wo(0))}}break;case 13:R=rs(m,2),R!==null&&ri(R,m,2),bc(),kd(m,2)}if(m=Wd(l),m===null&&Dd(t,i,l,Ic,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Dd(t,i,l,null,s)}}function Wd(t){return t=Zu(t),Xd(t)}var Ic=null;function Xd(t){if(Ic=null,t=Qi(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ic=t,null}function G0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Ge:return 2;case ut:return 8;case Wt:case Xt:return 32;case U:return 268435456;default:return 32}default:return 32}}var Yd=!1,Ja=null,Ka=null,$a=null,$o=new Map,el=new Map,er=[],Vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(t,i){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":$o.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(i.pointerId)}}function tl(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ua(i),i!==null&&k0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Hb(t,i,s,l,f){switch(i){case"focusin":return Ja=tl(Ja,t,i,s,l,f),!0;case"dragenter":return Ka=tl(Ka,t,i,s,l,f),!0;case"mouseover":return $a=tl($a,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return $o.set(m,tl($o.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,el.set(m,tl(el.get(m)||null,t,i,s,l,f)),!0}return!1}function X0(t){var i=Qi(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=d(s),i!==null){t.blockedOn=i,bi(t.priority,function(){if(s.tag===13){var l=ai();l=lt(l);var f=rs(s,l);f!==null&&ri(f,s,l),kd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Wd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);qu=l,s.target.dispatchEvent(l),qu=null}else return i=Ua(s),i!==null&&k0(i),t.blockedOn=s,!1;i.shift()}return!0}function Y0(t,i,s){jc(t)&&s.delete(i)}function kb(){Yd=!1,Ja!==null&&jc(Ja)&&(Ja=null),Ka!==null&&jc(Ka)&&(Ka=null),$a!==null&&jc($a)&&($a=null),$o.forEach(Y0),el.forEach(Y0)}function zc(t,i){t.blockedOn===i&&(t.blockedOn=null,Yd||(Yd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kb)))}var Bc=null;function q0(t){Bc!==t&&(Bc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Bc===t&&(Bc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Xd(l||s)===null)continue;break}var m=Ua(s);m!==null&&(t.splice(i,3),i-=3,Xf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function nl(t){function i(j){return zc(j,t)}Ja!==null&&zc(Ja,t),Ka!==null&&zc(Ka,t),$a!==null&&zc($a,t),$o.forEach(i),el.forEach(i);for(var s=0;s<er.length;s++){var l=er[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<er.length&&(s=er[0],s.blockedOn===null);)X0(s),s.blockedOn===null&&er.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],E=f[tn]||null;if(typeof m=="function")E||q0(s);else if(E){var R=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[tn]||null)R=E.formAction;else if(Xd(f)!==null)continue}else R=E.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),q0(s)}}}function qd(t){this._internalRoot=t}Vc.prototype.render=qd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ai();V0(s,l,t,i,null,null)},Vc.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;V0(t.current,2,null,t,null,null),bc(),i[Fi]=null}};function Vc(t){this._internalRoot=t}Vc.prototype.unstable_scheduleHydration=function(t){if(t){var i=wt();t={blockedOn:null,target:t,priority:i};for(var s=0;s<er.length&&i!==0&&i<er[s].priority;s++);er.splice(s,0,t),s===0&&X0(t)}};var Z0=e.version;if(Z0!=="19.1.1")throw Error(r(527,Z0,"19.1.1"));J.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Gb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{K=Hc.inject(Gb),ue=Hc}catch{}}return al.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=fv,m=dv,E=hv,R=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=z0(t,1,!1,null,null,s,l,f,m,E,R,null),t[Fi]=i.current,Cd(t),new qd(i)},al.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",m=fv,E=dv,R=hv,j=null,te=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(j=s.unstable_transitionCallbacks),s.formState!==void 0&&(te=s.formState)),i=z0(t,1,!0,i,s??null,l,f,m,E,R,j,te),i.context=B0(null),s=i.current,l=ai(),l=lt(l),f=Ia(l),f.callback=null,ja(s,f,l),s=l,i.current.lanes=s,Be(i,s),Hi(i),t[Fi]=i.current,Cd(t),new Vc(i)},al.version="19.1.1",al}var rx;function tM(){if(rx)return Jd.exports;rx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Jd.exports=eM(),Jd.exports}var nM=tM();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var sx="popstate";function iM(a={}){function e(r,o){let{pathname:u,search:d,hash:h}=r.location;return kh("",{pathname:u,search:d,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:gl(o)}return rM(e,n,null,a)}function $t(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function qi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aM(){return Math.random().toString(36).substring(2,10)}function ox(a,e){return{usr:a.state,key:a.key,idx:e}}function kh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?io(e):e,state:n,key:e&&e.key||r||aM()}}function gl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function io(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function rM(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:u=!1}=r,d=o.history,h="POP",g=null,p=v();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function v(){return(d.state||{idx:null}).idx}function x(){h="POP";let M=v(),_=M==null?null:M-p;p=M,g&&g({action:h,location:A.location,delta:_})}function y(M,_){h="PUSH";let L=kh(A.location,M,_);p=v()+1;let O=ox(L,p),C=A.createHref(L);try{d.pushState(O,"",C)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(C)}u&&g&&g({action:h,location:A.location,delta:1})}function S(M,_){h="REPLACE";let L=kh(A.location,M,_);p=v();let O=ox(L,p),C=A.createHref(L);d.replaceState(O,"",C),u&&g&&g({action:h,location:A.location,delta:0})}function T(M){return sM(M)}let A={get action(){return h},get location(){return a(o,d)},listen(M){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(sx,x),g=M,()=>{o.removeEventListener(sx,x),g=null}},createHref(M){return e(o,M)},createURL:T,encodeLocation(M){let _=T(M);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(M){return d.go(M)}};return A}function sM(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$t(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:gl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function X_(a,e,n="/"){return oM(a,e,n,!1)}function oM(a,e,n,r){let o=typeof e=="string"?io(e):e,u=Ma(o.pathname||"/",n);if(u==null)return null;let d=Y_(a);lM(d);let h=null;for(let g=0;h==null&&g<d.length;++g){let p=_M(u);h=vM(d[g],p,r)}return h}function Y_(a,e=[],n=[],r="",o=!1){let u=(d,h,g=o,p)=>{let v={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&g)return;$t(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let x=ya([r,v.relativePath]),y=n.concat(v);d.children&&d.children.length>0&&($t(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Y_(d.children,e,y,x,g)),!(d.path==null&&!d.index)&&e.push({path:x,score:mM(x,d.index),routesMeta:y})};return a.forEach((d,h)=>{if(d.path===""||!d.path?.includes("?"))u(d,h);else for(let g of q_(d.path))u(d,h,!0,g)}),e}function q_(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let d=q_(r.join("/")),h=[];return h.push(...d.map(g=>g===""?u:[u,g].join("/"))),o&&h.push(...d),h.map(g=>a.startsWith("/")&&g===""?"/":g)}function lM(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:gM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var cM=/^:[\w-]+$/,uM=3,fM=2,dM=1,hM=10,pM=-2,lx=a=>a==="*";function mM(a,e){let n=a.split("/"),r=n.length;return n.some(lx)&&(r+=pM),e&&(r+=fM),n.filter(o=>!lx(o)).reduce((o,u)=>o+(cM.test(u)?uM:u===""?dM:hM),r)}function gM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function vM(a,e,n=!1){let{routesMeta:r}=a,o={},u="/",d=[];for(let h=0;h<r.length;++h){let g=r[h],p=h===r.length-1,v=u==="/"?e:e.slice(u.length)||"/",x=Ru({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},v),y=g.route;if(!x&&p&&n&&!r[r.length-1].route.index&&(x=Ru({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},v)),!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:ya([u,x.pathname]),pathnameBase:MM(ya([u,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(u=ya([u,x.pathnameBase]))}return d}function Ru(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=xM(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:x},y)=>{if(v==="*"){let T=h[y]||"";d=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const S=h[y];return x&&!S?p[v]=void 0:p[v]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:d,pattern:a}}function xM(a,e=!1,n=!0){qi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,g)=>(r.push({paramName:h,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function _M(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Ma(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function yM(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?io(a):a;return{pathname:n?n.startsWith("/")?n:SM(n,e):e,search:EM(r),hash:TM(o)}}function SM(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function th(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Z_(a){let e=bM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Q_(a,e,n,r=!1){let o;typeof a=="string"?o=io(a):(o={...a},$t(!o.pathname||!o.pathname.includes("?"),th("?","pathname","search",o)),$t(!o.pathname||!o.pathname.includes("#"),th("#","pathname","hash",o)),$t(!o.search||!o.search.includes("#"),th("#","search","hash",o)));let u=a===""||o.pathname==="",d=u?"/":o.pathname,h;if(d==null)h=n;else{let x=e.length-1;if(!r&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),x-=1;o.pathname=y.join("/")}h=x>=0?e[x]:"/"}let g=yM(o,h),p=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(p||v)&&(g.pathname+="/"),g}var ya=a=>a.join("/").replace(/\/\/+/g,"/"),MM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),EM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,TM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function AM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var J_=["POST","PUT","PATCH","DELETE"];new Set(J_);var RM=["GET",...J_];new Set(RM);var ao=ie.createContext(null);ao.displayName="DataRouter";var Iu=ie.createContext(null);Iu.displayName="DataRouterState";ie.createContext(!1);var K_=ie.createContext({isTransitioning:!1});K_.displayName="ViewTransition";var wM=ie.createContext(new Map);wM.displayName="Fetchers";var NM=ie.createContext(null);NM.displayName="Await";var Zi=ie.createContext(null);Zi.displayName="Navigation";var Ml=ie.createContext(null);Ml.displayName="Location";var Na=ie.createContext({outlet:null,matches:[],isDataRoute:!1});Na.displayName="Route";var Jp=ie.createContext(null);Jp.displayName="RouteError";function CM(a,{relative:e}={}){$t(El(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=ie.useContext(Zi),{hash:o,pathname:u,search:d}=Tl(a,{relative:e}),h=u;return n!=="/"&&(h=u==="/"?n:ya([n,u])),r.createHref({pathname:h,search:d,hash:o})}function El(){return ie.useContext(Ml)!=null}function ci(){return $t(El(),"useLocation() may be used only in the context of a <Router> component."),ie.useContext(Ml).location}var $_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ey(a){ie.useContext(Zi).static||ie.useLayoutEffect(a)}function ty(){let{isDataRoute:a}=ie.useContext(Na);return a?kM():DM()}function DM(){$t(El(),"useNavigate() may be used only in the context of a <Router> component.");let a=ie.useContext(ao),{basename:e,navigator:n}=ie.useContext(Zi),{matches:r}=ie.useContext(Na),{pathname:o}=ci(),u=JSON.stringify(Z_(r)),d=ie.useRef(!1);return ey(()=>{d.current=!0}),ie.useCallback((g,p={})=>{if(qi(d.current,$_),!d.current)return;if(typeof g=="number"){n.go(g);return}let v=Q_(g,JSON.parse(u),o,p.relative==="path");a==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ya([e,v.pathname])),(p.replace?n.replace:n.push)(v,p.state,p)},[e,n,u,o,a])}ie.createContext(null);function Tl(a,{relative:e}={}){let{matches:n}=ie.useContext(Na),{pathname:r}=ci(),o=JSON.stringify(Z_(n));return ie.useMemo(()=>Q_(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function UM(a,e){return ny(a,e)}function ny(a,e,n,r,o){$t(El(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=ie.useContext(Zi),{matches:d}=ie.useContext(Na),h=d[d.length-1],g=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",x=h&&h.route;{let L=x&&x.path||"";iy(p,!x||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let y=ci(),S;if(e){let L=typeof e=="string"?io(e):e;$t(v==="/"||L.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${L.pathname}" was given in the \`location\` prop.`),S=L}else S=y;let T=S.pathname||"/",A=T;if(v!=="/"){let L=v.replace(/^\//,"").split("/");A="/"+T.replace(/^\//,"").split("/").slice(L.length).join("/")}let M=X_(a,{pathname:A});qi(x||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),qi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=IM(M&&M.map(L=>Object.assign({},L,{params:Object.assign({},g,L.params),pathname:ya([v,u.encodeLocation?u.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?v:ya([v,u.encodeLocation?u.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),d,n,r,o);return e&&_?ie.createElement(Ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function LM(){let a=HM(),e=AM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=ie.createElement(ie.Fragment,null,ie.createElement("p",null,"💿 Hey developer 👋"),ie.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ie.createElement("code",{style:u},"ErrorBoundary")," or"," ",ie.createElement("code",{style:u},"errorElement")," prop on your route.")),ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),n?ie.createElement("pre",{style:o},n):null,d)}var OM=ie.createElement(LM,null),PM=class extends ie.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?ie.createElement(Na.Provider,{value:this.props.routeContext},ie.createElement(Jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FM({routeContext:a,match:e,children:n}){let r=ie.useContext(ao);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ie.createElement(Na.Provider,{value:a},n)}function IM(a,e=[],n=null,r=null,o=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let u=a,d=n?.errors;if(d!=null){let p=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);$t(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let h=!1,g=-1;if(n)for(let p=0;p<u.length;p++){let v=u[p];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=p),v.route.id){let{loaderData:x,errors:y}=n,S=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!y||y[v.route.id]===void 0);if(v.route.lazy||S){h=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((p,v,x)=>{let y,S=!1,T=null,A=null;n&&(y=d&&v.route.id?d[v.route.id]:void 0,T=v.route.errorElement||OM,h&&(g<0&&x===0?(iy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):g===x&&(S=!0,A=v.route.hydrateFallbackElement||null)));let M=e.concat(u.slice(0,x+1)),_=()=>{let L;return y?L=T:S?L=A:v.route.Component?L=ie.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=p,ie.createElement(FM,{match:v,routeContext:{outlet:p,matches:M,isDataRoute:n!=null},children:L})};return n&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?ie.createElement(PM,{location:n.location,revalidation:n.revalidation,component:T,error:y,children:_(),routeContext:{outlet:null,matches:M,isDataRoute:!0},unstable_onError:r}):_()},null)}function Kp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jM(a){let e=ie.useContext(ao);return $t(e,Kp(a)),e}function zM(a){let e=ie.useContext(Iu);return $t(e,Kp(a)),e}function BM(a){let e=ie.useContext(Na);return $t(e,Kp(a)),e}function $p(a){let e=BM(a),n=e.matches[e.matches.length-1];return $t(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function VM(){return $p("useRouteId")}function HM(){let a=ie.useContext(Jp),e=zM("useRouteError"),n=$p("useRouteError");return a!==void 0?a:e.errors?.[n]}function kM(){let{router:a}=jM("useNavigate"),e=$p("useNavigate"),n=ie.useRef(!1);return ey(()=>{n.current=!0}),ie.useCallback(async(o,u={})=>{qi(n.current,$_),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:e,...u}))},[a,e])}var cx={};function iy(a,e,n){!e&&!cx[a]&&(cx[a]=!0,qi(!1,n))}ie.memo(GM);function GM({routes:a,future:e,state:n,unstable_onError:r}){return ny(a,void 0,n,r,e)}function In(a){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function WM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:u=!1}){$t(!El(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),h=ie.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof n=="string"&&(n=io(n));let{pathname:g="/",search:p="",hash:v="",state:x=null,key:y="default"}=n,S=ie.useMemo(()=>{let T=Ma(g,d);return T==null?null:{location:{pathname:T,search:p,hash:v,state:x,key:y},navigationType:r}},[d,g,p,v,x,y,r]);return qi(S!=null,`<Router basename="${d}"> is not able to match the URL "${g}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:ie.createElement(Zi.Provider,{value:h},ie.createElement(Ml.Provider,{children:e,value:S}))}function XM({children:a,location:e}){return UM(Gh(a),e)}function Gh(a,e=[]){let n=[];return ie.Children.forEach(a,(r,o)=>{if(!ie.isValidElement(r))return;let u=[...e,o];if(r.type===ie.Fragment){n.push.apply(n,Gh(r.props.children,u));return}$t(r.type===In,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Gh(r.props.children,u)),n.push(d)}),n}var vu="get",xu="application/x-www-form-urlencoded";function ju(a){return a!=null&&typeof a.tagName=="string"}function YM(a){return ju(a)&&a.tagName.toLowerCase()==="button"}function qM(a){return ju(a)&&a.tagName.toLowerCase()==="form"}function ZM(a){return ju(a)&&a.tagName.toLowerCase()==="input"}function QM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function JM(a,e){return a.button===0&&(!e||e==="_self")&&!QM(a)}var kc=null;function KM(){if(kc===null)try{new FormData(document.createElement("form"),0),kc=!1}catch{kc=!0}return kc}var $M=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nh(a){return a!=null&&!$M.has(a)?(qi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xu}"`),null):a}function eE(a,e){let n,r,o,u,d;if(qM(a)){let h=a.getAttribute("action");r=h?Ma(h,e):null,n=a.getAttribute("method")||vu,o=nh(a.getAttribute("enctype"))||xu,u=new FormData(a)}else if(YM(a)||ZM(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||h.getAttribute("action");if(r=g?Ma(g,e):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||vu,o=nh(a.getAttribute("formenctype"))||nh(h.getAttribute("enctype"))||xu,u=new FormData(h,a),!KM()){let{name:p,type:v,value:x}=a;if(v==="image"){let y=p?`${p}.`:"";u.append(`${y}x`,"0"),u.append(`${y}y`,"0")}else p&&u.append(p,x)}}else{if(ju(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vu,r=null,o=xu,d=a}return u&&o==="text/plain"&&(d=u,u=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function em(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function tE(a,e,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Ma(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function nE(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iE(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function aE(a,e,n){let r=await Promise.all(a.map(async o=>{let u=e.routes[o.route.id];if(u){let d=await nE(u,n);return d.links?d.links():[]}return[]}));return lE(r.flat(1).filter(iE).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ux(a,e,n,r,o,u){let d=(g,p)=>n[p]?g.route.id!==n[p].route.id:!0,h=(g,p)=>n[p].pathname!==g.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==g.params["*"];return u==="assets"?e.filter((g,p)=>d(g,p)||h(g,p)):u==="data"?e.filter((g,p)=>{let v=r.routes[g.route.id];if(!v||!v.hasLoader)return!1;if(d(g,p)||h(g,p))return!0;if(g.route.shouldRevalidate){let x=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function rE(a,e,{includeHydrateFallback:n}={}){return sE(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function sE(a){return[...new Set(a)]}function oE(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function lE(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let u=JSON.stringify(oE(o));return n.has(u)||(n.add(u),r.push({key:u,link:o})),r},[])}function ay(){let a=ie.useContext(ao);return em(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function cE(){let a=ie.useContext(Iu);return em(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var tm=ie.createContext(void 0);tm.displayName="FrameworkContext";function ry(){let a=ie.useContext(tm);return em(a,"You must render this element inside a <HydratedRouter> element"),a}function uE(a,e){let n=ie.useContext(tm),[r,o]=ie.useState(!1),[u,d]=ie.useState(!1),{onFocus:h,onBlur:g,onMouseEnter:p,onMouseLeave:v,onTouchStart:x}=e,y=ie.useRef(null);ie.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let A=_=>{_.forEach(L=>{d(L.isIntersecting)})},M=new IntersectionObserver(A,{threshold:.5});return y.current&&M.observe(y.current),()=>{M.disconnect()}}},[a]),ie.useEffect(()=>{if(r){let A=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(A)}}},[r]);let S=()=>{o(!0)},T=()=>{o(!1),d(!1)};return n?a!=="intent"?[u,y,{}]:[u,y,{onFocus:rl(h,S),onBlur:rl(g,T),onMouseEnter:rl(p,S),onMouseLeave:rl(v,T),onTouchStart:rl(x,S)}]:[!1,y,{}]}function rl(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function fE({page:a,...e}){let{router:n}=ay(),r=ie.useMemo(()=>X_(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?ie.createElement(hE,{page:a,matches:r,...e}):null}function dE(a){let{manifest:e,routeModules:n}=ry(),[r,o]=ie.useState([]);return ie.useEffect(()=>{let u=!1;return aE(a,e,n).then(d=>{u||o(d)}),()=>{u=!0}},[a,e,n]),r}function hE({page:a,matches:e,...n}){let r=ci(),{manifest:o,routeModules:u}=ry(),{basename:d}=ay(),{loaderData:h,matches:g}=cE(),p=ie.useMemo(()=>ux(a,e,g,o,r,"data"),[a,e,g,o,r]),v=ie.useMemo(()=>ux(a,e,g,o,r,"assets"),[a,e,g,o,r]),x=ie.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let T=new Set,A=!1;if(e.forEach(_=>{let L=o.routes[_.route.id];!L||!L.hasLoader||(!p.some(O=>O.route.id===_.route.id)&&_.route.id in h&&u[_.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:T.add(_.route.id))}),T.size===0)return[];let M=tE(a,d,"data");return A&&T.size>0&&M.searchParams.set("_routes",e.filter(_=>T.has(_.route.id)).map(_=>_.route.id).join(",")),[M.pathname+M.search]},[d,h,r,o,p,e,a,u]),y=ie.useMemo(()=>rE(v,o),[v,o]),S=dE(v);return ie.createElement(ie.Fragment,null,x.map(T=>ie.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),y.map(T=>ie.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),S.map(({key:T,link:A})=>ie.createElement("link",{key:T,nonce:n.nonce,...A})))}function pE(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sy&&(window.__reactRouterVersion="7.9.1")}catch{}function mE({basename:a,children:e,window:n}){let r=ie.useRef();r.current==null&&(r.current=iM({window:n,v5Compat:!0}));let o=r.current,[u,d]=ie.useState({action:o.action,location:o.location}),h=ie.useCallback(g=>{ie.startTransition(()=>d(g))},[d]);return ie.useLayoutEffect(()=>o.listen(h),[o,h]),ie.createElement(WM,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:o})}var oy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sn=ie.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:u,replace:d,state:h,target:g,to:p,preventScrollReset:v,viewTransition:x,...y},S){let{basename:T}=ie.useContext(Zi),A=typeof p=="string"&&oy.test(p),M,_=!1;if(typeof p=="string"&&A&&(M=p,sy))try{let D=new URL(window.location.href),N=p.startsWith("//")?new URL(D.protocol+p):new URL(p),k=Ma(N.pathname,T);N.origin===D.origin&&k!=null?p=k+N.search+N.hash:_=!0}catch{qi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=CM(p,{relative:o}),[O,C,F]=uE(r,y),B=_E(p,{replace:d,state:h,target:g,preventScrollReset:v,relative:o,viewTransition:x});function V(D){e&&e(D),D.defaultPrevented||B(D)}let Z=ie.createElement("a",{...y,...F,href:M||L,onClick:_||u?e:V,ref:pE(S,C),target:g,"data-discover":!A&&n==="render"?"true":void 0});return O&&!A?ie.createElement(ie.Fragment,null,Z,ie.createElement(fE,{page:L})):Z});sn.displayName="Link";var gE=ie.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:u,to:d,viewTransition:h,children:g,...p},v){let x=Tl(d,{relative:p.relative}),y=ci(),S=ie.useContext(Iu),{navigator:T,basename:A}=ie.useContext(Zi),M=S!=null&&EE(x)&&h===!0,_=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,L=y.pathname,O=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(L=L.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&A&&(O=Ma(O,A)||O);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=L===_||!o&&L.startsWith(_)&&L.charAt(C)==="/",B=O!=null&&(O===_||!o&&O.startsWith(_)&&O.charAt(_.length)==="/"),V={isActive:F,isPending:B,isTransitioning:M},Z=F?e:void 0,D;typeof r=="function"?D=r(V):D=[r,F?"active":null,B?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let N=typeof u=="function"?u(V):u;return ie.createElement(sn,{...p,"aria-current":Z,className:D,ref:v,style:N,to:d,viewTransition:h},typeof g=="function"?g(V):g)});gE.displayName="NavLink";var vE=ie.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:u,method:d=vu,action:h,onSubmit:g,relative:p,preventScrollReset:v,viewTransition:x,...y},S)=>{let T=bE(),A=ME(h,{relative:p}),M=d.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&oy.test(h),L=O=>{if(g&&g(O),O.defaultPrevented)return;O.preventDefault();let C=O.nativeEvent.submitter,F=C?.getAttribute("formmethod")||d;T(C||O.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:o,state:u,relative:p,preventScrollReset:v,viewTransition:x})};return ie.createElement("form",{ref:S,method:M,action:A,onSubmit:r?g:L,...y,"data-discover":!_&&a==="render"?"true":void 0})});vE.displayName="Form";function xE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ly(a){let e=ie.useContext(ao);return $t(e,xE(a)),e}function _E(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:u,viewTransition:d}={}){let h=ty(),g=ci(),p=Tl(a,{relative:u});return ie.useCallback(v=>{if(JM(v,e)){v.preventDefault();let x=n!==void 0?n:gl(g)===gl(p);h(a,{replace:x,state:r,preventScrollReset:o,relative:u,viewTransition:d})}},[g,h,p,n,r,e,a,o,u,d])}var yE=0,SE=()=>`__${String(++yE)}__`;function bE(){let{router:a}=ly("useSubmit"),{basename:e}=ie.useContext(Zi),n=VM();return ie.useCallback(async(r,o={})=>{let{action:u,method:d,encType:h,formData:g,body:p}=eE(r,e);if(o.navigate===!1){let v=o.fetcherKey||SE();await a.fetch(v,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:p,formMethod:o.method||d,formEncType:o.encType||h,flushSync:o.flushSync})}else await a.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:p,formMethod:o.method||d,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,e,n])}function ME(a,{relative:e}={}){let{basename:n}=ie.useContext(Zi),r=ie.useContext(Na);$t(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),u={...Tl(a||".",{relative:e})},d=ci();if(a==null){u.search=d.search;let h=new URLSearchParams(u.search),g=h.getAll("index");if(g.some(v=>v==="")){h.delete("index"),g.filter(x=>x).forEach(x=>h.append("index",x));let v=h.toString();u.search=v?`?${v}`:""}}return(!a||a===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ya([n,u.pathname])),gl(u)}function EE(a,{relative:e}={}){let n=ie.useContext(K_);$t(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ly("useViewTransitionState"),o=Tl(a,{relative:e});if(!n.isTransitioning)return!1;let u=Ma(n.currentLocation.pathname,r)||n.currentLocation.pathname,d=Ma(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ru(o.pathname,d)!=null||Ru(o.pathname,u)!=null}/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Wh(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=Array(e);n<e;n++)r[n]=a[n];return r}function TE(a){if(Array.isArray(a))return a}function AE(a){if(Array.isArray(a))return Wh(a)}function RE(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function wE(a,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,cy(r.key),r)}}function NE(a,e,n){return e&&wE(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function _u(a,e){var n=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!n){if(Array.isArray(a)||(n=nm(a))||e){n&&(a=n);var r=0,o=function(){};return{s:o,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(g){throw g},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,d=!0,h=!1;return{s:function(){n=n.call(a)},n:function(){var g=n.next();return d=g.done,g},e:function(g){h=!0,u=g},f:function(){try{d||n.return==null||n.return()}finally{if(h)throw u}}}}function Et(a,e,n){return(e=cy(e))in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function CE(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function DE(a,e){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var r,o,u,d,h=[],g=!0,p=!1;try{if(u=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;g=!1}else for(;!(g=(r=u.call(n)).done)&&(h.push(r.value),h.length!==e);g=!0);}catch(v){p=!0,o=v}finally{try{if(!g&&n.return!=null&&(d=n.return(),Object(d)!==d))return}finally{if(p)throw o}}return h}}function UE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fx(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function we(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fx(Object(n),!0).forEach(function(r){Et(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):fx(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function zu(a,e){return TE(a)||DE(a,e)||nm(a,e)||UE()}function Pi(a){return AE(a)||CE(a)||nm(a)||LE()}function OE(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function cy(a){var e=OE(a,"string");return typeof e=="symbol"?e:e+""}function wu(a){"@babel/helpers - typeof";return wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wu(a)}function nm(a,e){if(a){if(typeof a=="string")return Wh(a,e);var n={}.toString.call(a).slice(8,-1);return n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set"?Array.from(a):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wh(a,e):void 0}}var dx=function(){},im={},uy={},fy=null,dy={mark:dx,measure:dx};try{typeof window<"u"&&(im=window),typeof document<"u"&&(uy=document),typeof MutationObserver<"u"&&(fy=MutationObserver),typeof performance<"u"&&(dy=performance)}catch{}var PE=im.navigator||{},hx=PE.userAgent,px=hx===void 0?"":hx,fr=im,Zt=uy,mx=fy,Gc=dy;fr.document;var Ca=!!Zt.documentElement&&!!Zt.head&&typeof Zt.addEventListener=="function"&&typeof Zt.createElement=="function",hy=~px.indexOf("MSIE")||~px.indexOf("Trident/"),ih,FE=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,IE=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,py={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},jE={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},my=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Cn="classic",Al="duotone",gy="sharp",vy="sharp-duotone",xy="chisel",_y="etch",yy="jelly",Sy="jelly-duo",by="jelly-fill",My="notdog",Ey="notdog-duo",Ty="slab",Ay="slab-press",Ry="thumbprint",wy="whiteboard",zE="Classic",BE="Duotone",VE="Sharp",HE="Sharp Duotone",kE="Chisel",GE="Etch",WE="Jelly",XE="Jelly Duo",YE="Jelly Fill",qE="Notdog",ZE="Notdog Duo",QE="Slab",JE="Slab Press",KE="Thumbprint",$E="Whiteboard",Ny=[Cn,Al,gy,vy,xy,_y,yy,Sy,by,My,Ey,Ty,Ay,Ry,wy];ih={},Et(Et(Et(Et(Et(Et(Et(Et(Et(Et(ih,Cn,zE),Al,BE),gy,VE),vy,HE),xy,kE),_y,GE),yy,WE),Sy,XE),by,YE),My,qE),Et(Et(Et(Et(Et(ih,Ey,ZE),Ty,QE),Ay,JE),Ry,KE),wy,$E);var e2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},t2={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},n2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),i2={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Cy=["fak","fa-kit","fakd","fa-kit-duotone"],gx={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},a2=["kit"],r2="kit",s2="kit-duotone",o2="Kit",l2="Kit Duotone";Et(Et({},r2,o2),s2,l2);var c2={kit:{"fa-kit":"fak"}},u2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},f2={kit:{fak:"fa-kit"}},vx={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ah,Wc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],h2="classic",p2="duotone",m2="sharp",g2="sharp-duotone",v2="chisel",x2="etch",_2="jelly",y2="jelly-duo",S2="jelly-fill",b2="notdog",M2="notdog-duo",E2="slab",T2="slab-press",A2="thumbprint",R2="whiteboard",w2="Classic",N2="Duotone",C2="Sharp",D2="Sharp Duotone",U2="Chisel",L2="Etch",O2="Jelly",P2="Jelly Duo",F2="Jelly Fill",I2="Notdog",j2="Notdog Duo",z2="Slab",B2="Slab Press",V2="Thumbprint",H2="Whiteboard";ah={},Et(Et(Et(Et(Et(Et(Et(Et(Et(Et(ah,h2,w2),p2,N2),m2,C2),g2,D2),v2,U2),x2,L2),_2,O2),y2,P2),S2,F2),b2,I2),Et(Et(Et(Et(Et(ah,M2,j2),E2,z2),T2,B2),A2,V2),R2,H2);var k2="kit",G2="kit-duotone",W2="Kit",X2="Kit Duotone";Et(Et({},k2,W2),G2,X2);var Y2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},q2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Xh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Z2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Dy=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(d2,Z2),Q2=["solid","regular","light","thin","duotone","brands","semibold"],Uy=[1,2,3,4,5,6,7,8,9,10],J2=Uy.concat([11,12,13,14,15,16,17,18,19,20]),K2=["aw","fw","pull-left","pull-right"],$2=[].concat(Pi(Object.keys(q2)),Q2,K2,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Wc.GROUP,Wc.SWAP_OPACITY,Wc.PRIMARY,Wc.SECONDARY]).concat(Uy.map(function(a){return"".concat(a,"x")})).concat(J2.map(function(a){return"w-".concat(a)})),eT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ea="___FONT_AWESOME___",Yh=16,Ly="fa",Oy="svg-inline--fa",Xr="data-fa-i2svg",qh="data-fa-pseudo-element",tT="data-fa-pseudo-element-pending",am="data-prefix",rm="data-icon",xx="fontawesome-i2svg",nT="async",iT=["HTML","HEAD","STYLE","SCRIPT"],Py=["::before","::after",":before",":after"],Fy=(function(){try{return!0}catch{return!1}})();function Rl(a){return new Proxy(a,{get:function(n,r){return r in n?n[r]:n[Cn]}})}var Iy=we({},py);Iy[Cn]=we(we(we(we({},{"fa-duotone":"duotone"}),py[Cn]),gx.kit),gx["kit-duotone"]);var aT=Rl(Iy),Zh=we({},i2);Zh[Cn]=we(we(we(we({},{duotone:"fad"}),Zh[Cn]),vx.kit),vx["kit-duotone"]);var _x=Rl(Zh),Qh=we({},Xh);Qh[Cn]=we(we({},Qh[Cn]),f2.kit);var sm=Rl(Qh),Jh=we({},Y2);Jh[Cn]=we(we({},Jh[Cn]),c2.kit);Rl(Jh);var rT=FE,jy="fa-layers-text",sT=IE,oT=we({},e2);Rl(oT);var lT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rh=jE,cT=[].concat(Pi(a2),Pi($2)),pl=fr.FontAwesomeConfig||{};function uT(a){var e=Zt.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function fT(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(Zt&&typeof Zt.querySelector=="function"){var dT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dT.forEach(function(a){var e=zu(a,2),n=e[0],r=e[1],o=fT(uT(n));o!=null&&(pl[r]=o)})}var zy={styleDefault:"solid",familyDefault:Cn,cssPrefix:Ly,replacementClass:Oy,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pl.familyPrefix&&(pl.cssPrefix=pl.familyPrefix);var Js=we(we({},zy),pl);Js.autoReplaceSvg||(Js.observeMutations=!1);var et={};Object.keys(zy).forEach(function(a){Object.defineProperty(et,a,{enumerable:!0,set:function(n){Js[a]=n,ml.forEach(function(r){return r(et)})},get:function(){return Js[a]}})});Object.defineProperty(et,"familyPrefix",{enumerable:!0,set:function(e){Js.cssPrefix=e,ml.forEach(function(n){return n(et)})},get:function(){return Js.cssPrefix}});fr.FontAwesomeConfig=et;var ml=[];function hT(a){return ml.push(a),function(){ml.splice(ml.indexOf(a),1)}}var Cs=Yh,Gi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pT(a){if(!(!a||!Ca)){var e=Zt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var n=Zt.head.childNodes,r=null,o=n.length-1;o>-1;o--){var u=n[o],d=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(d)>-1&&(r=u)}return Zt.head.insertBefore(e,r),a}}var mT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yx(){for(var a=12,e="";a-- >0;)e+=mT[Math.random()*62|0];return e}function ro(a){for(var e=[],n=(a||[]).length>>>0;n--;)e[n]=a[n];return e}function om(a){return a.classList?ro(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function By(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gT(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(By(a[n]),'" ')},"").trim()}function Bu(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(a[n].trim(),";")},"")}function lm(a){return a.size!==Gi.size||a.x!==Gi.x||a.y!==Gi.y||a.rotate!==Gi.rotate||a.flipX||a.flipY}function vT(a){var e=a.transform,n=a.containerWidth,r=a.iconWidth,o={transform:"translate(".concat(n/2," 256)")},u="translate(".concat(e.x*32,", ").concat(e.y*32,") "),d="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),g={transform:"".concat(u," ").concat(d," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:g,path:p}}function xT(a){var e=a.transform,n=a.width,r=n===void 0?Yh:n,o=a.height,u=o===void 0?Yh:o,d="";return hy?d+="translate(".concat(e.x/Cs-r/2,"em, ").concat(e.y/Cs-u/2,"em) "):d+="translate(calc(-50% + ".concat(e.x/Cs,"em), calc(-50% + ").concat(e.y/Cs,"em)) "),d+="scale(".concat(e.size/Cs*(e.flipX?-1:1),", ").concat(e.size/Cs*(e.flipY?-1:1),") "),d+="rotate(".concat(e.rotate,"deg) "),d}var _T=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Vy(){var a=Ly,e=Oy,n=et.cssPrefix,r=et.replacementClass,o=_T;if(n!==a||r!==e){var u=new RegExp("\\.".concat(a,"\\-"),"g"),d=new RegExp("\\--".concat(a,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");o=o.replace(u,".".concat(n,"-")).replace(d,"--".concat(n,"-")).replace(h,".".concat(r))}return o}var Sx=!1;function sh(){et.autoAddCss&&!Sx&&(pT(Vy()),Sx=!0)}var yT={mixout:function(){return{dom:{css:Vy,insertCss:sh}}},hooks:function(){return{beforeDOMElementCreation:function(){sh()},beforeI2svg:function(){sh()}}}},Ta=fr||{};Ta[Ea]||(Ta[Ea]={});Ta[Ea].styles||(Ta[Ea].styles={});Ta[Ea].hooks||(Ta[Ea].hooks={});Ta[Ea].shims||(Ta[Ea].shims=[]);var Ui=Ta[Ea],Hy=[],ky=function(){Zt.removeEventListener("DOMContentLoaded",ky),Nu=1,Hy.map(function(e){return e()})},Nu=!1;Ca&&(Nu=(Zt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Zt.readyState),Nu||Zt.addEventListener("DOMContentLoaded",ky));function ST(a){Ca&&(Nu?setTimeout(a,0):Hy.push(a))}function wl(a){var e=a.tag,n=a.attributes,r=n===void 0?{}:n,o=a.children,u=o===void 0?[]:o;return typeof a=="string"?By(a):"<".concat(e," ").concat(gT(r),">").concat(u.map(wl).join(""),"</").concat(e,">")}function bx(a,e,n){if(a&&a[e]&&a[e][n])return{prefix:e,iconName:n,icon:a[e][n]}}var oh=function(e,n,r,o){var u=Object.keys(e),d=u.length,h=n,g,p,v;for(r===void 0?(g=1,v=e[u[0]]):(g=0,v=r);g<d;g++)p=u[g],v=h(v,e[p],p,e);return v};function Gy(a){return Pi(a).length!==1?null:a.codePointAt(0).toString(16)}function Mx(a){return Object.keys(a).reduce(function(e,n){var r=a[n],o=!!r.icon;return o?e[r.iconName]=r.icon:e[n]=r,e},{})}function Kh(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,u=Mx(e);typeof Ui.hooks.addPack=="function"&&!o?Ui.hooks.addPack(a,Mx(e)):Ui.styles[a]=we(we({},Ui.styles[a]||{}),u),a==="fas"&&Kh("fa",e)}var vl=Ui.styles,bT=Ui.shims,Wy=Object.keys(sm),MT=Wy.reduce(function(a,e){return a[e]=Object.keys(sm[e]),a},{}),cm=null,Xy={},Yy={},qy={},Zy={},Qy={};function ET(a){return~cT.indexOf(a)}function TT(a,e){var n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===a&&o!==""&&!ET(o)?o:null}var Jy=function(){var e=function(u){return oh(vl,function(d,h,g){return d[g]=oh(h,u,{}),d},{})};Xy=e(function(o,u,d){if(u[3]&&(o[u[3]]=d),u[2]){var h=u[2].filter(function(g){return typeof g=="number"});h.forEach(function(g){o[g.toString(16)]=d})}return o}),Yy=e(function(o,u,d){if(o[d]=d,u[2]){var h=u[2].filter(function(g){return typeof g=="string"});h.forEach(function(g){o[g]=d})}return o}),Qy=e(function(o,u,d){var h=u[2];return o[d]=d,h.forEach(function(g){o[g]=d}),o});var n="far"in vl||et.autoFetchSvg,r=oh(bT,function(o,u){var d=u[0],h=u[1],g=u[2];return h==="far"&&!n&&(h="fas"),typeof d=="string"&&(o.names[d]={prefix:h,iconName:g}),typeof d=="number"&&(o.unicodes[d.toString(16)]={prefix:h,iconName:g}),o},{names:{},unicodes:{}});qy=r.names,Zy=r.unicodes,cm=Vu(et.styleDefault,{family:et.familyDefault})};hT(function(a){cm=Vu(a.styleDefault,{family:et.familyDefault})});Jy();function um(a,e){return(Xy[a]||{})[e]}function AT(a,e){return(Yy[a]||{})[e]}function kr(a,e){return(Qy[a]||{})[e]}function Ky(a){return qy[a]||{prefix:null,iconName:null}}function RT(a){var e=Zy[a],n=um("fas",a);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dr(){return cm}var $y=function(){return{prefix:null,iconName:null,rest:[]}};function wT(a){var e=Cn,n=Wy.reduce(function(r,o){return r[o]="".concat(et.cssPrefix,"-").concat(o),r},{});return Ny.forEach(function(r){(a.includes(n[r])||a.some(function(o){return MT[r].includes(o)}))&&(e=r)}),e}function Vu(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Cn:n,o=aT[r][a];if(r===Al&&!a)return"fad";var u=_x[r][a]||_x[r][o],d=a in Ui.styles?a:null,h=u||d||null;return h}function NT(a){var e=[],n=null;return a.forEach(function(r){var o=TT(et.cssPrefix,r);o?n=o:r&&e.push(r)}),{iconName:n,rest:e}}function Ex(a){return a.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var Tx=Dy.concat(Cy);function Hu(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,o=null,u=Ex(a.filter(function(S){return Tx.includes(S)})),d=Ex(a.filter(function(S){return!Tx.includes(S)})),h=u.filter(function(S){return o=S,!my.includes(S)}),g=zu(h,1),p=g[0],v=p===void 0?null:p,x=wT(u),y=we(we({},NT(d)),{},{prefix:Vu(v,{family:x})});return we(we(we({},y),LT({values:a,family:x,styles:vl,config:et,canonical:y,givenPrefix:o})),CT(r,o,y))}function CT(a,e,n){var r=n.prefix,o=n.iconName;if(a||!r||!o)return{prefix:r,iconName:o};var u=e==="fa"?Ky(o):{},d=kr(r,o);return o=u.iconName||d||o,r=u.prefix||r,r==="far"&&!vl.far&&vl.fas&&!et.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}var DT=Ny.filter(function(a){return a!==Cn||a!==Al}),UT=Object.keys(Xh).filter(function(a){return a!==Cn}).map(function(a){return Object.keys(Xh[a])}).flat();function LT(a){var e=a.values,n=a.family,r=a.canonical,o=a.givenPrefix,u=o===void 0?"":o,d=a.styles,h=d===void 0?{}:d,g=a.config,p=g===void 0?{}:g,v=n===Al,x=e.includes("fa-duotone")||e.includes("fad"),y=p.familyDefault==="duotone",S=r.prefix==="fad"||r.prefix==="fa-duotone";if(!v&&(x||y||S)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&DT.includes(n)){var T=Object.keys(h).find(function(M){return UT.includes(M)});if(T||p.autoFetchSvg){var A=n2.get(n).defaultShortPrefixId;r.prefix=A,r.iconName=kr(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||u==="fa")&&(r.prefix=dr()||"fas"),r}var OT=(function(){function a(){RE(this,a),this.definitions={}}return NE(a,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];var d=o.reduce(this._pullDefinitions,{});Object.keys(d).forEach(function(h){n.definitions[h]=we(we({},n.definitions[h]||{}),d[h]),Kh(h,d[h]);var g=sm[Cn][h];g&&Kh(g,d[h]),Jy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(u){var d=o[u],h=d.prefix,g=d.iconName,p=d.icon,v=p[2];n[h]||(n[h]={}),v.length>0&&v.forEach(function(x){typeof x=="string"&&(n[h][x]=p)}),n[h][g]=p}),n}}])})(),Ax=[],Xs={},qs={},PT=Object.keys(qs);function FT(a,e){var n=e.mixoutsTo;return Ax=a,Xs={},Object.keys(qs).forEach(function(r){PT.indexOf(r)===-1&&delete qs[r]}),Ax.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(d){typeof o[d]=="function"&&(n[d]=o[d]),wu(o[d])==="object"&&Object.keys(o[d]).forEach(function(h){n[d]||(n[d]={}),n[d][h]=o[d][h]})}),r.hooks){var u=r.hooks();Object.keys(u).forEach(function(d){Xs[d]||(Xs[d]=[]),Xs[d].push(u[d])})}r.provides&&r.provides(qs)}),n}function $h(a,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var u=Xs[a]||[];return u.forEach(function(d){e=d.apply(null,[e].concat(r))}),e}function Yr(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=Xs[a]||[];o.forEach(function(u){u.apply(null,n)})}function hr(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return qs[a]?qs[a].apply(null,e):void 0}function ep(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,n=a.prefix||dr();if(e)return e=kr(n,e)||e,bx(e1.definitions,n,e)||bx(Ui.styles,n,e)}var e1=new OT,IT=function(){et.autoReplaceSvg=!1,et.observeMutations=!1,Yr("noAuto")},jT={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ca?(Yr("beforeI2svg",e),hr("pseudoElements2svg",e),hr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;et.autoReplaceSvg===!1&&(et.autoReplaceSvg=!0),et.observeMutations=!0,ST(function(){BT({autoReplaceSvgRoot:n}),Yr("watch",e)})}},zT={icon:function(e){if(e===null)return null;if(wu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:kr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Vu(e[0]);return{prefix:r,iconName:kr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(et.cssPrefix,"-"))>-1||e.match(rT))){var o=Hu(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||dr(),iconName:kr(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var u=dr();return{prefix:u,iconName:kr(u,e)||e}}}},ui={noAuto:IT,config:et,dom:jT,parse:zT,library:e1,findIconDefinition:ep,toHtml:wl},BT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Zt:n;(Object.keys(Ui.styles).length>0||et.autoFetchSvg)&&Ca&&et.autoReplaceSvg&&ui.dom.i2svg({node:r})};function ku(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return wl(r)})}}),Object.defineProperty(a,"node",{get:function(){if(Ca){var r=Zt.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function VT(a){var e=a.children,n=a.main,r=a.mask,o=a.attributes,u=a.styles,d=a.transform;if(lm(d)&&n.found&&!r.found){var h=n.width,g=n.height,p={x:h/g/2,y:.5};o.style=Bu(we(we({},u),{},{"transform-origin":"".concat(p.x+d.x/16,"em ").concat(p.y+d.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function HT(a){var e=a.prefix,n=a.iconName,r=a.children,o=a.attributes,u=a.symbol,d=u===!0?"".concat(e,"-").concat(et.cssPrefix,"-").concat(n):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:we(we({},o),{},{id:d}),children:r}]}]}function kT(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in a})}function fm(a){var e=a.icons,n=e.main,r=e.mask,o=a.prefix,u=a.iconName,d=a.transform,h=a.symbol,g=a.maskId,p=a.extra,v=a.watchable,x=v===void 0?!1:v,y=r.found?r:n,S=y.width,T=y.height,A=[et.replacementClass,u?"".concat(et.cssPrefix,"-").concat(u):""].filter(function(F){return p.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(p.classes).join(" "),M={children:[],attributes:we(we({},p.attributes),{},{"data-prefix":o,"data-icon":u,class:A,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(T)})};!kT(p.attributes)&&!p.attributes["aria-hidden"]&&(M.attributes["aria-hidden"]="true"),x&&(M.attributes[Xr]="");var _=we(we({},M),{},{prefix:o,iconName:u,main:n,mask:r,maskId:g,transform:d,symbol:h,styles:we({},p.styles)}),L=r.found&&n.found?hr("generateAbstractMask",_)||{children:[],attributes:{}}:hr("generateAbstractIcon",_)||{children:[],attributes:{}},O=L.children,C=L.attributes;return _.children=O,_.attributes=C,h?HT(_):VT(_)}function Rx(a){var e=a.content,n=a.width,r=a.height,o=a.transform,u=a.extra,d=a.watchable,h=d===void 0?!1:d,g=we(we({},u.attributes),{},{class:u.classes.join(" ")});h&&(g[Xr]="");var p=we({},u.styles);lm(o)&&(p.transform=xT({transform:o,width:n,height:r}),p["-webkit-transform"]=p.transform);var v=Bu(p);v.length>0&&(g.style=v);var x=[];return x.push({tag:"span",attributes:g,children:[e]}),x}function GT(a){var e=a.content,n=a.extra,r=we(we({},n.attributes),{},{class:n.classes.join(" ")}),o=Bu(n.styles);o.length>0&&(r.style=o);var u=[];return u.push({tag:"span",attributes:r,children:[e]}),u}var lh=Ui.styles;function tp(a){var e=a[0],n=a[1],r=a.slice(4),o=zu(r,1),u=o[0],d=null;return Array.isArray(u)?d={tag:"g",attributes:{class:"".concat(et.cssPrefix,"-").concat(rh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(et.cssPrefix,"-").concat(rh.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(et.cssPrefix,"-").concat(rh.PRIMARY),fill:"currentColor",d:u[1]}}]}:d={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:e,height:n,icon:d}}var WT={found:!1,width:512,height:512};function XT(a,e){!Fy&&!et.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function np(a,e){var n=e;return e==="fa"&&et.styleDefault!==null&&(e=dr()),new Promise(function(r,o){if(n==="fa"){var u=Ky(a)||{};a=u.iconName||a,e=u.prefix||e}if(a&&e&&lh[e]&&lh[e][a]){var d=lh[e][a];return r(tp(d))}XT(a,e),r(we(we({},WT),{},{icon:et.showMissingIcons&&a?hr("missingIconAbstract")||{}:{}}))})}var wx=function(){},ip=et.measurePerformance&&Gc&&Gc.mark&&Gc.measure?Gc:{mark:wx,measure:wx},dl='FA "7.0.1"',YT=function(e){return ip.mark("".concat(dl," ").concat(e," begins")),function(){return t1(e)}},t1=function(e){ip.mark("".concat(dl," ").concat(e," ends")),ip.measure("".concat(dl," ").concat(e),"".concat(dl," ").concat(e," begins"),"".concat(dl," ").concat(e," ends"))},dm={begin:YT,end:t1},yu=function(){};function Nx(a){var e=a.getAttribute?a.getAttribute(Xr):null;return typeof e=="string"}function qT(a){var e=a.getAttribute?a.getAttribute(am):null,n=a.getAttribute?a.getAttribute(rm):null;return e&&n}function ZT(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(et.replacementClass)}function QT(){if(et.autoReplaceSvg===!0)return Su.replace;var a=Su[et.autoReplaceSvg];return a||Su.replace}function JT(a){return Zt.createElementNS("http://www.w3.org/2000/svg",a)}function KT(a){return Zt.createElement(a)}function n1(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?a.tag==="svg"?JT:KT:n;if(typeof a=="string")return Zt.createTextNode(a);var o=r(a.tag);Object.keys(a.attributes||[]).forEach(function(d){o.setAttribute(d,a.attributes[d])});var u=a.children||[];return u.forEach(function(d){o.appendChild(n1(d,{ceFn:r}))}),o}function $T(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Su={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(o){n.parentNode.insertBefore(n1(o),n)}),n.getAttribute(Xr)===null&&et.keepOriginalSource){var r=Zt.createComment($T(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~om(n).indexOf(et.replacementClass))return Su.replace(e);var o=new RegExp("".concat(et.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var u=r[0].attributes.class.split(" ").reduce(function(h,g){return g===et.replacementClass||g.match(o)?h.toSvg.push(g):h.toNode.push(g),h},{toNode:[],toSvg:[]});r[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",u.toNode.join(" "))}var d=r.map(function(h){return wl(h)}).join(`
`);n.setAttribute(Xr,""),n.innerHTML=d}};function Cx(a){a()}function i1(a,e){var n=typeof e=="function"?e:yu;if(a.length===0)n();else{var r=Cx;et.mutateApproach===nT&&(r=fr.requestAnimationFrame||Cx),r(function(){var o=QT(),u=dm.begin("mutate");a.map(o),u(),n()})}}var hm=!1;function a1(){hm=!0}function ap(){hm=!1}var Cu=null;function Dx(a){if(mx&&et.observeMutations){var e=a.treeCallback,n=e===void 0?yu:e,r=a.nodeCallback,o=r===void 0?yu:r,u=a.pseudoElementsCallback,d=u===void 0?yu:u,h=a.observeMutationsRoot,g=h===void 0?Zt:h;Cu=new mx(function(p){if(!hm){var v=dr();ro(p).forEach(function(x){if(x.type==="childList"&&x.addedNodes.length>0&&!Nx(x.addedNodes[0])&&(et.searchPseudoElements&&d(x.target),n(x.target)),x.type==="attributes"&&x.target.parentNode&&et.searchPseudoElements&&d([x.target],!0),x.type==="attributes"&&Nx(x.target)&&~lT.indexOf(x.attributeName))if(x.attributeName==="class"&&qT(x.target)){var y=Hu(om(x.target)),S=y.prefix,T=y.iconName;x.target.setAttribute(am,S||v),T&&x.target.setAttribute(rm,T)}else ZT(x.target)&&o(x.target)})}}),Ca&&Cu.observe(g,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eA(){Cu&&Cu.disconnect()}function tA(a){var e=a.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,o){var u=o.split(":"),d=u[0],h=u.slice(1);return d&&h.length>0&&(r[d]=h.join(":").trim()),r},{})),n}function nA(a){var e=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",o=Hu(om(a));return o.prefix||(o.prefix=dr()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=AT(o.prefix,a.innerText)||um(o.prefix,Gy(a.innerText))),!o.iconName&&et.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=a.firstChild.data)),o}function iA(a){var e=ro(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function aA(){return{iconName:null,prefix:null,transform:Gi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ux(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nA(a),r=n.iconName,o=n.prefix,u=n.rest,d=iA(a),h=$h("parseNodeAttributes",{},a),g=e.styleParser?tA(a):[];return we({iconName:r,prefix:o,transform:Gi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:g,attributes:d}},h)}var rA=Ui.styles;function r1(a){var e=et.autoReplaceSvg==="nest"?Ux(a,{styleParser:!1}):Ux(a);return~e.extra.classes.indexOf(jy)?hr("generateLayersText",a,e):hr("generateSvgReplacementMutation",a,e)}function sA(){return[].concat(Pi(Cy),Pi(Dy))}function Lx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ca)return Promise.resolve();var n=Zt.documentElement.classList,r=function(x){return n.add("".concat(xx,"-").concat(x))},o=function(x){return n.remove("".concat(xx,"-").concat(x))},u=et.autoFetchSvg?sA():my.concat(Object.keys(rA));u.includes("fa")||u.push("fa");var d=[".".concat(jy,":not([").concat(Xr,"])")].concat(u.map(function(v){return".".concat(v,":not([").concat(Xr,"])")})).join(", ");if(d.length===0)return Promise.resolve();var h=[];try{h=ro(a.querySelectorAll(d))}catch{}if(h.length>0)r("pending"),o("complete");else return Promise.resolve();var g=dm.begin("onTree"),p=h.reduce(function(v,x){try{var y=r1(x);y&&v.push(y)}catch(S){Fy||S.name==="MissingIcon"&&console.error(S)}return v},[]);return new Promise(function(v,x){Promise.all(p).then(function(y){i1(y,function(){r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),g(),v()})}).catch(function(y){g(),x(y)})})}function oA(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;r1(a).then(function(n){n&&i1([n],e)})}function lA(a){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ep(e||{}),o=n.mask;return o&&(o=(o||{}).icon?o:ep(o||{})),a(r,we(we({},n),{},{mask:o}))}}var cA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?Gi:r,u=n.symbol,d=u===void 0?!1:u,h=n.mask,g=h===void 0?null:h,p=n.maskId,v=p===void 0?null:p,x=n.classes,y=x===void 0?[]:x,S=n.attributes,T=S===void 0?{}:S,A=n.styles,M=A===void 0?{}:A;if(e){var _=e.prefix,L=e.iconName,O=e.icon;return ku(we({type:"icon"},e),function(){return Yr("beforeDOMElementCreation",{iconDefinition:e,params:n}),fm({icons:{main:tp(O),mask:g?tp(g.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:L,transform:we(we({},Gi),o),symbol:d,maskId:v,extra:{attributes:T,styles:M,classes:y}})})}},uA={mixout:function(){return{icon:lA(cA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lx,n.nodeCallback=oA,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,o=r===void 0?Zt:r,u=n.callback,d=u===void 0?function(){}:u;return Lx(o,d)},e.generateSvgReplacementMutation=function(n,r){var o=r.iconName,u=r.prefix,d=r.transform,h=r.symbol,g=r.mask,p=r.maskId,v=r.extra;return new Promise(function(x,y){Promise.all([np(o,u),g.iconName?np(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=zu(S,2),A=T[0],M=T[1];x([n,fm({icons:{main:A,mask:M},prefix:u,iconName:o,transform:d,symbol:h,maskId:p,extra:v,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,u=n.main,d=n.transform,h=n.styles,g=Bu(h);g.length>0&&(o.style=g);var p;return lm(d)&&(p=hr("generateAbstractTransformGrouping",{main:u,transform:d,containerWidth:u.width,iconWidth:u.width})),r.push(p||u.icon),{children:r,attributes:o}}}},fA={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,u=o===void 0?[]:o;return ku({type:"layer"},function(){Yr("beforeDOMElementCreation",{assembler:n,params:r});var d=[];return n(function(h){Array.isArray(h)?h.map(function(g){d=d.concat(g.abstract)}):d=d.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(et.cssPrefix,"-layers")].concat(Pi(u)).join(" ")},children:d}]})}}}},dA={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var o=r.classes,u=o===void 0?[]:o,d=r.attributes,h=d===void 0?{}:d,g=r.styles,p=g===void 0?{}:g;return ku({type:"counter",content:n},function(){return Yr("beforeDOMElementCreation",{content:n,params:r}),GT({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(et.cssPrefix,"-layers-counter")].concat(Pi(u))}})})}}}},hA={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,u=o===void 0?Gi:o,d=r.classes,h=d===void 0?[]:d,g=r.attributes,p=g===void 0?{}:g,v=r.styles,x=v===void 0?{}:v;return ku({type:"text",content:n},function(){return Yr("beforeDOMElementCreation",{content:n,params:r}),Rx({content:n,transform:we(we({},Gi),u),extra:{attributes:p,styles:x,classes:["".concat(et.cssPrefix,"-layers-text")].concat(Pi(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var o=r.transform,u=r.extra,d=null,h=null;if(hy){var g=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();d=p.width/g,h=p.height/g}return Promise.resolve([n,Rx({content:n.innerHTML,width:d,height:h,transform:o,extra:u,watchable:!0})])}}},s1=new RegExp('"',"ug"),Ox=[1105920,1112319],Px=we(we(we(we({},{FontAwesome:{normal:"fas",400:"fas"}}),t2),eT),u2),rp=Object.keys(Px).reduce(function(a,e){return a[e.toLowerCase()]=Px[e],a},{}),pA=Object.keys(rp).reduce(function(a,e){var n=rp[e];return a[e]=n[900]||Pi(Object.entries(n))[0][1],a},{});function mA(a){var e=a.replace(s1,"");return Gy(Pi(e)[0]||"")}function gA(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),n=a.getPropertyValue("content"),r=n.replace(s1,""),o=r.codePointAt(0),u=o>=Ox[0]&&o<=Ox[1],d=r.length===2?r[0]===r[1]:!1;return u||d||e}function vA(a,e){var n=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return(rp[n]||{})[o]||pA[n]}function Fx(a,e){var n="".concat(tT).concat(e.replace(":","-"));return new Promise(function(r,o){if(a.getAttribute(n)!==null)return r();var u=ro(a.children),d=u.filter(function(B){return B.getAttribute(qh)===e})[0],h=fr.getComputedStyle(a,e),g=h.getPropertyValue("font-family"),p=g.match(sT),v=h.getPropertyValue("font-weight"),x=h.getPropertyValue("content");if(d&&!p)return a.removeChild(d),r();if(p&&x!=="none"&&x!==""){var y=h.getPropertyValue("content"),S=vA(g,v),T=mA(y),A=p[0].startsWith("FontAwesome"),M=gA(h),_=um(S,T),L=_;if(A){var O=RT(T);O.iconName&&O.prefix&&(_=O.iconName,S=O.prefix)}if(_&&!M&&(!d||d.getAttribute(am)!==S||d.getAttribute(rm)!==L)){a.setAttribute(n,L),d&&a.removeChild(d);var C=aA(),F=C.extra;F.attributes[qh]=e,np(_,S).then(function(B){var V=fm(we(we({},C),{},{icons:{main:B,mask:$y()},prefix:S,iconName:L,extra:F,watchable:!0})),Z=Zt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(Z,a.firstChild):a.appendChild(Z),Z.outerHTML=V.map(function(D){return wl(D)}).join(`
`),a.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function xA(a){return Promise.all([Fx(a,"::before"),Fx(a,"::after")])}function _A(a){return a.parentNode!==document.head&&!~iT.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(qh)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var yA=function(e){return!!e&&Py.some(function(n){return e.includes(n)})},SA=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(g){return g.trim()});r=r.flatMap(function(g){return g.includes("(")?g:g.split(",").map(function(p){return p.trim()})});var o=_u(r),u;try{for(o.s();!(u=o.n()).done;){var d=u.value;if(yA(d)){var h=Py.reduce(function(g,p){return g.replace(p,"")},d);h!==""&&h!=="*"&&n.add(h)}}}catch(g){o.e(g)}finally{o.f()}return n};function Ix(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ca){var n;if(e)n=a;else if(et.searchPseudoElementsFullScan)n=a.querySelectorAll("*");else{var r=new Set,o=_u(document.styleSheets),u;try{for(o.s();!(u=o.n()).done;){var d=u.value;try{var h=_u(d.cssRules),g;try{for(h.s();!(g=h.n()).done;){var p=g.value,v=SA(p.selectorText),x=_u(v),y;try{for(x.s();!(y=x.n()).done;){var S=y.value;r.add(S)}}catch(A){x.e(A)}finally{x.f()}}}catch(A){h.e(A)}finally{h.f()}}catch(A){et.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(d.href," (").concat(A.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(A){o.e(A)}finally{o.f()}if(!r.size)return;var T=Array.from(r).join(", ");try{n=a.querySelectorAll(T)}catch{}}return new Promise(function(A,M){var _=ro(n).filter(_A).map(xA),L=dm.begin("searchPseudoElements");a1(),Promise.all(_).then(function(){L(),ap(),A()}).catch(function(){L(),ap(),M()})})}}var bA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ix,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?Zt:r;et.searchPseudoElements&&Ix(o)}}},jx=!1,MA={mixout:function(){return{dom:{unwatch:function(){a1(),jx=!0}}}},hooks:function(){return{bootstrap:function(){Dx($h("mutationObserverCallbacks",{}))},noAuto:function(){eA()},watch:function(n){var r=n.observeMutationsRoot;jx?ap():Dx($h("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zx=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,o){var u=o.toLowerCase().split("-"),d=u[0],h=u.slice(1).join("-");if(d&&h==="h")return r.flipX=!0,r;if(d&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(d){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},n)},EA={mixout:function(){return{parse:{transform:function(n){return zx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=zx(o)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,u=n.containerWidth,d=n.iconWidth,h={transform:"translate(".concat(u/2," 256)")},g="translate(".concat(o.x*32,", ").concat(o.y*32,") "),p="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),v="rotate(".concat(o.rotate," 0 0)"),x={transform:"".concat(g," ").concat(p," ").concat(v)},y={transform:"translate(".concat(d/2*-1," -256)")},S={outer:h,inner:x,path:y};return{tag:"g",attributes:we({},S.outer),children:[{tag:"g",attributes:we({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:we(we({},r.icon.attributes),S.path)}]}]}}}},ch={x:0,y:0,width:"100%",height:"100%"};function Bx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function TA(a){return a.tag==="g"?a.children:[a]}var AA={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),u=o?Hu(o.split(" ").map(function(d){return d.trim()})):$y();return u.prefix||(u.prefix=dr()),n.mask=u,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,o=n.attributes,u=n.main,d=n.mask,h=n.maskId,g=n.transform,p=u.width,v=u.icon,x=d.width,y=d.icon,S=vT({transform:g,containerWidth:x,iconWidth:p}),T={tag:"rect",attributes:we(we({},ch),{},{fill:"white"})},A=v.children?{children:v.children.map(Bx)}:{},M={tag:"g",attributes:we({},S.inner),children:[Bx(we({tag:v.tag,attributes:we(we({},v.attributes),S.path)},A))]},_={tag:"g",attributes:we({},S.outer),children:[M]},L="mask-".concat(h||yx()),O="clip-".concat(h||yx()),C={tag:"mask",attributes:we(we({},ch),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,_]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:TA(y)},C]};return r.push(F,{tag:"rect",attributes:we({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(L,")")},ch)}),{children:r,attributes:o}}}},RA={provides:function(e){var n=!1;fr.matchMedia&&(n=fr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:we(we({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var d=we(we({},u),{},{attributeName:"opacity"}),h={tag:"circle",attributes:we(we({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:we(we({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:we(we({},d),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:we(we({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:we(we({},d),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:we(we({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:we(we({},d),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wA={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),u=o===null?!1:o===""?!0:o;return n.symbol=u,n}}}},NA=[yT,uA,fA,dA,hA,bA,MA,EA,AA,RA,wA];FT(NA,{mixoutsTo:ui});ui.noAuto;var CA=ui.config;ui.library;ui.dom;var o1=ui.parse;ui.findIconDefinition;ui.toHtml;var DA=ui.icon;ui.layer;ui.text;ui.counter;function UA(a){return a=a-0,a===a}function l1(a){return UA(a)?a:(a=a.replaceAll(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}function LA(a){return a.charAt(0).toUpperCase()+a.slice(1)}var Ds=new Map,OA=1e3;function PA(a){if(Ds.has(a))return Ds.get(a);const e={};let n=0;const r=a.length;for(;n<r;){const o=a.indexOf(";",n),u=o===-1?r:o,d=a.slice(n,u).trim();if(d){const h=d.indexOf(":");if(h>0){const g=d.slice(0,h).trim(),p=d.slice(h+1).trim();if(g&&p){const v=l1(g);e[v.startsWith("webkit")?LA(v):v]=p}}}n=u+1}if(Ds.size===OA){const o=Ds.keys().next().value;o&&Ds.delete(o)}return Ds.set(a,e),e}function c1(a,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(p=>c1(a,p)),o=e.attributes||{},u={};for(const[p,v]of Object.entries(o))switch(!0){case p==="class":{u.className=v,delete o.class;break}case p==="style":{u.style=PA(String(v));break}case p.startsWith("aria-"):case p.startsWith("data-"):{u[p.toLowerCase()]=v;break}default:u[l1(p)]=v}const{style:d,"aria-label":h,...g}=n;return d&&(u.style=u.style?{...u.style,...d}:d),h&&(u["aria-label"]=h,u["aria-hidden"]="false"),a(e.tag,{...g,...u},...r)}var Vx=(a,e)=>{const n=ie.useId();return a||(e?n:void 0)},FA=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},IA="searchPseudoElementsFullScan"in CA?"7.0.0":"6.0.0",jA=Number.parseInt(IA)>=7,fa={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},zA={left:"fa-pull-left",right:"fa-pull-right"},BA={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},VA={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},da={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function HA(a){const{beat:e,fade:n,beatFade:r,bounce:o,shake:u,spin:d,spinPulse:h,spinReverse:g,pulse:p,fixedWidth:v,inverse:x,border:y,flip:S,size:T,rotation:A,pull:M,swapOpacity:_,rotateBy:L,widthAuto:O,className:C}=a,F=[];return C&&F.push(...C.split(" ")),e&&F.push(fa.beat),n&&F.push(fa.fade),r&&F.push(fa.beatFade),o&&F.push(fa.bounce),u&&F.push(fa.shake),d&&F.push(fa.spin),g&&F.push(fa.spinReverse),h&&F.push(fa.spinPulse),p&&F.push(fa.pulse),v&&F.push(da.fixedWidth),x&&F.push(da.inverse),y&&F.push(da.border),S===!0&&F.push(da.flip),(S==="horizontal"||S==="both")&&F.push(da.flipHorizontal),(S==="vertical"||S==="both")&&F.push(da.flipVertical),T!=null&&F.push(VA[T]),A!=null&&A!==0&&F.push(BA[A]),M!=null&&F.push(zA[M]),_&&F.push(da.swapOpacity),jA&&(L&&F.push(da.rotateBy),O&&F.push(da.widthAuto)),F}var kA=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Hx(a){if(a)return kA(a)?a:o1.icon(a)}function GA(a){return Object.keys(a)}var kx=new FA("FontAwesomeIcon"),u1={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},WA=new Set(Object.keys(u1)),Zn=W_.forwardRef((a,e)=>{const n={...u1,...a},{icon:r,mask:o,symbol:u,title:d,titleId:h,maskId:g,transform:p}=n,v=Vx(g,!!o),x=Vx(h,!!d),y=Hx(r);if(!y)return kx.error("Icon lookup is undefined",r),null;const S=HA(n),T=typeof p=="string"?o1.transform(p):p,A=Hx(o),M=DA(y,{...S.length>0&&{classes:S},...T&&{transform:T},...A&&{mask:A},symbol:u,title:d,titleId:x,maskId:v});if(!M)return kx.error("Could not find icon",y),null;const{abstract:_}=M,L={ref:e};for(const O of GA(n))WA.has(O)||(L[O]=n[O]);return XA(_[0],L)});Zn.displayName="FontAwesomeIcon";var XA=c1.bind(null,W_.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var YA={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M415.9 210.5c12.2-3.3 25 2.5 30.5 13.8L465 261.9c10.3 1.4 20.4 4.2 29.9 8.1l35-23.3c10.5-7 24.4-5.6 33.3 3.3l19.2 19.2c8.9 8.9 10.3 22.9 3.3 33.3l-23.3 34.9c1.9 4.7 3.6 9.6 5 14.7 1.4 5.1 2.3 10.1 3 15.2l37.7 18.6c11.3 5.6 17.1 18.4 13.8 30.5l-7 26.2c-3.3 12.1-14.6 20.3-27.2 19.5l-42-2.7c-6.3 8.1-13.6 15.6-21.9 22l2.7 41.9c.8 12.6-7.4 24-19.5 27.2l-26.2 7c-12.2 3.3-24.9-2.5-30.5-13.8l-18.6-37.6c-10.3-1.4-20.4-4.2-29.9-8.1l-35 23.3c-10.5 7-24.4 5.6-33.3-3.3l-19.2-19.2c-8.9-8.9-10.3-22.8-3.3-33.3l23.3-35c-1.9-4.7-3.6-9.6-5-14.7s-2.3-10.2-3-15.2l-37.7-18.6c-11.3-5.6-17-18.4-13.8-30.5l7-26.2c3.3-12.1 14.6-20.3 27.2-19.5l41.9 2.7c6.3-8.1 13.6-15.6 21.9-22l-2.7-41.8c-.8-12.6 7.4-24 19.5-27.2l26.2-7zM448.4 340a44 44 0 1 0 .1 88 44 44 0 1 0 -.1-88zM224.9-45.5l26.2 7c12.1 3.3 20.3 14.7 19.5 27.2l-2.7 41.8c8.3 6.4 15.6 13.8 21.9 22l42-2.7c12.5-.8 23.9 7.4 27.2 19.5l7 26.2c3.2 12.1-2.5 24.9-13.8 30.5l-37.7 18.6c-.7 5.1-1.7 10.2-3 15.2s-3.1 10-5 14.7l23.3 35c7 10.5 5.6 24.4-3.3 33.3L307.3 262c-8.9 8.9-22.8 10.3-33.3 3.3L239 242c-9.5 3.9-19.6 6.7-29.9 8.1l-18.6 37.6c-5.6 11.3-18.4 17-30.5 13.8l-26.2-7c-12.2-3.3-20.3-14.7-19.5-27.2l2.7-41.9c-8.3-6.4-15.6-13.8-21.9-22l-42 2.7c-12.5 .8-23.9-7.4-27.2-19.5l-7-26.2c-3.2-12.1 2.5-24.9 13.8-30.5l37.7-18.6c.7-5.1 1.7-10.1 3-15.2 1.4-5.1 3-10 5-14.7L55.1 46.5c-7-10.5-5.6-24.4 3.3-33.3L77.6-6c8.9-8.9 22.8-10.3 33.3-3.3l35 23.3c9.5-3.9 19.6-6.7 29.9-8.1l18.6-37.6c5.6-11.3 18.3-17 30.5-13.8zM192.4 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88z"]},qA=YA,f1={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},ZA={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},QA={prefix:"fas",iconName:"industry",icon:[512,512,[],"f275","M32 32C14.3 32 0 46.3 0 64L0 432c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-279.8c0-18.2-19.4-29.7-35.4-21.1l-156.6 84.3 0-63.2c0-18.2-19.4-29.7-35.4-21.1L128 215.4 128 64c0-17.7-14.3-32-32-32L32 32z"]},JA={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},KA={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M0 416L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM160 128l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0zm-24-72c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24zM360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0z"]},$A={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},eR={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},tR=eR,nR={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},iR={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},aR=iR,rR={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},sR=rR,oR={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},lR={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},cR={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},uR=cR,fR={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},dR={prefix:"fas",iconName:"route",icon:[512,512,[],"f4d7","M512 96c0 50.2-59.1 125.1-84.6 155-3.8 4.4-9.4 6.1-14.5 5L320 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96 43 96 96s-43 96-96 96l-276.4 0c8.7-9.9 19.3-22.6 30-36.8 6.3-8.4 12.8-17.6 19-27.2L416 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-53 0-96-43-96-96s43-96 96-96l39.8 0c-21-31.5-39.8-67.7-39.8-96 0-53 43-96 96-96s96 43 96 96zM117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2-.2-.2c-6 4.6-14.6 4-20-1.8-25.2-27.4-85-97.9-85-148.4 0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9-10.7 14.7-21.7 28-30.8 38.5l-.6 .7zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]};function hR(){const[a,e]=ie.useState(!1),[n,r]=ie.useState(""),o=ci(),u=[{label:"Mission",href:"/mission",icon:ZA,description:"Our vision for fusion energy"},{label:"Technology",href:"/technology",icon:qA,description:"Magnetic mirror fusion"},{label:"Roadmap",href:"/roadmap",icon:dR,description:"Development phases"},{label:"Applications",href:"/applications",icon:QA,description:"Commercial uses"},{label:"Case Studies",href:"/casestudies",icon:sR,description:"Success stories"},{label:"Team",href:"/team",icon:JA,description:"Meet our experts"},{label:"News",href:"/news",icon:KA,description:"Latest updates"},{label:"FAQ",href:"/faq",icon:tR,description:"Common questions"}];ie.useEffect(()=>{r(o.pathname)},[o.pathname]);const d=()=>{e(!a)},h=()=>{e(!1)};return c.jsxs("div",{className:"card-nav-container",children:[c.jsx("button",{className:"card-nav-toggle",onClick:d,"aria-label":"Toggle navigation","aria-expanded":a,children:c.jsx(Zn,{icon:a?aR:fR})}),c.jsx("div",{className:`card-nav-overlay ${a?"open":""}`,onClick:h,children:c.jsxs("div",{className:"card-nav-content",onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{className:"card-nav-header",children:[c.jsx("h2",{children:"Navigate"}),c.jsx("p",{children:"Explore ASPL Fusion"})]}),c.jsx("div",{className:"card-nav-grid",children:u.map((g,p)=>c.jsxs(sn,{to:g.href,className:`card-nav-item ${n===g.href?"active":""}`,onClick:h,style:{animationDelay:`${p*.1}s`},children:[c.jsx("div",{className:"card-nav-icon",children:c.jsx(Zn,{icon:g.icon})}),c.jsxs("div",{className:"card-nav-text",children:[c.jsx("h3",{children:g.label}),c.jsx("p",{children:g.description})]}),c.jsx("div",{className:"card-nav-arrow",children:c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:c.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]},g.href))}),c.jsx("div",{className:"card-nav-footer",children:c.jsxs(sn,{to:"/contact",className:"card-nav-cta",onClick:h,children:[c.jsx(Zn,{icon:f1}),c.jsx("span",{children:"Get in Touch"})]})})]})})]})}function pR(){const[a,e]=ie.useState(()=>localStorage.getItem("theme")==="dark");ie.useEffect(()=>{a?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))},[a]);const n=()=>{e(!a)};return c.jsx("button",{className:"dark-mode-toggle",onClick:n,"aria-label":`Switch to ${a?"light":"dark"} mode`,children:c.jsx(Zn,{icon:a?$A:oR})})}const mR="/assets/Logo-t-removebg-preview-DIglWU67.png";function gR({children:a}){const[e,n]=ie.useState(!1);ci(),ie.useEffect(()=>{const o=()=>{n(window.pageYOffset>300)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsxs(c.Fragment,{children:[c.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),c.jsx("header",{children:c.jsx("nav",{className:"navbar",children:c.jsx("div",{className:"container",children:c.jsxs(sn,{to:"/",className:"logo",children:[c.jsx("img",{src:mR,alt:"ASPL Fusion Logo",className:"logo-img"}),c.jsxs("span",{children:["ASPL",c.jsx("span",{className:"highlight",children:"Fusion"})]})]})})})}),c.jsx("main",{id:"main-content",children:a}),c.jsx("footer",{children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"footer-content",children:[c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"About ASPL Fusion"}),c.jsx("p",{children:"ASPL Fusion is commercializing fusion energy through a disciplined, phased strategy to solve critical national challenges in healthcare, industry, and energy security."}),c.jsxs("div",{className:"social-links",children:[c.jsx("a",{href:"https://www.linkedin.com/company/aspl-fusion",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx("i",{className:"fab fa-linkedin"})}),c.jsx("a",{href:"https://twitter.com/asplfusion",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:c.jsx("i",{className:"fab fa-twitter"})}),c.jsx("a",{href:"https://www.facebook.com/asplfusion",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:c.jsx("i",{className:"fab fa-facebook"})}),c.jsx("a",{href:"https://www.instagram.com/asplfusion",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:c.jsx("i",{className:"fab fa-instagram"})})]})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"Quick Links"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(sn,{to:"/mission",children:"Our Mission"})}),c.jsx("li",{children:c.jsx(sn,{to:"/technology",children:"Technology"})}),c.jsx("li",{children:c.jsx(sn,{to:"/roadmap",children:"Roadmap"})}),c.jsx("li",{children:c.jsx(sn,{to:"/applications",children:"Applications"})})]})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"Resources"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(sn,{to:"/news",children:"News & Updates"})}),c.jsx("li",{children:c.jsx(sn,{to:"/faq",children:"FAQ"})}),c.jsx("li",{children:c.jsx(sn,{to:"/careers",children:"Careers"})}),c.jsx("li",{children:c.jsx(sn,{to:"/contact",children:"Contact Us"})})]})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"Contact"}),c.jsxs("p",{children:["E-309, Road No.16 V.K.I. Area,",c.jsx("br",{}),"Jaipur Rajasthan 302013"]}),c.jsxs("p",{children:["Email: ",c.jsx("a",{href:"mailto:info@asplfusion.com",children:"info@asplfusion.com"})]}),c.jsxs("p",{children:["Phone: ",c.jsx("a",{href:"tel:+9101141519899",children:"+91 (011)-4151-9899"})]})]})]}),c.jsxs("div",{className:"footer-bottom",children:[c.jsx("p",{children:"© 2025 ASPL Fusion. All rights reserved."}),c.jsxs("div",{className:"footer-links",children:[c.jsx(sn,{to:"/privacy",children:"Privacy Policy"}),c.jsx(sn,{to:"/terms",children:"Terms of Service"}),c.jsx(sn,{to:"/about",children:"About Us"})]})]})]})}),c.jsx("button",{className:`scroll-to-top ${e?"visible":""}`,onClick:r,"aria-label":"Scroll to top",children:c.jsx(Zn,{icon:nR})}),c.jsx(pR,{}),c.jsx(hR,{})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pm="180",vR=0,Gx=1,xR=2,d1=1,_R=2,xa=3,pr=0,Jn=1,_a=2,cr=0,Zs=1,sp=2,Wx=3,Xx=4,yR=5,Vr=100,SR=101,bR=102,MR=103,ER=104,TR=200,AR=201,RR=202,wR=203,op=204,lp=205,NR=206,CR=207,DR=208,UR=209,LR=210,OR=211,PR=212,FR=213,IR=214,cp=0,up=1,fp=2,Ks=3,dp=4,hp=5,pp=6,mp=7,h1=0,jR=1,zR=2,ur=0,BR=1,VR=2,HR=3,kR=4,GR=5,WR=6,XR=7,p1=300,$s=301,eo=302,gp=303,vp=304,Gu=306,xp=1e3,Li=1001,_p=1002,li=1003,YR=1004,Xc=1005,Qn=1006,uh=1007,Gr=1008,Aa=1009,m1=1010,g1=1011,xl=1012,mm=1013,qr=1014,Wi=1015,so=1016,gm=1017,vm=1018,_l=1020,v1=35902,x1=35899,_1=1021,y1=1022,yi=1023,yl=1026,Sl=1027,S1=1028,xm=1029,b1=1030,_m=1031,ym=1033,bu=33776,Mu=33777,Eu=33778,Tu=33779,yp=35840,Sp=35841,bp=35842,Mp=35843,Ep=36196,Tp=37492,Ap=37496,Rp=37808,wp=37809,Np=37810,Cp=37811,Dp=37812,Up=37813,Lp=37814,Op=37815,Pp=37816,Fp=37817,Ip=37818,jp=37819,zp=37820,Bp=37821,Vp=36492,Hp=36494,kp=36495,Gp=36283,Wp=36284,Xp=36285,Yp=36286,qR=3200,ZR=3201,QR=0,JR=1,lr="",_i="srgb",to="srgb-linear",Du="linear",Ht="srgb",Us=7680,Yx=519,KR=512,$R=513,ew=514,M1=515,tw=516,nw=517,iw=518,aw=519,qx=35044,Zx="300 es",Xi=2e3,Uu=2001;class oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,d=o.length;u<d;u++)o[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,qp=180/Math.PI;function Nl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Tt(a,e,n){return Math.max(e,Math.min(n,a))}function rw(a,e){return(a%e+e)%e}function dh(a,e,n){return(1-n)*a+n*e}function sl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*o+e.x,this.y=u*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cl{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,d,h){let g=r[o+0],p=r[o+1],v=r[o+2],x=r[o+3];const y=u[d+0],S=u[d+1],T=u[d+2],A=u[d+3];if(h===0){e[n+0]=g,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h===1){e[n+0]=y,e[n+1]=S,e[n+2]=T,e[n+3]=A;return}if(x!==A||g!==y||p!==S||v!==T){let M=1-h;const _=g*y+p*S+v*T+x*A,L=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const F=Math.sqrt(O),B=Math.atan2(F,_*L);M=Math.sin(M*B)/F,h=Math.sin(h*B)/F}const C=h*L;if(g=g*M+y*C,p=p*M+S*C,v=v*M+T*C,x=x*M+A*C,M===1-h){const F=1/Math.sqrt(g*g+p*p+v*v+x*x);g*=F,p*=F,v*=F,x*=F}}e[n]=g,e[n+1]=p,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,u,d){const h=r[o],g=r[o+1],p=r[o+2],v=r[o+3],x=u[d],y=u[d+1],S=u[d+2],T=u[d+3];return e[n]=h*T+v*x+g*S-p*y,e[n+1]=g*T+v*y+p*x-h*S,e[n+2]=p*T+v*S+h*y-g*x,e[n+3]=v*T-h*x-g*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,d=e._order,h=Math.cos,g=Math.sin,p=h(r/2),v=h(o/2),x=h(u/2),y=g(r/2),S=g(o/2),T=g(u/2);switch(d){case"XYZ":this._x=y*v*x+p*S*T,this._y=p*S*x-y*v*T,this._z=p*v*T+y*S*x,this._w=p*v*x-y*S*T;break;case"YXZ":this._x=y*v*x+p*S*T,this._y=p*S*x-y*v*T,this._z=p*v*T-y*S*x,this._w=p*v*x+y*S*T;break;case"ZXY":this._x=y*v*x-p*S*T,this._y=p*S*x+y*v*T,this._z=p*v*T+y*S*x,this._w=p*v*x-y*S*T;break;case"ZYX":this._x=y*v*x-p*S*T,this._y=p*S*x+y*v*T,this._z=p*v*T-y*S*x,this._w=p*v*x+y*S*T;break;case"YZX":this._x=y*v*x+p*S*T,this._y=p*S*x+y*v*T,this._z=p*v*T-y*S*x,this._w=p*v*x-y*S*T;break;case"XZY":this._x=y*v*x-p*S*T,this._y=p*S*x-y*v*T,this._z=p*v*T+y*S*x,this._w=p*v*x+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],d=n[1],h=n[5],g=n[9],p=n[2],v=n[6],x=n[10],y=r+h+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-g)*S,this._y=(u-p)*S,this._z=(d-o)*S}else if(r>h&&r>x){const S=2*Math.sqrt(1+r-h-x);this._w=(v-g)/S,this._x=.25*S,this._y=(o+d)/S,this._z=(u+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-r-x);this._w=(u-p)/S,this._x=(o+d)/S,this._y=.25*S,this._z=(g+v)/S}else{const S=2*Math.sqrt(1+x-r-h);this._w=(d-o)/S,this._x=(u+p)/S,this._y=(g+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,d=e._w,h=n._x,g=n._y,p=n._z,v=n._w;return this._x=r*v+d*h+o*p-u*g,this._y=o*v+d*g+u*h-r*p,this._z=u*v+d*p+r*g-o*h,this._w=d*v-r*h-o*g-u*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+o*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=o,this._z=u,this;const g=1-h*h;if(g<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const p=Math.sqrt(g),v=Math.atan2(p,h),x=Math.sin((1-n)*v)/p,y=Math.sin(n*v)/p;return this._w=d*x+this._w*y,this._x=r*x+this._x*y,this._y=o*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,d=e.y,h=e.z,g=e.w,p=2*(d*o-h*r),v=2*(h*n-u*o),x=2*(u*r-d*n);return this.x=n+g*p+d*x-h*v,this.y=r+g*v+h*p-u*x,this.z=o+g*x+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,d=n.x,h=n.y,g=n.z;return this.x=o*g-u*h,this.y=u*d-r*g,this.z=r*h-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new le,Qx=new Cl;class mt{constructor(e,n,r,o,u,d,h,g,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,d,h,g,p)}set(e,n,r,o,u,d,h,g,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=n,v[4]=u,v[5]=g,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,d=r[0],h=r[3],g=r[6],p=r[1],v=r[4],x=r[7],y=r[2],S=r[5],T=r[8],A=o[0],M=o[3],_=o[6],L=o[1],O=o[4],C=o[7],F=o[2],B=o[5],V=o[8];return u[0]=d*A+h*L+g*F,u[3]=d*M+h*O+g*B,u[6]=d*_+h*C+g*V,u[1]=p*A+v*L+x*F,u[4]=p*M+v*O+x*B,u[7]=p*_+v*C+x*V,u[2]=y*A+S*L+T*F,u[5]=y*M+S*O+T*B,u[8]=y*_+S*C+T*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],d=e[4],h=e[5],g=e[6],p=e[7],v=e[8];return n*d*v-n*h*p-r*u*v+r*h*g+o*u*p-o*d*g}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],d=e[4],h=e[5],g=e[6],p=e[7],v=e[8],x=v*d-h*p,y=h*g-v*u,S=p*u-d*g,T=n*x+r*y+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(o*p-v*r)*A,e[2]=(h*r-o*d)*A,e[3]=y*A,e[4]=(v*n-o*g)*A,e[5]=(o*u-h*n)*A,e[6]=S*A,e[7]=(r*g-p*n)*A,e[8]=(d*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,d,h){const g=Math.cos(u),p=Math.sin(u);return this.set(r*g,r*p,-r*(g*d+p*h)+d+e,-o*p,o*g,-o*(-p*d+g*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(ph.makeScale(e,n)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,n){return this.premultiply(ph.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new mt;function E1(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Lu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sw(){const a=Lu("canvas");return a.style.display="block",a}const Jx={};function bl(a){a in Jx||(Jx[a]=!0,console.warn(a))}function ow(a,e,n){return new Promise(function(r,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Kx=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$x=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lw(){const a={enabled:!0,workingColorSpace:to,spaces:{},convert:function(o,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ht&&(o.r=Sa(o.r),o.g=Sa(o.g),o.b=Sa(o.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ht&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===lr?Du:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,d){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return bl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return bl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[to]:{primaries:e,whitePoint:r,transfer:Du,toXYZ:Kx,fromXYZ:$x,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Kx,fromXYZ:$x,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),a}const Dt=lw();function Sa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Qs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ls;class cw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=Lu("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Lu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let d=0;d<u.length;d++)u[d]=Sa(u[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Sa(n[r]/255)*255):n[r]=Sa(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uw=0;class Sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=Nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?u.push(mh(o[d].image)):u.push(mh(o[d]))}else u=mh(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function mh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?cw.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fw=0;const gh=new le;class Hn extends oo{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,r=Li,o=Li,u=Qn,d=Gr,h=yi,g=Aa,p=Hn.DEFAULT_ANISOTROPY,v=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=Nl(),this.name="",this.source=new Sm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=g,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xp:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case _p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xp:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case _p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=p1;Hn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const g=e.elements,p=g[0],v=g[4],x=g[8],y=g[1],S=g[5],T=g[9],A=g[2],M=g[6],_=g[10];if(Math.abs(v-y)<.01&&Math.abs(x-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+A)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const O=(p+1)/2,C=(S+1)/2,F=(_+1)/2,B=(v+y)/4,V=(x+A)/4,Z=(T+M)/4;return O>C&&O>F?O<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(O),o=B/r,u=V/r):C>F?C<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(C),r=B/o,u=Z/o):F<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(F),r=V/u,o=Z/u),this.set(r,o,u,n),this}let L=Math.sqrt((M-T)*(M-T)+(x-A)*(x-A)+(y-v)*(y-v));return Math.abs(L)<.001&&(L=1),this.x=(M-T)/L,this.y=(x-A)/L,this.z=(y-v)/L,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this.w=Tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this.w=Tt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dw extends oo{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const o={width:e,height:n,depth:r.depth},u=new Hn(o);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Sm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends dw{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class T1 extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hw extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ri):Ri.fromBufferAttribute(u,d),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yc.copy(r.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}const o=e.children;for(let u=0,d=o.length;u<d;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),qc.subVectors(this.max,ol),Os.subVectors(e.a,ol),Ps.subVectors(e.b,ol),Fs.subVectors(e.c,ol),nr.subVectors(Ps,Os),ir.subVectors(Fs,Ps),Lr.subVectors(Os,Fs);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Lr.z,Lr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Lr.z,0,-Lr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Lr.y,Lr.x,0];return!vh(n,Os,Ps,Fs,qc)||(n=[1,0,0,0,1,0,0,0,1],!vh(n,Os,Ps,Fs,qc))?!1:(Zc.crossVectors(nr,ir),n=[Zc.x,Zc.y,Zc.z],vh(n,Os,Ps,Fs,qc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new le,new le,new le,new le,new le,new le,new le,new le],Ri=new le,Yc=new Dl,Os=new le,Ps=new le,Fs=new le,nr=new le,ir=new le,Lr=new le,ol=new le,qc=new le,Zc=new le,Or=new le;function vh(a,e,n,r,o){for(let u=0,d=a.length-3;u<=d;u+=3){Or.fromArray(a,u);const h=o.x*Math.abs(Or.x)+o.y*Math.abs(Or.y)+o.z*Math.abs(Or.z),g=e.dot(Or),p=n.dot(Or),v=r.dot(Or);if(Math.max(-Math.max(g,p,v),Math.min(g,p,v))>h)return!1}return!0}const pw=new Dl,ll=new le,xh=new le;class Wu{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):pw.setFromPoints(e).getCenter(r);let o=0;for(let u=0,d=e.length;u<d;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const n=ll.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ll,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(xh)),this.expandByPoint(ll.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pa=new le,_h=new le,Qc=new le,ar=new le,yh=new le,Jc=new le,Sh=new le;class A1{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,n),pa.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){_h.copy(e).add(n).multiplyScalar(.5),Qc.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(_h);const u=e.distanceTo(n)*.5,d=-this.direction.dot(Qc),h=ar.dot(this.direction),g=-ar.dot(Qc),p=ar.lengthSq(),v=Math.abs(1-d*d);let x,y,S,T;if(v>0)if(x=d*g-h,y=d*h-g,T=u*v,x>=0)if(y>=-T)if(y<=T){const A=1/v;x*=A,y*=A,S=x*(x+d*y+2*h)+y*(d*x+y+2*g)+p}else y=u,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*g)+p;else y=-u,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*g)+p;else y<=-T?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-g),u),S=-x*x+y*(y+2*g)+p):y<=T?(x=0,y=Math.min(Math.max(-u,-g),u),S=y*(y+2*g)+p):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-g),u),S=-x*x+y*(y+2*g)+p);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*g)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(_h).addScaledVector(Qc,y),S}intersectSphere(e,n){pa.subVectors(e.center,this.origin);const r=pa.dot(this.direction),o=pa.dot(pa)-r*r,u=e.radius*e.radius;if(o>u)return null;const d=Math.sqrt(u-o),h=r-d,g=r+d;return g<0?null:h<0?this.at(g,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,d,h,g;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),v>=0?(u=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(u=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),r>d||u>o||((u>r||isNaN(r))&&(r=u),(d<o||isNaN(o))&&(o=d),x>=0?(h=(e.min.z-y.z)*x,g=(e.max.z-y.z)*x):(h=(e.max.z-y.z)*x,g=(e.min.z-y.z)*x),r>g||h>o)||((h>r||r!==r)&&(r=h),(g<o||o!==o)&&(o=g),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,n,r,o,u){yh.subVectors(n,e),Jc.subVectors(r,e),Sh.crossVectors(yh,Jc);let d=this.direction.dot(Sh),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ar.subVectors(this.origin,e);const g=h*this.direction.dot(Jc.crossVectors(ar,Jc));if(g<0)return null;const p=h*this.direction.dot(yh.cross(ar));if(p<0||g+p>d)return null;const v=-h*ar.dot(Sh);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,n,r,o,u,d,h,g,p,v,x,y,S,T,A,M){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,d,h,g,p,v,x,y,S,T,A,M)}set(e,n,r,o,u,d,h,g,p,v,x,y,S,T,A,M){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=u,_[5]=d,_[9]=h,_[13]=g,_[2]=p,_[6]=v,_[10]=x,_[14]=y,_[3]=S,_[7]=T,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),u=1/Is.setFromMatrixColumn(e,1).length(),d=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),g=Math.cos(o),p=Math.sin(o),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=d*v,S=d*x,T=h*v,A=h*x;n[0]=g*v,n[4]=-g*x,n[8]=p,n[1]=S+T*p,n[5]=y-A*p,n[9]=-h*g,n[2]=A-y*p,n[6]=T+S*p,n[10]=d*g}else if(e.order==="YXZ"){const y=g*v,S=g*x,T=p*v,A=p*x;n[0]=y+A*h,n[4]=T*h-S,n[8]=d*p,n[1]=d*x,n[5]=d*v,n[9]=-h,n[2]=S*h-T,n[6]=A+y*h,n[10]=d*g}else if(e.order==="ZXY"){const y=g*v,S=g*x,T=p*v,A=p*x;n[0]=y-A*h,n[4]=-d*x,n[8]=T+S*h,n[1]=S+T*h,n[5]=d*v,n[9]=A-y*h,n[2]=-d*p,n[6]=h,n[10]=d*g}else if(e.order==="ZYX"){const y=d*v,S=d*x,T=h*v,A=h*x;n[0]=g*v,n[4]=T*p-S,n[8]=y*p+A,n[1]=g*x,n[5]=A*p+y,n[9]=S*p-T,n[2]=-p,n[6]=h*g,n[10]=d*g}else if(e.order==="YZX"){const y=d*g,S=d*p,T=h*g,A=h*p;n[0]=g*v,n[4]=A-y*x,n[8]=T*x+S,n[1]=x,n[5]=d*v,n[9]=-h*v,n[2]=-p*v,n[6]=S*x+T,n[10]=y-A*x}else if(e.order==="XZY"){const y=d*g,S=d*p,T=h*g,A=h*p;n[0]=g*v,n[4]=-x,n[8]=p*v,n[1]=y*x+A,n[5]=d*v,n[9]=S*x-T,n[2]=T*x-S,n[6]=h*v,n[10]=A*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mw,e,gw)}lookAt(e,n,r){const o=this.elements;return si.subVectors(e,n),si.lengthSq()===0&&(si.z=1),si.normalize(),rr.crossVectors(r,si),rr.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),rr.crossVectors(r,si)),rr.normalize(),Kc.crossVectors(si,rr),o[0]=rr.x,o[4]=Kc.x,o[8]=si.x,o[1]=rr.y,o[5]=Kc.y,o[9]=si.y,o[2]=rr.z,o[6]=Kc.z,o[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,d=r[0],h=r[4],g=r[8],p=r[12],v=r[1],x=r[5],y=r[9],S=r[13],T=r[2],A=r[6],M=r[10],_=r[14],L=r[3],O=r[7],C=r[11],F=r[15],B=o[0],V=o[4],Z=o[8],D=o[12],N=o[1],k=o[5],ae=o[9],he=o[13],pe=o[2],de=o[6],I=o[10],J=o[14],X=o[3],Se=o[7],P=o[11],ee=o[15];return u[0]=d*B+h*N+g*pe+p*X,u[4]=d*V+h*k+g*de+p*Se,u[8]=d*Z+h*ae+g*I+p*P,u[12]=d*D+h*he+g*J+p*ee,u[1]=v*B+x*N+y*pe+S*X,u[5]=v*V+x*k+y*de+S*Se,u[9]=v*Z+x*ae+y*I+S*P,u[13]=v*D+x*he+y*J+S*ee,u[2]=T*B+A*N+M*pe+_*X,u[6]=T*V+A*k+M*de+_*Se,u[10]=T*Z+A*ae+M*I+_*P,u[14]=T*D+A*he+M*J+_*ee,u[3]=L*B+O*N+C*pe+F*X,u[7]=L*V+O*k+C*de+F*Se,u[11]=L*Z+O*ae+C*I+F*P,u[15]=L*D+O*he+C*J+F*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],d=e[1],h=e[5],g=e[9],p=e[13],v=e[2],x=e[6],y=e[10],S=e[14],T=e[3],A=e[7],M=e[11],_=e[15];return T*(+u*g*x-o*p*x-u*h*y+r*p*y+o*h*S-r*g*S)+A*(+n*g*S-n*p*y+u*d*y-o*d*S+o*p*v-u*g*v)+M*(+n*p*x-n*h*S-u*d*x+r*d*S+u*h*v-r*p*v)+_*(-o*h*v-n*g*x+n*h*y+o*d*x-r*d*y+r*g*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],d=e[4],h=e[5],g=e[6],p=e[7],v=e[8],x=e[9],y=e[10],S=e[11],T=e[12],A=e[13],M=e[14],_=e[15],L=x*M*p-A*y*p+A*g*S-h*M*S-x*g*_+h*y*_,O=T*y*p-v*M*p-T*g*S+d*M*S+v*g*_-d*y*_,C=v*A*p-T*x*p+T*h*S-d*A*S-v*h*_+d*x*_,F=T*x*g-v*A*g-T*h*y+d*A*y+v*h*M-d*x*M,B=n*L+r*O+o*C+u*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/B;return e[0]=L*V,e[1]=(A*y*u-x*M*u-A*o*S+r*M*S+x*o*_-r*y*_)*V,e[2]=(h*M*u-A*g*u+A*o*p-r*M*p-h*o*_+r*g*_)*V,e[3]=(x*g*u-h*y*u-x*o*p+r*y*p+h*o*S-r*g*S)*V,e[4]=O*V,e[5]=(v*M*u-T*y*u+T*o*S-n*M*S-v*o*_+n*y*_)*V,e[6]=(T*g*u-d*M*u-T*o*p+n*M*p+d*o*_-n*g*_)*V,e[7]=(d*y*u-v*g*u+v*o*p-n*y*p-d*o*S+n*g*S)*V,e[8]=C*V,e[9]=(T*x*u-v*A*u-T*r*S+n*A*S+v*r*_-n*x*_)*V,e[10]=(d*A*u-T*h*u+T*r*p-n*A*p-d*r*_+n*h*_)*V,e[11]=(v*h*u-d*x*u-v*r*p+n*x*p+d*r*S-n*h*S)*V,e[12]=F*V,e[13]=(v*A*o-T*x*o+T*r*y-n*A*y-v*r*M+n*x*M)*V,e[14]=(T*h*o-d*A*o-T*r*g+n*A*g+d*r*M-n*h*M)*V,e[15]=(d*x*o-v*h*o+v*r*g-n*x*g-d*r*y+n*h*y)*V,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,d=e.x,h=e.y,g=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-o*g,p*g+o*h,0,p*h+o*g,v*h+r,v*g-o*d,0,p*g-o*h,v*g+o*d,u*g*g+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,d){return this.set(1,r,u,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,d=n._y,h=n._z,g=n._w,p=u+u,v=d+d,x=h+h,y=u*p,S=u*v,T=u*x,A=d*v,M=d*x,_=h*x,L=g*p,O=g*v,C=g*x,F=r.x,B=r.y,V=r.z;return o[0]=(1-(A+_))*F,o[1]=(S+C)*F,o[2]=(T-O)*F,o[3]=0,o[4]=(S-C)*B,o[5]=(1-(y+_))*B,o[6]=(M+L)*B,o[7]=0,o[8]=(T+O)*V,o[9]=(M-L)*V,o[10]=(1-(y+A))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let u=Is.set(o[0],o[1],o[2]).length();const d=Is.set(o[4],o[5],o[6]).length(),h=Is.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const p=1/u,v=1/d,x=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=x,wi.elements[9]*=x,wi.elements[10]*=x,n.setFromRotationMatrix(wi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,n,r,o,u,d,h=Xi,g=!1){const p=this.elements,v=2*u/(n-e),x=2*u/(r-o),y=(n+e)/(n-e),S=(r+o)/(r-o);let T,A;if(g)T=u/(d-u),A=d*u/(d-u);else if(h===Xi)T=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Uu)T=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,u,d,h=Xi,g=!1){const p=this.elements,v=2/(n-e),x=2/(r-o),y=-(n+e)/(n-e),S=-(r+o)/(r-o);let T,A;if(g)T=1/(d-u),A=d/(d-u);else if(h===Xi)T=-2/(d-u),A=-(d+u)/(d-u);else if(h===Uu)T=-1/(d-u),A=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Is=new le,wi=new pn,mw=new le(0,0,0),gw=new le(1,1,1),rr=new le,Kc=new le,si=new le,e_=new pn,t_=new Cl;class Ra{constructor(e=0,n=0,r=0,o=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],d=o[4],h=o[8],g=o[1],p=o[5],v=o[9],x=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,u));break;case"ZYX":this._y=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(g,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return e_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return t_.setFromEuler(this),this.setFromQuaternion(t_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class R1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vw=0;const n_=new le,js=new Cl,ma=new pn,$c=new le,cl=new le,xw=new le,_w=new Cl,i_=new le(1,0,0),a_=new le(0,1,0),r_=new le(0,0,1),s_={type:"added"},yw={type:"removed"},zs={type:"childadded",child:null},bh={type:"childremoved",child:null};class Kn extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new le,n=new Ra,r=new Cl,o=new le(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new mt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(i_,e)}rotateY(e){return this.rotateOnAxis(a_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,n){return n_.copy(e).applyQuaternion(this.quaternion),this.position.add(n_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(i_,e)}translateY(e){return this.translateOnAxis(a_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?$c.copy(e):$c.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(cl,$c,this.up):ma.lookAt($c,cl,this.up),this.quaternion.setFromRotationMatrix(ma),o&&(ma.extractRotation(o.matrixWorld),js.setFromRotationMatrix(ma),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yw),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,xw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,_w,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let p=0,v=g.length;p<v;p++){const x=g[p];u(e.shapes,x)}else u(e.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,p=this.material.length;g<p;g++)h.push(u(e.materials,this.material[g]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];o.animations.push(u(e.animations,g))}}if(n){const h=d(e.geometries),g=d(e.materials),p=d(e.textures),v=d(e.images),x=d(e.shapes),y=d(e.skeletons),S=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),g.length>0&&(r.materials=g),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(h){const g=[];for(const p in h){const v=h[p];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Kn.DEFAULT_UP=new le(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new le,ga=new le,Mh=new le,va=new le,Bs=new le,Vs=new le,o_=new le,Eh=new le,Th=new le,Ah=new le,Rh=new on,wh=new on,Nh=new on;class Di{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ni.subVectors(e,n),o.cross(Ni);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Ni.subVectors(o,n),ga.subVectors(r,n),Mh.subVectors(e,n);const d=Ni.dot(Ni),h=Ni.dot(ga),g=Ni.dot(Mh),p=ga.dot(ga),v=ga.dot(Mh),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,S=(p*g-h*v)*y,T=(d*v-h*g)*y;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,n,r,o,u,d,h,g){return this.getBarycoord(e,n,r,o,va)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(u,va.x),g.addScaledVector(d,va.y),g.addScaledVector(h,va.z),g)}static getInterpolatedAttribute(e,n,r,o,u,d){return Rh.setScalar(0),wh.setScalar(0),Nh.setScalar(0),Rh.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Rh,u.x),d.addScaledVector(wh,u.y),d.addScaledVector(Nh,u.z),d}static isFrontFacing(e,n,r,o){return Ni.subVectors(r,n),ga.subVectors(e,n),Ni.cross(ga).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ni.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return Di.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let d,h;Bs.subVectors(o,r),Vs.subVectors(u,r),Eh.subVectors(e,r);const g=Bs.dot(Eh),p=Vs.dot(Eh);if(g<=0&&p<=0)return n.copy(r);Th.subVectors(e,o);const v=Bs.dot(Th),x=Vs.dot(Th);if(v>=0&&x<=v)return n.copy(o);const y=g*x-v*p;if(y<=0&&g>=0&&v<=0)return d=g/(g-v),n.copy(r).addScaledVector(Bs,d);Ah.subVectors(e,u);const S=Bs.dot(Ah),T=Vs.dot(Ah);if(T>=0&&S<=T)return n.copy(u);const A=S*p-g*T;if(A<=0&&p>=0&&T<=0)return h=p/(p-T),n.copy(r).addScaledVector(Vs,h);const M=v*T-S*x;if(M<=0&&x-v>=0&&S-T>=0)return o_.subVectors(u,o),h=(x-v)/(x-v+(S-T)),n.copy(o).addScaledVector(o_,h);const _=1/(M+A+y);return d=A*_,h=y*_,n.copy(r).addScaledVector(Bs,d).addScaledVector(Vs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},eu={h:0,s:0,l:0};function Ch(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Lt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Dt.workingColorSpace){if(e=rw(e,1),n=Tt(n,0,1),r=Tt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Ch(d,u,e+1/3),this.g=Ch(d,u,e),this.b=Ch(d,u,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,n=_i){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const r=w1[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Dt.workingToColorSpace(Fn.copy(this),e),Math.round(Tt(Fn.r*255,0,255))*65536+Math.round(Tt(Fn.g*255,0,255))*256+Math.round(Tt(Fn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Fn.copy(this),n);const r=Fn.r,o=Fn.g,u=Fn.b,d=Math.max(r,o,u),h=Math.min(r,o,u);let g,p;const v=(h+d)/2;if(h===d)g=0,p=0;else{const x=d-h;switch(p=v<=.5?x/(d+h):x/(2-d-h),d){case r:g=(o-u)/x+(o<u?6:0);break;case o:g=(u-r)/x+2;break;case u:g=(r-o)/x+4;break}g/=6}return e.h=g,e.s=p,e.l=v,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=_i){Dt.workingToColorSpace(Fn.copy(this),e);const n=Fn.r,r=Fn.g,o=Fn.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(eu);const r=dh(sr.h,eu.h,n),o=dh(sr.s,eu.s,n),u=dh(sr.l,eu.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Lt;Lt.NAMES=w1;let Sw=0;class Ul extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Nl(),this.name="",this.type="Material",this.blending=Zs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=lp,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==op&&(r.blendSrc=this.blendSrc),this.blendDst!==lp&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const d=[];for(const h in u){const g=u[h];delete g.metadata,d.push(g)}return d}if(n){const u=o(e.textures),d=o(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class N1 extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=h1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new le,tu=new dt;let bw=0;class Oi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=qx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tu.fromBufferAttribute(this,n),tu.applyMatrix3(e),this.setXY(n,tu.x,tu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=sl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sl(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sl(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sl(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array),u=qn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qx&&(e.usage=this.usage),e}}class C1 extends Oi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class D1 extends Oi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ba extends Oi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Mw=0;const xi=new pn,Dh=new Kn,Hs=new le,oi=new Dl,ul=new Dl,Tn=new le;class Da extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E1(e)?D1:C1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new mt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,r){return xi.makeTranslation(e,n,r),this.applyMatrix4(xi),this}scale(e,n,r){return xi.makeScale(e,n,r),this.applyMatrix4(xi),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ba(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];oi.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const h=n[u];ul.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(oi.min,ul.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,ul.max),oi.expandByPoint(Tn)):(oi.expandByPoint(ul.min),oi.expandByPoint(ul.max))}oi.getCenter(r);let o=0;for(let u=0,d=e.count;u<d;u++)Tn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(Tn));if(n)for(let u=0,d=n.length;u<d;u++){const h=n[u],g=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Tn.fromBufferAttribute(h,p),g&&(Hs.fromBufferAttribute(e,p),Tn.add(Hs)),o=Math.max(o,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],g=[];for(let Z=0;Z<r.count;Z++)h[Z]=new le,g[Z]=new le;const p=new le,v=new le,x=new le,y=new dt,S=new dt,T=new dt,A=new le,M=new le;function _(Z,D,N){p.fromBufferAttribute(r,Z),v.fromBufferAttribute(r,D),x.fromBufferAttribute(r,N),y.fromBufferAttribute(u,Z),S.fromBufferAttribute(u,D),T.fromBufferAttribute(u,N),v.sub(p),x.sub(p),S.sub(y),T.sub(y);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(k),M.copy(x).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(k),h[Z].add(A),h[D].add(A),h[N].add(A),g[Z].add(M),g[D].add(M),g[N].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Z=0,D=L.length;Z<D;++Z){const N=L[Z],k=N.start,ae=N.count;for(let he=k,pe=k+ae;he<pe;he+=3)_(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const O=new le,C=new le,F=new le,B=new le;function V(Z){F.fromBufferAttribute(o,Z),B.copy(F);const D=h[Z];O.copy(D),O.sub(F.multiplyScalar(F.dot(D))).normalize(),C.crossVectors(B,D);const k=C.dot(g[Z])<0?-1:1;d.setXYZW(Z,O.x,O.y,O.z,k)}for(let Z=0,D=L.length;Z<D;++Z){const N=L[Z],k=N.start,ae=N.count;for(let he=k,pe=k+ae;he<pe;he+=3)V(e.getX(he+0)),V(e.getX(he+1)),V(e.getX(he+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new le,u=new le,d=new le,h=new le,g=new le,p=new le,v=new le,x=new le;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),A=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,M),v.subVectors(d,u),x.subVectors(o,u),v.cross(x),h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.add(v),g.add(v),p.add(v),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(A,g.x,g.y,g.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),u.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),v.subVectors(d,u),x.subVectors(o,u),v.cross(x),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(h,g){const p=h.array,v=h.itemSize,x=h.normalized,y=new p.constructor(g.length*v);let S=0,T=0;for(let A=0,M=g.length;A<M;A++){h.isInterleavedBufferAttribute?S=g[A]*h.data.stride+h.offset:S=g[A]*v;for(let _=0;_<v;_++)y[T++]=p[S++]}return new Oi(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Da,r=this.index.array,o=this.attributes;for(const h in o){const g=o[h],p=e(g,r);n.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const g=[],p=u[h];for(let v=0,x=p.length;v<x;v++){const y=p[v],S=e(y,r);g.push(S)}n.morphAttributes[h]=g}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const p=d[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const g in r){const p=r[g];e.data.attributes[g]=p.toJSON(e.data)}const o={};let u=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],v=[];for(let x=0,y=p.length;x<y;x++){const S=p[x];v.push(S.toJSON(e.data))}v.length>0&&(o[g]=v,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(n))}const u=e.morphAttributes;for(const p in u){const v=[],x=u[p];for(let y=0,S=x.length;y<S;y++)v.push(x[y].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l_=new pn,Pr=new A1,nu=new Wu,c_=new le,iu=new le,au=new le,ru=new le,Uh=new le,su=new le,u_=new le,ou=new le;class Si extends Kn{constructor(e=new Da,n=new N1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=o.length;u<d;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){su.set(0,0,0);for(let g=0,p=u.length;g<p;g++){const v=h[g],x=u[g];v!==0&&(Uh.fromBufferAttribute(x,e),d?su.addScaledVector(Uh,v):su.addScaledVector(Uh.sub(n),v))}n.add(su)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(u),Pr.copy(e.ray).recast(e.near),!(nu.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(nu,c_)===null||Pr.origin.distanceToSquared(c_)>(e.far-e.near)**2))&&(l_.copy(u).invert(),Pr.copy(e.ray).applyMatrix4(l_),!(r.boundingBox!==null&&Pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,d=this.material,h=u.index,g=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,y=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=d[M.materialIndex],L=Math.max(M.start,S.start),O=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let C=L,F=O;C<F;C+=3){const B=h.getX(C),V=h.getX(C+1),Z=h.getX(C+2);o=lu(this,_,e,r,p,v,x,B,V,Z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const L=h.getX(M),O=h.getX(M+1),C=h.getX(M+2);o=lu(this,d,e,r,p,v,x,L,O,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(g!==void 0)if(Array.isArray(d))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=d[M.materialIndex],L=Math.max(M.start,S.start),O=Math.min(g.count,Math.min(M.start+M.count,S.start+S.count));for(let C=L,F=O;C<F;C+=3){const B=C,V=C+1,Z=C+2;o=lu(this,_,e,r,p,v,x,B,V,Z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(g.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const L=M,O=M+1,C=M+2;o=lu(this,d,e,r,p,v,x,L,O,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function Ew(a,e,n,r,o,u,d,h){let g;if(e.side===Jn?g=r.intersectTriangle(d,u,o,!0,h):g=r.intersectTriangle(o,u,d,e.side===pr,h),g===null)return null;ou.copy(h),ou.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(ou);return p<n.near||p>n.far?null:{distance:p,point:ou.clone(),object:a}}function lu(a,e,n,r,o,u,d,h,g,p){a.getVertexPosition(h,iu),a.getVertexPosition(g,au),a.getVertexPosition(p,ru);const v=Ew(a,e,n,r,iu,au,ru,u_);if(v){const x=new le;Di.getBarycoord(u_,iu,au,ru,x),o&&(v.uv=Di.getInterpolatedAttribute(o,h,g,p,x,new dt)),u&&(v.uv1=Di.getInterpolatedAttribute(u,h,g,p,x,new dt)),d&&(v.normal=Di.getInterpolatedAttribute(d,h,g,p,x,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:g,c:p,normal:new le,materialIndex:0};Di.getNormal(iu,au,ru,y.normal),v.face=y,v.barycoord=x}return v}class Ll extends Da{constructor(e=1,n=1,r=1,o=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:d};const h=this;o=Math.floor(o),u=Math.floor(u),d=Math.floor(d);const g=[],p=[],v=[],x=[];let y=0,S=0;T("z","y","x",-1,-1,r,n,e,d,u,0),T("z","y","x",1,-1,r,n,-e,d,u,1),T("x","z","y",1,1,e,r,n,o,d,2),T("x","z","y",1,-1,e,r,-n,o,d,3),T("x","y","z",1,-1,e,n,r,o,u,4),T("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(g),this.setAttribute("position",new ba(p,3)),this.setAttribute("normal",new ba(v,3)),this.setAttribute("uv",new ba(x,2));function T(A,M,_,L,O,C,F,B,V,Z,D){const N=C/V,k=F/Z,ae=C/2,he=F/2,pe=B/2,de=V+1,I=Z+1;let J=0,X=0;const Se=new le;for(let P=0;P<I;P++){const ee=P*k-he;for(let ye=0;ye<de;ye++){const be=ye*N-ae;Se[A]=be*L,Se[M]=ee*O,Se[_]=pe,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[M]=0,Se[_]=B>0?1:-1,v.push(Se.x,Se.y,Se.z),x.push(ye/V),x.push(1-P/Z),J+=1}}for(let P=0;P<Z;P++)for(let ee=0;ee<V;ee++){const ye=y+ee+de*P,be=y+ee+de*(P+1),Le=y+(ee+1)+de*(P+1),ke=y+(ee+1)+de*P;g.push(ye,be,ke),g.push(be,Le,ke),X+=6}h.addGroup(S,X,D),S+=X,y+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Vn(a){const e={};for(let n=0;n<a.length;n++){const r=no(a[n]);for(const o in r)e[o]=r[o]}return e}function Tw(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function U1(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Aw={clone:no,merge:Vn};var Rw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ww=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wa extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rw,this.fragmentShader=ww,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=Tw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ou extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new le,f_=new dt,d_=new dt;class Ci extends Ou{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,f_,d_),n.subVectors(d_,f_)}setViewOffset(e,n,r,o,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;u+=d.offsetX*o/g,n-=d.offsetY*r/p,o*=d.width/g,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Gs=1;class Nw extends Kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ci(ks,Gs,e,n);o.layers=this.layers,this.add(o);const u=new Ci(ks,Gs,e,n);u.layers=this.layers,this.add(u);const d=new Ci(ks,Gs,e,n);d.layers=this.layers,this.add(d);const h=new Ci(ks,Gs,e,n);h.layers=this.layers,this.add(h);const g=new Ci(ks,Gs,e,n);g.layers=this.layers,this.add(g);const p=new Ci(ks,Gs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,d,h,g]=n;for(const p of n)this.remove(p);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Uu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,g,p,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,u),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,h),e.setRenderTarget(r,3,o),e.render(n,g),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(x,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class L1 extends Hn{constructor(e=[],n=$s,r,o,u,d,h,g,p,v){super(e,n,r,o,u,d,h,g,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cw extends mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new L1(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ll(5,5,5),u=new wa({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:cr});u.uniforms.tEquirect.value=n;const d=new Si(o,u),h=n.minFilter;return n.minFilter===Gr&&(n.minFilter=Qn),new Nw(1,10,this).update(e,d),n.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(u)}}class cu extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dw={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,d=null;const h=this._targetRay,g=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const A of e.hand.values()){const M=n.getJointPose(A,r),_=this._getHandJoint(p,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=v.position.distanceTo(x.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,u.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(u.linearVelocity)):g.hasLinearVelocity=!1,u.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(u.angularVelocity)):g.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Dw)))}return h!==null&&(h.visible=o!==null),g!==null&&(g.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new cu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class h_ extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Uw extends Hn{constructor(e=null,n=1,r=1,o,u,d,h,g,p=li,v=li,x,y){super(null,d,h,g,p,v,o,u,x,y),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new le,Lw=new le,Ow=new mt;class zr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Oh.subVectors(r,n).cross(Lw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Ow.getNormalMatrix(e),o=this.coplanarPoint(Oh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Wu,Pw=new dt(.5,.5),uu=new le;class O1{constructor(e=new zr,n=new zr,r=new zr,o=new zr,u=new zr,d=new zr){this.planes=[e,n,r,o,u,d]}set(e,n,r,o,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Xi,r=!1){const o=this.planes,u=e.elements,d=u[0],h=u[1],g=u[2],p=u[3],v=u[4],x=u[5],y=u[6],S=u[7],T=u[8],A=u[9],M=u[10],_=u[11],L=u[12],O=u[13],C=u[14],F=u[15];if(o[0].setComponents(p-d,S-v,_-T,F-L).normalize(),o[1].setComponents(p+d,S+v,_+T,F+L).normalize(),o[2].setComponents(p+h,S+x,_+A,F+O).normalize(),o[3].setComponents(p-h,S-x,_-A,F-O).normalize(),r)o[4].setComponents(g,y,M,C).normalize(),o[5].setComponents(p-g,S-y,_-M,F-C).normalize();else if(o[4].setComponents(p-g,S-y,_-M,F-C).normalize(),n===Xi)o[5].setComponents(p+g,S+y,_+M,F+C).normalize();else if(n===Uu)o[5].setComponents(g,y,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const n=Pw.distanceTo(e.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(uu.x=o.normal.x>0?e.max.x:e.min.x,uu.y=o.normal.y>0?e.max.y:e.min.y,uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fw extends Ul{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pu=new le,Fu=new le,p_=new pn,fl=new A1,fu=new Wu,Ph=new le,m_=new le;class Iw extends Kn{constructor(e=new Da,n=new Fw){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,u=n.count;o<u;o++)Pu.fromBufferAttribute(n,o-1),Fu.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Pu.distanceTo(Fu);e.setAttribute("lineDistance",new ba(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fu.copy(r.boundingSphere),fu.applyMatrix4(o),fu.radius+=u,e.ray.intersectsSphere(fu)===!1)return;p_.copy(o).invert(),fl.copy(e.ray).applyMatrix4(p_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),g=h*h,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const S=Math.max(0,d.start),T=Math.min(v.count,d.start+d.count);for(let A=S,M=T-1;A<M;A+=p){const _=v.getX(A),L=v.getX(A+1),O=du(this,e,fl,g,_,L,A);O&&n.push(O)}if(this.isLineLoop){const A=v.getX(T-1),M=v.getX(S),_=du(this,e,fl,g,A,M,T-1);_&&n.push(_)}}else{const S=Math.max(0,d.start),T=Math.min(y.count,d.start+d.count);for(let A=S,M=T-1;A<M;A+=p){const _=du(this,e,fl,g,A,A+1,A);_&&n.push(_)}if(this.isLineLoop){const A=du(this,e,fl,g,T-1,S,T-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=o.length;u<d;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function du(a,e,n,r,o,u,d){const h=a.geometry.attributes.position;if(Pu.fromBufferAttribute(h,o),Fu.fromBufferAttribute(h,u),n.distanceSqToSegment(Pu,Fu,Ph,m_)>r)return;Ph.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Ph);if(!(p<e.near||p>e.far))return{distance:p,point:m_.clone().applyMatrix4(a.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:a}}const g_=new le,v_=new le;class jw extends Iw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,u=n.count;o<u;o+=2)g_.fromBufferAttribute(n,o),v_.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+g_.distanceTo(v_);e.setAttribute("lineDistance",new ba(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P1 extends Hn{constructor(e,n,r=qr,o,u,d,h=li,g=li,p,v=yl,x=1){if(v!==yl&&v!==Sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:n,depth:x};super(y,o,u,d,h,g,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class F1 extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wr extends Da{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,d=n/2,h=Math.floor(r),g=Math.floor(o),p=h+1,v=g+1,x=e/h,y=n/g,S=[],T=[],A=[],M=[];for(let _=0;_<v;_++){const L=_*y-d;for(let O=0;O<p;O++){const C=O*x-u;T.push(C,-L,0),A.push(0,0,1),M.push(O/h),M.push(1-_/g)}}for(let _=0;_<g;_++)for(let L=0;L<h;L++){const O=L+p*_,C=L+p*(_+1),F=L+1+p*(_+1),B=L+1+p*_;S.push(O,C,B),S.push(C,F,B)}this.setIndex(S),this.setAttribute("position",new ba(T,3)),this.setAttribute("normal",new ba(A,3)),this.setAttribute("uv",new ba(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class hu extends wa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zw extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bw extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vw extends Ou{constructor(e=-1,n=1,r=1,o=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=o+n,g=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,g=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Hw extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function x_(a,e,n,r){const o=Gw(r);switch(n){case _1:return a*e;case S1:return a*e/o.components*o.byteLength;case xm:return a*e/o.components*o.byteLength;case b1:return a*e*2/o.components*o.byteLength;case _m:return a*e*2/o.components*o.byteLength;case y1:return a*e*3/o.components*o.byteLength;case yi:return a*e*4/o.components*o.byteLength;case ym:return a*e*4/o.components*o.byteLength;case bu:case Mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Sp:case Mp:return Math.max(a,16)*Math.max(e,8)/4;case yp:case bp:return Math.max(a,8)*Math.max(e,8)/2;case Ep:case Tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Np:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Up:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Op:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Pp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case jp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case zp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Vp:case Hp:case kp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Gp:case Wp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Xp:case Yp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Gw(a){switch(a){case Aa:case m1:return{byteLength:1,components:1};case xl:case g1:case so:return{byteLength:2,components:1};case gm:case vm:return{byteLength:2,components:4};case qr:case mm:case Wi:return{byteLength:4,components:1};case v1:case x1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I1(){let a=null,e=!1,n=null,r=null;function o(u,d){n(u,d),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function Ww(a){const e=new WeakMap;function n(h,g){const p=h.array,v=h.usage,x=p.byteLength,y=a.createBuffer();a.bindBuffer(g,y),a.bufferData(g,p,v),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,g,p){const v=g.array,x=g.updateRanges;if(a.bindBuffer(p,h),x.length===0)a.bufferSubData(p,0,v);else{x.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<x.length;S++){const T=x[y],A=x[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,x[y]=A)}x.length=y+1;for(let S=0,T=x.length;S<T;S++){const A=x[S];a.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}g.clearUpdateRanges()}g.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=e.get(h);g&&(a.deleteBuffer(g.buffer),e.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,g));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,g),p.version=h.version}}return{get:o,remove:u,update:d}}var Xw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yw=`#ifdef USE_ALPHAHASH
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
#endif`,qw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kw=`#ifdef USE_AOMAP
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
#endif`,$w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e3=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r3=`#ifdef USE_IRIDESCENCE
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
#endif`,s3=`#ifdef USE_BUMPMAP
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
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m3=`#define PI 3.141592653589793
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
} // validated`,g3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v3=`vec3 transformedNormal = objectNormal;
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
#endif`,x3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b3="gl_FragColor = linearToOutputTexel( gl_FragColor );",M3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E3=`#ifdef USE_ENVMAP
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
#endif`,T3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A3=`#ifdef USE_ENVMAP
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
#endif`,R3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w3=`#ifdef USE_ENVMAP
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
#endif`,N3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L3=`#ifdef USE_GRADIENTMAP
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
}`,O3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I3=`uniform bool receiveShadow;
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
#endif`,j3=`#ifdef USE_ENVMAP
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
#endif`,z3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k3=`PhysicalMaterial material;
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
#endif`,G3=`struct PhysicalMaterial {
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
}`,W3=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X3=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tN=`#if defined( USE_POINTS_UV )
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
#endif`,nN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oN=`#ifdef USE_MORPHTARGETS
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
#endif`,lN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pN=`#ifdef USE_NORMALMAP
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
#endif`,mN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_N=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CN=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,DN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UN=`#ifdef USE_SKINNING
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
#endif`,LN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ON=`#ifdef USE_SKINNING
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
#endif`,PN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zN=`#ifdef USE_TRANSMISSION
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
#endif`,BN=`#ifdef USE_TRANSMISSION
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
#endif`,VN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XN=`uniform sampler2D t2D;
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
}`,YN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JN=`#include <common>
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
}`,KN=`#if DEPTH_PACKING == 3200
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
}`,$N=`#define DISTANCE
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
}`,eC=`#define DISTANCE
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
}`,tC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iC=`uniform float scale;
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
}`,aC=`uniform vec3 diffuse;
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
}`,rC=`#include <common>
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
}`,sC=`uniform vec3 diffuse;
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
}`,oC=`#define LAMBERT
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
}`,lC=`#define LAMBERT
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
}`,cC=`#define MATCAP
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
}`,uC=`#define MATCAP
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
}`,fC=`#define NORMAL
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
}`,dC=`#define NORMAL
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
}`,hC=`#define PHONG
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
}`,pC=`#define PHONG
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
}`,mC=`#define STANDARD
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
}`,gC=`#define STANDARD
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
}`,vC=`#define TOON
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
}`,xC=`#define TOON
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
}`,_C=`uniform float size;
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
}`,yC=`uniform vec3 diffuse;
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
}`,SC=`#include <common>
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
}`,bC=`uniform vec3 color;
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
}`,MC=`uniform float rotation;
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
}`,EC=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:Xw,alphahash_pars_fragment:Yw,alphamap_fragment:qw,alphamap_pars_fragment:Zw,alphatest_fragment:Qw,alphatest_pars_fragment:Jw,aomap_fragment:Kw,aomap_pars_fragment:$w,batching_pars_vertex:e3,batching_vertex:t3,begin_vertex:n3,beginnormal_vertex:i3,bsdfs:a3,iridescence_fragment:r3,bumpmap_pars_fragment:s3,clipping_planes_fragment:o3,clipping_planes_pars_fragment:l3,clipping_planes_pars_vertex:c3,clipping_planes_vertex:u3,color_fragment:f3,color_pars_fragment:d3,color_pars_vertex:h3,color_vertex:p3,common:m3,cube_uv_reflection_fragment:g3,defaultnormal_vertex:v3,displacementmap_pars_vertex:x3,displacementmap_vertex:_3,emissivemap_fragment:y3,emissivemap_pars_fragment:S3,colorspace_fragment:b3,colorspace_pars_fragment:M3,envmap_fragment:E3,envmap_common_pars_fragment:T3,envmap_pars_fragment:A3,envmap_pars_vertex:R3,envmap_physical_pars_fragment:j3,envmap_vertex:w3,fog_vertex:N3,fog_pars_vertex:C3,fog_fragment:D3,fog_pars_fragment:U3,gradientmap_pars_fragment:L3,lightmap_pars_fragment:O3,lights_lambert_fragment:P3,lights_lambert_pars_fragment:F3,lights_pars_begin:I3,lights_toon_fragment:z3,lights_toon_pars_fragment:B3,lights_phong_fragment:V3,lights_phong_pars_fragment:H3,lights_physical_fragment:k3,lights_physical_pars_fragment:G3,lights_fragment_begin:W3,lights_fragment_maps:X3,lights_fragment_end:Y3,logdepthbuf_fragment:q3,logdepthbuf_pars_fragment:Z3,logdepthbuf_pars_vertex:Q3,logdepthbuf_vertex:J3,map_fragment:K3,map_pars_fragment:$3,map_particle_fragment:eN,map_particle_pars_fragment:tN,metalnessmap_fragment:nN,metalnessmap_pars_fragment:iN,morphinstance_vertex:aN,morphcolor_vertex:rN,morphnormal_vertex:sN,morphtarget_pars_vertex:oN,morphtarget_vertex:lN,normal_fragment_begin:cN,normal_fragment_maps:uN,normal_pars_fragment:fN,normal_pars_vertex:dN,normal_vertex:hN,normalmap_pars_fragment:pN,clearcoat_normal_fragment_begin:mN,clearcoat_normal_fragment_maps:gN,clearcoat_pars_fragment:vN,iridescence_pars_fragment:xN,opaque_fragment:_N,packing:yN,premultiplied_alpha_fragment:SN,project_vertex:bN,dithering_fragment:MN,dithering_pars_fragment:EN,roughnessmap_fragment:TN,roughnessmap_pars_fragment:AN,shadowmap_pars_fragment:RN,shadowmap_pars_vertex:wN,shadowmap_vertex:NN,shadowmask_pars_fragment:CN,skinbase_vertex:DN,skinning_pars_vertex:UN,skinning_vertex:LN,skinnormal_vertex:ON,specularmap_fragment:PN,specularmap_pars_fragment:FN,tonemapping_fragment:IN,tonemapping_pars_fragment:jN,transmission_fragment:zN,transmission_pars_fragment:BN,uv_pars_fragment:VN,uv_pars_vertex:HN,uv_vertex:kN,worldpos_vertex:GN,background_vert:WN,background_frag:XN,backgroundCube_vert:YN,backgroundCube_frag:qN,cube_vert:ZN,cube_frag:QN,depth_vert:JN,depth_frag:KN,distanceRGBA_vert:$N,distanceRGBA_frag:eC,equirect_vert:tC,equirect_frag:nC,linedashed_vert:iC,linedashed_frag:aC,meshbasic_vert:rC,meshbasic_frag:sC,meshlambert_vert:oC,meshlambert_frag:lC,meshmatcap_vert:cC,meshmatcap_frag:uC,meshnormal_vert:fC,meshnormal_frag:dC,meshphong_vert:hC,meshphong_frag:pC,meshphysical_vert:mC,meshphysical_frag:gC,meshtoon_vert:vC,meshtoon_frag:xC,points_vert:_C,points_frag:yC,shadow_vert:SC,shadow_frag:bC,sprite_vert:MC,sprite_frag:EC},je={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ki={basic:{uniforms:Vn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Vn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Lt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Vn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Vn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Vn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Lt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Vn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Vn([je.points,je.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Vn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Vn([je.common,je.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Vn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Vn([je.sprite,je.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Vn([je.common,je.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Vn([je.lights,je.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ki.physical={uniforms:Vn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const pu={r:0,b:0,g:0},Ir=new Ra,TC=new pn;function AC(a,e,n,r,o,u,d){const h=new Lt(0);let g=u===!0?0:1,p,v,x=null,y=0,S=null;function T(O){let C=O.isScene===!0?O.background:null;return C&&C.isTexture&&(C=(O.backgroundBlurriness>0?n:e).get(C)),C}function A(O){let C=!1;const F=T(O);F===null?_(h,g):F&&F.isColor&&(_(F,1),C=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(a.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(O,C){const F=T(C);F&&(F.isCubeTexture||F.mapping===Gu)?(v===void 0&&(v=new Si(new Ll(1,1,1),new wa({name:"BackgroundCubeMaterial",uniforms:no(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,V,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Ir.copy(C.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(TC.makeRotationFromEuler(Ir)),v.material.toneMapped=Dt.getTransfer(F.colorSpace)!==Ht,(x!==F||y!==F.version||S!==a.toneMapping)&&(v.material.needsUpdate=!0,x=F,y=F.version,S=a.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Si(new Wr(2,2),new wa({name:"BackgroundMaterial",uniforms:no(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(F.colorSpace)!==Ht,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||y!==F.version||S!==a.toneMapping)&&(p.material.needsUpdate=!0,x=F,y=F.version,S=a.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,C){O.getRGB(pu,U1(a)),r.buffers.color.setClear(pu.r,pu.g,pu.b,C,d)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,C=1){h.set(O),g=C,_(h,g)},getClearAlpha:function(){return g},setClearAlpha:function(O){g=O,_(h,g)},render:A,addToRenderList:M,dispose:L}}function RC(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=y(null);let u=o,d=!1;function h(N,k,ae,he,pe){let de=!1;const I=x(he,ae,k);u!==I&&(u=I,p(u.object)),de=S(N,he,ae,pe),de&&T(N,he,ae,pe),pe!==null&&e.update(pe,a.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,C(N,k,ae,he),pe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function g(){return a.createVertexArray()}function p(N){return a.bindVertexArray(N)}function v(N){return a.deleteVertexArray(N)}function x(N,k,ae){const he=ae.wireframe===!0;let pe=r[N.id];pe===void 0&&(pe={},r[N.id]=pe);let de=pe[k.id];de===void 0&&(de={},pe[k.id]=de);let I=de[he];return I===void 0&&(I=y(g()),de[he]=I),I}function y(N){const k=[],ae=[],he=[];for(let pe=0;pe<n;pe++)k[pe]=0,ae[pe]=0,he[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:he,object:N,attributes:{},index:null}}function S(N,k,ae,he){const pe=u.attributes,de=k.attributes;let I=0;const J=ae.getAttributes();for(const X in J)if(J[X].location>=0){const P=pe[X];let ee=de[X];if(ee===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),P===void 0||P.attribute!==ee||ee&&P.data!==ee.data)return!0;I++}return u.attributesNum!==I||u.index!==he}function T(N,k,ae,he){const pe={},de=k.attributes;let I=0;const J=ae.getAttributes();for(const X in J)if(J[X].location>=0){let P=de[X];P===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(P=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(P=N.instanceColor));const ee={};ee.attribute=P,P&&P.data&&(ee.data=P.data),pe[X]=ee,I++}u.attributes=pe,u.attributesNum=I,u.index=he}function A(){const N=u.newAttributes;for(let k=0,ae=N.length;k<ae;k++)N[k]=0}function M(N){_(N,0)}function _(N,k){const ae=u.newAttributes,he=u.enabledAttributes,pe=u.attributeDivisors;ae[N]=1,he[N]===0&&(a.enableVertexAttribArray(N),he[N]=1),pe[N]!==k&&(a.vertexAttribDivisor(N,k),pe[N]=k)}function L(){const N=u.newAttributes,k=u.enabledAttributes;for(let ae=0,he=k.length;ae<he;ae++)k[ae]!==N[ae]&&(a.disableVertexAttribArray(ae),k[ae]=0)}function O(N,k,ae,he,pe,de,I){I===!0?a.vertexAttribIPointer(N,k,ae,pe,de):a.vertexAttribPointer(N,k,ae,he,pe,de)}function C(N,k,ae,he){A();const pe=he.attributes,de=ae.getAttributes(),I=k.defaultAttributeValues;for(const J in de){const X=de[J];if(X.location>=0){let Se=pe[J];if(Se===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),Se!==void 0){const P=Se.normalized,ee=Se.itemSize,ye=e.get(Se);if(ye===void 0)continue;const be=ye.buffer,Le=ye.type,ke=ye.bytesPerElement,ne=Le===a.INT||Le===a.UNSIGNED_INT||Se.gpuType===mm;if(Se.isInterleavedBufferAttribute){const ve=Se.data,Me=ve.stride,Ke=Se.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<X.locationSize;Ze++)_(X.location+Ze,ve.meshPerAttribute);N.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<X.locationSize;Ze++)M(X.location+Ze);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Ze=0;Ze<X.locationSize;Ze++)O(X.location+Ze,ee/X.locationSize,Le,P,Me*ke,(Ke+ee/X.locationSize*Ze)*ke,ne)}else{if(Se.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)_(X.location+ve,Se.meshPerAttribute);N.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ve=0;ve<X.locationSize;ve++)M(X.location+ve);a.bindBuffer(a.ARRAY_BUFFER,be);for(let ve=0;ve<X.locationSize;ve++)O(X.location+ve,ee/X.locationSize,Le,P,ee*ke,ee/X.locationSize*ve*ke,ne)}}else if(I!==void 0){const P=I[J];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(X.location,P);break;case 3:a.vertexAttrib3fv(X.location,P);break;case 4:a.vertexAttrib4fv(X.location,P);break;default:a.vertexAttrib1fv(X.location,P)}}}}L()}function F(){Z();for(const N in r){const k=r[N];for(const ae in k){const he=k[ae];for(const pe in he)v(he[pe].object),delete he[pe];delete k[ae]}delete r[N]}}function B(N){if(r[N.id]===void 0)return;const k=r[N.id];for(const ae in k){const he=k[ae];for(const pe in he)v(he[pe].object),delete he[pe];delete k[ae]}delete r[N.id]}function V(N){for(const k in r){const ae=r[k];if(ae[N.id]===void 0)continue;const he=ae[N.id];for(const pe in he)v(he[pe].object),delete he[pe];delete ae[N.id]}}function Z(){D(),d=!0,u!==o&&(u=o,p(u.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:M,disableUnusedAttributes:L}}function wC(a,e,n){let r;function o(p){r=p}function u(p,v){a.drawArrays(r,p,v),n.update(v,r,1)}function d(p,v,x){x!==0&&(a.drawArraysInstanced(r,p,v,x),n.update(v,r,x))}function h(p,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,x);let S=0;for(let T=0;T<x;T++)S+=v[T];n.update(S,r,1)}function g(p,v,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)d(p[T],v[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,x);let T=0;for(let A=0;A<x;A++)T+=v[A]*y[A];n.update(T,r,1)}}this.setMode=o,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function NC(a,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(V){return!(V!==yi&&r.convert(V)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){const Z=V===so&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Aa&&r.convert(V)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Wi&&!Z)}function g(V){if(V==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=g(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),O=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,B=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:L,maxVaryings:O,maxFragmentUniforms:C,vertexTextures:F,maxSamples:B}}function CC(a){const e=this;let n=null,r=0,o=!1,u=!1;const d=new zr,h=new mt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||o;return o=y,r=x.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){n=v(x,y,0)},this.setState=function(x,y,S){const T=x.clippingPlanes,A=x.clipIntersection,M=x.clipShadows,_=a.get(x);if(!o||T===null||T.length===0||u&&!M)u?v(null):p();else{const L=u?0:r,O=L*4;let C=_.clippingState||null;g.value=C,C=v(T,y,O,S);for(let F=0;F!==O;++F)C[F]=n[F];_.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){g.value!==n&&(g.value=n,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,y,S,T){const A=x!==null?x.length:0;let M=null;if(A!==0){if(M=g.value,T!==!0||M===null){const _=S+A*4,L=y.matrixWorldInverse;h.getNormalMatrix(L),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,C=S;O!==A;++O,C+=4)d.copy(x[O]).applyMatrix4(L,h),d.normal.toArray(M,C),M[C+3]=d.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function DC(a){let e=new WeakMap;function n(d,h){return h===gp?d.mapping=$s:h===vp&&(d.mapping=eo),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===gp||h===vp)if(e.has(d)){const g=e.get(d).texture;return n(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const p=new Cw(g.height);return p.fromEquirectangularTexture(a,d),e.set(d,p),d.addEventListener("dispose",o),n(p.texture,d.mapping)}else return null}}return d}function o(d){const h=d.target;h.removeEventListener("dispose",o);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ys=4,__=[.125,.215,.35,.446,.526,.582],Hr=20,Fh=new Vw,y_=new Lt;let Ih=null,jh=0,zh=0,Bh=!1;const Br=(1+Math.sqrt(5))/2,Ws=1/Br,S_=[new le(-Br,Ws,0),new le(Br,Ws,0),new le(-Ws,0,Br),new le(Ws,0,Br),new le(0,Br,-Ws),new le(0,Br,Ws),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],UC=new le;class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100,u={}){const{size:d=256,position:h=UC}=u;Ih=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,r,o,g,h),n>0&&this._blur(g,0,0,n),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,jh,zh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,mu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:so,format:yi,colorSpace:to,depthBuffer:!1},o=M_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M_(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LC(u)),this._blurMaterial=OC(u,e,n)}return o}_compileMaterial(e){const n=new Si(this._lodPlanes[0],e);this._renderer.compile(n,Fh)}_sceneToCubeUV(e,n,r,o,u){const g=new Ci(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(y_),x.toneMapping=ur,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null));const A=new N1({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),M=new Si(new Ll,A);let _=!1;const L=e.background;L?L.isColor&&(A.color.copy(L),e.background=null,_=!0):(A.color.copy(y_),_=!0);for(let O=0;O<6;O++){const C=O%3;C===0?(g.up.set(0,p[O],0),g.position.set(u.x,u.y,u.z),g.lookAt(u.x+v[O],u.y,u.z)):C===1?(g.up.set(0,0,p[O]),g.position.set(u.x,u.y,u.z),g.lookAt(u.x,u.y+v[O],u.z)):(g.up.set(0,p[O],0),g.position.set(u.x,u.y,u.z),g.lookAt(u.x,u.y,u.z+v[O]));const F=this._cubeSize;mu(o,C*F,O>2?F:0,F,F),x.setRenderTarget(o),_&&x.render(M,g),x.render(e,g)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=S,x.autoClear=y,e.background=L}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===$s||e.mapping===eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const u=o?this._cubemapMaterial:this._equirectMaterial,d=new Si(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const g=this._cubeSize;mu(n,0,0,3*g,2*g),r.setRenderTarget(n),r.render(d,Fh)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=S_[(o-u-1)%S_.length];this._blur(e,u-1,u,d,h)}n.autoClear=r}_blur(e,n,r,o,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",u),this._halfBlur(d,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,d,h){const g=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Si(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Hr-1),A=u/T,M=isFinite(u)?1+Math.floor(v*A):Hr;M>Hr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hr}`);const _=[];let L=0;for(let V=0;V<Hr;++V){const Z=V/A,D=Math.exp(-Z*Z/2);_.push(D),V===0?L+=D:V<M&&(L+=2*D)}for(let V=0;V<_.length;V++)_[V]=_[V]/L;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:O}=this;y.dTheta.value=T,y.mipInt.value=O-r;const C=this._sizeLods[o],F=3*C*(o>O-Ys?o-O+Ys:0),B=4*(this._cubeSize-C);mu(n,F,B,3*C,2*C),g.setRenderTarget(n),g.render(x,Fh)}}function LC(a){const e=[],n=[],r=[];let o=a;const u=a-Ys+1+__.length;for(let d=0;d<u;d++){const h=Math.pow(2,o);n.push(h);let g=1/h;d>a-Ys?g=__[d-a+Ys-1]:d===0&&(g=0),r.push(g);const p=1/(h-2),v=-p,x=1+p,y=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,T=6,A=3,M=2,_=1,L=new Float32Array(A*T*S),O=new Float32Array(M*T*S),C=new Float32Array(_*T*S);for(let B=0;B<S;B++){const V=B%3*2/3-1,Z=B>2?0:-1,D=[V,Z,0,V+2/3,Z,0,V+2/3,Z+1,0,V,Z,0,V+2/3,Z+1,0,V,Z+1,0];L.set(D,A*T*B),O.set(y,M*T*B);const N=[B,B,B,B,B,B];C.set(N,_*T*B)}const F=new Da;F.setAttribute("position",new Oi(L,A)),F.setAttribute("uv",new Oi(O,M)),F.setAttribute("faceIndex",new Oi(C,_)),e.push(F),o>Ys&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function M_(a,e,n){const r=new mr(a,e,n);return r.texture.mapping=Gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mu(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function OC(a,e,n){const r=new Float32Array(Hr),o=new le(0,1,0);return new wa({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:bm(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function E_(){return new wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bm(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function T_(){return new wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function bm(){return`

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
	`}function PC(a){let e=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const g=h.mapping,p=g===gp||g===vp,v=g===$s||g===eo;if(p||v){let x=e.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return n===null&&(n=new b_(a)),x=p?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new b_(a)),x=p?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function o(h){let g=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&g++;return g===p}function u(h){const g=h.target;g.removeEventListener("dispose",u);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function FC(a){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&bl("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function IC(a,e,n,r){const o={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete o[y.id];const S=u.get(y);S&&(e.remove(S),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function h(x,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,n.memory.geometries++),y}function g(x){const y=x.attributes;for(const S in y)e.update(y[S],a.ARRAY_BUFFER)}function p(x){const y=[],S=x.index,T=x.attributes.position;let A=0;if(S!==null){const L=S.array;A=S.version;for(let O=0,C=L.length;O<C;O+=3){const F=L[O+0],B=L[O+1],V=L[O+2];y.push(F,B,B,V,V,F)}}else if(T!==void 0){const L=T.array;A=T.version;for(let O=0,C=L.length/3-1;O<C;O+=3){const F=O+0,B=O+1,V=O+2;y.push(F,B,B,V,V,F)}}else return;const M=new(E1(y)?D1:C1)(y,1);M.version=A;const _=u.get(x);_&&e.remove(_),u.set(x,M)}function v(x){const y=u.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:g,getWireframeAttribute:v}}function jC(a,e,n){let r;function o(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function g(y,S){a.drawElements(r,S,u,y*d),n.update(S,r,1)}function p(y,S,T){T!==0&&(a.drawElementsInstanced(r,S,u,y*d,T),n.update(S,r,T))}function v(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,y,0,T);let M=0;for(let _=0;_<T;_++)M+=S[_];n.update(M,r,1)}function x(y,S,T,A){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/d,S[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,u,y,0,A,0,T);let _=0;for(let L=0;L<T;L++)_+=S[L]*A[L];n.update(_,r,1)}}this.setMode=o,this.setIndex=h,this.render=g,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function zC(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(n.calls++,d){case a.TRIANGLES:n.triangles+=h*(u/3);break;case a.LINES:n.lines+=h*(u/2);break;case a.LINE_STRIP:n.lines+=h*(u-1);break;case a.LINE_LOOP:n.lines+=h*u;break;case a.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function BC(a,e,n){const r=new WeakMap,o=new on;function u(d,h,g){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let N=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var S=N;y!==void 0&&y.texture.dispose();const T=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),A===!0&&(C=2),M===!0&&(C=3);let F=h.attributes.position.count*C,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const V=new Float32Array(F*B*4*x),Z=new T1(V,F,B,x);Z.type=Wi,Z.needsUpdate=!0;const D=C*4;for(let k=0;k<x;k++){const ae=_[k],he=L[k],pe=O[k],de=F*B*4*k;for(let I=0;I<ae.count;I++){const J=I*D;T===!0&&(o.fromBufferAttribute(ae,I),V[de+J+0]=o.x,V[de+J+1]=o.y,V[de+J+2]=o.z,V[de+J+3]=0),A===!0&&(o.fromBufferAttribute(he,I),V[de+J+4]=o.x,V[de+J+5]=o.y,V[de+J+6]=o.z,V[de+J+7]=0),M===!0&&(o.fromBufferAttribute(pe,I),V[de+J+8]=o.x,V[de+J+9]=o.y,V[de+J+10]=o.z,V[de+J+11]=pe.itemSize===4?o.w:1)}}y={count:x,texture:Z,size:new dt(F,B)},r.set(h,y),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(a,"morphTexture",d.morphTexture,n);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const A=h.morphTargetsRelative?1:1-T;g.getUniforms().setValue(a,"morphTargetBaseInfluence",A),g.getUniforms().setValue(a,"morphTargetInfluences",p)}g.getUniforms().setValue(a,"morphTargetsTexture",y.texture,n),g.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}return{update:u}}function VC(a,e,n,r){let o=new WeakMap;function u(g){const p=r.render.frame,v=g.geometry,x=e.get(g,v);if(o.get(x)!==p&&(e.update(x),o.set(x,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",h)===!1&&g.addEventListener("dispose",h),o.get(g)!==p&&(n.update(g.instanceMatrix,a.ARRAY_BUFFER),g.instanceColor!==null&&n.update(g.instanceColor,a.ARRAY_BUFFER),o.set(g,p))),g.isSkinnedMesh){const y=g.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return x}function d(){o=new WeakMap}function h(g){const p=g.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:d}}const j1=new Hn,A_=new P1(1,1),z1=new T1,B1=new hw,V1=new L1,R_=[],w_=[],N_=new Float32Array(16),C_=new Float32Array(9),D_=new Float32Array(4);function lo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let u=R_[o];if(u===void 0&&(u=new Float32Array(o),R_[o]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=n,a[d].toArray(u,h)}return u}function _n(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function yn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Xu(a,e){let n=w_[e];n===void 0&&(n=new Int32Array(e),w_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function HC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function kC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2fv(this.addr,e),yn(n,e)}}function GC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;a.uniform3fv(this.addr,e),yn(n,e)}}function WC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4fv(this.addr,e),yn(n,e)}}function XC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,r))return;D_.set(r),a.uniformMatrix2fv(this.addr,!1,D_),yn(n,r)}}function YC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,r))return;C_.set(r),a.uniformMatrix3fv(this.addr,!1,C_),yn(n,r)}}function qC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,r))return;N_.set(r),a.uniformMatrix4fv(this.addr,!1,N_),yn(n,r)}}function ZC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function QC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2iv(this.addr,e),yn(n,e)}}function JC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3iv(this.addr,e),yn(n,e)}}function KC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4iv(this.addr,e),yn(n,e)}}function $C(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function eD(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2uiv(this.addr,e),yn(n,e)}}function tD(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3uiv(this.addr,e),yn(n,e)}}function nD(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4uiv(this.addr,e),yn(n,e)}}function iD(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(A_.compareFunction=M1,u=A_):u=j1,n.setTexture2D(e||u,o)}function aD(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||B1,o)}function rD(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||V1,o)}function sD(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||z1,o)}function oD(a){switch(a){case 5126:return HC;case 35664:return kC;case 35665:return GC;case 35666:return WC;case 35674:return XC;case 35675:return YC;case 35676:return qC;case 5124:case 35670:return ZC;case 35667:case 35671:return QC;case 35668:case 35672:return JC;case 35669:case 35673:return KC;case 5125:return $C;case 36294:return eD;case 36295:return tD;case 36296:return nD;case 35678:case 36198:case 36298:case 36306:case 35682:return iD;case 35679:case 36299:case 36307:return aD;case 35680:case 36300:case 36308:case 36293:return rD;case 36289:case 36303:case 36311:case 36292:return sD}}function lD(a,e){a.uniform1fv(this.addr,e)}function cD(a,e){const n=lo(e,this.size,2);a.uniform2fv(this.addr,n)}function uD(a,e){const n=lo(e,this.size,3);a.uniform3fv(this.addr,n)}function fD(a,e){const n=lo(e,this.size,4);a.uniform4fv(this.addr,n)}function dD(a,e){const n=lo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function hD(a,e){const n=lo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function pD(a,e){const n=lo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function mD(a,e){a.uniform1iv(this.addr,e)}function gD(a,e){a.uniform2iv(this.addr,e)}function vD(a,e){a.uniform3iv(this.addr,e)}function xD(a,e){a.uniform4iv(this.addr,e)}function _D(a,e){a.uniform1uiv(this.addr,e)}function yD(a,e){a.uniform2uiv(this.addr,e)}function SD(a,e){a.uniform3uiv(this.addr,e)}function bD(a,e){a.uniform4uiv(this.addr,e)}function MD(a,e,n){const r=this.cache,o=e.length,u=Xu(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||j1,u[d])}function ED(a,e,n){const r=this.cache,o=e.length,u=Xu(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||B1,u[d])}function TD(a,e,n){const r=this.cache,o=e.length,u=Xu(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||V1,u[d])}function AD(a,e,n){const r=this.cache,o=e.length,u=Xu(n,o);_n(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||z1,u[d])}function RD(a){switch(a){case 5126:return lD;case 35664:return cD;case 35665:return uD;case 35666:return fD;case 35674:return dD;case 35675:return hD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return vD;case 35669:case 35673:return xD;case 5125:return _D;case 36294:return yD;case 36295:return SD;case 36296:return bD;case 35678:case 36198:case 36298:case 36306:case 35682:return MD;case 35679:case 36299:case 36307:return ED;case 35680:case 36300:case 36308:case 36293:return TD;case 36289:case 36303:case 36311:case 36292:return AD}}class wD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=oD(n.type)}}class ND{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RD(n.type)}}class CD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,d=o.length;u!==d;++u){const h=o[u];h.setValue(e,n[h.id],r)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function U_(a,e){a.seq.push(e),a.map[e.id]=e}function DD(a,e,n){const r=a.name,o=r.length;for(Vh.lastIndex=0;;){const u=Vh.exec(r),d=Vh.lastIndex;let h=u[1];const g=u[2]==="]",p=u[3];if(g&&(h=h|0),p===void 0||p==="["&&d+2===o){U_(n,p===void 0?new wD(h,a,e):new ND(h,a,e));break}else{let x=n.map[h];x===void 0&&(x=new CD(h),U_(n,x)),n=x}}}class Au{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const u=e.getActiveUniform(n,o),d=e.getUniformLocation(n,u.name);DD(u,d,this)}}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,d=n.length;u!==d;++u){const h=n[u],g=r[h.id];g.needsUpdate!==!1&&h.setValue(e,g.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function L_(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const UD=37297;let LD=0;function OD(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=o;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${n[d]}`)}return r.join(`
`)}const O_=new mt;function PD(a){Dt._getMatrix(O_,Dt.workingColorSpace,a);const e=`mat3( ${O_.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(a)){case Du:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function P_(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return n.toUpperCase()+`

`+u+`

`+OD(a.getShaderSource(e),h)}else return u}function FD(a,e){const n=PD(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ID(a,e){let n;switch(e){case BR:n="Linear";break;case VR:n="Reinhard";break;case HR:n="Cineon";break;case kR:n="ACESFilmic";break;case WR:n="AgX";break;case XR:n="Neutral";break;case GR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gu=new le;function jD(){Dt.getLuminanceCoefficients(gu);const a=gu.x.toFixed(4),e=gu.y.toFixed(4),n=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zD(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function BD(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function VD(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=a.getActiveAttrib(e,o),d=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),n[d]={type:u.type,location:a.getAttribLocation(e,d),locationSize:h}}return n}function hl(a){return a!==""}function F_(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(a){return a.replace(HD,GD)}const kD=new Map;function GD(a,e){let n=xt[e];if(n===void 0){const r=kD.get(e);if(r!==void 0)n=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zp(n)}const WD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(a){return a.replace(WD,XD)}function XD(a,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function z_(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YD(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===d1?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===_R?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===xa&&(e="SHADOWMAP_TYPE_VSM"),e}function qD(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case $s:case eo:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZD(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function QD(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case h1:e="ENVMAP_BLENDING_MULTIPLY";break;case jR:e="ENVMAP_BLENDING_MIX";break;case zR:e="ENVMAP_BLENDING_ADD";break}return e}function JD(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function KD(a,e,n,r){const o=a.getContext(),u=n.defines;let d=n.vertexShader,h=n.fragmentShader;const g=YD(n),p=qD(n),v=ZD(n),x=QD(n),y=JD(n),S=zD(n),T=BD(u),A=o.createProgram();let M,_,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(hl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(hl).join(`
`),_.length>0&&(_+=`
`)):(M=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+g:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),_=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+g:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ur?"#define TONE_MAPPING":"",n.toneMapping!==ur?xt.tonemapping_pars_fragment:"",n.toneMapping!==ur?ID("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,FD("linearToOutputTexel",n.outputColorSpace),jD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hl).join(`
`)),d=Zp(d),d=F_(d,n),d=I_(d,n),h=Zp(h),h=F_(h,n),h=I_(h,n),d=j_(d),h=j_(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===Zx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=L+M+d,C=L+_+h,F=L_(o,o.VERTEX_SHADER,O),B=L_(o,o.FRAGMENT_SHADER,C);o.attachShader(A,F),o.attachShader(A,B),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function V(k){if(a.debug.checkShaderErrors){const ae=o.getProgramInfoLog(A)||"",he=o.getShaderInfoLog(F)||"",pe=o.getShaderInfoLog(B)||"",de=ae.trim(),I=he.trim(),J=pe.trim();let X=!0,Se=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,F,B);else{const P=P_(o,F,"vertex"),ee=P_(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+P+`
`+ee)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(I===""||J==="")&&(Se=!1);Se&&(k.diagnostics={runnable:X,programLog:de,vertexShader:{log:I,prefix:M},fragmentShader:{log:J,prefix:_}})}o.deleteShader(F),o.deleteShader(B),Z=new Au(o,A),D=VD(o,A)}let Z;this.getUniforms=function(){return Z===void 0&&V(this),Z};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(A,UD)),N},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LD++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=B,this}let $D=0;class eU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new tU(e),n.set(e,r)),r}}class tU{constructor(e){this.id=$D++,this.code=e,this.usedTimes=0}}function nU(a,e,n,r,o,u,d){const h=new R1,g=new eU,p=new Set,v=[],x=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,N,k,ae,he){const pe=ae.fog,de=he.geometry,I=D.isMeshStandardMaterial?ae.environment:null,J=(D.isMeshStandardMaterial?n:e).get(D.envMap||I),X=J&&J.mapping===Gu?J.image.height:null,Se=T[D.type];D.precision!==null&&(S=o.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const P=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ee=P!==void 0?P.length:0;let ye=0;de.morphAttributes.position!==void 0&&(ye=1),de.morphAttributes.normal!==void 0&&(ye=2),de.morphAttributes.color!==void 0&&(ye=3);let be,Le,ke,ne;if(Se){const wt=ki[Se];be=wt.vertexShader,Le=wt.fragmentShader}else be=D.vertexShader,Le=D.fragmentShader,g.update(D),ke=g.getVertexShaderID(D),ne=g.getFragmentShaderID(D);const ve=a.getRenderTarget(),Me=a.state.buffers.depth.getReversed(),Ke=he.isInstancedMesh===!0,Ze=he.isBatchedMesh===!0,ht=!!D.map,en=!!D.matcap,z=!!J,Ot=!!D.aoMap,ct=!!D.lightMap,it=!!D.bumpMap,ze=!!D.normalMap,At=!!D.displacementMap,Ge=!!D.emissiveMap,ut=!!D.metalnessMap,Wt=!!D.roughnessMap,Xt=D.anisotropy>0,U=D.clearcoat>0,b=D.dispersion>0,H=D.iridescence>0,K=D.sheen>0,ue=D.transmission>0,re=Xt&&!!D.anisotropyMap,Ce=U&&!!D.clearcoatMap,Ne=U&&!!D.clearcoatNormalMap,Ve=U&&!!D.clearcoatRoughnessMap,Xe=H&&!!D.iridescenceMap,Ee=H&&!!D.iridescenceThicknessMap,Fe=K&&!!D.sheenColorMap,$e=K&&!!D.sheenRoughnessMap,qe=!!D.specularMap,Ue=!!D.specularColorMap,ft=!!D.specularIntensityMap,W=ue&&!!D.transmissionMap,Re=ue&&!!D.thicknessMap,De=!!D.gradientMap,Be=!!D.alphaMap,Te=D.alphaTest>0,_e=!!D.alphaHash,Ye=!!D.extensions;let lt=ur;D.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(lt=a.toneMapping);const Pt={shaderID:Se,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:Le,defines:D.defines,customVertexShaderID:ke,customFragmentShaderID:ne,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&he._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&he.instanceColor!==null,instancingMorph:Ke&&he.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:to,alphaToCoverage:!!D.alphaToCoverage,map:ht,matcap:en,envMap:z,envMapMode:z&&J.mapping,envMapCubeUVHeight:X,aoMap:Ot,lightMap:ct,bumpMap:it,normalMap:ze,displacementMap:y&&At,emissiveMap:Ge,normalMapObjectSpace:ze&&D.normalMapType===JR,normalMapTangentSpace:ze&&D.normalMapType===QR,metalnessMap:ut,roughnessMap:Wt,anisotropy:Xt,anisotropyMap:re,clearcoat:U,clearcoatMap:Ce,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ve,dispersion:b,iridescence:H,iridescenceMap:Xe,iridescenceThicknessMap:Ee,sheen:K,sheenColorMap:Fe,sheenRoughnessMap:$e,specularMap:qe,specularColorMap:Ue,specularIntensityMap:ft,transmission:ue,transmissionMap:W,thicknessMap:Re,gradientMap:De,opaque:D.transparent===!1&&D.blending===Zs&&D.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:_e,combine:D.combine,mapUv:ht&&A(D.map.channel),aoMapUv:Ot&&A(D.aoMap.channel),lightMapUv:ct&&A(D.lightMap.channel),bumpMapUv:it&&A(D.bumpMap.channel),normalMapUv:ze&&A(D.normalMap.channel),displacementMapUv:At&&A(D.displacementMap.channel),emissiveMapUv:Ge&&A(D.emissiveMap.channel),metalnessMapUv:ut&&A(D.metalnessMap.channel),roughnessMapUv:Wt&&A(D.roughnessMap.channel),anisotropyMapUv:re&&A(D.anisotropyMap.channel),clearcoatMapUv:Ce&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:$e&&A(D.sheenRoughnessMap.channel),specularMapUv:qe&&A(D.specularMap.channel),specularColorMapUv:Ue&&A(D.specularColorMap.channel),specularIntensityMapUv:ft&&A(D.specularIntensityMap.channel),transmissionMapUv:W&&A(D.transmissionMap.channel),thicknessMapUv:Re&&A(D.thicknessMap.channel),alphaMapUv:Be&&A(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ze||Xt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:he.isPoints===!0&&!!de.attributes.uv&&(ht||Be),fog:!!pe,useFog:D.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Me,skinning:he.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&D.map.isVideoTexture===!0&&Dt.getTransfer(D.map.colorSpace)===Ht,decodeVideoTextureEmissive:Ge&&D.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(D.emissiveMap.colorSpace)===Ht,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===_a,flipSided:D.side===Jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ye&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&D.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)N.push(k),N.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(L(N,D),O(N,D),N.push(a.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function L(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function O(D,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),N.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const N=T[D.type];let k;if(N){const ae=ki[N];k=Aw.clone(ae.uniforms)}else k=D.uniforms;return k}function F(D,N){let k;for(let ae=0,he=v.length;ae<he;ae++){const pe=v[ae];if(pe.cacheKey===N){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new KD(a,N,D,u),v.push(k)),k}function B(D){if(--D.usedTimes===0){const N=v.indexOf(D);v[N]=v[v.length-1],v.pop(),D.destroy()}}function V(D){g.remove(D)}function Z(){g.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:C,acquireProgram:F,releaseProgram:B,releaseShaderCache:V,programs:v,dispose:Z}}function iU(){let a=new WeakMap;function e(d){return a.has(d)}function n(d){let h=a.get(d);return h===void 0&&(h={},a.set(d,h)),h}function r(d){a.delete(d)}function o(d,h,g){a.get(d)[h]=g}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function aU(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function B_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function V_(){const a=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function d(x,y,S,T,A,M){let _=a[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:S,groupOrder:T,renderOrder:x.renderOrder,z:A,group:M},a[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=x.renderOrder,_.z=A,_.group=M),e++,_}function h(x,y,S,T,A,M){const _=d(x,y,S,T,A,M);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):n.push(_)}function g(x,y,S,T,A,M){const _=d(x,y,S,T,A,M);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):n.unshift(_)}function p(x,y){n.length>1&&n.sort(x||aU),r.length>1&&r.sort(y||B_),o.length>1&&o.sort(y||B_)}function v(){for(let x=e,y=a.length;x<y;x++){const S=a[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:h,unshift:g,finish:v,sort:p}}function rU(){let a=new WeakMap;function e(r,o){const u=a.get(r);let d;return u===void 0?(d=new V_,a.set(r,[d])):o>=u.length?(d=new V_,u.push(d)):d=u[o],d}function n(){a=new WeakMap}return{get:e,dispose:n}}function sU(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new Lt};break;case"SpotLight":n={position:new le,direction:new le,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":n={color:new Lt,position:new le,halfWidth:new le,halfHeight:new le};break}return a[e.id]=n,n}}}function oU(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let lU=0;function cU(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function uU(a){const e=new sU,n=oU(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const o=new le,u=new pn,d=new pn;function h(p){let v=0,x=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,T=0,A=0,M=0,_=0,L=0,O=0,C=0,F=0,B=0,V=0;p.sort(cU);for(let D=0,N=p.length;D<N;D++){const k=p[D],ae=k.color,he=k.intensity,pe=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=ae.r*he,x+=ae.g*he,y+=ae.b*he;else if(k.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(k.sh.coefficients[I],he);V++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,X=n.get(k);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,r.directionalShadow[S]=X,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=k.shadow.matrix,L++}r.directional[S]=I,S++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(ae).multiplyScalar(he),I.distance=pe,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,r.spot[A]=I;const J=k.shadow;if(k.map&&(r.spotLightMap[F]=k.map,F++,J.updateMatrices(k),k.castShadow&&B++),r.spotLightMatrix[A]=J.matrix,k.castShadow){const X=n.get(k);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=de,C++}A++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy(ae).multiplyScalar(he),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=I,M++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const J=k.shadow,X=n.get(k);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=k.shadow.matrix,O++}r.point[T]=I,T++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(he),I.groundColor.copy(k.groundColor).multiplyScalar(he),r.hemi[_]=I,_++}}M>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==S||Z.pointLength!==T||Z.spotLength!==A||Z.rectAreaLength!==M||Z.hemiLength!==_||Z.numDirectionalShadows!==L||Z.numPointShadows!==O||Z.numSpotShadows!==C||Z.numSpotMaps!==F||Z.numLightProbes!==V)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=M,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=C+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=V,Z.directionalLength=S,Z.pointLength=T,Z.spotLength=A,Z.rectAreaLength=M,Z.hemiLength=_,Z.numDirectionalShadows=L,Z.numPointShadows=O,Z.numSpotShadows=C,Z.numSpotMaps=F,Z.numLightProbes=V,r.version=lU++)}function g(p,v){let x=0,y=0,S=0,T=0,A=0;const M=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const O=p[_];if(O.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),x++}else if(O.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),S++}else if(O.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(M),d.identity(),u.copy(O.matrixWorld),u.premultiply(M),d.extractRotation(u),C.halfWidth.set(O.width*.5,0,0),C.halfHeight.set(0,O.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(O.matrixWorld),C.direction.transformDirection(M),A++}}}return{setup:h,setupView:g,state:r}}function H_(a){const e=new uU(a),n=[],r=[];function o(v){p.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function d(v){r.push(v)}function h(){e.setup(n)}function g(v){e.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d}}function fU(a){let e=new WeakMap;function n(o,u=0){const d=e.get(o);let h;return d===void 0?(h=new H_(a),e.set(o,[h])):u>=d.length?(h=new H_(a),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const dU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hU=`uniform sampler2D shadow_pass;
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
}`;function pU(a,e,n){let r=new O1;const o=new dt,u=new dt,d=new on,h=new zw({depthPacking:ZR}),g=new Bw,p={},v=n.maxTextureSize,x={[pr]:Jn,[Jn]:pr,[_a]:_a},y=new wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:dU,fragmentShader:hU}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new Da;T.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Si(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d1;let _=this.type;this.render=function(B,V,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=a.getRenderTarget(),N=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),ae=a.state;ae.setBlending(cr),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const he=_!==xa&&this.type===xa,pe=_===xa&&this.type!==xa;for(let de=0,I=B.length;de<I;de++){const J=B[de],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const Se=X.getFrameExtents();if(o.multiply(Se),u.copy(X.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/Se.x),o.x=u.x*Se.x,X.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/Se.y),o.y=u.y*Se.y,X.mapSize.y=u.y)),X.map===null||he===!0||pe===!0){const ee=this.type!==xa?{minFilter:li,magFilter:li}:{};X.map!==null&&X.map.dispose(),X.map=new mr(o.x,o.y,ee),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const P=X.getViewportCount();for(let ee=0;ee<P;ee++){const ye=X.getViewport(ee);d.set(u.x*ye.x,u.y*ye.y,u.x*ye.z,u.y*ye.w),ae.viewport(d),X.updateMatrices(J,ee),r=X.getFrustum(),C(V,Z,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===xa&&L(X,Z),X.needsUpdate=!1}_=this.type,M.needsUpdate=!1,a.setRenderTarget(D,N,k)};function L(B,V){const Z=e.update(A);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new mr(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(V,null,Z,y,A,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(V,null,Z,S,A,null)}function O(B,V,Z,D){let N=null;const k=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)N=k;else if(N=Z.isPointLight===!0?g:h,a.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const ae=N.uuid,he=V.uuid;let pe=p[ae];pe===void 0&&(pe={},p[ae]=pe);let de=pe[he];de===void 0&&(de=N.clone(),pe[he]=de,V.addEventListener("dispose",F)),N=de}if(N.visible=V.visible,N.wireframe=V.wireframe,D===xa?N.side=V.shadowSide!==null?V.shadowSide:V.side:N.side=V.shadowSide!==null?V.shadowSide:x[V.side],N.alphaMap=V.alphaMap,N.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,N.map=V.map,N.clipShadows=V.clipShadows,N.clippingPlanes=V.clippingPlanes,N.clipIntersection=V.clipIntersection,N.displacementMap=V.displacementMap,N.displacementScale=V.displacementScale,N.displacementBias=V.displacementBias,N.wireframeLinewidth=V.wireframeLinewidth,N.linewidth=V.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ae=a.properties.get(N);ae.light=Z}return N}function C(B,V,Z,D,N){if(B.visible===!1)return;if(B.layers.test(V.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&N===xa)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const he=e.update(B),pe=B.material;if(Array.isArray(pe)){const de=he.groups;for(let I=0,J=de.length;I<J;I++){const X=de[I],Se=pe[X.materialIndex];if(Se&&Se.visible){const P=O(B,Se,D,N);B.onBeforeShadow(a,B,V,Z,he,P,X),a.renderBufferDirect(Z,null,he,P,B,X),B.onAfterShadow(a,B,V,Z,he,P,X)}}}else if(pe.visible){const de=O(B,pe,D,N);B.onBeforeShadow(a,B,V,Z,he,de,null),a.renderBufferDirect(Z,null,he,de,B,null),B.onAfterShadow(a,B,V,Z,he,de,null)}}const ae=B.children;for(let he=0,pe=ae.length;he<pe;he++)C(ae[he],V,Z,D,N)}function F(B){B.target.removeEventListener("dispose",F);for(const Z in p){const D=p[Z],N=B.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const mU={[cp]:up,[fp]:pp,[dp]:mp,[Ks]:hp,[up]:cp,[pp]:fp,[mp]:dp,[hp]:Ks};function gU(a,e){function n(){let W=!1;const Re=new on;let De=null;const Be=new on(0,0,0,0);return{setMask:function(Te){De!==Te&&!W&&(a.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){W=Te},setClear:function(Te,_e,Ye,lt,Pt){Pt===!0&&(Te*=lt,_e*=lt,Ye*=lt),Re.set(Te,_e,Ye,lt),Be.equals(Re)===!1&&(a.clearColor(Te,_e,Ye,lt),Be.copy(Re))},reset:function(){W=!1,De=null,Be.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,De=null,Be=null,Te=null;return{setReversed:function(_e){if(Re!==_e){const Ye=e.get("EXT_clip_control");_e?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const lt=Te;Te=null,this.setClear(lt)}},getReversed:function(){return Re},setTest:function(_e){_e?ve(a.DEPTH_TEST):Me(a.DEPTH_TEST)},setMask:function(_e){De!==_e&&!W&&(a.depthMask(_e),De=_e)},setFunc:function(_e){if(Re&&(_e=mU[_e]),Be!==_e){switch(_e){case cp:a.depthFunc(a.NEVER);break;case up:a.depthFunc(a.ALWAYS);break;case fp:a.depthFunc(a.LESS);break;case Ks:a.depthFunc(a.LEQUAL);break;case dp:a.depthFunc(a.EQUAL);break;case hp:a.depthFunc(a.GEQUAL);break;case pp:a.depthFunc(a.GREATER);break;case mp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Be=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Te!==_e&&(Re&&(_e=1-_e),a.clearDepth(_e),Te=_e)},reset:function(){W=!1,De=null,Be=null,Te=null,Re=!1}}}function o(){let W=!1,Re=null,De=null,Be=null,Te=null,_e=null,Ye=null,lt=null,Pt=null;return{setTest:function(wt){W||(wt?ve(a.STENCIL_TEST):Me(a.STENCIL_TEST))},setMask:function(wt){Re!==wt&&!W&&(a.stencilMask(wt),Re=wt)},setFunc:function(wt,bi,mn){(De!==wt||Be!==bi||Te!==mn)&&(a.stencilFunc(wt,bi,mn),De=wt,Be=bi,Te=mn)},setOp:function(wt,bi,mn){(_e!==wt||Ye!==bi||lt!==mn)&&(a.stencilOp(wt,bi,mn),_e=wt,Ye=bi,lt=mn)},setLocked:function(wt){W=wt},setClear:function(wt){Pt!==wt&&(a.clearStencil(wt),Pt=wt)},reset:function(){W=!1,Re=null,De=null,Be=null,Te=null,_e=null,Ye=null,lt=null,Pt=null}}}const u=new n,d=new r,h=new o,g=new WeakMap,p=new WeakMap;let v={},x={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,L=null,O=null,C=null,F=null,B=null,V=new Lt(0,0,0),Z=0,D=!1,N=null,k=null,ae=null,he=null,pe=null;const de=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,J=0;const X=a.getParameter(a.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),I=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),I=J>=2);let Se=null,P={};const ee=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),be=new on().fromArray(ee),Le=new on().fromArray(ye);function ke(W,Re,De,Be){const Te=new Uint8Array(4),_e=a.createTexture();a.bindTexture(W,_e),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<De;Ye++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,Be,0,a.RGBA,a.UNSIGNED_BYTE,Te):a.texImage2D(Re+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Te);return _e}const ne={};ne[a.TEXTURE_2D]=ke(a.TEXTURE_2D,a.TEXTURE_2D,1),ne[a.TEXTURE_CUBE_MAP]=ke(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[a.TEXTURE_2D_ARRAY]=ke(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ne[a.TEXTURE_3D]=ke(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ve(a.DEPTH_TEST),d.setFunc(Ks),it(!1),ze(Gx),ve(a.CULL_FACE),Ot(cr);function ve(W){v[W]!==!0&&(a.enable(W),v[W]=!0)}function Me(W){v[W]!==!1&&(a.disable(W),v[W]=!1)}function Ke(W,Re){return x[W]!==Re?(a.bindFramebuffer(W,Re),x[W]=Re,W===a.DRAW_FRAMEBUFFER&&(x[a.FRAMEBUFFER]=Re),W===a.FRAMEBUFFER&&(x[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(W,Re){let De=S,Be=!1;if(W){De=y.get(Re),De===void 0&&(De=[],y.set(Re,De));const Te=W.textures;if(De.length!==Te.length||De[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Ye=Te.length;_e<Ye;_e++)De[_e]=a.COLOR_ATTACHMENT0+_e;De.length=Te.length,Be=!0}}else De[0]!==a.BACK&&(De[0]=a.BACK,Be=!0);Be&&a.drawBuffers(De)}function ht(W){return T!==W?(a.useProgram(W),T=W,!0):!1}const en={[Vr]:a.FUNC_ADD,[SR]:a.FUNC_SUBTRACT,[bR]:a.FUNC_REVERSE_SUBTRACT};en[MR]=a.MIN,en[ER]=a.MAX;const z={[TR]:a.ZERO,[AR]:a.ONE,[RR]:a.SRC_COLOR,[op]:a.SRC_ALPHA,[LR]:a.SRC_ALPHA_SATURATE,[DR]:a.DST_COLOR,[NR]:a.DST_ALPHA,[wR]:a.ONE_MINUS_SRC_COLOR,[lp]:a.ONE_MINUS_SRC_ALPHA,[UR]:a.ONE_MINUS_DST_COLOR,[CR]:a.ONE_MINUS_DST_ALPHA,[OR]:a.CONSTANT_COLOR,[PR]:a.ONE_MINUS_CONSTANT_COLOR,[FR]:a.CONSTANT_ALPHA,[IR]:a.ONE_MINUS_CONSTANT_ALPHA};function Ot(W,Re,De,Be,Te,_e,Ye,lt,Pt,wt){if(W===cr){A===!0&&(Me(a.BLEND),A=!1);return}if(A===!1&&(ve(a.BLEND),A=!0),W!==yR){if(W!==M||wt!==D){if((_!==Vr||C!==Vr)&&(a.blendEquation(a.FUNC_ADD),_=Vr,C=Vr),wt)switch(W){case Zs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case sp:a.blendFunc(a.ONE,a.ONE);break;case Wx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Xx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Zs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case sp:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Wx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,O=null,F=null,B=null,V.set(0,0,0),Z=0,M=W,D=wt}return}Te=Te||Re,_e=_e||De,Ye=Ye||Be,(Re!==_||Te!==C)&&(a.blendEquationSeparate(en[Re],en[Te]),_=Re,C=Te),(De!==L||Be!==O||_e!==F||Ye!==B)&&(a.blendFuncSeparate(z[De],z[Be],z[_e],z[Ye]),L=De,O=Be,F=_e,B=Ye),(lt.equals(V)===!1||Pt!==Z)&&(a.blendColor(lt.r,lt.g,lt.b,Pt),V.copy(lt),Z=Pt),M=W,D=!1}function ct(W,Re){W.side===_a?Me(a.CULL_FACE):ve(a.CULL_FACE);let De=W.side===Jn;Re&&(De=!De),it(De),W.blending===Zs&&W.transparent===!1?Ot(cr):Ot(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const Be=W.stencilWrite;h.setTest(Be),Be&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ge(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):Me(a.SAMPLE_ALPHA_TO_COVERAGE)}function it(W){N!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),N=W)}function ze(W){W!==vR?(ve(a.CULL_FACE),W!==k&&(W===Gx?a.cullFace(a.BACK):W===xR?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Me(a.CULL_FACE),k=W}function At(W){W!==ae&&(I&&a.lineWidth(W),ae=W)}function Ge(W,Re,De){W?(ve(a.POLYGON_OFFSET_FILL),(he!==Re||pe!==De)&&(a.polygonOffset(Re,De),he=Re,pe=De)):Me(a.POLYGON_OFFSET_FILL)}function ut(W){W?ve(a.SCISSOR_TEST):Me(a.SCISSOR_TEST)}function Wt(W){W===void 0&&(W=a.TEXTURE0+de-1),Se!==W&&(a.activeTexture(W),Se=W)}function Xt(W,Re,De){De===void 0&&(Se===null?De=a.TEXTURE0+de-1:De=Se);let Be=P[De];Be===void 0&&(Be={type:void 0,texture:void 0},P[De]=Be),(Be.type!==W||Be.texture!==Re)&&(Se!==De&&(a.activeTexture(De),Se=De),a.bindTexture(W,Re||ne[W]),Be.type=W,Be.texture=Re)}function U(){const W=P[Se];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{a.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function H(){try{a.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{a.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{a.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(){try{a.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{a.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{a.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{a.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{a.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{a.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(W){be.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function $e(W){Le.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Le.copy(W))}function qe(W,Re){let De=p.get(Re);De===void 0&&(De=new WeakMap,p.set(Re,De));let Be=De.get(W);Be===void 0&&(Be=a.getUniformBlockIndex(Re,W.name),De.set(W,Be))}function Ue(W,Re){const Be=p.get(Re).get(W);g.get(Re)!==Be&&(a.uniformBlockBinding(Re,Be,W.__bindingPointIndex),g.set(Re,Be))}function ft(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),d.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},Se=null,P={},x={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,L=null,O=null,C=null,F=null,B=null,V=new Lt(0,0,0),Z=0,D=!1,N=null,k=null,ae=null,he=null,pe=null,be.set(0,0,a.canvas.width,a.canvas.height),Le.set(0,0,a.canvas.width,a.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ve,disable:Me,bindFramebuffer:Ke,drawBuffers:Ze,useProgram:ht,setBlending:Ot,setMaterial:ct,setFlipSided:it,setCullFace:ze,setLineWidth:At,setPolygonOffset:Ge,setScissorTest:ut,activeTexture:Wt,bindTexture:Xt,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:H,texImage2D:Xe,texImage3D:Ee,updateUBOMapping:qe,uniformBlockBinding:Ue,texStorage2D:Ne,texStorage3D:Ve,texSubImage2D:K,texSubImage3D:ue,compressedTexSubImage2D:re,compressedTexSubImage3D:Ce,scissor:Fe,viewport:$e,reset:ft}}function vU(a,e,n,r,o,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new dt,v=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return S?new OffscreenCanvas(U,b):Lu("canvas")}function A(U,b,H){let K=1;const ue=Xt(U);if((ue.width>H||ue.height>H)&&(K=H/Math.max(ue.width,ue.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const re=Math.floor(K*ue.width),Ce=Math.floor(K*ue.height);x===void 0&&(x=T(re,Ce));const Ne=b?T(re,Ce):x;return Ne.width=re,Ne.height=Ce,Ne.getContext("2d").drawImage(U,0,0,re,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+re+"x"+Ce+")."),Ne}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){a.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function O(U,b,H,K,ue=!1){if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let re=b;if(b===a.RED&&(H===a.FLOAT&&(re=a.R32F),H===a.HALF_FLOAT&&(re=a.R16F),H===a.UNSIGNED_BYTE&&(re=a.R8)),b===a.RED_INTEGER&&(H===a.UNSIGNED_BYTE&&(re=a.R8UI),H===a.UNSIGNED_SHORT&&(re=a.R16UI),H===a.UNSIGNED_INT&&(re=a.R32UI),H===a.BYTE&&(re=a.R8I),H===a.SHORT&&(re=a.R16I),H===a.INT&&(re=a.R32I)),b===a.RG&&(H===a.FLOAT&&(re=a.RG32F),H===a.HALF_FLOAT&&(re=a.RG16F),H===a.UNSIGNED_BYTE&&(re=a.RG8)),b===a.RG_INTEGER&&(H===a.UNSIGNED_BYTE&&(re=a.RG8UI),H===a.UNSIGNED_SHORT&&(re=a.RG16UI),H===a.UNSIGNED_INT&&(re=a.RG32UI),H===a.BYTE&&(re=a.RG8I),H===a.SHORT&&(re=a.RG16I),H===a.INT&&(re=a.RG32I)),b===a.RGB_INTEGER&&(H===a.UNSIGNED_BYTE&&(re=a.RGB8UI),H===a.UNSIGNED_SHORT&&(re=a.RGB16UI),H===a.UNSIGNED_INT&&(re=a.RGB32UI),H===a.BYTE&&(re=a.RGB8I),H===a.SHORT&&(re=a.RGB16I),H===a.INT&&(re=a.RGB32I)),b===a.RGBA_INTEGER&&(H===a.UNSIGNED_BYTE&&(re=a.RGBA8UI),H===a.UNSIGNED_SHORT&&(re=a.RGBA16UI),H===a.UNSIGNED_INT&&(re=a.RGBA32UI),H===a.BYTE&&(re=a.RGBA8I),H===a.SHORT&&(re=a.RGBA16I),H===a.INT&&(re=a.RGBA32I)),b===a.RGB&&(H===a.UNSIGNED_INT_5_9_9_9_REV&&(re=a.RGB9_E5),H===a.UNSIGNED_INT_10F_11F_11F_REV&&(re=a.R11F_G11F_B10F)),b===a.RGBA){const Ce=ue?Du:Dt.getTransfer(K);H===a.FLOAT&&(re=a.RGBA32F),H===a.HALF_FLOAT&&(re=a.RGBA16F),H===a.UNSIGNED_BYTE&&(re=Ce===Ht?a.SRGB8_ALPHA8:a.RGBA8),H===a.UNSIGNED_SHORT_4_4_4_4&&(re=a.RGBA4),H===a.UNSIGNED_SHORT_5_5_5_1&&(re=a.RGB5_A1)}return(re===a.R16F||re===a.R32F||re===a.RG16F||re===a.RG32F||re===a.RGBA16F||re===a.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function C(U,b){let H;return U?b===null||b===qr||b===_l?H=a.DEPTH24_STENCIL8:b===Wi?H=a.DEPTH32F_STENCIL8:b===xl&&(H=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qr||b===_l?H=a.DEPTH_COMPONENT24:b===Wi?H=a.DEPTH_COMPONENT32F:b===xl&&(H=a.DEPTH_COMPONENT16),H}function F(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==li&&U.minFilter!==Qn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),Z(b),b.isVideoTexture&&v.delete(b)}function V(U){const b=U.target;b.removeEventListener("dispose",V),N(b)}function Z(U){const b=r.get(U);if(b.__webglInit===void 0)return;const H=U.source,K=y.get(H);if(K){const ue=K[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&D(U),Object.keys(K).length===0&&y.delete(H)}r.remove(U)}function D(U){const b=r.get(U);a.deleteTexture(b.__webglTexture);const H=U.source,K=y.get(H);delete K[b.__cacheKey],d.memory.textures--}function N(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ue=0;ue<b.__webglFramebuffer[K].length;ue++)a.deleteFramebuffer(b.__webglFramebuffer[K][ue]);else a.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)a.deleteFramebuffer(b.__webglFramebuffer[K]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=U.textures;for(let K=0,ue=H.length;K<ue;K++){const re=r.get(H[K]);re.__webglTexture&&(a.deleteTexture(re.__webglTexture),d.memory.textures--),r.remove(H[K])}r.remove(U)}let k=0;function ae(){k=0}function he(){const U=k;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),k+=1,U}function pe(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function de(U,b){const H=r.get(U);if(U.isVideoTexture&&ut(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&H.__version!==U.version){const K=U.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(H,U,b);return}}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,H.__webglTexture,a.TEXTURE0+b)}function I(U,b){const H=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){ne(H,U,b);return}n.bindTexture(a.TEXTURE_2D_ARRAY,H.__webglTexture,a.TEXTURE0+b)}function J(U,b){const H=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){ne(H,U,b);return}n.bindTexture(a.TEXTURE_3D,H.__webglTexture,a.TEXTURE0+b)}function X(U,b){const H=r.get(U);if(U.version>0&&H.__version!==U.version){ve(H,U,b);return}n.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture,a.TEXTURE0+b)}const Se={[xp]:a.REPEAT,[Li]:a.CLAMP_TO_EDGE,[_p]:a.MIRRORED_REPEAT},P={[li]:a.NEAREST,[YR]:a.NEAREST_MIPMAP_NEAREST,[Xc]:a.NEAREST_MIPMAP_LINEAR,[Qn]:a.LINEAR,[uh]:a.LINEAR_MIPMAP_NEAREST,[Gr]:a.LINEAR_MIPMAP_LINEAR},ee={[KR]:a.NEVER,[aw]:a.ALWAYS,[$R]:a.LESS,[M1]:a.LEQUAL,[ew]:a.EQUAL,[iw]:a.GEQUAL,[tw]:a.GREATER,[nw]:a.NOTEQUAL};function ye(U,b){if(b.type===Wi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Qn||b.magFilter===uh||b.magFilter===Xc||b.magFilter===Gr||b.minFilter===Qn||b.minFilter===uh||b.minFilter===Xc||b.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,Se[b.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,Se[b.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,Se[b.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,P[b.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,P[b.minFilter]),b.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===li||b.minFilter!==Xc&&b.minFilter!==Gr||b.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function be(U,b){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const K=b.source;let ue=y.get(K);ue===void 0&&(ue={},y.set(K,ue));const re=pe(b);if(re!==U.__cacheKey){ue[re]===void 0&&(ue[re]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,H=!0),ue[re].usedTimes++;const Ce=ue[U.__cacheKey];Ce!==void 0&&(ue[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&D(b)),U.__cacheKey=re,U.__webglTexture=ue[re].texture}return H}function Le(U,b,H){return Math.floor(Math.floor(U/H)/b)}function ke(U,b,H,K){const re=U.updateRanges;if(re.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,H,K,b.data);else{re.sort((Ee,Fe)=>Ee.start-Fe.start);let Ce=0;for(let Ee=1;Ee<re.length;Ee++){const Fe=re[Ce],$e=re[Ee],qe=Fe.start+Fe.count,Ue=Le($e.start,b.width,4),ft=Le(Fe.start,b.width,4);$e.start<=qe+1&&Ue===ft&&Le($e.start+$e.count-1,b.width,4)===Ue?Fe.count=Math.max(Fe.count,$e.start+$e.count-Fe.start):(++Ce,re[Ce]=$e)}re.length=Ce+1;const Ne=a.getParameter(a.UNPACK_ROW_LENGTH),Ve=a.getParameter(a.UNPACK_SKIP_PIXELS),Xe=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Fe=re.length;Ee<Fe;Ee++){const $e=re[Ee],qe=Math.floor($e.start/4),Ue=Math.ceil($e.count/4),ft=qe%b.width,W=Math.floor(qe/b.width),Re=Ue,De=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ft),a.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,ft,W,Re,De,H,K,b.data)}U.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ne),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ve),a.pixelStorei(a.UNPACK_SKIP_ROWS,Xe)}}function ne(U,b,H){let K=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=a.TEXTURE_3D);const ue=be(U,b),re=b.source;n.bindTexture(K,U.__webglTexture,a.TEXTURE0+H);const Ce=r.get(re);if(re.version!==Ce.__version||ue===!0){n.activeTexture(a.TEXTURE0+H);const Ne=Dt.getPrimaries(Dt.workingColorSpace),Ve=b.colorSpace===lr?null:Dt.getPrimaries(b.colorSpace),Xe=b.colorSpace===lr||Ne===Ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Ee=A(b.image,!1,o.maxTextureSize);Ee=Wt(b,Ee);const Fe=u.convert(b.format,b.colorSpace),$e=u.convert(b.type);let qe=O(b.internalFormat,Fe,$e,b.colorSpace,b.isVideoTexture);ye(K,b);let Ue;const ft=b.mipmaps,W=b.isVideoTexture!==!0,Re=Ce.__version===void 0||ue===!0,De=re.dataReady,Be=F(b,Ee);if(b.isDepthTexture)qe=C(b.format===Sl,b.type),Re&&(W?n.texStorage2D(a.TEXTURE_2D,1,qe,Ee.width,Ee.height):n.texImage2D(a.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Fe,$e,null));else if(b.isDataTexture)if(ft.length>0){W&&Re&&n.texStorage2D(a.TEXTURE_2D,Be,qe,ft[0].width,ft[0].height);for(let Te=0,_e=ft.length;Te<_e;Te++)Ue=ft[Te],W?De&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Fe,$e,Ue.data):n.texImage2D(a.TEXTURE_2D,Te,qe,Ue.width,Ue.height,0,Fe,$e,Ue.data);b.generateMipmaps=!1}else W?(Re&&n.texStorage2D(a.TEXTURE_2D,Be,qe,Ee.width,Ee.height),De&&ke(b,Ee,Fe,$e)):n.texImage2D(a.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Fe,$e,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Re&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,qe,ft[0].width,ft[0].height,Ee.depth);for(let Te=0,_e=ft.length;Te<_e;Te++)if(Ue=ft[Te],b.format!==yi)if(Fe!==null)if(W){if(De)if(b.layerUpdates.size>0){const Ye=x_(Ue.width,Ue.height,b.format,b.type);for(const lt of b.layerUpdates){const Pt=Ue.data.subarray(lt*Ye/Ue.data.BYTES_PER_ELEMENT,(lt+1)*Ye/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,lt,Ue.width,Ue.height,1,Fe,Pt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Ee.depth,Fe,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,qe,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?De&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Ee.depth,Fe,$e,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Te,qe,Ue.width,Ue.height,Ee.depth,0,Fe,$e,Ue.data)}else{W&&Re&&n.texStorage2D(a.TEXTURE_2D,Be,qe,ft[0].width,ft[0].height);for(let Te=0,_e=ft.length;Te<_e;Te++)Ue=ft[Te],b.format!==yi?Fe!==null?W?De&&n.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Fe,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,Te,qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?De&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Fe,$e,Ue.data):n.texImage2D(a.TEXTURE_2D,Te,qe,Ue.width,Ue.height,0,Fe,$e,Ue.data)}else if(b.isDataArrayTexture)if(W){if(Re&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,qe,Ee.width,Ee.height,Ee.depth),De)if(b.layerUpdates.size>0){const Te=x_(Ee.width,Ee.height,b.format,b.type);for(const _e of b.layerUpdates){const Ye=Ee.data.subarray(_e*Te/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Te/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,Ee.width,Ee.height,1,Fe,$e,Ye)}b.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,$e,Ee.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,qe,Ee.width,Ee.height,Ee.depth,0,Fe,$e,Ee.data);else if(b.isData3DTexture)W?(Re&&n.texStorage3D(a.TEXTURE_3D,Be,qe,Ee.width,Ee.height,Ee.depth),De&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,$e,Ee.data)):n.texImage3D(a.TEXTURE_3D,0,qe,Ee.width,Ee.height,Ee.depth,0,Fe,$e,Ee.data);else if(b.isFramebufferTexture){if(Re)if(W)n.texStorage2D(a.TEXTURE_2D,Be,qe,Ee.width,Ee.height);else{let Te=Ee.width,_e=Ee.height;for(let Ye=0;Ye<Be;Ye++)n.texImage2D(a.TEXTURE_2D,Ye,qe,Te,_e,0,Fe,$e,null),Te>>=1,_e>>=1}}else if(ft.length>0){if(W&&Re){const Te=Xt(ft[0]);n.texStorage2D(a.TEXTURE_2D,Be,qe,Te.width,Te.height)}for(let Te=0,_e=ft.length;Te<_e;Te++)Ue=ft[Te],W?De&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Fe,$e,Ue):n.texImage2D(a.TEXTURE_2D,Te,qe,Fe,$e,Ue);b.generateMipmaps=!1}else if(W){if(Re){const Te=Xt(Ee);n.texStorage2D(a.TEXTURE_2D,Be,qe,Te.width,Te.height)}De&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Fe,$e,Ee)}else n.texImage2D(a.TEXTURE_2D,0,qe,Fe,$e,Ee);M(b)&&_(K),Ce.__version=re.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ve(U,b,H){if(b.image.length!==6)return;const K=be(U,b),ue=b.source;n.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+H);const re=r.get(ue);if(ue.version!==re.__version||K===!0){n.activeTexture(a.TEXTURE0+H);const Ce=Dt.getPrimaries(Dt.workingColorSpace),Ne=b.colorSpace===lr?null:Dt.getPrimaries(b.colorSpace),Ve=b.colorSpace===lr||Ce===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let _e=0;_e<6;_e++)!Xe&&!Ee?Fe[_e]=A(b.image[_e],!0,o.maxCubemapSize):Fe[_e]=Ee?b.image[_e].image:b.image[_e],Fe[_e]=Wt(b,Fe[_e]);const $e=Fe[0],qe=u.convert(b.format,b.colorSpace),Ue=u.convert(b.type),ft=O(b.internalFormat,qe,Ue,b.colorSpace),W=b.isVideoTexture!==!0,Re=re.__version===void 0||K===!0,De=ue.dataReady;let Be=F(b,$e);ye(a.TEXTURE_CUBE_MAP,b);let Te;if(Xe){W&&Re&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,ft,$e.width,$e.height);for(let _e=0;_e<6;_e++){Te=Fe[_e].mipmaps;for(let Ye=0;Ye<Te.length;Ye++){const lt=Te[Ye];b.format!==yi?qe!==null?W?De&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,0,0,lt.width,lt.height,qe,lt.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,ft,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,0,0,lt.width,lt.height,qe,Ue,lt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,ft,lt.width,lt.height,0,qe,Ue,lt.data)}}}else{if(Te=b.mipmaps,W&&Re){Te.length>0&&Be++;const _e=Xt(Fe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,ft,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ee){W?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe[_e].width,Fe[_e].height,qe,Ue,Fe[_e].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,Fe[_e].width,Fe[_e].height,0,qe,Ue,Fe[_e].data);for(let Ye=0;Ye<Te.length;Ye++){const Pt=Te[Ye].image[_e].image;W?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,0,0,Pt.width,Pt.height,qe,Ue,Pt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,ft,Pt.width,Pt.height,0,qe,Ue,Pt.data)}}else{W?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,qe,Ue,Fe[_e]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,qe,Ue,Fe[_e]);for(let Ye=0;Ye<Te.length;Ye++){const lt=Te[Ye];W?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,0,0,qe,Ue,lt.image[_e]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,ft,qe,Ue,lt.image[_e])}}}M(b)&&_(a.TEXTURE_CUBE_MAP),re.__version=ue.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Me(U,b,H,K,ue,re){const Ce=u.convert(H.format,H.colorSpace),Ne=u.convert(H.type),Ve=O(H.internalFormat,Ce,Ne,H.colorSpace),Xe=r.get(b),Ee=r.get(H);if(Ee.__renderTarget=b,!Xe.__hasExternalTextures){const Fe=Math.max(1,b.width>>re),$e=Math.max(1,b.height>>re);ue===a.TEXTURE_3D||ue===a.TEXTURE_2D_ARRAY?n.texImage3D(ue,re,Ve,Fe,$e,b.depth,0,Ce,Ne,null):n.texImage2D(ue,re,Ve,Fe,$e,0,Ce,Ne,null)}n.bindFramebuffer(a.FRAMEBUFFER,U),Ge(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,ue,Ee.__webglTexture,0,At(b)):(ue===a.TEXTURE_2D||ue>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,K,ue,Ee.__webglTexture,re),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(U,b,H){if(a.bindRenderbuffer(a.RENDERBUFFER,U),b.depthBuffer){const K=b.depthTexture,ue=K&&K.isDepthTexture?K.type:null,re=C(b.stencilBuffer,ue),Ce=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=At(b);Ge(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ne,re,b.width,b.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ne,re,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,re,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ce,a.RENDERBUFFER,U)}else{const K=b.textures;for(let ue=0;ue<K.length;ue++){const re=K[ue],Ce=u.convert(re.format,re.colorSpace),Ne=u.convert(re.type),Ve=O(re.internalFormat,Ce,Ne,re.colorSpace),Xe=At(b);H&&Ge(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Xe,Ve,b.width,b.height):Ge(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Xe,Ve,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Ve,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ze(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const ue=K.__webglTexture,re=At(b);if(b.depthTexture.format===yl)Ge(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ue,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ue,0);else if(b.depthTexture.format===Sl)Ge(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ue,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ht(U){const b=r.get(U),H=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const K=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ue)};K.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=K}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=U.texture.mipmaps;K&&K.length>0?Ze(b.__webglFramebuffer[0],U):Ze(b.__webglFramebuffer,U)}else if(H){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=a.createRenderbuffer(),Ke(b.__webglDepthbuffer[K],U,!1);else{const ue=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer[K];a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,ue,a.RENDERBUFFER,re)}}else{const K=U.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Ke(b.__webglDepthbuffer,U,!1);else{const ue=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,ue,a.RENDERBUFFER,re)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function en(U,b,H){const K=r.get(U);b!==void 0&&Me(K.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),H!==void 0&&ht(U)}function z(U){const b=U.texture,H=r.get(U),K=r.get(b);U.addEventListener("dispose",V);const ue=U.textures,re=U.isWebGLCubeRenderTarget===!0,Ce=ue.length>1;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=b.version,d.memory.textures++),re){H.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)H.__webglFramebuffer[Ne][Ve]=a.createFramebuffer()}else H.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)H.__webglFramebuffer[Ne]=a.createFramebuffer()}else H.__webglFramebuffer=a.createFramebuffer();if(Ce)for(let Ne=0,Ve=ue.length;Ne<Ve;Ne++){const Xe=r.get(ue[Ne]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=a.createTexture(),d.memory.textures++)}if(U.samples>0&&Ge(U)===!1){H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ue.length;Ne++){const Ve=ue[Ne];H.__webglColorRenderbuffer[Ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,H.__webglColorRenderbuffer[Ne]);const Xe=u.convert(Ve.format,Ve.colorSpace),Ee=u.convert(Ve.type),Fe=O(Ve.internalFormat,Xe,Ee,Ve.colorSpace,U.isXRRenderTarget===!0),$e=At(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,$e,Fe,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,H.__webglColorRenderbuffer[Ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),Ke(H.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(re){n.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),ye(a.TEXTURE_CUBE_MAP,b);for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)Me(H.__webglFramebuffer[Ne][Ve],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else Me(H.__webglFramebuffer[Ne],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(b)&&_(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let Ne=0,Ve=ue.length;Ne<Ve;Ne++){const Xe=ue[Ne],Ee=r.get(Xe);let Fe=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Fe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Fe,Ee.__webglTexture),ye(Fe,Xe),Me(H.__webglFramebuffer,U,Xe,a.COLOR_ATTACHMENT0+Ne,Fe,0),M(Xe)&&_(Fe)}n.unbindTexture()}else{let Ne=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ne,K.__webglTexture),ye(Ne,b),b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)Me(H.__webglFramebuffer[Ve],U,b,a.COLOR_ATTACHMENT0,Ne,Ve);else Me(H.__webglFramebuffer,U,b,a.COLOR_ATTACHMENT0,Ne,0);M(b)&&_(Ne),n.unbindTexture()}U.depthBuffer&&ht(U)}function Ot(U){const b=U.textures;for(let H=0,K=b.length;H<K;H++){const ue=b[H];if(M(ue)){const re=L(U),Ce=r.get(ue).__webglTexture;n.bindTexture(re,Ce),_(re),n.unbindTexture()}}}const ct=[],it=[];function ze(U){if(U.samples>0){if(Ge(U)===!1){const b=U.textures,H=U.width,K=U.height;let ue=a.COLOR_BUFFER_BIT;const re=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=r.get(U),Ne=b.length>1;if(Ne)for(let Xe=0;Xe<b.length;Xe++)n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xe,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xe,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ve=U.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Xe=0;Xe<b.length;Xe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ue|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ue|=a.STENCIL_BUFFER_BIT)),Ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Xe]);const Ee=r.get(b[Xe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ee,0)}a.blitFramebuffer(0,0,H,K,0,0,H,K,ue,a.NEAREST),g===!0&&(ct.length=0,it.length=0,ct.push(a.COLOR_ATTACHMENT0+Xe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ct.push(re),it.push(re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,it)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ne)for(let Xe=0;Xe<b.length;Xe++){n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xe,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Xe]);const Ee=r.get(b[Xe]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xe,a.TEXTURE_2D,Ee,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const b=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function At(U){return Math.min(o.maxSamples,U.samples)}function Ge(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(U){const b=d.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function Wt(U,b){const H=U.colorSpace,K=U.format,ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==to&&H!==lr&&(Dt.getTransfer(H)===Ht?(K!==yi||ue!==Aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=he,this.resetTextureUnits=ae,this.setTexture2D=de,this.setTexture2DArray=I,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=en,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ge}function xU(a,e){function n(r,o=lr){let u;const d=Dt.getTransfer(o);if(r===Aa)return a.UNSIGNED_BYTE;if(r===gm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===vm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===v1)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===x1)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===m1)return a.BYTE;if(r===g1)return a.SHORT;if(r===xl)return a.UNSIGNED_SHORT;if(r===mm)return a.INT;if(r===qr)return a.UNSIGNED_INT;if(r===Wi)return a.FLOAT;if(r===so)return a.HALF_FLOAT;if(r===_1)return a.ALPHA;if(r===y1)return a.RGB;if(r===yi)return a.RGBA;if(r===yl)return a.DEPTH_COMPONENT;if(r===Sl)return a.DEPTH_STENCIL;if(r===S1)return a.RED;if(r===xm)return a.RED_INTEGER;if(r===b1)return a.RG;if(r===_m)return a.RG_INTEGER;if(r===ym)return a.RGBA_INTEGER;if(r===bu||r===Mu||r===Eu||r===Tu)if(d===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===bu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===bu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yp||r===Sp||r===bp||r===Mp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===yp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ep||r===Tp||r===Ap)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ep||r===Tp)return d===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ap)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rp||r===wp||r===Np||r===Cp||r===Dp||r===Up||r===Lp||r===Op||r===Pp||r===Fp||r===Ip||r===jp||r===zp||r===Bp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Rp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Np)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Up)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Op)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ip)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vp||r===Hp||r===kp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Vp)return d===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gp||r===Wp||r===Xp||r===Yp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Gp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_l?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const _U=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yU=`
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

}`;class SU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new F1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wa({vertexShader:_U,fragmentShader:yU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new Wr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bU extends oo{constructor(e,n){super();const r=this;let o=null,u=1,d=null,h="local-floor",g=1,p=null,v=null,x=null,y=null,S=null,T=null;const A=typeof XRWebGLBinding<"u",M=new SU,_={},L=n.getContextAttributes();let O=null,C=null;const F=[],B=[],V=new dt;let Z=null;const D=new Ci;D.viewport=new on;const N=new Ci;N.viewport=new on;const k=[D,N],ae=new Hw;let he=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=F[ne];return ve===void 0&&(ve=new Lh,F[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=F[ne];return ve===void 0&&(ve=new Lh,F[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=F[ne];return ve===void 0&&(ve=new Lh,F[ne]=ve),ve.getHandSpace()};function de(ne){const ve=B.indexOf(ne.inputSource);if(ve===-1)return;const Me=F[ve];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,p||d),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function I(){o.removeEventListener("select",de),o.removeEventListener("selectstart",de),o.removeEventListener("selectend",de),o.removeEventListener("squeeze",de),o.removeEventListener("squeezestart",de),o.removeEventListener("squeezeend",de),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",J);for(let ne=0;ne<F.length;ne++){const ve=B[ne];ve!==null&&(B[ne]=null,F[ne].disconnect(ve))}he=null,pe=null,M.reset();for(const ne in _)delete _[ne];e.setRenderTarget(O),S=null,y=null,x=null,o=null,C=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",de),o.addEventListener("selectstart",de),o.addEventListener("selectend",de),o.addEventListener("squeeze",de),o.addEventListener("squeezestart",de),o.addEventListener("squeezeend",de),o.addEventListener("end",I),o.addEventListener("inputsourceschange",J),L.xrCompatible!==!0&&await n.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(V),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ke=null,Ze=null;L.depth&&(Ze=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=L.stencil?Sl:yl,Ke=L.stencil?_l:qr);const ht={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:u};x=this.getBinding(),y=x.createProjectionLayer(ht),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),C=new mr(y.textureWidth,y.textureHeight,{format:yi,type:Aa,depthTexture:new P1(y.textureWidth,y.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Me={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,n,Me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new mr(S.framebufferWidth,S.framebufferHeight,{format:yi,type:Aa,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await o.requestReferenceSpace(h),ke.setContext(o),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(ne){for(let ve=0;ve<ne.removed.length;ve++){const Me=ne.removed[ve],Ke=B.indexOf(Me);Ke>=0&&(B[Ke]=null,F[Ke].disconnect(Me))}for(let ve=0;ve<ne.added.length;ve++){const Me=ne.added[ve];let Ke=B.indexOf(Me);if(Ke===-1){for(let ht=0;ht<F.length;ht++)if(ht>=B.length){B.push(Me),Ke=ht;break}else if(B[ht]===null){B[ht]=Me,Ke=ht;break}if(Ke===-1)break}const Ze=F[Ke];Ze&&Ze.connect(Me)}}const X=new le,Se=new le;function P(ne,ve,Me){X.setFromMatrixPosition(ve.matrixWorld),Se.setFromMatrixPosition(Me.matrixWorld);const Ke=X.distanceTo(Se),Ze=ve.projectionMatrix.elements,ht=Me.projectionMatrix.elements,en=Ze[14]/(Ze[10]-1),z=Ze[14]/(Ze[10]+1),Ot=(Ze[9]+1)/Ze[5],ct=(Ze[9]-1)/Ze[5],it=(Ze[8]-1)/Ze[0],ze=(ht[8]+1)/ht[0],At=en*it,Ge=en*ze,ut=Ke/(-it+ze),Wt=ut*-it;if(ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Wt),ne.translateZ(ut),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ze[10]===-1)ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Xt=en+ut,U=z+ut,b=At-Wt,H=Ge+(Ke-Wt),K=Ot*z/U*Xt,ue=ct*z/U*Xt;ne.projectionMatrix.makePerspective(b,H,K,ue,Xt,U),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ee(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let ve=ne.near,Me=ne.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),ae.near=N.near=D.near=ve,ae.far=N.far=D.far=Me,(he!==ae.near||pe!==ae.far)&&(o.updateRenderState({depthNear:ae.near,depthFar:ae.far}),he=ae.near,pe=ae.far),ae.layers.mask=ne.layers.mask|6,D.layers.mask=ae.layers.mask&3,N.layers.mask=ae.layers.mask&5;const Ke=ne.parent,Ze=ae.cameras;ee(ae,Ke);for(let ht=0;ht<Ze.length;ht++)ee(Ze[ht],Ke);Ze.length===2?P(ae,D,N):ae.projectionMatrix.copy(D.projectionMatrix),ye(ne,ae,Ke)};function ye(ne,ve,Me){Me===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=qp*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(y===null&&S===null))return g},this.setFoveation=function(ne){g=ne,y!==null&&(y.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ae)},this.getCameraTexture=function(ne){return _[ne]};let be=null;function Le(ne,ve){if(v=ve.getViewerPose(p||d),T=ve,v!==null){const Me=v.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Ke=!1;Me.length!==ae.cameras.length&&(ae.cameras.length=0,Ke=!0);for(let z=0;z<Me.length;z++){const Ot=Me[z];let ct=null;if(S!==null)ct=S.getViewport(Ot);else{const ze=x.getViewSubImage(y,Ot);ct=ze.viewport,z===0&&(e.setRenderTargetTextures(C,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(C))}let it=k[z];it===void 0&&(it=new Ci,it.layers.enable(z),it.viewport=new on,k[z]=it),it.matrix.fromArray(Ot.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Ot.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ct.x,ct.y,ct.width,ct.height),z===0&&(ae.matrix.copy(it.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),Ke===!0&&ae.cameras.push(it)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const z=x.getDepthInformation(Me[0]);z&&z.isValid&&z.texture&&M.init(z,o.renderState)}if(Ze&&Ze.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let z=0;z<Me.length;z++){const Ot=Me[z].camera;if(Ot){let ct=_[Ot];ct||(ct=new F1,_[Ot]=ct);const it=x.getCameraImage(Ot);ct.sourceTexture=it}}}}for(let Me=0;Me<F.length;Me++){const Ke=B[Me],Ze=F[Me];Ke!==null&&Ze!==void 0&&Ze.update(Ke,ve,p||d)}be&&be(ne,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),T=null}const ke=new I1;ke.setAnimationLoop(Le),this.setAnimationLoop=function(ne){be=ne},this.dispose=function(){}}}const jr=new Ra,MU=new pn;function EU(a,e){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,U1(a)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,L,O,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),x(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,C)):_.isMeshMatcapMaterial?(u(M,_),T(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),A(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?g(M,_,L,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Jn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Jn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const L=e.get(_),O=L.envMap,C=L.envMapRotation;O&&(M.envMap.value=O,jr.copy(C),jr.x*=-1,jr.y*=-1,jr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),M.envMapRotation.value.setFromMatrix4(MU.makeRotationFromEuler(jr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function g(M,_,L,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*L,M.scale.value=O*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function x(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,L){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const L=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function TU(a,e,n,r){let o={},u={},d=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function g(L,O){const C=O.program;r.uniformBlockBinding(L,C)}function p(L,O){let C=o[L.id];C===void 0&&(T(L),C=v(L),o[L.id]=C,L.addEventListener("dispose",M));const F=O.program;r.updateUBOMapping(L,F);const B=e.render.frame;u[L.id]!==B&&(y(L),u[L.id]=B)}function v(L){const O=x();L.__bindingPointIndex=O;const C=a.createBuffer(),F=L.__size,B=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,F,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,C),C}function x(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const O=o[L.id],C=L.uniforms,F=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let B=0,V=C.length;B<V;B++){const Z=Array.isArray(C[B])?C[B]:[C[B]];for(let D=0,N=Z.length;D<N;D++){const k=Z[D];if(S(k,B,D,F)===!0){const ae=k.__offset,he=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let de=0;de<he.length;de++){const I=he[de],J=A(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,ae+pe,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,pe),pe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ae,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(L,O,C,F){const B=L.value,V=O+"_"+C;if(F[V]===void 0)return typeof B=="number"||typeof B=="boolean"?F[V]=B:F[V]=B.clone(),!0;{const Z=F[V];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return F[V]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function T(L){const O=L.uniforms;let C=0;const F=16;for(let V=0,Z=O.length;V<Z;V++){const D=Array.isArray(O[V])?O[V]:[O[V]];for(let N=0,k=D.length;N<k;N++){const ae=D[N],he=Array.isArray(ae.value)?ae.value:[ae.value];for(let pe=0,de=he.length;pe<de;pe++){const I=he[pe],J=A(I),X=C%F,Se=X%J.boundary,P=X+Se;C+=Se,P!==0&&F-P<J.storage&&(C+=F-P),ae.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=C,C+=J.storage}}}const B=C%F;return B>0&&(C+=F-B),L.__size=C,L.__cache={},this}function A(L){const O={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(O.boundary=4,O.storage=4):L.isVector2?(O.boundary=8,O.storage=8):L.isVector3||L.isColor?(O.boundary=16,O.storage=12):L.isVector4?(O.boundary=16,O.storage=16):L.isMatrix3?(O.boundary=48,O.storage=48):L.isMatrix4?(O.boundary=64,O.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),O}function M(L){const O=L.target;O.removeEventListener("dispose",M);const C=d.indexOf(O.__bindingPointIndex);d.splice(C,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete u[O.id]}function _(){for(const L in o)a.deleteBuffer(o[L]);d=[],o={},u={}}return{bind:g,update:p,dispose:_}}class AU{constructor(e={}){const{canvas:n=sw(),context:r=null,depth:o=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const L=[],O=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=_i;let B=0,V=0,Z=null,D=-1,N=null;const k=new on,ae=new on;let he=null;const pe=new Lt(0);let de=0,I=n.width,J=n.height,X=1,Se=null,P=null;const ee=new on(0,0,I,J),ye=new on(0,0,I,J);let be=!1;const Le=new O1;let ke=!1,ne=!1;const ve=new pn,Me=new le,Ke=new on,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function en(){return Z===null?X:1}let z=r;function Ot(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pm}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",Te,!1),z===null){const Y="webgl2";if(z=Ot(Y,w),z===null)throw Ot(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ct,it,ze,At,Ge,ut,Wt,Xt,U,b,H,K,ue,re,Ce,Ne,Ve,Xe,Ee,Fe,$e,qe,Ue,ft;function W(){ct=new FC(z),ct.init(),qe=new xU(z,ct),it=new NC(z,ct,e,qe),ze=new gU(z,ct),it.reversedDepthBuffer&&y&&ze.buffers.depth.setReversed(!0),At=new zC(z),Ge=new iU,ut=new vU(z,ct,ze,Ge,it,qe,At),Wt=new DC(C),Xt=new PC(C),U=new Ww(z),Ue=new RC(z,U),b=new IC(z,U,At,Ue),H=new VC(z,b,U,At),Ee=new BC(z,it,ut),Ne=new CC(Ge),K=new nU(C,Wt,Xt,ct,it,Ue,Ne),ue=new EU(C,Ge),re=new rU,Ce=new fU(ct),Xe=new AC(C,Wt,Xt,ze,H,S,g),Ve=new pU(C,H,it),ft=new TU(z,At,it,ze),Fe=new wC(z,ct,At),$e=new jC(z,ct,At),At.programs=K.programs,C.capabilities=it,C.extensions=ct,C.properties=Ge,C.renderLists=re,C.shadowMap=Ve,C.state=ze,C.info=At}W();const Re=new bU(C,z);this.xr=Re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(I,J,!1))},this.getSize=function(w){return w.set(I,J)},this.setSize=function(w,Y,ce=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,J=Y,n.width=Math.floor(w*X),n.height=Math.floor(Y*X),ce===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(I*X,J*X).floor()},this.setDrawingBufferSize=function(w,Y,ce){I=w,J=Y,X=ce,n.width=Math.floor(w*ce),n.height=Math.floor(Y*ce),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,Y,ce,fe){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,Y,ce,fe),ze.viewport(k.copy(ee).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,Y,ce,fe){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,Y,ce,fe),ze.scissor(ae.copy(ye).multiplyScalar(X).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){ze.setScissorTest(be=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ce=!0){let fe=0;if(w){let Q=!1;if(Z!==null){const Ae=Z.texture.format;Q=Ae===ym||Ae===_m||Ae===xm}if(Q){const Ae=Z.texture.type,Oe=Ae===Aa||Ae===qr||Ae===xl||Ae===_l||Ae===gm||Ae===vm,He=Xe.getClearColor(),Ie=Xe.getClearAlpha(),nt=He.r,rt=He.g,Qe=He.b;Oe?(T[0]=nt,T[1]=rt,T[2]=Qe,T[3]=Ie,z.clearBufferuiv(z.COLOR,0,T)):(A[0]=nt,A[1]=rt,A[2]=Qe,A[3]=Ie,z.clearBufferiv(z.COLOR,0,A))}else fe|=z.COLOR_BUFFER_BIT}Y&&(fe|=z.DEPTH_BUFFER_BIT),ce&&(fe|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Xe.dispose(),re.dispose(),Ce.dispose(),Ge.dispose(),Wt.dispose(),Xt.dispose(),H.dispose(),Ue.dispose(),ft.dispose(),K.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",mn),Re.removeEventListener("sessionend",gn),tn.stop()};function De(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=At.autoReset,Y=Ve.enabled,ce=Ve.autoUpdate,fe=Ve.needsUpdate,Q=Ve.type;W(),At.autoReset=w,Ve.enabled=Y,Ve.autoUpdate=ce,Ve.needsUpdate=fe,Ve.type=Q}function Te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _e(w){const Y=w.target;Y.removeEventListener("dispose",_e),Ye(Y)}function Ye(w){lt(w),Ge.remove(w)}function lt(w){const Y=Ge.get(w).programs;Y!==void 0&&(Y.forEach(function(ce){K.releaseProgram(ce)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ce,fe,Q,Ae){Y===null&&(Y=Ze);const Oe=Q.isMesh&&Q.matrixWorld.determinant()<0,He=Ua(w,Y,ce,fe,Q);ze.setMaterial(fe,Oe);let Ie=ce.index,nt=1;if(fe.wireframe===!0){if(Ie=b.getWireframeAttribute(ce),Ie===void 0)return;nt=2}const rt=ce.drawRange,Qe=ce.attributes.position;let gt=rt.start*nt,Nt=(rt.start+rt.count)*nt;Ae!==null&&(gt=Math.max(gt,Ae.start*nt),Nt=Math.min(Nt,(Ae.start+Ae.count)*nt)),Ie!==null?(gt=Math.max(gt,0),Nt=Math.min(Nt,Ie.count)):Qe!=null&&(gt=Math.max(gt,0),Nt=Math.min(Nt,Qe.count));const Qt=Nt-gt;if(Qt<0||Qt===1/0)return;Ue.setup(Q,fe,He,ce,Ie);let jt,vt=Fe;if(Ie!==null&&(jt=U.get(Ie),vt=$e,vt.setIndex(jt)),Q.isMesh)fe.wireframe===!0?(ze.setLineWidth(fe.wireframeLinewidth*en()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(Q.isLine){let tt=fe.linewidth;tt===void 0&&(tt=1),ze.setLineWidth(tt*en()),Q.isLineSegments?vt.setMode(z.LINES):Q.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else Q.isPoints?vt.setMode(z.POINTS):Q.isSprite&&vt.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)bl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))vt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const tt=Q._multiDrawStarts,qt=Q._multiDrawCounts,St=Q._multiDrawCount,Dn=Ie?U.get(Ie).bytesPerElement:1,Mi=Ge.get(fe).currentProgram.getUniforms();for(let jn=0;jn<St;jn++)Mi.setValue(z,"_gl_DrawID",jn),vt.render(tt[jn]/Dn,qt[jn])}else if(Q.isInstancedMesh)vt.renderInstances(gt,Qt,Q.count);else if(ce.isInstancedBufferGeometry){const tt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,qt=Math.min(ce.instanceCount,tt);vt.renderInstances(gt,Qt,qt)}else vt.render(gt,Qt)};function Pt(w,Y,ce){w.transparent===!0&&w.side===_a&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,Ii(w,Y,ce),w.side=pr,w.needsUpdate=!0,Ii(w,Y,ce),w.side=_a):Ii(w,Y,ce)}this.compile=function(w,Y,ce=null){ce===null&&(ce=w),_=Ce.get(ce),_.init(Y),O.push(_),ce.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),w!==ce&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const fe=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ae=Q.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const He=Ae[Oe];Pt(He,ce,Q),fe.add(He)}else Pt(Ae,ce,Q),fe.add(Ae)}),_=O.pop(),fe},this.compileAsync=function(w,Y,ce=null){const fe=this.compile(w,Y,ce);return new Promise(Q=>{function Ae(){if(fe.forEach(function(Oe){Ge.get(Oe).currentProgram.isReady()&&fe.delete(Oe)}),fe.size===0){Q(w);return}setTimeout(Ae,10)}ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let wt=null;function bi(w){wt&&wt(w)}function mn(){tn.stop()}function gn(){tn.start()}const tn=new I1;tn.setAnimationLoop(bi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){wt=w,Re.setAnimationLoop(w),w===null?tn.stop():tn.start()},Re.addEventListener("sessionstart",mn),Re.addEventListener("sessionend",gn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Y,Z),_=Ce.get(w,O.length),_.init(Y),O.push(_),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Le.setFromProjectionMatrix(ve,Xi,Y.reversedDepth),ne=this.localClippingEnabled,ke=Ne.init(this.clippingPlanes,ne),M=re.get(w,L.length),M.init(),L.push(M),Re.enabled===!0&&Re.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Fi(Ae,Y,-1/0,C.sortObjects)}Fi(w,Y,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(Se,P),ht=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ht&&Xe.addToRenderList(M,w),this.info.render.frame++,ke===!0&&Ne.beginShadows();const ce=_.state.shadowsArray;Ve.render(ce,w,Y),ke===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=M.opaque,Q=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const Ae=Y.cameras;if(Q.length>0)for(let Oe=0,He=Ae.length;Oe<He;Oe++){const Ie=Ae[Oe];Ol(fe,Q,w,Ie)}ht&&Xe.render(w);for(let Oe=0,He=Ae.length;Oe<He;Oe++){const Ie=Ae[Oe];Zr(M,w,Ie,Ie.viewport)}}else Q.length>0&&Ol(fe,Q,w,Y),ht&&Xe.render(w),Zr(M,w,Y);Z!==null&&V===0&&(ut.updateMultisampleRenderTarget(Z),ut.updateRenderTargetMipmap(Z)),w.isScene===!0&&w.onAfterRender(C,w,Y),Ue.resetDefaultState(),D=-1,N=null,O.pop(),O.length>0?(_=O[O.length-1],ke===!0&&Ne.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Fi(w,Y,ce,fe){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ce=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Le.intersectsSprite(w)){fe&&Ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Oe=H.update(w),He=w.material;He.visible&&M.push(w,Oe,He,ce,Ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Le.intersectsObject(w))){const Oe=H.update(w),He=w.material;if(fe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ke.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ke.copy(Oe.boundingSphere.center)),Ke.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(He)){const Ie=Oe.groups;for(let nt=0,rt=Ie.length;nt<rt;nt++){const Qe=Ie[nt],gt=He[Qe.materialIndex];gt&&gt.visible&&M.push(w,Oe,gt,ce,Ke.z,Qe)}}else He.visible&&M.push(w,Oe,He,ce,Ke.z,null)}}const Ae=w.children;for(let Oe=0,He=Ae.length;Oe<He;Oe++)Fi(Ae[Oe],Y,ce,fe)}function Zr(w,Y,ce,fe){const Q=w.opaque,Ae=w.transmissive,Oe=w.transparent;_.setupLightsView(ce),ke===!0&&Ne.setGlobalState(C.clippingPlanes,ce),fe&&ze.viewport(k.copy(fe)),Q.length>0&&Qr(Q,Y,ce),Ae.length>0&&Qr(Ae,Y,ce),Oe.length>0&&Qr(Oe,Y,ce),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Ol(w,Y,ce,fe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[fe.id]===void 0&&(_.state.transmissionRenderTarget[fe.id]=new mr(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?so:Aa,minFilter:Gr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[fe.id],Oe=fe.viewport||k;Ae.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);const He=C.getRenderTarget(),Ie=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();C.setRenderTarget(Ae),C.getClearColor(pe),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Xe.render(ce);const rt=C.toneMapping;C.toneMapping=ur;const Qe=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),_.setupLightsView(fe),ke===!0&&Ne.setGlobalState(C.clippingPlanes,fe),Qr(w,ce,fe),ut.updateMultisampleRenderTarget(Ae),ut.updateRenderTargetMipmap(Ae),ct.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Nt=0,Qt=Y.length;Nt<Qt;Nt++){const jt=Y[Nt],vt=jt.object,tt=jt.geometry,qt=jt.material,St=jt.group;if(qt.side===_a&&vt.layers.test(fe.layers)){const Dn=qt.side;qt.side=Jn,qt.needsUpdate=!0,co(vt,ce,fe,tt,qt,St),qt.side=Dn,qt.needsUpdate=!0,gt=!0}}gt===!0&&(ut.updateMultisampleRenderTarget(Ae),ut.updateRenderTargetMipmap(Ae))}C.setRenderTarget(He,Ie,nt),C.setClearColor(pe,de),Qe!==void 0&&(fe.viewport=Qe),C.toneMapping=rt}function Qr(w,Y,ce){const fe=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ae=w.length;Q<Ae;Q++){const Oe=w[Q],He=Oe.object,Ie=Oe.geometry,nt=Oe.group;let rt=Oe.material;rt.allowOverride===!0&&fe!==null&&(rt=fe),He.layers.test(ce.layers)&&co(He,Y,ce,Ie,rt,nt)}}function co(w,Y,ce,fe,Q,Ae){w.onBeforeRender(C,Y,ce,fe,Q,Ae),w.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(C,Y,ce,fe,w,Ae),Q.transparent===!0&&Q.side===_a&&Q.forceSinglePass===!1?(Q.side=Jn,Q.needsUpdate=!0,C.renderBufferDirect(ce,Y,fe,Q,w,Ae),Q.side=pr,Q.needsUpdate=!0,C.renderBufferDirect(ce,Y,fe,Q,w,Ae),Q.side=_a):C.renderBufferDirect(ce,Y,fe,Q,w,Ae),w.onAfterRender(C,Y,ce,fe,Q,Ae)}function Ii(w,Y,ce){Y.isScene!==!0&&(Y=Ze);const fe=Ge.get(w),Q=_.state.lights,Ae=_.state.shadowsArray,Oe=Q.state.version,He=K.getParameters(w,Q.state,Ae,Y,ce),Ie=K.getProgramCacheKey(He);let nt=fe.programs;fe.environment=w.isMeshStandardMaterial?Y.environment:null,fe.fog=Y.fog,fe.envMap=(w.isMeshStandardMaterial?Xt:Wt).get(w.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",_e),nt=new Map,fe.programs=nt);let rt=nt.get(Ie);if(rt!==void 0){if(fe.currentProgram===rt&&fe.lightsStateVersion===Oe)return Qi(w,He),rt}else He.uniforms=K.getUniforms(w),w.onBeforeCompile(He,C),rt=K.acquireProgram(He,Ie),nt.set(Ie,rt),fe.uniforms=He.uniforms;const Qe=fe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=Ne.uniform),Qi(w,He),fe.needsLights=La(w),fe.lightsStateVersion=Oe,fe.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),fe.currentProgram=rt,fe.uniformsList=null,rt}function Jr(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Au.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Qi(w,Y){const ce=Ge.get(w);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function Ua(w,Y,ce,fe,Q){Y.isScene!==!0&&(Y=Ze),ut.resetTextureUnits();const Ae=Y.fog,Oe=fe.isMeshStandardMaterial?Y.environment:null,He=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:to,Ie=(fe.isMeshStandardMaterial?Xt:Wt).get(fe.envMap||Oe),nt=fe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,rt=!!ce.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Qe=!!ce.morphAttributes.position,gt=!!ce.morphAttributes.normal,Nt=!!ce.morphAttributes.color;let Qt=ur;fe.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Qt=C.toneMapping);const jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,vt=jt!==void 0?jt.length:0,tt=Ge.get(fe),qt=_.state.lights;if(ke===!0&&(ne===!0||w!==N)){const nn=w===N&&fe.id===D;Ne.setState(fe,w,nn)}let St=!1;fe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==qt.state.version||tt.outputColorSpace!==He||Q.isBatchedMesh&&tt.batching===!1||!Q.isBatchedMesh&&tt.batching===!0||Q.isBatchedMesh&&tt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&tt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&tt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&tt.instancingMorph===!1&&Q.morphTexture!==null||tt.envMap!==Ie||fe.fog===!0&&tt.fog!==Ae||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ne.numPlanes||tt.numIntersection!==Ne.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==rt||tt.morphTargets!==Qe||tt.morphNormals!==gt||tt.morphColors!==Nt||tt.toneMapping!==Qt||tt.morphTargetsCount!==vt)&&(St=!0):(St=!0,tt.__version=fe.version);let Dn=tt.currentProgram;St===!0&&(Dn=Ii(fe,Y,Q));let Mi=!1,jn=!1,Sn=!1;const kt=Dn.getUniforms(),zn=tt.uniforms;if(ze.useProgram(Dn.program)&&(Mi=!0,jn=!0,Sn=!0),fe.id!==D&&(D=fe.id,jn=!0),Mi||N!==w){ze.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),kt.setValue(z,"projectionMatrix",w.projectionMatrix),kt.setValue(z,"viewMatrix",w.matrixWorldInverse);const An=kt.map.cameraPosition;An!==void 0&&An.setValue(z,Me.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&kt.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&kt.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,jn=!0,Sn=!0)}if(Q.isSkinnedMesh){kt.setOptional(z,Q,"bindMatrix"),kt.setOptional(z,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),kt.setValue(z,"boneTexture",nn.boneTexture,ut))}Q.isBatchedMesh&&(kt.setOptional(z,Q,"batchingTexture"),kt.setValue(z,"batchingTexture",Q._matricesTexture,ut),kt.setOptional(z,Q,"batchingIdTexture"),kt.setValue(z,"batchingIdTexture",Q._indirectTexture,ut),kt.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(z,"batchingColorTexture",Q._colorsTexture,ut));const Un=ce.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ee.update(Q,ce,Dn),(jn||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,kt.setValue(z,"receiveShadow",Q.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(zn.envMap.value=Ie,zn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&Y.environment!==null&&(zn.envMapIntensity.value=Y.environmentIntensity),jn&&(kt.setValue(z,"toneMappingExposure",C.toneMappingExposure),tt.needsLights&&gr(zn,Sn),Ae&&fe.fog===!0&&ue.refreshFogUniforms(zn,Ae),ue.refreshMaterialUniforms(zn,fe,X,J,_.state.transmissionRenderTarget[w.id]),Au.upload(z,Jr(tt),zn,ut)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Au.upload(z,Jr(tt),zn,ut),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&kt.setValue(z,"center",Q.center),kt.setValue(z,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(z,"normalMatrix",Q.normalMatrix),kt.setValue(z,"modelMatrix",Q.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const nn=fe.uniformsGroups;for(let An=0,Kr=nn.length;An<Kr;An++){const kn=nn[An];ft.update(kn,Dn),ft.bind(kn,Dn)}}return Dn}function gr(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function La(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,Y,ce){const fe=Ge.get(w);fe.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),Ge.get(w.texture).__webglTexture=Y,Ge.get(w.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:ce,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ce=Ge.get(w);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0};const un=z.createFramebuffer();this.setRenderTarget=function(w,Y=0,ce=0){Z=w,B=Y,V=ce;let fe=!0,Q=null,Ae=!1,Oe=!1;if(w){const Ie=Ge.get(w);if(Ie.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(z.FRAMEBUFFER,null),fe=!1;else if(Ie.__webglFramebuffer===void 0)ut.setupRenderTarget(w);else if(Ie.__hasExternalTextures)ut.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(Ie.__boundDepthTexture!==Qe){if(Qe!==null&&Ge.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(w)}}const nt=w.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const rt=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(rt[Y])?Q=rt[Y][ce]:Q=rt[Y],Ae=!0):w.samples>0&&ut.useMultisampledRTT(w)===!1?Q=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(rt)?Q=rt[ce]:Q=rt,k.copy(w.viewport),ae.copy(w.scissor),he=w.scissorTest}else k.copy(ee).multiplyScalar(X).floor(),ae.copy(ye).multiplyScalar(X).floor(),he=be;if(ce!==0&&(Q=un),ze.bindFramebuffer(z.FRAMEBUFFER,Q)&&fe&&ze.drawBuffers(w,Q),ze.viewport(k),ze.scissor(ae),ze.setScissorTest(he),Ae){const Ie=Ge.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,ce)}else if(Oe){const Ie=Y;for(let nt=0;nt<w.textures.length;nt++){const rt=Ge.get(w.textures[nt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+nt,rt.__webglTexture,ce,Ie)}}else if(w!==null&&ce!==0){const Ie=Ge.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ie.__webglTexture,ce)}D=-1},this.readRenderTargetPixels=function(w,Y,ce,fe,Q,Ae,Oe,He=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie){ze.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const nt=w.textures[He],rt=nt.format,Qe=nt.type;if(!it.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-fe&&ce>=0&&ce<=w.height-Q&&(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+He),z.readPixels(Y,ce,fe,Q,qe.convert(rt),qe.convert(Qe),Ae))}finally{const nt=Z!==null?Ge.get(Z).__webglFramebuffer:null;ze.bindFramebuffer(z.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ce,fe,Q,Ae,Oe,He=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie)if(Y>=0&&Y<=w.width-fe&&ce>=0&&ce<=w.height-Q){ze.bindFramebuffer(z.FRAMEBUFFER,Ie);const nt=w.textures[He],rt=nt.format,Qe=nt.type;if(!it.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.bufferData(z.PIXEL_PACK_BUFFER,Ae.byteLength,z.STREAM_READ),w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+He),z.readPixels(Y,ce,fe,Q,qe.convert(rt),qe.convert(Qe),0);const Nt=Z!==null?Ge.get(Z).__webglFramebuffer:null;ze.bindFramebuffer(z.FRAMEBUFFER,Nt);const Qt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ow(z,Qt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ae),z.deleteBuffer(gt),z.deleteSync(Qt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ce=0){const fe=Math.pow(2,-ce),Q=Math.floor(w.image.width*fe),Ae=Math.floor(w.image.height*fe),Oe=Y!==null?Y.x:0,He=Y!==null?Y.y:0;ut.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,ce,0,0,Oe,He,Q,Ae),ze.unbindTexture()};const Pl=z.createFramebuffer(),Fl=z.createFramebuffer();this.copyTextureToTexture=function(w,Y,ce=null,fe=null,Q=0,Ae=null){Ae===null&&(Q!==0?(bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Q,Q=0):Ae=0);let Oe,He,Ie,nt,rt,Qe,gt,Nt,Qt;const jt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if(ce!==null)Oe=ce.max.x-ce.min.x,He=ce.max.y-ce.min.y,Ie=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,rt=ce.min.y,Qe=ce.isBox3?ce.min.z:0;else{const Un=Math.pow(2,-Q);Oe=Math.floor(jt.width*Un),He=Math.floor(jt.height*Un),w.isDataArrayTexture?Ie=jt.depth:w.isData3DTexture?Ie=Math.floor(jt.depth*Un):Ie=1,nt=0,rt=0,Qe=0}fe!==null?(gt=fe.x,Nt=fe.y,Qt=fe.z):(gt=0,Nt=0,Qt=0);const vt=qe.convert(Y.format),tt=qe.convert(Y.type);let qt;Y.isData3DTexture?(ut.setTexture3D(Y,0),qt=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ut.setTexture2DArray(Y,0),qt=z.TEXTURE_2D_ARRAY):(ut.setTexture2D(Y,0),qt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const St=z.getParameter(z.UNPACK_ROW_LENGTH),Dn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Mi=z.getParameter(z.UNPACK_SKIP_PIXELS),jn=z.getParameter(z.UNPACK_SKIP_ROWS),Sn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,jt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,jt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe);const kt=w.isDataArrayTexture||w.isData3DTexture,zn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Un=Ge.get(w),nn=Ge.get(Y),An=Ge.get(Un.__renderTarget),Kr=Ge.get(nn.__renderTarget);ze.bindFramebuffer(z.READ_FRAMEBUFFER,An.__webglFramebuffer),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let kn=0;kn<Ie;kn++)kt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,Q,Qe+kn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(Y).__webglTexture,Ae,Qt+kn)),z.blitFramebuffer(nt,rt,Oe,He,gt,Nt,Oe,He,z.DEPTH_BUFFER_BIT,z.NEAREST);ze.bindFramebuffer(z.READ_FRAMEBUFFER,null),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||Ge.has(w)){const Un=Ge.get(w),nn=Ge.get(Y);ze.bindFramebuffer(z.READ_FRAMEBUFFER,Pl),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fl);for(let An=0;An<Ie;An++)kt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Un.__webglTexture,Q,Qe+An):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Un.__webglTexture,Q),zn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Ae,Qt+An):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Ae),Q!==0?z.blitFramebuffer(nt,rt,Oe,He,gt,Nt,Oe,He,z.COLOR_BUFFER_BIT,z.NEAREST):zn?z.copyTexSubImage3D(qt,Ae,gt,Nt,Qt+An,nt,rt,Oe,He):z.copyTexSubImage2D(qt,Ae,gt,Nt,nt,rt,Oe,He);ze.bindFramebuffer(z.READ_FRAMEBUFFER,null),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else zn?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(qt,Ae,gt,Nt,Qt,Oe,He,Ie,vt,tt,jt.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(qt,Ae,gt,Nt,Qt,Oe,He,Ie,vt,jt.data):z.texSubImage3D(qt,Ae,gt,Nt,Qt,Oe,He,Ie,vt,tt,jt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ae,gt,Nt,Oe,He,vt,tt,jt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ae,gt,Nt,jt.width,jt.height,vt,jt.data):z.texSubImage2D(z.TEXTURE_2D,Ae,gt,Nt,Oe,He,vt,tt,jt);z.pixelStorei(z.UNPACK_ROW_LENGTH,St),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Mi),z.pixelStorei(z.UNPACK_SKIP_ROWS,jn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Sn),Ae===0&&Y.generateMipmaps&&z.generateMipmap(qt),ze.unbindTexture()},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&ut.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ut.setTextureCube(w,0):w.isData3DTexture?ut.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ut.setTexture2DArray(w,0):ut.setTexture2D(w,0),ze.unbindTexture()},this.resetState=function(){B=0,V=0,Z=null,ze.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}function RU({mouseForce:a=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:o=32,iterationsPoisson:u=32,dt:d=.014,BFECC:h=!0,resolution:g=.5,isBounce:p=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:x={},className:y="",autoDemo:S=!0,autoSpeed:T=.5,autoIntensity:A=2.2,takeoverDuration:M=.25,autoResumeDelay:_=1e3,autoRampDuration:L=.6}){const O=ie.useRef(null),C=ie.useRef(null),F=ie.useRef(null),B=ie.useRef(null),V=ie.useRef(null),Z=ie.useRef(!0),D=ie.useRef(null);return ie.useEffect(()=>{if(!O.current)return;function N(U){let b;Array.isArray(U)&&U.length>0?U.length===1?b=[U[0],U[0]]:b=U:b=["#ffffff","#ffffff"];const H=b.length,K=new Uint8Array(H*4);for(let re=0;re<H;re++){const Ce=new Lt(b[re]);K[re*4+0]=Math.round(Ce.r*255),K[re*4+1]=Math.round(Ce.g*255),K[re*4+2]=Math.round(Ce.b*255),K[re*4+3]=255}const ue=new Uw(K,H,1,yi);return ue.magFilter=Qn,ue.minFilter=Qn,ue.wrapS=Li,ue.wrapT=Li,ue.generateMipmaps=!1,ue.needsUpdate=!0,ue}const k=N(v),ae=new on(0,0,0,0);class he{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(b){this.container=b,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new AU({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new kw,this.clock.start()}resize(){if(!this.container)return;const b=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(b.width)),this.height=Math.max(1,Math.floor(b.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const pe=new he;class de{constructor(){this.mouseMoved=!1,this.coords=new dt,this.coords_old=new dt,this.diff=new dt,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new dt,this.takeoverTo=new dt,this.onInteract=null}init(b){this.container=b,b.addEventListener("mousemove",this._onMouseMove,!1),b.addEventListener("touchstart",this._onTouchStart,!1),b.addEventListener("touchmove",this._onTouchMove,!1),b.addEventListener("mouseenter",this._onMouseEnter,!1),b.addEventListener("mouseleave",this._onMouseLeave,!1),b.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(b,H){if(!this.container)return;this.timer&&clearTimeout(this.timer);const K=this.container.getBoundingClientRect(),ue=(b-K.left)/K.width,re=(H-K.top)/K.height;this.coords.set(ue*2-1,-(re*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(b,H){this.coords.set(b,H),this.mouseMoved=!0}onDocumentMouseMove(b){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const H=this.container.getBoundingClientRect(),K=(b.clientX-H.left)/H.width,ue=(b.clientY-H.top)/H.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(K*2-1,-(ue*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(b.clientX,b.clientY),this.hasUserControl=!0}onDocumentTouchStart(b){if(b.touches.length===1){const H=b.touches[0];this.onInteract&&this.onInteract(),this.setCoords(H.pageX,H.pageY),this.hasUserControl=!0}}onDocumentTouchMove(b){if(b.touches.length===1){const H=b.touches[0];this.onInteract&&this.onInteract(),this.setCoords(H.pageX,H.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const b=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(b>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const H=b*b*(3-2*b);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,H)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const I=new de;class J{constructor(b,H,K){this.mouse=b,this.manager=H,this.enabled=K.enabled,this.speed=K.speed,this.resumeDelay=K.resumeDelay||3e3,this.rampDurationMs=(K.rampDuration||0)*1e3,this.active=!1,this.current=new dt(0,0),this.target=new dt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new dt,this.pickNewTarget()}pickNewTarget(){const b=Math.random;this.target.set((b()*2-1)*(1-this.margin),(b()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const b=performance.now();if(b-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=b,this.activationTime=b),!this.active)return;this.mouse.isAutoActive=!0;let K=(b-this.lastTime)/1e3;this.lastTime=b,K>.2&&(K=.016);const ue=this._tmpDir.subVectors(this.target,this.current),re=ue.length();if(re<.01){this.pickNewTarget();return}ue.normalize();let Ce=1;if(this.rampDurationMs>0){const Xe=Math.min(1,(b-this.activationTime)/this.rampDurationMs);Ce=Xe*Xe*(3-2*Xe)}const Ne=this.speed*K*Ce,Ve=Math.min(Ne,re);this.current.addScaledVector(ue,Ve),this.mouse.setNormalized(this.current.x,this.current.y)}}const X=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,Se=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,P=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,ee=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,ye=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,be=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Le=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ke=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ne=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ve=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Me{constructor(b){this.props=b||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new h_,this.camera=new Ou,this.uniforms&&(this.material=new hu(this.props.material),this.geometry=new Wr(2,2),this.plane=new Si(this.geometry,this.material),this.scene.add(this.plane))}update(){pe.renderer.setRenderTarget(this.props.output||null),pe.renderer.render(this.scene,this.camera),pe.renderer.setRenderTarget(null)}}class Ke extends Me{constructor(b){super({material:{vertexShader:X,fragmentShader:ee,uniforms:{boundarySpace:{value:b.cellScale},px:{value:b.cellScale},fboSize:{value:b.fboSize},velocity:{value:b.src.texture},dt:{value:b.dt},isBFECC:{value:!0}}},output:b.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const b=new Da,H=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);b.setAttribute("position",new Oi(H,3));const K=new hu({vertexShader:Se,fragmentShader:ee,uniforms:this.uniforms});this.line=new jw(b,K),this.scene.add(this.line)}update({dt:b,isBounce:H,BFECC:K}){this.uniforms.dt.value=b,this.line.visible=H,this.uniforms.isBFECC.value=K,super.update()}}class Ze extends Me{constructor(b){super({output:b.dst}),this.init(b)}init(b){super.init();const H=new Wr(1,1),K=new hu({vertexShader:P,fragmentShader:Le,blending:sp,depthWrite:!1,uniforms:{px:{value:b.cellScale},force:{value:new dt(0,0)},center:{value:new dt(0,0)},scale:{value:new dt(b.cursor_size,b.cursor_size)}}});this.mouse=new Si(H,K),this.scene.add(this.mouse)}update(b){const H=I.diff.x/2*b.mouse_force,K=I.diff.y/2*b.mouse_force,ue=b.cursor_size*b.cellScale.x,re=b.cursor_size*b.cellScale.y,Ce=Math.min(Math.max(I.coords.x,-1+ue+b.cellScale.x*2),1-ue-b.cellScale.x*2),Ne=Math.min(Math.max(I.coords.y,-1+re+b.cellScale.y*2),1-re-b.cellScale.y*2),Ve=this.mouse.material.uniforms;Ve.force.value.set(H,K),Ve.center.value.set(Ce,Ne),Ve.scale.value.set(b.cursor_size,b.cursor_size),super.update()}}class ht extends Me{constructor(b){super({material:{vertexShader:X,fragmentShader:ve,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},velocity_new:{value:b.dst_.texture},v:{value:b.viscous},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update({viscous:b,iterations:H,dt:K}){let ue,re;this.uniforms.v.value=b;for(let Ce=0;Ce<H;Ce++)Ce%2===0?(ue=this.props.output0,re=this.props.output1):(ue=this.props.output1,re=this.props.output0),this.uniforms.velocity_new.value=ue.texture,this.props.output=re,this.uniforms.dt.value=K,super.update();return re}}class en extends Me{constructor(b){super({material:{vertexShader:X,fragmentShader:be,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update({vel:b}){this.uniforms.velocity.value=b.texture,super.update()}}class z extends Me{constructor(b){super({material:{vertexShader:X,fragmentShader:ke,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.dst_.texture},divergence:{value:b.src.texture},px:{value:b.cellScale}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update({iterations:b}){let H,K;for(let ue=0;ue<b;ue++)ue%2===0?(H=this.props.output0,K=this.props.output1):(H=this.props.output1,K=this.props.output0),this.uniforms.pressure.value=H.texture,this.props.output=K,super.update();return K}}class Ot extends Me{constructor(b){super({material:{vertexShader:X,fragmentShader:ne,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.src_p.texture},velocity:{value:b.src_v.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update({vel:b,pressure:H}){this.uniforms.velocity.value=b.texture,this.uniforms.pressure.value=H.texture,super.update()}}class ct{constructor(b){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...b},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new dt,this.cellScale=new dt,this.boundarySpace=new dt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?so:Wi}createAllFBO(){const H={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Qn,magFilter:Qn,wrapS:Li,wrapT:Li};for(let K in this.fbos)this.fbos[K]=new mr(this.fboSize.x,this.fboSize.y,H)}createShaderPass(){this.advection=new Ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ze({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new en({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new z({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ot({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const b=Math.max(1,Math.round(this.options.resolution*pe.width)),H=Math.max(1,Math.round(this.options.resolution*pe.height)),K=1/b,ue=1/H;this.cellScale.set(K,ue),this.fboSize.set(b,H)}resize(){this.calcSize();for(let b in this.fbos)this.fbos[b].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let b=this.fbos.vel_1;this.options.isViscous&&(b=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:b});const H=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:b,pressure:H})}}class it{constructor(){this.init()}init(){this.simulation=new ct,this.scene=new h_,this.camera=new Ou,this.output=new Si(new Wr(2,2),new hu({vertexShader:X,fragmentShader:ye,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new dt},palette:{value:k},bgColor:{value:ae}}})),this.scene.add(this.output)}addScene(b){this.scene.add(b)}resize(){this.simulation.resize()}render(){pe.renderer.setRenderTarget(null),pe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class ze{constructor(b){this.props=b,pe.init(b.$wrapper),I.init(b.$wrapper),I.autoIntensity=b.autoIntensity,I.takeoverDuration=b.takeoverDuration,this.lastUserInteraction=performance.now(),I.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new J(I,this,{enabled:b.autoDemo,speed:b.autoSpeed,resumeDelay:b.autoResumeDelay,rampDuration:b.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Z.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(pe.renderer.domElement),this.output=new it}resize(){pe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),I.update(),pe.update(),this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),I.dispose(),pe.renderer){const b=pe.renderer.domElement;b&&b.parentNode&&b.parentNode.removeChild(b),pe.renderer.dispose()}}catch{}}}const At=O.current;At.style.position=At.style.position||"relative",At.style.overflow=At.style.overflow||"hidden";const Ge=new ze({$wrapper:At,autoDemo:S,autoSpeed:T,autoIntensity:A,takeoverDuration:M,autoResumeDelay:_,autoRampDuration:L});C.current=Ge,(()=>{if(!C.current)return;const U=C.current.output?.simulation;if(!U)return;const b=U.options.resolution;Object.assign(U.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:u,dt:d,BFECC:h,resolution:g,isBounce:p}),g!==b&&U.resize()})(),Ge.start();const Wt=new IntersectionObserver(U=>{const b=U[0],H=b.isIntersecting&&b.intersectionRatio>0;Z.current=H,C.current&&(H&&!document.hidden?C.current.start():C.current.pause())},{threshold:[0,.01,.1]});Wt.observe(At),V.current=Wt;const Xt=new ResizeObserver(()=>{C.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{C.current&&C.current.resize()}))});return Xt.observe(At),F.current=Xt,()=>{if(B.current&&cancelAnimationFrame(B.current),F.current)try{F.current.disconnect()}catch{}if(V.current)try{V.current.disconnect()}catch{}C.current&&C.current.dispose(),C.current=null}},[h,e,d,p,n,u,o,a,g,r,v,S,T,A,M,_,L]),ie.useEffect(()=>{const N=C.current;if(!N)return;const k=N.output?.simulation;if(!k)return;const ae=k.options.resolution;Object.assign(k.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:u,dt:d,BFECC:h,resolution:g,isBounce:p}),N.autoDriver&&(N.autoDriver.enabled=S,N.autoDriver.speed=T,N.autoDriver.resumeDelay=_,N.autoDriver.rampDurationMs=L*1e3,N.autoDriver.mouse&&(N.autoDriver.mouse.autoIntensity=A,N.autoDriver.mouse.takeoverDuration=M)),g!==ae&&k.resize()},[a,e,n,r,o,u,d,h,g,p,S,T,A,M,_,L]),c.jsx("div",{ref:O,className:`liquid-ether-container ${y||""}`,style:x})}const Pe=({children:a,className:e="",as:n="div",borderWidth:r=2,glowIntensity:o=1,animationSpeed:u=2,color:d="#00ffff",style:h={}})=>{const g=ie.useRef(null),p=n;return ie.useEffect(()=>{if(!g.current)return;const v=g.current;v.style.setProperty("--electric-border-width",`${r}px`),v.style.setProperty("--electric-glow-intensity",o),v.style.setProperty("--electric-animation-speed",`${u}s`),v.style.setProperty("--electric-color",d)},[r,o,u,d]),c.jsx(p,{ref:g,className:`electric-border ${e}`,style:h,children:c.jsx("span",{className:"electric-border-content",children:a})})};function Yi({end:a,duration:e=2e3,prefix:n="",suffix:r="",className:o=""}){const[u,d]=ie.useState(0),[h,g]=ie.useState(!1),p=ie.useRef(null),v=ie.useRef(!1);return ie.useEffect(()=>{const x=new IntersectionObserver(([y])=>{y.isIntersecting&&!v.current&&(g(!0),v.current=!0)},{threshold:.1});return p.current&&x.observe(p.current),()=>{p.current&&x.unobserve(p.current)}},[]),ie.useEffect(()=>{if(!h)return;const x=Date.now(),y=parseFloat(a)||0,S=()=>{const T=Date.now(),A=Math.min((T-x)/e,1),M=1-Math.pow(1-A,4),_=Math.floor(y*M);d(_),A<1?requestAnimationFrame(S):d(y)};S()},[h,a,e]),c.jsxs("span",{ref:p,className:o,children:[n,u.toLocaleString(),r]})}const H1="/assets/placeholder-fusion-reactor-CKvdpJ4K.png",wU="/assets/placeholder-isotope-uLrK6kvv.png",k_="data:image/png;base64,aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBR1hFbEVRVlI0bk8xYWUweFRWeGkvZjdCa1diSmtTN1prLzJ6N1kxbVdaVm4yeDVZbCsyTlpsbVhKL3RoTW5KdUtjODdOdVRrM1p6YzNOK2ZtbkxnSGJqNUFRVkJCUUhrcENNaFRIZ1VFQVhtb0tJcUtEOFNoNEFPVngrL2t1OXhlYjN0N2UyOWJrSmowbDV5MHZlZWM3L3krYzc3emZlZTdsWlQ4WC81TEJjQUp3SHNBN0FRZ0RJQUlBS0lBT0FKQUpBREhBQWdENENBQWh3RFlDOEFPQU5ZQTRQbGZBQklBV0F6QUpnRE9BSkFLUUJFQTlRRDBBREFHd0NRQVV3WXl4ZnFtV2Q4YTlvNWdOZ2NCMkFEQVlnQW16QVlZQUpZQnNCK0Fjd0E4QXFDZkFSTXZBd0E4WkgwZVlHTXNNOXZmbkFLV0FuQUFnQ1FBdWd3QWs4c3dBTThBdUFYQVZRQXVBM0NKL2IzRm52V1pqTlZ0TnZiQldRRzhBWUR0QUR4bVFJd0E4QlNBSkFDT0F4QU53RVlBMWdLd0hJQ2xBQ3hoejlheWR0SHMzU1EyeGhNVFk1cVdSUUJzWWxaTFlVQ2tBSEFhZ0owQXJBSmdrZG1BV01ZV3Nibk9NQnNwYkt6TmxnQmV6cnhyREFQd0FRQ25BTmdDd0FxclFGb0FlZ1diTzRYWmVNQnNMamNMZEJVQWNRRFVNNkF2QUlnRXdHOEZVSnZOYjJjMnJyQ3hyd01RYXdib2JRRGNaZ0JQQXhBSHdNZFdnTFJaZkIremRaM1p2c1BXWWdqNlF3QnVNRENQQUZodk5VQUg1RnZQYkQ1aWE3cGhCUFJIQUZ4aGs2Y0RzTlZxWUE3S3VaV3RJWjJ0N1pJUjBGOEFVTVltamJJYWxJdnlSckUxbGJFMWFnTDlHUUQ1YkxKRFZnTnlRKzVEYkkzNWJLMnFvTDhFb0l4TkV1T0dmRzdKSGNQV1dzYldMQXY2Y3dBSzJPQkhyQWJpb2Z4SDJKb0wyTnBGUVc5Z0E5K3hHb1RIOHIvRDF0NGdCdnBITnVCWnF3SE1rdnhuMlI1OElnVDZhelpRaXRVQVpsSCtGTFlYWHdtQjNzOEdTTFFhd0N6S244ajJaTDhRNkJnMndHV3JBY3lpL0pmWm5zU0lnYzVnSGM5WkRXQ1c1VC9IOWlaRERQUmQxdkdTMVFCbVdmNUxiRy91aW9FdVloMi9zeHJBTE12L0hkdWJJakhRRmF6anQxWURtR1g1djJWN1V5RUd1cHAxL01wcUFMTXMvMWRzYjZyRlFMZXlqbDlZRFdDVzVmK0M3VTJyR09oQjFuR1IxUUJtV2Y1RmJHOEd4VUF6VjROZFZnT1laZmwzc1QwaE1kQ1RyT05HcXdITXN2d2IyZDVNaW9FZVp4M1hXdzFnbHVWZnovWm1YQXowR091NHptb0FzeXovT3JZM1kyS2dSMW5IdFZZRG1HWDUxN0s5R1JVRFBjdzZyckVhd0N6THY0YnR6WEJRUUkrd2pxdXRCakRMOHE5bWV6TWlCbnFJZFZ4bE5ZQlpsbjhWMjVzaE1kQ0RyT05LcXdITXN2d3IyZDRNaW9FZVlCMVhXQTFnbHVWZndmWm1RQXgwUCt1NDNHb0FzeXovY3JZMy9XS2crMWpIWlZZRG1HWDVsN0c5NlJNRDNjczZMclVhd0N6THY1VHRUYThZNkI3V2NZblZBR1paL2lWc2IzckVRSGV6am91dEJqREw4aTltZTlNdEJycUxkVnhrTllCWmxuOFIyNXN1TWRDZHJPTkNxd0hNc3Z3TDJkNTBpb0h1WUIwWFdBMWdsdVZmd1BhbVF3eDBPK3M0MzJvQXN5ei9mTFkzN1dLZzIxakhlVllEbUdYNTU3RzlhUk1EM2NvNnpyVWF3Q3pMUDVmdFRhc1k2QmJXY1k3VkFHWlpmdHJNRmpIUXphempiS3NCekxMOHM5bmV0SWlCYm1JZFoxa05ZSmJsbjhYMnBra01kQ1ByT05OcUFMTXMvMHkyTjQxaW9PbVBtbWF0QmpETDhzOWtlME4vWGhVRlRYL2FtR0UxZ0ZtV2Z3YmJHL3JUcWlob092WXkzV29Bc3l6L2RMWTNkT3hGRkRUOVNXTzYxUUJtV2Y3cGJHL29UeHFpb09sWXd6U3JBY3l5L05QWTN0Q3hCbEhRZEZ4d3F0VUFabG4rcVd4djZMaWdLR2c2ZGpURmFnQ3pMUDhVdGpkMDdFZ1VOQjNYbTJ3MWdGbVdmekxiR3pxdUp3cWFqbGxPc2hyQUxNcy9pZTBOSGJNVUJVM0hYQ2RhRFdDVzVaL0k5b2FPdVlxQ3B1UHFFNndHTU12eVQyQjdROGRkUlVIVHNmM3hWZ09ZWmZuSHM3Mmg0NjZpb09sY3dUaXJBY3l5L09QWTN0QzVBbEhRZEQ1a25OVUFabG4rY1d4djZIeUlLR2c2cHovV2FnQ3pMUDlZdGpkMFRsOFVOSjFYSDJNMWdGbVdmd3piR3pxdkxncWF6bTJQdGhyQUxNcy9tdTBObmRzV0JVM245MGRiRFdDVzVSL045b2JPNzR1Q3Btc3NvNndHTU12eWoySjdROWRZUkVIVGRhWVJWZ09ZWmZsSHNMMmg2MHlpb09sYUd3MjNHc0FzeXorYzdRMWRheElGVGRmY2hvY0tkRmc0WGZJWnh2WkdkTTFOY08zdExnUGRMd0pjYlc2bCtaWG1WNXRmYlg1UjBHcVhBTlRtVjV0ZmJYNjErVVZCcTEwalVwdmZ6UHhLODZ2TnJ6YS9LR2kxaTBCcTg1dVpYMmwrdGZuVjVoY0ZyWGFWVUcxK00vTXJ6Vy9GL0paZEpsUzdEcXMydjVuNWxlWlhtMTl0Zml2dnc1cDVwVmx0ZmpQeks4MnZOci9hL0ZiZWFWYTdsNjgydjVuNWxlWlhtMTl0Zml2dk5hdjlNS0EydjVuNWxlWlhtMTl0Zml0L0dGRDdhVUp0ZmpQeks4MnZOci9hL0ZiK05QRlAvV1hrYjRMajVCaGk3VDRyQUFBQUFFbEZUa1N1UW1DQw==",NU="data:image/png;base64,aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBRStFbEVRVlI0bk8yYWVVeFRWeHpITDZnZ0lpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3EvdkU3K1UxZjcrdTl2TmNXbWs3eVRacWVjKy81Zk0vdi9NN3Z2RnNtMC8veVh5cVR5UlJzTW0weG1iYWJUT0VtMHdHVDZaREpkTXhrT21FeW5US1p6cGhNNTAybVN5YlRGWlBwcXNsMDNXUzZZVExkTkpuQ1RLWnRKdE5XazJuelB3R0l5V1JhWmpMdE01bHVtc0pOcGlpVDZaSEo5TlJrZW1ZeXZiQWd6OWk3ajlpOVVlem1QcnR6ejJUYWJ6SXRNNWtXL0JQQXpEV1p0cHBNRjB5bUpBWVlLMDlNcGdTVDZhTEpGR0l5YlRXWlZySzcvNXJNTjVuMm1renhERENqSkpwTTEweW12U2JUUnBOcHFjbTB5R1JheU40dFl1OHVaZTJpMlIwSDJaMVJ6T2E4eVZLVEtjUmtpbUdBR1NXUFRhWW9rK21ZeWJUZFpGcHBNaTAxbVJheGQwdll1NnRZdTJoMngwRjJaeFN6T1creTBXUTZ3Z0I3WVRMZE1abjJtRXpyVEtaRmZnTmlCZlJpZHZjZWR1Y2RkdWNlczJuVmVJQmVZekxkWm9BL01abk9ta3liVEtZbGZnTmlCZlFTZHZkWmR2ZHRrMm5OZUlCZWJUTGRZb0EvTkpsT20wd2JUYVlsZmdOaUJmUVNkdmRwZHZjdGsybjFXRUJ2TUpsdU1zQ1NUS1pUSnRONmsybXgzNEJZQWIyWTNYMkszWjFrTW0wWUMrajFKdE5OQnRoOWsrbUV5YlRPWkZya055QldRQzlpZDU5Z2Q5ODBtZGFQQmZRNmsra0dBK3lleVhUY1pGcHJNaTMwR3hBcm9CZXl1NCt6dTIrWVRPdkdBbnF0eVhTZEFYYlhaRHBtTXEweG1SYjREWWdWMEF2WTNjZlkzZGROcHJWakFiM0daTHJHQUx0ak1oMDFtVmFiVFBQOUJzUUs2UG5zN3FQczdtc20wNXF4Z0Y1dE1sMWxnTjAybVk2WVRLdE1wbmwrQTJJRjlEeDI5MUYyOXpXVGFiVlJvRmVaVEZjWVlMZE1wc01tMDBxVGFhN2ZnRmdCUFpmZGZaamRmY1ZrV21VVTZKVW0wMlVHMkUyVDZaREp0TUprbXVNM0lGWkFMMkYzSDJKM1h6YVpWaG9GZW9YSmRJa0Jkc05rT21neXJUQ1padnNOaUJYUXM5bmRCOW5kbDB5bUZVYUJYbTR5WFdTQVhUZVpEcGhNeTAybVdYNERZZ1gwTEhiM0FYYjNSWk5wdVZHZ2w1bE1GeGhnMTB5bWZTYlRNcE5wcHQrQVdBRTlrOTI5ajkxOXdXUmFaaFRvSlNiVGVRWllyTW0wMTJSYWFqTE44QnNRSzZCbnNMdjNzcnZQbTB4TGpBSzkyR1E2eHdDTE1abjJtRXhMVEticGZnTmlCZlIwZHZjZWRqZTllN0ZSb0JlYlRHY1pZTkVtMDI2VGFiSEpOTTF2UUt5QW5zYnUzczN1UG1zeUxUWUs5Q0tUNlF3RDdKSEp0TXRrV21ReVRmVWJFQ3VncDdLN2Q3Rzd6NWhNaTR3Q3ZkQmtPczBBZTJneTdUU1pGcHBNVS93R3hBcm9LZXp1OEliMnRNbTAwQ2pRQzB5bVV3eXcreWJURHBOcGdjazAyVzlBcklDZXpPN2V3ZTQrWlRJdE1BcjBmSlBwSkFNc3ltVGFiakxOTjVrbStRMklGZENUMk4zYjJkMG5UYWI1Um9HZVp6S2RZSUJGbWt6YlRLWjVKdE5FdndHeEFucWlDY0xaM1NkTXBubEdnWjVyTWgxbmdFV1lURnROcHJrbVU0RGZnRmdCSGNEdTNzcnVQbTR5elRVSzlCeVQ2UmdETE54azJtSXl6VEdaeHZzTmlCWFE0OW5kVzlqZHgweW11VWFCbm0weUhXV0FoWmxNbTAybTJTYlRPTDhCc1FKNkhMdDdNN3Y3cU1rMDJ5alFzMHltSXd5d1VKTnBrOGsweTJRYTZ6Y2dWa0NQWlhkdlluY2ZNWmxtR1FWNnBzbDBtQUVXWWpKdE5KbG1ta3hqL0FiRUN1Z3g3TzZON083REp0Tk1vMERQTUprT01jQTJtRXd6VEtiUmZnTmlCZlJvZHZjR2R2Y2hrMm1HVWFDbm0wd0hHV0RyVGFacEp0TW92d0d4QW5xVUNkYXp1L2ViVE5PTkFqM05aRHJBQVB2VlpKcHFNbzMwR3hBcm9FZXl1MzlsZCs4M21hWWFCWHFxeWJTUEFiYmVaSnBpTW8zd0d4QXJvRWV3dTlleHUvZVpURk9NQWozRlpOckxBRnRuTWswMm1jYi9KMzhaK1JzSk1yMWxNc1hLR0FBQUFBQkpSVTVFcmtKZ2dnPT0=",G_="data:image/png;base64,aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBRlVFbEVRVlI0bk8yYWUweFRWeHpITC9oSWxtVlpsajN5UjdJc3k3SXN5N0lzeTdJc3k3SXN5N0lzeTdJc3k1STlzaVVteTVKbFdaWmxXYlprV1pabFdSN1pJMW15UjdJc3k1STlzaVVqd3pHSGM0ZzZoM000TitjVUVSRVJCQlFRRUJEay9RQUVFVUVRRUJRRXZyL2tsOTdlZTgvOW5NLzluZC81M1h0YVVQQmYraThWQk1ZUTJFcGdGNEV3QXZzSkhDSnduTUJKQW1jSW5DTndnY0FsQXBjSlhDVnduY0FOQXVFRXRoRVlRR0RrZndGSUJJRUZCUFlTdUVpZ2trQTlnVllDUFFUNkNRd1JHTFlnUSt6WlZ2WnVOYk1Sem16MkV0aERZQUdCc1pNQmpNQWlBb2NKWENQUWFRQ01seDRDZFFTdUVEaExZRGVCaFd6c1NSTUNTd21jSUZEREFCaUZkQk9vSm5DS3dHWUNTd2pNSlRDTHdFejJiQlo3dHBTMWkyWmpuR0JqMUppTk9Xa3lTV0FyZ1RvR3hDTUNsd2pzSXJDYXdMUkpBOExHbk03bU9zOXNwREdiV3ljSzlGd0NSeGhZenduY0kzQ1V3RW9DTS93R3hBSFFNOWpjUjVtdEI4ejJFUUt6SndMMEdnSzNHY0FQQ0p3bXNOWnZRQnlVZnkyemZaclp2a05nelhpQXJpSlF3UUIrVE9BUWdjVitBK0tnZkl1WjdVTnNEUlVFVm8wRjlDWUNOeG5BRHduc0lMREFiMEFja21NQlc4Tk90cGFiQkRiNUN2cGpBcFZzOGdjRXR2a05pSXZ5Ym1OcnFXUnI5QXI2UXdJbGJOSkl2d0c1S0g4a1cxTUpXNnRIMEI4UUtHYVRIdk1ia0lmeUgyTnJLMlpyZGd2NlBRS0ZiSkpEZmdQeVVQNURiSTJGYk8xdVFiL0xCdDd2TndBZjVOL1Axdnl1SjlDdnNZSFArQTNBUi9uUHNEVy81ZzcweTJ6Z1UzNEQ4RkgrVTJ6Tkw3c0QvU0liK0lUZkFIeVUvd1JiODR2dVFEL1BCajdtTndBZjVUL0cxdnk4TzlEUDJZT3pmZ1B3VWY2emJNM1B1UVA5akQwNDZ6Y0FIK1UveTliOGpEdlFUOW1EczM0RDhGSCtzMnpOVDdrRC9ZUTlPT3MzQUIvbFA4dlcvSVE3MEkvWmc3TitBL0JSL3JOc3pZKzVBLzJJUFRqak53QWY1VC9EMXZ5SU85Q1AySVBUZmdQd1VmN1RiTTJQdUFNOXdCNmM4aHVBai9LZlltc2VjQWU2bnowNDdqY0FIK1UvenRiYzd3NTBIM3R3MUc4QVBzcC9sSzI1engzb1h2YmdpTjhBZkpUL0NGdHpyenZRUGV6QlliOEIrQ2ovWWJibUhuZWdlOWlEUTM0RDhGSCtRMnpOUGU1QWQ3TUhCLzBHNEtQOEI5bWF1OTJCN21JUER2Z053RWY1RDdBMWQ3a0QzY2tlUlBnTndFZjVJOWlhdTl5QjdtQVB3djBHNEtQODRXek5IZTVBdDdNSGUvMEc0S1A4ZTltYTI5MkJibU1QOXZnTndFZjU5N0ExdDdrRDNjb2U3UFliZ0kveTcyWnJiblVIdW9VOTJPVTNBQi9sMzhYVzNPSU9kRE43c05OdkFEN0t2NU90dWRrZGFEcndkcjhCK0NqL2RyWm1PdkRtRnZRbTltQ2Izd0I4bEg4YlczT1RPOUNON01GV3Z3SDRLUDlXdHVaR2Q2QWIySU10ZmdQd1VmNHRiTTBON2tEWHN3ZWIvUWJnby95YjJacnIzWUd1WXc4MitRM0FSL2szc1RYWHVRTmR5eDVzOUJ1QWovSnZaR3V1ZFFlNmhqMVk3emNBSCtWZno5WmM0dzUwTlh1d3ptOEFQc3EvanEyNTJoM29LdlpncmQ4QWZKUi9MVnR6bFR2UWxlekJHcjhCK0NqL0dyYm1TbmVnSzlpRDFYNEQ4RkgrMVd6TkZlNUFsN01IcS93RzRLUDhxOWlheTkyQkxtTVBWdm9Od0VmNVY3STFsN2tEWGNvZXJQQWJnSS95cjJCckxuVUh1b1E5V080M0FCL2xYODdXWE9JT2RERjdzTXh2QUQ3S3Y0eXR1VmdYOUFoN3NNUnZBRDdLdjRTdGVVUVh0TUllTFBZYmdJL3lMMlpyVm5SQksrekJJcjhCK0NqL0lyWm1SUmUwd2g0czlCdUFqL0l2Wkd0V2RFRXI3TUVDdndINEtQOEN0bVpGRjdUQ0hzejNHNENQOHM5bmExWjBRU3Zzd1R5L0FmZ28venkyWmtVWHRNSWV6UFViZ0kveXoyVnJWblJCSyt6QkhMOEIrQ2ovSExabVJSZTB3aDdNOWh1QWovTFBabXRXZEVFcjdNRXN2d0g0S1A4c3RtWkZGN1RDSHN6MEc0Q1A4czlrYTFaMFFTdnN3WXovNUM4amZ3TzdiTDFsSkV0VmJBQUFBQUJKUlU1RXJrSmdnZz09";function CU(){const a=ty(),[e,n]=ie.useState(null),[r,o]=ie.useState(""),[u,d]=ie.useState(""),[h,g]=ie.useState(!1),p=[{question:"What makes ASPL Fusion's approach unique?",answer:"Unlike conventional fusion startups focused solely on electricity generation, we pursue a phased commercialization strategy. Our initial focus on medical isotope production provides immediate revenue while systematically de-risking our path to grid-scale fusion power."},{question:"When will ASPL Fusion achieve commercial fusion energy?",answer:"Our roadmap targets medical isotope production by 2028, industrial heat applications by 2032, hydrogen production by 2035, and grid-scale electricity by 2040. Each phase generates revenue and validates our technology progressively."},{question:"How does magnetic mirror technology differ from tokamaks?",answer:"Magnetic mirrors offer simpler linear geometry compared to tokamaks' complex toroidal design. This enables easier construction, maintenance, and scalability while achieving fusion conditions suitable for our phased applications."},{question:"What are the investment opportunities with ASPL Fusion?",answer:"We offer strategic partnerships across our development phases. Early investors benefit from our near-term revenue streams while positioning for the transformative potential of commercial fusion energy. Contact us to discuss investment opportunities."},{question:"How does ASPL Fusion contribute to India's energy security?",answer:"By developing domestic fusion capabilities, we reduce India's dependence on imported fossil fuels and provide a path to energy sovereignty. Our technology will enable India to lead in the global clean energy transition."},{question:"What safety measures are implemented in fusion technology?",answer:"Fusion is inherently safe - reactions stop immediately if conditions aren't maintained, producing no long-lived radioactive waste. Our facilities incorporate multiple safety systems exceeding international standards for radiation protection."}],v=S=>{n(e===S?null:S)},x=S=>{S.preventDefault(),console.log("Searching for:",r)},y=S=>{S.preventDefault(),u&&(g(!0),setTimeout(()=>g(!1),3e3))};return c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"hero",id:"hero-section",children:[c.jsx(RU,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:1e3,autoRampDuration:.6}),c.jsxs("div",{className:"hero-content container",children:[c.jsx("h1",{id:"hero-headline",children:"A Pragmatic Path to India's Energy Sovereignty"}),c.jsx("p",{className:"subtitle",children:"ASPL Fusion is commercializing fusion technology through a disciplined, phased approach that ensures financial viability and systematic de-risking at every stage."}),c.jsx("form",{className:"hero-search",onSubmit:x,children:c.jsxs("div",{className:"search-input-group",children:[c.jsx("input",{type:"text",placeholder:"Search our technology, applications, or news...",value:r,onChange:S=>o(S.target.value),className:"search-input"}),c.jsx("button",{type:"submit",className:"search-button",children:c.jsx("i",{className:"fas fa-search"})})]})}),c.jsx(Pe,{children:c.jsx(sn,{to:"/roadmap",className:"cta-button",children:"Explore Our Strategy"})})]})]}),c.jsx("section",{className:"content-section p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"content-wrapper",children:[c.jsxs("div",{className:"content-text",children:[c.jsx("h2",{children:"Solving Critical National Challenges"}),c.jsx("p",{children:"India faces converging crises in healthcare, energy, and industrial competitiveness. ASPL Fusion's phased approach addresses each systematically, generating value while advancing toward our ultimate goal of clean, abundant fusion power."}),c.jsx("p",{children:"Our technology platform enables multiple revenue streams across medical isotopes, industrial heat, hydrogen production, and eventually grid-scale electricity—each phase funding the next while serving critical national needs."}),c.jsx(Pe,{children:c.jsx(sn,{to:"/applications",className:"learn-more-button",children:"Explore Applications"})})]}),c.jsx("div",{className:"content-image",children:c.jsx("img",{src:k_,alt:"Medical Isotope Production"})})]})})}),c.jsx("section",{className:"content-section alternate p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"content-wrapper",children:[c.jsx("div",{className:"content-image",children:c.jsx("img",{src:G_,alt:"Fusion Technology"})}),c.jsxs("div",{className:"content-text",children:[c.jsx("h2",{children:"Revolutionary Technology, Practical Execution"}),c.jsx("p",{children:"Our magnetic mirror approach offers distinct advantages over traditional tokamak designs—simpler construction, easier maintenance, and modular scalability. This enables us to start small, prove viability, and scale systematically."}),c.jsx("p",{children:"By focusing on near-term applications that don't require electricity generation, we can validate our technology, generate revenue, and build operational expertise years before our competitors."}),c.jsx(Pe,{children:c.jsx(sn,{to:"/technology",className:"learn-more-button",children:"Learn About Our Technology"})})]})]})})}),c.jsx("section",{className:"faq-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Frequently Asked Questions"}),c.jsx("div",{className:"faq-grid",children:p.map((S,T)=>c.jsxs("div",{className:"faq-item card-electric",children:[c.jsxs("button",{className:"faq-toggle",onClick:()=>v(T),"aria-expanded":e===T,children:[c.jsx("h3",{children:S.question}),c.jsx("i",{className:`fas fa-${e===T?"minus":"plus"}`})]}),c.jsx("div",{className:`faq-content ${e===T?"":"hidden"}`,children:c.jsx("p",{children:S.answer})})]},T))})]})}),c.jsx("section",{className:"stats-section",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"ASPL Fusion by the Numbers"}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs(Pe,{className:"stat-card",as:"div",children:[c.jsx("div",{className:"stat-number",children:c.jsx(Yi,{end:2025,duration:2e3})}),c.jsx("div",{className:"stat-label",children:"Founded"})]}),c.jsxs(Pe,{className:"stat-card",as:"div",children:[c.jsx("div",{className:"stat-number",children:c.jsx(Yi,{end:4,duration:2e3})}),c.jsx("div",{className:"stat-label",children:"Development Phases"})]}),c.jsxs(Pe,{className:"stat-card",as:"div",children:[c.jsx("div",{className:"stat-number",children:c.jsx(Yi,{end:2028,duration:2e3})}),c.jsx("div",{className:"stat-label",children:"First Commercial Product"})]}),c.jsxs(Pe,{className:"stat-card",as:"div",children:[c.jsx("div",{className:"stat-number",children:c.jsx(Yi,{end:100,suffix:"%",duration:2e3})}),c.jsx("div",{className:"stat-label",children:"Indian Innovation"})]})]})]})}),c.jsx("section",{className:"case-studies-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Strategic Focus Areas"}),c.jsxs("div",{className:"case-studies-grid",children:[c.jsxs("div",{className:"case-study-card card-electric",onClick:()=>a("/casestudies"),children:[c.jsx("h3",{children:"Medical Isotope Production"}),c.jsx("p",{children:"Addressing India's complete dependence on imported medical isotopes while generating immediate revenue through our Phase 1 commercial deployment."}),c.jsx("span",{className:"read-more",children:"Read Case Study →"})]}),c.jsxs("div",{className:"case-study-card card-electric",onClick:()=>a("/casestudies"),children:[c.jsx("h3",{children:"Clean Energy Transition"}),c.jsx("p",{children:"Providing a pragmatic pathway to replace fossil fuels with clean, abundant fusion power through systematic technology development and commercialization."}),c.jsx("span",{className:"read-more",children:"Read Case Study →"})]})]})]})}),c.jsx("section",{className:"mission-preview-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Our Phased Approach"}),c.jsxs("div",{className:"mission-phases-grid",children:[c.jsxs("div",{className:"mission-phase-card card-electric",onClick:()=>a("/mission"),children:[c.jsx("div",{className:"phase-icon",children:c.jsx("i",{className:"fas fa-vial"})}),c.jsx("h3",{children:"Phase 1: Medical Isotopes"}),c.jsx("p",{children:"Establishing commercial viability through critical healthcare applications while validating our core technology."})]}),c.jsxs("div",{className:"mission-phase-card card-electric",onClick:()=>a("/mission"),children:[c.jsx("div",{className:"phase-icon",children:c.jsx("i",{className:"fas fa-bolt"})}),c.jsx("h3",{children:"Phase 4: Grid Power"}),c.jsx("p",{children:"Achieving our ultimate goal of providing clean, unlimited electricity to power India's sustainable future."})]})]})]})}),c.jsx("section",{className:"technology-preview-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Core Technology Advantages"}),c.jsxs("div",{className:"tech-features-grid",children:[c.jsxs("div",{className:"tech-feature-card card-electric",onClick:()=>a("/technology"),children:[c.jsx("img",{src:G_,alt:"GDT Device"}),c.jsx("h3",{children:"Magnetic Mirror Design"}),c.jsx("p",{children:"Simpler linear geometry enabling easier construction and maintenance"})]}),c.jsxs("div",{className:"tech-feature-card card-electric",onClick:()=>a("/technology"),children:[c.jsx("img",{src:NU,alt:"Neutron Source"}),c.jsx("h3",{children:"Versatile Neutron Source"}),c.jsx("p",{children:"Multiple applications from medical isotopes to transmutation"})]}),c.jsxs("div",{className:"tech-feature-card card-electric",onClick:()=>a("/technology"),children:[c.jsx("img",{src:k_,alt:"Modular Design"}),c.jsx("h3",{children:"Modular Scalability"}),c.jsx("p",{children:"Progressive scaling from pilot plants to commercial facilities"})]})]})]})}),c.jsx("section",{className:"visual-showcase-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Visualizing the Future"}),c.jsxs("div",{className:"showcase-grid",children:[c.jsxs("div",{className:"showcase-item card-electric",children:[c.jsx("img",{src:H1,alt:"Fusion Reactor Visualization"}),c.jsx("h3",{children:"Next-Generation Fusion Reactor"}),c.jsx("p",{children:"Our magnetic mirror design represents a breakthrough in fusion engineering"})]}),c.jsxs("div",{className:"showcase-item card-electric",children:[c.jsx("img",{src:wU,alt:"Medical Isotope Production"}),c.jsx("h3",{children:"Medical Isotope Production"}),c.jsx("p",{children:"Reliable domestic production of critical medical radioisotopes"})]})]})]})}),c.jsx("section",{className:"newsletter-section p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"newsletter-content",children:[c.jsx("h2",{children:"Stay Updated"}),c.jsx("p",{children:"Get the latest news and updates about fusion technology and ASPL Fusion's progress."}),c.jsxs("form",{className:"newsletter-form",onSubmit:y,children:[c.jsxs("div",{className:"newsletter-input-group",children:[c.jsx("input",{type:"email",placeholder:"Enter your email address",value:u,onChange:S=>d(S.target.value),className:"newsletter-input",required:!0}),c.jsx(Pe,{as:"button",type:"submit",className:"newsletter-button",children:"Subscribe"})]}),h&&c.jsxs("div",{className:"newsletter-success",children:[c.jsx("i",{className:"fas fa-check-circle"}),c.jsx("span",{children:"Thank you for subscribing!"})]})]})]})})}),c.jsx("section",{className:"contact-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-4",children:"Get in Touch"}),c.jsx("p",{className:"contact-intro text-center mb-8",children:"Join us in building India's energy future. Whether you're an investor, partner, or simply curious about our technology, we'd love to hear from you."}),c.jsxs("form",{id:"homepage-contact-form",className:"contact-form",action:"https://formspree.io/f/mwkgrgqg",method:"POST",children:[c.jsx("input",{type:"hidden",name:"_subject",value:"New inquiry from ASPL Fusion website"}),c.jsx("input",{type:"hidden",name:"_next",value:"https://dugy-jha.github.io/?success=true"}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"name",children:"Name"}),c.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"email",children:"Email"}),c.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"organization",children:"Organization"}),c.jsx("input",{type:"text",id:"organization",name:"organization"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"interest",children:"Area of Interest"}),c.jsxs("select",{id:"interest",name:"interest",required:!0,children:[c.jsx("option",{value:"",children:"Select an area"}),c.jsx("option",{value:"investment",children:"Investment Opportunities"}),c.jsx("option",{value:"partnership",children:"Strategic Partnership"}),c.jsx("option",{value:"careers",children:"Career Opportunities"}),c.jsx("option",{value:"technology",children:"Technology Information"}),c.jsx("option",{value:"media",children:"Media Inquiry"}),c.jsx("option",{value:"other",children:"Other"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"message",children:"Message"}),c.jsx("textarea",{id:"message",name:"message",rows:"5",required:!0})]}),c.jsx("button",{type:"submit",className:"cta-button electric-border",children:c.jsx("span",{className:"electric-border-content",children:"Send Message"})})]})]})})]})}function DU(){const a=ci();return ie.useEffect(()=>{if(a.hash){const e=document.querySelector(a.hash);e&&e.scrollIntoView({behavior:"smooth"})}},[a]),c.jsxs("div",{className:"mission-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Our Mission"}),c.jsx("p",{className:"hero-subtitle",children:"Pioneering a pragmatic path to commercial fusion energy through systematic innovation and disciplined execution"})]})}),c.jsx("section",{className:"mission-content p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"mission-intro",children:[c.jsx("h2",{children:"Energy Independence Through Innovation"}),c.jsx("p",{children:"ASPL Fusion is committed to pioneering a pragmatic path to commercial fusion energy, focusing first on critical applications that generate near-term value while progressively advancing toward clean, abundant power for India and beyond."}),c.jsxs("div",{className:"mission-quote",children:[c.jsx("blockquote",{children:`"We believe that securing India's energy future requires both technological ambition and commercial realism. Our phased approach ensures that every milestone delivers real value to stakeholders."`}),c.jsx("cite",{children:"— Dr. A. K. Jha, Founder & CEO"})]}),c.jsx("h3",{children:"Energy Independence for India"}),c.jsx("p",{children:"As India's economy grows exponentially, so does our energy demand. Despite ambitious renewable energy targets, our nation will continue to rely heavily on imported fossil fuels for decades without transformative technologies. Fusion energy represents the ultimate solution—clean, safe, and virtually limitless power that can be generated domestically, freeing India from energy dependencies and the volatility of global energy markets."}),c.jsxs("div",{className:"mission-stats",children:[c.jsxs("div",{className:"stat-box",children:[c.jsxs("h4",{children:[c.jsx("span",{className:"count-up","data-value":"85",children:"85"}),"%"]}),c.jsx("p",{children:"Of India's oil is imported, creating economic and strategic vulnerabilities"})]}),c.jsxs("div",{className:"stat-box",children:[c.jsxs("h4",{children:[c.jsx("span",{className:"count-up","data-value":"3",children:"3"}),"×"]}),c.jsx("p",{children:"Projected increase in India's energy demand by 2050"})]}),c.jsxs("div",{className:"stat-box",children:[c.jsxs("h4",{children:["₹",c.jsx("span",{className:"count-up","data-value":"12",children:"12"}),"+ Trillion"]}),c.jsx("p",{children:"Annual cost of energy imports to India's economy"})]})]}),c.jsx("h3",{children:"A Disciplined Approach to Innovation"}),c.jsx("p",{children:"Unlike many fusion startups that focus solely on the long-term goal of electricity production, ASPL Fusion has developed a four-phase strategy that builds value at each stage:"}),c.jsxs("div",{className:"mission-phases",children:[c.jsxs("div",{className:"phase",id:"phase1",children:[c.jsx("div",{className:"phase-number",children:"1"}),c.jsxs("div",{className:"phase-content",children:[c.jsx("h4",{children:"Medical Isotope Production"}),c.jsx("p",{children:"Addressing critical shortages in medical diagnostics and treatment while validating our core technology"})]})]}),c.jsxs("div",{className:"phase",id:"phase2",children:[c.jsx("div",{className:"phase-number",children:"2"}),c.jsxs("div",{className:"phase-content",children:[c.jsx("h4",{children:"Industrial Heat Applications"}),c.jsx("p",{children:"Providing clean process heat for industries like steel, cement, and chemicals"})]})]}),c.jsxs("div",{className:"phase",id:"phase3",children:[c.jsx("div",{className:"phase-number",children:"3"}),c.jsxs("div",{className:"phase-content",children:[c.jsx("h4",{children:"Hydrogen Production"}),c.jsx("p",{children:"Generating green hydrogen at scale for transportation and industrial applications"})]})]}),c.jsxs("div",{className:"phase",id:"phase4",children:[c.jsx("div",{className:"phase-number",children:"4"}),c.jsxs("div",{className:"phase-content",children:[c.jsx("h4",{children:"Grid-Scale Electricity"}),c.jsx("p",{children:"Delivering clean, baseload power to accelerate India's transition to sustainable energy"})]})]})]}),c.jsx("h3",{children:"Building on Proven Science"}),c.jsx("p",{children:"Our magnetic mirror approach leverages decades of fusion research combined with recent breakthroughs in superconducting magnets, plasma physics, and computational modeling. By focusing on simpler geometry and modular design, we can achieve commercial viability years ahead of more complex approaches."}),c.jsxs("div",{className:"key-advantages",children:[c.jsx("h3",{children:"Key Strategic Advantages"}),c.jsxs("ul",{children:[c.jsxs("li",{children:[c.jsx("strong",{children:"Revenue Generation:"})," Each phase produces marketable products, ensuring financial sustainability"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Risk Mitigation:"})," Progressive scaling allows us to validate technology at each stage"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Market Creation:"})," Building supply chains and customer relationships before grid-scale deployment"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Talent Development:"})," Growing operational expertise through real-world applications"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Stakeholder Value:"})," Delivering returns to investors while advancing toward transformative impact"]})]})]}),c.jsx("h3",{children:"Committed to India's Future"}),c.jsx("p",{children:"ASPL Fusion is more than a technology company—we're nation builders. Our success will be measured not just in financial returns but in our contribution to India's energy security, industrial competitiveness, and global leadership in clean technology."}),c.jsx("p",{children:"We invite visionary investors, strategic partners, and exceptional talent to join us in this mission. Together, we can ensure that India leads the global transition to fusion energy, creating prosperity for generations to come."})]})})})]})}function UU(){const a=ci(),[e,n]=ie.useState("overview");return ie.useEffect(()=>{if(a.hash){const r=document.querySelector(a.hash);r&&r.scrollIntoView({behavior:"smooth"})}},[a]),c.jsxs("div",{className:"technology-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Our Technology"}),c.jsx("p",{className:"hero-subtitle",children:"Revolutionary magnetic mirror fusion design optimized for commercial applications"})]})}),c.jsx("section",{className:"tech-overview p-8",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"tech-intro",children:[c.jsx("h2",{children:"Breaking Through Complexity"}),c.jsx("p",{children:"ASPL Fusion is pioneering advanced magnetic mirror technology that represents a compelling alternative to traditional tokamak designs. By leveraging recent advances in superconducting magnets, plasma physics, and digital control systems, our approach offers significant advantages in constructability, maintainability, and scalability."})]}),c.jsxs("div",{className:"tech-tabs",children:[c.jsxs("div",{className:"tab-buttons",children:[c.jsx("button",{className:`tab-button ${e==="overview"?"active":""}`,onClick:()=>n("overview"),children:"Overview"}),c.jsx("button",{className:`tab-button ${e==="components"?"active":""}`,onClick:()=>n("components"),children:"Components"}),c.jsx("button",{className:`tab-button ${e==="advantages"?"active":""}`,onClick:()=>n("advantages"),children:"Advantages"}),c.jsx("button",{className:`tab-button ${e==="timeline"?"active":""}`,onClick:()=>n("timeline"),children:"Timeline"})]}),c.jsxs("div",{className:"tab-content",children:[e==="overview"&&c.jsxs("div",{className:"tab-panel",children:[c.jsx("h3",{children:"Technology Overview"}),c.jsx("p",{children:"Our magnetic mirror approach leverages decades of fusion research combined with recent breakthroughs in superconducting magnets, plasma physics, and computational modeling."}),c.jsxs("div",{className:"tech-stats",children:[c.jsxs("div",{className:"tech-stat",children:[c.jsx(Yi,{end:75,suffix:"%",duration:2e3}),c.jsx("span",{children:"Construction Cost Reduction"})]}),c.jsxs("div",{className:"tech-stat",children:[c.jsx(Yi,{end:90,suffix:"%",duration:2e3}),c.jsx("span",{children:"Maintenance Time Reduction"})]}),c.jsxs("div",{className:"tech-stat",children:[c.jsx(Yi,{end:3,suffix:"x",duration:2e3}),c.jsx("span",{children:"Faster Deployment"})]})]})]}),e==="components"&&c.jsxs("div",{className:"tab-panel",children:[c.jsx("h3",{children:"Core Components"}),c.jsxs("div",{className:"components-list",children:[c.jsxs("div",{className:"component-item",children:[c.jsx("i",{className:"fas fa-magnet"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Superconducting Magnets"}),c.jsx("p",{children:"High-temperature superconducting magnets for efficient plasma confinement"})]})]}),c.jsxs("div",{className:"component-item",children:[c.jsx("i",{className:"fas fa-fire"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Plasma Heating Systems"}),c.jsx("p",{children:"Advanced neutral beam injection and RF heating systems"})]})]}),c.jsxs("div",{className:"component-item",children:[c.jsx("i",{className:"fas fa-cogs"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Control Systems"}),c.jsx("p",{children:"AI-powered real-time plasma control and optimization"})]})]})]})]}),e==="advantages"&&c.jsxs("div",{className:"tab-panel",children:[c.jsx("h3",{children:"Key Advantages"}),c.jsxs("div",{className:"advantages-list",children:[c.jsxs(Pe,{className:"advantage-item",as:"div",children:[c.jsx("h4",{children:"Modular Design"}),c.jsx("p",{children:"Linear geometry enables straightforward assembly and maintenance"})]}),c.jsxs(Pe,{className:"advantage-item",as:"div",children:[c.jsx("h4",{children:"Scalable Architecture"}),c.jsx("p",{children:"Incremental capacity additions through linear extension"})]}),c.jsxs(Pe,{className:"advantage-item",as:"div",children:[c.jsx("h4",{children:"Multi-Application Platform"}),c.jsx("p",{children:"Versatile neutron production for diverse commercial applications"})]})]})]}),e==="timeline"&&c.jsxs("div",{className:"tab-panel",children:[c.jsx("h3",{children:"Development Timeline"}),c.jsxs("div",{className:"timeline",children:[c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-year",children:"2025-2026"}),c.jsxs("div",{className:"timeline-content",children:[c.jsx("h4",{children:"Prototype Development"}),c.jsx("p",{children:"Complete engineering design and begin construction"})]})]}),c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-year",children:"2027-2028"}),c.jsxs("div",{className:"timeline-content",children:[c.jsx("h4",{children:"Technology Validation"}),c.jsx("p",{children:"Achieve first plasma and demonstrate neutron production"})]})]}),c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-year",children:"2029-2032"}),c.jsxs("div",{className:"timeline-content",children:[c.jsx("h4",{children:"Commercial Deployment"}),c.jsx("p",{children:"Scale up to commercial isotope production"})]})]})]})]})]})]}),c.jsxs("div",{className:"tech-comparison",children:[c.jsxs("div",{className:"comparison-item",children:[c.jsx("h3",{children:"Traditional Tokamak Approach"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Complex toroidal (donut-shaped) geometry"}),c.jsx("li",{children:"Challenging engineering with limited access to interior components"}),c.jsx("li",{children:"High-stress magnet systems with limited redundancy"}),c.jsx("li",{children:"Primarily focused on electricity generation"}),c.jsx("li",{children:"Typically requires extremely high plasma temperatures"})]})]}),c.jsxs(Pe,{className:"comparison-item highlight-box",as:"div",children:[c.jsx("h3",{children:"ASPL Fusion's Magnetic Mirror"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Linear, modular geometry with simple construction"}),c.jsx("li",{children:"Easy access for maintenance and component replacement"}),c.jsx("li",{children:"Distributed magnet systems with inherent redundancy"}),c.jsx("li",{children:"Versatile platform for multiple applications"}),c.jsx("li",{children:"Operates effectively at moderate plasma conditions"})]})]})]}),c.jsxs("div",{className:"tech-diagram",children:[c.jsx("img",{src:H1,alt:"Magnetic Mirror System Diagram",className:"full-width-image"}),c.jsx("p",{className:"image-caption",children:"Conceptual diagram of ASPL Fusion's magnetic mirror system with key components labeled"})]})]})}),c.jsx("section",{className:"tech-components p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Core Technology Components"}),c.jsxs("div",{className:"components-grid",children:[c.jsxs("div",{className:"tech-component",id:"gdt-device",children:[c.jsx("i",{className:"fas fa-magnet"}),c.jsx("h3",{children:"Advanced Magnet System"}),c.jsx("p",{children:"Our design employs high-temperature superconducting (HTS) magnets arranged in a magnetic mirror configuration. These create a strong magnetic bottle that confines and compresses the plasma. The scalable, modular design allows for progressive upgrades and maintenance without full system shutdown."})]}),c.jsxs("div",{className:"tech-component",id:"neutron-source",children:[c.jsx("i",{className:"fas fa-fire"}),c.jsx("h3",{children:"Plasma Formation & Heating"}),c.jsx("p",{children:"We utilize a combination of neutral beam injection and radio-frequency heating to create and sustain fusion-grade plasma. Our unique approach optimizes plasma stability while minimizing energy input requirements, creating an economically viable fusion system."})]}),c.jsxs("div",{className:"tech-component",id:"modular-design",children:[c.jsx("i",{className:"fas fa-radiation"}),c.jsx("h3",{children:"Neutron Utilization Systems"}),c.jsx("p",{children:"The fusion reactions in our device produce high-energy neutrons that can be captured and utilized for various applications. In our initial phase, these neutrons are used to transmute target materials into valuable medical isotopes like Molybdenum-99."})]})]})]})}),c.jsx("section",{className:"tech-advantages p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Technical Advantages"}),c.jsxs("div",{className:"advantages-grid",children:[c.jsxs(Pe,{className:"advantage-card",as:"div",children:[c.jsx("div",{className:"advantage-icon",children:c.jsx("i",{className:"fas fa-tools"})}),c.jsx("h3",{children:"Simplified Construction"}),c.jsx("p",{children:"Linear geometry enables straightforward assembly using standard industrial processes, reducing construction time and cost by up to 70% compared to toroidal designs."})]}),c.jsxs(Pe,{className:"advantage-card",as:"div",children:[c.jsx("div",{className:"advantage-icon",children:c.jsx("i",{className:"fas fa-cogs"})}),c.jsx("h3",{children:"Modular Scalability"}),c.jsx("p",{children:"Our design allows for incremental capacity additions by extending the linear configuration, enabling phased investment and risk mitigation."})]}),c.jsxs(Pe,{className:"advantage-card",as:"div",children:[c.jsx("div",{className:"advantage-icon",children:c.jsx("i",{className:"fas fa-wrench"})}),c.jsx("h3",{children:"Maintenance Access"}),c.jsx("p",{children:"Direct access to all critical components reduces maintenance time and cost, ensuring higher operational availability and lower lifecycle costs."})]}),c.jsxs(Pe,{className:"advantage-card",as:"div",children:[c.jsx("div",{className:"advantage-icon",children:c.jsx("i",{className:"fas fa-atom"})}),c.jsx("h3",{children:"Multi-Application Platform"}),c.jsx("p",{children:"Versatile neutron production enables diverse revenue streams from medical isotopes to industrial applications before electricity generation."})]})]})]})}),c.jsx("section",{className:"tech-innovation p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Innovation Breakthroughs"}),c.jsxs("div",{className:"innovation-content",children:[c.jsxs("div",{className:"innovation-item",children:[c.jsx("h3",{children:"Advanced Plasma Control"}),c.jsx("p",{children:"Our proprietary control algorithms leverage machine learning to optimize plasma stability in real-time, reducing energy requirements while maintaining fusion conditions. This breakthrough enables economical operation at scales previously thought impossible."})]}),c.jsxs("div",{className:"innovation-item",children:[c.jsx("h3",{children:"Next-Generation Materials"}),c.jsx("p",{children:"We're developing advanced materials for plasma-facing components that can withstand extreme conditions while maintaining structural integrity. These innovations extend operational life and reduce maintenance requirements."})]}),c.jsxs("div",{className:"innovation-item",children:[c.jsx("h3",{children:"Digital Twin Technology"}),c.jsx("p",{children:"Every ASPL Fusion reactor will have a complete digital twin, enabling predictive maintenance, performance optimization, and rapid troubleshooting. This Industry 4.0 approach ensures maximum uptime and efficiency."})]})]})]})}),c.jsx("section",{className:"tech-roadmap p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Technology Development Roadmap"}),c.jsxs("div",{className:"roadmap-timeline",children:[c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-marker",children:"2025-2026"}),c.jsxs("div",{className:"timeline-content",children:[c.jsx("h3",{children:"Prototype Development"}),c.jsx("p",{children:"Complete engineering design and begin construction of proof-of-concept prototype"})]})]}),c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-marker",children:"2027-2028"}),c.jsxs("div",{className:"timeline-content",children:[c.jsx("h3",{children:"Technology Validation"}),c.jsx("p",{children:"Achieve first plasma and demonstrate neutron production for isotope applications"})]})]}),c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-marker",children:"2029-2032"}),c.jsxs("div",{className:"timeline-content",children:[c.jsx("h3",{children:"Commercial Deployment"}),c.jsx("p",{children:"Scale up to commercial isotope production and industrial heat applications"})]})]}),c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-marker",children:"2033-2040"}),c.jsxs("div",{className:"timeline-content",children:[c.jsx("h3",{children:"Grid-Scale Power"}),c.jsx("p",{children:"Develop and deploy fusion reactors for electricity generation"})]})]})]})]})}),c.jsx("section",{className:"tech-cta p-8",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h2",{children:"Partner with Innovation"}),c.jsx("p",{className:"cta-text",children:"Join us in developing the fusion technology that will power humanity's future"}),c.jsx(Pe,{as:"a",href:"/contact",className:"cta-button",children:"Learn More About Our Technology"})]})})]})}function LU(){const a=ci();return ie.useEffect(()=>{if(a.hash){const e=document.querySelector(a.hash);e&&e.scrollIntoView({behavior:"smooth"})}},[a]),c.jsxs("div",{className:"roadmap-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Development Roadmap"}),c.jsx("p",{className:"hero-subtitle",children:"A pragmatic path from proof-of-concept to commercial fusion power"})]})}),c.jsx("section",{className:"roadmap-intro p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"intro-content",children:[c.jsx("h2",{children:"Building Value at Every Stage"}),c.jsx("p",{children:"ASPL Fusion has developed a pragmatic roadmap that balances technological ambition with commercial viability. Our four-phase strategy is designed to generate value at each stage while systematically de-risking our path to grid-scale fusion power."}),c.jsx("p",{children:"This approach allows us to build a sustainable business model, establish operational expertise, and develop supply chains while progressively advancing our core technology."})]})})}),c.jsxs("div",{className:"roadmap-phases",children:[c.jsx("section",{className:"roadmap-phase",id:"phase1",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"phase-header",children:[c.jsx("div",{className:"phase-number",children:"Phase 1"}),c.jsx("h2",{children:"Medical Isotope Production"}),c.jsx("div",{className:"phase-timeframe",children:"2025-2028"})]}),c.jsxs("div",{className:"phase-content",children:[c.jsxs("div",{className:"phase-description",children:[c.jsx("p",{children:"Our initial focus is on developing fusion-based neutron sources for producing critical medical isotopes, particularly Molybdenum-99 (Mo-99), the precursor to Technetium-99m used in over 40 million medical procedures annually worldwide."}),c.jsx("p",{children:"India currently imports 100% of its medical isotopes, creating vulnerabilities in the healthcare system. Our technology will establish domestic production capability, ensuring a stable supply for cancer diagnostics and treatment."})]}),c.jsxs("div",{className:"phase-milestones",children:[c.jsx("h3",{children:"Key Milestones"}),c.jsxs("ul",{className:"milestone-list",children:[c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2025"})," Complete proof-of-concept prototype"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2026"})," Achieve first neutron production"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2027"})," Demonstrate Mo-99 production"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2028"})," Secure regulatory approvals"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2028"})," Begin commercial isotope sales"]})]})]}),c.jsxs("div",{className:"phase-outcomes",children:[c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-check-circle"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Technology Validation"}),c.jsx("p",{children:"Demonstrate our magnetic mirror fusion concept in a commercial application"})]})]}),c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-check-circle"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Initial Revenue"}),c.jsx("p",{children:"Establish sustainable business model with recurring revenue stream"})]})]}),c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-check-circle"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Strategic Value"}),c.jsx("p",{children:"Secure India's medical isotope supply chain for critical healthcare needs"})]})]})]})]})]})}),c.jsx("section",{className:"roadmap-phase",id:"phase2",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"phase-header",children:[c.jsx("div",{className:"phase-number",children:"Phase 2"}),c.jsx("h2",{children:"Industrial Heat Applications"}),c.jsx("div",{className:"phase-timeframe",children:"2029-2032"})]}),c.jsxs("div",{className:"phase-content",children:[c.jsxs("div",{className:"phase-description",children:[c.jsx("p",{children:"Building on our neutron source technology, Phase 2 focuses on providing clean, high-temperature process heat for industrial applications. Industries like steel, cement, and chemicals require temperatures above 1000°C, currently achievable only through fossil fuel combustion."}),c.jsx("p",{children:"Our fusion technology can provide this heat without carbon emissions, helping heavy industries meet their decarbonization goals while maintaining competitiveness."})]}),c.jsxs("div",{className:"phase-milestones",children:[c.jsx("h3",{children:"Key Milestones"}),c.jsxs("ul",{className:"milestone-list",children:[c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2029"})," Scale up fusion reactor design"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2030"})," Pilot deployment with industrial partner"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2031"})," Demonstrate economic viability"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2032"})," Commercial deployments begin"]})]})]}),c.jsxs("div",{className:"phase-outcomes",children:[c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-industry"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Industrial Decarbonization"}),c.jsx("p",{children:"Enable heavy industries to eliminate fossil fuel dependence"})]})]}),c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-chart-line"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Market Expansion"}),c.jsx("p",{children:"Establish presence in multi-billion dollar industrial heat market"})]})]})]})]})]})}),c.jsx("section",{className:"roadmap-phase",id:"phase3",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"phase-header",children:[c.jsx("div",{className:"phase-number",children:"Phase 3"}),c.jsx("h2",{children:"Hydrogen Production"}),c.jsx("div",{className:"phase-timeframe",children:"2033-2035"})]}),c.jsxs("div",{className:"phase-content",children:[c.jsxs("div",{className:"phase-description",children:[c.jsx("p",{children:"Phase 3 leverages our high-temperature fusion systems to produce green hydrogen through thermochemical water splitting. This process is significantly more efficient than electrolysis and can produce hydrogen at costs competitive with fossil fuel-derived hydrogen."}),c.jsx("p",{children:"Green hydrogen is essential for decarbonizing transportation, fertilizer production, and steel manufacturing—sectors that represent over 20% of global emissions."})]}),c.jsxs("div",{className:"phase-milestones",children:[c.jsx("h3",{children:"Key Milestones"}),c.jsxs("ul",{className:"milestone-list",children:[c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2033"})," Integrate hydrogen production systems"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2034"})," Achieve target production costs"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2035"})," Scale to commercial volumes"]})]})]}),c.jsxs("div",{className:"phase-outcomes",children:[c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-leaf"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Green Fuel Economy"}),c.jsx("p",{children:"Enable transition to hydrogen-based transportation and industry"})]})]}),c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-globe"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Export Potential"}),c.jsx("p",{children:"Position India as a global green hydrogen exporter"})]})]})]})]})]})}),c.jsx("section",{className:"roadmap-phase",id:"phase4",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"phase-header",children:[c.jsx("div",{className:"phase-number",children:"Phase 4"}),c.jsx("h2",{children:"Grid-Scale Electricity"}),c.jsx("div",{className:"phase-timeframe",children:"2036-2040"})]}),c.jsxs("div",{className:"phase-content",children:[c.jsxs("div",{className:"phase-description",children:[c.jsx("p",{children:"Our ultimate goal: clean, abundant electricity generation. By Phase 4, we will have proven our technology across multiple applications, established supply chains, developed operational expertise, and built customer relationships."}),c.jsx("p",{children:"Grid-scale fusion power represents the holy grail of clean energy—providing reliable baseload power without carbon emissions, radioactive waste, or resource constraints."})]}),c.jsxs("div",{className:"phase-milestones",children:[c.jsx("h3",{children:"Key Milestones"}),c.jsxs("ul",{className:"milestone-list",children:[c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2036"})," Complete demonstration plant"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2037"})," Grid connection and testing"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2038"})," Achieve competitive LCOE"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2039"})," First commercial plant operational"]}),c.jsxs("li",{children:[c.jsx("span",{className:"milestone-date",children:"2040"})," Multiple deployments underway"]})]})]}),c.jsxs("div",{className:"phase-outcomes",children:[c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-bolt"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Energy Independence"}),c.jsx("p",{children:"Provide India with unlimited clean baseload power"})]})]}),c.jsxs(Pe,{className:"outcome",as:"div",children:[c.jsx("i",{className:"fas fa-trophy"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Global Leadership"}),c.jsx("p",{children:"Establish India as a fusion technology leader"})]})]})]})]})]})})]}),c.jsx("section",{className:"roadmap-cta p-8",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h2",{children:"Join Our Journey"}),c.jsx("p",{className:"cta-text",children:"Partner with us as we build the future of clean energy, one milestone at a time"}),c.jsx(Pe,{as:"a",href:"/contact",className:"cta-button",children:"Explore Partnership Opportunities"})]})})]})}function OU(){return c.jsxs("div",{className:"applications-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Applications"}),c.jsx("p",{className:"hero-subtitle",children:"Transforming industries with versatile fusion technology"})]})}),c.jsx("section",{className:"applications-intro p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"intro-content",children:[c.jsx("h2",{children:"Beyond Electricity: The Power of Versatility"}),c.jsx("p",{children:"While most fusion companies focus solely on electricity generation, ASPL Fusion's magnetic mirror technology enables multiple high-value applications. This versatility allows us to generate revenue years before grid-scale power, systematically de-risking our technology while addressing critical national needs."})]})})}),c.jsx("section",{className:"medical-isotopes p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Medical Isotope Production"}),c.jsxs("div",{className:"application-content",children:[c.jsxs("div",{className:"application-text",children:[c.jsx("h3",{children:"Securing Healthcare's Critical Infrastructure"}),c.jsx("p",{children:"Medical isotopes are essential for diagnosing and treating cancer, heart disease, and other critical conditions. India imports 100% of these isotopes, creating supply vulnerabilities and higher costs for patients."}),c.jsx("p",{children:"ASPL Fusion's neutron-rich environment is ideal for producing Mo-99, the precursor to Tc-99m used in over 80% of nuclear medicine procedures. Our technology can also produce other critical isotopes like Lu-177 for targeted cancer therapy."}),c.jsxs("div",{className:"key-benefits",children:[c.jsx("h4",{children:"Key Benefits"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Domestic production ensures supply security"}),c.jsx("li",{children:"Lower costs through elimination of import logistics"}),c.jsx("li",{children:"Fresher isotopes with higher specific activity"}),c.jsx("li",{children:"Scalable production to meet growing demand"})]})]})]}),c.jsxs("div",{className:"application-stats",children:[c.jsxs(Pe,{className:"stat-box",as:"div",children:[c.jsx("div",{className:"stat-value",children:c.jsx(Yi,{end:40,suffix:"M+",duration:2e3})}),c.jsx("div",{className:"stat-description",children:"Annual procedures globally using Mo-99"})]}),c.jsxs(Pe,{className:"stat-box",as:"div",children:[c.jsx("div",{className:"stat-value",children:c.jsx(Yi,{end:100,suffix:"%",duration:2e3})}),c.jsx("div",{className:"stat-description",children:"Import dependence for medical isotopes in India"})]}),c.jsxs(Pe,{className:"stat-box",as:"div",children:[c.jsx("div",{className:"stat-value",children:c.jsx(Yi,{end:25,suffix:"%",duration:2e3})}),c.jsx("div",{className:"stat-description",children:"Annual growth in nuclear medicine"})]})]})]})]})}),c.jsx("section",{className:"industrial-heat p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Industrial Heat Applications"}),c.jsxs("div",{className:"application-content reverse",children:[c.jsxs("div",{className:"application-text",children:[c.jsx("h3",{children:"Decarbonizing Heavy Industry"}),c.jsx("p",{children:"Industries like steel, cement, and chemicals require temperatures exceeding 1000°C—currently achievable only through fossil fuel combustion. These sectors represent over 20% of global carbon emissions."}),c.jsx("p",{children:"ASPL Fusion's technology can provide clean, high-temperature process heat, enabling these industries to eliminate fossil fuel dependence while maintaining competitiveness."}),c.jsxs("div",{className:"industry-applications",children:[c.jsxs(Pe,{className:"industry-card",as:"div",children:[c.jsx("i",{className:"fas fa-industry"}),c.jsx("h4",{children:"Steel Production"}),c.jsx("p",{children:"Direct reduced iron process using hydrogen from fusion heat"})]}),c.jsxs(Pe,{className:"industry-card",as:"div",children:[c.jsx("i",{className:"fas fa-cube"}),c.jsx("h4",{children:"Cement Manufacturing"}),c.jsx("p",{children:"High-temperature kilns without coal combustion"})]}),c.jsxs(Pe,{className:"industry-card",as:"div",children:[c.jsx("i",{className:"fas fa-flask"}),c.jsx("h4",{children:"Chemical Processing"}),c.jsx("p",{children:"Clean heat for ammonia, methanol, and other chemicals"})]})]})]}),c.jsxs("div",{className:"temperature-chart",children:[c.jsx("h4",{children:"Temperature Requirements by Industry"}),c.jsxs("div",{className:"temp-bars",children:[c.jsxs("div",{className:"temp-bar",children:[c.jsx("span",{className:"industry",children:"Steel"}),c.jsx("div",{className:"bar-container",children:c.jsx("div",{className:"bar",style:{width:"90%"},children:c.jsx("span",{className:"temp",children:"1600°C"})})})]}),c.jsxs("div",{className:"temp-bar",children:[c.jsx("span",{className:"industry",children:"Cement"}),c.jsx("div",{className:"bar-container",children:c.jsx("div",{className:"bar",style:{width:"80%"},children:c.jsx("span",{className:"temp",children:"1450°C"})})})]}),c.jsxs("div",{className:"temp-bar",children:[c.jsx("span",{className:"industry",children:"Glass"}),c.jsx("div",{className:"bar-container",children:c.jsx("div",{className:"bar",style:{width:"85%"},children:c.jsx("span",{className:"temp",children:"1500°C"})})})]}),c.jsxs("div",{className:"temp-bar",children:[c.jsx("span",{className:"industry",children:"Chemicals"}),c.jsx("div",{className:"bar-container",children:c.jsx("div",{className:"bar",style:{width:"60%"},children:c.jsx("span",{className:"temp",children:"1000°C"})})})]})]})]})]})]})}),c.jsx("section",{className:"hydrogen-production p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Hydrogen Production"}),c.jsxs("div",{className:"application-content",children:[c.jsxs("div",{className:"application-text",children:[c.jsx("h3",{children:"Enabling the Hydrogen Economy"}),c.jsx("p",{children:"Green hydrogen is essential for decarbonizing transportation, fertilizer production, and steel manufacturing. Current electrolysis methods are energy-intensive and expensive."}),c.jsx("p",{children:"ASPL Fusion's high-temperature reactors enable thermochemical water splitting—a process that's 3x more efficient than electrolysis, producing hydrogen at costs competitive with fossil fuels."}),c.jsxs("div",{className:"hydrogen-uses",children:[c.jsx("h4",{children:"Key Applications"}),c.jsxs("div",{className:"uses-grid",children:[c.jsxs("div",{className:"use-case",children:[c.jsx("i",{className:"fas fa-truck"}),c.jsx("h5",{children:"Transportation"}),c.jsx("p",{children:"Fuel for trucks, ships, and aircraft"})]}),c.jsxs("div",{className:"use-case",children:[c.jsx("i",{className:"fas fa-seedling"}),c.jsx("h5",{children:"Agriculture"}),c.jsx("p",{children:"Green ammonia for fertilizers"})]}),c.jsxs("div",{className:"use-case",children:[c.jsx("i",{className:"fas fa-cogs"}),c.jsx("h5",{children:"Industry"}),c.jsx("p",{children:"Clean reducing agent for steel"})]}),c.jsxs("div",{className:"use-case",children:[c.jsx("i",{className:"fas fa-battery-full"}),c.jsx("h5",{children:"Energy Storage"}),c.jsx("p",{children:"Long-term renewable energy storage"})]})]})]})]}),c.jsxs("div",{className:"hydrogen-comparison",children:[c.jsx("h4",{children:"Production Method Comparison"}),c.jsxs("table",{className:"comparison-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Method"}),c.jsx("th",{children:"Efficiency"}),c.jsx("th",{children:"Cost ($/kg)"}),c.jsx("th",{children:"Carbon Footprint"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{className:"highlight",children:[c.jsx("td",{children:"Fusion Thermochemical"}),c.jsx("td",{children:"75-80%"}),c.jsx("td",{children:"$1.50-2.00"}),c.jsx("td",{children:"Zero"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Electrolysis (Renewable)"}),c.jsx("td",{children:"65-70%"}),c.jsx("td",{children:"$3.00-6.00"}),c.jsx("td",{children:"Zero"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Steam Methane Reforming"}),c.jsx("td",{children:"65-75%"}),c.jsx("td",{children:"$1.00-2.00"}),c.jsx("td",{children:"High"})]})]})]})]})]})]})}),c.jsx("section",{className:"grid-electricity p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Grid-Scale Electricity"}),c.jsxs("div",{className:"application-content reverse",children:[c.jsxs("div",{className:"application-text",children:[c.jsx("h3",{children:"The Ultimate Goal: Unlimited Clean Power"}),c.jsx("p",{children:"While electricity generation is our Phase 4 target, it represents the most transformative application of fusion technology. Clean, abundant baseload power that can replace fossil fuels entirely."}),c.jsx("p",{children:"Our phased approach means we'll have proven technology, established supply chains, and operational expertise before entering the electricity market—significantly de-risking the investment."}),c.jsxs("div",{className:"electricity-advantages",children:[c.jsxs(Pe,{className:"advantage",as:"div",children:[c.jsx("i",{className:"fas fa-leaf"}),c.jsx("h4",{children:"Zero Carbon"}),c.jsx("p",{children:"No greenhouse gas emissions during operation"})]}),c.jsxs(Pe,{className:"advantage",as:"div",children:[c.jsx("i",{className:"fas fa-infinity"}),c.jsx("h4",{children:"Unlimited Fuel"}),c.jsx("p",{children:"Deuterium from seawater can power civilization for millions of years"})]}),c.jsxs(Pe,{className:"advantage",as:"div",children:[c.jsx("i",{className:"fas fa-shield-alt"}),c.jsx("h4",{children:"Inherently Safe"}),c.jsx("p",{children:"No risk of meltdown or long-lived radioactive waste"})]}),c.jsxs(Pe,{className:"advantage",as:"div",children:[c.jsx("i",{className:"fas fa-chart-line"}),c.jsx("h4",{children:"Baseload Power"}),c.jsx("p",{children:"24/7 reliable electricity independent of weather"})]})]})]}),c.jsxs("div",{className:"power-comparison",children:[c.jsx("h4",{children:"Energy Density Comparison"}),c.jsxs("div",{className:"density-chart",children:[c.jsxs("div",{className:"density-item fusion",children:[c.jsx("span",{className:"source",children:"Fusion (1kg fuel)"}),c.jsx("div",{className:"energy-bar",children:c.jsx("span",{className:"value",children:"90,000,000 kWh"})})]}),c.jsxs("div",{className:"density-item coal",children:[c.jsx("span",{className:"source",children:"Coal (1kg)"}),c.jsx("div",{className:"energy-bar",children:c.jsx("span",{className:"value",children:"8 kWh"})})]}),c.jsxs("div",{className:"density-item natural-gas",children:[c.jsx("span",{className:"source",children:"Natural Gas (1kg)"}),c.jsx("div",{className:"energy-bar",children:c.jsx("span",{className:"value",children:"14 kWh"})})]})]})]})]})]})}),c.jsx("section",{className:"market-opportunity p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Market Opportunity"}),c.jsxs("div",{className:"market-stats",children:[c.jsxs(Pe,{className:"market-stat",as:"div",children:[c.jsx("h3",{children:"$2.5 Trillion"}),c.jsx("p",{children:"Global energy market size"})]}),c.jsxs(Pe,{className:"market-stat",as:"div",children:[c.jsx("h3",{children:"$150 Billion"}),c.jsx("p",{children:"Annual industrial heat market"})]}),c.jsxs(Pe,{className:"market-stat",as:"div",children:[c.jsx("h3",{children:"$10 Billion"}),c.jsx("p",{children:"Medical isotope market by 2030"})]}),c.jsxs(Pe,{className:"market-stat",as:"div",children:[c.jsx("h3",{children:"$500 Billion"}),c.jsx("p",{children:"Projected hydrogen economy by 2030"})]})]})]})}),c.jsx("section",{className:"applications-cta p-8",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h2",{children:"Ready to Transform Your Industry?"}),c.jsx("p",{className:"cta-text",children:"Discover how ASPL Fusion's technology can revolutionize your operations"}),c.jsxs("div",{className:"cta-buttons",children:[c.jsx(Pe,{as:sn,to:"/contact",className:"cta-button",children:"Explore Partnership Opportunities"}),c.jsx(sn,{to:"/technology",className:"learn-more-button",children:"Learn About Our Technology"})]})]})})]})}function PU(){return c.jsxs("div",{className:"casestudies-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Case Studies"}),c.jsx("p",{className:"hero-subtitle",children:"Real-world applications of fusion technology"})]})}),c.jsx("section",{className:"casestudies-content p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"intro-content",children:[c.jsx("h2",{children:"Coming Soon"}),c.jsx("p",{children:"Our case studies will showcase real-world applications and success stories as we progress through our development phases."})]})})})]})}const Hh="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNlMmU4ZjAiLz4KICA8Y2lyY2xlIGN4PSI0MDAiIGN5PSIzMDAiIHI9IjE1MCIgZmlsbD0iIzk0YTNiOCIvPgogIDxjaXJjbGUgY3g9IjQwMCIgY3k9IjgwMCIgcj0iMzUwIiBmaWxsPSIjOTRhM2I4Ii8+CiAgPHRleHQgeD0iNDAwIiB5PSI0NTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ3NTU2OSI+VGVhbSBNZW1iZXI8L3RleHQ+Cjwvc3ZnPg==";function FU(){const a=[{id:1,name:"Dr. Prabhat Ranjan",position:"Director",bio:"Visionary leader with 20+ years in fusion research and commercialization. Previously led fusion programs at leading national laboratories.",image:Hh,linkedin:"https://www.linkedin.com/company/aspl-fusion"},{id:2,name:"Abhay Kumar Jha",position:"Director",bio:"Expert in magnetic confinement fusion with pioneering work in mirror configurations. PhD from IIT Delhi, postdoc at MIT.",image:Hh,linkedin:"https://www.linkedin.com/company/aspl-fusion"},{id:3,name:"Abhinav Jha",position:"Director",bio:"15+ years experience in advanced manufacturing and superconducting magnet systems. Led engineering teams at major aerospace companies.",image:Hh,linkedin:"https://www.linkedin.com/company/aspl-fusion"}];return c.jsxs("div",{className:"team-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Our Team"}),c.jsx("p",{className:"hero-subtitle",children:"World-class talent building the future of fusion energy"})]})}),c.jsx("section",{className:"leadership-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Leadership Team"}),c.jsx("div",{className:"team-grid",children:a.map(e=>c.jsxs(Pe,{className:"team-card",as:"div",children:[c.jsx("img",{src:e.image,alt:e.name,className:"team-photo"}),c.jsx("h3",{children:e.name}),c.jsx("p",{className:"position",children:e.position}),c.jsx("p",{className:"bio",children:e.bio}),c.jsx("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"linkedin-link",children:c.jsx("i",{className:"fab fa-linkedin"})})]},e.id))})]})}),c.jsx("section",{className:"advisors-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Advisory Board"}),c.jsx("div",{className:"advisors-grid",children:advisors.map(e=>c.jsxs("div",{className:"advisor-card",children:[c.jsx("img",{src:e.image,alt:e.name,className:"advisor-photo"}),c.jsxs("div",{className:"advisor-info",children:[c.jsx("h3",{children:e.name}),c.jsx("p",{className:"position",children:e.position}),c.jsx("p",{className:"bio",children:e.bio})]})]},e.id))})]})}),c.jsx("section",{className:"join-team-section p-8",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h2",{children:"Join Our Mission"}),c.jsx("p",{className:"join-text",children:"We're always looking for exceptional talent to join our team. If you're passionate about fusion energy and want to make a real impact, we'd love to hear from you."}),c.jsx(Pe,{as:"a",href:"/careers",className:"cta-button",children:"View Open Positions"})]})})]})}function IU(){const[a,e]=ie.useState([]),[n,r]=ie.useState(!0),[o,u]=ie.useState(null);ie.useEffect(()=>{setTimeout(()=>{e([{id:1,title:"ASPL Fusion Achieves First Plasma Milestone",date:"2025-09-22",excerpt:"Our prototype reactor successfully achieved first plasma, marking a critical milestone in our development roadmap.",content:"In a historic achievement for Indian fusion research, ASPL Fusion's prototype magnetic mirror reactor successfully achieved first plasma on September 20, 2025. This milestone validates our core technology approach and marks the beginning of our journey toward commercial fusion energy. The plasma was sustained for 30 seconds at temperatures exceeding 10 million degrees Celsius, demonstrating the effectiveness of our magnetic confinement system.",category:"Technology"},{id:2,title:"ASPL Fusion Secures Series A Funding of ₹400 Crore",date:"2025-08-15",excerpt:"Led by leading venture capital firms, this funding will accelerate our prototype development and team expansion.",content:"ASPL Fusion has successfully closed its Series A funding round, raising ₹400 crore (approximately $50 million) from a consortium of leading venture capital firms and strategic investors. The round was led by XYZ Ventures with participation from ABC Capital and several prominent angel investors. This funding will enable us to complete our prototype reactor, expand our team, and accelerate our path to commercial medical isotope production.",category:"Business"},{id:3,title:"Partnership with BARC for Medical Isotope Development",date:"2025-07-10",excerpt:"Strategic collaboration with Bhabha Atomic Research Centre to develop domestic medical isotope production capabilities.",content:"ASPL Fusion has signed a memorandum of understanding with the Bhabha Atomic Research Centre (BARC) to collaborate on developing domestic production capabilities for critical medical isotopes. This partnership combines ASPL's innovative fusion technology with BARC's expertise in nuclear medicine and isotope applications. Together, we aim to eliminate India's dependence on imported medical isotopes by 2028.",category:"Partnership"},{id:4,title:"Dr. Priya Sharma Joins as Chief Technology Officer",date:"2025-06-05",excerpt:"Renowned fusion physicist brings decades of experience to lead ASPL Fusion's technology development.",content:"ASPL Fusion is pleased to announce the appointment of Dr. Priya Sharma as Chief Technology Officer. Dr. Sharma brings over 20 years of experience in magnetic confinement fusion, having previously led research teams at the Institute for Plasma Research. Her pioneering work on magnetic mirror configurations has been published in over 50 peer-reviewed papers. At ASPL, she will lead our technology development and oversee the construction of our prototype reactor.",category:"Team"},{id:5,title:"ASPL Fusion Presents at International Fusion Conference",date:"2025-05-20",excerpt:"Our magnetic mirror approach receives recognition at the prestigious IAEA Fusion Energy Conference.",content:"ASPL Fusion's innovative approach to fusion energy was featured at the 29th IAEA Fusion Energy Conference in Vienna. Our presentation on 'Commercializing Fusion Through Phased Applications' was well-received by the international fusion community. The conference provided valuable opportunities to connect with potential collaborators and showcase India's growing capabilities in fusion technology.",category:"Conference"}]),r(!1)},1e3)},[]);const d=["All","Technology","Business","Partnership","Team","Conference"],[h,g]=ie.useState("All"),p=h==="All"?a:a.filter(x=>x.category===h),v=x=>{const y={year:"numeric",month:"long",day:"numeric"};return new Date(x).toLocaleDateString(void 0,y)};return c.jsxs("div",{className:"news-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"News & Updates"}),c.jsx("p",{className:"hero-subtitle",children:"Latest developments in fusion technology and ASPL Fusion"})]})}),c.jsx("section",{className:"news-content p-8",children:c.jsx("div",{className:"container",children:n?c.jsxs("div",{className:"loading-state",children:[c.jsx("div",{className:"loading-spinner"}),c.jsx("p",{children:"Loading latest news..."})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"news-filters",children:d.map(x=>c.jsx("button",{className:`filter-button ${h===x?"active":""}`,onClick:()=>g(x),children:x},x))}),c.jsx("div",{className:"news-grid",children:p.map(x=>c.jsxs(Pe,{className:"news-card",as:"article",children:[c.jsxs("div",{className:"news-header",children:[c.jsx("span",{className:"news-category",children:x.category}),c.jsx("span",{className:"news-date",children:v(x.date)})]}),c.jsx("h3",{children:x.title}),c.jsx("p",{className:"news-excerpt",children:x.excerpt}),c.jsx("button",{className:"read-more",onClick:()=>u(x),children:"Read More →"})]},x.id))}),o&&c.jsx("div",{className:"article-modal",onClick:()=>u(null),children:c.jsxs("div",{className:"article-content",onClick:x=>x.stopPropagation(),children:[c.jsx("button",{className:"close-button",onClick:()=>u(null),children:c.jsx("i",{className:"fas fa-times"})}),c.jsxs("div",{className:"article-header",children:[c.jsx("span",{className:"article-category",children:o.category}),c.jsx("span",{className:"article-date",children:v(o.date)})]}),c.jsx("h2",{children:o.title}),c.jsx("p",{className:"article-body",children:o.content})]})})]})})}),c.jsx("section",{className:"newsletter-section p-8",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h2",{children:"Stay Updated"}),c.jsx("p",{children:"Subscribe to our newsletter for the latest fusion energy news and updates."}),c.jsxs("form",{className:"newsletter-form",children:[c.jsx("input",{type:"email",placeholder:"Enter your email",className:"newsletter-input",required:!0}),c.jsx(Pe,{as:"button",type:"submit",className:"newsletter-button",children:"Subscribe"})]})]})})]})}function jU(){const[a,e]=ie.useState(null),n=[{id:1,question:"What is fusion energy and how does ASPL Fusion plan to achieve it?",answer:"Fusion energy is the power source of the sun and stars, created by combining light atomic nuclei to release immense energy. ASPL Fusion is developing a magnetic mirror confinement device, a linear approach that offers advantages in modularity and maintenance compared to traditional toroidal (donut-shaped) tokamaks. We aim to achieve net energy gain through a phased strategy, starting with commercial applications like medical isotope production to build revenue and validate our technology."},{id:2,question:"How is ASPL Fusion's approach different from other fusion companies?",answer:"Many fusion companies focus solely on grid-scale electricity generation, which is a long-term goal. ASPL Fusion adopts a pragmatic, phased approach. Our initial phases focus on near-term, high-value commercial applications such as medical isotope production and industrial heat. This strategy allows us to generate revenue, de-risk our technology, and build operational expertise while progressively advancing towards clean electricity generation."},{id:3,question:"What are the immediate applications of ASPL Fusion's technology?",answer:"Our first commercial application is the production of critical medical isotopes, particularly Molybdenum-99 (Mo-99), which is essential for millions of diagnostic procedures worldwide. India currently imports 100% of its medical isotopes, making this a strategic national priority. Subsequent phases will target industrial heat applications (e.g., for steel, cement, chemicals) and green hydrogen production, all before large-scale electricity generation."},{id:4,question:"What is the timeline for ASPL Fusion's development?",answer:"Our roadmap is divided into four phases. Phase 1 (2025-2028) focuses on medical isotope production, aiming for commercial sales by 2028. Phase 2 (2028-2032) targets industrial heat applications. Phase 3 (2032-2038) involves green hydrogen production. Finally, Phase 4 (2038 onwards) aims for grid-scale electricity generation. Each phase builds upon the technological and commercial successes of the previous one."},{id:5,question:"How will ASPL Fusion contribute to India's energy independence?",answer:"India's rapidly growing economy faces significant energy security challenges due to heavy reliance on imported fossil fuels. Fusion energy offers a clean, safe, and virtually limitless domestic power source. By developing and deploying fusion technology, ASPL Fusion aims to drastically reduce India's energy import dependence, stabilize energy costs, and provide a sustainable foundation for long-term economic growth and environmental protection."},{id:6,question:"What kind of talent is ASPL Fusion looking for?",answer:"We are building a world-class team of scientists, engineers, and business professionals passionate about fusion energy. We seek individuals with expertise in plasma physics, superconducting magnets, nuclear engineering, materials science, advanced manufacturing, and project management. We value innovation, scientific rigor, commercial pragmatism, and a collaborative spirit. Visit our Careers page for current openings."}],r=o=>{e(a===o?null:o)};return c.jsxs("div",{className:"faq-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Frequently Asked Questions"}),c.jsx("p",{className:"hero-subtitle",children:"Everything you need to know about fusion energy and ASPL Fusion"})]})}),c.jsx("section",{className:"faq-content p-8",children:c.jsx("div",{className:"container",children:c.jsx("div",{className:"faq-grid",children:n.map(o=>c.jsxs(Pe,{className:"faq-item",as:"div",children:[c.jsxs("button",{className:"faq-toggle",onClick:()=>r(o.id),"aria-expanded":a===o.id,children:[c.jsx("h3",{children:o.question}),c.jsx("i",{className:`fas fa-${a===o.id?"minus":"plus"}`})]}),c.jsx("div",{className:`faq-answer ${a===o.id?"expanded":""}`,children:c.jsx("p",{children:o.answer})})]},o.id))})})})]})}/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var zU={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},BU={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},VU={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},HU={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},kU={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};function GU(){const[a,e]=ie.useState({name:"",email:"",subject:"",message:""}),[n,r]=ie.useState({}),[o,u]=ie.useState(!1),[d,h]=ie.useState(!1);ie.useEffect(()=>{new URLSearchParams(window.location.search).get("success")==="true"&&(h(!0),window.history.replaceState({},document.title,window.location.pathname))},[]);const g=y=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y),p=()=>{const y={};return a.name.trim()||(y.name="Name is required"),a.email.trim()?g(a.email)||(y.email="Please enter a valid email address"):y.email="Email is required",a.subject.trim()||(y.subject="Subject is required"),a.message.trim()?a.message.trim().length<10&&(y.message="Message must be at least 10 characters"):y.message="Message is required",y},v=y=>{const{name:S,value:T}=y.target;e(A=>({...A,[S]:T})),n[S]&&r(A=>({...A,[S]:""}))},x=y=>{y.preventDefault();const S=p();if(Object.keys(S).length>0){r(S);return}u(!0)};return c.jsxs("div",{className:"contact-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Contact Us"}),c.jsx("p",{className:"hero-subtitle",children:"Let's build the future of energy together"})]})}),c.jsx("section",{className:"contact-content p-8",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"contact-intro",children:[c.jsx("h2",{children:"Get in Touch"}),c.jsx("p",{children:"We're eager to connect with partners, investors, and talent who share our vision for a sustainable energy future. Reach out to us through the form below or directly via our contact details."})]}),c.jsxs("div",{className:"contact-grid",children:[c.jsxs("div",{className:"contact-form-section",children:[d&&c.jsxs("div",{className:"success-message",children:[c.jsx("i",{className:"fas fa-check-circle"}),c.jsx("p",{children:"Thank you for your message! We'll get back to you soon."})]}),c.jsxs("form",{className:"contact-form",action:"https://formspree.io/f/mwkgrgqg",method:"POST",onSubmit:x,children:[c.jsx("input",{type:"hidden",name:"_subject",value:"New Contact Form Submission"}),c.jsx("input",{type:"hidden",name:"_next",value:`${window.location.origin}/contact?success=true`}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"name",children:"Name *"}),c.jsx("input",{type:"text",id:"name",name:"name",value:a.name,onChange:v,className:n.name?"error":"",required:!0}),n.name&&c.jsx("span",{className:"error-message",children:n.name})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"email",children:"Email *"}),c.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:v,className:n.email?"error":"",required:!0}),n.email&&c.jsx("span",{className:"error-message",children:n.email})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"subject",children:"Subject *"}),c.jsx("input",{type:"text",id:"subject",name:"subject",value:a.subject,onChange:v,className:n.subject?"error":"",required:!0}),n.subject&&c.jsx("span",{className:"error-message",children:n.subject})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"message",children:"Message *"}),c.jsx("textarea",{id:"message",name:"message",rows:"5",value:a.message,onChange:v,className:n.message?"error":"",required:!0}),n.message&&c.jsx("span",{className:"error-message",children:n.message})]}),c.jsx(Pe,{as:"button",type:"submit",className:"submit-button",disabled:o,children:o?"Sending...":"Send Message"})]})]}),c.jsxs("div",{className:"contact-info-section",children:[c.jsxs(Pe,{className:"info-card",as:"div",children:[c.jsx(Zn,{icon:f1,className:"info-icon"}),c.jsx("h3",{children:"Email"}),c.jsx("a",{href:"mailto:info@asplfusion.com",children:"info@asplfusion.com"})]}),c.jsxs(Pe,{className:"info-card",as:"div",children:[c.jsx(Zn,{icon:lR,className:"info-icon"}),c.jsx("h3",{children:"Phone"}),c.jsx("a",{href:"tel:+919876543210",children:"+91 98765 43210"}),c.jsx("small",{style:{color:"#ff6b6b",display:"block",marginTop:"5px"},children:"⚠️ Replace with actual business phone number"})]}),c.jsxs(Pe,{className:"info-card",as:"div",children:[c.jsx(Zn,{icon:uR,className:"info-icon"}),c.jsx("h3",{children:"Location"}),c.jsx("p",{children:"New Delhi, India"})]}),c.jsxs("div",{className:"social-section",children:[c.jsx("h3",{children:"Follow Us"}),c.jsx("small",{style:{color:"#ff6b6b",display:"block",marginBottom:"10px"},children:"⚠️ Social media accounts need to be created"}),c.jsxs("div",{className:"social-links",children:[c.jsx("a",{href:"https://www.linkedin.com/company/aspl-fusion",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(Zn,{icon:BU})}),c.jsx("a",{href:"https://twitter.com/asplfusion",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:c.jsx(Zn,{icon:kU})}),c.jsx("a",{href:"https://www.facebook.com/asplfusion",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:c.jsx(Zn,{icon:VU})}),c.jsx("a",{href:"https://www.instagram.com/asplfusion",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:c.jsx(Zn,{icon:HU})}),c.jsx("a",{href:"https://www.youtube.com/asplfusion",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:c.jsx(Zn,{icon:zU})})]})]})]})]})]})}),c.jsx("section",{className:"partner-section p-8",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"text-center mb-12",children:"Partnership Opportunities"}),c.jsxs("div",{className:"partner-grid",children:[c.jsxs(Pe,{className:"partner-card",as:"div",children:[c.jsx("i",{className:"fas fa-handshake"}),c.jsx("h3",{children:"Strategic Partners"}),c.jsx("p",{children:"Join us in developing fusion technology for specific applications in your industry"})]}),c.jsxs(Pe,{className:"partner-card",as:"div",children:[c.jsx("i",{className:"fas fa-chart-line"}),c.jsx("h3",{children:"Investors"}),c.jsx("p",{children:"Be part of the fusion revolution with attractive returns and global impact"})]}),c.jsxs(Pe,{className:"partner-card",as:"div",children:[c.jsx("i",{className:"fas fa-university"}),c.jsx("h3",{children:"Research Institutions"}),c.jsx("p",{children:"Collaborate on cutting-edge fusion research and development"})]}),c.jsxs(Pe,{className:"partner-card",as:"div",children:[c.jsx("i",{className:"fas fa-briefcase"}),c.jsx("h3",{children:"Talent"}),c.jsx("p",{children:"Join our world-class team building the future of clean energy"})]})]})]})})]})}function WU(){return c.jsxs("div",{className:"about-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"About ASPL Fusion"}),c.jsx("p",{className:"hero-subtitle",children:"Pioneering India's clean energy future"})]})}),c.jsx("section",{className:"about-content p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"intro-content",children:[c.jsx("h2",{children:"Coming Soon"}),c.jsx("p",{children:"Learn more about our company history, values, and vision for the future of fusion energy."})]})})})]})}function XU(){return c.jsxs("div",{className:"careers-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Careers at ASPL Fusion"}),c.jsx("p",{className:"hero-subtitle",children:"Join us in building India's clean energy future"})]})}),c.jsx("section",{className:"careers-content p-8",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"careers-intro text-center",children:[c.jsx("h2",{children:"Be Part of Something Revolutionary"}),c.jsx("p",{children:"At ASPL Fusion, we're not just building a company – we're pioneering a new industry that will transform India's energy landscape. We're looking for exceptional individuals who share our passion for solving complex challenges and creating lasting impact."})]}),c.jsxs("div",{className:"why-aspl",children:[c.jsx("h2",{children:"Why Join ASPL Fusion?"}),c.jsxs("div",{className:"benefits-grid",children:[c.jsxs(Pe,{className:"benefit-item",as:"div",children:[c.jsx("i",{className:"fas fa-rocket"}),c.jsx("h3",{children:"Mission-Driven Work"}),c.jsx("p",{children:"Contribute directly to solving India's energy crisis and reducing carbon emissions while advancing cutting-edge fusion technology."})]}),c.jsxs(Pe,{className:"benefit-item",as:"div",children:[c.jsx("i",{className:"fas fa-users"}),c.jsx("h3",{children:"World-Class Team"}),c.jsx("p",{children:"Work alongside leading experts in plasma physics, nuclear engineering, and business from top institutions globally."})]}),c.jsxs(Pe,{className:"benefit-item",as:"div",children:[c.jsx("i",{className:"fas fa-chart-line"}),c.jsx("h3",{children:"Growth Opportunities"}),c.jsx("p",{children:"Join an early-stage company with immense growth potential. Shape your career while building a transformative industry."})]}),c.jsxs(Pe,{className:"benefit-item",as:"div",children:[c.jsx("i",{className:"fas fa-graduation-cap"}),c.jsx("h3",{children:"Continuous Learning"}),c.jsx("p",{children:"Access to conferences, training programs, and collaboration with leading research institutions worldwide."})]}),c.jsxs(Pe,{className:"benefit-item",as:"div",children:[c.jsx("i",{className:"fas fa-balance-scale"}),c.jsx("h3",{children:"Work-Life Balance"}),c.jsx("p",{children:"Flexible work arrangements, comprehensive health benefits, and a culture that values personal well-being."})]}),c.jsxs(Pe,{className:"benefit-item",as:"div",children:[c.jsx("i",{className:"fas fa-award"}),c.jsx("h3",{children:"Competitive Compensation"}),c.jsx("p",{children:"Industry-leading salaries, equity participation, and performance-based incentives that reward excellence."})]})]})]}),c.jsxs("div",{className:"open-positions",children:[c.jsx("h2",{className:"text-center",children:"Open Positions"}),c.jsxs("div",{className:"department-section",children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-atom"})," Physics & Engineering"]}),c.jsxs("div",{className:"job-listings",children:[c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"Senior Plasma Physicist"}),c.jsx("span",{className:"job-location",children:"New Delhi"})]}),c.jsx("p",{children:"Lead plasma confinement research and optimization for our magnetic mirror systems. PhD in Plasma Physics with 5+ years experience required."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"Experience with magnetic confinement fusion"}),c.jsx("li",{children:"Computational modeling expertise (COMSOL, ANSYS)"}),c.jsx("li",{children:"Published research in peer-reviewed journals"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: Senior Plasma Physicist",className:"apply-button",children:"Apply Now"})]}),c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"Magnet Systems Engineer"}),c.jsx("span",{className:"job-location",children:"New Delhi"})]}),c.jsx("p",{children:"Design and optimize superconducting magnet systems for fusion applications. M.Tech/PhD in relevant field with HTS experience preferred."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"High-temperature superconductor experience"}),c.jsx("li",{children:"Cryogenic systems knowledge"}),c.jsx("li",{children:"FEA and electromagnetic modeling skills"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: Magnet Systems Engineer",className:"apply-button",children:"Apply Now"})]}),c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"Nuclear Engineer - Isotope Production"}),c.jsx("span",{className:"job-location",children:"New Delhi"})]}),c.jsx("p",{children:"Lead the design and optimization of our medical isotope production systems. Experience with accelerator-based production preferred."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"Nuclear engineering degree with 3+ years experience"}),c.jsx("li",{children:"Radiochemistry and isotope separation knowledge"}),c.jsx("li",{children:"Regulatory compliance experience (AERB)"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: Nuclear Engineer",className:"apply-button",children:"Apply Now"})]})]})]}),c.jsxs("div",{className:"department-section",children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-cogs"})," Operations & Safety"]}),c.jsxs("div",{className:"job-listings",children:[c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"Radiation Safety Officer"}),c.jsx("span",{className:"job-location",children:"New Delhi"})]}),c.jsx("p",{children:"Ensure compliance with all radiation safety regulations and develop safety protocols for our facilities."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"RSO certification from AERB"}),c.jsx("li",{children:"5+ years in radiation safety management"}),c.jsx("li",{children:"Experience with accelerator facilities preferred"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: Radiation Safety Officer",className:"apply-button",children:"Apply Now"})]}),c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"Project Manager - Construction"}),c.jsx("span",{className:"job-location",children:"New Delhi"})]}),c.jsx("p",{children:"Manage construction of our first isotope production facility. Experience with nuclear/pharmaceutical facilities required."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"10+ years project management experience"}),c.jsx("li",{children:"Clean room and radiation facility construction"}),c.jsx("li",{children:"PMP certification preferred"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: Project Manager",className:"apply-button",children:"Apply Now"})]})]})]}),c.jsxs("div",{className:"department-section",children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-briefcase"})," Business & Strategy"]}),c.jsxs("div",{className:"job-listings",children:[c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"Business Development Manager - Healthcare"}),c.jsx("span",{className:"job-location",children:"New Delhi / Mumbai"})]}),c.jsx("p",{children:"Drive sales of medical isotopes to hospitals and diagnostic centers across India. Healthcare industry experience essential."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"5+ years in healthcare/pharmaceutical sales"}),c.jsx("li",{children:"Strong network in nuclear medicine"}),c.jsx("li",{children:"MBA preferred"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: Business Development Manager",className:"apply-button",children:"Apply Now"})]}),c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"Strategic Partnerships Lead"}),c.jsx("span",{className:"job-location",children:"New Delhi"})]}),c.jsx("p",{children:"Develop strategic partnerships with government, industry, and research institutions to accelerate our mission."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"7+ years in strategic partnerships/BD"}),c.jsx("li",{children:"Energy or deep-tech sector experience"}),c.jsx("li",{children:"Government relations expertise"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: Strategic Partnerships Lead",className:"apply-button",children:"Apply Now"})]})]})]}),c.jsxs("div",{className:"department-section",children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-laptop-code"})," Software & Data"]}),c.jsx("div",{className:"job-listings",children:c.jsxs(Pe,{className:"job-card",as:"div",children:[c.jsxs("div",{className:"job-header",children:[c.jsx("h4",{children:"AI/ML Engineer - Plasma Control"}),c.jsx("span",{className:"job-location",children:"New Delhi"})]}),c.jsx("p",{children:"Develop machine learning algorithms for real-time plasma control and optimization. Physics background preferred."}),c.jsxs("ul",{className:"job-requirements",children:[c.jsx("li",{children:"MS/PhD in CS, Physics, or related field"}),c.jsx("li",{children:"Experience with real-time control systems"}),c.jsx("li",{children:"Python, TensorFlow/PyTorch expertise"})]}),c.jsx("a",{href:"mailto:info@asplfusion.com?subject=Application: AI/ML Engineer",className:"apply-button",children:"Apply Now"})]})})]})]}),c.jsxs("div",{className:"internship-section",children:[c.jsx("h2",{children:"Internships & Research Positions"}),c.jsx("p",{children:"We offer limited internship positions for exceptional graduate students in:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Plasma Physics & Fusion Engineering"}),c.jsx("li",{children:"Nuclear Engineering & Radiochemistry"}),c.jsx("li",{children:"Materials Science (Superconductors)"}),c.jsx("li",{children:"Computational Physics & Modeling"}),c.jsx("li",{children:"Business Strategy & Market Analysis"})]}),c.jsxs("p",{children:["Internships are typically 3-6 months with potential for full-time conversion. Send your CV and research interests to ",c.jsx("a",{href:"mailto:info@asplfusion.com",children:"info@asplfusion.com"}),"."]})]}),c.jsxs("div",{className:"culture-section",children:[c.jsx("h2",{children:"Our Culture & Values"}),c.jsxs("div",{className:"values-grid",children:[c.jsxs(Pe,{className:"value-item",as:"div",children:[c.jsx("h3",{children:"Excellence"}),c.jsx("p",{children:"We pursue the highest standards in everything we do, from scientific rigor to business execution."})]}),c.jsxs(Pe,{className:"value-item",as:"div",children:[c.jsx("h3",{children:"Impact"}),c.jsx("p",{children:"Every decision is guided by our mission to create lasting positive impact for India and the world."})]}),c.jsxs(Pe,{className:"value-item",as:"div",children:[c.jsx("h3",{children:"Innovation"}),c.jsx("p",{children:"We challenge conventional thinking and embrace creative solutions to complex problems."})]}),c.jsxs(Pe,{className:"value-item",as:"div",children:[c.jsx("h3",{children:"Integrity"}),c.jsx("p",{children:"We operate with transparency, honesty, and ethical responsibility in all our interactions."})]}),c.jsxs(Pe,{className:"value-item",as:"div",children:[c.jsx("h3",{children:"Collaboration"}),c.jsx("p",{children:"We believe diverse perspectives and teamwork are essential to achieving breakthrough results."})]}),c.jsxs(Pe,{className:"value-item",as:"div",children:[c.jsx("h3",{children:"Sustainability"}),c.jsx("p",{children:"We're building for the long term – both in our technology and our organizational culture."})]})]})]}),c.jsxs("div",{className:"application-process",children:[c.jsx("h2",{children:"Application Process"}),c.jsxs("div",{className:"process-steps",children:[c.jsxs("div",{className:"process-step",children:[c.jsx("div",{className:"step-number",children:"1"}),c.jsx("h3",{children:"Application Review"}),c.jsx("p",{children:"Submit your application via email. We review every application carefully and respond within 2 weeks."})]}),c.jsxs("div",{className:"process-step",children:[c.jsx("div",{className:"step-number",children:"2"}),c.jsx("h3",{children:"Initial Screening"}),c.jsx("p",{children:"Phone or video interview with our HR team to discuss your background and interest in ASPL Fusion."})]}),c.jsxs("div",{className:"process-step",children:[c.jsx("div",{className:"step-number",children:"3"}),c.jsx("h3",{children:"Technical Interview"}),c.jsx("p",{children:"In-depth technical discussion with team members and hiring manager. May include case studies or presentations."})]}),c.jsxs("div",{className:"process-step",children:[c.jsx("div",{className:"step-number",children:"4"}),c.jsx("h3",{children:"Final Interview"}),c.jsx("p",{children:"Meet with senior leadership to discuss vision alignment and long-term career goals."})]}),c.jsxs("div",{className:"process-step",children:[c.jsx("div",{className:"step-number",children:"5"}),c.jsx("h3",{children:"Offer & Onboarding"}),c.jsx("p",{children:"Competitive offer followed by comprehensive onboarding to set you up for success."})]})]})]}),c.jsxs("div",{className:"cta-section text-center",children:[c.jsx("h2",{children:"Ready to Make History?"}),c.jsx("p",{children:"If you don't see a position that matches your skills but believe you can contribute to our mission, we'd still love to hear from you."}),c.jsx(Pe,{as:"a",href:"mailto:info@asplfusion.com?subject=General Career Inquiry",className:"cta-button",children:"Send Your Resume"})]})]})})]})}function YU(){return c.jsxs("div",{className:"privacy-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Privacy Policy"}),c.jsx("p",{className:"hero-subtitle",children:"How we protect your information"})]})}),c.jsx("section",{className:"privacy-content p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"intro-content",children:[c.jsx("h2",{children:"Coming Soon"}),c.jsx("p",{children:"Our comprehensive privacy policy will be available here."})]})})})]})}function qU(){return c.jsxs("div",{className:"terms-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"Terms of Service"}),c.jsx("p",{className:"hero-subtitle",children:"Terms and conditions for using our website"})]})}),c.jsx("section",{className:"terms-content p-8",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"intro-content",children:[c.jsx("h2",{children:"Coming Soon"}),c.jsx("p",{children:"Our terms of service will be available here."})]})})})]})}function ZU(){return c.jsxs("div",{className:"not-found-page",children:[c.jsx("section",{className:"page-hero",children:c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"gradient-text",children:"404"}),c.jsx("p",{className:"hero-subtitle",children:"Page not found"})]})}),c.jsx("section",{className:"not-found-content p-8",children:c.jsx("div",{className:"container text-center",children:c.jsxs("div",{className:"not-found-message",children:[c.jsx("h2",{children:"Oops! This page doesn't exist."}),c.jsx("p",{children:"The page you're looking for might have been moved, deleted, or doesn't exist."}),c.jsx(Pe,{as:sn,to:"/",className:"cta-button",children:"Go Back Home"})]})})})]})}function QU(){const{pathname:a}=ci();return ie.useEffect(()=>{window.scrollTo(0,0)},[a]),null}function JU(){return c.jsxs(mE,{children:[c.jsx(QU,{}),c.jsx(gR,{children:c.jsxs(XM,{children:[c.jsx(In,{path:"/",element:c.jsx(CU,{})}),c.jsx(In,{path:"/mission",element:c.jsx(DU,{})}),c.jsx(In,{path:"/technology",element:c.jsx(UU,{})}),c.jsx(In,{path:"/roadmap",element:c.jsx(LU,{})}),c.jsx(In,{path:"/applications",element:c.jsx(OU,{})}),c.jsx(In,{path:"/casestudies",element:c.jsx(PU,{})}),c.jsx(In,{path:"/team",element:c.jsx(FU,{})}),c.jsx(In,{path:"/news",element:c.jsx(IU,{})}),c.jsx(In,{path:"/faq",element:c.jsx(jU,{})}),c.jsx(In,{path:"/contact",element:c.jsx(GU,{})}),c.jsx(In,{path:"/about",element:c.jsx(WU,{})}),c.jsx(In,{path:"/careers",element:c.jsx(XU,{})}),c.jsx(In,{path:"/privacy",element:c.jsx(YU,{})}),c.jsx(In,{path:"/terms",element:c.jsx(qU,{})}),c.jsx(In,{path:"*",element:c.jsx(ZU,{})})]})})]})}const Mm=document.createElement("link");Mm.rel="stylesheet";Mm.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";document.head.appendChild(Mm);nM.createRoot(document.getElementById("root")).render(c.jsx(ie.StrictMode,{children:c.jsx(JU,{})}));
