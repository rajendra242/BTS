import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
// import { AngularFireModule } from '@angular/fire';
// import { Firebase  } from '@ionic-native/firebase/ngx';
// import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  toatalPost = null;
  pages: any;
  catagories_id : any;
  public categories : any = [];


  // Wordpress APIs
  Post_Api = `https://btp-test.mylionsgroup.com/wp-json/wp/v2/`;


  constructor(private http: HttpClient,
    //  private router: Router,
    //  private firebase: Firebase,
    //  private afs: AngularFireModule,
    //  private platform: Platform
     ) {
    // this.catagories_id =  this.router.getCurrentNavigation().extras.state
    // console.log('servies id = ===>', this.catagories_id);
   }


  //  async getToken() {
  //   let token;

  //   if (this.platform.is('android')) {
  //     token = await this.firebase.getToken();
  //   }

  //   if (this.platform.is('ios')) {
  //     token = await this.firebase.getToken();
  //     await this.firebase.grantPermission();
  //   }

  //   this.saveToken(token);
  // }

  // private saveToken(token) {
  //   if (!token) return;

  //   const devicesRef = this.afs.collection('devices');

  //   const data = {
  //     token,
  //     userId: 'testUserId'
  //   };

  //   return devicesRef.doc(token).set(data);
  // }



   private fooSubject = new Subject<any>();

   publishSomeData(data: any) {
       this.fooSubject.next(data);
   }

   getObservable(): Subject<any> {
       return this.fooSubject;
   }



  login(value) {
    console.log(value)
    localStorage.setItem("value", JSON.stringify(value));
    console.log('this is value of', value)
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');

    return this.http.get(`https://btp-test.mylionsgroup.com//wp-json/custom-plugin/login?username=${value.username}&password=${value.password}`
      );
      // { headers, responseType: 'json' }
  }


  getPosts(page = 1) {
    let options = {
      observe: "response" as "body",
      params: {
        par_page: '5',
        page : '1',
        // page: '' + page,
        

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
      "https://btp-test.mylionsgroup.com/wp-json/wp/v2/posts?_embed&filter[order]=DESC&filter[posts_per_page]=5&search=" + keyword + "&page="+id
    );
  }
  index(id){
    return this.http.get('https://btp-test.mylionsgroup.com/wp-json/wp/v2/posts/?_embed&filter[order]=DESC&filter[posts_per_page]=5&page='+id)
  }
  getPostsContent(id) {
    return this.http.get(`${this.Post_Api}posts/${id}?_embed`).pipe(
    
    )
  }
  getCategories(){
    var user = localStorage.getItem('userId')
    return this.http.get(`https://btp-test.mylionsgroup.com//wp-json/custom-plugin/get_categoriesjj?user_id=${user}`)
  }

}
