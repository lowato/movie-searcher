import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from '../../layout/login-layout/login-layout.component';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UpperCaseFirstLetterPipe } from '../../pipes/upper-case-first-letter.pipe';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginComponent,
    UpperCaseFirstLetterPipe
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class LoginModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
