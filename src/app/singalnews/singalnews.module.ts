import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { File } from '@ionic-native/file/ngx';

import { IonicModule } from '@ionic/angular';

import { SingalnewsPageRoutingModule } from './singalnews-routing.module';

import { SingalnewsPage } from './singalnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingalnewsPageRoutingModule,
    // File
  ],
  declarations: [SingalnewsPage]
})
export class SingalnewsPageModule {}
