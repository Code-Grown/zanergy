import{r as t,o as i,c as f,w as o,f as e,h as l,e as g,j as V,F as C,t as $,v as H,p as N,i as B,b as D}from"./entry.507f8206.js";import{_ as F}from"./logo-zanergy-box.a98534da.js";const M=l("div",{class:"glitch-text-descriptions"},"Zanergy © 2024 · Todos los derechos reservados",-1),U=l("span",null,"Instagram",-1),z={__name:"Footer",setup(n){return(r,x)=>{const a=t("v-col"),m=t("v-icon"),u=t("v-btn"),c=t("v-row"),d=t("v-container"),_=t("v-footer");return i(),f(_,{class:"glitch-sub-footer",color:"grey-darken-3",image:"/img/app-bar.jpg",light:"",dense:""},{default:o(()=>[e(d,null,{default:o(()=>[e(c,null,{default:o(()=>[e(a,{class:"text-left",cols:"12",sm:"4",md:"4",lg:"4"},{default:o(()=>[M]),_:1}),e(a,{class:"text-center",cols:"12",sm:"4",md:"4",lg:"4"}),e(a,{class:"text-right",cols:"12",sm:"4",md:"4",lg:"4"},{default:o(()=>[e(u,{class:"instagram-gradient",size:"small",color:"primary",plane:"",href:"https://www.instagram.com/zanergy_ernc",target:"_blank"},{default:o(()=>[e(m,{icon:"mdi mdi-instagram",start:""}),U]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},h=n=>(N("data-v-591d6457"),n=n(),B(),n),j=h(()=>l("img",{class:"pl-0 ml-5",width:"48",src:F,alt:"Zanergy"},null,-1)),A=h(()=>l("div",{class:"navbar-brand-title"},"Zanergy",-1));function L(n,r,x,a,m,u){const c=t("v-toolbar-title"),d=t("v-spacer"),_=t("v-app-bar"),p=t("v-list-item"),v=t("v-list"),b=t("v-divider"),w=t("v-list-subheader"),y=t("v-icon"),I=t("v-list-item-title"),k=t("v-navigation-drawer");return i(),g("div",null,[e(_,{app:"",color:"grey-darken-3",image:"/img/app-bar.jpg",light:"",dense:"","elevate-on-scroll":""},{default:o(()=>[j,e(c,null,{default:o(()=>[A]),_:1}),e(d)]),_:1}),e(k,{modelValue:n.drawer,"onUpdate:modelValue":r[0]||(r[0]=s=>n.drawer=s),app:"",temporary:"",absolute:"",style:{position:"fixed",left:"0"}},{default:o(()=>[e(v,{nav:"",dense:""},{default:o(()=>[e(p,{title:"Menú de Navegación",subtitle:""})]),_:1}),e(b),e(v,{lines:!1,nav:""},{default:o(()=>[e(w,null,{default:o(()=>[V("PRINCIPAL")]),_:1}),(i(!0),g(C,null,$(n.items,(s,S)=>(i(),f(p,{"active-color":"",key:S,value:s,to:s.route},{prepend:o(()=>[e(y,{icon:s.icon},null,8,["icon"])]),default:o(()=>[e(I,{textContent:H(s.text)},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))]),_:1})]),_:1},8,["modelValue"])])}const R={name:"Header",data:()=>({selectedItem:0,items:[{text:"Landing",icon:"mdi-island",route:"/"},{text:"Home",icon:"mdi-home-flood",route:"/home"},{text:"Dashboard",icon:"mdi-view-dashboard",route:"/dashboard"},{text:"Redes Sociales",icon:"mdi-account-network",route:"/rrss"},{text:"Estados",icon:"mdi-comment-account",route:"/healthchecks"},{text:"Comunicados",icon:"mdi-bullhorn-variant",route:"/announcements"},{text:"Misión",icon:"mdi-bullseye-arrow",route:"/mision"},{text:"Vision",icon:"mdi-eye-outline",route:"/vision"},{text:"¿Quiénes Somos?",icon:"mdi-music-note-whole-dotted",route:"/quienes-somos"},{text:"¿Qué Hacemos?",icon:"mdi-fire",route:"/que-hacemos"}],items2:[{icon:"mdi-inbox",text:"Inbox"},{icon:"mdi-star",text:"Star"},{icon:"mdi-send",text:"Send"},{icon:"mdi-email-open",text:"Drafts"},{text:"About",icon:"mdi-information",subItems:[{title:"About Us",icon:"mdi-information"},{title:"Mission",icon:"mdi-bullseye-arrow"},{title:"Vision",icon:"mdi-information"}]}],open:["Users"],admins:[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]],drawer:!1,group:1})},E=D(R,[["render",L],["__scopeId","data-v-591d6457"]]);export{E as H,z as _};
