import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followup-service-request',
  templateUrl: './followup-service-request.page.html',
  styleUrls: ['./followup-service-request.page.scss'],
})
export class FollowupServiceRequestPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  followupRemarks: string = "";

  parseFollowupRemarks() {
    console.log(this.followupRemarks);
    this.followupRemarks = "";
  }

}
