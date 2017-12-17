import { Component } from '@angular/core';
import { NavController, NavParams,Platform  } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-lokasi',
  templateUrl: 'lokasi.html',
})
export class LokasiPage {
	map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform) {
  	}
  ionViewDidLoad() {
	this.initializeMap();  }

 initializeMap() {
 
    let locationOptions = {timeout: 20000, enableHighAccuracy: true};
 
    navigator.geolocation.getCurrentPosition(
 
        (position) => {
 
            let options = {
              center: new google.maps.LatLng(-7.792681,110.407875),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
 
            this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
        },
 
        (error) => {
            console.log(error);
        }, locationOptions
    );
}
}
