(function(t){function a(a){for(var s,r,i=a[0],c=a[1],u=a[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(a);while(m.length)m.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(s=!1)}s&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},o=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var u=0;u<i.length;u++)a(i[u]);var l=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),n=e.n(s);n.a},1308:function(t,a,e){},3591:function(t,a,e){"use strict";var s=e("3a78"),n=e.n(s);n.a},"3a78":function(t,a,e){},"3f28":function(t,a,e){t.exports=e.p+"img/Escurinha-fisio.5db93929.jpeg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Toolbar"),e("main",[e("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut",mode:"out-in"}},[e("router-view")],1)],1),e("Footer")],1)},o=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-navbar",{attrs:{id:"nav",toggleable:"lg"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"},scopedSlots:t._u([{key:"default",fn:function(t){t.expanded;return[e("b-icon",{attrs:{icon:"three-dots-vertical"}})]}}])}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{attrs:{id:"botao"}},[e("b-button",{staticClass:"my-2 my-sm-0 ml-2",attrs:{size:"sm"}},[e("router-link",{attrs:{to:"/"}},[t._v(" Início ")])],1),e("b-button",{staticClass:"my-2 my-sm-0 ml-2",attrs:{size:"sm"}},[e("router-link",{attrs:{to:"/sobre"}},[t._v(" Sobre ")])],1),e("b-button",{staticClass:"my-2 my-sm-0 ml-2",attrs:{size:"sm"}},[e("router-link",{attrs:{to:"/cursos"}},[t._v(" Cursos ")])],1),e("b-button",{staticClass:"my-2 my-sm-0 ml-2",attrs:{size:"sm"}},[e("a",{attrs:{href:"https://www.youtube.com/channel/UCqd6-sIiqEy615sfD974_9g",target:"new"}},[t._v("Youtube")])]),e("b-button",{staticClass:"my-2 my-sm-0 ml-2",attrs:{size:"sm"}},[e("router-link",{attrs:{to:"/contatos"}},[t._v(" Contatos ")])],1)],1)],1)],1)],1)},i=[],c={data:function(){return{}}},u=c,l=(e("60f8"),e("2877")),d=Object(l["a"])(u,r,i,!1,null,null,null),m=d.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[t._v(" ©"+t._s(t.footer)+" "),e("br"),t._v(" "+t._s(t.footer2)+" "),e("div",{staticClass:"foot"},[t._v(" "+t._s(t.msg)+" "),e("a",{staticClass:"btn btn-info btn-sm",attrs:{href:t.link}},[t._v("Jovane")])])])},p=[],b={data:function(){return{footer:"2020 - Clara Azevedo",footer2:"Fisioterapeuta",msg:"Site criado e desenvolvido por ",link:'"https://jcgsr.github.io/",'}}},v=b,_=(e("760c"),Object(l["a"])(v,f,p,!1,null,null,null)),h=_.exports,g={name:"App",components:{Toolbar:m,Footer:h},data:function(){return{}}},C=g,E=(e("034f"),Object(l["a"])(C,n,o,!1,null,null,null)),O=E.exports,y=e("5f5b"),x=e("b1e0"),w=e("8c4f"),k=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"container"}},[s("img",{attrs:{src:e("6d58")}}),s("div",{staticClass:"fotos-menu"},[s("div",{staticClass:"links mt-5"},[s("router-link",{attrs:{to:"/sobre"}},[s("img",{attrs:{src:e("a6bc")}})]),s("div",{staticClass:"top-right mb-3"},[t._v("Como funciona a acupuntura?")])],1),s("div",{staticClass:"links"},[s("router-link",{attrs:{to:"/sobre"}},[s("img",{attrs:{src:e("ff96")}})]),s("div",{staticClass:"top-right mb-3"},[t._v("Por que devo fazer pilates?")])],1),s("div",{staticClass:"links"},[s("router-link",{attrs:{to:"/sobre"}},[s("img",{attrs:{src:e("3f28")}})]),s("div",{staticClass:"top-right mb-3"},[t._v("Quando devo procurar um fisio?")])],1)])])},A=[],j={name:"Home",data:function(){return{}}},I=j,R=(e("8b71"),Object(l["a"])(I,k,A,!1,null,null,null)),P=R.exports,S=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"sobre"}},[s("h3",{staticClass:"mt-2"},[t._v("Quem é Clara Azevedo?")]),s("img",{staticClass:"mt-4",attrs:{src:e("851b")}}),s("div",{staticClass:"texto mt-4 animate__animated animate__backInUp"},[t._v(" Sou Fisioterapeuta, especialista com formação internacional no método Pilates e acupunturista. Visualizo a minha profissão como missão, ajudar ao próximo é o meu propósito de vida e com muito estudo, dedicação e afeto cuido de cada vida que me é confiada! ")]),s("div",{staticClass:"services"},[s("b-card",{staticClass:"mt-5 animate__animated animate__bounceInLeft card shadow p-3 bg-blue rounded-circle",attrs:{title:"POR QUE DEVO FAZER PILATES?",id:"pilates",rounded:""}},[s("b-card-text",{staticClass:"card-text"},[t._v(" Porque trabalha o corpo de forma global, traz conexão entre corpo - mente - espírito, possibilita FORTALECIMENTO dos músculos, FLEXIBILIDADE E MOBILIDADE das articulações, proporcionando assim uma perfeita CONSCIÊNCIA E CONTROLE dos movimentos. ")])],1),s("b-card",{staticClass:"mt-5 animate__animated animate__bounceInUp card shadow p-3 bg-blue rounded",attrs:{title:"COMO FUNCIONA A ACUPUNTURA?",id:"acupuntura"}},[s("b-card-text",{staticClass:"card-text"},[t._v(" É uma técnica milenar Chinesa, que tem como objetivo EQUILIBRAR AS ENERGIAS do indivíduo. Através das agulhas, pontos específicos são estimulados a fim de TRATAR E PREVENIR DOENÇAS, promovendo saúde e bem estar completo. ")])],1),s("b-card",{staticClass:"mt-5 animate__animated animate__bounceInRight card shadow p-3 bg-blue rounded-circle",attrs:{title:"QUANDO DEVO PROCURAR UM FISIOTERAPEUTA?",id:"fisio"}},[s("b-card-text",{staticClass:"card-text"},[t._v(" Se você tem qualquer tipo de lesão, sente dor ou até mesmo pretende prevenir o adoecimento, então este é o momento para me procurar! Reabilitar e prevenir as alterações cinético-funcionais são os meus objetivos. Utilizo de técnicas como Liberação miofascial, Ventosaterapia, Dry Needling e Acupuntura de forma inteligente e segura para lhe devolver alívio e bem-estar. ")])],1)],1)])},T=[],U=(e("ba09"),{}),z=Object(l["a"])(U,S,T,!1,null,null,null),F=z.exports,N=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"cursos"}},[s("h1",{staticClass:"mt-2"},[t._v("Cursos")]),s("img",{attrs:{src:e("c58d"),alt:"Foto de Clara Azevedo"}})])}],$=(e("3591"),{}),q=Object(l["a"])($,N,D,!1,null,null,null),L=q.exports,M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"contatos"}},[e("h1",{staticClass:"mt-2 mb-8"},[t._v("Contatos")]),e("div",{staticClass:"contato"},[t._m(0),e("a",{staticClass:"animate__animated animate__tada",attrs:{href:t.linkWhatsapp}},[e("i",{staticClass:"fab fa-whatsapp"})]),e("a",{staticClass:"animate__animated animate__tada",attrs:{href:t.linkFB}},[e("i",{staticClass:"fab fa-facebook-f"})]),e("a",{staticClass:"animate__animated animate__tada",attrs:{href:t.linkInsta}},[e("i",{staticClass:"fab fa-instagram"})])])])},B=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"animate__animated animate__tada",attrs:{target:"new",href:"mailto:pilatescomclara@gmail.com"}},[e("i",{staticClass:"far fa-envelope"})])}],Q={data:function(){return{linkWhatsapp:"https://api.whatsapp.com/send?phone=5579999652202&text=",linkFB:"https://www.facebook.com/clara.azevedo.52687506",linkInsta:"https://www.instagram.com/pilatescomclara/"}}},V=Q,J=(e("ddd0"),Object(l["a"])(V,M,B,!1,null,null,null)),W=J.exports;s["default"].use(w["a"]);var G=new w["a"]({mode:"history",linkExactActiveClass:"link-active",routes:[{path:"/",name:"home",component:P},{path:"/sobre",name:"sobre",component:F},{path:"/cursos",name:"cursos",component:L},{path:"/contatos",name:"contatos",component:W}]}),H=(e("1157"),e("4989"),e("f9e3"),e("2dd8"),e("4d5c"),e("f13c"));s["default"].use(H),s["default"].use(y["a"]),s["default"].use(x["a"]),s["default"].config.productionTip=!1,new s["default"]({router:G,render:function(t){return t(O)}}).$mount("#app")},"5d11":function(t,a,e){},"60f8":function(t,a,e){"use strict";var s=e("1308"),n=e.n(s);n.a},"6d58":function(t,a,e){t.exports=e.p+"img/Escurinha-topo.433842a9.png"},"760c":function(t,a,e){"use strict";var s=e("c3f5"),n=e.n(s);n.a},8429:function(t,a,e){},"851b":function(t,a,e){t.exports=e.p+"img/Escurinha-quem.4682c40f.jpeg"},"85ec":function(t,a,e){},"88d7":function(t,a,e){},"8b71":function(t,a,e){"use strict";var s=e("88d7"),n=e.n(s);n.a},a6bc:function(t,a,e){t.exports=e.p+"img/Escurinha-acupuntura.88395c85.jpeg"},ba09:function(t,a,e){"use strict";var s=e("8429"),n=e.n(s);n.a},c3f5:function(t,a,e){},c58d:function(t,a,e){t.exports=e.p+"img/Escurinha-cursos.432bfb4b.jpeg"},ddd0:function(t,a,e){"use strict";var s=e("5d11"),n=e.n(s);n.a},ff96:function(t,a,e){t.exports=e.p+"img/Escurinha-pilates.e0a50275.jpeg"}});
//# sourceMappingURL=app.4831afcb.js.map