import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthTokenHttpInterceptor implements HttpInterceptor {

    constructor(
        private auth: AngularFireAuth
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.auth.idToken.pipe(
            take(1),
            switchMap(idToken => {
                // let clone = req.clone()
                if (idToken) {
                    console.log(JSON.stringify(req.headers));
                    req = req.clone({
                        setHeaders: {
                            Authorization: `Bearer ${idToken}`,
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                        }
                    });
                }
                return next.handle(req)
            })
        )

    }
}

export const AuthTokenHttpInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenHttpInterceptor,
    multi: true
}
