import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-regester',
  templateUrl: './regester.page.html',
  styleUrls: ['./regester.page.scss'],
})
export class RegesterPage implements OnInit {
Add_User : any;
regester_Form_Data:FormGroup;
  constructor(  private http: HttpClient,private router: Router) { 
    this.regester_Form_Data = new FormGroup({
      name : new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {
  }
  regesterUser(value){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.Add_User = `http://localhost/trivia/wordpress/wp-json/custom-plugin/register?`;
    // console.log(this.Add_User);
    return this.http.post(this.Add_User, `user_login=${value.name}&
    &user_nicename=${value.password}
    &user_email=${value.username}`
    , { headers, responseType: 'text' })
      .subscribe((data) => {
        console.log('this is new datapost ====>', data);
      })
  }
}
