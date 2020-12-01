import { SignInComponent } from './../signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
    data: {
      title: 'sign in'
    }
  },
  {
    path: 'sign-in',
    pathMatch: 'full',
    component: SignInComponent,
    data: {
      title: 'sign in'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatorRoutingModule { }