import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Remove when https://github.com/angular/angular/pull/18466 gets merged.

@Injectable()
export class ParseInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.responseType === 'json') {
            req = req.clone({ responseType: 'text' });

            return next.handle(req).do(response => {
                if (response instanceof HttpResponse) {
                    response = response.clone<any>({ body: JSON.parse(response.body) });
                }

                return response;
            });
        }

        return next.handle(req);
    }
}
