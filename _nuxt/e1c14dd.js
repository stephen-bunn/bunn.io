(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{416:function(t,e,n){"use strict";var o=n(14),r=n(5),l=n(118),c=n(19),d=n(15),f=n(57),h=n(253),m=n(84),w=n(252),v=n(3),I=n(58),N=n(85).f,E=n(40).f,y=n(18).f,A=n(254).trim,S="Number",x=r.Number,C=x.prototype,_=f(I(C))==S,k=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,o,r,l,c,d,code,f=w(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=A(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,o)}return+f};if(l(S,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var F,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(_?v((function(){C.valueOf.call(n)})):f(n)!=S)?h(new x(k(e)),n,T):k(e)},L=o?N(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;L.length>M;M++)d(x,F=L[M])&&!d(T,F)&&y(T,F,E(x,F));T.prototype=C,C.constructor=T,c(r,S,T)}},419:function(t,e,n){"use strict";n.r(e);n(416);var o=n(0),r=n(56),l=o.a.extend({components:{Icon:r.default},props:{tooltip:{type:String,default:"Back to top"},foldPercentage:{type:Number,default:30}},data:function(){return{isActive:!1}},computed:{activeClasses:function(){return this.isActive?"opacity-100":"opacity-0 cursor-default"}},mounted:function(){this.handleScroll()},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isActive=window.scrollY>window.screen.height*(this.foldPercentage/100)},handleClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}}),c=n(8),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:{content:t.tooltip,classes:"mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs"},expression:"{\n    content: tooltip,\n    classes: 'mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs',\n  }",modifiers:{left:!0}}],staticClass:"\n    ScrollFab\n    p-4\n    bg-blue-500\n    text-white\n    rounded-full\n    fixed\n    bottom-8\n    right-8\n    md:right-16\n    transition-opacity\n    shadow-lg\n  ",class:t.activeClasses,attrs:{disabled:!t.isActive},on:{click:t.handleClick}},[n("Icon",{attrs:{name:"arrow-up"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(56).default})}}]);