import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
    selector: 'page-news',
    templateUrl: 'news.html'
})
export class NewsPage {
    news: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getNews();
  }

  getNews() {
    this.restProvider.getNews()
    .then(data => {
      this.news = data;
      console.log(this.news);
    });
  }

  selectNews(event, neww) {
    console.log(neww);  
    this.navCtrl.push(NewsDetailPage, {
      neww: neww
    });
  }  

}