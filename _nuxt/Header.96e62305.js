import{r as t,o as i,e as _,f as e,w as o,h as c,j as C,F as S,v as V,c as D,x as $,p as H,i as N,b as B}from"./entry.72618973.js";import{_ as F}from"./logo-zanergy-box.17f3a0f6.js";const M={class:"glitch-sub-footer"},U=c("div",{class:"glitch-text-descriptions"},"Zanergy © 2024 · Todos los derechos reservados",-1),A=c("span",null,"Instagram",-1),P={__name:"Footer",setup(n){return(l,x)=>{const a=t("v-col"),m=t("v-icon"),u=t("v-btn"),r=t("v-row"),d=t("v-container");return i(),_("footer",M,[e(d,null,{default:o(()=>[e(r,null,{default:o(()=>[e(a,{class:"text-left",cols:"12",sm:"4",md:"4",lg:"4"},{default:o(()=>[U]),_:1}),e(a,{class:"text-center",cols:"12",sm:"4",md:"4",lg:"4"}),e(a,{class:"text-right",cols:"12",sm:"4",md:"4",lg:"4"},{default:o(()=>[e(u,{class:"instagram-gradient",size:"small",color:"primary",plane:"",href:"https://www.instagram.com/zanergy_ernc",target:"_blank"},{default:o(()=>[e(m,{icon:"mdi mdi-instagram",start:""}),A]),_:1})]),_:1})]),_:1})]),_:1})])}}},f=n=>(H("data-v-c58a60ed"),n=n(),N(),n),L=f(()=>c("img",{class:"pl-0 ml-5",width:"48",src:F,alt:"Zanergy"},null,-1)),R=f(()=>c("div",{class:"navbar-brand-title"},"Zanergy",-1));function Z(n,l,x,a,m,u){const r=t("v-toolbar-title"),d=t("v-spacer"),g=t("v-app-bar"),p=t("v-list-item"),v=t("v-list"),h=t("v-divider"),b=t("v-list-subheader"),w=t("v-icon"),y=t("v-list-item-title"),I=t("v-navigation-drawer");return i(),_("div",null,[e(g,{app:"",style:{"background-color":"#DDDC1C"},dark:"",dense:"","elevate-on-scroll":""},{default:o(()=>[L,e(r,null,{default:o(()=>[R]),_:1}),e(d)]),_:1}),e(I,{modelValue:n.drawer,"onUpdate:modelValue":l[0]||(l[0]=s=>n.drawer=s),app:"",temporary:"",absolute:"",style:{position:"fixed",left:"0"}},{default:o(()=>[e(v,{nav:"",dense:""},{default:o(()=>[e(p,{title:"Menú de Navegación",subtitle:""})]),_:1}),e(h),e(v,{lines:!1,nav:""},{default:o(()=>[e(b,null,{default:o(()=>[C("PRINCIPAL")]),_:1}),(i(!0),_(S,null,V(n.items,(s,k)=>(i(),D(p,{"active-color":"",key:k,value:s,to:s.route},{prepend:o(()=>[e(w,{icon:s.icon},null,8,["icon"])]),default:o(()=>[e(y,{textContent:$(s.text)},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))]),_:1})]),_:1},8,["modelValue"])])}const q={name:"Header",data:()=>({selectedItem:0,items:[{text:"Landing",icon:"mdi-island",route:"/"},{text:"Home",icon:"mdi-home-flood",route:"/home"},{text:"Dashboard",icon:"mdi-view-dashboard",route:"/dashboard"},{text:"Redes Sociales",icon:"mdi-account-network",route:"/rrss"},{text:"Estados",icon:"mdi-comment-account",route:"/healthchecks"},{text:"Comunicados",icon:"mdi-bullhorn-variant",route:"/announcements"},{text:"Misión",icon:"mdi-bullseye-arrow",route:"/mision"},{text:"Vision",icon:"mdi-eye-outline",route:"/vision"},{text:"¿Quiénes Somos?",icon:"mdi-music-note-whole-dotted",route:"/quienes-somos"},{text:"¿Qué Hacemos?",icon:"mdi-fire",route:"/que-hacemos"}],items2:[{icon:"mdi-inbox",text:"Inbox"},{icon:"mdi-star",text:"Star"},{icon:"mdi-send",text:"Send"},{icon:"mdi-email-open",text:"Drafts"},{text:"About",icon:"mdi-information",subItems:[{title:"About Us",icon:"mdi-information"},{title:"Mission",icon:"mdi-bullseye-arrow"},{title:"Vision",icon:"mdi-information"}]}],open:["Users"],admins:[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]],drawer:!1,group:1})},Q=B(q,[["render",Z],["__scopeId","data-v-c58a60ed"]]);export{Q as H,P as _};
