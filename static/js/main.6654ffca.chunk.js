(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={hwWrap:"h5_hwWrap__xwes_",header:"h5_header__2hFuX",headerClosed:"h5_headerClosed__dvXfo",navbar:"h5_navbar__3aJFj",navLink:"h5_navLink__1pyK0",activeNav:"h5_activeNav__19jWT",arrow:"h5_arrow__UgPiU",arrowClosed:"h5_arrowClosed__3BCyF",arrowImg:"h5_arrowImg__1uc8C"}},,,,,function(e,a,t){e.exports={message:"Message_message__3lUeL",img:"Message_img__3Qw8x",body:"Message_body__17yCu",triangle:"Message_triangle__1YFrx",title:"Message_title__2A8nk",descr:"Message_descr__PzqvB",text:"Message_text__3jD6a",time:"Message_time__2ZjG2"}},function(e,a,t){e.exports={errorWrap:"pages_errorWrap__1IP_q",errorImg:"pages_errorImg__3n0pX",errorNumber:"pages_errorNumber__2YmF0",ErrorPageNotFound:"pages_ErrorPageNotFound__3drKG",errorHome:"pages_errorHome__g7Fnn",errorLink:"pages_errorLink__2sMVj"}},function(e,a,t){e.exports={wrapper:"Affairs_wrapper__1Nl_m",affair:"Affairs_affair__1eqiT",affairWrap:"Affairs_affairWrap__2IKAo",btnWrap:"Affairs_btnWrap__1GO4Y"}},function(e,a,t){e.exports={inputWrap:"SuperInputText_inputWrap__2Eeyg",inputStyle:"SuperInputText_inputStyle__3X4m9",superInput:"SuperInputText_superInput__31doC",errorInput:"SuperInputText_errorInput__2qHOs",error:"SuperInputText_error__2Re5E"}},,,,function(e,a,t){e.exports={wrapper:"Greeting_wrapper__3kOX7",someClass:"Greeting_someClass__7hKob",error:"Greeting_error__9OcUo",error_message:"Greeting_error_message__Nx8xZ",errorInputNew:"Greeting_errorInputNew__2HpN5"}},function(e,a,t){e.exports={labelWrap:"SuperCheckbox_labelWrap__2M4bE",checkbox:"SuperCheckbox_checkbox__MMStw",spanClassName:"SuperCheckbox_spanClassName__3e2RS"}},,function(e,a,t){e.exports={default:"SuperButton_default__sDs07",blick:"SuperButton_blick__1wUXq",red:"SuperButton_red__36IOY"}},,,,,,,function(e,a,t){e.exports={App:"App_App__3vy9V"}},function(e,a,t){e.exports={blue:"HW4_blue__3hYHN",column:"HW4_column__n3TJS"}},function(e,a,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__2o0H9"}},,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(35),t(25)),s=t.n(o),u=t(2),i=t(7),m=t(3),p=t.n(m),d=t(1),E=t(8),_=t.n(E);var h=function(e){return r.a.createElement("div",{className:_.a.message},r.a.createElement("img",{src:e.avatar,alt:"",className:_.a.img}),r.a.createElement("div",{className:_.a.body},r.a.createElement("div",{className:_.a.triangle}),r.a.createElement("div",{className:_.a.title},e.name),r.a.createElement("div",{className:_.a.descr},r.a.createElement("div",{className:_.a.text},e.message),r.a.createElement("div",{className:_.a.time},e.time))))},f="https://briefly.ru/static/authors/gogol.jpg?1479846041",v="\u041d\u0438\u043a\u043e\u043b\u0430\u0439",g="\u0421\u0430\u043d\u044f, npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",b="22:00",N="https://www.ikleiner.ru/pic/picture34.jpg",C="\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",k="\u041a\u043e\u043b\u0435\u043d\u044c\u043a\u0430, \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u043d\u0430\u0436\u0438\u043c\u0430\u043b",w="22:04";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h,{avatar:f,name:v,message:g,time:b}),r.a.createElement(h,{avatar:N,name:C,message:k,time:w}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(4),y=t(18),x=t.n(y),S=function(e){var a=e.red,t=e.className,n=Object(j.a)(e,["red","className"]),l="".concat(a?x.a.red:x.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},I=t(10),W=t.n(I);var P=function(e){return r.a.createElement("div",{className:W.a.affair},r.a.createElement("div",{className:W.a.affairWrap},e.affair._id,") ",e.affair.name," - ",e.affair.priority),r.a.createElement(S,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"x"}))};var F=function(e){var a=e.data.map((function(a){return r.a.createElement(P,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:W.a.wrapper},a,r.a.createElement("div",{className:W.a.btnWrap},r.a.createElement(S,{onClick:function(){e.setFilter("all")},children:"All"}),r.a.createElement(S,{onClick:function(){e.setFilter("high")},children:"High"}),r.a.createElement(S,{onClick:function(){e.setFilter("middle")},children:"Middle"}),r.a.createElement(S,{onClick:function(){e.setFilter("low")},children:"Low"})))},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(T),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),s=o[0],i=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(F,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(29),M=t(15),H=t.n(M),U=t(11),B=t.n(U),L=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(j.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(B.a.error," ").concat(s||""),m="".concat(o||""," ").concat(B.a.superInput," ").concat(c?B.a.errorInput:""," ");return r.a.createElement("div",{className:B.a.inputWrap},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l(e)},className:"".concat(B.a.inputStyle," ").concat(m)},u)),c&&r.a.createElement("label",{className:i},c))},G=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?H.a.errorInputNew:"";return r.a.createElement("div",{className:H.a.wrapper},r.a.createElement("h3",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f:"),r.a.createElement(L,{value:a,onChange:t,className:o,onKeyPress:function(e){"Enter"===e.key&&n()},error:l}),r.a.createElement(S,{onClick:n,className:H.a.btn},"add"),r.a.createElement("span",null,r.a.createElement("b",null,"\u041a\u043e\u043b-\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432: "),c))},K=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),p=m[0],d=m[1],E=a.length;return r.a.createElement(G,{name:o,setNameCallback:function(e){s(e.currentTarget.value),e.currentTarget.value&&d("")},addUser:function(){o?(t(o),alert("Hello  ".concat(o,"!"))):d("add name"),s("")},error:p,totalUsers:E})},X=t(43);var q=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K,{users:t,addUserCallback:function(e){var a={_id:Object(X.a)(),name:e};l([a].concat(Object(J.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},D=t(26),Y=t.n(D),R=t(16),z=t.n(R),V=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(j.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("div",{className:z.a.labelWrap},r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))," ")};var Z=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(u.a)(s,2),m=i[0],p=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("br",null),"homeworks 4",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:Y.a.column},r.a.createElement(L,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(S,{onClick:o},"delete "),r.a.createElement(V,{checked:m,onChangeChecked:p},"children text "),r.a.createElement(V,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Q=t(27),$=t.n(Q),ee=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(j.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],p=l||{},d=p.children,E=p.onDoubleClick,_=p.className,h=Object(j.a)(p,["children","onDoubleClick","className"]),f="".concat($.a.editableSpan," ").concat(_);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){e.target&&m(!1),a&&a(e)},onEnter:function(e){"Enter"===e.key&&m(!1),t&&t(e)}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:f},h),d||c.value))};function ae(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function te(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}ae("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ee,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(S,{onClick:function(){ae("editable-span-value",t)}},"save"),r.a.createElement(S,{onClick:function(){l(te("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var re=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(A,null),r.a.createElement(q,null),r.a.createElement(Z,null),r.a.createElement(ne,null))};function le(){return r.a.createElement("div",null,"JuniorPlus")}var ce=t(9),oe=t.n(ce);var se=function(){return r.a.createElement("div",{className:oe.a.errorWrap},r.a.createElement("div",{className:oe.a.errorImg},r.a.createElement("img",{src:"https://static.thenounproject.com/png/2157372-200.png",alt:"404"})),r.a.createElement("div",{className:oe.a.errorNumber},"404"),r.a.createElement("div",{className:oe.a.ErrorPageNotFound},"Page not found!"),r.a.createElement("button",{className:oe.a.errorHome},r.a.createElement(i.b,{to:"/PreJunior",className:oe.a.errorLink},"go home")))},ue=function(e){var a=e.options,t=e.value,n=(e.onChange,e.onChangeOption),l=Object(j.a)(e,["options","value","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e," ")})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n(e.currentTarget.value)},value:t},l),c)},ie=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(j.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)},me=["x","y","z"];var pe=function(){var e=Object(n.useState)(me[1]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ue,{options:me,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio",options:me,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Ee=function(){var e=Object(n.useState)(de),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},"some name, age")}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(S,{onClick:function(){return l(function(e,a){switch(a.type){case"sort":case"check":default:return e}}(de,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,"sort down"),"check 18",r.a.createElement("hr",null),r.a.createElement("hr",null))};function _e(){return r.a.createElement("div",null,r.a.createElement(pe,null),r.a.createElement(Ee,null))}var he="/PreJunior",fe="/Junior",ve="/JuniorPlus";var ge=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:he})}}),r.a.createElement(d.b,{path:he,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(d.b,{path:fe,render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(d.b,{path:ve,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(se,null)}})))};var be=function(e){var a="".concat(p.a.arrow,"  ").concat(!1===e.collapsed?"":p.a.arrowClosed),t="".concat(p.a.header," ").concat(!1===e.collapsed?"":p.a.headerClosed);return r.a.createElement("div",{className:t},r.a.createElement("div",{className:p.a.navbar},r.a.createElement(i.b,{to:he,className:p.a.navLink,activeClassName:p.a.activeNav},"PreJunior"),r.a.createElement(i.b,{to:fe,className:p.a.navLink,activeClassName:p.a.activeNav},"Junior"),r.a.createElement(i.b,{to:ve,className:p.a.navLink,activeClassName:p.a.activeNav},"JuniorPlus")),r.a.createElement("div",{className:a,onClick:function(){return e.showHeader()}},r.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/45/45736.png",alt:"arrow",className:p.a.arrowImg})))};var Ne=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:p.a.hwWrap},r.a.createElement(i.a,null,r.a.createElement(be,{showHeader:function(){l(!t)},collapsed:t}),r.a.createElement(ge,null)))};var Ce=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement(Ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.6654ffca.chunk.js.map