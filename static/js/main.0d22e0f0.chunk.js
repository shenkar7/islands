(this.webpackJsonpislands=this.webpackJsonpislands||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),i=n.n(c),l=(n(12),n(13),n(14),n(0)),s=function(){return Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)("span",{className:"attenti",children:[Object(l.jsx)("span",{className:"attenti-first-letter",children:"a"}),"ttenti"]}),"exercise"]})},u=n(2),o=(n(16),n(17),n(18),function(e){return Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("button",{onClick:e.onClick,children:e.children})})}),j=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),j=s[0],f=s[1],d=function(t){if(function(e){if(null==e)return!1;if(!e.includes(", ")&&!/^[0-9, ]*$/.test(e))return!1;var t=e.split(", ");if(2!==t.length)return!1;if(!/^[0-9]*$/.test(t[0])||!/^[0-9]*$/.test(t[1]))return!1;var n=[parseInt(t[0]),parseInt(t[1])],r=n[0],a=n[1];return!(r<1||r>1e3||a<1||a>1e3)}(a)){var n=a.split(", "),r=parseInt(n[0]),c=parseInt(n[1]);e.buttonClickHandler(r,c,t)}else f(!0)},b=Object(l.jsx)("p",{children:"Please enter bitmap size:"});return j&&(b=Object(l.jsx)("p",{className:"error",children:'* Input has to be in "n, m" format. n and m between 1 to 1,000.'})),Object(l.jsxs)("div",{children:[b,Object(l.jsx)("input",{type:"text",placeholder:"Bitmap size: n, m",value:a,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)(o,{onClick:function(){return d("randomize")},children:"RANDOMIZE"}),Object(l.jsx)(o,{onClick:function(){return d("draw")},children:"BONUS: DRAW"})]})},f=n(4),d=function(e){var t=e.length,n=e[0].length,r=Math.max(n,t),a=15;return r>100?a=4:r>70?a=7:r>50&&(a=10),[n,t,a,t*a+t+1,n*a+n+1]},b=function(e,t){return t in e||(e[t]=[Math.floor(150*Math.random())+50,Math.floor(150*Math.random())+50,Math.floor(150*Math.random())+50]),e[t]},h=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],i=d(e.matrix).slice(-3),s=Object(u.a)(i,3),o=s[0],j=s[1],f=s[2],h=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=h.current,n=t.getContext("2d");e.cellClickHandler&&!a&&(c(!0),t.addEventListener("click",(function(n){var r=t.getBoundingClientRect(),a=function(e,t,n){return[Math.floor((Math.round(t)-1)/(n+1)),Math.floor((Math.round(e)-1)/(n+1))]}(n.clientX-r.left,n.clientY-r.top,o),c=Object(u.a)(a,2),i=c[0],l=c[1];e.cellClickHandler(i,l)}))),function(e,t){var n=d(t),r=Object(u.a)(n,5),a=r[0],c=r[1],i=r[2],l=r[3],s=r[4];e.fillStyle="#a7a7a7",e.fillRect(0,0,l,s);for(var o=1,j=1,f={},h=0;h<c;h++){for(var O=0;O<a;O++){var m=t[h][O];if(!0===m)e.fillStyle="gray",e.fillRect(o,j,i,i);else if(!1===m)e.fillStyle="white",e.fillRect(o,j,i,i);else{var v=b(f,m),p=Object(u.a)(v,3),x=p[0],g=p[1],k=p[2];e.fillStyle="rgb(".concat(x,", ").concat(g,", ").concat(k,")"),e.fillRect(o,j,i,i)}o+=i+1}j+=i+1,o=1}}(n,e.matrix)}),[o,e,a]),Object(l.jsx)("canvas",{ref:h,width:j,height:f})},O=function(e,t,n){if(e<1||t<1)return null;for(var r=[],a=0;a<e;a++){for(var c=[],i=0;i<t;i++)n?c.push(!1):c.push(Math.random()<.5);r.push(c)}return r},m=function(e,t,n,r){var a=[];for(n[e][t]=-1,a.push([e,t]);0!==a.length;){var c=a.shift(),i=c[0],l=c[1];n[i][l]=r;for(var s=-1;s<=1;s++)for(var u=-1;u<=1;u++){var o=i+s>=0&&i+s<n.length,j=l+u>=0&&l+u<n[0].length;o&&j&&!0===n[i+s][l+u]&&(n[i+s][l+u]=-1,a.push([i+s,l+u]))}}},v=function(e){var t=Object(r.useState)(null),n=Object(u.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(!1),j=Object(u.a)(s,2),d=j[0],b=j[1];Object(r.useEffect)((function(){"randomize"===e.type&&i(O(e.n,e.m,!1)),"draw"===e.type&&i(O(e.n,e.m,!0))}),[e.n,e.m,e.type]);var v,p;"draw"===e.type&&(v=function(e,t){i((function(n){var r=Object(f.a)(n),a=Object(f.a)(r[e]);return a[t]=!a[t],r[e]=a,r}))});var x=Object(l.jsx)(o,{onClick:function(){var e=function(e){for(var t=0,n=[],r=0;r<e.length;r++)n[r]=Object(f.a)(e[r]);for(var a=0;a<n.length;a++)for(var c=0;c<n[0].length;c++)!0===n[a][c]&&(t++,m(a,c,n,t));return{islandsNum:t,matrix:n}}(c);b(e.islandsNum),i(e.matrix)},children:"SOLVE"});return!1!==d&&(x=Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsxs)("p",{children:["Found ",d," Islands!"]}),Object(l.jsx)(o,{onClick:e.restartClickHandler,children:"RESTART"})]})),c&&(p=Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(h,{matrix:c,cellClickHandler:v}),x]})),Object(l.jsx)("div",{children:p})},p=function(){var e,t=Object(r.useState)("menu"),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(),s=Object(u.a)(i,2),o=s[0],f=s[1],d=Object(r.useState)(),b=Object(u.a)(d,2),h=b[0],O=b[1];switch(a){case"menu":e=Object(l.jsx)(j,{buttonClickHandler:function(e,t,n){f(e),O(t),c(n)}});break;case"randomize":e=Object(l.jsx)(v,{n:o,m:h,type:"randomize",restartClickHandler:function(){return c("menu")}});break;case"draw":e=Object(l.jsx)(v,{n:o,m:h,type:"draw",restartClickHandler:function(){return c("menu")}});break;default:console.log("No page case was detected")}return Object(l.jsx)("div",{className:"main",children:e})};var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"name-and-date",children:"26/07/21 - Yariv Shenkar"}),Object(l.jsx)(s,{}),Object(l.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),g()}],[[19,1,2]]]);
//# sourceMappingURL=main.0d22e0f0.chunk.js.map