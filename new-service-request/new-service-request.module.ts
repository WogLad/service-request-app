import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewServiceRequestPageRoutingModule } from './new-service-request-routing.module';

import { NewServiceRequestPage } from './new-service-request.page';
import { ServiceRequestComponentModule } from '../service-request/service-request.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewServiceRequestPageRoutingModule,
    ServiceRequestComponentModule
  ],
  declarations: [NewServiceRequestPage]
})
export class NewServiceRequestPageModule {}
