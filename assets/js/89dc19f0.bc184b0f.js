"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),v=r,f=p["".concat(o,".").concat(v)]||p[v]||u[v]||l;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<l;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const l={},a="\u56de\u6587\u94fe\u8868",s={unversionedId:"Java/leetcode/src/LinkedList/\u56de\u6587\u94fe\u8868",id:"Java/leetcode/src/LinkedList/\u56de\u6587\u94fe\u8868",title:"\u56de\u6587\u94fe\u8868",description:"https://leetcode.cn/problems/palindrome-linked-list/",source:"@site/docs/Java/leetcode/src/LinkedList/234-\u56de\u6587\u94fe\u8868.md",sourceDirName:"Java/leetcode/src/LinkedList",slug:"/Java/leetcode/src/LinkedList/\u56de\u6587\u94fe\u8868",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/LinkedList/\u56de\u6587\u94fe\u8868",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/LinkedList/234-\u56de\u6587\u94fe\u8868.md",tags:[],version:"current",sidebarPosition:234,frontMatter:{},sidebar:"sidebars",previous:{title:"\u53cd\u8f6c\u94fe\u8868",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/LinkedList/\u53cd\u8f6c\u94fe\u8868"},next:{title:"\u529b\u6263\u94fe\u8868\u4e13\u9898\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/LinkedList/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6"}},o={},d=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u60f3\u6cd51\uff1a\u5feb\u6162\u6307\u9488+\u53cd\u8f6c\u94fe\u8868",id:"\u60f3\u6cd51\u5feb\u6162\u6307\u9488\u53cd\u8f6c\u94fe\u8868",level:2},{value:"\u60f3\u6cd52\uff1a\u53cc\u6307\u9488",id:"\u60f3\u6cd52\u53cc\u6307\u9488",level:2},{value:"\u60f3\u6cd53\uff1a\u9012\u5f52",id:"\u60f3\u6cd53\u9012\u5f52",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u56de\u6587\u94fe\u8868"},"\u56de\u6587\u94fe\u8868"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/palindrome-linked-list/"},"https://leetcode.cn/problems/palindrome-linked-list/")),(0,r.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5355\u94fe\u8868\u7684\u5934\u8282\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," \uff0c\u8bf7\u4f60\u5224\u65ad\u8be5\u94fe\u8868\u662f\u5426\u4e3a\u56de\u6587\u94fe\u8868\u3002\u5982\u679c\u662f\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u3002"),(0,r.kt)("h2",{id:"\u60f3\u6cd51\u5feb\u6162\u6307\u9488\u53cd\u8f6c\u94fe\u8868"},"\u60f3\u6cd51\uff1a\u5feb\u6162\u6307\u9488+\u53cd\u8f6c\u94fe\u8868"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u9898\u6709\u4e00\u4e2a\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\u662f\uff0c\u6700\u540e\u5bf9\u6bd4\u7684\u65f6\u5019\u8981\u4ee5\u4e0a\u534a\u90e8\u5206\u7684\u957f\u5ea6\u8fdb\u884cwhile\u8fd8\u662f\u4e0b\u534a\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public boolean isPalindrome(ListNode head) {\n        if (head.next == null) return true;\n\n        ListNode slow = head, fast = head.next;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        ListNode tmp = slow.next;\n        slow.next = null;\n        ListNode h = reverseList(tmp);\n        slow = head;\n        while (h != null) {\n            if (slow.val != h.val) return false;\n            slow = slow.next;\n            h = h.next;\n        }\n        return true;\n    }\n\n    private ListNode reverseList(ListNode head) {\n        if (head == null || head.next == null) return head;\n\n        ListNode ans = head;\n        head = head.next;\n        ans.next = null;\n\n        ListNode pre;\n        while (head != null) {\n            pre = head;\n            head = head.next;\n            pre.next = ans;\n            ans = pre;\n        }\n        \n        return ans;\n    }\n}\n")),(0,r.kt)("h2",{id:"\u60f3\u6cd52\u53cc\u6307\u9488"},"\u60f3\u6cd52\uff1a\u53cc\u6307\u9488"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2aLinkedList\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"li"},"list")),(0,r.kt)("li",{parentName:"ul"},"\u628a\u5143\u7d20\u90fd\u904d\u5386\u8fdb\u53bb ",(0,r.kt)("inlineCode",{parentName:"li"},"while (head != null)")),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7LinkedList\u9996\u5c3e\u5224\u65ad",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list.size() > 1 "),"\u662f\u6392\u9664\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u548c\u6ca1\u6709\u5143\u7d20\u7684\u60c5\u51b5")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public boolean isPalindrome(ListNode head) {\n        LinkedList<Integer> list = new LinkedList<>();\n        while (head != null) {\n            list.addLast(head.val);\n            head = head.next;\n        }\n        while (list.size() > 1) {\n            if (list.pollFirst() != list.pollLast()) return false;\n        }\n        return true;\n    }\n}\n")),(0,r.kt)("h2",{id:"\u60f3\u6cd53\u9012\u5f52"},"\u60f3\u6cd53\uff1a\u9012\u5f52"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u662f\u6211\u6ca1\u60f3\u5230\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    ListNode front;\n    private boolean recursivelyCheck(ListNode cur) {\n        if(cur != null) {\n            if(!recursivelyCheck(cur.next)) {\n                return false;\n            }\n            if(front.val != cur.val) {\n                return false;\n            }\n            front = front.next;\n        }\n        \n        return true;\n    }\n    public boolean isPalindrome(ListNode head) {\n        front = head;\n        return recursivelyCheck(head);\n    }\n}\n")))}u.isMDXComponent=!0}}]);