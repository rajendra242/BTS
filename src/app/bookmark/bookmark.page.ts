import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  posts = [];
  
  unic_fav = [];
  constructor() { }
    

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


}
