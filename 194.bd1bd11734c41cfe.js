"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[194],{8194:(w,u,e)=>{e.r(u),e.d(u,{BOOKS_ROUTES:()=>Q});var r=e(6895),a=e(6158),o=e(8256);let m=(()=>{class t{transform(n){return n?`${n.substring(0,3)}-${n.substring(3)}`:""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=o.Yjl({name:"isbn",type:t,pure:!0,standalone:!0}),t})();var f=e(7579),g=e(4482),b=e(5403),k=e(8421),d=e(5032),h=e(8338);let v=(()=>{class t{constructor(n,s,c){this.template=n,this.viewContainer=s,this.authService=c,this.destroy$=new f.x,this.authService.isAuthenticated$.pipe(function _(t){return(0,g.e)((i,n)=>{(0,k.Xf)(t).subscribe((0,b.x)(n,()=>n.complete(),d.Z)),!n.closed&&i.subscribe(n)})}(this.destroy$)).subscribe(l=>{l?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(o.Rgc),o.Y36(o.s_b),o.Y36(h.e))},t.\u0275dir=o.lG2({type:t,selectors:[["","bmLoggedinOnly",""]],standalone:!0}),t})(),Z=(()=>{class t{constructor(){this.confirm=new o.vpe}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=o.lG2({type:t,selectors:[["","bmConfirm",""]],hostBindings:function(n,s){1&n&&o.NdJ("click",function(){return s.onClick()})},inputs:{confirmText:["bmConfirm","confirmText"]},outputs:{confirm:"confirm"},standalone:!0}),t})();var p=e(6384);function x(t,i){if(1&t&&(o.TgZ(0,"p",9),o._uU(1),o.qZA()),2&t){const n=o.oxw().ngIf;o.xp6(1),o.Oqu(n.subtitle)}}function C(t,i){if(1&t&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&t){const n=i.$implicit;o.xp6(1),o.Oqu(n)}}function T(t,i){if(1&t&&(o.TgZ(0,"div")(1,"h2"),o._uU(2,"Published"),o.qZA(),o._uU(3),o.ALo(4,"date"),o.qZA()),2&t){const n=o.oxw().ngIf;o.xp6(3),o.hij(" ",o.xi3(4,1,n.published,"longDate")," ")}}function B(t,i){if(1&t&&o._UZ(0,"img",10),2&t){const n=o.oxw().ngIf;o.Q6J("src",n.thumbnailUrl,o.LSH)}}const I=function(t){return["/admin/edit",t]};function L(t,i){if(1&t){const n=o.EpF();o.ynx(0),o.TgZ(1,"button",11),o.NdJ("confirm",function(){o.CHM(n);const c=o.oxw().ngIf,l=o.oxw();return o.KtG(l.removeBook(c.isbn))}),o._uU(2," Remove book "),o.qZA(),o.TgZ(3,"a",12),o._uU(4," Edit book "),o.qZA(),o.BQk()}if(2&t){const n=o.oxw().ngIf;o.xp6(3),o.Q6J("routerLink",o.VKq(1,I,n.isbn))}}function A(t,i){if(1&t&&(o.TgZ(0,"div",1)(1,"h1"),o._uU(2),o.qZA(),o.YNc(3,x,2,1,"p",2),o.TgZ(4,"div",3)(5,"div")(6,"h2"),o._uU(7,"Authors"),o.qZA(),o.TgZ(8,"ul"),o.YNc(9,C,2,1,"li",4),o.qZA()(),o.TgZ(10,"div")(11,"h2"),o._uU(12,"ISBN"),o.qZA(),o._uU(13),o.ALo(14,"isbn"),o.qZA(),o.YNc(15,T,5,4,"div",5),o.qZA(),o.TgZ(16,"h2"),o._uU(17,"Description"),o.qZA(),o.TgZ(18,"p"),o._uU(19),o.qZA(),o.YNc(20,B,1,1,"img",6),o.TgZ(21,"a",7),o._uU(22,"Back to list"),o.qZA(),o.YNc(23,L,5,3,"ng-container",8),o.qZA()),2&t){const n=i.ngIf;o.xp6(2),o.Oqu(n.title),o.xp6(1),o.Q6J("ngIf",n.subtitle),o.xp6(6),o.Q6J("ngForOf",n.authors),o.xp6(4),o.hij(" ",o.lcZ(14,7,n.isbn)," "),o.xp6(2),o.Q6J("ngIf",n.published),o.xp6(4),o.Oqu(n.description),o.xp6(1),o.Q6J("ngIf",n.thumbnailUrl)}}let U=(()=>{class t{constructor(n,s,c){this.service=n,this.route=s,this.router=c;const l=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(l)}removeBook(n){this.service.remove(n).subscribe(()=>{this.router.navigateByUrl("/books")})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(p.T),o.Y36(a.gz),o.Y36(a.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-details"]],standalone:!0,features:[o.jDz],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(n,s){1&n&&(o.YNc(0,A,24,9,"div",0),o.ALo(1,"async")),2&n&&o.Q6J("ngIf",o.lcZ(1,1,s.book$))},dependencies:[r.O5,r.ax,r.uU,r.Ov,a.rH,m,v,Z]}),t})();function O(t,i){if(1&t&&o._UZ(0,"img",6),2&t){const n=o.oxw(2);o.Q6J("src",n.book.thumbnailUrl,o.LSH)}}function y(t,i){if(1&t&&(o.TgZ(0,"p",7),o._uU(1),o.qZA()),2&t){const n=o.oxw(2);o.xp6(1),o.hij(" ",n.book.subtitle," ")}}function D(t,i){if(1&t&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&t){const n=i.$implicit;o.xp6(1),o.hij(" ",n," ")}}function Y(t,i){if(1&t&&(o.TgZ(0,"a",1),o.YNc(1,O,1,1,"img",2),o.TgZ(2,"h2"),o._uU(3),o.qZA(),o.YNc(4,y,2,1,"p",3),o.TgZ(5,"ul",4),o.YNc(6,D,2,1,"li",5),o.qZA(),o.TgZ(7,"div"),o._uU(8),o.ALo(9,"isbn"),o.qZA()()),2&t){const n=o.oxw();o.Q6J("routerLink",n.book.isbn),o.xp6(1),o.Q6J("ngIf",n.book.thumbnailUrl),o.xp6(2),o.Oqu(n.book.title),o.xp6(1),o.Q6J("ngIf",n.book.subtitle),o.xp6(2),o.Q6J("ngForOf",n.book.authors),o.xp6(2),o.hij("ISBN ",o.lcZ(9,6,n.book.isbn),"")}}let q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(n,s){1&n&&o.YNc(0,Y,10,8,"a",0),2&n&&o.Q6J("ngIf",s.book)},dependencies:[r.O5,r.ax,a.rH,m]}),t})();function J(t,i){if(1&t&&(o.TgZ(0,"li"),o._UZ(1,"bm-book-list-item",4),o.qZA()),2&t){const n=i.$implicit;o.xp6(1),o.Q6J("book",n)}}function F(t,i){1&t&&(o.TgZ(0,"li"),o._uU(1," No books available. "),o.qZA())}function N(t,i){if(1&t&&(o.TgZ(0,"ul",1),o.YNc(1,J,2,1,"li",2),o.YNc(2,F,2,0,"li",3),o.qZA()),2&t){const n=i.ngIf;o.xp6(1),o.Q6J("ngForOf",n),o.xp6(1),o.Q6J("ngIf",!n.length)}}const Q=[{path:"",component:(()=>{class t{constructor(n){this.service=n,this.books$=this.service.getAll()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(p.T))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list"]],standalone:!0,features:[o.jDz],decls:4,vars:3,consts:[["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"]],template:function(n,s){1&n&&(o.TgZ(0,"h1"),o._uU(1,"Books"),o.qZA(),o.YNc(2,N,3,2,"ul",0),o.ALo(3,"async")),2&n&&(o.xp6(2),o.Q6J("ngIf",o.lcZ(3,1,s.books$)))},dependencies:[r.O5,r.ax,r.Ov,q]}),t})()},{path:":isbn",component:U}]}}]);