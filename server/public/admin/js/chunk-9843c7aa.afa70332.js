(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9843c7aa"],{"14c6":function(t,e,o){"use strict";o.d(e,"n",(function(){return s})),o.d(e,"x",(function(){return i})),o.d(e,"y",(function(){return r})),o.d(e,"u",(function(){return n})),o.d(e,"C",(function(){return d})),o.d(e,"v",(function(){return l})),o.d(e,"B",(function(){return u})),o.d(e,"w",(function(){return c})),o.d(e,"z",(function(){return p})),o.d(e,"A",(function(){return g})),o.d(e,"a",(function(){return m})),o.d(e,"e",(function(){return f})),o.d(e,"f",(function(){return b})),o.d(e,"b",(function(){return _})),o.d(e,"c",(function(){return h})),o.d(e,"d",(function(){return v})),o.d(e,"E",(function(){return y})),o.d(e,"H",(function(){return D})),o.d(e,"F",(function(){return x})),o.d(e,"G",(function(){return w})),o.d(e,"D",(function(){return S})),o.d(e,"L",(function(){return C})),o.d(e,"I",(function(){return k})),o.d(e,"J",(function(){return z})),o.d(e,"K",(function(){return j})),o.d(e,"g",(function(){return O})),o.d(e,"l",(function(){return L})),o.d(e,"h",(function(){return $})),o.d(e,"m",(function(){return I})),o.d(e,"i",(function(){return A})),o.d(e,"k",(function(){return q})),o.d(e,"j",(function(){return E})),o.d(e,"M",(function(){return F})),o.d(e,"P",(function(){return G})),o.d(e,"N",(function(){return J})),o.d(e,"O",(function(){return M})),o.d(e,"r",(function(){return P})),o.d(e,"q",(function(){return N})),o.d(e,"s",(function(){return T})),o.d(e,"t",(function(){return B})),o.d(e,"p",(function(){return H})),o.d(e,"o",(function(){return K}));var a=o("f175");const s=t=>a.a.post("/goods.goods/add",t),i=t=>a.a.post("/goods.goods/edit",t),r=t=>a.a.get("/goods.goods/lists",{params:t}),n=t=>a.a.get("/goods.goods/commonLists",{params:t}),d=t=>a.a.post("/goods.goods/status",t),l=t=>a.a.post("/goods.goods/del",t),u=t=>a.a.post("/goods.goods/sort",t),c=t=>a.a.get("/goods.goods/detail",{params:{id:t}}),p=t=>a.a.get("/goods.goods/otherList",{params:t}),g=t=>a.a.post("goods.goods/rename ",t),m=t=>a.a.post("/goods.goods_brand/add",t),f=t=>a.a.get("/goods.goods_brand/lists",{params:t}),b=t=>a.a.post("/goods.goods_brand/status",t),_=t=>a.a.post("/goods.goods_brand/del",t),h=t=>a.a.get("/goods.goods_brand/detail",{params:{id:t}}),v=t=>a.a.post("/goods.goods_brand/edit",t),y=t=>a.a.post("/goods.goods_supplier_category/add",t),D=t=>a.a.get("goods.goods_supplier_category/lists",{params:t}),x=t=>a.a.post("goods.goods_supplier_category/del",{id:t}),w=t=>a.a.post("goods.goods_supplier_category/edit",t),S=t=>a.a.post("/goods.goods_supplier/add",t),C=t=>a.a.get("/goods.goods_supplier/lists",{params:t}),k=t=>a.a.post("goods.goods_supplier/del",{id:t}),z=t=>a.a.get("/goods.goods_supplier/detail",{params:{id:t}}),j=t=>a.a.post("/goods.goods_supplier/edit",t),O=t=>a.a.post("/goods.goods_category/add",t),L=t=>a.a.get("/goods.goods_category/lists",{params:t}),$=t=>a.a.get("/goods.goods_category/commonLists",{params:t}),I=t=>a.a.post("/goods.goods_category/status",t),A=t=>a.a.post("goods.goods_category/del",{id:t}),q=t=>a.a.post("/goods.goods_category/edit",t),E=t=>a.a.get("/goods.goods_category/detail",{params:{id:t}}),F=t=>a.a.post("/goods.goods_unit/add",t),G=t=>a.a.get("/goods.goods_unit/lists",{params:t}),J=t=>a.a.post("goods.goods_unit/del",{id:t}),M=t=>a.a.post("/goods.goods_unit/edit",t),P=t=>a.a.get("goods.goods_comment/lists",{params:t}),N=t=>a.a.post("goods.goods_comment/del",t),T=t=>a.a.post("goods.goods_comment/reply",t),B=t=>a.a.post("/goods.goods_comment/status",t),H=t=>a.a.get("goods.goods_comment_assistant/lists",{params:t}),K=t=>a.a.post("goods.goods_comment_assistant/add",t)},4072:function(t,e,o){"use strict";o.d(e,"f",(function(){return s})),o.d(e,"z",(function(){return i})),o.d(e,"A",(function(){return r})),o.d(e,"m",(function(){return n})),o.d(e,"l",(function(){return d})),o.d(e,"k",(function(){return l})),o.d(e,"n",(function(){return u})),o.d(e,"u",(function(){return c})),o.d(e,"t",(function(){return p})),o.d(e,"c",(function(){return g})),o.d(e,"d",(function(){return m})),o.d(e,"e",(function(){return f})),o.d(e,"v",(function(){return b})),o.d(e,"y",(function(){return _})),o.d(e,"b",(function(){return h})),o.d(e,"a",(function(){return v})),o.d(e,"g",(function(){return y})),o.d(e,"i",(function(){return D})),o.d(e,"j",(function(){return x})),o.d(e,"s",(function(){return w})),o.d(e,"q",(function(){return S})),o.d(e,"r",(function(){return C})),o.d(e,"o",(function(){return k})),o.d(e,"p",(function(){return z})),o.d(e,"w",(function(){return j})),o.d(e,"h",(function(){return O})),o.d(e,"x",(function(){return L}));var a=o("f175");const s=()=>a.a.get("/distribution.distribution_data/dataCenter"),i=t=>a.a.get("/distribution.distribution_data/topMemberEarnings",{params:t}),r=t=>a.a.get("/distribution.distribution_data/topMemberFans",{params:t}),n=t=>a.a.get("/distribution.distribution_goods/lists",{params:t}),d=t=>a.a.post("/distribution.distribution_goods/join",t),l=t=>a.a.get("/distribution.distribution_goods/detail",{params:t}),u=t=>a.a.post("/distribution.distribution_goods/set",t),c=t=>a.a.get("/distribution.distribution_member/lists",{params:t}),p=t=>a.a.get("/distribution.distribution_apply/detail",{params:t}),g=t=>a.a.get("/distribution.distribution_apply/lists",{params:t}),m=t=>a.a.post("/distribution.distribution_apply/pass",t),f=t=>a.a.post("/distribution.distribution_apply/refuse",t),b=t=>a.a.post("/distribution.distribution_member/open",t),_=t=>a.a.post("/distribution.distribution_member/freeze",t),h=t=>a.a.get("/distribution.distribution_member/adjustLevelInfo",{params:t}),v=t=>a.a.post("/distribution.distribution_member/adjustLevel",t),y=t=>a.a.get("/distribution.distribution_member/detail",{params:t}),D=t=>a.a.get("/distribution.distribution_member/getFans",{params:t}),x=t=>a.a.get("/distribution.distribution_member/getFansLists",{params:t}),w=t=>a.a.get("/distribution.distribution_level/lists",t),S=t=>a.a.get("/distribution.distribution_level/detail",{params:t}),C=t=>a.a.post("/distribution.distribution_level/edit",t),k=t=>a.a.post("/distribution.distribution_level/add",t),z=t=>a.a.post("/distribution.distribution_level/delete",t),j=t=>a.a.get("/distribution.distribution_order_goods/lists",{params:t}),O=t=>a.a.get("/distribution.distribution_config/getConfig",{params:t}),L=t=>a.a.post("/distribution.distribution_config/setConfig",t)},"4ae1":function(t,e,o){"use strict";var a=o("9ab4"),s=o("1b40"),i=o("0a6d");let r=class extends s.e{constructor(){super(...arguments),this.exportData={},this.formData={page_type:0,page_start:1,page_end:200,file_name:""}}handleOpen(){this.getData()}handleConfirm(){const t=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method({export:2,...this.param,...this.formData,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(()=>{this.$refs.dialog.close()}).finally(()=>{t.close()})}getData(){this.method({...this.param,export:1,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(t=>{this.exportData=t,this.formData.file_name=t.file_name,this.formData.page_end=t.page_end,this.formData.page_start=t.page_start})}created(){}};Object(a.a)([Object(s.c)()],r.prototype,"method",void 0),Object(a.a)([Object(s.c)()],r.prototype,"param",void 0),Object(a.a)([Object(s.c)()],r.prototype,"userId",void 0),Object(a.a)([Object(s.c)()],r.prototype,"type",void 0),Object(a.a)([Object(s.c)()],r.prototype,"pageSize",void 0),r=Object(a.a)([Object(s.a)({components:{LsDialog:i.a}})],r);var n=r,d=o("2877"),l=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"export-data inline"},[o("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:t.handleConfirm,open:t.handleOpen}},[o("div",{attrs:{slot:"trigger"},slot:"trigger"},[o("el-button",{attrs:{size:"small"}},[t._v("导出")])],1),o("div",[o("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",size:"small"}},[o("el-form-item",{attrs:{label:"数据量："}},[t._v(" 预计导出"+t._s(t.exportData.count)+"条数据，共"+t._s(t.exportData.sum_page)+"页，每页"+t._s(t.exportData.page_size)+"条数据 ")]),o("el-form-item",{attrs:{label:"导出限制："}},[t._v(" 每次导出最大允许"+t._s(t.exportData.max_page)+"页，共"+t._s(t.exportData.all_max_size)+"条数据 ")]),o("el-form-item",{attrs:{label:"导出范围：",required:""}},[o("el-radio-group",{model:{value:t.formData.page_type,callback:function(e){t.$set(t.formData,"page_type",e)},expression:"formData.page_type"}},[o("el-radio",{attrs:{label:0}},[t._v("全部导出")]),o("el-radio",{attrs:{label:1}},[t._v("分页导出")])],1)],1),1==t.formData.page_type?o("el-form-item",{attrs:{label:"分页范围：",required:""}},[o("div",{staticClass:"flex"},[o("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_start,callback:function(e){t.$set(t.formData,"page_start",e)},expression:"formData.page_start"}}),o("span",{staticClass:"flex-none m-l-8 m-r-8"},[t._v("页，至")]),o("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_end,callback:function(e){t.$set(t.formData,"page_end",e)},expression:"formData.page_end"}})],1)]):t._e(),o("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[o("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:t.formData.file_name,callback:function(e){t.$set(t.formData,"file_name",e)},expression:"formData.file_name"}})],1)],1)],1)])],1)}),[],!1,null,null,null);e.a=l.exports},"54ab":function(t,e,o){},"7bbc":function(t,e,o){"use strict";o.r(e);var a=o("9ab4"),s=o("1b40"),i=o("3c50"),r=o("0a6d"),n=o("6ddb"),d=o("4ae1"),l=o("4072"),u=o("14c6");let c=class extends s.e{constructor(){super(...arguments),this.apiDistributionGoodsLists=l.m,this.goodsSearchData={name:"",code:"",status:"",supplier_id:"",category_id:"",is_distribution:""},this.categoryList=[],this.options=[{value:"",label:"全部"},{value:"1",label:"参与分销"},{value:"0",label:"取消分销"}],this.goodsStatus=[{value:"",label:"全部"},{value:"1",label:"上架"},{value:"0",label:"下架"},{value:"-1",label:"已售馨"}],this.pager=new n.a,this.selectIds=[]}getCategoryList(){Object(u.z)({}).then(t=>{this.categoryList=t.category_list})}getDistributionData(t){t&&(this.pager.page=t),this.pager.request({callback:l.m,params:{...this.goodsSearchData}})}selectionChange(t){this.selectIds=t.map(t=>t.id)}selectAll(){this.$refs.paneTable.toggleAllSelection()}couponDel(t,e){Object(l.l)({ids:Array.isArray(t)?t:this.selectIds,is_distribution:e}).then(t=>{this.resetgoodsSearchData()})}resetgoodsSearchData(){Object.keys(this.goodsSearchData).map(t=>{this.$set(this.goodsSearchData,t,"")}),this.getDistributionData()}created(){this.getDistributionData(),this.getCategoryList()}};c=Object(a.a)([Object(s.a)({components:{LsPagination:i.a,LsDialog:r.a,ExportData:d.a}})],c);var p=c,g=(o("db94"),o("2877")),m=Object(g.a)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ls-goods"},[o("div",{staticClass:"ls-goods__top ls-card"},[o("el-alert",{attrs:{title:"温馨提示：1.设置分销商品的佣金比例。",type:"info","show-icon":"",closable:!1}}),o("div",{staticClass:"coupon-search m-t-16"},[o("el-form",{ref:"form",attrs:{inline:"",model:t.goodsSearchData,"label-width":"100px",size:"small"}},[o("el-form-item",{attrs:{label:"商品信息"}},[o("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"商品名称/ID/编码"},model:{value:t.goodsSearchData.name,callback:function(e){t.$set(t.goodsSearchData,"name",e)},expression:"goodsSearchData.name"}})],1),o("el-form-item",{attrs:{label:"商品分类"}},[o("el-cascader",{staticClass:"header-input",attrs:{options:t.categoryList,props:{multiple:!1,checkStrictly:!0,label:"name",value:"id",children:"sons",emitPath:!1},clearable:"",filterable:""},model:{value:t.goodsSearchData.category_id,callback:function(e){t.$set(t.goodsSearchData,"category_id",e)},expression:"goodsSearchData.category_id"}})],1),o("el-form-item",{attrs:{label:"分销状态"}},[o("el-select",{attrs:{placeholder:"全部"},model:{value:t.goodsSearchData.is_distribution,callback:function(e){t.$set(t.goodsSearchData,"is_distribution",e)},expression:"goodsSearchData.is_distribution"}},t._l(t.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{attrs:{label:"商品状态"}},[o("el-select",{attrs:{placeholder:"全部"},model:{value:t.goodsSearchData.status,callback:function(e){t.$set(t.goodsSearchData,"status",e)},expression:"goodsSearchData.status"}},t._l(t.goodsStatus,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{staticClass:"m-l-6",attrs:{label:""}},[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getDistributionData(1)}}},[t._v("查询")]),o("el-button",{attrs:{size:"small"},on:{click:t.resetgoodsSearchData}},[t._v("重置")]),o("export-data",{staticClass:"m-l-10",attrs:{pageSize:t.pager.size,method:t.apiDistributionGoodsLists,param:t.goodsSearchData}})],1)],1)],1)],1),o("div",{staticClass:"m-t-24 ls-card"},[o("div",{staticClass:"m-b-24"},[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.selectAll}},[t._v("全选当前页")]),o("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"取消分销",content:"确定批量不参与吗?请谨慎操作"},on:{confirm:function(e){return t.couponDel("",0)}}},[o("el-button",{attrs:{slot:"trigger",size:"mini",type:"primary"},slot:"trigger"},[t._v("取消分销")])],1),o("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"参与分销",content:"确定批量参与吗?请谨慎操作"},on:{confirm:function(e){return t.couponDel("",1)}}},[o("el-button",{attrs:{slot:"trigger",size:"mini",type:"primary"},slot:"trigger"},[t._v("参与分销")])],1)],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini"},on:{"selection-change":t.selectionChange}},[o("el-table-column",{attrs:{fixed:"left",type:"selection",width:"55"}}),o("el-table-column",{attrs:{prop:"name",label:"商品名称","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"flex"},[o("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:e.row.image}}),o("div",{staticClass:"goods-info m-l-8"},[o("div",{staticClass:"line-2"},[t._v(t._s(e.row.name))]),o("div",[2==e.row.spec_type?o("el-tag",{attrs:{size:"mini"}},[t._v("多规格")]):t._e()],1)])],1)]}}])}),o("el-table-column",{attrs:{prop:"coupon_code",label:"价格","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.price))])]}}])}),o("el-table-column",{attrs:{prop:"status_desc",label:"商品状态","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.status_desc))])]}}])}),o("el-table-column",{attrs:{prop:"is_distribution",label:"分销状态","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(1==e.row.is_distribution?"参与":"不参与")+" ")]}}])}),o("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{staticClass:"m-r-10",attrs:{slot:"trigger",type:"text",size:"small"},on:{click:function(o){return t.$router.push({path:"/distribution/distribution_goods_edit",query:{id:e.row.id}})}},slot:"trigger"},[t._v("设置佣金")]),1==e.row.is_distribution?o("ls-dialog",{staticClass:"inline m-l-10",attrs:{title:"取消分销",content:"确定不参与："+e.row.name+"？请谨慎操作"},on:{confirm:function(o){return t.couponDel([e.row.id],0)}}},[o("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("取消分销")])],1):t._e(),0==e.row.is_distribution?o("ls-dialog",{staticClass:"inline m-l-10",attrs:{title:"参与分销",content:"确定参与："+e.row.name+"？请谨慎操作"},on:{confirm:function(o){return t.couponDel([e.row.id],1)}}},[o("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("参与分销")])],1):t._e()]}}])})],1),o("div",{staticClass:"flex row-right m-t-24"},[o("ls-pagination",{on:{change:function(e){return t.getDistributionData()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)])}),[],!1,null,"0852b67c",null);e.default=m.exports},db94:function(t,e,o){"use strict";o("54ab")}}]);