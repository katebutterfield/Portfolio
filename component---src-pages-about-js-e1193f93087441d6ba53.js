(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(154),a(174)),c=a(157),l=a(156),o=a(182),s=a(208),d=a(209),u=a(210);o.b.add(s.a,d.a,d.b);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"About Kate"}),r.a.createElement("div",{class:"about"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"profile-card"},r.a.createElement("div",{class:"cover"},r.a.createElement("img",{src:a(211),width:"350"})),r.a.createElement("img",{class:"profile-picture",src:a(175),width:"200"}),r.a.createElement("h3",{class:"user-name"}," Kate Butterfield "),r.a.createElement("span",{class:"user-position"}," Product Designer"),r.a.createElement("p",{class:"location"},"📍 San Francisco "),r.a.createElement("div",{class:"social"},r.a.createElement("a",{href:"https://www.linkedin.com/in/kate-butterfield/",target:"_blank"},r.a.createElement(u.a,{icon:["fab","linkedin"]})),r.a.createElement("a",{href:"https://dribbble.com/katebutter",target:"_blank"},r.a.createElement(u.a,{icon:["fab","dribbble"]})),r.a.createElement("a",{href:"https://medium.com/@katebutterfield.design",target:"_blank"},r.a.createElement(u.a,{icon:["fab","medium"]})))),r.a.createElement("div",{class:"info-card"},r.a.createElement("div",{class:"intro"},r.a.createElement("h3",null,"Background"),r.a.createElement("div",{class:"line"}),r.a.createElement("p",null,"I'm an ",r.a.createElement("span",{class:"highlight"},"enthusiastic designer"),", currently working on improving the product experience at ",r.a.createElement("a",{href:"https://www.entelo.com/",target:"_blank"},"Entelo"),". My background in Interactive Media and Graphic Design allows me to build creative solutions while leveraging the power of technology.",r.a.createElement("br",null),r.a.createElement("br",null),"I'm a naturally collaborative person and value my relationships with product stakeholders, teammates, and users. ",r.a.createElement("span",{class:"highlight"},"I'm driven by innovation and excited by the opportunity to help scale a solution by making informed and deliberate design decisions. "),r.a.createElement("br",null),r.a.createElement("br",null),"In my free time you can find me exploring San Francisco, grabbing coffee, or reading up on design trends from my ",r.a.createElement("a",{href:"https://muz.li/",target:"_blank"},"'secret source'"),".")))),r.a.createElement("div",{class:"CardGroup"},r.a.createElement("a",{href:"https://open.spotify.com/show/1SNlsaEru8hM5yXXc6vvuz?si=cRZMAlDRSESBcfcnAEqVOw",target:"_blank"},r.a.createElement(i.a,{title:"Listening To  🎧",text:"New Layer · Podcast"})),r.a.createElement("a",{href:"https://medium.com/google-design/state-of-design-systems-2019-ff5f26ada71",target:"_blank"},r.a.createElement(i.a,{title:"Reading About 📚",text:"Design Systems · Medium"})),r.a.createElement("a",{href:"https://paper.dropbox.com/doc/Smashing-Conf-2019--ArbGu4KOJG9NCDZ~i~CUjE71AQ-u0MqJgDDzO3MeNMhRpWBk",target:"_blank"},r.a.createElement(i.a,{title:"Attending 📝",text:"UX Conferences"})))))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(155);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(164),s=a.n(o);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title,o=n.data.site,d=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(154),s=a(7),d=a.n(s),u=(a(162),function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}d()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.render=function(){return i.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},i.a.createElement("div",{className:"HeaderGroup"},i.a.createElement(o.a,{to:"/"},i.a.createElement("img",{src:a(160),width:"30"})),i.a.createElement(o.a,{to:"/design"},"Design"),i.a.createElement(o.a,{to:"/about"},"About"),i.a.createElement("a",{href:"mailto:katebutterfield.design@gmail.com"},"Contact Me ",i.a.createElement("span",{class:"wave"},"👋"))))},t}(i.a.Component));u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var g=u,m=(a(163),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Designed and developed by"," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/kate-butterfield/"},"me")))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Kate Butterfield Portfolio"}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},160:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgNDMgNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkxpbmUtRHJhd2luZy1WMS1Db3B5LTMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MjMuMDAwMDAwLCAtNTA5LjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MjUuMDAwMDAwLCA1MDAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICA8dGV4dCBpZD0iQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuNDEzNTQ1LCAzNS43OTEwNDEpIHJvdGF0ZSgtMzYuMDAwMDAwKSB0cmFuc2xhdGUoLTM0LjQxMzU0NSwgLTM1Ljc5MTA0MSkgIiBmb250LWZhbWlseT0iQXJpYWwtQmxhY2ssIEFyaWFsIEJsYWNrIiBmb250LXNpemU9IjMzLjYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNy4wMDgxMSIgeT0iNDEuNDMxMDQxNCI+QjwvdHNwYW4+CiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4yMjMxNDY2LDkuMzI5NzQxMzggQzAuMjIzMTQ2NiwzOS42MDU5OTUzIDAuMjIzMTQ2Niw1My4wNTcyNDQ5IDAuMjIzMTQ2Niw0OS42ODM0OTAyIiBpZD0iUGF0aC00OSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMuODA4MDAwMTEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTUyIiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjcuMzYzODM3NzkgMjcuMTY5NDg1MyAxOC4wOTY1NTc3IDE5LjE1MTc5MDMgMTguMDk2NTU3NyA5LjI4Nzk2MTc2IDcuMzYzODM3NzkgOS4yODc5NjE3NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNTMiIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMTkuMjIyMDY1NSA0OS45NTU0NTk5IDcuMzYzODM3NzkgMzIuOTg4OTI1OCA3LjM2MzgzNzc5IDQ5Ljk1NTQ1OTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Kate Butterfield Portfolio",description:"Welcome to the place where my nerd shows the most. Here you can enjoy high-quality mockups, wireframes, and animations.",author:"@katebutterfield"}}}}},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(181);t.a=function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{src:e.image}),r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.text))}},175:function(e,t,a){e.exports=a.p+"static/kate-profie-b2e0bf6b9a324dae2ccd3f95fa59c174.jpeg"},211:function(e,t,a){e.exports=a.p+"static/blue-bg-8464d9066b5123582ecc7c9c4a8b1833.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-e1193f93087441d6ba53.js.map