(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8401e5f6"],{"1c0d":function(t,e,i){},4072:function(t,e,i){"use strict";i.d(e,"f",(function(){return o})),i.d(e,"z",(function(){return l})),i.d(e,"A",(function(){return n})),i.d(e,"m",(function(){return a})),i.d(e,"l",(function(){return r})),i.d(e,"k",(function(){return d})),i.d(e,"n",(function(){return c})),i.d(e,"u",(function(){return u})),i.d(e,"t",(function(){return p})),i.d(e,"c",(function(){return b})),i.d(e,"d",(function(){return f})),i.d(e,"e",(function(){return m})),i.d(e,"v",(function(){return h})),i.d(e,"y",(function(){return _})),i.d(e,"b",(function(){return g})),i.d(e,"a",(function(){return v})),i.d(e,"g",(function(){return w})),i.d(e,"i",(function(){return y})),i.d(e,"j",(function(){return x})),i.d(e,"s",(function(){return $})),i.d(e,"q",(function(){return k})),i.d(e,"r",(function(){return C})),i.d(e,"o",(function(){return j})),i.d(e,"p",(function(){return O})),i.d(e,"w",(function(){return S})),i.d(e,"h",(function(){return z})),i.d(e,"x",(function(){return L}));var s=i("f175");const o=()=>s.a.get("/distribution.distribution_data/dataCenter"),l=t=>s.a.get("/distribution.distribution_data/topMemberEarnings",{params:t}),n=t=>s.a.get("/distribution.distribution_data/topMemberFans",{params:t}),a=t=>s.a.get("/distribution.distribution_goods/lists",{params:t}),r=t=>s.a.post("/distribution.distribution_goods/join",t),d=t=>s.a.get("/distribution.distribution_goods/detail",{params:t}),c=t=>s.a.post("/distribution.distribution_goods/set",t),u=t=>s.a.get("/distribution.distribution_member/lists",{params:t}),p=t=>s.a.get("/distribution.distribution_apply/detail",{params:t}),b=t=>s.a.get("/distribution.distribution_apply/lists",{params:t}),f=t=>s.a.post("/distribution.distribution_apply/pass",t),m=t=>s.a.post("/distribution.distribution_apply/refuse",t),h=t=>s.a.post("/distribution.distribution_member/open",t),_=t=>s.a.post("/distribution.distribution_member/freeze",t),g=t=>s.a.get("/distribution.distribution_member/adjustLevelInfo",{params:t}),v=t=>s.a.post("/distribution.distribution_member/adjustLevel",t),w=t=>s.a.get("/distribution.distribution_member/detail",{params:t}),y=t=>s.a.get("/distribution.distribution_member/getFans",{params:t}),x=t=>s.a.get("/distribution.distribution_member/getFansLists",{params:t}),$=t=>s.a.get("/distribution.distribution_level/lists",t),k=t=>s.a.get("/distribution.distribution_level/detail",{params:t}),C=t=>s.a.post("/distribution.distribution_level/edit",t),j=t=>s.a.post("/distribution.distribution_level/add",t),O=t=>s.a.post("/distribution.distribution_level/delete",t),S=t=>s.a.get("/distribution.distribution_order_goods/lists",{params:t}),z=t=>s.a.get("/distribution.distribution_config/getConfig",{params:t}),L=t=>s.a.post("/distribution.distribution_config/setConfig",t)},"63be":function(t,e,i){},"84ac":function(t,e,i){"use strict";i("1c0d")},"84f7":function(t,e,i){"use strict";i("63be")},a897:function(t,e,i){"use strict";var s=i("9ab4"),o=i("1b40"),l=i("6fad"),n=i.n(l),a=i("b3ad"),r=i("6ddb"),d=i("d70b");let c=class extends o.e{constructor(){super(...arguments),this.firstData=!0,this.identify=""}get editStyle(){return this.width?{width:this.width+"px"}:{}}valueChange(t){this.firstData&&(this.firstData=!1,this.editor.txt.html(t))}handeleChange(t){t.forEach(t=>{this.editor.cmd.do("insertHTML",`<img src="${t}" style="max-width:100%;"/>`)})}created(){this.identify="editor-"+Object(r.g)(3)}mounted(){this.editor=new n.a("#"+this.identify),this.editor.config.height=this.height,this.editor.config.menus=this.menu,this.editor.config.menuTooltipPosition="down",this.editor.config.showFullScreen=!1,this.editor.config.showLinkImg=!1,this.editor.config.uploadImgShowBase64=!0,this.editor.config.zIndex=1,this.editor.config.uploadImgFromMedia=()=>{this.$refs.materialSelect.showDialog()},this.editor.config.onchange=t=>{this.$emit("input",t)},this.editor.config.uploadVideoServer=d.a.baseURL+"/adminapi/upload/video",this.editor.config.uploadVideoHeaders={token:this.$store.getters.token,version:d.a.version},this.editor.config.uploadVideoName="file",this.editor.config.uploadVideoHooks={fail:(t,e,i)=>{this.$message.error("上传视频失败")},timeout:t=>{this.$message.error("上传视频超时")},customInsert:(t,e)=>{1==e.code?t(e.data.uri):this.$message.error(e.msg)}},this.editor.create()}beforeDestroy(){this.editor.destroy()}};Object(s.a)([Object(o.c)()],c.prototype,"value",void 0),Object(s.a)([Object(o.c)({default:()=>["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","lineHeight","foreColor","link","list","justify","quote","emoticon","image","video","undo","redo"]})],c.prototype,"menu",void 0),Object(s.a)([Object(o.c)({default:600})],c.prototype,"height",void 0),Object(s.a)([Object(o.c)()],c.prototype,"width",void 0),Object(s.a)([Object(o.f)("value")],c.prototype,"valueChange",null),c=Object(s.a)([Object(o.a)({components:{MaterialSelect:a.a}})],c);var u=c,p=(i("84f7"),i("2877")),b=Object(p.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ls-editor"},[e("div",{staticClass:"editor",style:[this.editStyle],attrs:{id:this.identify}}),e("material-select",{ref:"materialSelect",attrs:{limit:null,"hidden-trigger":!0},on:{change:this.handeleChange}})],1)}),[],!1,null,"00c8867e",null);e.a=b.exports},a951:function(t,e,i){"use strict";i.r(e);var s=i("9ab4"),o=i("a897"),l=i("0a6d"),n=i("b3ad"),a=i("1b40"),r=i("4072");let d=class extends a.e{constructor(){super(...arguments),this.list={}}onSubmit(){Object(r.x)({...this.list}).then(()=>{this.detail(),this.$message.success("修改成功!")}).catch(()=>{this.$message.error("数据获取失败!")})}detail(){Object(r.h)({}).then(t=>{this.list=t}).catch(()=>{this.$message.error("数据获取失败!")})}created(){this.detail()}};d=Object(s.a)([Object(a.a)({components:{MaterialSelect:n.a,lsDialog:l.a,LsEditor:o.a}})],d);var c=d,u=(i("84ac"),i("2877")),p=Object(u.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ls-add-admin"},[i("div",{staticClass:"ls-card ls-coupon-edit__form m-t-10"},[i("div",{staticClass:"nr weight-500 m-b-20"},[t._v("分销设置")]),i("el-form",{ref:"list",attrs:{model:t.list,"label-width":"120px",size:"small"}},[i("el-form-item",{attrs:{label:"分销功能",prop:"switch"}},[i("el-radio",{attrs:{label:"number"==typeof t.list.switch?0:"0"},model:{value:t.list.switch,callback:function(e){t.$set(t.list,"switch",e)},expression:"list.switch"}},[t._v("关闭")]),i("el-radio",{attrs:{label:"number"==typeof t.list.switch?1:"1"},model:{value:t.list.switch,callback:function(e){t.$set(t.list,"switch",e)},expression:"list.switch"}},[t._v("开启")]),i("span",{staticClass:"desc"},[t._v("关闭分销功能时，不会再产生新的分销佣金，商城分销入口会关闭.")])],1),i("el-form-item",{attrs:{label:"分销层级",prop:"level"}},[i("el-radio",{attrs:{label:"number"==typeof t.list.level?1:"1"},model:{value:t.list.level,callback:function(e){t.$set(t.list,"level",e)},expression:"list.level"}},[t._v("一级分销")]),i("el-radio",{attrs:{label:"number"==typeof t.list.level?2:"2"},model:{value:t.list.level,callback:function(e){t.$set(t.list,"level",e)},expression:"list.level"}},[t._v("二级分销")]),i("span",{staticClass:"desc"},[t._v("允许发放佣金的分销层级，等级默认佣金比例在 分销等级 进行设置")])],1),i("el-form-item",{attrs:{label:"分销自购返佣",prop:"self"}},[i("el-radio",{attrs:{label:"number"==typeof t.list.self?0:"0"},model:{value:t.list.self,callback:function(e){t.$set(t.list,"self",e)},expression:"list.self"}},[t._v(" 关闭 ")]),i("el-radio",{attrs:{label:"number"==typeof t.list.self?1:"1"},model:{value:t.list.self,callback:function(e){t.$set(t.list,"self",e)},expression:"list.self"}},[t._v(" 开启 ")]),i("span",{staticClass:"desc"},[t._v("开启后，分销商自购时可以获得自购返佣")])],1),i("el-form-item",{attrs:{label:"商品详情显示佣金",prop:"is_show_earnings"}},[i("el-radio",{attrs:{label:"number"==typeof t.list.is_show_earnings?1:"1"},model:{value:t.list.is_show_earnings,callback:function(e){t.$set(t.list,"is_show_earnings",e)},expression:"list.is_show_earnings"}},[t._v(" 显示 ")]),i("el-radio",{attrs:{label:"number"==typeof t.list.is_show_earnings?0:"0"},model:{value:t.list.is_show_earnings,callback:function(e){t.$set(t.list,"is_show_earnings",e)},expression:"list.is_show_earnings"}},[t._v(" 隐藏 ")]),i("span",{staticClass:"desc"},[t._v("是否在商品详情显示佣金奖励提示")])],1),i("el-form-item",{attrs:{label:"详情页佣金可见用户",prop:"show_earnings_scope"}},[i("el-radio",{attrs:{label:"number"==typeof t.list.show_earnings_scope?0:"0"},model:{value:t.list.show_earnings_scope,callback:function(e){t.$set(t.list,"show_earnings_scope",e)},expression:"list.show_earnings_scope"}},[t._v(" 全部用户 ")]),i("el-radio",{attrs:{label:"number"==typeof t.list.show_earnings_scope?1:"1"},model:{value:t.list.show_earnings_scope,callback:function(e){t.$set(t.list,"show_earnings_scope",e)},expression:"list.show_earnings_scope"}},[t._v(" 分销商 ")]),i("span",{staticClass:"desc"},[t._v("选择全部用户，则所有人在商品详情都可以看到佣金奖励提示")])],1)],1)],1),i("div",{staticClass:"ls-card ls-coupon-edit__form m-t-10"},[i("div",{staticClass:"nr weight-500 m-b-20"},[t._v("分销资格")]),i("el-form",{ref:"list",staticClass:"m-t-15",attrs:{model:t.list,"label-width":"120px",size:"small"}},[i("el-form-item",{attrs:{label:"开通分销商条件",prop:"send_total_type"}},[i("el-radio",{attrs:{label:"number"==typeof t.list.open?1:"1"},model:{value:t.list.open,callback:function(e){t.$set(t.list,"open",e)},expression:"list.open"}},[t._v("无条件")]),i("el-radio",{attrs:{label:"number"==typeof t.list.open?2:"2"},model:{value:t.list.open,callback:function(e){t.$set(t.list,"open",e)},expression:"list.open"}},[t._v("申请分销")]),i("el-radio",{attrs:{label:"number"==typeof t.list.open?3:"3"},model:{value:t.list.open,callback:function(e){t.$set(t.list,"open",e)},expression:"list.open"}},[t._v("指定分销")]),1==t.list.open?i("span",{staticClass:"desc"},[t._v(" 开通分销商条件切换至无条件时，所有用户都将开通分销商资格。 ")]):t._e(),2==t.list.open?i("span",{staticClass:"desc"},[t._v(" 用户需在前端提交分销申请，后台管理员同意后即可成为分销商。 ")]):t._e(),3==t.list.open?i("span",{staticClass:"desc"},[t._v(" 指定某个用户成为分销商。在【分销商】-【开通分销商】选择某个用户即可 ")]):t._e()],1),i("el-form-item",{attrs:{label:"申请页顶部宣传图",prop:"send_total_type"}},[i("material-select",{attrs:{limit:1,disabled:!1},model:{value:t.list.apply_image,callback:function(e){t.$set(t.list,"apply_image",e)},expression:"list.apply_image"}}),i("div",{staticClass:"desc"},[t._v("不上传则显示系统默认背景图，建议尺寸750*280")])],1),i("el-form-item",{attrs:{label:"申请协议",prop:"send_total_type"}},[i("el-radio",{attrs:{label:"number"==typeof t.list.protocol_show?0:"0"},model:{value:t.list.protocol_show,callback:function(e){t.$set(t.list,"protocol_show",e)},expression:"list.protocol_show"}},[t._v(" 隐藏 ")]),i("el-radio",{attrs:{label:"number"==typeof t.list.protocol_show?1:"1"},model:{value:t.list.protocol_show,callback:function(e){t.$set(t.list,"protocol_show",e)},expression:"list.protocol_show"}},[t._v(" 显示 ")])],1),i("el-form-item",{attrs:{label:"申请协议内容",prop:"send_total_type"}},[i("ls-editor",{attrs:{width:"200",height:"400"},model:{value:t.list.protocol_content,callback:function(e){t.$set(t.list,"protocol_content",e)},expression:"list.protocol_content"}})],1)],1)],1),i("div",{staticClass:"bg-white ls-fixed-footer row-center flex"},[i("div",{staticClass:"row-center flex"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")])],1)])])}),[],!1,null,"e97c51f6",null);e.default=p.exports}}]);