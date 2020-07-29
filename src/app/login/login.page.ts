import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Login_Api: any;
  Login_Form_Data: FormGroup
  constructor(
    private http: HttpClient,
    private Auth: AuthService,
    private router: Router
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

}
