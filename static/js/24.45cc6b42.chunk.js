(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{182:function(e,t,n){var r=n(187);function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}},183:function(e,t,n){var r=n(184),a=n(185),o=n(186);e.exports=function(e,t){return r(e)||a(e,t)||o()}},184:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},185:function(e,t){e.exports=function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}},186:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},187:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},189:function(e,t,n){"use strict";var r=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var a=r(n(0)),o=r(n(11)),u=n(191);function l(e){var t=e.show,n=e.testId,r=e.message;return t?a.default.createElement(u.ValidationWrapper,{role:"alert","aria-live":"assertive","data-test-id":n},r):null}l.defaultProps={show:!1},l.propTypes={show:o.default.bool,testId:o.default.string.isRequired,message:o.default.string.isRequired}},191:function(e,t,n){"use strict";var r=n(41);function a(){var e=r(["\n\tcolor: ",";\n\tmargin: 2px 0 0;\n\tfont-size: 14px;\n"]);return a=function(){return e},e}var o=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationWrapper=void 0;var u=o(n(1)).default.p(a(),function(e){return e.theme.danger});t.ValidationWrapper=u},193:function(e,t,n){"use strict";var r=n(183),a=n(182),o=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(42)),l=o(n(23)),i=a(n(0)),f=o(n(11)),d=n(194),s=n(195);function c(e){var t=e.id,n=e.label,a=e.type,o=e.disabled,f=e.focus,c=e.maxLength,p=e.hover,b=e.invalid,v=e.value,g=e.touched,h=e.size,m=(e.variant,e.subLabel),x=e.labelSize,y=e.beforeField,z=e.afterField,w=e.className,L=e.onKeyDown,S=e.onKeyUp,_=e.information,F=e.informationPosition,O=e.beforeLabel,W=e.afterLabel,E=e.placeholder,P=e.onFocus,M=e.onBlur,C=e.name,I=e.onChange,D=e.error,T=e.ref,j=(0,l.default)(e,["id","label","type","disabled","focus","maxLength","hover","invalid","value","touched","size","variant","subLabel","labelSize","beforeField","afterField","className","onKeyDown","onKeyUp","information","informationPosition","beforeLabel","afterLabel","placeholder","onFocus","onBlur","name","onChange","error","ref"]),k=(0,i.useState)(f),K=r(k,2),B=K[0],R=K[1],A=(0,i.useState)(g),q=r(A,2),V=q[0],N=q[1],U=(0,i.useState)(p),Y=r(U,2),G=Y[0],J=Y[1],H=(0,i.useState)(D),Q=r(H,2),X=Q[0],Z=Q[1],$=(0,i.useState)(b),ee=r($,2),te=ee[0],ne=ee[1],re=(0,i.useState)(0),ae=r(re,2),oe=ae[0],ue=ae[1],le=(0,i.useState)(0),ie=r(le,2),fe=ie[0],de=ie[1],se=(0,i.useRef)(),ce=(0,i.useRef)();(0,i.useEffect)(function(){ue(se.current?se.current.clientWidth:0),de(ce.current?ce.current.clientWidth:0)}),(0,i.useEffect)(function(){N(g),R(f),Z(D),ne(b)},[D,g,f,b]);var pe={focus:B,hover:G,touched:V,value:v,size:h,disabled:o},be=y||_&&"beforeField"===F,ve=z||_&&"afterField"===F,ge=O||_&&"beforeLabel"===F,he=W||_&&"afterLabel"===F,me={};return m&&(me.ariaDescribedby="".concat(t,"_sub_label")),i.default.createElement(d.TextFieldWrapper,(0,u.default)({className:w,"data-test-id":"".concat(t,"_wrapper")},j),i.default.createElement(s.Label,{label:x,"data-test-id":"".concat(t,"_label"),dataTestId:"".concat(t,"_label")},ge,n,he),i.default.createElement(d.Information,{"data-test-id":"".concat(t,"_info"),show:_},i.default.createElement(d.InformationText,{"data-test-id":"".concat(t,"_info_text")},_)),i.default.createElement(d.InputWrapper,null,i.default.createElement(d.Input,(0,u.default)({hasLabel:null!==n&&""!==n,id:t,name:C,type:a,maxLength:c||"",onChange:I,onMouseEnter:function(){return J(!0)},onMouseLeave:function(){return J(!1)},onFocus:function(e){R(!0),P&&P(e)},onBlur:function(e){R(!1),N(!0),M&&M(e)},onKeyPress:function(){return N(!0)},onKeyDown:L,onKeyUp:S,isInvalid:te&&V,hasBefore:!!be,hasAfter:!!ve,beforeWidth:oe,afterWidth:fe,labelSize:x,"data-test-id":"".concat(t,"_input"),placeholder:E,ref:T},me,pe)),be?i.default.createElement(d.BeforeWrapper,(0,u.default)({},pe,{labelSize:x,ref:se}),be):null,ve?i.default.createElement(d.AfterWrapper,(0,u.default)({},pe,{labelSize:x,ref:ce}),ve):null),i.default.createElement(s.Validation,{show:te&&V,message:X||"",testId:"".concat(t,"_error")}),!m||te&&V?null:i.default.createElement(d.SubLabel,(0,u.default)({id:"".concat(t,"_sub_label"),"data-test-id":"".concat(t,"_sub_label")},pe),m))}c.propTypes={id:f.default.string.isRequired,label:f.default.string.isRequired,type:f.default.oneOf(["text","email","tel","number","password"]).isRequired,disabled:f.default.bool,focus:f.default.bool,touched:f.default.bool,maxLength:f.default.string,hover:f.default.bool,onMouseEnter:f.default.func,onMouseLeave:f.default.func,onKeyPress:f.default.func,beforeField:f.default.node,afterField:f.default.node,beforeLabel:f.default.node,afterLabel:f.default.node,information:f.default.string,informationPosition:f.default.oneOf(["beforeField","afterField","beforeLabel","afterLabel"]),size:f.default.oneOf(["small","regular","large"]),variant:f.default.oneOf(["internal","external"]),labelSize:f.default.oneOf(["regular","large"]),placeholder:f.default.string,name:f.default.string,onBlur:f.default.func,onChange:f.default.func,onFocus:f.default.func,value:f.default.string,invalid:f.default.bool,error:f.default.string,subLabel:f.default.oneOfType([f.default.string,f.default.node]),className:f.default.string,onKeyDown:f.default.func,onKeyUp:f.default.func,ref:f.default.oneOfType([f.default.func])},c.defaultProps={labelSize:"regular",informationPosition:"afterField",placeholder:"",focus:!1,touched:!1,hover:!1,disabled:!1,maxLength:null,onMouseEnter:function(){},onMouseLeave:function(){},onKeyPress:function(){},beforeField:null,afterField:null,beforeLabel:null,afterLabel:null,information:"",size:"small",variant:"internal",name:"",onBlur:function(){},onChange:function(){},onFocus:function(){},value:void 0,invalid:!1,error:"",className:"",subLabel:null,onKeyDown:function(){},onKeyUp:function(){},ref:null};var p=c;t.default=p},194:function(e,t,n){"use strict";var r=n(41);function a(){var e=r(["\n\tbackground: ",";\n\tborder: 1px solid ",";\n\tborder-radius: 4px;\n\tdisplay: block;\n\tpadding: 16px;\n\tfont-size: 14px;\n"]);return a=function(){return e},e}function o(){var e=r(["\n\toverflow: hidden;\n\theight: 0;\n\tmargin: 0;\n\t","\n"]);return o=function(){return e},e}function u(){var e=r(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpadding: 12px;\n\ttransition: font-size 0.2s, padding 0.2s;\n\n\t","\n\n\t","\n"]);return u=function(){return e},e}function l(){var e=r(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\toverflow: hidden;\n\tpadding: 12px;\n\ttransition: font-size 0.2s, padding 0.2s;\n\tcolor: ",";\n\t","\n\t",";\n"]);return l=function(){return e},e}function i(){var e=r(["\n\tposition: relative;\n"]);return i=function(){return e},e}function f(){var e=r(["\n\tmargin: 2px 0 0;\n\tcolor: ",";\n\ttransition: color 0.2s;\n\tfont-size: 14px;\n\n\t","\n\n\t","\n"]);return f=function(){return e},e}function d(){var e=r(["\n\t",";\n\twidth: 100%;\n    outline: none;\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\tbox-sizing: border-box;\n\tborder-radius: 4px;\n\tcolor: ",";\n\tpadding: 13px 0px 13px 16px;\n\n\t&::-webkit-inner-spin-button,\n\t&::-webkit-outer-spin-button {\n\t\tmargin-right: 16px;\n\t}\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n"]);return d=function(){return e},e}function s(){var e=r(["\n\tposition: relative;\n\tz-index: 0;\n\tcolor: ",";\n\twidth: 100%;\n"]);return s=function(){return e},e}var c=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.InformationText=t.Information=t.AfterWrapper=t.BeforeWrapper=t.InputWrapper=t.SubLabel=t.Input=t.TextFieldWrapper=void 0;var p=c(n(1)),b=p.default.div(s(),function(e){return e.theme.borderColor});t.TextFieldWrapper=b;var v=p.default.input(d(),function(e){return e.hasLabel&&"margin-top: 8px"},function(e){return e.disabled?e.theme.extraLightGrey:"transparent"},function(e){return e.theme.outlineColor},function(e){return e.theme.fontColor},function(e){return"small"===e.size&&"height: 38px;"},function(e){return"large"===e.size&&"\n        height: 60px;\n        font-size: 24px;\n        padding: 0 18px;\n    "},function(e){var t=e.size;return("regular"===t||!t)&&"\n        height:44px;\n    "},function(e){return(e.hover||e.focus)&&"\n        border: 2px solid ".concat(e.theme.primary50,";\n        border-radius: 4px;\n        outline: none;\n        transition: border 0.2s, border-radius 0.2s;\n    ")},function(e){return e.disabled&&"\n        border-color: transparent;\n        border-bottom-color: ".concat(e.theme.primary50,";\n        color: ").concat(e.theme.outlineColor,";\n        border-bottom-style: dotted;\n        cursor: not-allowed;\n    ")},function(e){return e.isInvalid&&"\n        border-color: ".concat(e.theme.danger,"\n    ")},function(e){return!!e.hasBefore&&"\n        padding-left: ".concat(e.beforeWidth,"px;\n    ")},function(e){return!!e.hasAfter&&"\n        padding-right: ".concat(e.afterWidth,"px;\n    ")});t.Input=v;var g=p.default.p(f(),function(e){return e.theme.rowColor},function(e){return(e.hover||e.focus)&&"\n            color: ".concat(e.theme.company,";\n        ")},function(e){return e.disabled&&"\n            color: ".concat(e.theme.outlineColor,";\n        ")});t.SubLabel=g;var h=p.default.div(i());t.InputWrapper=h;var m=p.default.span(l(),function(e){return e.theme.outlineColor},function(e){return"small"===e.size&&"\n        padding: 8px 12px;\n    "},function(e){return"large"===e.size&&"\n      font-size: 24px;\n      padding: 18px;\n    "});t.BeforeWrapper=m;var x=p.default.span(u(),function(e){return"small"===e.size&&"\n\t\t\t\t\tpadding: 8px 12px;\n\t\t\t\t"},function(e){return"large"===e.size&&"\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tpadding: 18px;\n\t\t\t\t"});t.AfterWrapper=x;var y=p.default.div(o(),function(e){return e.show&&"\n        margin: 4px 0 0;\n        height: auto;\n        padding-bottom: 12px;\n    "});t.Information=y;var z=p.default.div(a(),function(e){return e.theme.extraLightGrey},function(e){return e.theme.borderColor});t.InformationText=z},195:function(e,t,n){"use strict";n.r(t);var r=n(24);n.d(t,"Label",function(){return r.LabelComponent});var a=n(189),o=n.n(a);n.d(t,"Validation",function(){return o.a})},209:function(e,t,n){"use strict";var r=n(183),a=n(182),o=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(42)),l=a(n(0)),i=o(n(11)),f=n(210),d=n(211),s=function(e){return e.replace(/[^0-9]/g,"")};function c(e){var t=e.value,n=e.onChange,a=e.id,o=e.label,i=e.labelSize,c=e.disabled,p=e.appearance,b=e.variant,v=e.size,g=e.subLabel,h=e.showSubLabel,m=e.placeholder,x=(0,l.useState)(!1),y=r(x,2),z=y[0],w=y[1],L=(0,l.useState)(""),S=r(L,2),_=S[0],F=S[1];(0,l.useEffect)(function(){"string"===typeof t&&w(t&&t.length>0)},[t]);var O={id:a,label:o,labelSize:i,disabled:c,appearance:p,variant:b,size:v,placeholder:m,onChange:function(e){if(n){var t=s(e.target.value);e.target.value=function(e){for(var t="",n=0;n<e.length&&n<8;n+=1)t+=2===n||4===n?" ".concat(e[n]):e[n];return t}(t),w(e.target.value.length>0),F(e.target.value),n(e.target.value)}}};return l.default.createElement(f.DateWrapper,null,l.default.createElement(f.DateMask,{focus:z,size:v,labelSize:i,"data-test-id":"".concat(a,"_date-mask")},"/ /"),l.default.createElement(d.TextField,(0,u.default)({type:"tel",subLabel:h?g||"DD/MM/YYYY":null,value:e.value||_},O)))}c.propTypes={id:i.default.string.isRequired,disabled:i.default.bool,label:i.default.string,labelSize:i.default.oneOf(["regular","large"]),subLabel:i.default.string,showSubLabel:i.default.bool,appearance:i.default.oneOf(["box-rounded"]),variant:i.default.oneOf(["internal","external"]),size:i.default.oneOf(["small","regular","large"]),name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string,placeholder:i.default.string},c.defaultProps={value:"",placeholder:"",size:"small",disabled:!1,label:null,labelSize:"regular",subLabel:null,showSubLabel:!1,appearance:null,variant:"internal",name:"",onBlur:function(){},onChange:function(){},onFocus:function(){}};var p=c;t.default=p},210:function(e,t,n){"use strict";var r=n(41);function a(){var e=r(["\n  margin: "," 0 0 ","px;\n  line-height: 44px;\n  position: absolute;\n  word-spacing: 38px;\n  color: ",";\n  opacity: 0;\n  transition: opacity 0.2s, margin 0.2s, line-height 0.2s, word-spacing 0.2s, font-size 0.2s;\n\n  ","\n\n  ","\n\n  ","\n"]);return a=function(){return e},e}function o(){var e=r(["\n\tposition: relative;\n\n\tinput {\n\t\tword-spacing: 26px;\n\t}\n"]);return o=function(){return e},e}var u=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.DateMask=t.DateWrapper=void 0;var l=u(n(1)),i=l.default.div(o());t.DateWrapper=i;var f=l.default.div(a(),function(e){return"large"===e.labelSize?"30px":"28px"},function(e){return"large"===e.labelSize?"60":"41"},function(e){return e.theme.outlineColor},function(e){return(e.focus||e.hasValue)&&"\n\t\t\topacity: 1;\n\t\t"},function(e){return"small"===e.size&&"\n\t\t\tline-height: 38px;\n\t\t"},function(e){return"large"===e.size&&"\n\t\t\tmargin: ".concat("large"===e.labelSize?"47px":"36px","\n\t\t\t\t0 0 50px;\n\t\t\tline-height: 60px;\n\t\t\tword-spacing: 42px;\n\t\t\tfont-size: 24px;\n\t\t")});t.DateMask=f},211:function(e,t,n){"use strict";n.r(t);var r=n(193),a=n.n(r);n.d(t,"TextField",function(){return a.a})},248:function(e,t,n){"use strict";var r=n(183),a=n(22),o=n(182);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(0)),l=a(n(209));t.default=function(){var e=(0,u.useState)(null),t=r(e,2),n=t[0],a=t[1];return u.default.createElement(l.default,{id:"testDateField",label:"Test date field",name:"testDateField",value:n,onChange:a})}}}]);
//# sourceMappingURL=24.45cc6b42.chunk.js.map