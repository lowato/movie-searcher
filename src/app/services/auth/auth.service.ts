import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private loginUserSubject: BehaviorSubject<User>;
    public loginUser$: Observable<User>;

    constructor(
      private router: Router,
      private http: HttpClient,
      private _storageService: StorageService,
    ) {
      this.loginUserSubject = new BehaviorSubject<User>(this._storageService.getSessionStorage('user'));
      this.loginUser$ = this.loginUserSubject.asObservable();
    }

    public get loginUserValue(): User {
      return this.loginUserSubject.value;
    }

    public login(username, password): Observable<User> {
      return this.http.post<User>(environment.userAuthenticate, { username, password })
        .pipe(map(user => {
          this.loginUserSubject.next(user);
          return user;
        }));
    }

    public register(username, password): Observable<User> {
      return this.http.post<User>(environment.userRegister, { username, password })
        .pipe(map(user => {
          this.loginUserSubject.next(user);
          return user;
        }));
    }

    public logout(): void {
      this._storageService.finishSessionStorage('user');
      this.loginUserSubject.next(null);
      this.router.navigateByUrl('/login');
    }

}
