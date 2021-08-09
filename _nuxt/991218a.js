(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6,23],{414:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(12),l=(r(117),r(29),r(35),r(27),r(44),r(28),r(45),r(415)),c=r.n(l),d=r(418),f=r.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=n.a.extend({props:{start:{type:String,required:!0},end:{type:String,default:null},format:{type:String,default:"MMM YYYY"},separator:{type:String,default:" - "},options:{type:Object,default:function(){}}},computed:{workPeriod:function(){return function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MMM YYYY",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:" - ";return[c()(t).format(r),e?c()(e).format(r):null].filter((function(t){return Boolean(t)})).join(n)}(this.start,this.end,this.format,this.separator)},workDuration:function(){return function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(e?c()(e):c()()).diff(t),o=f()(n,v(v({},{delimiter:" ",round:!0,units:["y","mo"]}),r));return e?o:"".concat(o," ago")}(this.start,this.end,this.options)}}}),x=r(8),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:{content:t.workDuration,classes:"bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md"},expression:"{\n    content: workDuration,\n    classes: 'bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md',\n  }",modifiers:{right:!0}}],staticClass:"TimePeriod w-max cursor-pointer text-gray-500 md:self-center"},[t._v("\n  "+t._s(t.workPeriod)+"\n")])}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,r){"use strict";r.r(e);var n=r(8),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"\n    Chip\n    font-sans\n    text-white text-xs text-center\n    px-2\n    py-1\n    bg-blue-500\n    rounded-full\n    self-center\n  "},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("399911f1",content,!0,{sourceMap:!1})},431:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(36),l=r(414),c=r(417),d=n.a.extend({components:{Link:o.default,Chip:c.default,TimePeriod:l.default},props:{work:{type:Object,required:!0}},computed:{isCurrent:function(){var t;return!(null===(t=this.work)||void 0===t?void 0:t.endDate)}}}),f=(r(436),r(8)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ResumeWork"},[r("div",{staticClass:"ResumeWork_Heading"},[r("div",{staticClass:"ResumeWork_Position flex"},[r("h3",{staticClass:"font-serif text-2xl"},[t._v(t._s(t.work.position))]),t._v(" "),t.isCurrent?r("Chip",{staticClass:"ml-2"},[t._v("Current")]):t._e()],1),t._v(" "),r("div",{staticClass:"ResumeWork_Subheading flex flex-col md:flex-row"},[r("Link",{attrs:{to:t.work.website}},[t._v("\n        "+t._s(t.work.company)+"\n      ")]),t._v(" "),r("TimePeriod",{staticClass:"ResumeWork_TimePeriod text-xs md:ml-2 underline",attrs:{start:t.work.startDate,end:t.work.endDate||null}})],1)]),t._v(" "),r("div",{staticClass:"ResumeWork_Content mt-4"},[r("p",[t._v(t._s(t.work.summary))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Chip:r(417).default,Link:r(36).default,TimePeriod:r(414).default})},436:function(t,e,r){"use strict";r(425)},437:function(t,e,r){var n=r(86)((function(i){return i[1]}));n.push([t.i,".ResumeWork_TimePeriod{-webkit-text-decoration-style:dotted;text-decoration-style:dotted}",""]),n.locals={},t.exports=n}}]);