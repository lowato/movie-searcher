import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getSessionStorage(key) {
    return key in sessionStorage ? JSON.parse(sessionStorage.getItem(key)) : false;
  }

  public finishSessionStorage(key) {
    sessionStorage.removeItem(key);
  }

  public setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getLocalStorage(key) {
    return key in localStorage ? JSON.parse(localStorage.getItem(key)) : [];
  }

  public removeLocalStorage(key) {
    sessionStorage.removeItem(key);
  }

}
