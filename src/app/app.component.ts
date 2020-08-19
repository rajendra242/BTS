import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
import { Platform, MenuController, NavController,AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ɵPLATFORM_SERVER_ID } from '@angular/common';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { SingalnewsPage } from './singalnews/singalnews.page';
import { FolderPage } from './folder/folder.page';
import { SettingPage } from './setting/setting.page'
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  login_redirect: any;
  userId: any;
  public appPages: any = [];
  posts: Object;
  userInfo: any;
  backButtonSubscription;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuctrl: MenuController,
    private Auth: AuthService,
    private http: HttpClient,
    private navController: NavController,
    private zone: NgZone,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private deeplinks: Deeplinks) {


    this.userInfo = JSON.parse(localStorage.getItem('data'))
    this.initializeApp();

    this.Auth.isLoggeIn.subscribe((data) => {
      if (data === 'loggedIn') {
        this.userInfo = JSON.parse(localStorage.getItem('data'));
      }
    });
    // this.backButtonEvent();

    this.platform.ready().then(() => {
      this.deeplinks.route({
        '/singalnews/:id': SingalnewsPage,
        '/': {}
      }).subscribe((match) => {
        let id = match.$args['id'];
        this.router.navigate(["singalnews/" + id])
      },
        (nomatch) => {
          alert(JSON.stringify(nomatch));
          // let id = nomatch.$args['id'];
          // this.router.navigate(['singalnews/'+id])
        })
    })

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

      // if (this.platform.is('cordova')) {
      //   this.setupPush();
      // }
    });
  }


  // setupPush() {
  //   this.oneSignal.startInit('c6cdff6c-12f5-4b0d-ac6e-616c9e17bc27');
  //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
  //   this.oneSignal.handleNotificationReceived().subscribe(data => {
  //     let msg = data.payload.body;
  //     let title = data.payload.title;
  //     let additionalData = data.payload.additionalData;
  //     this.showAlert(title, msg, additionalData.task);
  //   });
  //   this.oneSignal.handleNotificationOpened().subscribe(data => {
  //     // Just a note that the data is a different place here!
  //     let additionalData = data.notification.payload.additionalData;

  //     this.showAlert('Notification opened', 'You already read this before', additionalData.task);
  //   });

  // }
  // async showAlert(title, msg, task) {
  //   const alert = await this.alertCtrl.create({
  //     header: title,
  //     subHeader: msg,
  //     buttons: [
  //       {
  //         text: `Action: ${task}`,
  //         handler: () => {
  //           // E.g: Navigate to a specific screen
  //         }
  //       }
  //     ]
  //   })
  //   alert.present();
  // }

  ngAfterViewInit() {
    this.platform.backButton.subscribe();
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });

  }

  ngOnDestroy() { this.backButtonSubscription.unsubscribe(); }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }


    // var demo: any = JSON.parse(localStorage.getItem("data"));
    // console.log(demo);
    // if (demo) {
    //   this.router.navigate(['folder/folder']);
    // } else {
    //   this.router.navigate(['login'])
    // }

    if (!this.userInfo) {
      this.router.navigate(['login']);
    } else {
      this.userInfo = JSON.parse(localStorage.getItem("data"));
      this.router.navigate(['folder/folder']);
    }
  }
  Logout() {
    console.log('user Logout');
    this.router.navigate(['login'])
    localStorage.removeItem("data");
    localStorage.removeItem("google_user");
    localStorage.removeItem('userId');
    this.menuctrl.close();
  }
  closeMenu() {
    console.log
  }

  coloseMenuOnLable(){
    this.menuctrl.close();
  }
  async Update_subscriber(cat_id, is_subscribe) {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    console.log(cat_id);
    console.log('status of user subscribe', is_subscribe);

    if(is_subscribe == 1){
      const toast = await this.toastCtrl.create({
        message: 'category successfully unsubscribed',
        duration: 2000
      })
      toast.present();
    }else{
      const toast = await this.toastCtrl.create({
        message: 'category successfully subscribed',
        duration: 2000
      })
      toast.present();
    }


    return this.http.post(this.Update_url, `user_id=${this.userId}&cat_id=${cat_id}&is_subscribe=${is_subscribe}`, { headers, responseType: 'text' }).subscribe(async (data) => {
      console.log('This is Update Data', data);
     
      if (data == 'true') {
        return this.http.get(`https://btp-test.mylionsgroup.com//wp-json/custom-plugin/get_categoriesjj?user_id=${this.userId}`).subscribe((data) => {
          console.log('Khali api ====>', data);
          this.appPages = data
        })
      }
    })
  }

}
