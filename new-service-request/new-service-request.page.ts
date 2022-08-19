import { Component, OnInit } from '@angular/core';
import { ServiceRequest } from '../service-request/service-request.component';

@Component({
  selector: 'app-new-service-request',
  templateUrl: './new-service-request.page.html',
  styleUrls: ['./new-service-request.page.scss'],
})
export class NewServiceRequestPage implements OnInit {
  serviceRequestList: ServiceRequest[] = [
    {
      id: "RC00000007",
      reportDate: new Date(2022, 6, 2, 0),
      contract: "COOO1/SALEM KHALIFA AL QUBAISI (ASTECO) - 200",
      building: "EASTI5/200 - SALEM KHALIFA AL QUBAISI (ASTECO)",
      unitDetails: "Floor 01/GENERAL AREA/CORRIDOR",
      serviceType: "ACO003/AC NOT COOLING",
      remarks: "ac not working"
    },
    {
      id: "RC00000006",
      reportDate: new Date(2022, 7, 1, 9, 16),
      contract: "COOO1/SALEM KHALIFA AL QUBAISI (ASTECO) - 200",
      building: "EASTI5/200 - SALEM KHALIFA AL QUBAISI (ASTECO)",
      unitDetails: "Floor 01/GENERAL AREA/CORRIDOR",
      serviceType: "ACO004/AC NOT COOLING",
      remarks: ""
    }
  ];

  constructor() {
    // localStorage.setItem("serviceRequestList", JSON.stringify(this.serviceRequestList));
  }

  ngOnInit() { }

}
