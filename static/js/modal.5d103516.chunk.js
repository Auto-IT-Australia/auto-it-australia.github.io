(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{182:function(t,e,n){var r=n(184);function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=a?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}},183:function(t,e,n){var r=n(185),o=n(186),a=n(187);t.exports=function(t,e){return r(t)||o(t,e)||a()}},184:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},185:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},186:function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}},187:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},188:function(t,e,n){"use strict";var r=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(42)),a=r(n(23)),i=r(n(0)),u=r(n(11)),l=n(190);function d(t){var e=t.text,n=t.children,r=t.clear,u=t.onClick,d=t.disabled,c=(0,a.default)(t,["text","children","clear","onClick","disabled"]);return i.default.createElement(l.ButtonStyle,(0,o.default)({},c,{disabled:d,clear:r,onClick:!d&&u}),e||n)}d.defaultProps={onClick:function(){},clear:!1,text:"",children:null,disabled:!1},d.propTypes={text:function(t,e,n){return t.text||t.children?null:new Error("One of the props 'text' or 'children' was not specified in ".concat(n,"."))},children:function(t,e,n){return t.text||t.children?null:new Error("One of the props 'text' or 'children' was not specified in ".concat(n,"."))},clear:u.default.bool,onClick:u.default.func,disabled:u.default.bool};var c=d;e.default=c},190:function(t,e,n){"use strict";var r=n(41);function o(){var t=r(["\n\tbackground: ",";\n\tborder-radius: 4px;\n\tpadding: 12px 16px;\n\tcolor: ",";\n\tfont-weight: 600;\n\tfont-size: 14px;\n\ttext-align: center;\n\n\tmargin: 32px;\n\n\t","\n\n\t","\n"]);return o=function(){return t},t}var a=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.ButtonStyle=void 0;var i=a(n(1)).default.div(o(),function(t){if(t.clear)return t.theme.white;switch((t.type||"").toLowerCase()){case"danger":return t.theme.danger;case"warning":return t.theme.warning;case"info":return t.theme.info;case"success":return t.theme.success;case"primary":default:return t.theme.primary}},function(t){if(!t.clear)return t.theme.whiteFont;switch((t.type||"").toLowerCase()){case"danger":return t.theme.danger;case"warning":return t.theme.warning;case"info":return t.theme.info;case"success":return t.theme.success;case"primary":default:return t.theme.primary}},function(t){return t.disabled&&"opacity: 0.6;"},function(t){return!t.disabled&&"\n\t\tcursor: pointer;\n\t\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n\n\t&:active {\n\t\topacity: 0.6;\n\t}\n\t"});e.ButtonStyle=i},225:function(t,e,n){"use strict";var r=n(183),o=n(22),a=n(182);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(0)),u=o(n(43)),l=o(n(11)),d=n(226),c=n(227);function s(t){var e=t.isOpen,n=t.maxWidth,o=t.children,a=t.id,l=t.title,s=t.closeModal,f=t.isDialog,p=t.showTitle,m=t.showClose,v=t.backdropClose,y=(0,i.useState)(!1),h=r(y,2),b=h[0],x=h[1],w=(0,i.useState)(!1),g=r(w,2),M=g[0],C=g[1],O=(0,i.useRef)();(0,i.useEffect)(function(){return e?(x(!e),C(!0)):(setTimeout(function(){x(!e)},200),C(!0)),O.current&&e?(document.addEventListener("keyup",S),document.body.style.overflow="hidden"):(document.body.style.overflow="auto",document.removeEventListener("keyup",S)),function(){document.body.style.overflow="auto",document.removeEventListener("keyup",S)}},[e]);var k,E=f?o:i.default.createElement(d.ModalBody,null,o),_=function(t){s&&s(a)},S=function(t){27===t.keyCode&&_(t)};return i.default.createElement(i.default.Fragment,null,(k=i.default.createElement(d.ModalWrapper,{isOpen:e,isClosed:b,"data-test-id":"".concat(a,"_backdrop"),initialised:M},i.default.createElement(d.ModalBackdrop,null),i.default.createElement(d.ModalScroll,{onClick:function(t){v&&t.target.id==="".concat(a,"_scroll-wrapper")&&_(t)},id:"".concat(a,"_scroll-wrapper")},i.default.createElement(d.Modal,{isOpen:e,isDialog:f,maxWidth:n,"data-test-id":"".concat(a,"_wrapper")},m&&i.default.createElement(d.CloseWrapper,null,i.default.createElement(c.Button,{style:{margin:0},appearance:"text",onClick:_,"aria-label":"Close","data-test-id":"".concat(a,"_close-button")},"X")),b?null:i.default.createElement(d.ModalContent,{tabIndex:"-1","aria-label":l,"data-test-id":"".concat(a,"_modal"),ref:O},p?i.default.createElement(d.ModalTitle,null,l):null,E)))),u.default.createPortal(k,document.body)))}s.defaultProps={maxWidth:"768px",isOpen:!1,showTitle:!0,showClose:!0,backdropClose:!1,isDialog:!1},s.propTypes={maxWidth:l.default.string,isOpen:l.default.bool,id:l.default.string.isRequired,title:l.default.string.isRequired,showTitle:l.default.bool,showClose:l.default.bool,closeModal:l.default.func.isRequired,children:l.default.oneOfType([l.default.element,l.default.string,l.default.arrayOf(l.default.element)]).isRequired,backdropClose:l.default.bool,isDialog:l.default.bool};var f=s;e.default=f},226:function(t,e,n){"use strict";var r=n(41);function o(){var t=r(["\n\tpadding: 48px;\n"]);return o=function(){return t},t}function a(){var t=r(["\n\t&:focus {\n\t\toutline: none;\n\t}\n"]);return a=function(){return t},t}function i(){var t=r(["\n\tpadding: 40px;\n\tpadding-bottom: 0;\n\n\tmargin: 0;\n\tfont-family: 'Myriad Pro', sans-serif;\n\tfont-weight: 300;\n\tfont-size: 36px;\n"]);return i=function(){return t},t}function u(){var t=r(["\n\t\t\tborder-radius: 0;\n\t\t\tbox-shadow: 0 22px 30px rgba(0, 0, 0, 0.3);\n\t\t"]);return u=function(){return t},t}function l(){var t=r(["\n\t\t\t\ttransform: translate3d(0, 0, 0);\n\t\t\t"]);return l=function(){return t},t}function d(){var t=r(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: ",";\n\tcolor: ",";\n\tpadding: 0;\n\tmax-width: ",";\n\tmargin: 0 auto;\n\tbox-shadow: 0 2px 4px ",";\n\toverflow-y: auto;\n\n\t@media screen and (min-width: 768px) {\n\t\tposition: static;\n\t\ttop: auto;\n\t\tright: auto;\n\t\tbottom: auto;\n\t\tleft: auto;\n\t\tborder-radius: 5px;\n\t\ttransform: translate3d(0, -100px, 0);\n\t\ttransition: transform 0.2s;\n\t\toverflow-y: visible;\n\n\t\t","\n\t}\n\n\t","\n"]);return d=function(){return t},t}function c(){var t=r(["\n\tposition: absolute;\n\t/* to patch Button's line-height */\n\ttop: calc(48px - 13px);\n\tright: 48px;\n"]);return c=function(){return t},t}function s(){var t=r(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(0, 0, 0, 0.6);\n"]);return s=function(){return t},t}function f(){var t=r(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tpadding: 48px;\n\n\t@media screen and (min-width: 768px) {\n\t\toverflow-y: auto;\n\t}\n"]);return f=function(){return t},t}function p(){var t=r(["\n\t\t\t\ttransform: translate3d(-100%, 0, 0);\n\t\t\t"]);return p=function(){return t},t}function m(){var t=r(["\n\t\t\ttransform: translate3d(0, 0, 0);\n\t\t\topacity: 1;\n\t\t"]);return m=function(){return t},t}function v(){var t=r(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\topacity: 0;\n\ttransform: translate3d(-100%, 0, 0);\n\ttransition: opacity 0.2s, transform 0.2s;\n\tz-index: 999;\n\n\t","\n\n\t@media screen and (min-width: 768px) {\n\t\ttransform: translate3d(0, 0, 0);\n\t\ttransition: opacity 0.2s;\n\n\t\t","\n\t}\n"]);return v=function(){return t},t}var y=n(182);Object.defineProperty(e,"__esModule",{value:!0}),e.ModalBody=e.ModalContent=e.ModalTitle=e.Modal=e.CloseWrapper=e.ModalBackdrop=e.ModalScroll=e.ModalWrapper=void 0;var h=y(n(1)),b=h.default.div(v(),function(t){return t.isOpen&&(0,h.css)(m())},function(t){return(t.isClosed||!t.initialised)&&(0,h.css)(p())});e.ModalWrapper=b;var x=h.default.div(f());e.ModalScroll=x;var w=h.default.div(s());e.ModalBackdrop=w;var g=h.default.div(c());e.CloseWrapper=g;var M=h.default.div(d(),function(t){return t.theme.white||"#FFF"},function(t){return t.theme.fontColor},function(t){return t.maxWidth||"768px"},function(t){return t.theme.boxShadow},function(t){return t.isOpen&&(0,h.css)(l())},function(t){return t.isDialog&&(0,h.css)(u())});e.Modal=M;var C=h.default.h1(i());e.ModalTitle=C;var O=h.default.div(a());e.ModalContent=O;var k=h.default.div(o());e.ModalBody=k},227:function(t,e,n){"use strict";n.r(e);var r=n(188),o=n.n(r);n.d(e,"Button",function(){return o.a})},257:function(t,e,n){"use strict";var r=n(183),o=n(22),a=n(182);Object.defineProperty(e,"__esModule",{value:!0}),e.playroomExample=e.default=void 0;var i=a(n(0)),u=o(n(188)),l=o(n(225));e.playroomExample="<Modal id='test_modal1' title='Test modal 1' isOpen closeModal={() => {}}>\n  Test modal content goes here 1.\n</Modal>";e.default=function(){var t=(0,i.useState)(!0),e=r(t,2),n=e[0],o=e[1];return i.default.createElement(i.default.Fragment,null,i.default.createElement(l.default,{id:"test_modal1",title:"Test modal 1",isOpen:n,closeModal:function(){return o(!1)},showClose:!0},"Test modal content goes here 1."),i.default.createElement(u.default,{type:"button",onClick:function(){return o(!0)}},"Open modal"))}}}]);
//# sourceMappingURL=modal.5d103516.chunk.js.map