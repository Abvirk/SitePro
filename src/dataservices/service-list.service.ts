import { Service, Values } from './../models/service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ServiceListService {
    private serviceListRef=this.db.list<Service>("Services");
    constructor(private db: AngularFireDatabase) {
        //this.serviceListRef = this.db.list<Service>("Services");
    }
    getServiceList() {
       return this.serviceListRef;
    }


    addService(service: Service) {
       // return this.serviceListRef.push(service);
    }

    updateNote(service: Service) {
       // return this.serviceListRef.update(service.Value1, service);
    }

    removeNote(service: Service) {
       // return this.serviceListRef.remove(service.Value1);
    }
}