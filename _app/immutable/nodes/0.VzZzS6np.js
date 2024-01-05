import{r as ft,u as Be,s as W,e as ee,i as L,d as g,v as ht,o as xe,w as et,f as M,a as Y,g as N,h as y,c as j,j as _,k as U,x as X,y as I,z as te,p as We,A as le,B,C as Re,D as ie,E as se,F as oe,G as ve,H as dt,I as Q,J as z,l as ae,K as O,m as ue,L as H,M as tt,N as pe,O as mt,P as Ve,Q as gt,R as _t}from"../chunks/scheduler.ZS-Fn8gf.js";import{S as R,i as P,a as w,g as ne,t as E,c as re,f as Pe,h as Fe,b as $,d as S,m as A,e as D,j as be}from"../chunks/index.Jd1Y1RiS.js";/* empty css                        */import{w as vt}from"../chunks/singletons.xcUov_61.js";import{g as ce,a as nt}from"../chunks/spread.rEx3vLA9.js";import{p as pt}from"../chunks/stores.Lq-B7BGb.js";import{e as we}from"../chunks/each.-oqiv04n.js";const bt=!0,wt="always",pn=Object.freeze(Object.defineProperty({__proto__:null,prerender:bt,trailingSlash:wt},Symbol.toStringTag,{value:"Module"}));function rt(i){const e=i-1;return e*e*e+1}function ge(i,{delay:e=0,duration:t=400,easing:n=ft}={}){const l=+getComputedStyle(i).opacity;return{delay:e,duration:t,easing:n,css:r=>`opacity: ${r*l}`}}function Ue(i,{delay:e=0,duration:t=400,easing:n=rt,x:l=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(i),c=+a.opacity,s=a.transform==="none"?"":a.transform,u=c*(1-o),[f,h]=Be(l),[m,b]=Be(r);return{delay:e,duration:t,easing:n,css:(V,k)=>`
			transform: ${s} translate(${(1-V)*f}${h}, ${(1-V)*m}${b});
			opacity: ${c-u*k}`}}function Ye(i,{delay:e=0,duration:t=400,easing:n=rt,axis:l="y"}={}){const r=getComputedStyle(i),o=+r.opacity,a=l==="y"?"height":"width",c=parseFloat(r[a]),s=l==="y"?["top","bottom"]:["left","right"],u=s.map(p=>`${p[0].toUpperCase()}${p.slice(1)}`),f=parseFloat(r[`padding${u[0]}`]),h=parseFloat(r[`padding${u[1]}`]),m=parseFloat(r[`margin${u[0]}`]),b=parseFloat(r[`margin${u[1]}`]),V=parseFloat(r[`border${u[0]}Width`]),k=parseFloat(r[`border${u[1]}Width`]);return{delay:e,duration:t,easing:n,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*o};${a}: ${p*c}px;padding-${s[0]}: ${p*f}px;padding-${s[1]}: ${p*h}px;margin-${s[0]}: ${p*m}px;margin-${s[1]}: ${p*b}px;border-${s[0]}-width: ${p*V}px;border-${s[1]}-width: ${p*k}px;`}}function je(i){let e,t,n,l,r,o,a,c,s;return{c(){e=M("div"),t=M("div"),r=Y(),o=M("div"),this.h()},l(u){e=N(u,"DIV",{class:!0,style:!0});var f=y(e);t=N(f,"DIV",{class:!0,style:!0}),y(t).forEach(g),r=j(f),o=N(f,"DIV",{class:!0,style:!0}),y(o).forEach(g),f.forEach(g),this.h()},h(){_(t,"class","v-track svelte-iodyq2"),U(t,"height",i[6]+"px"),_(o,"class","v-thumb svelte-iodyq2"),U(o,"height",i[12]+"px"),U(o,"top",i[11]+"px"),_(e,"class","v-scrollbar svelte-iodyq2"),U(e,"height",i[6]+"px"),U(e,"margin",i[8]+"px "+i[14]+"px "+i[7]+"px "+i[13]+"px"),X(e,"fixed",i[9])},m(u,f){L(u,e,f),I(e,t),i[24](t),I(e,r),I(e,o),i[25](o),s=!0},p(u,f){(!s||f[0]&64)&&U(t,"height",u[6]+"px"),(!s||f[0]&4096)&&U(o,"height",u[12]+"px"),(!s||f[0]&2048)&&U(o,"top",u[11]+"px"),(!s||f[0]&64)&&U(e,"height",u[6]+"px"),(!s||f[0]&24960)&&U(e,"margin",u[8]+"px "+u[14]+"px "+u[7]+"px "+u[13]+"px"),(!s||f[0]&512)&&X(e,"fixed",u[9])},i(u){s||(u&&te(()=>{s&&(l&&l.end(1),n=Pe(t,i[0],{}),n.start())}),u&&te(()=>{s&&(c&&c.end(1),a=Pe(o,i[2],{}),a.start())}),s=!0)},o(u){n&&n.invalidate(),u&&(l=Fe(t,i[1],{})),a&&a.invalidate(),u&&(c=Fe(o,i[3],{})),s=!1},d(u){u&&g(e),i[24](null),u&&l&&l.end(),i[25](null),u&&c&&c.end()}}}function kt(i){let e,t=i[10]&&je(i);return{c(){t&&t.c(),e=ee()},l(n){t&&t.l(n),e=ee()},m(n,l){t&&t.m(n,l),L(n,e,l)},p(n,l){n[10]?t?(t.p(n,l),l[0]&1024&&w(t,1)):(t=je(n),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(ne(),E(t,1,1,()=>{t=null}),re())},i(n){w(t)},o(n){E(t)},d(n){n&&g(e),t&&t.d(n)}}}function Et(i,e,t){let n,l,r,o,a,c,s,u,f,h,m,b,V,k,p,{viewport:v}=e,{contents:T}=e,{hideAfter:q=1e3}=e,{alwaysVisible:F=!1}=e,{initiallyVisible:C=!1}=e,{margin:x={}}=e,{vTrackIn:Ce=d=>ge(d,{duration:100})}=e,{vTrackOut:Me=d=>ge(d,{duration:300})}=e,{vThumbIn:Ne=d=>ge(d,{duration:100})}=e,{vThumbOut:ze=d=>ge(d,{duration:300})}=e;const Oe=ht();let Z,G,ke=0,Ee=0,fe=0,ye=!1,Te=!1;function it(d){if(!d)return;if(n?.(),typeof window.ResizeObserver>"u")throw new Error("window.ResizeObserver is missing.");t(9,ye=document.scrollingElement===d);const K=ye?document:d;K.addEventListener("scroll",Se,{passive:!0});const J=new ResizeObserver(He=>{for(const cn of He)t(21,f=d?.scrollHeight??0),t(6,m=d?.clientHeight-(a+c))});return J.observe(d),()=>{K.removeEventListener("scroll",Se),J.unobserve(T),J.disconnect()}}function st(d){if(d)return r?.(),Z.addEventListener("mouseenter",Ae),Z.addEventListener("mouseleave",De),()=>{Z.removeEventListener("mouseenter",Ae),Z.removeEventListener("mouseleave",De)}}function ot(d){if(d)return o?.(),G.addEventListener("mousedown",he,{passive:!0}),G.addEventListener("touchstart",he,{passive:!0}),()=>{G.removeEventListener("mousedown",he),G.removeEventListener("touchstart",he)}}function at(d){if(!d)return;if(l?.(),typeof window.ResizeObserver>"u")throw new Error("window.ResizeObserver is missing.");const K=new ResizeObserver(J=>{for(const He of J)t(21,f=v?.scrollHeight??0)});return K.observe(d),()=>{K.unobserve(d),K.disconnect()}}function $e(){fe=window.setTimeout(()=>{t(10,p=k&&(F||C&&!Te)||!1),Oe("hide")},q)}function Ie(){fe&&(window.clearTimeout(fe),fe=0)}function Se(){k&&(Ie(),$e(),t(10,p=F||C&&!Te||!0),t(22,h=v?.scrollTop??0),Te=!0,Oe("show"))}function Ae(){Ie()}function De(){Ie(),$e()}function he(d){d.stopPropagation(),d.preventDefault(),ke=v.scrollTop,Ee=d.changedTouches?d.changedTouches[0].clientY:d.clientY,document.addEventListener("mousemove",de),document.addEventListener("touchmove",de),document.addEventListener("mouseup",me),document.addEventListener("touchend",me)}function de(d){d.stopPropagation(),d.preventDefault();const K=d.changedTouches?d.changedTouches[0].clientY:d.clientY,J=f/m;t(15,v.scrollTop=ke+J*(K-Ee),v)}function me(d){d.stopPropagation(),d.preventDefault(),ke=0,Ee=0,document.removeEventListener("mousemove",de),document.removeEventListener("touchmove",de),document.removeEventListener("mouseup",me),document.removeEventListener("touchend",me)}xe(()=>{t(15,v=v??document.scrollingElement),t(16,T=T??document.body)}),et(()=>{n?.(),l?.(),r?.(),o?.()});function ut(d){We[d?"unshift":"push"](()=>{Z=d,t(4,Z)})}function ct(d){We[d?"unshift":"push"](()=>{G=d,t(5,G)})}return i.$$set=d=>{"viewport"in d&&t(15,v=d.viewport),"contents"in d&&t(16,T=d.contents),"hideAfter"in d&&t(17,q=d.hideAfter),"alwaysVisible"in d&&t(18,F=d.alwaysVisible),"initiallyVisible"in d&&t(19,C=d.initiallyVisible),"margin"in d&&t(20,x=d.margin),"vTrackIn"in d&&t(0,Ce=d.vTrackIn),"vTrackOut"in d&&t(1,Me=d.vTrackOut),"vThumbIn"in d&&t(2,Ne=d.vThumbIn),"vThumbOut"in d&&t(3,ze=d.vThumbOut)},i.$$.update=()=>{i.$$.dirty[0]&32768&&(n=it(v)),i.$$.dirty[0]&65536&&(l=at(T)),i.$$.dirty[0]&16&&(r=st(Z)),i.$$.dirty[0]&32&&(o=ot(G)),i.$$.dirty[0]&1048576&&t(8,a=x.top??0),i.$$.dirty[0]&1048576&&t(7,c=x.bottom??0),i.$$.dirty[0]&1048576&&t(14,s=x.right??0),i.$$.dirty[0]&1048576&&t(13,u=x.left??0),i.$$.dirty[0]&32768&&t(21,f=v?.scrollHeight??0),i.$$.dirty[0]&32768&&t(22,h=v?.scrollTop??0),i.$$.dirty[0]&33152&&t(6,m=v?.clientHeight??0-(a+c)),i.$$.dirty[0]&2097216&&t(12,b=f>0?m/f*m:0),i.$$.dirty[0]&6291520&&t(11,V=f>0?h/f*m:0),i.$$.dirty[0]&2097216&&t(23,k=f>m),i.$$.dirty[0]&9175040&&t(10,p=k&&(F||C))},[Ce,Me,Ne,ze,Z,G,m,c,a,ye,p,V,b,u,s,v,T,q,F,C,x,f,h,k,ut,ct]}class yt extends R{constructor(e){super(),P(this,e,Et,kt,W,{viewport:15,contents:16,hideAfter:17,alwaysVisible:18,initiallyVisible:19,margin:20,vTrackIn:0,vTrackOut:1,vThumbIn:2,vThumbOut:3},null,[-1,-1])}}function Tt(i){let e,t,n;const l=i[5].default,r=le(l,i,i[4],null);let o=[{href:i[0]},{tabindex:t=i[1]?-1:0},i[2]],a={};for(let c=0;c<o.length;c+=1)a=B(a,o[c]);return{c(){e=M("a"),r&&r.c(),this.h()},l(c){e=N(c,"A",{href:!0,tabindex:!0});var s=y(e);r&&r.l(s),s.forEach(g),this.h()},h(){Re(e,a),X(e,"active",i[1]),X(e,"svelte-1v88ys7",!0)},m(c,s){L(c,e,s),r&&r.m(e,null),n=!0},p(c,[s]){r&&r.p&&(!n||s&16)&&ie(r,l,c,c[4],n?oe(l,c[4],s,null):se(c[4]),null),Re(e,a=ce(o,[(!n||s&1)&&{href:c[0]},(!n||s&2&&t!==(t=c[1]?-1:0))&&{tabindex:t},s&4&&c[2]])),X(e,"active",c[1]),X(e,"svelte-1v88ys7",!0)},i(c){n||(w(r,c),n=!0)},o(c){E(r,c),n=!1},d(c){c&&g(e),r&&r.d(c)}}}function It(i,e,t){let n;const l=["href"];let r=ve(e,l),o;dt(i,pt,f=>t(3,o=f));let{$$slots:a={},$$scope:c}=e,{href:s}=e;const u=new RegExp(`^${s}/?$`,"i");return i.$$set=f=>{e=B(B({},e),Q(f)),t(2,r=ve(e,l)),"href"in f&&t(0,s=f.href),"$$scope"in f&&t(4,c=f.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&t(1,n=u.test(o.url.pathname))},[s,n,r,o,c,a]}class _e extends R{constructor(e){super(),P(this,e,It,Tt,W,{href:0})}}function Lt(i){let e,t,n,l,r;return{c(){e=z("svg"),t=z("title"),n=ae("Stephen Bunn"),l=z("path"),r=z("path"),this.h()},l(o){e=O(o,"svg",{xmlns:!0,viewBox:!0,preserveAspectRatio:!0,fill:!0});var a=y(e);t=O(a,"title",{});var c=y(t);n=ue(c,"Stephen Bunn"),c.forEach(g),l=O(a,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),y(l).forEach(g),r=O(a,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),y(r).forEach(g),a.forEach(g),this.h()},h(){_(l,"fill","currentColor"),_(l,"fill-rule","evenodd"),_(l,"d","M377.1 54.4c-13.5 5.5-21.9 13.8-24.3 24.7a44.5 44.5 0 0 0 1.6 21.4c2.5 8.8 6.7 18.5 12.5 29 6.4 11.7 14.5 24 23.5 36.3l-12.3-84a9.5 9.5 0 0 1 18.8-2.7l16.6 113.5c36.2 10.7 71.5 23.1 105.1 35 21.6 7.5 42.5 14.9 62.3 21.3l13 4.1c2.2-6.8 3.1-14 2.6-21.4-1.4-20.8-12-39.3-38.6-54.3-27.1-15.3-70.4-26.6-135.7-31.8A9.5 9.5 0 0 1 420 127c6.6-2.2 13.7-4.3 20.8-6.5 14.4-4.3 29.3-8.8 42-14.1a70 70 0 0 0 20.1-11.6c3.7-3.4 3.6-5.3 3-6.9-3.2-10-12.7-19.4-27.4-26.8-14.6-7.3-33-12-51.4-13.2-18.5-1.3-36.4.9-50 6.5ZM604 275.9c42.7 12.3 83 20 119.6 16a9.5 9.5 0 1 0-2-18.8c-32.3 3.4-68.8-3-109.4-14.6 2.8-8.8 4-18.1 3.4-28.1-1.9-28.2-17-52-48.2-69.6-23.2-13-55.3-22.9-98.1-29.2 7.3-2.4 14.4-5 20.9-7.7 9.8-4.1 19.3-9 25.9-15.3 6.8-6.4 11.6-15.6 8-26.5-5.5-17-20-29.5-37-38A158 158 0 0 0 428.4 29a134 134 0 0 0-58.5 7.8c-17 7-31.4 19.2-35.7 38.1a63 63 0 0 0 2 30.8c2.9 10.5 7.9 21.7 14 32.9a389.5 389.5 0 0 0 31.2 46.9c-48-8.1-107.6-9.5-157.8-3.4-29.8 3.6-57.1 10-77 19.6-19.4 9.5-35.1 24-33.6 45 3.1 41 40.4 69 87.6 86.2 48 17.4 110.3 25.4 171.5 24.2 61.2-1.2 122.3-11.6 167.9-31.7 27.6-12.1 50.8-28.5 64-49.5Zm-19-5.8-10-3.1c-20.9-6.8-42-14.3-63.8-22-34.8-12.2-71-24.9-108.8-35.8-48.4-12-118.9-15.3-176.6-8.3-29 3.5-53.9 9.6-71 18-17.5 8.5-23.6 17.6-23 26.4 2.2 29 29.2 53 75.2 69.7 45.2 16.5 105 24.3 164.7 23.1 59.6-1.1 118-11.3 160.5-30 24-10.6 41.8-23.3 52.6-38Z"),_(l,"clip-rule","evenodd"),_(r,"fill","currentColor"),_(r,"fill-rule","evenodd"),_(r,"d","M271.5 1c3.7-1.3 7.8 0 10.3 3 27.8 33.5 49.9 83.8 55.7 140 .2 2-.3 3.9-1.1 5.5 2.5 1 5 1.8 7.3 2.8a284 284 0 0 1 62.8 32.1 93 93 0 0 1 19.3 18 35.1 35.1 0 0 1 8.2 21.1c0 6.7-4.3 11.7-8 14.8a72 72 0 0 1-15.2 9.4c-12.1 5.7-29 11.3-48.6 16.5A912.5 912.5 0 0 1 218 288.3c-52.2 4.7-105 5-145-2.3a138 138 0 0 1-50.6-18c-13.2-9-22-21.6-22-38 0-13.4 5.1-24.5 14.8-33.4 9.3-8.6 22.5-15 38.5-20.5 30.4-10.2 74.8-18 131.6-27.9l9-1.6a9.5 9.5 0 1 1 3.2 18.8l-7.7 1.3c-58 10.1-101 17.7-130 27.4a89.9 89.9 0 0 0-31.7 16.4 25 25 0 0 0-8.7 19.5c0 8.6 4.2 15.8 13.6 22.2 9.8 6.5 24.5 11.7 43.4 15.1 37.6 7 88.4 6.7 140 2.1a893.7 893.7 0 0 0 140.8-23.6c19.2-5 34.8-10.3 45.3-15.3a51.5 51.5 0 0 0 12.3-7.9c-.2-2-1.3-4.9-4.2-8.6a75.5 75.5 0 0 0-15.4-14.2A265.8 265.8 0 0 0 337 170a492.3 492.3 0 0 0-167.4-32.5 9.5 9.5 0 0 1-4.5-17.9c63-33.4 97.8-66.2 100-110 .2-4 2.8-7.4 6.5-8.6Zm143.7 221.2Zm-97-79a257 257 0 0 0-38-109.4c-10.1 34.7-38.4 61.8-77.5 86.1 39.6 3.3 80 12 115.6 23.4Z"),_(r,"clip-rule","evenodd"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 732 358"),_(e,"preserveAspectRatio","xMidYMid meet"),_(e,"fill","none")},m(o,a){L(o,e,a),I(e,t),I(t,n),I(e,l),I(e,r)},p:H,i:H,o:H,d(o){o&&g(e)}}}class Vt extends R{constructor(e){super(),P(this,e,null,Lt,W,{})}}function qe(i,e,t){const n=i.slice();return n[1]=e[t],n}function Ct(i){let e=i[1].text+"",t;return{c(){t=ae(e)},l(n){t=ue(n,e)},m(n,l){L(n,t,l)},p:H,d(n){n&&g(t)}}}function Ze(i){let e,t,n,l;return t=new _e({props:{href:i[1].href,$$slots:{default:[Ct]},$$scope:{ctx:i}}}),{c(){e=M("li"),$(t.$$.fragment),n=Y()},l(r){e=N(r,"LI",{});var o=y(e);S(t.$$.fragment,o),n=j(o),o.forEach(g)},m(r,o){L(r,e,o),A(t,e,null),I(e,n),l=!0},p(r,o){const a={};o&16&&(a.$$scope={dirty:o,ctx:r}),t.$set(a)},i(r){l||(w(t.$$.fragment,r),l=!0)},o(r){E(t.$$.fragment,r),l=!1},d(r){r&&g(e),D(t)}}}function Mt(i){let e,t,n,l=we(i[0]),r=[];for(let a=0;a<l.length;a+=1)r[a]=Ze(qe(i,l,a));const o=a=>E(r[a],1,1,()=>{r[a]=null});return{c(){e=M("nav"),t=M("ul");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=N(a,"NAV",{});var c=y(e);t=N(c,"UL",{class:!0});var s=y(t);for(let u=0;u<r.length;u+=1)r[u].l(s);s.forEach(g),c.forEach(g),this.h()},h(){_(t,"class","svelte-1wpki7y")},m(a,c){L(a,e,c),I(e,t);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(t,null);n=!0},p(a,[c]){if(c&1){l=we(a[0]);let s;for(s=0;s<l.length;s+=1){const u=qe(a,l,s);r[s]?(r[s].p(u,c),w(r[s],1)):(r[s]=Ze(u),r[s].c(),w(r[s],1),r[s].m(t,null))}for(ne(),s=l.length;s<r.length;s+=1)o(s);re()}},i(a){if(!n){for(let c=0;c<l.length;c+=1)w(r[c]);n=!0}},o(a){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)E(r[c]);n=!1},d(a){a&&g(e),tt(r,a)}}}function Nt(i){return[[{text:"About",href:"/"},{text:"Resume",href:"/resume"},{text:"Contact",href:"/contact"},{text:"Uses",href:"/uses"}]]}class zt extends R{constructor(e){super(),P(this,e,Nt,Mt,W,{})}}const Ot={md:768,lg:1024};function $t(i){let e,t,n,l;return{c(){e=z("svg"),t=z("title"),n=ae("Mastodon"),l=z("path"),this.h()},l(r){e=O(r,"svg",{role:!0,viewBox:!0,xmlns:!0,width:!0,height:!0,fill:!0});var o=y(e);t=O(o,"title",{});var a=y(t);n=ue(a,"Mastodon"),a.forEach(g),l=O(o,"path",{d:!0}),y(l).forEach(g),o.forEach(g),this.h()},h(){_(l,"d","M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"),_(e,"role","img"),_(e,"viewBox","0 0 24 24"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"width","24"),_(e,"height","24"),_(e,"fill","currentColor")},m(r,o){L(r,e,o),I(e,t),I(t,n),I(e,l)},p:H,i:H,o:H,d(r){r&&g(e)}}}class St extends R{constructor(e){super(),P(this,e,null,$t,W,{})}}function At(i){let e,t,n,l;return{c(){e=z("svg"),t=z("title"),n=ae("GitHub"),l=z("path"),this.h()},l(r){e=O(r,"svg",{role:!0,viewBox:!0,xmlns:!0,width:!0,height:!0,fill:!0});var o=y(e);t=O(o,"title",{});var a=y(t);n=ue(a,"GitHub"),a.forEach(g),l=O(o,"path",{d:!0}),y(l).forEach(g),o.forEach(g),this.h()},h(){_(l,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),_(e,"role","img"),_(e,"viewBox","0 0 24 24"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"width","24"),_(e,"height","24"),_(e,"fill","currentColor")},m(r,o){L(r,e,o),I(e,t),I(t,n),I(e,l)},p:H,i:H,o:H,d(r){r&&g(e)}}}class Dt extends R{constructor(e){super(),P(this,e,null,At,W,{})}}function Ht(i){let e,t,n,l;return{c(){e=z("svg"),t=z("title"),n=ae("LinkedIn"),l=z("path"),this.h()},l(r){e=O(r,"svg",{role:!0,viewBox:!0,xmlns:!0,width:!0,height:!0,fill:!0});var o=y(e);t=O(o,"title",{});var a=y(t);n=ue(a,"LinkedIn"),a.forEach(g),l=O(o,"path",{d:!0}),y(l).forEach(g),o.forEach(g),this.h()},h(){_(l,"d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),_(e,"role","img"),_(e,"viewBox","0 0 24 24"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"width","24"),_(e,"height","24"),_(e,"fill","currentColor")},m(r,o){L(r,e,o),I(e,t),I(t,n),I(e,l)},p:H,i:H,o:H,d(r){r&&g(e)}}}class Bt extends R{constructor(e){super(),P(this,e,null,Ht,W,{})}}/**
 * @license lucide-svelte v0.303.0 - ISC

This source code is licensed under the ISC license.
See the LICENSE file in the root directory of this source tree.
 */const Wt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},Ge=Wt;function Ke(i,e,t){const n=i.slice();return n[10]=e[t][0],n[11]=e[t][1],n}function Le(i){let e,t=[i[11]],n={};for(let l=0;l<t.length;l+=1)n=B(n,t[l]);return{c(){e=z(i[10]),this.h()},l(l){e=O(l,i[10],{}),y(e).forEach(g),this.h()},h(){pe(e,n)},m(l,r){L(l,e,r)},p(l,r){pe(e,n=ce(t,[r&32&&l[11]]))},d(l){l&&g(e)}}}function Xe(i){let e=i[10],t,n=i[10]&&Le(i);return{c(){n&&n.c(),t=ee()},l(l){n&&n.l(l),t=ee()},m(l,r){n&&n.m(l,r),L(l,t,r)},p(l,r){l[10]?e?W(e,l[10])?(n.d(1),n=Le(l),e=l[10],n.c(),n.m(t.parentNode,t)):n.p(l,r):(n=Le(l),e=l[10],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=l[10])},d(l){l&&g(t),n&&n.d(l)}}}function Rt(i){let e,t,n,l,r,o=we(i[5]),a=[];for(let h=0;h<o.length;h+=1)a[h]=Xe(Ke(i,o,h));const c=i[9].default,s=le(c,i,i[8],null);let u=[Ge,i[6],{width:i[2]},{height:i[2]},{stroke:i[1]},{"stroke-width":n=i[4]?Number(i[3])*24/Number(i[2]):i[3]},{class:l=`lucide-icon lucide lucide-${i[0]} ${i[7].class??""}`}],f={};for(let h=0;h<u.length;h+=1)f=B(f,u[h]);return{c(){e=z("svg");for(let h=0;h<a.length;h+=1)a[h].c();t=ee(),s&&s.c(),this.h()},l(h){e=O(h,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var m=y(e);for(let b=0;b<a.length;b+=1)a[b].l(m);t=ee(),s&&s.l(m),m.forEach(g),this.h()},h(){pe(e,f)},m(h,m){L(h,e,m);for(let b=0;b<a.length;b+=1)a[b]&&a[b].m(e,null);I(e,t),s&&s.m(e,null),r=!0},p(h,[m]){if(m&32){o=we(h[5]);let b;for(b=0;b<o.length;b+=1){const V=Ke(h,o,b);a[b]?a[b].p(V,m):(a[b]=Xe(V),a[b].c(),a[b].m(e,t))}for(;b<a.length;b+=1)a[b].d(1);a.length=o.length}s&&s.p&&(!r||m&256)&&ie(s,c,h,h[8],r?oe(c,h[8],m,null):se(h[8]),null),pe(e,f=ce(u,[Ge,m&64&&h[6],(!r||m&4)&&{width:h[2]},(!r||m&4)&&{height:h[2]},(!r||m&2)&&{stroke:h[1]},(!r||m&28&&n!==(n=h[4]?Number(h[3])*24/Number(h[2]):h[3]))&&{"stroke-width":n},(!r||m&129&&l!==(l=`lucide-icon lucide lucide-${h[0]} ${h[7].class??""}`))&&{class:l}]))},i(h){r||(w(s,h),r=!0)},o(h){E(s,h),r=!1},d(h){h&&g(e),tt(a,h),s&&s.d(h)}}}function Pt(i,e,t){const n=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let l=ve(e,n),{$$slots:r={},$$scope:o}=e,{name:a}=e,{color:c="currentColor"}=e,{size:s=24}=e,{strokeWidth:u=2}=e,{absoluteStrokeWidth:f=!1}=e,{iconNode:h}=e;return i.$$set=m=>{t(7,e=B(B({},e),Q(m))),t(6,l=ve(e,n)),"name"in m&&t(0,a=m.name),"color"in m&&t(1,c=m.color),"size"in m&&t(2,s=m.size),"strokeWidth"in m&&t(3,u=m.strokeWidth),"absoluteStrokeWidth"in m&&t(4,f=m.absoluteStrokeWidth),"iconNode"in m&&t(5,h=m.iconNode),"$$scope"in m&&t(8,o=m.$$scope)},e=Q(e),[a,c,s,u,f,h,l,e,o,r]}class Ft extends R{constructor(e){super(),P(this,e,Pt,Rt,W,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const lt=Ft;function Ut(i){let e;const t=i[2].default,n=le(t,i,i[3],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,r){n&&n.m(l,r),e=!0},p(l,r){n&&n.p&&(!e||r&8)&&ie(n,t,l,l[3],e?oe(t,l[3],r,null):se(l[3]),null)},i(l){e||(w(n,l),e=!0)},o(l){E(n,l),e=!1},d(l){n&&n.d(l)}}}function Yt(i){let e,t;const n=[{name:"menu"},i[1],{iconNode:i[0]}];let l={$$slots:{default:[Ut]},$$scope:{ctx:i}};for(let r=0;r<n.length;r+=1)l=B(l,n[r]);return e=new lt({props:l}),{c(){$(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,o){A(e,r,o),t=!0},p(r,[o]){const a=o&3?ce(n,[n[0],o&2&&nt(r[1]),o&1&&{iconNode:r[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){D(e,r)}}}function jt(i,e,t){let{$$slots:n={},$$scope:l}=e;const r=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];return i.$$set=o=>{t(1,e=B(B({},e),Q(o))),"$$scope"in o&&t(3,l=o.$$scope)},e=Q(e),[r,e,n,l]}class qt extends R{constructor(e){super(),P(this,e,jt,Yt,W,{})}}const Zt=qt;function Gt(i){let e;const t=i[2].default,n=le(t,i,i[3],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,r){n&&n.m(l,r),e=!0},p(l,r){n&&n.p&&(!e||r&8)&&ie(n,t,l,l[3],e?oe(t,l[3],r,null):se(l[3]),null)},i(l){e||(w(n,l),e=!0)},o(l){E(n,l),e=!1},d(l){n&&n.d(l)}}}function Kt(i){let e,t;const n=[{name:"x"},i[1],{iconNode:i[0]}];let l={$$slots:{default:[Gt]},$$scope:{ctx:i}};for(let r=0;r<n.length;r+=1)l=B(l,n[r]);return e=new lt({props:l}),{c(){$(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,o){A(e,r,o),t=!0},p(r,[o]){const a=o&3?ce(n,[n[0],o&2&&nt(r[1]),o&1&&{iconNode:r[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){D(e,r)}}}function Xt(i,e,t){let{$$slots:n={},$$scope:l}=e;const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];return i.$$set=o=>{t(1,e=B(B({},e),Q(o))),"$$scope"in o&&t(3,l=o.$$scope)},e=Q(e),[r,e,n,l]}class Jt extends R{constructor(e){super(),P(this,e,Xt,Kt,W,{})}}const Qt=Jt;function Je(i){let e,t,n,l,r,o,a;const c=[en,xt],s=[];function u(f,h){return f[1]?0:1}return t=u(i),n=s[t]=c[t](i),{c(){e=M("button"),n.c(),this.h()},l(f){e=N(f,"BUTTON",{class:!0});var h=y(e);n.l(h),h.forEach(g),this.h()},h(){_(e,"class","menu-toggle svelte-mvptsv")},m(f,h){L(f,e,h),s[t].m(e,null),r=!0,o||(a=Ve(e,"click",i[4]),o=!0)},p(f,h){let m=t;t=u(f),t!==m&&(ne(),E(s[m],1,1,()=>{s[m]=null}),re(),n=s[t],n||(n=s[t]=c[t](f),n.c()),w(n,1),n.m(e,null))},i(f){r||(w(n),f&&te(()=>{r&&(l||(l=be(e,Ye,{duration:200,axis:"x"},!0)),l.run(1))}),r=!0)},o(f){E(n),f&&(l||(l=be(e,Ye,{duration:200,axis:"x"},!1)),l.run(0)),r=!1},d(f){f&&g(e),s[t].d(),f&&l&&l.end(),o=!1,a()}}}function xt(i){let e,t;return e=new Zt({}),{c(){$(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function en(i){let e,t;return e=new Qt({}),{c(){$(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function Qe(i){let e,t,n,l,r,o,a,c;return n=new zt({}),{c(){e=M("div"),t=M("aside"),$(n.$$.fragment),this.h()},l(s){e=N(s,"DIV",{class:!0,tabindex:!0,role:!0});var u=y(e);t=N(u,"ASIDE",{class:!0});var f=y(t);S(n.$$.fragment,f),f.forEach(g),u.forEach(g),this.h()},h(){_(t,"class","drawer svelte-mvptsv"),_(e,"class","drawer-container svelte-mvptsv"),_(e,"tabindex",l=i[2]?-1:0),_(e,"role","menu"),X(e,"drawer-container-top",!i[3])},m(s,u){L(s,e,u),I(e,t),A(n,t,null),o=!0,a||(c=[Ve(e,"click",i[4]),Ve(e,"keyup",i[5])],a=!0)},p(s,u){(!o||u&4&&l!==(l=s[2]?-1:0))&&_(e,"tabindex",l),(!o||u&8)&&X(e,"drawer-container-top",!s[3])},i(s){o||(w(n.$$.fragment,s),s&&te(()=>{o&&(r||(r=be(e,Ue,{duration:200,x:0},!0)),r.run(1))}),o=!0)},o(s){E(n.$$.fragment,s),s&&(r||(r=be(e,Ue,{duration:200,x:0},!1)),r.run(0)),o=!1},d(s){s&&g(e),D(n),s&&r&&r.end(),a=!1,gt(c)}}}function tn(i){let e,t;return e=new Dt({}),{c(){$(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function nn(i){let e,t;return e=new Bt({}),{c(){$(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function rn(i){let e,t;return e=new St({}),{c(){$(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function ln(i){let e,t,n,l,r,o,a,c,s,u,f,h,m,b,V,k=!i[2]&&Je(i);r=new Vt({});let p=i[1]&&Qe(i);return s=new _e({props:{href:"https://github.com/stephen-bunn",target:"_blank",$$slots:{default:[tn]},$$scope:{ctx:i}}}),f=new _e({props:{href:"https://linkedin.com/in/stephen-bunn",target:"_blank",$$slots:{default:[nn]},$$scope:{ctx:i}}}),m=new _e({props:{href:"https://social.lol/@st",target:"_blank",$$slots:{default:[rn]},$$scope:{ctx:i}}}),{c(){e=M("header"),k&&k.c(),t=Y(),n=M("div"),l=M("a"),$(r.$$.fragment),o=Y(),p&&p.c(),a=Y(),c=M("div"),$(s.$$.fragment),u=Y(),$(f.$$.fragment),h=Y(),$(m.$$.fragment),this.h()},l(v){e=N(v,"HEADER",{class:!0});var T=y(e);k&&k.l(T),t=j(T),n=N(T,"DIV",{class:!0});var q=y(n);l=N(q,"A",{href:!0,class:!0});var F=y(l);S(r.$$.fragment,F),F.forEach(g),q.forEach(g),o=j(T),p&&p.l(T),a=j(T),c=N(T,"DIV",{class:!0});var C=y(c);S(s.$$.fragment,C),u=j(C),S(f.$$.fragment,C),h=j(C),S(m.$$.fragment,C),C.forEach(g),T.forEach(g),this.h()},h(){_(l,"href","/"),_(l,"class","svelte-mvptsv"),_(n,"class","initials-container svelte-mvptsv"),_(c,"class","right svelte-mvptsv"),_(e,"class","svelte-mvptsv"),te(()=>i[6].call(e))},m(v,T){L(v,e,T),k&&k.m(e,null),I(e,t),I(e,n),I(n,l),A(r,l,null),I(e,o),p&&p.m(e,null),I(e,a),I(e,c),A(s,c,null),I(c,u),A(f,c,null),I(c,h),A(m,c,null),b=mt(e,i[6].bind(e)),V=!0},p(v,[T]){v[2]?k&&(ne(),E(k,1,1,()=>{k=null}),re()):k?(k.p(v,T),T&4&&w(k,1)):(k=Je(v),k.c(),w(k,1),k.m(e,t)),v[1]?p?(p.p(v,T),T&2&&w(p,1)):(p=Qe(v),p.c(),w(p,1),p.m(e,a)):p&&(ne(),E(p,1,1,()=>{p=null}),re());const q={};T&512&&(q.$$scope={dirty:T,ctx:v}),s.$set(q);const F={};T&512&&(F.$$scope={dirty:T,ctx:v}),f.$set(F);const C={};T&512&&(C.$$scope={dirty:T,ctx:v}),m.$set(C)},i(v){V||(w(k),w(r.$$.fragment,v),w(p),w(s.$$.fragment,v),w(f.$$.fragment,v),w(m.$$.fragment,v),V=!0)},o(v){E(k),E(r.$$.fragment,v),E(p),E(s.$$.fragment,v),E(f.$$.fragment,v),E(m.$$.fragment,v),V=!1},d(v){v&&g(e),k&&k.d(),D(r),p&&p.d(),D(s),D(f),D(m),b()}}}function sn(i,e,t){let n,l,r=vt(!1),o,a,c=!0;xe(()=>{r.subscribe(m=>{const b=document.querySelector("body");b&&(b.style.overflowY=m?"hidden":"scroll")});const h=document.querySelector("header");h&&(a=new IntersectionObserver(m=>{if(m.length<1)return;const[b]=m;t(3,c=b.isIntersecting)},{threshold:0}),a.observe(h))}),et(()=>{a&&a.disconnect()});const s=()=>t(1,l=n?!0:!l),u=h=>{h.defaultPrevented||[" ","Enter"].includes(h.key)&&(s(),h.preventDefault())};function f(){o=this.clientWidth,t(0,o)}return i.$$.update=()=>{i.$$.dirty&1&&t(2,n=o>=Ot.lg),i.$$.dirty&4&&t(1,l=n),i.$$.dirty&6&&r.set(!n&&l)},[o,l,n,c,s,u,f]}class on extends R{constructor(e){super(),P(this,e,sn,ln,W,{})}}function an(i){let e,t,n,l,r,o,a;t=new yt({}),l=new on({});const c=i[1].default,s=le(c,i,i[0],null);return{c(){e=Y(),$(t.$$.fragment),n=Y(),$(l.$$.fragment),r=Y(),o=M("main"),s&&s.c(),this.h()},l(u){_t("svelte-1x8w6hf",document.head).forEach(g),e=j(u),S(t.$$.fragment,u),n=j(u),S(l.$$.fragment,u),r=j(u),o=N(u,"MAIN",{class:!0});var h=y(o);s&&s.l(h),h.forEach(g),this.h()},h(){document.title="Stephen Bunn",_(o,"class","svelte-tm7suu")},m(u,f){L(u,e,f),A(t,u,f),L(u,n,f),A(l,u,f),L(u,r,f),L(u,o,f),s&&s.m(o,null),a=!0},p(u,[f]){s&&s.p&&(!a||f&1)&&ie(s,c,u,u[0],a?oe(c,u[0],f,null):se(u[0]),null)},i(u){a||(w(t.$$.fragment,u),w(l.$$.fragment,u),w(s,u),a=!0)},o(u){E(t.$$.fragment,u),E(l.$$.fragment,u),E(s,u),a=!1},d(u){u&&(g(e),g(n),g(r),g(o)),D(t,u),D(l,u),s&&s.d(u)}}}function un(i,e,t){let{$$slots:n={},$$scope:l}=e;return i.$$set=r=>{"$$scope"in r&&t(0,l=r.$$scope)},[l,n]}class bn extends R{constructor(e){super(),P(this,e,un,an,W,{})}}export{bn as component,pn as universal};
