import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Change_Password } from './change-password';

@NgModule({
  declarations: [
    Change_Password,
  ],
  imports: [
    IonicPageModule.forChild(Change_Password),
  ],
})
export class Change_PasswordModule {}
