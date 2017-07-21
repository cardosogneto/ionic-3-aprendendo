import { NgModule } from '@angular/core';
import { IonicPageModule, NavParams } from 'ionic-angular';
import { IntroPage } from './intro';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
  ],
    exports: [
      IntroPage
    ]
})
export class IntroPageModule {}
