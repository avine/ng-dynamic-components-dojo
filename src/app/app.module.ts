import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary.component';
import { DetailsComponent } from './components/details.component';
import { AnchorComponentsDirective } from './directives/anchor-components.directive';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailsComponent,
    AnchorComponentsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    SummaryComponent,
    DetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
