import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
// import { SinglePage } from '../singalnews/singalnews';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchQuery: string = '';
  posts :any = [];
  page :number = 1;
  isLoding = false;
  par_page: number = 5;
  showLoadMore = false;
  datas: any;

  constructor(private Auth: AuthService,navCtrl: NavController) {

    Auth.index(1).subscribe( data => {
      this.datas = data;
    });

   }

  ngOnInit() {


  }
  onSearch() {
    console.log(this.searchQuery);
    this.posts = [];
    this.searchPost();
  }
  searchPost() {
    throw new Error("Method not implemented.");
  }

  // searchPost() {
  //   if (!this.isLoding && this.searchQuery.length > 0) {
  //     this.isLoding = true;
  //     this.Auth.search('posts?_embed&par_page='+this.par_page+'&page'+this.page+'&search'+this.searchQuery).subscribe((data) => {
  //       this.isLoding = false;
  //       this.posts = this.posts.concat(data);
  //       console.log('serach post ===>',this.posts)
  //       if (data.length === this.par_page) {
  //         this.page++;
  //         this.showLoadMore = true;
  //       } else {
  //         this.showLoadMore = false;
  //       }
  //     }, (error) => {
  //       this.isLoding = false;
  //       if (error.error.code === "post invalid number") {
  //         this.showLoadMore = false;
  //       }
  //     });
  //   }
  // }
  // openSinglePage(url){
  //   this.navCtrl.push(SinglePage, {
  //     url:url
  //   })
  // }
  search1(keyword){
    this.Auth.search1(keyword,1).subscribe(data=>{
      this.datas = data
    });
  }
  
  onCencel(ev){
    if(!ev.target.value){
      this.Auth.index(1).subscribe(data => {
        this.datas = data;
      })
    }
  }
  clearSearch(){
    this.searchQuery ='';
  }
}
