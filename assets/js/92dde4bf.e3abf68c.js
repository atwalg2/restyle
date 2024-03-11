"use strict";(self.webpackChunkrestyle=self.webpackChunkrestyle||[]).push([[795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={id:"migrating-to-v2",title:"Migrating to Restyle V2"},a=void 0,s={unversionedId:"guides/migrating-to-v2",id:"guides/migrating-to-v2",title:"Migrating to Restyle V2",description:"v2 of this library introduces breaking changes in the usage of the useRestyle hook.",source:"@site/docs/guides/migrating-to-v2.md",sourceDirName:"guides",slug:"/guides/migrating-to-v2",permalink:"/restyle/guides/migrating-to-v2",draft:!1,editUrl:"https://github.com/shopify/restyle/edit/master/docusaurus/docs/guides/migrating-to-v2.md",tags:[],version:"current",lastUpdatedBy:"Colin T.A. Gray",lastUpdatedAt:1710178517,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{id:"migrating-to-v2",title:"Migrating to Restyle V2"},sidebar:"docs",previous:{title:"Getting Setup With the Shopify Design System",permalink:"/restyle/guides/shopify-design-system"}},l={},p=[{value:"Addressing breaking changes in <code>useRestyle</code>",id:"addressing-breaking-changes-in-userestyle",level:2},{value:"Before",id:"before",level:3},{value:"After",id:"after",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"v2 of this library introduces breaking changes in the usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRestyle")," hook.\nIf you are not using ",(0,o.kt)("inlineCode",{parentName:"p"},"useRestyle")," in your project, then you don't need to address any breaking change and can upgrade the library right away."),(0,o.kt)("h2",{id:"addressing-breaking-changes-in-userestyle"},"Addressing breaking changes in ",(0,o.kt)("inlineCode",{parentName:"h2"},"useRestyle")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import ",(0,o.kt)("inlineCode",{parentName:"li"},"composeRestyleFunctions")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"@shopify/restyle")),(0,o.kt)("li",{parentName:"ol"},"Wrap the array you were using as param of ",(0,o.kt)("inlineCode",{parentName:"li"},"useRestyle")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"composeRestyleFunctions")),(0,o.kt)("li",{parentName:"ol"},"Done")),(0,o.kt)("h3",{id:"before"},"Before"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {TouchableOpacity, View} from 'react-native';\nimport {\n  useRestyle,\n  spacing,\n  border,\n  backgroundColor,\n  SpacingProps,\n  BorderProps,\n  BackgroundColorProps,\n} from '@shopify/restyle';\n\nimport Text from './Text';\nimport {Theme} from './theme';\n\nconst restyleFunctions = [spacing, border, backgroundColor];\ntype Props = SpacingProps<Theme> &\n  BorderProps<Theme> &\n  BackgroundColorProps<Theme> & {\n    onPress: () => void;\n  };\n\nconst Button = ({onPress, label, ...rest}: Props) => {\n  const props = useRestyle(restyleFunctions, rest);\n\n  return (\n    <TouchableOpacity onPress={onPress}>\n      <View {...props}>\n        <Text variant=\"buttonLabel\">{label}</Text>\n      </View>\n    </TouchableOpacity>\n  );\n};\n")),(0,o.kt)("h3",{id:"after"},"After"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {TouchableOpacity, View} from 'react-native';\nimport {\n  useRestyle,\n  spacing,\n  border,\n  backgroundColor,\n  SpacingProps,\n  BorderProps,\n  BackgroundColorProps,\n  composeRestyleFunctions,\n} from '@shopify/restyle';\n\nimport Text from './Text';\nimport {Theme} from './theme';\n\nconst restyleFunctions = composeRestyleFunctions([\n  spacing,\n  border,\n  backgroundColor,\n]);\ntype Props = SpacingProps<Theme> &\n  BorderProps<Theme> &\n  BackgroundColorProps<Theme> & {\n    onPress: () => void;\n  };\n\nconst Button = ({onPress, label, ...rest}: Props) => {\n  const props = useRestyle(restyleFunctions, rest);\n\n  return (\n    <TouchableOpacity onPress={onPress}>\n      <View {...props}>\n        <Text variant=\"buttonLabel\">{label}</Text>\n      </View>\n    </TouchableOpacity>\n  );\n};\n")))}u.isMDXComponent=!0}}]);