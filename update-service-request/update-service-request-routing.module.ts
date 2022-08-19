import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateServiceRequestPage } from './update-service-request.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateServiceRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateServiceRequestPageRoutingModule {}
