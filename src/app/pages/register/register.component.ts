import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService } from '../../services/storage/storage.service';
import { AuthenticationService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  public loadingFull = false;
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }


  get f() { return this.registerForm.controls; }

  public onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    if (!this.passwordMatchValidator(this.registerForm)) {
      this.message = [];
      this.message.push({severity:'error', detail: this._translateService.instant('register.matchPassword.description')});
      return;
    }

    this.loadingFull = true;

    this.subscriptions.push(
      this._authenticationService.register(this.f.username.value, this.f.password.value)
        .subscribe(
          user => {
            this._storageService.setSessionStorage('user', user);
            this.router.navigateByUrl('/searcher');
            this.loadingFull = false;
          },
          error => {
            // TODO: Refactor (interceptor)
            const username = this.f.username.value;
            const msgDescription = error === 401 ? this._translateService.instant('register.messages.error.description', {username}) : this._translateService.instant('messages.error.description');
            this.message = [];
            this.message.push({severity:'error', detail: msgDescription});
            this.loadingFull = false;
          }
        )
      )
    }

    private passwordMatchValidator(formControl: FormGroup) {
      const password: string = formControl.get('password').value;
      const confirmPassword: string = formControl.get('confirmPassword').value;

      if (password !== confirmPassword) {
        return false;
      }
      return true;
    }

    ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

}
