import{c as t,T as c,M as i,H as d,u as l,i as o,O as u,t as a,s as r}from"./index-216d771d.js";const p=({title:e,description:n})=>t(d,{get children(){return[t(c,{get children(){return[e," - Solid Blog"]}}),t(i,{name:"description",content:n}),t(i,{property:"og:title",content:`${e} - Blog`}),t(i,{property:"og:description",content:n})]}}),g=a("<div>"),m=a("<div> min"),h=r("h1")`
  text-align: center;
  margin: 8px 0;
`,$=r("main")`
  padding: 48px 8px;
`,x=r("div")`
  width: 100%;
  height: 400px;
  background: ${e=>`url("${e.src}")`};
  background-size: cover;
  background-position: center;
`,f=r("header")`
  padding-bottom: 32px;
`,b=r("div")`
  display: flex;
  justify-content: space-between;
`;function v(){const e=l();return t($,{get children(){return[t(p,{get title(){return e()?.title||""},get description(){return e()?.description||""}}),t(f,{get children(){return[t(h,{get children(){return e()?.title||""}}),t(x,{get src(){return e()?.thumbnailUrl||""}}),t(b,{get children(){return[(()=>{const n=g();return o(n,()=>e()?.date||""),n})(),(()=>{const n=m(),s=n.firstChild;return o(n,()=>e()?.readingTime||"0",s),n})()]}})]}}),t(u,{})]}})}export{v as default};
