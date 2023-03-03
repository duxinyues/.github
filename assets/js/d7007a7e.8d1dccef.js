"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6,id:"JavaScript\uff1aFetch",title:"JavaScript\uff1aFetch",authors:"duxinyues",tags:["JavaScript"]},l=void 0,s={permalink:"/javascript/JavaScript202206",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/javascript/JavaScript202206.md",source:"@site/blog/javascript/JavaScript202206.md",title:"JavaScript\uff1aFetch",description:"fetch\u80fd\u591f\u6267\u884cXMLHttpRequest\u5bf9\u8c61\u7684\u6240\u6709\u4efb\u52a1\uff0c\u63a5\u53e3\u66f4\u52a0\u73b0\u4ee3\u5316\u3002XMLHttpRequest\u53ef\u4ee5\u9009\u62e9\u5f02\u6b65\uff0c\u800cfetch\u5fc5\u987b\u662f\u5f02\u6b65\u7684\u3002",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"JavaScript",permalink:"/tags/java-script"}],readingTime:8.12,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:6,id:"JavaScript\uff1aFetch",title:"JavaScript\uff1aFetch",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1aFile API\u548cBlob API",permalink:"/javascript/JavaScript202205"},nextItem:{title:"JavaScript\uff1aEncoding\u548c\u539f\u751f\u62d6\u653e\u4e8b\u4ef6",permalink:"/javascript/JavaScript202207"}},c={authorsImageUrls:[void 0]},i=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"fetch\u8bf7\u6c42\u6a21\u5f0f",id:"fetch\u8bf7\u6c42\u6a21\u5f0f",level:2},{value:"Headers\u5bf9\u8c61",id:"headers\u5bf9\u8c61",level:2},{value:"Request\u5bf9\u8c61",id:"request\u5bf9\u8c61",level:2}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"fetch\u80fd\u591f\u6267\u884cXMLHttpRequest\u5bf9\u8c61\u7684\u6240\u6709\u4efb\u52a1\uff0c\u63a5\u53e3\u66f4\u52a0\u73b0\u4ee3\u5316\u3002XMLHttpRequest\u53ef\u4ee5\u9009\u62e9\u5f02\u6b65\uff0c\u800cfetch\u5fc5\u987b\u662f\u5f02\u6b65\u7684\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("p",null,"fetch\u65b9\u6cd5\u662f\u66b4\u9732\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u7684\u3002\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u5fc5\u9009\u9879URL\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u83b7\u53d6\u8d44\u6e90\u7684URL\u3002"),(0,r.kt)("p",null,"\u5728\u8bfb\u53d6\u54cd\u5e94\u7684\u65f6\u5019\uff0c\u6839\u636e\u9700\u8981\u83b7\u53d6\u5bf9\u5e94\u7684\u683c\u5f0f\u5185\u5bb9\uff0c\u6bd4\u5982\u5e38\u89c1\u7684json\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'fetch("url").then(res=>res.json()).then(res=>{\n    console.log(res);\n})\n')),(0,r.kt)("p",null,"fetch\u652f\u6301\u901a\u8fc7response\u7684status\u548cstatusText\u5c5e\u6027\u68c0\u67e5\u54cd\u5e94\u72b6\u6001\uff0c\u6210\u529f\u83b7\u53d6\u54cd\u5e94\u7684\u8bf7\u6c42\u901a\u5e38\u4f1a\u4ea7\u751f\u503c\u4e3a200\u7684\u72b6\u6001\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'fetch("url")\n.then(res=>{\n    console.log(res.status); // 200\n    console.log(res.statusText); // ok\n})\n')),(0,r.kt)("h2",{id:"fetch\u8bf7\u6c42\u6a21\u5f0f"},"fetch\u8bf7\u6c42\u6a21\u5f0f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001JSON\u6570\u636e\u683c\u5f0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let payload = JSON.stringify({\n      foo: 'bar'\n    });\n    let jsonHeaders = new Headers({\n      'Content-Type': 'application/json'\n    });\n    fetch('/send-me-json', {\n      method: 'POST',    // \u53d1\u9001\u8bf7\u6c42\u4f53\u65f6\u5fc5\u987b\u4f7f\u7528\u4e00\u79cdHTTP\u65b9\u6cd5\n      body: payload,\n      headers: jsonHeaders\n    });\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u8bf7\u6c42\u4f53\u4e2d\u53d1\u9001\u53c2\u6570\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let payload = 'foo=bar&baz=qux';\n    let paramHeaders = new Headers({\n      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'\n    });\n    fetch('/send-me-params', {\n      method: 'POST',   // \u53d1\u9001\u8bf7\u6c42\u4f53\u65f6\u5fc5\u987b\u4f7f\u7528\u4e00\u79cdHTTP\u65b9\u6cd5\n      body: payload,\n      headers: paramHeaders\n    });\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001\u6587\u4ef6\uff0c\u56e0\u4e3a\u8bf7\u6c42\u4f53\u652f\u6301FormData\uff0cfetch\u53ef\u4ee5\u5e8f\u5217\u5316\u5e76\u4e14\u53d1\u9001\u6587\u4ef6\u5b57\u6bb5\u4e2d\u7684\u6587\u4ef6\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let imageFormData = new FormData();\n    let imageInput = document.querySelector(\"input[type='file']\");\n    imageFormData.append('image', imageInput.files[0]);\n    fetch('/img-upload', {\n      method: 'POST',\n      body: imageFormData\n    });\n")),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u53d1\u9001\u591a\u4e2a\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let imageFormData = new FormData();\n    let imageInput = document.querySelector(\"input[type='file'][multiple]\");\n    for(leti=0;i<imageInput.files.length;++i){\n      imageFormData.append('image', imageInput.files[i]);\n    }\n    fetch('/img-upload', {\n      method: 'POST',\n      body: imageFormData\n    });\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u52a0\u8f7dBlob\u6587\u4ef6\uff0cfetch\u4e5f\u63d0\u4f9b\u4e86Blob\u7c7b\u578b\u7684\u54cd\u5e94\u3002\u6bd4\u5982\u52a0\u8f7d\u56fe\u7247\uff0c\u5c06\u56fe\u7247\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u7136\u540e\u6dfb\u52a0\u5230HTML\u56fe\u7247\u5143\u7d20\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4f7f\u7528\u54cd\u5e94\u5bf9\u8c61\u4e0a\u66b4\u9732\u7684blob\u65b9\u6cd5\uff0c\u5f97\u5230\u4e00\u4e2aBlob\u5b9e\u4f8b\uff0c\u7136\u540e\uff0c\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u5b9e\u4f8b\u4f20\u7ed9URL.createObjectUrl()\u4ee5\u751f\u6210\u53ef\u4ee5\u6dfb\u52a0\u7ed9\u56fe\u7247\u5143\u7d20src\u5c5e\u6027\u7684\u503c\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const imageElement = document.querySelector('img');\n    fetch('my-image.png')\n      .then((response) => response.blob())\n      .then((blob) => {\n        imageElement.src = URL.createObjectURL(blob);\n      });\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u8de8\u57df\u8bf7\u6c42\uff0c\u4ece\u4e0d\u540c\u7684\u6e90\u8bf7\u6c42\u8d44\u6e90\uff0c\u54cd\u5e94\u8981\u5305\u542bCORS\u5934\u90e8\u624d\u80fd\u4fdd\u8bc1\u6d4f\u89c8\u5668\u6536\u5230\u54cd\u5e94\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4e2d\u65ad\u8bf7\u6c42\uff0cFetch API\u652f\u6301\u901a\u8fc7AbortController/AbortSignal\u5bf9\u4e2d\u65ad\u8bf7\u6c42\u3002\u8c03\u7528AbortController. abort()\u4f1a\u4e2d\u65ad\u6240\u6709\u7f51\u7edc\u4f20\u8f93\uff0c\u7279\u522b\u9002\u5408\u5e0c\u671b\u505c\u6b62\u4f20\u8f93\u5927\u578b\u8d1f\u8f7d\u7684\u60c5\u51b5\u3002\u4e2d\u65ad\u8fdb\u884c\u4e2d\u7684fetch()\u8bf7\u6c42\u4f1a\u5bfc\u81f4\u5305\u542b\u9519\u8bef\u7684\u62d2\u7edd\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let abortController = new AbortController();\n    fetch('wikipedia.zip', { signal: abortController.signal})\n      .catch(() => console.log('aborted! ');\n    // 10 \u6beb\u79d2\u540e\u4e2d\u65ad\u8bf7\u6c42\n    setTimeout(() => abortController.abort(), 10);\n    // \u5df2\u7ecf\u4e2d\u65ad\n")),(0,r.kt)("h2",{id:"headers\u5bf9\u8c61"},"Headers\u5bf9\u8c61"),(0,r.kt)("p",null,"Headers\u5bf9\u8c61\u662f\u6240\u6709\u5916\u53d1\u8bf7\u6c42\u548c\u63a5\u6536\u54cd\u5e94\u5934\u90e8\u7684\u5bb9\u5668\uff0c\u6bcf\u53d1\u4e00\u6b21request\u5b9e\u4f8b\u90fd\u5305\u542b\u4e86\u4e00\u4e2a\u7a7a\u7684Header\u5b9e\u4f8b\u3002\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684header\u53c2\u6570\u3002"),(0,r.kt)("h2",{id:"request\u5bf9\u8c61"},"Request\u5bf9\u8c61"),(0,r.kt)("p",null,"Request\u5bf9\u8c61\u662f\u83b7\u53d6\u8d44\u6e90\u8bf7\u6c42\u7684\u63a5\u53e3\u3002\u8fd9\u4e2a\u63a5\u53e3\u66b4\u9732\u4e86\u8bf7\u6c42\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u4e5f\u66b4\u9732\u4e86\u4f7f\u7528\u8bf7\u6c42\u4f53\u7684\u4e0d\u540c\u65b9\u5f0f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efaRequest\u5bf9\u8c61\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let r = new Request('https://foo.com');\n    console.log(r);\n    // Request {...}\n")),(0,r.kt)("p",null,"Request\u5bf9\u8c61\u6784\u9020\u51fd\u6570\u4e5f\u63a5\u6536\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c31\u662f\u4e00\u4e9b\u5e38\u89c4\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982method\u3002\n2. \u514b\u9686Request\u5bf9\u8c61\uff0cFetch\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\u6765\u521b\u5efaRequest\u5bf9\u8c61\u7684\u526f\u672c\uff1a\u4f7f\u7528Request\u6784\u9020\u51fd\u6570\u548c\u4f7f\u7528clone\u65b9\u6cd5\u3002clone\u65b9\u6cd5\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let r1 = new Request('https://foo.com', { method: 'POST', body: 'foobar' });\n    let r2 = r1.clone();\n    console.log(r1.url);        // https://foo.com/\n    console.log(r2.url);        // https://foo.com/\n    console.log(r1.bodyUsed); // false\n    console.log(r2.bodyUsed); // false\n")))}u.isMDXComponent=!0}}]);