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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      phone_number: [null, [Validators.required]],
      smartkontract_id: [null, [Validators.required]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]]
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
        val.first_name = val.first_name.trim();
        val.last_name = val.last_name.trim();
        val.phone_number = val.phone_number.trim();
        val.smartkontract_id = val.smartkontract_id.trim();
        val.country = val.country.trim();
        val.city = val.city.trim();
      if (!val.email && !val.password) {
        return;
      }
const dataUser = this.myForm.value;
      return this.mntApiService.addUser(dataUser)
        .subscribe(user => {
          this.user = user;
          console.log(user);
        });
    }
  }
}
