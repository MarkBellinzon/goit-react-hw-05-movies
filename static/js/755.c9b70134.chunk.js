"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[755],{595:function(n,e,t){t.d(e,{Z:function(){return b}});var r,a,c,i,o,u=t(689),s=t(134),p=t(168),f=t(686),l=t(87),d=f.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  /* gap: 20px; */\n  padding: 0;\n  margin: 0;\n"]))),h=f.Z.li(a||(a=(0,p.Z)(["\n  list-style: none;\n  padding: 20px;\n  /* margin: 0; */\n"]))),x=(0,f.Z)(l.rU)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n   :hover {\n    color: #1d66c5;\n    text-shadow: 1px 1px 2px #0e2a50;\n  }\n"]))),v=f.Z.div(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 200px;\n  height: 300px;\n  margin-bottom: 20px;\n  transition: all 0.5s ease-in;\n  /* border: 1px solid #ffffff; */\n\n  :hover {\n    scale: 1.05;\n    transition: all 0.5s ease-in;\n  }\n"]))),g=f.Z.img(o||(o=(0,p.Z)(["\n  width: 200px;\n"]))),m=t(184),b=function(n){var e=n.movies,t=(0,u.TH)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,m.jsx)(h,{children:(0,m.jsx)(x,{to:"/movies/".concat(e),state:{from:t},children:(0,m.jsxs)(v,{children:[a?(0,m.jsx)(g,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:r}):(0,m.jsx)(s.ofX,{size:200}),r]})})},e)}))}),(0,m.jsx)(u.j3,{})]})}},644:function(n,e,t){t.d(e,{Df:function(){return p},Eb:function(){return d},Hu:function(){return h},Pg:function(){return l},Ph:function(){return f},fh:function(){return o},l7:function(){return u}});var r=t(861),a=t(687),c=t.n(a),i=t(340),o="https://image.tmdb.org/t/p/w500/",u="https://via.placeholder.com/182x273";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3bc5ea567716597088a9f8a065113fe0",p=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},755:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,c=t(861),i=t(439),o=t(687),u=t.n(o),s=t(791),p=t(87),f=t(644),l=t(168),d=t(686),h=d.Z.input(r||(r=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  padding: 15px 16px;\n\n  color: rgba(149, 227, 233, 0.2);\n\n  background: #2b2b2b;\n  border-radius: 10px;\n\n  :active,\n  :focus,\n  :hover {\n    color: #1d66c5;\n  }\n"]))),x=d.Z.button(a||(a=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  margin-left: 12px;\n  padding: 15px 16px;\n\n  color: rgba(149, 227, 233, 0.2);\n\n  background: #2b2b2b;\n  border-radius: 10px;\n  cursor: pointer;\n\n  :not(:disabled):active,\n  :focus,\n  :not(:disabled):hover {\n    color: #1d66c5;\n  }\n"]))),v=t(184),g=function(n){var e=n.setSearchParams,t=(0,s.useState)(""),r=(0,i.Z)(t,2),a=r[0],c=r[1];return(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e({query:a})},children:[(0,v.jsx)(h,{type:"text",placeholder:"Name movie",autoFocus:!0,value:a,onChange:function(n){var e=n.target.value;c(e)}}),(0,v.jsx)(x,{type:"submit",disabled:!a,children:"Search"})]})},m=t(595),b=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,p.lr)(),o=(0,i.Z)(a,2),l=o[0],d=o[1];return(0,s.useEffect)((function(){var n=l.get("query");if(n){var e=function(){var e=(0,c.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Ph)(n);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{setSearchParams:d}),t.length>0&&(0,v.jsx)(m.Z,{movies:t})]})}}}]);
//# sourceMappingURL=755.c9b70134.chunk.js.map