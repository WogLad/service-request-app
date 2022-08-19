import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateServiceRequestPageRoutingModule } from './update-service-request-routing.module';

import { UpdateServiceRequestPage } from './update-service-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateServiceRequestPageRoutingModule
  ],
  declarations: [UpdateServiceRequestPage]
})
export class UpdateServiceRequestPageModule {}
