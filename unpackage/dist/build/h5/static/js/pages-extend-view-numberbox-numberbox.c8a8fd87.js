(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-numberbox-numberbox"],{"0fca":function(e,t,i){"use strict";var n=i("ac23"),a=i.n(n);a.a},"1f23":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"tuiNumberbox",props:{value:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},iconsize:{type:Number,default:24},iconcolor:{type:String,default:"#333"},height:{type:Number,default:50},width:{type:Number,default:90},bgcolor:{type:String,default:"#f2f2f2"},color:{type:String,default:"#333"}},computed:{val:function(){return this.value}},data:function(){return{}},methods:{px:function(e){return uni.upx2px(e)+"px"},getScale:function(){var e=1;return Number.isInteger(this.step)||(e=Math.pow(10,(this.step+"").split(".")[1].length)),e},calcNum:function(e){if(!this.disabled){var t=this.getScale(),i=this.value*t,n=this.step*t;"reduce"===e?i-=n:"plus"===e&&(i+=n);var a=i/t;a<this.min||a>this.max||this.handleChange(a,e)}},plus:function(){this.calcNum("plus")},reduce:function(){this.calcNum("reduce")},blur:function(e){var t=e.detail.value;t?(t=+t,t>this.max?t=this.max:t<this.min&&(t=this.min)):t=this.min,this.handleChange(t,"blur")},handleChange:function(e,t){this.disabled||this.$emit("change",{value:e,type:t})}}};t.default=n},"29fb":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[e._v("NumberBox")]),i("v-uni-view",{staticClass:"sub-title"},[e._v("数字框")])],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("基本用法")]),i("tui-numberbox",{attrs:{value:e.value},on:{change:function(t){t=e.$handleEvent(t),e.change(t)}}})],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("设置最小值和最大值")]),i("tui-numberbox",{attrs:{min:1,max:10,value:e.value2},on:{change:function(t){t=e.$handleEvent(t),e.change2(t)}}})],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("设置步长 0.1")]),i("tui-numberbox",{attrs:{step:.1,value:e.value3},on:{change:function(t){t=e.$handleEvent(t),e.change3(t)}}})],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("设置步长 10")]),i("tui-numberbox",{attrs:{step:10,value:e.value4},on:{change:function(t){t=e.$handleEvent(t),e.change4(t)}}})],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("禁用状态")]),i("tui-numberbox",{attrs:{disabled:!0}})],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("设置大小")]),i("tui-numberbox",{attrs:{height:70,width:140,iconsize:30,value:e.value5},on:{change:function(t){t=e.$handleEvent(t),e.change5(t)}}})],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("调整颜色")]),i("tui-numberbox",{attrs:{bgcolor:"rgba(0,0,0,0.5)",color:"#fff",iconcolor:"rgba(0,0,0,0.5)",value:e.value6},on:{change:function(t){t=e.$handleEvent(t),e.change6(t)}}})],1),i("v-uni-view",{staticClass:"tui-number-box"},[i("v-uni-view",{staticClass:"tui-title"},[e._v("获取输入的值："+e._s(e.value7))]),i("tui-numberbox",{attrs:{value:e.value7},on:{change:function(t){t=e.$handleEvent(t),e.change7(t)}}})],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"3bae":function(e,t,i){var n=i("d4d4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("502b47b6",n,!0,{sourceMap:!1,shadowMode:!1})},"6c36":function(e,t,i){"use strict";i.r(t);var n=i("795a"),a=i("e144");for(var u in a)"default"!==u&&function(e){i.d(t,e,function(){return a[e]})}(u);i("f8e7");var A=i("2877"),o=Object(A["a"])(a["default"],n["a"],n["b"],!1,null,"4be1e09c",null);t["default"]=o.exports},"795a":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"tui-numberbox-class tui-numberbox"},[i("v-uni-view",{staticClass:"tui-numbox-icon tui-icon-reduce ",class:[e.disabled||e.min>=e.value?"tui-disabled":""],style:{color:e.iconcolor,fontSize:e.px(e.iconsize)},on:{click:function(t){t=e.$handleEvent(t),e.reduce(t)}}}),i("v-uni-input",{staticClass:"tui-num-input",style:{color:e.color,fontSize:e.px(e.iconsize),background:e.bgcolor,height:e.px(e.height),width:e.px(e.width)},attrs:{type:"number",disabled:e.disabled},on:{blur:function(t){t=e.$handleEvent(t),e.blur(t)}},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}),i("v-uni-view",{staticClass:"tui-numbox-icon tui-icon-plus",class:[e.disabled||e.value>=e.max?"tui-disabled":""],style:{color:e.iconcolor,fontSize:e.px(e.iconsize)},on:{click:function(t){t=e.$handleEvent(t),e.plus(t)}}})],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"812d":function(e,t,i){"use strict";i.r(t);var n=i("29fb"),a=i("8a87");for(var u in a)"default"!==u&&function(e){i.d(t,e,function(){return a[e]})}(u);i("0fca");var A=i("2877"),o=Object(A["a"])(a["default"],n["a"],n["b"],!1,null,"0f39c714",null);t["default"]=o.exports},"8a87":function(e,t,i){"use strict";i.r(t);var n=i("f762"),a=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,function(){return n[e]})}(u);t["default"]=a.a},ac23:function(e,t,i){var n=i("b686");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3a030d18",n,!0,{sourceMap:!1,shadowMode:!1})},b686:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".container[data-v-0f39c714]{padding:%?20?% 0 %?120?% 0;-webkit-box-sizing:border-box;box-sizing:border-box}.header[data-v-0f39c714]{padding:%?80?% %?90?% %?60?% %?90?%;-webkit-box-sizing:border-box;box-sizing:border-box}.title[data-v-0f39c714]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-0f39c714]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-number-box[data-v-0f39c714]{padding:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?30?%;background:#fff;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}",""])},d4d4:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@font-face{font-family:numberbox;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASQAA0AAAAABtwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEdAAAABoAAAAciBpnRUdERUYAAARUAAAAHgAAAB4AKQALT1MvMgAAAZwAAABDAAAAVjxzSINjbWFwAAAB9AAAAEYAAAFK5zLpOGdhc3AAAARMAAAACAAAAAj//wADZ2x5ZgAAAkgAAACHAAAAnIfIEjxoZWFkAAABMAAAAC8AAAA2FZWEOWhoZWEAAAFgAAAAHAAAACQH3gOFaG10eAAAAeAAAAARAAAAEgwAAAFsb2NhAAACPAAAAAwAAAAMADAATm1heHAAAAF8AAAAHwAAACABEAAobmFtZQAAAtAAAAFJAAACiCnmEVVwb3N0AAAEHAAAAC0AAABV/+8iFXjaY2BkYGAA4gVmC5Tj+W2+MnCzMIDATWsFOQT9v5GFgbkeyOVgYAKJAgDrogf+AHjaY2BkYGBu+N/AEMPCAAJAkpEBFbAAAEcKAm142mNgZGBgYGWQYQDRDAxMQMwFhAwM/8F8BgALpAE5AHjaY2BkYWCcwMDKwMDUyXSGgYGhH0IzvmYwYuQAijKwMjNgBQFprikMDs9Yn01kbvjfwBDD3MDQABRmBMkBAOXpDHEAeNpjYYAAFghmZGAAAACdAA4AAAB42mNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZiesT6b+P8/AwOElvwnWQxVDwSMbAxwDiMTkGBiQAWMDMMeAABRZwszAAAAAAAAAAAAAAAwAE542iWKQQrCMBBF5xNpd0pQ7EIoTEnahSCTUNqdWz2A9TrieXKeXCc1qcPn/zfzh0BYv2pVH7oQgbvqdG5Yt/DTrNlPYz+wHvuuqhFSME4sFshTgKUsKfhH5lg8BSul3i5bS3mQdd0RIh2IjnvUrkXDd8zuhuFt86tY9fonIsSYgsXpB+cCGosAeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMGiTIxMjMwiWZmJQJRXVQoigTgjMd9QGIsgAFDsEBsAAAAAAAAB//8AAgABAAAADAAAABYAAAACAAEAAwAEAAEABAAAAAIAAAAAeNpjYGBgZACCq0vUOUD0TWsFORgNADPBBE4AAA==) format("woff");font-weight:400;font-style:normal}.tui-numbox-icon[data-v-4be1e09c]{font-family:numberbox!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding:%?10?%}.tui-icon-reduce[data-v-4be1e09c]:before{content:"\\E691"}.tui-icon-plus[data-v-4be1e09c]:before{content:"\\E605"}.tui-numberbox[data-v-4be1e09c]{display:-webkit-inline-flex;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tui-num-input[data-v-4be1e09c]{text-align:center;margin:0 %?10?%;font-weight:700}.tui-disabled[data-v-4be1e09c]{color:#ededed!important}',""])},e144:function(e,t,i){"use strict";i.r(t);var n=i("1f23"),a=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,function(){return n[e]})}(u);t["default"]=a.a},f762:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("6c36"));function a(e){return e&&e.__esModule?e:{default:e}}var u={components:{tuiNumberbox:n.default},data:function(){return{value:0,value2:1,value3:1,value4:0,value5:1,value6:1,value7:1}},methods:{change:function(e){this.value=e.value},change2:function(e){this.value2=e.value},change3:function(e){this.value3=e.value},change4:function(e){this.value4=e.value},change5:function(e){this.value5=e.value},change6:function(e){this.value6=e.value},change7:function(e){this.value7=e.value}}};t.default=u},f8e7:function(e,t,i){"use strict";var n=i("3bae"),a=i.n(n);a.a}}]);