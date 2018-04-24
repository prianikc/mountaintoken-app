import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { MntApiService } from './mnt-api.service';

@Injectable()
export class ResInterceptor implements HttpInterceptor {
    constructor(public response: MntApiService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            responseType: 'json'
        });
        return next.handle(clonedRequest)
            .do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    event.clone({
                        // body: JSON.parse(event.body),
                    });
                    console.log(event.body.token);
                    return event.body.token;
                }
            })
            .catch((error: HttpErrorResponse) => {
                const parsedError = Object.assign({}, error, { error: JSON.parse(error.error) });
                return Observable.throw(new HttpErrorResponse(parsedError));
            });
    }
}
