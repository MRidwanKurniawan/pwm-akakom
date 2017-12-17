import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
//add page to NGmodule
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { ProgramStudiPage } from '../pages/program-studi/program-studi';
import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { LokasiPage } from '../pages/lokasi/lokasi';
import { IonicOfficialComponentsPage } from '../pages/ionic-official-components/ionic-official-components';
import { IonicNativePage } from '../pages/ionic-native/ionic-native';
// Providers
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';
import { RestProvider } from '../providers/rest/rest';

// Ionic native providers
import { CardIO } from '@ionic-native/card-io';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Modules
import { SwingModule } from 'angular2-swing';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageLoader  } from 'ionic-image-loader';
import { HttpModule } from '@angular/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    SlidingDrawer,
    Autosize,
    MenuPage,
    TabsPage,
    LokasiPage,
    IonicOfficialComponentsPage,
    IonicNativePage, 
    ProgramStudiPage,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
    NewsPage,
    NewsDetailPage
  ],
  imports: [
    BrowserModule,
    SwingModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        IonicImageLoader.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    TabsPage,
    LokasiPage,
    IonicOfficialComponentsPage,
    IonicNativePage,
    ProgramStudiPage,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
    NewsPage,
    NewsDetailPage
  ],
  providers: [
    AlertService,
    ToastService,
    CameraProvider,
    NativeGoogleMapsProvider,

    // Ionic native specific providers
    BarcodeScanner,
    Camera,
    Diagnostic,
    Geolocation,
    CardIO,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ] 
})
export class AppModule {}
