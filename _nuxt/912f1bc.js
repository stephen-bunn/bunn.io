(window.webpackJsonp=window.webpackJsonp||[]).push([[24,7,21,23],{414:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(12),l=(n(113),n(34),n(35),n(27),n(41),n(28),n(42),n(415)),c=n.n(l),f=n(418),d=n.n(f);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=r.a.extend({props:{start:{type:String,required:!0},end:{type:String,default:null},format:{type:String,default:"MMM YYYY"},separator:{type:String,default:" - "},options:{type:Object,default:function(){}}},computed:{workPeriod:function(){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MMM YYYY",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:" - ";return[c()(t).format(n),e?c()(e).format(n):null].filter((function(t){return Boolean(t)})).join(r)}(this.start,this.end,this.format,this.separator)},workDuration:function(){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(e?c()(e):c()()).diff(t),o=d()(r,h(h({},{delimiter:" ",round:!0,units:["y","mo"]}),n));return e?o:"".concat(o," ago")}(this.start,this.end,this.options)}}}),v=n(10),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:{content:t.workDuration,classes:"bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md"},expression:"{\n    content: workDuration,\n    classes: 'bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md',\n  }",modifiers:{right:!0}}],staticClass:"TimePeriod w-max cursor-pointer text-gray-500 md:self-center"},[t._v("\n  "+t._s(t.workPeriod)+"\n")])}),[],!1,null,null,null);e.default=component.exports},416:function(t,e,n){"use strict";var r=n(14),o=n(5),l=n(114),c=n(19),f=n(15),d=n(55),C=n(250),h=n(84),m=n(249),v=n(3),x=n(56),w=n(85).f,y=n(39).f,_=n(18).f,O=n(251).trim,I="Number",N=o.Number,P=N.prototype,E=d(x(P))==I,M=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,l,c,f,code,d=m(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=O(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(l(I,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var S,j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(E?v((function(){P.valueOf.call(n)})):d(n)!=I)?C(new N(M(e)),n,j):M(e)},A=r?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;A.length>k;k++)f(N,S=A[k])&&!f(j,S)&&_(j,S,y(N,S));j.prototype=P,P.constructor=j,c(o,I,j)}},419:function(t,e,n){"use strict";n.r(e);n(416);var r=n(0),o=n(53),l=r.a.extend({components:{Icon:o.default},props:{tooltip:{type:String,default:"Back to top"},foldPercentage:{type:Number,default:30}},data:function(){return{isActive:!1}},computed:{activeClasses:function(){return this.isActive?"opacity-100":"opacity-0 cursor-default"}},mounted:function(){this.handleScroll()},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isActive=window.scrollY>window.screen.height*(this.foldPercentage/100)},handleClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}}),c=n(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:{content:t.tooltip,classes:"mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs"},expression:"{\n    content: tooltip,\n    classes: 'mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs',\n  }",modifiers:{left:!0}}],staticClass:"\n    ScrollFab\n    p-4\n    bg-blue-500\n    text-white\n    rounded-full\n    fixed\n    bottom-8\n    right-8\n    md:right-16\n    transition-opacity\n    shadow-lg\n  ",class:t.activeClasses,attrs:{disabled:!t.isActive},on:{click:t.handleClick}},[n("Icon",{attrs:{name:"arrow-up"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(53).default})},441:function(t,e,n){"use strict";n.r(e);n(416);var r=n(0).a.extend({props:{size:{type:Number,default:150}}}),o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:t.size,height:"358",viewBox:"0 0 732 358",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M377.119 54.3512C363.553 59.884 355.228 68.2445 352.765 79.102C351.51 84.6334 351.95 91.7657 354.414 100.541C356.861 109.255 361.136 119 366.859 129.43C373.313 141.194 381.428 153.507 390.388 165.784L378.1 81.8765C377.34 76.6852 380.932 71.8605 386.123 71.1002C391.315 70.34 396.139 73.9321 396.9 79.1234L413.516 192.588C449.678 203.25 485.039 215.697 518.625 227.519C540.213 235.117 561.068 242.458 580.931 248.901C585.273 250.309 589.573 251.677 593.83 252.998C596.092 246.199 597.014 239.069 596.521 231.628C595.141 210.796 584.482 192.322 557.927 177.336C530.805 162.031 487.495 150.68 422.244 145.47C417.733 145.11 414.103 141.618 413.567 137.125C413.031 132.632 415.738 128.385 420.037 126.974C426.645 124.805 433.656 122.688 440.76 120.544C455.24 116.173 470.104 111.687 482.722 106.401C492.076 102.483 498.93 98.6003 502.897 94.8479C506.559 91.3833 506.466 89.4822 505.963 87.9287C502.7 77.8621 493.204 68.4727 478.467 61.0969C463.927 53.8198 445.563 49.1875 427.097 47.915C408.582 46.6391 390.748 48.7927 377.119 54.3512ZM603.932 275.875C646.645 288.245 686.96 295.816 723.501 291.947C728.718 291.395 732.5 286.717 731.947 281.5C731.395 276.282 726.717 272.5 721.5 273.053C689.231 276.469 652.73 270.025 612.117 258.453C614.926 249.744 616.143 240.39 615.479 230.372C613.614 202.204 598.523 178.428 567.264 160.789C544.132 147.735 511.981 137.902 469.183 131.586C476.507 129.166 483.638 126.617 490.063 123.926C499.936 119.79 509.411 114.84 515.955 108.65C522.802 102.171 527.585 93.0178 524.037 82.0712C518.55 65.1378 503.921 52.5897 486.971 44.1061C469.823 35.5239 448.937 30.3749 428.403 28.9599C407.918 27.5483 387.002 29.801 369.944 36.7581C352.822 43.741 338.522 56.0054 334.236 74.8979C332.03 84.6166 333.172 95.1717 336.122 105.677C339.089 116.245 344.059 127.375 350.201 138.57C358.658 153.982 369.604 169.997 381.367 185.477C333.354 177.403 273.821 175.98 223.62 182.069C193.814 185.684 166.487 192.037 146.604 201.726C127.178 211.192 111.453 225.728 113.027 246.71C116.106 287.763 153.434 315.709 200.635 332.881C248.647 350.347 310.93 358.326 372.124 357.123C433.285 355.921 494.408 345.525 539.982 325.427C567.578 313.256 590.762 296.851 603.932 275.875ZM584.851 270.1C581.602 269.078 578.342 268.035 575.069 266.974C554.233 260.216 533.015 252.741 511.303 245.092C476.478 232.823 440.382 220.107 402.547 209.18C354.079 197.28 283.616 193.932 225.908 200.931C196.968 204.441 172.049 210.463 154.927 218.806C137.351 227.37 131.316 236.522 131.973 245.289C134.145 274.237 161.129 298.29 207.131 315.025C252.322 331.466 312.132 339.299 371.751 338.127C431.402 336.954 489.811 326.787 532.315 308.042C556.264 297.48 574.107 284.754 584.851 270.1Z",fill:"black"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M271.506 0.984057C275.224 -0.25043 279.318 0.923671 281.817 3.94077C309.593 37.4819 331.696 87.8 337.451 144.033C337.652 145.997 337.239 147.882 336.368 149.499C338.854 150.407 341.308 151.328 343.728 152.26C368.826 161.93 390.69 172.999 406.472 184.432C414.354 190.141 421.033 196.166 425.824 202.424C430.573 208.628 434 215.773 434 223.5C434 230.191 429.696 235.155 426.041 238.3C422.084 241.705 416.773 244.806 410.765 247.66C398.661 253.408 381.823 259.03 362.157 264.217C322.708 274.623 270.359 283.672 218.095 288.337C165.95 292.992 113.149 293.352 73.0523 286C53.0728 282.337 35.4022 276.615 22.4965 267.906C9.27285 258.982 0.5 246.444 0.5 230C0.5 216.603 5.63542 205.522 15.3104 196.561C24.5936 187.964 37.8034 181.533 53.8383 176.123C84.2466 165.865 128.6 158.123 185.368 148.213C188.333 147.695 191.332 147.172 194.364 146.642C199.533 145.738 204.455 149.196 205.358 154.364C206.262 159.533 202.804 164.455 197.636 165.358C195.033 165.813 192.459 166.263 189.913 166.707C131.925 176.835 88.8932 184.35 59.9117 194.127C44.8216 199.217 34.5939 204.599 28.2208 210.501C22.2396 216.041 19.5 222.147 19.5 230C19.5 238.556 23.6803 245.783 33.1246 252.157C42.8868 258.744 57.5991 263.85 76.4789 267.312C114.101 274.21 164.925 274.008 216.405 269.413C267.766 264.828 319.042 255.94 357.311 245.845C376.505 240.783 392.05 235.514 402.614 230.497C407.94 227.967 411.534 225.717 413.649 223.898C414.312 223.326 414.713 222.902 414.946 222.624C414.707 220.609 413.621 217.741 410.737 213.974C407.448 209.677 402.326 204.89 395.325 199.818C381.341 189.688 361.111 179.32 336.897 169.99C288.488 151.338 225.898 137.5 169.5 137.5C165.139 137.5 161.337 134.53 160.282 130.298C159.227 126.067 161.189 121.66 165.04 119.612C227.935 86.1676 262.796 53.3936 265.012 9.52082C265.21 5.60846 267.788 2.21854 271.506 0.984057ZM415.234 222.231C415.234 222.231 415.231 222.238 415.222 222.253C415.229 222.238 415.234 222.231 415.234 222.231ZM318.262 143.289C313.497 100.972 298.891 62.6777 280.128 33.753C270.091 68.4734 241.82 95.6213 202.74 119.917C242.291 123.186 282.703 131.857 318.262 143.289Z",fill:"black"}})])}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("40e026f2",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n(443)},446:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap);"]),r.push([t.i,'.nuxt-content h1,.nuxt-content h2,.nuxt-content h3,.nuxt-content h4,.nuxt-content h5,.nuxt-content h6{font-family:"Rajdhani",serif;font-weight:700;line-height:1;margin:.5rem 0}.nuxt-content h1{font-size:2.5rem}.nuxt-content h2{font-size:2rem}.nuxt-content h3,.nuxt-content h4,.nuxt-content h5,.nuxt-content h6{font-size:1.5rem}.nuxt-content .nuxt-content-highlight,.nuxt-content img{margin:1rem 0;border-radius:.5rem}',""]),r.locals={},t.exports=r},457:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),n(0)),l=n(441),c=n(419),f=n(414),d=o.a.extend({components:{Initials:l.default,ScrollFab:c.default,TimePeriod:f.default},layout:"blog",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog").where({slug:r.slug}).limit(1).fetch();case 3:return o=e.sent,e.abrupt("return",{document:Array.isArray(o)?o[0]:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{document:null}},mounted:function(){this.$anime({targets:".BlogPage",easing:"easeOutExpo",opacity:[0,1],duration:1500,direction:"normal"})}}),C=(n(445),n(10)),component=Object(C.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"BlogPage"},[n("div",{staticClass:"BlogPage_Heading mb-8"},[n("div",{staticClass:"font-serif font-bold text-6xl mb-2"},[t._v(t._s(t.document.title))]),t._v("\n    Published\n    "),n("TimePeriod",{attrs:{start:t.document.createdAt,format:"MMM DD YYYY hh:mm A",options:{units:["y","mo","h","m"]}}})],1),t._v(" "),n("div",{staticClass:"BlogPage_Content"},[n("nuxt-content",{attrs:{document:t.document}}),t._v(" "),n("Initials",{staticClass:"h-32"})],1),t._v(" "),n("ScrollFab")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TimePeriod:n(414).default,Initials:n(441).default,ScrollFab:n(419).default})}}]);