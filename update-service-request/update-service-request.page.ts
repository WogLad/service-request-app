import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-service-request',
  templateUrl: './update-service-request.page.html',
  styleUrls: ['./update-service-request.page.scss'],
})
export class UpdateServiceRequestPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  parseReportDate() {
    //@ts-ignore
    const parsedDate = new Date(document.getElementById("reportDateComponent").value);
    document.getElementById("open-date-modal").innerText = parsedDate.toLocaleString();
    console.log(parsedDate);
  }

}
