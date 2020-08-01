import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatpagePageRoutingModule } from './catpage-routing.module';

import { CatpagePage } from './catpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatpagePageRoutingModule
  ],
  declarations: [CatpagePage]
})
export class CatpagePageModule {}
