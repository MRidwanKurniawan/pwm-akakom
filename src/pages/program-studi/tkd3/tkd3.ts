import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Tkd3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tkd3',
  templateUrl: 'tkd3.html',
})
export class Tkd3Page {
	rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
  	this.rootPage = 'Tkd3Page';
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }

}
