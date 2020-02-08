import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from '../auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginUser = this.authenticationService.loginUserValue;
    if (loginUser && loginUser.token) {
      request = request.clone({
        setParams: {
          apiKey: loginUser.token
        }
      });
    }

    return next.handle(request);
  }
}
