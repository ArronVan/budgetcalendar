(this["webpackJsonpbudget-calendar"]=this["webpackJsonpbudget-calendar"]||[]).push([[0],{35:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(16),r=a.n(c),i=(a(40),a(41),a(24)),d=a(12),l=a(13),u=a(9),o=a(15),h=a(14),g=a(70),b=a(71),m=a(72),O=a(73),p=a(74),v=a(75),D=a(76),f=a(77),j=a(78),y=a(79),S=a(80),E=function(e){return Object(g.a)(e)?"Sunday":Object(b.a)(e)?"Monday":Object(m.a)(e)?"Tuesday":Object(O.a)(e)?"Wednesday":Object(p.a)(e)?"Thursday":Object(v.a)(e)?"Friday":Object(D.a)(e)?"Saturday":""},A=a(32),T=a(87),k=a(81),B=(a(42),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=function(e){var t=Object(j.a)(e),a=Object(y.a)(e);return Object(S.a)({start:t,end:a})}(this.props.selectedDate);return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:function(){return e.props.changeSelectedDate(new Date(2020,3,1))}},"Click2"),s.a.createElement("ul",null,this.props.dates.map((function(t,a){return s.a.createElement("li",{key:a},"Date: ",E(t.date)," - Budget: ",e.props.getBudgetAmountOnDate(t.date)," - Additions:[",t.increases.map((function(e){return s.a.createElement(s.a.Fragment,null,e.description,": ",e.value,"\xa0")})),"] - Subtractions[",t.decreases.map((function(e){return s.a.createElement(s.a.Fragment,null,e.description,": ",e.value,"\xa0")})),"]")}))),s.a.createElement("div",{className:"List"},s.a.createElement(A.a,{height:500,width:500,itemSize:60,itemCount:t.length},(function(a){var n=a.index,c=a.style;return s.a.createElement("div",{style:c,onClick:function(){return e.props.changeSelectedDate(t[n])},className:Object(T.a)(t[n],e.props.selectedDate)?"CalendarListSelected":"CalendarList"},E(t[n])," ",Object(k.a)(t[n]),": ",e.props.getBudgetAmountOnDate(t[n]),"\xa0Transactions: +",e.props.getAddTransactionsOnDate(t[n]).length," -",e.props.getSubTransactionsOnDate(t[n]).length)}))))}}]),a}(s.a.Component)),C=a(28),w=a(88),F=a(85),V=a(86),M=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={showChangeBudget:!1,showAddTransaction:!0,currencyValue:null,isAdd:!0},n.changeBudget=n.changeBudget.bind(Object(u.a)(n)),n.addTransaction=n.addTransaction.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"changeBudget",value:function(){this.props.changeBudget(this.state.currencyValue),this.setState({currencyValue:null})}},{key:"addTransaction",value:function(){this.props.addTransactionOnSelectedDate(this.state.currencyValue,"Test",this.state.isAdd),this.setState({currencyValue:null,isAdd:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.state.showChangeBudget?s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,{value:this.state.currencyValue,thousandSeparator:!0,allowNegative:!1,prefix:"$",placeholder:"$0.00",decimalScale:2,onValueChange:function(t){e.setState({currencyValue:t.floatValue})}}),s.a.createElement("button",{onClick:this.changeBudget},"Change")):"",this.state.showAddTransaction?s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,{value:this.state.currencyValue,thousandSeparator:!0,allowNegative:!1,prefix:"$",placeholder:"$0.00",decimalScale:2,onValueChange:function(t){e.setState({currencyValue:t.floatValue})}}),s.a.createElement(V.a,{value:this.state.isAdd,onChange:function(){return e.setState({isAdd:!e.state.isAdd})}},s.a.createElement(w.a,{value:!1,control:s.a.createElement(F.a,null),label:"Decreasing"}),s.a.createElement(w.a,{value:!0,control:s.a.createElement(F.a,null),label:"Increasing"})),s.a.createElement("button",{onClick:this.addTransaction},"Add")):"")}}]),a}(s.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.increases.map((function(e,t){return s.a.createElement(s.a.Fragment,null,"+$",e.value," ",e.description,s.a.createElement("br",null))})),s.a.createElement("br",null),this.props.decreases.map((function(e,t){return s.a.createElement(s.a.Fragment,null,"-$",e.value," ",e.description,s.a.createElement("br",null))})))}}]),a}(s.a.Component),$=a(82),N=a(83),J=a(84),L=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).addDate2=function(e){n.setState((function(t,a){return{dates:[].concat(Object(i.a)(n.state.dates),[e])}}))},n.state={budget:500,selectedDate:Date.now(),dates:[{date:new Date(2020,3,19),increases:[{description:"Add Money 1",value:100},{description:"Add Money 2",value:200.5}],decreases:[{description:"Pay Money 1",value:20.3}]},{date:new Date(2020,4,11),increases:[{description:"Add Money 1",value:300.02}],decreases:[{description:"Pay Money 1",value:500}]}]},n.addDate=n.addDate.bind(Object(u.a)(n)),n.changeBudget=n.changeBudget.bind(Object(u.a)(n)),n.getBudgetAmountOnDate=n.getBudgetAmountOnDate.bind(Object(u.a)(n)),n.changeSelectedDate=n.changeSelectedDate.bind(Object(u.a)(n)),n.getAddTransactionsOnDate=n.getAddTransactionsOnDate.bind(Object(u.a)(n)),n.getSubTransactionsOnDate=n.getSubTransactionsOnDate.bind(Object(u.a)(n)),n.addTransactionOnSelectedDate=n.addTransactionOnSelectedDate.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"addDate",value:function(){var e=this;this.setState((function(t,a){return{dates:[].concat(Object(i.a)(e.state.dates),[{date:3,increases:[100],decreases:[50],value:1e3}])}}))}},{key:"changeBudget",value:function(e){this.setState({budget:e})}},{key:"changeSelectedDate",value:function(e){this.setState((function(t,a){return{selectedDate:e}}))}},{key:"getBudgetAmountOnDate",value:function(e){var t,a=this.state.budget;for(t=0;t<this.state.dates.length;t++){var n=this.state.dates[t];if(Object($.a)(n.date,e)||Object(T.a)(n.date,e)){var s;for(s=0;s<n.increases.length;s++)a+=n.increases[s].value;for(s=0;s<n.decreases.length;s++)a-=n.decreases[s].value}}return a.toFixed(2)}},{key:"getAddTransactionsOnDate",value:function(e){for(var t=0;t<this.state.dates.length;t++)if(Object(T.a)(e,this.state.dates[t].date))return this.state.dates[t].increases;return[]}},{key:"getSubTransactionsOnDate",value:function(e){for(var t=0;t<this.state.dates.length;t++)if(Object(T.a)(e,this.state.dates[t].date))return this.state.dates[t].decreases;return[]}},{key:"addTransactionOnSelectedDate",value:function(e,t,a){for(var n=0;n<this.state.dates.length;n++){var s;if(Object(T.a)(this.state.selectedDate,this.state.dates[n].date))return void(a?((s=this.state.dates)[n].increases=[].concat(Object(i.a)(s[n].increases),[{description:t,value:e}]),this.setState({dates:s})):((s=this.state.dates)[n].decreases=[].concat(Object(i.a)(s[n].decreases),[{description:t,value:e}]),this.setState({dates:s})))}var c={date:this.state.selectedDate,increases:[],decreases:[]};a?c.increases=[{description:t,value:e}]:c.decreases=[{description:t,value:e}],this.addDate2(c)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"Selected Date: ",function(e){var t=Object(f.a)(e);return 0===t?"Janurary":1===t?"Feburary":2===t?"March":3===t?"April":4===t?"May":5===t?"June":6===t?"July":7===t?"August":8===t?"September":9===t?"October":10===t?"November":11===t?"December":""}(this.state.selectedDate)," ",Object(k.a)(this.state.selectedDate),", ",Object(N.a)(this.state.selectedDate),s.a.createElement("br",null),"Budget: ",this.getBudgetAmountOnDate(this.state.selectedDate)),s.a.createElement("button",{onClick:this.addDate},"Click"),s.a.createElement(M,{addTransactionOnSelectedDate:this.addTransactionOnSelectedDate,changeBudget:this.changeBudget}),s.a.createElement(J.a,{container:!0,justify:"center",spacing:0},s.a.createElement(J.a,{item:!0,xs:!0},s.a.createElement(B,{budget:this.state.budget,selectedDate:this.state.selectedDate,changeSelectedDate:this.changeSelectedDate,getBudgetAmountOnDate:this.getBudgetAmountOnDate,getAddTransactionsOnDate:this.getAddTransactionsOnDate,getSubTransactionsOnDate:this.getSubTransactionsOnDate,dates:this.state.dates,addDate:this.addDate2,ref:"calendar"})),s.a.createElement(J.a,{item:!0,xs:!0},s.a.createElement(x,{increases:this.getAddTransactionsOnDate(this.state.selectedDate),decreases:this.getSubTransactionsOnDate(this.state.selectedDate)}))))}}]),a}(s.a.Component);var W=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.5fe40fc5.chunk.js.map