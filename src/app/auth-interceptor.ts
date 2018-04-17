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
        const idtoken = localStorage.getItem('id_token');
        if (idtoken) {
            const token = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + idtoken)
            });
            return next.handle(token);
        } else {
            return next.handle(req);
        }
    }
}
