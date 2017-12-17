import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  images = ['logoatmikakakom.gif', 'laboratoriumterpadu.jpg', 'labreshigh.jpg', 'pesonakakom.jpg', 'pika.jpg', 'jepang.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
