import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Service_Detail } from './service-detail';

@NgModule({
  declarations: [
    Service_Detail,
  ],
  imports: [
    IonicPageModule.forChild(Service_Detail),
  ],
})
export class Service_DetailModule {}
