(window.webpackJsonpweather=window.webpackJsonpweather||[]).push([[0],{11:function(t,e,r){t.exports=r(19)},16:function(t,e,r){},18:function(t,e,r){},19:function(t,e,r){"use strict";r.r(e);var i=r(0),n=r.n(i),a=r(9),o=r.n(a),c=(r(16),r(6)),s=r.n(c),p=r(10),u=r(1),l=r(2),d=r(4),h=r(3),m=r(5),y=(r(18),r(7)),v=function(t){function e(){return Object(u.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("form",{id:"head",onSubmit:this.props.getWeatherData},n.a.createElement("input",Object(y.a)({class:"input",id:"input",type:"text",placeholder:"City (e.g. Phoenix)"},"id","city")),n.a.createElement("input",Object(y.a)({class:"input",id:"input",type:"text",placeholder:"Country (e.g. US)"},"id","country")),n.a.createElement("select",{class:"input",id:"unit"},n.a.createElement("option",{id:"f",value:"imperial"},"\xb0F"),n.a.createElement("option",{id:"c",value:"metric"},"\xb0C")),n.a.createElement("button",{class:"input",type:"submit"},"Submit"))}}]),e}(n.a.Component),b=function(t){function e(){return Object(u.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("br",null),this.props.city&&this.props.country&&n.a.createElement("p",{id:"location"},this.props.city,", ",this.props.country),n.a.createElement("div",{id:"horizontal"},this.props.icon&&n.a.createElement("img",{id:"img",alt:"",src:"http://openweathermap.org/img/wn/".concat(this.props.icon,"@2x.png")}),this.props.temperature&&n.a.createElement("p",{id:"temp"},this.props.temperature,"\xb0"),this.props.description&&n.a.createElement("p",{id:"description"},this.props.description),this.props.humidity&&n.a.createElement("p",null,this.props.humidity,"% Humidity")),this.props.error&&n.a.createElement("p",{id:"error"},this.props.error))}}]),e}(n.a.Component),f="2a9127b69bee49c15901ab8978d2c912",g=function(t){function e(){var t,r;Object(u.a)(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(r=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:void 0,error:void 0},r.getWeatherData=function(){var t=Object(p.a)(s.a.mark(function t(e){var i,n,a,o,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("method called"),e.preventDefault(),i=e.target.elements.city.value,n=e.target.elements.country.value,a=e.target.elements.unit.value,t.next=7,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,",").concat(n,"&appid=").concat(f,"&units=").concat(a));case 7:return o=t.sent,t.next=10,o.json();case 10:c=t.sent,console.log(c);try{i&&n?(console.log(c),r.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,icon:c.weather[0].icon,error:""})):r.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:void 0,error:"Field(s) not filled in correctly"})}catch(s){r.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:void 0,error:"Improper city/country"})}console.log("end of method");case 14:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),r}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h2",{id:"head"},"Weather App"),n.a.createElement(v,{getWeatherData:this.getWeatherData}),n.a.createElement("br",null),n.a.createElement(b,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,icon:this.state.icon,error:this.state.error}))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.93bdbee0.chunk.js.map