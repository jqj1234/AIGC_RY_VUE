(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bc29048"],{"2bec":function(e,t,l){},4931:function(e,t,l){"use strict";l.d(t,"a",(function(){return a})),l.d(t,"d",(function(){return n})),l.d(t,"c",(function(){return r})),l.d(t,"b",(function(){return o}));var i=l("b775");function a(e){return Object(i["a"])({url:"/check/text",method:"post",data:e})}function n(e){return Object(i["a"])({url:"/common/upload",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/record/text",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/record/text/"+e,method:"delete"})}},"81d5":function(e,t,l){"use strict";var i=l("7b0b"),a=l("23cb"),n=l("07fa");e.exports=function(e){var t=i(this),l=n(t),r=arguments.length,o=a(r>1?arguments[1]:void 0,l),s=r>2?arguments[2]:void 0,c=void 0===s?l:a(s,l);while(c>o)t[o++]=e;return t}},a8e2:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"text-page"},[l("div",{staticStyle:{display:"flex","align-items":"center","margin-top":"1.5%","margin-left":"1%"}},[l("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:".docx,.txt"},on:{change:function(t){return e.handleFileChange(t)}}}),l("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.triggerFileUpload}},[e._v("选择文件")]),l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.selectedFileName))]),l("span",{staticStyle:{"margin-left":"150px"}},[e._v("当前检测模式:")]),l("el-select",{staticStyle:{"margin-left":"20px"},attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("el-button",{staticStyle:{"margin-left":"5%"},attrs:{size:"medium",type:"success",loading:e.loading},on:{click:e.handleUpload}},[e._v("开始检测")]),l("el-button",{staticStyle:{"margin-left":"5%"},attrs:{size:"medium",type:"info"},on:{click:e.goToRecordText}},[e._v("历史记录")])],1),l("el-divider"),e.flag?e._e():l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"result",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e._m(0),l("h3",{staticStyle:{"margin-left":"15px"}},[e._v("检测结果：")]),e._m(1),l("el-divider"),l("ul",{staticStyle:{"font-size":"large"}},[e._m(2),l("el-divider"),l("li",[l("p",[e._v("文本内容：人工智能（AI）技术的发展是多方面的，其中机器学习、深度学习和自然语言处理是当前AI技术发展的三大热点。 ")]),l("span",[e._v("真实概率：45.655%")]),l("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：54.345%")]),l("el-divider")],1),l("li",[l("p",[e._v(" 文本内容：首先，机器学习是AI技术的核心组成部分之一。机器学习是一种使计算机系统能够从数据中学习和改进的技术。它通过训练模型来识别数据中的模式和规律，从而使计算机能够预测未知数据的结果。机器学习在许多领域都有广泛的应用，如推荐系统、语音识别、图像识别等。 ")]),l("span",[e._v("真实概率：36.455%")]),l("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：63.545%")]),l("el-divider")],1),l("li",[l("p",[e._v(" 文本内容：其次，深度学习是机器学习的一个子领域，它模拟了人类大脑的神经网络结构，通过多层神经元的学习和推理来处理复杂的数据。深度学习在图像识别、语音识别等领域取得了显著成就。例如，通过深度学习训练的模型能够准确识别图像中的物体，使得计算机能够像人类一样理解和解析图像内容。 ")]),l("span",[e._v("真实概率：43.328%")]),l("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：56.672%")]),l("el-divider")],1),l("li",[l("p",[e._v(" 文本内容：另外，自然语言处理是AI技术的另一个重要方向。自然语言处理致力于使计算机能够理解和响应人类语言。通过自然语言处理技术，计算机能够进行文本分析、情感分析、机器翻译等应用。例如，智能翻译应用利用自然语言处理技术将一种语言翻译成另一种语言，使得跨语言交流变得更加便捷。 ")]),l("span",[e._v("真实概率：17.438%")]),l("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：82.562%")]),l("el-divider")],1),l("li",[l("p",[e._v(" 文本内容：...... ")]),l("span",[e._v("真实概率：......")]),l("span",{staticStyle:{"margin-left":"13%"}},[e._v("AI概率：......")]),l("el-divider")],1)],1)],1),e.flag?l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"result",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[l("div",{staticStyle:{display:"flex","justify-content":"center"}},[l("span",{staticStyle:{"font-size":"xx-large","margin-bottom":"1%","margin-top":"1%"}},[e._v(e._s(e.selectedFileName))])]),l("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[l("div",{staticStyle:{flex:"1",border:"1px solid black","margin-left":"1%","margin-right":"10%"}},[l("h3",{staticStyle:{"margin-left":"15px"}},[e._v("检测结果：")]),l("ul",{staticStyle:{"font-size":"x-large"}},[l("li",[e.detectionResult.whole_ai_prob>"65"?l("span",{staticStyle:{color:"red"}},[e._v("整体AI概率：")]):l("span",[e._v("整体AI概率：")]),e._v(" "+e._s(e.detectionResult.whole_ai_prob)+"% ")]),l("li",[e._v("整体真实概率："+e._s(e.detectionResult.whole_real_prob)+"%")])])]),e._m(3)]),l("el-divider"),l("ul",{staticStyle:{"font-size":"large"}},e._l(e.detectionResult.details,(function(t,i){return l("li",{key:i},[l("p",{style:{color:t.AI_probability>"65"?"red":""}},[e._v("文本内容："+e._s(t.text))]),l("span",[e._v("真实概率："+e._s(t.real_probability)+"%")]),l("span",{style:{marginLeft:"10%",color:t.AI_probability>"65"?"red":""}},[e._v("AI概率："+e._s(t.AI_probability)+"%")]),l("el-divider")],1)})),0)],1):e._e()],1)},a=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{display:"flex","justify-content":"center"}},[l("h2",[e._v("结果示例")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticStyle:{"font-size":"x-large",color:"red"}},[l("li",[e._v("整体AI概率：87.103%")]),l("li",[e._v("整体真实概率：12.897%")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("li",[l("p",[e._v("文本内容：人工智能（Artificial Intelligence, AI）是指由人制造出来的系统所表现出来的智能。自20世纪50年代起，人工智能经历了几次繁荣与低谷，如今正处于一个新的高潮。 当前，人工智能因其对各行各业潜在的深刻影响而备受关注，被认为是新一轮科技革命和产业变革的核心动力。 ")]),l("span",[e._v("真实概率：30.205%")]),l("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：69.795%")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{flex:"1","text-align":"center","font-size":"x-large",border:"1px solid black","margin-right":"1%","margin-left":"10%"}},[l("p",[e._v("注意")]),l("span",[e._v("自动标红AI概率超过65%的文本")])])}],n=l("c7eb"),r=l("1da1"),o=(l("cb29"),l("14d9"),l("b0c0"),l("ac1f"),l("00b4"),l("4931")),s={name:"text-page",data:function(){return{check:[],loading:!1,fileToUpload:"",detectionResult:null,options:[{value:1,label:"综合类检测"},{value:2,label:"学术类检测"},{value:3,label:"文学类检测"}],value:1,flag:!1,selectedFileName:"未选择文件"}},methods:{goToRecordText:function(){this.$router.push("/record/text")},triggerFileUpload:function(){this.$refs.fileInput.click()},handleFileChange:function(e){this.fileToUpload=e.target.files[0],this.flag=!1,this.selectedFileName=e.target.files[0].name,console.log(this.fileToUpload)},handleUpload:function(){var e=this;return Object(r["a"])(Object(n["a"])().mark((function t(){var l,i,a,r,s,c;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(l=5242880,i=/(\.docx|\.txt)$/i,!(e.fileToUpload.size>l)){t.next=5;break}return e.$message.error("文件大小不能超过5MB"),t.abrupt("return");case 5:if(i.test(e.fileToUpload.name)){t.next=8;break}return e.$message.error("只能上传 Word文档 或 文本文档"),t.abrupt("return");case 8:if(!e.fileToUpload){t.next=32;break}return a=new FormData,a.append("file",e.fileToUpload),e.loading=!0,t.prev=12,t.next=15,Object(o["d"])(a);case 15:return r=t.sent,s={fileName:r.fileName,newFileName:r.newFileName,url:r.url,originalFilename:r.originalFilename,model:e.value},t.next=19,Object(o["a"])(s);case 19:c=t.sent,e.detectionResult=c.data,e.check=Array(e.detectionResult.details.length).fill(!1),e.loading=!1,e.flag=!0,t.next=30;break;case 26:t.prev=26,t.t0=t["catch"](12),console.error("上传失败：",t.t0),e.$message.error("上传失败");case 30:t.next=33;break;case 32:e.$message.error("请先选择一个文件。");case 33:case"end":return t.stop()}}),t,null,[[12,26]])})))()},open:function(){var e=this.$createElement;this.$notify({title:"提示",message:e("i",{style:"color: teal"},"该功能用于检测文本由AI生成的概率,可以提交Word文档，TXT文档检测，限制文件大小5MB"),offset:50,duration:5500})}},watch:{},components:{},mounted:function(){this.open()}},c=s,d=(l("f2ef"),l("2877")),u=Object(d["a"])(c,i,a,!1,null,"1259f4c9",null);t["default"]=u.exports},cb29:function(e,t,l){var i=l("23e7"),a=l("81d5"),n=l("44d2");i({target:"Array",proto:!0},{fill:a}),n("fill")},f2ef:function(e,t,l){"use strict";l("2bec")}}]);