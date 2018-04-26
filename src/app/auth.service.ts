import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  private mntAPI = 'http://localhost:3000';
  private res: {
    message: string
    token: string,
    expiresIn: number,
    loginStatus: boolean
  };
  constructor(
    private _http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.mntAPI + '/login', { email, password })
      .do(res => {
        this.res = res;
        console.log(res);
        if (res.loginStatus === true) {
          localStorage.setItem('id_token', res.token);
        }
      })
      .shareReplay();
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}
