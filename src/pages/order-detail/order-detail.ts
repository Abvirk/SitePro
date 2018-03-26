import { Component, ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,

  LatLng,

} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class Order_Detail {

  @ViewChild('map')
  private mapElement: ElementRef;
  private map:GoogleMap;
  private location:LatLng;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private platform: Platform,
      private googleMaps: GoogleMaps) {
    this.location = new LatLng(42.346903, -71.135101);
    this.ionViewDidLoad();
  }


  ionViewDidLoad() {
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create('map',element);

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 8
        };

        this.map.moveCamera(options);
      });
    });

  }
  addMarker() {
    this.map.addMarker({
      title: 'My Marker',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            alert('Marker Clicked');
          });
        });
  }

  accept() {
    this.navCtrl.push(TabsPage);
  }


}
