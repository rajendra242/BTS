import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardpostPage } from './cardpost.page';

const routes: Routes = [
  {
    path: '',
    component: CardpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardpostPageRoutingModule {}
