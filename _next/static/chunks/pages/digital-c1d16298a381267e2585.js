_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{KC7o:function(e,t,r){"use strict";var s=r("q1tI");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,s,i=function(e,t){if(null==e)return{};var r,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],0<=t.indexOf(r)||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],!(0<=t.indexOf(r))&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.iconList=t.default=void 0;var l={display:"inline-block",stroke:"currentColor",fill:"currentColor"},n=function(e){var t=e.iconSet,r=e.icon,i=e.size,a=e.disableFill,n=e.removeInlineStyle,d=c(e,["iconSet","icon","size","disableFill","removeInlineStyle"]);if(!t||!r)return console.warn('The "iconSet" and "icon" props are required.'),null;var u=t.icons.find((function(e){return e.properties.name===r}));if(!u)return console.warn('"'.concat(r,'" icon not found.')),null;i&&(l.width=i,l.height=i),d.style=o(o({},n?{}:l),d.style||{});var p=u.icon.width,f=void 0===p?"1024":p;d.viewBox="0 0 ".concat(f," 1024");var h=u.icon.paths.map((function(e,t){return(0,s.createElement)("path",o({d:e,key:r+t},a?{}:u.icon.attrs[t]))}));return(0,s.createElement)("svg",d,h)};t.default=n;t.iconList=function(e){return e&&Array.isArray(e.icons)?e.icons.map((function(e){return e.properties.name})):null}},"LxH/":function(e,t,r){"use strict";var s=r("wx14"),i=r("q1tI"),o=r.n(i),a=r("KC7o"),c=r.n(a),l=o.a.createElement,n=r("wBSg");t.a=function(e){var t=Object(s.a)({},e);return l(c.a,Object(s.a)({iconSet:n},t))}},SwZV:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/digital",function(){return r("vAKt")}])},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var s=r("J4zp"),i=r("284h");t.__esModule=!0,t.default=void 0;var o,a=i(r("q1tI")),c=r("elyg"),l=r("nOHt"),n=new Map,d=window.IntersectionObserver,u={};var p=function(e,t){var r=o||(d?o=new d((function(e){e.forEach((function(e){if(n.has(e.target)){var t=n.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),n.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),n.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}n.delete(e)}):function(){}};function f(e,t,r,s){(0,c.isLocalURL)(t)&&(e.prefetch(t,r,s).catch((function(e){0})),u[t+"%"+r]=!0)}var h=function(e){var t=!1!==e.prefetch,r=a.default.useState(),i=s(r,2),o=i[0],n=i[1],h=(0,l.useRouter)(),g=h&&h.pathname||"/",v=a.default.useMemo((function(){var t=(0,c.resolveHref)(g,e.href);return{href:t,as:e.as?(0,c.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),m=v.href,M=v.as;a.default.useEffect((function(){if(t&&d&&o&&o.tagName&&(0,c.isLocalURL)(m)&&!u[m+"%"+M])return p(o,(function(){f(h,m,M)}))}),[t,o,m,M,h]);var I=e.children,z=e.replace,x=e.shallow,b=e.scroll;"string"===typeof I&&(I=a.default.createElement("a",null,I));var w=a.Children.only(I),y={ref:function(e){e&&n(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,r,s,i,o,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=s.indexOf("#")<0),t[i?"replace":"push"](r,s,{shallow:o}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,M,z,x,b)}};return t&&(y.onMouseEnter=function(e){(0,c.isLocalURL)(m)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(h,m,M,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(y.href=(0,c.addBasePath)(M)),a.default.cloneElement(w,y)};t.default=h},vAKt:function(e,t,r){"use strict";r.r(t);var s=r("q1tI"),i=r.n(s),o=r("nz3k"),a=r("Laea"),c=r("YFqc"),l=r.n(c),n=r("7vrA"),d=r("3Z9Z"),u=r("JI6e"),p=i.a.createElement;t.default=function(){return p(o.a,null,p("section",null,p(n.a,null,p(d.a,null,p(u.a,null,p("h1",{className:"Text-principalTitle"},"DIGITAL"))),p(d.a,null,p(u.a,{md:4,sm:6},p("div",{className:"Image-principalImage",style:{backgroundImage:'url("/images/digital/cover_Formatos_Estandar.png")',height:"300px"}},p(l.a,{href:"/digital/formatos-estandar/"},p("a",{className:"Image-link"},"Formatos Est\xe1ndar")))),p(u.a,{md:4,sm:6},p("div",{className:"Image-principalImage",style:{backgroundImage:'url("/images/digital/cover_premium.png")',height:"300px"}},p(l.a,{href:"digital/formatos-premium"},p("a",{className:"Image-link"},"Formatos Premium")))),p(u.a,{md:4,sm:6},p("div",{className:"Image-principalImage",style:{backgroundImage:'url("/images/digital/cover_video.png")',height:"300px"}},p(l.a,{href:"digital/video"},p("a",{className:"Image-link"},"Video"))))))),p("section",{className:"Index-defaultSection"},p(n.a,null,p(d.a,null,p(u.a,{md:3},p("div",{className:"Index-plataformText"},p("div",null,p("h2",{className:"Text-title"},"Multiplataforma"),p("h3",{className:"Text-section"},"Usuarios unicos promedio mensual primer semestre de 2020"),p("div",{className:"Text-source"},"Fuente Google Analitics")))),p(u.a,{md:9},p("div",{className:"Index-infoSection Index-infoSection_spaceAround"},p(a.a,{image:"/images/cel_home.png",title:"+15m"}),p(a.a,{image:"/images/tablet_home.png",title:"+348k"}),p(a.a,{image:"/images/computador_home.png",title:"+4.3m"})))))))}},wBSg:function(e){e.exports=JSON.parse('{"IcoMoonType":"selection","icons":[{"icon":{"paths":["M480 701.269v0c-18.643-6.589-32-24.369-32-45.269 0-26.51 21.49-48 48-48s48 21.49 48 48c0 20.9-13.357 38.679-32 45.269v83.019c0 8.42-7.163 15.712-16 15.712-8.578 0-16-7.035-16-15.712v-83.019zM256 448v0 0c-53.045 0.15-96 42.866-96 96.303v319.393c0 53.187 43.059 96.303 96.281 96.303h479.438c53.175 0 96.281-42.772 96.281-96.303v-319.393c0-53.093-42.907-96.151-96-96.303v-112.025c0-132.535-107.721-239.976-240-239.976-132.548 0-240 107.415-240 239.976v112.025zM352 448v-111.973c0-79.731 64.471-144.027 144-144.027 79.367 0 144 64.483 144 144.027v111.973h-288z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["lock"],"grid":32},"attrs":[{}],"properties":{"order":1,"id":0,"name":"lock","prevSize":32,"code":59648},"setIdx":0,"setId":6,"iconIdx":0},{"icon":{"paths":["M851.328 946.784l-83.968-23.040-0.192-232.256 80.32 22.592 115.808-432.288-586.624-157.184-38.656 144.192h-66.176l59.616-222.464 710.176 190.272-190.304 710.176zM737.248 1024h-737.248v-735.264h737.248v735.264zM673.312 352.672h-609.376v447.52h609.376v-447.52zM251.168 671.776l73.056-118.144 73.056 73.632 100.448-151.264 105.056 260.288h-465.792l59.36-118.72 54.816 54.208zM207.488 546.752c-26.496 0-47.968-21.44-47.968-47.936s21.472-47.936 47.968-47.936 47.936 21.44 47.936 47.936-21.44 47.936-47.936 47.936z"],"width":1040,"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["pictures","images","photos","polaroid"],"grid":32},"attrs":[],"properties":{"id":1,"order":20,"prevSize":32,"code":59655,"name":"pictures"},"setIdx":0,"setId":6,"iconIdx":1},{"icon":{"paths":["M225.835 414.165l256 256c16.683 16.683 43.691 16.683 60.331 0l256-256c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["chevron-down"],"grid":24},"attrs":[{}],"properties":{"order":1,"id":0,"prevSize":24,"code":59649,"name":"chevron-down"},"setIdx":1,"setId":5,"iconIdx":0},{"icon":{"paths":["M798.165 609.835l-256-256c-16.683-16.683-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["chevron-up"],"grid":24},"attrs":[{}],"properties":{"order":16,"id":1,"prevSize":24,"code":59650,"name":"chevron-up"},"setIdx":1,"setId":5,"iconIdx":1},{"icon":{"paths":["M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["chevron-left"],"grid":24},"attrs":[],"properties":{"id":2,"order":21,"prevSize":24,"name":"chevron-left","code":59657},"setIdx":1,"setId":5,"iconIdx":2},{"icon":{"paths":["M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["chevron-right"],"grid":24},"attrs":[],"properties":{"id":3,"order":22,"prevSize":24,"name":"chevron-right","code":59658},"setIdx":1,"setId":5,"iconIdx":3},{"icon":{"paths":["M512 439.603l-362.035-362.035-72.397 72.397 362.035 362.035-362.035 362.035 72.397 72.397 362.035-362.035 362.035 362.035 72.397-72.397-362.035-362.035 362.035-362.035-72.397-72.397-362.035 362.035z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["close"],"grid":20},"attrs":[{}],"properties":{"order":1,"id":0,"prevSize":20,"code":59652,"name":"close"},"setIdx":2,"setId":4,"iconIdx":0},{"icon":{"paths":["M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["minus","subtract","minimize","line"],"defaultCode":59915,"grid":16},"attrs":[],"properties":{"ligatures":"minus, subtract","name":"minus","id":0,"order":2,"prevSize":32,"code":59915},"setIdx":3,"setId":3,"iconIdx":0},{"icon":{"paths":["M864 128l-480 480-224-224-160 160 384 384 640-640z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["checkmark","tick","correct","accept","ok"],"defaultCode":59920,"grid":16},"attrs":[],"properties":{"ligatures":"checkmark, tick","name":"checkmark","id":1,"order":23,"prevSize":32,"code":59920},"setIdx":3,"setId":3,"iconIdx":1},{"icon":{"paths":["M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z","M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["link","chain","url","uri","anchor"],"defaultCode":59851,"grid":16},"attrs":[],"properties":{"ligatures":"link, chain","name":"link","id":2,"order":2,"prevSize":32,"code":59851},"setIdx":3,"setId":3,"iconIdx":2},{"icon":{"paths":["M877.254 621.254l-320 320c-24.992 24.994-65.514 24.994-90.508 0l-320-320c-24.994-24.994-24.994-65.516 0-90.51 24.994-24.996 65.516-24.996 90.51 0l210.744 210.746v-613.49c0-35.346 28.654-64 64-64s64 28.654 64 64v613.49l210.746-210.746c12.496-12.496 28.876-18.744 45.254-18.744s32.758 6.248 45.254 18.746c24.994 24.994 24.994 65.514 0 90.508z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["arrow-down","down","download","bottom"],"defaultCode":59966,"grid":16},"attrs":[],"properties":{"ligatures":"arrow-down2, down2","name":"arrow-down2","id":3,"order":24,"prevSize":32,"code":59966},"setIdx":3,"setId":3,"iconIdx":3},{"icon":{"paths":["M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["arrow-right","right","next"],"grid":16},"attrs":[{}],"properties":{"order":1,"id":4,"prevSize":32,"name":"arrow-right","code":59659},"setIdx":3,"setId":3,"iconIdx":4},{"icon":{"paths":["M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["search","magnifier","magnifying-glass","inspect","find"],"grid":16},"attrs":[{}],"properties":{"order":1,"id":5,"prevSize":32,"code":59653,"name":"search"},"setIdx":3,"setId":3,"iconIdx":5},{"icon":{"paths":["M325.8 457.4v111.8h184.8c-7.4 48-55.8 140.6-184.8 140.6-111.2 0-202-92.2-202-205.8s90.8-205.8 202-205.8c63.4 0 105.6 27 129.8 50.2l88.4-85.2c-56.8-53-130.4-85.2-218.2-85.2-180.2 0.2-325.8 145.8-325.8 326s145.6 325.8 325.8 325.8c188 0 312.8-132.2 312.8-318.4 0-21.4-2.4-37.8-5.2-54h-307.6z","M1024 448h-96v-96h-96v96h-96v96h96v96h96v-96h96z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["google-plus","brand","social"],"defaultCode":60043,"grid":16},"attrs":[],"properties":{"ligatures":"google-plus, brand5","name":"google-plus","order":12,"id":6,"prevSize":32,"code":60043},"setIdx":3,"setId":3,"iconIdx":6},{"icon":{"paths":["M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["facebook","brand","social"],"defaultCode":60048,"grid":16},"attrs":[],"properties":{"ligatures":"facebook, brand10","name":"facebook","order":8,"id":7,"prevSize":32,"code":60048},"setIdx":3,"setId":3,"iconIdx":7},{"icon":{"paths":["M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z","M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z","M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["instagram","brand","social"],"defaultCode":60050,"grid":16},"attrs":[],"properties":{"ligatures":"instagram, brand12","name":"instagram","order":11,"id":8,"prevSize":32,"code":60050},"setIdx":3,"setId":3,"iconIdx":8},{"icon":{"paths":["M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["twitter","brand","tweet","social"],"defaultCode":60054,"grid":16},"attrs":[],"properties":{"ligatures":"twitter, brand16","name":"twitter","order":9,"id":9,"prevSize":32,"code":60054},"setIdx":3,"setId":3,"iconIdx":9},{"icon":{"paths":["M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["youtube","brand","social"],"defaultCode":60061,"grid":16},"attrs":[],"properties":{"ligatures":"youtube, brand21","name":"youtube","order":10,"id":10,"prevSize":32,"code":60061},"setIdx":3,"setId":3,"iconIdx":10},{"icon":{"paths":["M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z","M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["cancel-circle","close","remove","delete"],"grid":16},"attrs":[{}],"properties":{"code":59917,"ligatures":"cancel-circle, close","name":"cancel-circle","order":13,"id":11,"prevSize":32},"setIdx":3,"setId":3,"iconIdx":11},{"icon":{"paths":["M128 128h320v768h-320zM576 128h320v768h-320z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["pause","player"],"grid":16},"attrs":[{}],"properties":{"order":26,"id":12,"prevSize":32,"code":59660,"name":"pause"},"setIdx":3,"setId":3,"iconIdx":12},{"icon":{"paths":["M512 92.774l429.102 855.226h-858.206l429.104-855.226zM512 0c-22.070 0-44.14 14.882-60.884 44.648l-437.074 871.112c-33.486 59.532-5 108.24 63.304 108.24h869.308c68.3 0 96.792-48.708 63.3-108.24h0.002l-437.074-871.112c-16.742-29.766-38.812-44.648-60.882-44.648v0z","M576 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z","M512 704c-35.346 0-64-28.654-64-64v-192c0-35.346 28.654-64 64-64s64 28.654 64 64v192c0 35.346-28.654 64-64 64z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["warning","sign"],"defaultCode":59911,"grid":16},"attrs":[],"properties":{"ligatures":"warning, sign","name":"warning","order":16,"id":13,"prevSize":32,"code":59911},"setIdx":3,"setId":3,"iconIdx":13},{"icon":{"paths":["M896 704v-512c0-35.2-28.8-64-64-64h-640c-35.2 0-64 28.8-64 64v512h-128v192h1024v-192h-128zM640 832h-256v-64h256v64zM832 704h-640v-511.886c0.034-0.040 0.076-0.082 0.114-0.114h639.77c0.040 0.034 0.082 0.076 0.116 0.116v511.884z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["laptop","computer","pc"],"defaultCode":59735,"grid":16},"attrs":[],"properties":{"ligatures":"laptop, computer","name":"laptop","order":2,"id":14,"prevSize":32,"code":59735},"setIdx":3,"setId":3,"iconIdx":14},{"icon":{"paths":["M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["mobile","cell-phone","handheld"],"defaultCode":59736,"grid":16},"attrs":[],"properties":{"ligatures":"mobile, cell-phone","name":"mobile","order":3,"id":15,"prevSize":32,"code":59736},"setIdx":3,"setId":3,"iconIdx":15},{"icon":{"paths":["M800 0h-640c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h640c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM480 992c-17.672 0-32-14.326-32-32s14.328-32 32-32 32 14.326 32 32-14.328 32-32 32zM768 896h-576v-768h576v768z"],"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["tablet","mobile"],"defaultCode":59738,"grid":16},"attrs":[],"properties":{"ligatures":"tablet, mobile3","name":"tablet","order":4,"id":16,"prevSize":32,"code":59738},"setIdx":3,"setId":3,"iconIdx":16},{"icon":{"paths":["M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"],"tags":["eye","views","vision","visit"],"defaultCode":59854,"grid":16,"attrs":[]},"attrs":[],"properties":{"ligatures":"eye, views","name":"eye","order":2,"id":207,"prevSize":32,"code":59854},"setIdx":5,"setId":1,"iconIdx":206},{"icon":{"paths":["M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"],"width":951,"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["search"],"grid":14},"attrs":[{}],"properties":{"order":1,"id":0,"prevSize":28,"code":59654,"name":"search1"},"setIdx":4,"setId":2,"iconIdx":0},{"icon":{"paths":["M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"],"width":878,"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["bars","navicon","reorder"],"grid":14},"attrs":[{}],"properties":{"order":18,"id":1,"prevSize":28,"code":59651,"name":"bars"},"setIdx":4,"setId":2,"iconIdx":1},{"icon":{"paths":["M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"],"width":808.5942857142857,"attrs":[],"isMulticolor":false,"isMulticolor2":false,"tags":["play"],"defaultCode":61515,"grid":14},"attrs":[],"properties":{"name":"play","id":2,"order":13,"prevSize":28,"code":61515},"setIdx":4,"setId":2,"iconIdx":2},{"icon":{"paths":["M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857s-196.571 438.857-438.857 438.857-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857zM658.286 543.429c11.429-6.286 18.286-18.286 18.286-31.429s-6.857-25.143-18.286-31.429l-310.857-182.857c-10.857-6.857-25.143-6.857-36.571-0.571-11.429 6.857-18.286 18.857-18.286 32v365.714c0 13.143 6.857 25.143 18.286 32 5.714 2.857 12 4.571 18.286 4.571s12.571-1.714 18.286-5.143z"],"width":878,"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["play-circle"],"grid":14},"attrs":[{}],"properties":{"order":1,"id":3,"prevSize":28,"code":59656,"name":"play-circle"},"setIdx":4,"setId":2,"iconIdx":3}],"height":1024,"metadata":{"name":"icomoon"},"preferences":{"showGlyphs":true,"showQuickUse":true,"showQuickUse2":true,"showSVGs":true,"fontPref":{"prefix":"icon-","metadata":{"fontFamily":"icomoon","majorVersion":1,"minorVersion":0},"metrics":{"emSize":1024,"baseline":6.25,"whitespace":50},"embed":false,"showSelector":false,"showMetrics":false},"imagePref":{"prefix":"icon-","png":true,"useClassSelector":true,"color":0,"bgColor":16777215,"classSelector":".icon","name":"icomoon"},"historySize":50,"showCodes":true,"gridSize":16}}')}},[["SwZV",1,0,2,4,6]]]);