(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3811)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",a="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(8754),o=r._(n(7294)),u=n(4532),l=n(3353),f=n(1410),i=n(9064),a=n(370),c=n(9955),s=n(4224),d=n(508),p=n(1516),h=n(4266),y=n(3991),_=new Set;function v(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(_.has(u))return;_.add(u)}let f=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:_,children:g,prefetch:m=null,passHref:E,replace:O,shallow:C,scroll:P,locale:j,onClick:T,onMouseEnter:M,onTouchStart:R,legacyBehavior:k=!1,...A}=e;n=g,k&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let S=o.default.useContext(c.RouterContext),x=o.default.useContext(s.AppRouterContext),I=null!=S?S:x,N=!S,L=!1!==m,w=null===m?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:U,as:H}=o.default.useMemo(()=>{if(!S){let e=b(f);return{href:e,as:_?b(_):e}}let[e,t]=(0,u.resolveHref)(S,f,!0);return{href:e,as:_?(0,u.resolveHref)(S,_):t||e}},[S,f,_]),K=o.default.useRef(U),F=o.default.useRef(H);k&&(r=o.default.Children.only(n));let D=k?r&&"object"==typeof r&&r.ref:t,[V,G,X]=(0,d.useIntersection)({rootMargin:"200px"}),Z=o.default.useCallback(e=>{(F.current!==H||K.current!==U)&&(X(),F.current=H,K.current=U),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[H,D,U,X,V]);o.default.useEffect(()=>{I&&G&&L&&v(I,U,H,{locale:j},{kind:w},N)},[H,U,G,j,L,null==S?void 0:S.locale,I,N,w]);let q={ref:Z,onClick(e){k||"function"!=typeof T||T(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,u,f,i,a,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let h=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:f,locale:a,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(h):h()}(e,I,U,H,O,C,P,j,N,L)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!N)&&v(I,U,H,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:w},N)},onTouchStart(e){k||"function"!=typeof R||R(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!N)&&v(I,U,H,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:w},N)}};if((0,i.isAbsoluteUrl)(H))q.href=H;else if(!k||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,p.getDomainLocale)(H,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);q.href=t||(0,h.addBasePath)((0,a.addLocale)(H,e,null==S?void 0:S.defaultLocale))}return k?o.default.cloneElement(r,q):o.default.createElement("a",{...A,...q},n)}),m=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(29),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(a||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3811:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),o=n(7294);let u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,o.useState)(),[r,u]=(0,o.useState)(""),l=e=>{let{latitude:t,longitude:r}=e.coords;n({latitude:t,longitude:r})},f=e=>{u(e.message)};return(0,o.useEffect)(()=>{let{geolocation:t}=navigator;if(!t){u("Geolocation is not supported.");return}t.getCurrentPosition(l,f,e)},[e]),{location:t,error:r}};var l=n(8557),f=n(4480);let i={enableHighAccuracy:!0,timeout:1e4,maximumAge:864e5};var a=()=>{let{location:e,error:t}=u(i),n=(0,f.Zl)(l.h);return(0,f.sJ)(l.h),(0,o.useEffect)(()=>{e&&n(e)},[e,n]),null},c=n(1664),s=n.n(c);function d(){return(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,r.jsx)(a,{}),"메인",(0,r.jsx)(s(),{href:"/map",children:"지도"})]})}},8557:function(e,t,n){"use strict";n.d(t,{h:function(){return u}});var r=n(4480);let o=(0,r.cn)({key:"userState",default:{atk:"",locationState:{latitude:0,longitude:0}}}),u=(0,r.nZ)({key:"locationSelector",get:e=>{let{get:t}=e,n=t(o);return n.locationState.latitude},set:(e,t)=>{let{set:n}=e;n(o,e=>({...e,locationState:{...e.locationState,latitude:t}}))}})},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);