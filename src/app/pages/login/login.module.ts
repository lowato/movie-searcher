import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from '../../layout/login-layout/login-layout.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
