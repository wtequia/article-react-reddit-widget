_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{HMs9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),o=a("q1tI"),r=m(o),n=m(a("17x9")),s=a("Seim"),l=m(a("tvXG")),u=m(a("PTkm")),d=m(a("uUxy"));function m(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,g=0,h=0,b=0,y="data-lazyload-listened",I=[],w=[],N=!1;try{var _=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,_)}catch(C){}var T=!!N&&{capture:!1,passive:!0},E=function(e){var t=e.ref;if(t instanceof HTMLElement){var a=(0,l.default)(t);(e.props.overflow&&a!==t.ownerDocument&&a!==document&&a!==document.documentElement?function(e,t){var a=e.ref,i=void 0,o=void 0,r=void 0,n=void 0;try{var s=t.getBoundingClientRect();i=s.top,o=s.left,r=s.height,n=s.width}catch(C){i=v,o=g,r=b,n=h}var l=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,d=Math.max(i,0),m=Math.max(o,0),c=Math.min(l,i+r)-d,f=Math.min(u,o+n)-m,p=void 0,y=void 0,I=void 0,w=void 0;try{var N=a.getBoundingClientRect();p=N.top,y=N.left,I=N.height,w=N.width}catch(C){p=v,y=g,I=b,w=h}var _=p-d,T=y-m,E=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return _-E[0]<=c&&_+I+E[1]>=0&&T-E[0]<=f&&T+w+E[1]>=0}(e,a):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var a=void 0,i=void 0;try{var o=t.getBoundingClientRect();a=o.top,i=o.height}catch(C){a=v,i=b}var r=window.innerHeight||document.documentElement.clientHeight,n=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return a-n[0]<=r&&a+i+n[1]>=0}(e))?e.visible||(e.props.once&&w.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},M=function(){w.forEach((function(e){var t=I.indexOf(e);-1!==t&&I.splice(t,1)})),w=[]},S=function(){for(var e=0;e<I.length;++e){var t=I[e];E(t)}M()},k=void 0,x=null,O=function(e){function t(e){c(this,t);var a=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.visible=!1,a.setRef=a.setRef.bind(a),a}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var a=void 0!==this.props.debounce&&"throttle"===k||"debounce"===k&&void 0===this.props.debounce;if(a&&((0,s.off)(e,"scroll",x,T),(0,s.off)(window,"resize",x,T),x=null),x||(void 0!==this.props.debounce?(x=(0,u.default)(S,"number"===typeof this.props.debounce?this.props.debounce:300),k="debounce"):void 0!==this.props.throttle?(x=(0,d.default)(S,"number"===typeof this.props.throttle?this.props.throttle:300),k="throttle"):x=S),this.props.overflow){var i=(0,l.default)(this.ref);if(i&&"function"===typeof i.getAttribute){var o=+i.getAttribute(y)+1;1===o&&i.addEventListener("scroll",x,T),i.setAttribute(y,o)}}else if(0===I.length||a){var r=this.props,n=r.scroll,m=r.resize;n&&(0,s.on)(e,"scroll",x,T),m&&(0,s.on)(window,"resize",x,T)}I.push(this),E(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",x,T),e.removeAttribute(y)):e.setAttribute(y,t)}}var a=I.indexOf(this);-1!==a&&I.splice(a,1),0===I.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",x,T),(0,s.off)(window,"scroll",x,T))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,a=e.children,i=e.placeholder,o=e.classNamePrefix;return r.default.createElement("div",{className:o+"-wrapper",ref:this.setRef},this.visible?a:i||r.default.createElement("div",{style:{height:t},className:o+"-placeholder"}))}}]),t}(o.Component);O.propTypes={classNamePrefix:n.default.string,once:n.default.bool,height:n.default.oneOfType([n.default.number,n.default.string]),offset:n.default.oneOfType([n.default.number,n.default.arrayOf(n.default.number)]),overflow:n.default.bool,resize:n.default.bool,scroll:n.default.bool,children:n.default.node,throttle:n.default.oneOfType([n.default.number,n.default.bool]),debounce:n.default.oneOfType([n.default.number,n.default.bool]),placeholder:n.default.node,scrollContainer:n.default.oneOfType([n.default.string,n.default.object]),unmountIfInvisible:n.default.bool},O.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var P=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(a){function o(){c(this,o);var e=f(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+P(t),e}return p(o,a),i(o,[{key:"render",value:function(){return r.default.createElement(O,e,r.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=O,t.forceCheck=S,t.forceVisible=function(){for(var e=0;e<I.length;++e){var t=I[e];t.visible=!0,t.forceUpdate()}M()}},JCFv:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/digital/formatos-premium",function(){return a("Vf0v")}])},PTkm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var i=void 0,o=void 0,r=void 0,n=void 0,s=void 0,l=function l(){var u=+new Date-n;u<t&&u>=0?i=setTimeout(l,t-u):(i=null,a||(s=e.apply(r,o),i||(r=null,o=null)))};return function(){r=this,o=arguments,n=+new Date;var u=a&&!i;return i||(i=setTimeout(l,t)),u&&(s=e.apply(r,o),r=null,o=null),s}}},Seim:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,a,i){i=i||!1,e.addEventListener?e.addEventListener(t,a,i):e.attachEvent&&e.attachEvent("on"+t,(function(t){a.call(e,t||window.event)}))},t.off=function(e,t,a,i){i=i||!1,e.removeEventListener?e.removeEventListener(t,a,i):e.detachEvent&&e.detachEvent("on"+t,a)}},Vf0v:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),o=a.n(i),r=a("7vrA"),n=a("3Z9Z"),s=a("JI6e"),l=a("nz3k"),u=a("HMs9"),d=a.n(u),m=a("YFqc"),c=a.n(m),f=o.a.createElement;t.default=function(){var e=f(r.a,null,f(n.a,null,f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Cubo",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/cubo/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Cubo.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Interstitial",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/interstitial/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Interstitial.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Portada falsa",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/portada-falsa/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Portada_Falsa.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Takeover",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/takeover/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Takeover.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Toma A",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/toma-a/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-toma_A.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Toma B",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/toma-b/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Toma_B.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Toma de Secci\xf3n",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/toma-seccion/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Toma_D.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Toma de Video",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/toma-video/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Toma_V.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Toma Expandible",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/toma-expandible/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Toma_Expandible.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Triple Impacto",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/triple-impacto/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Triple_Impacto.png"})))))),f(s.a,{sm:6,md:4},f("div",{className:"Image-traditionalSection"},f("div",{className:"Image-traditionalText"},"Uni\xf3n de Layers",f("div",{className:"Image-traditionalSubtitle"},"Desktop - Mobile")),f(c.a,{href:"/digital/formatos-premium/union-layers/"},f("div",{className:"Image-traditionalImage"},f(d.a,{height:400},f("img",{src:"/images/digital/formatos-premium/apertura_Banner-Union_Layers.png"}))))))));return f(l.a,{title:"Formatos premium - Paute con nosotros",description:"Formatos premium de pauta digital"},f("section",{className:"Standard"},f("h1",{className:"Standard-title"},"Formatos Premium"),f("h2",{className:"Standard-subtitle"},"Formatos de mayor impacto y recordaci\xf3n en nuestro portal"),e))}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var i=a("J4zp"),o=a("284h");t.__esModule=!0,t.default=void 0;var r,n=o(a("q1tI")),s=a("elyg"),l=a("nOHt"),u=new Map,d=window.IntersectionObserver,m={};var c=function(e,t){var a=r||(d?r=new d((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return a?(a.observe(e),u.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function f(e,t,a,i){(0,s.isLocalURL)(t)&&(e.prefetch(t,a,i).catch((function(e){0})),m[t+"%"+a]=!0)}var p=function(e){var t=!1!==e.prefetch,a=n.default.useState(),o=i(a,2),r=o[0],u=o[1],p=(0,l.useRouter)(),v=p&&p.pathname||"/",g=n.default.useMemo((function(){var t=(0,s.resolveHref)(v,e.href);return{href:t,as:e.as?(0,s.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),h=g.href,b=g.as;n.default.useEffect((function(){if(t&&d&&r&&r.tagName&&(0,s.isLocalURL)(h)&&!m[h+"%"+b])return c(r,(function(){f(p,h,b)}))}),[t,r,h,b,p]);var y=e.children,I=e.replace,w=e.shallow,N=e.scroll;"string"===typeof y&&(y=n.default.createElement("a",null,y));var _=n.Children.only(y),T={ref:function(e){e&&u(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,a,i,o,r,n){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(a))&&(e.preventDefault(),null==n&&(n=i.indexOf("#")<0),t[o?"replace":"push"](a,i,{shallow:r}).then((function(e){e&&n&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,h,b,I,w,N)}};return t&&(T.onMouseEnter=function(e){(0,s.isLocalURL)(h)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),f(p,h,b,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(T.href=(0,s.addBasePath)(b)),n.default.cloneElement(_,T)};t.default=p},tvXG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,a=/(scroll|auto)/,i=e;i;){if(!i.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(i),r=o.position,n=o.overflow,s=o["overflow-x"],l=o["overflow-y"];if("static"===r&&t)i=i.parentNode;else{if(a.test(n)&&a.test(s)&&a.test(l))return i;i=i.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var i,o;return t||(t=250),function(){var r=a||this,n=+new Date,s=arguments;i&&n<i+t?(clearTimeout(o),o=setTimeout((function(){i=n,e.apply(r,s)}),t)):(i=n,e.apply(r,s))}}}},[["JCFv",1,0,2,4]]]);