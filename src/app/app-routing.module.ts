import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UsersComponent } from './users/users.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/guest', pathMatch: 'full' },
  { path: 'guest', component: GuestPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
  constructor() { }
}
