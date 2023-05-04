"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[483],{7483:(Ln,he,l)=>{l.r(he),l.d(he,{AdminModule:()=>Pn});var _=l(4755),r=l(3020),vt=l(2076),Vt=l(9751),Ct=l(4742),At=l(8421),Dt=l(7669),bt=l(5403),Mt=l(3268),Ft=l(1810),q=l(4004);let fe=(()=>{class n{constructor(e,o){this._renderer=e,this._elementRef=o,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq))},n.\u0275dir=r.lG2({type:n}),n})(),y=(()=>{class n extends fe{}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})();const h=new r.OlP("NgValueAccessor"),Nt={provide:h,useExisting:(0,r.Gpc)(()=>O),multi:!0},St=new r.OlP("CompositionEventMode");let O=(()=>{class n extends fe{constructor(e,o,i){super(e,o),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ot(){const n=(0,_.q)()?(0,_.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(St,8))},n.\u0275dir=r.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){1&e&&r.NdJ("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[r._Bn([Nt]),r.qOj]}),n})();function p(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function me(n){return null!=n&&"number"==typeof n.length}const u=new r.OlP("NgValidators"),m=new r.OlP("NgAsyncValidators"),Bt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class ge{static min(t){return function _e(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function ye(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function ve(n){return p(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function Ve(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ce(n){return p(n.value)||Bt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Ae(n){return t=>p(t.value)||!me(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function De(n){return t=>me(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function be(n){if(!n)return S;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),o=>{if(p(o.value))return null;const i=o.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return Oe(t)}static composeAsync(t){return Se(t)}}function S(n){return null}function Me(n){return null!=n}function Fe(n){return(0,r.QGY)(n)?(0,vt.D)(n):n}function Ee(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function we(n,t){return t.map(e=>e(n))}function Ne(n){return n.map(t=>function Gt(n){return!n.validate}(t)?t:e=>t.validate(e))}function Oe(n){if(!n)return null;const t=n.filter(Me);return 0==t.length?null:function(e){return Ee(we(e,t))}}function Y(n){return null!=n?Oe(Ne(n)):null}function Se(n){if(!n)return null;const t=n.filter(Me);return 0==t.length?null:function(e){return function Et(...n){const t=(0,Dt.jO)(n),{args:e,keys:o}=(0,Ct.D)(n),i=new Vt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let V=a,D=a;for(let j=0;j<a;j++){let de=!1;(0,At.Xf)(e[j]).subscribe((0,bt.x)(s,Hn=>{de||(de=!0,D--),d[j]=Hn},()=>V--,void 0,()=>{(!V||!de)&&(D||s.next(o?(0,Ft.n)(o,d):d),s.complete())}))}});return t?i.pipe((0,Mt.Z)(t)):i}(we(e,t).map(Fe)).pipe((0,q.U)(Ee))}}function $(n){return null!=n?Se(Ne(n)):null}function Be(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ge(n){return n._rawValidators}function Ie(n){return n._rawAsyncValidators}function Z(n){return n?Array.isArray(n)?n:[n]:[]}function B(n,t){return Array.isArray(n)?n.includes(t):n===t}function ke(n,t){const e=Z(t);return Z(n).forEach(i=>{B(e,i)||e.push(i)}),e}function xe(n,t){return Z(t).filter(e=>!B(n,e))}class Te{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Y(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=$(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends Te{get formDirective(){return null}get path(){return null}}class g extends Te{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Re{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ue=(()=>{class n extends Re{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(g,2))},n.\u0275dir=r.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){2&e&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[r.qOj]}),n})(),Pe=(()=>{class n extends Re{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(c,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,o){2&e&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[r.qOj]}),n})();const b="VALID",I="INVALID",C="PENDING",M="DISABLED";function J(n){return(k(n)?n.validators:n)||null}function Q(n,t){return(k(t)?t.asyncValidators:n)||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Le(n,t,e){const o=n.controls;if(!(t?Object.keys(o):o).length)throw new r.vHH(1e3,"");if(!o[e])throw new r.vHH(1001,"")}function je(n,t,e){n._forEachChild((o,i)=>{if(void 0===e[i])throw new r.vHH(1002,"")})}class X{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===I}get pending(){return this.status==C}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ke(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ke(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(xe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(xe(t,this._rawAsyncValidators))}hasValidator(t){return B(this._rawValidators,t)}hasAsyncValidator(t){return B(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(o=>{o.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this._forEachChild(o=>{o.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Fe(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((o,i)=>o&&o._find(i),this)}getError(t,e){const o=e?this.get(e):this;return o&&o.errors?o.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(I)?I:b}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){k(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Tt(n){return Array.isArray(n)?Y(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Rt(n){return Array.isArray(n)?$(n):n||null}(this._rawAsyncValidators)}}class x extends X{constructor(t,e,o){super(J(e),Q(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,o={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,o={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){je(this,0,t),Object.keys(t).forEach(o=>{Le(this,!0,o),this.controls[o].setValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(o=>{const i=this.controls[o];i&&i.patchValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,o)=>(t[o]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,o)=>!!o._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const o=this.controls[e];o&&t(o,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,o]of Object.entries(this.controls))if(this.contains(e)&&t(o))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,o,i)=>((o.enabled||this.disabled)&&(e[i]=o.value),e))}_reduceChildren(t,e){let o=t;return this._forEachChild((i,s)=>{o=e(o,i,s)}),o}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const A=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>T}),T="always";function R(n,t){return[...t.path,n]}function F(n,t,e=T){K(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function Ht(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&qe(n,t)})}(n,t),function jt(n,t){const e=(o,i)=>{t.valueAccessor.writeValue(o),i&&t.viewToModelUpdate(o)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Lt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&qe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Pt(n,t){if(t.valueAccessor.setDisabledState){const e=o=>{t.valueAccessor.setDisabledState(o)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function U(n,t,e=!0){const o=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(o),t.valueAccessor.registerOnTouched(o)),H(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function P(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function K(n,t){const e=Ge(n);null!==t.validator?n.setValidators(Be(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const o=Ie(n);null!==t.asyncValidator?n.setAsyncValidators(Be(o,t.asyncValidator)):"function"==typeof o&&n.setAsyncValidators([o]);const i=()=>n.updateValueAndValidity();P(t._rawValidators,i),P(t._rawAsyncValidators,i)}function H(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Ge(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Ie(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const o=()=>{};return P(t._rawValidators,o),P(t._rawAsyncValidators,o),e}function qe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ze(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function We(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const f=class extends X{constructor(t=null,e,o){super(J(e),Q(o,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=We(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(o=>o(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ze(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ze(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){We(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let ze=(()=>{class n extends c{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return R(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})(),Ke=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();const re=new r.OlP("NgModelWithFormControlWarning"),on={provide:c,useExisting:(0,r.Gpc)(()=>w)};let w=(()=>{class n extends c{constructor(e,o,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(e),this._setAsyncValidators(o)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(H(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const o=this.form.get(e.path);return F(o,e,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),o}getControl(e){return this.form.get(e.path)}removeControl(e){U(e.control||null,e,!1),function Zt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,o){this.form.get(e.path).setValue(o)}onSubmit(e){return this.submitted=!0,function $e(n,t){n._syncPendingControls(),t.forEach(e=>{const o=e.control;"submit"===o.updateOn&&o._pendingChange&&(e.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const o=e.control,i=this.form.get(e.path);o!==i&&(U(o||null,e),(n=>n instanceof f)(i)&&(F(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const o=this.form.get(e.path);(function Ye(n,t){K(n,t)})(o,e),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const o=this.form.get(e.path);o&&function qt(n,t){return H(n,t)}(o,e)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){K(this.form,this),this._oldForm&&H(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(u,10),r.Y36(m,10),r.Y36(A,8))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,o){1&e&&r.NdJ("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([on]),r.qOj,r.TTD]}),n})();const rn={provide:c,useExisting:(0,r.Gpc)(()=>ie)};let ie=(()=>{class n extends ze{constructor(e,o,i){super(),this.name=null,this._parent=e,this._setValidators(o),this._setAsyncValidators(i)}_checkParentType(){it(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(c,13),r.Y36(u,10),r.Y36(m,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[r._Bn([rn]),r.qOj]}),n})();const sn={provide:c,useExisting:(0,r.Gpc)(()=>L)};let L=(()=>{class n extends c{constructor(e,o,i){super(),this.name=null,this._parent=e,this._setValidators(o),this._setAsyncValidators(i)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return R(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){it(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(c,13),r.Y36(u,10),r.Y36(m,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[r._Bn([sn]),r.qOj]}),n})();function it(n){return!(n instanceof ie||n instanceof w||n instanceof L)}const an={provide:g,useExisting:(0,r.Gpc)(()=>se)};let se=(()=>{class n extends g{set isDisabled(e){}constructor(e,o,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new r.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=function ne(n,t){if(!t)return null;let e,o,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function $t(n){return Object.getPrototypeOf(n.constructor)===y}(s)?o=s:i=s}),i||o||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function te(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return R(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(r.Y36(c,13),r.Y36(u,10),r.Y36(m,10),r.Y36(h,10),r.Y36(re,8))},n.\u0275dir=r.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r._Bn([an]),r.qOj,r.TTD]}),n})(),An=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[tt]}),n})();class _t extends X{constructor(t,e,o){super(J(e),Q(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,o={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(t,e={}){let o=this._adjustIndex(t);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,o={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){je(this,0,t),t.forEach((o,i)=>{Le(this,!1,i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,o)=>!!o._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,o)=>{t(e,o)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}}let bn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:re,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:A,useValue:e.callSetDisabledState??T}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[An]}),n})();var N=l(5592),ce=l(6384);let Mn=(()=>{class n{constructor(e){this.service=e}isbnExists(){return e=>this.service.check(e.value).pipe((0,q.U)(o=>o?{isbnexists:!0}:null))}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(ce.T))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Fn=function(n){if(!n.value||"string"!=typeof n.value)return null;const e=n.value.replace(/-/g,"").length;return 10===e||13===e?null:{isbnformat:!0}},En=function(n){return!(n=>n instanceof _t)(n)||n.controls.some(t=>!!t.value)?null:{atleastonevalue:!0}};let wn=(()=>{class n{constructor(e,o){this.renderer=e,this.elementRef=o,this.onInput=i=>{const s=i?new Date(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()):null,a=s?s.toISOString():null;this.onChange(a)},this.onChange=()=>{},this.onTouched=()=>{}}writeValue(e){const o=e?new Date(e):null,i=o?new Date(Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())):null;this.renderer.setProperty(this.elementRef.nativeElement,"valueAsDate",i)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq))},n.\u0275dir=r.lG2({type:n,selectors:[["","useValueAsLocalIso",""]],hostBindings:function(e,o){1&e&&r.NdJ("input",function(s){return o.onInput(s.target.valueAsDate)})("blur",function(){return o.onTouched()})},standalone:!0,features:[r._Bn([{provide:h,useExisting:(0,r.Gpc)(()=>n),multi:!0}])]}),n})();function Nn(n,t){if(1&n&&(r.TgZ(0,"p",1),r._uU(1),r.qZA()),2&n){const e=t.$implicit;r.xp6(1),r.hij(" ",e,"\n")}}let On=(()=>{class n{constructor(e){this.form=e,this.messages={}}get errors(){if(!this.controlName)return[];const e=this.form.control.get(this.controlName);return e&&e.errors&&e.touched?Object.keys(e.errors).map(o=>this.messages[o]):[]}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(w))},n.\u0275cmp=r.Xpm({type:n,selectors:[["bm-form-errors"]],inputs:{controlName:"controlName",messages:"messages"},decls:1,vars:1,consts:[["class","error",4,"ngFor","ngForOf"],[1,"error"]],template:function(e,o){1&e&&r.YNc(0,Nn,2,1,"p",0),2&e&&r.Q6J("ngForOf",o.errors)},dependencies:[_.sg]}),n})();function Sn(n,t){if(1&n&&r._UZ(0,"input",20),2&n){const e=t.index;r.Q6J("formControlName",e),r.uIk("aria-label","Author "+e)}}const Bn=function(){return{required:"Title is required"}},Gn=function(){return{required:"ISBN is required",isbnformat:"ISBN must have 10 or 13 chars",isbnexists:"ISBN already exists"}},In=function(){return{atleastonevalue:"At least one author required"}};let yt=(()=>{class n{constructor(){this.submitBook=new r.vpe,this.form=new x({title:new f("",{nonNullable:!0,validators:ge.required}),subtitle:new f("",{nonNullable:!0}),isbn:new f("",{nonNullable:!0,validators:[ge.required,Fn],asyncValidators:(0,r.f3M)(Mn).isbnExists()}),description:new f("",{nonNullable:!0}),published:new f("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new f("",{nonNullable:!0})})}ngOnChanges(){this.book?(this.setFormValues(this.book),this.setEditMode(!0)):this.setEditMode(!1)}setFormValues(e){this.form.patchValue(e),this.form.setControl("authors",this.buildAuthorsArray(e.authors))}setEditMode(e){const o=this.form.controls.isbn;e?o.disable():o.enable()}buildAuthorsArray(e){return new _t(e.map(o=>new f(o,{nonNullable:!0})),En)}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new f("",{nonNullable:!0}))}submitForm(){const e=this.form.getRawValue(),o=e.authors.filter(s=>!!s),i={...e,authors:o};this.submitBook.emit(i)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["bm-book-form"]],inputs:{book:"book"},outputs:{submitBook:"submitBook"},features:[r.TTD],decls:30,vars:9,consts:[[3,"formGroup","ngSubmit"],["for","title"],["id","title","formControlName","title"],["controlName","title",3,"messages"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["controlName","isbn",3,"messages"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName",4,"ngFor","ngForOf"],["controlName","authors",3,"messages"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"],[3,"formControlName"]],template:function(e,o){1&e&&(r.TgZ(0,"form",0),r.NdJ("ngSubmit",function(){return o.submitForm()}),r.TgZ(1,"label",1),r._uU(2,"Title"),r.qZA(),r._UZ(3,"input",2)(4,"bm-form-errors",3),r.TgZ(5,"label",4),r._uU(6,"Subtitle"),r.qZA(),r._UZ(7,"input",5),r.TgZ(8,"label",6),r._uU(9,"ISBN"),r.qZA(),r._UZ(10,"input",7)(11,"bm-form-errors",8),r.TgZ(12,"label"),r._uU(13,"Authors"),r.qZA(),r.TgZ(14,"button",9),r.NdJ("click",function(){return o.addAuthorControl()}),r._uU(15," + Author "),r.qZA(),r.TgZ(16,"fieldset",10),r.YNc(17,Sn,1,2,"input",11),r.qZA(),r._UZ(18,"bm-form-errors",12),r.TgZ(19,"label",13),r._uU(20,"Description"),r.qZA(),r._UZ(21,"textarea",14),r.TgZ(22,"label",15),r._uU(23,"Published"),r.qZA(),r._UZ(24,"input",16),r.TgZ(25,"label",17),r._uU(26,"Thumbnail URL"),r.qZA(),r._UZ(27,"input",18),r.TgZ(28,"button",19),r._uU(29," Save "),r.qZA()()),2&e&&(r.Q6J("formGroup",o.form),r.xp6(4),r.Q6J("messages",r.DdM(6,Bn)),r.xp6(7),r.Q6J("messages",r.DdM(7,Gn)),r.xp6(6),r.Q6J("ngForOf",o.authors.controls),r.xp6(1),r.Q6J("messages",r.DdM(8,In)),r.xp6(10),r.Q6J("disabled",o.form.invalid))},dependencies:[_.sg,Ke,O,Ue,Pe,w,se,L,wn,On]}),n})(),kn=(()=>{class n{constructor(e,o){this.service=e,this.router=o}create(e){this.service.create(e).subscribe(o=>{this.router.navigate(["/books",o.isbn])})}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(ce.T),r.Y36(N.F0))},n.\u0275cmp=r.Xpm({type:n,selectors:[["bm-book-create"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(e,o){1&e&&(r.TgZ(0,"h1"),r._uU(1,"Create Book"),r.qZA(),r.TgZ(2,"bm-book-form",0),r.NdJ("submitBook",function(s){return o.create(s)}),r.qZA())},dependencies:[yt]}),n})();var xn=l(3900);function Tn(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"bm-book-form",1),r.NdJ("submitBook",function(i){r.CHM(e);const s=r.oxw();return r.KtG(s.update(i))}),r.qZA()}2&n&&r.Q6J("book",t.ngIf)}const Rn=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:kn},{path:"edit/:isbn",component:(()=>{class n{constructor(e,o,i){this.service=e,this.route=o,this.router=i,this.book$=this.route.paramMap.pipe((0,q.U)(s=>s.get("isbn")),(0,xn.w)(s=>this.service.getSingle(s)))}update(e){this.service.update(e).subscribe(o=>{this.router.navigate(["/books",o.isbn])})}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(ce.T),r.Y36(N.gz),r.Y36(N.F0))},n.\u0275cmp=r.Xpm({type:n,selectors:[["bm-book-edit"]],decls:4,vars:3,consts:[[3,"book","submitBook",4,"ngIf"],[3,"book","submitBook"]],template:function(e,o){1&e&&(r.TgZ(0,"h1"),r._uU(1,"Edit Book"),r.qZA(),r.YNc(2,Tn,1,1,"bm-book-form",0),r.ALo(3,"async")),2&e&&(r.xp6(2),r.Q6J("ngIf",r.lcZ(3,1,o.book$)))},dependencies:[_.O5,yt,_.Ov]}),n})()}];let Un=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[N.Bz.forChild(Rn),N.Bz]}),n})(),Pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[_.ez,Un,bn]}),n})()}}]);