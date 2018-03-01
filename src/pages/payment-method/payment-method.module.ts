import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Payment_Method } from './payment-method';

@NgModule({
  declarations: [
    Payment_Method,
  ],
  imports: [
    IonicPageModule.forChild(Payment_Method),
  ],
})
export class PaymentMethodPageModule {}
