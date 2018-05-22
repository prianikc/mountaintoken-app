import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MntApiService } from '../mnt-api.service';

import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public data: {
    user: [
      {
        email?: string;
        password?: string;
        first_name?: string;
        last_name?: string;
        phone_number?: string;
        smartkontract_id?: string;
        country?: string;
        city?: string;
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

  ngOnInit() {
    this.getUser(this.id);
  }


  getUser(id): void {
    this.mntApiService.getById(id)
      .subscribe(users => {
        this.data = users;
      });
  }
}
