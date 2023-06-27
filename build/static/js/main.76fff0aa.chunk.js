(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){e.exports=a(54)},41:function(e,t,a){},42:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(14),s=a.n(l),r=(a(41),a(6)),c=a(7),o=a(9),m=a(8),d=a(23),p=a.n(d),u=(a(42),a(18)),h=a(26),f=a(28),g=a.n(f),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,t="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",t)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var a=i.a.memo((function(){return i.a.createElement(h.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,t){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",null,i.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),i.a.createElement("br",null),i.a.createElement("h1",{className:"mb-0"},i.a.createElement(h.a,{steps:[t],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(a,null)),i.a.createElement(g.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"heroicons:moon-solid","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#ffffff"}}),id:"icon-switch"})))))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return i.a.createElement("span",{key:e.name,className:"m-4"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.class})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"social-links"},e),i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header;return i.a.createElement("section",{id:"about",className:"padding"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"black",fontSize:"20px",margin:"0px 00px 20px 0px"}},i.a.createElement("span",null,t)),i.a.createElement("div",{className:"row center mx-auto mb-5"},i.a.createElement("div",{className:"col-md-4 mb-5 center"},i.a.createElement("div",{className:"polaroid"},i.a.createElement("span",{style:{cursor:"auto"}},i.a.createElement("img",{src:e,alt:"Avatar placeholder",className:"full-width-image"})))),i.a.createElement("div",{className:"col-md-8 center"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"162%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},a," :)"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,'"\ud83d\udc4b Hey there, awesome visitors! Welcome to my little corner of the internet!',i.a.createElement("br",null),i.a.createElement("br",null),"Welcome to my portfolio website! I'm Chetan, a ",i.a.createElement("strong",null,"Computer Science graduate")," with both a ",i.a.createElement("strong",null,"Masters")," and ",i.a.createElement("strong",null,"Bachelors degree"),". With a strong passion for",i.a.createElement("strong",null,"application development"),", I specialize in crafting software solutions for ",i.a.createElement("strong",null,"desktop"),", ",i.a.createElement("strong",null,"web"),", and ",i.a.createElement("strong",null,"mobile")," platforms. Over the years, I've had the opportunity to work on diverse projects that demonstrate my expertise and skills.",i.a.createElement("br",null),i.a.createElement("br",null),"With ",i.a.createElement("strong",null,"1+ years of industry experience")," and a solid coding and development background spanning ",i.a.createElement("strong",null,"5+ years"),", I am ready to create innovative solutions and bring your ideas to life. If you're interested in hiring me or have an exciting offer, please feel free to reach out to me through my social media channels. Let's connect and collaborate on something amazing together!"))))))))}}]),a}(n.Component),x=a(22),b=(a(50),a(24)),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e="qualifications",t=this.props.resumeExperience.map((function(e,t){var a=e.technologies,n=e.mainTech.map((function(e,t){return i.a.createElement(b.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)})),l=a.map((function(e,t){return i.a.createElement(b.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)}));return i.a.createElement(x.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:i.a.createElement("span",{style:{fontSize:"16px"}},e.years),iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:e.icon+" experience-icon"}),key:t},i.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement("img",{className:"mr-2",height:"30px",src:e.logo,alt:"Avatar placeholder"}),i.a.createElement("img",{className:"ml-2",height:"20px",width:"35px",src:e.country,alt:"Avatar placeholder"}))),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},l))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center",fontSize:"20px",margin:"0px 00px 20px 0px"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(x.VerticalTimeline,null,t,i.a.createElement(x.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),a}(n.Component),k=a(57),N=a(29),j=a.n(N),I=a(30),S=a.n(I),B=a(31),O=a.n(B),C=(a(51),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,n=this.props.data.description,l=this.props.data.url;if(this.props.data.technologies){var s=e.map((function(e,t){return i.a.createElement("li",{className:"list-inline-item mx-3 ",key:t},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:e.class,alt:"",style:{height:"30px"}}),i.a.createElement("div",{className:e.class,style:{fontSize:"300%"}}),i.a.createElement("p",{className:" text-center",style:{fontSize:"120%"}},e.name))))}));if(this.props.data.images)var r=t.map((function(e,t){return i.a.createElement("div",{key:t,"data-src":e})}))}}return i.a.createElement(k.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),i.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},i.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),i.a.createElement("div",{className:"col-md-12 "},i.a.createElement("div",{className:"col-md-10 mx-auto ",style:{paddingBottom:"50px"}},i.a.createElement(j.a,{cssModule:[S.a,O.a],animation:"scaleOutAnimation",className:"slider-image-container"},r)),i.a.createElement("div",{className:"col-md-10 mx-auto"},i.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},a,l?i.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fab fa-github",style:{marginLeft:"10px",fontSize:"130%"}})):null),i.a.createElement("p",{className:"modal-description"},n),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto"},s)))))}}]),a}(n.Component)),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map((function(t){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t.title,style:{cursor:"pointer"}},i.a.createElement("span",{className:"portfolio-item d-block"},i.a.createElement("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a}},i.a.createElement("div",null,i.a.createElement("img",{src:t.thumbnail,alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),i.a.createElement("span",{className:"project-date"},t.startDate),i.a.createElement("br",null),i.a.createElement("p",{className:"project-title-settings mt-3"},t.title)))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black",fontSize:"20px",margin:"0px 00px 20px 0px"}},i.a.createElement("span",null,t)),i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"row mx-auto"},a)),i.a.createElement(C,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return i.a.createElement("li",{className:"list-inline-item mx-3 bounce-animation",key:t,style:{"--index":t}},i.a.createElement("div",{className:"text-center skills-tile",style:{height:"100px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"-80px"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement("div",{style:{position:"relative",marginTop:"15px"}},i.a.createElement("i",{className:e.class,style:{fontSize:"220%",paddingBottom:"-25px",marginBottom:"105px"}}),i.a.createElement("img",{src:e.class,alt:"",style:{height:"50px",padding:"0px",margin:"0px"}}),i.a.createElement("p",{className:"text-center",style:{fontSize:"80%",marginTop:"8px",marginBottom:"30px"}},e.name)))))})),a=this.props.sharedSkills.icons2.map((function(e,t){return i.a.createElement("li",{className:"list-inline-item mx-3 bounce-animation",key:t,style:{"--index":t}},i.a.createElement("div",{className:"text-center skills-tile",style:{height:"100px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"-80px"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement("div",{style:{position:"relative",marginTop:"15px"}},i.a.createElement("i",{className:e.class,style:{fontSize:"220%",paddingBottom:"-25px",marginBottom:"105px"}}),i.a.createElement("img",{src:e.class,alt:"",style:{height:"50px",padding:"0px",margin:"0px"}}),i.a.createElement("p",{className:"text-center",style:{fontSize:"80%",marginTop:"8px",marginBottom:"30px"}},e.name)))))})),n=this.props.sharedSkills.icons3.map((function(e,t){return i.a.createElement("li",{className:"list-inline-item mx-3 bounce-animation",key:t,style:{"--index":t}},i.a.createElement("div",{className:"text-center skills-tile",style:{height:"100px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"-80px"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement("div",{style:{position:"relative",marginTop:"15px"}},i.a.createElement("i",{className:e.class,style:{fontSize:"220%",paddingBottom:"-25px",marginBottom:"105px"}}),i.a.createElement("img",{src:e.class,alt:"",style:{height:"50px",padding:"0px",margin:"0px"}}),i.a.createElement("p",{className:"text-center",style:{fontSize:"80%",marginTop:"8px",marginBottom:"30px"}},e.name)))))}));return i.a.createElement("section",{id:"skills",className:"padding"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-12"},i.a.createElement("h1",{class:"section-title text-center",style:{fontSize:"20px",margin:"0px 00px 20px 0px"}},i.a.createElement("span",{class:"text-white"},e))),i.a.createElement("div",{class:"col-12"},i.a.createElement("ul",{class:"list-inline skill-icon wave-animation text-center",id:"skills-list"},t),i.a.createElement("ul",{class:"list-inline skill-icon wave-animation text-center",id:"skills-list2"},a),i.a.createElement("ul",{class:"list-inline skill-icon wave-animation text-center",id:"skills-list2"},n)))))}}]),a}(n.Component),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(c.a)(a,[{key:"applyPickedLanguage",value:function(e,t){this.swapCurrentlyActiveLanguage(t),document.documentElement.lang=e;var a=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(a)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var t=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(t).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){p.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){p.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(E,{sharedData:this.state.sharedData.basic_info}),i.a.createElement("div",{className:"col-md-12 mx-auto text-center language",style:{display:"none"}},i.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)},style:{display:"none"}},i.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$primaryLanguageIconId})),i.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId)},style:{display:"none"}},i.a.createElement("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-poland","data-inline":"false",id:window.$secondaryLanguageIconId}))),i.a.createElement(v,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),i.a.createElement(L,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(A,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(w,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(y,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),a}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(53);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",s.a.render(i.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Portfolio_FullStack",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Portfolio_FullStack","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.76fff0aa.chunk.js.map