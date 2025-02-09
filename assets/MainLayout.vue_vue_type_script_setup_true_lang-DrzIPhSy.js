import{J as N,d as m,k as z,r as i,o as r,f as k,w as u,a as e,b as n,n as d,u as v,e as y,_ as w,c as f,g as b,t as x,i as h,y as C,z as P,F as T,h as M}from"./index-5b9cbygb.js";const $=N("sidebar",{state:()=>({collapsed:!1}),getters:{},actions:{toggleCollapsed(){this.collapsed=!this.collapsed}}}),B=m({__name:"MenuItem",props:{icon:{},link:{}},setup(c){const t=c,o=$(),s=z(()=>location.pathname.includes(t.link));return(a,_)=>{const l=i("box-icon"),p=i("router-link");return r(),k(p,{to:a.link},{default:u(()=>[e("div",{class:d(["flex items-center gap-x-2 px-6 py-1.5 text-slate-500 border-r-4 border-transparent hover:bg-slate-200",{active:s.value}])},[n(l,{type:a.icon.type,name:a.icon.name,class:"fill-current w-7 h-7 flex-shrink-0"},null,8,["type","name"]),e("span",{class:d({hidden:v(o).collapsed,"font-semibold":s.value})},[y(a.$slots,"default",{},void 0,!0)],2)],2)]),_:3},8,["to"])}}}),g=w(B,[["__scopeId","data-v-b02e14f4"]]),E="/admin-base-page/assets/Gemini_Generated_Image-JkgVDxxz.png",V={class:"py-3 box-border"},D={class:"flex justify-start gap-x-2 items-center px-4"},U=["src"],A={class:"flex flex-col gap-y-1 mt-10"},F=m({__name:"index",setup(c){const t=$();return(o,s)=>(r(),f("aside",{class:d(["w-56 border-r-2 transition-all duration-300",{collapsed:v(t).collapsed}])},[e("div",V,[e("div",D,[e("img",{src:v(E),alt:"Logo",class:"w-full max-w-11"},null,8,U),e("h1",{class:d(["font-bold text-2xl text-purple-900",{hidden:v(t).collapsed}])},s[0]||(s[0]=[b("Web"),e("span",{class:"font-normal"},"Admin",-1)]),2)]),e("div",A,[n(g,{icon:{type:"solid",name:"dashboard"},link:"/dashboard"},{default:u(()=>s[1]||(s[1]=[b("Dashboard ")])),_:1}),n(g,{icon:{type:"solid",name:"group"},link:"/users"},{default:u(()=>s[2]||(s[2]=[b("Users")])),_:1}),n(g,{icon:{type:"solid",name:"cabinet"},link:"/projects"},{default:u(()=>s[3]||(s[3]=[b("Projects ")])),_:1})])])],2))}}),G=w(F,[["__scopeId","data-v-f4ff02a2"]]),J={class:"bg-purple-200 text-purple-800 rounded-md p-2 flex"},H={class:"col-span-3 hover:underline"},K={class:"font-medium"},W={class:"text-slate-500"},q={class:"flex flex-col gap-4"},O={class:"text-xs text-slate-500 text-right"},Q=m({__name:"ListItem",props:{item:{}},setup(c){return(t,o)=>{const s=i("box-icon"),a=i("router-link");return r(),k(a,{to:"#",class:d(["grid grid-cols-5 gap-x-4 p-5 hover:cursor-pointer",{"bg-purple-50":!t.item.isReaded}])},{default:u(()=>[e("div",J,[n(s,{type:t.item.icon.type,name:t.item.icon.name,class:"fill-current m-auto size-8"},null,8,["type","name"])]),e("div",H,[e("h1",K,x(t.item.title),1),e("p",W,x(t.item.subTitle),1)]),e("div",q,[e("p",O,x(t.item.time),1),e("div",{class:d([{"bg-purple-700":!t.item.isReaded},"rounded-full p-1.5 inline-block ms-auto"])},null,2)])]),_:1},8,["class"])}}}),X={class:"absolute flex bg-red-500 rounded-full text-white font-medium size-5 top-0 right-0"},Y={class:"m-auto text-xs"},Z={class:"p-5"},ee=m({__name:"index",setup(c){const t=[{icon:{type:"solid",name:"report"},title:"Pemberitahuan",subTitle:"Laporan anda telah disetujui",isReaded:!1,time:"10 menit"},{icon:{type:"solid",name:"report"},title:"Pemberitahuan",subTitle:"Laporan anda telah ditolak",isReaded:!0,time:"30 menit"},{icon:{type:"solid",name:"report"},title:"Pemberitahuan",subTitle:"Laporan anda telah ditolak",isReaded:!0,time:"1 jam"},{icon:{type:"solid",name:"report"},title:"Pemberitahuan",subTitle:"Laporan anda telah ditolak",isReaded:!0,time:"2 jam"},{icon:{type:"solid",name:"report"},title:"Pemberitahuan",subTitle:"Laporan anda telah ditolak",isReaded:!0,time:"4 jam"}],o=h(),s=h(!1),a=z(()=>t.filter(p=>!p.isReaded)),_=()=>{s.value=!s.value},l=p=>{o.value&&!o.value.contains(p.target)&&(s.value=!1)};return C(()=>{window.addEventListener("click",l)}),P(()=>{window.removeEventListener("click",l)}),(p,L)=>{const R=i("box-icon"),S=i("RouterLink");return r(),f("div",{ref_key:"popoverContainer",ref:o,class:"relative"},[e("button",{onClick:_,class:d(["flex text-slate-500 hover:text-slate-600 p-1.5",{active:s.value}])},[n(R,{type:s.value?"solid":"regular",name:"bell",class:"fill-current size-7 m-auto"},null,8,["type"])],2),e("div",X,[e("span",Y,x(a.value.length),1)]),e("div",{class:d([{hidden:!s.value},"absolute top-full right-0 rounded-md border-2 bg-white w-[25rem] divide-y-2 z-[9999]"])},[(r(),f(T,null,M(t,(I,j)=>n(Q,{key:j,item:I},null,8,["item"])),64)),e("div",Z,[n(S,{to:"#"},{default:u(()=>L[0]||(L[0]=[e("p",{class:"w-full text-purple-800 hover:underline text-center"},"Lihat Notifikasi Sebelumnya",-1)])),_:1})])],2)],512)}}}),te=w(ee,[["__scopeId","data-v-21c98362"]]),se={class:"font-semibold"},oe=m({__name:"MenuItem",props:{icon:{}},setup(c){return(t,o)=>{const s=i("box-icon"),a=i("RouterLink");return r(),k(a,{to:"#",class:"w-full px-3 py-2 rounded-md hover:bg-slate-200 flex items-center gap-x-2"},{default:u(()=>[n(s,{type:t.icon.type,name:t.icon.name},null,8,["type","name"]),e("span",se,[y(t.$slots,"default")])]),_:3})}}}),ne=m({__name:"index",setup(c){const t=h(),o=h(!1),s=()=>{o.value=!o.value},a=_=>{t.value&&!t.value.contains(_.target)&&(o.value=!1)};return C(()=>{window.addEventListener("click",a)}),P(()=>{window.removeEventListener("click",a)}),(_,l)=>{const p=i("box-icon");return r(),f("div",{ref_key:"popoverContainer",ref:t,class:"relative"},[e("button",{onClick:s,class:"flex items-center gap-x-2 text-slate-500 hover:text-slate-600 p-1.5"},[n(p,{name:"cool",class:"fill-current size-7 m-auto"}),l[0]||(l[0]=e("span",{class:"font-bold text-slate-600"},"Username",-1)),l[1]||(l[1]=e("svg",{class:"fill-current size-3 m-auto",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"})],-1))]),e("div",{class:d([{hidden:!o.value},"absolute top-full right-0 rounded-md border-2 bg-white p-2 min-w-72 z-[9999]"])},[n(oe,{icon:{type:"regular",name:"cog"}},{default:u(()=>l[2]||(l[2]=[b("Pengaturan")])),_:1}),l[3]||(l[3]=e("div",{class:"px-3 mt-4 pt-4 pb-2 border-t-2"},[e("button",{class:"w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-1 rounded-md font-semibold"},"Keluar")],-1))],2)],512)}}}),ae={class:"flex justify-between items-center"},le={class:"flex"},ie={class:"inline-block ms-3 border-l-2 ps-3"},re=m({__name:"index",setup(c){const t=$(),o=()=>{t.toggleCollapsed()};return(s,a)=>{const _=i("box-icon");return r(),f("div",ae,[e("div",null,[e("button",{onClick:o,class:"flex text-slate-500 hover:text-slate-600 p-1"},[n(_,{name:"menu",class:"fill-current size-7 m-auto"})])]),e("div",le,[n(te),e("div",ie,[n(ne)])])])}}}),de={class:"flex"},ce={class:"w-full"},pe={class:"border-b-2 py-3 px-8"},ue={class:"bg-slate-100 min-h-screen p-8"},_e=m({__name:"MainLayout",setup(c){return(t,o)=>(r(),f("div",de,[n(G),e("div",ce,[e("header",pe,[n(re)]),e("main",ue,[y(t.$slots,"default")])])]))}});export{_e as _,E as a};
