(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(17),n(4)),l=n(8),s=n(5),u=n(6),m=n(9),d=n(7),h=n(1),b=n(10),p=(n(18),function(e){var t=e.text;return o.a.createElement("li",null,t)}),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={todos:[],newTodo:""},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=[].concat(Object(l.a)(this.state.todos),[this.state.newTodo]);this.setState({todos:t,newTodo:""})}},{key:"render",value:function(){var e=this,t=this.state.newTodo,n=this.state.todos.map(function(e,t){return o.a.createElement(p,{key:t,text:e})});return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Simple Todo App"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"todo-input",autoComplete:"off",type:"text",name:"newTodo",placeholder:"What needs to be done?",value:t,onChange:function(t){return e.setState(Object(i.a)({},t.target.name,t.target.value))}}),o.a.createElement("button",{type:"submit",className:"save-button"},"SAVE")),o.a.createElement("div",{className:"todo-content"},o.a.createElement("ol",null,n)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.7f9cf369.chunk.js.map