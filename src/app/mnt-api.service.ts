import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
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
  addUser(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this._http.post<any>(this.mntAPI + '/signup', user, httpOptions);
  }
}
