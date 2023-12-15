import{u as l,f as p,k as u,c as s,i as m,t as d,s as r,l as t,n as h}from"./index-216d771d.js";import{P as f}from"./Posts-9b4a5b59.js";const g=d("<section>"),x=r("main")`
  padding: 48px 8px;
`,C=r("h1")`
  text-align: center;
  margin: 8px 0;
`;function w(){const o=l(),[a,n]=p(o()?.posts);return u(()=>{const e=t.toLower(h()),c=t.filter(o()?.posts,i=>t.includes(t.toLower(t.get(i,["title"])),e));n(c)}),s(x,{get children(){return[s(C,{children:"Search"}),(()=>{const e=g();return m(e,s(f,{posts:a})),e})()]}})}export{w as default};
