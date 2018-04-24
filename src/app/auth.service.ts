import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  private mntAPI = 'http://localhost:3000';
  public loggedIn = new BehaviorSubject<boolean>(false);
  public loggedOut = new BehaviorSubject<boolean>(true);
  public res: {
    message: string
    token: string,
    expiresIn: number,
    loginStatus: boolean
  };
  constructor(private _http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.mntAPI + '/login', { email, password })
      .do(res => {
        this.res = res;
        console.log(res);
        if (res.loginStatus === true) {
          const expiresAt = moment().add(res.expiresIn, 'second');
          console.log(expiresAt);
          localStorage.setItem('id_token', res.token);
          localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
          this.loggedIn.next(this.isLoggedIn());
          this.loggedOut.next(this.isLoggedOut());
        }
      })
      .shareReplay();
  }
  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }
  // get isLoggedOut() {
  //   return this.loggedOut.asObservable();
  // }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.loggedIn.next(this.isLoggedIn());
    this.loggedOut.next(this.isLoggedOut());
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
