(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{779:function(e,t,n){"use strict";var r=n(2442),o=n(8220),a=n(9279),l=n(9375),u=n(5459);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(1882).Z,d=i(n(7459)),c=i(n(9589)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}},h=function(e){a(i,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=u(i);if(t){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function i(){return r(this,i),n.apply(this,arguments)}return o(i,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||s[t]||"An unexpected error has occurred";return d.default.createElement("div",{style:p.error},d.default.createElement(c.default,null,d.default.createElement("title",null,t?"".concat(t,": ").concat(r):"Application error: a client-side exception has occurred")),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}".concat(void 0===n||n?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?d.default.createElement("h1",{className:"next-error-h1",style:p.h1},t):null,d.default.createElement("div",{style:p.desc},d.default.createElement("h2",{style:p.h2},this.props.title||t?r:d.default.createElement(d.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),i}(d.default.Component);h.displayName="ErrorPage",h.getInitialProps=f,h.origGetInitialProps=f,t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(1882).Z)(n(7459)).default.createContext({});t.AmpStateContext=r},6087:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},9589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r=n(1080).Z,o=n(1882).Z,a=(0,n(6984).Z)(n(7459)),l=o(n(4714)),u=n(9354),i=n(3378),d=n(6087);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(5047);var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,o,l,u,i=t.inAmpMode;return e.reduce(s,[]).reverse().concat(c(i).reverse()).filter((n=new Set,o=new Set,l=new Set,u={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var a=e.key.slice(e.key.indexOf("$")+1);n.has(a)?t=!1:n.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var i=0,d=f.length;i<d;i++){var c=f[i];if(e.props.hasOwnProperty(c)){if("charSet"===c)l.has(c)?t=!1:l.add(c);else{var s=e.props[c],p=u[c]||new Set;("name"!==c||!r)&&p.has(s)?t=!1:(p.add(s),u[c]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!i&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=a.useContext(u.AmpStateContext),r=a.useContext(i.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:d.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,u=e.reduceComponentsToState;function i(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),i()),a(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),a(function(){return n&&(n._pendingUpdate=i),function(){n&&(n._pendingUpdate=i)}}),l(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(6984).Z)(n(7459)),o=!1,a=r.useLayoutEffect,l=o?function(){}:r.useEffect},5047:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}}}]);