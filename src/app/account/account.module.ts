import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'app/service/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountRoutingModule } from './account-routing/account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
    imports: [
      AccountRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
  
    ],
    declarations: [ 
        AccountComponent
       ],
    providers:[
      SharedService,
    ]
  })
export class AccountModule { }