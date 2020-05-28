import { Component } from '@angular/core';
import { NgxFlowChatOptions, NgxFlowChatData } from 'ngx-flowchart'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  flowData: NgxFlowChatData[] = [
    {
      id: "1",
      name: "Group1",
      groupData: [{
        id: "2",
        name: "Flow1",
      }]
    },
    {
      id: "3",
      name: "Flow2",
    },
    {
      id: "4",
      name: "Group2",
      groupData: [{
        id: "5",
        name: "Flow3",
      },
      {
        id: "6",
        name: "Flow4",
      }]
    },
  ];

  flowOptions: NgxFlowChatOptions = {
    groupBackground: 'linear-gradient(rgb(185, 185, 185) 0px, rgb(254, 254, 254) 100%)',
    groupShadow: '0 0.3rem 0.5rem 0 rgba(44,51,73,.5)',
    groupBorderRadius: '3px',
    groupTextColor: '#000',
    background: '#0e3e7d',
    shadow: '0 2px 4px 0 #333',
    borderRadius: '5px',
    textColor: '#fff',
    width: '200px'
  };

  clickN(event) {
    console.log(event);
  }
}