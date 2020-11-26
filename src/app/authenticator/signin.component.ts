import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  sign_in_btn:string = "#sign-in-btn";
  sign_up_btn:string = "#sign-up-btn";
  container:string = ".container";

  constructor(@Inject(DOCUMENT) document) {
    
 }
  ngOnInit() {
  }


  clickSignUp(){
    const container = document.getElementById('authen_container');
    container.classList.add("sign-up-mode");
  }

  clickSignin(){
    const container = document.getElementById('authen_container');
    container.classList.remove("sign-up-mode");
  }

}
