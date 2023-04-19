"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{9200:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(9439),r=n(2791),s=n(5984),c="Form_formStyle__4EIvI",i="Form_title__5gZHF",l="Form_text__c5Sr+",o="Form_labelStyle__mSYFx",u="Form_inputStyle__816Wz",d=n(9434),m=n(8893),h=n(5264),x=n(6916),_=function(e){return e.contacts.filter},f=function(e){return e.contacts.items},p=function(e){return e.contacts.isLoading},j=function(e){return e.contacts.error},v=(0,x.P1)([_,f],(function(e,t){return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),b=n(6915),N=n(1686),y=n(184),C=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],x=t[1],_=(0,r.useState)(""),p=(0,a.Z)(_,2),j=p[0],v=p[1],C=(0,d.I0)(),g=(0,d.v9)(f);console.log(g);var F=(0,s.x0)(),k=(0,s.x0)(),Z=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":x(a);break;case"number":v(a);break;default:return}};return(0,y.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var t={id:(0,s.x0)(),name:n,number:j};g.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?h.Notify.failure("".concat(n," is already in contacts !")):(C((0,m.uK)(t)),x(""),v(""))},children:[(0,y.jsx)("h2",{className:i,children:"Phonebook"}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:F,className:o,children:(0,y.jsx)("p",{className:l,children:"Name"})}),(0,y.jsx)("input",{className:u,id:F,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:Z})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:k,className:o,children:(0,y.jsx)("p",{className:l,children:"Number"})}),(0,y.jsx)("input",{className:u,id:k,type:"tel",value:j,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:Z})]}),(0,y.jsx)(b.Z,{type:"submit",width:"1000px","background-color":"rgb(87, 160, 180)",variant:"contained",endIcon:(0,y.jsx)(N.Z,{}),children:"Add contact"})]})},g="FilterByName_formStyle__zgsoM",F="FilterByName_text__kru11",k="FilterByName_inputStyle__GuGRO",Z=n(7904),z=function(){var e=(0,d.I0)(),t=(0,d.v9)(_);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("label",{className:g,children:[(0,y.jsx)("p",{className:F,children:"Find contacts by name"}),(0,y.jsx)("input",{className:k,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(t){return n=t.target.value,void e((0,Z.lY)(n));var n}})]})})},L="ContactsList_contactsList__ZQI1L",w="ContactsList_titleli__O2jUM",A="ContactsList_listItem__KzRCz",S="ContactsList_formStyle__E3kCa",I=n(7247);function B(){var e=(0,d.I0)(),t=(0,d.v9)(p),n=(0,d.v9)(j),a=(0,d.v9)(v);console.log(a),(0,r.useEffect)((function(){e((0,m.yF)())}),[e]);return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)("p",{children:"Loading..."}),n&&(0,y.jsx)("h2",{children:"ERROR"}),!t&&!n&&(0,y.jsx)("div",{className:S,children:(0,y.jsx)("ul",{className:L,children:null===a||void 0===a?void 0:a.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,y.jsxs)("li",{className:A,children:[(0,y.jsxs)("p",{className:w,children:[a,": ",r]}),(0,y.jsx)(b.Z,{onClick:function(){return function(t){e((0,m.GK)(t))}(n)},variant:"contained",startIcon:(0,y.jsx)(I.Z,{}),children:"Delete"})]},n)}))})})]})}function R(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(C,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(z,{}),(0,y.jsx)(B,{})]})}}}]);
//# sourceMappingURL=200.51a8847f.chunk.js.map