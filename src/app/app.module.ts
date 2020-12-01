import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { AuthenticatorTemplateComponent } from './template/authenticator-template.component';
import { ValidationService } from './service/validation.service';
import { AuthGuard } from './service/auth-guard.service';
import { RoleGuard } from './service/role-guard.service';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    AuthenticatorTemplateComponent,
    NavigationComponent,


    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [
    ValidationService, 
    DataService,
    AuthGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
