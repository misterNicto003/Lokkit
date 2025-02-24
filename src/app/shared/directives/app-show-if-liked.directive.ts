import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appShowDirective]',
  exportAs: 'custom',
})
export class AppShowDirective {
  private viewContainer = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

  @Input() set appShowDirective(likes: number) {
    this.viewContainer.clear();
    if (likes > 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
