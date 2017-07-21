import { NgModule } from '@angular/core';
import { IonicPageModule, NavParams } from 'ionic-angular';
import { FeedPage } from './feed';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
  ],
    exports: [
      FeedPage
    ]
})
export class FeedPageModule {}
