import{c as B,g as F,d as E,n as G,j as q}from"./disclose-version.BzwPWUd8.js";import"./legacy.BIdSL2G0.js";import{i as r,j as x,o as y,h as J,E as M,n as O,J as U,q as V,l as S,s as W,y as Y,au as P,p as Z,m as D,G as H,Y as K,$ as A,Z as L,a0 as Q,a6 as X,a2 as $,a1 as ee,g as j}from"./runtime.D4NNKlbh.js";import{e as te,i as ae}from"./each.BcpxUGUn.js";import{a as z}from"./render.dp4tZE2T.js";import{a as T}from"./class.BmitFDZn.js";import{i as se}from"./lifecycle.DWunFCzx.js";import{l as I,p as f}from"./props.Dyw_wttE.js";function ne(c,e,u,l,h){var n;r&&x();var o=(n=e.$$slots)==null?void 0:n[u],i=!1;o===!0&&(o=e.children,i=!0),o===void 0||o(c,i?()=>l:l)}function re(c,e,u,l,h,o){let i=r;r&&x();var n,d,t=null;r&&y.nodeType===1&&(t=y,x());var g=r?y:c,a;J(()=>{const s=e()||null;var v=P;s!==n&&(a&&(s===null?Z(a,()=>{a=null,d=null}):s===d?D(a):(H(a),z(!1))),s&&s!==d&&(a=O(()=>{t=r?t:document.createElementNS(v,s),B(t,t);{r&&F(s)&&t.append(document.createComment(""));var m=r?U(t):t.appendChild(V());r&&(m===null?S(!1):W(m)),l(t,m)}Y.nodes_end=t,g.before(t)})),n=s,n&&(d=n),z(!0))},M),i&&(S(!0),W(g))}/**
 * @license lucide-svelte v0.473.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var oe=G("<svg><!><!></svg>");function ve(c,e){const u=I(e,["children","$$slots","$$events","$$legacy"]),l=I(u,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);K(e,!1);let h=f(e,"name",8,void 0),o=f(e,"color",8,"currentColor"),i=f(e,"size",8,24),n=f(e,"strokeWidth",8,2),d=f(e,"absoluteStrokeWidth",8,!1),t=f(e,"iconNode",24,()=>[]);const g=(...p)=>p.filter((_,b,k)=>!!_&&k.indexOf(_)===b).join(" ");se();var a=oe();let s;var v=Q(a);te(v,1,t,ae,(p,_)=>{let b=()=>j(_)[0],k=()=>j(_)[1];var N=q(),R=X(N);re(R,b,!0,(w,le)=>{let C;A(()=>C=T(w,C,{...k()},void 0,w.namespaceURI===P,w.nodeName.includes("-")))}),E(p,N)});var m=$(v);ne(m,e,"default",{}),ee(a),A(()=>s=T(a,s,{...ie,...l,width:i(),height:i(),stroke:o(),"stroke-width":d()?Number(n())*24/Number(i()):n(),class:g("lucide-icon","lucide",h()?`lucide-${h()}`:"",u.class)},void 0,!0)),E(c,a),L()}export{ve as I,ne as s};
