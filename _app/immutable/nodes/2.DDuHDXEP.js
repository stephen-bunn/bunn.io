import{j as K,d as h,t as P,e as W,f as D}from"../chunks/disclose-version.OkLx2q1a.js";import{aE as X,b as Y,h as L,a as ee,aF as te,n as C,e as A,q as ae,U as F,f as se,C as U,B as q,ao as O,aG as B,aH as Q,d as T,p as j,aA as re,Q as oe,a6 as ie,R,$ as w,a2 as S,O as ne,aD as le,P as ce,ab as V,S as $,V as E,T as x,a4 as de,a5 as I}from"../chunks/runtime.CpZ6FN08.js";import{F as z}from"../chunks/constants.DmvCfB1G.js";import{b as g,t as fe}from"../chunks/class.DewIjjqB.js";import{l as ve,s as J,p as k,a as G}from"../chunks/props.B8Mwtx33.js";import{o as ue}from"../chunks/index-client.B5zzmJFf.js";import"../chunks/legacy.McUR4kTB.js";import{I as me,s as pe}from"../chunks/Icon.B08WUpHh.js";import{L as Z}from"../chunks/Link.C7aa364k.js";const M=0,N=1,H=2;function he(u,a,e,f,n){L&&ee();var l=u,r=X(),m=oe,o=F,i,v,c,p=(r?U:q)(void 0),y=(r?U:q)(void 0),s=!1;function t(d,_){s=!0,_&&(O(b),B(b),Q(m));try{d===M&&e&&(i?T(i):i=A(()=>e(l))),d===N&&f&&(v?T(v):v=A(()=>f(l,p))),d===H&&n&&(c?T(c):c=A(()=>n(l,y))),d!==M&&i&&j(i,()=>i=null),d!==N&&v&&j(v,()=>v=null),d!==H&&c&&j(c,()=>c=null)}finally{_&&(Q(null),B(null),O(null),re())}}var b=Y(()=>{if(o!==(o=a())){if(te(o)){var d=o;s=!1,d.then(_=>{d===o&&(C(p,_),t(N,!0))},_=>{if(d===o&&(C(y,_),t(H,!0),!n))throw y.v}),L?i=A(()=>e(l)):ae(()=>{s||t(M,!0)})}else C(p,o),t(N,!1);return()=>o=F}});L&&(l=se)}function _e(u,a){const e=ve(a,["children","$$slots","$$events","$$legacy"]);me(u,J({name:"image"},()=>e,{iconNode:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]],children:(n,l)=>{var r=K(),m=ie(r);pe(m,a,"default",{}),h(n,r)},$$slots:{default:!0}}))}var ge=P('<div class="svelte-vkyfg8"></div>');function $e(u,a){let e=k(a,"width",3,"100%"),f=k(a,"height",3,"100%"),n=k(a,"radius",3,"0px"),l=S(()=>`width: ${e()}; height: ${f()}; border-radius: ${n()};`);var r=ge();R(()=>g(r,"style",w(l))),h(u,r)}var xe=P('<img class="svelte-1bxc77c">'),ye=P('<div class="error svelte-1bxc77c"><!> <span></span></div>'),be=P('<div class="svelte-1bxc77c"><!></div>');function Ie(u,a){ne(a,!0);let e=k(a,"size",3,"256px"),f=k(a,"circle",3,!1);const n={"1x":"/img/profile.jpeg","2x":"/img/profile-2x.jpeg"},l=n["1x"],r=`${z}'s portrait`,m=Object.entries(n).map(([s,t])=>`${t} ${s}`).join(", ");let o=le(G(new Promise(()=>{}))),i=S(()=>`width: ${e()}; height: ${e()};`),v=S(()=>`width: ${e()}; height: ${e()};`),c=S(()=>({width:e(),height:e(),radius:f()?"50%":"0px"}));ue(()=>{const s=new Image;s.src=l,s.onload=()=>V(o,G(Promise.resolve())),s.onerror=()=>V(o,G(Promise.reject()))});var p=be(),y=$(p);he(y,()=>w(o),s=>{$e(s,J(()=>w(c)))},s=>{var t=xe();g(t,"src",l),g(t,"alt",r),g(t,"srcset",m),R(()=>{g(t,"style",w(v)),fe(t,"circle",f())}),h(s,t)},s=>{var t=ye(),b=$(t);_e(b,{});var d=E(b,2);d.textContent=r,x(t),h(s,t)}),x(p),R(()=>g(p,"style",w(i))),h(u,p),ce()}var we=P(`<main><div class="container svelte-1e6uoo4"><!> <div><h1 class="svelte-1e6uoo4"></h1> <p class="svelte-1e6uoo4">I'm a software developer building <em>small</em> and <strong>intuitive</strong> solutions to
        try and better the health and happiness of others.</p></div></div> <p class="svelte-1e6uoo4">If you are looking to talk about career opprotunities, please check out my <!> or feel free to <!>.</p> <p class="svelte-1e6uoo4"><strong>Hope you have a great day!</strong></p></main>`);function je(u){var a=we();W(i=>{de.title=z});var e=$(a),f=$(e);Ie(f,{circle:!0});var n=E(f,2),l=$(n);l.textContent=z,I(2),x(n),x(e);var r=E(e,2),m=E($(r));Z(m,{href:"/resume",children:(i,v)=>{I();var c=D("resume");h(i,c)},$$slots:{default:!0}});var o=E(m,2);Z(o,{href:"/contact",children:(i,v)=>{I();var c=D("reach out to me");h(i,c)},$$slots:{default:!0}}),I(),x(r),I(2),x(a),h(u,a)}export{je as component};
