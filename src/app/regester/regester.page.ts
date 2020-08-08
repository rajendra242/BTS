import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-regester',
  templateUrl: './regester.page.html',
  styleUrls: ['./regester.page.scss'],
})
export class RegesterPage implements OnInit {
  Add_User: any;
  regester_Form_Data: FormGroup;
  constructor(private http: HttpClient, private router: Router, private toastCtrl: ToastController) {
    this.regester_Form_Data = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {
  }
  async regesterUser(value) {
    console.log(value.username);
    console.log(value.email)
    console.log(value.password)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.Add_User = `https://btp-test.mylionsgroup.com/wp-json/custom-plugin/register`;
    if (value.password !== value.confirmPassword) {
      const toast = await this.toastCtrl.create({
        message: 'enter correct password.',
        duration: 2000
      })
      toast.present();
    } else {
      return this.http.post(this.Add_User, `user_login=${value.username}&user_pass=${value.password}&user_email=${value.email}`, { headers, responseType: 'text' })
        .subscribe(async (data) => {
          // alert('New User Regester')
          const toast = await this.toastCtrl.create({
            message: 'user successfully register.',
            duration: 2000
          })
          toast.present();
          console.log('this is new datapost ====>', data);
        })
    }
    // console.log(this.Add_User);

  }
}
