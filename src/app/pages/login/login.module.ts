import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginRoutingModule } from './login-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../../components/header/header.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { PipesModule } from '../../pipes/pipes.module';

import { LoginComponent } from './login.component';
import { LoginLayoutComponent } from '../../layout/login-layout/login-layout.component';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    }),
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    PipesModule,
    HeaderModule,
    RouterModule
  ],
  providers: [
    TranslateService
  ]
})
export class LoginModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
