import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  isLogin() {
    return this.authenticationService.loginUserValue;
  }

  logout() {
    this.authenticationService.logout();
  }

}
