import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardpostPageRoutingModule } from './cardpost-routing.module';

import { CardpostPage } from './cardpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardpostPageRoutingModule
  ],
  declarations: [CardpostPage]
})
export class CardpostPageModule {}
