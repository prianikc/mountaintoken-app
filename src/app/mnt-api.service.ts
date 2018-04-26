import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


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
  getById(id: string): Observable<any>  {
    return this._http.get<any>(this.mntAPI + '/users/' + id);
}
}
