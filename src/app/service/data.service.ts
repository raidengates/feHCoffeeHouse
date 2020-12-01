import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';

import { throwError, Observable, from } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { User } from 'app/models/users';
import {Credentials} from 'app/models/credentials';
import { SharedService } from './shared.service';

// import { Product } from './product';
// import { Policy } from './policy';
// import { Account as MyAccount } from './account';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://171.244.188.81:7878';

  public first: string = '';
  public prev: string = '';
  public next: string = '';
  public last: string = '';

  constructor(private httpClient: HttpClient, private service: SharedService) {}

  ///Đăng ký hoặc thêm tài khoản
  public sendSignUp(user: User): Observable<User> {
    const options = {
      headers: this.service.getHttpHeaders()
    };   
    return this.httpClient.post<User>(`${this.REST_API_SERVER}/users/signup`, user, options);
  }


  public sendLogin(credentials: Credentials):Observable<string>{
    const options = {
      headers: this.service.getHttpHeaders()
    };
    
    return this.httpClient.post<string>(`${this.REST_API_SERVER}/users/login`, {
      "username":credentials.username,"password":credentials.password
    }, options);
  }

  public sendLogout(): void{
    this.service.setLogout();
  }

  public setToken(token:string)
  {
    this.service.setToken(token);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unkown error!';
    if (error.error instanceof ErrorEvent) {
      // client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach((p) => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });

    this.first = links['first'];
    this.last = links['last'];
    this.prev = links['prev'];
    this.next = links['next'];
  }

  
}
