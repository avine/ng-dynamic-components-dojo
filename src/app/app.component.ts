import { Component, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';
import { SummaryComponent } from './components/summary.component';
import { AnchorComponentsDirective } from './directives/anchor-components.directive';
import { DetailsComponent } from './components/details.component';

@Component({
  selector: 'app-root',
  template: `
    <div appAnchorComponents></div>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  @ViewChild(AnchorComponentsDirective) anchor: AnchorComponentsDirective;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const componentRefs = [];

    let componentFactory = this.cfr.resolveComponentFactory(SummaryComponent);
    componentRefs.push(this.anchor.viewContainerRef.createComponent(componentFactory));

    componentFactory = this.cfr.resolveComponentFactory(DetailsComponent);
    componentRefs.push(this.anchor.viewContainerRef.createComponent(componentFactory));
    // this.anchor.viewContainerRef.clear();

    console.log(componentRefs);
  }
}
