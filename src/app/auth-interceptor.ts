import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) { }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('id_token');
        console.log(token + 'Ooooo not');
        if (token) {
            const idtoken = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + ' ' + token)
            });
            console.log(idtoken);
            return next.handle(idtoken);
        } else {
            return next.handle(req);
        }
    }
}
