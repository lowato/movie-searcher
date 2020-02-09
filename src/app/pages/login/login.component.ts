import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'primeng//api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService } from '../../services/storage/storage.service';
import { AuthenticationService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  public loadingFull = true;
  public submitted = false;
  public message: Message[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _storageService: StorageService,
    private _translateService: TranslateService,
    private _authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loadingFull = false;
  }

  get f() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loadingFull = true;
    this.subscriptions.push(
      this._authenticationService.login(this.f.username.value, this.f.password.value)
        .subscribe(
          user => {
            this._storageService.setSessionStorage('user', user);
            this.router.navigateByUrl('/searcher');
            this.loadingFull = false;
          },
          error => {
            // TODO: Refactor (interceptor)
            const msgDescription = error === 401 ? 'login.messages.error.description' : 'messages.error.description';
            this.message = [];
            this.message.push({severity:'error', detail: this._translateService.instant(msgDescription)});
            this.loadingFull = false;
          }
        )
      )
    }

    ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

  }
