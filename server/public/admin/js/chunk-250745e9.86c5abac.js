(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-250745e9"],{5588:function(t,e,o){},7100:function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"d",(function(){return r})),o.d(e,"a",(function(){return i})),o.d(e,"c",(function(){return n}));var s=o("f175");const a=()=>s.a.get("/footprint/lists"),r=t=>s.a.post("/footprint/status",t),i=t=>s.a.post("/footprint/setConfig",t),n=()=>s.a.get("/footprint/getConfig")},"782d":function(t,e,o){"use strict";o("5588")},a56b:function(t,e,o){"use strict";o.r(e);o("d9e2");var s=o("9ab4"),a=o("1b40"),r=o("7100");let i=class extends a.e{constructor(){super(...arguments),this.form={duration:60,status:1,pages:[]},this.rules={duration:[{required:!0,validator:(t,e,o)=>e?1*e<=0?o(new Error("时长必须大于0")):void o():o(new Error("必填项不可为空"))}]}}getFootprintData(){Object(r.c)().then(t=>{this.form=t})}onSaveFootprintConfig(t){this.$refs[t].validate(t=>{Object(r.a)(this.form).then(()=>{this.getFootprintData()})})}created(){this.getFootprintData()}};i=Object(s.a)([a.a],i);var n=i,l=(o("782d"),o("2877")),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footprint-container"},[o("div",{staticClass:"ls-card"},[o("el-alert",{attrs:{title:"温馨提示：设置中的足迹气泡开关是整个气泡的总开关,如果这里关了则任何地方都不显示气泡。",type:"info","show-icon":"",closable:!1}})],1),o("div",{staticClass:"m-t-16 ls-card"},[o("div",[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px",size:"small"}},[o("el-form-item",{attrs:{label:"气泡状态"}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),o("div",{staticClass:"muted"},[t._v("开启还是关闭足迹气泡，默认开启")])],1),o("el-form-item",{attrs:{label:"气泡时长",prop:"duration"}},[o("el-input",{staticStyle:{width:"180px"},attrs:{type:"number","prefix-icon":"el-icon-time"},model:{value:t.form.duration,callback:function(e){t.$set(t.form,"duration",e)},expression:"form.duration"}},[o("template",{slot:"append"},[t._v("分钟")])],2),o("div",{staticClass:"muted"},[t._v("查询多长时间范围内的足迹信息")])],1),o("el-form-item",{attrs:{label:"显示页面"}},[o("el-checkbox-group",{model:{value:t.form.pages,callback:function(e){t.$set(t.form,"pages",e)},expression:"form.pages"}},[o("el-checkbox",{attrs:{label:1}},[t._v("首页")]),o("el-checkbox",{attrs:{label:2}},[t._v("商品详情")])],1),o("div",{staticClass:"muted"},[t._v("设置在哪些页面会显示气泡")])],1)],1)],1)]),o("div",{staticClass:"free-shipping-edit__footer bg-white ls-fixed-footer"},[o("div",{staticClass:"btns row-center flex",staticStyle:{height:"100%"}},[o("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSaveFootprintConfig("form")}}},[t._v("保存")])],1)])])}),[],!1,null,"9e849ae4",null);e.default=c.exports}}]);