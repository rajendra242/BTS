import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Platform, MenuController, NavController, AlertController } from '@ionic/angular';

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
  add_user_url: any;
  user_login_google: any;
  user_login_google_email: any;
  isError: boolean = false;
  errorMessage: any;
  fbdetail: any;

  dtoken :any;
  constructor(
    private http: HttpClient,
    private Auth: AuthService,
    private router: Router,
    private googlePlus: GooglePlus,
    private menuCtrl: MenuController,
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
    this.dtoken = localStorage.getItem('deviceToken');

  }
  ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
  }


  loginUser(value) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.add_user_url = 'https://btp-test.mylionsgroup.com/wp-json/custom-plugin/add_user_categories';

    this.Auth.login(value).subscribe((data) => {
      console.log('===> Wordpress User Login ==>', data);
      // this.isError = false;
      JSON.stringify(data);
      this.Login_Api = data;

      localStorage.setItem("data", JSON.stringify(this.Login_Api));
      localStorage.setItem('userId', JSON.stringify(data['ID']))
      console.log("Success", this.Login_Api)
      this.router.navigate(['folder/folder'], { state: value })
      return this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/add_user_categories?user_id=${data['ID']}`, { headers, responseType: 'text', }).subscribe((data) => {
        console.log("New User Login Catagories", data);
      });

    }, (err) => {
      console.log(err.status)
      if (err.status == 400) {
        this.errorMessage = "Check your Email/Password and try again";
      } else if (err.status == 404) {
        this.errorMessage = "Please check out the connection and try again";
      } else if (err.status == 500) {
        this.errorMessage = "Username/password Wrong";
      }
      this.isError = true;
      console.log("err in login ", err);
    })
    console.log(value);
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
        console.log('FFFFFFFFFFFFF', this.user_login_google_email);
        console.log(res.userId)




        // change it in with google *********
        this.user_login_google = this.user_login_google_familyName;
        this.user_login_google_email = this.user_login_google_email
        var email = this.user_login_google_email;

        console.log('=====>', email)


        this.api = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/google_check`
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        let insertgoogle = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/google_user_insert?`

        console.log('google');
        this.http.post(this.api, `email=${this.user_login_google_email}`, { headers })
          .subscribe((check_data) => {
            console.log("===================>", check_data)

            if (check_data['error'] != 'empty') {
              localStorage.setItem('userId', check_data[0].ID)
              console.log('this is new datapost ====>', check_data['error']);
              return this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/login_google?user_email=${check_data[0].user_email}`, { headers, responseType: 'text', }).subscribe((datapost) => {
                //console.log('google data', data)
                localStorage.setItem('google_user', JSON.stringify(datapost));
                localStorage.setItem('data', JSON.stringify(datapost));
                // console.log('ANIL', datapost)
                if (datapost != "false") {
                  console.log('else', check_data[0].ID)
                  return this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/add_user_categories?user_id=${check_data[0].ID}`, { headers, responseType: 'text', }).subscribe((add_cat_data) => {
                    // return this.http.post(this.add_user_url, `user_id=${check_data['ID']}`, { headers, responseType: 'text' }).subscribe((add_cat_data) => {
                    this.router.navigate(['folder/folder']);
                    console.log("New User Login Catagories", add_cat_data);

                  });

                } else {
                  console.log('dd');
                  this.router.navigate(['/login'])
                  // console.log('invalid/passwird')
                  alert('not empty ')
                }
              })
            } else {
              console.log('some')

              console.log('user_login in else ===>', this.user_login_google)
              console.log('user_email in else ===>', this.user_login_google_email)
              return this.http.post(insertgoogle, `user_login=${this.user_login_google}&user_email=${this.user_login_google_email}&user_activation_key=${this.dtoken}`, { headers, responseType: 'text' }).subscribe((insert_data) => {
                console.log("inser data", insert_data);
                if (insert_data) {
                  this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/login_google?user_email=${this.user_login_google_email}`, { headers, responseType: 'text' }).subscribe((datapost) => {
                    console.log('google data', datapost)
                    // localStorage.setItem('google_user', JSON.stringify(datapost));
                    localStorage.setItem('userId', datapost);
                    let user_ID = localStorage.getItem('userId')
                    console.log(datapost)
                    if (datapost != 'false') {
                      // console.log('ffffff')
                      return this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/add_user_categories?user_id=${datapost}`, { headers, responseType: 'text', }).subscribe((add_cat_data) => {
                        // return this.http.post(this.add_user_url, `user_id=${datapost}`, { headers, responseType: 'text' }).subscribe((add_cat_data) => {
                        this.router.navigate(['folder/folder']);
                        console.log("New User Login Catagories", add_cat_data);
                      });
                    } else {
                      this.router.navigate(['/login'])
                      console.log('invalid/passwird')
                    }
                  })
                }

              })
            }
          })
      })
      )
      .catch(err => console.error(err));
  }



  // FbLogin() {
  //   this.fb.login(['public_profile', 'email'])
  //     .then((res: FacebookLoginResponse) => {
  //       console.log('Logged into Facebook!', res)
  //       console.log(res.authResponse['userID']);
  //       localStorage.setItem('userId', JSON.stringify(res.authResponse['userID']));
  //       this.router.navigate(['folder/folder'])
  //     })

  //     .catch(e => console.log('Error logging into Facebook', e))
  // }

  FbLogin() {
    let permissions = new Array<string>();
    permissions = ["public_profile", "email"];

    this.fb.login(permissions).then((response: FacebookLoginResponse) => {
      console.log(response);
      console.log('===========>', response.authResponse.userID);
      let fbuserId = response.authResponse.userID
      this.fb.api('/me?fields=name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.fbdetail = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
        console.log('===================>', this.fbdetail.email)
        console.log('============> FB details', this.fbdetail)



        // *******************Facbookk Login**********************
        this.api = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/google_check`
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        let insertgoogle = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/google_user_insert?`

        console.log('facebook');
        return this.http.post(this.api, `email=${this.fbdetail.email}`, { headers })
          .subscribe((check_data) => {
            // alert('hello')
            console.log("============> Chack Fb Email", check_data)

            if (check_data['error'] != 'empty') {
              localStorage.setItem('userId', check_data[0].ID)
              console.log('this is new datapost ====>', check_data['error']);
              return this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/login_google?user_email=${check_data[0].user_email}`, { headers, responseType: 'text', }).subscribe((datapost) => {
                //console.log('google data', data)
                localStorage.setItem('google_user', JSON.stringify(datapost));
                localStorage.setItem('data', JSON.stringify(datapost));
                console.log('ANIL', datapost)
                if (datapost != "false") {
                  console.log('else', check_data[0].ID)
                  return this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/add_user_categories?user_id=${check_data[0].ID}`, { headers, responseType: 'text', }).subscribe((add_cat_data) => {
                    // return this.http.post(this.add_user_url, `user_id=${check_data['ID']}`, { headers, responseType: 'text' }).subscribe((add_cat_data) => {
                    this.router.navigate(['folder/folder']);
                    console.log("New User Login Catagories", add_cat_data);

                  });

                } else {
                  console.log('dd');
                  this.router.navigate(['/login'])
                  // console.log('invalid/passwird')
                  alert('not empty ')
                }
              })
            } else {
              console.log('some')
              console.log('user_login in else ===>', this.fbdetail.username)
              console.log('user_email in else ===>', this.fbdetail.email)
              return this.http.post(insertgoogle, `user_login=${this.fbdetail.username}&user_email=${this.fbdetail.email}`, { headers, responseType: 'text' }).subscribe((insert_data) => {
                console.log("inser data", insert_data);
                if (insert_data) {
                  this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/login_google?user_email=${this.fbdetail.email}`, { headers, responseType: 'text' }).subscribe((datapost) => {
                    console.log('google data', datapost)
                    // localStorage.setItem('google_user', JSON.stringify(datapost));
                    localStorage.setItem('userId', datapost);
                    let user_ID = localStorage.getItem('userId')
                    console.log(datapost)
                    if (datapost != 'false') {
                      // console.log('ffffff')
                      return this.http.get(`https://btp-test.mylionsgroup.com/wp-json/custom-plugin/add_user_categories?user_id=${datapost}`, { headers, responseType: 'text', }).subscribe((add_cat_data) => {
                        // return this.http.post(this.add_user_url, `user_id=${datapost}`, { headers, responseType: 'text' }).subscribe((add_cat_data) => {
                        this.router.navigate(['folder/folder']);
                        console.log("New User Login Catagories", add_cat_data);
                      });
                    } else {
                      this.router.navigate(['/login'])
                      console.log('invalid/passwird')
                    }
                  })
                }

              })
            }
          });
      })
    });
  }
  // FbLogin() {
  //   this.loading = true;
  //   this.isDisable = true;
  //   let permissions = new Array<string>();
  //   //the permissions your facebook app needs from the user
  //   permissions = ["public_profile", "email"];
  //   this.fb.login(permissions)
  //     .then((response: FacebookLoginResponse) => {
  //       console.log('response=============>', response);
  //       this.fetchFacebookData(response.authResponse.accessToken).subscribe(async (res: any) => {
  //         console.log('facebook data============>', res);
  //         const userId = response.authResponse.userID
  //         const data = {
  //           social_login_id: userId,
  //           access_token: response.authResponse.accessToken,
  //           social_login_type: 'facebook',
  //           username: res.name,
  //           first_name: res.first_name,
  //           last_name: res.last_name
  //         }
  //         if (res.email) {
  //           data['email'] = res.email
  //           console.log(res.email);
  //         }
  //         await this._userServices.loginUser(data).subscribe((res: any) => {
  //           console.log("res of fb login", res);
  //           this._userServices.sendDeviceToken().subscribe((response) => {
  //             console.log("res===>", response);
  //           }, err => {
  //             console.log("errr===in fb login", err);
  //             this.loading = false;
  //             this.isDisable = false
  //           });
  //           this.appComponent.sucessAlert("Login Successful", "Welcome")
  //           this.loading = false;
  //           this.isDisable = false;
  //           if (res.data.first_name && res.data.last_name && res.data.email) {
  //             this.router.navigate(['/home']);
  //           } else {
  //             console.log("in else")
  //             this.router.navigate(['/home/profile'])
  //           }
  //         }, (err) => {
  //           this.appComponent.errorAlert(err.error.message);
  //           console.log("err in fb login", err);
  //           this.loading = false;
  //           this.isDisable = false;
  //         })
  //       })
  //     })
  //     .catch((err) => {
  //       console.error("err", err);
  //       this.loading = false;
  //       this.isDisable = false;
  //       this.appComponent.errorAlert("Error in Facebook Login");
  //     });
  // }
  // fetchFacebookData(accessToken) {
  //   return this.http.get("https://graph.facebook.com/v7.0/me?access_token=" + accessToken + "&debug=all&fields=id,name,first_name,last_name,email&format=json&method=get&pretty=1&suppress_http_code=1")
  // }
}
