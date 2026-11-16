(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},el={},Ws={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kt=Symbol.for("react.element"),lc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),uc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Ai=Symbol.iterator;function mc(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var Gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qs=Object.assign,Ys={};function lt(e,n,t){this.props=e,this.context=n,this.refs=Ys,this.updater=t||Gs}lt.prototype.isReactComponent={};lt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};lt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=lt.prototype;function Fo(e,n,t){this.props=e,this.context=n,this.refs=Ys,this.updater=t||Gs}var Uo=Fo.prototype=new Ks;Uo.constructor=Fo;Qs(Uo,lt.prototype);Uo.isPureReactComponent=!0;var Oi=Array.isArray,Xs=Object.prototype.hasOwnProperty,Ho={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Xs.call(n,r)&&!qs.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Kt,type:e,key:o,ref:i,props:l,_owner:Ho.current}}function hc(e,n){return{$$typeof:Kt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kt}function vc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Di=/\/+/g;function wl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):n.toString(36)}function yr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kt:case lc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,Oi(l)?(t="",e!=null&&(t=e.replace(Di,"$&/")+"/"),yr(l,n,t,"",function(d){return d})):l!=null&&(Bo(l)&&(l=hc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Di,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Oi(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+wl(o,s);i+=yr(o,n,t,a,l)}else if(a=mc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+wl(o,s++),i+=yr(o,n,t,a,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,n,t){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function gc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},yc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Ho};function Js(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=lt;L.Fragment=oc;L.Profiler=sc;L.PureComponent=Fo;L.StrictMode=ic;L.Suspense=dc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;L.act=Js;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qs({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Ho.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Xs.call(n,a)&&!qs.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Kt,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};L.createElement=Zs;L.createFactory=function(e){var n=Zs.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:cc,render:e}};L.isValidElement=Bo;L.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:gc}};L.memo=function(e,n){return{$$typeof:fc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};L.unstable_act=Js;L.useCallback=function(e,n){return se.current.useCallback(e,n)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,n){return se.current.useEffect(e,n)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return se.current.useMemo(e,n)};L.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return se.current.useTransition()};L.version="18.3.1";Ws.exports=L;var Lt=Ws.exports;const wc=rc(Lt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=Lt,Ec=Symbol.for("react.element"),xc=Symbol.for("react.fragment"),kc=Object.prototype.hasOwnProperty,Nc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cc={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)kc.call(n,r)&&!Cc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Ec,type:e,key:o,ref:i,props:l,_owner:Nc.current}}el.Fragment=xc;el.jsx=bs;el.jsxs=bs;$s.exports=el;var c=$s.exports,ea={exports:{}},ye={},na={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,j){var _=N.length;N.push(j);e:for(;0<_;){var W=_-1>>>1,X=N[W];if(0<l(X,j))N[W]=j,N[_]=X,_=W;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var j=N[0],_=N.pop();if(_!==j){N[0]=_;e:for(var W=0,X=N.length,bt=X>>>1;W<bt;){var vn=2*(W+1)-1,yl=N[vn],gn=vn+1,er=N[gn];if(0>l(yl,_))gn<X&&0>l(er,yl)?(N[W]=er,N[gn]=_,W=gn):(N[W]=yl,N[vn]=_,W=vn);else if(gn<X&&0>l(er,_))N[W]=er,N[gn]=_,W=gn;else break e}}return j}function l(N,j){var _=N.sortIndex-j.sortIndex;return _!==0?_:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],d=[],v=1,h=null,m=3,w=!1,S=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var j=t(d);j!==null;){if(j.callback===null)r(d);else if(j.startTime<=N)r(d),j.sortIndex=j.expirationTime,n(a,j);else break;j=t(d)}}function g(N){if(E=!1,p(N),!S)if(t(a)!==null)S=!0,vl(k);else{var j=t(d);j!==null&&gl(g,j.startTime-N)}}function k(N,j){S=!1,E&&(E=!1,f(P),P=-1),w=!0;var _=m;try{for(p(j),h=t(a);h!==null&&(!(h.expirationTime>j)||N&&!Te());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var X=W(h.expirationTime<=j);j=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(a)&&r(a),p(j)}else r(a);h=t(a)}if(h!==null)var bt=!0;else{var vn=t(d);vn!==null&&gl(g,vn.startTime-j),bt=!1}return bt}finally{h=null,m=_,w=!1}}var C=!1,T=null,P=-1,$=5,R=-1;function Te(){return!(e.unstable_now()-R<$)}function st(){if(T!==null){var N=e.unstable_now();R=N;var j=!0;try{j=T(!0,N)}finally{j?at():(C=!1,T=null)}}else C=!1}var at;if(typeof u=="function")at=function(){u(st)};else if(typeof MessageChannel<"u"){var zi=new MessageChannel,tc=zi.port2;zi.port1.onmessage=st,at=function(){tc.postMessage(null)}}else at=function(){I(st,0)};function vl(N){T=N,C||(C=!0,at())}function gl(N,j){P=I(function(){N(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,vl(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var _=m;m=j;try{return N()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var _=m;m=N;try{return j()}finally{m=_}},e.unstable_scheduleCallback=function(N,j,_){var W=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?W+_:W):_=W,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=_+X,N={id:v++,callback:j,priorityLevel:N,startTime:_,expirationTime:X,sortIndex:-1},_>W?(N.sortIndex=_,n(d,N),t(a)===null&&N===t(d)&&(E?(f(P),P=-1):E=!0,gl(g,_-W))):(N.sortIndex=X,n(a,N),S||w||(S=!0,vl(k))),N},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(N){var j=m;return function(){var _=m;m=j;try{return N.apply(this,arguments)}finally{m=_}}}})(ta);na.exports=ta;var Tc=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=Lt,ge=Tc;function y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ra=new Set,Rt={};function Ln(e,n){Zn(e,n),Zn(e+"Capture",n)}function Zn(e,n){for(Rt[e]=n,e=0;e<n.length;e++)ra.add(n[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mi={},Ii={};function _c(e){return Gl.call(Ii,e)?!0:Gl.call(Mi,e)?!1:jc.test(e)?Ii[e]=!0:(Mi[e]=!0,!1)}function Lc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rc(e,n,t,r){if(n===null||typeof n>"u"||Lc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vo=/[\-:]([a-z])/g;function $o(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Vo,$o);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Vo,$o);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Vo,$o);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wo(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Rc(n,t,l,r)&&(t=null),r||l===null?_c(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),An=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),oa=Symbol.for("react.context"),Qo=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ia=Symbol.for("react.offscreen"),Fi=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=Fi&&e[Fi]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Sl;function gt(e){if(Sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sl=n&&n[1]||""}return`
`+Sl+e}var El=!1;function xl(e,n){if(!e||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{El=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?gt(e):""}function zc(e){switch(e.tag){case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return gt("Suspense");case 19:return gt("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case An:return"Portal";case Ql:return"Profiler";case Go:return"StrictMode";case Yl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oa:return(e.displayName||"Context")+".Consumer";case la:return(e._context.displayName||"Context")+".Provider";case Qo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return n=e.displayName||null,n!==null?n:Xl(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return Xl(e(n))}catch{}}return null}function Ac(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(n);case 8:return n===Go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oc(e){var n=sa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Oc(e))}function aa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=sa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ui(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ua(e,n){n=n.checked,n!=null&&Wo(e,"checked",n,!1)}function Zl(e,n){ua(e,n);var t=dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Jl(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Jl(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yt=Array.isArray;function Gn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function bl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bi(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(y(92));if(yt(t)){if(1<t.length)throw Error(y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function ca(e,n){var t=dn(n.value),r=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Vi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?da(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,fa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(Et).forEach(function(e){Dc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Et[n]=Et[e]})});function pa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Et.hasOwnProperty(e)&&Et[e]?(""+n).trim():n+"px"}function ma(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=pa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Mc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,n){if(n){if(Mc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function to(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ro=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Qn=null,Yn=null;function $i(e){if(e=Zt(e)){if(typeof lo!="function")throw Error(y(280));var n=e.stateNode;n&&(n=ol(n),lo(e.stateNode,e.type,n))}}function ha(e){Qn?Yn?Yn.push(e):Yn=[e]:Qn=e}function va(){if(Qn){var e=Qn,n=Yn;if(Yn=Qn=null,$i(e),n)for(e=0;e<n.length;e++)$i(n[e])}}function ga(e,n){return e(n)}function ya(){}var kl=!1;function wa(e,n,t){if(kl)return e(n,t);kl=!0;try{return ga(e,n,t)}finally{kl=!1,(Qn!==null||Yn!==null)&&(ya(),va())}}function At(e,n){var t=e.stateNode;if(t===null)return null;var r=ol(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,n,typeof t));return t}var oo=!1;if(We)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){oo=!0}}),window.addEventListener("test",ct,ct),window.removeEventListener("test",ct,ct)}catch{oo=!1}function Ic(e,n,t,r,l,o,i,s,a){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(v){this.onError(v)}}var xt=!1,Rr=null,zr=!1,io=null,Fc={onError:function(e){xt=!0,Rr=e}};function Uc(e,n,t,r,l,o,i,s,a){xt=!1,Rr=null,Ic.apply(Fc,arguments)}function Hc(e,n,t,r,l,o,i,s,a){if(Uc.apply(this,arguments),xt){if(xt){var d=Rr;xt=!1,Rr=null}else throw Error(y(198));zr||(zr=!0,io=d)}}function Rn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Sa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wi(e){if(Rn(e)!==e)throw Error(y(188))}function Bc(e){var n=e.alternate;if(!n){if(n=Rn(e),n===null)throw Error(y(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Wi(l),e;if(o===r)return Wi(l),n;o=o.sibling}throw Error(y(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(y(189))}}if(t.alternate!==r)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:n}function Ea(e){return e=Bc(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xa(e);if(n!==null)return n;e=e.sibling}return null}var ka=ge.unstable_scheduleCallback,Gi=ge.unstable_cancelCallback,Vc=ge.unstable_shouldYield,$c=ge.unstable_requestPaint,G=ge.unstable_now,Wc=ge.unstable_getCurrentPriorityLevel,Xo=ge.unstable_ImmediatePriority,Na=ge.unstable_UserBlockingPriority,Ar=ge.unstable_NormalPriority,Gc=ge.unstable_LowPriority,Ca=ge.unstable_IdlePriority,nl=null,Ie=null;function Qc(e){if(Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Xc,Yc=Math.log,Kc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Yc(e)/Kc|0)|0}var or=64,ir=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=wt(s):(o&=i,o!==0&&(r=wt(o)))}else i=t&~l,i!==0?r=wt(i):o!==0&&(r=wt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Re(n),l=1<<t,r|=e[t],n&=~l;return r}function qc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Re(o),s=1<<i,a=l[i];a===-1?(!(s&t)||s&r)&&(l[i]=qc(s,n)):a<=n&&(e.expiredLanes|=s),o&=~s}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Nl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Xt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Re(n),e[n]=t}function Jc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Re(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function qo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Re(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var A=0;function Pa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ja,Zo,_a,La,Ra,ao=!1,sr=[],tn=null,rn=null,ln=null,Ot=new Map,Dt=new Map,Je=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qi(e,n){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Ot.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(n.pointerId)}}function dt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&Zo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function ed(e,n,t,r,l){switch(n){case"focusin":return tn=dt(tn,e,n,t,r,l),!0;case"dragenter":return rn=dt(rn,e,n,t,r,l),!0;case"mouseover":return ln=dt(ln,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Ot.set(o,dt(Ot.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Dt.set(o,dt(Dt.get(o)||null,e,n,t,r,l)),!0}return!1}function za(e){var n=Sn(e.target);if(n!==null){var t=Rn(n);if(t!==null){if(n=t.tag,n===13){if(n=Sa(t),n!==null){e.blockedOn=n,Ra(e.priority,function(){_a(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ro=r,t.target.dispatchEvent(r),ro=null}else return n=Zt(t),n!==null&&Zo(n),e.blockedOn=t,!1;n.shift()}return!0}function Yi(e,n,t){Sr(e)&&t.delete(n)}function nd(){ao=!1,tn!==null&&Sr(tn)&&(tn=null),rn!==null&&Sr(rn)&&(rn=null),ln!==null&&Sr(ln)&&(ln=null),Ot.forEach(Yi),Dt.forEach(Yi)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,ao||(ao=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,nd)))}function Mt(e){function n(l){return ft(l,e)}if(0<sr.length){ft(sr[0],e);for(var t=1;t<sr.length;t++){var r=sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&ft(tn,e),rn!==null&&ft(rn,e),ln!==null&&ft(ln,e),Ot.forEach(n),Dt.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)za(t),t.blockedOn===null&&Je.shift()}var Kn=Ke.ReactCurrentBatchConfig,Dr=!0;function td(e,n,t,r){var l=A,o=Kn.transition;Kn.transition=null;try{A=1,Jo(e,n,t,r)}finally{A=l,Kn.transition=o}}function rd(e,n,t,r){var l=A,o=Kn.transition;Kn.transition=null;try{A=4,Jo(e,n,t,r)}finally{A=l,Kn.transition=o}}function Jo(e,n,t,r){if(Dr){var l=uo(e,n,t,r);if(l===null)Ol(e,n,r,Mr,t),Qi(e,r);else if(ed(l,e,n,t,r))r.stopPropagation();else if(Qi(e,r),n&4&&-1<bc.indexOf(e)){for(;l!==null;){var o=Zt(l);if(o!==null&&ja(o),o=uo(e,n,t,r),o===null&&Ol(e,n,r,Mr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ol(e,n,r,null,t)}}var Mr=null;function uo(e,n,t,r){if(Mr=null,e=Ko(r),e=Sn(e),e!==null)if(n=Rn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Sa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Mr=e,null}function Aa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case Xo:return 1;case Na:return 4;case Ar:case Gc:return 16;case Ca:return 536870912;default:return 16}default:return 16}}var en=null,bo=null,Er=null;function Oa(){if(Er)return Er;var e,n=bo,t=n.length,r,l="value"in en?en.value:en.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Ki(){return!1}function we(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ar:Ki,this.isPropagationStopped=Ki,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=we(ot),qt=B({},ot,{view:0,detail:0}),ld=we(qt),Cl,Tl,pt,tl=B({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(Cl=e.screenX-pt.screenX,Tl=e.screenY-pt.screenY):Tl=Cl=0,pt=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),Xi=we(tl),od=B({},tl,{dataTransfer:0}),id=we(od),sd=B({},qt,{relatedTarget:0}),Pl=we(sd),ad=B({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=we(ad),cd=B({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=we(cd),fd=B({},ot,{data:0}),qi=we(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hd[e])?!!n[e]:!1}function ni(){return vd}var gd=B({},qt,{key:function(e){if(e.key){var n=pd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=we(gd),wd=B({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zi=we(wd),Sd=B({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),Ed=we(Sd),xd=B({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),kd=we(xd),Nd=B({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=we(Nd),Td=[9,13,27,32],ti=We&&"CompositionEvent"in window,kt=null;We&&"documentMode"in document&&(kt=document.documentMode);var Pd=We&&"TextEvent"in window&&!kt,Da=We&&(!ti||kt&&8<kt&&11>=kt),Ji=String.fromCharCode(32),bi=!1;function Ma(e,n){switch(e){case"keyup":return Td.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ia(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function jd(e,n){switch(e){case"compositionend":return Ia(n);case"keypress":return n.which!==32?null:(bi=!0,Ji);case"textInput":return e=n.data,e===Ji&&bi?null:e;default:return null}}function _d(e,n){if(Dn)return e==="compositionend"||!ti&&Ma(e,n)?(e=Oa(),Er=bo=en=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Da&&n.locale!=="ko"?null:n.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ld[e.type]:n==="textarea"}function Fa(e,n,t,r){ha(r),n=Ir(n,"onChange"),0<n.length&&(t=new ei("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Nt=null,It=null;function Rd(e){Xa(e,0)}function rl(e){var n=Fn(e);if(aa(n))return e}function zd(e,n){if(e==="change")return n}var Ua=!1;if(We){var jl;if(We){var _l="oninput"in document;if(!_l){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),_l=typeof ns.oninput=="function"}jl=_l}else jl=!1;Ua=jl&&(!document.documentMode||9<document.documentMode)}function ts(){Nt&&(Nt.detachEvent("onpropertychange",Ha),It=Nt=null)}function Ha(e){if(e.propertyName==="value"&&rl(It)){var n=[];Fa(n,It,e,Ko(e)),wa(Rd,n)}}function Ad(e,n,t){e==="focusin"?(ts(),Nt=n,It=t,Nt.attachEvent("onpropertychange",Ha)):e==="focusout"&&ts()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(It)}function Dd(e,n){if(e==="click")return rl(n)}function Md(e,n){if(e==="input"||e==="change")return rl(n)}function Id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ae=typeof Object.is=="function"?Object.is:Id;function Ft(e,n){if(Ae(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Gl.call(n,l)||!Ae(e[l],n[l]))return!1}return!0}function rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ls(e,n){var t=rs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rs(t)}}function Ba(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ba(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Va(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function ri(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Fd(e){var n=Va(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ba(t.ownerDocument.documentElement,t)){if(r!==null&&ri(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ls(t,o);var i=ls(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=We&&"documentMode"in document&&11>=document.documentMode,Mn=null,co=null,Ct=null,fo=!1;function os(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fo||Mn==null||Mn!==Lr(r)||(r=Mn,"selectionStart"in r&&ri(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ct&&Ft(Ct,r)||(Ct=r,r=Ir(co,"onSelect"),0<r.length&&(n=new ei("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mn)))}function ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var In={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Ll={},$a={};We&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function ll(e){if(Ll[e])return Ll[e];if(!In[e])return e;var n=In[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $a)return Ll[e]=n[t];return e}var Wa=ll("animationend"),Ga=ll("animationiteration"),Qa=ll("animationstart"),Ya=ll("transitionend"),Ka=new Map,is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,n){Ka.set(e,n),Ln(n,[e])}for(var Rl=0;Rl<is.length;Rl++){var zl=is[Rl],Hd=zl.toLowerCase(),Bd=zl[0].toUpperCase()+zl.slice(1);pn(Hd,"on"+Bd)}pn(Wa,"onAnimationEnd");pn(Ga,"onAnimationIteration");pn(Qa,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Ya,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var St="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(St));function ss(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hc(r,n,void 0,e),e.currentTarget=null}function Xa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;ss(l,s,d),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,d=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;ss(l,s,d),o=a}}}if(zr)throw e=io,zr=!1,io=null,e}function D(e,n){var t=n[go];t===void 0&&(t=n[go]=new Set);var r=e+"__bubble";t.has(r)||(qa(n,e,2,!1),t.add(r))}function Al(e,n,t){var r=0;n&&(r|=4),qa(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[cr]){e[cr]=!0,ra.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Al(t,!1,e),Al(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Al("selectionchange",!1,n))}}function qa(e,n,t,r){switch(Aa(n)){case 1:var l=td;break;case 4:l=rd;break;default:l=Jo}t=l.bind(null,n,t,e),l=void 0,!oo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ol(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Sn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}wa(function(){var d=o,v=Ko(t),h=[];e:{var m=Ka.get(e);if(m!==void 0){var w=ei,S=e;switch(e){case"keypress":if(xr(t)===0)break e;case"keydown":case"keyup":w=yd;break;case"focusin":S="focus",w=Pl;break;case"focusout":S="blur",w=Pl;break;case"beforeblur":case"afterblur":w=Pl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ed;break;case Wa:case Ga:case Qa:w=ud;break;case Ya:w=kd;break;case"scroll":w=ld;break;case"wheel":w=Cd;break;case"copy":case"cut":case"paste":w=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Zi}var E=(n&4)!==0,I=!E&&e==="scroll",f=E?m!==null?m+"Capture":null:m;E=[];for(var u=d,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=At(u,f),g!=null&&E.push(Ht(u,g,p)))),I)break;u=u.return}0<E.length&&(m=new w(m,S,null,t,v),h.push({event:m,listeners:E}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==ro&&(S=t.relatedTarget||t.fromElement)&&(Sn(S)||S[Ge]))break e;if((w||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=t.relatedTarget||t.toElement,w=d,S=S?Sn(S):null,S!==null&&(I=Rn(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=d),w!==S)){if(E=Xi,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=Zi,g="onPointerLeave",f="onPointerEnter",u="pointer"),I=w==null?m:Fn(w),p=S==null?m:Fn(S),m=new E(g,u+"leave",w,t,v),m.target=I,m.relatedTarget=p,g=null,Sn(v)===d&&(E=new E(f,u+"enter",S,t,v),E.target=p,E.relatedTarget=I,g=E),I=g,w&&S)n:{for(E=w,f=S,u=0,p=E;p;p=zn(p))u++;for(p=0,g=f;g;g=zn(g))p++;for(;0<u-p;)E=zn(E),u--;for(;0<p-u;)f=zn(f),p--;for(;u--;){if(E===f||f!==null&&E===f.alternate)break n;E=zn(E),f=zn(f)}E=null}else E=null;w!==null&&as(h,m,w,E,!1),S!==null&&I!==null&&as(h,I,S,E,!0)}}e:{if(m=d?Fn(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var k=zd;else if(es(m))if(Ua)k=Md;else{k=Od;var C=Ad}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Dd);if(k&&(k=k(e,d))){Fa(h,k,t,v);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Jl(m,"number",m.value)}switch(C=d?Fn(d):window,e){case"focusin":(es(C)||C.contentEditable==="true")&&(Mn=C,co=d,Ct=null);break;case"focusout":Ct=co=Mn=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,os(h,t,v);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":os(h,t,v)}var T;if(ti)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Dn?Ma(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Da&&t.locale!=="ko"&&(Dn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Dn&&(T=Oa()):(en=v,bo="value"in en?en.value:en.textContent,Dn=!0)),C=Ir(d,P),0<C.length&&(P=new qi(P,e,null,t,v),h.push({event:P,listeners:C}),T?P.data=T:(T=Ia(t),T!==null&&(P.data=T)))),(T=Pd?jd(e,t):_d(e,t))&&(d=Ir(d,"onBeforeInput"),0<d.length&&(v=new qi("onBeforeInput","beforeinput",null,t,v),h.push({event:v,listeners:d}),v.data=T))}Xa(h,n)})}function Ht(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ir(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=At(e,t),o!=null&&r.unshift(Ht(e,o,l)),o=At(e,n),o!=null&&r.push(Ht(e,o,l))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,l?(a=At(t,o),a!=null&&i.unshift(Ht(t,a,s))):l||(a=At(t,o),a!=null&&i.push(Ht(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var $d=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function us(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Wd,"")}function dr(e,n,t){if(n=us(n),us(e)!==n&&t)throw Error(y(425))}function Fr(){}var po=null,mo=null;function ho(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,cs=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof cs<"u"?function(e){return cs.resolve(null).then(e).catch(Yd)}:vo;function Yd(e){setTimeout(function(){throw e})}function Dl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Mt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Mt(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ds(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var it=Math.random().toString(36).slice(2),Me="__reactFiber$"+it,Bt="__reactProps$"+it,Ge="__reactContainer$"+it,go="__reactEvents$"+it,Kd="__reactListeners$"+it,Xd="__reactHandles$"+it;function Sn(e){var n=e[Me];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ge]||t[Me]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ds(e);e!==null;){if(t=e[Me])return t;e=ds(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[Me]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ol(e){return e[Bt]||null}var yo=[],Un=-1;function mn(e){return{current:e}}function M(e){0>Un||(e.current=yo[Un],yo[Un]=null,Un--)}function O(e,n){Un++,yo[Un]=e.current,e.current=n}var fn={},le=mn(fn),de=mn(!1),Cn=fn;function Jn(e,n){var t=e.type.contextTypes;if(!t)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Ur(){M(de),M(le)}function fs(e,n,t){if(le.current!==fn)throw Error(y(168));O(le,n),O(de,t)}function Za(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(y(108,Ac(e)||"Unknown",l));return B({},t,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Cn=le.current,O(le,e),O(de,de.current),!0}function ps(e,n,t){var r=e.stateNode;if(!r)throw Error(y(169));t?(e=Za(e,n,Cn),r.__reactInternalMemoizedMergedChildContext=e,M(de),M(le),O(le,e)):M(de),O(de,t)}var He=null,il=!1,Ml=!1;function Ja(e){He===null?He=[e]:He.push(e)}function qd(e){il=!0,Ja(e)}function hn(){if(!Ml&&He!==null){Ml=!0;var e=0,n=A;try{var t=He;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}He=null,il=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),ka(Xo,hn),l}finally{A=n,Ml=!1}}return null}var Hn=[],Bn=0,Br=null,Vr=0,Se=[],Ee=0,Tn=null,Be=1,Ve="";function yn(e,n){Hn[Bn++]=Vr,Hn[Bn++]=Br,Br=e,Vr=n}function ba(e,n,t){Se[Ee++]=Be,Se[Ee++]=Ve,Se[Ee++]=Tn,Tn=e;var r=Be;e=Ve;var l=32-Re(r)-1;r&=~(1<<l),t+=1;var o=32-Re(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Be=1<<32-Re(n)+l|t<<l|r,Ve=o+e}else Be=1<<o|t<<l|r,Ve=e}function li(e){e.return!==null&&(yn(e,1),ba(e,1,0))}function oi(e){for(;e===Br;)Br=Hn[--Bn],Hn[Bn]=null,Vr=Hn[--Bn],Hn[Bn]=null;for(;e===Tn;)Tn=Se[--Ee],Se[Ee]=null,Ve=Se[--Ee],Se[Ee]=null,Be=Se[--Ee],Se[Ee]=null}var ve=null,he=null,F=!1,Le=null;function eu(e,n){var t=xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ms(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,he=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tn!==null?{id:Be,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,he=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(F){var n=he;if(n){var t=n;if(!ms(e,n)){if(wo(e))throw Error(y(418));n=on(t.nextSibling);var r=ve;n&&ms(e,n)?eu(r,t):(e.flags=e.flags&-4097|2,F=!1,ve=e)}}else{if(wo(e))throw Error(y(418));e.flags=e.flags&-4097|2,F=!1,ve=e}}}function hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fr(e){if(e!==ve)return!1;if(!F)return hs(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ho(e.type,e.memoizedProps)),n&&(n=he)){if(wo(e))throw nu(),Error(y(418));for(;n;)eu(e,n),n=on(n.nextSibling)}if(hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=on(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ve?on(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=he;e;)e=on(e.nextSibling)}function bn(){he=ve=null,F=!1}function ii(e){Le===null?Le=[e]:Le.push(e)}var Zd=Ke.ReactCurrentBatchConfig;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var r=t.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function pr(e,n){throw e=Object.prototype.toString.call(n),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function vs(e){var n=e._init;return n(e._payload)}function tu(e){function n(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=cn(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,g){return u===null||u.tag!==6?(u=$l(p,f.mode,g),u.return=f,u):(u=l(u,p),u.return=f,u)}function a(f,u,p,g){var k=p.type;return k===On?v(f,u,p.props.children,g,p.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qe&&vs(k)===u.type)?(g=l(u,p.props),g.ref=mt(f,u,p),g.return=f,g):(g=_r(p.type,p.key,p.props,null,f.mode,g),g.ref=mt(f,u,p),g.return=f,g)}function d(f,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Wl(p,f.mode,g),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function v(f,u,p,g,k){return u===null||u.tag!==7?(u=Nn(p,f.mode,g,k),u.return=f,u):(u=l(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$l(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tr:return p=_r(u.type,u.key,u.props,null,f.mode,p),p.ref=mt(f,null,u),p.return=f,p;case An:return u=Wl(u,f.mode,p),u.return=f,u;case qe:var g=u._init;return h(f,g(u._payload),p)}if(yt(u)||ut(u))return u=Nn(u,f.mode,p,null),u.return=f,u;pr(f,u)}return null}function m(f,u,p,g){var k=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tr:return p.key===k?a(f,u,p,g):null;case An:return p.key===k?d(f,u,p,g):null;case qe:return k=p._init,m(f,u,k(p._payload),g)}if(yt(p)||ut(p))return k!==null?null:v(f,u,p,g,null);pr(f,p)}return null}function w(f,u,p,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,s(u,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tr:return f=f.get(g.key===null?p:g.key)||null,a(u,f,g,k);case An:return f=f.get(g.key===null?p:g.key)||null,d(u,f,g,k);case qe:var C=g._init;return w(f,u,p,C(g._payload),k)}if(yt(g)||ut(g))return f=f.get(p)||null,v(u,f,g,k,null);pr(u,g)}return null}function S(f,u,p,g){for(var k=null,C=null,T=u,P=u=0,$=null;T!==null&&P<p.length;P++){T.index>P?($=T,T=null):$=T.sibling;var R=m(f,T,p[P],g);if(R===null){T===null&&(T=$);break}e&&T&&R.alternate===null&&n(f,T),u=o(R,u,P),C===null?k=R:C.sibling=R,C=R,T=$}if(P===p.length)return t(f,T),F&&yn(f,P),k;if(T===null){for(;P<p.length;P++)T=h(f,p[P],g),T!==null&&(u=o(T,u,P),C===null?k=T:C.sibling=T,C=T);return F&&yn(f,P),k}for(T=r(f,T);P<p.length;P++)$=w(T,f,P,p[P],g),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?P:$.key),u=o($,u,P),C===null?k=$:C.sibling=$,C=$);return e&&T.forEach(function(Te){return n(f,Te)}),F&&yn(f,P),k}function E(f,u,p,g){var k=ut(p);if(typeof k!="function")throw Error(y(150));if(p=k.call(p),p==null)throw Error(y(151));for(var C=k=null,T=u,P=u=0,$=null,R=p.next();T!==null&&!R.done;P++,R=p.next()){T.index>P?($=T,T=null):$=T.sibling;var Te=m(f,T,R.value,g);if(Te===null){T===null&&(T=$);break}e&&T&&Te.alternate===null&&n(f,T),u=o(Te,u,P),C===null?k=Te:C.sibling=Te,C=Te,T=$}if(R.done)return t(f,T),F&&yn(f,P),k;if(T===null){for(;!R.done;P++,R=p.next())R=h(f,R.value,g),R!==null&&(u=o(R,u,P),C===null?k=R:C.sibling=R,C=R);return F&&yn(f,P),k}for(T=r(f,T);!R.done;P++,R=p.next())R=w(T,f,P,R.value,g),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?P:R.key),u=o(R,u,P),C===null?k=R:C.sibling=R,C=R);return e&&T.forEach(function(st){return n(f,st)}),F&&yn(f,P),k}function I(f,u,p,g){if(typeof p=="object"&&p!==null&&p.type===On&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tr:e:{for(var k=p.key,C=u;C!==null;){if(C.key===k){if(k=p.type,k===On){if(C.tag===7){t(f,C.sibling),u=l(C,p.props.children),u.return=f,f=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qe&&vs(k)===C.type){t(f,C.sibling),u=l(C,p.props),u.ref=mt(f,C,p),u.return=f,f=u;break e}t(f,C);break}else n(f,C);C=C.sibling}p.type===On?(u=Nn(p.props.children,f.mode,g,p.key),u.return=f,f=u):(g=_r(p.type,p.key,p.props,null,f.mode,g),g.ref=mt(f,u,p),g.return=f,f=g)}return i(f);case An:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){t(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=Wl(p,f.mode,g),u.return=f,f=u}return i(f);case qe:return C=p._init,I(f,u,C(p._payload),g)}if(yt(p))return S(f,u,p,g);if(ut(p))return E(f,u,p,g);pr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(t(f,u.sibling),u=l(u,p),u.return=f,f=u):(t(f,u),u=$l(p,f.mode,g),u.return=f,f=u),i(f)):t(f,u)}return I}var et=tu(!0),ru=tu(!1),$r=mn(null),Wr=null,Vn=null,si=null;function ai(){si=Vn=Wr=null}function ui(e){var n=$r.current;M($r),e._currentValue=n}function Eo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Xn(e,n){Wr=e,si=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:n,next:null},Vn===null){if(Wr===null)throw Error(y(308));Vn=e,Wr.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return n}var En=null;function ci(e){En===null?En=[e]:En.push(e)}function lu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ci(n)):(t.next=l.next,l.next=t),n.interleaved=t,Qe(e,r)}function Qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Qe(e,t)}return l=r.interleaved,l===null?(n.next=n,ci(r)):(n.next=l.next,l.next=n),r.interleaved=n,Qe(e,t)}function kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}function gs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Gr(e,n,t,r){var l=e.updateQueue;Ze=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,d=a.next;a.next=null,i===null?o=d:i.next=d,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=a))}if(o!==null){var h=l.baseState;i=0,v=d=a=null,s=o;do{var m=s.lane,w=s.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,E=s;switch(m=n,w=t,E.tag){case 1:if(S=E.payload,typeof S=="function"){h=S.call(w,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,m=typeof S=="function"?S.call(w,h,m):S,m==null)break e;h=B({},h,m);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=w,a=h):v=v.next=w,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(v===null&&(a=h),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=v,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);jn|=i,e.lanes=i,e.memoizedState=h}}function ys(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var Jt={},Fe=mn(Jt),Vt=mn(Jt),$t=mn(Jt);function xn(e){if(e===Jt)throw Error(y(174));return e}function fi(e,n){switch(O($t,n),O(Vt,e),O(Fe,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:eo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=eo(n,e)}M(Fe),O(Fe,n)}function nt(){M(Fe),M(Vt),M($t)}function iu(e){xn($t.current);var n=xn(Fe.current),t=eo(n,e.type);n!==t&&(O(Vt,e),O(Fe,t))}function pi(e){Vt.current===e&&(M(Fe),M(Vt))}var U=mn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Il=[];function mi(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Nr=Ke.ReactCurrentDispatcher,Fl=Ke.ReactCurrentBatchConfig,Pn=0,H=null,Y=null,q=null,Yr=!1,Tt=!1,Wt=0,Jd=0;function ne(){throw Error(y(321))}function hi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ae(e[t],n[t]))return!1;return!0}function vi(e,n,t,r,l,o){if(Pn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Nr.current=e===null||e.memoizedState===null?tf:rf,e=t(r,l),Tt){o=0;do{if(Tt=!1,Wt=0,25<=o)throw Error(y(301));o+=1,q=Y=null,n.updateQueue=null,Nr.current=lf,e=t(r,l)}while(Tt)}if(Nr.current=Kr,n=Y!==null&&Y.next!==null,Pn=0,q=Y=H=null,Yr=!1,n)throw Error(y(300));return e}function gi(){var e=Wt!==0;return Wt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?H.memoizedState=q=e:q=q.next=e,q}function Ce(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=q===null?H.memoizedState:q.next;if(n!==null)q=n,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?H.memoizedState=q=e:q=q.next=e}return q}function Gt(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=Ce(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=Y,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,d=o;do{var v=d.lane;if((Pn&v)===v)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=h,i=r):a=a.next=h,H.lanes|=v,jn|=v}d=d.next}while(d!==null&&d!==o);a===null?i=r:a.next=s,Ae(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,H.lanes|=o,jn|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Hl(e){var n=Ce(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ae(o,n.memoizedState)||(ce=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function su(){}function au(e,n){var t=H,r=Ce(),l=n(),o=!Ae(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,yi(du.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,Qt(9,cu.bind(null,t,r,l,n),void 0,null),Z===null)throw Error(y(349));Pn&30||uu(t,n,l)}return l}function uu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function cu(e,n,t,r){n.value=t,n.getSnapshot=r,fu(n)&&pu(e)}function du(e,n,t){return t(function(){fu(n)&&pu(e)})}function fu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ae(e,t)}catch{return!0}}function pu(e){var n=Qe(e,1);n!==null&&ze(n,e,1,-1)}function ws(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n.queue=e,e=e.dispatch=nf.bind(null,H,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return Ce().memoizedState}function Cr(e,n,t,r){var l=De();H.flags|=e,l.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function sl(e,n,t,r){var l=Ce();r=r===void 0?null:r;var o=void 0;if(Y!==null){var i=Y.memoizedState;if(o=i.destroy,r!==null&&hi(r,i.deps)){l.memoizedState=Qt(n,t,o,r);return}}H.flags|=e,l.memoizedState=Qt(1|n,t,o,r)}function Ss(e,n){return Cr(8390656,8,e,n)}function yi(e,n){return sl(2048,8,e,n)}function hu(e,n){return sl(4,2,e,n)}function vu(e,n){return sl(4,4,e,n)}function gu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yu(e,n,t){return t=t!=null?t.concat([e]):null,sl(4,4,gu.bind(null,n,e),t)}function wi(){}function wu(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Su(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Eu(e,n,t){return Pn&21?(Ae(t,n)||(t=Ta(),H.lanes|=t,jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function bd(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),n()}finally{A=t,Fl.transition=r}}function xu(){return Ce().memoizedState}function ef(e,n,t){var r=un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ku(e))Nu(n,t);else if(t=lu(e,n,t,r),t!==null){var l=ie();ze(t,e,r,l),Cu(t,n,r)}}function nf(e,n,t){var r=un(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Nu(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,i)){var a=n.interleaved;a===null?(l.next=l,ci(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=lu(e,n,l,r),t!==null&&(l=ie(),ze(t,e,r,l),Cu(t,n,r))}}function ku(e){var n=e.alternate;return e===H||n!==null&&n===H}function Nu(e,n){Tt=Yr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}var Kr={readContext:Ne,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},tf={readContext:Ne,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:Ss,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,gu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ef.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:ws,useDebugValue:wi,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=ws(!1),n=e[0];return e=bd.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,l=De();if(F){if(t===void 0)throw Error(y(407));t=t()}else{if(t=n(),Z===null)throw Error(y(349));Pn&30||uu(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Ss(du.bind(null,r,o,e),[e]),r.flags|=2048,Qt(9,cu.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=De(),n=Z.identifierPrefix;if(F){var t=Ve,r=Be;t=(r&~(1<<32-Re(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Wt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rf={readContext:Ne,useCallback:wu,useContext:Ne,useEffect:yi,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:Su,useReducer:Ul,useRef:mu,useState:function(){return Ul(Gt)},useDebugValue:wi,useDeferredValue:function(e){var n=Ce();return Eu(n,Y.memoizedState,e)},useTransition:function(){var e=Ul(Gt)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:au,useId:xu,unstable_isNewReconciler:!1},lf={readContext:Ne,useCallback:wu,useContext:Ne,useEffect:yi,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:Su,useReducer:Hl,useRef:mu,useState:function(){return Hl(Gt)},useDebugValue:wi,useDeferredValue:function(e){var n=Ce();return Y===null?n.memoizedState=e:Eu(n,Y.memoizedState,e)},useTransition:function(){var e=Hl(Gt)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:au,useId:xu,unstable_isNewReconciler:!1};function je(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function xo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var al={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=un(e),o=$e(r,l);o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,l),n!==null&&(ze(n,e,l,r),kr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=un(e),o=$e(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,l),n!==null&&(ze(n,e,l,r),kr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=un(e),l=$e(t,r);l.tag=2,n!=null&&(l.callback=n),n=sn(e,l,r),n!==null&&(ze(n,e,r,t),kr(n,e,r))}};function Es(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Ft(t,r)||!Ft(l,o):!0}function Tu(e,n,t){var r=!1,l=fn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(l=fe(n)?Cn:le.current,r=n.contextTypes,o=(r=r!=null)?Jn(e,l):fn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=al,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function xs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&al.enqueueReplaceState(n,n.state,null)}function ko(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},di(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Ne(o):(o=fe(n)?Cn:le.current,l.context=Jn(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(xo(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&al.enqueueReplaceState(l,l.state,null),Gr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function tt(e,n){try{var t="",r=n;do t+=zc(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Bl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function No(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var of=typeof WeakMap=="function"?WeakMap:Map;function Pu(e,n,t){t=$e(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qr||(qr=!0,Oo=r),No(e,n)},t}function ju(e,n,t){t=$e(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){No(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){No(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function ks(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Sf.bind(null,e,n,t),n.then(e,e))}function Ns(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Cs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$e(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var sf=Ke.ReactCurrentOwner,ce=!1;function oe(e,n,t,r){n.child=e===null?ru(n,null,t,r):et(n,e.child,t,r)}function Ts(e,n,t,r,l){t=t.render;var o=n.ref;return Xn(n,l),r=vi(e,n,t,r,o,l),t=gi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ye(e,n,l)):(F&&t&&li(n),n.flags|=1,oe(e,n,r,l),n.child)}function Ps(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Pi(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,_u(e,n,o,r,l)):(e=_r(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ft,t(i,r)&&e.ref===n.ref)return Ye(e,n,l)}return n.flags|=1,e=cn(o,r),e.ref=n.ref,e.return=n,n.child=e}function _u(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Ft(o,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ye(e,n,l)}return Co(e,n,t,r,l)}function Lu(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Wn,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Wn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,O(Wn,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,O(Wn,me),me|=r;return oe(e,n,l,t),n.child}function Ru(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Co(e,n,t,r,l){var o=fe(t)?Cn:le.current;return o=Jn(n,o),Xn(n,l),t=vi(e,n,t,r,o,l),r=gi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ye(e,n,l)):(F&&r&&li(n),n.flags|=1,oe(e,n,t,l),n.child)}function js(e,n,t,r,l){if(fe(t)){var o=!0;Hr(n)}else o=!1;if(Xn(n,l),n.stateNode===null)Tr(e,n),Tu(n,t,r),ko(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=fe(t)?Cn:le.current,d=Jn(n,d));var v=t.getDerivedStateFromProps,h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==d)&&xs(n,i,r,d),Ze=!1;var m=n.memoizedState;i.state=m,Gr(n,r,i,l),a=n.memoizedState,s!==r||m!==a||de.current||Ze?(typeof v=="function"&&(xo(n,t,v,r),a=n.memoizedState),(s=Ze||Es(n,t,s,r,m,a,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,ou(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:je(n.type,s),i.props=d,h=n.pendingProps,m=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=fe(t)?Cn:le.current,a=Jn(n,a));var w=t.getDerivedStateFromProps;(v=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==a)&&xs(n,i,r,a),Ze=!1,m=n.memoizedState,i.state=m,Gr(n,r,i,l);var S=n.memoizedState;s!==h||m!==S||de.current||Ze?(typeof w=="function"&&(xo(n,t,w,r),S=n.memoizedState),(d=Ze||Es(n,t,d,r,m,S,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,S,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,S,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),i.props=r,i.state=S,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return To(e,n,t,r,o,l)}function To(e,n,t,r,l,o){Ru(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&ps(n,t,!1),Ye(e,n,o);r=n.stateNode,sf.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=et(n,e.child,null,o),n.child=et(n,null,s,o)):oe(e,n,s,o),n.memoizedState=r.state,l&&ps(n,t,!0),n.child}function zu(e){var n=e.stateNode;n.pendingContext?fs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&fs(e,n.context,!1),fi(e,n.containerInfo)}function _s(e,n,t,r,l){return bn(),ii(l),n.flags|=256,oe(e,n,t,r),n.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,n,t){var r=n.pendingProps,l=U.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(U,l&1),e===null)return So(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=dl(i,r,0,null),e=Nn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=jo(t),n.memoizedState=Po,e):Si(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return af(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=cn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=cn(s,o):(o=Nn(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?jo(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Po,r}return o=e.child,e=o.sibling,r=cn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Si(e,n){return n=dl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&ii(r),et(n,e.child,null,t),e=Si(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function af(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Bl(Error(y(422))),mr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=dl({mode:"visible",children:r.children},l,0,null),o=Nn(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&et(n,e.child,null,i),n.child.memoizedState=jo(i),n.memoizedState=Po,o);if(!(n.mode&1))return mr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=Bl(o,r,void 0),mr(e,n,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Qe(e,l),ze(r,e,l,-1))}return Ti(),r=Bl(Error(y(421))),mr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Ef.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,he=on(l.nextSibling),ve=n,F=!0,Le=null,e!==null&&(Se[Ee++]=Be,Se[Ee++]=Ve,Se[Ee++]=Tn,Be=e.id,Ve=e.overflow,Tn=n),n=Si(n,r.children),n.flags|=4096,n)}function Ls(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Eo(e.return,n,t)}function Vl(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Ou(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,t,n);else if(e.tag===19)Ls(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Vl(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Qr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Vl(n,!0,t,null,o);break;case"together":Vl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ye(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(y(153));if(n.child!==null){for(e=n.child,t=cn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=cn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function uf(e,n,t){switch(n.tag){case 3:zu(n),bn();break;case 5:iu(n);break;case 1:fe(n.type)&&Hr(n);break;case 4:fi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;O($r,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Au(e,n,t):(O(U,U.current&1),e=Ye(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ou(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return Ye(e,n,t)}var Du,_o,Mu,Iu;Du=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};_o=function(){};Mu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,xn(Fe.current);var o=null;switch(t){case"input":l=ql(e,l),r=ql(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=bl(e,l),r=bl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}no(t,r);var i;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rt.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(o||(o=[]),o.push(d,t)),t=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rt.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&D("scroll",e),o||s===a||(o=[])):(o=o||[]).push(d,a))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Iu=function(e,n,t,r){t!==r&&(n.flags|=4)};function ht(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function cf(e,n,t){var r=n.pendingProps;switch(oi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Ur(),te(n),null;case 3:return r=n.stateNode,nt(),M(de),M(le),mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(Io(Le),Le=null))),_o(e,n),te(n),null;case 5:pi(n);var l=xn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Mu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(y(166));return te(n),null}if(e=xn(Fe.current),fr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Me]=n,r[Bt]=o,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<St.length;l++)D(St[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Ui(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":Bi(r,o),D("invalid",r)}no(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",""+s]):Rt.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&D("scroll",r)}switch(t){case"input":rr(r),Hi(r,o,!0);break;case"textarea":rr(r),Vi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=da(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Me]=n,e[Bt]=r,Du(e,n,!1,!1),n.stateNode=e;e:{switch(i=to(t,r),t){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<St.length;l++)D(St[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Ui(e,r),l=ql(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),D("invalid",e);break;case"textarea":Bi(e,r),l=bl(e,r),D("invalid",e);break;default:l=r}no(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?ma(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fa(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&zt(e,a):typeof a=="number"&&zt(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rt.hasOwnProperty(o)?a!=null&&o==="onScroll"&&D("scroll",e):a!=null&&Wo(e,o,a,i))}switch(t){case"input":rr(e),Hi(e,r,!1);break;case"textarea":rr(e),Vi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Fr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Iu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(y(166));if(t=xn($t.current),xn(Fe.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Me]=n,(o=r.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Me]=n,n.stateNode=r}return te(n),null;case 13:if(M(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&n.mode&1&&!(n.flags&128))nu(),bn(),n.flags|=98560,o=!1;else if(o=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Me]=n}else bn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),o=!1}else Le!==null&&(Io(Le),Le=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?K===0&&(K=3):Ti())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return nt(),_o(e,n),e===null&&Ut(n.stateNode.containerInfo),te(n),null;case 10:return ui(n.type._context),te(n),null;case 17:return fe(n.type)&&Ur(),te(n),null;case 19:if(M(U),o=n.memoizedState,o===null)return te(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)ht(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Qr(e),i!==null){for(n.flags|=128,ht(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&G()>rt&&(n.flags|=128,r=!0,ht(o,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ht(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!F)return te(n),null}else 2*G()-o.renderingStartTime>rt&&t!==1073741824&&(n.flags|=128,r=!0,ht(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=G(),n.sibling=null,t=U.current,O(U,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Ci(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function df(e,n){switch(oi(n),n.tag){case 1:return fe(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nt(),M(de),M(le),mi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return pi(n),null;case 13:if(M(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(y(340));bn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(U),null;case 4:return nt(),null;case 10:return ui(n.type._context),null;case 22:case 23:return Ci(),null;case 24:return null;default:return null}}var hr=!1,re=!1,ff=typeof WeakSet=="function"?WeakSet:Set,x=null;function $n(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Lo(e,n,t){try{t()}catch(r){V(e,n,r)}}var Rs=!1;function pf(e,n){if(po=Dr,e=Va(),ri(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,d=0,v=0,h=e,m=null;n:for(;;){for(var w;h!==t||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(a=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break n;if(m===t&&++d===l&&(s=i),m===o&&++v===r&&(a=i),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(mo={focusedElem:e,selectionRange:t},Dr=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,I=S.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?E:je(n.type,E),I);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){V(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return S=Rs,Rs=!1,S}function Pt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Lo(n,t,o)}l=l.next}while(l!==r)}}function ul(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ro(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fu(e){var n=e.alternate;n!==null&&(e.alternate=null,Fu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Me],delete n[Bt],delete n[go],delete n[Kd],delete n[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(zo(e,n,t),e=e.sibling;e!==null;)zo(e,n,t),e=e.sibling}function Ao(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ao(e,n,t),e=e.sibling;e!==null;)Ao(e,n,t),e=e.sibling}var J=null,_e=!1;function Xe(e,n,t){for(t=t.child;t!==null;)Hu(e,n,t),t=t.sibling}function Hu(e,n,t){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:re||$n(t,n);case 6:var r=J,l=_e;J=null,Xe(e,n,t),J=r,_e=l,J!==null&&(_e?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(_e?(e=J,t=t.stateNode,e.nodeType===8?Dl(e.parentNode,t):e.nodeType===1&&Dl(e,t),Mt(e)):Dl(J,t.stateNode));break;case 4:r=J,l=_e,J=t.stateNode.containerInfo,_e=!0,Xe(e,n,t),J=r,_e=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Lo(t,n,i),l=l.next}while(l!==r)}Xe(e,n,t);break;case 1:if(!re&&($n(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){V(t,n,s)}Xe(e,n,t);break;case 21:Xe(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Xe(e,n,t),re=r):Xe(e,n,t);break;default:Xe(e,n,t)}}function As(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ff),n.forEach(function(r){var l=xf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:J=s.stateNode,_e=!1;break e;case 3:J=s.stateNode.containerInfo,_e=!0;break e;case 4:J=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(J===null)throw Error(y(160));Hu(o,i,l),J=null,_e=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){V(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Bu(n,e),n=n.sibling}function Bu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Oe(e),r&4){try{Pt(3,e,e.return),ul(3,e)}catch(E){V(e,e.return,E)}try{Pt(5,e,e.return)}catch(E){V(e,e.return,E)}}break;case 1:Pe(n,e),Oe(e),r&512&&t!==null&&$n(t,t.return);break;case 5:if(Pe(n,e),Oe(e),r&512&&t!==null&&$n(t,t.return),e.flags&32){var l=e.stateNode;try{zt(l,"")}catch(E){V(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ua(l,o),to(s,i);var d=to(s,o);for(i=0;i<a.length;i+=2){var v=a[i],h=a[i+1];v==="style"?ma(l,h):v==="dangerouslySetInnerHTML"?fa(l,h):v==="children"?zt(l,h):Wo(l,v,h,d)}switch(s){case"input":Zl(l,o);break;case"textarea":ca(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Gn(l,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?Gn(l,!!o.multiple,o.defaultValue,!0):Gn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Bt]=o}catch(E){V(e,e.return,E)}}break;case 6:if(Pe(n,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(E){V(e,e.return,E)}}break;case 3:if(Pe(n,e),Oe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Mt(n.containerInfo)}catch(E){V(e,e.return,E)}break;case 4:Pe(n,e),Oe(e);break;case 13:Pe(n,e),Oe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ki=G())),r&4&&As(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(re=(d=re)||v,Pe(n,e),re=d):Pe(n,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(x=e,v=e.child;v!==null;){for(h=x=v;x!==null;){switch(m=x,w=m.child,m.tag){case 0:case 11:case 14:case 15:Pt(4,m,m.return);break;case 1:$n(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(E){V(r,t,E)}}break;case 5:$n(m,m.return);break;case 22:if(m.memoizedState!==null){Ds(h);continue}}w!==null?(w.return=m,x=w):Ds(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=pa("display",i))}catch(E){V(e,e.return,E)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(E){V(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(n,e),Oe(e),r&4&&As(e);break;case 21:break;default:Pe(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Uu(t)){var r=t;break e}t=t.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(zt(l,""),r.flags&=-33);var o=zs(e);Ao(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=zs(e);zo(e,s,i);break;default:throw Error(y(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mf(e,n,t){x=e,Vu(e)}function Vu(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var l=x,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||hr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||re;s=hr;var d=re;if(hr=i,(re=a)&&!d)for(x=l;x!==null;)i=x,a=i.child,i.tag===22&&i.memoizedState!==null?Ms(l):a!==null?(a.return=i,x=a):Ms(l);for(;o!==null;)x=o,Vu(o),o=o.sibling;x=l,hr=s,re=d}Os(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,x=o):Os(e)}}function Os(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||ul(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:je(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ys(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ys(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&Mt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||n.flags&512&&Ro(n)}catch(m){V(n,n.return,m)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function Ds(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function Ms(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ul(4,n)}catch(a){V(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){V(n,l,a)}}var o=n.return;try{Ro(n)}catch(a){V(n,o,a)}break;case 5:var i=n.return;try{Ro(n)}catch(a){V(n,i,a)}}}catch(a){V(n,n.return,a)}if(n===e){x=null;break}var s=n.sibling;if(s!==null){s.return=n.return,x=s;break}x=n.return}}var hf=Math.ceil,Xr=Ke.ReactCurrentDispatcher,Ei=Ke.ReactCurrentOwner,ke=Ke.ReactCurrentBatchConfig,z=0,Z=null,Q=null,b=0,me=0,Wn=mn(0),K=0,Yt=null,jn=0,cl=0,xi=0,jt=null,ue=null,ki=0,rt=1/0,Ue=null,qr=!1,Oo=null,an=null,vr=!1,nn=null,Zr=0,_t=0,Do=null,Pr=-1,jr=0;function ie(){return z&6?G():Pr!==-1?Pr:Pr=G()}function un(e){return e.mode&1?z&2&&b!==0?b&-b:Zd.transition!==null?(jr===0&&(jr=Ta()),jr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Aa(e.type)),e):1}function ze(e,n,t,r){if(50<_t)throw _t=0,Do=null,Error(y(185));Xt(e,t,r),(!(z&2)||e!==Z)&&(e===Z&&(!(z&2)&&(cl|=t),K===4&&be(e,b)),pe(e,r),t===1&&z===0&&!(n.mode&1)&&(rt=G()+500,il&&hn()))}function pe(e,n){var t=e.callbackNode;Zc(e,n);var r=Or(e,e===Z?b:0);if(r===0)t!==null&&Gi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Gi(t),n===1)e.tag===0?qd(Is.bind(null,e)):Ja(Is.bind(null,e)),Qd(function(){!(z&6)&&hn()}),t=null;else{switch(Pa(r)){case 1:t=Xo;break;case 4:t=Na;break;case 16:t=Ar;break;case 536870912:t=Ca;break;default:t=Ar}t=qu(t,$u.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $u(e,n){if(Pr=-1,jr=0,z&6)throw Error(y(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=Or(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Jr(e,r);else{n=r;var l=z;z|=2;var o=Gu();(Z!==e||b!==n)&&(Ue=null,rt=G()+500,kn(e,n));do try{yf();break}catch(s){Wu(e,s)}while(1);ai(),Xr.current=o,z=l,Q!==null?n=0:(Z=null,b=0,n=K)}if(n!==0){if(n===2&&(l=so(e),l!==0&&(r=l,n=Mo(e,l))),n===1)throw t=Yt,kn(e,0),be(e,r),pe(e,G()),t;if(n===6)be(e,r);else{if(l=e.current.alternate,!(r&30)&&!vf(l)&&(n=Jr(e,r),n===2&&(o=so(e),o!==0&&(r=o,n=Mo(e,o))),n===1))throw t=Yt,kn(e,0),be(e,r),pe(e,G()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(y(345));case 2:wn(e,ue,Ue);break;case 3:if(be(e,r),(r&130023424)===r&&(n=ki+500-G(),10<n)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vo(wn.bind(null,e,ue,Ue),n);break}wn(e,ue,Ue);break;case 4:if(be(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Re(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=vo(wn.bind(null,e,ue,Ue),r);break}wn(e,ue,Ue);break;case 5:wn(e,ue,Ue);break;default:throw Error(y(329))}}}return pe(e,G()),e.callbackNode===t?$u.bind(null,e):null}function Mo(e,n){var t=jt;return e.current.memoizedState.isDehydrated&&(kn(e,n).flags|=256),e=Jr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Io(n)),e}function Io(e){ue===null?ue=e:ue.push.apply(ue,e)}function vf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Ae(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function be(e,n){for(n&=~xi,n&=~cl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Re(n),r=1<<t;e[t]=-1,n&=~r}}function Is(e){if(z&6)throw Error(y(327));qn();var n=Or(e,0);if(!(n&1))return pe(e,G()),null;var t=Jr(e,n);if(e.tag!==0&&t===2){var r=so(e);r!==0&&(n=r,t=Mo(e,r))}if(t===1)throw t=Yt,kn(e,0),be(e,n),pe(e,G()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,ue,Ue),pe(e,G()),null}function Ni(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(rt=G()+500,il&&hn())}}function _n(e){nn!==null&&nn.tag===0&&!(z&6)&&qn();var n=z;z|=1;var t=ke.transition,r=A;try{if(ke.transition=null,A=1,e)return e()}finally{A=r,ke.transition=t,z=n,!(z&6)&&hn()}}function Ci(){me=Wn.current,M(Wn)}function kn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Gd(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(oi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:nt(),M(de),M(le),mi();break;case 5:pi(r);break;case 4:nt();break;case 13:M(U);break;case 19:M(U);break;case 10:ui(r.type._context);break;case 22:case 23:Ci()}t=t.return}if(Z=e,Q=e=cn(e.current,null),b=me=n,K=0,Yt=null,xi=cl=jn=0,ue=jt=null,En!==null){for(n=0;n<En.length;n++)if(t=En[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}En=null}return e}function Wu(e,n){do{var t=Q;try{if(ai(),Nr.current=Kr,Yr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(Pn=0,q=Y=H=null,Tt=!1,Wt=0,Ei.current=null,t===null||t.return===null){K=1,Yt=n,Q=null;break}e:{var o=e,i=t.return,s=t,a=n;if(n=b,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,v=s,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=Ns(i);if(w!==null){w.flags&=-257,Cs(w,i,s,o,n),w.mode&1&&ks(o,d,n),n=w,a=d;var S=n.updateQueue;if(S===null){var E=new Set;E.add(a),n.updateQueue=E}else S.add(a);break e}else{if(!(n&1)){ks(o,d,n),Ti();break e}a=Error(y(426))}}else if(F&&s.mode&1){var I=Ns(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Cs(I,i,s,o,n),ii(tt(a,s));break e}}o=a=tt(a,s),K!==4&&(K=2),jt===null?jt=[o]:jt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Pu(o,a,n);gs(o,f);break e;case 1:s=a;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(an===null||!an.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=ju(o,s,n);gs(o,g);break e}}o=o.return}while(o!==null)}Yu(t)}catch(k){n=k,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(1)}function Gu(){var e=Xr.current;return Xr.current=Kr,e===null?Kr:e}function Ti(){(K===0||K===3||K===2)&&(K=4),Z===null||!(jn&268435455)&&!(cl&268435455)||be(Z,b)}function Jr(e,n){var t=z;z|=2;var r=Gu();(Z!==e||b!==n)&&(Ue=null,kn(e,n));do try{gf();break}catch(l){Wu(e,l)}while(1);if(ai(),z=t,Xr.current=r,Q!==null)throw Error(y(261));return Z=null,b=0,K}function gf(){for(;Q!==null;)Qu(Q)}function yf(){for(;Q!==null&&!Vc();)Qu(Q)}function Qu(e){var n=Xu(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Yu(e):Q=n,Ei.current=null}function Yu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=df(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(t=cf(t,n,me),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);K===0&&(K=5)}function wn(e,n,t){var r=A,l=ke.transition;try{ke.transition=null,A=1,wf(e,n,t,r)}finally{ke.transition=l,A=r}return null}function wf(e,n,t,r){do qn();while(nn!==null);if(z&6)throw Error(y(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Jc(e,o),e===Z&&(Q=Z=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vr||(vr=!0,qu(Ar,function(){return qn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=ke.transition,ke.transition=null;var i=A;A=1;var s=z;z|=4,Ei.current=null,pf(e,t),Bu(t,e),Fd(mo),Dr=!!po,mo=po=null,e.current=t,mf(t),$c(),z=s,A=i,ke.transition=o}else e.current=t;if(vr&&(vr=!1,nn=e,Zr=l),o=e.pendingLanes,o===0&&(an=null),Qc(t.stateNode),pe(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Oo,Oo=null,e;return Zr&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Do?_t++:(_t=0,Do=e):_t=0,hn(),null}function qn(){if(nn!==null){var e=Pa(Zr),n=ke.transition,t=A;try{if(ke.transition=null,A=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Zr=0,z&6)throw Error(y(331));var l=z;for(z|=4,x=e.current;x!==null;){var o=x,i=o.child;if(x.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(x=d;x!==null;){var v=x;switch(v.tag){case 0:case 11:case 15:Pt(8,v,o)}var h=v.child;if(h!==null)h.return=v,x=h;else for(;x!==null;){v=x;var m=v.sibling,w=v.return;if(Fu(v),v===d){x=null;break}if(m!==null){m.return=w,x=m;break}x=w}}}var S=o.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}x=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,x=i;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,x=f;break e}x=o.return}}var u=e.current;for(x=u;x!==null;){i=x;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,x=p;else e:for(i=u;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ul(9,s)}}catch(k){V(s,s.return,k)}if(s===i){x=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,x=g;break e}x=s.return}}if(z=l,hn(),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{A=t,ke.transition=n}}return!1}function Fs(e,n,t){n=tt(t,n),n=Pu(e,n,1),e=sn(e,n,1),n=ie(),e!==null&&(Xt(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)Fs(e,e,t);else for(;n!==null;){if(n.tag===3){Fs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=tt(t,e),e=ju(n,e,1),n=sn(n,e,1),e=ie(),n!==null&&(Xt(n,1,e),pe(n,e));break}}n=n.return}}function Sf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(b&t)===t&&(K===4||K===3&&(b&130023424)===b&&500>G()-ki?kn(e,0):xi|=t),pe(e,n)}function Ku(e,n){n===0&&(e.mode&1?(n=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):n=1);var t=ie();e=Qe(e,n),e!==null&&(Xt(e,n,t),pe(e,t))}function Ef(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ku(e,t)}function xf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(n),Ku(e,t)}var Xu;Xu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,uf(e,n,t);ce=!!(e.flags&131072)}else ce=!1,F&&n.flags&1048576&&ba(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Tr(e,n),e=n.pendingProps;var l=Jn(n,le.current);Xn(n,t),l=vi(null,n,r,e,l,t);var o=gi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(o=!0,Hr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,di(n),l.updater=al,n.stateNode=l,l._reactInternals=n,ko(n,r,e,t),n=To(null,n,r,!0,o,t)):(n.tag=0,F&&o&&li(n),oe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Tr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Nf(r),e=je(r,e),l){case 0:n=Co(null,n,r,e,t);break e;case 1:n=js(null,n,r,e,t);break e;case 11:n=Ts(null,n,r,e,t);break e;case 14:n=Ps(null,n,r,je(r.type,e),t);break e}throw Error(y(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:je(r,l),Co(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:je(r,l),js(e,n,r,l,t);case 3:e:{if(zu(n),e===null)throw Error(y(387));r=n.pendingProps,o=n.memoizedState,l=o.element,ou(e,n),Gr(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=tt(Error(y(423)),n),n=_s(e,n,r,t,l);break e}else if(r!==l){l=tt(Error(y(424)),n),n=_s(e,n,r,t,l);break e}else for(he=on(n.stateNode.containerInfo.firstChild),ve=n,F=!0,Le=null,t=ru(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(bn(),r===l){n=Ye(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return iu(n),e===null&&So(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ho(r,l)?i=null:o!==null&&ho(r,o)&&(n.flags|=32),Ru(e,n),oe(e,n,i,t),n.child;case 6:return e===null&&So(n),null;case 13:return Au(e,n,t);case 4:return fi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=et(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:je(r,l),Ts(e,n,r,l,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,O($r,r._currentValue),r._currentValue=i,o!==null)if(Ae(o.value,i)){if(o.children===l.children&&!de.current){n=Ye(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=$e(-1,t&-t),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?a.next=a:(a.next=v.next,v.next=a),d.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Eo(o.return,t,n),s.lanes|=t;break}a=a.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Eo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Xn(n,t),l=Ne(l),r=r(l),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,l=je(r,n.pendingProps),l=je(r.type,l),Ps(e,n,r,l,t);case 15:return _u(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:je(r,l),Tr(e,n),n.tag=1,fe(r)?(e=!0,Hr(n)):e=!1,Xn(n,t),Tu(n,r,l),ko(n,r,l,t),To(null,n,r,!0,e,t);case 19:return Ou(e,n,t);case 22:return Lu(e,n,t)}throw Error(y(156,n.tag))};function qu(e,n){return ka(e,n)}function kf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,n,t,r){return new kf(e,n,t,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Pi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qo)return 11;if(e===Yo)return 14}return 2}function cn(e,n){var t=e.alternate;return t===null?(t=xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _r(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Pi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case On:return Nn(t.children,l,o,n);case Go:i=8,l|=8;break;case Ql:return e=xe(12,t,n,l|2),e.elementType=Ql,e.lanes=o,e;case Yl:return e=xe(13,t,n,l),e.elementType=Yl,e.lanes=o,e;case Kl:return e=xe(19,t,n,l),e.elementType=Kl,e.lanes=o,e;case ia:return dl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:i=10;break e;case oa:i=9;break e;case Qo:i=11;break e;case Yo:i=14;break e;case qe:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return n=xe(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Nn(e,n,t,r){return e=xe(7,e,r,n),e.lanes=t,e}function dl(e,n,t,r){return e=xe(22,e,r,n),e.elementType=ia,e.lanes=t,e.stateNode={isHidden:!1},e}function $l(e,n,t){return e=xe(6,e,null,n),e.lanes=t,e}function Wl(e,n,t){return n=xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Cf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ji(e,n,t,r,l,o,i,s,a){return e=new Cf(e,n,t,s,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=xe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},di(o),e}function Tf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Zu(e){if(!e)return fn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(fe(t))return Za(e,t,n)}return n}function Ju(e,n,t,r,l,o,i,s,a){return e=ji(t,r,!0,e,l,o,i,s,a),e.context=Zu(null),t=e.current,r=ie(),l=un(t),o=$e(r,l),o.callback=n??null,sn(t,o,l),e.current.lanes=l,Xt(e,l,r),pe(e,r),e}function fl(e,n,t,r){var l=n.current,o=ie(),i=un(l);return t=Zu(t),n.context===null?n.context=t:n.pendingContext=t,n=$e(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(l,n,i),e!==null&&(ze(e,l,i,o),kr(e,l,i)),i}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Us(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _i(e,n){Us(e,n),(e=e.alternate)&&Us(e,n)}function Pf(){return null}var bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}pl.prototype.render=Li.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(y(409));fl(e,n,null,null)};pl.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_n(function(){fl(null,e,null,null)}),n[Ge]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var n=La();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&za(e)}};function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hs(){}function jf(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=br(i);o.call(d)}}var i=Ju(n,r,e,0,null,!1,!1,"",Hs);return e._reactRootContainer=i,e[Ge]=i.current,Ut(e.nodeType===8?e.parentNode:e),_n(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=br(a);s.call(d)}}var a=ji(e,0,!1,null,null,!1,!1,"",Hs);return e._reactRootContainer=a,e[Ge]=a.current,Ut(e.nodeType===8?e.parentNode:e),_n(function(){fl(n,a,t,r)}),a}function hl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=br(i);s.call(a)}}fl(n,i,e,l)}else i=jf(t,n,e,l,r);return br(i)}ja=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wt(n.pendingLanes);t!==0&&(qo(n,t|1),pe(n,G()),!(z&6)&&(rt=G()+500,hn()))}break;case 13:_n(function(){var r=Qe(e,1);if(r!==null){var l=ie();ze(r,e,1,l)}}),_i(e,1)}};Zo=function(e){if(e.tag===13){var n=Qe(e,134217728);if(n!==null){var t=ie();ze(n,e,134217728,t)}_i(e,134217728)}};_a=function(e){if(e.tag===13){var n=un(e),t=Qe(e,n);if(t!==null){var r=ie();ze(t,e,n,r)}_i(e,n)}};La=function(){return A};Ra=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};lo=function(e,n,t){switch(n){case"input":if(Zl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(y(90));aa(r),Zl(r,l)}}}break;case"textarea":ca(e,t);break;case"select":n=t.value,n!=null&&Gn(e,!!t.multiple,n,!1)}};ga=Ni;ya=_n;var _f={usingClientEntryPoint:!1,Events:[Zt,Fn,ol,ha,va,Ni]},vt={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lf={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ea(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||Pf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{nl=gr.inject(Lf),Ie=gr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ri(n))throw Error(y(200));return Tf(e,n,null,t)};ye.createRoot=function(e,n){if(!Ri(e))throw Error(y(299));var t=!1,r="",l=bu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=ji(e,1,!1,null,null,t,!1,r,l),e[Ge]=n.current,Ut(e.nodeType===8?e.parentNode:e),new Li(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ea(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return _n(e)};ye.hydrate=function(e,n,t){if(!ml(n))throw Error(y(200));return hl(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!Ri(e))throw Error(y(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=bu;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Ju(n,null,e,1,t??null,l,!1,o,i),e[Ge]=n.current,Ut(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new pl(n)};ye.render=function(e,n,t){if(!ml(n))throw Error(y(200));return hl(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!ml(e))throw Error(y(40));return e._reactRootContainer?(_n(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ye.unstable_batchedUpdates=Ni;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ml(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return hl(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),ea.exports=ye;var Rf=ea.exports,nc,Bs=Rf;nc=Bs.createRoot,Bs.hydrateRoot;const zf=[{src:"https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js",type:"",id:"",async:!1,defer:!1,content:""},{src:"https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js",type:"",id:"",async:!1,defer:!1,content:""},{src:"https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js",type:"",id:"",async:!1,defer:!1,content:""},{src:"https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js",type:"",id:"",async:!1,defer:!1,content:""},{src:"https://cdn.tailwindcss.com",type:"",id:"",async:!1,defer:!1,content:""},{src:"",type:"module",id:"",async:!1,defer:!1,content:`
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

/* ===== merged from js/scene.js ===== */
/* ============================================================
   VESPER — WebGL layer
   One scene, three actors:

   1. STARFIELD — a single THREE.Points cloud at multiple depths.
      The "flying forward" trick lives in the vertex shader:
        z = mod(z0 + uScroll, DEPTH) - DEPTH
      Scrolling increases uScroll, every star slides toward the
      camera and wraps back to the far plane — an infinite field
      with zero per-frame CPU work. Perspective gives free
      parallax: near stars sweep fast, far stars crawl.

   2. NEBULA — one large plane at the back of the frustum running
      a cheap fbm (fractal noise) fragment shader, blending the
      magenta→cyan palette over a deep-indigo wash. Octave count
      drops on mobile (see OCTAVES define).

   3. FOCAL STAR — an additive radial-glow billboard with
      diffraction spikes, used by the pinned "arrival" section.
      main.js drives its intensity via setFocal(0..1).

   Nothing here owns the clock or scroll: main.js calls render()
   from the GSAP ticker (same rAF as Lenis) and feeds scroll
   progress in — one source of truth for time and position.
   ============================================================ */

const DEPTH = 720;        // how deep the starfield extends behind the camera
const SPREAD_X = 340;     // half-width of the field
const SPREAD_Y = 220;     // half-height of the field

function createScene({ canvas, config, isMobile, reduced }) {
  const colorA = new THREE.Color(config.nebula.colorA); // magenta
  const colorB = new THREE.Color(config.nebula.colorB); // cyan

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x050507, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth / window.innerHeight, 0.1, 1500
  );
  camera.position.set(0, 0, 0);

  /* Targets set from main.js; render() eases toward them every
     frame so everything inherits the same weighted, drifting feel. */
  const target = { scroll: 0, focal: 0, fov: 60, px: 0, py: 0 };
  const current = { scroll: 0, focal: 0, fov: 60, px: 0, py: 0 };

  /* ---------------- 1. Starfield ---------------- */

  const starCount = isMobile ? config.stars.mobile : config.stars.desktop;
  const positions = new Float32Array(starCount * 3);
  const sizes = new Float32Array(starCount);
  const shades = new Float32Array(starCount);  // 0..1 → magenta-ish .. cyan-ish tint
  const phases = new Float32Array(starCount);  // twinkle offset

  for (let i = 0; i < starCount; i++) {
    positions[i * 3 + 0] = (Math.random() * 2 - 1) * SPREAD_X;
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * SPREAD_Y;
    positions[i * 3 + 2] = Math.random() * DEPTH; // stored 0..DEPTH, shader maps to -DEPTH..0
    // mostly faint stars, a few bright ones
    sizes[i] = Math.random() < 0.06
      ? 1.8 + Math.random() * 1.6
      : 0.5 + Math.random() * 1.2;
    shades[i] = Math.random();
    phases[i] = Math.random();
  }

  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  starGeo.setAttribute('aShade', new THREE.BufferAttribute(shades, 1));
  starGeo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

  const starMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uDepth: { value: DEPTH },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uTintA: { value: colorA },
      uTintB: { value: colorB },
    },
    vertexShader: /* glsl */ \`
      uniform float uTime;
      uniform float uScroll;
      uniform float uDepth;
      uniform float uPixelRatio;
      uniform vec3 uTintA;
      uniform vec3 uTintB;
      attribute float aSize;
      attribute float aShade;
      attribute float aPhase;
      varying float vAlpha;
      varying vec3 vColor;

      void main() {
        vec3 pos = position;
        // Infinite forward drift: wrap z through [-DEPTH, 0)
        pos.z = mod(position.z + uScroll, uDepth) - uDepth;

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        float dist = -mv.z;

        // Perspective point size (clamped so far stars stay visible)
        gl_PointSize = max(aSize * uPixelRatio * (320.0 / dist), 1.0);

        // Twinkle + fade in at the far plane, fade out passing the camera
        float twinkle = 0.78 + 0.22 * sin(uTime * 1.6 + aPhase * 6.2831);
        float farFade  = smoothstep(uDepth, uDepth - 180.0, dist);
        float nearFade = smoothstep(2.0, 60.0, dist);
        vAlpha = twinkle * farFade * nearFade;

        // Pale starlight with a faint magenta/cyan cast per star
        vec3 white = vec3(0.91, 0.93, 0.96);
        vec3 tint = mix(uTintA, uTintB, step(0.5, aShade));
        vColor = mix(white, tint, abs(aShade * 2.0 - 1.0) * 0.35);

        gl_Position = projectionMatrix * mv;
      }
    \`,
    fragmentShader: /* glsl */ \`
      varying float vAlpha;
      varying vec3 vColor;

      void main() {
        // Soft round point: dim halo + hot core
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.08, d) * 0.5 + smoothstep(0.16, 0.0, d);
        gl_FragColor = vec4(vColor, a * vAlpha);
      }
    \`,
  });

  const stars = new THREE.Points(starGeo, starMat);
  stars.frustumCulled = false; // shader moves verts; bounding box is meaningless
  scene.add(stars);

  /* ---------------- 2. Nebula backdrop ---------------- */

  const nebulaMat = new THREE.ShaderMaterial({
    depthWrite: false,
    defines: { OCTAVES: isMobile ? 3 : 5 },
    uniforms: {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uColorA: { value: colorA },
      uColorB: { value: colorB },
      uIntensity: { value: config.nebula.intensity },
    },
    vertexShader: /* glsl */ \`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    \`,
    fragmentShader: /* glsl */ \`
      varying vec2 vUv;
      uniform float uTime;
      uniform float uScroll;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform float uIntensity;

      float hash(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i),                 hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }
      float fbm(vec2 p) {
        float v = 0.0, amp = 0.5;
        for (int i = 0; i < OCTAVES; i++) {
          v += amp * noise(p);
          p *= 2.03;
          amp *= 0.5;
        }
        return v;
      }

      void main() {
        // Domain-warped fbm: n1 distorts the lookup of n2 → wispy folds.
        // uTime drifts the cloud, uScroll pushes it slowly as you travel.
        vec2 p = vUv * 3.0 + vec2(uTime * 0.012, uTime * -0.008) + uScroll * 0.0008;
        float n1 = fbm(p);
        float n2 = fbm(p * 1.8 + n1 * 1.6 + vec2(4.7, 9.2));

        vec3 nebula = mix(uColorA, uColorB, smoothstep(0.3, 0.8, n2));
        float density = smoothstep(0.42, 0.95, (n1 + n2) * 0.55);
        float mask = smoothstep(1.25, 0.25, length(vUv - 0.5) * 2.0); // vignette

        vec3 col = vec3(0.02, 0.02, 0.028);              // void black base
        col += vec3(0.106, 0.078, 0.22) * 0.5 * mask;    // deep indigo wash
        col += nebula * density * mask * uIntensity;     // the cloud itself

        gl_FragColor = vec4(col, 1.0);
      }
    \`,
  });

  const nebula = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), nebulaMat);
  nebula.position.z = -(DEPTH + 40);
  nebula.renderOrder = -1;
  scene.add(nebula);

  // Scale the plane to cover the frustum at its depth (1.6x margin
  // covers camera sway and the arrival fov change without rescaling).
  function fitNebula() {
    const dist = DEPTH + 40;
    const h = 2 * Math.tan(THREE.MathUtils.degToRad(60) / 2) * dist * 1.6;
    nebula.scale.set(h * camera.aspect, h, 1);
  }

  /* ---------------- 3. Focal star (arrival section) ---------------- */

  const focalMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uFocal: { value: 0 },
      uColorA: { value: colorA },
      uColorB: { value: colorB },
    },
    vertexShader: /* glsl */ \`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    \`,
    fragmentShader: /* glsl */ \`
      varying vec2 vUv;
      uniform float uTime;
      uniform float uFocal;
      uniform vec3 uColorA;
      uniform vec3 uColorB;

      void main() {
        vec2 q = vUv - 0.5;
        float d = length(q) * 2.0;
        float pulse = 1.0 + 0.05 * sin(uTime * 1.4);

        float core = smoothstep(0.16 * pulse, 0.0, d);     // white-hot center
        float halo = pow(max(0.0, 1.0 - d), 2.6);          // soft falloff
        float spikeH = pow(max(0.0, 1.0 - abs(q.y) * 26.0), 3.0) * pow(max(0.0, 1.0 - d), 1.4);
        float spikeV = pow(max(0.0, 1.0 - abs(q.x) * 26.0), 3.0) * pow(max(0.0, 1.0 - d), 1.4) * 0.6;

        vec3 col = mix(uColorB, vec3(1.0), core);
        col += uColorA * halo * 0.45;

        float a = (core * 1.2 + halo * 0.8 + (spikeH + spikeV) * 0.5) * uFocal;
        gl_FragColor = vec4(col, a);
      }
    \`,
  });

  const focal = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), focalMat);
  focal.position.set(0, 3, -300);
  focal.visible = false;
  scene.add(focal);

  /* ---------------- Resize / render ---------------- */

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    starMat.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    fitNebula();
  }
  window.addEventListener('resize', resize);
  fitNebula();

  const lerp = (a, b, t) => a + (b - a) * t;

  function render(time) {
    // Ease current values toward targets — this is what makes the
    // camera feel heavy and weightless at once.
    current.scroll = lerp(current.scroll, target.scroll, 0.1);
    current.focal = lerp(current.focal, target.focal, 0.09);
    current.fov = lerp(current.fov, target.fov, 0.07);
    current.px = lerp(current.px, target.px, 0.045);
    current.py = lerp(current.py, target.py, 0.045);

    const t = reduced ? 0 : time; // reduced motion: freeze the drift
    starMat.uniforms.uTime.value = t;
    starMat.uniforms.uScroll.value = current.scroll;
    nebulaMat.uniforms.uTime.value = t;
    nebulaMat.uniforms.uScroll.value = current.scroll;
    focalMat.uniforms.uTime.value = t;
    focalMat.uniforms.uFocal.value = current.focal;
    focal.visible = current.focal > 0.01;
    focal.scale.setScalar(0.55 + current.focal * 0.75);

    if (!reduced) {
      camera.position.x = current.px * 6;
      camera.position.y = current.py * -3.5;
      camera.lookAt(0, 0, -220);
    }
    if (Math.abs(current.fov - camera.fov) > 0.01) {
      camera.fov = current.fov;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
  }

  return {
    render,
    /** scroll distance travelled into the field (world units) */
    setScroll: (v) => { target.scroll = v; },
    /** arrival glow intensity 0..1 */
    setFocal: (v) => { target.focal = v; },
    /** camera fov — narrowing it reads as "approaching" */
    setFov: (v) => { target.fov = v; },
    /** normalized pointer (-1..1) for subtle camera sway */
    setPointer: (x, y) => { target.px = x; target.py = y; },
  };
}


/* ===== merged from js/main.js ===== */
/* ============================================================
   VESPER — orchestration
   Owns: Lenis↔ScrollTrigger sync, the intro loader, every GSAP
   timeline, DOM parallax stars, the magnetic button, the cursor.
   The WebGL scene (js/scene.js) is a dumb renderer — this file
   feeds it scroll progress / focal intensity / fov.
   ============================================================ */

/* ====================== TUNING ======================
   Everything you'd want to tweak lives here.            */
const CONFIG = {
  // --- Scroll weight: higher = heavier, more "drifting in vacuum".
  //     1.0 feels normal, 2.2 feels syrupy. ---
  scrollWeight: 1.7,

  // --- Lenis easing curve (expo-style ease-out = weighted glide) ---
  scrollEasing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

  // --- One easing personality for all GSAP reveals ---
  ease: 'power3.out',      // standard reveals
  easeLong: 'expo.out',    // hero / big headline reveals

  // --- Particle counts (mobile heavily reduced) ---
  stars: { desktop: 6000, mobile: 1400 },

  // --- World units of forward travel over the full page scroll.
  //     Raised for the longer page so the starfield keeps flowing. ---
  travel: 1100,

  // --- Nebula shader palette + strength (also tints stars/focal glow) ---
  nebula: {
    colorA: '#FF4D9D',   // magenta
    colorB: '#46E5FF',   // cyan
    intensity: 0.38,     // 0 = off, 0.6 = loud
  },
};
/* ==================================================== */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const IS_MOBILE =
  window.matchMedia('(max-width: 768px)').matches ||
  window.matchMedia('(pointer: coarse)').matches;

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.defaults({ ease: CONFIG.ease });

window.__vesperBooted = true; // tells the inline fail-safe the scripts are alive

/* ---------------- WebGL scene ---------------- */

// Isolated: if WebGL is unavailable, the starfield is the centrepiece — but
// the page (scroll, reveals) must still work, so fall back to a no-op stub.
let sceneApi;
try {
  sceneApi = createScene({
    canvas: document.getElementById('webgl'),
    config: CONFIG,
    isMobile: IS_MOBILE,
    reduced: REDUCED,
  });
} catch (err) {
  console.warn('[VESPER] WebGL unavailable — continuing without the starfield.', err);
  document.getElementById('webgl').style.display = 'none';
  sceneApi = { render() {}, setScroll() {}, setFocal() {}, setFov() {}, setPointer() {} };
}

/* ============================================================
   LENIS ↔ SCROLLTRIGGER SYNC (the critical bit)

   One scroll position, one clock:
   - Lenis animates the *native* scroll position with a weighted
     easing curve.
   - Every time Lenis actually moves the page, it tells
     ScrollTrigger to re-measure (\`lenis.on('scroll', ScrollTrigger.update)\`).
   - Lenis's own rAF is never used; instead GSAP's ticker drives
     \`lenis.raf()\`, so Lenis, every tween, and the WebGL render
     all step inside the SAME requestAnimationFrame.
   - lagSmoothing(0) stops GSAP from "catching up" after a janky
     frame, which would cause a visible scroll jump.

   With reduced motion we skip Lenis entirely — ScrollTrigger
   falls back to native scroll and everything still works.
   ============================================================ */

let lenis = null;

if (!REDUCED) {
  lenis = new Lenis({
    duration: CONFIG.scrollWeight,
    easing: CONFIG.scrollEasing,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // GSAP time is seconds, Lenis wants ms
  });

  gsap.ticker.lagSmoothing(0);

  lenis.stop(); // page is frozen until the loader finishes

  window.__lenis = lenis; // debug handle (lets tooling drive the smooth scroll)
}

// The WebGL render also runs on the GSAP ticker → same frame as Lenis.
gsap.ticker.add((time) => sceneApi.render(time));

/* ---------------- Scroll → scene ----------------
   Map total page progress (0..1) to forward travel in world
   units. The scene lerps toward it, adding extra drift on top
   of Lenis's own easing. */

if (!REDUCED) {
  ScrollTrigger.create({
    start: 0,
    end: () => ScrollTrigger.maxScroll(window),
    onUpdate: (self) => sceneApi.setScroll(self.progress * CONFIG.travel),
  });

  // Subtle camera sway from the pointer (desktop only)
  if (!IS_MOBILE) {
    window.addEventListener('mousemove', (e) => {
      sceneApi.setPointer(
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1
      );
    });
  }
}

/* SplitText measures the DOM — wait for final font metrics before
   splitting anything (top-level await; this is an ES module). The
   loader overlay is plain black, so the beat of delay is invisible. */
await document.fonts.ready;

/* ============================================================
   1. INTRO LOADER
   Counter 000→100 over the void with a single point of light.
   On completion the dot flares and expands "into" the starfield
   (it scales up while the black overlay fades, revealing the
   already-rendering WebGL field beneath), then the hero
   headline assembles.
   ============================================================ */

const loaderEl = document.querySelector('.loader');
const countEl = document.querySelector('.loader-count');

// Pre-split the hero headline so chars exist (hidden) before reveal.
const heroSplit = new SplitText('.hero-title', { type: 'chars' });
gsap.set(heroSplit.chars, { autoAlpha: 0 });
gsap.set(['.hero-sub', '.scroll-cue'], { autoAlpha: 0 });

function revealHero() {
  const tl = gsap.timeline();
  if (REDUCED) {
    tl.to(heroSplit.chars, { autoAlpha: 1, duration: 0.8 })
      .to(['.hero-sub', '.scroll-cue'], { autoAlpha: 1, duration: 0.8 }, '<');
    return tl;
  }
  // Constellation assembly: letters condense out of the dark in a
  // random order — blur + scale collapsing into place.
  tl.fromTo(
    heroSplit.chars,
    { autoAlpha: 0, scale: 1.55, filter: 'blur(14px)' },
    {
      autoAlpha: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.7,
      ease: CONFIG.easeLong,
      stagger: { each: 0.07, from: 'random' },
    }
  )
    .to('.hero-sub', { autoAlpha: 1, duration: 1.2 }, '-=0.9')
    .to('.scroll-cue', { autoAlpha: 1, duration: 1.2 }, '-=0.8');
  return tl;
}

function runLoader() {
  const done = () => {
    loaderEl.style.display = 'none';
    document.body.classList.remove('loading');
    lenis?.start();
    ScrollTrigger.refresh();
  };

  if (REDUCED) {
    countEl.textContent = '100';
    gsap.to(loaderEl, { autoAlpha: 0, duration: 0.5, onComplete: done });
    revealHero();
    return;
  }

  const counter = { v: 0 };
  const tl = gsap.timeline();

  tl
    // count up while the lone point of light idles
    .to(counter, {
      v: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        countEl.textContent = String(Math.round(counter.v)).padStart(3, '0');
      },
    })
    .to(['.loader-count', '.loader-label'], { autoAlpha: 0, duration: 0.5 })
    // the point flares...
    .to('.loader-dot', { scale: 2.4, duration: 0.55, ease: 'power3.in' }, '<')
    // ...then expands into the starfield as the void overlay lifts
    .to('.loader-dot', { scale: 40, autoAlpha: 0, duration: 1.5, ease: 'expo.inOut' })
    .to(loaderEl, { autoAlpha: 0, duration: 1.1, ease: 'power2.out', onComplete: done }, '<40%')
    .add(revealHero(), '-=1.0');
}

/* ============================================================
   2. HERO — scrub the title away as you leave the section
   ============================================================ */

if (!REDUCED) {
  gsap.to('.hero-inner', {
    yPercent: -28,
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
  gsap.to('.scroll-cue', {
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '40% top',
      scrub: true,
    },
  });
}

/* ============================================================
   3. PINNED ARRIVAL
   The section pins for 160% of viewport height. While pinned
   (scrubbed to scroll):
     0.00–0.50  focal star fades in & swells, fov narrows
                60→47 (narrowing fov = the approach)
     0.25–0.65  the text line reveals word by word
     0.65–0.80  hold — let it breathe
     0.80–1.00  text drifts off, glow settles to an ember,
                fov relaxes, scroll resumes naturally
   ============================================================ */

const arrivalSplit = new SplitText('.arrival-line', { type: 'words' });

if (REDUCED) {
  gsap.from(arrivalSplit.words, {
    autoAlpha: 0,
    duration: 0.8,
    scrollTrigger: { trigger: '.arrival', start: 'top 60%' },
    onStart: () => sceneApi.setFocal(0.55),
  });
} else {
  const focal = { v: 0 };
  const fov = { v: 60 };

  gsap
    .timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.arrival',
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    })
    .to(focal, { v: 1, duration: 0.5, onUpdate: () => sceneApi.setFocal(focal.v) }, 0)
    .to(fov, { v: 47, duration: 0.5, onUpdate: () => sceneApi.setFov(fov.v) }, 0)
    .fromTo(
      arrivalSplit.words,
      { autoAlpha: 0, y: 26, filter: 'blur(6px)' },
      {
        autoAlpha: 1, y: 0, filter: 'blur(0px)',
        duration: 0.4, stagger: 0.05, ease: CONFIG.ease,
      },
      0.25
    )
    .to({}, { duration: 0.15 }) // hold
    .to('.arrival-line', { autoAlpha: 0, y: -24, duration: 0.2 })
    .to(focal, { v: 0.16, duration: 0.2, onUpdate: () => sceneApi.setFocal(focal.v) }, '<')
    .to(fov, { v: 60, duration: 0.2, onUpdate: () => sceneApi.setFov(fov.v) }, '<');
}

/* ============================================================
   4. CONTENT PANELS — reveals + DOM parallax depth
   ============================================================ */

document.querySelectorAll('.panel').forEach((panel) => {
  const title = panel.querySelector('.panel-title');

  const mask = panel.querySelector('.img-mask');
  const plate = panel.querySelector('.img-plate');

  if (REDUCED) {
    gsap.from(panel.querySelectorAll('.panel-label, .panel-title, .panel-body, .panel-figure'), {
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: { trigger: panel, start: 'top 65%' },
    });
    return;
  }

  // Masked line reveal: SplitText wraps each line in a clipping
  // wrapper (mask:'lines'), lines slide up out of the mask.
  const split = new SplitText(title, { type: 'lines', mask: 'lines' });
  gsap.from(split.lines, {
    yPercent: 115,
    duration: 1.5,
    ease: CONFIG.easeLong,
    stagger: 0.1,
    scrollTrigger: { trigger: panel, start: 'top 68%' },
  });

  gsap.from(panel.querySelectorAll('.panel-label, .panel-body'), {
    autoAlpha: 0,
    y: 34,
    duration: 1.4,
    stagger: 0.15,
    scrollTrigger: { trigger: panel, start: 'top 62%' },
  });

  // Image plate: clip-path wipe up while the photo settles 1.3 → 1.
  if (mask && plate) {
    gsap.timeline({ scrollTrigger: { trigger: panel, start: 'top 72%' } })
      .fromTo(mask,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.7, ease: CONFIG.easeLong })
      .fromTo(plate, { scale: 1.3 }, { scale: 1, duration: 2.0, ease: CONFIG.easeLong }, 0);
    gsap.from(panel.querySelector('figcaption'), {
      autoAlpha: 0, y: 18, duration: 1.1,
      scrollTrigger: { trigger: panel, start: 'top 58%' },
    });
  }
});

/* ---------------- DOM parallax star layers ----------------
   Three layers per panel at different "depths". Each layer is
   scrubbed over a different y-distance while the panel crosses
   the viewport — foreground stars (bigger, glowing) travel ~3x
   farther than background ones. Combined with the WebGL field
   this is what sells real depth. */

if (!REDUCED) {
  // [depth, star count] — depth 3 = foreground (fast, bright)
  const LAYERS = IS_MOBILE
    ? [[1, 4], [2, 4], [3, 3]]
    : [[1, 9], [2, 8], [3, 6]];

  document.querySelectorAll('.parallax-field').forEach((field) => {
    LAYERS.forEach(([depth, count]) => {
      const layer = document.createElement('div');
      layer.className = 'p-layer';

      for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        const size = depth === 3 ? 2.5 + Math.random() * 1.5 : depth * 0.8 + Math.random();
        s.className = 'p-star' + (depth === 3 ? ' p-star--near' : '');
        s.style.cssText = \`
          left:\${Math.random() * 100}%;
          top:\${Math.random() * 100}%;
          width:\${size}px; height:\${size}px;
          opacity:\${0.25 + (depth / 3) * 0.6};
        \`;
        layer.appendChild(s);
      }
      field.appendChild(layer);

      gsap.fromTo(
        layer,
        { y: depth * 70 },
        {
          y: -depth * 150, // foreground travels farthest = moves fastest
          ease: 'none',
          scrollTrigger: {
            trigger: field.closest('.panel'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });
  });
}

/* ============================================================
   VELOCITY MARQUEE
   A base loop drifts the ticker slowly (−50% = one full set, so
   the seam is invisible). Every Lenis scroll event slams the
   loop's timeScale to a velocity-scaled boost (and flips its
   sign with scroll direction), then eases back to a gentle idle
   drift — so the ticker "reacts" to how hard you scroll.
   ============================================================ */

if (!REDUCED) {
  const marqTrack = document.querySelector('.marquee-track');
  if (marqTrack && lenis) {
    const loop = gsap.to(marqTrack, {
      xPercent: -50, repeat: -1, duration: 26, ease: 'none',
    });
    lenis.on('scroll', ({ velocity = 0 }) => {
      const dir = velocity >= 0 ? 1 : -1;
      const boost = dir * (1 + Math.min(Math.abs(velocity) * 0.5, 7));
      loop.timeScale(boost);                                   // snap to scroll speed
      gsap.to(loop, { timeScale: dir, duration: 1.0, ease: 'power2.out', overwrite: true }); // ease back to idle drift
    });
  }
}

/* ============================================================
   STATS READOUT — numbers count up once, on enter
   ============================================================ */

gsap.utils.toArray('.stat-num').forEach((el) => {
  const to = parseFloat(el.dataset.to);
  const suffix = (el.dataset.suffix || '').replace(/\\s/g, '\\u00A0');
const fmt = (n) => Math.round(n).toLocaleString('en-US') + suffix;

  if (REDUCED) { el.textContent = fmt(to); return; }

  const obj = { v: 0 };
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => gsap.to(obj, {
      v: to, duration: 2.2, ease: 'power3.out',
      onUpdate: () => { el.textContent = fmt(obj.v); },
    }),
  });
});

gsap.from('.stats-label', {
  autoAlpha: 0, y: 20, duration: 1,
  scrollTrigger: { trigger: '.stats', start: 'top 78%' },
});
gsap.from('.stats .stat', {
  autoAlpha: 0, y: 30, duration: REDUCED ? 0.6 : 1.2, stagger: 0.1,
  scrollTrigger: { trigger: '.stats', start: 'top 72%' },
});

/* ============================================================
   DEEP-FIELD GALLERY — horizontal scroll (the signature moment)
   The track is wider than the viewport; ScrollTrigger pins the
   section and scrubs the track's x from 0 to −(trackWidth −
   viewport), turning vertical scroll into a sideways pan. On
   mobile / reduced motion it falls back to a vertical stack.
   ============================================================ */

const gallery = document.querySelector('.gallery');
const galleryTrack = document.querySelector('.gallery-track');

if (gallery && galleryTrack) {
  if (REDUCED || IS_MOBILE) {
    gallery.classList.add('gallery--stack');
    gsap.utils.toArray('.gallery-intro, .gallery .card').forEach((el) => {
      gsap.from(el, {
        autoAlpha: 0, y: REDUCED ? 0 : 50, duration: REDUCED ? 0.6 : 1.3,
        scrollTrigger: { trigger: el, start: 'top 84%' },
      });
    });
  } else {
    const dist = () => galleryTrack.scrollWidth - window.innerWidth;
    gsap.to(galleryTrack, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: gallery,
        start: 'top top',
        end: () => '+=' + dist(),
        pin: true, scrub: true, anticipatePin: 1, invalidateOnRefresh: true,
      },
    });
    gsap.from('.gallery-intro > *', {
      autoAlpha: 0, y: 40, duration: 1.3, stagger: 0.12,
      scrollTrigger: { trigger: gallery, start: 'top 70%' },
    });
  }
}

/* ============================================================
   FULL-BLEED EXPANSE — clip-path reveal + parallax + caption
   ============================================================ */

{
  const expTitle = document.querySelector('.expanse-title');
  const expSplit = new SplitText(expTitle, { type: 'lines', mask: 'lines' });

  if (REDUCED) {
    gsap.set('.expanse-mask', { clearProps: 'clipPath' });
  } else {
    gsap.timeline({ scrollTrigger: { trigger: '.expanse', start: 'top 78%' } })
      .fromTo('.expanse-mask',
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.8, ease: CONFIG.easeLong })
      .from(expSplit.lines, { yPercent: 115, duration: 1.4, stagger: 0.12, ease: CONFIG.easeLong }, '-=0.9')
      .from('.expanse-meta', { autoAlpha: 0, y: 18, duration: 1 }, '-=0.6');

    // slow vertical parallax of the image within its overscan
    gsap.fromTo('.expanse-img',
      { yPercent: -6 },
      { yPercent: 6, ease: 'none',
        scrollTrigger: { trigger: '.expanse', start: 'top bottom', end: 'bottom top', scrub: true } });
  }
}

/* ============================================================
   TRANSMISSION LOG — rows reveal as they enter
   ============================================================ */

gsap.from('.log-label', {
  autoAlpha: 0, y: 20, duration: 1,
  scrollTrigger: { trigger: '.log', start: 'top 78%' },
});
gsap.utils.toArray('.log-row').forEach((row) => {
  gsap.from(row, {
    autoAlpha: 0, y: 24, duration: REDUCED ? 0.5 : 1.1,
    scrollTrigger: { trigger: row, start: 'top 90%' },
  });
});

/* ============================================================
   SCROLL-VELOCITY SKEW — images lean into fast scrolling.
   ScrollTrigger.getVelocity() is fed through a clamp into a
   weighted quickTo, so the skew snaps on and eases off.
   ============================================================ */

if (!REDUCED && !IS_MOBILE) {
  const setters = gsap.utils.toArray('.card-plate, .img-plate, .expanse-img')
    .map((el) => gsap.quickTo(el, 'skewY', { duration: 0.5, ease: 'power3' }));
  const clamp = gsap.utils.clamp(-6, 6);
  ScrollTrigger.create({
    onUpdate: (self) => {
      const s = clamp(self.getVelocity() / -380);
      setters.forEach((set) => set(s));
    },
  });
}

/* ============================================================
   SCROLL-PROGRESS METER — fixed hairline + percent readout
   ============================================================ */

{
  const fill = document.querySelector('.progress-fill');
  const pct = document.querySelector('.progress-pct');
  const meter = document.querySelector('.progress');
  if (fill && pct) {
    ScrollTrigger.create({
      start: 0, end: () => ScrollTrigger.maxScroll(window),
      onUpdate: (self) => {
        gsap.set(fill, { scaleX: self.progress });
        pct.textContent = String(Math.round(self.progress * 100)).padStart(2, '0');
      },
    });
    // fade the meter out over the footer so it never collides with the credit line
    if (meter) {
      ScrollTrigger.create({
        trigger: '.footer', start: 'top 60%', end: 'top top',
        onUpdate: (self) => gsap.set(meter, { autoAlpha: 1 - self.progress }),
      });
    }
  }
}

/* ============================================================
   5. FOOTER — magnetic button
   The button is pulled toward the cursor inside a padded
   hitbox; the label moves a touch less for a layered feel.
   ============================================================ */

const wrap = document.querySelector('.magnetic-wrap');
const btn = document.querySelector('.magnetic-btn');

if (!REDUCED && !IS_MOBILE) {
  const xTo = gsap.quickTo(btn, 'x', { duration: 0.7, ease: CONFIG.ease });
  const yTo = gsap.quickTo(btn, 'y', { duration: 0.7, ease: CONFIG.ease });
  const lxTo = gsap.quickTo('.magnetic-label', 'x', { duration: 0.7, ease: CONFIG.ease });
  const lyTo = gsap.quickTo('.magnetic-label', 'y', { duration: 0.7, ease: CONFIG.ease });

  wrap.addEventListener('mousemove', (e) => {
    const r = wrap.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    xTo(dx * 0.4); yTo(dy * 0.4);
    lxTo(dx * 0.12); lyTo(dy * 0.12);
  });

  wrap.addEventListener('mouseleave', () => {
    xTo(0); yTo(0); lxTo(0); lyTo(0);
  });
}

// "Begin the journey" → glide back to the top of the crossing
btn.addEventListener('click', () => {
  if (lenis) lenis.scrollTo(0, { duration: 3, easing: CONFIG.scrollEasing });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer text reveal
gsap.from(['.footer-kicker', '.footer-title', '.magnetic-wrap'], {
  autoAlpha: 0,
  y: REDUCED ? 0 : 40,
  duration: REDUCED ? 0.8 : 1.5,
  stagger: 0.12,
  scrollTrigger: { trigger: '.footer', start: 'top 65%' },
});

/* ============================================================
   CUSTOM CURSOR — glowing dot + lagging tail
   Two quickTo pairs at different durations: the dot is tight,
   the tail drags behind on the same weighted ease.
   ============================================================ */

if (window.matchMedia('(pointer: fine)').matches && !REDUCED) {
  document.body.classList.add('has-cursor');

  const dotX = gsap.quickTo('.cursor-dot', 'x', { duration: 0.16, ease: CONFIG.ease });
  const dotY = gsap.quickTo('.cursor-dot', 'y', { duration: 0.16, ease: CONFIG.ease });
  const tailX = gsap.quickTo('.cursor-tail', 'x', { duration: 0.65, ease: CONFIG.ease });
  const tailY = gsap.quickTo('.cursor-tail', 'y', { duration: 0.65, ease: CONFIG.ease });

  window.addEventListener('mousemove', (e) => {
    dotX(e.clientX); dotY(e.clientY);
    tailX(e.clientX); tailY(e.clientY);
  });

  // tail swells over interactive elements
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ---------------- Kickoff ---------------- */

runLoader();

`},{src:"",type:"",id:"",async:!1,defer:!1,content:`
    setTimeout(function () {
      if (!window.__vesperBooted) {
        document.body.classList.remove('loading');
        var l = document.querySelector('.loader');
        if (l) l.style.display = 'none';
        console.warn('[VESPER] scripts did not boot — revealed page via fail-safe.');
      }
    }, 6000);
  `}],Af="",Of="",Df="",Mf="",If="loading",Ff="",Uf=["click","change","input","submit","mouseover","mouseout","mouseenter","mouseleave","keydown","keyup","focus","blur"];function Vs(e,n){const t=e.id,r=e.className,l=e.getAttribute("style");return n.id&&(e.id=n.id),n.className.split(/\s+/).filter(Boolean).forEach(o=>e.classList.add(o)),n.style&&(e.style.cssText=[e.style.cssText,n.style].filter(Boolean).join("; ")),()=>{e.id=t,e.className=r,l===null?e.removeAttribute("style"):e.setAttribute("style",l)}}function Hf(){const e=Vs(document.documentElement,{id:Af,className:Of,style:Df}),n=Vs(document.body,{id:Mf,className:If,style:Ff});return()=>{n(),e()}}function Bf(e){const n=[];return Uf.forEach(t=>{e.querySelectorAll(`[data-sinera-on${t}]`).forEach(r=>{const l=r.getAttribute(`data-sinera-on${t}`);if(!l)return;const o=function(i){Function("event",l).call(r,i)===!1&&(i.preventDefault(),i.stopPropagation())};r.addEventListener(t,o),n.push(()=>r.removeEventListener(t,o))})}),()=>n.forEach(t=>t())}function Vf(e){const n=document.createElement("script");return e.id&&(n.id=e.id),e.type&&(n.type=e.type),e.async&&(n.async=!0),e.defer&&(n.defer=!0),e.src?n.src=e.src:e.content&&(n.textContent=e.content),document.body.appendChild(n),n}function $f(){return Lt.useLayoutEffect(()=>Hf(),[]),Lt.useEffect(()=>{const e=Bf(document),n=zf.filter(t=>t.src||t.content).map(Vf);return()=>{e(),n.forEach(t=>t.remove())}},[]),c.jsxs("div",{className:"sinera-source-body loading",children:[c.jsx("canvas",{id:"webgl","aria-hidden":"true"}),c.jsxs("div",{className:"loader","aria-hidden":"true",children:[c.jsx("div",{className:"loader-dot"}),c.jsx("div",{className:"loader-count mono",children:"000"}),c.jsx("div",{className:"loader-label mono",children:"CALIBRATING OPTICS"})]}),c.jsxs("header",{className:"site-head",children:[c.jsx("div",{className:"logo",children:"VESPER"}),c.jsx("div",{className:"head-meta mono",children:"DEEP-FIELD OBSERVATORY  ·  EST. 2147"})]}),c.jsxs("main",{children:[c.jsxs("section",{className:"hero",id:"hero",children:[c.jsxs("div",{className:"hero-inner",children:[c.jsx("h1",{className:"hero-title",children:"VESPER"}),c.jsx("p",{className:"hero-sub mono",children:"A LISTENING POST AT THE EDGE OF THE CARINA REACH"})]}),c.jsxs("div",{className:"scroll-cue mono",children:[c.jsx("span",{children:"SCROLL TO BEGIN THE CROSSING"}),c.jsx("span",{className:"cue-line"})]})]}),c.jsx("section",{className:"marquee","aria-hidden":"true",children:c.jsxs("div",{className:"marquee-track",children:[c.jsxs("div",{className:"marquee-set",children:[c.jsx("span",{children:"CARINA REACH"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"RA 10ʰ 45ᵐ"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"DEC −59° 41′"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"400 LIGHT-YEARS OUT"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"DEEP FIELD ACTIVE"}),c.jsx("i",{children:"✦"})]}),c.jsxs("div",{className:"marquee-set",children:[c.jsx("span",{children:"CARINA REACH"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"RA 10ʰ 45ᵐ"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"DEC −59° 41′"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"400 LIGHT-YEARS OUT"}),c.jsx("i",{children:"✦"}),c.jsx("span",{children:"DEEP FIELD ACTIVE"}),c.jsx("i",{children:"✦"})]})]})}),c.jsx("section",{className:"arrival",id:"arrival",children:c.jsxs("p",{className:"arrival-line",children:["Four hundred light-years out,",c.jsx("br",{}),"the noise of home goes quiet."]})}),c.jsxs("section",{className:"stats",id:"readout",children:[c.jsx("p",{className:"stats-label mono",children:"01 — BY THE NUMBERS"}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-num","data-to":"1100",children:"0"}),c.jsx("span",{className:"stat-cap mono",children:"Cold mirror segments"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-num","data-to":"240000",children:"0"}),c.jsx("span",{className:"stat-cap mono",children:"Exposure hours logged"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-num","data-to":"11483",children:"0"}),c.jsx("span",{className:"stat-cap mono",children:"Galaxies in one frame"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-num","data-to":"400","data-suffix":" LY",children:"0"}),c.jsx("span",{className:"stat-cap mono",children:"Distance to the station"})]})]})]}),c.jsxs("section",{className:"panel",id:"instrument",children:[c.jsxs("div",{className:"panel-grid",children:[c.jsxs("div",{className:"panel-inner",children:[c.jsx("span",{className:"panel-label mono",children:"02 — THE INSTRUMENT"}),c.jsxs("h2",{className:"panel-title",children:["A mirror the size",c.jsx("br",{}),"of a small sea"]}),c.jsx("p",{className:"panel-body",children:"Eleven hundred cold hexagons, grown in orbit and folded open like a night flower. Vesper does not take pictures. It holds its breath for years at a time, and lets the ancient light walk in."})]}),c.jsxs("figure",{className:"panel-figure",children:[c.jsx("div",{className:"img-mask",children:c.jsx("img",{className:"img-plate",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d72837c-6294-419d-877a-ba6ea4eb2a70_1600w.png",alt:"The primary mirror array",loading:"lazy"})}),c.jsx("figcaption",{className:"mono",children:"PRIMARY ARRAY · 1,100 SEGMENTS"})]})]}),c.jsx("div",{className:"parallax-field","aria-hidden":"true"})]}),c.jsxs("section",{className:"panel panel--flip",id:"deepfield",children:[c.jsxs("div",{className:"panel-grid",children:[c.jsxs("div",{className:"panel-inner",children:[c.jsx("span",{className:"panel-label mono",children:"03 — THE DEEP FIELD"}),c.jsxs("h2",{className:"panel-title",children:["Stare at nothing.",c.jsx("br",{}),"It becomes everything."]}),c.jsx("p",{className:"panel-body",children:"The patch of sky we watch is smaller than a grain of sand held at arm's length — and inside it, eleven thousand galaxies are burning quietly. Emptiness, it turns out, was never the right word."})]}),c.jsxs("figure",{className:"panel-figure",children:[c.jsx("div",{className:"img-mask",children:c.jsx("img",{className:"img-plate",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6260a51-f244-4eb9-98f5-8c08c05cbe58_1600w.png",alt:"A deep-field exposure",loading:"lazy"})}),c.jsx("figcaption",{className:"mono",children:"FIELD 9 · 52,000 LY DEEP"})]})]}),c.jsx("div",{className:"parallax-field","aria-hidden":"true"})]}),c.jsx("section",{className:"gallery",id:"catalogue",children:c.jsxs("div",{className:"gallery-track",children:[c.jsxs("div",{className:"gallery-intro",children:[c.jsx("span",{className:"mono panel-label",children:"04 — THE CATALOGUE"}),c.jsxs("h2",{className:"gallery-title",children:["What the",c.jsx("br",{}),"silence holds"]}),c.jsx("p",{className:"gallery-hint mono",children:"SCROLL TO PAN →"})]}),c.jsxs("figure",{className:"card","data-hover":"",children:[c.jsx("div",{className:"card-img",children:c.jsx("img",{className:"card-plate",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38c7b74f-eab0-4d72-bd1d-38f275610390_1600w.png",alt:"The Loom",loading:"lazy"})}),c.jsxs("figcaption",{children:[c.jsx("span",{className:"card-name",children:"The Loom"}),c.jsx("span",{className:"card-meta mono",children:"VX-2291 · 1,344 LY"})]})]}),c.jsxs("figure",{className:"card","data-hover":"",children:[c.jsx("div",{className:"card-img",children:c.jsx("img",{className:"card-plate",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7afbb74e-e716-4139-9356-09572511d3e9_1600w.png",alt:"Pinwheel Deep",loading:"lazy"})}),c.jsxs("figcaption",{children:[c.jsx("span",{className:"card-name",children:"Pinwheel Deep"}),c.jsx("span",{className:"card-meta mono",children:"NGC-C7 · 21M LY"})]})]}),c.jsxs("figure",{className:"card","data-hover":"",children:[c.jsx("div",{className:"card-img",children:c.jsx("img",{className:"card-plate",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a72c12b-235b-4875-8cf0-128c0056eef2_1600w.png",alt:"The Eye",loading:"lazy"})}),c.jsxs("figcaption",{children:[c.jsx("span",{className:"card-name",children:"The Eye"}),c.jsx("span",{className:"card-meta mono",children:"PN-7 · 655 LY"})]})]}),c.jsxs("figure",{className:"card","data-hover":"",children:[c.jsx("div",{className:"card-img",children:c.jsx("img",{className:"card-plate",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02e44b57-332a-4e4c-96d3-cef8c655fee8_1600w.png",alt:"Ember Cloud",loading:"lazy"})}),c.jsxs("figcaption",{children:[c.jsx("span",{className:"card-name",children:"Ember Cloud"}),c.jsx("span",{className:"card-meta mono",children:"CR-99 · 7,500 LY"})]})]}),c.jsxs("figure",{className:"card","data-hover":"",children:[c.jsx("div",{className:"card-img",children:c.jsx("img",{className:"card-plate",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d712e20-8e94-4d39-b838-3b29529a7db9_1600w.png",alt:"The Halo",loading:"lazy"})}),c.jsxs("figcaption",{children:[c.jsx("span",{className:"card-name",children:"The Halo"}),c.jsx("span",{className:"card-meta mono",children:"SNR-V · 11,000 LY"})]})]})]})}),c.jsxs("section",{className:"expanse",id:"expanse",children:[c.jsx("div",{className:"expanse-mask",children:c.jsx("div",{className:"expanse-img"})}),c.jsxs("div",{className:"expanse-caption",children:[c.jsxs("h2",{className:"expanse-title",children:["One frame.",c.jsx("br",{}),"Eleven thousand suns."]}),c.jsx("p",{className:"expanse-meta mono",children:"FIELD 9 · CARINA REACH · 52,000 LY DEEP"})]})]}),c.jsxs("section",{className:"panel panel--center",id:"signals",children:[c.jsx("div",{className:"panel-grid panel-grid--solo",children:c.jsxs("div",{className:"panel-inner",children:[c.jsx("span",{className:"panel-label mono",children:"05 — THE SIGNALS"}),c.jsxs("h2",{className:"panel-title",children:["The dark",c.jsx("br",{}),"is not silent"]}),c.jsx("p",{className:"panel-body",children:"Pulsars keep time like lighthouses. Hydrogen hums at twenty-one centimetres. And once a decade, something we cannot name repeats itself — twice — and goes quiet. We log everything. We promise nothing."})]})}),c.jsx("div",{className:"parallax-field","aria-hidden":"true"})]}),c.jsxs("section",{className:"log",id:"log",children:[c.jsx("p",{className:"log-label mono",children:"06 — TRANSMISSIONS"}),c.jsxs("ul",{className:"log-list",children:[c.jsxs("li",{className:"log-row",children:[c.jsx("span",{className:"log-time mono",children:"2147.114 · 03:11"}),c.jsx("span",{className:"log-text",children:"Periodic source recovered at 21 cm. Two pulses, then silence."}),c.jsx("span",{className:"log-tag mono",children:"UNRESOLVED"})]}),c.jsxs("li",{className:"log-row",children:[c.jsx("span",{className:"log-time mono",children:"2147.109 · 22:48"}),c.jsx("span",{className:"log-text",children:"Gravitational lens confirmed behind Field 9. Eleven new galaxies."}),c.jsx("span",{className:"log-tag mono",children:"CATALOGUED"})]}),c.jsxs("li",{className:"log-row",children:[c.jsx("span",{className:"log-time mono",children:"2147.101 · 14:02"}),c.jsx("span",{className:"log-text",children:"Mirror reached thermal floor. Forty-eight micro-kelvin above zero."}),c.jsx("span",{className:"log-tag mono",children:"NOMINAL"})]}),c.jsxs("li",{className:"log-row",children:[c.jsx("span",{className:"log-time mono",children:"2147.094 · 06:37"}),c.jsx("span",{className:"log-text",children:"Carina drift compensated. Pointing error under one milliarcsecond."}),c.jsx("span",{className:"log-tag mono",children:"NOMINAL"})]})]})]}),c.jsxs("footer",{className:"footer",id:"footer",children:[c.jsx("p",{className:"footer-kicker mono",children:"THE CROSSING AWAITS"}),c.jsx("h2",{className:"footer-title",children:"Leave the map."}),c.jsx("div",{className:"magnetic-wrap",children:c.jsx("button",{className:"magnetic-btn",type:"button",children:c.jsx("span",{className:"magnetic-label",children:"Begin the journey"})})}),c.jsx("div",{className:"footer-meta mono",children:"VESPER OBSERVATORY © 2147 · A FICTION"})]})]}),c.jsxs("div",{className:"progress","aria-hidden":"true",children:[c.jsx("span",{className:"progress-label mono",children:"CROSSING"}),c.jsx("span",{className:"progress-track",children:c.jsx("span",{className:"progress-fill"})}),c.jsx("span",{className:"progress-pct mono",children:"00"})]}),c.jsx("div",{className:"grain","aria-hidden":"true"}),c.jsx("div",{className:"cursor-dot","aria-hidden":"true"}),c.jsx("div",{className:"cursor-tail","aria-hidden":"true"})]})}nc(document.getElementById("root")).render(c.jsx(wc.StrictMode,{children:c.jsx($f,{})}));
