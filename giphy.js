require("source-map-support").install();
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@exoplay/exobot")):"function"==typeof define&&define.amd?define(["@exoplay/exobot"],t):"object"==typeof exports?exports["giphy.js"]=t(require("@exoplay/exobot")):e["giphy.js"]=t(e["@exoplay/exobot"])}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,t,r){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=require("@exoplay/exobot")},function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var u=t[o](i),a=u.value}catch(p){return void r(p)}return u.done?void e(a):Promise.resolve(a).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),p=a&&a.__esModule?function(){return a["default"]}:function(){return a};r.d(p,"a",p),r.d(t,"ENDPOINT",function(){return s}),r.d(t,"Giphy",function(){return y});var c=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(p){o=!0,i=p}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function h(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:h(o,t,r)}if("value"in n)return n.value;var i=n.get;if(void 0!==i)return i.call(r)},s="http://api.giphy.com/v1/gifs/search",y=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,t);var r=e.apiKey,n=i(this,Object.getPrototypeOf(t).apply(this,arguments));return n.help='Help: Explains commands. Say "<botname> help" for information.',n.respond(/^(?:gif|giphy)(?:\sme)?\s+(.*)/i,n.giphy),n.apiKey=r,n}return u(t,e),f(t,[{key:"register",value:function(e){l(Object.getPrototypeOf(t.prototype),"register",this).apply(this,arguments),this.apiKey||e.log.critical("No apiKey passed to Giphy plugin; plugin will not work.")}},{key:"giphy",value:function(){function e(e){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function r(e){var t,n,o,i=c(e,2),u=i[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.bot.http.get(s).query({q:u,api_key:this.apiKey});case 3:if(t=e.sent,n=t.body,o=n.data,!o.length){e.next=8;break}return e.abrupt("return",o[parseInt(Math.random()*o.length)].images.original.url);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),this.bot.log.notice("Error returned from Giphy request."),this.bot.log.debug(e.t0);case 14:case"end":return e.stop()}},r,this,[[0,10]])}));return e}()}]),t}(a.ChatPlugin)}])});
//# sourceMappingURL=giphy.js.map