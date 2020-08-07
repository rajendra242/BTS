import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
// import { BookmarkPage } from '../bookmark';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { File } from '@ionic-native/file/ngx';
import * as _ from 'lodash';
import { ToastController } from '@ionic/angular';
import { ConditionalExpr } from '@angular/compiler';
declare const $: any;


@Component({
  selector: 'app-singalnews',
  templateUrl: './singalnews.page.html',
  styleUrls: ['./singalnews.page.scss'],
})
export class SingalnewsPage implements OnInit {
  post: any;
  islike : boolean = false;
  postObj = {}
  BooKSave = [];
  constructor(private router: ActivatedRoute, private Auth: AuthService, http: HttpClient, private socialSharing: SocialSharing,private toastCtrl: ToastController) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.Auth.getPostsContent(id).subscribe(res => {
      this.post = res;
    })

  }


  async Bookmark() {

    
    let tempData = [];
    let tempBuffer;
    console.log(" Bookmark ", this.post)
    // this.postObj = this.post;
    // console.log('====> obj',this.postObj)

    tempBuffer = JSON.parse(localStorage.getItem("new"));
    let Id = this.post.id;

    if (tempBuffer) {
      tempData = tempBuffer
      var index = _.findIndex(tempData, function (o) { return o.id === Id })
        if (index == -1) {
          tempData.push(this.post)
          console.log('Newpost');
          const toast = await this.toastCtrl.create({
            message: 'post added in bookmark',
            duration: 2000
          })
          toast.present();
        }else{
          console.log('Already added');
          const toast = await this.toastCtrl.create({
            message: 'post all ready in bookmark',
            duration: 2000
          })
          toast.present();
        }
     
    }else{
      tempData.push(this.post)
      const toast = await this.toastCtrl.create({
        message: 'post added in bookmark',
        duration: 2000
      })
      toast.present();
    }
  
      localStorage.setItem("new", JSON.stringify(tempData));    

  }

  sShare(post){
    console.log(post.link);
    var options = {
       url      : post.link,
       message : post.content.slug
    }
    this.socialSharing.shareWithOptions(options);

  }


}
