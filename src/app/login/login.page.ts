import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { GooglePlus } from '@ionic-native/google-plus/';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  Login_Api: any;
  Login_Form_Data: FormGroup
  loadingController: any;
  constructor(
    private http: HttpClient,
    private Auth: AuthService,
    private router: Router,
    private googlePlus : GooglePlus
  ) {
    this.Login_Form_Data = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
    if(localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
  }
  }

  ngOnInit() {
  }


  loginUser(value) {
    this.Auth.login(value).subscribe((data) => {
      console.log('===> Wordpress User Login ==>', data);
      JSON.stringify(data);
      this.Login_Api = data;
      localStorage.setItem("data", JSON.stringify(this.Login_Api));
      console.log("Success", this.Login_Api)
      this.router.navigate(['folder/folder'], { state: value })
    });
  }

  async doGoogleLogin(){
    // const loading = await this.loadingController.create({
    //   message: 'Please wait...'
    // });
    // this.presentLoading(loading);
  
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': 'webClientId.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
    .then(user =>{
      // loading.dismiss();
  
      this.nativeStorage.setItem('google_user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(() =>{
        this.router.navigate(["/user"]);
      }, error =>{
        console.log(error);
      })
      // loading.dismiss();
    }, err =>{
      console.log(err)
      // loading.dismiss();
    });
  
    // async presentLoading(loading) {
    //   return await loading.present();
    // }
  }
  // login(){
  //   this.googlePlus.login({})
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err));
  // }

}
