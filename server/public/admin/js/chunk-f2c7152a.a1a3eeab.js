(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f2c7152a"],{"14c6":function(t,o,s){"use strict";s.d(o,"n",(function(){return a})),s.d(o,"x",(function(){return r})),s.d(o,"y",(function(){return i})),s.d(o,"u",(function(){return d})),s.d(o,"C",(function(){return n})),s.d(o,"v",(function(){return l})),s.d(o,"B",(function(){return u})),s.d(o,"w",(function(){return c})),s.d(o,"z",(function(){return g})),s.d(o,"A",(function(){return m})),s.d(o,"a",(function(){return p})),s.d(o,"e",(function(){return f})),s.d(o,"f",(function(){return _})),s.d(o,"b",(function(){return h})),s.d(o,"c",(function(){return b})),s.d(o,"d",(function(){return v})),s.d(o,"E",(function(){return y})),s.d(o,"H",(function(){return w})),s.d(o,"F",(function(){return x})),s.d(o,"G",(function(){return k})),s.d(o,"D",(function(){return C})),s.d(o,"L",(function(){return j})),s.d(o,"I",(function(){return $})),s.d(o,"J",(function(){return L})),s.d(o,"K",(function(){return P})),s.d(o,"g",(function(){return q})),s.d(o,"l",(function(){return O})),s.d(o,"h",(function(){return S})),s.d(o,"m",(function(){return z})),s.d(o,"i",(function(){return E})),s.d(o,"k",(function(){return D})),s.d(o,"j",(function(){return J})),s.d(o,"M",(function(){return M})),s.d(o,"P",(function(){return N})),s.d(o,"N",(function(){return A})),s.d(o,"O",(function(){return B})),s.d(o,"r",(function(){return F})),s.d(o,"q",(function(){return G})),s.d(o,"s",(function(){return H})),s.d(o,"t",(function(){return I})),s.d(o,"p",(function(){return K})),s.d(o,"o",(function(){return Q}));var e=s("f175");const a=t=>e.a.post("/goods.goods/add",t),r=t=>e.a.post("/goods.goods/edit",t),i=t=>e.a.get("/goods.goods/lists",{params:t}),d=t=>e.a.get("/goods.goods/commonLists",{params:t}),n=t=>e.a.post("/goods.goods/status",t),l=t=>e.a.post("/goods.goods/del",t),u=t=>e.a.post("/goods.goods/sort",t),c=t=>e.a.get("/goods.goods/detail",{params:{id:t}}),g=t=>e.a.get("/goods.goods/otherList",{params:t}),m=t=>e.a.post("goods.goods/rename ",t),p=t=>e.a.post("/goods.goods_brand/add",t),f=t=>e.a.get("/goods.goods_brand/lists",{params:t}),_=t=>e.a.post("/goods.goods_brand/status",t),h=t=>e.a.post("/goods.goods_brand/del",t),b=t=>e.a.get("/goods.goods_brand/detail",{params:{id:t}}),v=t=>e.a.post("/goods.goods_brand/edit",t),y=t=>e.a.post("/goods.goods_supplier_category/add",t),w=t=>e.a.get("goods.goods_supplier_category/lists",{params:t}),x=t=>e.a.post("goods.goods_supplier_category/del",{id:t}),k=t=>e.a.post("goods.goods_supplier_category/edit",t),C=t=>e.a.post("/goods.goods_supplier/add",t),j=t=>e.a.get("/goods.goods_supplier/lists",{params:t}),$=t=>e.a.post("goods.goods_supplier/del",{id:t}),L=t=>e.a.get("/goods.goods_supplier/detail",{params:{id:t}}),P=t=>e.a.post("/goods.goods_supplier/edit",t),q=t=>e.a.post("/goods.goods_category/add",t),O=t=>e.a.get("/goods.goods_category/lists",{params:t}),S=t=>e.a.get("/goods.goods_category/commonLists",{params:t}),z=t=>e.a.post("/goods.goods_category/status",t),E=t=>e.a.post("goods.goods_category/del",{id:t}),D=t=>e.a.post("/goods.goods_category/edit",t),J=t=>e.a.get("/goods.goods_category/detail",{params:{id:t}}),M=t=>e.a.post("/goods.goods_unit/add",t),N=t=>e.a.get("/goods.goods_unit/lists",{params:t}),A=t=>e.a.post("goods.goods_unit/del",{id:t}),B=t=>e.a.post("/goods.goods_unit/edit",t),F=t=>e.a.get("goods.goods_comment/lists",{params:t}),G=t=>e.a.post("goods.goods_comment/del",t),H=t=>e.a.post("goods.goods_comment/reply",t),I=t=>e.a.post("/goods.goods_comment/status",t),K=t=>e.a.get("goods.goods_comment_assistant/lists",{params:t}),Q=t=>e.a.post("goods.goods_comment_assistant/add",t)},3732:function(t,o,s){},"375e":function(t,o,s){"use strict";s.r(o);var e=s("9ab4"),a=s("1b40"),r=s("b3ad"),i=s("14c6");let d=class extends a.e{constructor(){super(...arguments),this.loading=!1,this.hasPid=0,this.categoryList=[],this.form={name:"",pid:"",image:"",sort:"",is_show:1,is_recommend:0},this.rules={name:[{required:!0,message:"请输入分类名称",trigger:["blur","change"]}],image:[{required:!0,message:"请选择分类图标",trigger:["blur","change"]}]}}handleSave(){this.$refs.form.validate(t=>{if(!t)return!1;this.hasPid||(this.form.pid="");(this.id?Object(i.k)(this.form):Object(i.g)(this.form)).then(()=>{this.$router.go(-1)})})}getCategoryDetail(){this.loading=!0,Object(i.j)(this.id).then(t=>{t.pid&&(this.hasPid=1),this.form=t,this.loading=!1})}getCategoryList(){Object(i.l)({page_type:1}).then(t=>{null==t||t.lists.forEach(t=>{t.sons&&t.sons.forEach(t=>{delete t.sons})}),this.categoryList=null==t?void 0:t.lists})}created(){this.id=this.$route.query.id,this.id&&this.getCategoryDetail(),this.getCategoryList()}};d=Object(e.a)([Object(a.a)({components:{MaterialSelect:r.a}})],d);var n=d,l=(s("6c43"),s("2877")),u=Object(l.a)(n,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"ls-category-edit"},[s("div",{staticClass:"ls-card category-edit__header"},[s("el-page-header",{attrs:{content:t.id?"编辑分类":"新增分类"},on:{back:function(o){return t.$router.go(-1)}}})],1),s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px",size:"small",rules:t.rules}},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"ls-card category-edit__base m-t-16"},[s("div",{staticClass:"nr weight-500 m-b-20"},[t._v("基础信息")]),s("el-form-item",{attrs:{label:"分类名称",prop:"name",required:""}},[s("el-input",{staticClass:"ls-input",attrs:{maxlength:"8","show-word-limit":"",placeholder:"请输入分类名称"},model:{value:t.form.name,callback:function(o){t.$set(t.form,"name",o)},expression:"form.name"}})],1),s("el-form-item",{attrs:{label:"父级分类",required:""}},[s("el-radio-group",{staticClass:"m-r-16",model:{value:t.hasPid,callback:function(o){t.hasPid=o},expression:"hasPid"}},[s("el-radio",{attrs:{label:0}},[t._v("无父级分类")]),s("el-radio",{attrs:{label:1}},[t._v("有父级分类")])],1),s("el-alert",{staticClass:"ls-tips",attrs:{title:"选择无上级分类，则表明此分类为一级分类；选择有上级分类，则表明此分类为选中分类的子分类",type:"warning",closable:!1}})],1),1==t.hasPid?s("el-form-item",{attrs:{label:"",required:""}},[s("el-cascader",{attrs:{options:t.categoryList,props:{checkStrictly:!0,value:"id",label:"name",children:"sons",emitPath:!1},clearable:""},scopedSlots:t._u([{key:"default",fn:function(o){var e=o.node,a=o.data;return a.level<=2?[s("span",[t._v(t._s(a.name))]),e.isLeaf?t._e():s("span",[t._v(" ("+t._s(a.sons.length)+") ")])]:void 0}}],null,!0),model:{value:t.form.pid,callback:function(o){t.$set(t.form,"pid",o)},expression:"form.pid"}})],1):t._e(),s("el-form-item",{attrs:{label:"分类图标",prop:"image",required:""}},[s("material-select",{attrs:{limit:1},model:{value:t.form.image,callback:function(o){t.$set(t.form,"image",o)},expression:"form.image"}}),s("div",{staticClass:"muted xs"},[t._v("建议尺寸：宽200像素*高200像素的jpg，jpeg，png图片")])],1),s("el-form-item",{attrs:{label:"排序"}},[s("el-input",{staticStyle:{width:"220px"},model:{value:t.form.sort,callback:function(o){t.$set(t.form,"sort",o)},expression:"form.sort"}}),s("div",{staticClass:"muted xs"},[t._v("排序值必须为整数；数值越小，越靠前")])],1),s("el-form-item",{attrs:{label:"是否显示"}},[s("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_show,callback:function(o){t.$set(t.form,"is_show",o)},expression:"form.is_show"}})],1)],1)]),s("div",{staticClass:"category-edit__footer bg-white ls-fixed-footer"},[s("div",{staticClass:"btns row-center flex",staticStyle:{height:"100%"}},[s("el-button",{attrs:{size:"small"},on:{click:function(o){return t.$router.go(-1)}}},[t._v("取消")]),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handleSave}},[t._v("保存")])],1)])],1)}),[],!1,null,"5832cbaa",null);o.default=u.exports},"6c43":function(t,o,s){"use strict";s("3732")}}]);