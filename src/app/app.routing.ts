import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AuthenticatorTemplateComponent } from './template/authenticator-template.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'authen',
  pathMatch: 'full'
  },

{
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Angular Admin Template'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    }
  ]
},
{
  path: 'authen',
  component: AuthenticatorTemplateComponent,
  data: {
    title: 'User'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./authenticator/authenticator.module').then(m => m.AuthenticatorModule),
    },
    {
      path: 'sign-up',
      loadChildren: () => import('./authenticator/authenticator.module').then(m => m.AuthenticatorModule),
    },
    
    
  ]
},
{
  path: 'tables',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Tables'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, 
{
  path: '**',
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
