(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5da2b1da"],{"6b2a":function(t,s,a){"use strict";a.d(s,"a",(function(){return i})),a.d(s,"e",(function(){return r})),a.d(s,"d",(function(){return n})),a.d(s,"b",(function(){return l})),a.d(s,"c",(function(){return c}));var e=a("f175");const i=t=>e.a.get("/data.center/trafficAnalysis",{params:t}),r=t=>e.a.get("/data.center/userAnalysis",{params:t}),n=t=>e.a.get("/data.center/transactionAnalysis",{params:t}),l=t=>e.a.get("/data.center/goodsAnalysis",{params:t}),c=t=>e.a.get("/data.center/goodsTop",{params:t})},"6d81":function(t,s,a){"use strict";a("98a9")},"98a9":function(t,s,a){},f9c8:function(t,s,a){"use strict";a.r(s);var e=a("9ab4"),i=a("1b40"),r=a("22b4"),n=a("4cb5"),l=a("3620"),c=a("49bb"),o=a("4b2a"),d=a("9394"),u=a("ff32"),v=a("bb6f"),m=a("f95e"),h=a("6b2a");r.a([n.a,o.a,m.a,d.a,u.a,v.a,l.a,c.a]);let p=class extends i.e{constructor(){super(...arguments),this.summary={visit:"",visitor:""},this.month=(new Date).getFullYear()+"-"+((new Date).getMonth()+1),this.visitor={tooltip:{trigger:"axis"},legend:{data:["访客"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{type:"value"},series:[{name:"访客",type:"line",stack:"总量",data:[]}]},this.business={tooltip:{trigger:"axis"},legend:{data:["浏览量"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{type:"value"},series:[{name:"浏览量",type:"line",stack:"总量",data:[]}]}}onReset(){this.month=(new Date).getFullYear()+"-"+((new Date).getMonth()+1),this.getDataCenterVisit()}getDataCenterVisit(){this.business.xAxis.data=[],this.visitor.xAxis.data=[],Object(h.a)({month:this.month}).then(t=>{t.user.list[0].data=t.user.list[0].data.reverse(),t.visit.list[0].data=t.visit.list[0].data.reverse(),this.summary=t.summary,this.business.xAxis.data=t.user.date.reverse(),this.visitor.xAxis.data=t.visit.date.reverse(),t.user.list.forEach((t,s)=>{this.business.series[s].data=t.data,this.business.series[s].name=t.name,this.business.legend.data[s]=t.name}),t.visit.list.forEach((t,s)=>{this.visitor.series[s].data=t.data,this.visitor.series[s].name=t.name,this.visitor.legend.data[s]=t.name})})}created(){this.getDataCenterVisit()}};p=Object(e.a)([i.a],p);var f=p,y=(a("6d81"),a("2877")),b=Object(y.a)(f,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"flow-analysis"},[a("div",{staticClass:"ls-card ls-card-top"},[a("div",{staticClass:"journal-search m-t-16"},[a("el-form",{ref:"formRef",attrs:{inline:"",model:t.summary,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"统计时间"}},[a("el-date-picker",{attrs:{format:"yyyy 年 MM 月","value-format":"yyyy-MM",type:"month",placeholder:"选择月"},model:{value:t.month,callback:function(s){t.month=s},expression:"month"}})],1),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.getDataCenterVisit}},[t._v("查询")]),a("el-button",{attrs:{size:"small",type:""},on:{click:t.onReset}},[t._v("重置")])],1)],1)]),a("div",{staticClass:"ls-card m-t-16"},[a("div",{staticClass:"card-title"},[t._v("数据汇总")]),a("div",{staticClass:"card-content m-t-24"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[a("div",{staticClass:"lighter m-b-8"},[t._v("访问量")]),a("div",{staticClass:"font-size-30"},[t._v(t._s(t.summary.visit))])]),a("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[a("div",{staticClass:"lighter m-b-8"},[t._v("访客数")]),a("div",{staticClass:"font-size-30"},[t._v(t._s(t.summary.visitor))])])],1)],1)]),a("div",{staticClass:"ls-card m-t-24 ls-chart--visitors"},[a("div",{staticClass:"card-title"},[t._v("访问量")]),a("div",{staticClass:"content"},[a("e-chart",{staticClass:"chart",attrs:{option:t.visitor}})],1)]),a("div",{staticClass:"ls-card m-t-24 ls-chart--turnover"},[a("div",{staticClass:"card-title"},[t._v("访客数")]),a("div",{staticClass:"content"},[a("e-chart",{staticClass:"chart",attrs:{option:t.business}})],1)])])}),[],!1,null,"611a0c7d",null);s.default=b.exports}}]);