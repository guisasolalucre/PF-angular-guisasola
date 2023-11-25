"use strict";(self.webpackChunkPF_angular_guisasola=self.webpackChunkPF_angular_guisasola||[]).push([[331],{9592:(wt,Y,r)=>{r.r(Y),r.d(Y,{StudentsModule:()=>Yt});var h=r(6814),S=r(8034),B=r(6208),_=r(7501),m=r(6223),f=r(7700),D=r(9137),t=r(5879),g=r(5311),A=r(2296),q=r(2032),x=r(5683);let w=(()=>{class e{constructor(n,o,i){this.formBuilder=n,this.studentService=o,this.data=i,this.maxDate=new Date(Date.now()-5680368e5),this.studentForm=this.formBuilder.group({id:[""],idnumber:["",[m.kI.required,m.kI.pattern("^[0-9]*$"),m.kI.minLength(8),m.kI.maxLength(8)],(0,D.mr)(o)],name:["",[m.kI.required,m.kI.pattern("[a-zA-Z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda ]+")]],surname:["",[m.kI.required,m.kI.pattern("[a-zA-Z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda ]+")]],dob:["",[m.kI.required,D.l8]],email:["",[m.kI.required,m.kI.email],(0,D.ot)(o)]}),this.data&&this.studentForm.patchValue(this.data)}get idControl(){return this.studentForm.controls.id}get idnumberControl(){return this.studentForm.controls.idnumber}get nameControl(){return this.studentForm.controls.name}get surnameControl(){return this.studentForm.controls.surname}get dobControl(){return this.studentForm.controls.dob}get emailControl(){return this.studentForm.controls.email}get idnumberControlError(){return this.idnumberControl.hasError("required")?"ID is required":this.idnumberControl.hasError("pattern")?"ID must contain numbers only":this.idnumberControl.hasError("minlength")||this.idnumberControl.hasError("maxlength")?"ID must have 8 digits":this.idnumberControl.hasError("idnumberexists")?"Student already exists with this ID":""}get nameControlError(){return this.nameControl.hasError("required")?"First name is required":this.nameControl.hasError("pattern")?"First name must contain only letters":""}get surnameControlError(){return this.surnameControl.hasError("required")?"Last name is required":this.surnameControl.hasError("pattern")?"Last name must contain only letters":""}get dobControlError(){return this.dobControl.hasError("required")?"Date of bith is required":""}get emailControlError(){return this.emailControl.hasError("required")?"Email is required":this.emailControl.hasError("pattern")?"Invalid email":this.emailControl.hasError("emailexists")?"Student already exists with this email":""}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(m.qu),t.Y36(g.V),t.Y36(f.WI))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-student-form-dialog"]],decls:49,vars:17,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"example-form"],[1,"invisible"],["matInput","",3,"formControl"],[1,"row"],[1,"col"],["type","number","matInput","",1,"no-spinners",3,"formControl"],["matInput","",3,"max","matDatepicker","formControl"],["matIconSuffix","",3,"for"],["picker",""],["type","text","matInput","",3,"formControl"],["type","email","matInput","",3,"formControl"],["align","end"],["mat-stroked-button","","mat-dialog-close",""],["mat-flat-button","","color","accent",3,"disabled","mat-dialog-close"]],template:function(o,i){if(1&o&&(t.TgZ(0,"p",0),t._uU(1),t.qZA(),t.TgZ(2,"mat-dialog-content",1)(3,"form",2)(4,"div",3)(5,"mat-form-field"),t._UZ(6,"input",4),t.qZA()(),t.TgZ(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"ID"),t.qZA(),t._UZ(11,"input",7),t.TgZ(12,"mat-error"),t._uU(13),t.qZA()(),t.TgZ(14,"mat-form-field",6)(15,"mat-label"),t._uU(16,"Birthday"),t.qZA(),t._UZ(17,"input",8),t.TgZ(18,"mat-error"),t._uU(19),t.qZA(),t._UZ(20,"mat-datepicker-toggle",9)(21,"mat-datepicker",null,10),t.qZA()(),t.TgZ(23,"div",5)(24,"mat-form-field")(25,"mat-label"),t._uU(26,"First name"),t.qZA(),t._UZ(27,"input",11),t.TgZ(28,"mat-error"),t._uU(29),t.qZA()()(),t.TgZ(30,"div",5)(31,"mat-form-field")(32,"mat-label"),t._uU(33,"Last name"),t.qZA(),t._UZ(34,"input",11),t.TgZ(35,"mat-error"),t._uU(36),t.qZA()()(),t.TgZ(37,"div",5)(38,"mat-form-field")(39,"mat-label"),t._uU(40,"Email"),t.qZA(),t._UZ(41,"input",12),t.TgZ(42,"mat-error"),t._uU(43),t.qZA()()()()(),t.TgZ(44,"mat-dialog-actions",13)(45,"button",14),t._uU(46,"Cancel"),t.qZA(),t.TgZ(47,"button",15),t._uU(48," Confirm "),t.qZA()()),2&o){const s=t.MAs(22);t.xp6(1),t.hij(" ",i.data?"Updating student":"Creating student","\n"),t.xp6(5),t.Q6J("formControl",i.idControl),t.xp6(5),t.Q6J("formControl",i.idnumberControl),t.xp6(2),t.hij(" ",i.idnumberControlError," "),t.xp6(4),t.Q6J("max",i.maxDate)("matDatepicker",s)("formControl",i.dobControl),t.xp6(2),t.hij(" ",i.dobControlError," "),t.xp6(1),t.Q6J("for",s),t.xp6(7),t.Q6J("formControl",i.nameControl),t.xp6(2),t.hij(" ",i.nameControlError," "),t.xp6(5),t.Q6J("formControl",i.surnameControl),t.xp6(2),t.hij(" ",i.surnameControlError," "),t.xp6(5),t.Q6J("formControl",i.emailControl),t.xp6(2),t.hij(" ",i.emailControlError," "),t.xp6(4),t.Q6J("disabled",!i.studentForm.valid)("mat-dialog-close",i.studentForm.value)}},dependencies:[A.lW,m._Y,m.Fj,m.wV,m.JJ,m.JL,m.oH,q.Nt,x.KE,x.hX,x.TO,x.R9,f.ZT,f.uh,f.xY,f.H8,S.Mq,S.hl,S.nW],styles:["mat-form-field[_ngcontent-%COMP%]{margin:.4em 0}mat-dialog-actions[_ngcontent-%COMP%]{padding:0 2em 2em 0}.invisible[_ngcontent-%COMP%]{display:none}.no-spinners[_ngcontent-%COMP%]{-moz-appearance:textfield}.no-spinners[_ngcontent-%COMP%]::-webkit-outer-spin-button, .no-spinners[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}"]})}return e})();var k=r(1630),z=r(3519),T=r.n(z),l=r(4221);const d=(0,l.R7)({source:"Student",events:{"Load Students":(0,l.uZ)(),"Load Students Success":(0,l.Ky)(),"Load Students Failure":(0,l.Ky)(),"Create Student":(0,l.Ky)(),"Create Student Failure":(0,l.Ky)(),"Update Student":(0,l.Ky)(),"Update Student Failure":(0,l.Ky)(),"Delete Student":(0,l.Ky)(),"Delete Student Failure":(0,l.Ky)()}}),U="student",H=(0,l.Lq)({isLoading:!1,students:[],error:null},(0,l.on)(d.loadStudents,e=>({...e,isLoading:!0})),(0,l.on)(d.loadStudentsSuccess,(e,{data:a})=>({...e,isLoading:!1,students:a})),(0,l.on)(d.loadStudentsFailure,(e,{error:a})=>({...e,isLoading:!1,error:a})),(0,l.on)(d.createStudent,e=>({...e,isLoading:!0})),(0,l.on)(d.createStudentFailure,(e,{error:a})=>({...e,isLoading:!1,error:a})),(0,l.on)(d.updateStudent,e=>({...e,isLoading:!0})),(0,l.on)(d.updateStudentFailure,(e,{error:a})=>({...e,isLoading:!1,error:a})),(0,l.on)(d.deleteStudent,e=>({...e,isLoading:!0})),(0,l.on)(d.deleteStudentFailure,(e,{error:a})=>({...e,isLoading:!1,error:a}))),j=(0,l.Tz)({name:U,reducer:H}),I=(0,l.ZF)(U),$=(0,l.P1)(I,e=>e.students),P=(0,l.P1)(I,e=>e.isLoading);var F=r(9591),E=r(617),M=r(5940),N=r(1476),u=r(5313),G=r(4590),R=r(1064),J=r(3566),L=r(2596),O=r(9638);const W=["studentsSort"];function V(e,a){1&e&&(t.TgZ(0,"th",14),t._uU(1," ID "),t.qZA())}function X(e,a){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.idnumber,"1.0-0")," ")}}function tt(e,a){1&e&&(t.TgZ(0,"th",16),t._uU(1," Full name "),t.qZA())}function et(e,a){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.ALo(2,"fullname"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.name,n.surname)," ")}}function nt(e,a){1&e&&(t.TgZ(0,"th",14),t._uU(1," Birthday "),t.qZA())}function ot(e,a){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.dob,"yyyy/MM/dd")," ")}}function it(e,a){1&e&&(t.TgZ(0,"th",17),t._uU(1," Actions "),t.qZA())}function at(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",22),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.deleteStudent.emit(i.id))}),t._uU(1," delete "),t.qZA()}}function st(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",15)(1,"mat-icon",18),t.NdJ("click",function(){const s=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.goToDetail(s.id))}),t._uU(2," visibility "),t.qZA(),t.TgZ(3,"mat-icon",19),t.NdJ("click",function(){const s=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.updateStudent.emit(s))}),t._uU(4," edit "),t.qZA(),t.TgZ(5,"mat-icon",20),t.NdJ("click",function(){const s=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.sendEmail.emit(s.id))}),t._uU(6," mail "),t.qZA(),t.YNc(7,at,2,0,"mat-icon",21),t.qZA()}if(2&e){const n=a.$implicit,o=t.oxw();t.xp6(5),t.Q6J("matTooltip",n.email),t.xp6(2),t.Q6J("ngIf",o.isAdmin)}}function rt(e,a){1&e&&t._UZ(0,"tr",23)}function lt(e,a){1&e&&t._UZ(0,"tr",24)}const dt=function(){return[5,10,20]};let ut=(()=>{class e{constructor(n,o,i,s){this.dialog=n,this.studentService=o,this.router=i,this.store=s,this.table=[],this.isAdmin=!1,this.updateStudent=new t.vpe,this.deleteStudent=new t.vpe,this.sendEmail=new t.vpe,this.displayedColumns=["idnumber","fullname","dob","actions"],this.dataSource=new u.by,this.store.select(G.u).subscribe(c=>this.isAdmin="ADMINISTRATOR"===c?.role)}ngAfterViewInit(){this.initialize()}ngOnChanges(){this.initialize()}initialize(){this.dataSource=new u.by(this.table),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.studentsSort}goToDetail(n){this.router.navigate(["dashboard","students","detail",n])}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(f.uw),t.Y36(g.V),t.Y36(_.F0),t.Y36(l.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-students-table"]],viewQuery:function(o,i){if(1&o&&(t.Gf(N.NW,5),t.Gf(W,5)),2&o){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first),t.iGM(s=t.CRH())&&(i.studentsSort=s.first)}},inputs:{table:"table"},outputs:{updateStudent:"updateStudent",deleteStudent:"deleteStudent",sendEmail:"sendEmail"},features:[t.TTD],decls:18,vars:5,consts:[["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["studentsSort","matSort"],["matColumnDef","idnumber"],["appFontSize","50px","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fullname"],["appFontSize","50px","mat-header-cell","","mat-sort-header","name",4,"matHeaderCellDef"],["matColumnDef","dob"],["matColumnDef","actions"],["appFontSize","","mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["color","accent",3,"pageSizeOptions"],["paginator",""],["appFontSize","50px","mat-header-cell","","mat-sort-header",""],["mat-cell",""],["appFontSize","50px","mat-header-cell","","mat-sort-header","name"],["appFontSize","","mat-header-cell",""],["matTooltip","View student's detail",3,"click"],["matTooltip","Update student's details",3,"click"],[3,"matTooltip","click"],["matTooltip","Delete student",3,"click",4,"ngIf"],["matTooltip","Delete student",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,i){1&o&&(t.TgZ(0,"table",0,1),t.ynx(2,2),t.YNc(3,V,2,0,"th",3),t.YNc(4,X,3,4,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,tt,2,0,"th",6),t.YNc(7,et,3,4,"td",4),t.BQk(),t.ynx(8,7),t.YNc(9,nt,2,0,"th",3),t.YNc(10,ot,3,4,"td",4),t.BQk(),t.ynx(11,8),t.YNc(12,it,2,0,"th",9),t.YNc(13,st,8,2,"td",4),t.BQk(),t.YNc(14,rt,1,0,"tr",10),t.YNc(15,lt,1,0,"tr",11),t.qZA(),t._UZ(16,"mat-paginator",12,13)),2&o&&(t.Q6J("dataSource",i.dataSource),t.xp6(14),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,dt)))},dependencies:[h.O5,E.Hw,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,R.h,N.NW,J.YE,J.nU,L.gM,h.JJ,h.uU,O.J],styles:["mat-icon[_ngcontent-%COMP%]{margin:.2em}.loading[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:100%}"]})}return e})();function mt(e,a){1&e&&(t.TgZ(0,"div",4),t._UZ(1,"mat-spinner",5),t.qZA())}function ct(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"app-students-table",6),t.NdJ("updateStudent",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.onUpdateStudent(i))})("deleteStudent",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.onDeleteStudent(i))})("sendEmail",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.onSendEmail(i))}),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("table",n.students)}}let pt=(()=>{class e{constructor(n,o,i){this.dialog=n,this.studentService=o,this.store=i,this.students=[],this.isLoading=!0}ngOnInit(){this.store.dispatch(d.loadStudents()),this.store.select($).subscribe(n=>this.students=n),this.store.select(P).subscribe(n=>this.isLoading=n)}onAddStudent(){this.dialog.open(w).afterClosed().subscribe({next:n=>{if(n){let o={id:(0,k.x0)(5),idnumber:n.idnumber,name:n.name,surname:n.surname,dob:n.dob,email:n.email};this.store.dispatch(d.createStudent({payload:o}))}}})}onUpdateStudent(n){this.dialog.open(w,{data:n}).afterClosed().subscribe({next:o=>{o&&this.store.dispatch(d.updateStudent({id:n.id,payload:o}))}})}onDeleteStudent(n){T().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",heightAuto:!1}).then(o=>{o.isConfirmed&&(this.store.dispatch(d.deleteStudent({id:n})),this.store.dispatch(F.c.deleteEnrollmentsByStudent({id:n})),T().fire({title:"Deleted!",icon:"success",confirmButtonText:"OK",heightAuto:!1,timer:1500,timerProgressBar:!0}))})}onSendEmail(n){this.studentService.sendEmail(n)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(f.uw),t.Y36(g.V),t.Y36(l.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-students"]],decls:10,vars:2,consts:[[1,"container"],["mat-flat-button","","color","accent",3,"click"],["class","loading",4,"ngIf","ngIfElse"],["table",""],[1,"loading"],["color","accent"],[3,"table","updateStudent","deleteStudent","sendEmail"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2,"STUDENTS"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return i.onAddStudent()}),t.TgZ(4,"mat-icon"),t._uU(5,"add"),t.qZA(),t._uU(6," New student "),t.qZA()(),t.YNc(7,mt,2,0,"div",2),t.YNc(8,ct,1,1,"ng-template",null,3,t.W1O)),2&o){const s=t.MAs(9);t.xp6(7),t.Q6J("ngIf",i.isLoading)("ngIfElse",s)}},dependencies:[h.O5,A.lW,E.Hw,M.Ou,ut],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:1em 0}button[_ngcontent-%COMP%]{margin-right:1.5em;margin-bottom:.5em}p[_ngcontent-%COMP%]{font-size:2.5em;text-shadow:5px -5px .3em black,5px 5px .3em black,-5px 5px .3em black,-5px -5px .3em black}.loading[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:100%}"]})}return e})();var Q=r(8571),ht=r(5937),C=r(5195),ft=r(6385);function gt(e,a){1&e&&(t.TgZ(0,"div",2),t._UZ(1,"mat-spinner",3),t.qZA())}function Ct(e,a){1&e&&(t.TgZ(0,"th",17),t._uU(1,"Course"),t.qZA())}function St(e,a){if(1&e&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.course.name.nameString," ")}}function _t(e,a){1&e&&(t.TgZ(0,"th",17),t._uU(1,"Starting Date"),t.qZA())}function xt(e,a){if(1&e&&(t.TgZ(0,"td",18),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.course.startDate,"yyyy/MM/dd")," ")}}function Tt(e,a){1&e&&(t.TgZ(0,"th",17),t._uU(1,"Teacher"),t.qZA())}function Zt(e,a){if(1&e&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.course.teacher.name," ")}}function bt(e,a){1&e&&(t.TgZ(0,"th",17),t._uU(1," Actions "),t.qZA())}function yt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",18)(1,"mat-icon",19),t.NdJ("click",function(){const s=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.deleteEnrollment(s.id))}),t._uU(2," delete "),t.qZA()()}}function vt(e,a){1&e&&t._UZ(0,"tr",20)}function Dt(e,a){1&e&&t._UZ(0,"tr",21)}function At(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card",4)(1,"mat-card-header")(2,"div")(3,"mat-card-title"),t._uU(4),t.ALo(5,"fullname"),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"number"),t.qZA()(),t.TgZ(9,"div",5)(10,"button",6),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.enrollStudent())}),t._uU(11," Enroll "),t.qZA()()(),t._UZ(12,"mat-divider",7),t.TgZ(13,"mat-card-content")(14,"table",8),t.ynx(15,9),t.YNc(16,Ct,2,0,"th",10),t.YNc(17,St,2,1,"td",11),t.BQk(),t.ynx(18,12),t.YNc(19,_t,2,0,"th",10),t.YNc(20,xt,3,4,"td",11),t.BQk(),t.ynx(21,13),t.YNc(22,Tt,2,0,"th",10),t.YNc(23,Zt,2,1,"td",11),t.BQk(),t.ynx(24,14),t.YNc(25,bt,2,0,"th",10),t.YNc(26,yt,3,0,"td",11),t.BQk(),t.YNc(27,vt,1,0,"tr",15),t.YNc(28,Dt,1,0,"tr",16),t.qZA()()()}if(2&e){const n=t.oxw();let o,i;t.xp6(4),t.Oqu(t.xi3(5,5,null!==(o=null==n.student?null:n.student.name)&&void 0!==o?o:"Name",null!==(o=null==n.student?null:n.student.surname)&&void 0!==o?o:"Surname")),t.xp6(3),t.hij("ID: ",null!==(i=t.xi3(8,8,null==n.student?null:n.student.idnumber,"1.0-0"))&&void 0!==i?i:"Id number",""),t.xp6(7),t.Q6J("dataSource",n.courses),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}const Ut=[{path:"",component:pt},{path:"detail/:id",component:(()=>{class e{constructor(n,o,i,s){this.activatedRoute=n,this.studentService=o,this.dialog=i,this.store=s,this.isLoading=!0,this.displayedColumns=["course","startDate","teacher","actions"],this.dataSource=[],this.id=this.activatedRoute.snapshot.params.id,this.studentService.getById(this.id).subscribe(c=>this.student=c[0]),this.getEnrollments()}getEnrollments(){this.store.dispatch(F.c.loadEnrollmentsByStudent({id:this.id})),this.courses=this.store.select(Q.YD),this.store.select(Q.B1).subscribe(n=>this.isLoading=n)}enrollStudent(){this.dialog.open(ht.L,{data:{student:this.student,course:null}}).afterClosed().subscribe(()=>{this.getEnrollments()})}deleteEnrollment(n){T().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",heightAuto:!1}).then(o=>{o.isConfirmed&&(this.store.dispatch(F.c.deleteEnrollment({id:n,source:"student",sourceId:this.id})),T().fire({title:"Deleted!",icon:"success",confirmButtonText:"OK",heightAuto:!1,timer:1500,timerProgressBar:!0}))})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(_.gz),t.Y36(g.V),t.Y36(f.uw),t.Y36(l.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-student-detail"]],decls:3,vars:2,consts:[["class","loading",4,"ngIf","ngIfElse"],["detail",""],[1,"loading"],["color","accent"],[1,"example-card"],[1,"buttons"],["mat-flat-button","","color","accent",3,"click"],[2,"margin-top","1em"],["mat-table","",3,"dataSource"],["matColumnDef","course"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","startDate"],["matColumnDef","teacher"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["matTooltip","Delete","matTooltipPosition","after",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,i){if(1&o&&(t.YNc(0,gt,2,0,"div",0),t.YNc(1,At,29,11,"ng-template",null,1,t.W1O)),2&o){const s=t.MAs(2);t.Q6J("ngIf",i.isLoading)("ngIfElse",s)}},dependencies:[h.O5,C.a8,C.dn,C.dk,C.$j,C.n5,A.lW,E.Hw,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,L.gM,ft.d,M.Ou,h.JJ,h.uU,O.J],styles:["mat-card-header[_ngcontent-%COMP%]{display:flex;align-items:center}.buttons[_ngcontent-%COMP%]{position:absolute;right:3em;display:flex;flex-direction:column}.loading[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:100%}"]})}return e})()}];let Ft=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[_.Bz.forChild(Ut),_.Bz]})}return e})();var p=r(5154),Z=r(6328),b=r(7398),y=r(6306),v=r(2096);let Et=(()=>{class e{constructor(n,o){this.actions$=n,this.service=o,this.loadStudents$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(d.loadStudents),(0,Z.b)(()=>this.service.getStudents().pipe((0,b.U)(i=>d.loadStudentsSuccess({data:i})),(0,y.K)(i=>(0,v.of)(d.loadStudentsFailure({error:i}))))))),this.createStudent$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(d.createStudent),(0,Z.b)(i=>this.service.createStudent(i.payload).pipe((0,b.U)(()=>d.loadStudents()),(0,y.K)(s=>(0,v.of)(d.createStudentFailure({error:s}))))))),this.updateStudent$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(d.updateStudent),(0,Z.b)(i=>this.service.updateStudent(i.id,i.payload).pipe((0,b.U)(()=>d.loadStudents()),(0,y.K)(s=>(0,v.of)(d.updateStudentFailure({error:s}))))))),this.deleteStudent$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(d.deleteStudent),(0,Z.b)(i=>this.service.deleteStudent(i.id).pipe((0,b.U)(()=>d.loadStudents()),(0,y.K)(s=>(0,v.of)(d.deleteStudentFailure({error:s})))))))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(p.eX),t.LFG(g.V))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})(),Yt=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[h.ez,B.m,S.FA,Ft,l.Aw.forFeature(U,j.reducer),p.sQ.forFeature([Et])]})}return e})()}}]);