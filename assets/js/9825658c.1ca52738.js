"use strict";(self.webpackChunkrestyle=self.webpackChunkrestyle||[]).push([[661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={id:"shopify-design-system",title:"Getting Setup With the Shopify Design System"},i=void 0,a={unversionedId:"guides/shopify-design-system",id:"guides/shopify-design-system",title:"Getting Setup With the Shopify Design System",description:"To start using Shopify style assets we can leverage Polaris tokens. You can see all of the tokens here.",source:"@site/docs/guides/shopify-design-system.md",sourceDirName:"guides",slug:"/guides/shopify-design-system",permalink:"/guides/shopify-design-system",draft:!1,editUrl:"https://github.com/shopify/restyle/edit/master/docusaurus/docs/guides/shopify-design-system.md",tags:[],version:"current",lastUpdatedBy:"Marek Fo\u0159t",lastUpdatedAt:1675325340,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"shopify-design-system",title:"Getting Setup With the Shopify Design System"},sidebar:"docs",previous:{title:"Implementing dark mode",permalink:"/guides/dark-mode"},next:{title:"Migrating to Restyle V2",permalink:"/guides/migrating-to-v2"}},p={},l=[{value:"Installation",id:"installation",level:4},{value:"Define Your Theme",id:"define-your-theme",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To start using Shopify style assets we can leverage ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Shopify/polaris/tree/main/polaris-tokens"},"Polaris tokens"),". You can see all of the tokens ",(0,o.kt)("a",{parentName:"p",href:"https://polaris.shopify.com/tokens/colors"},"here"),"."),(0,o.kt)("h4",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install @shopify/polaris-tokens --save")),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"yarn"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @shopify/polaris-tokens")),(0,o.kt)("h4",{id:"define-your-theme"},"Define Your Theme"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// In theme\nimport tokens from '@shopify/polaris-tokens';\nimport {createTheme} from '@shopify/restyle';\n\nconst pxToNumber = (px: string) => {\n  return parseInt(px.replace('px', ''), 10);\n};\n\nconst theme = createTheme({\n  colors: {\n    body: tokens.colorBlack,\n    backgroundRegular: tokens.colorWhite,\n    backgroundSubdued: tokens.colorSkyLighter,\n\n    foregroundRegular: tokens.colorBlack,\n    foregroundOff: tokens.colorInkLight,\n    foregroundSubdued: tokens.colorInkLightest,\n    foregroundContrasting: tokens.colorWhite,\n    foregroundSuccess: tokens.colorGreenDark,\n\n    highlightPrimary: tokens.colorIndigo,\n    highlightPrimaryDisabled: tokens.colorIndigoLight,\n\n    buttonBackgroundPlain: tokens.colorSky,\n    errorPrimary: tokens.colorRed,\n\n    iconBackgroundDark: tokens.colorBlueDarker,\n  },\n  spacing: {\n    none: tokens.spacingNone,\n    xxs: pxToNumber(tokens.spacingExtraTight),\n    xs: pxToNumber(tokens.spacingTight),\n    s: pxToNumber(tokens.spacingBaseTight),\n    m: pxToNumber(tokens.spacingBase),\n    l: pxToNumber(tokens.spacingLoose),\n    xl: pxToNumber(tokens.spacingExtraLoose),\n    xxl: 2 * pxToNumber(tokens.spacingExtraLoose),\n  },\n});\n\nexport type Theme = typeof theme;\nexport default theme;\n")),(0,o.kt)("p",null,"Now you can easily style your components with ",(0,o.kt)("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris"),"."))}u.isMDXComponent=!0}}]);