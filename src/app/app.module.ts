import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxFlowchartModule } from 'ngx-flowchart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFlowchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
