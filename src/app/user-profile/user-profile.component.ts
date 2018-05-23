import {Component, OnInit} from '@angular/core';
import {MntApiService} from '../mnt-api.service';

import * as jwt_decode from 'jwt-decode';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.scss' ]
} )
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
  private token: string = localStorage.getItem( 'id_token' );
  private tokenPayload: any = jwt_decode( this.token ) || null;

  private id = this.tokenPayload.userId;

  constructor( private mntApiService: MntApiService ) {
  }

  ngOnInit() {
    this.getUser( this.id );
  }


  getUser( id ) {
    this.mntApiService.getById( id )
      .subscribe( users => {
        this.data = users;
      } );
  }
}
