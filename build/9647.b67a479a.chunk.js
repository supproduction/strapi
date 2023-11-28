"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[9647],{69647:(Es,R,s)=>{s.r(R),s.d(R,{default:()=>b});var t=s(74081),E=s(94050),d=s(59461),k=s(44328),g=s(27279),F=s(48102),m=s(10701),H=s(77970),I=s(32370),N=s(59082),v=s(71563),Y=s(43433),Z=s(61020),z=s(40464),V=s(51447),Q=s(20498),$=s(59491),o=s(54629),G=s(66360),c=s(55535),M=s(78099),a=s(47706),J=s(88181),ds=s(64797),gs=s(85811),Ms=s(57236),fs=s(15816),cs=s(97442),Ds=s(13576),Os=s(87830),Ps=s(47184),ms=s(364),vs=s(49204),hs=s(47853),us=s(75719),Ls=s(74919),Cs=s(29206),Ts=s(98934),ws=s(8175),Rs=s(52058),Is=s(86961),As=s(10124),Ws=s(92249),Bs=s(51527),ys=s(3243),Ks=s(11745),Us=s(6078),js=s(76368);function X(){const{formatMessage:n}=(0,Z.Z)(),{post:q}=(0,E.kY)(),{push:ss}=(0,V.k6)(),{formatAPIError:ts}=(0,E.So)(),_=(0,d.I0)(),D=(0,E.lm)(),{collectionTypes:A,singleTypes:W,isLoading:h}=(0,$.u)(),{isLoading:O,meta:u,workflows:L}=(0,J.u)(),{isLoading:C,roles:B}=(0,Q.u)(void 0,{retry:!1}),P=(0,d.v9)(o.s),es=(0,d.v9)(o.a),l=(0,d.v9)(o.b),y=(0,d.v9)(o.c),[K,f]=g.useState(!1),{isLoading:U,getFeature:os}=(0,G.u)(),[ns,as]=g.useState(null),[j,T]=g.useState({}),i=os("review-workflows"),p=L.flatMap(e=>e.contentTypes),{mutateAsync:is,isLoading:ls}=(0,z.useMutation)(async({workflow:e})=>{const{data:{data:r}}=await q("/admin/review-workflows/workflows",{data:e});return r},{onSuccess(){D({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}})}}),x=async()=>{T({});try{const e=await is({workflow:l});return ss(`/settings/review-workflows/${e.id}`),e}catch(e){return e.response.data?.error?.name==="ValidationError"&&e.response.data?.error?.details?.errors?.length>0&&as(e.response.data?.error?.details?.errors.reduce((r,S)=>(Y(r,S.path,S.message),r),{})),D({type:"warning",message:ts(e)}),null}},rs=async()=>{await x()},_s=()=>{T({})},w=(0,v.TA)({enableReinitialize:!0,initialErrors:ns,initialValues:l,async onSubmit(){const e=l.contentTypes.some(r=>p.includes(r));i?.[a.C]&&u?.workflowCount>=parseInt(i[a.C],10)?f("workflow"):i?.[a.a]&&l.stages.length>=parseInt(i[a.a],10)?f("stage"):e?T(r=>({...r,hasReassignedContentTypes:!0})):x()},validate(e){return(0,o.v)({values:e,formatMessage:n})}});return(0,o.u)(a.R,o.i),g.useEffect(()=>{_((0,o.r)()),O||_((0,o.d)({workflows:L})),h||_((0,o.e)({collectionTypes:A,singleTypes:W})),C||_((0,o.f)(B)),_((0,o.g)(h||C)),_((0,o.h)({name:""}))},[A,_,h,C,O,B,W,L]),g.useEffect(()=>{!O&&!U&&(i?.[a.C]&&u?.workflowsTotal>=parseInt(i[a.C],10)?f("workflow"):i?.[a.a]&&l.stages.length>=parseInt(i[a.a],10)&&f("stage"))},[U,O,i,u?.workflowsTotal,l.stages.length]),g.useEffect(()=>{!P&&y.length===0&&D({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,P,y,D]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.D,{}),(0,t.jsx)(v.Hy,{value:w,children:(0,t.jsxs)(v.l0,{onSubmit:w.handleSubmit,children:[(0,t.jsx)(c.H,{navigationAction:(0,t.jsx)(c.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(F.z,{startIcon:(0,t.jsx)(N.Z,{}),type:"submit",size:"M",disabled:!es,isLoading:ls,children:n({id:"global.save",defaultMessage:"Save"})}),title:n({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:l?.stages?.length??0})}),(0,t.jsx)(c.R,{children:(0,t.jsx)(m.k,{alignItems:"stretch",direction:"column",gap:7,children:P?(0,t.jsx)(H.a,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(m.k,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:w.values?.stages})]})})})]})}),(0,t.jsx)(E.QH.Root,{isConfirmButtonLoading:P,isOpen:Object.keys(j).length>0,onToggleDialog:_s,onConfirm:rs,children:(0,t.jsx)(E.QH.Body,{children:(0,t.jsxs)(m.k,{direction:"column",gap:5,children:[j.hasReassignedContentTypes&&(0,t.jsx)(I.Z,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:p.filter(e=>l.contentTypes.includes(e)).length})}),(0,t.jsx)(I.Z,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(M.L,{isOpen:K==="workflow",onClose:()=>f(!1),children:[(0,t.jsx)(M.T,{children:n({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(M.B,{children:n({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(M.L,{isOpen:K==="stage",onClose:()=>f(!1),children:[(0,t.jsx)(M.T,{children:n({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(M.B,{children:n({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}function b(){const n=(0,d.v9)(k.s);return(0,t.jsx)(E.O4,{permissions:n.settings["review-workflows"].create,children:(0,t.jsx)(X,{})})}}}]);
