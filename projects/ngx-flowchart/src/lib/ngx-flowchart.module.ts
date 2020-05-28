import { NgModule } from '@angular/core';
import { NgxFlowchartComponent } from './ngx-flowchart.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [NgxFlowchartComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxFlowchartComponent]
})
export class NgxFlowchartModule { }
