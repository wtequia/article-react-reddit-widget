(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43,9],{"736W":function(e,o,t){"use strict";t.r(o);var a=t("1OyB"),c=t("vuIU"),s=t("JX7q"),r=t("Ji7U"),n=t("md7G"),i=t("foSv"),l=t("rePB"),d=t("q1tI"),m=t.n(d),u=t("wx14"),p=t("zLVn"),w=t("TSYQ"),b=t.n(w),h=t("JCAc"),f=t("vUet"),v=t("ILyh"),N=m.a.createContext(null);N.displayName="AccordionContext";var g=N;var k=m.a.forwardRef((function(e,o){var t=e.as,a=void 0===t?"button":t,c=e.children,s=e.eventKey,r=e.onClick,n=Object(p.a)(e,["as","children","eventKey","onClick"]),i=function(e,o){var t=Object(d.useContext)(g),a=Object(d.useContext)(v.a);return function(c){a&&a(e===t?null:e,c),o&&o(c)}}(s,r);return"button"===a&&(n.type="button"),m.a.createElement(a,Object(u.a)({ref:o,onClick:i},n),c)})),y=t("vYJ8"),M=m.a.forwardRef((function(e,o){var t=e.children,a=e.eventKey,c=Object(p.a)(e,["children","eventKey"]),s=Object(d.useContext)(g);return m.a.createElement(y.a,Object(u.a)({ref:o,in:s===a},c),m.a.createElement("div",null,m.a.Children.only(t)))}));M.displayName="AccordionCollapse";var C=M,F=m.a.forwardRef((function(e,o){var t=Object(h.a)(e,{activeKey:"onSelect"}),a=t.as,c=void 0===a?"div":a,s=t.activeKey,r=t.bsPrefix,n=t.children,i=t.className,l=t.onSelect,d=Object(p.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),w=b()(i,Object(f.a)(r,"accordion"));return m.a.createElement(g.Provider,{value:s||null},m.a.createElement(v.a.Provider,{value:l||null},m.a.createElement(c,Object(u.a)({ref:o},d,{className:w}),n)))}));F.displayName="Accordion",F.Toggle=k,F.Collapse=C;var O=F,j=t("YdCC"),S=t("U1MP"),x=t("Wzyw"),I=m.a.forwardRef((function(e,o){var t=e.bsPrefix,a=e.className,c=e.variant,s=e.as,r=void 0===s?"img":s,n=Object(p.a)(e,["bsPrefix","className","variant","as"]),i=Object(f.a)(t,"card-img");return m.a.createElement(r,Object(u.a)({ref:o,className:b()(c?i+"-"+c:i,a)},n))}));I.displayName="CardImg",I.defaultProps={variant:null};var E=I,L=Object(S.a)("h5"),_=Object(S.a)("h6"),R=Object(j.a)("card-body"),P=Object(j.a)("card-title",{Component:L}),D=Object(j.a)("card-subtitle",{Component:_}),T=Object(j.a)("card-link",{Component:"a"}),B=Object(j.a)("card-text",{Component:"p"}),A=Object(j.a)("card-header"),H=Object(j.a)("card-footer"),U=Object(j.a)("card-img-overlay"),K=m.a.forwardRef((function(e,o){var t=e.bsPrefix,a=e.className,c=e.bg,s=e.text,r=e.border,n=e.body,i=e.children,l=e.as,w=void 0===l?"div":l,h=Object(p.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(f.a)(t,"card"),N=Object(d.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return m.a.createElement(x.a.Provider,{value:N},m.a.createElement(w,Object(u.a)({ref:o},h,{className:b()(a,v,c&&"bg-"+c,s&&"text-"+s,r&&"border-"+r)}),n?m.a.createElement(R,null,i):i))}));K.displayName="Card",K.defaultProps={body:!1},K.Img=E,K.Title=P,K.Subtitle=D,K.Body=R,K.Link=T,K.Text=B,K.Header=A,K.Footer=H,K.ImgOverlay=U;var J=K,W=t("cWnB"),Y=t("3Z9Z"),z=t("JI6e"),q=t("17x9"),Q=t.n(q),V=(Q.a.string,Q.a.bool,Q.a.bool,Q.a.bool,Q.a.bool,m.a.forwardRef((function(e,o){var t=e.bsPrefix,a=e.className,c=e.fluid,s=e.rounded,r=e.roundedCircle,n=e.thumbnail,i=Object(p.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(f.a)(t,"img");var l=b()(c&&t+"-fluid",s&&"rounded",r&&"rounded-circle",n&&t+"-thumbnail");return m.a.createElement("img",Object(u.a)({ref:o},i,{className:b()(a,l)}))})));V.displayName="Image",V.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var G=V,Z=t("LxH/"),X=m.a.createElement,$=function(e){var o=e.linksData;return Object.keys(o).map((function(e){return X("li",{key:e},X("a",{href:o[e],target:"_blank",rel:"noopener noreferrer"},e))}))},ee=t("Nduc"),oe=m.a.createElement;function te(e){var o=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(i.a)(e);if(o){var c=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,c)}else t=a.apply(this,arguments);return Object(n.a)(this,t)}}var ae=function(e){Object(r.a)(t,e);var o=te(t);function t(e){return Object(a.a)(this,t),o.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){return oe(d.Fragment,null,oe("nav",{className:"SocialNetworks"},oe("a",{href:ee.exclusiveContentLink,className:"SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location,"LockIcon")},oe(Z.a,{icon:"lock",className:"SocialNetworks-Icon_".concat(this.props.location,"SvgHeight")})),oe("a",{href:ee.facebookURL,className:"SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location,"FbIcon"),target:"_blank",rel:"noopener noreferrer"},oe(Z.a,{icon:"facebook",className:"SocialNetworks-Icon_".concat(this.props.location,"SvgHeight")})),oe("a",{href:ee.twitterURL,className:"SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location,"TwIcon"),target:"_blank",rel:"noopener noreferrer"},oe(Z.a,{icon:"twitter",className:"SocialNetworks-Icon_".concat(this.props.location,"SvgHeight")})),oe("a",{href:ee.youtubeURL,className:"SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location,"YtIcon"),target:"_blank",rel:"noopener noreferrer"},oe(Z.a,{icon:"youtube",className:"SocialNetworks-Icon_".concat(this.props.location,"SvgHeight")})),oe("a",{href:ee.instagramURL,className:"SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location,"IgIcon"),target:"_blank",rel:"noopener noreferrer"},oe(Z.a,{icon:"instagram",className:"SocialNetworks-Icon_".concat(this.props.location,"SvgHeight")}))))}}]),t}(d.Component),ce=m.a.createElement,se=function(e){var o=e.logoType||"header";return ce("div",{className:"Logo Logo_".concat(o)},ce(G,{src:"".concat({footer:"/footerLogo.svg",mobileFooter:"/mobileLogo.svg",header:"/HeaderLogo.png"}[o]),alt:"El Espectador",fluid:!0}))},re=m.a.createElement;function ne(e){var o=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(i.a)(e);if(o){var c=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,c)}else t=a.apply(this,arguments);return Object(n.a)(this,t)}}var ie=function(e){Object(r.a)(t,e);var o=ne(t);function t(e){var c;Object(a.a)(this,t),c=o.call(this,e),Object(l.a)(Object(s.a)(c),"printSections",(function(e,o){var t="desktop"===e?"Footer-SectionsDesktopMenuItems":"Footer-BodyMobileMenuItems";return Object.keys(o).map((function(e){return re("li",{className:t,key:e.name},re("a",{href:o[e]},e))}))})),Object(l.a)(Object(s.a)(c),"handleWindowSizeChange",(function(){c.setState({width:window.innerWidth})})),Object(l.a)(Object(s.a)(c),"mobileMenu",(function(){return re(O,{className:"Footer-MobileMenu"},re(J,{className:"Footer-CardMobileMenu"},re(J.Header,{className:"Footer-HeaderMobileMenu"},re("a",null,"Secciones"),re(O.Toggle,{as:W.a,variant:"link",eventKey:"0",className:"Footer-ButtonMobileMenu"},re(Z.a,{icon:"chevron-down"}))),re(O.Collapse,{eventKey:"0",className:"Footer-CollapseMobileMenu"},re(J.Body,{className:"Footer-BodyMobileMenu"},re("ul",{className:"Footer-BodyMobileMenuContainerSecciones"},c.printSections("mobile",c.sections))))),re("div",{className:"Footer-Line"}),re(J,{className:"Footer-CardMobileMenu"},re(J.Header,{className:"Footer-HeaderMobileMenu"},re("a",null,"Servicios "),re(O.Toggle,{as:W.a,variant:"link",eventKey:"2",className:"Footer-ButtonMobileMenu"},re(Z.a,{icon:"chevron-down"}))),re(O.Collapse,{eventKey:"2",className:"Footer-CollapseMobileMenu"},re(J.Body,{className:"Footer-BodyMobileMenu"},re("ul",{className:"Footer-BodyMobileMenuContainerRedesServicios"},re("li",null,re("a",{href:"https://www.elespectador.com/login/"},"Iniciar Sesi\xf3n")),re("li",null,re("a",{href:"https://www.elespectador.com/suscripcion-digital/"},"Suscr\xedbete")),re($,{linksData:c.servicios}))))),re("div",{className:"Footer-Line"}),re(J,{className:"Footer-CardMobileMenu"},re(J.Header,{className:"Footer-HeaderMobileMenu"},re("a",null,"Red de portales"),re(O.Toggle,{as:W.a,variant:"link",eventKey:"1",className:"Footer-ButtonMobileMenu"},re(Z.a,{icon:"chevron-down"}))),re(O.Collapse,{eventKey:"1",className:"Footer-CollapseMobileMenu"},re(J.Body,{className:"Footer-BodyMobileMenu"},re("ul",{className:"Footer-BodyMobileMenuContainerRedesServicios"},re($,{linksData:c.redPortales}))))),re("div",{className:"Footer-Line"}))})),Object(l.a)(Object(s.a)(c),"desktopMenu",(function(){return re("div",{className:"Footer-DesktopMenu"},re(Y.a,null,re(z.a,{lg:4,md:12,sm:12,className:"Footer-ColumnDesktopMenu"},re("div",{className:"Footer-TitlesDesktopMenu"},re("a",null,"Secciones")),re("ul",{className:"Footer-SectionsDesktopMenu"},c.printSections("desktop",c.sections))),re(z.a,{lg:3,md:4,sm:4,className:"Footer-DivisionDesktopMenu"},re("div",{className:"Footer-TitlesDesktopMenu"},re("a",null,"Servicios")),re("ul",null,re($,{linksData:c.servicios}))),re(z.a,{className:"Footer-DivisionDesktopMenu_redes",lg:5,md:8,sm:8},re("div",{className:"Footer-TitlesDesktopMenu"},re("a",null,"Red de portales")),re("ul",{className:"Footer-SectionLinksDesktopMenu"},re($,{linksData:c.redPortales})))))})),Object(l.a)(Object(s.a)(c),"defineMenu",(function(){return c.isMobile?c.mobileMenu():c.desktopMenu()})),Object(l.a)(Object(s.a)(c),"getSubtype",(function(){if(c.props.globalContent)return"column"===c.props.globalContent.subtype})),c.state={width:window.innerWidth,userCustomFields:null,userWantsAds:!1,flagFetch:!1,tpObject:window.tp,userSubs:null,loggedIn:!1,isSubscriptor:!0,isMobile:!1};var r=ee;return c.redPortales=r.Red_de_portales,c.servicios=r.Servicios,c.suscribeLink=r.suscribeLink,c.sections=r.Secciones,c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange),window.addEventListener("load",this.handleTP)}},{key:"render",value:function(){return this.isMobile=this.state.width<576,re("div",{className:"Footer"},re("div",{className:"Footer-Container"},re("div",null,re(Y.a,{className:"Footer-Header"},re(z.a,{xs:6,sm:4,md:5,lg:6,xl:6,className:"Footer-Logo"},re("div",null,re(se,{logoType:"footer"})),re("div",null,re(se,{logoType:"mobileFooter"}))),re(z.a,{xs:6,sm:1,md:1,lg:1,xl:1,className:"Footer-Button"},re(W.a,{href:"https://www.elespectador.com/suscripcion-digital/"},"Suscr\xedbete")),re(z.a,{xs:4,sm:2,md:2,lg:2,xl:2,className:"Footer-TextFollow"},re("div",null,"S\xedganos en")),re(z.a,{xs:8,sm:5,md:4,lg:3,xl:3,className:"Footer-Social"},re(ae,{location:"footer"})))),re("div",{className:"Footer-Line"}),this.defineMenu(),re("div",{className:"Footer-Info"},re("div",{className:"Footer-Contact"},re("a",{href:"https://www.elespectador.com/servicio-al-cliente/"},re("img",{className:"Footer-ContactLogo",src:"https://cloudfront-us-east-1.images.arcpublishing.com/sandbox.elespectador/DOZEI6JMMBG75AQKY644QJYOYQ.png"})),re("div",{className:"Footer-ContactInfo"},re("div",{className:"Footer-ContactTitle"},re("a",{href:"https://www.elespectador.com/servicio-al-cliente/"},"Cont\xe1ctenos")),re("div",{className:"Footer-ContactText"}),re("div",{className:"Footer-ContactCode"},"Servicio al cliente: L\xcdNEA NACIONAL: 01 8000 510903 EN BOGOT\xc1: 4055540, ",re("a",{href:"mailto:servicioalcliente@elespectador.com"},"servicioalcliente@elespectador.com.")))),re("div",{className:"Footer-Contact_line"}),re("div",{className:"Footer-Members"},re("div",{className:"Footer-MembersTitle"},"Miembros de"),re("a",{href:"https://www.iabcolombia.com/",target:"_blank",rel:"noopener noreferrer"},re(G,{src:"/iab.png",alt:"IAB Colombia",className:"Footer-MembersIimages"})),re("a",{href:"https://ami.org.co/",target:"_blank",rel:"noopener noreferrer"},re(G,{src:"/ami.png",alt:"Asociaci\xf3n Colombiana de Medios de Informaci\xf3n",className:"Footer-MembersIimages"}))),re("div",{className:"Footer-Contact_line"}),re("div",{className:"Footer-Sic"},re("a",{href:"https://www.sic.gov.co/",target:"_blank",rel:"noopener noreferrer"},re(G,{src:"/sicLogo.png",alt:"Superintendencia de industria y comercio",className:"Footer-MembersIimages"})))),re("div",{className:"Footer-TycLinks"},re("div",null,"El uso de este sitio web implica la aceptaci\xf3n de los ",re("a",{href:"https://www.elespectador.com/terminos#terminos-y-condiciones"}," T\xe9rminos y Condiciones ")," y ",re("a",{href:"https://www.elespectador.com/terminos#politica-de-tratamiento-de-datos"}," Pol\xedticas de privacidad")," de COMUNICAN S.A. Todos los Derechos Reservados D.R.A. Prohibida su reproducci\xf3n total o parcial, as\xed como su traducci\xf3n a cualquier idioma sin la autorizaci\xf3n escrita de su titular. Reproduction in whole or in part, or translation without written permission is  prohibited. All rights reserved 2020"))))}}]),t}(d.Component);o.default=ie},Nduc:function(e){e.exports=JSON.parse('{"siteName":"El Espectador","siteLogo":"https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png","siteDomainURL":"https://www.elespectador.com","twitterURL":"https://twitter.com/elespectador","facebookURL":"https://www.facebook.com/elespectadorcom","instagramURL":"https://www.instagram.com/elespectador/","youtubeURL":"https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1","suscribeLink":"https://www.elespectador.com/suscripcion-digital/","exclusiveContentLink":"https://www.elespectador.com/contenido-exclusivo/","sportsLiveLink":"https://www.elespectador.com/deportes/partidos-de-futbol-hoy-en-vivo/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=Boton-Parrilla-Header","loginLink":"https://www.elespectador.com/login/","sites":["el-espectador"],"Red_de_portales":{"circulodeexperiencias.com":"https://www.facebook.com/CirculoDeExperienciasElEspectador/","foros.elespectador.com":"http://foros.elespectador.com/","bibo.elespectador.com":"http://bibo.elespectador.com/","caracolnext.com":"https://www.caracolnext.com/","caracoltv.com":"https://www.caracoltv.com/","noticiascaracol.com":"https://www.noticiascaracol.com","golcaracol.com":"https://www.golcaracol.com","caracolplay.com":"https://www.caracolplay.com","caracoltvcorporativo.com":"https://www.caracoltvcorporativo.com/","bluradio.com":"https://www.bluradio.com/","lakalle.com":"https://www.lakalle.com","hjck.com":"https://hjck.com/","shock.co":"https://www.shock.co/","Volk":"https://volkgames.com/"},"Servicios":{"Paute con nosotros":"https://www.elespectador.com/paute-con-nosotros/","Suscripciones impresas":"http://suscripciones.elespectador.com/","C\xedrculo de experiencias":"https://www.facebook.com/CirculoDeExperienciasElEspectador/","Foros El Espectador":"http://foros.elespectador.com/","Edictos y avisos judiciales":"http://judiciales.elespectador.com/"},"NewsLetter":{"user":"043bd90b2533e322d34ce78476703751","password":"8bdd08542fbe197f348d38c1ba986923","server":"https://personalizados.elespectador.com/service-nw-pc"},"Secciones":{"Opini\xf3n":"https://www.elespectador.com/opinion/","Salud":"https://www.elespectador.com/noticias/salud/","Judicial":"https://www.elespectador.com/noticias/judicial/","Educaci\xf3n":"https://www.elespectador.com/noticias/educacion/","Pol\xedtica":"https://www.elespectador.com/noticias/politica/","Actualidad":"https://www.elespectador.com/noticias/actualidad/","Investigaci\xf3n":"https://www.elespectador.com/noticias/investigacion/","Alto Turmequ\xe9":"https://www.elespectador.com/nptocias/alto-turmeque&","Econom\xeda":"https://www.elespectador.com/noticias/economia","Blogs":"https://blogs.elespectador.com/","Bogot\xe1":"https://www.elespectador.com/noticias/bogota/","Mundo Destinos":"https://www.elespectador.com/noticias/mundo-destinos/","Nacional":"https://www.elespectador.com/noticias/nacional/","Autos":"https://www.elespectador.com/noticias/autos/","El Mundo":"https://www.elespectador.com/noticias/el-mundo/","Deportes":"https://www.elespectador.com/deportes/","Tecnolog\xeda":"https://www.elespectador.com/noticias/tecnologia/","Entretenimiento":"https://www.elespectador.com/entretenimiento/","Cultura":"https://www.elespectador.com/noticias/cultura","Hor\xf3scopo":"https://www.elespectador.com/entretenimiento/horoscopo/","Ciencia":"https://www.elespectador.com/noticias/ciencia/","Colombia 2020":"https://www.elespectador.com/colombia2020/","Medio Ambiente":"https://www.elespectador.com/noticias/medio-ambiente","Cromos":"https://www.elespectador.com/cromos/"},"Digital":{"Formatos Est\xe1ndar":"/digital/formatos-estandar/","Formatos Premium":"/digital/formatos-premium","Video":"/digital/video"},"Contenidos_Patrocinados":{"Especiales Miltimedia":"/contenidos-patrocinados/especiales-multimedia","Formatos Premium":"https://www.elespectador.com/opinion/","Videos":"https://www.elespectador.com/noticias/judicial/"}}')},U1MP:function(e,o,t){"use strict";var a=t("wx14"),c=t("q1tI"),s=t.n(c),r=t("TSYQ"),n=t.n(r);o.a=function(e){return s.a.forwardRef((function(o,t){return s.a.createElement("div",Object(a.a)({},o,{ref:t,className:n()(o.className,e)}))}))}}}]);