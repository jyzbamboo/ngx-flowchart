import { TestBed } from '@angular/core/testing';

import { NgxFlowchartService } from './ngx-flowchart.service';

describe('NgxFlowchartService', () => {
  let service: NgxFlowchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFlowchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
