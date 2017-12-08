import { AboutPage } from './../about/about';
import { ProgramStudiPage } from './../program-studi/program-studi';
import { HomePage } from './../home/home';
import { ContactPage } from './../contact/contact';
import { GalleryPage } from './../gallery/gallery';


import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = HomePage; //homepage
  tab2Root: any = ProgramStudiPage; //programstudi
  tab3Root: any = AboutPage; //about
  tab4Root: any = ContactPage; //contact
  tab5Root: any = GalleryPage; //gallery
  myIndex: number;

  hideNavBar:boolean = false;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
    this.hideNavBar = true;
  }
}
