(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-692267f4"],{"1b58":function(t,e,a){"use strict";a.r(e);var i=a("9ab4"),s=a("1b40"),o=a("0a6d"),r=a("3c50"),l=a("4ae1"),n=a("e770"),c=a("6ddb"),p=a("4201");let m=class extends s.e{constructor(){super(...arguments),this.apiNoticeLists=n.e,this.searchForm={name:""},this.pager=new c.a}onSearch(){this.pager.page=1,this.getNoticeList()}resetSearch(){this.$set(this.searchForm,"name",""),this.getNoticeList()}changeShowSwitchStatus(t,e){Object(n.f)({id:e.id,status:t}).then(()=>{this.getNoticeList()})}goNoticeAdd(){this.$router.push({path:"/notice/notice_edit",query:{mode:p.f.ADD}})}goNoticeEdit(t){this.$router.push({path:"/notice/notice_edit",query:{id:t.id,mode:p.f.EDIT}})}getNoticeList(){this.pager.request({callback:n.e,params:{name:this.searchForm.name}}).catch(()=>{this.$message.error("数据请求失败，刷新重载!")})}onNoticeDel(t){Object(n.b)({id:t.id}).then(()=>{this.getNoticeList()})}created(){this.getNoticeList()}};m=Object(i.a)([Object(s.a)({components:{LsDialog:o.a,LsPagination:r.a,ExportData:l.a}})],m);var d=m,u=a("2877"),h=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"help_manage"},[a("div",{staticClass:"ls-card"},[a("el-alert",{attrs:{title:"温馨提示：1、平台发布的操作说明，公告文档，常见问题。用户可在商城的公告功能查看；2、公告文档排序值越小越前，排序值相同时新增文章在前；",type:"info","show-icon":"",closable:!1}}),a("div",{staticClass:"m-t-20"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.searchForm,size:"small"}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{placeholder:"请输入公告标题"},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),a("el-form-item",{staticClass:"m-l-24"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onSearch}},[t._v("查询 ")]),a("el-button",{attrs:{size:"mini"},on:{click:t.resetSearch}},[t._v("重置")]),a("export-data",{staticClass:"m-l-10",attrs:{pageSize:t.pager.size,method:t.apiNoticeLists,param:t.searchForm}})],1)],1)],1)],1),a("div",{staticClass:"ls-card m-t-24"},[a("div",{staticClass:"add-btn"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.goNoticeAdd}},[t._v("新增 ")])],1),a("div",{staticClass:"m-t-24"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini"}},[a("el-table-column",{attrs:{sortable:"",prop:"id",label:"ID","min-width":"70"}}),a("el-table-column",{attrs:{prop:"name",label:"标题","min-width":"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"line-1"},[t._v(t._s(e.row.name))])]}}])}),a("el-table-column",{attrs:{prop:"image",label:"封面图","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"80px",height:"80px"},attrs:{src:t.row.image,fit:"cover"}})]}}])}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},on:{change:function(a){return t.changeShowSwitchStatus(a,e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{attrs:{prop:"views",label:"浏览量","min-width":"120"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"120"}}),a("el-table-column",{attrs:{sortable:"",prop:"create_time",label:"创建时间","min-width":"200"}}),a("el-table-column",{attrs:{label:"操作","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.goNoticeEdit(e.row)}}},[t._v("编辑 ")]),a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{title:"删除公告"},on:{confirm:function(a){return t.onNoticeDel(e.row)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"mini"},slot:"trigger"},[t._v("删除 ")])],1)]}}])})],1),a("div",{staticClass:"m-t-24 flex row-right"},[a("ls-pagination",{on:{change:t.getNoticeList},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)])])}),[],!1,null,"186432e3",null);e.default=h.exports},"4ae1":function(t,e,a){"use strict";var i=a("9ab4"),s=a("1b40"),o=a("0a6d");let r=class extends s.e{constructor(){super(...arguments),this.exportData={},this.formData={page_type:0,page_start:1,page_end:200,file_name:""}}handleOpen(){this.getData()}handleConfirm(){const t=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method({export:2,...this.param,...this.formData,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(()=>{this.$refs.dialog.close()}).finally(()=>{t.close()})}getData(){this.method({...this.param,export:1,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(t=>{this.exportData=t,this.formData.file_name=t.file_name,this.formData.page_end=t.page_end,this.formData.page_start=t.page_start})}created(){}};Object(i.a)([Object(s.c)()],r.prototype,"method",void 0),Object(i.a)([Object(s.c)()],r.prototype,"param",void 0),Object(i.a)([Object(s.c)()],r.prototype,"userId",void 0),Object(i.a)([Object(s.c)()],r.prototype,"type",void 0),Object(i.a)([Object(s.c)()],r.prototype,"pageSize",void 0),r=Object(i.a)([Object(s.a)({components:{LsDialog:o.a}})],r);var l=r,n=a("2877"),c=Object(n.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"export-data inline"},[a("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:t.handleConfirm,open:t.handleOpen}},[a("div",{attrs:{slot:"trigger"},slot:"trigger"},[a("el-button",{attrs:{size:"small"}},[t._v("导出")])],1),a("div",[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"数据量："}},[t._v(" 预计导出"+t._s(t.exportData.count)+"条数据，共"+t._s(t.exportData.sum_page)+"页，每页"+t._s(t.exportData.page_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出限制："}},[t._v(" 每次导出最大允许"+t._s(t.exportData.max_page)+"页，共"+t._s(t.exportData.all_max_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出范围：",required:""}},[a("el-radio-group",{model:{value:t.formData.page_type,callback:function(e){t.$set(t.formData,"page_type",e)},expression:"formData.page_type"}},[a("el-radio",{attrs:{label:0}},[t._v("全部导出")]),a("el-radio",{attrs:{label:1}},[t._v("分页导出")])],1)],1),1==t.formData.page_type?a("el-form-item",{attrs:{label:"分页范围：",required:""}},[a("div",{staticClass:"flex"},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_start,callback:function(e){t.$set(t.formData,"page_start",e)},expression:"formData.page_start"}}),a("span",{staticClass:"flex-none m-l-8 m-r-8"},[t._v("页，至")]),a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_end,callback:function(e){t.$set(t.formData,"page_end",e)},expression:"formData.page_end"}})],1)]):t._e(),a("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[a("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:t.formData.file_name,callback:function(e){t.$set(t.formData,"file_name",e)},expression:"formData.file_name"}})],1)],1)],1)])],1)}),[],!1,null,null,null);e.a=c.exports},e770:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"f",(function(){return l})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return c}));var i=a("f175");const s=t=>i.a.post("/shop_notice.shop_notice/add",t),o=t=>i.a.get("/shop_notice.shop_notice/lists",{params:t}),r=t=>i.a.post("/shop_notice.shop_notice/edit",t),l=t=>i.a.post("/shop_notice.shop_notice/status",t),n=t=>i.a.get("/shop_notice.shop_notice/detail",{params:t}),c=t=>i.a.post("/shop_notice.shop_notice/del",t)}}]);