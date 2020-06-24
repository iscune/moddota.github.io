(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(177)),i=n(178);n(179);const o={title:"Rotate Ability Example",author:"Noya",steamId:"76561198046984233",date:"23.01.2015"},l={id:"abilities/datadriven/rotate-ability-example",isDocsHomePage:!1,title:"Rotate Ability Example",description:"Block",source:"@site/_articles/abilities/datadriven/rotate-ability-example.md",permalink:"/abilities/datadriven/rotate-ability-example",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/rotate-ability-example.md",sidebar:"docs",previous:{title:"Illusion Ability Example",permalink:"/abilities/datadriven/illusion-ability-example"},next:{title:"Point Channeling AoE Ability Example",permalink:"/abilities/datadriven/point-channeling-aoe-ability-example"}},c=[],p={rightToc:c};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Block")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'"Rotate"\n{\n    "Target"       "TARGET"\n    "PitchYawRoll"  "0 0 0" //x y z values\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example:")," Rotate the caster every interval"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'"OnSpellStart"\n{\n    "ApplyModifier"\n    {\n        "ModifierName"  "modifier_rotating"\n        "Target"       "CASTER"\n    }\n}\n\n"Modifiers"\n{ \n    "modifier_rotating"\n    {\n        "ThinkInterval" "%interval" \n        "OnIntervalThink"\n        {\n            "Rotate"\n            {\n                "Target"       "TARGET"\n                "PitchYawRoll"  "%x %y %z"\n            }\n        }\n    }\n}\n')),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Pitch")," Rotation, 15 every frame (0.03 interval)"),Object(a.b)(i.a,{id:"BothImpureHeterodontosaurus",mdxType:"Gfycat"}),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Yaw")," Rotation, 15 every frame"),Object(a.b)(i.a,{id:"MemorableAcceptableDikdik",mdxType:"Gfycat"}),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Roll")," Rotation, 15 every frame"),Object(a.b)(i.a,{id:"GraciousWebbedHamadryad",mdxType:"Gfycat"}))}b.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function i({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);