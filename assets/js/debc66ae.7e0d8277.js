"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||w[d]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:3,id:"Electron\uff1aBrowserView\u4f7f\u7528\u65b9\u6cd5",title:"Electron\uff1aBrowserView\u4f7f\u7528\u65b9\u6cd5",authors:"duxinyues",tags:["Electron"]},i=void 0,a={permalink:"/./vue/electron/Electron202203",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/electron/Electron202203.md",source:"@site/blog/electron/Electron202203.md",title:"Electron\uff1aBrowserView\u4f7f\u7528\u65b9\u6cd5",description:"\u6211\u4eec\u77e5\u9053\uff0c\u4f7f\u7528BrowserWindow\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a97\u53e3\uff0c\u90a3\u4e48\u5982\u679c\u60f3\u5728\u7a97\u53e3\u4e2d\u6218\u80dc\u65af\u66f4\u591a\u7684web\u5185\u5bb9\uff0c\u6bd4\u5982\u5d4c\u5165\u5176\u4ed6\u7f51\u7ad9\u7684\u5185\u5bb9\uff0c\u90a3\u5c31\u4f7f\u7528BrowserView\u4e86\u3002",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"Electron",permalink:"/./vue/tags/electron"}],readingTime:4.75,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:3,id:"Electron\uff1aBrowserView\u4f7f\u7528\u65b9\u6cd5",title:"Electron\uff1aBrowserView\u4f7f\u7528\u65b9\u6cd5",authors:"duxinyues",tags:["Electron"]},prevItem:{title:"Electron\uff1a\u7a97\u53e3\u3001\u7a97\u53e3\u6807\u9898\u548c\u8fb9\u6846",permalink:"/./vue/electron/Electron202202"},nextItem:{title:"Electron\uff1a\u4e3b\u8fdb\u7a0b\u3001\u6e32\u67d3\u8fdb\u7a0b\u4ee5\u53ca\u901a\u4fe1",permalink:"/./vue/electron/Electron202204"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0c\u4f7f\u7528BrowserWindow\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a97\u53e3\uff0c\u90a3\u4e48\u5982\u679c\u60f3\u5728\u7a97\u53e3\u4e2d\u6218\u80dc\u65af\u66f4\u591a\u7684web\u5185\u5bb9\uff0c\u6bd4\u5982\u5d4c\u5165\u5176\u4ed6\u7f51\u7ad9\u7684\u5185\u5bb9\uff0c\u90a3\u5c31\u4f7f\u7528BrowserView\u4e86\u3002"),(0,o.kt)("p",null,"BrowserView\u7684\u4f4d\u7f6e\u662f\u76f8\u5bf9\u4e8e\u7236\u7a97\u53e3\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/6e234370e2174925b19ae52da64fc8bc.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"      const win = new BrowserWindow({ width: 800, height: 600 });\n      const view = new BrowserView();\n      win.setBrowserView(view);\n      view.setAutoResize({\n        \n      })\n      view.setBounds({ x: 0, y: 0, width: 800, height: 800 });\n      view.webContents.loadURL('https://duxinyue.blog.csdn.net/?type=blog');\n")),(0,o.kt)("p",null,"BrowserView\u521b\u5efa\u7684\u5bf9\u8c61\u6709\u8fd9\u51e0\u4e2a\u5c5e\u6027\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"webContents\uff1a\u4e3b\u8981\u662f\u8d1f\u8d23\u6e32\u67d3\u548c\u63a7\u5236\u7f51\u9875\uff0c\u6bd4\u5982\u6211\u4eec\u8981\u5728\u7f51\u9875\u4e2d\u52a0\u8f7d\u4e00\u4e2a\u8fde\u63a5\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"view.webContents.loadURL('https://duxinyue.blog.csdn.net/?type=blog');")),(0,o.kt)("li",{parentName:"ol"},"setBounds()\uff0c\u8c03\u6574\u89c6\u56fe\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u7684\uff0c\u4e5f\u53ef\u4ee5\u79fb\u52a8\u5230\u7a97\u53e3\u8fb9\u754c\uff0c\u6bd4\u5982\uff1a\u8bbe\u7f6e\u4ee3\u7801\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"view.setBounds({ x: -50, y: 0, width: 800, height: 800 });\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/b8252396f2594ae7856a430e22fad98e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("p",null,"\u89c6\u56fe\u8d85\u51fa\u4e86\u7a97\u53e3\u8fb9\u754c\u3002\n3. setAutoResize\uff0c\u8bbe\u7f6e\u89c6\u56fe\u81ea\u9002\u5e94\u5927\u5c0f\u7684\uff0c\u6bd4\u5982\u6211\u4eec\u70b9\u51fb\u7a97\u53e3\u7684\u6700\u5927\u5316\u65f6\u5019\uff0c\u89c6\u56fe\u7684\u5c3a\u5bf8\u80fd\u591f\u548c\u7a97\u53e3\u7684\u5927\u5c0f\u81ea\u52a8\u53d8\u5316\u3002"),(0,o.kt)("p",null,"setAutoResize\u63a5\u6536\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u6709\u4ee5\u4e0b\u51e0\u4e2a\u5c5e\u6027\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"width\uff1a boolean\uff08\u53ef\u9009\uff09 - \u5982\u679c\u4e3atrue\uff0c\u89c6\u56fe\u5bbd\u5ea6\u8ddf\u968f\u7a97\u53e3\u53d8\u5316\u3002 \u9ed8\u8ba4\u503c\u4e3a false\nheight\uff1a boolean(\u53ef\u9009) - \u5982\u679c true\uff0c\u89c6\u56fe\u7684\u9ad8\u5ea6\u5c06\u589e\u957f\u548c\u7f29\u5c0f \u4e0e\u7a97\u53e3\u3002 \u9ed8\u8ba4\u503c\u4e3a false\nhorizontal\uff1a boolean (\u53ef\u9009) - \u5982\u679c\u4e3a true\uff0c\u89c6\u56fe\u7684x\u8f74\u548c\u5bbd\u5ea6\u5c06\u968f\u7740\u7a97\u53e3\u7684\u5927\u5c0f\u53d8\u5316\u7b49\u6bd4\u4f8b\u7f29\u653e\u3002 \u9ed8\u8ba4\u503c\u4e3a false\nvertical\uff1aboolean(\u53ef\u9009) - \u5982\u679c true\uff0c\u89c6\u56fe\u7684y\u4f4d\u7f6e\u548c\u9ad8\u5ea6\u5c06\u589e\u957f \u548c\u6536\u7f29\u6bd4\u4f8b\u4e0e\u7a97\u53e3\u3002 \u9ed8\u8ba4\u503c\u4e3a false\u3002")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"setBackgroundColor\u65b9\u6cd5\u662f\u8bbe\u7f6e\u89c6\u56fe\u7684\u80cc\u666f\u989c\u8272\uff0c\u9ed8\u8ba4\u662f\u767d\u8272\u3002")),(0,o.kt)("p",null,"\u5173\u4e8eBrowserView\u7684\u5b8c\u6574\u8bbe\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"      const win = new BrowserWindow({ width: 800, height: 600 });\n      const view = new BrowserView();\n      win.setBrowserView(view);\n      view.setAutoResize({\n        width:true,\n        height:true,\n        horizontal:true,\n        vertical:true,\n      })\n      view.setBounds({ x: 0, y: 0, width: 800, height: 800 });\n      view.setBackgroundColor(\"rgb(32,54,132)\")\n      view.webContents.loadURL('https://duxinyue.blog.csdn.net/?type=blog');\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/13821922fb5144578b775d2320f44b8d.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("p",null,"\u8fd9\u5c31\u662fBrowserView\u7684\u76f8\u5173\u8bbe\u7f6e\u3002"))}p.isMDXComponent=!0}}]);