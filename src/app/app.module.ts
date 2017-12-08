import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { ProgramStudiPage } from '../pages/program-studi/program-studi';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { Sis1Page } from '../pages/sis1/sis1';
import { Tis1Page } from '../pages/tis1/tis1';
import { Tkd3Page } from '../pages/tkd3/tkd3';
import { Mid3Page } from '../pages/mid3/mid3';
import { Kad3Page } from '../pages/kad3/kad3';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { Geolocation } from '@ionic-native/geolocation'; // Newly Added

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    TabsPage,
    ProgramStudiPage,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
	Sis1Page,
	Tis1Page,
	Kad3Page,
	Tkd3Page,
	Mid3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    TabsPage,
    ProgramStudiPage,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
	Sis1Page,
	Tis1Page,
	Kad3Page,
	Tkd3Page,
	Mid3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
