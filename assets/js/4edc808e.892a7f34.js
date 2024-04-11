"use strict";(self.webpackChunkrestyle=self.webpackChunkrestyle||[]).push([[173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>w,frontMatter:()=>b,metadata:()=>v,toc:()=>x});var a=n(7462),r=n(7294),l=n(3905),o=n(6010),s=n(2389),i=n(7392),c=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:l,values:s,groupId:m,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=s??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,c.U)(),[x,T]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==x&&y.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==x&&(N(t),T(a),null!=m&&k(m,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:O},l,{className:(0,o.Z)("tabs__item",d,l?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function y(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,a),hidden:n},t)}const b={id:"getting-started",title:"Getting started",slug:"/"},g=void 0,v={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Build a consistent, themed UI in minutes.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/restyle/",draft:!1,editUrl:"https://github.com/shopify/restyle/edit/master/docusaurus/docs/index.mdx",tags:[],version:"current",lastUpdatedBy:"Talha Naqvi",lastUpdatedAt:1712869575,formattedLastUpdatedAt:"Apr 11, 2024",frontMatter:{id:"getting-started",title:"Getting started",slug:"/"},sidebar:"docs",next:{title:"Fundamentals",permalink:"/restyle/fundamentals"}},k={},x=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Playground",id:"playground",level:2}],T={toc:x};function w(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},T,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Build a consistent, themed UI in minutes.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Welcome example",src:n(2565).Z,width:"700",height:"403"})),(0,l.kt)("p",null,"The Restyle library provides a type-enforced system for building UI components in React Native with TypeScript. It's a library for building UI libraries, with themability as the core focus."),(0,l.kt)("p",null,"This library assumes that the UI is built upon a design system that (at the very least) defines a set of colors and spacing constants that lays as a foundation. While the library acknowledges that there can be exceptions to the system by allowing any style to be overridden, it keeps the developer most productive when one-off values are kept to a minimum."),(0,l.kt)("p",null,"Here's an example of how a view built with Restyle components could look:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  ThemeProvider,\n  createBox,\n  createText,\n  createRestyleComponent,\n  createVariant,\n  VariantProps,\n} from \'@shopify/restyle\';\n\n// See the "Defining your theme" section under "Fundamentals"\nimport theme, {Theme} from \'./theme\';\n\nconst Box = createBox<Theme>();\nconst Text = createText<Theme>();\n\nconst Card = createRestyleComponent<\n  VariantProps<Theme, \'cardVariants\'> & React.ComponentProps<typeof Box>,\n  Theme\n>([createVariant({themeKey: \'cardVariants\'})], Box);\n\nconst Welcome = () => {\n  return (\n    <Box\n      flex={1}\n      backgroundColor="mainBackground"\n      paddingVertical="xl"\n      paddingHorizontal="m"\n    >\n      <Text variant="header">Welcome</Text>\n      <Box\n        flexDirection={{\n          phone: \'column\',\n          tablet: \'row\',\n        }}\n      >\n        <Card margin="s" variant="secondary">\n          <Text variant="body">This is a simple example</Text>\n        </Card>\n        <Card margin="s" variant="primary">\n          <Text variant="body">Displaying how to use Restyle</Text>\n        </Card>\n      </Box>\n    </Box>\n  );\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Welcome />\n    </ThemeProvider>\n  );\n};\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Simple example",src:n(2355).Z,width:"700",height:"403"})),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Add the package to your project:"),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(y,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @shopify/restyle\n"))),(0,l.kt)(y,{value:"npm",label:"Npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @shopify/restyle\n"))),(0,l.kt)(y,{value:"expo",label:"Expo",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install @shopify/restyle\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Read more about the usage of ",(0,l.kt)("inlineCode",{parentName:"p"},"Restyle")," ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals"},"here"),"."),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/"},"fixture")," is an example app showing how to use the library."))}w.isMDXComponent=!0},2355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/simple-example-866819cb9b1c401398713cd85972ce1e.gif"},2565:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/welcome-example-53186d2f4fdca35f97ddf093d2e95cca.gif"}}]);