import{p as I}from"../chunks/post.B-607D8h.js";import{j as $,d as p,f as S,t as u}from"../chunks/disclose-version.BzwPWUd8.js";import{a6 as y,Y as M,a0 as o,$ as j,a1 as i,a2 as _,a5 as P,Z as b,g as z}from"../chunks/runtime.D4NNKlbh.js";import{i as Y}from"../chunks/if.Bpbn_54p.js";import{e as N,i as T}from"../chunks/each.BcpxUGUn.js";import{p as k}from"../chunks/index.BNV5r2ua.js";import{L as w}from"../chunks/Link.BVTuHe-P.js";import{s as x}from"../chunks/render.dp4tZE2T.js";import{d as L}from"../chunks/dayjs.min.CxMP4GVf.js";import"../chunks/legacy.BIdSL2G0.js";import{I as O,s as R}from"../chunks/Icon.DyLRxuD7.js";import{l as q,s as D}from"../chunks/props.Dyw_wttE.js";function H(l,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);O(l,D({name:"rss"},()=>r,{iconNode:[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]],children:(d,h)=>{var v=$(),c=y(v);R(c,t,"default",{}),p(d,v)},$$slots:{default:!0}}))}const J=async({fetch:l})=>({posts:(await(await l("/api/posts")).json()).map(I),pageMetaTags:{title:"Posts"}}),ot=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));var Z=u('<p class="description svelte-14rj0h7"> </p>'),A=u('<div class="container svelte-14rj0h7"><div class="date svelte-14rj0h7"><span class="published"> </span></div> <div class="content svelte-14rj0h7"><h2 class="svelte-14rj0h7"><!></h2> <!></div></div>');function B(l,t){M(t,!0);var r=A(),n=o(r),d=o(n),h=o(d,!0);j(()=>x(h,L(t.post.published).format("MMM D YYYY"))),i(d),i(n);var v=_(n,2),c=o(v),g=o(c);w(g,{get href(){return t.post.href},children:(a,s)=>{P();var f=S();j(()=>x(f,t.post.title)),p(a,f)},$$slots:{default:!0}}),i(c);var e=_(c,2);{var m=a=>{var s=Z(),f=o(s,!0);i(s),j(()=>x(f,t.post.metadata.description)),p(a,s)};Y(e,a=>{var s;(s=t.post.metadata)!=null&&s.description&&a(m)})}i(v),i(r),p(l,r),b()}var C=u('<span class="feed svelte-1rode7a"><!> RSS</span>'),E=u('<p class="missing svelte-1rode7a">Nothing here quite yet...</p>'),F=u('<main><h1 class="svelte-1rode7a">Posts</h1> <p>Here I write short thoughts on whatever catches my attention.</p> <!> <div class="posts svelte-1rode7a"><!></div></main>');function it(l,t){M(t,!0);const{posts:r}=k.data;var n=F(),d=_(o(n),4);w(d,{small:!0,href:"/feed.xml",children:(e,m)=>{var a=C(),s=o(a);H(s,{size:"1em"}),P(),i(a),p(e,a)},$$slots:{default:!0}});var h=_(d,2),v=o(h);{var c=e=>{var m=$(),a=y(m);N(a,17,()=>r,T,(s,f)=>{B(s,{get post(){return z(f)}})}),p(e,m)},g=e=>{var m=E();p(e,m)};Y(v,e=>{r.length>0?e(c):e(g,!1)})}i(h),i(n),p(l,n),b()}export{it as component,ot as universal};
