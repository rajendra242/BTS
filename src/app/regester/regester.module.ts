import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegesterPageRoutingModule } from './regester-routing.module';

import { RegesterPage } from './regester.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegesterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegesterPage]
})
export class RegesterPageModule {}
