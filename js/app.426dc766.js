(()=>{"use strict";var e={44:(e,t,s)=>{var i=s(963),r=s(252),o=s(262),l=s(201);const a={class:"container"},n={__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("html",null,[(0,r._)("div",a,[(0,r.Wm)((0,o.SU)(l.MA))])]))}};var u=s(744);const c=(0,u.Z)(n,[["__scopeId","data-v-5f530410"]]),d=c,p=JSON.parse('[{"id":1,"img":"https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg","class":"this","backgroundImage":"https://images.unsplash.com/photo-1592288801240-7b18bb06e94f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8anVuZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60","name":"Dinosaurs","questions":[{"id":1,"text":"In what era was the Tyrannosaurus Rex discovered?","correctAnswer":"Cretaceous","options":[{"id":1,"label":"A","text":"Jurassic","isCorrect":false},{"id":2,"label":"B","text":"Cretaceous","isCorrect":true},{"id":3,"label":"C","text":"Triassic","isCorrect":false},{"id":4,"label":"D","text":"Cenozoic","isCorrect":false}]},{"id":2,"text":"A  bald, bi-pedal herbivore with a smoothe, extremely hard round head is known as?","correctAnswer":"Pachycephalosaurus","options":[{"id":1,"label":"A","text":"Triceratops","isCorrect":false},{"id":2,"label":"B","text":"Stegosaurus","isCorrect":false},{"id":3,"label":"C","text":"Pachycephalosaurus","isCorrect":true},{"id":4,"label":"D","text":"Chris","isCorrect":false}]},{"id":3,"text":"Modern day birds of prey such as (Falcons, Hawks and Eagles) derived from which dinosaur?","correctAnswer":"Velociraptor","options":[{"id":1,"label":"A","text":"Velociraptor","isCorrect":true},{"id":2,"label":"B","text":"Brontosaurus","isCorrect":false},{"id":3,"label":"C","text":"Apatosaurus","isCorrect":false},{"id":4,"label":"D","text":"Tenontosaurus","isCorrect":false}]}]},{"id":2,"img":"https://wp.thecollector.com/wp-content/uploads/2020/06/giulio-romano-olympian-gods-wall-painting-1.jpg","name":"Greek Mythology","questions":[{"id":1,"text":"This Greek god was known as \'The god of wine and pleasure\'","options":[{"id":1,"label":"A","text":"Aphrodite","isCorrect":false},{"id":2,"label":"B","text":"Apollo","isCorrect":false},{"id":3,"label":"C","text":"Hestia","isCorrect":false},{"id":4,"label":"D","text":"Dionysus","isCorrect":true}]},{"id":2,"text":"Nike was the greek goddess of what?","options":[{"id":1,"label":"A","text":"Speed","isCorrect":false},{"id":2,"label":"B","text":"Victory","isCorrect":true},{"id":3,"label":"C","text":"Strength","isCorrect":false},{"id":4,"label":"D","text":"Sleep","isCorrect":false}]},{"id":3,"text":"It is said that straws were drawn to decide who rules the underworld, who drew the shortest?","options":[{"id":1,"label":"A","text":"Poseidon","isCorrect":false},{"id":2,"label":"B","text":"Zeus","isCorrect":false},{"id":3,"label":"C","text":"Hades","isCorrect":true},{"id":4,"label":"D","text":"Apollo","isCorrect":false}]}]},{"id":3,"img":"https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80","name":"Space","questions":[{"id":1,"text":"Approximately how much does a full nasa space suit cost?","options":[{"id":1,"label":"A","text":"$12 Million","isCorrect":true},{"id":2,"label":"B","text":"$150,000","isCorrect":false},{"id":3,"label":"C","text":"$450,000","isCorrect":false},{"id":4,"label":"D","text":"$2 Million","isCorrect":false}]},{"id":2,"text":"There are more of these on Earth than stars in the Milky Way Galaxy","options":[{"id":1,"label":"A","text":"Humans","isCorrect":false},{"id":2,"label":"B","text":"Twinkies","isCorrect":false},{"id":3,"label":"C","text":"Shoes","isCorrect":false},{"id":4,"label":"D","text":"Trees","isCorrect":true}]},{"id":3,"text":"How long do black holes last?","options":[{"id":1,"label":"A","text":"300 Billion Years","isCorrect":false},{"id":2,"label":"B","text":"Eternity","isCorrect":true},{"id":3,"label":"C","text":"5 Trillion Years","isCorrect":false},{"id":4,"label":"D","text":"500 Trillion Years","isCorrect":false}]}]}]');var h=s(577);const w=["src"],f={class:"card-text"},b={__name:"Card",props:["quiz"],setup(e){const{quiz:t}=e,s=(0,l.tv)(),i=()=>{s.push(`/quiz/${t.id}`)};return(t,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"card",onClick:i},[(0,r._)("img",{src:e.quiz.img,alt:""},null,8,w),(0,r._)("div",f,[(0,r._)("h2",null,(0,h.zw)(e.quiz.name),1),(0,r._)("p",null,(0,h.zw)(e.quiz.questions.length)+" Questions",1)])]))}},C=(0,u.Z)(b,[["__scopeId","data-v-0fd11fe1"]]),x=C,v=e=>((0,r.dD)("data-v-36e663df"),e=e(),(0,r.Cn)(),e),g=v((()=>(0,r._)("h1",null,"Quizes",-1))),m={class:"options-container"},_={__name:"QuizesView",setup(e){const t=(0,o.iH)(p),s=(0,o.iH)("");return(0,r.YP)(s,(()=>{t.value=p.filter((e=>e.name.toLowerCase().includes(s.value.toLowerCase())))})),(e,o)=>((0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("header",null,[g,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e),type:"text",placeholder:"Search..."},null,512),[[i.nr,s.value,void 0,{trim:!0}]])]),(0,r._)("div",m,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.value,(e=>((0,r.wg)(),(0,r.j4)(x,{key:e.id,quiz:e},null,8,["quiz"])))),128))])]))}},q=(0,u.Z)(_,[["__scopeId","data-v-36e663df"]]),y=q,z={class:"question-container"},D={class:"options-container"},A=["onClick"],k={class:"option-label"},O={class:"option-value"},S={__name:"Question",props:["question"],emits:["selectOption"],setup(e,{emit:t}){const{question:s}=e,i=e=>{t("selectOption",e)};return(t,s)=>((0,r.wg)(),(0,r.iD)("html",null,[(0,r._)("div",z,(0,h.zw)(e.question.text),1),(0,r._)("div",D,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.question.options,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"option",onClick:t=>i(e.isCorrect)},[(0,r._)("p",k,(0,h.zw)(e.label),1),(0,r._)("div",O,[(0,r._)("p",null,(0,h.zw)(e.text),1)])],8,A)))),128))])]))}},H=(0,u.Z)(S,[["__scopeId","data-v-42885f28"]]),B=H,j={class:"bar"},Q={__name:"QuizHeader",props:["questionStatus","barPercentage"],setup(e){const{questionStatus:t,barPercentage:s}=e;return(t,s)=>((0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("h4",null,"Question "+(0,h.zw)(e.questionStatus),1),(0,r._)("div",j,[(0,r._)("div",{class:"completion",style:(0,h.j5)({width:e.barPercentage})},null,4)])]))}},M=(0,u.Z)(Q,[["__scopeId","data-v-3cf3ce94"]]),T=M,P=e=>((0,r.dD)("data-v-28a30e3c"),e=e(),(0,r.Cn)(),e),Z={class:"results"},I=P((()=>(0,r._)("p",null,"Your Results...",-1))),L={class:"result-answers"},U=P((()=>(0,r._)("h3",null,"Answers:",-1))),Y={key:0},V=P((()=>(0,r._)("br",null,null,-1))),W={class:"button"},$={__name:"Result",props:["quizQuestionLength","numberOfCorrectAnswers","questions","isCorrect"],setup(e){const{quizQuestionLength:t,numberOfCorrectAnswers:s,questions:i,isCorrect:a}=e;return(t,s)=>((0,r.wg)(),(0,r.iD)("div",Z,[I,(0,r._)("h1",null,(0,h.zw)(e.numberOfCorrectAnswers)+"/"+(0,h.zw)(e.quizQuestionLength),1),(0,r._)("div",L,[U,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.questions,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t},[(0,r.Uk)((0,h.zw)(e.text)+" - ",1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.options,((e,t)=>((0,r.wg)(),(0,r.iD)("span",{key:t},[e.isCorrect?((0,r.wg)(),(0,r.iD)("p",Y,(0,h.zw)(e.text),1)):(0,r.kq)("",!0)])))),128))])))),128))])]),V,(0,r._)("div",W,[(0,r.Wm)((0,o.SU)(l.rH),{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Back To Quiz Menu")])),_:1})])]))}},E=(0,u.Z)($,[["__scopeId","data-v-28a30e3c"]]),F=E,G={class:"content"},R={__name:"QuizView",props:["quizQuestionLength","questions","isCorrect"],setup(e){const{quizQuestionLength:t,questions:s,isCorrect:i}=e,a=(0,l.yj)(),n=parseInt(a.params.id),u=p.find((e=>e.id===n)),c=(0,o.iH)(0),d=(0,o.iH)(0),h=(0,o.iH)(!1),w=(0,r.Fl)((()=>`${c.value}/${u.questions.length}`)),f=(0,r.Fl)((()=>c.value/u.questions.length*100+"%")),b=e=>{e&&d.value++,u.questions.length-1===c.value&&(h.value=!0),c.value++};return(t,s)=>((0,r.wg)(),(0,r.iD)("div",G,[(0,r.Wm)(T,{questionStatus:(0,o.SU)(w),barPercentage:(0,o.SU)(f)},null,8,["questionStatus","barPercentage"]),(0,r._)("div",null,[h.value?((0,r.wg)(),(0,r.j4)(F,{key:1,quizQuestionLength:(0,o.SU)(u).questions.length,numberOfCorrectAnswers:d.value,questions:(0,o.SU)(u).questions,isCorrect:e.isCorrect,isAnswerCorrect:t.isAnswerCorrect},null,8,["quizQuestionLength","numberOfCorrectAnswers","questions","isCorrect","isAnswerCorrect"])):((0,r.wg)(),(0,r.j4)(B,{key:0,question:(0,o.SU)(u).questions[c.value],onSelectOption:b},null,8,["question"]))])]))}},K=(0,u.Z)(R,[["__scopeId","data-v-1dd04154"]]),J=K,N=(0,l.p7)({history:(0,l.PO)((void 0).BASE_URL),routes:[{path:"/",name:"quizes",component:y},{path:"/quiz/:id",name:"quiz",component:J}]}),X=N,ee=(0,i.ri)(d);ee.use(X),ee.mount("#app")}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,(()=>{var e=[];s.O=(t,i,r,o)=>{if(!i){var l=1/0;for(c=0;c<e.length;c++){for(var[i,r,o]=e[c],a=!0,n=0;n<i.length;n++)(!1&o||l>=o)&&Object.keys(s.O).every((e=>s.O[e](i[n])))?i.splice(n--,1):(a=!1,o<l&&(l=o));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,r,o]}})(),(()=>{s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={143:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var r,o,[l,a,n]=i,u=0;if(l.some((t=>0!==e[t]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(n)var c=n(s)}for(t&&t(i);u<l.length;u++)o=l[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},i=self["webpackChunkquizapp"]=self["webpackChunkquizapp"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=s.O(void 0,[998],(()=>s(44)));i=s.O(i)})();
//# sourceMappingURL=app.426dc766.js.map