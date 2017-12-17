import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tis1Page } from './tis1';

@NgModule({
  declarations: [
    Tis1Page,
  ],
  imports: [
    IonicPageModule.forChild(Tis1Page),
  ],
  exports: [
    Tis1Page
  ]
})
export class Tis1PageModule {}
