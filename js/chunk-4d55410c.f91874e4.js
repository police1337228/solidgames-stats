(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d55410c"],{1148:function(t,e,a){"use strict";var r=a("da84"),n=a("5926"),i=a("577e"),s=a("1d80"),o=r.RangeError;t.exports=function(t){var e=i(s(this)),a="",r=n(t);if(r<0||r==1/0)throw o("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},"3a4b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-title"},[a("h3",[t._v("Общая статистика игроков")]),a("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:t.refresh}},[a("i",{staticClass:"material-icons"},[t._v("refresh")])])]),a("div",{staticClass:"row"},[a("p",[t._v("Выберите период:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.choosed,expression:"choosed"}],staticStyle:{display:"block"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.choosed=e.target.multiple?a:a[0]}}},t._l(t.period,(function(e){return a("option",{key:e.id},[t._v(t._s(e.title))])})),0),a("p",[t._v("Поиск по нику:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nick,expression:"nick"}],staticStyle:{display:"block"},domProps:{value:t.nick},on:{input:function(e){e.target.composing||(t.nick=e.target.value)}}}),t.loading?a("Loader"):t.n.length<1?a("p",{staticClass:"center-align"},[t._v(" Игрока с таким ником не найдено ")]):a("v-table",{attrs:{data:t.n},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.displayData;return a("tbody",{},t._l(r,(function(e,r){return a("tr",{key:e.id},[a("td",[t._v(t._s(r+1))]),a("td",[a("router-link",{attrs:{to:{name:"Player",params:{nick:e.playerName}}}},[t._v(t._s(e.lastSquadPrefix+e.playerName))])],1),a("td",[t._v(t._s(e.totalPlayedGames))]),a("td",[t._v(t._s(e.kills))]),a("td",[t._v(t._s(e.teamkills))]),a("td",[t._v(t._s(e.deaths))]),a("td",[t._v(t._s(e.kdRatio))]),a("td",[t._v(t._s(e.totalScore))])])})),0)}}])},[a("thead",{attrs:{slot:"head"},slot:"head"},[a("th",[t._v("Место")]),a("v-th",{attrs:{sortKey:"playerName"}},[t._v("Ник")]),a("v-th",{attrs:{sortKey:"totalPlayedGames"}},[t._v("Кол-во игр")]),a("v-th",{attrs:{sortKey:"kills"}},[t._v("Убийств")]),a("v-th",{attrs:{sortKey:"teamkills"}},[t._v("Тимкиллов")]),a("v-th",{attrs:{sortKey:"deaths"}},[t._v("Смертей")]),a("v-th",{attrs:{sortKey:"kdRatio"}},[t._v("K/D")]),a("v-th",{attrs:{sortKey:"totalScore",defaultSort:"desc"}},[t._v("Счет")])],1)])],1)])},n=[],i=a("1da1"),s=(a("d3b7"),a("b680"),a("96cf"),{name:"Players",data:function(){return{n:[],loading:!0,nick:"",choosed:"За все время",period:[{id:1,title:"За все время"},{id:2,title:"За ротацию от 27.02.2022"}]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.refresh();case 2:case"end":return e.stop()}}),e)})))()},watch:{choosed:function(){this.n=[],this.refresh()},nick:function(){this.loading||(this.n=[],this.refresh())}},methods:{refresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.choosed==t.period[0].title?t.r():(t.choosed=t.period[1].title)&&t.rotationTable();case 1:case"end":return e.stop()}}),e)})))()},r:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.n=[],e.next=4,fetch("stats.json");case 4:return a=e.sent,e.next=7,a.json();case 7:for(n in a=e.sent,r=1,a.globalStatistics)a.globalStatistics[n]&&(a.globalStatistics[n].id=r,r++,null===a.globalStatistics[n].lastSquadPrefix&&(a.globalStatistics[n].lastSquadPrefix=""),t.nick?-1!=a.globalStatistics[n].playerName.toLowerCase().indexOf(t.nick.toLowerCase())&&t.n.push(a.globalStatistics[n]):t.n.push(a.globalStatistics[n]));t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},rotationTable:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n,i,s,o,l,c,u,d,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.n=[],e.next=4,fetch("stats.json");case 4:return a=e.sent,e.next=7,a.json();case 7:for(n in a=e.sent,r=1,a.globalStatistics){for(d in i={},s=[],o=0,l=0,c=0,u=0,a.globalStatistics[n].byWeeks)a.globalStatistics[n].byWeeks[d].week>="2022-10"&&(s.push(a.globalStatistics[n].byWeeks[d]),h=a.globalStatistics[n].byWeeks[d],o+=h.totalPlayedGames,l+=h.kills,c+=h.teamkills,u+=h.deaths);o>0&&(i.id=r,r++,i.totalPlayedGames=o,i.kills=l,i.teamkills=c,i.deaths=u,i.rotationWeeks=s,i.playerName=a.globalStatistics[n].playerName,null===a.globalStatistics[n].lastSquadPrefix?i.lastSquadPrefix="":i.lastSquadPrefix=a.globalStatistics[n].lastSquadPrefix,i.kdRatio=(l/u).toFixed(2),i.totalScore=((l-c)/o).toFixed(2),t.nick?-1!=a.globalStatistics[n].playerName.toLowerCase().indexOf(t.nick.toLowerCase())&&t.n.push(i):t.n.push(i))}t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},showPlayer:function(t){this.$router.push("/player/".concat(t))}}}),o=s,l=a("2877"),c=Object(l["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},b680:function(t,e,a){"use strict";var r=a("23e7"),n=a("da84"),i=a("e330"),s=a("5926"),o=a("408a"),l=a("1148"),c=a("d039"),u=n.RangeError,d=n.String,h=Math.floor,f=i(l),v=i("".slice),p=i(1..toFixed),g=function(t,e,a){return 0===e?a:e%2===1?g(t,e-1,a*t):g(t*t,e/2,a)},m=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},b=function(t,e,a){var r=-1,n=a;while(++r<6)n+=e*t[r],t[r]=n%1e7,n=h(n/1e7)},k=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=h(r/e),r=r%e*1e7},w=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=d(t[e]);a=""===a?r:a+f("0",7-r.length)+r}return a},y=c((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!c((function(){p({})}));r({target:"Number",proto:!0,forced:y},{toFixed:function(t){var e,a,r,n,i=o(this),l=s(t),c=[0,0,0,0,0,0],h="",p="0";if(l<0||l>20)throw u("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return d(i);if(i<0&&(h="-",i=-i),i>1e-21)if(e=m(i*g(2,69,1))-69,a=e<0?i*g(2,-e,1):i/g(2,e,1),a*=4503599627370496,e=52-e,e>0){b(c,0,a),r=l;while(r>=7)b(c,1e7,0),r-=7;b(c,g(10,r,1),0),r=e-1;while(r>=23)k(c,1<<23),r-=23;k(c,1<<r),b(c,1,1),k(c,2),p=w(c)}else b(c,0,a),b(c,1<<-e,0),p=w(c)+f("0",l);return l>0?(n=p.length,p=h+(n<=l?"0."+f("0",l-n)+p:v(p,0,n-l)+"."+v(p,n-l))):p=h+p,p}})}}]);
//# sourceMappingURL=chunk-4d55410c.f91874e4.js.map