(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{283:function(t,e,n){},285:function(t,e,n){"use strict";var r=n(283);n.n(r).a},290:function(t,e,n){},292:function(t,e,n){"use strict";n(138);var r={props:["items","allitems"],data:function(){return{currentPage:null,pageNumbers:[],pageNumberCount:0,items2:[],query:1,busy:!1,count:0}},methods:{loadMore:function(){if(this.count=this.offset,this.total>this.count&&0==this.busy){this.busy=!0,this.items2.splice(0);for(var i=0;i<2;i++){var t=this.allitems[this.count];this.items2.push(t),this.count++}this.busy=!1}},onResize:function(t){this.navHeight()},navHeight:function(){var t=document.getElementById("navbar").clientHeight;this.$store.commit("SET_NAVHEIGHT",t-1)}},watch:{$route:function(t){t.params,t.query;this.$route.query.page>1?(this.loadMore(),this.navHeight()):null==this.$route.query.page?(this.$route.query.page=1,this.loadMore(),this.navHeight()):(this.loadMore(),this.navHeight())},queryParam:function(){this.loadMore()}},computed:{offset:function(){return this.queryParam>1?2*Number(this.queryParam-1):0},prevpage:function(){return Number(this.queryParam)-1},nextpage:function(){return Number(this.queryParam)+1},navbarheight:function(){return this.$store.state.navheight},total:function(){return this.allitems.length},queryParam:function(){return null==this.$route.query.page?1:Number(this.$route.query.page)},blogPosts:function(){return this.$store.state.blogPosts}},updated:function(){var t=this;this.$nextTick((function(){t.navHeight(),t.$store.commit("SET_GRIDOFFSET",t.offset)}))},mounted:function(){var t=this;this.loadMore(),this.$nextTick((function(){t.navHeight(),window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},o=(n(285),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{style:"margin-top:"+t.navbarheight+"px;"},[n("div",{staticClass:"col xs-col-12 md-col-9"},t._l(t.items2,(function(p,e){return t.items2[e]?n("div",{key:p.pi,staticClass:"xs-border xs-p3",style:"height:calc(50vh - 0px);"},[n("div",{staticClass:"item xs-block xs-flex xs-relative xs-flex-align-start xs-flex-justify-end xs-text-left"},[n("div",{staticClass:"xs-text-left xs-flex xs-flex-justify-end xs-flex-align-end xs-width-auto"},[n("div",{staticClass:"full-bg-link"},[n("nuxt-link",{staticClass:"xs-text-10",attrs:{to:p._path}},[t._v(t._s(p.title))]),t._v(" "),n("span",{staticClass:"xs-text-8"},[t._v("| "+t._s(p.category))])],1)]),t._v(" "),n("nuxt-link",{attrs:{to:p._path}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:p.thumbnail,expression:"p.thumbnail"}],key:p.thumbnail,staticClass:"full-bg-image"}),t._v(" "),p.thumbnail?t._e():n("div",{staticClass:"full-bg-color"})])],1)]):t._e()})),0),t._v(" "),n("aside",{staticClass:"col xs-col-12 md-col-3 xs-p2"},[n("h3",{staticClass:"secondary-title xs-pb2"},[t._v("All Posts")]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.blogPosts,(function(e,i){return n("li",{key:"pg-"+i,staticClass:"zap-slideout-menu-item--small"},[n("nuxt-link",{attrs:{to:e._path}},[t._v(t._s(e.title))])],1)})),0)])])])}),[],!1,null,null,null);e.a=component.exports},299:function(t,e,n){var map={"./art.json":144,"./gratitude.json":145,"./press.json":146,"./recipe.json":147};function r(t){return Promise.resolve().then((function(){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var r=map[t];return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=299,t.exports=r},300:function(t,e,n){"use strict";var r=n(290);n.n(r).a},306:function(t,e,n){"use strict";n.r(e);n(24);var r=n(3),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,t.app,t.payload,t.route,o=t.store,e.next=3,n(299)("./"+r.slug+".json");case 3:return l=e.sent,console.log(l),e.next=7,o.commit("SET_TITLE",l.title);case 7:return e.next=9,o.commit("SET_CRUMB","Categories");case 9:return e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.title+" | "+this.$store.state.siteInfo.sitename}},components:{FullGrid:n(292).a},transition:function(t,e){return e?+t.query.page>+e.query.page?"slide-right":"slide-left":"slide-right"},data:function(){return{}},methods:{theSlug:function(){return this.$route.params.slug}},computed:{allBlogPosts:function(){return this.$store.state.blogPosts},findCatPosts:function(){var t=this.allBlogPosts,title=this.title;return t.filter((function(t){return t.category==title}))}}},l=(n(300),n(8)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"clearfix"},[e("FullGrid",{attrs:{allitems:this.findCatPosts}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);