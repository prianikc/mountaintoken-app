import {Component, OnInit} from '@angular/core';
import {MntApiService} from '../mnt-api.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {User} from '../user';

@Component( {
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: [ './signup-page.component.scss' ]
} )
export class SignupPageComponent implements OnInit {
  users: any = [];
  myForm: FormGroup;

  constructor( private mntApiService: MntApiService,
               private fb: FormBuilder ) {
  }

  ngOnInit() {
    this.initForm();
  }



  private initForm(): void {
    this.myForm = this.fb.group( {
      //type: null,
      email: [ null, [
        Validators.required, Validators.email
      ] ],
      password: [ null, [
        Validators.required
      ] ]
    } );
  }

  isControlInvalid( controlName: string ): boolean {
    const control = this.myForm.controls[ controlName ];

    const result: boolean = control.invalid && control.touched;

    return result;
  }

  addUser( email: string, password: string ): void {

    const controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys( controls )
        .forEach( controlName => controls[ controlName ].markAsTouched() );
      return;
    } else {
      email = email.trim();
      password = password.trim();
      if (!email && !password) {
        return;
      }
      this.mntApiService.addUser( { email, password } as User )
        .subscribe( user => {
          this.users.push(user);
        });
    }
  }
}
