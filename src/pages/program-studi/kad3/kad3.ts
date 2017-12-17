import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Kad3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kad3',
  templateUrl: 'kad3.html',
})
export class Kad3Page {
	rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
  	this.rootPage = 'Kad3Page';
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }

}
