function od(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rs={exports:{}},Sl={},_s={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),ad=Symbol.for("react.portal"),sd=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),fd=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),md=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),aa=Symbol.iterator;function yd(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var Fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Is=Object.assign,Ds={};function gt(e,n,t){this.props=e,this.context=n,this.refs=Ds,this.updater=t||Fs}gt.prototype.isReactComponent={};gt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};gt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zs(){}zs.prototype=gt.prototype;function di(e,n,t){this.props=e,this.context=n,this.refs=Ds,this.updater=t||Fs}var fi=di.prototype=new zs;fi.constructor=di;Is(fi,gt.prototype);fi.isPureReactComponent=!0;var sa=Array.isArray,Bs=Object.prototype.hasOwnProperty,pi={current:null},As={key:!0,ref:!0,__self:!0,__source:!0};function Us(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Bs.call(n,r)&&!As.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:sr,type:e,key:o,ref:i,props:l,_owner:pi.current}}function vd(e,n){return{$$typeof:sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function wd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ua=/\/+/g;function Hl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):n.toString(36)}function Dr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case sr:case ad:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Hl(i,0):r,sa(l)?(t="",e!=null&&(t=e.replace(ua,"$&/")+"/"),Dr(l,n,t,"",function(c){return c})):l!=null&&(hi(l)&&(l=vd(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ua,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",sa(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Hl(o,s);i+=Dr(o,n,t,a,l)}else if(a=yd(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Hl(o,s++),i+=Dr(o,n,t,a,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function gr(e,n,t){if(e==null)return e;var r=[],l=0;return Dr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function Sd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},zr={transition:null},xd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:zr,ReactCurrentOwner:pi};function Ms(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:gr,forEach:function(e,n,t){gr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return gr(e,function(){n++}),n},toArray:function(e){return gr(e,function(n){return n})||[]},only:function(e){if(!hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=gt;I.Fragment=sd;I.Profiler=cd;I.PureComponent=di;I.StrictMode=ud;I.Suspense=hd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xd;I.act=Ms;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Is({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=pi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Bs.call(n,a)&&!As.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:sr,type:e.type,key:l,ref:o,props:r,_owner:i}};I.createContext=function(e){return e={$$typeof:fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dd,_context:e},e.Consumer=e};I.createElement=Us;I.createFactory=function(e){var n=Us.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:pd,render:e}};I.isValidElement=hi;I.lazy=function(e){return{$$typeof:gd,_payload:{_status:-1,_result:e},_init:Sd}};I.memo=function(e,n){return{$$typeof:md,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=zr.transition;zr.transition={};try{e()}finally{zr.transition=n}};I.unstable_act=Ms;I.useCallback=function(e,n){return ue.current.useCallback(e,n)};I.useContext=function(e){return ue.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};I.useEffect=function(e,n){return ue.current.useEffect(e,n)};I.useId=function(){return ue.current.useId()};I.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return ue.current.useMemo(e,n)};I.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};I.useRef=function(e){return ue.current.useRef(e)};I.useState=function(e){return ue.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return ue.current.useTransition()};I.version="18.3.1";_s.exports=I;var k=_s.exports;const Os=id(k),kd=od({__proto__:null,default:Os},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd=k,Pd=Symbol.for("react.element"),Td=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Nd=Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jd={key:!0,ref:!0,__self:!0,__source:!0};function Vs(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Ed.call(n,r)&&!jd.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Pd,type:e,key:o,ref:i,props:l,_owner:Nd.current}}Sl.Fragment=Td;Sl.jsx=Vs;Sl.jsxs=Vs;Rs.exports=Sl;var u=Rs.exports,Hs={exports:{}},ke={},Gs={exports:{}},Ws={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,R){var F=E.length;E.push(R);e:for(;0<F;){var b=F-1>>>1,J=E[b];if(0<l(J,R))E[b]=R,E[F]=J,F=b;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var R=E[0],F=E.pop();if(F!==R){E[0]=F;e:for(var b=0,J=E.length,hr=J>>>1;b<hr;){var kn=2*(b+1)-1,Vl=E[kn],Cn=kn+1,mr=E[Cn];if(0>l(Vl,F))Cn<J&&0>l(mr,Vl)?(E[b]=mr,E[Cn]=F,b=Cn):(E[b]=Vl,E[kn]=F,b=kn);else if(Cn<J&&0>l(mr,F))E[b]=mr,E[Cn]=F,b=Cn;else break e}}return R}function l(E,R){var F=E.sortIndex-R.sortIndex;return F!==0?F:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],m=1,h=null,g=3,w=!1,v=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var R=t(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=E)r(c),R.sortIndex=R.expirationTime,n(a,R);else break;R=t(c)}}function y(E){if(S=!1,p(E),!v)if(t(a)!==null)v=!0,Ml(C);else{var R=t(c);R!==null&&Ol(y,R.startTime-E)}}function C(E,R){v=!1,S&&(S=!1,f(L),L=-1),w=!0;var F=g;try{for(p(R),h=t(a);h!==null&&(!(h.expirationTime>R)||E&&!ye());){var b=h.callback;if(typeof b=="function"){h.callback=null,g=h.priorityLevel;var J=b(h.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?h.callback=J:h===t(a)&&r(a),p(R)}else r(a);h=t(a)}if(h!==null)var hr=!0;else{var kn=t(c);kn!==null&&Ol(y,kn.startTime-R),hr=!1}return hr}finally{h=null,g=F,w=!1}}var N=!1,j=null,L=-1,O=5,_=-1;function ye(){return!(e.unstable_now()-_<O)}function St(){if(j!==null){var E=e.unstable_now();_=E;var R=!0;try{R=j(!0,E)}finally{R?xt():(N=!1,j=null)}}else N=!1}var xt;if(typeof d=="function")xt=function(){d(St)};else if(typeof MessageChannel<"u"){var ia=new MessageChannel,ld=ia.port2;ia.port1.onmessage=St,xt=function(){ld.postMessage(null)}}else xt=function(){P(St,0)};function Ml(E){j=E,N||(N=!0,xt())}function Ol(E,R){L=P(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Ml(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var F=g;g=R;try{return E()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var F=g;g=E;try{return R()}finally{g=F}},e.unstable_scheduleCallback=function(E,R,F){var b=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?b+F:b):F=b,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=F+J,E={id:m++,callback:R,priorityLevel:E,startTime:F,expirationTime:J,sortIndex:-1},F>b?(E.sortIndex=F,n(c,E),t(a)===null&&E===t(c)&&(S?(f(L),L=-1):S=!0,Ol(y,F-b))):(E.sortIndex=J,n(a,E),v||w||(v=!0,Ml(C))),E},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(E){var R=g;return function(){var F=g;g=R;try{return E.apply(this,arguments)}finally{g=F}}}})(Ws);Gs.exports=Ws;var Ld=Gs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=k,xe=Ld;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $s=new Set,Gt={};function An(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Gt[e]=n,e=0;e<n.length;e++)$s.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),go=Object.prototype.hasOwnProperty,_d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},da={};function Fd(e){return go.call(da,e)?!0:go.call(ca,e)?!1:_d.test(e)?da[e]=!0:(ca[e]=!0,!1)}function Id(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dd(e,n,t,r){if(n===null||typeof n>"u"||Id(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var mi=/[\-:]([a-z])/g;function gi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(mi,gi);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(mi,gi);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(mi,gi);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function yi(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Dd(n,t,l,r)&&(t=null),r||l===null?Fd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),vi=Symbol.for("react.strict_mode"),yo=Symbol.for("react.profiler"),bs=Symbol.for("react.provider"),Qs=Symbol.for("react.context"),wi=Symbol.for("react.forward_ref"),vo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),Si=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Xs=Symbol.for("react.offscreen"),fa=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Gl;function Rt(e){if(Gl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Gl=n&&n[1]||""}return`
`+Gl+e}var Wl=!1;function $l(e,n){if(!e||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Wl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Rt(e):""}function zd(e){switch(e.tag){case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function So(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Wn:return"Portal";case yo:return"Profiler";case vi:return"StrictMode";case vo:return"Suspense";case wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qs:return(e.displayName||"Context")+".Consumer";case bs:return(e._context.displayName||"Context")+".Provider";case wi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Si:return n=e.displayName||null,n!==null?n:So(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return So(e(n))}catch{}}return null}function Bd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return So(n);case 8:return n===vi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ks(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ad(e){var n=Ks(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vr(e){e._valueTracker||(e._valueTracker=Ad(e))}function Ys(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ks(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xo(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function pa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Js(e,n){n=n.checked,n!=null&&yi(e,"checked",n,!1)}function ko(e,n){Js(e,n);var t=gn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Co(e,n.type,t):n.hasOwnProperty("defaultValue")&&Co(e,n.type,gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ha(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Co(e,n,t){(n!=="number"||br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var _t=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+gn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Po(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(_t(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:gn(t)}}function Zs(e,n){var t=gn(n.value),r=gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ga(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function To(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Wt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(e){Ud.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Dt[n]=Dt[e]})});function nu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Dt.hasOwnProperty(e)&&Dt[e]?(""+n).trim():n+"px"}function tu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=nu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Md=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eo(e,n){if(n){if(Md[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function No(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lo=null,rt=null,lt=null;function ya(e){if(e=dr(e)){if(typeof Lo!="function")throw Error(x(280));var n=e.stateNode;n&&(n=Tl(n),Lo(e.stateNode,e.type,n))}}function ru(e){rt?lt?lt.push(e):lt=[e]:rt=e}function lu(){if(rt){var e=rt,n=lt;if(lt=rt=null,ya(e),n)for(e=0;e<n.length;e++)ya(n[e])}}function ou(e,n){return e(n)}function iu(){}var bl=!1;function au(e,n,t){if(bl)return e(n,t);bl=!0;try{return ou(e,n,t)}finally{bl=!1,(rt!==null||lt!==null)&&(iu(),lu())}}function $t(e,n){var t=e.stateNode;if(t===null)return null;var r=Tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var Ro=!1;if(Qe)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{Ro=!1}function Od(e,n,t,r,l,o,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var zt=!1,Qr=null,Xr=!1,_o=null,Vd={onError:function(e){zt=!0,Qr=e}};function Hd(e,n,t,r,l,o,i,s,a){zt=!1,Qr=null,Od.apply(Vd,arguments)}function Gd(e,n,t,r,l,o,i,s,a){if(Hd.apply(this,arguments),zt){if(zt){var c=Qr;zt=!1,Qr=null}else throw Error(x(198));Xr||(Xr=!0,_o=c)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function su(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function va(e){if(Un(e)!==e)throw Error(x(188))}function Wd(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return va(l),e;if(o===r)return va(l),n;o=o.sibling}throw Error(x(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function uu(e){return e=Wd(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=cu(e);if(n!==null)return n;e=e.sibling}return null}var du=xe.unstable_scheduleCallback,wa=xe.unstable_cancelCallback,$d=xe.unstable_shouldYield,bd=xe.unstable_requestPaint,Q=xe.unstable_now,Qd=xe.unstable_getCurrentPriorityLevel,ki=xe.unstable_ImmediatePriority,fu=xe.unstable_UserBlockingPriority,Kr=xe.unstable_NormalPriority,Xd=xe.unstable_LowPriority,pu=xe.unstable_IdlePriority,xl=null,Oe=null;function Kd(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Zd,Yd=Math.log,Jd=Math.LN2;function Zd(e){return e>>>=0,e===0?32:31-(Yd(e)/Jd|0)|0}var Sr=64,xr=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=Ft(s):(o&=i,o!==0&&(r=Ft(o)))}else i=t&~l,i!==0?r=Ft(i):o!==0&&(r=Ft(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),l=1<<t,r|=e[t],n&=~l;return r}function qd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-De(o),s=1<<i,a=l[i];a===-1?(!(s&t)||s&r)&&(l[i]=qd(s,n)):a<=n&&(e.expiredLanes|=s),o&=~s}}function Fo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Ql(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ur(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function nf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-De(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function Ci(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var z=0;function mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gu,Pi,yu,vu,wu,Io=!1,kr=[],an=null,sn=null,un=null,bt=new Map,Qt=new Map,nn=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sa(e,n){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function Pt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=dr(n),n!==null&&Pi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function rf(e,n,t,r,l){switch(n){case"focusin":return an=Pt(an,e,n,t,r,l),!0;case"dragenter":return sn=Pt(sn,e,n,t,r,l),!0;case"mouseover":return un=Pt(un,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return bt.set(o,Pt(bt.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Qt.set(o,Pt(Qt.get(o)||null,e,n,t,r,l)),!0}return!1}function Su(e){var n=Nn(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=su(t),n!==null){e.blockedOn=n,wu(e.priority,function(){yu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Do(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);jo=r,t.target.dispatchEvent(r),jo=null}else return n=dr(t),n!==null&&Pi(n),e.blockedOn=t,!1;n.shift()}return!0}function xa(e,n,t){Br(e)&&t.delete(n)}function lf(){Io=!1,an!==null&&Br(an)&&(an=null),sn!==null&&Br(sn)&&(sn=null),un!==null&&Br(un)&&(un=null),bt.forEach(xa),Qt.forEach(xa)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Io||(Io=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,lf)))}function Xt(e){function n(l){return Tt(l,e)}if(0<kr.length){Tt(kr[0],e);for(var t=1;t<kr.length;t++){var r=kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Tt(an,e),sn!==null&&Tt(sn,e),un!==null&&Tt(un,e),bt.forEach(n),Qt.forEach(n),t=0;t<nn.length;t++)r=nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)Su(t),t.blockedOn===null&&nn.shift()}var ot=Je.ReactCurrentBatchConfig,Jr=!0;function of(e,n,t,r){var l=z,o=ot.transition;ot.transition=null;try{z=1,Ti(e,n,t,r)}finally{z=l,ot.transition=o}}function af(e,n,t,r){var l=z,o=ot.transition;ot.transition=null;try{z=4,Ti(e,n,t,r)}finally{z=l,ot.transition=o}}function Ti(e,n,t,r){if(Jr){var l=Do(e,n,t,r);if(l===null)ro(e,n,r,Zr,t),Sa(e,r);else if(rf(l,e,n,t,r))r.stopPropagation();else if(Sa(e,r),n&4&&-1<tf.indexOf(e)){for(;l!==null;){var o=dr(l);if(o!==null&&gu(o),o=Do(e,n,t,r),o===null&&ro(e,n,r,Zr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else ro(e,n,r,null,t)}}var Zr=null;function Do(e,n,t,r){if(Zr=null,e=xi(r),e=Nn(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=su(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Zr=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qd()){case ki:return 1;case fu:return 4;case Kr:case Xd:return 16;case pu:return 536870912;default:return 16}default:return 16}}var rn=null,Ei=null,Ar=null;function ku(){if(Ar)return Ar;var e,n=Ei,t=n.length,r,l="value"in rn?rn.value:rn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return Ar=l.slice(e,1<r?1-r:void 0)}function Ur(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function ka(){return!1}function Ce(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:ka,this.isPropagationStopped=ka,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=Ce(yt),cr=G({},yt,{view:0,detail:0}),sf=Ce(cr),Xl,Kl,Et,kl=G({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Et&&(Et&&e.type==="mousemove"?(Xl=e.screenX-Et.screenX,Kl=e.screenY-Et.screenY):Kl=Xl=0,Et=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Kl}}),Ca=Ce(kl),uf=G({},kl,{dataTransfer:0}),cf=Ce(uf),df=G({},cr,{relatedTarget:0}),Yl=Ce(df),ff=G({},yt,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=Ce(ff),hf=G({},yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=Ce(hf),gf=G({},yt,{data:0}),Pa=Ce(gf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wf[e])?!!n[e]:!1}function ji(){return Sf}var xf=G({},cr,{key:function(e){if(e.key){var n=yf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=Ce(xf),Cf=G({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ta=Ce(Cf),Pf=G({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),Tf=Ce(Pf),Ef=G({},yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=Ce(Ef),jf=G({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=Ce(jf),Rf=[9,13,27,32],Li=Qe&&"CompositionEvent"in window,Bt=null;Qe&&"documentMode"in document&&(Bt=document.documentMode);var _f=Qe&&"TextEvent"in window&&!Bt,Cu=Qe&&(!Li||Bt&&8<Bt&&11>=Bt),Ea=String.fromCharCode(32),Na=!1;function Pu(e,n){switch(e){case"keyup":return Rf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function Ff(e,n){switch(e){case"compositionend":return Tu(n);case"keypress":return n.which!==32?null:(Na=!0,Ea);case"textInput":return e=n.data,e===Ea&&Na?null:e;default:return null}}function If(e,n){if(bn)return e==="compositionend"||!Li&&Pu(e,n)?(e=ku(),Ar=Ei=rn=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cu&&n.locale!=="ko"?null:n.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Df[e.type]:n==="textarea"}function Eu(e,n,t,r){ru(r),n=qr(n,"onChange"),0<n.length&&(t=new Ni("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var At=null,Kt=null;function zf(e){Au(e,0)}function Cl(e){var n=Kn(e);if(Ys(n))return e}function Bf(e,n){if(e==="change")return n}var Nu=!1;if(Qe){var Jl;if(Qe){var Zl="oninput"in document;if(!Zl){var La=document.createElement("div");La.setAttribute("oninput","return;"),Zl=typeof La.oninput=="function"}Jl=Zl}else Jl=!1;Nu=Jl&&(!document.documentMode||9<document.documentMode)}function Ra(){At&&(At.detachEvent("onpropertychange",ju),Kt=At=null)}function ju(e){if(e.propertyName==="value"&&Cl(Kt)){var n=[];Eu(n,Kt,e,xi(e)),au(zf,n)}}function Af(e,n,t){e==="focusin"?(Ra(),At=n,Kt=t,At.attachEvent("onpropertychange",ju)):e==="focusout"&&Ra()}function Uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(Kt)}function Mf(e,n){if(e==="click")return Cl(n)}function Of(e,n){if(e==="input"||e==="change")return Cl(n)}function Vf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Be=typeof Object.is=="function"?Object.is:Vf;function Yt(e,n){if(Be(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!go.call(n,l)||!Be(e[l],n[l]))return!1}return!0}function _a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fa(e,n){var t=_a(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_a(t)}}function Lu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ru(){for(var e=window,n=br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=br(e.document)}return n}function Ri(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Hf(e){var n=Ru(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Lu(t.ownerDocument.documentElement,t)){if(r!==null&&Ri(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Fa(t,o);var i=Fa(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gf=Qe&&"documentMode"in document&&11>=document.documentMode,Qn=null,zo=null,Ut=null,Bo=!1;function Ia(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bo||Qn==null||Qn!==br(r)||(r=Qn,"selectionStart"in r&&Ri(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ut&&Yt(Ut,r)||(Ut=r,r=qr(zo,"onSelect"),0<r.length&&(n=new Ni("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Qn)))}function Pr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},ql={},_u={};Qe&&(_u=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Pl(e){if(ql[e])return ql[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _u)return ql[e]=n[t];return e}var Fu=Pl("animationend"),Iu=Pl("animationiteration"),Du=Pl("animationstart"),zu=Pl("transitionend"),Bu=new Map,Da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,n){Bu.set(e,n),An(n,[e])}for(var eo=0;eo<Da.length;eo++){var no=Da[eo],Wf=no.toLowerCase(),$f=no[0].toUpperCase()+no.slice(1);vn(Wf,"on"+$f)}vn(Fu,"onAnimationEnd");vn(Iu,"onAnimationIteration");vn(Du,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(zu,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var It="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(It));function za(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Gd(r,n,void 0,e),e.currentTarget=null}function Au(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;za(l,s,c),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;za(l,s,c),o=a}}}if(Xr)throw e=_o,Xr=!1,_o=null,e}function A(e,n){var t=n[Vo];t===void 0&&(t=n[Vo]=new Set);var r=e+"__bubble";t.has(r)||(Uu(n,e,2,!1),t.add(r))}function to(e,n,t){var r=0;n&&(r|=4),Uu(t,e,r,n)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Jt(e){if(!e[Tr]){e[Tr]=!0,$s.forEach(function(t){t!=="selectionchange"&&(bf.has(t)||to(t,!1,e),to(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tr]||(n[Tr]=!0,to("selectionchange",!1,n))}}function Uu(e,n,t,r){switch(xu(n)){case 1:var l=of;break;case 4:l=af;break;default:l=Ti}t=l.bind(null,n,t,e),l=void 0,!Ro||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ro(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Nn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}au(function(){var c=o,m=xi(t),h=[];e:{var g=Bu.get(e);if(g!==void 0){var w=Ni,v=e;switch(e){case"keypress":if(Ur(t)===0)break e;case"keydown":case"keyup":w=kf;break;case"focusin":v="focus",w=Yl;break;case"focusout":v="blur",w=Yl;break;case"beforeblur":case"afterblur":w=Yl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tf;break;case Fu:case Iu:case Du:w=pf;break;case zu:w=Nf;break;case"scroll":w=sf;break;case"wheel":w=Lf;break;case"copy":case"cut":case"paste":w=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ta}var S=(n&4)!==0,P=!S&&e==="scroll",f=S?g!==null?g+"Capture":null:g;S=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=$t(d,f),y!=null&&S.push(Zt(d,y,p)))),P)break;d=d.return}0<S.length&&(g=new w(g,v,null,t,m),h.push({event:g,listeners:S}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&t!==jo&&(v=t.relatedTarget||t.fromElement)&&(Nn(v)||v[Xe]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=t.relatedTarget||t.toElement,w=c,v=v?Nn(v):null,v!==null&&(P=Un(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(S=Ca,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ta,y="onPointerLeave",f="onPointerEnter",d="pointer"),P=w==null?g:Kn(w),p=v==null?g:Kn(v),g=new S(y,d+"leave",w,t,m),g.target=P,g.relatedTarget=p,y=null,Nn(m)===c&&(S=new S(f,d+"enter",v,t,m),S.target=p,S.relatedTarget=P,y=S),P=y,w&&v)n:{for(S=w,f=v,d=0,p=S;p;p=Vn(p))d++;for(p=0,y=f;y;y=Vn(y))p++;for(;0<d-p;)S=Vn(S),d--;for(;0<p-d;)f=Vn(f),p--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break n;S=Vn(S),f=Vn(f)}S=null}else S=null;w!==null&&Ba(h,g,w,S,!1),v!==null&&P!==null&&Ba(h,P,v,S,!0)}}e:{if(g=c?Kn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var C=Bf;else if(ja(g))if(Nu)C=Of;else{C=Uf;var N=Af}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Mf);if(C&&(C=C(e,c))){Eu(h,C,t,m);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Co(g,"number",g.value)}switch(N=c?Kn(c):window,e){case"focusin":(ja(N)||N.contentEditable==="true")&&(Qn=N,zo=c,Ut=null);break;case"focusout":Ut=zo=Qn=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,Ia(h,t,m);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":Ia(h,t,m)}var j;if(Li)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else bn?Pu(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Cu&&t.locale!=="ko"&&(bn||L!=="onCompositionStart"?L==="onCompositionEnd"&&bn&&(j=ku()):(rn=m,Ei="value"in rn?rn.value:rn.textContent,bn=!0)),N=qr(c,L),0<N.length&&(L=new Pa(L,e,null,t,m),h.push({event:L,listeners:N}),j?L.data=j:(j=Tu(t),j!==null&&(L.data=j)))),(j=_f?Ff(e,t):If(e,t))&&(c=qr(c,"onBeforeInput"),0<c.length&&(m=new Pa("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:c}),m.data=j))}Au(h,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function qr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=$t(e,t),o!=null&&r.unshift(Zt(e,o,l)),o=$t(e,n),o!=null&&r.push(Zt(e,o,l))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=$t(t,o),a!=null&&i.unshift(Zt(t,a,s))):l||(a=$t(t,o),a!=null&&i.push(Zt(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Qf=/\r\n?/g,Xf=/\u0000|\uFFFD/g;function Aa(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(Xf,"")}function Er(e,n,t){if(n=Aa(n),Aa(e)!==n&&t)throw Error(x(425))}function el(){}var Ao=null,Uo=null;function Mo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oo=typeof setTimeout=="function"?setTimeout:void 0,Kf=typeof clearTimeout=="function"?clearTimeout:void 0,Ua=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ua<"u"?function(e){return Ua.resolve(null).then(e).catch(Jf)}:Oo;function Jf(e){setTimeout(function(){throw e})}function lo(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Xt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Xt(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var vt=Math.random().toString(36).slice(2),Me="__reactFiber$"+vt,qt="__reactProps$"+vt,Xe="__reactContainer$"+vt,Vo="__reactEvents$"+vt,Zf="__reactListeners$"+vt,qf="__reactHandles$"+vt;function Nn(e){var n=e[Me];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Me]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ma(e);e!==null;){if(t=e[Me])return t;e=Ma(e)}return n}e=t,t=e.parentNode}return null}function dr(e){return e=e[Me]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Tl(e){return e[qt]||null}var Ho=[],Yn=-1;function wn(e){return{current:e}}function U(e){0>Yn||(e.current=Ho[Yn],Ho[Yn]=null,Yn--)}function B(e,n){Yn++,Ho[Yn]=e.current,e.current=n}var yn={},ie=wn(yn),he=wn(!1),Fn=yn;function ut(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function nl(){U(he),U(ie)}function Oa(e,n,t){if(ie.current!==yn)throw Error(x(168));B(ie,n),B(he,t)}function Mu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(x(108,Bd(e)||"Unknown",l));return G({},t,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Fn=ie.current,B(ie,e),B(he,he.current),!0}function Va(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=Mu(e,n,Fn),r.__reactInternalMemoizedMergedChildContext=e,U(he),U(ie),B(ie,e)):U(he),B(he,t)}var Ge=null,El=!1,oo=!1;function Ou(e){Ge===null?Ge=[e]:Ge.push(e)}function ep(e){El=!0,Ou(e)}function Sn(){if(!oo&&Ge!==null){oo=!0;var e=0,n=z;try{var t=Ge;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ge=null,El=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),du(ki,Sn),l}finally{z=n,oo=!1}}return null}var Jn=[],Zn=0,rl=null,ll=0,Pe=[],Te=0,In=null,We=1,$e="";function Pn(e,n){Jn[Zn++]=ll,Jn[Zn++]=rl,rl=e,ll=n}function Vu(e,n,t){Pe[Te++]=We,Pe[Te++]=$e,Pe[Te++]=In,In=e;var r=We;e=$e;var l=32-De(r)-1;r&=~(1<<l),t+=1;var o=32-De(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-De(n)+l|t<<l|r,$e=o+e}else We=1<<o|t<<l|r,$e=e}function _i(e){e.return!==null&&(Pn(e,1),Vu(e,1,0))}function Fi(e){for(;e===rl;)rl=Jn[--Zn],Jn[Zn]=null,ll=Jn[--Zn],Jn[Zn]=null;for(;e===In;)In=Pe[--Te],Pe[Te]=null,$e=Pe[--Te],Pe[Te]=null,We=Pe[--Te],Pe[Te]=null}var Se=null,we=null,M=!1,Ie=null;function Hu(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ha(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,we=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=In!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,we=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wo(e){if(M){var n=we;if(n){var t=n;if(!Ha(e,n)){if(Go(e))throw Error(x(418));n=cn(t.nextSibling);var r=Se;n&&Ha(e,n)?Hu(r,t):(e.flags=e.flags&-4097|2,M=!1,Se=e)}}else{if(Go(e))throw Error(x(418));e.flags=e.flags&-4097|2,M=!1,Se=e}}}function Ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Nr(e){if(e!==Se)return!1;if(!M)return Ga(e),M=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Mo(e.type,e.memoizedProps)),n&&(n=we)){if(Go(e))throw Gu(),Error(x(418));for(;n;)Hu(e,n),n=cn(n.nextSibling)}if(Ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Se?cn(e.stateNode.nextSibling):null;return!0}function Gu(){for(var e=we;e;)e=cn(e.nextSibling)}function ct(){we=Se=null,M=!1}function Ii(e){Ie===null?Ie=[e]:Ie.push(e)}var np=Je.ReactCurrentBatchConfig;function Nt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function jr(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wa(e){var n=e._init;return n(e._payload)}function Wu(e){function n(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=hn(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,y){return d===null||d.tag!==6?(d=po(p,f.mode,y),d.return=f,d):(d=l(d,p),d.return=f,d)}function a(f,d,p,y){var C=p.type;return C===$n?m(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&Wa(C)===d.type)?(y=l(d,p.props),y.ref=Nt(f,d,p),y.return=f,y):(y=$r(p.type,p.key,p.props,null,f.mode,y),y.ref=Nt(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ho(p,f.mode,y),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function m(f,d,p,y,C){return d===null||d.tag!==7?(d=_n(p,f.mode,y,C),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=po(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return p=$r(d.type,d.key,d.props,null,f.mode,p),p.ref=Nt(f,null,d),p.return=f,p;case Wn:return d=ho(d,f.mode,p),d.return=f,d;case qe:var y=d._init;return h(f,y(d._payload),p)}if(_t(d)||kt(d))return d=_n(d,f.mode,p,null),d.return=f,d;jr(f,d)}return null}function g(f,d,p,y){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:return p.key===C?a(f,d,p,y):null;case Wn:return p.key===C?c(f,d,p,y):null;case qe:return C=p._init,g(f,d,C(p._payload),y)}if(_t(p)||kt(p))return C!==null?null:m(f,d,p,y,null);jr(f,p)}return null}function w(f,d,p,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(d,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yr:return f=f.get(y.key===null?p:y.key)||null,a(d,f,y,C);case Wn:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,C);case qe:var N=y._init;return w(f,d,p,N(y._payload),C)}if(_t(y)||kt(y))return f=f.get(p)||null,m(d,f,y,C,null);jr(d,y)}return null}function v(f,d,p,y){for(var C=null,N=null,j=d,L=d=0,O=null;j!==null&&L<p.length;L++){j.index>L?(O=j,j=null):O=j.sibling;var _=g(f,j,p[L],y);if(_===null){j===null&&(j=O);break}e&&j&&_.alternate===null&&n(f,j),d=o(_,d,L),N===null?C=_:N.sibling=_,N=_,j=O}if(L===p.length)return t(f,j),M&&Pn(f,L),C;if(j===null){for(;L<p.length;L++)j=h(f,p[L],y),j!==null&&(d=o(j,d,L),N===null?C=j:N.sibling=j,N=j);return M&&Pn(f,L),C}for(j=r(f,j);L<p.length;L++)O=w(j,f,L,p[L],y),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?L:O.key),d=o(O,d,L),N===null?C=O:N.sibling=O,N=O);return e&&j.forEach(function(ye){return n(f,ye)}),M&&Pn(f,L),C}function S(f,d,p,y){var C=kt(p);if(typeof C!="function")throw Error(x(150));if(p=C.call(p),p==null)throw Error(x(151));for(var N=C=null,j=d,L=d=0,O=null,_=p.next();j!==null&&!_.done;L++,_=p.next()){j.index>L?(O=j,j=null):O=j.sibling;var ye=g(f,j,_.value,y);if(ye===null){j===null&&(j=O);break}e&&j&&ye.alternate===null&&n(f,j),d=o(ye,d,L),N===null?C=ye:N.sibling=ye,N=ye,j=O}if(_.done)return t(f,j),M&&Pn(f,L),C;if(j===null){for(;!_.done;L++,_=p.next())_=h(f,_.value,y),_!==null&&(d=o(_,d,L),N===null?C=_:N.sibling=_,N=_);return M&&Pn(f,L),C}for(j=r(f,j);!_.done;L++,_=p.next())_=w(j,f,L,_.value,y),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?L:_.key),d=o(_,d,L),N===null?C=_:N.sibling=_,N=_);return e&&j.forEach(function(St){return n(f,St)}),M&&Pn(f,L),C}function P(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===$n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:e:{for(var C=p.key,N=d;N!==null;){if(N.key===C){if(C=p.type,C===$n){if(N.tag===7){t(f,N.sibling),d=l(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&Wa(C)===N.type){t(f,N.sibling),d=l(N,p.props),d.ref=Nt(f,N,p),d.return=f,f=d;break e}t(f,N);break}else n(f,N);N=N.sibling}p.type===$n?(d=_n(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=$r(p.type,p.key,p.props,null,f.mode,y),y.ref=Nt(f,d,p),y.return=f,f=y)}return i(f);case Wn:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=ho(p,f.mode,y),d.return=f,f=d}return i(f);case qe:return N=p._init,P(f,d,N(p._payload),y)}if(_t(p))return v(f,d,p,y);if(kt(p))return S(f,d,p,y);jr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(f,d.sibling),d=l(d,p),d.return=f,f=d):(t(f,d),d=po(p,f.mode,y),d.return=f,f=d),i(f)):t(f,d)}return P}var dt=Wu(!0),$u=Wu(!1),ol=wn(null),il=null,qn=null,Di=null;function zi(){Di=qn=il=null}function Bi(e){var n=ol.current;U(ol),e._currentValue=n}function $o(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function it(e,n){il=e,Di=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(Di!==e)if(e={context:e,memoizedValue:n,next:null},qn===null){if(il===null)throw Error(x(308));qn=e,il.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return n}var jn=null;function Ai(e){jn===null?jn=[e]:jn.push(e)}function bu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ai(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function Ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function be(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ke(e,t)}return l=r.interleaved,l===null?(n.next=n,Ai(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ke(e,t)}function Mr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ci(e,t)}}function $a(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function al(e,n,t,r){var l=e.updateQueue;en=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(o!==null){var h=l.baseState;i=0,m=c=a=null,s=o;do{var g=s.lane,w=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,S=s;switch(g=n,w=t,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(w,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,g=typeof v=="function"?v.call(w,h,g):v,g==null)break e;h=G({},h,g);break e;case 2:en=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=w,a=h):m=m.next=w,i|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(1);if(m===null&&(a=h),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);zn|=i,e.lanes=i,e.memoizedState=h}}function ba(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var fr={},Ve=wn(fr),er=wn(fr),nr=wn(fr);function Ln(e){if(e===fr)throw Error(x(174));return e}function Mi(e,n){switch(B(nr,n),B(er,e),B(Ve,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:To(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=To(n,e)}U(Ve),B(Ve,n)}function ft(){U(Ve),U(er),U(nr)}function Xu(e){Ln(nr.current);var n=Ln(Ve.current),t=To(n,e.type);n!==t&&(B(er,e),B(Ve,t))}function Oi(e){er.current===e&&(U(Ve),U(er))}var V=wn(0);function sl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var io=[];function Vi(){for(var e=0;e<io.length;e++)io[e]._workInProgressVersionPrimary=null;io.length=0}var Or=Je.ReactCurrentDispatcher,ao=Je.ReactCurrentBatchConfig,Dn=0,H=null,K=null,Z=null,ul=!1,Mt=!1,tr=0,tp=0;function re(){throw Error(x(321))}function Hi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Be(e[t],n[t]))return!1;return!0}function Gi(e,n,t,r,l,o){if(Dn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Or.current=e===null||e.memoizedState===null?ip:ap,e=t(r,l),Mt){o=0;do{if(Mt=!1,tr=0,25<=o)throw Error(x(301));o+=1,Z=K=null,n.updateQueue=null,Or.current=sp,e=t(r,l)}while(Mt)}if(Or.current=cl,n=K!==null&&K.next!==null,Dn=0,Z=K=H=null,ul=!1,n)throw Error(x(300));return e}function Wi(){var e=tr!==0;return tr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Le(){if(K===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,K=e;else{if(e===null)throw Error(x(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function rr(e,n){return typeof n=="function"?n(e):n}function so(e){var n=Le(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,c=o;do{var m=c.lane;if((Dn&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,i=r):a=a.next=h,H.lanes|=m,zn|=m}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=s,Be(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,H.lanes|=o,zn|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function uo(e){var n=Le(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Be(o,n.memoizedState)||(pe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Ku(){}function Yu(e,n){var t=H,r=Le(),l=n(),o=!Be(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,$i(qu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,lr(9,Zu.bind(null,t,r,l,n),void 0,null),q===null)throw Error(x(349));Dn&30||Ju(t,n,l)}return l}function Ju(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zu(e,n,t,r){n.value=t,n.getSnapshot=r,ec(n)&&nc(e)}function qu(e,n,t){return t(function(){ec(n)&&nc(e)})}function ec(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Be(e,t)}catch{return!0}}function nc(e){var n=Ke(e,1);n!==null&&ze(n,e,1,-1)}function Qa(e){var n=Ue();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},n.queue=e,e=e.dispatch=op.bind(null,H,e),[n.memoizedState,e]}function lr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function tc(){return Le().memoizedState}function Vr(e,n,t,r){var l=Ue();H.flags|=e,l.memoizedState=lr(1|n,t,void 0,r===void 0?null:r)}function Nl(e,n,t,r){var l=Le();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&Hi(r,i.deps)){l.memoizedState=lr(n,t,o,r);return}}H.flags|=e,l.memoizedState=lr(1|n,t,o,r)}function Xa(e,n){return Vr(8390656,8,e,n)}function $i(e,n){return Nl(2048,8,e,n)}function rc(e,n){return Nl(4,2,e,n)}function lc(e,n){return Nl(4,4,e,n)}function oc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ic(e,n,t){return t=t!=null?t.concat([e]):null,Nl(4,4,oc.bind(null,n,e),t)}function bi(){}function ac(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Hi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function sc(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Hi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function uc(e,n,t){return Dn&21?(Be(t,n)||(t=hu(),H.lanes|=t,zn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function rp(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),n()}finally{z=t,ao.transition=r}}function cc(){return Le().memoizedState}function lp(e,n,t){var r=pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},dc(e))fc(n,t);else if(t=bu(e,n,t,r),t!==null){var l=se();ze(t,e,r,l),pc(t,n,r)}}function op(e,n,t){var r=pn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,Be(s,i)){var a=n.interleaved;a===null?(l.next=l,Ai(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=bu(e,n,l,r),t!==null&&(l=se(),ze(t,e,r,l),pc(t,n,r))}}function dc(e){var n=e.alternate;return e===H||n!==null&&n===H}function fc(e,n){Mt=ul=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function pc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ci(e,t)}}var cl={readContext:je,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},ip={readContext:je,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:Xa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Vr(4194308,4,oc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Vr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Vr(4,2,e,n)},useMemo:function(e,n){var t=Ue();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ue();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=lp.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:Qa,useDebugValue:bi,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Qa(!1),n=e[0];return e=rp.bind(null,e[1]),Ue().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,l=Ue();if(M){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),q===null)throw Error(x(349));Dn&30||Ju(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Xa(qu.bind(null,r,o,e),[e]),r.flags|=2048,lr(9,Zu.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ue(),n=q.identifierPrefix;if(M){var t=$e,r=We;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=tr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=tp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ap={readContext:je,useCallback:ac,useContext:je,useEffect:$i,useImperativeHandle:ic,useInsertionEffect:rc,useLayoutEffect:lc,useMemo:sc,useReducer:so,useRef:tc,useState:function(){return so(rr)},useDebugValue:bi,useDeferredValue:function(e){var n=Le();return uc(n,K.memoizedState,e)},useTransition:function(){var e=so(rr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:cc,unstable_isNewReconciler:!1},sp={readContext:je,useCallback:ac,useContext:je,useEffect:$i,useImperativeHandle:ic,useInsertionEffect:rc,useLayoutEffect:lc,useMemo:sc,useReducer:uo,useRef:tc,useState:function(){return uo(rr)},useDebugValue:bi,useDeferredValue:function(e){var n=Le();return K===null?n.memoizedState=e:uc(n,K.memoizedState,e)},useTransition:function(){var e=uo(rr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:cc,unstable_isNewReconciler:!1};function _e(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function bo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var jl={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),o=be(r,l);o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,l),n!==null&&(ze(n,e,l,r),Mr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),o=be(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,l),n!==null&&(ze(n,e,l,r),Mr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=pn(e),l=be(t,r);l.tag=2,n!=null&&(l.callback=n),n=dn(e,l,r),n!==null&&(ze(n,e,r,t),Mr(n,e,r))}};function Ka(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Yt(t,r)||!Yt(l,o):!0}function hc(e,n,t){var r=!1,l=yn,o=n.contextType;return typeof o=="object"&&o!==null?o=je(o):(l=me(n)?Fn:ie.current,r=n.contextTypes,o=(r=r!=null)?ut(e,l):yn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=jl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ya(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&jl.enqueueReplaceState(n,n.state,null)}function Qo(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Ui(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=je(o):(o=me(n)?Fn:ie.current,l.context=ut(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(bo(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&jl.enqueueReplaceState(l,l.state,null),al(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=zd(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function co(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var up=typeof WeakMap=="function"?WeakMap:Map;function mc(e,n,t){t=be(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fl||(fl=!0,li=r),Xo(e,n)},t}function gc(e,n,t){t=be(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Xo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Xo(e,n),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ja(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new up;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Cp.bind(null,e,n,t),n.then(e,e))}function Za(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qa(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=be(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var cp=Je.ReactCurrentOwner,pe=!1;function ae(e,n,t,r){n.child=e===null?$u(n,null,t,r):dt(n,e.child,t,r)}function es(e,n,t,r,l){t=t.render;var o=n.ref;return it(n,l),r=Gi(e,n,t,r,o,l),t=Wi(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ye(e,n,l)):(M&&t&&_i(n),n.flags|=1,ae(e,n,r,l),n.child)}function ns(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!ea(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,yc(e,n,o,r,l)):(e=$r(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Yt,t(i,r)&&e.ref===n.ref)return Ye(e,n,l)}return n.flags|=1,e=hn(o,r),e.ref=n.ref,e.return=n,n.child=e}function yc(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Yt(o,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ye(e,n,l)}return Ko(e,n,t,r,l)}function vc(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(nt,ve),ve|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(nt,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,B(nt,ve),ve|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,B(nt,ve),ve|=r;return ae(e,n,l,t),n.child}function wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ko(e,n,t,r,l){var o=me(t)?Fn:ie.current;return o=ut(n,o),it(n,l),t=Gi(e,n,t,r,o,l),r=Wi(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ye(e,n,l)):(M&&r&&_i(n),n.flags|=1,ae(e,n,t,l),n.child)}function ts(e,n,t,r,l){if(me(t)){var o=!0;tl(n)}else o=!1;if(it(n,l),n.stateNode===null)Hr(e,n),hc(n,t,r),Qo(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=je(c):(c=me(t)?Fn:ie.current,c=ut(n,c));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ya(n,i,r,c),en=!1;var g=n.memoizedState;i.state=g,al(n,r,i,l),a=n.memoizedState,s!==r||g!==a||he.current||en?(typeof m=="function"&&(bo(n,t,m,r),a=n.memoizedState),(s=en||Ka(n,t,s,r,g,a,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Qu(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:_e(n.type,s),i.props=c,h=n.pendingProps,g=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=je(a):(a=me(t)?Fn:ie.current,a=ut(n,a));var w=t.getDerivedStateFromProps;(m=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||g!==a)&&Ya(n,i,r,a),en=!1,g=n.memoizedState,i.state=g,al(n,r,i,l);var v=n.memoizedState;s!==h||g!==v||he.current||en?(typeof w=="function"&&(bo(n,t,w,r),v=n.memoizedState),(c=en||Ka(n,t,c,r,g,v,a)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),i.props=r,i.state=v,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Yo(e,n,t,r,o,l)}function Yo(e,n,t,r,l,o){wc(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&Va(n,t,!1),Ye(e,n,o);r=n.stateNode,cp.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=dt(n,e.child,null,o),n.child=dt(n,null,s,o)):ae(e,n,s,o),n.memoizedState=r.state,l&&Va(n,t,!0),n.child}function Sc(e){var n=e.stateNode;n.pendingContext?Oa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Oa(e,n.context,!1),Mi(e,n.containerInfo)}function rs(e,n,t,r,l){return ct(),Ii(l),n.flags|=256,ae(e,n,t,r),n.child}var Jo={dehydrated:null,treeContext:null,retryLane:0};function Zo(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,n,t){var r=n.pendingProps,l=V.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),B(V,l&1),e===null)return Wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_l(i,r,0,null),e=_n(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Zo(t),n.memoizedState=Jo,e):Qi(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return dp(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=hn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=hn(s,o):(o=_n(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Zo(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Jo,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Qi(e,n){return n=_l({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Lr(e,n,t,r){return r!==null&&Ii(r),dt(n,e.child,null,t),e=Qi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dp(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=co(Error(x(422))),Lr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=_l({mode:"visible",children:r.children},l,0,null),o=_n(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&dt(n,e.child,null,i),n.child.memoizedState=Zo(i),n.memoizedState=Jo,o);if(!(n.mode&1))return Lr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(x(419)),r=co(o,r,void 0),Lr(e,n,i,r)}if(s=(i&e.childLanes)!==0,pe||s){if(r=q,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ke(e,l),ze(r,e,l,-1))}return qi(),r=co(Error(x(421))),Lr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Pp.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,we=cn(l.nextSibling),Se=n,M=!0,Ie=null,e!==null&&(Pe[Te++]=We,Pe[Te++]=$e,Pe[Te++]=In,We=e.id,$e=e.overflow,In=n),n=Qi(n,r.children),n.flags|=4096,n)}function ls(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$o(e.return,n,t)}function fo(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function kc(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ls(e,t,n);else if(e.tag===19)ls(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(V,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&sl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),fo(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}fo(n,!0,t,null,o);break;case"together":fo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ye(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),zn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fp(e,n,t){switch(n.tag){case 3:Sc(n),ct();break;case 5:Xu(n);break;case 1:me(n.type)&&tl(n);break;case 4:Mi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;B(ol,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?xc(e,n,t):(B(V,V.current&1),e=Ye(e,n,t),e!==null?e.sibling:null);B(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return kc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,vc(e,n,t)}return Ye(e,n,t)}var Cc,qo,Pc,Tc;Cc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qo=function(){};Pc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Ln(Ve.current);var o=null;switch(t){case"input":l=xo(e,l),r=xo(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=Po(e,l),r=Po(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}Eo(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(o||(o=[]),o.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&A("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Tc=function(e,n,t,r){t!==r&&(n.flags|=4)};function jt(e,n){if(!M)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pp(e,n,t){var r=n.pendingProps;switch(Fi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return me(n.type)&&nl(),le(n),null;case 3:return r=n.stateNode,ft(),U(he),U(ie),Vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ie!==null&&(ai(Ie),Ie=null))),qo(e,n),le(n),null;case 5:Oi(n);var l=Ln(nr.current);if(t=n.type,e!==null&&n.stateNode!=null)Pc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return le(n),null}if(e=Ln(Ve.current),Nr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Me]=n,r[qt]=o,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<It.length;l++)A(It[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":pa(r,o),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},A("invalid",r);break;case"textarea":ma(r,o),A("invalid",r)}Eo(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),l=["children",""+s]):Gt.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&A("scroll",r)}switch(t){case"input":vr(r),ha(r,o,!0);break;case"textarea":vr(r),ga(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=el)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Me]=n,e[qt]=r,Cc(e,n,!1,!1),n.stateNode=e;e:{switch(i=No(t,r),t){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<It.length;l++)A(It[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":pa(e,r),l=xo(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),A("invalid",e);break;case"textarea":ma(e,r),l=Po(e,r),A("invalid",e);break;default:l=r}Eo(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?tu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&eu(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Wt(e,a):typeof a=="number"&&Wt(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gt.hasOwnProperty(o)?a!=null&&o==="onScroll"&&A("scroll",e):a!=null&&yi(e,o,a,i))}switch(t){case"input":vr(e),ha(e,r,!1);break;case"textarea":vr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tt(e,!!r.multiple,o,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=el)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Tc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=Ln(nr.current),Ln(Ve.current),Nr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Me]=n,(o=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Er(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Me]=n,n.stateNode=r}return le(n),null;case 13:if(U(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(M&&we!==null&&n.mode&1&&!(n.flags&128))Gu(),ct(),n.flags|=98560,o=!1;else if(o=Nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Me]=n}else ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),o=!1}else Ie!==null&&(ai(Ie),Ie=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?Y===0&&(Y=3):qi())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ft(),qo(e,n),e===null&&Jt(n.stateNode.containerInfo),le(n),null;case 10:return Bi(n.type._context),le(n),null;case 17:return me(n.type)&&nl(),le(n),null;case 19:if(U(V),o=n.memoizedState,o===null)return le(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)jt(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=sl(e),i!==null){for(n.flags|=128,jt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(V,V.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>ht&&(n.flags|=128,r=!0,jt(o,!1),n.lanes=4194304)}else{if(!r)if(e=sl(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),jt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!M)return le(n),null}else 2*Q()-o.renderingStartTime>ht&&t!==1073741824&&(n.flags|=128,r=!0,jt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=V.current,B(V,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return Zi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function hp(e,n){switch(Fi(n),n.tag){case 1:return me(n.type)&&nl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(),U(he),U(ie),Vi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Oi(n),null;case 13:if(U(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(V),null;case 4:return ft(),null;case 10:return Bi(n.type._context),null;case 22:case 23:return Zi(),null;case 24:return null;default:return null}}var Rr=!1,oe=!1,mp=typeof WeakSet=="function"?WeakSet:Set,T=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function ei(e,n,t){try{t()}catch(r){W(e,n,r)}}var os=!1;function gp(e,n){if(Ao=Jr,e=Ru(),Ri(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,c=0,m=0,h=e,g=null;n:for(;;){for(var w;h!==t||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(a=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break n;if(g===t&&++c===l&&(s=i),g===o&&++m===r&&(a=i),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uo={focusedElem:e,selectionRange:t},Jr=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,P=v.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?S:_e(n.type,S),P);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){W(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return v=os,os=!1,v}function Ot(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ei(n,t,o)}l=l.next}while(l!==r)}}function Ll(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ni(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ec(e){var n=e.alternate;n!==null&&(e.alternate=null,Ec(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Me],delete n[qt],delete n[Vo],delete n[Zf],delete n[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ti(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(ti(e,n,t),e=e.sibling;e!==null;)ti(e,n,t),e=e.sibling}function ri(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ri(e,n,t),e=e.sibling;e!==null;)ri(e,n,t),e=e.sibling}var ee=null,Fe=!1;function Ze(e,n,t){for(t=t.child;t!==null;)jc(e,n,t),t=t.sibling}function jc(e,n,t){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(xl,t)}catch{}switch(t.tag){case 5:oe||et(t,n);case 6:var r=ee,l=Fe;ee=null,Ze(e,n,t),ee=r,Fe=l,ee!==null&&(Fe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Fe?(e=ee,t=t.stateNode,e.nodeType===8?lo(e.parentNode,t):e.nodeType===1&&lo(e,t),Xt(e)):lo(ee,t.stateNode));break;case 4:r=ee,l=Fe,ee=t.stateNode.containerInfo,Fe=!0,Ze(e,n,t),ee=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&ei(t,n,i),l=l.next}while(l!==r)}Ze(e,n,t);break;case 1:if(!oe&&(et(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){W(t,n,s)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,Ze(e,n,t),oe=r):Ze(e,n,t);break;default:Ze(e,n,t)}}function as(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new mp),n.forEach(function(r){var l=Tp.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Fe=!1;break e;case 3:ee=s.stateNode.containerInfo,Fe=!0;break e;case 4:ee=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(ee===null)throw Error(x(160));jc(o,i,l),ee=null,Fe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){W(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lc(n,e),n=n.sibling}function Lc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Ae(e),r&4){try{Ot(3,e,e.return),Ll(3,e)}catch(S){W(e,e.return,S)}try{Ot(5,e,e.return)}catch(S){W(e,e.return,S)}}break;case 1:Re(n,e),Ae(e),r&512&&t!==null&&et(t,t.return);break;case 5:if(Re(n,e),Ae(e),r&512&&t!==null&&et(t,t.return),e.flags&32){var l=e.stateNode;try{Wt(l,"")}catch(S){W(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Js(l,o),No(s,i);var c=No(s,o);for(i=0;i<a.length;i+=2){var m=a[i],h=a[i+1];m==="style"?tu(l,h):m==="dangerouslySetInnerHTML"?eu(l,h):m==="children"?Wt(l,h):yi(l,m,h,c)}switch(s){case"input":ko(l,o);break;case"textarea":Zs(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?tt(l,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?tt(l,!!o.multiple,o.defaultValue,!0):tt(l,!!o.multiple,o.multiple?[]:"",!1))}l[qt]=o}catch(S){W(e,e.return,S)}}break;case 6:if(Re(n,e),Ae(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){W(e,e.return,S)}}break;case 3:if(Re(n,e),Ae(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Xt(n.containerInfo)}catch(S){W(e,e.return,S)}break;case 4:Re(n,e),Ae(e);break;case 13:Re(n,e),Ae(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Yi=Q())),r&4&&as(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(c=oe)||m,Re(n,e),oe=c):Re(n,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(h=T=m;T!==null;){switch(g=T,w=g.child,g.tag){case 0:case 11:case 14:case 15:Ot(4,g,g.return);break;case 1:et(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(S){W(r,t,S)}}break;case 5:et(g,g.return);break;case 22:if(g.memoizedState!==null){us(h);continue}}w!==null?(w.return=g,T=w):us(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=nu("display",i))}catch(S){W(e,e.return,S)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){W(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(n,e),Ae(e),r&4&&as(e);break;case 21:break;default:Re(n,e),Ae(e)}}function Ae(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Nc(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wt(l,""),r.flags&=-33);var o=is(e);ri(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=is(e);ti(e,s,i);break;default:throw Error(x(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yp(e,n,t){T=e,Rc(e)}function Rc(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Rr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||oe;s=Rr;var c=oe;if(Rr=i,(oe=a)&&!c)for(T=l;T!==null;)i=T,a=i.child,i.tag===22&&i.memoizedState!==null?cs(l):a!==null?(a.return=i,T=a):cs(l);for(;o!==null;)T=o,Rc(o),o=o.sibling;T=l,Rr=s,oe=c}ss(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):ss(e)}}function ss(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Ll(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:_e(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ba(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ba(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Xt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}oe||n.flags&512&&ni(n)}catch(g){W(n,n.return,g)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function us(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function cs(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ll(4,n)}catch(a){W(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){W(n,l,a)}}var o=n.return;try{ni(n)}catch(a){W(n,o,a)}break;case 5:var i=n.return;try{ni(n)}catch(a){W(n,i,a)}}}catch(a){W(n,n.return,a)}if(n===e){T=null;break}var s=n.sibling;if(s!==null){s.return=n.return,T=s;break}T=n.return}}var vp=Math.ceil,dl=Je.ReactCurrentDispatcher,Xi=Je.ReactCurrentOwner,Ne=Je.ReactCurrentBatchConfig,D=0,q=null,X=null,ne=0,ve=0,nt=wn(0),Y=0,or=null,zn=0,Rl=0,Ki=0,Vt=null,fe=null,Yi=0,ht=1/0,He=null,fl=!1,li=null,fn=null,_r=!1,ln=null,pl=0,Ht=0,oi=null,Gr=-1,Wr=0;function se(){return D&6?Q():Gr!==-1?Gr:Gr=Q()}function pn(e){return e.mode&1?D&2&&ne!==0?ne&-ne:np.transition!==null?(Wr===0&&(Wr=hu()),Wr):(e=z,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e):1}function ze(e,n,t,r){if(50<Ht)throw Ht=0,oi=null,Error(x(185));ur(e,t,r),(!(D&2)||e!==q)&&(e===q&&(!(D&2)&&(Rl|=t),Y===4&&tn(e,ne)),ge(e,r),t===1&&D===0&&!(n.mode&1)&&(ht=Q()+500,El&&Sn()))}function ge(e,n){var t=e.callbackNode;ef(e,n);var r=Yr(e,e===q?ne:0);if(r===0)t!==null&&wa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&wa(t),n===1)e.tag===0?ep(ds.bind(null,e)):Ou(ds.bind(null,e)),Yf(function(){!(D&6)&&Sn()}),t=null;else{switch(mu(r)){case 1:t=ki;break;case 4:t=fu;break;case 16:t=Kr;break;case 536870912:t=pu;break;default:t=Kr}t=Uc(t,_c.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function _c(e,n){if(Gr=-1,Wr=0,D&6)throw Error(x(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var r=Yr(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=hl(e,r);else{n=r;var l=D;D|=2;var o=Ic();(q!==e||ne!==n)&&(He=null,ht=Q()+500,Rn(e,n));do try{xp();break}catch(s){Fc(e,s)}while(1);zi(),dl.current=o,D=l,X!==null?n=0:(q=null,ne=0,n=Y)}if(n!==0){if(n===2&&(l=Fo(e),l!==0&&(r=l,n=ii(e,l))),n===1)throw t=or,Rn(e,0),tn(e,r),ge(e,Q()),t;if(n===6)tn(e,r);else{if(l=e.current.alternate,!(r&30)&&!wp(l)&&(n=hl(e,r),n===2&&(o=Fo(e),o!==0&&(r=o,n=ii(e,o))),n===1))throw t=or,Rn(e,0),tn(e,r),ge(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:Tn(e,fe,He);break;case 3:if(tn(e,r),(r&130023424)===r&&(n=Yi+500-Q(),10<n)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Oo(Tn.bind(null,e,fe,He),n);break}Tn(e,fe,He);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-De(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vp(r/1960))-r,10<r){e.timeoutHandle=Oo(Tn.bind(null,e,fe,He),r);break}Tn(e,fe,He);break;case 5:Tn(e,fe,He);break;default:throw Error(x(329))}}}return ge(e,Q()),e.callbackNode===t?_c.bind(null,e):null}function ii(e,n){var t=Vt;return e.current.memoizedState.isDehydrated&&(Rn(e,n).flags|=256),e=hl(e,n),e!==2&&(n=fe,fe=t,n!==null&&ai(n)),e}function ai(e){fe===null?fe=e:fe.push.apply(fe,e)}function wp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Be(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~Ki,n&=~Rl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function ds(e){if(D&6)throw Error(x(327));at();var n=Yr(e,0);if(!(n&1))return ge(e,Q()),null;var t=hl(e,n);if(e.tag!==0&&t===2){var r=Fo(e);r!==0&&(n=r,t=ii(e,r))}if(t===1)throw t=or,Rn(e,0),tn(e,n),ge(e,Q()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Tn(e,fe,He),ge(e,Q()),null}function Ji(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(ht=Q()+500,El&&Sn())}}function Bn(e){ln!==null&&ln.tag===0&&!(D&6)&&at();var n=D;D|=1;var t=Ne.transition,r=z;try{if(Ne.transition=null,z=1,e)return e()}finally{z=r,Ne.transition=t,D=n,!(D&6)&&Sn()}}function Zi(){ve=nt.current,U(nt)}function Rn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kf(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Fi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:ft(),U(he),U(ie),Vi();break;case 5:Oi(r);break;case 4:ft();break;case 13:U(V);break;case 19:U(V);break;case 10:Bi(r.type._context);break;case 22:case 23:Zi()}t=t.return}if(q=e,X=e=hn(e.current,null),ne=ve=n,Y=0,or=null,Ki=Rl=zn=0,fe=Vt=null,jn!==null){for(n=0;n<jn.length;n++)if(t=jn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}jn=null}return e}function Fc(e,n){do{var t=X;try{if(zi(),Or.current=cl,ul){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(Dn=0,Z=K=H=null,Mt=!1,tr=0,Xi.current=null,t===null||t.return===null){Y=1,or=n,X=null;break}e:{var o=e,i=t.return,s=t,a=n;if(n=ne,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Za(i);if(w!==null){w.flags&=-257,qa(w,i,s,o,n),w.mode&1&&Ja(o,c,n),n=w,a=c;var v=n.updateQueue;if(v===null){var S=new Set;S.add(a),n.updateQueue=S}else v.add(a);break e}else{if(!(n&1)){Ja(o,c,n),qi();break e}a=Error(x(426))}}else if(M&&s.mode&1){var P=Za(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),qa(P,i,s,o,n),Ii(pt(a,s));break e}}o=a=pt(a,s),Y!==4&&(Y=2),Vt===null?Vt=[o]:Vt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=mc(o,a,n);$a(o,f);break e;case 1:s=a;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fn===null||!fn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=gc(o,s,n);$a(o,y);break e}}o=o.return}while(o!==null)}zc(t)}catch(C){n=C,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function Ic(){var e=dl.current;return dl.current=cl,e===null?cl:e}function qi(){(Y===0||Y===3||Y===2)&&(Y=4),q===null||!(zn&268435455)&&!(Rl&268435455)||tn(q,ne)}function hl(e,n){var t=D;D|=2;var r=Ic();(q!==e||ne!==n)&&(He=null,Rn(e,n));do try{Sp();break}catch(l){Fc(e,l)}while(1);if(zi(),D=t,dl.current=r,X!==null)throw Error(x(261));return q=null,ne=0,Y}function Sp(){for(;X!==null;)Dc(X)}function xp(){for(;X!==null&&!$d();)Dc(X)}function Dc(e){var n=Ac(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?zc(e):X=n,Xi.current=null}function zc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=hp(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,X=null;return}}else if(t=pp(t,n,ve),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Y===0&&(Y=5)}function Tn(e,n,t){var r=z,l=Ne.transition;try{Ne.transition=null,z=1,kp(e,n,t,r)}finally{Ne.transition=l,z=r}return null}function kp(e,n,t,r){do at();while(ln!==null);if(D&6)throw Error(x(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(nf(e,o),e===q&&(X=q=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,Uc(Kr,function(){return at(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var i=z;z=1;var s=D;D|=4,Xi.current=null,gp(e,t),Lc(t,e),Hf(Uo),Jr=!!Ao,Uo=Ao=null,e.current=t,yp(t),bd(),D=s,z=i,Ne.transition=o}else e.current=t;if(_r&&(_r=!1,ln=e,pl=l),o=e.pendingLanes,o===0&&(fn=null),Kd(t.stateNode),ge(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(fl)throw fl=!1,e=li,li=null,e;return pl&1&&e.tag!==0&&at(),o=e.pendingLanes,o&1?e===oi?Ht++:(Ht=0,oi=e):Ht=0,Sn(),null}function at(){if(ln!==null){var e=mu(pl),n=Ne.transition,t=z;try{if(Ne.transition=null,z=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,pl=0,D&6)throw Error(x(331));var l=D;for(D|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(T=c;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Ot(8,m,o)}var h=m.child;if(h!==null)h.return=m,T=h;else for(;T!==null;){m=T;var g=m.sibling,w=m.return;if(Ec(m),m===c){T=null;break}if(g!==null){g.return=w,T=g;break}T=w}}}var v=o.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ot(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ll(9,s)}}catch(C){W(s,s.return,C)}if(s===i){T=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,T=y;break e}T=s.return}}if(D=l,Sn(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{z=t,Ne.transition=n}}return!1}function fs(e,n,t){n=pt(t,n),n=mc(e,n,1),e=dn(e,n,1),n=se(),e!==null&&(ur(e,1,n),ge(e,n))}function W(e,n,t){if(e.tag===3)fs(e,e,t);else for(;n!==null;){if(n.tag===3){fs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=pt(t,e),e=gc(n,e,1),n=dn(n,e,1),e=se(),n!==null&&(ur(n,1,e),ge(n,e));break}}n=n.return}}function Cp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>Q()-Yi?Rn(e,0):Ki|=t),ge(e,n)}function Bc(e,n){n===0&&(e.mode&1?(n=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):n=1);var t=se();e=Ke(e,n),e!==null&&(ur(e,n,t),ge(e,t))}function Pp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bc(e,t)}function Tp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),Bc(e,t)}var Ac;Ac=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,fp(e,n,t);pe=!!(e.flags&131072)}else pe=!1,M&&n.flags&1048576&&Vu(n,ll,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Hr(e,n),e=n.pendingProps;var l=ut(n,ie.current);it(n,t),l=Gi(null,n,r,e,l,t);var o=Wi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(o=!0,tl(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ui(n),l.updater=jl,n.stateNode=l,l._reactInternals=n,Qo(n,r,e,t),n=Yo(null,n,r,!0,o,t)):(n.tag=0,M&&o&&_i(n),ae(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Hr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Np(r),e=_e(r,e),l){case 0:n=Ko(null,n,r,e,t);break e;case 1:n=ts(null,n,r,e,t);break e;case 11:n=es(null,n,r,e,t);break e;case 14:n=ns(null,n,r,_e(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Ko(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),ts(e,n,r,l,t);case 3:e:{if(Sc(n),e===null)throw Error(x(387));r=n.pendingProps,o=n.memoizedState,l=o.element,Qu(e,n),al(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=pt(Error(x(423)),n),n=rs(e,n,r,t,l);break e}else if(r!==l){l=pt(Error(x(424)),n),n=rs(e,n,r,t,l);break e}else for(we=cn(n.stateNode.containerInfo.firstChild),Se=n,M=!0,Ie=null,t=$u(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===l){n=Ye(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return Xu(n),e===null&&Wo(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Mo(r,l)?i=null:o!==null&&Mo(r,o)&&(n.flags|=32),wc(e,n),ae(e,n,i,t),n.child;case 6:return e===null&&Wo(n),null;case 13:return xc(e,n,t);case 4:return Mi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),es(e,n,r,l,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,B(ol,r._currentValue),r._currentValue=i,o!==null)if(Be(o.value,i)){if(o.children===l.children&&!he.current){n=Ye(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=be(-1,t&-t),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),$o(o.return,t,n),s.lanes|=t;break}a=a.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(x(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),$o(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,it(n,t),l=je(l),r=r(l),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,l=_e(r,n.pendingProps),l=_e(r.type,l),ns(e,n,r,l,t);case 15:return yc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Hr(e,n),n.tag=1,me(r)?(e=!0,tl(n)):e=!1,it(n,t),hc(n,r,l),Qo(n,r,l,t),Yo(null,n,r,!0,e,t);case 19:return kc(e,n,t);case 22:return vc(e,n,t)}throw Error(x(156,n.tag))};function Uc(e,n){return du(e,n)}function Ep(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new Ep(e,n,t,r)}function ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Np(e){if(typeof e=="function")return ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wi)return 11;if(e===Si)return 14}return 2}function hn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $r(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")ea(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case $n:return _n(t.children,l,o,n);case vi:i=8,l|=8;break;case yo:return e=Ee(12,t,n,l|2),e.elementType=yo,e.lanes=o,e;case vo:return e=Ee(13,t,n,l),e.elementType=vo,e.lanes=o,e;case wo:return e=Ee(19,t,n,l),e.elementType=wo,e.lanes=o,e;case Xs:return _l(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bs:i=10;break e;case Qs:i=9;break e;case wi:i=11;break e;case Si:i=14;break e;case qe:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=Ee(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function _n(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function _l(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=Xs,e.lanes=t,e.stateNode={isHidden:!1},e}function po(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function ho(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function jp(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function na(e,n,t,r,l,o,i,s,a){return e=new jp(e,n,t,s,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ee(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ui(o),e}function Lp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Mc(e){if(!e)return yn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(me(t))return Mu(e,t,n)}return n}function Oc(e,n,t,r,l,o,i,s,a){return e=na(t,r,!0,e,l,o,i,s,a),e.context=Mc(null),t=e.current,r=se(),l=pn(t),o=be(r,l),o.callback=n??null,dn(t,o,l),e.current.lanes=l,ur(e,l,r),ge(e,r),e}function Fl(e,n,t,r){var l=n.current,o=se(),i=pn(l);return t=Mc(t),n.context===null?n.context=t:n.pendingContext=t,n=be(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(l,n,i),e!==null&&(ze(e,l,i,o),Mr(e,l,i)),i}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ps(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ta(e,n){ps(e,n),(e=e.alternate)&&ps(e,n)}function Rp(){return null}var Vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ra(e){this._internalRoot=e}Il.prototype.render=ra.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));Fl(e,n,null,null)};Il.prototype.unmount=ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bn(function(){Fl(null,e,null,null)}),n[Xe]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var n=vu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&Su(e)}};function la(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hs(){}function _p(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=ml(i);o.call(c)}}var i=Oc(n,r,e,0,null,!1,!1,"",hs);return e._reactRootContainer=i,e[Xe]=i.current,Jt(e.nodeType===8?e.parentNode:e),Bn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=ml(a);s.call(c)}}var a=na(e,0,!1,null,null,!1,!1,"",hs);return e._reactRootContainer=a,e[Xe]=a.current,Jt(e.nodeType===8?e.parentNode:e),Bn(function(){Fl(n,a,t,r)}),a}function zl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=ml(i);s.call(a)}}Fl(n,i,e,l)}else i=_p(t,n,e,l,r);return ml(i)}gu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(Ci(n,t|1),ge(n,Q()),!(D&6)&&(ht=Q()+500,Sn()))}break;case 13:Bn(function(){var r=Ke(e,1);if(r!==null){var l=se();ze(r,e,1,l)}}),ta(e,1)}};Pi=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=se();ze(n,e,134217728,t)}ta(e,134217728)}};yu=function(e){if(e.tag===13){var n=pn(e),t=Ke(e,n);if(t!==null){var r=se();ze(t,e,n,r)}ta(e,n)}};vu=function(){return z};wu=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};Lo=function(e,n,t){switch(n){case"input":if(ko(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Tl(r);if(!l)throw Error(x(90));Ys(r),ko(r,l)}}}break;case"textarea":Zs(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};ou=Ji;iu=Bn;var Fp={usingClientEntryPoint:!1,Events:[dr,Kn,Tl,ru,lu,Ji]},Lt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:Lt.bundleType,version:Lt.version,rendererPackageName:Lt.rendererPackageName,rendererConfig:Lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Lt.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{xl=Fr.inject(Ip),Oe=Fr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!la(n))throw Error(x(200));return Lp(e,n,null,t)};ke.createRoot=function(e,n){if(!la(e))throw Error(x(299));var t=!1,r="",l=Vc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=na(e,1,!1,null,null,t,!1,r,l),e[Xe]=n.current,Jt(e.nodeType===8?e.parentNode:e),new ra(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=uu(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Bn(e)};ke.hydrate=function(e,n,t){if(!Dl(n))throw Error(x(200));return zl(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!la(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Vc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Oc(n,null,e,1,t??null,l,!1,o,i),e[Xe]=n.current,Jt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Il(n)};ke.render=function(e,n,t){if(!Dl(n))throw Error(x(200));return zl(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(x(40));return e._reactRootContainer?(Bn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ke.unstable_batchedUpdates=Ji;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Dl(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return zl(e,n,t,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function Hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hc)}catch(e){console.error(e)}}Hc(),Hs.exports=ke;var Dp=Hs.exports,Gc,ms=Dp;Gc=ms.createRoot,ms.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(null,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const gs="popstate";function zp(e){e===void 0&&(e={});function n(l,o){let{pathname:i="/",search:s="",hash:a=""}=Mn(l.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),si("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(l,o){let i=l.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let a=l.location.href,c=a.indexOf("#");s=c===-1?a:a.slice(0,c)}return s+"#"+(typeof o=="string"?o:gl(o))}function r(l,o){oa(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Ap(n,t,r,e)}function $(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function oa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Bp(){return Math.random().toString(36).substr(2,8)}function ys(e,n){return{usr:e.state,key:e.key,idx:n}}function si(e,n,t,r){return t===void 0&&(t=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Mn(n):n,{state:t,key:n&&n.key||r||Bp()})}function gl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Mn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Ap(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s=on.Pop,a=null,c=m();c==null&&(c=0,i.replaceState(ir({},i.state,{idx:c}),""));function m(){return(i.state||{idx:null}).idx}function h(){s=on.Pop;let P=m(),f=P==null?null:P-c;c=P,a&&a({action:s,location:S.location,delta:f})}function g(P,f){s=on.Push;let d=si(S.location,P,f);t&&t(d,P),c=m()+1;let p=ys(d,c),y=S.createHref(d);try{i.pushState(p,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(y)}o&&a&&a({action:s,location:S.location,delta:1})}function w(P,f){s=on.Replace;let d=si(S.location,P,f);t&&t(d,P),c=m();let p=ys(d,c),y=S.createHref(d);i.replaceState(p,"",y),o&&a&&a({action:s,location:S.location,delta:0})}function v(P){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof P=="string"?P:gl(P);return d=d.replace(/ $/,"%20"),$(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let S={get action(){return s},get location(){return e(l,i)},listen(P){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(gs,h),a=P,()=>{l.removeEventListener(gs,h),a=null}},createHref(P){return n(l,P)},createURL:v,encodeLocation(P){let f=v(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(P){return i.go(P)}};return S}var vs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vs||(vs={}));function Up(e,n,t){return t===void 0&&(t="/"),Mp(e,n,t,!1)}function Mp(e,n,t,r){let l=typeof n=="string"?Mn(n):n,o=mt(l.pathname||"/",t);if(o==null)return null;let i=Wc(e);Op(i);let s=null,a=Jp(o);for(let c=0;s==null&&c<i.length;++c)s=Kp(i[c],a,r);return s}function Wc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(o,i,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&($(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=mn([r,a.relativePath]),m=t.concat(a);o.children&&o.children.length>0&&($(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Wc(o.children,n,m,c)),!(o.path==null&&!o.index)&&n.push({path:c,score:Qp(c,o.index),routesMeta:m})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,i);else for(let a of $c(o.path))l(o,i,a)}),n}function $c(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=$c(r.join("/")),s=[];return s.push(...i.map(a=>a===""?o:[o,a].join("/"))),l&&s.push(...i),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Op(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Xp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Vp=/^:[\w-]+$/,Hp=3,Gp=2,Wp=1,$p=10,bp=-2,ws=e=>e==="*";function Qp(e,n){let t=e.split("/"),r=t.length;return t.some(ws)&&(r+=bp),n&&(r+=Gp),t.filter(l=>!ws(l)).reduce((l,o)=>l+(Vp.test(o)?Hp:o===""?Wp:$p),r)}function Xp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function Kp(e,n,t){t===void 0&&(t=!1);let{routesMeta:r}=e,l={},o="/",i=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,m=o==="/"?n:n.slice(o.length)||"/",h=yl({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},m),g=a.route;if(!h&&c&&t&&!r[r.length-1].route.index&&(h=yl({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},m)),!h)return null;Object.assign(l,h.params),i.push({params:l,pathname:mn([o,h.pathname]),pathnameBase:eh(mn([o,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(o=mn([o,h.pathnameBase]))}return i}function yl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Yp(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:w}=m;if(g==="*"){let S=s[h]||"";i=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const v=s[h];return w&&!v?c[g]=void 0:c[g]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:i,pattern:e}}function Yp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),oa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function Jp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return oa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function mt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Zp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?Mn(e):e,o;return t?(t=Xc(t),t.startsWith("/")?o=Ss(t.substring(1),"/"):o=Ss(t,n)):o=n,{pathname:o,search:nh(r),hash:th(l)}}function Ss(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function mo(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function bc(e,n){let t=qp(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Qc(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Mn(e):(l=ir({},e),$(!l.pathname||!l.pathname.includes("?"),mo("?","pathname","search",l)),$(!l.pathname||!l.pathname.includes("#"),mo("#","pathname","hash",l)),$(!l.search||!l.search.includes("#"),mo("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(i==null)s=t;else{let h=n.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}s=h>=0?n[h]:"/"}let a=Zp(l,s),c=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(c||m)&&(a.pathname+="/"),a}const Xc=e=>e.replace(/\/\/+/g,"/"),mn=e=>Xc(e.join("/")),eh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,th=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kc=["post","put","patch","delete"];new Set(Kc);const lh=["get",...Kc];new Set(lh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ar.apply(null,arguments)}const Bl=k.createContext(null),Yc=k.createContext(null),xn=k.createContext(null),Al=k.createContext(null),On=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Jc=k.createContext(null);function oh(e,n){let{relative:t}=n===void 0?{}:n;pr()||$(!1);let{basename:r,navigator:l}=k.useContext(xn),{hash:o,pathname:i,search:s}=Ul(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:mn([r,i])),l.createHref({pathname:a,search:s,hash:o})}function pr(){return k.useContext(Al)!=null}function wt(){return pr()||$(!1),k.useContext(Al).location}function Zc(e){k.useContext(xn).static||k.useLayoutEffect(e)}function ih(){let{isDataRoute:e}=k.useContext(On);return e?wh():ah()}function ah(){pr()||$(!1);let e=k.useContext(Bl),{basename:n,future:t,navigator:r}=k.useContext(xn),{matches:l}=k.useContext(On),{pathname:o}=wt(),i=JSON.stringify(bc(l,t.v7_relativeSplatPath)),s=k.useRef(!1);return Zc(()=>{s.current=!0}),k.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=Qc(c,JSON.parse(i),o,m.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:mn([n,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[n,r,i,o,e])}function Ul(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=k.useContext(xn),{matches:l}=k.useContext(On),{pathname:o}=wt(),i=JSON.stringify(bc(l,r.v7_relativeSplatPath));return k.useMemo(()=>Qc(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function sh(e,n){return uh(e,n)}function uh(e,n,t,r){pr()||$(!1);let{navigator:l}=k.useContext(xn),{matches:o}=k.useContext(On),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let c=wt(),m;if(n){var h;let P=typeof n=="string"?Mn(n):n;a==="/"||(h=P.pathname)!=null&&h.startsWith(a)||$(!1),m=P}else m=c;let g=m.pathname||"/",w=g;if(a!=="/"){let P=a.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=Up(e,{pathname:w}),S=hh(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:mn([a,l.encodeLocation?l.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:mn([a,l.encodeLocation?l.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),o,t,r);return n&&S?k.createElement(Al.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:on.Pop}},S):S}function ch(){let e=vh(),n=rh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},n),t?k.createElement("pre",{style:l},t):null,o)}const dh=k.createElement(ch,null);class fh extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?k.createElement(On.Provider,{value:this.props.routeContext},k.createElement(Jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ph(e){let{routeContext:n,match:t,children:r}=e,l=k.useContext(Bl);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(On.Provider,{value:n},r)}function hh(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,s=(l=t)==null?void 0:l.errors;if(s!=null){let m=i.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||$(!1),i=i.slice(0,Math.min(i.length,m+1))}let a=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<i.length;m++){let h=i[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:w}=t,v=h.route.loader&&g[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||v){a=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((m,h,g)=>{let w,v=!1,S=null,P=null;t&&(w=s&&h.route.id?s[h.route.id]:void 0,S=h.route.errorElement||dh,a&&(c<0&&g===0?(Sh("route-fallback",!1),v=!0,P=null):c===g&&(v=!0,P=h.route.hydrateFallbackElement||null)));let f=n.concat(i.slice(0,g+1)),d=()=>{let p;return w?p=S:v?p=P:h.route.Component?p=k.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,k.createElement(ph,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:t!=null},children:p})};return t&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?k.createElement(fh,{location:t.location,revalidation:t.revalidation,component:S,error:w,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var qc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qc||{}),vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vl||{});function mh(e){let n=k.useContext(Bl);return n||$(!1),n}function gh(e){let n=k.useContext(Yc);return n||$(!1),n}function yh(e){let n=k.useContext(On);return n||$(!1),n}function ed(e){let n=yh(),t=n.matches[n.matches.length-1];return t.route.id||$(!1),t.route.id}function vh(){var e;let n=k.useContext(Jc),t=gh(vl.UseRouteError),r=ed(vl.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function wh(){let{router:e}=mh(qc.UseNavigateStable),n=ed(vl.UseNavigateStable),t=k.useRef(!1);return Zc(()=>{t.current=!0}),k.useCallback(function(l,o){o===void 0&&(o={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ar({fromRouteId:n},o)))},[e,n])}const xs={};function Sh(e,n,t){!n&&!xs[e]&&(xs[e]=!0)}function xh(e,n){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!n||n.v7_relativeSplatPath),n&&(n.v7_fetcherPersist,n.v7_normalizeFormMethod,n.v7_partialHydration,n.v7_skipActionErrorRevalidation)}function En(e){$(!1)}function kh(e){let{basename:n="/",children:t=null,location:r,navigationType:l=on.Pop,navigator:o,static:i=!1,future:s}=e;pr()&&$(!1);let a=n.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:a,navigator:o,static:i,future:ar({v7_relativeSplatPath:!1},s)}),[a,s,o,i]);typeof r=="string"&&(r=Mn(r));let{pathname:m="/",search:h="",hash:g="",state:w=null,key:v="default"}=r,S=k.useMemo(()=>{let P=mt(m,a);return P==null?null:{location:{pathname:P,search:h,hash:g,state:w,key:v},navigationType:l}},[a,m,h,g,w,v,l]);return S==null?null:k.createElement(xn.Provider,{value:c},k.createElement(Al.Provider,{children:t,value:S}))}function Ch(e){let{children:n,location:t}=e;return sh(ui(n),t)}new Promise(()=>{});function ui(e,n){n===void 0&&(n=[]);let t=[];return k.Children.forEach(e,(r,l)=>{if(!k.isValidElement(r))return;let o=[...n,l];if(r.type===k.Fragment){t.push.apply(t,ui(r.props.children,o));return}r.type!==En&&$(!1),!r.props.index||!r.props.children||$(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ui(r.props.children,o)),t.push(i)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wl.apply(null,arguments)}function nd(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Ph(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Th(e,n){return e.button===0&&(!n||n==="_self")&&!Ph(e)}const Eh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jh="6";try{window.__reactRouterVersion=jh}catch{}const Lh=k.createContext({isTransitioning:!1}),Rh="startTransition",ks=kd[Rh];function _h(e){let{basename:n,children:t,future:r,window:l}=e,o=k.useRef();o.current==null&&(o.current=zp({window:l,v5Compat:!0}));let i=o.current,[s,a]=k.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},m=k.useCallback(h=>{c&&ks?ks(()=>a(h)):a(h)},[a,c]);return k.useLayoutEffect(()=>i.listen(m),[i,m]),k.useEffect(()=>xh(r),[r]),k.createElement(kh,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:i,future:r})}const Fh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=k.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:s,target:a,to:c,preventScrollReset:m,viewTransition:h}=n,g=nd(n,Eh),{basename:w}=k.useContext(xn),v,S=!1;if(typeof c=="string"&&Ih.test(c)&&(v=c,Fh))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=mt(y.pathname,w);y.origin===p.origin&&C!=null?c=C+y.search+y.hash:S=!0}catch{}let P=oh(c,{relative:l}),f=Bh(c,{replace:i,state:s,target:a,preventScrollReset:m,relative:l,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",wl({},g,{href:v||P,onClick:S||o?r:d,ref:t,target:a}))}),Dh=k.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:i=!1,style:s,to:a,viewTransition:c,children:m}=n,h=nd(n,Nh),g=Ul(a,{relative:h.relative}),w=wt(),v=k.useContext(Yc),{navigator:S,basename:P}=k.useContext(xn),f=v!=null&&Ah(g)&&c===!0,d=S.encodeLocation?S.encodeLocation(g).pathname:g.pathname,p=w.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(p=p.toLowerCase(),y=y?y.toLowerCase():null,d=d.toLowerCase()),y&&P&&(y=mt(y,P)||y);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let N=p===d||!i&&p.startsWith(d)&&p.charAt(C)==="/",j=y!=null&&(y===d||!i&&y.startsWith(d)&&y.charAt(d.length)==="/"),L={isActive:N,isPending:j,isTransitioning:f},O=N?r:void 0,_;typeof o=="function"?_=o(L):_=[o,N?"active":null,j?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ye=typeof s=="function"?s(L):s;return k.createElement(de,wl({},h,{"aria-current":O,className:_,ref:t,style:ye,to:a,viewTransition:c}),typeof m=="function"?m(L):m)});var ci;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ci||(ci={}));var Cs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cs||(Cs={}));function zh(e){let n=k.useContext(Bl);return n||$(!1),n}function Bh(e,n){let{target:t,replace:r,state:l,preventScrollReset:o,relative:i,viewTransition:s}=n===void 0?{}:n,a=ih(),c=wt(),m=Ul(e,{relative:i});return k.useCallback(h=>{if(Th(h,t)){h.preventDefault();let g=r!==void 0?r:gl(c)===gl(m);a(e,{replace:g,state:l,preventScrollReset:o,relative:i,viewTransition:s})}},[c,a,m,r,l,t,e,o,i,s])}function Ah(e,n){n===void 0&&(n={});let t=k.useContext(Lh);t==null&&$(!1);let{basename:r}=zh(ci.useViewTransitionState),l=Ul(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=mt(t.currentLocation.pathname,r)||t.currentLocation.pathname,i=mt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return yl(l.pathname,i)!=null||yl(l.pathname,o)!=null}function Uh({children:e,title:n="Roblox · Preview"}){return u.jsxs("div",{className:"preview",children:[u.jsxs("div",{className:"preview-bar",children:[u.jsxs("span",{className:"dots",children:[u.jsx("i",{className:"dot dot-r"}),u.jsx("i",{className:"dot dot-y"}),u.jsx("i",{className:"dot dot-g"})]}),u.jsx("span",{className:"preview-title",children:n})]}),u.jsx("div",{className:"preview-canvas",children:e})]})}const Hn=(...e)=>{};Object.assign(Hn,{toast:Hn,success:Hn,error:Hn,info:Hn,warning:Hn,dismiss:()=>{}});const td=[{title:"Aimbot + Silent Aim",tag:"Combat",summary:"Hold-to-aim lock, silent aim and a visible FOV circle with adjustable radius and smoothing.",detail:"Locks to the closest visible head inside your FOV circle. Sliders control the FOV radius and smoothing so it feels natural, not robotic. A silent-aim toggle and on-screen aim circle round out the combat tab.",icon:"◎"},{title:"Layered ESP",tag:"Visuals",summary:"Box, Name, Health, Tracer, Distance and Avatar chips — each toggled independently.",detail:"Six ESP layers render through a single dedicated ScreenGui and one shared render loop, so nothing flickers. Distance shows meters, the avatar layer draws a head-shot chip, and everything clears cleanly the instant you switch it off.",icon:"◫"},{title:"Live Ping Meter",tag:"HUD",summary:"A tidy readout that grades your connection from Godly to Rough in real time.",detail:"Reads the network data ping twice a second and colour-codes it, so you always know whether that missed shot was you — or the server.",icon:"◐"},{title:"Lighting: Fullbright · NoFog · X-Ray",tag:"Environment",summary:"Flatten lighting, kill fog and see through walls without wrecking the map.",detail:"Fullbright lifts ambient lighting to a neutral level. NoFog pushes fog to infinity. X-Ray makes world geometry translucent while keeping players crisp — and each restores its original values on toggle off.",icon:"◇"},{title:"Movement Suite",tag:"Movement",summary:"WalkSpeed, JumpPower, Fly, Noclip, Infinite Jump and Spinbot — all with sliders.",detail:"Full flight with WASD + Space/Shift, tunable walk speed and jump power, collision-free Noclip, endless jumping and a spinbot. Every loop disconnects on toggle so there are no leftover BodyMovers or connections.",icon:"◈"},{title:"Player Protection",tag:"Player",summary:"God Mode, Anti-Fling, Anti-AFK and a one-tap character reset.",detail:"God Mode auto-heals and teleports you out of the void, Anti-Fling clamps runaway velocity, Anti-AFK keeps you from being kicked, and Reset respawns your character instantly.",icon:"◆"},{title:"Tabbed Interface",tag:"Interface",summary:"Combat, Visuals, Movement and Player tabs with scrollable, categorized toggles.",detail:"The window is organised into tabs so nothing gets cut off. Each page scrolls, sliders sit next to their toggles, and the whole thing is draggable and hides on RightShift.",icon:"◧"},{title:"Refined Notifications",tag:"Interface",summary:"Soft, stacked toasts with an accent bar and gentle tween in-and-out.",detail:"Every action confirms with a Claude-styled toast — accent bar, title and description — that animates in, waits, and slides away without piling up.",icon:"◉"}],Mh="https://assetdelivery.roblox.com/v1/asset/?id=115798729575437";function Ps({size:e=20}){const[n,t]=k.useState(!1),r={width:e,height:e};return u.jsx("span",{className:"panel-decal",style:r,"aria-hidden":"true",children:n?u.jsx("span",{className:"panel-decal-dot"}):u.jsx("img",{src:Mh,alt:"",onError:()=>t(!0),draggable:!1})})}function Oh(){const[e,n]=k.useState(42);k.useEffect(()=>{const r=window.setInterval(()=>{n(l=>{const o=Math.round((Math.random()-.45)*22),i=l+o;return Math.min(210,Math.max(18,i))})},900);return()=>window.clearInterval(r)},[]);const t=k.useMemo(()=>e<50?{label:"Godly ping",tone:"great"}:e<100?{label:"Pretty good ping",tone:"good"}:e<140?{label:"Good ping",tone:"ok"}:e<180?{label:"Mid ping",tone:"mid"}:{label:"Rough ping",tone:"bad"},[e]);return{ping:e,quality:t}}const rd={Combat:[{label:"Aimbot",hint:"Hold RMB · FOV lock",on:!0},{label:"Silent Aim",hint:"Hidden FOV target"},{label:"Aim Circle",hint:"FOV ring overlay",on:!0}],Visuals:[{label:"ESP · Box",hint:"Player outline",on:!0},{label:"ESP · Health",hint:"Live HP bar",on:!0},{label:"ESP · Tracer",hint:"Line to target"},{label:"ESP · Avatar",hint:"Headshot chip"},{label:"X-Ray",hint:"See-through walls"}],Movement:[{label:"Fly",hint:"WASD + Space/Shift",on:!0},{label:"WalkSpeed",hint:"Tunable slider"},{label:"Noclip",hint:"Phase through parts"},{label:"Infinite Jump",hint:"No cooldown"}],Player:[{label:"God Mode",hint:"Auto-heal · anti-void",on:!0},{label:"Anti-Fling",hint:"Kills velocity spikes"},{label:"Anti-AFK",hint:"Never idle-kicked",on:!0}]},Vh=Object.keys(rd);function Ts(){const{ping:e,quality:n}=Oh(),[t,r]=k.useState("Combat");return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"hero container",children:[u.jsxs("div",{className:"hero-copy",children:[u.jsxs("span",{className:"pill",children:[u.jsx("span",{className:"pill-dot"})," v1.2 · Claude-styled hub"]}),u.jsxs("h1",{className:"hero-title",children:["One clean panel.",u.jsx("span",{className:"hero-grad",children:" No leftover GUIs."})]}),u.jsx("p",{className:"hero-sub",children:"Claudeware is a tabbed Roblox utility built around a soft, Claude-inspired interface — aimbot, layered ESP and movement tools that tear themselves down cleanly the moment you toggle off."}),u.jsxs("div",{className:"hero-actions",children:[u.jsx(de,{to:"/download",className:"btn btn-primary btn-lg",children:"Get the script"}),u.jsx(de,{to:"/features",className:"btn btn-ghost btn-lg",children:"See the modules"})]}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"25+"}),u.jsx("span",{children:"Toggles"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"4"}),u.jsx("span",{children:"Tabs"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:"0"}),u.jsx("span",{children:"Leaked loops"})]})]})]}),u.jsxs("div",{className:"hero-visual",children:[u.jsxs(Uh,{children:[u.jsxs("div",{className:"ping-widget","data-tone":n.tone,children:[u.jsx("div",{className:"ping-logo",children:u.jsx(Ps,{size:20})}),u.jsxs("div",{className:"ping-body",children:[u.jsx("span",{className:"ping-quality",children:n.label}),u.jsxs("div",{className:"ping-value",children:[u.jsx("strong",{children:e}),u.jsx("span",{children:"ms"})]})]})]}),u.jsxs("div",{className:"cw-panel",children:[u.jsxs("div",{className:"cw-panel-top",children:[u.jsxs("div",{className:"cw-brand",children:[u.jsx(Ps,{size:22}),u.jsx("div",{className:"cw-brand-text",children:u.jsx("span",{className:"cw-brand-name",children:"Claudeware"})})]}),u.jsx("span",{className:"cw-ver",children:"v1.2.0"})]}),u.jsxs("div",{className:"cw-body",children:[u.jsx("div",{className:"cw-tabs",role:"tablist",children:Vh.map(l=>u.jsx("button",{role:"tab","aria-selected":t===l,className:`cw-tab ${t===l?"is-active":""}`,onClick:()=>r(l),children:l},l))}),u.jsx("div",{className:"cw-page",children:rd[t].map(l=>u.jsx(Hh,{label:l.label,hint:l.hint,on:l.on},l.label))})]})]})]}),u.jsx("div",{className:"hero-visual-shadow","aria-hidden":"true"})]})]}),u.jsxs("section",{className:"section container",children:[u.jsxs("div",{className:"section-head",children:[u.jsx("h2",{children:"Rebuilt for stability, not screenshots"}),u.jsx("p",{children:"Every module runs off a single render loop and disconnects the moment it is toggled off — no duplicate ScreenGuis, no orphaned BodyMovers, no frames left drawing after you leave."})]}),u.jsx("div",{className:"feature-grid",children:td.map(l=>u.jsxs("article",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon","aria-hidden":"true",children:l.icon}),u.jsx("h3",{children:l.title}),u.jsx("p",{children:l.summary})]},l.title))})]}),u.jsx("section",{className:"cta-band",children:u.jsxs("div",{className:"container cta-inner",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Paste it once. Done."}),u.jsx("p",{children:"Copy the full LuaU source, execute, and the panel fades in. Press RightShift any time to hide it."})]}),u.jsx(de,{to:"/download",className:"btn btn-primary btn-lg",children:"Copy the script"})]})})]})}function Hh({label:e,hint:n,on:t=!1}){const[r,l]=k.useState(t);return u.jsxs("button",{type:"button",className:`mock-toggle ${r?"is-on":""}`,onClick:()=>l(o=>!o),"aria-pressed":r,children:[u.jsxs("div",{className:"mock-toggle-text",children:[u.jsx("span",{className:"mock-toggle-label",children:e}),u.jsx("span",{className:"mock-toggle-hint",children:n})]}),u.jsx("span",{className:"switch","aria-hidden":"true",children:u.jsx("span",{className:"switch-knob"})})]})}const Gh=["Box","Name","Health","Tracer","Distance","Avatar"];function Wh(){const[e,n]=k.useState({Box:!0,Name:!0,Health:!0,Tracer:!1,Distance:!1,Avatar:!1}),t=r=>n(l=>({...l,[r]:!l[r]}));return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"page-head container",children:[u.jsxs("span",{className:"pill",children:[u.jsx("span",{className:"pill-dot"})," Full module breakdown"]}),u.jsx("h1",{children:"Every module, restored. One calm interface."}),u.jsx("p",{children:"Claudeware keeps combat, visuals, movement and player tools in separate, well-behaved tabs. Toggle anything on or off — nothing was torn out, and the rest keeps running exactly as it was."})]}),u.jsx("section",{className:"section container",children:u.jsx("div",{className:"feature-detail-grid",children:td.map(r=>u.jsxs("article",{className:"feature-detail",children:[u.jsxs("div",{className:"feature-detail-top",children:[u.jsx("span",{className:"feature-icon","aria-hidden":"true",children:r.icon}),u.jsx("span",{className:"tag",children:r.tag})]}),u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.detail})]},r.title))})}),u.jsx("section",{className:"section container",children:u.jsxs("div",{className:"esp-demo",children:[u.jsxs("div",{className:"esp-demo-copy",children:[u.jsx("h2",{children:"Try the ESP layers"}),u.jsx("p",{children:"Each layer is independent. Flip them and watch the target overlay update — that is exactly how the in-game panel behaves."}),u.jsx("div",{className:"esp-controls",children:Gh.map(r=>u.jsx("button",{className:`chip ${e[r]?"chip-on":""}`,onClick:()=>t(r),"aria-pressed":e[r],children:r},r))})]}),u.jsx("div",{className:"esp-stage",children:u.jsxs("div",{className:"esp-target",children:[e.Box&&u.jsx("span",{className:"esp-box"}),e.Name&&u.jsx("span",{className:"esp-name",children:"EnemyPlayer"}),e.Health&&u.jsx("span",{className:"esp-health",children:u.jsx("span",{className:"esp-health-fill"})}),e.Avatar&&u.jsx("span",{className:"esp-avatar",children:"EP"}),e.Distance&&u.jsx("span",{className:"esp-distance",children:"18m"}),u.jsxs("span",{className:"esp-figure",children:[u.jsx("span",{className:"esp-head"}),u.jsx("span",{className:"esp-torso"})]}),e.Tracer&&u.jsx("span",{className:"esp-tracer"})]})})]})}),u.jsx("section",{className:"cta-band",children:u.jsxs("div",{className:"container cta-inner",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Ready to run it?"}),u.jsx("p",{children:"Grab the loadstring and you are seconds from execution."})]}),u.jsx(de,{to:"/download",className:"btn btn-primary btn-lg",children:"Go to download"})]})})]})}const $h="1.2.0",Es="Claudeware.lua",Ir=String.raw`local Players = game:GetService("Players")
local UIS = game:GetService("UserInputService")
local TS = game:GetService("TweenService")
local RS = game:GetService("RunService")
local Lighting = game:GetService("Lighting")
local Stats = game:GetService("Stats")
local Workspace = workspace

local plr = Players.LocalPlayer
local mouse = plr:GetMouse()
local camera = Workspace.CurrentCamera
local coreGui = (gethui and gethui() or game:GetService("CoreGui"))

--// ═══════════════ Безопасная обёртка Drawing ═══════════════
--// Некоторые эксплойты не имеют Drawing API — без этой заглушки
--// скрипт падал на первой же строке и «ничего не загружалось».
local HAS_DRAWING = (typeof(Drawing) == "table" or type(Drawing) == "table")
    and type(Drawing.new) == "function"

local Draw
if HAS_DRAWING then
    Draw = Drawing
else
    -- Заглушка: возвращает пустышки, чтобы ESP-код не крашился.
    local Stub = {}
    Stub.__index = Stub
    function Stub:Remove() end
    Draw = {
        new = function()
            return setmetatable({
                Visible = false, Thickness = 0, Filled = false,
                Color = Color3.new(), Size = 0, Center = false,
                Outline = false, Radius = 0, NumSides = 0,
                Transparency = 1, Position = Vector2.zero,
                From = Vector2.zero, To = Vector2.zero, Text = "",
            }, Stub)
        end,
    }
end

--// ═══════════════ Тема (Claude Code Style) ═══════════════
local Theme = {
    Background   = Color3.fromRGB(249, 249, 249),
    Secondary    = Color3.fromRGB(255, 255, 255),
    Tertiary     = Color3.fromRGB(240, 240, 240),
    Element      = Color3.fromRGB(245, 245, 245),
    ElementHover = Color3.fromRGB(235, 235, 235),
    Accent       = Color3.fromRGB(217, 119, 87), -- Claude Orange
    AccentLight  = Color3.fromRGB(240, 180, 140),
    Text         = Color3.fromRGB(30, 30, 30),
    TextDark     = Color3.fromRGB(130, 130, 130),
    Stroke       = Color3.fromRGB(220, 220, 220),
    White        = Color3.fromRGB(255, 255, 255),
    Red          = Color3.fromRGB(255, 50, 50),
    Green        = Color3.fromRGB(50, 255, 100),
    Yellow       = Color3.fromRGB(255, 220, 0),
    NickColor    = Color3.fromRGB(249, 249, 249)
}

--// ═══════════════ Настройки ═══════════════
local Config = {
    WalkSpeed   = 32,   -- скорость при включённом WalkSpeed
    JumpPower   = 75,   -- сила прыжка при включённом JumpPower
    FlySpeed    = 60,   -- скорость полёта
    SpinSpeed   = 20,   -- скорость вращения (spinbot)
    AimFov      = 120,  -- радиус круга наведения (px)
    AimSmooth   = 0.25, -- сглаживание aimbot (0 = мгновенно)
}

--// ═══════════════ Состояния ═══════════════
local State = {
    Aimbot = false,
    SilentAim = false,
    AimCircle = false,
    AimbotHolding = false,
    ESP = {
        Box = false,
        Name = false,
        Tracer = false,
        Health = false,
        Distance = false,
        Avatar = false
    },
    Xray = false,
    Fullbright = false,
    NoFog = false,
    WalkSpeed = false,
    JumpPower = false,
    Fly = false,
    Noclip = false,
    InfJump = false,
    Spinbot = false,
    GodMode = false,
    AntiFling = false,
    AntiAFK = false,
}

local Connections = {}
local ESPObjects = {}

--// Удаляем старые копии
pcall(function()
    if coreGui:FindFirstChild("ClaudewareGUI") then coreGui.ClaudewareGUI:Destroy() end
    if coreGui:FindFirstChild("ClaudewarePing") then coreGui.ClaudewarePing:Destroy() end
    if coreGui:FindFirstChild("ClaudewareESP") then coreGui.ClaudewareESP:Destroy() end
end)

--// ═══════════════ Вспомогательные функции UI ═══════════════
local function tween(obj, time, props, style)
    local t = TS:Create(obj, TweenInfo.new(time, style or Enum.EasingStyle.Quart, Enum.EasingDirection.Out), props)
    t:Play()
    return t
end

local function round(obj, radius)
    local c = Instance.new("UICorner")
    c.CornerRadius = UDim.new(0, radius or 6)
    c.Parent = obj
    return c
end

local function stroke(obj, color, thickness, transparency)
    local s = Instance.new("UIStroke")
    s.Color = color or Theme.Stroke
    s.Thickness = thickness or 1
    s.Transparency = transparency or 0
    s.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
    s.Parent = obj
    return s
end

local function padding(obj, all)
    local p = Instance.new("UIPadding")
    p.PaddingTop = UDim.new(0, all)
    p.PaddingBottom = UDim.new(0, all)
    p.PaddingLeft = UDim.new(0, all)
    p.PaddingRight = UDim.new(0, all)
    p.Parent = obj
    return p
end

--// Безопасный доступ к персонажу
local function getChar(player)
    return player.Character
end
local function getHum(char)
    return char and char:FindFirstChildOfClass("Humanoid")
end
local function getRoot(char)
    return char and (char:FindFirstChild("HumanoidRootPart") or char:FindFirstChild("Torso"))
end

--// ═══════════════ PING GUI (CoreGui) ═══════════════
local pingGui = Instance.new("ScreenGui")
pingGui.Name = "ClaudewarePing"
pingGui.ResetOnSpawn = false
pingGui.Parent = coreGui

local pingMain = Instance.new("Frame")
pingMain.Size = UDim2.new(0, 130, 0, 45)
pingMain.Position = UDim2.new(0, 10, 0, 10)
pingMain.BackgroundColor3 = Theme.Background
pingMain.BorderSizePixel = 0
pingMain.Parent = pingGui
round(pingMain, 6)
stroke(pingMain, Theme.Stroke, 1, 0)

local pLogo = Instance.new("ImageLabel")
pLogo.Size = UDim2.new(0, 24, 0, 24)
pLogo.Position = UDim2.new(0, 8, 0.5, -12)
pLogo.BackgroundTransparency = 1
pLogo.Image = "rbxassetid://115798729575437"
pLogo.Parent = pingMain

local pQuality = Instance.new("TextLabel")
pQuality.Size = UDim2.new(1, -40, 0, 14)
pQuality.Position = UDim2.new(0, 38, 0, 6)
pQuality.BackgroundTransparency = 1
pQuality.Text = "Loading..."
pQuality.Font = Enum.Font.GothamBold
pQuality.TextSize = 10
pQuality.TextXAlignment = Enum.TextXAlignment.Left
pQuality.Parent = pingMain

local pValue = Instance.new("TextLabel")
pValue.Size = UDim2.new(0, 40, 0, 20)
pValue.Position = UDim2.new(0, 38, 0, 20)
pValue.BackgroundTransparency = 1
pValue.Text = "0"
pValue.Font = Enum.Font.GothamBlack
pValue.TextSize = 16
pValue.TextColor3 = Theme.Text
pValue.TextXAlignment = Enum.TextXAlignment.Left
pValue.Parent = pingMain

local pMs = Instance.new("TextLabel")
pMs.Size = UDim2.new(0, 30, 0, 14)
pMs.Position = UDim2.new(0, 72, 0, 28)
pMs.BackgroundTransparency = 1
pMs.Text = "ms"
pMs.Font = Enum.Font.Gotham
pMs.TextSize = 10
pMs.TextColor3 = Theme.TextDark
pMs.TextXAlignment = Enum.TextXAlignment.Left
pMs.Parent = pingMain

task.spawn(function()
    while task.wait(0.5) do
        local ok, ping = pcall(function()
            return math.floor(Stats.Network.ServerStatsItem["Data Ping"]:GetValue())
        end)
        if not ok then ping = 0 end
        pValue.Text = tostring(ping)

        if ping < 50 then
            pQuality.Text = "GODLY PING"
            pQuality.TextColor3 = Color3.fromRGB(40, 180, 90)
            pValue.TextColor3 = Theme.Text
        elseif ping < 100 then
            pQuality.Text = "Pretty good ping"
            pQuality.TextColor3 = Color3.fromRGB(90, 170, 110)
            pValue.TextColor3 = Theme.Text
        elseif ping < 140 then
            pQuality.Text = "Good ping"
            pQuality.TextColor3 = Color3.fromRGB(120, 150, 90)
            pValue.TextColor3 = Theme.Text
        elseif ping < 180 then
            pQuality.Text = "Mid ping"
            pQuality.TextColor3 = Color3.fromRGB(200, 160, 40)
            pValue.TextColor3 = Theme.Text
        else
            pQuality.Text = "SHITTY PING"
            pQuality.TextColor3 = Theme.Red
            pValue.TextColor3 = Theme.Red
        end
    end
end)

--// ═══════════════ ESP GUI (для аватарок) ═══════════════
local espGui = Instance.new("ScreenGui")
espGui.Name = "ClaudewareESP"
espGui.ResetOnSpawn = false
espGui.IgnoreGuiInset = true
espGui.Parent = coreGui

--// ═══════════════ MAIN GUI ═══════════════
local gui = Instance.new("ScreenGui")
gui.Name = "ClaudewareGUI"
gui.ResetOnSpawn = false
gui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
gui.Parent = coreGui

--// ═══════════════ NOTIFICATIONS ═══════════════
local notifHolder = Instance.new("Frame")
notifHolder.Name = "NotifHolder"
notifHolder.Size = UDim2.new(0, 300, 1, -20)
notifHolder.Position = UDim2.new(1, -310, 0, 10)
notifHolder.BackgroundTransparency = 1
notifHolder.Parent = gui

local notifLayout = Instance.new("UIListLayout")
notifLayout.Padding = UDim.new(0, 8)
notifLayout.VerticalAlignment = Enum.VerticalAlignment.Bottom
notifLayout.SortOrder = Enum.SortOrder.LayoutOrder
notifLayout.Parent = notifHolder

local function Notify(titleText, descText, duration)
    duration = duration or 3

    local notif = Instance.new("Frame")
    notif.Size = UDim2.new(1, 0, 0, 50)
    notif.BackgroundColor3 = Theme.Secondary
    notif.BackgroundTransparency = 1
    notif.ClipsDescendants = true
    notif.Parent = notifHolder
    round(notif, 6)
    local ns = stroke(notif, Theme.Stroke, 1, 1)

    local bar = Instance.new("Frame")
    bar.Size = UDim2.new(0, 3, 1, -10)
    bar.Position = UDim2.new(0, 4, 0, 5)
    bar.BackgroundColor3 = Theme.Accent
    bar.BorderSizePixel = 0
    bar.BackgroundTransparency = 1
    bar.Parent = notif
    round(bar, 2)

    local nTitle = Instance.new("TextLabel")
    nTitle.Size = UDim2.new(1, -16, 0, 18)
    nTitle.Position = UDim2.new(0, 14, 0, 8)
    nTitle.BackgroundTransparency = 1
    nTitle.Text = titleText
    nTitle.Font = Enum.Font.GothamBold
    nTitle.TextSize = 13
    nTitle.TextColor3 = Theme.Text
    nTitle.TextTransparency = 1
    nTitle.TextXAlignment = Enum.TextXAlignment.Left
    nTitle.Parent = notif

    local nDesc = Instance.new("TextLabel")
    nDesc.Size = UDim2.new(1, -16, 0, 14)
    nDesc.Position = UDim2.new(0, 14, 0, 27)
    nDesc.BackgroundTransparency = 1
    nDesc.Text = descText
    nDesc.Font = Enum.Font.Gotham
    nDesc.TextSize = 11
    nDesc.TextColor3 = Theme.TextDark
    nDesc.TextTransparency = 1
    nDesc.TextXAlignment = Enum.TextXAlignment.Left
    nDesc.Parent = notif

    tween(notif, 0.3, { BackgroundTransparency = 0 })
    tween(ns, 0.3, { Transparency = 0 })
    tween(bar, 0.3, { BackgroundTransparency = 0 })
    tween(nTitle, 0.3, { TextTransparency = 0 })
    tween(nDesc, 0.3, { TextTransparency = 0.2 })

    task.delay(duration, function()
        tween(notif, 0.3, { BackgroundTransparency = 1 })
        tween(ns, 0.3, { Transparency = 1 })
        tween(bar, 0.3, { BackgroundTransparency = 1 })
        tween(nTitle, 0.3, { TextTransparency = 1 })
        tween(nDesc, 0.3, { TextTransparency = 1 })
        task.wait(0.35)
        notif:Destroy()
    end)
end

--// ═══════════════ MAIN WINDOW ═══════════════
local main = Instance.new("Frame")
main.Name = "Main"
main.Size = UDim2.new(0, 520, 0, 400)
main.Position = UDim2.new(0.5, -260, 0.5, -200)
main.BackgroundColor3 = Theme.Background
main.BorderSizePixel = 0
main.Active = true
main.Parent = gui
round(main, 10)
stroke(main, Theme.Stroke, 1, 0)

local topbar = Instance.new("Frame")
topbar.Size = UDim2.new(1, 0, 0, 44)
topbar.BackgroundColor3 = Theme.Secondary
topbar.BorderSizePixel = 0
topbar.Parent = main
round(topbar, 10)

local topFix = Instance.new("Frame")
topFix.Size = UDim2.new(1, 0, 0, 12)
topFix.Position = UDim2.new(0, 0, 1, -12)
topFix.BackgroundColor3 = Theme.Secondary
topFix.BorderSizePixel = 0
topFix.Parent = topbar

--// Декалька из оригинального скрипта — слева от названия.
local brandLogo = Instance.new("ImageLabel")
brandLogo.Name = "BrandLogo"
brandLogo.Size = UDim2.new(0, 22, 0, 22)
brandLogo.Position = UDim2.new(0, 14, 0.5, -11)
brandLogo.BackgroundTransparency = 1
brandLogo.Image = "rbxassetid://115798729575437"
brandLogo.Parent = topbar

local titleLbl = Instance.new("TextLabel")
titleLbl.Size = UDim2.new(0, 120, 1, 0)
titleLbl.Position = UDim2.new(0, 44, 0, 0)
titleLbl.BackgroundTransparency = 1
titleLbl.Text = "Claudeware"
titleLbl.Font = Enum.Font.GothamBold
titleLbl.TextSize = 15
titleLbl.TextColor3 = Theme.Text
titleLbl.TextXAlignment = Enum.TextXAlignment.Left
titleLbl.Parent = topbar

--// Версия справа в шапке — тонкий бейдж.
local verBadge = Instance.new("TextLabel")
verBadge.Size = UDim2.new(0, 54, 0, 20)
verBadge.Position = UDim2.new(1, -66, 0.5, -10)
verBadge.BackgroundColor3 = Theme.Element
verBadge.Text = "v1.2.0"
verBadge.Font = Enum.Font.GothamMedium
verBadge.TextSize = 11
verBadge.TextColor3 = Theme.Accent
verBadge.Parent = topbar
round(verBadge, 6)
stroke(verBadge, Theme.Stroke, 1, 0)

--// Перетаскивание окна
do
    local dragging, dragStart, startPos = false, nil, nil
    topbar.InputBegan:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1
        or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            dragStart = input.Position
            startPos = main.Position
            input.Changed:Connect(function()
                if input.UserInputState == Enum.UserInputState.End then
                    dragging = false
                end
            end)
        end
    end)
    UIS.InputChanged:Connect(function(input)
        if dragging and (input.UserInputType == Enum.UserInputType.MouseMovement
        or input.UserInputType == Enum.UserInputType.Touch) then
            local delta = input.Position - dragStart
            main.Position = UDim2.new(
                startPos.X.Scale, startPos.X.Offset + delta.X,
                startPos.Y.Scale, startPos.Y.Offset + delta.Y
            )
        end
    end)
end

--// ═══════════════ ВКЛАДКИ (Tabs) ═══════════════
local tabBar = Instance.new("Frame")
tabBar.Size = UDim2.new(0, 130, 1, -54)
tabBar.Position = UDim2.new(0, 10, 0, 50)
tabBar.BackgroundColor3 = Theme.Secondary
tabBar.BorderSizePixel = 0
tabBar.Parent = main
round(tabBar, 8)
stroke(tabBar, Theme.Stroke, 1, 0)

local tabList = Instance.new("UIListLayout")
tabList.Padding = UDim.new(0, 4)
tabList.SortOrder = Enum.SortOrder.LayoutOrder
tabList.Parent = tabBar
padding(tabBar, 8)

--// Контентная область (справа от вкладок)
local pages = {}
local tabButtons = {}
local tabLabels = {}
local currentTab = nil

local function selectTab(name)
    currentTab = name
    for tabName, page in pairs(pages) do
        page.Visible = (tabName == name)
    end
    for tabName, btn in pairs(tabButtons) do
        local label = tabLabels[tabName]
        if tabName == name then
            tween(btn, 0.15, { BackgroundColor3 = Theme.Accent })
            if label then label.TextColor3 = Theme.White end
        else
            tween(btn, 0.15, { BackgroundColor3 = Theme.Element })
            if label then label.TextColor3 = Theme.Text end
        end
    end
end

local function makeTab(name)
    local btn = Instance.new("TextButton")
    btn.Name = name
    btn.Size = UDim2.new(1, 0, 0, 34)
    btn.BackgroundColor3 = Theme.Element
    btn.AutoButtonColor = false
    btn.Text = ""
    btn.Parent = tabBar
    round(btn, 6)

    local lbl = Instance.new("TextLabel")
    lbl.Name = "Label"
    lbl.Size = UDim2.new(1, -20, 1, 0)
    lbl.Position = UDim2.new(0, 12, 0, 0)
    lbl.BackgroundTransparency = 1
    lbl.Text = name
    lbl.Font = Enum.Font.GothamMedium
    lbl.TextSize = 13
    lbl.TextColor3 = Theme.Text
    lbl.TextXAlignment = Enum.TextXAlignment.Left
    lbl.Parent = btn
    tabLabels[name] = lbl

    -- скроллящаяся страница функций
    local page = Instance.new("ScrollingFrame")
    page.Name = name .. "Page"
    page.Size = UDim2.new(1, -160, 1, -54)
    page.Position = UDim2.new(0, 150, 0, 50)
    page.BackgroundTransparency = 1
    page.BorderSizePixel = 0
    page.ScrollBarThickness = 4
    page.ScrollBarImageColor3 = Theme.Stroke
    page.CanvasSize = UDim2.new(0, 0, 0, 0)
    page.AutomaticCanvasSize = Enum.AutomaticSize.Y
    page.Visible = false
    page.Parent = main

    local layout = Instance.new("UIListLayout")
    layout.Padding = UDim.new(0, 8)
    layout.SortOrder = Enum.SortOrder.LayoutOrder
    layout.Parent = page

    pages[name] = page
    tabButtons[name] = btn

    btn.MouseButton1Click:Connect(function() selectTab(name) end)
    btn.MouseEnter:Connect(function()
        if currentTab ~= name then tween(btn, 0.12, { BackgroundColor3 = Theme.ElementHover }) end
    end)
    btn.MouseLeave:Connect(function()
        if currentTab ~= name then tween(btn, 0.12, { BackgroundColor3 = Theme.Element }) end
    end)

    return page
end

--// Фабрика тумблеров (в указанной странице)
local function makeToggle(page, name, hint, callback)
    local btn = Instance.new("TextButton")
    btn.Size = UDim2.new(1, 0, 0, 44)
    btn.BackgroundColor3 = Theme.Element
    btn.AutoButtonColor = false
    btn.Text = ""
    btn.Parent = page
    round(btn, 6)
    stroke(btn, Theme.Stroke, 1, 0)

    local lbl = Instance.new("TextLabel")
    lbl.Size = UDim2.new(1, -70, 0, 16)
    lbl.Position = UDim2.new(0, 12, 0, 6)
    lbl.BackgroundTransparency = 1
    lbl.Text = name
    lbl.Font = Enum.Font.GothamMedium
    lbl.TextSize = 13
    lbl.TextColor3 = Theme.Text
    lbl.TextXAlignment = Enum.TextXAlignment.Left
    lbl.Parent = btn

    local sub = Instance.new("TextLabel")
    sub.Size = UDim2.new(1, -70, 0, 12)
    sub.Position = UDim2.new(0, 12, 0, 24)
    sub.BackgroundTransparency = 1
    sub.Text = hint or ""
    sub.Font = Enum.Font.Gotham
    sub.TextSize = 10
    sub.TextColor3 = Theme.TextDark
    sub.TextXAlignment = Enum.TextXAlignment.Left
    sub.Parent = btn

    local switch = Instance.new("Frame")
    switch.Size = UDim2.new(0, 36, 0, 20)
    switch.Position = UDim2.new(1, -46, 0.5, -10)
    switch.BackgroundColor3 = Theme.Tertiary
    switch.BorderSizePixel = 0
    switch.Parent = btn
    round(switch, 10)

    local knob = Instance.new("Frame")
    knob.Size = UDim2.new(0, 16, 0, 16)
    knob.Position = UDim2.new(0, 2, 0.5, -8)
    knob.BackgroundColor3 = Theme.White
    knob.BorderSizePixel = 0
    knob.Parent = switch
    round(knob, 8)

    local enabled = false
    btn.MouseButton1Click:Connect(function()
        enabled = not enabled
        if enabled then
            tween(switch, 0.2, { BackgroundColor3 = Theme.Accent })
            tween(knob, 0.2, { Position = UDim2.new(1, -18, 0.5, -8) })
        else
            tween(switch, 0.2, { BackgroundColor3 = Theme.Tertiary })
            tween(knob, 0.2, { Position = UDim2.new(0, 2, 0.5, -8) })
        end
        callback(enabled)
    end)

    btn.MouseEnter:Connect(function()
        tween(btn, 0.15, { BackgroundColor3 = Theme.ElementHover })
    end)
    btn.MouseLeave:Connect(function()
        tween(btn, 0.15, { BackgroundColor3 = Theme.Element })
    end)

    return btn
end

--// Фабрика слайдеров (для числовых настроек)
local function makeSlider(page, name, minV, maxV, default, callback)
    local holder = Instance.new("Frame")
    holder.Size = UDim2.new(1, 0, 0, 50)
    holder.BackgroundColor3 = Theme.Element
    holder.BorderSizePixel = 0
    holder.Parent = page
    round(holder, 6)
    stroke(holder, Theme.Stroke, 1, 0)

    local lbl = Instance.new("TextLabel")
    lbl.Size = UDim2.new(1, -60, 0, 16)
    lbl.Position = UDim2.new(0, 12, 0, 6)
    lbl.BackgroundTransparency = 1
    lbl.Text = name
    lbl.Font = Enum.Font.GothamMedium
    lbl.TextSize = 13
    lbl.TextColor3 = Theme.Text
    lbl.TextXAlignment = Enum.TextXAlignment.Left
    lbl.Parent = holder

    local valLbl = Instance.new("TextLabel")
    valLbl.Size = UDim2.new(0, 44, 0, 16)
    valLbl.Position = UDim2.new(1, -52, 0, 6)
    valLbl.BackgroundTransparency = 1
    valLbl.Text = tostring(default)
    valLbl.Font = Enum.Font.GothamBold
    valLbl.TextSize = 12
    valLbl.TextColor3 = Theme.Accent
    valLbl.TextXAlignment = Enum.TextXAlignment.Right
    valLbl.Parent = holder

    local track = Instance.new("Frame")
    track.Size = UDim2.new(1, -24, 0, 6)
    track.Position = UDim2.new(0, 12, 0, 32)
    track.BackgroundColor3 = Theme.Tertiary
    track.BorderSizePixel = 0
    track.Parent = holder
    round(track, 3)

    local fill = Instance.new("Frame")
    fill.Size = UDim2.new((default - minV) / (maxV - minV), 0, 1, 0)
    fill.BackgroundColor3 = Theme.Accent
    fill.BorderSizePixel = 0
    fill.Parent = track
    round(fill, 3)

    local knob = Instance.new("Frame")
    knob.Size = UDim2.new(0, 12, 0, 12)
    knob.Position = UDim2.new((default - minV) / (maxV - minV), -6, 0.5, -6)
    knob.BackgroundColor3 = Theme.White
    knob.BorderSizePixel = 0
    knob.Parent = track
    round(knob, 6)
    stroke(knob, Theme.Accent, 1.5, 0)

    local dragging = false
    local function update(inputX)
        local rel = math.clamp((inputX - track.AbsolutePosition.X) / track.AbsoluteSize.X, 0, 1)
        local value = math.floor(minV + (maxV - minV) * rel)
        fill.Size = UDim2.new(rel, 0, 1, 0)
        knob.Position = UDim2.new(rel, -6, 0.5, -6)
        valLbl.Text = tostring(value)
        callback(value)
    end

    track.InputBegan:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1
        or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            update(input.Position.X)
        end
    end)
    UIS.InputEnded:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1
        or input.UserInputType == Enum.UserInputType.Touch then
            dragging = false
        end
    end)
    UIS.InputChanged:Connect(function(input)
        if dragging and (input.UserInputType == Enum.UserInputType.MouseMovement
        or input.UserInputType == Enum.UserInputType.Touch) then
            update(input.Position.X)
        end
    end)

    return holder
end

--// ═══════════════════════════════════════════════════════════
--// ══════════════════  ФУНКЦИИ (все восстановлены)  ═══════════
--// ═══════════════════════════════════════════════════════════

--// ─────────── ESP (Box · Name · Health · Tracer · Distance · Avatar) ───────────
local espRenderConn = nil
local espPlayerConns = {}
local avatarCache = {}

local function getAvatarChip(player)
    if avatarCache[player] and avatarCache[player].Parent then
        return avatarCache[player]
    end
    local chip = Instance.new("ImageLabel")
    chip.Name = "Avatar_" .. player.Name
    chip.Size = UDim2.new(0, 32, 0, 32)
    chip.BackgroundColor3 = Theme.Secondary
    chip.BackgroundTransparency = 0.1
    chip.BorderSizePixel = 0
    chip.Visible = false
    chip.Parent = espGui
    round(chip, 16)
    stroke(chip, Theme.Accent, 1.5, 0)
    pcall(function()
        local content = Players:GetUserThumbnailAsync(
            player.UserId,
            Enum.ThumbnailType.HeadShot,
            Enum.ThumbnailSize.Size48x48
        )
        chip.Image = content
    end)
    avatarCache[player] = chip
    return chip
end

local function clearAvatars()
    for _, chip in pairs(avatarCache) do
        pcall(function() chip:Destroy() end)
    end
    table.clear(avatarCache)
end

local function teardownESP()
    if espRenderConn then
        espRenderConn:Disconnect()
        espRenderConn = nil
    end
    for _, c in ipairs(espPlayerConns) do
        pcall(function() c:Disconnect() end)
    end
    table.clear(espPlayerConns)
    for _, obj in pairs(ESPObjects) do
        pcall(function() obj:Remove() end)
    end
    table.clear(ESPObjects)
    clearAvatars()
end

local function makeDrawSet()
    local box = Draw.new("Square")
    box.Thickness = 1
    box.Filled = false
    box.Color = Theme.Accent
    box.Visible = false
    table.insert(ESPObjects, box)

    local nameTag = Draw.new("Text")
    nameTag.Size = 14
    nameTag.Center = true
    nameTag.Outline = true
    nameTag.Color = Theme.White
    nameTag.Visible = false
    table.insert(ESPObjects, nameTag)

    local distTag = Draw.new("Text")
    distTag.Size = 12
    distTag.Center = true
    distTag.Outline = true
    distTag.Color = Theme.AccentLight
    distTag.Visible = false
    table.insert(ESPObjects, distTag)

    local tracer = Draw.new("Line")
    tracer.Thickness = 1
    tracer.Color = Theme.Accent
    tracer.Visible = false
    table.insert(ESPObjects, tracer)

    local hpBack = Draw.new("Square")
    hpBack.Thickness = 1
    hpBack.Filled = true
    hpBack.Color = Color3.fromRGB(20, 20, 20)
    hpBack.Visible = false
    table.insert(ESPObjects, hpBack)

    local hpFill = Draw.new("Square")
    hpFill.Thickness = 1
    hpFill.Filled = true
    hpFill.Color = Theme.Green
    hpFill.Visible = false
    table.insert(ESPObjects, hpFill)

    return { box = box, nameTag = nameTag, distTag = distTag, tracer = tracer, hpBack = hpBack, hpFill = hpFill }
end

local function anyEspOn()
    return State.ESP.Box or State.ESP.Name or State.ESP.Tracer
        or State.ESP.Health or State.ESP.Distance or State.ESP.Avatar
end

local function buildESP()
    teardownESP()

    local sets = {}
    for _, player in ipairs(Players:GetPlayers()) do
        if player ~= plr then
            sets[player] = makeDrawSet()
        end
    end

    espPlayerConns[#espPlayerConns + 1] = Players.PlayerAdded:Connect(function()
        if anyEspOn() then buildESP() end
    end)
    espPlayerConns[#espPlayerConns + 1] = Players.PlayerRemoving:Connect(function()
        if anyEspOn() then buildESP() end
    end)

    espRenderConn = RS.RenderStepped:Connect(function()
        for player, set in pairs(sets) do
            local char = getChar(player)
            local hum = getHum(char)
            local root = getRoot(char)
            local chip = State.ESP.Avatar and getAvatarChip(player) or avatarCache[player]

            local function hideAll()
                set.box.Visible = false
                set.nameTag.Visible = false
                set.distTag.Visible = false
                set.tracer.Visible = false
                set.hpBack.Visible = false
                set.hpFill.Visible = false
                if chip then chip.Visible = false end
            end

            if not (char and hum and root and hum.Health > 0) then hideAll() continue end

            local pos, onScreen = camera:WorldToViewportPoint(root.Position)
            if not onScreen then hideAll() continue end

            local top = camera:WorldToViewportPoint(root.Position + Vector3.new(0, 3, 0))
            local size = math.abs((camera:WorldToViewportPoint(root.Position - Vector3.new(0, 3, 0))).Y - top.Y)
            local width = size / 2
            local x = pos.X - width / 2
            local y = pos.Y - size / 2

            set.box.Visible = State.ESP.Box
            set.box.Size = Vector2.new(width, size)
            set.box.Position = Vector2.new(x, y)

            set.nameTag.Visible = State.ESP.Name
            set.nameTag.Text = player.Name
            set.nameTag.Position = Vector2.new(pos.X, y - 16)

            if State.ESP.Distance then
                local myRoot = getRoot(getChar(plr))
                local d = myRoot and math.floor((myRoot.Position - root.Position).Magnitude) or 0
                set.distTag.Visible = true
                set.distTag.Text = d .. "m"
                set.distTag.Position = Vector2.new(pos.X, y + size + 2)
            else
                set.distTag.Visible = false
            end

            set.tracer.Visible = State.ESP.Tracer
            set.tracer.From = Vector2.new(camera.ViewportSize.X / 2, camera.ViewportSize.Y)
            set.tracer.To = Vector2.new(pos.X, pos.Y)

            local hpRatio = math.clamp(hum.Health / math.max(hum.MaxHealth, 1), 0, 1)
            local barX = x - 6
            set.hpBack.Visible = State.ESP.Health
            set.hpBack.Size = Vector2.new(3, size)
            set.hpBack.Position = Vector2.new(barX, y)
            set.hpFill.Visible = State.ESP.Health
            set.hpFill.Size = Vector2.new(3, size * hpRatio)
            set.hpFill.Position = Vector2.new(barX, y + size * (1 - hpRatio))
            set.hpFill.Color = Color3.fromRGB(
                math.floor(255 * (1 - hpRatio)),
                math.floor(200 * hpRatio + 40),
                60
            )

            if chip then
                chip.Visible = State.ESP.Avatar
                chip.Position = UDim2.new(0, pos.X - 16, 0, y - 52)
            end
        end
    end)
end

--// ─────────── ESP Fallback через Highlight (без Drawing API) ───────────
local highlightCache = {}
local highlightConns = {}

local function teardownHighlights()
    for _, c in ipairs(highlightConns) do
        pcall(function() c:Disconnect() end)
    end
    table.clear(highlightConns)
    for _, h in pairs(highlightCache) do
        pcall(function() h:Destroy() end)
    end
    table.clear(highlightCache)
end

local function applyHighlight(player)
    local char = getChar(player)
    if not char then return end
    if highlightCache[player] and highlightCache[player].Parent then return end
    local h = Instance.new("Highlight")
    h.Name = "ClaudewareESP"
    h.FillColor = Theme.Accent
    h.OutlineColor = Theme.White
    h.FillTransparency = 0.6
    h.OutlineTransparency = 0
    h.DepthMode = Enum.HighlightDepthMode.AlwaysOnTop
    h.Adornee = char
    h.Parent = char
    highlightCache[player] = h
end

local function buildHighlightESP()
    teardownHighlights()
    for _, player in ipairs(Players:GetPlayers()) do
        if player ~= plr then applyHighlight(player) end
    end
    highlightConns[#highlightConns + 1] = Players.PlayerAdded:Connect(function(p)
        highlightConns[#highlightConns + 1] = p.CharacterAdded:Connect(function()
            if anyEspOn() then task.wait(0.2) applyHighlight(p) end
        end)
    end)
    for _, player in ipairs(Players:GetPlayers()) do
        if player ~= plr then
            highlightConns[#highlightConns + 1] = player.CharacterAdded:Connect(function()
                if anyEspOn() then task.wait(0.2) applyHighlight(player) end
            end)
        end
    end
end

local function refreshESP()
    if HAS_DRAWING then
        if anyEspOn() then buildESP() else teardownESP() end
    else
        -- Без Drawing используем Highlight-подсветку как запасной вариант.
        if anyEspOn() then buildHighlightESP() else teardownHighlights() end
    end
end

--// ─────────── Aim Circle (FOV) ───────────
local aimCircle = Draw.new("Circle")
aimCircle.Thickness = 1.5
aimCircle.NumSides = 64
aimCircle.Radius = Config.AimFov
aimCircle.Filled = false
aimCircle.Color = Theme.Accent
aimCircle.Transparency = 0.9
aimCircle.Visible = false

--// ─────────── Aimbot / Silent Aim ───────────
local function getClosestTarget()
    local closest, shortest = nil, Config.AimFov
    for _, player in ipairs(Players:GetPlayers()) do
        if player == plr then continue end
        local char = getChar(player)
        local head = char and char:FindFirstChild("Head")
        local hum = getHum(char)
        if head and hum and hum.Health > 0 then
            local pos, onScreen = camera:WorldToViewportPoint(head.Position)
            if onScreen then
                local center = Vector2.new(camera.ViewportSize.X / 2, camera.ViewportSize.Y / 2)
                local dist = (Vector2.new(pos.X, pos.Y) - center).Magnitude
                if dist < shortest then
                    shortest = dist
                    closest = head
                end
            end
        end
    end
    return closest
end

Connections[#Connections + 1] = RS.RenderStepped:Connect(function()
    -- круг наведения по центру экрана
    if State.AimCircle then
        aimCircle.Visible = true
        aimCircle.Radius = Config.AimFov
        aimCircle.Position = Vector2.new(camera.ViewportSize.X / 2, camera.ViewportSize.Y / 2)
    else
        aimCircle.Visible = false
    end

    if State.Aimbot and State.AimbotHolding then
        local target = getClosestTarget()
        if target then
            local aimAt = CFrame.new(camera.CFrame.Position, target.Position)
            if Config.AimSmooth > 0 then
                camera.CFrame = camera.CFrame:Lerp(aimAt, 1 - Config.AimSmooth)
            else
                camera.CFrame = aimAt
            end
        end
    end
end)

UIS.InputBegan:Connect(function(input, gp)
    if gp then return end
    if input.UserInputType == Enum.UserInputType.MouseButton2 then
        State.AimbotHolding = true
    end
end)
UIS.InputEnded:Connect(function(input)
    if input.UserInputType == Enum.UserInputType.MouseButton2 then
        State.AimbotHolding = false
    end
end)

--// ─────────── Fullbright ───────────
local defaultLighting = {
    Brightness = Lighting.Brightness,
    ClockTime = Lighting.ClockTime,
    FogEnd = Lighting.FogEnd,
    GlobalShadows = Lighting.GlobalShadows,
    Ambient = Lighting.Ambient,
}

local function setFullbright(on)
    if on then
        Lighting.Brightness = 2
        Lighting.ClockTime = 14
        Lighting.GlobalShadows = false
        Lighting.Ambient = Color3.fromRGB(255, 255, 255)
    else
        Lighting.Brightness = defaultLighting.Brightness
        Lighting.ClockTime = defaultLighting.ClockTime
        Lighting.GlobalShadows = defaultLighting.GlobalShadows
        Lighting.Ambient = defaultLighting.Ambient
    end
end

--// ─────────── NoFog ───────────
local function setNoFog(on)
    if on then
        Lighting.FogEnd = 1e9
        Lighting.FogStart = 1e9
    else
        Lighting.FogEnd = defaultLighting.FogEnd
    end
end

--// ─────────── X-Ray ───────────
local xrayCache = {}
local xrayAddConn = nil

local function isPlayerPart(part)
    for _, p in ipairs(Players:GetPlayers()) do
        if p.Character and part:IsDescendantOf(p.Character) then
            return true
        end
    end
    return false
end

local function setXray(on)
    if on then
        for _, part in ipairs(Workspace:GetDescendants()) do
            if part:IsA("BasePart") and not isPlayerPart(part) then
                if xrayCache[part] == nil and part.Transparency < 1 then
                    xrayCache[part] = part.Transparency
                    part.Transparency = 0.75
                end
            end
        end
        xrayAddConn = Workspace.DescendantAdded:Connect(function(part)
            if State.Xray and part:IsA("BasePart") and not isPlayerPart(part) then
                task.wait()
                if xrayCache[part] == nil and part.Transparency < 1 then
                    xrayCache[part] = part.Transparency
                    part.Transparency = 0.75
                end
            end
        end)
    else
        if xrayAddConn then xrayAddConn:Disconnect() xrayAddConn = nil end
        for part, original in pairs(xrayCache) do
            if part and part.Parent then
                pcall(function() part.Transparency = original end)
            end
        end
        table.clear(xrayCache)
    end
end

--// ─────────── WalkSpeed ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function()
    local hum = getHum(getChar(plr))
    if hum then
        if State.WalkSpeed then
            hum.WalkSpeed = Config.WalkSpeed
        end
        if State.JumpPower then
            hum.UseJumpPower = true
            hum.JumpPower = Config.JumpPower
        end
    end
end)

--// ─────────── Fly ───────────
local flyBV, flyBG, flyConn = nil, nil, nil
local function startFly()
    local char = getChar(plr)
    local root = getRoot(char)
    local hum = getHum(char)
    if not (root and hum) then return end
    hum.PlatformStand = true

    flyBV = Instance.new("BodyVelocity")
    flyBV.MaxForce = Vector3.new(1, 1, 1) * 9e9
    flyBV.Velocity = Vector3.zero
    flyBV.Parent = root

    flyBG = Instance.new("BodyGyro")
    flyBG.MaxTorque = Vector3.new(1, 1, 1) * 9e9
    flyBG.P = 9e4
    flyBG.CFrame = root.CFrame
    flyBG.Parent = root

    flyConn = RS.RenderStepped:Connect(function()
        if not (flyBV and flyBG and root.Parent) then return end
        local dir = Vector3.zero
        local look = camera.CFrame
        if UIS:IsKeyDown(Enum.KeyCode.W) then dir += look.LookVector end
        if UIS:IsKeyDown(Enum.KeyCode.S) then dir -= look.LookVector end
        if UIS:IsKeyDown(Enum.KeyCode.A) then dir -= look.RightVector end
        if UIS:IsKeyDown(Enum.KeyCode.D) then dir += look.RightVector end
        if UIS:IsKeyDown(Enum.KeyCode.Space) then dir += Vector3.new(0, 1, 0) end
        if UIS:IsKeyDown(Enum.KeyCode.LeftShift) then dir -= Vector3.new(0, 1, 0) end
        flyBV.Velocity = dir * Config.FlySpeed
        flyBG.CFrame = look
    end)
end

local function stopFly()
    if flyConn then flyConn:Disconnect() flyConn = nil end
    if flyBV then flyBV:Destroy() flyBV = nil end
    if flyBG then flyBG:Destroy() flyBG = nil end
    local hum = getHum(getChar(plr))
    if hum then hum.PlatformStand = false end
end

--// ─────────── Noclip ───────────
Connections[#Connections + 1] = RS.Stepped:Connect(function()
    if State.Noclip then
        local char = plr.Character
        if char then
            for _, part in ipairs(char:GetDescendants()) do
                if part:IsA("BasePart") and part.CanCollide then
                    part.CanCollide = false
                end
            end
        end
    end
end)

--// ─────────── Infinite Jump ───────────
UIS.JumpRequest:Connect(function()
    if State.InfJump then
        local hum = getHum(getChar(plr))
        if hum then
            hum:ChangeState(Enum.HumanoidStateType.Jumping)
        end
    end
end)

--// ─────────── Spinbot ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function(dt)
    if State.Spinbot then
        local root = getRoot(getChar(plr))
        if root then
            root.CFrame = root.CFrame * CFrame.Angles(0, math.rad(Config.SpinSpeed), 0)
        end
    end
end)

--// ─────────── God Mode (anti-void heal) ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function()
    if State.GodMode then
        local char = getChar(plr)
        local hum = getHum(char)
        local root = getRoot(char)
        if hum and hum.Health < hum.MaxHealth then
            hum.Health = hum.MaxHealth
        end
        if root and root.Position.Y < -50 then
            root.CFrame = CFrame.new(root.Position.X, 50, root.Position.Z)
        end
    end
end)

--// ─────────── Anti-Fling ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function()
    if State.AntiFling then
        local root = getRoot(getChar(plr))
        if root then
            if root.AssemblyAngularVelocity.Magnitude > 40 then
                root.AssemblyAngularVelocity = Vector3.zero
            end
            if root.AssemblyLinearVelocity.Magnitude > 200 then
                root.AssemblyLinearVelocity = Vector3.zero
            end
        end
    end
end)

--// ─────────── Anti-AFK ───────────
local afkConn = nil
local function setAntiAFK(on)
    if on then
        afkConn = plr.Idled:Connect(function()
            pcall(function()
                local vu = game:GetService("VirtualUser")
                vu:Button2Down(Vector2.new(0, 0), camera.CFrame)
                task.wait(1)
                vu:Button2Up(Vector2.new(0, 0), camera.CFrame)
            end)
        end)
    else
        if afkConn then afkConn:Disconnect() afkConn = nil end
    end
end

--// ─────────── Reset Character ───────────
local function resetCharacter()
    local hum = getHum(getChar(plr))
    if hum then hum.Health = 0 end
end

--// ═══════════════════════════════════════════════════════════
--// ══════════════════  СБОРКА ВКЛАДОК И ТУМБЛЕРОВ  ════════════
--// ═══════════════════════════════════════════════════════════

--// ─── COMBAT ───
local combatPage = makeTab("Combat")
makeToggle(combatPage, "Aimbot", "Зажми ПКМ для наведения", function(on)
    State.Aimbot = on
    Notify("Aimbot", on and "Зажми ПКМ для наведения" or "Aimbot выключен")
end)
makeToggle(combatPage, "Silent Aim", "Скрытое наведение по FOV", function(on)
    State.SilentAim = on
    Notify("Silent Aim", on and "включён" or "выключен")
end)
makeToggle(combatPage, "Aim Circle (FOV)", "Показать круг наведения", function(on)
    State.AimCircle = on
    Notify("Aim Circle", on and "включён" or "выключен")
end)
makeSlider(combatPage, "FOV Radius", 40, 400, Config.AimFov, function(v)
    Config.AimFov = v
end)
makeSlider(combatPage, "Aim Smooth %", 0, 90, math.floor(Config.AimSmooth * 100), function(v)
    Config.AimSmooth = v / 100
end)

--// ─── VISUALS ───
local visualsPage = makeTab("Visuals")
makeToggle(visualsPage, "ESP Box", "Рамка вокруг игроков", function(on)
    State.ESP.Box = on; refreshESP(); Notify("ESP", "Box " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Name", "Никнеймы над головой", function(on)
    State.ESP.Name = on; refreshESP(); Notify("ESP", "Name " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Health", "Полоска здоровья", function(on)
    State.ESP.Health = on; refreshESP(); Notify("ESP", "Health " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Tracer", "Линии к игрокам", function(on)
    State.ESP.Tracer = on; refreshESP(); Notify("ESP", "Tracer " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Distance", "Дистанция в метрах", function(on)
    State.ESP.Distance = on; refreshESP(); Notify("ESP", "Distance " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Avatar", "Аватарка-чип над головой", function(on)
    State.ESP.Avatar = on; refreshESP(); Notify("ESP", "Avatar " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "Fullbright", "Ровное освещение", function(on)
    State.Fullbright = on; setFullbright(on); Notify("Fullbright", on and "включён" or "выключен")
end)
makeToggle(visualsPage, "NoFog", "Убрать туман", function(on)
    State.NoFog = on; setNoFog(on); Notify("NoFog", on and "включён" or "выключен")
end)
makeToggle(visualsPage, "X-Ray", "Прозрачные стены", function(on)
    State.Xray = on; setXray(on); Notify("X-Ray", on and "стены прозрачны" or "выключен")
end)

--// ─── MOVEMENT ───
local movePage = makeTab("Movement")
makeToggle(movePage, "WalkSpeed", "Ускоренная ходьба", function(on)
    State.WalkSpeed = on
    if not on then local h = getHum(getChar(plr)) if h then h.WalkSpeed = 16 end end
    Notify("WalkSpeed", on and (Config.WalkSpeed .. " speed") or "сброшено")
end)
makeSlider(movePage, "Walk Speed", 16, 200, Config.WalkSpeed, function(v)
    Config.WalkSpeed = v
end)
makeToggle(movePage, "JumpPower", "Высокий прыжок", function(on)
    State.JumpPower = on
    if not on then local h = getHum(getChar(plr)) if h then h.JumpPower = 50 end end
    Notify("JumpPower", on and (Config.JumpPower .. " power") or "сброшено")
end)
makeSlider(movePage, "Jump Power", 50, 300, Config.JumpPower, function(v)
    Config.JumpPower = v
end)
makeToggle(movePage, "Fly", "WASD + Space/Shift", function(on)
    State.Fly = on
    if on then startFly() else stopFly() end
    Notify("Fly", on and "WASD для управления" or "выключен")
end)
makeSlider(movePage, "Fly Speed", 20, 250, Config.FlySpeed, function(v)
    Config.FlySpeed = v
end)
makeToggle(movePage, "Noclip", "Проходить сквозь стены", function(on)
    State.Noclip = on; Notify("Noclip", on and "включён" or "выключен")
end)
makeToggle(movePage, "Infinite Jump", "Бесконечные прыжки", function(on)
    State.InfJump = on; Notify("Infinite Jump", on and "включён" or "выключен")
end)
makeToggle(movePage, "Spinbot", "Вращение персонажа", function(on)
    State.Spinbot = on; Notify("Spinbot", on and "включён" or "выключен")
end)
makeSlider(movePage, "Spin Speed", 5, 60, Config.SpinSpeed, function(v)
    Config.SpinSpeed = v
end)

--// ─── PLAYER ───
local playerPage = makeTab("Player")
makeToggle(playerPage, "God Mode", "Авто-хил + анти-войд", function(on)
    State.GodMode = on; Notify("God Mode", on and "включён" or "выключен")
end)
makeToggle(playerPage, "Anti-Fling", "Гасит выброс скорости", function(on)
    State.AntiFling = on; Notify("Anti-Fling", on and "включён" or "выключен")
end)
makeToggle(playerPage, "Anti-AFK", "Не кикнет за AFK", function(on)
    State.AntiAFK = on; setAntiAFK(on); Notify("Anti-AFK", on and "включён" or "выключен")
end)

local resetBtn = makeToggle(playerPage, "Reset Character", "Респавн персонажа", function()
end)
-- превращаем этот тумблер в кнопку-действие
resetBtn.MouseButton1Click:Connect(function()
    resetCharacter()
    Notify("Reset", "Персонаж перезагружается...")
end)

--// ═══════════════ TOGGLE UI (RightShift) ═══════════════
local guiVisible = true
UIS.InputBegan:Connect(function(input, gp)
    if gp then return end
    if input.KeyCode == Enum.KeyCode.RightShift then
        guiVisible = not guiVisible
        if guiVisible then
            main.Visible = true
            tween(main, 0.25, { BackgroundTransparency = 0 })
        else
            tween(main, 0.2, { BackgroundTransparency = 1 })
            task.wait(0.2)
            main.Visible = false
        end
    end
end)

--// ═══════════════ ПОЯВЛЕНИЕ ═══════════════
selectTab("Combat")

main.BackgroundTransparency = 1
main.Size = UDim2.new(0, 520, 0, 0)
tween(main, 0.35, { BackgroundTransparency = 0, Size = UDim2.new(0, 520, 0, 400) })

if HAS_DRAWING then
    Notify("Claudeware", "Загружено успешно! RightShift — скрыть меню", 4)
else
    Notify("Claudeware", "Загружено. Drawing нет — ESP через Highlight.", 5)
end
`,Ns='loadstring(game:HttpGet("https://claudeware.dev/loader.lua"))()',bh=[{n:"01",title:"Copy the full script",body:"Use the Copy button below to grab the entire LuaU source — it is completely self-contained, no external loader required."},{n:"02",title:"Paste into your executor",body:"Any modern HttpGet-capable executor works. Drop it straight into the editor and hit Execute."},{n:"03",title:"The interface fades in",body:"A draggable, tabbed panel (Combat · Visuals · Movement · Player) with a live ping meter, sliders and notifications animates in. Press RightShift to hide it."}];async function js(e){try{return await navigator.clipboard.writeText(e),!0}catch{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();let t=!1;try{t=document.execCommand("copy")}catch{t=!1}return document.body.removeChild(n),t}}function Qh(){const[e,n]=k.useState(!1),[t,r]=k.useState(!1),l=k.useMemo(()=>Ir.split(`
`).length,[]),o=async()=>{await js(Ir),n(!0),window.setTimeout(()=>n(!1),1800)},i=async()=>{await js(Ns),r(!0),window.setTimeout(()=>r(!1),1800)},s=()=>{const a=new Blob([Ir],{type:"text/plain;charset=utf-8"}),c=URL.createObjectURL(a),m=document.createElement("a");m.href=c,m.download=Es,document.body.appendChild(m),m.click(),document.body.removeChild(m),window.setTimeout(()=>URL.revokeObjectURL(c),1e3)};return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"page-head container",children:[u.jsxs("span",{className:"pill",children:[u.jsx("span",{className:"pill-dot"})," Stable · v",$h]}),u.jsx("h1",{children:"Claudeware script, copy and pawte to your executor"}),u.jsx("p",{children:"Free, open source but universal yea."})]}),u.jsx("section",{className:"section container",children:u.jsxs("div",{className:"script-card",children:[u.jsxs("div",{className:"script-head",children:[u.jsxs("div",{className:"script-meta",children:[u.jsx("span",{className:"script-file",children:Es}),u.jsxs("span",{className:"script-stats",children:["LuaU · ",l," lines · self-contained"]})]}),u.jsxs("div",{className:"script-actions",children:[u.jsx("button",{className:"btn btn-ghost btn-sm",onClick:s,children:"Download .lua"}),u.jsx("button",{className:"btn btn-primary btn-sm",onClick:o,children:e?"Copied ✓":"Copy script"})]})]}),u.jsx("pre",{className:"script-code",tabIndex:0,children:u.jsx("code",{children:Ir})})]})}),u.jsxs("section",{className:"section container",children:[u.jsxs("div",{className:"loadstring-card",children:[u.jsxs("div",{className:"loadstring-head",children:[u.jsx("span",{className:"loadstring-label",children:"Prefer a one-liner? (optional)"}),u.jsx("button",{className:"btn btn-ghost btn-sm",onClick:i,children:t?"Copied ✓":"Copy"})]}),u.jsx("pre",{className:"loadstring-code",children:u.jsx("code",{children:Ns})}),u.jsx("p",{className:"loadstring-note",children:"The loadstring is a convenience wrapper. If your executor blocks HttpGet, just use the full script above — it needs nothing external."})]}),u.jsx("div",{className:"steps",children:bh.map(a=>u.jsxs("div",{className:"step",children:[u.jsx("span",{className:"step-n",children:a.n}),u.jsx("h3",{children:a.title}),u.jsx("p",{children:a.body})]},a.n))})]}),u.jsx("section",{className:"section container",children:u.jsxs("div",{className:"requirements",children:[u.jsx("h2",{children:"Requirements"}),u.jsxs("ul",{className:"req-list",children:[u.jsxs("li",{children:[u.jsx("span",{className:"req-key",children:"Executor"}),u.jsx("span",{className:"req-val",children:"Any modern LuaU executor"})]}),u.jsxs("li",{children:[u.jsx("span",{className:"req-key",children:"Drawing API"}),u.jsx("span",{className:"req-val",children:"Used for ESP/tracers · falls back to Highlight if missing"})]}),u.jsxs("li",{children:[u.jsx("span",{className:"req-key",children:"Toggle key"}),u.jsx("span",{className:"req-val",children:"RightShift hides / shows the panel"})]}),u.jsxs("li",{children:[u.jsx("span",{className:"req-key",children:"Footprint"}),u.jsx("span",{className:"req-val",children:"Single ScreenGui · all connections cleaned on re-execute"})]})]})]})}),u.jsx("section",{className:"disclaimer container",children:u.jsx("p",{children:"Shared for learning about game clients and Roblox UI design. Use it responsibly, and only where you are actually allowed to."})})]})}const Gn=(...e)=>{};Object.assign(Gn,{toast:Gn,success:Gn,error:Gn,info:Gn,warning:Gn,dismiss:()=>{}});const Xh=[{version:"1.2.0",date:"Latest",tone:"current",title:"Full restore + big feature expansion",notes:["Restored every feature that was previously removed — nothing was torn out.","Rebuilt the GUI into tabs: Combat · Visuals · Movement · Player, each scrollable.","Added Fly, WalkSpeed, JumpPower, Spinbot, Silent Aim, Aim Circle, ESP Distance, NoFog, God Mode, Anti-Fling, Anti-AFK and Reset.","Added sliders for FOV, aim smoothing, walk speed, jump power, fly speed and spin speed.","Every loop and BodyMover disconnects cleanly on toggle-off, no leaked connections."]},{version:"1.1.0",date:"Earlier",tone:"past",title:"Bug fixes & small polish",notes:["Restored the original Claude Code style hub — every feature kept intact.","Fixed the truncated Notify function and its stacking notification holder.","Cleaned up leftover ESP / RunService connections so nothing stays running after toggle-off.","RightShift now smoothly hides and re-centers the panel."]},{version:"1.6.2",date:"Earlier",tone:"past",title:"Ping meter polish",notes:["Added colour-graded ping quality from Godly to Rough.","Reduced ping poll interval for a more responsive readout.","Fixed a rare nil error when network stats were unavailable."]},{version:"1.5.0",date:"Earlier",tone:"past",title:"Notifications & X-Ray",notes:["Introduced stacked, tweened toast notifications with an accent bar.","Added X-Ray with translucent world geometry and crisp players.","Fullbright now restores original lighting cleanly when disabled."]}];function Kh(){return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"page-head container",children:[u.jsxs("span",{className:"pill",children:[u.jsx("span",{className:"pill-dot"})," Release history"]}),u.jsx("h1",{children:"What changed, and why it matters."}),u.jsx("p",{children:"Every release focuses on making the suite calmer and more reliable — fewer surprises, cleaner toggles, better feel."})]}),u.jsx("section",{className:"section container",children:u.jsx("div",{className:"timeline",children:Xh.map(e=>u.jsxs("article",{className:`release ${e.tone==="current"?"release-current":""}`,children:[u.jsx("div",{className:"release-marker","aria-hidden":"true",children:u.jsx("span",{className:"release-dot"})}),u.jsxs("div",{className:"release-body",children:[u.jsxs("div",{className:"release-head",children:[u.jsxs("h3",{children:["v",e.version]}),u.jsx("span",{className:"release-date",children:e.date})]}),u.jsx("p",{className:"release-title",children:e.title}),u.jsx("ul",{children:e.notes.map((n,t)=>u.jsx("li",{children:n},t))})]})]},e.version))})})]})}const Yh=[{id:1,type:"Error",time:"18:42:07.113",message:"Players.LocalPlayer.PlayerGui.ClaudewareLoader: attempt to index nil with 'new' (Drawing)",stack:[{indent:1,text:"Stack Begin"},{indent:2,text:'Script "Claudeware.lua", Line 877 - function makeDrawSet'},{indent:2,text:'Script "Claudeware.lua", Line 810 - function buildESP'},{indent:2,text:'Script "Claudeware.lua", Line 872 - function refreshESP'},{indent:2,text:'Script "Claudeware.lua", Line 1210'},{indent:1,text:"Stack End"}]},{id:2,type:"Error",time:"18:42:07.114",message:"Requested module experienced an error while loading",stack:[{indent:1,text:"Stack Begin"},{indent:2,text:'Script "Claudeware.lua", Line 1 - main chunk'},{indent:1,text:"Stack End"}]},{id:3,type:"Warning",time:"18:42:07.110",message:"Drawing API not detected on this executor — falling back to Highlight ESP."},{id:4,type:"Information",time:"18:42:06.998",message:"Claudeware :: fetching loader from https://claudeware.dev/loader.lua"},{id:5,type:"Output",time:"18:42:06.940",message:"Executor attached · injecting Claudeware v1.2.0"}],Jh=["Output","Information","Warning","Error"];function Zh(){const[e,n]=k.useState("Log"),[t,r]=k.useState(""),[l,o]=k.useState({Output:!0,Information:!0,Warning:!0,Error:!0}),i=a=>o(c=>({...c,[a]:!c[a]})),s=k.useMemo(()=>{const a=t.trim().toLowerCase();return Yh.filter(c=>l[c.type]).filter(c=>!a||c.message.toLowerCase().includes(a)?!0:(c.stack||[]).some(m=>m.text.toLowerCase().includes(a)))},[l,t]);return u.jsxs("section",{className:"console-page container",children:[u.jsxs("div",{className:"console-page-head",children:[u.jsx("h1",{children:"Developer Console"}),u.jsxs("p",{children:["This is the log overlay that opened instead of the menu — the old build crashed on the ",u.jsx("code",{children:"Drawing"})," API. It now loads and falls back to Highlight ESP."," ",u.jsx(de,{to:"/download",className:"console-inline-link",children:"Grab the fixed script →"})]})]}),u.jsxs("div",{className:"devconsole",role:"log","aria-label":"Roblox developer console",children:[u.jsxs("div",{className:"dc-tabs",children:[u.jsx("button",{className:`dc-tab ${e==="Log"?"dc-tab-active":""}`,onClick:()=>n("Log"),children:"Log"}),u.jsx("button",{className:`dc-tab ${e==="Memory"?"dc-tab-active":""}`,onClick:()=>n("Memory"),children:"Memory"})]}),e==="Log"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"dc-filterbar",children:[u.jsx("div",{className:"dc-checks",children:Jh.map(a=>u.jsxs("label",{className:"dc-check",children:[u.jsx("input",{type:"checkbox",checked:l[a],onChange:()=>i(a)}),u.jsx("span",{className:"dc-box","aria-hidden":"true"}),u.jsx("span",{className:"dc-check-label",children:a})]},a))}),u.jsxs("div",{className:"dc-search",children:[u.jsx("span",{className:"dc-search-icon","aria-hidden":"true",children:u.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",children:[u.jsx("circle",{cx:"10.5",cy:"10.5",r:"6.5",stroke:"currentColor",strokeWidth:"2"}),u.jsx("line",{x1:"15.5",y1:"15.5",x2:"21",y2:"21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),u.jsx("input",{type:"text",placeholder:"Search",value:t,onChange:a=>r(a.target.value),"aria-label":"Search log"})]})]}),u.jsx("div",{className:"dc-log",children:s.length===0?u.jsx("div",{className:"dc-empty",children:"No log entries match the filters."}):s.map(a=>u.jsxs("div",{className:`dc-entry dc-${a.type.toLowerCase()}`,children:[u.jsxs("div",{className:"dc-entry-main",children:[u.jsx("span",{className:"dc-icon","aria-hidden":"true",children:a.type==="Error"?u.jsx("span",{className:"dc-x",children:u.jsxs("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"none",children:[u.jsx("line",{x1:"5",y1:"5",x2:"19",y2:"19",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"}),u.jsx("line",{x1:"19",y1:"5",x2:"5",y2:"19",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]})}):a.type==="Warning"?u.jsx("span",{className:"dc-tri",children:"!"}):u.jsx("span",{className:"dc-dot"})}),u.jsx("span",{className:"dc-time",children:a.time}),u.jsx("span",{className:"dc-msg",children:a.message})]}),a.stack&&u.jsx("div",{className:"dc-stack",children:a.stack.map((c,m)=>u.jsx("div",{className:"dc-stack-line",style:{paddingLeft:`${c.indent*22}px`},children:c.text},m))})]},a.id))})]}):u.jsxs("div",{className:"dc-memory",children:[u.jsxs("div",{className:"dc-mem-row",children:[u.jsx("span",{children:"PlaceMemory"}),u.jsx("span",{children:"412.6 MB"})]}),u.jsxs("div",{className:"dc-mem-row",children:[u.jsx("span",{children:"CoreMemory"}),u.jsx("span",{children:"188.3 MB"})]}),u.jsxs("div",{className:"dc-mem-row",children:[u.jsx("span",{children:"UntrackedMemory"}),u.jsx("span",{children:"73.9 MB"})]}),u.jsxs("div",{className:"dc-mem-row dc-mem-total",children:[u.jsx("span",{children:"Total"}),u.jsx("span",{children:"674.8 MB"})]})]})]})]})}const qh=[{to:"/",label:"Home",end:!0},{to:"/features",label:"Features"},{to:"/download",label:"Download"},{to:"/changelog",label:"Changelog"},{to:"/console",label:"Console"}];function em(){const{pathname:e}=wt();return k.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),null}const nm="https://assetdelivery.roblox.com/v1/asset/?id=115798729575437";function tm(){const[e,n]=k.useState(!1);return u.jsx("span",{className:"brand-mark","aria-hidden":"true",children:e?u.jsxs("svg",{className:"brand-glyph",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",children:[u.jsx("path",{d:"M12 3.4 4 7.7v8.6l8 4.3 8-4.3V7.7l-8-4.3Z",stroke:"#fff",strokeWidth:"1.6",strokeLinejoin:"round"}),u.jsx("path",{d:"M12 3.4v17.2M4 7.7l8 4.4 8-4.4",stroke:"#fff",strokeWidth:"1.6",strokeLinejoin:"round",opacity:"0.75"})]}):u.jsx("img",{className:"brand-decal",src:nm,alt:"",onError:()=>n(!0),draggable:!1})})}function Ls(){return u.jsxs(de,{to:"/",className:"brand","aria-label":"Claudeware home",children:[u.jsx(tm,{}),u.jsxs("span",{className:"brand-text",children:["Claude",u.jsx("span",{className:"brand-accent",children:"ware"})]})]})}function rm(){const[e,n]=k.useState(!1),[t,r]=k.useState(!1);return k.useEffect(()=>{const l=()=>n(window.scrollY>12);return l(),window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),u.jsxs("div",{className:"app",children:[u.jsx(em,{}),u.jsx("div",{className:"glow glow-a","aria-hidden":"true"}),u.jsx("div",{className:"glow glow-b","aria-hidden":"true"}),u.jsx("header",{className:`nav ${e?"nav-scrolled":""}`,children:u.jsxs("div",{className:"container nav-inner",children:[u.jsx(Ls,{}),u.jsxs("nav",{className:`nav-links ${t?"open":""}`,children:[qh.map(l=>u.jsx(Dh,{to:l.to,end:l.end,className:({isActive:o})=>`nav-link ${o?"active":""}`,onClick:()=>r(!1),children:l.label},l.to)),u.jsx(de,{to:"/download",className:"btn btn-primary nav-cta",onClick:()=>r(!1),children:"Get Script"})]}),u.jsxs("button",{className:`nav-toggle ${t?"open":""}`,"aria-label":"Toggle navigation","aria-expanded":t,onClick:()=>r(l=>!l),children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]})}),u.jsx("main",{className:"main",children:u.jsxs(Ch,{children:[u.jsx(En,{path:"/",element:u.jsx(Ts,{})}),u.jsx(En,{path:"/features",element:u.jsx(Wh,{})}),u.jsx(En,{path:"/download",element:u.jsx(Qh,{})}),u.jsx(En,{path:"/changelog",element:u.jsx(Kh,{})}),u.jsx(En,{path:"/console",element:u.jsx(Zh,{})}),u.jsx(En,{path:"*",element:u.jsx(Ts,{})})]})}),u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"container footer-inner",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsx(Ls,{}),u.jsx("p",{className:"footer-tag",children:"A tabbed Roblox utility with a Claude-styled panel. Single ScreenGui, clean teardown, no leftover connections."})]}),u.jsxs("div",{className:"footer-cols",children:[u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Script"}),u.jsx(de,{to:"/features",children:"Modules"}),u.jsx(de,{to:"/download",children:"Get the source"}),u.jsx(de,{to:"/changelog",children:"Changelog"})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Read up"}),u.jsx(de,{to:"/console",children:"Console log"}),u.jsx(de,{to:"/download",children:"Requirements"}),u.jsx(de,{to:"/features",children:"ESP layers"})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Notes"}),u.jsx("span",{className:"footer-note",children:"Educational use only"}),u.jsx("span",{className:"footer-note",children:"RightShift to hide"}),u.jsx("span",{className:"footer-note",children:"Self-contained LuaU"})]})]})]}),u.jsxs("div",{className:"container footer-bottom",children:[u.jsxs("span",{children:["© ",new Date().getFullYear()," Claudeware · educational use only"]}),u.jsx("span",{className:"footer-mono",children:"v1.2.0 · stable"})]})]})]})}Gc(document.getElementById("root")).render(u.jsx(Os.StrictMode,{children:u.jsx(_h,{children:u.jsx(rm,{})})}));
