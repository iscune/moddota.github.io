(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{134:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(2),o=(i(0),i(177)),r=i(178);i(179);const a={title:"Extracting and Compiling VTEX files",author:"HMFD",steamId:"76561198053730418",date:"21.01.2015"},l={id:"assets/extracting-and-compiling-vtex-files",isDocsHomePage:!1,title:"Extracting and Compiling VTEX files",description:"Hello everybody. Recently, I've been looking through the .VTEX files used by most of the sprites and particle effects in-game, but I couldn't find any extensive documentation about it. Therefore, I decided to write this little guide in case anybody else finds it useful.",source:"@site/_articles/assets/extracting-and-compiling-vtex-files.md",permalink:"/assets/extracting-and-compiling-vtex-files",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/extracting-and-compiling-vtex-files.md",sidebar:"tutorials",previous:{title:"Custom Sounds",permalink:"/assets/custom-sounds"},next:{title:"Custom Minimap Icons",permalink:"/assets/custom-minimap-icons"}},c=[{value:"Extracting from VTEX",id:"extracting-from-vtex",children:[]},{value:"Compiling to VTEX",id:"compiling-to-vtex",children:[]},{value:"Download",id:"download",children:[]},{value:"Bonus GIF",id:"bonus-gif",children:[]}],s={rightToc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hello everybody. Recently, I've been looking through the .VTEX files used by most of the sprites and particle effects in-game, but I couldn't find any extensive documentation about it. Therefore, I decided to write this little guide in case anybody else finds it useful."),Object(o.b)("h3",{id:"extracting-from-vtex"},"Extracting from VTEX"),Object(o.b)("p",null,"1) Extracting images from compiled VTEX files (.VTEX_C) is actually quite simple, but we need those files first. If you haven't already extracted them, you can find them in pak01_dir.vpk, which is located in your dota_ugc\\game\\dota_imported folder. Use a tool like GCFScape to open and extract the files that you need."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/xsQnBg9.png",alt:"img"}))),Object(o.b)("p",null,"2) Next, go to your dota_ugc\\game\\bin\\win64 directory (the tools aren't present in the win32 directory, for some reason). Type the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"resourceinfo.exe -i <your vtex_c file> -debug tga -mip\n")),Object(o.b)("p",null,"This extracts the various mip maps and stores them as individual TGA images. If everything goes well, you should get something like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/HrXehTo.png",alt:"img"}))),Object(o.b)("p",null,'Additionally, you should also have one or more TGA images in your win64 directory, depending on how many mip levels the texture has. Open the one with "_mip0", as this is the base (original) image.'),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/nKUPQQG.png",alt:"img"}))),Object(o.b)("p",null,"3) There is no step 3. Congratulations. You have successfully extracted the underlying TGA image from a compiled VTEX file. Easy, right?"),Object(o.b)("h3",{id:"compiling-to-vtex"},"Compiling to VTEX"),Object(o.b)("p",null,"1) Compiling to VTEX is also quite easy. First, put all of the TGA images you plan on using in the same directory. If you are only compiling one image, then this is not a problem. For this example though, I will be changing several of the icons in the original msg_01.vtex file."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/j4T6CW8.png",alt:"img"}))),Object(o.b)("p",null,"2) Next, we need to create a VTEX file. VTEX files are ASCII data files which describe the properties of the texture, the inputs, and the outputs. If you created your mod from an empty template, you should find some examples of VTEX files in the dota_ugc\\content\\dota_addons","\\","(modname)\\materials\\particle directory. Open one of them up and it should look something like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/FkcOxgM.png",alt:"img"}))),Object(o.b)("p",null,'Simply replace the filename in the highlighted line ("m_fileName", under "CDmeInputTexture") with the name of your TGA image and you\'re set.'),Object(o.b)("p",null,"2b) If you're creating a texture with sequences however, you must create a .MKS file first. Like VTEX files, MKS files are ASCII data files, although these files describe how and which sprites to render in-game. Refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Animated_Particles"}),"Valve Developer Wiki")," for more information on MKS files and animated particles in general. Note that you do NOT need to compile the MKS files with mksheet.exe first."),Object(o.b)("p",null,"Once you have the .mks file, replace the filename as mentioned above with the name of the MKS file instead."),Object(o.b)("p",null,"3) Go back to dota_ugc\\game\\bin\\win64, and type the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"resourcecompiler -i <your vtex file>\n")),Object(o.b)("p",null,"If everything goes well, you should see something like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/qQyXGI9.png",alt:"img"}))),Object(o.b)("p",null,"You should also see a .VTEX_C file somewhere in your dota_ugc\\game\\dota_addons","\\","(modname)\\materials folder, which you can now freely use all throughout your mod."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/xCQSs0C.png",alt:"img"}))),Object(o.b)("h3",{id:"download"},"Download"),Object(o.b)("p",null,"If you want to use the example .VTEX_C file created by this tutorial to use in your mod, you can download it ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mediafire.com/download/fgce2192os392on/iw_msg_01.zip"}),"here"),". For comparison:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/AQT6Foz.png",alt:"img"}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/JpsmJxS.png",alt:"img"}))),Object(o.b)("h3",{id:"bonus-gif"},"Bonus GIF"),Object(o.b)(r.a,{id:"AmpleNaiveKiwi",mdxType:"Gfycat"}))}u.isMDXComponent=!0},177:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return b}));var n=i(0),o=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(i),d=n,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||r;return i?o.a.createElement(b,l(l({ref:t},s),{},{components:i})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<r;s++)a[s]=i[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},178:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i(0),o=i.n(n);function r({id:e,aspectRatio:t=4/3}){return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i(0),o=i.n(n);function r({id:e,playlistId:t,aspectRatio:i=16/9}){const n=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/i*100+"%"}},o.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);