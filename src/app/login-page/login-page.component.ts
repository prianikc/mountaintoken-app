import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user: any = [];
  public res: {
    message: string
    token: string,
    expiresIn: number
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
          this.user.push(user);
        },
        res => {
          this.res = res;
          console.log(res);
        },
        () => {
          console.log('User is logged in');
          // this.router.navigateByUrl('/users');
        }
        );
    }
  }
  ngOnInit() {
  }

}
