import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor(
    private router: Router,
    public _authenticationService: AuthenticationService,
  ) {}

  canActivate(): boolean {
    const currentUser = this._authenticationService.loginUserValue;
    if (currentUser) {
      this.router.navigateByUrl('/searcher');
      return false;
    }
    return true;
  }

}

@Injectable({
  providedIn: 'root'
})
export class GuardSearchService implements CanActivate {

  constructor(public authenticationService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.authenticationService.loginUserValue;
    if (currentUser) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}
