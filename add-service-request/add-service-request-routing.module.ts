import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddServiceRequestPage } from './add-service-request.page';

const routes: Routes = [
  {
    path: '',
    component: AddServiceRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddServiceRequestPageRoutingModule {}
