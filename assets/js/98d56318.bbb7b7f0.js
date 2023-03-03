"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8173],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},m="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(g,i(i({ref:e},p),{},{components:t})):r.createElement(g,i({ref:e},p))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[m]="string"==typeof n?n:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6271:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2,id:"Electron\uff1a\u7a97\u53e3\u3001\u7a97\u53e3\u6807\u9898\u548c\u8fb9\u6846",title:"Electron\uff1a\u7a97\u53e3\u3001\u7a97\u53e3\u6807\u9898\u548c\u8fb9\u6846",authors:"duxinyues",tags:["Electron"]},i=void 0,l={permalink:"/electron/Electron202202",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/electron/Electron202202.md",source:"@site/blog/electron/Electron202202.md",title:"Electron\uff1a\u7a97\u53e3\u3001\u7a97\u53e3\u6807\u9898\u548c\u8fb9\u6846",description:"\u684c\u9762\u5e94\u7528\u662f\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7a97\u53e3\u7ec4\u6210\u7684\uff0cElectron\u4e5f\u662f\u4e00\u6837\u7684\uff0c\u5728\u4e0a\u4e00\u7ae0\u6211\u4eec\u5c31\u901a\u8fc7Electron\u7684BrowserWindow\u6a21\u5757\u6765\u521b\u5efa\u4e00\u4e2a\u4e3b\u8fdb\u7a0b\u7684\u7a97\u53e3\uff0c\u5982\uff1a",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"Electron",permalink:"/tags/electron"}],readingTime:14.91,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:2,id:"Electron\uff1a\u7a97\u53e3\u3001\u7a97\u53e3\u6807\u9898\u548c\u8fb9\u6846",title:"Electron\uff1a\u7a97\u53e3\u3001\u7a97\u53e3\u6807\u9898\u548c\u8fb9\u6846",authors:"duxinyues",tags:["Electron"]},prevItem:{title:"Electron\uff1a\u642d\u5efa\u4e00\u4e2a\u684c\u9762\u5e94\u7528",permalink:"/electron/electron"},nextItem:{title:"Electron\uff1aBrowserView\u4f7f\u7528\u65b9\u6cd5",permalink:"/electron/Electron202203"}},s={authorsImageUrls:[void 0]},c=[{value:"\u81ea\u5b9a\u4e49\u6807\u9898\u680f",id:"\u81ea\u5b9a\u4e49\u6807\u9898\u680f",level:4},{value:"\u7a97\u53e3\u5de5\u5177\u56fe\u6807\u7684\u4e8b\u4ef6",id:"\u7a97\u53e3\u5de5\u5177\u56fe\u6807\u7684\u4e8b\u4ef6",level:4}],p={toc:c};function m(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u684c\u9762\u5e94\u7528\u662f\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7a97\u53e3\u7ec4\u6210\u7684\uff0cElectron\u4e5f\u662f\u4e00\u6837\u7684\uff0c\u5728\u4e0a\u4e00\u7ae0\u6211\u4eec\u5c31\u901a\u8fc7Electron\u7684BrowserWindow\u6a21\u5757\u6765\u521b\u5efa\u4e00\u4e2a\u4e3b\u8fdb\u7a0b\u7684\u7a97\u53e3\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"new BrowserWindow({\n        width: 1000,\n        height: 500,\n        webPreferences: {\n            // nodeIntegration: true,\n            // contextIsolation: false,\n            preload: getAssetPath('preload.js'),\n        },\n        icon: getAssetPath('logo.png')\n    });\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e86\u7a97\u53e3\u7684\u9ed8\u8ba4\u5bbd\u9ad8\u4ee5\u53calogo\u8fd9\u4e9b\u4fe1\u606f\u3002BrowserWindow\u7684\u5e38\u7528\u7684\u5c5e\u6027\uff0c\u6bd4\u5982width\u3001height\u3001x\u3001y\u7b49\u7b49\uff0c\u60f3\u4e86\u89e3\u5177\u4f53\u7684\u5c5e\u6027\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9API\uff0c\u8fd9\u91cc\u5c31\u4e0d\u4e00\u4e00\u5217\u4e3e\u4e86\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u60f3\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u7a97\u53e3\u5bfc\u822a\uff0c\u56e0\u4e3aelectron\u9ed8\u8ba4\u7684\u7a97\u53e3\u5bfc\u822a\uff0c\u592a\u751f\u786c\uff0c\u5408\u9002\u5177\u4f53\u7684\u5e94\u7528\u573a\u666f\uff0c\u8fd9\u662f\u9ed8\u8ba4\u7684\u7a97\u53e3\u5bfc\u822a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4bb8c2a8f3cd47d4ad68c21e66a725a9.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u6ce8\u610f\u4e00\u4e0b\uff1aBrowserWindow\u6709\u4e00\u4e2atitle\u5c5e\u6027\uff0c\u662f\u8bbe\u7f6e\u7a97\u53e3\u6807\u9898\u7684\uff0c\u4f46\u662f\u5982\u679c\u52a0\u8f7d\u7684\u9875\u9762\u4e2d\u9047\u5230title\u6807\u7b7e\u7684\u8bdd\uff0c\u4e4b\u524d\u8bbe\u7f6e\u7684title\u4f1a\u88ab\u8986\u76d6\u6389\u3002"),(0,a.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u6807\u9898\u680f"},"\u81ea\u5b9a\u4e49\u6807\u9898\u680f"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u8bbe\u7f6eframe\u4e3afalse\u7684\u65f6\u5019\uff0c\u7a97\u53e3\u7684\u8fb9\u6846\u548c\u6807\u9898\u680f\u6d88\u5931\u4e86\uff0c\u53ea\u5c55\u793a\u5185\u5bb9\u533a\u57df\uff0c\u6211\u4eec\u4e0d\u80fd\u79fb\u52a8\u7a97\u53e3\u3001\u6700\u5927\u5316\u3001\u6700\u5c0f\u5316\u548c\u5173\u95ed\u7a97\u53e3\u3002\u73b0\u5728\u9700\u8981\u505a\u7684\u662f\u5c01\u88c5\u81ea\u5df1\u7684\u6807\u9898\u680f\uff0c\u8fd9\u91cc\u6211\u628a\u5b83\u5c01\u88c5\u4e3a\u4e00\u4e2aReact\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u5c01\u88c5\u4e4b\u524d\uff0c\u5148\u914d\u7f6e\u4e00\u4e0b\u8def\u7531\uff0c\u5b89\u88c5\u8def\u7531\u4f9d\u8d56\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add react-router-dom"),"\u3002\n\u4fee\u6539\u4e00\u4e0bApp\uff0c\u4e3b\u8981\u5728App\u6587\u4ef6\u91cc\u9762\u8bbe\u7f6e\u8def\u7531\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Suspense, lazy } from "react";\nimport { useRoutes } from "react-router-dom";\nimport \'./App.css\';\nconst Container = lazy(() => import("./pages/Container"))\nconst Home = lazy(() => import("./pages/Home"))\nfunction App() {\n  const element = useRoutes([\n    {\n      path: "/",\n      element: <Container />,\n      children: [\n        {\n          index: true,\n          path: "/",\n          element: <Home />,\n        },\n      ]\n    },\n  ])\n  return <Suspense fallback={<div className="react-container"><div className="progress-9"></div></div>}>\n    {element}\n  </Suspense>\n}\nexport default App;\n\n')),(0,a.kt)("p",null," \u5728\u6e32\u67d3\u8fdb\u7a0b\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u4e5f\u5c31\u662freact\u5e94\u7528\u7684\u5165\u53e3\u6587\u4ef6index.tsx\uff0c\u4e5f\u8bbe\u7f6e\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import ReactDOM from 'react-dom/client';\nimport {BrowserRouter}  from \"react-router-dom\";\nimport './index.css';\nimport App from \"./App\"\nimport reportWebVitals from './reportWebVitals';\n\nconst root = ReactDOM.createRoot(\n  document.getElementById('root') as HTMLElement\n);\nroot.render(<BrowserRouter>\n  <App />\n</BrowserRouter>);\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n")),(0,a.kt)("p",null,"\u4e3b\u8981\u662f\u8bbe\u7f6e\u8def\u7531\u7c7b\u578b\uff0c\u9009\u62e9\u7684\u662f\u6d4f\u89c8\u5668\u8def\u7531\u3002"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u6807\u9898\u680f\uff0cHeadBar\u7ec4\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import close from "../../assets/close.png";\nimport min from "../../assets/icon_min.png";\nimport max from "../../assets/icon-max.png"\nimport logo from "../../assets/logo.png";\nimport "./index.scss";\nfunction HeadBar() {\n    return <div className="head-bar">\n        <div className="title">\n            <img src={logo} alt="logo" />\n            <span>\u6807\u9898</span>\n        </div>\n        <div className="window-tool">\n            <div className="icon-min"><img src={min} alt="" /></div>\n            <div className="icon-max"><img src={max} alt="" /></div>\n            <div className="close"><img src={close} alt="" /></div>\n        </div>\n    </div>\n}\n\n\nexport default HeadBar\n\n')),(0,a.kt)("p",null,"\u6837\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".head-bar {\n    padding: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgb(184, 180, 180);\n    .title {\n        display: flex;\n        align-items: center;\n        img {\n            width: 30px;\n            height: 30px;\n            margin-right: 10px;\n            border-radius: 50%;\n        }\n    }\n    .window-tool {\n        display: flex;\n        img {\n            width: 30px;\n            height: 30px;\n        }\n        div {\n            cursor: pointer;\n        }\n        div:nth-child(1) {\n            margin-right: 5px;\n        }\n        div:nth-child(2) {\n            margin-right: 5px;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6Container\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Layout } from "antd";\nimport { Outlet } from "react-router-dom"\nimport HeadBar from \'../../components/Header\';\nimport "./index.scss"\nconst { Content } = Layout;\n\nfunction Container() {\n\n    return <Layout className="layout">\n        <HeadBar />\n        <Content className="content">\n            <Outlet />\n        </Content>\n    </Layout>\n}\n\nexport default Container;\n')),(0,a.kt)("p",null,"index.scss:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},".layout {\n    width: 100vw;\n    height: 100vh;\n}\n")),(0,a.kt)("p",null,"\u867d\u7136\u662f\u5728\u501f\u52a9ant designUI\uff0c\u4f46\u662f\u6709\u4e9b\u6837\u5f0f\u8fd8\u662f\u7684\u81ea\u5df1\u6765\u5b8c\u6210\u7684\u3002\n\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/27598b57860a48bb8deca6aa017e1a86.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u5173\u4e8e\u7a97\u53e3\u62d6\u52a8\u7684\u95ee\u9898\uff0c\u81ea\u4ece\u8bbe\u7f6eframe\u4e3afalse\u540e\uff0c\u7a97\u53e3\u5c31\u4e0d\u80fd\u62d6\u52a8\u4e86\u3002\u5176\u5b9e\u5e76\u4e0d\u662f\u7a97\u53e3\u4e0d\u80fd\u62d6\u52a8\uff0c\u800c\u662f\u53ef\u62d6\u62fd\u533a\u57df\u6d88\u5931\u4e86\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u67d0\u4e2a\u5143\u7d20\u4e3a\u53ef\u62d6\u62fd\u533a\u57df\u3002\u73b0\u5728\u662f\u8bbe\u7f6e\u6807\u9898\u680f\u4e3a\u53ef\u62d6\u62fd\u533a\u57df\uff0c\u53ea\u9700\u8981\u5728\u6837\u5f0f\u4e2d\u8bbe\u7f6e\uff1a-webkit-app-region: drag;\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u53c8\u4e0d\u5e0c\u671b\u6807\u9898\u680f\u4e2d\u7684\u67d0\u4e2a\u56fe\u6807\u62e5\u6709\u62d6\u62fd\u7684\u529f\u80fd\uff0c\u6bd4\u5982\u5173\u95ed\u56fe\u6807\u3002\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u7ed9\u5bf9\u5e94\u7684\u56fe\u6807\u533a\u57df\u8bbe\u7f6e-webkit-app-region: no-drag;\u6837\u5f0f\u3002\u6837\u5f0f\u5c31\u53ef\u4ee5\u5c4f\u853d\u5b50\u5143\u7d20\u4ece\u7236\u5143\u7d20\u7ee7\u627f\u6765\u7684\u529f\u80fd\u3002\u6807\u9898\u680f\u6837\u5f0f\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".head-bar {\n    -webkit-app-region: drag;\n    padding: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgb(184, 180, 180);\n    .title {\n        display: flex;\n        align-items: center;\n        img {\n            width: 30px;\n            height: 30px;\n            margin-right: 10px;\n            border-radius: 50%;\n        }\n    }\n    .window-tool {\n        -webkit-app-region: no-drag;\n        display: flex;\n        img {\n            width: 30px;\n            height: 30px;\n        }\n        div {\n            cursor: pointer;\n        }\n        div:nth-child(1) {\n            margin-right: 5px;\n        }\n        div:nth-child(2) {\n            margin-right: 5px;\n        }\n    }\n}\n")),(0,a.kt)("h4",{id:"\u7a97\u53e3\u5de5\u5177\u56fe\u6807\u7684\u4e8b\u4ef6"},"\u7a97\u53e3\u5de5\u5177\u56fe\u6807\u7684\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u73b0\u5728\u7ed9\u5de5\u5177\u56fe\u6807\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u5728\u6807\u9898\u680f\u4e5f\u5c31\u4e09\u4e2a\u56fe\u6807\uff0c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a1a90ba0692248cb843af4e44cadda86.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u56e0\u4e3a\u5de5\u5177\u56fe\u6807\u662f\u5728\u6e32\u67d3\u8fdb\u7a0b\u4e2d\uff0c\u6240\u4ee5\u5b8c\u6210\u4e8b\u4ef6\u64cd\u4f5c\uff0c\u9700\u8981\u548c\u4e3b\u8fdb\u7a0b\u8fdb\u884c\u901a\u4fe1\uff0c\u5728\u6e32\u67d3\u8fdb\u7a0b\u901a\u8fc7ipcRenderer\uff0c\u901a\u77e5\u4e3b\u8fdb\u7a0b\u6765\u5b8c\u6210\u5bf9\u5e94\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5148\u5728window\u4e0a\u6302\u8f7d\u4e09\u4e2a\u5c5e\u6027\uff0c\u5982\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/90e946405ca8428fb4fd553024f390f3.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"setWindowClose\u65b9\u6cd5\u5728\u70b9\u51fb\u5173\u95ed\u56fe\u6807\u65f6\u8c03\u7528\uff1b\nsetWindowMax\u65b9\u6cd5\u5728\u70b9\u51fb\u6700\u5927\u5316\u7684\u65f6\u5019\u8c03\u7528\uff1b\nsetWindowMin\u65b9\u6cd5\u5728\u70b9\u51fb\u6700\u5c0f\u5316\u7684\u65f6\u5019\u8c03\u7528\uff1b"),(0,a.kt)("p",null,"\u9884\u52a0\u8f7d\u6587\u4ef6preload.js\u6dfb\u52a0\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { contextBridge, ipcRenderer } = require('electron')\n\ncontextBridge.exposeInMainWorld('electronAPI', {\n    setTitle: (title) => ipcRenderer.send('msg12', title),\n    getMainMsg: (callback) => ipcRenderer.on('resMsg', (event, param) => {\n        callback(param);\n        console.log(\"event\", event)\n    }),\n    setWindowClose: () => ipcRenderer.send('window-close'),\n    setWindowMax: () => ipcRenderer.send('window-max'),\n    setWindowMin: () => ipcRenderer.send('window-min'),\n})\n")),(0,a.kt)("p",null,"electron\u7684\u5165\u53e3\u6587\u4ef6\u4e2d\uff0c\u5728\u76d1\u542c\u751f\u547d\u5468\u671f\u7684\u65b9\u6cd5\u4e2d\u76d1\u542c\u6e32\u67d3\u8fdb\u7a0b\u53d1\u9001\u7684\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u76d1\u542c\u5e94\u7528\u7a0b\u5e8f\napp.whenReady().then(() => {\n    createWindow();\n    // \u63a5\u6536\u6700\u5c0f\u5316\u6307\u4ee4\n    ipcMain.on("window-min", () => {\n        mainWindow.minimize();\n    })\n    // \u63a5\u6536\u6700\u5927\u5316\u6307\u4ee4\n    ipcMain.on("window-max", () => {\n        if (mainWindow.isMaximized()) {\n            mainWindow.restore();\n        } else {\n            mainWindow.maximize();\n        }\n    })\n    // \u63a5\u6536\u5173\u95ed\u6307\u4ee4\n    ipcMain.on("window-close", () => {\n        console.log("\u5173\u95ed")\n        mainWindow.close();\n    })\n});\n')),(0,a.kt)("p",null,"\u5728HeadBar\u7ec4\u4ef6\u6dfb\u52a0\u5bf9\u5e94\u7684\u4e8b\u4ef6\uff0c\u5e76\u4e14\u4ecewindow\u5bf9\u8c61\u4e0a\u83b7\u53d6\u5bf9\u5e94\u7684\u5c5e\u6027\u4e8b\u4ef6\uff0c\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useState } from "react";\nimport close from "../../assets/close.png";\nimport min from "../../assets/icon_min.png";\nimport max from "../../assets/icon-max.png"\nimport logo from "../../assets/logo.png";\nimport "./index.scss";\nfunction HeadBar() {\n    const [maxWindow, setMaxWindow] = useState(false);\n    const onClose = () => {\n        console.log("\u70b9\u51fb\u5173\u95ed")\n        window.electronAPI.setWindowClose();\n    }\n    const onMax = () => {\n        window.electronAPI.setWindowMax();\n    }\n    const onMin = () => {\n        console.log("\u6062\u590d")\n        window.electronAPI.setWindowMin();\n    }\n    return <div className="head-bar">\n        <div className="title">\n            <img src={logo} alt="logo" />\n            <span>\u6807\u9898</span>\n        </div>\n        <div className="window-tool">\n            <div className="icon-min" onClick={onMin}><img src={min} alt="" /></div>\n            <div className="icon-max" onClick={onMax}><img src={max} alt="" /></div>\n            <div className="close" onClick={onClose}><img src={close} alt="" /></div>\n        </div>\n    </div>\n}\n\n\nexport default HeadBar\n\n')),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u66f4\u5b8c\u7f8e\u7684\u5c55\u793a\u6700\u5927\u5316\u548c\u6062\u590d\u7684\u56fe\u6807\uff0c\u53ef\u4ee5\u4f7f\u7528maxWindow\u53d8\u91cf\u6765\u63a7\u5236\uff0c\u4e0d\u540c\u7684\u72b6\u6001\u663e\u793a\u5bf9\u5e94\u7684\u56fe\u6807\u5373\u53ef\u3002"))}m.isMDXComponent=!0}}]);