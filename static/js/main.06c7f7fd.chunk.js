(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(t,e,a){t.exports={statistics__list:"Statistics_statistics__list__3h-4J",statistics__name:"Statistics_statistics__name__1Vmts",statistics__value:"Statistics_statistics__value__28ijh",head:"Statistics_head__3pT2k",statisticsTotal:"Statistics_statisticsTotal__2tMvk",statisticsTotal__name:"Statistics_statisticsTotal__name__tDIPv",statisticsTotal__value:"Statistics_statisticsTotal__value__3ym7p",positive__name:"Statistics_positive__name__2MaLc",positive__value:"Statistics_positive__value__Y5aoT"}},function(t,e,a){t.exports={head:"Section_head__3l_jc",section:"Section_section__qwkoq"}},,,,,,function(t,e,a){t.exports={page__wrapper:"App_page__wrapper__20wOj",feedback:"App_feedback__3qdpo"}},function(t,e,a){t.exports={feedback__buttons:"FeedbackOptions_feedback__buttons__3el3a",btn:"FeedbackOptions_btn__3w3tW"}},function(t,e,a){t.exports={message:"Notification_message__OpVWE"}},,,,function(t,e,a){t.exports=a(19)},,,,,function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),c=a(4),n=a.n(c),l=a(5),o=a(6),_=a(7),r=a(13),m=a(11),u=a(8),d=a.n(u),v=a(1),p=a.n(v),b=function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,l=t.positivePercentage;return i.a.createElement(s.Fragment,null,i.a.createElement("ul",{className:p.a.statistics__list},i.a.createElement("li",{className:p.a.statistics__list},i.a.createElement("div",{className:p.a.statistics__name},"Goog:"),i.a.createElement("div",{className:p.a.statistics__value},e)),i.a.createElement("li",{className:p.a.statistics__list},i.a.createElement("div",{className:p.a.statistics__name},"Neutral:"),i.a.createElement("div",{className:p.a.statistics__value},a)),i.a.createElement("li",{className:p.a.statistics__list},i.a.createElement("div",{className:p.a.statistics__name},"Bad:"),i.a.createElement("div",{className:p.a.statistics__value},c))),i.a.createElement("ul",{className:p.a.statisticsTotal},i.a.createElement("li",{className:p.a.statisticsTotal__all},i.a.createElement("div",{className:p.a.statisticsTotal__name},"Total:"),i.a.createElement("div",{className:p.a.statisticsTotal__value},n())),i.a.createElement("li",{className:p.a.statisticsTotal__positive},i.a.createElement("div",{className:p.a.positive__name},"Positive feedback:"),i.a.createElement("div",{className:p.a.positive__value},l(),"%"))))},E=a(12),f=a(9),g=a.n(f),h=function(t){var e=t.options,a=t.onLeaveFeedback,c=Object.keys(e),n=Object(E.a)(c,3),l=[n[0],n[1],n[2]];return i.a.createElement(s.Fragment,null,l.map((function(t){return i.a.createElement("button",{key:t,id:t,className:g.a.btn,onClick:a},t[0].toUpperCase()+t.slice(1))})))},k=a(2),N=a.n(k),T=function(t){var e=t.title,a=t.children;return i.a.createElement("section",{className:N.a.section},i.a.createElement("h2",{className:N.a.head},e),a)},S=a(10),F=a.n(S),w=function(t){var e=t.message;return i.a.createElement("div",{className:F.a.message},e)};w.defaultProps={message:""};var O=w,j=function(t){Object(r.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.plusVote=function(e){var a=e.currentTarget.id;t.setState((function(t){return Object(l.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){var e=0;for(var a in t.state)e+=t.state[a];return e},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(_.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:d.a.page__wrapper},i.a.createElement(T,{title:"Please leave feedback"},i.a.createElement(h,{options:this.state,onLeaveFeedback:this.plusVote})),0===this.countTotalFeedback()?i.a.createElement(O,{message:"No feedback given"}):i.a.createElement(T,{title:"Statistics"},i.a.createElement(b,{good:this.state.good,neutral:this.state.neutral,options:this.state.bad,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})))}}]),a}(s.Component);n.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.06c7f7fd.chunk.js.map