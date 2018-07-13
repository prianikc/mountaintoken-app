import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MntApiService } from '../mnt-api.service';

import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
  form: FormGroup;
  public user: {
    succes: boolean,
    message: string,
    status: number
  };
  public data: {
    user: [
      {
        email: string,
        first_name: string,
        last_name: string,
        password: string,
        phone_number: string,
        smartkontract_id: string,
        city: string,
        country: string
      }
    ]
  };
  private token: string = localStorage.getItem('id_token');
  private tokenPayload: any = jwt_decode(this.token) || null;

  private id = this.tokenPayload.userId;

  constructor(
    private mntApiService: MntApiService,
    private fb: FormBuilder,
    public routes: Router) { }

  private initForm(): void {
    this.form = this.fb.group({
      // type: null,
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      phone_number: [null, [Validators.required]],
      smartkontract_id: [null, [Validators.required]],
      country: [null],
      city: [null]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];

    const result: boolean = control.invalid && control.touched;

    return result;

  }
  ngOnInit() {
    this.getUser(this.id);
    this.initForm();
  }


  getUser(id): void {
    this.mntApiService.getById(id)
      .subscribe(users => {
        this.data = users;
      });
  }
  editUser(): void {

    const val = this.form.value;
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
    } else {
      val.email = val.email.trim();
      val.password = val.password.trim();
      val.first_name = val.first_name.trim();
      val.last_name = val.last_name.trim();
      val.phone_number = val.phone_number.trim();
      val.smartkontract_id = val.smartkontract_id.trim();
    }
    if (!val.email && !val.password) {
      return;
    }
    const dataUser = this.form.value;
    this.mntApiService.addEditUser(this.id, dataUser)
      .subscribe(user => {
        this.user = user;
        if (user.succes) {
          this.routes.navigate(['profile']);
        }
      });
  }
}

