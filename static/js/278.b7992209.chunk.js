(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{595:function(n,t,e){"use strict";e.d(t,{Z:function(){return Z}});var r,a,c,i,s,u=e(689),o=e(134),p=e(168),f=e(686),l=e(87),h=f.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n"]))),d=f.Z.li(a||(a=(0,p.Z)(["\n  list-style: none;\n  padding: 20px;\n  /* margin: 0; */\n"]))),v=(0,f.Z)(l.rU)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n  color: #cf4b4b;\n  :hover {\n    color: #1d66c5;\n    text-shadow: 1px 1px 2px #0e2a50;\n  }\n"]))),x=f.Z.div(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 200px;\n  height: 355px;\n  transition: all 0.5s ease-in;\n\n  :hover {\n    scale: 1.05;\n    transition: all 0.5s ease-in;\n  }\n"]))),g=f.Z.img(s||(s=(0,p.Z)(["\n  width: 200px;\n"]))),m=e(184),Z=function(n){var t=n.movies,e=(0,u.TH)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,m.jsx)(d,{children:(0,m.jsx)(v,{to:"/movies/".concat(t),state:{from:e},children:(0,m.jsxs)(x,{children:[a?(0,m.jsx)(g,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:r}):(0,m.jsx)(o.ofX,{size:200}),r]})})},t)}))}),(0,m.jsx)(u.j3,{})]})}},937:function(){},644:function(n,t,e){"use strict";e.d(t,{Df:function(){return p},Pg:function(){return l},Ph:function(){return f},fh:function(){return s},l7:function(){return u}});var r=e(861),a=e(687),c=e.n(a),i=e(340),s="https://image.tmdb.org/t/p/w500/",u="https://via.placeholder.com/182x273";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="3bc5ea567716597088a9f8a065113fe0",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},278:function(n,t,e){"use strict";e.r(t);var r=e(861),a=e(439),c=e(687),i=e.n(c),s=e(791),u=e(87),o=e(644),p=e(937),f=e.n(p),l=e(595),h=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],p=(0,u.lr)(),d=(0,a.Z)(p,2),v=d[0],x=d[1];return(0,s.useEffect)((function(){var n=v.get("query");if(n){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Ph)(n);case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[v]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f(),{setSearchParams:x}),e.length>0&&(0,h.jsx)(l.Z,{movies:e})]})}}}]);
//# sourceMappingURL=278.b7992209.chunk.js.map