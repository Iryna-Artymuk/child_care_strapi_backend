(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[229,8976],{1786:g=>{function u(s,t,l,d){for(var r=l-1,P=s.length;++r<P;)if(d(s[r],t))return r;return-1}g.exports=u},12186:(g,u,s)=>{var t=s(36393),l=s(62878),d=s(1786),r=s(20435),P=s(22033),L=Array.prototype,m=L.splice;function v(i,p,A,F){var X=F?d:l,z=-1,H=p.length,E=i;for(i===p&&(p=P(p)),A&&(E=t(i,r(A)));++z<H;)for(var W=0,R=p[z],S=A?A(R):R;(W=X(E,S,W,F))>-1;)E!==i&&m.call(E,W,1),m.call(i,W,1);return i}g.exports=v},58422:(g,u,s)=>{var t=s(36393),l=s(90040),d=s(92403),r=s(26126);function P(L,m){var v=r(L)?t:d;return v(L,l(m,3))}g.exports=P},22009:(g,u,s)=>{var t=s(52431),l=s(45906),d=t(l);g.exports=d},45906:(g,u,s)=>{var t=s(12186);function l(d,r){return d&&d.length&&r&&r.length?t(d,r):d}g.exports=l},34049:(g,u,s)=>{var t=s(20454);function l(d){var r=d==null?0:d.length;return r?t(d,1,r):[]}g.exports=l},40229:(g,u,s)=>{"use strict";s.d(u,{ProtectedCreateView:()=>cs});var t=s(74081),l=s(87006),d=s(59461),r=s(13067),P=s(48976),L=s(27279),m=s(64797),v=s(85811),i=s(88220),p=s(15816),A=s(97442),F=s(13576),X=s(87830),z=s(47184),H=s(364),E=s(71563),W=s(49204),R=s(47853),S=s(74919),N=s(29206),b=s(40464),k=s(98934),K=s(43433),os=s(75719),is=s(8175),ls=s(6078),_s=s(51943),ds=s(55783),Y=s(92249),rs=s(41942),Z=s(22919),Es=s(53915),ss=s(75041),As=s(30200),Ts=s(91379),ms=s(33299),hs=s(33409),gs=s(63645),ps=s(7988),Cs=s(7055),Is=s(26757),vs=s(58311),us=s(24840),Ls=s(29510),Rs=s(16946),ys=s(10124),Us=s(69530),fs=s(86961),xs=s(51527),Bs=s(19764),Ws=s(42982),Ks=s(26126),js=s(49601),Ss=s(24722),Ns=s(58422),ks=s(34049),Zs=s(98344),$s=s(22009);const cs=()=>{const Ps=(0,d.v9)(r.s);return(0,t.jsx)(l.O4,{permissions:Ps.settings?.["api-tokens"].create,children:(0,t.jsx)(P.N,{})})}},48976:(g,u,s)=>{"use strict";s.d(u,{N:()=>Ms,ProtectedEditView:()=>dt});var t=s(74081),l=s(27279),d=s(93415),r=s(10701),P=s(32370),L=s(23298),m=s(74577),v=s(73354),i=s(27875),p=s(48102),A=s(74758),F=s(45322),X=s(24920),z=s(34642),H=s(22572),E=s(87006),W=s(71563),R=s(61020),S=s(51447),N=s(88220),b=s(49601),k=s(93118),K=s(24722),os=s(76873),is=s(59082),ls=s(35318),_s=s(58422),ds=s(34049),Y=s(72450),rs=s(98344),Z=s(47853),Es=s(61815),ss=s(22009),As=s(15816),Ts=s(97442),ms=s(13576),hs=s(87830),gs=s(47184),ps=s(364),Cs=s(59461),Is=s(49204),vs=s(74919),us=s(29206),Ls=s(40464),Rs=s(98934),ys=s(43433),Us=s(75719),fs=s(8175),xs=s(6078),Bs=s(51943),Ws=s(55783),Ks=s(92249),js=s(41942),Ss=s(22919),Ns=s(53915),ks=s(75041),Zs=s(30200),$s=s(91379),cs=s(33299),Ps=s(33409),Tt=s(63645),mt=s(7988),ht=s(7055),gt=s(26757),pt=s(58311),Ct=s(24840),It=s(29510),vt=s(16946),ut=s(10124),Lt=s(69530),Rt=s(86961),yt=s(51527),Ut=s(19764),ft=s(42982),xt=s(26126);const Gs=N.m.injectEndpoints({endpoints:n=>({getPermissions:n.query({query:()=>"/admin/content-api/permissions",transformResponse:e=>e.data}),getRoutes:n.query({query:()=>"/admin/content-api/routes",transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetPermissionsQuery:Vs,useGetRoutesQuery:Fs}=Gs,[zs,Hs]=(0,os.k)("ApiTokenPermissionsContext"),Ys=({children:n,...e})=>(0,t.jsx)(zs,{...e,children:n}),ts=()=>Hs("useApiTokenPermissions"),Qs=({errors:n={},onChange:e,canEditInputs:a,isCreating:c,values:o={},apiToken:M={},onDispatch:_,setHasChangedPermissions:B})=>{const{formatMessage:h}=(0,R.Z)(),x=({target:{value:y}})=>{B(!1),y==="full-access"&&_({type:"SELECT_ALL_ACTIONS"}),y==="read-only"&&_({type:"ON_CHANGE_READ_ONLY"})},Q=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,t.jsx)(d.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(P.Z,{variant:"delta",as:"h2",children:h({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(L.r,{gap:5,children:[(0,t.jsx)(m.P,{col:6,xs:12,children:(0,t.jsx)(K.T,{error:n.name,value:o.name,canEditInputs:a,onChange:e})},"name"),(0,t.jsx)(m.P,{col:6,xs:12,children:(0,t.jsx)(K.a,{error:n.description,value:o.description,canEditInputs:a,onChange:e})},"description"),(0,t.jsx)(m.P,{col:6,xs:12,children:(0,t.jsx)(K.L,{isCreating:c,error:n.lifespan,value:o.lifespan,onChange:e,token:M})},"lifespan"),(0,t.jsx)(m.P,{col:6,xs:12,children:(0,t.jsx)(K.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:y=>{x({target:{value:y}}),e({target:{name:"type",value:y}})},options:Q,canEditInputs:a})},"type")]})]})})},Js=({apiTokenName:n=null})=>{const{formatMessage:e}=(0,R.Z)();return(0,E.go)(),(0,t.jsxs)(v.o,{"aria-busy":"true",children:[(0,t.jsx)(E.SL,{name:"API Tokens"}),(0,t.jsx)(i.T,{primaryAction:(0,t.jsx)(p.z,{disabled:!0,startIcon:(0,t.jsx)(is.Z,{}),type:"button",size:"L",children:e({id:"global.save",defaultMessage:"Save"})}),title:n||e({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,t.jsx)(A.D,{children:(0,t.jsx)(E.dO,{})})]})},Xs=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},bs=(0,Y.ZP)(d.x)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,ws=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:e}=(0,R.Z)(),{method:a,handler:c,path:o}=n,M=o?ds(o.split("/")):[],[_="",B=""]=c?c.split("."):[],h=Xs(n.method);return(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsxs)(P.Z,{variant:"delta",as:"h3",children:[e({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,t.jsx)("span",{children:_}),(0,t.jsxs)(P.Z,{variant:"delta",textColor:"primary600",children:[".",B]})]}),(0,t.jsxs)(r.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,t.jsx)(bs,{background:h.background,borderColor:h.border,padding:2,children:(0,t.jsx)(P.Z,{fontWeight:"bold",textColor:h.text,children:a})}),(0,t.jsx)(d.x,{paddingLeft:2,paddingRight:2,children:_s(M,x=>(0,t.jsxs)(P.Z,{textColor:x.includes(":")?"neutral600":"neutral900",children:["/",x]},x))})]})]})},qs=()=>{const{value:{selectedAction:n,routes:e}}=ts(),{formatMessage:a}=(0,R.Z)(),c=n?.split(".")[0];return(0,t.jsx)(m.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,t.jsx)(r.k,{direction:"column",alignItems:"stretch",gap:2,children:c&&c in e&&e[c].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,t.jsx)(ws,{route:o},o.handler):null)}):(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.Z,{variant:"delta",as:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,t.jsx)(P.Z,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Os=(0,Y.iv)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,st=(0,Y.ZP)(d.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&Os}
  &:hover {
    ${Os}
  }
`,tt=Y.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,et=({controllers:n=[],label:e,orderNumber:a=0,disabled:c=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:M=null})=>{const{value:{onChangeSelectAll:_,onChange:B,selectedActions:h,setSelectedAction:x,selectedAction:Q}}=ts(),[y,w]=l.useState(!1),{formatMessage:J}=(0,R.Z)(),C=()=>{w(T=>!T),o(a)};l.useEffect(()=>{M!==null&&M!==a&&y&&w(!1)},[M,a,y]);const Ds=T=>T===Q;return(0,t.jsxs)(F.U,{expanded:y,onToggle:C,variant:a%2?"primary":"secondary",children:[(0,t.jsx)(X.B,{title:rs(e)}),(0,t.jsx)(z.v,{children:n?.map(T=>{const U=T.actions.every(I=>h.includes(I.actionId)),f=T.actions.some(I=>h.includes(I.actionId));return(0,t.jsxs)(d.x,{children:[(0,t.jsxs)(r.k,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,t.jsx)(d.x,{paddingRight:4,children:(0,t.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:T?.controller})}),(0,t.jsx)(tt,{}),(0,t.jsx)(d.x,{paddingLeft:4,children:(0,t.jsx)(H.X,{value:U,indeterminate:!U&&f,onValueChange:()=>{_({target:{value:[...T.actions]}})},disabled:c,children:J({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,t.jsx)(L.r,{gap:4,padding:4,children:T?.actions&&T?.actions.map(I=>(0,t.jsx)(m.P,{col:6,children:(0,t.jsxs)(st,{isActive:Ds(I.actionId),padding:2,hasRadius:!0,children:[(0,t.jsx)(H.X,{value:h.includes(I.actionId),name:I.actionId,onValueChange:()=>{B({target:{value:I.actionId}})},disabled:c,children:I.action}),(0,t.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>x({target:{value:I.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,t.jsx)(ls.Z,{})})]})},I.actionId))})]},`${e}.${T?.controller}`)})})]})},nt=({section:n=null,...e})=>{const[a,c]=l.useState(null),o=M=>c(M);return(0,t.jsx)(d.x,{padding:4,background:"neutral0",children:n&&n.map((M,_)=>(0,t.jsx)(et,{label:M.label,controllers:M.controllers,orderNumber:_,indexExpandendCollapsedContent:a,onExpanded:o,...e},M.apiId))})},at=({...n})=>{const{value:{data:e}}=ts(),{formatMessage:a}=(0,R.Z)();return(0,t.jsxs)(L.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,t.jsxs)(m.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.Z,{variant:"delta",as:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,t.jsx)(P.Z,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),e?.permissions&&(0,t.jsx)(nt,{section:e?.permissions,...n})]}),(0,t.jsx)(qs,{})]})},ot=Z.Ry().shape({name:Z.Z_().max(100).required(E.I0.required),type:Z.Z_().oneOf(["read-only","full-access","custom"]).required(E.I0.required),description:Z.Z_().nullable(),lifespan:Z.Rx().integer().min(0).nullable().defined(E.I0.required)}),it=n=>{const e={allActionsIds:[],permissions:[]};return e.permissions=Object.entries(n).map(([a,c])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(c.controllers).map(o=>({controller:o,actions:o in c.controllers?c.controllers[o].map(M=>{const _=`${a}.${o}.${M}`;return a.includes("api::")&&e.allActionsIds.push(_),{action:M,actionId:_}}).flat():[]})).flat()})),e},lt={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},_t=(n,e)=>(0,Es.ZP)(n,a=>{switch(e.type){case"ON_CHANGE":{a.selectedActions.includes(e.value)?ss(a.selectedActions,e.value):a.selectedActions.push(e.value);break}case"SELECT_ALL_IN_PERMISSION":{e.value.every(o=>a.selectedActions.includes(o.actionId))?e.value.forEach(o=>{ss(a.selectedActions,o.actionId)}):e.value.forEach(o=>{a.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const c=a.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));a.selectedActions=[...c];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=it(e.value);break}case"UPDATE_ROUTES":{a.routes={...e.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...e.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=e.value;break}default:return a}}),Ms=()=>{(0,E.go)();const{formatMessage:n}=(0,R.Z)(),e=(0,E.lm)(),{lockApp:a,unlockApp:c}=(0,E.o1)(),{state:o}=(0,S.TH)(),M=(0,N.j)(O=>O.admin_app.permissions),[_,B]=l.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:h}=(0,E.rS)(),{setCurrentStep:x}=(0,E.c1)(),{allowedActions:{canCreate:Q,canUpdate:y,canRegenerate:w}}=(0,E.ss)(M.settings?.["api-tokens"]),[J,C]=l.useReducer(_t,lt),T=(0,S.$B)("/settings/api-tokens/:id")?.params?.id,U=T==="create",{_unstableFormatAPIError:f,_unstableFormatValidationErrors:I}=(0,E.So)(),rt=(0,S.k6)(),$=Vs(),G=Fs();l.useEffect(()=>{$.error&&e({type:"warning",message:f($.error)})},[$.error,f,e]),l.useEffect(()=>{G.error&&e({type:"warning",message:f(G.error)})},[G.error,f,e]),l.useEffect(()=>{$.data&&C({type:"UPDATE_PERMISSIONS_LAYOUT",value:$.data})},[$.data]),l.useEffect(()=>{G.data&&C({type:"UPDATE_ROUTES",value:G.data})},[G.data]),l.useEffect(()=>{_&&(_.type==="read-only"&&C({type:"ON_CHANGE_READ_ONLY"}),_.type==="full-access"&&C({type:"SELECT_ALL_ACTIONS"}),_.type==="custom"&&C({type:"UPDATE_PERMISSIONS",value:_?.permissions}))},[_]),l.useEffect(()=>{h(U?"didAddTokenFromList":"didEditTokenFromList",{tokenType:k.A})},[U,h]);const{data:j,error:es,isLoading:Et}=(0,b.b)(T,{skip:!T||U||!!_});l.useEffect(()=>{es&&e({type:"warning",message:f(es)})},[es,f,e]),l.useEffect(()=>{j&&(B(j),j.type==="read-only"&&C({type:"ON_CHANGE_READ_ONLY"}),j.type==="full-access"&&C({type:"SELECT_ALL_ACTIONS"}),j.type==="custom"&&C({type:"UPDATE_PERMISSIONS",value:j?.permissions}))},[j]);const[ct]=(0,b.c)(),[Pt]=(0,b.d)(),Ot=async(O,V)=>{h(U?"willCreateToken":"willEditToken",{tokenType:k.A}),a();try{if(U){const D=await ct({...O,lifespan:O.lifespan==="0"?parseInt(O.lifespan):null,permissions:O.type==="custom"?J.selectedActions:null});if("error"in D){(0,N.x)(D.error)&&D.error.name==="ValidationError"?V.setErrors(I(D.error)):e({type:"warning",message:f(D.error)});return}e({type:"success",message:n({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),h("didCreateToken",{type:D.data.type,tokenType:k.A}),rt.replace(`/settings/api-tokens/${D.data.id}`,{apiToken:D.data}),x("apiTokens.success")}else{const D=await Pt({id:T,name:O.name,description:O.description,type:O.type,permissions:O.type==="custom"?J.selectedActions:null});if("error"in D){(0,N.x)(D.error)&&D.error.name==="ValidationError"?V.setErrors(I(D.error)):e({type:"warning",message:f(D.error)});return}e({type:"success",message:n({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),h("didEditToken",{type:D.data.type,tokenType:k.A})}}catch{e({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{c()}},[Mt,ns]=l.useState(!1),Dt={...J,onChange:({target:{value:O}})=>{ns(!0),C({type:"ON_CHANGE",value:O})},onChangeSelectAll:({target:{value:O}})=>{ns(!0),C({type:"SELECT_ALL_IN_PERMISSION",value:O})},setSelectedAction:({target:{value:O}})=>{C({type:"SET_SELECTED_ACTION",value:O})}},as=y&&!U||Q&&U;return Et?(0,t.jsx)(Js,{apiTokenName:_?.name}):(0,t.jsx)(Ys,{value:Dt,children:(0,t.jsxs)(v.o,{children:[(0,t.jsx)(E.SL,{name:"API Tokens"}),(0,t.jsx)(W.J9,{validationSchema:ot,validateOnChange:!1,initialValues:{name:_?.name||"",description:_?.description||"",type:_?.type,lifespan:_?.lifespan?_.lifespan.toString():_?.lifespan},enableReinitialize:!0,onSubmit:(O,V)=>Ot(O,V),children:({errors:O,handleChange:V,isSubmitting:D,values:q,setFieldValue:At})=>(Mt&&q?.type!=="custom"&&At("type","custom"),(0,t.jsxs)(E.l0,{children:[(0,t.jsx)(K.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:_,setToken:B,canEditInputs:as,canRegenerate:w,isSubmitting:D,regenerateUrl:"/admin/api-tokens/"}),(0,t.jsx)(A.D,{children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(_?.name)&&(0,t.jsx)(K.c,{token:_?.accessKey,tokenType:k.A}),(0,t.jsx)(Qs,{errors:O,onChange:V,canEditInputs:as,isCreating:U,values:q,apiToken:_,onDispatch:C,setHasChangedPermissions:ns}),(0,t.jsx)(at,{disabled:!as||q?.type==="read-only"||q?.type==="full-access"})]})})]}))})]})})},dt=()=>{const n=(0,N.j)(e=>e.admin_app.permissions.settings?.["api-tokens"].read);return(0,t.jsx)(E.O4,{permissions:n,children:(0,t.jsx)(Ms,{})})}},49601:(g,u,s)=>{"use strict";s.d(u,{a:()=>L,b:()=>r,c:()=>P,d:()=>m,u:()=>d});var t=s(88220);const l=t.m.injectEndpoints({endpoints:v=>({getAPITokens:v.query({query:()=>"/admin/api-tokens",transformResponse:i=>i.data,providesTags:(i,p)=>[...i?.map(({id:A})=>({type:"ApiToken",id:A}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:v.query({query:i=>`/admin/api-tokens/${i}`,transformResponse:i=>i.data,providesTags:(i,p,A)=>[{type:"ApiToken",id:A}]}),createAPIToken:v.mutation({query:i=>({url:"/admin/api-tokens",method:"POST",data:i}),transformResponse:i=>i.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:v.mutation({query:i=>({url:`/admin/api-tokens/${i}`,method:"DELETE"}),transformResponse:i=>i.data,invalidatesTags:(i,p,A)=>[{type:"ApiToken",id:A}]}),updateAPIToken:v.mutation({query:({id:i,...p})=>({url:`/admin/api-tokens/${i}`,method:"PUT",data:p}),transformResponse:i=>i.data,invalidatesTags:(i,p,{id:A})=>[{type:"ApiToken",id:A}]})}),overrideExisting:!1}),{useGetAPITokensQuery:d,useGetAPITokenQuery:r,useCreateAPITokenMutation:P,useDeleteAPITokenMutation:L,useUpdateAPITokenMutation:m}=l}}]);
