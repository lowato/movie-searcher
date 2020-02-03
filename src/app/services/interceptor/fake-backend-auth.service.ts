import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith(environment.userRegister) && method === 'POST':
          return register();
        case url.endsWith(environment.userAuthenticate) && method === 'POST':
          return authenticate();
        default:
          return next.handle(request);
      }
    }

    // route functions

    function register() {
      const user = body

      if (users.find(x => x.username === user.username)) {
        return error(401);
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      return ok({
        id: user.id,
        username: user.username,
        token: 'f12ba140'
      });
    }

    function authenticate() {
      const { username, password } = body;
      const user = users.find(x => x.username === username && x.password === password);
      if (!user) return error(401);
      return ok({
        id: user.id,
        username: user.username,
        token: 'f12ba140'
      })
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }))
    }
    function error(message) {
      return throwError(message);
    }

  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
