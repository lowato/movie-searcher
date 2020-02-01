import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../../../node_modules/@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsLoginService implements CanActivate {

  constructor(public user: LoginService, private _router: Router) {}

  canActivate() {
    const apiKey = this.user.getApiKey();
    if (apiKey) {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class GuardsCheckIsLoginService implements CanActivate {

  constructor(public user: LoginService, private _router: Router) {}

  canActivate() {
    const apiKey = this.user.getApiKey();
    if (apiKey) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

}
