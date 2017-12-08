import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sis1Page } from './../sis1/sis1';
import { Tis1Page } from './../tis1/tis1';
import { Tkd3Page } from './../tkd3/tkd3';
import { Mid3Page } from './../mid3/mid3';
import { Kad3Page } from './../kad3/kad3';
/**
 * Generated class for the ProgramStudiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-program-studi',
  templateUrl: 'program-studi.html',
})
export class ProgramStudiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramStudiPage');
  }
  goToSI(params){
    if (!params) params = {};
    this.navCtrl.push(Sis1Page);
  }
  goToTI(params){
    if (!params) params = {};
    this.navCtrl.push(Tis1Page);
  }
  goToTK(params){
    if (!params) params = {};
    this.navCtrl.push(Tkd3Page);
  }
  goToMI(params){
    if (!params) params = {};
    this.navCtrl.push(Mid3Page);
  }
  goToKA(params){
    if (!params) params = {};
    this.navCtrl.push(Kad3Page);
  }
}
