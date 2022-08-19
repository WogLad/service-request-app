import { Component, Input, OnInit } from '@angular/core';

export interface ServiceRequest {
  id: string;
  reportDate: Date;
  contract: string;
  building: string;
  unitDetails: string;
  serviceType: string;
  remarks: string;
}

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss'],
})
export class ServiceRequestComponent implements OnInit {
  @Input() serviceRequest: ServiceRequest;
  @Input() requestId: number;

  constructor() { }

  ngOnInit() {}

  getDateString(dateObj: Date): string {
    return dateObj.toLocaleString();
  }

  deleteServiceRequest() {
    document.getElementById(`request${this.requestId}`).remove();
  }

}
