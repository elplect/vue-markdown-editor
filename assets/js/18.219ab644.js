(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{141:function(t,n,e){"use strict";var o=e(43),r=e(15),c=e(104),i=e(102),a=e(14),u=e(62),s=e(103);t.exports=function(t){var n,e,f,l,h,d,v=r(t),p="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,w=void 0!==m,x=s(v),y=0;if(w&&(m=o(m,g>2?arguments[2]:void 0,2)),null==x||p==Array&&i(x))for(e=new p(n=a(v.length));n>y;y++)d=w?m(v[y],y):v[y],u(e,y,d);else for(h=(l=x.call(v)).next,e=new p;!(f=h.call(l)).done;y++)d=w?c(l,m,[f.value,y],!0):f.value,u(e,y,d);return e.length=y,e}},142:function(t,n,e){"use strict";var o=e(99),r=e(41).getWeakData,c=e(9),i=e(5),a=e(65),u=e(64),s=e(20),f=e(6),l=e(19),h=l.set,d=l.getterFor,v=s.find,p=s.findIndex,g=0,m=function(t){return t.frozen||(t.frozen=new w)},w=function(){this.entries=[]},x=function(t,n){return v(t.entries,(function(t){return t[0]===n}))};w.prototype={get:function(t){var n=x(this,t);if(n)return n[1]},has:function(t){return!!x(this,t)},set:function(t,n){var e=x(this,t);e?e[1]=n:this.entries.push([t,n])},delete:function(t){var n=p(this.entries,(function(n){return n[0]===t}));return~n&&this.entries.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,s){var l=t((function(t,o){a(t,l,n),h(t,{type:n,id:g++,frozen:void 0}),null!=o&&u(o,t[s],t,e)})),v=d(n),p=function(t,n,e){var o=v(t),i=r(c(n),!0);return!0===i?m(o).set(n,e):i[o.id]=e,t};return o(l.prototype,{delete:function(t){var n=v(this);if(!i(t))return!1;var e=r(t);return!0===e?m(n).delete(t):e&&f(e,n.id)&&delete e[n.id]},has:function(t){var n=v(this);if(!i(t))return!1;var e=r(t);return!0===e?m(n).has(t):e&&f(e,n.id)}}),o(l.prototype,e?{get:function(t){var n=v(this);if(i(t)){var e=r(t);return!0===e?m(n).get(t):e?e[n.id]:void 0}},set:function(t,n){return p(this,t,n)}}:{add:function(t){return p(this,t,!0)}}),l}}},147:function(t,n,e){var o=e(1),r=e(141);o({target:"Array",stat:!0,forced:!e(105)((function(t){Array.from(t)}))},{from:r})},148:function(t,n,e){e(97)("asyncIterator")},149:function(t,n,e){e(97)("iterator")},150:function(t,n,e){"use strict";var o=e(98),r=e(106);t.exports=o("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},151:function(t,n,e){e(1)({target:"Object",stat:!0},{setPrototypeOf:e(63)})},152:function(t,n,e){"use strict";var o,r=e(4),c=e(99),i=e(41),a=e(98),u=e(142),s=e(5),f=e(19).enforce,l=e(100),h=!r.ActiveXObject&&"ActiveXObject"in r,d=Object.isExtensible,v=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},p=t.exports=a("WeakMap",v,u);if(l&&h){o=u.getConstructor(v,"WeakMap",!0),i.REQUIRED=!0;var g=p.prototype,m=g.delete,w=g.has,x=g.get,y=g.set;c(g,{delete:function(t){if(s(t)&&!d(t)){var n=f(this);return n.frozen||(n.frozen=new o),m.call(this,t)||n.frozen.delete(t)}return m.call(this,t)},has:function(t){if(s(t)&&!d(t)){var n=f(this);return n.frozen||(n.frozen=new o),w.call(this,t)||n.frozen.has(t)}return w.call(this,t)},get:function(t){if(s(t)&&!d(t)){var n=f(this);return n.frozen||(n.frozen=new o),w.call(this,t)?x.call(this,t):n.frozen.get(t)}return x.call(this,t)},set:function(t,n){if(s(t)&&!d(t)){var e=f(this);e.frozen||(e.frozen=new o),w.call(this,t)?y.call(this,t,n):e.frozen.set(t,n)}else y.call(this,t,n);return this}})}},154:function(t,n,e){var o=e(1),r=e(3),c=e(101).f;o({target:"Object",stat:!0,forced:r((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:c})},155:function(t,n,e){var o=e(1),r=e(3),c=e(5),i=Object.isFrozen;o({target:"Object",stat:!0,forced:r((function(){i(1)}))},{isFrozen:function(t){return!c(t)||!!i&&i(t)}})},336:function(t,n,e){"use strict";e.r(n);e(17),e(147),e(107),e(42),e(170),e(11),e(119),e(50),e(158),e(45);var o=e(143),r=e(145),c=e.n(r),i=(e(146),e(153)),a=e.n(i),u={components:Object(o.a)({},c.a.name,c.a),data:function(){return this.theme=a.a,{text:"\n# heading 1\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n## heading 2\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n### heading 3\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n## heading 2\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n### heading 3\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n",titles:[]}},mounted:function(){var t=this.$refs.editor.$el.querySelectorAll(".v-md-editor-preview h1,h2,h3,h4,h5,h6"),n=Array.from(t).filter((function(t){return!!t.innerText.trim()}));if(n.length){var e=Array.from(new Set(n.map((function(t){return t.tagName})))).sort();this.titles=n.map((function(t){return{title:t.innerText,lineIndex:t.getAttribute("data-v-md-line"),indent:e.indexOf(t.tagName)}}))}else this.titles=[]},methods:{handleAnchorClick:function(t){var n=this.$refs.editor,e=t.lineIndex,o=n.$el.querySelector('.v-md-editor-preview [data-v-md-line="'.concat(e,'"]'));o&&n.previewScrollToTarget({target:o,scrollContainer:window,top:60})}}},s=e(28),f=Object(s.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.titles,(function(n){return e("div",{style:{padding:"10px 0 10px "+20*n.indent+"px"},on:{click:function(e){return t.handleAnchorClick(n)}}},[e("a",{staticStyle:{cursor:"pointer"}},[t._v(t._s(n.title))])])})),t._v(" "),e("v-md-editor",{ref:"editor",attrs:{mode:"preview",theme:t.theme},model:{value:t.text,callback:function(n){t.text=n},expression:"text"}})],2)}),[],!1,null,null,null);n.default=f.exports}}]);