import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  posts = [];
  
  unic_fav = [];
  constructor(private router : Router) { }
    

  ngOnInit() {
    var bookdata = JSON.parse(localStorage.getItem('new'));

    console.log('===========>', bookdata);
    this.posts = bookdata;
    console.log("this is stored book mark ===>",this.posts);
  } 
  // let len = bookdata.length;
  // for(let i = 0 ; i < len; i++){
  //   if(this.unic_fav.indexOf(bookdata[i])=== -1){

  //   }
  // }
  removeBookmark(post_id,i){
    console.log("============>post_id",post_id)
    this.posts.splice(i,1);
    localStorage.removeItem('new.i');
    localStorage.setItem('new', JSON.stringify(this.posts));
  }
  navigat(post_id){
    this.router.navigate(['singalnews',post_id]);
  }
}
