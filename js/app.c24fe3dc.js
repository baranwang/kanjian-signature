(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)i=s[c],r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/kanjian-signature/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("form",[n("label",[n("span",[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),n("label",[n("span",[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("label",[n("span",[e._v("Mobile")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"text"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),n("label",[n("span",[e._v("Base")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.base,expression:"base"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.base=t.target.multiple?n:n[0]}}},e._l(e.cityList,function(t){return n("option",{domProps:{value:t,textContent:e._s(t)}})}),0)]),n("label",[n("span",[e._v("Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),n("hr"),n("div",{domProps:{innerHTML:e._s(e.html)}}),n("hr"),n("textarea",{domProps:{textContent:e._s(e.html)}})])},o=[],i=(n("7f7f"),{data:function(){return{title:"Designer",name:"Panda WANG",mobile:"+86 175-2109-6154",base:"SHANGHAI",address:"哈尔滨路 160 号老洋行 1913 创意园 A116-119",cityList:["SHANGHAI","BEIJING","HONG KONG","TOKYO","KUALA LUMPUR"]}},computed:{html:function(){return'<div style="font-family:Verdana,sans-serif;font-size:x-small;color:#333;"><div>'.concat(this.title,"&nbsp;·&nbsp;<b>").concat(this.name,"</b></div><div>Mobile&nbsp;·&nbsp;<b>").concat(this.mobile,"</b></div><div>").concat(this.base,"&nbsp;·&nbsp;").concat(this.address,'</div><img src="https://pics.kanjian.com/kanjiancom/logo_emali_signature_v2.png" style="width:256px;height:64px;"><div>').concat(this.cityList.join("·"),'</div><div>看见音乐&nbsp;<a href="http://www.kanjian.com"><b style="color:#0000ff">KANJIAN.COM</b></a></div><div>星球发行&nbsp;<a href="http://star.kanjian.com"><b style="color:#0000ff">STAR.KANJIAN.COM</b></a></div><div>国际版&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://en.kanjian.com"><b style="color:#0000ff">EN.KANJIAN.COM</b></a></div></div>')}}}),s=i,l=(n("034f"),n("2877")),u=Object(l["a"])(s,r,o,!1,null,null,null),p=u.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(p)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.c24fe3dc.js.map