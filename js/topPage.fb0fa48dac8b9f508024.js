webpackJsonp([0],{170:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(173),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r=s(177),o=s(38),c=Object(o.a)(i.a,r.a,r.b,!1,null,null,null);e.default=c.exports},173:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(176),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"TopPage",components:{},mixins:[i.default],data:function(){return{fbImg:"https://user-images.githubusercontent.com/747840/36630450-d4882fe4-19a9-11e8-895a-3caa145647a4.png"}},created:function(){this.fetchImages()},methods:{fallbackImage:function(t){t.target.src=this.fbImg},copyUrlAsMarkdownFormat:function(t){var e="![LGTM]("+t+")";this.execCopy(e)?this.$snackbar.open({type:"is-success",message:"URL (Markdown) copied!",duration:750}):this.$snackbar.open({type:"is-danger",message:"Failed to copy!",duration:750})},copyUrl:function(t){var e=t;this.execCopy(e)?this.$snackbar.open({type:"is-success",message:"URL copied!",duration:750}):this.$snackbar.open({type:"is-danger",message:"Failed to copy!",duration:750})},execCopy:function(t){var e=document.createElement("div");e.appendChild(document.createElement("pre")).textContent=t;var s=e.style;s.position="fixed",s.left="-100%",document.body.appendChild(e),document.getSelection().selectAllChildren(e);var a=document.execCommand("copy");return document.body.removeChild(e),a}}}},176:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(18),n=a(i),r=s(19),o=a(r),c=s(72),u=a(c),l=s(20),d=s(21),m=s(17),p=a(m);e.default={computed:(0,u.default)({},(0,l.mapState)("Image",["images","cancellationToken"])),methods:{requestStart:function(){this.errorMessage="",this.isLoading=!0},fetchImages:function(){function t(){return e.apply(this,arguments)}var e=(0,o.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.requestStart(),t.next=4,d.Xhr.getWithoutToken("",{},p.default.Api.masterUrl);case 4:e=t.sent,this.success(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.error(t.t0);case 11:return t.prev=11,this.requestEnd(),t.finish(11);case 14:case"end":return t.stop()}},t,this,[[0,8,11,14]])}));return t}(),success:function(t){this.$store.commit("Image/updateImages",t.data,t.continuationToken)},error:function(t){switch(t.response.status){case 401:this.errorMessage="Required (re)authentication";break;case 403:this.errorMessage="API rate limit exceeded";break;default:this.errorMessage=t.response.data.errorMessage}},requestEnd:function(){this.isLoading=!1}}}},177:function(t,e,s){"use strict";s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container is-fullhd"},[s("div",{staticStyle:{paddingBottom:"15px"}},[s("h1",[t._v("How to use:")]),s("ul",[s("li",[s("b-icon",{attrs:{icon:"mouse-pointer",size:"is-small"}}),s("span",[t._v(" To copy the image url, click on it!")])],1),s("li",[s("b-icon",{attrs:{icon:"copy",size:"is-small"}}),s("span",[t._v(" To copy the markdown format image url, click on the right bottom button of the image!")])],1),s("li",[s("b-icon",{attrs:{icon:"image",size:"is-small"}}),s("span",[t._v(" To post the image url, login with github (on the top right side button) and go to the post page!")])],1)])]),s("div",{directives:[{name:"masonry",rawName:"v-masonry",value:!0,expression:"true"}],attrs:{id:"images","transition-duration":"0.3s","item-selector":".item","column-width":".item"}},t._l(t.images.data,function(e,a){return s("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile",value:!0,expression:"true"}],staticClass:"item",staticStyle:{width:"25%"}},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:e.Url},on:{click:function(s){t.copyUrl(e.Url)},error:t.fallbackImage}}),s("div",{staticClass:"field has-addons",staticStyle:{position:"absolute",right:"10px",bottom:"10px"}},[s("p",{staticClass:"control"},[s("a",{staticClass:"button is-info is-outlined",on:{click:function(s){t.copyUrlAsMarkdownFormat(e.Url)}}},[t._m(0,!0)])]),t._m(1,!0)])])])}))])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fa fa-copy"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"control"},[s("a",{staticClass:"button is-danger is-outlined"},[s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fa fa-heart"})])])])}]}});