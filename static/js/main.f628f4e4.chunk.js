(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(7),a=n.n(o),i=(n(13),n(2)),h=n(3),l=n(5),u=n(4),b=function(e){return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:[" ",e.name," "]}),Object(r.jsxs)("p",{children:[" ",e.username," "]}),Object(r.jsxs)("p",{children:[" ",e.email," "]})]})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(b,{id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email},n)}));return Object(r.jsx)("div",{children:n})},j=function(e){e.searchField;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=(n(14),function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"},children:e.children})}),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("Error")}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(c.Component),g=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsx)("div",{className:"tc",children:Object(r.jsxs)(O,{children:[Object(r.jsx)("h1",{className:"f1",children:" RoboFriends "}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(d,{robots:t})})]})})}}]),n}(s.a.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.f628f4e4.chunk.js.map