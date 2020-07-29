import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegesterPage } from './regester.page';

const routes: Routes = [
  {
    path: '',
    component: RegesterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegesterPageRoutingModule {}
