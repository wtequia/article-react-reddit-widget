_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"7A6N":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI");function i(){return Object(n.useState)(null)}},"G/H3":function(e,t,a){"use strict";a.r(t);var n,i=a("q1tI"),o=a.n(i),r=a("nz3k"),s=a("Laea"),c=a("3AC0"),l=a("7vrA"),d=a("3Z9Z"),u=a("JI6e"),m=a("wx14"),f=a("zLVn"),p=a("TSYQ"),b=a.n(p),h=a("2fXS"),g=a("SJxq"),v=a("dZvc"),O=a("Q7zl");function N(e){if((!n&&0!==n||e)&&g.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n}var y=a("7A6N"),P=a("ZCiN"),j=a("i52p"),E=a("YECM");function w(e){void 0===e&&(e=Object(v.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(a){return e.body}}var x=a("RjgW"),S=a("GEtZ"),k=a("17x9"),C=a.n(k),I=a("i8i4"),T=a.n(I),M=a("XcHJ"),_=a("qvwu"),R=a("KXUJ");function $(e,t){e.classList?e.classList.add(t):Object(R.a)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function B(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function D(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=B(e.className,t):e.setAttribute("class",B(e.className&&e.className.baseVal||"",t))}var A=a("7j6X");function F(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function H(e){var t;return F(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=F(e)?Object(v.a)():Object(v.a)(e),a=F(e)||t.defaultView;return t.body.clientWidth<a.innerWidth}(e):e.scrollHeight>e.clientHeight}var G=["template","script","style"],z=function(e,t,a){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,a=e.tagName;return 1===t&&-1===G.indexOf(a.toLowerCase())}(e)&&a(e)}))};function L(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var J,q=function(){function e(e){var t=void 0===e?{}:e,a=t.hideSiblingNodes,n=void 0===a||a,i=t.handleContainerOverflow,o=void 0===i||i;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=n,this.handleContainerOverflow=o,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=N()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var a=-1;return e.some((function(e,n){return!!t(e,n)&&(a=n,!0)})),a}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var a={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(a.paddingRight=parseInt(Object(A.a)(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(A.a)(t,a)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,a){var n=this.modals.indexOf(e),i=this.containers.indexOf(t);if(-1!==n)return n;if(n=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var a=t.dialog,n=t.backdrop;z(e,[a,n],(function(e){return L(!0,e)}))}(t,e),-1!==i)return this.data[i].modals.push(e),n;var o={modals:[e],classes:a?a.split(/\s+/):[],overflowing:H(t)};return this.handleContainerOverflow&&this.setContainerStyle(o,t),o.classes.forEach($.bind(null,t)),this.containers.push(t),this.data.push(o),n},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var a=this.containerIndexFromModal(e),n=this.data[a],i=this.containers[a];if(n.modals.splice(n.modals.indexOf(e),1),this.modals.splice(t,1),0===n.modals.length)n.classes.forEach(D.bind(null,i)),this.handleContainerOverflow&&this.removeContainerStyle(n,i),this.hideSiblingNodes&&function(e,t){var a=t.dialog,n=t.backdrop;z(e,[a,n],(function(e){return L(!1,e)}))}(i,e),this.containers.splice(a,1),this.data.splice(a,1);else if(this.hideSiblingNodes){var o=n.modals[n.modals.length-1],r=o.backdrop;L(!1,o.dialog),L(!1,r)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),W=a("knGs");function V(e){var t=e||(J||(J=new q),J),a=Object(i.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:function(e,n){return t.add(a.current,e,n)},remove:function(){return t.remove(a.current)},isTopModal:function(){return t.isTopModal(a.current)},setDialogRef:Object(i.useCallback)((function(e){a.current.dialog=e}),[]),setBackdropRef:Object(i.useCallback)((function(e){a.current.backdrop=e}),[])})}var U=Object(i.forwardRef)((function(e,t){var a=e.show,n=void 0!==a&&a,r=e.role,s=void 0===r?"dialog":r,c=e.className,l=e.style,d=e.children,u=e.backdrop,p=void 0===u||u,b=e.keyboard,h=void 0===b||b,v=e.onBackdropClick,O=e.onEscapeKeyDown,N=e.transition,y=e.backdropTransition,E=e.autoFocus,k=void 0===E||E,C=e.enforceFocus,I=void 0===C||C,R=e.restoreFocus,$=void 0===R||R,B=e.restoreFocusOptions,D=e.renderDialog,A=e.renderBackdrop,F=void 0===A?function(e){return o.a.createElement("div",e)}:A,H=e.manager,G=e.container,z=e.containerClassName,L=e.onShow,J=e.onHide,q=void 0===J?function(){}:J,U=e.onExit,K=e.onExited,X=e.onExiting,Z=e.onEnter,Q=e.onEntering,Y=e.onEntered,ee=Object(f.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),te=Object(W.a)(G),ae=V(H),ne=Object(M.a)(),ie=Object(_.a)(n),oe=Object(i.useState)(!n),re=oe[0],se=oe[1],ce=Object(i.useRef)(null);Object(i.useImperativeHandle)(t,(function(){return ae}),[ae]),g.a&&!ie&&n&&(ce.current=w()),N||n||re?n&&re&&se(!1):se(!0);var le=Object(P.a)((function(){if(ae.add(te,z),be.current=Object(S.a)(document,"keydown",fe),pe.current=Object(S.a)(document,"focus",(function(){return setTimeout(ue)}),!0),L&&L(),k){var e=w(document);ae.dialog&&e&&!Object(x.a)(ae.dialog,e)&&(ce.current=e,ae.dialog.focus())}})),de=Object(P.a)((function(){var e;(ae.remove(),null==be.current||be.current(),null==pe.current||pe.current(),$)&&(null==(e=ce.current)||null==e.focus||e.focus(B),ce.current=null)}));Object(i.useEffect)((function(){n&&te&&le()}),[n,te,le]),Object(i.useEffect)((function(){re&&de()}),[re,de]),Object(j.a)((function(){de()}));var ue=Object(P.a)((function(){if(I&&ne()&&ae.isTopModal()){var e=w();ae.dialog&&e&&!Object(x.a)(ae.dialog,e)&&ae.dialog.focus()}})),me=Object(P.a)((function(e){e.target===e.currentTarget&&(null==v||v(e),!0===p&&q())})),fe=Object(P.a)((function(e){h&&27===e.keyCode&&ae.isTopModal()&&(null==O||O(e),e.defaultPrevented||q())})),pe=Object(i.useRef)(),be=Object(i.useRef)(),he=N;if(!te||!(n||he&&!re))return null;var ge=Object(m.a)({role:s,ref:ae.setDialogRef,"aria-modal":"dialog"===s||void 0},ee,{style:l,className:c,tabIndex:-1}),ve=D?D(ge):o.a.createElement("div",ge,o.a.cloneElement(d,{role:"document"}));he&&(ve=o.a.createElement(he,{appear:!0,unmountOnExit:!0,in:!!n,onExit:U,onExiting:X,onExited:function(){se(!0);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==K||K.apply(void 0,t)},onEnter:Z,onEntering:Q,onEntered:Y},ve));var Oe=null;if(p){var Ne=y;Oe=F({ref:ae.setBackdropRef,onClick:me}),Ne&&(Oe=o.a.createElement(Ne,{appear:!0,in:!!n},Oe))}return o.a.createElement(o.a.Fragment,null,T.a.createPortal(o.a.createElement(o.a.Fragment,null,Oe,ve),te))})),K={show:C.a.bool,container:C.a.any,onShow:C.a.func,onHide:C.a.func,backdrop:C.a.oneOfType([C.a.bool,C.a.oneOf(["static"])]),renderDialog:C.a.func,renderBackdrop:C.a.func,onEscapeKeyDown:C.a.func,onBackdropClick:C.a.func,containerClassName:C.a.string,keyboard:C.a.bool,transition:C.a.elementType,backdropTransition:C.a.elementType,autoFocus:C.a.bool,enforceFocus:C.a.bool,restoreFocus:C.a.bool,restoreFocusOptions:C.a.shape({preventScroll:C.a.bool}),onEnter:C.a.func,onEntering:C.a.func,onEntered:C.a.func,onExit:C.a.func,onExiting:C.a.func,onExited:C.a.func,manager:C.a.instanceOf(q)};U.displayName="Modal",U.propTypes=K;var X,Z=Object.assign(U,{Manager:q}),Q=(a("2W6z"),a("dI71")),Y=a("Zeqi"),ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",te=".sticky-top",ae=".navbar-toggler",ne=function(e){function t(){return e.apply(this,arguments)||this}Object(Q.a)(t,e);var a=t.prototype;return a.adjustAndStore=function(e,t,a){var n,i=t.style[e];t.dataset[e]=i,Object(A.a)(t,((n={})[e]=parseFloat(Object(A.a)(t,e))+a+"px",n))},a.restore=function(e,t){var a,n=t.dataset[e];void 0!==n&&(delete t.dataset[e],Object(A.a)(t,((a={})[e]=n,a)))},a.setContainerStyle=function(t,a){var n=this;if(e.prototype.setContainerStyle.call(this,t,a),t.overflowing){var i=N();Object(Y.a)(a,ee).forEach((function(e){return n.adjustAndStore("paddingRight",e,i)})),Object(Y.a)(a,te).forEach((function(e){return n.adjustAndStore("marginRight",e,-i)})),Object(Y.a)(a,ae).forEach((function(e){return n.adjustAndStore("marginRight",e,i)}))}},a.removeContainerStyle=function(t,a){var n=this;e.prototype.removeContainerStyle.call(this,t,a),Object(Y.a)(a,ee).forEach((function(e){return n.restore("paddingRight",e)})),Object(Y.a)(a,te).forEach((function(e){return n.restore("marginRight",e)})),Object(Y.a)(a,ae).forEach((function(e){return n.restore("marginRight",e)}))},t}(q),ie=a("dRu9"),oe=a("z+q/"),re=((X={})[ie.b]="show",X[ie.a]="show",X),se=o.a.forwardRef((function(e,t){var a=e.className,n=e.children,r=Object(f.a)(e,["className","children"]),s=Object(i.useCallback)((function(e){Object(oe.a)(e),r.onEnter&&r.onEnter(e)}),[r]);return o.a.createElement(ie.e,Object(m.a)({ref:t,addEndListener:E.a},r,{onEnter:s}),(function(e,t){return o.a.cloneElement(n,Object(m.a)({},t,{className:b()("fade",a,n.props.className,re[e])}))}))}));se.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},se.displayName="Fade";var ce=se,le=a("YdCC"),de=Object(le.a)("modal-body"),ue=o.a.createContext({onHide:function(){}}),me=a("vUet"),fe=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.centered,r=e.size,s=e.children,c=e.scrollable,l=Object(f.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),d=(a=Object(me.a)(a,"modal"))+"-dialog";return o.a.createElement("div",Object(m.a)({},l,{ref:t,className:b()(d,n,r&&a+"-"+r,i&&d+"-centered",c&&d+"-scrollable")}),o.a.createElement("div",{className:a+"-content"},s))}));fe.displayName="ModalDialog";var pe=fe,be=Object(le.a)("modal-footer"),he={label:C.a.string.isRequired,onClick:C.a.func},ge=o.a.forwardRef((function(e,t){var a=e.label,n=e.onClick,i=e.className,r=Object(f.a)(e,["label","onClick","className"]);return o.a.createElement("button",Object(m.a)({ref:t,type:"button",className:b()("close",i),onClick:n},r),o.a.createElement("span",{"aria-hidden":"true"},"\xd7"),o.a.createElement("span",{className:"sr-only"},a))}));ge.displayName="CloseButton",ge.propTypes=he,ge.defaultProps={label:"Close"};var ve=ge,Oe=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.closeLabel,r=e.closeButton,s=e.onHide,c=e.className,l=e.children,d=Object(f.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);a=Object(me.a)(a,"modal-header");var u=Object(i.useContext)(ue),p=Object(P.a)((function(){u&&u.onHide(),s&&s()}));return o.a.createElement("div",Object(m.a)({ref:t},d,{className:b()(c,a)}),l,r&&o.a.createElement(ve,{label:n,onClick:p}))}));Oe.displayName="ModalHeader",Oe.defaultProps={closeLabel:"Close",closeButton:!1};var Ne,ye=Oe,Pe=a("U1MP"),je=Object(Pe.a)("h4"),Ee=Object(le.a)("modal-title",{Component:je}),we={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:pe};function xe(e){return o.a.createElement(ce,e)}function Se(e){return o.a.createElement(ce,e)}var ke=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.style,s=e.dialogClassName,c=e.children,l=e.dialogAs,d=e["aria-labelledby"],u=e.show,p=e.animation,w=e.backdrop,x=e.keyboard,S=e.onEscapeKeyDown,k=e.onShow,C=e.onHide,I=e.container,T=e.autoFocus,M=e.enforceFocus,_=e.restoreFocus,R=e.restoreFocusOptions,$=e.onEntered,B=e.onExit,D=e.onExiting,A=e.onEnter,F=e.onEntering,H=e.onExited,G=e.backdropClassName,z=e.manager,L=Object(f.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),J=Object(i.useState)({}),q=J[0],W=J[1],V=Object(i.useState)(!1),U=V[0],K=V[1],X=Object(i.useRef)(!1),Q=Object(i.useRef)(!1),Y=Object(i.useRef)(null),ee=Object(y.a)(),te=ee[0],ae=ee[1],ie=Object(P.a)(C);a=Object(me.a)(a,"modal"),Object(i.useImperativeHandle)(t,(function(){return{get _modal(){return te}}}),[te]);var oe=Object(i.useMemo)((function(){return{onHide:ie}}),[ie]);function re(){return z||(Ne||(Ne=new ne),Ne)}function se(e){if(g.a){var t=re().isContainerOverflowing(te),a=e.scrollHeight>Object(v.a)(e).documentElement.clientHeight;W({paddingRight:t&&!a?N():void 0,paddingLeft:!t&&a?N():void 0})}}var ce=Object(P.a)((function(){te&&se(te.dialog)}));Object(j.a)((function(){Object(O.a)(window,"resize",ce),Y.current&&Y.current()}));var le=function(){X.current=!0},de=function(e){X.current&&te&&e.target===te.dialog&&(Q.current=!0),X.current=!1},fe=function(){K(!0),Y.current=Object(E.a)(te.dialog,(function(){K(!1)}))},pe=function(e){"static"!==w?Q.current||e.target!==e.currentTarget?Q.current=!1:C():function(e){e.target===e.currentTarget&&fe()}(e)},be=Object(i.useCallback)((function(e){return o.a.createElement("div",Object(m.a)({},e,{className:b()(a+"-backdrop",G,!p&&"show")}))}),[p,G,a]),he=Object(m.a)({},r,{},q);p||(he.display="block");return o.a.createElement(ue.Provider,{value:oe},o.a.createElement(Z,{show:u,ref:ae,backdrop:w,container:I,keyboard:!0,autoFocus:T,enforceFocus:M,restoreFocus:_,restoreFocusOptions:R,onEscapeKeyDown:function(e){x||"static"!==w?x&&S&&S(e):(e.preventDefault(),fe())},onShow:k,onHide:C,onEnter:function(e){e&&(e.style.display="block",se(e));for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];A&&A.apply(void 0,[e].concat(a))},onEntering:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];F&&F.apply(void 0,[e].concat(a)),Object(h.a)(window,"resize",ce)},onEntered:$,onExit:function(e){Y.current&&Y.current();for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];B&&B.apply(void 0,[e].concat(a))},onExiting:D,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];H&&H.apply(void 0,a),Object(O.a)(window,"resize",ce)},manager:re(),containerClassName:a+"-open",transition:p?xe:void 0,backdropTransition:p?Se:void 0,renderBackdrop:be,renderDialog:function(e){return o.a.createElement("div",Object(m.a)({role:"dialog"},e,{style:he,className:b()(n,a,U&&a+"-static"),onClick:w?pe:void 0,onMouseUp:de,"aria-labelledby":d}),o.a.createElement(l,Object(m.a)({},L,{role:"document",onMouseDown:le,className:s}),c))}}))}));ke.displayName="Modal",ke.defaultProps=we,ke.Body=de,ke.Header=ye,ke.Title=Ee,ke.Footer=be,ke.Dialog=pe,ke.TRANSITION_DURATION=300,ke.BACKDROP_TRANSITION_DURATION=150;var Ce=ke,Ie=a("HMs9"),Te=a.n(Ie),Me=a("1OyB"),_e=a("vuIU"),Re=a("JX7q"),$e=a("Ji7U"),Be=a("md7G"),De=a("foSv"),Ae=a("rePB"),Fe=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.striped,r=e.bordered,s=e.borderless,c=e.hover,l=e.size,d=e.variant,u=e.responsive,p=Object(f.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(me.a)(a,"table"),g=b()(n,h,d&&h+"-"+d,l&&h+"-"+l,i&&h+"-striped",r&&h+"-bordered",s&&h+"-borderless",c&&h+"-hover"),v=o.a.createElement("table",Object(m.a)({},p,{className:g,ref:t}));if(u){var O=h+"-responsive";return"string"===typeof u&&(O=O+"-"+u),o.a.createElement("div",{className:O},v)}return v})),He=a("LxH/"),Ge=o.a.createElement;function ze(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(De.a)(e);if(t){var i=Object(De.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(Be.a)(this,a)}}var Le=function(e){Object($e.a)(a,e);var t=ze(a);function a(e){var n;return Object(Me.a)(this,a),n=t.call(this,e),Object(Ae.a)(Object(Re.a)(n),"handleNav",(function(e){"left"===e?n.tableRef&&(n.tableRef.current.scrollLeft-=50):n.tableRef&&(n.tableRef.current.scrollLeft+=50)})),n.tableRef=o.a.createRef(),n.state={show:!1,title:null,description:null,dimensions:null,colorPrice:null,BWPrice:null,image:null},n.showModal=n.showModal.bind(Object(Re.a)(n)),n.handleClose=n.handleClose.bind(Object(Re.a)(n)),n.firstModal=n.firstModal.bind(Object(Re.a)(n)),n.secondModal=n.secondModal.bind(Object(Re.a)(n)),n.thirdModal=n.thirdModal.bind(Object(Re.a)(n)),n.fourthModal=n.fourthModal.bind(Object(Re.a)(n)),n.fifthModal=n.fifthModal.bind(Object(Re.a)(n)),n.sixthModal=n.sixthModal.bind(Object(Re.a)(n)),n.seventhModal=n.seventhModal.bind(Object(Re.a)(n)),n.eighthModal=n.eighthModal.bind(Object(Re.a)(n)),n}return Object(_e.a)(a,[{key:"showModal",value:function(){this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"firstModal",value:function(){this.setState({title:"Doble p\xe1gina"}),this.setState({dimensions:"10 col x 37 cms"}),this.setState({colorPrice:"$42'300.000"}),this.setState({BWPrice:"$35'000.000"}),this.setState({image:"/images/impresos/doble_pagina.png"}),this.showModal()}},{key:"secondModal",value:function(){this.setState({title:"Aviso Irregular"}),this.setState({dimensions:"10 col x 37 cms"}),this.setState({colorPrice:"$20'600.000"}),this.setState({BWPrice:"$16'000.000"}),this.setState({image:"/images/impresos/aviso_irregular.png"}),this.showModal()}},{key:"thirdModal",value:function(){this.setState({title:"P\xe1ginas 3a, 5a, 7a, 9a"}),this.setState({dimensions:"5 col x 37 cms"}),this.setState({colorPrice:"$29'600.000"}),this.setState({BWPrice:"$24'500.000"}),this.setState({image:"/images/impresos/paginas_a.png"}),this.showModal()}},{key:"fourthModal",value:function(){this.setState({title:"1/2 P\xe1gina impar"}),this.setState({dimensions:"Vertical 2.5 col x 37 cm, Horizontal 5 col x 18.5 cm"}),this.setState({colorPrice:"$12'300.000"}),this.setState({BWPrice:"$9'900.000"}),this.setState({image:"/images/impresos/media_pagina_impar.png"}),this.showModal()}},{key:"fifthModal",value:function(){this.setState({title:"1/2 P\xe1g. 3a, 5a, 7a, 9a"}),this.setState({dimensions:"Vertical 2.5 col x 37 cm, Horizontal 5 col x 18.5 cm"}),this.setState({colorPrice:"$17'500.000"}),this.setState({BWPrice:"$13'400.000"}),this.setState({image:"/images/impresos/paginas_a_impar.png"}),this.showModal()}},{key:"sixthModal",value:function(){this.setState({title:"Contraportada"}),this.setState({dimensions:"5 col x 37 cms"}),this.setState({colorPrice:"$35'000.000"}),this.setState({BWPrice:"$24'500.000"}),this.setState({image:"/images/impresos/contraportada.png"}),this.showModal()}},{key:"seventhModal",value:function(){this.setState({title:"P\xe1gina impar"}),this.setState({dimensions:"5 col x 37 cms"}),this.setState({colorPrice:"$23'300.000"}),this.setState({BWPrice:"$19'600.000"}),this.setState({image:"/images/impresos/pagina_impar.png"}),this.showModal()}},{key:"eighthModal",value:function(){this.setState({title:"P\xe1gina corriente"}),this.setState({dimensions:"5 col x 37 cms"}),this.setState({colorPrice:"$20'600.000"}),this.setState({BWPrice:"$16'000.000"}),this.setState({image:"/images/impresos/pagina_corriente.png"}),this.showModal()}},{key:"getTable",value:function(){var e=null;switch(this.props.tableNumber){case"one":e=[["Vista","Producto","Dimensiones","Tipo de Archivo","Peso de Archivo","Precio a Color","Precio a B&N"],[Ge(He.a,{onClick:this.firstModal,className:"Print-tableIcon",icon:"eye"}),"Doble P\xe1gina","10 col x 37 cm","PNG, JPG AI, PSD","3 MB","$42'300.000","$35'000.000"],[Ge(He.a,{onClick:this.secondModal,className:"Print-tableIcon",icon:"eye"}),"Aviso Irregular","10 col x 37 cm","PNG, JPG AI, PSD","3 MB","$20'600.000","$16'000.000"],[Ge(He.a,{onClick:this.thirdModal,className:"Print-tableIcon",icon:"eye"}),"P\xe1ginas 3a,5a,7a,9a","5 col x 37 cm","PNG, JPG AI, PSD","3 MB","$29'900.000","$24'500.000"],[Ge(He.a,{onClick:this.fourthModal,className:"Print-tableIcon",icon:"eye"}),"1/2 P\xe1gina Impar","Vertical 2.5 Col x 37 cm Horizontal 5 col x 18.5 cm","PNG, JPG AI, PSD","3 MB","$12'300.000","$9'900.000"],[Ge(He.a,{onClick:this.fifthModal,className:"Print-tableIcon",icon:"eye"}),"1/2 P\xe1gina 3a,5a,7a,9a","Vertical 2.5 col x 37 cm Horizontal 5 col x 18.5 cm","PNG, JPG AI, PSD","3 MB","$17'500.000","$14'400.000"],[Ge(He.a,{onClick:this.sixthModal,className:"Print-tableIcon",icon:"eye"}),"Contraportada","5 col x 37 cm","PNG, JPG AI, PSD","3 MB","$35'000.000","$24'500.000"],[Ge(He.a,{onClick:this.seventhModal,className:"Print-tableIcon",icon:"eye"}),"P\xe1gina Impar","5 col x 37 cm","PNG, JPG AI, PSD","3 MB","$23'300.000","$19'600.000"],[Ge(He.a,{onClick:this.eighthModal,className:"Print-tableIcon",icon:"eye"}),"P\xe1gina Corriente","5 col x 37 cm","PNG, JPG AI, PSD","3 MB","$20'600.000","$16'000.000"]];break;case"two":e=[["Tama\xf1o","Color","Blanco y Negro"],["Primera P\xe1gina","$485.500","345.000"],["Tercera, Quinta y S\xe9ptima P\xe1gina","$284.500","$244.000"],["Contraportada","$250.000","$200.000"],["Corriente","$195.000","$158.000"],["Bogot\xe1","$145.000","110.000"],["Impar","$236.000","$190.000"]];break;case"three":e=[["Cantidad","Carta","Hasta de 16 p\xe1g","M\xe1s de 16 p\xe1g"],["10.000 a 40.000","$235","313","$381"],["Suscriptores nacional","$195","$285","313"],["Total circulaci\xf3n de lunes a domingo","$178","$210","237"],["Total circulaci\xf3n domingo","$167","$200","216"],["Manualidad","$108","108","108"]];break;default:e=[]}var t=[],a=[];for(var n in e){var i=null;0==n?(i=Ge("thead",{key:n},Ge("tr",null,e[n].map((function(e,t){return Ge("th",{key:t},e)})))),t.push(i)):(i=Ge("tr",{key:n},e[n].map((function(e,t){return Ge("td",{key:t},e)}))),a.push(i))}return t.push(Ge("tbody",{key:this.props.tableNumber},a)),t}},{key:"render",value:function(){var e=this;return Ge("div",null,Ge("div",null,Ge("div",{className:"one"===this.props.tableNumber?"Print-tableNavItems Print-tableNavItems_first":"Print-tableNavItems",ref:this.tableRef},Ge(Fe,{striped:!0,hover:!0},this.getTable())),Ge("div",{className:"one"===this.props.tableNumber?"Print-tableContainer Print-tableContainer_first":"two"===this.props.tableNumber?"Print-tableContainer Print-tableContainer_second":"Print-tableContainer Print-tableContainer_third"},Ge("div",{onClick:function(){return e.handleNav("left")}},Ge(He.a,{className:"Print-scrollIcon",icon:"chevron-left"})),Ge("span",{className:"Print-scrollText"},"scroll"),Ge("a",{onClick:function(){return e.handleNav("right")}},Ge(He.a,{className:"Print-scrollIcon",icon:"chevron-right"})))),Ge(Ce,{className:"Newsletter-secondPopUp",show:this.state.show,onHide:this.handleClose},Ge(Ce.Header,{className:"Print-modalText Print-modalText_modalTitle",closeButton:!0},this.state.title),Ge(Ce.Body,null,Ge(l.a,null,Ge(d.a,null,Ge(u.a,{className:"Print-modalText Print-modalText_modalDescription",md:6},Ge("div",{className:"Print-modalText Print-modalText_modalSubtitle"},"Tabloide"),this.state.description)),Ge(d.a,null,Ge(u.a,{md:8},Ge("img",{className:"Print-modalImage",src:this.state.image})),Ge(u.a,{className:"Print-modalText Print-modalText_modalDescriptionTitle",md:4},"Dimensiones:",Ge("div",{className:"Print-modalText Print-modalText_modalInfo"},this.state.dimensions),"Precio a color:",Ge("div",{className:"Print-modalText Print-modalText_modalInfo"},this.state.colorPrice),"Precio a B&N:",Ge("div",{className:"Print-modalText Print-modalText_modalInfo"},this.state.BWPrice)))))))}}]),a}(i.Component),Je=a("rFV7"),qe=o.a.createElement;t.default=function(){var e=Object(i.useState)(!1),t=e[0],a=e[1],n=Object(i.useState)(null),o=n[0],m=n[1],f=Object(i.useState)("first"),p=f[0],b=f[1],h=function(){return a(!0)},g="first"===p?qe("div",{className:"Print-modalBody"},qe("img",{className:"Print-modalImage",src:"/images/impresos/133_1.png"}),qe(c.a,{arrows:!0,dots:!1,infinite:!0,speed:500,show:1,scroll:1,theme:"Slides_modalPrint"},qe("div",null,qe("img",{src:"/images/impresos/133_1.png"})),qe("div",null,qe("img",{src:"/images/impresos/133_2.png"})),qe("div",null,qe("img",{src:"/images/impresos/133_3.png"})))):"second"===p?qe("div",{className:"Print-modalBody"},qe("img",{className:"Print-modalImage",src:"/images/impresos/especial_colombia_1.png"}),qe(c.a,{arrows:!0,dots:!1,infinite:!0,speed:500,show:1,scroll:1,theme:"Slides_modalPrint"},qe("div",null,qe("img",{src:"/images/impresos/especial_colombia_1.png"})),qe("div",null,qe("img",{src:"/images/impresos/especial_colombia_2.png"})),qe("div",null,qe("img",{src:"/images/impresos/especial_colombia_3.png"})))):qe("div",{className:"Print-modalBody"},qe("img",{className:"Print-modalImage",src:"/images/impresos/especialSamsung_1.png"}),qe(c.a,{arrows:!0,dots:!1,infinite:!0,speed:500,show:1,scroll:1,theme:"Slides_modalPrint"},qe("div",null,qe("img",{src:"/images/impresos/especialSamsung_1.png"})),qe("div",null,qe("img",{src:"/images/impresos/especialSamsung_2.png"}))));return qe(r.a,{title:"Impresos - Paute con nosotros",description:"Secci\xf3n impresos de paute con nosotros"},qe("section",{className:"Index-section Index-section_background Index-section_noPadding"},qe(c.a,{arrows:!0,dots:!1,infinite:!0,speed:500,show:3,scroll:1,theme:"Slides-printCarousel"},qe("div",{onClick:function(e){e.preventDefault(),b("first"),m("Especial 133 a\xf1os"),h()}},qe(Te.a,{height:600},qe("img",{src:"/images/impresos/133_1.png"})),qe("div",{className:"Print-carouselText"},"Especial 133 a\xf1os")),qe("div",{onClick:function(e){e.preventDefault(),b("second"),m("Especial Colombia"),h()}},qe(Te.a,{height:600},qe("img",{src:"/images/impresos/especial_colombia_1.png"})),qe("div",{className:"Print-carouselText"},"Especial Colombia")),qe("div",{onClick:function(e){e.preventDefault(),b("third"),m("Especial Samsung"),h()}},qe(Te.a,{height:600},qe("img",{src:"/images/impresos/especialSamsung_1.png"})),qe("div",{className:"Print-carouselText"},"Especial Samsung")))),qe("section",{className:"Index-section"},qe(l.a,null,qe(d.a,null,qe(u.a,{md:12},qe("div",{className:"Index-infoSection Index-infoSection_spaceAround"},qe(s.a,{image:"/images/impresos/preferencias_1.png",title:"1.829.093",subtitle:"lectores \xfaltimos 30 d\xedas",style:"ImageInfo-image_print"}),qe(s.a,{image:"/images/impresos/preferencias_2.png",title:"420.594",subtitle:"lectores domingo",info:"Fuente EGM -2 2019",style:"ImageInfo-image_print"}),qe(s.a,{image:"/images/impresos/preferencias_3.png",title:"190.019",subtitle:"lectores d\xeda de ayer",style:"ImageInfo-image_print"})))))),qe("section",{className:"Index-section"},qe(l.a,null,qe(d.a,null,qe(u.a,null,qe("div",{className:"Print-sectionTitle Print-sectionTitle_underline"},"Tarifas y formatos 2020"),qe("div",{className:"Print-sectionText"}))),qe(d.a,null,qe(u.a,null,qe("div",{className:"Print-sectionTitle"},"Tarifas impreso"))),qe(d.a,null,qe(u.a,null,qe(Le,{tableNumber:"one"}))))),qe("section",{className:"Index-section"},qe(l.a,null,qe(d.a,null,qe(u.a,{lg:7},qe("div",{className:"Print-sectionTitle"},"Centimetros por columna"),qe(Le,{tableNumber:"two"})),qe(u.a,{lg:5},qe("div",{className:"Print-sectionTitle Print-sectionTitle_border"},"Columnas tabloide"),qe("div",{className:"Print-imageTable"},qe(Te.a,{height:600},qe("img",{src:"/images/impresos/tabloide.png"}))),qe(d.a,null,qe(u.a,null,qe("div",{className:"Print-noteTitle"},"Nota"))),qe(d.a,null,qe(u.a,null,qe("div",{className:"Print-noteText"},"Incrementos del 20% para domingo. Las tarifas no incluyen IVA")),qe(u.a,null,qe(Je.a,{type:"submit",theme:"Button-form  Button-form_print",content:"Ver medidas",click:function(){return window.location.href="https://embeber-pdf-arc.s3.amazonaws.com/Tarifas%20EE%202020-1586905028285.pdf"}}))))))),qe("section",{className:"Index-section"},qe(l.a,null,qe(d.a,null,qe(u.a,null,qe("div",{className:"Print-sectionTitle"},"Insertos y manualidades"),qe("div",{className:"Print-tableDiv"},qe(Le,{tableNumber:"three"})))))),qe(Ce,{show:t,onHide:function(){return a(!1)}},qe(Ce.Header,{closeButton:!0},qe(Ce.Title,null,o)),qe(Ce.Body,null,g)))}},KXUJ:function(e,t,a){"use strict";function n(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}a.d(t,"a",(function(){return n}))},QrlI:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/impresos",function(){return a("G/H3")}])},RjgW:function(e,t,a){"use strict";function n(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}a.d(t,"a",(function(){return n}))},U1MP:function(e,t,a){"use strict";var n=a("wx14"),i=a("q1tI"),o=a.n(i),r=a("TSYQ"),s=a.n(r);t.a=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(n.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},XcHJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI");function i(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},ZCiN:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");var i=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=i(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(e,t){return n(e.querySelectorAll(t))}},i52p:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI");function i(e){var t=function(e){var t=Object(n.useRef)(e);return t.current=e,t}(e);Object(n.useEffect)((function(){return function(){return t.current()}}),[])}},knGs:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("dZvc"),i=a("q1tI"),o=function(e){var t;return"undefined"===typeof document?null:null==e?Object(n.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function r(e,t){var a=Object(i.useState)((function(){return o(e)})),n=a[0],r=a[1];if(!n){var s=o(e);s&&r(s)}return Object(i.useEffect)((function(){t&&n&&t(n)}),[t,n]),Object(i.useEffect)((function(){var t=o(e);t!==n&&r(t)}),[e,n]),n}},qvwu:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI");function i(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}}},[["QrlI",1,0,2,5,6,7,9]]]);