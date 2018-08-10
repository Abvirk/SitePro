import { ServiceListService } from './../../dataservices/service-list.service';
import { Service } from './../../models/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service_Detail } from '../service-detail/service-detail';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  serviceList: Observable<Service[]>
  constructor(public navCtrl: NavController, private serviceListService: ServiceListService) {
    this.serviceList = serviceListService.getServiceList().snapshotChanges().map(data => {
      return data.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
    console.log(this.serviceList);
    console.log('home');
  }

  servicesdetail(service) {
    this.navCtrl.push(Service_Detail,{
      item:service
    });
  }

}
