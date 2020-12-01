import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  constructor(private _authService: AuthService) { 
  }

  setToken(val:string){
    if(!val){
      throw new Error('Token has been empty!'); 
    }
    this._authService.login(val);
  }

  setLogout():void{
    this._authService.logout();
  }

  getHttpHeaders() : HttpHeaders {
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
      });
      if(this._authService.isAuthenticated){
        httpHeaders.set('Authorization', this._authService.token);
      }
      return httpHeaders;
  }
}
