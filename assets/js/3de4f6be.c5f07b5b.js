"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),k=o,v=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:0,id:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",title:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",authors:"duxinyues",tags:["JavaScript"]},a=void 0,i={permalink:"/./vue/javascript/js202303031657",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/javascript/js202303031657.md",source:"@site/blog/javascript/js202303031657.md",title:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",description:"\x3c!--",date:"2023-03-03T08:57:14.848Z",formattedDate:"2023\u5e743\u67083\u65e5",tags:[{label:"JavaScript",permalink:"/./vue/tags/java-script"}],readingTime:21.89,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:0,id:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",title:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",authors:"duxinyues",tags:["JavaScript"]},nextItem:{title:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",permalink:"/./vue/javascript/javascript202302181127"}},s={authorsImageUrls:[void 0]},c=[{value:"01\u3001\u524d\u7aef\u5b58\u50a8\uff1acookie\u3001sessionStorage\u548clocalStorage\u7684\u533a\u522b",id:"01\u524d\u7aef\u5b58\u50a8cookiesessionstorage\u548clocalstorage\u7684\u533a\u522b",level:2},{value:"02\u3001JavaScript\u6570\u636e\u7c7b\u578b",id:"02javascript\u6570\u636e\u7c7b\u578b",level:2},{value:"03\u3001\u5bf9\u95ed\u5305\u7684\u7406\u89e3",id:"03\u5bf9\u95ed\u5305\u7684\u7406\u89e3",level:2},{value:"04\u3001\u8bf4\u4e00\u4e0bPromise",id:"04\u8bf4\u4e00\u4e0bpromise",level:2},{value:"Promise.all()",id:"promiseall",level:3},{value:"Promise.any()",id:"promiseany",level:3},{value:"Promise.race()",id:"promiserace",level:3},{value:"05\u3001\u4ec0\u4e48\u662f\u8de8\u57df\uff0c\u600e\u4e48\u89e3\u51b3\u8de8\u57df",id:"05\u4ec0\u4e48\u662f\u8de8\u57df\u600e\u4e48\u89e3\u51b3\u8de8\u57df",level:2},{value:"06\u3001\u4ec0\u4e48\u662fBFC",id:"06\u4ec0\u4e48\u662fbfc",level:2},{value:"07\u3001js\u5224\u65ad\u6570\u636e\u7c7b\u578b\u7684\u65b9\u5f0f",id:"07js\u5224\u65ad\u6570\u636e\u7c7b\u578b\u7684\u65b9\u5f0f",level:2},{value:"08\u3001CSS\u6837\u5f0f\u4f18\u5148\u7ea7",id:"08css\u6837\u5f0f\u4f18\u5148\u7ea7",level:2},{value:"09\u3001JavaScript\u5f02\u6b65\u7684\u65b9\u5f0f",id:"09javascript\u5f02\u6b65\u7684\u65b9\u5f0f",level:2},{value:"10\u3001\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u5f0f",id:"10\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u5f0f",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"01\u524d\u7aef\u5b58\u50a8cookiesessionstorage\u548clocalstorage\u7684\u533a\u522b"},"01\u3001\u524d\u7aef\u5b58\u50a8\uff1acookie\u3001sessionStorage\u548clocalStorage\u7684\u533a\u522b"),(0,o.kt)("p",null,"\u76f8\u540c\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"cookie\u3001sessionStorage\u548clocalStorage\u90fd\u5c5e\u4e8e\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8\uff1b"),(0,o.kt)("li",{parentName:"ol"},"cookie\u3001sessionStorage\u548clocalStorage\u5b58\u50a8\u9075\u5faa\u7684\u540c\u6e90\u7b56\u7565\u3002sessionStorage\u8fd8\u9650\u5236\u662f\u540c\u4e00\u4e2a\u9875\u9762\u3002")),(0,o.kt)("p",null,"\u533a\u522b\u662f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"cookie\u662f\u7531\u670d\u52a1\u5668\u7aef\u5199\u5165\u7684\uff0csessionStorage\u548clocalStorage\u662f\u524d\u7aef\u5199\u5165\u7684\uff1b"),(0,o.kt)("li",{parentName:"ol"},"cookie\u7684\u6709\u6548\u671f\uff0c\u662f\u5728\u670d\u52a1\u7aef\u8bbe\u7f6e\u597d\u7684\u3002sessionStorage\u5219\u662f\u5728\u9875\u9762\u5173\u95ed\u540e\u81ea\u52a8\u6e05\u9664\uff0clocalStorage\u5219\u53ef\u4ee5\u957f\u671f\u4fdd\u5b58\uff0c\u9664\u975e\u624b\u52a8\u6e05\u9664\u3002"),(0,o.kt)("li",{parentName:"ol"},"cookie\u7684\u5b58\u50a8\u7a7a\u95f4\u6bd4\u8f83\u5c0f\uff0c\u6bcf\u4e00\u4e2acookie\u5927\u6982\u662f4kb\u3002sessionStorage\u548clocalStorage\u5b58\u50a8\u7a7a\u95f4\u6bd4\u8f83\u5927\uff0c\u5927\u7ea6\u4e3a5M\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u524d\u7aef\u5411\u540e\u7aef\u53d1\u8d77\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u643a\u5e26cookie\u3002localStorage\u548csessionStorage\u5219\u4e0d\u4f1a\u3002")),(0,o.kt)("p",null,"cookie\u662f\u4e00\u822c\u7528\u4e8e\u5b58\u50a8\u9a8c\u8bc1\u4fe1\u606fSessionID\u6216\u8005token\uff1blocalStorage\u4e00\u822c\u662f\u7528\u6765\u5b58\u50a8\u4e00\u4e9b\u4e0d\u6613\u53d8\u52a8\u7684\u6570\u636e\uff0c\u8fd9\u6837\u51cf\u5c0f\u670d\u52a1\u5668\u7684\u538b\u529b\u3002sessionStorage\u662f\u7528\u6765\u68c0\u6d4b\u7528\u6237\u662f\u5426\u662f\u5237\u65b0\u8fdb\u5165\u9875\u9762\u7684\uff0c\u6bd4\u5982\u97f3\u4e50\u64ad\u653e\u5668\u8fdb\u5ea6\u6761\u3002"),(0,o.kt)("h2",{id:"02javascript\u6570\u636e\u7c7b\u578b"},"02\u3001JavaScript\u6570\u636e\u7c7b\u578b"),(0,o.kt)("p",null,"JavaScript\u6570\u636e\u7c7b\u578b\u5206\u4e3a\u4e24\u79cd\uff1a\u4e00\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u4e00\u79cd\u662f\u5f15\u7528\u6570\u636e\u7c7b\u578b"),(0,o.kt)("p",null,"\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff1anumber\u3001string\u3001boolean\u3001null\u3001undefined\u3001symbol\u548cBigInt\u3002\n\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff1aobject\uff0c\u5305\u62ec\u4e86function\u3001array\u3001\u6b63\u5219\u3001date\u65e5\u671f\u548cMath\u6570\u5b66\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u4eec\u5728\u5185\u5b58\u4e2d\u7684\u5b58\u50a8\u65b9\u5f0f\u4e0d\u540c\u3002\u57fa\u672c\u6570\u636e\u7c7b\u578b\u662f\u76f4\u63a5\u5b58\u50a8\u5728\u6808\u5185\u5b58\u4e2d\u3002\u5f15\u7528\u6570\u636e\u7c7b\u578b\u662f\u5b58\u50a8\u5728\u5806\u5185\u5b58\u4e2d\u7684\uff0c\u5728\u6808\u5185\u5b58\u4e2d\u5b58\u50a8\u4e86\u6307\u9488\uff0c\u8fd9\u4e2a\u6307\u9488\u6307\u5411\u5728\u5806\u5185\u5b58\u4e2d\u7684\u5b9e\u4f53\u3002"),(0,o.kt)("p",null,"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u4e2dsymbol\u662fES6\u65b0\u589e\u7684\u4e00\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u7684\u7279\u70b9\u5c31\u662f\u4e0d\u80fd\u6709\u91cd\u590d\u6570\u636e\uff0c\u53ef\u4ee5\u7528\u6765\u4f5c\u4e3a\u5bf9\u8c61\u7684key\u3002symbol\u521b\u5efa\u7684\u6570\u636e\u662f\u552f\u4e00\u7684\uff0c\u6240\u4ee5\nSymbol() !== Symbol()\u3002"),(0,o.kt)("p",null,"BigInt\u6570\u636e\u7c7b\u578b\uff0c\u4e5f\u662fES6\u65b0\u589e\uff0c\u4f5c\u7528\u5c31\u662f\u6269\u5927\u4e86\u6570\u636e\u7684\u8303\u56f4\uff0c\u80fd\u591f\u89e3\u51b3\u666e\u901a\u6570\u636e\u7c7b\u578b\u8303\u56f4\u62a5\u9519\u7684\u95ee\u9898\u3002BigInt\u6709\u4e24\u79cd\u4f7f\u7528\u65b9\u6cd5\uff1a\u4e00\u79cd\u662f\u76f4\u63a5\u5728\u6574\u6570\u540e\u9762\u52a0n\u3002\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u8c03\u7528BigInt\u6784\u9020\u51fd\u6570\u3002"),(0,o.kt)("h2",{id:"03\u5bf9\u95ed\u5305\u7684\u7406\u89e3"},"03\u3001\u5bf9\u95ed\u5305\u7684\u7406\u89e3"),(0,o.kt)("p",null,"\u51fd\u6570\u548c\u8bcd\u6cd5\u73af\u5883\u7ed1\u5b9a\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u7684\u7ec4\u5408\u5c31\u662f\u95ed\u5305\uff0c\u6bd4\u5982\u6709\u4e00\u4e2a\u51fd\u6570A\uff0c\u5b83return\u4e00\u4e2a\u51fd\u6570B\u3002\u51fd\u6570B\u662f\u53ef\u4ee5\u8bbf\u95ee\u5230\u51fd\u6570A\u5185\u90e8\u5b9a\u4e49\u7684\u53d8\u91cf\u3002\u51fd\u6570A\u6267\u884c\u7ed3\u675f\u540e\uff0c\u51fd\u6570A\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\u5e76\u4e0d\u4f1a\u88ab\u9500\u6bc1\u3002"),(0,o.kt)("p",null,"\u95ed\u5305\u7684\u4f18\u70b9\uff1a\u8ba9\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u7684\u53d8\u91cf\u4e0d\u4f1a\u56e0\u4e3a\u51fd\u6570\u6267\u884c\u7ed3\u675f\u800c\u88ab\u9500\u6bc1\u3002\u4e5f\u53ef\u4ee5\u5728\u5916\u90e8\u8bbf\u95ee\u5230\u51fd\u6570\u5185\u90e8\u7684\u5c40\u90e8\u53d8\u91cf\uff1b\n\u95ed\u5305\u7684\u7f3a\u70b9\uff1a\u5783\u573e\u56de\u6536\u5668\u4e0d\u4f1a\u9500\u6bc1\u95ed\u5305\u4e2d\u7684\u53d8\u91cf\uff0c\u8fd9\u6837\u5c31\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u3002"),(0,o.kt)("h2",{id:"04\u8bf4\u4e00\u4e0bpromise"},"04\u3001\u8bf4\u4e00\u4e0bPromise"),(0,o.kt)("p",null,"Promise\u662f\u5b9e\u73b0\u5f02\u6b65\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u89e3\u51b3\u4e86\u5f02\u6b65\u591a\u5c42\u5d4c\u5957\u56de\u8c03\u7684\u95ee\u9898\uff0c\u63d0\u5347\u4e86\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\uff0c\u540c\u65f6\u8ba9\u6211\u4eec\u6240\u5199\u7684\u4ee3\u7801\u66f4\u5229\u4e8e\u7ef4\u62a4\u3002"),(0,o.kt)("p",null,"Promise\u6709\u4e09\u4e2a\u72b6\u6001\uff1apendding\u3001resolve\u548creject\u3002\u5728Promise\u7684\u6574\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u53ea\u53d1\u751f\u4e00\u6b21\u72b6\u6001\u8f6c\u53d8\u3002\u7531pendding\u8f6c\u4e3aresolve\u6216\u8005reject\u3002"),(0,o.kt)("p",null,"Promise\u6784\u9020\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6709\u4e24\u4e2a\u53c2\u6570\uff1aresolve\u548creject\uff0cresolve\u548creject\u90fd\u662f\u51fd\u6570\u3002"),(0,o.kt)("p",null,"resolve\u51fd\u6570\u7684\u4f5c\u7528\u662f\u628aPromise\u7531\u7b49\u5f85\u72b6\u6001\u6539\u4e3a\u6210\u529f\u72b6\u6001\uff1breject\u662f\u628aPromise\u7531\u7b49\u5f85\u72b6\u6001\u8f6c\u53d8\u4e3a\u5931\u8d25\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u5728Promise\u6784\u9020\u51fd\u6570\u521b\u5efa\u5b9e\u4f8b\u5b8c\u6210\u540e\uff0c\u901a\u8fc7then\u51fd\u6570\u6765\u63a5\u6536\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570\uff0c\u901a\u8fc7catch\u51fd\u6570\u63a5\u53d7\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'        const func = function (parma) {\n            return new Promise((resolve, reject) => {\n                if (parma > 2) {\n                     resolve(parma)\n                }\n                 reject(parma)\n            })\n        }\n\n        func(0).then(res => {\n            console.log("\u7ed3\u679c", res)\n        }).catch(err => console.log("\u62a5\u9519", err))\n')),(0,o.kt)("p",null,"Promise\u7684\u7279\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Promise\u7684\u72b6\u6001\uff0c\u4e0d\u6536\u5230\u5916\u754c\u7684\u5f71\u54cd\uff0c\u5f53Promise\u53d1\u751f\u72b6\u6001\u53d8\u5316\u540e\uff0cPromise\u7684\u751f\u547d\u5468\u671f\u4e5f\u5c31\u7ed3\u675f\u4e86\u3002"),(0,o.kt)("li",{parentName:"ol"},"Promise\u53ea\u53d1\u751f\u4e00\u6b21\u72b6\u6001\u6539\u53d8\u3002"),(0,o.kt)("li",{parentName:"ol"},"resolve\u7684\u53c2\u6570\u662fthen\u65b9\u6cd5\u4e2d\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff1breject\u7684\u53c2\u6570\u662fcatch\u65b9\u6cd5\u4e2d\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u3002")),(0,o.kt)("p",null,"Promise\u7684\u5176\u4ed6\u65b9\u6cd5\uff1a"),(0,o.kt)("h3",{id:"promiseall"},"Promise.all()"),(0,o.kt)("p",null,"\u628a\u591a\u4e2aPromise\u5305\u88c5\u6210\u4e00\u4e2aPromise\u5bf9\u8c61\uff0c\u7b49\u53c2\u6570\u91cc\u9762\u6240\u6709\u7684Promise\u90fd\u8fd4\u56de\u6210\u529f\u4e86\uff0c\u624d\u89e6\u53d1\u6210\u529f\uff0c\u5426\u5219\u8fd4\u56de\u5931\u8d25\u7ed3\u679c\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'        const func = new Promise((resolve, reject) => {\n            resolve(1)\n        })\n        const func2 = new Promise((resolve, reject) => {\n            reject(1)\n        })\n        const allPromise = Promise.all([func, func2])\n        allPromise.then(res => {\n            console.log("\u7ed3\u679c", res)\n        }).catch(err => {\n            console.log("\u62a5\u9519", err) \n        })\n')),(0,o.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u7ed3\u679c\u662f\u5931\u8d25\u72b6\u6001\uff1a1"),(0,o.kt)("p",null,"\u5982\u679cfunc2\u8c03\u7528\u7684resolve(1)\u7684\u8bdd\uff0c\u90a3\u4e48\u8fd9\u6bb5\u4ee3\u7801\u7684\u7ed3\u679c\u4e3a\u6210\u529f\u72b6\u6001\uff1a","[1,1]"),(0,o.kt)("h3",{id:"promiseany"},"Promise.any()"),(0,o.kt)("p",null,"\u63a5\u6536\u4e00\u4e2aPromise\u5bf9\u8c61\u96c6\uff0c\u53ea\u8981\u6709\u4e00\u4e2aPromise\u8fd4\u56de\u6210\u529f\uff0c\u90a3\u4e48\u5c31\u8fd4\u56de\u8fd9\u4e2aPromise\u6210\u529f\u7684\u503c\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'        const func = new Promise((resolve, reject) => {\n            resolve(1)\n        })\n        const func2 = new Promise((resolve, reject) => {\n            reject(0)\n        })\n        const promise = Promise.any([func, func2])\n        promise.then(res => {\n            console.log("\u7ed3\u679c", res)\n        }).catch(err => {\n            console.log("\u62a5\u9519", err)\n        })\n')),(0,o.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u7ed3\u679c\u4e3a\uff1a\u7ed3\u679c 1"),(0,o.kt)("h3",{id:"promiserace"},"Promise.race()"),(0,o.kt)("p",null,"\u53ea\u8981Promise\u96c6\u5408\u91cc\u9762\uff0c\u6709\u4e00\u4e2a\u5b50Promise\u8fd4\u56de\u6210\u529f\u6216\u8005\u5931\u8d25\uff0c\u90a3\u4e48\u7236Promise\u5c06\u5b50Promise\u7684\u72b6\u6001\u8fd4\u56de\uff0c\u7136\u540e\u7ed3\u675fPromise\u7684\u751f\u547d\u5468\u671f\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'        const func = new Promise((resolve, reject) => {\n            reject(1)\n        })\n        const func2 = new Promise((resolve, reject) => {\n            resolve(0)\n        })\n        const promise = Promise.race([func, func2])\n        promise.then(res => {\n            console.log("\u7ed3\u679c", res)\n        }).catch(err => {\n            console.log("\u62a5\u9519", err)\n        })\n')),(0,o.kt)("h2",{id:"05\u4ec0\u4e48\u662f\u8de8\u57df\u600e\u4e48\u89e3\u51b3\u8de8\u57df"},"05\u3001\u4ec0\u4e48\u662f\u8de8\u57df\uff0c\u600e\u4e48\u89e3\u51b3\u8de8\u57df"),(0,o.kt)("p",null,"\u8de8\u57df\uff1a\u5c31\u662f\u5f53\u524d\u9875\u7684\u8bf7\u6c42\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u7684\u5730\u5740\u4e2d\uff0c\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3\uff0c\u5176\u4e2d\u4e00\u4e2a\u4e0d\u540c\uff0c\u5c31\u9020\u6210\u4e86\u8de8\u57df\u3002\u539f\u56e0\u662f\u6d4f\u89c8\u5668\u4e3a\u4e86\u4fdd\u62a4\u7f51\u9875\u5b89\u5168\u505a\u51fa\u7684\u540c\u539f\u534f\u8bae\u7b56\u7565\u3002"),(0,o.kt)("p",null,"\u8de8\u57df\u7684\u89e3\u51b3\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"cors\uff1b\u901a\u8fc7\u8bbe\u7f6e\u540e\u7aef\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee"),(0,o.kt)("li",{parentName:"ol"},"node\u4e2d\u95f4\u4ef6\u3001Nginx\u53cd\u5411\u4ee3\u7406\uff1a\u8de8\u57df\u662f\u6d4f\u89c8\u5668\u9650\u5236\u4e0d\u80fd\u8de8\u57df\u8bbf\u95ee\u670d\u52a1\u5668\uff0c\u800cnode\u4e2d\u95f4\u4ef6\u548cNginx\u53cd\u5411\u4ee3\u7406\uff0c\u662f\u5411\u4ee3\u7406\u670d\u52a1\u5668\u53d1\u8d77\u8bf7\u6c42\uff0c\u4ee3\u7406\u670d\u52a1\u5668\u518d\u5411\u540e\u7aef\u670d\u52a1\u5668\u53d1\u8d77\u8bf7\u6c42\u3002\u670d\u52a1\u5668\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u4e0d\u5b58\u5728\u540c\u6e90\u9650\u5236\u3002")),(0,o.kt)("p",null,"\u51fa\u73b0\u8de8\u57df\u7684\u573a\u666f\uff0c\u4e00\u822c\u662f\u524d\u540e\u7aef\u5206\u79bb\u5f00\u53d1\u3001\u8c03\u7528\u7b2c\u4e09\u65b9\u63a5\u53e3\u3002"),(0,o.kt)("h2",{id:"06\u4ec0\u4e48\u662fbfc"},"06\u3001\u4ec0\u4e48\u662fBFC"),(0,o.kt)("p",null,"BFC\u662f\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587\uff0c\u662fweb\u9875\u9762\u4e2d\u4e00\u4e2a\u72ec\u7acb\u7684\u6e32\u67d3\u533a\u57df\uff0c\u5185\u90e8\u5143\u7d20\u7684\u6e32\u67d3\u4e0d\u4f1a\u5f71\u54cd\u5230\u533a\u57df\u5916\u9762\u7684\u5176\u4ed6\u5143\u7d20\u3002"),(0,o.kt)("p",null,"BFC\u5e03\u5c40\u89c4\u5219\u662f\uff1a\n\u5185\u90e8\u5143\u7d20\u4f1a\u5728\u5782\u76f4\u65b9\u5411\u5806\u53e0\u6446\u653e\uff0c\u5143\u7d20\u4e0a\u4e0b\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u662f\u7531margin\u6765\u51b3\u5b9a\u7684\uff0c\u800c\u76f8\u90bb\u7684\u4e24\u5143\u7d20\u7684margin\u4f1a\u53d1\u751f\u91cd\u53e0\u3002"),(0,o.kt)("h2",{id:"07js\u5224\u65ad\u6570\u636e\u7c7b\u578b\u7684\u65b9\u5f0f"},"07\u3001js\u5224\u65ad\u6570\u636e\u7c7b\u578b\u7684\u65b9\u5f0f"),(0,o.kt)("p",null,"JavaScript\u67093\u79cd\u65b9\u6cd5\u5224\u65ad\u6570\u636e\u7c7b\u578b\uff1atypeof\u3001instanceof\u3001Object.prototype.toString.call()\u3002"),(0,o.kt)("p",null,"typeof\uff1a\u7528\u6765\u5224\u65ad\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\uff0c\u5982\u679c\u4f7f\u7528typeof\u6765\u5224\u65ad\u5f15\u7528\u6570\u636e\u7c7b\u578b\u7684\u8bdd\uff0c\u9664\u4e86function\u4f1a\u8fd4\u56de\u201cfunction\u201d\uff0c\u5176\u4ed6\u7684\u90fd\u4f1a\u8fd4\u56de\u201cobject\u201d\u3002"),(0,o.kt)("p",null,"instanceof\uff1a\u7528\u6765\u533a\u5206\u5f15\u7528\u6570\u636e\u7c7b\u578b\u3001\u5224\u65ad\u5b9e\u4f8b\u662f\u5426\u5c5e\u4e8e\u67d0\u4e00\u4e2a\u6784\u9020\u51fd\u6570\u3002\u68c0\u6d4b\u8fc7\u7a0b\u6bd4\u8f83\u7e41\u7410\uff0c\u800c\u4e14\u5bf9\u4e8eundefined\u3001null\u548csymbol\u6570\u636e\u7c7b\u578b\u662f\u65e0\u6cd5\u68c0\u6d4b\u7684"),(0,o.kt)("p",null,"Object.prototype.toString.call()\uff1a\u53ef\u4ee5\u7528\u6765\u68c0\u6d4b\u6240\u6709\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8fd4\u56de\u7684\u662f\u8be5\u6570\u636e\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",null,"instanceof\u7684\u539f\u7406\u662f\u9a8c\u8bc1\u5f53\u524d\u5bf9\u8c61\u7684\u539f\u578bprototype\u662f\u4e0d\u662f\u51fa\u73b0\u5728\u5b9e\u4f8b\u7684\u539f\u578b\u94fe",(0,o.kt)("strong",{parentName:"p"},"proto"),"\u4e0a\uff0c\u5982\u679c\u5728\uff0c\u5c31\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002"),(0,o.kt)("p",null,"Object.prototype.toString.call()\u7684\u539f\u7406\u662fObject.prototype.toString\u8868\u793a\u4e00\u4e2a\u8fd4\u56de\u5bf9\u8c61\u6570\u636e\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\uff0ccall()\u65b9\u6cd5\u662f\u6539\u53d8this\u7684\u6307\u5411\uff0c\u4e5f\u5c31\u662f\u628aObject.prototype.toString()\u65b9\u6cd5\u6307\u5411\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u4e0a\u3002"),(0,o.kt)("h2",{id:"08css\u6837\u5f0f\u4f18\u5148\u7ea7"},"08\u3001CSS\u6837\u5f0f\u4f18\u5148\u7ea7"),(0,o.kt)("p",null,"\u5728CSS\u6837\u5f0f\u4e2d!important\u7684\u4f18\u5148\u7ea7\u662f\u6700\u9ad8\u7684\u3002\u5176\u6b21\u662f\u5185\u8054\u6837\u5f0f\u3002"),(0,o.kt)("p",null,"CSS\u9009\u62e9\u5668\u7684\u4f18\u5148\u7ea7\uff1aid\u9009\u62e9\u5668 > \uff08\u7c7b\u9009\u62e9\u5668 | \u4f2a\u7c7b\u9009\u62e9\u5668|\u5c5e\u6027\u9009\u62e9\u5668\uff09 > \uff08\u540e\u4ee3\u9009\u62e9\u5668 | \u4f2a\u5143\u7d20\uff09 > \u5b50\u9009\u62e9\u5668\u6216\u8005\u76f8\u90bb\u9009\u62e9\u5668 > \u901a\u914d\u9009\u62e9\u5668\u3002"),(0,o.kt)("h2",{id:"09javascript\u5f02\u6b65\u7684\u65b9\u5f0f"},"09\u3001JavaScript\u5f02\u6b65\u7684\u65b9\u5f0f"),(0,o.kt)("p",null,"\u56de\u8c03\u51fd\u6570\uff1a\u662f\u5f02\u6b65\u64cd\u4f5c\u7684\u57fa\u672c\u65b9\u5f0f\uff0c\u4e5f\u662f\u6700\u7b80\u5355\uff0c\u5bb9\u6613\u7406\u89e3\u548c\u5b9e\u73b0\u7684\uff0c\u6bd4\u5982\u5e38\u89c1\u7684AJAX\u3002\u4f46\u662f\u56de\u8c03\u51fd\u6570\u4e0d\u5229\u4e8e\u4ee3\u7801\u7ef4\u62a4\u548c\u9605\u8bfb\uff0c\u4ee3\u7801\u7ed3\u6784\u6df7\u4e71\uff0c\u6d41\u7a0b\u96be\u4ee5\u8ffd\u8e2a\u3002"),(0,o.kt)("p",null,"Promise\u3001async/await"),(0,o.kt)("p",null,"\u8fd9\u4e09\u79cd\u662f\u6700\u5e38\u89c1\u7684\uff0c\u5b9e\u73b0\u5f02\u6b65\u64cd\u4f5c\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("h2",{id:"10\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u5f0f"},"10\u3001\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u65b0\u6570\u7ec4\uff0c\u7136\u540e\u904d\u5386\u6570\u7ec4\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u6b21\u5224\u65ad\u65b0\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u5143\u7d20\uff0c\u4e0d\u5b58\u5728\u7684\u8bdd\uff0c\u5c31\u5c06\u5143\u7d20push\u8fdb\u53bb\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5229\u7528Set\u6570\u636e\u7c7b\u578b\u7684\u4e0d\u91cd\u590d\u7279\u70b9\uff0cnew\u4e00\u4e2aSet\uff0c\u53c2\u6570\u5c31\u662f\u9700\u8981\u53bb\u91cd\u7684\u6570\u7ec4\uff0cset\u4f1a\u81ea\u52a8\u5220\u9664\u91cd\u590d\u6570\u636e\uff0c\u7136\u540e\u5c06set\u8f6c\u5316\u4e3a\u6570\u7ec4\u8fd4\u56de\u3002"),(0,o.kt)("li",{parentName:"ol"},"reduce + includes\uff1a\u5229\u7528reduce\u904d\u5386\u6570\u7ec4\u548c\u4f20\u5165\u4e00\u4e2a\u7a7a\u6570\u7ec4\u4f5c\u4e3a\u53bb\u91cd\u540e\u7684\u65b0\u6570\u7ec4\uff0c\u5728\u5185\u90e8\u518d\u6765\u5224\u65ad\u65b0\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u5f53\u524d\u5143\u7d20\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u5c31\u5c06\u5143\u7d20push\u8fdb\u53bb\u3002")))}u.isMDXComponent=!0}}]);