import{b as N,c as A,d as W,f as j,h as _,i as b,s as B}from"./chunk-C2B5SJD3.js";import{d as E,e as x,n as w}from"./chunk-MUEAKTER.js";import{$ as v,Ka as a,S,T as y,eb as o,fb as n,gb as d,mb as m,ob as p,pb as c,qb as s,rb as u,ub as f,vb as g}from"./chunk-T4YG5NTO.js";var h=class{constructor(){this.name="",this.releaseDate="",this.domestic="",this.international="",this.worldwide="",this.franchise=!1}};var T=(()=>{let e=class e{constructor(){this.movie=new h,this.movieAny={name:""},this.country="United States",this.actor="Tom Cruise",this.movie.name="Edge of Tomorrow",this.movieAny={name:"Avatar"}}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=S({type:e,selectors:[["app-exercice"]],decls:46,vars:16,consts:[[1,"row","justify-content-center","pt-2"],[1,"text-center","col"],[1,"h3"],[1,"row","justify-content-center","p-2"],[1,"col-12","col-sm-12","col-md-4","col-lg-4","col-xl-4"],[1,"col-12","col-sm-12","col-md-8","col-lg-8","col-xl-8"],[1,"card"],[1,"card-header","text-center"],[1,"card-body"],[1,"form-row"],[1,"form-group","col-md-6"],["for","name"],["type","text","name","country","id","country",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","actor","id","actor",1,"form-control",3,"ngModel","ngModelChange"],["for","movieName"],["type","text","name","movieName","id","movieName",1,"form-control",3,"ngModel","ngModelChange"],["for","movieAnyName"],["type","text","name","movieAnyName","id","movieAnyName",1,"form-control",3,"ngModel","ngModelChange"]],template:function(l,t){l&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"Template-driven Forms"),n(),o(4,"h2",2),m(5,"Init"),n(),d(6,"hr"),n()(),o(7,"div",3)(8,"div",4),m(9),f(10,"json"),d(11,"br"),m(12),f(13,"json"),d(14,"br"),m(15),f(16,"json"),d(17,"br"),m(18),f(19,"json"),d(20,"br"),n(),o(21,"div",5)(22,"div",6)(23,"div",7)(24,"h4"),m(25,"Item Form"),n()(),o(26,"div",8)(27,"form")(28,"div",9)(29,"div",10)(30,"label",11),m(31,"Country"),n(),o(32,"input",12),u("ngModelChange",function(i){return s(t.country,i)||(t.country=i),i}),n()(),o(33,"div",10)(34,"label",11),m(35,"Actor"),n(),o(36,"input",13),u("ngModelChange",function(i){return s(t.actor,i)||(t.actor=i),i}),n()()(),o(37,"div",9)(38,"div",10)(39,"label",14),m(40,"Movie"),n(),o(41,"input",15),u("ngModelChange",function(i){return s(t.movie.name,i)||(t.movie.name=i),i}),n()(),o(42,"div",10)(43,"label",16),m(44,"Movie Any"),n(),o(45,"input",17),u("ngModelChange",function(i){return s(t.movieAny.name,i)||(t.movieAny.name=i),i}),n()()()()()()()()),l&2&&(a(9),p(" Country : ",g(10,8,t.country),""),a(3),p(" Actor : ",g(13,10,t.actor),""),a(3),p(" movie : ",g(16,12,t.movie),""),a(3),p(" movieAny : ",g(19,14,t.movieAny),""),a(14),c("ngModel",t.country),a(4),c("ngModel",t.actor),a(5),c("ngModel",t.movie.name),a(4),c("ngModel",t.movieAny.name))},dependencies:[b,N,A,W,_,j,E]});let r=e;return r})();var P=[{path:"",component:T}],F=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[w.forChild(P),w]});let r=e;return r})();var R=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[x,B,F]});let r=e;return r})();export{R as ExerciceModule};
