import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class MntApiService {
  private data: any = [];
  private mntAPI = 'http://localhost:3000';
  headers = new HttpHeaders({
    'Accept': 'text/html'  // <-- add this
  });

  constructor( private _http: HttpClient ) {
  }

  getUsers(): Observable<any> {
    return this._http.get<any>( this.mntAPI + '/users' );
  }

  addUser( user: User ): Observable<any> {
    return this._http.post<any>( this.mntAPI + '/signup', user );
  }

  addEditUser( id, user: User ): Observable<any> {
    return this._http.post<any>( this.mntAPI + '/profile/' + id, user );
  }

  getById( id: string ): Observable<any> {
    return this._http.get( this.mntAPI + '/profile/' + id, {headers: this.headers} )
      .do( data => {
        this.data = data;
        console.log( data );
      } )
      .catch( this.handleError );
  }

  private handleError( err: HttpErrorResponse ) {
    console.log( err );
    return Observable.throw( err.message );
  }
}
