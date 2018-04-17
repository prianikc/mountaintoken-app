import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';

import { MntApiService } from '../mnt-api.service';

import { User } from '../user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  users: any = [];
  myForm: FormGroup;
  public res: {
    error: {
      succes: boolean,
      message: string
    },
    status: any
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

  addUser(email: string, password: string) {

    const controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {
      email = email.trim();
      password = password.trim();
      if (!email && !password) {
        return;
      }
      this.mntApiService.addUser({ email, password } as User)
        .subscribe(user => {
          this.users.push(user);
        },
          res => {
            this.res = res;
              if (res.status === 201) {
                this.routes.navigate(['/guest']);
              }
          }
        );
    }
  }
}
