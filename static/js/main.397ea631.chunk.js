(this.webpackJsonpadotapatas=this.webpackJsonpadotapatas||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/home-page.d91af8a3.png"},46:function(e,a,t){e.exports=t.p+"static/media/dog-woody.e91e5196.JPG"},47:function(e,a,t){e.exports=t.p+"static/media/dog-meg.ce017cce.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/cat-miguel.359a6529.jpg"},57:function(e,a,t){e.exports=t(71)},62:function(e,a,t){},63:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(19),c=t.n(o),l=(t(62),t(63),t(22)),i=t(16),s=t(24),m=t(14),u=t(25),p=t(26),d=t(29),g=t(50),h=t(31),E=t(105),f=t(90),b=t(92),v=t(93),w=t(94),N=t(91),x=t(30),y=Object(f.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},header:{backgroundColor:N.a[400]},button:{color:x.a[50],textDecoration:"none"}}}));function j(){var e=y();return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{position:"fixed",className:e.header},r.a.createElement(v.a,null,r.a.createElement(h.a,{variant:"h6"},"AdotaPatas"),r.a.createElement(h.a,{className:e.title}),r.a.createElement(l.b,{to:"/pets",className:e.button},r.a.createElement(w.a,{color:"inherit"},"Pets")),r.a.createElement(w.a,{color:"inherit",edge:"end"},"Produtos"),r.a.createElement(l.b,{to:"/portal",className:e.button},r.a.createElement(w.a,{color:"inherit"},"\xc1rea Pets")))))}var P=t(95),M=t(45),k=t.n(M),G=Object(f.a)((function(e){return{root:{flexGrow:1,marginLeft:15*e.spacing.unit,marginRight:15*e.spacing.unit,marginTop:2*e.spacing.unit},space:{flexGrow:1},header:{backgroundColor:P.a[600]},title:{color:x.a[900]},toolbar:{marginLeft:5*e.spacing.unit,marginRight:5*e.spacing.unit}}}));function O(){var e=G();return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{position:"static",className:e.header},r.a.createElement(v.a,{className:e.toolbar},r.a.createElement(h.a,{variant:"h7",className:e.title},"Encontre seu Melhor Amigo"),r.a.createElement(h.a,{className:e.space}),r.a.createElement(w.a,null,r.a.createElement(k.a,null)))))}var C=t(97),A=t(100),J=t(102),R=t(101),q=t(4),B=t(46),T=t.n(B),W=t(47),F=t.n(W),L=t(28),S=t.n(L),D=t(48),U=t.n(D),H=t(99),I=t(98),$=t(103),z=t(104),K=t(96),Q=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={amountAnimals:"10 mil",isFemale:!0,page:0,rowsPerPage:10,pets:[{name:"Woody",image:T.a,description:"Labrador branco muito brincalh\xe3o de 4 meses. S\xe3o Paulo - SP.",gender:"M",type:"Cachorro de Grande Porte"},{name:"Meggy",image:F.a,description:"Muito tranquila e carinhosa de 1 ano. Rio de Janeiro - RJ.",gender:"F",type:"Cachorra de Pequeno Porte"},{name:"Miguel",image:U.a,description:"Muito brincalh\xe3o de 2 ano. Rio de Janeiro - RJ.",gender:"M",type:"Gato de Pequeno Porte"}]},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"popUp",value:function(){alert("ADOTAR")}},{key:"whichGender",value:function(e){this.state.isFemale="M"!=e}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,n=t.pets,o=t.rowsPerPage,c=t.page;return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:a.root},r.a.createElement(g.a,{square:!0,className:a.main},r.a.createElement(v.a,null,r.a.createElement("img",{src:S.a,height:"300"}),r.a.createElement(h.a,{className:a.spaceMain}),r.a.createElement(h.a,{variant:"h4",className:a.titleMain},r.a.createElement("b",null," ",this.state.amountAnimals),r.a.createElement("br",null),"  pets buscando um lar"))),r.a.createElement(O,null)),r.a.createElement("div",{className:a.grid},r.a.createElement(K.a,{cellHeight:360,cols:"3"},n.slice(c*o,c*o+o).map((function(t){return e.whichGender(t.gender),r.a.createElement(E.a,null,r.a.createElement(C.a,{className:a.card,onClick:e.popUp},r.a.createElement(I.a,{avatar:r.a.createElement(H.a,{"aria-label":"recipe",className:e.state.isFemale?a.female:a.male},t.gender),title:t.type}),r.a.createElement(A.a,null,r.a.createElement(R.a,{className:a.media,image:t.image,title:t.name}),r.a.createElement(J.a,null,r.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},t.description)))))})),";")))}}]),a}(n.Component),V=Object(q.a)((function(e){return{root:{width:"100%",marginTop:10*e.spacing.unit,marginBottom:3*e.spacing.unit,flexGrow:1},card:{marginTop:2*e.spacing.unit,marginLeft:2*e.spacing.unit,maxWidth:345},media:{height:140},female:{backgroundColor:$.a[400]},male:{backgroundColor:z.a[400]},grid:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},main:{flexGrow:1},spaceMain:{flexGrow:1},titleMain:{color:x.a[600]}}}))(Q),X=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{square:!0,className:e.main},r.a.createElement(v.a,null,r.a.createElement("img",{src:S.a,height:"300",alt:"AdotaPatas"}),r.a.createElement(h.a,{className:e.spaceMain}),r.a.createElement(h.a,{variant:"h4",className:e.titleMain},r.a.createElement("b",null," Compartilhe com a gente"),r.a.createElement("br",null)," eventos, not\xedcias e dicas!")))))}}]),a}(n.Component),Y=Object(q.a)((function(e){return{root:{width:"100%",marginTop:10*e.spacing.unit,marginBottom:3*e.spacing.unit,flexGrow:1},main:{flexGrow:1},spaceMain:{flexGrow:1},titleMain:{color:x.a[600]}}}))(X);var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:V}),r.a.createElement(i.a,{path:"/pets",exact:!0,component:V}),r.a.createElement(i.a,{path:"/portal",exact:!0,component:Y})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.397ea631.chunk.js.map