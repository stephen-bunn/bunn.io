import{p as I}from"../chunks/post.D7XX6jiL.js";import{j as y,d as p,f as T,t as u}from"../chunks/disclose-version.BGnW0Ov2.js";import{a6 as P,O as $,S as o,R as j,T as i,V as _,a5 as M,P as b,_ as Y}from"../chunks/runtime.B2MlHuaj.js";import{i as S}from"../chunks/if.CVNSoAeW.js";import{e as z,i as N}from"../chunks/each.Bbfc8suH.js";import{p as O}from"../chunks/index.3rhN61_-.js";import{L as w}from"../chunks/Link.BMY3XjSt.js";import{s as x}from"../chunks/render.CxxxW7ZK.js";import{d as R}from"../chunks/dayjs.min.CxMP4GVf.js";import"../chunks/legacy.CSWvMp3l.js";import{I as k,s as L}from"../chunks/Icon.D2XO1t9a.js";import{l as q,s as D}from"../chunks/props.Dx8BwTBT.js";function H(l,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);k(l,D({name:"rss"},()=>r,{iconNode:[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]],children:(d,h)=>{var v=y(),c=P(v);L(c,t,"default",{}),p(d,v)},$$slots:{default:!0}}))}const J=async({fetch:l})=>({posts:(await(await l("/api/posts")).json()).map(I),pageMetaTags:{title:"Posts"}}),ot=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));var V=u('<p class="description svelte-14rj0h7"> </p>'),A=u('<div class="container svelte-14rj0h7"><div class="date svelte-14rj0h7"><span class="published"> </span></div> <div class="content svelte-14rj0h7"><h2 class="svelte-14rj0h7"><!></h2> <!></div></div>');function B(l,t){$(t,!0);var r=A(),n=o(r),d=o(n),h=o(d,!0);j(()=>x(h,R(t.post.published).format("MMM D YYYY"))),i(d),i(n);var v=_(n,2),c=o(v),g=o(c);w(g,{get href(){return t.post.href},children:(s,e)=>{M();var f=T();j(()=>x(f,t.post.title)),p(s,f)},$$slots:{default:!0}}),i(c);var a=_(c,2);{var m=s=>{var e=V(),f=o(e,!0);i(e),j(()=>x(f,t.post.metadata.description)),p(s,e)};S(a,s=>{var e;(e=t.post.metadata)!=null&&e.description&&s(m)})}i(v),i(r),p(l,r),b()}var C=u('<span class="feed svelte-1rode7a"><!> RSS</span>'),E=u('<p class="missing svelte-1rode7a">Nothing here quite yet...</p>'),F=u('<main><h1 class="svelte-1rode7a">Posts</h1> <p>Here I write short thoughts on whatever catches my attention.</p> <!> <div class="posts svelte-1rode7a"><!></div></main>');function it(l,t){$(t,!0);const{posts:r}=O.data;var n=F(),d=_(o(n),4);w(d,{small:!0,href:"/feed.xml",children:(a,m)=>{var s=C(),e=o(s);H(e,{size:"1em"}),M(),i(s),p(a,s)},$$slots:{default:!0}});var h=_(d,2),v=o(h);{var c=a=>{var m=y(),s=P(m);z(s,17,()=>r,N,(e,f)=>{B(e,{get post(){return Y(f)}})}),p(a,m)},g=a=>{var m=E();p(a,m)};S(v,a=>{r.length>0?a(c):a(g,!1)})}i(h),i(n),p(l,n),b()}export{it as component,ot as universal};
