import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service-request',
  templateUrl: './add-service-request.page.html',
  styleUrls: ['./add-service-request.page.scss'],
})
export class AddServiceRequestPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  serviceRequestData = {
    contract: "COOO1/SALEM KHALIFA AL QUBAISI (ASTECO) - 200",
    location: "EAST15/EAST15",
    building: "EASTI5/200 - SALEM KHALIFA AL QUBAISI (ASTECO)"
  };

  parseAddServiceRequestForm() {
    if (document.getElementById("open-date-modal").innerText == "Invalid Date" || document.getElementById("open-date-modal").innerText == "Select Date") {
      console.log("Enter in a valid date.");
      return;
    }

    console.log(this.serviceRequestData);
    console.log("service request parsed & added.");

    this.serviceRequestData = {
      contract: "COOO1/SALEM KHALIFA AL QUBAISI (ASTECO) - 200",
      location: "EAST15/EAST15",
      building: "EASTI5/200 - SALEM KHALIFA AL QUBAISI (ASTECO)"
    };
    document.getElementById("open-date-modal").innerText = "Select Date";
  }

  parseReportDate() {
    //@ts-ignore
    const parsedDate = new Date(document.getElementById("reportDateComponent").value);
    this.serviceRequestData["reportDate"] = parsedDate;
    document.getElementById("open-date-modal").innerText = parsedDate.toLocaleString();
    console.log(parsedDate);
  }

}
