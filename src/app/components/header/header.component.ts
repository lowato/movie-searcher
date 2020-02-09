import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

import { AuthenticationService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navbarOpen = false;

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public isLogin(): User {
    return this._authenticationService.loginUserValue;
  }

  public logout(): void {
    this._authenticationService.logout();
  }

}
