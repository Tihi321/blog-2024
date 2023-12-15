import{c as t,m as c,i as l,t as o}from"./index-216d771d.js";import{M as i}from"./index-84e5e3d6.js";const d=o("<strong>variables"),s=o("<br>"),h=o("<div>"),m={title:"Another post",date:"6, 25, 2024",description:"Lets make some other description",thumbnailUrl:"/posts/python-variables-thumbnail.jpeg",categories:["ai"],featured:!1};function a(n){const e=Object.assign({p:"p",h3:"h3",code:"code",pre:"pre"},i(),n.components);return[(()=>{const r=h();return l(r,t(e.p,{get children(){return["This is a blog post about ",d(),". ",s(),`
We'll learn about Python variables.`]}})),r})(),`
`,s(),`
`,t(e.h3,{children:"This is a Markdown sub-heading"}),`
`,t(e.p,{get children(){return["We just used a ",t(e.code,{children:"###"})," subheading in our blog post."]}}),`
`,t(e.pre,{get children(){return t(e.code,{children:`  // this is a code block
  const doSomething = () => {
    return console.log('hey')
  }
`})}})]}function g(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?t(e,c(n,{get children(){return t(a,n)}})):a(n)}export{g as default,m as metadata};
