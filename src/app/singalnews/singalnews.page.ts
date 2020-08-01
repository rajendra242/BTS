import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
// import { BookmarkPage } from '../bookmark';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import * as _ from 'lodash';

@Component({
  selector: 'app-singalnews',
  templateUrl: './singalnews.page.html',
  styleUrls: ['./singalnews.page.scss'],
})
export class SingalnewsPage implements OnInit {
  post: any;
  postObj = {}
  BooKSave = [];
  text: string = 'BTS'
  imgurl: string = 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg'
  link: string = 'https://link.medium.com/JA4amAHFJ5'
  constructor(private router: ActivatedRoute, private Auth: AuthService, http: HttpClient, private socialSharing: SocialSharing, file: File) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.Auth.getPostsContent(id).subscribe(res => {
      this.post = res;

      // localStorage.setItem("data", JSON.stringify(this.post));
      // console.log("this is singal news ===> ", this.post);
    })

  }


  Bookmark() {
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
        }else{
          console.log('Already added');
        }
     
    }
  
    // console.log('=======> BookSave Array', this.BooKSave);
      localStorage.setItem("new", JSON.stringify(tempData));
      console.log("Post Store In Localstoreg Succefully")
    // var localdat = JSON.parse(localStorage.getItem('data'));
    // console.log('========> Local Storeg Array', localdat);

  }

  shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link)
      .then(() => {

      }).catch(e => {

      })
  }
  shareEmail() {

  }
  shareFacebook() {

  }
  shareTwitter() {
    this.socialSharing.shareViaTwitter(this.text).then(() => {

    }).catch(e => {

    })
  }


}
