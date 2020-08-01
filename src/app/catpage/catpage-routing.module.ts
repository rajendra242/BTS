import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatpagePage } from './catpage.page';

const routes: Routes = [
  {
    path: '',
    component: CatpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatpagePageRoutingModule {}
