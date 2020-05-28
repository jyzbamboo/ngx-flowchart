import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface NgxFlowChatOptions {
  groupBackground?: string,
  groupShadow?: string,
  groupBorderRadius?: string,
  groupTextColor?: string,
  background?: string,
  shadow?: string,
  borderRadius?: string,
  textColor?: string,
  width?: string
}

export interface NgxFlowChatData {
  id: string,
  name: string,
  groupData?: Array<any>
}

@Component({
  selector: 'ngx-flowchart',
  templateUrl: './ngx-flowchart.component.html',
  styleUrls: ['./ngx-flowchart.component.scss']
})
export class NgxFlowchartComponent implements OnInit {

  /**
   * Flow Data
   */
  @Input() data: NgxFlowChatData;

  /**
   * Click Event
   */
  @Output() clickName: EventEmitter<any> = new EventEmitter();

  /**
   * option
   */
  @Input() options: NgxFlowChatOptions = {
    groupBackground: 'linear-gradient(to bottom,#b9b9b9 0,#fefefe 100%)',
    groupShadow: '0 0.3rem 0.5rem 0 rgba(44,51,73,.5)',
    groupBorderRadius: '3px',
    groupTextColor: '#000',
    background: '#0e3e7d',
    shadow: '0 2px 4px 0 #333',
    borderRadius: '5px',
    textColor: '#fff',
    width: '200px'
  };

  constructor() { }

  ngOnInit(): void {
  }

  clickFlow(data) {
    this.clickName.emit(data);
  }

}
