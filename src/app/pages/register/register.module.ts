import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { HttpLoaderFactory } from '../login/login.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RegisterRoutingModule } from './register-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../../components/header/header.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PipesModule } from '../../pipes/pipes.module';
import { RegisterLayoutComponent } from '../../layout/register-layout/register-layout.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterLayoutComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
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
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    PipesModule,
    HeaderModule,
    RouterModule
  ]
})
export class RegisterModule { }
