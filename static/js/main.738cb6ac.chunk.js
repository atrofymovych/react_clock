(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=n.n(s),d=(n(12),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={today:(new Date).toUTCString().slice(-12,-4)},e.timerId=0,e.clockId=0,e.newClockName="",e.savedClockName="",e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({today:(new Date).toUTCString().slice(-12,-4)}),console.info((new Date).toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.clearInterval(this.clockId)}},{key:"render",value:function(){var e=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(u.a.PureComponent);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e.handleMouseLClick=function(t){t.preventDefault(),e.setState({hasClock:!0})},e.handleMouseRClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleMouseRClick),document.addEventListener("click",this.handleMouseLClick),this.timerId=window.setInterval((function(){e.setState({clockName:k()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleMouseRClick),document.removeEventListener("click",this.handleMouseLClick),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(m,{clockName:t})]})}}]),n}(u.a.PureComponent);o.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.738cb6ac.chunk.js.map