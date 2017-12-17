import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Tis1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tis1',
  templateUrl: 'tis1.html',
})
export class Tis1Page {
	rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
  	this.rootPage = 'Tis1Page';
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }

}
