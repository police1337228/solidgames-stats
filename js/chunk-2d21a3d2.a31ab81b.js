(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-title"},[a("h3",[t._v("Отрядная статистика")]),a("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:t.refresh}},[a("i",{staticClass:"material-icons"},[t._v("refresh")])])]),a("div",{staticClass:"row"},[a("p",[t._v("Выберите отряд:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticStyle:{display:"block"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tag=e.target.multiple?a:a[0]}}},t._l(t.squads,(function(e){return a("option",{key:e},[t._v(t._s(e))])})),0),t.loading?a("Loader"):a("v-table",{attrs:{data:t.n},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.displayData;return a("tbody",{},t._l(r,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[a("router-link",{attrs:{to:{name:"Player",params:{nick:e.playerName}}}},[t._v(t._s(e.lastSquadPrefix+e.playerName))])],1),a("td",[t._v(t._s(e.totalPlayedGames))]),a("td",[t._v(t._s(e.kills))]),a("td",[t._v(t._s(e.teamkills))]),a("td",[t._v(t._s(e.deaths))]),a("td",[t._v(t._s(e.kdRatio))]),a("td",[t._v(t._s(e.totalScore))])])})),0)}}])},[a("thead",{attrs:{slot:"head"},slot:"head"},[a("v-th",{attrs:{sortKey:"id"}},[t._v("Место")]),a("v-th",{attrs:{sortKey:"playerName",defaultSort:"desc"}},[t._v("Ник")]),a("v-th",{attrs:{sortKey:"totalPlayedGames",defaultSort:"desc"}},[t._v("Кол-во игр")]),a("v-th",{attrs:{sortKey:"kills",defaultSort:"desc"}},[t._v("Убийств")]),a("v-th",{attrs:{sortKey:"teamkills",defaultSort:"desc"}},[t._v("Тимкиллов")]),a("v-th",{attrs:{sortKey:"deaths",defaultSort:"desc"}},[t._v("Смертей")]),a("v-th",{attrs:{sortKey:"kdRatio",defaultSort:"desc"}},[t._v("K/D")]),a("v-th",{attrs:{sortKey:"totalScore",defaultSort:"desc"}},[t._v("Счет")])],1)])],1)])},s=[],n=a("1da1"),i=(a("96cf"),a("d3b7"),{name:"Home",data:function(){return{n:[],tag:"[FNX]",squads:[],loading:!1}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,fetch("stats.json");case 3:return a=e.sent,e.next=6,a.json();case 6:for(r in a=e.sent,a.squadStatistics)t.squads.push(a.squadStatistics[r].prefix);t.r();case 9:case"end":return e.stop()}}),e)})))()},watch:{tag:function(t,e){this.n=[],this.r()}},methods:{refresh:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.r();case 3:t.currency=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},r:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.n=[],e.next=4,fetch("stats.json");case 4:return a=e.sent,e.next=7,a.json();case 7:for(s in a=e.sent,r=1,a.globalStatistics)a.globalStatistics[s].lastSquadPrefix===t.tag&&(a.globalStatistics[s].id=r,r++,t.n.push(a.globalStatistics[s]));t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()}}}),o=i,l=a("2877"),c=Object(l["a"])(o,r,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.a31ab81b.js.map