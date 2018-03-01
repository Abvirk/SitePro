import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Rating } from './rating';

@NgModule({
  declarations: [
    Rating,
  ],
  imports: [
    IonicPageModule.forChild(Rating),
  ],
})
export class RatingPageModule {}
