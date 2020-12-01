import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin.component';



import { AuthenticatorRoutingModule } from './authenticator-routing/authenticator-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'app/service/shared.service';
import { DataService } from 'app/service/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AuthenticatorRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [ 
      SignInComponent
     
     ],
  providers:[

    SharedService,
  ]
})
export class AuthenticatorModule { }