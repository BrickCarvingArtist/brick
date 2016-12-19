webpackJsonp([3,5],{20:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),o=n(a),s=r(4),i=n(s),d={tel:{label:"手机号",regExp:/^1[3578]\d{9}$/,message:function(){return this.label+"格式输入有误"}},user:{label:"用户名",regExp:/^\S+$/,message:function(){return this.label+"不能包含空格"}},password:{label:"密码",regExp:/^\S{6,16}$/,message:function(){return this.label+"必须为6至16位非空字符"}}};t.default={props:["type","middleware","dialog"],data:function(){return{value:""}},computed:{placeholder:function(){return"请输入"+d[this.type].label}},methods:{validate:function(){var e=d[this.type],t=+e.regExp.test(this.value);return this.$parent.$parent.$refs.dialog.message=[e.message(),""][t],t},handleCheck:function(){var e=this;return(0,i.default)(o.default.mark(function t(){var r,n,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.middleware){t.next=14;break}return t.prev=1,t.next=4,e.middleware(e.value);case 4:return r=t.sent,n=r.code,a=r.message,e.$parent.$parent.$refs.dialog.message=[a,""][n],t.abrupt("return",n);case 11:t.prev=11,t.t0=t.catch(1),e.$parent.$parent.$refs.dialog.message="网络错误";case 14:case"end":return t.stop()}},t,e,[[1,11]])}))()}}}},31:function(e,t,r){t=e.exports=r(9)(),t.push([e.id,".ipt-txt[data-v-350535e0]{margin-top:.625rem;width:100%;height:2.5rem}.ipt-txt input[data-v-350535e0]{box-sizing:border-box;padding-right:.625rem;padding-left:.625rem;width:inherit;height:inherit;border:none;font-size:.875rem;border:1px solid #999;transition:box-shadow .25s}.ipt-txt input[data-v-350535e0]:focus{border-color:#999}.ipt-txt.error input[data-v-350535e0]{border-color:red}","",{version:3,sources:["/./src/components/Input.vue"],names:[],mappings:"AACA,0BACE,mBAAqB,AACrB,WAAY,AACZ,aAAe,CAChB,AACD,gCACE,sBAAuB,AACvB,sBAAwB,AACxB,qBAAuB,AACvB,cAAe,AACf,eAAgB,AAChB,YAAa,AACb,kBAAoB,AACpB,sBAAuB,AACvB,0BAA6B,CAC9B,AACD,sCACE,iBAAmB,CACpB,AACD,sCACE,gBAAmB,CACpB",file:"Input.vue",sourcesContent:["\n.ipt-txt[data-v-350535e0] {\n  margin-top: 0.625rem;\n  width: 100%;\n  height: 2.5rem;\n}\n.ipt-txt input[data-v-350535e0] {\n  box-sizing: border-box;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  width: inherit;\n  height: inherit;\n  border: none;\n  font-size: 0.875rem;\n  border: 1px solid #999;\n  transition: box-shadow 0.25s;\n}\n.ipt-txt input[data-v-350535e0]:focus {\n  border-color: #999;\n}\n.ipt-txt.error input[data-v-350535e0] {\n  border-color: #f00;\n}"],sourceRoot:"webpack://"}])},35:function(e,t,r){var n=r(31);"string"==typeof n&&(n=[[e.id,n,""]]);r(11)(n,{});n.locals&&(e.exports=n.locals)},38:function(e,t,r){var n,a;r(35),n=r(20);var o=r(39);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-350535e0",e.exports=n},39:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{class:{"ipt-txt":1,error:e.dialog?e.dialog.message:0}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:this.placeholder},domProps:{value:e._s(e.value)},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.validate],change:e.handleCheck}})])},staticRenderFns:[]}},78:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),o=n(a),s=r(4),i=n(s),d=r(38),u=n(d);t.default={data:function(){return{user:"",password:""}},methods:{submit:function(){var e=this;return(0,i.default)(o.default.mark(function t(){var r,n,a,s,i,d,u;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$refs,n=r.user,a=r.password,!n.validate()||!a.validate()){t.next=19;break}return t.prev=2,t.next=5,fetch("/api/signIn",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},credentials:"include",body:"user="+n.value+"&password="+a.value});case 5:return t.next=7,t.sent.json();case 7:if(s=t.sent,i=s.code,d=s.data,u=s.message,!i){t.next=13;break}return t.abrupt("return",e.$parent.$refs.dialog.message=u);case 13:e.$router.push(e.$route.query.referer||"/me"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),e.$parent.$refs.dialog.message="网络错误";case 19:case"end":return t.stop()}},t,e,[[2,16]])}))()}},components:{MyInput:u.default},beforeCreate:function(){this.$parent.footer=0}}},116:function(e,t,r){t=e.exports=r(9)(),t.push([e.id,"form[data-v-05f2487c]{padding:1.5rem}form h1[data-v-05f2487c]{margin-bottom:1.5rem;font-size:1.25rem;line-height:1.5;border-bottom:1px solid #333;color:#333}.btn[data-v-05f2487c]{margin-top:.625rem;margin-bottom:.625rem}p[data-v-05f2487c]{text-align:right;font-size:.75rem}.anchor[data-v-05f2487c]{color:#3060ff;transition:color .25s}.anchor[data-v-05f2487c]:hover{color:red}","",{version:3,sources:["/./src/pages/SignIn.vue"],names:[],mappings:"AACA,sBACE,cAAgB,CACjB,AACD,yBACE,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,6BAA8B,AAC9B,UAAY,CACb,AACD,sBACE,mBAAqB,AACrB,qBAAwB,CACzB,AACD,mBACE,iBAAkB,AAClB,gBAAmB,CACpB,AACD,yBACE,cAAe,AACf,qBAAwB,CACzB,AACD,+BACE,SAAY,CACb",file:"SignIn.vue",sourcesContent:["\nform[data-v-05f2487c] {\n  padding: 1.5rem;\n}\nform h1[data-v-05f2487c] {\n  margin-bottom: 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-bottom: 1px solid #333;\n  color: #333;\n}\n.btn[data-v-05f2487c] {\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\np[data-v-05f2487c] {\n  text-align: right;\n  font-size: 0.75rem;\n}\n.anchor[data-v-05f2487c] {\n  color: #3060ff;\n  transition: color 0.25s;\n}\n.anchor[data-v-05f2487c]:hover {\n  color: #f00;\n}"],sourceRoot:"webpack://"}])},130:function(e,t,r){var n=r(116);"string"==typeof n&&(n=[[e.id,n,""]]);r(11)(n,{});n.locals&&(e.exports=n.locals)},159:function(e,t,r){var n,a;r(130),n=r(78);var o=r(161);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-05f2487c",e.exports=n},161:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("form",[t("h1",["登录"])," ",t("my-input",{ref:"user",attrs:{type:"user"}})," ",t("my-input",{ref:"password",attrs:{type:"password"}})," ",t("a",{staticClass:"btn",on:{click:e.submit}},["登录"])," ",t("p",[t("span",["还没有没有账号？赶紧"]),t("router-link",{staticClass:"anchor",attrs:{to:"/signUp"}},["注册"])])])},staticRenderFns:[]}}});
//# sourceMappingURL=3.a0e268ab4220c0cc1a78.js.map