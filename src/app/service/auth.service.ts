import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private _router: Router) { }

  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

 
  isTokenExpired(): boolean {
    return false;
  }

  login(token:string): void {
    localStorage.setItem('token', token);
    this._router.navigate(['/dashboard']);
  }

  /**
   * this is used to clear local storage and also the route to login
   */
  logout(): void {
    this.clear();
    this._router.navigate(['/authen/sign-in']);
  }

  get token():string {return localStorage.getItem('token')}


  // token():string {return localStorage.getItem('token')}

  decode() {
    return decode(localStorage.getItem('token'));
  }
}