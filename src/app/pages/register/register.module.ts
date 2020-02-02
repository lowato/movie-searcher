import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterLayoutComponent } from '../../layout/register-layout/register-layout.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterLayoutComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
