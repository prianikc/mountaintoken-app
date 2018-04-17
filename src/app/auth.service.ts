import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import 'rxjs/Rx';
import { User } from './user';

@Injectable()
export class AuthService {
  private mntAPI = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  login(email: string, password: string) {
    return this._http.post<User>(this.mntAPI + '/login', { email, password })
      // this is just the HTTP call,
      // we still need to handle the reception of the token
      .do(res => this.setSession)
      .shareReplay();
  }
  private setSession(checkAuth) {
    const expiresAt = moment().add(checkAuth.expiresIn, 'second');
    localStorage.setItem('id_token', checkAuth.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expiers_at');
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiersAt = JSON.parse(expiration);
    return moment(expiersAt);
  }
}
