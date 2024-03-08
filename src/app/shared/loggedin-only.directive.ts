import { Directive, TemplateRef, ViewContainerRef, effect, inject } from '@angular/core';
import { Subject } from 'rxjs';

import { AuthService } from './auth.service';

@Directive({
  selector: '[bmLoggedinOnly]',
  standalone: true
})
export class LoggedinOnlyDirective {
  private destroy$ = new Subject<void>();
  private template = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authService.isAuthenticated()) {
        this.viewContainer.createEmbeddedView(this.template);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
