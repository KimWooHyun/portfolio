webpackJsonp([3],{"1BFP":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("button",{on:{click:function(e){t.changeStatus()}}},[t.isShow?a("i",{staticClass:"fas fa-times"}):a("i",{staticClass:"fas fa-bars"})]),a("div",{class:["div-contents",t.isShow?"show":"hide"]},[a("div",{staticClass:"flex flex-wrap flex-ai-center flex-jc-center div-list-wrapper"},[a("ul",[a("li",[a("nuxt-link",{attrs:{to:"/#home"},nativeOn:{click:function(e){t.changeStatus()}}},[t._v("Home")])],1),a("li",[a("nuxt-link",{attrs:{to:"/#about"},nativeOn:{click:function(e){t.changeStatus()}}},[t._v("About")])],1),a("li",[a("nuxt-link",{attrs:{to:"/#work"},nativeOn:{click:function(e){t.changeStatus()}}},[t._v("Work")])],1),a("li",[a("nuxt-link",{attrs:{to:"/#pa"},nativeOn:{click:function(e){t.changeStatus()}}},[t._v("Personal Activities")])],1)])])])])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},"9hJf":function(t,e,a){var n=a("Lsej");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("dfb8a67e",n,!1,{sourceMap:!1})},Lsej:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},NVJF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VTgC"),i=a("SbGV"),o=!1;var s=function(t){o||a("9hJf")},r=a("VU/8")(n.a,i.a,!1,s,null,null);r.options.__file="layouts/noFooter.vue",e.default=r.exports},SbGV:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),e("nuxt")],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},VTgC:function(t,e,a){"use strict";var n=a("i02t");e.a={name:"default",components:{AppHeader:n.a}}},dtQP:function(t,e,a){var n=a("lplM");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("0378b6bd",n,!1,{sourceMap:!1})},i02t:function(t,e,a){"use strict";var n=a("t/zk"),i=a("1BFP"),o=!1;var s=function(t){o||a("dtQP")},r=a("VU/8")(n.a,i.a,!1,s,"data-v-5e9705f6",null);r.options.__file="components/common/AppHeader.vue",e.a=r.exports},lplM:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"header[data-v-5e9705f6]{position:absolute;top:0;right:0;width:100%;z-index:10}header button[data-v-5e9705f6]{position:absolute;top:10px;right:10px;background:none;color:#fff;font-size:36px;border:none;z-index:1}header .fa-times[data-v-5e9705f6]{color:#000}header .div-contents[data-v-5e9705f6]{position:absolute;top:0;left:0;width:100%;height:80vh;background-color:hsla(0,0%,100%,.9);-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.3);box-shadow:0 1px 4px 0 rgba(0,0,0,.3)}header .div-contents .div-list-wrapper[data-v-5e9705f6]{height:100%}header li[data-v-5e9705f6]{padding:10px 0}header li a[data-v-5e9705f6]{font-size:36px;text-decoration:none}header li a[data-v-5e9705f6]:hover{border-bottom:5px solid #444}@media only screen and (min-width:768px){header .div-contents[data-v-5e9705f6]{height:60vh}}",""])},"t/zk":function(t,e,a){"use strict";e.a={name:"app-header",data:function(){return{isShow:!1}},methods:{changeStatus:function(){this.isShow=!this.isShow}}}}});