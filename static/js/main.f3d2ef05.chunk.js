(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(3),i=a(1),c=a(0),o=Object(i.createContext)(),l=function(e){var t=e.children,a=Object(i.useState)("light"),n=Object(s.a)(a,2),l=n[0],r=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(o.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r="https://rjshkhr.github.io/cleanfolio",d="DS",j="Daniel Salvatori",u="Cientista de dados",h="Sou formado em Sistemas de Informa\xe7\xe3o com MBA em Gest\xe3o Empresarial. Atualmente venho desenvolvendo projetos aut\xf4nomos onde busco atrav\xe9s de an\xe1lises t\xe9cnicas de Machine Learning ou estat\xedsticas, solucionar problemas de neg\xf3cio para as empresas. Aqui voc\xea ir\xe1 encontrar meu portif\xf3lio e estudos que venho desenvolvendo.",m="https://example.com",b={linkedin:"https://www.linkedin.com/in/daniel-salvatori/",github:"https://github.com/daniel-Salvatori/"},O=[{name:"Monitoramento progresso alunos",description:" Constru\xe7\xe3o de um ETL e um painel de visualiza\xe7\xe3o para acompanhamento do progresso dos alunos na Comunidade DS.",stack:["Python","CSS","Docker","BigQuery","Streamlit"],sourceCode:"https://github.com/Daniel-Salvatori/Progresso_Alunos_CDS"},{name:"Programa de Fidelidade de E-commerce",description:"Clusteriza\xe7\xe3o de clientes e cria\xe7\xe3o de um programa de fidelidade para um e-commerce.",stack:["Python","SQL","AWS","KMeans","DBSCAN","PCA","PowerBI"],sourceCode:"https://github.com/Daniel-Salvatori/Insiders_clusterization"},{name:"Cross-selling de Seguros",description:"Ranqueamento de interesse em seguro veicular para novos clientes, a partir de dados de uma pesquisa realizada com clientes antigos.",stack:["Python","Machine Learning","Google Sheets","API"],sourceCode:"https://github.com/Daniel-Salvatori/Shield_Insurance"},{name:"Previs\xe3o de Vendas de Rede Farmac\xeautica",description:"Previs\xe3o de vendas de uma rede de farm\xe1cias para as pr\xf3ximas 6 semanas.",stack:["Python","Machine Learning","Telegram","Flask","Render Cloud"],sourceCode:"https://github.com/Daniel-Salvatori/Rossmann_predict_sales"},{name:"Previs\xe3o casos de dengue",description:"Previs\xe3o de casos de dengue para os pr\xf3ximos 1500 dias.",stack:["Python","Machine Learning","Optuna","Estat\xedstica"],sourceCode:"https://github.com/Daniel-Salvatori/dengue_predictions"},{name:"Insights para imobili\xe1ria",description:"Determinar quais s\xe3o os im\xf3veis mais vantajosos para aquisi\xe7\xe3o e identificar o melhor momento para revenda.",stack:["Python","Analise de dados","PowerBI","Render Cloud","Streamlit"],sourceCode:"https://github.com/Daniel-Salvatori/P01_house_rocket_insights"}],p=["Python","SQL","Excel","PowerBI","Streamlit","GIT","Github","API","Git","Machine Learning","Estat\xedstica","Clusteriza\xe7\xe3o","Classifica\xe7\xe3o","Regress\xe3o","Analise de dados","Visualiza\xe7\xe3o de dados","BigQuery","GCP","AWS","ETL"],x="danielfelipesalvatori@mail.com",v=a(16),f=a.n(v),g=a(14),k=a.n(g),_=a(18),N=a.n(_),S=a(17),C=a.n(S),P=(a(28),function(){var e=Object(i.useContext)(o),t=Object(s.a)(e,1)[0],a=t.themeName,n=t.toggleTheme,l=Object(i.useState)(!1),r=Object(s.a)(l,2),d=r[0],j=r[1],u=function(){return j(!d)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[O.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projetos"})}):null,p.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,x?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contato"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(c.jsx)(k.a,{}):Object(c.jsx)(f.a,{})}),Object(c.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(c.jsx)(C.a,{}):Object(c.jsx)(N.a,{})})]})}),w=(a(32),function(){var e=r,t=d;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(P,{})]})}),y=a(11),D=a.n(y),E=a(19),A=a.n(E),I=(a(33),function(){var e=j,t=u,a=h,n=m,s=b;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsxs)("h1",{children:["Ol\xe1, eu sou ",Object(c.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(c.jsx)("h2",{className:"about__role",children:t}),Object(c.jsx)("p",{className:"about__desc",children:a&&a}),Object(c.jsxs)("div",{className:"about__contact center",children:[n&&Object(c.jsx)("a",{href:n,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(c.jsxs)(c.Fragment,{children:[s.github&&Object(c.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(c.jsx)(D.a,{})}),s.linkedin&&Object(c.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(A.a,{})})]})]})]})}),L=a(7),M=a.n(L),B=a(20),z=a.n(B),R=(a(35),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},M()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(D.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(z.a,{})})]})}),q=(a(36),function(){return O.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projetos"}),Object(c.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(c.jsx)(R,{project:e},M()())}))})]}):null}),G=(a(37),function(){return p.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},M()())}))})]}):null}),T=a(21),F=a.n(T),Q=(a(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top","aria-label":"top",children:Object(c.jsx)(F.a,{fontSize:"large"})})}):null}),J=(a(39),function(){return x?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contato"}),Object(c.jsx)("a",{href:"mailto:".concat(x),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email"})})]}):null}),V=(a(40),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/Daniel-Salvatori/daniel-salvatori.github.io",className:"link footer__link",children:"Daniel Salvatori"})})}),W=(a(41),function(){var e=Object(i.useContext)(o),t=Object(s.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(w,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(I,{}),Object(c.jsx)(q,{}),Object(c.jsx)(G,{}),Object(c.jsx)(J,{})]}),Object(c.jsx)(Q,{}),Object(c.jsx)(V,{})]})});a(42);Object(n.render)(Object(c.jsx)(l,{children:Object(c.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f3d2ef05.chunk.js.map