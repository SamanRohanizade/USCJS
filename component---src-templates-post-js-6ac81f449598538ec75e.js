(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{219:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(220),i=a(134),l=a(76),c=a(221),s=a.n(c),p=function(t){var e=t.width,a=t.isOpen,n=t.items,o=[s.a.sidebar,a?s.a.open:""];return r.a.createElement("aside",{className:o.join(" "),style:{width:e}},r.a.createElement("ul",{className:s.a.sidebarList},n.map((function(t){return r.a.createElement("li",{key:t.title,className:"mb-4 pl-1"},r.a.createElement(l.Link,{to:t.path,activeClassName:"text-primary"},t.title))}))))},m=a(222),d=a.n(m),u=function(t){var e=t.active,a=t.onToggle,n=[d.a.burger,e?d.a.active:""];return r.a.createElement("div",{className:d.a.burgerContainer,onClick:a},r.a.createElement("div",{className:n.join(" ")}))},f=(a(146),function(t){var e=t.children,a=Object(n.useState)(!1),l=a[0],c=a[1],s=o.data.allMarkdownRemark.edges.map((function(t){var e={},a=t.node.frontmatter;return e.title=a.title,e.path=a.path,e})),m=["main","mt-5","pt-5","px-5",l?"with-sidebar":""],d=r.a.createElement(u,{active:l,onToggle:function(){return c(!l)}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{allowCollapse:!1,items:[{text:"درباره دوره",to:"/"},{text:"سرفصل‌های دوره",to:"/topics",partial:!0}],Toggler:d}),r.a.createElement(p,{width:"350px",isOpen:l,items:s}),r.a.createElement("div",{className:m.join(" ")},e))}),h=a(214);function g(t){var e=t.data.markdownRemark,a=e.frontmatter,n=e.html;return r.a.createElement(f,null,r.a.createElement(h.a,{title:a.title}),r.a.createElement("h1",null,a.title),r.a.createElement("h2",null,a.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:n}}))}a.d(e,"default",(function(){return g})),a.d(e,"pageQuery",(function(){return E}));var E="997976791"},220:function(t){t.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"بررسی کاربردهای جاوااسکریپت، تاریخچه و مفاهیم اولیه","path":"/topics"}}},{"node":{"frontmatter":{"title":"نحوه کارکرد scope و مفاهیم lexical scope, Hoisting و Closure","path":"/topics/scope"}}},{"node":{"frontmatter":{"title":"کلمه کلیدی this و مفهوم آبجکت‌ها و descriptorها","path":"/topics/this-and-objects"}}},{"node":{"frontmatter":{"title":"بررسی مفهوم prototype و الگوهای OLOO و Delegation","path":"/topics/prototype"}}},{"node":{"frontmatter":{"title":"انواع داده‌های جاوااسکریپت و object wrapper","path":"/topics/data-types"}}},{"node":{"frontmatter":{"title":"قوانین coercion در جاوااسکریپت","path":"/topics/coercion"}}},{"node":{"frontmatter":{"title":"بررسی عمیق سینتکس جاوااسکریپت و ساختارهای سازنده آن","path":"/topics/grammer"}}},{"node":{"frontmatter":{"title":"مفهوم Event Loop و پترن‌های معروف مثل callback و promiseها","path":"/topics/async"}}},{"node":{"frontmatter":{"title":"الگوهای پیشرفته‌تر برنامه‌نویسی async در جاوااسکریپت","path":"/topics/async-pattern"}}},{"node":{"frontmatter":{"title":"metaprogramming","path":"/topics/metaprogramming"}}},{"node":{"frontmatter":{"title":"ویژگی‌های جدید نسخه ES6 (ES2015)","path":"/topics/es6"}}},{"node":{"frontmatter":{"title":"ویژگی‌های جدید نسخه‌های بعد از سال 2015 و نحوه آپدیت شدن جاوااسکریپت","path":"/topics/beyond-es6"}}},{"node":{"frontmatter":{"title":"گفتگو راجع به کاربردهای جاوااسکریپت در بازار کار و بررسی مسیرهای شغلی و سوالات مصاحبه","path":"/topics/job-market"}}},{"node":{"frontmatter":{"title":"لینک‌های مفید","path":"/topics/useful-links"}}}]}}}')}}]);
//# sourceMappingURL=component---src-templates-post-js-6ac81f449598538ec75e.js.map