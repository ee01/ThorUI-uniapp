(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-msgtips-msgtips"],{"0583":function(t,n,e){var i=e("b945");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("1f3138b8",i,!0,{sourceMap:!1,shadowMode:!1})},"0c09":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return"top"==t.position?[e("v-uni-view",{staticClass:"tui-tips-class tui-toptips",class:["tui-"+t.type,t.show?"tui-top-show":""]},[t._v(t._s(t.msg))])]:[e("v-uni-view",{staticClass:"tui-tips-class tui-toast",class:["center"==t.position?"tui-centertips":"tui-bottomtips",t.show?"tui-toast-show":""]},[e("v-uni-view",{staticClass:"tui-tips-content",class:["tui-"+t.type]},[t._v(t._s(t.msg))])],1)]},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"25c94":function(t,n,e){"use strict";e.r(n);var i=e("2d2c"),a=e("7392");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("ae86");var r=e("2877"),o=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"e0b39236",null);n["default"]=o.exports},"2d2c":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[0==t.index?e("tui-tips",{ref:"toast"}):t._e(),1==t.index?e("tui-tips",{ref:"toast",attrs:{position:"center"}}):t._e(),2==t.index?e("tui-tips",{ref:"toast",attrs:{position:"bottom"}}):t._e(),e("v-uni-view",{staticClass:"tui-subsection"},[e("v-uni-view",{class:[0==t.index?"tui-active":""],attrs:{"data-index":"0"},on:{click:function(n){n=t.$handleEvent(n),t.switchTabs(n)}}},[t._v("顶部提示")]),e("v-uni-view",{class:[1==t.index?"tui-active":""],attrs:{"data-index":"1"},on:{click:function(n){n=t.$handleEvent(n),t.switchTabs(n)}}},[t._v("居中提示")]),e("v-uni-view",{class:[2==t.index?"tui-active":""],attrs:{"data-index":"2"},on:{click:function(n){n=t.$handleEvent(n),t.switchTabs(n)}}},[t._v("底部提示")])],1),e("v-uni-button",{staticClass:"btn-primary btn-gray",attrs:{"hover-class":"btn-gray-hover","data-index":"0"},on:{click:function(n){n=t.$handleEvent(n),t.showTips(n)}}},[t._v("一般提示")]),e("v-uni-button",{staticClass:"btn-primary btn-gray",attrs:{"hover-class":"btn-gray-hover","data-index":"1"},on:{click:function(n){n=t.$handleEvent(n),t.showTips(n)}}},[t._v("成功提示")]),e("v-uni-button",{staticClass:"btn-primary btn-gray",attrs:{"hover-class":"btn-gray-hover","data-index":"2"},on:{click:function(n){n=t.$handleEvent(n),t.showTips(n)}}},[t._v("警告提示")]),e("v-uni-button",{staticClass:"btn-primary btn-gray",attrs:{"hover-class":"btn-gray-hover","data-index":"3"},on:{click:function(n){n=t.$handleEvent(n),t.showTips(n)}}},[t._v("错误提示")]),e("v-uni-button",{staticClass:"btn-primary btn-gray",attrs:{"hover-class":"btn-gray-hover","data-index":"4"},on:{click:function(n){n=t.$handleEvent(n),t.showTips(n)}}},[t._v("其他提示")]),e("v-uni-button",{staticClass:"btn-primary btn-gray",attrs:{"hover-class":"btn-gray-hover","data-index":"5"},on:{click:function(n){n=t.$handleEvent(n),t.showTips(n)}}},[t._v("长文字消息提示")]),e("v-uni-button",{staticClass:"btn-primary btn-gray",attrs:{"hover-class":"btn-gray-hover","data-index":"6"},on:{click:function(n){n=t.$handleEvent(n),t.showTips(n)}}},[t._v("自定义时间消息提示")])],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"2e03":function(t,n,e){"use strict";e.r(n);var i=e("0c09"),a=e("8442");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("d016");var r=e("2877"),o=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"2c7f0f11",null);n["default"]=o.exports},"34af":function(t,n,e){var i=e("3f49");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("e9852ae4",i,!0,{sourceMap:!1,shadowMode:!1})},"3f49":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/*顶部消息提醒 start*/.tui-toptips[data-v-2c7f0f11]{width:100%;padding:%?18?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;z-index:9999;color:#fff;font-size:%?30?%;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;word-break:break-all;opacity:0;-webkit-transform:translateZ(0) translateY(-100%);transform:translateZ(0) translateY(-100%);-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.tui-top-show[data-v-2c7f0f11]{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}\n\t/*顶部消息提醒 end*/\n\t/*toast消息提醒 start*/\n\t/*注意问题：\n 1、fixed 元素宽度无法自适应，所以增加了子元素\n 2、fixed 和 display冲突导致动画效果消失，暂时使用visibility替代\n*/.tui-toast[data-v-2c7f0f11]{width:80%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;font-size:%?28?%;position:fixed;visibility:hidden;opacity:0;left:50%;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:9999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tui-toast-show[data-v-2c7f0f11]{visibility:visible;opacity:1}.tui-tips-content[data-v-2c7f0f11]{word-wrap:break-word;word-break:break-all;border-radius:%?8?%;padding:%?18?% %?30?%}\n\t/*底部消息提醒 start*/.tui-bottomtips[data-v-2c7f0f11]{bottom:%?120?%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}\n\t/*底部消息提醒 end*/\n\t/*居中消息提醒 start*/.tui-centertips[data-v-2c7f0f11]{top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n\t/*居中消息提醒 end*/\n\t/*toast消息提醒 end*/\n\t/*背景颜色 start*/.tui-primary[data-v-2c7f0f11]{background:#5677fc}.tui-green[data-v-2c7f0f11]{background:#19be6b}.tui-warning[data-v-2c7f0f11]{background:#ff7900}.tui-danger[data-v-2c7f0f11]{background:#ed3f14}.tui-translucent[data-v-2c7f0f11]{background:rgba(0,0,0,.7)}\n\t/*背景颜色 end*/\n\t/*消息提醒 end*/",""])},"72c1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"tuiTips",props:{position:{type:String,default:"top"}},data:function(){return{timer:null,show:!1,msg:"无法连接到服务器~",type:"translucent"}},methods:{showTips:function(t){var n=this,e=t.type,i=void 0===e?"translucent":e,a=t.duration,s=void 0===a?2e3:a;clearTimeout(this.timer),this.show=!0,this.type=i,this.msg=t.msg,this.timer=setTimeout(function(){n.show=!1,clearTimeout(n.timer),n.timer=null},s)}}};n.default=i},7392:function(t,n,e){"use strict";e.r(n);var i=e("ea52"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},8442:function(t,n,e){"use strict";e.r(n);var i=e("72c1"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},ae86:function(t,n,e){"use strict";var i=e("0583"),a=e.n(i);a.a},b945:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'.container[data-v-e0b39236]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?60?% %?30?% %?100?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.btn-primary[data-v-e0b39236]{margin-bottom:%?40?%}.tui-subsection[data-v-e0b39236]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:%?20?% 0 %?80?% 0;border-radius:%?10?%;overflow:hidden;border:0;position:relative}.tui-subsection[data-v-e0b39236]:after{content:"";position:absolute;width:200%;height:200%;border:1px solid #5677fc;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:%?20?%;z-index:-1}.tui-subsection uni-view[data-v-e0b39236]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;text-align:center;padding:%?10?% %?30?%;color:#5677fc;position:relative}.tui-subsection uni-view[data-v-e0b39236]:after{content:"";position:absolute;height:100%;width:1px;border-right:1px solid #5677fc;-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);right:0;top:0}.tui-subsection uni-view[data-v-e0b39236]:last-child:after{border-right:0}.tui-subsection uni-view.tui-active[data-v-e0b39236]{background:#5677fc;color:#fff}',""])},d016:function(t,n,e){"use strict";var i=e("34af"),a=e.n(i);a.a},ea52:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2e03"));function a(t){return t&&t.__esModule?t:{default:t}}var s={components:{tuiTips:i.default},data:function(){return{basicData:[{type:"translucent",msg:"一般消息提示~"},{type:"green",msg:"成功消息提示~"},{type:"warning",msg:"警告消息提示~"},{type:"danger",msg:"错误消息提示~"},{type:"primary",msg:"其他消息提示~"},{type:"primary",msg:"长文字消息提示，看不完信息？可自定义设置显示时间，建议提示信息不要过长"},{type:"translucent",msg:"4S后关闭提示框",duration:4e3}],index:0}},methods:{showTips:function(t){var n=t.currentTarget.dataset.index,e={msg:this.basicData[n].msg,duration:this.basicData[n].duration||2e3,type:this.basicData[n].type};this.$refs.toast.showTips(e)},switchTabs:function(t){this.index=t.currentTarget.dataset.index}}};n.default=s}}]);