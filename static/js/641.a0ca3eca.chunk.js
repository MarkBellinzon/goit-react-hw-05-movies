"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[641],{644:function(n,e,t){t.d(e,{Df:function(){return p},Eb:function(){return x},Pg:function(){return d},Ph:function(){return l},fh:function(){return c},l7:function(){return o}});var r=t(861),a=t(687),i=t.n(a),s=t(340),c="https://image.tmdb.org/t/p/w500/",o="https://via.placeholder.com/182x273";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="3bc5ea567716597088a9f8a065113fe0",p=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/week?api_key=".concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},641:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,s,c,o,u,p,l,d=t(861),x=t(439),f=t(687),h=t.n(f),v=t(791),g=t(689),m=t(87),Z=t(644),j=t(168),b=t(686),w=b.Z.span(r||(r=(0,j.Z)(["\n  a {\n    position: relative;\n    padding-left: 12px;\n  }\n\n  \n"]))),k=b.Z.div(a||(a=(0,j.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),_=b.Z.img(i||(i=(0,j.Z)(["\n  max-width: 182px;\n  background: #424242;\n  border-radius: 15px;\n"]))),y=b.Z.h2(s||(s=(0,j.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n"]))),U=b.Z.h3(c||(c=(0,j.Z)(["\n  font-size: 16px;\n  margin-bottom: 6px;\n"]))),S=b.Z.p(o||(o=(0,j.Z)(["\n  font-size: 16px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),z=b.Z.ul(u||(u=(0,j.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: 18px;\n  padding: 0;\n\n  border-radius: 20px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),L=b.Z.ul(p||(p=(0,j.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 14px;\n\n  border-radius: 20px;\n"]))),O=b.Z.li(l||(l=(0,j.Z)(["\n  span {\n    color: #1d66c5;\n  }\n\n\n"]))),C=t(184),P=function(){var n,e,t,r=(0,g.UO)().movieId,a=(0,v.useState)(""),i=(0,x.Z)(a,2),s=i[0],c=i[1],o=(0,g.TH)(),u=null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,v.useEffect)((function(){var n=function(){var n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.Pg)(r);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w,{children:(0,C.jsxs)(m.rU,{to:u,children:["Go back",(0,C.jsx)("span",{children:"."})]})}),(0,C.jsxs)(k,{children:[(0,C.jsx)(_,{src:"".concat(s.poster_path?Z.fh+s.poster_path:Z.l7+"?text="+s.original_title),alt:"get"}),(0,C.jsxs)("div",{children:[(0,C.jsx)(y,{children:s.original_title}),(0,C.jsxs)(U,{children:["Rating: ",Math.round(s.vote_average)]}),(0,C.jsx)(U,{children:"Overview"}),(0,C.jsx)(S,{children:s.overview}),(0,C.jsx)(U,{children:"Genres"}),(0,C.jsx)(z,{children:null===(t=s.genres)||void 0===t?void 0:t.map((function(n){return(0,C.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{children:"Additional information"}),(0,C.jsxs)(L,{children:[(0,C.jsx)(O,{children:(0,C.jsxs)(m.OL,{to:"cast",state:o.state,children:["Cast",(0,C.jsx)("span",{children:"."})]})}),(0,C.jsx)(O,{children:(0,C.jsxs)(m.OL,{to:"reviews",state:o.state,children:["Reviews",(0,C.jsx)("span",{children:"."})]})})]}),(0,C.jsx)(v.Suspense,{fallback:(0,C.jsx)("div",{children:"Loading subpage..."}),children:(0,C.jsx)(g.j3,{})})]})]})}}}]);
//# sourceMappingURL=641.a0ca3eca.chunk.js.map