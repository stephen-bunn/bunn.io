import{p as S}from"../chunks/post.CkjGwE2V.js";import{c as $,a as l,b as Y,t as u,s as x}from"../chunks/disclose-version.B_5sZvog.js";import{C as b,g as M,j as r,t as y,k as n,l as _,B as P,i as j,w as k}from"../chunks/runtime.ClYK7LD1.js";import{i as w}from"../chunks/if.mrCHrd-L.js";import{I as z,s as N,e as T,i as L}from"../chunks/Icon.eoflBArN.js";import{p as O}from"../chunks/index.Dhtv4w4z.js";import{L as I}from"../chunks/Link.D5-S_DH9.js";import{d as R}from"../chunks/dayjs.min.CxMP4GVf.js";import"../chunks/legacy.CKvfvojS.js";import{l as q,s as B}from"../chunks/props.4qQzb_nT.js";function C(p,t){const o=q(t,["children","$$slots","$$events","$$legacy"]);z(p,B({name:"rss"},()=>o,{iconNode:[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]],children:(d,h)=>{var v=$(),c=b(v);N(c,t,"default",{}),l(d,v)},$$slots:{default:!0}}))}const D=async({fetch:p})=>({posts:(await(await p("/api/posts")).json()).map(S),pageMetaTags:{title:"Posts"}}),at=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));var H=u('<p class="description svelte-108ntin"> </p>'),J=u('<div class="container svelte-108ntin"><div class="date svelte-108ntin"><span class="published"> </span></div> <div class="content svelte-108ntin"><h2 class="svelte-108ntin"><!></h2> <!></div></div>');function A(p,t){M(t,!0);var o=J(),i=r(o),d=r(i),h=r(d,!0);y(()=>x(h,R(t.post.published).format("MMM D YYYY"))),n(d),n(i);var v=_(i,2),c=r(v),g=r(c);I(g,{get href(){return t.post.href},children:(s,e)=>{P();var f=Y();y(()=>x(f,t.post.title)),l(s,f)},$$slots:{default:!0}}),n(c);var a=_(c,2);{var m=s=>{var e=H(),f=r(e,!0);n(e),y(()=>x(f,t.post.metadata.description)),l(s,e)};w(a,s=>{var e;(e=t.post.metadata)!=null&&e.description&&s(m)})}n(v),n(o),l(p,o),j()}var E=u('<span class="feed svelte-1rode7a"><!> RSS</span>'),F=u('<p class="missing svelte-1rode7a">Nothing here quite yet...</p>'),G=u('<main><h1 class="svelte-1rode7a">Posts</h1> <p>Here I write short thoughts on whatever catches my attention.</p> <!> <div class="posts svelte-1rode7a"><!></div></main>');function ot(p,t){M(t,!0);const{posts:o}=O.data;var i=G(),d=_(r(i),4);I(d,{small:!0,href:"/feed.xml",children:(a,m)=>{var s=E(),e=r(s);C(e,{size:"1em"}),P(),n(s),l(a,s)},$$slots:{default:!0}});var h=_(d,2),v=r(h);{var c=a=>{var m=$(),s=b(m);T(s,17,()=>o,L,(e,f)=>{A(e,{get post(){return k(f)}})}),l(a,m)},g=a=>{var m=F();l(a,m)};w(v,a=>{o.length>0?a(c):a(g,!1)})}n(h),n(i),l(p,i),j()}export{ot as component,at as universal};
