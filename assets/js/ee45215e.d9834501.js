(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99857],{46514:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s=a.p+"assets/images/social-card-736cfe55fc7bba07204176852d67c0d5.png"},46768:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var s=a(24246),i=(a(27378),a(66222)),r=a(36712);function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){A(e,t,a[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function p(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,r.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:a}=e,s=a?` (${function(e){const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const a=Math.floor(Math.log(e)/Math.log(1024));return 0===a?`${e} ${t[a]}`:`${(e/1024**a).toFixed(1)} ${t[a]}`}(a)})`:"";return(0,r.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:s})}case"offline":return(0,r.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,r.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,r.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}}function c(e){const{img:t}=e,a=o(e,["img"]);return"string"==typeof t||"default"in t?(0,s.jsx)("img",n({src:"string"==typeof t?t:t.default},a)):(0,s.jsx)(i.Z,g(n({},a),{height:null!==(r=t.src.height)&&void 0!==r?r:100,width:null!==(A=t.src.width)&&void 0!==A?A:100,placeholder:{lqip:t.preSrc},src:t.src.src,srcSet:t.src.images.map((e=>g(n({},e),{src:e.path}))),getMessage:p}));var r,A}},96076:(e,t,a)=>{"use strict";a.d(t,{Gl:()=>p,qg:()=>c,cQ:()=>d});var s=a(24246),i=(a(27378),a(14088)),r=a(41428),A=a(46768);const n={carousel:"carousel_raHC",navButton:"navButton_qSul",dotGroup:"dotGroup_n_95",siteSlide:"siteSlide_AwQk",siteLink:"siteLink_IglZ"};function g({index:e,site:t}){return(0,s.jsxs)(i.Mi,{index:e,className:n.siteSlide,children:[(0,s.jsx)(A.Z,{img:t.image,alt:t.name,loading:0===e?"eager":"lazy"}),(0,s.jsxs)(r.Z,{to:t.url,className:n.siteLink,target:"_blank",children:["\ud83d\udd17 ",t.name]})]})}function o({sites:e,aspectRatio:t}){return(0,s.jsxs)(i.sj,{naturalSlideWidth:1,naturalSlideHeight:1/t,totalSlides:e.length,infinite:!0,className:n.carousel,children:[(0,s.jsx)(i.iR,{children:e.map(((e,t)=>(0,s.jsx)(g,{index:t,site:e},t)))}),(0,s.jsx)(i.P1,{className:n.navButton,style:{right:-20},children:">"}),(0,s.jsx)(i.jp,{className:n.navButton,style:{left:-20},children:"<"}),(0,s.jsx)(i.I5,{className:n.dotGroup})]})}function p(){return(0,s.jsx)(o,{aspectRatio:1072/584,sites:[{name:"Prettier",image:a(49911),url:"https://prettier.io/"},{name:"Babel",image:a(759),url:"https://babeljs.io/"},{name:"React-Native",image:a(45058),url:"https://archive.reactnative.dev/"},{name:"Katex",image:a(91551),url:"https://katex.org/docs/"},{name:"Docusaurus",image:a(92037),url:"https://v1.docusaurus.io/"}]})}function c(){return(0,s.jsx)(o,{aspectRatio:2148/1194,sites:[{name:"Tauri",image:a(11384),url:"https://tauri.app/"},{name:"Figma",image:a(58155),url:"https://www.figma.com/plugin-docs/"},{name:"Snapchat",image:a(11937),url:"https://docs.snap.com/"},{name:"Iota",image:a(44827),url:"https://wiki.iota.org/"},{name:"SAP Cloud",image:a(42444),url:"https://sap.github.io/cloud-sdk/"},{name:"Supabase",image:a(45785),url:"https://supabase.com/docs"},{name:"StackBlitz",image:a(33339),url:"https://developer.stackblitz.com/"},{name:"Lacework",image:a(11342),url:"https://docs.lacework.com/"},{name:"React-Navigation",image:a(70054),url:"https://reactnavigation.org/"},{name:"Solana",image:a(44102),url:"https://docs.solana.com/"},{name:"Gulp",image:a(9258),url:"https://gulpjs.com/"}]})}function d(){return(0,s.jsx)(o,{aspectRatio:2148/1194,sites:[{name:"Ionic",image:a(31256),url:"https://ionicframework.com/docs/"},{name:"Outerbounds",image:a(10712),url:"https://outerbounds.com/docs/"},{name:"Courier",image:a(97814),url:"https://www.courier.com/docs/"},{name:"Quickwit",image:a(13296),url:"https://quickwit.io/docs/"},{name:"Dyte",image:a(42431),url:"https://docs.dyte.io/"},{name:"React-Native",image:a(48426),url:"https://reactnative.dev/"},{name:"Hasura",image:a(97314),url:"https://hasura.io/docs/"},{name:"Datagit",image:a(29743),url:"https://www.datagit.ir/"}]})}},6698:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(24246),i=(a(27378),a(40624));const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){A(e,t,a[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o({children:e,minHeight:t,url:a="http://localhost:3000",style:A,bodyStyle:o}){return(0,s.jsxs)("div",{className:r.browserWindow,style:g(n({},A),{minHeight:t}),children:[(0,s.jsxs)("div",{className:r.browserWindowHeader,children:[(0,s.jsxs)("div",{className:r.buttons,children:[(0,s.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,i.Z)(r.browserWindowAddressBar,"text--truncate"),children:a}),(0,s.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar})]})})]}),(0,s.jsx)("div",{className:r.browserWindowBody,style:o,children:e})]})}},80566:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(24246),i=(a(27378),a(41428));function r({size:e=54}){return(0,s.jsx)(i.Z,{to:"https://news.ycombinator.com/item?id=32303052",style:{display:"block",width:e,height:e},children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:e,children:[(0,s.jsx)("path",{fill:"#FF6D00",d:"M42 42H6V6h36v36z"}),(0,s.jsx)("path",{fill:"#FFF",d:"M8 8v32h32V8H8zm30 30H10V10h28v28z"}),(0,s.jsx)("path",{fill:"#FFF",d:"M23 32h2v-6l5.5-10h-2.1L24 24.1 19.6 16h-2.1L23 26z"})]})})}},58562:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var s=a(24246),i=(a(27378),a(40624)),r=a(41428);function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){A(e,t,a[t])}))}return e}function g({className:e,style:t}){return(0,s.jsx)(r.Z,{to:"https://www.producthunt.com/posts/docusaurus-2-0?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-docusaurus-2-0",className:(0,i.Z)("producthunt-badge-widget",e),style:n({display:"block",width:250,height:54},t),children:(0,s.jsx)("img",{className:"producthunt-badge-widget",src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=353916&theme=light",alt:"Docusaurus 2.0 - Build optimized websites quickly, focus on your content. | Product Hunt",style:{width:250,height:54,maxWidth:"initial"},width:250,height:54})})}},76186:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s=a.p+"assets/images/social-card-736cfe55fc7bba07204176852d67c0d5.png"},44604:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>A,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>o});var s=a(24246),i=a(71670);a(28475),a(6698),a(58562),a(80566),a(64257),a(66448),a(97360),a(96076);const r={title:"Announcing Docusaurus 2.0",authors:["slorber","Josh-Cena","yangshun","lex111","zpao",{key:"JMarcey",title:"Co-creator of Docusaurus 1"}],tags:["release"],image:"./img/social-card.png"},A=void 0,n={permalink:"/blog/2022/08/01/announcing-docusaurus-2.0",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022/08-01-announcing-docusaurus-2.0/index.mdx",source:"@site/blog/2022/08-01-announcing-docusaurus-2.0/index.mdx",title:"Announcing Docusaurus 2.0",description:"Today we are extremely happy to finally announce Docusaurus 2.0! \ud83e\udd73\ufe0f",date:"2022-08-01T00:00:00.000Z",tags:[{inline:!1,label:"Release",permalink:"/blog/tags/release",description:"Blog posts about Docusaurus' new releases"}],readingTime:12.075,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",page:{permalink:"/blog/authors/slorber"},description:"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\n",socials:{x:"https://x.com/sebastienlorber",linkedin:"https://www.linkedin.com/in/sebastienlorber/",github:"https://github.com/slorber",newsletter:"https://thisweekinreact.com"},imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Joshua Chen",title:"Working hard on Docusaurus",url:"https://joshcena.com/",email:"sidachen2003@gmail.com",page:{permalink:"/blog/authors/josh-cena"},imageURL:"https://github.com/josh-cena.png",key:"Josh-Cena"},{name:"Yangshun Tay",title:"Front End Engineer at Meta",url:"https://github.com/yangshun",page:{permalink:"/blog/authors/yangshun"},socials:{x:"https://x.com/yangshunz",github:"https://github.com/yangshun"},imageURL:"https://github.com/yangshun.png",key:"yangshun"},{name:"Alexey Pyltsyn",title:"Open-source enthusiast",url:"https://github.com/lex111",email:"lex@php.net",page:{permalink:"/blog/authors/lex-111"},imageURL:"https://github.com/lex111.png",key:"lex111"},{name:"Paul O\u2019Shannessy",title:"Engineering Manager at Meta",url:"https://x.com/zpao",page:{permalink:"/blog/authors/zpao"},socials:{x:"https://x.com/zpao",github:"https://github.com/zpao"},imageURL:"https://github.com/zpao.png",key:"zpao"},{name:"Joel Marcey",title:"Co-creator of Docusaurus 1",url:"https://twitter.com/JoelMarcey",page:{permalink:"/blog/authors/j-marcey"},socials:{x:"https://x.com/joelmarcey",github:"https://github.com/JoelMarcey"},imageURL:"https://github.com/JoelMarcey.png",key:"JMarcey"}],frontMatter:{title:"Announcing Docusaurus 2.0",authors:["slorber","Josh-Cena","yangshun","lex111","zpao",{key:"JMarcey",title:"Co-creator of Docusaurus 1"}],tags:["release"],image:"./img/social-card.png"},unlisted:!1,lastUpdatedAt:1724085068e3,lastUpdatedBy:"Boris Depoortere",prevItem:{title:"Docusaurus 2.1",permalink:"/blog/2022/09/01/docusaurus-2.1"},nextItem:{title:"Docusaurus 2021 Recap",permalink:"/blog/2022/01/24/docusaurus-2021-recap"}},g={image:a(46514).Z,authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0]},o=[];function p(e){const t={a:"a",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Today we are extremely happy to finally ",(0,s.jsx)(t.strong,{children:"announce Docusaurus 2.0"}),"! \ud83e\udd73\ufe0f"]}),"\n",(0,s.jsxs)(t.p,{children:["At ",(0,s.jsx)(t.a,{href:"https://opensource.fb.com/",children:(0,s.jsx)(t.strong,{children:"Meta Open Source"})}),", we believe Docusaurus will help you build the ",(0,s.jsx)(t.strong,{children:"best documentation websites"})," with ",(0,s.jsx)(t.strong,{children:"minimal effort"}),", letting you ",(0,s.jsx)(t.strong,{children:"focus on what really matters"}),": writing the content."]}),"\n",(0,s.jsxs)(t.p,{children:["After ",(0,s.jsxs)(t.strong,{children:["4 years of work, ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-alpha.75",children:"75 alphas"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.22",children:"22 betas"})]}),", the next generation of Docusaurus is ",(0,s.jsx)(t.strong,{children:"ready for prime time"}),". From now on, we now plan to ",(0,s.jsxs)(t.strong,{children:["respect ",(0,s.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"})]})," and will release ",(0,s.jsx)(t.strong,{children:"major versions more frequently"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"social-card image",src:a(76186).Z+"",width:"1200",height:"600"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},759:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/babel.cbc364a.640.png 640w,"+a.p+"assets/ideal-img/babel.3669cfa.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/babel.cbc364a.640.png",width:640,height:355},{path:a.p+"assets/ideal-img/babel.3669cfa.1030.png",width:1030,height:571}],src:a.p+"assets/ideal-img/babel.cbc364a.640.png",toString:function(){return a.p+"assets/ideal-img/babel.cbc364a.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AHW3yo+qtZWouZOjuZCTupGGu4yEuoKCt3yHsnCOwQDI2OD07urj4uHc29ns6+fy8+3y8+3s7Oj18enC0+UA1ODq/vz78vP06+vu8PDz9PT38/P39/f5////0dbpANjf6f/9/Pj28fDs4PXy6P767/757v359P///+TH1wDb3ej4/Pv1+PPw8eb1+O31+Oz1+ez4+/b+///vwMwA1p7J1Zuk2JSQ1oZ71IB01Htx1nhv23lw3Xxy5m11yK+UrA2JDh4AAAAASUVORK5CYII="}},92037:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/docusaurus.2ad1782.640.png 640w,"+a.p+"assets/ideal-img/docusaurus.ba4280f.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/docusaurus.2ad1782.640.png",width:640,height:355},{path:a.p+"assets/ideal-img/docusaurus.ba4280f.1030.png",width:1030,height:571}],src:a.p+"assets/ideal-img/docusaurus.2ad1782.640.png",toString:function(){return a.p+"assets/ideal-img/docusaurus.2ad1782.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nBXJPQuCQBgA4PvBQWE4CEFBSwQhRG1KU1M/oYYCzaCGCLIPjb4uQ++6pNOztHqjZ32QPFk0LbM1MtW+0eiZDX1c18ZV3VD0QV63kLU7xSL0yPnkbRn3aHQJxZVGPhdkaF/Q8kgAIIkfd4pf4p4m4Tfjn3cKAPOlj1zM/p1wEhzYDYcMC+5/MwEA2Fqhw/nf4skD4gTUpbd9FOPsHX0A2HCGVp2prXU3bXVdU+yKtC5LTqngKnm3VPRy8g+/UpX4n6rSEgAAAABJRU5ErkJggg=="}},91551:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/katex.2b3ecc9.640.png 640w,"+a.p+"assets/ideal-img/katex.91ac937.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/katex.2b3ecc9.640.png",width:640,height:355},{path:a.p+"assets/ideal-img/katex.91ac937.1030.png",width:1030,height:571}],src:a.p+"assets/ideal-img/katex.2b3ecc9.640.png",toString:function(){return a.p+"assets/ideal-img/katex.2b3ecc9.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nAXB3wrBUBwA4PPAaiHSduOGG4UiV0rIC3gCNwqToraz5d8K46zNzraznbMxP9+HqqrV3eiDldFfmp252Z4arQluTLA83UnjA1pfbJFxQv2n51LOaMbiXPgiiri/wARplgP5N04S50VCSlkY8ThJRQYAe40gwyIAOWPMth9vzw0CGoZBygUA3FYYna4kB6Asvr8c4r1dGkQiFZ/vD8BfbBEeqfpwZva6elPW6mVNKeKadKxJZ6VkFyp/r/+XglW08JQAAAAASUVORK5CYII="}},49911:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/prettier.0987194.640.png 640w,"+a.p+"assets/ideal-img/prettier.ac62bde.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/prettier.0987194.640.png",width:640,height:355},{path:a.p+"assets/ideal-img/prettier.ac62bde.1030.png",width:1030,height:571}],src:a.p+"assets/ideal-img/prettier.0987194.640.png",toString:function(){return a.p+"assets/ideal-img/prettier.0987194.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nDXCzwvBUBwA8PcHO6yWQktIK0kcnJRc5OIosZ1wkXKRNjYchmbzY794tnnv7SsHnz6IGy6rfbnWkyqdkViXxJJULspCYcyXB6naDM23Bvac4+mk69rFNv2n6z9dx7uzOJiuTaQYNwCGo4gwBn+MJQCwUm2kGVegJMD4FYaUEEbp74cAwHm+QfrBihnx8Nt6uO4Le/gdhHFEaALgTJZIaS+UVldrNlQxqxbTmzy/zXG7DLcXeDOV/gIPyZWv09LiSwAAAABJRU5ErkJggg=="}},45058:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/react-native.e8025ec.640.png 640w,"+a.p+"assets/ideal-img/react-native.8cebf9a.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/react-native.e8025ec.640.png",width:640,height:355},{path:a.p+"assets/ideal-img/react-native.8cebf9a.1030.png",width:1030,height:571}],src:a.p+"assets/ideal-img/react-native.e8025ec.640.png",toString:function(){return a.p+"assets/ideal-img/react-native.e8025ec.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AGisw32brIaZrYCSqn2EroB1rX52r5eYzoGMumSBtwC8ztfm4uHZ2dnLy8rP0c/i49/q6+f4+fX/+/S7zN8Az9zl+/n38vP04uTm6enq7O3u7Ovt9vb3////0NXpANDY4vXz8vHx8efm5+zr6vPy8vTz8vv4+f///+PG1wDY2+b3+/ni6OnO1djY3d/d4uTb4OPu8fL////uwMwA1p7J1pylzYiFvW5iu2dcu2NZulxUz2tk33505mx04r2PDpDiiAMAAAAASUVORK5CYII="}},97814:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/courier.e9b71f4.640.png 640w,"+a.p+"assets/ideal-img/courier.f8addf0.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/courier.e9b71f4.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/courier.f8addf0.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/courier.e9b71f4.640.png",toString:function(){return a.p+"assets/ideal-img/courier.e9b71f4.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AIyt27SXz7ud17eW2bGD269z3qhv3p5x3ZJw2X1+2gDIyeH52u/XwdTDq8LRu8/SvdLQu9Hm1+j/8//EzewAz9ro+/j+3dzizczR1NPY19XbxMHIxLzH49/hvb7XANTW5/ft+Pr3+//+/v39/f///8S+xUIjSS8XPIZdfwDW1ub39v3y9Pju8fTy9vj///+4uMImFDceEjeUVXkA1pzJ1Jej2JKO2IZ61oB024B1zGpjrUNDrERE11Vl8lGDEKxF5owAAAAASUVORK5CYII="}},29743:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/datagit.98630dd.640.png 640w,"+a.p+"assets/ideal-img/datagit.afeea1f.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/datagit.98630dd.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/datagit.afeea1f.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/datagit.98630dd.640.png",toString:function(){return a.p+"assets/ideal-img/datagit.98630dd.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAtElEQVR4nB3MSwtBQRiH8fm+SkoSycLOykI2ZOUb2CqxILlEJ5dDlFyaFIccnZk5877zF+un3yMah3B+UytpvJOZLsykb0Y90+urzjCstaVYyhcAdg6Ati6M6RFGlhiIB/5d+JcnAGMptsTETKyUUTomsjNPisP1l91fR5rfEQdvzUQAzsO1OJ4DAIqcIheR+1j3+Gj9vwfdidg0x+t6a1ut7MoFv5Txi+ldLrXPJvf5lEykv9L2nupSFk8xAAAAAElFTkSuQmCC"}},42431:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/dyte.b411d0a.640.png 640w,"+a.p+"assets/ideal-img/dyte.9d967ec.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/dyte.b411d0a.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/dyte.9d967ec.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/dyte.b411d0a.640.png",toString:function(){return a.p+"assets/ideal-img/dyte.b411d0a.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAvElEQVR4nCXJPQ/BQBgA4Pu9FqSDIBKjicFmEIPERmwkWCQkREvQpr4SJK7otb1DtXp3r4hnfVBhZrfmZHpg6uGpLkJt+BkP/H6PNjqs2LyhWmfZ7por82RZl3foCxBSSi4iABgaDlJ3FucCM/9IGKYv2/+QgLNAAIC2xEjfYwBJXM/1vIj/CcF/fR7paLO3JIBD6eVuXx2XsAd9B2H0e2cwRUZ1olfqZrlkFrLrvGLklE06sUvFt5kkjilfulmaxNksu3AAAAAASUVORK5CYII="}},97314:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/hasura.e4f3ebd.640.png 640w,"+a.p+"assets/ideal-img/hasura.226d6d3.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/hasura.e4f3ebd.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/hasura.226d6d3.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/hasura.e4f3ebd.640.png",toString:function(){return a.p+"assets/ideal-img/hasura.e4f3ebd.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFqhu2SFmW2FnGR7l2Bpl2Fcl1pXk1dblk1lm1N7tgBGXm0VGyImLjUhKC0cJCgdJykbJSYWHyERHB0sSGIASl1sGSIqJi81KzI4KDA1JCsxJSwyISkvGiAiOUJZAFJgbxwkLCYuNiUtNR8nLiIqMh8mLiQqMhooLk42TABOWWkPHSUbKTMgMkEcLTsjNEEdMD4hMD4XNEFYMUUAtn6soWhzqmZjqFpPplJIqFBHqElCq0lCp0hAxUpUim0yiR9LFnEAAAAASUVORK5CYII="}},31256:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/ionic.7f10b53.640.png 640w,"+a.p+"assets/ideal-img/ionic.cd19b49.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/ionic.7f10b53.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/ionic.cd19b49.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/ionic.7f10b53.640.png",toString:function(){return a.p+"assets/ideal-img/ionic.7f10b53.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJbY7s3o99Xo+tPk+8DK/MbA+ci/98HB98DM+Ji26gDK3ej//Pzy8vLs6+rn6u74+vn////x8u/w7OXE1uoA0d7p////7u/w4uPm6Ojq7e7z8/T309PW19fWub7UANTd6P/+/vj4+Pj4+fr6/Pr7/fb3+tve5/3//tCzxADZ3en8///0+Pn1+vv2+/v2+/vz+fvO2ef3///crLoA1ZzJ1Zqj2ZSP2ol814F12H1z2Hhv1HFq23lw42ZvKQ2aZPs/3GIAAAAASUVORK5CYII="}},10712:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/outerbounds.7fa8be7.640.png 640w,"+a.p+"assets/ideal-img/outerbounds.17abaf6.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/outerbounds.7fa8be7.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/outerbounds.17abaf6.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/outerbounds.7fa8be7.640.png",toString:function(){return a.p+"assets/ideal-img/outerbounds.7fa8be7.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwklEQVR4nAXBPWvCQBgA4Pu7UhQsUh2Kk2sXF8Ghkz/BqdqCIBkUbf1Ag5GKaFsjyZ2X+3ovd+bt85BuxD9jszip6T6bzPVsBMFQfLzzt/Gt0/8jy3OCWFCasvSaZdR7i17fnUSEIIzJ4vvi81xIBZAbcNY6kMIIgd5MZ0eyin6cBSU1ZTJOtFRWcXZLWYH5cfRFosO1QJQGuJBCG3COZYIybhGTQUDC18mm2wvbL5vW07pZ3T5Xw3p5V3vYNSq/pcd/0kecLyndd98AAAAASUVORK5CYII="}},13296:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/quickwit.aae4257.640.png 640w,"+a.p+"assets/ideal-img/quickwit.e851c05.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/quickwit.aae4257.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/quickwit.e851c05.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/quickwit.aae4257.640.png",toString:function(){return a.p+"assets/ideal-img/quickwit.aae4257.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFyguGaElrfL3djp/8zP+MvA98e99b7C97yt3pmd1QBLYG0jIii6u77x7+3s7On+//z+/fr8/vz/9/PHy+EAVWRzKCszvb/C6uvr4ODi7+7w8vHz8vL0////ztToAFxmdSkrM7/Bw/Ty8ujo6Ors6/T09P38/P///+PF1QBXXW0bIyu4vcDk7OzZ3+Dc4eLn7e72+fr9///uvssAuYCtpGl0zYeD2Ip70n1x13xy13du2XVs3Hpx52tzWcaFkyvPIw8AAAAASUVORK5CYII="}},48426:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/react-native.9ad7a23.640.png 640w,"+a.p+"assets/ideal-img/react-native.02f5343.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/react-native.9ad7a23.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/react-native.02f5343.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/react-native.9ad7a23.640.png",toString:function(){return a.p+"assets/ideal-img/react-native.9ad7a23.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AGaqwXuXqIWWqoKSqoKEroN1rYF2rXVzq32Jt22MwAC/0drp4uDF0NSpvcS+0dTI3N6909nQ3N789+++0eQA0+Dp///90urysdjlttrmuN3rpsXg0+Xw////ztPoANTc5vv5+PTy8ejk5O3p6fn19fz39f36+f///+PG1QDZ3Of09/bv8/Xq7/Hz+Pr0+vv0+vz5/Pz9///uvssA1p3J05eh1Y+L1IN22YN32X9023px3Hhv23pw52pzwqeO97QIzhcAAAAASUVORK5CYII="}},58155:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/figma.e023b25.640.png 640w,"+a.p+"assets/ideal-img/figma.4b79b06.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/figma.e023b25.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/figma.4b79b06.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/figma.e023b25.640.png",toString:function(){return a.p+"assets/ideal-img/figma.e023b25.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AHCswX+aqIearISVrH6Cq4F3rn93r3V1rG54pmeFuQDC09zu6ebp5+fl5OTo6OXu7+rx8ezr7Ojz7+e8zuEA0d7o///++fn65+fo9fX1+Pj5+Pj5/Pz9////0NToANXd5/z6+Pf39+Xk4+Ph5ePi5urp6vv5+f///+PF1QDe4ez////z+Pnf4+rg5O7m6/Hr8fP5/Pz9///uvssA157K1pqk2ZOO1YN50nxz1Xtw2Hdu3Hdv3Hpw52pyiw2SNplStDwAAAAASUVORK5CYII="}},9258:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/gulp.645374a.640.png 640w,"+a.p+"assets/ideal-img/gulp.f298c97.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/gulp.645374a.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/gulp.f298c97.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/gulp.645374a.640.png",toString:function(){return a.p+"assets/ideal-img/gulp.645374a.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJG2zL6ls8OmuMGiubuLs7x9tLd7s7F+taR/rIeGugDU3eb/8/D97+7/8e/97en45N/76eX57On/6+PBx9oA0N/o8fPz7fDy7fDx8fT1/P7++fT189/i////ztLmANHY4u/r6vDu7+/t7fXz8//+/vrt7vXY2v///+PE1QDg4+7////9/v7+///8/v729/j3+/v2+fr4///ru8gA153J1pqj25SQ2ol82IF12X5z2npw3Hdu3Hpw52py1S6WZvfndWMAAAAASUVORK5CYII="}},44827:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/iota.95754da.640.png 640w,"+a.p+"assets/ideal-img/iota.117672c.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/iota.95754da.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/iota.117672c.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/iota.95754da.640.png",toString:function(){return a.p+"assets/ideal-img/iota.95754da.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFOYtVZ2j111kl1zlFpilVtVl09LjkhLjEJSi05uqgA0TWYSGC8lLkQTGzELFy0IFCknOEsoOk4FDSAmQmUAO1BoGyU7NURYHTJIEh83DBQsZJGpbJeuBQ8lSUZpAEBPZwYRJw8qPRVDUwwWLR4sQUpvkUhoihAhNFQxUQA7Rl8ABx0DESgADSUCEigNHjQRJkIVJ0MAGCxJITwAs3uqnWNypmNjpFZOpVJKo0xFoUI8pEE8oUJAxEhVk18yaV+3uG0AAAAASUVORK5CYII="}},11342:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/lacework.dfc8aa5.640.png 640w,"+a.p+"assets/ideal-img/lacework.33303f9.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/lacework.dfc8aa5.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/lacework.33303f9.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/lacework.dfc8aa5.640.png",toString:function(){return a.p+"assets/ideal-img/lacework.dfc8aa5.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AIzU7rnd78Te8cHa8b7I87+69ri19ayx8qCy7oao5wCd1eWz3eO94OTI5eXM6/K43/+bw/6Bqfxji/xTgOoAt93q1/b53PX65fr83/T7zuT8vdT8rMT6nrj/hpzmAN3k7vTw8PLw8Pv6+vHv8P/+/Pn29fXw7P///uTH1gDe4ezx9/bx9vj2+/zw9vj3/f7x9/nq7/Pz///pu8kA153J0JWf1pCN2IZ60ntv1ntw13dt1G9n13Vr52pzffeTuLcnN78AAAAASUVORK5CYII="}},70054:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/react-navigation.1b40364.640.png 640w,"+a.p+"assets/ideal-img/react-navigation.a6b28c6.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/react-navigation.1b40364.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/react-navigation.a6b28c6.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/react-navigation.1b40364.640.png",toString:function(){return a.p+"assets/ideal-img/react-navigation.1b40364.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJna8c3n9tLl99Hh+c3Q+czC+cjA+L+/9bfC8JWz6QDN3u728Pjw7/j29Pz19fv09fr29/zz8/n69vjC1O4Aydfr3dzu2Nrp19fkzc7gzs/g29znxMXitbbevsTiAMzU6c/O7NHR5+Xk7c/O3aWkt+bl7bOy2Kyx29W30wDKzujQ1fHR1vHb4PXZ3/LT1+za4PXP1O/R4Pnaq8gA0pjHz5Oi1I6P1YR71H901Xtz1HNv1XFu1HNv4mVyADiS2eC63VAAAAAASUVORK5CYII="}},42444:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/sap-cloud.f57d7fa.640.png 640w,"+a.p+"assets/ideal-img/sap-cloud.312bf29.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/sap-cloud.f57d7fa.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/sap-cloud.312bf29.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/sap-cloud.f57d7fa.640.png",toString:function(){return a.p+"assets/ideal-img/sap-cloud.f57d7fa.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJjT3Mzc1NLa1tDW2M7F186318i12MG217q50Zas1ADUrU3/pgD8pwv+rBD/uC//uTD/rxH9rQ3/rQDHokwA2bRi/7Ie/bkx/7Yq9rxT9rtS/7Yt/bUx/7QezqJbANzk7P///8XHyN7g4f//+f///dLPyNzZz////+PF1ADf4+7////N2NzW5Ob7///5/v/U3dTV2sr6///uvssA153K0JWe15CK14R2035y1Hlu1HRs1nJr13Vr52pyn7CEdE5qo0kAAAAASUVORK5CYII="}},11937:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/snapchat.5f28663.640.png 640w,"+a.p+"assets/ideal-img/snapchat.39e00a7.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/snapchat.5f28663.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/snapchat.39e00a7.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/snapchat.5f28663.640.png",toString:function(){return a.p+"assets/ideal-img/snapchat.5f28663.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AHGztIijj5GjlYydlIqNkYqAk4Z9lYCAlnJ9iGiGpQDQ2Er96gDz5wP26QDv5RHw5xD47QD26wP/7wDAykgAr7dRwbcEvrcSwLYLvLMWurQWv7gQv7cQxLsFpqZLAD9IY19YEVtVGxUiNy0oMDQ0LTA+PxwZIhkeI1E0SgBITFs2OB44OiggLC8mLSovLSwoLSskKSwbKytaLDkAuH2ppGl3q2ZlrlxPqlRJqE9Fq0pDsk1ErkxDx0pT21lMrI2uNt0AAAAASUVORK5CYII="}},44102:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/solana.8bcac78.640.png 640w,"+a.p+"assets/ideal-img/solana.e7c1e4f.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/solana.8bcac78.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/solana.e7c1e4f.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/solana.8bcac78.640.png",toString:function(){return a.p+"assets/ideal-img/solana.8bcac78.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AJfa783n9dXo+c/g9szP98zB98i/98C+9LfC7pa06QDS5e3+/Pj7+/r8/Pr2+vX7/vr8/fr2+/b///vH2e4A1eLs9Pb08fT09PX26/Dw9vb38vL06/Dx/f38zNHlAN3l7v////z+/v7+//3+/v////7//v39/f///+PG1wCcoKuWmZiVmZqWm5yXm5yVmZqWm5yWmZuRnp2qfIgAsXejmF1noFlUolBDnkk8nUM4oUA3oj41njwywENMFZ6NFBzee74AAAAASUVORK5CYII="}},33339:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/stackblitz.3a585ac.640.png 640w,"+a.p+"assets/ideal-img/stackblitz.786829d.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/stackblitz.3a585ac.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/stackblitz.786829d.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/stackblitz.3a585ac.640.png",toString:function(){return a.p+"assets/ideal-img/stackblitz.3a585ac.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AGmswn6ZqIibrISUq4CDrH90qntyqXNzqGl1omaEuADK2+Tx6+ns6unv7evr6+j4+fT5+vXz8/D//fW+z+IA2ebv/v37+Pr79v7/8vX3ysrMv8DDur3B0tbXzdLmAN3m7////fj5+ff//9bv9SEmKwUIDgYNFR0sM9W5yQDLz9nd4uDZ3d7a4ePE1txxen5kbHBka29oeXnRpLEAv4azsHR/uHJuuGdbuGFUwWdbxGNaxmFZw2JY0FRd0wl8G5D7uNgAAAAASUVORK5CYII="}},45785:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/supabase.e96fd5f.640.png 640w,"+a.p+"assets/ideal-img/supabase.f37ca60.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/supabase.e96fd5f.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/supabase.f37ca60.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/supabase.e96fd5f.640.png",toString:function(){return a.p+"assets/ideal-img/supabase.e96fd5f.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFibsGF8iWx/kGd4jmFljWFWjFxUjFhYjU5ZhVRypgBGWGAXEg4jIiEnJiQcHBgZGhUaGhUcHRkZFQ0yRFcAUV5nHx0cKiorLS0tKSkqJyYoKSgpKCgqHx4cPkNXAFdfaB8dGywsLDIxMS0rKyknJzEvLzAuLyMmI1Y4SABVWWMTFxUiJicnLC0hJicdIiMlKywkKCkTISBbLTkAuX+so2dxqmVgqllMp1FFp01Cqkk/rEc+qEY9xkpSZqAv5L+d0r8AAAAASUVORK5CYII="}},11384:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/tauri.7d284be.640.png 640w,"+a.p+"assets/ideal-img/tauri.4852075.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/tauri.7d284be.640.png",width:640,height:356},{path:a.p+"assets/ideal-img/tauri.4852075.1030.png",width:1030,height:573}],src:a.p+"assets/ideal-img/tauri.7d284be.640.png",toString:function(){return a.p+"assets/ideal-img/tauri.7d284be.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVR4nAG6AEX/AFucsWV/jXCCk2h4kGBljmFXjl9Yk1tbkVBbiFV0qgBFWWMTEhIYGxwuLyQ4ODM0NzMuKhoxNjczNDI5SFcAQ1lmSkM2UUxELTk4S0pKR0hLPzcnQEpYPUpbR0dSAEhWY0ZEOE1HPh4fJTc4PDQ0NyIkKSomIyYmG1w9SwBNUl0PHB4YIicaHyEwNjg0Oz0YHiAkKCcaJyFbLTkAtXypqGt0rWZirVxPpVBDqE1CrExCrUlAqEc+xUlStsQ1Jd2lGVkAAAAASUVORK5CYII="}}}]);