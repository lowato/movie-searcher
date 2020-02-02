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
    public loginUser: Observable<User>;

    constructor(
      private http: HttpClient,
      private storageService: StorageService,
      private router: Router
    ) {
      this.loginUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.loginUser = this.loginUserSubject.asObservable();
    }

    public get loginUserValue(): User {
      return this.loginUserSubject.value;
    }

    login(username, password) {
      return this.http.post<any>(environment.userAuthenticate, { username, password })
        .pipe(map(user => {
          this.storageService.setSessionStorage('user', user);
          return user;
        }));
    }

    logout() {
      this.storageService.finishSessionStorage('user');
      this.router.navigate(['/login']);
    }

}
