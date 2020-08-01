import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-catpage',
  templateUrl: './catpage.page.html',
  styleUrls: ['./catpage.page.scss'],
})
export class CatpagePage implements OnInit {
  posts : any = [];

  constructor(private router: ActivatedRoute, private Auth: AuthService, private http :HttpClient) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.http.get('http://localhost/trivia/wordpress/wp-json/wp/v2/posts?'+'&categories='+id).subscribe(res => {
      this.posts = res;
      console.log('this is catagury data ==>', this.posts)
      // console.log(this.posts[0])
    })
  
    // this.Auth.getPostsContent(id).subscribe(res => {
    //   this.posts = res;

    
  }
}  


