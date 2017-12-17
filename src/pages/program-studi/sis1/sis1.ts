import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Sis1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sis1',
  templateUrl: 'sis1.html',
})
export class Sis1Page {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
  	this.rootPage = 'Sis1Page';
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }

}