(function(e){function t(t){for(var i,s,r=t[0],a=t[1],l=t[2],d=0,b=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,r=1;r<n.length;r++){var a=n[r];0!==o[a]&&(i=!1)}i&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},c=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/santas-wish-list/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13cc":function(e,t,n){},"2d19":function(e,t,n){"use strict";n("6785")},4699:function(e,t,n){"use strict";n("13cc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o=(n("b0c0"),{class:"container"}),c={key:0,class:"wrapper"},s={class:"list"},r=Object(i["f"])("h1",null," Dear Santa, ",-1),a=Object(i["f"])("h3",null,"This year I have been very good. Here is my wish list:",-1),l={class:"list-items"},u={class:"send"},d=Object(i["f"])("h3",null,"Merry Christmas! Love from",-1),b={class:"flex"};function f(e,t,n,f,p,m){var h=Object(i["k"])("wish-list-item"),O=Object(i["k"])("the-letter");return Object(i["g"])(),Object(i["d"])("div",o,[Object(i["f"])(i["b"],{name:"fade"},{default:Object(i["n"])((function(){return[p.visible?(Object(i["g"])(),Object(i["d"])("div",c,[Object(i["f"])("div",s,[r,a,Object(i["o"])(Object(i["f"])("input",{type:"text",name:"wishlistItem",placeholder:"Write your wish here","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.wishlistItem=e}),onKeyup:t[2]||(t[2]=Object(i["p"])((function(){return m.addToWishList&&m.addToWishList.apply(m,arguments)}),["enter"]))},null,544),[[i["m"],p.wishlistItem]]),Object(i["f"])("button",{class:"add-item-btn",onClick:t[3]||(t[3]=function(){return m.addToWishList&&m.addToWishList.apply(m,arguments)})},"Add item"),Object(i["f"])("section",l,[(Object(i["g"])(!0),Object(i["d"])(i["a"],null,Object(i["j"])(p.wishList,(function(e,t){return Object(i["g"])(),Object(i["d"])(h,{key:t,id:t,listItem:e,onDeleteItem:function(e){return m.removeFromList(t)}},null,8,["id","listItem","onDeleteItem"])})),128))])]),Object(i["f"])("div",u,[d,Object(i["o"])(Object(i["f"])("input",{type:"text",name:"name","onUpdate:modelValue":t[4]||(t[4]=function(e){return p.name=e}),placeholder:"Write your name"},null,512),[[i["m"],p.name]]),Object(i["f"])("div",b,[Object(i["f"])("button",{class:"reset-btn",onClick:t[5]||(t[5]=function(){return m.resetComponent&&m.resetComponent.apply(m,arguments)})}," reset "),Object(i["f"])("button",{class:"send-btn",onClick:t[6]||(t[6]=function(){return m.hideComponent&&m.hideComponent.apply(m,arguments)})}," send to santa ")])])])):Object(i["e"])("",!0)]})),_:1}),Object(i["f"])(i["b"],{name:"fade-spin"},{default:Object(i["n"])((function(){return[p.show?(Object(i["g"])(),Object(i["d"])(O,{key:0,submittedName:p.name,onShowHomepage:m.hideComponent},null,8,["submittedName","onShowHomepage"])):Object(i["e"])("",!0)]})),_:1})])}n("a434");var p=Object(i["q"])("data-v-50d127d6"),m=p((function(e,t,n,o,c,s){return Object(i["g"])(),Object(i["d"])("section",null,[Object(i["f"])("p",null,Object(i["l"])(n.listItem),1),Object(i["f"])("span",{onClick:t[1]||(t[1]=function(e){return s.removeItem(n.id)})},"X")])})),h=(n("a9e3"),{props:{listItem:String,id:Number},methods:{removeItem:function(e){this.$emit("deleteItem",e)}}});n("2d19");h.render=m,h.__scopeId="data-v-50d127d6";var O=h,j=n("6c81"),v=n.n(j),w=Object(i["q"])("data-v-4c928b3e");Object(i["i"])("data-v-4c928b3e");var y={class:"wrapper2"},g=Object(i["f"])("img",{src:v.a,alt:"envelope image"},null,-1),I=Object(i["f"])("section",{class:"address"},[Object(i["f"])("p",null,"To Santa,"),Object(i["f"])("p",null,"123 Elf Road"),Object(i["f"])("p",null,"The North Pole")],-1),L={class:"name"};Object(i["h"])();var k=w((function(e,t,n,o,c,s){return Object(i["g"])(),Object(i["d"])("div",y,[Object(i["f"])("button",{onClick:t[1]||(t[1]=function(){return s.showHomePage&&s.showHomePage.apply(s,arguments)}),class:"home-btn"},"Home"),g,I,Object(i["f"])("section",L,[Object(i["f"])("p",null,"Love "+Object(i["l"])(n.submittedName),1)])])})),C={props:{submittedName:String},methods:{showHomePage:function(){this.$emit("show-homepage")}}};n("4699");C.render=k,C.__scopeId="data-v-4c928b3e";var _=C,P={data:function(){return{wishlistItem:"",wishList:[],name:"",visible:!0,show:!1}},components:{WishListItem:O,TheLetter:_},methods:{addToWishList:function(){this.wishList.push(this.wishlistItem),this.wishlistItem=""},removeFromList:function(e){this.wishList.splice(e,1)},hideComponent:function(){this.visible=!this.visible,this.show=!this.show},resetComponent:function(){this.name="",this.wishList=[]}}};n("c0cb");P.render=f;var S=P,T=Object(i["c"])(S);T.mount("#app")},6785:function(e,t,n){},"6c81":function(e,t,n){e.exports=n.p+"img/letter.318c7050.png"},c0cb:function(e,t,n){"use strict";n("c803")},c803:function(e,t,n){}});
//# sourceMappingURL=app.3c6aa986.js.map