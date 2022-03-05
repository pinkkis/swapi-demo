"use strict";(self["webpackChunkswapi_demo"]=self["webpackChunkswapi_demo"]||[]).push([[443],{8519:function(e,a,l){l.r(a),l.d(a,{default:function(){return C}});var t=l(3396),o=l(4870),n=l(7139),r=l(9749),i=l(8009);const u=e=>((0,t.dD)("data-v-5909ecee"),e=e(),(0,t.Cn)(),e),d={class:"container"},p=u((()=>(0,t._)("dt",null,"Diameter",-1))),s=u((()=>(0,t._)("dt",null,"Climate",-1))),m=u((()=>(0,t._)("dt",null,"Population",-1))),c=(0,t.Uk)("Close");var w={props:{planet:Object},setup(e){const{format:a}=new Intl.NumberFormat;return(l,r)=>{const i=(0,t.up)("o-button");return(0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("header",null,[(0,t._)("h2",null,(0,n.zw)(e.planet.name),1)]),(0,t._)("dl",null,[p,(0,t._)("dd",null,(0,n.zw)(e.planet.diameter)+"km",1),s,(0,t._)("dd",null,(0,n.zw)(e.planet.climate),1),m,(0,t._)("dd",null,(0,n.zw)((0,o.SU)(a)(e.planet.population)),1)]),(0,t._)("footer",null,[(0,t.Wm)(i,{type:"button",onClick:r[0]||(r[0]=e=>l.$emit("close"))},{default:(0,t.w5)((()=>[c])),_:1})])])}}},b=l(89);const _=(0,b.Z)(w,[["__scopeId","data-v-5909ecee"]]);var g=_;const f=(0,t._)("h1",null,"People",-1),v=(0,t._)("p",null," These are the characters listed in the first 7 Star Wars movies. You can filter them by name, and see details on them and their home planet. ",-1),h=(0,t._)("option",{value:"5"},"5 per page",-1),k=(0,t._)("option",{value:"10"},"10 per page",-1),U=(0,t._)("option",{value:"15"},"15 per page",-1),N=(0,t._)("option",{value:"20"},"20 per page",-1);var W={setup(e){const{format:a}=new Intl.NumberFormat,l=(0,r.oR)(),{oruga:u}=(0,i.u)(),d=(0,t.Fl)((()=>l.getters.people)),p=(0,t.Fl)((()=>l.getters.loading)),s=(0,t.Fl)((()=>c.value.length?d.value.filter((e=>e.name.toLocaleLowerCase().includes(c.value.toLocaleLowerCase()))):d.value)),m=(0,o.iH)(15),c=(0,o.iH)(""),w=e=>{u.modal.open({component:g,props:{planet:e},canCancel:!0})};return(e,l)=>{const r=(0,t.up)("o-input"),i=(0,t.up)("o-table-column"),u=(0,t.up)("o-button"),d=(0,t.up)("o-skeleton"),b=(0,t.up)("o-select"),_=(0,t.up)("o-table");return(0,t.wg)(),(0,t.iD)("section",null,[f,v,(0,t.Wm)(r,{placeholder:"Search Person Name...",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),modelModifiers:{trim:!0},icon:"account-search",iconPack:"mdi",size:"medium","icon-right":c.value?.length?"close":void 0,"icon-right-clickable":"",onIconRightClick:l[1]||(l[1]=e=>c.value="")},null,8,["modelValue","icon-right"]),(0,t.Wm)(_,{class:"data-table",data:(0,o.SU)(s),paginated:!0,"per-page":m.value,"pagination-simple":!0,loading:(0,o.SU)(p),striped:!0,"default-sort":"name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},(0,t.Nv)({"bottom-left":(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value=e)},{default:(0,t.w5)((()=>[h,k,U,N])),_:1},8,["modelValue"])])),default:(0,t.w5)((()=>[(0,t.Wm)(i,{field:"name",label:"Name",sortable:"",width:"250"},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.name),1)])),_:1}),(0,t.Wm)(i,{field:"height",label:"Height (cm)",sortable:"",numeric:""},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.height===Number.MIN_SAFE_INTEGER?"unknown":(0,o.SU)(a)(e.row.height)),1)])),_:1}),(0,t.Wm)(i,{field:"mass",label:"Mass (kg)",sortable:"",numeric:""},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.mass===Number.MIN_SAFE_INTEGER?"unknown":(0,o.SU)(a)(e.row.mass)),1)])),_:1}),(0,t.Wm)(i,{field:"homeworld.name",label:"Planet Name",sortable:""},{default:(0,t.w5)((e=>[(0,t.Wm)(u,{variant:"primary",outlined:"",onClick:a=>w(e.row.homeworld)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.row.homeworld?.name??"unknown"),1)])),_:2},1032,["onClick"])])),_:1}),(0,t.Wm)(i,{field:"created",label:"Created",sortable:"",position:"centered"},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(new Date(e.row.created).toLocaleDateString()),1)])),_:1}),(0,t.Wm)(i,{field:"edited",label:"Edited",sortable:"",position:"centered"},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(new Date(e.row.edited).toLocaleDateString()),1)])),_:1})])),_:2},[(0,o.SU)(p)?{name:"empty",fn:(0,t.w5)((()=>[(0,t.Wm)(d,{animated:!0,size:"large",count:4})]))}:void 0]),1032,["data","per-page","loading"])])}}};const S=W;var C=S},3009:function(e,a,l){l.r(a),l.d(a,{default:function(){return z}});var t=l(3396),o=l(4870),n=l(7139),r=l(9749),i=l(8009);const u=e=>((0,t.dD)("data-v-1aba48c8"),e=e(),(0,t.Cn)(),e),d={class:"container"},p={key:0},s={key:1},m=u((()=>(0,t._)("p",null,[(0,t._)("em",null,"No residents")],-1))),c=[m],w=(0,t.Uk)("Close");var b={props:{planet:Object},setup(e){return(a,l)=>{const o=(0,t.up)("o-button");return(0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("header",null,[(0,t._)("h2",null,"Residents of "+(0,n.zw)(e.planet.name),1)]),e.planet.residents.length>0?((0,t.wg)(),(0,t.iD)("ul",p,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.planet.residents,(e=>((0,t.wg)(),(0,t.iD)("li",{key:e.url},(0,n.zw)(e.name),1)))),128))])):((0,t.wg)(),(0,t.iD)("div",s,c)),(0,t._)("footer",null,[(0,t.Wm)(o,{type:"button",onClick:l[0]||(l[0]=e=>a.$emit("close"))},{default:(0,t.w5)((()=>[w])),_:1})])])}}},_=l(89);const g=(0,_.Z)(b,[["__scopeId","data-v-1aba48c8"]]);var f=g;const v=(0,t._)("h1",null,"Planets",-1),h=(0,t._)("p",null," These are the planets listed in the first 7 Star Wars movies. You can filter them by name and see the residents of a given planet. ",-1),k=(0,t._)("option",{value:"5"},"5 per page",-1),U=(0,t._)("option",{value:"10"},"10 per page",-1),N=(0,t._)("option",{value:"15"},"15 per page",-1),W=(0,t._)("option",{value:"20"},"20 per page",-1);var S={setup(e){const{format:a}=new Intl.NumberFormat,{oruga:l}=(0,i.u)(),u=(0,r.oR)(),d=(0,t.Fl)((()=>u.getters.planets)),p=(0,t.Fl)((()=>c.value.length?d.value.filter((e=>e.name.toLocaleLowerCase().includes(c.value.toLocaleLowerCase()))):d.value)),s=(0,t.Fl)((()=>u.getters.loading)),m=(0,o.iH)(15),c=(0,o.iH)(""),w=e=>{l.modal.open({component:f,props:{planet:e},canCancel:!0})};return(e,l)=>{const r=(0,t.up)("o-input"),i=(0,t.up)("o-table-column"),u=(0,t.up)("o-button"),d=(0,t.up)("o-skeleton"),b=(0,t.up)("o-select"),_=(0,t.up)("o-table");return(0,t.wg)(),(0,t.iD)("section",null,[v,h,(0,t.Wm)(r,{placeholder:"Search Planet Name...",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),modelModifiers:{trim:!0},icon:"search-web",iconPack:"mdi",size:"medium","icon-right":c.value?.length?"close":void 0,"icon-right-clickable":"",onIconRightClick:l[1]||(l[1]=e=>c.value="")},null,8,["modelValue","icon-right"]),(0,t.Wm)(_,{class:"data-table",data:(0,o.SU)(p),paginated:!0,"per-page":m.value,"pagination-simple":!0,loading:(0,o.SU)(s),striped:!0,"default-sort":"name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},(0,t.Nv)({"bottom-left":(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value=e)},{default:(0,t.w5)((()=>[k,U,N,W])),_:1},8,["modelValue"])])),default:(0,t.w5)((()=>[(0,t.Wm)(i,{field:"name",label:"Name",sortable:"",width:"200"},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.name),1)])),_:1}),(0,t.Wm)(i,{field:"rotation_period",label:"Rotation Period",sortable:"",numeric:""},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.rotation_period===Number.MIN_SAFE_INTEGER?"unknown":(0,o.SU)(a)(e.row.rotation_period)),1)])),_:1}),(0,t.Wm)(i,{field:"orbital_period",label:"Orbital Period",sortable:"",numeric:""},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.orbital_period===Number.MIN_SAFE_INTEGER?"unknown":(0,o.SU)(a)(e.row.orbital_period)),1)])),_:1}),(0,t.Wm)(i,{field:"diameter",label:"Diameter",sortable:"",numeric:""},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.diameter===Number.MIN_SAFE_INTEGER?"unknown":(0,o.SU)(a)(e.row.diameter)),1)])),_:1}),(0,t.Wm)(i,{field:"climate",label:"Climate",sortable:""},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.climate),1)])),_:1}),(0,t.Wm)(i,{field:"population",label:"Population",sortable:"",numeric:""},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(e.row.population===Number.MIN_SAFE_INTEGER?"unknown":(0,o.SU)(a)(e.row.population)),1)])),_:1}),(0,t.Wm)(i,{field:"residents",label:"Residents",sortable:"",numeric:""},{default:(0,t.w5)((e=>[(0,t.Wm)(u,{variant:"primary",outlined:"","icon-left":"account",onClick:a=>w(e.row)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.row.residents?.length),1)])),_:2},1032,["onClick"])])),_:1}),(0,t.Wm)(i,{field:"created",label:"Created",sortable:"",position:"centered"},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(new Date(e.row.created).toLocaleDateString()),1)])),_:1}),(0,t.Wm)(i,{field:"edited",label:"Edited",sortable:"",position:"centered"},{default:(0,t.w5)((e=>[(0,t.Uk)((0,n.zw)(new Date(e.row.edited).toLocaleDateString()),1)])),_:1})])),_:2},[(0,o.SU)(s)?{name:"empty",fn:(0,t.w5)((()=>[(0,t.Wm)(d,{animated:!0,size:"large",count:4})]))}:void 0]),1032,["data","per-page","loading"])])}}};const C=S;var z=C}}]);
//# sourceMappingURL=about.6177ea11.js.map