(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(27),r=a.n(n),l=(a(37),a(10)),i=a(3),o=a(8),j=a(11),h=a(12),b=a.n(h);a(57);var d=a(31),m=a(2),u=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({}),r=Object(o.a)(n,2),i=r[0],h=r[1],u=Object(c.useState)({firstName:"",lastName:"",title:"",age:"",dateOfBirth:"",image:"",countryCode:"+234",phoneNumber:""}),O=Object(o.a)(u,2),p=O[0],x=O[1],N=function(e){x(e.target.value)};return Object(m.jsx)("main",{children:Object(m.jsx)("section",{className:"container",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(function(e){var t={};return e.firstName?e.firstName>15&&(t.firstName="First name is too long"):t.firstName="First name is required",e.lastName?e.lastName>15&&(t.lastName="First name is too long"):t.lastName="First name is required",e.age?e.age>3?t.age="Invalid age":e.age.includes("")&&(t.age="Age is a number not a combination of letters"):t.age="Age is required",e.phoneNumber?e.phoneNumber>11||e.phoneNumber<10?t.phoneNumber="Invalid phone number":e.phoneNumber.includes("")&&(t.phoneNumber="Phon number is a number not a combination of letters"):t.phoneNumber="Phone Numberis required",t}(p)),s(!0),b.a.post("http://localhost:7000/app/create",p.firstName,p.lastName,p.title,p.age,p.dateOfBirth,p.image,p.countryCode,p.phoneNumber).then((function(e){console.log("Birthday added"),window.location.replace("/"),s(!1)})).catch((function(e){alert("Omo ment dey this code head: ".concat(e)),s(!1)}))},children:[Object(m.jsx)(l.b,{to:"/",className:"arrow",children:Object(m.jsx)(j.a,{})})," ",Object(m.jsx)("h2",{children:"Add birthday"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{children:Object(m.jsx)("h3",{className:"input name",children:"First Name"})}),Object(m.jsx)("input",{type:"text",placeholder:"Enter first name here",onChange:N,className:"showError",value:p.firstName}),i.firstName&&Object(m.jsx)("p",{className:"help is-danger",style:{color:"red"},children:i.firstName}),Object(m.jsx)("label",{children:Object(m.jsx)("h3",{className:"input name",children:"Last Name"})}),Object(m.jsx)("input",{type:"text",placeholder:"Enter last name here",onChange:N,className:"showError",value:p.lastName}),i.lastName&&Object(m.jsx)("p",{className:"help is-danger",style:{color:"red"},children:i.lastName}),Object(m.jsx)("label",{children:Object(m.jsx)("h3",{className:"input title",children:"Title"})}),Object(m.jsxs)("select",{value:p.title,onChange:N,children:[Object(m.jsx)("option",{value:"Mr",children:"Mr"}),Object(m.jsx)("option",{value:"Mrs",children:"Mrs"}),Object(m.jsx)("option",{value:"Miss",children:"Miss"}),Object(m.jsx)("option",{value:"Bro",children:"Bro"}),Object(m.jsx)("option",{value:"Sis",children:"Sis"})]}),Object(m.jsx)("label",{children:Object(m.jsx)("h3",{className:"input age",children:"Age"})}),Object(m.jsx)("input",{type:"text",placeholder:"Enter age here",onChange:N,className:"showError",value:p.age}),i.age&&Object(m.jsx)("p",{className:"help is-danger",style:{color:"red"},children:i.age}),Object(m.jsx)("label",{children:Object(m.jsx)("h3",{className:"input dateOfBirth",children:"Date of birth"})}),Object(m.jsx)("input",{type:"date",value:p.dateOfBirth,onChange:N,className:"showError"}),Object(m.jsx)("label",{children:Object(m.jsx)("h3",{className:"input phoneNumber",children:"Phone number"})}),Object(m.jsx)(d.a,{className:"phone showError correct",type:"text",placeholder:"Enter your whatsapp phone number here",onChange:N,value:x}),i.phoneNumber&&Object(m.jsx)("p",{className:"help is-danger",style:{color:"red"},children:i.phoneNumber}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{children:Object(m.jsx)("h3",{className:"input image",children:"Image"})}),Object(m.jsx)("input",{type:"text",placeholder:"Enter the link to your image file",onChange:N,className:"showError"}),j.b,i.image&&Object(m.jsx)("p",{className:"help is-danger",style:{color:"red"},children:i.image}),!a&&Object(m.jsx)("button",{children:"Add Birthday"}),a&&Object(m.jsx)("button",{disabled:!0,children:"Adding birthday..."})]})})})},O=function(e){var t=e.people;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){var t=e.id,a=e.firstName,c=e.lastName,s=e.title,n=e.age,r=e.image,l=e.monthOfBirth,i=e.tateOfBirth,o=new Date,j=o.getMonth(),h=o.getDate();return console.log(j,h),l===j&&i===h&&console.log("True"),Object(m.jsxs)("article",{className:"person",children:[Object(m.jsx)("img",{src:r,alt:a+""+c}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h4",{children:[s,"  ",a," ",c]}),Object(m.jsxs)("p",{children:[n," years old"]})]})]},t)}))})};var p=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],h=r[1],d=Object(c.useState)([]),u=Object(o.a)(d,2),p=u[0],x=u[1];return Object(c.useEffect)((function(){b.a.get("http://localhost:7000/app/data").then((function(e){x(e.data),s(!1)})).catch((function(e){console.log(e),h(!0)}))}),[]),Object(m.jsx)("main",{children:Object(m.jsxs)("section",{className:"container eddy",children:[Object(m.jsxs)("h3",{children:[p.length," Birthdays today",Object(m.jsxs)("p",{className:"plus",children:[Object(m.jsx)(j.c,{})," ",Object(m.jsxs)("p",{className:"under",children:[" ",Object(m.jsx)(l.b,{to:"/create",className:"under",children:" Add birthday"})]})]})," "]}),Object(m.jsx)(O,{people:p}),a&&Object(m.jsx)("div",{children:"Loading..."}),i&&Object(m.jsx)("div",{children:i})]})})};var x=function(){return Object(m.jsx)(l.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",children:Object(m.jsx)(p,{})}),Object(m.jsx)(i.a,{path:"/create",children:Object(m.jsx)(u,{})})]})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.9080d193.chunk.js.map