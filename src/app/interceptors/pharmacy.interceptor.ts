import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PharmacyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const API_KEY = 'Api123565656';
    const ROLE_KEY = 'ADMIN';

    let headersList = request.headers
      .append(
        'API_KEY',
        `Api123565656`
      )
      .append(
        'ROLE_KEY',
        'ADMIN'
      );

    let cloned: any = request.clone({
      headers: headersList,
    });
    return next.handle(cloned);
  }
}
