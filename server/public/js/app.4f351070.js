(function(t){function e(e){for(var i,o,s=e[0],u=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0745":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Notas bruses 2")])])}],a={},o=a,s=n("2877"),u=Object(s["a"])(o,i,r,!1,null,"7731a3ea",null);e["default"]=u.exports},"3a10":function(t,e,n){},4601:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"keep"}},[n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"amber"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("span",{staticClass:"title ml-3 mr-5"},[n("span",{staticClass:"font-weight-light"},[t._v("Charlie Bot")])]),n("v-spacer")],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",color:"grey lighten-4"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[t._l(t.items,function(e,i){return[e.heading?n("v-layout",{key:i,attrs:{"align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v(t._s(e.heading))]):t._e()],1),n("v-flex",{staticClass:"text-right",attrs:{xs6:""}},[n("v-btn",{attrs:{small:"",text:""}},[t._v("edit")])],1)],1):e.divider?n("v-divider",{key:i,staticClass:"my-4",attrs:{dark:""}}):n("v-list-item",{key:i,attrs:{to:{name:e.to}},on:{click:function(t){}}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"grey--text"},[t._v(t._s(e.text))])],1)],1)]})],2)],1),n("v-content",[n("router-view")],1)],1)},r=[],a={props:{source:String},data:function(){return{drawer:null,items:[{icon:"lightbulb_outline",text:"Intents",to:"brusesNotes"},{icon:"touch_app",text:"Notas bruses 2",to:"brusesNotes2"},{divider:!0},{heading:"Labels",to:""},{icon:"add",text:"Create new label",to:""},{divider:!0},{icon:"archive",text:"Archive",to:""},{icon:"delete",text:"Trash",to:""},{divider:!0},{icon:"settings",text:"Settings",to:""},{icon:"chat_bubble",text:"Trash",to:""},{icon:"help",text:"Help",to:""},{icon:"phonelink",text:"App downloads",to:""},{icon:"keyboard",text:"Keyboard shortcuts",to:""}]}}},o=a,s=(n("99f1"),n("2877")),u=n("6544"),c=n.n(u),l=n("7496"),d=n("40dc"),f=n("5bc1"),p=n("8336"),m=n("a75b"),h=n("ce7e"),v=n("0e8f"),b=n("132d"),_=n("a722"),g=n("8860"),T=n("da13"),y=n("1800"),w=n("5d23"),x=n("f774"),k=n("2fa4"),P=n("e0c7"),S=Object(s["a"])(o,i,r,!1,null,null,null);e["default"]=S.exports;c()(S,{VApp:l["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VBtn:p["a"],VContent:m["a"],VDivider:h["a"],VFlex:v["a"],VIcon:b["a"],VLayout:_["a"],VList:g["a"],VListItem:T["a"],VListItemAction:y["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"],VSpacer:k["a"],VSubheader:P["a"]})},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=(n("5363"),n("f309"));i["a"].use(r["a"]);var a=new r["a"]({icons:{iconfont:"mdi"}}),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view")],1)],1)},s=[],u=n("2877"),c=n("6544"),l=n.n(c),d=n("7496"),f={},p=Object(u["a"])(f,o,s,!1,null,null,null),m=p.exports;l()(p,{VApp:d["a"]});var h=n("8c4f");i["a"].use(h["a"]);var v=new h["a"]({mode:"history",base:"/",routes:[{path:"/",component:n("4601").default,children:[{path:"/notas-bruses",name:"brusesNotes",component:n("5e43").default},{path:"/notas-bruses2",name:"brusesNotes2",component:n("0745").default}]}]}),b=n("2f62"),_=n("bc3a"),g=n.n(_);i["a"].prototype.$http=g.a,i["a"].use(b["a"]);var T=new b["a"].Store({state:{rank:[{id:1,name:"Mortal",minMasterPoints:0},{id:2,name:"SemiDios",minMasterPoints:100},{id:3,name:"Dios",minMasterPoints:300},{id:4,name:"Titán",minMasterPoints:600}],masterPoints:0},mutations:{updateMasterPoints:function(t,e){t.masterPoints+=e}},actions:{updateMasterPoints:function(t,e){var n=t.commit;n("updateMasterPoints",e)}}}),y=(n("3a10"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("\n    Tiempo transcurrido:\n    "+t._s(t.hours)+" :\n    "+t._s(t._f("zeroPad")(t.minutes))+" :\n    "+t._s(t._f("zeroPad")(t.seconds))+" :\n    "+t._s(t._f("zeroPad")(t.milliSeconds,3))+"\n  ")]),t.isRunning?t._e():n("v-btn",{attrs:{outline:"",color:"primary",dark:""},on:{click:t.startTimer}},[t._v("EMPEZAR")]),t.isRunning?n("v-btn",{attrs:{outline:"",color:"success",dark:"",disabled:!t.isRunning},on:{click:t.pushTime}},[t._v("VUELTA")]):t._e(),t.isRunning?n("v-btn",{attrs:{outline:"",color:"error",dark:"",disabled:!t.isRunning},on:{click:t.stopTimer}},[t._v("DETENER")]):t._e(),t.isRunning?n("v-btn",{attrs:{outline:"",color:"black",dark:""},on:{click:t.clearAll}},[t._v("BORRAR")]):t._e(),n("ul",t._l(t.laps,function(e){return n("li",[t._v("\n      "+t._s(e.hours)+" :\n      "+t._s(t._f("zeroPad")(e.minutes))+" :\n      "+t._s(t._f("zeroPad")(e.seconds))+" :\n      "+t._s(t._f("zeroPad")(e.milliSeconds,3))+"\n    ")])}),0)],1)}),w=[],x=(n("6b54"),n("f576"),{mounted:function(){console.log("esto hay en laps: ",this.laps)},props:["laps"],data:function(){return{times:[],animateFrame:0,nowTime:0,diffTime:0,startTime:0,isRunning:!1}},methods:{setSubtractStartTime:function(t){t="undefined"!==typeof t?t:0;this.startTime=Math.floor(performance.now()-t)},startTimer:function(){var t=this;t.setSubtractStartTime(t.diffTime),function e(){t.nowTime=Math.floor(performance.now()),t.diffTime=t.nowTime-t.startTime,t.animateFrame=requestAnimationFrame(e)}(),t.isRunning=!0},stopTimer:function(){this.$emit("stop",this.times),this.isRunning=!1,cancelAnimationFrame(this.animateFrame)},pushTime:function(){this.times.push({hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliSeconds:this.milliSeconds})},clearAll:function(){this.startTime=0,this.nowTime=0,this.diffTime=0,this.times=[],this.stopTimer(),this.animateFrame=0}},computed:{hours:function(){return Math.floor(this.diffTime/1e3/60/60)},minutes:function(){return Math.floor(this.diffTime/1e3/60)%60},seconds:function(){return Math.floor(this.diffTime/1e3)%60},milliSeconds:function(){return Math.floor(this.diffTime%1e3)}},filters:{zeroPad:function(t,e){e="undefined"!==typeof e?e:2;return t.toString().padStart(e,"0")}}}),k=x,P=n("8336"),S=Object(u["a"])(k,y,w,!1,null,"30f75174",null),V=S.exports;l()(S,{VBtn:P["a"]}),i["a"].component("chronometer",V);var M={formattedDate:function(t){var e=new Date(t);return e.toLocaleString()}},O={install:function(t){t.helpers=M,t.prototype.$helpers=M}};i["a"].use(O);n("d5e8"),n("d1e7");i["a"].config.productionTip=!1,new i["a"]({vuetify:a,router:v,store:T,render:function(t){return t(m)}}).$mount("#app")},"5e43":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Notas bruses de 2")])])}],a={},o=a,s=n("2877"),u=Object(s["a"])(o,i,r,!1,null,"7d70825a",null);e["default"]=u.exports},"927d":function(t,e,n){},"99f1":function(t,e,n){"use strict";var i=n("927d"),r=n.n(i);r.a}});
//# sourceMappingURL=app.4f351070.js.map