"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[746],{2746:(Wn,Ve,l)=>{l.r(Ve),l.d(Ve,{AdminModule:()=>W});var _=l(6895),o=l(8256),Ft=l(2076),Et=l(9751),wt=l(4742),Nt=l(8421),Ot=l(7669),St=l(5403),Bt=l(3268),It=l(1810),J=l(4004);let Ce=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),y=(()=>{class n extends Ce{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Tt={provide:h,useExisting:(0,o.Gpc)(()=>B),multi:!0},Rt=new o.OlP("CompositionEventMode");let B=(()=>{class n extends Ce{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function kt(){const n=(0,_.q)()?(0,_.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Rt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Tt]),o.qOj]}),n})();function p(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function De(n){return null!=n&&"number"==typeof n.length}const u=new o.OlP("NgValidators"),m=new o.OlP("NgAsyncValidators"),Pt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class be{static min(t){return function Me(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function Fe(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function Ee(n){return p(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function we(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ne(n){return p(n.value)||Pt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Oe(n){return t=>p(t.value)||!De(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function Se(n){return t=>De(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Be(n){if(!n)return I;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(p(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return Re(t)}static composeAsync(t){return Ue(t)}}function I(n){return null}function Ie(n){return null!=n}function Ge(n){return(0,o.QGY)(n)?(0,Ft.D)(n):n}function xe(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Te(n,t){return t.map(e=>e(n))}function ke(n){return n.map(t=>function Ht(n){return!n.validate}(t)?t:e=>t.validate(e))}function Re(n){if(!n)return null;const t=n.filter(Ie);return 0==t.length?null:function(e){return xe(Te(e,t))}}function Q(n){return null!=n?Re(ke(n)):null}function Ue(n){if(!n)return null;const t=n.filter(Ie);return 0==t.length?null:function(e){return function Gt(...n){const t=(0,Ot.jO)(n),{args:e,keys:r}=(0,wt.D)(n),i=new Et.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let V=a,A=a;for(let z=0;z<a;z++){let ve=!1;(0,Nt.Xf)(e[z]).subscribe((0,St.x)(s,Zn=>{ve||(ve=!0,A--),d[z]=Zn},()=>V--,void 0,()=>{(!V||!ve)&&(A||s.next(r?(0,It.n)(r,d):d),s.complete())}))}});return t?i.pipe((0,Bt.Z)(t)):i}(Te(e,t).map(Ge)).pipe((0,J.U)(xe))}}function X(n){return null!=n?Ue(ke(n)):null}function Pe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function He(n){return n._rawValidators}function Le(n){return n._rawAsyncValidators}function K(n){return n?Array.isArray(n)?n:[n]:[]}function G(n,t){return Array.isArray(n)?n.includes(t):n===t}function je(n,t){const e=K(t);return K(n).forEach(i=>{G(e,i)||e.push(i)}),e}function qe(n,t){return K(t).filter(e=>!G(n,e))}class Ye{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Q(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=X(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends Ye{get formDirective(){return null}get path(){return null}}class g extends Ye{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class $e{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ze=(()=>{class n extends $e{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(g,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),We=(()=>{class n extends $e{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const D="VALID",T="INVALID",C="PENDING",b="DISABLED";function re(n){return(k(n)?n.validators:n)||null}function oe(n,t){return(k(t)?t.asyncValidators:n)||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Je(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function Qe(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})}class ie{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===T}get pending(){return this.status==C}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(je(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(je(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(qe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(qe(t,this._rawAsyncValidators))}hasValidator(t){return G(this._rawValidators,t)}hasAsyncValidator(t){return G(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Ge(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(T)?T:D}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){k(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Wt(n){return Array.isArray(n)?Q(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function zt(n){return Array.isArray(n)?X(n):n||null}(this._rawAsyncValidators)}}class R extends ie{constructor(t,e,r){super(re(e),oe(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Qe(this,0,t),Object.keys(t).forEach(r=>{Je(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const M=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function U(n,t){return[...t.path,n]}function F(n,t,e=se){ae(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function Xt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Xe(n,t)})}(n,t),function en(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Kt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Xe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Qt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function P(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),L(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function H(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ae(n,t){const e=He(n);null!==t.validator?n.setValidators(Pe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Le(n);null!==t.asyncValidator?n.setAsyncValidators(Pe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();H(t._rawValidators,i),H(t._rawAsyncValidators,i)}function L(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=He(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Le(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return H(t._rawValidators,r),H(t._rawAsyncValidators,r),e}function Xe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function tt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function nt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const f=class extends ie{constructor(t=null,e,r){super(re(e),oe(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=nt(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){tt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){tt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){nt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let rt=(()=>{class n extends c{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return U(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const he=new o.OlP("NgModelWithFormControlWarning"),mn={provide:c,useExisting:(0,o.Gpc)(()=>w)};let w=(()=>{class n extends c{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(L(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return F(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){P(e.control||null,e,!1),function on(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function et(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(P(r||null,e),(n=>n instanceof f)(i)&&(F(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function Ke(n,t){ae(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function tn(n,t){return L(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ae(this.form,this),this._oldForm&&L(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(m,10),o.Y36(M,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([mn]),o.qOj,o.TTD]}),n})();const gn={provide:c,useExisting:(0,o.Gpc)(()=>fe)};let fe=(()=>{class n extends rt{constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_checkParentType(){ft(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,13),o.Y36(u,10),o.Y36(m,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[o._Bn([gn]),o.qOj]}),n})();const _n={provide:c,useExisting:(0,o.Gpc)(()=>j)};let j=(()=>{class n extends c{constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return U(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){ft(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,13),o.Y36(u,10),o.Y36(m,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[o._Bn([_n]),o.qOj]}),n})();function ft(n){return!(n instanceof fe||n instanceof w||n instanceof j)}const yn={provide:g,useExisting:(0,o.Gpc)(()=>pe)};let pe=(()=>{class n extends g{constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function ce(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===B?e=s:function rn(n){return Object.getPrototypeOf(n.constructor)===y}(s)?r=s:i=s}),i||r||e||null}(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),function ue(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return U(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(c,13),o.Y36(u,10),o.Y36(m,10),o.Y36(h,10),o.Y36(he,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([yn]),o.qOj,o.TTD]}),n})(),In=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ut]}),n})(),Gn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:he,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:M,useValue:e.callSetDisabledState??se}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[In]}),n})();class Mt extends ie{constructor(t,e,r){super(re(e),oe(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Qe(this,0,t),t.forEach((r,i)=>{Je(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}}var N=l(6158),ye=l(6384);class O{constructor(t){this.service=t}isbnExists(){return t=>this.service.check(t.value).pipe((0,J.U)(e=>e?{isbnexists:!0}:null))}static#e=this.\u0275fac=function(e){return new(e||O)(o.LFG(ye.T))};static#t=this.\u0275prov=o.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"})}const Tn=function(n){if(!n.value||"string"!=typeof n.value)return null;const e=n.value.replace(/-/g,"").length;return 10===e||13===e?null:{isbnformat:!0}},kn=function(n){return!(n=>n instanceof Mt)(n)||n.controls.some(t=>!!t.value)?null:{atleastonevalue:!0}};let Rn=(()=>{class n{constructor(e,r){this.renderer=e,this.elementRef=r,this.onInput=i=>{const s=i?new Date(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()):null,a=s?s.toISOString():null;this.onChange(a)},this.onChange=()=>{},this.onTouched=()=>{}}writeValue(e){const r=e?new Date(e):null,i=r?new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate())):null;this.renderer.setProperty(this.elementRef.nativeElement,"valueAsDate",i)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n,selectors:[["","useValueAsLocalIso",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onInput(s.target.valueAsDate)})("blur",function(){return r.onTouched()})},standalone:!0,features:[o._Bn([{provide:h,useExisting:(0,o.Gpc)(()=>n),multi:!0}])]}),n})();function Un(n,t){if(1&n&&(o.TgZ(0,"p",1),o._uU(1),o.qZA()),2&n){const e=t.$implicit;o.xp6(1),o.hij(" ",e,"\n")}}class q{constructor(t){this.form=t,this.messages={}}get errors(){if(!this.controlName)return[];const t=this.form.control.get(this.controlName);return t&&t.errors&&t.touched?Object.keys(t.errors).map(e=>this.messages[e]):[]}static#e=this.\u0275fac=function(e){return new(e||q)(o.Y36(w))};static#t=this.\u0275cmp=o.Xpm({type:q,selectors:[["bm-form-errors"]],inputs:{controlName:"controlName",messages:"messages"},decls:1,vars:1,consts:[["class","error",4,"ngFor","ngForOf"],[1,"error"]],template:function(e,r){1&e&&o.YNc(0,Un,2,1,"p",0),2&e&&o.Q6J("ngForOf",r.errors)},dependencies:[_.sg]})}function Pn(n,t){if(1&n&&o._UZ(0,"input",20),2&n){const e=t.index;o.Q6J("formControlName",e),o.uIk("aria-label","Author "+e)}}const Hn=function(){return{required:"Title is required"}},Ln=function(){return{required:"ISBN is required",isbnformat:"ISBN must have 10 or 13 chars",isbnexists:"ISBN already exists"}},jn=function(){return{atleastonevalue:"At least one author required"}};class S{constructor(){this.submitBook=new o.vpe,this.form=new R({title:new f("",{nonNullable:!0,validators:be.required}),subtitle:new f("",{nonNullable:!0}),isbn:new f("",{nonNullable:!0,validators:[be.required,Tn],asyncValidators:(0,o.f3M)(O).isbnExists()}),description:new f("",{nonNullable:!0}),published:new f("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new f("",{nonNullable:!0})})}ngOnChanges(){this.book?(this.setFormValues(this.book),this.setEditMode(!0)):this.setEditMode(!1)}setFormValues(t){this.form.patchValue(t),this.form.setControl("authors",this.buildAuthorsArray(t.authors))}setEditMode(t){const e=this.form.controls.isbn;t?e.disable():e.enable()}buildAuthorsArray(t){return new Mt(t.map(e=>new f(e,{nonNullable:!0})),kn)}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new f("",{nonNullable:!0}))}submitForm(){const t=this.form.getRawValue(),e=t.authors.filter(i=>!!i),r={...t,authors:e};this.submitBook.emit(r)}static#e=this.\u0275fac=function(e){return new(e||S)};static#t=this.\u0275cmp=o.Xpm({type:S,selectors:[["bm-book-form"]],inputs:{book:"book"},outputs:{submitBook:"submitBook"},features:[o.TTD],decls:30,vars:9,consts:[[3,"formGroup","ngSubmit"],["for","title"],["id","title","formControlName","title"],["controlName","title",3,"messages"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["controlName","isbn",3,"messages"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName",4,"ngFor","ngForOf"],["controlName","authors",3,"messages"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"],[3,"formControlName"]],template:function(e,r){1&e&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return r.submitForm()}),o.TgZ(1,"label",1),o._uU(2,"Title"),o.qZA(),o._UZ(3,"input",2)(4,"bm-form-errors",3),o.TgZ(5,"label",4),o._uU(6,"Subtitle"),o.qZA(),o._UZ(7,"input",5),o.TgZ(8,"label",6),o._uU(9,"ISBN"),o.qZA(),o._UZ(10,"input",7)(11,"bm-form-errors",8),o.TgZ(12,"label"),o._uU(13,"Authors"),o.qZA(),o.TgZ(14,"button",9),o.NdJ("click",function(){return r.addAuthorControl()}),o._uU(15," + Author "),o.qZA(),o.TgZ(16,"fieldset",10),o.YNc(17,Pn,1,2,"input",11),o.qZA(),o._UZ(18,"bm-form-errors",12),o.TgZ(19,"label",13),o._uU(20,"Description"),o.qZA(),o._UZ(21,"textarea",14),o.TgZ(22,"label",15),o._uU(23,"Published"),o.qZA(),o._UZ(24,"input",16),o.TgZ(25,"label",17),o._uU(26,"Thumbnail URL"),o.qZA(),o._UZ(27,"input",18),o.TgZ(28,"button",19),o._uU(29," Save "),o.qZA()()),2&e&&(o.Q6J("formGroup",r.form),o.xp6(4),o.Q6J("messages",o.DdM(6,Hn)),o.xp6(7),o.Q6J("messages",o.DdM(7,Ln)),o.xp6(6),o.Q6J("ngForOf",r.authors.controls),o.xp6(1),o.Q6J("messages",o.DdM(8,jn)),o.xp6(10),o.Q6J("disabled",r.form.invalid))},dependencies:[_.sg,at,B,Ze,We,w,pe,j,Rn,q]})}class Y{constructor(t,e){this.service=t,this.router=e}create(t){this.service.create(t).subscribe(e=>{this.router.navigate(["/books",e.isbn])})}static#e=this.\u0275fac=function(e){return new(e||Y)(o.Y36(ye.T),o.Y36(N.F0))};static#t=this.\u0275cmp=o.Xpm({type:Y,selectors:[["bm-book-create"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(e,r){1&e&&(o.TgZ(0,"h1"),o._uU(1,"Create Book"),o.qZA(),o.TgZ(2,"bm-book-form",0),o.NdJ("submitBook",function(s){return r.create(s)}),o.qZA())},dependencies:[S]})}var qn=l(3900);function Yn(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"bm-book-form",1),o.NdJ("submitBook",function(i){o.CHM(e);const s=o.oxw();return o.KtG(s.update(i))}),o.qZA()}2&n&&o.Q6J("book",t.ngIf)}class ${constructor(t,e,r){this.service=t,this.route=e,this.router=r,this.book$=this.route.paramMap.pipe((0,J.U)(i=>i.get("isbn")),(0,qn.w)(i=>this.service.getSingle(i)))}update(t){this.service.update(t).subscribe(e=>{this.router.navigate(["/books",e.isbn])})}static#e=this.\u0275fac=function(e){return new(e||$)(o.Y36(ye.T),o.Y36(N.gz),o.Y36(N.F0))};static#t=this.\u0275cmp=o.Xpm({type:$,selectors:[["bm-book-edit"]],decls:4,vars:3,consts:[[3,"book","submitBook",4,"ngIf"],[3,"book","submitBook"]],template:function(e,r){1&e&&(o.TgZ(0,"h1"),o._uU(1,"Edit Book"),o.qZA(),o.YNc(2,Yn,1,1,"bm-book-form",0),o.ALo(3,"async")),2&e&&(o.xp6(2),o.Q6J("ngIf",o.lcZ(3,1,r.book$)))},dependencies:[_.O5,S,_.Ov]})}const $n=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:Y},{path:"edit/:isbn",component:$}];class Z{static#e=this.\u0275fac=function(e){return new(e||Z)};static#t=this.\u0275mod=o.oAB({type:Z});static#n=this.\u0275inj=o.cJS({imports:[N.Bz.forChild($n),N.Bz]})}class W{static#e=this.\u0275fac=function(e){return new(e||W)};static#t=this.\u0275mod=o.oAB({type:W});static#n=this.\u0275inj=o.cJS({imports:[_.ez,Z,Gn]})}}}]);