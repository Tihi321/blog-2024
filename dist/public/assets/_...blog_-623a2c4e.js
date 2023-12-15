import{u as o,c as t,i,l as r,F as g,t as d,s as n}from"./index-216d771d.js";import{P as c}from"./Posts-9b4a5b59.js";const p=d("<section>"),u=n("main")`
  padding: 48px 8px;
`,h=n("h1")`
  text-align: center;
  margin: 8px 0;
`,f=n("div")`
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 18px;
  font-weight: bold;
`,b=n("a")`
  filter: ${e=>e?.selected?"brightness(0.5)":"brightness(1)"};
`,l=n("a")`
  pointer-events: ${e=>e?.disabled?"none":"all"};
  opacity: ${e=>e?.disabled?.7:1};
`;function $(){const e=o();return t(u,{get children(){return[t(h,{children:"Blog"}),(()=>{const s=p();return i(s,t(c,{posts:()=>e()?.posts}),null),i(s,t(f,{get children(){return[t(l,{get href(){return`/blog/${e()?.paged-1}`},get disabled(){return r.isEqual(e()?.paged,0)},children:"<"}),t(g,{get each(){return r.range(e()?.pages)},children:a=>t(b,{get selected(){return r.isEqual(a,e()?.paged)},href:`/blog/${a}`,children:a})}),t(l,{get href(){return`/blog/${e()?.paged+1}`},get disabled(){return r.isEqual(e()?.paged,e()?.pages-1)},children:">"})]}}),null),s})()]}})}export{$ as default};
