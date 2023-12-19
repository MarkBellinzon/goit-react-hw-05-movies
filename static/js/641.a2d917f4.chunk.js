"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[641],{644:function(n,e,t){t.d(e,{Df:function(){return p},Eb:function(){return f},Hu:function(){return x},Pg:function(){return l},Ph:function(){return d},fh:function(){return s},l7:function(){return c}});var r=t(861),a=t(687),i=t.n(a),o=t(340),s="https://image.tmdb.org/t/p/w500/",c="https://via.placeholder.com/182x273";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="3bc5ea567716597088a9f8a065113fe0",p=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week?api_key=".concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},641:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,o,s,c,u,p,d,l=t(861),f=t(439),x=t(687),h=t.n(x),v=t(791),g=t(689),b=t(87),m=t(644),Z=t(168),w=t(686),k=w.Z.span(r||(r=(0,Z.Z)(["\n  a {\n    position: relative;\n    padding-left: 12px;\n    padding-right: 12px;\n   \n     border: #f71111;\n     font-weight: 64px;\n  }\n  color: #ffffff;\nmargin-bottom: 20px;\n  box-shadow: 0 0 5px #ee2b2b, 0 0 20px #ee2b2b, 0 0 40px #ee2b2b,\n    0 0 200px #ee2b2b;\n  -moz-transition: background-color 0.8s 0.1s ease;\n  -o-transition: background-color 0.8s 0.1s ease;\n  -webkit-transition: background-color 0.8s 0.1s ease;\n background-color: #d60e0e;\n"]))),j=w.Z.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),_=w.Z.img(i||(i=(0,Z.Z)(["\n  max-width: 182px;\n  background: #424242;\n  border-radius: 15px;\n"]))),y=w.Z.h2(o||(o=(0,Z.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n"]))),U=w.Z.h3(s||(s=(0,Z.Z)(["\n  font-size: 16px;\n  margin-bottom: 6px;\n"]))),S=w.Z.p(c||(c=(0,Z.Z)(["\n  font-size: 16px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),z=w.Z.ul(u||(u=(0,Z.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: 18px;\n  padding: 0;\n\n  border-radius: 20px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),L=w.Z.ul(p||(p=(0,Z.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 14px;\n\n  border-radius: 20px;\n"]))),O=w.Z.li(d||(d=(0,Z.Z)(["\n  span {\n    color: #1d66c5;\n  }\n"]))),C=t(184),P=function(){var n,e,t,r=(0,g.UO)().movieId,a=(0,v.useState)(""),i=(0,f.Z)(a,2),o=i[0],s=i[1],c=(0,g.TH)(),u=null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,v.useEffect)((function(){var n=function(){var n=(0,l.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.Pg)(r);case 3:e=n.sent,s(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(k,{children:(0,C.jsx)(b.rU,{to:u,children:" Go back"})}),(0,C.jsxs)(j,{children:[(0,C.jsx)(_,{src:"".concat(o.poster_path?m.fh+o.poster_path:m.l7+"?text="+o.original_title),alt:"get"}),(0,C.jsxs)("div",{children:[(0,C.jsx)(y,{children:o.original_title}),(0,C.jsxs)(U,{children:["Rating: ",Math.round(o.vote_average)]}),(0,C.jsx)(U,{children:"Overview"}),(0,C.jsx)(S,{children:o.overview}),(0,C.jsx)(U,{children:"Genres"}),(0,C.jsx)(z,{children:null===(t=o.genres)||void 0===t?void 0:t.map((function(n){return(0,C.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{children:"Additional information"}),(0,C.jsxs)(L,{children:[(0,C.jsx)(O,{children:(0,C.jsx)(b.OL,{to:"cast",state:c.state,children:"Cast"})}),(0,C.jsx)(O,{children:(0,C.jsx)(b.OL,{to:"reviews",state:c.state,children:"Reviews"})})]}),(0,C.jsx)(v.Suspense,{fallback:(0,C.jsx)("div",{children:"Loading subpage..."}),children:(0,C.jsx)(g.j3,{})})]})]})}}}]);
//# sourceMappingURL=641.a2d917f4.chunk.js.map