import{e as u,f as d,i,t as r,c as e,m as h}from"./index-216d771d.js";import{M as c}from"./index-84e5e3d6.js";const m=r("<button class=button>"),g=({text:n})=>{const[t,o]=d(n||"Click me!");return(()=>{const s=m();return s.$$click=()=>o(t()+"🔥"),i(s,t),s})()};u(["click"]);const p=r("<strong>astro build"),l=r("<br>"),b=r("<div>"),$=r("<div>Here, I'm using a component inside my MarkDown file: "),k={title:"Build A Blog With Astro",date:"12, 21, 2022",description:"Learn Astro by building a blog",thumbnailUrl:"/posts/astro-blog-thumbnail.jpeg",categories:["ai"],featured:!1};function a(n){const t=Object.assign({p:"p",h3:"h3",code:"code",pre:"pre"},c(),n.components);return[(()=>{const o=b();return i(o,e(t.p,{get children(){return["This is a blog post about ",p(),". ",l(),`
We'll learn how to build a blog with Astro and why it's better than the alternatives.`]}})),o})(),`
`,l(),`
`,e(t.h3,{children:"This is a Markdown sub-heading"}),`
`,e(t.p,{get children(){return["We just used a ",e(t.code,{children:"###"})," subheading in our blog post."]}}),`
`,e(t.pre,{get children(){return e(t.code,{children:`  // this is a code block
  const doSomething = () => {
    return console.log('hey')
  }
`})}}),`
`,(()=>{const o=$();return o.firstChild,i(o,e(g,{text:"Click me"}),null),o})()]}function w(n={}){const{wrapper:t}=Object.assign({},c(),n.components);return t?e(t,h(n,{get children(){return e(a,n)}})):a(n)}export{w as default,k as metadata};
