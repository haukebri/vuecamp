(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,v=[];u<i.length;u++)o=i[u],r[o]&&v.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function o(t){return i.p+"js/"+({location:"location",privacy:"privacy",sponsors:"sponsors",terms:"terms",tickets:"tickets"}[t]||t)+"."+{location:"1d75fd1f",privacy:"980a7393",sponsors:"2a6e19bd",terms:"15d05882",tickets:"31deba69"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}r[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"026a":function(t,e,n){},"14d0":function(t,e,n){t.exports=n.p+"img/berlin.28c53007.png"},"180c":function(t,e,n){"use strict";var a=n("026a"),r=n.n(a);r.a},"21bb":function(t,e,n){"use strict";var a=n("bcc9"),r=n.n(a);r.a},"2a25":function(t,e,n){"use strict";var a=n("789f"),r=n.n(a);r.a},"3ed6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vc-navbar"),n("router-view"),n("vc-footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("b-navbar",{attrs:{toggleable:"lg"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logo-small",attrs:{src:n("d80e"),alt:"VueCamp Berlin 2019"}}),a("span",[t._v(" 26 - 27 October ")])])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{staticClass:"justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{href:"#tickets"}},[t._v("Tickets")]),a("b-nav-item",{attrs:{href:"#sponsors"}},[t._v("Sponsors")]),a("b-nav-item",{attrs:{href:"#tickets"}},[t._v("Location")])],1)],1)],1)],1)])])])},i=[],c={name:"vc-navbar",data:function(){return{}}},l=c,u=(n("ccb2"),n("2877")),p=Object(u["a"])(l,o,i,!1,null,"328c98a7",null),v=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrap mt-5 relative"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-12"},[n("footer",[n("nav",{staticClass:"d-flex justify-content-center",attrs:{id:"footer-nav"}},[n("router-link",{attrs:{to:"/terms"}},[t._v("Impressum")]),n("router-link",{attrs:{to:"/privacy"}},[t._v("Privacy")])],1)])])])])])},f=[],m={name:"vc-footer"},b=m,h=(n("2a25"),Object(u["a"])(b,d,f,!1,null,"d463a264",null)),g=h.exports,_={components:{"vc-navbar":v,"vc-footer":g}},y=_,w=(n("5c0b"),Object(u["a"])(y,r,s,!1,null,null,null)),C=w.exports,k=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("header-teaser",{staticClass:"container"}),t._m(0),t._m(1),t._m(2)],1)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-grey py-5 relative",attrs:{id:"barcamp"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"men"},[a("img",{attrs:{src:n("85da"),alt:""}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[a("h2",[t._v("What is a barcamp")]),a("p",[t._v("\n            You got the basic idea: A barcamp is community driven and everyone\n            can step up with a topic. But how does it work exactly? Let’s\n            break the event down into smaller chunks.\n            "),a("br"),a("br"),t._v("\n            First, you introduce yourself to everyone else using only three\n            words. The goal here is not to recognize a hundred people, but to\n            get a general idea of what knowledgebase and topics we have.\n            "),a("br"),a("br"),t._v("\n            After that everyone is encouraged to propose a topic to fill\n            today's session plan.\n            "),a("br"),a("br"),t._v("\n            These sessions are then scheduled and divided into the available\n            rooms.\n            "),a("br"),a("br"),t._v("\n            That’s it. The fun begins. 🎉 You are free to attend any session\n            and share your knowledge, meet people and engage others.\n          ")])]),a("div",{staticClass:"col-md-5 offset-md-2"},[a("h2",[t._v("Attending")]),a("p",[t._v("\n            Become a vuecamp advocate by telling others!\n            "),a("a",{attrs:{href:"https://twitter.com/search?q=%23vuecamp"}},[t._v("#vuecamp")])]),a("p",[t._v("\n            Just to get everything covered, we invided some people from\n            different communities like Nuxt, vue-storefront or codesandbox.\n          ")]),a("a",{staticClass:"twitter-hashtag-button",attrs:{href:"https://twitter.com/intent/tweet?button_hashtag=vuecamp&ref_src=twsrc%5Etfw","data-size":"large","data-show-count":"false"}},[t._v("Tweet #vuecamp")]),a("a",{staticClass:"twitter-timeline",attrs:{href:"https://twitter.com/VueCamp_de?ref_src=twsrc%5Etfw"}},[t._v("Tweets by VueCamp_de")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-5 container centered",attrs:{id:"sponsors"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2"},[a("h2",[t._v("Sponsors")]),a("p",[t._v("\n          Barcamps are organized by the community and wouldn’t be possible\n          without sponsors. In this respect, the vuecamp also needs your\n          support and we very much appreciate your commitment.\n        ")]),a("p",[t._v("\n          To become a sponsor, please contact Hauke Brinkmann\n          (h.brinkmann@reply.de). "),a("br"),t._v("Possible sponsorings: "),a("br"),a("b",[t._v("Bronze")]),t._v(": 100"),a("br"),a("b",[t._v("Silver")]),t._v(": 500"),a("br"),a("b",[t._v("Gold")]),t._v(": 1000\n        ")]),a("h3",{staticClass:"mt-5"},[t._v("Our Sponsors")]),a("p",[a("img",{staticClass:"sponsor sponsor-gold",attrs:{src:n("b1f0"),alt:"Portaltech Reply GmbH"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-grey py-5 relative",attrs:{id:"tickets"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[a("h2",[t._v("\n            Tickets\n          ")]),a("p",[t._v("\n            We will start the ticket sale very soon.\n          ")]),a("p",[t._v("\n            If you want to stay up to date you can follow our twitter account\n            "),a("a",{attrs:{target:"_blank",href:"https://twitter.com/VueCamp_de"}},[t._v("@VueCamp_de")]),t._v(".\n          ")])]),a("div",{staticClass:"col-md-5 offset-md-2"},[a("h2",[t._v("Location")]),a("p",[t._v("\n            The barcamp will take place in the GLS Campus berlin.\n          ")]),a("p",[a("b",[t._v("GLS CAMPUS BERLIN")]),a("br"),t._v("\n            Kastanienallee 82 "),a("br"),t._v("\n            10435 Berlin Prenzlauer Berg"),a("br")]),a("a",{attrs:{href:"https://gls-campus-berlin.de/",target:"_blank"}},[t._v("gls-campus-berlin.de")]),a("br"),a("a",{attrs:{href:"https://goo.gl/maps/wJ4FdPcgcax",target:"_blank"}},[t._v("Link to maps"),a("br"),a("img",{attrs:{src:n("14d0"),alt:"Map of Berlin"}})]),a("h4",{staticClass:"mt-4"},[t._v("Parking")]),a("p",[t._v("\n            GLS cannot provide enough parking space for all participants. You\n            can park either on the GLS campus (15€ per day) or at the Hotel\n            Oderberger (25€ per day). Both parking spaces require prior\n            registration with the provider. We recommend travelling by public\n            transport.\n          ")])])])])])}],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-teaser"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10 offset-md-1"},[n("logo")],1)]),n("div",{staticClass:"row mt-big"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h1",[t._v("\n        Vue.JS Barcamp Berlin\n      ")]),t._m(0),t._m(1),n("a",{attrs:{href:"#tickets"}},[n("b-button",{attrs:{variant:"outline-success",size:"lg"}},[t._v("Get a ticket")])],1)]),n("div",{staticClass:"col-md-6"})])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("Experience two thrilling days of learning, community and\n          contribution.")]),t._v("\n        A barcamp is not just another passive listening conference. Instead,\n        you and everyone else is asked to share their ideas, lead a workshop\n        or give a talk. The vuecamp is structured like a barcamp. Well, what’s\n        a barcamp you ask? We’ll dive into that 👉"),n("a",{attrs:{href:"#barcamp"}},[t._v("here")]),t._v(".\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("I am hooked, let's get together on "),n("b",[t._v("26 - 27 October!")]),n("br")])}],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{staticClass:"logo",attrs:{src:n("9b19"),alt:"Vuecamp 2019 Logo"}})},P=[],S={name:"logo"},B=S,L=Object(u["a"])(B,T,P,!1,null,null,null),$=L.exports,G={name:"headerteaser",components:{Logo:$},data:function(){return{}}},V=G,z=(n("180c"),Object(u["a"])(V,O,E,!1,null,"4cf7ac76",null)),A=z.exports,I={name:"home",components:{HeaderTeaser:A}},M=I,H=(n("21bb"),Object(u["a"])(M,x,j,!1,null,null,null)),J=H.exports;a["default"].use(k["a"]);var W=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:J},{path:"/tickets",name:"tickets",component:function(){return n.e("tickets").then(n.bind(null,"d464"))}},{path:"/location",name:"location",component:function(){return n.e("location").then(n.bind(null,"8e3a"))}},{path:"/privacy",name:"privacy",component:function(){return n.e("privacy").then(n.bind(null,"6f9f"))}},{path:"/terms",name:"terms",component:function(){return n.e("terms").then(n.bind(null,"bd91"))}},{path:"/sponsors",name:"sponsors",component:function(){return n.e("sponsors").then(n.bind(null,"2ee0"))}}]}),q=n("9f7b"),Y=n.n(q);n("de82");a["default"].use(Y.a),a["default"].config.productionTip=!1,new a["default"]({router:W,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},"789f":function(t,e,n){},"85da":function(t,e,n){t.exports=n.p+"img/men.332476f6.png"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.55473722.svg"},b1f0:function(t,e,n){t.exports=n.p+"img/pttlogo.3cb32e97.png"},bcc9:function(t,e,n){},ccb2:function(t,e,n){"use strict";var a=n("3ed6"),r=n.n(a);r.a},d80e:function(t,e,n){t.exports=n.p+"img/logo_single.c6034c62.svg"},de82:function(t,e,n){}});
//# sourceMappingURL=app.5c5966be.js.map