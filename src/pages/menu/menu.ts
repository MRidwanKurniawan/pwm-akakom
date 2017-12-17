import { TabsPage } from './../tabs/tabs';
import { LokasiPage } from './../lokasi/lokasi';
import { IonicOfficialComponentsPage } from './../ionic-official-components/ionic-official-components';
import { IonicNativePage } from './../ionic-native/ionic-native';
import { NewsPage } from '../news/news';

import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams } from 'ionic-angular';

export interface PageInterface{
	title:string;
	pageName:string;
	tabComponent?: any;
	index ?: number;
	icon:string;
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
 
export class MenuPage {
	// Basic root for our content view
  rootPage: any = TabsPage;
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
   { title: 'HOME', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
   { title: 'PROGRAM STUDI', pageName: 'TabsPage', tabComponent: 'ProgramStudiPage', index: 1, icon: 'apps' },
    { title: 'ABOUT', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 2, icon: 'contact' },
    { title: 'CONTACT US', pageName: 'TabsPage', tabComponent: 'ContactPage', index:3, icon: 'book' },
     { title: 'GALERY', pageName: 'TabsPage', tabComponent: 'GalleryPage', index:4, icon: 'images' },
     { title: 'Berita Kampus', pageName: 'NewsPage', tabComponent: NewsPage, icon: 'logo-rss' },
     { title: 'Lokasi Kampus', pageName: 'LokasiPage', tabComponent: LokasiPage, icon: 'navigate' },
     { title: 'Ionic Official Components', pageName: 'IonicOfficialComponentsPage', tabComponent: IonicOfficialComponentsPage, icon: 'ionic' },
     { title: 'Ionic Native', pageName: 'IonicNativePage', tabComponent: IonicNativePage, icon: 'ionic' },
  ];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface){
  	let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
  
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else if(page.index != undefined){
      this.nav.setRoot(TabsPage, params);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.tabComponent, params);
    }
  }



  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    /*let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }*/
 
    // Fallback needed when there is no active childnav (tabs not active)
    /*if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;*/
  }

}