import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-program-studi',
  templateUrl: 'program-studi.html',
})
export class ProgramStudiPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'Sis1Page';

    this.items = [
      {
        title: 'SISTEM INFORMATIKA (S1)',
        page: 'Sis1Page'
      },
      {
        title: 'TEKNIK INFORMATIKA (S1)',
        page: 'Tis1Page'
      },
      {
        title: 'TEKNIK KOMPUTER (D3)',
        page: 'Tkd3Page'
      },
      {
        title: 'MANAJEMEN INFORMATIKA (D3)',
        page: 'Mid3Page'
      },
      {
        title: 'KOMPUTERISASI AKUNTANSI (D3)',
        page: 'Kad3Page'
      },
    ];
  }

  
  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}