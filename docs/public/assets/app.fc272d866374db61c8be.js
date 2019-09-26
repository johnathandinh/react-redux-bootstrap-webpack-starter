!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/",n(n.s=19)}([function(e,t){e.exports=require("tslib")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("styled-components")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(8)),a=r.__importDefault(n(38)),i=n(13),u=r.__importDefault(n(14)),l=r.__importDefault(n(15)),s=n(41),c="REQUEST_USER_INFOS_DATA",f="RECEIVED_USER_INFOS_DATA",d="ERROR_USER_INFOS_DATA",m="REQUEST_LOG_USER",p="RECEIVED_LOG_USER",_="ERROR_LOG_USER",g="CHECK_IF_USER_IS_AUTHENTICATED",v="DISCONNECT_USER",h={isFetching:!1,isLogging:!1,id:"",login:"",firstname:"",lastname:"",token:"",isAuthenticated:!1};t.default=function(e,t){switch(void 0===e&&(e=h),t.type){case g:var n=t.isAuthenticated,o=void 0!==n&&n,a=t.token,i=void 0===a?"":a,u=t.user,l=void 0===u?{id:"",login:"",firstname:"",lastname:""}:u;return r.__assign(r.__assign({},e),{isAuthenticated:o,token:i,id:l.id,login:l.login,firstname:l.firstname,lastname:l.lastname});case v:return r.__assign(r.__assign({},e),{isAuthenticated:!1,token:h.token,id:h.id,login:h.login,firstname:h.firstname,lastname:h.lastname});case m:return r.__assign(r.__assign({},e),{isLogging:!0});case p:var s=t.payload.data,E=s.token,b=(i=void 0===E?"":E,s.id),y=void 0===b?"":b,w=s.login,S=void 0===w?"":w,D=s.firstname,O=void 0===D?"":D,C=s.lastname,k=void 0===C?"":C;return r.__assign(r.__assign({},e),{isAuthenticated:!0,token:i,id:y,login:S,firstname:O,lastname:k,isLogging:!1});case _:return r.__assign(r.__assign({},e),{isAuthenticated:!1,isLogging:!1});case c:return r.__assign(r.__assign({},e),{isFetching:!0});case f:var x=t.payload.data.userInfos,T=void 0===x?{id:"",login:"",firstname:"",lastname:""}:x;return r.__assign(r.__assign({},e),{isFetching:!1,id:T.id,login:T.login,firstname:T.firstname,lastname:T.lastname});case d:return r.__assign(r.__assign({},e),{isFetching:!1});default:return e}},t.disconnectUser=function(){return u.default.clearAllAppStorage(),{type:"DISCONNECT_USER"}},t.checkUserIsConnected=function(){var e,t=u.default.getToken(),n=u.default.getUserInfo(),o=u.default.isExpiredToken(t),a=!!(t&&(e=n,e&&e.id));return r.__assign(r.__assign({type:g,token:t},n),{isAuthenticated:a&&!o})},t.logUserIfNeeded=function(e,t){return function(n,u){return u().userAuth.isLogging?Promise.resolve():n(function(e,t){var n=this;return function(u){return r.__awaiter(n,void 0,void 0,function(){var n,l,s;return r.__generator(this,function(r){return n=o.default.DEV_MODE?"FETCH_MOCK":"FETCH","login",l=a.default,s=i.getLocationOrigin()+"/login","post","FETCH",u({type:"FETCH",fetch:{type:n,actionTypes:{request:m,success:p,fail:_},mockResult:l,url:s,method:"post",headers:{},options:{credentials:"same-origin",data:{login:e,password:t}}}}),[2]})})}}(e,t))}},t.fetchUserInfoDataIfNeeded=function(e){return void 0===e&&(e=""),function(t,n){return n().userAuth.isFetching?Promise.resolve():t(function(e){var t=this;return void 0===e&&(e=""),function(n){return r.__awaiter(t,void 0,void 0,function(){var t,f,m,p,_,g,v,h,E;return r.__generator(this,function(b){switch(b.label){case 0:if(t=u.default.getToken(),f=o.default.DEV_MODE,m=o.default.api.users,f?"FETCH_MOCK":"FETCH",p=a.default,_=i.getLocationOrigin()+"/"+m+"/"+e,g="get",v={authorization:"Bearer "+(t||"")},h={credentials:"same-origin"},f)return[2,Promise.resolve({data:p})];b.label=1;case 1:return b.trys.push([1,3,,4]),n({type:c}),[4,l.default.request(r.__assign({url:_,method:g,withCredentials:!0,headers:r.__assign({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},v)},h))];case 2:return b.sent(),[2,s.response];case 3:return E=b.sent(),n({type:d,error:E}),[3,4];case 4:return[2]}})})}}(e))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).__importDefault(n(60));t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appConfig=Object.freeze({DEV_MODE:!0,api:{fakeEndPoint:"api/somewhere",users:"api/someusersapi"},sw:{path:"public/assets/sw.js"}}),t.default=t.appConfig},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("loadable-components")},function(e,t){e.exports=require("connected-react-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),a=n(11),i=n(27),u=n(28),l=n(29),s=r.__importDefault(n(30)),c=r.__importDefault(n(31)),f=n(32),d=r.__importDefault(n(33)),m=r.__importDefault(n(42));t.history=u.createBrowserHistory();f.createLogger({level:"info",collapsed:!0});var p=i.composeWithDevTools(o.applyMiddleware(c.default,m.default,a.routerMiddleware(t.history))),_={key:"root",storage:s.default,blacklist:["router"]},g=l.persistReducer(_,a.connectRouter(t.history)(d.default));t.default=function(e){void 0===e&&(e={});var t=o.createStore(g,e,p);return{store:t,persistor:l.persistStore(t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(37);t.getLocationOrigin=function(){return window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),window.location.origin},t.getMethod={method:"get"},t.postMethod={method:"post"},t.defaultOptions={credentials:"same-origin"},t.jsonHeader={headers:{Accept:"application/json","Content-Type":"application/json"}},t.encodeBase64=function(e){return void 0===e&&(e=""),r.Base64.encode(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(39)),a=r.__importDefault(n(40)),i=["localStorage","sessionStorage"],u=JSON.parse,l=JSON.stringify;t.auth={getToken:function(e,t){return void 0===e&&(e=i[0]),void 0===t&&(t="token"),e===i[0]?localStorage&&localStorage.getItem(t)||null:e===i[1]&&sessionStorage&&sessionStorage.getItem(t)||null},setToken:function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=i[0]),void 0===n&&(n="token"),!e||e.length<=0||(t===i[0]&&localStorage?localStorage.setItem(n,e):t===i[1]&&sessionStorage&&sessionStorage.setItem(n,e))},isAuthenticated:function(e,t){return void 0===e&&(e=i[0]),void 0===t&&(t="token"),e===i[0]?!(!localStorage||!localStorage.getItem(t)):e===i[1]&&!(!sessionStorage||!sessionStorage.getItem(t))},clearToken:function(e,t){return void 0===e&&(e=i[0]),void 0===t&&(t="token"),localStorage&&localStorage[t]?(localStorage.removeItem(t),!0):!(!sessionStorage||!sessionStorage[t])&&(sessionStorage.removeItem(t),!0)},getTokenExpirationDate:function(e){if(!e)return new Date(0);var t=o.default(e);return t.exp?new Date(1e3*t.exp):new Date(0)},isExpiredToken:function(e){var t=this.getTokenExpirationDate(e),n=new Date;return a.default(n,t)},getUserInfo:function(e,t){if(void 0===e&&(e=i[0]),void 0===t&&(t="userInfo"),e===i[0])try{return window&&localStorage&&u(localStorage.getItem(t)||"")||null}catch(e){return null}if(e===i[1])try{return window&&sessionStorage&&u(sessionStorage.getItem(t)||"")||null}catch(e){return null}return null},setUserInfo:function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=i[0]),void 0===n&&(n="userInfo"),!e||e.length<=0||(t===i[0]&&localStorage?localStorage.setItem(n,l(e)):t===i[1]&&sessionStorage&&sessionStorage.setItem(n,l(e)))},clearUserInfo:function(e){void 0===e&&(e="userInfo"),localStorage&&localStorage[e]?localStorage.removeItem(e):sessionStorage&&sessionStorage[e]&&sessionStorage.removeItem(e)},clearAllAppStorage:function(){localStorage?localStorage.clear():sessionStorage&&sessionStorage.clear()}},t.default=t.auth},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(10));t.Home=o.default(function(){return Promise.resolve().then(function(){return r.__importStar(n(58))})},{modules:["home"]}),t.About=o.default(function(){return Promise.resolve().then(function(){return r.__importStar(n(64))})},{modules:["about"]}),t.Login=o.default(function(){return Promise.resolve().then(function(){return r.__importStar(n(66))})},{modules:["login"]}),t.Protected=o.default(function(){return Promise.resolve().then(function(){return r.__importStar(n(71))})},{modules:["protected"]}),t.PageNotFound=o.default(function(){return Promise.resolve().then(function(){return r.__importStar(n(73))})},{modules:["pageNotFound"]}),t.PrivateRoute=o.default(function(){return Promise.resolve().then(function(){return r.__importStar(n(18))})},{modules:["PrivateRoute"]})},function(e,t){e.exports=require("reactstrap/lib/Jumbotron")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=n(3);function i(e){var t=e.component,n=r.__rest(e,["component"]),i=e.location,u=e.checkUserIsConnected,l=(!!window&&u()).isAuthenticated,s=void 0!==l&&l;return o.default.createElement(a.Route,r.__assign({},n,{render:function(e){return s?o.default.createElement(t,r.__assign({},e)):o.default.createElement(a.Redirect,{to:{pathname:"/login",state:{from:i}}})}}))}i.displayName="PrivateRoute",t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n(20),n(21),n(22);var o,a,i=n(23),u=r.__importDefault(n(1)),l=n(24),s=r.__importDefault(n(25)),c=n(10),f=r.__importDefault(n(26)),d=document.getElementById("root");s.default.polyfill(),window.__forceSmoothScrollPolyfill__=!0,window.snapSaveState=function(){return c.getState()},r.__awaiter(void 0,void 0,void 0,function(){return r.__generator(this,function(e){return console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.'),[2]})}),o=f.default,a=i.hot(o),d&&d.hasChildNodes()?c.loadComponents().then(function(){return l.hydrate(u.default.createElement(a,null),d)}):l.render(u.default.createElement(a,null),d)},function(e,t){e.exports=require("core-js/stable")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("bootstrap/dist/css/bootstrap.min.css")},function(e,t){e.exports=require("react-hot-loader/root")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("smoothscroll-polyfill")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=n(1),i=n(11),u=n(3),l=n(4),s=n(5),c=r.__importDefault(n(12)),f=n(12),d=r.__importDefault(n(43)),m=r.__importDefault(n(44)),p=r.__importDefault(n(57)),_=n(16),g=r.__importStar(n(6)),v=r.__importDefault(n(78)),h=c.default({}).store,E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.componentDidMount=function(){h.dispatch(g.checkUserIsConnected())},t.prototype.componentDidCatch=function(e,t){console.log("error was catch by Root component: ",{error:e,info:t})},t.prototype.render=function(){return o.default.createElement(l.Provider,{store:h},o.default.createElement(s.ThemeProvider,{theme:{}},o.default.createElement(o.default.Fragment,null,o.default.createElement(i.ConnectedRouter,{history:f.history},o.default.createElement(d.default,null,o.default.createElement(u.Switch,null,o.default.createElement(m.default,null,o.default.createElement(p.default,null)),o.default.createElement(u.Route,{path:"*",component:_.PageNotFound})))),o.default.createElement(v.default,null))))},t}(a.Component);t.default=E},function(e,t){e.exports=require("redux-devtools-extension")},function(e,t){e.exports=require("history")},function(e,t){e.exports=require("redux-persist")},function(e,t){e.exports=require("redux-persist/lib/storage")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("redux-logger")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),a=r.__importDefault(n(34)),i=r.__importDefault(n(6));t.reducers={fakeModuleWithFetch:a.default,userAuth:i.default},t.default=o.combineReducers(r.__assign({},t.reducers))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(35),a=r.__importDefault(n(36)),i=r.__importDefault(n(8)),u=n(13),l="REQUEST_FAKE_FETCH",s="RECEIVED_FAKE_FETCH",c="ERROR_FAKE_FETCH",f={isFetching:!1,actionTime:"",data:[],error:{}};t.default=function(e,t){void 0===e&&(e=f);var n=o.format(new Date);switch(t.type){case l:return r.__assign(r.__assign({},e),{actionTime:n,isFetching:!0});case s:var a=t.payload,i=void 0===a?[]:a;return r.__assign(r.__assign({},e),{actionTime:n,isFetching:!1,data:r.__spreadArrays(i)});case c:var u=t.error,d=void 0===u?{}:u;return r.__assign(r.__assign({},e),{actionTime:n,isFetching:!1,error:r.__assign({},d)});default:return e}},t.fakeFetchIfNeeded=function(){return function(e,t){return t().fakeModuleWithFetch.isFetching?Promise.resolve():e(function(e){var t=i.default.DEV_MODE?"FETCH_MOCK":"FETCH",n=a.default,r=u.getLocationOrigin()+"/"+i.default.api.fakeEndPoint;return Promise.resolve(e({type:"FETCH",fetch:{type:t,actionTypes:{request:l,success:s,fail:c},mockResult:n,url:r,method:"get",options:{}}}))})}}},function(e,t){e.exports=require("date-fns")},function(e){e.exports=JSON.parse('[{"id":1,"label":"item 1"},{"id":2,"label":"item 2"}]')},function(e,t){e.exports=require("js-base64")},function(e){e.exports=JSON.parse('{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}}')},function(e,t){e.exports=require("jwt-decode")},function(e,t){e.exports=require("date-fns/is_after")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(15));t.FETCH_MOCK="FETCH_MOCK",t.FETCH="FETCH",function(e){e.FETCH="FETCH",e.FETCH_MOCK="FETCH_MOCK"}(t.FETCH_TYPE_ENUM||(t.FETCH_TYPE_ENUM={}));t.default=function(e){return function(t){return function(n){return r.__awaiter(void 0,void 0,void 0,function(){var a,i,u,l,s,c,f,d,m,p,_,g,v,h;return r.__generator(this,function(E){switch(E.label){case 0:if(!n.fetch)return[2,t(n)];if(!n.fetch.type)return[2,t(n)];if("FETCH_MOCK"!==n.fetch.type||"FETCH"!==n.fetch.type)return[2,t(n)];if(!n.fetch.actionTypes)return[2,t(n)];if("FETCH_MOCK"===n.fetch.type){if(!n.fetch.mockResult)throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');return a=n.fetch,i=a.actionTypes,c=i.request,f=i.success,u=a.mockResult,e.dispatch({type:c}),[2,Promise.resolve(e.dispatch({type:f,payload:{status:200,data:u}}))]}if("FETCH"!==n.fetch.type)return[3,4];l=n.fetch,s=l.actionTypes,c=s.request,f=s.success,d=s.fail,m=l.url,p=l.method,_=l.headers,g=l.options,e.dispatch({type:c}),E.label=1;case 1:return E.trys.push([1,3,,4]),[4,o.default.request(r.__assign({method:p,url:m,withCredentials:!0,headers:r.__assign({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},_)},g))];case 2:return v=E.sent(),e.dispatch({type:f,payload:v}),[2,v];case 3:throw h=E.sent(),e.dispatch({type:d,error:h.response}),h;case 4:return[2,t(n)]}})})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).__importStar(n(1)),o=n(9);function a(e){var t=e.children;return function(e){var t=r.useRef();r.useEffect(function(){t.current=e},[]),r.useEffect(function(){t.current!==e&&(window&&window.scrollTo(0,0),t.current=e)},[e])}(e.location),r.default.createElement(r.Fragment,null,t)}a.displayName="ScrollToTop",t.default=o.withRouter(a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).__importDefault(n(45));t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importStar(n(1)),a=n(9),i=r.__importDefault(n(46)),u=r.__importDefault(n(49)),l=r.__importDefault(n(55)),s=r.__importDefault(n(56));t.default=a.withRouter(function(e){e.history,e.location,e.match;var t=e.children;o.useEffect(function(){void 0!==typeof window&&s.default()},[]);var n=o.useCallback(function(e,t){},[]),r=o.useCallback(function(e,t){},[]);return o.default.createElement(o.Fragment,null,o.default.createElement("div",{id:"appContainer"},o.default.createElement(i.default,{brand:l.default.brand,navModel:l.default,leftNavItemClick:n,rightNavItemClick:r}),o.default.createElement("div",{className:"container-fluid"},t),o.default.createElement(u.default,{minScrollY:40,scrollTo:"appContainer"})))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(4),a=n(2),i=n(3),u=r.__importStar(n(6)),l=r.__importDefault(n(47));t.default=a.compose(o.connect(function(e){return{token:e.userAuth.token,isAuthenticated:e.userAuth.isAuthenticated}},function(e){return a.bindActionCreators(r.__assign({},u),e)}),i.withRouter)(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).__importStar(n(1)),o=n(48);function a(e){var t=e.brand,n=e.navModel.rightLinks,a=(e.leftNavItemClick,e.rightNavItemClick,e.isAuthenticated),i=e.history,u=e.disconnectUser,l=r.useState(!1),s=l[0],c=l[1],f=function(e){return void 0===e&&(e="/"),function(t){t&&t.preventDefault(),i.push(e)}};return r.default.createElement(o.Navbar,{color:"light",light:!0,expand:"md"},r.default.createElement(o.NavbarBrand,{href:"/"},t),r.default.createElement(o.NavbarToggler,{onClick:function(e){e&&e.preventDefault(),c(!s)}}),r.default.createElement(o.Collapse,{isOpen:s,navbar:!0},r.default.createElement(o.Nav,{className:"ml-auto",navbar:!0},n.map(function(e,t){var n=e.label,a=e.link;return r.default.createElement(o.NavItem,{key:""+t},r.default.createElement(o.NavLink,{href:"#",onClick:f(a)},n))}),a&&r.default.createElement(o.NavItem,null,r.default.createElement(o.NavLink,{href:"#",onClick:function(e){e&&e.preventDefault(),u(),i.push("/")}},"Disconnect")))))}a.displayName="NavigationBar",t.default=a},function(e,t){e.exports=require("reactstrap")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importStar(n(1)),a=r.__importDefault(n(50)),i=n(54);function u(e){var t=e.minScrollY,n=void 0===t?120:t,r=e.onScrollDone,u=void 0===r?function(){}:r,l=o.useState(!1),s=l[0],c=l[1],f=o.useState(0),d=f[0],m=f[1],p=o.useState(!1),_=p[0],g=p[1],v=function(){if(window){var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;_||window.requestAnimationFrame(function(){if(d!==e){var t=e>=n;m(e),c(t)}g(!1)}),g(!0)}},h=function(e){e&&e.preventDefault(),window&&d&&d>n&&(window.scroll({top:0,left:0,behavior:"smooth"}),"function"==typeof u&&u())};return o.useEffect(function(){return"undefined"!=typeof window&&window.addEventListener("scroll",v),function(){"undefined"!=typeof window&&window.removeEventListener("scroll",v)}}),o.default.createElement(i.Motion,{style:{x:i.spring(s?0:120,i.presets.stiff)}},function(e){var t=e.x;return o.default.createElement(a.default,{position:"bottom-right",onClick:h,motionStyle:{WebkitTransform:"translate3d("+t+"px, 0, 0)",transform:"translate3d("+t+"px, 0, 0)"}})})}u.displayName="BackToTop",t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=r.__importDefault(n(51)),i=r.__importDefault(n(52)),u=r.__importDefault(n(53)),l="-10px",s={position:"fixed",right:l,left:"",bottom:"40px",width:"100px",zIndex:10,opacity:.5,backgroundColor:"#4A4A4A"};var c=function(e){var t=e.onClick,n=e.position,c=void 0===n?"bottom-right":n,f=e.children,d=e.motionStyle,m=function(e,t){void 0===e&&(e="bottom-right"),void 0===t&&(t=s);var n=r.__assign({},t);switch(e){case"bottom-right":return n.right=l,n.left="",n;case"bottom-left":return n.right="",n.left=l,n;default:return t}}(c,r.__assign(r.__assign({},d),s));return o.default.createElement("button",{style:m,className:a.default({btn:!0}),onClick:t},!f&&o.default.createElement(u.default,null,o.default.createElement(i.default,{color:"#F1F1F1"})),!!f&&f)};c.displayName="BackToTopButton",t.default=c},function(e,t){e.exports=require("classnames")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).__importDefault(n(1)),o=function(e){var t=e.color,n=void 0===t?"#F1F1F1":t;return r.default.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 512 512",fill:""+n},r.default.createElement("path",{d:"M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"}))};o.displayName="UpIcon",t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=o.__importDefault(n(5)).default.div(r||(r=o.__makeTemplateObject(["\n  margin-right: 10px;\n"],["\n  margin-right: 10px;\n"])));t.default=a},function(e,t){e.exports=require("react-motion")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.freeze({brand:"React Redux Bootstrap Starter",leftLinks:[],rightLinks:[{label:"Home",link:"/"},{label:"Protected",link:"/protected",view:"protected",isRouteBtn:!0},{label:"About",link:"/about",view:"about",isRouteBtn:!0}]});t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(8)).default.sw.path;t.default=function(){var e=this;void 0!==typeof window&&"serviceWorker"in navigator&&window.addEventListener("load",function(){return r.__awaiter(e,void 0,void 0,function(){var e,t;return r.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,navigator.serviceWorker.register(o)];case 1:return e=n.sent(),console.log("SW registered: ",e),[3,3];case 2:return t=n.sent(),console.log("SW registration failed: ",t),[3,3];case 3:return[2]}})})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=n(9),i=n(16),u=r.__importDefault(n(75)),l=r.__importDefault(n(77));t.default=function(){return o.default.createElement(a.Switch,null,o.default.createElement(a.Route,{exact:!0,path:"/",component:i.Home}),o.default.createElement(a.Route,{path:"/about",component:i.About}),o.default.createElement(l.default,{path:"/protected",component:i.Protected}),o.default.createElement(a.Route,{exact:!0,path:"/login",component:i.Login}),o.default.createElement(u.default,{path:"/logout"}),o.default.createElement(a.Route,{path:"*",component:i.PageNotFound}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(4),a=n(2),i=r.__importDefault(n(59));t.default=a.compose(o.connect(function(e){return{}},function(e){return a.bindActionCreators({},e)}))(i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=n(3),i=r.__importDefault(n(17)),u=r.__importDefault(n(7)),l=r.__importDefault(n(62)),s=r.__importDefault(n(63));function c(e){return o.default.createElement(u.default,null,o.default.createElement(i.default,null,o.default.createElement(l.default,null,o.default.createElement(s.default,null,"ReactJS 16.9+ Bootstrap 4"),o.default.createElement("h2",null,"with Hot Reload (",o.default.createElement("i",null,"react-hot-loader 4+"),")!!!"),o.default.createElement("h2",null,"and React Router v4"),o.default.createElement("h2",null,"and webpack 4.x"),o.default.createElement("h1",null,"Starter"),o.default.createElement("p",null,o.default.createElement(a.Link,{className:"btn btn-success btn-lg",to:"/about"},o.default.createElement("i",{className:"fa fa-info"}),"  go to about")))))}c.displayName="Home",t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=r.__importDefault(n(61));function i(e){var t=e.children;return o.default.createElement(a.default,{startAnimation:!0},t)}i.displayName="FadeInEntrance",t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,i=n(0),u=i.__importStar(n(5)),l=u.keyframes(r||(r=i.__makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"],["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]))),s=u.css(o||(o=i.__makeTemplateObject(["\n  opacity: 0;\n  animation-name: ",";\n  animation-timing-function: ease-in;\n  animation-duration: 0.7s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n"],["\n  opacity: 0;\n  animation-name: ",";\n  animation-timing-function: ease-in;\n  animation-duration: 0.7s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n"])),l),c=u.default.div(a||(a=i.__makeTemplateObject(["\n  ",";\n"],["\n  ",";\n"])),function(e){return e.startAnimation&&s});t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=o.__importDefault(n(5)).default.div(r||(r=o.__makeTemplateObject([""],[""])));t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=o.__importDefault(n(5)).default.h1(r||(r=o.__makeTemplateObject(["\n  color: #222 !important;\n  font-weight: 800;\n"],["\n  color: #222 !important;\n  font-weight: 800;\n"])));t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(4),a=n(2),i=r.__importDefault(n(65));t.default=a.compose(o.connect(function(e){return{}},function(e){return a.bindActionCreators({},e)}))(i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=r.__importDefault(n(7));function i(e){return o.default.createElement(a.default,null,o.default.createElement("h1",null,"About"))}i.displayName="About",t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),a=n(4),i=r.__importStar(n(6)),u=r.__importDefault(n(67));t.default=o.compose(a.connect(function(e,t){return{isAuthenticated:e.userAuth.isAuthenticated,isFetching:e.userAuth.isFetching,isLogging:e.userAuth.isLogging}},function(e){return o.bindActionCreators(r.__assign({},i),e)}))(u.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importStar(n(1)),a=r.__importDefault(n(68)),i=r.__importDefault(n(69)),u=r.__importDefault(n(70)),l=r.__importDefault(n(14)),s=r.__importDefault(n(7));function c(e){var t=this,n=e.isLogging,c=(e.isFetching,e.disconnectUser),f=e.logUserIfNeeded,d=e.history,m=o.useState(""),p=m[0],_=m[1],g=o.useState(""),v=g[0],h=g[1];o.useEffect(function(){c()},[]);return o.default.createElement(s.default,null,o.default.createElement("div",{className:"content"},o.default.createElement(i.default,null,o.default.createElement(u.default,{md:{size:4,offset:4},xs:{size:10,offset:1}},o.default.createElement("form",{className:"form-horizontal",noValidate:!0},o.default.createElement("fieldset",null,o.default.createElement("legend",null,"Login"),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{htmlFor:"inputEmail",className:"col-lg-2 control-label"},"Email"),o.default.createElement(u.default,{lg:12},o.default.createElement("input",{type:"text",className:"form-control",id:"inputEmail",placeholder:"Email",autoComplete:"username email",value:p,onChange:function(e){e&&(e.preventDefault(),_(e.target.value.trim()))}}))),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",{htmlFor:"inputPassword",className:"col-lg-2 control-label"},"Password"),o.default.createElement(u.default,{lg:12},o.default.createElement("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",autoComplete:"current-password",value:v,onChange:function(e){e&&(e.preventDefault(),h(e.target.value.trim()))}}))),o.default.createElement("div",{className:"form-group"},o.default.createElement(u.default,{lg:{size:12}},o.default.createElement(a.default,{className:"login-button btn-block",color:"primary",disabled:n,onClick:function(e){return r.__awaiter(t,void 0,void 0,function(){var t,n,o,a,i;return r.__generator(this,function(r){switch(r.label){case 0:e&&e.preventDefault(),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,f(p,v)];case 2:return t=r.sent(),console.log('"response: ',t),n=t.payload.data,o=n.token,a=n.user,l.default.setToken(o),l.default.setUserInfo(a),d.push({pathname:"/"}),[3,4];case 3:return i=r.sent(),console.log("login went wrong..., error: ",i),[3,4];case 4:return[2]}})})}},n?o.default.createElement("span",null,"login in...  ",o.default.createElement("i",{className:"fa fa-spinner fa-pulse fa-fw"})):o.default.createElement("span",null,"Login")))))))),o.default.createElement(i.default,null,o.default.createElement(u.default,{md:{size:4,offset:4},xs:{size:10,offset:1}},o.default.createElement("div",{className:"pull-right"},o.default.createElement(a.default,{className:"btn-block",onClick:function(e){e&&e.preventDefault(),d.push({pathname:"/"})}},"back to home"))))))}c.defaultProps={isFetching:!1,isLogging:!1},c.displayName="Login",t.default=c},function(e,t){e.exports=require("reactstrap/lib/Button")},function(e,t){e.exports=require("reactstrap/lib/Row")},function(e,t){e.exports=require("reactstrap/lib/Col")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),a=r.__importDefault(n(72));t.default=o.compose()(a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=r.__importDefault(n(7));function i(e){return o.default.createElement(a.default,null,o.default.createElement("h1",null,"Protected view"),o.default.createElement("h3",null,"If you can read, it means you are authenticated"))}i.displayName="Protected",t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),a=r.__importDefault(n(74));t.default=o.compose()(a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importDefault(n(1)),a=r.__importDefault(n(17)),i=r.__importDefault(n(7));function u(e){return o.default.createElement(i.default,null,o.default.createElement(a.default,null,o.default.createElement("h1",null,"Sorry this page does not exists...")))}u.displayName="PageNotFound",t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(4),a=n(2),i=n(3),u=r.__importStar(n(6)),l=r.__importDefault(n(76));t.default=a.compose(o.connect(function(e){return{}},function(e){return a.bindActionCreators(r.__assign({},u),e)}),i.withRouter)(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.__importStar(n(1)),a=n(3);function i(e){var t=e.disconnectUser;return o.useEffect(function(){return t()}),o.default.createElement(a.Route,r.__assign({},e),o.default.createElement(a.Redirect,{to:{pathname:"/login"}}))}i.displayName="LogoutRoute",t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(4),a=n(2),i=n(3),u=r.__importStar(n(6)),l=r.__importDefault(n(18));t.default=a.compose(o.connect(function(e){return{isAuthenticated:e.userAuth.isAuthenticated}},function(e){return a.bindActionCreators(r.__assign({},u),e)}),i.withRouter)(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=n(5).createGlobalStyle(r||(r=o.__makeTemplateObject(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"])));t.default=a}]);