import{a as Q}from"./chunk-HSDQLECM.js";import{$ as b,F as B,G as r,H as f,I as A,K as M,M as c,O as l,Q as a,R as o,S as k,T as P,U as V,V as H,W as E,X as d,Z as m,_ as v,ba as x,c as w,da as z,ea as u,fa as _,ga as K,ja as h,ka as I,l as O,la as D,ma as q,o as $,p as N,q as g,s as S,sa as G,t as R,u as U,ua as J,v as j,va as F,ya as T}from"./chunk-EAAJJW6A.js";var L=(()=>{let e=class e{transform(s){return s?`${s.substring(0,3)}-${s.substring(3)}`:""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=R({name:"isbn",type:e,pure:!0,standalone:!0});let t=e;return t})();var W=(()=>{let e=class e{constructor(s,n,p){this.template=s,this.viewContainer=n,this.authService=p,this.destroy$=new w,this.authService.isAuthenticated$.pipe(O(this.destroy$)).subscribe(y=>{y?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}};e.\u0275fac=function(n){return new(n||e)(f(A),f(M),f(Q))},e.\u0275dir=S({type:e,selectors:[["","bmLoggedinOnly",""]],standalone:!0});let t=e;return t})();var X=(()=>{let e=class e{constructor(){this.confirm=new $}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=S({type:e,selectors:[["","bmConfirm",""]],hostBindings:function(n,p){n&1&&E("click",function(){return p.onClick()})},inputs:{confirmText:[N.None,"bmConfirm","confirmText"]},outputs:{confirm:"confirm"},standalone:!0});let t=e;return t})();function it(t,e){if(t&1&&(a(0,"p",9),m(1),o()),t&2){let i=d().ngIf;r(),v(i.subtitle)}}function nt(t,e){if(t&1&&(a(0,"li"),m(1),o()),t&2){let i=e.$implicit;r(),v(i)}}function ot(t,e){if(t&1&&(a(0,"div")(1,"h2"),m(2,"Published"),o(),m(3),u(4,"date"),o()),t&2){let i=d().ngIf;r(3),b(" ",K(4,1,i.published,"longDate")," ")}}function rt(t,e){if(t&1&&k(0,"img",10),t&2){let i=d().ngIf;l("src",i.thumbnailUrl,B)}}var at=t=>["/admin/edit",t];function st(t,e){if(t&1){let i=H();P(0),a(1,"button",11),E("confirm",function(){U(i);let n=d().ngIf,p=d();return j(p.removeBook(n.isbn))}),m(2," Remove book "),o(),a(3,"a",12),m(4," Edit book "),o(),V()}if(t&2){let i=d().ngIf;r(3),l("routerLink",z(1,at,i.isbn))}}function mt(t,e){if(t&1&&(a(0,"div",1)(1,"h1"),m(2),o(),c(3,it,2,1,"p",2),a(4,"div",3)(5,"div")(6,"h2"),m(7,"Authors"),o(),a(8,"ul"),c(9,nt,2,1,"li",4),o()(),a(10,"div")(11,"h2"),m(12,"ISBN"),o(),m(13),u(14,"isbn"),o(),c(15,ot,5,4,"div",5),o(),a(16,"h2"),m(17,"Description"),o(),a(18,"p"),m(19),o(),c(20,rt,1,1,"img",6),a(21,"a",7),m(22,"Back to list"),o(),c(23,st,5,3,"ng-container",8),o()),t&2){let i=e.ngIf;r(2),v(i.title),r(),l("ngIf",i.subtitle),r(6),l("ngForOf",i.authors),r(4),b(" ",_(14,7,i.isbn)," "),r(2),l("ngIf",i.published),r(4),v(i.description),r(),l("ngIf",i.thumbnailUrl)}}var Y=(()=>{let e=class e{constructor(s,n,p){this.service=s,this.route=n,this.router=p;let y=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(y)}removeBook(s){this.service.remove(s).subscribe(()=>{this.router.navigateByUrl("/books")})}};e.\u0275fac=function(n){return new(n||e)(f(T),f(G),f(J))},e.\u0275cmp=g({type:e,selectors:[["bm-book-details"]],standalone:!0,features:[x],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(n,p){n&1&&(c(0,mt,24,9,"div",0),u(1,"async")),n&2&&l("ngIf",_(1,1,p.book$))},dependencies:[I,h,q,D,F,L,W,X]});let t=e;return t})();function lt(t,e){if(t&1&&k(0,"img",6),t&2){let i=d(2);l("src",i.book.thumbnailUrl,B)}}function ct(t,e){if(t&1&&(a(0,"p",7),m(1),o()),t&2){let i=d(2);r(),b(" ",i.book.subtitle," ")}}function pt(t,e){if(t&1&&(a(0,"li"),m(1),o()),t&2){let i=e.$implicit;r(),b(" ",i," ")}}function dt(t,e){if(t&1&&(a(0,"a",1),c(1,lt,1,1,"img",2),a(2,"h2"),m(3),o(),c(4,ct,2,1,"p",3),a(5,"ul",4),c(6,pt,2,1,"li",5),o(),a(7,"div"),m(8),u(9,"isbn"),o()()),t&2){let i=d();l("routerLink",i.book.isbn),r(),l("ngIf",i.book.thumbnailUrl),r(2),v(i.book.title),r(),l("ngIf",i.book.subtitle),r(2),l("ngForOf",i.book.authors),r(2),b("ISBN ",_(9,6,i.book.isbn),"")}}var Z=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["bm-book-list-item"]],inputs:{book:"book"},standalone:!0,features:[x],decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(n,p){n&1&&c(0,dt,10,8,"a",0),n&2&&l("ngIf",p.book)},dependencies:[I,h,F,L]});let t=e;return t})();function ft(t,e){if(t&1&&(a(0,"li"),k(1,"bm-book-list-item",4),o()),t&2){let i=e.$implicit;r(),l("book",i)}}function ut(t,e){t&1&&(a(0,"li"),m(1," No books available. "),o())}function vt(t,e){if(t&1&&(a(0,"ul",1),c(1,ft,2,1,"li",2)(2,ut,2,0,"li",3),o()),t&2){let i=e.ngIf;r(),l("ngForOf",i),r(),l("ngIf",!i.length)}}var tt=(()=>{let e=class e{constructor(s){this.service=s,this.books$=this.service.getAll()}};e.\u0275fac=function(n){return new(n||e)(f(T))},e.\u0275cmp=g({type:e,selectors:[["bm-book-list"]],standalone:!0,features:[x],decls:4,vars:3,consts:[["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"]],template:function(n,p){n&1&&(a(0,"h1"),m(1,"Books"),o(),c(2,vt,3,2,"ul",0),u(3,"async")),n&2&&(r(2),l("ngIf",_(3,1,p.books$)))},dependencies:[I,h,D,Z]});let t=e;return t})();var Vt=[{path:"",component:tt},{path:":isbn",component:Y}];export{Vt as BOOKS_ROUTES};
