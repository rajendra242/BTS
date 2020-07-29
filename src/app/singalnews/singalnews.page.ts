import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singalnews',
  templateUrl: './singalnews.page.html',
  styleUrls: ['./singalnews.page.scss'],
})
export class SingalnewsPage implements OnInit {
 post : any;
  constructor(private router:ActivatedRoute, private Auth : AuthService) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.Auth.getPostsContent(id).subscribe(res =>{
      this.post = res;
      console.log("this is singal news ===> ", this.post);
    })
  }

}
