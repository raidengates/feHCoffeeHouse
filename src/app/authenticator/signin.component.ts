import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { FormBuilder, Validators  } from '@angular/forms';
import {Credentials} from 'app/models/credentials';
import { DataService } from 'app/service/data.service';
import {  catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ToastService } from 'app/service/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  sign_in_btn:string = "#sign-in-btn";
  sign_up_btn:string = "#sign-up-btn";
  container:string = ".container";

  loginForm: any;
  resetForm:any;
  credentials:Credentials= {username:'', email:'', password:''};

  toasts: any[] = [];



  constructor(
    @Inject(DOCUMENT) document, 
    private formBuilder: FormBuilder,
    private dbs : DataService,
    public toastService: ToastService
    
    ) {
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.resetForm = this.formBuilder.group({
      email: ['', Validators.email]
    });
   }
  ngOnInit() {
  }

  
  loginUser(){
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.credentials.username = this.loginForm.value.username;
      this.credentials.password = this.loginForm.value.password;

      this.dbs.sendLogin(this.credentials).pipe(catchError(this.handleError)).subscribe(rs =>  {
        
        this.dbs.setToken(rs);

      });
    }
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
    let Message = `status: ${error.status} - ${error.statusText} \n`
    window.alert(Message);
    return throwError(errorMessage);
  }

  resetUser(){
    if (this.resetForm.dirty && this.resetForm.valid) {


      // alert(
      //   `Name: ${this.loginForm.value.username} Email: ${this.loginForm.value.password}`
      // );
    }
  }

  clickReset(){
    const container = document.getElementById('authen_container');
    container.classList.add("sign-up-mode");
  }

  clickSignin(){
    const container = document.getElementById('authen_container');
    container.classList.remove("sign-up-mode");
  }


}
