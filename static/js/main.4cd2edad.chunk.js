(this["webpackJsonpbudget-calendar"]=this["webpackJsonpbudget-calendar"]||[]).push([[0],{55:function(e,t,a){e.exports=a(69)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),i=(a(60),a(61),a(36)),l=a(17),d=a(18),o=a(12),u=a(21),h=a(20),m=a(100),g=a(101),b=a(102),v=a(103),O=a(104),f=a(105),p=a(106),y=a(107),D=a(108),E=a(109),S=a(110),C=a(50),j=a(111),A=a(122),T=a(116),k=a(112),w=a(120),B=a(123),x=a(37),V=(a(62),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={month:Object(y.a)(n.props.selectedDate),year:Object(j.a)(n.props.selectedDate),yearInput:Object(j.a)(n.props.selectedDate).toString()},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=function(e){var t=Object(D.a)(e),a=Object(E.a)(e);return Object(S.a)({start:t,end:a})}(new Date(this.state.year,this.state.month,1));return s.a.createElement(s.a.Fragment,null,s.a.createElement(k.a,null,s.a.createElement(w.a,{value:this.state.month,onChange:function(t){return e.setState({month:t.target.value})}},s.a.createElement(B.a,{value:0},"Janurary"),s.a.createElement(B.a,{value:1},"Feburary"),s.a.createElement(B.a,{value:2},"March"),s.a.createElement(B.a,{value:3},"April"),s.a.createElement(B.a,{value:4},"May"),s.a.createElement(B.a,{value:5},"June"),s.a.createElement(B.a,{value:6},"July"),s.a.createElement(B.a,{value:7},"August"),s.a.createElement(B.a,{value:8},"September"),s.a.createElement(B.a,{value:9},"October"),s.a.createElement(B.a,{value:10},"November"),s.a.createElement(B.a,{value:11},"December"))),s.a.createElement(x.a,{defaultValue:this.state.year,thousandSeparator:!1,allowNegative:!1,decimalScale:0,isAllowed:function(e){return e.floatValue<1e4},onValueChange:function(t){e.setState({year:t.floatValue>0?t.floatValue:0})}}),s.a.createElement("div",{className:"List"},s.a.createElement(C.a,{height:500,width:500,itemSize:60,itemCount:t.length},(function(a){var n,c=a.index,r=a.style;return s.a.createElement("div",{style:r,onClick:function(){return e.props.changeSelectedDate(t[c])},className:Object(A.a)(t[c],e.props.selectedDate)?"CalendarListSelected":"CalendarList"},(n=t[c],Object(m.a)(n)?"Sunday":Object(g.a)(n)?"Monday":Object(b.a)(n)?"Tuesday":Object(v.a)(n)?"Wednesday":Object(O.a)(n)?"Thursday":Object(f.a)(n)?"Friday":Object(p.a)(n)?"Saturday":"")," ",Object(T.a)(t[c]),": ",e.props.getBudgetAmountOnDate(t[c]),"\xa0Transactions: +",e.props.getAddTransactionsOnDate(t[c]).length," -",e.props.getSubTransactionsOnDate(t[c]).length)}))))}}]),a}(s.a.Component)),N=a(121),F=a(117),L=(a(66),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showChangeBudget:!1,showAddTransaction:!1,currencyValue:null,isAdd:!0},n.changeBudget=n.changeBudget.bind(Object(o.a)(n)),n.addTransaction=n.addTransaction.bind(Object(o.a)(n)),n.showChangeBudget=n.showChangeBudget.bind(Object(o.a)(n)),n.showAddTransaction=n.showAddTransaction.bind(Object(o.a)(n)),n.closeAll=n.closeAll.bind(Object(o.a)(n)),n.handleOutsideClick=n.handleOutsideClick.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"handleOutsideClick",value:function(e){this.node.contains(e.target)||this.closeAll()}},{key:"changeBudget",value:function(){this.props.changeBudget(this.state.currencyValue),this.setState({currencyValue:null}),this.closeAll()}},{key:"addTransaction",value:function(){this.props.addTransactionOnSelectedDate(this.state.currencyValue,"Test",this.state.isAdd),this.setState({currencyValue:null,isAdd:!0}),this.closeAll()}},{key:"showChangeBudget",value:function(){this.state.showChangeBudget||this.setState({currencyValue:null}),this.setState({showChangeBudget:!0}),this.setState({showAddTransaction:!1}),document.addEventListener("click",this.handleOutsideClick,!1)}},{key:"showAddTransaction",value:function(){this.state.showAddTransaction||this.setState({currencyValue:null,isAdd:!0}),this.setState({showAddTransaction:!0}),this.setState({showChangeBudget:!1}),document.addEventListener("click",this.handleOutsideClick,!1)}},{key:"closeAll",value:function(){this.setState({currencyValue:null,isAdd:!0}),this.setState({showChangeBudget:!1}),this.setState({showAddTransaction:!1}),document.removeEventListener("click",this.handleOutsideClick,!1)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(t){e.node=t}},s.a.createElement(F.a,{style:{marginRight:"10px"},variant:"contained",onClick:this.showChangeBudget},"Change Initial Budget"),s.a.createElement(F.a,{style:{marginLeft:"10px"},variant:"contained",onClick:this.showAddTransaction},"Add Transaction"),s.a.createElement("div",{className:"InputField"},this.state.showChangeBudget?s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{value:this.state.currencyValue,thousandSeparator:!0,allowNegative:!1,prefix:"$",placeholder:"$0.00",decimalScale:2,onValueChange:function(t){e.setState({currencyValue:t.floatValue})},className:"InputFieldInput"}),s.a.createElement("br",null),s.a.createElement(F.a,{style:{marginTop:"30px",marginRight:"10px"},variant:"contained",color:"secondary",onClick:this.closeAll},"Cancel"),s.a.createElement(F.a,{style:{marginTop:"30px",marginLeft:"10px"},variant:"contained",color:"primary",onClick:this.changeBudget},"Change")):"",this.state.showAddTransaction?s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{value:this.state.currencyValue,thousandSeparator:!0,allowNegative:!1,prefix:"$",placeholder:"$0.00",decimalScale:2,onValueChange:function(t){e.setState({currencyValue:t.floatValue})},className:"InputFieldInput"}),s.a.createElement("br",null),s.a.createElement(N.a,{checked:!this.state.isAdd,onChange:function(){return e.setState({isAdd:!e.state.isAdd})},value:!1})," Decreasing",s.a.createElement(N.a,{checked:this.state.isAdd,onChange:function(){return e.setState({isAdd:!e.state.isAdd})},value:!0})," Increasing",s.a.createElement("br",null),s.a.createElement(F.a,{style:{marginTop:"30px",marginRight:"10px"},variant:"contained",color:"secondary",onClick:this.closeAll},"Cancel"),s.a.createElement(F.a,{style:{marginTop:"30px",marginLeft:"10px"},variant:"contained",color:"primary",onClick:this.addTransaction},"Add")):""))}}]),a}(s.a.Component)),M=(a(67),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={onAdd:!0,deleteSelected:-1},n.enableDeleteConfirm=n.enableDeleteConfirm.bind(Object(o.a)(n)),n.disableDeleteConfirm=n.disableDeleteConfirm.bind(Object(o.a)(n)),n.deleteTransaction=n.deleteTransaction.bind(Object(o.a)(n)),n.handleOutsideClick=n.handleOutsideClick.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"handleOutsideClick",value:function(e){this.node.contains(e.target)||this.disableDeleteConfirm()}},{key:"enableDeleteConfirm",value:function(e,t){this.setState({onAdd:t,deleteSelected:e}),document.addEventListener("click",this.handleOutsideClick,!1)}},{key:"disableDeleteConfirm",value:function(){this.setState({deleteSelected:-1}),document.removeEventListener("click",this.handleOutsideClick,!1)}},{key:"deleteTransaction",value:function(e,t){this.props.deleteTransactionOnSelectedDate(e,t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(t){e.node=t}},s.a.createElement("ul",{className:"list"},this.props.increases.map((function(t,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"plus"},"+$",t.value," ",t.description,s.a.createElement("button",{className:"delete-btn",onClick:function(){return e.enableDeleteConfirm(a,!0)}},"x")),a===e.state.deleteSelected&&e.state.onAdd?s.a.createElement(s.a.Fragment,null,"Are you sure you want to delete this transaction?",s.a.createElement("br",null),s.a.createElement(F.a,{style:{marginTop:"10px",marginRight:"10px"},variant:"contained",color:"primary",onClick:e.disableDeleteConfirm},"Cancel"),s.a.createElement(F.a,{style:{marginTop:"10px",marginLeft:"10px"},variant:"contained",color:"secondary",onClick:function(){return e.deleteTransaction(a,!0)}},"Delete")):"")})),this.props.decreases.map((function(t,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"minus"},"-$",t.value," ",t.description,s.a.createElement("button",{className:"delete-btn",onClick:function(){return e.enableDeleteConfirm(a,!1)}},"x")),a!==e.state.deleteSelected||e.state.onAdd?"":s.a.createElement(s.a.Fragment,null,"Are you sure you want to delete this transaction?",s.a.createElement("br",null),s.a.createElement(F.a,{style:{marginTop:"10px",marginRight:"10px"},variant:"contained",color:"primary",onClick:e.disableDeleteConfirm},"Cancel"),s.a.createElement(F.a,{style:{marginTop:"10px",marginLeft:"10px"},variant:"contained",color:"secondary",onClick:function(){return e.deleteTransaction(a,!1)}},"Delete")))}))))}}]),a}(s.a.Component)),I=a(118),J=a(119),$=(a(68),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addDate=function(e){n.setState((function(t,a){return{dates:[].concat(Object(i.a)(n.state.dates),[e])}}))},n.state={budget:500,selectedDate:Date.now(),dates:[{date:new Date(2020,3,19),increases:[{description:"Add Money 1",value:100},{description:"Add Money 2",value:200.5}],decreases:[{description:"Pay Money 1",value:20.3}]},{date:new Date(2020,4,11),increases:[{description:"Add Money 1",value:300.02}],decreases:[{description:"Pay Money 1",value:500}]}]},n.changeBudget=n.changeBudget.bind(Object(o.a)(n)),n.getBudgetAmountOnDate=n.getBudgetAmountOnDate.bind(Object(o.a)(n)),n.changeSelectedDate=n.changeSelectedDate.bind(Object(o.a)(n)),n.getAddTransactionsOnDate=n.getAddTransactionsOnDate.bind(Object(o.a)(n)),n.getSubTransactionsOnDate=n.getSubTransactionsOnDate.bind(Object(o.a)(n)),n.addTransactionOnSelectedDate=n.addTransactionOnSelectedDate.bind(Object(o.a)(n)),n.deleteTransactionOnSelectedDate=n.deleteTransactionOnSelectedDate.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"changeBudget",value:function(e){this.setState({budget:e})}},{key:"changeSelectedDate",value:function(e){this.setState((function(t,a){return{selectedDate:e}}))}},{key:"getBudgetAmountOnDate",value:function(e){var t,a=this.state.budget;for(t=0;t<this.state.dates.length;t++){var n=this.state.dates[t];if(Object(I.a)(n.date,e)||Object(A.a)(n.date,e)){var s;for(s=0;s<n.increases.length;s++)a+=n.increases[s].value;for(s=0;s<n.decreases.length;s++)a-=n.decreases[s].value}}return a.toFixed(2)}},{key:"getAddTransactionsOnDate",value:function(e){for(var t=0;t<this.state.dates.length;t++)if(Object(A.a)(e,this.state.dates[t].date))return this.state.dates[t].increases;return[]}},{key:"getSubTransactionsOnDate",value:function(e){for(var t=0;t<this.state.dates.length;t++)if(Object(A.a)(e,this.state.dates[t].date))return this.state.dates[t].decreases;return[]}},{key:"addTransactionOnSelectedDate",value:function(e,t,a){for(var n=0;n<this.state.dates.length;n++){var s;if(Object(A.a)(this.state.selectedDate,this.state.dates[n].date))return void(a?((s=this.state.dates)[n].increases=[].concat(Object(i.a)(s[n].increases),[{description:t,value:e}]),this.setState({dates:s})):((s=this.state.dates)[n].decreases=[].concat(Object(i.a)(s[n].decreases),[{description:t,value:e}]),this.setState({dates:s})))}var c={date:this.state.selectedDate,increases:[],decreases:[]};a?c.increases=[{description:t,value:e}]:c.decreases=[{description:t,value:e}],this.addDate(c)}},{key:"deleteTransactionOnSelectedDate",value:function(e,t){for(var a,n=0;n<this.state.dates.length;n++)if(Object(A.a)(this.state.selectedDate,this.state.dates[n].date)){a=n;break}if(null!=a){var s=this.state.dates,c=[];if(t){for(n=0;n<s[a].increases.length;n++)n!==e&&(c=[].concat(Object(i.a)(c),[s[a].increases[n]]));s[a].increases=c}else{for(n=0;n<s[a].decreases.length;n++)n!==e&&(c=[].concat(Object(i.a)(c),[s[a].decreases[n]]));s[a].decreases=c}this.setState({dates:s})}}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,s.a.createElement("h1",null,"Current Balance: $",this.getBudgetAmountOnDate(this.state.selectedDate)),"Selected Date: ",function(e){var t=Object(y.a)(e);return 0===t?"Janurary":1===t?"Feburary":2===t?"March":3===t?"April":4===t?"May":5===t?"June":6===t?"July":7===t?"August":8===t?"September":9===t?"October":10===t?"November":11===t?"December":""}(this.state.selectedDate)," ",Object(T.a)(this.state.selectedDate),", ",Object(j.a)(this.state.selectedDate)),s.a.createElement(L,{addTransactionOnSelectedDate:this.addTransactionOnSelectedDate,changeBudget:this.changeBudget}),s.a.createElement(J.a,{container:!0,justify:"center",spacing:0},s.a.createElement(J.a,{item:!0,xs:!0},s.a.createElement(V,{budget:this.state.budget,selectedDate:this.state.selectedDate,changeSelectedDate:this.changeSelectedDate,getBudgetAmountOnDate:this.getBudgetAmountOnDate,getAddTransactionsOnDate:this.getAddTransactionsOnDate,getSubTransactionsOnDate:this.getSubTransactionsOnDate,dates:this.state.dates,ref:"calendar"})),s.a.createElement(J.a,{item:!0,xs:!0},s.a.createElement("div",{className:"transaction"},s.a.createElement(M,{increases:this.getAddTransactionsOnDate(this.state.selectedDate),decreases:this.getSubTransactionsOnDate(this.state.selectedDate),deleteTransactionOnSelectedDate:this.deleteTransactionOnSelectedDate})))))}}]),a}(s.a.Component));var R=function(){return s.a.createElement("div",{className:"App"},s.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.4cd2edad.chunk.js.map