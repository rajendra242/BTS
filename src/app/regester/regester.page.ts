import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastController,MenuController } from '@ionic/angular';


@Component({
  selector: 'app-regester',
  templateUrl: './regester.page.html',
  styleUrls: ['./regester.page.scss'],
})
export class RegesterPage implements OnInit {
  Add_User: any;
  dtoken :any;
  regester_Form_Data: FormGroup;
  constructor(private http: HttpClient, private router: Router, private toastCtrl: ToastController, private menuCtrl: MenuController,
    ) {
    this.regester_Form_Data = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(4),
      ])),

      email: new FormControl('',  Validators.compose([
        Validators.required,
        // Validators.maxLength(10),
        // Validators.minLength(10),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')

      ])),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {
    this.dtoken = localStorage.getItem('deviceToken');
      console.log("=======> device token",this.dtoken)
  }
  ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
  }

  async regesterUser(value) {
    console.log(value.username);
    
    //  ;
    console.log(value.email)
    console.log(value.password)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.Add_User = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/register`;

    if (value.username == '' || value.email == '' || value.password == '') {
      const toast = await this.toastCtrl.create({
        message: 'Please Enter all field.',
        duration: 2000
      })
      toast.present();
    } else if (value.password !== value.confirmPassword) {
      const toast = await this.toastCtrl.create({
        message: 'enter correct password.',
        duration: 2000
      })
      toast.present();
    } else {
      
      return this.http.post(this.Add_User, `user_login=${value.username}&user_pass=${value.password}&user_email=${value.email}&user_activation_key=${this.dtoken}`, { headers, responseType: 'text' })
        .subscribe(async (data) => {
          // alert('New User Regester')
          const toast = await this.toastCtrl.create({
            message: 'user successfully register.',
            duration: 2000
          })
          toast.present();
          console.log('this is new datapost ====>', data);
          this.router.navigate(['login']);
        })
    }
    // console.log(this.Add_User);

  }
}
