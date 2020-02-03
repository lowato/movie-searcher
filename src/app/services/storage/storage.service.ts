import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Movie } from '../../models/response-by-search.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setSessionStorage(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getSessionStorage(key: string): User {
    return key in sessionStorage ? JSON.parse(sessionStorage.getItem(key)) : false;
  }

  public finishSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  public setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getLocalStorage(key: string): Movie[] {
    return key in localStorage ? JSON.parse(localStorage.getItem(key)) : [];
  }

  public removeLocalStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

}
