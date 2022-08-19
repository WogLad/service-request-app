import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowupServiceRequestPage } from './followup-service-request.page';

const routes: Routes = [
  {
    path: '',
    component: FollowupServiceRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowupServiceRequestPageRoutingModule {}
