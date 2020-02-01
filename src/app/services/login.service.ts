import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiKey = 'api';

  constructor() { }

  public setApiKey(value) {
    sessionStorage.setItem(this.apiKey, JSON.stringify(value));
  }

  public getApiKey() {
    return this.apiKey in sessionStorage ? JSON.parse(sessionStorage.getItem(this.apiKey)) : false;
  }

  public deleteApiKey() {
    sessionStorage.removeItem(this.apiKey);
  }
}
