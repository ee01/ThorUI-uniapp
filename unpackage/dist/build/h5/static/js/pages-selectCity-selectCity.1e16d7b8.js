(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-selectCity-selectCity"],{"51ac":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-scroll-view",{staticClass:"scrollList",style:{height:e.winHeight+"px"},attrs:{"scroll-y":"","scroll-into-view":e.scrollViewId}},[i("v-uni-view",{staticClass:"search-bar"},[i("v-uni-view",{staticClass:"search-bar-form"},[i("v-uni-view",{staticClass:"search-bar-box"},[i("v-uni-input",{staticClass:"search-bar-input",attrs:{"confirm-type":"search",placeholder:"输入城市名称或首字母查询","placeholder-class":"phcolor",value:e.inputVal,focus:e.inputShowed},on:{input:function(t){t=e.$handleEvent(t),e.inputTyping(t)}}}),e.inputVal?i("v-uni-view",{staticClass:"icon-clear",on:{click:function(t){t=e.$handleEvent(t),e.clearInput(t)}}},[i("tui-icon",{attrs:{name:"close-fill",size:16,color:"#bfbfbf"}})],1):e._e()],1),e.inputShowed?e._e():i("v-uni-label",{staticClass:"search-bar-label",on:{click:function(t){t=e.$handleEvent(t),e.showInput(t)}}},[i("v-uni-view",{staticClass:"search-bar-text"},[e._v("输入城市名称或首字母查询")])],1)],1)],1),e.inputShowed?i("v-uni-view",{staticClass:"tui-list search-result"},e._l(e.searchResult,function(t,a){return i("v-uni-view",{key:a,staticClass:"tui-list-cell",attrs:{"hover-class":"tui-list-cell-hover","data-name":t,"hover-stay-time":150},on:{click:function(t){t=e.$handleEvent(t),e.selectCity(t)}}},[i("v-uni-view",{staticClass:"tui-list-cell-navigate"},[e._v(e._s(t))])],1)}),1):e._e(),e.inputVal?e._e():i("v-uni-view",[i("v-uni-view",{staticClass:"current-city"},[i("v-uni-view",{staticClass:"title"},[e._v("定位城市")]),i("v-uni-view",{staticClass:"city-name"},[i("tui-icon",{attrs:{name:"position-fill",color:"#5677fc",size:18}}),e._v(e._s(e.localCity))],1)],1),i("v-uni-view",{staticClass:"hot-city"},[i("v-uni-view",{staticClass:"title"},[e._v("热门城市")]),i("v-uni-view",{staticClass:"city-names"},e._l(e.hotCity,function(t,a){return i("v-uni-view",{key:a,staticClass:"city-name-item",attrs:{"hover-class":"tap-city","hover-stay-time":150,"data-name":t},on:{click:function(t){t=e.$handleEvent(t),e.selectCity(t)}}},[e._v(e._s(t))])}),1)],1),i("v-uni-view",{staticClass:"tui-list city-list"},[e._l(e.lists,function(t,a){return t.data[0]?[i("v-uni-view",{key:a+"_0",staticClass:"tui-list-cell-divider",attrs:{id:0===a?"suoyin":t.letter}},[e._v(e._s(t.letter))]),e._l(t.data,function(y,o){return i("v-uni-view",{key:o+"_"+a+"_1",staticClass:"tui-list-cell",attrs:{"hover-class":"tui-list-cell-hover","data-name":y.cityName,"hover-stay-time":150},on:{click:function(t){t=e.$handleEvent(t),e.selectCity(t)}}},[i("v-uni-view",{staticClass:"tui-list-cell-navigate",class:[t.data.length-1==a?"last":""]},[e._v(e._s(y.cityName))])],1)})]:e._e()})],2)],1)],1),e.inputVal?e._e():i("v-uni-view",{staticClass:"tui-indexed-list-bar",style:{height:e.indexBarHeight+"px"},on:{touchstart:function(t){t=e.$handleEvent(t),e.touchStart(t)},touchmove:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.touchMove(t)},touchend:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.touchEnd(t)},touchcancel:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.touchCancel(t)}}},e._l(e.lists,function(t,a){return i("v-uni-text",{key:a,staticClass:"tui-indexed-list-text",style:{height:e.indexBarItemHeight+"px"}},[e._v(e._s(0==a?"索引":t.letter))])}),1),e.touchmove&&e.lists[e.touchmoveIndex].letter?i("v-uni-view",{staticClass:"tui-indexed-list-alert"},[e._v(e._s(e.lists[e.touchmoveIndex].letter))]):e._e()],1)},y=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return y})},"652a":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'uni-page-body[data-v-88ec8788]{height:100%;overflow:hidden}.page[data-v-88ec8788]{height:100%;overflow:hidden}.scrollList[data-v-88ec8788]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.search-bar[data-v-88ec8788]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;padding:%?27?% %?30?% %?35?%;background-color:#fff}.search-bar-form[data-v-88ec8788]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;border-radius:%?32?%;background:#f2f5f7}.search-bar-box[data-v-88ec8788]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;padding-left:%?20?%;padding-right:%?20?%;height:%?64?%;z-index:1}.search-bar-input[data-v-88ec8788]{line-height:normal;width:100%;padding-left:%?20?%;font-size:%?30?%;color:#333}.phcolor[data-v-88ec8788]{font-size:%?30?%}.icon-clear[data-v-88ec8788]{height:%?38?%}.icon-clear .tui-icon-class[data-v-88ec8788]{display:block}.search-bar-label[data-v-88ec8788]{height:%?64?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;border-radius:%?32?%;color:#ccc;background:#f2f5f7}.icon-search[data-v-88ec8788]{position:relative;height:%?26?%;margin-right:%?20?%;font-size:inherit}.search-bar-text[data-v-88ec8788]{font-size:%?30?%;line-height:%?32?%}.cancel-btn[data-v-88ec8788]{padding-left:%?30?%}.search-result[data-v-88ec8788]:before{display:none}.search-result[data-v-88ec8788]:after{display:none}.tui-list-cell[data-v-88ec8788]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.tui-list-cell-hover[data-v-88ec8788]{background-color:#eee!important}.tui-list-cell-navigate[data-v-88ec8788]{width:100%;position:relative;padding:%?30?% 0 %?30?% %?30?%;font-size:%?28?%;color:#333}.tui-list-cell-navigate[data-v-88ec8788]:after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:%?30?%}.current-city[data-v-88ec8788]{padding:0 %?30?% %?30?%;background:#fff}.tui-icon-class[data-v-88ec8788]{margin-right:%?10?%}.current-city .title[data-v-88ec8788]{font-size:%?24?%;line-height:%?24?%;color:#999}.city-name[data-v-88ec8788]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:%?17?%;font-size:%?30?%;font-weight:700;line-height:%?30?%;color:#333}.hot-city .title[data-v-88ec8788]{height:%?48?%!important;padding-left:%?30?%;font-size:%?24?%!important;line-height:%?48?%!important;color:#999;background:#f2f5f7!important}.city-names[data-v-88ec8788]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;width:%?630?%;padding:%?12?% %?90?% %?26?% %?30?%;background:#fff}.city-name-item[data-v-88ec8788]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:%?140?%;height:%?56?%;margin-top:%?16?%;\n\t/* border: solid 1upx #ccc; */border-radius:%?28?%;font-size:%?28?%;color:#333;position:relative}.city-name-item[data-v-88ec8788]:before{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:%?56?%;border:1px solid #ccc}.tap-city[data-v-88ec8788]{color:#fff;background:#5677fc\n\t/* border: solid 1upx #5677fc; */}.tui-list[data-v-88ec8788]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:env(safe-area-inset-bottom)}.tui-list-cell-divider[data-v-88ec8788]{height:%?48?%;padding-left:%?30?%;font-size:%?24?%;color:#999;background:#f2f5f7;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tui-indexed-list-bar[data-v-88ec8788]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;z-index:9999;position:absolute;top:%?132?%;right:0;padding-right:%?10?%;width:%?44?%}.tui-indexed-list-text[data-v-88ec8788]{font-size:%?22?%;white-space:nowrap}.tui-indexed-list-bar.active[data-v-88ec8788]{background-color:#c8c8c8}.tui-indexed-list-alert[data-v-88ec8788]{position:absolute;z-index:20;width:%?160?%;height:%?160?%;left:50%;top:50%;margin-left:%?-80?%;margin-top:%?-80?%;border-radius:%?80?%;text-align:center;line-height:%?160?%;font-size:%?70?%;color:#fff;background-color:rgba(0,0,0,.5)}',""])},"9f3cd":function(e,t,i){"use strict";i.r(t);var a=i("d22d"),y=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=y.a},a0e3:function(e,t,i){"use strict";var a=i("df95"),y=i.n(a);y.a},cdb9:function(e,t,i){"use strict";i.r(t);var a=i("51ac"),y=i("9f3cd");for(var o in y)"default"!==o&&function(e){i.d(t,e,function(){return y[e]})}(o);i("a0e3");var c=i("2877"),N=Object(c["a"])(y["default"],a["a"],a["b"],!1,null,"88ec8788",null);t["default"]=N.exports},d22d:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=y(i("7c3f"));function y(e){return e&&e.__esModule?e:{default:e}}var o=i("fa78"),c={components:{tuiIcon:a.default},data:function(){return{lists:[],touchmove:!1,touchmoveIndex:-1,titleHeight:0,indexBarHeight:0,indexBarItemHeight:0,scrollViewId:"",winHeight:0,inputShowed:!1,inputVal:"",hotCity:["北京","上海","广州","深圳","杭州","长沙","武汉","厦门","西安","昆明","成都","重庆"],searchResult:[],localCity:""}},onLoad:function(e){var t=this;t.localCity=e.currentCity||"深圳",setTimeout(function(){uni.getSystemInfo({success:function(e){var i=e.windowHeight,a=i-uni.upx2px(204);t.winHeight=i,t.indexBarHeight=a,t.indexBarItemHeight=a/25,t.titleHeight=uni.upx2px(132),t.lists=o.list}})},50)},methods:{showInput:function(){this.inputShowed=!0},clearInput:function(){this.inputVal="",this.inputShowed=!1,this.searchResult=[],uni.hideKeyboard()},inputTyping:function(e){this.inputVal=e.detail.value,this.searchCity()},searchCity:function(){var e=this,t=[];o.list.forEach(function(i,a){i.data.forEach(function(i,a){-1!==i.keyword.indexOf(e.inputVal.toLocaleUpperCase())&&t.push(i.cityName)})}),this.searchResult=t},selectCity:function(e){var t=e.currentTarget.dataset.name;this.$eventHub.$emit("emit",t),uni.navigateBack({delta:1})},touchStart:function(e){this.touchmove=!0;var t=e.touches[0].pageY,i=Math.floor((t-this.titleHeight)/this.indexBarItemHeight),a=this.lists[0===i?1:i];a&&(this.scrollViewId=a.letter,this.touchmoveIndex=i)},touchMove:function(e){var t=e.touches[0].pageY,i=Math.floor((t-this.titleHeight)/this.indexBarItemHeight),a=this.lists[0===i?1:i];a&&(this.scrollViewId=a.letter,this.touchmoveIndex=i)},touchEnd:function(){this.touchmove=!1,this.touchmoveIndex=-1},touchCancel:function(){this.touchmove=!1,this.touchmoveIndex=-1}}};t.default=c},df95:function(e,t,i){var a=i("652a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var y=i("4f06").default;y("2a10bb78",a,!0,{sourceMap:!1,shadowMode:!1})},fa78:function(e,t,i){"use strict";e.exports={list:[{letter:"A",data:[]},{letter:"A",data:[{cityName:"阿坝",keyword:"阿坝ABA"},{cityName:"阿克苏",keyword:"阿克苏AKESU"},{cityName:"阿拉善",keyword:"阿拉善ALASHAN"},{cityName:"阿勒泰",keyword:"阿勒泰ALETAI"},{cityName:"阿里",keyword:"阿里ALI"},{cityName:"安康",keyword:"安康ANKANG"},{cityName:"安庆",keyword:"安庆ANQING"},{cityName:"鞍山",keyword:"鞍山ANSHAN"},{cityName:"马鞍山",keyword:"马鞍山MAANSHAN"},{cityName:"安顺",keyword:"安顺ANSHUN"},{cityName:"安阳",keyword:"安阳ANYANG"}]},{letter:"B",data:[{cityName:"白城",keyword:"白城BAICHENG"},{cityName:"白山",keyword:"白山BAISHAN"},{cityName:"白银",keyword:"白银BAIYIN"},{cityName:"保定",keyword:"保定BAODING"},{cityName:"宝鸡",keyword:"宝鸡BAOJI"},{cityName:"保山",keyword:"保山BAOSHAN"},{cityName:"包头",keyword:"包头BAOTOU"},{cityName:"巴彦淖尔",keyword:"巴彦淖尔BAYANNAOER"},{cityName:"巴音郭楞",keyword:"巴音郭楞BAYINGUOLENG"},{cityName:"巴中",keyword:"巴中BAZHONG"},{cityName:"北海",keyword:"北海BEIHAI"},{cityName:"北京",keyword:"北京BEIJING"},{cityName:"蚌埠",keyword:"蚌埠BENGBU"},{cityName:"本溪",keyword:"本溪BENXI"},{cityName:"毕节",keyword:"毕节BIJIE"},{cityName:"滨州",keyword:"滨州BINZHOU"},{cityName:"博尔塔拉",keyword:"博尔塔拉BOERTALA"},{cityName:"百色",keyword:"百色BOSE"},{cityName:"亳州",keyword:"亳州BOZHOU"}]},{letter:"C",data:[{cityName:"沧州",keyword:"沧州CANGZHOU"},{cityName:"长春",keyword:"长春CHANGCHUN"},{cityName:"常德",keyword:"常德CHANGDE"},{cityName:"昌都",keyword:"昌都CHANGDU"},{cityName:"昌吉",keyword:"昌吉CHANGJI"},{cityName:"长沙",keyword:"长沙CHANGSHA"},{cityName:"长治",keyword:"长治CHANGZHI"},{cityName:"常州",keyword:"常州CHANGZHOU"},{cityName:"潮州",keyword:"潮州CHAOZHOU"},{cityName:"承德",keyword:"承德CHENGDE"},{cityName:"成都",keyword:"成都CHENGDU"},{cityName:"郴州",keyword:"郴州CHENZHOU"},{cityName:"赤峰",keyword:"赤峰CHIFENG"},{cityName:"池州",keyword:"池州CHIZHOU"},{cityName:"重庆",keyword:"重庆CHONGQING"},{cityName:"崇左",keyword:"崇左CHONGZUO"},{cityName:"楚雄",keyword:"楚雄CHUXIONG"},{cityName:"滁州",keyword:"滁州CHUZHOU"}]},{letter:"D",data:[{cityName:"大理",keyword:"大理DALI"},{cityName:"大连",keyword:"大连DALIAN"},{cityName:"丹东",keyword:"丹东DANDONG"},{cityName:"儋州",keyword:"儋州DANZHOU"},{cityName:"大庆",keyword:"大庆DAQING"},{cityName:"大同",keyword:"大同DATONG"},{cityName:"大兴安岭",keyword:"大兴安岭DAXINGANLING"},{cityName:"达州",keyword:"达州DAZHOU"},{cityName:"德宏",keyword:"德宏DEHONG"},{cityName:"德阳",keyword:"德阳DEYANG"},{cityName:"德州",keyword:"德州DEZHOU"},{cityName:"定西",keyword:"定西DINGXI"},{cityName:"迪庆",keyword:"迪庆DIQING"},{cityName:"东莞",keyword:"东莞DONGGUAN"},{cityName:"东营",keyword:"东营DONGYING"}]},{letter:"E",data:[{cityName:"鄂尔多斯",keyword:"鄂尔多斯EERDUOSI"},{cityName:"恩施",keyword:"恩施ENSHI"},{cityName:"鄂州",keyword:"鄂州EZHOU"}]},{letter:"F",data:[{cityName:"防城港",keyword:"防城港FANGCHENGGANG"},{cityName:"佛山",keyword:"佛山FOSHAN"},{cityName:"抚顺",keyword:"抚顺FUSHUN"},{cityName:"阜新",keyword:"阜新FUXIN"},{cityName:"阜阳",keyword:"阜阳FUYANG"},{cityName:"抚州",keyword:"抚州FUZHOU"},{cityName:"福州",keyword:"福州FUZHOU"}]},{letter:"G",data:[{cityName:"甘南",keyword:"甘南GANNAN"},{cityName:"赣州",keyword:"赣州GANZHOU"},{cityName:"甘孜",keyword:"甘孜GANZI"},{cityName:"广安",keyword:"广安GUANGAN"},{cityName:"广元",keyword:"广元GUANGYUAN"},{cityName:"广州",keyword:"广州GUANGZHOU"},{cityName:"贵港",keyword:"贵港GUIGANG"},{cityName:"桂林",keyword:"桂林GUILIN"},{cityName:"贵阳",keyword:"贵阳GUIYANG"},{cityName:"果洛",keyword:"果洛GUOLUO"},{cityName:"固原",keyword:"固原GUYUAN"}]},{letter:"H",data:[{cityName:"哈尔滨",keyword:"哈尔滨HAERBIN"},{cityName:"海北",keyword:"海北HAIBEI"},{cityName:"海东",keyword:"海东HAIDONG"},{cityName:"海口",keyword:"海口HAIKOU"},{cityName:"海南藏族自治州",keyword:"海南藏族自治州HAINAN"},{cityName:"海南",keyword:"海南藏族自治州HAINAN"},{cityName:"海南",keyword:"海南HAINAN"},{cityName:"海西",keyword:"海西HAIXI"},{cityName:"哈密",keyword:"哈密HAMI"},{cityName:"邯郸",keyword:"邯郸HANDAN"},{cityName:"杭州",keyword:"杭州HANGZHOU"},{cityName:"汉中",keyword:"汉中HANZHONG"},{cityName:"河北",keyword:"河北HEBEI"},{cityName:"鹤壁",keyword:"鹤壁HEBI"},{cityName:"河池",keyword:"河池HECHI"},{cityName:"合肥",keyword:"合肥HEFEI"},{cityName:"鹤岗",keyword:"鹤岗HEGANG"},{cityName:"黑河",keyword:"黑河HEIHE"},{cityName:"河南",keyword:"河南HENAN"},{cityName:"衡水",keyword:"衡水HENGSHUI"},{cityName:"衡阳",keyword:"衡阳HENGYANG"},{cityName:"和田",keyword:"和田HETIAN"},{cityName:"河源",keyword:"河源HEYUAN"},{cityName:"菏泽",keyword:"菏泽HEZE"},{cityName:"贺州",keyword:"贺州HEZHOU"},{cityName:"红河",keyword:"红河HONGHE"},{cityName:"淮安",keyword:"淮安HUAIAN"},{cityName:"淮北",keyword:"淮北HUAIBEI"},{cityName:"怀化",keyword:"怀化HUAIHUA"},{cityName:"淮南",keyword:"淮南HUAINAN"},{cityName:"黄冈",keyword:"黄冈HUANGGANG"},{cityName:"黄南",keyword:"黄南HUANGNAN"},{cityName:"黄山",keyword:"黄山HUANGSHAN"},{cityName:"黄石",keyword:"黄石HUANGSHI"},{cityName:"湖北",keyword:"湖北HUBEI"},{cityName:"呼和浩特",keyword:"呼和浩特HUHEHAOTE"},{cityName:"惠州",keyword:"惠州HUIZHOU"},{cityName:"葫芦岛",keyword:"葫芦岛HULUDAO"},{cityName:"呼伦贝尔",keyword:"呼伦贝尔HULUNBEIER"},{cityName:"湖州",keyword:"湖州HUZHOU"}]},{letter:"I",data:[]},{letter:"J",data:[{cityName:"佳木斯",keyword:"佳木斯JIAMUSI"},{cityName:"吉安",keyword:"吉安JIAN"},{cityName:"江门",keyword:"江门JIANGMEN"},{cityName:"焦作",keyword:"焦作JIAOZUO"},{cityName:"嘉兴",keyword:"嘉兴JIAXING"},{cityName:"嘉峪关",keyword:"嘉峪关JIAYUGUAN"},{cityName:"揭阳",keyword:"揭阳JIEYANG"},{cityName:"吉林",keyword:"吉林JILIN"},{cityName:"济南",keyword:"济南JINAN"},{cityName:"金昌",keyword:"金昌JINCHANG"},{cityName:"晋城",keyword:"晋城JINCHENG"},{cityName:"景德镇",keyword:"景德镇JINGDEZHEN"},{cityName:"荆门",keyword:"荆门JINGMEN"},{cityName:"荆州",keyword:"荆州JINGZHOU"},{cityName:"金华",keyword:"金华JINHUA"},{cityName:"济宁",keyword:"济宁JINING"},{cityName:"晋中",keyword:"晋中JINZHONG"},{cityName:"锦州",keyword:"锦州JINZHOU"},{cityName:"九江",keyword:"九江JIUJIANG"},{cityName:"酒泉",keyword:"酒泉JIUQUAN"},{cityName:"鸡西",keyword:"鸡西JIXI"}]},{letter:"K",data:[{cityName:"开封",keyword:"开封KAIFENG"},{cityName:"喀什",keyword:"喀什KASHI"},{cityName:"克拉玛依",keyword:"克拉玛依KELAMAYI"},{cityName:"克孜勒苏",keyword:"克孜勒苏KEZILESU"},{cityName:"昆明",keyword:"昆明KUNMING"}]},{letter:"L",data:[{cityName:"来宾",keyword:"来宾LAIBIN"},{cityName:"莱芜",keyword:"莱芜LAIWU"},{cityName:"廊坊",keyword:"廊坊LANGFANG"},{cityName:"兰州",keyword:"兰州LANZHOU"},{cityName:"拉萨",keyword:"拉萨LASA"},{cityName:"乐山",keyword:"乐山LESHAN"},{cityName:"凉山",keyword:"凉山LIANGSHAN"},{cityName:"连云港",keyword:"连云港LIANYUNGANG"},{cityName:"聊城",keyword:"聊城LIAOCHENG"},{cityName:"辽阳",keyword:"辽阳LIAOYANG"},{cityName:"辽源",keyword:"辽源LIAOYUAN"},{cityName:"丽江",keyword:"丽江LIJIANG"},{cityName:"临沧",keyword:"临沧LINCANG"},{cityName:"临汾",keyword:"临汾LINFEN"},{cityName:"临夏",keyword:"临夏LINXIA"},{cityName:"临沂",keyword:"临沂LINYI"},{cityName:"林芝",keyword:"林芝LINZHI"},{cityName:"丽水",keyword:"丽水LISHUI"},{cityName:"六盘水",keyword:"六盘水LIUPANSHUI"},{cityName:"柳州",keyword:"柳州LIUZHOU"},{cityName:"陇南",keyword:"陇南LONGNAN"},{cityName:"龙岩",keyword:"龙岩LONGYAN"},{cityName:"娄底",keyword:"娄底LOUDI"},{cityName:"六安",keyword:"六安LUAN"},{cityName:"洛阳",keyword:"洛阳LUOYANG"},{cityName:"泸州",keyword:"泸州LUZHOU"},{cityName:"吕梁",keyword:"吕梁LVLIANG"}]},{letter:"M",data:[{cityName:"马鞍山",keyword:"马鞍山MAANSHAN"},{cityName:"茂名",keyword:"茂名MAOMING"},{cityName:"眉山",keyword:"眉山MEISHAN"},{cityName:"梅州",keyword:"梅州MEIZHOU"},{cityName:"绵阳",keyword:"绵阳MIANYANG"},{cityName:"牡丹江",keyword:"牡丹江MUDANJIANG"}]},{letter:"N",data:[{cityName:"南昌",keyword:"南昌NANCHANG"},{cityName:"南充",keyword:"南充NANCHONG"},{cityName:"南京",keyword:"南京NANJING"},{cityName:"南宁",keyword:"南宁NANNING"},{cityName:"南平",keyword:"南平NANPING"},{cityName:"南通",keyword:"南通NANTONG"},{cityName:"南阳",keyword:"南阳NANYANG"},{cityName:"那曲",keyword:"那曲NAQU"},{cityName:"内江",keyword:"内江NEIJIANG"},{cityName:"宁波",keyword:"宁波NINGBO"},{cityName:"宁德",keyword:"宁德NINGDE"},{cityName:"怒江",keyword:"怒江NUJIANG"}]},{letter:"O",data:[]},{letter:"P",data:[{cityName:"盘锦",keyword:"盘锦PANJIN"},{cityName:"攀枝花",keyword:"攀枝花PANZHIHUA"},{cityName:"平顶山",keyword:"平顶山PINGDINGSHAN"},{cityName:"平凉",keyword:"平凉PINGLIANG"},{cityName:"萍乡",keyword:"萍乡PINGXIANG"},{cityName:"普洱",keyword:"普洱PUER"},{cityName:"莆田",keyword:"莆田PUTIAN"},{cityName:"濮阳",keyword:"濮阳PUYANG"}]},{letter:"Q",data:[{cityName:"黔东南",keyword:"黔东南QIANDONGNAN"},{cityName:"黔南",keyword:"黔南QIANNAN"},{cityName:"黔西南",keyword:"黔西南QIANXINAN"},{cityName:"青岛",keyword:"青岛QINGDAO"},{cityName:"庆阳",keyword:"庆阳QINGYANG"},{cityName:"清远",keyword:"清远QINGYUAN"},{cityName:"秦皇岛",keyword:"秦皇岛QINHUANGDAO"},{cityName:"钦州",keyword:"钦州QINZHOU"},{cityName:"齐齐哈尔",keyword:"齐齐哈尔QIQIHAER"},{cityName:"七台河",keyword:"七台河QITAIHE"},{cityName:"泉州",keyword:"泉州QUANZHOU"},{cityName:"曲靖",keyword:"曲靖QUJING"},{cityName:"衢州",keyword:"衢州QUZHOU"}]},{letter:"R",data:[{cityName:"日喀则",keyword:"日喀则RIKAZE"},{cityName:"日照",keyword:"日照RIZHAO"}]},{letter:"S",data:[{cityName:"三门峡",keyword:"三门峡SANMENXIA"},{cityName:"三明",keyword:"三明SANMING"},{cityName:"三沙",keyword:"三沙SANSHA"},{cityName:"三亚",keyword:"三亚SANYA"},{cityName:"上海",keyword:"上海SHANGHAI"},{cityName:"商洛",keyword:"商洛SHANGLUO"},{cityName:"商丘",keyword:"商丘SHANGQIU"},{cityName:"上饶",keyword:"上饶SHANGRAO"},{cityName:"山南",keyword:"山南SHANNAN"},{cityName:"汕头",keyword:"汕头SHANTOU"},{cityName:"汕尾",keyword:"汕尾SHANWEI"},{cityName:"韶关",keyword:"韶关SHAOGUAN"},{cityName:"绍兴",keyword:"绍兴SHAOXING"},{cityName:"邵阳",keyword:"邵阳SHAOYANG"},{cityName:"沈阳",keyword:"沈阳SHENYANG"},{cityName:"深圳",keyword:"深圳SHENZHEN"},{cityName:"石家庄",keyword:"石家庄SHIJIAZHUANG"},{cityName:"十堰",keyword:"十堰SHIYAN"},{cityName:"石嘴山",keyword:"石嘴山SHIZUISHAN"},{cityName:"双鸭山",keyword:"双鸭山SHUANGYASHAN"},{cityName:"朔州",keyword:"朔州SHUOZHOU"},{cityName:"四平",keyword:"四平SIPING"},{cityName:"松原",keyword:"松原SONGYUAN"},{cityName:"绥化",keyword:"绥化SUIHUA"},{cityName:"遂宁",keyword:"遂宁SUINING"},{cityName:"随州",keyword:"随州SUIZHOU"},{cityName:"宿迁",keyword:"宿迁SUQIAN"},{cityName:"苏州",keyword:"苏州SUZHOU"},{cityName:"宿州",keyword:"宿州SUZHOU"}]},{letter:"T",data:[{cityName:"塔城",keyword:"塔城TACHENG"},{cityName:"漯河",keyword:"漯河TAHE"},{cityName:"泰安",keyword:"泰安TAIAN"},{cityName:"太原",keyword:"太原TAIYUAN"},{cityName:"泰州",keyword:"泰州TAIZHOU"},{cityName:"台州",keyword:"台州TAIZHOU"},{cityName:"唐山",keyword:"唐山TANGSHAN"},{cityName:"天津",keyword:"天津TIANJIN"},{cityName:"天水",keyword:"天水TIANSHUI"},{cityName:"铁岭",keyword:"铁岭TIELING"},{cityName:"铜川",keyword:"铜川TONGCHUAN"},{cityName:"通化",keyword:"通化TONGHUA"},{cityName:"通辽",keyword:"通辽TONGLIAO"},{cityName:"铜陵",keyword:"铜陵TONGLING"},{cityName:"铜仁",keyword:"铜仁TONGREN"},{cityName:"吐鲁番",keyword:"吐鲁番TULUFAN"}]},{letter:"W",data:[{cityName:"潍坊",keyword:"潍坊WEIFANG"},{cityName:"威海",keyword:"威海WEIHAI"},{cityName:"渭南",keyword:"渭南WEINAN"},{cityName:"文山",keyword:"文山WENSHAN"},{cityName:"温州",keyword:"温州WENZHOU"},{cityName:"乌海",keyword:"乌海WUHAI"},{cityName:"武汉",keyword:"武汉WUHAN"},{cityName:"芜湖",keyword:"芜湖WUHU"},{cityName:"乌兰察布",keyword:"乌兰察布WULANCHABU"},{cityName:"乌鲁木齐",keyword:"乌鲁木齐WULUMUQI"},{cityName:"武威",keyword:"武威WUWEI"},{cityName:"无锡",keyword:"无锡WUXI"},{cityName:"吴忠",keyword:"吴忠WUZHONG"},{cityName:"梧州",keyword:"梧州WUZHOU"}]},{letter:"X",data:[{cityName:"厦门",keyword:"厦门XIAMEN"},{cityName:"西安",keyword:"西安XIAN"},{cityName:"湘潭",keyword:"湘潭XIANGTAN"},{cityName:"湘西",keyword:"湘西XIANGXI"},{cityName:"襄阳",keyword:"襄阳XIANGYANG"},{cityName:"咸宁",keyword:"咸宁XIANNING"},{cityName:"咸阳",keyword:"咸阳XIANYANG"},{cityName:"孝感",keyword:"孝感XIAOGAN"},{cityName:"锡林郭勒",keyword:"锡林郭勒XILINGUOLE"},{cityName:"兴安",keyword:"大兴安岭DAXINGANLING"},{cityName:"兴安",keyword:"兴安XINGAN"},{cityName:"邢台",keyword:"邢台XINGTAI"},{cityName:"西宁",keyword:"西宁XINING"},{cityName:"新疆",keyword:"新疆XINJIANG"},{cityName:"新乡",keyword:"新乡XINXIANG"},{cityName:"信阳",keyword:"信阳XINYANG"},{cityName:"新余",keyword:"新余XINYU"},{cityName:"忻州",keyword:"忻州XINZHOU"},{cityName:"西双版纳",keyword:"西双版纳XISHUANGBANNA"},{cityName:"宣城",keyword:"宣城XUANCHENG"},{cityName:"许昌",keyword:"许昌XUCHANG"},{cityName:"徐州",keyword:"徐州XUZHOU"}]},{letter:"Y",data:[{cityName:"雅安",keyword:"雅安YAAN"},{cityName:"延安",keyword:"延安YANAN"},{cityName:"延边",keyword:"延边YANBIAN"},{cityName:"盐城",keyword:"盐城YANCHENG"},{cityName:"阳江",keyword:"阳江YANGJIANG"},{cityName:"阳泉",keyword:"阳泉YANGQUAN"},{cityName:"扬州",keyword:"扬州YANGZHOU"},{cityName:"烟台",keyword:"烟台YANTAI"},{cityName:"宜宾",keyword:"宜宾YIBIN"},{cityName:"宜昌",keyword:"宜昌YICHANG"},{cityName:"伊春",keyword:"伊春YICHUN"},{cityName:"宜春",keyword:"宜春YICHUN"},{cityName:"伊犁",keyword:"伊犁YILI"},{cityName:"银川",keyword:"银川YINCHUAN"},{cityName:"营口",keyword:"营口YINGKOU"},{cityName:"鹰潭",keyword:"鹰潭YINGTAN"},{cityName:"益阳",keyword:"益阳YIYANG"},{cityName:"永州",keyword:"永州YONGZHOU"},{cityName:"岳阳",keyword:"岳阳YUEYANG"},{cityName:"玉林",keyword:"玉林YULIN"},{cityName:"榆林",keyword:"榆林YULIN"},{cityName:"运城",keyword:"运城YUNCHENG"},{cityName:"云浮",keyword:"云浮YUNFU"},{cityName:"玉树",keyword:"玉树YUSHU"},{cityName:"玉溪",keyword:"玉溪YUXI"}]},{letter:"Z",data:[{cityName:"枣庄",keyword:"枣庄ZAOZHUANG"},{cityName:"张家界",keyword:"张家界ZHANGJIAJIE"},{cityName:"张家口",keyword:"张家口ZHANGJIAKOU"},{cityName:"张掖",keyword:"张掖ZHANGYE"},{cityName:"漳州",keyword:"漳州ZHANGZHOU"},{cityName:"湛江",keyword:"湛江ZHANJIANG"},{cityName:"肇庆",keyword:"肇庆ZHAOQING"},{cityName:"昭通",keyword:"昭通ZHAOTONG"},{cityName:"朝阳",keyword:"朝阳ZHAOYANG"},{cityName:"郑州",keyword:"郑州ZHENGZHOU"},{cityName:"镇江",keyword:"镇江ZHENJIANG"},{cityName:"中山",keyword:"中山ZHONGSHAN"},{cityName:"中卫",keyword:"中卫ZHONGWEI"},{cityName:"周口",keyword:"周口ZHOUKOU"},{cityName:"舟山",keyword:"舟山ZHOUSHAN"},{cityName:"珠海",keyword:"珠海ZHUHAI"},{cityName:"驻马店",keyword:"驻马店ZHUMADIAN"},{cityName:"株洲",keyword:"株洲ZHUZHOU"},{cityName:"淄博",keyword:"淄博ZIBO"},{cityName:"自贡",keyword:"自贡ZIGONG"},{cityName:"资阳",keyword:"资阳ZIYANG"},{cityName:"遵义",keyword:"遵义ZUNYI"}]}]}}}]);