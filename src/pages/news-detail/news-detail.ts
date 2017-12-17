import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-news-detail',
    templateUrl: 'news-detail.html'
})
export class NewsDetailPage {
    neww: {};  

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.neww = navParams.get('neww');
    }

}
