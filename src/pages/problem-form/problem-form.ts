import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'problem-form.html'
})
export class Problem_Form {
  public photo: any;
  public  base64Image: string;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }
  ngOnInit(){
    this.photo=[];
  }

  takephoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this
        .camera
        .getPicture(options)
        .then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       this.photo.push(this.base64Image);
    }, (err) => {
       // Handle error
    });
  }
  uploadphoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE
    }

    this
        .camera
        .getPicture(options)
        .then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       this.photo.push(this.base64Image);
    }, (err) => {
       // Handle error
    });
  }

  signup(){
    this.navCtrl.push(TabsPage);

  }

}
