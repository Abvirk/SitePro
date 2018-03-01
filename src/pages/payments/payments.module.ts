import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Payments } from './payments';

@NgModule({
  declarations: [
    Payments,
  ],
  imports: [
    IonicPageModule.forChild(Payments),
  ],
})
export class PaymentsPageModule {}
