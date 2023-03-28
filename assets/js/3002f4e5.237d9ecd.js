"use strict";(self.webpackChunkrestyle=self.webpackChunkrestyle||[]).push([[462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={id:"predefined-components",title:"Predefined components"},i=void 0,p={unversionedId:"fundamentals/components/predefined-components",id:"fundamentals/components/predefined-components",title:"Predefined components",description:"This library comes with predefined functions to create a Box and Text component, as seen in action in the introductory example. These come as functions instead of ready-made components to give you a chance to provide the type of your theme object. Doing this will make all props that map to theme values have proper types configured, based on what's available in your theme.",source:"@site/docs/fundamentals/components/predefined-components.md",sourceDirName:"fundamentals/components",slug:"/fundamentals/components/predefined-components",permalink:"/restyle/fundamentals/components/predefined-components",draft:!1,editUrl:"https://github.com/shopify/restyle/edit/master/docusaurus/docs/fundamentals/components/predefined-components.md",tags:[],version:"current",lastUpdatedBy:"Matt Frances",lastUpdatedAt:1680025460,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"predefined-components",title:"Predefined components"},sidebar:"docs",previous:{title:"Components",permalink:"/restyle/fundamentals/components"},next:{title:"Custom components",permalink:"/restyle/fundamentals/components/custom-components"}},s={},l=[{value:"Box",id:"box",level:4},{value:"Text",id:"text",level:4}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This library comes with predefined functions to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," component, as seen in action in the introductory example. These come as functions instead of ready-made components to give you a chance to provide the type of your theme object. Doing this will make all props that map to theme values have proper types configured, based on what's available in your theme."),(0,r.kt)("h4",{id:"box"},"Box"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// In Box.tsx\nimport {createBox} from '@shopify/restyle';\nimport {Theme} from './theme';\n\nconst Box = createBox<Theme>();\n\nexport default Box;\n")),(0,r.kt)("p",null,"The Box component comes with the following ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/restyle-functions#predefined-restyle-functions"},"Restyle functions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"visible"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"layout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spacing"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"border"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shadow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"position"),"."),(0,r.kt)("h4",{id:"text"},"Text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// In Text.tsx\nimport {createText} from '@shopify/restyle';\nimport {Theme} from './theme';\n\nconst Text = createText<Theme>();\n\nexport default Text;\n")),(0,r.kt)("p",null,"The Text component comes with the following ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/restyle-functions#predefined-restyle-functions"},"Restyle functions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"textDecorationColor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"visible"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"typography"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"textShadow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spacing"),". It also includes a ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/variants"},"variant")," that picks up styles under the ",(0,r.kt)("inlineCode",{parentName:"p"},"textVariants")," key in your theme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// In your theme\nconst theme = createTheme({\n  ...,\n  textVariants: {\n    header: {\n      fontFamily: 'ShopifySans-Bold',\n      fontWeight: 'bold',\n      fontSize: 34,\n      lineHeight: 42.5,\n      color: 'black',\n    },\n    subheader: {\n      fontFamily: 'ShopifySans-SemiBold',\n      fontWeight: '600',\n      fontSize: 28,\n      lineHeight: 36,\n      color: 'black',\n    },\n    body: {\n      fontFamily: 'ShopifySans',\n      fontSize: 16,\n      lineHeight: 24,\n      color: 'black',\n    },\n  },\n});\n\n// In a component\n<Text variant=\"header\">Header</Text>\n")))}m.isMDXComponent=!0}}]);