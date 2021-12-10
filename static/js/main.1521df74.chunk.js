(this["webpackJsonpnasa-open-api"]=this["webpackJsonpnasa-open-api"]||[]).push([[0],{10:function(t,a,e){},16:function(t,a,e){},19:function(t,a,e){"use strict";e.r(a);var s=e(1),n=e.n(s),i=e(11),c=e.n(i),r=(e(16),e(2)),h=e(3),o=e(5),l=e(4),u=(e(10),e(7)),d=e.n(u),j=e(8),p=e(6),b=e(0),O=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var s;return Object(r.a)(this,e),(s=a.call(this,t)).state={loading:!0,nasaData:null,i:0,current_image:null,populatedArray:[],images:["Pess Next"]},s.decrement=s.decrement.bind(Object(p.a)(s)),s.increment=s.increment.bind(Object(p.a)(s)),s.reset=s.reset.bind(Object(p.a)(s)),s}return Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var a,e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.nasa.gov/EPIC/api/natural?api_key=s3Ro78SfpZQASJOPCYH3Ggcoby7guKm2mVaqoDgq",t.next=3,fetch("https://api.nasa.gov/EPIC/api/natural?api_key=s3Ro78SfpZQASJOPCYH3Ggcoby7guKm2mVaqoDgq");case 3:return a=t.sent,t.next=6,a.json();case 6:e=t.sent,this.setState({nasaData:e,loading:!1}),this.showImage(),this.populateArray();case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"showImage",value:function(){this.setState({images:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"https://api.nasa.gov/EPIC/archive/natural/20".concat(this.state.nasaData[this.state.i].date.charAt(2)).concat(this.state.nasaData[this.state.i].date.charAt(3),"/").concat(this.state.nasaData[this.state.i].date.charAt(5)).concat(this.state.nasaData[this.state.i].date.charAt(6),"/").concat(this.state.nasaData[this.state.i].date.charAt(8)).concat(this.state.nasaData[this.state.i].date.charAt(9),"/png/").concat(this.state.nasaData[this.state.i].image,".png?api_key=s3Ro78SfpZQASJOPCYH3Ggcoby7guKm2mVaqoDgq"),alt:""}),Object(b.jsx)("h6",{children:this.state.nasaData[this.state.i].date}),Object(b.jsx)("h3",{children:this.state.i+1})]})]})}},{key:"populateArray",value:function(){var t=this.state.nasaData,a=[],e=0;for(e in t)a.push([e,t[e]]);this.setState({populatedArray:a}),console.log(a)}},{key:"decrement",value:function(){this.state.i>0?this.setState({i:this.state.i-1},this.showImage):this.setState({i:this.state.populatedArray.length-1},this.showImage)}},{key:"increment",value:function(){this.state.i<this.state.populatedArray.length-1?this.setState({i:this.state.i+1},this.showImage):this.setState({i:0},this.showImage)}},{key:"reset",value:function(){this.setState({i:0},this.showImage)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{children:this.state.loading||!this.state.nasaData?Object(b.jsx)("div",{className:"Loading",children:"Loading..."}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Earth"}),Object(b.jsxs)("h4",{children:["".concat(this.state.nasaData[0].date.charAt(5)).concat(this.state.nasaData[0].date.charAt(6)),"/","".concat(this.state.nasaData[0].date.charAt(8)).concat(this.state.nasaData[0].date.charAt(9)),"/20","".concat(this.state.nasaData[0].date.charAt(2)).concat(this.state.nasaData[0].date.charAt(3))]}),Object(b.jsx)("h6",{children:"These images were taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft."}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:this.state.images[0]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:this.decrement,children:"Prev"}),Object(b.jsx)("button",{onClick:this.reset,children:"reset"}),Object(b.jsx)("button",{onClick:this.increment,children:"Next"})]})]}),Object(b.jsx)("br",{})]})})})}}]),e}(s.Component),g=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){var t;Object(r.a)(this,e);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=a.call.apply(a,[this].concat(n))).state={loading:!0,nasaData:null},t}return Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var a,e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.nasa.gov/planetary/apod?api_key=s3Ro78SfpZQASJOPCYH3Ggcoby7guKm2mVaqoDgq",t.next=3,fetch("https://api.nasa.gov/planetary/apod?api_key=s3Ro78SfpZQASJOPCYH3Ggcoby7guKm2mVaqoDgq");case 3:return a=t.sent,t.next=6,a.json();case 6:e=t.sent,this.setState({nasaData:e,loading:!1}),console.log(e);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{children:this.state.loading||!this.state.nasaData?Object(b.jsx)("div",{className:"Loading",children:"Loading..."}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:this.state.nasaData.title})}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:this.state.nasaData.url,alt:""})}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{children:Object(b.jsx)("h5",{children:this.state.nasaData.explanation})})]})})})}}]),e}(s.Component),v=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var s;return Object(r.a)(this,e),(s=a.call(this,t)).state={curDate:"null"},s}return Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=new Date,a=t.getFullYear(),e=t.getMonth()+1,s=t.getDate();this.formatDate=a+"/"+e+"/"+s,console.log(this.formatDate),this.setState({curDate:this.formatDate})}},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.curDate})}}]),e}(s.Component),m=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){return Object(r.a)(this,e),a.apply(this,arguments)}return Object(h.a)(e,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(v,{}),Object(b.jsx)(g,{}),Object(b.jsx)(O,{})]})}}]),e}(s.Component);c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1521df74.chunk.js.map