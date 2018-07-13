import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegistrationValidator } from '../registration.validator';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  private token: string = localStorage.getItem('id_token');
  private tokenPayload: any = jwt_decode(this.token) || null;

  private id = this.tokenPayload.userId;
  public user: {
    sacces: boolean
  };
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  private initForm(): void {
    this.form = this.fb.group({
      repeatPassword: [null, Validators.required],
      password: [null, [Validators.required]]
    },
      {
        validator: RegistrationValidator('password', 'repeatPassword')
      });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];

    const result: boolean = control.invalid && control.touched;

    return result;
  }
  changePass() {
    const val = this.form.value;
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {
        this.authService.changePass(this.id, val.password)
          .subscribe(user => {
            this.user = user;
            if (this.user.sacces) {
              this.router.navigate(['profile']);
            }
          });
    }
  }
  ngOnInit() {
    this.initForm();
  }


}
