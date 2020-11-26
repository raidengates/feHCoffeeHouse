import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin.component';

import { AuthenticatorRoutingModule } from './authenticator-routing/authenticator-routing.module';

@NgModule({
  imports: [
    AuthenticatorRoutingModule
  ],
  declarations: [ SignInComponent ]
})
export class AuthenticatorModule { }