(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{182:function(e,t,n){var r=n(184);function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}},183:function(e,t,n){var r=n(185),a=n(186),o=n(187);e.exports=function(e,t){return r(e)||a(e,t)||o()}},184:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},185:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},186:function(e,t){e.exports=function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}},187:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},189:function(e,t,n){"use strict";var r=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var a=r(n(0)),o=r(n(11)),u=n(193);function l(e){var t=e.show,n=e.testId,r=e.message;return t?a.default.createElement(u.ValidationWrapper,{role:"alert","aria-live":"assertive","data-test-id":n},r):null}l.defaultProps={show:!1},l.propTypes={show:o.default.bool,testId:o.default.string.isRequired,message:o.default.string.isRequired}},193:function(e,t,n){"use strict";var r=n(41);function a(){var e=r(["\n\tcolor: ",";\n\tmargin: 2px 0 0;\n\tfont-size: 14px;\n"]);return a=function(){return e},e}var o=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationWrapper=void 0;var u=o(n(1)).default.p(a(),function(e){return e.theme.danger});t.ValidationWrapper=u},195:function(e,t,n){"use strict";var r=n(183),a=n(182),o=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(42)),l=o(n(23)),i=a(n(0)),f=o(n(11)),d=n(199),s=n(200);function c(e){var t=e.id,n=e.label,a=e.type,o=e.disabled,f=e.focus,c=e.maxLength,p=e.hover,b=e.invalid,v=e.value,g=e.touched,h=e.size,m=(e.variant,e.subLabel),x=e.labelSize,y=e.beforeField,z=e.afterField,w=e.className,L=e.onKeyDown,S=e.onKeyUp,_=e.information,F=e.informationPosition,O=e.beforeLabel,W=e.afterLabel,E=e.placeholder,M=e.onFocus,P=e.onBlur,C=e.name,D=e.onChange,I=e.error,T=e.inputRef,j=e.required,k=(0,l.default)(e,["id","label","type","disabled","focus","maxLength","hover","invalid","value","touched","size","variant","subLabel","labelSize","beforeField","afterField","className","onKeyDown","onKeyUp","information","informationPosition","beforeLabel","afterLabel","placeholder","onFocus","onBlur","name","onChange","error","inputRef","required"]),K=(0,i.useState)(f),B=r(K,2),R=B[0],q=B[1],Y=(0,i.useState)(g),A=r(Y,2),N=A[0],V=A[1],U=(0,i.useState)(p),G=r(U,2),J=G[0],H=G[1],Q=(0,i.useState)(I),X=r(Q,2),Z=X[0],$=X[1],ee=(0,i.useState)(b),te=r(ee,2),ne=te[0],re=te[1],ae=(0,i.useState)(0),oe=r(ae,2),ue=oe[0],le=oe[1],ie=(0,i.useState)(0),fe=r(ie,2),de=fe[0],se=fe[1],ce=(0,i.useRef)(),pe=(0,i.useRef)();(0,i.useEffect)(function(){le(ce.current?ce.current.clientWidth:0),se(pe.current?pe.current.clientWidth:0)}),(0,i.useEffect)(function(){V(g),q(f),$(I),re(b)},[I,g,f,b]);var be={focus:R,hover:J,touched:N,value:v,size:h,disabled:o},ve=y||_&&"beforeField"===F,ge=z||_&&"afterField"===F,he=O||_&&"beforeLabel"===F,me=W||_&&"afterLabel"===F,xe={};return m&&(xe.ariaDescribedby="".concat(t,"_sub_label")),i.default.createElement(d.TextFieldWrapper,(0,u.default)({className:w,"data-test-id":"".concat(t,"_wrapper")},k),i.default.createElement(s.Label,{label:x,"data-test-id":"".concat(t,"_label"),dataTestId:"".concat(t,"_label")},he,n,j&&i.default.createElement("span",{style:{color:"red"}}," *"),me),i.default.createElement(d.Information,{"data-test-id":"".concat(t,"_info"),show:_},i.default.createElement(d.InformationText,{"data-test-id":"".concat(t,"_info_text")},_)),i.default.createElement(d.InputWrapper,null,i.default.createElement(d.Input,(0,u.default)({hasLabel:null!==n&&""!==n,id:t,name:C,type:a,maxLength:c||"",onChange:D,onMouseEnter:function(){return H(!0)},onMouseLeave:function(){return H(!1)},onFocus:function(e){q(!0),M&&M(e)},onBlur:function(e){q(!1),V(!0),P&&P(e)},onKeyPress:function(){return V(!0)},onKeyDown:L,onKeyUp:S,isInvalid:ne&&N,hasBefore:!!ve,hasAfter:!!ge,beforeWidth:ue,afterWidth:de,labelSize:x,"data-test-id":"".concat(t,"_input"),placeholder:E,ref:function(e){return T&&T(e)}},xe,be)),ve?i.default.createElement(d.BeforeWrapper,(0,u.default)({},be,{labelSize:x,ref:ce}),ve):null,ge?i.default.createElement(d.AfterWrapper,(0,u.default)({},be,{labelSize:x,ref:pe}),ge):null),i.default.createElement(s.Validation,{show:ne&&N,message:Z||"",testId:"".concat(t,"_error")}),!m||ne&&N?null:i.default.createElement(d.SubLabel,(0,u.default)({id:"".concat(t,"_sub_label"),"data-test-id":"".concat(t,"_sub_label")},be),m))}c.propTypes={id:f.default.string.isRequired,label:f.default.string.isRequired,type:f.default.oneOf(["text","email","tel","number","password"]).isRequired,disabled:f.default.bool,focus:f.default.bool,touched:f.default.bool,maxLength:f.default.string,hover:f.default.bool,onMouseEnter:f.default.func,onMouseLeave:f.default.func,onKeyPress:f.default.func,beforeField:f.default.node,afterField:f.default.node,beforeLabel:f.default.node,afterLabel:f.default.node,information:f.default.string,informationPosition:f.default.oneOf(["beforeField","afterField","beforeLabel","afterLabel"]),size:f.default.oneOf(["small","regular","large"]),variant:f.default.oneOf(["internal","external"]),labelSize:f.default.oneOf(["regular","large"]),placeholder:f.default.string,name:f.default.string,onBlur:f.default.func,onChange:f.default.func,onFocus:f.default.func,value:f.default.string,invalid:f.default.bool,error:f.default.string,subLabel:f.default.oneOfType([f.default.string,f.default.node]),className:f.default.string,onKeyDown:f.default.func,onKeyUp:f.default.func,inputRef:f.default.oneOfType([f.default.func]),required:f.default.bool},c.defaultProps={labelSize:"regular",informationPosition:"afterField",placeholder:"",focus:!1,touched:!1,hover:!1,disabled:!1,maxLength:null,onMouseEnter:function(){},onMouseLeave:function(){},onKeyPress:function(){},beforeField:null,afterField:null,beforeLabel:null,afterLabel:null,information:"",size:"small",variant:"internal",name:"",onBlur:function(){},onChange:function(){},onFocus:function(){},value:void 0,invalid:!1,error:"",className:"",subLabel:null,onKeyDown:function(){},onKeyUp:function(){},inputRef:null,required:!1};var p=c;t.default=p},199:function(e,t,n){"use strict";var r=n(41);function a(){var e=r(["\n\tbackground: ",";\n\tborder: 1px solid ",";\n\tborder-radius: 4px;\n\tdisplay: block;\n\tpadding: 16px;\n\tfont-size: 14px;\n"]);return a=function(){return e},e}function o(){var e=r(["\n\toverflow: hidden;\n\theight: 0;\n\tmargin: 0;\n\t","\n"]);return o=function(){return e},e}function u(){var e=r(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpadding: 12px;\n\ttransition: font-size 0.2s, padding 0.2s;\n\n\t","\n\n\t","\n"]);return u=function(){return e},e}function l(){var e=r(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\toverflow: hidden;\n\tpadding: 12px;\n\ttransition: font-size 0.2s, padding 0.2s;\n\tcolor: ",";\n\t","\n\t",";\n"]);return l=function(){return e},e}function i(){var e=r(["\n\tposition: relative;\n"]);return i=function(){return e},e}function f(){var e=r(["\n\tmargin: 2px 0 0;\n\tcolor: ",";\n\ttransition: color 0.2s;\n\tfont-size: 14px;\n\n\t","\n\n\t","\n"]);return f=function(){return e},e}function d(){var e=r(["\n\t",";\n\twidth: 100%;\n    outline: none;\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\tbox-sizing: border-box;\n\tborder-radius: 4px;\n\tcolor: ",";\n\tpadding: 13px 0px 13px 16px;\n\n\t&::-webkit-inner-spin-button,\n\t&::-webkit-outer-spin-button {\n\t\tmargin-right: 16px;\n\t}\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n"]);return d=function(){return e},e}function s(){var e=r(["\n\tposition: relative;\n\tz-index: 0;\n\tcolor: ",";\n\twidth: 100%;\n"]);return s=function(){return e},e}var c=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.InformationText=t.Information=t.AfterWrapper=t.BeforeWrapper=t.InputWrapper=t.SubLabel=t.Input=t.TextFieldWrapper=void 0;var p=c(n(1)),b=p.default.div(s(),function(e){return e.theme.borderColor});t.TextFieldWrapper=b;var v=p.default.input(d(),function(e){return e.hasLabel&&"margin-top: 8px"},function(e){return e.disabled?e.theme.extraLightGrey:"transparent"},function(e){return e.theme.outlineColor},function(e){return e.theme.fontColor},function(e){return"small"===e.size&&"height: 38px;"},function(e){return"large"===e.size&&"\n        height: 60px;\n        font-size: 24px;\n        padding: 0 18px;\n    "},function(e){var t=e.size;return("regular"===t||!t)&&"\n        height:44px;\n    "},function(e){return(e.hover||e.focus)&&"\n        border: 2px solid ".concat(e.theme.primary50,";\n        border-radius: 4px;\n        outline: none;\n        transition: border 0.2s, border-radius 0.2s;\n    ")},function(e){return e.disabled&&"\n        border-color: transparent;\n        border-bottom-color: ".concat(e.theme.primary50,";\n        color: ").concat(e.theme.outlineColor,";\n        border-bottom-style: dotted;\n        cursor: not-allowed;\n    ")},function(e){return e.isInvalid&&"\n        border-color: ".concat(e.theme.danger,"\n    ")},function(e){return!!e.hasBefore&&"\n        padding-left: ".concat(e.beforeWidth,"px;\n    ")},function(e){return!!e.hasAfter&&"\n        padding-right: ".concat(e.afterWidth,"px;\n    ")});t.Input=v;var g=p.default.p(f(),function(e){return e.theme.rowColor},function(e){return(e.hover||e.focus)&&"\n            color: ".concat(e.theme.company,";\n        ")},function(e){return e.disabled&&"\n            color: ".concat(e.theme.outlineColor,";\n        ")});t.SubLabel=g;var h=p.default.div(i());t.InputWrapper=h;var m=p.default.span(l(),function(e){return e.theme.outlineColor},function(e){return"small"===e.size&&"\n        padding: 8px 12px;\n    "},function(e){return"large"===e.size&&"\n      font-size: 24px;\n      padding: 18px;\n    "});t.BeforeWrapper=m;var x=p.default.span(u(),function(e){return"small"===e.size&&"\n\t\t\t\t\tpadding: 8px 12px;\n\t\t\t\t"},function(e){return"large"===e.size&&"\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tpadding: 18px;\n\t\t\t\t"});t.AfterWrapper=x;var y=p.default.div(o(),function(e){return e.show&&"\n        margin: 4px 0 0;\n        height: auto;\n        padding-bottom: 12px;\n    "});t.Information=y;var z=p.default.div(a(),function(e){return e.theme.extraLightGrey},function(e){return e.theme.borderColor});t.InformationText=z},200:function(e,t,n){"use strict";n.r(t);var r=n(24);n.d(t,"Label",function(){return r.LabelComponent});var a=n(189),o=n.n(a);n.d(t,"Validation",function(){return o.a})},219:function(e,t,n){"use strict";var r=n(183),a=n(182),o=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(42)),l=a(n(0)),i=o(n(11)),f=n(220),d=n(221),s=function(e){return e.replace(/[^0-9]/g,"")};function c(e){var t=e.value,n=e.onChange,a=e.id,o=e.label,i=e.labelSize,c=e.disabled,p=e.appearance,b=e.variant,v=e.size,g=e.subLabel,h=e.showSubLabel,m=e.placeholder,x=(0,l.useState)(!1),y=r(x,2),z=y[0],w=y[1],L=(0,l.useState)(""),S=r(L,2),_=S[0],F=S[1],O=(0,l.useState)(!0),W=r(O,2),E=W[0],M=W[1],P=(new Date).getFullYear();(0,l.useEffect)(function(){"string"===typeof t&&w(t&&t.length>0)},[t]);var C={id:a,label:o,labelSize:i,disabled:c,appearance:p,variant:b,size:v,placeholder:m,onChange:function(t){if(n){var r=function(t){for(var n="",r=0;r<t.length&&r<(e.year?4:8);r+=1)e.year?n+=t[r]:n+=2===r||4===r?" ".concat(t[r]):t[r];return n}(s(t.target.value));t.target.value=r,w(t.target.value.length>0),F(t.target.value),M(function(t){if(e.year){var n=Number(t);return n>=P-150&&n<=P+20}}(r)),n(t)}}};return l.default.createElement(f.DateWrapper,null,!e.year&&l.default.createElement(f.DateMask,{focus:z,size:v,labelSize:i,"data-test-id":"".concat(a,"_date-mask")},"/ /"),l.default.createElement(d.TextField,(0,u.default)({type:"tel",subLabel:h?g||e.year?"YYYY":"DD/MM/YYYY":null,invalid:!E,error:"Must be a legitimate year",value:e.value||_},C)))}c.propTypes={id:i.default.string.isRequired,disabled:i.default.bool,label:i.default.string,labelSize:i.default.oneOf(["regular","large"]),subLabel:i.default.string,showSubLabel:i.default.bool,appearance:i.default.oneOf(["box-rounded"]),variant:i.default.oneOf(["internal","external"]),size:i.default.oneOf(["small","regular","large"]),name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string,placeholder:i.default.string,year:i.default.bool},c.defaultProps={value:"",placeholder:"",size:"small",disabled:!1,label:null,labelSize:"regular",subLabel:null,showSubLabel:!1,appearance:null,variant:"internal",name:"",year:!1,onBlur:function(){},onChange:function(){},onFocus:function(){}};var p=c;t.default=p},220:function(e,t,n){"use strict";var r=n(41);function a(){var e=r(["\n  margin: "," 0 0 ","px;\n  line-height: 44px;\n  position: absolute;\n  word-spacing: 38px;\n  color: ",";\n  opacity: 0;\n  transition: opacity 0.2s, margin 0.2s, line-height 0.2s, word-spacing 0.2s, font-size 0.2s;\n\n  ","\n\n  ","\n\n  ","\n"]);return a=function(){return e},e}function o(){var e=r(["\n\tposition: relative;\n\n\tinput {\n\t\tword-spacing: 26px;\n\t}\n"]);return o=function(){return e},e}var u=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.DateMask=t.DateWrapper=void 0;var l=u(n(1)),i=l.default.div(o());t.DateWrapper=i;var f=l.default.div(a(),function(e){return"large"===e.labelSize?"30px":"28px"},function(e){return"large"===e.labelSize?"60":"41"},function(e){return e.theme.outlineColor},function(e){return(e.focus||e.hasValue)&&"\n\t\t\topacity: 1;\n\t\t"},function(e){return"small"===e.size&&"\n\t\t\tline-height: 38px;\n\t\t"},function(e){return"large"===e.size&&"\n\t\t\tmargin: ".concat("large"===e.labelSize?"47px":"36px","\n\t\t\t\t0 0 50px;\n\t\t\tline-height: 60px;\n\t\t\tword-spacing: 42px;\n\t\t\tfont-size: 24px;\n\t\t")});t.DateMask=f},221:function(e,t,n){"use strict";n.r(t);var r=n(195),a=n.n(r);n.d(t,"TextField",function(){return a.a})},262:function(e,t,n){"use strict";var r=n(183),a=n(22),o=n(182);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(0)),l=a(n(219));t.default=function(){var e=(0,u.useState)(null),t=r(e,2),n=t[0],a=t[1];return u.default.createElement(l.default,{id:"testDateField",label:"Test date field",name:"testDateField",value:n,onChange:a})}}}]);
//# sourceMappingURL=24.ff938cf1.chunk.js.map