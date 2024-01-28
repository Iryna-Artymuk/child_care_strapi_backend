"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[7230],{7230:(G,I,t)=>{t.r(I),t.d(I,{E:()=>F,a:()=>w,b:()=>Se});var e=t(74081),f=t(27279),m=t(10701),k=t(2878),L=t(77970),S=t(96226),U=t(25191),y=t(4540),_=t(51094),a=t(10989),g=t(32370),M=t(67472),C=t(22572),B=t(73411),x=t(93415),K=t(23298),O=t(74577),H=t(12881),ne=t(1782),re=t(8295),ae=t(61121),oe=t(27875),N=t(48102),ie=t(74758),le=t(73354),A=t(87006),de=t(47533),z=t(51447),Z=t(88220),X=t(5769),ce=t(13067),ge=t(79213),he=t(36938),Q=t(95066),ue=t(34547),J=t(59082),_e=t(64820),Ee=t(76827),b=t(71563),W=t(61020),T=t(47853),me=t(76873),V=t(72450),pe=t(1350);const[fe,Y]=(0,me.k)("WebhookEvent"),Me=({children:s})=>{const{formatMessage:n}=(0,W.Z)(),{collectionTypes:r,isLoading:h}=(0,X.u)(),o=f.useMemo(()=>r.some(i=>i.options?.draftAndPublish===!0),[r]),c=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(fe,{isDraftAndPublish:o,children:(0,e.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(k.Q,{"aria-hidden":!0,children:c}),h&&(0,e.jsx)(L.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(ye,{"aria-label":c,children:s})]})})},ye=(0,V.ZP)(S.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,xe=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},Pe=({getHeaders:s=xe})=>{const{isDraftAndPublish:n}=Y("Headers"),{formatMessage:r}=(0,W.Z)(),h=s(n);return(0,e.jsx)(U.S,{children:(0,e.jsxs)(y.Z,{children:[(0,e.jsx)(_.g,{children:(0,e.jsx)(a.T,{children:r({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),h.map(o=>["app.utils.publish","app.utils.unpublish"].includes(o?.id??"")?(0,e.jsx)(_.g,{title:r({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id):(0,e.jsx)(_.g,{children:(0,e.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id))]})})},je=({providedEvents:s})=>{const{isDraftAndPublish:n}=Y("Body"),r=s||ve(n),{values:h,handleChange:o}=(0,b.u6)(),c="events",i=h.events,p=[],P=i.reduce((l,d)=>{const E=d.split(".")[0];return l[E]||(l[E]=[]),l[E].push(d),l},{}),u=({target:{name:l,value:d}})=>{const E=new Set(i);d?E.add(l):E.delete(l),o({target:{name:c,value:Array.from(E)}})},v=({target:{name:l,value:d}})=>{const E=new Set(i);d?r[l].forEach(D=>{p.includes(D)||E.add(D)}):r[l].forEach(D=>E.delete(D)),o({target:{name:c,value:Array.from(E)}})};return(0,e.jsx)(M.X,{children:Object.entries(r).map(([l,d])=>(0,e.jsx)(q,{disabledEvents:p,name:l,events:d,inputValue:P[l],handleSelect:u,handleSelectAll:v},l))})},ve=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},q=({disabledEvents:s=[],name:n,events:r=[],inputValue:h=[],handleSelect:o,handleSelectAll:c})=>{const{formatMessage:i}=(0,W.Z)(),p=r.filter(d=>!s.includes(d)),P=h.length>0,u=h.length===p.length,v=({target:{name:d}})=>{c({target:{name:d,value:!u}})},l=5;return(0,e.jsxs)(y.Z,{children:[(0,e.jsx)(_.f,{children:(0,e.jsx)(C.X,{indeterminate:P&&!u,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:v,value:u,children:Oe(n)})}),r.map(d=>(0,e.jsx)(_.f,{children:(0,e.jsx)(B.C,{disabled:s.includes(d),"aria-label":d,name:d,value:h.includes(d),onValueChange:E=>o({target:{name:d,value:E}})})},d)),r.length<l&&(0,e.jsx)(_.f,{colSpan:l-r.length})]})},Oe=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),w={Root:Me,Headers:Pe,Body:je,Row:q},be=()=>(0,e.jsxs)(w.Root,{children:[(0,e.jsx)(w.Headers,{}),(0,e.jsx)(w.Body,{})]}),De=()=>{const{formatMessage:s}=(0,W.Z)(),{values:n,errors:r}=(0,b.u6)();return(0,e.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(k.Q,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(x.x,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(b.F2,{validateOnChange:!1,name:"headers",render:({push:h,remove:o})=>(0,e.jsxs)(K.r,{gap:4,children:[n.headers.map((c,i)=>{const p=r.headers?.[i],P=typeof p=="object"?p.key:void 0,u=typeof p=="object"?p.value:void 0;return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsx)(O.P,{col:6,children:(0,e.jsx)(b.gN,{as:Ce,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:P})}),(0,e.jsx)(O.P,{col:6,children:(0,e.jsxs)(m.k,{alignItems:"flex-end",children:[(0,e.jsx)(x.x,{style:{flex:1},children:(0,e.jsx)(b.gN,{as:H.o,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:u})}),(0,e.jsx)(m.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:u?0:5,children:(0,e.jsx)(A.fG,{disabled:n.headers.length===1,onClick:()=>o(i),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${c.key}`)}),(0,e.jsx)(O.P,{col:12,children:(0,e.jsx)(ne.A,{type:"button",onClick:()=>{h({key:"",value:""})},startIcon:(0,e.jsx)(he.Z,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},Ce=({name:s,onChange:n,value:r,...h})=>{const{values:{headers:o}}=(0,b.u6)(),[c,i]=f.useState([...ee]);f.useEffect(()=>{const u=ee.filter(v=>!o?.some(l=>l.key!==r&&l.key===v));i(u)},[o,r]);const p=u=>{n({target:{name:s,value:u}})},P=u=>{i(v=>[...v,u]),p(u)};return(0,e.jsx)(re.XU,{...h,onClear:()=>p(""),onChange:p,onCreateOption:P,placeholder:"",value:r,children:c.map(u=>(0,e.jsx)(ae.O,{value:u,children:u},u))})},ee=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Te=({isPending:s,onCancel:n,response:r})=>{const{statusCode:h,message:o}=r??{},{formatMessage:c}=(0,W.Z)();return(0,e.jsx)(x.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(K.r,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(O.P,{col:3,children:(0,e.jsx)(g.Z,{children:c({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(O.P,{col:3,children:(0,e.jsx)(Ae,{isPending:s,statusCode:h})}),(0,e.jsx)(O.P,{col:6,children:s?(0,e.jsx)(m.k,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:n,type:"button",children:(0,e.jsxs)(m.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(g.Z,{textColor:"neutral400",children:c({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)($,{as:Q.Z,color:"neutral400"})]})})}):(0,e.jsx)(We,{statusCode:h,message:o})})]})})},$=V.ZP.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,V.iv)`
          path {
            fill: ${s.colors[n]};
          }
        `:""}
`),Ae=({isPending:s,statusCode:n})=>{const{formatMessage:r}=(0,W.Z)();return s||!n?(0,e.jsxs)(m.k,{gap:2,alignItems:"center",children:[(0,e.jsx)($,{as:ue.Z}),(0,e.jsx)(g.Z,{children:r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(m.k,{gap:2,alignItems:"center",children:[(0,e.jsx)($,{as:J.Z,color:"success700"}),(0,e.jsx)(g.Z,{children:r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(m.k,{gap:2,alignItems:"center",children:[(0,e.jsx)($,{as:Q.Z,color:"danger700"}),(0,e.jsxs)(g.Z,{children:[r({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},We=({statusCode:s,message:n})=>{const{formatMessage:r}=(0,W.Z)();return s?s>=200&&s<300?(0,e.jsx)(m.k,{justifyContent:"flex-end",children:(0,e.jsx)(g.Z,{textColor:"neutral600",ellipsis:!0,children:r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(m.k,{justifyContent:"flex-end",children:(0,e.jsx)(m.k,{maxWidth:(0,A.Q1)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(g.Z,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Ie=({handleSubmit:s,triggerWebhook:n,isCreating:r,isTriggering:h,triggerResponse:o,data:c})=>{const{formatMessage:i}=(0,W.Z)(),[p,P]=f.useState(!1),u=(0,Z.p)(be,async()=>(await t.e(1301).then(t.bind(t,11301))).EventsTableEE),v=d=>Object.keys(d).length?Object.entries(d).map(([E,D])=>({key:E,value:D})):[{key:"",value:""}],l=(0,b.TA)({initialValues:{name:c?.name||"",url:c?.url||"",headers:v(c?.headers||{}),events:c?.events||[]},async onSubmit(d,E){await s(d,E),E.resetForm({values:d})},validationSchema:Le({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return u?(0,e.jsx)(b.Hy,{value:l,children:(0,e.jsxs)(A.l0,{children:[(0,e.jsx)(oe.T,{primaryAction:(0,e.jsxs)(m.k,{gap:2,children:[(0,e.jsx)(N.z,{onClick:()=>{n(),P(!0)},variant:"tertiary",startIcon:(0,e.jsx)(_e.Z,{}),disabled:r||h,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(N.z,{startIcon:(0,e.jsx)(J.Z,{}),type:"submit",size:"L",disabled:!l.dirty,loading:l.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):c?.name,navigationAction:(0,e.jsx)(ge.r,{as:de.OL,startIcon:(0,e.jsx)(Ee.Z,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(ie.D,{children:(0,e.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:4,children:[p&&(0,e.jsx)(Te,{isPending:h,response:o,onCancel:()=>P(!1)}),(0,e.jsx)(x.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(K.r,{gap:6,children:[(0,e.jsx)(O.P,{col:6,children:(0,e.jsx)(b.gN,{as:H.o,name:"name",error:l.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(O.P,{col:12,children:(0,e.jsx)(b.gN,{as:H.o,name:"url",error:l.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(De,{}),(0,e.jsx)(u,{})]})})]})})]})}):null},ke=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Re=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Le=({formatMessage:s})=>T.Ry().shape({name:T.Z_().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(ke,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:T.Z_().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Re,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:T.Vo(n=>{const r=T.IX();if(n.length===1){const{key:h,value:o}=n[0];if(!h&&!o)return r}return r.of(T.Ry().shape({key:T.Z_().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:T.Z_().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:T.IX()}),se=s=>({...s,headers:s.headers.reduce((n,{key:r,value:h})=>(r!==""&&(n[r]=h),n),{})}),F=()=>{const n=(0,z.$B)("/settings/webhooks/:id")?.params.id,r=n==="create",{replace:h}=(0,z.k6)(),o=(0,A.lm)(),{_unstableFormatAPIError:c,_unstableFormatValidationErrors:i}=(0,A.So)(),{isLoading:p}=(0,X.u)(),[P,u]=f.useState(!1),[v,l]=f.useState(),{isLoading:d,webhooks:E,error:D,createWebhook:Ue,updateWebhook:Be,triggerWebhook:Ke}=(0,pe.u)({id:n},{skip:r});f.useEffect(()=>{D&&o({type:"warning",message:c(D)})},[D,o,c]);const Ze=async()=>{try{u(!0);const R=await Ke(n);if("error"in R){o({type:"warning",message:c(R.error)});return}l(R.data)}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{u(!1)}},we=async(R,te)=>{try{if(r){const j=await Ue(se(R));if("error"in j){(0,Z.x)(j.error)&&j.error.name==="ValidationError"?te.setErrors(i(j.error)):o({type:"warning",message:c(j.error)});return}o({type:"success",message:{id:"Settings.webhooks.created"}}),h(`/settings/webhooks/${j.data.id}`)}else{const j=await Be({id:n,...se(R)});if("error"in j){(0,Z.x)(j.error)&&j.error.name==="ValidationError"?te.setErrors(i(j.error)):o({type:"warning",message:c(j.error)});return}o({type:"success",message:{id:"notification.form.success.fields"}})}}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(d||p)return(0,e.jsx)(A.dO,{});const[$e]=E??[];return(0,e.jsxs)(le.o,{children:[(0,e.jsx)(A.SL,{name:"Webhooks"}),(0,e.jsx)(Ie,{data:$e,handleSubmit:we,triggerWebhook:Ze,isCreating:r,isTriggering:P,triggerResponse:v})]})},Se=Object.freeze(Object.defineProperty({__proto__:null,EditPage:F,ProtectedEditPage:()=>{const s=(0,Z.j)(ce.s);return(0,e.jsx)(A.O4,{permissions:s.settings?.webhooks.update,children:(0,e.jsx)(F,{})})}},Symbol.toStringTag,{value:"Module"}))},5769:(G,I,t)=>{t.d(I,{u:()=>U});var e=t(27279),f=t(87006),m=t(88220);const k=m.m.injectEndpoints({endpoints:y=>({getComponents:y.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:_=>_.data}),getContentTypes:y.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:_=>_.data})}),overrideExisting:!1}),{useGetComponentsQuery:L,useGetContentTypesQuery:S}=k;function U(){const{_unstableFormatAPIError:y}=(0,f.So)(),_=(0,f.lm)(),a=L(),g=S();e.useEffect(()=>{g.error&&_({type:"warning",message:y(g.error)})},[g.error,y,_]),e.useEffect(()=>{a.error&&_({type:"warning",message:y(a.error)})},[a.error,y,_]);const M=a.isLoading||g.isLoading,C=e.useMemo(()=>(g?.data??[]).filter(x=>x.kind==="collectionType"&&x.isDisplayed),[g?.data]),B=e.useMemo(()=>(g?.data??[]).filter(x=>x.kind!=="collectionType"&&x.isDisplayed),[g?.data]);return{isLoading:M,components:e.useMemo(()=>a?.data??[],[a?.data]),collectionTypes:C,singleTypes:B}}},1350:(G,I,t)=>{t.d(I,{u:()=>y});var e=t(88220);const f=e.m.injectEndpoints({endpoints:_=>({getWebhooks:_.query({query:a=>({url:`/admin/webhooks/${a?.id??""}`,method:"GET"}),transformResponse:a=>Array.isArray(a.data)?a.data:[a.data],providesTags:(a,g,M)=>typeof M=="object"&&"id"in M?[{type:"Webhook",id:M.id}]:[...a?.map(({id:C})=>({type:"Webhook",id:C}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:_.mutation({query:a=>({url:"/admin/webhooks",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:_.mutation({query:({id:a,...g})=>({url:`/admin/webhooks/${a}`,method:"PUT",data:g}),transformResponse:a=>a.data,invalidatesTags:(a,g,{id:M})=>[{type:"Webhook",id:M}]}),triggerWebhook:_.mutation({query:a=>({url:`/admin/webhooks/${a}/trigger`,method:"POST"}),transformResponse:a=>a.data}),deleteManyWebhooks:_.mutation({query:a=>({url:"/admin/webhooks/batch-delete",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:(a,g,{ids:M})=>M.map(C=>({type:"Webhook",id:C}))})}),overrideExisting:!1}),{useGetWebhooksQuery:m,useCreateWebhookMutation:k,useUpdateWebhookMutation:L,useTriggerWebhookMutation:S,useDeleteManyWebhooksMutation:U}=f,y=(_=void 0,a)=>{const{data:g,isLoading:M,error:C}=m(_,a),[B]=k(),[x]=L(),[K]=S(),[O]=U();return{webhooks:g,isLoading:M,error:C,createWebhook:B,updateWebhook:x,triggerWebhook:K,deleteManyWebhooks:O}}}}]);
