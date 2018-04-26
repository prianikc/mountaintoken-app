import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MntApiService } from '../mnt-api.service';

import { User } from '../user';
import { ResInterceptor } from '../res-interceptor';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  users: any = [];
  myForm: FormGroup;
  public user: {
      succes: boolean,
      message: string,
      status: number
  };
  constructor(
    private mntApiService: MntApiService,
    private fb: FormBuilder,
    public routes: Router) {
  }

  ngOnInit() {
    this.initForm();
  }



  private initForm(): void {
    this.myForm = this.fb.group({
      // type: null,
      email: [null, [
        Validators.required, Validators.email
      ]],
      password: [null, [
        Validators.required
      ]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myForm.controls[controlName];

    const result: boolean = control.invalid && control.touched;

    return result;
  }

  addUser() {
    const val = this.myForm.value;
    const controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {
      val.email = val.email.trim();
      val.password = val.password.trim();
      if (!val.email && !val.password) {
        return;
      }
       return this.mntApiService.addUser(val.email, val.password)
        .subscribe(user => {
          this.user = user;
          console.log(user);
        });
    }
  }
}
