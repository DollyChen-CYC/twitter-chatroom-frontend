(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4334439e"],{"23b1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"center-view"},[s("div",{staticClass:"admin-login"},[s("Toast",{attrs:{ToastMessage:t.ToastMessage}}),s("div",{staticClass:"logo"}),s("h2",[t._v("後台登入")]),s("account-login-form",{attrs:{isProcessing:t.isProcessing,clearPasswordInput:t.clearPasswordInput},on:{"after-form-submit":t.afterFormSubmit}}),s("div",{staticClass:"login__actions"},[s("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("前台登入")])],1)],1)])},n=[],r=s("1da1"),o=(s("96cf"),s("6b61")),c=s("de64"),i=s("50fc"),u={components:{AccountLoginForm:o["a"],Toast:c["a"]},data:function(){return{ToastMessage:{message:"",dataStatus:""},backendReturnStatus:!1,isProcessing:!1,clearPasswordInput:!1}},methods:{afterFormSubmit:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,e.isProcessing=!0,e.clearPasswordInput=!1,s.next=5,i["a"].adminSignIn({account:t.account,password:t.password});case 5:if(a=s.sent,n=a.data,"success"===n.status){s.next=12;break}throw e.sendToastMessage(n.message),new Error(n.message);case 12:if("admin"===n.user.role){s.next=15;break}throw e.sendToastMessage("帳號不存在或密碼錯誤!"),new Error;case 15:localStorage.setItem("token",n.token),e.$store.commit("setCurrentUser",n.user),e.$router.push({name:"admin-tweets"}),s.next=25;break;case 20:s.prev=20,s.t0=s["catch"](0),console.log(s.t0),e.isProcessing=!1,e.clearPasswordInput=!0;case 25:case"end":return s.stop()}}),s,null,[[0,20]])})))()},sendToastMessage:function(t){this.ToastMessage.dataStatus="",this.ToastMessage.dataStatus="error",this.ToastMessage.message=t}}},d=u,l=s("2877"),g=Object(l["a"])(d,a,n,!1,null,null,null);e["default"]=g.exports},"50fc":function(t,e,s){"use strict";var a=s("c968");e["a"]={adminSignIn:function(t){var e=t.account,s=t.password;return a["a"].post("/admin/signin",{account:e,password:s})},getAdminUsers:function(){return a["a"].get("/admin/users")},getAdminTweets:function(){return a["a"].get("admin/tweets")},deleteTweet:function(t){var e=t.tweetId;return a["a"].delete("/admin/tweets/".concat(e))}}}}]);
//# sourceMappingURL=chunk-4334439e.d764c690.js.map