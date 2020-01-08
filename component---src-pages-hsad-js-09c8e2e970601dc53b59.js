(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,a){"use strict";a.r(t);var i=a(0),g=a.n(i),c=a(157),I=a(156),n=a(167),M=a(154);t.default=function(){return g.a.createElement(c.a,null,g.a.createElement(I.a,{title:"HSAD Network"}),g.a.createElement("div",{class:"HSADHeader"},g.a.createElement("img",{src:a(269)}),g.a.createElement("p",null,"Athletic Directior Platform (Mobile App)")),g.a.createElement("div",{class:"description"},g.a.createElement("div",{class:"hsad-list"},g.a.createElement("ul",null,g.a.createElement("li",null,g.a.createElement("h4",null,"ROLE"),g.a.createElement("p",null,"Lead Designer 👩🏻‍💻")),g.a.createElement("li",null,g.a.createElement("h4",null,"PROBLEM"),g.a.createElement("p",null,"High School AD Network has traditionally only been available as a web app. The tool's main purpose is to communicate with other AD's, which could occur at any point in the day. If a user doesn't have their desktop handy they won't get the best experience using the platform.")),g.a.createElement("li",null,g.a.createElement("h4",null,"SOLUTION"),g.a.createElement("p",null,"I proposed a mobile app design that would allow Athletic Directors to post information, schedule games, message other AD's, and sell equipment from their mobile device any time, anywhere.")),g.a.createElement("li",null,g.a.createElement("h4",null,"PROCESS"),g.a.createElement("p",null,"Research → Wireframing → Mockups"))))),g.a.createElement("div",{class:"wireframes"},g.a.createElement("h4",null,"Branding"),g.a.createElement("img",{src:a(270)})),g.a.createElement("div",{class:"ProjectShowcase"},g.a.createElement("div",{class:"hsad-sticky"},g.a.createElement("h2",null,"Final Product")),g.a.createElement("div",{class:"mobile-scroll"},g.a.createElement("img",{src:a(271)}),g.a.createElement("img",{class:"offset",src:a(272)}),g.a.createElement("img",{src:a(273)}),g.a.createElement("img",{class:"offset",src:a(274)}),g.a.createElement("img",{src:a(275)}),g.a.createElement("img",{class:"offset",src:a(276)}),g.a.createElement("img",{src:a(277)}))),g.a.createElement("div",{class:"footer"},g.a.createElement("img",{src:a(278)})),g.a.createElement("div",{class:"project-nav"},g.a.createElement("div",{class:"previous-project"},g.a.createElement(M.a,{to:"/employstream"},g.a.createElement(n.a,{title:"← Back",subtitle:"EmployStream Forms",image:a(169)}))),g.a.createElement("div",{class:"next-project"},g.a.createElement(M.a,{to:"/about"},g.a.createElement(n.a,{title:"Continue to →",subtitle:"Learn about me!",image:a(174)})))))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var i=a(0),g=a.n(i),c=a(4),I=a.n(c),n=a(33),M=a.n(n);a.d(t,"a",function(){return M.a});a(155);var s=g.a.createContext({}),l=function(e){return g.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):g.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:I.a.object,query:I.a.string.isRequired,render:I.a.func,children:I.a.func}},155:function(e,t,a){var i;e.exports=(i=a(159))&&i.default||i},156:function(e,t,a){"use strict";var i=a(161),g=a(0),c=a.n(g),I=a(4),n=a.n(I),M=a(166),s=a.n(M);function l(e){var t=e.description,a=e.lang,g=e.meta,I=e.keywords,n=e.title,M=i.data.site,l=t||M.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:n,titleTemplate:"%s | "+M.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:n},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:l}].concat(I.length>0?{name:"keywords",content:I.join(", ")}:[]).concat(g)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.arrayOf(n.a.object),keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},t.a=l},157:function(e,t,a){"use strict";var i=a(158),g=a(0),c=a.n(g),I=a(4),n=a.n(I),M=a(154),s=a(7),l=a.n(s),r=(a(164),function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}l()(t,e);var i=t.prototype;return i.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},i.render=function(){return c.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},c.a.createElement("div",{className:"HeaderGroup"},c.a.createElement(M.a,{to:"/"},c.a.createElement("img",{src:a(160),width:"30"})),c.a.createElement(M.a,{to:"/design"},"Case Studies"),c.a.createElement(M.a,{to:"/about"},"About"),c.a.createElement("a",{href:"mailto:katebutterfield.design@gmail.com"},"Contact Me ",c.a.createElement("span",{class:"wave"},"👋"))))},t}(c.a.Component));r.propTypes={siteTitle:n.a.string},r.defaultProps={siteTitle:""};var u=r,A=(a(165),function(e){var t=e.children;return c.a.createElement(M.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement("main",null,t),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Designed and developed by"," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/kate-butterfield/"},"me")))},data:i})});A.propTypes={children:n.a.node.isRequired};t.a=A},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Kate Butterfield Portfolio"}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),g=a.n(i),c=a(4),I=a.n(c),n=a(55),M=a(2),s=function(e){var t=e.location,a=M.default.getResourcesForPathnameSync(t.pathname);return g.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:I.a.shape({pathname:I.a.string.isRequired}).isRequired},t.default=s},160:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgNDMgNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkxpbmUtRHJhd2luZy1WMS1Db3B5LTMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MjMuMDAwMDAwLCAtNTA5LjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MjUuMDAwMDAwLCA1MDAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICA8dGV4dCBpZD0iQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuNDEzNTQ1LCAzNS43OTEwNDEpIHJvdGF0ZSgtMzYuMDAwMDAwKSB0cmFuc2xhdGUoLTM0LjQxMzU0NSwgLTM1Ljc5MTA0MSkgIiBmb250LWZhbWlseT0iQXJpYWwtQmxhY2ssIEFyaWFsIEJsYWNrIiBmb250LXNpemU9IjMzLjYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNy4wMDgxMSIgeT0iNDEuNDMxMDQxNCI+QjwvdHNwYW4+CiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4yMjMxNDY2LDkuMzI5NzQxMzggQzAuMjIzMTQ2NiwzOS42MDU5OTUzIDAuMjIzMTQ2Niw1My4wNTcyNDQ5IDAuMjIzMTQ2Niw0OS42ODM0OTAyIiBpZD0iUGF0aC00OSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMuODA4MDAwMTEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTUyIiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjcuMzYzODM3NzkgMjcuMTY5NDg1MyAxOC4wOTY1NTc3IDE5LjE1MTc5MDMgMTguMDk2NTU3NyA5LjI4Nzk2MTc2IDcuMzYzODM3NzkgOS4yODc5NjE3NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNTMiIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMTkuMjIyMDY1NSA0OS45NTU0NTk5IDcuMzYzODM3NzkgMzIuOTg4OTI1OCA3LjM2MzgzNzc5IDQ5Ljk1NTQ1OTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Kate Butterfield Portfolio",description:"Welcome to the place where my nerd shows the most. Here you can enjoy high-quality mockups, wireframes, and animations.",author:"@katebutterfield"}}}}},167:function(e,t,a){"use strict";var i=a(0),g=a.n(i);a(173);t.a=function(e){return g.a.createElement("div",{className:"Nav"},g.a.createElement("img",{src:e.image}),g.a.createElement("div",null,g.a.createElement("h4",null,e.title),g.a.createElement("h5",null,e.subtitle)))}},169:function(e,t,a){e.exports=a.p+"static/es-cover-d27e8be9c94b6b3413fff17117c26fc0.jpg"},174:function(e,t,a){e.exports=a.p+"static/kate-profie-b2e0bf6b9a324dae2ccd3f95fa59c174.jpeg"},269:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjM1cHgiIGhlaWdodD0iNzZweCIgdmlld0JveD0iMCAwIDIzNSA3NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTUuMSAoNzgxMzYpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPkhTQURsb2dvXzI0MHgyNDAtMDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUG9ydGZvbGlvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSFNBRGxvZ29fMjQweDI0MC0wMSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NC4wMDAwMDAsIDAuMDAwMDAwKSIgZmlsbD0iIzFFMzkyMyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODAuOCw1Ni4xIEM4MC45LDYxLjIgNzkuNiw2NS41IDc2LjksNjkuMSBDNzUuMSw3MS41IDcyLjYsNzMuMyA2OS4zLDc0LjMgQzY3LjYsNzQuOCA2NS41LDc1LjEgNjMuMiw3NS4xIEM1OC45LDc1LjEgNTUuMyw3NCA1Mi41LDcxLjkgQzUwLjEsNzAuMiA0OC4zLDY3LjggNDYuOSw2NC44IEM0NS41LDYxLjggNDQuNyw1OC40IDQ0LjUsNTQuNSBMNTUsNTMuNyBDNTUuNSw1Ny45IDU2LjYsNjEgNTguNCw2Mi45IEM1OS43LDY0LjMgNjEuMiw2NSA2Mi45LDY0LjkgQzY1LjMsNjQuOCA2Ny4yLDYzLjYgNjguNiw2MS40IEM2OS4zLDYwLjMgNjkuNyw1OC43IDY5LjcsNTYuNiBDNjkuNyw1My42IDY4LjMsNTAuNiA2NS42LDQ3LjYgQzYzLjQsNDUuNSA2MC4yLDQyLjUgNTUuOCwzOC40IEM1Mi4yLDM0LjkgNDkuNiwzMS43IDQ4LjEsMjguOSBDNDYuNSwyNS44IDQ1LjcsMjIuNCA0NS43LDE4LjcgQzQ1LjcsMTIuMSA0Ny45LDcuMSA1Mi40LDMuNiBDNTUuMSwxLjUgNTguNiwwLjUgNjIuNiwwLjUgQzY2LjUsMC41IDY5LjksMS40IDcyLjYsMy4xIEM3NC44LDQuNSA3Ni41LDYuNCA3Ny45LDguOCBDNzkuMiwxMS4yIDgwLDE0IDgwLjMsMTcuMiBMNjkuOCwxOS4xIEM2OS41LDE2LjEgNjguNiwxMy44IDY3LjIsMTIuMSBDNjYuMiwxMC45IDY0LjcsMTAuMyA2Mi44LDEwLjMgQzYwLjgsMTAuMyA1OS4zLDExLjIgNTguMiwxMyBDNTcuMywxNC40IDU2LjksMTYuMiA1Ni45LDE4LjMgQzU2LjksMjEuNiA1OC4zLDI1IDYxLjIsMjguNSBDNjIuMywyOS44IDYzLjksMzEuNCA2Ni4xLDMzLjEgQzY4LjcsMzUuMiA3MC4zLDM2LjcgNzEuMiwzNy42IEM3My45LDQwLjMgNzYsNDMgNzcuNSw0NS42IEM3OC4yLDQ2LjggNzguOCw0OCA3OS4yLDQ5IEM4MC4yLDUxLjcgODAuOCw1NC4xIDgwLjgsNTYuMSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMTE0LjYgMS41IDk5LjUgMS41IDg3LjIgNzQuMiA5OC42IDc0LjIgMTAxLjMgNTcuNSAxMDkuNiA1Ny41IDEwOC4zIDQ2LjggMTAzIDQ2LjggMTA3IDE4LjEgMTEwLjkgNDUuNSAxMTMuMSA2MC4xIDExNS4zIDc0LjIgMTI2LjggNzQuMiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEuMDAwMDAwKSIgaWQ9IlBhdGgiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMjEuNiAzMS40IDExLjEgMzEuNCAxMS4xIDAuNSAwLjIgMC41IDAuMiA3My4yIDExLjEgNzMuMiAxMS4xIDQyLjQgMjEuNiA0Mi40Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIyNC40IDAuNSAyNC40IDI4LjggMjQuNCAzMS40IDI0LjQgNDIuNCAyNC40IDQ3LjYgMjQuNCA3My4yIDM1LjQgNzMuMiAzNS40IDAuNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2NS41LDYuNSBDMTYyLjEsMy4xIDE1OC4xLDEuNCAxNTMuMywxLjQgTDEzNi4xLDEuNCBMMTM2LjEsNzQuMiBMMTQ3LjEsNzQuMiBMMTQ3LjEsNjMuMyBMMTQ3LjEsMTIuNiBMMTUzLjcsMTIuNiBDMTU1LjQsMTIuNiAxNTYuOSwxMy4yIDE1OC4xLDE0LjUgQzE1OS4zLDE1LjcgMTU5LjksMTcuMiAxNTkuOSwxOSBMMTU5LjksNTcgQzE1OS45LDU4LjcgMTU5LjMsNjAuMiAxNTguMSw2MS40IEMxNTYuOSw2Mi43IDE1NS40LDYzLjMgMTUzLjcsNjMuMyBMMTQ5LjcsNjMuMyBMMTQ5LjcsNzQuMiBMMTUzLjQsNzQuMiBDMTU4LjIsNzQuMiAxNjIuMiw3Mi41IDE2NS42LDY5LjEgQzE2OSw2NS43IDE3MC43LDYxLjYgMTcwLjcsNTYuOCBMMTcwLjcsMTguOCBDMTcwLjYsMTQgMTY4LjksOS45IDE2NS41LDYuNSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiMxRTM5MjMiIHBvaW50cz0iNjUuNiAzMCAxMC45IDMwIDAgMTkuNyA2NS42IDE5LjciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjMzk3RjNEIiBwb2ludHM9IjYwIDEwLjcgMTguMiAxMC43IDkuOCAwLjUgNjAgMC41Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iIzM5N0YzRCIgcG9pbnRzPSI2MCA0OS4yIDE4LjIgNDkuMiA5LjggMzkgNjAgMzkiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},270:function(e,t,a){e.exports=a.p+"static/hsad-branding-2093b63b73efddb56982bfbe76da1b43.png"},271:function(e,t,a){e.exports=a.p+"static/hsad-splash-46b00a71fdc4eb93398ff56fb2208a3b.jpg"},272:function(e,t,a){e.exports=a.p+"static/hsad-sign-up-4ad0254c4caefcca94a0653b5a995bea.jpg"},273:function(e,t,a){e.exports=a.p+"static/hsad-register-359f675f3b9fa91b02e6527e70d456ef.jpg"},274:function(e,t,a){e.exports=a.p+"static/hsad-approval-ad96f1a69f9f68a7b83b71211941f63d.jpg"},275:function(e,t,a){e.exports=a.p+"static/hsad-notif-b2c71633e9399ee5806728697cc5c128.jpg"},276:function(e,t,a){e.exports=a.p+"static/hsad-inbox-08702a5dbe2d92b7acc9b5064952a22b.jpg"},277:function(e,t,a){e.exports=a.p+"static/hsad-sell-6326c48e0072c488f3c486270a88dc11.jpg"},278:function(e,t,a){e.exports=a.p+"static/hsad-footer-d2169f63d76e72cc00165c24270ce0a2.jpg"}}]);
//# sourceMappingURL=component---src-pages-hsad-js-09c8e2e970601dc53b59.js.map