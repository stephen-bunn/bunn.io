import{n as $,p as O,s as z,q as e,v as S,x as j,y as f,z as g,A as I,B as k,C as L,c as A,D as d,F as T,E as N,j as p,G as w,H as C,I as x,J as B,K as D,L as r,M,g as q,O as F,P as H,Q as G,N as K}from"./entry.7b155ad5.js";import"./ContentSlot.acefa849.js";import"./DocumentDrivenEmpty.fd1f1f6b.js";import"./DocumentDrivenNotFound.7e952f07.js";import"./Markdown.18b89f0c.js";import"./ProseCode.b71556ef.js";const U=async t=>{let a=t;typeof(a==null?void 0:a.params)=="function"&&(a=a.params());const i=$(a?`/navigation/${O(a)}.json`:"/navigation");if(z())return(await e(()=>import("./client-db.c480dd01.js"),["client-db.c480dd01.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(_=>_.generateNavigation))(a||{});const u=await $fetch(i,{method:"GET",responseType:"json",params:{_params:S(a||{}),previewToken:j("previewToken").value}});if(typeof u=="string"&&u.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return u};const W=f({emits:{error(t){return!0}},setup(t,{slots:a,emit:i}){const u=g(null),o=I();return k(_=>{if(!o.isHydrating)return i("error",_),u.value=_,!1}),()=>{var _,n;return u.value?(_=a.error)==null?void 0:_.call(a,{error:u}):(n=a.default)==null?void 0:n.call(a)}}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),Q=f({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:a}){const i=g(!1);return L(()=>{i.value=!0}),u=>{var m;if(i.value)return(m=a.default)==null?void 0:m.call(a);const o=a.fallback||a.placeholder;if(o)return o();const _=u.fallback||u.placeholder||"",n=u.fallbackTag||u.placeholderTag||"span";return A(n,null,_)}}});function X(t){const{setup:a,render:i,template:u}=t;return i?t.render=(o,..._)=>{var n,m;return o.mounted$?d(T,null,[d(i(o,..._),(n=o.$attrs)!=null?n:o._.attrs)]):d("div",(m=o.$attrs)!=null?m:o._.attrs)}:u&&(t.template=`
      <template v-if="mounted$">${u}</template>
      <template v-else><div></div></template>
    `),f({...t,setup(o,_){const n=g(!1);return L(()=>{n.value=!0}),Promise.resolve((a==null?void 0:a(o,_))||{}).then(m=>typeof m!="function"?{...m,mounted$:n}:(...l)=>n.value?d(T,null,[d(m(...l),_.attrs)]):d("div",_.attrs))}})}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:X},Symbol.toStringTag,{value:"Module"})),Z=f({name:"ServerPlaceholder",render(){return A("div")}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=f({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const a=rt({duration:t.duration,throttle:t.throttle}),i=I();return i.hook("page:start",a.start),i.hook("page:finish",a.finish),N(()=>a.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${a.progress.value}%`,height:`${t.height}px`,opacity:a.isLoading.value?1:0,background:t.color,backgroundSize:`${100/a.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function rt(t){const a=g(0),i=g(!1),u=p(()=>1e4/t.duration);let o=null,_=null;function n(){l(),a.value=0,i.value=!0,t.throttle?_=setTimeout(E,t.throttle):E()}function m(){a.value=100,P()}function l(){clearInterval(o),clearTimeout(_),o=null,_=null}function v(c){a.value=Math.min(100,a.value+c)}function P(){l(),setTimeout(()=>{i.value=!1,setTimeout(()=>{a.value=0},400)},500)}function E(){o=setInterval(()=>{v(u.value)},100)}return{progress:a,isLoading:i,start:n,finish:m,clear:l}}const at=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),R={...D,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},ot=f({name:"NuxtPicture",props:R,setup:(t,a)=>{var P,E,c;const i=w(),u=C(t),o=p(()=>["png","webp","gif"].includes(_.value)),_=p(()=>x(t.src)),n=p(()=>t.format||_.value==="svg"?"svg":"webp"),m=p(()=>t.legacyFormat?t.legacyFormat:{webp:o.value?"png":"jpeg",svg:"png"}[n.value]||_.value),l=p(()=>n.value==="svg"?[{srcset:t.src}]:(m.value!==n.value?[m.value,n.value]:[n.value]).map(h=>{const{srcset:V,sizes:y,src:b}=i.getSizes(t.src,{...u.options.value,sizes:t.sizes||i.options.screens,modifiers:{...u.modifiers.value,format:h}});return{src:b,type:`image/${h}`,sizes:y,srcset:V}}));if(t.preload){const s=(P=l.value)!=null&&P[1]?1:0,h={rel:"preload",as:"image",imagesrcset:l.value[s].srcset};(c=(E=l.value)==null?void 0:E[s])!=null&&c.sizes&&(h.imagesizes=l.value[s].sizes),B({link:[h]})}const v={...t.imgAttrs};for(const s in a.attrs)s in D&&!(s in v)&&(v[s]=a.attrs[s]);return()=>{var s;return d("picture",{key:l.value[0].src},[...(s=l.value)!=null&&s[1]?[d("source",{type:l.value[1].type,sizes:l.value[1].sizes,srcset:l.value[1].srcset})]:[],d("img",{...u.attrs.value,...v,src:l.value[0].src,sizes:l.value[0].sizes,srcset:l.value[0].srcset})])}}}),it=Object.freeze(Object.defineProperty({__proto__:null,pictureProps:R,default:ot},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./ALink.89c0ece3.js"),["ALink.89c0ece3.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Chip.5888681c.js"),["Chip.5888681c.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FeatherIcon.eb3151f7.js"),["FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Navigation.8ed52178.js"),["Navigation.8ed52178.js","NavigationHeader.7d893d68.js","NavigationItem.f2b5f0d8.js","FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./NavigationHeader.7d893d68.js"),["NavigationHeader.7d893d68.js","NavigationItem.f2b5f0d8.js","FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./NavigationItem.f2b5f0d8.js"),["NavigationItem.f2b5f0d8.js","FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./TimePeriod.ec18fa19.js"),["TimePeriod.ec18fa19.js","index.641fecc0.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./PostDetails.68764f68.js"),["PostDetails.68764f68.js","FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css","PostTag.a5eed3f0.js","index.641fecc0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./PostEmptyState.95712d03.js"),["PostEmptyState.95712d03.js","FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./PostEntry.1e7907a7.js"),["PostEntry.1e7907a7.js","ALink.89c0ece3.js","entry.7b155ad5.js","entry.f5a776da.css","PostDetails.68764f68.js","FeatherIcon.eb3151f7.js","PostTag.a5eed3f0.js","index.641fecc0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./PostFooter.16fe10c6.js"),["PostFooter.16fe10c6.js","ALink.89c0ece3.js","entry.7b155ad5.js","entry.f5a776da.css","useConstants.0ef0bd18.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./PostTag.a5eed3f0.js"),["PostTag.a5eed3f0.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumeAwards.f1c91a63.js"),["ResumeAwards.f1c91a63.js","TimePeriod.ec18fa19.js","index.641fecc0.js","entry.7b155ad5.js","entry.f5a776da.css","ResumeSection.4b5f7a36.js","FeatherIcon.eb3151f7.js","useResume.2f3044f0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumeEducation.af94afc1.js"),["ResumeEducation.af94afc1.js","TimePeriod.ec18fa19.js","index.641fecc0.js","entry.7b155ad5.js","entry.f5a776da.css","ResumeSection.4b5f7a36.js","FeatherIcon.eb3151f7.js","useResume.2f3044f0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumeExperience.3325f7b8.js"),["ResumeExperience.3325f7b8.js","ALink.89c0ece3.js","entry.7b155ad5.js","entry.f5a776da.css","TimePeriod.ec18fa19.js","index.641fecc0.js","ResumeSection.4b5f7a36.js","FeatherIcon.eb3151f7.js","useResume.2f3044f0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumeHero.8898dea4.js"),["ResumeHero.8898dea4.js","ALink.89c0ece3.js","entry.7b155ad5.js","entry.f5a776da.css","FeatherIcon.eb3151f7.js","useResume.2f3044f0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumePublications.95564f93.js"),["ResumePublications.95564f93.js","ALink.89c0ece3.js","entry.7b155ad5.js","entry.f5a776da.css","TimePeriod.ec18fa19.js","index.641fecc0.js","ResumeSection.4b5f7a36.js","FeatherIcon.eb3151f7.js","useResume.2f3044f0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumeSection.4b5f7a36.js"),["ResumeSection.4b5f7a36.js","FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumeSkills.32e6b95f.js"),["ResumeSkills.32e6b95f.js","Chip.5888681c.js","entry.7b155ad5.js","entry.f5a776da.css","ResumeSection.4b5f7a36.js","FeatherIcon.eb3151f7.js","useResume.2f3044f0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ResumeSummary.aa6c122e.js"),["ResumeSummary.aa6c122e.js","ResumeSection.4b5f7a36.js","FeatherIcon.eb3151f7.js","entry.7b155ad5.js","entry.f5a776da.css","useResume.2f3044f0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.ap),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.ar),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.ao),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.an),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.am),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.acefa849.js"),["ContentSlot.acefa849.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.fd1f1f6b.js"),["DocumentDrivenEmpty.fd1f1f6b.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.7e952f07.js"),["DocumentDrivenNotFound.7e952f07.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.18b89f0c.js"),["Markdown.18b89f0c.js","ContentSlot.acefa849.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.fd898408.js"),["ProseA.fd898408.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.a98e6fd2.js"),["ProseBlockquote.a98e6fd2.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.b71556ef.js"),["ProseCode.b71556ef.js","ProseCode.e63e49c6.css","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.1258c3f8.js"),["ProseCodeInline.1258c3f8.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.946fa4c7.js"),["ProseEm.946fa4c7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.1e6487cd.js"),["ProseH1.1e6487cd.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.62f6b2d3.js"),["ProseH2.62f6b2d3.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.0a4269a0.js"),["ProseH3.0a4269a0.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.61897353.js"),["ProseH4.61897353.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.6499c9f7.js"),["ProseH5.6499c9f7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.07e446b7.js"),["ProseH6.07e446b7.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.a19f4a75.js"),["ProseHr.a19f4a75.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.e8dc61b1.js"),["ProseImg.e8dc61b1.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.1bd46762.js"),["ProseLi.1bd46762.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.46f07f43.js"),["ProseOl.46f07f43.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.151fdd31.js"),["ProseP.151fdd31.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.525aa5fb.js"),["ProseStrong.525aa5fb.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.b437dc91.js"),["ProseTable.b437dc91.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.6eb21c65.js"),["ProseTbody.6eb21c65.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.12a44553.js"),["ProseTd.12a44553.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.c1737bfd.js"),["ProseTh.c1737bfd.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.77cbee14.js"),["ProseThead.77cbee14.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.38a48499.js"),["ProseTr.38a48499.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.dd49f3ed.js"),["ProseUl.dd49f3ed.js","entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.5b184441.js"),["welcome.5b184441.js","entry.7b155ad5.js","entry.f5a776da.css","ContentSlot.acefa849.js","DocumentDrivenEmpty.fd1f1f6b.js","DocumentDrivenNotFound.7e952f07.js","Markdown.18b89f0c.js","ProseCode.b71556ef.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.aq),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.ak),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.7b155ad5.js").then(t=>t.al),["entry.7b155ad5.js","entry.f5a776da.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));const ut=f({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:a}=M(t),i=p(()=>{var o;return typeof((o=a.value)==null?void 0:o.params)=="function"?a.value.params():a.value});if(!i.value&&q("dd-navigation","$X9s2D0PBpW").value){const{navigation:o}=F();return{navigation:o}}const{data:u}=await H(`content-navigation-${O(i.value)}`,()=>U(i.value),"$qwqtCbrR7R");return{navigation:u}},render(t){const a=G(),{navigation:i}=t,u=n=>d(K,{to:n._path},()=>n.title),o=(n,m)=>d("ul",m?{"data-level":m}:null,n.map(l=>l.children?d("li",null,[u(l),o(l.children,m+1)]):d("li",null,u(l)))),_=n=>o(n,0);return a!=null&&a.default?a.default({navigation:i,...this.$attrs}):_(i)}}),nt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));export{ut as default};
