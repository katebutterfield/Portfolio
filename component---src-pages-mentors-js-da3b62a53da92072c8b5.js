(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(157),o=a(156);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"Mentorship"}),i.a.createElement("div",{class:"MentorHeader"}),i.a.createElement("div",{class:"mentor-description"},i.a.createElement("div",{class:"animation"},i.a.createElement("img",{src:a(276)})),i.a.createElement("div",{class:"mentor-list"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("h4",null,"BACKGROUND"),i.a.createElement("p",null,"I created this quick prototype as a way to practice my skills with animation and interaction design. I designed the app in Sketch, then used Anima Toolkit and Principle to create an animated prototype of the swipe interaction. 👈")),i.a.createElement("li",null,i.a.createElement("h4",null,"PROBLEM"),i.a.createElement("p",null,"As a young professional, I'm always looking for ways to improve my skills. To this day, I haven't found a solid solution for finding a mentor in my field without having a ton of connections in the industry.")),i.a.createElement("li",null,i.a.createElement("h4",null,"SOLUTION"),i.a.createElement("p",null,'This design creates a place for people like me to find the perfect mentor. I used the swiping motion, a common gesture in mobile UI design, to move from one profile to the next. The idea here was to use this familiar motion, but disassociate it from the notion of swiping left to "pass" or right to "match". The result: a vertical swipe.')),i.a.createElement("li",null,i.a.createElement("h4",null,"PROCESS"),i.a.createElement("p",null,"Ideation → Mockups → Prototyping"))))),i.a.createElement("div",{class:"footer"},i.a.createElement("img",{src:a(277)})))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(155);var s=i.a.createContext({}),u=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";var n=a(161),i=a(0),r=a.n(i),o=a(4),c=a.n(o),l=a(164),s=a.n(l);function u(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},157:function(e,t,a){"use strict";var n=a(158),i=a(0),r=a.n(i),o=a(4),c=a.n(o),l=a(154),s=a(7),u=a.n(s),d=(a(162),function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.render=function(){return r.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},r.a.createElement("div",{className:"HeaderGroup"},r.a.createElement(l.a,{to:"/"},r.a.createElement("img",{src:a(160),width:"30"})),r.a.createElement(l.a,{to:"/design"},"Design"),r.a.createElement(l.a,{to:"/about"},"About"),r.a.createElement("a",{href:"mailto:katebutterfield.design@gmail.com"},"Contact Me ",r.a.createElement("span",{class:"wave"},"👋"))))},t}(r.a.Component));d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var g=d,I=(a(163),function(e){var t=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Designed and developed by"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/kate-butterfield/"},"me")))},data:n})});I.propTypes={children:c.a.node.isRequired};t.a=I},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Kate Butterfield Portfolio"}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},160:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgNDMgNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkxpbmUtRHJhd2luZy1WMS1Db3B5LTMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MjMuMDAwMDAwLCAtNTA5LjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MjUuMDAwMDAwLCA1MDAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICA8dGV4dCBpZD0iQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuNDEzNTQ1LCAzNS43OTEwNDEpIHJvdGF0ZSgtMzYuMDAwMDAwKSB0cmFuc2xhdGUoLTM0LjQxMzU0NSwgLTM1Ljc5MTA0MSkgIiBmb250LWZhbWlseT0iQXJpYWwtQmxhY2ssIEFyaWFsIEJsYWNrIiBmb250LXNpemU9IjMzLjYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNy4wMDgxMSIgeT0iNDEuNDMxMDQxNCI+QjwvdHNwYW4+CiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4yMjMxNDY2LDkuMzI5NzQxMzggQzAuMjIzMTQ2NiwzOS42MDU5OTUzIDAuMjIzMTQ2Niw1My4wNTcyNDQ5IDAuMjIzMTQ2Niw0OS42ODM0OTAyIiBpZD0iUGF0aC00OSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMuODA4MDAwMTEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTUyIiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjcuMzYzODM3NzkgMjcuMTY5NDg1MyAxOC4wOTY1NTc3IDE5LjE1MTc5MDMgMTguMDk2NTU3NyA5LjI4Nzk2MTc2IDcuMzYzODM3NzkgOS4yODc5NjE3NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNTMiIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMTkuMjIyMDY1NSA0OS45NTU0NTk5IDcuMzYzODM3NzkgMzIuOTg4OTI1OCA3LjM2MzgzNzc5IDQ5Ljk1NTQ1OTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Kate Butterfield Portfolio",description:"Welcome to the place where my nerd shows the most. Here you can enjoy high-quality mockups, wireframes, and animations.",author:"@katebutterfield"}}}}},276:function(e,t,a){e.exports=a.p+"static/mentor-animation-19262a624016ebb3667a05f8f04720a2.gif"},277:function(e,t,a){e.exports=a.p+"static/mentor-footer-cb183a656b402a344854daaf9674831e.jpg"}}]);
//# sourceMappingURL=component---src-pages-mentors-js-da3b62a53da92072c8b5.js.map