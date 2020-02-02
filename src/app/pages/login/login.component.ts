import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Message } from 'primeng//api';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loadingFull = true;
  public submitted = false;
  public message: Message[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private translateService: TranslateService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loadingFull = false;
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loadingFull = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        user => {
          this.storageService.setSessionStorage('user', user);
          this.router.navigateByUrl('/searcher');
        },
        error => {
          const msgTitle = error === 401 ? 'login.messages.error.title' : 'messages.error.title';
          const msgDescription = error === 401 ? 'login.messages.error.description' : 'messages.error.description';
          this.message = [];
          this.message.push({severity:'error', summary: this.translateService.instant(msgTitle), detail: this.translateService.instant(msgDescription)});
          this.loadingFull = false;
        }
      );
    }
}
