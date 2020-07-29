import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingalnewsPage } from './singalnews.page';

const routes: Routes = [
  {
    path: '',
    component: SingalnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingalnewsPageRoutingModule {}
