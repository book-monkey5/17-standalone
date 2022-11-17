"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[194],{8194:(S,b,e)=>{e.r(b),e.d(b,{BOOKS_ROUTES:()=>D});var c=e(6895),a=e(6158),t=e(8256);class l{transform(n){return n?`${n.substring(0,3)}-${n.substring(3)}`:""}static#t=this.\u0275fac=function(o){return new(o||l)};static#o=this.\u0275pipe=t.Yjl({name:"isbn",type:l,pure:!0,standalone:!0})}var _=e(7579),d=e(4482),k=e(5403),v=e(8421),Z=e(5032),T=e(8338);class u{constructor(n,o,s){this.template=n,this.viewContainer=o,this.authService=s,this.destroy$=new _.x,this.authService.isAuthenticated$.pipe(function x(i){return(0,d.e)((n,o)=>{(0,v.Xf)(i).subscribe((0,k.x)(o,()=>o.complete(),Z.Z)),!o.closed&&n.subscribe(o)})}(this.destroy$)).subscribe(r=>{r?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}static#t=this.\u0275fac=function(o){return new(o||u)(t.Y36(t.Rgc),t.Y36(t.s_b),t.Y36(T.e))};static#o=this.\u0275dir=t.lG2({type:u,selectors:[["","bmLoggedinOnly",""]],standalone:!0})}class m{constructor(){this.confirm=new t.vpe}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}static#t=this.\u0275fac=function(o){return new(o||m)};static#o=this.\u0275dir=t.lG2({type:m,selectors:[["","bmConfirm",""]],hostBindings:function(o,s){1&o&&t.NdJ("click",function(){return s.onClick()})},inputs:{confirmText:["bmConfirm","confirmText"]},outputs:{confirm:"confirm"},standalone:!0})}var h=e(6384);function C(i,n){if(1&i&&(t.TgZ(0,"p",9),t._uU(1),t.qZA()),2&i){const o=t.oxw().ngIf;t.xp6(1),t.Oqu(o.subtitle)}}function A(i,n){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const o=n.$implicit;t.xp6(1),t.Oqu(o)}}function I(i,n){if(1&i&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Published"),t.qZA(),t._uU(3),t.ALo(4,"date"),t.qZA()),2&i){const o=t.oxw().ngIf;t.xp6(3),t.hij(" ",t.xi3(4,1,o.published,"longDate")," ")}}function U(i,n){if(1&i&&t._UZ(0,"img",10),2&i){const o=t.oxw().ngIf;t.Q6J("src",o.thumbnailUrl,t.LSH)}}const B=function(i){return["/admin/edit",i]};function O(i,n){if(1&i){const o=t.EpF();t.ynx(0),t.TgZ(1,"button",11),t.NdJ("confirm",function(){t.CHM(o);const r=t.oxw().ngIf,w=t.oxw();return t.KtG(w.removeBook(r.isbn))}),t._uU(2," Remove book "),t.qZA(),t.TgZ(3,"a",12),t._uU(4," Edit book "),t.qZA(),t.BQk()}if(2&i){const o=t.oxw().ngIf;t.xp6(3),t.Q6J("routerLink",t.VKq(1,B,o.isbn))}}function y(i,n){if(1&i&&(t.TgZ(0,"div",1)(1,"h1"),t._uU(2),t.qZA(),t.YNc(3,C,2,1,"p",2),t.TgZ(4,"div",3)(5,"div")(6,"h2"),t._uU(7,"Authors"),t.qZA(),t.TgZ(8,"ul"),t.YNc(9,A,2,1,"li",4),t.qZA()(),t.TgZ(10,"div")(11,"h2"),t._uU(12,"ISBN"),t.qZA(),t._uU(13),t.ALo(14,"isbn"),t.qZA(),t.YNc(15,I,5,4,"div",5),t.qZA(),t.TgZ(16,"h2"),t._uU(17,"Description"),t.qZA(),t.TgZ(18,"p"),t._uU(19),t.qZA(),t.YNc(20,U,1,1,"img",6),t.TgZ(21,"a",7),t._uU(22,"Back to list"),t.qZA(),t.YNc(23,O,5,3,"ng-container",8),t.qZA()),2&i){const o=n.ngIf;t.xp6(2),t.Oqu(o.title),t.xp6(1),t.Q6J("ngIf",o.subtitle),t.xp6(6),t.Q6J("ngForOf",o.authors),t.xp6(4),t.hij(" ",t.lcZ(14,7,o.isbn)," "),t.xp6(2),t.Q6J("ngIf",o.published),t.xp6(4),t.Oqu(o.description),t.xp6(1),t.Q6J("ngIf",o.thumbnailUrl)}}class f{constructor(n,o,s){this.service=n,this.route=o,this.router=s;const r=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(r)}removeBook(n){this.service.remove(n).subscribe(()=>{this.router.navigateByUrl("/books")})}static#t=this.\u0275fac=function(o){return new(o||f)(t.Y36(h.T),t.Y36(a.gz),t.Y36(a.F0))};static#o=this.\u0275cmp=t.Xpm({type:f,selectors:[["bm-book-details"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(o,s){1&o&&(t.YNc(0,y,24,9,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,s.book$))},dependencies:[c.O5,c.ax,c.uU,c.Ov,a.rH,l,u,m]})}function L(i,n){if(1&i&&t._UZ(0,"img",6),2&i){const o=t.oxw(2);t.Q6J("src",o.book.thumbnailUrl,t.LSH)}}function Y(i,n){if(1&i&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&i){const o=t.oxw(2);t.xp6(1),t.hij(" ",o.book.subtitle," ")}}function q(i,n){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const o=n.$implicit;t.xp6(1),t.hij(" ",o," ")}}function J(i,n){if(1&i&&(t.TgZ(0,"a",1),t.YNc(1,L,1,1,"img",2),t.TgZ(2,"h2"),t._uU(3),t.qZA(),t.YNc(4,Y,2,1,"p",3),t.TgZ(5,"ul",4),t.YNc(6,q,2,1,"li",5),t.qZA(),t.TgZ(7,"div"),t._uU(8),t.ALo(9,"isbn"),t.qZA()()),2&i){const o=t.oxw();t.Q6J("routerLink",o.book.isbn),t.xp6(1),t.Q6J("ngIf",o.book.thumbnailUrl),t.xp6(2),t.Oqu(o.book.title),t.xp6(1),t.Q6J("ngIf",o.book.subtitle),t.xp6(2),t.Q6J("ngForOf",o.book.authors),t.xp6(2),t.hij("ISBN ",t.lcZ(9,6,o.book.isbn),"")}}class p{static#t=this.\u0275fac=function(o){return new(o||p)};static#o=this.\u0275cmp=t.Xpm({type:p,selectors:[["bm-book-list-item"]],inputs:{book:"book"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(o,s){1&o&&t.YNc(0,J,10,8,"a",0),2&o&&t.Q6J("ngIf",s.book)},dependencies:[c.O5,c.ax,a.rH,l]})}function F(i,n){if(1&i&&(t.TgZ(0,"li"),t._UZ(1,"bm-book-list-item",4),t.qZA()),2&i){const o=n.$implicit;t.xp6(1),t.Q6J("book",o)}}function N(i,n){1&i&&(t.TgZ(0,"li"),t._uU(1," No books available. "),t.qZA())}function Q(i,n){if(1&i&&(t.TgZ(0,"ul",1),t.YNc(1,F,2,1,"li",2),t.YNc(2,N,2,0,"li",3),t.qZA()),2&i){const o=n.ngIf;t.xp6(1),t.Q6J("ngForOf",o),t.xp6(1),t.Q6J("ngIf",!o.length)}}class g{constructor(n){this.service=n,this.books$=this.service.getAll()}static#t=this.\u0275fac=function(o){return new(o||g)(t.Y36(h.T))};static#o=this.\u0275cmp=t.Xpm({type:g,selectors:[["bm-book-list"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"]],template:function(o,s){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Books"),t.qZA(),t.YNc(2,Q,3,2,"ul",0),t.ALo(3,"async")),2&o&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,s.books$)))},dependencies:[c.O5,c.ax,c.Ov,p]})}const D=[{path:"",component:g},{path:":isbn",component:f}]}}]);