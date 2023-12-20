"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{595:function(n,t,e){e.d(t,{Z:function(){return Z}});var r,a,c,i,u,s=e(689),o=e(134),f=e(168),p=e(686),l=e(87),d=p.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  /* gap: 20px; */\n  padding: 0;\n  margin: 0;\n"]))),h=p.Z.li(a||(a=(0,f.Z)(["\n  list-style: none;\n  padding: 20px;\n  /* margin: 0; */\n"]))),x=(0,p.Z)(l.rU)(c||(c=(0,f.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n   :hover {\n    color: #1d66c5;\n    text-shadow: 1px 1px 2px #0e2a50;\n  }\n"]))),v=p.Z.div(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 200px;\n  height: 300px;\n  margin-bottom: 20px;\n  transition: all 0.5s ease-in;\n  /* border: 1px solid #ffffff; */\n\n  :hover {\n    scale: 1.05;\n    transition: all 0.5s ease-in;\n  }\n"]))),g=p.Z.img(u||(u=(0,f.Z)(["\n  width: 200px;\n"]))),m=e(184),Z=function(n){var t=n.movies,e=(0,s.TH)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,m.jsx)(h,{children:(0,m.jsx)(x,{to:"/movies/".concat(t),state:{from:e},children:(0,m.jsxs)(v,{children:[a?(0,m.jsx)(g,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:r}):(0,m.jsx)(o.ofX,{size:200}),r]})})},t)}))}),(0,m.jsx)(s.j3,{})]})}},644:function(n,t,e){e.d(t,{Df:function(){return f},Eb:function(){return d},Hu:function(){return h},Pg:function(){return l},Ph:function(){return p},fh:function(){return u},l7:function(){return s}});var r=e(861),a=e(687),c=e.n(a),i=e(340),u="https://image.tmdb.org/t/p/w500/",s="https://via.placeholder.com/182x273";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="3bc5ea567716597088a9f8a065113fe0",f=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},544:function(n,t,e){e.r(t);var r=e(439),a=e(791),c=e(644),i=e(595),u=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,a.useEffect)((function(){(0,c.Df)("").then(s)}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)(i.Z,{movies:e})]})}}}]);
//# sourceMappingURL=544.497bb205.chunk.js.map