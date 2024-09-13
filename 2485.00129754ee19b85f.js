"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[2485],{2485:(w,C,a)=>{a.r(C),a.d(C,{CheckoutFormModule:()=>E});var s=a(177),t=a(4341),k=a(4007),e=a(2598),x=a(5430),m=a(8150),f=a(2242),p=a(7480),v=a(1141),M=a(563);let F=(()=>{class c{constructor(){this.quantities=[1,1,1],this.value="",this.checked=!0,this.checked2=!0,this.cities=[{name:"USA / New York",code:"NY"},{name:"Italy / Rome",code:"RM"},{name:"United Kingdoom / London",code:"LDN"},{name:"Turkey / Istanbul",code:"IST"},{name:"France / Paris",code:"PRS"}],this.selectedCity=""}static#e=this.\u0275fac=function(h){return new(h||c)};static#t=this.\u0275cmp=e.VBU({type:c,selectors:[["ng-component"]],decls:86,vars:12,consts:[[1,"card"],[1,"grid","grid-nogutter"],[1,"col-12","px-4","mt-4","md:mt-6","md:px-6"],[1,"text-900","block","font-bold","text-xl"],[1,"col-12","lg:col-6","h-full","px-4","py-4","md:px-6"],[1,"flex","list-none","flex-wrap","p-0","mb-6"],[1,"flex","align-items-center","text-primary","mr-2"],[1,"pi","pi-chevron-right","text-500","text-xs","ml-2"],[1,"flex","align-items-center","text-500","mr-2"],[1,"grid","formgrid"],[1,"col-12","field","mb-6"],[1,"text-900","text-2xl","block","font-medium","mb-5"],["id","email","placeholder","Email","type","text",1,"p-inputtext","w-full","mb-4"],["name","checkbox-1","label","Email me with news and offers","inputId","id",1,"text-900",3,"ngModel","binary","ngModelChange"],[1,"col-12","field","mb-4"],["placeholder","Country / City","optionLabel","name","styleClass","w-full",3,"options","ngModel","showClear","ngModelChange"],[1,"col-12","lg:col-6","field","mb-4"],["id","name","placeholder","Name","type","text",1,"p-inputtext","w-full"],["id","lastname","placeholder","Last Name","type","text",1,"p-inputtext","w-full"],["id","address","placeholder","Address","type","text",1,"p-inputtext","w-full"],["id","address2","placeholder","Apartment, suite, etc","type","text",1,"p-inputtext","w-full"],["id","pc","placeholder","Postal Code","type","text",1,"p-inputtext","w-full"],["id","city","placeholder","City","type","text",1,"p-inputtext","w-full"],["name","checkbox-1","label","Save for next purchase","inputId","id",1,"text-900",3,"ngModel","binary","ngModelChange"],[1,"col-12","flex","flex-column","lg:flex-row","justify-content-center","align-items-center","lg:justify-content-end","my-6"],["pButton","","pRipple","","label","Return to Cart","icon","pi pi-fw pi-arrow-left",1,"p-button-secondary","p-button-outlined","mt-3","lg:mt-0","w-full","lg:w-auto","flex-order-2","lg:flex-order-1","lg:mr-4"],["pButton","","pRipple","","label","Continue to Shipping","icon","pi pi-fw pi-check",1,"p-button-primary","w-full","lg:w-auto","flex-order-1","lg:flex-order-2"],[1,"col-12","lg:col-6","px-4","py-4","md:px-6"],[1,"pb-3","surface-border"],[1,"text-900","font-medium","text-xl"],[1,"flex","flex-column","lg:flex-row","flex-wrap","lg:align-items-center","py-2","mt-3","surface-border"],["src","assets/demo/images/ecommerce/shop/shop-1.png","alt","product",1,"w-8rem","h-8rem","flex-shrink-0","mb-3"],[1,"flex-auto","lg:ml-3"],[1,"flex","align-items-center","justify-content-between","mb-3"],[1,"text-900","font-bold"],[1,"text-600","text-sm","mb-3"],[1,"flex","flex-auto","justify-content-between","align-items-center"],["buttonLayout","horizontal","spinnerMode","horizontal","inputStyleClass","w-2rem text-center py-2 px-1 border-transparent outline-none shadow-none","decrementButtonClass","p-button-text text-600 hover:text-primary py-1 px-1","incrementButtonClass","p-button-text text-600 hover:text-primary py-1 px-1","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",1,"border-1","surface-border","border-round",3,"showButtons","min","ngModel","ngModelChange"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-text","p-button-rounded"],[1,"py-2","mt-3","surface-border"],[1,"p-inputgroup","mb-3"],["type","text","pInputText","","placeholder","Promo code",1,"w-full",3,"ngModel","ngModelChange"],["type","button","pButton","","pRipple","","label","Apply",3,"disabled"],[1,"py-2","mt-3"],[1,"flex","justify-content-between","align-items-center","mb-3"],[1,"text-900","font-medium"],[1,"text-900"],[1,"text-primary","font-bold"],[1,"py-2","mt-3","bg-yellow-100","flex","align-items-center","justify-content-center","border-round"],["src","assets/demo/images/ecommerce/shop/flag.png","alt","Country Flag",1,"mr-2"],[1,"text-black-alpha-90","font-medium"]],template:function(h,r){1&h&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e.EFF(4,"Checkout"),e.k0s()(),e.j41(5,"div",4)(6,"ul",5)(7,"li",6),e.EFF(8,"Cart "),e.nrm(9,"i",7),e.k0s(),e.j41(10,"li",8),e.EFF(11,"Information"),e.nrm(12,"i",7),e.k0s(),e.j41(13,"li",8),e.EFF(14,"Shipping"),e.nrm(15,"i",7),e.k0s(),e.j41(16,"li",8),e.EFF(17,"Payment"),e.k0s()(),e.j41(18,"div",9)(19,"div",10)(20,"span",11),e.EFF(21,"Contact Information"),e.k0s(),e.nrm(22,"input",12),e.j41(23,"p-checkbox",13),e.bIt("ngModelChange",function(u){return r.checked=u}),e.k0s()(),e.j41(24,"div",14)(25,"span",11),e.EFF(26,"Shipping"),e.k0s(),e.j41(27,"p-dropdown",15),e.bIt("ngModelChange",function(u){return r.selectedCity=u}),e.k0s()(),e.j41(28,"div",16),e.nrm(29,"input",17),e.k0s(),e.j41(30,"div",16),e.nrm(31,"input",18),e.k0s(),e.j41(32,"div",14),e.nrm(33,"input",19),e.k0s(),e.j41(34,"div",14),e.nrm(35,"input",20),e.k0s(),e.j41(36,"div",16),e.nrm(37,"input",21),e.k0s(),e.j41(38,"div",16),e.nrm(39,"input",22),e.k0s(),e.j41(40,"div",16)(41,"p-checkbox",23),e.bIt("ngModelChange",function(u){return r.checked2=u}),e.k0s()(),e.j41(42,"div",24),e.nrm(43,"button",25)(44,"button",26),e.k0s()()(),e.j41(45,"div",27)(46,"div",28)(47,"span",29),e.EFF(48,"Your Cart"),e.k0s()(),e.j41(49,"div",30),e.nrm(50,"img",31),e.j41(51,"div",32)(52,"div",33)(53,"span",34),e.EFF(54,"Product Name"),e.k0s(),e.j41(55,"span",34),e.EFF(56,"$123.00"),e.k0s()(),e.j41(57,"div",35),e.EFF(58,"Black | Large"),e.k0s(),e.j41(59,"div",36)(60,"p-inputNumber",37),e.bIt("ngModelChange",function(u){return r.quantities[0]=u}),e.k0s(),e.nrm(61,"button",38),e.k0s()()(),e.j41(62,"div",39)(63,"div",40)(64,"input",41),e.bIt("ngModelChange",function(u){return r.value=u}),e.k0s(),e.nrm(65,"button",42),e.k0s()(),e.j41(66,"div",43)(67,"div",44)(68,"span",45),e.EFF(69,"Subtotal"),e.k0s(),e.j41(70,"span",46),e.EFF(71,"$123.00"),e.k0s()(),e.j41(72,"div",44)(73,"span",45),e.EFF(74,"Shipping"),e.k0s(),e.j41(75,"span",47),e.EFF(76,"Free"),e.k0s()(),e.j41(77,"div",44)(78,"span",34),e.EFF(79,"Total"),e.k0s(),e.j41(80,"span",29),e.EFF(81,"$123.00"),e.k0s()()(),e.j41(82,"div",48),e.nrm(83,"img",49),e.j41(84,"span",50),e.EFF(85,"No additional duties or taxes."),e.k0s()()()()()),2&h&&(e.R7$(23),e.Y8G("ngModel",r.checked)("binary",!0),e.R7$(4),e.Y8G("options",r.cities)("ngModel",r.selectedCity)("showClear",!0),e.R7$(14),e.Y8G("ngModel",r.checked2)("binary",!0),e.R7$(19),e.Y8G("showButtons",!0)("min",0)("ngModel",r.quantities[0]),e.R7$(4),e.Y8G("ngModel",r.value),e.R7$(1),e.Y8G("disabled",!r.value))},dependencies:[t.me,t.BC,t.vS,x.Sc,m.ms,f.S,p.YI,v._f,M.n],encapsulation:2})}return c})(),I=(()=>{class c{static#e=this.\u0275fac=function(h){return new(h||c)};static#t=this.\u0275mod=e.$C({type:c});static#n=this.\u0275inj=e.G2t({imports:[k.iI.forChild([{path:"",component:F}]),k.iI]})}return c})(),E=(()=>{class c{static#e=this.\u0275fac=function(h){return new(h||c)};static#t=this.\u0275mod=e.$C({type:c});static#n=this.\u0275inj=e.G2t({imports:[s.MD,I,t.YN,x.q4,m.kr,f.u,p.O3,v.tm,M.Z]})}return c})()},5430:(w,C,a)=>{a.d(C,{Sc:()=>u,q4:()=>B});var s=a(177),t=a(2598),k=a(4341),e=a(4420),x=a(5779),m=a(3306);const f=["cb"];function p(o,d){if(1&o&&t.nrm(0,"span",10),2&o){const n=t.XpG(3);t.Y8G("ngClass",n.checkboxIcon)}}function v(o,d){1&o&&t.nrm(0,"CheckIcon",11),2&o&&t.Y8G("styleClass","p-checkbox-icon")}function M(o,d){if(1&o&&(t.qex(0),t.DNE(1,p,1,1,"span",8),t.DNE(2,v,1,1,"CheckIcon",9),t.bVm()),2&o){const n=t.XpG(2);t.R7$(1),t.Y8G("ngIf",n.checkboxIcon),t.R7$(1),t.Y8G("ngIf",!n.checkboxIcon)}}function F(o,d){}function I(o,d){1&o&&t.DNE(0,F,0,0,"ng-template")}function E(o,d){if(1&o&&(t.j41(0,"span",12),t.DNE(1,I,1,0,null,13),t.k0s()),2&o){const n=t.XpG(2);t.R7$(1),t.Y8G("ngTemplateOutlet",n.checkboxIconTemplate)}}function c(o,d){if(1&o&&(t.qex(0),t.DNE(1,M,3,2,"ng-container",5),t.DNE(2,E,2,1,"span",7),t.bVm()),2&o){const n=t.XpG();t.R7$(1),t.Y8G("ngIf",!n.checkboxIconTemplate),t.R7$(1),t.Y8G("ngIf",n.checkboxIconTemplate)}}const T=function(o,d,n){return{"p-checkbox-label":!0,"p-checkbox-label-active":o,"p-disabled":d,"p-checkbox-label-focus":n}};function y(o,d){if(1&o){const n=t.RV6();t.j41(0,"label",14),t.bIt("click",function(l){t.eBV(n);const b=t.XpG(),g=t.sdS(3);return t.Njj(b.onClick(l,g,!0))}),t.EFF(1),t.k0s()}if(2&o){const n=t.XpG();t.HbH(n.labelStyleClass),t.Y8G("ngClass",t.sMw(5,T,n.checked(),n.disabled,n.focused)),t.BMQ("for",n.inputId),t.R7$(1),t.JRh(n.label)}}const h=function(o,d,n){return{"p-checkbox p-component":!0,"p-checkbox-checked":o,"p-checkbox-disabled":d,"p-checkbox-focused":n}},r=function(o,d,n){return{"p-highlight":o,"p-disabled":d,"p-focus":n}},_={provide:k.kq,useExisting:(0,t.Rfq)(()=>u),multi:!0};let u=(()=>{class o{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new t.bkB;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(n){this.cd=n}ngAfterContentInit(){this.templates.forEach(n=>{"icon"===n.getType()&&(this.checkboxIconTemplate=n.template)})}onClick(n,i,l){n.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(n),l&&i.focus())}updateModel(n){let i;this.binary?(i=this.checked()?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(i=this.checked()?this.model.filter(l=>!e.BF.equals(l,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this.onChange.emit({checked:i,originalEvent:n})}handleChange(n){this.readonly||this.updateModel(n)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeValue(n){this.model=n,this.cd.markForCheck()}registerOnChange(n){this.onModelChange=n}registerOnTouched(n){this.onModelTouched=n}setDisabledState(n){this.disabled=n,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:e.BF.contains(this.value,this.model)}static \u0275fac=function(i){return new(i||o)(t.rXU(t.gRc))};static \u0275cmp=t.VBU({type:o,selectors:[["p-checkbox"]],contentQueries:function(i,l,b){if(1&i&&t.wni(b,x.Ei,4),2&i){let g;t.mGM(g=t.lsd())&&(l.templates=g)}},viewQuery:function(i,l){if(1&i&&t.GBs(f,5),2&i){let b;t.mGM(b=t.lsd())&&(l.inputViewChild=b.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[t.Jv_([_])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(i,l){if(1&i){const b=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"input",2,3),t.bIt("focus",function(){return l.onFocus()})("blur",function(){return l.onBlur()})("change",function(j){return l.handleChange(j)}),t.k0s()(),t.j41(4,"div",4),t.bIt("click",function(j){t.eBV(b);const R=t.sdS(3);return t.Njj(l.onClick(j,R,!0))}),t.DNE(5,c,3,2,"ng-container",5),t.k0s()(),t.DNE(6,y,2,9,"label",6)}2&i&&(t.HbH(l.styleClass),t.Y8G("ngStyle",l.style)("ngClass",t.sMw(18,h,l.checked(),l.disabled,l.focused)),t.R7$(2),t.Y8G("readonly",l.readonly)("value",l.value)("checked",l.checked())("disabled",l.disabled),t.BMQ("id",l.inputId)("name",l.name)("tabindex",l.tabindex)("aria-labelledby",l.ariaLabelledBy)("aria-label",l.ariaLabel)("aria-checked",l.checked())("required",l.required),t.R7$(2),t.Y8G("ngClass",t.sMw(22,r,l.checked(),l.disabled,l.focused)),t.R7$(1),t.Y8G("ngIf",l.checked()),t.R7$(1),t.Y8G("ngIf",l.label))},dependencies:function(){return[s.YU,s.bT,s.T3,s.B3,m.S]},styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0})}return o})(),B=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=t.$C({type:o});static \u0275inj=t.G2t({imports:[s.MD,m.S,x.Gg]})}return o})()},3306:(w,C,a)=>{a.d(C,{S:()=>k});var s=a(2598),t=a(461);let k=(()=>{class e extends t.h{static \u0275fac=function(){let m;return function(p){return(m||(m=s.xGo(e)))(p||e)}}();static \u0275cmp=s.VBU({type:e,selectors:[["CheckIcon"]],standalone:!0,features:[s.Vt3,s.aNF],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(f,p){1&f&&(s.qSk(),s.j41(0,"svg",0),s.nrm(1,"path",1),s.k0s()),2&f&&(s.HbH(p.getClassNames()),s.BMQ("aria-label",p.ariaLabel)("aria-hidden",p.ariaHidden)("role",p.role))},encapsulation:2})}return e})()}}]);