(this["webpackJsonpwebhook-tester"]=this["webpackJsonpwebhook-tester"]||[]).push([[0],{131:function(e,a,t){e.exports=t(191)},136:function(e,a,t){},188:function(e,a){},191:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=(t(136),t(31)),i=t(34),m=t(73),s=t.n(m),u=t(106),d=t(16),p=t(239),b=t(252),g=t(23),E=t(251),h=t(247),f=t(249),v=t(248),k=t(242),y=t(245),O=t(108),j=t.n(O),w=t(244),C=t(246),x=Object(p.a)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{justifyContent:"space-between"},link:{margin:e.spacing(1,1.5)}}}));function N(){var e=x();return r.a.createElement(k.a,{position:"static",color:"default",elevation:1,className:e.appBar},r.a.createElement(w.a,{className:e.toolbar},r.a.createElement(y.a,{component:l.b,to:"/",edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(j.a,null)),r.a.createElement("nav",null,r.a.createElement(C.a,{component:l.b,to:"/about",variant:"button",color:"textPrimary",className:e.link},"About"),r.a.createElement(C.a,{href:"#",variant:"button",color:"textPrimary",className:e.link},"Status"),r.a.createElement(C.a,{component:l.b,to:"/contact",variant:"button",color:"textPrimary",className:e.link},"Contact"))))}var S=t(109),B=t.n(S);function P(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","Webhook Tester ",(new Date).getFullYear(),".")}var H=Object(p.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(3,2),marginTop:"auto"}}}));function T(){var e=H();return r.a.createElement("footer",{className:e.footer},r.a.createElement(g.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Built with ",r.a.createElement(B.a,{fontSize:"small"})," by ",r.a.createElement(C.a,{href:"https://dorianneto.com.br/",target:"_blank"},"Dorian Neto")),r.a.createElement(P,null))}var W=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"}}}));function A(e){var a=e.showLoadPage,t=W();return r.a.createElement("div",{className:t.root},r.a.createElement(h.a,null),r.a.createElement(v.a,{in:a},r.a.createElement(f.a,null)),r.a.createElement(N,null),e.children,r.a.createElement(T,null))}var D=t(268),F=t(270);function L(e){var a=e.description,t=e.open,n=e.onClose;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:t,autoHideDuration:4e3,onClose:n},r.a.createElement(D.a,{onClose:n,severity:"error"},a)))}var I=t(110),R=t.n(I).a.create({baseURL:"https://api-webhook-tester.herokuapp.com/"}),U=Object(p.a)((function(e){return{main:{marginBottom:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4),textAlign:"center"}}}));function q(){var e=Object(n.useState)(null),a=Object(d.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(d.a)(c,2),m=l[0],p=l[1],h=Object(n.useState)(!1),f=Object(d.a)(h,2),v=f[0],k=f[1],y=Object(i.f)(),O=U(),j=function(){p(!0)};function w(){return(w=Object(u.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,k(!0),e.next=5,R.post("/hooks");case 5:t=e.sent,y.push({pathname:"/in/".concat(t.data.token),state:{webhookGenerated:!0}}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),o(e.t0.toString()),k(!1),j();case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(A,{showLoadPage:v},r.a.createElement("main",{className:O.main},r.a.createElement("div",{className:O.heroContent},r.a.createElement(E.a,{maxWidth:"sm"},r.a.createElement(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Webhook Tester"),r.a.createElement(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Generate a unique URL and be able to debug as many as HTTP requests you need from any provider in real-time, through a clean and focused in what matters interface."),r.a.createElement("div",{className:O.heroButtons},r.a.createElement(b.a,{onClick:function(e){return w.apply(this,arguments)},variant:"contained",color:"primary",size:"large"},"Generate Webhook"))))),r.a.createElement(L,{description:t,open:m,onClose:function(e,a){"clickaway"!==a&&p(!1)}}))}var z=Object(p.a)((function(e){return{main:{marginBottom:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)}}}));function G(){var e=z();return r.a.createElement(A,null,r.a.createElement("main",{className:e.main},r.a.createElement("div",{className:e.heroContent},r.a.createElement(E.a,{maxWidth:"sm"},r.a.createElement(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"About"),r.a.createElement(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},r.a.createElement("strong",null,"Webhook Tester")," is an application with a clean and focused on what matters interface whose main goal is to make Webhooks debug easier, it doesn't matter the provider.")))))}var _=t(111),J=t.n(_),M=t(112),Q=t.n(M),Y=t(113),$=t.n(Y),K=Object(p.a)((function(e){return{main:{marginBottom:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},socialButtons:{marginTop:e.spacing(4),textAlign:"center"}}}));function V(){var e=K();return r.a.createElement(A,null,r.a.createElement("main",{className:e.main},r.a.createElement("div",{className:e.heroContent},r.a.createElement(E.a,{maxWidth:"sm"},r.a.createElement(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Contact"),r.a.createElement(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Do you want to talk about an error, a new feature, or even talk about a business opportunity?"),r.a.createElement(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Feel free to reach me out through these links:"),r.a.createElement("div",{className:e.socialButtons},r.a.createElement(y.a,{href:"https://github.com/dorianneto",target:"_blank"},r.a.createElement(J.a,null)),r.a.createElement(y.a,{href:"https://www.linkedin.com/in/dorianneto",target:"_blank"},r.a.createElement(Q.a,null)),r.a.createElement(y.a,{href:"https://dorianneto.com.br/",target:"_blank"},r.a.createElement($.a,null)))))))}var X=t(119),Z=t(253),ee=t(114),ae=t.n(ee),te=t(267),ne=t(115),re=t.n(ne),oe=t(257),ce=t(271),le=t(259),ie=t(255),me=t(256),se=t(254);function ue(e){var a=e.description,t=e.open,n=e.onClose;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:t,autoHideDuration:4e3,onClose:n},r.a.createElement(D.a,{onClose:n,severity:"success"},a)))}var de=Object(p.a)((function(e){return{fab:{position:"fixed",zIndex:99,bottom:e.spacing(2),right:e.spacing(2)},grid:{alignItems:"center"}}}));function pe(e){var a=e.token,t=Object(n.useState)(!1),o=Object(d.a)(t,2),c=o[0],l=o[1],i=Object(n.useState)(!1),m=Object(d.a)(i,2),s=m[0],u=m[1],p=de(),E=function(){l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{onClick:function(){l(!0)},className:p.fab,color:"primary"},r.a.createElement(ae.a,null)),r.a.createElement(ce.a,{open:c,onClose:E,fullWidth:!0,maxWidth:"sm"},r.a.createElement(se.a,{id:"alert-dialog-title"},"Settings"),r.a.createElement(ie.a,null,r.a.createElement(me.a,{id:"alert-dialog-description"},r.a.createElement(g.a,null,"Payload URL:"),r.a.createElement(oe.a,{container:!0,spacing:1},r.a.createElement(oe.a,{item:!0,xs:10},r.a.createElement(te.a,{id:"copy-webhook-target",className:p.margin,value:"".concat("https://api-webhook-tester.herokuapp.com/","/c/").concat(a),fullWidth:!0})),r.a.createElement(oe.a,{item:!0,xs:2},r.a.createElement(y.a,null,r.a.createElement(re.a,{color:"primary",onClick:function(e){e.preventDefault();var a=document.getElementById("copy-webhook-target");a.focus(),a.select(),document.execCommand("copy"),u(!0)}})))))),r.a.createElement(le.a,null,r.a.createElement(b.a,{onClick:E,color:"primary",autoFocus:!0},"Close"))),r.a.createElement(ue,{description:"Copied successfully!",open:s,onClose:function(e,a){"clickaway"!==a&&u(!1)}}))}var be=t(260),ge=t(261),Ee=t(262),he=t(272),fe=t(258),ve=t(263),ke=t(264),ye=t(265),Oe=t(116),je=t.n(Oe),we=t(117),Ce=t.n(we),xe=t(266),Ne=Object(p.a)((function(e){return{hidden:{display:"none"},nested:{margin:e.spacing(2,0),padding:e.spacing(0,4),display:"flex",flexDirection:"line",justifyContent:"space-between",alignItems:"center"},cardRoot:{margin:e.spacing(3)},cardHeader:{borderBottom:"1px solid ".concat(e.palette.divider)},cardHeaderAvatarGET:{backgroundColor:"rgb(172, 160, 242) !important"},cardHeaderAvatarPOST:{backgroundColor:"rgb(143, 200, 96) !important"},cardHeaderAvatarPATCH:{backgroundColor:"rgb(229, 202, 30) !important"},cardHeaderAvatarPUT:{backgroundColor:"rgb(249, 162, 48) !important"},cardHeaderAvatarDELETE:{backgroundColor:"rgb(240, 109, 107) !important"}}}));function Se(e){var a=Ne(),t=Object(n.useState)(!1),o=Object(d.a)(t,2),c=o[0],l=o[1],i=e.data,m=i.id,s=i.method,u=i.body,p=i.query,b=i.headers,E=i.updatedAt;b=b?Object.entries(b):[],p=p?new URLSearchParams(Object.entries(p)).toString():null,u=u?JSON.stringify(u):null;return r.a.createElement(be.a,{className:a.cardRoot},r.a.createElement(ge.a,{className:a.cardHeader,avatar:r.a.createElement(he.a,{className:a["cardHeaderAvatar".concat(s)],label:s}),title:"ID: ".concat(m),subheader:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}).format(E)}),r.a.createElement(Ee.a,{className:a.tabRoot},r.a.createElement(fe.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:a.root},r.a.createElement(ve.a,{className:u?null:a.hidden},r.a.createElement(ke.a,{primary:"Body",secondary:u})),r.a.createElement(ve.a,{className:p?null:a.hidden},r.a.createElement(ke.a,{primary:"Query",secondary:p})),r.a.createElement(ve.a,{button:!0,onClick:function(){l(!c)}},r.a.createElement(ke.a,{primary:"Headers"}),c?r.a.createElement(je.a,null):r.a.createElement(Ce.a,null)),r.a.createElement(ye.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(fe.a,{component:"div",disablePadding:!0},b.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{className:a.nested},r.a.createElement(he.a,{label:e[0]}),r.a.createElement(g.a,{component:"div"},e[1])),r.a.createElement(xe.a,null))})))))))}var Be=t(118),Pe=t.n(Be)()("https://api-webhook-tester.herokuapp.com/",{autoConnect:!1}),He=Object(p.a)((function(e){return{main:{marginBottom:e.spacing(2)}}}));function Te(){var e=Object(n.useState)(null),a=Object(d.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(d.a)(c,2),m=l[0],s=l[1],u=Object(n.useState)([]),p=Object(d.a)(u,2),b=p[0],g=p[1],E=Object(n.useState)([]),h=Object(d.a)(E,2),f=h[0],v=h[1],k=Object(n.useState)(!0),y=Object(d.a)(k,2),O=y[0],j=y[1],w=He(),C=Object(i.g)().token;return Object(n.useEffect)((function(){Pe.connected&&Pe.disconnect(),function(e){Pe.io.opts.query={token:e},Pe.connect()}(C),R.get("/c/".concat(C)).then((function(e){g(e.data.data),j(!1)})).catch((function(e){o(e.toString()),j(!1),s(!0)}))}),[]),Object(n.useEffect)((function(){var e,a;e="new-request",a=function(e){v(e),j(!0)},Pe.on(e,a)}),[]),Object(n.useEffect)((function(){g([f].concat(Object(X.a)(b))),j(!1)}),[f]),r.a.createElement(A,{showLoadPage:O},r.a.createElement("main",{className:w.main},r.a.createElement(pe,{token:C}),b.map((function(e){return r.a.createElement(Se,{data:e})}))),r.a.createElement(L,{description:t,open:m,onClose:function(e,a){"clickaway"!==a&&s(!1)}}))}var We=function(){return r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/in/:token"},r.a.createElement(Te,null)),r.a.createElement(i.a,{path:"/contact"},r.a.createElement(V,null)),r.a.createElement(i.a,{path:"/about"},r.a.createElement(G,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.4312a781.chunk.js.map