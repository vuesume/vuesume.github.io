(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"1c5d":function(e,t,a){"use strict";var r=a("e283"),s=a.n(r);s.a},bc13b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home",attrs:{id:"home"}},[a("User",{ref:"checkpost"}),e._m(0),e._m(1),a("ul",{staticClass:"resumes"},[a("li",{staticClass:"resume",staticStyle:{"background-image":"url(statics/theme-groovy.png)"}},[a("button",{staticClass:"resume__cta",on:{click:function(t){return e.openCheckpost("Groovy")}}},[e._v("Select")])]),a("li",{staticClass:"resume",staticStyle:{"background-image":"url(statics/theme-minimal.png)"}},[a("button",{staticClass:"resume__cta",on:{click:function(t){return e.openCheckpost("Minimal")}}},[e._v("Select")])]),a("li",{staticClass:"resume",staticStyle:{"background-image":"url(statics/theme-slick.png)"}},[a("button",{staticClass:"resume__cta",on:{click:function(t){return e.openCheckpost("Slick")}}},[e._v("Select")])]),a("li",{staticClass:"resume",staticStyle:{"background-image":"url(statics/theme-modern.png)"}},[a("button",{staticClass:"resume__cta",on:{click:function(t){return e.openCheckpost("Modern")}}},[e._v("Select")])]),a("li",{staticClass:"resume",staticStyle:{"background-image":"url(statics/theme-elegant.png)"}},[a("button",{staticClass:"resume__cta",on:{click:function(t){return e.openCheckpost("Elegant")}}},[e._v("Select")])])])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"site-logo",attrs:{id:"logo"}},[a("h1",[e._v("Vuesume")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"site-banner text-h4 text-center"},[e._v("\n    A simple and quick resume builder built with\n    "),a("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"https://vuejs.org/",target:"_blank"}},[e._v("Vue.js,")]),a("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"https://quasar.dev/",target:"_blank"}},[e._v("Quasar,")]),e._v(" and\n    "),a("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"https://firebase.google.com/",target:"_blank"}},[e._v("Firebase")])])}],n=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("c47a")),i=a.n(n),o=(a("a481"),a("fc1b")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user",attrs:{id:"user"}},[a("q-dialog",{attrs:{minimized:""},model:{value:e.checkpost,callback:function(t){e.checkpost=t},expression:"checkpost"}},[a("div",{staticClass:"user__checkpost"},[a("q-tabs",{attrs:{"inline-label":"","active-bg-color":"white","active-color":"primary","indicator-color":"transparent"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{default:"",name:"login-tab",icon:"admin_panel_settings",label:"LOGIN"}}),a("q-tab",{attrs:{name:"signup-tab",icon:"perm_identity",label:"SIGN UP"}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"login-tab"}},[a("div",{staticClass:"user__checkpost__login"},[a("user-login")],1)]),a("q-tab-panel",{attrs:{name:"signup-tab"}},[a("div",{staticClass:"user__checkpost__register"},[a("user-reg")],1)])],1)],1)])],1)},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user__login",attrs:{id:"user__login"}},[e.authError?a("div",{staticClass:"user__login__error auth-error"},[a("q-icon",{attrs:{name:"error",color:"negative",size:"2rem"}}),e._v("\n    "+e._s(e.authError.message)+"\n  ")],1):e._e(),a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{type:"email","float-label":"Email address",placeholder:"Your email address",name:"email",error:e.errors.has("email"),"error-message":e.errors.first("email")},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"password","float-label":"Password",placeholder:"Your password",name:"password",error:e.errors.has("password"),"error-message":e.errors.first("password")},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("q-btn",{staticClass:"submit-btn",attrs:{color:"primary",loading:e.authenticating,label:"Sign In"},nativeOn:{click:function(t){return e.handleSubmit(t)}}})],1)},d=[],m={data:function(){return{user:{email:null,password:null},authenticating:!1,authError:!1}},methods:{handleSubmit:function(){var e=this;this.authError=!1,this.$validator.validateAll().then((function(t){t&&(e.authenticating=!0,e.$auth.login(e.user.email,e.user.password).then((function(t){return e.$router.replace("/edit/"+t.user.uid)})).catch((function(t){e.authError=t,e.authenticating=!1})))}))}}},p=m,h=a("2877"),f=a("0016"),v=a("27f9"),b=a("9c40"),g=a("eebe"),_=a.n(g),w=Object(h["a"])(p,u,d,!1,null,null,null),k=w.exports;_()(w,"components",{QIcon:f["a"],QInput:v["a"],QBtn:b["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user__signup",attrs:{id:"user__signup"}},[e.authError?a("div",{staticClass:"user__login__error auth-error"},[a("q-icon",{attrs:{name:"error",color:"negative",size:"2rem"}}),e._v("\n    "+e._s(e.authError.message)+"\n  ")],1):e._e(),a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],attrs:{type:"text",placeholder:"First Name",name:"firstname",error:e.errors.has("firstname"),"error-message":e.errors.first("firstname")},model:{value:e.user.firstname,callback:function(t){e.$set(e.user,"firstname",t)},expression:"user.firstname"}}),a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],attrs:{type:"text",placeholder:"Last Name",name:"lastname",error:e.errors.has("lastname"),"error-message":e.errors.first("lastname")},model:{value:e.user.lastname,callback:function(t){e.$set(e.user,"lastname",t)},expression:"user.lastname"}}),a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{type:"email","float-label":"Email address",placeholder:"Your email address",name:"email",error:e.errors.has("email"),"error-message":e.errors.first("email")},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"}],ref:"password",attrs:{type:"password","float-label":"Password",placeholder:"Your password",name:"password",error:e.errors.has("password"),"error-message":e.errors.first("password")},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password","float-label":"Confirm Password",placeholder:"Retype your password",name:"password_confirmation","data-vv-as":"password",error:e.errors.has("password_confirmation"),"error-message":e.errors.first("password_confirmation")},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}}),a("q-btn",{staticClass:"submit-btn",attrs:{color:"primary",loading:e.authenticating,label:"Sign Up"},nativeOn:{click:function(t){return e.handleRegistration(t)}}})],1)},q=[],C={data:function(){return{user:{firstname:null,lastname:null,email:null,password:null,confirmPassword:null},authenticating:!1,authError:!1}},methods:{handleRegistration:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.authenticating=!0,e.$auth.signup(e.user.email,e.user.password).then((function(t){o["b"].ref("users/"+t.user.uid).set(JSON.parse(JSON.stringify(e.$store.state))).then((function(t){return e.handleLogin(e.user.email,e.user.password)}))})).catch((function(t){e.authError=t,e.authenticating=!1})))}))},handleLogin:function(e,t){var a=this;this.$auth.login(e,t).then((function(e){return a.$router.push("/edit/"+e.user.uid)})).catch((function(e){return console.log(e)}))}}},x=C,O=Object(h["a"])(x,y,q,!1,null,null,null),S=O.exports;_()(O,"components",{QIcon:f["a"],QInput:v["a"],QBtn:b["a"]});var $={components:{"user-login":k,"user-reg":S},data:function(){return{checkpost:!1,tab:"login-tab"}},methods:{openModal:function(){this.checkpost=!0}}},E=$,j=(a("1c5d"),a("24e8")),P=a("429b"),N=a("7460"),Q=a("adad"),I=a("823b"),T=Object(h["a"])(E,l,c,!1,null,null,null),D=T.exports;_()(T,"components",{QDialog:j["a"],QTabs:P["a"],QTab:N["a"],QTabPanels:Q["a"],QTabPanel:I["a"],QInput:v["a"]});var A=a("2f62");function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M={name:"Home",components:{User:D},methods:L(L({},Object(A["c"])(["activateTemplate"])),{},{openCheckpost:function(e){var t=this;this.activateTemplate(e),o["a"].onAuthStateChanged((function(e){e?t.$router.replace("/edit/"+e.uid):t.$refs.checkpost.openModal()}))}})},U=M,Y=Object(h["a"])(U,r,s,!1,null,null,null);t["default"]=Y.exports},e283:function(e,t,a){}}]);