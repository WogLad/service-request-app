import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonDatetime, IonicModule, IonModal, IonPopover } from '@ionic/angular';

import { AddServiceRequestPageRoutingModule } from './add-service-request-routing.module';

import { AddServiceRequestPage } from './add-service-request.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddServiceRequestPageRoutingModule
  ],
  declarations: [
    AddServiceRequestPage,
    // IonDatetime,
    // IonModal,
    // IonPopover
  ],
  entryComponents: [
    // IonDatetime,
    // IonModal,
    // IonPopover
  ],
  bootstrap: [
    IonDatetime,
    IonModal,
    IonPopover
  ]
})
export class AddServiceRequestPageModule {}
