"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={},o="\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",c={unversionedId:"Java/leetcode/src/BinaryTree/\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",id:"Java/leetcode/src/BinaryTree/\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",title:"\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",description:"https://leetcode-cn.com/problems/unique-binary-search-trees/",source:"@site/docs/Java/leetcode/src/BinaryTree/96-\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811.md",sourceDirName:"Java/leetcode/src/BinaryTree",slug:"/Java/leetcode/src/BinaryTree/\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/BinaryTree/96-\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811.md",tags:[],version:"current",sidebarPosition:96,frontMatter:{},sidebar:"sidebars",previous:{title:"\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811 II",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811 II"},next:{title:"\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/BinaryTree/\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811"}},l={},p=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u7b2c\u4e00\u60f3\u6cd5:\u5361\u7279\u5170\u6570\uff08\u4f4e\u6548\uff0c\u4e0d\u63a8\u8350\uff09",id:"\u7b2c\u4e00\u60f3\u6cd5\u5361\u7279\u5170\u6570\u4f4e\u6548\u4e0d\u63a8\u8350",level:2},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811"},"\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/unique-binary-search-trees/"},"https://leetcode-cn.com/problems/unique-binary-search-trees/")),(0,a.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n \uff0c\u6c42\u6070\u7531 n \u4e2a\u8282\u70b9\u7ec4\u6210\u4e14\u8282\u70b9\u503c\u4ece 1 \u5230 n \u4e92\u4e0d\u76f8\u540c\u7684 \u4e8c\u53c9\u641c\u7d22\u6811 \u6709\u591a\u5c11\u79cd\uff1f\u8fd4\u56de\u6ee1\u8db3\u9898\u610f\u7684\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u79cd\u6570\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u60f3\u6cd5\u5361\u7279\u5170\u6570\u4f4e\u6548\u4e0d\u63a8\u8350"},"\u7b2c\u4e00\u60f3\u6cd5:\u5361\u7279\u5170\u6570\uff08\u4f4e\u6548\uff0c\u4e0d\u63a8\u8350\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public int numTrees(int n) {\n        if ( n == 1 )\n            return 1;\n        if ( n == 0 )\n            return 0;\n        return Integer.valueOf(Catalan(n));\n    }\n\n    private String Catalan(int n) {\n        BigInteger t = BigInteger.valueOf(1), b = BigInteger.valueOf(1);\n        for (int i = 2 * n; i > n; i--) {\n            BigInteger bi = BigInteger.valueOf(i);\n            t = t.multiply(bi);\n            System.out.println("t " + t.toString());\n        }\n        for (int i = n; i > 0; i--) {\n            BigInteger bi = BigInteger.valueOf(i);\n            b = b.multiply(bi);\n            System.out.println("b " + b.toString());\n        }\n        String ansStr = t.divide(b).divide(BigInteger.valueOf(n + 1)).toString();\n        return ansStr;\n    }\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\u6267\u884c\u7528\u65f6\uff1a\n        8 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e867.26%\u7684\u7528\u6237\n\u5185\u5b58\u6d88\u8017\uff1a\n        38.5 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e865.01%\u7684\u7528\u6237\n")),(0,a.kt)("h2",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public int numTrees(int n) {\n        int[] dp = new int[n + 1];\n        dp[0] = 1;\n        dp[1] = 1;\n\n        for( int i = 2; i < n + 1; i++) {\n            for ( int j = 1; j < i + 1; j++) {\n                dp[i] += dp[j - 1] * dp[i - j];\n            }\n        }\n        return dp[n];\n    }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6267\u884c\u7528\u65f6\uff1a\n    0 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86100.00%\u7684\u7528\u6237\n\u5185\u5b58\u6d88\u8017\uff1a\n    38.4 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e865.28%\u7684\u7528\u6237\n")))}u.isMDXComponent=!0}}]);