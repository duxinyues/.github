"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,v=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:0,id:"Reflect",title:"\u7406\u89e3\u865a\u62dfDOM\u3001innerHTML\u548cJavaScript\u64cd\u4f5cDOM",authors:"duxinyues",tags:["JavaScript"]},i=void 0,o={permalink:"/blog/javascript/JavaScript202302",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/javascript/JavaScript202302.md",source:"@site/blog/javascript/JavaScript202302.md",title:"\u7406\u89e3\u865a\u62dfDOM\u3001innerHTML\u548cJavaScript\u64cd\u4f5cDOM",description:"UI\u5c31\u662f\u7528\u6237\u754c\u9762\uff0c\u9700\u8981\u5904\u7406\u4e24\u4ef6\u4e8b\u60c5\uff1a",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:8.85,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:0,id:"Reflect",title:"\u7406\u89e3\u865a\u62dfDOM\u3001innerHTML\u548cJavaScript\u64cd\u4f5cDOM",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1aReflect\u5168\u5c40\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4ee3\u7406",permalink:"/blog/javascript/JavaScript202301"}},p={authorsImageUrls:[void 0]},c=[{value:"\u865a\u62dfDOM",id:"\u865a\u62dfdom",level:2},{value:"innerHTML\u6a21\u677f",id:"innerhtml\u6a21\u677f",level:2},{value:"\u539f\u751fJavaScript\u64cd\u4f5cDOM",id:"\u539f\u751fjavascript\u64cd\u4f5cdom",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"UI\u5c31\u662f\u7528\u6237\u754c\u9762\uff0c\u9700\u8981\u5904\u7406\u4e24\u4ef6\u4e8b\u60c5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5448\u73b0\u5185\u5bb9\u3001\u53cd\u9988"),(0,a.kt)("li",{parentName:"ol"},"\u7528\u6237\u4ea4\u4e92")),(0,a.kt)("p",null,"\u5148\u4e86\u89e3\u4e00\u4e0b\u58f0\u660e\u5f0fUI\u548c\u547d\u4ee4\u5f0fUI\uff0c\u8fd9\u4e24\u4e2a\u6982\u5ff5\u3002"),(0,a.kt)("p",null,"\u58f0\u660e\u5f0f\uff0c\u503e\u5411\u7684\u662f\u73b0\u5b9e\u8868\u8fbe\uff0c\u6bd4\u5982react\u6216\u8005vue\uff1b\n\u547d\u4ee4\u5f0f\uff0c\u503e\u5411\u7684\u662f\u6267\u884c\u8fc7\u7a0b\uff0c\u6bd4\u5982JQuery\uff0c\u5c31\u662f\u5178\u578b\u7684\u547d\u4ee4\u5f0fUI\u6846\u67b6\uff1b"),(0,a.kt)("p",null,"\u6bd4\u5982\u73b0\u5728\u6709\u4e00\u4e2adiv\u6807\u7b7e\uff0cid\u4e3aapp\uff0c\u6587\u672c\u5185\u5bb9\u4e3atext\u3002\u9700\u8981\u70b9\u51fbdiv\u4fee\u6539\u6587\u672c\u5185\u5bb9\u4e3a\u201chello world\u201d\u3002"),(0,a.kt)("p",null,"jQuery\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'$("#app").text("hello world");\n')),(0,a.kt)("p",null,"\u539f\u751fJavaScript\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'        let app = document.querySelector(\'#app\')\n        app.addEventListener("click", function () {\n            app.innerText = "hello world";\n        })\n')),(0,a.kt)("p",null,"React\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nfunction WordClassification() {\n  const [text,setText] = React.useState(\'text\');\n\n  return <div onClick={()=>{\n    setText("hello world")\n  }}>{text}</div>;\n}\n\nexport default WordClassification;\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u7684\u6bd4\u8f83\uff0c\u53ef\u4ee5\u770b\u51fa\uff0c\u547d\u4ee4\u5f0fUI\u4ee3\u7801\u6307\u51fa\u4e86\u6bcf\u4e00\u4e2a\u6b65\u9aa4\u662f\u505a\u4ec0\u4e48\uff1b\u800c\u58f0\u660e\u5f0fUI\u4ee3\u7801\u5462\uff0c\u53ea\u662f\u7ed9\u51fa\uff1a\u201c\u6211\u8981\u70b9\u51fbdiv\uff0c\u4fee\u6539\u5185\u5bb9\u201d\uff0c\u8fd9\u6837\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u5728\u8bbe\u8ba1UI\u6846\u67b6\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u4ece\u6027\u80fd\u548c\u53ef\u7ef4\u62a4\u6027\u7684\u89d2\u5ea6\u6765\u6743\u8861\u3002\u5bf9\u4e8e\u547d\u4ee4\u5f0f\u4ee3\u7801\u6765\u8bf4\uff0c\u5df2\u7ecf\u662f\u505a\u5230\u6781\u81f4\u7684\u6027\u80fd\u4f18\u5316\u4e86\uff0c\u56e0\u4e3a\u6211\u4eec\u660e\u786e\u77e5\u9053\u54ea\u4e9b\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u53ea\u9700\u8981\u505a\u51fa\u4fee\u6539\u5c31\u884c\u3002"),(0,a.kt)("p",null,"\u800c\u58f0\u660e\u5f0f\u4ee3\u7801\u5c31\u4e0d\u4e00\u5b9a\u4e86\uff0c\u56e0\u4e3a\u5b83\u6240\u63cf\u8ff0\u7684\u662f\u4e00\u4e2a\u7ed3\u679c\u3002\u5bf9\u4e8e\u58f0\u660e\u5f0fUI\u6846\u67b6\u6765\u8bf4\uff0c\u5728\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u6027\u80fd\u8fbe\u5230\u6700\u4f18\uff0c\u5c31\u9700\u8981\u627e\u5230\u524d\u540e\u7684\u5dee\u5f02\u5e76\u4e14\u53ea\u66f4\u65b0\u53d8\u5316\u7684\u90e8\u5206\uff0c\u67e5\u627e\u524d\u540e\u5dee\u5f02\u4e5f\u662f\u6d88\u8017\u6027\u80fd\u7684\u3002\u548c\u547d\u4ee4\u5f0fUI\u6846\u67b6\u76f8\u6bd4\u8f83\uff0c\u58f0\u660e\u5f0fUI\u6846\u67b6\u5c31\u591a\u51fa\u4e86\u67e5\u627e\u5dee\u5f02\u8fd9\u90e8\u5206\u7684\u6027\u80fd\u3002\u4f46\u662f\uff0c\u58f0\u660e\u5f0f\u4ee3\u7801\u66f4\u5229\u4e8e\u7ef4\u62a4\u3002\u5728\u58f0\u660e\u5f0f\u4ee3\u7801\u4e2d\uff0c\u5c06\u6027\u80fd\u8c03\u5230\u6700\u4f18\uff0c\u66f4\u63a5\u8fd1\u63a5\u8fd1\u547d\u4ee4\u5f0f\u4ee3\u7801\u7684\u6027\u80fd\uff0c\u5c31\u662f\u5c06\u67e5\u627e\u5dee\u5f02\u8fd9\u90e8\u5206\u7684\u6027\u80fd\u964d\u5230\u6700\u4f4e\uff0c\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u865a\u62dfDOM\uff0c\u5c31\u662f\u4e3a\u4e86\u5c06\u67e5\u627e\u5dee\u5f02\u90e8\u5206\u7684\u6027\u80fd\u6700\u5c0f\u5316\u3002"),(0,a.kt)("h2",{id:"\u865a\u62dfdom"},"\u865a\u62dfDOM"),(0,a.kt)("p",null,"\u865a\u62dfDOM\u5728\u8f6c\u5316\u4e3a\u771f\u5b9eDOM\u7684\u8fc7\u7a0b\u4e2d\u5206\u4e3a\u4e24\u90e8\u5206\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u521b\u5efaJavaScript\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u865a\u62dfDOM\u3010\u56e0\u4e3a\u865a\u62dfDOM\u5c31\u662f\u63cf\u8ff0\u771f\u5b9eDOM\u3011\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u904d\u5386\u865a\u62dfDOM\u6765\u521b\u5efa\u771f\u5b9eDOM\u3002")),(0,a.kt)("p",null,"\u9700\u8981\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u91cd\u65b0\u521b\u5efa\u4e00\u4e2aJavaScript\u5bf9\u8c61\uff0c\u7136\u540e\u6bd4\u8f83\u524d\u540e\u865a\u62dfDOM\uff0c\u627e\u5230\u53d8\u5316\u7684\u5143\u7d20\u5e76\u4e14\u66f4\u65b0\u5b83\u3002"),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u66f4\u65b0\u9875\u9762\u8fd8\u6709\u4e24\u79cd\u65b9\u5f0f\uff1ainnerHTML\u548c\u539f\u751fjs\u3010\u6bd4\u5982createElement\u4e4b\u7c7b\u7684DOM\u64cd\u4f5c\u65b9\u6cd5\u3011"),(0,a.kt)("h2",{id:"innerhtml\u6a21\u677f"},"innerHTML\u6a21\u677f"),(0,a.kt)("p",null,"innerHTML\u662f\u7528\u6765\u6216\u8005\u6216\u8005\u8bbe\u7f6eHTML\u8bed\u6cd5\u8868\u793a\u7684\u5143\u7d20\u7684\u540e\u4ee3\u3002\u5728\u521b\u5efa\u4e00\u4e2a\u9875\u9762\u7684\u65f6\u5019\uff0c\u9700\u8981\u6784\u9020\u4e00\u6bb5HTML\u5b57\u7b26\u4e32\u3001\u518d\u5c06\u8fd9\u6bb5HTML\u5b57\u7b26\u4e32\u8d4b\u503c\u7ed9DOM\u5143\u7d20\u7684innerHTML\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5c06\u8fd9\u6bb5html\u5b57\u7b26\u4e32\u6e32\u67d3\u6210\u9875\u9762\uff0c\u9996\u5148\u9700\u8981\u628a\u5b57\u7b26\u4e32\u89e3\u6790\u4e3aDOM\u6811\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u6d89\u53ca\u5230DOM\u7684\u8ba1\u7b97\uff0c\u6027\u80fd\u8fdc\u8fdc\u6bd4JavaScript\u8ba1\u7b97\u7684\u6027\u80fd\u5dee\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528innerHTML\u66f4\u65b0\u9875\u9762\uff0c\u5176\u5b9e\u5c31\u662f\u91cd\u65b0\u6784\u5efaHTML\u5b57\u7b26\u4e32\uff0c\u518d\u91cd\u65b0\u8bbe\u7f6eDOM\u5143\u7d20\u7684innerHTML\u5c5e\u6027\uff0c\u4e5f\u5c31\u662f\u9700\u8981\u9500\u6bc1\u6240\u6709\u65e7\u7684DOM\u5143\u7d20\uff0c\u7136\u540e\u518d\u5168\u91cf\u521b\u5efa\u65b0\u7684DOM\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u865a\u62dfDOM\u6765\u8bf4\uff0c\u4e0d\u7ba1\u9875\u9762\u6709\u591a\u5927\uff0c\u90fd\u53ea\u4f1a\u66f4\u65b0\u53d8\u5316\u7684\u5185\u5bb9\uff1b\u5bf9\u4e8einnerHTML\u6765\u8bf4\uff0c\u9875\u9762\u8d8a\u5927\uff0c\u66f4\u65b0\u65f6\u6027\u80fd\u6d88\u8017\u5c31\u8d8a\u5927\u3002"),(0,a.kt)("h2",{id:"\u539f\u751fjavascript\u64cd\u4f5cdom"},"\u539f\u751fJavaScript\u64cd\u4f5cDOM"),(0,a.kt)("p",null,"\u6027\u80fd\u9ad8\uff0c\u4f46\u662f\u53ef\u7ef4\u62a4\u6027\u6781\u5dee\u3002\u56e0\u4e3a\u9700\u8981\u624b\u52a8\u521b\u5efa\u3001\u5220\u9664\u3001\u4fee\u6539\u5927\u91cf\u7684DOM\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u4e09\u79cd\u65b9\u5f0f\u7684\u6bd4\u8f83\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/5e98e945be1a4b3cb979222de7f82b8e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}s.isMDXComponent=!0}}]);