import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  posts = [];
  constructor() { }

  ngOnInit() {
    var bookdata = localStorage.getItem('data');
    console.log("bookdata", JSON.parse(bookdata))
    var JsonBook = JSON.parse(bookdata);

    this.posts.push(JsonBook);
    // console.log("this is stored book mark ===>",this.posts);
  }


}
