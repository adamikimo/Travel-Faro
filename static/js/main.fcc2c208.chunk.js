(this["webpackJsonptravel-faro-site-template-two"]=this["webpackJsonptravel-faro-site-template-two"]||[]).push([[0],{153:function(e,t,a){},194:function(e,t,a){},213:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(58),i=a.n(s),o=(a(95),a(4)),l=a(34),j=a(14),d=a(6),b=a.n(d),u=a(11),x=(a(194),function(e){var t=e.bgImg,a=e.cardText,n=e.onClick;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"card",onClick:n,children:[Object(c.jsx)("img",{src:t,className:"card__img",alt:"this is the card img"}),Object(c.jsx)("h2",{className:"card__text",children:a})]})})}),h=a(355),O=a(157),m=a.n(O),p=a(156),f=a.n(p),g=a(155),v=a.n(g).a.create({baseURL:"https://travel-faro.herokuapp.com"}),y=(a(213),function(e){var t=e.Slides,a=Object(n.useState)(0),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)([]),j=Object(o.a)(l,2),d=j[0],x=j[1],O=t.length;return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/caroselImages");case 2:t=e.sent,x(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{className:"carosel",children:[Object(c.jsx)(h.a,{className:"carosel__button",onClick:function(){i(0===s?O-1:s-1)},style:{backgroundColor:"transparent"},children:Object(c.jsx)(f.a,{style:{color:"#fff"},fontSize:"large"})}),d.map((function(e,t){return Object(c.jsx)("div",{className:t===s?"slide active":"slide",children:t===s&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{className:"carosel__img",alt:"img id is ".concat(e.id),src:e.url},e._id),Object(c.jsx)("h1",{className:"carosel__img__text",children:e.text})]})},t)})),Object(c.jsx)(h.a,{className:"carosel__button",onClick:function(){i(s===O-1?0:s+1)},style:{backgroundColor:"transparent"},children:Object(c.jsx)(m.a,{style:{color:"#fff"},fontSize:"large"})})]})}),k=(a(96),function(){return Object(c.jsxs)("div",{className:"footer__links",children:[Object(c.jsx)(l.b,{to:"/",className:"footer__links__link",children:"Home"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(l.b,{to:"/porque travel faro",className:"footer__links__link",children:"Porque Travel Faro"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(l.b,{to:"/excurtions",className:"footer__links__link",children:"Excursiones"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(l.b,{to:"/servesiones",className:"footer__links__link",children:"Paquetes"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(l.b,{to:"/Paquetes",className:"footer__links__link",children:"Traslados"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(l.b,{to:"/contactenos",className:"footer__links__link",children:"Cont\xe1ctenos"})]})}),N=a(158),C=a.n(N),_=a(159),w=a.n(_),S=a(160),F=a.n(S),A=a(161),T=a.n(A),q=a(162),D=a.n(q),E=a(163),z=a.n(E),U=function(){return Object(c.jsxs)("div",{className:"footer__socialIcons",children:[Object(c.jsx)(C.a,{fontSize:"large"}),Object(c.jsx)(w.a,{fontSize:"large"}),Object(c.jsx)(F.a,{fontSize:"large"}),Object(c.jsx)(T.a,{fontSize:"large"}),Object(c.jsx)(D.a,{fontSize:"large"}),Object(c.jsx)(z.a,{fontSize:"large"})]})},B=function(e){e.posType;var t=e.bottom;return Object(c.jsx)("div",{className:"footer",style:{backgroundImage:"url(https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHlyYW1pZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",position:"absolute",bottom:"".concat(t)},children:Object(c.jsxs)("div",{className:"footer__body",children:[Object(c.jsx)(k,{}),Object(c.jsx)("div",{className:"elfsight-app-2cb3a513-a52e-4a49-b374-76bb36729855 weather__news"}),Object(c.jsx)(U,{}),Object(c.jsx)("img",{className:"footer__allCopyRightsReserved",src:"/Footer.png",alt:""})]})})},R=a(25),V=a.n(R),M=(a(44),a(219),function(e){var t=e.children;return Object(c.jsx)("div",{className:"cardDetails",children:t})}),Z=function(e){var t=e.onClick,a=Object(n.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)([]),j=Object(o.a)(l,2),d=j[0],O=j[1],m=Object(n.useState)([]),p=Object(o.a)(m,2),f=p[0],g=p[1],k=Object(n.useState)(!1),N=Object(o.a)(k,2),C=N[0],_=N[1],w=Object(n.useState)(0),S=Object(o.a)(w,2),F=S[0],A=S[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cards/home");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/caroselImages");case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cardDetails/home");case 2:t=e.sent,g(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[]),!1===C?Object(c.jsxs)("div",{onClick:t,className:"home",children:[Object(c.jsx)(y,{Slides:d}),Object(c.jsx)("div",{className:"cards",children:s.map((function(e,t){return Object(c.jsx)(x,{bgImg:e.url,cardText:e.text,onClick:function(){A(t),_(!0)}},e._id)}))}),Object(c.jsx)(B,{bottom:"-450%"})]}):Object(c.jsxs)(M,{children:[Object(c.jsx)(h.a,{className:"cardDetails__backBtn",onClick:function(){_(!1)},children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("img",{className:"cardDetails__img",src:f[F].imgUrl,alt:""}),Object(c.jsx)("h1",{className:"cardDetails__title",children:f[F].title}),f[F].innerCardText?Object(c.jsx)("h2",{className:"overview",children:f[F].innerCardText}):""]})},H=(a(220),function(e){var t=e.onClick;return Object(c.jsx)("div",{onClick:t,className:"transportaitions"})}),I=(a(221),[{text:"es una agencia de turismo receptivo en Egipto, fundada en el ano 2003 con el objetivo de realizar los mejores viajes a este maravilloso pais, logrando ser una de las agencias notables durante los ultimos anos con reconocimiento a nivel internacional"},{text:"es una de las agencias que tienen gran impacto en el campo turistico desde hace de 15 a\xf1os de experiencia para realizar el sueno del viajero con un itinerario tan perfecto y con el servicio que lo merece y lo esperaba  y con gu\xedas tur\xedsticos profesionales que le acompa\xf1ar\xe1 en todos los lugares turisticos"},{text:"es fruto de la uni\xf3n de expriencia de un equipo de jovenes de habla de viarias idiomas para facilitar a los clients la media de comunicarse antes, mientras y despues de su viaje., y el gran fin nuestro es que el cliente pasa un viaje inolvidable y de primera conociendo grandes civilizaciones del mundo ,volviendo a su casa con toda la satisfaccion de lo cual. "},{text:"con objetivo de poder brindarles el mejor servicio y calidad, a precios accesibles para lograr las expectativas de su viaje cual sea en los exoticos destinos"},{text:"actualmente cuenta con un equipo , joven y comprometido en ofrecer el mejor servicio para viajes individuales, VIP, religiosos, grupales y de incentivo para empresas, con la calidad que siempre nos ha distinguido en el mercado; ajustandonos a las necesidades de cada cliente."},{text:"es una empresa constituida con toda la experiencia necesaria para el turismo a nivel mundial y claro recebimos clientes de todas las nacionalidade de donde sea"},{text:"cuenta con unidades vehiculares de calidad, asi como con choferes totalmente capacitados y amables.Nuestros guias locales manejan perfectamente el idioma espanol y estan siempre pendientes del confort y necesidades del cliente. logrando con esto la identificacion del cliente con nuestro equipo de trabajo quien los recibe en los varios destinos con los brazos abiertos, en espera de que su viaje sea inolvidable"},{text:"con la luz que te orienta a las costas de los mejores destinos"},{text:"ofrece servicio al cliente durante las 24 horas del d\xeda, los 7 d\xedas de la semana por tel\xe9fono y correo electr\xf3nico si tiene preguntas sobre nuestros tours y servicios "}]),L=function(e){var t=e.onClick;return Object(c.jsxs)("div",{onClick:t,className:"aboutFaro",children:[Object(c.jsx)("img",{src:"http://travelfaro.com/images/About.jpg",alt:"about faro img",className:"aboutFaro__img"}),Object(c.jsx)("div",{className:"aboutFaro__title",children:"PORQUE TRAVEL FARO"}),Object(c.jsx)("hr",{}),I.map((function(e,t){return Object(c.jsxs)("div",{className:"aboutFaro__paragraph",children:[Object(c.jsx)("h2",{className:"aboutFaro__paragragh__Title",children:"Travel\xa0Faro\xa0"}),Object(c.jsx)("h3",{className:"aboutFaro__paragragh__Text",children:e.text},t)]})})),Object(c.jsx)(B,{})]})},P=a(349),Y=a(357),W=a(351),J=a(353),G=a(356),K=a(179),Q=a(57),X=function(){var e=Q.b().shape({UserName:Q.c().min(8,"minimo para escribir aqui de letras o caracteras ".concat(8)),Email:Q.c().email().required("Se necesita escribir e-mail"),Telephone:Q.a().positive(),Mobile:Q.a().positive(),Message:Q.c()});return Object(c.jsx)(P.a,{children:Object(c.jsx)(K.a,{onSubmit:function(){return console.log("submitted")},initialValues:{UserName:"",Email:"",Telephone:"",Mobile:"",Message:"",Nacionalidad:""},validationSchema:e,children:function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange,s=e.handleBlur,i=e.handleSubmit,o=e.isSubmitting;return Object(c.jsx)("form",{onSubmit:i,children:Object(c.jsxs)(Y.a,{spacing:0,justifyContent:"space-evenly",display:"flex",height:"666px",children:[Object(c.jsx)(W.a,{placeholder:"Nombre y apellido",name:"UserName",width:"400px",border:"2.5px solid",borderColor:"black",type:"text",onChange:r,onBlur:s,value:t.UserName,"aria-label":"UserName"}),Object(c.jsx)(W.a,{width:"400px","aria-label":"Nacionalidad",name:"Nacionalidad",placeholder:"Nacionalidad",border:"2.5px solid",borderColor:"black",type:"text",onChange:r,onBlur:s,value:t.Nacionalidad}),Object(c.jsx)(W.a,{width:"400px","aria-label":"Telephone",name:"Telephone",placeholder:"Numero de Tel.",border:"2.5px solid",borderColor:"black",type:"text",onChange:r,onBlur:s,value:t.Telephone}),Object(c.jsx)(W.a,{name:"Mobile",width:"400px",placeholder:"Celular",border:"2.5px solid",borderColor:"black",type:"text","aria-label":"Mobile",onChange:r,onBlur:s,value:t.Mobile}),Object(c.jsx)(W.a,{placeholder:"Correo electronico",width:"400px",name:"Email",border:"2.5px solid",borderColor:"black",type:"email",required:!0,onChange:r,onBlur:s,value:t.Email,"aria-label":"Email"}),Object(c.jsx)(P.a,{p:"0px",m:"0px",fontSize:"20px",color:"red",children:a.Email&&n.Email&&a.Email}),Object(c.jsx)(J.a,{resize:"none",height:"222px",placeholder:"Mensaje",border:"2.5px solid","aria-label":"Message",borderColor:"black",name:"Message",onChange:r,onBlur:s,value:t.Message}),Object(c.jsx)(G.a,{justifySelf:"center",alignSelf:"center",color:"dodgerblue",variant:"outlined",width:"100px",border:"2.5px solid",borderColor:"black",type:"submit",disabled:o,isLoading:o,className:"focus:border-0 transition duration-500 outline-none focus:outline-none",children:"Enviar"})]})})}})})},$=(a(320),function(e){var t=e.onClick;return Object(c.jsxs)("div",{onClick:t,className:"contactUs",children:[Object(c.jsxs)("div",{className:"contactUs__address-data",children:["Direcion\xa0\xa0\xa0:\xa001 El Rabie St. Hadaiek El Ahram, Behind Meridien Pyramids Hotel, Giza, Egypt",Object(c.jsx)("br",{}),"Tel.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0+202 33 77 91 74 & +202 33 77 75 45 & +202 33 77 75 46",Object(c.jsx)("br",{}),"Fax.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0+202 33 77 91 75",Object(c.jsx)("br",{}),"E-mail\xa0\xa0\xa0\xa0\xa0\xa0:\xa0info@travelfaro.com"]}),Object(c.jsx)("img",{className:"contactUs__img",src:"/contactenos.jpg",alt:"contactenos"}),Object(c.jsx)(X,{}),Object(c.jsx)(B,{bottom:"-80%"})]})}),ee=(a(66),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(0),O=Object(o.a)(d,2),m=O[0],p=O[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),y=g[0],k=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cards/excurtions/elCairo");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cardDetails/excurtions/elcairo");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),!1===y?Object(c.jsx)("div",{className:"common__Excurtion",children:a.map((function(e,t){return Object(c.jsx)(x,{bgImg:e.url,cardText:e.text,onClick:function(){p(t),k(!0)}},e._id)}))}):Object(c.jsxs)(M,{children:[Object(c.jsx)(h.a,{className:"cardDetails__backBtn",onClick:function(){k(!1)},children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("img",{className:"cardDetails__img",src:l[m].imgUrl,alt:""}),Object(c.jsx)("h1",{className:"cardDetails__title",children:l[m].title}),l[m].innerCardText?Object(c.jsx)("h2",{className:"overview",children:l[m].innerCardText}):""]})}),te=(a(153),function(e){var t=e.path,a=e.Icon,n=e.Title,r=e.onClick;return Object(c.jsx)(l.b,{to:t||"",className:"sidebarRow",onClick:r,children:Object(c.jsxs)("div",{className:"sidebarRow__body",children:[Object(c.jsx)("div",{className:"sidebarRow__icon",children:a}),Object(c.jsx)("h3",{className:"sidebarRow__title",children:n})]})})}),ae=a(171),ce=a.n(ae),ne=a(172),re=a.n(ne),se=a(175),ie=a.n(se),oe=a(176),le=a.n(oe),je=a(173),de=a.n(je),be=a(174),ue=a.n(be),xe=(a(321),function(e){var t=e.visible,a=e.onClick,r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"sidebar ".concat(t),children:[Object(c.jsx)(te,{path:"/",Icon:Object(c.jsx)(ce.a,{}),Title:"Home",onClick:a}),Object(c.jsx)(te,{path:"/porque travel faro",Icon:Object(c.jsx)(re.a,{}),Title:"Porque Travel Faro",onClick:a}),Object(c.jsx)("div",{className:"excurtions__sidebarRows",children:Object(c.jsx)("div",{className:"sidebarRow",style:{cursor:"pointer"},onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:Object(c.jsxs)("div",{className:"sidebarRow__body",children:[Object(c.jsx)("div",{className:"sidebarRow__icon",children:Object(c.jsx)(de.a,{})}),Object(c.jsx)("h3",{className:"sidebarRow__title",children:"Excurtions"})]})})}),Object(c.jsx)(te,{path:"/Paquetes",Icon:Object(c.jsx)(ue.a,{}),Title:"Paquetes",onClick:a}),Object(c.jsx)(te,{path:"/transportations",Icon:Object(c.jsx)(ie.a,{}),Title:"Traslados",onClick:a}),Object(c.jsx)(te,{path:"/contactenos",Icon:Object(c.jsx)(le.a,{}),Title:"Contactenos",onClick:a})]}),Object(c.jsxs)("div",{className:"excurtions__sidebar ".concat(!1===i?"hidden":"block"),onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},onClick:a,children:[Object(c.jsx)(te,{path:"/cards/excurtions/elCairo",Title:"El Cairo",onClick:function(){return l(!1)}}),Object(c.jsx)(te,{Title:"Aswan",path:"/cards/excurtions/aswan",onClick:function(){return l(!1)}}),Object(c.jsx)(te,{Title:"Hurgada",path:"/cards/excurtions/hurgada",onClick:function(){return l(!1)}}),Object(c.jsx)(te,{Title:"Luxor",path:"/cards/excurtions/luxor",onClick:function(){return l(!1)}}),Object(c.jsx)(te,{Title:"Sharm El Sheikh",path:"/cards/excurtions/sharmElSheikh",onClick:function(){return l(!1)}})]})]})}),he=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(0),O=Object(o.a)(d,2),m=O[0],p=O[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),y=g[0],k=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cards/excurtions/aswan");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cardDetails/excurtions/aswan");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),!1===y?Object(c.jsx)("div",{className:"common__Excurtion",children:a.map((function(e,t){return Object(c.jsx)(x,{bgImg:e.url,cardText:e.text,onClick:function(){p(t),k(!0)}},e._id)}))}):Object(c.jsxs)(M,{children:[Object(c.jsx)(h.a,{className:"cardDetails__backBtn",onClick:function(){k(!1)},children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("img",{className:"cardDetails__img",src:l[m].imgUrl,alt:""}),Object(c.jsx)("h1",{className:"cardDetails__title",children:l[m].title}),l[m].innerCardText?Object(c.jsx)("h2",{className:"overview",children:l[m].innerCardText}):""]})},Oe=a(178),me=a.n(Oe),pe=a(177),fe=a.n(pe),ge=(a(322),function(e){var t=e.onClick,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1];return Object(c.jsxs)("div",{className:"Search",children:[Object(c.jsx)("input",{className:"Search__input",value:s,placeholder:"Buscar",onChange:function(e){return i(e.target.value)}}),Object(c.jsx)(h.a,{className:"Search__btn",onClick:t,children:Object(c.jsx)(fe.a,{})})]})}),ve=(a(323),function(e){var t=e.onClickIconButton;return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header__left-part",children:[Object(c.jsx)("img",{className:"header__logo",src:"/logo-travel-faro.jpg",alt:"logo"}),Object(c.jsx)(h.a,{className:"header__humburgerIcon",onClick:t,children:Object(c.jsx)(me.a,{fontSize:"large"})})]}),Object(c.jsx)(ge,{}),Object(c.jsxs)("div",{className:"header__iataEtaaLogos",children:[Object(c.jsx)("img",{className:"header__Logo",src:"data:image/png;base64,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",alt:""}),Object(c.jsx)("img",{className:"header__LogoTwo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LT8L61eL2sypUwfeY3NyNiTxOp2CGC0v4g&usqp=CAU",alt:""})]})]})}),ye=(a(324),function(e){var t=e.onClick;return Object(c.jsx)("div",{onClick:t,className:"chats",children:Object(c.jsxs)("div",{className:"chats__input",children:[Object(c.jsx)("input",{type:"text",className:"chats__input__input"}),Object(c.jsx)("button",{className:"chats__input__btn",type:"submit",children:"send"})]})})}),ke=(a(325),function(e){var t=e.onClick,a=Object(n.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)([]),j=Object(o.a)(l,2),d=j[0],O=j[1],m=Object(n.useState)(!1),p=Object(o.a)(m,2),f=p[0],g=p[1],y=Object(n.useState)(0),k=Object(o.a)(y,2),N=k[0],C=k[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cards/packages");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cardDetails/packages");case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),!1===f?Object(c.jsx)("div",{onClick:t,className:"packages",children:s.map((function(e,t){return Object(c.jsx)(x,{bgImg:e.url,cardText:e.text,onClick:function(){g(!0),C(t)}},e._id)}))}):Object(c.jsxs)(M,{children:[Object(c.jsx)(h.a,{className:"cardDetails__backBtn",onClick:function(){g(!1)},children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("img",{className:"cardDetails__img",src:d[N].imgUrl,alt:""}),Object(c.jsx)("h1",{className:"cardDetails__title",children:d[N].title}),d[N].innerCardText?Object(c.jsx)("h2",{className:"overview",children:d[N].innerCardText}):"",Object(c.jsxs)("div",{className:"itenary",children:[d[N].itenary.day1.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day1:"}),Object(c.jsx)("h1",{children:d[N].itenary.day1.title})]}):"",d[N].itenary.day1.description?Object(c.jsx)("h2",{children:d[N].itenary.day1.description}):"",d[N].itenary.day2.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day2:"}),Object(c.jsx)("h1",{children:d[N].itenary.day2.title})]}):"",d[N].itenary.day2.description?Object(c.jsx)("h2",{children:d[N].itenary.day2.description}):"",d[N].itenary.day3.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day3:"}),Object(c.jsx)("h1",{children:d[N].itenary.day3.title})]}):"",d[N].itenary.day3.description?Object(c.jsx)("h2",{children:d[N].itenary.day3.description}):"",d[N].itenary.day4.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day4:"}),Object(c.jsx)("h1",{children:d[N].itenary.day4.title})]}):"",d[N].itenary.day4.description?Object(c.jsx)("h2",{children:d[N].itenary.day4.description}):"",d[N].itenary.day5.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day5:"}),Object(c.jsx)("h1",{children:d[N].itenary.day5.title})]}):"",d[N].itenary.day5.description?Object(c.jsx)("h2",{children:d[N].itenary.day5.description}):"",d[N].itenary.day6.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day6:"}),Object(c.jsx)("h1",{children:d[N].itenary.day6.title})]}):"",d[N].itenary.day6.description?Object(c.jsx)("h2",{children:d[N].itenary.day6.description}):"",d[N].itenary.day7.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day7:"}),Object(c.jsx)("h1",{children:d[N].itenary.day7.title})]}):"",d[N].itenary.day7.description?Object(c.jsx)("h2",{children:d[N].itenary.day7.description}):"",d[N].itenary.day8.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day8:"}),Object(c.jsx)("h1",{children:d[N].itenary.day8.title})]}):"",d[N].itenary.day8.description?Object(c.jsx)("h2",{children:d[N].itenary.day8.description}):"",d[N].itenary.day9.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day9:"}),Object(c.jsx)("h1",{children:d[N].itenary.day9.title})]}):"",d[N].itenary.day9.description?Object(c.jsx)("h2",{children:d[N].itenary.day9.description}):"",d[N].itenary.day10.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day10:"}),Object(c.jsx)("h1",{children:d[N].itenary.day10.title})]}):"",d[N].itenary.day10.description?Object(c.jsx)("h2",{children:d[N].itenary.day10.description}):"",d[N].itenary.day11.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day11:"}),Object(c.jsx)("h1",{children:d[N].itenary.day11.title})]}):"",d[N].itenary.day11.description?Object(c.jsx)("h2",{children:d[N].itenary.day11.description}):"",d[N].itenary.day12.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Day12:"}),Object(c.jsx)("h1",{children:d[N].itenary.day12.title})]}):"",d[N].itenary.day12.description?Object(c.jsx)("h2",{children:d[N].itenary.day12.description}):""]})]})}),Ne=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(0),O=Object(o.a)(d,2),m=O[0],p=O[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),y=g[0],k=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cards/excurtions/luxor");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cardDetails/excurtions/luxor");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),!1===y?Object(c.jsx)("div",{className:"common__Excurtion",children:a.map((function(e,t){return Object(c.jsx)(x,{bgImg:e.url,cardText:e.text,onClick:function(){p(t),k(!0)}},e._id)}))}):Object(c.jsxs)(M,{children:[Object(c.jsx)(h.a,{className:"cardDetails__backBtn",onClick:function(){k(!1)},children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("img",{className:"cardDetails__img",src:l[m].imgUrl,alt:""}),Object(c.jsx)("h1",{className:"cardDetails__title",children:l[m].title}),l[m].innerCardText?Object(c.jsx)("h2",{className:"overview",children:l[m].innerCardText}):""]})},Ce=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(0),O=Object(o.a)(d,2),m=O[0],p=O[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),y=g[0],k=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cards/excurtions/hurgada");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cardDetails/excurtions/hurgada");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),!1===y?Object(c.jsx)("div",{className:"common__Excurtion",children:a.map((function(e,t){return Object(c.jsx)(x,{bgImg:e.url,cardText:e.text,onClick:function(){p(t),k(!0)}},e._id)}))}):Object(c.jsxs)(M,{children:[Object(c.jsx)(h.a,{className:"cardDetails__backBtn",onClick:function(){k(!1)},children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("img",{className:"cardDetails__img",src:l[m].imgUrl,alt:""}),Object(c.jsx)("h1",{className:"cardDetails__title",children:l[m].title}),l[m].innerCardText?Object(c.jsx)("h2",{className:"overview",children:l[m].innerCardText}):""]})},_e=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(0),O=Object(o.a)(d,2),m=O[0],p=O[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),y=g[0],k=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cards/excurtions/sharmElSheikh");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/cardDetails/excurtions/sharm");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),!1===y?Object(c.jsx)("div",{className:"common__Excurtion",children:a.map((function(e,t){return Object(c.jsx)(x,{bgImg:e.url,cardText:e.text,onClick:function(){p(t),k(!0)}},e._id)}))}):Object(c.jsxs)(M,{children:[Object(c.jsx)(h.a,{className:"cardDetails__backBtn",onClick:function(){k(!1)},children:Object(c.jsx)(V.a,{fontSize:"large"})}),Object(c.jsx)("img",{className:"cardDetails__img",src:l[m].imgUrl,alt:""}),Object(c.jsx)("h1",{className:"cardDetails__title",children:l[m].title}),l[m].innerCardText?Object(c.jsx)("h2",{className:"overview",children:l[m].innerCardText}):""]})},we=(a(326),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),d=(i[0],i[1],function(){r(!1)});return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(ve,{onClickIconButton:function(){r(!1===a)}}),Object(c.jsxs)("div",{className:"app",onClick:d,children:[Object(c.jsx)(xe,{visible:!1===a?"hidden":"block",onClick:function(){return r(!1)}}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",render:function(){return Object(c.jsx)(Z,{onClick:d})},exact:!0}),Object(c.jsx)(j.a,{path:"/cards/excurtions/aswan",component:he}),Object(c.jsx)(j.a,{path:"/transportations",render:function(){return Object(c.jsx)(H,{onClick:d})}}),Object(c.jsx)(j.a,{path:"/porque travel faro",render:function(){return Object(c.jsx)(L,{onClick:d})}}),Object(c.jsx)(j.a,{path:"/contactenos",render:function(){return Object(c.jsx)($,{onClick:d})}}),Object(c.jsx)(j.a,{path:"/cards/excurtions/elCairo",component:ee}),Object(c.jsx)(j.a,{path:"/Chats",render:function(){return Object(c.jsx)(ye,{onClick:d})}}),Object(c.jsx)(j.a,{path:"/Paquetes",render:function(){return Object(c.jsx)(ke,{onClick:d})}}),Object(c.jsx)(j.a,{path:"/cards/excurtions/luxor",component:Ne}),Object(c.jsx)(j.a,{path:"/cards/excurtions/hurgada",component:Ce}),Object(c.jsx)(j.a,{path:"/cards/excurtions/sharmElSheikh",component:_e})]})]})]})}),Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,358)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},Fe=a(354);i.a.render(Object(c.jsx)(Fe.a,{children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(we,{})})}),document.getElementById("root")),Se()},44:function(e,t,a){},66:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[327,1,2]]]);
//# sourceMappingURL=main.fcc2c208.chunk.js.map