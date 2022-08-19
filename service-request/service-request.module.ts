import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceRequestComponent } from './service-request.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ServiceRequestComponent],
  exports: [ServiceRequestComponent]
})
export class ServiceRequestComponentModule {}
