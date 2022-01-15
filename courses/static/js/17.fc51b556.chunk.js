(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[17],{1213:function(e,a,n){"use strict";n.r(a);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"params"}],a=[{alias:null,args:[{kind:"Variable",name:"params",variableName:"params"}],concreteType:"Course",kind:"LinkedField",name:"searchCourses",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"credits",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"SearchCoursesQuery",selections:a,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"SearchCoursesQuery",selections:a},params:{cacheID:"83b6a2d036a3a676b1de911577394ba5",id:null,metadata:{},name:"SearchCoursesQuery",operationKind:"query",text:"query SearchCoursesQuery(\n  $params: SearchParams!\n) {\n  searchCourses(params: $params) {\n    id\n    title\n    number\n    credits\n  }\n}\n"}}}();t.hash="975ffe82564e408d18044ee2c4096bd5",a.default=t},1236:function(e,a,n){"use strict";n.r(a);n(466);var t,r=n(581),i=n.n(r),s=(n(308),n(310)),l=n.n(s),c=(n(309),n(311)),u=n.n(c),o=(n(320),n(329)),d=n.n(o),b=(n(384),n(358)),j=n.n(b),m=n(2),p=n(0),h=n(95),O=n(50),f=n(1206),y=(n(1207),n(41)),x=n(1238),v=n(1239),C=n(7),S=Object(h.b)({permissions:y.b.LOGIN_CPANEL,mapPropsToData:function(e){return e},noAccess:function(){return Object(C.jsx)("div",{})}})((function(){return Object(C.jsx)(f.b,{icon:Object(C.jsx)(x.a,{}),alwaysShowTitle:!0,children:Object(C.jsx)(O.b,{to:"/cpanel",children:Object(C.jsx)(f.a,{text:"Dashboard",children:Object(C.jsx)(v.a,{})})})})})),g=(n(348),n(88)),E=n.n(g),w=(n(459),n(106)),k=n.n(w),T=(n(1208),n(1210)),N=n.n(T),D=function(e){return Object(C.jsx)(l.a,{justify:"center",children:Object(C.jsxs)(u.a,{xs:24,md:12,children:[e.courseList.map((function(e){return Object(C.jsx)(N.a,{type:"inner",title:e.number,extra:Object(C.jsx)(O.b,{to:"/course/".concat(e.number),children:"More"}),style:{marginTop:"4vh"},children:"".concat(e.title," ").concat(e.credits)},e.id)})),0===e.courseList.length&&Object(C.jsx)(k.a,{title:"No Courses found!"})]})})},L=n(43),M=n(105),A=n(385),P=n(357),F=function(e){return Object(C.jsx)(A.QueryRenderer,{environment:P.a,query:void 0!==t?t:t=n(1213),variables:{params:{identifier:e.params}},render:function(e){var a=e.error,n=e.props;return a?(E.a.error("Unable to fetch Data!"),Object(C.jsx)(M.a,{id:500})):n?Object(C.jsx)(D,{courseList:n.searchCourses}):Object(C.jsx)(L.a,{})}})},K=n(1214),q=n(317);a.default=function(){var e=Object(p.useState)(""),a=Object(m.a)(e,2),n=a[0],t=a[1],r=Object(p.useState)(""),s=Object(m.a)(r,2),c=s[0],o=s[1],b=Object(p.useState)(""),h=Object(m.a)(b,2),O=h[0],f=h[1],y=Object(K.useDebounce)(O,500),x=Object(m.a)(y,1)[0];return Object(p.useEffect)((function(){document.title="Search | Courses | AnC",f("".concat(c).concat(n))}),[n,c]),Object(C.jsxs)(i.a,{style:{backgroundColor:"white",height:"100vh"},children:[Object(C.jsx)(S,{}),Object(C.jsx)(i.a.Content,{className:"site-layout",style:{padding:"0 50px",marginTop:64,marginBottom:64},children:Object(C.jsxs)("div",{className:"site-input-group-wrapper",children:[Object(C.jsx)(l.a,{justify:"center",children:Object(C.jsx)(u.a,{xs:24,md:12,children:Object(C.jsxs)(d.a.Group,{compact:!0,children:[Object(C.jsx)(j.a,{defaultValue:"Dept.",style:{width:"30%"},onChange:function(e){o(e),t("")},children:q.b.map((function(e){return Object(C.jsx)(j.a.Option,{value:e,children:e},e)}))}),Object(C.jsx)(d.a,{style:{width:"70%"},placeholder:"Course Code",allowClear:!0,value:n,onChange:function(e){return t(e.currentTarget.value)}})]})})}),Object(C.jsx)(F,{params:x})]})})]})}},317:function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return s}));var t={to_verify:{label:"Email",priority:100},csrf_token:{label:"",priority:100},"traits.email":{label:"Email",priority:90},email:{label:"Email",priority:80},identifier:{label:"Email",priority:80},password:{label:"Password",priority:80}},r=["AE","ART","BSE","CE","CHE","CHM","CS","CSO","DES","ECO","EE","EEM","ENG","ES","ESC","ESO","IME","PHY","LIF","LT","MBA","ME","MSE","MSO","MTH","NT","PHI","PHY","PSY","SE","SOC","TA"],i=[{value:"Even",label:"Even"},{value:"Odd",label:"Odd"}],s=[{value:"20-21",label:"20-21",children:i},{value:"19-20",label:"19-20",children:i},{value:"18-19",label:"18-19",children:i},{value:"17-18",label:"17-18",children:i}]},357:function(e,a,n){"use strict";var t=n(94),r=n.n(t),i=n(56),s=n(312),l=new s.Environment({network:s.Network.create((function(e,a){return r.a.post("".concat(i.b,"/.fiber/graphql"),JSON.stringify({query:e.text,variables:a}),{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){return e.data}))})),store:new s.Store(new s.RecordSource)});a.a=l}}]);
//# sourceMappingURL=17.fc51b556.chunk.js.map