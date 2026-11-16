(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vs={exports:{}},nl={},Gs={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kt=Symbol.for("react.element"),oc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),pc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),Ui=Symbol.iterator;function mc(e){return e===null||typeof e!="object"?null:(e=Ui&&e[Ui]||e["@@iterator"],typeof e=="function"?e:null)}var Xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bs=Object.assign,Qs={};function ot(e,n,t){this.props=e,this.context=n,this.refs=Qs,this.updater=t||Xs}ot.prototype.isReactComponent={};ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=ot.prototype;function Fo(e,n,t){this.props=e,this.context=n,this.refs=Qs,this.updater=t||Xs}var Bo=Fo.prototype=new Ks;Bo.constructor=Fo;bs(Bo,ot.prototype);Bo.isPureReactComponent=!0;var Oi=Array.isArray,Ys=Object.prototype.hasOwnProperty,Ho={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Ys.call(n,r)&&!qs.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Kt,type:e,key:o,ref:i,props:l,_owner:Ho.current}}function gc(e,n){return{$$typeof:Kt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kt}function yc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ii=/\/+/g;function wl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):n.toString(36)}function xr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kt:case oc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,Oi(l)?(t="",e!=null&&(t=e.replace(Ii,"$&/")+"/"),xr(l,n,t,"",function(d){return d})):l!=null&&(Wo(l)&&(l=gc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ii,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Oi(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+wl(o,a);i+=xr(o,n,t,u,l)}else if(u=mc(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+wl(o,a++),i+=xr(o,n,t,u,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,n,t){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function vc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},xc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Ho};function Zs(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:tr,forEach:function(e,n,t){tr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return tr(e,function(){n++}),n},toArray:function(e){return tr(e,function(n){return n})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=ot;R.Fragment=ic;R.Profiler=ac;R.PureComponent=Fo;R.StrictMode=sc;R.Suspense=fc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;R.act=Zs;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bs({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Ho.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Ys.call(n,u)&&!qs.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Kt,type:e.type,key:l,ref:o,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uc,_context:e},e.Consumer=e};R.createElement=Js;R.createFactory=function(e){var n=Js.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:dc,render:e}};R.isValidElement=Wo;R.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:vc}};R.memo=function(e,n){return{$$typeof:pc,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};R.unstable_act=Zs;R.useCallback=function(e,n){return se.current.useCallback(e,n)};R.useContext=function(e){return se.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return se.current.useDeferredValue(e)};R.useEffect=function(e,n){return se.current.useEffect(e,n)};R.useId=function(){return se.current.useId()};R.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return se.current.useMemo(e,n)};R.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};R.useRef=function(e){return se.current.useRef(e)};R.useState=function(e){return se.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return se.current.useTransition()};R.version="18.3.1";Gs.exports=R;var Lt=Gs.exports;const wc=lc(Lt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=Lt,kc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Ec=Object.prototype.hasOwnProperty,jc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tc={key:!0,ref:!0,__self:!0,__source:!0};function ea(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Ec.call(n,r)&&!Tc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:kc,type:e,key:o,ref:i,props:l,_owner:jc.current}}nl.Fragment=_c;nl.jsx=ea;nl.jsxs=ea;Vs.exports=nl;var s=Vs.exports,na={exports:{}},ve={},ta={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,N){var P=E.length;E.push(N);e:for(;0<P;){var V=P-1>>>1,K=E[V];if(0<l(K,N))E[V]=N,E[P]=K,P=V;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],P=E.pop();if(P!==N){E[0]=P;e:for(var V=0,K=E.length,er=K>>>1;V<er;){var gn=2*(V+1)-1,xl=E[gn],yn=gn+1,nr=E[yn];if(0>l(xl,P))yn<K&&0>l(nr,xl)?(E[V]=nr,E[yn]=P,V=yn):(E[V]=xl,E[gn]=P,V=gn);else if(yn<K&&0>l(nr,P))E[V]=nr,E[yn]=P,V=yn;else break e}}return N}function l(E,N){var P=E.sortIndex-N.sortIndex;return P!==0?P:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],d=[],g=1,m=null,h=3,x=!1,w=!1,S=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var N=t(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=E)r(d),N.sortIndex=N.expirationTime,n(u,N);else break;N=t(d)}}function y(E){if(S=!1,p(E),!w)if(t(u)!==null)w=!0,yl(_);else{var N=t(d);N!==null&&vl(y,N.startTime-E)}}function _(E,N){w=!1,S&&(S=!1,f(C),C=-1),x=!0;var P=h;try{for(p(N),m=t(u);m!==null&&(!(m.expirationTime>N)||E&&!Te());){var V=m.callback;if(typeof V=="function"){m.callback=null,h=m.priorityLevel;var K=V(m.expirationTime<=N);N=e.unstable_now(),typeof K=="function"?m.callback=K:m===t(u)&&r(u),p(N)}else r(u);m=t(u)}if(m!==null)var er=!0;else{var gn=t(d);gn!==null&&vl(y,gn.startTime-N),er=!1}return er}finally{m=null,h=P,x=!1}}var j=!1,T=null,C=-1,$=5,L=-1;function Te(){return!(e.unstable_now()-L<$)}function at(){if(T!==null){var E=e.unstable_now();L=E;var N=!0;try{N=T(!0,E)}finally{N?ut():(j=!1,T=null)}}else j=!1}var ut;if(typeof c=="function")ut=function(){c(at)};else if(typeof MessageChannel<"u"){var Mi=new MessageChannel,rc=Mi.port2;Mi.port1.onmessage=at,ut=function(){rc.postMessage(null)}}else ut=function(){z(at,0)};function yl(E){T=E,j||(j=!0,ut())}function vl(E,N){C=z(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,yl(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var P=h;h=N;try{return E()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=h;h=E;try{return N()}finally{h=P}},e.unstable_scheduleCallback=function(E,N,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,E){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,E={id:g++,callback:N,priorityLevel:E,startTime:P,expirationTime:K,sortIndex:-1},P>V?(E.sortIndex=P,n(d,E),t(u)===null&&E===t(d)&&(S?(f(C),C=-1):S=!0,vl(y,P-V))):(E.sortIndex=K,n(u,E),w||x||(w=!0,yl(_))),E},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(E){var N=h;return function(){var P=h;h=N;try{return E.apply(this,arguments)}finally{h=P}}}})(ra);ta.exports=ra;var Cc=ta.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=Lt,ye=Cc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,At={};function Rn(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(At[e]=n,e=0;e<n.length;e++)la.add(n[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zi={},Di={};function Rc(e){return Xl.call(Di,e)?!0:Xl.call(zi,e)?!1:Pc.test(e)?Di[e]=!0:(zi[e]=!0,!1)}function Lc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ac(e,n,t,r){if(n===null||typeof n>"u"||Lc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $o=/[\-:]([a-z])/g;function Vo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($o,Vo);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($o,Vo);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($o,Vo);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Go(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ac(n,t,l,r)&&(t=null),r||l===null?Rc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Qe=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Un=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),oa=Symbol.for("react.provider"),ia=Symbol.for("react.context"),bo=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Qo=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),sa=Symbol.for("react.offscreen"),Fi=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Fi&&e[Fi]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Sl;function vt(e){if(Sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sl=n&&n[1]||""}return`
`+Sl+e}var kl=!1;function _l(e,n){if(!e||kl)return"";kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?vt(e):""}function Mc(e){switch(e.tag){case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Un:return"Portal";case bl:return"Profiler";case Xo:return"StrictMode";case Ql:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ia:return(e.displayName||"Context")+".Consumer";case oa:return(e._context.displayName||"Context")+".Provider";case bo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qo:return n=e.displayName||null,n!==null?n:Yl(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Yl(e(n))}catch{}}return null}function Uc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(n);case 8:return n===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oc(e){var n=aa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function lr(e){e._valueTracker||(e._valueTracker=Oc(e))}function ua(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=aa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ca(e,n){n=n.checked,n!=null&&Go(e,"checked",n,!1)}function Jl(e,n){ca(e,n);var t=dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Zl(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zl(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function Xn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function eo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(xt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function da(e,n){var t=dn(n.value),r=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function $i(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,pa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var kt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ic=["Webkit","ms","Moz","O"];Object.keys(kt).forEach(function(e){Ic.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),kt[n]=kt[e]})});function ha(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||kt.hasOwnProperty(e)&&kt[e]?(""+n).trim():n+"px"}function ma(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=ha(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var zc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function to(e,n){if(n){if(zc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function ro(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,bn=null,Qn=null;function Vi(e){if(e=Jt(e)){if(typeof oo!="function")throw Error(v(280));var n=e.stateNode;n&&(n=il(n),oo(e.stateNode,e.type,n))}}function ga(e){bn?Qn?Qn.push(e):Qn=[e]:bn=e}function ya(){if(bn){var e=bn,n=Qn;if(Qn=bn=null,Vi(e),n)for(e=0;e<n.length;e++)Vi(n[e])}}function va(e,n){return e(n)}function xa(){}var El=!1;function wa(e,n,t){if(El)return e(n,t);El=!0;try{return va(e,n,t)}finally{El=!1,(bn!==null||Qn!==null)&&(xa(),ya())}}function Ut(e,n){var t=e.stateNode;if(t===null)return null;var r=il(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var io=!1;if(Ve)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){io=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{io=!1}function Dc(e,n,t,r,l,o,i,a,u){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(g){this.onError(g)}}var _t=!1,Ar=null,Mr=!1,so=null,Fc={onError:function(e){_t=!0,Ar=e}};function Bc(e,n,t,r,l,o,i,a,u){_t=!1,Ar=null,Dc.apply(Fc,arguments)}function Hc(e,n,t,r,l,o,i,a,u){if(Bc.apply(this,arguments),_t){if(_t){var d=Ar;_t=!1,Ar=null}else throw Error(v(198));Mr||(Mr=!0,so=d)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Sa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Gi(e){if(Ln(e)!==e)throw Error(v(188))}function Wc(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Gi(l),e;if(o===r)return Gi(l),n;o=o.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function ka(e){return e=Wc(e),e!==null?_a(e):null}function _a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_a(e);if(n!==null)return n;e=e.sibling}return null}var Ea=ye.unstable_scheduleCallback,Xi=ye.unstable_cancelCallback,$c=ye.unstable_shouldYield,Vc=ye.unstable_requestPaint,G=ye.unstable_now,Gc=ye.unstable_getCurrentPriorityLevel,Yo=ye.unstable_ImmediatePriority,ja=ye.unstable_UserBlockingPriority,Ur=ye.unstable_NormalPriority,Xc=ye.unstable_LowPriority,Ta=ye.unstable_IdlePriority,tl=null,ze=null;function bc(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Yc,Qc=Math.log,Kc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Qc(e)/Kc|0)|0}var ir=64,sr=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~l;a!==0?r=wt(a):(o&=i,o!==0&&(r=wt(o)))}else i=t&~l,i!==0?r=wt(i):o!==0&&(r=wt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),l=1<<t,r|=e[t],n&=~l;return r}function qc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Le(o),a=1<<i,u=l[i];u===-1?(!(a&t)||a&r)&&(l[i]=qc(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function ao(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ca(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function jl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function Zc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Le(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function qo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var M=0;function Na(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pa,Jo,Ra,La,Aa,uo=!1,ar=[],tn=null,rn=null,ln=null,Ot=new Map,It=new Map,Je=[],ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bi(e,n){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Ot.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(n.pointerId)}}function ft(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Jt(n),n!==null&&Jo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function nd(e,n,t,r,l){switch(n){case"focusin":return tn=ft(tn,e,n,t,r,l),!0;case"dragenter":return rn=ft(rn,e,n,t,r,l),!0;case"mouseover":return ln=ft(ln,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Ot.set(o,ft(Ot.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,It.set(o,ft(It.get(o)||null,e,n,t,r,l)),!0}return!1}function Ma(e){var n=wn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=Sa(t),n!==null){e.blockedOn=n,Aa(e.priority,function(){Ra(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=co(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);lo=r,t.target.dispatchEvent(r),lo=null}else return n=Jt(t),n!==null&&Jo(n),e.blockedOn=t,!1;n.shift()}return!0}function Qi(e,n,t){Sr(e)&&t.delete(n)}function td(){uo=!1,tn!==null&&Sr(tn)&&(tn=null),rn!==null&&Sr(rn)&&(rn=null),ln!==null&&Sr(ln)&&(ln=null),Ot.forEach(Qi),It.forEach(Qi)}function pt(e,n){e.blockedOn===n&&(e.blockedOn=null,uo||(uo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,td)))}function zt(e){function n(l){return pt(l,e)}if(0<ar.length){pt(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&pt(tn,e),rn!==null&&pt(rn,e),ln!==null&&pt(ln,e),Ot.forEach(n),It.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)Ma(t),t.blockedOn===null&&Je.shift()}var Kn=Qe.ReactCurrentBatchConfig,Ir=!0;function rd(e,n,t,r){var l=M,o=Kn.transition;Kn.transition=null;try{M=1,Zo(e,n,t,r)}finally{M=l,Kn.transition=o}}function ld(e,n,t,r){var l=M,o=Kn.transition;Kn.transition=null;try{M=4,Zo(e,n,t,r)}finally{M=l,Kn.transition=o}}function Zo(e,n,t,r){if(Ir){var l=co(e,n,t,r);if(l===null)Ol(e,n,r,zr,t),bi(e,r);else if(nd(l,e,n,t,r))r.stopPropagation();else if(bi(e,r),n&4&&-1<ed.indexOf(e)){for(;l!==null;){var o=Jt(l);if(o!==null&&Pa(o),o=co(e,n,t,r),o===null&&Ol(e,n,r,zr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ol(e,n,r,null,t)}}var zr=null;function co(e,n,t,r){if(zr=null,e=Ko(r),e=wn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Sa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zr=e,null}function Ua(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case Yo:return 1;case ja:return 4;case Ur:case Xc:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var en=null,ei=null,kr=null;function Oa(){if(kr)return kr;var e,n=ei,t=n.length,r,l="value"in en?en.value:en.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function _r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Ki(){return!1}function xe(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Ki,this.isPropagationStopped=Ki,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=xe(it),qt=H({},it,{view:0,detail:0}),od=xe(qt),Tl,Cl,ht,rl=H({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ht&&(ht&&e.type==="mousemove"?(Tl=e.screenX-ht.screenX,Cl=e.screenY-ht.screenY):Cl=Tl=0,ht=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Yi=xe(rl),id=H({},rl,{dataTransfer:0}),sd=xe(id),ad=H({},qt,{relatedTarget:0}),Nl=xe(ad),ud=H({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),cd=xe(ud),dd=H({},it,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=xe(dd),pd=H({},it,{data:0}),qi=xe(pd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gd[e])?!!n[e]:!1}function ti(){return yd}var vd=H({},qt,{key:function(e){if(e.key){var n=hd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=xe(vd),wd=H({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ji=xe(wd),Sd=H({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),kd=xe(Sd),_d=H({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=xe(_d),jd=H({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Td=xe(jd),Cd=[9,13,27,32],ri=Ve&&"CompositionEvent"in window,Et=null;Ve&&"documentMode"in document&&(Et=document.documentMode);var Nd=Ve&&"TextEvent"in window&&!Et,Ia=Ve&&(!ri||Et&&8<Et&&11>=Et),Zi=String.fromCharCode(32),es=!1;function za(e,n){switch(e){case"keyup":return Cd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Pd(e,n){switch(e){case"compositionend":return Da(n);case"keypress":return n.which!==32?null:(es=!0,Zi);case"textInput":return e=n.data,e===Zi&&es?null:e;default:return null}}function Rd(e,n){if(In)return e==="compositionend"||!ri&&za(e,n)?(e=Oa(),kr=ei=en=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ia&&n.locale!=="ko"?null:n.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ns(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ld[e.type]:n==="textarea"}function Fa(e,n,t,r){ga(r),n=Dr(n,"onChange"),0<n.length&&(t=new ni("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var jt=null,Dt=null;function Ad(e){Ya(e,0)}function ll(e){var n=Fn(e);if(ua(n))return e}function Md(e,n){if(e==="change")return n}var Ba=!1;if(Ve){var Pl;if(Ve){var Rl="oninput"in document;if(!Rl){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),Rl=typeof ts.oninput=="function"}Pl=Rl}else Pl=!1;Ba=Pl&&(!document.documentMode||9<document.documentMode)}function rs(){jt&&(jt.detachEvent("onpropertychange",Ha),Dt=jt=null)}function Ha(e){if(e.propertyName==="value"&&ll(Dt)){var n=[];Fa(n,Dt,e,Ko(e)),wa(Ad,n)}}function Ud(e,n,t){e==="focusin"?(rs(),jt=n,Dt=t,jt.attachEvent("onpropertychange",Ha)):e==="focusout"&&rs()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Dt)}function Id(e,n){if(e==="click")return ll(n)}function zd(e,n){if(e==="input"||e==="change")return ll(n)}function Dd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Dd;function Ft(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Xl.call(n,l)||!Me(e[l],n[l]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function os(e,n){var t=ls(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ls(t)}}function Wa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $a(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function li(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Fd(e){var n=$a(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wa(t.ownerDocument.documentElement,t)){if(r!==null&&li(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=os(t,o);var i=os(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=Ve&&"documentMode"in document&&11>=document.documentMode,zn=null,fo=null,Tt=null,po=!1;function is(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;po||zn==null||zn!==Lr(r)||(r=zn,"selectionStart"in r&&li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tt&&Ft(Tt,r)||(Tt=r,r=Dr(fo,"onSelect"),0<r.length&&(n=new ni("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=zn)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Dn={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ll={},Va={};Ve&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function ol(e){if(Ll[e])return Ll[e];if(!Dn[e])return e;var n=Dn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Va)return Ll[e]=n[t];return e}var Ga=ol("animationend"),Xa=ol("animationiteration"),ba=ol("animationstart"),Qa=ol("transitionend"),Ka=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,n){Ka.set(e,n),Rn(n,[e])}for(var Al=0;Al<ss.length;Al++){var Ml=ss[Al],Hd=Ml.toLowerCase(),Wd=Ml[0].toUpperCase()+Ml.slice(1);pn(Hd,"on"+Wd)}pn(Ga,"onAnimationEnd");pn(Xa,"onAnimationIteration");pn(ba,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Qa,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var St="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(St));function as(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hc(r,n,void 0,e),e.currentTarget=null}function Ya(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;as(l,a,d),o=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;as(l,a,d),o=u}}}if(Mr)throw e=so,Mr=!1,so=null,e}function O(e,n){var t=n[vo];t===void 0&&(t=n[vo]=new Set);var r=e+"__bubble";t.has(r)||(qa(n,e,2,!1),t.add(r))}function Ul(e,n,t){var r=0;n&&(r|=4),qa(t,e,r,n)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Bt(e){if(!e[dr]){e[dr]=!0,la.forEach(function(t){t!=="selectionchange"&&($d.has(t)||Ul(t,!1,e),Ul(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dr]||(n[dr]=!0,Ul("selectionchange",!1,n))}}function qa(e,n,t,r){switch(Ua(n)){case 1:var l=rd;break;case 4:l=ld;break;default:l=Zo}t=l.bind(null,n,t,e),l=void 0,!io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ol(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;a!==null;){if(i=wn(a),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}a=a.parentNode}}r=r.return}wa(function(){var d=o,g=Ko(t),m=[];e:{var h=Ka.get(e);if(h!==void 0){var x=ni,w=e;switch(e){case"keypress":if(_r(t)===0)break e;case"keydown":case"keyup":x=xd;break;case"focusin":w="focus",x=Nl;break;case"focusout":w="blur",x=Nl;break;case"beforeblur":case"afterblur":x=Nl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Yi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=kd;break;case Ga:case Xa:case ba:x=cd;break;case Qa:x=Ed;break;case"scroll":x=od;break;case"wheel":x=Td;break;case"copy":case"cut":case"paste":x=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ji}var S=(n&4)!==0,z=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var c=d,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Ut(c,f),y!=null&&S.push(Ht(c,y,p)))),z)break;c=c.return}0<S.length&&(h=new x(h,w,null,t,g),m.push({event:h,listeners:S}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&t!==lo&&(w=t.relatedTarget||t.fromElement)&&(wn(w)||w[Ge]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=t.relatedTarget||t.toElement,x=d,w=w?wn(w):null,w!==null&&(z=Ln(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(S=Yi,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ji,y="onPointerLeave",f="onPointerEnter",c="pointer"),z=x==null?h:Fn(x),p=w==null?h:Fn(w),h=new S(y,c+"leave",x,t,g),h.target=z,h.relatedTarget=p,y=null,wn(g)===d&&(S=new S(f,c+"enter",w,t,g),S.target=p,S.relatedTarget=z,y=S),z=y,x&&w)n:{for(S=x,f=w,c=0,p=S;p;p=An(p))c++;for(p=0,y=f;y;y=An(y))p++;for(;0<c-p;)S=An(S),c--;for(;0<p-c;)f=An(f),p--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break n;S=An(S),f=An(f)}S=null}else S=null;x!==null&&us(m,h,x,S,!1),w!==null&&z!==null&&us(m,z,w,S,!0)}}e:{if(h=d?Fn(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var _=Md;else if(ns(h))if(Ba)_=zd;else{_=Od;var j=Ud}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Id);if(_&&(_=_(e,d))){Fa(m,_,t,g);break e}j&&j(e,h,d),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&Zl(h,"number",h.value)}switch(j=d?Fn(d):window,e){case"focusin":(ns(j)||j.contentEditable==="true")&&(zn=j,fo=d,Tt=null);break;case"focusout":Tt=fo=zn=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,is(m,t,g);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":is(m,t,g)}var T;if(ri)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else In?za(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Ia&&t.locale!=="ko"&&(In||C!=="onCompositionStart"?C==="onCompositionEnd"&&In&&(T=Oa()):(en=g,ei="value"in en?en.value:en.textContent,In=!0)),j=Dr(d,C),0<j.length&&(C=new qi(C,e,null,t,g),m.push({event:C,listeners:j}),T?C.data=T:(T=Da(t),T!==null&&(C.data=T)))),(T=Nd?Pd(e,t):Rd(e,t))&&(d=Dr(d,"onBeforeInput"),0<d.length&&(g=new qi("onBeforeInput","beforeinput",null,t,g),m.push({event:g,listeners:d}),g.data=T))}Ya(m,n)})}function Ht(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Dr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Ut(e,t),o!=null&&r.unshift(Ht(e,o,l)),o=Ut(e,n),o!=null&&r.push(Ht(e,o,l))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var a=t,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=Ut(t,o),u!=null&&i.unshift(Ht(t,u,a))):l||(u=Ut(t,o),u!=null&&i.push(Ht(t,u,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Vd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Gd,"")}function fr(e,n,t){if(n=cs(n),cs(e)!==n&&t)throw Error(v(425))}function Fr(){}var ho=null,mo=null;function go(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,bd=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch(Qd)}:yo;function Qd(e){setTimeout(function(){throw e})}function Il(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),zt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);zt(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var st=Math.random().toString(36).slice(2),Ie="__reactFiber$"+st,Wt="__reactProps$"+st,Ge="__reactContainer$"+st,vo="__reactEvents$"+st,Kd="__reactListeners$"+st,Yd="__reactHandles$"+st;function wn(e){var n=e[Ie];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ge]||t[Ie]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fs(e);e!==null;){if(t=e[Ie])return t;e=fs(e)}return n}e=t,t=e.parentNode}return null}function Jt(e){return e=e[Ie]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function il(e){return e[Wt]||null}var xo=[],Bn=-1;function hn(e){return{current:e}}function I(e){0>Bn||(e.current=xo[Bn],xo[Bn]=null,Bn--)}function U(e,n){Bn++,xo[Bn]=e.current,e.current=n}var fn={},le=hn(fn),de=hn(!1),jn=fn;function Zn(e,n){var t=e.type.contextTypes;if(!t)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Br(){I(de),I(le)}function ps(e,n,t){if(le.current!==fn)throw Error(v(168));U(le,n),U(de,t)}function Ja(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(v(108,Uc(e)||"Unknown",l));return H({},t,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,jn=le.current,U(le,e),U(de,de.current),!0}function hs(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=Ja(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,I(de),I(le),U(le,e)):I(de),U(de,t)}var Be=null,sl=!1,zl=!1;function Za(e){Be===null?Be=[e]:Be.push(e)}function qd(e){sl=!0,Za(e)}function mn(){if(!zl&&Be!==null){zl=!0;var e=0,n=M;try{var t=Be;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Be=null,sl=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Ea(Yo,mn),l}finally{M=n,zl=!1}}return null}var Hn=[],Wn=0,Wr=null,$r=0,we=[],Se=0,Tn=null,He=1,We="";function vn(e,n){Hn[Wn++]=$r,Hn[Wn++]=Wr,Wr=e,$r=n}function eu(e,n,t){we[Se++]=He,we[Se++]=We,we[Se++]=Tn,Tn=e;var r=He;e=We;var l=32-Le(r)-1;r&=~(1<<l),t+=1;var o=32-Le(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,He=1<<32-Le(n)+l|t<<l|r,We=o+e}else He=1<<o|t<<l|r,We=e}function oi(e){e.return!==null&&(vn(e,1),eu(e,1,0))}function ii(e){for(;e===Wr;)Wr=Hn[--Wn],Hn[Wn]=null,$r=Hn[--Wn],Hn[Wn]=null;for(;e===Tn;)Tn=we[--Se],we[Se]=null,We=we[--Se],we[Se]=null,He=we[--Se],we[Se]=null}var ge=null,me=null,D=!1,Re=null;function nu(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ms(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tn!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(D){var n=me;if(n){var t=n;if(!ms(e,n)){if(wo(e))throw Error(v(418));n=on(t.nextSibling);var r=ge;n&&ms(e,n)?nu(r,t):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(wo(e))throw Error(v(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!D)return gs(e),D=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!go(e.type,e.memoizedProps)),n&&(n=me)){if(wo(e))throw tu(),Error(v(418));for(;n;)nu(e,n),n=on(n.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=on(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?on(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=me;e;)e=on(e.nextSibling)}function et(){me=ge=null,D=!1}function si(e){Re===null?Re=[e]:Re.push(e)}var Jd=Qe.ReactCurrentBatchConfig;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function hr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ys(e){var n=e._init;return n(e._payload)}function ru(e){function n(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=cn(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=Vl(p,f.mode,y),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,y){var _=p.type;return _===On?g(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&ys(_)===c.type)?(y=l(c,p.props),y.ref=mt(f,c,p),y.return=f,y):(y=Rr(p.type,p.key,p.props,null,f.mode,y),y.ref=mt(f,c,p),y.return=f,y)}function d(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Gl(p,f.mode,y),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,y,_){return c===null||c.tag!==7?(c=En(p,f.mode,y,_),c.return=f,c):(c=l(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Vl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case rr:return p=Rr(c.type,c.key,c.props,null,f.mode,p),p.ref=mt(f,null,c),p.return=f,p;case Un:return c=Gl(c,f.mode,p),c.return=f,c;case Ye:var y=c._init;return m(f,y(c._payload),p)}if(xt(c)||ct(c))return c=En(c,f.mode,p,null),c.return=f,c;hr(f,c)}return null}function h(f,c,p,y){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===_?u(f,c,p,y):null;case Un:return p.key===_?d(f,c,p,y):null;case Ye:return _=p._init,h(f,c,_(p._payload),y)}if(xt(p)||ct(p))return _!==null?null:g(f,c,p,y,null);hr(f,p)}return null}function x(f,c,p,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rr:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,_);case Un:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,_);case Ye:var j=y._init;return x(f,c,p,j(y._payload),_)}if(xt(y)||ct(y))return f=f.get(p)||null,g(c,f,y,_,null);hr(c,y)}return null}function w(f,c,p,y){for(var _=null,j=null,T=c,C=c=0,$=null;T!==null&&C<p.length;C++){T.index>C?($=T,T=null):$=T.sibling;var L=h(f,T,p[C],y);if(L===null){T===null&&(T=$);break}e&&T&&L.alternate===null&&n(f,T),c=o(L,c,C),j===null?_=L:j.sibling=L,j=L,T=$}if(C===p.length)return t(f,T),D&&vn(f,C),_;if(T===null){for(;C<p.length;C++)T=m(f,p[C],y),T!==null&&(c=o(T,c,C),j===null?_=T:j.sibling=T,j=T);return D&&vn(f,C),_}for(T=r(f,T);C<p.length;C++)$=x(T,f,C,p[C],y),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?C:$.key),c=o($,c,C),j===null?_=$:j.sibling=$,j=$);return e&&T.forEach(function(Te){return n(f,Te)}),D&&vn(f,C),_}function S(f,c,p,y){var _=ct(p);if(typeof _!="function")throw Error(v(150));if(p=_.call(p),p==null)throw Error(v(151));for(var j=_=null,T=c,C=c=0,$=null,L=p.next();T!==null&&!L.done;C++,L=p.next()){T.index>C?($=T,T=null):$=T.sibling;var Te=h(f,T,L.value,y);if(Te===null){T===null&&(T=$);break}e&&T&&Te.alternate===null&&n(f,T),c=o(Te,c,C),j===null?_=Te:j.sibling=Te,j=Te,T=$}if(L.done)return t(f,T),D&&vn(f,C),_;if(T===null){for(;!L.done;C++,L=p.next())L=m(f,L.value,y),L!==null&&(c=o(L,c,C),j===null?_=L:j.sibling=L,j=L);return D&&vn(f,C),_}for(T=r(f,T);!L.done;C++,L=p.next())L=x(T,f,C,L.value,y),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?C:L.key),c=o(L,c,C),j===null?_=L:j.sibling=L,j=L);return e&&T.forEach(function(at){return n(f,at)}),D&&vn(f,C),_}function z(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===On&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var _=p.key,j=c;j!==null;){if(j.key===_){if(_=p.type,_===On){if(j.tag===7){t(f,j.sibling),c=l(j,p.props.children),c.return=f,f=c;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&ys(_)===j.type){t(f,j.sibling),c=l(j,p.props),c.ref=mt(f,j,p),c.return=f,f=c;break e}t(f,j);break}else n(f,j);j=j.sibling}p.type===On?(c=En(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Rr(p.type,p.key,p.props,null,f.mode,y),y.ref=mt(f,c,p),y.return=f,f=y)}return i(f);case Un:e:{for(j=p.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=Gl(p,f.mode,y),c.return=f,f=c}return i(f);case Ye:return j=p._init,z(f,c,j(p._payload),y)}if(xt(p))return w(f,c,p,y);if(ct(p))return S(f,c,p,y);hr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(f,c.sibling),c=l(c,p),c.return=f,f=c):(t(f,c),c=Vl(p,f.mode,y),c.return=f,f=c),i(f)):t(f,c)}return z}var nt=ru(!0),lu=ru(!1),Vr=hn(null),Gr=null,$n=null,ai=null;function ui(){ai=$n=Gr=null}function ci(e){var n=Vr.current;I(Vr),e._currentValue=n}function ko(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Gr=e,ai=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(ai!==e)if(e={context:e,memoizedValue:n,next:null},$n===null){if(Gr===null)throw Error(v(308));$n=e,Gr.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return n}var Sn=null;function di(e){Sn===null?Sn=[e]:Sn.push(e)}function ou(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,di(n)):(t.next=l.next,l.next=t),n.interleaved=t,Xe(e,r)}function Xe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var qe=!1;function fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Xe(e,t)}return l=r.interleaved,l===null?(n.next=n,di(r)):(n.next=l.next,l.next=n),r.interleaved=n,Xe(e,t)}function Er(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}function vs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Xr(e,n,t,r){var l=e.updateQueue;qe=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=u))}if(o!==null){var m=l.baseState;i=0,g=d=u=null,a=o;do{var h=a.lane,x=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(h=n,x=t,S.tag){case 1:if(w=S.payload,typeof w=="function"){m=w.call(x,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(x,m,h):w,h==null)break e;m=H({},m,h);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=x,u=m):g=g.next=x,i|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(1);if(g===null&&(u=m),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Nn|=i,e.lanes=i,e.memoizedState=m}}function xs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var Zt={},De=hn(Zt),$t=hn(Zt),Vt=hn(Zt);function kn(e){if(e===Zt)throw Error(v(174));return e}function pi(e,n){switch(U(Vt,n),U($t,e),U(De,Zt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:no(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=no(n,e)}I(De),U(De,n)}function tt(){I(De),I($t),I(Vt)}function su(e){kn(Vt.current);var n=kn(De.current),t=no(n,e.type);n!==t&&(U($t,e),U(De,t))}function hi(e){$t.current===e&&(I(De),I($t))}var F=hn(0);function br(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dl=[];function mi(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var jr=Qe.ReactCurrentDispatcher,Fl=Qe.ReactCurrentBatchConfig,Cn=0,B=null,b=null,Y=null,Qr=!1,Ct=!1,Gt=0,Zd=0;function ne(){throw Error(v(321))}function gi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function yi(e,n,t,r,l,o){if(Cn=o,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jr.current=e===null||e.memoizedState===null?rf:lf,e=t(r,l),Ct){o=0;do{if(Ct=!1,Gt=0,25<=o)throw Error(v(301));o+=1,Y=b=null,n.updateQueue=null,jr.current=of,e=t(r,l)}while(Ct)}if(jr.current=Kr,n=b!==null&&b.next!==null,Cn=0,Y=b=B=null,Qr=!1,n)throw Error(v(300));return e}function vi(){var e=Gt!==0;return Gt=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?B.memoizedState=Y=e:Y=Y.next=e,Y}function je(){if(b===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var n=Y===null?B.memoizedState:Y.next;if(n!==null)Y=n,b=e;else{if(e===null)throw Error(v(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},Y===null?B.memoizedState=Y=e:Y=Y.next=e}return Y}function Xt(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=je(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=b,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,u=null,d=o;do{var g=d.lane;if((Cn&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,i=r):u=u.next=m,B.lanes|=g,Nn|=g}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=a,Me(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,B.lanes|=o,Nn|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Hl(e){var n=je(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Me(o,n.memoizedState)||(ce=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function au(){}function uu(e,n){var t=B,r=je(),l=n(),o=!Me(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,xi(fu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,bt(9,du.bind(null,t,r,l,n),void 0,null),q===null)throw Error(v(349));Cn&30||cu(t,n,l)}return l}function cu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function du(e,n,t,r){n.value=t,n.getSnapshot=r,pu(n)&&hu(e)}function fu(e,n,t){return t(function(){pu(n)&&hu(e)})}function pu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function hu(e){var n=Xe(e,1);n!==null&&Ae(n,e,1,-1)}function ws(e){var n=Oe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},n.queue=e,e=e.dispatch=tf.bind(null,B,e),[n.memoizedState,e]}function bt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return je().memoizedState}function Tr(e,n,t,r){var l=Oe();B.flags|=e,l.memoizedState=bt(1|n,t,void 0,r===void 0?null:r)}function al(e,n,t,r){var l=je();r=r===void 0?null:r;var o=void 0;if(b!==null){var i=b.memoizedState;if(o=i.destroy,r!==null&&gi(r,i.deps)){l.memoizedState=bt(n,t,o,r);return}}B.flags|=e,l.memoizedState=bt(1|n,t,o,r)}function Ss(e,n){return Tr(8390656,8,e,n)}function xi(e,n){return al(2048,8,e,n)}function gu(e,n){return al(4,2,e,n)}function yu(e,n){return al(4,4,e,n)}function vu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xu(e,n,t){return t=t!=null?t.concat([e]):null,al(4,4,vu.bind(null,n,e),t)}function wi(){}function wu(e,n){var t=je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&gi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Su(e,n){var t=je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&gi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ku(e,n,t){return Cn&21?(Me(t,n)||(t=Ca(),B.lanes|=t,Nn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function ef(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),n()}finally{M=t,Fl.transition=r}}function _u(){return je().memoizedState}function nf(e,n,t){var r=un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Eu(e))ju(n,t);else if(t=ou(e,n,t,r),t!==null){var l=ie();Ae(t,e,r,l),Tu(t,n,r)}}function tf(e,n,t){var r=un(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))ju(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,a=o(i,t);if(l.hasEagerState=!0,l.eagerState=a,Me(a,i)){var u=n.interleaved;u===null?(l.next=l,di(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=ou(e,n,l,r),t!==null&&(l=ie(),Ae(t,e,r,l),Tu(t,n,r))}}function Eu(e){var n=e.alternate;return e===B||n!==null&&n===B}function ju(e,n){Ct=Qr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}var Kr={readContext:Ee,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},rf={readContext:Ee,useCallback:function(e,n){return Oe().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:Ss,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Tr(4194308,4,vu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Tr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Tr(4,2,e,n)},useMemo:function(e,n){var t=Oe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Oe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=nf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=Oe();return e={current:e},n.memoizedState=e},useState:ws,useDebugValue:wi,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=ws(!1),n=e[0];return e=ef.bind(null,e[1]),Oe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,l=Oe();if(D){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),q===null)throw Error(v(349));Cn&30||cu(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Ss(fu.bind(null,r,o,e),[e]),r.flags|=2048,bt(9,du.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Oe(),n=q.identifierPrefix;if(D){var t=We,r=He;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Gt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},lf={readContext:Ee,useCallback:wu,useContext:Ee,useEffect:xi,useImperativeHandle:xu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:Bl,useRef:mu,useState:function(){return Bl(Xt)},useDebugValue:wi,useDeferredValue:function(e){var n=je();return ku(n,b.memoizedState,e)},useTransition:function(){var e=Bl(Xt)[0],n=je().memoizedState;return[e,n]},useMutableSource:au,useSyncExternalStore:uu,useId:_u,unstable_isNewReconciler:!1},of={readContext:Ee,useCallback:wu,useContext:Ee,useEffect:xi,useImperativeHandle:xu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:Hl,useRef:mu,useState:function(){return Hl(Xt)},useDebugValue:wi,useDeferredValue:function(e){var n=je();return b===null?n.memoizedState=e:ku(n,b.memoizedState,e)},useTransition:function(){var e=Hl(Xt)[0],n=je().memoizedState;return[e,n]},useMutableSource:au,useSyncExternalStore:uu,useId:_u,unstable_isNewReconciler:!1};function Ne(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function _o(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ul={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=un(e),o=$e(r,l);o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,l),n!==null&&(Ae(n,e,l,r),Er(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=un(e),o=$e(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,l),n!==null&&(Ae(n,e,l,r),Er(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=un(e),l=$e(t,r);l.tag=2,n!=null&&(l.callback=n),n=sn(e,l,r),n!==null&&(Ae(n,e,r,t),Er(n,e,r))}};function ks(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Ft(t,r)||!Ft(l,o):!0}function Cu(e,n,t){var r=!1,l=fn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(l=fe(n)?jn:le.current,r=n.contextTypes,o=(r=r!=null)?Zn(e,l):fn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ul,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function _s(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ul.enqueueReplaceState(n,n.state,null)}function Eo(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},fi(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Ee(o):(o=fe(n)?jn:le.current,l.context=Zn(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(_o(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ul.enqueueReplaceState(l,l.state,null),Xr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Mc(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,n,t){t=$e(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qr||(qr=!0,Oo=r),jo(e,n)},t}function Pu(e,n,t){t=$e(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){jo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jo(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Es(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Sf.bind(null,e,n,t),n.then(e,e))}function js(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ts(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$e(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var af=Qe.ReactCurrentOwner,ce=!1;function oe(e,n,t,r){n.child=e===null?lu(n,null,t,r):nt(n,e.child,t,r)}function Cs(e,n,t,r,l){t=t.render;var o=n.ref;return Yn(n,l),r=yi(e,n,t,r,o,l),t=vi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,be(e,n,l)):(D&&t&&oi(n),n.flags|=1,oe(e,n,r,l),n.child)}function Ns(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Ni(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ru(e,n,o,r,l)):(e=Rr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ft,t(i,r)&&e.ref===n.ref)return be(e,n,l)}return n.flags|=1,e=cn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ru(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Ft(o,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,be(e,n,l)}return To(e,n,t,r,l)}function Lu(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Gn,he),he|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(Gn,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,U(Gn,he),he|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,U(Gn,he),he|=r;return oe(e,n,l,t),n.child}function Au(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function To(e,n,t,r,l){var o=fe(t)?jn:le.current;return o=Zn(n,o),Yn(n,l),t=yi(e,n,t,r,o,l),r=vi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,be(e,n,l)):(D&&r&&oi(n),n.flags|=1,oe(e,n,t,l),n.child)}function Ps(e,n,t,r,l){if(fe(t)){var o=!0;Hr(n)}else o=!1;if(Yn(n,l),n.stateNode===null)Cr(e,n),Cu(n,t,r),Eo(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var u=i.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=fe(t)?jn:le.current,d=Zn(n,d));var g=t.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==d)&&_s(n,i,r,d),qe=!1;var h=n.memoizedState;i.state=h,Xr(n,r,i,l),u=n.memoizedState,a!==r||h!==u||de.current||qe?(typeof g=="function"&&(_o(n,t,g,r),u=n.memoizedState),(a=qe||ks(n,t,a,r,h,u,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),i.props=r,i.state=u,i.context=d,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,iu(e,n),a=n.memoizedProps,d=n.type===n.elementType?a:Ne(n.type,a),i.props=d,m=n.pendingProps,h=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=fe(t)?jn:le.current,u=Zn(n,u));var x=t.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||h!==u)&&_s(n,i,r,u),qe=!1,h=n.memoizedState,i.state=h,Xr(n,r,i,l);var w=n.memoizedState;a!==m||h!==w||de.current||qe?(typeof x=="function"&&(_o(n,t,x,r),w=n.memoizedState),(d=qe||ks(n,t,d,r,h,w,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),i.props=r,i.state=w,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Co(e,n,t,r,o,l)}function Co(e,n,t,r,l,o){Au(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&hs(n,t,!1),be(e,n,o);r=n.stateNode,af.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=nt(n,e.child,null,o),n.child=nt(n,null,a,o)):oe(e,n,a,o),n.memoizedState=r.state,l&&hs(n,t,!0),n.child}function Mu(e){var n=e.stateNode;n.pendingContext?ps(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ps(e,n.context,!1),pi(e,n.containerInfo)}function Rs(e,n,t,r,l){return et(),si(l),n.flags|=256,oe(e,n,t,r),n.child}var No={dehydrated:null,treeContext:null,retryLane:0};function Po(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,n,t){var r=n.pendingProps,l=F.current,o=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(F,l&1),e===null)return So(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=fl(i,r,0,null),e=En(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Po(t),n.memoizedState=No,e):Si(n,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return uf(e,n,i,r,a,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=cn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=cn(a,o):(o=En(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Po(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=No,r}return o=e.child,e=o.sibling,r=cn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Si(e,n){return n=fl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&si(r),nt(n,e.child,null,t),e=Si(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function uf(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Wl(Error(v(422))),mr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=fl({mode:"visible",children:r.children},l,0,null),o=En(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&nt(n,e.child,null,i),n.child.memoizedState=Po(i),n.memoizedState=No,o);if(!(n.mode&1))return mr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Wl(o,r,void 0),mr(e,n,i,r)}if(a=(i&e.childLanes)!==0,ce||a){if(r=q,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Xe(e,l),Ae(r,e,l,-1))}return Ci(),r=Wl(Error(v(421))),mr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=kf.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,me=on(l.nextSibling),ge=n,D=!0,Re=null,e!==null&&(we[Se++]=He,we[Se++]=We,we[Se++]=Tn,He=e.id,We=e.overflow,Tn=n),n=Si(n,r.children),n.flags|=4096,n)}function Ls(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ko(e.return,n,t)}function $l(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Ou(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,t,n);else if(e.tag===19)Ls(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(F,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&br(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),$l(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&br(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}$l(n,!0,t,null,o);break;case"together":$l(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Cr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function be(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=cn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=cn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cf(e,n,t){switch(n.tag){case 3:Mu(n),et();break;case 5:su(n);break;case 1:fe(n.type)&&Hr(n);break;case 4:pi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;U(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?Uu(e,n,t):(U(F,F.current&1),e=be(e,n,t),e!==null?e.sibling:null);U(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ou(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return be(e,n,t)}var Iu,Ro,zu,Du;Iu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ro=function(){};zu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,kn(De.current);var o=null;switch(t){case"input":l=ql(e,l),r=ql(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=eo(e,l),r=eo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}to(t,r);var i;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(At.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(o||(o=[]),o.push(d,t)),t=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(At.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),o||a===u||(o=[])):(o=o||[]).push(d,u))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Du=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!D)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function df(e,n,t){var r=n.pendingProps;switch(ii(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Br(),te(n),null;case 3:return r=n.stateNode,tt(),I(de),I(le),mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Do(Re),Re=null))),Ro(e,n),te(n),null;case 5:hi(n);var l=kn(Vt.current);if(t=n.type,e!==null&&n.stateNode!=null)zu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return te(n),null}if(e=kn(De.current),pr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ie]=n,r[Wt]=o,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<St.length;l++)O(St[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Bi(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":Wi(r,o),O("invalid",r)}to(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",""+a]):At.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&O("scroll",r)}switch(t){case"input":lr(r),Hi(r,o,!0);break;case"textarea":lr(r),$i(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Ie]=n,e[Wt]=r,Iu(e,n,!1,!1),n.stateNode=e;e:{switch(i=ro(t,r),t){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<St.length;l++)O(St[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Bi(e,r),l=ql(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Wi(e,r),l=eo(e,r),O("invalid",e);break;default:l=r}to(t,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?ma(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pa(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Mt(e,u):typeof u=="number"&&Mt(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(At.hasOwnProperty(o)?u!=null&&o==="onScroll"&&O("scroll",e):u!=null&&Go(e,o,u,i))}switch(t){case"input":lr(e),Hi(e,r,!1);break;case"textarea":lr(e),$i(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Fr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Du(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=kn(Vt.current),kn(De.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ie]=n,(o=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ie]=n,n.stateNode=r}return te(n),null;case 13:if(I(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&me!==null&&n.mode&1&&!(n.flags&128))tu(),et(),n.flags|=98560,o=!1;else if(o=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Ie]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),o=!1}else Re!==null&&(Do(Re),Re=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?Q===0&&(Q=3):Ci())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Ro(e,n),e===null&&Bt(n.stateNode.containerInfo),te(n),null;case 10:return ci(n.type._context),te(n),null;case 17:return fe(n.type)&&Br(),te(n),null;case 19:if(I(F),o=n.memoizedState,o===null)return te(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)gt(o,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=br(e),i!==null){for(n.flags|=128,gt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(F,F.current&1|2),n.child}e=e.sibling}o.tail!==null&&G()>lt&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304)}else{if(!r)if(e=br(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!D)return te(n),null}else 2*G()-o.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=G(),n.sibling=null,t=F.current,U(F,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Ti(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function ff(e,n){switch(ii(n),n.tag){case 1:return fe(n.type)&&Br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),I(de),I(le),mi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return hi(n),null;case 13:if(I(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(F),null;case 4:return tt(),null;case 10:return ci(n.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var gr=!1,re=!1,pf=typeof WeakSet=="function"?WeakSet:Set,k=null;function Vn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function Lo(e,n,t){try{t()}catch(r){W(e,n,r)}}var As=!1;function hf(e,n){if(ho=Ir,e=$a(),li(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,a=-1,u=-1,d=0,g=0,m=e,h=null;n:for(;;){for(var x;m!==t||l!==0&&m.nodeType!==3||(a=i+l),m!==o||r!==0&&m.nodeType!==3||(u=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break n;if(h===t&&++d===l&&(a=i),h===o&&++g===r&&(u=i),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(mo={focusedElem:e,selectionRange:t},Ir=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,z=w.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?S:Ne(n.type,S),z);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){W(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return w=As,As=!1,w}function Nt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Lo(n,t,o)}l=l.next}while(l!==r)}}function cl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ao(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fu(e){var n=e.alternate;n!==null&&(e.alternate=null,Fu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ie],delete n[Wt],delete n[vo],delete n[Kd],delete n[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(Mo(e,n,t),e=e.sibling;e!==null;)Mo(e,n,t),e=e.sibling}function Uo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uo(e,n,t),e=e.sibling;e!==null;)Uo(e,n,t),e=e.sibling}var J=null,Pe=!1;function Ke(e,n,t){for(t=t.child;t!==null;)Hu(e,n,t),t=t.sibling}function Hu(e,n,t){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(tl,t)}catch{}switch(t.tag){case 5:re||Vn(t,n);case 6:var r=J,l=Pe;J=null,Ke(e,n,t),J=r,Pe=l,J!==null&&(Pe?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Pe?(e=J,t=t.stateNode,e.nodeType===8?Il(e.parentNode,t):e.nodeType===1&&Il(e,t),zt(e)):Il(J,t.stateNode));break;case 4:r=J,l=Pe,J=t.stateNode.containerInfo,Pe=!0,Ke(e,n,t),J=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Lo(t,n,i),l=l.next}while(l!==r)}Ke(e,n,t);break;case 1:if(!re&&(Vn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){W(t,n,a)}Ke(e,n,t);break;case 21:Ke(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ke(e,n,t),re=r):Ke(e,n,t);break;default:Ke(e,n,t)}}function Us(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pf),n.forEach(function(r){var l=_f.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ce(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Pe=!1;break e;case 3:J=a.stateNode.containerInfo,Pe=!0;break e;case 4:J=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(J===null)throw Error(v(160));Hu(o,i,l),J=null,Pe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){W(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wu(n,e),n=n.sibling}function Wu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(n,e),Ue(e),r&4){try{Nt(3,e,e.return),cl(3,e)}catch(S){W(e,e.return,S)}try{Nt(5,e,e.return)}catch(S){W(e,e.return,S)}}break;case 1:Ce(n,e),Ue(e),r&512&&t!==null&&Vn(t,t.return);break;case 5:if(Ce(n,e),Ue(e),r&512&&t!==null&&Vn(t,t.return),e.flags&32){var l=e.stateNode;try{Mt(l,"")}catch(S){W(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ca(l,o),ro(a,i);var d=ro(a,o);for(i=0;i<u.length;i+=2){var g=u[i],m=u[i+1];g==="style"?ma(l,m):g==="dangerouslySetInnerHTML"?pa(l,m):g==="children"?Mt(l,m):Go(l,g,m,d)}switch(a){case"input":Jl(l,o);break;case"textarea":da(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Xn(l,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?Xn(l,!!o.multiple,o.defaultValue,!0):Xn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Wt]=o}catch(S){W(e,e.return,S)}}break;case 6:if(Ce(n,e),Ue(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){W(e,e.return,S)}}break;case 3:if(Ce(n,e),Ue(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{zt(n.containerInfo)}catch(S){W(e,e.return,S)}break;case 4:Ce(n,e),Ue(e);break;case 13:Ce(n,e),Ue(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ei=G())),r&4&&Us(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(re=(d=re)||g,Ce(n,e),re=d):Ce(n,e),Ue(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(k=e,g=e.child;g!==null;){for(m=k=g;k!==null;){switch(h=k,x=h.child,h.tag){case 0:case 11:case 14:case 15:Nt(4,h,h.return);break;case 1:Vn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(S){W(r,t,S)}}break;case 5:Vn(h,h.return);break;case 22:if(h.memoizedState!==null){Is(m);continue}}x!==null?(x.return=h,k=x):Is(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ha("display",i))}catch(S){W(e,e.return,S)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(S){W(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ce(n,e),Ue(e),r&4&&Us(e);break;case 21:break;default:Ce(n,e),Ue(e)}}function Ue(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Bu(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mt(l,""),r.flags&=-33);var o=Ms(e);Uo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ms(e);Mo(e,a,i);break;default:throw Error(v(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mf(e,n,t){k=e,$u(e)}function $u(e,n,t){for(var r=(e.mode&1)!==0;k!==null;){var l=k,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||gr;if(!i){var a=l.alternate,u=a!==null&&a.memoizedState!==null||re;a=gr;var d=re;if(gr=i,(re=u)&&!d)for(k=l;k!==null;)i=k,u=i.child,i.tag===22&&i.memoizedState!==null?zs(l):u!==null?(u.return=i,k=u):zs(l);for(;o!==null;)k=o,$u(o),o=o.sibling;k=l,gr=a,re=d}Os(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,k=o):Os(e)}}function Os(e){for(;k!==null;){var n=k;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||cl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ne(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&xs(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xs(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&zt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||n.flags&512&&Ao(n)}catch(h){W(n,n.return,h)}}if(n===e){k=null;break}if(t=n.sibling,t!==null){t.return=n.return,k=t;break}k=n.return}}function Is(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var t=n.sibling;if(t!==null){t.return=n.return,k=t;break}k=n.return}}function zs(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{cl(4,n)}catch(u){W(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){W(n,l,u)}}var o=n.return;try{Ao(n)}catch(u){W(n,o,u)}break;case 5:var i=n.return;try{Ao(n)}catch(u){W(n,i,u)}}}catch(u){W(n,n.return,u)}if(n===e){k=null;break}var a=n.sibling;if(a!==null){a.return=n.return,k=a;break}k=n.return}}var gf=Math.ceil,Yr=Qe.ReactCurrentDispatcher,ki=Qe.ReactCurrentOwner,_e=Qe.ReactCurrentBatchConfig,A=0,q=null,X=null,Z=0,he=0,Gn=hn(0),Q=0,Qt=null,Nn=0,dl=0,_i=0,Pt=null,ue=null,Ei=0,lt=1/0,Fe=null,qr=!1,Oo=null,an=null,yr=!1,nn=null,Jr=0,Rt=0,Io=null,Nr=-1,Pr=0;function ie(){return A&6?G():Nr!==-1?Nr:Nr=G()}function un(e){return e.mode&1?A&2&&Z!==0?Z&-Z:Jd.transition!==null?(Pr===0&&(Pr=Ca()),Pr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ua(e.type)),e):1}function Ae(e,n,t,r){if(50<Rt)throw Rt=0,Io=null,Error(v(185));Yt(e,t,r),(!(A&2)||e!==q)&&(e===q&&(!(A&2)&&(dl|=t),Q===4&&Ze(e,Z)),pe(e,r),t===1&&A===0&&!(n.mode&1)&&(lt=G()+500,sl&&mn()))}function pe(e,n){var t=e.callbackNode;Jc(e,n);var r=Or(e,e===q?Z:0);if(r===0)t!==null&&Xi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xi(t),n===1)e.tag===0?qd(Ds.bind(null,e)):Za(Ds.bind(null,e)),bd(function(){!(A&6)&&mn()}),t=null;else{switch(Na(r)){case 1:t=Yo;break;case 4:t=ja;break;case 16:t=Ur;break;case 536870912:t=Ta;break;default:t=Ur}t=qu(t,Vu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Vu(e,n){if(Nr=-1,Pr=0,A&6)throw Error(v(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=Or(e,e===q?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Zr(e,r);else{n=r;var l=A;A|=2;var o=Xu();(q!==e||Z!==n)&&(Fe=null,lt=G()+500,_n(e,n));do try{xf();break}catch(a){Gu(e,a)}while(1);ui(),Yr.current=o,A=l,X!==null?n=0:(q=null,Z=0,n=Q)}if(n!==0){if(n===2&&(l=ao(e),l!==0&&(r=l,n=zo(e,l))),n===1)throw t=Qt,_n(e,0),Ze(e,r),pe(e,G()),t;if(n===6)Ze(e,r);else{if(l=e.current.alternate,!(r&30)&&!yf(l)&&(n=Zr(e,r),n===2&&(o=ao(e),o!==0&&(r=o,n=zo(e,o))),n===1))throw t=Qt,_n(e,0),Ze(e,r),pe(e,G()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:xn(e,ue,Fe);break;case 3:if(Ze(e,r),(r&130023424)===r&&(n=Ei+500-G(),10<n)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(xn.bind(null,e,ue,Fe),n);break}xn(e,ue,Fe);break;case 4:if(Ze(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Le(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gf(r/1960))-r,10<r){e.timeoutHandle=yo(xn.bind(null,e,ue,Fe),r);break}xn(e,ue,Fe);break;case 5:xn(e,ue,Fe);break;default:throw Error(v(329))}}}return pe(e,G()),e.callbackNode===t?Vu.bind(null,e):null}function zo(e,n){var t=Pt;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=Zr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Do(n)),e}function Do(e){ue===null?ue=e:ue.push.apply(ue,e)}function yf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Me(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ze(e,n){for(n&=~_i,n&=~dl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Ds(e){if(A&6)throw Error(v(327));qn();var n=Or(e,0);if(!(n&1))return pe(e,G()),null;var t=Zr(e,n);if(e.tag!==0&&t===2){var r=ao(e);r!==0&&(n=r,t=zo(e,r))}if(t===1)throw t=Qt,_n(e,0),Ze(e,n),pe(e,G()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xn(e,ue,Fe),pe(e,G()),null}function ji(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(lt=G()+500,sl&&mn())}}function Pn(e){nn!==null&&nn.tag===0&&!(A&6)&&qn();var n=A;A|=1;var t=_e.transition,r=M;try{if(_e.transition=null,M=1,e)return e()}finally{M=r,_e.transition=t,A=n,!(A&6)&&mn()}}function Ti(){he=Gn.current,I(Gn)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xd(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(ii(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:tt(),I(de),I(le),mi();break;case 5:hi(r);break;case 4:tt();break;case 13:I(F);break;case 19:I(F);break;case 10:ci(r.type._context);break;case 22:case 23:Ti()}t=t.return}if(q=e,X=e=cn(e.current,null),Z=he=n,Q=0,Qt=null,_i=dl=Nn=0,ue=Pt=null,Sn!==null){for(n=0;n<Sn.length;n++)if(t=Sn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}Sn=null}return e}function Gu(e,n){do{var t=X;try{if(ui(),jr.current=Kr,Qr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Qr=!1}if(Cn=0,Y=b=B=null,Ct=!1,Gt=0,ki.current=null,t===null||t.return===null){Q=1,Qt=n,X=null;break}e:{var o=e,i=t.return,a=t,u=n;if(n=Z,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=js(i);if(x!==null){x.flags&=-257,Ts(x,i,a,o,n),x.mode&1&&Es(o,d,n),n=x,u=d;var w=n.updateQueue;if(w===null){var S=new Set;S.add(u),n.updateQueue=S}else w.add(u);break e}else{if(!(n&1)){Es(o,d,n),Ci();break e}u=Error(v(426))}}else if(D&&a.mode&1){var z=js(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ts(z,i,a,o,n),si(rt(u,a));break e}}o=u=rt(u,a),Q!==4&&(Q=2),Pt===null?Pt=[o]:Pt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Nu(o,u,n);vs(o,f);break e;case 1:a=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(an===null||!an.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=Pu(o,a,n);vs(o,y);break e}}o=o.return}while(o!==null)}Qu(t)}catch(_){n=_,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function Xu(){var e=Yr.current;return Yr.current=Kr,e===null?Kr:e}function Ci(){(Q===0||Q===3||Q===2)&&(Q=4),q===null||!(Nn&268435455)&&!(dl&268435455)||Ze(q,Z)}function Zr(e,n){var t=A;A|=2;var r=Xu();(q!==e||Z!==n)&&(Fe=null,_n(e,n));do try{vf();break}catch(l){Gu(e,l)}while(1);if(ui(),A=t,Yr.current=r,X!==null)throw Error(v(261));return q=null,Z=0,Q}function vf(){for(;X!==null;)bu(X)}function xf(){for(;X!==null&&!$c();)bu(X)}function bu(e){var n=Yu(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Qu(e):X=n,ki.current=null}function Qu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ff(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,X=null;return}}else if(t=df(t,n,he),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Q===0&&(Q=5)}function xn(e,n,t){var r=M,l=_e.transition;try{_e.transition=null,M=1,wf(e,n,t,r)}finally{_e.transition=l,M=r}return null}function wf(e,n,t,r){do qn();while(nn!==null);if(A&6)throw Error(v(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Zc(e,o),e===q&&(X=q=null,Z=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yr||(yr=!0,qu(Ur,function(){return qn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=_e.transition,_e.transition=null;var i=M;M=1;var a=A;A|=4,ki.current=null,hf(e,t),Wu(t,e),Fd(mo),Ir=!!ho,mo=ho=null,e.current=t,mf(t),Vc(),A=a,M=i,_e.transition=o}else e.current=t;if(yr&&(yr=!1,nn=e,Jr=l),o=e.pendingLanes,o===0&&(an=null),bc(t.stateNode),pe(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Oo,Oo=null,e;return Jr&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Io?Rt++:(Rt=0,Io=e):Rt=0,mn(),null}function qn(){if(nn!==null){var e=Na(Jr),n=_e.transition,t=M;try{if(_e.transition=null,M=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Jr=0,A&6)throw Error(v(331));var l=A;for(A|=4,k=e.current;k!==null;){var o=k,i=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(k=d;k!==null;){var g=k;switch(g.tag){case 0:case 11:case 15:Nt(8,g,o)}var m=g.child;if(m!==null)m.return=g,k=m;else for(;k!==null;){g=k;var h=g.sibling,x=g.return;if(Fu(g),g===d){k=null;break}if(h!==null){h.return=x,k=h;break}k=x}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var z=S.sibling;S.sibling=null,S=z}while(S!==null)}}k=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,k=i;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,k=f;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){i=k;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,k=p;else e:for(i=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(_){W(a,a.return,_)}if(a===i){k=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,k=y;break e}k=a.return}}if(A=l,mn(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{M=t,_e.transition=n}}return!1}function Fs(e,n,t){n=rt(t,n),n=Nu(e,n,1),e=sn(e,n,1),n=ie(),e!==null&&(Yt(e,1,n),pe(e,n))}function W(e,n,t){if(e.tag===3)Fs(e,e,t);else for(;n!==null;){if(n.tag===3){Fs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=rt(t,e),e=Pu(n,e,1),n=sn(n,e,1),e=ie(),n!==null&&(Yt(n,1,e),pe(n,e));break}}n=n.return}}function Sf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(Z&t)===t&&(Q===4||Q===3&&(Z&130023424)===Z&&500>G()-Ei?_n(e,0):_i|=t),pe(e,n)}function Ku(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=ie();e=Xe(e,n),e!==null&&(Yt(e,n,t),pe(e,t))}function kf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ku(e,t)}function _f(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),Ku(e,t)}var Yu;Yu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,cf(e,n,t);ce=!!(e.flags&131072)}else ce=!1,D&&n.flags&1048576&&eu(n,$r,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Cr(e,n),e=n.pendingProps;var l=Zn(n,le.current);Yn(n,t),l=yi(null,n,r,e,l,t);var o=vi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(o=!0,Hr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fi(n),l.updater=ul,n.stateNode=l,l._reactInternals=n,Eo(n,r,e,t),n=Co(null,n,r,!0,o,t)):(n.tag=0,D&&o&&oi(n),oe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Cr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=jf(r),e=Ne(r,e),l){case 0:n=To(null,n,r,e,t);break e;case 1:n=Ps(null,n,r,e,t);break e;case 11:n=Cs(null,n,r,e,t);break e;case 14:n=Ns(null,n,r,Ne(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),To(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),Ps(e,n,r,l,t);case 3:e:{if(Mu(n),e===null)throw Error(v(387));r=n.pendingProps,o=n.memoizedState,l=o.element,iu(e,n),Xr(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=rt(Error(v(423)),n),n=Rs(e,n,r,t,l);break e}else if(r!==l){l=rt(Error(v(424)),n),n=Rs(e,n,r,t,l);break e}else for(me=on(n.stateNode.containerInfo.firstChild),ge=n,D=!0,Re=null,t=lu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===l){n=be(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return su(n),e===null&&So(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,go(r,l)?i=null:o!==null&&go(r,o)&&(n.flags|=32),Au(e,n),oe(e,n,i,t),n.child;case 6:return e===null&&So(n),null;case 13:return Uu(e,n,t);case 4:return pi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),Cs(e,n,r,l,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,U(Vr,r._currentValue),r._currentValue=i,o!==null)if(Me(o.value,i)){if(o.children===l.children&&!de.current){n=be(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=$e(-1,t&-t),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ko(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(v(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),ko(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Yn(n,t),l=Ee(l),r=r(l),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,l=Ne(r,n.pendingProps),l=Ne(r.type,l),Ns(e,n,r,l,t);case 15:return Ru(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),Cr(e,n),n.tag=1,fe(r)?(e=!0,Hr(n)):e=!1,Yn(n,t),Cu(n,r,l),Eo(n,r,l,t),Co(null,n,r,!0,e,t);case 19:return Ou(e,n,t);case 22:return Lu(e,n,t)}throw Error(v(156,n.tag))};function qu(e,n){return Ea(e,n)}function Ef(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new Ef(e,n,t,r)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return Ni(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bo)return 11;if(e===Qo)return 14}return 2}function cn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Rr(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Ni(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case On:return En(t.children,l,o,n);case Xo:i=8,l|=8;break;case bl:return e=ke(12,t,n,l|2),e.elementType=bl,e.lanes=o,e;case Ql:return e=ke(13,t,n,l),e.elementType=Ql,e.lanes=o,e;case Kl:return e=ke(19,t,n,l),e.elementType=Kl,e.lanes=o,e;case sa:return fl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oa:i=10;break e;case ia:i=9;break e;case bo:i=11;break e;case Qo:i=14;break e;case Ye:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=ke(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function En(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function fl(e,n,t,r){return e=ke(22,e,r,n),e.elementType=sa,e.lanes=t,e.stateNode={isHidden:!1},e}function Vl(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function Gl(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Tf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pi(e,n,t,r,l,o,i,a,u){return e=new Tf(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ke(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fi(o),e}function Cf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ju(e){if(!e)return fn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(fe(t))return Ja(e,t,n)}return n}function Zu(e,n,t,r,l,o,i,a,u){return e=Pi(t,r,!0,e,l,o,i,a,u),e.context=Ju(null),t=e.current,r=ie(),l=un(t),o=$e(r,l),o.callback=n??null,sn(t,o,l),e.current.lanes=l,Yt(e,l,r),pe(e,r),e}function pl(e,n,t,r){var l=n.current,o=ie(),i=un(l);return t=Ju(t),n.context===null?n.context=t:n.pendingContext=t,n=$e(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(l,n,i),e!==null&&(Ae(e,l,i,o),Er(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ri(e,n){Bs(e,n),(e=e.alternate)&&Bs(e,n)}function Nf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}hl.prototype.render=Li.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));pl(e,n,null,null)};hl.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pn(function(){pl(null,e,null,null)}),n[Ge]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var n=La();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&Ma(e)}};function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hs(){}function Pf(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=el(i);o.call(d)}}var i=Zu(n,r,e,0,null,!1,!1,"",Hs);return e._reactRootContainer=i,e[Ge]=i.current,Bt(e.nodeType===8?e.parentNode:e),Pn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=el(u);a.call(d)}}var u=Pi(e,0,!1,null,null,!1,!1,"",Hs);return e._reactRootContainer=u,e[Ge]=u.current,Bt(e.nodeType===8?e.parentNode:e),Pn(function(){pl(n,u,t,r)}),u}function gl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var u=el(i);a.call(u)}}pl(n,i,e,l)}else i=Pf(t,n,e,l,r);return el(i)}Pa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wt(n.pendingLanes);t!==0&&(qo(n,t|1),pe(n,G()),!(A&6)&&(lt=G()+500,mn()))}break;case 13:Pn(function(){var r=Xe(e,1);if(r!==null){var l=ie();Ae(r,e,1,l)}}),Ri(e,1)}};Jo=function(e){if(e.tag===13){var n=Xe(e,134217728);if(n!==null){var t=ie();Ae(n,e,134217728,t)}Ri(e,134217728)}};Ra=function(e){if(e.tag===13){var n=un(e),t=Xe(e,n);if(t!==null){var r=ie();Ae(t,e,n,r)}Ri(e,n)}};La=function(){return M};Aa=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};oo=function(e,n,t){switch(n){case"input":if(Jl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(v(90));ua(r),Jl(r,l)}}}break;case"textarea":da(e,t);break;case"select":n=t.value,n!=null&&Xn(e,!!t.multiple,n,!1)}};va=ji;xa=Pn;var Rf={usingClientEntryPoint:!1,Events:[Jt,Fn,il,ga,ya,ji]},yt={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lf={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ka(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{tl=vr.inject(Lf),ze=vr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ai(n))throw Error(v(200));return Cf(e,n,null,t)};ve.createRoot=function(e,n){if(!Ai(e))throw Error(v(299));var t=!1,r="",l=ec;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Pi(e,1,!1,null,null,t,!1,r,l),e[Ge]=n.current,Bt(e.nodeType===8?e.parentNode:e),new Li(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=ka(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Pn(e)};ve.hydrate=function(e,n,t){if(!ml(n))throw Error(v(200));return gl(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!Ai(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=ec;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Zu(n,null,e,1,t??null,l,!1,o,i),e[Ge]=n.current,Bt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new hl(n)};ve.render=function(e,n,t){if(!ml(n))throw Error(v(200));return gl(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!ml(e))throw Error(v(40));return e._reactRootContainer?(Pn(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ve.unstable_batchedUpdates=ji;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ml(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return gl(e,n,t,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),na.exports=ve;var Af=na.exports,tc,Ws=Af;tc=Ws.createRoot,Ws.hydrateRoot;const Mn=(...e)=>{};Object.assign(Mn,{toast:Mn,success:Mn,error:Mn,info:Mn,warning:Mn,dismiss:()=>{}});const Mf=[{src:"https://cdn.tailwindcss.com",type:"",id:"",async:!1,defer:!1,content:""},{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",type:"",id:"",async:!1,defer:!1,content:""},{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",type:"",id:"",async:!1,defer:!1,content:""},{src:"https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js",type:"",id:"",async:!1,defer:!1,content:""},{src:"",type:"",id:"",async:!1,defer:!1,content:`
    /* ═══════════════════════════════════════════
   KAIRO — Flame wrap (vanilla port of Canvas UI <FlameWrap>)
   A fixed WebGL2 canvas follows a target element's box and burns around it.
   No DOM restructuring: the target keeps rendering normally underneath,
   so GSAP tweens, layout and text selection are untouched.
   ═══════════════════════════════════════════ */
(() => {
'use strict';

const DEFAULTS = {
  color: [0.706, 0.149, 0.102],   // --red #b4261a
  intensity: 0.7,
  height: 150,
  spread: 12,
  radius: 10,
  speed: 0.45,
  scale: 0.75,
  turbulence: 0.5,
  turbulenceScale: 0.5,
  turbulenceReach: 25,
  sparks: 1.5,
  sparkSize: 0.35,
  sparkDensity: 1,
  sparkSpeed: 1,
  rim: 2.5,
  melt: 6,
  distortion: 10,
  smoke: 1,
  ember: 2,
  scorch: 0,
  opacityFrom: null,   // element whose computed opacity drives the flame's
};

const VERT = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
out vec2 vUv;
void main () {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}\`;

const FRAG = \`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uContent;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uRectCenter;
uniform vec2 uRectHalf;
uniform float uCorner;
uniform vec3 uColor;
uniform float uIntensity;
uniform float uHeight;
uniform float uSpread;
uniform float uScale;
uniform float uTurbulence;
uniform float uTurbScale;
uniform float uTurbReach;
uniform float uSparks;
uniform float uSparkSize;
uniform float uSparkDensity;
uniform float uSparkSpeed;
uniform float uRim;
uniform float uMelt;
uniform float uDistortion;
uniform float uSmoke;
uniform float uEmber;
uniform float uScorch;
uniform float uHasContent;
uniform float uFade;

#define S(a, b, t) smoothstep(a, b, t)

vec3 permute (vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise (vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm (vec2 p) {
  mat2 m = mat2(0.8, -0.6, 0.6, 0.8);
  float v = 0.5 * snoise(p);
  p = m * p * 2.03 + vec2(11.3, 7.1);  v += 0.27 * snoise(p);
  p = m * p * 1.97 + vec2(3.7, 19.1);  v += 0.15 * snoise(p);
  p = m * p * 2.01 + vec2(8.3, 2.9);   v += 0.08 * snoise(p);
  return v * 0.5 + 0.5;
}

float fbm2 (vec2 p) {
  float v = 0.62 * snoise(p);
  v += 0.31 * snoise(mat2(0.8, -0.6, 0.6, 0.8) * p * 2.13 + vec2(5.2, 1.3));
  return v * 0.54 + 0.5;
}

vec2 turbulence (vec2 p) {
  float freq = 12.0 * clamp(uScale, 0.05, 1.0) * clamp(uTurbScale, 0.2, 3.0);
  mat2 rot = mat2(0.6, -0.8, 0.8, 0.6);
  for (float i = 0.0; i < 7.0; i++) {
    float phase = freq * (p * rot).y + 6.0 * uTime + i;
    p += uTurbulence * rot[0] * sin(phase) / freq;
    rot *= mat2(0.6, -0.8, 0.8, 0.6);
    freq *= 1.2;
  }
  return p;
}

vec3 hash3 (vec2 p) {
  vec3 q = vec3(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)), dot(p, vec2(419.2, 371.9)));
  return fract(sin(q) * 43758.5453);
}

float sdRoundRect (vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main () {
  vec2 frag = vUv * uResolution;
  vec2 rel = frag - uRectCenter;
  float unit = max(uHeight, 24.0);
  float corner = min(uCorner, min(uRectHalf.x, uRectHalf.y));
  float spreadPx = max(uSpread, 8.0);
  float t = uTime;
  float detail = clamp(uScale, 0.05, 1.0);

  float d0 = sdRoundRect(rel, uRectHalf, corner);
  float px = rel.x / unit;
  float py = rel.y / unit;

  float yA = max(rel.y - uRectHalf.y, 0.0) / unit;
  float sway = snoise(vec2(px * 1.1, t * 0.5)) * 0.55 + snoise(vec2(px * 2.4, t * 0.9 + 41.0)) * 0.25;
  float sx = px + yA * sway;
  float env = fbm2(vec2(sx * 1.6 * detail + 3.7, t * 0.55 - yA * 0.4));
  float env2 = fbm2(vec2(sx * 3.6 * detail, t * 0.85 + 17.0 - yA * 0.6));
  float tongue = clamp(0.75 * S(0.3, 0.9, env) + 0.5 * S(0.4, 0.95, env2), 0.0, 1.0);

  float meltPx = max(uMelt, 1.0);
  float biteTop = (3.0 + meltPx * 1.4) * (0.35 + 0.65 * tongue) + 2.0 * snoise(vec2(px * 5.0 * detail, t * 1.1 + 5.0));
  float yF = uRectHalf.y - biteTop;
  float frontTop = rel.y - yF;

  float perim = fbm2(rel * (1.9 / unit) * detail + vec2(0.0, t * 0.4) + 31.0);
  float biteSB = 3.0 + meltPx * (0.25 + 0.75 * perim);
  float frontSB = d0 + biteSB;

  float wTop = S(-0.62 * unit, -0.1 * unit, rel.y - uRectHalf.y) * S(10.0, -30.0, abs(rel.x) - (uRectHalf.x - corner));
  float front = mix(frontSB, frontTop, wTop);

  float reach = mix(spreadPx * 0.9, unit * (0.2 + 0.45 * tongue), wTop);
  float q = front / reach;

  vec2 np = vec2(px * 2.3, py * 1.25 - t * 1.85) * detail;
  np = turbulence(np);
  float n = fbm(np);

  float win = S(-0.08, 0.02, q);
  float root = exp(-abs(q) * 5.0);
  float ridge = 1.0 - abs(2.0 * n - 1.0);
  float flameH = mix(1.0, 0.5 + 0.6 * tongue, wTop);
  float g = max(q, 0.0) / flameH;
  float shred = fbm2(np * 1.9 + 63.0);
  g *= 1.0 + 0.7 * (shred - 0.5) * S(0.2, 0.8, g);
  float dens = n * 0.95 + ridge * 0.45 - 0.18 + (1.0 - min(g, 1.0)) * 0.3 - g * (0.9 + 0.25 * n);
  dens = clamp(dens * 2.4, 0.0, 1.0) * win;
  dens *= mix(1.0 - S(0.32, 1.05, q), 1.0 - S(0.9, 1.2, g), wTop);
  float body = dens * dens * (3.0 - 2.0 * dens);
  float emis = clamp(uIntensity, 0.0, 2.0);
  float e = body * (0.55 + 0.75 * root) * (0.45 + 0.55 * n) + win * root * (0.1 + 0.4 * n);
  e *= mix(0.45, 1.0, wTop) * max(emis, 0.001);

  vec3 hot = mix(uColor, vec3(1.0), 0.35);
  vec3 deep = mix(uColor, uColor * uColor, 0.5) * 0.9;
  float ramp = 1.0 - exp(-e * 2.4);
  vec3 fireCol = mix(deep, uColor, S(0.0, 0.55, ramp));
  float core = ramp * (0.45 + 0.55 * exp(-g * 2.2)) * (0.5 + 0.5 * n);
  fireCol = mix(fireCol, hot, S(0.7, 1.05, core));
  fireCol *= 0.8 + 0.4 * ramp;
  float fireA = clamp(1.0 - exp(-e * 3.4), 0.0, 1.0);

  float halo = exp(-max(front, 0.0) / (spreadPx * 1.2)) * S(0.0, 3.0, front)
    * (0.5 + 0.5 * n) * 0.3 * clamp(uRim, 0.0, 2.0) * mix(1.0, 0.45, wTop);
  vec3 glow = uColor * halo * clamp(uIntensity, 0.0, 2.0);

  if (uSparks > 0.001) {
    float sSpeed = max(uSparkSpeed, 0.05);
    float sCells = 5.0 * clamp(uSparkDensity, 0.3, 2.5);
    float sSize = clamp(uSparkSize, 0.2, 3.0);
    float gate = S(-0.05, 0.1, q) * (1.0 - S(1.3, 2.2, q)) * wTop;
    float spark = 0.0;
    for (float L = 0.0; L < 2.0; L++) {
      float speed = 1.5 * sSpeed * (0.75 + 0.5 * L);
      vec2 ps = vec2(px, py - t * speed);
      ps.x += 0.08 * snoise(vec2(py * 0.9 + L * 5.0, t * 0.5));
      float cells = sCells * (1.0 + 0.6 * L);
      vec2 cl = floor(ps * cells) + L * 19.0;
      vec2 fr = fract(ps * cells);
      vec3 rnd = hash3(cl);
      vec3 rnd2 = hash3(cl + 7.3);
      float on = step(rnd2.x, 0.42);
      float life = fract(rnd.z + t * sSpeed * (0.3 + 0.5 * rnd2.x));
      vec2 ppos = vec2(0.5) + 0.56 * (rnd.xy - 0.5);
      ppos.x += 0.14 * sin(t * (0.7 + rnd.z * 2.8) + rnd.y * 6.2832)
        + 0.1 * snoise(vec2(t * 0.6 + rnd.x * 9.0, cl.y * 0.7))
        + (life - 0.5) * 0.5 * (rnd2.y - 0.5);
      ppos.y += (life - 0.5) * 0.3 * rnd2.y;
      float tw = S(0.02, 0.2, life) * S(1.0, 0.55, life);
      tw *= 0.75 + 0.25 * sin(t * (6.0 + rnd2.z * 9.0) + rnd.x * 6.2832);
      vec2 pd = (fr - ppos) / cells * unit;
      pd.y *= 0.55 + 0.3 * rnd2.z;
      float dp = length(pd);
      float r = (0.004 + 0.014 * rnd.y * rnd.y) * unit * sSize * mix(1.15, 0.55, life);
      float bmask = S(0.5, 0.32, max(abs(fr.x - 0.5), abs(fr.y - 0.5)));
      float sbody = exp(-dp * dp / (r * r));
      float sbloom = exp(-dp * dp / (r * r * 6.0)) * 0.3;
      spark += (sbody + sbloom) * tw * tw * on * bmask * (1.0 - 0.35 * L);
    }
    spark *= gate * uSparks;
    fireCol += mix(uColor, vec3(1.0), 0.55) * spark * 1.6;
    fireA = clamp(fireA + spark * 0.85, 0.0, 1.0);
  }

  vec2 edgePx = min(frag, uResolution - frag);
  float fadeW = max(24.0, spreadPx * 0.75);
  float fade = S(0.0, fadeW, edgePx.x) * S(0.0, fadeW, edgePx.y);
  fireA *= fade;
  glow *= fade;
  halo *= fade;

  float wisp = S(0.45, 0.9, fbm2(np * 0.55 + vec2(0.0, 17.0)));
  float smoke = S(1.55, 1.05, g) * S(0.85, 1.15, g) * (1.0 - body) * wTop
    * wisp * 0.055 * clamp(uSmoke, 0.0, 2.0) * fade;
  vec3 smokeCol = mix(vec3(0.5), uColor, 0.5);

  if (uHasContent < 0.5) {
    float sA = clamp(smoke, 0.0, 1.0);
    float a = clamp(fireA + sA * (1.0 - fireA), 0.0, 1.0);
    outColor = vec4(fireCol * fireA + glow + smokeCol * sA * (1.0 - fireA), clamp(a + halo * 0.6, 0.0, 1.0)) * uFade;
    return;
  }

  vec2 cUv = (rel + uRectHalf) / (2.0 * uRectHalf);
  float inRect = step(abs(cUv.x - 0.5), 0.5) * step(abs(cUv.y - 0.5), 0.5);
  float heatBand = exp(-abs(front) / max(uTurbReach, 4.0));
  vec2 wob = vec2(snoise(np * 1.7 + 9.0), snoise(np * 1.7 + 27.0));
  vec2 disp = wob * min(uDistortion, 32.0) * heatBand;
  vec2 cUvD = clamp(cUv + disp / (2.0 * uRectHalf), vec2(0.002), vec2(0.998));
  vec4 content = texture(uContent, vec2(cUvD.x, 1.0 - cUvD.y));
  float burn = clamp(uIntensity, 0.0, 1.0);
  float depth = max(-front, 0.0);
  float charPatch = 0.5 + 0.5 * fbm2(rel * (2.6 / unit) * detail + 57.0);
  float charW = mix(4.0, 6.0 + meltPx * 1.6, wTop) * charPatch;
  float charT = (1.0 - S(charW, charW * 2.4, depth));
  content.rgb = mix(content.rgb, content.rgb * vec3(0.22, 0.19, 0.17), clamp(charT * 0.85 * burn * clamp(uScorch, 0.0, 2.0), 0.0, 1.0));
  float emberW = mix(2.5, 5.5, wTop);
  float emberN = 0.3 + 0.7 * fbm2(np * 2.2 + 73.0);
  float emberK = clamp(uEmber, 0.0, 2.0);
  float ember = exp(-depth / emberW) * emberN * emberK;
  float whiteHot = exp(-depth / (emberW * 0.4)) * emberN * emberN * emberK;
  content.rgb = mix(content.rgb, uColor * 1.2, clamp(ember, 0.0, 1.0) * burn);
  content.rgb = mix(content.rgb, mix(uColor, vec3(1.0), 0.3) * 1.2, clamp(whiteHot, 0.0, 1.0) * burn);
  float dn = fbm2(rel * (3.2 / unit) * detail + vec2(0.0, t * 0.5) + 91.0);
  float dw = mix(2.0, 5.0, wTop);
  float dissolve = S(-dw, dw, front + (dn - 0.5) * dw * 2.5);
  float cA = content.a * (1.0 - dissolve) * inRect;
  float smk = smoke * (1.0 - cA);
  float baseA = min(cA + smk, 1.0);
  vec3 base = content.rgb * cA + smokeCol * smk;
  vec3 col = fireCol * fireA + base * (1.0 - fireA) + glow;
  float alpha = clamp(fireA + baseA * (1.0 - fireA) + halo * 0.5, 0.0, 1.0);
  outColor = vec4(col, alpha) * uFade;
}\`;

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const instances = [];

/* ── one canvas, one WebGL context, every flame drawn into it ──
   Separate contexts per element would push the page over the browser's
   per-document WebGL limit and evict the recipe gallery's context. */
let canvas = null, gl = null, prog = null, U = null, dpr = 1, cw = 0, ch = 0;

function initGL() {
  if (canvas) return !!gl;
  canvas = document.createElement('canvas');
  canvas.className = 'flame-layer';
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position: 'fixed', inset: '0', width: '100%', height: '100%',
    pointerEvents: 'none', zIndex: '39'
  });
  document.body.appendChild(canvas);
  gl = canvas.getContext('webgl2', {
    alpha: true, depth: false, stencil: false, antialias: false, premultipliedAlpha: true
  });
  if (!gl) { canvas.remove(); canvas = null; return false; }

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error('[flame]', gl.getShaderInfoLog(sh));
    return sh;
  };
  prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  U = {};
  const n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; i++) { const info = gl.getActiveUniform(prog, i); U[info.name] = gl.getUniformLocation(prog, info.name); }

  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);   // premultiplied
  gl.enable(gl.SCISSOR_TEST);

  canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); gl = null; });

  requestAnimationFrame(frame);
  return true;
}

function sizeCanvas() {
  dpr = Math.min(devicePixelRatio || 1, 1.5);
  const w = Math.max(1, Math.round(innerWidth * dpr)), h = Math.max(1, Math.round(innerHeight * dpr));
  if (w !== cw || h !== ch) { cw = canvas.width = w; ch = canvas.height = h; }
}

function attach(target, options = {}) {
  if (!target || !initGL()) return null;
  const cfg = Object.assign({}, DEFAULTS, options);
  const inst = {
    target, cfg,
    time: Math.random() * 40,
    reach: Math.round(Math.max(cfg.height, 24) * 1.5) + 40,
    pad: Math.round(Math.max(cfg.spread, 8) * 3) + 16,
    setOptions(next) { Object.assign(cfg, next); },
    destroy() { const i = instances.indexOf(inst); if (i >= 0) instances.splice(i, 1); }
  };
  instances.push(inst);
  return inst;
}

/* the flame fades exactly with whatever GSAP is doing to the element */
function opacityOf(el) {
  let o = 1, node = el;
  while (node && node !== document.body) {
    const v = parseFloat(getComputedStyle(node).opacity);
    if (!isNaN(v)) o *= v;
    if (o <= 0.001) return 0;
    node = node.parentElement;
  }
  return o;
}

function draw(inst, dt) {
  const { target, cfg, reach, pad } = inst;
  const r = target.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return;
  if (r.bottom + pad <= 0 || r.top - reach >= innerHeight ||
      r.right + pad <= 0 || r.left - pad >= innerWidth) return;

  const fade = opacityOf(cfg.opacityFrom || target);
  if (fade <= 0.004) return;
  if (!reduced) inst.time += dt * cfg.speed;

  // sub-viewport around the element: reach above, pad on the other three sides
  const bw = Math.round((r.width + pad * 2) * dpr);
  const bh = Math.round((r.height + reach + pad) * dpr);
  const bx = Math.round((r.left - pad) * dpr);
  const by = ch - Math.round((r.top - reach) * dpr) - bh;   // GL origin is bottom-left
  gl.viewport(bx, by, bw, bh);
  gl.scissor(bx, by, bw, bh);

  gl.uniform1i(U.uContent, 0);
  gl.uniform2f(U.uResolution, bw, bh);
  gl.uniform1f(U.uTime, inst.time);
  gl.uniform2f(U.uRectCenter, (r.width / 2 + pad) * dpr, (r.height / 2 + pad) * dpr);
  gl.uniform2f(U.uRectHalf, Math.max(r.width / 2 * dpr, 1), Math.max(r.height / 2 * dpr, 1));
  gl.uniform1f(U.uCorner, Math.max(cfg.radius, 0) * dpr);
  gl.uniform3f(U.uColor, cfg.color[0], cfg.color[1], cfg.color[2]);
  gl.uniform1f(U.uIntensity, Math.max(cfg.intensity, 0));
  gl.uniform1f(U.uHeight, Math.max(cfg.height, 24) * dpr);
  gl.uniform1f(U.uSpread, Math.max(cfg.spread, 8) * dpr);
  gl.uniform1f(U.uScale, Math.max(cfg.scale, 0.05));
  gl.uniform1f(U.uTurbulence, Math.max(cfg.turbulence, 0));
  gl.uniform1f(U.uTurbScale, Math.max(cfg.turbulenceScale, 0.2));
  gl.uniform1f(U.uTurbReach, Math.max(cfg.turbulenceReach, 4) * dpr);
  gl.uniform1f(U.uSparks, Math.max(cfg.sparks, 0));
  gl.uniform1f(U.uSparkSize, Math.max(cfg.sparkSize, 0.2));
  gl.uniform1f(U.uSparkDensity, Math.max(cfg.sparkDensity, 0.3));
  gl.uniform1f(U.uSparkSpeed, Math.max(cfg.sparkSpeed, 0.05));
  gl.uniform1f(U.uRim, Math.max(cfg.rim, 0));
  gl.uniform1f(U.uMelt, Math.max(cfg.melt, 0) * dpr);
  gl.uniform1f(U.uDistortion, Math.max(cfg.distortion, 0) * dpr);
  gl.uniform1f(U.uSmoke, Math.max(cfg.smoke, 0));
  gl.uniform1f(U.uEmber, Math.max(cfg.ember, 0));
  gl.uniform1f(U.uScorch, Math.max(cfg.scorch, 0));
  gl.uniform1f(U.uHasContent, 0);        // content stays in the DOM
  gl.uniform1f(U.uFade, fade);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - last) / 1000, 1 / 30); last = now;
  if (!gl || !instances.length) return;
  sizeCanvas();
  gl.useProgram(prog);
  gl.disable(gl.SCISSOR_TEST);
  gl.viewport(0, 0, cw, ch);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.enable(gl.SCISSOR_TEST);
  for (let i = 0; i < instances.length; i++) draw(instances[i], dt);
}

window.FlameWrap = { attach, DEFAULTS };

/* ── boot: hero “HEAT,” + the three testimonial cards ── */
function boot() {
  const RED = [0.706, 0.149, 0.102];   // var(--red) #b4261a — the hero's secondary type

  const heat = document.querySelector('.hero__flame');
  if (heat) FlameWrap.attach(heat, {
    color: RED,
    intensity: 0.85, height: 170, spread: 14, radius: 12,
    speed: 0.5, scale: 0.72, turbulence: 0.55,
    sparks: 1.6, sparkDensity: 1.1, rim: 2.2, melt: 7, smoke: 0.7,
    opacityFrom: document.querySelector('.hero__line--l')
  });

  document.querySelectorAll('.voice').forEach((card, i) => FlameWrap.attach(card, {
    color: RED,
    intensity: 0.62, height: 110, spread: 12, radius: 2,
    speed: 0.42 + i * 0.05, scale: 0.8, turbulence: 0.5,
    sparks: 1.2, sparkDensity: 0.9, rim: 2.0, melt: 5, smoke: 0.9
  }));
}
if (document.readyState === 'loading') addEventListener('DOMContentLoaded', boot); else boot();
})();

  `},{src:"",type:"",id:"",async:!1,defer:!1,content:`
    /* ═══════════════════════════════════════════
   KAIRO — Asciify lens (vanilla port of Canvas UI <Asciify>)
   A soft lens follows the cursor and redraws the photo beneath it as ascii glyphs.
   One shared WebGL2 context renders every figure; each figure gets a plain 2D
   canvas inside it, so the section's overflow, clip-path reveal and stacking
   order keep working untouched.
   ═══════════════════════════════════════════ */
(() => {
'use strict';

const MAX_GLYPHS = 16;

const CHARSETS = {
  ascii: [0, 128, 131200, 14336, 459200, 469440, 4357252, 18157905, 11512810, 15724526],
  blocks: [0, 328000, 22041621, 22369621, 11512810, 33554431],
  binary: [0, 4591758, 15324974],
};

const DEFAULTS = {
  radius: 0.4,
  softness: 1,
  scale: 2,
  spacing: 1,
  charset: 'ascii',
  glyphs: [],
  background: [0, 0, 0],
  backgroundOpacity: 0,
  contrast: 1,
  brightness: 0,
  invert: 0,
  strength: 1,
  baseStrength: 0,
  followSpeed: 3,
  glow: .75,
  aberration: .75,
  maxDpr: 1.5,
};

const VERT = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
out vec2 vUv;
void main () {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}\`;

const FRAG = \`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uContent;
uniform vec2 uContentOffset;
uniform vec2 uResolution;
uniform float uGlyphPx;
uniform float uSpacing;
uniform uint uGlyphs[\${MAX_GLYPHS}];
uniform int uGlyphCount;
uniform float uRadius;
uniform float uSoftness;
uniform vec2 uPointer;
uniform float uActive;
uniform vec3 uBg;
uniform float uBackingLum;
uniform float uBgOpacity;
uniform float uLod;
uniform float uContrast;
uniform float uBrightness;
uniform float uInvert;
uniform float uStrength;
uniform float uBase;
uniform float uMaxX;
uniform sampler2D uTextMask;
uniform float uDotPx;
uniform float uDotLod;
uniform float uGlowAmt;
uniform float uAberration;

#define S(a, b, t) smoothstep(a, b, t)

float glyphBit (int index, ivec2 p) {
  if (p.x < 0 || p.x > 4 || p.y < 0 || p.y > 4) return 0.0;
  uint bits = uGlyphs[index];
  return float((bits >> uint((4 - p.x) + 5 * p.y)) & 1u);
}

float hash21 (vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec4 sampleFringe (vec2 uv, float lod, vec2 off) {
  vec4 c = textureLod(uContent, uv, lod);
  c.r = textureLod(uContent, uv + off, lod).r;
  c.b = textureLod(uContent, uv - off, lod).b;
  return c;
}

void main () {
  vec2 uv = vUv;

  if (uv.x > uMaxX) { outColor = vec4(0.0); return; }

  float cellPx = (5.0 + 2.0 * uSpacing) * uGlyphPx;
  vec2 frag = uv * uResolution;
  vec2 cell = floor(frag / cellPx);
  vec2 cellUv = (cell + 0.5) * cellPx / uResolution;

  float aspect = uResolution.x / uResolution.y;
  float dist = length((cellUv - uPointer) * vec2(aspect, 1.0));
  float radius = max(uRadius * uActive, 1e-4);
  float inner = radius * (1.0 - clamp(uSoftness, 0.0, 1.0));
  float lens = (1.0 - S(inner, radius, dist)) * uActive;
  float mask = clamp(max(lens, clamp(uBase, 0.0, 1.0)), 0.0, 1.0) * clamp(uStrength, 0.0, 1.0);

  float apply = mask < 0.003 ? 0.0 : step(hash21(cell), mask);
  if (apply < 0.5) { outColor = vec4(0.0); return; }

  vec2 textureUv = vec2(cellUv.x, 1.0 - cellUv.y) + uContentOffset;
  if (textureUv.x < 0.001 || textureUv.x > uMaxX - 0.002 ||
      textureUv.y < 0.001 || textureUv.y > 0.999) { outColor = vec4(0.0); return; }

  vec2 lensDir = (cellUv - uPointer) * vec2(aspect, 1.0);
  float fringeAmp = max(uActive, S(0.0, 0.25, uBase));
  vec2 fringe = normalize(lensDir + 1e-5)
    * clamp(uAberration, 0.0, 1.0) * 0.005
    * S(uRadius * 0.15, uRadius, dist) * fringeAmp;
  fringe = vec2(fringe.x / aspect, -fringe.y);

  float textness = texture(uTextMask, vec2(cellUv.x, 1.0 - cellUv.y)).r;

  if (textness > 0.4) {
    vec2 dotIdx = floor(frag / uDotPx);
    vec2 dotUv = (dotIdx + 0.5) * uDotPx / uResolution;
    vec2 flippedUv = clamp(vec2(dotUv.x, 1.0 - dotUv.y) + uContentOffset,
      vec2(0.001), vec2(uMaxX - 0.002, 0.999));
    vec4 ink = sampleFringe(flippedUv, uDotLod, fringe);
    float inkLum = dot(ink.rgb, vec3(0.299, 0.587, 0.114));
    float density = abs(inkLum - uBackingLum);
    density = clamp((density - 0.5) * uContrast + 0.5 + uBrightness, 0.0, 1.0);
    density = mix(density, 1.0 - density, clamp(uInvert, 0.0, 1.0));
    float d = length(frag - (dotIdx + 0.5) * uDotPx) / (uDotPx * 0.5);
    float reach = sqrt(density);
    float on = (1.0 - S(reach - 0.3, reach + 0.2, d)) * step(0.03, density);
    vec3 inkColor = clamp(uBg + (ink.rgb - uBg) / max(abs(inkLum - uBackingLum), 0.2), 0.0, 1.0);
    vec4 soft = sampleFringe(flippedUv, uDotLod + 2.5, fringe);
    float softLum = dot(soft.rgb, vec3(0.299, 0.587, 0.114));
    float halo = clamp(abs(softLum - uBackingLum) * 2.2, 0.0, 1.0) * clamp(uGlowAmt, 0.0, 1.0) * 0.55;
    vec3 haloColor = clamp(uBg + (soft.rgb - uBg) / max(abs(softLum - uBackingLum), 0.2), 0.0, 1.0);
    vec3 col = mix(haloColor, inkColor, on);
    float alpha = ink.a * max(mix(clamp(uBgOpacity, 0.0, 1.0), 1.0, on), halo * (1.0 - on));
    outColor = vec4(col * alpha, alpha);
    return;
  }

  vec4 pixel = sampleFringe(textureUv, uLod, fringe);

  float lum = dot(pixel.rgb, vec3(0.299, 0.587, 0.114));
  float amount = abs(lum - uBackingLum);
  amount = clamp((amount - 0.5) * uContrast + 0.5 + uBrightness, 0.0, 1.0);
  amount = mix(amount, 1.0 - amount, clamp(uInvert, 0.0, 1.0));

  int index = min(int(amount * float(uGlyphCount)), uGlyphCount - 1);

  ivec2 local = ivec2(floor((frag - cell * cellPx) / uGlyphPx));
  int pad = int(uSpacing);
  float on = glyphBit(index, ivec2(local.x - pad, local.y - pad));

  vec3 glyphColor = clamp(uBg + (pixel.rgb - uBg) / max(abs(lum - uBackingLum), 0.2), 0.0, 1.0);
  vec3 col = mix(uBg, glyphColor, on);
  float alpha = pixel.a * mix(clamp(uBgOpacity, 0.0, 1.0), 1.0, on);
  outColor = vec4(col * alpha, alpha);
}\`;

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = [];
let gl = null, glCanvas = null, prog = null, U = null, maskTex = null;
let glW = 0, glH = 0;
const glyphData = new Uint32Array(MAX_GLYPHS);
const ptr = { x: -1e5, y: -1e5 };

function initGL() {
  if (glCanvas) return !!gl;
  glCanvas = document.createElement('canvas');
  gl = glCanvas.getContext('webgl2', {
    alpha: true, depth: false, stencil: false, antialias: false,
    premultipliedAlpha: true, preserveDrawingBuffer: true   // read back by drawImage
  });
  if (!gl) { glCanvas = null; return false; }

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error('[asciify]', gl.getShaderInfoLog(sh));
    return sh;
  };
  prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  U = {};
  const n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; i++) { const info = gl.getActiveUniform(prog, i); U[info.name] = gl.getUniformLocation(prog, info.name); }

  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  // no text over these photos — a blank mask keeps the glyph path in play
  maskTex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, maskTex);
  for (const p of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER]) gl.texParameteri(gl.TEXTURE_2D, p, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));

  addEventListener('pointermove', e => { ptr.x = e.clientX; ptr.y = e.clientY; }, { passive: true });
  addEventListener('pointerleave', () => { ptr.x = ptr.y = -1e5; }, { passive: true });
  requestAnimationFrame(frame);
  return true;
}

/* a blob-decoded copy never taints the source canvas (see gallery.js) */
async function cleanBitmap(url) {
  for (const cache of ['default', 'reload']) {
    try {
      const r = await fetch(url, { mode: 'cors', credentials: 'omit', cache });
      if (r.ok) return await createImageBitmap(await r.blob());
    } catch (e) { /* fall through */ }
  }
  return null;
}

function attach(fig, options = {}) {
  if (!fig || !initGL()) return null;
  const cfg = Object.assign({}, DEFAULTS, options);
  const imgs = [...fig.querySelectorAll('img')];
  if (!imgs.length) return null;

  const out = document.createElement('canvas');
  out.className = 'ascii-layer';
  out.setAttribute('aria-hidden', 'true');
  const cap = fig.querySelector('figcaption');
  cap ? fig.insertBefore(out, cap) : fig.appendChild(out);   // captions stay on top

  const item = {
    fig, imgs, out, ctx: out.getContext('2d'),
    src: document.createElement('canvas'), tex: gl.createTexture(),
    cfg, bitmaps: new Map(), key: '', w: 0, h: 0, cleared: true,
    p: { x: .5, y: .5, tx: .5, ty: .5, active: 0, target: 0 },
  };
  item.sctx = item.src.getContext('2d');

  gl.bindTexture(gl.TEXTURE_2D, item.tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  for (const im of imgs) {
    const url = im.currentSrc || im.src;
    cleanBitmap(url).then(b => { if (b) { item.bitmaps.set(im, b); item.key = ''; } });
  }

  items.push(item);
  return item;
}

/* redraw the figure's photo(s) into the source canvas, honouring the live
   GSAP transform and the crossfade opacities */
function paintSource(item, w, h) {
  const { sctx, src, imgs } = item;
  if (src.width !== w || src.height !== h) { src.width = w; src.height = h; }
  sctx.setTransform(1, 0, 0, 1, 0, 0);
  sctx.clearRect(0, 0, w, h);
  for (const im of imgs) {
    const cs = getComputedStyle(im);
    const a = parseFloat(cs.opacity);
    if (!(a > .01)) continue;
    const bmp = item.bitmaps.get(im);
    const source = bmp || im;
    const nw = bmp ? bmp.width : im.naturalWidth, nh = bmp ? bmp.height : im.naturalHeight;
    if (!nw || !nh) continue;
    const m = new DOMMatrixReadOnly(cs.transform === 'none' ? '' : cs.transform);
    sctx.save();
    sctx.globalAlpha = Math.min(a, 1);
    sctx.translate(w / 2, h / 2); sctx.transform(m.a, m.b, m.c, m.d, m.e, m.f); sctx.translate(-w / 2, -h / 2);
    const s = Math.max(w / nw, h / nh);                 // object-fit: cover
    const cw = w / s, ch = h / s;
    try { sctx.drawImage(source, (nw - cw) / 2, (nh - ch) / 2, cw, ch, 0, 0, w, h); } catch (e) {}
    sctx.restore();
  }
}

function sourceKey(item, w, h) {
  let k = w + 'x' + h;
  for (const im of item.imgs) { const cs = getComputedStyle(im); k += '|' + cs.transform + cs.opacity; }
  return k;
}

function resolveGlyphs(cfg) {
  const ramp = cfg.glyphs.length > 1 ? cfg.glyphs : (CHARSETS[cfg.charset] || CHARSETS.ascii);
  const count = Math.min(ramp.length, MAX_GLYPHS);
  glyphData.fill(0);
  for (let i = 0; i < count; i++) glyphData[i] = ramp[i] >>> 0;
  return count;
}

function step(item, dt) {
  const { fig, out, ctx, cfg, p } = item;
  const r = fig.getBoundingClientRect();
  const onScreen = r.width > 1 && r.height > 1 && r.bottom > 0 && r.top < innerHeight;

  // the lens only matters near the cursor — everything else stays idle
  const reach = cfg.radius * r.height * 1.2;
  const near = onScreen &&
    ptr.x > r.left - reach && ptr.x < r.right + reach &&
    ptr.y > r.top - reach && ptr.y < r.bottom + reach;
  p.target = near && !reduced ? 1 : 0;
  if (near) {
    p.tx = (ptr.x - r.left) / r.width;
    p.ty = 1 - (ptr.y - r.top) / r.height;
  }

  const ease = 1 - Math.exp(-dt * Math.max(cfg.followSpeed, .5));
  p.x += (p.tx - p.x) * ease; p.y += (p.ty - p.y) * ease;
  p.active += (p.target - p.active) * ease;
  if (Math.abs(p.target - p.active) < 1e-3) p.active = p.target;

  if (p.active < .004 || !onScreen) {
    if (!item.cleared) { ctx.clearRect(0, 0, out.width, out.height); item.cleared = true; }
    return;
  }

  const dpr = Math.min(devicePixelRatio || 1, cfg.maxDpr);
  const W = Math.max(1, Math.round(r.width * dpr)), H = Math.max(1, Math.round(r.height * dpr));
  if (out.width !== W || out.height !== H) { out.width = W; out.height = H; }
  if (glCanvas.width < W || glCanvas.height < H) {
    glW = glCanvas.width = Math.max(glCanvas.width, W);
    glH = glCanvas.height = Math.max(glCanvas.height, H);
  }

  const key = sourceKey(item, Math.round(r.width), Math.round(r.height));
  if (key !== item.key) {
    item.key = key;
    paintSource(item, Math.round(r.width), Math.round(r.height));
    gl.bindTexture(gl.TEXTURE_2D, item.tex);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, item.src);
      gl.generateMipmap(gl.TEXTURE_2D);
    } catch (e) { item.key = 'tainted'; }
  }

  const glyphCss = Math.max(cfg.scale, .5);
  const dotCss = Math.max(1.25, glyphCss * .75);
  const spacing = Math.round(Math.min(Math.max(cfg.spacing, 0), 3));
  const bg = cfg.background;

  gl.useProgram(prog);
  gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, item.tex); gl.uniform1i(U.uContent, 0);
  gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, maskTex); gl.uniform1i(U.uTextMask, 1);
  gl.uniform2f(U.uContentOffset, 0, 0);
  gl.uniform2f(U.uResolution, W, H);
  gl.uniform1f(U.uGlyphPx, glyphCss * dpr);
  gl.uniform1f(U.uSpacing, spacing);
  gl.uniform1f(U.uLod, Math.max(0, Math.log2((5 + 2 * spacing) * glyphCss) - 1));
  gl.uniform1f(U.uDotPx, dotCss * dpr);
  gl.uniform1f(U.uDotLod, 0);
  gl.uniform1f(U.uGlowAmt, cfg.glow);
  gl.uniform1f(U.uAberration, cfg.aberration);
  gl.uniform1uiv(U['uGlyphs[0]'], glyphData);
  gl.uniform1i(U.uGlyphCount, resolveGlyphs(cfg));
  gl.uniform1f(U.uRadius, Math.max(cfg.radius, .01));
  gl.uniform1f(U.uSoftness, cfg.softness);
  gl.uniform2f(U.uPointer, p.x, p.y);
  gl.uniform1f(U.uActive, p.active);
  gl.uniform3f(U.uBg, bg[0], bg[1], bg[2]);
  gl.uniform1f(U.uBackingLum, .299 * bg[0] + .587 * bg[1] + .114 * bg[2]);
  gl.uniform1f(U.uBgOpacity, cfg.backgroundOpacity);
  gl.uniform1f(U.uContrast, Math.max(cfg.contrast, 0));
  gl.uniform1f(U.uBrightness, cfg.brightness);
  gl.uniform1f(U.uInvert, cfg.invert);
  gl.uniform1f(U.uStrength, cfg.strength);
  gl.uniform1f(U.uBase, cfg.baseStrength);
  gl.uniform1f(U.uMaxX, 1);

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, glCanvas.height - H, W, H);      // land it top-left in canvas space
  gl.enable(gl.SCISSOR_TEST); gl.scissor(0, glCanvas.height - H, W, H);
  gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.disable(gl.SCISSOR_TEST);

  ctx.clearRect(0, 0, W, H);
  ctx.drawImage(glCanvas, 0, 0, W, H, 0, 0, W, H);
  item.cleared = false;
}

let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - last) / 1000, 1 / 30); last = now;
  for (let i = 0; i < items.length; i++) step(items[i], dt);
}

window.Asciify = { attach, DEFAULTS, items };

/* ── boot: every photo figure except the recipe gallery (canvas, not <img>) ── */
function boot() {
  document.querySelectorAll('.media').forEach(fig => {
    if (fig.closest('.recipes')) return;
    Asciify.attach(fig, {
      radius: .4, softness: 1, scale: 2, spacing: 1,
      glow: .75, aberration: .75, strength: 1, baseStrength: 0,
      followSpeed: 3, charset: 'ascii', invert: 0,
      // the photos are dark, so density needs a push or the glyphs read as blanks;
      // opaque ink paper inside the lens is what makes it read as "redrawn as ascii"
      background: [.078, .071, .063],   // --ink
      backgroundOpacity: 1,
      contrast: 1.45, brightness: .3,
    });
  });
}
if (document.readyState === 'loading') addEventListener('DOMContentLoaded', boot); else boot();
})();

  `},{src:"",type:"",id:"",async:!1,defer:!1,content:`
    /* ═══════════════════════════════════════════
   KAIRO — Hanging gallery (recipe prints on a line)
   Cloth-simulated prints, WebGL2. Adapted for scroll-driven panning.
   window.KairoGallery.init(stageEl, items, opts) → { setProgress, setActive, unfocus }
   ═══════════════════════════════════════════ */
(() => {
'use strict';

const F = 'Manrope, "Noto Sans JP", system-ui, sans-serif';
const SERIF = F;
const MONO = F;

/* ---------- procedural plaster wall (brand red, subtle) ---------- */
function makeWall(base) {
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S;
  const x = c.getContext('2d');
  x.fillStyle = base; x.fillRect(0, 0, S, S);
  for (let i = 0; i < 220; i++) {
    const r = 60 + Math.random() * 220, px = Math.random() * S, py = Math.random() * S;
    const g = x.createRadialGradient(px, py, 0, px, py, r);
    const dark = Math.random() < 0.5;
    g.addColorStop(0, dark ? 'rgba(90,20,10,' + (0.03 + Math.random() * 0.07) + ')' : 'rgba(255,150,120,' + (0.03 + Math.random() * 0.07) + ')');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(px - r, py - r, r * 2, r * 2);
  }
  const id = x.getImageData(0, 0, S, S), d = id.data;
  for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - 0.5) * 14; d[i] += n; d[i + 1] += n * 0.8; d[i + 2] += n * 0.7; }
  x.putImageData(id, 0, 0);
  for (let i = 0; i < 500; i++) {
    const px = Math.random() * S, py = Math.random() * S, r = 0.5 + Math.random() * 1.4;
    x.fillStyle = 'rgba(60,12,6,' + (0.15 + Math.random() * 0.35) + ')';
    x.beginPath(); x.ellipse(px, py, r, r * (0.6 + Math.random() * 0.6), Math.random() * 3, 0, 7); x.fill();
  }
  return c.toDataURL('image/jpeg', 0.9);
}

/* ---------- recipe print texture (photo + caption card) ---------- */
function roundRect(x, px, py, w, h, r) { x.beginPath(); x.moveTo(px + r, py); x.arcTo(px + w, py, px + w, py + h, r); x.arcTo(px + w, py + h, px, py + h, r); x.arcTo(px, py + h, px, py, r); x.arcTo(px, py, px + w, py, r); x.closePath(); }
function wrap(x, text, px, py, maxW, lh) { const words = text.split(' '); let line = ''; for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { x.fillText(line, px, py); line = w; py += lh; } else line = t; } if (line) x.fillText(line, px, py); return py + lh; }

function makePrint(item, img) {
  const Wp = 900, Hp = 1280, c = document.createElement('canvas'); c.width = Wp; c.height = Hp;
  const x = c.getContext('2d');
  x.fillStyle = '#fffcf6'; x.fillRect(0, 0, Wp, Hp);
  // photo (cover)
  const ph = 700;
  x.save(); x.beginPath(); x.rect(0, 0, Wp, ph); x.clip();
  if (img && img.width) {
    const ar = img.width / img.height, tw = ar > Wp / ph ? ph * ar : Wp, th = ar > Wp / ph ? ph : Wp / ar;
    x.drawImage(img, (Wp - tw) / 2, (ph - th) / 2, tw, th);
  } else {                       // photo unavailable — keep the card, tint the plate
    x.fillStyle = '#efe7dc'; x.fillRect(0, 0, Wp, ph);
  }
  x.restore();
  // caption
  const M = 56; let y = ph + 74;
  if ('letterSpacing' in x) x.letterSpacing = '2px';
  x.fillStyle = '#b4261a'; x.font = '500 22px ' + MONO; x.fillText(item.idx, M, y);
  x.fillStyle = '#7a6f66'; x.font = '500 22px ' + MONO; x.textAlign = 'right'; x.fillText(item.time.toUpperCase() + '  ·  SERVES ' + item.serves, Wp - M, y); x.textAlign = 'left';
  y += 70;
  if ('letterSpacing' in x) x.letterSpacing = '-1px';
  x.fillStyle = '#141210'; x.font = '500 56px ' + SERIF; x.fillText(item.title, M, y);
  y += 44;
  x.fillStyle = '#b4261a'; x.font = '500 28px "Noto Sans JP", ' + F; x.fillText(item.ja, M, y);
  // chips
  if ('letterSpacing' in x) x.letterSpacing = '1.5px';
  y += 46; let cx = M;
  x.font = '500 19px ' + MONO;
  for (const ing of item.ingredients) {
    const t = ing.toUpperCase(), w = x.measureText(t).width + 34;
    x.strokeStyle = 'rgba(20,18,16,.25)'; x.lineWidth = 1.5; roundRect(x, cx, y - 26, w, 40, 20); x.stroke();
    x.fillStyle = '#141210'; x.fillText(t, cx + 17, y + 1);
    cx += w + 12;
  }
  y += 66;
  if ('letterSpacing' in x) x.letterSpacing = '0px';
  x.fillStyle = 'rgba(20,18,16,.85)'; x.font = '400 27px ' + F;
  y = wrap(x, item.method, M, y, Wp - 2 * M, 40);
  // heat dots
  if ('letterSpacing' in x) x.letterSpacing = '2px';
  y = Hp - 66;
  x.fillStyle = 'rgba(20,18,16,.12)'; x.fillRect(M, y - 34, Wp - 2 * M, 1);
  x.fillStyle = '#7a6f66'; x.font = '500 20px ' + MONO; x.fillText('HEAT', M, y);
  for (let i = 0; i < 4; i++) { x.fillStyle = i < item.heat ? '#b4261a' : 'rgba(20,18,16,.15)'; x.beginPath(); x.arc(M + 90 + i * 22, y - 7, 6, 0, 7); x.fill(); }
  x.fillStyle = '#b4261a'; x.font = '500 20px ' + MONO; x.textAlign = 'right'; x.fillText('KAIRO · 香味辣油', Wp - M, y); x.textAlign = 'left';
  return c;
}

/* ---------- shaders ---------- */
const VS = \`#version 300 es
precision highp float;
in vec3 aPos; in vec3 aNor; in vec2 aUv;
uniform vec2 uCenter; uniform float uScale; uniform vec2 uView; uniform vec2 uOff;
out vec3 vNor; out vec2 vUv;
void main(){
  vec2 s = (aPos.xy - uCenter + uOff) * uScale + uView*0.5;
  vec2 ndc = vec2(s.x/uView.x*2.0-1.0, 1.0-s.y/uView.y*2.0);
  gl_Position = vec4(ndc, 0.0, 1.0);
  vNor = aNor; vUv = aUv;
}\`;
const FS = \`#version 300 es
precision highp float;
in vec3 vNor; in vec2 vUv;
uniform sampler2D uTex; uniform vec4 uInner;
uniform float uShadow; uniform float uAlpha; uniform float uSheen;
out vec4 o;
void main(){
  if(uShadow>0.5){ o = vec4(0.0,0.0,0.0,uAlpha); return; }
  vec3 n = normalize(vNor);
  vec3 L = normalize(vec3(-0.35,-0.55,0.9));
  vec3 V = vec3(0.0,0.0,1.0);
  float diff = 0.64 + 0.36*max(dot(n,L),0.0);
  vec3 h = normalize(L+V);
  float spec = pow(max(dot(n,h),0.0), 22.0)*0.8;
  vec3 col;
  bool inside = vUv.x>uInner.x && vUv.x<uInner.z && vUv.y>uInner.y && vUv.y<uInner.w;
  if(inside){
    vec2 p = (vUv - uInner.xy)/(uInner.zw-uInner.xy);
    col = texture(uTex, p).rgb;
    float weave = 0.975 + 0.025*sin(vUv.x*900.0)*sin(vUv.y*900.0);
    col *= weave;
    col = col*diff + spec*uSheen*vec3(1.0,0.96,0.92)*0.5 + spec*0.05;
  } else {
    col = vec3(0.985,0.975,0.955)*diff + spec*0.10;
    float d = min(min(vUv.x, 1.0-vUv.x), min(vUv.y,1.0-vUv.y));
    col *= 0.94 + 0.06*smoothstep(0.0,0.012,d);
  }
  o = vec4(col*uAlpha, uAlpha);
}\`;

function init(stage, items, opts = {}) {
  const wallEl = stage.querySelector('.gallery__wall');
  const backC = stage.querySelector('.gallery__back'), glC = stage.querySelector('.gallery__gl'), frontC = stage.querySelector('.gallery__front');
  const hint = stage.querySelector('.gallery__hint');
  const bctx = backC.getContext('2d'), fctx = frontC.getContext('2d');
  const gl = glC.getContext('webgl2', { alpha: true, antialias: true, premultipliedAlpha: true });
  const api = { ready: false, setProgress() {}, setActive() {}, unfocus() {}, focused: () => null };
  if (!gl) { stage.classList.add('is-fallback'); return api; }

  let W = 10, H = 10, DPR = Math.min(1.5, devicePixelRatio || 1);
  // adaptive quality: drop resolution / solver work if frames run long
  const Q = { iters: 6, shadowPasses: 3, low: false };
  wallEl.style.backgroundImage = 'url(' + makeWall(opts.wall || '#b4261a') + ')';
  const WALL_TILE = 900;

  function shader(t, s) { const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh); if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(sh); return sh; }
  const prog = gl.createProgram(); gl.attachShader(prog, shader(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
  gl.useProgram(prog);
  const U = {}; ['uCenter', 'uScale', 'uView', 'uOff', 'uTex', 'uInner', 'uShadow', 'uAlpha', 'uSheen'].forEach(n => U[n] = gl.getUniformLocation(prog, n));
  const A = { aPos: gl.getAttribLocation(prog, 'aPos'), aNor: gl.getAttribLocation(prog, 'aNor'), aUv: gl.getAttribLocation(prog, 'aUv') };
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  function makeTex(canvas) { const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas); gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); const ext = gl.getExtension('EXT_texture_filter_anisotropic'); if (ext) gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT))); return t; }

  /* ---------- Cloth ---------- */
  class Cloth {
    constructor(o) {
      Object.assign(this, o);
      const { nx, ny } = this; const n = nx * ny; this.n = n;
      this.pos = new Float32Array(n * 3); this.prev = new Float32Array(n * 3); this.nor = new Float32Array(n * 3); this.uv = new Float32Array(n * 2);
      this.pinSpread = 0.84;
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const k = j * nx + i; const u = i / (nx - 1), v = j / (ny - 1);
        const px = this.x + this.w * (0.5 + (u - 0.5) * this.pinSpread), py = -6 + v * this.h * 0.9;
        this.pos[k * 3] = px; this.pos[k * 3 + 1] = py; this.prev[k * 3] = px; this.prev[k * 3 + 1] = py;
        this.uv[k * 2] = u; this.uv[k * 2 + 1] = v; }
      const pl = Math.round((nx - 1) * 0.08), pr = Math.round((nx - 1) * 0.92);
      const pinL = this.x + this.w * (0.5 - 0.5 * this.pinSpread), pinR = this.x + this.w * (0.5 + 0.5 * this.pinSpread);
      this.pins = [[pl, pinL, 0], [pr, pinR, 0]];
      const cons = []; const dx = this.w / (nx - 1), dy = this.h / (ny - 1), diag = Math.hypot(dx, dy);
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const k = j * nx + i;
        if (i < nx - 1) cons.push(k, k + 1, dx, 1); if (j < ny - 1) cons.push(k, k + nx, dy, 1);
        if (i < nx - 1 && j < ny - 1) { cons.push(k, k + nx + 1, diag, 0.95); cons.push(k + 1, k + nx, diag, 0.95); }
        if (i < nx - 2) cons.push(k, k + 2, dx * 2, 0.8); if (j < ny - 2) cons.push(k, k + 2 * nx, dy * 2, 0.8); }
      this.cons = new Float32Array(cons); this.ncons = cons.length / 4;
      const idx = []; for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) { const k = j * nx + i; idx.push(k, k + 1, k + nx, k + 1, k + nx + 1, k + nx); }
      this.idx = new Uint16Array(idx);
      this.vao = gl.createVertexArray(); gl.bindVertexArray(this.vao);
      this.bPos = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.bPos); gl.bufferData(gl.ARRAY_BUFFER, this.pos, gl.DYNAMIC_DRAW); gl.enableVertexAttribArray(A.aPos); gl.vertexAttribPointer(A.aPos, 3, gl.FLOAT, false, 0, 0);
      this.bNor = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.bNor); gl.bufferData(gl.ARRAY_BUFFER, this.nor, gl.DYNAMIC_DRAW); gl.enableVertexAttribArray(A.aNor); gl.vertexAttribPointer(A.aNor, 3, gl.FLOAT, false, 0, 0);
      const bUv = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, bUv); gl.bufferData(gl.ARRAY_BUFFER, this.uv, gl.STATIC_DRAW); gl.enableVertexAttribArray(A.aUv); gl.vertexAttribPointer(A.aUv, 2, gl.FLOAT, false, 0, 0);
      const bIdx = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bIdx); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.idx, gl.STATIC_DRAW);
      gl.bindVertexArray(null);
      const b = this.border; this.inner = [b / this.w, b / this.h, 1 - b / this.w, 1 - (b * 1.25) / this.h];
      this.center = [this.x + this.w / 2, this.h / 2];
    }
    step(dt, wind, t) {
      const { pos, prev, n } = this; const g = 1500 * dt * dt; const damp = 0.985;
      for (let k = 0; k < n; k++) { const i = k * 3;
        const px = pos[i], py = pos[i + 1], pz = pos[i + 2];
        let vx = (px - prev[i]) * damp, vy = (py - prev[i + 1]) * damp, vz = (pz - prev[i + 2]) * 0.96;
        const sp = Math.hypot(vx, vy); const vmax = 14; if (sp > vmax) { vx *= vmax / sp; vy *= vmax / sp; }
        prev[i] = px; prev[i + 1] = py; prev[i + 2] = pz;
        const u = this.uv[k * 2], v = this.uv[k * 2 + 1];
        const fl = Math.sin(t * 1.7 + u * 3.0 + v * 1.5) * 0.6 + Math.sin(t * 2.9 + v * 4.0) * 0.4;
        pos[i] = px + vx + wind[0] * dt * dt * (0.4 + v * 0.8);
        pos[i + 1] = py + vy + g;
        pos[i + 2] = pz + vz + (fl * 60 * (0.2 + v) + wind[2] * (0.3 + v)) * dt * dt - pz * 4 * dt * dt;
        if (pos[i + 1] < -10) pos[i + 1] = -10;
      }
      const c = this.cons;
      for (let it = 0; it < Q.iters; it++) {
        for (let q = 0; q < this.ncons; q++) { const a = c[q * 4] * 3, b = c[q * 4 + 1] * 3, rest = c[q * 4 + 2], st = c[q * 4 + 3];
          const dx = pos[b] - pos[a], dy = pos[b + 1] - pos[a + 1], dz = pos[b + 2] - pos[a + 2];
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6; const diff = (d - rest) / d * 0.5 * st;
          pos[a] += dx * diff; pos[a + 1] += dy * diff; pos[a + 2] += dz * diff; pos[b] -= dx * diff; pos[b + 1] -= dy * diff; pos[b + 2] -= dz * diff; }
        for (const [k, x, y] of this.pins) { pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = 0; }
      }
      const { nx, ny, nor } = this; nor.fill(0);
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const k = j * nx + i; const l = j * nx + Math.max(i - 1, 0), r = j * nx + Math.min(i + 1, nx - 1), u = Math.max(j - 1, 0) * nx + i, d = Math.min(j + 1, ny - 1) * nx + i;
        const ax = pos[r * 3] - pos[l * 3], ay = pos[r * 3 + 1] - pos[l * 3 + 1], az = pos[r * 3 + 2] - pos[l * 3 + 2];
        const bx = pos[d * 3] - pos[u * 3], by = pos[d * 3 + 1] - pos[u * 3 + 1], bz = pos[d * 3 + 2] - pos[u * 3 + 2];
        let cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx; if (cz < 0) { cx = -cx; cy = -cy; cz = -cz; }
        const L = Math.hypot(cx, cy, cz) || 1; nor[k * 3] = cx / L; nor[k * 3 + 1] = cy / L; nor[k * 3 + 2] = cz / L; }
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bPos); gl.bufferSubData(gl.ARRAY_BUFFER, 0, pos);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bNor); gl.bufferSubData(gl.ARRAY_BUFFER, 0, nor);
    }
    bounds() { let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; const p = this.pos; for (let k = 0; k < this.n; k++) { const x = p[k * 3], y = p[k * 3 + 1]; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } return [x0, y0, x1, y1]; }
    grab(wx, wy, dx, dy, radius, strength) {
      const p = this.pos, pinned = new Set(this.pins.map(a => a[0]));
      for (let k = 0; k < this.n; k++) { if (pinned.has(k)) continue; const i = k * 3; const d = Math.hypot(p[i] - wx, p[i + 1] - wy); if (d < radius) { const f = (1 - d / radius); const w = f * f * strength; p[i] += dx * w; p[i + 1] += dy * w; p[i + 2] += Math.abs(dy + dx) * 0.25 * w; } }
    }
    draw() {
      gl.bindVertexArray(this.vao);
      gl.uniform4fv(U.uInner, this.inner); gl.uniform1f(U.uSheen, this.sheen);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex); gl.uniform1i(U.uTex, 0);
      gl.uniform1f(U.uShadow, 1);
      for (const [ox, oy, a] of [[12, 26, 0.12], [22, 44, 0.08], [34, 66, 0.05]].slice(0, Q.shadowPasses)) { gl.uniform2f(U.uOff, ox, oy); gl.uniform1f(U.uAlpha, a); gl.drawElements(gl.TRIANGLES, this.idx.length, gl.UNSIGNED_SHORT, 0); }
      gl.uniform1f(U.uShadow, 0); gl.uniform2f(U.uOff, 0, 0); gl.uniform1f(U.uAlpha, 1);
      gl.drawElements(gl.TRIANGLES, this.idx.length, gl.UNSIGNED_SHORT, 0);
    }
  }

  /* ---------- scene ---------- */
  const cloths = []; let galleryW = 0;
  const GAP = 120, PW = 340, PH = 480;
  const cam = { cx: 0, cy: 0, s: 1, tx: 0, ty: 0, ts: 1, vx: 0 };
  let focused = null, active = false, progress = 0, ptr = null, lastProgress = 0;

  function build(images) {
    let cx0 = 0;
    items.forEach((it, i) => {
      let tex;
      try { tex = makeTex(makePrint(it, images[i])); }
      catch (e) {                // e.g. a tainted canvas — draw the print without its photo
        console.warn('[gallery] print ' + it.idx + ' fell back to text-only', e);
        tex = makeTex(makePrint(it, null));
      }
      cloths.push(new Cloth({ x: cx0, w: PW, h: PH, tex, border: 22, sheen: 0.45, nx: 18, ny: 22, item: it }));
      cx0 += PW + GAP;
    });
    galleryW = cx0 - GAP;
    cam.cx = cam.tx = cloths[0].center[0];
    api.ready = true; layout();
  }

  function layout() {
    const r = stage.getBoundingClientRect(); W = Math.max(10, r.width); H = Math.max(10, r.height);
    for (const c of [backC, frontC, glC]) { c.width = Math.round(W * DPR); c.height = Math.round(H * DPR); }
    bctx.setTransform(DPR, 0, 0, DPR, 0, 0); fctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    gl.viewport(0, 0, glC.width, glC.height);
    const galleryScale = (W < 900 ? (W * 0.62) / PW : Math.min(1, W / 1240)) * (opts.scale || 1);
    if (!focused) { cam.ts = galleryScale; cam.ty = -((opts.lineY || 0.36) * H) / galleryScale + H / 2 / galleryScale; }
    else focus(focused, true);
  }
  addEventListener('resize', layout);
  function toWorld(sx, sy) { return [(sx - W / 2) / cam.s + cam.cx, (sy - H / 2) / cam.s + cam.cy]; }
  function toScreen(wx, wy) { return [(wx - cam.cx) * cam.s + W / 2, (wy - cam.cy) * cam.s + H / 2]; }
  function hit(wx, wy) { for (const c of cloths) { const [x0, y0, x1, y1] = c.bounds(); if (wx >= x0 && wx <= x1 && wy >= y0 && wy <= y1) return c; } return null; }
  function focus(c, instant) {
    focused = c; stage.classList.add('is-focused'); hint && hint.classList.add('hide');
    const s = Math.min(W * 0.86 / c.w, H * 0.8 / c.h);
    cam.ts = s; cam.tx = c.center[0]; cam.ty = c.h * 0.5 + 6;
    if (instant) { cam.s = s; cam.cx = cam.tx; cam.cy = cam.ty; }
    opts.onFocus && opts.onFocus(c.item);
  }
  function unfocus() { if (!focused) return; focused = null; stage.classList.remove('is-focused'); layout(); opts.onFocus && opts.onFocus(null); }

  /* scroll drives the camera along the line */
  function targetX(p) { if (!cloths.length) return 0; const a = cloths[0].center[0], b = cloths[cloths.length - 1].center[0]; return a + (b - a) * p; }
  api.setProgress = p => {
    progress = Math.min(1, Math.max(0, p));
    if (focused && Math.abs(progress - lastProgress) > 0.02) unfocus();
    if (!focused && !ptr) cam.tx = targetX(progress);
    if (!focused) lastProgress = progress;
  };
  api.setActive = a => { active = a; };
  api.unfocus = unfocus;
  api.focused = () => focused && focused.item;

  /* pointer: drag tugs cloth / pans a little; click zooms */
  stage.addEventListener('pointerdown', e => {
    if (!api.ready) return;
    stage.setPointerCapture(e.pointerId);
    const r = stage.getBoundingClientRect(); const sx = e.clientX - r.left, sy = e.clientY - r.top;
    ptr = { sx, sy, x: sx, y: sy, moved: false, vx: 0, lastT: performance.now() };
    stage.classList.add('is-grabbing'); hint && hint.classList.add('hide');
  });
  stage.addEventListener('pointermove', e => {
    if (!ptr) return;
    const r = stage.getBoundingClientRect(); const sx = e.clientX - r.left, sy = e.clientY - r.top;
    let dx = sx - ptr.x, dy = sy - ptr.y; const now = performance.now(); const dt = Math.max(1, now - ptr.lastT); ptr.lastT = now;
    const md = Math.hypot(dx, dy); if (md > 60) { dx *= 60 / md; dy *= 60 / md; }
    ptr.vx = dx / dt * 16;
    if (Math.hypot(sx - ptr.sx, sy - ptr.sy) > 4) ptr.moved = true;
    const [wx, wy] = toWorld(sx, sy);
    if (!focused) { cam.tx -= dx / cam.s; cam.cx -= dx / cam.s; const c = hit(wx, wy); if (c) c.grab(wx, wy, dx / cam.s * 0.5, dy / cam.s * 0.5, 120, 0.35); }
    else { focused.grab(wx, wy, dx / cam.s * 0.7, dy / cam.s * 0.7, 150 / cam.s * 1.6, 0.35); }
    ptr.x = sx; ptr.y = sy;
  });
  function pointerUp() {
    if (!ptr) return; stage.classList.remove('is-grabbing');
    const p = ptr; ptr = null;
    if (!p.moved) { const [wx, wy] = toWorld(p.x, p.y); const c = hit(wx, wy); if (!focused) { if (c) focus(c); } else if (c !== focused) unfocus(); }
    else if (!focused) cam.vx = -p.vx / cam.s;
  }
  stage.addEventListener('pointerup', pointerUp); stage.addEventListener('pointercancel', pointerUp);
  addEventListener('keydown', e => { if (e.key === 'Escape' && focused) unfocus(); });

  /* ---------- render loop ---------- */
  let last = performance.now(), t0 = last, prevCx = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    // decide visibility here every frame — no dependency on outside callbacks
    const rr = stage.getBoundingClientRect();
    const onScreen = rr.bottom > 0 && rr.top < innerHeight && rr.width > 0;
    if (!api.ready || (!onScreen && !focused)) { last = now; if (!onScreen && focused) unfocus(); return; }
    const rawDt = now - last;
    const dt = Math.min(0.033, rawDt / 1000); last = now; const t = (now - t0) / 1000;
    if (!Q.low) { Q.slow = rawDt > 26 ? (Q.slow || 0) + 1 : 0; if (Q.slow > 20) { Q.low = true; Q.iters = 4; Q.shadowPasses = 2; DPR = 1; layout(); } }
    if (!ptr && !focused) { cam.tx += cam.vx; cam.vx *= 0.94; if (Math.abs(cam.vx) < 0.05) { cam.tx += (targetX(progress) - cam.tx) * 0.08; } }
    const k = focused ? 0.085 : 0.14;
    cam.cx += (cam.tx - cam.cx) * (ptr && !focused ? 1 : k); cam.cy += (cam.ty - cam.cy) * 0.09; cam.s += (cam.ts - cam.s) * 0.09;
    const camVel = Math.max(-1800, Math.min(1800, (cam.cx - prevCx) / Math.max(dt, 1e-3))); prevCx = cam.cx;
    const wind = [-camVel * 0.55, 0, Math.sin(t * 0.6) * 40];
    for (const c of cloths) { c.step(dt / 2, wind, t); c.step(dt / 2, wind, t + dt / 2); }
    const wt = WALL_TILE * cam.s;
    wallEl.style.backgroundSize = wt + 'px ' + wt + 'px';
    wallEl.style.backgroundPosition = ((-cam.cx * cam.s + W / 2) % wt) + 'px ' + ((-cam.cy * cam.s + H / 2) % wt) + 'px';
    // line
    bctx.clearRect(0, 0, W, H);
    const [, ly] = toScreen(0, 0);
    bctx.lineCap = 'round';
    bctx.lineWidth = Math.max(1.2, 1.6 * cam.s); bctx.strokeStyle = 'rgba(60,10,5,0.35)'; bctx.beginPath(); bctx.moveTo(-10, ly + 4 * cam.s); bctx.lineTo(W + 10, ly + 8 * cam.s); bctx.stroke();
    bctx.strokeStyle = '#1c1210'; bctx.beginPath(); bctx.moveTo(-10, ly - 1 * cam.s); bctx.lineTo(W + 10, ly + 3 * cam.s); bctx.stroke();
    bctx.strokeStyle = 'rgba(255,220,200,0.35)'; bctx.lineWidth = Math.max(0.6, 0.6 * cam.s); bctx.beginPath(); bctx.moveTo(-10, ly - 2 * cam.s); bctx.lineTo(W + 10, ly + 2 * cam.s); bctx.stroke();
    // prints
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(U.uCenter, cam.cx, cam.cy); gl.uniform1f(U.uScale, cam.s); gl.uniform2f(U.uView, W, H);
    const order = cloths.slice().sort((a, b) => (a === focused) - (b === focused));
    for (const c of order) { const sx0 = toScreen(c.center[0] - c.w * 0.7, 0)[0], sx1 = toScreen(c.center[0] + c.w * 0.7, 0)[0]; if (sx1 < -50 || sx0 > W + 50) continue; c.draw(); }
    // pegs
    fctx.clearRect(0, 0, W, H);
    for (const c of cloths) for (const [, px, py] of c.pins) {
      const [sx, sy] = toScreen(px, py + 4); const s = cam.s; const pw = 7 * s, ph = 34 * s; if (sx < -40 || sx > W + 40) continue;
      fctx.save(); fctx.translate(sx, sy - ph * 0.42); fctx.rotate((c.pins[0][1] === px ? -1 : 1) * 0.02);
      fctx.fillStyle = 'rgba(50,10,5,0.35)'; fctx.fillRect(-pw / 2 + 3 * s, -ph / 2 + 5 * s, pw, ph);
      const g = fctx.createLinearGradient(-pw / 2, 0, pw / 2, 0); g.addColorStop(0, '#c99a5b'); g.addColorStop(0.45, '#e6bf84'); g.addColorStop(1, '#a67a42');
      fctx.fillStyle = g; fctx.fillRect(-pw / 2, -ph / 2, pw, ph);
      fctx.fillStyle = 'rgba(90,55,25,0.55)'; fctx.fillRect(-pw / 2, -ph * 0.02, pw, 1.4 * s);
      fctx.fillStyle = '#8a8a8e'; fctx.fillRect(-pw / 2 - 1 * s, ph * 0.08, pw + 2 * s, 2 * s);
      fctx.fillStyle = 'rgba(0,0,0,0.25)'; fctx.fillRect(-pw / 2, ph / 2 - 2 * s, pw, 2 * s);
      fctx.restore();
    }
  }

  /* load photos + fonts, then build */
  const fromBlob = async blob => {
    if (self.createImageBitmap) return createImageBitmap(blob);
    const u = URL.createObjectURL(blob);
    try { return await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = u; }); }
    finally { setTimeout(() => URL.revokeObjectURL(u), 0); }
  };
  const loadImage = async url => {
    for (const cache of ['default', 'reload']) {          // 'reload' defeats a poisoned cache entry
      try {
        const r = await fetch(url, { mode: 'cors', credentials: 'omit', cache });
        if (r.ok) return await fromBlob(await r.blob());
      } catch (e) { /* try the next strategy */ }
    }
    return new Promise(res => {                            // last resort: plain <img>
      const im = new Image(); im.crossOrigin = 'anonymous';
      im.onload = () => res(im); im.onerror = () => res(null); im.src = url;
    });
  };
  const loads = items.map(it => loadImage(it.image).catch(() => null));
  const fonts = document.fonts ? Promise.all(['300 20px Manrope', '400 20px Manrope', '500 20px Manrope', '500 20px "Noto Sans JP"'].map(f => document.fonts.load(f).catch(() => null))) : Promise.resolve();
  Promise.all([Promise.all(loads), fonts]).then(([images]) => { try { build(images); } catch (e) { console.error('[gallery] build failed', e); stage.classList.add('is-fallback'); } });
  layout(); requestAnimationFrame(frame);
  return api;
}

window.KairoGallery = { init };
})();

  `},{src:"",type:"",id:"",async:!1,defer:!1,content:`
    /* ═══════════════════════════════════════════
   KAIRO — scroll choreography
   GSAP 3 + ScrollTrigger + Lenis. Everything after the intro is scroll-driven.

   Sections:  01 hero · 02 story · 03 ingredients (pin) · 04 craft
              05 spectrum (pin) · 06 ritual (pin) · 07 recipes (pin, gallery)
              08 voices · 09 finale
   ═══════════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktop = () => innerWidth > 900;
const pad2 = n => String(n).padStart(2, '0');

/* ─────────────────────────────── smooth scroll ─── */
let lenis = null;
if (!reduced && window.Lenis) {
  lenis = new Lenis({ lerp: .085, smoothWheel: true, wheelMultiplier: .9, syncTouch: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop(); // released after the intro
}
const scrollTo = y => lenis ? lenis.scrollTo(y, { duration: 1.4 }) : window.scrollTo({ top: y, behavior: 'smooth' });

/* ─────────────────────────────── DOM refs ─── */
const header = $('.site-header');
const meterNum = $('.scroll-meter__number');
const meterFill = $('.scroll-meter__track i');
const progressBar = $('.progress i');
const chapters = $$('[data-chapter]');
const pose = $('.product-pose');   // primary pose (position / scale / tilt) — one tween chain
const fx = $('.product-fx');       // secondary motion inside chapters — always returns to neutral
const halo = $('.product-halo');
const bottle = $('.product-bottle');
const stage = $('.product-stage');

/* split body copy into words for scrubbed reveals */
$$('.words').forEach(p => {
  p.innerHTML = p.textContent.trim().split(/\\s+/).map(w => \`<span class="w">\${w}</span>\`).join(' ');
});

/* ═══════════════════════════════ INTRO (time-based, once) ═══ */
const intro = $('.intro');
const introTL = gsap.timeline({
  defaults: { ease: 'power3.out' },
  onComplete() {
    intro.remove();
    lenis && lenis.start();
    document.body.classList.add('is-ready');
    ScrollTrigger.refresh();
  }
});
if (reduced) {
  introTL.set(intro, { autoAlpha: 0 });
} else {
  introTL
    .to('.intro__mark span', { y: 0, duration: 1, stagger: .06, ease: 'power4.out' })
    .to('.intro__ja', { opacity: 1, duration: .6 }, '-=.5')
    .to('.intro__bar i', { scaleX: 1, duration: 1, ease: 'power2.inOut' }, '-=.6')
    .to('.intro__mark span', { y: '-110%', duration: .7, stagger: .04, ease: 'power3.in' }, '+=.1')
    .to('.intro__ja, .intro__bar', { opacity: 0, duration: .3 }, '<')
    .to(intro, { yPercent: -100, duration: .9, ease: 'expo.inOut' }, '-=.35')
    .from('.hero__line .line-inner', { yPercent: 110, duration: 1.1, stagger: .12, ease: 'power4.out' }, '-=.55')
    .from('.hero__category, .hero__kana, .hero__flavor-ja, .hero__crafted, .hero__vol, .hero__scroll', { y: 24, opacity: 0, duration: .8, stagger: .06 }, '-=.8')
    .from(pose, { y: 80, opacity: 0, duration: 1.3, ease: 'power3.out' }, '-=1.1');
}

/* ═══════════════════════════════ GLOBAL SCROLL STATE ═══ */
/* One handler for progress bar, chapter meter, header theme + hide, and velocity-reactive bottle.
   Uses quickTo/quickSetter so nothing allocates per frame. */
const setProgress = gsap.quickSetter(progressBar, 'scaleX');
const setMeter = gsap.quickSetter(meterFill, 'scaleY');
const haloScale = gsap.quickTo(halo, 'scale', { duration: .5, ease: 'power2.out' });
const haloAlpha = gsap.quickTo(halo, 'opacity', { duration: .5, ease: 'power2.out' });
const bottleSkew = gsap.quickTo(bottle, 'skewY', { duration: .6, ease: 'power2.out' });

let activeChapter = -1, lastChapterScroll = -1e9;
function updateChapter(force) {
  const y = lenis ? lenis.scroll : scrollY;
  if (!force && Math.abs(y - lastChapterScroll) < 16) return;   // throttle the rect reads
  lastChapterScroll = y;
  const line = innerHeight * .6;
  let idx = 0;
  for (let i = 0; i < chapters.length; i++) if (chapters[i].getBoundingClientRect().top <= line) idx = i;
  if (idx === activeChapter) return;
  activeChapter = idx;
  const theme = chapters[idx].dataset.theme;
  header.dataset.theme = theme;
  document.body.dataset.theme = theme;
  meterNum.textContent = pad2(idx + 1);
}

ScrollTrigger.create({
  trigger: document.body, start: 'top top', end: 'bottom bottom',
  onUpdate(self) {
    setProgress(self.progress);
    setMeter(self.progress);
    updateChapter();
    header.classList.toggle('is-hidden', self.direction === 1 && self.scroll() > 240);
    const vel = self.getVelocity();
    const v = Math.min(Math.abs(vel) / 2500, 1);
    haloScale(1 + v * .35);
    haloAlpha(.75 + v * .25);
    bottleSkew(gsap.utils.clamp(-3, 3, vel / -900));
  }
});
ScrollTrigger.addEventListener('scrollEnd', () => { updateChapter(true); bottleSkew(0); haloScale(1); haloAlpha(.8); });

/* ═══════════════════════════════ BOTTLE POSE CHAIN ═══ */
/* Chained fromTo per chapter (prev pose → pose). scrub:true (unsmoothed) so overlapping
   transitions during long jumps resolve in document order; Lenis supplies the smoothing. */
gsap.matchMedia().add({ desk: '(min-width: 901px)', mob: '(max-width: 900px)' }, ctx => {
  const P = ctx.conditions.desk ? [
    { x: '0vw',   y: '2vh',   scale: .92, rotation: 0 },    // 01 hero
    { x: '-24vw', y: '5vh',   scale: .68, rotation: -6 },   // 02 story  (inside photo)
    { x: '-27vw', y: '5vh',   scale: .64, rotation: 5 },    // 03 ingredients (inside photo)
    { x: '27vw',  y: '6vh',   scale: .62, rotation: 6 },    // 04 craft (inside photo)
    { x: '18vw',  y: '0vh',   scale: .68, rotation: 6 },    // 05 spectrum
    { x: '-24vw', y: '6vh',   scale: .90, rotation: -12 },  // 06 ritual
    { x: '40vw',  y: '-32vh', scale: .26, rotation: 16 },   // 07 recipes (fades out)
    { x: '-12vw', y: '-30vh', scale: .30, rotation: -6 },   // 08 voices (hidden)
    { x: '0vw',   y: '-13vh', scale: .56, rotation: 0 },    // 09 finale
  ] : [
    { x: '0vw',   y: '4vh',   scale: .80, rotation: 0 },
    { x: '0vw',   y: '-20vh', scale: .40, rotation: -6 },
    { x: '36vw',  y: '-36vh', scale: .26, rotation: 5 },
    { x: '36vw',  y: '-40vh', scale: .22, rotation: 9 },
    { x: '-34vw', y: '2vh',   scale: .26, rotation: 10 },
    { x: '36vw',  y: '6vh',   scale: .30, rotation: -12 },
    { x: '36vw',  y: '-36vh', scale: .20, rotation: 16 },
    { x: '36vw',  y: '-36vh', scale: .20, rotation: -6 },
    { x: '0vw',   y: '-14vh', scale: .42, rotation: 0 },
  ];
  gsap.set(pose, P[0]);
  chapters.forEach((sec, i) => {
    if (!i) return;
    gsap.fromTo(pose, P[i - 1], { ...P[i], ease: 'none', immediateRender: false,
      scrollTrigger: { trigger: sec, start: 'top bottom', end: 'top top', scrub: true } });
  });
});

/* helpers for repeated patterns */
const entrance = (sec, extra = t => t) => extra(gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top 90%', end: 'top top', scrub: 1 } })
  .fromTo(\`\${sec} .chapter-tag\`, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: .3 }, 0)
  .fromTo(\`\${sec} .kicker\`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .4 }, 0)
  .fromTo(\`\${sec} .line-inner\`, { yPercent: 110 }, { yPercent: 0, stagger: .12, duration: .6, ease: 'power2.out' }, .05));
const wordsReveal = sel => gsap.to(\`\${sel} .w\`, { opacity: 1, stagger: .04, ease: 'none', scrollTrigger: { trigger: sel, start: 'top 85%', end: 'bottom 45%', scrub: 1 } });
const photoParallax = (img, trig) => gsap.fromTo(img, { yPercent: -9, scale: 1.16 }, { yPercent: 9, scale: 1.04, ease: 'none', scrollTrigger: { trigger: trig, start: 'top bottom', end: 'bottom top', scrub: 1 } });
const photoReveal = (fig, from = 'inset(100% 0 0 0)') => gsap.fromTo(fig, { clipPath: from }, { clipPath: 'inset(0% 0 0% 0)', ease: 'power2.out', scrollTrigger: { trigger: fig, start: 'top 85%', end: 'top 30%', scrub: 1 } });
const countUp = (el, to, trig, fmt = n => Math.round(n)) => { const o = { n: 0 }; gsap.to(o, { n: to, ease: 'none', onUpdate: () => (el.textContent = fmt(o.n)), scrollTrigger: { trigger: trig, start: 'top 90%', end: 'top 45%', scrub: 1 } }); };

/* ═══════════════════════════════ 01 HERO ═══ */
gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .8 } })
  .to('.hero__line--l', { xPercent: -18, opacity: 0, ease: 'power1.in' }, 0)
  .to('.hero__line--r', { xPercent: 18, opacity: 0, ease: 'power1.in' }, 0)
  .to('.hero__kana', { rotation: 90, y: -60, opacity: 0 }, 0)
  .to('.hero__category', { y: -80, opacity: 0 }, 0)
  .to('.hero__flavor-ja, .hero__crafted', { y: 60, opacity: 0 }, 0)
  .to('.hero__scroll, .hero__vol', { opacity: 0 }, 0)
  .to(fx, { rotation: 6, yPercent: -6, ease: 'none' }, 0);

gsap.to('.band__track', { xPercent: -30, ease: 'none', scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: .5 } });

/* ═══════════════════════════════ 02 STORY ═══ */
gsap.timeline({ scrollTrigger: { trigger: '.story', start: 'top 80%', end: 'top 20%', scrub: 1 } })
  .fromTo('.story .kicker', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0)
  .fromTo('.story .line-inner', { yPercent: 110 }, { yPercent: 0, stagger: .15, ease: 'power2.out' }, 0)
  .fromTo('.story .chapter-tag', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, .1)
  .fromTo(fx, { rotation: 6, yPercent: -6 }, { rotation: 0, yPercent: 0, ease: 'none' }, 0);
photoReveal('.story__media');
photoParallax('.story__media img', '.story');
wordsReveal('.story .words');
$$('.story__stats b').forEach(b => countUp(b, +b.dataset.count, '.story__stats'));
gsap.timeline({ scrollTrigger: { trigger: '.story__side-note', start: 'top 95%', end: 'top 55%', scrub: 1 } })
  .fromTo('.story__stats', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, 0)
  .fromTo('.story__side-note', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, .1)
  .fromTo('.story__side-note span', { rotation: -180 }, { rotation: 0 }, .1);

/* ═══════════════════════════════ 03 INGREDIENTS (pinned) ═══ */
{
  const items = $$('.ingredient-list li');
  const counter = $('.ingredients__counter b');
  const photos = $$('.ingredients__media img'), caps = $$('.ingredients__cap span');
  let cur = -1;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.ingredients', start: 'top top', end: '+=260%', pin: true, scrub: 1, anticipatePin: 1,
      onUpdate(self) {
        // rows start at t = .15 + i*.6 on a 3-unit timeline; switch at the crossfade midpoint
        const idx = gsap.utils.clamp(0, items.length - 1, Math.floor((self.progress * 3 - .37) / .6));
        if (idx === cur) return;
        cur = idx; counter.textContent = pad2(idx + 1);
        items.forEach((li, i) => li.classList.toggle('is-on', i === idx));
        caps.forEach((c, i) => c.classList.toggle('is-on', i === idx));
      }
    }
  });
  entrance('.ingredients', t => t
    .fromTo('.ingredients__counter', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .4 }, .3)
    .fromTo('.ingredients__media', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: .8, ease: 'power2.out' }, 0));
  tl.fromTo(photos, { scale: 1.12, yPercent: -4 }, { scale: 1.02, yPercent: 4, duration: 3, ease: 'none' }, 0);
  items.forEach((li, i) => {
    const t = .15 + i * .6;
    tl.fromTo(li, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: .45, ease: 'power2.out' }, t)
      .fromTo(li.querySelector('b'), { scaleX: 0 }, { scaleX: 1, duration: .5, ease: 'power1.inOut' }, t + .1);
    // photo crossfades to this ingredient as its row lights up
    if (i) tl.fromTo(photos[i], { opacity: 0 }, { opacity: 1, duration: .45, ease: 'power1.inOut' }, t);
  });
  tl.fromTo(fx, { rotation: 0, yPercent: 0 }, { rotation: -7, yPercent: 3, duration: 1.4, ease: 'sine.inOut' }, 0)
    .to(fx, { rotation: 0, yPercent: 0, duration: 1.4, ease: 'sine.inOut' }, 1.4)
    .set({}, {}, 3);
}

/* ═══════════════════════════════ 04 CRAFT ═══ */
{
  const steps = $$('.craft__steps li');
  let lit = -1;
  gsap.timeline({ scrollTrigger: { trigger: '.craft', start: 'top 80%', end: 'top 20%', scrub: 1 } })
    .fromTo('.craft .chapter-tag', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, 0)
    .fromTo('.craft .kicker', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0)
    .fromTo('.craft .line-inner', { yPercent: 110 }, { yPercent: 0, stagger: .15, ease: 'power2.out' }, 0)
    .fromTo('.craft__media', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', ease: 'power2.out' }, .05);
  wordsReveal('.craft .words');
  photoParallax('.craft__media img', '.craft');
  gsap.to('.craft__rail b', {
    scaleY: 1, ease: 'none',
    scrollTrigger: {
      trigger: '.craft__steps', start: 'top 65%', end: 'bottom 65%', scrub: true,
      onUpdate(self) {
        const n = Math.floor(self.progress * steps.length + 1e-6);
        if (n === lit) return; lit = n;
        steps.forEach((li, i) => li.classList.toggle('is-on', i <= n));
      }
    }
  });
  steps.forEach(li => gsap.timeline({ scrollTrigger: { trigger: li, start: 'top 85%', end: 'top 55%', scrub: 1 } })
    .fromTo(li.querySelector('div'), { x: 40, opacity: 0 }, { x: 0, opacity: 1 }, 0)
    .fromTo(li.querySelector('.craft__num'), { scale: .6, opacity: 0 }, { scale: 1, opacity: 1 }, 0));
  gsap.timeline({ scrollTrigger: { trigger: '.craft', start: 'top top', end: 'bottom bottom', scrub: 1 } })
    .fromTo(fx, { rotation: 0, yPercent: 0 }, { rotation: -6, yPercent: 4, duration: 1, ease: 'sine.inOut' }, 0)
    .to(fx, { rotation: 0, yPercent: 0, duration: 1, ease: 'sine.inOut' }, 1);
}

/* ═══════════════════════════════ 05 SPECTRUM (pinned) — scroll to taste through ═══ */
{
  const words = $$('.spectrum__word span');
  const notes = $$('.flavor-note');
  const copies = $$('.spectrum__copy p');
  const ringFill = $('.ring-fill'), ringVal = $('.spectrum__ring-val b');
  const RING = 578, LEVELS = [8.6, 7.2, 9.1], LEN = 3.2;
  const setDash = gsap.quickSetter(ringFill, 'strokeDashoffset');
  const ring = { v: 0 };
  let active = -1, st;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.spectrum', start: 'top top', end: '+=300%', pin: true, scrub: 1, anticipatePin: 1,
      onRefresh: self => (st = self),
      onUpdate(self) {
        const p = self.progress * LEN, k = p < 1.2 ? 0 : p < 2.2 ? 1 : 2;
        if (k === active) return; active = k;
        notes.forEach((n, i) => n.classList.toggle('is-active', i === k));
      }
    }
  });
  gsap.timeline({ scrollTrigger: { trigger: '.spectrum', start: 'top 90%', end: 'top top', scrub: 1 } })
    .fromTo('.spectrum .chapter-tag', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: .3 }, 0)
    .fromTo(words, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: .12, duration: .5, ease: 'power2.out' }, 0)
    .fromTo('.flavor-notes', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .4 }, .2)
    .fromTo('.spectrum__ring', { scale: .6, opacity: 0 }, { scale: 1, opacity: 1, duration: .5 }, .2)
    .fromTo('.spectrum__hint', { opacity: 0 }, { opacity: 1, duration: .3 }, .4);
  LEVELS.forEach((level, k) => {
    const t = .2 + k, bar = notes[k].querySelector('b');
    tl.to(words[k], { color: '#f4efe6', webkitTextStrokeColor: 'transparent', scale: 1.04, transformOrigin: ['0% 50%', '50% 50%', '100% 50%'][k], duration: .35 }, t)
      .fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: .6, ease: 'power2.out' }, t)
      .fromTo(copies[k], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .3 }, t + .05)
      .to(ring, { v: level, duration: .5, onUpdate() { setDash(RING - RING * ring.v / 10); ringVal.textContent = ring.v.toFixed(1); } }, t);
    if (k < 2) tl
      .to(words[k], { color: 'transparent', webkitTextStrokeColor: '#f4efe655', scale: 1, duration: .35 }, t + .8)
      .to(copies[k], { opacity: 0, y: -14, duration: .3 }, t + .8)
      .to(bar, { scaleX: .12, duration: .4 }, t + .8);
  });
  tl.fromTo(fx, { rotation: 0, yPercent: 0 }, { rotation: 8, yPercent: -4, duration: 1, ease: 'sine.inOut' }, .8)
    .to(fx, { rotation: 0, yPercent: 0, duration: 1, ease: 'sine.inOut' }, 1.8)
    .to('.spectrum__hint', { opacity: 0, duration: .3 }, 2.8)
    .set({}, {}, LEN);
  notes.forEach((n, k) => n.addEventListener('click', () => st && scrollTo(st.start + (st.end - st.start) * ((k + .75) / LEN))));
}

/* ═══════════════════════════════ 06 RITUAL (pinned) ═══ */
gsap.timeline({ scrollTrigger: { trigger: '.ritual', start: 'top 90%', end: 'top top', scrub: 1 } })
  .fromTo('.ritual .chapter-tag', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: .3 }, 0)
  .fromTo('.ritual__number', { scale: .6, rotation: -8, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 0)
  .fromTo('.ritual .kicker', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .4 }, .1)
  .fromTo('.ritual .line-inner', { yPercent: 110 }, { yPercent: 0, stagger: .14, duration: .6, ease: 'power2.out' }, .15);
gsap.timeline({ scrollTrigger: { trigger: '.ritual', start: 'top top', end: '+=220%', pin: true, scrub: 1, anticipatePin: 1 } })
  .to('.ritual .words .w', { opacity: 1, stagger: .02, duration: .6, ease: 'none' }, .3)
  .fromTo('.ritual__uses span', { y: 60, opacity: 0, rotation: 6 }, { y: 0, opacity: 1, rotation: 0, stagger: .1, duration: .5, ease: 'back.out(1.6)' }, 1)
  .to('.ritual__number', { scale: 1.12, y: '-6vh', duration: 1.6, ease: 'none' }, 1.2)
  .fromTo(fx, { rotation: 0, yPercent: 0 }, { rotation: -22, yPercent: 4, duration: 1.2, ease: 'sine.inOut' }, .3)
  .to(fx, { rotation: 0, yPercent: 0, duration: 1.2, ease: 'sine.inOut' }, 1.7)
  .set({}, {}, 2.8);

/* ═══════════════════════════════ 07 RECIPES — hanging gallery, panned by scroll ═══ */
const RECIPES = [
  { idx: '01', image: 'https://images.unsplash.com/photo-1761064776495-357b1f05dcca?w=1800&q=80&fm=jpg&fit=max', title: 'Tamago kake gohan', ja: '卵かけご飯', ingredients: ['Hot rice', '1 raw egg', 'Soy · KAIRO'], method: 'Crack the egg over steaming rice, add a splash of soy, then one spoon of KAIRO. Stir hard until glossy. Breakfast, upgraded.', time: '3 min', serves: 1, heat: 2 },
  { idx: '02', image: 'https://images.unsplash.com/photo-1558985212-324add95595a?w=1800&q=80&fm=jpg&fit=max', title: 'Chili garlic udon', ja: '辣油うどん', ingredients: ['Fresh udon', 'Butter · Soy', 'Spring onion'], method: 'Boil, drain, toss with cold butter and soy while hot. Finish with two spoons of KAIRO and a shower of green onion.', time: '8 min', serves: 2, heat: 3 },
  { idx: '03', image: 'https://images.unsplash.com/photo-1638502338747-f7f368214cce?w=1800&q=80&fm=jpg&fit=max', title: 'Gyoza dip', ja: '餃子のたれ', ingredients: ['Rice vinegar', 'Soy · KAIRO', 'Grated ginger'], method: 'Two parts soy, one part vinegar, one spoon of KAIRO, a pinch of ginger. The dip your dumplings have been waiting for.', time: '2 min', serves: 4, heat: 2 },
  { idx: '04', image: 'https://images.unsplash.com/photo-1768634003113-42903d7ffe1b?w=1800&q=80&fm=jpg&fit=max', title: 'Crispy rice & egg', ja: '焼きおにぎり', ingredients: ['Day-old rice', 'Fried egg', 'Sesame · KAIRO'], method: 'Press cold rice into a hot pan until it crackles. Slide a fried egg on top. Drizzle KAIRO over the yolk. Break it open.', time: '12 min', serves: 1, heat: 4 },
];
{
  const rec = $('.recipes');
  const setRecProgress = gsap.quickSetter('.recipes__progress b', 'scaleX');
  const recIdx = $('.recipes__progress span');
  let shown = -1;
  const gallery = window.KairoGallery ? KairoGallery.init($('#recipeGallery'), RECIPES, {
    wall: '#b4261a', lineY: .38, onFocus: item => rec.classList.toggle('is-focused', !!item)
  }) : null;
  $('.recipes__close').addEventListener('click', () => gallery && gallery.unfocus());
  entrance('.recipes', t => t.fromTo('.recipes__progress, .recipes__journal', { opacity: 0 }, { opacity: 1 }, .3));
  ScrollTrigger.create({
    trigger: rec, start: 'top top', end: '+=220%', pin: true, anticipatePin: 1,
    onUpdate(self) {
      setRecProgress(self.progress);
      const n = Math.min(RECIPES.length, 1 + Math.floor(self.progress * (RECIPES.length + .4)));
      if (n !== shown) { shown = n; recIdx.textContent = pad2(n); }
      gallery && gallery.setProgress(self.progress);
    }
  });
}

/* ═══════════════════════════════ 08 VOICES ═══ */
gsap.timeline({ scrollTrigger: { trigger: '.voices', start: 'top 80%', end: 'top 20%', scrub: 1 } })
  .fromTo('.voices .chapter-tag', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, 0)
  .fromTo('.voices .kicker', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0)
  .fromTo('.voices .line-inner', { yPercent: 110 }, { yPercent: 0, stagger: .15, ease: 'power2.out' }, 0)
  .fromTo('.voices__score', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, .2);
countUp($('.voices__score b'), 4.9, '.voices__score', n => n.toFixed(1));
gsap.to('.voices__row:not(.voices__row--rev)', { xPercent: -22, ease: 'none', scrollTrigger: { trigger: '.voices__marquee', start: 'top bottom', end: 'bottom top', scrub: .6 } });
gsap.fromTo('.voices__row--rev', { xPercent: -22 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '.voices__marquee', start: 'top bottom', end: 'bottom top', scrub: .6 } });
photoReveal('.voices__media', 'inset(0 8% 100% 8%)');
photoParallax('.voices__media img', '.voices__media');
gsap.timeline({ scrollTrigger: { trigger: '.voices__cards', start: 'top 90%', end: 'top 35%', scrub: 1 } })
  .fromTo('.voice', { y: 120, opacity: 0, rotation: i => (i - 1) * 4 }, { y: i => (i === 1 ? '6vh' : 0), opacity: 1, rotation: 0, stagger: .12, ease: 'power2.out' }, 0)
  .fromTo('.voices__press', { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, .5);

/* ═══════════════════════════════ 09 FINALE ═══ */
gsap.timeline({ scrollTrigger: { trigger: '.finale', start: 'top 75%', end: 'top 15%', scrub: 1 } })
  .fromTo('.finale__note', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0)
  .fromTo('.finale .line-inner', { yPercent: 110 }, { yPercent: 0, stagger: .15, ease: 'power2.out' }, 0)
  .fromTo('.finale__glow', { scale: .5, opacity: 0 }, { scale: 1.1, opacity: 1 }, 0);
gsap.timeline({ scrollTrigger: { trigger: '.purchase-card', start: 'top 95%', end: 'top 55%', scrub: 1 } })
  .fromTo('.purchase-card', { y: 90, opacity: 0, rotationX: 12 }, { y: 0, opacity: 1, rotationX: 0 }, 0)
  .fromTo('footer', { opacity: 0 }, { opacity: 1 }, .3);
gsap.fromTo(fx, { rotation: 0, yPercent: 0, scale: 1 }, { rotation: 0, yPercent: -2, scale: 1.06, ease: 'none',
  scrollTrigger: { trigger: '.finale', start: 'top top', end: 'bottom bottom', scrub: 1 } });

/* bottle visibility: out during Recipes + Voices, back for the finale, gone before the footer */
const fade = (trigger, from, to, start, end) => gsap.fromTo(stage, { autoAlpha: from }, { autoAlpha: to, ease: 'none', immediateRender: false, scrollTrigger: { trigger, start, end, scrub: true } });
fade('.recipes', 1, 0, 'top 70%', 'top 20%');
fade('.finale', 0, 1, 'top 70%', 'top 30%');
fade('footer', 1, 0, 'top 90%', 'top 50%');

/* ═══════════════════════════════ INTERACTIONS ═══ */
{
  const cursor = $('.cursor');
  const cursorX = gsap.quickSetter(cursor, 'x', 'px'), cursorY = gsap.quickSetter(cursor, 'y', 'px');
  const bottleX = gsap.quickTo(bottle, 'x', { duration: 1.2, ease: 'power2.out' });
  const bottleY = gsap.quickTo(bottle, 'y', { duration: 1.2, ease: 'power2.out' });
  addEventListener('pointermove', e => {
    cursorX(e.clientX); cursorY(e.clientY);
    if (!isDesktop() || reduced) return;
    bottleX((e.clientX / innerWidth - .5) * 14);
    bottleY((e.clientY / innerHeight - .5) * 10);
  }, { passive: true });
  $$('a,button').forEach(el => {
    el.addEventListener('pointerenter', () => cursor.classList.add('on'));
    el.addEventListener('pointerleave', () => cursor.classList.remove('on'));
  });
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  const t = id.length > 1 && $(id);
  if (!t) return;
  e.preventDefault();
  const st = ScrollTrigger.getAll().find(s => s.trigger === t && s.pin); // pinned: land on the pin start
  scrollTo(st ? st.start : t.getBoundingClientRect().top + scrollY);
}));

const toast = $('.toast');
const showToast = html => { toast.innerHTML = html; toast.classList.add('show'); clearTimeout(showToast.t); showToast.t = setTimeout(() => toast.classList.remove('show'), 3000); };
$('.buy-button').addEventListener('click', e => {
  e.currentTarget.querySelector('span').textContent = 'Added — 1 bottle';
  e.currentTarget.querySelector('b').textContent = '✓';
  gsap.fromTo(fx, { scale: 1.06 }, { scale: 1.12, yoyo: true, repeat: 1, duration: .25, ease: 'power2.inOut' });
  showToast('KAIRO is on your table. <span>Nice choice.</span>');
});
$('.newsletter')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = e.currentTarget.querySelector('input');
  if (!input.value.includes('@')) return input.focus();
  input.value = '';
  showToast('You’re on the list. <span>First batch drop is yours.</span>');
});

/* ═══════════════════════════════ BOOT ═══ */
ScrollTrigger.sort();          // refresh in document order so pins are measured first
ScrollTrigger.refresh();
updateChapter(true);
document.fonts?.ready.then(() => ScrollTrigger.refresh());
bottle.addEventListener('load', () => ScrollTrigger.refresh());
addEventListener('load', () => ScrollTrigger.refresh());

  `}],Uf="",Of="",If="",zf="",Df="",Ff="",Bf=["click","change","input","submit","mouseover","mouseout","mouseenter","mouseleave","keydown","keyup","focus","blur"];function $s(e,n){const t=e.id,r=e.className,l=e.getAttribute("style");return n.id&&(e.id=n.id),n.className.split(/\s+/).filter(Boolean).forEach(o=>e.classList.add(o)),n.style&&(e.style.cssText=[e.style.cssText,n.style].filter(Boolean).join("; ")),()=>{e.id=t,e.className=r,l===null?e.removeAttribute("style"):e.setAttribute("style",l)}}function Hf(){const e=$s(document.documentElement,{id:Uf,className:Of,style:If}),n=$s(document.body,{id:zf,className:Df,style:Ff});return()=>{n(),e()}}function Wf(e){const n=[];return Bf.forEach(t=>{e.querySelectorAll(`[data-sinera-on${t}]`).forEach(r=>{const l=r.getAttribute(`data-sinera-on${t}`);if(!l)return;const o=function(i){Function("event",l).call(r,i)===!1&&(i.preventDefault(),i.stopPropagation())};r.addEventListener(t,o),n.push(()=>r.removeEventListener(t,o))})}),()=>n.forEach(t=>t())}function $f(e){const n=document.createElement("script");return e.id&&(n.id=e.id),e.type&&(n.type=e.type),e.async&&(n.async=!0),e.defer&&(n.defer=!0),e.src?n.src=e.src:e.content&&(n.textContent=e.content),document.body.appendChild(n),n}function Vf(){return Lt.useLayoutEffect(()=>Hf(),[]),Lt.useEffect(()=>{const e=Wf(document),n=Mf.filter(t=>t.src||t.content).map($f);return()=>{e(),n.forEach(t=>t.remove())}},[]),s.jsxs("div",{className:"sinera-source-body",children:[s.jsxs("div",{className:"intro","aria-hidden":"true",children:[s.jsxs("div",{className:"intro__mark",children:[s.jsx("span",{children:"K"}),s.jsx("span",{children:"A"}),s.jsx("span",{children:"I"}),s.jsx("span",{children:"R"}),s.jsx("span",{children:"O"})]}),s.jsx("p",{className:"intro__ja",lang:"ja",children:"香味辣油"}),s.jsx("div",{className:"intro__bar",children:s.jsx("i",{})})]}),s.jsx("div",{className:"cursor","aria-hidden":"true"}),s.jsx("div",{className:"progress","aria-hidden":"true",children:s.jsx("i",{})}),s.jsxs("header",{className:"site-header","data-theme":"light",children:[s.jsxs("a",{className:"brand",href:"#top",children:["KAIRO ",s.jsx("strong",{lang:"ja",children:"カイロ"})]}),s.jsxs("nav",{children:[s.jsx("a",{href:"#story",children:"Story"}),s.jsx("a",{href:"#craft",children:"Craft"}),s.jsx("a",{href:"#flavor",children:"Flavor"}),s.jsx("a",{href:"#recipes",children:"Recipes"}),s.jsx("a",{href:"#voices",children:"Voices"}),s.jsx("a",{href:"#shop",children:"Shop"})]}),s.jsxs("a",{className:"pill",href:"#shop",children:[s.jsx("span",{className:"pill__label",children:"Get the bottle"}),s.jsx("span",{className:"pill__arrow",children:"→"})]})]}),s.jsxs("aside",{className:"scroll-meter","aria-hidden":"true",children:[s.jsx("span",{className:"scroll-meter__number",children:"01"}),s.jsx("span",{className:"scroll-meter__track",children:s.jsx("i",{})}),s.jsx("span",{children:"09"}),s.jsx("span",{className:"scroll-meter__label",lang:"ja",children:"下"})]}),s.jsx("div",{className:"product-stage","aria-hidden":"true",children:s.jsx("div",{className:"product-pose",children:s.jsxs("div",{className:"product-fx",children:[s.jsx("div",{className:"product-halo"}),s.jsx("div",{className:"product-shadow"}),s.jsx("img",{className:"product-bottle",src:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b1b8828-db7d-4103-8083-59110f62162b_1600w.png",alt:"KAIRO chili garlic sauce bottle",draggable:"false"})]})})}),s.jsxs("main",{id:"top",children:[s.jsxs("section",{className:"chapter hero","data-chapter":"1","data-theme":"light",children:[s.jsxs("p",{className:"hero__category",children:[s.jsx("span",{children:"Chili garlic"}),s.jsx("span",{children:"sauce"})]}),s.jsx("p",{className:"hero__kana",lang:"ja",children:"カイロ"}),s.jsxs("h1",{className:"hero__title",children:[s.jsx("span",{className:"hero__line hero__line--l",children:s.jsx("span",{className:"line-inner",children:s.jsx("span",{className:"hero__flame",children:"Fire HEAT,"})})}),s.jsx("span",{className:"hero__line hero__line--r",children:s.jsx("span",{className:"line-inner",children:"COMPOSED."})})]}),s.jsx("p",{className:"hero__flavor-ja",lang:"ja",children:"旨味と辛味"}),s.jsxs("p",{className:"hero__crafted",children:[s.jsx("span",{children:"Crafted"}),s.jsx("span",{children:"in Japan."}),s.jsx("span",{children:"Small batch."})]}),s.jsxs("div",{className:"hero__scroll",children:[s.jsx("i",{}),s.jsx("span",{children:"Scroll"})]}),s.jsx("p",{className:"hero__vol",lang:"ja",children:"180ml · 香味辣油"})]}),s.jsx("div",{className:"band","aria-hidden":"true",children:s.jsxs("div",{className:"band__track",children:[s.jsx("span",{children:"Heat with intent"}),s.jsx("em",{lang:"ja",children:"香味辣油"}),s.jsx("span",{children:"Slow-roasted garlic"}),s.jsx("em",{lang:"ja",children:"にんにく"}),s.jsx("span",{children:"Toasted sesame"}),s.jsx("em",{lang:"ja",children:"胡麻"}),s.jsx("span",{children:"Small batch · Japan"}),s.jsx("em",{lang:"ja",children:"日本製"}),s.jsx("span",{children:"Heat with intent"}),s.jsx("em",{lang:"ja",children:"香味辣油"}),s.jsx("span",{children:"Slow-roasted garlic"}),s.jsx("em",{lang:"ja",children:"にんにく"}),s.jsx("span",{children:"Toasted sesame"}),s.jsx("em",{lang:"ja",children:"胡麻"}),s.jsx("span",{children:"Small batch · Japan"}),s.jsx("em",{lang:"ja",children:"日本製"})]})}),s.jsxs("section",{className:"chapter story",id:"story","data-chapter":"2","data-theme":"dark",children:[s.jsx("figure",{className:"story__media media","aria-hidden":"true",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1601876818790-33a0783ec542?w=1800&q=80&fm=jpg&fit=max",alt:"",loading:"lazy",decoding:"async"})}),s.jsxs("div",{className:"chapter-tag",children:[s.jsx("span",{className:"chapter-tag__num",children:"01"})," Philosophy · ",s.jsx("span",{lang:"ja",children:"哲学"})]}),s.jsxs("div",{className:"story__copy",children:[s.jsxs("p",{className:"kicker",children:["Balance before burn · ",s.jsx("span",{lang:"ja",children:"調和"})]}),s.jsxs("h2",{className:"split",children:[s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:"HEAT, HELD"})}),s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:s.jsx("em",{children:"IN BALANCE."})})})]}),s.jsx("p",{className:"body-copy words",children:"Inspired by the precision of the Japanese pantry, KAIRO layers fragrant chili, slow-roasted garlic and toasted sesame. The heat arrives with purpose—then makes room for the food."}),s.jsxs("div",{className:"story__stats",children:[s.jsxs("div",{children:[s.jsx("b",{"data-count":"3",children:"0"}),s.jsx("span",{children:"Core aromatics"})]}),s.jsxs("div",{children:[s.jsx("b",{"data-count":"72",children:"0"}),s.jsx("span",{children:"Hours slow-roast"})]}),s.jsxs("div",{children:[s.jsx("b",{"data-count":"180",children:"0"}),s.jsx("span",{children:"ml per bottle"})]})]})]}),s.jsxs("div",{className:"story__side-note",children:[s.jsx("span",{children:"一"}),s.jsxs("p",{children:["Bright aroma.",s.jsx("br",{}),"Measured heat.",s.jsx("br",{}),"Deep umami."]})]})]}),s.jsxs("section",{className:"chapter ingredients",id:"inside","data-chapter":"3","data-theme":"light",children:[s.jsxs("figure",{className:"ingredients__media media","aria-hidden":"true",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1609158793803-7060643f9168?w=1800&q=80&fm=jpg&fit=max",alt:"",loading:"lazy",decoding:"async","data-ingredient":"0"}),s.jsx("img",{src:"https://images.unsplash.com/photo-1579705744772-f26014b5e084?w=1800&q=80&fm=jpg&fit=max",alt:"",loading:"lazy",decoding:"async","data-ingredient":"1"}),s.jsx("img",{src:"https://images.unsplash.com/photo-1708949125682-c0cb09727101?w=1800&q=80&fm=jpg&fit=max",alt:"",loading:"lazy",decoding:"async","data-ingredient":"2"}),s.jsx("img",{src:"https://images.unsplash.com/photo-1621958180509-74e9a29b3758?w=1800&q=80&fm=jpg&fit=max",alt:"",loading:"lazy",decoding:"async","data-ingredient":"3"}),s.jsxs("figcaption",{className:"ingredients__cap",children:[s.jsx("span",{children:"Red chili"}),s.jsx("span",{children:"Garlic"}),s.jsx("span",{children:"Sesame"}),s.jsx("span",{children:"Rice oil"})]})]}),s.jsxs("div",{className:"chapter-tag",children:[s.jsx("span",{className:"chapter-tag__num",children:"02"})," Ingredients · ",s.jsx("span",{lang:"ja",children:"素材"})]}),s.jsxs("div",{className:"ingredients__headline",children:[s.jsx("p",{className:"kicker",children:"Few ingredients. Clear purpose."}),s.jsxs("h2",{className:"split",children:[s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:"PURE."})}),s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:"TOASTED."})}),s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:s.jsx("em",{children:"ALIVE."})})})]})]}),s.jsxs("ol",{className:"ingredient-list",children:[s.jsxs("li",{children:[s.jsx("span",{children:"01"}),s.jsxs("strong",{children:["Red chili ",s.jsx("i",{lang:"ja",children:"唐辛子"})]}),s.jsx("small",{children:"clean, measured heat"}),s.jsx("b",{})]}),s.jsxs("li",{children:[s.jsx("span",{children:"02"}),s.jsxs("strong",{children:["Garlic ",s.jsx("i",{lang:"ja",children:"にんにく"})]}),s.jsx("small",{children:"slow-roasted depth"}),s.jsx("b",{})]}),s.jsxs("li",{children:[s.jsx("span",{children:"03"}),s.jsxs("strong",{children:["Sesame ",s.jsx("i",{lang:"ja",children:"胡麻"})]}),s.jsx("small",{children:"toasted warmth"}),s.jsx("b",{})]}),s.jsxs("li",{children:[s.jsx("span",{children:"04"}),s.jsxs("strong",{children:["Rice oil ",s.jsx("i",{lang:"ja",children:"米油"})]}),s.jsx("small",{children:"silky, neutral finish"}),s.jsx("b",{})]})]}),s.jsxs("div",{className:"ingredients__counter","aria-hidden":"true",children:[s.jsx("b",{children:"01"}),s.jsx("span",{children:"/ 04"})]})]}),s.jsxs("section",{className:"chapter craft",id:"craft","data-chapter":"4","data-theme":"dark",children:[s.jsxs("div",{className:"chapter-tag",children:[s.jsx("span",{className:"chapter-tag__num",children:"03"})," The craft · ",s.jsx("span",{lang:"ja",children:"製法"})]}),s.jsxs("div",{className:"craft__head",children:[s.jsxs("p",{className:"kicker",children:["Made in Wakayama · ",s.jsx("span",{lang:"ja",children:"和歌山県"})]}),s.jsxs("h2",{className:"split",children:[s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:"SLOW HEAT."})}),s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:s.jsx("em",{children:"FOUR DAYS."})})})]}),s.jsx("p",{className:"body-copy words",children:"Every batch is 40 bottles. No extract, no colouring, no shortcuts—just time, temperature and attention. The way a small kura would do it."})]}),s.jsxs("figure",{className:"craft__media media","aria-hidden":"true",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1769169471811-635943dfe43f?w=1800&q=80&fm=jpg&fit=max",alt:"",loading:"lazy",decoding:"async"}),s.jsxs("figcaption",{children:["Kishū, Wakayama · ",s.jsx("span",{lang:"ja",children:"紀州"})]})]}),s.jsxs("ol",{className:"craft__steps",children:[s.jsx("i",{className:"craft__rail",children:s.jsx("b",{})}),s.jsxs("li",{children:[s.jsx("span",{className:"craft__num",children:"01"}),s.jsxs("div",{children:[s.jsxs("h3",{children:["Roast ",s.jsx("em",{lang:"ja",children:"焙煎"})]}),s.jsx("p",{children:"Garlic and sesame are roasted low in cast iron until sweet and just golden."}),s.jsx("small",{children:"115°C · 6 hours"})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"craft__num",children:"02"}),s.jsxs("div",{children:[s.jsxs("h3",{children:["Infuse ",s.jsx("em",{lang:"ja",children:"抽出"})]}),s.jsx("p",{children:"Rice oil is warmed with three chilies—takanotsume, sansho and a smoked Kishū pepper."}),s.jsx("small",{children:"90°C · 90 minutes"})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"craft__num",children:"03"}),s.jsxs("div",{children:[s.jsxs("h3",{children:["Rest ",s.jsx("em",{lang:"ja",children:"熟成"})]}),s.jsx("p",{children:"The blend rests in ceramic for three days so the heat rounds and the aroma settles."}),s.jsx("small",{children:"Dark · 72 hours"})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"craft__num",children:"04"}),s.jsxs("div",{children:[s.jsxs("h3",{children:["Bottle ",s.jsx("em",{lang:"ja",children:"瓶詰"})]}),s.jsx("p",{children:"Hand-filled, hand-labelled, batch-numbered. Best within 6 months of opening."}),s.jsx("small",{children:"Batch 01 · 40 bottles"})]})]})]})]}),s.jsxs("section",{className:"chapter spectrum",id:"flavor","data-chapter":"5","data-theme":"dark",children:[s.jsxs("div",{className:"chapter-tag",children:[s.jsx("span",{className:"chapter-tag__num",children:"04"})," The flavor · ",s.jsx("span",{lang:"ja",children:"味わい"})]}),s.jsxs("h2",{className:"spectrum__word","aria-label":"Aroma, heat, umami",children:[s.jsx("span",{"data-word":"0",children:"AROMA"}),s.jsx("span",{"data-word":"1",children:"HEAT"}),s.jsx("span",{"data-word":"2",children:"UMAMI"})]}),s.jsxs("div",{className:"spectrum__ring","aria-hidden":"true",children:[s.jsxs("svg",{viewBox:"0 0 200 200",children:[s.jsx("circle",{className:"ring-track",cx:"100",cy:"100",r:"92"}),s.jsx("circle",{className:"ring-fill",cx:"100",cy:"100",r:"92"})]}),s.jsxs("div",{className:"spectrum__ring-val",children:[s.jsx("b",{children:"8.6"}),s.jsx("span",{children:"/10"})]})]}),s.jsxs("div",{className:"flavor-notes",children:[s.jsxs("button",{className:"flavor-note is-active","data-note":"0",children:[s.jsx("span",{children:"01 / Aroma"}),s.jsx("i",{children:s.jsx("b",{style:{"--level":"86%"}})}),s.jsx("em",{children:"8.6"})]}),s.jsxs("button",{className:"flavor-note","data-note":"1",children:[s.jsx("span",{children:"02 / Heat"}),s.jsx("i",{children:s.jsx("b",{style:{"--level":"72%"}})}),s.jsx("em",{children:"7.2"})]}),s.jsxs("button",{className:"flavor-note","data-note":"2",children:[s.jsx("span",{children:"03 / Umami"}),s.jsx("i",{children:s.jsx("b",{style:{"--level":"91%"}})}),s.jsx("em",{children:"9.1"})]})]}),s.jsxs("div",{className:"spectrum__copy",children:[s.jsx("p",{children:"Fragrant toasted sesame and roasted garlic rise first—warm, clean and immediately inviting."}),s.jsx("p",{children:"A confident medium-high chili heat that builds gradually and never overwhelms the food."}),s.jsx("p",{children:"A deep savory finish from slow-roasted garlic, sesame and naturally seasoned rice oil."})]}),s.jsx("p",{className:"spectrum__hint",children:"Scroll to taste through"})]}),s.jsxs("section",{className:"chapter ritual",id:"ritual","data-chapter":"6","data-theme":"red",children:[s.jsxs("div",{className:"chapter-tag",children:[s.jsx("span",{className:"chapter-tag__num",children:"05"})," The ritual · ",s.jsx("span",{lang:"ja",children:"食べ方"})]}),s.jsx("div",{className:"ritual__number",lang:"ja",children:"味"}),s.jsxs("div",{className:"ritual__copy",children:[s.jsxs("p",{className:"kicker",children:["A final layer · ",s.jsx("span",{lang:"ja",children:"仕上げの一滴"})]}),s.jsxs("h2",{className:"split",children:[s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:"ONE SPOON."})}),s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:s.jsx("em",{children:"EVERYTHING OPENS."})})})]}),s.jsx("p",{className:"body-copy words",children:"Spoon it over at the end—never cooked into. The oil carries the aroma, the flakes carry the heat, and the whole plate lifts."})]}),s.jsxs("div",{className:"ritual__uses",children:[s.jsx("span",{children:"Eggs"}),s.jsx("span",{children:"Noodles"}),s.jsx("span",{children:"Pizza"}),s.jsx("span",{children:"Dumplings"}),s.jsx("span",{children:"Rice"}),s.jsx("span",{children:"Anything"})]})]}),s.jsxs("section",{className:"chapter recipes",id:"recipes","data-chapter":"7","data-theme":"red",children:[s.jsxs("div",{className:"gallery",id:"recipeGallery",children:[s.jsx("div",{className:"gallery__wall"}),s.jsx("div",{className:"gallery__shade"}),s.jsx("canvas",{className:"gallery__back gallery__layer"}),s.jsx("canvas",{className:"gallery__gl gallery__layer"}),s.jsx("canvas",{className:"gallery__front gallery__layer"}),s.jsx("p",{className:"gallery__hint",children:"Scroll to browse · click a print to read · drag to tug"})]}),s.jsxs("div",{className:"chapter-tag",children:[s.jsx("span",{className:"chapter-tag__num",children:"06"})," Recipes · ",s.jsx("span",{lang:"ja",children:"レシピ"})]}),s.jsxs("div",{className:"recipes__head",children:[s.jsx("p",{className:"kicker",children:"Five minutes, one spoon"}),s.jsx("h2",{className:"split",children:s.jsx("span",{className:"line",children:s.jsxs("span",{className:"line-inner",children:["COOK ",s.jsx("em",{children:"WITH IT."})]})})})]}),s.jsxs("div",{className:"recipes__progress","aria-hidden":"true",children:[s.jsx("span",{children:"01"}),s.jsx("i",{children:s.jsx("b",{})}),s.jsx("span",{children:"04"})]}),s.jsxs("button",{className:"recipes__close",type:"button","aria-label":"Close recipe",children:["Close ",s.jsx("span",{children:"×"})]}),s.jsxs("a",{className:"recipes__journal text-link",href:"#",children:["Twenty more ways to use the last drop ",s.jsx("span",{children:"→"})]})]}),s.jsxs("section",{className:"chapter voices",id:"voices","data-chapter":"8","data-theme":"dark",children:[s.jsxs("div",{className:"chapter-tag",children:[s.jsx("span",{className:"chapter-tag__num",children:"07"})," Voices · ",s.jsx("span",{lang:"ja",children:"声"})]}),s.jsxs("div",{className:"voices__head",children:[s.jsx("p",{className:"kicker",children:"From the table"}),s.jsxs("h2",{className:"split",children:[s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:"SAID WITH"})}),s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:s.jsx("em",{children:"A FULL MOUTH."})})})]})]}),s.jsxs("div",{className:"voices__score",children:[s.jsx("b",{"data-count":"4.9",children:"0.0"}),s.jsx("span",{children:"★★★★★"}),s.jsxs("small",{children:["1,284 reviews · ",s.jsx("span",{lang:"ja",children:"レビュー"})]})]}),s.jsxs("div",{className:"voices__marquee","aria-hidden":"true",children:[s.jsxs("div",{className:"voices__row",children:[s.jsx("span",{children:"“Finally a chili oil that tastes like garlic first.”"}),s.jsx("span",{children:"“The label alone got it on my counter. The taste keeps it there.”"}),s.jsx("span",{children:"“Heat you can actually taste through.”"}),s.jsx("span",{children:"“Eggs will never be the same.”"}),s.jsx("span",{children:"“Finally a chili oil that tastes like garlic first.”"}),s.jsx("span",{children:"“The label alone got it on my counter. The taste keeps it there.”"}),s.jsx("span",{children:"“Heat you can actually taste through.”"}),s.jsx("span",{children:"“Eggs will never be the same.”"})]}),s.jsxs("div",{className:"voices__row voices__row--rev",children:[s.jsx("span",{lang:"ja",children:"「香りが違う。」"}),s.jsx("span",{children:"“Bought two. Gave one away. Regret it.”"}),s.jsx("span",{children:"“Balanced is the right word.”"}),s.jsx("span",{lang:"ja",children:"「毎朝、卵かけご飯に。」"}),s.jsx("span",{lang:"ja",children:"「香りが違う。」"}),s.jsx("span",{children:"“Bought two. Gave one away. Regret it.”"}),s.jsx("span",{children:"“Balanced is the right word.”"}),s.jsx("span",{lang:"ja",children:"「毎朝、卵かけご飯に。」"})]})]}),s.jsx("figure",{className:"voices__media media","aria-hidden":"true",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1722197912726-940252cabfba?w=1800&q=80&fm=jpg&fit=max",alt:"",loading:"lazy",decoding:"async"})}),s.jsxs("div",{className:"voices__cards",children:[s.jsxs("figure",{className:"voice",children:[s.jsx("blockquote",{children:"“I keep a bottle at the restaurant and one at home. It does the thing good rāyu does—makes you taste the food more, not less.”"}),s.jsxs("figcaption",{children:[s.jsx("b",{children:"Aiko Tanaka"}),s.jsxs("span",{children:["Chef, Kōbe · ",s.jsx("span",{lang:"ja",children:"神戸"})]})]})]}),s.jsxs("figure",{className:"voice voice--red",children:[s.jsx("blockquote",{children:"“Measured heat, deep garlic, and that toasted sesame at the end. My table asks for it by name now.”"}),s.jsxs("figcaption",{children:[s.jsx("b",{children:"Marcus Oyelaran"}),s.jsx("span",{children:"Home cook, London"})]})]}),s.jsxs("figure",{className:"voice",children:[s.jsx("blockquote",{children:"“Most chili crisps shout. KAIRO speaks. I put it on rice, eggs, and—don’t tell anyone—vanilla ice cream.”"}),s.jsxs("figcaption",{children:[s.jsx("b",{children:"Sora Lindqvist"}),s.jsx("span",{children:"Food writer, Stockholm"})]})]})]}),s.jsxs("div",{className:"voices__press","aria-hidden":"true",children:[s.jsx("span",{children:"As seen in"}),s.jsx("b",{children:"TOKYO TABLE"}),s.jsx("b",{children:"Umami Quarterly"}),s.jsx("b",{children:"THE SPICE JOURNAL"}),s.jsx("b",{children:"Kitchen & Kura"})]})]}),s.jsxs("section",{className:"chapter finale",id:"shop","data-chapter":"9","data-theme":"dark",children:[s.jsx("div",{className:"finale__glow","aria-hidden":"true"}),s.jsxs("p",{className:"finale__note",children:["180 ml · Kōmi rāyu · ",s.jsx("span",{lang:"ja",children:"香味辣油"})]}),s.jsxs("h2",{className:"split",children:[s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:"FINISH WITH"})}),s.jsx("span",{className:"line",children:s.jsx("span",{className:"line-inner",children:s.jsx("em",{children:"INTENTION."})})})]}),s.jsxs("div",{className:"purchase-card",children:[s.jsxs("div",{children:[s.jsx("span",{children:"KAIRO / 香味辣油 / BLEND 01"}),s.jsx("strong",{children:"$22.00"})]}),s.jsxs("button",{className:"buy-button",children:[s.jsx("span",{children:"Add to your pantry"}),s.jsx("b",{children:"＋"})]})]}),s.jsxs("footer",{children:[s.jsxs("div",{className:"footer__top",children:[s.jsxs("div",{className:"footer__brand",children:[s.jsxs("a",{className:"brand",href:"#top",children:["KAIRO ",s.jsx("strong",{lang:"ja",children:"カイロ"})]}),s.jsxs("p",{children:["Japanese method. Modern table.",s.jsx("br",{}),"Made in small batches in Wakayama, shipped worldwide."]})]}),s.jsxs("form",{className:"newsletter",noValidate:"",children:[s.jsxs("label",{htmlFor:"nl",children:["Batch drops & recipes · ",s.jsx("span",{lang:"ja",children:"お知らせ"})]}),s.jsxs("div",{children:[s.jsx("input",{id:"nl",type:"email",placeholder:"your@email.com",autoComplete:"email"}),s.jsxs("button",{type:"submit",children:["Join ",s.jsx("span",{children:"→"})]})]})]})]}),s.jsxs("div",{className:"footer__cols",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Shop"}),s.jsx("a",{href:"#shop",children:"Blend 01"}),s.jsx("a",{href:"#",children:"Gift set"}),s.jsx("a",{href:"#",children:"Stockists"})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Learn"}),s.jsx("a",{href:"#craft",children:"Craft"}),s.jsx("a",{href:"#recipes",children:"Recipes"}),s.jsx("a",{href:"#",children:"Journal"})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Company"}),s.jsx("a",{href:"#",children:"About"}),s.jsx("a",{href:"#",children:"Wholesale"}),s.jsx("a",{href:"mailto:hello@kairo.example",children:"Contact"})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Follow"}),s.jsx("a",{href:"#",children:"Instagram"}),s.jsx("a",{href:"#",children:"TikTok"}),s.jsx("a",{href:"#",children:"Pinterest"})]})]}),s.jsxs("div",{className:"footer__bottom",children:[s.jsx("span",{children:"© 2026 KAIRO Foods K.K. · Wakayama, Japan"}),s.jsx("span",{children:"Shipping · Privacy · Terms"}),s.jsx("span",{lang:"ja",children:"香味辣油"})]})]})]})]}),s.jsxs("div",{className:"toast",role:"status",children:["KAIRO is on your table. ",s.jsx("span",{children:"Nice choice."})]})]})}tc(document.getElementById("root")).render(s.jsx(wc.StrictMode,{children:s.jsx(Vf,{})}));
