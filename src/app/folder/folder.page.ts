import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

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

  constructor(private activatedRoute: ActivatedRoute, private router : Router, private loadingCtrl : LoadingController, private Auth : AuthService ) { }

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    let loading = await this.loadingCtrl.create({
      message : 'loding News...'
    });
    await loading.present();

    this.Auth.getPosts().subscribe(res => {
      console.log('info =====>:', res)
      this.count = this.Auth.toatalPost;
      this.posts = res;

      loading.dismiss();
    });
  }

  async loadMore(event){
    this.page++;

    let loading = await this.loadingCtrl.create({
      message : 'Loding More News...'
    });
    await loading.present();

    this.Auth.getPosts(this.page).subscribe(res =>{
      this.count = this.Auth.toatalPost
      this.posts = [...this.posts, ...res];

      event.target.complete();
      loading.dismiss();

      if(this.page = this.Auth.pages){
        event.target.disabled= true;
      }
    });
  }


  
}
