import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss'],
})
export class FollowupComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() followupId: number;
  @Input() followupRemarks: string;

}
