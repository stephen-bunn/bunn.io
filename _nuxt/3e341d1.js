(window.webpackJsonp=window.webpackJsonp||[]).push([[16,23],{414:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(12),l=(n(117),n(29),n(35),n(27),n(44),n(28),n(45),n(415)),c=n.n(l),d=n(418),f=n.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=r.a.extend({props:{start:{type:String,required:!0},end:{type:String,default:null},format:{type:String,default:"MMM YYYY"},separator:{type:String,default:" - "},options:{type:Object,default:function(){}}},computed:{workPeriod:function(){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MMM YYYY",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:" - ";return[c()(t).format(n),e?c()(e).format(n):null].filter((function(t){return Boolean(t)})).join(r)}(this.start,this.end,this.format,this.separator)},workDuration:function(){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(e?c()(e):c()()).diff(t),o=f()(r,v(v({},{delimiter:" ",round:!0,units:["y","mo"]}),n));return e?o:"".concat(o," ago")}(this.start,this.end,this.options)}}}),h=n(8),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:{content:t.workDuration,classes:"bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md"},expression:"{\n    content: workDuration,\n    classes: 'bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md',\n  }",modifiers:{right:!0}}],staticClass:"TimePeriod w-max cursor-pointer text-gray-500 md:self-center"},[t._v("\n  "+t._s(t.workPeriod)+"\n")])}),[],!1,null,null,null);e.default=component.exports},428:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(415),l=n.n(o),c=n(36),d=n(414),f=r.a.extend({components:{Link:c.default,TimePeriod:d.default},props:{publication:{type:Object,required:!0}},computed:{releaseDate:function(){return l()(this.publication.releaseDate).format("MMM DD YYYY")}}}),m=n(8),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ResumePublication"},[n("Link",{staticClass:"font-serif text-2xl",attrs:{to:t.publication.website,target:"_blank"}},[t._v("\n    "+t._s(t.publication.name)+"\n  ")]),t._v(" "),n("div",{staticClass:"mb-4"},[t._v("\n    Published by "+t._s(t.publication.publisher)+" on\n    "),n("TimePeriod",{attrs:{start:t.publication.releaseDate,format:"MMM DD YYYY"}})],1),t._v(" "),n("div",[t._v("\n    "+t._s(t.publication.summary)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Link:n(36).default,TimePeriod:n(414).default})}}]);