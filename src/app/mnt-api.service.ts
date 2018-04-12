import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MntApiService {

  private mntAPI = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }
  getUsers(): Observable<any> {
    return this._http.get<any>(this.mntAPI + '/users');
  }
  addUser(user: User): Observable<User> {
    return this._http.post(this.mntAPI + '/signup', user);
  }
}
