import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

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
  google_res: any;
  add_user_url : any;
  user_login_google: any;
  user_login_google_email: any;


  constructor(
    private http: HttpClient,
    private Auth: AuthService,
    private router: Router,
    private googlePlus: GooglePlus,
    public fb: Facebook
    // private headers : HttpHeaders
  ) {
    this.Login_Form_Data = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
    }
  }

  ngOnInit() {
  }


  loginUser(value) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.add_user_url = 'https://btp-test.mylionsgroup.com/wp-json/custom-plugin/add_user_categories';
    this.Auth.login(value).subscribe((data) => {
      console.log('===> Wordpress User Login ==>', data);
      JSON.stringify(data);
      this.Login_Api = data;
      localStorage.setItem("data", JSON.stringify(this.Login_Api));
      localStorage.setItem('userId',JSON.stringify(data['ID']))
      console.log("Success", this.Login_Api)
      this.router.navigate(['folder/folder'], { state: value })
      // return this.http.post(this.add_user_url,`user_id=${data['ID']}`,{ headers, responseType: 'text' }).subscribe((data) =>{
      //   console.log("New User Login Catagories",data);
      // });
      
      
    });
  }

  async doGoogleLogin() {

    this.googlePlus.login({})
      .then((res => {
        // this.google_res = res.email
        console.log(res);
        console.log(res.familyName);
        console.log(res.givenName);
        // console.log(res.email);
         this.user_login_google_familyName = res.familyName
         this.user_login_google = res.givenName
         this.user_login_google_email = res.email
         console.log(this.user_login_google_email);
         console.log(res.userId)
         localStorage.setItem('userId',res.userId)

      })
      )
      .catch(err => console.error(err));



    // change it in with google *********
    this.user_login_google = this.user_login_google_familyName;
    this.user_login_google_email = this.user_login_google_email
    var email = this.user_login_google_email;



    this.api = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/google_check`
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let insertgoogle = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/google_user_insert`

    console.log('google');
    this.http.post(this.api, `email=${this.user_login_google_email}`, { headers })
      .subscribe((data) => {

        if (data['error'] != 'empty') {
          console.log('this is new datapost ====>', data['error']);
          this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/login_google?username=${data[0].user_login}`,{ headers, responseType: 'text', }).subscribe((datapost) => {
            //console.log('google data', data)
            localStorage.setItem('google_user', JSON.stringify(data));
            this.router.navigate(['folder/folder']);
          })
        } else {
          console.log('some')
          return this.http.post(insertgoogle, `user_login=${this.user_login_google}&user_email=${this.user_login_google_email}`, { headers, responseType: 'text' }).subscribe((data) => {
            console.log("inser data", data);
            if (data) {
              this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/login_google?username=${this.user_login_google_email}`,{ headers, responseType: 'text' }).subscribe((datapost) => {
                console.log('google data', datapost)
                //localStorage.setItem('google_user', JSON.stringify(data));
                this.router.navigate(['folder/folder']);
              })
            }

          })
        }
      })
    
  }



  FBlogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res)
        console.log(res.authResponse['userID']);
        localStorage.setItem('userId', JSON.stringify(res.authResponse['userID']));
        this.router.navigate(['folder/folder'])
      }) 
        
      .catch(e => console.log('Error logging into Facebook', e))
  }

}
