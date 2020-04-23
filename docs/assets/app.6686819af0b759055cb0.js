!function(e){function t(t){for(var a,i,u=t[0],l=t[1],s=t[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;o.push([261,1]),n()}({113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(245)),o=a.__importDefault(n(155)),i=a.__importDefault(n(641)),u=n(244),l=a.__importDefault(n(251)),s=n(252),c={isFetching:!1,isLogging:!1,id:"",login:"",firstname:"",lastname:"",token:"",isAuthenticated:!1};t.default=function(e,t){switch(void 0===e&&(e=c),t.type){case"CHECK_IF_USER_IS_AUTHENTICATED":var n=t.isAuthenticated,r=void 0!==n&&n,o=t.token,i=void 0===o?"":o,u=t.user,l=void 0===u?{id:"",login:"",firstname:"",lastname:""}:u;return a.__assign(a.__assign({},e),{isAuthenticated:r,token:i,id:l.id,login:l.login,firstname:l.firstname,lastname:l.lastname});case"DISCONNECT_USER":return a.__assign(a.__assign({},e),{isAuthenticated:!1,token:c.token,id:c.id,login:c.login,firstname:c.firstname,lastname:c.lastname});case"REQUEST_LOG_USER":return a.__assign(a.__assign({},e),{isLogging:!0});case"RECEIVED_LOG_USER":var s=t.payload.data,f=s.token,d=(i=void 0===f?"":f,s.id),_=void 0===d?"":d,m=s.login,p=void 0===m?"":m,g=s.firstname,h=void 0===g?"":g,v=s.lastname,E=void 0===v?"":v;return a.__assign(a.__assign({},e),{isAuthenticated:!0,token:i,id:_,login:p,firstname:h,lastname:E,isLogging:!1});case"ERROR_LOG_USER":return a.__assign(a.__assign({},e),{isAuthenticated:!1,isLogging:!1});case"REQUEST_USER_INFOS_DATA":return a.__assign(a.__assign({},e),{isFetching:!0});case"RECEIVED_USER_INFOS_DATA":var y=t.payload.data.userInfos,b=void 0===y?{id:"",login:"",firstname:"",lastname:""}:y;return a.__assign(a.__assign({},e),{isFetching:!1,id:b.id,login:b.login,firstname:b.firstname,lastname:b.lastname});case"ERROR_USER_INFOS_DATA":return a.__assign(a.__assign({},e),{isFetching:!1});default:return e}},t.disconnectUser=function(){return l.default.clearAllAppStorage(),{type:"DISCONNECT_USER"}},t.checkUserIsConnected=function(){return function(e){var t,n=l.default.getToken(),r=l.default.getUserInfo(),o=l.default.isExpiredToken(n),i=!!(n&&(t=r,t&&t.id));return e(a.__assign(a.__assign({type:"CHECK_IF_USER_IS_AUTHENTICATED",token:n},r),{isAuthenticated:i&&!o})),a.__assign(a.__assign({token:n},r),{isAuthenticated:i&&!o})}},t.logUserIfNeeded=function(e,t){return function(n,r){return r().userAuth.isLogging?Promise.resolve():n(function(e,t){var n=this;return function(r){return a.__awaiter(n,void 0,void 0,(function(){var n,l,c;return a.__generator(this,(function(a){return n=o.default.DEV_MODE?s.FETCH_TYPE_ENUM.FETCH_MOCK:s.FETCH_TYPE_ENUM.FETCH,"login",l=i.default,c=u.getLocationOrigin()+"/login","post","FETCH",[2,r({type:"FETCH",fetch:{type:n,actionTypes:{request:"REQUEST_LOG_USER",success:"RECEIVED_LOG_USER",fail:"ERROR_LOG_USER"},mockResult:l,url:c,method:"post",headers:{},options:{credentials:"same-origin",data:{login:e,password:t}}}})]}))}))}}(e,t))}},t.fetchUserInfoDataIfNeeded=function(e){return void 0===e&&(e=""),function(t,n){return n().userAuth.isFetching?Promise.resolve():t(function(e){var t=this;return void 0===e&&(e=""),function(n){return a.__awaiter(t,void 0,void 0,(function(){var t,c,f,d,_,m,p,g,h;return a.__generator(this,(function(v){switch(v.label){case 0:if(t=l.default.getToken(),c=o.default.DEV_MODE,f=o.default.api.users,c?s.FETCH_TYPE_ENUM.FETCH_MOCK:s.FETCH_TYPE_ENUM.FETCH,d=i.default,_=u.getLocationOrigin()+"/"+f+"/"+e,m="get",p={authorization:"Bearer "+(t||"")},g={credentials:"same-origin"},c)return[2,Promise.resolve({data:d})];v.label=1;case 1:return v.trys.push([1,3,,4]),n({type:"REQUEST_USER_INFOS_DATA"}),[4,r.default.request(a.__assign({url:_,method:m,withCredentials:!0,headers:a.__assign({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},p)},g))];case 2:return[2,v.sent()];case 3:return h=v.sent(),n({type:"ERROR_USER_INFOS_DATA",error:h}),[3,4];case 4:return[2]}}))}))}}(e))}}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appConfig=Object.freeze({DEV_MODE:!0,api:{fakeEndPoint:"api/somewhere",users:"api/someusersapi"},sw:{path:"public/assets/sw.js"}}),t.default=t.appConfig},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(21),o=n(205),i=n(512),u=n(34),l=n(674),s=a.__importDefault(n(513)),c=a.__importDefault(n(516)),f=n(517),d=a.__importDefault(n(518)),_=a.__importDefault(n(252));t.history=u.createBrowserHistory();f.createLogger({level:"info",collapsed:!0});var m=i.composeWithDevTools(r.applyMiddleware(c.default,_.default,o.routerMiddleware(t.history))),p={key:"root",storage:s.default,blacklist:["router"]},g=l.persistReducer(p,o.connectRouter(t.history)(d.default));t.default=function(e){void 0===e&&(e={});var t=r.createStore(g,e,m);return{store:t,persistor:l.persistStore(t)}}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(623);t.getLocationOrigin=function(){return window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),window.location.origin},t.getMethod={method:"get"},t.postMethod={method:"post"},t.defaultOptions={credentials:"same-origin"},t.jsonHeader={headers:{Accept:"application/json","Content-Type":"application/json"}},t.encodeBase64=function(e){return void 0===e&&(e=""),a.Base64.encode(e)}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(642)),o=a.__importDefault(n(229)),i=["localStorage","sessionStorage"],u=JSON.parse,l=JSON.stringify;t.auth={getToken:function(e,t){return void 0===e&&(e=i[0]),void 0===t&&(t="token"),e===i[0]?localStorage&&localStorage.getItem(t)||null:e===i[1]&&sessionStorage&&sessionStorage.getItem(t)||null},setToken:function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=i[0]),void 0===n&&(n="token"),!e||e.length<=0||(t===i[0]&&localStorage?localStorage.setItem(n,e):t===i[1]&&sessionStorage&&sessionStorage.setItem(n,e))},isAuthenticated:function(e,t){return void 0===e&&(e=i[0]),void 0===t&&(t="token"),e===i[0]?!(!localStorage||!localStorage.getItem(t)):e===i[1]&&!(!sessionStorage||!sessionStorage.getItem(t))},clearToken:function(e,t){return void 0===e&&(e=i[0]),void 0===t&&(t="token"),localStorage&&localStorage[t]?(localStorage.removeItem(t),!0):!(!sessionStorage||!sessionStorage[t])&&(sessionStorage.removeItem(t),!0)},getTokenExpirationDate:function(e){if(!e)return new Date(0);var t=r.default(e);return t.exp?new Date(1e3*t.exp):new Date(0)},isExpiredToken:function(e){var t=this.getTokenExpirationDate(e),n=new Date;return o.default(n,t)},getUserInfo:function(e,t){if(void 0===e&&(e=i[0]),void 0===t&&(t="userInfo"),e===i[0])try{return window&&localStorage&&u(localStorage.getItem(t)||"")||null}catch(e){return null}if(e===i[1])try{return window&&sessionStorage&&u(sessionStorage.getItem(t)||"")||null}catch(e){return null}return null},setUserInfo:function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=i[0]),void 0===n&&(n="userInfo"),!e||e.length<=0||(t===i[0]&&localStorage?localStorage.setItem(n,l(e)):t===i[1]&&sessionStorage&&sessionStorage.setItem(n,l(e)))},clearUserInfo:function(e){void 0===e&&(e="userInfo"),localStorage&&localStorage[e]?localStorage.removeItem(e):sessionStorage&&sessionStorage[e]&&sessionStorage.removeItem(e)},clearAllAppStorage:function(){localStorage?localStorage.clear():sessionStorage&&sessionStorage.clear()}},t.default=t.auth},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(6),o=r.__importDefault(n(245));t.FETCH_MOCK="FETCH_MOCK",t.FETCH="FETCH",function(e){e.FETCH="FETCH",e.FETCH_MOCK="FETCH_MOCK"}(a=t.FETCH_TYPE_ENUM||(t.FETCH_TYPE_ENUM={}));t.default=function(e){return function(t){return function(n){return r.__awaiter(void 0,void 0,void 0,(function(){var i,u,l,s,c,f,d,_,m,p,g,h,v,E;return r.__generator(this,(function(y){switch(y.label){case 0:if(!n.fetch)return[2,t(n)];if(!n.fetch.type)return[2,t(n)];if(!n.fetch.actionTypes)return[2,t(n)];if(n.fetch.type===a.FETCH_MOCK){if(!n.fetch.mockResult)throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');return i=n.fetch,u=i.actionTypes,f=u.request,d=u.success,l=i.mockResult,e.dispatch({type:f}),[2,Promise.resolve(e.dispatch({type:d,payload:{status:200,data:l}}))]}if(n.fetch.type!==a.FETCH)return[3,4];s=n.fetch,c=s.actionTypes,f=c.request,d=c.success,_=c.fail,m=s.url,p=s.method,g=s.headers,h=s.options,e.dispatch({type:f}),y.label=1;case 1:return y.trys.push([1,3,,4]),[4,o.default.request(r.__assign({method:p,url:m,withCredentials:!0,headers:r.__assign({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},g)},h))];case 2:return v=y.sent(),e.dispatch({type:d,payload:v}),[2,v];case 3:throw E=y.sent(),e.dispatch({type:_,error:E.response}),E;case 4:return[2,t(n)]}}))}))}}}},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(21),o=n(48),i=a.__importStar(n(113)),u=a.__importDefault(n(659)),l=o.connect((function(e,t){return{isAuthenticated:e.userAuth.isAuthenticated,isFetching:e.userAuth.isFetching,isLogging:e.userAuth.isLogging}}),(function(e){return r.bindActionCreators(a.__assign({},i),e)}));t.default=r.compose(l)(u.default)},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6);n(262),n(486),n(487);var r,o,i=a.__importDefault(n(1)),u=n(492),l=a.__importDefault(n(496)),s=n(204),c=a.__importDefault(n(498)),f=document.getElementById("root");l.default.polyfill(),window.__forceSmoothScrollPolyfill__=!0,window.snapSaveState=function(){return s.getState()},a.__awaiter(void 0,void 0,void 0,(function(){return a.__generator(this,(function(e){return console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.'),[2]}))})),r=c.default,o=r,f&&f.hasChildNodes()?s.loadComponents().then((function(){return u.hydrate(i.default.createElement(o,null),f)})):u.render(i.default.createElement(o,null),f)},498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=n(1),i=n(205),u=n(59),l=n(48),s=n(83),c=n(511),f=a.__importDefault(n(207)),d=n(207),_=a.__importDefault(n(645)),m=a.__importDefault(n(648)),p=a.__importDefault(n(670)),g=a.__importDefault(n(254)),h=a.__importDefault(n(671)),v=a.__importDefault(n(672)),E=f.default({}).store,y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.componentDidMount=function(){h.default()},t.prototype.componentDidCatch=function(e,t){console.log("App error: ",e),console.log("App error info: ",t)},t.prototype.render=function(){return r.default.createElement(l.Provider,{store:E},r.default.createElement(s.ThemeProvider,{theme:{}},r.default.createElement(r.default.Fragment,null,r.default.createElement(i.ConnectedRouter,{history:d.history},r.default.createElement(_.default,null,r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{exact:!0,path:"/login"},r.default.createElement(g.default,null)),r.default.createElement(m.default,null),r.default.createElement(v.default,{path:"/logout"})))),r.default.createElement(p.default,null))))},t}(o.Component);t.default=c.hot(y)},518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(21),o=a.__importDefault(n(519)),i=a.__importDefault(n(113));t.reducers={fakeModuleWithFetch:o.default,userAuth:i.default},t.default=r.combineReducers(a.__assign({},t.reducers))},519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(520),o=a.__importDefault(n(622)),i=a.__importDefault(n(155)),u=n(244),l={isFetching:!1,actionTime:"",data:[],error:{}};t.default=function(e,t){void 0===e&&(e=l);var n=r.format(new Date);switch(t.type){case"REQUEST_FAKE_FETCH":return a.__assign(a.__assign({},e),{actionTime:n,isFetching:!0});case"RECEIVED_FAKE_FETCH":var o=t.payload,i=void 0===o?[]:o;return a.__assign(a.__assign({},e),{actionTime:n,isFetching:!1,data:a.__spreadArrays(i)});case"ERROR_FAKE_FETCH":var u=t.error,s=void 0===u?{}:u;return a.__assign(a.__assign({},e),{actionTime:n,isFetching:!1,error:a.__assign({},s)});default:return e}},t.fakeFetchIfNeeded=function(){return function(e,t){return t().fakeModuleWithFetch.isFetching?Promise.resolve():e((function(e){var t=i.default.DEV_MODE?"FETCH_MOCK":"FETCH",n=o.default,a=u.getLocationOrigin()+"/"+i.default.api.fakeEndPoint;return Promise.resolve(e({type:"FETCH",fetch:{type:t,actionTypes:{request:"REQUEST_FAKE_FETCH",success:"RECEIVED_FAKE_FETCH",fail:"ERROR_FAKE_FETCH"},mockResult:n,url:a,method:"get",options:{}}}))}))}}},622:function(e){e.exports=JSON.parse('[{"id":1,"label":"item 1"},{"id":2,"label":"item 2"}]')},641:function(e){e.exports=JSON.parse('{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}}')},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6).__importDefault(n(646));t.default=a.default},646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6).__importStar(n(1)),r=n(59),o=n(647);function i(e){var t=e.children,n=r.useLocation();return o.useScrollToTopOnLocationChange(n),a.default.createElement(a.Fragment,null,t)}i.displayName="ScrollToTop",t.default=i},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);t.useScrollToTopOnLocationChange=function(e){var t=a.useRef(null);a.useEffect((function(){t.current=e}),[]),a.useEffect((function(){t.current!==e&&(window&&window.scrollTo(0,0),t.current=e)}),[e])}},648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=n(42),i=n(649),u=a.__importDefault(n(668));t.default=function(){return r.default.createElement(o.Switch,null,r.default.createElement(o.Route,{exact:!0,path:"/"},r.default.createElement(i.Home,null)),r.default.createElement(o.Route,{path:"/about"},r.default.createElement(i.About,null)),r.default.createElement(u.default,{path:"/protected"},r.default.createElement(i.Protected,null)),r.default.createElement(o.Route,{path:"*"},r.default.createElement(i.PageNotFound,null)))}},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(204));t.Home=r.default((function(){return Promise.resolve().then((function(){return a.__importStar(n(650))}))}),{modules:["home"]}),t.About=r.default((function(){return Promise.resolve().then((function(){return a.__importStar(n(657))}))}),{modules:["about"]}),t.Login=r.default((function(){return Promise.resolve().then((function(){return a.__importStar(n(254))}))}),{modules:["login"]}),t.Protected=r.default((function(){return Promise.resolve().then((function(){return a.__importStar(n(664))}))}),{modules:["protected"]}),t.PageNotFound=r.default((function(){return Promise.resolve().then((function(){return a.__importStar(n(666))}))}),{modules:["pageNotFound"]})},650:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(48),o=n(21),i=a.__importDefault(n(651)),u=r.connect((function(e){return{}}),(function(e){return o.bindActionCreators({},e)}));t.default=o.compose(u)(i.default)},651:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=n(59),i=a.__importDefault(n(253)),u=a.__importDefault(n(88)),l=a.__importDefault(n(655)),s=a.__importDefault(n(656));function c(e){return r.default.createElement(u.default,null,r.default.createElement(i.default,null,r.default.createElement(l.default,null,r.default.createElement(s.default,null,"ReactJS 16.13+ Bootstrap 4"),r.default.createElement("h2",null,"with Hot Reload (",r.default.createElement("i",null,"react-hot-loader 4+"),")!!!"),r.default.createElement("h2",null,"and React Router v5"),r.default.createElement("h2",null,"and webpack 4.x"),r.default.createElement("h1",null,"Starter"),r.default.createElement("p",null,r.default.createElement(o.Link,{className:"btn btn-success btn-lg",to:"/about"},r.default.createElement("i",{className:"fa fa-info"}),"  go to about")))))}c.displayName="Home",t.default=c},653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=a.__importDefault(n(654));function i(e){var t=e.children;return r.default.createElement(o.default,{startAnimation:!0},t)}i.displayName="FadeInEntrance",t.default=i},654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,o,i=n(6),u=i.__importStar(n(83)),l=u.keyframes(a||(a=i.__makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"],["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]))),s=u.css(r||(r=i.__makeTemplateObject(["\n  opacity: 0;\n  animation-name: ",";\n  animation-timing-function: ease-in;\n  animation-duration: 0.7s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n"],["\n  opacity: 0;\n  animation-name: ",";\n  animation-timing-function: ease-in;\n  animation-duration: 0.7s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n"])),l),c=u.default.div(o||(o=i.__makeTemplateObject(["\n  ",";\n"],["\n  ",";\n"])),(function(e){return e.startAnimation&&s}));t.default=c},655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(6),o=r.__importDefault(n(83)).default.div(a||(a=r.__makeTemplateObject([""],[""])));t.default=o},656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(6),o=r.__importDefault(n(83)).default.h1(a||(a=r.__makeTemplateObject(["\n  color: #222 !important;\n  font-weight: 800;\n"],["\n  color: #222 !important;\n  font-weight: 800;\n"])));t.default=o},657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(21),o=n(48),i=a.__importDefault(n(658)),u=o.connect((function(e){return{}}),(function(e){return r.bindActionCreators({},e)}));t.default=r.compose(u)(i.default)},658:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=a.__importDefault(n(88));function i(e){return r.default.createElement(o.default,null,r.default.createElement("h1",null,"About"))}i.displayName="About",t.default=i},659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importStar(n(1)),o=a.__importDefault(n(660)),i=a.__importDefault(n(661)),u=a.__importDefault(n(662)),l=a.__importDefault(n(251)),s=a.__importDefault(n(88));function c(e){var t=this,n=e.location,c=e.isLogging,f=(e.isFetching,e.disconnectUser),d=e.logUserIfNeeded,_=e.history,m=r.useState(""),p=m[0],g=m[1],h=r.useState(""),v=h[0],E=h[1];r.useEffect((function(){f()}),[]);var y=r.useCallback((function(e){e&&(e.preventDefault(),g(e.target.value.trim()))}),[]),b=r.useCallback((function(e){e&&(e.preventDefault(),E(e.target.value.trim()))}),[]),S=r.useCallback((function(e){return a.__awaiter(t,void 0,void 0,(function(){var t,r,o,i,u,s;return a.__generator(this,(function(a){switch(a.label){case 0:e&&e.preventDefault(),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,d(p,v)];case 2:return t=a.sent(),r=t.payload.data,o=r.token,i=r.user,l.default.setToken(o),l.default.setUserInfo(i),u=(n.state||{from:{pathname:"/"}}).from,_.replace(u),[3,4];case 3:return s=a.sent(),console.log("login went wrong..., error: ",s),[3,4];case 4:return[2]}}))}))}),[_,n,p,v]),O=r.useCallback((function(e){e&&e.preventDefault(),_.push({pathname:"/"})}),[_]);return r.default.createElement(s.default,null,r.default.createElement("div",{className:"content"},r.default.createElement(i.default,null,r.default.createElement(u.default,{md:{size:4,offset:4},xs:{size:10,offset:1}},r.default.createElement("form",{className:"form-horizontal",noValidate:!0},r.default.createElement("fieldset",null,r.default.createElement("legend",null,"Login"),r.default.createElement("div",{className:"form-group"},r.default.createElement("label",{htmlFor:"inputEmail",className:"col-lg-2 control-label"},"Email"),r.default.createElement(u.default,{lg:12},r.default.createElement("input",{type:"text",className:"form-control",id:"inputEmail",placeholder:"Email",autoComplete:"username email",value:p,onChange:y}))),r.default.createElement("div",{className:"form-group"},r.default.createElement("label",{htmlFor:"inputPassword",className:"col-lg-2 control-label"},"Password"),r.default.createElement(u.default,{lg:12},r.default.createElement("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",autoComplete:"current-password",value:v,onChange:b}))),r.default.createElement("div",{className:"form-group"},r.default.createElement(u.default,{lg:{size:12}},r.default.createElement(o.default,{className:"login-button btn-block",color:"primary",disabled:c,onClick:S},c?r.default.createElement("span",null,"login in...  ",r.default.createElement("i",{className:"fa fa-spinner fa-pulse fa-fw"})):r.default.createElement("span",null,"Login")))))))),r.default.createElement(i.default,null,r.default.createElement(u.default,{md:{size:4,offset:4},xs:{size:10,offset:1}},r.default.createElement("div",{className:"pull-right"},r.default.createElement(o.default,{className:"btn-block",onClick:O},"back to home"))))))}c.defaultProps={isFetching:!1,isLogging:!1},c.displayName="Login",t.default=c},664:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(21),o=n(48),i=a.__importDefault(n(665)),u=o.connect((function(e){return{}}),(function(e){return r.bindActionCreators({},e)}));t.default=r.compose(u)(i.default)},665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=a.__importDefault(n(88));function i(e){return r.default.createElement(o.default,null,r.default.createElement("h1",null,"Protected view"),r.default.createElement("h3",null,"If you can read, it means you are authenticated"))}i.displayName="Protected",t.default=i},666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(21),o=n(48),i=a.__importDefault(n(667)),u=o.connect((function(e){return{}}),(function(e){return r.bindActionCreators({},e)}));t.default=r.compose(u)(i.default)},667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=a.__importDefault(n(253)),i=a.__importDefault(n(88));function u(e){return r.default.createElement(i.default,null,r.default.createElement(o.default,null,r.default.createElement("h1",null,"Sorry this page does not exists...")))}u.displayName="PageNotFound",t.default=u},668:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(48),o=n(21),i=n(59),u=a.__importStar(n(113)),l=a.__importDefault(n(669));t.default=o.compose(r.connect((function(e){return{isAuthenticated:e.userAuth.isAuthenticated}}),(function(e){return o.bindActionCreators(a.__assign({},u),e)})),i.withRouter)(l.default)},669:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=n(59);function i(e){var t=e.component,n=a.__rest(e,["component"]),i=e.location,u=e.isAuthenticated;return r.default.createElement(o.Route,a.__assign({},n,{render:function(e){return u?r.default.createElement(t,a.__assign({},e)):r.default.createElement(o.Redirect,{to:{pathname:"/login",state:{from:i}}})}}))}i.displayName="PrivateRoute",t.default=i},670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(6),o=n(83).createGlobalStyle(a||(a=r.__makeTemplateObject(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"])));t.default=o},671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(155)).default.sw.path;t.default=function(){var e=this;void 0!==typeof window&&"serviceWorker"in navigator&&window.addEventListener("load",(function(){return a.__awaiter(e,void 0,void 0,(function(){var e,t;return a.__generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,navigator.serviceWorker.register(r)];case 1:return e=n.sent(),console.log("SW registered: ",e),[3,3];case 2:return t=n.sent(),console.log("SW registration failed: ",t),[3,3];case 3:return[2]}}))}))}))}},672:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(48),o=n(21),i=n(59),u=a.__importStar(n(113)),l=a.__importDefault(n(673));t.default=o.compose(r.connect((function(e){return{}}),(function(e){return o.bindActionCreators(a.__assign({},u),e)})),i.withRouter)(l.default)},673:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=a.__importDefault(n(1)),o=n(1),i=n(59);function u(e){var t=e.disconnectUser;return o.useEffect((function(){return t()})),r.default.createElement(i.Route,a.__assign({},e),r.default.createElement(i.Redirect,{to:{pathname:"/login"}}))}u.displayName="LogoutRoute",t.default=u},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6).__importDefault(n(653));t.default=a.default}});