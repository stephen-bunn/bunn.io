import{aI as D,aG as m,ao as E,z as N,l as g,h as l,q as R,aB as P,j as V,g as y,b as W,aJ as q,J as B,F as L,c as k,s as w,f as s,x as _,aK as F,aL as j,a as G}from"./runtime.B2MlHuaj.js";function ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const H=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function te(e){return H.includes(e)}const U={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function re(e){return e=e.toLowerCase(),U[e]??e}const $=["touchstart","touchmove"];function ae(e){return $.includes(e)}const z=["textarea","script","style","title"];function ne(e){return z.includes(e)}function oe(e,t,r,o=!0){o&&r();for(var n of t)e.addEventListener(n,r);D(()=>{for(var a of t)e.removeEventListener(a,r)})}function J(e){var t=N,r=g;m(null),E(null);try{return e()}finally{m(t),E(r)}}const K=new Set,X=new Set;function ie(e){if(!l)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function ue(e,t,r,o){function n(a){if(o.capture||Y.call(t,a),!a.cancelBubble)return J(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?R(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function se(e){for(var t=0;t<e.length;t++)K.add(e[t]);for(var r of X)r(e)}function Y(e){var S;var t=this,r=t.ownerDocument,o=e.type,n=((S=e.composedPath)==null?void 0:S.call(e))||[],a=n[0]||e.target,u=0,d=e.__root;if(d){var c=n.indexOf(d);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var b=n.indexOf(t);if(b===-1)return;c<=b&&(u=c)}if(a=n[u]||e.target,a!==t){P(e,"currentTarget",{configurable:!0,get(){return a||r}});var M=N,I=g;m(null),E(null);try{for(var v,A=[];a!==null;){var T=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+o];if(p!==void 0&&!a.disabled)if(V(p)){var[C,...O]=p;C.apply(a,[e,...O])}else p.call(a,e)}catch(h){v?A.push(h):v=h}if(e.cancelBubble||T===t||T===null)break;a=T}if(v){for(let h of A)queueMicrotask(()=>{throw h});throw v}}finally{e.__root=t,delete e.currentTarget,m(M),E(I)}}}let i;function ce(){i=void 0}function le(e){let t=null,r=l;var o;if(l){for(t=s,i===void 0&&(i=_(document.head));i!==null&&(i.nodeType!==8||i.data!==B);)i=L(i);i===null?k(!1):i=w(L(i))}l||(o=document.head.appendChild(y()));try{W(()=>e(o),q)}finally{r&&(k(!0),i=s,w(t))}}function x(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function f(e,t){var r=g;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function fe(e,t){var r=(t&F)!==0,o=(t&j)!==0,n,a=!e.startsWith("<!>");return()=>{if(l)return f(s,null),s;n===void 0&&(n=x(a?e:"<!>"+e),r||(n=_(n)));var u=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=_(u),c=u.lastChild;f(d,c)}else f(u,u);return u}}function de(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(l)return f(s,null),s;if(!a){var u=x(n),d=_(u);a=_(d)}var c=a.cloneNode(!0);return f(c,c),c}}function _e(e=""){if(!l){var t=y(e+"");return f(t,t),t}var r=s;return r.nodeType!==3&&(r.before(r=y()),w(r)),f(r,r),r}function ve(){if(l)return f(s,null),s;var e=document.createDocumentFragment(),t=document.createComment(""),r=y();return e.append(t,r),f(t,r),e}function pe(e,t){if(l){g.nodes_end=s,G();return}e!==null&&e.before(t)}const Q="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);export{K as a,ce as b,f as c,pe as d,le as e,_e as f,ne as g,Y as h,ae as i,ve as j,ee as k,ue as l,se as m,de as n,re as o,te as p,oe as q,X as r,ie as s,fe as t,J as w};
