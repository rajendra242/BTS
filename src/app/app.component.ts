import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { MenuController } from 'ionic-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  login_redirect: any;
  public appPages: any = [
    // {
    //   title: 'Inbox',
    //   url: '/folder/Inbox',
    //   icon: 'mail'
    // },
    // {
    //   title: 'Outbox',
    //   url: '/folder/Outbox',
    //   icon: 'paper-plane'
    // },
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  posts: Object;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuctrl: MenuController,
    private Auth: AuthService,
    private http: HttpClient,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }


    var demo: any = JSON.parse(localStorage.getItem("data"));
    console.log(demo);
    if (demo) {
      this.router.navigate(['folder/folder']);
    } else {
      this.router.navigate(['login'])
    }
    this.Auth.getCategories().subscribe(res => {
      this.appPages = res;
      console.log("All Catagories ===>", this.appPages)
    })
  }
  Logout() {
    this.menuctrl.close();
    console.log('user Logout');
    this.router.navigate(['login'])
    localStorage.removeItem("data");
  }
  closeMenu() {
    console.log

  }

}
