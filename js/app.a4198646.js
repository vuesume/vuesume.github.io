(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("967e"),i=n.n(r),o=(n("a481"),n("96cf"),n("fa84")),a=n.n(o),s=(n("5c7d"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),c=n("1f91"),u=n("42d2"),l=n("b05d"),f=n("4d5a"),d=n("e359"),m=n("9404"),p=n("09e3"),b=n("9989"),v=n("de5e"),h=n("65c6"),y=n("6ac5"),g=n("7ea5"),w=n("9c40"),S=n("f20b"),D=n("e7a9"),_=n("52ee"),x=n("24e8"),P=n("d66b"),M=n("c294"),k=n("72db"),U=n("8572"),I=n("27f9"),E=n("0016"),O=n("1c1c"),T=n("66e5"),j=n("4074"),C=n("0170"),V=n("ddd8"),Q=n("c1d0"),A=n("163c"),H=n("ca78"),B=n("429b"),L=n("7460"),R=n("adad"),q=n("823b"),F=n("05c0"),$=n("9564"),G=n("7cbe"),J=n("714f"),z=n("7f67"),N=n("2a19"),W=n("436b");s["a"].use(l["a"],{config:{},lang:c["a"],iconSet:u["a"],components:{QLayout:f["a"],QHeader:d["a"],QDrawer:m["a"],QPageContainer:p["a"],QPage:b["a"],QPageSticky:v["a"],QToolbar:h["a"],QToolbarTitle:y["a"],QAjaxBar:g["a"],QBtn:w["a"],QBtnDropdown:S["a"],QBtnGroup:D["a"],QDate:_["a"],QDialog:x["a"],QEditor:P["a"],QFab:M["a"],QFabAction:k["a"],QField:U["a"],QInput:I["a"],QIcon:E["a"],QList:O["a"],QItem:T["a"],QItemSection:j["a"],QItemLabel:C["a"],QSelect:V["a"],QSlider:Q["a"],QSpinnerPie:A["a"],QTime:H["a"],QTabs:B["a"],QTab:L["a"],QTabPanels:R["a"],QTabPanel:q["a"],QTooltip:F["a"],QToggle:$["a"],QPopupProxy:G["a"]},directives:{Ripple:J["a"],ClosePopup:z["a"]},plugins:{Notify:N["a"],Dialog:W["a"]}});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view"),n("q-ajax-bar",{attrs:{position:"bottom",color:"red",size:"6px"}})],1)},Y=[],K=n("77b2"),Z={name:"App",components:{settings:K["a"]},data:function(){return{drawer:!1}}},ee=Z,te=n("2877"),ne=n("eebe"),re=n.n(ne),ie=Object(te["a"])(ee,X,Y,!1,null,null,null),oe=ie.exports;re()(ie,"components",{QAjaxBar:g["a"]});var ae=n("4360"),se=n("8c4f"),ce=n("fc1b"),ue=[{path:"/",component:function(){return n.e(4).then(n.bind(null,"bc13b"))}},{path:"/edit/:id",component:function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"85af"))},beforeEnter:function(e,t,n){ce["a"].onAuthStateChanged((function(e){e?n():n({replace:!0,path:"/"})}))}},{path:"/preview/:id",component:function(){return n.e(1).then(n.bind(null,"25bd"))}}];ue.push({path:"*",component:function(){return n.e(5).then(n.bind(null,"e51e"))}});var le=ue;s["a"].use(se["a"]);var fe=function(){var e=new se["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:le,mode:"hash",base:""});return e},de=function(){return me.apply(this,arguments)};function me(){return me=a()(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof ae["a"]){e.next=6;break}return e.next=3,Object(ae["a"])({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=ae["a"];case 7:if(t=e.t0,"function"!==typeof fe){e.next=14;break}return e.next=11,fe({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=fe;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(oe)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}var pe=n("a925"),be={failed:"Action failed",success:"Action was successful"},ve={"en-us":be};s["a"].use(pe["a"]);var he=new pe["a"]({locale:"en-us",fallbackLocale:"en-us",messages:ve}),ye=function(e){var t=e.app;t.i18n=he},ge=n("bc3a"),we=n.n(ge);s["a"].prototype.$axios=we.a;var Se=n("7bb1"),De=function(e){e.app,e.router;var t=e.Vue;t.use(Se["a"])},_e=n("4eb5"),xe=n.n(_e),Pe=function(e){e.app,e.router;var t=e.Vue;t.use(xe.a)};function Me(){return ke.apply(this,arguments)}function ke(){return ke=a()(i.a.mark((function e(){var t,n,r,o,a,c,u,l,f;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,a=!0,c=function(e){a=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),l=[ye,void 0,ce["c"],De,Pe],f=0;case 11:if(!(!0===a&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:n,router:o,store:r,Vue:s["a"],ssrContext:null,redirect:c,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==a){e.next=31;break}return e.abrupt("return");case 31:new s["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),ke.apply(this,arguments)}Me()},"31cd":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("2b0e"),i=n("2f62"),o=(n("7f7f"),n("551c"),n("06db"),n("fc1b")),a={state:{visible:!0,avatarSrc:"statics/man.svg"},mutations:{updateAvatar:function(e,t){e.avatarSrc=t},toggleAvatarVisibility:function(e,t){e.visible=t}},actions:{syncDownAvatar:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateAvatar",r.avatarModule.avatarSrc),e(r.avatarModule.avatarSrc)}))}catch(a){r(a)}}))},syncUpAvatar:function(e,t){e.state;var n=e.commit,r=e.rootState,i=t.name,a=i.slice(i.lastIndexOf(".")),s=o["d"].ref("users/"+r.routeUID),c=s.child("/images/avatar"+a),u=o["b"].ref("users/"+r.routeUID);return new Promise((function(e,r){c.put(t).then((function(t){return c.getDownloadURL().then((function(t){n("updateAvatar",t),u.child("avatarModule").child("avatarSrc").set(t).then((function(t){e(t)})).catch((function(e){return r(e)}))}))}))}))},syncDownAvatarVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleAvatarVisibility",r.avatarModule.visible),e(r.avatarModule.visible)}))}catch(a){r(a)}}))},syncUpAvatarVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("avatarModule").child("visible").set(t),n("toggleAvatarVisibility",t)}}},s={state:{visible:!0,userEducation:{title:"Education",educations:[{degree:"B.Sc in Software Engeneering",institution:"AIUB",address:"Banani, Dhaka",period:{from:"",to:""},gpa:{achieved:null,outOf:null,visible:!0},description:"Briefly tell about your study here (max 110 characters)"}]}},getters:{totalEducations:function(e){return e.userEducation.educations.length}},mutations:{addEducation:function(e,t){var n={degree:"",institution:"",address:"",period:{from:"",to:""},gpa:{achieved:null,outOf:null,visible:!0},description:"Briefly tell about your study here (max 110 characters)"};e.userEducation.educations.splice(t+1,0,n)},deleteEducation:function(e,t){e.userEducation.educations.splice(t,1)},updateEducation:function(e,t){e.userEducation=t},toggleEducationVisibility:function(e,t){e.visible=t}},actions:{syncDownEducation:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateEducation",r.educationModule.userEducation),e(r.educationModule.userEducation)}))}catch(a){r(a)}}))},syncUpEducation:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("educationModule").child("userEducation").set(t.userEducation).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownEducationVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleEducationVisibility",r.educationModule.visible),e(r.educationModule.visible)}))}catch(a){r(a)}}))},syncUpEducationVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("educationModule").child("visible").set(t),n("toggleEducationVisibility",t)}}},c={state:{visible:!0,userExperience:{title:"Experience",experiences:[{position:"Sr. Software Engineer",company:"ABC Limited",address:"123 Linkon Street",period:{from:"",to:""},description:"Briefly tell about your job role here (max 110 characters)"}]}},getters:{totalExperiences:function(e){return e.userExperience.experiences.length}},mutations:{addExperience:function(e,t){var n={position:"",company:"",address:"",period:{from:"",to:""},description:"Briefly tell about your job role here (max 110 characters)"};e.userExperience.experiences.splice(t+1,0,n)},deleteExperience:function(e,t){e.userExperience.experiences.splice(t,1)},updateExperience:function(e,t){e.userExperience=t},toggleExperiencesVisibility:function(e,t){e.visible=t}},actions:{syncDownExperiences:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateExperience",r.experienceModule.userExperience),e(r.experienceModule.userExperience)}))}catch(a){r(a)}}))},syncUpExperiences:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("experienceModule").child("userExperience").set(t.userExperience).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownExperiencesVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleExperiencesVisibility",r.experienceModule.visible),e(r.experienceModule.visible)}))}catch(a){r(a)}}))},syncUpExperiencesVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("experienceModule").child("visible").set(t),n("toggleExperiencesVisibility",t)}}},u={state:{userFonts:[{name:"Arial Black | Arial",heading:"'Arial Black', Gadget, sans-serif",body:"Arial, Helvetica, sans-serif",selected:!0},{name:"Times New Roman | Tahoma",heading:"'Times New Roman', Times, serif",body:"Tahoma, Geneva, sans-serif",selected:!1},{name:"Georgia | Trebuchet",heading:"Georgia, serif",body:"'Trebuchet MS', Tahoma, sans-serif",selected:!1},{name:"Comic Sans | Lucida",heading:"'Comic Sans MS', cursive, sans-serif",body:"'Lucida Sans', 'Lucida Grande', sans-serif",selected:!1}]},getters:{},mutations:{updateFonts:function(e,t){e.userFonts=t}},actions:{syncDownFonts:function(e){e.state;var t=e.commit,n=e.rootState,r=o["b"].ref("users/"+n.routeUID);r.on("value",(function(e){var n=e.val(),r=n.fontsModule.userFonts;r.map((function(e){e.selected&&(document.documentElement.style.setProperty("--font-heading","".concat(e.heading)),document.documentElement.style.setProperty("--font-body","".concat(e.body)))})),t("updateFonts",r)}))},syncUpFonts:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("fontsModule").child("userFonts").set(t),n("updateFonts",t)}}},l={state:{visible:!0,userHobbies:{title:"Hobbies",hobbies:[{value:"Cricket"},{value:"Gardening"}]}},getters:{totalHobbies:function(e){return e.userHobbies.hobbies.length}},mutations:{addHobby:function(e,t){var n={value:"A new hobby"};e.userHobbies.hobbies.splice(t+1,0,n)},deleteHobby:function(e,t){e.userHobbies.hobbies.splice(t,1)},updateHobbies:function(e,t){e.userHobbies=t},toggleHobbiesVisibility:function(e,t){e.visible=t}},actions:{syncDownHobbies:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateHobbies",r.hobbiesModule.userHobbies),e(r.hobbiesModule.userHobbies)}))}catch(a){r(a)}}))},syncUpHobbies:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("hobbiesModule").child("userHobbies").set(t.userHobbies).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownHobbiesVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleHobbiesVisibility",r.hobbiesModule.visible),e(r.hobbiesModule.visible)}))}catch(a){r(a)}}))},syncUpHobbiesVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("hobbiesModule").child("visible").set(t),n("toggleHobbiesVisibility",t)}}},f=(n("ac6a"),n("cadf"),n("456d"),{state:{visible:!0,userInfo:{title:"Personal Info",infos:{birth:{active:!0,value:"--/--/--"},phone:{active:!0,value:"910023001"},email:{active:!0,value:"johndoe@gmail.com"},website:{active:!0,value:"johndoe.com"},address:{active:!0,value:"123 linkon street, Montril, Canada"}}}},getters:{},mutations:{deletePersonalInfo:function(e,t){e.userInfo.infos[t].active=!1},updatePersonalInfo:function(e,t){e.userInfo=t},togglePersonalVisibility:function(e,t){e.visible=t},showAllInfo:function(e){Object.keys(e.userInfo.infos).map((function(t,n){e.userInfo.infos[t].active=!0}))}},actions:{syncDownPersonal:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updatePersonalInfo",r.personalModule.userInfo),e(r.personalModule.userInfo)}))}catch(a){r(a)}}))},syncUpPersonal:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("personalModule").child("userInfo").set(t.userInfo).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownPersonalVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("togglePersonalVisibility",r.personalModule.visible),e(r.personalModule.visible)}))}catch(a){r(a)}}))},syncUpPersonalVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("personalModule").child("visible").set(t),n("togglePersonalVisibility",t)}}}),d={state:{visible:!0,userReference:{title:"Reference",referee:{name:"Jane Doe",designation:"Asst. Professor, dept. of Computer Science",institution:"University of Wonderland, USA",phone:"6135550318",email:"jane.doe@gmail.com"}}},getters:{},mutations:{updateReference:function(e,t){e.userReference=t},toggleReferenceVisibility:function(e,t){e.visible=t}},actions:{syncDownReference:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateReference",r.referenceModule.userReference),e(r.referenceModule.userReference)}))}catch(a){r(a)}}))},syncUpReference:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("referenceModule").child("userReference").set(t.userReference).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownReferenceVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleReferenceVisibility",r.referenceModule.visible),e(r.referenceModule.visible)}))}catch(a){r(a)}}))},syncUpReferenceVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("referenceModule").child("visible").set(t),n("toggleReferenceVisibility",t)}}},m={state:{visible:!0,userSkill:{title:"Skills",skills:[{name:"Javascript",value:6,type:"Professional"},{name:"HTML5",value:8,type:"Personal"}]}},getters:{totalSkills:function(e){return e.userSkill.skills.length}},mutations:{addSkill:function(e,t){var n={name:"Skill",value:2,type:"Professional"};e.userSkill.skills.splice(t+1,0,n)},deleteSkill:function(e,t){e.userSkill.skills.splice(t,1)},updateSkill:function(e,t){e.userSkill=t},toggleSkillsVisibility:function(e,t){e.visible=t}},actions:{syncDownSkills:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateSkill",r.skillsModule.userSkill),e(r.skillsModule.userSkill)}))}catch(a){r(a)}}))},syncUpSkills:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("skillsModule").child("userSkill").set(t.userSkill).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownSkillsVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleSkillsVisibility",r.skillsModule.visible),e(r.skillsModule.visible)}))}catch(a){r(a)}}))},syncUpSkillsVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("skillsModule").child("visible").set(t),n("toggleSkillsVisibility",t)}}},p={state:{visible:!0,userSummary:{title:"About",body:"Write about your professionalism. Try to sell yourself at max 250 characters"}},getters:{},mutations:{updateSummary:function(e,t){e.userSummary=t},toggleSummaryVisibility:function(e,t){e.visible=t}},actions:{syncDownSummary:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateSummary",r.summaryModule.userSummary),e(r.summaryModule.userSummary)}))}catch(a){r(a)}}))},syncUpSummary:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("summaryModule").child("userSummary").set(t.userSummary).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownSummaryVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleSummaryVisibility",r.summaryModule.visible),e(r.summaryModule.visible)}))}catch(a){r(a)}}))},syncUpSummaryVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("summaryModule").child("visible").set(t),n("toggleSummaryVisibility",t)}}},b=(n("7514"),{state:{templates:[{title:"Groovy",active:!0,component:"theme-groovy"},{title:"Minimal",active:!0,component:"theme-minimal"}]},getters:{activeTemplate:function(e){return e.templates.find((function(e){return e.active}))}},mutations:{activateTemplate:function(e,t){e.templates.forEach((function(e){e.active=e.title===t}))},updateTemplates:function(e,t){e.templates=t}},actions:{syncDownTemplates:function(e){e.state;var t=e.commit,n=e.rootState,r=o["b"].ref("users/"+n.routeUID);r.on("value",(function(e){var n=e.val();t("updateTemplates",n.templatesModule.templates)}))},syncUpTemplates:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("templatesModule").child("templates").set(t),n("updateTemplates",t)}}}),v={state:{userThemes:[{name:"Dark",colors:{accent:"#027be3","bg-primary":"#ffffff","bg-secondary":"#222428","text-primary":"#000000","text-secondary":"#ffffff"},selected:!0},{name:"Fresh",colors:{accent:"#087f23","bg-primary":"#ffffff","bg-secondary":"#f3f3f3","text-primary":"#000000","text-secondary":"#000000"},selected:!1},{name:"Light",colors:{accent:"#00897b","bg-primary":"#ffffff","bg-secondary":"#e4e2e2a1","text-primary":"#000000","text-secondary":"#000000"},selected:!1},{name:"Vibrant",colors:{accent:"#000000","bg-primary":"#ffffff","bg-secondary":"#f44336","text-primary":"#000000","text-secondary":"#000000"},selected:!1}]},getters:{},mutations:{updateThemes:function(e,t){e.userThemes=t}},actions:{syncDownThemes:function(e){e.state;var t=e.commit,n=e.rootState,r=o["b"].ref("users/"+n.routeUID);r.on("value",(function(e){var n=e.val(),r=n.themesModule.userThemes;r.map((function(e){if(e.selected)for(var t in e.colors)document.documentElement.style.setProperty("--color-".concat(t),"".concat(e.colors[t]))})),t("updateThemes",r)}))},syncUpThemes:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("themesModule").child("userThemes").set(t),n("updateThemes",t)}}},h={state:{visible:!0,userTitles:{name:"John Doe",tagline:"Software Engineer"}},getters:{},mutations:{updateTitles:function(e,t){e.userTitles=t},toggleTitlesVisibility:function(e,t){e.visible=t}},actions:{syncDownTitles:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("updateTitles",r.titlesModule.userTitles),e(r.titlesModule.userTitles)}))}catch(a){r(a)}}))},syncUpTitles:function(e){var t=e.state,n=(e.commit,e.rootState);return new Promise((function(e,r){var i=o["b"].ref("users/"+n.routeUID);i.child("titlesModule").child("userTitles").set(t.userTitles).then((function(t){e(t)})).catch((function(e){r(e)}))}))},syncDownTitlesVisibility:function(e){e.state;var t=e.commit,n=e.rootState;return new Promise((function(e,r){try{var i=o["b"].ref("users/"+n.routeUID);i.on("value",(function(n){var r=n.val();t("toggleTitlesVisibility",r.titlesModule.visible),e(r.titlesModule.visible)}))}catch(a){r(a)}}))},syncUpTitlesVisibility:function(e,t){e.state;var n=e.commit,r=e.rootState,i=o["b"].ref("users/"+r.routeUID);i.child("titlesModule").child("visible").set(t),n("toggleTitlesVisibility",t)}}};r["a"].use(i["a"]);t["a"]=function(){var e=new i["a"].Store({modules:{templatesModule:b,avatarModule:a,titlesModule:h,skillsModule:m,personalModule:f,referenceModule:d,summaryModule:p,experienceModule:c,educationModule:s,hobbiesModule:l,themesModule:v,fontsModule:u},state:{user:null,routeUID:null},getters:{user:function(e){return e.user}},mutations:{updateUser:function(e,t){var n=t.user;e.user=n},updateRouteUID:function(e,t){e.routeUID=t}}});return e}},"77b2":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings",attrs:{id:"settings"}},[n("div",{staticClass:"settings__panel themes"},[n("h5",{staticClass:"settings__panel__title"},[e._v("Settings")]),n("div",{staticClass:"settings__panel__body"},[n("div",{staticClass:"row q-col-gutter-sm"},[n("div",{staticClass:"col-12"},[n("choose-theme")],1),n("div",{staticClass:"col-6"},[n("page-layout")],1),n("div",{staticClass:"col-6"},[n("choose-fonts")],1)])])]),n("div",{staticClass:"settings__panel sections"},[n("h5",{staticClass:"settings__panel__title"},[e._v("Templates")]),n("div",{staticClass:"settings__panel__body"},[n("div",{staticClass:"row gutter-xs"},[n("div",{staticClass:"col-12"},[n("choose-templates")],1)])])])])},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"themes",attrs:{id:"themes"}},[n("q-btn-dropdown",{staticClass:"full-width",attrs:{icon:"color_lens",label:"Choose Theme",align:"between"}},[n("q-list",e._l(e.themes,(function(t,r){return n("q-item",{key:r,staticClass:"cursor-pointer",attrs:{active:t.selected,"active-class":"bg-grey-5 text-grey-8"},nativeOn:{click:function(n){return e.changeTheme(t,r)}}},[n("p",{staticClass:"q-ma-none row justify-between items-center full-width"},[n("span",{staticClass:"themes__title"},[e._v(e._s(t.name))]),n("ul",{staticClass:"themes__preview"},[n("li",{staticClass:"themes__preview__color",style:{background:t.colors["accent"]}}),n("li",{staticClass:"themes__preview__color",style:{background:t.colors["bg-primary"]}}),n("li",{staticClass:"themes__preview__color",style:{background:t.colors["bg-secondary"]}}),n("li",{staticClass:"themes__preview__color",style:{background:t.colors["text-primary"]}}),n("li",{staticClass:"themes__preview__color",style:{background:t.colors["text-secondary"]}})])])])})),1)],1)],1)},a=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),c=n.n(s),u=n("2f62");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"Themes",data:function(){return{}},computed:f({},Object(u["d"])({themes:function(e){return e.themesModule.userThemes}})),created:function(){this.$store.dispatch("syncDownThemes")},methods:{changeTheme:function(e,t){for(var n in this.themes.map((function(e,n){e.selected=n===t})),e.colors)document.documentElement.style.setProperty("--color-".concat(n),"".concat(e.colors[n]));this.$store.dispatch("syncUpThemes",this.themes)}}},m=d,p=n("2877"),b=n("f20b"),v=n("1c1c"),h=n("66e5"),y=n("eebe"),g=n.n(y),w=Object(p["a"])(m,o,a,!1,null,null,null),S=w.exports;g()(w,"components",{QBtnDropdown:b["a"],QList:v["a"],QItem:h["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout",attrs:{id:"layout"}},[n("q-btn-dropdown",{staticClass:"full-width",attrs:{icon:"view_quilt",label:"Layout",align:"between"}},[n("q-list",e._l(e.layouts,(function(t,r){return n("q-item",{key:r,staticClass:"cursor-pointer",attrs:{active:t.selected,"active-class":"bg-grey-5 text-grey-8"},nativeOn:{click:function(n){return e.changeLayout(t,r)}}},[n("p",{staticClass:"q-ma-none row justify-between items-center full-width"},[n("span",{staticClass:"layout__title"},[e._v(e._s(t.name))]),n("span",{staticClass:"layout__placeholder"},[e._v("("+e._s(t.width)+" x "+e._s(t.height)+") cm")])])])})),1)],1)],1)},_=[],x={name:"Layout",data:function(){return{layouts:[{name:"A4",width:"21",height:"29.7",selected:!0},{name:"Letter",width:"21.6",height:"29.7",selected:!1}]}},methods:{changeLayout:function(e,t){this.layouts.map((function(e,n){e.selected=n===t})),document.documentElement.style.setProperty("--page-width","".concat(e.width,"cm")),document.documentElement.style.setProperty("--page-height","".concat(e.height,"cm"))}}},P=x,M=Object(p["a"])(P,D,_,!1,null,null,null),k=M.exports;g()(M,"components",{QBtnDropdown:b["a"],QList:v["a"],QItem:h["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fonts",attrs:{id:"fonts"}},[n("q-btn-dropdown",{staticClass:"full-width",attrs:{icon:"font_download",label:"Fonts",align:"between"}},[n("q-list",e._l(e.fonts,(function(t,r){return n("q-item",{key:r,staticClass:"cursor-pointer",attrs:{active:t.selected,"active-class":"bg-grey-5 text-grey-8"},nativeOn:{click:function(n){return e.changeFont(t,r)}}},[n("p",{staticClass:"q-ma-none"},[n("span",{staticClass:"fonts__heading",style:{"font-family":t.heading}},[n("b",[e._v(e._s(e._f("fontHeading")(t.name)))]),e._v(" Heading\n          ")]),n("br"),n("span",{staticClass:"fonts__body",style:{"font-family":t.body}},[e._v(e._s(e._f("fontBody")(t.name))+" Body")])])])})),1)],1)],1)},I=[];n("28a5");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={name:"Fonts",data:function(){return{}},computed:O({},Object(u["d"])({fonts:function(e){return e.fontsModule.userFonts}})),created:function(){this.$store.dispatch("syncDownFonts")},methods:{changeFont:function(e,t){this.fonts.map((function(e,n){e.selected=n===t})),document.documentElement.style.setProperty("--font-heading","".concat(e.heading)),document.documentElement.style.setProperty("--font-body","".concat(e.body)),this.$store.dispatch("syncUpFonts",this.fonts)}},filters:{fontHeading:function(e){return e.split("|")[0]},fontBody:function(e){return e.split("|")[1]}}},j=T,C=Object(p["a"])(j,U,I,!1,null,null,null),V=C.exports;g()(C,"components",{QBtnDropdown:b["a"],QList:v["a"],QItem:h["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"templates",attrs:{id:"templates"}},[n("div",{staticClass:"row q-col-gutter-sm"},e._l(e.templates,(function(t,r){return n("div",{key:r,staticClass:"col templates__tag cursor-pointer",class:{active:t.active},on:{click:function(n){return e.activateTemplate(t.title)}}},[n("q-card",{staticClass:"my-card"},[n("img",{attrs:{src:"statics/"+t.component+".png"}}),n("q-card-actions",{attrs:{align:"between"}},[n("h6",{staticClass:"text-h6"},[e._v(e._s(t.title))]),n("q-icon",{attrs:{name:t.active?"radio_button_checked":"radio_button_unchecked",color:"primary",size:"md"}})],1)],1)],1)})),0)])},A=[],H=n("1c16");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={name:"templates",data:function(){return{}},computed:L({},Object(u["d"])({templates:function(e){return e.templatesModule.templates}})),created:function(){this.$store.dispatch("syncDownTemplates")},methods:L({},Object(u["c"])(["activateTemplate"])),watch:{templates:{handler:Object(H["a"])((function(e){this.$store.dispatch("syncUpTemplates",e)}),1e3),deep:!0}}},q=R,F=n("f09f"),$=n("4b7e"),G=n("0016"),J=Object(p["a"])(q,Q,A,!1,null,null,null),z=J.exports;g()(J,"components",{QCard:F["a"],QCardActions:$["a"],QIcon:G["a"]});var N={name:"Settings",components:{"choose-theme":S,"page-layout":k,"choose-fonts":V,"choose-templates":z},data:function(){return{}}},W=N,X=Object(p["a"])(W,r,i,!1,null,null,null);t["a"]=X.exports},fc1b:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return p}));var r=n("967e"),i=n.n(r),o=(n("96cf"),n("fa84")),a=n.n(o),s=n("4360"),c=n("8aa5"),u=n.n(c),l={apiKey:"AIzaSyDQLdXAo7i_TQ2NYXnlDuJYt5gGFfM6UgI",authDomain:"vuesumer-9ce5c.firebaseapp.com",databaseURL:"https://vuesumer-9ce5c.firebaseio.com",projectId:"vuesumer-9ce5c",storageBucket:"vuesumer-9ce5c.appspot.com",messagingSenderId:"1017099995730"},f=u.a.initializeApp(l),d=f.auth(),m=f.database(),p=f.storage(),b={install:function(e,t){e.prototype.$auth={signup:function(){var e=a()(i.a.mark((function e(t,n){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.createUserWithEmailAndPassword(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),login:function(){var e=a()(i.a.mark((function e(t,n){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.signInWithEmailAndPassword(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=a()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},d.onAuthStateChanged((function(e){e&&Object(s["a"])().commit("updateUser",{user:e})}))}};t["c"]=function(e){var t=e.Vue;t.use(b)}}},[[0,3,0]]]);