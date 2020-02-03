import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';

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

  public isLogin(): User {
    return this.authenticationService.loginUserValue;
  }

  public logout(): void {
    this.authenticationService.logout();
  }

}
