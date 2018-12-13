import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url: string = req.url;
        const regex = new RegExp(/login|signup/ig);

        // POST SET DEFAULT TOKEN FOR EACH REQUEST
        if (!regex.test(url)) {
            const headers = req.headers
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${localStorage.token}`);

            const cloneReq = req.clone({ headers });

            return next.handle(cloneReq);
        }

        // RETURN default request
        return next.handle(req);
    }

}
