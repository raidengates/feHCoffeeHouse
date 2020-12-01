import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from '../account.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "user-manager",
    data: {
      // title: 'User Manager'
    },
  },
  {
    path: "user-manager",
    pathMatch: "full",
    component: AccountComponent,
    data: {
      title: "User Manager",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
