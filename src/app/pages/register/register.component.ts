import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Message } from 'primeng//api';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loadingFull = false;
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    this.loadingFull = true;
    this.authenticationService.register(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        user => {
          this.storageService.setSessionStorage('user', user);
          this.router.navigateByUrl('/searcher');
          this.loadingFull = false;
        },
        error => {
          const username = this.f.username.value;
          const msgTitle = error === 401 ? 'register.messages.error.title' : 'messages.error.title';
          const msgDescription = error === 401 ? this.translateService.instant('register.messages.error.description', {username}) : this.translateService.instant('messages.error.description');
          this.message = [];
          this.message.push({severity:'error', summary: this.translateService.instant(msgTitle), detail: msgDescription});
          this.loadingFull = false;
        }
      );
    }

}
