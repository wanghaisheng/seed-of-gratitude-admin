(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3963f328"],{a2cc:function(e,t,r){"use strict";r.r(t);var s=r("9ab4"),a=r("1b40"),n=r("f633"),l=r("4201"),u=r("6ddb"),i=r("0a6d"),o=r("3c50");let d=class extends a.e{constructor(){super(...arguments),this.pager=new u.a}getUserLevelList(){this.pager.request({callback:n.o,params:{}}).catch(()=>{this.$message.error("数据请求失败，刷新重载!")})}onUserLevelAdd(){this.$router.push({path:"/user/grade_edit",query:{mode:l.f.ADD}})}onUserLevelEdit(e){this.$router.push({path:"/user/grade_edit",query:{mode:l.f.EDIT,id:e.id,level:e.rank}})}onUserLevelSee(e){this.$router.push({path:"/user/grade_edit",query:{mode:l.f.EDIT,id:e.id,level:e.rank,disabled:"true"}})}onUserLevelDel(e){Object(n.l)({id:e.id}).then(()=>{this.getUserLevelList(),this.$message.success("删除成功!")}).catch(()=>{this.$message.error("删除失败")})}created(){this.getUserLevelList()}};d=Object(s.a)([Object(a.a)({components:{LsDialog:i.a,LsPagination:o.a}})],d);var c=d,p=r("2877"),f=Object(p.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-grade"},[r("div",{staticClass:"ls-card"},[r("el-alert",{staticClass:"xxl",attrs:{title:"温馨提示：1.管理用户等级，系统默认等级不能删除；2.删除用户等级时，会重新调整用户等级为系统默认等级，请谨慎操作。",type:"info",closable:!1,"show-icon":""}})],1),r("div",{staticClass:"ls-user__grade ls-card m-t-20"},[r("div",{staticClass:"list-header"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.onUserLevelAdd()}}},[e._v("新增用户等级")])],1),r("div",{staticClass:"list-table m-t-16"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:e.pager.lists,"default-sort":{prop:"rank",order:"ascending"},"header-cell-style":{background:"#f5f8ff"},size:"mini"}},[r("el-table-column",{attrs:{prop:"rank",label:"等级级别","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.rank?r("div",[e._v(e._s(t.row.rank)+"级（默认等级）")]):r("div",[e._v(e._s(t.row.rank)+"级")])]}}])}),r("el-table-column",{attrs:{prop:"name",label:"等级名称","min-width":"100px"}}),r("el-table-column",{attrs:{prop:"image",label:"等级图标","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:e.row.image}})]}}])}),r("el-table-column",{attrs:{prop:"num",label:"用户数","min-width":"100px"}}),r("el-table-column",{attrs:{prop:"discount",label:"等级折扣","min-width":"100px"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.onUserLevelSee(t.row)}}},[e._v("详情")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.onUserLevelEdit(t.row)}}},[e._v("编辑")]),1!==t.row.rank?r("ls-dialog",{staticClass:"m-l-10 inline",on:{confirm:function(r){return e.onUserLevelDel(t.row)}}},[r("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[e._v("删除")])],1):e._e()]}}])})],1)],1),r("div",{staticClass:"flex row-right m-t-16 row-right"},[r("ls-pagination",{on:{change:function(t){return e.getUserLevelList()}},model:{value:e.pager,callback:function(t){e.pager=t},expression:"pager"}})],1)])])}),[],!1,null,null,null);t.default=f.exports},f633:function(e,t,r){"use strict";r.d(t,"o",(function(){return a})),r.d(t,"k",(function(){return n})),r.d(t,"m",(function(){return l})),r.d(t,"n",(function(){return u})),r.d(t,"l",(function(){return i})),r.d(t,"j",(function(){return o})),r.d(t,"f",(function(){return d})),r.d(t,"h",(function(){return c})),r.d(t,"i",(function(){return p})),r.d(t,"g",(function(){return f})),r.d(t,"p",(function(){return g})),r.d(t,"q",(function(){return m})),r.d(t,"b",(function(){return v})),r.d(t,"s",(function(){return h})),r.d(t,"t",(function(){return b})),r.d(t,"u",(function(){return _})),r.d(t,"r",(function(){return w})),r.d(t,"c",(function(){return L})),r.d(t,"d",(function(){return k})),r.d(t,"e",(function(){return x})),r.d(t,"v",(function(){return y})),r.d(t,"a",(function(){return U}));var s=r("f175");const a=e=>s.a.get("/user.user_level/lists",{params:e}),n=e=>s.a.post("/user.user_level/add",e),l=e=>s.a.get("/user.user_level/detail",{params:e}),u=e=>s.a.post("/user.user_level/edit",e),i=e=>s.a.post("/user.user_level/del",e),o=e=>s.a.get("/user.user_label/lists",{params:e}),d=e=>s.a.post("/user.user_label/add",e),c=e=>s.a.get("/user.user_label/detail",{params:e}),p=e=>s.a.post("/user.user_label/edit",e),f=e=>s.a.post("/user.user_label/del",e),g=e=>s.a.get("/user.user/lists",{params:e}),m=()=>s.a.get("/user.user/otherList"),v=e=>s.a.get("/user.user/detail",{params:e}),h=e=>s.a.post("/user.user/setInfo",e),b=e=>s.a.post("/user.user/setLabel",e),_=e=>s.a.post("/user.user/setUserLabel",e),w=e=>s.a.post("/user.user/adjustUserWallet",e),L=()=>s.a.get("/user.user/index"),k=e=>s.a.get("/user.user/info",{params:e}),x=e=>s.a.get("/user.user/userInviterLists",{params:e}),y=e=>s.a.post("/user.user/adjustFirstLeader",e),U=e=>s.a.get("/user.user/selectUserLists",{params:e})}}]);