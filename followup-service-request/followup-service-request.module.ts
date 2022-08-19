import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowupServiceRequestPageRoutingModule } from './followup-service-request-routing.module';

import { FollowupServiceRequestPage } from './followup-service-request.page';
import { FollowupComponentModule } from '../followup/followup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowupServiceRequestPageRoutingModule,
    FollowupComponentModule
  ],
  declarations: [FollowupServiceRequestPage]
})
export class FollowupServiceRequestPageModule {}
