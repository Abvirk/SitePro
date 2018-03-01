import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Problem_Form } from './problem-form';

@NgModule({
  declarations: [
    Problem_Form,
  ],
  imports: [
    IonicPageModule.forChild(Problem_Form),
  ],
})
export class Problem_FormModule {}
