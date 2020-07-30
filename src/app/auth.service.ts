import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  toatalPost = null;
  pages: any;
  Post_Api = `http://localhost/trivia/wordpress//wp-json/wp/v2/`;

  constructor(private http: HttpClient, private router: Router) { }

  login(value) {
    localStorage.setItem("value", JSON.stringify(value));
    console.log('this is value of', value)
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');

    return this.http.get(`http://localhost/trivia/wordpress/wp-json/custom-plugin/login?username=${value.username}&password=${value.password}`,
      { headers, responseType: 'json' });
  }


  getPosts(page = 1) {
    let options = {
      observe: "response" as "body",
      params: {
        par_page: '5',
        page: '' + page,
        

      }
    };
    return this.http.get<any[]>(`${this.Post_Api}posts?_embed`, options).pipe(
      map(resp => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.toatalPost = resp['headers'].get('x-wp-total');

        let data = resp['body'];

        for(let post of data){
          // post.meadia_url = post['_embedded'] ['wp:featuredmedia'] [0] ['media_details'].sizes['medium'].source_url;
        }
        return data;
      })
    );
  }
  
  search(query : string){
      return this.http.get(this.Post_Api + query);
  }

  search1(keyword, id){
    return this.http.get(
      "http://localhost/trivia/wordpress//wp-json/wp/v2/posts?_embed&filter[order]=DESC&filter[posts_per_page]=5&search=" + keyword + "&page="+id
    );
  }
  index(id){
    return this.http.get('http://localhost/trivia/wordpress//wp-json/wp/v2/posts/?_embed&filter[order]=DESC&filter[posts_per_page]=5&page='+id)
  }
  getPostsContent(id) {
    return this.http.get(`${this.Post_Api}posts/${id}?_embed`).pipe(
      // map(post => {
      //   // post['meadia_url'] = post['_embedded'] ['wp:featuredmedia'] [0] ['media_details'].sizes['medium'].source_url;
      // })
      
    )
  }

}
