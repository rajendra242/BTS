import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// import { SingalnewsPage } from './singalnews/singalnews.page';
// import { FolderPage } from './folder/folder.page';

import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { AuthService } from './auth.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';

// import { Firebase } from '@ionic-native/firebase/ngx';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from '@angularfire2/firestore';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import {FCM} from '@ionic-native/fcm/ngx'

// import { Events } from '@ionic/angular';
// const config = {
//   apiKey: "AIzaSyD-K6SlFECXKmd8iHwEvggVtavKgyPF2k8",
//   authDomain: "angular2-course-9270e.firebaseapp.com",
//   databaseURL: "https://angular2-course-9270e.firebaseio.com",
//   projectId: "angular2-course-9270e",
//   storageBucket: "angular2-course-9270e.appspot.com",
//   messagingSenderId: "443316848633"
// };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(config),
    // AngularFirestoreModule,
    // AngularFireModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    GooglePlus,
    Facebook,
    File,
    AuthService,
    NavController,
    Deeplinks,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
