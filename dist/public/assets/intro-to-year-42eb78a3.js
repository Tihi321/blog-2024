import{c as t,m as c,i as l,t as r}from"./index-216d771d.js";import{M as s}from"./index-84e5e3d6.js";const h=r("<strong>GraphQL"),a=r("<br>"),d=r("<div>"),m={title:"Intro to the year",date:"11, 21, 2024",description:"Learn all about the year",thumbnailUrl:"/posts/graphql-thumbnail.png",categories:["ai","tech"],featured:!0};function i(n){const e=Object.assign({p:"p",h3:"h3",code:"code",pre:"pre"},s(),n.components);return[(()=>{const o=d();return l(o,t(e.p,{get children(){return["This is a blog post about ",h(),". ",a(),`
We'll learn about GraphQL and how to use it in applications.`]}})),o})(),`
`,a(),`
`,t(e.h3,{children:"This is a Markdown sub-heading"}),`
`,t(e.p,{get children(){return["We just used a ",t(e.code,{children:"###"})," subheading in our blog post."]}}),`
`,t(e.pre,{get children(){return t(e.code,{children:`  // this is a code block
  const doSomething = () => {
    return console.log('hey')
  }
`})}})]}function g(n={}){const{wrapper:e}=Object.assign({},s(),n.components);return e?t(e,c(n,{get children(){return t(i,n)}})):i(n)}export{g as default,m as metadata};
