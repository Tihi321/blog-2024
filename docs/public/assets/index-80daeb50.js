import{u as l,a as c,l as o,c as e,i as p,b as d,d as f,g as u,t as a,s as t}from"./index-216d771d.js";const g=a("<div>I'm a passionate futurist with a deep interest in physics and science. A professional programmer and coder specializing in innovative applications. My fascination with artificial intelligence extends to my hobbies, where I constantly explore AI in various forms and engage in philosophical discussions. My enthusiasm for technology and its potential impact on the future shapes both my career and personal pursuits."),m=a("<a>"),x=t("div")`
  padding: 48px 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,h=t("h1")`
  text-align: center;
  margin: 8px 0;
  font-weight: bold;
`,b=t("h3")`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 8px 0;
  font-weight: bold;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid currentColor;
  }

  &::before {
    margin-right: 0.5em;
  }

  &::after {
    margin-left: 0.5em;
  }
`,y=t("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
`,w=t("img")`
  border: none;
  width: 100%;
  filter: drop-shadow(2px 2px 4px black);
`,v=t("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,$=t("footer")`
  text-align: center;
  padding: 16px;
  border-radius: 0 0 24px 24px;
  border-top: 10px solid ${n=>n?.theme?.colors.ui1};
  background-color: ${n=>n?.theme?.colors.ui2};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  margin-top: auto;
`;function F(){const n=l(),s=c(()=>o.map(n(),(i,r)=>{if(r<3)return i}));return e(x,{get children(){return[e(v,{get children(){return e(w,{src:"/assets/homer-reading.png"})}}),e($,{get children(){return[e(h,{children:"Blog"}),g(),e(b,{children:"Featured"}),e(y,{get children(){return o.map(s(),i=>(()=>{const r=m();return p(r,()=>i?.title),d(()=>f(r,"href",u(i?.slug))),r})())}})]}})]}})}export{F as default};
