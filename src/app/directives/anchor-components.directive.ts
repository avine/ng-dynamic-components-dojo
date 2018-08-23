import { Directive, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnchorComponents]'
})
export class AnchorComponentsDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef);
  }

}
