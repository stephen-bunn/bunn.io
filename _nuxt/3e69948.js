(window.webpackJsonp=window.webpackJsonp||[]).push([[27,21],{416:function(e,t,n){"use strict";var r=n(14),o=n(5),l=n(118),c=n(19),m=n(15),d=n(57),f=n(253),R=n(84),h=n(252),w=n(3),v=n(58),S=n(85).f,k=n(40).f,y=n(18).f,C=n(254).trim,_="Number",E=o.Number,x=E.prototype,I=d(v(x))==_,N=function(e){if(R(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,o,l,c,m,code,d=h(e,"number");if("string"==typeof d&&d.length>2)if(43===(t=(d=C(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,m=0;m<c;m++)if((code=l.charCodeAt(m))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(l(_,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,L=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof L&&(I?w((function(){x.valueOf.call(n)})):d(n)!=_)?f(new E(N(t)),n,L):N(t)},F=r?S(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;F.length>P;P++)m(E,A=F[P])&&!m(L,A)&&y(L,A,k(E,A));L.prototype=x,x.constructor=L,c(o,_,L)}},419:function(e,t,n){"use strict";n.r(t);n(416);var r=n(0),o=n(56),l=r.a.extend({components:{Icon:o.default},props:{tooltip:{type:String,default:"Back to top"},foldPercentage:{type:Number,default:30}},data:function(){return{isActive:!1}},computed:{activeClasses:function(){return this.isActive?"opacity-100":"opacity-0 cursor-default"}},mounted:function(){this.handleScroll()},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isActive=window.scrollY>window.screen.height*(this.foldPercentage/100)},handleClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}}),c=n(8),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:{content:e.tooltip,classes:"mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs"},expression:"{\n    content: tooltip,\n    classes: 'mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs',\n  }",modifiers:{left:!0}}],staticClass:"\n    ScrollFab\n    p-4\n    bg-blue-500\n    text-white\n    rounded-full\n    fixed\n    bottom-8\n    right-8\n    md:right-16\n    transition-opacity\n    shadow-lg\n  ",class:e.activeClasses,attrs:{disabled:!e.isActive},on:{click:e.handleClick}},[n("Icon",{attrs:{name:"arrow-up"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(56).default})},456:function(e,t,n){"use strict";n.r(t);var r=n(6),o=(n(46),n(0)),l=n(444),c=n(419),m=o.a.extend({components:{ResumeWork:l.ResumeWork,ResumeSummary:l.ResumeSummary,ResumeSection:l.ResumeSection,ResumeAward:l.ResumeAward,ResumeContact:l.ResumeContact,ResumePublication:l.ResumePublication,ResumeEducation:l.ResumeEducation,ResumeSkill:l.ResumeSkill,ResumeLanguage:l.ResumeLanguage,ResumeHero:l.ResumeHero,ScrollFab:c.default},layout:"default",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$resume,t.next=3,n.get();case 3:return r=t.sent,t.abrupt("return",{resume:r});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{resume:null}},head:function(){return{title:"Stephen Bunn - Resume"}},mounted:function(){this.$anime({targets:".ResumeHero",easing:"easeOutExpo",translateY:[-100,0],opacity:[0,1],duration:1500,direction:"normal"}),this.$anime({targets:".ResumeContent",easing:"easeOutExpo",translateY:[100,0],opacity:[0,1],duration:1500,direction:"normal"})}}),d=n(8),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"ResumePage"},[n("ResumeHero",{staticClass:"mb-8 md:mb-16",attrs:{basics:e.resume.basics}}),e._v(" "),n("div",{staticClass:"ResumeContent flex flex-col lg:flex-row lg:space-x-16"},[n("div",{staticClass:"ResumeContent_Left lg:w-3/5"},[n("ResumeSection",{attrs:{heading:"About",icon:"user"}},[n("ResumeSummary",{attrs:{basics:e.resume.basics}})],1),e._v(" "),n("ResumeSection",{attrs:{heading:"Work",icon:"briefcase"}},e._l(e.resume.work,(function(e,t){return n("ResumeWork",{key:"resume-work-"+t,staticClass:"my-8",attrs:{work:e}})})),1),e._v(" "),n("ResumeSection",{attrs:{heading:"Publications",icon:"bookmark"}},e._l(e.resume.publications,(function(e,t){return n("ResumePublication",{key:"publication-"+t,attrs:{publication:e}})})),1),e._v(" "),n("ResumeSection",{attrs:{heading:"Awards",icon:"award"}},e._l(e.resume.awards,(function(e,t){return n("ResumeAward",{key:"award-"+t,attrs:{award:e}})})),1)],1),e._v(" "),n("div",{staticClass:"ResumeContent_Right lg:w-2/5"},[n("ResumeSection",{attrs:{heading:"Contact",icon:"at-sign"}},[n("ResumeContact",{attrs:{basics:e.resume.basics}})],1),e._v(" "),n("ResumeSection",{attrs:{heading:"Languages",icon:"globe"}},e._l(e.resume.languages,(function(e){return n("ResumeLanguage",{key:e.language,attrs:{language:e}})})),1),e._v(" "),n("ResumeSection",{attrs:{heading:"Education",icon:"book-open"}},e._l(e.resume.education,(function(e,t){return n("ResumeEducation",{key:"education-"+t,staticClass:"mb-8",attrs:{education:e}})})),1),e._v(" "),n("ResumeSection",{attrs:{heading:"Skills",icon:"thumbs-up"}},e._l(e.resume.skills,(function(e,t){return n("ResumeSkill",{key:"skill-"+t,staticClass:"mb-8",attrs:{skill:e}})})),1)],1)]),e._v(" "),n("ScrollFab")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ResumeHero:n(435).default,ResumeSummary:n(430).default,ResumeSection:n(429).default,ResumeWork:n(431).default,ResumePublication:n(428).default,ResumeAward:n(426).default,ResumeContact:n(427).default,ResumeLanguage:n(432).default,ResumeEducation:n(433).default,ResumeSkill:n(434).default,ScrollFab:n(419).default})}}]);