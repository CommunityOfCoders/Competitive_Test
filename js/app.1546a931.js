(function(t){function e(e){for(var s,i,c=e[0],n=e[1],l=e[2],p=0,u=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);f&&f(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,c=1;c<r.length;c++){var n=r[c];0!==a[n]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Competitive_Test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=n;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4839:function(t,e,r){"use strict";var s=r("9d2d"),a=r.n(s);a.a},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{dark:"",app:""}},[s("v-toolbar-title",{staticClass:"mr-2"},[s("img",{attrs:{src:r("c3c6"),height:"50"}})]),s("v-toolbar-title",{staticClass:"headline text-uppercase"},[s("span",[t._v("COC ")])]),s("v-spacer"),s("v-btn",{attrs:{text:"",dark:""}},[t._v("Competitive")])],1),s("v-content",[s("v-container",{staticClass:"pa-0",attrs:{fluid:"","fill-height":"","justify-center":""}},[s("router-view")],1)],1),s("PageFooter")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{dark:"",padless:"",height:"auto"}},[r("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[r("v-card-title",{staticClass:"black"},[r("strong",{staticClass:"subheading hidden-sm-and-down"},[t._v("Get connected with us on social networks!")]),r("v-spacer"),t._l(t.icons,function(e){return r("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})],2),r("v-divider"),r("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n      © "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("COC")])])],1)],1)},c=[],n={data:()=>({icons:["fab fa-facebook","fab fa-youtube","fab fa-instagram"]})},l=n,f=r("2877"),p=r("6544"),u=r.n(p),d=r("8336"),g=r("b0af"),m=r("99d9"),b=r("ce7e"),v=r("553a"),h=r("132d"),y=r("2fa4"),x=Object(f["a"])(l,i,c,!1,null,"6b915bd8",null),_=x.exports;u()(x,{VBtn:d["a"],VCard:g["a"],VCardActions:m["a"],VCardTitle:m["b"],VDivider:b["a"],VFooter:v["a"],VIcon:h["a"],VSpacer:y["a"]});var k={name:"App",components:{PageFooter:_},data:()=>({})},w=k,C=r("7496"),S=r("40dc"),E=r("a523"),O=r("a75b"),V=r("2a7f"),j=Object(f["a"])(w,a,o,!1,null,null,null),A=j.exports;u()(j,{VApp:C["a"],VAppBar:S["a"],VBtn:d["a"],VContainer:E["a"],VContent:O["a"],VSpacer:y["a"],VToolbarTitle:V["a"]});var M=r("8c4f"),D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bkg"},[s("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[s("img",{staticClass:"hidden-sm-and-down",attrs:{src:r("79f2"),alt:"Vuetify.js",height:"auto",width:"80%"}}),s("img",{staticClass:"hidden-md-and-up",attrs:{src:r("c3c6"),alt:"Vuetify.js",height:"200"}}),s("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("PRESENTS")]),s("div",{staticClass:"mb-3 text-xs-center ws"},[s("v-icon",{attrs:{dark:"","x-large":""}},[t._v("mdi-code-not-equal-variant")]),t._v(" Competitive Coding Workshop "),s("v-icon",{attrs:{dark:"","x-large":""}},[t._v("mdi-code-not-equal-variant")])],1)]),s("v-divider",{attrs:{dark:""}}),s("br"),t._m(0),s("v-layout",{staticClass:"white--text",attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{md6:""}},[s("v-simple-table",{staticClass:"table mt-4 mb-4"},[s("thead",[s("tr",[s("th",{staticClass:"text-center white--text"},[t._v("Arrays-Strings")]),s("th",{staticClass:"text-left white--text"},[t._v("Difficulty")]),s("th",{staticClass:"text-left white--text"},[t._v("Try Out")])])]),s("tbody",t._l(t.items1,function(e){return s("tr",{key:e.problem},[s("td",[t._v(t._s(e.problem))]),s("td",{class:e.color},[t._v(t._s(e.difficulty))]),s("td",[s("a",{attrs:{href:e.to,target:"_blank"}},[s("v-btn",[s("v-icon",[t._v("mdi-border-color")])],1)],1)])])}),0)])],1)],1),s("v-layout",{staticClass:"white--text",attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{md6:""}},[s("v-simple-table",{staticClass:"table mt-4 mb-4"},[s("thead",[s("tr",[s("th",{staticClass:"text-center white--text"},[t._v("Sorting-Greedy")]),s("th",{staticClass:"text-left white--text"},[t._v("Difficulty")]),s("th",{staticClass:"text-left white--text"},[t._v("Try Out")])])]),s("tbody",t._l(t.items2,function(e){return s("tr",{key:e.problem},[s("td",[t._v(t._s(e.problem))]),s("td",{class:e.color},[t._v(t._s(e.difficulty))]),s("td",[s("a",{attrs:{href:e.to,target:"_blank"}},[s("v-btn",[s("v-icon",[t._v("mdi-border-color")])],1)],1)])])}),0)])],1)],1),s("v-layout",{staticClass:"white--text",attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{md6:""}},[s("v-simple-table",{staticClass:"table mt-4 mb-4"},[s("thead",[s("tr",[s("th",{staticClass:"text-center white--text"},[t._v("Recursion")]),s("th",{staticClass:"text-left white--text"},[t._v("Difficulty")]),s("th",{staticClass:"text-left white--text"},[t._v("Try Out")])])]),s("tbody",t._l(t.items3,function(e){return s("tr",{key:e.problem},[s("td",[t._v(t._s(e.problem))]),s("td",{class:e.color},[t._v(t._s(e.difficulty))]),s("td",[s("a",{attrs:{href:e.to,target:"_blank"}},[s("v-btn",[s("v-icon",[t._v("mdi-border-color")])],1)],1)])])}),0)])],1)],1),s("v-layout",{staticClass:"white--text",attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{md6:""}},[s("v-simple-table",{staticClass:"table mt-4 mb-4"},[s("thead",[s("tr",[s("th",{staticClass:"text-center white--text"},[t._v("DP-HashTable")]),s("th",{staticClass:"text-left white--text"},[t._v("Difficulty")]),s("th",{staticClass:"text-left white--text"},[t._v("Try Out")])])]),s("tbody",t._l(t.items4,function(e){return s("tr",{key:e.problem},[s("td",[t._v(t._s(e.problem))]),s("td",{class:e.color},[t._v(t._s(e.difficulty))]),s("td",[s("a",{attrs:{href:e.to,target:"_blank"}},[s("v-btn",[s("v-icon",[t._v("mdi-border-color")])],1)],1)])])}),0)])],1)],1)],1)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"text-xs-left ws white--text ml-4"},[r("u",[t._v("Problems:")])])}],T={data(){return{items1:[{problem:"Check if a given string is Palindrome",difficulty:"SCHOOL",color:"primary--text",to:"https://practice.geeksforgeeks.org/problems/palindrome-string/0"},{problem:"Reverse a given string",difficulty:"SCHOOL",color:"primary--text",to:"https://practice.geeksforgeeks.org/problems/reverse-the-string/0"},{problem:"Reverse words in a given string",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string/0"},{problem:"Param Matching (w/o stack)",difficulty:"EASY",color:"success--text",to:"#"},{problem:"Pair with a given sum",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/key-pair/0"},{problem:"Sort array containing 0, 1, 2",difficulty:"MEDIUM",color:"warning--text",to:"https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0"},{problem:"Next greater (using stack)",difficulty:"MEDIUM",color:"warning--text",to:"https://practice.geeksforgeeks.org/problems/next-larger-element/0"},{problem:"Water trap\t",difficulty:"MEDIUM",color:"warning--text",to:"https://practice.geeksforgeeks.org/problems/trapping-rain-water/0"},{problem:"Circular tour",difficulty:"MEDIUM",color:"warning--text",to:"https://practice.geeksforgeeks.org/problems/circular-tour/1"}],items2:[{problem:"Coin Denomination",difficulty:"EASY",color:"success--text",to:"#"},{problem:"Are 2 Strings Anagram?",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/anagram/0"},{problem:"Join Ropes",difficulty:"MEDIUM",color:"warning--text",to:"https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0"}],items3:[{problem:"Binary Search",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/binary-search/1"},{problem:"Fast Exponentiation",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers/0"},{problem:"Square Root (Binary Search)",difficulty:"MEDIUM",color:"warning--text",to:"https://practice.geeksforgeeks.org/problems/square-root/1"}],items4:[{problem:"Nth Fibonacci",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/nth-fibonacci-number/0"},{problem:"Are 2 Strings Anagram? (DP)",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/anagram/0"},{problem:"Ways to climb a stair",difficulty:"EASY",color:"success--text",to:"https://practice.geeksforgeeks.org/problems/count-number-of-hops/0"},{problem:"Longest Increasing Subsequence",difficulty:"MEDIUM",color:"warning--text",to:"https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0"},{problem:"Word Break",difficulty:"HARD",color:"error--text",to:"https://practice.geeksforgeeks.org/problems/word-break/0"}]}}},Y=T,I=(r("4839"),r("0e8f")),B=r("a722"),F=r("1f4f"),R=Object(f["a"])(Y,D,P,!1,null,"3bfefd9e",null),U=R.exports;u()(R,{VBtn:d["a"],VDivider:b["a"],VFlex:I["a"],VIcon:h["a"],VLayout:B["a"],VSimpleTable:F["a"]}),s["a"].use(M["a"]);var q=new M["a"]({mode:"history",base:"/Competitive_Test/",routes:[{path:"/",name:"home",component:U}]}),$=r("f309");s["a"].use($["a"]);var H=new $["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,new s["a"]({router:q,vuetify:H,render:t=>t(A)}).$mount("#app")},"79f2":function(t,e,r){t.exports=r.p+"img/coclogowithname.24909e5f.png"},"9d2d":function(t,e,r){},c3c6:function(t,e,r){t.exports=r.p+"img/coc_logo.417ff2aa.png"}});
//# sourceMappingURL=app.1546a931.js.map