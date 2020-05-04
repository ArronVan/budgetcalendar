(this["webpackJsonpbudget-calendar"]=this["webpackJsonpbudget-calendar"]||[]).push([[0],{56:function(e,t,a){e.exports=a(67)},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),i=(a(61),a(62),a(39)),l=a(17),u=a(18),d=a(13),o=a(22),h=a(20),g=a(102),m=a(103),b=a(104),v=a(105),O=a(106),p=a(107),f=a(108),D=a(109),y=a(110),E=a(111),j=a(112),S=function(e){return Object(g.a)(e)?"Sunday":Object(m.a)(e)?"Monday":Object(b.a)(e)?"Tuesday":Object(v.a)(e)?"Wednesday":Object(O.a)(e)?"Thursday":Object(p.a)(e)?"Friday":Object(f.a)(e)?"Saturday":""},A=a(51),T=a(113),w=a(125),B=a(118),C=a(114),k=a(122),V=a(126),F=a(37),M=(a(63),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={month:Object(D.a)(n.props.selectedDate),year:Object(T.a)(n.props.selectedDate),yearInput:Object(T.a)(n.props.selectedDate).toString()},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=function(e){var t=Object(y.a)(e),a=Object(E.a)(e);return Object(j.a)({start:t,end:a})}(new Date(this.state.year,this.state.month,1));return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",null,this.props.dates.map((function(t,a){return s.a.createElement("li",{key:a},"Date: ",S(t.date)," - Budget: ",e.props.getBudgetAmountOnDate(t.date)," - Additions:[",t.increases.map((function(e){return s.a.createElement(s.a.Fragment,null,e.description,": ",e.value,"\xa0")})),"] - Subtractions[",t.decreases.map((function(e){return s.a.createElement(s.a.Fragment,null,e.description,": ",e.value,"\xa0")})),"]")}))),s.a.createElement(C.a,null,s.a.createElement(k.a,{value:this.state.month,onChange:function(t){return e.setState({month:t.target.value})}},s.a.createElement(V.a,{value:0},"Janurary"),s.a.createElement(V.a,{value:1},"Feburary"),s.a.createElement(V.a,{value:2},"March"),s.a.createElement(V.a,{value:3},"April"),s.a.createElement(V.a,{value:4},"May"),s.a.createElement(V.a,{value:5},"June"),s.a.createElement(V.a,{value:6},"July"),s.a.createElement(V.a,{value:7},"August"),s.a.createElement(V.a,{value:8},"September"),s.a.createElement(V.a,{value:9},"October"),s.a.createElement(V.a,{value:10},"November"),s.a.createElement(V.a,{value:11},"December"))),s.a.createElement(F.a,{defaultValue:this.state.year,thousandSeparator:!1,allowNegative:!1,decimalScale:0,isAllowed:function(e){return e.floatValue<1e4},onValueChange:function(t){e.setState({year:t.floatValue>0?t.floatValue:0})}}),s.a.createElement("div",{className:"List"},s.a.createElement(A.a,{height:500,width:500,itemSize:60,itemCount:t.length},(function(a){var n=a.index,c=a.style;return s.a.createElement("div",{style:c,onClick:function(){return e.props.changeSelectedDate(t[n])},className:Object(w.a)(t[n],e.props.selectedDate)?"CalendarListSelected":"CalendarList"},S(t[n])," ",Object(B.a)(t[n]),": ",e.props.getBudgetAmountOnDate(t[n]),"\xa0Transactions: +",e.props.getAddTransactionsOnDate(t[n]).length," -",e.props.getSubTransactionsOnDate(t[n]).length)}))))}}]),a}(s.a.Component)),J=a(127),N=a(123),x=a(124),$=a(119),I=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showChangeBudget:!1,showAddTransaction:!1,currencyValue:null,isAdd:!0},n.changeBudget=n.changeBudget.bind(Object(d.a)(n)),n.addTransaction=n.addTransaction.bind(Object(d.a)(n)),n.showChangeBudget=n.showChangeBudget.bind(Object(d.a)(n)),n.showAddTransaction=n.showAddTransaction.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"changeBudget",value:function(){this.props.changeBudget(this.state.currencyValue),this.setState({currencyValue:null})}},{key:"addTransaction",value:function(){this.props.addTransactionOnSelectedDate(this.state.currencyValue,"Test",this.state.isAdd),this.setState({currencyValue:null,isAdd:!0})}},{key:"showChangeBudget",value:function(){this.state.showChangeBudget||this.setState({currencyValue:null}),this.setState({showChangeBudget:!0}),this.setState({showAddTransaction:!1})}},{key:"showAddTransaction",value:function(){this.state.showAddTransaction||this.setState({currencyValue:null,isAdd:!0}),this.setState({showAddTransaction:!0}),this.setState({showChangeBudget:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement($.a,{variant:"contained",onClick:this.showChangeBudget},"Change Initial Budget"),s.a.createElement($.a,{variant:"contained",onClick:this.showAddTransaction},"Add Transaction"),s.a.createElement("br",null),this.state.showChangeBudget?s.a.createElement(s.a.Fragment,null,s.a.createElement(F.a,{value:this.state.currencyValue,thousandSeparator:!0,allowNegative:!1,prefix:"$",placeholder:"$0.00",decimalScale:2,onValueChange:function(t){e.setState({currencyValue:t.floatValue})}}),s.a.createElement("button",{onClick:this.changeBudget},"Change")):"",this.state.showAddTransaction?s.a.createElement(s.a.Fragment,null,s.a.createElement(F.a,{value:this.state.currencyValue,thousandSeparator:!0,allowNegative:!1,prefix:"$",placeholder:"$0.00",decimalScale:2,onValueChange:function(t){e.setState({currencyValue:t.floatValue})}}),s.a.createElement(x.a,{value:this.state.isAdd,onChange:function(){return e.setState({isAdd:!e.state.isAdd})}},s.a.createElement(J.a,{value:!1,control:s.a.createElement(N.a,null),label:"Decreasing"}),s.a.createElement(J.a,{value:!0,control:s.a.createElement(N.a,null),label:"Increasing"})),s.a.createElement("button",{onClick:this.addTransaction},"Add")):"")}}]),a}(s.a.Component),L=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.increases.map((function(e,t){return s.a.createElement(s.a.Fragment,null,"+$",e.value," ",e.description,s.a.createElement("br",null))})),s.a.createElement("br",null),this.props.decreases.map((function(e,t){return s.a.createElement(s.a.Fragment,null,"-$",e.value," ",e.description,s.a.createElement("br",null))})))}}]),a}(s.a.Component),W=a(120),P=a(121),z=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addDate2=function(e){n.setState((function(t,a){return{dates:[].concat(Object(i.a)(n.state.dates),[e])}}))},n.state={budget:500,selectedDate:Date.now(),dates:[{date:new Date(2020,3,19),increases:[{description:"Add Money 1",value:100},{description:"Add Money 2",value:200.5}],decreases:[{description:"Pay Money 1",value:20.3}]},{date:new Date(2020,4,11),increases:[{description:"Add Money 1",value:300.02}],decreases:[{description:"Pay Money 1",value:500}]}]},n.addDate=n.addDate.bind(Object(d.a)(n)),n.changeBudget=n.changeBudget.bind(Object(d.a)(n)),n.getBudgetAmountOnDate=n.getBudgetAmountOnDate.bind(Object(d.a)(n)),n.changeSelectedDate=n.changeSelectedDate.bind(Object(d.a)(n)),n.getAddTransactionsOnDate=n.getAddTransactionsOnDate.bind(Object(d.a)(n)),n.getSubTransactionsOnDate=n.getSubTransactionsOnDate.bind(Object(d.a)(n)),n.addTransactionOnSelectedDate=n.addTransactionOnSelectedDate.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"addDate",value:function(){var e=this;this.setState((function(t,a){return{dates:[].concat(Object(i.a)(e.state.dates),[{date:3,increases:[100],decreases:[50],value:1e3}])}}))}},{key:"changeBudget",value:function(e){this.setState({budget:e})}},{key:"changeSelectedDate",value:function(e){this.setState((function(t,a){return{selectedDate:e}}))}},{key:"getBudgetAmountOnDate",value:function(e){var t,a=this.state.budget;for(t=0;t<this.state.dates.length;t++){var n=this.state.dates[t];if(Object(W.a)(n.date,e)||Object(w.a)(n.date,e)){var s;for(s=0;s<n.increases.length;s++)a+=n.increases[s].value;for(s=0;s<n.decreases.length;s++)a-=n.decreases[s].value}}return a.toFixed(2)}},{key:"getAddTransactionsOnDate",value:function(e){for(var t=0;t<this.state.dates.length;t++)if(Object(w.a)(e,this.state.dates[t].date))return this.state.dates[t].increases;return[]}},{key:"getSubTransactionsOnDate",value:function(e){for(var t=0;t<this.state.dates.length;t++)if(Object(w.a)(e,this.state.dates[t].date))return this.state.dates[t].decreases;return[]}},{key:"addTransactionOnSelectedDate",value:function(e,t,a){for(var n=0;n<this.state.dates.length;n++){var s;if(Object(w.a)(this.state.selectedDate,this.state.dates[n].date))return void(a?((s=this.state.dates)[n].increases=[].concat(Object(i.a)(s[n].increases),[{description:t,value:e}]),this.setState({dates:s})):((s=this.state.dates)[n].decreases=[].concat(Object(i.a)(s[n].decreases),[{description:t,value:e}]),this.setState({dates:s})))}var c={date:this.state.selectedDate,increases:[],decreases:[]};a?c.increases=[{description:t,value:e}]:c.decreases=[{description:t,value:e}],this.addDate2(c)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"Selected Date: ",function(e){var t=Object(D.a)(e);return 0===t?"Janurary":1===t?"Feburary":2===t?"March":3===t?"April":4===t?"May":5===t?"June":6===t?"July":7===t?"August":8===t?"September":9===t?"October":10===t?"November":11===t?"December":""}(this.state.selectedDate)," ",Object(B.a)(this.state.selectedDate),", ",Object(T.a)(this.state.selectedDate),s.a.createElement("br",null),"Budget: ",this.getBudgetAmountOnDate(this.state.selectedDate)),s.a.createElement("button",{onClick:this.addDate},"Click"),s.a.createElement(I,{addTransactionOnSelectedDate:this.addTransactionOnSelectedDate,changeBudget:this.changeBudget}),s.a.createElement(P.a,{container:!0,justify:"center",spacing:0},s.a.createElement(P.a,{item:!0,xs:!0},s.a.createElement(M,{budget:this.state.budget,selectedDate:this.state.selectedDate,changeSelectedDate:this.changeSelectedDate,getBudgetAmountOnDate:this.getBudgetAmountOnDate,getAddTransactionsOnDate:this.getAddTransactionsOnDate,getSubTransactionsOnDate:this.getSubTransactionsOnDate,dates:this.state.dates,addDate:this.addDate2,ref:"calendar"})),s.a.createElement(P.a,{item:!0,xs:!0},s.a.createElement(L,{increases:this.getAddTransactionsOnDate(this.state.selectedDate),decreases:this.getSubTransactionsOnDate(this.state.selectedDate)}))))}}]),a}(s.a.Component);var q=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.861df345.chunk.js.map