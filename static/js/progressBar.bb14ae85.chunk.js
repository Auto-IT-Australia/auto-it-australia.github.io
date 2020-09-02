(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{182:function(t,e,n){var r=n(187);function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var u=i?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}},183:function(t,e,n){var r=n(184),o=n(185),i=n(186);t.exports=function(t,e){return r(t)||o(t,e)||i()}},184:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},185:function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}},186:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},187:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},188:function(t,e,n){"use strict";var r=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(42)),i=r(n(23)),a=r(n(0)),u=r(n(11)),l=n(190);function c(t){var e=t.text,n=t.children,r=t.clear,u=t.onClick,c=t.disabled,d=(0,i.default)(t,["text","children","clear","onClick","disabled"]);return a.default.createElement(l.ButtonStyle,(0,o.default)({},d,{disabled:c,clear:r,onClick:!c&&u}),e||n)}c.defaultProps={onClick:function(){},clear:!1,text:"",children:null,disabled:!1},c.propTypes={text:function(t,e,n){return t.text||t.children?null:new Error("One of the props 'text' or 'children' was not specified in ".concat(n,"."))},children:function(t,e,n){return t.text||t.children?null:new Error("One of the props 'text' or 'children' was not specified in ".concat(n,"."))},clear:u.default.bool,onClick:u.default.func,disabled:u.default.bool};var d=c;e.default=d},190:function(t,e,n){"use strict";var r=n(41);function o(){var t=r(["\n\tbackground: ",";\n\tborder-radius: 4px;\n\tpadding: 12px 16px;\n\tcolor: ",";\n\tfont-weight: 600;\n\tfont-size: 14px;\n\ttext-align: center;\n\n\tmargin: 32px;\n\n\t","\n\n\t","\n"]);return o=function(){return t},t}var i=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.ButtonStyle=void 0;var a=i(n(1)).default.div(o(),function(t){if(t.clear)return t.theme.white;switch((t.type||"").toLowerCase()){case"danger":return t.theme.danger;case"warning":return t.theme.warning;case"info":return t.theme.info;case"success":return t.theme.success;case"primary":default:return t.theme.primary}},function(t){if(!t.clear)return t.theme.whiteFont;switch((t.type||"").toLowerCase()){case"danger":return t.theme.danger;case"warning":return t.theme.warning;case"info":return t.theme.info;case"success":return t.theme.success;case"primary":default:return t.theme.primary}},function(t){return t.disabled&&"opacity: 0.6;"},function(t){return!t.disabled&&"\n\t\tcursor: pointer;\n\t\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n\n\t&:active {\n\t\topacity: 0.6;\n\t}\n\t"});e.ButtonStyle=a},234:function(t,e,n){"use strict";var r=n(183),o=n(182),i=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n(23)),u=o(n(0)),l=i(n(11)),c=n(235),d=n(236),s=function(t){var e=t.href,n=t.children;return e?u.default.createElement(d.ProgressLink,{href:e},n):u.default.createElement("span",null,n)};function f(t){var e=t.startAt,n=t.progressSteps,o=t.onChange,i=(t.changeOnClick,t.disableNext),l=t.disablePrev,f=t.currentPage,p=t.hideButtons,h=t.hidePrev,m=t.hideNext,g=(0,a.default)(t,["startAt","progressSteps","onChange","changeOnClick","disableNext","disablePrev","currentPage","hideButtons","hidePrev","hideNext"]),x=(0,u.useState)(e),v=r(x,2),b=v[0],y=v[1];return(0,u.useEffect)(function(){y(f)},[f]),u.default.createElement(c.Column,g,u.default.createElement(d.ProgressContainer,{"data-test-id":"progress-bar",style:{marginBottom:20}},u.default.createElement(c.Row,{maxWidth:t.maxWidth},u.default.createElement(d.ProgressLink,null,n.map(function(t,e){return u.default.createElement(d.ProgressListItem,{key:e,"aria-current":t.active?"page":void 0},u.default.createElement(s,{onClick:function(){return y(e)}},u.default.createElement(d.ProgressStep,null,u.default.createElement(d.ProgressTextContainer,null,u.default.createElement(d.ProgressIcon,{active:e===b,completed:e<b},e+1<=b?void 0:e+1),u.default.createElement(d.ProgressText,{active:t.active,completed:t.completed},t.title)))))})))),t.progressSteps[b].children,!p&&u.default.createElement(c.Row,{style:{margin:"20px -32px 20px -32px"}},!h&&u.default.createElement(c.Button,{style:{flex:1},type:"warning",disabled:!l&&0===b,onClick:function(){y(b-1),o(b-1)}},"Previous"),!m&&u.default.createElement(c.Button,{style:{flex:1},type:"info",disabled:!i&&b===n.length-1,onClick:function(){y(b+1),o(b+1)}},"Next")))}f.defaultProps={maxWidth:"auto",startAt:0,onChange:function(){},changeOnClick:!1,disableNext:!1,disablePrev:!1,currentPage:0,hideButtons:!1,hidePrev:!1,hideNext:!1},f.propTypes={progressSteps:l.default.arrayOf(l.default.shape({title:l.default.string.isRequired,href:l.default.string,children:l.default.oneOfType([l.default.func,l.default.node])})).isRequired,maxWidth:l.default.oneOf(["320","480","768","980","1164","1366","auto"]),startAt:l.default.number,onChange:l.default.func,changeOnClick:l.default.bool,disableNext:l.default.bool,disablePrev:l.default.bool,currentPage:l.default.number,hideButtons:l.default.bool,hidePrev:l.default.bool,hideNext:l.default.bool},s.propTypes={href:l.default.string.isRequired,children:l.default.func.isRequired};var p=f;e.default=p},235:function(t,e,n){"use strict";n.r(e);var r=n(188),o=n.n(r);n.d(e,"Button",function(){return o.a});var i=n(13);n.d(e,"Row",function(){return i.RowComponent}),n.d(e,"Column",function(){return i.ColumnComponent})},236:function(t,e,n){"use strict";var r=n(41);function o(){var t=r(["\n\ttext-decoration: none;\n\tdisplay: flex;\n\twidth: 100%;\n"]);return o=function(){return t},t}function i(){var t=r(["\n\t\t\tcolor: ",";\n\t\t"]);return i=function(){return t},t}function a(){var t=r(["\n\tcolor: ",";\n\toverflow: hidden;\n\tdisplay: none;\n\tline-height: 20px;\n\tmargin-top: 8px;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tfont-size: 14px;\n\ttransition: color 0.2s;\n\n\t","\n\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: inline-block;\n\t\tmargin: 2px 0 -2px;\n\t}\n"]);return a=function(){return t},t}function u(){var t=r(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]);return u=function(){return t},t}function l(){var t=r(["\n\tbackground: ",";\n\tcolor: ",";\n\tdisplay: block;\n\tborder-radius: 100%;\n\ttext-align: center;\n\twidth: 25px;\n\theight: 25px;\n\tline-height: 25px;\n\tmargin: 0 auto 10px auto;\n\tposition: relative;\n\tfont-size: 13px;\n\tfont-weight: 700;\n\tz-index: 2;\n\n\t","\n"]);return l=function(){return t},t}function c(){var t=r(["\n\tdisplay: block;\n\tpadding: 16px 0 16px 15px;\n\ttext-decoration: none;\n\tcolor: ",";\n\tposition: relative;\n\n\t&::before,\n\t&::after {\n\t\tcontent: '';\n\t\tpointer-events: none;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: auto;\n\t\tright: -14px;\n\t\tmargin-right: 4px;\n\t\tmargin-top: -29px;\n\t\tborder-color: transparent;\n\t\tborder-width: 29px 0 29px 15px;\n\t\tborder-style: solid;\n\t\tborder-left-color: ",";\n\n\t\t@media screen and (min-width: 480px) {\n\t\t\tmargin-top: -44px;\n\t\t\tborder-width: 44px 0 44px 21px;\n\t\t\twidth: 20px;\n\t\t}\n\n\t\t@media screen and (min-width: 768px) {\n\t\t\tmargin-right: 0;\n\t\t\tmargin-top: -34px;\n\t\t\tborder-width: 34px 0 34px 21px;\n\t\t\twidth: 15px;\n\t\t}\n\t}\n\n\t&::before {\n\t\tright: -15px;\n\t\tborder-left-color: ",";\n\t}\n\n\tli:last-child & {\n\t\t&::before,\n\t\t&::after {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t&:hover {\n\t\t.icon_tick::before {\n\t\t\tcontent: '';\n\t\t}\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\theight: auto;\n\t\tpadding: 18px 6px 18px 20px;\n\t}\n"]);return c=function(){return t},t}function d(){var t=r(["\n\tlist-style: none;\n\tborder-right-style: none;\n\tposition: relative;\n\tz-index: 2;\n\tflex: 1;\n"]);return d=function(){return t},t}function s(){var t=r(["\n\tbackground: ",";\n\tborder-top: 1px solid ",";\n\tborder-bottom: 1px solid ",";\n"]);return s=function(){return t},t}var f=n(182);Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressLink=e.ProgressText=e.ProgressTextContainer=e.ProgressIcon=e.ProgressStep=e.ProgressListItem=e.ProgressContainer=void 0;var p=f(n(1)),h=p.default.div(s(),function(t){return t.theme.white},function(t){return t.theme.borderColor},function(t){return t.theme.borderColor});e.ProgressContainer=h;var m=p.default.li(d());e.ProgressListItem=m;var g=p.default.span(c(),function(t){return t.theme.fontColor},function(t){return t.theme.white},function(t){return t.theme.borderColor});e.ProgressStep=g;var x=p.default.span(l(),function(t){return t.active||t.completed?t.theme.info:"#eceff1"},function(t){return t.active?"#FFF":"#8191ab"},function(t){return t.completed&&"\n                background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkuMTIgNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTIgMS4wNkw4LjA2IDAgMy4xOCA0Ljg4IDEuMDYgMi43NiAwIDMuODIgMy4xOCA3bDUuOTQtNS45NHoiLz48L3N2Zz4=);\n                background-size: 10px;\n                background-repeat: no-repeat;\n                background-position: center center;\n            "});e.ProgressIcon=x;var v=p.default.div(u());e.ProgressTextContainer=v;var b=p.default.span(a(),function(t){return t.theme.outlineColor},function(t){return(t.active||t.completed)&&(0,p.css)(i(),t.theme.fontColor)});e.ProgressText=b;var y=p.default.a(o());e.ProgressLink=y},257:function(t,e,n){"use strict";var r=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(0)),i=r(n(234));e.default=function(){return o.default.createElement(i.default,{progressSteps:[{title:"Step1",children:o.default.createElement("span",null,"I'm step 1")},{title:"Step2",children:o.default.createElement("span",null,"I'm step 2")},{title:"Step3",children:o.default.createElement("span",null,"I'm step 3")}]})}}}]);
//# sourceMappingURL=progressBar.bb14ae85.chunk.js.map