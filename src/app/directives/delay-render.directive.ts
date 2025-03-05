import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayRender]'
})
export class DelayRenderDirective implements OnInit {
  @Input() appDelayRender: number = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, this.appDelayRender);
  }
}
