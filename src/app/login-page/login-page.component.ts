import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // user: any = [];
  public user: {
    message: string
    token: string,
    expiresIn: number,
    loginStatus: boolean
  };
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(user => {
          this.user = user;
          console.log(user);
          // this.router.navigateByUrl('/users');
        });
    }
  }
  ngOnInit() {
  }

}
