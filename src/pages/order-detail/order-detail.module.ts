import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Order_Detail } from './order-detail';

@NgModule({
  declarations: [
    Order_Detail,
  ],
  imports: [
    IonicPageModule.forChild(Order_Detail),
  ],
})
export class OrderDetailPageModule {}
