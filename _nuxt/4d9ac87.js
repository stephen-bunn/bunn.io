(window.webpackJsonp=window.webpackJsonp||[]).push([[28,4,5,7,11,12,24,25,26],{418:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(11),l=(n(118),n(24),n(36),n(28),n(44),n(29),n(45),n(419)),c=n.n(l),d=n(422),f=n.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=r.a.extend({props:{start:{type:String,required:!0},end:{type:String,default:null},format:{type:String,default:"MMM YYYY"},separator:{type:String,default:" - "},options:{type:Object,default:function(){}}},computed:{workPeriod:function(){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MMM YYYY",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:" - ";return[c()(t).format(n),e?c()(e).format(n):null].filter((function(t){return Boolean(t)})).join(r)}(this.start,this.end,this.format,this.separator)},workDuration:function(){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(e?c()(e):c()()).diff(t),o=f()(r,h(h({},{delimiter:" ",round:!0,units:["y","mo"]}),n));return e?o:"".concat(o," ago")}(this.start,this.end,this.options)}}}),x=n(7),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:{content:t.workDuration,classes:"bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md"},expression:"{\n    content: workDuration,\n    classes: 'bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md',\n  }",modifiers:{right:!0}}],staticClass:"TimePeriod w-max cursor-pointer text-gray-500 md:self-center"},[t._v("\n  "+t._s(t.workPeriod)+"\n")])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";var r=n(14),o=n(5),l=n(119),c=n(19),d=n(15),f=n(57),m=n(255),h=n(86),v=n(254),x=n(3),y=n(58),_=n(87).f,w=n(40).f,C=n(18).f,M=n(256).trim,E="Number",k=o.Number,O=k.prototype,P=f(y(O))==E,j=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,l,c,d,code,f=v(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=M(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(E,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var B,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(P?x((function(){O.valueOf.call(n)})):f(n)!=E)?m(new k(j(e)),n,I):j(e)},N=r?_(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;N.length>S;S++)d(k,B=N[S])&&!d(I,B)&&C(I,B,w(k,B));I.prototype=O,O.constructor=I,c(o,E,I)}},423:function(t,e,n){"use strict";n.r(e);var r=n(88),o=(n(46),n(0)),l=n(35),c=o.a.extend({components:{Link:l.default},props:{toc:{type:Array,required:!0},indent:{type:String,default:"16px"}},computed:{minTocDepth:function(){return 0===this.toc.length?0:Math.min.apply(Math,Object(r.a)(this.toc.map((function(t){return t.depth}))))}},mounted:function(){this.$anime({targets:".BlogToc_Item",easing:"easeOutExpo",opacity:[0,1],duration:1500,direction:"normal",delay:function(t,e){return 50*e}})}}),d=n(7),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BlogToc"},[n("div",{staticClass:"text-serif text-xs uppercase text-gray-500"},[t._v("\n    Table of Contents\n  ")]),t._v(" "),n("hr",{staticClass:"my-2 border-gray-300"}),t._v(" "),t._l(t.toc,(function(e){return n("div",{key:e.id,staticClass:"BlogToc_Item my-1",style:"margin-left: calc("+t.indent+" * "+(e.depth-t.minTocDepth)+");"},[n("Link",{staticClass:"text-gray-500 hover:text-gray-700",attrs:{to:"#"+e.id}},[t._v("\n      "+t._s(e.text)+"\n    ")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Link:n(35).default})},424:function(t,e,n){"use strict";n.r(e);n(420);var r=n(0),o=n(56),l=r.a.extend({components:{Icon:o.default},props:{tooltip:{type:String,default:"Back to top"},foldPercentage:{type:Number,default:30}},data:function(){return{isActive:!1}},computed:{activeClasses:function(){return this.isActive?"opacity-100":"opacity-0 cursor-default"}},mounted:function(){this.handleScroll()},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isActive=window.scrollY>window.screen.height*(this.foldPercentage/100)},handleClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}}),c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:{disabled:!t.isActive,content:t.tooltip,classes:"mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs "+(t.isActive?"opacity-100":"opacity-0")},expression:"{\n    disabled: !isActive,\n    content: tooltip,\n    classes: `mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs ${\n      isActive ? 'opacity-100' : 'opacity-0'\n    }`,\n  }",modifiers:{left:!0}}],staticClass:"\n    ScrollFab\n    p-4\n    bg-blue-500\n    text-white\n    rounded-full\n    fixed\n    bottom-8\n    right-8\n    md:right-16\n    transition-opacity\n    shadow-lg\n  ",class:t.activeClasses,attrs:{disabled:!t.isActive},on:{click:t.handleClick}},[n("Icon",{attrs:{name:"arrow-up"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(56).default})},426:function(t,e,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("19529598",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(419),l=n.n(o),c=n(418),d=r.a.extend({components:{TimePeriod:c.default},props:{document:{type:Object,required:!0}},computed:{createdAt:function(){return l()(this.document.createdAt).format("YYYY-MM-DD")}},methods:{handleClick:function(){this.$router.push("/blog/".concat(this.document.slug))}}}),f=(n(428),n(7)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"\n    BlogEntry\n    bg-gray-50\n    mx-auto\n    rounded-lg\n    overflow-hidden\n    cursor-pointer\n    transition-shadow\n    duration-700\n    shadow-xl\n    hover:shadow-2xl\n    md:max-h-72\n  ",on:{click:t.handleClick,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClick.apply(null,arguments)}}},[n("div",{staticClass:"BlogEntry_Content md:flex"},[t.document.tileImage?n("div",{staticClass:"BlogEntry_Media md:flex-shrink-0"},[n("img",{staticClass:"w-full h-full max-h-64 md:max-h-72 md:w-96 object-cover",attrs:{src:t.document.tileImage}})]):t._e(),t._v(" "),n("div",{staticClass:"p-8"},[t.document.title?n("div",{staticClass:"font-serif font-bold text-3xl"},[t._v("\n        "+t._s(t.document.title)+"\n      ")]):t._e(),t._v(" "),n("TimePeriod",{attrs:{start:t.createdAt,options:{units:["y","mo","d"]},format:"MMM DD YYYY"}}),t._v(" "),t.document.excerpt?n("div",{staticClass:"BlogEntry_Excerpt pt-4 h-40 overflow-hidden"},[n("nuxt-content",{attrs:{document:{body:t.document.excerpt}}})],1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TimePeriod:n(418).default})},428:function(t,e,n){"use strict";n(426)},429:function(t,e,n){var r=n(70)((function(i){return i[1]}));r.push([t.i,".BlogEntry_Excerpt{mask-image:linear-gradient(180deg,#fff,transparent);-webkit-mask-image:linear-gradient(180deg,#fff,transparent)}",""]),r.locals={},t.exports=r},454:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{value:{type:String,required:!0}},data:function(){return{model:null}},watch:{model:function(t){this.$emit("input",t)}}}),o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"Search font-bold p-4 rounded-md bg-gray-50",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.model},on:{input:function(e){e.target.composing||(t.model=e.target.value)}}})}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,n){"use strict";n.r(e);n(420);var r=n(0),o=n(56),l=r.a.extend({components:{Icon:o.default},props:{value:{type:Number,required:!0},minimum:{type:Number,default:1},maximum:{type:Number,default:null}},data:function(){return{page:0}},computed:{isMinimum:function(){return this.page<=this.minimum},isMaximum:function(){return!!this.maximum&&this.page>=this.maximum},leftClasses:function(){return this.isMinimum?"text-gray-300":"text-black"},rightClasses:function(){return this.isMaximum?"text-gray-300":"text-black"}},mounted:function(){this.page=this.value},methods:{updatePage:function(t){var e=this.page+t;e<this.minimum||(this.page=e,this.$emit("input",this.page))}}}),c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Pagination flex"},[n("button",{staticClass:"Pagination_Left px-2 py-4 md:p-4 bg-gray-50 rounded-l-md",class:t.leftClasses,attrs:{disabled:t.isMinimum},on:{click:function(e){return t.updatePage(-1)}}},[n("Icon",{attrs:{name:"chevron-left"}})],1),t._v(" "),n("div",{staticClass:"Pagination_Number px-2 py-4 md:p-4 bg-gray-50"},[n("div",{staticClass:"font-bold text-lg w-8 outline-none text-center"},[t._v("\n      "+t._s(t.page)+"\n    ")])]),t._v(" "),n("button",{staticClass:"Pagination_Right px-2 py-4 md:p-4 bg-gray-50 rounded-r-md",class:t.rightClasses,attrs:{disabled:t.isMaximum},on:{click:function(e){return t.updatePage(1)}}},[n("Icon",{attrs:{name:"chevron-right"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(56).default})},456:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(56),l=r.a.extend({components:{Icon:o.default},props:{text:{type:String,default:null},value:{type:Boolean,default:!0}},data:function(){return{model:!0}},computed:{iconName:function(){return this.model?"arrow-down":"arrow-up"}},mounted:function(){this.model=this.value},methods:{handleToggle:function(){this.model=!this.model,this.$emit("input",this.model)}}}),c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Ordering flex min-h-16"},[n("div",{staticClass:"\n      font-serif font-bold\n      text-lg\n      px-2\n      py-4\n      self-center\n      md:p-4\n      uppercase\n      rounded-l-md\n      bg-gray-50\n    "},[t._v("\n    "+t._s(t.text||"Sort")+"\n  ")]),t._v(" "),n("button",{staticClass:"px-2 py-4 md:py-4 md:pr-4 rounded-r-md bg-gray-50",on:{click:t.handleToggle}},[n("Icon",{attrs:{name:t.iconName}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(56).default})},458:function(t,e,n){"use strict";n.r(e);var r=n(427);n.d(e,"BlogEntry",(function(){return r.default}));var o=n(423);n.d(e,"BlogToc",(function(){return o.default}))},471:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(41),n(122),n(47),n(0)),l=n(458),c=n(454),d=n(455),f=n(456),m=n(424),h=o.a.extend({components:{BlogEntry:l.BlogEntry,Search:c.default,Pagination:d.default,Ordering:f.default,ScrollFab:m.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").fetch();case 3:return r=e.sent.length,e.abrupt("return",{total:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{searchModel:"",paginationModel:1,paginationMaximum:1,orderingModel:!0,perPage:10,total:0,blogEntries:[],searchTotal:0}},watch:{searchModel:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").search(t.searchModel).fetch();case 2:return t.searchTotal=e.sent.length,e.next=5,t.updateBlogEntries();case 5:case"end":return e.stop()}}),e)})))()},paginationModel:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateBlogEntries();case 2:case"end":return e.stop()}}),e)})))()},orderingModel:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateBlogEntries();case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateBlogEntries();case 2:t.$anime({targets:[".Blog_BlogControls",".Blog_BlogEntry"],easing:"easeOutExpo",opacity:[0,1],duration:1500,direction:"normal",delay:function(t,e){return 100*e}});case 3:case"end":return e.stop()}}),e)})))()},methods:{updatePaginationMaximum:function(){var t=Math.ceil((this.searchModel.length>0?this.searchTotal:this.total)/this.perPage);t<=0&&(t=1),this.paginationMaximum=t},updateBlogEntries:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").search(t.searchModel).sortBy(t.orderingModel?"-createdAt":"createdAt").limit(t.perPage).skip(t.perPage*(t.paginationModel-1)).fetch();case 2:n=e.sent,t.blogEntries=Array.isArray(n)?n:[n],t.updatePaginationMaximum();case 5:case"end":return e.stop()}}),e)})))()}}}),v=n(7),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"Blog"},[n("div",{staticClass:"\n      Blog_BlogControls\n      opacity-0\n      mb-8\n      flex flex-col\n      md:flex-row\n      justify-between\n    "},[n("Search",{staticClass:"mb-2 md:mb-0 w-full md:w-72",model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}}),t._v(" "),n("div",{staticClass:"flex justify-between md:justify-end"},[n("Pagination",{staticClass:"md:mr-4",attrs:{maximum:t.paginationMaximum},model:{value:t.paginationModel,callback:function(e){t.paginationModel=e},expression:"paginationModel"}}),t._v(" "),n("Ordering",{model:{value:t.orderingModel,callback:function(e){t.orderingModel=e},expression:"orderingModel"}})],1)],1),t._v(" "),t.blogEntries.length>0?n("div",{staticClass:"Blog_BlogEntries"},t._l(t.blogEntries,(function(t){return n("BlogEntry",{key:t.slug,staticClass:"Blog_BlogEntry mb-8",attrs:{document:t,tabindex:"0"}})})),1):t.searchModel.length>0?n("div",{staticClass:"font-serif font-bold text-gray-400 text-5xl uppercase"},[t._v("\n    No blog entries found\n  ")]):t._e(),t._v(" "),n("ScrollFab")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:n(454).default,Pagination:n(455).default,Ordering:n(456).default,BlogEntry:n(427).default,ScrollFab:n(424).default})}}]);