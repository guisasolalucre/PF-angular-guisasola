"use strict";(self.webpackChunkPF_angular_guisasola=self.webpackChunkPF_angular_guisasola||[]).push([[248],{6248:(Y,T,r)=>{r.r(T),r.d(T,{UsersModule:()=>de});var d=r(6814),C=r(7501),f=r(3519),_=r.n(f),l=r(6223),m=r(9137),e=r(5879),x=r(3806),v=r(2296),F=r(2032),g=r(5683),U=r(7700);let Z=(()=>{class t{constructor(s,o){this.formBuilder=s,this.usersService=o,this.userForm=this.formBuilder.group({id:[""],username:["",[l.kI.required,l.kI.minLength(5)],(0,m.Au)(o)],password:["",[l.kI.required,l.kI.minLength(5)]]})}get idControl(){return this.userForm.controls.id}get usernameControl(){return this.userForm.controls.username}get passwordControl(){return this.userForm.controls.password}get usernameControlErrors(){return this.usernameControl.hasError("required")?"Username is required":this.usernameControl.hasError("minlength")?"Username must have at least 5 characters":this.usernameControl.hasError("usernameexists")?"Username already exists":""}get passwordControlErrors(){return this.passwordControl.hasError("required")?"Password is required":this.passwordControl.hasError("minlength")?"Password must have at least 5 characters":""}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(l.qu),e.Y36(x.f))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-dialog"]],decls:25,vars:7,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"example-form"],[1,"invisible"],["matInput","",3,"formControl"],[1,"w-100"],["type","text","matInput","",3,"formControl"],["type","password","matInput","",3,"formControl"],["align","end"],["mat-stroked-button","","mat-dialog-close",""],["mat-flat-button","","color","accent",3,"disabled","mat-dialog-close"]],template:function(o,n){1&o&&(e.TgZ(0,"p",0),e._uU(1," Creating user\n"),e.qZA(),e.TgZ(2,"mat-dialog-content",1)(3,"form",2)(4,"div",3)(5,"mat-form-field"),e._UZ(6,"input",4),e.qZA()(),e.TgZ(7,"div")(8,"mat-form-field",5)(9,"mat-label"),e._uU(10,"Username"),e.qZA(),e._UZ(11,"input",6),e.TgZ(12,"mat-error"),e._uU(13),e.qZA()(),e.TgZ(14,"mat-form-field",5)(15,"mat-label"),e._uU(16,"Password"),e.qZA(),e._UZ(17,"input",7),e.TgZ(18,"mat-error"),e._uU(19),e.qZA()()()()(),e.TgZ(20,"mat-dialog-actions",8)(21,"button",9),e._uU(22,"Cancel"),e.qZA(),e.TgZ(23,"button",10),e._uU(24," Confirm "),e.qZA()()),2&o&&(e.xp6(6),e.Q6J("formControl",n.idControl),e.xp6(5),e.Q6J("formControl",n.usernameControl),e.xp6(2),e.hij(" ",n.usernameControlErrors," "),e.xp6(4),e.Q6J("formControl",n.passwordControl),e.xp6(2),e.hij(" ",n.passwordControlErrors," "),e.xp6(4),e.Q6J("disabled",!n.userForm.valid)("mat-dialog-close",n.userForm.value))},dependencies:[v.lW,l._Y,l.Fj,l.JJ,l.JL,l.oH,F.Nt,g.KE,g.hX,g.TO,U.ZT,U.uh,U.xY,U.H8],styles:["mat-form-field[_ngcontent-%COMP%]{margin:.4em 0}mat-dialog-actions[_ngcontent-%COMP%]{padding:0 2em 2em 0}.invisible[_ngcontent-%COMP%]{display:none}"]})}return t})();var I=r(1630),R=r(5675),a=r(4221);const c=(0,a.R7)({source:"User",events:{"Load Users":(0,a.uZ)(),"Load Users Success":(0,a.Ky)(),"Load Users Failure":(0,a.Ky)(),"Create User":(0,a.Ky)(),"Create User Failure":(0,a.Ky)(),"Change User Role":(0,a.Ky)(),"Change User Role Failure":(0,a.Ky)(),"Delete User":(0,a.Ky)(),"Delete User Failure":(0,a.Ky)()}}),S="user",N=(0,a.Lq)({isLoading:!1,users:[],error:null},(0,a.on)(c.loadUsers,t=>({...t,isLoading:!0})),(0,a.on)(c.loadUsersSuccess,(t,{data:i})=>({...t,isLoading:!1,users:i})),(0,a.on)(c.loadUsersFailure,(t,{error:i})=>({...t,isLoading:!1,error:i})),(0,a.on)(c.createUser,t=>({...t,isLoading:!0})),(0,a.on)(c.createUserFailure,(t,{error:i})=>({...t,isLoading:!1,error:i})),(0,a.on)(c.changeUserRole,t=>({...t,isLoading:!0})),(0,a.on)(c.changeUserRoleFailure,(t,{error:i})=>({...t,isLoading:!1,error:i})),(0,a.on)(c.deleteUser,t=>({...t,isLoading:!0})),(0,a.on)(c.deleteUserFailure,(t,{error:i})=>({...t,isLoading:!1,error:i}))),M=(0,a.Tz)({name:S,reducer:N}),D=(0,a.ZF)(S),J=(0,a.P1)(D,t=>t.users),P=(0,a.P1)(D,t=>t.isLoading);var L=r(617),B=r(5940),K=r(4590),h=r(5313),O=r(1064),Q=r(2596);function z(t,i){1&t&&(e.TgZ(0,"th",9),e._uU(1,"Id"),e.qZA())}function $(t,i){if(1&t&&(e.TgZ(0,"td",10),e._uU(1),e.qZA()),2&t){const s=i.$implicit;e.xp6(1),e.hij(" ",s.id," ")}}function j(t,i){1&t&&(e.TgZ(0,"th",9),e._uU(1,"Username"),e.qZA())}function G(t,i){if(1&t&&(e.TgZ(0,"td",10),e._uU(1),e.qZA()),2&t){const s=i.$implicit;e.xp6(1),e.hij(" ",s.username," ")}}function H(t,i){1&t&&(e.TgZ(0,"th",9),e._uU(1,"Admin"),e.qZA())}function k(t,i){if(1&t){const s=e.EpF();e.TgZ(0,"mat-icon",14),e.NdJ("click",function(){e.CHM(s);const n=e.oxw(2).$implicit,u=e.oxw();return e.KtG(u.changeRole.emit(n.id))}),e._uU(1),e.qZA()}if(2&t){const s=e.oxw(2).$implicit;e.xp6(1),e.hij(" ","ADMINISTRATOR"===s.role?"check_box":"check_box_outline_blank"," ")}}function W(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,k,2,1,"mat-icon",13),e.qZA()),2&t){const s=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.isTestUser(s))}}function q(t,i){1&t&&(e.TgZ(0,"mat-icon",15),e._uU(1," accessibility_new "),e.qZA())}function X(t,i){if(1&t&&(e.TgZ(0,"td",10),e.YNc(1,W,2,1,"div",11),e.YNc(2,q,2,0,"ng-template",null,12,e.W1O),e.qZA()),2&t){const s=i.$implicit,o=e.MAs(3),n=e.oxw();e.xp6(1),e.Q6J("ngIf",s.id!=(null==n.authUser?null:n.authUser.id))("ngIfElse",o)}}function V(t,i){1&t&&(e.TgZ(0,"th",9),e._uU(1,"Actions"),e.qZA())}function ee(t,i){if(1&t){const s=e.EpF();e.TgZ(0,"mat-icon",18),e.NdJ("click",function(){e.CHM(s);const n=e.oxw(2).$implicit,u=e.oxw();return e.KtG(u.deleteUser.emit(n.id))}),e._uU(1," delete "),e.qZA()}}function te(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,ee,2,0,"mat-icon",17),e.qZA()),2&t){const s=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",s.id!=(null==o.authUser?null:o.authUser.id))}}function se(t,i){if(1&t&&(e.TgZ(0,"td",10),e.YNc(1,te,2,1,"div",16),e.qZA()),2&t){const s=i.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.isTestUser(s))}}function oe(t,i){1&t&&e._UZ(0,"tr",19)}function ne(t,i){1&t&&e._UZ(0,"tr",20)}let re=(()=>{class t{constructor(s){this.store=s,this.displayedColumns=["id","username","adminCheck","actions"],this.table=[],this.changeRole=new e.vpe,this.deleteUser=new e.vpe,this.authUser=null,this.store.select(K.u).subscribe(o=>{this.authUser=o})}isTestUser(s){return"Bi6_2"!==s.id&&"Hl9d3"!==s.id}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(a.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-users-table"]],inputs:{table:"table"},outputs:{changeRole:"changeRole",deleteUser:"deleteUser"},decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["appFontSize","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","adminCheck"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appFontSize","","mat-header-cell",""],["mat-cell",""],[4,"ngIf","ngIfElse"],["admin",""],["matTooltip","Change role","matTooltipPosition","before",3,"click",4,"ngIf"],["matTooltip","Change role","matTooltipPosition","before",3,"click"],["matTooltip","This is your user","matTooltipPosition","before"],[4,"ngIf"],["matTooltip","Delete","matTooltipPosition","after",3,"click",4,"ngIf"],["matTooltip","Delete","matTooltipPosition","after",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(e.TgZ(0,"table",0),e.ynx(1,1),e.YNc(2,z,2,0,"th",2),e.YNc(3,$,2,1,"td",3),e.BQk(),e.ynx(4,4),e.YNc(5,j,2,0,"th",2),e.YNc(6,G,2,1,"td",3),e.BQk(),e.ynx(7,5),e.YNc(8,H,2,0,"th",2),e.YNc(9,X,4,2,"td",3),e.BQk(),e.ynx(10,6),e.YNc(11,V,2,0,"th",2),e.YNc(12,se,2,1,"td",3),e.BQk(),e.YNc(13,oe,1,0,"tr",7),e.YNc(14,ne,1,0,"tr",8),e.qZA()),2&o&&(e.Q6J("dataSource",n.table),e.xp6(13),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[d.O5,L.Hw,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk,O.h,Q.gM]})}return t})();function ie(t,i){1&t&&(e.TgZ(0,"div",4),e._UZ(1,"mat-spinner",5),e.qZA())}function ae(t,i){if(1&t){const s=e.EpF();e.TgZ(0,"app-users-table",6),e.NdJ("changeRole",function(n){e.CHM(s);const u=e.oxw();return e.KtG(u.onChangeRole(n))})("deleteUser",function(n){e.CHM(s);const u=e.oxw();return e.KtG(u.onDeleteUser(n))}),e.qZA()}if(2&t){const s=e.oxw();e.Q6J("table",s.users)}}const le=[{path:"",component:(()=>{class t{constructor(s,o,n){this.usersService=s,this.dialog=o,this.store=n,this.users=[],this.isLoading=!0}ngOnInit(){this.store.dispatch(c.loadUsers()),this.store.select(J).subscribe(s=>this.users=s),this.store.select(P).subscribe(s=>this.isLoading=s)}onAddUser(){this.dialog.open(Z).afterClosed().subscribe({next:s=>{if(s){let o={id:(0,I.x0)(5),username:s.username,password:s.password,role:R.u[1],token:(0,I.x0)(25)};this.store.dispatch(c.createUser({payload:o}))}}})}onDeleteUser(s){this.usersService.filterAdmin().subscribe(o=>{this.usersService.getById(s).subscribe(n=>{1===o.length&&n[0].role===R.u[0]?_().fire({icon:"error",text:"There has to be at least one admin",heightAuto:!1}):_().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",heightAuto:!1}).then(he=>{he.isConfirmed&&(this.store.dispatch(c.deleteUser({id:s})),_().fire({title:"Deleted!",text:"The user has been deleted",icon:"success",confirmButtonText:"OK",heightAuto:!1,timer:1500,timerProgressBar:!0}))})})})}onChangeRole(s){this.usersService.filterAdmin().subscribe(o=>{this.usersService.getById(s).subscribe(n=>{1===o.length&&n[0].role===R.u[0]?_().fire({icon:"error",text:"There has to be at least one admin",heightAuto:!1}):this.store.dispatch(c.changeUserRole({id:s}))})})}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(x.f),e.Y36(U.uw),e.Y36(a.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-users"]],decls:10,vars:2,consts:[[1,"container"],["mat-flat-button","","color","accent",3,"click"],["class","loading",4,"ngIf","ngIfElse"],["table",""],[1,"loading"],["color","accent"],[3,"table","changeRole","deleteUser"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2,"USERS"),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return n.onAddUser()}),e.TgZ(4,"mat-icon"),e._uU(5,"add"),e.qZA(),e._uU(6," New user "),e.qZA()(),e.YNc(7,ie,2,0,"div",2),e.YNc(8,ae,1,1,"ng-template",null,3,e.W1O)),2&o){const u=e.MAs(9);e.xp6(7),e.Q6J("ngIf",n.isLoading)("ngIfElse",u)}},dependencies:[d.O5,v.lW,L.Hw,B.Ou,re],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:1em 0}button[_ngcontent-%COMP%]{margin-right:1.5em;margin-bottom:.5em}p[_ngcontent-%COMP%]{font-size:2.5em;text-shadow:5px -5px .3em black,5px 5px .3em black,-5px 5px .3em black,-5px -5px .3em black}.loading[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:100%}"]})}return t})()}];let ce=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[C.Bz.forChild(le),C.Bz]})}return t})();var ue=r(6208),p=r(5154),b=r(6328),y=r(7398),A=r(6306),w=r(2096);let me=(()=>{class t{constructor(s,o){this.actions$=s,this.service=o,this.loadUsers$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(c.loadUsers),(0,b.b)(()=>this.service.getUsers().pipe((0,y.U)(n=>c.loadUsersSuccess({data:n})),(0,A.K)(n=>(0,w.of)(c.loadUsersFailure({error:n}))))))),this.createUser$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(c.createUser),(0,b.b)(n=>this.service.createUser(n.payload).pipe((0,y.U)(()=>c.loadUsers()),(0,A.K)(u=>(0,w.of)(c.createUserFailure({error:u}))))))),this.changeUserRole$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(c.changeUserRole),(0,b.b)(n=>this.service.changeRole(n.id).pipe((0,y.U)(()=>c.loadUsers()),(0,A.K)(u=>(0,w.of)(c.changeUserRoleFailure({error:u}))))))),this.deleteUsers$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(c.deleteUser),(0,b.b)(n=>this.service.deleteUser(n.id).pipe((0,y.U)(()=>c.loadUsers()),(0,A.K)(u=>(0,w.of)(c.deleteUserFailure({error:u})))))))}static#e=this.\u0275fac=function(o){return new(o||t)(e.LFG(p.eX),e.LFG(x.f))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})(),de=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[d.ez,ce,ue.m,a.Aw.forFeature(S,M.reducer),p.sQ.forFeature([me])]})}return t})()},1064:(Y,T,r)=>{r.d(T,{h:()=>C});var d=r(5879);let C=(()=>{class f{constructor(l,m){this.elementRef=l,this.renderer=m,this.size="20px",this.setStyle()}ngOnChanges(l){this.size=l.size?.currentValue,this.setStyle()}setStyle(){this.renderer.setStyle(this.elementRef.nativeElement,"fontSize",this.size),this.renderer.setStyle(this.elementRef.nativeElement,"textDecoration","underline"),this.renderer.setStyle(this.elementRef.nativeElement,"fontWeight","bolder")}static#e=this.\u0275fac=function(m){return new(m||f)(d.Y36(d.SBq),d.Y36(d.Qsj))};static#t=this.\u0275dir=d.lG2({type:f,selectors:[["","appFontSize",""]],inputs:{size:"size"},features:[d.TTD]})}return f})()},1630:(Y,T,r)=>{r.d(T,{x0:()=>_});let _=(l=21)=>crypto.getRandomValues(new Uint8Array(l)).reduce((m,e)=>m+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}]);