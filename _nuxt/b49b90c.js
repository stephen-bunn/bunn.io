(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{110:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(157),l=r.a.extend({components:{NavigationItem:o.default},props:{left:{type:Array,default:function(){return[]}},right:{type:Array,default:function(){return[]}}}}),c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex place-content-between"},[n("div",{staticClass:"InternalNavigation flex"},t._l(t.left,(function(e,r){return n("NavigationItem",t._b({key:"nav-left-"+r,class:0===r?"rounded-br-lg":"rounded-b-lg"},"NavigationItem",e,!1))})),1),t._v(" "),n("div",{staticClass:"ExternalNavigation flex"},t._l(t.right,(function(e,r){return n("NavigationItem",t._b({key:"nav-right-"+r},"NavigationItem",e,!1))})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationItem:n(157).default})},157:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(56),l=n(35),c=r.a.extend({components:{Icon:o.default,Link:l.default},props:{to:{type:String,required:!0},label:{type:String,default:null},icon:{type:String,default:null}},computed:{isActive:function(){return this.$navigation.isActive(this.to,this.$route.fullPath)},navitemClasses:function(){return{"bg-gray-300 text-black":this.isActive,"bg-transparent text-gray-400":!this.isActive}}}}),f=n(7),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Link",{staticClass:"\n    NavigationItem\n    flex\n    px-4\n    py-5\n    space-x-2\n    transition-colors\n    duration-700\n    hover:text-black\n  ",class:t.navitemClasses,attrs:{to:t.to}},[t.icon?n("Icon",{attrs:{name:t.icon}}):t._e(),t._v(" "),t.label?n("span",{staticClass:"font-bold font-serif uppercase self-center"},[t._v("\n    "+t._s(t.label)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(56).default,Link:n(35).default})},162:function(t,e,n){"use strict";n(219);var r=n(67),o=n(114),l=n(116),c=n(43),f=n(115),d=(n(16),n(24),n(41),n(147),n(0));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=[{to:"/blog",disabled:!0,icon:"book-open",label:"Blog"},{to:"/resume",icon:"bookmark",label:"Resume"}],h=[{to:"https://linkedin.com/in/stephen-bunn",icon:"linkedin",target:"_blank"},{to:"https://github.com/stephen-bunn",icon:"github",target:"_blank"}];Error;function x(path){return path.split("/").filter((function(t){return t.length>0}))}d.a.use({install:function(t,e){t.prototype.$navigation={get:function(){return{internal:m.filter((function(t){return!(null==t?void 0:t.disabled)})),external:h.filter((function(t){return!(null==t?void 0:t.disabled)}))}},isActive:function(t,e){return x(t)[0]===x(e)[0]}}}})},163:function(t,e,n){"use strict";n(219);var r=n(6),o=n(67),l=n(114),c=n(116),f=n(43),d=n(115);n(47),n(16);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t){Object(l.a)(n,t);var e=v(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).message=t,r.name="ResumePluginError",r}return n}(Object(d.a)(Error));e.a=function(t){t.$resume={get:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("resume").fetch();case 2:if(n=e.sent,Array.isArray(n)&&0!==n.length){e.next=5;break}throw new m("Invalid amount of resumes discovered, expected 1 found ".concat(n.length));case 5:return e.abrupt("return",n[0]);case 6:case"end":return e.stop()}}),e)})))()}}}},164:function(t,e,n){"use strict";var r=n(0),o=n(244);r.a.use(o.a)},199:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("8d9ec890",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";var r=n(0),o=n(56),l=n(35),c=r.a.extend({components:{Icon:o.default,Link:l.default}}),f=n(7),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BlogLayout min-h-screen bg-gray-200 px-8 md:px-16"},[n("div",{staticClass:"BlogLayout_Navigation py-8"},[n("Link",{staticClass:"inline-flex font-serif font-bold uppercase text-xl",attrs:{to:"/blog"}},[n("Icon",{staticClass:"mr-2",attrs:{name:"arrow-left"}}),t._v("\n      Back to blog\n    ")],1)],1),t._v(" "),n("div",{staticClass:"md:mx-auto md:max-w-3xl"},[n("Nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Icon:n(56).default,Link:n(35).default})},251:function(t,e,n){"use strict";var r=n(0),o=n(110),l=r.a.extend({components:{Navigation:o.default},data:function(){return{internal:null,external:null}},created:function(){var nav=this.$navigation.get();this.internal=nav.internal,this.external=nav.external}}),c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DefaultLayout min-h-screen bg-gray-200"},[n("Navigation",{attrs:{left:t.internal,right:t.external}}),t._v(" "),n("div",{staticClass:"p-8 lg:mx-auto lg:max-w-5xl"},[n("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navigation:n(110).default})},252:function(t,e,n){"use strict";n(24);var r=n(0).a.extend({data:function(){return{internal:null}},created:function(){var nav=this.$navigation.get();this.internal=nav.internal.filter((function(t){return"/blog"===t.to}))}}),o=(n(305),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"NoneLayout bg-gray-200"},[n("Navigation",{staticClass:"absolute z-10",attrs:{left:t.internal}}),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navigation:n(110).default})},253:function(t,e,n){"use strict";var r=n(7),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"\n    CenteredLayout\n    flex\n    items-center\n    justify-center\n    min-h-screen\n    bg-gray-200\n  "},[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},260:function(t,e,n){n(261),t.exports=n(262)},282:function(t,e,n){"use strict";n.r(e);e.default=function(t){(0,t.redirect)("/resume")}},301:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("313740de",content,!0,{sourceMap:!1})},302:function(t,e,n){var r=n(71)((function(i){return i[1]}));r.push([t.i,"*{scrollbar-width:thin;scrollbar-color:#3b82f6 #e5e7eb}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background:#e5e7eb}::-webkit-scrollbar-thumb{background-color:#3b82f6;border-radius:0;border:0 solid #e5e7eb}",""]),r.locals={},t.exports=r},305:function(t,e,n){"use strict";n(199)},306:function(t,e,n){var r=n(71)((function(i){return i[1]}));r.push([t.i,".NoneLayout{min-height:100vh}",""]),r.locals={},t.exports=r},35:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(41),n(122),n(0).a.extend({props:{to:{type:String,required:!0}},computed:{isExternal:function(){return"string"==typeof this.to&&-1===this.to.search(/()^\/|^#/g)},isNative:function(){return this.isExternal||!this.$router},componentTag:function(){var t=this.$nuxt?"NuxtLink":"RouterLink";return this.isNative?"a":t},componentAttributes:function(){return Object(r.a)({},this.isNative?"href":"to",this.to)}}})),l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.componentTag,t._g(t._b({tag:"component",staticClass:"\n    Link\n    text-blue-500\n    hover:text-blue-700\n    transition-colors\n    duration-500\n  "},"component",t.componentAttributes,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},42:function(t,e,n){"use strict";var r=n(0),o=n(35),l=r.a.extend({components:{Link:o.default},layout:"centered",props:{error:{type:Object,required:!0}},computed:{statusCode:function(){return this.error.statusCode||null},message:function(){return this.error.message||"An error occured"}},mounted:function(){this.$anime({targets:[".ErrorPage_Content",".ErrorPage_Navigation"],easing:"easeOutExpo",opacity:[0,1],duration:1500,delay:function(t,e){return 500*e},direction:"normal"})}}),c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"ErrorPage text-center"},[n("div",{staticClass:"ErrorPage_Content opacity-0"},[t.statusCode?n("div",{staticClass:"font-serif font-bold text-gray-400 text-8xl uppercase"},[t._v("\n      "+t._s(t.statusCode)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"font-serif font-bold text-gray-400 text-8xl uppercase"},[t._v("\n      "+t._s(t.message)+"\n    ")])]),t._v(" "),n("div",{staticClass:"ErrorPage_Navigation opacity-0"},[n("Link",{staticClass:"font-serif font-bold text-4xl",attrs:{to:"/"}},[t._v(" Go Home ")])],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Link:n(35).default})},56:function(t,e,n){"use strict";n.r(e);n(16);var r=n(0).a.extend({props:{name:{type:String,required:!0}},computed:{svg:function(){var t,e;return null===(e=null===(t=this.$feathericons)||void 0===t?void 0:t[this.name])||void 0===e?void 0:e.toSvg()}}}),o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.svg?n("div",{staticClass:"Icon",domProps:{innerHTML:t._s(t.svg)}}):t._e()}),[],!1,null,null,null);e.default=component.exports}},[[260,31,3,32]]]);