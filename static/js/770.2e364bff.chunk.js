"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[770],{770:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u,c=e(861),i=e(439),o=e(687),s=e.n(o),p=e(644),f=e(791),l=e(689),v=e(168),h=e(686),d=h.Z.ul(r||(r=(0,v.Z)(["\n  margin-top: 12px;\n"]))),g=h.Z.li(a||(a=(0,v.Z)(["\n  font-size: 14px;\n  padding: 6px;\n \n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  span {\n    color: #1d66c5;\n  }\n"]))),x=h.Z.p(u||(u=(0,v.Z)(["\n  color: #9e9999;\n  margin-top: 6px;\n"]))),m=e(184),w=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)([]),e=(0,i.Z)(t,2),r=e[0],a=e[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,c.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Hu)(n);case 3:e=t.sent,a(e),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),0===r.length?(0,m.jsx)("h3",{children:"No Reviews"}):(0,m.jsx)(d,{children:r.map((function(n){n.id;var t=n.author,e=n.content;return(0,m.jsxs)(g,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"Author:"})," ",t]}),(0,m.jsx)(x,{children:e})]})}))})}},644:function(n,t,e){e.d(t,{Df:function(){return p},Eb:function(){return v},Hu:function(){return h},Pg:function(){return l},Ph:function(){return f},fh:function(){return i},l7:function(){return o}});var r=e(861),a=e(687),u=e.n(a),c=e(340),i="https://image.tmdb.org/t/p/w500/",o="https://via.placeholder.com/182x273";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3bc5ea567716597088a9f8a065113fe0",p=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=770.2e364bff.chunk.js.map