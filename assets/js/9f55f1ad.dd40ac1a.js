"use strict";(self.webpackChunkrestyle=self.webpackChunkrestyle||[]).push([[433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"colors",title:"Colors"},l=void 0,i={unversionedId:"fundamentals/colors",id:"fundamentals/colors",title:"Colors",description:"When working with colors in a design system a common pattern is to have a palette including a number of base colors with darker and lighter shades, see for example the Polaris Color Palette.",source:"@site/docs/fundamentals/colors.md",sourceDirName:"fundamentals",slug:"/fundamentals/colors",permalink:"/restyle/fundamentals/colors",draft:!1,editUrl:"https://github.com/shopify/restyle/edit/master/docusaurus/docs/fundamentals/colors.md",tags:[],version:"current",lastUpdatedBy:"Matt Frances",lastUpdatedAt:1675347782,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"colors",title:"Colors"},sidebar:"docs",previous:{title:"Defining your theme",permalink:"/restyle/fundamentals/defining-your-theme"},next:{title:"Spacing",permalink:"/restyle/fundamentals/spacing"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When working with colors in a design system a common pattern is to have a palette including a number of base colors with darker and lighter shades, see for example the ",(0,a.kt)("a",{parentName:"p",href:"https://polaris.shopify.com/design/colors#color-palette"},"Polaris Color Palette"),"."),(0,a.kt)("p",null,"This palette should preferrably not be directly included as values in the theme. The naming of colors in the theme object should instead be used to assign semantic meaning to the palette, see this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const palette = {\n  purpleLight: '#8C6FF7',\n  purplePrimary: '#5A31F4',\n  purpleDark: '#3F22AB',\n\n  greenLight: '#56DCBA',\n  greenPrimary: '#0ECD9D',\n  greenDark: '#0A906E',\n\n  black: '#0B0B0B',\n  white: '#F0F2F3',\n};\n\nconst theme = createTheme({\n  colors: {\n    mainBackground: palette.white,\n    mainForeground: palette.black,\n    cardPrimaryBackground: palette.purplePrimary,\n    buttonPrimaryBackground: palette.purplePrimary,\n  },\n});\n")),(0,a.kt)("p",null,"Taking the time to define these semantic meanings comes with a number of benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's easy to understand where and in what context colors are applied throughout the app"),(0,a.kt)("li",{parentName:"ul"},"If changes are made to the palette (e.g. the purple colors are changed to a shade of blue instead), we only have to update what the semantic names point to instead of updating all references to ",(0,a.kt)("inlineCode",{parentName:"li"},"purplePrimary")," throughout the app."),(0,a.kt)("li",{parentName:"ul"},"Even though ",(0,a.kt)("inlineCode",{parentName:"li"},"cardPrimaryBackground")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"buttonPrimaryBackground")," point to the same color in the example above, deciding that buttons should instead be green (while cards remain purple) becomes a trivial change."),(0,a.kt)("li",{parentName:"ul"},"A theme can easily be ",(0,a.kt)("a",{parentName:"li",href:"/dark-mode"},"swapped at runtime"),".")))}u.isMDXComponent=!0}}]);