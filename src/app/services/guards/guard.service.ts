import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../../../node_modules/@angular/router';
import { AuthenticationService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService, private router: Router) {}

  canActivate() {
    const currentUser = this.authenticationService.loginUserValue;
    if (currentUser) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }

}
