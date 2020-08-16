import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { AuthService } from '../auth.service';
// import { Events } from '@ionic/angular';

// import { NavController } from 'ionic-angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  posts = [];
  page = 1;
  count = null;
  cat_id: any = 0;
  appPages: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController,
    private Auth: AuthService,
  ) {
    // if(this.navParms.get('p_id') != null && this.navParms.get('p_id') != undefined){
    //   this.cat_id = this.navParms.get('p_id');
    // }

    //  this.cat_id =  this.router.getCurrentNavigation().extras.state
    //  console.log('rotttt ==>', this.cat_id)
    //  this.router.navigate(['auth'],{state : this.cat_id});
    this.open_menu()


  }

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log('===========================>',this.folder)
    let loading = await this.loadingCtrl.create({
      message: 'News...'
    });
    await loading.present();

    this.Auth.getPosts().subscribe(res => {
      console.log('info =====>:', res)
      this.count = this.Auth.toatalPost;
      this.posts = res;

      loading.dismiss();
    });
  }

  async loadMore(event) {
    this.page++;

    let loading = await this.loadingCtrl.create({
      message: 'More News...'
    });
    await loading.present();

    this.Auth.getPosts(this.page).subscribe(res => {
      this.count = this.Auth.toatalPost
      this.posts = [...this.posts, ...res];

      event.target.complete();
      loading.dismiss();

      if (this.page = this.Auth.pages) {
        event.target.disabled = true;
      }
    });
  }

  OpenSearchPage() {
    // this.router.navigate(['search-page'])
    // this.navCtrl.push(SearchPage)
  }
  open_menu() {
    this.Auth.getCategories().subscribe(res => {
      this.appPages = res;
      this.Auth.publishSomeData({
        foo: this.appPages
      });
      console.log("All Catagories ===>", this.appPages)
    })
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);

  }
}