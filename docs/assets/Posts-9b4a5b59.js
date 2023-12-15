import{s as i,c as e,i as c,b as s,d as l,g,F as u,o as b,t as o}from"./index-216d771d.js";const _=o("<a>"),C=o("<a><h3>"),v=o("<a><span>"),y=i("div")`
  display: flex;
  gap: 16px;
  padding: 8px 0;
`,P=i("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`,U=i("div")`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,d=i("p")`
  line-height: 1;
  padding-bottom: 0;
`,k=i("div")`
  width: 200px;
  height: 100%;
  background: ${n=>`url("${n.src}")`};
  background-size: cover;
  background-position: center;
`,w=({slug:n,title:r,thumbnailUrl:h,description:p,date:f,readingTime:m,categories:x})=>e(y,{get children(){return[(()=>{const t=_();return c(t,e(k,{src:h})),s(()=>l(t,"href",g(n))),t})(),e(P,{get children(){return[(()=>{const t=C(),a=t.firstChild;return c(a,r),s(()=>l(t,"href",g(n))),t})(),e(d,{children:p}),e(d,{children:f}),e(d,{get children(){return[m," min"]}}),e(U,{get children(){return e(u,{each:x,children:t=>(()=>{const a=v(),$=a.firstChild;return c($,t),s(()=>l(a,"href",b(t))),a})()})}})]}})]}}),T=i("div")`
  padding: 8px 0;
`,j=({posts:n})=>e(T,{get children(){return e(u,{get each(){return n()},children:r=>e(w,{get title(){return r.title},get categories(){return r.categories},get date(){return r.date},get slug(){return r.slug},get description(){return r.description},get readingTime(){return r.readingTime},get thumbnailUrl(){return r.thumbnailUrl}})})}});export{j as P};
