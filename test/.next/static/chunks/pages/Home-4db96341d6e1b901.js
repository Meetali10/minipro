(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{9354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(1882).Z)(n(7459)).default.createContext({});t.AmpStateContext=r},6087:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},9589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=s,t.default=void 0;var r=n(1080).Z,a=n(1882).Z,o=(0,n(6984).Z)(n(7459)),d=a(n(4714)),u=n(9354),i=n(3378),c=n(6087);function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(5047);var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,a,d,u,i=t.inAmpMode;return e.reduce(f,[]).reverse().concat(s(i).reverse()).filter((n=new Set,a=new Set,d=new Set,u={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var i=0,c=l.length;i<c;i++){var s=l[i];if(e.props.hasOwnProperty(s)){if("charSet"===s)d.has(s)?t=!1:d.add(s);else{var f=e.props[s],p=u[s]||new Set;("name"!==s||!r)&&p.has(f)?t=!1:(p.add(f),u[s]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!i&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,o.default.cloneElement(e,a)}return o.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=o.useContext(u.AmpStateContext),r=o.useContext(i.HeadManagerContext);return o.default.createElement(d.default,{reduceComponentsToState:p,headManager:r,inAmpMode:c.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,u=e.reduceComponentsToState;function i(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return a&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),i()),o(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),o(function(){return n&&(n._pendingUpdate=i),function(){n&&(n._pendingUpdate=i)}}),d(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(6984).Z)(n(7459)),a=!1,o=r.useLayoutEffect,d=a?function(){}:r.useEffect},5047:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},626:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Home",function(){return n(3132)}])},908:function(e,t,n){e.exports=n(9589)},405:function(e,t,n){e.exports=n(7856)},8182:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(4184),a=n.n(r),o=n(7459),d=n(6792),u=n(6611),i=n(9602),c=n(5731);let s=o.forwardRef(({bsPrefix:e,className:t,variant:n,as:r="img",...o},u)=>{let i=(0,d.vE)(e,"card-img");return(0,c.jsx)(r,{ref:u,className:a()(n?`${i}-${n}`:i,t),...o})});s.displayName="CardImg";var f=n(9059);let l=o.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},u)=>{let i=(0,d.vE)(e,"card-header"),s=(0,o.useMemo)(()=>({cardHeaderBsPrefix:i}),[i]);return(0,c.jsx)(f.Z.Provider,{value:s,children:(0,c.jsx)(n,{ref:u,...r,className:a()(t,i)})})});l.displayName="CardHeader";let p=(0,i.Z)("h5"),v=(0,i.Z)("h6"),m=(0,u.Z)("card-body"),h=(0,u.Z)("card-title",{Component:p}),y=(0,u.Z)("card-subtitle",{Component:v}),_=(0,u.Z)("card-link",{Component:"a"}),g=(0,u.Z)("card-text",{Component:"p"}),b=(0,u.Z)("card-footer"),w=(0,u.Z)("card-img-overlay"),x=o.forwardRef(({bsPrefix:e,className:t,bg:n,text:r,border:o,body:u,children:i,as:s="div",...f},l)=>{let p=(0,d.vE)(e,"card");return(0,c.jsx)(s,{ref:l,...f,className:a()(t,p,n&&`bg-${n}`,r&&`text-${r}`,o&&`border-${o}`),children:u?(0,c.jsx)(m,{children:i}):i})});x.displayName="Card",x.defaultProps={body:!1};var C=Object.assign(x,{Img:s,Title:h,Subtitle:y,Body:m,Link:_,Text:g,Header:l,Footer:b,ImgOverlay:w})},8525:function(e,t,n){"use strict";function r(e,t,n,r,a,o,d){try{var u=e[o](d),i=u.value}catch(e){n(e);return}u.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var d=e.apply(t,n);function u(e){r(d,a,o,u,i,"next",e)}function i(e){r(d,a,o,u,i,"throw",e)}u(void 0)})}}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[501,662,579,253,888,179],function(){return e(e.s=626)}),_N_E=e.O()}]);