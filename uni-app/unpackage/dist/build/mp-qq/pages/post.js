(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post"],{"18e2":function(t,e,n){"use strict";(function(t){n("b5a0"),n("921b");o(n("66fd"));var e=o(n("f304"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},"4c4d":function(t,e,n){"use strict";n.r(e);var o=n("5d5a"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},"5d5a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),i=r(n("058d"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,o,i,r,c){try{var s=t[r](c),a=s.value}catch(u){return void n(u)}s.done?e(a):Promise.resolve(a).then(o,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function s(t){c(r,o,i,s,a,"next",t)}function a(t){c(r,o,i,s,a,"throw",t)}s(void 0)})}}n("89ae"),i.default.locale("zh-cn");var a={data:function(){return{cid:null,postData:[{created:0}],canIUse:wx.canIUse("button.open-type.getUserInfo"),isLogin:!1,isLoading:!0,isLike:!1,likeUsers:[],commentText:null,commentList:[]}},filters:{formatTime:function(t){return i.default.unix(t).format("YYYY年MM月DD日")}},methods:{comment:function(){var e=s(o.default.mark(function e(){var n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLogin||t.showToast({icon:"none",title:"发表评论需要先授权登录"}),null!=this.commentText){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.$api.addComment({cid:this.cid,text:this.commentText});case 5:n=e.sent,console.log("发表评论",n),this.commentText=null,t.showToast({icon:"none",title:"评论成功,等待审核"});case 9:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),loadUserInfo:function(e){var n=this;console.log("授权登录",e.detail.errMsg),"getUserInfo:fail auth deny"!=e.detail.errMsg&&(this.isLogin=!0),wx.login({success:function(){var e=s(o.default.mark(function e(i){return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("尝试登录",i),i.code?wx.getSetting({success:function(){var e=s(o.default.mark(function e(r){var c;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r.authSetting["scope.userInfo"]){e.next=5;break}console.log("用户已授权",r),wx.getUserInfo({success:function(){var e=s(o.default.mark(function e(r){var c,s;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("尝试获取用户信息",r),c={code:i.code},Object.assign(c,r.userInfo),e.next=5,n.$api.login(c);case 5:s=e.sent,t.setStorageSync("openid",s);case 7:case"end":return e.stop()}},e,this)}));function r(t){return e.apply(this,arguments)}return r}()}),e.next=9;break;case 5:return e.next=7,n.$api.login({code:i.code});case 7:c=e.sent,t.setStorageSync("openid",c);case 9:case"end":return e.stop()}},e,this)}));function r(t){return e.apply(this,arguments)}return r}()}):console.log("登录失败！"+i.errMsg);case 2:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}()})},like:function(){this.$api.likePost({cid:this.cid}),this.isLike=!0},reward:function(){var t=qq.createRewardedVideoAd({adUnitId:"2623e52894edca46483527a4e2355e2e"});t.onError(function(t){console.log("videoAd onError",t)}),t.onLoad(function(t){console.log("videoAd onLoad",t)}),t.onClose(function(t){console.log("videoAd onClose",t)}),t.load().then(function(){console.log("激励视频加载成功"),t.show().then(function(){console.log("激励视频 广告显示成功")}).catch(function(t){console.log("激励视频 广告显示失败")})}).catch(function(t){console.log("激励视频加载失败")})}},onLoad:function(){var t=s(o.default.mark(function t(e){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.cid=e.cid,t.next=3,this.$api.getPostBycid({cid:e.cid});case 3:this.postData=t.sent,console.log("请求成功"),this.isLoading=!1;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=s(o.default.mark(function t(){var e,n,i=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=qq.createAppBox({adUnitId:"07eb0e16234bc22f48cf909c3cd40cc4"}),e.load().then(function(){e.show()}),wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&(i.isLogin=!0)}}),t.next=5,this.$api.getPostLikeStatus({cid:this.cid});case 5:return n=t.sent,console.log("获取点赞状态",n),this.isLike=JSON.parse(n),t.next=10,this.$api.getLikeUsers({cid:this.cid});case 10:return n=t.sent,console.log("文章点赞用户列表",n),this.likeUsers=n,t.next=15,this.$api.getComment({cid:this.cid});case 15:n=t.sent,this.commentList=n;case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShareAppMessage:function(){return{title:this.postData[0].title}}};e.default=a}).call(this,n("a821")["default"])},"5fbe":function(t,e,n){},"733c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("formatTime")(t.postData[0].created)),o=t.__map(t.commentList,function(e,n){var o=t._f("formatTime")(e.created);return{$orig:t.__get_orig(e),f1:o}});t.$mp.data=Object.assign({},{$root:{f0:n,l0:o}})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},e4b5:function(t,e,n){"use strict";var o=n("5fbe"),i=n.n(o);i.a},f304:function(t,e,n){"use strict";n.r(e);var o=n("733c"),i=n("4c4d");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("e4b5");var c=n("2877"),s=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports}},[["18e2","common/runtime","common/vendor"]]]);