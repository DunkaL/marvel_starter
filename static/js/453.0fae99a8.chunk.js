"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[453],{1748:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var s=t(4270),c=t(3433),r=t(9439),i=t(2791),a=t(1087),o=t(3394),u=t(9613),l=t(4304),m=t(184),d=function(e,n,t){switch(e){case"waiting":return(0,m.jsx)(o.Z,{});case"loading":return t?(0,m.jsx)(n,{}):(0,m.jsx)(o.Z,{});case"confirmed":return(0,m.jsx)(n,{});case"error":return(0,m.jsx)(u.Z,{});default:throw new Error("Unexpected process state")}},f=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],o=(0,i.useState)(!1),u=(0,r.Z)(o,2),f=u[0],h=u[1],x=(0,i.useState)(0),j=(0,r.Z)(x,2),_=j[0],p=j[1],v=(0,i.useState)(!1),g=(0,r.Z)(v,2),Z=g[0],b=g[1],N=(0,l.Z)(),w=N.getAllComics,k=N.process,C=N.setProcess;(0,i.useEffect)((function(){S(_,!0)}),[]);var S=function(e,n){h(!n),w(e).then(y).then((function(){return C("confirmed")}))},y=function(e){var n=!1;e.length<8&&(n=!0),s((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(e))})),h((function(e){return!1})),p((function(e){return e+8})),b((function(e){return n}))};return(0,m.jsxs)("div",{className:"comics__list",children:[d(k,(function(){return function(e){var n=e.map((function(e,n){return(0,m.jsx)("li",{className:"comics__item",children:(0,m.jsxs)(a.rU,{to:"/marvel_starter/comics/".concat(e.id),children:[(0,m.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,m.jsx)("div",{className:"comics__item-name",children:e.title}),(0,m.jsx)("div",{className:"comics__item-price",children:e.price})]})},n)}));return(0,m.jsx)("ul",{className:"comics__grid",children:n})}(t)}),f),(0,m.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:Z?"none":"block"},onClick:function(){return S(_)},children:(0,m.jsx)("div",{className:"inner",children:"load more"})})]})},h=t(3957),x=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(s.q,{children:[(0,m.jsx)("meta",{name:"description",content:"Page with list of aur comics"}),(0,m.jsx)("title",{children:"Comics page"})]}),(0,m.jsx)(h.Z,{}),(0,m.jsx)(f,{})]})}}}]);
//# sourceMappingURL=453.0fae99a8.chunk.js.map