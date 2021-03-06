import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class MntApiService {
  private data: any = [];
  private mntAPI = 'https://mountaintoken.net';
  private homeAPI = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this._http.get<any>(this.mntAPI + '/users');
  }

  addUser(user: User): Observable<any> {
    return this._http.post<any>(this.mntAPI + '/signup', user);
  }

  addEditUser(id, user: User): Observable<any> {
    return this._http.post<any>(this.mntAPI + '/profile/' + id, user);
  }

  getById(id: string): Observable<any> {
    return this._http.get<any>(this.mntAPI + '/profile/' + id)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.message);
  }
}
