(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c(24),r=c.n(i),a=c(9),l=(c(32),c(3)),o=c(14),j=c(26),u=c(8);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(u.a)(t[c],3),s=n[0],i=n[1],r=n[2];if(e[s].value&&e[s].value===e[i].value&&e[s].value===e[r].value)return{value:e[s].value,positions:[s,i,r]}}return null}c(33),c(34);var d=function(e){return Object(n.jsx)("button",{className:e.isHighlighted?"square highlighted":"square",onClick:e.onClick,disabled:!e.isEditableSquare,children:e.value})};c(35);var h=function(e){function t(t){var c=e.squares[t],s=c.value,i=c.isHighlighted;return Object(n.jsx)(d,{value:s,isHighlighted:i,isEditableSquare:e.isEditableBoard,onClick:function(){return e.onClick(t)}},t)}function c(e,c){for(var n=[],s=e;s<c;++s)n.push(t(s));return n}return Object(n.jsx)("div",{children:function(){for(var e=[],t=0;t<9;t+=3){var s=c(t,t+3);e.push(Object(n.jsx)("div",{className:"board-row",children:s}))}return e}()})},O=(c(36),c(10)),x=c(11);c(42);var m=function(e){return Object(n.jsxs)("button",{onClick:function(){return e.toggleOrder()},children:[Object(n.jsx)(O.a,{className:e.isAscending?"selected":"unselected",icon:x.c}),Object(n.jsx)(O.a,{className:e.isAscending?"unselected":"selected",icon:x.d})]})};var g=function(e){var t=e.historyInfo,c=t.sortedMoves,s=t.isAscendingHistory,i=t.isHistoryBarOpen,r=t.stepNumber,a=i?"history-bar open":"history-bar",l=i?x.b:x.a,o=c.map((function(t){var c=function(e){var t=e.num,c=e.col,s=e.row;return t?Object(n.jsxs)("label",{children:["Move #",t,Object(n.jsxs)("label",{className:"secondary",children:["row ",s,", column ",c]})]}):Object(n.jsx)("label",{children:"GAME START"})}(t),s=t.num;return Object(n.jsx)("li",{className:r===s?"history-move selected-move":"history-move",children:Object(n.jsx)("button",{onClick:function(){return e.jumpTo(s)},children:c})},s)}));return Object(n.jsxs)("div",{className:a,children:[Object(n.jsxs)("label",{className:"history-bar-toggle",children:[Object(n.jsx)(O.a,{className:"toggle-icon",icon:l}),Object(n.jsx)("span",{children:"H"}),Object(n.jsx)("span",{children:"I"}),Object(n.jsx)("span",{children:"S"}),Object(n.jsx)("span",{children:"T"}),Object(n.jsx)("span",{children:"O"}),Object(n.jsx)("span",{children:"R"}),Object(n.jsx)("span",{children:"Y"}),Object(n.jsx)(O.a,{className:"toggle-icon",icon:l}),Object(n.jsx)("input",{id:"collapsible",name:"isChecked",type:"checkbox",checked:i,onChange:e.toggleSidebar})]}),Object(n.jsx)("div",{className:"history-bar-content",children:Object(n.jsxs)("div",{className:"history-container",children:[Object(n.jsx)(m,{isAscending:s,toggleOrder:e.toggleOrder}),Object(n.jsx)("ol",{className:"history",children:o})]})})]})};var v=function(e){var t;return t=e.nextPlayer?Object(n.jsxs)("h2",{children:["Next player is  ",Object(n.jsx)("span",{children:e.nextPlayer})]}):e.winner?Object(n.jsxs)("h2",{className:"status",children:["The winner is ",Object(n.jsx)("span",{children:e.winner})]}):Object(n.jsx)("h2",{className:"status",children:"The result is a tie :("}),Object(n.jsxs)("section",{className:"game",children:[Object(n.jsx)("div",{className:"game-status",children:t}),Object(n.jsxs)("div",{className:"game-panel",children:[Object(n.jsx)("div",{className:"game-board",children:Object(n.jsx)(h,{squares:e.squares,isEditableBoard:e.isEditableBoard,onClick:e.onClick})}),Object(n.jsx)(g,{toggleSidebar:e.toggleSidebar,toggleOrder:e.toggleOrder,historyInfo:e.historyInfo,jumpTo:e.jumpTo})]})]})};var f=function(){var e=Object(s.useState)([{squares:Array.from({length:9},(function(){return Object.assign({value:null,isHighlighted:!1})})),squarePosition:-1}]),t=Object(u.a)(e,2),c=t[0],i=t[1],r=Object(s.useState)(!0),a=Object(u.a)(r,2),l=a[0],d=a[1],h=Object(s.useState)(0),O=Object(u.a)(h,2),x=O[0],m=O[1],g=Object(s.useState)(!0),f=Object(u.a)(g,2),p=f[0],N=f[1],y=Object(s.useState)(!0),k=Object(u.a)(y,2),T=k[0],q=k[1],w=Object(s.useState)(!0),C=Object(u.a)(w,2),S=C[0],A=C[1],H=c[x],E=b(H.squares),I=function(e){return e.map((function(e,t){var c=-1,n=-1;if(t){var s=e.squarePosition;c=Math.floor(s/3),n=s%3}return{num:t,row:c,col:n}}))}(c),B=p?I:I.reverse(),P=E?function(e,t){var c=0;return e.map((function(e,n){return c<t.length&&n==t[c]?(++c,Object(o.a)(Object(o.a)({},e),{},{isHighlighted:!0})):e}))}(H.squares,E.positions):H.squares;return Object(n.jsx)(v,{squares:P,nextPlayer:function(e){return e||9===x?null:l?"X":"O"}(E),winner:E?E.value:void 0,toggleOrder:function(){N((function(e){return!e}))},onClick:function(e){var t=c.slice(0,x+1),n=t[t.length-1],s=Object(j.a)(n.squares);b(s)||s[e].value||(s[e]=Object(o.a)(Object(o.a)({},s[e]),{},{value:l?"X":"O"}),i((function(t){return t.concat([{squares:s,squarePosition:e}])})),m(t.length),d((function(e){return!e})))},isEditableBoard:S,toggleSidebar:function(e){q((function(e){return!e}))},historyInfo:{sortedMoves:B,isAscendingHistory:p,isHistoryBarOpen:T,stepNumber:x},jumpTo:function(e){A(e===c.length-1),m(e),d(e%2===0)}})};c(43);var p=function(){return Object(n.jsxs)("section",{id:"home",children:[Object(n.jsx)(a.b,{to:"/tictactoe/game",children:"Play"}),Object(n.jsxs)("article",{children:[Object(n.jsx)("h3",{children:"Rules"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"The game is played on a grid that's 3 squares by 3 squares."}),Object(n.jsx)("li",{children:"You are X, your friend (or the computer in this case) is O."}),Object(n.jsx)("li",{children:"The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner."}),Object(n.jsx)("li",{children:"When all 9 squares are full, the game is over."})]})]})]})},N=function(){return Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/tictactoe",component:p}),Object(n.jsx)(l.a,{path:"/tictactoe/game",component:f})]})},y=(c(46),/\/tictactoe\/?$/);var k=function(){var e=Object(l.f)(),t=y.test(e.pathname);return Object(n.jsx)("header",{className:t?"expanded":null,children:Object(n.jsxs)("h1",{children:[Object(n.jsxs)("span",{children:["Welcome",Object(n.jsx)("span",{children:"to"})]}),"TIC TAC TOE"]})})},T=(c(47),c(22));var q=function(){return Object(n.jsxs)("footer",{children:[Object(n.jsxs)("div",{className:"links",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h3",{children:"TIC TAC TOE"}),Object(n.jsx)("p",{children:"Interactive game developed with React."}),Object(n.jsx)("a",{className:"link",href:"https://github.com/mery25/react-tictactoe",children:"View source code"})]}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h4",{children:"Quick links"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/maria-t-43563946",children:Object(n.jsx)(O.a,{icon:T.b,className:"link"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/mery25",children:Object(n.jsx)(O.a,{icon:T.a,className:"link"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"mailto:maria.ta.89@gmail.com?Subject=Contact%20from%20TicTacToe%20App",children:Object(n.jsx)(O.a,{icon:x.e,className:"link"})})})]})]})]}),Object(n.jsxs)("div",{className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," Maria Tibau Aynes. All rights reserved."]})]})};c(48),c(49);var w=function(e){var t=e.active,c=e.toggle;return Object(n.jsxs)("label",{id:"toggle",className:t?"checked":null,children:[Object(n.jsx)("span",{}),Object(n.jsx)("input",{type:"checkbox",checked:t,id:"toggle--input",onChange:function(){return c()}})]})};var C=function(){var e=Object(s.useState)(!0),t=Object(u.a)(e,2),c=t[0],i=t[1];return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)(w,{active:!c,toggle:function(){return i((function(e){return!e}))}}),Object(n.jsxs)("nav",{className:c?"collapsed":null,children:[Object(n.jsx)(a.c,{className:"navbar-link",exact:!0,to:"/tictactoe",children:"Home"}),Object(n.jsx)(a.c,{className:"navbar-link",to:"/tictactoe/game",children:"Game"}),Object(n.jsx)(a.c,{className:"navbar-link",to:"/tictactoe/ranking",children:"Ranking"})]})]})};c(50);var S=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{}),Object(n.jsx)(k,{}),Object(n.jsx)("main",{children:Object(n.jsx)(N,{})}),Object(n.jsx)(q,{})]})};r.a.render(Object(n.jsx)(a.a,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f1fe5a03.chunk.js.map