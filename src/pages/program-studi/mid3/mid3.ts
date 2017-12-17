import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Mid3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mid3',
  templateUrl: 'mid3.html',
})
export class Mid3Page {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
  	this.rootPage = 'Mid3Page';
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }

}