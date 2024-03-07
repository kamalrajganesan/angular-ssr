import './polyfills.server.mjs';
import{a as g,b as C,c as x,d as y,f as w,g as c,i as E,j as S,s as V,t as D}from"./chunk-DTLF7AML.mjs";import{C as v}from"./chunk-AJQZ6CZ6.mjs";import{Ka as r,P as b,Q as u,Y as f,cb as s,fb as o,gb as e,hb as l,jb as h,nb as t,pb as d}from"./chunk-N4QD5VQY.mjs";import"./chunk-VVCT4QZE.mjs";var N=(()=>{let i=class i{constructor(){this.name=new c(""),this.releaseDate=new c(""),this.franchise=new c(""),this.budget=new c(""),this.worldwide=new c(""),this.summary=new c("")}ngOnInit(){this.updateControls()}updateControls(){this.name.setValue("Avengers: Endgame"),this.releaseDate.setValue("26/04/2019"),this.franchise.setValue("true"),this.budget.setValue("356000000"),this.worldwide.setValue("2797800564"),this.summary.setValue("After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.")}resetControls(){this.name.setValue(null),this.releaseDate.setValue(null),this.franchise.setValue(null),this.budget.setValue(null),this.worldwide.setValue(null),this.summary.setValue(null)}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=b({type:i,selectors:[["app-form-control"]],decls:65,vars:12,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-12","col-sm-12","col-md-7","col-lg-7","col-xl-7"],[1,"card-title","text-center","text-info"],[1,"row","g-3"],[1,"col-12","col-sm-12","col-md-6","col-lg-6","col-xl-6"],["for","name",1,"form-label"],["type","text","id","name",1,"form-control",3,"formControl"],["for","releaseDate",1,"form-label"],["type","text","id","releaseDate",1,"form-control",3,"formControl"],["for","budget",1,"form-label"],["type","text","id","budget",1,"form-control",3,"formControl"],["for","worldwide",1,"form-label"],["type","text","id","worldwide",1,"form-control",3,"formControl"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],["for","summary",1,"form-label"],["id","summary","rows","3","id","summary",1,"form-control",3,"formControl"],[1,"col-12","col-sm-12","col-md-4","col-lg-4","col-xl-4"],[1,"form-check"],["type","checkbox","id","franchise",1,"form-check-input",3,"formControl"],["for","franchise",1,"form-check-label"],["type","submit",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-12","col-sm-12","col-md-5","col-lg-5","col-xl-5"]],template:function(m,n){m&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t(5,"FormControl"),e(),o(6,"form",5)(7,"div",6)(8,"label",7),t(9,"Name"),e(),l(10,"input",8),e(),o(11,"div",6)(12,"label",9),t(13,"Release Date"),e(),l(14,"input",10),e(),o(15,"div",6)(16,"label",11),t(17,"Budget"),e(),l(18,"input",12),e(),o(19,"div",6)(20,"label",13),t(21,"Worldwide"),e(),l(22,"input",14),e(),o(23,"div",15)(24,"label",16),t(25,"Summary"),e(),l(26,"textarea",17),e(),o(27,"div",18)(28,"div",19),l(29,"input",20),o(30,"label",21),t(31," Franchise "),e()()(),o(32,"div",18)(33,"button",22),h("click",function(){return n.resetControls()}),t(34,"Reset Controls"),e()(),o(35,"div",18)(36,"button",22),h("click",function(){return n.updateControls()}),t(37,"Update Controls"),e()()()(),o(38,"div",23)(39,"h5",4),t(40,"FormControl Result"),e(),o(41,"strong"),t(42,"Name"),e(),t(43),l(44,"br"),o(45,"strong"),t(46,"Release Date"),e(),t(47),l(48,"br"),o(49,"strong"),t(50,"Budget"),e(),t(51),l(52,"br"),o(53,"strong"),t(54,"Worldwide"),e(),t(55),l(56,"br"),o(57,"strong"),t(58,"Summary"),e(),t(59),l(60,"br"),o(61,"strong"),t(62,"Franchise"),e(),t(63),l(64,"br"),e()()()()),m&2&&(r(10),s("formControl",n.name),r(4),s("formControl",n.releaseDate),r(4),s("formControl",n.budget),r(4),s("formControl",n.worldwide),r(4),s("formControl",n.summary),r(3),s("formControl",n.franchise),r(14),d(" : ",n.name.value,""),r(4),d(" : ",n.releaseDate.value,""),r(4),d(" : ",n.budget.value,""),r(4),d(" : ",n.worldwide.value,""),r(4),d(" : ",n.summary.value,""),r(4),d(" : ",n.franchise.value,""))},dependencies:[E,C,g,x,y,w,S]});let a=i;return a})();var M=[{path:"",component:N,children:[]}],k=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=u({type:i}),i.\u0275inj=f({imports:[v.forChild(M),v]});let a=i;return a})();var z=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=u({type:i}),i.\u0275inj=f({imports:[k,V,D]});let a=i;return a})();export{z as ExerciceModule};