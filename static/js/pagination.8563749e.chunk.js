(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{183:function(t,e,n){var r=n(184),a=n(185),o=n(186);t.exports=function(t,e){return r(t)||a(t,e)||o()}},184:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},185:function(t,e){t.exports=function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}},186:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},228:function(t,e,n){"use strict";var r=n(229),a=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(0)),u=a(n(11)),i=n(233);function l(t){var e=t.id,n=t.results,a=t.currentPage,u=t.updatePage,l=t.neighbours,c=t.perPage,s=Math.ceil(n.length/c),f="LEFT",d=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=t,a=[];r<=e;)a.push(r),r+=n;return a},p=function(t){var e=Math.max(0,Math.min(t,s));u(e)},g=function(t){return function(e){e.preventDefault(),p(t)}},h=function(t){t.preventDefault(),p(a-2*l-1)},v=function(t){t.preventDefault(),p(a+2*l+1)};return o.default.createElement(i.PaginationWrapper,{"data-test-id":e},function(){var t=2*l+3;if(s>t+2){var e=Math.max(2,a-l),n=Math.min(s-1,a+l),o=d(e,n),u=e>2,i=s-n>1,c=t-(o.length+1);switch(!0){case u&&!i:var p=d(e-c,e-1);o=[f].concat(r(p),r(o));break;case!u&&i:var g=d(n+1,n+c);o=[].concat(r(o),r(g),["RIGHT"]);break;case u&&i:default:o=[f].concat(r(o),["RIGHT"])}return[1].concat(r(o),[s])}return d(1,s)}().map(function(t,n){return t===f?o.default.createElement(i.PaginationButton,{type:"button",onClick:h,disabled:1===a,"data-test-id":"".concat(e,"_prev-page"),"aria-label":"Go to previous page"},o.default.createElement("span",{"aria-hidden":"true"},"\xab")):"RIGHT"===t?o.default.createElement(i.PaginationButton,{type:"button",onClick:v,disabled:a===s,"data-test-id":"".concat(e,"_next-page"),"aria-label":"Go to next page"},o.default.createElement("span",{"aria-hidden":"true"},"\xbb")):o.default.createElement(i.PaginationButton,{key:n,type:"button",onClick:g(t),disabled:a===t,"data-test-id":"".concat(e,"_page-").concat(n),"aria-label":"Go to page ".concat(n)},t)}))}l.defaultProps={currentPage:1,perPage:10,neighbours:2},l.propTypes={id:u.default.string.isRequired,results:u.default.arrayOf(u.default.shape).isRequired,currentPage:u.default.number,updatePage:u.default.func.isRequired,perPage:u.default.number,neighbours:u.default.number};var c=l;e.default=c},229:function(t,e,n){var r=n(230),a=n(231),o=n(232);t.exports=function(t){return r(t)||a(t)||o()}},230:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},231:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},232:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},233:function(t,e,n){"use strict";var r=n(41);function a(){var t=r(["\n\tmargin-top: 8px;\n\tborder: 1px solid ",";\n\tborder-right: 0;\n\tbackground: ",";\n\tpadding: 12px 20px;\n\tcolor: ",";\n\tfont-size: 12px;\n\tcursor: pointer;\n\ttransition: color 0.2s, background-color 0.2s, font-weight 0.2s;\n\n\t&:hover,\n\t&:focus {\n\t\toutline: 0;\n\t\tcolor: ",";\n\t\tbackground-color: ",";\n\t}\n\n\t&:first-child {\n\t\tborder-radius: 4px 0 0 4px;\n\t}\n\n\t&:last-child {\n\t\tborder-radius: 0 4px 4px 0;\n\t\tborder-right: 1px solid ",";\n\t}\n\n\t&:disabled {\n\t\tfont-weight: bold;\n\t\tcolor: ",";\n\t\tbackground-color: ",";\n\t\tcursor: not-allowed;\n\t}\n"]);return a=function(){return t},t}function o(){var t=r([""]);return o=function(){return t},t}var u=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.PaginationButton=e.PaginationWrapper=void 0;var i=u(n(1)),l=i.default.div(o());e.PaginationWrapper=l;var c=i.default.button(a(),function(t){return t.theme.outlineColor},function(t){return t.theme.white},function(t){return t.theme.rowColor},function(t){return t.theme.fontColor},function(t){return t.theme.extraLightGrey},function(t){return t.theme.outlineColor},function(t){return t.theme.fontColor},function(t){return t.theme.outlineColor});e.PaginationButton=c},256:function(t,e,n){"use strict";var r=n(183),a=n(22);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(0)),u=a(n(228)),i=[{title:"Result 1"},{title:"Result 2"},{title:"Result 3"},{title:"Result 4"},{title:"Result 5"},{title:"Result 6"},{title:"Result 7"},{title:"Result 8"},{title:"Result 9"},{title:"Result 10"},{title:"Result 11"},{title:"Result 12"},{title:"Result 13"},{title:"Result 14"},{title:"Result 15"},{title:"Result 16"},{title:"Result 17"},{title:"Result 18"},{title:"Result 19"},{title:"Result 20"},{title:"Result 21"},{title:"Result 22"},{title:"Result 23"},{title:"Result 24"},{title:"Result 25"},{title:"Result 26"},{title:"Result 27"}];e.default=function(){var t=useState(1),e=r(t,2),n=e[0],a=e[1];return o.default.createElement(u.default,{results:i,currentPage:n,updatePage:a})}}}]);
//# sourceMappingURL=pagination.8563749e.chunk.js.map