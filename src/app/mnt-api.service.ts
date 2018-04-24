import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ResponseObject } from './response-object';

@Injectable()
export class MntApiService {

  private mntAPI = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }
  getUsers(): Observable<any> {
    return this._http.get<any>(this.mntAPI + '/users');
  }
  addUser(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.mntAPI + '/signup', { email, password }, );
  }
}
