"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[2609],{1584:(y,f,c)=>{c.d(f,{O:()=>_});var u=c(1985),m=c(3236),e=c(9470);function _(r=0,n,i=m.b){let a=-1;return null!=n&&((0,e.m)(n)?i=n:a=n),new u.c(p=>{let h=function d(r){return r instanceof Date&&!isNaN(r)}(r)?+r-i.now():r;h<0&&(h=0);let E=0;return i.schedule(function(){p.closed||(p.next(E++),0<=a?this.schedule(void 0,a):p.complete())},h)})}},6780:(y,f,c)=>{c.d(f,{R:()=>_});var u=c(8359);class m extends u.yU{constructor(n,i){super()}schedule(n,i=0){return this}}const e={setInterval(r,n,...i){const{delegate:a}=e;return a?.setInterval?a.setInterval(r,n,...i):setInterval(r,n,...i)},clearInterval(r){const{delegate:n}=e;return(n?.clearInterval||clearInterval)(r)},delegate:void 0};var d=c(7908);class _ extends m{constructor(n,i){super(n,i),this.scheduler=n,this.work=i,this.pending=!1}schedule(n,i=0){var a;if(this.closed)return this;this.state=n;const p=this.id,h=this.scheduler;return null!=p&&(this.id=this.recycleAsyncId(h,p,i)),this.pending=!0,this.delay=i,this.id=null!==(a=this.id)&&void 0!==a?a:this.requestAsyncId(h,this.id,i),this}requestAsyncId(n,i,a=0){return e.setInterval(n.flush.bind(n,this),a)}recycleAsyncId(n,i,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return i;null!=i&&e.clearInterval(i)}execute(n,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(n,i);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,i){let p,a=!1;try{this.work(n)}catch(h){a=!0,p=h||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),p}unsubscribe(){if(!this.closed){const{id:n,scheduler:i}=this,{actions:a}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,d.o)(a,this),null!=n&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,super.unsubscribe()}}}},3604:(y,f,c)=>{c.d(f,{q:()=>e});const u={now:()=>(u.delegate||Date).now(),delegate:void 0};class m{constructor(_,r=m.now){this.schedulerActionCtor=_,this.now=r}schedule(_,r=0,n){return new this.schedulerActionCtor(this,_).schedule(n,r)}}m.now=u.now;class e extends m{constructor(_,r=m.now){super(_,r),this.actions=[],this._active=!1}flush(_){const{actions:r}=this;if(this._active)return void r.push(_);let n;this._active=!0;do{if(n=_.execute(_.state,_.delay))break}while(_=r.shift());if(this._active=!1,n){for(;_=r.shift();)_.unsubscribe();throw n}}}},3236:(y,f,c)=>{c.d(f,{E:()=>e,b:()=>d});var u=c(6780);const e=new(c(3604).q)(u.R),d=e},2609:(y,f,c)=>{c.d(f,{B:()=>B,h:()=>U});var u=c(9969),m=c(177),e=c(2598),d=c(5779),_=c(3306),r=c(9329),n=c(1962),i=c(1512),a=c(2816),p=c(563),h=c(1584);function E(t,g){if(1&t&&e.nrm(0,"span"),2&t){const s=e.XpG().$implicit;e.HbH("p-message-icon pi "+s.icon)}}function M(t,g){1&t&&e.nrm(0,"CheckIcon")}function T(t,g){1&t&&e.nrm(0,"InfoCircleIcon")}function b(t,g){1&t&&e.nrm(0,"TimesCircleIcon")}function D(t,g){1&t&&e.nrm(0,"ExclamationTriangleIcon")}function C(t,g){if(1&t&&(e.j41(0,"span",10),e.qex(1),e.DNE(2,M,1,0,"CheckIcon",11),e.DNE(3,T,1,0,"InfoCircleIcon",11),e.DNE(4,b,1,0,"TimesCircleIcon",11),e.DNE(5,D,1,0,"ExclamationTriangleIcon",11),e.bVm(),e.k0s()),2&t){const s=e.XpG().$implicit;e.R7$(2),e.Y8G("ngIf","success"===s.severity),e.R7$(1),e.Y8G("ngIf","info"===s.severity),e.R7$(1),e.Y8G("ngIf","error"===s.severity),e.R7$(1),e.Y8G("ngIf","warn"===s.severity)}}function O(t,g){if(1&t&&e.nrm(0,"span",14),2&t){const s=e.XpG(2).$implicit;e.Y8G("innerHTML",s.summary,e.npT)}}function R(t,g){if(1&t&&e.nrm(0,"span",15),2&t){const s=e.XpG(2).$implicit;e.Y8G("innerHTML",s.detail,e.npT)}}function x(t,g){if(1&t&&(e.qex(0),e.DNE(1,O,1,1,"span",12),e.DNE(2,R,1,1,"span",13),e.bVm()),2&t){const s=e.XpG().$implicit;e.R7$(1),e.Y8G("ngIf",s.summary),e.R7$(1),e.Y8G("ngIf",s.detail)}}function A(t,g){if(1&t&&(e.j41(0,"span",18),e.EFF(1),e.k0s()),2&t){const s=e.XpG(2).$implicit;e.R7$(1),e.JRh(s.summary)}}function G(t,g){if(1&t&&(e.j41(0,"span",19),e.EFF(1),e.k0s()),2&t){const s=e.XpG(2).$implicit;e.R7$(1),e.JRh(s.detail)}}function P(t,g){if(1&t&&(e.DNE(0,A,2,1,"span",16),e.DNE(1,G,2,1,"span",17)),2&t){const s=e.XpG().$implicit;e.Y8G("ngIf",s.summary),e.R7$(1),e.Y8G("ngIf",s.detail)}}function S(t,g){if(1&t){const s=e.RV6();e.j41(0,"button",20),e.bIt("click",function(){e.eBV(s);const o=e.XpG().index,v=e.XpG(2);return e.Njj(v.removeMessage(o))}),e.nrm(1,"TimesIcon",21),e.k0s()}2&t&&(e.R7$(1),e.Y8G("styleClass","p-message-close-icon"))}const k=function(t,g){return{showTransitionParams:t,hideTransitionParams:g}},w=function(t){return{value:"visible",params:t}};function $(t,g){if(1&t&&(e.j41(0,"div",4)(1,"div",5),e.DNE(2,E,1,2,"span",6),e.DNE(3,C,6,4,"span",7),e.DNE(4,x,3,2,"ng-container",1),e.DNE(5,P,2,2,"ng-template",null,8,e.C5r),e.DNE(7,S,2,1,"button",9),e.k0s()()),2&t){const s=g.$implicit,l=e.sdS(6),o=e.XpG(2);e.HbH("p-message p-message-"+s.severity),e.Y8G("@messageAnimation",e.eq3(11,w,e.l_i(8,k,o.showTransitionOptions,o.hideTransitionOptions))),e.R7$(2),e.Y8G("ngIf",s.icon),e.R7$(1),e.Y8G("ngIf",!s.icon),e.R7$(1),e.Y8G("ngIf",!o.escape)("ngIfElse",l),e.R7$(3),e.Y8G("ngIf",o.closable)}}function L(t,g){if(1&t&&(e.qex(0),e.DNE(1,$,8,13,"div",3),e.bVm()),2&t){const s=e.XpG();e.R7$(1),e.Y8G("ngForOf",s.messages)}}function Y(t,g){1&t&&e.eu8(0)}function N(t,g){if(1&t&&(e.j41(0,"div",22)(1,"div",5),e.DNE(2,Y,1,0,"ng-container",23),e.k0s()()),2&t){const s=e.XpG();e.Y8G("ngClass","p-message p-message-"+s.severity),e.R7$(2),e.Y8G("ngTemplateOutlet",s.contentTemplate)}}let B=(()=>{class t{messageService;el;cd;set value(s){this.messages=s,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new e.bkB;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(s,l,o){this.messageService=s,this.el=l,this.cd=o}ngAfterContentInit(){this.templates?.forEach(s=>{s.getType(),this.contentTemplate=s.template}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(s=>{if(s){Array.isArray(s)||(s=[s]);const l=s.filter(o=>this.key===o.key);this.messages=this.messages?[...this.messages,...l]:[...l],this.startMessageLifes(l),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(s=>{s?this.key===s&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let s=this.el.nativeElement.parentElement;return!(!s||!s.offsetParent)&&(null!=this.contentTemplate||this.messages&&this.messages.length>0)}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(s){this.messages=this.messages?.filter((l,o)=>o!==s),this.valueChange.emit(this.messages)}get icon(){const s=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(s){case"success":return"pi-check";case"info":default:return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle"}return null}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(s=>s.unsubscribe())}startMessageLifes(s){s?.forEach(l=>l.life&&this.startMessageLife(l))}startMessageLife(s){const l=(0,h.O)(s.life).subscribe(()=>{this.messages=this.messages?.filter(o=>o!==s),this.timerSubscriptions=this.timerSubscriptions?.filter(o=>o!==l),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(l)}static \u0275fac=function(l){return new(l||t)(e.rXU(d.bg,8),e.rXU(e.aKT),e.rXU(e.gRc))};static \u0275cmp=e.VBU({type:t,selectors:[["p-messages"]],contentQueries:function(l,o,v){if(1&l&&e.wni(v,d.Ei,4),2&l){let I;e.mGM(I=e.lsd())&&(o.templates=I)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:5,consts:[["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["staticMessage",""],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["escapeOut",""],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(l,o){if(1&l&&(e.j41(0,"div",0),e.DNE(1,L,2,1,"ng-container",1),e.DNE(2,N,3,2,"ng-template",null,2,e.C5r),e.k0s()),2&l){const v=e.sdS(3);e.HbH(o.styleClass),e.Y8G("ngStyle",o.style),e.R7$(1),e.Y8G("ngIf",!o.contentTemplate)("ngIfElse",v)}},dependencies:function(){return[m.YU,m.Sq,m.bT,m.T3,m.B3,p.n,_.S,n.e,a.I,r.P,i.A]},styles:[".p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,u.hZ)("messageAnimation",[(0,u.kY)(":enter",[(0,u.iF)({opacity:0,transform:"translateY(-25%)"}),(0,u.i0)("{{showTransitionParams}}")]),(0,u.kY)(":leave",[(0,u.i0)("{{hideTransitionParams}}",(0,u.iF)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),U=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[m.MD,p.Z,_.S,n.e,a.I,r.P,i.A]})}return t})()}}]);