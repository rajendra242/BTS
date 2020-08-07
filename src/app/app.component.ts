import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ɵPLATFORM_SERVER_ID } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  login_redirect: any;
  userId: any;
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
    private navCtrl: NavController,
  ) {

    this.initializeApp();
  }


  // ****Update****
  Update_url = 'https://btp-test.mylionsgroup.com/wp-json/custom-plugin/category_sub_unsub';

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.Auth.getObservable().subscribe((data) => {
        console.log('Data received', data);
        this.appPages = data['foo']
        console.log('==============>', this.appPages)
      });
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
    // this.Auth.getCategories().subscribe(res => {
    //   this.appPages = res;
    //   console.log("All Catagories ===>", this.appPages)
    // })
  //   FCMPlugin.getToken(function(token){
  //     alert(token);
  // });
  }
  Logout() {
    this.menuctrl.close();
    console.log('user Logout');
    this.router.navigate(['login'])
    localStorage.removeItem("data");
    localStorage.removeItem("google_user");
    localStorage.removeItem('userId');
  }
  closeMenu() {
    console.log

  }


  Update_subscriber(cat_id, is_subscribe) {
    console.log('=====> status',is_subscribe)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    console.log(cat_id);
    console.log(is_subscribe);
    console.log('user_status')

    return this.http.post(this.Update_url, `user_id=${this.userId}&cat_id=${cat_id}&is_subscribe=${is_subscribe}`, { headers, responseType: 'text' }).subscribe((data) => {
      console.log('This is Update Data', data);
      if (data == 'true') {
        return this.http.get(`https://btp-test.mylionsgroup.com//wp-json/custom-plugin/get_categoriesjj?user_id=${this.userId}`).subscribe((data) => {
          console.log('Khali api ====>', data);
          this.appPages = data
        })
      }
    })
  }


  // notification() {
  //   this.platform.ready().then(() => {

  //     alert('platform ready...');

  //     this.fcm.subscribeToTopic('marketing');

  //     this.fcm.getToken().then(token => {
  //       alert(token);
  //       // backend.registerToken(token);
  //     });
  //   });
  // }

}
