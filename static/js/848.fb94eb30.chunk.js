"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[848],{1023:function(e,t,n){n.d(t,{e:function(){return c}});n(2791);var r=n(6731),o=n(7992),a=n(4815),i="MovieList_list__psP2f",s=n(184),c=function(e){var t=e.items,n=e.state;return t.length?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,i=e.title,c=e.poster_path;return(0,s.jsx)("li",{children:(0,s.jsxs)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,s.jsx)("img",{src:c?o.b1+"w154"+c:a.Z,alt:i}),(0,s.jsx)("p",{children:i})]})},t)}))})}):"There are no movies."}},7688:function(e,t,n){n.d(t,{t:function(){return i}});n(2791);var r="Pagination_pagList__navN0",o="Pagination_active__q3h4d",a=n(184),i=function(e){var t=e.page,n=e.total_pages,i=e.onNavigate,s=function(e){i(e.target.value)};if(!(n<=1))return(0,a.jsxs)("ul",{className:r,children:[n>1&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{disabled:1===t,value:t-1,onClick:s,children:"\u2b9c"})}),t>1&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:1,onClick:s,children:"1"})}),t>4&&(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"..."})}),t>3&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:t-2,onClick:s,children:t-2})}),t>2&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:t-1,onClick:s,children:t-1})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{className:o,children:t})}),n-1>t&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:t+1,onClick:s,children:t+1})}),n-2>t&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:t+2,onClick:s,children:t+2})}),n-3>t&&(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"..."})}),n>t&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:n,onClick:s,children:n})}),n>1&&(0,a.jsx)("li",{children:(0,a.jsx)("button",{disabled:t===n,value:t+1,onClick:s,children:"\u2b9e"})})]})}},9848:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return ge}});var i,s,c=n(5861),l=n(885),u=n(4687),d=n.n(u),f=n(2791),p="SearchForm_SearchForm__04cD7",m="SearchForm_SearchForm-button__3MH48",v="SearchForm_SearchForm-button-label__UnSyX",h="SearchForm_SearchForm-input__-wTqe",g=["title","titleId"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function T(e,t){var n=e.title,r=e.titleId,o=b(e,g);return f.createElement("svg",y({stroke:"currentColor",fill:"none",strokeWidth:2,viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?f.createElement("title",{id:r},n):null,i||(i=f.createElement("circle",{cx:11,cy:11,r:8})),s||(s=f.createElement("line",{x1:21,y1:21,x2:16.65,y2:16.65})))}var E=f.forwardRef(T);n.p;function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O=n(2982);function x(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=x(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var C=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=x(e))&&(r&&(r+=" "),r+=t);return r},j=["theme","type"],I=["delay","staleId"];function L(e){return"number"===typeof e&&!isNaN(e)}function N(e){return"boolean"===typeof e}function w(e){return"string"===typeof e}function k(e){return"function"===typeof e}function P(e){return w(e)||k(e)?e:null}function S(e){return null!=e}function R(e){return(0,f.isValidElement)(e)||w(e)||k(e)||L(e)}var D={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},F={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function B(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,l=e.done,u=e.nodeRef,d=e.isIn,p=o?t+"--"+a:t,m=o?n+"--"+a:n,v=(0,f.useRef)(0);return(0,f.useLayoutEffect)((function(){var e=u.current,t=p.split(" "),n=function n(r){var o;r.target===u.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,O.Z)(t)))};!function(){var r;(r=e.classList).add.apply(r,(0,O.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,f.useEffect)((function(){var e=u.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,c):l()};d||(s?t():(v.current=1,e.className+=" "+m,e.addEventListener("animationend",t)))}),[d]),f.createElement(f.Fragment,null,r)}}function M(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var A={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,O.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},z=function(e){var t=e.theme,n=e.type,r=_(e,j);return f.createElement("svg",a({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var H={info:function(e){return f.createElement(z,a({},e),f.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return f.createElement(z,a({},e),f.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return f.createElement(z,a({},e),f.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return f.createElement(z,a({},e),f.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return f.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(k(o)?a=o(i):(0,f.isValidElement)(o)?a=(0,f.cloneElement)(o,i):w(o)||L(o)?a=o:r?a=H.spinner():function(e){return e in H}(n)&&(a=H[n](i))),a}function q(e){var t=(0,f.useReducer)((function(e){return e+1}),0),n=(0,l.Z)(t,2)[1],r=(0,f.useState)([]),o=(0,l.Z)(r,2),a=o[0],i=o[1],s=(0,f.useRef)(null),c=(0,f.useRef)(new Map).current,u=function(e){return-1!==a.indexOf(e)},d=(0,f.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:u,getToast:function(e){return c.get(e)}}).current;function p(e){var t=e.containerId;!d.props.limit||t&&d.containerId!==t||(d.count-=d.queue.length,d.queue=[])}function m(e){i((function(t){return S(e)?t.filter((function(t){return t!==e})):[]}))}function v(){var e=d.queue.shift();g(e.toastContent,e.toastProps,e.staleId)}function h(e,t){var r=t.delay,o=t.staleId,a=_(t,I);if(R(e)&&!function(e){return!s.current||d.props.enableMultiContainer&&e.containerId!==d.props.containerId||c.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,l=a.updateId,u=a.data,p=d.props,h=function(){return m(i)},y=null==l;y&&d.count++;var b,T,E={toastId:i,updateId:l,data:u,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||p.theme,icon:null!=a.icon?a.icon:p.icon,isIn:!1,key:a.key||d.toastKey++,type:a.type,closeToast:h,closeButton:a.closeButton,rtl:p.rtl,position:a.position||p.position,transition:a.transition||p.transition,className:P(a.className||p.toastClassName),bodyClassName:P(a.bodyClassName||p.bodyClassName),style:a.style||p.toastStyle,bodyStyle:a.bodyStyle||p.bodyStyle,onClick:a.onClick||p.onClick,pauseOnHover:N(a.pauseOnHover)?a.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:N(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:N(a.draggable)?a.draggable:p.draggable,draggablePercent:a.draggablePercent||p.draggablePercent,draggableDirection:a.draggableDirection||p.draggableDirection,closeOnClick:N(a.closeOnClick)?a.closeOnClick:p.closeOnClick,progressClassName:P(a.progressClassName||p.progressClassName),progressStyle:a.progressStyle||p.progressStyle,autoClose:!a.isLoading&&(b=a.autoClose,T=p.autoClose,!1===b||L(b)&&b>0?b:T),hideProgressBar:N(a.hideProgressBar)?a.hideProgressBar:p.hideProgressBar,progress:a.progress,role:a.role||p.role,deleteToast:function(){var e=M(c.get(i),"removed");c.delete(i),A.emit(4,e);var t=d.queue.length;if(d.count=S(i)?d.count-1:d.count-d.displayedToast,d.count<0&&(d.count=0),t>0){var r=S(i)?1:d.props.limit;if(1===t||1===r)d.displayedToast++,v();else{var o=r>t?t:r;d.displayedToast=o;for(var a=0;a<o;a++)v()}}else n()}};E.iconOut=Z(E),k(a.onOpen)&&(E.onOpen=a.onOpen),k(a.onClose)&&(E.onClose=a.onClose),E.closeButton=p.closeButton,!1===a.closeButton||R(a.closeButton)?E.closeButton=a.closeButton:!0===a.closeButton&&(E.closeButton=!R(p.closeButton)||p.closeButton);var O=e;(0,f.isValidElement)(e)&&!w(e.type)?O=(0,f.cloneElement)(e,{closeToast:h,toastProps:E,data:u}):k(e)&&(O=e({closeToast:h,toastProps:E,data:u})),p.limit&&p.limit>0&&d.count>p.limit&&y?d.queue.push({toastContent:O,toastProps:E,staleId:o}):L(r)?setTimeout((function(){g(O,E,o)}),r):g(O,E,o)}}function g(e,t,n){var r=t.toastId;n&&c.delete(n);var o={content:e,props:t};c.set(r,o),i((function(e){return[].concat((0,O.Z)(e),[r]).filter((function(e){return e!==n}))})),A.emit(4,M(o,null==o.props.updateId?"added":"updated"))}return(0,f.useEffect)((function(){return d.containerId=e.containerId,A.cancelEmit(3).on(0,h).on(1,(function(e){return s.current&&m(e)})).on(5,p).emit(2,d),function(){c.clear(),A.emit(3,d)}}),[]),(0,f.useEffect)((function(){d.props=e,d.isToastActive=u,d.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(c.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:u}}function U(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function V(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Q(e){var t=(0,f.useState)(!1),n=(0,l.Z)(t,2),r=n[0],o=n[1],a=(0,f.useState)(!1),i=(0,l.Z)(a,2),s=i[0],c=i[1],u=(0,f.useRef)(null),d=(0,f.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,f.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){d.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",x),document.addEventListener("touchmove",O),document.addEventListener("touchend",x);var n=u.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=U(t.nativeEvent),d.y=V(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(d.boundingRect){var t=d.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&d.x>=o&&d.x<=a&&d.y>=n&&d.y<=r?_():E()}}function E(){o(!0)}function _(){o(!1)}function O(t){var n=u.current;d.canDrag&&n&&(d.didMove=!0,r&&_(),d.x=U(t),d.y=V(t),"x"===e.draggableDirection?d.delta=d.x-d.start:d.delta=d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+d.delta+"px)",n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function x(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",x);var t=u.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,f.useEffect)((function(){p.current=e})),(0,f.useEffect)((function(){return u.current&&u.current.addEventListener("d",E,{once:!0}),k(e.onOpen)&&e.onOpen((0,f.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;k(e.onClose)&&e.onClose((0,f.isValidElement)(e.children)&&e.children.props)}}),[]),(0,f.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||_();window.addEventListener("focus",E),window.addEventListener("blur",_)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(C.onMouseEnter=_,C.onMouseLeave=E),y&&(C.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:E,pauseToast:_,isRunning:r,preventExitTransition:s,toastRef:u,eventHandlers:C}}function G(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return f.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},f.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},f.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function W(e){var t=e.delay,n=e.isRunning,o=e.closeToast,i=e.type,s=e.hide,c=e.className,l=e.style,u=e.controlledProgress,d=e.progress,p=e.rtl,m=e.isIn,v=e.theme,h=a(a({},l),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});u&&(h.transform="scaleX("+d+")");var g=C("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+i,r({},"Toastify__progress-bar--rtl",p)),y=k(c)?c({rtl:p,type:i,defaultClassName:g}):C(g,c),b=r({},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){m&&o()});return f.createElement("div",a({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:y,style:h},b))}W.defaultProps={type:F.DEFAULT,hide:!1};var X=function(e){var t=Q(e),n=t.isRunning,o=t.preventExitTransition,i=t.toastRef,s=t.eventHandlers,c=e.closeButton,l=e.children,u=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,h=e.transition,g=e.position,y=e.className,b=e.style,T=e.bodyClassName,E=e.bodyStyle,_=e.progressClassName,O=e.progressStyle,x=e.updateId,j=e.role,I=e.progress,L=e.rtl,N=e.toastId,w=e.deleteToast,P=e.isIn,S=e.isLoading,R=e.iconOut,D=e.theme,F=C("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+p,r({},"Toastify__toast--rtl",L)),B=k(y)?y({rtl:L,position:g,type:p,defaultClassName:F}):C(F,y),M=!!I,A={closeToast:v,type:p,theme:D},z=null;return!1===c||(z=k(c)?c(A):f.isValidElement(c)?f.cloneElement(c,A):G(A)),f.createElement(h,{isIn:P,done:w,position:g,preventExitTransition:o,nodeRef:i},f.createElement("div",a(a({id:N,onClick:d,className:B},s),{},{style:b,ref:i}),f.createElement("div",a(a({},P&&{role:j}),{},{className:k(T)?T({type:p}):C("Toastify__toast-body",T),style:E}),null!=R&&f.createElement("div",{className:C("Toastify__toast-icon",r({},"Toastify--animate-icon Toastify__zoom-enter",!S))},R),f.createElement("div",null,l)),z,(u||M)&&f.createElement(W,a(a({},x&&!M?{key:"pb-"+x}:{}),{},{rtl:L,theme:D,delay:u,isRunning:n,isIn:P,closeToast:v,hide:m,type:p,style:O,className:_,controlledProgress:M,progress:I}))))},Y=B({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),K=(B({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),B({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),B({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,f.forwardRef)((function(e,t){var n=q(e),o=n.getToastToRender,i=n.containerRef,s=n.isToastActive,c=e.className,l=e.style,u=e.rtl,d=e.containerId;function p(e){var t=C("Toastify__toast-container","Toastify__toast-container--"+e,r({},"Toastify__toast-container--rtl",u));return k(c)?c({position:e,rtl:u,defaultClassName:t}):C(t,P(c))}return(0,f.useEffect)((function(){t&&(t.current=i.current)}),[]),f.createElement("div",{ref:i,className:"Toastify",id:d},o((function(e,t){var n=t.length?a({},l):a(a({},l),{},{pointerEvents:"none"});return f.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return f.createElement(X,a(a({},o),{},{isIn:s(o.toastId),style:a(a({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));K.displayName="ToastContainer",K.defaultProps={position:D.TOP_RIGHT,transition:Y,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:G,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var J,$=new Map,ee=[];function te(){return Math.random().toString(36).substring(2,9)}function ne(e){return e&&(w(e.toastId)||L(e.toastId))?e.toastId:te()}function re(e,t){return $.size>0?A.emit(0,e,t):ee.push({content:e,options:t}),t.toastId}function oe(e,t){return a(a({},t),{},{type:t&&t.type||e,toastId:ne(t)})}function ae(e){return function(t,n){return re(t,oe(e,n))}}function ie(e,t){return re(e,oe(F.DEFAULT,t))}ie.loading=function(e,t){return re(e,oe(F.DEFAULT,a({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ie.promise=function(e,t,n){var r,o=t.pending,i=t.error,s=t.success;o&&(r=w(o)?ie.loading(o,n):ie.loading(o.render,a(a({},n),o)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=function(e,t,o){if(null!=t){var i=a(a(a({type:e},c),n),{},{data:o}),s=w(t)?{render:t}:t;return r?ie.update(r,a(a({},i),s)):ie(s.render,a(a({},i),s)),o}ie.dismiss(r)},u=k(e)?e():e;return u.then((function(e){return l("success",s,e)})).catch((function(e){return l("error",i,e)})),u},ie.success=ae(F.SUCCESS),ie.info=ae(F.INFO),ie.error=ae(F.ERROR),ie.warning=ae(F.WARNING),ie.warn=ie.warning,ie.dark=function(e,t){return re(e,oe(F.DEFAULT,a({theme:"dark"},t)))},ie.dismiss=function(e){$.size>0?A.emit(1,e):ee=ee.filter((function(t){return S(e)&&t.options.toastId!==e}))},ie.clearWaitingQueue=function(e){return void 0===e&&(e={}),A.emit(5,e)},ie.isActive=function(e){var t=!1;return $.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ie.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=$.get(n||J);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,i=a(a(a({},r),t),{},{toastId:t.toastId||e,updateId:te()});i.toastId!==e&&(i.staleId=e);var s=i.render||o;delete i.render,re(s,i)}}),0)},ie.done=function(e){ie.update(e,{progress:1})},ie.onChange=function(e){return A.on(4,e),function(){A.off(4,e)}},ie.POSITION=D,ie.TYPE=F,A.on(2,(function(e){J=e.containerId||e,$.set(J,e),ee.forEach((function(e){A.emit(0,e.content,e.options)})),ee=[]})).on(3,(function(e){$.delete(e.containerId||e),0===$.size&&A.off(0).off(1).off(5)}));var se=n(184),ce=function(e){var t=e.onSearch,n=(0,f.useState)(""),r=(0,l.Z)(n,2),o=r[0],a=r[1];return(0,se.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault();var n=o.trim();n?(t(n),a("")):ie.error("Please enter search string!")},children:[(0,se.jsx)("button",{className:m,type:"submit",children:(0,se.jsx)(E,{})}),(0,se.jsx)("label",{className:v,children:"Search"}),(0,se.jsx)("input",{className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){a(e.currentTarget.value)},value:o})]})},le="Searchbar_Searchbar__oVViZ",ue=function(e){var t=e.onSearch;return(0,se.jsx)("header",{className:le,children:(0,se.jsx)(ce,{onSearch:t})})},de=n(7992),fe=n(1023),pe=n(6731),me=n(7689),ve=n(7688),he=n(2981),ge=function(e){var t=(0,f.useState)([]),n=(0,l.Z)(t,2),r=n[0],o=n[1],i=(0,f.useState)(0),s=(0,l.Z)(i,2),u=s[0],p=s[1],m=(0,f.useState)(!1),v=(0,l.Z)(m,2),h=v[0],g=v[1],y=(0,me.TH)(),b=(0,pe.lr)(),T=(0,l.Z)(b,2),E=T[0],_=T[1],O=E.get("query"),x=Number(E.get("page"))||1;(0,f.useEffect)((function(){O&&(0,c.Z)(d().mark((function e(){var t,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),o([]),p(0),e.next=6,de.z1(O,x);case 6:n=e.sent,null!==(t=n.results)&&void 0!==t&&t.length&&(o(n.results),p(n.total_pages)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))()}),[x,O]);return h?(0,se.jsx)(he.Z,{}):(0,se.jsxs)("div",{children:[(0,se.jsx)(ue,{onSearch:function(e){_({query:e})}}),(0,se.jsx)(fe.e,{items:r,state:y}),(0,se.jsx)(ve.t,{page:Number(x),total_pages:u,onNavigate:function(e){_((function(t){var n=a({},t);return O&&(n.query=O),1!==Number(e)&&(n.page=e),n}))}})]})}}}]);
//# sourceMappingURL=848.fb94eb30.chunk.js.map