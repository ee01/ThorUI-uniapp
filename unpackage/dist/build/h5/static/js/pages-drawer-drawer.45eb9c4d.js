(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-drawer-drawer"],{"35c8":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".btn-box[data-v-143f2c10]{padding:%?30?%}.btn-box[data-v-143f2c10]:first-child{margin-top:%?50?%}.d-container[data-v-143f2c10]{width:%?400?%;padding:%?80?% %?30?%}\n/*底部抽屉样式 start*/.mask-screen[data-v-143f2c10]{width:100%;height:100%;position:fixed;top:0;left:0;background:#000;opacity:.5;overflow:hidden;z-index:9}.region-box[data-v-143f2c10]{width:100%;overflow:hidden;position:fixed;bottom:0;left:0;z-index:10;background:#fff;padding-top:%?20?%;height:%?712?%;padding:%?40?% %?30?% %?48?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.region-txt[data-v-143f2c10]{width:%?96?%;height:%?82?%;background:#e9edfc;line-height:%?82?%;border-radius:%?6?%;font-size:%?30?%;color:#333;text-align:center;margin-right:%?23?%;margin-bottom:%?26?%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.region-txt[data-v-143f2c10]:nth-of-type(6n){margin-right:0}.grow[data-v-143f2c10]{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0}.active[data-v-143f2c10]{background:#5677fc;color:#fff}\n/*底部抽屉样式 end*/",""])},"3df3":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"btn-box "},[a("v-uni-button",{staticClass:"btn-primary",attrs:{"hover-class":"btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.rDrawer(e)}}},[t._v("从右边弹出")])],1),a("v-uni-view",{staticClass:"btn-box "},[a("v-uni-button",{staticClass:"btn-primary",attrs:{"hover-class":"btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.lDrawer(e)}}},[t._v("从左边弹出")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showModalStatus,expression:"showModalStatus"}],staticClass:"mask-screen",on:{click:function(e){e=t.$handleEvent(e),t.hideModal(e)}}}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showModalStatus,expression:"showModalStatus"}],staticClass:"region-box",attrs:{animation:t.animationData}},t._l(t.regionArr,function(e,i){return a("v-uni-view",{staticClass:"region-txt",class:[i==t.regionArr.length-3||i==t.regionArr.length-2||i==t.regionArr.length-1?"grow":"",t.tabIndex==i?"active":""],attrs:{"data-index":i},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.getRegion(e)}}},[t._v(t._s(e))])}),1),a("tui-drawer",{attrs:{mode:"left",visible:t.leftDrawer},on:{close:function(e){e=t.$handleEvent(e),t.closeDrawer(e)}}},[a("v-uni-view",{staticClass:"d-container"},[a("v-uni-button",{staticClass:"btn-primary",attrs:{"hover-class":"btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.closeDrawer(e)}}},[t._v("关闭抽屉")])],1)],1),a("tui-drawer",{attrs:{mode:"right",visible:t.rightDrawer},on:{close:function(e){e=t.$handleEvent(e),t.closeDrawer(e)}}},[a("v-uni-view",{staticClass:"d-container"},[a("v-uni-button",{staticClass:"btn-primary",attrs:{"hover-class":"btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.closeDrawer(e)}}},[t._v("关闭抽屉")])],1)],1)],1)},r=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},"45b5":function(t,e,a){"use strict";var i=a("7bc4"),r=a.n(i);r.a},"7bc4":function(t,e,a){var i=a("35c8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("0a4275e5",i,!0,{sourceMap:!1,shadowMode:!1})},"7c64":function(t,e,a){"use strict";var i=a("bded"),r=a.n(i);r.a},"81b5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-drawer-class tui-drawer",class:[t.visible?"tui-drawer-show":"","tui-drawer-"+t.mode]},[t.mask?a("v-uni-view",{staticClass:"tui-drawer-mask",on:{click:function(e){e=t.$handleEvent(e),t.handleMaskClick(e)}}}):t._e(),a("v-uni-view",{staticClass:"tui-drawer-container"},[t._t("default")],2)],1)},r=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},"830f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("d7a8"));function r(t){return t&&t.__esModule?t:{default:t}}var n={components:{tuiDrawer:i.default},data:function(){return{showModalStatus:!1,animationData:"",regionArr:["京","津","沪","渝","蒙","新","藏","宁","桂","港","澳","黑","吉","辽","晋","冀","青","鲁","豫","苏","皖","浙","闽","赣","湘","鄂","粤","琼","甘","陕","黔","滇","川"],regionTxt:"粤",tabIndex:26,leftDrawer:!1,rightDrawer:!1,mode:"right"}},methods:{showModal:function(){var t=uni.createAnimation({duration:200,timingFunction:"linear",delay:0});t.translateY(uni.upx2px(712)).step(),this.animationData=t.export(),this.showModalStatus=!0,setTimeout(function(){t.translateY(0).step(),this.animationData=t.export()}.bind(this),200)},hideModal:function(){this.showModalStatus=!1},getRegion:function(t){var e=t.currentTarget.dataset.index;this.regionTxt=this.regionArr[e],this.tabIndex=e,this.showModalStatus=!1,this.tui.toast("您选择了："+this.regionArr[e])},closeDrawer:function(t){this.leftDrawer=!1,this.rightDrawer=!1},rDrawer:function(){this.rightDrawer=!0},lDrawer:function(){this.leftDrawer=!0}}};e.default=n},"892e":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".tui-drawer[data-v-6bf03422]{visibility:hidden}.tui-drawer-show[data-v-6bf03422]{visibility:visible}.tui-drawer-show .tui-drawer-mask[data-v-6bf03422]{display:block;opacity:1}.tui-drawer-show .tui-drawer-container[data-v-6bf03422]{opacity:1}.tui-drawer-show.tui-drawer-left .tui-drawer-container[data-v-6bf03422],.tui-drawer-show.tui-drawer-right .tui-drawer-container[data-v-6bf03422]{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.tui-drawer-mask[data-v-6bf03422]{opacity:0;position:fixed;top:0;left:0;right:0;bottom:0;z-index:8888;background:rgba(0,0,0,.6);-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.tui-drawer-container[data-v-6bf03422]{position:fixed;left:50%;height:100%;top:0;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:99999;opacity:0;overflow-y:scroll;background:#fff;-webkit-overflow-scrolling:touch;-ms-touch-action:pan-y cross-slide-y;-ms-scroll-chaining:none;-ms-scroll-limit:0 50 0 50}.tui-drawer-left .tui-drawer-container[data-v-6bf03422]{left:0;top:50%;-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.tui-drawer-right .tui-drawer-container[data-v-6bf03422]{right:0;top:50%;left:auto;-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}",""])},"8f12":function(t,e,a){"use strict";a.r(e);var i=a("830f"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=r.a},"9b90":function(t,e,a){"use strict";a.r(e);var i=a("3df3"),r=a("8f12");for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);a("45b5");var o=a("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"143f2c10",null);e["default"]=s.exports},bded:function(t,e,a){var i=a("892e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("5974d554",i,!0,{sourceMap:!1,shadowMode:!1})},ce4a:function(t,e,a){"use strict";a.r(e);var i=a("d85c"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=r.a},d7a8:function(t,e,a){"use strict";a.r(e);var i=a("81b5"),r=a("ce4a");for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);a("7c64");var o=a("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"6bf03422",null);e["default"]=s.exports},d85c:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiDrawer",props:{visible:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},mode:{type:String,default:"left"}},methods:{handleMaskClick:function(){this.maskClosable&&this.$emit("close",{})}}};e.default=i}}]);