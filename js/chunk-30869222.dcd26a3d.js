(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30869222"],{"50fc":function(e,t,a){"use strict";var n=a("c968");t["a"]={adminSignIn:function(e){var t=e.account,a=e.password;return n["a"].post("/admin/signin",{account:t,password:a})},getAdminUsers:function(){return n["a"].get("/admin/users")},getAdminTweets:function(){return n["a"].get("admin/tweets")},deleteTweet:function(e){var t=e.tweetId;return n["a"].delete("/admin/tweets/".concat(t))}}},fa6a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-tweets"},[a("section",{staticClass:"center-view"},[a("page-name-banner",{attrs:{"banner-title":e.bannerTitle}}),a("ScaleLoader",{attrs:{"is-loading":e.isLoading}}),e.isLoading?e._e():a("admin-feed-list",{attrs:{"initial-tweets":e.tweets},on:{"after-tweet-delete":e.afterTweetDelete}})],1),a("Toast",{attrs:{ToastMessage:e.ToastMessage}})],1)},s=[],i=a("1da1"),r=(a("96cf"),a("7424")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.tweets,(function(t){return a("div",{key:t.id,staticClass:"admin-tweets__tweet"},[a("div",{staticClass:"admin-tweets__tweet__content-wrapper"},[a("img",{staticClass:"admin-tweets__tweet__content-wrapper__avatar",attrs:{src:t.User.avatar,alt:"Avatar"}}),a("div",{staticClass:"admin-tweets__tweet__content-wrapper__detail"},[a("div",{staticClass:"admin-tweets__tweet__content-wrapper__detail__info"},[a("span",{staticClass:"admin-tweets__tweet__content-wrapper__detail__info__name"},[e._v(" "+e._s(t.User.name)+" ")]),a("span",{staticClass:"\n              admin-tweets__tweet__content-wrapper__detail__info__account\n            "},[e._v(" "+e._s(e._f("accountTag")(t.User.account))+" ")]),a("span",{staticClass:"\n              admin-tweets__tweet__content-wrapper__detail__info__post-time\n            "},[e._v(" ・"+e._s(e._f("fromNow")(t.createdAt))+" ")])]),a("div",{staticClass:"admin-tweets__tweet__content-wrapper__detail__text"},[e._v(" "+e._s(e._f("ellipsis")(t.description))+" ")])])]),a("div",{staticClass:"admin-tweets__tweet__delete",on:{click:function(a){return e.handleTweetDelete(t.id)}}})])})),0)},o=[],d=(a("fb6a"),a("4de4"),a("d3b7"),a("2708")),l={props:{initialTweets:{type:Array,required:!0}},mixins:[d["b"],d["a"]],data:function(){return{tweets:[]}},filters:{ellipsis:function(e){var t=50;return e?e.length>t?e.slice(0,t)+"...":e:""}},created:function(){this.updateTweetsData()},watch:{initialTweets:function(){this.updateTweetsData()}},methods:{updateTweetsData:function(){this.tweets=this.initialTweets},handleTweetDelete:function(e){this.$emit("after-tweet-delete",{tweetId:e}),this.tweets=this.tweets.filter((function(t){return t.id!==e}))}}},u=l,_=a("2877"),w=Object(_["a"])(u,c,o,!1,null,null,null),f=w.exports,p=a("50fc"),m=a("de64"),v=a("a0e7"),g={components:{AdminFeedList:f,PageNameBanner:r["a"],Toast:m["a"],ScaleLoader:v["a"]},data:function(){return{bannerTitle:"推文清單",tweets:[],ToastMessage:{message:"",dataStatus:""},isLoading:!0}},created:function(){this.isLoading=!0,this.fetchTweetsData()},methods:{fetchTweetsData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["a"].getAdminTweets();case 3:a=t.sent,n=a.data,e.tweets=n,e.isLoading=!1,t.next=15;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),e.ToastMessage.message="無法取得使用者推文，請稍後再試",e.ToastMessage.dataStatus="error",e.isLoading=!1;case 15:case"end":return t.stop()}}),t,null,[[0,9]])})))()},afterTweetDelete:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.tweetId,a.prev=1,console.log("delete via API",n),a.next=5,p["a"].deleteTweet({tweetId:n});case 5:if(s=a.sent,i=s.data,"success"===i.status){a.next=9;break}throw new Error(i.message);case 9:t.ToastMessage.message="已成功刪除推文 (ID: ".concat(n,")"),t.ToastMessage.dataStatus="success",a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](1),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[1,13]])})))()}}},h=g,T=Object(_["a"])(h,n,s,!1,null,null,null);t["default"]=T.exports},fb6a:function(e,t,a){"use strict";var n=a("23e7"),s=a("da84"),i=a("e8b5"),r=a("68ee"),c=a("861d"),o=a("23cb"),d=a("07fa"),l=a("fc6a"),u=a("8418"),_=a("b622"),w=a("1dde"),f=a("f36a"),p=w("slice"),m=_("species"),v=s.Array,g=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var a,n,s,_=l(this),w=d(_),p=o(e,w),h=o(void 0===t?w:t,w);if(i(_)&&(a=_.constructor,r(a)&&(a===v||i(a.prototype))?a=void 0:c(a)&&(a=a[m],null===a&&(a=void 0)),a===v||void 0===a))return f(_,p,h);for(n=new(void 0===a?v:a)(g(h-p,0)),s=0;p<h;p++,s++)p in _&&u(n,s,_[p]);return n.length=s,n}})}}]);
//# sourceMappingURL=chunk-30869222.dcd26a3d.js.map