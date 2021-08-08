/*! For license information please see 6.19883d04.chunk.js.LICENSE.txt */
(this["webpackJsonpdime-scheduler-media-kit"]=this["webpackJsonpdime-scheduler-media-kit"]||[]).push([[6],{42:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},43:function(e,t,n){"use strict";n.d(t,"n",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"p",(function(){return m})),n.d(t,"o",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return h})),n.d(t,"j",(function(){return x})),n.d(t,"d",(function(){return g})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return w})),n.d(t,"f",(function(){return E}));var r,a=n(7),o=n.n(a);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function d(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var f="object"===typeof window&&window.Element||function(){};var m=o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]),b=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},j=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},x={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},g=!("undefined"===typeof window||!window.document||!window.document.createElement);function y(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function O(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!O(e))return!1;var t=y(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function N(e){return null!==e&&(Array.isArray(e)||g&&"number"===typeof e.length)}function w(e,t){var n=v(e);return t?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var E=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},47:function(e,t,n){"use strict";var r=n(3),a=n(8),o=n(1),i=n.n(o),s=n(7),c=n.n(s),l=n(42),u=n.n(l),d=n(43),f={tag:d.o,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.fluid,s=e.tag,c=Object(a.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var f=Object(d.k)(u()(t,l),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},56:function(e,t,n){"use strict";var r=n(3),a=n(8),o=n(1),i=n.n(o),s=n(7),c=n.n(s),l=n(42),u=n.n(l),d=n(43),f=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.o,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,l=e.widths,f=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(t,n){var r=e[t];if(delete f[t],r){var a=!n;m.push(a?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var b=Object(d.k)(u()(t,o?"no-gutters":null,c?"form-row":"row",m),n);return i.a.createElement(s,Object(r.a)({},f,{className:b}))};p.propTypes=m,p.defaultProps=b,t.a=p},57:function(e,t,n){"use strict";var r=n(3),a=n(8),o=n(1),i=n.n(o),s=n(7),c=n.n(s),l=n(42),u=n.n(l),d=n(43),f=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),b={tag:d.o,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,c=Object(a.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,r){var a=e[t];if(delete c[t],a||""===a){var o=!r;if(Object(d.i)(a)){var i,s=o?"-":"-"+t+"-",f=j(o,t,a.size);l.push(Object(d.k)(u()(((i={})[f]=a.size||""===a.size,i["order"+s+a.order]=a.order||0===a.order,i["offset"+s+a.offset]=a.offset||0===a.offset,i)),n))}else{var m=j(o,t,a);l.push(m)}}})),l.length||l.push("col");var f=Object(d.k)(u()(t,l),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};h.propTypes=b,h.defaultProps=p,t.a=h},81:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(10),o=n(12),i=n(11),s=n(1),c=n.n(s),l=n(13),u=n(47),d=n(56),f=n(57),m=n(20),b=n.n(m),p=n(0),j=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsx)(c.a.Fragment,{children:Object(p.jsx)("footer",{className:"footer footer-bar "+this.props.className,children:Object(p.jsx)(u.a,{className:"text-center",children:Object(p.jsxs)(d.a,{className:"align-items-center",children:[Object(p.jsx)(f.a,{sm:"6",children:Object(p.jsx)("div",{className:"text-sm-start",children:Object(p.jsxs)("p",{className:"mb-0",children:["\xa9 2020-21 ",Object(p.jsx)("span",{className:"text-primary fw-bold",children:"Dime.Scheduler"}),". Develop by"," ",Object(p.jsx)("a",{href:"https://themesbrand.com/",target:"_blank",rel:"noopener noreferrer",className:"text-success",children:"Themesbrand"}),"."]})})}),Object(p.jsx)(f.a,{sm:"6",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(p.jsxs)("ul",{className:"list-unstyled social-icon text-sm-end mb-0",children:[Object(p.jsx)("li",{className:"list-inline-item",children:Object(p.jsx)(l.b,{to:"#",className:"rounded me-1",children:Object(p.jsx)("i",{children:Object(p.jsx)(b.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})}),Object(p.jsx)("li",{className:"list-inline-item me-1",children:Object(p.jsx)(l.b,{to:"#",className:"rounded",children:Object(p.jsx)("i",{children:Object(p.jsx)(b.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})}),Object(p.jsx)("li",{className:"list-inline-item me-1",children:Object(p.jsx)(l.b,{to:"#",className:"rounded",children:Object(p.jsx)("i",{children:Object(p.jsx)(b.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})}),Object(p.jsx)("li",{className:"list-inline-item me-1",children:Object(p.jsx)(l.b,{to:"#",className:"rounded",children:Object(p.jsx)("i",{children:Object(p.jsx)(b.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})}),Object(p.jsx)("li",{className:"list-inline-item me-1",children:Object(p.jsx)(l.b,{to:"#",className:"rounded",children:Object(p.jsx)("i",{children:Object(p.jsx)(b.a,{icon:"github",className:"fea icon-sm fea-social"})})})})]})})]})})})})}}]),n}(s.Component);t.default=j}}]);
//# sourceMappingURL=6.19883d04.chunk.js.map