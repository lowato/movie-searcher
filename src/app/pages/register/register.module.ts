import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterLayoutComponent } from '../../layout/register-layout/register-layout.component';
import { UpperCaseFirstLetterPipe } from '../../pipes/upper-case-first-letter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../login/login.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { LoadingComponent } from '../../components/loading/loading.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterLayoutComponent,
    UpperCaseFirstLetterPipe,
    LoadingComponent
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
  ]
})
export class RegisterModule { }
